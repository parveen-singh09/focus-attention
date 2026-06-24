// Een verzameling veelvoorkomende, alledaagse woorden. Ze zijn bewust eenvoudig
// en concreet (dingen die je ziet, eet, gebruikt of dagelijks doet) zodat het
// spel focus en herinnering test, niet woordenschat. 1000 woorden.
export const WORDS: readonly string[] = [
  // personen en familie
  "baby", "kind", "joch", "jongen", "meisje", "man", "vrouw", "moeder", "vader", "zus",
  "broer", "oom", "tante", "neef", "vriend", "buurman", "leraar", "dokter", "verpleegster", "chauffeur",
  "boer", "kok", "bakker", "piloot", "zanger", "kunstenaar", "schrijver", "speler", "arbeider", "student",

  // lichaam
  "hoofd", "haar", "gezicht", "oog", "oor", "neus", "mond", "lip", "tand", "tong",
  "nek", "schouder", "arm", "elleboog", "hand", "vinger", "duim", "nagel", "borst", "rug",
  "maag", "been", "knie", "voet", "teen", "hart", "hersenen", "bot", "huid", "bloed",

  // eten en drinken
  "appel", "banaan", "sinaasappel", "druif", "citroen", "kers", "perzik", "meloen", "bes", "mango",
  "brood", "boter", "kaas", "ei", "melk", "rijst", "pasta", "soep", "salade", "pizza",
  "hamburger", "boterham", "taart", "koekje", "snoep", "suiker", "zout", "peper", "honing", "jam",
  "vlees", "kip", "vis", "spek", "rundvlees", "aardappel", "tomaat", "ui", "wortel", "boon",
  "maïs", "erwt", "knoflook", "sla", "komkommer", "paddenstoel", "noot", "zaad", "olijf", "kruid",
  "koffie", "thee", "sap", "water", "frisdrank", "wijn", "bier", "room", "yoghurt", "noedel",

  // dieren
  "hond", "kat", "vogel", "paard", "koe", "varken", "schaap", "geit", "eend", "hen",
  "kuiken", "konijn", "muis", "rat", "vos", "wolf", "beer", "leeuw", "tijger", "hert",
  "aap", "olifant", "giraf", "zebra", "slang", "kikker", "schildpad", "hagedis", "spin", "mier",
  "bij", "vlieg", "mot", "worm", "slak", "krab", "haai", "walvis", "dolfijn", "uil",
  "adelaar", "kraai", "duif", "papegaai", "pinguïn", "kangoeroe", "kameel", "ezel", "eekhoorn", "nijlpaard",

  // huis en meubels
  "huis", "kamer", "deur", "raam", "muur", "vloer", "dak", "trap", "keuken", "slaapkamer",
  "badkamer", "garage", "tuin", "erf", "hek", "poort", "tafel", "stoel", "bank", "bed",
  "kussen", "deken", "lamp", "klok", "spiegel", "plank", "lade", "kast", "tapijt", "gordijn",
  "bureau", "bankje", "kruk", "sofa", "kastje", "emmer", "mand", "doos", "tas", "pot",

  // keuken en serviesgoed
  "bord", "kom", "kopje", "glas", "lepel", "vork", "mes", "kookpot", "pan", "ketel",
  "oven", "fornuis", "koelkast", "gootsteen", "handdoek", "servet", "fles", "blik", "dienblad", "deksel",

  // kleding
  "overhemd", "broek", "jurk", "rok", "jas", "jasje", "trui", "hoed", "pet", "sjaal",
  "handschoen", "sok", "schoen", "laars", "riem", "das", "knoop", "zak", "rits", "korte broek",
  "spijkerbroek", "pak", "badjas", "schort", "ring", "horloge", "bril", "handtas", "portemonnee", "paraplu",

  // natuur en weer
  "zon", "maan", "ster", "lucht", "wolk", "regen", "sneeuw", "wind", "storm", "mist",
  "ijs", "vuur", "rook", "boom", "blad", "tak", "wortel", "bloem", "gras", "struik",
  "roos", "bloemblad", "bos", "veld", "heuvel", "berg", "vallei", "rivier", "meer", "oceaan",
  "zee", "strand", "zand", "rots", "steen", "modder", "aarde", "grot", "eiland", "woestijn",
  "regenboog", "donder", "schaduw", "ochtend", "nacht", "dag", "seizoen", "zomer", "winter", "herfst",

  // school en kantoor
  "boek", "pagina", "papier", "pen", "potlood", "gum", "liniaal", "stift", "kleurpotlood", "schrift",
  "letter", "woord", "getal", "verhaal", "landkaart", "grafiek", "kaart", "postzegel", "envelop", "map",
  "schaar", "lijm", "plakband", "clip", "nietmachine", "bord", "krijt", "scherm", "toetsenbord", "kalender",

  // gereedschap en voorwerpen
  "hamer", "schroef", "zaag", "boor", "moersleutel", "ladder", "touw", "ketting", "draad", "borstel",
  "bezem", "dweil", "zeep", "spons", "kam", "scheermes", "naald", "garen", "sleutel", "slot",
  "batterij", "wiel", "motor", "pomp", "magneet", "veer", "schakelaar", "stekker", "buis", "haak",

  // vervoer
  "auto", "bus", "vrachtwagen", "trein", "vliegtuig", "boot", "schip", "fiets", "scooter", "taxi",
  "wagen", "kar", "metro", "tractor", "raket", "helikopter", "zeilboot", "kano", "veerboot", "busje",

  // plaatsen
  "school", "warenhuis", "winkel", "markt", "bank", "kantoor", "ziekenhuis", "bibliotheek", "museum", "park",
  "kerk", "hotel", "restaurant", "fabriek", "boerderij", "station", "vliegveld", "brug", "weg", "straat",
  "stad", "stadje", "dorp", "land", "paleis", "kasteel", "dierentuin", "haven", "theater", "stadion",

  // speelgoed en spel
  "bal", "speelgoed", "pop", "vlieger", "puzzel", "spel", "blok", "trommel", "ballon", "knikker",
  "schommel", "glijbaan", "robot", "marionet", "fluitje", "jojo", "dobbelsteen", "tol", "sprong", "race",

  // muziek en kunst
  "muziek", "lied", "gitaar", "piano", "viool", "fluit", "trompet", "bel", "hoorn", "harp",
  "verf", "kleur", "plaatje", "foto", "lijst", "film", "dans", "podium", "circus", "clown",

  // dagelijkse diversen
  "geld", "munt", "dollar", "prijs", "cadeau", "kaars", "lucifer", "vlag", "kaartje", "telefoon",
  "camera", "radio", "fakkel", "lantaarn", "kompas", "anker", "lint", "luchtbel", "pluim", "kiezel",
  "schelp", "koraal", "kroon", "diamant", "schat", "medaille", "trofee", "tent", "kampvuur", "slee",
  "schaats", "helm", "rietje", "ansichtkaart", "krant", "tijdschrift", "sleutelhanger", "tandenborstel", "mok", "spatel",

  // meer eten
  "toast", "wafel", "pannenkoek", "muffin", "donut", "krakeling", "popcorn", "chip", "siroop", "gelei",
  "pinda", "rozijn", "abrikoos", "pruim", "peer", "kiwi", "limoen", "kokosnoot", "ananas", "aardbei",
  "bosbes", "pompoen", "kool", "selderij", "spinazie", "radijs", "augurk", "gember", "munt", "basilicum",
  "meel", "deeg", "jus", "saus", "ketchup", "mosterd", "azijn", "olie", "gist", "haver",

  // dranken
  "cacao", "limonade", "smoothie", "shake", "punch", "cider", "whisky", "brandewijn", "champagne", "milkshake",

  // acties
  "rennen", "lopen", "huppelen", "springen", "kruipen", "klimmen", "zwemmen", "duiken", "schreeuwen", "fluisteren",
  "lachen", "glimlachen", "slapen", "ontwaken", "dromen", "zitten", "staan", "knielen", "buigen", "rekken",
  "gooien", "vangen", "schoppen", "klappen", "zwaaien", "wijzen", "vasthouden", "gieten", "roeren", "snijden",
  "hakken", "schillen", "bereiden", "bakken", "koken", "wassen", "afvegen", "vegen", "schrobben", "spoelen",
  "vouwen", "naaien", "breien", "tellen", "spellen", "bouwen", "repareren", "kloppen", "vullen", "planten",
  "graven", "voeren", "rijden", "roeien", "draaien", "rollen", "stuiteren", "smelten", "bevriezen", "schijnen",
  "knipperen", "staren", "luisteren", "ruiken", "proeven", "aanraken", "leren", "onderwijzen", "delen", "kopen",
  "verkopen", "bewaren", "verbergen", "achtervolgen", "volgen", "leiden", "begroeten", "knuffelen", "knipogen",

  // kleuren
  "rood", "blauw", "groen", "geel", "paars", "roze", "goud", "zilver",

  // weer
  "bries", "vorst", "hagel", "nevel", "dauw", "zonneschijn", "bliksem", "motregen", "plas", "ijspegel",
  "zonsopgang", "zonsondergang", "horizon", "komeet", "planeet", "meteoor", "melkwegstelsel", "eclips", "getij", "maanlicht",

  // tijd
  "seconde", "minuut", "uur", "week", "maand", "jaar", "vandaag", "morgen", "middag", "middernacht",
  "dageraad", "schemering", "weekend", "vakantie", "verjaardag",

  // beroepen
  "advocaat", "rechter", "soldaat", "matroos", "kapitein", "burgemeester", "klerk", "kassier", "ober", "conciërge",
  "loodgieter", "bouwer", "schilder", "kapper", "kleermaker", "slager", "jager", "mijnwerker", "bewaker", "wetenschapper",
  "ingenieur", "acteur", "dichter", "auteur", "verslaggever", "bankier", "tuinman", "monteur", "timmerman", "dienstmeid",

  // sport
  "voetbal", "tennis", "golf", "hockey", "honkbal", "cricket", "rugby", "boksen", "skiën", "surfen",
  "bowlen", "darts", "schaken", "racket", "doel", "shirt", "renbaan", "baan", "ijsbaan", "team",

  // school
  "klas", "les", "huiswerk", "toets", "examen", "cijfer", "vak", "wiskunde", "wetenschap", "geschiedenis",
  "kluisje", "rugzak", "leerboek", "globe", "rekenmachine", "schoolbord", "pauze", "diploma", "college", "quiz",

  // plaatsen
  "jungle", "weide", "prairie", "kloof", "klif", "tunnel", "toren", "huisje", "hut", "schuur",
  "stal", "molen", "vuurtoren", "kade", "pier", "zeehaven", "winkelcentrum", "bakkerij", "apotheek", "café",
  "eetcafé", "bioscoop", "galerie", "arena", "tempel", "gevangenis", "gerechtsgebouw", "ambassade", "begraafplaats", "speelplaats",

  // meer lichaam
  "voorhoofd", "wang", "kin", "kaak", "wenkbrauw", "wimper", "pols", "enkel", "hiel", "handpalm",
  "ruggengraat", "rib", "long", "lever", "nier", "spier", "zenuw", "ader", "keel", "heup",

  // huishouden
  "stofzuiger", "plumeau", "stofblik", "kleerhanger", "was", "wasmiddel", "bleek", "mat", "vloerkleed", "jaloezie",
  "sierkussen", "dekbed", "matras", "kledingkast", "ladekast", "nachtkastje", "boekenplank", "open haard", "schoorsteen", "deurknop",
  "deurbel", "sleutelgat", "kraan", "afvoer", "stopcontact", "thermostaat", "kachel", "ventilator", "vaas", "poster",

  // technologie
  "laptop", "tablet", "monitor", "printer", "scanner", "luidspreker", "koptelefoon", "oplader", "kabel", "router",
  "modem", "afstandsbediening", "controller", "joystick", "webcam", "microfoon", "oordopje", "console", "adapter", "antenne",

  // meer natuur
  "kei", "beek", "kreek", "vijver", "waterval", "moeras", "drasland", "duin", "gletsjer", "vulkaan",
  "krater", "rif", "zeewier", "mos", "varen", "klimplant", "klimop", "cactus", "eik", "den",
  "esdoorn", "wilg", "berk", "bamboe", "eikel", "dennenappel", "bloesem", "doorn", "stengel",

  // insecten en zee
  "vlinder", "kever", "sprinkhaan", "lieveheersbeestje", "libel", "rups", "wesp", "horzel", "vlo", "teek",
  "naaktslak", "regenworm", "duizendpoot", "schorpioen", "kwal", "zeester", "octopus", "inktvis", "kreeft", "garnaal",
  "mossel", "oester", "zeepaardje", "pijlstaartrog", "paling", "voorn", "forel", "zalm", "tonijn",

  // vogels
  "roodborstje", "mus", "vink", "kardinaal", "specht", "kolibrie", "meeuw", "pelikaan", "flamingo", "pauw",
  "kalkoen", "haan", "gans", "zwaan", "ooievaar", "reiger", "valk", "havik", "gier", "raaf",

  // meer dieren
  "lam", "kalf", "veulen", "puppy", "katje", "welp", "big", "pony", "muildier", "buffel",
  "bizon", "eland", "antilope", "gazelle", "jachtluipaard", "luipaard", "panter", "jaguar", "panda", "koala",
  "luiaard", "otter", "bever", "wasbeer", "stinkdier", "das", "egel", "mol", "vleermuis", "wezel",
  "fret", "hamster", "gerbil", "wangzakeekhoorn", "stekelvarken", "gordeldier", "walrus", "zeehond", "krokodil", "alligator",

  // meer kleding
  "hoodie", "blouse", "gilet", "vest", "japon", "pyjama", "slipper", "sandaal", "sneaker", "want",
  "oorwarmer", "bandana", "halsketting", "armband", "oorbel", "broche", "veter", "kraag", "manchetknoop", "regenjas",

  // diverse voorwerpen
  "zaklamp", "luciferdoosje", "koffer", "aktetas", "damestas", "buidel", "sleutelketting", "verrekijker", "telescoop", "microscoop",
  "thermometer", "stopwatch", "zandloper", "trechter", "opstapje", "gereedschapskist", "kruiwagen", "schep", "hark", "schoffel",
];


export function randomWord(previous?: string): string {
  let word = WORDS[Math.floor(Math.random() * WORDS.length)];
  if (previous && WORDS.length > 1) {
    while (word === previous) {
      word = WORDS[Math.floor(Math.random() * WORDS.length)];
    }
  }
  return word;
}
