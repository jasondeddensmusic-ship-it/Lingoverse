// B2 Gap Batch A. Lesson 05: Kantoor & Werk
// Theme: Office life, careers, workplace

const LESSON_5 = {id:"nlv2_b2gA_l5", title:"Kantoor & Werk", icon:"\u{1F3E2}", xp:40, board:true, steps:[
  {type:"intro", title:"Kantoor & Werk",
   desc:"Learn vocabulary for the modern Dutch workplace. From office buildings to career ambitions, these words will help you navigate professional conversations.",
   goals:["Learn office and workplace vocabulary","Discuss careers and job markets","Understand Dutch work culture terms"]},

  {type:"teach", trg:"het kantoorgebouw", src:"office building", pos:"noun", gender:"n",
   note:"Compound: kantoor (office) + gebouw (building).\nhet-word because gebouw is het.",
   example:"A: Ons nieuwe kantoorgebouw staat in het centrum.\nB: Is het een modern gebouw?\nA: Ja, met veel glas en een daktuin.\nB: Dat klinkt als een fijne werkplek.",
   exampleSrc:"A: Our new office building is in the city centre.\nB: Is it a modern building?\nA: Yes, with lots of glass and a rooftop garden.\nB: That sounds like a nice workplace.",
   funFact:"The Netherlands is known for innovative kantoorgebouwen. The Edge in Amsterdam was called 'the smartest building in the world' by Bloomberg in 2015."},

  {type:"teach", trg:"de kantoormedewerker", src:"office worker, office employee", pos:"noun", gender:"c",
   note:"Compound: kantoor + medewerker (employee).\nGeneral term for someone who works in an office.",
   example:"A: Hoeveel kantoormedewerkers werken er in dit gebouw?\nB: Ongeveer driehonderd.\nA: En werken ze allemaal vijf dagen op kantoor?\nB: Nee, de meesten werken hybride: drie dagen hier, twee thuis.",
   exampleSrc:"A: How many office workers work in this building?\nB: About three hundred.\nA: And do they all work five days in the office?\nB: No, most work hybrid: three days here, two at home.",
   funFact:"The Netherlands has one of the highest rates of part-time work in the world. Many kantoormedewerkers work 4 days a week, using the fifth for childcare or personal time."},

  {type:"teach", trg:"de jobmarkt", src:"job market", pos:"noun", gender:"c",
   note:"Compound: job + markt.\nMore informal than 'arbeidsmarkt'. Common in Flemish Dutch too.",
   example:"A: De jobmarkt is op dit moment heel krap.\nB: Dat betekent dat er meer banen dan werkzoekenden zijn.\nA: Goed voor werknemers, lastig voor werkgevers.\nB: Ja, bedrijven moeten harder hun best doen om personeel te vinden.",
   exampleSrc:"A: The job market is very tight right now.\nB: That means there are more jobs than job seekers.\nA: Good for employees, difficult for employers.\nB: Yes, companies have to try harder to find staff.",
   funFact:"The Dutch and Flemish use slightly different words: 'jobmarkt' is more Flemish, while the Netherlands prefers 'arbeidsmarkt'. Both are understood everywhere."},

  {type:"teach", trg:"het jaarsalaris", src:"annual salary", pos:"noun", gender:"n",
   note:"Compound: jaar (year) + salaris (salary).\nhet-word because salaris is het.",
   example:"A: Wat is het gemiddelde jaarsalaris in Nederland?\nB: Dat hangt sterk af van de sector.\nA: In de IT is het jaarsalaris vaak boven de vijftigduizend.\nB: En in het onderwijs ligt het lager.",
   exampleSrc:"A: What is the average annual salary in the Netherlands?\nB: That depends heavily on the sector.\nA: In IT, the annual salary is often above fifty thousand.\nB: And in education, it's lower.",
   funFact:"Dutch people are surprisingly open about salaries compared to many cultures. Salary transparency is increasing, and since 2024, EU rules require job postings to include salary ranges."},

  {type:"teach", trg:"het jaarverslag", src:"annual report", pos:"noun", gender:"n",
   note:"Compound: jaar + verslag (report).\nA yearly overview of a company's or organization's performance.",
   example:"A: Het jaarverslag van de gemeente is gepubliceerd.\nB: Staan daar interessante cijfers in?\nA: Ja, de uitgaven voor jeugdzorg zijn flink gestegen.\nB: Dat is een landelijke trend.",
   exampleSrc:"A: The annual report of the municipality has been published.\nB: Are there interesting figures in it?\nA: Yes, spending on youth care has risen significantly.\nB: That's a national trend.",
   funFact:"Dutch companies are legally required to publish a jaarverslag. The Netherlands was a pioneer in corporate reporting. The first annual reports date back to the VOC in the 1600s."},

  {type:"teach", trg:"de indiensttreding", src:"commencement of employment", pos:"noun", gender:"c",
   note:"Compound: in + dienst (service) + treding (entering).\nFormal/HR term for starting a job.",
   example:"A: Uw indiensttreding is op 1 maart.\nB: Moet ik op die dag al beginnen met werken?\nA: Ja, maar de eerste week is een inwerkperiode.\nB: Fijn, dan kan ik rustig wennen.",
   exampleSrc:"A: Your commencement of employment is on March 1st.\nB: Do I have to start working on that day?\nA: Yes, but the first week is an orientation period.\nB: Good, then I can get used to things at my own pace.",
   funFact:"Dutch employment contracts (arbeidsovereenkomsten) always specify the datum van indiensttreding. After three temporary contracts, employers must offer a permanent one (vast contract)."},

  {type:"tip", title:"Kantoor- and Jaar- Compounds",
   text:"Two productive prefixes for workplace vocabulary:\n\nkantoor- (office):\n- kantoorgebouw (office building)\n- kantoormedewerker (office worker)\n- kantoorleven (office life)\n- kantoorvertrek (office room)\n\njaar- (year/annual):\n- jaarsalaris (annual salary)\n- jaarverslag (annual report)\n- jaarbasis (annual basis)\n- jaargetij (season, literally 'year-time')",
   deepDive:{title:"Dutch Work Culture",
    text:"Key features of Dutch work culture:\n\n- Overleg (consultation): decisions are made by consensus\n- Part-time is normal: the Netherlands has the most part-time workers in the EU\n- Borrel (drinks): colleagues socialize over drinks on Friday afternoon\n- Direct communication: Dutch colleagues will give you honest feedback\n- Flat hierarchy: calling your boss by first name is standard"}},

  {type:"mc", q:"Welk woord betekent 'annual salary'?",
   opts:["het jaarsalaris","het jaarverslag","de indiensttreding","de jobmarkt"],
   ans:"het jaarsalaris",
   hint:"Jaar (year) + salaris (salary). How much you earn per year."},

  {type:"fb", s:"Ons nieuwe {1} staat in het centrum van de stad.",
   a:["kantoorgebouw"], opts:["kantoorgebouw","jaarsalaris","jaarverslag","indiensttreding"],
   hint:"A building (gebouw) where people work in offices (kantoor).",
   sSrc:"Our new office building is in the city centre."},

  {type:"mc", q:"De jobmarkt is heel krap. Wat betekent dat?",
   opts:["companies are closing","there are more jobs than job seekers","there are no jobs available","salaries are very low"],
   ans:"there are more jobs than job seekers",
   hint:"A tight (krap) j... market means demand for workers exceeds supply."},

  {type:"fb", s:"Het {1} van de gemeente toont stijgende uitgaven voor jeugdzorg.",
   a:["jaarverslag"], opts:["jaarverslag","jaarsalaris","kantoorgebouw","jobmarkt"],
   hint:"A yearly document that reports on an organization's performance.",
   sSrc:"The annual report of the municipality shows rising spending on youth care."},

  {type:"match", pairs:[
    {trg:"kantoorgebouw", src:"office building"},
    {trg:"kantoormedewerker", src:"office worker"},
    {trg:"jobmarkt", src:"job market"},
    {trg:"jaarsalaris", src:"annual salary"},
    {trg:"jaarverslag", src:"annual report"},
    {trg:"indiensttreding", src:"commencement of employment"}
  ]},

  {type:"mc", q:"Uw indiensttreding is op 1 maart. Wat is 'indiensttreding'?",
   opts:["a job interview","your retirement date","the start of your employment","your resignation date"],
   ans:"the start of your employment",
   hint:"In + dienst (service) + treding (entering). The moment you formally begin working."},

  {type:"fb", s:"De meeste {1} werken tegenwoordig hybride.",
   a:["kantoormedewerkers"], opts:["kantoormedewerkers","kantoorgebouwen","jaarsalarissen","jaarverslagen"],
   hint:"People who work in offices. Plural form of kantoormedewerker.",
   sSrc:"Most office workers nowadays work hybrid."},

  {type:"drag_fill", s:"Na haar {1} kreeg zij een goed {2} en een plek in het nieuwe {3}.",
   blanks:{"1":"indiensttreding","2":"jaarsalaris","3":"kantoorgebouw"},
   pool:["indiensttreding","jaarsalaris","kantoorgebouw","jaarverslag","jobmarkt"],
   hint:"After starting the job, she received good annual pay and a spot in the new office building."}
]};
export default LESSON_5;
