// French B2 Gap Batch 9 — Lesson 19: Monde et Diversité
// Global diversity and cultural vocabulary

const LESSON_19 = {id:"frv2_b2g9_l19", title:"Monde et Diversité", icon:"🌍", xp:15, board:true, steps:[
  {type:"intro", title:"Monde et Diversité",
   desc:"Explore vocabulary for discussing global cultures, diversity, and international perspectives. Essential for B2 discussions about our interconnected world.",
   goals:["Learn 20 diversity and global vocabulary words","Discuss cultural differences","Analyze global issues with nuance"]},

  {type:"teach", trg:"algérien", src:"Algerian", pos:"adj", gender:null,
   note:"From Algérie (Algeria). Feminine: algérienne.\nAlso noun: un Algérien, une Algérienne.",
   example:"A: La cuisine algérienne est riche en épices.\nB: Le couscous algérien est célèbre dans le monde.",
   exampleSrc:"A: Algerian cuisine is rich in spices.\nB: Algerian couscous is famous worldwide.",
   funFact:"Algeria was a French colony until 1962. The war of independence profoundly shaped both countries."},

  {type:"teach", trg:"maghrébin", src:"North African (Maghreb)", pos:"adj", gender:null,
   note:"From Maghreb (Morocco, Algeria, Tunisia).\nFeminine: maghrébine.",
   example:"A: La communauté maghrébine est importante en France.\nB: Elle contribue à la richesse culturelle du pays.",
   exampleSrc:"A: The North African community is significant in France.\nB: It contributes to the country's cultural richness.",
   funFact:"Maghreb means 'the West' in Arabic. It refers to northwest Africa from the Arab perspective."},

  {type:"teach", trg:"kényan", src:"Kenyan", pos:"adj", gender:null,
   note:"From Kenya. Feminine: kényane.\nAlso noun: un Kényan, une Kényane.",
   example:"A: Les athlètes kényans dominent le marathon.\nB: Leurs records sont impressionnants.",
   exampleSrc:"A: Kenyan athletes dominate the marathon.\nB: Their records are impressive.",
   funFact:"French keeps the accent on Kényan, unlike English which has no accent mark."},

  {type:"teach", trg:"finnois", src:"Finnish", pos:"adj", gender:null,
   note:"From Finlande (Finland). Feminine: finnoise.\nAlso noun: le finnois (the language).",
   example:"A: Le système éducatif finnois est considéré comme un modèle.\nB: Les résultats PISA sont excellents.",
   exampleSrc:"A: The Finnish education system is considered a model.\nB: The PISA results are excellent.",
   funFact:"Finnish (finnois) is unrelated to Swedish. It belongs to the Uralic language family."},

  {type:"teach", trg:"indonésien", src:"Indonesian", pos:"adj", gender:null,
   note:"From Indonésie. Feminine: indonésienne.\nAlso noun: un Indonésien.",
   example:"A: L'archipel indonésien compte plus de 17 000 îles.\nB: C'est le plus grand archipel du monde.",
   exampleSrc:"A: The Indonesian archipelago has over 17,000 islands.\nB: It's the largest archipelago in the world.",
   funFact:"Indonesia has the fourth largest population in the world but is often overlooked in European education."},

  {type:"teach", trg:"islandais", src:"Icelandic", pos:"adj", gender:null,
   note:"From Islande (Iceland). Feminine: islandaise.\nAlso noun: l'islandais (the language).",
   example:"A: La littérature islandaise médiévale est fascinante.\nB: Les sagas sont des chefs-d'oeuvre narratifs.",
   exampleSrc:"A: Medieval Icelandic literature is fascinating.\nB: The sagas are narrative masterpieces.",
   funFact:"Icelandic has barely changed in 1,000 years. Modern Icelanders can read medieval texts."},

  {type:"teach", trg:"gaélique", src:"Gaelic", pos:"adj", gender:null,
   note:"Relating to the Celtic languages of Ireland and Scotland.\nAlso noun: le gaélique.",
   example:"A: Le gaélique irlandais est la première langue officielle.\nB: Mais l'anglais domine au quotidien.",
   exampleSrc:"A: Irish Gaelic is the first official language.\nB: But English dominates in daily life.",
   funFact:"France had its own Celtic language: le gaulois. It disappeared under Latin but left many words."},

  {type:"teach", trg:"l'indigène", src:"indigenous person", pos:"noun", gender:"m",
   note:"Also adjective: la population indigène.\nCan be sensitive. Autochtone is more neutral.",
   example:"A: Les droits des peuples indigènes doivent être respectés.\nB: Leur culture est un patrimoine mondial.",
   exampleSrc:"A: The rights of indigenous peoples must be respected.\nB: Their culture is a world heritage.",
   funFact:"In French, autochtone is now preferred over indigène, which carries colonial connotations."},

  {type:"teach", trg:"la discrimination", src:"discrimination", pos:"noun", gender:"f",
   note:"From discriminer (to discriminate).\nUnfair treatment based on group membership.",
   example:"A: La discrimination à l'embauche est illégale.\nB: Mais elle reste difficile à prouver.",
   exampleSrc:"A: Discrimination in hiring is illegal.\nB: But it remains difficult to prove.",
   funFact:"Testing (sending identical CVs with different names) proved discrimination exists in France."},

  {type:"mc", q:"Le Maghreb comprend:", opts:["L'Égypte, la Libye, le Soudan","Le Maroc, l'Algérie, la Tunisie","Le Sénégal, le Mali, le Niger","La Syrie, le Liban, la Jordanie"], ans:"Le Maroc, l'Algérie, la Tunisie",
   hint:"The three main countries of northwest Africa. Maghreb means 'the West' in Arabic."},

  {type:"teach", trg:"l'antijeune", src:"anti-youth", pos:"adj", gender:null,
   note:"Anti- + jeune. Discriminatory against young people.\nUsed in social commentary.",
   example:"A: Ces mesures sont perçues comme antijeunes.\nB: Les jeunes se sentent exclus du débat.",
   exampleSrc:"A: These measures are perceived as anti-youth.\nB: Young people feel excluded from the debate.",
   funFact:"French uses anti- very freely to create new adjectives: antijeune, anti-entreprise, anti-système."},

  {type:"teach", trg:"la diversité", src:"diversity", pos:"noun", gender:"f",
   note:"From divers (diverse) + -ité.\nVariety in culture, biology, or opinions.",
   example:"A: La diversité culturelle enrichit la société.\nB: Chaque culture apporte quelque chose d'unique.",
   exampleSrc:"A: Cultural diversity enriches society.\nB: Each culture brings something unique.",
   funFact:"France's national motto is Liberté, Égalité, Fraternité. Some propose adding Diversité."},

  {type:"teach", trg:"l'intégration", src:"integration", pos:"noun", gender:"f",
   note:"From intégrer (to integrate) + -ation.\nThe process of becoming part of a society.",
   example:"A: L'intégration des immigrants passe par la langue.\nB: Apprendre le français est la première étape.",
   exampleSrc:"A: Immigrant integration starts with language.\nB: Learning French is the first step.",
   funFact:"France's integration model is assimilationist: learning French and Republican values is expected."},

  {type:"teach", trg:"l'exclusion", src:"exclusion", pos:"noun", gender:"f",
   note:"From exclure (to exclude) + -ion.\nBeing shut out of society or opportunities.",
   example:"A: L'exclusion sociale touche les plus vulnérables.\nB: Le chômage de longue durée isole les gens.",
   exampleSrc:"A: Social exclusion affects the most vulnerable.\nB: Long-term unemployment isolates people.",
   funFact:"L'exclusion is a central concept in French social policy. 'Les exclus' means the marginalized."},

  {type:"fb", s:"La {1} culturelle est une richesse pour la société.", a:["diversité"], opts:["diversité","discrimination","exclusion","déscolarisation"],
   hint:"Variety and difference as a positive force. Multiple cultures together.",
   sSrc:"Cultural {1} is a richness for society."},

  {type:"teach", trg:"le préjugé", src:"prejudice", pos:"noun", gender:"m",
   note:"Pré- (before) + jugé (judged).\nA judgment formed before knowing the facts.",
   example:"A: Les préjugés empêchent le dialogue.\nB: Il faut apprendre à connaître l'autre.",
   exampleSrc:"A: Prejudice prevents dialogue.\nB: You need to get to know the other person.",
   funFact:"Literally 'pre-judged'. Same construction as English 'prejudice' from Latin praejudicium."},

  {type:"teach", trg:"la tolérance", src:"tolerance", pos:"noun", gender:"f",
   note:"From tolérer (to tolerate).\nAccepting differences in beliefs and behavior.",
   example:"A: La tolérance est une valeur républicaine.\nB: Respecter les différences est fondamental.",
   exampleSrc:"A: Tolerance is a Republican value.\nB: Respecting differences is fundamental.",
   funFact:"Voltaire's 'Traité sur la tolérance' (1763) is a founding text of French secularism."},

  {type:"mc", q:"Le terme 'autochtone' est préféré à 'indigène' car:", opts:["Il est plus court","Il n'a pas de connotations coloniales","Il est plus ancien","Il est plus scientifique"], ans:"Il n'a pas de connotations coloniales",
   hint:"Indigène carries baggage from colonial history. Autochtone is more neutral."},

  {type:"fb", s:"Les {1} sont des jugements formés sans connaître les faits.", a:["préjugés"], opts:["préjugés","diversités","tolérances","intégrations"],
   hint:"Pre-judged opinions. Formed before you know the reality.",
   sSrc:"{1} are judgments formed without knowing the facts."},

  {type:"match", pairs:[
    {trg:"algérien", src:"Algerian"},
    {trg:"maghrébin", src:"North African"},
    {trg:"finnois", src:"Finnish"},
    {trg:"islandais", src:"Icelandic"}
  ]},

  {type:"mc", q:"L'intégration en France passe avant tout par:", opts:["La religion","La cuisine","La langue française","Le sport"], ans:"La langue française",
   hint:"France's assimilationist model prioritizes learning the national language."},

  {type:"fb", s:"La {1} à l'embauche est illégale mais difficile à prouver.", a:["discrimination"], opts:["discrimination","diversité","tolérance","intégration"],
   hint:"Unfair treatment in hiring based on name, origin, or appearance.",
   sSrc:"{1} in hiring is illegal but hard to prove."},

  {type:"match", pairs:[
    {trg:"la diversité", src:"diversity"},
    {trg:"l'exclusion", src:"exclusion"},
    {trg:"le préjugé", src:"prejudice"},
    {trg:"la tolérance", src:"tolerance"}
  ]}
]};

export default LESSON_19;
