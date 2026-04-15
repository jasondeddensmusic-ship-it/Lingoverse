// L05 - Economy & Business
const LESSON_5 = {id:"frv2_b2gC_l5", title:"Économie et entreprise", icon:"\u{1F4C8}", xp:15, board:true, steps:[

{type:"intro", title:"Économie et entreprise",
 desc:"Master essential vocabulary for discussing business, economics, and the professional world.",
 goals:["Learn 8 words for economy and business","Discuss economic trends and challenges","Navigate professional conversations"]},

{type:"teach", trg:"le profiteur", src:"profiteer, freeloader", pos:"noun", gender:"m",
 note:"Masculine noun. Someone who takes unfair advantage.\nFeminine: la profiteuse. Negative connotation.",
 example:"A: Certains profiteurs exploitent la crise pour s'enrichir.\nB: C'est scandaleux, les prix ont doublé.",
 exampleSrc:"A: Some profiteers exploit the crisis to get rich.\nB: It is outrageous, prices have doubled.",
 funFact:"During wartime France, profiteurs de guerre (war profiteers) were deeply despised by the public."},

{type:"teach", trg:"le pourvoyeur", src:"supplier, provider", pos:"noun", gender:"m",
 note:"Masculine noun. Someone who provides or supplies.\nFrom pourvoir (to provide).",
 example:"A: Cette entreprise est le principal pourvoyeur d'emplois de la région.\nB: Si elle ferme, des milliers de personnes perdront leur travail.",
 exampleSrc:"A: This company is the main job provider in the region.\nB: If it closes, thousands of people will lose their jobs.",
 funFact:"The verb pourvoir is irregular and ancient. Un pourvoyeur can supply goods, jobs, or even ideas."},

{type:"teach", trg:"le productivisme", src:"productivism", pos:"noun", gender:"m",
 note:"Masculine noun. The ideology of maximizing production above all else.\nOften criticized by ecologists.",
 example:"A: Le productivisme agricole a des conséquences sur l'environnement.\nB: Oui, il faut repenser nos méthodes de production.",
 exampleSrc:"A: Agricultural productivism has consequences for the environment.\nB: Yes, we need to rethink our production methods.",
 funFact:"French ecological movements coined anti-productivisme to oppose unlimited economic growth."},

{type:"teach", trg:"l'accélération", src:"acceleration", pos:"noun", gender:"f",
 note:"Feminine noun. The process of speeding up.\nUsed for economic growth and social change.",
 example:"A: L'accélération de la transformation numérique surprend tout le monde.\nB: Les entreprises doivent s'adapter rapidement ou disparaître.",
 exampleSrc:"A: The acceleration of digital transformation surprises everyone.\nB: Companies must adapt quickly or disappear.",
 funFact:"French uses accélération for both physics and social change. Note the accent on the first e."},

{type:"teach", trg:"la division", src:"division", pos:"noun", gender:"f",
 note:"Feminine noun. A separation or organizational unit.\nBusiness: a department within a company.",
 example:"A: La division marketing lance une nouvelle campagne.\nB: Ils ont un budget de deux millions d'euros cette année.",
 exampleSrc:"A: The marketing division is launching a new campaign.\nB: They have a budget of two million euros this year.",
 funFact:"In French politics, division also means disagreement. 'Semer la division' means to create discord."},

{type:"teach", trg:"la pénalité", src:"penalty, fine", pos:"noun", gender:"f",
 note:"Feminine noun. A punishment, often financial.\nUsed in law, sports, and business.",
 example:"A: L'entreprise a reçu une pénalité pour non-respect des normes.\nB: La pénalité s'élève à cinquante mille euros.",
 exampleSrc:"A: The company received a penalty for non-compliance with standards.\nB: The penalty amounts to fifty thousand euros.",
 funFact:"In football, a pénalité is a penalty kick. In business, it means a contractual fine."},

{type:"teach", trg:"le précurseur", src:"precursor, pioneer", pos:"noun", gender:"m",
 note:"Masculine noun. Someone or something that comes before and leads the way.\nFeminine: la précurseuse.",
 example:"A: Cette startup est un précurseur dans le domaine de l'intelligence artificielle.\nB: Ils ont développé la technologie cinq ans avant les autres.",
 exampleSrc:"A: This startup is a precursor in the field of artificial intelligence.\nB: They developed the technology five years before the others.",
 funFact:"From Latin praecursor, meaning a forerunner. John the Baptist is called le Précurseur in French."},

{type:"teach", trg:"prospère", src:"prosperous, thriving", pos:"adj", gender:null,
 note:"Adjective. Same form for masculine and feminine.\nDescribes success and wealth.",
 example:"A: Cette région était prospère grâce à l'industrie textile.\nB: Malheureusement, les usines ont fermé dans les années 90.",
 exampleSrc:"A: This region was prosperous thanks to the textile industry.\nB: Unfortunately, the factories closed in the 1990s.",
 funFact:"From Latin prosperus, meaning favorable. The verb prospérer means to thrive or flourish."},

{type:"mc",
 q:"Quel mot décrit quelqu'un qui profite injustement d'une situation ?",
 opts:["un profiteur","un pourvoyeur","un précurseur","un producteur"],
 ans:"un profiteur",
 hint:"This person takes unfair advantage. The word has a very negative connotation."},

{type:"fb",
 s:"Cette entreprise est le principal {1} d'emplois dans la région.",
 a:["pourvoyeur"], opts:["pourvoyeur","profiteur","précurseur","productivisme"],
 hint:"Someone who provides or supplies. From the verb pourvoir meaning to provide.",
 sSrc:"This company is the main job {1} in the region."},

{type:"mc",
 q:"Que critique le mouvement anti-productiviste ?",
 opts:["La maximisation de la production au détriment de l'environnement","Le manque de production","Les importations étrangères","La technologie moderne"],
 ans:"La maximisation de la production au détriment de l'environnement",
 hint:"This ideology puts output above everything else. Ecologists oppose it."},

{type:"match", pairs:[
  {trg:"le profiteur", src:"profiteer"},
  {trg:"le pourvoyeur", src:"provider"},
  {trg:"le précurseur", src:"precursor"},
  {trg:"prospère", src:"prosperous"},
  {trg:"la pénalité", src:"penalty"}
]},

{type:"fb",
 s:"L'{1} de la transformation numérique oblige les entreprises à s'adapter.",
 a:["accélération"], opts:["accélération","division","pénalité","productivisme"],
 hint:"The process of speeding up. Digital change is happening faster and faster.",
 sSrc:"The {1} of digital transformation forces companies to adapt."},

{type:"mc",
 q:"Que signifie 'prospère' ?",
 opts:["Qui connaît le succès et la richesse","Qui est en difficulté","Qui refuse le changement","Qui commence quelque chose"],
 ans:"Qui connaît le succès et la richesse",
 hint:"Think of thriving, flourishing. A state of success and well-being."},

{type:"fb",
 s:"L'entreprise a reçu une {1} de cinquante mille euros pour non-conformité.",
 a:["pénalité"], opts:["pénalité","division","accélération","précurseur"],
 hint:"A financial punishment for breaking rules or failing to comply with standards.",
 sSrc:"The company received a {1} of fifty thousand euros for non-compliance."},

{type:"drag_fill",
 s:"Ce {1} de la technologie a créé une entreprise {2} en dix ans.",
 blanks:{"1":"précurseur","2":"prospère"},
 pool:["précurseur","prospère","profiteur","productivisme"],
 hint:"A pioneer in tech built a thriving company within a decade"},

{type:"mc",
 q:"Quel mot peut désigner à la fois un département d'entreprise et un désaccord ?",
 opts:["la division","la pénalité","l'accélération","le productivisme"],
 ans:"la division",
 hint:"In business it means a unit. In politics it means discord. Same word, two uses."}

]};
export default LESSON_5;
