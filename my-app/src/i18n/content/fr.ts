import type { SiteContent } from "../ui";

export const fr: SiteContent = {
	meta: {
		indexTitle:
			"Comment améliorer la concentration et la capacité d'attention — Jeu cérébral gratuit | attentivebrain",
		indexDescription:
			"Apprenez comment améliorer la concentration, la capacité d'attention et la mémoire grâce à un jeu cérébral gratuit. Regardez des mots apparaître, retenez la séquence, puis rappelez-la : le meilleur jeu pour entraîner la concentration et améliorer la mémoire.",
		indexKeywords:
			"comment améliorer la concentration, comment augmenter la capacité d'attention, comment améliorer la concentration et la mémoire, meilleur jeu pour améliorer la concentration, comment améliorer la mémoire, jeu cérébral, capacité d'attention, entraînement de la concentration, jeu de mémoire, jeu de concentration",
		notFoundTitle: "Page introuvable (404) — attentivebrain",
		notFoundDescription:
			"La page que vous cherchiez est introuvable. Revenez en arrière et entraînez plutôt votre concentration.",
		errorTitle: "Une erreur est survenue (500) — attentivebrain",
		errorDescription: "Une erreur inattendue s'est produite de notre côté. Réessayez dans un instant.",
	},

	game: {
		eyebrow: "Le jeu de la concentration",
		titleLine1: "Retenez Les Mots",
		titleLine2: "Mesurez Votre Concentration",
		intro:
			"Un nouveau mot apparaît au rythme que vous choisissez. Gardez-les en ordre dans votre esprit. Lorsque le minuteur se termine,",
		introRecallTail: "rappelez la séquence.",
		chooseDuration: "Choisissez combien de temps tenir votre attention",
		presets: {
			s10: "10 s",
			s20: "20 s",
			s30: "30 s",
			m1: "1 min",
			m3: "3 min",
			m5: "5 min",
		},
		customTime: "Ou définissez un temps personnalisé",
		unitHours: "heures",
		unitMin: "min",
		unitSec: "s",
		paceLabel: "À quelle fréquence un nouveau mot apparaît",
		durationTooShort: "La rétention doit durer au moins {n} secondes",
		durationTooLong: "La rétention ne peut pas dépasser 12 heures",
		paceOutOfRange: "Le rythme doit être compris entre 1 seconde et 3 minutes",
		begin: "Commencer",

		wordSingular: "mot",
		wordPlural: "mots",
		endEarly: "Terminer plus tôt et rappeler maintenant",

		recallEyebrow: "Rappel",
		recallHeading: "Touchez les mots dans l'ordre où ils sont apparus.",
		leftToRecall: "{clock} pour rappeler",
		chosenSoFar: "Séquence choisie jusqu'ici · {n} sur {m}",
		tapWordsYouSaw: "Touchez les mots que vous avez vus",

		resultEyebrow: "Vos résultats",
		attentionSpan: "Capacité d'attention",
		attentionHint: "temps pendant lequel vous avez tenu votre concentration",
		focus: "Concentration",
		focusDetail: "{span} sur {total} {wordUnit} dans l'ordre",
		theSequence: "La séquence",
		playAgain: "Rejouer",
		changeDuration: "Changer la durée",
		youTapped: 'Vous avez touché "{word}"',
	},

	errors: {
		notFoundEyebrow: "Erreur 404",
		notFoundHeading: "Cette page s'est égarée.",
		notFoundLead:
			"Le lien est rompu ou la page a été déplacée. Cela arrive aux meilleurs d'entre nous, même avec une concentration parfaite.",
		backToGame: "Retour au jeu",
		errorEyebrow: "Erreur 500",
		errorHeading: "Quelque chose a échoué de notre côté.",
		errorLead:
			"Cette fois, c'est de notre faute, pas de la vôtre. La page a rencontré une erreur inattendue : patientez un instant et réessayez.",
		tryAgain: "Réessayer",
	},

	header: {
		account: "Compte",
		leaderboard: "Classement",
		language: "Langue",
		toggleTheme: "Basculer le thème sombre",
		editName: "Modifier le nom",
		displayName: "Nom affiché",
		save: "Enregistrer",
		bestScore: "Meilleur score",
		loginToTrack: "Connectez-vous pour suivre votre meilleur score.",
		changePhoto: "Changer la photo",
		uploading: "Téléversement…",
		login: "Se connecter",
		logout: "Se déconnecter",
		anonymous: "Anonyme",
		worldRanking: "Classement mondial",
		rankedBy: "Par nombre max. de mots rappelés, capacité d'attention et temps de rappel",
		loading: "Chargement…",
		noScores: "Aucun score pour l'instant. Soyez le premier.",
		players: "{n} joueurs",
		showMore: "Afficher plus",
		loginToCompete: "Connectez-vous pour participer",
		finishToClaim: "Terminez une partie pour revendiquer votre place.",
		yourRank: "Vous êtes n° {rank} sur {total}.",
		yourRankMetrics: "Vous êtes n° {rank} sur {total} · {metrics}",
		yourWorldRanking: "Votre classement mondial",
		boardNotSetUp: "Le classement n'est pas encore configuré.",
		wordsUnit: "m",
	},

	footer: {
		home: "Accueil",
		about: "À propos de nous",
		contact: "Nous contacter",
		privacy: "Politique de confidentialité",
		terms: "Conditions générales",
		tagline: "attentivebrain.com — entraînez votre capacité d'attention, une séquence à la fois.",
		rights: "© {year} attentivebrain. Tous droits réservés.",
	},

	landing: {
		heading: "Comment améliorer la concentration et la capacité d'attention",
		intro:
			"attentivebrain est un jeu cérébral gratuit conçu pour répondre à l'une des questions les plus courantes que les gens se posent aujourd'hui : <strong>comment améliorer la concentration</strong> dans un monde pensé pour la distraction. Au lieu d'un énième article rempli de conseils, il vous offre une façon mesurable d'entraîner et de suivre votre concentration, une courte séance à la fois.",
		sections: [
			{
				h: "Le meilleur jeu pour améliorer la concentration",
				body: "Les règles sont simples, et c'est précisément pour cela que ça fonctionne. Un nouveau mot du quotidien apparaît au rythme que vous choisissez. Votre seule tâche est de retenir la séquence dans votre esprit, dans l'ordre, jusqu'à la fin du minuteur. Ensuite, vous la rappelez. Cette unique boucle — observer, retenir, rappeler — est un exercice d'attention focalisée, et il s'avère être le <strong>meilleur jeu pour améliorer la concentration</strong> justement parce qu'il élimine tout le reste. Pas de gadget de score, pas de récompense clignotante, rien qui détourne votre attention de la tâche. Juste vous et les mots. La plupart des gens sont surpris de voir à quelle vitesse leur esprit veut vagabonder, et à quel point il gagne en stabilité avec la pratique.",
			},
			{
				h: "Comment améliorer la concentration et la capacité d'attention",
				body: "L'attention s'entraîne. Comme un muscle, votre <strong>capacité d'attention</strong> répond à un effort délibéré et répété, et elle s'amenuise lorsqu'elle n'est jamais sollicitée. attentivebrain vous permet de commencer par une rétention de dix secondes, puis de l'étirer progressivement à des minutes, voire des heures, à mesure que vous progressez. En augmentant la durée petit à petit, vous pratiquez exactement <strong>comment améliorer la concentration et la capacité d'attention</strong> d'une manière concrète et honnête : le minuteur ne ment pas. Le jeu indique votre véritable capacité d'attention comme la durée pendant laquelle vous avez réellement tenu votre concentration, de sorte que le progrès est quelque chose que vous pouvez voir plutôt que deviner.",
			},
			{
				h: "Comment améliorer la concentration et la mémoire en même temps",
				body: "La concentration et la mémoire sont les deux faces d'une même pièce : vous ne pouvez pas vous souvenir de ce à quoi vous n'avez jamais vraiment prêté attention. Comme le jeu vous demande de rappeler la séquence dans le bon ordre, il entraîne la mémoire de travail et la concentration d'un même souffle. Si vous cherchiez <strong>comment améliorer la concentration et la mémoire</strong> sans fiches arides ni abonnements, voici une alternative réellement agréable. Chaque partie est un petit test autonome de <strong>comment améliorer la mémoire</strong> sous une légère pression temporelle, le genre de pratique qui se transfère aux tâches quotidiennes comme lire, étudier et tenir une conversation sans perdre le fil.",
			},
			{
				h: "Un jeu cérébral sans superflu",
				body: "Beaucoup d'applications promettent une version plus intelligente de vous-même. attentivebrain est un <strong>jeu cérébral</strong> volontairement minimaliste : il fonctionne gratuitement dans votre navigateur, ne nécessite aucun téléchargement et respecte votre temps. Choisissez combien de temps vous voulez vous concentrer et à quelle fréquence un nouveau mot apparaît, puis commencez. Lorsque le minuteur se termine, reconstruisez la séquence à partir d'une liste claire, triée par ordre alphabétique, afin que le défi reste sur la mémoire et l'ordre, et non sur la recherche d'un mot. Vous obtenez deux indicateurs clairs : votre capacité d'attention (combien de temps vous avez tenu votre concentration) et votre score de concentration (le pourcentage de la séquence que vous avez reconstruite correctement).",
			},
			{
				h: "Installez l'habitude",
				body: "La réponse honnête à <strong>comment améliorer la concentration</strong>, c'est la régularité. Quelques minutes délibérées par jour valent mieux qu'un marathon occasionnel. Jouez une partie rapide entre deux tâches, repoussez votre durée un peu plus loin chaque semaine, et regardez vos chiffres grimper dans le classement. Que vous soyez étudiant en préparation d'examens, professionnel aux prises avec une boîte de réception bruyante, ou simplement quelqu'un qui veut un esprit plus vif, voici un petit rituel quotidien qui porte ses fruits. Lancez votre première partie ci-dessus : il faut dix secondes pour découvrir où en est aujourd'hui votre <strong>capacité d'attention</strong>.",
			},
		],
		faqHeading: "Questions fréquentes",
		faqs: [
			{
				q: "Comment puis-je améliorer ma concentration ?",
				a: "<p>La façon la plus fiable d'<strong>améliorer la concentration</strong> est une pratique courte et délibérée, répétée souvent. attentivebrain vous donne une seule tâche : regarder une séquence de mots apparaître, les retenir dans l'ordre et les rappeler à la fin du minuteur. Quelques minutes par jour entraînent votre attention bien plus que la lecture d'une nouvelle liste de conseils.</p>",
			},
			{
				q: "Comment améliorer la concentration et la capacité d'attention ?",
				a: "<p>Traitez votre <strong>capacité d'attention</strong> comme un muscle et sollicitez-la un peu plus à chaque séance. Commencez par une rétention de dix secondes et étirez-la progressivement à des minutes à mesure que vous progressez. Comme le jeu indique la durée exacte pendant laquelle vous vous êtes réellement concentré, vous pouvez voir votre capacité d'attention croître au lieu de la deviner.</p>",
			},
			{
				q: "Un jeu peut-il aider à améliorer la concentration et la mémoire ?",
				a: "<p>Oui. <strong>La concentration et la mémoire</strong> sont liées : vous ne pouvez pas vous souvenir de ce à quoi vous n'avez jamais vraiment prêté attention. Chaque partie vous demande de rappeler une séquence de mots dans le bon ordre, ce qui entraîne la mémoire de travail et la concentration dans le même exercice, sans fiches ni abonnements.</p>",
			},
			{
				q: "Quel est le meilleur jeu pour améliorer la concentration ?",
				a: "<p>Le <strong>meilleur jeu pour améliorer la concentration</strong> est celui qui élimine toute distraction. attentivebrain n'a aucun gadget de score, aucune récompense clignotante et rien qui rivalise pour votre attention : juste vous, les mots et le minuteur. Cette simplicité délibérée est exactement ce qui le rend efficace.</p>",
			},
			{
				q: "Comment puis-je améliorer ma mémoire ?",
				a: "<p>Entraînez-vous à rappeler des informations sous une légère pression temporelle. Reconstruire la séquence à partir d'une liste claire, triée par ordre alphabétique, maintient le défi sur la mémoire et l'ordre plutôt que sur la recherche d'un mot, le genre de pratique qui se transfère à l'étude, à la lecture et aux conversations quotidiennes. C'est la manière la plus simple d'<strong>améliorer la mémoire</strong> sans exercices arides.</p>",
			},
			{
				q: "attentivebrain est-il un bon jeu cérébral ?",
				a: "<p>attentivebrain est un <strong>jeu cérébral</strong> volontairement minimaliste qui fonctionne gratuitement dans votre navigateur, sans téléchargement. Vous choisissez la durée de votre séance et le rythme des mots, puis vous obtenez deux indicateurs honnêtes : votre capacité d'attention (combien de temps vous avez tenu votre concentration) et votre score de concentration (quelle part de la séquence vous avez reconstruite correctement).</p>",
			},
		],
	},
};
