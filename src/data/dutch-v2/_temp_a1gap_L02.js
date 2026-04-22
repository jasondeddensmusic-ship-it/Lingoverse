// L02: Family, 20 A1 gap words
const LESSON_2 = {
  id:"nlv2_a1gap_l2", title:"De Familie", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Family",
     desc:"Learn essential Dutch family vocabulary. Meet the parents, siblings, and extended family.",
     goals:["Master 20 family-related words","Use de/het correctly with family nouns","Talk about your family naturally"]},

    {type:"teach", trg:"de familie", src:"the family", pos:"noun", gender:"c",
     note:"Common gender (de). The extended family or family in general.",
     example:"A: Heb je een grote familie?\nB: Ja, heel groot!",
     exampleSrc:"A: Do you have a big family?\nB: Yes, very big!",
     funFact:"From Latin 'familia'. Used the same way as in English."},

    {type:"teach", trg:"het gezin", src:"the nuclear family / household", pos:"noun", gender:"n",
     note:"Neuter noun (het). Specifically parents + children living together.",
     example:"A: Hoe groot is je gezin?\nB: We zijn met vier: twee ouders en twee kinderen.",
     exampleSrc:"A: How big is your household?\nB: There are four of us: two parents and two children.",
     funFact:"'Gezin' is specifically the nuclear family. 'Familie' is the broader family."},

    {type:"teach", trg:"de man", src:"the man / husband", pos:"noun", gender:"c",
     note:"Common gender (de). Also means 'husband' in context.",
     example:"A: Wie is die man?\nB: Dat is mijn man, Peter.",
     exampleSrc:"A: Who is that man?\nB: That is my husband, Peter.",
     funFact:"Cognate with English 'man'. Same word, same meaning, same root."},

    {type:"teach", trg:"de moeder", src:"the mother", pos:"noun", gender:"c",
     note:"Common gender (de). Formal. Informal: 'mama' or 'mam'.",
     example:"A: Waar is je moeder?\nB: Ze is in de keuken.",
     exampleSrc:"A: Where is your mother?\nB: She is in the kitchen.",
     funFact:"Cognate with English 'mother', German 'Mutter'. Universal mama-type word."},

    {type:"teach", trg:"mam", src:"mom", pos:"noun", gender:"c",
     note:"Common gender (de). Informal, everyday word for mother.",
     example:"A: Mam, mag ik een koekje?\nB: Ja, maar alleen een!",
     exampleSrc:"A: Mom, can I have a cookie?\nB: Yes, but only one!",
     funFact:"Short for 'mama'. Very common in Dutch households."},

    {type:"mc",
     q:"Het gezin is ___ de familie.",
     opts:["kleiner dan","groter dan","hetzelfde als","anders dan"],
     ans:"kleiner dan",
     hint:"Think about nuclear family vs extended family. Which is smaller?"},

    {type:"teach", trg:"de broer", src:"the brother", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: broers.",
     example:"A: Heb je broers of zussen?\nB: Ik heb twee broers.",
     exampleSrc:"A: Do you have brothers or sisters?\nB: I have two brothers.",
     funFact:"Cognate with English 'brother'. Proto-Germanic root."},

    {type:"teach", trg:"de dochter", src:"the daughter", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: dochters.",
     example:"A: Dit is mijn dochter Lisa.\nB: Hallo Lisa, leuk je te ontmoeten!",
     exampleSrc:"A: This is my daughter Lisa.\nB: Hello Lisa, nice to meet you!",
     funFact:"Cognate with English 'daughter'. Same Proto-Germanic origin."},

    {type:"teach", trg:"de neef", src:"the cousin (male) / nephew", pos:"noun", gender:"c",
     note:"Common gender (de). Can mean both cousin and nephew.",
     example:"A: Mijn neef komt morgen op bezoek.\nB: Leuk! Hoe oud is hij?",
     exampleSrc:"A: My cousin is visiting tomorrow.\nB: Nice! How old is he?",
     funFact:"Dutch 'neef' covers both cousin and nephew. Context tells you which."},

    {type:"teach", trg:"de oma", src:"the grandmother", pos:"noun", gender:"c",
     note:"Common gender (de). Informal. Formal: 'grootmoeder'.",
     example:"A: Gaan we naar oma?\nB: Ja, ze heeft taart gebakken!",
     exampleSrc:"A: Are we going to grandma's?\nB: Yes, she baked a cake!",
     funFact:"Same as German 'Oma'. An affectionate, universal term across languages."},

    {type:"fb",
     s:"Mijn {1} is de moeder van mijn moeder.",
     a:["oma"],
     opts:["oma","dochter","neef","broer"],
     hint:"Who is your mother's mother? An older female family member.",
     sSrc:"My {1} is the mother of my mother."},

    {type:"teach", trg:"het kleinkind", src:"the grandchild", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: klein (small) + kind (child).",
     example:"A: Hoeveel kleinkinderen heeft oma?\nB: Ze heeft vijf kleinkinderen.",
     exampleSrc:"A: How many grandchildren does grandma have?\nB: She has five grandchildren.",
     funFact:"Literally 'small child'. A transparent compound, easy to remember."},

    {type:"teach", trg:"de jongen", src:"the boy", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: jongens.",
     example:"A: Die jongen speelt buiten.\nB: Dat is onze buurjongen.",
     exampleSrc:"A: That boy is playing outside.\nB: That is our neighbor's boy.",
     funFact:"Related to 'jong' (young). Literally 'a young one'."},

    {type:"teach", trg:"het meisje", src:"the girl", pos:"noun", gender:"n",
     note:"Neuter noun (het). Diminutive of 'meid'. All -je words are het-words.",
     example:"A: Dat meisje is heel slim.\nB: Ja, ze zit in mijn klas.",
     exampleSrc:"A: That girl is very smart.\nB: Yes, she is in my class.",
     funFact:"Het meisje is neuter because ALL Dutch diminutives (-je) are het-words."},

    {type:"teach", trg:"het kind", src:"the child", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: kinderen.",
     example:"A: Heb je kinderen?\nB: Ja, twee kinderen.",
     exampleSrc:"A: Do you have children?\nB: Yes, two children.",
     funFact:"Cognate with English 'child' (archaic 'kind'). German 'Kind' is identical."},

    {type:"mc",
     q:"Het meisje is een ___-woord. Waarom?",
     opts:["de, want het eindigt op -je","het, want het is een verkleinwoord","de, want het is vrouwelijk","het, want het is mannelijk"],
     ans:"het, want het is een verkleinwoord",
     hint:"All Dutch diminutives ending in -je follow a special article rule."},

    {type:"teach", trg:"de mens", src:"the person / human being", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: mensen.",
     example:"A: Hoeveel mensen wonen hier?\nB: Ongeveer duizend mensen.",
     exampleSrc:"A: How many people live here?\nB: About a thousand people.",
     funFact:"Cognate with German 'Mensch'. Used for 'person' more than English uses 'human'."},

    {type:"teach", trg:"het leven", src:"the life", pos:"noun", gender:"n",
     note:"Neuter noun (het). Also the verb 'to live'.",
     example:"A: Het leven is mooi!\nB: Ja, zeker als de zon schijnt.",
     exampleSrc:"A: Life is beautiful!\nB: Yes, especially when the sun shines.",
     funFact:"Cognate with English 'life' (via 'live'). Same Germanic root."},

    {type:"teach", trg:"het jaar", src:"the year", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: jaren.",
     example:"A: Hoe oud ben je?\nB: Ik ben dertig jaar.",
     exampleSrc:"A: How old are you?\nB: I am thirty years old.",
     funFact:"Cognate with English 'year'. Nearly identical sound and meaning."},

    {type:"teach", trg:"jong", src:"young", pos:"adj", gender:null,
     note:"Opposite of 'oud' (old). Very common adjective.",
     example:"A: Je ziet er jong uit.\nB: Dank je, ik ben pas twintig!",
     exampleSrc:"A: You look young.\nB: Thanks, I'm only twenty!",
     funFact:"Cognate with English 'young' and German 'jung'. All from the same root."},

    {type:"match", pairs:[
      {trg:"gezin", src:"nuclear family"},
      {trg:"kleinkind", src:"grandchild"},
      {trg:"neef", src:"cousin / nephew"},
      {trg:"meisje", src:"girl"}
    ]}
  ]
};
export default LESSON_2;
