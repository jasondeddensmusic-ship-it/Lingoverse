// Batch 9 – Unit 06 (A1.2 Family): Extended Family & Relationships
const BATCH9_L1 = {
  id:"jav2_u06l_b9_1", title:"親戚(しんせき)", icon:"👨‍👩‍👧‍👦", xp:15, board:true,
  steps:[
    {type:"intro", title:"親戚(しんせき)",
     desc:"Learn vocabulary for extended family members and family relationships. Japanese has distinct humble and honorific forms for family terms.",
     goals:["Name extended family members","Distinguish humble and honorific family terms","Describe family relationships"]},

    {type:"teach", trg:"親戚(しんせき)", src:"relatives", pos:"noun", gender:null,
     note:"親戚(しんせき)の家(いえ) = relative's house.\nUsed for the broader family beyond immediate.",
     example:"A: お正月(しょうがつ)に親戚(しんせき)が集(あつ)まります。\nB: にぎやかですね。",
     exampleSrc:"A: Relatives gather at New Year.\nB: That is lively.",
     funFact:"親戚(しんせき) gatherings are most common during お正月(しょうがつ) (New Year) and お盆(ぼん) (summer festival). Japanese 親戚(しんせき) relationships involve complex gift-giving obligations. The term 遠(えん)戚(せき) means distant relatives, while 近親(きんしん) means close relatives."},

    {type:"teach", trg:"おじ", src:"uncle", pos:"noun", gender:null,
     note:"Humble form (your own): おじ. Honorific (someone else's): おじさん.\nYounger uncle: おじさん too.",
     example:"A: おじは大阪(おおさか)に住(す)んでいます。\nB: お仕事(しごと)はなんですか？",
     exampleSrc:"A: My uncle lives in Osaka.\nB: What is his job?",
     funFact:"おじ has two kanji: 伯父 for father's/mother's older brother and 叔父 for younger brother. In daily conversation, most people just say おじ without distinguishing. おじさん is also used to address any middle-aged man, which can be an unwelcome surprise."},

    {type:"teach", trg:"おば", src:"aunt", pos:"noun", gender:null,
     note:"Humble form: おば. Honorific: おばさん.\nSame elder/younger distinction as おじ.",
     example:"A: おばがケーキを作(つく)ってくれました。\nB: おいしそうですね。",
     exampleSrc:"A: My aunt made a cake for us.\nB: It looks delicious.",
     funFact:"Like おじ, おば has two kanji: 伯母 (older sister of parent) and 叔母 (younger sister). おばさん used for strangers means 'middle-aged woman' and can feel insulting. Young women dread being called おばさん, a cultural phenomenon called おばさんショック."},

    {type:"teach", trg:"いとこ", src:"cousin", pos:"noun", gender:null,
     note:"Gender-neutral term. No humble/honorific distinction.\nいとこどうし = between cousins.",
     example:"A: いとこは何人(なんにん)いますか？\nB: 五人(ごにん)います。",
     exampleSrc:"A: How many cousins do you have?\nB: I have five.",
     funFact:"いとこ (従兄弟/従姉妹) has different kanji depending on whether the cousin is older/younger and male/female, but the pronunciation is always いとこ. Japanese いとこ relationships are important, and いとこ often play together during family gatherings."},

    {type:"teach", trg:"孫(まご)", src:"grandchild", pos:"noun", gender:null,
     note:"Honorific: お孫(まご)さん.\n孫(まご)の手(て) = back scratcher (literally 'grandchild's hand').",
     example:"A: 孫(まご)が生(う)まれました。\nB: おめでとうございます！",
     exampleSrc:"A: A grandchild was born.\nB: Congratulations!",
     funFact:"孫(まご) are extremely cherished in Japanese culture. The word 孫(まご)の手(て) (grandchild's hand) for a back scratcher comes from the idea that a grandchild's small hand is perfect for reaching itchy spots. Japanese grandparents often spoil their 孫(まご) with gifts and お小遣(こづか)い (allowance)."},

    {type:"teach", trg:"姪(めい)", src:"niece", pos:"noun", gender:null,
     note:"Honorific: 姪御(めいご)さん.\n姪(めい) = your own, 姪御(めいご)さん = someone else's.",
     example:"A: 姪(めい)の誕生日(たんじょうび)です。\nB: おいくつになりますか？",
     exampleSrc:"A: It is my niece's birthday.\nB: How old is she turning?",
     funFact:"姪(めい) is used for your sister's or brother's daughter. The humble/honorific distinction (姪(めい) vs. 姪御(めいご)さん) follows the same pattern as all family terms: humble for your own, honorific for others. 姪(めい)っこ is a more casual, affectionate form."},

    {type:"teach", trg:"甥(おい)", src:"nephew", pos:"noun", gender:null,
     note:"Honorific: 甥御(おいご)さん.\n甥(おい)っこ = casual/affectionate form.",
     example:"A: 甥(おい)が大学(だいがく)に入(はい)りました。\nB: 素晴(すば)らしいですね。",
     exampleSrc:"A: My nephew entered university.\nB: That is wonderful.",
     funFact:"甥(おい) follows the same humble/honorific pattern. Like 姪(めい)っこ, 甥(おい)っこ is a warmer, more casual way to say nephew. In Japanese inheritance law, 甥(おい) and 姪(めい) have specific rights. The terms are also used in historical dramas about samurai family politics."},

    {type:"teach", trg:"義理(ぎり)", src:"in-law (prefix)", pos:"noun", gender:null,
     note:"義理(ぎり)の母(はは) = mother-in-law.\n義理(ぎり)の父(ちち) = father-in-law.",
     example:"A: 義理(ぎり)のお母(かあ)さんは優(やさ)しい人(ひと)です。\nB: いいですね。",
     exampleSrc:"A: My mother-in-law is a kind person.\nB: That is nice.",
     funFact:"義理(ぎり) means 'duty' or 'obligation' and is used as a prefix for in-law relationships. 義理(ぎり)チョコ (obligation chocolate) given on Valentine's Day to male coworkers uses the same word. The concept of 義理(ぎり) (social obligation) is fundamental to Japanese relationships."},

    {type:"mc", q:"What is the difference between おじ and おじさん when talking about your own uncle?", opts:["おじ is humble (your own), おじさん is honorific (someone else's)","They mean the same thing","おじ is casual, おじさん is formal","おじ is for young uncles, おじさん is for old uncles"], ans:"おじ is humble (your own), おじさん is honorific (someone else's)",
     hint:"Japanese family terms have h... forms for your own family and h... forms for other people's family."},

    {type:"fb", s:"{1}が生(う)まれました。おめでとうございます！\n(A grandchild was born. Congratulations!)", a:"孫(まご)", opts:["孫(まご)","甥(おい)","姪(めい)","いとこ"], sSrc:"A grandchild was born. Congratulations!",
     hint:"This word refers to your child's child."},

    {type:"match", pairs:[
      {trg:"おじ", src:"uncle"},
      {trg:"おば", src:"aunt"},
      {trg:"いとこ", src:"cousin"},
      {trg:"孫(まご)", src:"grandchild"}
    ]},

    {type:"mc", q:"What does 義理(ぎり)の母(はは) mean?", opts:["Aunt","Mother-in-law","Grandmother","Stepmother"], ans:"Mother-in-law",
     hint:"義理(ぎり) means 'obligation/duty' and is the prefix used for relationships through marriage."}
  ,{type:"match",pairs:[{trg:"親戚(しんせき)",src:"relatives"},{trg:"姪(めい)",src:"niece"},{trg:"甥(おい)",src:"nephew"},{trg:"義理(ぎり)",src:"in-law (prefix)"}]}]
};
export default BATCH9_L1;
