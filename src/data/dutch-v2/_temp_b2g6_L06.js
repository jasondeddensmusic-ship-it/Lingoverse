// L06: Education and Exams
const LESSON_6 = {
  id:"nlv2_b2g6_l6", title:"Onderwijs en Examens", icon:"\uD83C\uDF93", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education and Exams",
     desc:"Dive into the Dutch education system with vocabulary for exams, academic roles, and university life. The Netherlands has a unique multi-track education system.",
     goals:["Learn 10 education and exam terms","Discuss the Dutch examination system","Understand academic roles and titles"]},

    {type:"teach", trg:"de examencommissie", src:"the exam board, examination committee", pos:"noun", gender:"c",
     note:"Compound: examen (exam) + commissie (committee).\nOversees exam fairness and academic integrity.",
     example:"A: De examencommissie heeft het besluit genomen.\nB: Wat hebben ze besloten?\nA: Het tentamen wordt opnieuw afgenomen.\nB: Omdat er fouten in de vragen zaten?",
     exampleSrc:"A: The exam board has made the decision.\nB: What did they decide?\nA: The exam will be taken again.\nB: Because there were errors in the questions?",
     funFact:"Every Dutch university has an examencommissie that can grant exemptions, investigate fraud, and invalidate exam results."},

    {type:"teach", trg:"het examenrooster", src:"the exam schedule, exam timetable", pos:"noun", gender:"n",
     note:"Compound: examen (exam) + rooster (schedule, grid).\nPublished weeks before exam periods.",
     example:"A: Heb je het examenrooster al gezien?\nB: Ja, ik heb drie tentamens in een week.\nA: Dat is zwaar!\nB: Ik moet goed plannen.",
     exampleSrc:"A: Have you seen the exam schedule yet?\nB: Yes, I have three exams in one week.\nA: That is tough!\nB: I need to plan well.",
     funFact:"Dutch universities use 'rooster' for any schedule. It literally means 'grid' or 'grate', from the grid-like layout of timetables."},

    {type:"teach", trg:"de hoofddocent", src:"the senior lecturer", pos:"noun", gender:"c",
     note:"Compound: hoofd (main, head) + docent (lecturer).\nAcademic rank between docent and hoogleraar.",
     example:"A: De hoofddocent geeft het college over economie.\nB: Is zij goed?\nA: Heel goed, haar uitleg is duidelijk.\nB: Dan ga ik ook naar haar college.",
     exampleSrc:"A: The senior lecturer gives the economics lecture.\nB: Is she good?\nA: Very good, her explanation is clear.\nB: Then I will also attend her lecture.",
     funFact:"Dutch academic ranks differ from Anglo-Saxon ones. The path goes: docent, hoofddocent, universitair hoofddocent, hoogleraar (full professor)."},

    {type:"teach", trg:"de hoofdredacteur", src:"the editor-in-chief", pos:"noun", gender:"c",
     note:"Compound: hoofd (main) + redacteur (editor).\nLeads the editorial team of a newspaper or magazine.",
     example:"A: De hoofdredacteur heeft het artikel afgekeurd.\nB: Waarom?\nA: Het was niet objectief genoeg.\nB: Dan moet de journalist het herschrijven.",
     exampleSrc:"A: The editor-in-chief rejected the article.\nB: Why?\nA: It was not objective enough.\nB: Then the journalist has to rewrite it.",
     funFact:"Dutch media has a strong tradition of editorial independence. The hoofdredacteur is legally protected from owner interference."},

    {type:"teach", trg:"het honorarium", src:"the fee, the honorarium", pos:"noun", gender:"n",
     note:"From Latin 'honorarium' (honorary payment).\nPayment for professional services, especially freelance.",
     example:"A: Wat is het honorarium voor deze lezing?\nB: Vijfhonderd euro plus reiskosten.\nA: Dat is redelijk.\nB: Inclusief voorbereiding?",
     exampleSrc:"A: What is the fee for this lecture?\nB: Five hundred euros plus travel costs.\nA: That is reasonable.\nB: Including preparation?",
     funFact:"The Dutch use 'honorarium' specifically for professional fees (doctors, lawyers, speakers). Regular wages use 'salaris' or 'loon'."},

    {type:"mc",
     q:"Wat doet een examencommissie?",
     opts:["Toezicht houden op examens en academische integriteit","Lesroosters maken voor studenten","Nieuwe docenten aannemen","De kantine beheren"],
     ans:"Toezicht houden op examens en academische integriteit",
     hint:"This committee oversees fairness in testing and can investigate academic fraud."},

    {type:"teach", trg:"de hobbyist", src:"the hobbyist", pos:"noun", gender:"c",
     note:"From English 'hobby' + Dutch '-ist' suffix.\nSomeone who pursues an activity for fun, not profit.",
     example:"A: Hij is een hobbyist, geen professionele fotograaf.\nB: Maar zijn foto's zijn prachtig!\nA: Talent heeft geen diploma nodig.\nB: Daar ben ik het mee eens.",
     exampleSrc:"A: He is a hobbyist, not a professional photographer.\nB: But his photos are beautiful!\nA: Talent does not need a diploma.\nB: I agree with that.",
     funFact:"The Dutch have a strong hobby culture. Model trains, gardening, and cycling clubs are among the most popular hobby organizations."},

    {type:"teach", trg:"het horoscoop", src:"the horoscope", pos:"noun", gender:"n",
     note:"From Greek 'horoskopos' (observer of time).\nHet-word. Popular in magazines.",
     example:"A: Geloof jij in je horoscoop?\nB: Nee, maar ik lees het wel voor de lol.\nA: Wat is jouw sterrenbeeld?\nB: Ik ben een Waterman.",
     exampleSrc:"A: Do you believe in your horoscope?\nB: No, but I do read it for fun.\nA: What is your star sign?\nB: I am an Aquarius.",
     funFact:"Despite being a generally secular society, Dutch magazines and newspapers still publish daily horoscopes. The Linda magazine horoscope is widely read."},

    {type:"teach", trg:"het fragment", src:"the fragment, the excerpt", pos:"noun", gender:"n",
     note:"From Latin 'fragmentum' (a broken piece).\nUsed for text excerpts, video clips, or music pieces.",
     example:"A: We gaan een fragment uit het boek lezen.\nB: Welk hoofdstuk?\nA: Hoofdstuk drie, over de oorlog.\nB: Dat is het sterkste deel.",
     exampleSrc:"A: We are going to read a fragment from the book.\nB: Which chapter?\nA: Chapter three, about the war.\nB: That is the strongest part.",
     funFact:"In Dutch education, students analyze 'fragmenten' from literature as part of their reading list. The 'literatuurlijst' is mandatory for final exams."},

    {type:"fb",
     s:"Het {1} laat zien dat ik drie tentamens op dezelfde dag heb.",
     a:["examenrooster"],
     opts:["examenrooster","examencommissie","honorarium","horoscoop"],
     hint:"The schedule or timetable that shows when each exam takes place.",
     sSrc:"The {1} shows that I have three exams on the same day."},

    {type:"teach", trg:"de finale", src:"the final (match), the finale", pos:"noun", gender:"c",
     note:"From Italian 'finale'.\nUsed for sports finals and the ending of performances.",
     example:"A: Nederland speelt de finale van het EK!\nB: Tegen wie?\nA: Tegen Duitsland.\nB: Dat wordt een spannende wedstrijd.",
     exampleSrc:"A: The Netherlands is playing the final of the European Championship!\nB: Against whom?\nA: Against Germany.\nB: That will be an exciting match.",
     funFact:"The Netherlands has reached the World Cup final three times (1974, 1978, 2010) but lost all three, earning the reputation of the best team to never win."},

    {type:"teach", trg:"de breuk", src:"the fracture, the break, the fraction", pos:"noun", gender:"c",
     note:"From 'breken' (to break). Three meanings:\n1. Medical fracture 2. Relationship break 3. Math fraction.",
     example:"A: Er is een breuk in de coalitie ontstaan.\nB: Welke partijen zijn het niet eens?\nA: De twee grootste partijen.\nB: Dat kan een kabinetscrisis worden.",
     exampleSrc:"A: A fracture has emerged in the coalition.\nB: Which parties disagree?\nA: The two largest parties.\nB: That could become a cabinet crisis.",
     funFact:"In Dutch politics, 'een breuk' (a break) between coalition partners often leads to new elections. Coalition collapses happen roughly every 3 years."},

    {type:"mc",
     q:"Wat is een 'honorarium'?",
     opts:["Een ere-doctoraat","Een vergoeding voor professionele diensten","Een eervolle onderscheiding","Een diploma met lof"],
     ans:"Een vergoeding voor professionele diensten",
     hint:"From Latin 'honorarium'. It is the payment a professional receives for their work."},

    {type:"match", pairs:[
      {trg:"examencommissie", src:"exam board"},
      {trg:"hoofddocent", src:"senior lecturer"},
      {trg:"hoofdredacteur", src:"editor-in-chief"},
      {trg:"honorarium", src:"professional fee"}
    ]},

    {type:"fb",
     s:"Er is een {1} ontstaan tussen de twee politieke partijen.",
     a:["breuk"],
     opts:["breuk","finale","fragment","hobbyist"],
     hint:"A word meaning fracture or break, used here figuratively for a political split.",
     sSrc:"A {1} has emerged between the two political parties."},

    {type:"mc",
     q:"Wat staat er op een 'examenrooster'?",
     opts:["De beoordelingen van docenten","De prijzen van studieboeken","De data en tijden van tentamens","De namen van alle studenten"],
     ans:"De data en tijden van tentamens",
     hint:"A 'rooster' is a schedule or grid. Combined with 'examen', it shows when tests happen."}
  ]
};
export default LESSON_6;
