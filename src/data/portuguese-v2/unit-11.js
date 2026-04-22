const UNIT_11 = {n:11, lang:"pt", srcLang:"en", track:"v2", title:"O que você gosta de fazer?", sub:"Hobbies and Sports", icon:"⚽", level:"A2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u11l1", title:"Hobbies e lazer", icon:"🎨", xp:15, board:true, steps:[
{type:"intro", title:"Talking about hobbies",
 desc:"Brazilians love asking what you do for fun. Learn the core nouns for hobbies, sports, music, books, and films so you can share your interests.",
 goals:["Learn the main free-time nouns","Use 'gostar de' with activities","Talk about what you enjoy"]},

{type:"teach", trg:"o hobby", src:"the hobby", pos:"noun", gender:"m",
 note:"Hobby. Masculine loanword from English. Also: o passatempo (pastime).",
 example:"A: Qual é o seu hobby?\nB: Pintar.\nA: Que legal!\nB: E o seu?\nA: Cantar.",
 exampleSrc:"A: What is your hobby?\nB: Painting.\nA: How cool!\nB: And yours?\nA: Singing.",
 funFact:"Portuguese absorbed 'hobby' from English directly. The plural is 'hobbies', also English-style."},

{type:"teach", trg:"o esporte", src:"the sport", pos:"noun", gender:"m",
 note:"Sport. Masculine noun. In Portugal spelled 'desporto'.",
 example:"A: Pratica algum esporte?\nB: Sim, futebol.\nA: Onde?\nB: Na praia, de manhã.",
 exampleSrc:"A: Do you play any sport?\nB: Yes, football.\nA: Where?\nB: On the beach, in the morning.",
 funFact:"From the English 'sport'. Brazil's favorite sport is football, but volleyball and futsal are close behind."},

{type:"teach", trg:"o futebol", src:"the football", pos:"noun", gender:"m",
 note:"Football (soccer). Masculine noun. The national sport of Brazil.",
 example:"A: Gosta de futebol?\nB: Muito!\nA: Pratica esporte?\nB: Sim, futebol é o meu esporte.",
 exampleSrc:"A: Do you like football?\nB: Very much!\nA: Do you play sport?\nB: Yes, football is my sport.",
 funFact:"Brazil is the only country to have played in every FIFA World Cup since the tournament began in 1930."},

{type:"teach", trg:"a praia", src:"the beach", pos:"noun", gender:"f",
 note:"Beach. Feminine noun. Central to Brazilian life along the coast.",
 example:"A: Vamos à praia?\nB: Com este calor?\nA: Sim, está perfeito.\nB: Ótimo, vamos nadar!",
 exampleSrc:"A: Shall we go to the beach?\nB: In this heat?\nA: Yes, it is perfect.\nB: Great, let's swim!",
 funFact:"Rio's Copacabana beach stretches four kilometers and hosts over two million people for New Year's Eve."},

{type:"teach", trg:"a música", src:"the music", pos:"noun", gender:"f",
 note:"Music, song. Feminine noun. Same word for the art form and an individual song.",
 example:"A: Gosta desta música?\nB: Adoro!\nA: De quem é?\nB: Da Anitta.",
 exampleSrc:"A: Do you like this song?\nB: I love it!\nA: Who is it by?\nB: By Anitta.",
 funFact:"Bossa nova, samba, forró, and funk carioca are all Brazilian genres recognized worldwide."},

{type:"teach", trg:"o livro", src:"the book", pos:"noun", gender:"m",
 note:"Book. Masculine noun. Plural: os livros.",
 example:"A: Está lendo algum livro?\nB: Sim, do Jorge Amado.\nA: Qual?\nB: Gabriela, Cravo e Canela.",
 exampleSrc:"A: Are you reading a book?\nB: Yes, by Jorge Amado.\nA: Which one?\nB: Gabriela, Clove and Cinnamon.",
 funFact:"Jorge Amado's novels have been translated into nearly fifty languages, making him Brazil's most internationally read author."},

{type:"teach", trg:"o filme", src:"the film", pos:"noun", gender:"m",
 note:"Film, movie. Masculine noun. Plural: os filmes.",
 example:"A: Quer ver um filme?\nB: Que filme?\nA: Um brasileiro, Cidade de Deus.\nB: Já vi, é ótimo.",
 exampleSrc:"A: Want to watch a film?\nB: Which film?\nA: A Brazilian one, City of God.\nB: I saw it, it is great.",
 funFact:"'Cidade de Deus' (2002) received four Academy Award nominations and is considered a classic of Brazilian cinema."},

{type:"tip", title:"Gostar DE + noun",
 text:"To say you like something, Portuguese always needs 'de':\n\nGosto de futebol. (I like football.)\nEla gosta de música. (She likes music.)\nGostamos de praia. (We like the beach.)\n\nThe preposition 'de' is obligatory. Never say 'Gosto música'. When 'de' meets 'o' or 'a', they combine: 'do', 'da'. Gosto do Brasil. Gosto da praia.",
 deepDive:{title:"Gostar de + Verb",
  text:"With verbs, you also need 'de':\n\nGosto de ler. (I like to read.)\nEle gosta de cantar. (He likes to sing.)\nGostam de dançar. (They like to dance.)\n\nThe verb after 'de' stays in infinitive form. Think of 'de' as tying the two words together."}},

{type:"fb", s:"O {1} é o esporte nacional do Brasil.",
 a:["futebol"],
 opts:["futebol","esporte","livro","filme"],
 hint:"The sport Brazilians are most famous for, played with a round ball.",
 sSrc:"{1} is the national sport of Brazil."},

{type:"fb", s:"Vamos à {1} nadar! Está muito calor hoje.",
 a:["praia"],
 opts:["praia","música","filme","hobby"],
 hint:"The sandy place by the ocean. Feminine noun.",
 sSrc:"Let's go to the {1} to swim! It's very hot today."},

{type:"mc", q:"How do you say 'I like football'?",
 opts:["Eu gosto de futebol","Eu futebol gosto","Eu sou futebol","Eu gosto futebol"],
 ans:"Eu gosto de futebol",
 hint:"The verb 'gostar' always needs the preposition that means 'of'."},

{type:"mc", q:"Which word means 'the beach'?",
 opts:["o filme","a praia","a música","o livro"],
 ans:"a praia",
 hint:"The feminine noun for the sandy place next to the ocean."},

{type:"fb", s:"Gosto de ler. Adoro um bom {1}.",
 a:["livro"],
 opts:["livro","futebol","filme","esporte"],
 hint:"Something with pages that you read for pleasure.",
 sSrc:"I like to read. I love a good {1}."},

{type:"match", pairs:[
 {trg:"hobby", src:"hobby"},
 {trg:"esporte", src:"sport"},
 {trg:"música", src:"music"},
 {trg:"filme", src:"film"}
]},

{type:"mc", q:"'Vamos à praia!' means:",
 opts:["The beach is nice","We are at the beach","Let's go to the beach","I like the beach"],
 ans:"Let's go to the beach",
 hint:"'Vamos' with infinitive is 'let's go' and 'à' is 'to the'."},

{type:"fb", s:"Qual é o seu esporte favorito? Adoro {1}.",
 a:["futebol"],
 opts:["futebol","livro","música","praia"],
 hint:"Brazil's national sport, played with a round ball.",
 sSrc:"What is your favorite sport? I love {1}."},

{type:"mc", q:"Which word means 'music'?",
 opts:["o esporte","o livro","o filme","a música"],
 ans:"a música",
 hint:"The feminine noun for what musicians create."}
]},

{id:"ptv2_u11l2", title:"Verbos de arte", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Creative and artistic verbs",
 desc:"Learn the verbs for the things you do in your free time: playing music, singing, dancing, and playing games.",
 goals:["Use tocar, cantar, dançar, jogar","Distinguish tocar and jogar","Talk about activities you do"]},

{type:"teach", trg:"tocar", src:"to play (instrument)", pos:"verb", gender:null,
 note:"Regular -ar verb: toco, toca, tocamos, tocam. Used for instruments and for 'to touch'.",
 example:"A: Toca algum instrumento?\nB: Sim, violão.\nA: Desde quando?\nB: Desde criança.",
 exampleSrc:"A: Do you play any instrument?\nB: Yes, guitar.\nA: Since when?\nB: Since I was a child.",
 funFact:"'Tocar' is used for musical instruments, while 'jogar' is used for sports and games."},

{type:"teach", trg:"cantar", src:"to sing", pos:"verb", gender:null,
 note:"Regular -ar verb: canto, canta, cantamos, cantam.",
 example:"A: Você canta bem!\nB: Obrigada.\nA: Canta numa banda?\nB: Só em casa, por diversão.",
 exampleSrc:"A: You sing well!\nB: Thank you.\nA: Do you sing in a band?\nB: Only at home, for fun.",
 funFact:"From Latin 'cantare'. Related to English 'chant' and 'cantor'."},

{type:"teach", trg:"dançar", src:"to dance", pos:"verb", gender:null,
 note:"Regular -ar verb: danço, dança, dançamos, dançam. Spelling: ç before a/o/u.",
 example:"A: Quer dançar?\nB: Não sei dançar samba.\nA: Eu ensino!\nB: Está bem, vamos.",
 exampleSrc:"A: Do you want to dance?\nB: I do not know how to dance samba.\nA: I will teach you!\nB: Okay, let's go.",
 funFact:"Samba, forró, and bossa nova all originated in Brazil and each has its own distinct steps."},

{type:"teach", trg:"jogar", src:"to play (game/sport)", pos:"verb", gender:null,
 note:"Regular -ar verb: jogo, joga, jogamos, jogam. For sports and games, NOT instruments.",
 example:"A: Joga futebol?\nB: Sim, todo sábado.\nA: Com quem?\nB: Com os amigos.",
 exampleSrc:"A: Do you play football?\nB: Yes, every Saturday.\nA: With whom?\nB: With friends.",
 funFact:"From Latin 'iocari' (to joke). Same root as English 'joke' and 'jocular'."},

{type:"teach", trg:"ler", src:"to read", pos:"verb", gender:null,
 note:"Irregular verb: leio, lê, lemos, leem. Short but irregular.",
 example:"A: Você lê muito?\nB: Sim, adoro ler livros.\nA: De que tipo?\nB: Gosto de livros de música.",
 exampleSrc:"A: Do you read a lot?\nB: Yes, I love to read books.\nA: What kind?\nB: I like music books.",
 funFact:"From Latin 'legere', also the root of English 'legend' and 'lecture'."},

{type:"teach", trg:"escrever", src:"to write", pos:"verb", gender:null,
 note:"Regular -er verb: escrevo, escreve, escrevemos, escrevem.",
 example:"A: Você escreve?\nB: Sim, escrevo e leio muito.\nA: Escreve livros?\nB: Não, escrevo música.",
 exampleSrc:"A: Do you write?\nB: Yes, I write and read a lot.\nA: Do you write books?\nB: No, I write music.",
 funFact:"From Latin 'scribere'. Same root as 'escritório' (office), the place where you write."},

{type:"teach", trg:"assistir", src:"to watch", pos:"verb", gender:null,
 note:"Regular -ir verb: assisto, assiste, assistimos, assistem. In Brazil often followed by 'a': assistir a um filme.",
 example:"A: Vai assistir ao jogo?\nB: Claro!\nA: Onde?\nB: No bar da esquina.",
 exampleSrc:"A: Are you going to watch the game?\nB: Of course!\nA: Where?\nB: At the bar on the corner.",
 funFact:"'Assistir' also means 'to assist' in some contexts, but in everyday Brazilian it means 'to watch'."},

{type:"tip", title:"Tocar vs Jogar",
 text:"Two verbs, both 'to play' in English:\n\nTocar = to play an INSTRUMENT.\nTocar piano. Tocar violão. Tocar flauta.\n\nJogar = to play a GAME or SPORT.\nJogar futebol. Jogar xadrez. Jogar tênis.\n\nNever mix them. A Brazilian hears 'toco futebol' the way an English speaker hears 'I sound football'.",
 deepDive:{title:"Tocar has other meanings",
  text:"'Tocar' can also mean:\n\nto touch: Não toque nisso. (Do not touch that.)\nto ring: O telefone está tocando. (The phone is ringing.)\nto be someone's turn: Agora toca a você. (Now it is your turn.)\n\nContext always makes it clear. Instruments remain the most common use."}},

{type:"mc", q:"Which verb do you use for playing the guitar?",
 opts:["tocar","cantar","dançar","jogar"],
 ans:"tocar",
 hint:"Musical instruments need a different verb than sports."},

{type:"mc", q:"Which verb means 'to dance'?",
 opts:["cantar","dançar","tocar","jogar"],
 ans:"dançar",
 hint:"The verb connected to music with body movement."},

{type:"fb", s:"Todo sábado {1} futebol com os amigos.",
 a:["jogo"],
 opts:["jogo","toco","canto","leio"],
 hint:"Use the 'eu' form of the verb for playing sports.",
 sSrc:"Every Saturday I {1} football with friends."},

{type:"match", pairs:[
 {trg:"cantar", src:"to sing"},
 {trg:"dançar", src:"to dance"},
 {trg:"ler", src:"to read"},
 {trg:"escrever", src:"to write"}
]},

{type:"mc", q:"What does 'Gosto de assistir filmes' mean?",
 opts:["I like singing films","I like making films","I like watching films","I like writing films"],
 ans:"I like watching films",
 hint:"The verb assistir means 'to watch' in Brazilian usage."},

{type:"fb", s:"Minha irmã {1} muito bem. Já gravou um álbum.",
 a:["canta"],
 opts:["canta","toca","joga","lê"],
 hint:"Use the 3rd-person singular of the verb that produces musical sound with the voice.",
 sSrc:"My sister {1} very well. She has already recorded an album."},

{type:"mc", q:"'Adoro ler livros' means:",
 opts:["I love to watch books","I love to buy books","I love to write books","I love to read books"],
 ans:"I love to read books",
 hint:"'Ler' is the verb for reading; 'livros' is …."},

{type:"fb", s:"Todos os dias eu {1} um email para minha mãe.",
 a:["escrevo"],
 opts:["escrevo","leio","canto","jogo"],
 hint:"Use the 'eu' form of the verb for writing.",
 sSrc:"Every day I {1} an email to my mother."}
]},

{id:"ptv2_u11l3", title:"Atividades físicas", icon:"🏃", xp:15, board:true, steps:[
{type:"intro", title:"Walking, running, swimming",
 desc:"Many Brazilians exercise in parks and on the beach. Learn the three most common physical activity verbs.",
 goals:["Use caminhar, correr, nadar","Talk about exercise","Combine with location words"]},

{type:"teach", trg:"caminhar", src:"to walk", pos:"verb", gender:null,
 note:"Regular -ar verb: caminho, caminha, caminhamos, caminham. Walking for exercise or leisure.",
 example:"A: Você caminha todo dia?\nB: Sim, uma hora.\nA: Onde?\nB: Na praia, de manhã.",
 exampleSrc:"A: Do you walk every day?\nB: Yes, for an hour.\nA: Where?\nB: On the beach, in the morning.",
 funFact:"From 'caminho' (path). Older form 'andar' is also used for 'to walk' in everyday speech."},

{type:"teach", trg:"correr", src:"to run", pos:"verb", gender:null,
 note:"Regular -er verb: corro, corre, corremos, correm.",
 example:"A: Gosta de correr?\nB: Adoro!\nA: Quantos quilômetros?\nB: Cinco por dia.",
 exampleSrc:"A: Do you like running?\nB: I love it!\nA: How many kilometers?\nB: Five a day.",
 funFact:"From Latin 'currere'. Same root as English 'current', 'course', and 'courier'."},

{type:"teach", trg:"nadar", src:"to swim", pos:"verb", gender:null,
 note:"Regular -ar verb: nado, nada, nadamos, nadam. Popular due to Brazil's coastline.",
 example:"A: Nada bem?\nB: Desde criança.\nA: No mar ou na piscina?\nB: Prefiro o mar.",
 exampleSrc:"A: Do you swim well?\nB: Since childhood.\nA: In the sea or in the pool?\nB: I prefer the sea.",
 funFact:"'Nadar' shares its Latin root 'natare' with English 'natation', the formal term for swimming."},

{type:"tip", title:"Exercise Vocabulary",
 text:"Common ways to talk about exercise:\n\nFaço exercício. (I exercise.)\nVou à academia. (I go to the gym.)\nCorro três vezes por semana. (I run three times a week.)\nCaminho no parque. (I walk in the park.)\n\nThe verb 'praticar' also works: praticar esporte, praticar natação.",
 deepDive:{title:"Caminhar vs Andar",
  text:"Both verbs mean 'to walk':\n\nCaminhar is for exercise or a long walk: 'Caminho na praia.'\nAndar is general movement: 'Ando devagar.' (I walk slowly.)\n\n'Andar' also has non-walking meanings: 'Como anda o trabalho?' (How is work going?). For fitness and leisurely walks, 'caminhar' is clearer."}},

{type:"mc", q:"Which verb means 'to run'?",
 opts:["correr","nadar","jogar","caminhar"],
 ans:"correr",
 hint:"Faster than walking, related to 'current' in English."},

{type:"mc", q:"Where would you nadar?",
 opts:["numa biblioteca","no mar","num escritório","num cinema"],
 ans:"no mar",
 hint:"Nadar means to swim, so you need water."},

{type:"fb", s:"Eu {1} todas as manhãs na praia.",
 a:["caminho"],
 opts:["caminho","corro","nado","canto"],
 hint:"Use the 'eu' form of the verb for walking for exercise.",
 sSrc:"I {1} every morning on the beach."},

{type:"match", pairs:[
 {trg:"caminhar", src:"to walk"},
 {trg:"correr", src:"to run"},
 {trg:"nadar", src:"to swim"},
 {trg:"jogar", src:"to play (sport)"}
]},

{type:"mc", q:"Which sentence means 'She swims in the sea'?",
 opts:["Ela caminha no mar","Ela corre no mar","Ela nada no mar","Ela joga no mar"],
 ans:"Ela nada no mar",
 hint:"Swimming involves water and the matching verb."},

{type:"fb", s:"Meu irmão {1} cinco quilômetros todos os dias.",
 a:["corre"],
 opts:["corre","caminha","nada","toca"],
 hint:"Use 3rd-person singular for running long distances.",
 sSrc:"My brother {1} five kilometers every day."},

{type:"mc", q:"'Nadamos na piscina' means:",
 opts:["We walk in the pool","We play in the pool","We run in the pool","We swim in the pool"],
 ans:"We swim in the pool",
 hint:"The 'we' form of the verb for moving through water."},

{type:"fb", s:"Gosto de {1} no parque porque tem sombra.",
 a:["caminhar"],
 opts:["caminhar","jogar","cantar","assistir"],
 hint:"After 'gosto de' use the infinitive of the walking verb.",
 sSrc:"I like to {1} in the park because it is shady."},

{type:"mc", q:"Which hobby verb pairs with 'violão' (guitar)?",
 opts:["tocar","correr","ler","jogar"],
 ans:"tocar",
 hint:"Instruments require the touch/play verb, not the sports verb."}
,

{type:"match", pairs:[
  {trg:"assistir", src:"to watch"}
]}]}

]}; export default UNIT_11;
