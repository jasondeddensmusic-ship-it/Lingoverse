// L09: Everyday Actions. Essential verbs for daily life
const LESSON_9 = {
  id:"esv2_a1gap_l9", title:"Acciones del día", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Acciones del día",
     desc:"Master essential everyday verbs. From opening doors to walking down the street, these actions fill your daily life.",
     goals:["Learn 20 common action verbs","Use verbs in simple present tense","Build practical sentences with everyday verbs"]},

    {type:"teach", trg:"abrir", src:"to open", pos:"verb", gender:null,
     note:"Regular -ir verb. Abro, abres, abre...\nOpposite: cerrar (to close).",
     example:"A: \u00bfPuedes abrir la ventana?\nB: Claro, hace calor.",
     exampleSrc:"A: Can you open the window?\nB: Of course, it is hot.",
     funFact:"From Latin 'aperire'. The past participle is irregular: 'abierto' (open), not 'abrido'. Watch out for this."},

    {type:"teach", trg:"acabar", src:"to finish, to end", pos:"verb", gender:null,
     note:"Regular -ar verb. Acabo, acabas, acaba...\nAcabar de + infinitive = to have just done something.",
     example:"A: Acabo de llegar.\nB: Bienvenido, siéntate.",
     exampleSrc:"A: I have just arrived.\nB: Welcome, sit down.",
     funFact:"'Acabar de' + infinitive is the standard way to say 'to have just done' something: 'Acabo de comer' (I just ate)."},

    {type:"teach", trg:"andar", src:"to walk", pos:"verb", gender:null,
     note:"Irregular verb. Ando, andas, anda...\nPast tense irregular: anduve, anduviste...",
     example:"A: \u00bfVamos en coche?\nB: No, vamos andando.",
     exampleSrc:"A: Shall we go by car?\nB: No, let's walk.",
     funFact:"Origin uncertain, possibly pre-Roman. 'Ir andando' or 'ir a pie' both mean to walk. 'Anda' is also an exclamation of surprise."},

    {type:"teach", trg:"arrancar", src:"to start (engine), to pull out", pos:"verb", gender:null,
     note:"Regular -ar verb (c > qu before e). Arranco, arrancas...\nArrancar el coche = to start the car.",
     example:"A: El coche no arranca.\nB: \u00bfTienes gasolina?",
     exampleSrc:"A: The car won't start.\nB: Do you have gasoline?",
     funFact:"From a Germanic root meaning 'to tear out'. The meaning extends from uprooting plants to starting engines."},

    {type:"teach", trg:"avanzar", src:"to advance, to move forward", pos:"verb", gender:null,
     note:"Regular -ar verb (z > c before e). Avanzo, avanzas...\nAvanzar en = to make progress in.",
     example:"A: Estamos avanzando mucho.\nB: Sí, buen trabajo.",
     exampleSrc:"A: We are making a lot of progress.\nB: Yes, good job.",
     funFact:"From Latin 'abantiare' (to move forward), from 'ab ante' (from before). Related to French 'avancer'."},

    {type:"teach", trg:"bajar", src:"to go down, to lower", pos:"verb", gender:null,
     note:"Regular -ar verb. Bajo, bajas, baja...\nBajar del autobús = to get off the bus.",
     example:"A: Baja la música, por favor.\nB: Perdona, no sabía que era tarde.",
     exampleSrc:"A: Turn down the music, please.\nB: Sorry, I didn't know it was late.",
     funFact:"From Vulgar Latin 'bassiare' (to lower), from 'bassus' (low). 'Bajar' has many uses: go down, get off, download."},

    {type:"mc",
     q:"\u00bfQué significa 'acabar de llegar'?",
     opts:["to have just arrived","to finish arriving","to stop arriving","to want to arrive"],
     ans:"to have just arrived",
     hint:"The construction 'acabar de' + infinitive expresses something that happened very recently."},

    {type:"teach", trg:"bailar", src:"to dance", pos:"verb", gender:null,
     note:"Regular -ar verb. Bailo, bailas, baila...\nBailar flamenco, bailar salsa.",
     example:"A: \u00bfSabes bailar salsa?\nB: Un poco, pero quiero aprender más.",
     exampleSrc:"A: Can you dance salsa?\nB: A little, but I want to learn more.",
     funFact:"Possibly from Latin 'ballare'. Spain's flamenco and Latin America's salsa, tango, and cumbia make Spanish inseparable from dance."},

    {type:"teach", trg:"el baile", src:"the dance", pos:"noun", gender:"m",
     note:"Masculine noun. Baile flamenco = flamenco dance.\nAlso: a dance party.",
     example:"A: El baile flamenco es espectacular.\nB: Quiero ver un espectáculo.",
     exampleSrc:"A: Flamenco dance is spectacular.\nB: I want to see a show.",
     funFact:"Each region of Spain has its own dances: flamenco (Andalusia), jota (Aragón), sardana (Catalonia), muñeira (Galicia)."},

    {type:"teach", trg:"batir", src:"to beat, to whisk", pos:"verb", gender:null,
     note:"Regular -ir verb. Bato, bates, bate...\nBatir huevos = to beat eggs.",
     example:"A: Bate los huevos primero.\nB: \u00bfCon un tenedor?\nA: Sí.",
     exampleSrc:"A: Beat the eggs first.\nB: With a fork?\nA: Yes.",
     funFact:"From Latin 'battuere' (to beat). Also used in sports: batir un récord (to break a record)."},

    {type:"teach", trg:"aprender", src:"to learn", pos:"verb", gender:null,
     note:"Regular -er verb. Aprendo, aprendes, aprende...\nAprender español = to learn Spanish.",
     example:"A: Quiero aprender español.\nB: Es un idioma muy bonito.",
     exampleSrc:"A: I want to learn Spanish.\nB: It is a very beautiful language.",
     funFact:"From Latin 'apprehendere' (to grasp, seize). Learning is literally 'grasping' knowledge with your mind."},

    {type:"fb",
     s:"Quiero {1} a bailar flamenco este verano.",
     a:["aprender"],
     opts:["aprender","abrir","acabar","andar"],
     hint:"This verb means to gain new knowledge or skills. You do this at school or with practice.",
     sSrc:"I want to {1} to dance flamenco this summer."},

    {type:"teach", trg:"aceptar", src:"to accept", pos:"verb", gender:null,
     note:"Regular -ar verb. Acepto, aceptas, acepta...\nAceptar una invitación = to accept an invitation.",
     example:"A: \u00bfAceptas la invitación?\nB: Sí, acepto con mucho gusto.",
     exampleSrc:"A: Do you accept the invitation?\nB: Yes, I accept with pleasure.",
     funFact:"From Latin 'acceptare' (to receive willingly). Nearly identical across all Romance languages."},

    {type:"teach", trg:"acercar", src:"to bring closer", pos:"verb", gender:null,
     note:"Regular -ar verb (c > qu before e). Reflexive: acercarse = to approach.\nMe acerco = I approach.",
     example:"A: Acércate, no te oigo bien.\nB: \u00bfAsí está mejor?",
     exampleSrc:"A: Come closer, I can't hear you well.\nB: Is this better?",
     funFact:"From 'cerca' (near). The 'a-' prefix turns the adjective into an action: acercar (to make near), alejar (to make far)."},

    {type:"teach", trg:"alejar", src:"to move away", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: alejarse = to move away.\nOpposite of acercar.",
     example:"A: Aléjate del fuego.\nB: De acuerdo.",
     exampleSrc:"A: Move away from the fire.\nB: Okay.",
     funFact:"From 'lejos' (far). Just like acercar (from cerca/near), alejar comes from lejos/far. A beautiful symmetry."},

    {type:"teach", trg:"añadir", src:"to add", pos:"verb", gender:null,
     note:"Regular -ir verb. Añado, añades, añade...\nAñadir sal = to add salt.",
     example:"A: Añade un poco de sal.\nB: \u00bfCuánta?",
     exampleSrc:"A: Add a little salt.\nB: How much?",
     funFact:"From Latin 'inaddere'. The ñ comes from the Latin double-n (nn > ñ is a regular sound change in Spanish)."},

    {type:"mc",
     q:"\u00bfCuál es lo contrario de 'acercar'?",
     opts:["aceptar","alejar","acabar","añadir"],
     ans:"alejar",
     hint:"One verb means 'to bring closer' (from cerca/near), the other means 'to move away' (from lejos/far)."},

    {type:"teach", trg:"apoyar", src:"to support", pos:"verb", gender:null,
     note:"Regular -ar verb. Apoyo, apoyas, apoya...\nApoyar a alguien = to support someone.",
     example:"A: Te apoyo en tu decisión.\nB: Gracias, significa mucho.",
     exampleSrc:"A: I support you in your decision.\nB: Thanks, it means a lot.",
     funFact:"From 'apoyo' (support), itself from Latin 'podium'. Literally to give someone a base to stand on."},

    {type:"teach", trg:"aplicar", src:"to apply", pos:"verb", gender:null,
     note:"Regular -ar verb (c > qu before e). Aplico, aplicas...\nAplicar crema = to apply cream.",
     example:"A: Aplica la crema dos veces al día.\nB: De acuerdo, doctor.",
     exampleSrc:"A: Apply the cream twice a day.\nB: Okay, doctor.",
     funFact:"From Latin 'applicare' (to fold toward, to attach). Used both physically (apply cream) and abstractly (apply a rule)."},

    {type:"teach", trg:"apretar", src:"to squeeze, to press", pos:"verb", gender:null,
     note:"Stem-changing verb: e > ie. Aprieto, aprietas...\nApretar un botón = to press a button.",
     example:"A: Aprieta el botón verde.\nB: \u00bfEste?\nA: Sí, ese.",
     exampleSrc:"A: Press the green button.\nB: This one?\nA: Yes, that one.",
     funFact:"From Latin 'appectorare' (to press to the chest). The stem change (e > ie) only happens in stressed syllables."},

    {type:"match", pairs:[
      {trg:"abrir", src:"to open"},
      {trg:"bailar", src:"to dance"},
      {trg:"aprender", src:"to learn"},
      {trg:"añadir", src:"to add"},
      {trg:"bajar", src:"to go down"}
    ]},

    {type:"fb",
     s:"\u00bfPuedes {1} la puerta? Hace mucho calor aquí.",
     a:["abrir"],
     opts:["abrir","acabar","apretar","aplicar"],
     hint:"The opposite of 'cerrar' (to close). You do this to a door or window to let air in.",
     sSrc:"Can you {1} the door? It is very hot in here."},
  ]
};
export default LESSON_9;
