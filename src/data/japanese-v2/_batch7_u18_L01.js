// Batch 7 – Unit 18 (B1.2 Causative): Workplace Hierarchy Vocabulary
const BATCH7_L1 = {
  id:"jav2_u18l_b7_1", title:"職場(しょくば)の関係(かんけい)", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"職場(しょくば)の関係(かんけい)",
     desc:"Learn workplace hierarchy and relationship vocabulary. Japanese business culture has distinct roles, titles, and interaction patterns that connect naturally with causative grammar.",
     goals:["Name workplace positions and roles","Understand senpai-kouhai dynamics","Use hierarchy-appropriate expressions"]},

    {type:"teach", trg:"上司(じょうし)", src:"boss / superior", pos:"noun", gender:null,
     note:"上司(じょうし) = superior. 部下(ぶか) = subordinate.\n上司(じょうし)に報告(ほうこく)する = to report to one's boss.",
     example:"A: 上司(じょうし)に相談(そうだん)してみます。\nB: いい考(かんが)えですね。\nA: そうですか。良(よ)かったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I will consult with my boss.\nB: Good idea.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"上司(じょうし) relationships define Japanese work life. You report up (報告(ほうこく)), consult (相談(そうだん)), and get approval (承認(しょうにん)) from your 上司(じょうし). The phrase ほうれんそう (報連相(ほうれんそう): report, contact, consult) is the mantra of Japanese workplace communication. New employees learn this day one."},

    {type:"teach", trg:"部下(ぶか)", src:"subordinate / direct report", pos:"noun", gender:null,
     note:"部下(ぶか) = subordinate. 部下(ぶか)を育(そだ)てる = to develop subordinates.\n部下(ぶか)の面倒(めんどう)を見(み)る = to look after subordinates.",
     example:"A: 部下(ぶか)の相談(そうだん)に乗(の)っています。\nB: いい上司(じょうし)ですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I am listening to my subordinate's concerns.\nB: You are a good boss.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"A good 上司(じょうし) develops their 部下(ぶか) through 教(おし)える (teaching) and まかせる (entrusting tasks). The relationship ideally resembles a mentor-student bond. 部下(ぶか) are expected to show respect, but 上司(じょうし) are expected to protect and grow their team. Poor leadership is called パワハラ (power harassment)."},

    {type:"teach", trg:"先輩(せんぱい)", src:"senior (at work/school)", pos:"noun", gender:null,
     note:"Person who joined before you. 先輩(せんぱい)後輩(こうはい) = seniority system.\n先輩(せんぱい)に習(なら)う = to learn from seniors.",
     example:"A: 先輩(せんぱい)に教(おし)えてもらいました。\nB: 優(やさ)しい先輩(せんぱい)ですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: My senior taught me.\nB: A kind senior.\nA: How long did it take?\nB: About two hours.",
     funFact:"The 先輩(せんぱい)後輩(こうはい) system governs nearly all Japanese social institutions: schools, companies, clubs, teams. 先輩(せんぱい) mentor and protect 後輩(こうはい). In return, 後輩(こうはい) show respect and deference. This hierarchical relationship lasts for life, even decades after graduation."},

    {type:"teach", trg:"後輩(こうはい)", src:"junior (at work/school)", pos:"noun", gender:null,
     note:"Person who joined after you. 後輩(こうはい)の面倒(めんどう)を見(み)る = to look after juniors.",
     example:"A: 後輩(こうはい)に仕事(しごと)を教(おし)えています。\nB: 先輩(せんぱい)らしいですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I am teaching work to my juniors.\nB: That is very senpai-like.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"後輩(こうはい) are expected to use polite language with 先輩(せんぱい), pour drinks first, and carry bags. In school clubs, 後輩(こうはい) often clean up and prepare equipment. This sounds strict, but the system also provides 後輩(こうはい) with guidance, protection, and a clear social framework."},

    {type:"teach", trg:"同僚(どうりょう)", src:"colleague / coworker", pos:"noun", gender:null,
     note:"同(どう) = same, 僚(りょう) = companion.\n同僚(どうりょう)と飲(の)みに行(い)く = to go drinking with colleagues.",
     example:"A: 同僚(どうりょう)とランチに行(い)きます。\nB: いいですね。どこで食(た)べますか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I am going to lunch with colleagues.\nB: Nice. Where are you eating?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"同僚(どうりょう) relationships are crucial for workplace harmony (和(わ)). After-work drinks (飲(の)み会(かい)) with 同僚(どうりょう) are a Japanese tradition for building bonds. Declining too often can hurt relationships. The phrase 飲(の)みニケーション (nomi-nication, drinking + communication) describes this culture."},

    {type:"teach", trg:"新人(しんじん)", src:"new employee / newcomer", pos:"noun", gender:null,
     note:"新人(しんじん)研修(けんしゅう) = new employee training.\n新人(しんじん)社員(しゃいん) = new staff member.",
     example:"A: 今年(ことし)の新人(しんじん)は優秀(ゆうしゅう)ですね。\nB: はい、よく頑張(がんば)っています。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: This year's new employees are excellent.\nB: Yes, they are working hard.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"新人(しんじん) all start in April after graduation. The first year is a learning period with intensive training (研修(けんしゅう)). 新人(しんじん) are forgiven for mistakes (新人(しんじん)だから仕方(しかた)ない: they are new, it cannot be helped). After one year, the next batch of 新人(しんじん) arrives, and the cycle continues."},

    {type:"teach", trg:"課長(かちょう)", src:"section chief / manager", pos:"noun", gender:null,
     note:"課(か) = section, 長(ちょう) = chief.\nThe backbone of Japanese management.",
     example:"A: 課長(かちょう)、資料(しりょう)ができました。\nB: ありがとう。確認(かくにん)します。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Manager, the materials are ready.\nB: Thank you. I will check them.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"課長(かちょう) is the iconic middle-management position. The 'Kacho' appears in countless anime, manga, and dramas as the stressed but dedicated manager. 島耕作(しまこうさく) (Shima Kosaku), a famous manga character, famously progressed from 課長(かちょう) through every rank to 社長(しゃちょう) (president)."},

    {type:"teach", trg:"部長(ぶちょう)", src:"department head / director", pos:"noun", gender:null,
     note:"部(ぶ) = department, 長(ちょう) = chief.\n課長(かちょう) above, 社長(しゃちょう) below in the hierarchy.",
     example:"A: 部長(ぶちょう)の承認(しょうにん)が必要(ひつよう)です。\nB: 明日(あした)部長(ぶちょう)にお願(ねが)いします。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: We need the director's approval.\nB: I will ask the director tomorrow.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"部長(ぶちょう) has real authority over budgets and personnel. In Japanese companies, decisions flow up through 課長(かちょう) to 部長(ぶちょう) before reaching executives. The ringi system (稟議(りんぎ), circulating approval documents) means 部長(ぶちょう) sign-off is essential. 部長(ぶちょう) drinking invitations are hard to refuse."},

    {type:"teach", trg:"残業(ざんぎょう)", src:"overtime work", pos:"noun", gender:null,
     note:"残業(ざんぎょう)する = to work overtime.\n残業代(ざんぎょうだい) = overtime pay.",
     example:"A: 今日(きょう)も残業(ざんぎょう)ですか？\nB: はい、締(し)め切(き)りが近(ちか)いので。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Overtime again today?\nB: Yes, the deadline is close.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"残業(ざんぎょう) culture is a defining feature of Japanese work. サービス残業(ざんぎょう) (unpaid overtime) was historically common. Recent labor reforms cap overtime at 45 hours/month. The phrase ブラック企業(きぎょう) (black company) describes firms that exploit workers with excessive 残業(ざんぎょう)."},

    {type:"teach", trg:"有給(ゆうきゅう)", src:"paid leave / paid vacation", pos:"noun", gender:null,
     note:"有給休暇(ゆうきゅうきゅうか) = paid leave.\n有給(ゆうきゅう)を使(つか)う = to use paid leave.",
     example:"A: 有給(ゆうきゅう)は何日(なんにち)残(のこ)っていますか？\nB: まだ10日(にち)あります。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: How many paid leave days do you have left?\nB: I still have 10 days.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"Japanese workers famously underuse 有給(ゆうきゅう). The usage rate is about 60%, low by global standards. Workers feel guilty about burdening colleagues. Since 2019, companies must ensure workers take at least 5 有給(ゆうきゅう) days per year. Slowly, attitudes are changing."},

    {type:"teach", trg:"迷惑(めいわく)", src:"trouble / inconvenience / bother", pos:"noun", gender:null,
     note:"迷惑(めいわく)をかける = to cause trouble for others.\nご迷惑(めいわく)をおかけして = sorry for the inconvenience.",
     example:"A: 迷惑(めいわく)をおかけしてすみません。\nB: いいえ、大丈夫(だいじょうぶ)ですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I am sorry for causing trouble.\nB: No, it is fine.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"迷惑(めいわく) is perhaps the most powerful social concept in Japan. Not causing 迷惑(めいわく) to others drives behavior in trains (no phone calls), apartments (no noise), and workplaces (no absences). The phrase 人(ひと)に迷惑(めいわく)をかけない (do not trouble others) is taught from early childhood."},

    {type:"teach", trg:"協力(きょうりょく)する", src:"to cooperate", pos:"verb", gender:null,
     note:"Suru verb. 協力(きょうりょく) = cooperation.\nご協力(きょうりょく)お願(ねが)いします = please cooperate.",
     example:"A: このプロジェクトはみんなの協力(きょうりょく)が必要(ひつよう)です。\nB: もちろん協力(きょうりょく)します。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: This project requires everyone's cooperation.\nB: Of course I will cooperate.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"協力(きょうりょく) is the lifeblood of Japanese organizations. ご協力(きょうりょく)お願(ねが)いします (please cooperate) is heard on trains, in stores, and at events. Japanese teamwork (チームワーク) prioritizes harmony and collective effort. Individual achievement is valued less than group 協力(きょうりょく)."},

    // Quiz steps
    {type:"mc", q:"ほうれんそう in the workplace means:",
     opts:["Report, Contact, Consult (communication mantra)","A vegetable-based lunch","Morning exercises","Company rules"],
     ans:"Report, Contact, Consult (communication mantra)",
     hint:"This acronym (報連相(ほうれんそう)) describes the three pillars of Japanese workplace c...."},

    {type:"match", pairs:[
      {trg:"上司(じょうし)", src:"boss/superior"},
      {trg:"部下(ぶか)", src:"subordinate"},
      {trg:"先輩(せんぱい)", src:"senior"},
      {trg:"後輩(こうはい)", src:"junior"},
      {trg:"同僚(どうりょう)", src:"colleague"}
    ,{trg:"有給(ゆうきゅう)",src:"paid leave / paid vacation"}]},

    {type:"fb", s:"今日(きょう)も{1}ですか？早(はや)く帰(かえ)りましょう。",
     a:["残業(ざんぎょう)"],
     opts:["残業(ざんぎょう)","有給(ゆうきゅう)","就職(しゅうしょく)","退職(たいしょく)"],
     hint:"Working beyond regular hours again? This noun means 'overtime.'",
     sSrc:"Is it {1} again today? Let us go home early."},

    {type:"mc", q:"人(ひと)に迷惑(めいわく)をかけない means:",
     opts:["Speak louder","Do not cause trouble for others","Work harder","Be more creative"],
     ans:"Do not cause trouble for others",
     hint:"This principle is taught from early childhood and drives much of Japanese social behavior."},

    {type:"fb", s:"{1}、資料(しりょう)ができました。ご確認(かくにん)ください。",
     a:["課長(かちょう)"],
     opts:["課長(かちょう)","新人(しんじん)","後輩(こうはい)","同僚(どうりょう)"],
     hint:"Addressing the section chief/manager with completed materials. A middle-management title.",
     sSrc:"{1}, the materials are ready. Please review them."},

    {type:"mc", q:"Japanese workers underuse 有給(ゆうきゅう) because:",
     opts:["They do not get paid leave","Companies do not offer it","They feel guilty about burdening colleagues","The law forbids it"],
     ans:"They feel guilty about burdening colleagues",
     hint:"The 迷惑(めいわく) concept makes workers reluctant to take leave, though the law now mandates minimum usage."},

    {type:"match", pairs:[
      {trg:"課長(かちょう)", src:"section chief"},
      {trg:"部長(ぶちょう)", src:"department head"},
      {trg:"新人(しんじん)", src:"new employee"},
      {trg:"残業(ざんぎょう)", src:"overtime"},
      {trg:"迷惑(めいわく)", src:"trouble/bother"}
    ]},

    {type:"fb", s:"このプロジェクトはみんなの{1}が必要(ひつよう)です。",
     a:["協力(きょうりょく)"],
     opts:["協力(きょうりょく)","迷惑(めいわく)","残業(ざんぎょう)","有給(ゆうきゅう)"],
     hint:"This project needs everyone working together. This noun means 'cooperation.'",
     sSrc:"This project requires everyone's {1}."}
  ]
};
export default BATCH7_L1;
