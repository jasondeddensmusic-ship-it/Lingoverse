// Batch 6 – Unit 17 (B1.1 Passive Voice): Accidents & Incidents
const BATCH6_L1 = {
  id:"jav2_u17l_b6_1", title:"じけんとじこ", icon:"🚨", xp:15, board:true,
  steps:[
    {type:"intro", title:"じけんとじこ",
     desc:"Learn vocabulary for describing accidents, incidents, and unfortunate events. The passive voice naturally fits these topics, as victims describe what happened to them.",
     goals:["Describe accidents and incidents using passive constructions","Report problems to authorities","Use emergency-related vocabulary"]},

    {type:"teach", trg:"じこ", src:"accident", pos:"noun", gender:null,
     note:"Kanji: 事故. こうつうじこ = traffic accident.\nじこにあう = to have an accident.",
     example:"A: けさこうつうじこがありました。\nB: けがにんはいましたか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: There was a traffic accident this morning.\nB: Were there any injured people?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"事故 combines 事 (matter) and 故 (reason/cause). Japan has significantly reduced traffic accidents through strict laws, advanced car technology, and excellent road design. でんしゃじこ (train accidents) cause massive delays, and あわてないで (don't panic) is the standard advice."},

    {type:"teach", trg:"じけん", src:"incident / case / crime", pos:"noun", gender:null,
     note:"Kanji: 事件. さつじんじけん = murder case.\nじけんがおきる = an incident occurs.",
     example:"A: ゆうべこのちかくでじけんがありました。\nB: あぶないですね。きをつけましょう。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: There was an incident near here last night.\nB: That is dangerous. Let us be careful.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"じけん and じこ are often confused. じこ = accidental event (car crash, fall). じけん = deliberate or criminal event (theft, assault). However, overlap exists: かじ (fire) can be either. News programs (ニュース) classify stories as じけんorじこ."},

    {type:"teach", trg:"ぬすむ", src:"to steal", pos:"verb", gender:null,
     note:"Group 1 verb. さいふをぬすまれた = my wallet was stolen (passive).\nKanji: 盗む.",
     example:"A: でんしゃでさいふをぬすまれました。\nB: すぐけいさつにとどけてください。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: My wallet was stolen on the train.\nB: Please report it to the police immediately.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Despite Japan's low crime rate, すり (pickpocketing) does occur on crowded trains. ぬすまれた (was stolen) is the passive form victims use. At こうばん, filing a ひがいとどけ (damage report) is the first step. Japan's lost-and-found system often reunites owners with stolen items."},

    {type:"teach", trg:"なくす", src:"to lose (an item)", pos:"verb", gender:null,
     note:"Group 1 verb. かぎをなくした = I lost my key.\nKanji: 無くす/失くす.",
     example:"A: パスポートをなくしてしまいました。\nB: たいしかんにれんらくしてください。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I accidentally lost my passport.\nB: Please contact the embassy.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"なくす and おとす (to drop) are both used for losing items. てしまう (regretfully did) often accompanies: なくしてしまった (lost it, unfortunately). Japan's remarkably honest society means lost items are often returned. JR trains' おとしものセンター returns about 75% of lost items."},

    {type:"teach", trg:"こわれる", src:"to break (intransitive)", pos:"verb", gender:null,
     note:"Group 2 verb. パソコンがこわれた = the computer broke.\nKanji: 壊れる. Transitive: こわす.",
     example:"A: じてんしゃがこわれてしまいました。\nB: しゅうりにだしましょう。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: My bicycle broke.\nB: Let us have it repaired.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"こわれる (intransitive, it broke) and こわす (transitive, I broke it) are an important pair. Japanese uses intransitive forms when the focus is on the result, not blame: まどがこわれた (the window broke) avoids saying who did it. This indirect style is culturally significant."},

    {type:"mc", q:"さいふをぬすまれた means:", opts:["My wallet was stolen","I stole a wallet","I found a wallet","I lost a wallet"], ans:"My wallet was stolen",
     hint:"ぬすまれた is the passive form of ぬすむ (to steal). The speaker is the victim."},

    {type:"teach", trg:"たおれる", src:"to collapse / to fall down", pos:"verb", gender:null,
     note:"Group 2 verb. ひとがたおれた = a person collapsed.\nKanji: 倒れる. Also: きがたおれた = a tree fell.",
     example:"A: えきでひとがたおれました。\nB: きゅうきゅうしゃをよんでください！\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: A person collapsed at the station.\nB: Please call an ambulance!\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"たおれる describes both people collapsing (from illness, exhaustion) and objects falling over. In Japan, people occasionally たおれる from overwork (過労, かろう). This serious social issue led to the word かろうし (death from overwork), recognized internationally."},

    {type:"teach", trg:"きゅうきゅうしゃ", src:"ambulance", pos:"noun", gender:null,
     note:"Kanji: 救急車. きゅうきゅう = emergency. しゃ = vehicle.\n119にでんわする = to call 119.",
     example:"A: きゅうきゅうしゃをよんでください。\nB: はい、すぐでんわします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Please call an ambulance.\nB: Okay, I will call right away.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"Japanese ambulances are free to use (taxpayer-funded). Call 119 for both fire and ambulance. The operator asks: かじですか、きゅうきゅうですか (fire or ambulance?). Ambulances are white with red stripes and play a distinctive siren. Response time averages about 8 minutes."},

    {type:"teach", trg:"あぶない", src:"dangerous / watch out!", pos:"adj", gender:null,
     note:"I-adjective. あぶない！= Watch out! (warning).\nKanji: 危ない. きけん = danger (noun).",
     example:"A: あぶない！くるまがきます！\nB: ありがとう。みえませんでした。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Watch out! A car is coming!\nB: Thank you. I did not see it.\nA: How was it?\nB: It was very good.",
     funFact:"あぶない serves as both an adjective (dangerous) and an exclamation (watch out!). Signs reading あぶない or きけん (danger) are posted near cliffs, construction sites, and railway crossings. Children learn あぶない early. In anime, it is shouted dramatically before action scenes."},

    {type:"teach", trg:"まもる", src:"to protect / to guard / to observe (rules)", pos:"verb", gender:null,
     note:"Group 1 verb. ルールをまもる = to follow rules.\nKanji: 守る. まもりがたい = hard to protect.",
     example:"A: こうつうルールをまもってください。\nB: はい、きをつけます。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Please follow traffic rules.\nB: Yes, I will be careful.\nA: When was it?\nB: It was last summer.",
     funFact:"まもる has dual meaning: to protect (people) and to observe (rules/promises). やくそくをまもる (keep a promise) and ルールをまもる (follow rules) are drilled into Japanese children from kindergarten. おまもり (守り, protective charm) from shrines are a physical form of まもる."},

    {type:"fb", s:"パスポートを{1}てしまいました。\n(I accidentally lost my passport.)", a:"なくし", opts:["なくし","ぬすみ","こわし","おとし"], sSrc:"I accidentally lost my passport.",
     hint:"The て-form of the verb meaning to lose an item."},

    {type:"teach", trg:"つかまえる", src:"to catch / to capture", pos:"verb", gender:null,
     note:"Group 2 verb. はんにんをつかまえる = to catch the criminal.\nKanji: 捕まえる.",
     example:"A: けいさつがはんにんをつかまえました。\nB: よかったです。あんしんしました。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: The police caught the criminal.\nB: That is good. I feel relieved.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"つかまえる (catch) and つかまる (be caught, intransitive) are a pair. In children's games, おにごっこ (tag) uses つかまえた! (caught you!). The police term たいほする (to arrest) is more formal than つかまえる. In news, ようぎしゃがつかまった (the suspect was caught) is standard phrasing."},

    {type:"teach", trg:"とどける", src:"to deliver / to report / to notify", pos:"verb", gender:null,
     note:"Group 2 verb. けいさつにとどける = to report to police.\nKanji: 届ける.",
     example:"A: おとしものをこうばんにとどけました。\nB: ありがとうございます。おもちぬしをさがします。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I brought a lost item to the police box.\nB: Thank you. We will search for the owner.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"とどける covers both physical delivery and official reporting. ひがいとどけ (damage report), てんにゅうとどけ (move-in notification), and こんいんとどけ (marriage registration) all use とどけ. Japan's civic responsibility culture means people routinely とどける lost items."},

    {type:"mc", q:"きゅうきゅうしゃ is:", opts:["An ambulance","A police car","A fire truck","A taxi"], ans:"An ambulance",
     hint:"This emergency vehicle carries sick or injured people to the hospital."},

    {type:"match", pairs:[
      {trg:"じこ", src:"accident"},
      {trg:"ぬすむ", src:"to steal"},
      {trg:"こわれる", src:"to break"},
      {trg:"あぶない", src:"dangerous"},
      {trg:"まもる", src:"to protect / follow rules"}
    ]},

    {type:"fb", s:"{1}！くるまがきます！\n(Watch out! A car is coming!)", a:"あぶない", opts:["あぶない","あつい","いたい","こわい"], sSrc:"Watch out! A car is coming!",
     hint:"This word serves as both an adjective (dangerous) and a warning shout."},

    {type:"mc", q:"とどける can mean:", opts:["Both to deliver and to report","Only to deliver","Only to report","To steal"], ans:"Both to deliver and to report",
     hint:"This versatile verb covers physical delivery and official notification."}
  ]
};
export default BATCH6_L1;
