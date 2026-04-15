// L06 - Science & Research
const LESSON_6 = {id:"frv2_b2gC_l6", title:"Sciences et recherche", icon:"\u{1F52C}", xp:15, board:true, steps:[

{type:"intro", title:"Sciences et recherche",
 desc:"Explore scientific vocabulary covering research methods, discoveries, and academic discourse.",
 goals:["Learn 8 words for science and research","Discuss research processes and findings","Navigate academic and scientific topics"]},

{type:"teach", trg:"la préconisation", src:"recommendation", pos:"noun", gender:"f",
 note:"Feminine noun. A formal recommendation or suggestion.\nMore official than 'conseil.'",
 example:"A: Les préconisations du rapport sont claires.\nB: Oui, il faut réduire les émissions de 40 % d'ici 2030.",
 exampleSrc:"A: The report's recommendations are clear.\nB: Yes, we need to reduce emissions by 40% by 2030.",
 funFact:"From Latin praeconizare, to proclaim publicly. French experts issue des préconisations, not just advice."},

{type:"teach", trg:"prédominant", src:"predominant", pos:"adj", gender:null,
 note:"Adjective. Prédominant (m), prédominante (f).\nThe most important or powerful element.",
 example:"A: Quel est le facteur prédominant dans cette étude ?\nB: Le niveau de stress est le facteur prédominant.",
 exampleSrc:"A: What is the predominant factor in this study?\nB: The stress level is the predominant factor.",
 funFact:"From Latin prae (before) + dominare (to rule). The thing that rules above all others."},

{type:"teach", trg:"prédisposer", src:"to predispose", pos:"verb", gender:null,
 note:"Regular -er verb. To make someone more likely to have or do something.\nOften used in medicine.",
 example:"A: La génétique peut prédisposer à certaines maladies.\nB: C'est pourquoi les antécédents familiaux sont importants.",
 exampleSrc:"A: Genetics can predispose to certain diseases.\nB: That is why family history is important.",
 funFact:"French medicine uses prédisposition as a key concept. It does not mean certainty, only increased risk."},

{type:"teach", trg:"préfigurer", src:"to foreshadow, to prefigure", pos:"verb", gender:null,
 note:"Regular -er verb. To be an early sign of what is to come.\nUsed in literary and scientific analysis.",
 example:"A: Ces résultats préfigurent une révolution technologique.\nB: Si les tests confirment, tout va changer.",
 exampleSrc:"A: These results foreshadow a technological revolution.\nB: If the tests confirm, everything will change.",
 funFact:"From Latin praefigurare. French critics love this verb for announcing future trends in art and science."},

{type:"teach", trg:"présager", src:"to forebode, to predict", pos:"verb", gender:null,
 note:"Regular -er verb (with g>ge before a/o).\nSuggests an omen or sign of what will happen.",
 example:"A: Ces nuages noirs présagent un orage violent.\nB: Rentrons vite avant qu'il ne commence à pleuvoir.",
 exampleSrc:"A: Those dark clouds forebode a violent storm.\nB: Let's go inside quickly before it starts raining.",
 funFact:"From Latin praesagire. A présage can be positive or negative, unlike English 'foreboding.'"},

{type:"teach", trg:"le prédateur", src:"predator", pos:"noun", gender:"m",
 note:"Masculine noun. An animal that hunts others.\nAlso used figuratively for exploitative people.",
 example:"A: Le loup est le principal prédateur de cette région.\nB: Sa réintroduction aide à réguler les populations de cerfs.",
 exampleSrc:"A: The wolf is the main predator in this region.\nB: Its reintroduction helps regulate deer populations.",
 funFact:"The debate over wolf reintroduction in France pits shepherds against ecologists. A heated topic."},

{type:"teach", trg:"la précipitation", src:"haste, precipitation", pos:"noun", gender:"f",
 note:"Feminine noun. Acting too quickly without thinking.\nAlso: rainfall (météo).",
 example:"A: Ne prends pas de décision dans la précipitation.\nB: Tu as raison, je vais y réfléchir calmement.",
 exampleSrc:"A: Don't make a decision in haste.\nB: You are right, I will think about it calmly.",
 funFact:"Double meaning: in daily French, haste. In meteorology, rainfall or snowfall. Context decides."},

{type:"teach", trg:"proéminent", src:"prominent, protruding", pos:"adj", gender:null,
 note:"Adjective. Proéminent (m), proéminente (f).\nPhysically sticking out, or figuratively prominent.",
 example:"A: Ce scientifique occupe une place proéminente dans son domaine.\nB: Ses recherches ont été citées plus de mille fois.",
 exampleSrc:"A: This scientist holds a prominent place in his field.\nB: His research has been cited more than a thousand times.",
 funFact:"From Latin proeminere, to project forward. French uses it for both physical and abstract prominence."},

{type:"mc",
 q:"Quel mot signifie 'une recommandation officielle' ?",
 opts:["une préconisation","une précipitation","une prédisposition","une présage"],
 ans:"une préconisation",
 hint:"More formal than a simple conseil. Experts issue these in official reports."},

{type:"fb",
 s:"La génétique peut {1} à certaines maladies chroniques.",
 a:["prédisposer"], opts:["prédisposer","préfigurer","présager","préconiser"],
 hint:"To make someone more likely to develop something. Does not mean certainty.",
 sSrc:"Genetics can {1} to certain chronic diseases."},

{type:"mc",
 q:"Que peut signifier 'la précipitation' en météorologie ?",
 opts:["La pluie ou la neige","Un tremblement de terre","Le vent violent","La chaleur extrême"],
 ans:"La pluie ou la neige",
 hint:"This word has a double meaning. In weather reports, it refers to water falling from the sky."},

{type:"match", pairs:[
  {trg:"la préconisation", src:"recommendation"},
  {trg:"prédominant", src:"predominant"},
  {trg:"préfigurer", src:"to foreshadow"},
  {trg:"le prédateur", src:"predator"},
  {trg:"proéminent", src:"prominent"}
]},

{type:"fb",
 s:"Ces résultats {1} une révolution dans le domaine médical.",
 a:["préfigurent"], opts:["préfigurent","prédisposent","présagent","précipitent"],
 hint:"To be an early sign of what is to come. To foreshadow a future development.",
 sSrc:"These results {1} a revolution in the medical field."},

{type:"mc",
 q:"Quel animal est le principal prédateur réintroduit dans les montagnes françaises ?",
 opts:["le loup","le renard","l'aigle","l'ours"],
 ans:"le loup",
 hint:"This canine predator's return to France sparked debates between shepherds and ecologists."},

{type:"fb",
 s:"Le stress est le facteur {1} dans le développement de cette maladie.",
 a:["prédominant"], opts:["prédominant","proéminent","précipité","prédisposé"],
 hint:"The most important or powerful element. The one that rules above all others.",
 sSrc:"Stress is the {1} factor in the development of this disease."},

{type:"drag_fill",
 s:"Ces nuages noirs {1} un orage, ne prenons pas de décision dans la {2}.",
 blanks:{"1":"présagent","2":"précipitation"},
 pool:["présagent","précipitation","préfigurent","préconisation"],
 hint:"Dark clouds predict a storm. Avoid acting too hastily."},

{type:"mc",
 q:"Quel adjectif décrit quelqu'un qui occupe une place importante et visible ?",
 opts:["proéminent","prédominant","précipité","prédisposé"],
 ans:"proéminent",
 hint:"From Latin 'to project forward.' Someone who stands out, physically or figuratively."}

]};
export default LESSON_6;
