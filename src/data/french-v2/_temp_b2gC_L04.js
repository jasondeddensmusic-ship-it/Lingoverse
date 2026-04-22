// L04 - Media & Digital World
const LESSON_4 = {id:"frv2_b2gC_l4", title:"Médias et monde numérique", icon:"\u{1F4F1}", xp:15, board:true, steps:[

{type:"intro", title:"Médias et monde numérique",
 desc:"Navigate the vocabulary of modern media, digital culture, and online communication.",
 goals:["Learn 8 words for media and digital topics","Discuss online culture and journalism","Express opinions about the digital world"]},

{type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
 note:"Feminine noun. The collective world of blogs and bloggers.\nA 2000s term still used in media studies.",
 example:"A: La blogosphère a changé le journalisme traditionnel.\nB: Oui, tout le monde peut publier son opinion maintenant.",
 exampleSrc:"A: The blogosphere has changed traditional journalism.\nB: Yes, everyone can publish their opinion now.",
 funFact:"The word blends blog + atmosphère. French adapted it with the feminine gender from atmosphère."},

{type:"teach", trg:"la programmation", src:"programming", pos:"noun", gender:"f",
 note:"Feminine noun. Writing computer code or scheduling content.\nDouble meaning: code and TV scheduling.",
 example:"A: Tu apprends la programmation ?\nB: Oui, je suis des cours de Python en ligne.",
 exampleSrc:"A: Are you learning programming?\nB: Yes, I am taking online Python courses.",
 funFact:"France has a thriving tech scene called la French Tech. Programming bootcamps are booming in Paris."},

{type:"teach", trg:"le processeur", src:"processor", pos:"noun", gender:"m",
 note:"Masculine noun. The central chip in a computer.\nFrom the verb 'traiter' (to process).",
 example:"A: Mon ordinateur est très lent.\nB: Tu devrais peut-être changer le processeur.",
 exampleSrc:"A: My computer is very slow.\nB: Maybe you should change the processor.",
 funFact:"France uses processeur, not the anglicism 'CPU.' The Académie Française prefers French tech terms."},

{type:"teach", trg:"le pseudonyme", src:"pseudonym, screen name", pos:"noun", gender:"m",
 note:"Masculine noun. A false name used online or in writing.\nAlso: un pseudo (informal).",
 example:"A: Quel pseudonyme utilises-tu sur les réseaux sociaux ?\nB: Je préfère rester anonyme avec un simple pseudo.",
 exampleSrc:"A: What screen name do you use on social media?\nB: I prefer to stay anonymous with a simple username.",
 funFact:"Many French authors used pseudonyms. Voltaire, Molière, and Stendhal are all pen names."},

{type:"teach", trg:"l'intensification", src:"intensification", pos:"noun", gender:"f",
 note:"Feminine noun. Making something stronger or more extreme.\nCommon in media analysis.",
 example:"A: On observe une intensification de la désinformation en ligne.\nB: Les réseaux sociaux amplifient les fausses nouvelles.",
 exampleSrc:"A: We observe an intensification of online disinformation.\nB: Social media amplifies fake news.",
 funFact:"Media scholars study l'intensification des discours (the escalation of rhetoric) during elections."},

{type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
 note:"Feminine noun. Portraying someone or something as evil.\nCommon in political media analysis.",
 example:"A: La diabolisation de l'adversaire est une tactique politique classique.\nB: Cela empêche tout débat constructif.",
 exampleSrc:"A: The demonization of the opponent is a classic political tactic.\nB: It prevents any constructive debate.",
 funFact:"From diable (devil). French political commentators use this term frequently during campaign seasons."},

{type:"teach", trg:"le photomontage", src:"photomontage", pos:"noun", gender:"m",
 note:"Masculine noun. A composite image made from multiple photos.\nNow often digital manipulation.",
 example:"A: Cette image est un photomontage, pas une vraie photo.\nB: Il faut toujours vérifier les sources visuelles en ligne.",
 exampleSrc:"A: This image is a photomontage, not a real photo.\nB: You should always verify visual sources online.",
 funFact:"Photomontage was a Dada art form. Today it often means deepfakes or manipulated images."},

{type:"teach", trg:"le plurilinguisme", src:"multilingualism", pos:"noun", gender:"m",
 note:"Masculine noun. The ability to use multiple languages.\nA valued skill in European contexts.",
 example:"A: Le plurilinguisme est encouragé par l'Union européenne.\nB: Chaque citoyen devrait parler au moins deux langues étrangères.",
 exampleSrc:"A: Multilingualism is encouraged by the European Union.\nB: Every citizen should speak at least two foreign languages.",
 funFact:"The EU promotes plurilinguisme as a core value. The EU has 24 official languages."},

{type:"mc",
 q:"Quel mot désigne l'ensemble des blogs sur Internet ?",
 opts:["la blogosphère","la programmation","le photomontage","le processeur"],
 ans:"la blogosphère",
 hint:"A blend of blog + atmosphère. The collective online world of bloggers."},

{type:"fb",
 s:"La {1} de l'adversaire politique empêche tout débat constructif.",
 a:["diabolisation"], opts:["diabolisation","programmation","intensification","blogosphère"],
 hint:"From diable (devil). Portraying someone as evil to discredit them.",
 sSrc:"The {1} of the political opponent prevents any constructive debate."},

{type:"mc",
 q:"Quel composant d'un ordinateur est responsable du traitement des données ?",
 opts:["le plurilinguisme","le processeur","le pseudonyme","le photomontage"],
 ans:"le processeur",
 hint:"The central chip. From the verb 'traiter' meaning to process or handle data."},

{type:"match", pairs:[
  {trg:"la blogosphère", src:"the blogosphere"},
  {trg:"le pseudonyme", src:"pseudonym"},
  {trg:"le photomontage", src:"photomontage"},
  {trg:"le plurilinguisme", src:"multilingualism"},
  {trg:"l'intensification", src:"intensification"}
]},

{type:"fb",
 s:"Beaucoup d'auteurs français célèbres ont utilisé un {1} pour écrire.",
 a:["pseudonyme"], opts:["pseudonyme","processeur","photomontage","plurilinguisme"],
 hint:"A false name used to hide your real identity. Voltaire and Molière used one.",
 sSrc:"Many famous French authors used a {1} to write."},

{type:"mc",
 q:"Que promeut l'Union européenne en matière de langues ?",
 opts:["la programmation","la diabolisation","le plurilinguisme","le pseudonyme"],
 ans:"le plurilinguisme",
 hint:"The EU encourages citizens to speak multiple languages. A core European value."},

{type:"fb",
 s:"Il faut vérifier si cette image est un {1} ou une photo authentique.",
 a:["photomontage"], opts:["photomontage","processeur","pseudonyme","plurilinguisme"],
 hint:"A composite image made by combining several photos. Can be used to deceive.",
 sSrc:"You should check if this image is a {1} or an authentic photo."},

{type:"drag_fill",
 s:"L'{1} de la désinformation nécessite une bonne {2} des sources.",
 blanks:{"1":"intensification","2":"vérification"},
 pool:["intensification","vérification","diabolisation","programmation"],
 hint:"The escalation of misinformation requires careful checking of sources"},

{type:"mc",
 q:"En France, quel organisme préfère les termes techniques français aux anglicismes ?",
 opts:["La blogosphère","Le processeur","Le photomontage","L'Académie Française"],
 ans:"L'Académie Française",
 hint:"This venerable institution guards the French language since 1635."}

]};
export default LESSON_4;
