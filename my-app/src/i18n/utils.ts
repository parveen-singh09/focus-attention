import type { Lang } from "./ui";
import { LOCALES, defaultLang, isLang, dirFor } from "./ui";
import { getContent } from "./content";

export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split("/");
	if (maybeLang && isLang(maybeLang) && maybeLang !== defaultLang) return maybeLang;
	return defaultLang;
}

export function stripLangPrefix(pathname: string): string {
	const segments = pathname.split("/"); 
	if (segments[1] && isLang(segments[1]) && segments[1] !== defaultLang) {
		const rest = "/" + segments.slice(2).join("/");
		return rest === "/" ? "/" : rest.replace(/\/$/, "");
	}
	return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}

export function translatePath(route: string, lang: Lang): string {
	const clean = route === "/" ? "/" : "/" + route.replace(/^\/+/, "").replace(/\/$/, "");
	if (lang === defaultLang) return clean;
	return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

export function switchLocalePath(url: URL, lang: Lang): string {
	return translatePath(stripLangPrefix(url.pathname), lang);
}

export function useTranslations(lang: Lang) {
	return getContent(lang);
}

export function fill(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, k) =>
		k in vars ? String(vars[k]) : `{${k}}`,
	);
}

export { LOCALES, defaultLang, dirFor };
