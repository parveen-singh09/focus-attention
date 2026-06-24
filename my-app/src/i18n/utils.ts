import type { Lang } from "./ui";
import { LOCALES, defaultLang, isLang, dirFor } from "./ui";
import { getContent } from "./content";

// ============================================================
// i18n helpers — adapted from the Astro i18n recipe:
// https://docs.astro.build/en/recipes/i18n/
//
// Routing model (see astro.config.mjs): English is the default locale and is
// served unprefixed at the root (/about, /). Every other locale carries a
// /<lang>/ path prefix (/es/about, /de/). These helpers translate between the
// two so links always stay within the active locale.
// ============================================================

// Read the active locale from a URL's first path segment. Unknown / missing
// segment → the default locale (English at the root).
export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split("/");
	if (maybeLang && isLang(maybeLang) && maybeLang !== defaultLang) return maybeLang;
	return defaultLang;
}

// Strip a leading /<lang> prefix from a pathname, returning the route as it
// exists for the default locale (always starting with "/"). "/es/about" →
// "/about"; "/de" → "/"; "/about" → "/about".
export function stripLangPrefix(pathname: string): string {
	const segments = pathname.split("/"); // ["", "es", "about", ...]
	if (segments[1] && isLang(segments[1]) && segments[1] !== defaultLang) {
		const rest = "/" + segments.slice(2).join("/");
		return rest === "/" ? "/" : rest.replace(/\/$/, "");
	}
	return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}

// Build the path for `route` under `lang`. English (default) is unprefixed;
// other locales get a /<lang> prefix. `route` is a default-locale path that
// always starts with "/" (e.g. "/", "/about").
export function translatePath(route: string, lang: Lang): string {
	const clean = route === "/" ? "/" : "/" + route.replace(/^\/+/, "").replace(/\/$/, "");
	if (lang === defaultLang) return clean;
	return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

// Translate the *current* URL's route into another locale, preserving the
// route. Used by the language picker so switching language keeps you on the
// same page.
export function switchLocalePath(url: URL, lang: Lang): string {
	return translatePath(stripLangPrefix(url.pathname), lang);
}

// A `t(...)` lookup bound to a locale. Returns a typed view of that locale's
// content (English fallback handled inside getContent). Components read fields
// off the returned object directly (e.g. `t.game.begin`); this is simpler and
// type-safe vs. flat dotted keys, and HTML-bearing fields stay strings.
export function useTranslations(lang: Lang) {
	return getContent(lang);
}

// Interpolate {name} placeholders in a template string.
export function fill(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, k) =>
		k in vars ? String(vars[k]) : `{${k}}`,
	);
}

export { LOCALES, defaultLang, dirFor };
