// Batch 7 – Unit 34 (B2.2 International Relations): Diplomacy & Global Affairs
const BATCH7_L1 = {
  id:"jav2_u34l_b7_1", title:"がいこうようご", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこうようご",
     desc:"Learn vocabulary for international relations, diplomacy, and global affairs. These JLPT N1-level terms appear in news about Japan's role in the world.",
     goals:["Discuss international relations and diplomacy","Use treaty and agreement vocabulary","Analyze geopolitical situations"]},

    {type:"teach", trg:"がいこう", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"がいこうかん = diplomat. がいこうせいさく = foreign policy.\nがいこうもんだい = diplomatic issue.",
     example:"A: にほんのがいこうせいさくについてどうおもいますか？\nB: へいわてきながいこうがだいじです。",
     exampleSrc:"A: What do you think about Japan's foreign policy?\nB: Peaceful diplomacy is important.",
     funFact:"Japan's がいこう (外交) since WWII has emphasized 平和外交 (peaceful diplomacy) and economic cooperation. ODA (政府開発援助) is a major tool. Japan contributes to UN peacekeeping and disaster relief. The US-Japan alliance (日米同盟) remains the cornerstone of security がいこう."},

    {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
     note:"じょうやくをむすぶ = to conclude a treaty.\nにちべいあんぜんほしょうじょうやく = US-Japan Security Treaty.",
     example:"A: あたらしいぼうえきじょうやくにちょういんしました。\nB: りょうこくにとってよいじょうやくですね。",
     exampleSrc:"A: We signed a new trade treaty.\nB: A good treaty for both countries.",
     funFact:"じょうやく (条約) shapes Japan's international relationships. The San Francisco Peace Treaty (1952) restored Japanese sovereignty. The US-Japan Security Treaty defines the military alliance. Japan has trade じょうやく with dozens of countries. Treaty ratification requires Diet (parliament) approval."},

    {type:"teach", trg:"こくれん", src:"United Nations", pos:"noun", gender:null,
     note:"Short for こくさいれんごう.\nこくれんそうかい = UN General Assembly.\nこくれんあんぜんほしょうりじかい = UN Security Council.",
     example:"A: にほんはこくれんにおおきくこうけんしています。\nB: あんぜんほしょうりじかいのじょうにんりじこくをめざしていますね。",
     exampleSrc:"A: Japan contributes greatly to the UN.\nB: It aims for a permanent Security Council seat.",
     funFact:"Japan is the third-largest contributor to the こくれん (国連) budget. The quest for a permanent UN Security Council seat has been a decades-long diplomatic goal. Japan contributes to UN peacekeeping operations (PKO), development aid, and disaster relief. The UN University is headquartered in Tokyo."},

    {type:"teach", trg:"たこくせき", src:"multinational", pos:"adj", gender:null,
     note:"Na-adjective. たこくせききぎょう = multinational corporation.\nたこくかん = multilateral.",
     example:"A: たこくせききぎょうではたらきたいです。\nB: えいごとにほんごのりょうほうがひつようですね。",
     exampleSrc:"A: I want to work at a multinational company.\nB: Both English and Japanese are needed.",
     funFact:"Japan hosts many たこくせき (多国籍) companies and has its own global giants (Toyota, Sony, Honda). Working in a たこくせき environment (グローバルかんきょう) is increasingly desired by young Japanese. The challenge of bridging Japanese business culture with global norms creates unique workplace dynamics."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"なんみんもんだい = refugee issue.\nなんみんにんてい = refugee recognition.",
     example:"A: せかいてきになんみんもんだいがふえています。\nB: にほんもうけいれたいさくがひつようです。",
     exampleSrc:"A: The refugee issue is increasing globally.\nB: Japan also needs acceptance measures.",
     funFact:"Japan has one of the lowest なんみん (難民) acceptance rates among developed nations (under 1% of applicants approved until recent reforms). The 2023 immigration law reform expanded recognition. Cultural homogeneity concerns, language barriers, and bureaucratic processes create challenges. Advocacy groups push for more humanitarian なんみん policies."},

    {type:"teach", trg:"えんじょ", src:"aid / assistance (international)", pos:"noun", gender:null,
     note:"かいはつえんじょ = development aid.\nODA = せいふかいはつえんじょ.",
     example:"A: にほんのODAはせかいてきにゆうめいです。\nB: インフラせいびがとくにひょうかされています。",
     exampleSrc:"A: Japan's ODA is globally recognized.\nB: Infrastructure development is especially valued.",
     funFact:"Japan is one of the world's largest ODA (official development assistance) donors. Japanese えんじょ (援助) emphasizes infrastructure: building roads, bridges, water systems, and railways in developing countries. The Shinkansen technology transfer to India and Southeast Asia exemplifies Japan's えんじょ philosophy of teaching to fish, not just giving fish."},

    {type:"teach", trg:"ぐんしゅく", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"かくぐんしゅく = nuclear disarmament.\nぐんびかんり = arms control.",
     example:"A: かくぐんしゅくはせかいのもくひょうです。\nB: ひろしまとながさきのけいけんがうったえています。",
     exampleSrc:"A: Nuclear disarmament is a global goal.\nB: The experience of Hiroshima and Nagasaki appeals for it.",
     funFact:"As the only country to suffer atomic bombings, Japan has a unique moral voice in かくぐんしゅく (核軍縮) discussions. Hiroshima and Nagasaki survivors (被爆者, ひばくしゃ) actively campaign for nuclear abolition. Japan's 'three non-nuclear principles' (非核三原則) state: not possess, not produce, not permit nuclear weapons."},

    {type:"teach", trg:"けいざいせいさい", src:"economic sanctions", pos:"noun", gender:null,
     note:"せいさいをかす = to impose sanctions.\nせいさいかいじょ = lifting sanctions.",
     example:"A: けいざいせいさいがはつどうされました。\nB: ぼうえきへのえいきょうがおおきいですね。",
     exampleSrc:"A: Economic sanctions have been imposed.\nB: The impact on trade is large.",
     funFact:"Japan participates in international けいざいせいさい (経済制裁) through the UN and alongside G7 allies. As a resource-importing, trade-dependent nation, sanctions affect Japan's economy too. Balancing diplomatic principles with economic pragmatism (especially regarding energy imports) requires delicate がいこう."},

    {type:"teach", trg:"しゅけん", src:"sovereignty", pos:"noun", gender:null,
     note:"こくかしゅけん = national sovereignty.\nこくみんしゅけん = popular sovereignty.",
     example:"A: しゅけんはくにのきほんてきなけんりです。\nB: こくみんしゅけんがけんぽうにさだめられています。",
     exampleSrc:"A: Sovereignty is a nation's fundamental right.\nB: Popular sovereignty is established in the constitution.",
     funFact:"しゅけん (主権) debates in Japan center on Okinawa's US military bases, Northern Territories dispute with Russia, and Senkaku/Diaoyu Islands issue with China. 国民主権 (popular sovereignty) is a constitutional principle. The tension between しゅけん and the US alliance defines Japan's security identity."},

    {type:"teach", trg:"にほんかいぎ", src:"summit meeting", pos:"noun", gender:null,
     note:"Also: サミット (loanword). しゅのうかいだん = summit talks.\nG7サミット = G7 Summit.",
     example:"A: G7サミットがにほんでかいさいされます。\nB: せかいのリーダーがあつまりますね。",
     exampleSrc:"A: The G7 Summit will be held in Japan.\nB: World leaders will gather.",
     funFact:"Japan has hosted multiple G7 summits (Tokyo 1979/1986/1993, Okinawa 2000, Hokkaido 2008, Hiroshima 2023). The 2023 Hiroshima Summit was symbolically powerful, with world leaders visiting the atomic bomb memorial. Japan uses サミット hosting to showcase regions and advance diplomatic priorities."},

    {type:"teach", trg:"ちょうてい", src:"mediation / arbitration", pos:"noun", gender:null,
     note:"ちょうていする = to mediate. ちょうていやく = mediator.\nふんそうちょうてい = conflict mediation.",
     example:"A: りょうこくのあいだでちょうていがおこなわれています。\nB: へいわてきなかいけつをのぞみます。",
     exampleSrc:"A: Mediation is being conducted between the two countries.\nB: I hope for a peaceful resolution.",
     funFact:"ちょうてい (調停) reflects Japan's preference for harmony over confrontation. In domestic law, family disputes and labor conflicts often go through ちょうてい before court. Internationally, Japan positions itself as a ちょうてい nation, preferring dialogue to force. This diplomatic identity draws from both Buddhist and Confucian traditions."},

    {type:"teach", trg:"きょうていしょ", src:"agreement / pact / accord", pos:"noun", gender:null,
     note:"きょうていしょにちょういんする = to sign an agreement.\nより formal than じょうやく in some contexts.",
     example:"A: りょうこくがきょうていしょにちょういんしました。\nB: ぼうえきかんけいがよくなりますね。",
     exampleSrc:"A: Both countries signed the agreement.\nB: Trade relations will improve.",
     funFact:"きょうていしょ (協定書) ranges from bilateral trade agreements to climate accords. Japan has signed Economic Partnership Agreements (EPA) with many countries. The RCEP (Regional Comprehensive Economic Partnership) and CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership) are major multilateral きょうていしょ Japan championed."},

    // Quiz steps
    {type:"mc", q:"Japan's three non-nuclear principles are:",
     opts:["Not possess, not produce, not permit nuclear weapons","Peace, prosperity, partnership","Army, navy, air force restrictions","Import, export, transit bans"],
     ans:"Not possess, not produce, not permit nuclear weapons",
     hint:"These principles reflect Japan's unique position as the only country to have suffered atomic bombings."},

    {type:"match", pairs:[
      {trg:"がいこう", src:"diplomacy"},
      {trg:"じょうやく", src:"treaty"},
      {trg:"こくれん", src:"United Nations"},
      {trg:"なんみん", src:"refugee"},
      {trg:"しゅけん", src:"sovereignty"}
    ]},

    {type:"fb", s:"にほんの{1}はインフラせいびでゆうめいです。",
     a:["ODA"],
     opts:["ODA","GDP","PKO","G7"],
     hint:"Japan's official development assistance focuses on building infrastructure in developing countries.",
     sSrc:"Japan's {1} is famous for infrastructure development."},

    {type:"mc", q:"Japan's refugee acceptance rate has historically been:",
     opts:["Under 1% of applicants","About 50%","Over 75%","About 30%"],
     ans:"Under 1% of applicants",
     hint:"One of the lowest rates among developed nations, though recent reforms aim to improve this."},

    {type:"fb", s:"りょうこくのあいだで{1}がおこなわれています。",
     a:["ちょうてい"],
     opts:["ちょうてい","せいさい","ぐんしゅく","がいこう"],
     hint:"A neutral third party helps resolve the dispute. This word means 'mediation.'",
     sSrc:"{1} is being conducted between the two countries."},

    {type:"mc", q:"The 2023 G7 Summit in Hiroshima was significant because:",
     opts:["World leaders visited the atomic bomb memorial","It was the first G7 ever","Japan left the G7","The summit failed"],
     ans:"World leaders visited the atomic bomb memorial",
     hint:"The symbolic choice of Hiroshima connected nuclear disarmament to modern diplomacy."},

    {type:"match", pairs:[
      {trg:"えんじょ", src:"aid"},
      {trg:"ぐんしゅく", src:"disarmament"},
      {trg:"けいざいせいさい", src:"economic sanctions"},
      {trg:"ちょうてい", src:"mediation"},
      {trg:"きょうていしょ", src:"agreement"}
    ]},

    {type:"fb", s:"かく{1}はせかいのもくひょうです。ひろしまがうったえています。",
     a:["ぐんしゅく"],
     opts:["ぐんしゅく","せいさい","がいこう","しゅけん"],
     hint:"Nuclear arms reduction is a global goal. Hiroshima's experience gives this special urgency.",
     sSrc:"Nuclear {1} is a global goal. Hiroshima appeals for it."}
  ]
};
export default BATCH7_L1;
