// Russian V2 Unit 26 — Science and Technology (B2.1)
const UNIT_26 = {n:26, lang:"ru", srcLang:"en", track:"v2", title:"Наука и технология", sub:"Science and Technology",
 icon:"🔬", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u26l1", title:"Science", icon:"🔬", xp:15, board:true, steps:[

{type:"intro", title:"Scientific Vocabulary",
 desc:"Russian has rich scientific vocabulary, often from Latin and Greek. Russia's tradition of science (Lomonosov, Mendeleev, Pavlov, Korolev) gives unique identity.",
 goals:["Name science disciplines","Use technical vocabulary","Describe experiments"]},

{type:"teach", trg:"наука", src:"science", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: науки (the sciences).",
 example:"A: Какая наука тебя интересует?\nB: Физика.",
 exampleSrc:"A: Which science interests you?\nB: Physics.",
 funFact:"Наука covers all sciences broadly. Russian distinguishes точные науки (exact sciences) from гуманитарные науки (humanities)."},

{type:"teach", trg:"исследование", src:"research / study", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nGen sg: исследования.",
 example:"A: Это большое исследование?\nB: Да, это исследование.",
 exampleSrc:"A: Is this a major research project?\nB: Yes, this is research.",
 funFact:"Исследование has both general 'study/research' meaning AND specific 'research paper/project.' Russian scientific vocabulary distinguishes исследование (research) from опыт (experiment, tangible)."},

{type:"teach", trg:"эксперимент", src:"experiment", pos:"noun", gender:"m",
 note:"Masculine. International word.\nSometimes: опыт (less formal).",
 example:"A: Провели эксперимент?\nB: Да, результаты хорошие.",
 exampleSrc:"A: Did you conduct the experiment?\nB: Yes, the results are good.",
 funFact:"Russian has opыт for 'experience' AND 'experiment' in informal use. Эксперимент is more formal/scientific. Both translate to 'experiment' in English."},

{type:"teach", trg:"результат", src:"result", pos:"noun", gender:"m",
 note:"Masculine. International root.\nPlural: результаты.",
 example:"A: Какие результаты?\nB: Хорошие.",
 exampleSrc:"A: What results?\nB: Good.",
 funFact:"Результат + genitive: результат эксперимента (result of the experiment). Common with scientific terms. Результат also used for sports scores."},

{type:"teach", trg:"открытие", src:"discovery", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nFrom открыть (to open/discover).",
 example:"A: Это открытие важное?\nB: Да, очень важное.",
 exampleSrc:"A: Is this discovery important?\nB: Yes, very important.",
 funFact:"Mendeleev's periodic table (периодическая таблица) is THE iconic Russian scientific discovery. Открытие includes accidental discoveries and deliberate research findings."},

{type:"teach", trg:"теория", src:"theory", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\n'Теория относительности' = theory of relativity.",
 example:"A: Это только теория?\nB: Да, пока не доказано.",
 exampleSrc:"A: Is this just theory?\nB: Yes, not yet proven.",
 funFact:"Теория vs практика (theory vs practice) is a classic Russian intellectual pairing. Soviet era emphasized 'единство теории и практики' (unity of theory and practice)."},

{type:"teach", trg:"технология", src:"technology", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\nGen pl: технологий.",
 example:"A: Современная технология.\nB: Развивается быстро.",
 exampleSrc:"A: Modern technology.\nB: Develops quickly.",
 funFact:"Технология covers both 'technology' (broad) and 'production process/technique.' Russian engineers/scientists often ponder технологии (technologies) specifically."},

{type:"teach", trg:"компьютер", src:"computer", pos:"noun", gender:"m",
 note:"Masculine. English loanword.\nGen sg: компьютера.",
 example:"A: Новый компьютер?\nB: Да, только купил.",
 exampleSrc:"A: New computer?\nB: Yes, just bought.",
 funFact:"Soviet computing developed BESM and Elbrus systems. Modern Russia has mixed tech culture — English loanwords dominate in IT: компьютер, интернет, сайт, пароль."},

{type:"tip", title:"Russian Science Vocabulary",
 text:"SCIENCE FIELDS:\n• физика (physics)\n• химия (chemistry)\n• биология (biology)\n• математика (mathematics)\n• психология (psychology)\n• медицина (medicine)\n\nTECHNICAL TERMS:\n• опыт (experience/experiment)\n• гипотеза (hypothesis)\n• данные (data)\n• метод (method)\n• анализ (analysis)\n• вывод (conclusion)\n\nTECHNOLOGY:\n• техника (technology/equipment)\n• инновация (innovation)\n• программа (program)\n• интернет (internet)\n• данные (data)\n\nRUSSIAN SCIENTIFIC GENIUSES:\n• Ломоносов (18th c. polymath)\n• Менделеев (periodic table)\n• Павлов (classical conditioning)\n• Королев (space program)\n• Капица (physics)\n\nRussian scientific culture remains strong — major STEM pipeline.",
 icon:"🔬"},

{type:"mc", q:"Which is a feminine noun?",
 opts:["эксперимент","результат","теория","открытие"],
 ans:"теория",
 hint:"Ends in -ия, a feminine ending."},

{type:"fb", s:"Учёные сделали важное {1}.",
 a:["открытие"],
 opts:["открытие","эксперимент","результат","теорию"],
 hint:"'Сделать открытие' = to make a discovery. What did scientists make?",
 sSrc:"Scientists made an important discovery."},

{type:"match", pairs:[
  {trg:"наука", src:"science"},
  {trg:"исследование", src:"research"},
  {trg:"эксперимент", src:"experiment"},
  {trg:"открытие", src:"discovery"},
  {trg:"теория", src:"theory"}
]}
,{type:"match",pairs:[{trg:"технология",src:"technology"},{trg:"компьютер",src:"computer"}]}]}

]};
export default UNIT_26;
