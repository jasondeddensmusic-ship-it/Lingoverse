// Unit 34 Batch 2 Lesson 1: 軍縮(ぐんしゅく)と平和(へいわ) (Disarmament & Peace)
const BATCH2_L_1 = {
  id:"jav2_u34l_b2_1", title:"軍縮(ぐんしゅく)と平和(へいわ)", icon:"🕊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"軍縮(ぐんしゅく)と平和(へいわ)",
     desc:"Japan's unique position as the only country to have experienced nuclear attacks shapes its approach to disarmament and peace. Learn vocabulary for arms control, peacekeeping, and humanitarian law essential for understanding Japanese foreign policy discussions.",
     goals:["Use disarmament and peace vocabulary","Discuss Japan's peace constitution","Understand humanitarian and security terms"]},

    {type:"teach", trg:"軍縮(ぐんしゅく)", src:"disarmament / arms reduction", pos:"noun", gender:null,
     note:"Kanji: 軍縮. 核(かく)軍縮(ぐんしゅく) = nuclear disarmament.\n軍縮(ぐんしゅく)条約(じょうやく) = disarmament treaty.",
     example:"A: 核(かく)軍縮(ぐんしゅく)は世界(せかい)の安全(あんぜん)に不可欠(ふかけつ)です。\nB: 日本(にほん)はその推進(すいしん)役(やく)を担(にな)っています。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Nuclear disarmament is indispensable for world safety.\nB: Japan bears the role of promoting it.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"軍縮 uses 軍 (military) and 縮 (shrink/reduce). Japan's advocacy for 軍縮(ぐんしゅく) is rooted in the Hiroshima and Nagasaki experiences. Every August, memorial ceremonies call for 核兵器(かくへいき)廃絶(はいぜつ) (nuclear abolition). Japan annually submits nuclear disarmament resolutions to the UN General Assembly."},

    {type:"teach", trg:"平和主義(へいわしゅぎ)", src:"pacifism", pos:"noun", gender:null,
     note:"Kanji: 平和主義. 日本国(にほんこく)憲法(けんぽう)第九条(だいきゅうじょう) = Article 9.\n戦争(せんそう)放棄(ほうき) = renunciation of war.",
     example:"A: 日本(にほん)の平和主義(へいわしゅぎ)は憲法(けんぽう)第九条(だいきゅうじょう)に基(もと)づいています。\nB: 改正(かいせい)の是非(ぜひ)が議論(ぎろん)され続(つづ)けていますね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japan's pacifism is based on Article 9 of the Constitution.\nB: The pros and cons of revision continue to be debated.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"平和主義 uses 平和(へいわ) (peace) and 主義(しゅぎ) (principle/-ism). Article 9 renounces war and prohibits maintaining war potential. However, Japan maintains 自衛隊(じえいたい) (Self-Defense Forces) under the interpretation that self-defense is a sovereign right. The tension between 平和主義(へいわしゅぎ) and security realities defines one of Japan's most fundamental political debates."},

    {type:"teach", trg:"自衛隊(じえいたい)", src:"Self-Defense Forces (SDF)", pos:"noun", gender:null,
     note:"Kanji: 自衛隊. 陸上(りくじょう)自衛隊(じえいたい) = Ground SDF.\n海上(かいじょう)自衛隊(じえいたい) = Maritime SDF.",
     example:"A: 自衛隊(じえいたい)は災害(さいがい)救援(きゅうえん)でも活躍(かつやく)しています。\nB: 日本国内(にほんこくない)だけでなく海外(かいがい)でも活動(かつどう)していますね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The Self-Defense Forces are also active in disaster relief.\nB: They operate not only domestically but also overseas.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"自衛隊 uses 自衛(じえい) (self-defense) and 隊(たい) (corps/unit). Despite Article 9, Japan's SDF is one of the world's most capable military forces. The constitutional ambiguity has led to decades of debate. The SDF's role in 災害(さいがい)救援(きゅうえん) (disaster relief) is widely appreciated, giving it strong public support despite the constitutional controversy."},

    {type:"mc", q:"憲法(けんぽう)第九条(だいきゅうじょう) is significant because:", opts:["It renounces war and prohibits maintaining war potential","It establishes the emperor as head of state","It guarantees freedom of speech","It sets the tax rate"], ans:"It renounces war and prohibits maintaining war potential",
     hint:"This article makes Japan's Constitution unique among world constitutions."},

    {type:"teach", trg:"PKO", src:"peacekeeping operations", pos:"noun", gender:null,
     note:"Pronounced ピーケーオー. 国連(こくれん)PKO = UN peacekeeping.\nPKO協力法(きょうりょくほう) = PKO Cooperation Law.",
     example:"A: 日本(にほん)はPKOに自衛隊(じえいたい)を派遣(はけん)しています。\nB: 国際(こくさい)貢献(こうけん)の一環(いっかん)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Japan dispatches SDF members to peacekeeping operations.\nB: It is part of its international contribution.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"Japan's participation in PKO began in 1992 after the PKO Cooperation Law was enacted. The first deployment was to Cambodia. Japanese PKO participation is limited by strict rules of engagement, reflecting the tension between 国際(こくさい)貢献(こうけん) (international contribution) and 平和主義(へいわしゅぎ) (pacifism). Engineering and medical support are the primary Japanese PKO roles."},

    {type:"teach", trg:"爆弾(ばくだん)", src:"bomb", pos:"noun", gender:null,
     note:"Kanji: 爆弾. 原子(げんし)爆弾(ばくだん) = atomic bomb (also: 原爆(げんばく)).\n爆弾(ばくだん)テロ = bombing terrorism.",
     example:"A: 広島(ひろしま)と長崎(ながさき)に原子(げんし)爆弾(ばくだん)が投下(とうか)されました。\nB: 二度(にど)と繰(く)り返(かえ)してはならない歴史(れきし)です。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Atomic bombs were dropped on Hiroshima and Nagasaki.\nB: It is a history that must never be repeated.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"爆弾 uses 爆 (explode) and 弾 (bullet/ball). 原爆(げんばく) (abbreviation of 原子(げんし)爆弾(ばくだん)) is deeply embedded in Japanese collective memory. The Hiroshima Peace Memorial (原爆(げんばく)ドーム, Genbaku Dome) is a UNESCO World Heritage Site. 被爆者(ひばくしゃ) (atomic bomb survivors) have been tireless advocates for peace, sharing their testimonies worldwide."},

    {type:"teach", trg:"被爆者(ひばくしゃ)", src:"atomic bomb survivor / radiation-exposed person", pos:"noun", gender:null,
     note:"Kanji: 被爆者. 被爆者(ひばくしゃ)の証言(しょうげん) = survivor testimony.\nA uniquely Japanese term with global moral weight.",
     example:"A: 被爆者(ひばくしゃ)の声(こえ)を世界(せかい)に伝(つた)えることが重要(じゅうよう)です。\nB: 高齢化(こうれいか)で証言者(しょうげんしゃ)が減(へ)っています。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: It is important to convey the voices of atomic bomb survivors to the world.\nB: Due to aging, the number of witnesses is decreasing.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"被爆者 uses 被 (receive/suffer), 爆 (explode), and 者 (person). The 被爆者(ひばくしゃ) community has been central to Japan's peace advocacy. Their personal 証言(しょうげん) (testimonies) are preserved in museums and archives. As surviving 被爆者(ひばくしゃ) age, Japan is developing digital archives and training '伝承者(でんしょうしゃ)' (legacy successors) to continue sharing their stories."},

    {type:"fb", s:"日本(にほん)は核(かく)軍縮(ぐんしゅく)の{1}役(やく)を担(にな)っています。\n(Japan bears the role of promoting nuclear disarmament.)", a:"推進(すいしん)", opts:["推進(すいしん)","反対(はんたい)","拒否(きょひ)","中止(ちゅうし)"], sSrc:"Japan bears the role of promoting nuclear disarmament.",
     hint:"The noun meaning 'promotion' or 'advancement,' actively pushing something forward."},

    {type:"teach", trg:"停戦協定(ていせんきょうてい)", src:"ceasefire agreement / armistice", pos:"noun", gender:null,
     note:"Kanji: 停戦協定. 停戦(ていせん) (ceasefire) + 協定(きょうてい) (agreement).\nUsed in news about conflicts.",
     example:"A: 両国間(りょうこくかん)で停戦協定(ていせんきょうてい)が結(むす)ばれました。\nB: 平和(へいわ)交渉(こうしょう)への第一歩(だいいっぽ)ですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: A ceasefire agreement was concluded between the two countries.\nB: It is the first step toward peace negotiations.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"停戦協定 uses 停戦(ていせん) (ceasefire: 停(てい) stop + 戦(せん) war) and 協定(きょうてい) (agreement: 協(きょう) cooperate + 定(てい) determine). In international news, 停戦(ていせん) (ceasefire) and 停戦協定(ていせんきょうてい) (ceasefire agreement) appear frequently. Japan, as a non-belligerent nation under its constitution, often supports 停戦(ていせん) efforts through diplomatic channels rather than military intervention."},

    {type:"teach", trg:"国際法(こくさいほう)", src:"international law", pos:"noun", gender:null,
     note:"Kanji: 国際法. 国際(こくさい)人道法(じんどうほう) = international humanitarian law.\n国際法(こくさいほう)を遵守(じゅんしゅ)する = to comply with international law.",
     example:"A: 国際法(こくさいほう)はすべての国(くに)が守(まも)るべきです。\nB: しかし、実際(じっさい)に違反(いはん)が起(お)こっています。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: All countries should comply with international law.\nB: However, violations actually occur.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"国際法 uses 国際(こくさい) (international) and 法(ほう) (law). Japan's postwar identity is closely tied to 国際法(こくさいほう) compliance. The country has been a strong advocate for the rule-based international order. Japanese legal scholars have contributed significantly to 国際法(こくさいほう) development, particularly in maritime law and environmental law."},

    {type:"mc", q:"被爆者(ひばくしゃ) refers to:", opts:["Government officials","Atomic bomb survivors","War veterans","Peace activists"], ans:"Atomic bomb survivors",
     hint:"This uniquely Japanese term describes people who directly experienced nuclear attacks."},

    {type:"fb", s:"両国間(りょうこくかん)で{1}が結(むす)ばれました。\n(A ceasefire agreement was concluded between the two countries.)", a:"停戦協定(ていせんきょうてい)", opts:["停戦協定(ていせんきょうてい)","貿易(ぼうえき)協定(きょうてい)","安保(あんぽ)条約(じょうやく)","国際法(こくさいほう)"], sSrc:"A ceasefire agreement was concluded between the two countries.",
     hint:"The compound meaning an agreement to stop fighting, the first step toward peace."},

    {type:"match", pairs:[{trg:"軍縮(ぐんしゅく)",src:"disarmament"},{trg:"平和主義(へいわしゅぎ)",src:"pacifism"},{trg:"自衛隊(じえいたい)",src:"Self-Defense Forces"},{trg:"被爆者(ひばくしゃ)",src:"atomic bomb survivor"}]},

    {type:"fb", s:"日本(にほん)の平和主義(へいわしゅぎ)は憲法(けんぽう){1}に基(もと)づいています。\n(Japan's pacifism is based on Article 9 of the Constitution.)", a:"第九条(だいきゅうじょう)", opts:["第九条(だいきゅうじょう)","第一条(だいいちじょう)","第三条(だいさんじょう)","第十条(だいじゅうじょう)"], sSrc:"Japan's pacifism is based on Article 9 of the Constitution.",
     hint:"The specific article number (9) that renounces war in Japan's Constitution."},

    {type:"match", pairs:[{trg:"PKO",src:"peacekeeping operations"},{trg:"停戦協定(ていせんきょうてい)",src:"ceasefire agreement"},{trg:"国際法(こくさいほう)",src:"international law"},{trg:"爆弾(ばくだん)",src:"bomb"}]},

    {type:"mc", q:"Japan's SDF is widely supported for its role in:", opts:["Intelligence gathering","Offensive military operations","Disaster relief and humanitarian aid","Nuclear weapons development"], ans:"Disaster relief and humanitarian aid",
     hint:"The SDF's response to earthquakes, typhoons, and tsunamis earns strong public appreciation."},
  ]
};
export default BATCH2_L_1;
