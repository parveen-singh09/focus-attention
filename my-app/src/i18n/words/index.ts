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
import { WORDS as TH_WORDS } from "./th";

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
	th: TH_WORDS,
};

export function getWords(lang: Lang): readonly string[] {
	return pools[lang] ?? EN_WORDS;
}
