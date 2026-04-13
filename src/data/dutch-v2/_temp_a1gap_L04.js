// L04: Home and Rooms — 20 A1 gap words
const LESSON_4 = {
  id:"nlv2_a1gap_l4", title:"Huis en Kamers", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Home and Rooms",
     desc:"Learn to describe your house, rooms, and furniture in Dutch. Know which nouns take de and which take het.",
     goals:["Master 20 home-related words","Distinguish de-words from het-words","Describe your living space"]},

    {type:"teach", trg:"het huis", src:"the house", pos:"noun", gender:"n",
     note:"Neuter noun (het). One of the most common het-words.",
     example:"A: Waar woon je?\nB: Ik woon in een groot huis.",
     exampleSrc:"A: Where do you live?\nB: I live in a big house.",
     funFact:"Cognate with English 'house'. Same root, nearly same pronunciation."},

    {type:"teach", trg:"de kamer", src:"the room", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: kamers.",
     example:"A: Hoeveel kamers heeft je huis?\nB: Vier kamers.",
     exampleSrc:"A: How many rooms does your house have?\nB: Four rooms.",
     funFact:"Cognate with English 'chamber'. Both from Latin 'camera'."},

    {type:"teach", trg:"de keuken", src:"the kitchen", pos:"noun", gender:"c",
     note:"Common gender (de). The heart of many Dutch homes.",
     example:"A: Waar is de keuken?\nB: Rechts van de woonkamer.",
     exampleSrc:"A: Where is the kitchen?\nB: To the right of the living room.",
     funFact:"Cognate with English 'kitchen' and German 'Kuche'. All from Latin 'coquina'."},

    {type:"teach", trg:"de badkamer", src:"the bathroom", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: bad (bath) + kamer (room).",
     example:"A: De badkamer is boven.\nB: Oké, dank je.",
     exampleSrc:"A: The bathroom is upstairs.\nB: Okay, thank you.",
     funFact:"Transparent compound. 'Bad' + 'kamer' = bath room. Like English."},

    {type:"mc",
     q:"Welk woord is een het-woord?",
     opts:["het huis","de kamer","de keuken","de badkamer"],
     ans:"het huis",
     hint:"Most rooms use 'de'. Only one common home word here uses 'het'."},

    {type:"teach", trg:"de deur", src:"the door", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: deuren.",
     example:"A: Doe de deur dicht, alsjeblieft.\nB: Oké, sorry!",
     exampleSrc:"A: Close the door, please.\nB: Okay, sorry!",
     funFact:"Cognate with English 'door'. Nearly identical word across Germanic languages."},

    {type:"teach", trg:"het bed", src:"the bed", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: bedden.",
     example:"A: Ik ga naar bed.\nB: Slaap lekker!",
     exampleSrc:"A: I'm going to bed.\nB: Sleep well!",
     funFact:"Cognate with English 'bed'. Identical spelling, nearly identical sound."},

    {type:"teach", trg:"de kast", src:"the cupboard / closet", pos:"noun", gender:"c",
     note:"Common gender (de). Used for any storage furniture.",
     example:"A: Waar is mijn jas?\nB: In de kast.",
     exampleSrc:"A: Where is my coat?\nB: In the closet.",
     funFact:"Related to English 'chest' (for storage). Same Proto-Germanic root."},

    {type:"teach", trg:"de koelkast", src:"the refrigerator", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: koel (cool) + kast (cupboard).",
     example:"A: Zet de melk in de koelkast.\nB: Oké, doe ik!",
     exampleSrc:"A: Put the milk in the fridge.\nB: Okay, will do!",
     funFact:"Literally 'cool cupboard'. A wonderfully transparent Dutch compound."},

    {type:"teach", trg:"het gordijn", src:"the curtain", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: gordijnen.",
     example:"A: Doe de gordijnen dicht.\nB: Het is nog licht buiten!",
     exampleSrc:"A: Close the curtains.\nB: It's still light outside!",
     funFact:"From French 'courtine'. The Dutch are known for their open curtains!"},

    {type:"fb",
     s:"Zet de melk in de {1}.",
     a:["koelkast"],
     opts:["koelkast","badkamer","kast","deur"],
     hint:"Where do you store cold items like milk? A 'cool cupboard'.",
     sSrc:"Put the milk in the {1}."},

    {type:"teach", trg:"het balkon", src:"the balcony", pos:"noun", gender:"n",
     note:"Neuter noun (het). Common in Dutch apartments.",
     example:"A: Zullen we op het balkon zitten?\nB: Ja, het is lekker weer.",
     exampleSrc:"A: Shall we sit on the balcony?\nB: Yes, the weather is nice.",
     funFact:"From Italian 'balcone'. International word."},

    {type:"teach", trg:"de flat", src:"the apartment building", pos:"noun", gender:"c",
     note:"Common gender (de). Refers to the whole building or a unit.",
     example:"A: Ik woon in een flat.\nB: Op welke verdieping?",
     exampleSrc:"A: I live in an apartment building.\nB: On which floor?",
     funFact:"Borrowed from English 'flat'. Same meaning as British English."},

    {type:"teach", trg:"het appartement", src:"the apartment", pos:"noun", gender:"n",
     note:"Neuter noun (het). A single apartment unit.",
     example:"A: Het appartement heeft twee kamers.\nB: Dat is genoeg voor mij.",
     exampleSrc:"A: The apartment has two rooms.\nB: That is enough for me.",
     funFact:"From French 'appartement'. Notice the double p in Dutch."},

    {type:"teach", trg:"de berging", src:"the storage room", pos:"noun", gender:"c",
     note:"Common gender (de). From 'bergen' (to store).",
     example:"A: De fietsen staan in de berging.\nB: Oké, ik haal ze.",
     exampleSrc:"A: The bicycles are in the storage room.\nB: Okay, I'll get them.",
     funFact:"From 'bergen' (to store safely). Very Dutch: everyone has a berging for bikes."},

    {type:"teach", trg:"de garage", src:"the garage", pos:"noun", gender:"c",
     note:"Common gender (de). Same word as English.",
     example:"A: De auto staat in de garage.\nB: Mooi, dan regent het er niet op.",
     exampleSrc:"A: The car is in the garage.\nB: Good, then it won't rain on it.",
     funFact:"From French. Pronounced 'gah-RAH-zhuh' in Dutch, not like English."},

    {type:"mc",
     q:"Het appartement heeft een mooi ___.",
     opts:["balkon","keuken","badkamer","deur"],
     ans:"balkon",
     hint:"Which word is neuter (het) and refers to an outdoor space on a building?"},

    {type:"teach", trg:"boven", src:"upstairs / above", pos:"prep", gender:null,
     note:"Preposition and adverb. Opposite of 'beneden' (downstairs).",
     example:"A: Waar is de badkamer?\nB: Boven, eerste deur rechts.",
     exampleSrc:"A: Where is the bathroom?\nB: Upstairs, first door on the right.",
     funFact:"Cognate with English 'above' (a-bove). Same root word."},

    {type:"teach", trg:"onder", src:"under / below", pos:"prep", gender:null,
     note:"Preposition. Opposite of 'boven'.",
     example:"A: De kat zit onder de tafel.\nB: Dat doet ze altijd!",
     exampleSrc:"A: The cat is sitting under the table.\nB: She always does that!",
     funFact:"Cognate with English 'under'. Identical meaning and usage."},

    {type:"teach", trg:"binnen", src:"inside", pos:"prep", gender:null,
     note:"Preposition and adverb. Opposite of 'buiten'.",
     example:"A: Kom binnen!\nB: Dank je, wat een mooi huis.",
     exampleSrc:"A: Come inside!\nB: Thank you, what a beautiful house.",
     funFact:"Same root as 'bin' in English (container). Being 'within' something."},

    {type:"teach", trg:"buiten", src:"outside", pos:"prep", gender:null,
     note:"Preposition and adverb. Opposite of 'binnen'.",
     example:"A: De kinderen spelen buiten.\nB: Het is lekker weer vandaag.",
     exampleSrc:"A: The children are playing outside.\nB: The weather is nice today.",
     funFact:"Related to English 'but' (originally meaning 'outside of'). Same root."},

    {type:"match", pairs:[
      {trg:"koelkast", src:"refrigerator"},
      {trg:"gordijn", src:"curtain"},
      {trg:"berging", src:"storage room"},
      {trg:"balkon", src:"balcony"}
    ]}
  ]
};
export default LESSON_4;
