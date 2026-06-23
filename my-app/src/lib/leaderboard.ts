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
	avatarUrl?: string; // optional override; defaults to the provider avatar
}

export interface LeaderboardRow {
	rank: number;
	userId: string;
	displayName: string;
	avatarUrl: string | null;
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

// Profile picture URL from a Google session, if any.
export function avatarFromSession(session: Session | null): string | undefined {
	const meta = session?.user?.user_metadata as Record<string, unknown> | undefined;
	return ((meta?.avatar_url as string) || (meta?.picture as string)) || undefined;
}

// ---- profile ----

// Update the signed-in user's display name and/or avatar. Goes through the
// update_profile security-definer RPC — direct writes to `scores` are denied by
// RLS (see migrations). Unlike submit_score (which only writes on a winning
// score), this always persists, so it can be used for profile edits independent
// of gameplay. Pass undefined/empty to leave a field unchanged.
export async function updateProfile(input: { displayName?: string; avatarUrl?: string }): Promise<boolean> {
	if (!supabase) return false;
	const session = await getSession();
	if (!session) return false;

	const { error } = await supabase.rpc("update_profile", {
		p_display_name: input.displayName !== undefined ? input.displayName.trim().slice(0, 40) : null,
		p_avatar_url: input.avatarUrl ?? null,
	});
	if (error) {
		console.error("[leaderboard] updateProfile failed:", error.message);
		return false;
	}
	return true;
}

// Upload an avatar image to the `avatars` storage bucket and return its public
// URL. Requires a public `avatars` bucket with an INSERT/UPDATE policy scoped to
// the user's own folder (path is prefixed with their user id).
export async function uploadAvatar(file: File): Promise<string | null> {
	if (!supabase) return null;
	const session = await getSession();
	if (!session) return null;

	const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
	const path = `${session.user.id}/avatar.${ext || "png"}`;
	const { error } = await supabase.storage
		.from("avatars")
		.upload(path, file, { upsert: true, contentType: file.type || "image/png" });
	if (error) {
		console.error("[leaderboard] uploadAvatar failed:", error.message);
		return null;
	}
	// Cache-bust so a re-upload to the same path shows immediately.
	const { data } = supabase.storage.from("avatars").getPublicUrl(path);
	return data.publicUrl ? `${data.publicUrl}?v=${Date.now()}` : null;
}

// The signed-in user's stored profile (name + avatar) as persisted on their
// row — the source of truth for edits made via updateProfile. Returns null when
// unconfigured, signed out, or the user has no row yet (fall back to the
// provider name/avatar in that case).
export async function fetchMyProfile(): Promise<{ displayName: string; avatarUrl: string | null } | null> {
	if (!supabase) return null;
	const session = await getSession();
	if (!session) return null;
	const { data, error } = await supabase
		.from("scores")
		.select("display_name, avatar_url")
		.eq("user_id", session.user.id)
		.maybeSingle();
	if (error || !data) return null;
	return {
		displayName: String(data.display_name || ""),
		avatarUrl: data.avatar_url ? String(data.avatar_url) : null,
	};
}

// ---- scores ----

// Submit a finished best. No-op unless configured AND signed in. The server
// only overwrites the stored row when this score actually wins (submit_score).
export async function submitBest(score: ScoreInput): Promise<void> {
	if (!supabase) return;
	const session = await getSession();
	if (!session) return;
	const { error } = await supabase.rpc("submit_score", {
		p_words: Math.max(0, Math.round(score.words)),
		p_attention_sec: Math.max(0, Math.round(score.attentionSec)),
		p_recall_sec: Math.max(0, Math.round(score.recallSec)),
		p_display_name: score.displayName ?? displayNameFromSession(session),
		p_avatar_url: score.avatarUrl ?? avatarFromSession(session) ?? null,
	});
	if (error) {
		// Print the Supabase error as plain text so the reason is readable in
		// the console without expanding the object (code/message/details/hint).
		console.error(
			"[leaderboard] submit_score failed:",
			JSON.stringify(
				{ code: error.code, message: error.message, details: error.details, hint: error.hint },
				null,
				2,
			),
		);
	} else {
		console.info("[leaderboard] score submitted");
	}
}

function mapRow(r: Record<string, unknown>): LeaderboardRow {
	return {
		rank: Number(r.rank),
		userId: String(r.user_id),
		displayName: String(r.display_name),
		avatarUrl: r.avatar_url ? String(r.avatar_url) : null,
		words: Number(r.words),
		attentionSec: Number(r.attention_sec),
		recallSec: Number(r.recall_sec),
	};
}

const ROW_COLS = "rank, user_id, display_name, avatar_url, words, attention_sec, recall_sec";

// Top N rows of the world ranking.
export async function fetchTop(limit = 10): Promise<LeaderboardRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase
		.from("leaderboard")
		.select(ROW_COLS)
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
			.select(ROW_COLS)
			.eq("user_id", userId)
			.maybeSingle(),
		supabase.from("scores").select("user_id", { count: "exact", head: true }),
	]);

	if (!mine) return null;
	return { row: mapRow(mine), total: Number(count ?? 0) };
}

// The signed-in user's stored best, sourced from the server (the single source
// of truth per account). Returns null when unconfigured, signed out, or the
// user has no row yet. Used in place of localStorage so a best never bleeds
// across accounts sharing one browser.
export async function fetchMyBest(): Promise<{ words: number; attentionSec: number; recallSec: number } | null> {
	if (!supabase) return null;
	const session = await getSession();
	if (!session) return null;
	const { data, error } = await supabase
		.from("scores")
		.select("words, attention_sec, recall_sec")
		.eq("user_id", session.user.id)
		.maybeSingle();
	if (error || !data) return null;
	return {
		words: Number(data.words) || 0,
		attentionSec: Number(data.attention_sec) || 0,
		recallSec: Number(data.recall_sec) || 0,
	};
}

export { isConfigured };
