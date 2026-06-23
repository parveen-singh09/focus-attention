// A pool of common, everyday words. These are deliberately simple and
// concrete (things you see, eat, use, or do every day) so the game tests
// focus and recall — not vocabulary. 500 unique words.
export const WORDS: readonly string[] = [
  // people & family
  "baby", "child", "kid", "boy", "girl", "man", "woman", "mother", "father", "sister",
  "brother", "uncle", "aunt", "cousin", "friend", "neighbor", "teacher", "doctor", "nurse", "driver",
  "farmer", "chef", "baker", "pilot", "singer", "artist", "writer", "player", "worker", "student",

  // body
  "head", "hair", "face", "eye", "ear", "nose", "mouth", "lip", "tooth", "tongue",
  "neck", "shoulder", "arm", "elbow", "hand", "finger", "thumb", "nail", "chest", "back",
  "stomach", "leg", "knee", "foot", "toe", "heart", "brain", "bone", "skin", "blood",

  // food & drink
  "apple", "banana", "orange", "grape", "lemon", "cherry", "peach", "melon", "berry", "mango",
  "bread", "butter", "cheese", "egg", "milk", "rice", "pasta", "soup", "salad", "pizza",
  "burger", "sandwich", "cake", "cookie", "candy", "sugar", "salt", "pepper", "honey", "jam",
  "meat", "chicken", "fish", "bacon", "beef", "potato", "tomato", "onion", "carrot", "bean",
  "corn", "pea", "garlic", "lettuce", "cucumber", "mushroom", "nut", "seed", "olive", "spice",
  "coffee", "tea", "juice", "water", "soda", "wine", "beer", "cream", "yogurt", "noodle",

  // animals
  "dog", "cat", "bird", "horse", "cow", "pig", "sheep", "goat", "duck", "hen",
  "chick", "rabbit", "mouse", "rat", "fox", "wolf", "bear", "lion", "tiger", "deer",
  "monkey", "elephant", "giraffe", "zebra", "snake", "frog", "turtle", "lizard", "spider", "ant",
  "bee", "fly", "moth", "worm", "snail", "crab", "shark", "whale", "dolphin", "owl",
  "eagle", "crow", "pigeon", "parrot", "penguin", "kangaroo", "camel", "donkey", "squirrel", "hippo",

  // home & furniture
  "house", "room", "door", "window", "wall", "floor", "roof", "stairs", "kitchen", "bedroom",
  "bathroom", "garage", "garden", "yard", "fence", "gate", "table", "chair", "sofa", "bed",
  "pillow", "blanket", "lamp", "clock", "mirror", "shelf", "drawer", "closet", "carpet", "curtain",
  "desk", "bench", "stool", "couch", "cabinet", "bucket", "basket", "box", "bag", "jar",

  // kitchen & dishes
  "plate", "bowl", "cup", "glass", "spoon", "fork", "knife", "pot", "pan", "kettle",
  "oven", "stove", "fridge", "sink", "towel", "napkin", "bottle", "can", "tray", "lid",

  // clothing
  "shirt", "pants", "dress", "skirt", "coat", "jacket", "sweater", "hat", "cap", "scarf",
  "glove", "sock", "shoe", "boot", "belt", "tie", "button", "pocket", "zipper", "shorts",
  "jeans", "suit", "robe", "apron", "ring", "watch", "glasses", "purse", "wallet", "umbrella",

  // nature & weather
  "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind", "storm", "fog",
  "ice", "fire", "smoke", "tree", "leaf", "branch", "root", "flower", "grass", "bush",
  "rose", "petal", "forest", "field", "hill", "mountain", "valley", "river", "lake", "ocean",
  "sea", "beach", "sand", "rock", "stone", "mud", "dirt", "cave", "island", "desert",
  "rainbow", "thunder", "shadow", "morning", "night", "day", "season", "summer", "winter", "autumn",

  // school & office
  "book", "page", "paper", "pen", "pencil", "eraser", "ruler", "marker", "crayon", "notebook",
  "letter", "word", "number", "story", "map", "chart", "card", "stamp", "envelope", "folder",
  "scissors", "glue", "tape", "clip", "stapler", "board", "chalk", "screen", "keyboard", "calendar",

  // tools & objects
  "hammer", "screw", "saw", "drill", "wrench", "ladder", "rope", "chain", "wire", "brush",
  "broom", "mop", "soap", "sponge", "comb", "razor", "needle", "thread", "key", "lock",
  "battery", "wheel", "engine", "pump", "magnet", "spring", "switch", "plug", "tube", "hook",

  // transport
  "car", "bus", "truck", "train", "plane", "boat", "ship", "bike", "scooter", "taxi",
  "wagon", "cart", "subway", "tractor", "rocket", "helicopter", "sailboat", "canoe", "ferry", "van",

  // places
  "school", "store", "shop", "market", "bank", "office", "hospital", "library", "museum", "park",
  "church", "hotel", "restaurant", "factory", "farm", "station", "airport", "bridge", "road", "street",
  "city", "town", "village", "country", "palace", "castle", "zoo", "harbor", "theater", "stadium",

  // toys & play
  "ball", "toy", "doll", "kite", "puzzle", "game", "block", "drum", "balloon", "marble",
  "swing", "slide", "robot", "puppet", "whistle", "yoyo", "dice", "top", "jump", "race",

  // music & art
  "music", "song", "guitar", "piano", "violin", "flute", "trumpet", "bell", "horn", "harp",
  "paint", "color", "picture", "photo", "frame", "movie", "dance", "stage", "circus", "clown",

  // misc everyday
  "money", "coin", "dollar", "price", "gift", "candle", "match", "flag", "ticket", "phone",
  "camera", "radio", "torch", "lantern", "compass", "anchor", "ribbon", "bubble", "feather", "pebble",
  "shell", "coral", "crown", "diamond", "treasure", "medal", "trophy", "tent", "campfire", "sled",
  "skate", "helmet", "straw", "postcard", "newspaper", "magazine", "keyring", "toothbrush", "mug", "spatula",
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
