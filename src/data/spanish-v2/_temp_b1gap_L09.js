// L09: Sports & Leisure - Games, fitness, and outdoor recreation
const LESSON_9 = {
  id:"esv2_b1gap_l9", title:"Deporte y ocio", icon:"\u{26BD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Deporte y ocio",
     desc:"Get active and have fun. Learn vocabulary for sports, games, and leisure activities.",
     goals:["Learn 20 sports and leisure words","Describe games and competitions","Talk about hobbies and recreation"]},

    {type:"teach", trg:"apostar", src:"to bet, to wager", pos:"verb", gender:null,
     note:"Irregular -ar verb. o > ue: apuesto, apuestas.\nApostar por = to bet on, to back.",
     example:"A: \u00bfApost\u00e1is algo en el partido?\nB: No, solo lo vemos por diversi\u00f3n.",
     exampleSrc:"A: Are you betting anything on the match?\nB: No, we just watch for fun.",
     funFact:"From Latin 'apponere' (to place). 'Apuesta' (the bet) and 'apuesto' (handsome) look alike but have different origins. Pure coincidence."},

    {type:"teach", trg:"el billar", src:"the billiards, pool", pos:"noun", gender:"m",
     note:"Masculine noun. The game played on a green table.\nJugar al billar = to play pool.",
     example:"A: \u00bfJugamos una partida de billar?\nB: Vale, pero soy mal\u00edsimo.",
     exampleSrc:"A: Shall we play a game of pool?\nB: Okay, but I am terrible at it.",
     funFact:"From French 'billard', from 'bille' (ball). The game arrived in Spain from France in the 1700s and became a staple of Spanish bars and clubs."},

    {type:"teach", trg:"el buceo", src:"the diving, scuba diving", pos:"noun", gender:"m",
     note:"Masculine noun. From 'bucear' (to dive).\nBuceo libre = freediving.",
     example:"A: Me encanta el buceo en el Mediterr\u00e1neo.\nB: \u00bfHas buceado en las Islas Medas?",
     exampleSrc:"A: I love diving in the Mediterranean.\nB: Have you dived at the Medes Islands?",
     funFact:"Possibly from Catalan 'bussejar'. Spain's Mediterranean coast and Canary Islands are top diving destinations with crystal-clear waters."},

    {type:"teach", trg:"el buceador", src:"the diver", pos:"noun", gender:"m",
     note:"Masculine noun. La buceadora = female diver.\nSomeone who practices buceo.",
     example:"A: Los buceadores encontraron un barco hundido.\nB: \u00a1Qu\u00e9 emocionante!",
     exampleSrc:"A: The divers found a sunken ship.\nB: How exciting!",
     funFact:"Built with the '-ador' agent suffix: bucear > buceador. Same pattern: jugar > jugador, nadar > nadador, pescar > pescador."},

    {type:"teach", trg:"la baraja", src:"the deck of cards", pos:"noun", gender:"f",
     note:"Feminine noun. The Spanish deck has 48 cards.\nBarajar = to shuffle.",
     example:"A: \u00bfD\u00f3nde est\u00e1 la baraja?\nB: En el caj\u00f3n de la mesa.",
     exampleSrc:"A: Where is the deck of cards?\nB: In the table drawer.",
     funFact:"Possibly from Arabic 'baraha' (to mix). The Spanish deck uses oros (coins), copas (cups), espadas (swords), and bastos (clubs) instead of the French suits."},

    {type:"teach", trg:"el brindis", src:"the toast (with glasses)", pos:"noun", gender:"m",
     note:"Masculine noun. Raising glasses to celebrate.\nHacer un brindis = to make a toast.",
     example:"A: Hagamos un brindis por el cumplea\u00f1ero.\nB: \u00a1Salud! \u00a1Por muchos m\u00e1s!",
     exampleSrc:"A: Let's make a toast for the birthday person.\nB: Cheers! To many more!",
     funFact:"The legend says it comes from German soldiers saying 'Bring dir's!' (I bring it to you!) while raising their cups. Likely folk etymology, but fun."},

    {type:"mc",
     q:"\u00bfQu\u00e9 deporte se practica bajo el agua?",
     opts:["el buceo","el billar","la baraja","el brindis"],
     ans:"el buceo",
     hint:"An underwater activity where you explore the sea with a mask and often an oxygen tank."},

    {type:"teach", trg:"el bricolaje", src:"the DIY, home improvement", pos:"noun", gender:"m",
     note:"Masculine noun. From French 'bricolage'.\nDo-it-yourself home projects.",
     example:"A: Este fin de semana hago bricolaje.\nB: \u00bfQu\u00e9 vas a arreglar?",
     exampleSrc:"A: This weekend I am doing DIY.\nB: What are you going to fix?",
     funFact:"From French 'bricoler' (to tinker). Spanish adopted the word wholesale. Leroy Merlin and Bricomart are popular DIY stores in Spain."},

    {type:"teach", trg:"el boliche", src:"the bowling", pos:"noun", gender:"m",
     note:"Masculine noun. Bowling alley or the game.\nAlso a small ball in bowls/bocce.",
     example:"A: \u00bfVamos al boliche esta noche?\nB: \u00a1S\u00ed! Hace mucho que no juego.",
     exampleSrc:"A: Shall we go bowling tonight?\nB: Yes! It has been a long time since I played.",
     funFact:"From 'bola' (ball) + diminutive '-iche'. In Argentina, 'boliche' means a nightclub. Same word, completely different meaning."},

    {type:"teach", trg:"el bast\u00f3n", src:"the walking stick, cane", pos:"noun", gender:"m",
     note:"Masculine noun. For walking support or hiking.\nBast\u00f3n de esqu\u00ed = ski pole.",
     example:"A: Mi abuelo siempre lleva su bast\u00f3n.\nB: Le ayuda a caminar mejor.",
     exampleSrc:"A: My grandfather always carries his cane.\nB: It helps him walk better.",
     funFact:"From French 'baston', from Latin 'bastum' (stick). In the game of 'bastos' (Spanish cards), the suit shows clubs that look like bastones."},

    {type:"teach", trg:"arriesgar", src:"to risk", pos:"verb", gender:null,
     note:"Regular -ar verb. Arriesgar algo = to risk something.\nArriesgarse = to take a risk.",
     example:"A: No quiero arriesgar mi trabajo.\nB: Piensa bien antes de decidir.",
     exampleSrc:"A: I do not want to risk my job.\nB: Think carefully before deciding.",
     funFact:"From 'riesgo' (risk), possibly from Arabic 'rizq' (fortune, livelihood). The reflexive 'arriesgarse' is more common in everyday speech."},

    {type:"fb",
     s:"Hagamos un {1} por los novios. \u00a1Salud!",
     a:["brindis"],
     opts:["brindis","billar","buceo","bricolaje"],
     hint:"The act of raising glasses together to celebrate someone or something special.",
     sSrc:"Let's make a {1} for the newlyweds. Cheers!"},

    {type:"teach", trg:"el alboroto", src:"the uproar, commotion", pos:"noun", gender:"m",
     note:"Masculine noun. Noise and disorder.\nArmar un alboroto = to cause a scene.",
     example:"A: \u00bfQu\u00e9 es todo ese alboroto?\nB: Los vecinos est\u00e1n de fiesta.",
     exampleSrc:"A: What is all that commotion?\nB: The neighbors are having a party.",
     funFact:"From Arabic 'al-burut' (agitation). The verb 'alborotar' means to cause an uproar. 'Alborotador/a' is a troublemaker."},

    {type:"teach", trg:"el bajón", src:"the slump, downer", pos:"noun", gender:"m",
     note:"Masculine noun. Augmentative of 'bajo' (low).\nDar un baj\u00f3n = to hit a low point.",
     example:"A: Despu\u00e9s de las vacaciones me dio un baj\u00f3n.\nB: Es normal, el lunes siempre cuesta.",
     exampleSrc:"A: After the holidays I hit a slump.\nB: That is normal, Monday is always hard.",
     funFact:"From 'bajo' (low) + augmentative '-\u00f3n'. In music, 'el baj\u00f3n' is also the name of an old bassoon-like instrument."},

    {type:"teach", trg:"la balanza", src:"the scale, balance", pos:"noun", gender:"f",
     note:"Feminine noun. Weighing instrument or metaphorical balance.\nBalanza comercial = trade balance.",
     example:"A: Pon las frutas en la balanza.\nB: Pesan dos kilos.",
     exampleSrc:"A: Put the fruit on the scale.\nB: They weigh two kilos.",
     funFact:"From Latin 'bilanx' (having two pans). The zodiac sign Libra is 'Libra' in Spanish too, symbolized by a balanza."},

    {type:"mc",
     q:"\u00bfQu\u00e9 instrumento se usa para pesar cosas?",
     opts:["el billar","la balanza","la baraja","el bast\u00f3n"],
     ans:"la balanza",
     hint:"A device with two pans or a platform that measures how heavy something is."},

    {type:"teach", trg:"el apuro", src:"the difficulty, tight spot", pos:"noun", gender:"m",
     note:"Masculine noun. An uncomfortable or urgent situation.\nEstar en apuros = to be in trouble.",
     example:"A: Est\u00e1 en un apuro econ\u00f3mico.\nB: \u00bfPodemos ayudarle de alguna forma?",
     exampleSrc:"A: He is in financial difficulty.\nB: Can we help him somehow?",
     funFact:"From Latin 'appurare' (to purify, refine). The meaning shifted from 'refining' to 'being pressed/squeezed'. 'Apurar' also means to finish a drink."},

    {type:"teach", trg:"aterrador", src:"terrifying", pos:"adj", gender:null,
     note:"Adjective. Aterrador/aterradora.\nFrom 'aterrar' (to terrify).",
     example:"A: La pel\u00edcula fue aterradora.\nB: No pude dormir despu\u00e9s.",
     exampleSrc:"A: The movie was terrifying.\nB: I could not sleep afterwards.",
     funFact:"From 'a-' + 'terror' + '-ador'. Note: 'aterrizar' (to land a plane) and 'aterrar' (to terrify) look similar but have different roots: tierra vs. terror."},

    {type:"fb",
     s:"La pel\u00edcula era tan {1} que tuve pesadillas.",
     a:["aterradora"],
     opts:["aterradora","arriesgada","apacible","amistosa"],
     hint:"An adjective meaning extremely scary, derived from the noun 'terror'.",
     sSrc:"The movie was so {1} that I had nightmares."},

    {type:"match", pairs:[
      {trg:"apostar", src:"to bet"},
      {trg:"buceo", src:"diving"},
      {trg:"baraja", src:"deck of cards"},
      {trg:"brindis", src:"toast"},
      {trg:"arriesgar", src:"to risk"}
    ]}
  ]
};
export default LESSON_9;
