import type { SiteContent } from "../ui";

export const nl: SiteContent = {
	meta: {
		indexTitle:
			"Hoe je focus en concentratievermogen verbetert — Gratis breinspel | attentivebrain",
		indexDescription:
			"Leer hoe je je focus, concentratievermogen en geheugen verbetert met een gratis breinspel. Kijk hoe woorden verschijnen, onthoud de reeks en haal ze daarna op — het beste spel om focus te trainen en je geheugen te verbeteren.",
		indexKeywords:
			"hoe verbeter je je focus, hoe verbeter je je concentratievermogen, hoe verbeter je focus en geheugen, beste spel om focus te verbeteren, hoe verbeter je je geheugen, breinspel, concentratievermogen, focustraining, geheugenspel, concentratiespel",
		notFoundTitle: "Pagina niet gevonden (404) — attentivebrain",
		notFoundDescription:
			"De pagina die je zocht kon niet worden gevonden. Ga terug en train je focus.",
		errorTitle: "Er ging iets mis (500) — attentivebrain",
		errorDescription: "Er is een onverwachte fout aan onze kant opgetreden. Probeer het zo nog eens.",
	},

	game: {
		eyebrow: "Het focusspel",
		titleLine1: "Onthoud De Woorden",
		titleLine2: "Meet Je Focus",
		intro:
			"Een nieuw woord verschijnt in het tempo dat jij kiest. Houd ze in volgorde in gedachten. Wanneer de timer afloopt,",
		introRecallTail: "haal je de reeks op.",
		chooseDuration: "Kies hoe lang je je aandacht wilt vasthouden",
		presets: {
			s10: "10 sec",
			s20: "20 sec",
			s30: "30 sec",
			m1: "1 min",
			m3: "3 min",
			m5: "5 min",
		},
		customTime: "Of stel een eigen tijd in",
		unitHours: "uur",
		unitMin: "min",
		unitSec: "sec",
		paceLabel: "Hoe vaak een nieuw woord verschijnt",
		durationTooShort: "Vasthouden moet minstens {n} seconden duren",
		durationTooLong: "Vasthouden mag niet langer zijn dan 12 uur",
		paceOutOfRange: "Het tempo moet tussen 1 seconde en 3 minuten liggen",
		begin: "Begin",

		wordSingular: "woord",
		wordPlural: "woorden",
		endEarly: "Eerder stoppen & nu ophalen",

		recallEyebrow: "Ophalen",
		recallHeading: "Tik de woorden aan in de volgorde waarin ze verschenen.",
		leftToRecall: "{clock} over om op te halen",
		chosenSoFar: "Gekozen reeks tot nu toe · {n} van {m}",
		tapWordsYouSaw: "Tik de woorden aan die je zag",

		resultEyebrow: "Jouw resultaten",
		attentionSpan: "Concentratievermogen",
		attentionHint: "tijd dat je je focus vasthield",
		focus: "Focus",
		focusDetail: "{span} van {total} {wordUnit} in volgorde",
		theSequence: "De reeks",
		playAgain: "Opnieuw spelen",
		changeDuration: "Duur wijzigen",
		youTapped: 'Je tikte "{word}" aan',
	},

	errors: {
		notFoundEyebrow: "Fout 404",
		notFoundHeading: "Deze pagina is afgedwaald.",
		notFoundLead:
			"De link is kapot of de pagina is verplaatst. Het overkomt de besten — zelfs met perfecte focus.",
		backToGame: "Terug naar het spel",
		errorEyebrow: "Fout 500",
		errorHeading: "Er ging iets mis aan onze kant.",
		errorLead:
			"Dit ligt aan ons, niet aan jou. De pagina liep tegen een onverwachte fout aan — geef het even en probeer het opnieuw.",
		tryAgain: "Probeer opnieuw",
	},

	header: {
		account: "Account",
		leaderboard: "Ranglijst",
		language: "Taal",
		toggleTheme: "Donker thema wisselen",
		editName: "Naam bewerken",
		displayName: "Weergavenaam",
		save: "Opslaan",
		bestScore: "Beste score",
		loginToTrack: "Log in om je beste score bij te houden.",
		changePhoto: "Foto wijzigen",
		uploading: "Uploaden…",
		login: "Inloggen",
		logout: "Uitloggen",
		anonymous: "Anoniem",
		worldRanking: "Wereldranglijst",
		rankedBy: "Op max. opgehaalde woorden, concentratievermogen en ophaaltijd",
		loading: "Laden…",
		noScores: "Nog geen scores. Wees de eerste.",
		players: "{n} spelers",
		showMore: "Meer tonen",
		loginToCompete: "Log in om mee te doen",
		finishToClaim: "Voltooi een ronde om je plek op te eisen.",
		yourRank: "Je staat op #{rank} van {total}.",
		yourRankMetrics: "Je staat op #{rank} van {total} · {metrics}",
		yourWorldRanking: "Jouw wereldranglijst",
		boardNotSetUp: "De ranglijst is nog niet ingesteld.",
		wordsUnit: "w",
	},

	footer: {
		home: "Home",
		about: "Over ons",
		contact: "Contact",
		privacy: "Privacybeleid",
		terms: "Algemene voorwaarden",
		tagline: "attentivebrain.com — train je concentratievermogen, één reeks per keer.",
		rights: "© {year} attentivebrain. Alle rechten voorbehouden.",
	},

	landing: {
		heading: "Hoe je focus en concentratievermogen verbetert",
		intro:
			"attentivebrain is een gratis breinspel dat is gebouwd om een van de meest gestelde vragen van vandaag te beantwoorden: <strong>hoe je je focus verbetert</strong> in een wereld die is ontworpen om af te leiden. In plaats van weer een artikel vol tips geeft het je een meetbare manier om je concentratie te trainen en bij te houden — één korte sessie per keer.",
		sections: [
			{
				h: "Het beste spel om focus te verbeteren",
				body: "De regels zijn eenvoudig, en precies daarom werkt het. Een nieuw alledaags woord verschijnt in het tempo dat jij kiest. Je enige taak is om de reeks in volgorde in gedachten te houden tot de timer afloopt. Daarna haal je hem op. Die ene lus — kijken, vasthouden, ophalen — is een oefening in gerichte aandacht, en het blijkt het <strong>beste spel om focus te verbeteren</strong> juist omdat het al het andere wegneemt. Er zijn geen scoretrucjes, geen knipperende beloningen, niets dat je aandacht weghaalt van de taak. Alleen jij en de woorden. De meeste mensen verbazen zich erover hoe snel hun gedachten willen afdwalen, en hoeveel rustiger het wordt met oefening.",
			},
			{
				h: "Hoe je focus en concentratievermogen verbetert",
				body: "Aandacht is trainbaar. Net als een spier reageert je <strong>concentratievermogen</strong> op bewuste, herhaalde inspanning — en het krimpt wanneer het nooit wordt uitgedaagd. Met attentivebrain kun je beginnen met tien seconden vasthouden en dat geleidelijk uitbreiden tot minuten of zelfs uren naarmate je beter wordt. Door de duur beetje bij beetje te verlengen, oefen je precies <strong>hoe je je focus en concentratievermogen verbetert</strong> op een concrete en eerlijke manier: de timer liegt niet. Het spel rapporteert je werkelijke concentratievermogen als de tijd dat je je concentratie echt vasthield, zodat vooruitgang iets is wat je kunt zien in plaats van raden.",
			},
			{
				h: "Hoe je focus en geheugen samen verbetert",
				body: "Focus en geheugen zijn twee kanten van dezelfde medaille — je kunt je niet herinneren wat je nooit goed hebt opgemerkt. Omdat het spel je vraagt de reeks in de juiste volgorde op te halen, traint het werkgeheugen en concentratie in één adem. Als je hebt gezocht naar <strong>hoe je je focus en geheugen verbetert</strong> zonder droge flashcards of abonnementen, dan is dit een echt leuk alternatief. Elke ronde is een kleine, op zichzelf staande test van <strong>hoe je je geheugen verbetert</strong> onder lichte tijdsdruk, en dat is het soort oefening dat zich vertaalt naar alledaagse taken zoals lezen, studeren en een gesprek voeren zonder de draad kwijt te raken.",
			},
			{
				h: "Een breinspel zonder poespas",
				body: "Talloze apps beloven een slimmere versie van jou. attentivebrain is een bewust minimalistisch <strong>breinspel</strong>: het draait gratis in je browser, vereist geen download en respecteert je tijd. Kies hoe lang je je wilt concentreren en hoe vaak een nieuw woord verschijnt, en begin dan. Wanneer de timer afloopt, bouw je de reeks opnieuw op uit een schone, alfabetisch gesorteerde lijst, zodat de uitdaging op geheugen en volgorde blijft liggen — niet op het zoeken naar een woord. Je krijgt twee duidelijke cijfers: je concentratievermogen (hoe lang je je focus vasthield) en je focusscore (het percentage van de reeks dat je correct opnieuw opbouwde).",
			},
			{
				h: "Bouw de gewoonte op",
				body: "Het eerlijke antwoord op <strong>hoe je je focus verbetert</strong> is consistentie. Een paar bewuste minuten per dag verslaan een incidentele marathon. Speel een snelle ronde tussen taken door, verleng je duur elke week een beetje, en kijk hoe je cijfers stijgen op de ranglijst. Of je nu een student bent die zich voorbereidt op examens, een professional die vecht tegen een drukke inbox, of gewoon iemand die een scherpere geest wil — dit is een klein dagelijks ritueel dat zich uitbetaalt. Begin hierboven je eerste ronde: het kost tien seconden om te ontdekken waar je <strong>concentratievermogen</strong> vandaag staat.",
			},
		],
		faqHeading: "Veelgestelde vragen",
		faqs: [
			{
				q: "Hoe kan ik mijn focus verbeteren?",
				a: "<p>De meest betrouwbare manier om je <strong>focus te verbeteren</strong> is korte, bewuste oefening die je vaak herhaalt. attentivebrain geeft je één taak — kijk hoe een reeks woorden verschijnt, houd ze in volgorde vast en haal ze op wanneer de timer afloopt. Een paar minuten per dag trainen je aandacht veel meer dan het lezen van weer een lijst met tips.</p>",
			},
			{
				q: "Hoe verbeter ik mijn focus en concentratievermogen?",
				a: "<p>Behandel je <strong>concentratievermogen</strong> als een spier en daag het elke sessie een beetje meer uit. Begin met tien seconden vasthouden en breid dat geleidelijk uit tot minuten naarmate je beter wordt. Omdat het spel de exacte tijd rapporteert dat je je echt concentreerde, kun je je concentratievermogen zien groeien in plaats van het te raden.</p>",
			},
			{
				q: "Kan een spel helpen om focus en geheugen te verbeteren?",
				a: "<p>Ja. <strong>Focus en geheugen</strong> zijn met elkaar verbonden — je kunt je niet herinneren wat je nooit goed hebt opgemerkt. Elke ronde vraagt je een woordreeks in de juiste volgorde op te halen, wat werkgeheugen en concentratie in dezelfde oefening traint, zonder flashcards of abonnementen.</p>",
			},
			{
				q: "Wat is het beste spel om focus te verbeteren?",
				a: "<p>Het <strong>beste spel om focus te verbeteren</strong> is het spel dat elke afleiding wegneemt. attentivebrain heeft geen scoretrucjes, geen knipperende beloningen en niets dat strijdt om je aandacht — alleen jij, de woorden en de timer. Die bewuste eenvoud is precies wat het effectief maakt.</p>",
			},
			{
				q: "Hoe kan ik mijn geheugen verbeteren?",
				a: "<p>Oefen het ophalen van informatie onder lichte tijdsdruk. De reeks opnieuw opbouwen uit een schone, alfabetisch gesorteerde lijst houdt de uitdaging op geheugen en volgorde in plaats van op het zoeken naar een woord — het soort oefening dat zich vertaalt naar studeren, lezen en alledaagse gesprekken. Dat is de eenvoudigste manier om je <strong>geheugen te verbeteren</strong> zonder droge drills.</p>",
			},
			{
				q: "Is attentivebrain een goed breinspel?",
				a: "<p>attentivebrain is een bewust minimalistisch <strong>breinspel</strong> dat gratis in je browser draait, zonder download. Je kiest je sessieduur en woordtempo, en krijgt daarna twee eerlijke cijfers: je concentratievermogen (hoe lang je je focus vasthield) en je focusscore (hoeveel van de reeks je correct opnieuw opbouwde).</p>",
			},
		],
	},
};
