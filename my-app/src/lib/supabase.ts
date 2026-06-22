// Supabase client — single instance shared across the app.
//
// The leaderboard is optional: when the two PUBLIC_ env vars are unset the
// client is null and `isConfigured` is false, so every caller can degrade
// gracefully instead of crashing. The anon key is public by design (security
// lives in RLS + submit_score() on the server, see supabase/migrations).

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;

// Treat the placeholder values from .env.example as "not configured" too, so a
// half-filled .env doesn't try to talk to a fake host.
function looksReal(v: string | undefined): v is string {
	return !!v && v.length > 0 && !v.startsWith("your-") && !v.includes("your-project-ref");
}

export const isConfigured = looksReal(url) && looksReal(anonKey);

export const supabase: SupabaseClient | null = isConfigured
	? createClient(url!, anonKey!, {
			auth: {
				persistSession: true,
				autoRefreshToken: true,
				detectSessionInUrl: true, // completes the OAuth redirect round-trip
			},
		})
	: null;
