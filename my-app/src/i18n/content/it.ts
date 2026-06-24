import type { SiteContent } from "../ui";

// Italiano — traduzione completa del contenuto canonico in inglese (en.ts).
// Mantiene esattamente la stessa struttura di chiavi; vengono tradotti solo i
// valori di testo.
export const it: SiteContent = {
	meta: {
		indexTitle:
			"Come aumentare concentrazione e capacità di attenzione — Gioco mentale gratis | attentivebrain",
		indexDescription:
			"Scopri come aumentare la concentrazione, la capacità di attenzione e la memoria con un gioco mentale gratuito. Guarda apparire le parole, trattieni la sequenza e poi richiamala: il miglior gioco per allenare la concentrazione e migliorare la memoria.",
		indexKeywords:
			"come aumentare la concentrazione, come aumentare concentrazione e capacità di attenzione, come aumentare concentrazione e memoria, miglior gioco per aumentare la concentrazione, come migliorare la memoria, gioco mentale, capacità di attenzione, allenamento della concentrazione, gioco di memoria, gioco di concentrazione",
		notFoundTitle: "Pagina non trovata (404) — attentivebrain",
		notFoundDescription:
			"Non è stato possibile trovare la pagina che cercavi. Torna indietro e allena invece la tua concentrazione.",
		errorTitle: "Qualcosa è andato storto (500) — attentivebrain",
		errorDescription: "Si è verificato un errore inaspettato da parte nostra. Riprova tra un momento.",
	},

	game: {
		eyebrow: "Il gioco della concentrazione",
		titleLine1: "Trattieni Le Parole",
		titleLine2: "Misura La Tua Concentrazione",
		intro:
			"Una nuova parola appare al ritmo che scegli. Tienile in ordine nella tua mente. Quando il timer finisce,",
		introRecallTail: "richiama la sequenza.",
		chooseDuration: "Scegli per quanto tempo mantenere l'attenzione",
		presets: {
			s10: "10 sec",
			s20: "20 sec",
			s30: "30 sec",
			m1: "1 min",
			m3: "3 min",
			m5: "5 min",
		},
		customTime: "Oppure imposta un tempo personalizzato",
		unitHours: "ore",
		unitMin: "min",
		unitSec: "sec",
		paceLabel: "Ogni quanto appare una nuova parola",
		durationTooShort: "La durata deve essere di almeno {n} secondi",
		durationTooLong: "La durata non può superare le 12 ore",
		paceOutOfRange: "Il ritmo deve essere tra 1 secondo e 3 minuti",
		begin: "Inizia",

		wordSingular: "parola",
		wordPlural: "parole",
		endEarly: "Termina prima e richiama ora",

		recallEyebrow: "Richiamo",
		recallHeading: "Tocca le parole nell'ordine in cui sono apparse.",
		leftToRecall: "{clock} per richiamare",
		chosenSoFar: "Sequenza scelta finora · {n} di {m}",
		tapWordsYouSaw: "Tocca le parole che hai visto",

		resultEyebrow: "I tuoi risultati",
		attentionSpan: "Capacità di attenzione",
		attentionHint: "tempo in cui hai mantenuto la concentrazione",
		focus: "Concentrazione",
		focusDetail: "{span} di {total} {wordUnit} in ordine",
		theSequence: "La sequenza",
		playAgain: "Gioca di nuovo",
		changeDuration: "Cambia durata",
		youTapped: 'Hai toccato "{word}"',
	},

	errors: {
		notFoundEyebrow: "Errore 404",
		notFoundHeading: "Questa pagina si è smarrita.",
		notFoundLead:
			"Il link è interrotto o la pagina è stata spostata. Capita ai migliori, anche con una concentrazione perfetta.",
		backToGame: "Torna al gioco",
		errorEyebrow: "Errore 500",
		errorHeading: "Qualcosa si è rotto da parte nostra.",
		errorLead:
			"Questa volta la colpa è nostra, non tua. La pagina ha incontrato un errore inaspettato: aspetta un momento e riprova.",
		tryAgain: "Riprova",
	},

	header: {
		account: "Account",
		leaderboard: "Classifica",
		language: "Lingua",
		toggleTheme: "Attiva/disattiva tema scuro",
		editName: "Modifica nome",
		displayName: "Nome visualizzato",
		save: "Salva",
		bestScore: "Punteggio migliore",
		loginToTrack: "Accedi per registrare il tuo record.",
		changePhoto: "Cambia foto",
		uploading: "Caricamento…",
		login: "Accedi",
		logout: "Esci",
		anonymous: "Anonimo",
		worldRanking: "Classifica mondiale",
		rankedBy: "Per parole massime richiamate, capacità di attenzione e tempo di richiamo",
		loading: "Caricamento…",
		noScores: "Ancora nessun punteggio. Sii il primo.",
		players: "{n} giocatori",
		showMore: "Mostra di più",
		loginToCompete: "Accedi per competere",
		finishToClaim: "Completa una partita per conquistare il tuo posto.",
		yourRank: "Sei il n. {rank} di {total}.",
		yourRankMetrics: "Sei il n. {rank} di {total} · {metrics}",
		yourWorldRanking: "La tua classifica mondiale",
		boardNotSetUp: "La classifica non è ancora configurata.",
		wordsUnit: "p",
	},

	footer: {
		home: "Home",
		about: "Chi siamo",
		contact: "Contattaci",
		privacy: "Informativa sulla privacy",
		terms: "Termini e condizioni",
		tagline: "attentivebrain.com — allena la tua capacità di attenzione, una sequenza alla volta.",
		rights: "© {year} attentivebrain. Tutti i diritti riservati.",
	},

	landing: {
		heading: "Come aumentare la concentrazione e la capacità di attenzione",
		intro:
			"attentivebrain è un gioco mentale gratuito creato per rispondere a una delle domande più comuni che le persone si pongono oggi: <strong>come aumentare la concentrazione</strong> in un mondo progettato per distrarci. Invece di un altro articolo pieno di consigli, ti offre un modo misurabile per allenare e monitorare la tua concentrazione, una breve sessione alla volta.",
		sections: [
			{
				h: "Il miglior gioco per aumentare la concentrazione",
				body: "Le regole sono semplici, ed è proprio per questo che funziona. Una nuova parola di uso quotidiano appare al ritmo che scegli. Il tuo unico compito è trattenere la sequenza nella mente, in ordine, finché il timer non finisce. Poi la richiami. Quell'unico ciclo — guardare, trattenere, richiamare — è un esercizio di attenzione focalizzata, e si rivela essere il <strong>miglior gioco per aumentare la concentrazione</strong> proprio perché elimina tutto il resto. Non ci sono trucchetti di punteggio, né ricompense lampeggianti, nulla che distolga la tua attenzione dal compito. Solo tu e le parole. La maggior parte delle persone è sorpresa di quanto in fretta la mente voglia divagare e di quanto più stabile diventi con la pratica.",
			},
			{
				h: "Come aumentare concentrazione e capacità di attenzione",
				body: "L'attenzione si può allenare. Come un muscolo, la tua <strong>capacità di attenzione</strong> risponde a uno sforzo deliberato e ripetuto, e si riduce quando non viene mai messa alla prova. attentivebrain ti permette di iniziare con una durata di dieci secondi e di estenderla gradualmente a minuti o persino ore man mano che migliori. Aumentando la durata poco alla volta, stai praticando esattamente <strong>come aumentare concentrazione e capacità di attenzione</strong> in modo concreto e onesto: il timer non mente. Il gioco riporta la tua reale capacità di attenzione come la durata del tempo in cui hai effettivamente mantenuto la concentrazione, così i progressi sono qualcosa che puoi vedere invece di indovinare.",
			},
			{
				h: "Come aumentare concentrazione e memoria insieme",
				body: "Concentrazione e memoria sono due facce della stessa medaglia: non puoi ricordare ciò a cui non hai mai prestato davvero attenzione. Poiché il gioco ti chiede di richiamare la sequenza nell'ordine corretto, allena la memoria di lavoro e la concentrazione nello stesso momento. Se hai cercato <strong>come aumentare concentrazione e memoria</strong> senza noiose schede o abbonamenti, questa è un'alternativa davvero piacevole. Ogni partita è un piccolo test autonomo di <strong>come migliorare la memoria</strong> sotto una leggera pressione di tempo, il tipo di pratica che si trasferisce ad attività quotidiane come leggere, studiare e sostenere una conversazione senza perdere il filo.",
			},
			{
				h: "Un gioco mentale senza fronzoli",
				body: "Molte app promettono una versione più intelligente di te. attentivebrain è un <strong>gioco mentale</strong> deliberatamente minimale: gira gratis nel tuo browser, non richiede download e rispetta il tuo tempo. Scegli per quanto tempo vuoi concentrarti e ogni quanto appare una nuova parola, poi inizia. Quando il timer finisce, ricostruisci la sequenza partendo da un elenco pulito e ordinato alfabeticamente, in modo che la sfida resti sulla memoria e sull'ordine, e non sul cercare una parola. Ottieni due metriche chiare: la tua capacità di attenzione (per quanto tempo hai mantenuto la concentrazione) e il tuo punteggio di concentrazione (la percentuale della sequenza che hai ricostruito correttamente).",
			},
			{
				h: "Crea l'abitudine",
				body: "La risposta onesta a <strong>come aumentare la concentrazione</strong> è la costanza. Pochi minuti deliberati al giorno valgono più di una maratona occasionale. Gioca una partita veloce tra un'attività e l'altra, allunga la tua durata un po' di più ogni settimana e guarda i tuoi numeri salire in classifica. Che tu sia uno studente che prepara gli esami, un professionista che combatte contro una casella di posta affollata o semplicemente qualcuno che desidera una mente più acuta, questo è un piccolo rituale quotidiano che ripaga. Inizia la tua prima partita qui sopra: bastano dieci secondi per scoprire a che punto è oggi la tua <strong>capacità di attenzione</strong>.",
			},
		],
		faqHeading: "Domande frequenti",
		faqs: [
			{
				q: "Come posso aumentare la mia concentrazione?",
				a: "<p>Il modo più affidabile per <strong>aumentare la concentrazione</strong> è una pratica breve e deliberata, ripetuta spesso. attentivebrain ti offre un unico compito: guarda apparire una sequenza di parole, trattienile in ordine e richiamale quando il timer finisce. Pochi minuti al giorno allenano la tua attenzione molto più che leggere un'altra lista di consigli.</p>",
			},
			{
				q: "Come aumento concentrazione e capacità di attenzione?",
				a: "<p>Tratta la tua <strong>capacità di attenzione</strong> come un muscolo e mettila alla prova un po' di più a ogni sessione. Inizia con una durata di dieci secondi ed estendila gradualmente a minuti man mano che migliori. Poiché il gioco riporta il tempo esatto in cui ti sei davvero concentrato, puoi vedere crescere la tua capacità di attenzione invece di indovinarla.</p>",
			},
			{
				q: "Un gioco può aiutare ad aumentare concentrazione e memoria?",
				a: "<p>Sì. <strong>Concentrazione e memoria</strong> sono collegate: non puoi ricordare ciò a cui non hai mai prestato davvero attenzione. Ogni partita ti chiede di richiamare una sequenza di parole nell'ordine corretto, il che allena la memoria di lavoro e la concentrazione nello stesso esercizio, senza schede né abbonamenti.</p>",
			},
			{
				q: "Qual è il miglior gioco per aumentare la concentrazione?",
				a: "<p>Il <strong>miglior gioco per aumentare la concentrazione</strong> è quello che elimina ogni distrazione. attentivebrain non ha trucchetti di punteggio, né ricompense lampeggianti, né nulla che competa per la tua attenzione: solo tu, le parole e il timer. Quella semplicità deliberata è proprio ciò che lo rende efficace.</p>",
			},
			{
				q: "Come posso migliorare la mia memoria?",
				a: "<p>Esercitati a richiamare informazioni sotto una leggera pressione di tempo. Ricostruire la sequenza partendo da un elenco pulito e ordinato alfabeticamente mantiene la sfida sulla memoria e sull'ordine, invece che sul cercare una parola: il tipo di pratica che si trasferisce allo studio, alla lettura e alle conversazioni quotidiane. È il modo più semplice per <strong>migliorare la memoria</strong> senza aridi esercizi.</p>",
			},
			{
				q: "attentivebrain è un buon gioco mentale?",
				a: "<p>attentivebrain è un <strong>gioco mentale</strong> deliberatamente minimale che gira gratis nel tuo browser, senza download. Scegli la durata della tua sessione e il ritmo delle parole, poi ottieni due metriche oneste: la tua capacità di attenzione (per quanto tempo hai mantenuto la concentrazione) e il tuo punteggio di concentrazione (quanto della sequenza hai ricostruito correttamente).</p>",
			},
		],
	},
};
