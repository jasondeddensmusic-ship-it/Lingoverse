// Russian V2 Unit 31 — History (B2.2)
const UNIT_31 = {n:31, lang:"ru", srcLang:"en", track:"v2", title:"История", sub:"Russian History",
 icon:"🏛️", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u31l1", title:"Historical Vocabulary", icon:"🏛️", xp:15, board:true, steps:[

{type:"intro", title:"Russian History Vocabulary",
 desc:"Russia has a thousand-year history. Understanding historical vocabulary enriches all conversations with Russians — history is deeply part of identity.",
 goals:["Discuss historical eras","Name major events","Use temporal expressions"]},

{type:"teach", trg:"история", src:"history / story", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\nTwo meanings: history AND story.",
 example:"A: Ты любишь историю?\nB: Особенно XX век.",
 exampleSrc:"A: Do you love history?\nB: Especially 20th century.",
 funFact:"История covers both 'history' (academic) and 'story' (narrative). 'Интересная история' can mean 'interesting story' in casual speech."},

{type:"teach", trg:"век", src:"century", pos:"noun", gender:"m",
 note:"Masculine. Short word.\nXXII век = 22nd century (roman numerals used).",
 example:"A: В каком веке?\nB: В двадцатом.",
 exampleSrc:"A: In which century?\nB: In the 20th.",
 funFact:"Russian uses Roman numerals for centuries: XX век (20th century). Russians learn Roman numerals in school specifically for this. Hybrid Latin-Cyrillic historical notation."},

{type:"teach", trg:"революция", src:"revolution", pos:"noun", gender:"f",
 note:"Feminine. Latin loanword.\nОктябрьская революция = October Revolution.",
 example:"A: Октябрьская революция 1917 года.\nB: Переломный момент.",
 exampleSrc:"A: October Revolution of 1917.\nB: Turning point.",
 funFact:"1917 Revolution is THE defining event of 20th century Russia. Changed everything. Still debated: Great October Socialist Revolution vs Coup. Complex legacy."},

{type:"teach", trg:"война", src:"war", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nВеликая Отечественная война = Great Patriotic War (WWII).",
 example:"A: Вторая мировая война.\nB: У нас — Великая Отечественная.",
 exampleSrc:"A: World War II.\nB: For us — Great Patriotic War.",
 funFact:"Russian term for WWII (on Eastern Front) is 'Великая Отечественная война' (Great Patriotic War, 1941-45). Central to national memory. 27 million Soviet deaths."},

{type:"teach", trg:"мир", src:"peace / world", pos:"noun", gender:"m",
 note:"Masculine. TWO meanings.\nWar AND Peace — Толстой's title uses both.",
 example:"A: Война и мир.\nB: Великая книга.",
 exampleSrc:"A: War and Peace.\nB: A great book.",
 funFact:"Мир's dual meaning 'peace/world' is iconic. Tolstoy's 'Война и мир' plays on both: war vs peace AND war vs rest of the world. Deeply Russian concept."},

{type:"teach", trg:"император", src:"emperor", pos:"noun", gender:"m",
 note:"Masculine. Latin root.\nПётр I, Екатерина II — famous Russian rulers.",
 example:"A: Кто был великим императором?\nB: Пётр Первый.",
 exampleSrc:"A: Who was a great emperor?\nB: Peter the First.",
 funFact:"Russian rulers: князь (prince), царь (tsar), император (emperor). Peter I adopted император in 1721. Previously царь (from Caesar). Hierarchical evolution."},

{type:"teach", trg:"правительство", src:"government", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ство.\nFrom править (to rule).",
 example:"A: Правительство приняло решение.\nB: Понятно.",
 exampleSrc:"A: The government made a decision.\nB: Understood.",
 funFact:"Правительство (government, executive branch) vs Государство (the state, broader). Russia distinguishes: правительство is cabinet-level, государство is the entire polity."},

{type:"teach", trg:"СССР", src:"USSR", pos:"noun", gender:"m",
 note:"Abbreviation for Союз Советских Социалистических Республик.\n1922-1991.",
 example:"A: Ты родился в СССР?\nB: Да, в 1985 году.",
 exampleSrc:"A: Were you born in the USSR?\nB: Yes, in 1985.",
 funFact:"СССР is an iconic acronym. Still evokes strong feelings: nostalgia, trauma, pride, regret. 'Ностальгия по СССР' is actual phrase among many older Russians."},

{type:"tip", title:"Russian Historical Periods",
 text:"KEY ERAS:\n\nКИЕВСКАЯ РУСЬ (Kievan Rus', 9-13th c.):\nEarly East Slavic state, Christianization.\n\nМОНГОЛО-ТАТАРСКОЕ ИГО (Mongol-Tatar Yoke, 13-15th c.):\n240 years under Mongol rule.\n\nЦАРСКАЯ РОССИЯ (Tsarist Russia, 16-early 20th c.):\nIvan the Terrible, Peter the Great, Catherine the Great.\n\nИМПЕРИЯ (Russian Empire, 1721-1917):\nStarted under Peter I, ended with Revolution.\n\nСССР (Soviet Union, 1922-1991):\nLenin, Stalin, Khrushchev, Gorbachev eras.\n\nСОВРЕМЕННАЯ РОССИЯ (Modern Russia, 1991-):\nYeltsin, Putin. Major transitions.\n\nKEY DATES:\n• 988 — Christianization of Rus.\n• 1812 — War with Napoleon.\n• 1861 — Abolition of serfdom.\n• 1917 — Revolution.\n• 1941-45 — Great Patriotic War.\n• 1991 — Collapse of USSR.",
 icon:"🏛️"},

{type:"mc", q:"Who was the first Russian император (emperor)?",
 opts:["Иван Грозный","Пётр I","Екатерина II","Николай II"],
 ans:"Пётр I",
 hint:"Peter the Great adopted 'emperor' title in 1721, replacing 'tsar.'"},

{type:"fb", s:"Великая Отечественная {1} закончилась в 1945 году.",
 a:["война"],
 opts:["война","мир","революция","история"],
 hint:"WWII in Russian perspective — what ended in 1945?",
 sSrc:"The Great Patriotic War ended in 1945."},

{type:"match", pairs:[
  {trg:"история", src:"history/story"},
  {trg:"век", src:"century"},
  {trg:"революция", src:"revolution"},
  {trg:"император", src:"emperor"},
  {trg:"СССР", src:"USSR"}
]}
,

{type:"match", pairs:[
  {trg:"правительство", src:"government"}
]},

{type:"match", pairs:[
  {trg:"мир", src:"peace / world"}
]}]}

]};
export default UNIT_31;
