// L20: Remaining Essentials, 20 A1 gap words
const LESSON_20 = {
  id:"nlv2_a1gap_l20", title:"Overige Basiswoorden", icon:"\u{1F4CC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Remaining Essentials",
     desc:"The final batch of essential A1 words. A mix of important nouns, verbs, and adjectives that complete your basic Dutch vocabulary.",
     goals:["Master 20 remaining essential words","Cover final gaps in A1 vocabulary","Build confidence with everyday Dutch"]},

    {type:"teach", trg:"de hamburger", src:"the hamburger", pos:"noun", gender:"c",
     note:"Common gender (de). International fast food word.",
     example:"A: Wil je een hamburger?\nB: Ja, met kaas alsjeblieft!",
     exampleSrc:"A: Do you want a hamburger?\nB: Yes, with cheese please!",
     funFact:"Named after Hamburg, Germany. Now a universal word in every language."},

    {type:"teach", trg:"het hotdog", src:"the hot dog", pos:"noun", gender:"n",
     note:"Neuter (het). Loanword from English.\nA sausage in a long bread roll.",
     example:"A: Een hotdog, alsjeblieft.\nB: Met mosterd of ketchup?",
     exampleSrc:"A: A hot dog, please.\nB: With mustard or ketchup?",
     funFact:"International word. Dutch street food includes hotdogs alongside frikandellen."},

    {type:"teach", trg:"de mobiel", src:"the mobile phone", pos:"noun", gender:"c",
     note:"Common gender (de). Short for 'mobiele telefoon'.",
     example:"A: Waar is je mobiel?\nB: In mijn jas, geloof ik.",
     exampleSrc:"A: Where is your mobile?\nB: In my coat, I think.",
     funFact:"The Dutch also say 'telefoon' or 'mobieltje' (diminutive). Everyone has one."},

    {type:"teach", trg:"de navigatie", src:"the navigation / GPS", pos:"noun", gender:"c",
     note:"Common gender (de). Used for car GPS systems.",
     example:"A: Zet de navigatie aan.\nB: Oké, wat is het adres?",
     exampleSrc:"A: Turn on the navigation.\nB: Okay, what is the address?",
     funFact:"From Latin. The Dutch use 'navigatie' or 'nav' for GPS. Everyone uses it."},

    {type:"mc",
     q:"Waar is je ___? Ik wil je bellen.",
     opts:["mobiel","navigatie","hamburger","hotdog"],
     ans:"mobiel",
     hint:"Which device do you use to make and receive phone calls?"},

    {type:"teach", trg:"het boterstraat", src:"the butter street", pos:"noun", gender:"n",
     note:"Neuter noun (het). A typical Dutch street name.",
     example:"A: Ik woon op de Boterstraat.\nB: Dat klinkt gezellig!",
     exampleSrc:"A: I live on Butter Street.\nB: That sounds cozy!",
     funFact:"Dutch streets are named after food, trades, and nature. Kaasmarkt, Vismarkt, etc."},

    {type:"teach", trg:"het hoofdstuk", src:"the chapter", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: hoofd (main) + stuk (piece).",
     example:"A: Lees hoofdstuk vier voor morgen.\nB: Oké, dat doe ik.",
     exampleSrc:"A: Read chapter four for tomorrow.\nB: Okay, I will.",
     funFact:"Literally 'head piece'. The main divisions of a book or story."},

    {type:"teach", trg:"de bovenkast", src:"the upper cabinet", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: boven (above) + kast (cupboard).",
     example:"A: De borden staan in de bovenkast.\nB: Ik kan er niet bij!",
     exampleSrc:"A: The plates are in the upper cabinet.\nB: I can't reach it!",
     funFact:"Transparent compound. Kitchen storage above counter height."},

    {type:"teach", trg:"het keukenblok", src:"the kitchen counter unit", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: keuken + blok (block).",
     example:"A: Het keukenblok is nieuw.\nB: Ja, het ziet er mooi uit.",
     exampleSrc:"A: The kitchen counter is new.\nB: Yes, it looks nice.",
     funFact:"A very Dutch compound. The modular kitchen counter unit."},

    {type:"teach", trg:"het ligbad", src:"the bathtub", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: lig (lie) + bad (bath).",
     example:"A: Heb je een ligbad of een douche?\nB: Een douche, geen ligbad.",
     exampleSrc:"A: Do you have a bathtub or a shower?\nB: A shower, no bathtub.",
     funFact:"Literally 'lying bath'. You lie down in it. Many Dutch homes only have showers."},

    {type:"fb",
     s:"De borden staan in de {1}.",
     a:["bovenkast"],
     opts:["bovenkast","koelkast","badkamer","garage"],
     hint:"Where are plates stored? In a cabinet above the kitchen counter.",
     sSrc:"The plates are in the {1}."},

    {type:"teach", trg:"de bankzaak", src:"the banking matter / bank business", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: bank + zaak (matter/business).",
     example:"A: Ik moet een bankzaak regelen.\nB: Ga naar het kantoor van de bank.",
     exampleSrc:"A: I need to handle a banking matter.\nB: Go to the bank office.",
     funFact:"'Zaak' means both 'matter/affair' and 'shop/business'. Context decides."},

    {type:"teach", trg:"het appelsap", src:"the apple juice", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: appel + sap (juice).",
     example:"A: Wil je appelsap?\nB: Ja graag, een groot glas.",
     exampleSrc:"A: Do you want apple juice?\nB: Yes please, a big glass.",
     funFact:"A very common Dutch drink. Transparent compound: apple + juice."},

    {type:"teach", trg:"de calorie", src:"the calorie", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: calorieen.",
     example:"A: Hoeveel calorieen heeft dat?\nB: Ongeveer tweehonderd.",
     exampleSrc:"A: How many calories does that have?\nB: About two hundred.",
     funFact:"International scientific word. From Latin 'calor' (heat)."},

    {type:"teach", trg:"de luchtvaartmaatschappij", src:"the airline", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: luchtvaart (aviation) + maatschappij (company).",
     example:"A: Welke luchtvaartmaatschappij vliegt naar Spanje?\nB: KLM!",
     exampleSrc:"A: Which airline flies to Spain?\nB: KLM!",
     funFact:"One of the longest Dutch words! KLM (Royal Dutch Airlines) is the world's oldest airline."},

    {type:"mc",
     q:"KLM is een Nederlandse ___.",
     opts:["navigatie","luchtvaartmaatschappij","busmaatschappij","bankzaak"],
     ans:"luchtvaartmaatschappij",
     hint:"What type of company operates airplanes? A compound word with 'aviation'."},

    {type:"teach", trg:"de elektriciteit", src:"the electricity", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek/Latin via French.",
     example:"A: De elektriciteit is uitgevallen.\nB: Heb je kaarsen?",
     exampleSrc:"A: The electricity went out.\nB: Do you have candles?",
     funFact:"International word from Greek 'elektron' (amber). Static electricity was first observed with amber."},

    {type:"teach", trg:"het gas", src:"the gas", pos:"noun", gender:"n",
     note:"Neuter noun (het). Natural gas for heating/cooking.",
     example:"A: We koken op gas.\nB: Wij ook, maar we gaan over op elektrisch.",
     exampleSrc:"A: We cook on gas.\nB: Us too, but we're switching to electric.",
     funFact:"The Netherlands had huge gas reserves in Groningen. Word invented by Dutch chemist Van Helmont!"},

    {type:"teach", trg:"de benzine", src:"the gasoline", pos:"noun", gender:"c",
     note:"Common gender (de). Vehicle fuel.",
     example:"A: De benzine is duur.\nB: Ja, bijna twee euro per liter!",
     exampleSrc:"A: Gasoline is expensive.\nB: Yes, almost two euros per liter!",
     funFact:"Dutch fuel prices are among the highest in the world due to taxes."},

    {type:"teach", trg:"de chip", src:"the chip / french fry", pos:"noun", gender:"c",
     note:"Common gender (de). Also: computer chip or payment chip.",
     example:"A: Betaal je met de chip of contactloos?\nB: Contactloos, makkelijker.",
     exampleSrc:"A: Are you paying with the chip or contactless?\nB: Contactless, easier.",
     funFact:"In the Netherlands, 'pinnen' (chip payment) is more common than cash. Very digital country."},

    {type:"teach", trg:"de natuurkunde", src:"physics", pos:"noun", gender:"c",
     note:"Common gender (de). School subject. Compound: natuur + kunde (knowledge).",
     example:"A: Ik heb natuurkunde vandaag.\nB: Is het moeilijk?",
     exampleSrc:"A: I have physics today.\nB: Is it difficult?",
     funFact:"Literally 'nature knowledge'. Dutch school subjects have beautifully descriptive names."},

    {type:"match", pairs:[
      {trg:"luchtvaartmaatschappij", src:"airline"},
      {trg:"elektriciteit", src:"electricity"},
      {trg:"natuurkunde", src:"physics"},
      {trg:"mobiel", src:"mobile phone"}
    ]}
  ]
};
export default LESSON_20;
