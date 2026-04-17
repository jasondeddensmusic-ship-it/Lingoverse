// Unit 32 Batch 2 Lesson 1: こうしゅうえいせい (Public Health)
const BATCH2_L_1 = {
  id:"jav2_u32l_b2_1", title:"こうしゅうえいせい", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうしゅうえいせい",
     desc:"Public health vocabulary is essential for understanding healthcare policy, pandemics, and medical news in Japanese. These terms became household words during COVID-19 and appear frequently in JLPT N1 reading passages about science and society.",
     goals:["Use public health vocabulary","Discuss pandemics and health policy","Understand epidemiological terms"]},

    {type:"teach", trg:"こうしゅうえいせい", src:"public health / public hygiene", pos:"noun", gender:null,
     note:"Kanji: 公衆衛生. こうしゅうえいせいがく = public health science.\nThe field of protecting community health.",
     example:"A: こうしゅうえいせいのきょうかがかんせんしょうたいさくのきほんです。\nB: よぼうにちからをいれるべきですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Strengthening public health is the foundation of infectious disease countermeasures.\nB: We should put effort into prevention.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"公衆衛生 is a four-kanji compound: 公衆 (the public) and 衛生 (hygiene/sanitation). Japan's こうしゅうえいせい system is credited with achieving the world's highest life expectancy. The combination of universal healthcare, clean water, food safety regulations, and a culture of cleanliness contributes to exceptional public health outcomes."},

    {type:"teach", trg:"パンデミック", src:"pandemic", pos:"noun", gender:null,
     note:"Loanword from English. せかいてきだいりゅうこう = pandemic (native term).\nパンデミックせんげん = pandemic declaration.",
     example:"A: パンデミックがせかいけいざいにおおきなえいきょうをあたえました。\nB: しゃかいのあらゆるめんがかわりましたね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The pandemic had a major impact on the global economy.\nB: Every aspect of society changed.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"パンデミック became an everyday word in Japanese after 2020. Japan's response combined soft measures (requests rather than mandates) with cultural compliance (mask-wearing, social distancing). The phrase しんがたコロナウイルス (novel coronavirus) and its abbreviation コロナ became ubiquitous. Japan's approach of voluntary compliance without lockdowns was closely watched internationally."},

    {type:"teach", trg:"ワクチン", src:"vaccine", pos:"noun", gender:null,
     note:"From German Vakzin. ワクチンせっしゅ = vaccination.\nワクチンかいはつ = vaccine development.",
     example:"A: ワクチンせっしゅりつがじゅうぶんにたかまりました。\nB: しゅうだんめんえきにちかづいていますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The vaccination rate has risen sufficiently.\nB: We are approaching herd immunity.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ワクチン entered Japanese from German, not English. Japan's ワクチン policy has been cautious: the country was slower than many Western nations to approve COVID vaccines, reflecting a cultural preference for thorough safety review. Japan has strong よぼうせっしゅ (vaccination) programs for children, though the HPV vaccine faced controversy due to reported side effects."},

    {type:"mc", q:"こうしゅうえいせい focuses on:", opts:["Individual medical treatment","Protecting community and population health","Pharmaceutical development","Hospital management"], ans:"Protecting community and population health",
     hint:"This field deals with the h... of the public as a whole, not individual patients."},

    {type:"teach", trg:"りゅうこう", src:"epidemic / trend / fashion", pos:"noun", gender:null,
     note:"Kanji: 流行. りゅうこうする = to spread/become popular.\nインフルエンザのりゅうこう = flu epidemic.",
     example:"A: ことしのインフルエンザはれいねんよりりゅうこうがはやいです。\nB: はやめにワクチンをうったほうがいいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: This year's flu epidemic is earlier than usual.\nB: We should get vaccinated early.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"流行 uses 流 (flow) and 行 (go). Remarkably, this word means both 'epidemic' (disease spreading) and 'fashion trend' (popularity spreading). Context distinguishes them. インフルエンザのりゅうこう is an epidemic, while ファッションのりゅうこう is a trend. Both share the metaphor of something 'flowing through' a population."},

    {type:"teach", trg:"かんじゃ", src:"patient", pos:"noun", gender:null,
     note:"Kanji: 患者. かんじゃすう = number of patients.\nちゅうしょうかんじゃ = patients with moderate-severe symptoms.",
     example:"A: このびょういんではいちにちやくひゃくにんのかんじゃをしんさつしています。\nB: いしのかずがたりないですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This hospital examines about 100 patients per day.\nB: There are not enough doctors.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"患者 uses 患 (worry/afflict) and 者 (person). During the pandemic, かんじゃすう (patient numbers) became daily news. Japanese hospitals face challenges with いしぶそく (doctor shortage) in rural areas. The system of かかりつけい (family doctor) is less developed than in some Western countries, leading patients to visit hospitals even for minor issues."},

    {type:"teach", trg:"しぼうりつ", src:"mortality rate / death rate", pos:"noun", gender:null,
     note:"Kanji: 死亡率. しぼうりつがひくい = low mortality rate.\nAlso: ちめいりつ (fatality rate).",
     example:"A: にほんのへいきんじゅみょうはながく、しぼうりつもひくいです。\nB: いりょうせいどとしょくせいかつのおかげですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Japan's average life expectancy is long and the mortality rate is low.\nB: Thanks to the healthcare system and diet.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"死亡率 uses 死亡 (death) and 率 (rate). Japan has one of the lowest しぼうりつ for many diseases, contributing to the world's highest life expectancy. However, Japan faces rising しぼうりつ from certain causes: じさつ (suicide) remains a significant public health concern, and こどくし (solitary death) among the elderly is a growing social issue."},

    {type:"fb", s:"ことしのインフルエンザはれいねんより{1}がはやいです。\n(This year's flu epidemic is earlier than usual.)", a:"りゅうこう", opts:["りゅうこう","ちりょう","しんさつ","よぼう"], sSrc:"This year's flu epidemic is earlier than usual.",
     hint:"The noun meaning 'epidemic' or 'spread,' also used for fashion trends."},

    {type:"teach", trg:"げんいんきゅうめい", src:"investigation of cause / root cause analysis", pos:"noun", gender:null,
     note:"Kanji: 原因究明. げんいん (cause) + きゅうめい (investigation).\nUsed in medicine, accidents, and research.",
     example:"A: びょうきのげんいんきゅうめいがすすんでいます。\nB: あたらしいちりょうほうにつながるかもしれませんね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Investigation into the cause of the disease is progressing.\nB: It might lead to new treatment methods.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"原因究明 pairs げんいん (cause/origin) with きゅうめい (thorough investigation). This compound appears in medical research, accident investigation, and quality control. Japanese manufacturing culture's emphasis on こんぽんげんいん (root cause) analysis through methods like the 'Five Whys' technique reflects a deep commitment to げんいんきゅうめい."},

    {type:"teach", trg:"しゅうだんめんえき", src:"herd immunity", pos:"noun", gender:null,
     note:"Kanji: 集団免疫. Achieved when enough of a population is immune.\nしゅうだん (group) + めんえき (immunity).",
     example:"A: ワクチンせっしゅによりしゅうだんめんえきがたっせいされました。\nB: しゃかいぜんたいのあんぜんせいがたかまりましたね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Herd immunity was achieved through vaccination.\nB: The safety of society as a whole has increased.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"集団免疫 became a widely discussed concept during the COVID-19 pandemic. The debate between pursuing しゅうだんめんえき through natural infection versus vaccination was intense globally and in Japan. Japanese public health authorities ultimately pursued a vaccination-based strategy, achieving high ワクチンせっしゅりつ (vaccination rates) among developed nations."},

    {type:"mc", q:"りゅうこう can mean both:", opts:["Epidemic and fashion trend","Cure and disease","Doctor and patient","Hospital and clinic"], ans:"Epidemic and fashion trend",
     hint:"This word describes anything that 'flows through' a population, whether disease or popularity."},

    {type:"fb", s:"びょうきの{1}がすすんでいます。\n(Investigation into the cause of the disease is progressing.)", a:"げんいんきゅうめい", opts:["げんいんきゅうめい","ちりょう","よぼう","しんさつ"], sSrc:"Investigation into the cause of the disease is progressing.",
     hint:"The compound meaning 'root cause investigation,' thoroughly uncovering why something happened."},

    {type:"match", pairs:[{trg:"こうしゅうえいせい",src:"public health"},{trg:"パンデミック",src:"pandemic"},{trg:"ワクチン",src:"vaccine"},{trg:"りゅうこう",src:"epidemic/trend"}]},

    {type:"fb", s:"ワクチンせっしゅにより{1}がたっせいされました。\n(Herd immunity was achieved through vaccination.)", a:"しゅうだんめんえき", opts:["しゅうだんめんえき","こうしゅうえいせい","げんいんきゅうめい","かんせん"], sSrc:"Herd immunity was achieved through vaccination.",
     hint:"The compound meaning group-level immunity where enough people are protected."},

    {type:"match", pairs:[{trg:"かんじゃ",src:"patient"},{trg:"しぼうりつ",src:"mortality rate"},{trg:"げんいんきゅうめい",src:"cause investigation"},{trg:"しゅうだんめんえき",src:"herd immunity"}]},

    {type:"mc", q:"Japan's high life expectancy is attributed to:", opts:["Universal healthcare, diet, and public hygiene","Only advanced hospital technology","Warm climate throughout the country","Lack of stress in daily life"], ans:"Universal healthcare, diet, and public hygiene",
     hint:"The combination of h... access, Japanese food culture, and strong h... practices."},
  ]
};
export default BATCH2_L_1;
