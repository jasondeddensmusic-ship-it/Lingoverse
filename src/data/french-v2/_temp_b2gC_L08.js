// L08 - Environment & Nature
const LESSON_8 = {id:"frv2_b2gC_l8", title:"Environnement et nature", icon:"\u{1F33F}", xp:15, board:true, steps:[

{type:"intro", title:"Environnement et nature",
 desc:"Discuss environmental challenges, ecology, and natural phenomena with specialized vocabulary.",
 goals:["Learn 8 words for environment and nature","Discuss ecological issues and solutions","Express concern about environmental problems"]},

{type:"teach", trg:"la globalité", src:"totality, the whole picture", pos:"noun", gender:"f",
 note:"Feminine noun. The entirety of something.\nIn ecology: thinking globally about a system.",
 example:"A: Il faut considérer le problème dans sa globalité.\nB: Oui, les solutions partielles ne suffisent pas.",
 exampleSrc:"A: We need to consider the problem in its totality.\nB: Yes, partial solutions are not enough.",
 funFact:"French environmentalists use 'dans sa globalité' to argue for holistic rather than piecemeal approaches."},

{type:"teach", trg:"la porosité", src:"porosity", pos:"noun", gender:"f",
 note:"Feminine noun. The quality of having tiny holes that let liquid through.\nAlso figurative.",
 example:"A: La porosité du sol permet l'infiltration de l'eau.\nB: C'est essentiel pour recharger les nappes phréatiques.",
 exampleSrc:"A: The porosity of the soil allows water infiltration.\nB: It is essential for recharging groundwater tables.",
 funFact:"Figuratively, la porosité des frontières means borders that are easy to cross. A political metaphor."},

{type:"teach", trg:"le grillage", src:"wire mesh, fence", pos:"noun", gender:"m",
 note:"Masculine noun. A metal wire fence or screen.\nFrom grille (grate, grid).",
 example:"A: On a installé un grillage autour du jardin.\nB: C'est pour protéger les plants des lapins.",
 exampleSrc:"A: We installed a wire fence around the garden.\nB: It is to protect the plants from rabbits.",
 funFact:"From grille. A grillage is lighter than a clôture (fence). Very common in French gardens and farms."},

{type:"teach", trg:"le pilier", src:"pillar, mainstay", pos:"noun", gender:"m",
 note:"Masculine noun. A column that supports a structure.\nFiguratively: a key supporter.",
 example:"A: La biodiversité est un pilier de l'équilibre écologique.\nB: Sans elle, les écosystèmes s'effondrent.",
 exampleSrc:"A: Biodiversity is a pillar of ecological balance.\nB: Without it, ecosystems collapse.",
 funFact:"In French rugby, les piliers are the props in the front row. Strong, essential, holding everything up."},

{type:"teach", trg:"la détonation", src:"detonation, blast", pos:"noun", gender:"f",
 note:"Feminine noun. A loud explosion or blast.\nUsed for controlled demolitions and accidents.",
 example:"A: La détonation a été entendue à dix kilomètres.\nB: C'était une explosion contrôlée dans la carrière.",
 exampleSrc:"A: The detonation was heard ten kilometers away.\nB: It was a controlled explosion in the quarry.",
 funFact:"From Latin detonare, to thunder. French uses détonation for any violent explosion, not just military."},

{type:"teach", trg:"le paludisme", src:"malaria", pos:"noun", gender:"m",
 note:"Masculine noun. A tropical disease spread by mosquitoes.\nFrom Latin palus (swamp).",
 example:"A: Le paludisme reste un fléau en Afrique subsaharienne.\nB: Les moustiquaires et les médicaments sauvent des millions de vies.",
 exampleSrc:"A: Malaria remains a scourge in sub-Saharan Africa.\nB: Mosquito nets and medicine save millions of lives.",
 funFact:"From palus (swamp) because the disease was linked to swampy areas. English 'malaria' comes from Italian mal'aria (bad air)."},

{type:"teach", trg:"la mâchoire", src:"jaw", pos:"noun", gender:"f",
 note:"Feminine noun. The bone structure of the mouth.\nUsed in biology and anatomy.",
 example:"A: Le crocodile a la mâchoire la plus puissante du règne animal.\nB: Sa force de morsure est incroyable.",
 exampleSrc:"A: The crocodile has the most powerful jaw in the animal kingdom.\nB: Its bite force is incredible.",
 funFact:"From Old French maschoire. The expression 'serrer les mâchoires' means to clench your jaw in determination."},

{type:"teach", trg:"la jointure", src:"joint, junction", pos:"noun", gender:"f",
 note:"Feminine noun. The point where two things meet.\nAnatomy: a joint. Construction: a seam.",
 example:"A: La jointure entre les deux plaques tectoniques est fragile.\nB: C'est pourquoi il y a souvent des séismes dans cette zone.",
 exampleSrc:"A: The junction between the two tectonic plates is fragile.\nB: That is why there are often earthquakes in this area.",
 funFact:"From joindre (to join). Les jointures des doigts means knuckles, literally 'finger joints.'"},

{type:"mc",
 q:"Quel mot signifie 'considérer un problème dans son ensemble' ?",
 opts:["la globalité","la porosité","la jointure","la détonation"],
 ans:"la globalité",
 hint:"The totality, the whole picture. Think holistic rather than partial."},

{type:"fb",
 s:"La {1} du sol permet à l'eau de s'infiltrer jusqu'aux nappes phréatiques.",
 a:["porosité"], opts:["porosité","globalité","jointure","détonation"],
 hint:"The quality of having tiny holes. Think of sponge-like soil that absorbs water.",
 sSrc:"The {1} of the soil allows water to infiltrate to the groundwater tables."},

{type:"mc",
 q:"Quelle maladie tropicale est liée aux marécages dans son étymologie ?",
 opts:["la porosité","le paludisme","la détonation","la jointure"],
 ans:"le paludisme",
 hint:"From Latin palus meaning swamp. Spread by mosquitoes in tropical regions."},

{type:"match", pairs:[
  {trg:"la globalité", src:"totality"},
  {trg:"le grillage", src:"wire fence"},
  {trg:"le pilier", src:"pillar"},
  {trg:"la mâchoire", src:"jaw"},
  {trg:"la jointure", src:"joint"}
]},

{type:"fb",
 s:"La biodiversité est un {1} fondamental de l'équilibre écologique.",
 a:["pilier"], opts:["pilier","grillage","paludisme","jointure"],
 hint:"A column that holds everything up. Figuratively: an essential support.",
 sSrc:"Biodiversity is a fundamental {1} of ecological balance."},

{type:"mc",
 q:"Que protège un grillage dans un jardin ?",
 opts:["Le sol contre la pluie","L'eau contre la pollution","Les plants contre les animaux","Les oiseaux contre les chats"],
 ans:"Les plants contre les animaux",
 hint:"A wire mesh fence installed around growing areas. Common in French gardens."},

{type:"fb",
 s:"La {1} a été entendue à plusieurs kilomètres de la carrière.",
 a:["détonation"], opts:["détonation","jointure","mâchoire","globalité"],
 hint:"A loud explosion or blast. From Latin meaning to thunder.",
 sSrc:"The {1} was heard several kilometers from the quarry."},

{type:"drag_fill",
 s:"Le crocodile a la {1} la plus puissante, et la {2} de ses os est remarquable.",
 blanks:{"1":"mâchoire","2":"jointure"},
 pool:["mâchoire","jointure","porosité","globalité"],
 hint:"The jaw is incredibly strong, and the connection between bones is remarkable"},

{type:"mc",
 q:"En rugby français, comment appelle-t-on les joueurs de la première ligne ?",
 opts:["les grillages","les mâchoires","les jointures","les piliers"],
 ans:"les piliers",
 hint:"These players support the scrum. The word also means column or mainstay."}

]};
export default LESSON_8;
