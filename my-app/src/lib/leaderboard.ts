// Leaderboard helpers — thin wrappers over the Supabase client.
//
// Every function is a safe no-op when the backend isn't configured, so the
// header/game can call them unconditionally. Ranking everywhere follows the
// single rule: words desc → attention_sec desc → recall_sec asc.

import { supabase, isConfigured } from "./supabase";
import type { Session } from "@supabase/supabase-js";

export interface ScoreInput {
	words: number;
	attentionSec: number;
	recallSec: number;
	displayName?: string; // optional override; defaults to the provider name
}

export interface LeaderboardRow {
	rank: number;
	userId: string;
	displayName: string;
	words: number;
	attentionSec: number;
	recallSec: number;
}

export interface MyRank {
	row: LeaderboardRow;
	total: number;
}

// ---- auth ----

export async function getSession(): Promise<Session | null> {
	if (!supabase) return null;
	const { data } = await supabase.auth.getSession();
	return data.session;
}

// Returns an unsubscribe function. No-op (returns a noop unsub) when unconfigured.
export function onAuthChange(cb: (session: Session | null) => void): () => void {
	if (!supabase) return () => {};
	const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(session));
	return () => data.subscription.unsubscribe();
}

export async function signInWithGoogle(): Promise<void> {
	if (!supabase) return;
	await supabase.auth.signInWithOAuth({
		provider: "google",
		options: { redirectTo: window.location.origin },
	});
}

export async function signOut(): Promise<void> {
	if (!supabase) return;
	await supabase.auth.signOut();
}

// Best display name available from a Google session.
export function displayNameFromSession(session: Session | null): string {
	const meta = session?.user?.user_metadata as Record<string, unknown> | undefined;
	const name =
		(meta?.full_name as string) ||
		(meta?.name as string) ||
		session?.user?.email ||
		"Player";
	return String(name);
}

// ---- scores ----

// Submit a finished best. No-op unless configured AND signed in. The server
// only overwrites the stored row when this score actually wins (submit_score).
export async function submitBest(score: ScoreInput): Promise<void> {
	if (!supabase) return;
	const session = await getSession();
	if (!session) return;
	await supabase.rpc("submit_score", {
		p_words: Math.max(0, Math.round(score.words)),
		p_attention_sec: Math.max(0, Math.round(score.attentionSec)),
		p_recall_sec: Math.max(0, Math.round(score.recallSec)),
		p_display_name: score.displayName ?? displayNameFromSession(session),
	});
}

function mapRow(r: Record<string, unknown>): LeaderboardRow {
	return {
		rank: Number(r.rank),
		userId: String(r.user_id),
		displayName: String(r.display_name),
		words: Number(r.words),
		attentionSec: Number(r.attention_sec),
		recallSec: Number(r.recall_sec),
	};
}

// Top N rows of the world ranking.
export async function fetchTop(limit = 10): Promise<LeaderboardRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase
		.from("leaderboard")
		.select("rank, user_id, display_name, words, attention_sec, recall_sec")
		.order("rank", { ascending: true })
		.limit(limit);
	if (error || !data) return [];
	return data.map(mapRow);
}

// The signed-in user's own ranked row + the total number of ranked players,
// for "#142 of 3,408". Returns null if the user has no score yet.
export async function fetchMyRank(userId: string): Promise<MyRank | null> {
	if (!supabase) return null;

	const [{ data: mine }, { count }] = await Promise.all([
		supabase
			.from("leaderboard")
			.select("rank, user_id, display_name, words, attention_sec, recall_sec")
			.eq("user_id", userId)
			.maybeSingle(),
		supabase.from("scores").select("user_id", { count: "exact", head: true }),
	]);

	if (!mine) return null;
	return { row: mapRow(mine), total: Number(count ?? 0) };
}

export { isConfigured };
