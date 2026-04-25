// Batch 10 – Unit 34 (B2): 国際協力(こくさいきょうりょく)
const BATCH10_L1 = {
  id:"jav2_u34l_b10_1", title:"国際協力(こくさいきょうりょく) (II)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"国際協力(こくさいきょうりょく)",
     desc:"International cooperation and development vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"援助(えんじょ)", src:"foreign aid", pos:"noun", gender:null,
     note:"援(えん) to help + 助(じょ) to assist.\nCovers ODA and disaster relief.",
     example:"A: 援助(えんじょ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about foreign aid.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"援(えん) (to help) + 助(じょ) (to assist). 政府開発援助(せいふかいはつえんじょ) (ODA, Official Development Assistance) peaked at 1997. Japan's ODA model emphasizes infrastructure and technical training over cash grants."},

    {type:"teach", trg:"開発(かいはつ)", src:"development", pos:"noun", gender:null,
     note:"開(かい) to open + 発(はつ) to start.\nEconomic or technological development.",
     example:"A: 開発(かいはつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about development.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"開(かい) (to open) + 発(はつ) (to start). Japan's 開発協力大綱(かいはつきょうりょくたいこう) (Development Cooperation Charter) defines its aid principles. A shift from infrastructure to health, education, and climate has accelerated since 2015."},

    {type:"teach", trg:"貧困(ひんこん)", src:"poverty", pos:"noun", gender:null,
     note:"貧(ひん) poor + 困(こん) troubled.\nBoth domestic and international poverty.",
     example:"A: 貧困(ひんこん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about poverty.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"貧(ひん) (poor) + 困(こん) (troubled). Japan has one of the OECD's highest child 貧困(ひんこん) rates (about 14%). 相対的貧困(そうたいてきひんこん) (relative poverty) is a growing domestic concern despite high GDP per capita."},

    {type:"teach", trg:"難民(なんみん)", src:"refugee", pos:"noun", gender:null,
     note:"難(なん) hardship + 民(みん) people.\nFrom 1951 Refugee Convention framework.",
     example:"A: 難民(なんみん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about refugee.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"難(なん) (hardship) + 民(みん) (people). Japan is a signatory to the 1951 Refugee Convention but accepts very few 難民(なんみん), typically under 1% of applicants. Ukrainian 避難民(ひなんみん) policy in 2022 was a notable exception."},

    {type:"teach", trg:"気候変動(きこうへんどう)", src:"climate change", pos:"noun", gender:null,
     note:"気候(きこう) climate + 変動(へんどう) change.\nThe core climate diplomacy term.",
     example:"A: 気候変動(きこうへんどう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us think about climate change.\nB: It is an important theme.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"気候(きこう) (climate) + 変動(へんどう) (change). 1997 京都議定書(きょうとぎていしょ) was negotiated in Kyoto, symbolically cementing Japan in climate diplomacy. COP27-29 continue Japan's active participation."},

    {type:"teach", trg:"問題解決(もんだいかいけつ)", src:"problem resolution", pos:"noun", gender:null,
     note:"問題(もんだい) problem + 解決(かいけつ) resolution.\nCore Japanese business and consulting term.",
     example:"A: 問題解決(もんだいかいけつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think about problem resolution.\nB: It is an important theme.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"問題(もんだい) (problem) + 解決(かいけつ) (resolution). Japanese corporate training emphasizes 問題解決(もんだいかいけつ) frameworks: PDCA cycle, ロジックツリー, MECE. This vocabulary has permeated daily management speech."},

    {type:"teach", trg:"貿易協定(ぼうえききょうてい)", src:"trade agreement", pos:"noun", gender:null,
     note:"貿易(ぼうえき) trade + 協定(きょうてい) agreement.\nJapan leads CPTPP, EPAs with EU/UK/ASEAN.",
     example:"A: 貿易協定(ぼうえききょうてい)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us think about trade agreement.\nB: It is an important theme.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"貿易(ぼうえき) (trade) + 協定(きょうてい) (agreement). Japan's CPTPP leadership after US withdrawal was a notable moment. EPAs (経済連携協定) with EU, UK, ASEAN, and RCEP mark a 貿易協定(ぼうえききょうてい) boom."},

    {type:"teach", trg:"日本外交(にほんがいこう)", src:"Japanese diplomacy", pos:"noun", gender:null,
     note:"日本(にほん) Japan + 外交(がいこう) diplomacy.\nThree pillars: US alliance, UN, Asia engagement.",
     example:"A: 日本外交(にほんがいこう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Let us think about Japanese diplomacy.\nB: It is an important theme.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan's diplomacy historically emphasized three pillars: US alliance, UN participation, Asia engagement. The 2015 peace-security legislation loosened post-war restraints on collective self-defense operations."},

    {type:"mc", q:"What does 援助(えんじょ) mean?", opts:["foreign aid","development","poverty","refugee"], ans:"foreign aid",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(climate change is important.)", a:"気候変動(きこうへんどう)", opts:["気候変動(きこうへんどう)","問題解決(もんだいかいけつ)","貿易協定(ぼうえききょうてい)","援助(えんじょ)"], sSrc:"climate change is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"援助(えんじょ)",src:"foreign aid"},{trg:"開発(かいはつ)",src:"development"},{trg:"貧困(ひんこん)",src:"poverty"},{trg:"難民(なんみん)",src:"refugee"},{trg:"貿易協定(ぼうえききょうてい)",src:"trade agreement"}]},

    {type:"mc", q:"Which word means Japanese diplomacy?", opts:["問題解決(もんだいかいけつ)","日本外交(にほんがいこう)","気候変動(きこうへんどう)","開発(かいはつ)"], ans:"日本外交(にほんがいこう)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
