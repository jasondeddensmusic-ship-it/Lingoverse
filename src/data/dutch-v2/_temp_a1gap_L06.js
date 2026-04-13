// L06: Body and Health — 20 A1 gap words
const LESSON_6 = {
  id:"nlv2_a1gap_l6", title:"Lichaam en Gezondheid", icon:"\u{1F9D1}\u200D\u2695\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Body and Health",
     desc:"Learn Dutch body parts and health vocabulary. Talk about how you feel and visit the doctor.",
     goals:["Master 20 body and health words","Describe symptoms in Dutch","Use de/het with body part nouns"]},

    {type:"teach", trg:"het lichaam", src:"the body", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: lichamen.",
     example:"A: Mijn lichaam doet pijn.\nB: Ga naar de dokter!",
     exampleSrc:"A: My body hurts.\nB: Go to the doctor!",
     funFact:"Related to German 'Leichnam'. In Dutch it means living body, in German it means corpse!"},

    {type:"teach", trg:"het hoofd", src:"the head", pos:"noun", gender:"n",
     note:"Neuter noun (het). Formal. Informal: 'kop'.",
     example:"A: Ik heb pijn in mijn hoofd.\nB: Neem een aspirine.",
     exampleSrc:"A: I have pain in my head.\nB: Take an aspirin.",
     funFact:"Same root as English 'head'. Dutch 'hoofd' used to sound more like it."},

    {type:"teach", trg:"de hand", src:"the hand", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: handen.",
     example:"A: Geef me je hand.\nB: Hier, pak maar vast.",
     exampleSrc:"A: Give me your hand.\nB: Here, hold on.",
     funFact:"Cognate with English 'hand'. Identical spelling and meaning."},

    {type:"teach", trg:"het been", src:"the leg", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: benen. Also means 'bone'.",
     example:"A: Mijn been doet pijn.\nB: Heb je het gestoten?",
     exampleSrc:"A: My leg hurts.\nB: Did you bump it?",
     funFact:"Means both 'leg' and 'bone'. English 'bone' is a cognate (same root!)."},

    {type:"teach", trg:"de knie", src:"the knee", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: knieen.",
     example:"A: Ik heb last van mijn knie.\nB: Misschien moet je rusten.",
     exampleSrc:"A: I have trouble with my knee.\nB: Maybe you should rest.",
     funFact:"Cognate with English 'knee'. The K was once pronounced in both languages!"},

    {type:"mc",
     q:"Welk lichaamsdeel zit tussen je boven- en onderbeen?",
     opts:["de knie","de hand","het hoofd","de arm"],
     ans:"de knie",
     hint:"Think about which joint connects your upper and lower leg."},

    {type:"teach", trg:"de arm", src:"the arm", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: armen. Also means 'poor'.",
     example:"A: Ik heb mijn arm gebroken.\nB: Oh nee! Gaat het?",
     exampleSrc:"A: I broke my arm.\nB: Oh no! Are you okay?",
     funFact:"Identical to English 'arm'. As an adjective it means 'poor' (like German)."},

    {type:"teach", trg:"de hoofdpijn", src:"the headache", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: hoofd (head) + pijn (pain).",
     example:"A: Ik heb hoofdpijn.\nB: Wil je een aspirine?",
     exampleSrc:"A: I have a headache.\nB: Do you want an aspirin?",
     funFact:"Transparent compound. Head + pain. German says the same: 'Kopfschmerzen'."},

    {type:"teach", trg:"de dokter", src:"the doctor", pos:"noun", gender:"c",
     note:"Common gender (de). Also 'arts' (more formal).",
     example:"A: Ik moet naar de dokter.\nB: Wat is er aan de hand?",
     exampleSrc:"A: I need to go to the doctor.\nB: What's wrong?",
     funFact:"From Latin 'doctor'. Same international word used everywhere."},

    {type:"teach", trg:"de griep", src:"the flu", pos:"noun", gender:"c",
     note:"Common gender (de). Short for 'influenza'.",
     example:"A: Ik heb de griep.\nB: Blijf in bed en drink veel water.",
     exampleSrc:"A: I have the flu.\nB: Stay in bed and drink lots of water.",
     funFact:"From French 'grippe'. The Dutch get their flu shot ('griepprik') in autumn."},

    {type:"teach", trg:"gezond", src:"healthy", pos:"adj", gender:null,
     note:"Adjective. Opposite of 'ziek' (sick).",
     example:"A: Ben je gezond?\nB: Ja, ik voel me goed!",
     exampleSrc:"A: Are you healthy?\nB: Yes, I feel good!",
     funFact:"Related to English 'sound' (as in 'safe and sound'). Same root."},

    {type:"fb",
     s:"Ik heb de griep. Ik moet naar de {1}.",
     a:["dokter"],
     opts:["dokter","keuken","school","bakker"],
     hint:"Where do you go when you are sick? A medical professional.",
     sSrc:"I have the flu. I have to go to the {1}."},

    {type:"teach", trg:"de dorst", src:"the thirst", pos:"noun", gender:"c",
     note:"Common gender (de). 'Dorst hebben' = to be thirsty.",
     example:"A: Ik heb dorst.\nB: Wil je een glas water?",
     exampleSrc:"A: I'm thirsty.\nB: Do you want a glass of water?",
     funFact:"Cognate with English 'thirst'. Dutch uses 'dorst hebben' (to have thirst)."},

    {type:"teach", trg:"de honger", src:"the hunger", pos:"noun", gender:"c",
     note:"Common gender (de). 'Honger hebben' = to be hungry.",
     example:"A: Ik heb honger!\nB: Het eten is bijna klaar.",
     exampleSrc:"A: I'm hungry!\nB: The food is almost ready.",
     funFact:"Cognate with English 'hunger'. Dutch says 'have hunger' not 'am hungry'."},

    {type:"teach", trg:"de hulp", src:"the help", pos:"noun", gender:"c",
     note:"Common gender (de). 'Hulp nodig?' = Need help?",
     example:"A: Heb je hulp nodig?\nB: Ja, graag!",
     exampleSrc:"A: Do you need help?\nB: Yes, please!",
     funFact:"Cognate with English 'help'. Same root, just a vowel shift."},

    {type:"teach", trg:"de last", src:"the trouble / burden", pos:"noun", gender:"c",
     note:"Common gender (de). 'Last hebben van' = to suffer from.",
     example:"A: Ik heb last van mijn rug.\nB: Probeer yoga!",
     exampleSrc:"A: I have trouble with my back.\nB: Try yoga!",
     funFact:"Cognate with English 'last' (as in burden). 'Ballast' is a related word."},

    {type:"mc",
     q:"'Ik heb ___' betekent 'I am thirsty' in het Nederlands.",
     opts:["dorst","honger","hulp","last"],
     ans:"dorst",
     hint:"Dutch uses 'to have' plus a noun for physical feelings. Which noun means thirst?"},

    {type:"teach", trg:"dood", src:"dead", pos:"adj", gender:null,
     note:"Adjective. Also used as noun 'de dood' (death).",
     example:"A: De plant is dood.\nB: Je moet vaker water geven!",
     exampleSrc:"A: The plant is dead.\nB: You should water it more often!",
     funFact:"Cognate with English 'dead'. Same pronunciation and meaning."},

    {type:"teach", trg:"mager", src:"thin / lean / skinny", pos:"adj", gender:null,
     note:"Can be neutral or slightly negative.",
     example:"A: Die kat is heel mager.\nB: Ja, ze eet niet genoeg.",
     exampleSrc:"A: That cat is very thin.\nB: Yes, she doesn't eat enough.",
     funFact:"Cognate with English 'meager'. From the same root meaning 'lean'."},

    {type:"teach", trg:"dik", src:"thick / fat", pos:"adj", gender:null,
     note:"For objects: thick. For people: can be rude (fat).",
     example:"A: Dat boek is heel dik.\nB: Ja, het heeft 500 paginas.",
     exampleSrc:"A: That book is very thick.\nB: Yes, it has 500 pages.",
     funFact:"Cognate with English 'thick'. Be careful using it for people!"},

    {type:"teach", trg:"nat", src:"wet", pos:"adj", gender:null,
     note:"Opposite of 'droog' (dry). Very common in rainy Netherlands.",
     example:"A: Het regent! Ik ben helemaal nat.\nB: Hier, neem een handdoek.",
     exampleSrc:"A: It's raining! I'm completely wet.\nB: Here, take a towel.",
     funFact:"In the Netherlands you hear this word a LOT. It rains about 130 days a year."},

    {type:"match", pairs:[
      {trg:"lichaam", src:"body"},
      {trg:"hoofdpijn", src:"headache"},
      {trg:"gezond", src:"healthy"},
      {trg:"honger", src:"hunger"}
    ]}
  ]
};
export default LESSON_6;
