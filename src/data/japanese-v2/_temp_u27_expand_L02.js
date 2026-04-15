// Unit 27 Expansion. Lesson 4: Sustainability
const LESSON_4 = {
  id:"jav2_u27l4", title:"じぞくかのうせい", icon:"♻️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sustainability",
     desc:"Sustainability vocabulary has entered mainstream Japanese discourse through the SDGs movement. Learn the terms for sustainable development, biodiversity, and ecological balance that appear in corporate reports, government policy, and daily news.",
     goals:["Use じぞくかのう, せいたいけい, たようせい in context","Discuss SDGs and corporate sustainability","Navigate green business vocabulary"]},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. じぞく (continuation) + かのう (possible).\nじぞくかのうなかいはつ = sustainable development.",
     example:"A: じぞくかのうなしゃかいをめざすべきです。\nB: きぎょうもこじんもとりくむひつようがあります。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: Both companies and individuals need to make efforts.",
     funFact:"持続可能 entered everyday Japanese through the United Nations SDGs (Sustainable Development Goals), known in Japan as エスディージーズ. The colorful SDGs badge has become ubiquitous on Japanese businesspeople's lapels. Companies rush to align their activities with SDGs, and じぞくかのう appears in every corporate annual report."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. せいたい (ecology/life forms) + けい (system).\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりのはかいはせいたいけいぜんたいにえいきょうします。\nB: どうぶつやしょくぶつだけではないのですね。",
     exampleSrc:"A: Forest destruction affects the entire ecosystem.\nB: It is not just animals and plants.",
     funFact:"生態系 is a three-part compound: 生 (life) + 態 (form/state) + 系 (system). Japanese environmental education emphasizes how ecosystems are interconnected. The concept of 里山 (satoyama, human-managed woodland) represents Japan's traditional approach to living in balance with せいたいけい, now studied internationally as a sustainability model."},

    {type:"teach", trg:"たようせい", src:"diversity / biodiversity", pos:"noun", gender:null,
     note:"Kanji: 多様性. 多様 (diverse) + 性 (nature/quality).\nせいぶつたようせい = biodiversity.",
     example:"A: せいぶつたようせいのほぜんがじゅうようです。\nB: ぜつめつきぐしゅをまもらなければなりません。",
     exampleSrc:"A: Conservation of biodiversity is important.\nB: We must protect endangered species.",
     funFact:"多様性 has expanded beyond biology into corporate culture. ダイバーシティ (diversity, the English loanword) is used for workplace diversity, while たようせい covers biological diversity. Japan hosted the COP10 biodiversity conference in Nagoya in 2010, producing the Aichi Targets for global biodiversity conservation."},

    {type:"mc", q:"じぞくかのうなかいはつ translates to:", opts:["Development that can continue without depleting resources","Rapid industrial growth","Traditional farming methods","Economic expansion plans"], ans:"Development that can continue without depleting resources",
     hint:"じぞく means to c.../sustain, and かのう means possible."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. ほぜんする = to conserve/preserve.\nかんきょうほぜん = environmental conservation.",
     example:"A: しぜんかんきょうのほぜんにとりくんでいます。\nB: ぐたいてきにどんなかつどうをしていますか？",
     exampleSrc:"A: We are working on conservation of the natural environment.\nB: Specifically, what kind of activities are you doing?",
     funFact:"保全 uses 保 (protect) and 全 (whole/complete). It implies keeping something intact and whole. The related word 保護 (hogo, protection) is slightly different: ほぜん preserves the current state, while ほご actively shields from harm. Environmental texts use both: しぜんほぜん (nature conservation) and どうぶつほご (animal protection)."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ (extinction) + きぐ (fear/concern) + しゅ (species).\nぜつめつきぐしゅリスト = endangered species list.",
     example:"A: にほんにはおおくのぜつめつきぐしゅがいます。\nB: トキやイリオモテヤマネコがゆうめいですね。",
     exampleSrc:"A: There are many endangered species in Japan.\nB: The crested ibis and Iriomote cat are famous.",
     funFact:"絶滅危惧種 is a four-part compound: 絶滅 (extinction) + 危惧 (apprehension) + 種 (species). Japan's most famous conservation success is the トキ (crested ibis). Once extinct in Japan, birds from China were bred in captivity and reintroduced. The トキ recovery program is a national symbol of conservation hope."},

    {type:"fb", s:"せいぶつ{1}のほぜんがじゅうようです。\n(Conservation of biodiversity is important.)", a:"たようせい", opts:["たようせい","せいたいけい","かんきょう","じぞくかのう"], sSrc:"Conservation of biodiversity is important.",
     hint:"The noun meaning variety and range of different types, applied to living things."},

    {type:"teach", trg:"はいき", src:"waste / discarding", pos:"noun", gender:null,
     note:"Kanji: 廃棄. はいきぶつ = waste products.\nはいきする = to discard/dispose of.",
     example:"A: プラスチックはいきぶつのさくげんがかだいです。\nB: リサイクルだけではたりませんね。",
     exampleSrc:"A: Reducing plastic waste is a challenge.\nB: Recycling alone is not enough.",
     funFact:"廃棄 uses 廃 (abolish/discard) and 棄 (abandon). Japan produces about 8 million tons of food waste (食品廃棄物, shokuhin haikibutsu) annually. The concept of もったいない (wasteful/what a shame) is deeply Japanese. The word was championed internationally by Kenyan Nobel laureate Wangari Maathai as an environmental principle."},

    {type:"teach", trg:"かだい", src:"challenge / issue / task to address", pos:"noun", gender:null,
     note:"Kanji: 課題. More formal than もんだい. Implies something that must be worked on.\nじゅうようなかだい = an important challenge.",
     example:"A: エネルギーもんだいはにほんのさいだいのかだいのひとつです。\nB: かいけつにはじかんがかかりますね。",
     exampleSrc:"A: The energy problem is one of Japan's biggest challenges.\nB: It will take time to solve.",
     funFact:"課題 uses 課 (assign/impose) and 題 (topic). Unlike もんだい (problem), かだい implies an assigned task you must tackle. Students have 課題 (homework/assignments), companies have 経営課題 (management challenges), and nations have 政策課題 (policy challenges). It carries a sense of duty and active engagement."},

    {type:"mc", q:"もったいない expresses:", opts:["Excitement about new things","A desire to buy more","Indifference to the environment","A feeling that waste is regrettable"], ans:"A feeling that waste is regrettable",
     hint:"This uniquely Japanese concept links wastefulness to a f... of shame or loss."},

    {type:"teach", trg:"とりくむ", src:"to tackle / to work on / to engage with", pos:"verb", gender:null,
     note:"Kanji: 取り組む. Group 1 verb. とりくみ = initiative/effort.\nかだいにとりくむ = to tackle a challenge.",
     example:"A: かんきょうもんだいにとりくむきぎょうがふえています。\nB: しょうひしゃのいしきもかわっていますね。",
     exampleSrc:"A: Companies tackling environmental issues are increasing.\nB: Consumer awareness is also changing.",
     funFact:"取り組む literally means 'to grab and engage.' It comes from sumo wrestling: 取組 (torikumi) is a sumo bout where wrestlers grapple. The metaphor of wrestling with a problem is vivid. In business and policy language, とりくみ (initiatives/efforts) appears constantly: 環境への取り組み (environmental initiatives)."},

    {type:"fb", s:"かんきょうもんだいに{1}きぎょうがふえています。\n(Companies tackling environmental issues are increasing.)", a:"とりくむ", opts:["とりくむ","さくげんする","ほぜんする","はいきする"], sSrc:"Companies tackling environmental issues are increasing.",
     hint:"The verb meaning to grapple with or actively engage a problem, from sumo wrestling."},

    {type:"teach", trg:"しょうひしゃ", src:"consumer", pos:"noun", gender:null,
     note:"Kanji: 消費者. しょうひ (consumption) + しゃ (person).\nしょうひしゃほご = consumer protection.",
     example:"A: しょうひしゃのかんきょういしきがたかまっています。\nB: エコしょうひんがうれているりゆうですね。",
     exampleSrc:"A: Consumer environmental awareness is growing.\nB: That is why eco-products are selling.",
     funFact:"消費者 uses 消 (extinguish/use up) + 費 (spend) + 者 (person). Japanese consumers are increasingly choosing エシカルしょうひ (ethical consumption). Fair trade coffee, organic produce, and plastic-free packaging are growing trends. The Consumer Affairs Agency (消費者庁) was created in 2009 to protect しょうひしゃ rights."},

    {type:"match", pairs:[{trg:"じぞくかのう",src:"sustainable"},{trg:"せいたいけい",src:"ecosystem"},{trg:"たようせい",src:"diversity"},{trg:"ほぜん",src:"conservation"}]},

    {type:"mc", q:"かだい differs from もんだい in that かだい:", opts:["Is a less serious concern","Only applies to academic settings","Implies an assigned task requiring active engagement","Is always about the environment"], ans:"Implies an assigned task requiring active engagement",
     hint:"課 means assign/impose, giving this word a sense of duty beyond just 'problem.'"},

    {type:"match", pairs:[{trg:"はいき",src:"waste/discarding"},{trg:"かだい",src:"challenge to address"},{trg:"とりくむ",src:"to tackle"},{trg:"しょうひしゃ",src:"consumer"}]},
  ]
};
export default LESSON_4;
