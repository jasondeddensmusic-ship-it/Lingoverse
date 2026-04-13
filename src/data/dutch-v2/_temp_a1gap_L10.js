// L10: Numbers and Time — 20 A1 gap words
const LESSON_10 = {
  id:"nlv2_a1gap_l10", title:"Tijd en Getallen", icon:"\u{1F552}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Numbers and Time",
     desc:"Learn to tell time in Dutch. The Dutch system uses 'half' before the next hour and 'kwart' for quarters.",
     goals:["Master 20 time-related words","Tell time the Dutch way","Understand half and kwart expressions"]},

    {type:"teach", trg:"de datum", src:"the date", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: datums.",
     example:"A: Wat is de datum vandaag?\nB: Het is 15 maart.",
     exampleSrc:"A: What is the date today?\nB: It is March 15th.",
     funFact:"From Latin 'datum'. Dutch dates use day-month-year order (15-03-2026)."},

    {type:"teach", trg:"de maand", src:"the month", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: maanden.",
     example:"A: Welke maand is het?\nB: Het is april.",
     exampleSrc:"A: Which month is it?\nB: It is April.",
     funFact:"Cognate with English 'month' and German 'Monat'. All from 'moon'."},

    {type:"teach", trg:"de minuut", src:"the minute", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: minuten.",
     example:"A: Hoeveel minuten duurt het?\nB: Ongeveer tien minuten.",
     exampleSrc:"A: How many minutes does it take?\nB: About ten minutes.",
     funFact:"From Latin 'minuta'. Same word across European languages."},

    {type:"teach", trg:"het horloge", src:"the watch / wristwatch", pos:"noun", gender:"n",
     note:"Neuter noun (het). From French 'horloge'.",
     example:"A: Mooi horloge!\nB: Dank je, het was een cadeau.",
     exampleSrc:"A: Nice watch!\nB: Thanks, it was a gift.",
     funFact:"From French 'horloge' (clock). In Dutch it specifically means wristwatch."},

    {type:"teach", trg:"de keer", src:"the time (occurrence)", pos:"noun", gender:"c",
     note:"Common gender (de). Counting occurrences: een keer, twee keer.",
     example:"A: Hoe vaak ga je sporten?\nB: Drie keer per week.",
     exampleSrc:"A: How often do you exercise?\nB: Three times per week.",
     funFact:"'Een keer' = once, 'twee keer' = twice. Different from 'tijd' (time on clock)."},

    {type:"mc",
     q:"Hoe vaak? Twee ___ per week.",
     opts:["keer","uur","datum","maand"],
     ans:"keer",
     hint:"Which word means 'times' when counting occurrences or frequency?"},

    {type:"tip", title:"Telling Time in Dutch",
     text:"Dutch tells time differently from English:\n\n'Half' refers to BEFORE the next hour, not after the current one.\nHalf vijf = 4:30 (half before five)\nHalf negen = 8:30 (half before nine)\n\n'Kwart over' = quarter past.\nKwart over vijf = 5:15\n\n'Kwart voor' = quarter to.\nKwart voor vijf = 4:45"},

    {type:"teach", trg:"acht uur", src:"eight o'clock", pos:"noun", gender:"n",
     note:"Time expression. 'Uur' (hour) is a het-word.",
     example:"A: Hoe laat is het?\nB: Het is acht uur.",
     exampleSrc:"A: What time is it?\nB: It is eight o'clock.",
     funFact:"Dutch says 'Hoe laat is het?' (How late is it?) instead of 'What time is it?'."},

    {type:"teach", trg:"drie uur", src:"three o'clock", pos:"noun", gender:"n",
     note:"Time expression. Dutch uses 12-hour clock in speech.",
     example:"A: De afspraak is om drie uur.\nB: Oké, ik ben er!",
     exampleSrc:"A: The appointment is at three o'clock.\nB: Okay, I'll be there!",
     funFact:"In conversation, Dutch uses 12-hour time. Written schedules use 24-hour."},

    {type:"teach", trg:"half negen", src:"half past eight (8:30)", pos:"noun", gender:null,
     note:"WARNING: half BEFORE nine = 8:30, not 9:30!",
     example:"A: Hoe laat begint de les?\nB: Om half negen.",
     exampleSrc:"A: What time does the lesson start?\nB: At half past eight.",
     funFact:"This trips up every learner! 'Half negen' = 8:30. Half to nine, not half past nine."},

    {type:"teach", trg:"half vijf", src:"half past four (4:30)", pos:"noun", gender:null,
     note:"Half before five = 4:30. The Dutch time system.",
     example:"A: Om half vijf ga ik naar huis.\nB: Dat is vroeg!",
     exampleSrc:"A: At half past four I'm going home.\nB: That's early!",
     funFact:"Think of it as 'halfway to five'. Halfway there = 4:30."},

    {type:"fb",
     s:"Het is {1}. Dat betekent 8:30.",
     a:["half negen"],
     opts:["half negen","half acht","negen uur","acht uur"],
     hint:"In Dutch, 'half' refers to the NEXT hour. Which expression equals 8:30?",
     sSrc:"It is {1}. That means 8:30."},

    {type:"teach", trg:"half zes", src:"half past five (5:30)", pos:"noun", gender:null,
     note:"Half before six = 5:30.",
     example:"A: We eten om half zes.\nB: Dat is normaal in Nederland.",
     exampleSrc:"A: We eat at half past five.\nB: That is normal in the Netherlands.",
     funFact:"Dutch dinner is famously early. Half zes (5:30) is peak dinnertime."},

    {type:"teach", trg:"half zeven", src:"half past six (6:30)", pos:"noun", gender:null,
     note:"Half before seven = 6:30.",
     example:"A: Om half zeven kijk ik het nieuws.\nB: Op welke zender?",
     exampleSrc:"A: At half past six I watch the news.\nB: On which channel?",
     funFact:"The NOS 8 uur Journaal (8 o'clock news) is a national institution."},

    {type:"teach", trg:"kwart over negen", src:"quarter past nine (9:15)", pos:"noun", gender:null,
     note:"'Kwart over' = quarter past. Standard time expression.",
     example:"A: Het is kwart over negen.\nB: Oh, ik ben te laat!",
     exampleSrc:"A: It's quarter past nine.\nB: Oh, I'm late!",
     funFact:"'Kwart' from French 'quart'. Same as English 'quarter'."},

    {type:"teach", trg:"kwart over vijf", src:"quarter past five (5:15)", pos:"noun", gender:null,
     note:"'Kwart over' = quarter past.",
     example:"A: Hoe laat is het?\nB: Kwart over vijf.",
     exampleSrc:"A: What time is it?\nB: Quarter past five.",
     funFact:"'Kwart over' and 'kwart voor' (quarter to) work like English. Only 'half' is tricky."},

    {type:"mc",
     q:"'Half vijf' is hetzelfde als ___.",
     opts:["4:30","5:30","5:00","4:00"],
     ans:"4:30",
     hint:"Remember: 'half' in Dutch refers to the hour COMING, not the hour passed."},

    {type:"teach", trg:"laat", src:"late", pos:"adj", gender:null,
     note:"Opposite of 'vroeg' (early). Also used in 'Hoe laat?' (What time?).",
     example:"A: Sorry, ik ben laat!\nB: Geeft niet, kom binnen.",
     exampleSrc:"A: Sorry, I'm late!\nB: No worries, come in.",
     funFact:"Cognate with English 'late'. 'Hoe laat?' literally means 'How late?'."},

    {type:"teach", trg:"het deel", src:"the part / piece", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: delen.",
     example:"A: Dit is het eerste deel van de les.\nB: En hoeveel delen zijn er?",
     exampleSrc:"A: This is the first part of the lesson.\nB: And how many parts are there?",
     funFact:"Cognate with English 'deal' (old meaning: part/portion). Same root."},

    {type:"teach", trg:"de kalender", src:"the calendar", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'calendarium'.",
     example:"A: Kijk in de kalender.\nB: Oké, wanneer heb je tijd?",
     exampleSrc:"A: Look in the calendar.\nB: Okay, when do you have time?",
     funFact:"From Latin. The Dutch love planning. Agendas and calendars are sacred."},

    {type:"teach", trg:"hoelang", src:"how long", pos:"adv", gender:null,
     note:"Question word for duration. Written as one word.",
     example:"A: Hoelang duurt de reis?\nB: Ongeveer twee uur.",
     exampleSrc:"A: How long does the journey take?\nB: About two hours.",
     funFact:"Compound: hoe (how) + lang (long). One word in Dutch, two in English."},

    {type:"match", pairs:[
      {trg:"half negen", src:"8:30"},
      {trg:"kwart over vijf", src:"5:15"},
      {trg:"horloge", src:"wristwatch"},
      {trg:"maand", src:"month"}
    ]}
  ]
};
export default LESSON_10;
