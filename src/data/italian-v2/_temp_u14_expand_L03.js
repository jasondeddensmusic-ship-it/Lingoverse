// Unit 14 Expansion — Lesson 6: Professional Communication
const LESSON_6 = {
  id:"itv2_u14l6", title:"Email e comunicazione", icon:"📧", xp:15, board:true,
  steps:[
    {type:"intro", title:"Email e comunicazione",
     desc:"Master Italian professional email writing: formal openings, closings, and polite request formulas. Italian business correspondence has strict conventions.",
     goals:["Write professional emails in Italian","Use formal greetings and closings","Make polite requests in business Italian"]},

    {type:"teach", trg:"Gentile", src:"Dear (formal)", pos:"adj", gender:null,
     note:"Standard formal email opening. 'Gentile Signor Rossi.'\nMore formal: 'Egregio' (m.) / 'Egregia' (f.).",
     example:"A: Come inizio l'email?\nB: Scrivi 'Gentile Dottoressa Bianchi.'",
     exampleSrc:"A: How do I start the email?\nB: Write 'Dear Dr. Bianchi.'",
     funFact:"'Gentile' (kind, gentle) is the standard opening for Italian business emails. 'Egregio' (distinguished) is even more formal, used for very important contacts. 'Spettabile' (respectable) is used when addressing companies: 'Spettabile Azienda Rossi.' Each level signals a different degree of formality."},

    {type:"teach", trg:"Cordiali saluti", src:"Kind regards", pos:"noun", gender:"m",
     note:"Standard formal email closing.\nLess formal: 'Cordialmente.' More formal: 'Distinti saluti.'",
     example:"A: Come chiudo l'email formale?\nB: Con 'Cordiali saluti' e la tua firma.",
     exampleSrc:"A: How do I close the formal email?\nB: With 'Kind regards' and your signature.",
     funFact:"Italian email closings follow a strict hierarchy: 'Distinti saluti' (distinguished regards, very formal), 'Cordiali saluti' (kind regards, standard formal), 'Cordialmente' (cordially, semi-formal), 'Un saluto' (a greeting, informal). Using the wrong level can seem either cold or presumptuous."},

    {type:"teach", trg:"in allegato", src:"attached / in the attachment", pos:"adv", gender:null,
     note:"'In allegato' = attached. 'L'allegato' (m.) = the attachment.\n'Troverete in allegato' = you will find attached.",
     example:"A: In allegato troverete il mio curriculum.\nB: Grazie, lo guardiamo subito.",
     exampleSrc:"A: Attached you will find my CV.\nB: Thank you, we will look at it right away.",
     funFact:"'Allegato' comes from Latin 'allegare' (to send along). The standard phrase 'In allegato troverete...' (Attached you will find...) is almost ritualistic in Italian business emails. Forgetting to actually attach the file after writing this phrase is a universal Italian office joke."},

    {type:"teach", trg:"in riferimento a", src:"with reference to / regarding", pos:"prep", gender:null,
     note:"Formal email phrase. Opens the subject of the message.\nAlternative: 'in merito a' (regarding).",
     example:"A: In riferimento alla sua email del 5 aprile...\nB: Le scrivo in merito all'offerta di lavoro.",
     exampleSrc:"A: With reference to your email of April 5...\nB: I am writing regarding the job offer.",
     funFact:"Italian formal emails love these reference phrases. They establish context before the main message. 'In riferimento a,' 'in merito a,' 'con riferimento a,' 'relativamente a' are all interchangeable. They signal professionalism and make the email's purpose immediately clear."},

    {type:"teach", trg:"La prego di", src:"I kindly ask you to (formal)", pos:"verb", gender:null,
     note:"Extremely polite request formula. 'Pregare' = to pray/beg.\n'La' refers to 'Lei' (formal you).",
     example:"A: La prego di inviarmi il documento.\nB: La prego di confermare la ricezione.",
     exampleSrc:"A: I kindly ask you to send me the document.\nB: I kindly ask you to confirm receipt.",
     funFact:"'La prego di' literally translates as 'I pray you to.' It is the gold standard of polite formal requests in Italian. Less formal alternatives: 'Le chiedo di' (I ask you to), 'Potrebbe' (Could you). The prayer metaphor reflects how Italian politeness is built on deference."},

    {type:"teach", trg:"la conferma", src:"the confirmation", pos:"noun", gender:"f",
     note:"Feminine. From 'confermare' (to confirm).\n'In attesa di conferma' = awaiting confirmation.",
     example:"A: Attendo la sua conferma.\nB: Le confermo la riunione per mercoledi.",
     exampleSrc:"A: I await your confirmation.\nB: I confirm the meeting for Wednesday.",
     funFact:"'In attesa di una sua cortese risposta' (Awaiting your kind reply) is perhaps the most common closing line before 'Cordiali saluti' in Italian business emails. 'Cortese' (kind) softens the expectation. Italians rarely write bluntly; everything is wrapped in politeness."},

    {type:"teach", trg:"la fattura", src:"the invoice", pos:"noun", gender:"f",
     note:"Feminine. From 'fatturare' (to invoice).\n'Fattura elettronica' = electronic invoice (mandatory in Italy).",
     example:"A: Le invio la fattura in allegato.\nB: Grazie, il pagamento sara entro trenta giorni.",
     exampleSrc:"A: I am sending you the invoice attached.\nB: Thank you, payment will be within thirty days.",
     funFact:"Since 2019, Italy requires all business-to-business invoices to be electronic ('fatturazione elettronica'). This system, managed through the 'Sistema di Interscambio' (SdI), was revolutionary in Europe. It reduced tax evasion and simplified accounting."},

    {type:"teach", trg:"il preventivo", src:"the quote / estimate", pos:"noun", gender:"m",
     note:"Masculine. From 'preventivare' (to estimate in advance).\n'Richiedere un preventivo' = to request a quote.",
     example:"A: Potrebbe inviarmi un preventivo?\nB: Certo, glielo mando entro domani.",
     exampleSrc:"A: Could you send me a quote?\nB: Of course, I will send it to you by tomorrow.",
     funFact:"Requesting a 'preventivo' is standard practice in Italy before any service or purchase. Italians compare multiple quotes ('preventivi') before deciding. The 'preventivo' is not binding: the final cost may differ. Always ask if the quote includes VAT ('IVA inclusa')."},

    {type:"teach", trg:"la scadenza", src:"the deadline / due date", pos:"noun", gender:"f",
     note:"Feminine. From 'scadere' (to expire/fall due).\n'Rispettare la scadenza' = to meet the deadline.",
     example:"A: Qual e la scadenza per il pagamento?\nB: Entro il quindici del mese.",
     exampleSrc:"A: What is the payment deadline?\nB: By the fifteenth of the month.",
     funFact:"'Scadenza' appears in both work and daily life: payment due dates, food expiration dates, document deadlines. Italian bureaucracy is famous for its many scadenze. Missing a 'scadenza fiscale' (tax deadline) can result in penalties ('sanzioni')."},

    // Quiz steps
    {type:"mc", q:"What is the standard formal opening for an Italian business email?",
     opts:["Caro","Ciao","Gentile","Buongiorno caro"],
     ans:"Gentile",
     hint:"This word means 'kind' or 'gentle.' 'G... Signor Rossi' is the standard professional opening."},

    {type:"fb", s:"{1} saluti, Marco Bianchi.",
     a:["Cordiali"],
     opts:["Cordiali","Cari","Buoni","Gentili"],
     hint:"This is the standard formal email sign-off. It means 'kind regards' and pairs with 'Gentile' at the top.",
     sSrc:"Kind {1}, Marco Bianchi."},

    {type:"match", pairs:[
      {trg:"Gentile", src:"Dear (formal opening)"},
      {trg:"Cordiali saluti", src:"Kind regards"},
      {trg:"in allegato", src:"attached"},
      {trg:"La prego di", src:"I kindly ask you to"},
      {trg:"la fattura", src:"the invoice"}
    ]},

    {type:"mc", q:"What does 'in riferimento a' mean in a business email?",
     opts:["In addition to the previous topic","With reference to or regarding something","In response to your kind request","In contrast to the previous email"],
     ans:"With reference to or regarding something",
     hint:"This phrase opens the topic of your email. It establishes what you are writing about before the main message."},

    {type:"fb", s:"In {1} troverete il mio curriculum.",
     a:["allegato"],
     opts:["allegato","riferimento","merito","attesa"],
     hint:"The CV is included as a file with the email. This word means 'attachment.'",
     sSrc:"{1} you will find my CV."},

    {type:"mc", q:"What makes 'La prego di' so formal?",
     opts:["It uses the future tense to be polite","It literally means 'I pray you to,' showing maximum deference","It is only used in legal documents, never in email","It addresses the reader by their first name"],
     ans:"It literally means 'I pray you to,' showing maximum deference",
     hint:"'Pregare' m... 'to p...' or 'to beg.' This formula transforms a request into a humble entreaty."},

    {type:"fb", s:"Potrebbe inviarmi un {1} per il progetto?",
     a:["preventivo"],
     opts:["preventivo","contratto","colloquio","permesso"],
     hint:"You are asking for an estimated price before committing. Italians always compare several of these before deciding.",
     sSrc:"Could you send me a {1} for the project?"},

    {type:"mc", q:"What is 'la fatturazione elettronica'?",
     opts:["An optional email billing system","Italy's mandatory electronic invoice system since 2019","A type of bank transfer method","An online tax payment portal"],
     ans:"Italy's mandatory electronic invoice system since 2019",
     hint:"This s... goes through the 'Sistema di Interscambio' (SdI). It was revolutionary in reducing tax evasion."}
  ]
};
export default LESSON_6;
