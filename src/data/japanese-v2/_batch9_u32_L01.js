// Batch 9 – Unit 32 (B2): 医療(いりょう)
const BATCH9_L1 = {
  id:"jav2_u32l_b9_1", title:"医療(いりょう)", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"医療(いりょう)",
     desc:"Medical and healthcare vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"診察(しんさつ)", src:"medical examination", pos:"noun", gender:null,
     note:"診(しん) to examine + 察(さつ) to observe.\nA doctor's examination visit.",
     example:"A: 診察(しんさつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about medical examination.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"診(しん) (to examine) + 察(さつ) (to observe). A standard 診察(しんさつ) at a Japanese clinic often runs just 3-5 minutes, earning the nickname 3分診療(さんぷんしんりょう). Japan has more hospital beds per capita than any OECD country."},

    {type:"teach", trg:"手術(しゅじゅつ)", src:"surgery", pos:"noun", gender:null,
     note:"手(しゅ) hand + 術(じゅつ) skill.\nLiterally hand-skill.",
     example:"A: 手術(しゅじゅつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about surgery.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"手(しゅ) (hand) + 術(じゅつ) (skill). Literally hand-skill. Japan leads in robotic 手術(しゅじゅつ) adoption, with the da Vinci system used for cancer and cardiac procedures in most teaching hospitals."},

    {type:"teach", trg:"処方箋(しょほうせん)", src:"prescription", pos:"noun", gender:null,
     note:"処方(しょほう) prescription + 箋(せん) slip.\nDoctor-issued, pharmacist-dispensed.",
     example:"A: 処方箋(しょほうせん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us think about prescription.\nB: It is an important theme.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"処方(しょほう) (prescription method) + 箋(せん) (slip). Japan separates 処方箋(しょほうせん) issuing (doctors) from dispensing (pharmacists) since the 1997 分業(ぶんぎょう) (separation) reform."},

    {type:"teach", trg:"入院(にゅういん)", src:"hospitalization", pos:"noun", gender:null,
     note:"入(にゅう) to enter + 院(いん) institution.\nJapan's avg hospital stay is 16 days.",
     example:"A: 入院(にゅういん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Let us think about hospitalization.\nB: It is an important theme.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"入(にゅう) (to enter) + 院(いん) (institution). Japanese average hospital stay is about 16 days, 3x longer than the OECD average. 入院(にゅういん) bills are mostly covered by 健康保険(けんこうほけん) (national health insurance)."},

    {type:"teach", trg:"退院(たいいん)", src:"hospital discharge", pos:"noun", gender:null,
     note:"退(たい) to retreat + 院(いん) institution.\nLeaving the hospital.",
     example:"A: 退院(たいいん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Let us think about hospital discharge.\nB: It is an important theme.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"退(たい) (to retreat) + 院(いん) (institution). The discharge ritual includes 退院(たいいん)祝(いわ)い (discharge celebration) and お礼(れい) (thank-you) gifts to nurses, though modern hospitals now discourage the latter."},

    {type:"teach", trg:"健康診断(けんこうしんだん)", src:"health checkup", pos:"noun", gender:null,
     note:"健康(けんこう) health + 診断(しんだん) diagnosis.\nLegally required for Japanese employees.",
     example:"A: 健康診断(けんこうしんだん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Let us think about health checkup.\nB: It is an important theme.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"健康(けんこう) (health) + 診断(しんだん) (diagnosis). Japanese companies must provide annual 健康診断(けんこうしんだん) to employees by law. Results include BMI, blood tests, chest X-rays, and stomach imaging for those over 35."},

    {type:"teach", trg:"予防(よぼう)", src:"prevention", pos:"noun", gender:null,
     note:"予(よ) in advance + 防(ぼう) to prevent.\nNational slogan: 予防が一番 (prevention first).",
     example:"A: 予防(よぼう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us think about prevention.\nB: It is an important theme.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"予(よ) (in advance) + 防(ぼう) (to prevent). The national slogan 予防(よぼう)が一番(いちばん) (prevention first) drives Japan's cancer screening and vaccination programs. The pandemic added マスク (mask-wearing) as a norm."},

    {type:"teach", trg:"免疫(めんえき)", src:"immunity", pos:"noun", gender:null,
     note:"免(めん) to exempt + 疫(えき) epidemic.\nJapan: major immunology research center.",
     example:"A: 免疫(めんえき)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us think about immunity.\nB: It is an important theme.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"免(めん) (to exempt) + 疫(えき) (epidemic). Shinya Tasuku won the 2018 Nobel Prize for 免疫(めんえき) checkpoint therapy in cancer. Japan is a major center for 免疫(めんえき)学(がく) (immunology) research."},

    {type:"mc", q:"What does 診察(しんさつ) mean?", opts:["medical examination","surgery","prescription","hospitalization"], ans:"medical examination",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(hospital discharge is important.)", a:"退院(たいいん)", opts:["退院(たいいん)","健康診断(けんこうしんだん)","予防(よぼう)","診察(しんさつ)"], sSrc:"hospital discharge is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"診察(しんさつ)",src:"medical examination"},{trg:"手術(しゅじゅつ)",src:"surgery"},{trg:"処方箋(しょほうせん)",src:"prescription"},{trg:"入院(にゅういん)",src:"hospitalization"},{trg:"予防(よぼう)",src:"prevention"}]},

    {type:"mc", q:"Which word means immunity?", opts:["健康診断(けんこうしんだん)","免疫(めんえき)","退院(たいいん)","手術(しゅじゅつ)"], ans:"免疫(めんえき)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
