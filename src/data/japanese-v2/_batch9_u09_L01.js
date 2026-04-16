// Batch 9 – Unit 09 (A2.1 Shopping): Clothing & Fashion
const BATCH9_L1 = {
  id:"jav2_u09l_b9_1", title:"ふく", icon:"👗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ふく",
     desc:"Learn clothing vocabulary and shopping phrases for fashion in Japan. Japanese has specific verbs for wearing different types of clothing.",
     goals:["Name common clothing items","Use the correct wearing verbs","Handle fitting room conversations"]},

    {type:"teach", trg:"ジャケット", src:"jacket", pos:"noun", gender:null,
     note:"From English 'jacket.' うわぎ = Japanese term.\nジャケットをきる = to wear a jacket.",
     example:"A: さむいですね。ジャケットをきましょう。\nB: そうですね。",
     exampleSrc:"A: It is cold. Let's put on jackets.\nB: Yes, let's.",
     funFact:"Japanese fashion is globally influential. Tokyo's はらじゅく (Harajuku) district is famous for avant-garde fashion. Japanese ジャケット styling tends to be more fitted than Western styles. The concept of TPO (Time, Place, Occasion) governs Japanese dress codes strictly."},

    {type:"teach", trg:"スカート", src:"skirt", pos:"noun", gender:null,
     note:"From English 'skirt.' ミニスカート = miniskirt.\nスカートをはく = to wear a skirt.",
     example:"A: そのスカートはかわいいですね。\nB: ありがとう。セールでかいました。",
     exampleSrc:"A: That skirt is cute.\nB: Thanks. I bought it on sale.",
     funFact:"Japanese school uniforms often feature スカート for girls, and the length is a cultural battleground. Schools set rules, but students often fold waistbands to shorten them. Japanese スカート丈 (skirt length) trends have changed dramatically across decades."},

    {type:"teach", trg:"コート", src:"coat / overcoat", pos:"noun", gender:null,
     note:"From English 'coat.' ダウンコート = down coat.\nコートをぬぐ = to take off a coat.",
     example:"A: コートをおあずかりします。\nB: おねがいします。",
     exampleSrc:"A: I will take your coat.\nB: Please.",
     funFact:"In Japan, you remove your コート before entering someone's home or office building, folding it over your arm. This is basic manners. Japanese people are very particular about seasonal clothing transitions. Wearing a コート too early or too late draws attention."},

    {type:"teach", trg:"サイズ", src:"size", pos:"noun", gender:null,
     note:"From English 'size.' S, M, L or Japanese sizing.\nサイズがあわない = the size does not fit.",
     example:"A: このサイズはありますか？\nB: Mサイズですね。こちらです。",
     exampleSrc:"A: Do you have this size?\nB: Size M, right? Here it is.",
     funFact:"Japanese サイズ runs smaller than Western sizing. A Japanese L often equals a Western M. This surprises many tourists. Japanese clothing brands often use フリーサイズ (free size/one size fits all), which accommodates a narrower range than the term suggests."},

    {type:"teach", trg:"しちゃくしつ", src:"fitting room", pos:"noun", gender:null,
     note:"しちゃく = trying on, しつ = room.\nしちゃくしてもいいですか = May I try this on?",
     example:"A: しちゃくしてもいいですか？\nB: どうぞ。しちゃくしつはあちらです。",
     exampleSrc:"A: May I try this on?\nB: Please. The fitting room is over there.",
     funFact:"Japanese しちゃくしつ (試着室) etiquette requires removing shoes and sometimes placing a cloth over your head to avoid getting makeup on clothes. Staff hand you a フェイスカバー (face cover). Trying on without asking first is considered rude."},

    {type:"teach", trg:"にあう", src:"to suit / to look good on", pos:"verb", gender:null,
     note:"よくにあっています = It looks great on you.\nにあわない = does not suit.",
     example:"A: このいろ、にあいますか？\nB: とてもにあっていますよ。",
     exampleSrc:"A: Does this color suit me?\nB: It looks great on you.",
     funFact:"にあう (似合う) literally means 'to resemble and match.' Japanese shop staff are trained to give にあう compliments to customers. The phrase にあいますね is one of the most common things you hear while shopping. にあわない is rarely said directly to avoid hurting feelings."},

    {type:"teach", trg:"はやっている", src:"trendy / in fashion", pos:"verb", gender:null,
     note:"はやる = to become popular/trendy.\nいまはやっている = currently trendy.",
     example:"A: いまどんなスタイルがはやっていますか？\nB: オーバーサイズがはやっています。",
     exampleSrc:"A: What style is trendy now?\nB: Oversized is trending.",
     funFact:"はやる (流行る) covers everything from fashion to food to slang. Japanese trends move fast, and りゅうこう (fashion trends) change seasonally. Fashion magazines like non-no, ViVi, and Men's non-no drive trends. The phrase りゅうこうにびんかん means 'sensitive to trends.'"},

    {type:"teach", trg:"ぬの", src:"cloth / fabric", pos:"noun", gender:null,
     note:"ぬのじ = textile. コットン = cotton. シルク = silk.\nぬのをえらぶ = to choose fabric.",
     example:"A: このぬのはなんですか？\nB: シルクです。てざわりがいいでしょう？",
     exampleSrc:"A: What fabric is this?\nB: It is silk. Nice texture, right?",
     funFact:"Japan has a rich ぬの (布) tradition. にしじんおり (Nishijin weaving) in Kyoto has 1,500 years of history. Japanese silk production was once a major industry. The word てぬぐい (hand towel) uses the same ぬの character and is a traditional multi-purpose cloth."},

    {type:"mc", q:"Which verb means 'to suit' or 'to look good on' someone?", opts:["にあう","きる","はく","かける"], ans:"にあう",
     hint:"This verb describes when a particular clothing item or style matches a person well."},

    {type:"fb", s:"{1}してもいいですか？\n(May I try this on?)", a:"しちゃく", opts:["しちゃく","にあい","かいもの","おかいけい"], sSrc:"May I try this on?",
     hint:"This word means 'trying on' clothing, and the room for it is called しちゃくしつ."},

    {type:"match", pairs:[
      {trg:"サイズ", src:"size"},
      {trg:"しちゃくしつ", src:"fitting room"},
      {trg:"にあう", src:"to suit"},
      {trg:"はやっている", src:"trendy"}
    ]},

    {type:"mc", q:"What should you do in a Japanese fitting room before trying on clothes?", opts:["Use a face cover to protect clothes from makeup","Take a selfie","Ask for a different size","Remove all accessories"], ans:"Use a face cover to protect clothes from makeup",
     hint:"Staff often hand you a フェイスカバー to prevent cosmetics from transferring to garments."}
  ]
};
export default BATCH9_L1;
