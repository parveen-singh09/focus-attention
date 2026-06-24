import type { SiteContent } from "../ui";

// English — the canonical source of truth. Every other locale in this folder
// is a complete translation of this exact shape. When adding or changing a
// translatable string anywhere on the site, change it here first; TypeScript
// then flags every other locale that is now missing the key.
export const en: SiteContent = {
	meta: {
		indexTitle:
			"How to Increase Focus & Attention Span — Free Brain Game | attentivebrain",
		indexDescription:
			"Learn how to increase focus, attention span, and memory with a free brain game. Watch words appear, hold the sequence, then recall it — the best game to train focus and improve memory.",
		indexKeywords:
			"how to increase focus, how to increase focus and attention span, how to increase focus and memory, best game to increase focus, how to improve memory, brain game, attention span, focus training, memory game, concentration game",
		notFoundTitle: "Page not found (404) — attentivebrain",
		notFoundDescription:
			"The page you were looking for could not be found. Head back and train your focus instead.",
		errorTitle: "Something went wrong (500) — attentivebrain",
		errorDescription: "An unexpected error occurred on our end. Try again in a moment.",
	},

	game: {
		eyebrow: "The focus game",
		titleLine1: "Hold The Words",
		titleLine2: "Measure Your Focus",
		intro:
			"A new word appears at the pace you choose. Keep them in order in your mind. When the timer ends,",
		introRecallTail: "recall the sequence.",
		chooseDuration: "Choose how long to hold your attention",
		presets: {
			s10: "10 sec",
			s20: "20 sec",
			s30: "30 sec",
			m1: "1 min",
			m3: "3 min",
			m5: "5 min",
		},
		customTime: "Or set a custom time",
		unitHours: "hours",
		unitMin: "min",
		unitSec: "sec",
		paceLabel: "How often a new word appears",
		durationTooShort: "Hold must be at least {n} seconds",
		durationTooLong: "Hold cannot exceed 12 hours",
		paceOutOfRange: "Pace must be between 1 second and 3 minutes",
		begin: "Begin",

		wordSingular: "word",
		wordPlural: "words",
		endEarly: "End early & recall now",

		recallEyebrow: "Recall",
		recallHeading: "Tap the words in the order they appeared.",
		leftToRecall: "{clock} left to recall",
		chosenSoFar: "Chosen sequence so far · {n} of {m}",
		tapWordsYouSaw: "Tap the words you saw",

		resultEyebrow: "Your results",
		attentionSpan: "Attention span",
		attentionHint: "time you held focus",
		focus: "Focus",
		focusDetail: "{span} of {total} {wordUnit} in order",
		theSequence: "The sequence",
		playAgain: "Play again",
		changeDuration: "Change duration",
		youTapped: 'You tapped "{word}"',
	},

	errors: {
		notFoundEyebrow: "Error 404",
		notFoundHeading: "This page wandered off.",
		notFoundLead:
			"The link is broken or the page has moved. It happens to the best of us — even with perfect focus.",
		backToGame: "Back to the game",
		errorEyebrow: "Error 500",
		errorHeading: "Something broke on our end.",
		errorLead:
			"This one is on us, not you. The page hit an unexpected error — give it a moment and try again.",
		tryAgain: "Try again",
	},

	header: {
		account: "Account",
		leaderboard: "Leaderboard",
		language: "Language",
		toggleTheme: "Toggle dark theme",
		editName: "Edit name",
		displayName: "Display name",
		save: "Save",
		bestScore: "Best score",
		loginToTrack: "Log in to track your best.",
		changePhoto: "Change photo",
		uploading: "Uploading…",
		login: "Log in",
		logout: "Log out",
		anonymous: "Anonymous",
		worldRanking: "World ranking",
		rankedBy: "By Max words recalled, Attention span, Recalling time",
		loading: "Loading…",
		noScores: "No scores yet. Be the first.",
		players: "{n} players",
		showMore: "Show more",
		loginToCompete: "Log in to compete",
		finishToClaim: "Finish a round to claim your spot.",
		yourRank: "You're #{rank} of {total}.",
		yourRankMetrics: "You're #{rank} of {total} · {metrics}",
		yourWorldRanking: "Your world ranking",
		boardNotSetUp: "Leaderboard isn't set up yet.",
		wordsUnit: "w",
	},

	footer: {
		home: "Home",
		about: "About us",
		contact: "Contact us",
		privacy: "Privacy policy",
		terms: "Terms & conditions",
		tagline: "attentivebrain.com — train your attention span, one sequence at a time.",
		rights: "© {year} attentivebrain. All rights reserved.",
	},

	landing: {
		heading: "How to Increase Focus and Attention Span",
		intro:
			"attentivebrain is a free brain game built to answer one of the most common questions people ask today: <strong>how to increase focus</strong> in a world engineered for distraction. Instead of another article full of tips, it gives you a measurable way to train and track your concentration — one short session at a time.",
		sections: [
			{
				h: "The best game to increase focus",
				body: "The rules are simple, which is exactly why it works. A new everyday word appears at a pace you choose. Your only job is to hold the sequence in your mind, in order, until the timer ends. Then you recall it. That single loop — watch, hold, recall — is a focused-attention exercise, and it turns out to be the <strong>best game to increase focus</strong> precisely because it removes everything else. There is no scoring gimmick, no flashing reward, nothing to grab your attention away from the task. Just you and the words. Most people are surprised how quickly their mind wants to wander, and how much steadier it gets with practice.",
			},
			{
				h: "How to increase focus and attention span",
				body: "Attention is trainable. Like a muscle, your <strong>attention span</strong> responds to deliberate, repeated effort — and it shrinks when it is never challenged. attentivebrain lets you start with a ten-second hold and gradually stretch to minutes or even hours as you improve. By increasing the duration a little at a time, you are practising exactly <strong>how to increase focus and attention span</strong> in a way that is concrete and honest: the timer doesn't lie. The game reports your real attention span as the length of time you actually held your concentration, so progress is something you can see rather than guess at.",
			},
			{
				h: "How to increase focus and memory together",
				body: "Focus and memory are two sides of the same coin — you cannot remember what you never properly attended to. Because the game asks you to recall the sequence in the correct order, it trains working memory and concentration in the same breath. If you have been looking for <strong>how to increase focus and memory</strong> without dry flashcards or subscriptions, this is a genuinely enjoyable alternative. Each round is a small, self-contained test of <strong>how to improve memory</strong> under mild time pressure, which is the kind of practice that transfers to everyday tasks like reading, studying, and holding a conversation without losing the thread.",
			},
			{
				h: "A brain game with no fluff",
				body: "Plenty of apps promise a smarter you. attentivebrain is a deliberately minimal <strong>brain game</strong>: it runs free in your browser, needs no download, and respects your time. Choose how long you want to focus and how often a new word appears, then begin. When the timer ends, rebuild the sequence from a clean, alphabetically sorted list so the challenge stays on memory and order — not on hunting for a word. You get two clear metrics: your attention span (how long you held focus) and your focus score (the percentage of the sequence you rebuilt correctly).",
			},
			{
				h: "Build the habit",
				body: "The honest answer to <strong>how to increase focus</strong> is consistency. A few deliberate minutes a day beats an occasional marathon. Play a quick round between tasks, push your duration a little further each week, and watch your numbers climb on the leaderboard. Whether you are a student preparing for exams, a professional fighting a noisy inbox, or simply someone who wants a sharper mind, this is a small daily ritual that pays off. Start your first round above — it takes ten seconds to find out where your <strong>attention span</strong> stands today.",
			},
		],
		faqHeading: "Frequently asked questions",
		faqs: [
			{
				q: "How can I increase my focus?",
				a: "<p>The most reliable way to <strong>increase focus</strong> is short, deliberate practice repeated often. attentivebrain gives you a single task — watch a sequence of words appear, hold them in order, and recall them when the timer ends. A few minutes a day trains your attention far more than reading another list of tips.</p>",
			},
			{
				q: "How do I increase focus and attention span?",
				a: "<p>Treat your <strong>attention span</strong> like a muscle and challenge it a little more each session. Start with a ten-second hold and gradually stretch to minutes as you improve. Because the game reports the exact length of time you actually concentrated, you can watch your attention span grow instead of guessing at it.</p>",
			},
			{
				q: "Can a game help increase focus and memory?",
				a: "<p>Yes. <strong>Focus and memory</strong> are linked — you cannot remember what you never properly attended to. Each round asks you to recall a word sequence in the correct order, which trains working memory and concentration in the same exercise, with no flashcards or subscriptions.</p>",
			},
			{
				q: "What is the best game to increase focus?",
				a: "<p>The <strong>best game to increase focus</strong> is the one that removes every distraction. attentivebrain has no scoring gimmicks, no flashing rewards, and nothing competing for your attention — just you, the words, and the timer. That deliberate simplicity is exactly what makes it effective.</p>",
			},
			{
				q: "How can I improve my memory?",
				a: "<p>Practise recalling information under mild time pressure. Rebuilding the sequence from a clean, alphabetically sorted list keeps the challenge on memory and order rather than hunting for a word — the kind of practice that transfers to studying, reading, and everyday conversations. That is the simplest way to <strong>improve memory</strong> without dry drills.</p>",
			},
			{
				q: "Is attentivebrain a good brain game?",
				a: "<p>attentivebrain is a deliberately minimal <strong>brain game</strong> that runs free in your browser with no download. You choose your session length and word pace, then get two honest metrics: your attention span (how long you held focus) and your focus score (how much of the sequence you rebuilt correctly).</p>",
			},
		],
	},
};
