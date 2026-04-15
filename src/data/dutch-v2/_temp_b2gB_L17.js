// Dutch B2 gapB Lesson 17 — Recht en Bestuur
// Law, justice, and governance vocabulary

const LESSON_17 = {id:"nlv2_b2gB_l17", title:"Recht en Bestuur", icon:"\u{2696}", xp:25, board:true, steps:[
{type:"intro", title:"Recht en Bestuur",
 desc:"Understanding Dutch governance and legal vocabulary is essential at B2 level. From local politics to national institutions, learn the words that shape Dutch democracy.",
 goals:["8 governance and law nouns","Discuss Dutch political and legal systems","Navigate institutional vocabulary"]},

{type:"teach", trg:"het korps", src:"corps / force / body", pos:"noun", gender:"n",
 note:"A organized body of people.\n'Het politiekorps' = police force.\n'Het korps diplomatique' = diplomatic corps.",
 example:"A: Het politiekorps heeft meer agenten nodig.\nB: Ja, er is een groot tekort.\nA: Hoeveel vacatures zijn er?\nB: Meer dan tweeduizend.",
 exampleSrc:"A: The police force needs more officers.\nB: Yes, there is a major shortage.\nA: How many vacancies are there?\nB: More than two thousand.",
 funFact:"Since 2013, the Netherlands has a single national police force instead of 25 regional ones, making it one of the largest reorganizations in Dutch history."},

{type:"teach", trg:"de aangeklaagde", src:"the accused / defendant", pos:"noun", gender:"c",
 note:"From 'aanklagen' (to accuse/prosecute).\n'De aanklager' = the prosecutor.",
 example:"A: De aangeklaagde ontkent alles.\nB: Heeft hij een advocaat?\nA: Ja, een van de beste.\nB: Dan wordt het een interessante zaak.",
 exampleSrc:"A: The accused denies everything.\nB: Does he have a lawyer?\nA: Yes, one of the best.\nB: Then it'll be an interesting case.",
 funFact:"In Dutch law, everyone is 'onschuldig tot het tegendeel bewezen is' (innocent until proven guilty), as in most European legal systems."},

{type:"teach", trg:"het dadergedrag", src:"perpetrator behavior / offender conduct", pos:"noun", gender:"n",
 note:"Dader (perpetrator) + gedrag (behavior).\nUsed in criminology and psychology.",
 example:"A: De politie analyseert het dadergedrag.\nB: Wat hopen ze te vinden?\nA: Patronen die naar de dader leiden.\nB: Profilering is een belangrijk hulpmiddel.",
 exampleSrc:"A: The police are analyzing the perpetrator's behavior.\nB: What do they hope to find?\nA: Patterns that lead to the perpetrator.\nB: Profiling is an important tool.",
 funFact:"The Netherlands has a specialized forensic psychiatric hospital (Pieter Baan Centrum) that evaluates criminal behavior for courts."},

{type:"teach", trg:"de aanhang", src:"following / supporters / entourage", pos:"noun", gender:"c",
 note:"From 'aanhangen' (to follow/support).\n'De aanhanger' = the supporter/follower.",
 example:"A: De politicus heeft veel aanhang.\nB: Vooral onder jongeren.\nA: Zijn boodschap spreekt aan.\nB: Maar kritiek is er ook.",
 exampleSrc:"A: The politician has a large following.\nB: Especially among young people.\nA: His message resonates.\nB: But there's criticism too.",
 funFact:"Dutch political parties are numerous: the Tweede Kamer typically has 15-20 parties, more than almost any other parliament in the world."},

{type:"teach", trg:"het aandachtspunt", src:"point of attention / issue to address", pos:"noun", gender:"n",
 note:"Aandacht (attention) + punt (point).\nCommon in meetings and reports.",
 example:"A: Dit is een belangrijk aandachtspunt.\nB: Zullen we het op de agenda zetten?\nA: Ja, het verdient meer aandacht.\nB: Ik maak er een notitie van.",
 exampleSrc:"A: This is an important point of attention.\nB: Shall we put it on the agenda?\nA: Yes, it deserves more attention.\nB: I'll make a note of it.",
 funFact:"'Aandachtspunt' is one of the most common words in Dutch bureaucratic language. Every report, every meeting has its 'aandachtspunten'."},

{type:"teach", trg:"de inschakeling", src:"involvement / engagement / activation", pos:"noun", gender:"c",
 note:"From 'inschakelen' (to involve, to switch on).\n'De hulpdiensten inschakelen' = to call emergency services.",
 example:"A: De inschakeling van experts was nodig.\nB: Konden ze het probleem oplossen?\nA: Ja, dankzij hun kennis.\nB: Soms heb je specialisten nodig.",
 exampleSrc:"A: The involvement of experts was necessary.\nB: Could they solve the problem?\nA: Yes, thanks to their knowledge.\nB: Sometimes you need specialists.",
 funFact:"'Inschakelen' literally means 'to switch on/engage', like engaging a gear. The metaphorical use for involving people is very Dutch."},

{type:"teach", trg:"het examenrooster", src:"exam schedule / timetable", pos:"noun", gender:"n",
 note:"Examen + rooster (schedule/grid).\n'Het rooster' = schedule/timetable (also: grill/grid).",
 example:"A: Heb je het examenrooster al gezien?\nB: Ja, drie examens in een week.\nA: Dat wordt zwaar.\nB: Ik begin maar vast met studeren.",
 exampleSrc:"A: Have you seen the exam schedule yet?\nB: Yes, three exams in one week.\nA: That'll be tough.\nB: I'd better start studying.",
 funFact:"Dutch 'rooster' means both a schedule/timetable AND a physical grid/grill. Context tells you which one."},

{type:"teach", trg:"de keuzeonderdeel", src:"elective / optional component", pos:"noun", gender:"n",
 note:"Het keuzeonderdeel. Keuze (choice) + onderdeel (component).\nAn optional part of a curriculum.",
 example:"A: Welk keuzeonderdeel heb je gekozen?\nB: Filosofie. En jij?\nA: Economie, dat leek me nuttig.\nB: Allebei interessante keuzes.",
 exampleSrc:"A: Which elective did you choose?\nB: Philosophy. And you?\nA: Economics, that seemed useful.\nB: Both interesting choices.",
 funFact:"Dutch universities offer many 'keuzevakken' (electives), reflecting the Dutch value of individual choice in education."},

{type:"mc", q:"'De aangeklaagde' is:",
 opts:["The judge","The lawyer","The accused person","The witness"],
 ans:"The accused person",
 hint:"From 'aanklagen' (to accuse). The p... being a... in court."},

{type:"fb", s:"Het {1} heeft meer agenten nodig.",
 a:["politiekorps"], opts:["politiekorps","dadergedrag","aandachtspunt","examenrooster"],
 hint:"The organized body of police officers",
 sSrc:"The {1} needs more officers."},

{type:"mc", q:"'Het aandachtspunt' is heel gewoon in:",
 opts:["Sports commentary","Bureaucratic reports and meetings","Children's books","Cooking recipes"],
 ans:"Bureaucratic reports and meetings",
 hint:"The go-to word in Dutch office culture for something that needs attention"},

{type:"fb", s:"De {1} van experts was nodig om het probleem op te lossen.",
 a:["inschakeling"], opts:["inschakeling","aanhang","aangeklaagde","keuzeonderdeel"],
 hint:"The act of involving or engaging specialists",
 sSrc:"The {1} of experts was necessary to solve the problem."},

{type:"match", pairs:[
 {trg:"het korps", src:"corps / force"},
 {trg:"de aangeklaagde", src:"the accused"},
 {trg:"het dadergedrag", src:"perpetrator behavior"},
 {trg:"de aanhang", src:"following / supporters"}
]},

{type:"mc", q:"'Het rooster' kan twee dingen betekenen:",
 opts:["A schedule and a physical grid","A chicken and a clock","A student and a teacher","A book and a pen"],
 ans:"A schedule and a physical grid",
 hint:"Both a timetable and a metal grating, depending on context"},

{type:"fb", s:"Welk {1} heb je gekozen voor dit semester?",
 a:["keuzeonderdeel"], opts:["keuzeonderdeel","examenrooster","aandachtspunt","korps"],
 hint:"An optional, elective component of your study program",
 sSrc:"Which {1} did you choose for this semester?"},

{type:"match", pairs:[
 {trg:"het aandachtspunt", src:"point of attention"},
 {trg:"de inschakeling", src:"involvement"},
 {trg:"het examenrooster", src:"exam schedule"},
 {trg:"het keuzeonderdeel", src:"elective"}
]}
]};
export default LESSON_17;
