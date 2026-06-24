

import { supabase, isConfigured } from "./supabase";
import type { Session } from "@supabase/supabase-js";

export interface ScoreInput {
	words: number;
	attentionSec: number;
	recallSec: number;
	displayName?: string; 
	avatarUrl?: string; 
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

export async function getSession(): Promise<Session | null> {
	if (!supabase) return null;
	const { data } = await supabase.auth.getSession();
	return data.session;
}

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

export function displayNameFromSession(session: Session | null): string {
	const meta = session?.user?.user_metadata as Record<string, unknown> | undefined;
	const name =
		(meta?.full_name as string) ||
		(meta?.name as string) ||
		session?.user?.email ||
		"Player";
	return String(name);
}

export function avatarFromSession(session: Session | null): string | undefined {
	const meta = session?.user?.user_metadata as Record<string, unknown> | undefined;
	return ((meta?.avatar_url as string) || (meta?.picture as string)) || undefined;
}

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

	const metadata: Record<string, any> = {};
	if (input.displayName !== undefined) {
		metadata.full_name = input.displayName.trim().slice(0, 40);
	}
	if (input.avatarUrl !== undefined) {
		metadata.avatar_url = input.avatarUrl;
	}
	if (Object.keys(metadata).length > 0) {
		await supabase.auth.updateUser({ data: metadata });
	}

	return true;
}

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

	const { data } = supabase.storage.from("avatars").getPublicUrl(path);
	return data.publicUrl ? `${data.publicUrl}?v=${Date.now()}` : null;
}

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

export async function fetchTop(limit = 15, offset = 0): Promise<LeaderboardRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase
		.from("leaderboard")
		.select(ROW_COLS)
		.order("rank", { ascending: true })
		.range(offset, offset + limit - 1);
	if (error || !data) return [];
	return data.map(mapRow);
}

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
