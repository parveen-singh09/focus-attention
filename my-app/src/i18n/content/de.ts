import type { SiteContent } from "../ui";

export const de: SiteContent = {
	meta: {
		indexTitle:
			"Konzentration und Aufmerksamkeitsspanne verbessern — Kostenloses Gehirnspiel | attentivebrain",
		indexDescription:
			"Lerne, wie du Konzentration, Aufmerksamkeitsspanne und Gedächtnis mit einem kostenlosen Gehirnspiel verbesserst. Sieh, wie Wörter erscheinen, behalte die Reihenfolge und gib sie dann wieder — das beste Spiel, um die Konzentration zu trainieren und das Gedächtnis zu stärken.",
		indexKeywords:
			"Konzentration verbessern, Aufmerksamkeitsspanne verbessern, Konzentration und Gedächtnis verbessern, bestes Spiel für mehr Konzentration, Gedächtnis verbessern, Gehirnspiel, Aufmerksamkeitsspanne, Konzentrationstraining, Gedächtnisspiel, Konzentrationsspiel",
		notFoundTitle: "Seite nicht gefunden (404) — attentivebrain",
		notFoundDescription:
			"Die gesuchte Seite konnte nicht gefunden werden. Geh zurück und trainiere stattdessen deine Konzentration.",
		errorTitle: "Etwas ist schiefgelaufen (500) — attentivebrain",
		errorDescription: "Auf unserer Seite ist ein unerwarteter Fehler aufgetreten. Versuche es gleich noch einmal.",
	},

	game: {
		eyebrow: "Das Konzentrationsspiel",
		titleLine1: "Behalte Die Wörter",
		titleLine2: "Miss Deine Konzentration",
		intro:
			"Ein neues Wort erscheint im Tempo, das du wählst. Behalte sie der Reihe nach im Kopf. Wenn der Timer endet,",
		introRecallTail: "gib die Reihenfolge wieder.",
		chooseDuration: "Wähle, wie lange du deine Aufmerksamkeit halten möchtest",
		presets: {
			s10: "10 Sek.",
			s20: "20 Sek.",
			s30: "30 Sek.",
			m1: "1 Min.",
			m3: "3 Min.",
			m5: "5 Min.",
		},
		customTime: "Oder lege eine eigene Zeit fest",
		unitHours: "Stunden",
		unitMin: "Min.",
		unitSec: "Sek.",
		paceLabel: "Wie oft ein neues Wort erscheint",
		durationTooShort: "Die Haltezeit muss mindestens {n} Sekunden betragen",
		durationTooLong: "Die Haltezeit darf 12 Stunden nicht überschreiten",
		paceOutOfRange: "Das Tempo muss zwischen 1 Sekunde und 3 Minuten liegen",
		begin: "Beginnen",

		wordSingular: "Wort",
		wordPlural: "Wörter",
		endEarly: "Früher beenden & jetzt wiedergeben",

		recallEyebrow: "Wiedergabe",
		recallHeading: "Tippe die Wörter in der Reihenfolge an, in der sie erschienen.",
		leftToRecall: "{clock} zum Wiedergeben übrig",
		chosenSoFar: "Bisher gewählte Reihenfolge · {n} von {m}",
		tapWordsYouSaw: "Tippe die Wörter an, die du gesehen hast",

		resultEyebrow: "Deine Ergebnisse",
		attentionSpan: "Aufmerksamkeitsspanne",
		attentionHint: "Zeit, in der du die Konzentration gehalten hast",
		focus: "Konzentration",
		focusDetail: "{span} von {total} {wordUnit} in der richtigen Reihenfolge",
		theSequence: "Die Reihenfolge",
		playAgain: "Noch einmal spielen",
		changeDuration: "Dauer ändern",
		youTapped: 'Du hast „{word}“ angetippt',
	},

	errors: {
		notFoundEyebrow: "Fehler 404",
		notFoundHeading: "Diese Seite hat sich verlaufen.",
		notFoundLead:
			"Der Link ist defekt oder die Seite wurde verschoben. Das passiert den Besten — selbst bei perfekter Konzentration.",
		backToGame: "Zurück zum Spiel",
		errorEyebrow: "Fehler 500",
		errorHeading: "Auf unserer Seite ist etwas kaputtgegangen.",
		errorLead:
			"Diesmal liegt es an uns, nicht an dir. Die Seite ist auf einen unerwarteten Fehler gestoßen — warte einen Moment und versuche es erneut.",
		tryAgain: "Erneut versuchen",
	},

	header: {
		account: "Konto",
		leaderboard: "Bestenliste",
		language: "Sprache",
		toggleTheme: "Dunkles Design umschalten",
		editName: "Namen bearbeiten",
		displayName: "Anzeigename",
		save: "Speichern",
		bestScore: "Bestwert",
		loginToTrack: "Melde dich an, um deinen Bestwert zu verfolgen.",
		changePhoto: "Foto ändern",
		uploading: "Wird hochgeladen…",
		login: "Anmelden",
		logout: "Abmelden",
		anonymous: "Anonym",
		worldRanking: "Weltrangliste",
		rankedBy: "Nach max. wiedergegebenen Wörtern, Aufmerksamkeitsspanne, Wiedergabezeit",
		loading: "Wird geladen…",
		noScores: "Noch keine Ergebnisse. Sei der Erste.",
		players: "{n} Spieler",
		showMore: "Mehr anzeigen",
		loginToCompete: "Melde dich an, um mitzumachen",
		finishToClaim: "Beende eine Runde, um deinen Platz zu sichern.",
		yourRank: "Du bist Nr. {rank} von {total}.",
		yourRankMetrics: "Du bist Nr. {rank} von {total} · {metrics}",
		yourWorldRanking: "Deine Weltrangliste",
		boardNotSetUp: "Die Bestenliste ist noch nicht eingerichtet.",
		wordsUnit: "W",
	},

	footer: {
		home: "Startseite",
		about: "Über uns",
		contact: "Kontakt",
		privacy: "Datenschutzerklärung",
		terms: "Allgemeine Geschäftsbedingungen",
		tagline: "attentivebrain.com — trainiere deine Aufmerksamkeitsspanne, eine Reihenfolge nach der anderen.",
		rights: "© {year} attentivebrain. Alle Rechte vorbehalten.",
	},

	landing: {
		heading: "So verbesserst du Konzentration und Aufmerksamkeitsspanne",
		intro:
			"attentivebrain ist ein kostenloses Gehirnspiel, das eine der häufigsten Fragen unserer Zeit beantworten soll: <strong>wie man die Konzentration verbessert</strong> in einer Welt, die auf Ablenkung ausgelegt ist. Statt eines weiteren Artikels voller Tipps gibt es dir eine messbare Möglichkeit, deine Konzentration zu trainieren und zu verfolgen — eine kurze Sitzung nach der anderen.",
		sections: [
			{
				h: "Das beste Spiel für mehr Konzentration",
				body: "Die Regeln sind einfach, und genau deshalb funktioniert es. Ein neues Alltagswort erscheint in dem Tempo, das du wählst. Deine einzige Aufgabe ist es, die Reihenfolge im Kopf zu behalten, der Reihe nach, bis der Timer endet. Dann gibst du sie wieder. Dieser eine Kreislauf — beobachten, behalten, wiedergeben — ist eine Übung für fokussierte Aufmerksamkeit, und sie erweist sich gerade deshalb als das <strong>beste Spiel für mehr Konzentration</strong>, weil sie alles andere wegnimmt. Es gibt keinen Punkte-Trick, keine blinkende Belohnung, nichts, das deine Aufmerksamkeit von der Aufgabe ablenkt. Nur du und die Wörter. Die meisten Menschen sind überrascht, wie schnell ihr Geist abschweifen möchte und wie viel ruhiger er mit Übung wird.",
			},
			{
				h: "So verbesserst du Konzentration und Aufmerksamkeitsspanne",
				body: "Aufmerksamkeit ist trainierbar. Wie ein Muskel reagiert deine <strong>Aufmerksamkeitsspanne</strong> auf bewusste, wiederholte Anstrengung — und sie schrumpft, wenn sie nie gefordert wird. Mit attentivebrain kannst du mit einer Haltezeit von zehn Sekunden beginnen und sie mit zunehmender Übung allmählich auf Minuten oder sogar Stunden ausdehnen. Indem du die Dauer Stück für Stück erhöhst, übst du genau, <strong>wie man Konzentration und Aufmerksamkeitsspanne verbessert</strong>, und zwar auf konkrete und ehrliche Weise: Der Timer lügt nicht. Das Spiel gibt deine tatsächliche Aufmerksamkeitsspanne als die Zeit an, in der du deine Konzentration wirklich gehalten hast, sodass Fortschritt etwas ist, das du sehen kannst, statt es zu erraten.",
			},
			{
				h: "So verbesserst du Konzentration und Gedächtnis zugleich",
				body: "Konzentration und Gedächtnis sind zwei Seiten derselben Medaille — du kannst dich nicht an das erinnern, dem du nie richtig Aufmerksamkeit geschenkt hast. Da das Spiel dich auffordert, die Reihenfolge in der richtigen Ordnung wiederzugeben, trainiert es Arbeitsgedächtnis und Konzentration in einem Atemzug. Wenn du nach <strong>einer Möglichkeit, Konzentration und Gedächtnis zu verbessern</strong> ohne trockene Karteikarten oder Abos gesucht hast, ist dies eine wirklich angenehme Alternative. Jede Runde ist ein kleiner, in sich geschlossener Test, <strong>wie man das Gedächtnis verbessert</strong> unter leichtem Zeitdruck — die Art von Übung, die sich auf alltägliche Aufgaben wie Lesen, Lernen und das Führen eines Gesprächs übertragen lässt, ohne den Faden zu verlieren.",
			},
			{
				h: "Ein Gehirnspiel ohne Schnickschnack",
				body: "Viele Apps versprechen ein klügeres Ich. attentivebrain ist ein bewusst minimalistisches <strong>Gehirnspiel</strong>: Es läuft kostenlos in deinem Browser, braucht keinen Download und respektiert deine Zeit. Wähle, wie lange du dich konzentrieren möchtest und wie oft ein neues Wort erscheint, und beginne dann. Wenn der Timer endet, baust du die Reihenfolge aus einer sauberen, alphabetisch sortierten Liste neu auf, damit die Herausforderung beim Gedächtnis und bei der Reihenfolge bleibt — und nicht beim Suchen eines Wortes. Du erhältst zwei klare Messwerte: deine Aufmerksamkeitsspanne (wie lange du die Konzentration gehalten hast) und deinen Konzentrationswert (den Prozentsatz der Reihenfolge, den du korrekt wieder aufgebaut hast).",
			},
			{
				h: "Bilde die Gewohnheit",
				body: "Die ehrliche Antwort auf die Frage, <strong>wie man die Konzentration verbessert</strong>, lautet: Beständigkeit. Ein paar bewusste Minuten am Tag schlagen einen gelegentlichen Marathon. Spiele zwischen Aufgaben eine schnelle Runde, dehne deine Dauer jede Woche ein wenig weiter aus und sieh zu, wie deine Zahlen in der Bestenliste steigen. Ob du ein Schüler bist, der sich auf Prüfungen vorbereitet, ein Berufstätiger, der gegen ein lautes Postfach kämpft, oder einfach jemand, der einen schärferen Verstand möchte — dies ist ein kleines tägliches Ritual, das sich auszahlt. Starte deine erste Runde oben — es dauert zehn Sekunden, um herauszufinden, wo deine <strong>Aufmerksamkeitsspanne</strong> heute steht.",
			},
		],
		faqHeading: "Häufig gestellte Fragen",
		faqs: [
			{
				q: "Wie kann ich meine Konzentration verbessern?",
				a: "<p>Der zuverlässigste Weg, die <strong>Konzentration zu verbessern</strong>, ist kurze, bewusste Übung, die häufig wiederholt wird. attentivebrain gibt dir eine einzige Aufgabe — sieh zu, wie eine Reihe von Wörtern erscheint, behalte sie in der richtigen Reihenfolge und gib sie wieder, wenn der Timer endet. Ein paar Minuten am Tag trainieren deine Aufmerksamkeit weit mehr als das Lesen einer weiteren Tippliste.</p>",
			},
			{
				q: "Wie verbessere ich Konzentration und Aufmerksamkeitsspanne?",
				a: "<p>Behandle deine <strong>Aufmerksamkeitsspanne</strong> wie einen Muskel und fordere sie in jeder Sitzung ein wenig mehr heraus. Beginne mit einer Haltezeit von zehn Sekunden und dehne sie mit zunehmender Übung allmählich auf Minuten aus. Da das Spiel die genaue Zeit angibt, in der du dich wirklich konzentriert hast, kannst du deine Aufmerksamkeitsspanne wachsen sehen, statt sie zu erraten.</p>",
			},
			{
				q: "Kann ein Spiel helfen, Konzentration und Gedächtnis zu verbessern?",
				a: "<p>Ja. <strong>Konzentration und Gedächtnis</strong> sind miteinander verbunden — du kannst dich nicht an das erinnern, dem du nie richtig Aufmerksamkeit geschenkt hast. Jede Runde fordert dich auf, eine Wortfolge in der richtigen Reihenfolge wiederzugeben, was Arbeitsgedächtnis und Konzentration in derselben Übung trainiert, ohne Karteikarten oder Abos.</p>",
			},
			{
				q: "Was ist das beste Spiel für mehr Konzentration?",
				a: "<p>Das <strong>beste Spiel für mehr Konzentration</strong> ist das, das jede Ablenkung entfernt. attentivebrain hat keine Punkte-Tricks, keine blinkenden Belohnungen und nichts, das um deine Aufmerksamkeit konkurriert — nur du, die Wörter und der Timer. Genau diese bewusste Schlichtheit macht es wirksam.</p>",
			},
			{
				q: "Wie kann ich mein Gedächtnis verbessern?",
				a: "<p>Übe, Informationen unter leichtem Zeitdruck wiederzugeben. Die Reihenfolge aus einer sauberen, alphabetisch sortierten Liste neu aufzubauen, hält die Herausforderung beim Gedächtnis und bei der Reihenfolge, statt beim Suchen eines Wortes — die Art von Übung, die sich auf das Lernen, Lesen und alltägliche Gespräche überträgt. Das ist der einfachste Weg, das <strong>Gedächtnis zu verbessern</strong> ohne trockene Drills.</p>",
			},
			{
				q: "Ist attentivebrain ein gutes Gehirnspiel?",
				a: "<p>attentivebrain ist ein bewusst minimalistisches <strong>Gehirnspiel</strong>, das kostenlos in deinem Browser läuft, ganz ohne Download. Du wählst deine Sitzungsdauer und dein Worttempo und erhältst dann zwei ehrliche Messwerte: deine Aufmerksamkeitsspanne (wie lange du die Konzentration gehalten hast) und deinen Konzentrationswert (wie viel der Reihenfolge du korrekt wieder aufgebaut hast).</p>",
			},
		],
	},
};
