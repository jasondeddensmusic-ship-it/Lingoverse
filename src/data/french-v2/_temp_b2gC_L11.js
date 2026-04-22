// L11 - Education & Institutions
const LESSON_11 = {id:"frv2_b2gC_l11", title:"Éducation et institutions", icon:"\u{1F393}", xp:15, board:true, steps:[

{type:"intro", title:"Éducation et institutions",
 desc:"Master vocabulary for the French education system, academic life, and institutional structures.",
 goals:["Learn 8 words for education and institutions","Discuss academic programs and roles","Navigate conversations about the French school system"]},

{type:"teach", trg:"le professorat", src:"professorship, teaching profession", pos:"noun", gender:"m",
 note:"Masculine noun. The profession or status of being a professor.\nAlso: the qualifying exam.",
 example:"A: Il prépare le concours du professorat.\nB: C'est un examen très difficile en France.",
 exampleSrc:"A: He is preparing for the teaching exam.\nB: It is a very difficult exam in France.",
 funFact:"In France, le professorat requires passing a national competitive exam (concours). Very selective."},

{type:"teach", trg:"le primaire", src:"primary education", pos:"noun", gender:"m",
 note:"Masculine noun (when used as noun). Primary school level.\nAlso adjective: école primaire.",
 example:"A: Mon fils entre au primaire en septembre.\nB: C'est une étape importante dans sa vie scolaire.",
 exampleSrc:"A: My son starts primary school in September.\nB: It is an important stage in his school life.",
 funFact:"French primary school (le primaire) lasts 5 years: CP, CE1, CE2, CM1, CM2. Children start at age 6."},

{type:"teach", trg:"la paroisse", src:"parish", pos:"noun", gender:"f",
 note:"Feminine noun. A local church community and its territory.\nHistorically important in French life.",
 example:"A: La paroisse organise une fête pour les enfants.\nB: Tout le village est invité samedi prochain.",
 exampleSrc:"A: The parish is organizing a party for children.\nB: The whole village is invited next Saturday.",
 funFact:"Before the Revolution, la paroisse was the basic unit of French society. Parish records are key genealogy sources."},

{type:"teach", trg:"le confrère", src:"colleague (in a profession)", pos:"noun", gender:"m",
 note:"Masculine noun. A fellow member of the same profession.\nFeminine: la consoeur. Formal register.",
 example:"A: Mon confrère à Lyon a publié un article intéressant.\nB: Vous travaillez dans le même domaine de recherche ?",
 exampleSrc:"A: My colleague in Lyon published an interesting article.\nB: Do you work in the same research field?",
 funFact:"Confrère is used among doctors, lawyers, and journalists. Collègue is more general and less formal."},

{type:"teach", trg:"la phonétique", src:"phonetics", pos:"noun", gender:"f",
 note:"Feminine noun. The study of speech sounds.\nEssential for language learning.",
 example:"A: La phonétique française est complexe pour les étrangers.\nB: Les voyelles nasales sont particulièrement difficiles.",
 exampleSrc:"A: French phonetics is complex for foreigners.\nB: Nasal vowels are particularly difficult.",
 funFact:"French has 16 vowel sounds including 4 nasal vowels. English has about 12-14 depending on accent."},

{type:"teach", trg:"prévisionnel", src:"projected, forecast", pos:"adj", gender:null,
 note:"Adjective. Prévisionnel (m), prévisionnelle (f).\nRelating to forecasts or projections.",
 example:"A: Le budget prévisionnel pour l'année prochaine est prêt.\nB: Les dépenses prévues sont en hausse de 5 %.",
 exampleSrc:"A: The projected budget for next year is ready.\nB: The planned expenses are up 5%.",
 funFact:"In French business, un plan prévisionnel is a required document for startups seeking bank financing."},

{type:"teach", trg:"le décimètre", src:"decimeter", pos:"noun", gender:"m",
 note:"Masculine noun. A unit of length equal to 10 centimeters.\nCommon in French schools.",
 example:"A: Passe-moi le double décimètre pour tracer une ligne droite.\nB: Tiens, il fait exactement 20 centimètres.",
 exampleSrc:"A: Pass me the ruler to draw a straight line.\nB: Here, it is exactly 20 centimeters.",
 funFact:"French students call their 20cm ruler un double décimètre. It is a standard item in every schoolbag."},

{type:"teach", trg:"l'oral", src:"oral exam", pos:"noun", gender:"m",
 note:"Masculine noun. A spoken exam, as opposed to written (l'écrit).\nCrucial in French education.",
 example:"A: L'oral du bac m'angoisse terriblement.\nB: Entraîne-toi devant un miroir, ça aide beaucoup.",
 exampleSrc:"A: The oral bac exam terrifies me.\nB: Practice in front of a mirror, it helps a lot.",
 funFact:"French exams almost always have both an écrit and an oral. The oral tests spontaneous expression."},

{type:"mc",
 q:"Quel examen faut-il passer en France pour devenir professeur ?",
 opts:["le concours du professorat","l'oral du bac","le primaire","la phonétique"],
 ans:"le concours du professorat",
 hint:"A national competitive exam. Very selective. Required to teach in public schools."},

{type:"fb",
 s:"Mon {1} à Marseille travaille sur le même projet de recherche.",
 a:["confrère"], opts:["confrère","professorat","primaire","décimètre"],
 hint:"A fellow member of the same profession. More formal than collègue.",
 sSrc:"My {1} in Marseille is working on the same research project."},

{type:"mc",
 q:"Comment appelle-t-on une règle de 20 cm dans les écoles françaises ?",
 opts:["un décamètre","un double décimètre","un demi-mètre","un centimètre"],
 ans:"un double décimètre",
 hint:"Two units of 10 cm each. A standard item in every French schoolbag."},

{type:"match", pairs:[
  {trg:"le professorat", src:"teaching profession"},
  {trg:"le primaire", src:"primary education"},
  {trg:"le confrère", src:"colleague"},
  {trg:"l'oral", src:"oral exam"},
  {trg:"la phonétique", src:"phonetics"}
]},

{type:"fb",
 s:"La {1} française est complexe, surtout les voyelles nasales.",
 a:["phonétique"], opts:["phonétique","paroisse","prévisionnel","oral"],
 hint:"The study of speech sounds. French has 16 vowel sounds.",
 sSrc:"French {1} is complex, especially the nasal vowels."},

{type:"mc",
 q:"Avant la Révolution, quelle était l'unité de base de la société française ?",
 opts:["le professorat","la phonétique","la paroisse","le primaire"],
 ans:"la paroisse",
 hint:"A local church community. Parish records are key sources for genealogy."},

{type:"fb",
 s:"Le budget {1} prévoit une augmentation des dépenses de 5 %.",
 a:["prévisionnel"], opts:["prévisionnel","primaire","phonétique","oral"],
 hint:"Relating to forecasts or projections. A planned estimate of future numbers.",
 sSrc:"The {1} budget forecasts a 5% increase in spending."},

{type:"drag_fill",
 s:"L'{1} du baccalauréat teste l'expression spontanée, tandis que l'écrit teste la {2}.",
 blanks:{"1":"oral","2":"rédaction"},
 pool:["oral","rédaction","phonétique","primaire"],
 hint:"The spoken exam tests spontaneity, the written exam tests writing ability"},

{type:"mc",
 q:"Combien d'années dure l'école primaire en France ?",
 opts:["3 ans","6 ans","4 ans","5 ans"],
 ans:"5 ans",
 hint:"From CP to CM2. Children start at age 6 and finish at age 11."}

]};
export default LESSON_11;
