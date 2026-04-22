// L01 - Society & Democracy
const LESSON_1 = {id:"frv2_b2gC_l1", title:"Citoyenneté et démocratie", icon:"\u{1F3DB}", xp:15, board:true, steps:[

{type:"intro", title:"Citoyenneté et démocratie",
 desc:"Discuss democratic institutions, civic engagement, and the structures that shape French society.",
 goals:["Learn 8 words related to democracy and civic life","Discuss political participation and reform","Express opinions on social institutions"]},

{type:"teach", trg:"la démocratisation", src:"democratization", pos:"noun", gender:"f",
 note:"Feminine noun. The process of making something more democratic or accessible.",
 example:"A: La démocratisation de l'enseignement supérieur a changé la société.\nB: Oui, aujourd'hui tout le monde peut accéder à l'université.",
 exampleSrc:"A: The democratization of higher education has changed society.\nB: Yes, today everyone can access university.",
 funFact:"France's May 1968 protests accelerated the démocratisation of many institutions."},

{type:"teach", trg:"l'affirmation", src:"assertion, affirmation", pos:"noun", gender:"f",
 note:"Feminine noun. A strong statement or claim.\nAlso: self-assertion (l'affirmation de soi).",
 example:"A: Son discours était plein d'affirmations audacieuses.\nB: Oui, mais il n'a présenté aucune preuve.",
 exampleSrc:"A: His speech was full of bold assertions.\nB: Yes, but he presented no evidence.",
 funFact:"In French law, une affirmation means a sworn statement. Lying under affirmation is perjury."},

{type:"teach", trg:"la justification", src:"justification", pos:"noun", gender:"f",
 note:"Feminine noun. A reason or explanation that supports a position.\nKey word for essays.",
 example:"A: Quelle est ta justification pour cette décision ?\nB: Les études montrent que c'est la meilleure option.",
 exampleSrc:"A: What is your justification for this decision?\nB: Studies show it is the best option.",
 funFact:"In printing, justification means aligning text margins. The word crossed into legal use."},

{type:"teach", trg:"la désobéissance", src:"disobedience", pos:"noun", gender:"f",
 note:"Feminine noun. The act of refusing to obey.\nOften: désobéissance civile (civil disobedience).",
 example:"A: La désobéissance civile est-elle légitime ?\nB: Certains pensent que oui, quand les lois sont injustes.",
 exampleSrc:"A: Is civil disobedience legitimate?\nB: Some believe so, when laws are unjust.",
 funFact:"Thoreau's essay inspired French thinkers. The concept is deeply rooted in French revolutionary history."},

{type:"teach", trg:"l'administrateur", src:"administrator", pos:"noun", gender:"m",
 note:"Masculine noun. The person who manages an organization.\nFeminine: l'administratrice.",
 example:"A: Qui est l'administrateur de ce programme ?\nB: C'est Madame Dupont, elle gère tout depuis deux ans.",
 exampleSrc:"A: Who is the administrator of this program?\nB: It is Mrs. Dupont, she has managed everything for two years.",
 funFact:"French administration is famously detailed. The word shares its root with 'minister' (one who serves)."},

{type:"teach", trg:"le proviseur", src:"principal, headmaster", pos:"noun", gender:"m",
 note:"Masculine noun. Head of a lycée (high school).\nFeminine: la proviseure.",
 example:"A: Le proviseur a convoqué les parents d'élèves.\nB: Il veut parler du nouveau règlement intérieur.",
 exampleSrc:"A: The principal has called in the parents.\nB: He wants to discuss the new school regulations.",
 funFact:"From Latin provisor, meaning one who foresees. Each lycée has a proviseur, not a directeur."},

{type:"teach", trg:"la pondération", src:"moderation, balance", pos:"noun", gender:"f",
 note:"Feminine noun. Calm, measured judgment.\nAlso used in statistics (weighting).",
 example:"A: J'admire sa pondération dans les débats.\nB: Oui, il reste toujours calme et objectif.",
 exampleSrc:"A: I admire his moderation in debates.\nB: Yes, he always stays calm and objective.",
 funFact:"From Latin ponderare, to weigh. A pondéré person weighs their words before speaking."},

{type:"teach", trg:"la persévérance", src:"perseverance", pos:"noun", gender:"f",
 note:"Feminine noun. Steady persistence despite obstacles.\nA core value in French education.",
 example:"A: Comment as-tu réussi cet examen si difficile ?\nB: Grâce à la persévérance. J'ai étudié chaque jour pendant six mois.",
 exampleSrc:"A: How did you pass such a difficult exam?\nB: Through perseverance. I studied every day for six months.",
 funFact:"The French education system values persévérance highly. It appears in many school mottos."},

{type:"mc",
 q:"Quel mot désigne le processus de rendre quelque chose plus démocratique ?",
 opts:["la démocratisation","la justification","la pondération","l'affirmation"],
 ans:"la démocratisation",
 hint:"Think of the base word 'démocratie' plus the suffix -isation meaning a process"},

{type:"fb",
 s:"La {1} civile consiste à refuser d'obéir à une loi jugée injuste.",
 a:["désobéissance"], opts:["désobéissance","justification","affirmation","pondération"],
 hint:"This is the opposite of obeying. Think of the prefix dés- plus obéissance.",
 sSrc:"Civil {1} consists of refusing to obey a law deemed unjust."},

{type:"mc",
 q:"Qui est le responsable d'un lycée en France ?",
 opts:["le professeur","le proviseur","l'administrateur","le directeur"],
 ans:"le proviseur",
 hint:"This title is specific to French high schools and comes from Latin 'one who foresees'"},

{type:"match", pairs:[
  {trg:"la démocratisation", src:"democratization"},
  {trg:"l'affirmation", src:"assertion"},
  {trg:"la justification", src:"justification"},
  {trg:"la persévérance", src:"perseverance"},
  {trg:"la pondération", src:"moderation"}
]},

{type:"fb",
 s:"Il a présenté une {1} claire pour expliquer sa décision.",
 a:["justification"], opts:["justification","affirmation","pondération","persévérance"],
 hint:"This word means giving reasons or evidence to support a decision.",
 sSrc:"He presented a clear {1} to explain his decision."},

{type:"mc",
 q:"Quel mot décrit un jugement calme et mesuré ?",
 opts:["l'affirmation","la désobéissance","la pondération","la persévérance"],
 ans:"la pondération",
 hint:"From Latin ponderare, to weigh. Think of someone who carefully weighs their words."},

{type:"fb",
 s:"La {1} est la qualité de ceux qui n'abandonnent jamais malgré les difficultés.",
 a:["persévérance"], opts:["persévérance","pondération","démocratisation","justification"],
 hint:"Steady effort over time, continuing despite obstacles. A virtue praised in schools.",
 sSrc:"{1} is the quality of those who never give up despite difficulties."},

{type:"drag_fill",
 s:"L'{1} du lycée a fait une {2} forte en faveur de la réforme éducative.",
 blanks:{"1":"administrateur","2":"affirmation"},
 pool:["administrateur","affirmation","proviseur","pondération"],
 hint:"The person who manages plus a bold statement or claim"},

{type:"mc",
 q:"Quelle est la forme féminine de 'proviseur' ?",
 opts:["la proviseuse","la provisrice","la provisoire","la proviseure"],
 ans:"la proviseure",
 hint:"Modern French feminization simply adds -e to many professional titles"},

{type:"fb",
 s:"L'{1} gère l'organisation et la logistique du programme.",
 a:["administrateur"], opts:["administrateur","proviseur","persévérance","affirmation"],
 hint:"The person responsible for running an organization, from the verb administrer.",
 sSrc:"The {1} manages the organization and logistics of the program."}

]};
export default LESSON_1;
