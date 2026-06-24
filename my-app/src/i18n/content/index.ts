import type { Lang, SiteContent } from "../ui";
import { defaultLang } from "../ui";
import { en } from "./en";
import { es } from "./es";
import { ar } from "./ar";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import { pt } from "./pt";
import { ru } from "./ru";
import { pl } from "./pl";
import { tr } from "./tr";
import { uk } from "./uk";
import { hi } from "./hi";
import { ja } from "./ja";
import { zh } from "./zh";
import { bn } from "./bn";
import { id } from "./id";
import { ko } from "./ko";
import { vi } from "./vi";

// Per-locale content registry. English is canonical; other locales are added
// here as their translation files land. Any locale not yet present falls back
// to English so the site always builds and renders — a missing translation
// shows English copy rather than breaking the page.
//
// To add a translated locale: create ./<lang>.ts exporting a complete
// `SiteContent`, import it here, and add it to this map.
const content: Partial<Record<Lang, SiteContent>> = {
	en,
	es,
	ar,
	de,
	fr,
	it,
	nl,
	pt,
	ru,
	pl,
	tr,
	uk,
	hi,
	ja,
	zh,
	bn,
	id,
	ko,
	vi,
};

export function getContent(lang: Lang): SiteContent {
	return content[lang] ?? content[defaultLang] ?? en;
}
