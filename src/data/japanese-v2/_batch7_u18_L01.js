// Batch 7 – Unit 18 (B1.2 Causative): Workplace Hierarchy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u18l_b7_1", title:"しょくばのかんけい", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょくばのかんけい",
     desc:"Learn workplace hierarchy and relationship vocabulary. Japanese business culture has distinct roles, titles, and interaction patterns that connect naturally with causative grammar.",
     goals:["Name workplace positions and roles","Understand senpai-kouhai dynamics","Use hierarchy-appropriate expressions"]},

    {type:"teach", trg:"じょうし", src:"boss / superior", pos:"noun", gender:null,
     note:"じょうし = superior. ぶか = subordinate.\nじょうしにほうこくする = to report to one's boss.",
     example:"A: じょうしにそうだんしてみます。\nB: いいかんがえですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I will consult with my boss.\nB: Good idea.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"じょうし (上司) relationships define Japanese work life. You report up (報告), consult (相談), and get approval (承認) from your じょうし. The phrase ほうれんそう (報連相: report, contact, consult) is the mantra of Japanese workplace communication. New employees learn this day one."},

    {type:"teach", trg:"ぶか", src:"subordinate / direct report", pos:"noun", gender:null,
     note:"ぶか = subordinate. ぶかをそだてる = to develop subordinates.\nぶかのめんどうをみる = to look after subordinates.",
     example:"A: ぶかのそうだんにのっています。\nB: いいじょうしですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I am listening to my subordinate's concerns.\nB: You are a good boss.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"A good じょうし develops their ぶか through おしえる (teaching) and まかせる (entrusting tasks). The relationship ideally resembles a mentor-student bond. ぶか are expected to show respect, but じょうし are expected to protect and grow their team. Poor leadership is called パワハラ (power harassment)."},

    {type:"teach", trg:"せんぱい", src:"senior (at work/school)", pos:"noun", gender:null,
     note:"Person who joined before you. せんぱいこうはい = seniority system.\nせんぱいにならう = to learn from seniors.",
     example:"A: せんぱいにおしえてもらいました。\nB: やさしいせんぱいですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: My senior taught me.\nB: A kind senior.\nA: How long did it take?\nB: About two hours.",
     funFact:"The せんぱいこうはい (先輩後輩) system governs nearly all Japanese social institutions: schools, companies, clubs, teams. せんぱい mentor and protect こうはい. In return, こうはい show respect and deference. This hierarchical relationship lasts for life, even decades after graduation."},

    {type:"teach", trg:"こうはい", src:"junior (at work/school)", pos:"noun", gender:null,
     note:"Person who joined after you. こうはいのめんどうをみる = to look after juniors.",
     example:"A: こうはいにしごとをおしえています。\nB: せんぱいらしいですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I am teaching work to my juniors.\nB: That is very senpai-like.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"こうはい (後輩) are expected to use polite language with せんぱい, pour drinks first, and carry bags. In school clubs, こうはい often clean up and prepare equipment. This sounds strict, but the system also provides こうはい with guidance, protection, and a clear social framework."},

    {type:"teach", trg:"どうりょう", src:"colleague / coworker", pos:"noun", gender:null,
     note:"どう = same, りょう = companion.\nどうりょうとのみにいく = to go drinking with colleagues.",
     example:"A: どうりょうとランチにいきます。\nB: いいですね。どこでたべますか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I am going to lunch with colleagues.\nB: Nice. Where are you eating?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"どうりょう (同僚) relationships are crucial for workplace harmony (和, わ). After-work drinks (飲み会, のみかい) with どうりょう are a Japanese tradition for building bonds. Declining too often can hurt relationships. The phrase 飲みニケーション (nomi-nication, drinking + communication) describes this culture."},

    {type:"teach", trg:"しんじん", src:"new employee / newcomer", pos:"noun", gender:null,
     note:"しんじんけんしゅう = new employee training.\nしんじんしゃいん = new staff member.",
     example:"A: ことしのしんじんはゆうしゅうですね。\nB: はい、よくがんばっています。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: This year's new employees are excellent.\nB: Yes, they are working hard.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"しんじん (新人) all start in April after graduation. The first year is a learning period with intensive training (研修, けんしゅう). しんじん are forgiven for mistakes (新人だから仕方ない: they are new, it cannot be helped). After one year, the next batch of しんじん arrives, and the cycle continues."},

    {type:"teach", trg:"かちょう", src:"section chief / manager", pos:"noun", gender:null,
     note:"か = section, ちょう = chief.\nThe backbone of Japanese management.",
     example:"A: かちょう、しりょうができました。\nB: ありがとう。かくにんします。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Manager, the materials are ready.\nB: Thank you. I will check them.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"かちょう (課長) is the iconic middle-management position. The 'Kacho' appears in countless anime, manga, and dramas as the stressed but dedicated manager. 島耕作 (Shima Kosaku), a famous manga character, famously progressed from かちょう through every rank to 社長 (president)."},

    {type:"teach", trg:"ぶちょう", src:"department head / director", pos:"noun", gender:null,
     note:"ぶ = department, ちょう = chief.\nかちょう above, しゃちょう below in the hierarchy.",
     example:"A: ぶちょうのしょうにんがひつようです。\nB: あしたぶちょうにおねがいします。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: We need the director's approval.\nB: I will ask the director tomorrow.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ぶちょう (部長) has real authority over budgets and personnel. In Japanese companies, decisions flow up through かちょう to ぶちょう before reaching executives. The ringi system (稟議, circulating approval documents) means ぶちょう sign-off is essential. ぶちょう drinking invitations are hard to refuse."},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"ざんぎょうする = to work overtime.\nざんぎょうだい = overtime pay.",
     example:"A: きょうもざんぎょうですか？\nB: はい、しめきりがちかいので。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Overtime again today?\nB: Yes, the deadline is close.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ざんぎょう (残業) culture is a defining feature of Japanese work. サービスざんぎょう (unpaid overtime) was historically common. Recent labor reforms cap overtime at 45 hours/month. The phrase ブラックきぎょう (black company) describes firms that exploit workers with excessive ざんぎょう."},

    {type:"teach", trg:"ゆうきゅう", src:"paid leave / paid vacation", pos:"noun", gender:null,
     note:"ゆうきゅうきゅうか = paid leave.\nゆうきゅうをつかう = to use paid leave.",
     example:"A: ゆうきゅうはなんにちのこっていますか？\nB: まだ10にちあります。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: How many paid leave days do you have left?\nB: I still have 10 days.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Japanese workers famously underuse ゆうきゅう (有給). The usage rate is about 60%, low by global standards. Workers feel guilty about burdening colleagues. Since 2019, companies must ensure workers take at least 5 ゆうきゅう days per year. Slowly, attitudes are changing."},

    {type:"teach", trg:"めいわく", src:"trouble / inconvenience / bother", pos:"noun", gender:null,
     note:"めいわくをかける = to cause trouble for others.\nごめいわくをおかけして = sorry for the inconvenience.",
     example:"A: めいわくをおかけしてすみません。\nB: いいえ、だいじょうぶですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I am sorry for causing trouble.\nB: No, it is fine.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"めいわく (迷惑) is perhaps the most powerful social concept in Japan. Not causing めいわく to others drives behavior in trains (no phone calls), apartments (no noise), and workplaces (no absences). The phrase 人に迷惑をかけない (do not trouble others) is taught from early childhood."},

    {type:"teach", trg:"きょうりょくする", src:"to cooperate", pos:"verb", gender:null,
     note:"Suru verb. きょうりょく = cooperation.\nごきょうりょくおねがいします = please cooperate.",
     example:"A: このプロジェクトはみんなのきょうりょくがひつようです。\nB: もちろんきょうりょくします。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: This project requires everyone's cooperation.\nB: Of course I will cooperate.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"きょうりょく (協力) is the lifeblood of Japanese organizations. ごきょうりょくおねがいします (please cooperate) is heard on trains, in stores, and at events. Japanese teamwork (チームワーク) prioritizes harmony and collective effort. Individual achievement is valued less than group きょうりょく."},

    // Quiz steps
    {type:"mc", q:"ほうれんそう in the workplace means:",
     opts:["Report, Contact, Consult (communication mantra)","A vegetable-based lunch","Morning exercises","Company rules"],
     ans:"Report, Contact, Consult (communication mantra)",
     hint:"This acronym (報連相) describes the three pillars of Japanese workplace c...."},

    {type:"match", pairs:[
      {trg:"じょうし", src:"boss/superior"},
      {trg:"ぶか", src:"subordinate"},
      {trg:"せんぱい", src:"senior"},
      {trg:"こうはい", src:"junior"},
      {trg:"どうりょう", src:"colleague"}
    ]},

    {type:"fb", s:"きょうも{1}ですか？はやくかえりましょう。",
     a:["ざんぎょう"],
     opts:["ざんぎょう","ゆうきゅう","しゅうしょく","たいしょく"],
     hint:"Working beyond regular hours again? This noun means 'overtime.'",
     sSrc:"Is it {1} again today? Let us go home early."},

    {type:"mc", q:"ひとにめいわくをかけない means:",
     opts:["Do not cause trouble for others","Work harder","Be more creative","Speak louder"],
     ans:"Do not cause trouble for others",
     hint:"This principle is taught from early childhood and drives much of Japanese social behavior."},

    {type:"fb", s:"{1}、しりょうができました。ごかくにんください。",
     a:["かちょう"],
     opts:["かちょう","しんじん","こうはい","どうりょう"],
     hint:"Addressing the section chief/manager with completed materials. A middle-management title.",
     sSrc:"{1}, the materials are ready. Please review them."},

    {type:"mc", q:"Japanese workers underuse ゆうきゅう because:",
     opts:["They feel guilty about burdening colleagues","The law forbids it","They do not get paid leave","Companies do not offer it"],
     ans:"They feel guilty about burdening colleagues",
     hint:"The めいわく concept makes workers reluctant to take leave, though the law now mandates minimum usage."},

    {type:"match", pairs:[
      {trg:"かちょう", src:"section chief"},
      {trg:"ぶちょう", src:"department head"},
      {trg:"しんじん", src:"new employee"},
      {trg:"ざんぎょう", src:"overtime"},
      {trg:"めいわく", src:"trouble/bother"}
    ]},

    {type:"fb", s:"このプロジェクトはみんなの{1}がひつようです。",
     a:["きょうりょく"],
     opts:["きょうりょく","めいわく","ざんぎょう","ゆうきゅう"],
     hint:"This project needs everyone working together. This noun means 'cooperation.'",
     sSrc:"This project requires everyone's {1}."}
  ]
};
export default BATCH7_L1;
