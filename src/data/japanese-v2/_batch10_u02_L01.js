// Batch 10 – Unit 02 (A1.1 Self-Intro): Describing Yourself
const BATCH10_L1 = {
  id:"jav2_u02l_b10_1", title:"じぶんのこと", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"じぶんのこと",
     desc:"Learn to describe your personality, appearance, and preferences when introducing yourself. Build a richer self-introduction.",
     goals:["Describe personality traits","Express likes and dislikes simply","Talk about physical characteristics"]},

    {type:"teach", trg:"しんせつ", src:"kind / friendly", pos:"adj", gender:null,
     note:"な-adjective. しんせつなひと = a kind person.\nVery common compliment in Japanese.",
     example:"A: やまださんはしんせつですね。\nB: ありがとうございます。",
     exampleSrc:"A: Yamada is kind, isn't she?\nB: Thank you.",
     funFact:"しんせつ (親切) combines 'parent' and 'cut/close.' The idea is being as caring as a parent who stays close. Japanese culture highly values しんせつ, and the phrase おもてなし (hospitality) is related to this deep sense of kindness toward others."},

    {type:"teach", trg:"まじめ", src:"serious / diligent", pos:"adj", gender:null,
     note:"な-adjective. Can be positive (hardworking) or neutral.\nまじめなひと = a serious/earnest person.",
     example:"A: あのがくせいはまじめですね。\nB: まいにちべんきょうしています。",
     exampleSrc:"A: That student is diligent.\nB: They study every day.",
     funFact:"まじめ (真面目) literally means 'true face.' A まじめ person shows their true, earnest face. In Japan, being まじめ is generally praised, but まじめすぎる (too serious) can mean someone lacks humor or flexibility."},

    {type:"teach", trg:"げんき", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"な-adjective. おげんきですか = How are you?\nげんきなこ = an energetic child.",
     example:"A: きょうもげんきですね！\nB: はい、よくねましたから。",
     exampleSrc:"A: You are energetic today too!\nB: Yes, because I slept well.",
     funFact:"げんき (元気) means 'original energy.' The kanji 元 (origin) + 気 (spirit) suggest your fundamental life force. When someone says げんきがない, it means they lack energy or seem down. げんきをだして means 'cheer up.'"},

    {type:"teach", trg:"にがて", src:"not good at / weak point", pos:"adj", gender:null,
     note:"な-adjective. にがてなたべもの = food I dislike.\nOpposite: とくい (good at).",
     example:"A: うんどうはにがてです。\nB: わたしもです。",
     exampleSrc:"A: I am not good at exercise.\nB: Me neither.",
     funFact:"にがて (苦手) literally means 'bitter hand.' It softly expresses inability or dislike without being as blunt as きらい (hate). Japanese people prefer にがて because it sounds less judgmental and more humble."},

    {type:"teach", trg:"とくい", src:"good at / strong point", pos:"adj", gender:null,
     note:"な-adjective. とくいなかもく = best subject.\nOpposite: にがて (weak at).",
     example:"A: とくいなことはなんですか？\nB: りょうりがとくいです。",
     exampleSrc:"A: What are you good at?\nB: I am good at cooking.",
     funFact:"とくい (得意) means 'proud' or 'strong point.' Unlike English 'good at,' とくい has a nuance of pride and satisfaction. とくいがお (proud face) describes someone looking smug. Using it about yourself is acceptable because it answers a direct question."},

    {type:"teach", trg:"せがたかい", src:"tall (person)", pos:"adj", gender:null,
     note:"せ = height, たかい = tall/high.\nOpposite: せがひくい (short).",
     example:"A: おにいさんはせがたかいですね。\nB: はい、185センチです。",
     exampleSrc:"A: Your older brother is tall.\nB: Yes, 185 centimeters.",
     funFact:"Japanese people use centimeters for height, never feet and inches. Average height for Japanese men is about 171 cm and women about 158 cm. Being せがたかい is generally seen as attractive, and many Japanese celebrities are noted for their height."},

    {type:"teach", trg:"めがねをかけている", src:"wears glasses", pos:"verb", gender:null,
     note:"めがね = glasses, かける = to put on (face).\nDescribes an ongoing state with ている.",
     example:"A: あのめがねをかけているひとはだれですか？\nB: すずきせんせいです。",
     exampleSrc:"A: Who is that person wearing glasses?\nB: That is Suzuki-sensei.",
     funFact:"Japanese has different verbs for wearing things on different body parts: かぶる (head), きる (torso), はく (legs/feet), and かける (face). めがね is paired with かける because you 'hang' glasses on your face."},

    {type:"teach", trg:"かみがながい", src:"has long hair", pos:"adj", gender:null,
     note:"かみ = hair, ながい = long.\nOpposite: かみがみじかい (short hair).",
     example:"A: かみがながいひとがすきですか？\nB: とくにきにしません。",
     exampleSrc:"A: Do you like people with long hair?\nB: I do not particularly mind.",
     funFact:"In Japanese schools, hair rules (こうそく) are famously strict. Many schools require natural black hair and ban perms or coloring. The debate over these rules is ongoing, with some students challenging them as violations of personal freedom."},

    {type:"mc", q:"What is the opposite of にがて?", opts:["とくい","げんき","しんせつ","まじめ"], ans:"とくい",
     hint:"If にがて means 'not good at,' the opposite means 'good at' or 'strong point.'"},

    {type:"fb", s:"やまださんは{1}ですね。まいにちべんきょうしています。\n(Yamada is diligent. She studies every day.)", a:"まじめ", opts:["まじめ","げんき","しんせつ","にがて"], sSrc:"Yamada is diligent. She studies every day.",
     hint:"This adjective describes someone who is serious, earnest, and hardworking."},

    {type:"match", pairs:[
      {trg:"しんせつ", src:"kind"},
      {trg:"にがて", src:"not good at"},
      {trg:"とくい", src:"good at"},
      {trg:"げんき", src:"energetic"}
    ]},

    {type:"mc", q:"Which verb is used for wearing glasses in Japanese?", opts:["かける","きる","はく","かぶる"], ans:"かける",
     hint:"Japanese uses different verbs for different body parts. For items on the face, you use this verb meaning 'to hang.'"}
  ]
};
export default BATCH10_L1;
