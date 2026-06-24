// Um conjunto de palavras comuns e do dia a dia. São deliberadamente simples e
// concretas (coisas que vês, comes, usas ou fazes todos os dias) para que o
// jogo ponha à prova o foco e a memória, não o vocabulário. 1000 palavras.
export const WORDS: readonly string[] = [
  // pessoas e família
  "bebé", "criança", "miúdo", "rapaz", "rapariga", "homem", "mulher", "mãe", "pai", "irmã",
  "irmão", "tio", "tia", "primo", "amigo", "vizinho", "professor", "médico", "enfermeiro", "condutor",
  "agricultor", "cozinheiro", "padeiro", "piloto", "cantor", "artista", "escritor", "jogador", "trabalhador", "estudante",

  // corpo
  "cabeça", "cabelo", "rosto", "olho", "orelha", "nariz", "boca", "lábio", "dente", "língua",
  "pescoço", "ombro", "braço", "cotovelo", "mão", "dedo", "polegar", "unha", "peito", "costas",
  "estômago", "perna", "joelho", "pé", "dedo do pé", "coração", "cérebro", "osso", "pele", "sangue",

  // comida e bebida
  "maçã", "banana", "laranja", "uva", "limão", "cereja", "pêssego", "melão", "baga", "manga",
  "pão", "manteiga", "queijo", "ovo", "leite", "arroz", "massa", "sopa", "salada", "pizza",
  "hambúrguer", "sanduíche", "bolo", "bolacha", "rebuçado", "açúcar", "sal", "pimenta", "mel", "compota",
  "carne", "frango", "peixe", "bacon", "carne de vaca", "batata", "tomate", "cebola", "cenoura", "feijão",
  "milho", "ervilha", "alho", "alface", "pepino", "cogumelo", "noz", "semente", "azeitona", "especiaria",
  "café", "chá", "sumo", "água", "refrigerante", "vinho", "cerveja", "natas", "iogurte", "macarrão",

  // animais
  "cão", "gato", "pássaro", "cavalo", "vaca", "porco", "ovelha", "cabra", "pato", "galinha",
  "pinto", "coelho", "rato", "ratazana", "raposa", "lobo", "urso", "leão", "tigre", "veado",
  "macaco", "elefante", "girafa", "zebra", "cobra", "rã", "tartaruga", "lagarto", "aranha", "formiga",
  "abelha", "mosca", "traça", "verme", "caracol", "caranguejo", "tubarão", "baleia", "golfinho", "coruja",
  "águia", "gralha", "pombo", "papagaio", "pinguim", "canguru", "camelo", "burro", "esquilo", "hipopótamo",

  // casa e mobília
  "casa", "sala", "porta", "janela", "parede", "chão", "telhado", "escada", "cozinha", "quarto",
  "casa de banho", "garagem", "jardim", "quintal", "cerca", "portão", "mesa", "cadeira", "sofá", "cama",
  "almofada", "cobertor", "candeeiro", "relógio", "espelho", "prateleira", "gaveta", "roupeiro", "tapete", "cortina",
  "secretária", "banco", "tamborete", "divã", "armário", "balde", "cesto", "caixa", "saco", "frasco",

  // cozinha e loiça
  "prato", "tigela", "chávena", "copo", "colher", "garfo", "faca", "panela", "frigideira", "chaleira",
  "forno", "fogão", "frigorífico", "lava-loiça", "toalha", "guardanapo", "garrafa", "lata", "tabuleiro", "tampa",

  // roupa
  "camisa", "calças", "vestido", "saia", "casaco", "blusão", "camisola", "chapéu", "boné", "cachecol",
  "luva", "meia", "sapato", "bota", "cinto", "gravata", "botão", "bolso", "fecho", "calções",
  "jeans", "fato", "roupão", "avental", "anel", "relógio", "óculos", "bolsa", "carteira", "guarda-chuva",

  // natureza e clima
  "sol", "lua", "estrela", "céu", "nuvem", "chuva", "neve", "vento", "tempestade", "nevoeiro",
  "gelo", "fogo", "fumo", "árvore", "folha", "ramo", "raiz", "flor", "relva", "arbusto",
  "rosa", "pétala", "floresta", "campo", "colina", "montanha", "vale", "rio", "lago", "oceano",
  "mar", "praia", "areia", "rocha", "pedra", "lama", "terra", "gruta", "ilha", "deserto",
  "arco-íris", "trovão", "sombra", "manhã", "noite", "dia", "estação", "verão", "inverno", "outono",

  // escola e escritório
  "livro", "página", "papel", "caneta", "lápis", "borracha", "régua", "marcador", "lápis de cera", "caderno",
  "letra", "palavra", "número", "história", "mapa", "gráfico", "cartão", "selo", "envelope", "pasta",
  "tesoura", "cola", "fita", "clipe", "agrafador", "quadro", "giz", "ecrã", "teclado", "calendário",

  // ferramentas e objetos
  "martelo", "parafuso", "serra", "berbequim", "chave inglesa", "escadote", "corda", "corrente", "arame", "escova",
  "vassoura", "esfregona", "sabão", "esponja", "pente", "navalha", "agulha", "linha", "chave", "fechadura",
  "pilha", "roda", "motor", "bomba", "íman", "mola", "interruptor", "ficha", "tubo", "gancho",

  // transporte
  "carro", "autocarro", "camião", "comboio", "avião", "barco", "navio", "bicicleta", "trotinete", "táxi",
  "carroça", "carrinho", "metro", "trator", "foguetão", "helicóptero", "veleiro", "canoa", "ferry", "carrinha",

  // lugares
  "escola", "loja", "comércio", "mercado", "banco", "escritório", "hospital", "biblioteca", "museu", "parque",
  "igreja", "hotel", "restaurante", "fábrica", "quinta", "estação", "aeroporto", "ponte", "estrada", "rua",
  "cidade", "vila", "aldeia", "país", "palácio", "castelo", "jardim zoológico", "porto", "teatro", "estádio",

  // brinquedos e jogo
  "bola", "brinquedo", "boneca", "papagaio de papel", "puzzle", "jogo", "cubo", "tambor", "balão", "berlinde",
  "baloiço", "escorrega", "robô", "fantoche", "apito", "ioiô", "dado", "pião", "salto", "corrida",

  // música e arte
  "música", "canção", "guitarra", "piano", "violino", "flauta", "trompete", "sino", "trompa", "harpa",
  "tinta", "cor", "imagem", "foto", "moldura", "filme", "dança", "palco", "circo", "palhaço",

  // diversos do dia a dia
  "dinheiro", "moeda", "dólar", "preço", "presente", "vela", "fósforo", "bandeira", "bilhete", "telefone",
  "câmara", "rádio", "tocha", "lampião", "bússola", "âncora", "fita de cetim", "bolha", "pena", "seixo",
  "concha", "coral", "coroa", "diamante", "tesouro", "medalha", "troféu", "tenda", "fogueira", "trenó",
  "patim", "capacete", "palhinha", "postal", "jornal", "revista", "porta-chaves", "escova de dentes", "caneca", "espátula",

  // mais comida
  "torrada", "waffle", "panqueca", "queque", "dónute", "pretzel", "pipocas", "batata frita", "xarope", "geleia",
  "amendoim", "passa", "alperce", "ameixa", "pera", "quivi", "lima", "coco", "ananás", "morango",
  "mirtilo", "abóbora", "couve", "aipo", "espinafre", "rabanete", "picles", "gengibre", "hortelã", "manjericão",
  "farinha", "massa de pão", "molho de carne", "molho", "ketchup", "mostarda", "vinagre", "óleo", "fermento", "aveia",

  // bebidas
  "cacau", "limonada", "smoothie", "batido", "ponche", "sidra", "uísque", "brandy", "champanhe", "milkshake",

  // ações
  "correr", "caminhar", "saltitar", "pular", "gatinhar", "trepar", "nadar", "mergulhar", "gritar", "sussurrar",
  "rir", "sorrir", "dormir", "acordar", "sonhar", "sentar", "levantar", "ajoelhar", "curvar", "esticar",
  "atirar", "apanhar", "pontapear", "aplaudir", "acenar", "apontar", "segurar", "verter", "mexer", "fatiar",
  "picar", "descascar", "cozinhar", "fritar", "ferver", "lavar", "limpar", "varrer", "esfregar", "enxaguar",
  "dobrar", "coser", "tricotar", "contar", "soletrar", "construir", "reparar", "bater", "encher", "plantar",
  "cavar", "alimentar", "montar", "remar", "girar", "rolar", "ressaltar", "derreter", "congelar", "brilhar",
  "pestanejar", "fitar", "ouvir", "cheirar", "saborear", "tocar", "aprender", "ensinar", "partilhar", "comprar",
  "vender", "guardar", "esconder", "perseguir", "seguir", "guiar", "cumprimentar", "abraçar", "piscar o olho",

  // cores
  "vermelho", "azul", "verde", "amarelo", "roxo", "cor-de-rosa", "dourado", "prateado",

  // clima
  "brisa", "geada", "granizo", "névoa", "orvalho", "luz solar", "relâmpago", "chuvisco", "poça", "pingente de gelo",
  "nascer do sol", "pôr do sol", "horizonte", "cometa", "planeta", "meteoro", "galáxia", "eclipse", "maré", "luar",

  // tempo
  "segundo", "minuto", "hora", "semana", "mês", "ano", "hoje", "amanhã", "meio-dia", "meia-noite",
  "alvorada", "anoitecer", "fim de semana", "feriado", "aniversário",

  // profissões
  "advogado", "juiz", "soldado", "marinheiro", "capitão", "presidente da câmara", "funcionário", "caixa", "empregado de mesa", "porteiro",
  "canalizador", "construtor", "pintor", "barbeiro", "alfaiate", "talhante", "caçador", "mineiro", "guarda", "cientista",
  "engenheiro", "ator", "poeta", "autor", "repórter", "banqueiro", "jardineiro", "mecânico", "carpinteiro", "criada",

  // desportos
  "futebol", "ténis", "golfe", "hóquei", "basebol", "críquete", "râguebi", "boxe", "esqui", "surf",
  "bólingue", "dardos", "xadrez", "raquete", "golo", "camisola", "pista", "campo", "rinque", "equipa",

  // escola
  "aula", "lição", "trabalho de casa", "teste", "exame", "nota", "disciplina", "matemática", "ciência", "história",
  "cacifo", "mochila", "manual", "globo", "calculadora", "quadro preto", "intervalo", "diploma", "palestra", "questionário",

  // lugares
  "selva", "prado", "pradaria", "desfiladeiro", "penhasco", "túnel", "torre", "casa de campo", "cabana", "celeiro",
  "estábulo", "moinho", "farol", "doca", "cais", "porto", "centro comercial", "padaria", "farmácia", "café",
  "snack-bar", "cinema", "galeria", "arena", "templo", "prisão", "tribunal", "embaixada", "cemitério", "parque infantil",

  // mais corpo
  "testa", "bochecha", "queixo", "mandíbula", "sobrancelha", "pestana", "pulso", "tornozelo", "calcanhar", "palma",
  "coluna", "costela", "pulmão", "fígado", "rim", "músculo", "nervo", "veia", "garganta", "anca",

  // casa
  "aspirador", "espanador", "pá do lixo", "cabide", "roupa suja", "detergente", "lixívia", "capacho", "carpete", "estore",
  "coxim", "edredão", "colchão", "guarda-roupa", "cómoda", "mesa de cabeceira", "estante", "lareira", "chaminé", "maçaneta",
  "campainha", "buraco da fechadura", "torneira", "ralo", "tomada", "termóstato", "aquecedor", "ventoinha", "jarra", "cartaz",

  // tecnologia
  "portátil", "tablet", "monitor", "impressora", "scanner", "coluna", "auscultadores", "carregador", "cabo", "router",
  "modem", "comando", "controlador", "joystick", "webcam", "microfone", "auricular", "consola", "adaptador", "antena",

  // mais natureza
  "rochedo", "ribeiro", "riacho", "lagoa", "cascata", "pântano", "brejo", "duna", "glaciar", "vulcão",
  "cratera", "recife", "alga", "musgo", "feto", "trepadeira", "hera", "cato", "carvalho", "pinheiro",
  "ácer", "salgueiro", "bétula", "bambu", "bolota", "pinha", "rebento", "espinho", "caule",

  // insetos e mar
  "borboleta", "escaravelho", "gafanhoto", "joaninha", "libélula", "lagarta", "vespa", "vespão", "pulga", "carraça",
  "lesma", "minhoca", "centopeia", "escorpião", "alforreca", "estrela-do-mar", "polvo", "lula", "lagosta", "camarão",
  "amêijoa", "ostra", "cavalo-marinho", "raia", "enguia", "peixinho", "truta", "salmão", "atum",

  // aves
  "pintarroxo", "pardal", "tentilhão", "cardeal", "pica-pau", "beija-flor", "gaivota", "pelicano", "flamingo", "pavão",
  "peru", "galo", "ganso", "cisne", "cegonha", "garça", "falcão", "gavião", "abutre", "corvo",

  // mais animais
  "cordeiro", "vitelo", "potro", "cachorro", "gatinho", "cria", "leitão", "pónei", "mula", "búfalo",
  "bisonte", "alce", "antílope", "gazela", "chita", "leopardo", "pantera", "jaguar", "panda", "coala",
  "preguiça", "lontra", "castor", "guaxinim", "gambá", "texugo", "ouriço", "toupeira", "morcego", "doninha",
  "furão", "hamster", "gerbil", "esquilo-listrado", "porco-espinho", "tatu", "morsa", "foca", "crocodilo", "jacaré",

  // mais roupa
  "camisola com capuz", "blusa", "colete", "casaco de malha", "túnica", "pijama", "chinelo", "sandália", "ténis", "mitene",
  "protetor de orelhas", "bandana", "colar", "pulseira", "brinco", "broche", "atacador", "gola", "botão de punho", "impermeável",

  // objetos diversos
  "lanterna", "caixa de fósforos", "mala", "maleta", "mala de mão", "saquinho", "chaveiro", "binóculo", "telescópio", "microscópio",
  "termómetro", "cronómetro", "ampulheta", "funil", "banquinho", "caixa de ferramentas", "carrinho de mão", "pá", "ancinho", "enxada",
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
