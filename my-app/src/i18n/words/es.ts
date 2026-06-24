// Un conjunto de palabras comunes y cotidianas. Son deliberadamente simples y
// concretas (cosas que ves, comes, usas o haces a diario) para que el juego
// ponga a prueba el enfoque y el recuerdo, no el vocabulario. 1000 palabras.
export const WORDS: readonly string[] = [
  // personas y familia
  "bebé", "niño", "crío", "chico", "chica", "hombre", "mujer", "madre", "padre", "hermana",
  "hermano", "tío", "tía", "primo", "amigo", "vecino", "profesor", "médico", "enfermero", "conductor",
  "granjero", "cocinero", "panadero", "piloto", "cantante", "artista", "escritor", "jugador", "trabajador", "estudiante",

  // cuerpo
  "cabeza", "pelo", "cara", "ojo", "oreja", "nariz", "boca", "labio", "diente", "lengua",
  "cuello", "hombro", "brazo", "codo", "mano", "dedo", "pulgar", "uña", "pecho", "espalda",
  "estómago", "pierna", "rodilla", "pie", "dedo del pie", "corazón", "cerebro", "hueso", "piel", "sangre",

  // comida y bebida
  "manzana", "plátano", "naranja", "uva", "limón", "cereza", "melocotón", "melón", "baya", "mango",
  "pan", "mantequilla", "queso", "huevo", "leche", "arroz", "pasta", "sopa", "ensalada", "pizza",
  "hamburguesa", "sándwich", "pastel", "galleta", "caramelo", "azúcar", "sal", "pimienta", "miel", "mermelada",
  "carne", "pollo", "pescado", "tocino", "ternera", "patata", "tomate", "cebolla", "zanahoria", "frijol",
  "maíz", "guisante", "ajo", "lechuga", "pepino", "champiñón", "nuez", "semilla", "aceituna", "especia",
  "café", "té", "jugo", "agua", "refresco", "vino", "cerveza", "crema", "yogur", "fideo",

  // animales
  "perro", "gato", "pájaro", "caballo", "vaca", "cerdo", "oveja", "cabra", "pato", "gallina",
  "pollito", "conejo", "ratón", "rata", "zorro", "lobo", "oso", "león", "tigre", "ciervo",
  "mono", "elefante", "jirafa", "cebra", "serpiente", "rana", "tortuga", "lagarto", "araña", "hormiga",
  "abeja", "mosca", "polilla", "gusano", "caracol", "cangrejo", "tiburón", "ballena", "delfín", "búho",
  "águila", "corneja", "paloma", "loro", "pingüino", "canguro", "camello", "burro", "ardilla", "hipopótamo",

  // hogar y muebles
  "casa", "habitación", "puerta", "ventana", "pared", "suelo", "techo", "escalera", "cocina", "dormitorio",
  "baño", "garaje", "jardín", "patio", "valla", "portón", "mesa", "silla", "sofá", "cama",
  "almohada", "manta", "lámpara", "reloj", "espejo", "estante", "cajón", "armario", "alfombra", "cortina",
  "escritorio", "banca", "taburete", "diván", "alacena", "cubo", "cesta", "caja", "bolsa", "tarro",

  // cocina y vajilla
  "plato", "tazón", "taza", "vaso", "cuchara", "tenedor", "cuchillo", "olla", "sartén", "hervidor",
  "horno", "estufa", "nevera", "fregadero", "toalla", "servilleta", "botella", "lata", "bandeja", "tapa",

  // ropa
  "camisa", "pantalón", "vestido", "falda", "abrigo", "chaqueta", "suéter", "sombrero", "gorra", "bufanda",
  "guante", "calcetín", "zapato", "bota", "cinturón", "corbata", "botón", "bolsillo", "cremallera", "shorts",
  "vaqueros", "traje", "bata", "delantal", "anillo", "reloj de pulsera", "gafas", "monedero", "billetera", "paraguas",

  // naturaleza y clima
  "sol", "luna", "estrella", "cielo", "nube", "lluvia", "nieve", "viento", "tormenta", "niebla",
  "hielo", "fuego", "humo", "árbol", "hoja", "rama", "raíz", "flor", "hierba", "arbusto",
  "rosa", "pétalo", "bosque", "campo", "colina", "montaña", "valle", "río", "lago", "océano",
  "mar", "playa", "arena", "roca", "piedra", "lodo", "tierra", "cueva", "isla", "desierto",
  "arcoíris", "trueno", "sombra", "la mañana", "noche", "día", "estación del año", "verano", "invierno", "otoño",

  // escuela y oficina
  "libro", "página", "papel", "bolígrafo", "lápiz", "goma", "regla", "rotulador", "crayón", "cuaderno",
  "letra", "palabra", "número", "cuento", "mapa", "gráfico", "tarjeta", "sello", "sobre", "carpeta",
  "tijeras", "pegamento", "cinta", "clip", "grapadora", "tablero", "tiza", "pantalla", "teclado", "calendario",

  // herramientas y objetos
  "martillo", "tornillo", "sierra", "taladro", "llave inglesa", "escalera de mano", "cuerda", "cadena", "alambre", "cepillo",
  "escoba", "fregona", "jabón", "esponja", "peine", "navaja", "aguja", "hilo", "llave", "cerradura",
  "batería", "rueda", "motor", "bomba", "imán", "resorte", "interruptor", "enchufe", "tubo", "gancho",

  // transporte
  "coche", "autobús", "camión", "tren", "avión", "bote", "barco", "bicicleta", "patinete", "taxi",
  "vagón", "carro", "metro", "tractor", "cohete", "helicóptero", "velero", "canoa", "transbordador", "furgoneta",

  // lugares
  "escuela", "tienda", "comercio", "mercado", "banco", "oficina", "hospital", "biblioteca", "museo", "parque",
  "iglesia", "hotel", "restaurante", "fábrica", "granja", "estación", "aeropuerto", "puente", "carretera", "calle",
  "ciudad", "pueblo", "aldea", "país", "palacio", "castillo", "zoológico", "puerto", "teatro", "estadio",

  // juguetes y juego
  "pelota", "juguete", "muñeca", "papalote", "rompecabezas", "juego", "bloque", "tambor", "globo", "canica",
  "columpio", "tobogán", "robot", "títere", "silbato", "yoyó", "dado", "trompo", "salto", "carrera",

  // música y arte
  "música", "canción", "guitarra", "piano", "violín", "flauta", "trompeta", "campana", "cuerno", "arpa",
  "pintura", "color", "imagen", "foto", "marco", "película", "baile", "escenario", "circo", "payaso",

  // varios cotidianos
  "dinero", "moneda", "dólar", "precio", "regalo", "vela", "cerilla", "bandera", "boleto", "teléfono",
  "cámara", "radio", "antorcha", "farol", "brújula", "ancla", "lazo", "burbuja", "pluma", "guijarro",
  "concha", "coral", "corona", "diamante", "tesoro", "medalla", "trofeo", "carpa", "fogata", "trineo",
  "patín", "casco", "pajita", "postal", "periódico", "revista", "llavero", "cepillo de dientes", "jarra", "espátula",

  // más comida
  "tostada", "gofre", "panqueque", "magdalena", "dona", "pretzel", "palomitas", "papas", "jarabe", "gelatina",
  "cacahuete", "pasa", "albaricoque", "ciruela", "pera", "kiwi", "lima", "coco", "piña", "fresa",
  "arándano", "calabaza", "col", "apio", "espinaca", "rábano", "encurtido", "jengibre", "menta", "albahaca",
  "harina", "masa", "salsa de carne", "salsa", "kétchup", "mostaza", "vinagre", "aceite", "levadura", "avena",

  // bebidas
  "cacao", "limonada", "licuado", "batido", "ponche", "sidra", "whisky", "brandy", "champán", "malteada",

  // acciones
  "correr", "caminar", "brincar", "saltar", "gatear", "trepar", "nadar", "bucear", "gritar", "susurrar",
  "reír", "sonreír", "dormir", "despertar", "soñar", "sentarse", "pararse", "arrodillarse", "doblar", "estirar",
  "lanzar", "atrapar", "patear", "aplaudir", "agitar", "señalar", "sostener", "verter", "revolver", "rebanar",
  "picar", "pelar", "cocinar", "freír", "hervir", "lavar", "limpiar", "barrer", "fregar", "enjuagar",
  "plegar", "coser", "tejer", "contar", "deletrear", "construir", "arreglar", "golpear", "llenar", "plantar",
  "cavar", "alimentar", "montar", "remar", "girar", "rodar", "rebotar", "derretir", "congelar", "brillar",
  "parpadear", "contemplar", "escuchar", "oler", "saborear", "tocar", "aprender", "enseñar", "compartir", "comprar",
  "vender", "guardar", "esconder", "perseguir", "seguir", "guiar", "saludar", "abrazar", "guiñar",

  // colores
  "rojo", "azul", "verde", "amarillo", "morado", "rosado", "dorado", "plateado",

  // clima
  "brisa", "escarcha", "granizo", "neblina", "rocío", "resol", "relámpago", "llovizna", "charco", "carámbano",
  "amanecer", "atardecer", "horizonte", "cometa", "planeta", "meteoro", "galaxia", "eclipse", "marea", "luz lunar",

  // tiempo
  "segundo", "minuto", "hora", "semana", "mes", "año", "hoy", "mañana", "mediodía", "medianoche",
  "alba", "ocaso", "fin de semana", "feriado", "cumpleaños",

  // oficios
  "abogado", "juez", "soldado", "marinero", "capitán", "alcalde", "oficinista", "cajero", "camarero", "conserje",
  "fontanero", "constructor", "pintor", "barbero", "sastre", "carnicero", "cazador", "minero", "guardia", "científico",
  "ingeniero", "actor", "poeta", "autor", "reportero", "banquero", "jardinero", "mecánico", "carpintero", "criada",

  // deportes
  "fútbol", "tenis", "golf", "hockey", "béisbol", "críquet", "rugby", "boxeo", "esquí", "surf",
  "bolos", "dardos", "ajedrez", "raqueta", "gol", "camiseta", "pista", "cancha", "patinódromo", "equipo",

  // escuela
  "clase", "lección", "tarea", "prueba", "examen", "nota", "asignatura", "matemáticas", "ciencia", "historia",
  "casillero", "mochila", "manual", "globo terráqueo", "calculadora", "pizarra", "recreo", "diploma", "conferencia", "cuestionario",

  // lugares
  "selva", "pradera", "llanura", "cañón", "acantilado", "túnel", "torre", "casita", "cabaña", "granero",
  "establo", "molino", "faro", "muelle", "embarcadero", "puerto marítimo", "centro comercial", "panadería", "farmacia", "cafetería",
  "comedor", "cine", "galería", "ruedo", "templo", "prisión", "juzgado", "embajada", "cementerio", "parque infantil",

  // más cuerpo
  "frente", "mejilla", "barbilla", "mandíbula", "ceja", "pestaña", "muñeca de la mano", "tobillo", "talón", "palma",
  "columna", "costilla", "pulmón", "hígado", "riñón", "músculo", "nervio", "vena", "garganta", "cadera",

  // hogar
  "aspiradora", "plumero", "recogedor", "percha", "colada", "detergente", "lejía", "estera", "alfombrilla", "persiana",
  "cojín", "edredón", "colchón", "ropero", "cómoda", "mesilla", "librería", "hogar", "chimenea", "pomo",
  "timbre", "ojo de cerradura", "grifo", "desagüe", "tomacorriente", "termostato", "calefactor", "ventilador", "jarrón", "cartel",

  // tecnología
  "portátil", "tableta", "monitor", "impresora", "escáner", "altavoz", "auriculares", "cargador", "cable", "enrutador",
  "módem", "mando", "controlador", "palanca", "webcam", "micrófono", "audífono", "consola", "adaptador", "antena",

  // más naturaleza
  "peñasco", "arroyo", "riachuelo", "estanque", "cascada", "pantano", "ciénaga", "duna", "glaciar", "volcán",
  "cráter", "arrecife", "alga", "musgo", "helecho", "enredadera", "hiedra", "cactus", "roble", "pino",
  "arce", "sauce", "abedul", "bambú", "bellota", "piña de pino", "capullo", "espina", "tallo",

  // insectos y mar
  "mariposa", "escarabajo", "saltamontes", "mariquita", "libélula", "oruga", "avispa", "avispón", "pulga", "garrapata",
  "babosa", "lombriz", "ciempiés", "escorpión", "medusa", "estrella de mar", "pulpo", "calamar", "langosta", "camarón",
  "almeja", "ostra", "caballito de mar", "raya", "anguila", "pececillo", "trucha", "salmón", "atún",

  // aves
  "petirrojo", "gorrión", "pinzón", "cardenal", "pájaro carpintero", "colibrí", "gaviota", "pelícano", "flamenco", "pavorreal",
  "pavo", "gallo", "ganso", "cisne", "cigüeña", "garza", "halcón", "gavilán", "buitre", "cuervo",

  // más animales
  "cordero", "ternero", "potro", "cachorro", "gatito", "cría", "lechón", "poni", "mula", "búfalo",
  "bisonte", "alce", "antílope", "gacela", "guepardo", "leopardo", "pantera", "jaguar", "panda", "koala",
  "perezoso", "nutria", "castor", "mapache", "zorrillo", "tejón", "erizo", "topo", "murciélago", "comadreja",
  "hurón", "hámster", "jerbo", "ardilla listada", "puercoespín", "armadillo", "morsa", "foca", "cocodrilo", "caimán",

  // más ropa
  "sudadera", "blusa", "chaleco", "cárdigan", "túnica", "pijama", "zapatilla", "sandalia", "zapatilla deportiva", "manopla",
  "orejera", "pañuelo", "collar", "pulsera", "arete", "broche", "cordón", "cuello de camisa", "gemelo", "impermeable",

  // objetos varios
  "linterna", "fosforera", "maleta", "maletín", "bolso", "bolsita", "cadena para llaves", "binoculares", "telescopio", "microscopio",
  "termómetro", "cronómetro", "reloj de arena", "embudo", "escalón", "caja de herramientas", "carretilla", "pala", "rastrillo", "azada",
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
