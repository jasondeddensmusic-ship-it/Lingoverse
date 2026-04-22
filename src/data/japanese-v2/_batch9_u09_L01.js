// Batch 9 – Unit 09 (A2.1 Shopping): Clothing & Fashion
const BATCH9_L1 = {
  id:"jav2_u09l_b9_1", title:"服(ふく)", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"服(ふく)",
     desc:"Learn clothing vocabulary and shopping phrases for fashion in Japan. Japanese has specific verbs for wearing different types of clothing.",
     goals:["Name common clothing items","Use the correct wearing verbs","Handle fitting room conversations"]},

    {type:"teach", trg:"ジャケット", src:"jacket", pos:"noun", gender:null,
     note:"From English 'jacket.' 上着(うわぎ) = Japanese term.\nジャケットを着(き)る = to wear a jacket.",
     example:"A: 寒(さむ)いですね。ジャケットを着(き)ましょう。\nB: そうですね。",
     exampleSrc:"A: It is cold. Let's put on jackets.\nB: Yes, let's.",
     funFact:"Japanese fashion is globally influential. Tokyo's 原宿(はらじゅく) (Harajuku) district is famous for avant-garde fashion. Japanese ジャケット styling tends to be more fitted than Western styles. The concept of TPO (Time, Place, Occasion) governs Japanese dress codes strictly."},

    {type:"teach", trg:"スカート", src:"skirt", pos:"noun", gender:null,
     note:"From English 'skirt.' ミニスカート = miniskirt.\nスカートを穿(は)く = to wear a skirt.",
     example:"A: そのスカートはかわいいですね。\nB: ありがとう。セールで買(か)いました。",
     exampleSrc:"A: That skirt is cute.\nB: Thanks. I bought it on sale.",
     funFact:"Japanese school uniforms often feature スカート for girls, and the length is a cultural battleground. Schools set rules, but students often fold waistbands to shorten them. Japanese スカート丈(たけ) (skirt length) trends have changed dramatically across decades."},

    {type:"teach", trg:"コート", src:"coat / overcoat", pos:"noun", gender:null,
     note:"From English 'coat.' ダウンコート = down coat.\nコートを脱(ぬ)ぐ = to take off a coat.",
     example:"A: コートをお預(あず)かりします。\nB: お願(ねが)いします。",
     exampleSrc:"A: I will take your coat.\nB: Please.",
     funFact:"In Japan, you remove your コート before entering someone's home or office building, folding it over your arm. This is basic manners. Japanese people are very particular about seasonal clothing transitions. Wearing a コート too early or too late draws attention."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"From English 'size.' S, M, L or Japanese sizing.\nサイズが合(あ)わない = the size does not fit.",
     example:"A: このサイズはありますか？\nB: Mサイズですね。こちらです。",
     exampleSrc:"A: Do you have this size?\nB: Size M, right? Here it is.",
     funFact:"Japanese サイズ runs smaller than Western sizing. A Japanese L often equals a Western M. This surprises many tourists. Japanese clothing brands often use フリーサイズ (free size/one size fits all), which accommodates a narrower range than the term suggests."},

    {type:"teach", trg:"試着室(しちゃくしつ)", src:"fitting room", pos:"noun", gender:null,
     note:"試着(しちゃく) = trying on, 室(しつ) = room.\n試着(しちゃく)してもいいですか = May I try this on?",
     example:"A: 試着(しちゃく)してもいいですか？\nB: どうぞ。試着室(しちゃくしつ)はあちらです。",
     exampleSrc:"A: May I try this on?\nB: Please. The fitting room is over there.",
     funFact:"Japanese 試着室(しちゃくしつ) etiquette requires removing shoes and sometimes placing a cloth over your head to avoid getting makeup on clothes. Staff hand you a フェイスカバー (face cover). Trying on without asking first is considered rude."},

    {type:"teach", trg:"似合(にあ)う", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"よく似合(にあ)っています = It looks great on you.\n似合(にあ)わない = does not suit.",
     example:"A: この色(いろ)、似合(にあ)いますか？\nB: とても似合(にあ)っていますよ。",
     exampleSrc:"A: Does this color suit me?\nB: It looks great on you.",
     funFact:"似合(にあ)う literally means 'to resemble and match.' Japanese shop staff are trained to give 似合(にあ)う compliments to customers. The phrase 似合(にあ)いますね is one of the most common things you hear while shopping. 似合(にあ)わない is rarely said directly to avoid hurting feelings."},

    {type:"teach", trg:"流行(はや)っている", src:"trendy / in fashion", pos:"verb", gender:null,
     note:"流行(はや)る = to become popular/trendy.\n今(いま)流行(はや)っている = currently trendy.",
     example:"A: 今(いま)どんなスタイルが流行(はや)っていますか？\nB: オーバーサイズが流行(はや)っています。",
     exampleSrc:"A: What style is trendy now?\nB: Oversized is trending.",
     funFact:"流行(はや)る covers everything from fashion to food to slang. Japanese trends move fast, and 流行(りゅうこう) (fashion trends) change seasonally. Fashion magazines like non-no, ViVi, and Men's non-no drive trends. The phrase 流行(りゅうこう)に敏感(びんかん) means 'sensitive to trends.'"},

    {type:"teach", trg:"布(ぬの)", src:"cloth / fabric", pos:"noun", gender:null,
     note:"布地(ぬのじ) = textile. コットン = cotton. シルク = silk.\n布(ぬの)を選(えら)ぶ = to choose fabric.",
     example:"A: この布(ぬの)はなんですか？\nB: シルクです。手触(てざわ)りがいいでしょう？",
     exampleSrc:"A: What fabric is this?\nB: It is silk. Nice texture, right?",
     funFact:"Japan has a rich 布(ぬの) tradition. 西陣織(にしじんおり) (Nishijin weaving) in Kyoto has 1,500 years of history. Japanese silk production was once a major industry. The word 手拭(てぬぐ)い (hand towel) uses the same 布(ぬの) character and is a traditional multi-purpose cloth."},

    {type:"mc", q:"Which verb means 'to suit' or 'to look good on' someone?", opts:["似合(にあ)う","着(き)る","穿(は)く","かける"], ans:"似合(にあ)う",
     hint:"This verb describes when a particular clothing item or style matches a person well."},

    {type:"fb", s:"{1}してもいいですか？\n(May I try this on?)", a:"試着(しちゃく)", opts:["試着(しちゃく)","似合(にあ)い","買(か)い物(もの)","お会計(かいけい)"], sSrc:"May I try this on?",
     hint:"This word means 'trying on' clothing, and the room for it is called 試着室(しちゃくしつ)."},

    {type:"match", pairs:[
      {trg:"サイズ", src:"size"},
      {trg:"試着室(しちゃくしつ)", src:"fitting room"},
      {trg:"似合(にあ)う", src:"to suit"},
      {trg:"流行(はや)っている", src:"trendy"}
    ]},

    {type:"mc", q:"What should you do in a Japanese fitting room before trying on clothes?", opts:["Remove all accessories","Use a face cover to protect clothes from makeup","Take a selfie","Ask for a different size"], ans:"Use a face cover to protect clothes from makeup",
     hint:"Staff often hand you a フェイスカバー to prevent cosmetics from transferring to garments."}
  ,{type:"fb", s:"この服(ふく)は私(わたし)に{1}ますか？",
    a:["似合(にあ)う"],
    opts:["似合(にあ)う","流行(はや)る","着(き)る","切(き)る"],
    hint:"You are asking the shop assistant whether this piece of clothing looks good on you. This verb means 'to suit.'",
    sSrc:"Does this clothing {1} me?"}
  ,{type:"match",pairs:[{trg:"ジャケット",src:"jacket"},{trg:"スカート",src:"skirt"},{trg:"コート",src:"coat / overcoat"},{trg:"布(ぬの)",src:"cloth / fabric"}]}]
};
export default BATCH9_L1;
