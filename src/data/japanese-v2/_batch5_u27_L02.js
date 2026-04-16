// Unit 27 Batch 5 Lesson 2: しぜんほご (Nature Conservation & Ecology)
const BATCH5_L_2 = {
  id:"jav2_u27l_b5_2", title:"しぜんほご", icon:"🌳", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんほご",
     desc:"Japan's relationship with nature is complex: deep reverence alongside rapid industrialization. Learn vocabulary for conservation, biodiversity, and ecological awareness. From national parks to endangered species, these terms appear in JLPT readings and reflect Japan's evolving environmental consciousness.",
     goals:["Use conservation vocabulary: ほご, せいたいけい, ぜつめつ","Discuss biodiversity and ecosystems","Express environmental concern and action"]},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. せいたい (ecology/life form) + けい (system).\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりのせいたいけいをまもることがじゅうようです。\nB: いっぽんのきをきることがぜんたいにえいきょうしますね。",
     exampleSrc:"A: Protecting forest ecosystems is important.\nB: Cutting one tree can affect the whole system.",
     funFact:"生態系 was coined to translate 'ecosystem.' 生 (life) + 態 (state/form) + 系 (system). Japan's せいたいけい is uniquely diverse due to the long island chain spanning subarctic to subtropical zones. The concept of 里山 (satoyama, managed rural landscape) represents a traditional Japanese approach to living in harmony with nature's ecosystems."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"Kanji: 絶滅危惧種. ぜつめつ (extinction) + きぐ (concern) + しゅ (species).\nレッドリスト = red list of endangered species.",
     example:"A: にほんにはおおくのぜつめつきぐしゅがいます。\nB: トキやイリオモテヤマネコがゆうめいですね。",
     exampleSrc:"A: Japan has many endangered species.\nB: The crested ibis and Iriomote wildcat are famous.",
     funFact:"絶滅危惧種 is a five-kanji compound: 絶 (sever), 滅 (destroy), 危 (danger), 惧 (fear), 種 (species). Japan's most famous conservation story is the トキ (crested ibis), which went extinct in the wild in 2003 but was reintroduced using birds from China. The イリオモテヤマネコ (Iriomote wildcat) exists only on a tiny Okinawan island with fewer than 100 individuals."},

    {type:"teach", trg:"ほぜん", src:"preservation / conservation", pos:"noun", gender:null,
     note:"Kanji: 保全. ほぜんする = to preserve/conserve.\nしぜんほぜん = nature conservation. かんきょうほぜん = environmental conservation.",
     example:"A: せいたいけいのほぜんにとりくむべきです。\nB: さんぎょうかいはつとのバランスがかだいですね。",
     exampleSrc:"A: We should work on ecosystem conservation.\nB: The challenge is balancing with industrial development.",
     funFact:"保全 uses 保 (protect/maintain) and 全 (complete/whole). It implies keeping something complete and intact. Similar words: ほご (protection, active defense), ほぞん (preservation, keeping as-is), ほぜん (conservation, maintaining function). Environmental policy uses all three: しぜんほご (nature protection), ぶんかざいほぞん (cultural heritage preservation), かんきょうほぜん (environmental conservation)."},

    {type:"teach", trg:"たようせい", src:"diversity / biodiversity", pos:"noun", gender:null,
     note:"Kanji: 多様性. た (many) + よう (form/type) + せい (-ness).\nせいぶつたようせい = biodiversity.",
     example:"A: せいぶつたようせいのほぜんはちきゅうきぼのかだいです。\nB: ひとつのしゅのぜつめつがれんさてきにえいきょうしますね。",
     exampleSrc:"A: Biodiversity conservation is a global-scale challenge.\nB: The extinction of one species can have cascading effects.",
     funFact:"多様性 gained prominence beyond biology to describe cultural diversity (文化的多様性) and workplace diversity (ダイバーシティ). Japanese companies increasingly discuss たようせい in hiring and management. The word connects ecology to sociology: both natural and human systems thrive with たようせい. The CBD (Convention on Biological Diversity) is called せいぶつたようせいじょうやく."},

    {type:"mc", q:"ぜつめつきぐしゅ means:", opts:["Species at risk of extinction","Common species","Invasive species","Domesticated species"], ans:"Species at risk of extinction",
     hint:"ぜつめつ (e...) + きぐ (concern/worry) + しゅ (s...)."},

    {type:"teach", trg:"さとやま", src:"satoyama (managed rural landscape)", pos:"noun", gender:null,
     note:"Kanji: 里山. さと (village) + やま (mountain). Traditional landscape between village and wilderness.\nA model of sustainable human-nature coexistence.",
     example:"A: さとやまのかんきょうをふっかつさせるうごきがひろがっています。\nB: にんげんとしぜんのきょうせいのモデルですね。",
     exampleSrc:"A: Movements to revive satoyama environments are spreading.\nB: It is a model of human-nature coexistence.",
     funFact:"里山 represents Japan's traditional approach to nature: not wilderness (原生林 gensei-rin) and not farmland (農地 nouchi), but a managed zone where humans tend forests, rice paddies, and ponds. This landscape supported incredible biodiversity. As rural depopulation advances, さとやま are being abandoned. Conservation efforts to restore them have gained international attention as a sustainable land-use model."},

    {type:"teach", trg:"きょうせい", src:"coexistence / symbiosis", pos:"noun", gender:null,
     note:"Kanji: 共生. きょうせいする = to coexist.\nしぜんときょうせいする = to coexist with nature.",
     example:"A: にんげんとしぜんのきょうせいをめざすべきです。\nB: そのためにはせいかつようしきをみなおすひつようがありますね。",
     exampleSrc:"A: We should aim for coexistence between humans and nature.\nB: For that, we need to reconsider our lifestyle.",
     funFact:"共生 uses 共 (together) and 生 (life/live). In biology, it means symbiosis. In social contexts, たぶんかきょうせい (multicultural coexistence) describes living harmoniously with diversity. Japanese environmental philosophy emphasizes きょうせい over domination. The Shinto concept of nature as sacred aligns with modern きょうせい ideals, though Japan's environmental record is mixed."},

    {type:"teach", trg:"しげん", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源. しぜんしげん = natural resources.\nしげんのゆうこうかつよう = effective use of resources.",
     example:"A: かぎりあるしげんをたいせつにしなければなりません。\nB: リサイクルとさいりようがかぎです。",
     exampleSrc:"A: We must treasure our limited resources.\nB: Recycling and reuse are key.",
     funFact:"資源 uses 資 (resources/capital) and 源 (source/origin). Japan is resource-poor (資源のとぼしいくに), importing most raw materials. This scarcity drove Japan's famous recycling culture and energy efficiency. もったいない (wasteful) and しげんをたいせつに (treasure resources) are deeply ingrained values. Japan's recycling rate for plastic bottles exceeds 85%."},

    {type:"tip", title:"Japan's Environmental Concepts",
     text:"Traditional concepts:\nさとやま = managed rural landscape\nもったいない = respect for resources\nしぜんすうはい = nature worship (Shinto)\n\nModern environmental vocabulary:\nせいたいけい = ecosystem\nたようせい = biodiversity\nじぞくかのう = sustainable\nカーボンニュートラル = carbon neutral\n\nConservation actions:\nほご = protection (active)\nほぜん = conservation (maintaining)\nほぞん = preservation (keeping intact)\nふっかつ = revival/restoration\n\nJapan blends ancient reverence for nature with modern environmental science."},

    {type:"teach", trg:"ふっかつ", src:"revival / restoration / resurrection", pos:"noun", gender:null,
     note:"Kanji: 復活. ふっかつする = to revive/be restored.\nしぜんかんきょうのふっかつ = restoration of the natural environment.",
     example:"A: かわのせいたいけいがふっかつしつつあります。\nB: すいしつかいぜんのどりょくがみのりましたね。",
     exampleSrc:"A: The river's ecosystem is being revived.\nB: Water quality improvement efforts have borne fruit.",
     funFact:"復活 uses 復 (return/restore) and 活 (life/active). The word carries powerful positive energy: bringing something back to life. イースター (Easter) is 復活祭 in Japanese. In environmental contexts, ふっかつ describes the return of species or the recovery of damaged ecosystems. Japan's success in reviving rivers and forests after industrial pollution is a notable conservation story."},

    {type:"fb", s:"せいぶつ{1}のほぜんはちきゅうきぼのかだいです。\n(Biodiversity conservation is a global-scale challenge.)", a:"たようせい", opts:["たようせい","しげん","かんきょう","しぜん"], sSrc:"Biodiversity conservation is a global-scale challenge.",
     hint:"The word for diversity/variety, combined with せいぶつ (living things) for 'biodiversity.'"},

    {type:"mc", q:"さとやま represents:", opts:["A managed landscape between village and wilderness","A pristine untouched forest","An urban park","A desert region"], ans:"A managed landscape between village and wilderness",
     hint:"This Japanese concept describes the zone where humans traditionally m... forests and fields sustainably."},

    {type:"match", pairs:[{trg:"せいたいけい",src:"ecosystem"},{trg:"ぜつめつきぐしゅ",src:"endangered species"},{trg:"きょうせい",src:"coexistence"},{trg:"しげん",src:"resources"}]},

    {type:"fb", s:"にんげんとしぜんの{1}をめざすべきです。\n(We should aim for coexistence between humans and nature.)", a:"きょうせい", opts:["きょうせい","たいりつ","ぶんり","きょうそう"], sSrc:"We should aim for coexistence between humans and nature.",
     hint:"The word meaning living together harmoniously, using kanji for 'together' and 'life.'"},

    {type:"mc", q:"Japan's recycling culture is driven partly by:", opts:["Being resource-poor and importing most raw materials","Having abundant natural resources","Government mandates only","Foreign pressure only"], ans:"Being resource-poor and importing most raw materials",
     hint:"Japan's scarcity of natural resources fostered a deep cultural value of not wasting."}
  ]
};
export default BATCH5_L_2;
