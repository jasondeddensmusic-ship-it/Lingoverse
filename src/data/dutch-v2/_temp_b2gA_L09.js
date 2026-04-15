// B2 Gap Batch A — Lesson 09: Financien & Administratie
// Theme: Finance, costs, accounting

const LESSON_9 = {id:"nlv2_b2gA_l9", title:"Financien & Administratie", icon:"\u{1F4B0}", xp:40, board:true, steps:[
  {type:"intro", title:"Financien & Administratie",
   desc:"Learn financial and administrative vocabulary for dealing with Dutch bureaucracy, bills, and financial planning. Essential for daily life in the Netherlands.",
   goals:["Learn financial administration vocabulary","Discuss costs and billing","Understand Dutch bureaucratic terms"]},

  {type:"teach", trg:"de incassokosten", src:"collection costs, debt recovery fees", pos:"noun", gender:"c",
   note:"Compound: incasso (collection/recovery) + kosten (costs).\nAlways plural. Added when bills go unpaid.",
   example:"A: Als je niet op tijd betaalt, komen er incassokosten bij.\nB: Hoeveel zijn die?\nA: Dat kan oplopen tot honderden euro's.\nB: Dan betaal ik liever op tijd!",
   exampleSrc:"A: If you don't pay on time, collection costs are added.\nB: How much are those?\nA: That can add up to hundreds of euros.\nB: Then I'd rather pay on time!",
   funFact:"Dutch incassobureaus (collection agencies) are strictly regulated. Maximum incassokosten are set by law since 2012 to prevent abuse. Still, many people get into trouble with unexpected extra costs."},

  {type:"teach", trg:"de incassomachtiging", src:"direct debit authorization", pos:"noun", gender:"c",
   note:"Compound: incasso + machtiging (authorization).\nPermission for a company to take money from your bank account.",
   example:"A: Wilt u een incassomachtiging afgeven?\nB: Wat houdt dat precies in?\nA: Dan schrijven wij het bedrag automatisch van uw rekening af.\nB: Dat is handig, dan hoef ik niet zelf te betalen.",
   exampleSrc:"A: Would you like to give a direct debit authorization?\nB: What exactly does that involve?\nA: Then we automatically deduct the amount from your account.\nB: That's convenient, then I don't have to pay myself.",
   funFact:"SEPA-incasso (Single Euro Payments Area direct debit) is the standard across Europe. Dutch people use incassomachtigingen for rent, insurance, subscriptions, and utilities."},

  {type:"teach", trg:"het inkomensprobleem", src:"income problem", pos:"noun", gender:"n",
   note:"Compound: inkomen (income) + probleem.\nhet-word because probleem is het.",
   example:"A: Steeds meer huishoudens hebben een inkomensprobleem.\nB: Wat zijn de oorzaken?\nA: Stijgende kosten en stagnerende lonen.\nB: De overheid zou meer moeten doen aan armoedebestrijding.",
   exampleSrc:"A: More and more households have an income problem.\nB: What are the causes?\nA: Rising costs and stagnating wages.\nB: The government should do more about poverty reduction.",
   funFact:"The Netherlands has a relatively low poverty rate by European standards, but inkomensproblemen are growing, especially among flexwerkers and ZZP'ers without safety nets."},

  {type:"teach", trg:"de faciliteit", src:"facility", pos:"noun", gender:"c",
   note:"From Latin 'facilitas'. A service, building, or amenity provided.\nPlural: faciliteiten.",
   example:"A: Het hotel heeft uitstekende faciliteiten.\nB: Zoals een zwembad en een fitnessruimte?\nA: Ja, en gratis wifi en een restaurant.\nB: Klinkt goed voor die prijs.",
   exampleSrc:"A: The hotel has excellent facilities.\nB: Like a swimming pool and a fitness room?\nA: Yes, and free wifi and a restaurant.\nB: Sounds good for that price.",
   funFact:"In Dutch, 'faciliteit' covers a broader range than just buildings. It includes services and amenities. A Dutch company might list 'lease auto, laptop, en pensioenopbouw' as faciliteiten in a job posting."},

  {type:"teach", trg:"het burgerservicenummer", src:"citizen service number (BSN)", pos:"noun", gender:"n",
   note:"Compound: burger (citizen) + service + nummer.\nThe Dutch equivalent of a social security number.",
   example:"A: Wat is uw burgerservicenummer?\nB: Moet ik dat uit mijn hoofd weten?\nA: Het staat op uw identiteitskaart.\nB: Ah ja, ik zie het. Het begint met een negen.",
   exampleSrc:"A: What is your citizen service number?\nB: Do I have to know it by heart?\nA: It's on your identity card.\nB: Ah yes, I see it. It starts with a nine.",
   funFact:"The BSN (burgerservicenummer) was introduced in 2007, replacing the sofinummer. Every resident of the Netherlands gets one. It is used for healthcare, taxes, and government services."},

  {type:"teach", trg:"de inzage", src:"inspection, viewing (of documents)", pos:"noun", gender:"c",
   note:"From 'inzien' (to inspect/view). Formal term for the right to view documents.",
   example:"A: U heeft recht op inzage in uw medisch dossier.\nB: Hoe vraag ik dat aan?\nA: Via uw huisarts of het ziekenhuis.\nB: Kan ik ook inzage krijgen in mijn belastinggegevens?",
   exampleSrc:"A: You have the right to inspect your medical file.\nB: How do I request that?\nA: Through your GP or the hospital.\nB: Can I also get access to view my tax records?",
   funFact:"Under Dutch privacy law (AVG/GDPR), every citizen has recht op inzage: the right to see what personal data organizations hold about them. This right is actively used in the Netherlands."},

  {type:"tip", title:"Financial Administration Terms",
   text:"Dutch financial vocabulary often uses compounds:\n\n- incasso + kosten = incassokosten (collection costs)\n- incasso + machtiging = incassomachtiging (direct debit)\n- inkomen + probleem = inkomensprobleem (income problem)\n- burger + service + nummer = burgerservicenummer (BSN)\n\nThe linking -s- appears when the first part is a noun ending in a consonant cluster or when convention requires it.",
   deepDive:{title:"Dutch Financial System Basics",
    text:"Key financial concepts for living in the Netherlands:\n\n- BSN: your unique citizen number (needed everywhere)\n- DigiD: digital identity for government services\n- iDEAL: online payment system (nearly universal)\n- Incassomachtiging: automatic bill payment\n- Toeslagen: government subsidies (huurtoeslag, zorgtoeslag)\n\nUnderstanding these terms is essential for dealing with Dutch bureaucracy, which is mostly digital."}},

  {type:"mc", q:"Welk woord betekent 'direct debit authorization'?",
   opts:["de incassomachtiging","de incassokosten","de faciliteit","de inzage"],
   ans:"de incassomachtiging",
   hint:"Incasso (collection) + machtiging (authorization). Permission to deduct from your account."},

  {type:"fb", s:"Als je niet op tijd betaalt, komen er {1} bij.",
   a:["incassokosten"], opts:["incassokosten","faciliteiten","inzage","inkomensprobleem"],
   hint:"Extra fees added when a bill goes to a debt collection agency.",
   sSrc:"If you don't pay on time, collection costs are added."},

  {type:"mc", q:"Wat is uw burgerservicenummer? Wat is het 'burgerservicenummer'?",
   opts:["the Dutch citizen service number, like a social security number","a phone number for government services","a bank account number","a postal code"],
   ans:"the Dutch citizen service number, like a social security number",
   hint:"Burger (citizen) + service + nummer. A unique ID number for every Dutch resident."},

  {type:"fb", s:"Het hotel heeft uitstekende {1}.",
   a:["faciliteiten"], opts:["faciliteiten","incassokosten","inzage","incassomachtiging"],
   hint:"Services and amenities provided by a building or organization.",
   sSrc:"The hotel has excellent facilities."},

  {type:"match", pairs:[
    {trg:"incassokosten", src:"collection costs"},
    {trg:"incassomachtiging", src:"direct debit authorization"},
    {trg:"inkomensprobleem", src:"income problem"},
    {trg:"faciliteit", src:"facility"},
    {trg:"burgerservicenummer", src:"citizen service number"},
    {trg:"inzage", src:"inspection of documents"}
  ]},

  {type:"mc", q:"U heeft recht op inzage in uw dossier. Wat is 'inzage'?",
   opts:["the right to view or inspect documents","a type of insurance","a medical procedure","a court hearing"],
   ans:"the right to view or inspect documents",
   hint:"From inzien (to look into). The formal right to examine records or files."},

  {type:"fb", s:"Steeds meer huishoudens hebben een {1} door stijgende kosten.",
   a:["inkomensprobleem"], opts:["inkomensprobleem","incassokosten","burgerservicenummer","inzage"],
   hint:"When your income (inkomen) is not enough to cover expenses.",
   sSrc:"More and more households have an income problem due to rising costs."},

  {type:"drag_fill", s:"Om een {1} af te geven, heeft u uw {2} en een geldige {3} nodig.",
   blanks:{"1":"incassomachtiging","2":"burgerservicenummer","3":"identiteitskaart"},
   pool:["incassomachtiging","burgerservicenummer","identiteitskaart","inzage","faciliteit"],
   hint:"To authorize automatic payments, you need your citizen ID number and a valid ID document."}
]};
export default LESSON_9;
