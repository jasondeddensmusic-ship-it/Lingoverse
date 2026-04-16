// Unit 30 Batch 2 Lesson 2: りんりとせきにん (Ethics & Responsibility)
const BATCH2_L_2 = {
  id:"jav2_u30l_b2_2", title:"りんりとせきにん", icon:"🧭", xp:15, board:true,
  steps:[
    {type:"intro", title:"りんりとせきにん",
     desc:"Ethical reasoning requires vocabulary for duty, fairness, justice, and moral dilemmas. These terms are essential for discussing social issues, business ethics, and philosophical questions at the B2 level and appear frequently in JLPT N1 passages.",
     goals:["Use ethics and moral vocabulary","Discuss fairness and justice","Navigate moral dilemma terminology"]},

    {type:"teach", trg:"こうせい", src:"fairness / impartiality / justice", pos:"noun", gender:null,
     note:"Kanji: 公正. こうせいなさいばん = fair trial.\nこうせいせい = fairness.",
     example:"A: こうせいなしゃかいをじつげんするためになにがひつようですか？\nB: きかいのびょうどうとほうのしはいがきほんです。",
     exampleSrc:"A: What is needed to realize a fair society?\nB: Equal opportunity and the rule of law are fundamental.",
     funFact:"公正 uses 公 (public) and 正 (correct/just). While こうへい (公平, equality) focuses on equal treatment, こうせい emphasizes proper process and impartial judgment. The こうせいとりひきいいんかい (Fair Trade Commission) regulates business practices. In philosophy, こうせい maps to Rawls' concept of 'justice as fairness.'"},

    {type:"teach", trg:"びょうどう", src:"equality / equal", pos:"noun", gender:null,
     note:"Kanji: 平等. びょうどうけん = equal rights.\nだんじょびょうどう = gender equality.",
     example:"A: だんじょびょうどうのじつげんはまだどじょうにあります。\nB: いしきかいかくとせいどかいかくのりょうほうがひつようです。",
     exampleSrc:"A: Achieving gender equality is still a work in progress.\nB: Both mindset reform and institutional reform are needed.",
     funFact:"平等 uses 平 (flat/level) and 等 (equal/class). Japan ranked 125th out of 146 countries in the 2023 Global Gender Gap Index, highlighting significant だんじょびょうどう challenges especially in politics and business leadership. The word びょうどう itself was coined during the Meiji era to translate the Western concept of equality."},

    {type:"teach", trg:"せいぎ", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義. せいぎかん = sense of justice.\nしゃかいせいぎ = social justice.",
     example:"A: せいぎとはなにかというもんだいはふるくてあたらしいてつがくてきもんだいです。\nB: じだいやぶんかによってこたえがかわりますね。",
     exampleSrc:"A: The question of what justice is, is an old yet new philosophical problem.\nB: The answer changes with the era and culture.",
     funFact:"正義 uses 正 (correct) and 義 (righteousness). In Japanese popular culture, せいぎのみかた (ally of justice) is a phrase associated with superhero anime and tokusatsu shows. Philosophically, the concept of せいぎ in Japan draws from both Confucian 義 (duty/righteousness) and Western natural law traditions."},

    {type:"mc", q:"だんじょびょうどう means:", opts:["Gender equality","Economic equality","Educational equality","Legal equality"], ans:"Gender equality",
     hint:"だんじょ means 'male and female' combined with the word for e...."},

    {type:"teach", trg:"じんけん", src:"human rights", pos:"noun", gender:null,
     note:"Kanji: 人権. きほんてきじんけん = fundamental human rights.\nじんけんしんがい = human rights violation.",
     example:"A: きほんてきじんけんはすべてのひとにほしょうされるべきです。\nB: にほんこくけんぽうでもほしょうされていますね。",
     exampleSrc:"A: Fundamental human rights should be guaranteed to all people.\nB: They are also guaranteed in Japan's Constitution.",
     funFact:"人権 uses 人 (person) and 権 (right/authority). Japan's Constitution guarantees extensive じんけん in Articles 11-40. However, debates continue around issues like death penalty, immigration detention, and LGBTQ+ rights. じんけんきょういく (human rights education) is part of the school curriculum, addressing discrimination against various groups."},

    {type:"teach", trg:"さべつ", src:"discrimination", pos:"noun", gender:null,
     note:"Kanji: 差別. さべつする = to discriminate.\nじんしゅさべつ = racial discrimination.",
     example:"A: あらゆるさべつをなくすどりょくがひつようです。\nB: まずじぶんのへんけんにきづくことからはじまります。",
     exampleSrc:"A: Efforts to eliminate all forms of discrimination are needed.\nB: It starts with becoming aware of your own biases.",
     funFact:"差別 uses 差 (difference) and 別 (separate/distinct). Japan faces several forms of さべつ: against the Burakumin (historical outcaste group), against Ainu and Okinawan peoples, against foreign residents, and gender-based discrimination. The ぶらくさべつ issue, rooted in feudal-era social hierarchy, remains sensitive despite decades of legislation."},

    {type:"teach", trg:"じゆういし", src:"free will", pos:"noun", gender:null,
     note:"Kanji: 自由意志. A central concept in philosophy and ethics.\nじゆういしのもんだい = the problem of free will.",
     example:"A: にんげんにじゆういしはあるのでしょうか？\nB: のうかがくのしんぽがそのぎろんにあたらしいしてんをくわえています。",
     exampleSrc:"A: Do humans have free will?\nB: Advances in brain science are adding new perspectives to that debate.",
     funFact:"自由意志 combines 自由 (freedom) and 意志 (will/intention). This philosophical concept spans Western and Eastern traditions. In Japanese Buddhist philosophy, the question takes a different form: if the self is an illusion (むが, anatta), can じゆういし exist? Modern Japanese philosophers engage with both traditions."},

    {type:"fb", s:"あらゆるさべつをなくす{1}がひつようです。\n(Efforts to eliminate all forms of discrimination are needed.)", a:"どりょく", opts:["どりょく","けんり","せいぎ","びょうどう"], sSrc:"Efforts to eliminate all forms of discrimination are needed.",
     hint:"The noun meaning 'effort' or 'endeavor,' the sustained work needed to achieve change."},

    {type:"teach", trg:"きはん", src:"norm / standard / code of conduct", pos:"noun", gender:null,
     note:"Kanji: 規範. しゃかいきはん = social norms.\nどうとくてききはん = moral standards.",
     example:"A: しゃかいきはんはじだいとともにへんかします。\nB: なにがしょうとなにがひかもかわりますね。",
     exampleSrc:"A: Social norms change with the times.\nB: What is right and what is wrong also change.",
     funFact:"規範 uses 規 (rule/compass) and 範 (model/example). きはん represents the standards a society considers proper behavior. Japanese しゃかいきはん are often unwritten but strongly felt: removing shoes indoors, not eating while walking, and quiet behavior on trains. These informal きはん are as powerful as written rules."},

    {type:"teach", trg:"りょうしん", src:"conscience / moral sense", pos:"noun", gender:null,
     note:"Kanji: 良心. りょうしんにしたがう = to follow one's conscience.\nりょうしんのかしゃく = pangs of conscience.",
     example:"A: りょうしんにしたがってこうどうすることがだいじです。\nB: しかし、りょうしんとしゃかいきはんがしょうとつすることもあります。",
     exampleSrc:"A: It is important to act according to your conscience.\nB: However, conscience and social norms can sometimes conflict.",
     funFact:"良心 uses 良 (good) and 心 (heart/mind). The 'good heart' concept parallels Mencius's teaching that humans are inherently good. In Japanese moral education, りょうしん is taught as an inner compass. The expression りょうしんのかしゃく (pangs of conscience) describes the discomfort of acting against one's moral sense."},

    {type:"teach", trg:"ジレンマ", src:"dilemma", pos:"noun", gender:null,
     note:"Loanword from English/Greek. どうとくてきジレンマ = moral dilemma.\nA situation requiring choice between equally difficult options.",
     example:"A: かんきょうほごとけいざいせいちょうのあいだにはジレンマがあります。\nB: りょうりつさせるほうほうをさがすべきですね。",
     exampleSrc:"A: There is a dilemma between environmental protection and economic growth.\nB: We should search for ways to achieve both.",
     funFact:"ジレンマ entered Japanese from the Greek 'dilemma' via English. Japanese philosophy and ethics courses use the famous 'trolley problem' (トロッコもんだい) to explore moral dilemmas. The Japanese approach to ジレンマ often seeks a 'third way' (だいさんのみち) that transcends the either/or choice, reflecting the cultural preference for harmony."},

    {type:"mc", q:"りょうしん means:", opts:["Conscience / moral sense","Intelligence","Social status","Legal knowledge"], ans:"Conscience / moral sense",
     hint:"The compound of 'good' and 'heart,' describing your inner m... compass."},

    {type:"fb", s:"しゃかい{1}はじだいとともにへんかします。\n(Social norms change with the times.)", a:"きはん", opts:["きはん","せいぎ","じんけん","びょうどう"], sSrc:"Social norms change with the times.",
     hint:"The noun meaning 'norm' or 'standard,' the unwritten rules that guide behavior."},

    {type:"match", pairs:[{trg:"こうせい",src:"fairness"},{trg:"びょうどう",src:"equality"},{trg:"せいぎ",src:"justice"},{trg:"じんけん",src:"human rights"}]},

    {type:"fb", s:"かんきょうほごとけいざいせいちょうのあいだには{1}があります。\n(There is a dilemma between environmental protection and economic growth.)", a:"ジレンマ", opts:["ジレンマ","きはん","せいぎ","もんだい"], sSrc:"There is a dilemma between environmental protection and economic growth.",
     hint:"The loanword for a situation requiring a difficult choice between two options."},

    {type:"match", pairs:[{trg:"さべつ",src:"discrimination"},{trg:"じゆういし",src:"free will"},{trg:"きはん",src:"norm"},{trg:"りょうしん",src:"conscience"}]},

    {type:"mc", q:"The Japanese approach to moral dilemmas often seeks:", opts:["The harshest punishment","A third way that transcends either/or choices","Complete avoidance of the issue","Majority rule decision"], ans:"A third way that transcends either/or choices",
     hint:"Japanese culture often prefers harmony and synthesis over binary choices."},
  ]
};
export default BATCH2_L_2;
