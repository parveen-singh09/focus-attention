import type { SiteContent } from "../ui";

// Polski — pełne tłumaczenie kanonicznej treści angielskiej (en.ts).
// Zachowuje dokładnie tę samą strukturę kluczy; tłumaczone są tylko
// wartości tekstowe.
export const pl: SiteContent = {
	meta: {
		indexTitle:
			"Jak zwiększyć koncentrację i zdolność skupienia uwagi — Darmowa gra dla mózgu | attentivebrain",
		indexDescription:
			"Dowiedz się, jak zwiększyć koncentrację, zdolność skupienia uwagi i pamięć dzięki darmowej grze dla mózgu. Obserwuj pojawiające się słowa, utrzymaj sekwencję, a potem ją odtwórz — najlepsza gra do treningu koncentracji i poprawy pamięci.",
		indexKeywords:
			"jak zwiększyć koncentrację, jak zwiększyć koncentrację i zdolność skupienia uwagi, jak zwiększyć koncentrację i pamięć, najlepsza gra na koncentrację, jak poprawić pamięć, gra dla mózgu, zdolność skupienia uwagi, trening koncentracji, gra pamięciowa, gra na koncentrację",
		notFoundTitle: "Nie znaleziono strony (404) — attentivebrain",
		notFoundDescription:
			"Nie udało się znaleźć strony, której szukałeś. Wróć i poćwicz zamiast tego swoją koncentrację.",
		errorTitle: "Coś poszło nie tak (500) — attentivebrain",
		errorDescription: "Po naszej stronie wystąpił nieoczekiwany błąd. Spróbuj ponownie za chwilę.",
	},

	game: {
		eyebrow: "Gra koncentracji",
		titleLine1: "Utrzymaj Słowa",
		titleLine2: "Zmierz Swoją Koncentrację",
		intro:
			"Nowe słowo pojawia się w wybranym przez Ciebie tempie. Utrzymuj je w kolejności w swoim umyśle. Gdy upłynie czas,",
		introRecallTail: "odtwórz sekwencję.",
		chooseDuration: "Wybierz, jak długo chcesz utrzymać uwagę",
		presets: {
			s10: "10 s",
			s20: "20 s",
			s30: "30 s",
			m1: "1 min",
			m3: "3 min",
			m5: "5 min",
		},
		customTime: "Lub ustaw własny czas",
		unitHours: "godz.",
		unitMin: "min",
		unitSec: "s",
		paceLabel: "Jak często pojawia się nowe słowo",
		durationTooShort: "Czas utrzymania musi wynosić co najmniej {n} sekund",
		durationTooLong: "Czas utrzymania nie może przekraczać 12 godzin",
		paceOutOfRange: "Tempo musi mieścić się między 1 sekundą a 3 minutami",
		begin: "Rozpocznij",

		wordSingular: "słowo",
		wordPlural: "słowa",
		endEarly: "Zakończ wcześniej i odtwórz teraz",

		recallEyebrow: "Odtwarzanie",
		recallHeading: "Dotknij słów w kolejności, w jakiej się pojawiły.",
		leftToRecall: "{clock} na odtworzenie",
		chosenSoFar: "Wybrana dotąd sekwencja · {n} z {m}",
		tapWordsYouSaw: "Dotknij słów, które widziałeś",

		resultEyebrow: "Twoje wyniki",
		attentionSpan: "Zdolność skupienia uwagi",
		attentionHint: "czas, przez który utrzymałeś koncentrację",
		focus: "Koncentracja",
		focusDetail: "{span} z {total} {wordUnit} w kolejności",
		theSequence: "Sekwencja",
		playAgain: "Zagraj ponownie",
		changeDuration: "Zmień czas trwania",
		youTapped: "Dotknąłeś „{word}”",
	},

	errors: {
		notFoundEyebrow: "Błąd 404",
		notFoundHeading: "Ta strona gdzieś się zawieruszyła.",
		notFoundLead:
			"Link jest uszkodzony lub strona została przeniesiona. Zdarza się to każdemu — nawet przy idealnej koncentracji.",
		backToGame: "Powrót do gry",
		errorEyebrow: "Błąd 500",
		errorHeading: "Coś zepsuło się po naszej stronie.",
		errorLead:
			"Tym razem to nasza wina, nie Twoja. Strona napotkała nieoczekiwany błąd — poczekaj chwilę i spróbuj ponownie.",
		tryAgain: "Spróbuj ponownie",
	},

	header: {
		account: "Konto",
		leaderboard: "Ranking",
		language: "Język",
		toggleTheme: "Przełącz ciemny motyw",
		editName: "Edytuj nazwę",
		displayName: "Wyświetlana nazwa",
		save: "Zapisz",
		bestScore: "Najlepszy wynik",
		loginToTrack: "Zaloguj się, aby śledzić swój najlepszy wynik.",
		changePhoto: "Zmień zdjęcie",
		uploading: "Przesyłanie…",
		login: "Zaloguj się",
		logout: "Wyloguj się",
		anonymous: "Anonimowy",
		worldRanking: "Ranking światowy",
		rankedBy: "Według maks. odtworzonych słów, zdolności skupienia uwagi i czasu odtwarzania",
		loading: "Ładowanie…",
		noScores: "Brak wyników. Bądź pierwszy.",
		players: "{n} graczy",
		showMore: "Pokaż więcej",
		loginToCompete: "Zaloguj się, aby rywalizować",
		finishToClaim: "Ukończ rundę, aby zająć swoje miejsce.",
		yourRank: "Jesteś na {rank}. miejscu z {total}.",
		yourRankMetrics: "Jesteś na {rank}. miejscu z {total} · {metrics}",
		yourWorldRanking: "Twój ranking światowy",
		boardNotSetUp: "Ranking nie został jeszcze skonfigurowany.",
		wordsUnit: "sł.",
	},

	footer: {
		home: "Strona główna",
		about: "O nas",
		contact: "Kontakt",
		privacy: "Polityka prywatności",
		terms: "Regulamin",
		tagline: "attentivebrain.com — trenuj swoją zdolność skupienia uwagi, jedna sekwencja na raz.",
		rights: "© {year} attentivebrain. Wszelkie prawa zastrzeżone.",
	},

	landing: {
		heading: "Jak zwiększyć koncentrację i zdolność skupienia uwagi",
		intro:
			"attentivebrain to darmowa gra dla mózgu stworzona, by odpowiedzieć na jedno z najczęstszych pytań, jakie ludzie zadają dzisiaj: <strong>jak zwiększyć koncentrację</strong> w świecie zaprojektowanym tak, by rozpraszać. Zamiast kolejnego artykułu pełnego porad, daje Ci wymierny sposób na trenowanie i śledzenie swojej koncentracji — jedna krótka sesja na raz.",
		sections: [
			{
				h: "Najlepsza gra na zwiększenie koncentracji",
				body: "Zasady są proste i właśnie dlatego to działa. Nowe codzienne słowo pojawia się w wybranym przez Ciebie tempie. Twoim jedynym zadaniem jest utrzymanie sekwencji w umyśle, w kolejności, aż upłynie czas. Potem ją odtwarzasz. Ta jedna pętla — obserwuj, utrzymaj, odtwórz — jest ćwiczeniem skupionej uwagi i okazuje się <strong>najlepszą grą na zwiększenie koncentracji</strong> właśnie dlatego, że usuwa wszystko inne. Nie ma żadnych sztuczek punktacji, migających nagród, niczego, co odciągałoby Twoją uwagę od zadania. Tylko Ty i słowa. Większość ludzi jest zaskoczona, jak szybko ich umysł chce błądzić i jak bardzo się stabilizuje wraz z praktyką.",
			},
			{
				h: "Jak zwiększyć koncentrację i zdolność skupienia uwagi",
				body: "Uwagę można trenować. Jak mięsień, Twoja <strong>zdolność skupienia uwagi</strong> reaguje na świadomy, powtarzany wysiłek — i słabnie, gdy nigdy nie jest wystawiana na próbę. attentivebrain pozwala zacząć od dziesięciosekundowego utrzymania i stopniowo rozciągać je do minut, a nawet godzin, w miarę postępów. Zwiększając czas trwania po trochu, ćwiczysz dokładnie <strong>jak zwiększyć koncentrację i zdolność skupienia uwagi</strong> w sposób konkretny i uczciwy: zegar nie kłamie. Gra raportuje Twoją rzeczywistą zdolność skupienia uwagi jako czas, przez który faktycznie utrzymywałeś koncentrację, więc postęp jest czymś, co możesz zobaczyć, a nie zgadywać.",
			},
			{
				h: "Jak zwiększyć koncentrację i pamięć jednocześnie",
				body: "Koncentracja i pamięć to dwie strony tego samego medalu — nie możesz zapamiętać czegoś, na co nigdy właściwie nie zwróciłeś uwagi. Ponieważ gra prosi Cię o odtworzenie sekwencji we właściwej kolejności, trenuje pamięć roboczą i koncentrację jednym tchem. Jeśli szukałeś <strong>jak zwiększyć koncentrację i pamięć</strong> bez nudnych fiszek czy subskrypcji, to naprawdę przyjemna alternatywa. Każda runda jest małym, samodzielnym testem tego, <strong>jak poprawić pamięć</strong> pod łagodną presją czasu, a to rodzaj praktyki, który przenosi się na codzienne czynności, takie jak czytanie, nauka i prowadzenie rozmowy bez gubienia wątku.",
			},
			{
				h: "Gra dla mózgu bez zbędnych dodatków",
				body: "Wiele aplikacji obiecuje mądrzejszą wersję Ciebie. attentivebrain to celowo minimalistyczna <strong>gra dla mózgu</strong>: działa za darmo w Twojej przeglądarce, nie wymaga pobierania i szanuje Twój czas. Wybierz, jak długo chcesz się koncentrować i jak często pojawia się nowe słowo, a potem zacznij. Gdy upłynie czas, odbuduj sekwencję z czystej, posortowanej alfabetycznie listy, aby wyzwanie pozostało kwestią pamięci i kolejności — a nie szukania słowa. Otrzymujesz dwa jasne wskaźniki: swoją zdolność skupienia uwagi (jak długo utrzymałeś koncentrację) i wynik koncentracji (procent sekwencji, który odbudowałeś poprawnie).",
			},
			{
				h: "Zbuduj nawyk",
				body: "Uczciwa odpowiedź na pytanie <strong>jak zwiększyć koncentrację</strong> brzmi: konsekwencja. Kilka świadomych minut dziennie bije okazjonalny maraton. Zagraj szybką rundę między zadaniami, wydłużaj czas trwania trochę bardziej co tydzień i obserwuj, jak Twoje wyniki rosną w rankingu. Niezależnie od tego, czy jesteś studentem przygotowującym się do egzaminów, profesjonalistą walczącym z zatłoczoną skrzynką odbiorczą, czy po prostu kimś, kto chce mieć bystrzejszy umysł, to mały codzienny rytuał, który się opłaca. Rozpocznij swoją pierwszą rundę powyżej — wystarczy dziesięć sekund, by się dowiedzieć, jak stoi dziś Twoja <strong>zdolność skupienia uwagi</strong>.",
			},
		],
		faqHeading: "Najczęściej zadawane pytania",
		faqs: [
			{
				q: "Jak mogę zwiększyć swoją koncentrację?",
				a: "<p>Najpewniejszym sposobem na <strong>zwiększenie koncentracji</strong> jest krótka, świadoma praktyka powtarzana często. attentivebrain daje Ci jedno zadanie — obserwuj pojawiającą się sekwencję słów, utrzymaj je w kolejności i odtwórz, gdy upłynie czas. Kilka minut dziennie trenuje Twoją uwagę o wiele bardziej niż czytanie kolejnej listy porad.</p>",
			},
			{
				q: "Jak zwiększyć koncentrację i zdolność skupienia uwagi?",
				a: "<p>Traktuj swoją <strong>zdolność skupienia uwagi</strong> jak mięsień i wystawiaj ją na próbę nieco bardziej w każdej sesji. Zacznij od dziesięciosekundowego utrzymania i stopniowo rozciągaj je do minut w miarę postępów. Ponieważ gra raportuje dokładny czas, przez który faktycznie się koncentrowałeś, możesz obserwować, jak Twoja zdolność skupienia uwagi rośnie, zamiast jej zgadywać.</p>",
			},
			{
				q: "Czy gra może pomóc zwiększyć koncentrację i pamięć?",
				a: "<p>Tak. <strong>Koncentracja i pamięć</strong> są ze sobą powiązane — nie możesz zapamiętać czegoś, na co nigdy właściwie nie zwróciłeś uwagi. Każda runda prosi Cię o odtworzenie sekwencji słów we właściwej kolejności, co trenuje pamięć roboczą i koncentrację w tym samym ćwiczeniu, bez fiszek czy subskrypcji.</p>",
			},
			{
				q: "Jaka jest najlepsza gra na zwiększenie koncentracji?",
				a: "<p><strong>Najlepsza gra na zwiększenie koncentracji</strong> to ta, która usuwa każde rozproszenie. attentivebrain nie ma sztuczek punktacji, migających nagród ani niczego, co rywalizowałoby o Twoją uwagę — tylko Ty, słowa i zegar. Ta celowa prostota jest właśnie tym, co czyni ją skuteczną.</p>",
			},
			{
				q: "Jak mogę poprawić swoją pamięć?",
				a: "<p>Ćwicz odtwarzanie informacji pod łagodną presją czasu. Odbudowywanie sekwencji z czystej, posortowanej alfabetycznie listy utrzymuje wyzwanie na poziomie pamięci i kolejności, zamiast szukania słowa — to rodzaj praktyki, który przenosi się na naukę, czytanie i codzienne rozmowy. To najprostszy sposób, by <strong>poprawić pamięć</strong> bez nużących ćwiczeń.</p>",
			},
			{
				q: "Czy attentivebrain to dobra gra dla mózgu?",
				a: "<p>attentivebrain to celowo minimalistyczna <strong>gra dla mózgu</strong>, która działa za darmo w Twojej przeglądarce, bez pobierania. Wybierasz długość swojej sesji i tempo słów, a potem otrzymujesz dwa uczciwe wskaźniki: swoją zdolność skupienia uwagi (jak długo utrzymałeś koncentrację) i wynik koncentracji (jaką część sekwencji odbudowałeś poprawnie).</p>",
			},
		],
	},
};
