// L17 - Science & Technology
const LESSON_17 = {id:"frv2_b1gap_l17", title:"Sciences et technologie", icon:"\u{1F52C}", xp:15, board:true, steps:[

{type:"intro", title:"Sciences et technologie",
 desc:"Explore scientific vocabulary, technology terms, and words for describing the modern world.",
 goals:["Learn 20 science and technology words","Discuss research and innovation","Use precise scientific vocabulary"]},

{type:"teach", trg:"l'astrophysicien", src:"astrophysicist", pos:"noun", gender:"m",
 note:"Masculine noun. Astrophysicienne (f).\nScientist studying the physics of celestial bodies.",
 example:"A: L'astrophysicienne a découvert un nouveau phénomène.\nB: Sa recherche est publiée dans Nature.",
 exampleSrc:"A: The astrophysicist discovered a new phenomenon.\nB: Her research is published in Nature.",
 funFact:"France has world-class astrophysics. The CEA (Commissariat à l'énergie atomique) does cutting-edge research."},

{type:"teach", trg:"l'astrologue", src:"astrologer", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Someone who practices astrology.\nNOT a scientist (that's astronome).",
 example:"A: L'astrologue prédit une bonne année pour les Poissons.\nB: Tu y crois vraiment ?",
 exampleSrc:"A: The astrologer predicts a good year for Pisces.\nB: Do you really believe in that?",
 funFact:"French magazines always have a horoscope section. Astrology is popular despite France's scientific culture."},

{type:"teach", trg:"l'antidépressif", src:"antidepressant", pos:"noun", gender:"m",
 note:"Masculine noun. Also adjective.\nMedication for depression.",
 example:"A: Les antidépressifs doivent être prescrits par un médecin.\nB: On ne les prend pas à la légère.",
 exampleSrc:"A: Antidepressants must be prescribed by a doctor.\nB: You don't take them lightly.",
 funFact:"France is one of Europe's top consumers of antidépressifs. It's a frequent public health discussion."},

{type:"teach", trg:"architectural", src:"architectural", pos:"adj", gender:null,
 note:"Adjective. Architectural (m), architecturale (f).\nRelated to architecture and building design.",
 example:"A: Le patrimoine architectural de Paris est extraordinaire.\nB: Chaque quartier a son style unique.",
 exampleSrc:"A: The architectural heritage of Paris is extraordinary.\nB: Each neighborhood has its unique style.",
 funFact:"France protects its patrimoine architectural fiercely. You can't even change your shutters without permission."},

{type:"teach", trg:"l'anthropologique", src:"anthropological", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nRelated to the study of human societies.",
 example:"A: Cette étude anthropologique révèle les coutumes locales.\nB: C'est fascinant de comprendre ces traditions.",
 exampleSrc:"A: This anthropological study reveals local customs.\nB: It's fascinating to understand these traditions.",
 funFact:"Lévi-Strauss made French anthropology world-famous. His structuralist approach influenced all social sciences."},

{type:"mc",
 q:"Quel spécialiste étudie la physique des étoiles et des galaxies ?",
 opts:["l'astrophysicien","l'astrologue","l'astronome","l'anthropologue"],
 ans:"l'astrophysicien",
 hint:"This scientist specifically studies physics applied to celestial bodies. Not the same as an astronomer."},

{type:"teach", trg:"l'alphabétisation", src:"literacy education, teaching to read", pos:"noun", gender:"f",
 note:"Feminine noun. The process of teaching reading.\nCampagne d'alphabétisation = literacy campaign.",
 example:"A: L'alphabétisation reste un défi dans certaines régions.\nB: L'éducation est la clé du développement.",
 exampleSrc:"A: Literacy education remains a challenge in some regions.\nB: Education is the key to development.",
 funFact:"From alphabet. Taux d'alphabétisation is the literacy rate. France helped fund literacy campaigns worldwide."},

{type:"teach", trg:"l'annexe", src:"annex, appendix, extension", pos:"noun", gender:"f",
 note:"Feminine noun. An additional building or document.\nEn annexe = attached/appended.",
 example:"A: Les résultats détaillés sont en annexe.\nB: Je les consulterai après la réunion.",
 exampleSrc:"A: The detailed results are in the appendix.\nB: I'll look at them after the meeting.",
 funFact:"Every French report has annexes. Students learn early to put supporting material 'en annexe.'"},

{type:"teach", trg:"l'antiraciste", src:"anti-racist", pos:"adj", gender:null,
 note:"Adjective and noun. Same form for m/f.\nOpposed to racism.",
 example:"A: Le mouvement antiraciste a organisé une marche.\nB: Des milliers de personnes ont participé.",
 exampleSrc:"A: The anti-racist movement organized a march.\nB: Thousands of people participated.",
 funFact:"SOS Racisme, founded 1984, is France's most famous antiraciste organization. Its slogan: 'Touche pas à mon pote.'"},

{type:"teach", trg:"l'appel", src:"call, appeal", pos:"noun", gender:"m",
 note:"Masculine noun. A phone call or legal appeal.\nFaire appel = to appeal (a court decision).",
 example:"A: J'ai reçu un appel important ce matin.\nB: De qui ? Du travail ?",
 exampleSrc:"A: I got an important call this morning.\nB: From whom? From work?",
 funFact:"L'appel du 18 juin is De Gaulle's famous 1940 radio call to resist Nazi occupation. Sacred in French history."},

{type:"fb",
 s:"L'{1} reste un défi dans de nombreux pays en développement.",
 a:["alphabétisation"],
 opts:["alphabétisation","anthropologie","architecture","astronomie"],
 hint:"This feminine noun describes the process of teaching people to read and write.",
 sSrc:"{1} remains a challenge in many developing countries."},

{type:"teach", trg:"l'appareil", src:"device, appliance, apparatus", pos:"noun", gender:"m",
 note:"Masculine noun. Any mechanical or electronic device.\nAppareil photo = camera.",
 example:"A: Cet appareil est très facile à utiliser.\nB: Même ma grand-mère l'utilise sans problème.",
 exampleSrc:"A: This device is very easy to use.\nB: Even my grandmother uses it without problems.",
 funFact:"Appareil photo (camera), appareil dentaire (braces), appareil auditif (hearing aid). Very versatile word."},

{type:"teach", trg:"l'application", src:"application, app", pos:"noun", gender:"f",
 note:"Feminine noun. A software app or the act of applying.\nTélécharger une application = to download an app.",
 example:"A: Cette application facilite l'apprentissage des langues.\nB: Je l'utilise tous les jours.",
 exampleSrc:"A: This app makes language learning easier.\nB: I use it every day.",
 funFact:"In formal French, application still primarily means 'diligent effort.' The tech meaning is newer."},

{type:"teach", trg:"l'artificiel", src:"artificial", pos:"adj", gender:null,
 note:"Adjective. Artificiel (m), artificielle (f).\nNot natural, man-made.",
 example:"A: L'intelligence artificielle progresse rapidement.\nB: Elle transforme tous les secteurs.",
 exampleSrc:"A: Artificial intelligence is progressing rapidly.\nB: It's transforming all sectors.",
 funFact:"Feux d'artifice (fireworks) literally means 'artificial fires.' Lac artificiel = man-made lake."},

{type:"mc",
 q:"Quel mot désigne un appareil électronique ou mécanique ?",
 opts:["un appareil","une application","un appel","une annexe"],
 ans:"un appareil",
 hint:"This versatile word covers cameras, dental braces, hearing aids, and any device."},

{type:"teach", trg:"l'atelier", src:"workshop, studio", pos:"noun", gender:"m",
 note:"Masculine noun. A workspace for artisans or artists.\nAlso: a training workshop.",
 example:"A: L'atelier de peinture est au troisième étage.\nB: Les cours ont lieu le samedi matin.",
 exampleSrc:"A: The painting studio is on the third floor.\nB: Classes take place on Saturday mornings.",
 funFact:"Atelier is both an artist's studio and a corporate training session. The word bridges art and business."},

{type:"teach", trg:"l'automatique", src:"automatic", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nFunctioning without human intervention.",
 example:"A: Les portes automatiques s'ouvrent toutes seules.\nB: C'est pratique avec les bras chargés.",
 exampleSrc:"A: The automatic doors open by themselves.\nB: It's practical when your arms are full.",
 funFact:"Boîte automatique (automatic transmission) vs. boîte manuelle. Most French cars are still manual."},

{type:"teach", trg:"l'autonome", src:"autonomous, self-governing", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nSelf-sufficient, independent.",
 example:"A: Ce robot est complètement autonome.\nB: Il se recharge même tout seul.",
 exampleSrc:"A: This robot is completely autonomous.\nB: It even recharges by itself.",
 funFact:"Voiture autonome (self-driving car) is a hot topic. Autonomie also means battery life in French tech."},

{type:"teach", trg:"l'avancée", src:"advance, breakthrough", pos:"noun", gender:"f",
 note:"Feminine noun. A forward step or scientific advance.\nUne avancée majeure = a major breakthrough.",
 example:"A: Cette avancée médicale sauvera des vies.\nB: Les chercheurs méritent d'être félicités.",
 exampleSrc:"A: This medical breakthrough will save lives.\nB: The researchers deserve congratulations.",
 funFact:"Avancée is always positive in science. 'Une avancée technologique' is a tech breakthrough."},

{type:"fb",
 s:"L'{1} de peinture est ouvert tous les samedis matin.",
 a:["atelier"],
 opts:["atelier","appareil","application","annexe"],
 hint:"This masculine noun describes both an artist's workspace and a training session.",
 sSrc:"The painting {1} is open every Saturday morning."},

{type:"match", pairs:[
  {trg:"l'appareil", src:"device"},
  {trg:"artificiel", src:"artificial"},
  {trg:"autonome", src:"autonomous"},
  {trg:"l'avancée", src:"breakthrough"},
  {trg:"l'atelier", src:"workshop"}
]},

{type:"mc",
 q:"Quel adjectif décrit quelque chose qui n'est pas naturel ?",
 opts:["artificiel","automatique","autonome","architectural"],
 ans:"artificiel",
 hint:"Fireworks in French are called 'feux d'...' this word. Think of man-made things."}

]};
export default LESSON_17;
