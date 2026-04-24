// L12: Brain, Mind, and Neuroscience
const LESSON_12 = {
  id:"nlv2_b2g6_l12", title:"Hersenen en Geest", icon:"\uD83E\uDDE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Brain, Mind, and Neuroscience",
     desc:"Learn vocabulary about the brain, cognition, and neuroscience. The Netherlands is a leading country in brain research and mental health innovation.",
     goals:["Learn 10 words about the brain and mind","Discuss neuroscience and cognition","Understand Dutch medical and psychological vocabulary"]},

    {type:"teach", trg:"de hersengolven", src:"the brain waves", pos:"noun", gender:"c",
     note:"Compound: hersen(en) (brain) + golven (waves).\nElectrical patterns in the brain measured by EEG.",
     example:"A: De wetenschapper meet hersengolven met een EEG.\nB: Wat kan ze daaruit afleiden?\nA: Of iemand slaapt, droomt of wakker is.\nB: Dat is fascinerend.",
     exampleSrc:"A: The scientist measures brain waves with an EEG.\nB: What can she deduce from that?\nA: Whether someone is sleeping, dreaming, or awake.\nB: That is fascinating.",
     funFact:"The Donders Institute in Nijmegen is one of the world's leading brain research centers, pioneering the study of brain waves."},

    {type:"teach", trg:"de hersenstructuur", src:"the brain structure", pos:"noun", gender:"c",
     note:"Compound: hersen(en) (brain) + structuur (structure).\nThe physical architecture of the brain.",
     example:"A: De hersenstructuur verandert gedurende het hele leven.\nB: Zelfs bij volwassenen?\nA: Ja, dat heet neuroplasticiteit.\nB: Onze hersenen blijven zich aanpassen.",
     exampleSrc:"A: The brain structure changes throughout life.\nB: Even in adults?\nA: Yes, that is called neuroplasticity.\nB: Our brains keep adapting.",
     funFact:"Dutch neuroscientist Dick Swaab wrote 'We Are Our Brains', which became a bestseller and sparked national debate about free will."},

    {type:"teach", trg:"het gedragsprobleem", src:"the behavioral problem", pos:"noun", gender:"n",
     note:"Compound: gedrag (behavior) + probleem (problem).\nUsed in education and psychology.",
     example:"A: Het kind heeft een gedragsprobleem op school.\nB: Wat voor gedrag vertoont het?\nA: Agressie en concentratieproblemen.\nB: Misschien is er een onderliggende oorzaak.",
     exampleSrc:"A: The child has a behavioral problem at school.\nB: What kind of behavior does it show?\nA: Aggression and concentration problems.\nB: Maybe there is an underlying cause.",
     funFact:"The Netherlands has one of the most developed child psychology systems in Europe. Early intervention programs are standard in Dutch schools."},

    {type:"teach", trg:"golven", src:"to wave, to undulate", pos:"verb", gender:null,
     note:"From 'golf' (wave). To move in waves.\nUsed for water, hair, and emotions.",
     example:"A: De zee golfde zachtjes in het maanlicht.\nB: Wat een romantisch beeld.\nA: Het was heel mooi.\nB: Ik wil ook naar het strand.",
     exampleSrc:"A: The sea was gently undulating in the moonlight.\nB: What a romantic image.\nA: It was very beautiful.\nB: I also want to go to the beach.",
     funFact:"The Dutch have over 450 kilometers of coastline. The relationship with waves is deeply cultural, from surfing at Scheveningen to flood protection."},

    {type:"teach", trg:"het gezichtspatroon", src:"the facial pattern", pos:"noun", gender:"n",
     note:"Compound: gezicht (face) + patroon (pattern).\nUsed in AI, security, and psychology.",
     example:"A: De camera herkent gezichtspatronen.\nB: Voor beveiliging?\nA: Ja, het is een vorm van biometrie.\nB: Dat roept vragen op over privacy.",
     exampleSrc:"A: The camera recognizes facial patterns.\nB: For security?\nA: Yes, it is a form of biometrics.\nB: That raises questions about privacy.",
     funFact:"The Netherlands has strict privacy laws under the GDPR. Facial recognition use by police requires parliamentary approval."},

    {type:"mc",
     q:"Wat zijn 'hersengolven'?",
     opts:["Elektrische patronen in de hersenen","Golven in de oceaan","Geluidsgolven in het oor","Wiskundige formules"],
     ans:"Elektrische patronen in de hersenen",
     hint:"Brain (hersen) + waves (golven). These are measured with an EEG to study brain activity."},

    {type:"teach", trg:"dichtslibben", src:"to silt up, to clog", pos:"verb", gender:null,
     note:"Compound verb: dicht (closed) + slibben (to silt).\nUsed literally for waterways and figuratively.",
     example:"A: De gracht dreigt dicht te slibben.\nB: Moet de gemeente dat oplossen?\nA: Ja, ze moeten het slib verwijderen.\nB: Anders kan er geen boot meer door.",
     exampleSrc:"A: The canal is threatening to silt up.\nB: Does the municipality have to solve that?\nA: Yes, they need to remove the silt.\nB: Otherwise no boat can pass through.",
     funFact:"Dutch canals require constant maintenance. Amsterdam alone spends millions annually on canal dredging to prevent silting."},

    {type:"teach", trg:"doodbloeien", src:"to bleed to death, to die out slowly", pos:"verb", gender:null,
     note:"Compound: dood (dead) + bloeden (to bleed).\nUsed figuratively for organizations or traditions dying slowly.",
     example:"A: Het dorp dreigt langzaam dood te bloeden.\nB: Waarom?\nA: Alle jongeren vertrekken naar de stad.\nB: Dat is een groot probleem op het platteland.",
     exampleSrc:"A: The village is threatening to slowly bleed to death.\nB: Why?\nA: All young people are leaving for the city.\nB: That is a big problem in the countryside.",
     funFact:"Rural depopulation ('krimp') is a major Dutch policy issue. Many villages in Groningen and Limburg face declining populations."},

    {type:"teach", trg:"hellen", src:"to slope, to tilt, to lean", pos:"verb", gender:null,
     note:"Related to 'helling' (slope).\nTo incline or lean in a direction.",
     example:"A: De vloer kan een beetje naar links hellen.\nB: Dat is typisch voor oude huizen.\nA: In Amsterdam zie je dat vaak.\nB: Door de zachte grond.",
     exampleSrc:"A: The floor can slope a bit to the left.\nB: That is typical for old houses.\nA: In Amsterdam you see that often.\nB: Because of the soft ground.",
     funFact:"Amsterdam's leaning houses are not accidents. Many were built to tilt forward so goods could be hoisted up without hitting the facade."},

    {type:"fb",
     s:"De wetenschapper bestudeert de {1} van jonge kinderen.",
     a:["hersenstructuur"],
     opts:["hersenstructuur","hersengolven","gezichtspatroon","gedragsprobleem"],
     hint:"The physical architecture and composition of the brain. Compound of 'hersen' and 'structuur'.",
     sSrc:"The scientist studies the {1} of young children."},

    {type:"teach", trg:"de decimaal", src:"the decimal", pos:"noun", gender:"c",
     note:"From Latin 'decimalis' (of a tenth).\nNote: Dutch uses a comma for decimals, not a period.",
     example:"A: Schrijf het getal met twee decimalen.\nB: Dus 3,14?\nA: Precies, met een komma.\nB: In het Engels gebruiken ze een punt.",
     exampleSrc:"A: Write the number with two decimals.\nB: So 3.14?\nA: Exactly, with a comma.\nB: In English they use a period.",
     funFact:"The Dutch decimal comma versus the English decimal point is a common source of confusion in international documents and spreadsheets."},

    {type:"teach", trg:"beelden", src:"to depict, to portray", pos:"verb", gender:null,
     note:"From 'beeld' (image). To represent visually.\nOften used as 'zich inbeelden' (to imagine).",
     example:"A: De schilder beeldt het landschap prachtig af.\nB: Is het een realistisch schilderij?\nA: Ja, je kunt de polder herkennen.\nB: Het is alsof je er staat.",
     exampleSrc:"A: The painter beautifully depicts the landscape.\nB: Is it a realistic painting?\nA: Yes, you can recognize the polder.\nB: It is as if you are standing there.",
     funFact:"The Dutch masters were celebrated for 'beelden' (depicting) reality. Vermeer's light effects are still studied by art students worldwide."},

    {type:"mc",
     q:"Wat betekent 'doodbloeien' figuurlijk?",
     opts:["Een medische noodsituatie","Langzaam uitsterven of verdwijnen","Heel hard bloeden","Bloemen die doodgaan"],
     ans:"Langzaam uitsterven of verdwijnen",
     hint:"Used figuratively for organizations, villages, or traditions that are slowly dying. 'Dood' means dead."},

    {type:"match", pairs:[
      {trg:"hersengolven", src:"brain waves"},
      {trg:"gedragsprobleem", src:"behavioral problem"},
      {trg:"gezichtspatroon", src:"facial pattern"},
      {trg:"decimaal", src:"decimal"}
    ]},

    {type:"fb",
     s:"De gracht dreigt dicht te {1} door gebrek aan onderhoud.",
     a:["slibben"],
     opts:["slibben","bloeden","hellen","golven"],
     hint:"To fill up with silt and mud. Used for waterways that become blocked.",
     sSrc:"The canal is threatening to {1} up due to lack of maintenance."},

    {type:"mc",
     q:"Waarom staan veel huizen in Amsterdam scheef?",
     opts:["Door slechte bouwkwaliteit","Door overstromingen","Door de zachte grond en bewust ontwerp","Door aardbevingen"],
     ans:"Door de zachte grond en bewust ontwerp",
     hint:"Amsterdam is built on soft soil. Many houses were designed to lean forward for a practical reason."}
  ]
};
export default LESSON_12;
