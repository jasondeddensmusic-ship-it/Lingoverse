// French B2 Gap Lesson 13 — Economy and Commerce
const LESSON_13 = {id:"frv2_b2g5_l13", title:"Économie et commerce", icon:"📊", xp:15, board:true, steps:[
  {type:"intro", title:"Économie et commerce",
   desc:"Learn vocabulary for discussing economic trends, business, and consumer culture at the B2 level.",
   goals:["Learn 15 key words about economy and commerce","Discuss market trends and economic phenomena","Use business and economic register vocabulary"]},

  {type:"teach", trg:"le best-seller", src:"the bestseller", pos:"noun", gender:"m",
   note:"A book or product that sells in very large numbers.\nBorrowed from English. Plural: best-sellers.",
   example:"A: Ce roman est devenu un best-seller en deux semaines.\nB: L'auteur est connu?\nA: Pas du tout, c'est son premier livre.\nB: Le bouche-à-oreille a fait le reste.",
   exampleSrc:"A: This novel became a bestseller in two weeks.\nB: Is the author well-known?\nA: Not at all, it's his first book.\nB: Word of mouth did the rest.",
   funFact:"French uses this English borrowing but pronounces it with French phonology: 'best-SEL-eur'."},

  {type:"teach", trg:"le compte-gouttes", src:"the dropper / eyedropper", pos:"noun", gender:"m",
   note:"A device for dispensing liquid drop by drop.\nIdiom: 'au compte-gouttes' (sparingly, bit by bit).",
   example:"A: Les informations arrivent au compte-gouttes.\nB: C'est frustrant, on veut tout savoir.\nA: La patience est nécessaire.\nB: Mais l'attente est difficile.",
   exampleSrc:"A: Information is coming in drop by drop.\nB: It's frustrating, we want to know everything.\nA: Patience is necessary.\nB: But the waiting is hard.",
   funFact:"Compound: 'compte' (counts) + 'gouttes' (drops). 'Au compte-gouttes' means very slowly, sparingly."},

  {type:"teach", trg:"la dépouille", src:"the remains / spoils", pos:"noun", gender:"f",
   note:"The mortal remains of a dead person. Also: spoils of war.\nVery formal register.",
   example:"A: La dépouille du président sera exposée au Panthéon.\nB: C'est un honneur réservé aux grands de la nation.\nA: La cérémonie sera solennelle.\nB: Tout le pays rendra hommage.",
   exampleSrc:"A: The president's remains will lie in state at the Panthéon.\nB: It's an honor reserved for the nation's great figures.\nA: The ceremony will be solemn.\nB: The whole country will pay tribute.",
   funFact:"From 'dépouiller' (to strip). Originally meant animal skin, then extended to human remains."},

  {type:"teach", trg:"la flambée", src:"the surge / spike", pos:"noun", gender:"f",
   note:"A sudden sharp increase. Prices, violence, disease.\nRepeat from L02 for reinforcement in economic context.",
   example:"A: La flambée des prix de l'immobilier inquiète.\nB: Les jeunes ne peuvent plus acheter.\nA: Le gouvernement promet des aides.\nB: Il faut aussi construire plus de logements.",
   exampleSrc:"A: The surge in housing prices is worrying.\nB: Young people can no longer buy.\nA: The government promises aid.\nB: We also need to build more housing.",
   funFact:"The economic sense is very common: 'flambée des prix' (price surge) appears daily in French media."},

  {type:"teach", trg:"le curieux", src:"the curious person / onlooker", pos:"noun", gender:"m",
   note:"Someone who wants to know or see everything.\nAlso adj: curious. Feminine noun: curieuse.",
   example:"A: Les curieux se sont rassemblés autour de l'accident.\nB: La police leur demande de circuler.\nA: C'est humain, la curiosité.\nB: Oui, mais elle peut gêner les secours.",
   exampleSrc:"A: Onlookers gathered around the accident.\nB: The police ask them to move along.\nA: It's human, curiosity.\nB: Yes, but it can hinder the rescue workers.",
   funFact:"From Latin 'curiosus'. As a noun, 'un curieux' is an inquisitive person or bystander."},

  {type:"teach", trg:"la détonation", src:"the detonation / explosion sound", pos:"noun", gender:"f",
   note:"The loud sound of an explosion.\nUsed for bombs, firearms, and figuratively.",
   example:"A: Une détonation a retenti dans le quartier.\nB: Qu'est-ce que c'était?\nA: Un feu d'artifice, heureusement.\nB: Ça m'a fait une peur terrible.",
   exampleSrc:"A: A detonation rang out in the neighborhood.\nB: What was it?\nA: Fireworks, fortunately.\nB: It gave me a terrible fright.",
   funFact:"From Latin 'detonare' (to thunder down). The verb 'détoner' means to detonate/explode."},

  {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
   note:"A unit of length equal to 10 centimeters (0.1 meters).\nUsed in schools and technical contexts.",
   example:"A: Mesure la longueur avec le décimètre.\nB: C'est vingt-trois centimètres.\nA: Donc deux décimètres et trois centimètres.\nB: Exactement, tu as bien compris.",
   exampleSrc:"A: Measure the length with the decimeter ruler.\nB: It's twenty-three centimeters.\nA: So two decimeters and three centimeters.\nB: Exactly, you understood well.",
   funFact:"From 'déci-' (tenth) + 'mètre' (meter). France created the metric system during the Revolution."},

  {type:"teach", trg:"le complet", src:"the suit (clothing)", pos:"noun", gender:"m",
   note:"A matching jacket and trousers. Also adjective: 'complet' (full/complete).",
   example:"A: Il portait un complet gris pour l'entretien.\nB: Très professionnel.\nA: La première impression compte beaucoup.\nB: Surtout dans le monde des affaires.",
   exampleSrc:"A: He wore a grey suit for the interview.\nB: Very professional.\nA: First impressions matter a lot.\nB: Especially in the business world.",
   funFact:"As clothing, 'un complet' is a full suit. 'Un complet-veston' is the more precise term."},

  {type:"teach", trg:"le consommateur", src:"the consumer", pos:"noun", gender:"m",
   note:"A person who buys and uses goods.\nFeminine: consommatrice. Key economic term.",
   example:"A: Le consommateur a de plus en plus de pouvoir.\nB: Grâce aux réseaux sociaux?\nA: Oui, une mauvaise critique peut détruire une marque.\nB: Les entreprises doivent écouter leurs clients.",
   exampleSrc:"A: The consumer has more and more power.\nB: Thanks to social media?\nA: Yes, a bad review can destroy a brand.\nB: Companies must listen to their customers.",
   funFact:"From 'consommer' (to consume). 'La société de consommation' (consumer society) is a common phrase."},

  {type:"mc", q:"Que signifie 'au compte-gouttes'?",
   opts:["Très lentement, petit à petit","Très rapidement","En grandes quantités","Sans aucun contrôle"],
   ans:"Très lentement, petit à petit",
   hint:"Like drops falling one by one from a dropper: slowly and sparingly"},

  {type:"fb", s:"La {1} des prix de l'immobilier empêche les jeunes d'acheter.",
   a:["flambée"], opts:["flambée","détonation","dépouille","bordée"],
   hint:"A sudden sharp increase in prices, like a blazing fire",
   sSrc:"The {1} in housing prices prevents young people from buying."},

  {type:"teach", trg:"la guise", src:"the way / manner", pos:"noun", gender:"f",
   note:"A way of doing things. Almost always in 'en guise de' (by way of, as a kind of).\nOr 'à sa guise' (as one pleases).",
   example:"A: En guise de remerciement, il a offert des fleurs.\nB: C'est un beau geste.\nA: Chacun fait à sa guise.\nB: Oui, la liberté de choix est importante.",
   exampleSrc:"A: By way of thanks, he offered flowers.\nB: That's a nice gesture.\nA: Everyone does as they please.\nB: Yes, freedom of choice is important.",
   funFact:"From Frankish 'wisa' (manner). 'A sa guise' means 'as one likes' and is very common in literary French."},

  {type:"teach", trg:"le banal", src:"the commonplace / mundane thing", pos:"noun", gender:"m",
   note:"Something ordinary and unoriginal. Also adj: banal.\nAs noun, rarely used (adj form more common).",
   example:"A: Ne cherche pas l'exceptionnel, le banal a sa beauté.\nB: Tu trouves de la poésie dans le quotidien?\nA: Absolument, chaque moment compte.\nB: C'est une belle philosophie de vie.",
   exampleSrc:"A: Don't look for the exceptional, the mundane has its beauty.\nB: You find poetry in everyday life?\nA: Absolutely, every moment counts.\nB: That's a beautiful philosophy of life.",
   funFact:"From Old French 'ban' (public proclamation). Originally: what was available to everyone, hence 'ordinary'."},

  {type:"teach", trg:"la jointure", src:"the joint / seam", pos:"noun", gender:"f",
   note:"The point where two things meet.\nUsed for body joints, construction, and figuratively.",
   example:"A: La jointure du mur est fissurée.\nB: Il faut la réparer avant l'hiver.\nA: L'eau pourrait s'infiltrer.\nB: Oui, un maçon peut s'en occuper.",
   exampleSrc:"A: The wall joint is cracked.\nB: It needs to be repaired before winter.\nA: Water could seep in.\nB: Yes, a mason can take care of it.",
   funFact:"From 'joindre' (to join). 'Les jointures' also means knuckles (finger joints) in anatomy."},

  {type:"mc", q:"Quel mot désigne une personne qui achète et utilise des produits?",
   opts:["Le consommateur","Le commercial","Le contradicteur","Le curieux"],
   ans:"Le consommateur",
   hint:"The person at the end of the economic chain who buys and uses goods"},

  {type:"fb", s:"Il portait un {1} gris pour son entretien d'embauche.",
   a:["complet"], opts:["complet","binocle","décimètre","best-seller"],
   hint:"A matching jacket and trousers, formal business attire",
   sSrc:"He wore a grey {1} for his job interview."},

  {type:"match", pairs:[
    {trg:"le best-seller", src:"bestseller"},
    {trg:"le consommateur", src:"consumer"},
    {trg:"la guise", src:"way / manner"},
    {trg:"la jointure", src:"joint / seam"},
    {trg:"le complet", src:"suit (clothing)"}
  ]},

  {type:"mc", q:"Que signifie 'en guise de remerciement'?",
   opts:["Comme forme de remerciement","Sans remerciement","Malgré le remerciement","Avant le remerciement"],
   ans:"Comme forme de remerciement",
   hint:"'En guise de' means 'by way of' or 'as a form of'"},

  {type:"fb", s:"Les {1} se sont rassemblés autour de l'accident pour regarder.",
   a:["curieux"], opts:["curieux","consommateurs","commerciaux","confrères"],
   hint:"Inquisitive bystanders who gather to watch an event",
   sSrc:"The {1} gathered around the accident to watch."},

  {type:"drag_fill", s:"Une {1} a retenti et les informations arrivent au {2}.",
   blanks:{"1":"détonation","2":"compte-gouttes"},
   pool:["détonation","compte-gouttes","flambée","décimètre"],
   hint:"An explosion sound was heard and news comes in very slowly, drop by drop"},

  {type:"mc", q:"Que sont 'les jointures' en anatomie?",
   opts:["Les articulations des doigts","Les muscles du bras","Les os du dos","Les dents de sagesse"],
   ans:"Les articulations des doigts",
   hint:"The points where finger bones meet, also called knuckles"}
]};
export default LESSON_13;
