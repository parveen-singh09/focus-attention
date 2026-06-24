// i18n core: the list of supported languages, their native labels, text
// direction, and the TypeScript shape every locale's content object must
// satisfy. English (see content/en.ts) is the canonical source of truth;
// every other locale provides a complete translation of the same shape.

// Locale codes — must match astro.config.mjs `i18n.locales` and the files in
// src/i18n/content/ and src/i18n/words/.
export const LOCALES = [
	"en", "es", "fr", "de", "it", "pt", "nl", "ru", "pl", "tr",
	"ar", "hi", "bn", "zh", "ja", "ko", "vi", "th", "id", "uk",
] as const;

export type Lang = (typeof LOCALES)[number];

export const defaultLang: Lang = "en";

// Native language names, shown in the header language picker. Each label is
// written as a speaker of that language would expect to read it.
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

// Right-to-left locales. Drives <html dir> and a few layout overrides.
export const RTL_LANGS: ReadonlySet<Lang> = new Set<Lang>(["ar"]);

export function isLang(value: string): value is Lang {
	return (LOCALES as readonly string[]).includes(value);
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
	return RTL_LANGS.has(lang) ? "rtl" : "ltr";
}

// BCP-47 tag for the <html lang> attribute. Most locale codes are already
// valid tags; a couple want a region/script subtag for correctness.
export const HTML_LANG: Record<Lang, string> = {
	en: "en", es: "es", fr: "fr", de: "de", it: "it", pt: "pt", nl: "nl",
	ru: "ru", pl: "pl", tr: "tr", ar: "ar", hi: "hi", bn: "bn",
	zh: "zh-CN", ja: "ja", ko: "ko", vi: "vi", th: "th", id: "id", uk: "uk",
};

// ============================================================
// Content shape — the full set of translatable strings. HTML-bearing fields
// are noted; they are rendered with set:html and must stay valid HTML.
// ============================================================

export interface FaqItem {
	/** Question, plain text. */
	q: string;
	/** Answer, HTML (rendered with set:html). */
	a: string;
}

export interface SeoSection {
	/** Section heading, plain text. */
	h: string;
	/** Body, HTML (rendered with set:html, may contain <strong>). */
	body: string;
}

export interface SiteContent {
	// ---- per-page meta ----
	meta: {
		indexTitle: string;
		indexDescription: string;
		indexKeywords: string;
		notFoundTitle: string;
		notFoundDescription: string;
		errorTitle: string;
		errorDescription: string;
	};

	// ---- game ----
	game: {
		// setup
		eyebrow: string; // "The focus game"
		titleLine1: string; // "Hold The Words"
		titleLine2: string; // "Measure Your Focus"
		intro: string;
		introRecallTail: string; // "recall the sequence." (kept on its own line)
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
		paceLabel: string; // "How often a new word appears"
		durationTooShort: string; // "Hold must be at least {n} seconds" — {n} placeholder
		durationTooLong: string; // "Hold cannot exceed 12 hours"
		paceOutOfRange: string; // "Pace must be between 1 second and 3 minutes"
		begin: string;

		// watch
		wordSingular: string; // "word"
		wordPlural: string; // "words"
		endEarly: string; // "End early & recall now"

		// recall
		recallEyebrow: string; // "Recall"
		recallHeading: string; // "Tap the words in the order they appeared."
		leftToRecall: string; // "{clock} left to recall" — {clock} placeholder
		chosenSoFar: string; // "Chosen sequence so far · {n} of {m}" — {n} {m}
		tapWordsYouSaw: string; // "Tap the words you saw"

		// result
		resultEyebrow: string; // "Your results"
		attentionSpan: string; // "Attention span"
		attentionHint: string; // "time you held focus"
		focus: string; // "Focus"
		focusDetail: string; // "{span} of {total} {wordUnit} in order" — {span} {total} {wordUnit}
		theSequence: string; // "The sequence"
		playAgain: string;
		changeDuration: string;
		youTapped: string; // "You tapped \"{word}\"" — {word}
	};

	// ---- error pages (404 / 500) ----
	errors: {
		notFoundEyebrow: string; // "Error 404"
		notFoundHeading: string;
		notFoundLead: string;
		backToGame: string;
		errorEyebrow: string; // "Error 500"
		errorHeading: string;
		errorLead: string;
		tryAgain: string;
	};

	// ---- header / chrome (read by client scripts via a data-i18n blob) ----
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
		// leaderboard panel
		worldRanking: string;
		rankedBy: string; // "By Max words recalled, Attention span, Recalling time"
		loading: string;
		noScores: string; // "No scores yet. Be the first."
		players: string; // "{n} players" — {n}
		showMore: string;
		loginToCompete: string;
		finishToClaim: string; // "Finish a round to claim your spot."
		yourRank: string; // "You're #{rank} of {total}." — {rank} {total}
		yourRankMetrics: string; // "You're #{rank} of {total} · {metrics}" — {rank} {total} {metrics}
		yourWorldRanking: string; // badge title "Your world ranking"
		boardNotSetUp: string; // "Leaderboard isn't set up yet."
		wordsUnit: string; // "w" in "12w"
	};

	// ---- footer ----
	footer: {
		home: string;
		about: string;
		contact: string;
		privacy: string;
		terms: string;
		tagline: string;
		rights: string; // "© {year} attentivebrain. All rights reserved." — {year}
	};

	// ---- landing SEO copy (index only) ----
	landing: {
		heading: string; // "How to Increase Focus and Attention Span"
		intro: string; // HTML
		sections: SeoSection[]; // 5 sections
		faqHeading: string; // "Frequently asked questions"
		faqs: FaqItem[]; // 6 items
	};
}
