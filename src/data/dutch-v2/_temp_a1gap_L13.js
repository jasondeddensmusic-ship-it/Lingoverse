// L13: School and Work — 20 A1 gap words
const LESSON_13 = {
  id:"nlv2_a1gap_l13", title:"School en Werk", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"School and Work",
     desc:"Learn Dutch vocabulary for school, education, and the workplace. Teachers, students, and subjects.",
     goals:["Master 20 school and work words","Talk about education in Dutch","Describe jobs and workplaces"]},

    {type:"teach", trg:"de docent", src:"the teacher (secondary/higher)", pos:"noun", gender:"c",
     note:"Common gender (de). For secondary school or university teachers.",
     example:"A: Wie is je docent?\nB: Meneer Van Dijk.",
     exampleSrc:"A: Who is your teacher?\nB: Mr. Van Dijk.",
     funFact:"From Latin 'docens' (teaching). More formal than 'leraar'."},

    {type:"teach", trg:"de leraar", src:"the teacher (male)", pos:"noun", gender:"c",
     note:"Common gender (de). Male teacher at primary/secondary school.",
     example:"A: De leraar geeft les in wiskunde.\nB: Is hij streng?",
     exampleSrc:"A: The teacher teaches mathematics.\nB: Is he strict?",
     funFact:"From 'leren' (to learn/teach). The one who makes you learn."},

    {type:"teach", trg:"de lerares", src:"the teacher (female)", pos:"noun", gender:"c",
     note:"Common gender (de). Female form of 'leraar'.",
     example:"A: De lerares is heel aardig.\nB: Ja, iedereen vindt haar leuk.",
     exampleSrc:"A: The teacher is very nice.\nB: Yes, everyone likes her.",
     funFact:"The -es suffix makes it feminine. Like English -ess (actress, waitress)."},

    {type:"teach", trg:"de leerling", src:"the student / pupil", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: leerlingen.",
     example:"A: Hoeveel leerlingen zitten er in de klas?\nB: Dertig.",
     exampleSrc:"A: How many students are in the class?\nB: Thirty.",
     funFact:"From 'leren' (to learn) + '-ling' (one who). The one who learns."},

    {type:"mc",
     q:"De ___ geeft les. De leerling luistert.",
     opts:["leraar","leerling","klas","les"],
     ans:"leraar",
     hint:"Who teaches the class? The professional at the front of the room."},

    {type:"teach", trg:"de les", src:"the lesson / class", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: lessen.",
     example:"A: Hoe laat begint de les?\nB: Om negen uur.",
     exampleSrc:"A: What time does the lesson start?\nB: At nine o'clock.",
     funFact:"From French 'lecon'. Same root as English 'lesson'."},

    {type:"teach", trg:"de klas", src:"the class / classroom", pos:"noun", gender:"c",
     note:"Common gender (de). Both the group and the room.",
     example:"A: In welke klas zit je?\nB: Klas 3B.",
     exampleSrc:"A: Which class are you in?\nB: Class 3B.",
     funFact:"From Latin 'classis'. Same word across most European languages."},

    {type:"teach", trg:"het klaslokaal", src:"the classroom", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: klas + lokaal (room).",
     example:"A: Het klaslokaal is op de eerste verdieping.\nB: Oké, ik ga naar boven.",
     exampleSrc:"A: The classroom is on the first floor.\nB: Okay, I'll go upstairs.",
     funFact:"Transparent compound. Klas (class) + lokaal (locale/room)."},

    {type:"teach", trg:"lesgeven", src:"to teach", pos:"verb", gender:null,
     note:"Separable: ik geef les. Compound: les + geven (to give).",
     example:"A: Waar geef je les?\nB: Op een basisschool in Amsterdam.",
     exampleSrc:"A: Where do you teach?\nB: At a primary school in Amsterdam.",
     funFact:"Literally 'to give lessons'. Separable: 'Ik geef les' not 'Ik lesgeef'."},

    {type:"teach", trg:"de oefening", src:"the exercise", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: oefeningen.",
     example:"A: Maak oefening drie.\nB: Oké, is het moeilijk?",
     exampleSrc:"A: Do exercise three.\nB: Okay, is it difficult?",
     funFact:"From 'oefenen' (to practice). Practice makes perfect: 'Oefening baart kunst'."},

    {type:"fb",
     s:"De leraar {1} les op een basisschool.",
     a:["geeft"],
     opts:["geeft","neemt","maakt","doet"],
     hint:"Which verb means 'gives' in the context of teaching? To give lessons.",
     sSrc:"The teacher {1} lessons at a primary school."},

    {type:"teach", trg:"het cijfer", src:"the grade / number", pos:"noun", gender:"n",
     note:"Neuter noun (het). Dutch grades go from 1 to 10.",
     example:"A: Welk cijfer heb je?\nB: Een acht! Ik ben blij.",
     exampleSrc:"A: What grade did you get?\nB: An eight! I'm happy.",
     funFact:"Dutch school grades: 1-10. A 6 is passing. A 10 is nearly impossible to get."},

    {type:"teach", trg:"het boek", src:"the book", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: boeken.",
     example:"A: Welk boek lees je?\nB: Een boek over Nederlandse geschiedenis.",
     exampleSrc:"A: Which book are you reading?\nB: A book about Dutch history.",
     funFact:"Cognate with English 'book'. From the same root as 'beech' tree (bark used for writing)."},

    {type:"teach", trg:"het hoofdstuk", src:"the chapter", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: hoofd (main) + stuk (piece).",
     example:"A: Lees hoofdstuk drie.\nB: Hoeveel paginas is dat?",
     exampleSrc:"A: Read chapter three.\nB: How many pages is that?",
     funFact:"Literally 'head piece' or 'main piece'. The main divisions of a book."},

    {type:"teach", trg:"het onderwerp", src:"the subject / topic", pos:"noun", gender:"n",
     note:"Neuter noun (het). For school subjects or conversation topics.",
     example:"A: Wat is het onderwerp van de les?\nB: Nederlandse grammatica.",
     exampleSrc:"A: What is the subject of the lesson?\nB: Dutch grammar.",
     funFact:"Compound: onder (under) + werp (throw). What is 'thrown under' discussion."},

    {type:"teach", trg:"de geschiedenis", src:"the history", pos:"noun", gender:"c",
     note:"Common gender (de). School subject and general concept.",
     example:"A: Ik houd van geschiedenis.\nB: Ik ook, vooral de Gouden Eeuw.",
     exampleSrc:"A: I love history.\nB: Me too, especially the Golden Age.",
     funFact:"Literally 'what has happened'. Dutch Golden Age (17th century) is world-famous."},

    {type:"mc",
     q:"In Nederland is een 6 voor een examen ___.",
     opts:["voldoende","onvoldoende","heel goed","perfect"],
     ans:"voldoende",
     hint:"A grade of 6 out of 10 is the minimum to pass. What does that mean?"},

    {type:"teach", trg:"de kantine", src:"the canteen / cafeteria", pos:"noun", gender:"c",
     note:"Common gender (de). School or workplace eating area.",
     example:"A: Laten we in de kantine eten.\nB: Goed idee, ik heb honger.",
     exampleSrc:"A: Let's eat in the canteen.\nB: Good idea, I'm hungry.",
     funFact:"From Italian 'cantina'. Found in every Dutch school and office."},

    {type:"teach", trg:"de baan", src:"the job", pos:"noun", gender:"c",
     note:"Common gender (de). Also means 'lane' (swimming/running).",
     example:"A: Heb je een baan?\nB: Ja, ik werk bij een bakker.",
     exampleSrc:"A: Do you have a job?\nB: Yes, I work at a bakery.",
     funFact:"Multiple meanings: job, lane, orbit. Context tells you which one."},

    {type:"teach", trg:"de baas", src:"the boss", pos:"noun", gender:"c",
     note:"Common gender (de). Your employer or manager.",
     example:"A: Mijn baas is streng maar eerlijk.\nB: Dat is goed.",
     exampleSrc:"A: My boss is strict but fair.\nB: That's good.",
     funFact:"Cognate with English 'boss' (which was borrowed FROM Dutch by American English!)."},

    {type:"teach", trg:"het kantoor", src:"the office", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: kantoren.",
     example:"A: Ik ga naar kantoor.\nB: Hoe laat ben je terug?",
     exampleSrc:"A: I'm going to the office.\nB: What time will you be back?",
     funFact:"From French 'comptoir' (counter). The Dutch office culture values directness."},

    {type:"match", pairs:[
      {trg:"leerling", src:"student / pupil"},
      {trg:"cijfer", src:"grade / number"},
      {trg:"baan", src:"job"},
      {trg:"baas", src:"boss"}
    ]}
  ]
};
export default LESSON_13;
