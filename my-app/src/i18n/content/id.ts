import type { SiteContent } from "../ui";

// Bahasa Indonesia — terjemahan lengkap dari konten kanonis berbahasa Inggris
// (en.ts). Mempertahankan struktur kunci yang persis sama; hanya nilai teks
// yang diterjemahkan.
export const id: SiteContent = {
	meta: {
		indexTitle:
			"Cara Meningkatkan Fokus & Rentang Perhatian — Game Otak Gratis | attentivebrain",
		indexDescription:
			"Pelajari cara meningkatkan fokus, rentang perhatian, dan memori dengan game otak gratis. Saksikan kata-kata muncul, ingat urutannya, lalu panggil kembali — game terbaik untuk melatih fokus dan memperkuat memori.",
		indexKeywords:
			"cara meningkatkan fokus, cara meningkatkan fokus dan rentang perhatian, cara meningkatkan fokus dan memori, game terbaik untuk meningkatkan fokus, cara memperkuat memori, game otak, rentang perhatian, latihan fokus, game memori, game konsentrasi",
		notFoundTitle: "Halaman tidak ditemukan (404) — attentivebrain",
		notFoundDescription:
			"Halaman yang kamu cari tidak dapat ditemukan. Kembali dan latih fokusmu saja.",
		errorTitle: "Terjadi kesalahan (500) — attentivebrain",
		errorDescription: "Terjadi kesalahan tak terduga dari sisi kami. Coba lagi sebentar.",
	},

	game: {
		eyebrow: "Game fokus",
		titleLine1: "Tahan Kata-Katanya",
		titleLine2: "Ukur Fokusmu",
		intro:
			"Sebuah kata baru muncul sesuai tempo yang kamu pilih. Simpan urutannya di benakmu. Saat penghitung waktu berakhir,",
		introRecallTail: "panggil kembali urutannya.",
		chooseDuration: "Pilih berapa lama kamu menahan perhatianmu",
		presets: {
			s10: "10 dtk",
			s20: "20 dtk",
			s30: "30 dtk",
			m1: "1 mnt",
			m3: "3 mnt",
			m5: "5 mnt",
		},
		customTime: "Atau atur waktu khusus",
		unitHours: "jam",
		unitMin: "mnt",
		unitSec: "dtk",
		paceLabel: "Seberapa sering kata baru muncul",
		durationTooShort: "Durasi tahan minimal {n} detik",
		durationTooLong: "Durasi tahan tidak boleh lebih dari 12 jam",
		paceOutOfRange: "Tempo harus antara 1 detik dan 3 menit",
		begin: "Mulai",

		wordSingular: "kata",
		wordPlural: "kata",
		endEarly: "Akhiri lebih awal & panggil sekarang",

		recallEyebrow: "Panggil kembali",
		recallHeading: "Ketuk kata-kata sesuai urutan kemunculannya.",
		leftToRecall: "{clock} tersisa untuk memanggil kembali",
		chosenSoFar: "Urutan terpilih sejauh ini · {n} dari {m}",
		tapWordsYouSaw: "Ketuk kata-kata yang kamu lihat",

		resultEyebrow: "Hasilmu",
		attentionSpan: "Rentang perhatian",
		attentionHint: "lama kamu menjaga fokus",
		focus: "Fokus",
		focusDetail: "{span} dari {total} {wordUnit} sesuai urutan",
		theSequence: "Urutannya",
		playAgain: "Main lagi",
		changeDuration: "Ubah durasi",
		youTapped: 'Kamu mengetuk "{word}"',
	},

	errors: {
		notFoundEyebrow: "Galat 404",
		notFoundHeading: "Halaman ini tersesat entah ke mana.",
		notFoundLead:
			"Tautannya rusak atau halamannya sudah dipindahkan. Hal ini bisa terjadi pada siapa saja — bahkan dengan fokus yang sempurna.",
		backToGame: "Kembali ke game",
		errorEyebrow: "Galat 500",
		errorHeading: "Ada yang rusak di sisi kami.",
		errorLead:
			"Yang ini salah kami, bukan kamu. Halaman mengalami kesalahan tak terduga — tunggu sebentar lalu coba lagi.",
		tryAgain: "Coba lagi",
	},

	header: {
		account: "Akun",
		leaderboard: "Papan peringkat",
		language: "Bahasa",
		toggleTheme: "Alihkan tema gelap",
		editName: "Ubah nama",
		displayName: "Nama tampilan",
		save: "Simpan",
		bestScore: "Skor terbaik",
		loginToTrack: "Masuk untuk mencatat rekor terbaikmu.",
		changePhoto: "Ganti foto",
		uploading: "Mengunggah…",
		login: "Masuk",
		logout: "Keluar",
		anonymous: "Anonim",
		worldRanking: "Peringkat dunia",
		rankedBy: "Berdasarkan kata terbanyak yang diingat, rentang perhatian, waktu memanggil kembali",
		loading: "Memuat…",
		noScores: "Belum ada skor. Jadilah yang pertama.",
		players: "{n} pemain",
		showMore: "Tampilkan lebih banyak",
		loginToCompete: "Masuk untuk bertanding",
		finishToClaim: "Selesaikan satu ronde untuk merebut posisimu.",
		yourRank: "Kamu peringkat #{rank} dari {total}.",
		yourRankMetrics: "Kamu peringkat #{rank} dari {total} · {metrics}",
		yourWorldRanking: "Peringkat duniamu",
		boardNotSetUp: "Papan peringkat belum disiapkan.",
		wordsUnit: "k",
	},

	footer: {
		home: "Beranda",
		about: "Tentang kami",
		contact: "Hubungi kami",
		privacy: "Kebijakan privasi",
		terms: "Syarat & ketentuan",
		tagline: "attentivebrain.com — latih rentang perhatianmu, satu urutan demi satu urutan.",
		rights: "© {year} attentivebrain. Semua hak dilindungi.",
	},

	landing: {
		heading: "Cara Meningkatkan Fokus dan Rentang Perhatian",
		intro:
			"attentivebrain adalah game otak gratis yang dibuat untuk menjawab salah satu pertanyaan paling umum yang diajukan orang saat ini: <strong>cara meningkatkan fokus</strong> di dunia yang dirancang untuk mengalihkan perhatian. Alih-alih artikel lain yang penuh tips, game ini memberimu cara terukur untuk melatih dan memantau konsentrasimu — satu sesi singkat dalam satu waktu.",
		sections: [
			{
				h: "Game terbaik untuk meningkatkan fokus",
				body: "Aturannya sederhana, dan justru itulah yang membuatnya berhasil. Sebuah kata sehari-hari yang baru muncul sesuai tempo yang kamu pilih. Satu-satunya tugasmu adalah menahan urutan itu di benakmu, sesuai urutan, hingga penghitung waktu berakhir. Lalu kamu memanggilnya kembali. Satu siklus itu — saksikan, tahan, panggil kembali — adalah latihan perhatian terfokus, dan ternyata inilah <strong>game terbaik untuk meningkatkan fokus</strong> justru karena menghilangkan segala hal lainnya. Tidak ada trik skor, tidak ada hadiah yang berkedip, tidak ada yang merebut perhatianmu dari tugas. Hanya kamu dan kata-katanya. Kebanyakan orang terkejut betapa cepat pikiran mereka ingin mengembara, dan betapa lebih mantapnya pikiran itu dengan latihan.",
			},
			{
				h: "Cara meningkatkan fokus dan rentang perhatian",
				body: "Perhatian bisa dilatih. Seperti otot, <strong>rentang perhatianmu</strong> merespons usaha yang sengaja dan berulang — dan menyusut ketika tidak pernah ditantang. attentivebrain memungkinkanmu memulai dengan menahan selama sepuluh detik dan secara bertahap memanjangkannya menjadi menit atau bahkan jam seiring kemajuanmu. Dengan menambah durasi sedikit demi sedikit, kamu sedang mempraktikkan persis <strong>cara meningkatkan fokus dan rentang perhatian</strong> dengan cara yang konkret dan jujur: penghitung waktu tidak berbohong. Game ini melaporkan rentang perhatian nyatamu sebagai lamanya waktu kamu benar-benar menjaga konsentrasi, sehingga kemajuan adalah sesuatu yang bisa kamu lihat alih-alih ditebak.",
			},
			{
				h: "Cara meningkatkan fokus dan memori sekaligus",
				body: "Fokus dan memori adalah dua sisi dari mata uang yang sama — kamu tidak bisa mengingat sesuatu yang tidak pernah benar-benar kamu perhatikan. Karena game ini memintamu memanggil kembali urutan dalam susunan yang benar, ia melatih memori kerja dan konsentrasi sekaligus. Jika kamu mencari <strong>cara meningkatkan fokus dan memori</strong> tanpa kartu hafalan yang membosankan atau langganan, ini adalah alternatif yang benar-benar menyenangkan. Setiap ronde adalah uji kecil dan mandiri tentang <strong>cara memperkuat memori</strong> di bawah tekanan waktu yang ringan, jenis latihan yang bisa diterapkan pada tugas sehari-hari seperti membaca, belajar, dan menjalani percakapan tanpa kehilangan alur.",
			},
			{
				h: "Game otak tanpa basa-basi",
				body: "Banyak aplikasi menjanjikan dirimu yang lebih cerdas. attentivebrain adalah <strong>game otak</strong> yang sengaja dibuat minimalis: berjalan gratis di peramban, tidak perlu diunduh, dan menghargai waktumu. Pilih berapa lama kamu ingin fokus dan seberapa sering kata baru muncul, lalu mulai. Saat penghitung waktu berakhir, susun kembali urutannya dari daftar yang bersih dan terurut abjad sehingga tantangannya tetap pada memori dan urutan — bukan pada mencari-cari sebuah kata. Kamu memperoleh dua metrik yang jelas: rentang perhatianmu (berapa lama kamu menjaga fokus) dan skor fokusmu (persentase urutan yang kamu susun kembali dengan benar).",
			},
			{
				h: "Bangun kebiasaannya",
				body: "Jawaban jujur untuk <strong>cara meningkatkan fokus</strong> adalah konsistensi. Beberapa menit yang sengaja setiap hari mengalahkan maraton sesekali. Mainkan satu ronde cepat di sela tugas, dorong durasimu sedikit lebih jauh setiap minggu, dan saksikan angkamu memanjat di papan peringkat. Entah kamu seorang pelajar yang bersiap ujian, seorang profesional yang melawan kotak masuk yang riuh, atau sekadar seseorang yang ingin pikiran lebih tajam, ini adalah ritual harian kecil yang membuahkan hasil. Mulai ronde pertamamu di atas — hanya butuh sepuluh detik untuk mengetahui di mana <strong>rentang perhatianmu</strong> berada hari ini.",
			},
		],
		faqHeading: "Pertanyaan yang sering diajukan",
		faqs: [
			{
				q: "Bagaimana cara meningkatkan fokus saya?",
				a: "<p>Cara paling andal untuk <strong>meningkatkan fokus</strong> adalah latihan singkat dan sengaja yang sering diulang. attentivebrain memberimu satu tugas — saksikan urutan kata muncul, tahan sesuai urutan, dan panggil kembali saat penghitung waktu berakhir. Beberapa menit sehari melatih perhatianmu jauh lebih baik daripada membaca daftar tips lainnya.</p>",
			},
			{
				q: "Bagaimana cara meningkatkan fokus dan rentang perhatian?",
				a: "<p>Perlakukan <strong>rentang perhatianmu</strong> seperti otot dan tantang ia sedikit lebih jauh setiap sesi. Mulai dengan menahan sepuluh detik dan secara bertahap panjangkan menjadi menit seiring kemajuanmu. Karena game ini melaporkan lamanya waktu yang benar-benar kamu konsentrasikan, kamu bisa menyaksikan rentang perhatianmu tumbuh alih-alih menebaknya.</p>",
			},
			{
				q: "Bisakah sebuah game membantu meningkatkan fokus dan memori?",
				a: "<p>Bisa. <strong>Fokus dan memori</strong> saling terkait — kamu tidak bisa mengingat sesuatu yang tidak pernah benar-benar kamu perhatikan. Setiap ronde memintamu memanggil kembali urutan kata dalam susunan yang benar, yang melatih memori kerja dan konsentrasi dalam latihan yang sama, tanpa kartu hafalan atau langganan.</p>",
			},
			{
				q: "Apa game terbaik untuk meningkatkan fokus?",
				a: "<p><strong>Game terbaik untuk meningkatkan fokus</strong> adalah yang menghilangkan setiap gangguan. attentivebrain tidak punya trik skor, tidak ada hadiah berkedip, dan tidak ada yang bersaing memperebutkan perhatianmu — hanya kamu, kata-katanya, dan penghitung waktu. Kesederhanaan yang disengaja itulah yang membuatnya efektif.</p>",
			},
			{
				q: "Bagaimana cara memperkuat memori saya?",
				a: "<p>Berlatihlah memanggil kembali informasi di bawah tekanan waktu yang ringan. Menyusun kembali urutan dari daftar yang bersih dan terurut abjad menjaga tantangan tetap pada memori dan urutan alih-alih mencari-cari sebuah kata — jenis latihan yang bisa diterapkan pada belajar, membaca, dan percakapan sehari-hari. Itulah cara paling sederhana untuk <strong>memperkuat memori</strong> tanpa latihan yang kering.</p>",
			},
			{
				q: "Apakah attentivebrain game otak yang bagus?",
				a: "<p>attentivebrain adalah <strong>game otak</strong> yang sengaja dibuat minimalis dan berjalan gratis di peramban tanpa unduhan. Kamu memilih durasi sesi dan tempo kata, lalu memperoleh dua metrik yang jujur: rentang perhatianmu (berapa lama kamu menjaga fokus) dan skor fokusmu (seberapa banyak urutan yang kamu susun kembali dengan benar).</p>",
			},
		],
	},
};
