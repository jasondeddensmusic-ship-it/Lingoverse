// Batch 9 – Unit 17 (B1.2 Passive): Crime & Safety Vocabulary
const BATCH9_L1 = {
  id:"jav2_u17l_b9_1", title:"あんぜん", icon:"🔒", xp:15, board:true,
  steps:[
    {type:"intro", title:"あんぜん",
     desc:"Learn crime and safety vocabulary often expressed using passive voice. Japan is famously safe, but knowing these words is essential.",
     goals:["Describe incidents using passive voice","Report problems to authorities","Understand safety-related announcements"]},

    {type:"teach", trg:"ぬすまれる", src:"to be stolen (passive)", pos:"verb", gender:null,
     note:"さいふをぬすまれた = My wallet was stolen.\nFrom ぬすむ (to steal).",
     example:"A: さいふをぬすまれました。\nB: けいさつにとどけましょう。",
     exampleSrc:"A: My wallet was stolen.\nB: Let's report it to the police.",
     funFact:"Even in safe Japan, すり (pickpocketing) occurs on crowded trains. The passive ぬすまれる emphasizes the victim's perspective, very natural in Japanese. At こうばん (police boxes), officers help file とどけ (reports). Lost items have a surprisingly high recovery rate in Japan."},

    {type:"teach", trg:"だまされる", src:"to be deceived / to be tricked", pos:"verb", gender:null,
     note:"From だます (to deceive).\nさぎにだまされる = to be tricked by a scam.",
     example:"A: でんわさぎにだまされないでください。\nB: きをつけます。",
     exampleSrc:"A: Please do not be tricked by phone scams.\nB: I will be careful.",
     funFact:"おれおれさぎ (It's me, it's me scams) target elderly Japanese. Scammers call pretending to be relatives in trouble. Japanese police actively campaign against these. だまされる is the natural passive form. The verb だます can also mean 'to fool' in a playful context."},

    {type:"teach", trg:"まきこまれる", src:"to get caught up in / to get involved", pos:"verb", gender:null,
     note:"じこにまきこまれる = to get caught up in an accident.\nFrom まきこむ (to involve).",
     example:"A: じけんにまきこまれました。\nB: けがはありませんか？",
     exampleSrc:"A: I got caught up in an incident.\nB: Are you injured?",
     funFact:"まきこまれる uses the passive of まきこむ (to roll in/involve). It emphasizes that the person was an unintended participant. トラブルにまきこまれる (get caught up in trouble) is common. Japanese media uses this word for bystanders affected by incidents."},

    {type:"teach", trg:"つかまる", src:"to be caught / to be arrested", pos:"verb", gender:null,
     note:"はんにんがつかまった = The criminal was caught.\nFrom つかまえる (to catch).",
     example:"A: はんにんはつかまりましたか？\nB: はい、きのうたいほされました。",
     exampleSrc:"A: Was the criminal caught?\nB: Yes, they were arrested yesterday.",
     funFact:"つかまる is the intransitive pair of つかまえる (to catch). Japanese crime dramas (けいじドラマ) like 'Detective Conan' use these words constantly. Japan's crime-solving rate (けんきょりつ) for murders is over 95%, one of the world's highest."},

    {type:"teach", trg:"ぼうはん", src:"crime prevention", pos:"noun", gender:null,
     note:"ぼうはんカメラ = security camera.\nぼうはんブザー = personal alarm.",
     example:"A: ぼうはんカメラがたくさんあります。\nB: あんしんですね。",
     exampleSrc:"A: There are many security cameras.\nB: That is reassuring.",
     funFact:"Japan's ぼうはん (防犯) culture is extensive yet subtle. Residential areas have ぼうはんパトロール (crime prevention patrols) by volunteers. Children carry ぼうはんブザー (safety buzzers). こどもひゃくとうばん stickers on houses indicate safe refuges for children. The low crime rate is maintained through community ぼうはん efforts."},

    {type:"teach", trg:"とどける", src:"to report / to notify / to deliver", pos:"verb", gender:null,
     note:"けいさつにとどける = to report to police.\nとどけでる = to file a report (formal).",
     example:"A: おとしものをとどけにきました。\nB: ありがとうございます。",
     exampleSrc:"A: I came to turn in a lost item.\nB: Thank you.",
     funFact:"とどける (届ける) means both 'to deliver' and 'to report to authorities.' Japanese people routinely とどける found items to こうばん or station offices. Tokyo's とどけもの (lost and found) system returns millions of items yearly. Even cash is frequently returned."},

    {type:"teach", trg:"いしきをうしなう", src:"to lose consciousness", pos:"verb", gender:null,
     note:"いしき = consciousness. うしなう = to lose.\nきゅうきゅうしゃ = ambulance.",
     example:"A: ひとがいしきをうしないました！\nB: きゅうきゅうしゃをよんでください。",
     exampleSrc:"A: Someone lost consciousness!\nB: Please call an ambulance.",
     funFact:"In emergency situations, Japanese people call 119 for きゅうきゅうしゃ (ambulance) and しょうぼうしゃ (fire truck), and 110 for けいさつ (police). AED devices are widely available in public spaces. Japan has one of the highest AED installation rates in the world."},

    {type:"teach", trg:"ふしんしゃ", src:"suspicious person", pos:"noun", gender:null,
     note:"ふしん = suspicious. ふしんしゃじょうほう = suspicious person report.\nCommonly used in safety alerts.",
     example:"A: ふしんしゃをみかけたられんらくしてください。\nB: わかりました。",
     exampleSrc:"A: If you see a suspicious person, please contact us.\nB: Understood.",
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
