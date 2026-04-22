// Batch 11 – Unit 34 (B2.4 International Relations): Diplomacy & Global Issues
const BATCH11_L1 = {
  id:"jav2_u34l_b11_1", title:"国際情勢(こくさいじょうせい)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"国際情勢(こくさいじょうせい)",
     desc:"Learn vocabulary for discussing international relations, diplomacy, and global issues. These terms appear frequently in Japanese news and are tested on JLPT N2/N1.",
     goals:["Discuss international affairs in Japanese","Use diplomacy and cooperation vocabulary","Understand global issues through Japanese perspectives"]},

    {type:"teach", trg:"外交(がいこう)", src:"diplomacy / foreign affairs", pos:"noun", gender:null,
     note:"外交官(がいこうかん) = diplomat.\n外交問題(がいこうもんだい) = diplomatic issue.",
     example:"A: 日本(にほん)の外交政策(がいこうせいさく)についてどうおもいますか？\nB: 平和主義(へいわしゅぎ)をたいせつにするべきです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: What do you think about Japan's foreign policy?\nB: We should value pacifism.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japan's 外交(がいこう) since WWII has been characterized by 平和外交(へいわがいこう) (peace diplomacy) and 経済外交(けいざいがいこう) (economic diplomacy). Japan is one of the largest contributors to ODA (政府開発援助(せいふかいはつえんじょ), Official Development Assistance). The 外務省(がいむしょう) (Ministry of Foreign Affairs) manages Japan's diplomatic relationships with 195 countries."},

    {type:"teach", trg:"協力(きょうりょく)", src:"cooperation", pos:"noun", gender:null,
     note:"協力(きょうりょく)する = to cooperate.\n国際協力(こくさいきょうりょく) = international cooperation.",
     example:"A: 環境問題(かんきょうもんだい)には国際的(こくさいてき)な協力(きょうりょく)が必要(ひつよう)です。\nB: 一国(いっこく)だけでは解決(かいけつ)できませんね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: International cooperation is necessary for environmental issues.\nB: One country alone cannot solve them.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"協力(きょうりょく) is central to Japanese social values: mutual help and cooperation. Japan participates in 国際協力(こくさいきょうりょく) through JICA (国際協力機構(こくさいきょうりょくきこう)), sending specialists and volunteers to developing countries. Japanese 協力隊員(きょうりょくたいいん) (cooperation corps members) work in education, agriculture, and healthcare worldwide."},

    {type:"teach", trg:"国連(こくれん)", src:"United Nations", pos:"noun", gender:null,
     note:"Short for 国際連合(こくさいれんごう).\n国連総会(こくれんそうかい) = UN General Assembly.",
     example:"A: 日本(にほん)は国連(こくれん)の安全保障理事会(あんぜんほしょうりじかい)に入(はい)っていますか？\nB: 常任理事国(じょうにんりじこく)ではありません。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Is Japan in the UN Security Council?\nB: It is not a permanent member.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan has sought 常任理事国(じょうにんりじこく) (permanent member) status in the UN Security Council for decades. Japan is the third-largest contributor to the UN budget. 国連大学(こくれんだいがく) (United Nations University) is headquartered in Tokyo. Japan's UN-related vocabulary is heavily tested on JLPT N1."},

    {type:"teach", trg:"紛争(ふんそう)", src:"conflict / dispute", pos:"noun", gender:null,
     note:"地域紛争(ちいきふんそう) = regional conflict.\n紛争解決(ふんそうかいけつ) = conflict resolution.",
     example:"A: 世界(せかい)にはまだ多(おお)くの紛争(ふんそう)があります。\nB: 平和的(へいわてき)な解決(かいけつ)を望(のぞ)みます。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: There are still many conflicts in the world.\nB: I hope for peaceful resolution.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"紛争(ふんそう) ranges from armed conflict to trade disputes. Japan's constitution Article 9 renounces war, but the 自衛隊(じえいたい) (Self-Defense Forces) exists for defensive purposes. Japan participates in PKO (国連平和維持活動(こくれんへいわいじかつどう)) peacekeeping operations. The tension between pacifism and security needs is Japan's central foreign policy debate."},

    {type:"teach", trg:"人道的(じんどうてき)", src:"humanitarian", pos:"adj", gender:null,
     note:"人道的支援(じんどうてきしえん) = humanitarian aid.\nFrom 人道(じんどう) (humanity/humaneness).",
     example:"A: 日本(にほん)は人道的支援(じんどうてきしえん)に力(ちから)を入(い)れています。\nB: 災害救援(さいがいきゅうえん)も速(はや)いですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Japan puts effort into humanitarian aid.\nB: Disaster relief is also fast.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's 人道的(じんどうてき) support is significant globally. After natural disasters, Japan rapidly deploys 救援隊(きゅうえんたい) (relief teams). Japanese earthquake expertise makes its disaster relief particularly valuable. Japan's own disaster experience (阪神大震災(はんしんだいしんさい), 東日本大震災(ひがしにほんだいしんさい)) drives its commitment to helping others in similar situations."},

    {type:"teach", trg:"条約(じょうやく)", src:"treaty", pos:"noun", gender:null,
     note:"日米安保条約(にちべいあんぽじょうやく) = US-Japan Security Treaty.\n条約(じょうやく)を結(むす)ぶ = conclude a treaty.",
     example:"A: 日米安保条約(にちべいあんぽじょうやく)はいつからありますか？\nB: 1951年(せんきゅうひゃくごじゅういちねん)からです。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Since when has the US-Japan Security Treaty existed?\nB: Since 1951.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"The 日米安保条約(にちべいあんぽじょうやく) (US-Japan Security Treaty) is the cornerstone of Japan's defense policy. US military bases in Japan, particularly in Okinawa, remain a contentious issue. Japan also has 自由貿易協定(じゆうぼうえききょうてい) (free trade agreements) with multiple countries and regions, including the CPTPP."},

    {type:"teach", trg:"難民(なんみん)", src:"refugee", pos:"noun", gender:null,
     note:"難民問題(なんみんもんだい) = refugee issue.\n難民認定(なんみんにんてい) = refugee recognition.",
     example:"A: 日本(にほん)の難民認定率(なんみんにんていりつ)は高(たか)いですか？\nB: 残念(ざんねん)ながら、低(ひく)いのが現状(げんじょう)です。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Is Japan's refugee recognition rate high?\nB: Unfortunately, it is currently low.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"Japan's 難民(なんみん) acceptance rate has been historically very low (under 1% of applications), drawing international criticism. Recent reforms aim to increase acceptance. The debate balances 入管法(にゅうかんほう) (immigration law) strictness with 人道的(じんどうてき) (humanitarian) obligations. This topic frequently appears in JLPT N1 reading passages."},

    {type:"teach", trg:"貿易(ぼうえき)", src:"trade / commerce", pos:"noun", gender:null,
     note:"自由貿易(じゆうぼうえき) = free trade.\n貿易収支(ぼうえきしゅうし) = trade balance.",
     example:"A: 日本(にほん)の貿易相手国(ぼうえきあいてこく)はどこですか？\nB: 中国(ちゅうごく)とアメリカが多(おお)いです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Who are Japan's trade partners?\nB: China and America are the largest.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japan's 貿易(ぼうえき) relationships shape its economy and diplomacy. Japan exports automobiles and electronics while importing energy and food. 貿易摩擦(ぼうえきまさつ) (trade friction), particularly with the US in the 1980s-90s, shaped modern trade policies. Japan's participation in mega-trade agreements (CPTPP, RCEP) reflects its free trade commitment."},

    {type:"teach", trg:"多文化(たぶんか)", src:"multicultural", pos:"adj", gender:null,
     note:"多文化共生(たぶんかきょうせい) = multicultural coexistence.\n多文化社会(たぶんかしゃかい) = multicultural society.",
     example:"A: 日本(にほん)は多文化社会(たぶんかしゃかい)に向(む)かっています。\nB: 外国人労働者(がいこくじんろうどうしゃ)も増(ふ)えていますね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Japan is moving toward a multicultural society.\nB: Foreign workers are increasing too.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"多文化共生(たぶんかきょうせい) (multicultural coexistence) is Japan's framework for integration. With 3 million foreign residents, Japan is navigating cultural diversity while maintaining social cohesion. Local governments create 多文化共生計画(たぶんかきょうせいけいかく) (multicultural coexistence plans). The challenge is balancing Japanese cultural identity with openness to diversity."},

    {type:"teach", trg:"平和(へいわ)", src:"peace", pos:"noun", gender:null,
     note:"平和主義(へいわしゅぎ) = pacifism.\n世界平和(せかいへいわ) = world peace.",
     example:"A: 平和(へいわ)を守(まも)るために何(なに)ができますか？\nB: まずお互(たが)いを理解(りかい)することが大事(だいじ)です。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: What can we do to protect peace?\nB: First, understanding each other is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"平和(へいわ) is deeply ingrained in postwar Japanese identity. Hiroshima and Nagasaki's 平和記念資料館(へいわきねんしりょうかん) (Peace Memorial Museums) receive millions of visitors. Japan's 平和憲法(へいわけんぽう) (peace constitution) and 非核三原則(ひかくさんげんそく) (three non-nuclear principles) reflect this commitment. August 6 and 9 are solemn national remembrance days."},

    // Quiz steps
    {type:"mc", q:"日本国憲法(にほんこくけんぽう)第九条(だいきゅうじょう)は何(なに)を規定(きてい)していますか？",
     opts:["Renunciation of war and non-possession of military force","Freedom of the press","Right to education","Equality under the law"],
     ans:"Renunciation of war and non-possession of military force",
     hint:"This famous constitutional article makes Japan's peace-oriented foreign policy unique among major nations."},

    {type:"fb", s:"環境問題(かんきょうもんだい)には国際的(こくさいてき)な{1}が必要(ひつよう)です。",
     a:["協力(きょうりょく)"],
     opts:["協力(きょうりょく)","紛争(ふんそう)","貿易(ぼうえき)","外交(がいこう)"],
     hint:"Environmental problems require countries to work together. This word means 'cooperation.'",
     sSrc:"International cooperation is necessary for environmental issues."},

    {type:"match", pairs:[
      {trg:"外交(がいこう)", src:"diplomacy"},
      {trg:"条約(じょうやく)", src:"treaty"},
      {trg:"難民(なんみん)", src:"refugee"},
      {trg:"平和(へいわ)", src:"peace"}
    ]},

    {type:"mc", q:"日本(にほん)の最大(さいだい)の貿易相手国(ぼうえきあいてこく)はどこですか？",
     opts:["Australia and Canada","China and the United States","India and Russia","Germany and France"],
     ans:"China and the United States",
     hint:"Japan's largest trading partners are its closest economic superpowers, one across the Pacific and one across the Sea of Japan."},

    {type:"fb", s:"日本(にほん)は多文化(たぶんか){1}に向(む)かっています。",
     a:["社会(しゃかい)"],
     opts:["社会(しゃかい)","外交(がいこう)","貿易(ぼうえき)","条約(じょうやく)"],
     hint:"Japan is becoming a society that includes multiple cultures. This word means 'society.'",
     sSrc:"Japan is moving toward a multicultural society."},

    {type:"mc", q:"JICAはどんな機関(きかん)ですか？",
     opts:["Trade regulation","Tax collection","International cooperation and development aid","Military defense"],
     ans:"International cooperation and development aid",
     hint:"This Japanese government agency sends specialists and volunteers to developing countries for c... projects."}
  ,{type:"match",pairs:[{trg:"国連(こくれん)",src:"United Nations"},{trg:"紛争(ふんそう)",src:"conflict / dispute"},{trg:"人道的(じんどうてき)",src:"humanitarian"},{trg:"貿易(ぼうえき)",src:"trade / commerce"},{trg:"多文化(たぶんか)",src:"multicultural"}]}]
};
export default BATCH11_L1;
