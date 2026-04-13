// L01: Shopping and Deals — 20 B1 gap words
const LESSON_1 = {
  id:"nlv2_b1gap_l1", title:"Koopjes en Aanbiedingen", icon:"\u{1F6D2}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Shopping and Deals",
     desc:"Learn essential Dutch vocabulary for shopping, paying, and finding bargains. From special offers to bank cards.",
     goals:["Master 20 shopping and transaction words","Talk about prices and discounts","Handle payments in Dutch"]},

    {type:"teach", trg:"de aanbieding", src:"the special offer", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanbieden' (to offer).",
     example:"A: Heb je de aanbieding gezien?\nB: Ja, alles is halve prijs!",
     exampleSrc:"A: Have you seen the special offer?\nB: Yes, everything is half price!",
     funFact:"Dutch supermarkets like Albert Heijn have famous weekly 'aanbiedingen' flyers."},

    {type:"teach", trg:"de aankoop", src:"the purchase", pos:"noun", gender:"c",
     note:"Common gender (de). Aan (on) + koop (buy).",
     example:"A: Ben je blij met je aankoop?\nB: Heel blij! Het was een goede deal.",
     exampleSrc:"A: Are you happy with your purchase?\nB: Very happy! It was a good deal.",
     funFact:"Cognate with German 'Ankauf'. The 'koop' part relates to English 'cheap' (originally meant 'trade')."},

    {type:"teach", trg:"aanschaffen", src:"to purchase / to acquire", pos:"verb", gender:null,
     note:"Separable verb. Ik schaf aan, jij schaft aan.",
     example:"A: Wil je een nieuwe laptop aanschaffen?\nB: Ja, mijn oude is kapot.",
     exampleSrc:"A: Do you want to buy a new laptop?\nB: Yes, my old one is broken.",
     funFact:"More formal than 'kopen'. Used for bigger purchases. 'Schaffen' once meant 'to create'."},

    {type:"teach", trg:"afrekenen", src:"to pay / to settle up", pos:"verb", gender:null,
     note:"Separable verb. Ik reken af, jij rekent af.",
     example:"A: Kan ik hier afrekenen?\nB: Ja, kassa twee is open.",
     exampleSrc:"A: Can I pay here?\nB: Yes, register two is open.",
     funFact:"Af (off) + rekenen (to calculate). You 'calculate off' your bill. Like German 'abrechnen'."},

    {type:"mc",
     q:"Wat betekent 'afrekenen'?",
     opts:["betalen","winkelen","bestellen","terugbrengen"],
     ans:"betalen",
     hint:"Think about what you do at the register when you are done shopping."},

    {type:"teach", trg:"de afslag", src:"the discount / the exit", pos:"noun", gender:"c",
     note:"Common gender (de). Two meanings: price reduction or highway exit.",
     example:"A: Er is twintig procent afslag op alles.\nB: Laten we snel gaan!",
     exampleSrc:"A: There is twenty percent discount on everything.\nB: Let's go quickly!",
     funFact:"From 'afslaan' (to turn off / to knock off). The highway meaning is also very common."},

    {type:"teach", trg:"de bankkaart", src:"the bank card", pos:"noun", gender:"c",
     note:"Common gender (de). Bank + kaart compound.",
     example:"A: Heb je je bankkaart bij je?\nB: Ja, in mijn portemonnee.",
     exampleSrc:"A: Do you have your bank card with you?\nB: Yes, in my wallet.",
     funFact:"More common in Belgium. In the Netherlands, 'pinpas' is the everyday word for debit card."},

    {type:"teach", trg:"de bankpas", src:"the debit card", pos:"noun", gender:"c",
     note:"Common gender (de). The standard Dutch term for a debit card.",
     example:"A: Kan ik met mijn bankpas betalen?\nB: Ja, pinnen kan hier.",
     exampleSrc:"A: Can I pay with my debit card?\nB: Yes, you can use your PIN here.",
     funFact:"'Pinnen' (using your PIN) is the Dutch word for paying by card. Cash is rare in the Netherlands."},

    {type:"fb",
     s:"Ik wil graag {1}. Waar is de kassa?",
     a:["afrekenen"],
     opts:["afrekenen","aanschaffen","aanbieden","afslaan"],
     hint:"Which separable verb means to settle your bill at a store?",
     sSrc:"I would like to {1}. Where is the register?"},

    {type:"teach", trg:"de accijns", src:"the excise tax", pos:"noun", gender:"c",
     note:"Common gender (de). Tax on specific goods like alcohol and fuel.",
     example:"A: Waarom is benzine zo duur?\nB: Door de accijns op brandstof.",
     exampleSrc:"A: Why is gasoline so expensive?\nB: Because of the excise tax on fuel.",
     funFact:"From Latin 'accidere'. The Netherlands has some of the highest excise taxes in Europe."},

    {type:"teach", trg:"de aflevering", src:"the delivery / the episode", pos:"noun", gender:"c",
     note:"Common gender (de). Two meanings depending on context.",
     example:"A: Wanneer is de aflevering van het pakket?\nB: Morgen tussen twee en vier.",
     exampleSrc:"A: When is the delivery of the package?\nB: Tomorrow between two and four.",
     funFact:"For TV shows, 'aflevering' means episode. Context always makes the meaning clear."},

    {type:"teach", trg:"de afvalcontainer", src:"the waste container", pos:"noun", gender:"c",
     note:"Common gender (de). Afval (waste) + container.",
     example:"A: Waar staat de afvalcontainer?\nB: Achter het gebouw, bij de parkeerplaats.",
     exampleSrc:"A: Where is the waste container?\nB: Behind the building, near the parking lot.",
     funFact:"Dutch recycling is very organized. Different containers for paper, glass, plastic, and residual waste."},

    {type:"teach", trg:"het abonnement", src:"the subscription", pos:"noun", gender:"n",
     note:"Neuter gender (het). From French 'abonnement'.",
     example:"A: Heb je een abonnement op de krant?\nB: Nee, ik lees alles online.",
     exampleSrc:"A: Do you have a newspaper subscription?\nB: No, I read everything online.",
     funFact:"Used for gym memberships, streaming services, and public transport passes alike."},

    {type:"mc",
     q:"Je wilt de trein elke dag nemen. Wat heb je nodig?",
     opts:["een abonnement","een afslag","een aanbieding","een accijns"],
     ans:"een abonnement",
     hint:"Think about what regular travelers buy to save money on repeated trips."},

    {type:"teach", trg:"de afname", src:"the decrease / the purchase", pos:"noun", gender:"c",
     note:"Common gender (de). Can mean decrease or buying (of goods).",
     example:"A: Er is een afname van het aantal klanten.\nB: We moeten iets veranderen.",
     exampleSrc:"A: There is a decrease in the number of customers.\nB: We need to change something.",
     funFact:"From 'afnemen': take away (decrease) or take off someone's hands (purchase)."},

    {type:"teach", trg:"het accessoire", src:"the accessory", pos:"noun", gender:"n",
     note:"Neuter gender (het). French loanword, plural: accessoires.",
     example:"A: Wat een mooi accessoire!\nB: Dank je, het is een cadeau.",
     exampleSrc:"A: What a nice accessory!\nB: Thanks, it is a gift.",
     funFact:"Pronounced the French way in Dutch. Fashion accessories are big in the Netherlands."},

    {type:"teach", trg:"de aanmaning", src:"the payment reminder", pos:"noun", gender:"c",
     note:"Common gender (de). A formal request to pay an overdue bill.",
     example:"A: Ik heb een aanmaning gekregen.\nB: Betaal snel, anders komen er kosten bij.",
     exampleSrc:"A: I received a payment reminder.\nB: Pay quickly, or extra charges will be added.",
     funFact:"From 'aanmanen' (to urge). Getting an 'aanmaning' in the Netherlands means you are late on a bill."},

    {type:"teach", trg:"de afzetterij", src:"the rip-off / the fraud", pos:"noun", gender:"c",
     note:"Common gender (de). Informal but widely used.",
     example:"A: Tien euro voor een kop koffie? Dat is afzetterij!\nB: Ja, belachelijk duur.",
     exampleSrc:"A: Ten euros for a cup of coffee? That is a rip-off!\nB: Yes, ridiculously expensive.",
     funFact:"From 'afzetten' (to cheat). Dutch people are known for being direct about unfair prices."},

    {type:"fb",
     s:"Vijftig euro voor een flesje water? Dat is pure {1}!",
     a:["afzetterij"],
     opts:["afzetterij","aanbieding","aflevering","aanmaning"],
     hint:"Which word describes being charged an outrageously unfair price?",
     sSrc:"Fifty euros for a bottle of water? That is pure {1}!"},

    {type:"teach", trg:"het account", src:"the account", pos:"noun", gender:"n",
     note:"Neuter gender (het). English loanword used in Dutch.",
     example:"A: Heb je al een account aangemaakt?\nB: Ja, ik heb me net geregistreerd.",
     exampleSrc:"A: Have you already created an account?\nB: Yes, I just registered.",
     funFact:"Directly borrowed from English. Dutch also uses 'rekening' for bank accounts."},

    {type:"match", pairs:[
      {trg:"aanbieding", src:"special offer"},
      {trg:"aankoop", src:"purchase"},
      {trg:"afrekenen", src:"to pay / settle up"},
      {trg:"abonnement", src:"subscription"},
      {trg:"aanmaning", src:"payment reminder"}
    ]},

    {type:"mc",
     q:"Je krijgt een brief omdat je een rekening niet hebt betaald. Wat is dit?",
     opts:["een aanmaning","een aanbieding","een aankoop","een abonnement"],
     ans:"een aanmaning",
     hint:"Think about the formal notice you receive when a bill is overdue."},

    {type:"fb",
     s:"Ik heb een {1} op het tijdschrift. Het komt elke maand.",
     a:["abonnement"],
     opts:["abonnement","aanbieding","account","aankoop"],
     hint:"What do you call a recurring arrangement to receive something regularly?",
     sSrc:"I have a {1} to the magazine. It comes every month."}
  ]
};
export default LESSON_1;
