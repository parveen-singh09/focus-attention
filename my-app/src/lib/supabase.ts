

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined;

function looksReal(v: string | undefined): v is string {
	return !!v && v.length > 0 && !v.startsWith("your-") && !v.includes("your-project-ref");
}

export const isConfigured = looksReal(url) && looksReal(anonKey);

export const supabase: SupabaseClient | null = isConfigured
	? createClient(url!, anonKey!, {
			auth: {
				persistSession: true,
				autoRefreshToken: true,
				detectSessionInUrl: true, 
			},
		})
	: null;
