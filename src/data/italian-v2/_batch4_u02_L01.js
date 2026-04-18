// Batch 4 — Unit 02, Lesson 1: Ordinal Numbers & Dates
const BATCH4_U02_L1 = {
  id:"itv2_u02l_b4_1", title:"Primo, secondo, terzo", icon:"\uD83D\uDCC5", xp:15, board:true,
  steps:[
    {type:"intro", title:"Primo, secondo, terzo",
     desc:"Learn ordinal numbers, months, and how to express dates in Italian for everyday situations.",
     goals:["Use ordinal numbers from first to tenth","Name all twelve months","Express dates and birthdays"]},

    {type:"teach", trg:"primo", src:"first", pos:"adj", gender:"m",
     note:"Masculine. Feminine: prima. Irregular ordinal.\nAlso means 'first course' at a restaurant.",
     example:"A: Qual e il primo mese dell'anno?\nB: Gennaio e il primo mese.",
     exampleSrc:"A: What is the first month of the year?\nB: January is the first month.",
     funFact:"'Primo' also means the first course of an Italian meal (pasta or risotto). 'Il primo piatto' is distinct from 'il secondo' (meat/fish). This dual meaning shows how food structures Italian life."},

    {type:"teach", trg:"secondo", src:"second", pos:"adj", gender:"m",
     note:"Masculine. Feminine: seconda.\nAlso means the main course at a restaurant.",
     example:"A: Abiti al secondo piano?\nB: No, al terzo.",
     exampleSrc:"A: Do you live on the second floor?\nB: No, on the third.",
     funFact:"In Italian buildings, the ground floor is 'piano terra' (ground level). The 'primo piano' is what Americans call the second floor. This causes confusion for English speakers visiting Italian hotels."},

    {type:"teach", trg:"terzo", src:"third", pos:"adj", gender:"m",
     note:"Masculine. Feminine: terza.\nFrom Latin 'tertius.'",
     example:"A: E la terza volta che chiamo!\nB: Mi dispiace per l'attesa.",
     exampleSrc:"A: It is the third time I am calling!\nB: I am sorry for the wait.",
     funFact:"'Terzo mondo' (third world) and 'la terza eta' (the third age, meaning old age) are common expressions. The pattern for ordinals after 'decimo' (tenth) adds -esimo to the cardinal number."},

    {type:"teach", trg:"gennaio", src:"January", pos:"noun", gender:"m",
     note:"Masculine. Not capitalized in Italian (unlike English).\nFrom Janus, the two-faced Roman god.",
     example:"A: Quando e il tuo compleanno?\nB: Il 15 gennaio.",
     exampleSrc:"A: When is your birthday?\nB: January 15th.",
     funFact:"Named after Janus (Giano), the Roman god with two faces looking at past and future. Perfect for the month that bridges the old year and the new. Italian months are never capitalized, unlike in English."},

    {type:"teach", trg:"febbraio", src:"February", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'februarius' (month of purification).\nThe shortest month.",
     example:"A: Febbraio e corto.\nB: Si, ha solo 28 giorni!",
     exampleSrc:"A: February is short.\nB: Yes, it only has 28 days!",
     funFact:"Named after 'Februa,' the Roman purification festival. Carnevale (Carnival) often falls in February. Venice's famous Carnevale with its masks is one of the world's most spectacular festivals."},

    {type:"teach", trg:"marzo", src:"March", pos:"noun", gender:"m",
     note:"Masculine. From Mars, the Roman god of war.\nThe original first month of the Roman calendar.",
     example:"A: In marzo cominciano i fiori.\nB: Si, arriva la primavera!",
     exampleSrc:"A: In March the flowers begin.\nB: Yes, spring arrives!",
     funFact:"March was the first month of the ancient Roman calendar (hence September = 7th, October = 8th, etc.). Named after Mars because it marked the start of the military campaign season."},

    {type:"teach", trg:"aprile", src:"April", pos:"noun", gender:"m",
     note:"Masculine. Possibly from Latin 'aperire' (to open, as flowers open).\nThe month of 'pesce d'aprile' (April Fish).",
     example:"A: Aprile e bellissimo in Italia.\nB: Si, tutto fiorisce!",
     exampleSrc:"A: April is beautiful in Italy.\nB: Yes, everything blooms!",
     funFact:"Italy's April Fools' Day is called 'pesce d'aprile' (April Fish). People tape paper fish to each other's backs. The origins are debated but may relate to the zodiac sign Pisces ending in April."},

    {type:"teach", trg:"maggio", src:"May", pos:"noun", gender:"m",
     note:"Masculine. From Maia, the Roman goddess of growth.\nA popular month for weddings.",
     example:"A: In maggio ci sono molti matrimoni.\nB: Si, e il mese dell'amore.",
     exampleSrc:"A: In May there are many weddings.\nB: Yes, it is the month of love.",
     funFact:"Italian superstition says May weddings bring bad luck ('maggio ortolano, molto fieno e poco grano'). Despite this, May remains a popular wedding month because of the beautiful weather."},

    {type:"teach", trg:"giugno", src:"June", pos:"noun", gender:"m",
     note:"Masculine. From Juno, the Roman goddess of marriage.\nSchool ends in June.",
     example:"A: La scuola finisce a giugno.\nB: Evviva! Vacanze!",
     exampleSrc:"A: School ends in June.\nB: Hooray! Holidays!",
     funFact:"Named after Juno (Giunone), wife of Jupiter and goddess of marriage. Italian summer officially begins. The 'festa della Repubblica' (Republic Day) is June 2nd, Italy's national holiday."},

    {type:"teach", trg:"luglio", src:"July", pos:"noun", gender:"m",
     note:"Masculine. Named after Julius Caesar.\nThe hottest month in Italy.",
     example:"A: Fa molto caldo a luglio.\nB: Si, sopra i 35 gradi!",
     exampleSrc:"A: It is very hot in July.\nB: Yes, above 35 degrees!",
     funFact:"Named after Julius Caesar (Giulio Cesare). Before him, this month was called 'Quintilis' (the fifth month). Italian summers are intense: cities empty as everyone heads to the coast or mountains."},

    {type:"teach", trg:"agosto", src:"August", pos:"noun", gender:"m",
     note:"Masculine. Named after Emperor Augustus.\nThe month of 'Ferragosto' (August 15).",
     example:"A: Ad agosto l'Italia si ferma.\nB: Si, tutti vanno in vacanza.",
     exampleSrc:"A: In August Italy stops.\nB: Yes, everyone goes on vacation.",
     funFact:"Ferragosto (August 15) is Italy's biggest summer holiday. The whole country shuts down. From Latin 'Feriae Augusti' (holidays of Augustus). Shops, offices, and even some hospitals operate with skeleton crews."},

    {type:"teach", trg:"settembre", src:"September", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'septem' (seven).\nOriginally the seventh month of the Roman calendar.",
     example:"A: A settembre si torna a scuola.\nB: E a lavorare!",
     exampleSrc:"A: In September we go back to school.\nB: And back to work!",
     funFact:"September comes from Latin 'septem' (seven), a reminder that the Roman calendar originally started in March. 'La vendemmia' (grape harvest) happens in September, a crucial event in Italy's wine culture."},

    {type:"teach", trg:"dicembre", src:"December", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'decem' (ten).\nChristmas and New Year celebrations.",
     example:"A: Dicembre e il mese del Natale.\nB: Si, e delle vacanze!",
     exampleSrc:"A: December is the month of Christmas.\nB: Yes, and of holidays!",
     funFact:"Italian Christmas traditions vary by region. In the south, the Feast of the Seven Fishes (Vigilia) on December 24th is sacred. In the north, families eat cappelletti in brodo (stuffed pasta in broth)."},

    {type:"teach", trg:"la data", src:"the date", pos:"noun", gender:"f",
     note:"Feminine. Dates use cardinal numbers (not ordinals) except for the first.\n'Oggi e il 3 marzo' (Today is March 3rd).",
     example:"A: Qual e la data di oggi?\nB: Oggi e il 20 ottobre.",
     exampleSrc:"A: What is today's date?\nB: Today is October 20th.",
     funFact:"Italian dates use the format day/month/year (20/10/2024), opposite to American English. Only the first of the month uses the ordinal: 'il primo gennaio' (the first of January). All other days use cardinals."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'first' in italiano?",
     opts:["Primo","Secondo","Terzo","Uno"],
     ans:"Primo",
     hint:"This word also refers to the first course (pasta) at an Italian meal."},

    {type:"fb", s:"Il mio compleanno e il 5 {1}.",
     a:["marzo"], opts:["marzo","primo","data","terzo"],
     hint:"Pick a month name. This is the third month of the year.",
     sSrc:"My birthday is March 5th."},

    {type:"match", pairs:[
      {trg:"gennaio", src:"January"},
      {trg:"giugno", src:"June"},
      {trg:"agosto", src:"August"},
      {trg:"dicembre", src:"December"},
      {trg:"aprile", src:"April"}
    ]},

    {type:"mc", q:"Quale mese prende il nome da Giulio Cesare?",
     opts:["Luglio","Agosto","Giugno","Marzo"],
     ans:"Luglio",
     hint:"Julius Caesar's first name 'Julius' becomes 'Giulio' in Italian."},

    {type:"fb", s:"Abito al {1} piano, non al secondo.",
     a:["terzo"], opts:["terzo","primo","tre","due"],
     hint:"The speaker lives one floor above the second floor.",
     sSrc:"I live on the {1} floor, not the second."},

    {type:"mc", q:"Come si scrive la data in italiano?",
     opts:["Giorno/mese/anno","Mese/giorno/anno","Anno/mese/giorno","Mese/anno/giorno"],
     ans:"Giorno/mese/anno",
     hint:"Italian format puts the day first, opposite to American English."},

    {type:"fb", s:"L'Italia si ferma quasi completamente a meta {1}.",
     a:["agosto"], opts:["agosto","luglio","settembre","giugno"],
     hint:"Italy's biggest summer holiday falls in the eighth month of the year.",
     sSrc:"Italy almost completely shuts down in mid-{1}."},

    {type:"mc", q:"Perche settembre si chiama cosi?",
     opts:["Was the 7th month in the Roman calendar","Has seven letters","Was dedicated to a senator","Means harvest month"],
     ans:"Was the 7th month in the Roman calendar",
     hint:"The prefix 'sette' in Italian means seven, from Latin 'septem.'"}
  ,{type:"match",pairs:[{trg:"febbraio",src:"February"},{trg:"maggio",src:"May"},{trg:"settembre",src:"September"},{trg:"la data",src:"the date"}]}]
};
export default BATCH4_U02_L1;
