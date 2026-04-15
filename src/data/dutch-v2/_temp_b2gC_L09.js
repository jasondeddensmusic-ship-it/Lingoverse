// L09: Gezondheid en Welzijn — Health and Wellbeing
const LESSON_9 = {
  id:"nlv2_b2gC_l9", title:"Gezondheid en Welzijn", icon:"\u{1F3E5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Health and Wellbeing",
     desc:"Healthcare vocabulary is essential for navigating Dutch life. Learn terms for medical conditions, treatments, and the Dutch healthcare system.",
     goals:["Master 10 health and wellbeing terms","Discuss medical topics confidently","Understand Dutch healthcare vocabulary"]},

    {type:"teach", trg:"de acne", src:"acne", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek 'akne' (peak/point).\nVery common among teenagers.",
     example:"A: Veel tieners hebben last van acne.\nB: Ja, het hoort bij de puberteit.\nA: Is er een goede behandeling?\nB: De huisarts kan je doorverwijzen naar een dermatoloog.",
     exampleSrc:"A: Many teenagers suffer from acne.\nB: Yes, it's part of puberty.\nA: Is there a good treatment?\nB: The GP can refer you to a dermatologist.",
     funFact:"The Netherlands has a 'huisarts' (GP) system where your family doctor is the first point of contact for all health issues."},

    {type:"teach", trg:"de koortsaanval", src:"the fever attack / bout of fever", pos:"noun", gender:"c",
     note:"Common gender (de). Koorts (fever) + aanval (attack).\n'Koorts hebben' = to have a fever.",
     example:"A: Het kind had vannacht een koortsaanval.\nB: Hoe hoog was de temperatuur?\nA: Bijna veertig graden.\nB: Bel de huisarts, dat is best hoog.",
     exampleSrc:"A: The child had a fever attack last night.\nB: How high was the temperature?\nA: Almost forty degrees.\nB: Call the GP, that's quite high.",
     funFact:"In the Netherlands, the huisarts (GP) is the gatekeeper of healthcare. You cannot see a specialist without a referral from your GP."},

    {type:"teach", trg:"het inslaapprobleem", src:"the difficulty falling asleep", pos:"noun", gender:"n",
     note:"Neuter (het). Inslaap (falling asleep) + probleem (problem).\n'Inslapen' = to fall asleep.",
     example:"A: Ik heb last van inslaapproblemen.\nB: Hoe lang al?\nA: Al een paar weken, door stress.\nB: Probeer voor het slapengaan geen telefoon te gebruiken.",
     exampleSrc:"A: I have trouble falling asleep.\nB: For how long?\nA: For a few weeks now, because of stress.\nB: Try not to use your phone before bed.",
     funFact:"The Dutch word 'inslaapprobleem' is a typical three-part compound: in + slaap + probleem. Dutch loves stacking words together."},

    {type:"teach", trg:"de hartstichting", src:"the Heart Foundation", pos:"noun", gender:"c",
     note:"Common gender (de). Hart (heart) + stichting (foundation).\n'De Nederlandse Hartstichting' is a well-known charity.",
     example:"A: Ik doe mee aan een actie van de Hartstichting.\nB: Wat voor actie?\nA: Een sponsorloop voor onderzoek naar hartfalen.\nB: Mooi! Ik wil ook doneren.",
     exampleSrc:"A: I'm participating in a campaign by the Heart Foundation.\nB: What kind of campaign?\nA: A sponsored run for heart failure research.\nB: Great! I want to donate too.",
     funFact:"The Hartstichting is one of the largest health charities in the Netherlands, funding research and promoting healthy lifestyles."},

    {type:"mc",
     q:"In Nederland ga je eerst naar de huisarts voordat je:",
     opts:["Naar de apotheek gaat","Een specialist kunt zien","Naar de supermarkt gaat","Een recept kunt lezen"],
     ans:"Een specialist kunt zien",
     hint:"The Dutch GP serves as a gatekeeper. You need their referral to see a s...."},

    {type:"teach", trg:"de kinderpsychiatrie", src:"child psychiatry", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + psychiatrie (psychiatry).\nA medical specialisation.",
     example:"A: Ze werkt in de kinderpsychiatrie.\nB: Dat is vast zwaar werk.\nA: Ja, maar ook heel dankbaar.\nB: Je kunt echt het verschil maken voor een kind.",
     exampleSrc:"A: She works in child psychiatry.\nB: That must be tough work.\nA: Yes, but also very rewarding.\nB: You can really make a difference for a child.",
     funFact:"Dutch mental healthcare for children is well-developed. The 'GGZ' (Geestelijke Gezondheidszorg) provides specialised youth services."},

    {type:"teach", trg:"de knokkel", src:"the knuckle", pos:"noun", gender:"c",
     note:"Common gender (de). Related to 'knokkelen' (to fight with fists).\nPlural: 'knokkels'.",
     example:"A: Mijn knokkels doen pijn van het typen.\nB: Je moet meer pauzes nemen.\nA: Ik weet het, maar ik heb een deadline.\nB: Doe even wat strekoefeningeen.",
     exampleSrc:"A: My knuckles hurt from typing.\nB: You should take more breaks.\nA: I know, but I have a deadline.\nB: Do some stretching exercises.",
     funFact:"The Dutch word 'knokken' means to fight (with fists). 'Knokkels' are what you fight with. It is related to English 'knuckle'."},

    {type:"teach", trg:"de korrel", src:"the grain / granule", pos:"noun", gender:"c",
     note:"Common gender (de). A small particle.\n'Met een korreltje zout nemen' = to take with a grain of salt.",
     example:"A: Neem dat verhaal met een korreltje zout.\nB: Denk je dat het niet klopt?\nA: Niet alles, nee.\nB: Goed, ik zal kritisch zijn.",
     exampleSrc:"A: Take that story with a grain of salt.\nB: Do you think it's not true?\nA: Not everything, no.\nB: Okay, I'll be critical.",
     funFact:"The expression 'met een korreltje zout nemen' exists in many languages. It comes from the Latin 'cum grano salis', attributed to Pliny the Elder."},

    {type:"fb",
     s:"Het kind had vannacht een hoge {1}.",
     a:["koortsaanval"],
     opts:["koortsaanval","knokkel","korrel","acne"],
     hint:"A sudden episode of high temperature, especially in children.",
     sSrc:"The child had a high {1} last night."},

    {type:"teach", trg:"de kluif", src:"the bone (to gnaw on) / tough job", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kluiven' (to gnaw).\n'Een hele kluif' = a tough job/challenge.",
     example:"A: Dat project wordt een hele kluif.\nB: Hoeveel tijd hebben we?\nA: Drie maanden, en het is complex.\nB: Dan moeten we meteen beginnen.",
     exampleSrc:"A: That project will be a real challenge.\nB: How much time do we have?\nA: Three months, and it's complex.\nB: Then we need to start right away.",
     funFact:"A dog gnaws on a 'kluif' (bone). When something is a 'hele kluif' for a person, it means they really have to work hard at it."},

    {type:"teach", trg:"het kuiken", src:"the chick / baby bird", pos:"noun", gender:"n",
     note:"Neuter (het). Diminutive feel, though not grammatically diminutive.\n'Een lelijk eendje' = an ugly duckling.",
     example:"A: Kijk, de kuikens zijn net uitgekomen!\nB: Wat zijn ze schattig!\nA: Ze volgen de moederkip overal.\nB: Ik wil er een aaien!",
     exampleSrc:"A: Look, the chicks have just hatched!\nB: How cute they are!\nA: They follow the mother hen everywhere.\nB: I want to pet one!",
     funFact:"The Netherlands has a strong poultry industry. The 'kuiken' is also used affectionately: 'Hoe gaat het, kuiken?' (How are you, chick?)."},

    {type:"mc",
     q:"'Een hele kluif' betekent:",
     opts:["Een lekker bot voor de hond","Een moeilijke taak of uitdaging","Een gemakkelijke opdracht","Een bot dat gebroken is"],
     ans:"Een moeilijke taak of uitdaging",
     hint:"Something you really have to gnaw at, like a dog with a tough bone."},

    {type:"fb",
     s:"Neem dat roddelverhaal met een {1} zout.",
     a:["korreltje"],
     opts:["korreltje","knokkel","kluif","kuiken"],
     hint:"A very small particle of salt. An expression meaning 'don't believe everything'.",
     sSrc:"Take that gossip story with a {1} of salt."},

    {type:"match", pairs:[
      {trg:"acne", src:"acne"},
      {trg:"koortsaanval", src:"fever attack"},
      {trg:"inslaapprobleem", src:"difficulty falling asleep"},
      {trg:"hartstichting", src:"Heart Foundation"}
    ]},

    {type:"mc",
     q:"Welk artikel hoort bij 'kuiken'?",
     opts:["de","het","een de-woord","geen artikel"],
     ans:"het",
     hint:"Baby animals in Dutch are often het-words: het kuiken, het lam, het veulen."},

    {type:"fb",
     s:"Zij werkt als arts in de {1} van het ziekenhuis.",
     a:["kinderpsychiatrie"],
     opts:["kinderpsychiatrie","hartstichting","kinderafdeling","acne"],
     hint:"The medical specialisation dealing with mental health of young people.",
     sSrc:"She works as a doctor in the {1} of the hospital."},

    {type:"match", pairs:[
      {trg:"knokkel", src:"knuckle"},
      {trg:"korrel", src:"grain / granule"},
      {trg:"kluif", src:"bone / tough job"},
      {trg:"kuiken", src:"chick"}
    ]}
  ]
};
export default LESSON_9;
