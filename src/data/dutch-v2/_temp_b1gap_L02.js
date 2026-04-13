// L02: Law and Justice — 20 B1 gap words
const LESSON_2 = {
  id:"nlv2_b1gap_l2", title:"Recht en Justitie", icon:"\u{2696}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Law and Justice",
     desc:"Learn Dutch vocabulary for legal matters, courts, and crime. Essential words for understanding the news and civic life.",
     goals:["Master 20 legal and justice terms","Discuss crime and punishment","Understand Dutch legal system vocabulary"]},

    {type:"teach", trg:"Justitie", src:"Justice (department/ministry)", pos:"noun", gender:"c",
     note:"Common gender (de). Refers to the justice system or ministry.",
     example:"A: Het ministerie van Justitie heeft een nieuw plan.\nB: Waar gaat het over?",
     exampleSrc:"A: The Ministry of Justice has a new plan.\nB: What is it about?",
     funFact:"In the Netherlands, the full name is 'Ministerie van Justitie en Veiligheid' (Justice and Security)."},

    {type:"teach", trg:"de aanklacht", src:"the charge / the accusation", pos:"noun", gender:"c",
     note:"Common gender (de). A formal legal charge.",
     example:"A: Er is een aanklacht ingediend.\nB: Tegen wie?",
     exampleSrc:"A: A charge has been filed.\nB: Against whom?",
     funFact:"From 'aanklagen' (to accuse). The 'klacht' part is related to English 'claim'."},

    {type:"teach", trg:"aanklagen", src:"to accuse / to prosecute", pos:"verb", gender:null,
     note:"Separable verb. Ik klaag aan, jij klaagt aan.",
     example:"A: Ze willen hem aanklagen voor fraude.\nB: Heeft hij een advocaat?",
     exampleSrc:"A: They want to prosecute him for fraud.\nB: Does he have a lawyer?",
     funFact:"Aan (on) + klagen (to complain). You 'complain onto' someone formally."},

    {type:"teach", trg:"de afpersing", src:"the extortion / the blackmail", pos:"noun", gender:"c",
     note:"Common gender (de). A serious criminal offense.",
     example:"A: Hij is gearresteerd voor afpersing.\nB: Dat is een zwaar misdrijf.",
     exampleSrc:"A: He was arrested for extortion.\nB: That is a serious crime.",
     funFact:"From 'afpersen' (to extort). 'Persen' means to press, so you 'press off' someone."},

    {type:"mc",
     q:"Iemand dwingt je om geld te betalen met dreigementen. Wat is dit?",
     opts:["afpersing","aanklacht","afrekening","aanbieding"],
     ans:"afpersing",
     hint:"Think about the crime where someone uses threats to force payment."},

    {type:"teach", trg:"afpersen", src:"to extort / to blackmail", pos:"verb", gender:null,
     note:"Separable verb. Ik pers af, jij perst af.",
     example:"A: Ze probeerden hem af te persen.\nB: Heeft hij de politie gebeld?",
     exampleSrc:"A: They tried to extort him.\nB: Did he call the police?",
     funFact:"Dutch law treats afpersing as a serious offense, punishable by up to 9 years in prison."},

    {type:"teach", trg:"het advocatenkantoor", src:"the law firm", pos:"noun", gender:"n",
     note:"Neuter gender (het). Advocaat (lawyer) + kantoor (office).",
     example:"A: Mijn zus werkt bij een groot advocatenkantoor.\nB: In Amsterdam?",
     exampleSrc:"A: My sister works at a big law firm.\nB: In Amsterdam?",
     funFact:"Dutch 'advocaat' comes from Latin 'advocatus'. Also the name of a famous Dutch egg liqueur!"},

    {type:"teach", trg:"bekeuren", src:"to fine / to give a ticket", pos:"verb", gender:null,
     note:"Inseparable verb. Ik bekeur, jij bekeurt.",
     example:"A: De agent heeft me bekeurd.\nB: Waarvoor? Te hard rijden?",
     exampleSrc:"A: The officer fined me.\nB: For what? Speeding?",
     funFact:"From 'keur' (inspection/standard). The police 'inspects' your behavior and finds it lacking."},

    {type:"teach", trg:"bekennen", src:"to confess / to admit", pos:"verb", gender:null,
     note:"Inseparable verb. Ik beken, jij bekent.",
     example:"A: Heeft de verdachte bekend?\nB: Ja, hij heeft alles toegegeven.",
     exampleSrc:"A: Did the suspect confess?\nB: Yes, he admitted everything.",
     funFact:"Related to 'kennen' (to know). To confess is to 'make known'. Same root as German 'bekennen'."},

    {type:"fb",
     s:"De verdachte heeft het misdrijf {1} bij de rechter.",
     a:["bekend"],
     opts:["bekend","bekeurd","afgepersed","aangeklaagd"],
     hint:"Which word means the suspect admitted to committing the crime?",
     sSrc:"The suspect {1} the crime before the judge."},

    {type:"teach", trg:"bedreigen", src:"to threaten", pos:"verb", gender:null,
     note:"Inseparable verb. Ik bedreig, jij bedreigt.",
     example:"A: Iemand heeft haar bedreigd.\nB: Ze moet de politie bellen!",
     exampleSrc:"A: Someone threatened her.\nB: She should call the police!",
     funFact:"Be- prefix + dreigen (to threaten). The prefix intensifies the action."},

    {type:"teach", trg:"het banditisme", src:"the banditry", pos:"noun", gender:"n",
     note:"Neuter gender (het). Organized criminal activity.",
     example:"A: Het banditisme in de regio neemt toe.\nB: Er is meer politie nodig.",
     exampleSrc:"A: Banditry in the region is increasing.\nB: More police are needed.",
     funFact:"From Italian 'bandito'. Used in Dutch media for organized crime activity."},

    {type:"teach", trg:"begaan", src:"to commit (a crime)", pos:"verb", gender:null,
     note:"Inseparable verb. Often with 'misdrijf' or 'fout'.",
     example:"A: Hij heeft een ernstig misdrijf begaan.\nB: Welke straf krijgt hij?",
     exampleSrc:"A: He committed a serious crime.\nB: What punishment will he get?",
     funFact:"Different from 'gaan' (to go). 'Begaan' with a crime means to do something wrong."},

    {type:"teach", trg:"de barrière", src:"the barrier", pos:"noun", gender:"c",
     note:"Common gender (de). Physical or figurative obstacle.",
     example:"A: Er zijn veel barrières in het rechtssysteem.\nB: Vooral voor mensen zonder geld.",
     exampleSrc:"A: There are many barriers in the legal system.\nB: Especially for people without money.",
     funFact:"French loanword. Pronounced with a French accent in Dutch: bar-ee-AIR-uh."},

    {type:"mc",
     q:"De man heeft een misdrijf ___. Nu moet hij naar de rechter.",
     opts:["begaan","bekeurd","bedreigd","bekend"],
     ans:"begaan",
     hint:"Which verb collocates with 'misdrijf' to mean carrying out a criminal act?"},

    {type:"teach", trg:"de bekendheid", src:"the fame / the familiarity", pos:"noun", gender:"c",
     note:"Common gender (de). From 'bekend' (known/famous).",
     example:"A: Zijn bekendheid groeit elke dag.\nB: Iedereen kent hem nu.",
     exampleSrc:"A: His fame grows every day.\nB: Everyone knows him now.",
     funFact:"The suffix '-heid' creates abstract nouns, like English '-ness'. Bekend + heid = famousness."},

    {type:"teach", trg:"de Senaat", src:"the Senate", pos:"noun", gender:"c",
     note:"Common gender (de). The upper house of Dutch parliament.",
     example:"A: De Senaat moet het wetsvoorstel goedkeuren.\nB: Wanneer stemmen ze?",
     exampleSrc:"A: The Senate must approve the bill.\nB: When do they vote?",
     funFact:"The Dutch Senate is called 'Eerste Kamer' (First Chamber). 'Senaat' is the formal Latin-derived name."},

    {type:"teach", trg:"de affaire", src:"the affair / the scandal", pos:"noun", gender:"c",
     note:"Common gender (de). French loanword for a scandal or controversial event.",
     example:"A: De politieke affaire is groot nieuws.\nB: Ja, het staat overal in de krant.",
     exampleSrc:"A: The political affair is big news.\nB: Yes, it is in all the newspapers.",
     funFact:"Used for political scandals more than romantic affairs. The 'Toeslagenaffaire' shook Dutch politics."},

    {type:"teach", trg:"het antisociaal", src:"antisocial (behavior)", pos:"adj", gender:null,
     note:"Used as adjective. Describes behavior harmful to society.",
     example:"A: Dat is echt antisociaal gedrag.\nB: Ja, hij houdt geen rekening met anderen.",
     exampleSrc:"A: That is really antisocial behavior.\nB: Yes, he does not consider others.",
     funFact:"In Dutch, 'antisociaal' specifically means harmful to society, not just shy or withdrawn."},

    {type:"teach", trg:"het autoritair", src:"authoritarian", pos:"adj", gender:null,
     note:"Adjective. Describes a strict, domineering leadership style.",
     example:"A: De nieuwe directeur is heel autoritair.\nB: Niemand durft iets te zeggen.",
     exampleSrc:"A: The new director is very authoritarian.\nB: Nobody dares to say anything.",
     funFact:"From French 'autoritaire'. Dutch values 'overleg' (consultation), so this is a negative label."},

    {type:"match", pairs:[
      {trg:"aanklacht", src:"accusation"},
      {trg:"afpersing", src:"extortion"},
      {trg:"bekeuren", src:"to fine"},
      {trg:"bekennen", src:"to confess"},
      {trg:"bedreigen", src:"to threaten"}
    ]},

    {type:"fb",
     s:"De politie heeft hem {1} voor te hard rijden.",
     a:["bekeurd"],
     opts:["bekeurd","bedreigd","begaan","bekend"],
     hint:"Which past participle means the police gave someone a fine?",
     sSrc:"The police {1} him for speeding."},

    {type:"mc",
     q:"Welk woord beschrijft iemand die heel streng leidt en geen tegenspraak duldt?",
     opts:["autoritair","antisociaal","absurd","abstract"],
     ans:"autoritair",
     hint:"Think of a leadership style where the boss demands total obedience."}
  ]
};
export default LESSON_2;
