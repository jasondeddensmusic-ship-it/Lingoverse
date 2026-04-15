// Unit 02 Expansion — Lesson 4: Months & Seasons
// Theme: Months of the year, seasons, dates, weather basics

const LESSON_4 = {
  id:"itv2_u2l4", title:"I mesi e le stagioni", icon:"\ud83c\udf3b", xp:15, board:true,
  steps:[
    {type:"intro", title:"I mesi e le stagioni",
     desc:"Learn the Italian months, seasons, and how to talk about dates and basic weather.",
     goals:["Name all twelve months","Name the four seasons","Say dates and talk about when things happen"]},

    {type:"teach", trg:"gennaio", src:"January", pos:"noun", gender:"m",
     note:"Masculine. Not capitalized in Italian.\nFrom Latin 'Januarius,' named after Janus, god of beginnings.",
     example:"A: Quando e il tuo compleanno?\nB: In gennaio.",
     exampleSrc:"A: When is your birthday?\nB: In January.",
     funFact:"Janus had two faces, one looking forward and one backward, symbolizing transitions. January looks back at the old year and forward to the new. All Italian months are masculine and not capitalized."},

    {type:"teach", trg:"febbraio", src:"February", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'Februarius,' a month of purification rituals.\nThe shortest month.",
     example:"A: Febbraio ha ventotto giorni.\nB: Ventinove negli anni bisestili!",
     exampleSrc:"A: February has twenty-eight days.\nB: Twenty-nine in leap years!",
     funFact:"From 'februare' (to purify). Romans held purification festivals in this month. 'Anno bisestile' (leap year) comes from the Latin practice of adding an extra day every four years."},

    {type:"teach", trg:"marzo", src:"March", pos:"noun", gender:"m",
     note:"Masculine. Named after Mars, the Roman god of war.\nThe original first month of the Roman calendar.",
     example:"A: In marzo arriva la primavera.\nB: Finalmente! Fa meno freddo.",
     exampleSrc:"A: In March spring arrives.\nB: Finally! It is less cold.",
     funFact:"March was originally the first month of the Roman calendar. The year began in spring with the military campaign season, named after Mars. September through December still show their original numbering."},

    {type:"teach", trg:"aprile", src:"April", pos:"noun", gender:"m",
     note:"Masculine. Possibly from Latin 'aperire' (to open), referring to flowers opening.",
     example:"A: Ad aprile piove molto.\nB: Si, 'aprile non ti scoprire!'",
     exampleSrc:"A: In April it rains a lot.\nB: Yes, 'in April don't uncover!'",
     funFact:"The Italian proverb 'aprile non ti scoprire' means 'in April, don't uncover yourself' (don't put away winter clothes yet). Italian has a weather proverb for nearly every month."},

    {type:"teach", trg:"la primavera", src:"the spring", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'prima vera' (first true season, first green).\n'In primavera' = in spring.",
     example:"A: Qual e la tua stagione preferita?\nB: La primavera! I fiori sono bellissimi.",
     exampleSrc:"A: What is your favorite season?\nB: Spring! The flowers are beautiful.",
     funFact:"'Prima vera' meant the first true or genuine time of year. Botticelli's famous painting 'La Primavera' shows the goddess of spring. Spring in Italy means wildflowers, mild weather, and Easter celebrations."},

    {type:"teach", trg:"l'estate", src:"the summer", pos:"noun", gender:"f",
     note:"Feminine. Uses l' before vowel. From Latin 'aestas' (heat).\n'In estate' or 'd'estate' = in summer.",
     example:"A: In estate fa molto caldo.\nB: Si, andiamo al mare!",
     exampleSrc:"A: In summer it is very hot.\nB: Yes, let's go to the sea!",
     funFact:"August in Italy is famous for 'Ferragosto' (August 15th), when nearly the entire country goes on vacation. Cities empty out and businesses close. The tradition dates back to Roman Emperor Augustus."},

    {type:"teach", trg:"l'autunno", src:"the autumn", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From Latin 'autumnus.'\n'In autunno' = in autumn.",
     example:"A: In autunno le foglie cambiano colore.\nB: E la stagione del vino nuovo!",
     exampleSrc:"A: In autumn the leaves change color.\nB: It is the season of new wine!",
     funFact:"Autumn in Italy means the grape harvest ('la vendemmia'), truffle season, and mushroom foraging. Many Italians spend autumn weekends in the countryside picking mushrooms, a national passion."},

    {type:"teach", trg:"l'inverno", src:"the winter", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From Latin 'hibernum' (wintry season).\n'In inverno' or 'd'inverno' = in winter.",
     example:"A: In inverno nevica in montagna.\nB: Perfetto per sciare!",
     exampleSrc:"A: In winter it snows in the mountains.\nB: Perfect for skiing!",
     funFact:"Latin 'hibernum' also gave English 'hibernate' (to sleep through winter). Italian winters vary enormously: mild on the coasts, snowy in the Alps and Apennines, foggy in the Po Valley."},

    {type:"teach", trg:"il mese", src:"the month", pos:"noun", gender:"m",
     note:"Masculine. Plural: i mesi. From Latin 'mensis.'\n'Questo mese' = this month. 'Il mese scorso' = last month.",
     example:"A: Quanti mesi ha un anno?\nB: Dodici mesi.",
     exampleSrc:"A: How many months does a year have?\nB: Twelve months.",
     funFact:"Latin 'mensis' (month) is related to 'mensura' (measure) and the moon. Months were originally measured by lunar cycles. English 'month' and 'moon' share the same Germanic root, paralleling the Latin connection."},

    {type:"teach", trg:"l'anno", src:"the year", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. Plural: gli anni.\n'Quest'anno' = this year. 'L'anno scorso' = last year.",
     example:"A: Quanti anni hai?\nB: Ho venticinque anni.",
     exampleSrc:"A: How old are you?\nB: I am twenty-five years old.",
     funFact:"'Quanti anni hai?' (how many years do you have?) is how Italians ask age. You HAVE years, not ARE years. This 'avere + anni' construction is common across Romance languages but alien to English speakers."},

    {type:"teach", trg:"la data", src:"the date", pos:"noun", gender:"f",
     note:"Feminine. Italian dates: day/month/year.\n'Che data e oggi?' = What is today's date?",
     example:"A: Che data e oggi?\nB: Oggi e il tre aprile.",
     exampleSrc:"A: What is today's date?\nB: Today is the third of April.",
     funFact:"Italian dates use cardinal numbers (il tre, il cinque) except for the first of the month: 'il primo' (the first). This matches French ('le premier') but differs from English which uses ordinals more widely."},

    {type:"teach", trg:"il compleanno", src:"the birthday", pos:"noun", gender:"m",
     note:"Masculine. Compound: compiere (to complete) + anno (year).\n'Buon compleanno!' = Happy birthday!",
     example:"A: Quando e il tuo compleanno?\nB: Il quindici luglio.",
     exampleSrc:"A: When is your birthday?\nB: The fifteenth of July.",
     funFact:"'Compleanno' literally means 'year completion,' celebrating having completed another year of life. In Italy, the birthday person often buys treats for friends and colleagues, the opposite of many other cultures."},

    // Quiz steps
    {type:"mc", q:"Which month is named after the Roman god of war?",
     opts:["Marzo","Gennaio","Aprile","Luglio"],
     ans:"Marzo",
     hint:"Mars was the god of war and originally gave his name to the first month of the Roman calendar."},

    {type:"fb", s:"In {1} arriva la primavera.",
     a:["marzo"],
     opts:["marzo","gennaio","luglio","dicembre"],
     hint:"Spring arrives at the end of this third month of the year, when the Roman calendar once began.",
     sSrc:"In {1} spring arrives."},

    {type:"match", pairs:[
      {trg:"la primavera", src:"spring"},
      {trg:"l'estate", src:"summer"},
      {trg:"l'autunno", src:"autumn"},
      {trg:"l'inverno", src:"winter"}
    ]},

    {type:"mc", q:"How do Italians ask 'how old are you?'",
     opts:["Quanti anni hai?","Quanto sei vecchio?","Che eta hai?","Come sei grande?"],
     ans:"Quanti anni hai?",
     hint:"Italians 'have' years, not 'are' years. The question literally asks 'how many years do you have?'"},

    {type:"fb", s:"Oggi e il {1} aprile.",
     a:["tre"],
     opts:["tre","terzo","prima","primo"],
     hint:"Italian dates use cardinal numbers (except the first). The third day of a month uses the plain number.",
     sSrc:"Today is the {1} of April."},

    {type:"mc", q:"Which season is feminine in Italian?",
     opts:["La primavera and l'estate","L'autunno and l'inverno","All of them","None of them"],
     ans:"La primavera and l'estate",
     hint:"Two seasons are feminine, two are masculine. Check the articles: 'la' signals feminine."},

    {type:"fb", s:"Quanti {1} ha un anno?",
     a:["mesi"],
     opts:["mesi","giorni","anni","ore"],
     hint:"You are asking about the twelve divisions of a year. The plural of 'mese.'",
     sSrc:"How many {1} does a year have?"},

    {type:"mc", q:"What is special about 'Ferragosto'?",
     opts:["August 15th national holiday","A spring festival","New Year's Eve","A season name"],
     ans:"August 15th national holiday",
     hint:"This mid-summer date empties Italian cities as nearly everyone goes on vacation. Named after a Roman emperor."},

    {type:"fb", s:"Buon {1}! Tanti auguri!",
     a:["compleanno"],
     opts:["compleanno","anno","giorno","mese"],
     hint:"This is a compound word meaning 'year completion.' It is what you celebrate once a year.",
     sSrc:"Happy {1}! Best wishes!"},

    {type:"mc", q:"Are Italian months capitalized?",
     opts:["No, they are lowercase","Yes, always","Only in formal writing","Only the first letter"],
     ans:"No, they are lowercase",
     hint:"Unlike English, Italian months and days of the week do not take a capital letter: gennaio, febbraio, marzo."}
  ]
};
export default LESSON_4;
