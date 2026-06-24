// Yaygın, günlük kelimelerden oluşan havuz. src/scripts/words.ts içindeki
// İngilizce havuzun çevirisi — aynı sıra ve aynı kategoriler. 1000 kelime.
export const WORDS: readonly string[] = [
  // people & family
  "bebek", "çocuk", "afacan", "oğlan", "kız", "adam", "kadın", "anne", "baba", "abla",
  "erkek kardeş", "amca", "teyze", "kuzen", "arkadaş", "komşu", "öğretmen", "doktor", "hemşire", "şoför",
  "çiftçi", "aşçı", "fırıncı", "pilot", "şarkıcı", "sanatçı", "yazar", "oyuncu", "işçi", "öğrenci",

  // body
  "baş", "saç", "yüz", "göz", "kulak", "burun", "ağız", "dudak", "diş", "dil",
  "boyun", "omuz", "kol", "dirsek", "el", "parmak", "başparmak", "tırnak", "göğüs", "sırt",
  "mide", "bacak", "diz", "ayak", "ayak parmağı", "kalp", "beyin", "kemik", "deri", "kan",

  // food & drink
  "elma", "muz", "portakal", "üzüm", "limon", "kiraz", "şeftali", "kavun", "böğürtlen", "mango",
  "ekmek", "tereyağı", "peynir", "yumurta", "süt", "pirinç", "makarna", "çorba", "salata", "pizza",
  "hamburger", "sandviç", "pasta", "kurabiye", "şeker", "toz şeker", "tuz", "biber", "bal", "reçel",
  "et", "tavuk", "balık", "pastırma", "dana eti", "patates", "domates", "soğan", "havuç", "fasulye",
  "mısır", "bezelye", "sarımsak", "marul", "salatalık", "mantar", "fındık", "tohum", "zeytin", "baharat",
  "kahve", "çay", "meyve suyu", "su", "gazoz", "şarap", "bira", "krema", "yoğurt", "erişte",

  // animals
  "köpek", "kedi", "kuş", "at", "inek", "domuz", "koyun", "keçi", "ördek", "tavuk",
  "civciv", "tavşan", "fare", "sıçan", "tilki", "kurt", "ayı", "aslan", "kaplan", "geyik",
  "maymun", "fil", "zürafa", "zebra", "yılan", "kurbağa", "kaplumbağa", "kertenkele", "örümcek", "karınca",
  "arı", "sinek", "güve", "solucan", "salyangoz", "yengeç", "köpekbalığı", "balina", "yunus", "baykuş",
  "kartal", "karga", "güvercin", "papağan", "penguen", "kanguru", "deve", "eşek", "sincap", "su aygırı",

  // home & furniture
  "ev", "oda", "kapı", "pencere", "duvar", "zemin", "çatı", "merdiven", "mutfak", "yatak odası",
  "banyo", "garaj", "bahçe", "avlu", "çit", "kapı bahçe", "masa", "sandalye", "kanepe", "yatak",
  "yastık", "battaniye", "lamba", "saat", "ayna", "raf", "çekmece", "dolap", "halı", "perde",
  "çalışma masası", "bank", "tabure", "koltuk", "vitrin", "kova", "sepet", "kutu", "çanta", "kavanoz",

  // kitchen & dishes
  "tabak", "kase", "fincan", "bardak", "kaşık", "çatal", "bıçak", "tencere", "tava", "çaydanlık",
  "fırın", "ocak", "buzdolabı", "lavabo", "havlu", "peçete", "şişe", "teneke", "tepsi", "kapak",

  // clothing
  "gömlek", "pantolon", "elbise", "etek", "palto", "ceket", "kazak", "şapka", "kasket", "atkı",
  "eldiven", "çorap", "ayakkabı", "bot", "kemer", "kravat", "düğme", "cep", "fermuar", "şort",
  "kot", "takım elbise", "bornoz", "önlük", "yüzük", "kol saati", "gözlük", "el çantası", "cüzdan", "şemsiye",

  // nature & weather
  "güneş", "ay", "yıldız", "gökyüzü", "bulut", "yağmur", "kar", "rüzgar", "fırtına", "sis",
  "buz", "ateş", "duman", "ağaç", "yaprak", "dal", "kök", "çiçek", "çimen", "çalı",
  "gül", "taç yaprağı", "orman", "tarla", "tepe", "dağ", "vadi", "nehir", "göl", "okyanus",
  "deniz", "plaj", "kum", "kaya", "taş", "çamur", "toprak", "mağara", "ada", "çöl",
  "gökkuşağı", "gök gürültüsü", "gölge", "sabah", "gece", "gün", "mevsim", "yaz", "kış", "sonbahar",

  // school & office
  "kitap", "sayfa", "kağıt", "tükenmez", "kurşun kalem", "silgi", "cetvel", "kalem", "mum boya", "defter",
  "mektup", "kelime", "sayı", "hikaye", "harita", "grafik", "kart", "pul", "zarf", "klasör",
  "makas", "yapıştırıcı", "bant", "ataç", "zımba", "tahta", "tebeşir", "ekran", "klavye", "takvim",

  // tools & objects
  "çekiç", "vida", "testere", "matkap", "anahtar takım", "merdiven el", "ip", "zincir", "tel", "fırça",
  "süpürge", "paspas", "sabun", "sünger", "tarak", "ustura", "iğne", "iplik", "anahtar", "kilit",
  "pil", "tekerlek", "motor", "pompa", "mıknatıs", "yay", "şalter", "fiş", "boru", "kanca",

  // transport
  "araba", "otobüs", "kamyon", "tren", "uçak", "kayık", "gemi", "bisiklet", "scooter", "taksi",
  "fayton", "el arabası", "metro", "traktör", "roket", "helikopter", "yelkenli", "kano", "feribot", "minibüs",

  // places
  "okul", "mağaza", "dükkan", "pazar", "banka", "ofis", "hastane", "kütüphane", "müze", "park",
  "kilise", "otel", "restoran", "fabrika", "çiftlik", "istasyon", "havalimanı", "köprü", "yol", "cadde",
  "şehir", "kasaba", "köy", "ülke", "saray", "kale", "hayvanat bahçesi", "liman", "tiyatro", "stadyum",

  // toys & play
  "top", "oyuncak", "bebek oyuncak", "uçurtma", "yapboz", "oyun", "blok", "davul", "balon", "bilye",
  "salıncak", "kaydırak", "robot", "kukla", "düdük", "yoyo", "zar", "topaç", "zıplama", "yarış",

  // music & art
  "müzik", "şarkı", "gitar", "piyano", "keman", "flüt", "trompet", "çan", "korna", "arp",
  "boya", "renk", "resim", "fotoğraf", "çerçeve", "film", "dans", "sahne", "sirk", "palyaço",

  // misc everyday
  "para", "madeni para", "dolar", "fiyat", "hediye", "mum", "kibrit", "bayrak", "bilet", "telefon",
  "kamera", "radyo", "el feneri", "fener", "pusula", "çapa", "kurdele", "baloncuk", "tüy", "çakıl",
  "deniz kabuğu", "mercan", "taç", "elmas", "hazine", "madalya", "kupa", "çadır", "kamp ateşi", "kızak",
  "paten", "kask", "pipet", "kartpostal", "gazete", "dergi", "anahtarlık", "diş fırçası", "kupa bardak", "spatula",

  // more food
  "tost", "waffle", "krep", "kek", "donut", "çubuk kraker", "patlamış mısır", "cips", "şurup", "jöle",
  "yer fıstığı", "kuru üzüm", "kayısı", "erik", "armut", "kivi", "misket limonu", "hindistan cevizi", "ananas", "çilek",
  "yaban mersini", "balkabağı", "lahana", "kereviz", "ıspanak", "turp", "turşu", "zencefil", "nane", "fesleğen",
  "un", "hamur", "et sosu", "sos", "ketçap", "hardal", "sirke", "yağ", "maya", "yulaf",

  // drinks
  "kakao", "limonata", "smoothie", "milkshake karışık", "punç", "elma şarabı", "viski", "brendi", "şampanya", "sütlü içecek",

  // actions
  "koşmak", "yürümek", "sekmek", "atlamak", "emeklemek", "tırmanmak", "yüzmek", "dalmak", "bağırmak", "fısıldamak",
  "gülmek", "gülümsemek", "uyumak", "uyanmak", "rüya görmek", "oturmak", "ayakta durmak", "diz çökmek", "eğilmek", "esnemek",
  "atmak", "yakalamak", "tekmelemek", "alkışlamak", "el sallamak", "işaret etmek", "tutmak", "dökmek", "karıştırmak", "dilimlemek",
  "doğramak", "soymak", "pişirmek", "kızartmak", "kaynatmak", "yıkamak", "silmek", "süpürmek", "ovmak", "durulamak",
  "katlamak", "dikmek", "örmek", "saymak", "hecelemek", "inşa etmek", "tamir etmek", "vurmak kapı", "doldurmak", "ekmek dikmek",
  "kazmak", "beslemek", "binmek", "kürek çekmek", "döndürmek", "yuvarlamak", "zıplatmak", "erimek", "dondurmak", "parlamak",
  "göz kırpmak", "bakmak", "dinlemek", "koklamak", "tatmak", "dokunmak", "öğrenmek", "öğretmek", "paylaşmak", "satın almak",
  "satmak", "biriktirmek", "saklamak", "kovalamak", "takip etmek", "önderlik etmek", "selamlamak", "sarılmak", "kaş göz işareti",

  // colors
  "kırmızı", "mavi", "yeşil", "sarı", "mor", "pembe", "altın", "gümüş",

  // weather
  "esinti", "kırağı", "dolu", "pus", "çiy", "gün ışığı", "şimşek", "çiseleme", "su birikintisi", "buz saçağı",
  "gün doğumu", "gün batımı", "ufuk", "kuyruklu yıldız", "gezegen", "göktaşı", "galaksi", "tutulma", "gelgit", "ay ışığı",

  // time
  "saniye", "dakika", "saat", "hafta", "ay", "yıl", "bugün", "yarın", "öğlen", "gece yarısı",
  "şafak", "alacakaranlık", "hafta sonu", "tatil", "doğum günü",

  // jobs
  "avukat", "hakim", "asker", "denizci", "kaptan", "belediye başkanı", "memur", "kasiyer", "garson", "kapıcı",
  "tesisatçı", "inşaatçı", "boyacı", "berber", "terzi", "kasap", "avcı", "madenci", "muhafız", "bilim insanı",
  "mühendis", "aktör", "şair", "yazar", "muhabir", "bankacı", "bahçıvan", "tamirci", "marangoz", "hizmetçi",

  // sports
  "futbol", "tenis", "golf", "hokey", "beyzbol", "kriket", "ragbi", "boks", "kayak", "sörf",
  "bowling", "dart", "satranç", "raket", "gol", "forma", "pist", "kort", "buz pisti", "takım",

  // school
  "sınıf", "ders", "ev ödevi", "test", "sınav", "not", "konu", "matematik", "fen", "tarih",
  "dolap kilitli", "sırt çantası", "ders kitabı", "küre", "hesap makinesi", "kara tahta", "teneffüs", "diploma", "konferans", "kısa sınav",

  // places
  "orman tropik", "çayır", "bozkır", "kanyon", "uçurum", "tünel", "kule", "kulübe", "baraka", "ahır",
  "ahır at", "değirmen", "deniz feneri", "iskele", "rıhtım", "liman", "alışveriş merkezi", "fırın", "eczane", "kafe",
  "lokanta", "sinema", "galeri", "arena", "tapınak", "hapishane", "adliye", "büyükelçilik", "mezarlık", "oyun alanı",

  // body more
  "alın", "yanak", "çene", "çene kemik", "kaş", "kirpik", "bilek", "ayak bileği", "topuk", "avuç içi",
  "omurga", "kaburga", "akciğer", "karaciğer", "böbrek", "kas", "sinir", "damar", "boğaz", "kalça",

  // household
  "elektrikli süpürge", "toz bezi", "faraş", "askı", "çamaşır", "deterjan", "çamaşır suyu", "paspas mat", "kilim", "stor perde",
  "minder", "yorgan", "şilte", "gardırop", "şifonyer", "komodin", "kitaplık", "şömine", "baca", "kapı kolu",
  "kapı zili", "anahtar deliği", "musluk", "gider", "priz", "termostat", "ısıtıcı", "vantilatör", "vazo", "afiş",

  // tech
  "dizüstü", "tablet", "monitör", "yazıcı", "tarayıcı", "hoparlör", "kulaklık", "şarj aleti", "kablo", "yönlendirici",
  "modem", "kumanda", "denetleyici", "joystick", "web kamerası", "mikrofon", "kulak içi kulaklık", "konsol", "adaptör", "anten",

  // nature more
  "kaya parçası", "dere", "çay akarsu", "gölet", "şelale", "bataklık", "sazlık", "kumul", "buzul", "yanardağ",
  "krater", "resif", "deniz yosunu", "yosun", "eğreltiotu", "sarmaşık asma", "sarmaşık", "kaktüs", "meşe", "çam",
  "akçaağaç", "söğüt", "huş", "bambu", "meşe palamudu", "kozalak", "tomurcuk", "diken", "sap",

  // insects & sea
  "kelebek", "böcek", "çekirge", "uğur böceği", "yusufçuk", "tırtıl", "eşek arısı", "büyük eşek arısı", "pire", "kene",
  "sümüklü böcek", "solucan toprak", "kırkayak", "akrep", "denizanası", "deniz yıldızı", "ahtapot", "kalamar", "ıstakoz", "karides",
  "midye", "istiridye", "deniz atı", "vatoz", "yılan balığı", "küçük balık", "alabalık", "somon", "ton balığı",

  // birds
  "kızılgerdan", "serçe", "ispinoz", "kardinal kuş", "ağaçkakan", "sinek kuşu", "martı", "pelikan", "flamingo", "tavus kuşu",
  "hindi", "horoz", "kaz", "kuğu", "leylek", "balıkçıl", "şahin", "atmaca", "akbaba", "kuzgun",

  // animals more
  "kuzu", "buzağı", "tay", "köpek yavrusu", "kedi yavrusu", "yavru", "domuz yavrusu", "midilli", "katır", "bufalo",
  "bizon", "geyik iri", "antilop", "ceylan", "çita", "leopar", "panter", "jaguar", "panda", "koala",
  "tembel hayvan", "su samuru", "kunduz", "rakun", "kokarca", "porsuk", "kirpi", "köstebek", "yarasa", "gelincik",
  "dağ gelinciği", "hamster", "çöl faresi", "yer sincabı", "oklu kirpi", "armadillo", "mors", "fok", "timsah", "aligatör",

  // clothing more
  "kapüşonlu", "bluz", "yelek", "hırka", "tuvalet elbisesi", "pijama", "terlik", "sandalet", "spor ayakkabı", "tek parmaklı eldiven",
  "kulaklık başlık", "bandana", "kolye", "bilezik", "küpe", "broş", "ayakkabı bağı", "yaka", "kol düğmesi", "yağmurluk",

  // misc objects
  "el feneri büyük", "kibrit kutusu", "bavul", "evrak çantası", "el çantası kadın", "kese", "anahtarlık zincir", "dürbün", "teleskop", "mikroskop",
  "termometre", "kronometre", "kum saati", "huni", "basamak tabure", "alet kutusu", "el arabası tek", "kürek", "tırmık", "çapa",
];
