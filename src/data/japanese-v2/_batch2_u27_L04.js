// Unit 27 Batch 2 Lesson 4: しぜんほご (Nature Conservation)
const BATCH2_L_4 = {
  id:"jav2_u27l_b2_4", title:"しぜんほご", icon:"🌳", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんほご",
     desc:"Japan has a rich tradition of nature conservation alongside rapid industrialization. Learn vocabulary for biodiversity, ecosystems, pollution control, and sustainable development. These terms appear in environmental policy discussions and JLPT N2 reading passages about society and nature.",
     goals:["Use conservation and ecology vocabulary","Discuss biodiversity and sustainability","Understand environmental protection terminology"]},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. せいたいけいのほご = ecosystem protection.\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりのせいたいけいはたようなせいぶつでなりたっています。\nB: ひとつのしゅがきえるとぜんたいにえいきょうがでますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Forest ecosystems are made up of diverse organisms.\nB: If one species disappears, it affects the whole system.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"生態系 uses 生態 (ecology/life form) and 系 (system). Japan's ecosystems are remarkably diverse for a small island nation, ranging from subarctic Hokkaido to subtropical Okinawa. The country has over 90,000 identified species. Japan designated its first National Park in 1934 and now has 34 national parks protecting key せいたいけい."},

    {type:"teach", trg:"せいぶつたようせい", src:"biodiversity", pos:"noun", gender:null,
     note:"Kanji: 生物多様性. せいぶつ (organisms) + たようせい (diversity).\nせいぶつたようせいじょうやく = Convention on Biological Diversity.",
     example:"A: せいぶつたようせいのほぜんはかんきょうほごのきほんです。\nB: にほんにもぜつめつきぐしゅがおおくいます。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Conservation of biodiversity is fundamental to environmental protection.\nB: Japan also has many endangered species.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"生物多様性 is a five-kanji compound that entered common use after the 1992 Earth Summit. Japan hosted the COP10 biodiversity conference in Nagoya in 2010, which produced the Aichi Targets. The country faces せいぶつたようせい challenges from habitat loss, invasive species, and climate change, but also has strong traditions of satoyama (里山) sustainable land management."},

    {type:"teach", trg:"ぜつめつ", src:"extinction", pos:"noun", gender:null,
     note:"Kanji: 絶滅. ぜつめつする = to become extinct.\nぜつめつきぐしゅ = endangered species.",
     example:"A: このどうぶつはぜつめつのきけんにさらされています。\nB: ほごかつどうがきゅうむです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This animal faces the danger of extinction.\nB: Conservation activities are urgently needed.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"絶滅 uses 絶 (sever/extreme) and 滅 (destroy/perish). Japan has experienced notable ぜつめつ cases: the Japanese wolf (ニホンオオカミ) went extinct around 1905, and the Japanese river otter was declared extinct in 2012. Current conservation efforts focus on protecting the tancho crane, Iriomote wildcat, and other ぜつめつきぐしゅ."},

    {type:"mc", q:"せいぶつたようせい means:", opts:["Biodiversity","Evolution","Mutation","Reproduction"], ans:"Biodiversity",
     hint:"The compound combines 'organisms' with 'diversity/variety' to name the full range of life forms."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. ほぜんする = to conserve/preserve.\nかんきょうほぜん = environmental conservation.",
     example:"A: しぜんかんきょうのほぜんはちいきのきょうりょくがひつようです。\nB: ボランティアかつどうもだいじですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Preserving the natural environment requires local cooperation.\nB: Volunteer activities are also important.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"保全 uses 保 (protect/maintain) and 全 (complete/whole). While ほご (protection) focuses on shielding from harm, ほぜん emphasizes maintaining something in its complete, intact state. In environmental policy, かんきょうほぜん is a broader concept than かんきょうほご, encompassing sustainable management rather than just defensive protection."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. じぞくかのうなかいはつ = sustainable development.\nSDGs = じぞくかのうなかいはつもくひょう.",
     example:"A: じぞくかのうなしゃかいをめざさなければなりません。\nB: SDGsのたっせいがせかいきょうつうのもくひょうです。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We must aim for a sustainable society.\nB: Achieving the SDGs is a shared global goal.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"持続可能 uses 持続 (continuation) and 可能 (possible). The term became widespread in Japanese after the 2015 adoption of the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGs initiatives, and the term じぞくかのうせい (sustainability) appears in corporate reports, government policies, and media daily."},

    {type:"fb", s:"しぜんかんきょうの{1}はちいきのきょうりょくがひつようです。\n(Preserving the natural environment requires local cooperation.)", a:"ほぜん", opts:["ほぜん","ぜつめつ","おせん","はかい"], sSrc:"Preserving the natural environment requires local cooperation.",
     hint:"The noun meaning 'conservation,' maintaining something in its complete state."},

    {type:"teach", trg:"おせん", src:"pollution / contamination", pos:"noun", gender:null,
     note:"Kanji: 汚染. おせんする = to pollute.\nすいしつおせん = water pollution. どじょうおせん = soil contamination.",
     example:"A: かわのすいしつおせんがかいぜんされつつあります。\nB: こうじょうのはいすいきせいがこうかをあげていますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: River water pollution is being improved.\nB: Factory wastewater regulations are having an effect.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"汚染 uses 汚 (dirty/contaminate) and 染 (dye/stain). Japan's four major おせん diseases (四大公害病) in the 1950s-70s were watershed moments in environmental history. Minamata disease (mercury), Niigata Minamata disease, Itai-itai disease (cadmium), and Yokkaichi asthma led to strict pollution control laws that became models for other countries."},

    {type:"teach", trg:"はいすい", src:"wastewater / drainage", pos:"noun", gender:null,
     note:"Kanji: 排水. はいすいきせい = wastewater regulations.\nはいすいしょり = wastewater treatment.",
     example:"A: こうじょうのはいすいはきせいにしたがってしょりされています。\nB: かんきょうほぜんのためにじゅうようですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Factory wastewater is treated in accordance with regulations.\nB: It is important for environmental conservation.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"排水 uses 排 (expel/discharge) and 水 (water). Japanese はいすいしょり (wastewater treatment) technology is world-class, exported to developing countries through JICA programs. The transformation of Japanese rivers from polluted in the 1960s to clean today is one of the great environmental success stories."},

    {type:"teach", trg:"さとやま", src:"satoyama (traditional rural landscape)", pos:"noun", gender:null,
     note:"Kanji: 里山. A managed zone between village (里) and mountain (山).\nA model of sustainable human-nature coexistence.",
     example:"A: さとやまのかんきょうはにんげんとしぜんのきょうせいのモデルです。\nB: せかいからちゅうもくされていますね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: The satoyama environment is a model of human-nature coexistence.\nB: It is attracting attention from around the world.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"里山 is a uniquely Japanese concept describing the managed landscape between villages and wild mountains. For centuries, Japanese communities maintained さとやま through rice paddies, managed forests, and irrigation ponds. This created rich biodiversity. The concept gained international attention at COP10 in Nagoya as a model for sustainable land use."},

    {type:"mc", q:"おせん means:", opts:["Pollution/contamination","Conservation","Recycling","Sustainability"], ans:"Pollution/contamination",
     hint:"The word combining 'dirty' and 'stain,' describing the harmful degradation of environment."},

    {type:"teach", trg:"きょうせい", src:"coexistence / symbiosis", pos:"noun", gender:null,
     note:"Kanji: 共生. きょうせいする = to coexist.\nしぜんとのきょうせい = coexistence with nature.",
     example:"A: にんげんとしぜんのきょうせいはかのうでしょうか？\nB: さとやまがそのかのうせいをしめしています。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Is coexistence between humans and nature possible?\nB: Satoyama demonstrates that possibility.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"共生 uses 共 (together) and 生 (live). In biology, きょうせい means symbiosis. In Japanese social and environmental philosophy, it extends to the ideal of different entities living together harmoniously. The concept of たぶんかきょうせい (multicultural coexistence) applies the same idea to diverse human communities."},

    {type:"fb", s:"にんげんとしぜんの{1}はかのうでしょうか？\n(Is coexistence between humans and nature possible?)", a:"きょうせい", opts:["きょうせい","ぜつめつ","おせん","ほぜん"], sSrc:"Is coexistence between humans and nature possible?",
     hint:"The noun meaning 'coexistence,' different entities living together harmoniously."},

    {type:"match", pairs:[{trg:"せいたいけい",src:"ecosystem"},{trg:"せいぶつたようせい",src:"biodiversity"},{trg:"ぜつめつ",src:"extinction"},{trg:"じぞくかのう",src:"sustainable"}]},

    {type:"fb", s:"このどうぶつは{1}のきけんにさらされています。\n(This animal faces the danger of extinction.)", a:"ぜつめつ", opts:["ぜつめつ","おせん","ほぜん","きょうせい"], sSrc:"This animal faces the danger of extinction.",
     hint:"The noun for the complete disappearance of a species."},

    {type:"match", pairs:[{trg:"おせん",src:"pollution"},{trg:"はいすい",src:"wastewater"},{trg:"さとやま",src:"satoyama (rural landscape)"},{trg:"きょうせい",src:"coexistence"}]},

    {type:"mc", q:"さとやま is valued internationally as:", opts:["A model of sustainable human-nature coexistence","A type of Japanese garden","A farming technique","A nature reserve with no human activity"], ans:"A model of sustainable human-nature coexistence",
     hint:"This landscape shows how humans and n... can thrive together through managed use."},
  ]
};
export default BATCH2_L_4;
