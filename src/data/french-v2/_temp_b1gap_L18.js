// L18 - Attention & Observation
const LESSON_18 = {id:"frv2_b1gap_l18", title:"Observer et percevoir", icon:"\u{1F441}", xp:15, board:true, steps:[

{type:"intro", title:"Observer et percevoir",
 desc:"Learn vocabulary for perception, attention, observation, and how we notice the world around us.",
 goals:["Learn 20 words about attention and perception","Describe what you notice and observe","Express degrees of awareness"]},

{type:"teach", trg:"l'attentif", src:"attentive, careful", pos:"adj", gender:null,
 note:"Adjective. Attentif (m), attentive (f).\nPaying close attention.",
 example:"A: Les élèves sont très attentifs aujourd'hui.\nB: Le sujet les passionne visiblement.",
 exampleSrc:"A: The students are very attentive today.\nB: The subject clearly fascinates them.",
 funFact:"Soyez attentif (Be careful/Pay attention) is every French teacher's refrain."},

{type:"teach", trg:"l'attention", src:"attention, care", pos:"noun", gender:"f",
 note:"Feminine noun. Focus or kindness.\nAttention ! = Watch out! Faire attention = to be careful.",
 example:"A: Attention, le sol est glissant !\nB: Merci de m'avoir prévenu.",
 exampleSrc:"A: Watch out, the floor is slippery!\nB: Thanks for warning me.",
 funFact:"'Attention' is France's most common warning word. You see it everywhere: doors, trains, construction."},

{type:"teach", trg:"l'attente", src:"wait, expectation", pos:"noun", gender:"f",
 note:"Feminine noun. Both the act of waiting and what you expect.\nSalle d'attente = waiting room.",
 example:"A: L'attente à la poste était interminable.\nB: Tu aurais dû prendre rendez-vous en ligne.",
 exampleSrc:"A: The wait at the post office was endless.\nB: You should have booked an appointment online.",
 funFact:"'Contre toute attente' means 'against all expectations.' A very useful expression."},

{type:"teach", trg:"l'aperçu", src:"overview, glimpse, preview", pos:"noun", gender:"m",
 note:"Masculine noun. A brief view or summary.\nFrom apercevoir (to catch sight of).",
 example:"A: Ce document donne un bon aperçu de la situation.\nB: C'est un résumé clair et concis.",
 exampleSrc:"A: This document gives a good overview of the situation.\nB: It's a clear and concise summary.",
 funFact:"S'apercevoir de means to realize. L'aperçu is the quick glimpse that leads to understanding."},

{type:"teach", trg:"l'aspect", src:"aspect, appearance", pos:"noun", gender:"m",
 note:"Masculine noun. The way something looks or a facet.\nSous tous ses aspects = from all angles.",
 example:"A: Il faut examiner tous les aspects du problème.\nB: On ne peut pas se limiter à un seul point de vue.",
 exampleSrc:"A: We need to examine all aspects of the problem.\nB: We can't limit ourselves to one point of view.",
 funFact:"In linguistics, l'aspect verbal (verb aspect) is perfectif or imperfectif. A grammar term too."},

{type:"mc",
 q:"Quel mot signifie à la fois 'attendre' et 'ce qu'on espère' ?",
 opts:["l'attente","l'attention","l'aspect","l'aperçu"],
 ans:"l'attente",
 hint:"This feminine noun covers both the act of waiting and expectations. Think of a waiting room."},

{type:"teach", trg:"l'assurance", src:"insurance, confidence", pos:"noun", gender:"f",
 note:"Feminine noun. Financial insurance or self-confidence.\nParler avec assurance = to speak confidently.",
 example:"A: Elle parle avec beaucoup d'assurance.\nB: Son expérience lui donne confiance.",
 exampleSrc:"A: She speaks with great confidence.\nB: Her experience gives her confidence.",
 funFact:"Assurance maladie = health insurance. Assurance vie = life insurance. Assurance also means self-confidence."},

{type:"teach", trg:"l'attrait", src:"attraction, appeal", pos:"noun", gender:"m",
 note:"Masculine noun. What makes something attractive.\nL'attrait de la nouveauté = the appeal of novelty.",
 example:"A: L'attrait de cette ville, c'est son mélange de cultures.\nB: C'est ce qui la rend si vivante.",
 exampleSrc:"A: The appeal of this city is its mix of cultures.\nB: That's what makes it so lively.",
 funFact:"Les attraits (plural) can mean charms or attractive features. Slightly literary register."},

{type:"teach", trg:"l'aube", src:"dawn", pos:"noun", gender:"f",
 note:"Feminine noun. The first light of day.\nÀ l'aube = at dawn.",
 example:"A: Nous partirons à l'aube.\nB: Si tôt ? Il faudra se coucher tôt alors.",
 exampleSrc:"A: We'll leave at dawn.\nB: So early? We'll need to go to bed early then.",
 funFact:"More poetic than le lever du jour. L'aube is the word of choice in poetry and literature."},

{type:"teach", trg:"l'audace", src:"audacity, boldness", pos:"noun", gender:"f",
 note:"Feminine noun. Brave daring or shocking nerve.\nCan be positive or negative.",
 example:"A: Il a eu l'audace de dire la vérité au directeur.\nB: C'était courageux mais risqué.",
 exampleSrc:"A: He had the audacity to tell the truth to the director.\nB: It was brave but risky.",
 funFact:"Danton's battle cry: 'De l'audace, encore de l'audace, toujours de l'audace!' Audacity, always audacity!"},

{type:"fb",
 s:"Nous partirons à l'{1} pour éviter les embouteillages.",
 a:["aube"],
 opts:["aube","attente","attention","assurance"],
 hint:"This poetic feminine noun means the first light of day. Think of sunrise.",
 sSrc:"We'll leave at {1} to avoid traffic jams."},

{type:"teach", trg:"l'audience", src:"audience, hearing (legal)", pos:"noun", gender:"f",
 note:"Feminine noun. A court hearing or the viewers/listeners.\nTaux d'audience = viewer ratings.",
 example:"A: L'audience du tribunal a duré trois heures.\nB: Le verdict sera rendu demain.",
 exampleSrc:"A: The court hearing lasted three hours.\nB: The verdict will be delivered tomorrow.",
 funFact:"In French TV, 'faire de l'audience' means to get good ratings. A show's survival depends on it."},

{type:"teach", trg:"l'auditeur", src:"listener, auditor", pos:"noun", gender:"m",
 note:"Masculine noun. Auditrice (f).\nA radio listener or financial auditor.",
 example:"A: Les auditeurs ont appelé en grand nombre.\nB: Le sujet de l'émission les a passionnés.",
 exampleSrc:"A: Listeners called in in large numbers.\nB: The show's topic fascinated them.",
 funFact:"French radio still has loyal auditeurs. France Inter is the most listened-to station."},

{type:"teach", trg:"l'authenticité", src:"authenticity", pos:"noun", gender:"f",
 note:"Feminine noun. The quality of being genuine.\nCertificat d'authenticité = certificate of authenticity.",
 example:"A: L'authenticité de ce tableau est contestée.\nB: Des experts vont l'examiner.",
 exampleSrc:"A: The authenticity of this painting is disputed.\nB: Experts will examine it.",
 funFact:"In food, authenticité is about terroir and tradition. French foodies demand it in everything."},

{type:"mc",
 q:"Quel mot désigne le premier moment de lumière le matin ?",
 opts:["l'attente","l'aube","l'audience","l'audace"],
 ans:"l'aube",
 hint:"This poetic word is preferred in literature over 'lever du jour.' Think of poets watching sunrise."},

{type:"teach", trg:"l'auteur", src:"author", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Auteure or autrice (f).\nCreator of a literary or artistic work.",
 example:"A: L'autrice de ce roman a gagné le prix Goncourt.\nB: Son livre est en tête des ventes.",
 exampleSrc:"A: The author of this novel won the Goncourt prize.\nB: Her book is at the top of the sales charts.",
 funFact:"The feminization debate: auteure (Quebec) vs. autrice (France). Both are now accepted, autrice gaining ground."},

{type:"teach", trg:"l'autorisation", src:"authorization, permission", pos:"noun", gender:"f",
 note:"Feminine noun. Official permission to do something.\nDemander une autorisation = to request permission.",
 example:"A: Il faut une autorisation pour construire ici.\nB: Le permis prend environ deux mois.",
 exampleSrc:"A: You need authorization to build here.\nB: The permit takes about two months.",
 funFact:"Autorisation parentale (parental consent) is needed for everything involving minors in France."},

{type:"teach", trg:"l'autoritaire", src:"authoritarian, bossy", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Imposing authority firmly.\nNegative connotation in most contexts.",
 example:"A: Son style de management est trop autoritaire.\nB: Les employés ne se sentent pas respectés.",
 exampleSrc:"A: His management style is too authoritarian.\nB: Employees don't feel respected.",
 funFact:"Régime autoritaire is an authoritarian regime. In France, being called autoritaire is rarely a compliment."},

{type:"teach", trg:"l'autorité", src:"authority", pos:"noun", gender:"f",
 note:"Feminine noun. Power or a body with power.\nLes autorités = the authorities.",
 example:"A: Les autorités ont fermé la route.\nB: Un accident a bloqué la circulation.",
 exampleSrc:"A: The authorities closed the road.\nB: An accident blocked traffic.",
 funFact:"Faire autorité means 'to be authoritative/definitive.' 'Ce livre fait autorité sur le sujet.'"},

{type:"fb",
 s:"L'{1} de ce tableau ancien est mise en doute.",
 a:["authenticité"],
 opts:["authenticité","autorité","autorisation","audience"],
 hint:"This feminine noun describes the quality of being genuine. Experts verify this for artworks.",
 sSrc:"The {1} of this old painting is being questioned."},

{type:"match", pairs:[
  {trg:"l'attente", src:"wait/expectation"},
  {trg:"l'aube", src:"dawn"},
  {trg:"l'audace", src:"audacity"},
  {trg:"l'authenticité", src:"authenticity"},
  {trg:"l'autorité", src:"authority"}
]},

{type:"mc",
 q:"Quel adjectif décrit un chef qui impose son pouvoir de façon excessive ?",
 opts:["artificiel","autonome","autoritaire","attentif"],
 ans:"autoritaire",
 hint:"This adjective has a negative connotation in most contexts. Think of a boss who doesn't listen."}

]};
export default LESSON_18;
