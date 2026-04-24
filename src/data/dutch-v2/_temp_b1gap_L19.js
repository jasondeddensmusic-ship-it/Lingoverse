// L19: People and Relationships, 20 B1 gap words
const LESSON_19 = {
  id:"nlv2_b1gap_l19", title:"Mensen en Relaties", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"People and Relationships",
     desc:"Learn Dutch vocabulary for people, social roles, and relationships. Describe who people are and how they relate to each other.",
     goals:["Master 20 people and relationship words","Describe social roles","Talk about family and community"]},

    {type:"teach", trg:"de aanhouder", src:"the persistent person", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who does not give up.",
     example:"A: De aanhouder wint, zeggen ze.\nB: Ja, je moet niet te snel opgeven.",
     exampleSrc:"A: 'The persistent person wins,' they say.\nB: Yes, you shouldn't give up too quickly.",
     funFact:"'De aanhouder wint' is one of the most common Dutch proverbs. Literally: the one who persists, wins."},

    {type:"teach", trg:"de babyboomer", src:"the baby boomer", pos:"noun", gender:"c",
     note:"Common gender (de). Person born after World War II.",
     example:"A: Veel babyboomers gaan nu met pensioen.\nB: Dat zorgt voor krapte op de arbeidsmarkt.",
     exampleSrc:"A: Many baby boomers are retiring now.\nB: That causes tightness in the labor market.",
     funFact:"English loanword. The Dutch baby boom generation (1946-1964) is a major topic in pension debates."},

    {type:"teach", trg:"alletwee", src:"both (of them)", pos:"pron", gender:null,
     note:"Pronoun. Means 'both' when referring to two people or things.",
     example:"A: Welk shirt wil je?\nB: Ik neem ze alletwee!",
     exampleSrc:"A: Which shirt do you want?\nB: I'll take both of them!",
     funFact:"Alle (all) + twee (two). More informal than 'allebei'. Both forms are used interchangeably."},

    {type:"teach", trg:"de autodealer", src:"the car dealer", pos:"noun", gender:"c",
     note:"Common gender (de). A person or business selling cars.",
     example:"A: De autodealer biedt korting aan.\nB: Op welke modellen?",
     exampleSrc:"A: The car dealer is offering a discount.\nB: On which models?",
     funFact:"English 'dealer' is widely used in Dutch. 'Autohandelaar' is the pure Dutch alternative."},

    {type:"mc",
     q:"Een bekend Nederlands spreekwoord zegt: 'De ___ wint.'",
     opts:["aanhouder","begeleider","adviseur","beheerder"],
     ans:"aanhouder",
     hint:"Which word completes the proverb about perseverance leading to success?"},

    {type:"teach", trg:"de aandenken", src:"the souvenir / the keepsake", pos:"noun", gender:"n",
     note:"Neuter gender (het). An object kept as a memory.",
     example:"A: Dit is een aandenken aan onze vakantie.\nB: Wat een mooi beeldje!",
     exampleSrc:"A: This is a souvenir from our holiday.\nB: What a beautiful figurine!",
     funFact:"Aan + denken (to think). Something that makes you 'think of' a memory. Also 'souvenir' is used."},

    {type:"teach", trg:"het aanzoek", src:"the proposal (marriage)", pos:"noun", gender:"n",
     note:"Neuter gender (het). A marriage proposal.",
     example:"A: Hij deed haar een aanzoek op het strand.\nB: Wat romantisch! Zei ze ja?",
     exampleSrc:"A: He proposed to her on the beach.\nB: How romantic! Did she say yes?",
     funFact:"Aan + zoek (seeking). You 'seek onto' someone to be your partner. Very formal and romantic."},

    {type:"teach", trg:"de actievoerder", src:"the activist", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who actively campaigns.",
     example:"A: De actievoerders eisen strengere milieuwetten.\nB: Ze hebben gelijk.",
     exampleSrc:"A: The activists demand stricter environmental laws.\nB: They are right.",
     funFact:"Actie + voerder (carrier). Dutch activism has a long tradition: squatters, environmentalists, union movements."},

    {type:"teach", trg:"de batist", src:"the batiste (fabric)", pos:"noun", gender:"n",
     note:"Neuter gender (het). A fine, lightweight fabric.",
     example:"A: Dit is van batist.\nB: Heel zacht en licht materiaal.",
     exampleSrc:"A: This is made of batiste.\nB: Very soft and light material.",
     funFact:"Named after Jean-Baptiste Chambray, a French weaver. Used for fine shirts and handkerchiefs."},

    {type:"teach", trg:"babbelen", src:"to chat / to chatter", pos:"verb", gender:null,
     note:"Regular verb. Ik babbel, jij babbelt.",
     example:"A: We hebben heerlijk gebabbeld.\nB: Ja, twee uur lang! De tijd vloog.",
     exampleSrc:"A: We had a lovely chat.\nB: Yes, for two hours! Time flew.",
     funFact:"A cozy, informal word. 'Babbelen' is lighter than 'praten' (to talk). Very 'gezellig'."},

    {type:"fb",
     s:"Hij deed haar een {1} en ze zei ja! Ze gaan trouwen.",
     a:["aanzoek"],
     opts:["aanzoek","aandenken","aandeel","aanbieding"],
     hint:"Which word describes the romantic question of asking someone to marry you?",
     sSrc:"He made her a {1} and she said yes! They are getting married."},

    {type:"teach", trg:"de allergieën", src:"allergies", pos:"noun", gender:"c",
     note:"Plural. Common gender (de allergie).",
     example:"A: Heb je allergieën?\nB: Ja, voor pollen en huisstofmijt.",
     exampleSrc:"A: Do you have allergies?\nB: Yes, to pollen and dust mites.",
     funFact:"About 25% of Dutch people have hay fever. The pollen season is called 'hooikoortsseizoen'."},

    {type:"teach", trg:"de aandachtstrekkende", src:"the attention-seeker", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who craves attention.",
     example:"A: Hij is een echte aandachtstrekkende.\nB: Ja, hij staat altijd in het middelpunt.",
     exampleSrc:"A: He is a real attention-seeker.\nB: Yes, he is always in the spotlight.",
     funFact:"Aandacht (attention) + trekkend (pulling). Dutch loves these compound descriptors."},

    {type:"teach", trg:"bakenen", src:"to mark / to delineate", pos:"verb", gender:null,
     note:"Regular verb. Ik baken, jij bakent.",
     example:"A: We moeten de grenzen bakenen.\nB: Met paaltjes of verf?",
     exampleSrc:"A: We need to mark the boundaries.\nB: With posts or paint?",
     funFact:"From 'baken' (beacon). Dutch maritime history: beacons marked safe waterways. Now used for any boundary."},

    {type:"teach", trg:"de bedrijfsongeluk", src:"the industrial accident", pos:"noun", gender:"n",
     note:"Neuter gender (het). Bedrijf + ongeluk compound.",
     example:"A: Er was een bedrijfsongeluk in de fabriek.\nB: Is iemand gewond?",
     exampleSrc:"A: There was an industrial accident in the factory.\nB: Was anyone hurt?",
     funFact:"Dutch workplace safety is regulated by the 'Arbeidsinspectie' (Labor Inspectorate)."},

    {type:"mc",
     q:"Twee vriendinnen praten gezellig over koetjes en kalfjes. Ze ___.",
     opts:["beheren","babbelen","bakenen","baseren"],
     ans:"babbelen",
     hint:"Which informal verb means to have a cozy, casual chat?"},

    {type:"teach", trg:"de achttienhonderd", src:"eighteen hundred", pos:"num", gender:null,
     note:"Number. The year 1800 or the number 1800.",
     example:"A: Dit huis is gebouwd in achttienhonderd.\nB: Wauw, meer dan tweehonderd jaar oud.",
     exampleSrc:"A: This house was built in eighteen hundred.\nB: Wow, more than two hundred years old.",
     funFact:"Dutch says years differently: 1800 = 'achttienhonderd', not 'duizend achthonderd'."},

    {type:"teach", trg:"de achthonderd", src:"eight hundred", pos:"num", gender:null,
     note:"800. Compound: acht (8) + honderd (100). Used with definite article in counting contexts.",
     example:"A: Er zijn achthonderd leerlingen op deze school.\nB: Dat is een grote school.",
     exampleSrc:"A: There are eight hundred students at this school.\nB: That is a big school.",
     funFact:"Dutch number compounds: acht (8) + honderd (100). No spaces. Larger numbers get very long."},

    {type:"teach", trg:"de achttien", src:"eighteen", pos:"num", gender:null,
     note:"18. Dutch teens use -tien ending: twaalf, dertien, veertien... zeventien, achttien, negentien.",
     example:"A: Ze is achttien geworden!\nB: Gefeliciteerd! Ze is nu volwassen.",
     exampleSrc:"A: She turned eighteen!\nB: Congratulations! She is now an adult.",
     funFact:"In the Netherlands, you become legally adult at 18. You can vote, drive, and drink alcohol."},

    {type:"match", pairs:[
      {trg:"aanhouder", src:"persistent person"},
      {trg:"aanzoek", src:"marriage proposal"},
      {trg:"babbelen", src:"to chat"},
      {trg:"aandenken", src:"souvenir"},
      {trg:"alletwee", src:"both of them"}
    ]},

    {type:"fb",
     s:"Dit magneetje is een {1} aan onze reis naar Parijs.",
     a:["aandenken"],
     opts:["aandenken","aanzoek","aandeel","aanbieding"],
     hint:"Which word describes a small object kept as a memory of a trip?",
     sSrc:"This little magnet is a {1} of our trip to Paris."},

    {type:"mc",
     q:"Op welke leeftijd word je in Nederland volwassen en mag je stemmen?",
     opts:["achthonderd","achtduizend","achttien","achttienhonderd"],
     ans:"achttien",
     hint:"Think about the age at which Dutch citizens gain full legal rights."}
  ]
};
export default LESSON_19;
