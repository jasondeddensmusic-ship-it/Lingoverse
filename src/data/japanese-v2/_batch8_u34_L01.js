// Batch 8 – Unit 34 (B2.4 International Relations): Diplomacy & Cooperation
const BATCH8_L1 = {
  id:"jav2_u34l_b8_1", title:"がいこうときょうりょく", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうときょうりょく",
     desc:"Master diplomacy and international cooperation vocabulary essential for discussing world affairs and Japan's role in the international community at N2 level.",
     goals:["Discuss diplomatic relations and treaties","Understand international organization terminology","Analyze Japan's foreign policy vocabulary"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"Kanji: 外交. がいこうかん = diplomat.\nがいこうせいさく = foreign policy.",
     example:"A: にほんのがいこうせいさくについてぎろんします。\nB: にちべいかんけいがちゅうしんですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We will discuss Japan's foreign policy.\nB: Is the US-Japan relationship central?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japan's がいこう balances the にちべいどうめい (US-Japan alliance), アジアがいこう (Asian diplomacy), and こくれんちゅうしんしゅぎ (UN-centered approach). Japan's がいこうかん (diplomats) undergo rigorous training at the がいむしょう (Ministry of Foreign Affairs). Japan is the world's fourth-largest ODA donor."},

    {type:"teach", trg:"しゅのう", src:"head of state / leader / chief", pos:"noun", gender:null,
     note:"Kanji: 首脳. しゅのうかいだん = summit meeting.\nG7しゅのうかいぎ = G7 summit.",
     example:"A: G7しゅのうかいぎがひらかれます。\nB: おもなぎだいはなんですか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: The G7 summit will be held.\nB: What are the main agenda items?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"しゅのう (首脳) literally means 'head brain.' しゅのうかいだん (summit meetings) between Japan's そうりだいじん (Prime Minister) and other leaders shape bilateral relations. Japan hosted G7 summits in Hiroshima (2023) and has hosted multiple APEC and ASEAN-related しゅのうかいぎ."},

    {type:"teach", trg:"ちょうてい", src:"mediation / arbitration / adjustment", pos:"noun", gender:null,
     note:"Kanji: 調停. ふんそうちょうてい = conflict mediation.\nちょうていやく = mediator.",
     example:"A: こくさいふんそうのちょうていにさんかしました。\nB: へいわてきかいけつがだいじですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We participated in international conflict mediation.\nB: Peaceful resolution is important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's role as ちょうていやく (mediator) in international disputes draws on its pacifist constitution. Japan has mediated in various conflicts and disaster relief efforts. The concept of わ (harmony) in Japanese culture supports ちょうてい approaches. Japan's contributions to UN peacekeeping (PKO) reflect this mediating role."},

    {type:"teach", trg:"たこくかんきょうてい", src:"multilateral agreement", pos:"noun", gender:null,
     note:"た (many) + こく (countries) + かん (between) + きょうてい (agreement).\nFTAやEPAがれい.",
     example:"A: あたらしいたこくかんきょうていにさんかします。\nB: かめいこくはなんかこくですか？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: We will participate in a new multilateral agreement.\nB: How many member nations?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan is a member of major たこくかんきょうてい: CPTPP (かんたいへいよう), RCEP (ちいきてきほうかつてきけいざいれんけい), and various UN agreements. Japan's strategy of building たこくかんきょうてい frameworks reflects its geopolitical position between the US, China, and ASEAN nations."},

    {type:"teach", trg:"そうごりかい", src:"mutual understanding", pos:"noun", gender:null,
     note:"そうご (mutual) + りかい (understanding).\nぶんかてきそうごりかい = cultural mutual understanding.",
     example:"A: そうごりかいのためにこうりゅうプログラムをおこなっています。\nB: わかものこうりゅうがこうかてきですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: We conduct exchange programs for mutual understanding.\nB: Youth exchanges are effective.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"そうごりかい is a cornerstone of Japan's ぶんかがいこう (cultural diplomacy). JETプログラム (Japan Exchange and Teaching) brings thousands of foreigners to Japan annually. にほんごきょういく (Japanese language education) abroad promotes そうごりかい. Japan's ソフトパワー through anime, food, and culture builds international understanding."},

    {type:"mc", q:"What does しゅのうかいだん mean?", opts:["Summit meeting between heads of state","A military alliance","A trade agreement","A cultural exchange"], ans:"Summit meeting between heads of state",
     hint:"しゅのう means 'head brain' (leader), and かいだん means talks/m...."},

    {type:"teach", trg:"せいさい", src:"sanctions / punitive measures", pos:"noun", gender:null,
     note:"Kanji: 制裁. けいざいせいさい = economic sanctions.\nせいさいをかす = to impose sanctions.",
     example:"A: こくさいしゃかいがせいさいをかしました。\nB: こうかはありますか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The international community imposed sanctions.\nB: Are they effective?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan participates in こくれんせいさい (UN sanctions) and implements independent せいさい. けいざいせいさい (economic sanctions) include trade restrictions and asset freezes. Japan's sanctions policy balances international cooperation with its own economic interests and regional security concerns."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"Kanji: 難民. なんみんにんてい = refugee recognition.\nなんみんじょうやく = Refugee Convention.",
     example:"A: なんみんにんていりつがひくいとひはんされています。\nB: せいどのかいぜんがもとめられていますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan is criticized for its low refugee recognition rate.\nB: System reform is being demanded.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan's なんみん recognition rate is extremely low (about 1-2% of applications). This contrasts with Germany (25-40%) and Canada (50%+). Critics call Japan しまぐにこんじょう (island nation mentality). Recent reforms in 2023 slightly expanded ほかんてきほご (complementary protection) for those who do not qualify as なんみん but cannot return home."},

    {type:"teach", trg:"じんどうてきえんじょ", src:"humanitarian aid", pos:"noun", gender:null,
     note:"じんどう (humanitarian) + てき + えんじょ (assistance).\nJapan is a major aid donor.",
     example:"A: じんどうてきえんじょをおくりました。\nB: いりょうチームもはけんされましたか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We sent humanitarian aid.\nB: Were medical teams dispatched too?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan's じんどうてきえんじょ is significant globally. Japan International Cooperation Agency (JICA) operates in 150+ countries. Japan's disaster experience drives expert ぼうさいえんじょ (disaster prevention aid). The phrase じんどうてきかいにゅう (humanitarian intervention) sparks debate given Japan's pacifist constitution."},

    {type:"teach", trg:"へいわいじ", src:"peacekeeping", pos:"noun", gender:null,
     note:"Kanji: 平和維持. こくれんへいわいじかつどう = UN peacekeeping operations (PKO).\nへいわいじぐん = peacekeeping force.",
     example:"A: にほんはこくれんPKOにさんかしています。\nB: じえいたいがはけんされていますか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan participates in UN PKO.\nB: Are Self-Defense Forces dispatched?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's PKO participation began in 1992 after controversial legislation. The じえいたい (Self-Defense Forces) have been deployed to Cambodia, Mozambique, South Sudan, and elsewhere. Japan's PKO activities are limited by constitutional constraints: primarily logistical support, engineering, and humanitarian assistance rather than combat roles."},

    {type:"teach", trg:"ぐんしゅく", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"Kanji: 軍縮. かくぐんしゅく = nuclear disarmament.\nぐんしゅくかいぎ = disarmament conference.",
     example:"A: かくぐんしゅくのこうしょうがつづいています。\nB: にほんはひかくさんこくとしてせっきょくてきですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Nuclear disarmament negotiations continue.\nB: Japan is active as a non-nuclear state.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's unique position as the only country to suffer nuclear attack makes かくぐんしゅく advocacy deeply personal. Hiroshima and Nagasaki's ひばくしゃ (atomic bomb survivors) have led global ぐんしゅく movements. Japan supports the NPT (かくふかくさんじょうやく) but has not signed the Nuclear Weapons Ban Treaty, creating a policy tension."},

    {type:"fb", s:"こくさいしゃかいがけいざい{1}をかしました。\n(The international community imposed economic sanctions.)", a:"せいさい", opts:["せいさい","きょうてい","ちょうてい","えんじょ"], sSrc:"The international community imposed economic sanctions.",
     hint:"This word means punitive measures taken against a country."},

    {type:"teach", trg:"どうめい", src:"alliance", pos:"noun", gender:null,
     note:"Kanji: 同盟. にちべいどうめい = US-Japan alliance.\nぐんじどうめい = military alliance.",
     example:"A: にちべいどうめいはにほんのあんぜんほしょうのきばんです。\nB: せんごながくつづいていますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The US-Japan alliance is the foundation of Japan's security.\nB: It has continued since the postwar era.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"にちべいどうめい (US-Japan alliance) has been the cornerstone of Japan's security since 1951. US military bases in Japan (mainly Okinawa) are both valued for security and controversial locally. The alliance extends to economic and technological cooperation. Japan's defense spending has increased significantly since 2022."},

    {type:"teach", trg:"きんちょう", src:"tension / strain", pos:"noun", gender:null,
     note:"Kanji: 緊張. こくさいてききんちょう = international tension.\nきんちょうかんけい = strained relations.",
     example:"A: ちいきのきんちょうがたかまっています。\nB: がいこうてきかいけつをのぞみます。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Regional tensions are heightening.\nB: I hope for a diplomatic resolution.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"きんちょう in international relations often appears in Japanese news about East Asian geopolitics: ちゅうごくとのきんちょう, かんとうほうめんのきんちょう (Korean Peninsula tension). Japan's geographic position between great powers makes きんちょう management a constant foreign policy challenge."},

    {type:"match", pairs:[{trg:"がいこう",src:"diplomacy"},{trg:"せいさい",src:"sanctions"},{trg:"なんみん",src:"refugee"},{trg:"どうめい",src:"alliance"},{trg:"ぐんしゅく",src:"disarmament"}],
     hint:"Match each international relations term with its English meaning."},

    {type:"mc", q:"Why is Japan's なんみん recognition rate criticized?", opts:["It is extremely low at about 1-2% of applications","It is too high","The process is too fast","There are no applications"], ans:"It is extremely low at about 1-2% of applications",
     hint:"This rate is significantly lower than most other developed nations."},

    {type:"fb", s:"にちべい{1}はにほんのあんぜんほしょうのきばんです。\n(The US-Japan alliance is the foundation of Japan's security.)", a:"どうめい", opts:["どうめい","がいこう","きんちょう","ちょうてい"], sSrc:"The US-Japan alliance is the foundation of Japan's security.",
     hint:"This word means a formal partnership between nations for mutual benefit."},

    {type:"mc", q:"What limits Japan's PKO military activities abroad?", opts:["Constitutional constraints from Article 9","Lack of military equipment","International treaties","Budget limitations"], ans:"Constitutional constraints from Article 9",
     hint:"Japan's pacifist constitution restricts the use of force in international operations."}
  ]
};
export default BATCH8_L1;
