// Un ensemble de mots courants et du quotidien. Ils sont volontairement simples
// et concrets (des choses que l'on voit, mange, utilise ou fait chaque jour)
// pour que le jeu teste la concentration et le rappel, et non le vocabulaire.
// 1000 mots.
export const WORDS: readonly string[] = [
  // personnes et famille
  "bébé", "enfant", "gamin", "garçon", "fille", "homme", "femme", "mère", "père", "sœur",
  "frère", "oncle", "tante", "cousin", "ami", "voisin", "enseignant", "médecin", "infirmier", "chauffeur",
  "agriculteur", "cuisinier", "boulanger", "pilote", "chanteur", "artiste", "écrivain", "joueur", "ouvrier", "étudiant",

  // corps
  "tête", "cheveux", "visage", "œil", "oreille", "nez", "bouche", "lèvre", "dent", "langue",
  "cou", "épaule", "bras", "coude", "main", "doigt", "pouce", "ongle", "poitrine", "dos",
  "estomac", "jambe", "genou", "pied", "orteil", "cœur", "cerveau", "os", "peau", "sang",

  // nourriture et boisson
  "pomme", "banane", "orange", "raisin", "citron", "cerise", "pêche", "melon", "baie", "mangue",
  "pain", "beurre", "fromage", "œuf", "lait", "riz", "pâtes", "soupe", "salade", "pizza",
  "hamburger", "sandwich", "gâteau", "biscuit", "bonbon", "sucre", "sel", "poivre", "miel", "confiture",
  "viande", "poulet", "poisson", "bacon", "bœuf", "pomme de terre", "tomate", "oignon", "carotte", "haricot",
  "maïs", "pois", "ail", "laitue", "concombre", "champignon", "noix", "graine", "olive", "épice",
  "café", "thé", "jus", "eau", "soda", "vin", "bière", "crème", "yaourt", "nouille",

  // animaux
  "chien", "chat", "oiseau", "cheval", "vache", "cochon", "mouton", "chèvre", "canard", "poule",
  "poussin", "lapin", "souris", "rat", "renard", "loup", "ours", "lion", "tigre", "cerf",
  "singe", "éléphant", "girafe", "zèbre", "serpent", "grenouille", "tortue", "lézard", "araignée", "fourmi",
  "abeille", "mouche", "papillon de nuit", "ver", "escargot", "crabe", "requin", "baleine", "dauphin", "hibou",
  "aigle", "corneille", "pigeon", "perroquet", "pingouin", "kangourou", "chameau", "âne", "écureuil", "hippopotame",

  // maison et meubles
  "maison", "pièce", "porte", "fenêtre", "mur", "sol", "toit", "escalier", "cuisine", "chambre",
  "salle de bain", "garage", "jardin", "cour", "clôture", "portail", "table", "chaise", "canapé", "lit",
  "oreiller", "couverture", "lampe", "horloge", "miroir", "étagère", "tiroir", "placard", "tapis", "rideau",
  "bureau", "banc", "tabouret", "divan", "buffet", "seau", "panier", "boîte", "sac", "bocal",

  // cuisine et vaisselle
  "assiette", "bol", "tasse", "verre", "cuillère", "fourchette", "couteau", "marmite", "poêle", "bouilloire",
  "four", "cuisinière", "réfrigérateur", "évier", "serviette", "serviette de table", "bouteille", "canette", "plateau", "couvercle",

  // vêtements
  "chemise", "pantalon", "robe", "jupe", "manteau", "veste", "pull", "chapeau", "casquette", "écharpe",
  "gant", "chaussette", "chaussure", "botte", "ceinture", "cravate", "bouton", "poche", "fermeture éclair", "short",
  "jean", "costume", "peignoir", "tablier", "bague", "montre", "lunettes", "pochette", "portefeuille", "parapluie",

  // nature et météo
  "soleil", "lune", "étoile", "ciel", "nuage", "pluie", "neige", "vent", "tempête", "brouillard",
  "glace", "feu", "fumée", "arbre", "feuille", "branche", "racine", "fleur", "herbe", "buisson",
  "rose", "pétale", "forêt", "champ", "colline", "montagne", "vallée", "rivière", "lac", "océan",
  "mer", "plage", "sable", "rocher", "pierre", "boue", "terre", "grotte", "île", "désert",
  "arc-en-ciel", "tonnerre", "ombre", "matin", "nuit", "jour", "saison", "été", "hiver", "automne",

  // école et bureau
  "livre", "page", "papier", "stylo", "crayon", "gomme", "règle", "marqueur", "crayon de couleur", "cahier",
  "lettre", "mot", "nombre", "histoire", "carte", "graphique", "fiche", "timbre", "enveloppe", "dossier",
  "ciseaux", "colle", "ruban adhésif", "trombone", "agrafeuse", "tableau", "craie", "écran", "clavier", "calendrier",

  // outils et objets
  "marteau", "vis", "scie", "perceuse", "clé à molette", "échelle", "corde", "chaîne", "fil de fer", "brosse",
  "balai", "serpillière", "savon", "éponge", "peigne", "rasoir", "aiguille", "fil", "clé", "serrure",
  "pile", "roue", "moteur", "pompe", "aimant", "ressort", "interrupteur", "prise", "tube", "crochet",

  // transport
  "voiture", "bus", "camion", "train", "avion", "bateau", "navire", "vélo", "trottinette", "taxi",
  "chariot", "charrette", "métro", "tracteur", "fusée", "hélicoptère", "voilier", "canoë", "ferry", "fourgon",

  // lieux
  "école", "magasin", "boutique", "marché", "banque", "bureau", "hôpital", "bibliothèque", "musée", "parc",
  "église", "hôtel", "restaurant", "usine", "ferme", "gare", "aéroport", "pont", "route", "rue",
  "ville", "bourg", "village", "pays", "palais", "château", "zoo", "port", "théâtre", "stade",

  // jouets et jeux
  "balle", "jouet", "poupée", "cerf-volant", "puzzle", "jeu", "cube", "tambour", "ballon", "bille",
  "balançoire", "toboggan", "robot", "marionnette", "sifflet", "yoyo", "dé", "toupie", "saut", "course",

  // musique et art
  "musique", "chanson", "guitare", "piano", "violon", "flûte", "trompette", "cloche", "cor", "harpe",
  "peinture", "couleur", "image", "photo", "cadre", "film", "danse", "scène", "cirque", "clown",

  // divers du quotidien
  "argent", "pièce", "dollar", "prix", "cadeau", "bougie", "allumette", "drapeau", "billet", "téléphone",
  "appareil photo", "radio", "torche", "lanterne", "boussole", "ancre", "ruban", "bulle", "plume", "caillou",
  "coquillage", "corail", "couronne", "diamant", "trésor", "médaille", "trophée", "tente", "feu de camp", "luge",
  "patin", "casque", "paille", "carte postale", "journal", "magazine", "porte-clés", "brosse à dents", "mug", "spatule",

  // encore de la nourriture
  "toast", "gaufre", "crêpe", "muffin", "beignet", "bretzel", "pop-corn", "chips", "sirop", "gelée",
  "cacahuète", "raisin sec", "abricot", "prune", "poire", "kiwi", "citron vert", "noix de coco", "ananas", "fraise",
  "myrtille", "citrouille", "chou", "céleri", "épinard", "radis", "cornichon", "gingembre", "menthe", "basilic",
  "farine", "pâte", "sauce", "sauce épaisse", "ketchup", "moutarde", "vinaigre", "huile", "levure", "avoine",

  // boissons
  "cacao", "limonade", "smoothie", "frappé", "punch", "cidre", "whisky", "brandy", "champagne", "milk-shake",

  // actions
  "courir", "marcher", "sautiller", "sauter", "ramper", "grimper", "nager", "plonger", "crier", "chuchoter",
  "rire", "sourire", "dormir", "réveiller", "rêver", "s'asseoir", "se lever", "s'agenouiller", "plier", "étirer",
  "lancer", "attraper", "botter", "applaudir", "faire signe", "pointer", "tenir", "verser", "remuer", "trancher",
  "hacher", "éplucher", "cuisiner", "frire", "bouillir", "laver", "essuyer", "balayer", "récurer", "rincer",
  "courber", "coudre", "tricoter", "compter", "épeler", "construire", "réparer", "frapper", "remplir", "planter",
  "creuser", "nourrir", "monter", "ramer", "tourner", "rouler", "rebondir", "fondre", "geler", "briller",
  "cligner", "fixer", "écouter", "sentir", "goûter", "toucher", "apprendre", "enseigner", "partager", "acheter",
  "vendre", "garder", "cacher", "poursuivre", "suivre", "mener", "accueillir", "étreindre", "faire un clin d'œil",

  // couleurs
  "rouge", "bleu", "vert", "jaune", "violet", "rose", "or", "argent",

  // météo
  "brise", "givre", "grêle", "brume", "rosée", "soleil radieux", "éclair", "bruine", "flaque", "glaçon",
  "lever du soleil", "coucher du soleil", "horizon", "comète", "planète", "météore", "galaxie", "éclipse", "marée", "clair de lune",

  // temps
  "seconde", "minute", "heure", "semaine", "mois", "année", "aujourd'hui", "demain", "midi", "minuit",
  "aube", "crépuscule", "week-end", "vacances", "anniversaire",

  // métiers
  "avocat", "juge", "soldat", "marin", "capitaine", "maire", "employé", "caissier", "serveur", "concierge",
  "plombier", "constructeur", "peintre", "barbier", "tailleur", "boucher", "chasseur", "mineur", "garde", "scientifique",
  "ingénieur", "acteur", "poète", "auteur", "reporter", "banquier", "jardinier", "mécanicien", "charpentier", "femme de ménage",

  // sports
  "football", "tennis", "golf", "hockey", "baseball", "cricket", "rugby", "boxe", "ski", "surf",
  "bowling", "fléchettes", "échecs", "raquette", "but", "maillot", "piste", "court", "patinoire", "équipe",

  // école
  "classe", "leçon", "devoirs", "test", "examen", "note", "matière", "maths", "sciences", "histoire",
  "casier", "sac à dos", "manuel", "globe", "calculatrice", "tableau noir", "récréation", "diplôme", "cours", "quiz",

  // lieux
  "jungle", "prairie", "plaine", "canyon", "falaise", "tunnel", "tour", "chaumière", "cabane", "grange",
  "écurie", "moulin", "phare", "quai", "jetée", "port", "centre commercial", "boulangerie", "pharmacie", "café",
  "bistrot", "cinéma", "galerie", "arène", "temple", "prison", "palais de justice", "ambassade", "cimetière", "aire de jeux",

  // encore le corps
  "front", "joue", "menton", "mâchoire", "sourcil", "cil", "poignet", "cheville", "talon", "paume",
  "colonne vertébrale", "côte", "poumon", "foie", "rein", "muscle", "nerf", "veine", "gorge", "hanche",

  // maison
  "aspirateur", "plumeau", "pelle à poussière", "cintre", "linge", "détergent", "eau de javel", "paillasson", "carpette", "store",
  "coussin", "courtepointe", "matelas", "garde-robe", "commode", "table de chevet", "bibliothèque", "foyer", "cheminée", "poignée de porte",
  "sonnette", "trou de serrure", "robinet", "évacuation", "prise de courant", "thermostat", "radiateur", "ventilateur", "vase", "affiche",

  // technologie
  "ordinateur portable", "tablette", "moniteur", "imprimante", "scanner", "haut-parleur", "casque audio", "chargeur", "câble", "routeur",
  "modem", "télécommande", "manette", "joystick", "webcam", "microphone", "écouteur", "console", "adaptateur", "antenne",

  // encore la nature
  "gros rocher", "ruisseau", "ruisselet", "étang", "cascade", "marais", "marécage", "dune", "glacier", "volcan",
  "cratère", "récif", "algue", "mousse", "fougère", "vigne", "lierre", "cactus", "chêne", "pin",
  "érable", "saule", "bouleau", "bambou", "gland", "pomme de pin", "fleur épanouie", "épine", "tige",

  // insectes et mer
  "papillon", "scarabée", "sauterelle", "coccinelle", "libellule", "chenille", "guêpe", "frelon", "puce", "tique",
  "limace", "ver de terre", "mille-pattes", "scorpion", "méduse", "étoile de mer", "pieuvre", "calmar", "homard", "crevette",
  "palourde", "huître", "hippocampe", "raie", "anguille", "vairon", "truite", "saumon", "thon",

  // oiseaux
  "rouge-gorge", "moineau", "pinson", "cardinal", "pic", "colibri", "mouette", "pélican", "flamant", "paon",
  "dinde", "coq", "oie", "cygne", "cigogne", "héron", "faucon", "épervier", "vautour", "corbeau",

  // encore des animaux
  "agneau", "veau", "poulain", "chiot", "chaton", "ourson", "porcelet", "poney", "mule", "buffle",
  "bison", "élan", "antilope", "gazelle", "guépard", "léopard", "panthère", "jaguar", "panda", "koala",
  "paresseux", "loutre", "castor", "raton laveur", "mouffette", "blaireau", "hérisson", "taupe", "chauve-souris", "belette",
  "furet", "hamster", "gerbille", "tamia", "porc-épic", "tatou", "morse", "phoque", "crocodile", "alligator",

  // encore des vêtements
  "sweat à capuche", "chemisier", "gilet", "cardigan", "robe de soirée", "pyjama", "pantoufle", "sandale", "basket", "moufle",
  "cache-oreilles", "bandana", "collier", "bracelet", "boucle d'oreille", "broche", "lacet", "col", "bouton de manchette", "imperméable",

  // objets divers
  "lampe de poche", "boîte d'allumettes", "valise", "mallette", "sac à main", "sacoche", "trousseau de clés", "jumelles", "télescope", "microscope",
  "thermomètre", "chronomètre", "sablier", "entonnoir", "marchepied", "boîte à outils", "brouette", "pelle", "râteau", "houe",
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
