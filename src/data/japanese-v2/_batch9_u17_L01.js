// Batch 9 – Unit 17 (B1.2 Passive): Crime & Safety Vocabulary
const BATCH9_L1 = {
  id:"jav2_u17l_b9_1", title:"安全(あんぜん)", icon:"🔒", xp:15, board:true,
  steps:[
    {type:"intro", title:"安全(あんぜん)",
     desc:"Learn crime and safety vocabulary often expressed using passive voice. Japan is famously safe, but knowing these words is essential.",
     goals:["Describe incidents using passive voice","Report problems to authorities","Understand safety-related announcements"]},

    {type:"teach", trg:"盗(ぬす)まれる", src:"to be stolen (passive)", pos:"verb", gender:null,
     note:"財布(さいふ)を盗(ぬす)まれた = My wallet was stolen.\nFrom 盗(ぬす)む (to steal).",
     example:"A: 財布(さいふ)を盗(ぬす)まれました。\nB: 警察(けいさつ)に届(とど)けましょう。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: My wallet was stolen.\nB: Let's report it to the police.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Even in safe Japan, すり (pickpocketing) occurs on crowded trains. The passive 盗(ぬす)まれる emphasizes the victim's perspective, very natural in Japanese. At 交番(こうばん) (police boxes), officers help file 届(とど)け (reports). Lost items have a surprisingly high recovery rate in Japan."},

    {type:"teach", trg:"騙(だま)される", src:"to be deceived / to be tricked", pos:"verb", gender:null,
     note:"From 騙(だま)す (to deceive).\n詐欺(さぎ)に騙(だま)される = to be tricked by a scam.",
     example:"A: 電話詐欺(でんわさぎ)に騙(だま)されないでください。\nB: 気(き)をつけます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please do not be tricked by phone scams.\nB: I will be careful.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"おれおれ詐欺(さぎ) (It's me, it's me scams) target elderly Japanese. Scammers call pretending to be relatives in trouble. Japanese police actively campaign against these. 騙(だま)される is the natural passive form. The verb 騙(だま)す can also mean 'to fool' in a playful context."},

    {type:"teach", trg:"巻(ま)き込(こ)まれる", src:"to get caught up in / to get involved", pos:"verb", gender:null,
     note:"事故(じこ)に巻(ま)き込(こ)まれる = to get caught up in an accident.\nFrom 巻(ま)き込(こ)む (to involve).",
     example:"A: 事件(じけん)に巻(ま)き込(こ)まれました。\nB: 怪我(けが)はありませんか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I got caught up in an incident.\nB: Are you injured?\nA: How long did it take?\nB: About two hours.",
     funFact:"巻(ま)き込(こ)まれる uses the passive of 巻(ま)き込(こ)む (to roll in/involve). It emphasizes that the person was an unintended participant. トラブルに巻(ま)き込(こ)まれる (get caught up in trouble) is common. Japanese media uses this word for bystanders affected by incidents."},

    {type:"teach", trg:"捕(つか)まる", src:"to be caught / to be arrested", pos:"verb", gender:null,
     note:"犯人(はんにん)が捕(つか)まった = The criminal was caught.\nFrom 捕(つか)まえる (to catch).",
     example:"A: 犯人(はんにん)は捕(つか)まりましたか？\nB: はい、昨日(きのう)逮捕(たいほ)されました。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Was the criminal caught?\nB: Yes, they were arrested yesterday.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"捕(つか)まる is the intransitive pair of 捕(つか)まえる (to catch). Japanese crime dramas (刑事(けいじ)ドラマ) like 'Detective Conan' use these words constantly. Japan's crime-solving rate (検挙率(けんきょりつ)) for murders is over 95%, one of the world's highest."},

    {type:"teach", trg:"防犯(ぼうはん)", src:"crime prevention", pos:"noun", gender:null,
     note:"防犯(ぼうはん)カメラ = security camera.\n防犯(ぼうはん)ブザー = personal alarm.",
     example:"A: 防犯(ぼうはん)カメラがたくさんあります。\nB: 安心(あんしん)ですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: There are many security cameras.\nB: That is reassuring.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japan's 防犯(ぼうはん) (防犯) culture is extensive yet subtle. Residential areas have 防犯(ぼうはん)パトロール (crime prevention patrols) by volunteers. Children carry 防犯(ぼうはん)ブザー (safety buzzers). こどもひゃくとうばん stickers on houses indicate safe refuges for children. The low crime rate is maintained through community 防犯(ぼうはん) efforts."},

    {type:"teach", trg:"届(とど)ける", src:"to report / to notify / to deliver", pos:"verb", gender:null,
     note:"警察(けいさつ)に届(とど)ける = to report to police.\n届(とど)け出(で)る = to file a report (formal).",
     example:"A: 落(お)とし物(もの)を届(とど)けに来(き)ました。\nB: ありがとうございます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I came to turn in a lost item.\nB: Thank you.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"届(とど)ける (届ける) means both 'to deliver' and 'to report to authorities.' Japanese people routinely 届(とど)ける found items to 交番(こうばん) or station offices. Tokyo's 届(とど)け物(もの) (lost and found) system returns millions of items yearly. Even cash is frequently returned."},

    {type:"teach", trg:"意識(いしき)を失(うしな)う", src:"to lose consciousness", pos:"verb", gender:null,
     note:"意識(いしき) = consciousness. 失(うしな)う = to lose.\n救急車(きゅうきゅうしゃ) = ambulance.",
     example:"A: 人(ひと)が意識(いしき)を失(うしな)いました！\nB: 救急車(きゅうきゅうしゃ)を呼(よ)んでください。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Someone lost consciousness!\nB: Please call an ambulance.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"In emergency situations, Japanese people call 119 for 救急車(きゅうきゅうしゃ) (ambulance) and 消防車(しょうぼうしゃ) (fire truck), and 110 for 警察(けいさつ) (police). AED devices are widely available in public spaces. Japan has one of the highest AED installation rates in the world."},

    {type:"teach", trg:"不審者(ふしんしゃ)", src:"suspicious person", pos:"noun", gender:null,
     note:"不審(ふしん) = suspicious. 不審者(ふしんしゃ)情報(じょうほう) = suspicious person report.\nCommonly used in safety alerts.",
     example:"A: 不審者(ふしんしゃ)を見(み)かけたられんらくしてください。\nB: わかりました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: If you see a suspicious person, please contact us.\nB: Understood.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"不審者(ふしんしゃ) (不審者) reports are taken seriously in Japan. Schools send 不審者(ふしんしゃ)情報(じょうほう) alerts to parents via email. Community boards display 不審者(ふしんしゃ) sighting locations. The Japanese approach emphasizes community vigilance (地域(ちいき)の目(め), community eyes) over heavy policing."},

    {type:"mc", q:"What number do you call for an ambulance in Japan?", opts:["119","110","911","999"], ans:"119",
     hint:"This number connects to both fire and ambulance services in Japan, different from police."},

    {type:"fb", s:"財布(さいふ)を{1}ました。警察(けいさつ)に届(とど)けましょう。\n(My wallet was stolen. Let's report it to the police.)", a:"盗(ぬす)まれ", opts:["盗(ぬす)まれ","騙(だま)され","巻(ま)き込(こ)まれ","捕(つか)まり"], sSrc:"My wallet was stolen. Let's report it to the police.",
     hint:"This passive form expresses that something was taken from you without permission."},

    {type:"match", pairs:[
      {trg:"盗(ぬす)まれる", src:"to be stolen"},
      {trg:"騙(だま)される", src:"to be deceived"},
      {trg:"防犯(ぼうはん)", src:"crime prevention"},
      {trg:"届(とど)ける", src:"to report/deliver"}
    ]},

    {type:"mc", q:"What is おれおれさぎ?", opts:["A phone scam targeting elderly people","A type of theft","A traffic violation","A cybercrime"], ans:"A phone scam targeting elderly people",
     hint:"Scammers call pretending to be relatives, saying 'it's me, it's me' to trick victims."}
  ,{type:"match",pairs:[{trg:"巻(ま)き込(こ)まれる",src:"to get caught up in / to get involved"},{trg:"捕(つか)まる",src:"to be caught / to be arrested"},{trg:"意識(いしき)を失(うしな)う",src:"to lose consciousness"},{trg:"不審者(ふしんしゃ)",src:"suspicious person"}]}]
};
export default BATCH9_L1;
