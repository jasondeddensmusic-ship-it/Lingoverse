// Batch 9 – Unit 17 (B1.2 Passive): Crime & Safety Vocabulary
const BATCH9_L1 = {
  id:"jav2_u17l_b9_1", title:"あんぜん", icon:"🔒", xp:15, board:true,
  steps:[
    {type:"intro", title:"あんぜん",
     desc:"Learn crime and safety vocabulary often expressed using passive voice. Japan is famously safe, but knowing these words is essential.",
     goals:["Describe incidents using passive voice","Report problems to authorities","Understand safety-related announcements"]},

    {type:"teach", trg:"ぬすまれる", src:"to be stolen (passive)", pos:"verb", gender:null,
     note:"さいふをぬすまれた = My wallet was stolen.\nFrom ぬすむ (to steal).",
     example:"A: さいふをぬすまれました。\nB: けいさつにとどけましょう。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: My wallet was stolen.\nB: Let's report it to the police.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Even in safe Japan, すり (pickpocketing) occurs on crowded trains. The passive ぬすまれる emphasizes the victim's perspective, very natural in Japanese. At こうばん (police boxes), officers help file とどけ (reports). Lost items have a surprisingly high recovery rate in Japan."},

    {type:"teach", trg:"だまされる", src:"to be deceived / to be tricked", pos:"verb", gender:null,
     note:"From だます (to deceive).\nさぎにだまされる = to be tricked by a scam.",
     example:"A: でんわさぎにだまされないでください。\nB: きをつけます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please do not be tricked by phone scams.\nB: I will be careful.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"おれおれさぎ (It's me, it's me scams) target elderly Japanese. Scammers call pretending to be relatives in trouble. Japanese police actively campaign against these. だまされる is the natural passive form. The verb だます can also mean 'to fool' in a playful context."},

    {type:"teach", trg:"まきこまれる", src:"to get caught up in / to get involved", pos:"verb", gender:null,
     note:"じこにまきこまれる = to get caught up in an accident.\nFrom まきこむ (to involve).",
     example:"A: じけんにまきこまれました。\nB: けがはありませんか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I got caught up in an incident.\nB: Are you injured?\nA: How long did it take?\nB: About two hours.",
     funFact:"まきこまれる uses the passive of まきこむ (to roll in/involve). It emphasizes that the person was an unintended participant. トラブルにまきこまれる (get caught up in trouble) is common. Japanese media uses this word for bystanders affected by incidents."},

    {type:"teach", trg:"つかまる", src:"to be caught / to be arrested", pos:"verb", gender:null,
     note:"はんにんがつかまった = The criminal was caught.\nFrom つかまえる (to catch).",
     example:"A: はんにんはつかまりましたか？\nB: はい、きのうたいほされました。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Was the criminal caught?\nB: Yes, they were arrested yesterday.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"つかまる is the intransitive pair of つかまえる (to catch). Japanese crime dramas (けいじドラマ) like 'Detective Conan' use these words constantly. Japan's crime-solving rate (けんきょりつ) for murders is over 95%, one of the world's highest."},

    {type:"teach", trg:"ぼうはん", src:"crime prevention", pos:"noun", gender:null,
     note:"ぼうはんカメラ = security camera.\nぼうはんブザー = personal alarm.",
     example:"A: ぼうはんカメラがたくさんあります。\nB: あんしんですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: There are many security cameras.\nB: That is reassuring.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"Japan's ぼうはん (防犯) culture is extensive yet subtle. Residential areas have ぼうはんパトロール (crime prevention patrols) by volunteers. Children carry ぼうはんブザー (safety buzzers). こどもひゃくとうばん stickers on houses indicate safe refuges for children. The low crime rate is maintained through community ぼうはん efforts."},

    {type:"teach", trg:"とどける", src:"to report / to notify / to deliver", pos:"verb", gender:null,
     note:"けいさつにとどける = to report to police.\nとどけでる = to file a report (formal).",
     example:"A: おとしものをとどけにきました。\nB: ありがとうございます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I came to turn in a lost item.\nB: Thank you.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"とどける (届ける) means both 'to deliver' and 'to report to authorities.' Japanese people routinely とどける found items to こうばん or station offices. Tokyo's とどけもの (lost and found) system returns millions of items yearly. Even cash is frequently returned."},

    {type:"teach", trg:"いしきをうしなう", src:"to lose consciousness", pos:"verb", gender:null,
     note:"いしき = consciousness. うしなう = to lose.\nきゅうきゅうしゃ = ambulance.",
     example:"A: ひとがいしきをうしないました！\nB: きゅうきゅうしゃをよんでください。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Someone lost consciousness!\nB: Please call an ambulance.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"In emergency situations, Japanese people call 119 for きゅうきゅうしゃ (ambulance) and しょうぼうしゃ (fire truck), and 110 for けいさつ (police). AED devices are widely available in public spaces. Japan has one of the highest AED installation rates in the world."},

    {type:"teach", trg:"ふしんしゃ", src:"suspicious person", pos:"noun", gender:null,
     note:"ふしん = suspicious. ふしんしゃじょうほう = suspicious person report.\nCommonly used in safety alerts.",
     example:"A: ふしんしゃをみかけたられんらくしてください。\nB: わかりました。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: If you see a suspicious person, please contact us.\nB: Understood.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ふしんしゃ (不審者) reports are taken seriously in Japan. Schools send ふしんしゃじょうほう alerts to parents via email. Community boards display ふしんしゃ sighting locations. The Japanese approach emphasizes community vigilance (ちいきのめ, community eyes) over heavy policing."},

    {type:"mc", q:"What number do you call for an ambulance in Japan?", opts:["119","110","911","999"], ans:"119",
     hint:"This number connects to both fire and ambulance services in Japan, different from police."},

    {type:"fb", s:"さいふを{1}ました。けいさつにとどけましょう。\n(My wallet was stolen. Let's report it to the police.)", a:"ぬすまれ", opts:["ぬすまれ","だまされ","まきこまれ","つかまり"], sSrc:"My wallet was stolen. Let's report it to the police.",
     hint:"This passive form expresses that something was taken from you without permission."},

    {type:"match", pairs:[
      {trg:"ぬすまれる", src:"to be stolen"},
      {trg:"だまされる", src:"to be deceived"},
      {trg:"ぼうはん", src:"crime prevention"},
      {trg:"とどける", src:"to report/deliver"}
    ]},

    {type:"mc", q:"What is おれおれさぎ?", opts:["A phone scam targeting elderly people","A type of theft","A traffic violation","A cybercrime"], ans:"A phone scam targeting elderly people",
     hint:"Scammers call pretending to be relatives, saying 'it's me, it's me' to trick victims."}
  ]
};
export default BATCH9_L1;
