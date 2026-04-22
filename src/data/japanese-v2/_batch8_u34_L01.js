// Batch 8 – Unit 34 (B2.4 International Relations): Diplomacy & Cooperation
const BATCH8_L1 = {
  id:"jav2_u34l_b8_1", title:"外交(がいこう)と協力(きょうりょく)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"外交(がいこう)と協力(きょうりょく)",
     desc:"Master diplomacy and international cooperation vocabulary essential for discussing world affairs and Japan's role in the international community at N2 level.",
     goals:["Discuss diplomatic relations and treaties","Understand international organization terminology","Analyze Japan's foreign policy vocabulary"]},

    {type:"teach", trg:"外交(がいこう)", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"外交官(がいこうかん) = diplomat.\n外交政策(がいこうせいさく) = foreign policy.",
     example:"A: 日本(にほん)の外交政策(がいこうせいさく)について議論(ぎろん)します。\nB: 日米関係(にちべいかんけい)が中心(ちゅうしん)ですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We will discuss Japan's foreign policy.\nB: Is the US-Japan relationship central?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japan's 外交(がいこう) balances the 日米同盟(にちべいどうめい) (US-Japan alliance), アジア外交(がいこう) (Asian diplomacy), and 国連中心主義(こくれんちゅうしんしゅぎ) (UN-centered approach). Japan's 外交官(がいこうかん) (diplomats) undergo rigorous training at the 外務省(がいむしょう) (Ministry of Foreign Affairs). Japan is the world's fourth-largest ODA donor."},

    {type:"teach", trg:"首脳(しゅのう)", src:"head of state / leader / chief", pos:"noun", gender:null,
     note:"首脳会談(しゅのうかいだん) = summit meeting.\nG7首脳会議(しゅのうかいぎ) = G7 summit.",
     example:"A: G7首脳会議(しゅのうかいぎ)が開(ひら)かれます。\nB: 主(おも)な議題(ぎだい)は何(なん)ですか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: The G7 summit will be held.\nB: What are the main agenda items?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"首脳(しゅのう) literally means 'head brain.' 首脳会談(しゅのうかいだん) (summit meetings) between Japan's 総理大臣(そうりだいじん) (Prime Minister) and other leaders shape bilateral relations. Japan hosted G7 summits in Hiroshima (2023) and has hosted multiple APEC and ASEAN-related 首脳会議(しゅのうかいぎ)."},

    {type:"teach", trg:"調停(ちょうてい)", src:"mediation / arbitration / adjustment", pos:"noun", gender:null,
     note:"紛争調停(ふんそうちょうてい) = conflict mediation.\n調停役(ちょうていやく) = mediator.",
     example:"A: 国際紛争(こくさいふんそう)の調停(ちょうてい)に参加(さんか)しました。\nB: 平和的解決(へいわてきかいけつ)が大事(だいじ)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We participated in international conflict mediation.\nB: Peaceful resolution is important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's role as 調停役(ちょうていやく) (mediator) in international disputes draws on its pacifist constitution. Japan has mediated in various conflicts and disaster relief efforts. The concept of 和(わ) (harmony) in Japanese culture supports 調停(ちょうてい) approaches. Japan's contributions to UN peacekeeping (PKO) reflect this mediating role."},

    {type:"teach", trg:"多国間協定(たこくかんきょうてい)", src:"multilateral agreement", pos:"noun", gender:null,
     note:"多(た) (many) + 国(こく) (countries) + 間(かん) (between) + 協定(きょうてい) (agreement).\nFTAやEPAが例(れい).",
     example:"A: 新(あたら)しい多国間協定(たこくかんきょうてい)に参加(さんか)します。\nB: 加盟国(かめいこく)は何(なん)か国(こく)ですか？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: We will participate in a new multilateral agreement.\nB: How many member nations?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan is a member of major 多国間協定(たこくかんきょうてい): CPTPP (環太平洋(かんたいへいよう)), RCEP (地域的包括的経済連携(ちいきてきほうかつてきけいざいれんけい)), and various UN agreements. Japan's strategy of building 多国間協定(たこくかんきょうてい) frameworks reflects its geopolitical position between the US, China, and ASEAN nations."},

    {type:"teach", trg:"相互理解(そうごりかい)", src:"mutual understanding", pos:"noun", gender:null,
     note:"相互(そうご) (mutual) + 理解(りかい) (understanding).\n文化的相互理解(ぶんかてきそうごりかい) = cultural mutual understanding.",
     example:"A: 相互理解(そうごりかい)のために交流(こうりゅう)プログラムを行(おこな)っています。\nB: 若者交流(わかものこうりゅう)が効果的(こうかてき)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: We conduct exchange programs for mutual understanding.\nB: Youth exchanges are effective.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"相互理解(そうごりかい) is a cornerstone of Japan's 文化外交(ぶんかがいこう) (cultural diplomacy). JETプログラム (Japan Exchange and Teaching) brings thousands of foreigners to Japan annually. 日本語教育(にほんごきょういく) (Japanese language education) abroad promotes 相互理解(そうごりかい). Japan's ソフトパワー through anime, food, and culture builds international understanding."},

    {type:"mc", q:"What does 首脳会談(しゅのうかいだん) mean?", opts:["Summit meeting between heads of state","A military alliance","A trade agreement","A cultural exchange"], ans:"Summit meeting between heads of state",
     hint:"首脳(しゅのう) means 'head brain' (top leader), and 会談(かいだん) means high-level talks between nations."},

    {type:"teach", trg:"制裁(せいさい)", src:"sanctions / punitive measures", pos:"noun", gender:null,
     note:"経済制裁(けいざいせいさい) = economic sanctions.\n制裁(せいさい)を課(か)す = to impose sanctions.",
     example:"A: 国際社会(こくさいしゃかい)が制裁(せいさい)を課(か)しました。\nB: 効果(こうか)はありますか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The international community imposed sanctions.\nB: Are they effective?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan participates in 国連制裁(こくれんせいさい) (UN sanctions) and implements independent 制裁(せいさい). 経済制裁(けいざいせいさい) (economic sanctions) include trade restrictions and asset freezes. Japan's sanctions policy balances international cooperation with its own economic interests and regional security concerns."},

    {type:"teach", trg:"難民(なんみん)", src:"refugee", pos:"noun", gender:null,
     note:"難民認定(なんみんにんてい) = refugee recognition.\n難民条約(なんみんじょうやく) = Refugee Convention.",
     example:"A: 難民認定率(なんみんにんていりつ)が低(ひく)いと批判(ひはん)されています。\nB: 制度(せいど)の改善(かいぜん)が求(もと)められていますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Japan is criticized for its low refugee recognition rate.\nB: System reform is being demanded.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan's 難民(なんみん) recognition rate is extremely low (about 1-2% of applications). This contrasts with Germany (25-40%) and Canada (50%+). Critics call Japan 島国根性(しまぐにこんじょう) (island nation mentality). Recent reforms in 2023 slightly expanded 補完的保護(ほかんてきほご) (complementary protection) for those who do not qualify as 難民(なんみん) but cannot return home."},

    {type:"teach", trg:"人道的援助(じんどうてきえんじょ)", src:"humanitarian aid", pos:"noun", gender:null,
     note:"人道(じんどう) (humanitarian) + 的(てき) + 援助(えんじょ) (assistance).\nJapan is a major aid donor.",
     example:"A: 人道的援助(じんどうてきえんじょ)を送(おく)りました。\nB: 医療(いりょう)チームも派遣(はけん)されましたか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We sent humanitarian aid.\nB: Were medical teams dispatched too?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan's 人道的援助(じんどうてきえんじょ) is significant globally. Japan International Cooperation Agency (JICA) operates in 150+ countries. Japan's disaster experience drives expert 防災援助(ぼうさいえんじょ) (disaster prevention aid). The phrase 人道的介入(じんどうてきかいにゅう) (humanitarian intervention) sparks debate given Japan's pacifist constitution."},

    {type:"teach", trg:"平和維持(へいわいじ)", src:"peacekeeping", pos:"noun", gender:null,
     note:"国連平和維持活動(こくれんへいわいじかつどう) = UN peacekeeping operations (PKO).\n平和維持軍(へいわいじぐん) = peacekeeping force.",
     example:"A: 日本(にほん)は国連(こくれん)PKOに参加(さんか)しています。\nB: 自衛隊(じえいたい)が派遣(はけん)されていますか？\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japan participates in UN PKO.\nB: Are Self-Defense Forces dispatched?\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan's PKO participation began in 1992 after controversial legislation. The 自衛隊(じえいたい) (Self-Defense Forces) have been deployed to Cambodia, Mozambique, South Sudan, and elsewhere. Japan's PKO activities are limited by constitutional constraints: primarily logistical support, engineering, and humanitarian assistance rather than combat roles."},

    {type:"teach", trg:"軍縮(ぐんしゅく)", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"核軍縮(かくぐんしゅく) = nuclear disarmament.\n軍縮会議(ぐんしゅくかいぎ) = disarmament conference.",
     example:"A: 核軍縮(かくぐんしゅく)の交渉(こうしょう)が続(つづ)いています。\nB: 日本(にほん)は非核三原則(ひかくさんげんそく)として積極的(せっきょくてき)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Nuclear disarmament negotiations continue.\nB: Japan is active as a non-nuclear state.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's unique position as the only country to suffer nuclear attack makes 核軍縮(かくぐんしゅく) advocacy deeply personal. Hiroshima and Nagasaki's 被爆者(ひばくしゃ) (atomic bomb survivors) have led global 軍縮(ぐんしゅく) movements. Japan supports the NPT (核不拡散条約(かくふかくさんじょうやく)) but has not signed the Nuclear Weapons Ban Treaty, creating a policy tension."},

    {type:"fb", s:"国際社会(こくさいしゃかい)が経済(けいざい){1}を課(か)しました。\n(The international community imposed economic sanctions.)", a:"制裁(せいさい)", opts:["制裁(せいさい)","協定(きょうてい)","調停(ちょうてい)","援助(えんじょ)"], sSrc:"The international community imposed economic sanctions.",
     hint:"This word means punitive measures taken against a country."},

    {type:"teach", trg:"同盟(どうめい)", src:"alliance", pos:"noun", gender:null,
     note:"日米同盟(にちべいどうめい) = US-Japan alliance.\n軍事同盟(ぐんじどうめい) = military alliance.",
     example:"A: 日米同盟(にちべいどうめい)は日本(にほん)の安全保障(あんぜんほしょう)の基盤(きばん)です。\nB: 戦後(せんご)長(なが)く続(つづ)いていますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The US-Japan alliance is the foundation of Japan's security.\nB: It has continued since the postwar era.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"日米同盟(にちべいどうめい) (US-Japan alliance) has been the cornerstone of Japan's security since 1951. US military bases in Japan (mainly Okinawa) are both valued for security and controversial locally. The alliance extends to economic and technological cooperation. Japan's defense spending has increased significantly since 2022."},

    {type:"teach", trg:"緊張(きんちょう)", src:"tension / strain", pos:"noun", gender:null,
     note:"国際的緊張(こくさいてききんちょう) = international tension.\n緊張関係(きんちょうかんけい) = strained relations.",
     example:"A: 地域(ちいき)の緊張(きんちょう)が高(たか)まっています。\nB: 外交的解決(がいこうてきかいけつ)を望(のぞ)みます。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Regional tensions are heightening.\nB: I hope for a diplomatic resolution.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"緊張(きんちょう) in international relations often appears in Japanese news about East Asian geopolitics: 中国(ちゅうごく)との緊張(きんちょう), 朝鮮半島(かんとうはんとう)の緊張(きんちょう) (Korean Peninsula tension). Japan's geographic position between great powers makes 緊張(きんちょう) management a constant foreign policy challenge."},

    {type:"match", pairs:[{trg:"外交(がいこう)",src:"diplomacy"},{trg:"制裁(せいさい)",src:"sanctions"},{trg:"難民(なんみん)",src:"refugee"},{trg:"同盟(どうめい)",src:"alliance"},{trg:"軍縮(ぐんしゅく)",src:"disarmament"}],
     hint:"Match each international relations term with its English meaning."},

    {type:"mc", q:"Why is Japan's 難民(なんみん) recognition rate criticized?", opts:["There are no applications","It is extremely low at about 1-2% of applications","It is too high","The process is too fast"], ans:"It is extremely low at about 1-2% of applications",
     hint:"This rate is significantly lower than most other developed nations."},

    {type:"fb", s:"日米(にちべい){1}は日本(にほん)の安全保障(あんぜんほしょう)の基盤(きばん)です。\n(The US-Japan alliance is the foundation of Japan's security.)", a:"同盟(どうめい)", opts:["同盟(どうめい)","外交(がいこう)","緊張(きんちょう)","調停(ちょうてい)"], sSrc:"The US-Japan alliance is the foundation of Japan's security.",
     hint:"This word means a formal partnership between nations for mutual benefit."},

    {type:"mc", q:"What limits Japan's PKO military activities abroad?", opts:["International treaties","Budget limitations","Constitutional constraints from Article 9","Lack of military equipment"], ans:"Constitutional constraints from Article 9",
     hint:"Japan's pacifist constitution restricts the use of force in international operations."}
  ,{type:"match",pairs:[{trg:"首脳(しゅのう)",src:"head of state / leader / chief"},{trg:"調停(ちょうてい)",src:"mediation / arbitration / adjustment"},{trg:"多国間協定(たこくかんきょうてい)",src:"multilateral agreement"},{trg:"相互理解(そうごりかい)",src:"mutual understanding"},{trg:"人道的援助(じんどうてきえんじょ)",src:"humanitarian aid"},{trg:"平和維持(へいわいじ)",src:"peacekeeping"}]},{type:"match",pairs:[{trg:"緊張(きんちょう)",src:"tension / strain"}]}]
};
export default BATCH8_L1;
