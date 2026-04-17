// Unit 31 Batch 2 Lesson 1: けいじほう (Criminal Law)
const BATCH2_L_1 = {
  id:"jav2_u31l_b2_1", title:"けいじほう", icon:"🔒", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいじほう",
     desc:"Expand your legal vocabulary with criminal law terms. Learn about types of crime, legal procedures, and the rights of the accused. These terms appear in news reports, crime dramas, and JLPT N1 passages about Japan's legal system.",
     goals:["Use criminal law vocabulary","Discuss legal procedures","Understand rights of the accused"]},

    {type:"teach", trg:"ようぎしゃ", src:"suspect", pos:"noun", gender:null,
     note:"Kanji: 容疑者. ようぎしゃをたいほする = to arrest a suspect.\nようぎ = suspicion.",
     example:"A: ようぎしゃがけいさつにたいほされました。\nB: どんなようぎですか？\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The suspect was arrested by police.\nB: What is the suspicion?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"容疑者 uses 容 (contain/appearance), 疑 (doubt), and 者 (person). Japanese media strictly uses ようぎしゃ for suspects not yet charged and ひこくにん for those formally indicted. This terminology distinction reflects the すいていむざい (presumption of innocence) principle, though critics note media coverage often implies guilt before trial."},

    {type:"teach", trg:"たいほ", src:"arrest / apprehension", pos:"noun", gender:null,
     note:"Kanji: 逮捕. たいほする = to arrest.\nたいほじょう = arrest warrant.",
     example:"A: けいさつはたいほじょうをしんせいしました。\nB: さいばんしょがはっこうしましたか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The police applied for an arrest warrant.\nB: Did the court issue it?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"逮捕 uses 逮 (catch up/apprehend) and 捕 (catch/capture). In Japan, police can detain a suspect for up to 72 hours before requesting a formal たいほじょう extension. After that, prosecutors can hold suspects for up to 20 additional days for investigation. This total 23-day detention period is controversial and has been called 'hostage justice.'"},

    {type:"teach", trg:"じんもん", src:"interrogation / questioning", pos:"noun", gender:null,
     note:"Kanji: 尋問. じんもんする = to interrogate.\nさいばんでのじんもん = courtroom examination.",
     example:"A: べんごしのたちあいなしにじんもんがおこなわれました。\nB: それはもんだいではないですか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: The interrogation was conducted without a lawyer present.\nB: Is that not a problem?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"尋問 uses 尋 (inquire/search) and 問 (ask/question). Japanese じんもん practices have drawn international criticism because suspects can be questioned without a lawyer present, interrogations are not fully recorded, and the long detention period puts pressure on confessions. Reform advocates push for complete ろくが (recording) of all interrogations."},

    {type:"mc", q:"ようぎしゃ differs from ひこくにん because:", opts:["ようぎしゃ has not been formally charged yet","ようぎしゃ has already been convicted","They are the same thing","ようぎしゃ refers only to witnesses"], ans:"ようぎしゃ has not been formally charged yet",
     hint:"The terminology shifts from suspect to defendant once formal charges are filed."},

    {type:"teach", trg:"こうりゅう", src:"detention / imprisonment (pretrial)", pos:"noun", gender:null,
     note:"Kanji: 勾留. こうりゅうきかん = detention period.\nDifferent from こうきん (imprisonment as punishment).",
     example:"A: こうりゅうきかんがながすぎるというひはんがあります。\nB: にじゅうさんにちはこくさいてきにみてもいじょうです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: There is criticism that the detention period is too long.\nB: Twenty-three days is unusual by international standards.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"勾留 uses specialized legal kanji. Japan's pretrial こうりゅう system allows police and prosecutors to hold suspects for up to 23 days without bail. During this time, suspects are questioned daily, sometimes for hours. The system has a confession rate of over 90%, leading critics to question whether confessions are truly voluntary."},

    {type:"teach", trg:"じはく", src:"confession / admission of guilt", pos:"noun", gender:null,
     note:"Kanji: 自白. じはくする = to confess.\nきょうせいじはく = forced confession.",
     example:"A: じはくだけでゆうざいにすることはできません。\nB: ほかのしょうこもひつようですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: A conviction cannot be based on confession alone.\nB: Other evidence is also needed.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"自白 uses 自 (self) and 白 (white/confess). Japan's criminal justice system has been called 'confession-centric.' While the Constitution prohibits conviction based solely on じはく, in practice confessions carry enormous weight. Several high-profile wrongful convictions based on false じはく have led to reform demands, including mandatory recording of interrogations."},

    {type:"teach", trg:"こうそ", src:"appeal (legal)", pos:"noun", gender:null,
     note:"Kanji: 控訴. こうそする = to appeal.\nこうそしん = appeals trial.",
     example:"A: ひこくがわははんけつをふふくとしてこうそしました。\nB: こうそしんはいつはじまりますか？\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The defense appealed, dissatisfied with the verdict.\nB: When does the appeals trial begin?\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"控訴 uses 控 (hold back/restrain) and 訴 (accuse/sue). Japan has a three-tier court system: ちほうさいばんしょ (district court), こうとうさいばんしょ (high court), and さいこうさいばんしょ (Supreme Court). こうそ goes to the high court, while じょうこく (further appeal) goes to the Supreme Court. The appeals process can take years."},

    {type:"fb", s:"ようぎしゃがけいさつに{1}されました。\n(The suspect was arrested by police.)", a:"たいほ", opts:["たいほ","きそ","じんもん","こうそ"], sSrc:"The suspect was arrested by police.",
     hint:"The noun meaning 'arrest,' the act of police taking a suspect into custody."},

    {type:"teach", trg:"ほしゃく", src:"bail / release on bail", pos:"noun", gender:null,
     note:"Kanji: 保釈. ほしゃくきん = bail money.\nほしゃくしんせい = bail application.",
     example:"A: べんごがわがほしゃくをしんせいしました。\nB: さいばんしょがきょかするかはみとおしがつきません。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: The defense applied for bail.\nB: It is unclear whether the court will approve.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"保釈 uses 保 (protect/guarantee) and 釈 (release/explain). Japan's ほしゃく rate has historically been very low compared to other democracies. Prosecutors often oppose bail, and courts frequently deny it. The famous case of Carlos Ghosn, who fled Japan while on bail, heightened debate about the balance between flight risk and defendants' rights."},

    {type:"teach", trg:"さいばんいん", src:"lay judge (citizen judge)", pos:"noun", gender:null,
     note:"Kanji: 裁判員. さいばんいんせいど = lay judge system.\nIntroduced in 2009 for serious criminal cases.",
     example:"A: さいばんいんせいどではいっぱんしみんがさいばんにさんかします。\nB: おもいせきにんですが、みんしゅしゅぎにとってたいせつですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: In the lay judge system, ordinary citizens participate in trials.\nB: It is a heavy responsibility, but important for democracy.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"裁判員 was created in 2009, modeled partly on American and European jury systems. Six さいばんいん sit alongside three professional judges in serious criminal cases. Citizens are randomly selected and cannot refuse without good reason. The system aimed to bring 'common sense' (しみんかんかく) into a court system that had been entirely judge-driven."},

    {type:"mc", q:"じはく means:", opts:["Confession","Evidence","Witness","Verdict"], ans:"Confession",
     hint:"The word combining 'self' and 'reveal/confess,' the act of admitting guilt."},

    {type:"fb", s:"べんごがわは{1}をしんせいしました。\n(The defense applied for bail.)", a:"ほしゃく", opts:["ほしゃく","こうそ","たいほ","じんもん"], sSrc:"The defense applied for bail.",
     hint:"The legal term for release from detention before trial, usually with a monetary guarantee."},

    {type:"match", pairs:[{trg:"ようぎしゃ",src:"suspect"},{trg:"たいほ",src:"arrest"},{trg:"じんもん",src:"interrogation"},{trg:"じはく",src:"confession"}]},

    {type:"fb", s:"ひこくがわははんけつをふふくとして{1}しました。\n(The defense appealed, dissatisfied with the verdict.)", a:"こうそ", opts:["こうそ","きそ","たいほ","ほしゃく"], sSrc:"The defense appealed, dissatisfied with the verdict.",
     hint:"The legal process of challenging a court decision at a higher court."},

    {type:"match", pairs:[{trg:"こうりゅう",src:"pretrial detention"},{trg:"こうそ",src:"appeal"},{trg:"ほしゃく",src:"bail"},{trg:"さいばんいん",src:"lay judge"}]},

    {type:"mc", q:"さいばんいんせいど was introduced to:", opts:["Replace all professional judges","Bring citizen perspectives to serious criminal trials","Handle only civil cases","Reduce court costs"], ans:"Bring citizen perspectives to serious criminal trials",
     hint:"This 2009 reform lets ordinary citizens participate alongside professional judges."},
  ]
};
export default BATCH2_L_1;
