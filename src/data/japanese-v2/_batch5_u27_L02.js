// Unit 27 Batch 5 Lesson 2: 自然保護(しぜんほご) (Nature Conservation & Ecology)
const BATCH5_L_2 = {
  id:"jav2_u27l_b5_2", title:"自然保護(しぜんほご)", icon:"🌳", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然保護(しぜんほご)",
     desc:"Japan's relationship with nature is complex: deep reverence alongside rapid industrialization. Learn vocabulary for conservation, biodiversity, and ecological awareness. From national parks to endangered species, these terms appear in JLPT readings and reflect Japan's evolving environmental consciousness.",
     goals:["Use conservation vocabulary: ほご, せいたいけい, ぜつめつ","Discuss biodiversity and ecosystems","Express environmental concern and action"]},

    {type:"teach", trg:"生態系(せいたいけい)", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系(せいたいけい). 生態(せいたい) (ecology/life form) + 系(けい) (system).\n海洋生態系(かいようせいたいけい) = marine ecosystem.",
     example:"A: 森(もり)の生態系(せいたいけい)を守(まも)ることが重要(じゅうよう)です。\nB: 一本(いっぽん)の木(き)を切(き)ることが全体(ぜんたい)に影響(えいきょう)しますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Protecting forest ecosystems is important.\nB: Cutting one tree can affect the whole system.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"生態系 was coined to translate 'ecosystem.' 生 (life) + 態 (state/form) + 系 (system). Japan's 生態系(せいたいけい) is uniquely diverse due to the long island chain spanning subarctic to subtropical zones. The concept of 里山(さとやま) (managed rural landscape) represents a traditional Japanese approach to living in harmony with nature's ecosystems."},

    {type:"teach", trg:"絶滅危惧種(ぜつめつきぐしゅ)", src:"endangered species", pos:"noun", gender:null,
     note:"Kanji: 絶滅危惧種(ぜつめつきぐしゅ). 絶滅(ぜつめつ) (extinction) + 危惧(きぐ) (concern) + 種(しゅ) (species).\nレッドリスト = red list of endangered species.",
     example:"A: 日本(にほん)には多(おお)くの絶滅危惧種(ぜつめつきぐしゅ)がいます。\nB: トキやイリオモテヤマネコが有名(ゆうめい)ですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Japan has many endangered species.\nB: The crested ibis and Iriomote wildcat are famous.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"絶滅危惧種 is a five-kanji compound: 絶 (sever), 滅 (destroy), 危 (danger), 惧 (fear), 種 (species). Japan's most famous conservation story is the トキ (crested ibis), which went extinct in the wild in 2003 but was reintroduced using birds from China. The イリオモテヤマネコ (Iriomote wildcat) exists only on a tiny Okinawan island with fewer than 100 individuals."},

    {type:"teach", trg:"保全(ほぜん)", src:"preservation / conservation", pos:"noun", gender:null,
     note:"Kanji: 保全(ほぜん). 保全(ほぜん)する = to preserve/conserve.\n自然保全(しぜんほぜん) = nature conservation. 環境保全(かんきょうほぜん) = environmental conservation.",
     example:"A: 生態系(せいたいけい)の保全(ほぜん)に取(と)り組(く)むべきです。\nB: 産業開発(さんぎょうかいはつ)とのバランスが課題(かだい)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We should work on ecosystem conservation.\nB: The challenge is balancing with industrial development.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"保全 uses 保 (protect/maintain) and 全 (complete/whole). It implies keeping something complete and intact. Similar words: 保護(ほご) (protection, active defense), 保存(ほぞん) (preservation, keeping as-is), 保全(ほぜん) (conservation, maintaining function). Environmental policy uses all three: 自然保護(しぜんほご) (nature protection), 文化財保存(ぶんかざいほぞん) (cultural heritage preservation), 環境保全(かんきょうほぜん) (environmental conservation)."},

    {type:"teach", trg:"多様性(たようせい)", src:"diversity / biodiversity", pos:"noun", gender:null,
     note:"Kanji: 多様性(たようせい). 多(た) (many) + 様(よう) (form/type) + 性(せい) (-ness).\n生物多様性(せいぶつたようせい) = biodiversity.",
     example:"A: 生物多様性(せいぶつたようせい)の保全(ほぜん)は地球規模(ちきゅうきぼ)の課題(かだい)です。\nB: 一つの種(しゅ)の絶滅(ぜつめつ)が連鎖的(れんさてき)に影響(えいきょう)しますね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Biodiversity conservation is a global-scale challenge.\nB: The extinction of one species can have cascading effects.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"多様性 gained prominence beyond biology to describe cultural diversity (文化的多様性(ぶんかてきたようせい)) and workplace diversity (ダイバーシティ). Japanese companies increasingly discuss 多様性(たようせい) in hiring and management. The word connects ecology to sociology: both natural and human systems thrive with 多様性(たようせい). The CBD (Convention on Biological Diversity) is called 生物多様性条約(せいぶつたようせいじょうやく)."},

    {type:"mc", q:"ぜつめつきぐしゅ means:", opts:["Species at risk of extinction","Common species","Invasive species","Domesticated species"], ans:"Species at risk of extinction",
     hint:"ぜつめつ (e...) + きぐ (concern/worry) + しゅ (s...)."},

    {type:"teach", trg:"里山(さとやま)", src:"satoyama (managed rural landscape)", pos:"noun", gender:null,
     note:"Kanji: 里山(さとやま). 里(さと) (village) + 山(やま) (mountain). Traditional landscape between village and wilderness.\nA model of sustainable human-nature coexistence.",
     example:"A: 里山(さとやま)の環境(かんきょう)を復活(ふっかつ)させる動(うご)きが広(ひろ)がっています。\nB: 人間(にんげん)と自然(しぜん)の共生(きょうせい)のモデルですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Movements to revive satoyama environments are spreading.\nB: It is a model of human-nature coexistence.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"里山 represents Japan's traditional approach to nature: not wilderness (原生林(げんせいりん)) and not farmland (農地(のうち)), but a managed zone where humans tend forests, rice paddies, and ponds. This landscape supported incredible biodiversity. As rural depopulation advances, 里山(さとやま) are being abandoned. Conservation efforts to restore them have gained international attention as a sustainable land-use model."},

    {type:"teach", trg:"共生(きょうせい)", src:"coexistence / symbiosis", pos:"noun", gender:null,
     note:"Kanji: 共生(きょうせい). 共生(きょうせい)する = to coexist.\n自然(しぜん)と共生(きょうせい)する = to coexist with nature.",
     example:"A: 人間(にんげん)と自然(しぜん)の共生(きょうせい)をめざすべきです。\nB: そのためには生活様式(せいかつようしき)を見直(みなお)す必要(ひつよう)がありますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: We should aim for coexistence between humans and nature.\nB: For that, we need to reconsider our lifestyle.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"共生 uses 共 (together) and 生 (life/live). In biology, it means symbiosis. In social contexts, 多文化共生(たぶんかきょうせい) (multicultural coexistence) describes living harmoniously with diversity. Japanese environmental philosophy emphasizes 共生(きょうせい) over domination. The Shinto concept of nature as sacred aligns with modern 共生(きょうせい) ideals, though Japan's environmental record is mixed."},

    {type:"teach", trg:"資源(しげん)", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源(しげん). 自然資源(しぜんしげん) = natural resources.\n資源(しげん)の有効活用(ゆうこうかつよう) = effective use of resources.",
     example:"A: 限(かぎ)りある資源(しげん)を大切(たいせつ)にしなければなりません。\nB: リサイクルと再利用(さいりよう)が鍵(かぎ)です。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We must treasure our limited resources.\nB: Recycling and reuse are key.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"資源 uses 資 (resources/capital) and 源 (source/origin). Japan is resource-poor (資源(しげん)の乏(とぼ)しい国(くに)), importing most raw materials. This scarcity drove Japan's famous recycling culture and energy efficiency. もったいない (wasteful) and 資源(しげん)を大切(たいせつ)に (treasure resources) are deeply ingrained values. Japan's recycling rate for plastic bottles exceeds 85%."},

    {type:"tip", title:"Japan's Environmental Concepts",
     text:"Traditional concepts:\n里山(さとやま) = managed rural landscape\nもったいない = respect for resources\n自然崇拝(しぜんすうはい) = nature worship (Shinto)\n\nModern environmental vocabulary:\n生態系(せいたいけい) = ecosystem\n多様性(たようせい) = biodiversity\n持続可能(じぞくかのう) = sustainable\nカーボンニュートラル = carbon neutral\n\nConservation actions:\n保護(ほご) = protection (active)\n保全(ほぜん) = conservation (maintaining)\n保存(ほぞん) = preservation (keeping intact)\n復活(ふっかつ) = revival/restoration\n\nJapan blends ancient reverence for nature with modern environmental science."},

    {type:"teach", trg:"復活(ふっかつ)", src:"revival / restoration / resurrection", pos:"noun", gender:null,
     note:"Kanji: 復活(ふっかつ). 復活(ふっかつ)する = to revive/be restored.\n自然環境(しぜんかんきょう)の復活(ふっかつ) = restoration of the natural environment.",
     example:"A: 川(かわ)の生態系(せいたいけい)が復活(ふっかつ)しつつあります。\nB: 水質改善(すいしつかいぜん)の努力(どりょく)が実(みの)りましたね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The river's ecosystem is being revived.\nB: Water quality improvement efforts have borne fruit.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"復活 uses 復 (return/restore) and 活 (life/active). The word carries powerful positive energy: bringing something back to life. イースター (Easter) is 復活祭(ふっかつさい) in Japanese. In environmental contexts, 復活(ふっかつ) describes the return of species or the recovery of damaged ecosystems. Japan's success in reviving rivers and forests after industrial pollution is a notable conservation story."},

    {type:"fb", s:"生物(せいぶつ){1}の保全(ほぜん)は地球規模(ちきゅうきぼ)の課題(かだい)です。\n(Biodiversity conservation is a global-scale challenge.)", a:"多様性(たようせい)", opts:["多様性(たようせい)","資源(しげん)","環境(かんきょう)","自然(しぜん)"], sSrc:"Biodiversity conservation is a global-scale challenge.",
     hint:"The word for diversity/variety, combined with せいぶつ (living things) for 'biodiversity.'"},

    {type:"mc", q:"さとやま represents:", opts:["A desert region","A managed landscape between village and wilderness","A pristine untouched forest","An urban park"], ans:"A managed landscape between village and wilderness",
     hint:"This Japanese concept describes the zone where humans traditionally m... forests and fields sustainably."},

    {type:"match", pairs:[{trg:"生態系(せいたいけい)",src:"ecosystem"},{trg:"絶滅危惧種(ぜつめつきぐしゅ)",src:"endangered species"},{trg:"共生(きょうせい)",src:"coexistence"},{trg:"資源(しげん)",src:"resources"}]},

    {type:"fb", s:"人間(にんげん)と自然(しぜん)の{1}をめざすべきです。\n(We should aim for coexistence between humans and nature.)", a:"共生(きょうせい)", opts:["共生(きょうせい)","対立(たいりつ)","分離(ぶんり)","競争(きょうそう)"], sSrc:"We should aim for coexistence between humans and nature.",
     hint:"The word meaning living together harmoniously, using kanji for 'together' and 'life.'"},

    {type:"mc", q:"Japan's recycling culture is driven partly by:", opts:["Government mandates only","Foreign pressure only","Being resource-poor and importing most raw materials","Having abundant natural resources"], ans:"Being resource-poor and importing most raw materials",
     hint:"Japan's scarcity of natural resources fostered a deep cultural value of not wasting."}
  ,{type:"match",pairs:[{trg:"保全(ほぜん)",src:"preservation / conservation"},{trg:"里山(さとやま)",src:"satoyama (managed rural landscape)"},{trg:"復活(ふっかつ)",src:"revival / restoration / resurrection"}]}]
};
export default BATCH5_L_2;
