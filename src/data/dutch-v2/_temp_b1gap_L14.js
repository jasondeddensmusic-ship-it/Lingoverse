// L14: Finance and Economy — 20 B1 gap words
const LESSON_14 = {
  id:"nlv2_b1gap_l14", title:"Geld en Economie", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Finance and Economy",
     desc:"Learn Dutch vocabulary for money, investing, and the economy. Essential for understanding financial news and conversations.",
     goals:["Master 20 finance and economy terms","Discuss financial topics","Understand economic news vocabulary"]},

    {type:"teach", trg:"het aandeel", src:"the share / the stock", pos:"noun", gender:"n",
     note:"Neuter gender (het). A financial share or a portion.",
     example:"A: Ik heb aandelen in dat bedrijf.\nB: Gaan ze goed?",
     exampleSrc:"A: I have shares in that company.\nB: Are they doing well?",
     funFact:"Aan + deel (part). You have 'a part in' a company. The Amsterdam Stock Exchange (1602) was the world's first."},

    {type:"teach", trg:"aflossen", src:"to repay / to pay off", pos:"verb", gender:null,
     note:"Separable verb. Ik los af, jij lost af.",
     example:"A: We moeten de hypotheek aflossen.\nB: Hoeveel betalen jullie per maand?",
     exampleSrc:"A: We need to pay off the mortgage.\nB: How much do you pay per month?",
     funFact:"Af (off) + lossen (to release). You 'release off' your debt. Central to Dutch home ownership."},

    {type:"teach", trg:"de afschrijving", src:"the depreciation / the write-off", pos:"noun", gender:"c",
     note:"Common gender (de). The decrease in value over time.",
     example:"A: De afschrijving van de auto is hoog.\nB: Ja, in het eerste jaar verliest hij veel waarde.",
     exampleSrc:"A: The depreciation of the car is high.\nB: Yes, in the first year it loses a lot of value.",
     funFact:"Af + schrijving (writing). You 'write off' value from the books. Standard accounting term."},

    {type:"teach", trg:"de baat", src:"the benefit / the profit", pos:"noun", gender:"c",
     note:"Common gender (de). Advantage or gain.",
     example:"A: Wat is de baat van deze investering?\nB: Op lange termijn veel winst.",
     exampleSrc:"A: What is the benefit of this investment?\nB: A lot of profit in the long term.",
     funFact:"'Baat het niet, dan schaadt het niet' = If it doesn't help, it won't hurt. Famous Dutch expression."},

    {type:"mc",
     q:"Je koopt een deel van een bedrijf op de beurs. Je koopt een ___.",
     opts:["aandeel","afschrijving","baat","aanleg"],
     ans:"aandeel",
     hint:"Which financial term describes owning a piece of a company?"},

    {type:"teach", trg:"baten", src:"to benefit / to help", pos:"verb", gender:null,
     note:"Regular verb. Ik baat, jij baat.",
     example:"A: Het baat niet om te klagen.\nB: Je hebt gelijk, laten we iets doen.",
     exampleSrc:"A: It does not help to complain.\nB: You are right, let's do something.",
     funFact:"Old Dutch word. 'Alle beetjes helpen, zei de mug, en ze beet in de koe' is a related proverb."},

    {type:"teach", trg:"het beheer", src:"the management / the administration", pos:"noun", gender:"n",
     note:"Neuter gender (het). Running and managing something.",
     example:"A: Het beheer van het fonds is in goede handen.\nB: Wie is de beheerder?",
     exampleSrc:"A: The management of the fund is in good hands.\nB: Who is the manager?",
     funFact:"From 'beheren' (to manage). Used for property, funds, websites, and nature reserves."},

    {type:"teach", trg:"de aanleg", src:"the construction / the talent", pos:"noun", gender:"c",
     note:"Common gender (de). Construction of infrastructure, or a natural talent.",
     example:"A: De aanleg van de weg duurt lang.\nB: Ja, het is een groot project.",
     exampleSrc:"A: The construction of the road is taking long.\nB: Yes, it is a big project.",
     funFact:"Also means talent: 'zij heeft aanleg voor muziek' = she has a talent for music."},

    {type:"teach", trg:"aanleveren", src:"to supply / to deliver", pos:"verb", gender:null,
     note:"Separable verb. Ik lever aan, jij levert aan.",
     example:"A: Kun je de documenten voor vrijdag aanleveren?\nB: Ja, dat lukt.",
     exampleSrc:"A: Can you deliver the documents by Friday?\nB: Yes, I can manage that.",
     funFact:"Aan (on) + leveren (to deliver). You deliver 'onto' someone. Very common in business email."},

    {type:"teach", trg:"aanmaken", src:"to create / to light (a fire)", pos:"verb", gender:null,
     note:"Separable verb. Ik maak aan, jij maakt aan.",
     example:"A: Ik moet een nieuw wachtwoord aanmaken.\nB: Kies een sterk wachtwoord.",
     exampleSrc:"A: I need to create a new password.\nB: Choose a strong password.",
     funFact:"Aan + maken (to make). Used for creating accounts, starting fires, and making sauces."},

    {type:"fb",
     s:"We moeten de lening binnen tien jaar {1}.",
     a:["aflossen"],
     opts:["aflossen","aanleveren","aanmaken","beheren"],
     hint:"Which verb means to gradually repay a loan or mortgage?",
     sSrc:"We must {1} the loan within ten years."},

    {type:"teach", trg:"het arrangement", src:"the arrangement / the package deal", pos:"noun", gender:"n",
     note:"Neuter gender (het). A prearranged deal or musical arrangement.",
     example:"A: Het hotel biedt een dinnerarrangement aan.\nB: Met een driegangenmenu?",
     exampleSrc:"A: The hotel offers a dinner arrangement.\nB: With a three-course menu?",
     funFact:"French loanword. In the Netherlands, 'arrangement' often means a package deal at hotels or restaurants."},

    {type:"teach", trg:"de activatie", src:"the activation", pos:"noun", gender:"c",
     note:"Common gender (de). From 'activeren' (to activate).",
     example:"A: De activatie van je account duurt 24 uur.\nB: Goed, ik wacht.",
     exampleSrc:"A: The activation of your account takes 24 hours.\nB: Okay, I'll wait.",
     funFact:"Latin origin. Used for bank cards, software licenses, and phone plans."},

    {type:"teach", trg:"activeren", src:"to activate", pos:"verb", gender:null,
     note:"Inseparable verb. Ik activeer, jij activeert.",
     example:"A: Heb je je nieuwe bankpas al geactiveerd?\nB: Nee, ik moet nog bellen.",
     exampleSrc:"A: Have you activated your new debit card yet?\nB: No, I still need to call.",
     funFact:"From Latin 'activare'. The same word structure exists in English, French, and German."},

    {type:"teach", trg:"automatiseren", src:"to automate", pos:"verb", gender:null,
     note:"Inseparable verb. Ik automatiseer, jij automatiseert.",
     example:"A: We willen het proces automatiseren.\nB: Dat bespaart veel tijd.",
     exampleSrc:"A: We want to automate the process.\nB: That will save a lot of time.",
     funFact:"From Greek 'automatos' (self-moving). A hot topic in Dutch business: more automation, fewer manual tasks."},

    {type:"mc",
     q:"Je hebt een nieuwe bankpas gekregen. Wat moet je eerst doen?",
     opts:["activeren","automatiseren","aflossen","aanleveren"],
     ans:"activeren",
     hint:"Which verb describes making a new card or account ready for use?"},

    {type:"teach", trg:"de arbeidsparticipatie", src:"labor participation", pos:"noun", gender:"c",
     note:"Common gender (de). The percentage of people who work.",
     example:"A: De arbeidsparticipatie van vrouwen is gestegen.\nB: Dat is goed nieuws.",
     exampleSrc:"A: Women's labor participation has increased.\nB: That is good news.",
     funFact:"A key Dutch economic indicator. The Netherlands has high part-time employment, especially among women."},

    {type:"teach", trg:"het actieplan", src:"the action plan", pos:"noun", gender:"n",
     note:"Neuter gender (het). Actie + plan compound.",
     example:"A: We hebben een actieplan nodig.\nB: Laten we morgen vergaderen.",
     exampleSrc:"A: We need an action plan.\nB: Let's meet tomorrow.",
     funFact:"Dutch management loves 'actieplannen'. They are concrete, with deadlines and responsibilities."},

    {type:"teach", trg:"de afwisseling", src:"the variety / the alternation", pos:"noun", gender:"c",
     note:"Common gender (de). Change and variety.",
     example:"A: Ik wil meer afwisseling in mijn werk.\nB: Misschien een andere baan zoeken?",
     exampleSrc:"A: I want more variety in my work.\nB: Maybe look for a different job?",
     funFact:"Af + wisseling (changing). 'Afwisseling is de kruid van het leven' = variety is the spice of life."},

    {type:"teach", trg:"de agglomeratie", src:"the metropolitan area", pos:"noun", gender:"c",
     note:"Common gender (de). A large urban area with surrounding towns.",
     example:"A: De agglomeratie Amsterdam heeft meer dan twee miljoen inwoners.\nB: Dat is groot!",
     exampleSrc:"A: The Amsterdam metropolitan area has more than two million inhabitants.\nB: That is big!",
     funFact:"From Latin. The Randstad (Amsterdam-Rotterdam-The Hague-Utrecht) is one of Europe's largest agglomerations."},

    {type:"match", pairs:[
      {trg:"aandeel", src:"share/stock"},
      {trg:"aflossen", src:"to repay"},
      {trg:"activeren", src:"to activate"},
      {trg:"actieplan", src:"action plan"},
      {trg:"afwisseling", src:"variety"}
    ]},

    {type:"fb",
     s:"De waarde van de auto daalt elk jaar. Dat heet {1}.",
     a:["afschrijving"],
     opts:["afschrijving","aflossing","activatie","arbeidsparticipatie"],
     hint:"Which financial term describes the decrease in value of an asset over time?",
     sSrc:"The value of the car decreases every year. That is called {1}."},

    {type:"mc",
     q:"Je wilt je werk minder saai maken. Je zoekt meer ___.",
     opts:["afwisseling","afschrijving","agglomeratie","arbeidsparticipatie"],
     ans:"afwisseling",
     hint:"Which word means having different tasks and not doing the same thing every day?"}
  ]
};
export default LESSON_14;
