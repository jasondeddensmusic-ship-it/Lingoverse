// L05: Daily Routine, 20 A1 gap words
const LESSON_5 = {
  id:"nlv2_a1gap_l5", title:"De Dagelijkse Routine", icon:"\u{1F305}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Daily Routine",
     desc:"Learn to talk about your daily activities: morning, afternoon, evening. Dutch words for meals and household tasks.",
     goals:["Master 20 daily routine words","Describe your typical day","Use time-of-day vocabulary"]},

    {type:"teach", trg:"de ochtend", src:"the morning", pos:"noun", gender:"c",
     note:"Common gender (de). Early part of the day.",
     example:"A: Wat doe je in de ochtend?\nB: Ik drink koffie en lees de krant.",
     exampleSrc:"A: What do you do in the morning?\nB: I drink coffee and read the newspaper.",
     funFact:"Dutch has both 'ochtend' (early morning) and 'morgen' (morning/tomorrow)."},

    {type:"teach", trg:"de middag", src:"the afternoon", pos:"noun", gender:"c",
     note:"Common gender (de). From about noon to evening.",
     example:"A: Wat doe je vanmiddag?\nB: Ik ga boodschappen doen.",
     exampleSrc:"A: What are you doing this afternoon?\nB: I'm going grocery shopping.",
     funFact:"Compound: mid (middle) + dag (day). The middle of the day."},

    {type:"teach", trg:"de avond", src:"the evening", pos:"noun", gender:"c",
     note:"Common gender (de). After about 6 PM.",
     example:"A: Wat doe je vanavond?\nB: Ik kijk televisie.",
     exampleSrc:"A: What are you doing this evening?\nB: I'm watching television.",
     funFact:"Cognate with English 'evening' (same root). Dutch shortens it."},

    {type:"teach", trg:"het avondeten", src:"the dinner / evening meal", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: avond (evening) + eten (food).",
     example:"A: Het avondeten is klaar!\nB: Lekker, ik heb honger!",
     exampleSrc:"A: Dinner is ready!\nB: Delicious, I'm hungry!",
     funFact:"The Dutch eat dinner early, often between 5:30 and 6:30 PM."},

    {type:"mc",
     q:"Het ___ is de maaltijd in de avond.",
     opts:["avondeten","ontbijt","lunch","koffie"],
     ans:"avondeten",
     hint:"Which compound word combines 'evening' with 'eating'?"},

    {type:"teach", trg:"de lunch", src:"the lunch", pos:"noun", gender:"c",
     note:"Common gender (de). International word.",
     example:"A: Wat eet je voor de lunch?\nB: Een boterham met kaas.",
     exampleSrc:"A: What are you having for lunch?\nB: A sandwich with cheese.",
     funFact:"The typical Dutch lunch is just bread with toppings. Simple and practical."},

    {type:"teach", trg:"de maaltijd", src:"the meal", pos:"noun", gender:"c",
     note:"Common gender (de). Any meal of the day.",
     example:"A: Hoeveel maaltijden eet je per dag?\nB: Drie: ontbijt, lunch en avondeten.",
     exampleSrc:"A: How many meals do you eat per day?\nB: Three: breakfast, lunch, and dinner.",
     funFact:"Compound: maal (time/occasion) + tijd (time). A 'meal time'."},

    {type:"teach", trg:"de douche", src:"the shower", pos:"noun", gender:"c",
     note:"Common gender (de). From French.",
     example:"A: Waar is de douche?\nB: In de badkamer, boven.",
     exampleSrc:"A: Where is the shower?\nB: In the bathroom, upstairs.",
     funFact:"From French 'douche'. The Dutch pronunciation is close to the French."},

    {type:"teach", trg:"douchen", src:"to shower", pos:"verb", gender:null,
     note:"Regular verb. Ik douche, jij doucht, hij doucht.",
     example:"A: Douche je 's ochtends of 's avonds?\nB: 's Ochtends, altijd.",
     exampleSrc:"A: Do you shower in the morning or evening?\nB: In the morning, always.",
     funFact:"Verb made from the noun 'douche'. Very common everyday word."},

    {type:"teach", trg:"de afwas", src:"the dishes (to wash)", pos:"noun", gender:"c",
     note:"Common gender (de). 'De afwas doen' = to do the dishes.",
     example:"A: Wie doet de afwas?\nB: Ik doe het wel!",
     exampleSrc:"A: Who does the dishes?\nB: I'll do it!",
     funFact:"From 'af' (off) + 'wassen' (to wash). Washing things off."},

    {type:"fb",
     s:"Na het avondeten doe ik de {1}.",
     a:["afwas"],
     opts:["afwas","douche","lunch","ochtend"],
     hint:"After dinner, you clean the plates and glasses. Which noun means 'the dishes'?",
     sSrc:"After dinner I do the {1}."},

    {type:"teach", trg:"maken", src:"to make / to do", pos:"verb", gender:null,
     note:"Regular verb. Very versatile. Ik maak, jij maakt.",
     example:"A: Ik maak het avondeten.\nB: Fijn! Wat maak je?",
     exampleSrc:"A: I'm making dinner.\nB: Nice! What are you making?",
     funFact:"Cognate with English 'make'. One of the most common Dutch verbs."},

    {type:"teach", trg:"leggen", src:"to lay / to put (flat)", pos:"verb", gender:null,
     note:"Regular verb. For placing things horizontally.",
     example:"A: Leg het boek op de tafel.\nB: Oké, doe ik.",
     exampleSrc:"A: Put the book on the table.\nB: Okay, will do.",
     funFact:"Cognate with English 'lay'. Dutch distinguishes 'leggen' (put flat) from 'zetten' (put upright)."},

    {type:"teach", trg:"het huishouden", src:"the household / housekeeping", pos:"noun", gender:"n",
     note:"Neuter noun (het). The household or domestic chores.",
     example:"A: Het huishouden kost veel tijd.\nB: Ja, vooral schoonmaken!",
     exampleSrc:"A: Housekeeping takes a lot of time.\nB: Yes, especially cleaning!",
     funFact:"Compound: huis (house) + houden (to keep). Keeping the house."},

    {type:"teach", trg:"gebruiken", src:"to use", pos:"verb", gender:null,
     note:"Regular verb. Ik gebruik, jij gebruikt.",
     example:"A: Mag ik je telefoon gebruiken?\nB: Ja, natuurlijk!",
     exampleSrc:"A: May I use your phone?\nB: Yes, of course!",
     funFact:"Compound: ge- (prefix) + bruiken (to use). Very common everyday verb."},

    {type:"teach", trg:"controleren", src:"to check / to control", pos:"verb", gender:null,
     note:"Regular verb. Ik controleer, jij controleert.",
     example:"A: Controleer je e-mail even.\nB: Oké, ik kijk nu.",
     exampleSrc:"A: Check your e-mail real quick.\nB: Okay, I'm looking now.",
     funFact:"From French 'controler'. Same in many European languages."},

    {type:"mc",
     q:"Ik ___ elke ochtend koffie.",
     opts:["gebruik","maak","leg","controleer"],
     ans:"maak",
     hint:"Which verb means 'to make'? Think about preparing a drink."},

    {type:"teach", trg:"laten", src:"to let / to leave", pos:"verb", gender:null,
     note:"Irregular verb. Ik laat, jij laat, hij laat.",
     example:"A: Laat me even nadenken.\nB: Neem je tijd!",
     exampleSrc:"A: Let me think for a moment.\nB: Take your time!",
     funFact:"Cognate with English 'let'. Very common as a helping verb in Dutch."},

    {type:"teach", trg:"duren", src:"to last / to take (time)", pos:"verb", gender:null,
     note:"Regular verb. Used for duration of time.",
     example:"A: Hoe lang duurt de film?\nB: Twee uur.",
     exampleSrc:"A: How long does the movie last?\nB: Two hours.",
     funFact:"Related to English 'endure'. Both from Latin 'durare'."},

    {type:"teach", trg:"klaar", src:"ready / finished", pos:"adj", gender:null,
     note:"Very common. 'Klaar zijn' = to be ready/done.",
     example:"A: Ben je klaar?\nB: Ja, ik ben klaar. We kunnen gaan.",
     exampleSrc:"A: Are you ready?\nB: Yes, I'm ready. We can go.",
     funFact:"Used constantly in Dutch. 'Het eten is klaar!' = Dinner is ready!"},

    {type:"teach", trg:"horen", src:"to hear", pos:"verb", gender:null,
     note:"Regular verb. Ik hoor, jij hoort.",
     example:"A: Hoor je dat?\nB: Ja, ik hoor muziek!",
     exampleSrc:"A: Do you hear that?\nB: Yes, I hear music!",
     funFact:"Cognate with English 'hear'. Same Germanic root, same core meaning."},

    {type:"match", pairs:[
      {trg:"maaltijd", src:"meal"},
      {trg:"afwas", src:"dishes"},
      {trg:"huishouden", src:"housekeeping"},
      {trg:"douche", src:"shower"}
    ]}
  ]
};
export default LESSON_5;
