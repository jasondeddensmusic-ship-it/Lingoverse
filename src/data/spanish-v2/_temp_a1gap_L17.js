// L17: Sports & Leisure. Having fun and staying active
const LESSON_17 = {
  id:"esv2_a1gap_l17", title:"Deporte y ocio", icon:"\u26BD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Deporte y ocio",
     desc:"Talk about sports, games, and free time. From football to beaches, learn to describe your hobbies.",
     goals:["Learn 20 sports and leisure words","Talk about hobbies and activities","Describe what you do for fun"]},

    {type:"teach", trg:"el beisbol", src:"baseball", pos:"noun", gender:"m",
     note:"Masculine noun. From English 'baseball'.\nPopular in the Caribbean, less so in Spain.",
     example:"A: \u00bfTe gusta el beisbol?\nB: Sí, pero aquí es más popular el fútbol.",
     exampleSrc:"A: Do you like baseball?\nB: Yes, but here football is more popular.",
     funFact:"Baseball is huge in Cuba, Dominican Republic, and Venezuela, but barely played in Spain. A Caribbean vs European divide."},

    {type:"teach", trg:"el bate", src:"the bat (sports)", pos:"noun", gender:"m",
     note:"Masculine noun. Bate de beisbol = baseball bat.\nFrom English 'bat'.",
     example:"A: Necesito un bate nuevo.\nB: \u00bfPara beisbol o para críquet?",
     exampleSrc:"A: I need a new bat.\nB: For baseball or cricket?",
     funFact:"Borrowed from English. In Spanish, 'bate' only means a sports bat. The animal 'bat' is 'murciélago'."},

    {type:"teach", trg:"la balsa", src:"the raft", pos:"noun", gender:"f",
     note:"Feminine noun. Balsa de madera = wooden raft.\nAlso: como una balsa (very calm, of water).",
     example:"A: Vamos en balsa por el río.\nB: \u00bfEs peligroso?",
     exampleSrc:"A: We are going on a raft down the river.\nB: Is it dangerous?",
     funFact:"'Estar como una balsa de aceite' (to be like a raft of oil) means the sea is perfectly calm and smooth."},

    {type:"teach", trg:"la bici", src:"the bike", pos:"noun", gender:"f",
     note:"Feminine noun. Short for bicicleta.\nIr en bici = to go by bike.",
     example:"A: Voy al trabajo en bici.\nB: Es bueno para la salud.",
     exampleSrc:"A: I go to work by bike.\nB: It is good for your health.",
     funFact:"In everyday Spanish, almost nobody says the full word 'bicicleta'. 'Bici' is universal and feels natural."},

    {type:"teach", trg:"el bienestar", src:"wellbeing", pos:"noun", gender:"m",
     note:"Masculine noun. Bien + estar = being well.\nBienestar físico y mental = physical and mental wellbeing.",
     example:"A: El deporte mejora el bienestar.\nB: Sí, me siento mejor cuando hago ejercicio.",
     exampleSrc:"A: Sport improves wellbeing.\nB: Yes, I feel better when I exercise.",
     funFact:"A compound of 'bien' (well) + 'estar' (to be). Transparent etymology: the state of being well."},

    {type:"teach", trg:"el bermudas", src:"Bermuda shorts", pos:"noun", gender:"m",
     note:"Masculine noun. Usually plural: los bermudas.\nCasual summer clothing.",
     example:"A: Hace calor, me pongo los bermudas.\nB: Buena idea.",
     exampleSrc:"A: It is hot, I am putting on my Bermuda shorts.\nB: Good idea.",
     funFact:"Named after the island of Bermuda, where British military started wearing knee-length shorts in the early 1900s."},

    {type:"mc",
     q:"\u00bfEn qué países hispanohablantes es popular el beisbol?",
     opts:["Cuba, República Dominicana, Venezuela","España, Argentina, Chile","México, Perú, Bolivia","Uruguay, Paraguay, Ecuador"],
     ans:"Cuba, República Dominicana, Venezuela",
     hint:"Think Caribbean. This sport is most popular in the Spanish-speaking islands and nearby coast."},

    {type:"teach", trg:"el bikini", src:"the bikini", pos:"noun", gender:"m",
     note:"Masculine noun. Also spelled: biquini (Spain).\nPonerse el bikini = to put on a bikini.",
     example:"A: \u00bfDónde está mi bikini?\nB: En la maleta.",
     exampleSrc:"A: Where is my bikini?\nB: In the suitcase.",
     funFact:"Named after Bikini Atoll, where nuclear tests happened in 1946. The swimsuit was supposedly 'explosive' in its impact on fashion."},

    {type:"teach", trg:"el biberón", src:"the baby bottle", pos:"noun", gender:"m",
     note:"Masculine noun. Dar el biberón = to give a bottle (to a baby).\nFrom French 'biberon'.",
     example:"A: El bebé quiere el biberón.\nB: Voy a preparar la leche.",
     exampleSrc:"A: The baby wants the bottle.\nB: I will prepare the milk.",
     funFact:"From French 'biberon', from Latin 'bibere' (to drink). Same root as 'bebida' (drink) and 'beber' (to drink)."},

    {type:"teach", trg:"la bienal", src:"the biennial (event)", pos:"noun", gender:"f",
     note:"Feminine noun. Cultural event held every two years.\nBienal de arte = art biennial.",
     example:"A: La bienal de arte es este año.\nB: Quiero ir a verla.",
     exampleSrc:"A: The art biennial is this year.\nB: I want to go see it.",
     funFact:"From Latin 'biennalis' (every two years). The Venice Biennale is the most famous, but Spanish cities host their own."},

    {type:"teach", trg:"la acción", src:"action", pos:"noun", gender:"f",
     note:"Feminine noun. Película de acción = action movie.\nHombre de acción = man of action.",
     example:"A: Me gustan las películas de acción.\nB: \u00bfCuál es tu favorita?",
     exampleSrc:"A: I like action movies.\nB: Which is your favorite?",
     funFact:"From Latin 'actio'. 'Entrar en acción' (to get into action) is used when someone starts doing something decisive."},

    {type:"fb",
     s:"El deporte mejora el {1} físico y mental.",
     a:["bienestar"],
     opts:["bienestar","beisbol","bermudas","bikini"],
     hint:"This compound noun literally means 'being well'. It describes overall health and happiness.",
     sSrc:"Sport improves physical and mental {1}."},

    {type:"teach", trg:"agitar", src:"to shake, to stir up", pos:"verb", gender:null,
     note:"Regular -ar verb. Agito, agitas, agita...\nAgitar antes de usar = shake before use.",
     example:"A: Agita bien la botella.\nB: De acuerdo.",
     exampleSrc:"A: Shake the bottle well.\nB: Okay.",
     funFact:"From Latin 'agitare' (to drive, to move). 'Agitado' (agitated) describes both a shaken drink and a stressed person."},

    {type:"teach", trg:"agarrar", src:"to grab, to hold", pos:"verb", gender:null,
     note:"Regular -ar verb. Agarro, agarras...\nAgárrate = hold on! More common in Latin America than Spain.",
     example:"A: Agarra la cuerda fuerte.\nB: Ya la tengo.",
     exampleSrc:"A: Grab the rope tightly.\nB: I've got it.",
     funFact:"From 'garra' (claw). Literally to 'claw at something'. In Spain, 'coger' is more common for 'to grab'."},

    {type:"teach", trg:"el ataque", src:"the attack", pos:"noun", gender:"m",
     note:"Masculine noun. Ataque al corazón = heart attack.\nAlso: attack in sports/military.",
     example:"A: El equipo tiene un buen ataque.\nB: Sí, marcan muchos goles.",
     exampleSrc:"A: The team has a good attack.\nB: Yes, they score many goals.",
     funFact:"From French 'attaque'. In football, 'el ataque' is the offensive line. 'Ataque de nervios' = anxiety/panic attack."},

    {type:"teach", trg:"atravesar", src:"to cross, to go through", pos:"verb", gender:null,
     note:"Stem-changing verb: e > ie. Atravieso, atraviesas...\nAtravesar la calle = to cross the street.",
     example:"A: Hay que atravesar el río.\nB: \u00bfCómo? \u00bfNadando?",
     exampleSrc:"A: We have to cross the river.\nB: How? Swimming?",
     funFact:"From 'a' + 'través' (across). 'A través de' (through, across) is the related preposition phrase."},

    {type:"mc",
     q:"\u00bfQué significa 'agitar antes de usar'?",
     opts:["Taste before serving","Shake before use","Stir before eating","Open before using"],
     ans:"Shake before use",
     hint:"This instruction is commonly found on bottles of juice or medicine that need to be mixed."},

    {type:"teach", trg:"arrastrar", src:"to drag, to pull", pos:"verb", gender:null,
     note:"Regular -ar verb. Arrastro, arrastras...\nArrastrar los pies = to drag your feet.",
     example:"A: No arrastres los pies.\nB: Perdona, estoy cansado.",
     exampleSrc:"A: Don't drag your feet.\nB: Sorry, I am tired.",
     funFact:"Possibly from Latin 'rastrare' (to rake). 'Arrastrarse' (reflexive) means to crawl or to grovel."},

    {type:"teach", trg:"la atención", src:"attention, service", pos:"noun", gender:"f",
     note:"Feminine noun. Atención al cliente = customer service.\nLlamar la atención = to attract attention.",
     example:"A: La atención en este hotel es excelente.\nB: Sí, el personal es muy amable.",
     exampleSrc:"A: The service at this hotel is excellent.\nB: Yes, the staff is very kind.",
     funFact:"'Atención al cliente' (customer service) is a phrase you will see in every Spanish shop and website."},

    {type:"teach", trg:"atender", src:"to attend to, to serve", pos:"verb", gender:null,
     note:"Stem-changing verb: e > ie. Atiendo, atiendes...\nAtender a un cliente = to serve a customer.",
     example:"A: \u00bfMe atienden, por favor?\nB: Sí, un momento.",
     exampleSrc:"A: Can someone serve me, please?\nB: Yes, one moment.",
     funFact:"Not a false friend here: 'atender' means to attend to or serve someone. Different from 'asistir' (to attend an event)."},

    {type:"match", pairs:[
      {trg:"bici", src:"bike"},
      {trg:"bienestar", src:"wellbeing"},
      {trg:"ataque", src:"attack"},
      {trg:"atravesar", src:"to cross"},
      {trg:"atender", src:"to serve"}
    ]},

    {type:"fb",
     s:"Hay que {1} la calle con cuidado. Hay mucho tráfico.",
     a:["atravesar"],
     opts:["atravesar","arrastrar","agitar","agarrar"],
     hint:"This verb means to go from one side to the other, like crossing a street or river.",
     sSrc:"You have to {1} the street carefully. There is a lot of traffic."},
  ]
};
export default LESSON_17;
