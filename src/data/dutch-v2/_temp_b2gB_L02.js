// Dutch B2 gapB Lesson 02 — Jeugd en Opvoeding
// Youth, education, and upbringing vocabulary

const LESSON_2 = {id:"nlv2_b2gB_l2", title:"Jeugd en Opvoeding", icon:"\u{1F9D2}", xp:25, board:true, steps:[
{type:"intro", title:"Jeugd en Opvoeding",
 desc:"Youth services, education systems, and child welfare play a major role in Dutch society. Learn the vocabulary for discussing young people, schools, and growing up.",
 goals:["8 youth and education nouns","Discuss child welfare and schooling","Understand Dutch youth services vocabulary"]},

{type:"teach", trg:"de jeugdbrigade", src:"youth brigade", pos:"noun", gender:"c",
 note:"Jeugd (youth) + brigade.\nA team focused on youth issues, often in policing.",
 example:"A: De jeugdbrigade is actief in deze wijk.\nB: Wat doen ze precies?\nA: Ze werken met jongeren die in de problemen zitten.\nB: Dat klinkt als belangrijk werk.",
 exampleSrc:"A: The youth brigade is active in this neighbourhood.\nB: What do they do exactly?\nA: They work with young people in trouble.\nB: That sounds like important work.",
 funFact:"The Netherlands has specialized youth police units that focus on prevention and mentoring rather than punishment."},

{type:"teach", trg:"de jeugdclub", src:"youth club", pos:"noun", gender:"c",
 note:"Jeugd + club. A social gathering place for young people.\n'Het jeugdhuis' = youth center (Belgian Dutch).",
 example:"A: Ga je nog naar de jeugdclub?\nB: Ja, elke vrijdagavond.\nA: Wat doen jullie daar?\nB: Spelletjes, muziek, gewoon gezellig samen.",
 exampleSrc:"A: Do you still go to the youth club?\nB: Yes, every Friday evening.\nA: What do you do there?\nB: Games, music, just hanging out together.",
 funFact:"Dutch youth clubs often receive municipal funding and serve as community anchors in neighborhoods."},

{type:"teach", trg:"de jeugdrechtbank", src:"juvenile court", pos:"noun", gender:"c",
 note:"Jeugd + rechtbank (court).\nHandles cases involving minors under 18.",
 example:"A: De zaak komt voor de jeugdrechtbank.\nB: Hoe oud is de verdachte?\nA: Pas zestien. Heel jong nog.\nB: Het jeugdrecht is anders dan volwassenenrecht.",
 exampleSrc:"A: The case goes to juvenile court.\nB: How old is the suspect?\nA: Only sixteen. Still very young.\nB: Juvenile law is different from adult law.",
 funFact:"Dutch juvenile law focuses on rehabilitation over punishment. Sentences for minors are typically half those for adults."},

{type:"teach", trg:"de kinderrechter", src:"juvenile judge", pos:"noun", gender:"c",
 note:"Kinder (children) + rechter (judge).\nSpecializes in family and youth cases.",
 example:"A: De kinderrechter neemt de beslissing.\nB: Wanneer is de zitting?\nA: Volgende week dinsdag.\nB: Ik hoop dat het goed afloopt.",
 exampleSrc:"A: The juvenile judge will make the decision.\nB: When is the hearing?\nA: Next Tuesday.\nB: I hope it turns out well.",
 funFact:"Dutch juvenile judges can order compulsory childcare measures, placing children under supervision of youth protection services."},

{type:"teach", trg:"de kleuterschool", src:"kindergarten / preschool", pos:"noun", gender:"c",
 note:"Kleuter (toddler) + school.\nFor ages 4-6. Now part of 'de basisschool'.",
 example:"A: Mijn dochter gaat naar de kleuterschool.\nB: Leuk! Hoe vindt ze het?\nA: Ze is dol op de juf.\nB: Dat is het belangrijkste op die leeftijd.",
 exampleSrc:"A: My daughter goes to kindergarten.\nB: Nice! How does she like it?\nA: She adores the teacher.\nB: That's the most important thing at that age.",
 funFact:"Since 1985, Dutch kindergarten merged with primary school into 'basisschool', but people still say 'kleuterschool' informally."},

{type:"teach", trg:"de kindermishandeling", src:"child abuse", pos:"noun", gender:"c",
 note:"Kinder + mishandeling (abuse/maltreatment).\nA serious social issue with dedicated reporting systems.",
 example:"A: Kindermishandeling moet altijd gemeld worden.\nB: Bij welke instantie?\nA: Bij Veilig Thuis, het meldpunt.\nB: Iedereen heeft die plicht.",
 exampleSrc:"A: Child abuse must always be reported.\nB: To which organization?\nA: To Veilig Thuis, the reporting center.\nB: Everyone has that duty.",
 funFact:"The Netherlands has a mandatory reporting code for professionals who suspect child abuse, called the 'meldcode'."},

{type:"teach", trg:"de jongedame", src:"young lady", pos:"noun", gender:"c",
 note:"Jonge (young) + dame (lady).\nSlightly old-fashioned but still used affectionately.",
 example:"A: Wie is die jongedame daar?\nB: Dat is de nieuwe stagiaire.\nA: Ze lijkt heel bekwaam.\nB: Ja, ze studeert rechten in Utrecht.",
 exampleSrc:"A: Who is that young lady over there?\nB: That's the new intern.\nA: She seems very capable.\nB: Yes, she studies law in Utrecht.",
 funFact:"While 'jongedame' sounds charming, modern Dutch prefers gender-neutral terms in professional contexts."},

{type:"teach", trg:"het jeugdkamp", src:"youth camp", pos:"noun", gender:"n",
 note:"Jeugd + kamp (camp).\n'Op kamp gaan' = to go to camp.",
 example:"A: Gaat je zoon mee op jeugdkamp?\nB: Ja, twee weken in de Ardennen.\nA: Spannend! Voor het eerst?\nB: Nee, hij ging vorig jaar ook al.",
 exampleSrc:"A: Is your son going to youth camp?\nB: Yes, two weeks in the Ardennes.\nA: Exciting! For the first time?\nB: No, he went last year too.",
 funFact:"Dutch scouting and church youth camps in the Belgian Ardennes are a rite of passage for many Dutch children."},

{type:"mc", q:"'De kinderrechter' is:",
 opts:["A teacher of children","A juvenile judge","A children's doctor","A youth worker"],
 ans:"A juvenile judge",
 hint:"Rechter means j.... This one specializes in cases involving minors."},

{type:"fb", s:"De zaak komt voor de {1}.",
 a:["jeugdrechtbank"], opts:["jeugdrechtbank","jeugdclub","kleuterschool","jongedame"],
 hint:"The court that handles cases involving minors",
 sSrc:"The case goes to the {1}."},

{type:"mc", q:"Waar gaan kleuters naar school?",
 opts:["De jeugdrechtbank","De kleuterschool","Het jeugdkamp","De jeugdbrigade"],
 ans:"De kleuterschool",
 hint:"Kleuter = toddler. Where do toddlers learn?"},

{type:"fb", s:"{1} moet altijd gemeld worden bij Veilig Thuis.",
 a:["Kindermishandeling"], opts:["Kindermishandeling","Jeugdkamp","Kleuterschool","Jongedame"],
 hint:"The serious crime against children that must be reported",
 sSrc:"{1} must always be reported to Veilig Thuis."},

{type:"match", pairs:[
 {trg:"de jeugdbrigade", src:"youth brigade"},
 {trg:"de jeugdclub", src:"youth club"},
 {trg:"de jeugdrechtbank", src:"juvenile court"},
 {trg:"de kinderrechter", src:"juvenile judge"}
]},

{type:"mc", q:"'Op kamp gaan' betekent:",
 opts:["To go camping alone","To go to youth camp","To set up a military camp","To go on holiday"],
 ans:"To go to youth camp",
 hint:"A summer activity for children, organized by scouts or churches"},

{type:"fb", s:"Mijn dochter gaat naar de {1} in het dorp.",
 a:["jeugdclub"], opts:["jeugdclub","jeugdrechtbank","jeugdbrigade","kinderrechter"],
 hint:"A social gathering place where young people meet for fun",
 sSrc:"My daughter goes to the {1} in the village."},

{type:"match", pairs:[
 {trg:"de kleuterschool", src:"kindergarten"},
 {trg:"de kindermishandeling", src:"child abuse"},
 {trg:"de jongedame", src:"young lady"},
 {trg:"het jeugdkamp", src:"youth camp"}
]}
]};
export default LESSON_2;
