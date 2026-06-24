import type { Lang } from "../ui";
import { WORDS as EN_WORDS } from "../../scripts/words";
import { WORDS as ES_WORDS } from "./es";
import { WORDS as DE_WORDS } from "./de";
import { WORDS as FR_WORDS } from "./fr";
import { WORDS as IT_WORDS } from "./it";
import { WORDS as PT_WORDS } from "./pt";
import { WORDS as RU_WORDS } from "./ru";
import { WORDS as NL_WORDS } from "./nl";
import { WORDS as ZH_WORDS } from "./zh";
import { WORDS as PL_WORDS } from "./pl";
import { WORDS as TR_WORDS } from "./tr";
import { WORDS as UK_WORDS } from "./uk";
import { WORDS as AR_WORDS } from "./ar";
import { WORDS as HI_WORDS } from "./hi";
import { WORDS as JA_WORDS } from "./ja";
import { WORDS as KO_WORDS } from "./ko";
import { WORDS as VI_WORDS } from "./vi";
import { WORDS as BN_WORDS } from "./bn";
import { WORDS as ID_WORDS } from "./id";

// Per-locale word pools. Each locale's game draws from its own translated list
// of ~1000 concrete everyday words (a faithful translation of the English pool
// in src/scripts/words.ts). Locale files are added here as they land; any
// locale not yet present falls back to the English pool so the game always
// works.
//
// Kept as one-file-per-locale (not a single giant object) and imported only
// where needed so each page bundles just its own locale's word list.
//
// To add a translated locale: create ./<lang>.ts exporting
// `export const WORDS: readonly string[] = [ ...1000 words... ]`, import it
// here, and add it to this map.
const pools: Partial<Record<Lang, readonly string[]>> = {
	en: EN_WORDS,
	es: ES_WORDS,
	de: DE_WORDS,
	fr: FR_WORDS,
	it: IT_WORDS,
	pt: PT_WORDS,
	ru: RU_WORDS,
	nl: NL_WORDS,
	zh: ZH_WORDS,
	pl: PL_WORDS,
	tr: TR_WORDS,
	uk: UK_WORDS,
	ar: AR_WORDS,
	hi: HI_WORDS,
	ja: JA_WORDS,
	ko: KO_WORDS,
	vi: VI_WORDS,
	bn: BN_WORDS,
	id: ID_WORDS,
};

export function getWords(lang: Lang): readonly string[] {
	return pools[lang] ?? EN_WORDS;
}
