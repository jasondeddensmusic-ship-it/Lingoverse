// Unit 02 Batch 2. Lesson 1: Higher Numbers & Ordinals
const BATCH2_U02_L1 = {
  id:"itv2_u02l_b2_1", title:"I numeri grandi", icon:"\ud83d\udcaf", xp:15, board:true,
  steps:[
    {type:"intro", title:"I numeri grandi",
     desc:"Learn numbers beyond 20, ordinal numbers, and how Italians use numbers in everyday life.",
     goals:["Count in tens from 30 to 100","Use ordinal numbers (first, second, third)","Apply numbers to real situations"]},

    {type:"teach", trg:"trenta", src:"thirty", pos:"num", gender:null,
     note:"Drops final -a before uno and otto: trentuno, trentotto.\nSame elision rule as venti.",
     example:"A: Quanti anni hai?\nB: Ho trenta anni.",
     exampleSrc:"A: How old are you?\nB: I am thirty years old.",
     funFact:"The elision rule repeats for every ten: trenta, quaranta, cinquanta all drop their final vowel before uno and otto. Italian loves smooth sound flow."},

    {type:"teach", trg:"quaranta", src:"forty", pos:"num", gender:null,
     note:"From Latin 'quadraginta.' Related to 'quattro' (four).\nQuarantuno (41), quarantadue (42)...",
     example:"A: Il libro costa quaranta euro.\nB: E troppo caro!",
     exampleSrc:"A: The book costs forty euros.\nB: That is too expensive!",
     funFact:"English 'quarantine' comes from the Italian 'quarantina' (about forty), because ships suspected of plague had to wait 40 days before docking in Venice. Health and numbers intertwined."},

    {type:"teach", trg:"cinquanta", src:"fifty", pos:"num", gender:null,
     note:"From Latin 'quinquaginta.' Related to 'cinque' (five).\nCinquantuno, cinquantadue...",
     example:"A: Mio nonno ha cinquanta anni.\nB: Sembra molto giovane!",
     exampleSrc:"A: My grandfather is fifty years old.\nB: He looks very young!",
     funFact:"The 1950s decade is called 'gli anni Cinquanta' in Italian. Italian decades follow this pattern: gli anni Venti (1920s), gli anni Trenta (1930s). Always capitalized when referring to a decade."},

    {type:"teach", trg:"sessanta", src:"sixty", pos:"num", gender:null,
     note:"From Latin 'sexaginta.' Related to 'sei' (six).\nSessantuno, sessantadue...",
     example:"A: La lezione dura sessanta minuti.\nB: Un'ora intera!",
     exampleSrc:"A: The lesson lasts sixty minutes.\nB: A full hour!",
     funFact:"The Italian 1960s ('gli anni Sessanta') were a golden era of economic growth called 'il miracolo economico.' Italy transformed from an agricultural to an industrial nation in one decade."},

    {type:"teach", trg:"settanta", src:"seventy", pos:"num", gender:null,
     note:"From Latin 'septuaginta.' Related to 'sette' (seven).\nSettantuno, settantadue...",
     example:"A: La nonna ha settanta anni.\nB: E ancora molto attiva!",
     exampleSrc:"A: Grandmother is seventy years old.\nB: She is still very active!",
     funFact:"Italian retirement age has been rising. Many Italians work well into their settanta. The expression 'essere in gamba' (to be on the ball) is often used to praise active elderly people."},

    {type:"teach", trg:"ottanta", src:"eighty", pos:"num", gender:null,
     note:"From Latin 'octoginta.' Related to 'otto' (eight).\nOttantuno, ottantadue...",
     example:"A: Il bisnonno ha ottanta anni.\nB: Che bella età!",
     exampleSrc:"A: The great-grandfather is eighty years old.\nB: What a wonderful age!",
     funFact:"In Italian tombola (bingo), each number has a traditional meaning from the Neapolitan 'Smorfia' dream book. 90 is 'la paura' (fear), 1 is 'l'Italia.' These associations date back centuries."},

    {type:"teach", trg:"novanta", src:"ninety", pos:"num", gender:null,
     note:"From Latin 'nonaginta.' Related to 'nove' (nine).\nNovantuno, novantadue...",
     example:"A: Mia bisnonna ha novanta anni!\nB: Incredibile! Complimenti!",
     exampleSrc:"A: My great-grandmother is ninety years old!\nB: Incredible! Congratulations!",
     funFact:"Life expectancy in Italy is among the highest in the world. Sardinia has one of the highest concentrations of centenarians (people over 100). The Mediterranean diet gets much of the credit."},

    {type:"teach", trg:"primo", src:"first", pos:"adj", gender:"m",
     note:"Masculine: primo. Feminine: prima.\nAlso means 'first course' at a restaurant.",
     example:"A: E il primo giorno di scuola.\nB: Sei nervoso?",
     exampleSrc:"A: It is the first day of school.\nB: Are you nervous?",
     funFact:"'Primo' is the only date that uses an ordinal number in Italian: 'il primo gennaio' (January 1st). All other dates use cardinal numbers: 'il due gennaio' (January 2nd), 'il tre gennaio' (January 3rd)."},

    {type:"teach", trg:"secondo", src:"second", pos:"adj", gender:"m",
     note:"Masculine: secondo. Feminine: seconda.\nAlso means 'second course' and 'according to.'",
     example:"A: Abito al secondo piano.\nB: C'e l'ascensore?",
     exampleSrc:"A: I live on the second floor.\nB: Is there an elevator?",
     funFact:"'Secondo' has three meanings: the ordinal number, the meat course at a restaurant, and 'according to' ('secondo me' = according to me). Context makes the meaning clear."},

    {type:"teach", trg:"terzo", src:"third", pos:"adj", gender:"m",
     note:"Masculine: terzo. Feminine: terza.\nFrom Latin 'tertius.'",
     example:"A: E la terza volta che chiamo.\nB: Mi scusi per l'attesa!",
     exampleSrc:"A: It is the third time I am calling.\nB: I apologize for the wait!",
     funFact:"From Latin 'tertius.' English 'tertiary' shares this root. Italian ordinals from quarto (4th) onward are formed regularly, but primo, secondo, terzo must be memorized individually."},

    {type:"teach", trg:"ultimo", src:"last / final", pos:"adj", gender:"m",
     note:"Masculine: ultimo. Feminine: ultima.\nFrom Latin 'ultimus' (farthest, final).",
     example:"A: Questa e l'ultima lezione.\nB: Che peccato! Mi piaceva molto.",
     exampleSrc:"A: This is the last lesson.\nB: What a pity! I liked it a lot.",
     funFact:"'Ultimo' can mean chronologically last ('l'ultimo giorno') or positionally last ('l'ultimo della fila' = last in line). 'L'ultima parola' (the last word) means having the final say, just like in English."},

    {type:"teach", trg:"il numero", src:"the number", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'numerus.'\n'Qual e il tuo numero?' = What is your number?",
     example:"A: Qual e il tuo numero di telefono?\nB: E il 333 445 6789.",
     exampleSrc:"A: What is your phone number?\nB: It is 333 445 6789.",
     funFact:"Italian phone numbers are read digit by digit: 'tre tre tre, quattro quattro cinque, sei sette otto nove.' Mobile numbers in Italy start with 3. Landlines start with 0. Everyone knows this pattern."},

    {type:"teach", trg:"mezzo", src:"half", pos:"adj", gender:"m",
     note:"Masculine: mezzo. Feminine: mezza.\n'Mezz'ora' = half an hour. 'Mezzo chilo' = half a kilo.",
     example:"A: Quanto tempo ci vuole?\nB: Mezz'ora, più o meno.",
     exampleSrc:"A: How long does it take?\nB: Half an hour, more or less.",
     funFact:"'Mezzo' contracts before 'ora': mezz'ora (not mezzo ora). This contraction is standard. The word 'mezzogiorno' (noon) and 'mezzanotte' (midnight) both use 'mezzo' for the midpoint."},

    {type:"teach", trg:"doppio", src:"double", pos:"adj", gender:"m",
     note:"Masculine: doppio. Feminine: doppia.\nFrom Latin 'duplus.' 'Un caffè doppio' = a double espresso.",
     example:"A: Un caffè doppio, per favore.\nB: Subito!",
     exampleSrc:"A: A double espresso, please.\nB: Right away!",
     funFact:"'Doppio' is essential at Italian bars: 'caffè doppio' (double espresso) is for those who need extra energy. The Latin root 'duplus' also gave English 'double' and 'duplicate.'"},

    // Quiz steps
    {type:"mc", q:"Come si dice '40' in italiano?",
     opts:["Quaranta","Cinquanta","Trenta","Sessanta"],
     ans:"Quaranta",
     hint:"This number gave English the word 'quarantine.' Ships waited this many days before entering Venice."},

    {type:"fb", s:"E il {1} giorno di scuola.",
     a:["primo"],
     opts:["primo","secondo","terzo","ultimo"],
     hint:"This is the ordinal for 'first.' Also the word for the pasta course in a restaurant.",
     sSrc:"It is the {1} day of school."},

    {type:"mc", q:"Which ordinal number is used for dates in Italian?",
     opts:["Only 'ultimo' for the last day","Only 'primo' for the 1st","All ordinals for all dates","None of them"],
     ans:"Only 'primo' for the 1st",
     hint:"January 1st uses an ordinal, but all other dates use cardinals: il due, il tre, il quattro..."},

    {type:"fb", s:"Mio nonno ha {1} anni.",
     a:["settanta"],
     opts:["settanta","trenta","novanta","quaranta"],
     hint:"This is the number 70. Related to 'sette' (seven), from Latin 'septuaginta.'",
     sSrc:"My grandfather is {1} years old."},

    {type:"match", pairs:[
      {trg:"trenta", src:"thirty"},
      {trg:"cinquanta", src:"fifty"},
      {trg:"settanta", src:"seventy"},
      {trg:"novanta", src:"ninety"},
      {trg:"primo", src:"first"}
    ]},

    {type:"mc", q:"Come si dice 'half an hour' in italiano?",
     opts:["Mezza ora","Meta ora","Mezz'ora","Mezzo ora"],
     ans:"Mezz'ora",
     hint:"The word for 'half' contracts before 'o....' The apostrophe marks the dropped vowel."},

    {type:"fb", s:"Un caffè {1}, per favore.",
     a:["doppio"],
     opts:["doppio","primo","mezzo","ultimo"],
     hint:"You want twice the standard amount. This adjective means 'double,' from Latin 'duplus.'",
     sSrc:"A {1} espresso, please."},

    {type:"mc", q:"What does 'secondo me' mean?",
     opts:["My second","I am second","Second time","According to me"],
     ans:"According to me",
     hint:"The ordinal 'secondo' has a third meaning beyond numbers and restaurant courses. It introduces an opinion."}
  ,{type:"match",pairs:[{trg:"ottanta",src:"eighty"},{trg:"secondo",src:"second"},{trg:"terzo",src:"third"},{trg:"il numero",src:"the number"},{trg:"mezzo",src:"half"}]}]
};
export default BATCH2_U02_L1;
