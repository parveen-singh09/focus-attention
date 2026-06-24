

export const LOCALES = [
	"en", "es", "fr", "de", "it", "pt", "nl", "ru", "pl", "tr",
	"ar", "hi", "bn", "zh", "ja", "ko", "vi", "th", "id", "uk",
] as const;

export type Lang = (typeof LOCALES)[number];

export const defaultLang: Lang = "en";

export const languages: Record<Lang, string> = {
	en: "English",
	es: "Español",
	fr: "Français",
	de: "Deutsch",
	it: "Italiano",
	pt: "Português",
	nl: "Nederlands",
	ru: "Русский",
	pl: "Polski",
	tr: "Türkçe",
	ar: "العربية",
	hi: "हिन्दी",
	bn: "বাংলা",
	zh: "中文",
	ja: "日本語",
	ko: "한국어",
	vi: "Tiếng Việt",
	th: "ไทย",
	id: "Bahasa Indonesia",
	uk: "Українська",
};

export const RTL_LANGS: ReadonlySet<Lang> = new Set<Lang>(["ar"]);

export const FLAGS: Record<Lang, string> = {
	en: "🇬🇧",
	es: "🇪🇸",
	fr: "🇫🇷",
	de: "🇩🇪",
	it: "🇮🇹",
	pt: "🇧🇷",
	nl: "🇳🇱",
	ru: "🇷🇺",
	pl: "🇵🇱",
	tr: "🇹🇷",
	ar: "🇸🇦",
	hi: "🇮🇳",
	bn: "🇧🇩",
	zh: "🇨🇳",
	ja: "🇯🇵",
	ko: "🇰🇷",
	vi: "🇻🇳",
	th: "🇹🇭",
	id: "🇮🇩",
	uk: "🇺🇦",
};

export function isLang(value: string): value is Lang {
	return (LOCALES as readonly string[]).includes(value);
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
	return RTL_LANGS.has(lang) ? "rtl" : "ltr";
}

export const HTML_LANG: Record<Lang, string> = {
	en: "en", es: "es", fr: "fr", de: "de", it: "it", pt: "pt", nl: "nl",
	ru: "ru", pl: "pl", tr: "tr", ar: "ar", hi: "hi", bn: "bn",
	zh: "zh-CN", ja: "ja", ko: "ko", vi: "vi", th: "th", id: "id", uk: "uk",
};

export interface FaqItem {

	q: string;

	a: string;
}

export interface SeoSection {

	h: string;

	body: string;
}

export interface SiteContent {

	meta: {
		indexTitle: string;
		indexDescription: string;
		indexKeywords: string;
		notFoundTitle: string;
		notFoundDescription: string;
		errorTitle: string;
		errorDescription: string;
	};

	game: {

		eyebrow: string; 
		titleLine1: string; 
		titleLine2: string; 
		intro: string;
		introRecallTail: string; 
		chooseDuration: string;
		presets: {
			s10: string;
			s20: string;
			s30: string;
			m1: string;
			m3: string;
			m5: string;
		};
		customTime: string;
		unitHours: string;
		unitMin: string;
		unitSec: string;
		paceLabel: string; 
		durationTooShort: string; 
		durationTooLong: string; 
		paceOutOfRange: string; 
		begin: string;

		wordSingular: string; 
		wordPlural: string; 
		endEarly: string; 

		recallEyebrow: string; 
		recallHeading: string; 
		leftToRecall: string; 
		chosenSoFar: string; 
		tapWordsYouSaw: string; 

		resultEyebrow: string; 
		attentionSpan: string; 
		attentionHint: string; 
		focus: string; 
		focusDetail: string; 
		theSequence: string; 
		playAgain: string;
		changeDuration: string;
		youTapped: string; 
	};

	errors: {
		notFoundEyebrow: string; 
		notFoundHeading: string;
		notFoundLead: string;
		backToGame: string;
		errorEyebrow: string; 
		errorHeading: string;
		errorLead: string;
		tryAgain: string;
	};

	header: {
		account: string;
		leaderboard: string;
		language: string;
		toggleTheme: string;
		editName: string;
		displayName: string;
		save: string;
		bestScore: string;
		loginToTrack: string;
		changePhoto: string;
		uploading: string;
		login: string;
		logout: string;
		anonymous: string;

		worldRanking: string;
		rankedBy: string; 
		loading: string;
		noScores: string; 
		players: string; 
		showMore: string;
		loginToCompete: string;
		finishToClaim: string; 
		yourRank: string; 
		yourRankMetrics: string; 
		yourWorldRanking: string; 
		boardNotSetUp: string; 
		wordsUnit: string; 
	};

	footer: {
		home: string;
		about: string;
		contact: string;
		privacy: string;
		terms: string;
		tagline: string;
		rights: string; 
	};

	landing: {
		heading: string; 
		intro: string; 
		sections: SeoSection[]; 
		faqHeading: string; 
		faqs: FaqItem[]; 
	};
}
