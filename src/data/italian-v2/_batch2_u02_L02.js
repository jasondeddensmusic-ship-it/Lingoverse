// Unit 02 Batch 2 — Lesson 2: More Months, Dates & Calendar Talk
const BATCH2_U02_L2 = {
  id:"itv2_u02l_b2_2", title:"Il calendario", icon:"\ud83d\uddd3\ufe0f", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il calendario",
     desc:"Learn the remaining months and how to talk about dates, holidays, and calendar events in Italian.",
     goals:["Name all twelve months","Give and understand dates","Talk about Italian holidays and events"]},

    {type:"teach", trg:"maggio", src:"May", pos:"noun", gender:"m",
     note:"Masculine. Named after Maia, Roman goddess of growth.\nNot capitalized in Italian.",
     example:"A: In maggio ci sono molti ponti.\nB: Si, e un bel mese per viaggiare!",
     exampleSrc:"A: In May there are many long weekends.\nB: Yes, it is a nice month to travel!",
     funFact:"A 'ponte' (bridge) in Italian means a long weekend created when a holiday falls near a weekend. Italians 'fare ponte' (make a bridge) by taking an extra day off to connect the holiday to the weekend."},

    {type:"teach", trg:"giugno", src:"June", pos:"noun", gender:"m",
     note:"Masculine. Named after Juno, Roman goddess of marriage.\nSchool ends in mid-June in Italy.",
     example:"A: A giugno finisce la scuola.\nB: Finalmente le vacanze!",
     exampleSrc:"A: In June school ends.\nB: Finally, vacation!",
     funFact:"June is named after Juno, protector of marriage. That is why June weddings are considered lucky. Italian school ends around June 10-15, and summer vacation lasts until mid-September."},

    {type:"teach", trg:"luglio", src:"July", pos:"noun", gender:"m",
     note:"Masculine. Named after Julius Caesar.\nPeak summer and vacation month.",
     example:"A: In luglio fa molto caldo.\nB: Si, andiamo al mare!",
     exampleSrc:"A: In July it is very hot.\nB: Yes, let's go to the sea!",
     funFact:"Named after Julius Caesar, who reformed the Roman calendar in 46 BC. Before that, this month was called 'Quintilis' (fifth month). July and August are the peak beach months in Italy."},

    {type:"teach", trg:"agosto", src:"August", pos:"noun", gender:"m",
     note:"Masculine. Named after Emperor Augustus.\nThe month when Italy practically shuts down.",
     example:"A: In agosto l'ufficiò è chiuso.\nB: Come tutta l'Italia!",
     exampleSrc:"A: In August the office is closed.\nB: Like all of Italy!",
     funFact:"August is when Italy goes on vacation. Cities empty, shops close, and everyone heads to the coast or mountains. Ferragosto (August 15th) is the peak. Working in August is considered unusual."},

    {type:"teach", trg:"settembre", src:"September", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'septem' (seven), the original 7th month.\nSchool restarts in September.",
     example:"A: A settembre ricomincia la scuola.\nB: Le vacanze sono finite!",
     exampleSrc:"A: In September school starts again.\nB: Vacation is over!",
     funFact:"September was the 7th month in the original Roman calendar before January and February were added. The number-name mismatch (septem = 7, but September = month 9) has persisted for over 2,000 years."},

    {type:"teach", trg:"ottobre", src:"October", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'octo' (eight), the original 8th month.\nAutumn harvest season.",
     example:"A: In ottobre le foglie diventano rosse.\nB: E bellissimo!",
     exampleSrc:"A: In October the leaves turn red.\nB: It is beautiful!",
     funFact:"October in Italy means grape harvest ('vendemmia') and truffle season. The Alba truffle festival in Piedmont draws food lovers from around the world. White truffles can cost thousands of euros per kilo."},

    {type:"teach", trg:"novembre", src:"November", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'novem' (nine), the original 9th month.\nOgnissanti (All Saints' Day) is November 1st.",
     example:"A: In novembre fa freddo.\nB: Si, l'inverno e vicino.",
     exampleSrc:"A: In November it is cold.\nB: Yes, winter is near.",
     funFact:"November 1st (Ognissanti) and 2nd (Day of the Dead) are important Italian holidays. Families visit cemeteries to honor deceased relatives with flowers and candles. Many businesses close."},

    {type:"teach", trg:"dicembre", src:"December", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'decem' (ten), the original 10th month.\nChristmas season: Natale on December 25th.",
     example:"A: A dicembre c'e Natale!\nB: E il mio mese preferito!",
     exampleSrc:"A: In December there is Christmas!\nB: It is my favorite month!",
     funFact:"Italian Christmas traditions include the presepe (nativity scene), panettone (sweet bread from Milan), and the Feast of the Seven Fishes on Christmas Eve. Gifts come from both Santa and La Befana (January 6th)."},

    {type:"teach", trg:"Natale", src:"Christmas", pos:"noun", gender:"m",
     note:"Masculine. Always capitalized. From Latin 'natalis' (of birth).\n'Buon Natale!' = Merry Christmas!",
     example:"A: Buon Natale!\nB: Buon Natale e felice anno nuovo!",
     exampleSrc:"A: Merry Christmas!\nB: Merry Christmas and happy new year!",
     funFact:"From Latin 'dies natalis' (birthday), referring to the birth of Christ. Italian Christmas dinner traditionally features multiple courses and lasts for hours. 'A Natale con i tuoi, a Pasqua con chi vuoi' (Christmas with family, Easter with whoever you want)."},

    {type:"teach", trg:"Pasqua", src:"Easter", pos:"noun", gender:"f",
     note:"Feminine. Always capitalized. From Hebrew 'Pesach' (Passover).\n'Buona Pasqua!' = Happy Easter!",
     example:"A: Buona Pasqua!\nB: Buona Pasqua! Hai comprato l'uovo di cioccolato?",
     exampleSrc:"A: Happy Easter!\nB: Happy Easter! Did you buy the chocolate egg?",
     funFact:"Italian Easter eggs (uova di Pasqua) are large, hollow chocolate eggs with a surprise toy inside. They are sold everywhere for weeks before Easter. The Monday after Easter (Pasquetta) is a national holiday for picnics."},

    {type:"teach", trg:"la festa", src:"the holiday / party / celebration", pos:"noun", gender:"f",
     note:"Feminine. Means both public holiday and private party.\n'Giorno festivo' = holiday (day off).",
     example:"A: Domani e festa!\nB: Si, i negozi sono chiusi.",
     exampleSrc:"A: Tomorrow is a holiday!\nB: Yes, the shops are closed.",
     funFact:"Italy has about 12 national holidays per year. When a holiday falls on a Tuesday or Thursday, Italians often 'fare ponte' (make a bridge) by taking the Monday or Friday off too. Productivity drops but happiness rises."},

    {type:"teach", trg:"l'anno nuovo", src:"the new year", pos:"noun", gender:"m",
     note:"Masculine. 'Capodanno' is New Year's Day.\n'Buon anno!' or 'Felice anno nuovo!' = Happy New Year!",
     example:"A: Felice anno nuovo!\nB: Buon anno! Che sia un anno bellissimo!",
     exampleSrc:"A: Happy new year!\nB: Happy new year! May it be a wonderful year!",
     funFact:"Italian New Year's traditions include eating lentils at midnight (they look like coins, symbolizing wealth) and wearing red underwear for good luck. In Naples, people used to throw old furniture out of windows."},

    {type:"teach", trg:"la settimana", src:"the week", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'septimana' (period of seven days).\n'La settimana prossima' = next week.",
     example:"A: Ci vediamo la settimana prossima?\nB: Si, lunedì o martedì.",
     exampleSrc:"A: Shall we meet next week?\nB: Yes, Monday or Tuesday.",
     funFact:"'Settimana' contains 'sette' (seven), making its origin transparent. 'Fine settimana' (weekend) literally means 'end of the week.' Italian weeks officially start on Monday, not Sunday."},

    {type:"teach", trg:"scorso", src:"last / past (time)", pos:"adj", gender:"m",
     note:"Masculine: scorso. Feminine: scorsa.\nUsed with time: 'la settimana scorsa' = last week.",
     example:"A: L'anno scorso sono stato in Italia.\nB: Ti e piaciuto?",
     exampleSrc:"A: Last year I was in Italy.\nB: Did you like it?",
     funFact:"'Scorso' comes from 'scorrere' (to flow past). Time that has 'flowed by' is 'scorso.' The opposite is 'prossimo' (next, coming), from Latin 'proximus' (nearest)."},

    {type:"teach", trg:"prossimo", src:"next / coming", pos:"adj", gender:"m",
     note:"Masculine: prossimo. Feminine: prossima.\nUsed with time: 'il mese prossimo' = next month.",
     example:"A: Il mese prossimo vado in vacanza.\nB: Dove vai?",
     exampleSrc:"A: Next month I am going on vacation.\nB: Where are you going?",
     funFact:"From Latin 'proximus' (nearest). English 'proximity' shares this root. In Italian, 'il prossimo' as a noun means 'the neighbor' or 'fellow human being,' a concept central to Catholic social teaching."},

    // Quiz steps
    {type:"mc", q:"Quale mese prende il nome da Giulio Cesare?",
     opts:["Luglio","Agosto","Giugno","Maggio"],
     ans:"Luglio",
     hint:"This Roman dictator reformed the calendar. The month that honors him is the seventh month."},

    {type:"fb", s:"A {1} l'ufficiò è chiuso. Come tutta l'Italia!",
     a:["agosto"],
     opts:["agosto","gennaio","marzo","ottobre"],
     hint:"This is the month when Italy practically shuts down for vacation. Named after Emperor Augustus.",
     sSrc:"In {1} the office is closed. Like all of Italy!"},

    {type:"mc", q:"What is a 'ponte' in Italian work culture?",
     opts:["A long weekend by bridging a holiday to the weekend","A bridge for cars","A type of pasta","An office meeting"],
     ans:"A long weekend by bridging a holiday to the weekend",
     hint:"When a h... falls on a Tuesday or Thursday, Italians take the gap day off to create a longer break."},

    {type:"fb", s:"Buon {1}! Felice anno nuovo!",
     a:["Natale"],
     opts:["Natale","Pasqua","anno","giorno"],
     hint:"This is the Italian word for Christmas. From Latin 'natalis' (of birth).",
     sSrc:"Merry {1}! Happy new year!"},

    {type:"match", pairs:[
      {trg:"maggio", src:"May"},
      {trg:"agosto", src:"August"},
      {trg:"ottobre", src:"October"},
      {trg:"dicembre", src:"December"},
      {trg:"Natale", src:"Christmas"}
    ]},

    {type:"mc", q:"What do Italians eat at midnight on New Year's Eve for good luck?",
     opts:["Lentils","Pasta","Grapes","Bread"],
     ans:"Lentils",
     hint:"These small legumes resemble coins and symbolize wealth in the coming year. A tradition throughout Italy."},

    {type:"fb", s:"L'anno {1} sono stato in Italia.",
     a:["scorso"],
     opts:["scorso","prossimo","primo","nuovo"],
     hint:"This adjective describes time that has already flowed past. The opposite of 'prossimo.'",
     sSrc:"{1} year I was in Italy."},

    {type:"mc", q:"Which month marks the end of Italian school?",
     opts:["Giugno","Luglio","Agosto","Settembre"],
     ans:"Giugno",
     hint:"Named after Juno, goddess of marriage. Italian students finish around mid-month and start summer break."}
  ,{type:"match",pairs:[{trg:"novembre",src:"November"},{trg:"Pasqua",src:"Easter"},{trg:"la festa",src:"the holiday / party / celebration"},{trg:"la settimana",src:"the week"},{trg:"prossimo",src:"next / coming"}]},{type:"mc",q:"How do you say \"new year\" in Italian?",opts:["la finestra","il tavolo","l'anno nuovo","la bicicletta"],ans:"l'anno nuovo",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U02_L2;
