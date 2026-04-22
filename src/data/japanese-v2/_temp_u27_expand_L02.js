// Unit 27 Expansion. Lesson 4: Sustainability
const LESSON_4 = {
  id:"jav2_u27l4", title:"じぞくかのうせい", icon:"♻️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sustainability",
     desc:"Sustainability vocabulary has entered mainstream Japanese discourse through the SDGs movement. Learn the terms for sustainable development, biodiversity, and ecological balance that appear in corporate reports, government policy, and daily news.",
     goals:["Use じぞくかのう, せいたいけい, たようせい in context","Discuss SDGs and corporate sustainability","Navigate green business vocabulary"]},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. じぞく (continuation) + かのう (possible).\nじぞくかのうなかいはつ = sustainable development.",
     example:"A: じぞくかのうなしゃかいをめざすべきです。\nB: きぎょうもこじんもとりくむひつようがあります。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: Both companies and individuals need to make efforts.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"持続可能 entered everyday Japanese through the United Nations SDGs (Sustainable Development Goals), known in Japan as エスディージーズ. The colorful SDGs badge has become ubiquitous on Japanese businesspeople's lapels. Companies rush to align their activities with SDGs, and じぞくかのう appears in every corporate annual report."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. せいたい (ecology/life forms) + けい (system).\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりのはかいはせいたいけいぜんたいにえいきょうします。\nB: どうぶつやしょくぶつだけではないのですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Forest destruction affects the entire ecosystem.\nB: It is not just animals and plants.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"生態系 is a three-part compound: 生 (life) + 態 (form/state) + 系 (system). Japanese environmental education emphasizes how ecosystems are interconnected. The concept of 里山 (satoyama, human-managed woodland) represents Japan's traditional approach to living in balance with せいたいけい, now studied internationally as a sustainability model."},

    {type:"teach", trg:"たようせい", src:"diversity / biodiversity", pos:"noun", gender:null,
     note:"Kanji: 多様性. 多様 (diverse) + 性 (nature/quality).\nせいぶつたようせい = biodiversity.",
     example:"A: せいぶつたようせいのほぜんがじゅうようです。\nB: ぜつめつきぐしゅをまもらなければなりません。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Conservation of biodiversity is important.\nB: We must protect endangered species.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"多様性 has expanded beyond biology into corporate culture. ダイバーシティ (diversity, the English loanword) is used for workplace diversity, while たようせい covers biological diversity. Japan hosted the COP10 biodiversity conference in Nagoya in 2010, producing the Aichi Targets for global biodiversity conservation."},

    {type:"mc", q:"じぞくかのうなかいはつ translates to:", opts:["Development that can continue without depleting resources","Rapid industrial growth","Traditional farming methods","Economic expansion plans"], ans:"Development that can continue without depleting resources",
     hint:"じぞく means to c.../sustain, and かのう means possible."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. ほぜんする = to conserve/preserve.\nかんきょうほぜん = environmental conservation.",
     example:"A: しぜんかんきょうのほぜんにとりくんでいます。\nB: ぐたいてきにどんなかつどうをしていますか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We are working on conservation of the natural environment.\nB: Specifically, what kind of activities are you doing?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"保全 uses 保 (protect) and 全 (whole/complete). It implies keeping something intact and whole. The related word 保護 (hogo, protection) is slightly different: ほぜん preserves the current state, while ほご actively shields from harm. Environmental texts use both: しぜんほぜん (nature conservation) and どうぶつほご (animal protection)."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ (extinction) + きぐ (fear/concern) + しゅ (species).\nぜつめつきぐしゅリスト = endangered species list.",
     example:"A: にほんにはおおくのぜつめつきぐしゅがいます。\nB: トキやイリオモテヤマネコがゆうめいですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: There are many endangered species in Japan.\nB: The crested ibis and Iriomote cat are famous.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"絶滅危惧種 is a four-part compound: 絶滅 (extinction) + 危惧 (apprehension) + 種 (species). Japan's most famous conservation success is the トキ (crested ibis). Once extinct in Japan, birds from China were bred in captivity and reintroduced. The トキ recovery program is a national symbol of conservation hope."},

    {type:"fb", s:"せいぶつ{1}のほぜんがじゅうようです。\n(Conservation of biodiversity is important.)", a:"たようせい", opts:["たようせい","せいたいけい","かんきょう","じぞくかのう"], sSrc:"Conservation of biodiversity is important.",
     hint:"The noun meaning variety and range of different types, applied to living things."},

    {type:"teach", trg:"はいき", src:"waste / discarding", pos:"noun", gender:null,
     note:"Kanji: 廃棄. はいきぶつ = waste products.\nはいきする = to discard/dispose of.",
     example:"A: プラスチックはいきぶつのさくげんがかだいです。\nB: リサイクルだけではたりませんね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Reducing plastic waste is a challenge.\nB: Recycling alone is not enough.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"廃棄 uses 廃 (abolish/discard) and 棄 (abandon). Japan produces about 8 million tons of food waste (食品廃棄物, shokuhin haikibutsu) annually. The concept of もったいない (wasteful/what a shame) is deeply Japanese. The word was championed internationally by Kenyan Nobel laureate Wangari Maathai as an environmental principle."},

    {type:"teach", trg:"かだい", src:"challenge / issue / task to address", pos:"noun", gender:null,
     note:"Kanji: 課題. More formal than もんだい. Implies something that must be worked on.\nじゅうようなかだい = an important challenge.",
     example:"A: エネルギーもんだいはにほんのさいだいのかだいのひとつです。\nB: かいけつにはじかんがかかりますね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The energy problem is one of Japan's biggest challenges.\nB: It will take time to solve.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"課題 uses 課 (assign/impose) and 題 (topic). Unlike もんだい (problem), かだい implies an assigned task you must tackle. Students have 課題 (homework/assignments), companies have 経営課題 (management challenges), and nations have 政策課題 (policy challenges). It carries a sense of duty and active engagement."},

    {type:"mc", q:"もったいない expresses:", opts:["Indifference to the environment","A feeling that waste is regrettable","Excitement about new things","A desire to buy more"], ans:"A feeling that waste is regrettable",
     hint:"This uniquely Japanese concept links wastefulness to a f... of shame or loss."},

    {type:"teach", trg:"とりくむ", src:"to tackle / to work on / to engage with", pos:"verb", gender:null,
     note:"Kanji: 取り組む. Group 1 verb. とりくみ = initiative/effort.\nかだいにとりくむ = to tackle a challenge.",
     example:"A: かんきょうもんだいにとりくむきぎょうがふえています。\nB: しょうひしゃのいしきもかわっていますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Companies tackling environmental issues are increasing.\nB: Consumer awareness is also changing.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"取り組む literally means 'to grab and engage.' It comes from sumo wrestling: 取組 (torikumi) is a sumo bout where wrestlers grapple. The metaphor of wrestling with a problem is vivid. In business and policy language, とりくみ (initiatives/efforts) appears constantly: 環境への取り組み (environmental initiatives)."},

    {type:"fb", s:"かんきょうもんだいに{1}きぎょうがふえています。\n(Companies tackling environmental issues are increasing.)", a:"とりくむ", opts:["とりくむ","さくげんする","ほぜんする","はいきする"], sSrc:"Companies tackling environmental issues are increasing.",
     hint:"The verb meaning to grapple with or actively engage a problem, from sumo wrestling."},

    {type:"teach", trg:"しょうひしゃ", src:"consumer", pos:"noun", gender:null,
     note:"Kanji: 消費者. しょうひ (consumption) + しゃ (person).\nしょうひしゃほご = consumer protection.",
     example:"A: しょうひしゃのかんきょういしきがたかまっています。\nB: エコしょうひんがうれているりゆうですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Consumer environmental awareness is growing.\nB: That is why eco-products are selling.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"消費者 uses 消 (extinguish/use up) + 費 (spend) + 者 (person). Japanese consumers are increasingly choosing エシカルしょうひ (ethical consumption). Fair trade coffee, organic produce, and plastic-free packaging are growing trends. The Consumer Affairs Agency (消費者庁) was created in 2009 to protect しょうひしゃ rights."},

    {type:"match", pairs:[{trg:"じぞくかのう",src:"sustainable"},{trg:"せいたいけい",src:"ecosystem"},{trg:"たようせい",src:"diversity"},{trg:"ほぜん",src:"conservation"}]},

    {type:"mc", q:"かだい differs from もんだい in that かだい:", opts:["Is a less serious concern","Only applies to academic settings","Implies an assigned task requiring active engagement","Is always about the environment"], ans:"Implies an assigned task requiring active engagement",
     hint:"課 means assign/impose, giving this word a sense of duty beyond just 'problem.'"},

    {type:"match", pairs:[{trg:"はいき",src:"waste/discarding"},{trg:"かだい",src:"challenge to address"},{trg:"とりくむ",src:"to tackle"},{trg:"しょうひしゃ",src:"consumer"}]},
  ]
};
export default LESSON_4;
