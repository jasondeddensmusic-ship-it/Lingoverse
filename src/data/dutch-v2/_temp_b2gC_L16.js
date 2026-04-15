// L16: Onderwijs en Examens — Education and Examinations
const LESSON_16 = {
  id:"nlv2_b2gC_l16", title:"Onderwijs en Examens", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education and Examinations",
     desc:"The Dutch education system is complex and unique. Master the vocabulary of exams, academic life, and educational structures to navigate this important topic.",
     goals:["Master 10 education and exam terms","Discuss the Dutch school system","Navigate academic vocabulary"]},

    {type:"teach", trg:"de examenafname", src:"the administering of an exam", pos:"noun", gender:"c",
     note:"Common gender (de). Examen (exam) + afname (administering/taking).\n'Het examen afnemen' = to administer an exam.",
     example:"A: De examenafname is volgende week.\nB: Hoeveel leerlingen doen mee?\nA: Meer dan driehonderd.\nB: Dat is veel organisatiewerk.",
     exampleSrc:"A: The exam administration is next week.\nB: How many students are participating?\nA: More than three hundred.\nB: That's a lot of organisational work.",
     funFact:"Dutch final exams ('eindexamens') are nationally standardised. All students across the country take the same exam on the same day."},

    {type:"teach", trg:"de examenvorm", src:"the exam format", pos:"noun", gender:"c",
     note:"Common gender (de). Examen (exam) + vorm (form/format).\n'Meerkeuze' = multiple choice. 'Open vragen' = open questions.",
     example:"A: Welke examenvorm is dit?\nB: Meerkeuze en open vragen.\nA: Ik vind meerkeuze makkelijker.\nB: Ik juist niet, ik denk te veel na.",
     exampleSrc:"A: What exam format is this?\nB: Multiple choice and open questions.\nA: I find multiple choice easier.\nB: Not me, I overthink it.",
     funFact:"Dutch exams use a unique grading system from 1 to 10. A 5.5 is the minimum passing grade. Getting a 10 is extremely rare and celebrated."},

    {type:"teach", trg:"het keuzeonderdeel", src:"the elective component / optional module", pos:"noun", gender:"n",
     note:"Neuter (het). Keuze (choice) + onderdeel (component).\n'Een keuzevak' = an elective subject.",
     example:"A: Welk keuzeonderdeel heb je gekozen?\nB: Filosofie. En jij?\nA: Economie, dat past beter bij mijn profiel.\nB: Slim, dat is handig voor later.",
     exampleSrc:"A: Which elective did you choose?\nB: Philosophy. And you?\nA: Economics, that fits my profile better.\nB: Smart, that's useful for later.",
     funFact:"Dutch secondary school students choose a 'profiel' (profile/track) in year 4: Natuur/Techniek, Natuur/Gezondheid, Economie/Maatschappij, or Cultuur/Maatschappij."},

    {type:"teach", trg:"het bachelorjaar", src:"the bachelor year", pos:"noun", gender:"n",
     note:"Neuter (het). Bachelor + jaar (year).\n'Het eerste bachelorjaar' = the first year of bachelor studies.",
     example:"A: In welk bachelorjaar zit je?\nB: In het derde, dus bijna klaar.\nA: Ga je daarna een master doen?\nB: Ja, als ik word aangenomen.",
     exampleSrc:"A: Which bachelor year are you in?\nB: The third, so almost done.\nA: Are you going to do a master's after?\nB: Yes, if I get accepted.",
     funFact:"Dutch universities use the Bologna system: 3-year bachelor + 1-2 year master. 'HBO' (applied sciences) also awards bachelor degrees."},

    {type:"mc",
     q:"In Nederland is het laagste voldoende cijfer:",
     opts:["4.0","5.0","5.5","6.0"],
     ans:"5.5",
     hint:"The Dutch grading system runs from 1-10. The minimum pass is just above halfway."},

    {type:"teach", trg:"de informatiejunk", src:"the information junkie", pos:"noun", gender:"c",
     note:"Common gender (de). Informatie (information) + junk (addict).\nSomeone addicted to consuming information.",
     example:"A: Ik ben een echte informatiejunk.\nB: Hoeveel uur per dag lees je nieuws?\nA: Minstens drie uur, op mijn telefoon.\nB: Dat is misschien te veel.",
     exampleSrc:"A: I'm a real information junkie.\nB: How many hours a day do you read news?\nA: At least three hours, on my phone.\nB: That might be too much.",
     funFact:"The compound 'informatiejunk' reflects the Dutch habit of combining a Dutch word with an English one. This is called 'tussentaal' (in-between language)."},

    {type:"teach", trg:"het documentatiemateriaal", src:"the documentation material", pos:"noun", gender:"n",
     note:"Neuter (het). Documentatie (documentation) + materiaal (material).\nUsed in academic and professional settings.",
     example:"A: Heb je het documentatiemateriaal ontvangen?\nB: Ja, maar het is heel veel.\nA: Concentreer je op hoofdstuk drie.\nB: Goed, dat is het belangrijkste.",
     exampleSrc:"A: Have you received the documentation material?\nB: Yes, but it's a lot.\nA: Focus on chapter three.\nB: Okay, that's the most important.",
     funFact:"Long compound words like 'documentatiemateriaal' are typical of Dutch. The language allows virtually unlimited compounding, just like German."},

    {type:"teach", trg:"het dialectniveau", src:"the dialect level / dialect proficiency", pos:"noun", gender:"n",
     note:"Neuter (het). Dialect + niveau (level).\nHow well someone can speak or understand a dialect.",
     example:"A: Mijn dialectniveau is niet zo hoog.\nB: Welk dialect bedoel je?\nA: Limburgs. Mijn oma spreekt het vloeiend.\nB: Probeer het met haar te oefenen!",
     exampleSrc:"A: My dialect level isn't very high.\nB: Which dialect do you mean?\nA: Limburgish. My grandmother speaks it fluently.\nB: Try to practise with her!",
     funFact:"Dutch has many dialects: Limburgs, Brabants, Twents, Fries (which is actually a separate language). Dialect use is declining but cherished."},

    {type:"fb",
     s:"De {1} vindt volgende week plaats in de sporthal.",
     a:["examenafname"],
     opts:["examenafname","examenvorm","keuzeonderdeel","bachelorjaar"],
     hint:"The formal event of giving and taking an exam. The process of administering tests.",
     sSrc:"The {1} takes place next week in the sports hall."},

    {type:"teach", trg:"de ingebruikname", src:"the commissioning / putting into use", pos:"noun", gender:"c",
     note:"Common gender (de). In + gebruik (use) + name (taking).\n'Het gebouw is in gebruik genomen' = the building was put into use.",
     example:"A: De ingebruikname van de nieuwe school is morgen.\nB: Is er een feestelijke opening?\nA: Ja, de burgemeester komt.\nB: Spannend voor de leerlingen!",
     exampleSrc:"A: The commissioning of the new school is tomorrow.\nB: Is there a festive opening?\nA: Yes, the mayor is coming.\nB: Exciting for the students!",
     funFact:"The Dutch love formal ceremonies for 'ingebruikname'. Even bike paths sometimes get official openings with ribbon-cutting ceremonies."},

    {type:"teach", trg:"de jaarbasis", src:"the annual basis", pos:"noun", gender:"c",
     note:"Common gender (de). Jaar (year) + basis (basis).\n'Op jaarbasis' = on an annual basis.",
     example:"A: Hoeveel verdien je op jaarbasis?\nB: Rond de vijftigduizend euro.\nA: Bruto of netto?\nB: Bruto, helaas.",
     exampleSrc:"A: How much do you earn on an annual basis?\nB: Around fifty thousand euros.\nA: Gross or net?\nB: Gross, unfortunately.",
     funFact:"'Op jaarbasis' is very common in Dutch business language. 'Maandbasis' (monthly basis) and 'weekbasis' (weekly basis) also exist."},

    {type:"mc",
     q:"Het Nederlandse middelbaar onderwijs kent 'profielen'. Hoeveel zijn er?",
     opts:["Twee","Drie","Vier","Zes"],
     ans:"Vier",
     hint:"Students choose between nature/tech, nature/health, economy/society, or culture/society."},

    {type:"fb",
     s:"Welk {1} heb je gekozen, filosofie of economie?",
     a:["keuzeonderdeel"],
     opts:["keuzeonderdeel","bachelorjaar","examenvorm","dialectniveau"],
     hint:"An optional module or subject that students can select based on their interests.",
     sSrc:"Which {1} did you choose, philosophy or economics?"},

    {type:"match", pairs:[
      {trg:"examenafname", src:"exam administration"},
      {trg:"examenvorm", src:"exam format"},
      {trg:"keuzeonderdeel", src:"elective component"},
      {trg:"bachelorjaar", src:"bachelor year"}
    ]},

    {type:"mc",
     q:"'Op jaarbasis' betekent:",
     opts:["Per dag","Per maand","Per jaar","Per kwartaal"],
     ans:"Per jaar",
     hint:"J... (year) + basis (basis). Calculated over the period of one year."},

    {type:"fb",
     s:"De {1} van het nieuwe ziekenhuis is volgende maand.",
     a:["ingebruikname"],
     opts:["ingebruikname","examenafname","jaarbasis","informatiejunk"],
     hint:"The formal moment when a new building or facility starts being used.",
     sSrc:"The {1} of the new hospital is next month."},

    {type:"match", pairs:[
      {trg:"informatiejunk", src:"information junkie"},
      {trg:"documentatiemateriaal", src:"documentation material"},
      {trg:"dialectniveau", src:"dialect level"},
      {trg:"ingebruikname", src:"commissioning"}
    ]}
  ]
};
export default LESSON_16;
