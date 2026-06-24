import type { SiteContent } from "../ui";

// Türkçe — kanonik İngilizce içeriğin (en.ts) tam çevirisi. Anahtar yapısı
// birebir aynı tutulur; yalnızca metin değerleri çevrilir.
export const tr: SiteContent = {
	meta: {
		indexTitle:
			"Odak ve Dikkat Süresi Nasıl Artırılır — Ücretsiz Zihin Oyunu | attentivebrain",
		indexDescription:
			"Ücretsiz bir zihin oyunuyla odağı, dikkat süresini ve hafızayı nasıl artıracağını öğren. Kelimelerin belirmesini izle, sırayı zihninde tut, sonra hatırla — odağı çalıştırmak ve hafızayı güçlendirmek için en iyi oyun.",
		indexKeywords:
			"odak nasıl artırılır, odak ve dikkat süresi nasıl artırılır, odak ve hafıza nasıl artırılır, odağı artırmak için en iyi oyun, hafıza nasıl geliştirilir, zihin oyunu, dikkat süresi, odak çalışması, hafıza oyunu, konsantrasyon oyunu",
		notFoundTitle: "Sayfa bulunamadı (404) — attentivebrain",
		notFoundDescription:
			"Aradığın sayfa bulunamadı. Geri dön ve onun yerine odağını çalıştır.",
		errorTitle: "Bir şeyler ters gitti (500) — attentivebrain",
		errorDescription: "Bizim tarafımızda beklenmedik bir hata oluştu. Birazdan tekrar dene.",
	},

	game: {
		eyebrow: "Odak oyunu",
		titleLine1: "Kelimeleri Tut",
		titleLine2: "Odağını Ölç",
		intro:
			"Seçtiğin hızda yeni bir kelime belirir. Onları zihninde sırasıyla tut. Zamanlayıcı bittiğinde,",
		introRecallTail: "sırayı hatırla.",
		chooseDuration: "Dikkatini ne kadar süre tutacağını seç",
		presets: {
			s10: "10 sn",
			s20: "20 sn",
			s30: "30 sn",
			m1: "1 dk",
			m3: "3 dk",
			m5: "5 dk",
		},
		customTime: "Ya da özel bir süre ayarla",
		unitHours: "saat",
		unitMin: "dk",
		unitSec: "sn",
		paceLabel: "Yeni bir kelimenin ne sıklıkta belireceği",
		durationTooShort: "Tutma süresi en az {n} saniye olmalı",
		durationTooLong: "Tutma süresi 12 saati aşamaz",
		paceOutOfRange: "Hız 1 saniye ile 3 dakika arasında olmalı",
		begin: "Başla",

		wordSingular: "kelime",
		wordPlural: "kelime",
		endEarly: "Erken bitir ve şimdi hatırla",

		recallEyebrow: "Hatırlama",
		recallHeading: "Kelimelere belirdikleri sırayla dokun.",
		leftToRecall: "Hatırlamak için {clock} kaldı",
		chosenSoFar: "Şimdiye kadar seçilen sıra · {m} kelimeden {n} tanesi",
		tapWordsYouSaw: "Gördüğün kelimelere dokun",

		resultEyebrow: "Sonuçların",
		attentionSpan: "Dikkat süresi",
		attentionHint: "odağı tuttuğun süre",
		focus: "Odak",
		focusDetail: "{total} {wordUnit} içinden {span} tanesi sırasıyla",
		theSequence: "Sıra",
		playAgain: "Tekrar oyna",
		changeDuration: "Süreyi değiştir",
		youTapped: '"{word}" kelimesine dokundun',
	},

	errors: {
		notFoundEyebrow: "Hata 404",
		notFoundHeading: "Bu sayfa yolunu kaybetti.",
		notFoundLead:
			"Bağlantı kırık ya da sayfa taşınmış. En iyilerimizin bile başına gelir — kusursuz bir odakla bile.",
		backToGame: "Oyuna dön",
		errorEyebrow: "Hata 500",
		errorHeading: "Bizim tarafımızda bir şeyler bozuldu.",
		errorLead:
			"Bu sefer suç bizde, sende değil. Sayfa beklenmedik bir hatayla karşılaştı — bir an bekle ve tekrar dene.",
		tryAgain: "Tekrar dene",
	},

	header: {
		account: "Hesap",
		leaderboard: "Sıralama",
		language: "Dil",
		toggleTheme: "Koyu temayı aç/kapat",
		editName: "Adı düzenle",
		displayName: "Görünen ad",
		save: "Kaydet",
		bestScore: "En iyi skor",
		loginToTrack: "En iyi skorunu takip etmek için giriş yap.",
		changePhoto: "Fotoğrafı değiştir",
		uploading: "Yükleniyor…",
		login: "Giriş yap",
		logout: "Çıkış yap",
		anonymous: "Anonim",
		worldRanking: "Dünya sıralaması",
		rankedBy: "En çok hatırlanan kelime, dikkat süresi ve hatırlama süresine göre",
		loading: "Yükleniyor…",
		noScores: "Henüz skor yok. İlk sen ol.",
		players: "{n} oyuncu",
		showMore: "Daha fazla göster",
		loginToCompete: "Yarışmak için giriş yap",
		finishToClaim: "Yerini almak için bir tur tamamla.",
		yourRank: "{total} kişiden {rank}. sıradasın.",
		yourRankMetrics: "{total} kişiden {rank}. sıradasın · {metrics}",
		yourWorldRanking: "Dünya sıralamandaki yerin",
		boardNotSetUp: "Sıralama henüz ayarlanmadı.",
		wordsUnit: "k",
	},

	footer: {
		home: "Ana sayfa",
		about: "Hakkımızda",
		contact: "İletişim",
		privacy: "Gizlilik politikası",
		terms: "Şartlar ve koşullar",
		tagline: "attentivebrain.com — dikkat süreni, her seferinde bir sırayla çalıştır.",
		rights: "© {year} attentivebrain. Tüm hakları saklıdır.",
	},

	landing: {
		heading: "Odak ve Dikkat Süresi Nasıl Artırılır",
		intro:
			"attentivebrain, bugün insanların en sık sorduğu sorulardan birine yanıt vermek için tasarlanmış ücretsiz bir zihin oyunudur: dikkat dağıtmak için kurgulanmış bir dünyada <strong>odak nasıl artırılır</strong>. İpuçlarıyla dolu başka bir makale yerine, konsantrasyonunu çalıştırıp ölçmen için ölçülebilir bir yol sunar — her seferinde tek bir kısa oturumla.",
		sections: [
			{
				h: "Odağı artırmak için en iyi oyun",
				body: "Kurallar basit ve tam da bu yüzden işe yarıyor. Seçtiğin hızda gündelik yeni bir kelime belirir. Tek görevin, zamanlayıcı bitene kadar sırayı zihninde, doğru düzende tutmak. Sonra onu hatırlarsın. İzle, tut, hatırla şeklindeki bu tek döngü, odaklanmış bir dikkat egzersizidir ve geriye her şeyi eleyip attığı için tam da <strong>odağı artırmak için en iyi oyun</strong> haline gelir. Puanlama numarası, yanıp sönen ödül, dikkatini görevden koparacak hiçbir şey yok. Sadece sen ve kelimeler. Çoğu kişi zihninin ne kadar çabuk dağılmak istediğine ve pratikle ne kadar daha kararlı hale geldiğine şaşırıyor.",
			},
			{
				h: "Odak ve dikkat süresi nasıl artırılır",
				body: "Dikkat çalıştırılabilir. Bir kas gibi, <strong>dikkat sürene</strong> kasıtlı ve tekrarlı çaba yanıt verir — ve hiç zorlanmadığında küçülür. attentivebrain on saniyelik bir tutmayla başlamana ve geliştikçe bunu dakikalara, hatta saatlere kadar kademeli olarak uzatmana olanak tanır. Süreyi azar azar artırarak, tam olarak <strong>odak ve dikkat süresinin nasıl artırılacağını</strong> somut ve dürüst bir biçimde çalışıyorsun: zamanlayıcı yalan söylemez. Oyun, gerçek dikkat süreni, konsantrasyonunu fiilen tuttuğun süre olarak bildirir; böylece ilerleme tahmin edilen değil, görebildiğin bir şeydir.",
			},
			{
				h: "Odak ve hafıza birlikte nasıl artırılır",
				body: "Odak ve hafıza aynı madalyonun iki yüzüdür — gerçekten dikkat etmediğin bir şeyi hatırlayamazsın. Oyun, sırayı doğru düzende hatırlamanı istediği için çalışma belleğini ve konsantrasyonu aynı anda çalıştırır. Sıkıcı bilgi kartları veya abonelikler olmadan <strong>odak ve hafıza nasıl artırılır</strong> diye araştırıyorduysan, bu gerçekten keyifli bir alternatif. Her tur, hafif bir zaman baskısı altında <strong>hafızanın nasıl geliştirileceğine</strong> dair küçük, bağımsız bir testtir ve bu, okuma, ders çalışma ve konuşmanın ipini kaybetmeden sohbet etme gibi gündelik işlere aktarılan türden bir pratiktir.",
			},
			{
				h: "Gereksiz dolgusu olmayan bir zihin oyunu",
				body: "Pek çok uygulama daha akıllı bir sen vaat eder. attentivebrain, bilerek sade tutulmuş bir <strong>zihin oyunudur</strong>: tarayıcında ücretsiz çalışır, indirme gerektirmez ve zamanına saygı duyar. Ne kadar süre odaklanmak istediğini ve yeni bir kelimenin ne sıklıkta belireceğini seç, sonra başla. Zamanlayıcı bittiğinde, sırayı temiz, alfabetik olarak sıralanmış bir listeden yeniden kur; böylece zorluk bir kelimeyi aramakta değil, hafıza ve düzende kalır. İki net ölçüt elde edersin: dikkat süren (odağı ne kadar süre tuttuğun) ve odak skorun (sırayı doğru kurabildiğin yüzde).",
			},
			{
				h: "Alışkanlığı oluştur",
				body: "<strong>Odak nasıl artırılır</strong> sorusunun dürüst yanıtı tutarlılıktır. Günde birkaç bilinçli dakika, ara sıra yapılan bir maratondan iyidir. İşler arasında hızlı bir tur oyna, süreni her hafta biraz daha ileriye taşı ve sayılarının sıralamada yükselişini izle. İster sınavlara hazırlanan bir öğrenci, ister gürültülü bir gelen kutusuyla mücadele eden bir profesyonel, ister sadece daha keskin bir zihin isteyen biri ol, bu karşılığını veren küçük bir günlük ritüel. İlk turunu yukarıdan başlat — <strong>dikkat sürenin</strong> bugün nerede olduğunu öğrenmek on saniye sürer.",
			},
		],
		faqHeading: "Sık sorulan sorular",
		faqs: [
			{
				q: "Odağımı nasıl artırabilirim?",
				a: "<p><strong>Odağı artırmanın</strong> en güvenilir yolu, sık sık tekrarlanan kısa ve bilinçli pratiktir. attentivebrain sana tek bir görev verir — bir kelime dizisinin belirmesini izle, onları sırasıyla tut ve zamanlayıcı bittiğinde hatırla. Günde birkaç dakika, dikkatini başka bir ipucu listesi okumaktan çok daha fazla çalıştırır.</p>",
			},
			{
				q: "Odak ve dikkat süresini nasıl artırırım?",
				a: "<p><strong>Dikkat sürene</strong> bir kas gibi davran ve her oturumda onu biraz daha zorla. On saniyelik bir tutmayla başla ve geliştikçe kademeli olarak dakikalara uzat. Oyun, gerçekten ne kadar süre konsantre olduğunun tam süresini bildirdiği için, dikkat süreni tahmin etmek yerine büyüdüğünü izleyebilirsin.</p>",
			},
			{
				q: "Bir oyun odağı ve hafızayı artırmaya yardımcı olabilir mi?",
				a: "<p>Evet. <strong>Odak ve hafıza</strong> birbirine bağlıdır — gerçekten dikkat etmediğin bir şeyi hatırlayamazsın. Her tur, bir kelime dizisini doğru düzende hatırlamanı ister; bu da çalışma belleğini ve konsantrasyonu aynı egzersizde, bilgi kartı ya da abonelik olmadan çalıştırır.</p>",
			},
			{
				q: "Odağı artırmak için en iyi oyun hangisi?",
				a: "<p><strong>Odağı artırmak için en iyi oyun</strong>, her türlü dikkat dağıtıcıyı eleyendir. attentivebrain'de puanlama numaraları, yanıp sönen ödüller veya dikkatin için yarışan hiçbir şey yok — sadece sen, kelimeler ve zamanlayıcı. İşte bu kasıtlı sadelik, onu etkili kılan şeydir.</p>",
			},
			{
				q: "Hafızamı nasıl geliştirebilirim?",
				a: "<p>Bilgiyi hafif bir zaman baskısı altında hatırlamayı çalış. Sırayı temiz, alfabetik olarak sıralanmış bir listeden yeniden kurmak, zorluğu bir kelimeyi aramakta değil hafıza ve düzende tutar — bu da ders çalışmaya, okumaya ve gündelik sohbetlere aktarılan türden bir pratiktir. Sıkıcı alıştırmalar olmadan <strong>hafızayı geliştirmenin</strong> en basit yolu budur.</p>",
			},
			{
				q: "attentivebrain iyi bir zihin oyunu mu?",
				a: "<p>attentivebrain, tarayıcında indirme olmadan ücretsiz çalışan, bilerek sade tutulmuş bir <strong>zihin oyunudur</strong>. Oturum süreni ve kelime hızını seçersin, sonra iki dürüst ölçüt alırsın: dikkat süren (odağı ne kadar süre tuttuğun) ve odak skorun (sırayı ne kadar doğru kurabildiğin).</p>",
			},
		],
	},
};
