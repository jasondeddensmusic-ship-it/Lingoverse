// Batch 9 – Unit 06 (A1.2 Family): Extended Family & Relationships
const BATCH9_L1 = {
  id:"jav2_u06l_b9_1", title:"しんせき", icon:"👨‍👩‍👧‍👦", xp:15, board:true,
  steps:[
    {type:"intro", title:"しんせき",
     desc:"Learn vocabulary for extended family members and family relationships. Japanese has distinct humble and honorific forms for family terms.",
     goals:["Name extended family members","Distinguish humble and honorific family terms","Describe family relationships"]},

    {type:"teach", trg:"しんせき", src:"relatives", pos:"noun", gender:null,
     note:"しんせきのいえ = relative's house.\nUsed for the broader family beyond immediate.",
     example:"A: おしょうがつにしんせきがあつまります。\nB: にぎやかですね。",
     exampleSrc:"A: Relatives gather at New Year.\nB: That is lively.",
     funFact:"しんせき (親戚) gatherings are most common during おしょうがつ (New Year) and おぼん (summer festival). Japanese しんせき relationships involve complex gift-giving obligations. The term えんせき means distant relatives, while きんしん means close relatives."},

    {type:"teach", trg:"おじ", src:"uncle", pos:"noun", gender:null,
     note:"Humble form (your own): おじ. Honorific (someone else's): おじさん.\nYounger uncle: おじさん too.",
     example:"A: おじはおおさかにすんでいます。\nB: おしごとはなんですか？",
     exampleSrc:"A: My uncle lives in Osaka.\nB: What is his job?",
     funFact:"おじ has two kanji: 伯父 for father's/mother's older brother and 叔父 for younger brother. In daily conversation, most people just say おじ without distinguishing. おじさん is also used to address any middle-aged man, which can be an unwelcome surprise."},

    {type:"teach", trg:"おば", src:"aunt", pos:"noun", gender:null,
     note:"Humble form: おば. Honorific: おばさん.\nSame elder/younger distinction as おじ.",
     example:"A: おばがケーキをつくってくれました。\nB: おいしそうですね。",
     exampleSrc:"A: My aunt made a cake for us.\nB: It looks delicious.",
     funFact:"Like おじ, おば has two kanji: 伯母 (older sister of parent) and 叔母 (younger sister). おばさん used for strangers means 'middle-aged woman' and can feel insulting. Young women dread being called おばさん, a cultural phenomenon called おばさんショック."},

    {type:"teach", trg:"いとこ", src:"cousin", pos:"noun", gender:null,
     note:"Gender-neutral term. No humble/honorific distinction.\nいとこどうし = between cousins.",
     example:"A: いとこはなんにんいますか？\nB: ごにんいます。",
     exampleSrc:"A: How many cousins do you have?\nB: I have five.",
     funFact:"いとこ (従兄弟/従姉妹) has different kanji depending on whether the cousin is older/younger and male/female, but the pronunciation is always いとこ. Japanese いとこ relationships are important, and いとこ often play together during family gatherings."},

    {type:"teach", trg:"まご", src:"grandchild", pos:"noun", gender:null,
     note:"Honorific: おまごさん.\nまごのて = back scratcher (literally 'grandchild's hand').",
     example:"A: まごがうまれました。\nB: おめでとうございます！",
     exampleSrc:"A: A grandchild was born.\nB: Congratulations!",
     funFact:"まご (孫) are extremely cherished in Japanese culture. The word まごのて (grandchild's hand) for a back scratcher comes from the idea that a grandchild's small hand is perfect for reaching itchy spots. Japanese grandparents often spoil their まご with gifts and おこづかい (allowance)."},

    {type:"teach", trg:"めい", src:"niece", pos:"noun", gender:null,
     note:"Honorific: めいごさん.\nめい = your own, めいごさん = someone else's.",
     example:"A: めいのたんじょうびです。\nB: おいくつになりますか？",
     exampleSrc:"A: It is my niece's birthday.\nB: How old is she turning?",
     funFact:"めい (姪) is used for your sister's or brother's daughter. The humble/honorific distinction (めい vs. めいごさん) follows the same pattern as all family terms: humble for your own, honorific for others. めいっこ is a more casual, affectionate form."},

    {type:"teach", trg:"おい", src:"nephew", pos:"noun", gender:null,
     note:"Honorific: おいごさん.\nおいっこ = casual/affectionate form.",
     example:"A: おいがだいがくにはいりました。\nB: すばらしいですね。",
     exampleSrc:"A: My nephew entered university.\nB: That is wonderful.",
     funFact:"おい (甥) follows the same humble/honorific pattern. Like めいっこ, おいっこ is a warmer, more casual way to say nephew. In Japanese inheritance law, おい and めい have specific rights. The terms are also used in historical dramas about samurai family politics."},

    {type:"teach", trg:"ぎり", src:"in-law (prefix)", pos:"noun", gender:null,
     note:"ぎりのはは = mother-in-law.\nぎりのちち = father-in-law.",
     example:"A: ぎりのおかあさんはやさしいひとです。\nB: いいですね。",
     exampleSrc:"A: My mother-in-law is a kind person.\nB: That is nice.",
     funFact:"ぎり (義理) means 'duty' or 'obligation' and is used as a prefix for in-law relationships. ぎりチョコ (obligation chocolate) given on Valentine's Day to male coworkers uses the same word. The concept of ぎり (social obligation) is fundamental to Japanese relationships."},

    {type:"mc", q:"What is the difference between おじ and おじさん when talking about your own uncle?", opts:["おじ is humble (your own), おじさん is honorific (someone else's)","They mean the same thing","おじ is casual, おじさん is formal","おじ is for young uncles, おじさん is for old uncles"], ans:"おじ is humble (your own), おじさん is honorific (someone else's)",
     hint:"Japanese family terms have h... forms for your own family and h... forms for other people's family."},

    {type:"fb", s:"{1}がうまれました。おめでとうございます！\n(A grandchild was born. Congratulations!)", a:"まご", opts:["まご","おい","めい","いとこ"], sSrc:"A grandchild was born. Congratulations!",
     hint:"This word refers to your child's child."},

    {type:"match", pairs:[
      {trg:"おじ", src:"uncle"},
      {trg:"おば", src:"aunt"},
      {trg:"いとこ", src:"cousin"},
      {trg:"まご", src:"grandchild"}
    ]},

    {type:"mc", q:"What does ぎりのはは mean?", opts:["Mother-in-law","Grandmother","Stepmother","Aunt"], ans:"Mother-in-law",
     hint:"ぎり means 'obligation/duty' and is the prefix used for relationships through marriage."}
  ]
};
export default BATCH9_L1;
