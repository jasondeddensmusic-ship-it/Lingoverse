// L17: Money & Business - Finance, commerce, and the working world
const LESSON_17 = {
  id:"esv2_b1gap_l17", title:"Dinero y negocios", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Dinero y negocios",
     desc:"Talk about money and business. Learn vocabulary for finance, commerce, and the professional world.",
     goals:["Learn 20 business and finance words","Discuss money and economic topics","Describe professional situations"]},

    {type:"teach", trg:"el banquero", src:"the banker", pos:"noun", gender:"m",
     note:"Masculine noun. La banquera = female banker.\nSomeone who works in banking.",
     example:"A: Mi hermano es banquero.\nB: \u00bfEn qu\u00e9 banco trabaja?",
     exampleSrc:"A: My brother is a banker.\nB: At which bank does he work?",
     funFact:"From 'banco' (bank), from Italian 'banca' (bench). Medieval Italian money changers worked at benches in the marketplace. 'Bancarrota' = bankruptcy (broken bench)."},

    {type:"teach", trg:"el cajero", src:"the cashier, ATM", pos:"noun", gender:"m",
     note:"Masculine noun. A person or machine.\nCajero autom\u00e1tico = ATM.",
     example:"A: \u00bfHay un cajero autom\u00e1tico cerca?\nB: S\u00ed, en la esquina hay uno.",
     exampleSrc:"A: Is there an ATM nearby?\nB: Yes, there is one on the corner.",
     funFact:"From 'caja' (box, cash register). The person is 'el/la cajero/a', and the machine is 'cajero autom\u00e1tico'. Spain's first ATMs appeared in the 1970s."},

    {type:"teach", trg:"el cafetero", src:"the coffee grower/seller", pos:"noun", gender:"m",
     note:"Masculine noun. Also adjective: pa\u00eds cafetero = coffee-producing country.\nColombia is a pa\u00eds cafetero.",
     example:"A: Colombia es un pa\u00eds cafetero por excelencia.\nB: S\u00ed, su caf\u00e9 es de los mejores.",
     exampleSrc:"A: Colombia is a coffee-producing country par excellence.\nB: Yes, their coffee is among the best.",
     funFact:"From 'caf\u00e9' (coffee) + '-ero' (person/profession). Colombia's coffee growing zone is a UNESCO World Heritage Site since 2011."},

    {type:"teach", trg:"la cafe\u00edna", src:"the caffeine", pos:"noun", gender:"f",
     note:"Feminine noun. The stimulant in coffee and tea.\nCaf\u00e9 sin cafe\u00edna = decaf.",
     example:"A: No puedo dormir si tomo cafe\u00edna despu\u00e9s de las seis.\nB: Prueba con descafeinado.",
     exampleSrc:"A: I cannot sleep if I have caffeine after six.\nB: Try decaf.",
     funFact:"From French 'caf\u00e9ine'. Coffee itself comes from Arabic 'qahwa'. Spain is one of Europe's biggest coffee consumers, with a unique 'caf\u00e9 torrefacto' tradition."},

    {type:"teach", trg:"el arriendo", src:"the rent, lease", pos:"noun", gender:"m",
     note:"Masculine noun. From 'arrendar' (to rent out).\nContrato de arriendo = lease agreement.",
     example:"A: El arriendo del piso subi\u00f3 este a\u00f1o.\nB: Es un problema en todas las ciudades.",
     exampleSrc:"A: The apartment rent went up this year.\nB: It is a problem in all cities.",
     funFact:"From 'arrendar', from Latin 'reddere' (to give back). In Spain, 'alquiler' is more common for residential rent; 'arriendo' is more used in Latin America and legal contexts."},

    {type:"mc",
     q:"\u00bfD\u00f3nde sacas dinero en efectivo?",
     opts:["en el cajero autom\u00e1tico","en el cafetero","en el banquero","en el arriendo"],
     ans:"en el cajero autom\u00e1tico",
     hint:"A machine mounted on walls that dispenses cash when you insert your bank card."},

    {type:"teach", trg:"el alcoholismo", src:"the alcoholism", pos:"noun", gender:"m",
     note:"Masculine noun. Addiction to alcohol.\nA serious medical condition.",
     example:"A: El alcoholismo es una enfermedad.\nB: S\u00ed, necesita tratamiento profesional.",
     exampleSrc:"A: Alcoholism is a disease.\nB: Yes, it needs professional treatment.",
     funFact:"From 'alcohol' + '-ismo'. 'Alcohol' itself is from Arabic 'al-kuhl' (the fine powder), originally referring to antimony eye makeup, then distilled spirits."},

    {type:"teach", trg:"el anonimato", src:"the anonymity", pos:"noun", gender:"m",
     note:"Masculine noun. The state of being unnamed.\nMantener el anonimato = to stay anonymous.",
     example:"A: Prefiere mantener el anonimato.\nB: Respeto su decisi\u00f3n.",
     exampleSrc:"A: He prefers to remain anonymous.\nB: I respect his decision.",
     funFact:"From Greek 'anonymos' (nameless) + '-ato'. Internet culture made 'anonimato' a hot topic. 'En el anonimato' means in obscurity."},

    {type:"teach", trg:"aspirar", src:"to aspire, to inhale", pos:"verb", gender:null,
     note:"Regular -ar verb. Two meanings: to aim for or to breathe in.\nAspirar a = to aspire to.",
     example:"A: Aspiro a ser m\u00e9dica.\nB: Con tu esfuerzo, lo lograr\u00e1s.",
     exampleSrc:"A: I aspire to be a doctor.\nB: With your effort, you will achieve it.",
     funFact:"From Latin 'aspirare' (to breathe toward). Both meanings connect: when you aspire, you 'breathe toward' your goal. The vacuum cleaner 'aspira' dust."},

    {type:"teach", trg:"el asesino", src:"the murderer, killer", pos:"noun", gender:"m",
     note:"Masculine noun. La asesina = female.\nFrom 'asesinar' (to murder).",
     example:"A: La polic\u00eda atrap\u00f3 al asesino.\nB: Menos mal, la gente estaba asustada.",
     exampleSrc:"A: The police caught the murderer.\nB: Thank goodness, people were scared.",
     funFact:"From Arabic 'hashshashin' (hashish users). The medieval Assassin order, who allegedly used hashish, gave Spanish this word. Same origin as English 'assassin'."},

    {type:"fb",
     s:"{1} a ser m\u00e9dica y ayudar a los dem\u00e1s.",
     a:["Aspiro"],
     opts:["Aspiro","Arriendo","Asesino","Alerto"],
     hint:"A verb meaning to dream of achieving something, to aim for a goal.",
     sSrc:"I {1} to be a doctor and help others."},

    {type:"teach", trg:"la agresividad", src:"the aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being aggressive.\nCompetitive drive or hostility.",
     example:"A: Su agresividad en el trabajo le causa problemas.\nB: Deber\u00eda aprender a calmarse.",
     exampleSrc:"A: His aggressiveness at work causes him problems.\nB: He should learn to calm down.",
     funFact:"From 'agresivo' + '-idad'. In sports, 'agresividad' can be positive (competitive spirit). In other contexts, it implies hostility."},

    {type:"teach", trg:"el aporte", src:"the contribution, input", pos:"noun", gender:"m",
     note:"Masculine noun. A contribution of value.\nTu aporte es importante = your input matters.",
     example:"A: Tu aporte al equipo es muy valioso.\nB: Gracias, intento dar lo mejor.",
     exampleSrc:"A: Your contribution to the team is very valuable.\nB: Thanks, I try to give my best.",
     funFact:"From 'aportar' (to contribute). More common in Latin America than Spain, where 'aportaci\u00f3n' is preferred. Both mean contribution."},

    {type:"teach", trg:"el adelgazamiento", src:"the weight loss, slimming", pos:"noun", gender:"m",
     note:"Masculine noun. From 'adelgazar' (to lose weight).\nDieta de adelgazamiento = slimming diet.",
     example:"A: Su adelgazamiento ha sido impresionante.\nB: S\u00ed, ha perdido veinte kilos.",
     exampleSrc:"A: His weight loss has been impressive.\nB: Yes, he has lost twenty kilos.",
     funFact:"From 'adelgazar', from 'delgado' (thin), from Latin 'delicatus' (delicate). The long noun form shows Spanish's love of suffix chains: delgado > adelgazar > adelgazamiento."},

    {type:"teach", trg:"el atracador", src:"the robber, mugger", pos:"noun", gender:"m",
     note:"Masculine noun. La atracadora = female.\nSomeone who commits an 'atraco' (robbery).",
     example:"A: El atracador huy\u00f3 con el dinero.\nB: \u00bfLlamaste a la polic\u00eda?",
     exampleSrc:"A: The robber fled with the money.\nB: Did you call the police?",
     funFact:"From 'atracar' (to rob, to dock a ship). The nautical 'atracar' (to moor) and the criminal 'atracar' (to rob) may share origins: pirates docked to plunder."},

    {type:"mc",
     q:"\u00bfDe qu\u00e9 idioma viene la palabra 'asesino'?",
     opts:["del \u00e1rabe","del lat\u00edn","del griego","del franc\u00e9s"],
     ans:"del \u00e1rabe",
     hint:"This word comes from a medieval Middle Eastern order, associated with a particular substance."},

    {type:"teach", trg:"atracar", src:"to rob, to dock (a ship)", pos:"verb", gender:null,
     note:"Regular -ar verb. Two very different meanings.\nAtracar un banco = to rob a bank.",
     example:"A: El barco atrac\u00f3 en el puerto.\nB: Vamos a verlo desde el muelle.",
     exampleSrc:"A: The ship docked at the port.\nB: Let's go see it from the pier.",
     funFact:"Possibly from Arabic 'taraka' (to leave, let go). The double meaning (dock/rob) may connect through piracy: ships that 'docked' alongside to plunder others."},

    {type:"teach", trg:"el atraco", src:"the robbery, holdup", pos:"noun", gender:"m",
     note:"Masculine noun. A violent theft.\nAtraco a mano armada = armed robbery.",
     example:"A: Hubo un atraco en la joyería.\nB: \u00bfEstá bien todo el mundo?",
     exampleSrc:"A: There was a robbery at the jewelry store.\nB: Is everyone okay?",
     funFact:"From 'atracar'. An 'atraco' implies violence or threat, unlike 'robo' (theft) which can be stealthy. 'A precio de atraco' = at highway robbery prices."},

    {type:"fb",
     s:"El barco {1} en el puerto de Barcelona al amanecer.",
     a:["atrac\u00f3"],
     opts:["atrac\u00f3","arriesg\u00f3","archivar\u00f3","alargar\u00f3"],
     hint:"Past tense of a verb meaning to dock or moor at a port. Also means to rob.",
     sSrc:"The ship {1} at the port of Barcelona at dawn."},

    {type:"match", pairs:[
      {trg:"banquero", src:"banker"},
      {trg:"cajero", src:"cashier/ATM"},
      {trg:"arriendo", src:"rent"},
      {trg:"atraco", src:"robbery"},
      {trg:"anonimato", src:"anonymity"}
    ]}
  ]
};
export default LESSON_17;
