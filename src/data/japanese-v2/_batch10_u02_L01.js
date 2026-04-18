// Batch 10 – Unit 02 (A1.1 Self-Intro): Describing Yourself
const BATCH10_L1 = {
  id:"jav2_u02l_b10_1", title:"自分(じぶん)のこと", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"自分(じぶん)のこと",
     desc:"Learn to describe your personality, appearance, and preferences when introducing yourself. Build a richer self-introduction.",
     goals:["Describe personality traits","Express likes and dislikes simply","Talk about physical characteristics"]},

    {type:"teach", trg:"親切(しんせつ)", src:"kind / friendly", pos:"adj", gender:null,
     note:"な-adjective. 親切(しんせつ)な人(ひと) = a kind person.\nVery common compliment in Japanese.",
     example:"A: 山田(やまだ)さんは親切(しんせつ)ですね。\nB: ありがとうございます。",
     exampleSrc:"A: Yamada is kind, isn't she?\nB: Thank you.",
     funFact:"親切(しんせつ) combines 'parent' and 'cut/close.' The idea is being as caring as a parent who stays close. Japanese culture highly values 親切(しんせつ), and the phrase おもてなし (hospitality) is related to this deep sense of kindness toward others."},

    {type:"teach", trg:"真面目(まじめ)", src:"serious / diligent", pos:"adj", gender:null,
     note:"な-adjective. Can be positive (hardworking) or neutral.\n真面目(まじめ)な人(ひと) = a serious/earnest person.",
     example:"A: あの学生(がくせい)は真面目(まじめ)ですね。\nB: 毎日(まいにち)勉強(べんきょう)しています。",
     exampleSrc:"A: That student is diligent.\nB: They study every day.",
     funFact:"真面目(まじめ) literally means 'true face.' A 真面目(まじめ) person shows their true, earnest face. In Japan, being 真面目(まじめ) is generally praised, but 真面目(まじめ)すぎる (too serious) can mean someone lacks humor or flexibility."},

    {type:"teach", trg:"元気(げんき)", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"な-adjective. お元気(げんき)ですか = How are you?\n元気(げんき)な子(こ) = an energetic child.",
     example:"A: 今日(きょう)も元気(げんき)ですね！\nB: はい、よく寝(ね)ましたから。",
     exampleSrc:"A: You are energetic today too!\nB: Yes, because I slept well.",
     funFact:"元気(げんき) means 'original energy.' The kanji 元(もと) (origin) + 気(き) (spirit) suggest your fundamental life force. When someone says 元気(げんき)がない, it means they lack energy or seem down. 元気(げんき)を出(だ)して means 'cheer up.'"},

    {type:"teach", trg:"苦手(にがて)", src:"not good at / weak point", pos:"adj", gender:null,
     note:"な-adjective. 苦手(にがて)な食(た)べもの = food I dislike.\nOpposite: 得意(とくい) (good at).",
     example:"A: 運動(うんどう)は苦手(にがて)です。\nB: 私(わたし)もです。",
     exampleSrc:"A: I am not good at exercise.\nB: Me neither.",
     funFact:"苦手(にがて) literally means 'bitter hand.' It softly expresses inability or dislike without being as blunt as きらい (hate). Japanese people prefer 苦手(にがて) because it sounds less judgmental and more humble."},

    {type:"teach", trg:"得意(とくい)", src:"good at / strong point", pos:"adj", gender:null,
     note:"な-adjective. 得意(とくい)な科目(かもく) = best subject.\nOpposite: 苦手(にがて) (weak at).",
     example:"A: 得意(とくい)なことは何(なん)ですか？\nB: 料理(りょうり)が得意(とくい)です。",
     exampleSrc:"A: What are you good at?\nB: I am good at cooking.",
     funFact:"得意(とくい) means 'proud' or 'strong point.' Unlike English 'good at,' 得意(とくい) has a nuance of pride and satisfaction. 得意顔(とくいがお) (proud face) describes someone looking smug. Using it about yourself is acceptable because it answers a direct question."},

    {type:"teach", trg:"背(せ)が高(たか)い", src:"tall (person)", pos:"adj", gender:null,
     note:"背(せ) = height, 高(たか)い = tall/high.\nOpposite: 背(せ)が低(ひく)い (short).",
     example:"A: お兄(にい)さんは背(せ)が高(たか)いですね。\nB: はい、185センチです。",
     exampleSrc:"A: Your older brother is tall.\nB: Yes, 185 centimeters.",
     funFact:"Japanese people use centimeters for height, never feet and inches. Average height for Japanese men is about 171 cm and women about 158 cm. Being 背(せ)が高(たか)い is generally seen as attractive, and many Japanese celebrities are noted for their height."},

    {type:"teach", trg:"眼鏡(めがね)をかけている", src:"wears glasses", pos:"verb", gender:null,
     note:"眼鏡(めがね) = glasses, かける = to put on (face).\nDescribes an ongoing state with ている.",
     example:"A: あの眼鏡(めがね)をかけている人(ひと)は誰(だれ)ですか？\nB: 鈴木先生(すずきせんせい)です。",
     exampleSrc:"A: Who is that person wearing glasses?\nB: That is Suzuki-sensei.",
     funFact:"Japanese has different verbs for wearing things on different body parts: かぶる (head), 着(き)る (torso), はく (legs/feet), and かける (face). 眼鏡(めがね) is paired with かける because you 'hang' glasses on your face."},

    {type:"teach", trg:"髪(かみ)が長(なが)い", src:"has long hair", pos:"adj", gender:null,
     note:"髪(かみ) = hair, 長(なが)い = long.\nOpposite: 髪(かみ)が短(みじか)い (short hair).",
     example:"A: 髪(かみ)が長(なが)い人(ひと)が好(す)きですか？\nB: 特(とく)に気(き)にしません。",
     exampleSrc:"A: Do you like people with long hair?\nB: I do not particularly mind.",
     funFact:"In Japanese schools, hair rules (校則(こうそく)) are famously strict. Many schools require natural black hair and ban perms or coloring. The debate over these rules is ongoing, with some students challenging them as violations of personal freedom."},

    {type:"mc", q:"What is the opposite of 苦手(にがて)?", opts:["得意(とくい)","元気(げんき)","親切(しんせつ)","真面目(まじめ)"], ans:"得意(とくい)",
     hint:"If 苦手(にがて) means 'not good at,' the opposite means 'good at' or 'strong point.'"},

    {type:"fb", s:"山田(やまだ)さんは{1}ですね。毎日(まいにち)勉強(べんきょう)しています。\n(Yamada is diligent. She studies every day.)", a:"真面目(まじめ)", opts:["真面目(まじめ)","元気(げんき)","親切(しんせつ)","苦手(にがて)"], sSrc:"Yamada is diligent. She studies every day.",
     hint:"This adjective describes someone who is serious, earnest, and hardworking."},

    {type:"match", pairs:[
      {trg:"親切(しんせつ)", src:"kind"},
      {trg:"苦手(にがて)", src:"not good at"},
      {trg:"得意(とくい)", src:"good at"},
      {trg:"元気(げんき)", src:"energetic"}
    ]},

    {type:"mc", q:"Which verb is used for wearing glasses in Japanese?", opts:["かける","着(き)る","はく","かぶる"], ans:"かける",
     hint:"Japanese uses different verbs for different body parts. For items on the face, you use this verb meaning 'to hang.'"}
  ,{type:"match",pairs:[{trg:"背(せ)が高(たか)い",src:"tall (person)"},{trg:"眼鏡(めがね)をかけている",src:"wears glasses"},{trg:"髪(かみ)が長(なが)い",src:"has long hair"}]}]
};
export default BATCH10_L1;
