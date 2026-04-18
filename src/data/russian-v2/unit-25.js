// Russian V2 Unit 25 — Society and Values (B2.1)
const UNIT_25 = {n:25, lang:"ru", srcLang:"en", track:"v2", title:"Общество и ценности", sub:"Society and Values",
 icon:"⚖️", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u25l1", title:"Social Values", icon:"⚖️", xp:15, board:true, steps:[

{type:"intro", title:"Society and Values",
 desc:"B2 vocabulary for discussing social issues, rights, responsibilities. Russia has rich intellectual tradition on these topics.",
 goals:["Discuss social values","Use abstract nouns","Express opinions on society"]},

{type:"teach", trg:"общество", src:"society", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nRelated: общий (common), общение (communication).",
 example:"A: Современное общество.\nB: Быстро меняется.",
 exampleSrc:"A: Modern society.\nB: Changes quickly.",
 funFact:"Общество from общий (common/shared). Russian concept of society emphasizes collective over individual, historically."},

{type:"teach", trg:"равенство", src:"equality", pos:"noun", gender:"n",
 note:"Neuter. Abstract concept.\nFrom равный (equal).",
 example:"A: Равенство важно.\nB: Согласна.",
 exampleSrc:"A: Equality is important.\nB: I agree.",
 funFact:"Abstract nouns ending in -ство are usually neuter: общество, равенство, государство, мужество (courage). A productive Russian suffix pattern."},

{type:"teach", trg:"свобода", src:"freedom", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nCentral concept in Russian thought.",
 example:"A: Свобода слова важна.\nB: Абсолютно.",
 exampleSrc:"A: Freedom of speech is important.\nB: Absolutely.",
 funFact:"Свобода has weighty political associations in Russia. Soviet dissidents struggled for it. Today the word retains weight beyond everyday English 'freedom.'"},

{type:"teach", trg:"справедливость", src:"justice / fairness", pos:"noun", gender:"f",
 note:"Feminine. -ость suffix for abstract concepts.\nFrom справедливый (fair).",
 example:"A: Социальная справедливость.\nB: Сложная тема.",
 exampleSrc:"A: Social justice.\nB: A complex topic.",
 funFact:"Russian -ость suffix creates abstract feminine nouns: справедливость, свобода, честность (honesty), доброта (kindness). Native Russian abstractions."},

{type:"teach", trg:"право", src:"right / law", pos:"noun", gender:"n",
 note:"Neuter. TWO meanings: legal right AND direction (right vs left).\nКонтекст clarifies.",
 example:"A: У каждого есть право на образование.\nB: Конечно.",
 exampleSrc:"A: Everyone has the right to education.\nB: Of course.",
 funFact:"Право means 'right' (political), 'right' (direction), AND 'law.' All three meanings in Russian. 'Право на жизнь' (right to life), 'направо' (to the right), 'изучать право' (study law)."},

{type:"teach", trg:"ответственность", src:"responsibility", pos:"noun", gender:"f",
 note:"Feminine. -ость ending.\nОт + ответ (response) = respond + -ness.",
 example:"A: Брать на себя ответственность.\nB: Это важно.",
 exampleSrc:"A: To take on responsibility.\nB: That's important.",
 funFact:"Ответственность literally 'response-ness' — from ответ (answer). Taking responsibility = 'брать на себя' (taking onto oneself). Elegant compound."},

{type:"teach", trg:"проблема", src:"problem / issue", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\nCommon in daily and political discourse.",
 example:"A: Это серьёзная проблема.\nB: Нужно решить.",
 exampleSrc:"A: This is a serious problem.\nB: Need to solve.",
 funFact:"Проблема is the universal word for any issue. Russians use it for small daily problems and big political ones. 'Это не проблема' (no problem) is common."},

{type:"tip", title:"Abstract Nouns in Russian",
 text:"ABSTRACT NOUN SUFFIXES:\n\n-ство (NEUTER): общество, равенство, большинство.\n-ость (FEMININE): справедливость, ответственность, свобода.\n-ние (NEUTER): образование, мнение, решение.\n-ие (NEUTER): условие, участие.\n\nB2 LEVEL INCLUDES ABSTRACT CONCEPTS:\n• Political: права, свобода, власть (power).\n• Social: общество, семья, воспитание.\n• Personal: характер, привычка (habit), мечта (dream).\n• Ethical: честность, доброта, справедливость.\n\nABSTRACT NOUNS TAKE CASES LIKE CONCRETE NOUNS.\n'Я думаю об общественности.' (I think about society.)\n'Нет справедливости.' (There's no justice.)\n\nMASTER THE SUFFIXES.\nRecognizing -ость, -ство, -ние helps you predict meaning and gender for new vocabulary.",
 icon:"⚖️"},

{type:"mc", q:"Nouns ending in -ство are usually which gender?",
 opts:["Masculine","Feminine","Neuter","Common"],
 ans:"Neuter",
 hint:"-ство ends in -о, a ___ ending. Общество, равенство, государство."},

{type:"mc", q:"'Ответственность' is formed from:",
 opts:["ответ + -ственность","ответ + -ность","отвечать + -ность","-свобода"],
 ans:"ответ + -ственность",
 hint:"Based on 'ответ' (answer/response). Abstract -ственность suffix creates responsibility."},

{type:"fb", s:"Современное {1} сталкивается с многими проблемами.",
 a:["общество"],
 opts:["общество","свобода","справедливость","проблема"],
 hint:"What 'faces many problems' — the aggregate of people.",
 sSrc:"Modern society faces many problems."},

{type:"match", pairs:[
  {trg:"общество", src:"society"},
  {trg:"свобода", src:"freedom"},
  {trg:"справедливость", src:"justice"},
  {trg:"право", src:"right/law"},
  {trg:"ответственность", src:"responsibility"}
]}
,{type:"match",pairs:[{trg:"равенство",src:"equality"},{trg:"проблема",src:"problem / issue"}]}]}

]};
export default UNIT_25;
