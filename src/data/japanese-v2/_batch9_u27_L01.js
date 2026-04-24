// Batch 9 – Unit 27 (B2): エネルギー
const BATCH9_L1 = {
  id:"jav2_u27l_b9_1", title:"エネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギー",
     desc:"Energy and sustainability vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"再生可能(さいせいかのう)", src:"renewable", pos:"adj", gender:null,
     note:"再生(さいせい) regeneration + 可能(かのう) possible.\nRenewable energy adjective.",
     example:"A: 再生可能(さいせいかのう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about renewable.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"再生(さいせい) (regeneration) + 可能(かのう) (possible). Japan's renewable share has climbed steadily since 2011 but still lags Germany and the UK. 再生可能(さいせいかのう)エネルギー固定価格買取制度(こていかかくかいとりせいど) (FIT program) drove the post-Fukushima expansion."},

    {type:"teach", trg:"太陽光(たいようこう)", src:"solar power", pos:"noun", gender:null,
     note:"太陽(たいよう) sun + 光(こう) light.\nSolar energy or sunlight.",
     example:"A: 太陽光(たいようこう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about solar power.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"太陽(たいよう) (sun) + 光(こう) (light). Japan leads the world in 太陽光(たいようこう)パネル per capita in residential use. Rural Japan has dedicated agricultural land to massive メガソーラー farms, a land-use debate for traditional communities."},

    {type:"teach", trg:"風力(ふうりょく)", src:"wind power", pos:"noun", gender:null,
     note:"風(ふう) wind + 力(りょく) power.\nWind energy; offshore projects expanding.",
     example:"A: 風力(ふうりょく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us think about wind power.\nB: It is an important theme.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"風(ふう) (wind) + 力(りょく) (power). Japan's 風力(ふうりょく) potential is high but adoption has been slow, hampered by typhoon risks to onshore turbines. Recent offshore 洋上風力(ようじょうふうりょく) projects off Akita and Chiba are key pilot efforts."},

    {type:"teach", trg:"原子力(げんしりょく)", src:"nuclear power", pos:"noun", gender:null,
     note:"原子(げんし) atom + 力(りょく) power.\nDivided opinion post-Fukushima 2011.",
     example:"A: 原子力(げんしりょく)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think about nuclear power.\nB: It is an important theme.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"原子(げんし) (atom) + 力(りょく) (power). Before the 2011 Fukushima 事故(じこ) (accident), nuclear supplied 30% of Japan's electricity. Public opinion remains deeply divided. 脱原発(だつげんぱつ) (denuclearization) has become a standard political platform."},

    {type:"teach", trg:"省エネ(しょうエネ)", src:"energy saving", pos:"noun", gender:null,
     note:"Short for 省(しょう) to save + エネルギー energy.\nBorn of the 1973 oil shock era.",
     example:"A: 省エネ(しょうエネ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us think about energy saving.\nB: It is an important theme.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Short for 省(しょう)エネルギー (省(はぶ)く = to save + energy). Japan's air conditioner energy ratings 省エネ基準(きじゅん) began with the 1973 oil shock. Setting cooling to 28°C in summer is now a summertime national 省エネ(しょうエネ) custom."},

    {type:"teach", trg:"排出(はいしゅつ)", src:"emissions", pos:"noun", gender:null,
     note:"排(はい) to expel + 出(しゅつ) to put out.\nTypically CO2 emissions.",
     example:"A: 排出(はいしゅつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Let us think about emissions.\nB: It is an important theme.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"排(はい) (to expel) + 出(しゅつ) (to put out). CO2 排出量(はいしゅつりょう) (emission volume) is tracked precisely in Japan's official climate reports. Japan pledged カーボンニュートラル by 2050 and a 46% cut from 2013 levels by 2030."},

    {type:"teach", trg:"エコ", src:"eco-friendly", pos:"noun", gender:null,
     note:"Short for 'ecological'.\nProductive prefix: エコバッグ, エコマーク, etc.",
     example:"A: エコについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about eco-friendly.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Shortened from ecological. エコバッグ (reusable shopping bag) became ubiquitous after Japan's 2020 plastic bag charge. Products marked エコマーク (eco-mark) meet strict environmental criteria set by the Japan Environment Association."},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable", pos:"adj", gender:null,
     note:"持続(じぞく) continuous + 可能(かのう) possible.\nSDGs frame: 持続可能な開発目標.",
     example:"A: 持続可能(じぞくかのう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about sustainable.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"持続(じぞく) (to continue) + 可能(かのう) (possible). The SDGs movement (Sustainable Development Goals) translates as 持続可能(じぞくかのう)な開発目標(かいはつもくひょう). Japanese corporate annual reports universally now include dedicated SDG progress sections."},

    {type:"mc", q:"What does 再生可能(さいせいかのう) mean?", opts:["renewable","solar power","wind power","nuclear power"], ans:"renewable",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(energy saving is important.)", a:"省エネ(しょうエネ)", opts:["省エネ(しょうエネ)","排出(はいしゅつ)","エコ","再生可能(さいせいかのう)"], sSrc:"energy saving is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"再生可能(さいせいかのう)",src:"renewable"},{trg:"太陽光(たいようこう)",src:"solar power"},{trg:"風力(ふうりょく)",src:"wind power"},{trg:"原子力(げんしりょく)",src:"nuclear power"},{trg:"エコ",src:"eco-friendly"}]},

    {type:"mc", q:"Which word means sustainable?", opts:["排出(はいしゅつ)","持続可能(じぞくかのう)","省エネ(しょうエネ)","太陽光(たいようこう)"], ans:"持続可能(じぞくかのう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
