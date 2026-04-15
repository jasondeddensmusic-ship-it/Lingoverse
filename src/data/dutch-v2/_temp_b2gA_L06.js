// B2 Gap Batch A — Lesson 06: Informatie & Digitaal
// Theme: Information overload, digital life

const LESSON_6 = {id:"nlv2_b2gA_l6", title:"Informatie & Digitaal", icon:"\u{1F4F1}", xp:40, board:true, steps:[
  {type:"intro", title:"Informatie & Digitaal",
   desc:"Learn vocabulary about information systems, digital life, and the challenges of the information age. These terms appear in NT2 texts about modern society.",
   goals:["Learn information technology vocabulary","Discuss digital life in Dutch","Understand compound nouns about information"]},

  {type:"teach", trg:"de informatieovervloed", src:"information overload", pos:"noun", gender:"c",
   note:"Compound: informatie + overvloed (abundance, overflow).\nA modern societal concern.",
   example:"A: Ik word gek van de informatieovervloed.\nB: Ja, er zijn zoveel nieuwsbronnen tegenwoordig.\nA: Hoe filter jij wat belangrijk is?\nB: Ik lees alleen nog twee betrouwbare kranten.",
   exampleSrc:"A: The information overload is driving me crazy.\nB: Yes, there are so many news sources nowadays.\nA: How do you filter what's important?\nB: I only read two reliable newspapers now.",
   funFact:"The Dutch word 'informatieovervloed' perfectly illustrates how Dutch builds compounds: informatie (information) + overvloed (overflow). English needs two separate words, Dutch fuses them into one."},

  {type:"teach", trg:"het informatiesysteem", src:"information system", pos:"noun", gender:"n",
   note:"Compound: informatie + systeem.\nhet-word because systeem is het. Used in IT and business.",
   example:"A: Ons informatiesysteem moet worden gemoderniseerd.\nB: Wat is het probleem met het huidige systeem?\nA: Het is te traag en niet veilig genoeg.\nB: Een nieuw systeem kost veel geld, maar het is noodzakelijk.",
   exampleSrc:"A: Our information system needs to be modernized.\nB: What's the problem with the current system?\nA: It's too slow and not secure enough.\nB: A new system costs a lot of money, but it's necessary.",
   funFact:"The Dutch government has a troubled history with IT projects. Many informatiesystemen for healthcare, taxes, and education went over budget or failed entirely."},

  {type:"teach", trg:"de informatiestroom", src:"information flow, stream of information", pos:"noun", gender:"c",
   note:"Compound: informatie + stroom (stream, flow).\nHow information moves through an organization or society.",
   example:"A: De informatiestroom binnen ons bedrijf moet beter.\nB: Hoe bedoel je?\nA: Afdelingen delen niet genoeg informatie met elkaar.\nB: Dat leidt inderdaad tot fouten en vertragingen.",
   exampleSrc:"A: The information flow within our company needs to improve.\nB: What do you mean?\nA: Departments don't share enough information with each other.\nB: That indeed leads to mistakes and delays.",
   funFact:"Dutch organizations often use the word 'informatiestroom' in restructuring plans. Improving the flow of information is a classic management consultancy recommendation."},

  {type:"teach", trg:"de internettoegang", src:"internet access", pos:"noun", gender:"c",
   note:"Compound: internet + toegang (access).\nA basic right according to Dutch policy.",
   example:"A: Heeft iedereen in Nederland internettoegang?\nB: Bijna iedereen. Nederland heeft een van de hoogste percentages ter wereld.\nA: Maar er zijn nog steeds mensen zonder?\nB: Ja, vooral ouderen en mensen met een laag inkomen.",
   exampleSrc:"A: Does everyone in the Netherlands have internet access?\nB: Almost everyone. The Netherlands has one of the highest percentages in the world.\nA: But there are still people without?\nB: Yes, especially elderly people and people with a low income.",
   funFact:"The Netherlands consistently ranks in the top 5 worldwide for internettoegang. Over 98% of Dutch households have a broadband connection, one of the highest rates globally."},

  {type:"teach", trg:"het inschrijvingsformulier", src:"registration form", pos:"noun", gender:"n",
   note:"Compound: inschrijving (registration) + formulier (form).\nhet-word. Used for schools, courses, events.",
   example:"A: Heb je het inschrijvingsformulier al ingevuld?\nB: Nee, ik heb het nog niet ontvangen.\nA: Je kunt het online downloaden.\nB: Welke gegevens moet ik invullen?",
   exampleSrc:"A: Have you filled in the registration form yet?\nB: No, I haven't received it yet.\nA: You can download it online.\nB: What information do I need to fill in?",
   funFact:"Dutch bureaucracy loves formulieren (forms). The inschrijvingsformulier is used for everything from school enrollment to gym memberships. DigiD, the Dutch digital identity, has replaced many paper forms."},

  {type:"teach", trg:"de inloggegevens", src:"login credentials", pos:"noun", gender:"c",
   note:"Compound: inlog (login) + gegevens (data, details).\nAlways plural. Essential digital vocabulary.",
   example:"A: Ik ben mijn inloggegevens vergeten.\nB: Kun je ze niet resetten?\nA: Jawel, maar ik heb mijn e-mailadres ook niet meer.\nB: Dan moet je contact opnemen met de helpdesk.",
   exampleSrc:"A: I've forgotten my login credentials.\nB: Can't you reset them?\nA: Yes, but I don't have my email address anymore either.\nB: Then you need to contact the help desk.",
   funFact:"The Dutch government portal MijnOverheid uses DigiD as inloggegevens. Over 15 million Dutch citizens have a DigiD account, making it one of the most widely used digital identity systems in Europe."},

  {type:"tip", title:"Informatie- Compounds",
   text:"The prefix informatie- creates a large family of related terms:\n\n- informatieovervloed (information overload)\n- informatiesysteem (information system)\n- informatiestroom (information flow)\n- informatiemateriaal (informational material)\n- informatieverschaffing (provision of information)\n\nAll follow the same pattern: informatie + the core concept.",
   deepDive:{title:"Digital Netherlands",
    text:"The Netherlands is one of the most digitally connected countries in the world:\n\n- Nearly 100% internet penetration\n- DigiD for government services\n- iDEAL for online payments (used by 99% of Dutch webshops)\n- Digital health records (EPD)\n\nThis digitalization means that vocabulary about informatie, inloggen, and online systems is essential for daily life in the Netherlands."}},

  {type:"mc", q:"Welk woord betekent 'information overload'?",
   opts:["de informatieovervloed","het informatiesysteem","de informatiestroom","de internettoegang"],
   ans:"de informatieovervloed",
   hint:"Informatie + overvloed (abundance/overflow). Too much information at once."},

  {type:"fb", s:"Ons {1} moet worden gemoderniseerd.",
   a:["informatiesysteem"], opts:["informatiesysteem","informatieovervloed","informatiestroom","inloggegevens"],
   hint:"The digital system (systeem) that stores and processes data (informatie).",
   sSrc:"Our information system needs to be modernized."},

  {type:"mc", q:"Ik ben mijn inloggegevens vergeten. Wat zijn 'inloggegevens'?",
   opts:["login credentials","internet settings","email addresses","software updates"],
   ans:"login credentials",
   hint:"The data (gegevens) you need to log in (inloggen) to an account."},

  {type:"fb", s:"Heeft iedereen in Nederland {1}?",
   a:["internettoegang"], opts:["internettoegang","informatieovervloed","inloggegevens","inschrijvingsformulier"],
   hint:"The ability to connect to the internet. Toegang means access.",
   sSrc:"Does everyone in the Netherlands have internet access?"},

  {type:"match", pairs:[
    {trg:"informatieovervloed", src:"information overload"},
    {trg:"informatiesysteem", src:"information system"},
    {trg:"informatiestroom", src:"information flow"},
    {trg:"internettoegang", src:"internet access"},
    {trg:"inschrijvingsformulier", src:"registration form"},
    {trg:"inloggegevens", src:"login credentials"}
  ]},

  {type:"mc", q:"De informatiestroom binnen het bedrijf moet beter. Wat is een 'informatiestroom'?",
   opts:["the flow of information","a type of computer","a news channel","an email system"],
   ans:"the flow of information",
   hint:"Stroom means stream or flow. How information moves through an organization."},

  {type:"fb", s:"Heb je het {1} al ingevuld voor de cursus?",
   a:["inschrijvingsformulier"], opts:["inschrijvingsformulier","informatiesysteem","internettoegang","inloggegevens"],
   hint:"The official document (formulier) you complete to register (inschrijving) for something.",
   sSrc:"Have you already filled in the registration form for the course?"},

  {type:"drag_fill", s:"Door de {1} is het moeilijk om betrouwbare bronnen te vinden, maar goede {2} helpen bij het filteren.",
   blanks:{"1":"informatieovervloed","2":"informatiesystemen"},
   pool:["informatieovervloed","informatiesystemen","inloggegevens","internettoegang","informatiestroom"],
   hint:"Too much information makes it hard to find reliable sources, but good digital systems help filter."}
]};
export default LESSON_6;
