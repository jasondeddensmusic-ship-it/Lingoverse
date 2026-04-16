// Unit 27 Batch 2 Lesson 4: しぜんほご (Nature Conservation)
const BATCH2_L_4 = {
  id:"jav2_u27l_b2_4", title:"しぜんほご", icon:"🌳", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんほご",
     desc:"Japan has a rich tradition of nature conservation alongside rapid industrialization. Learn vocabulary for biodiversity, ecosystems, pollution control, and sustainable development. These terms appear in environmental policy discussions and JLPT N2 reading passages about society and nature.",
     goals:["Use conservation and ecology vocabulary","Discuss biodiversity and sustainability","Understand environmental protection terminology"]},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. せいたいけいのほご = ecosystem protection.\nかいようせいたいけい = marine ecosystem.",
     example:"A: もりのせいたいけいはたようなせいぶつでなりたっています。\nB: ひとつのしゅがきえるとぜんたいにえいきょうがでますね。",
     exampleSrc:"A: Forest ecosystems are made up of diverse organisms.\nB: If one species disappears, it affects the whole system.",
     funFact:"生態系 uses 生態 (ecology/life form) and 系 (system). Japan's ecosystems are remarkably diverse for a small island nation, ranging from subarctic Hokkaido to subtropical Okinawa. The country has over 90,000 identified species. Japan designated its first National Park in 1934 and now has 34 national parks protecting key せいたいけい."},

    {type:"teach", trg:"せいぶつたようせい", src:"biodiversity", pos:"noun", gender:null,
     note:"Kanji: 生物多様性. せいぶつ (organisms) + たようせい (diversity).\nせいぶつたようせいじょうやく = Convention on Biological Diversity.",
     example:"A: せいぶつたようせいのほぜんはかんきょうほごのきほんです。\nB: にほんにもぜつめつきぐしゅがおおくいます。",
     exampleSrc:"A: Conservation of biodiversity is fundamental to environmental protection.\nB: Japan also has many endangered species.",
     funFact:"生物多様性 is a five-kanji compound that entered common use after the 1992 Earth Summit. Japan hosted the COP10 biodiversity conference in Nagoya in 2010, which produced the Aichi Targets. The country faces せいぶつたようせい challenges from habitat loss, invasive species, and climate change, but also has strong traditions of satoyama (里山) sustainable land management."},

    {type:"teach", trg:"ぜつめつ", src:"extinction", pos:"noun", gender:null,
     note:"Kanji: 絶滅. ぜつめつする = to become extinct.\nぜつめつきぐしゅ = endangered species.",
     example:"A: このどうぶつはぜつめつのきけんにさらされています。\nB: ほごかつどうがきゅうむです。",
     exampleSrc:"A: This animal faces the danger of extinction.\nB: Conservation activities are urgently needed.",
     funFact:"絶滅 uses 絶 (sever/extreme) and 滅 (destroy/perish). Japan has experienced notable ぜつめつ cases: the Japanese wolf (ニホンオオカミ) went extinct around 1905, and the Japanese river otter was declared extinct in 2012. Current conservation efforts focus on protecting the tancho crane, Iriomote wildcat, and other ぜつめつきぐしゅ."},

    {type:"mc", q:"せいぶつたようせい means:", opts:["Biodiversity","Evolution","Mutation","Reproduction"], ans:"Biodiversity",
     hint:"The compound combines 'organisms' with 'diversity/variety' to name the full range of life forms."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. ほぜんする = to conserve/preserve.\nかんきょうほぜん = environmental conservation.",
     example:"A: しぜんかんきょうのほぜんはちいきのきょうりょくがひつようです。\nB: ボランティアかつどうもだいじですね。",
     exampleSrc:"A: Preserving the natural environment requires local cooperation.\nB: Volunteer activities are also important.",
     funFact:"保全 uses 保 (protect/maintain) and 全 (complete/whole). While ほご (protection) focuses on shielding from harm, ほぜん emphasizes maintaining something in its complete, intact state. In environmental policy, かんきょうほぜん is a broader concept than かんきょうほご, encompassing sustainable management rather than just defensive protection."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. じぞくかのうなかいはつ = sustainable development.\nSDGs = じぞくかのうなかいはつもくひょう.",
     example:"A: じぞくかのうなしゃかいをめざさなければなりません。\nB: SDGsのたっせいがせかいきょうつうのもくひょうです。",
     exampleSrc:"A: We must aim for a sustainable society.\nB: Achieving the SDGs is a shared global goal.",
     funFact:"持続可能 uses 持続 (continuation) and 可能 (possible). The term became widespread in Japanese after the 2015 adoption of the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGs initiatives, and the term じぞくかのうせい (sustainability) appears in corporate reports, government policies, and media daily."},

    {type:"fb", s:"しぜんかんきょうの{1}はちいきのきょうりょくがひつようです。\n(Preserving the natural environment requires local cooperation.)", a:"ほぜん", opts:["ほぜん","ぜつめつ","おせん","はかい"], sSrc:"Preserving the natural environment requires local cooperation.",
     hint:"The noun meaning 'conservation,' maintaining something in its complete state."},

    {type:"teach", trg:"おせん", src:"pollution / contamination", pos:"noun", gender:null,
     note:"Kanji: 汚染. おせんする = to pollute.\nすいしつおせん = water pollution. どじょうおせん = soil contamination.",
     example:"A: かわのすいしつおせんがかいぜんされつつあります。\nB: こうじょうのはいすいきせいがこうかをあげていますね。",
     exampleSrc:"A: River water pollution is being improved.\nB: Factory wastewater regulations are having an effect.",
     funFact:"汚染 uses 汚 (dirty/contaminate) and 染 (dye/stain). Japan's four major おせん diseases (四大公害病) in the 1950s-70s were watershed moments in environmental history. Minamata disease (mercury), Niigata Minamata disease, Itai-itai disease (cadmium), and Yokkaichi asthma led to strict pollution control laws that became models for other countries."},

    {type:"teach", trg:"はいすい", src:"wastewater / drainage", pos:"noun", gender:null,
     note:"Kanji: 排水. はいすいきせい = wastewater regulations.\nはいすいしょり = wastewater treatment.",
     example:"A: こうじょうのはいすいはきせいにしたがってしょりされています。\nB: かんきょうほぜんのためにじゅうようですね。",
     exampleSrc:"A: Factory wastewater is treated in accordance with regulations.\nB: It is important for environmental conservation.",
     funFact:"排水 uses 排 (expel/discharge) and 水 (water). Japanese はいすいしょり (wastewater treatment) technology is world-class, exported to developing countries through JICA programs. The transformation of Japanese rivers from polluted in the 1960s to clean today is one of the great environmental success stories."},

    {type:"teach", trg:"さとやま", src:"satoyama (traditional rural landscape)", pos:"noun", gender:null,
     note:"Kanji: 里山. A managed zone between village (里) and mountain (山).\nA model of sustainable human-nature coexistence.",
     example:"A: さとやまのかんきょうはにんげんとしぜんのきょうせいのモデルです。\nB: せかいからちゅうもくされていますね。",
     exampleSrc:"A: The satoyama environment is a model of human-nature coexistence.\nB: It is attracting attention from around the world.",
     funFact:"里山 is a uniquely Japanese concept describing the managed landscape between villages and wild mountains. For centuries, Japanese communities maintained さとやま through rice paddies, managed forests, and irrigation ponds. This created rich biodiversity. The concept gained international attention at COP10 in Nagoya as a model for sustainable land use."},

    {type:"mc", q:"おせん means:", opts:["Pollution/contamination","Conservation","Recycling","Sustainability"], ans:"Pollution/contamination",
     hint:"The word combining 'dirty' and 'stain,' describing the harmful degradation of environment."},

    {type:"teach", trg:"きょうせい", src:"coexistence / symbiosis", pos:"noun", gender:null,
     note:"Kanji: 共生. きょうせいする = to coexist.\nしぜんとのきょうせい = coexistence with nature.",
     example:"A: にんげんとしぜんのきょうせいはかのうでしょうか？\nB: さとやまがそのかのうせいをしめしています。",
     exampleSrc:"A: Is coexistence between humans and nature possible?\nB: Satoyama demonstrates that possibility.",
     funFact:"共生 uses 共 (together) and 生 (live). In biology, きょうせい means symbiosis. In Japanese social and environmental philosophy, it extends to the ideal of different entities living together harmoniously. The concept of たぶんかきょうせい (multicultural coexistence) applies the same idea to diverse human communities."},

    {type:"fb", s:"にんげんとしぜんの{1}はかのうでしょうか？\n(Is coexistence between humans and nature possible?)", a:"きょうせい", opts:["きょうせい","ぜつめつ","おせん","ほぜん"], sSrc:"Is coexistence between humans and nature possible?",
     hint:"The noun meaning 'coexistence,' different entities living together harmoniously."},

    {type:"match", pairs:[{trg:"せいたいけい",src:"ecosystem"},{trg:"せいぶつたようせい",src:"biodiversity"},{trg:"ぜつめつ",src:"extinction"},{trg:"じぞくかのう",src:"sustainable"}]},

    {type:"fb", s:"このどうぶつは{1}のきけんにさらされています。\n(This animal faces the danger of extinction.)", a:"ぜつめつ", opts:["ぜつめつ","おせん","ほぜん","きょうせい"], sSrc:"This animal faces the danger of extinction.",
     hint:"The noun for the complete disappearance of a species."},

    {type:"match", pairs:[{trg:"おせん",src:"pollution"},{trg:"はいすい",src:"wastewater"},{trg:"さとやま",src:"satoyama (rural landscape)"},{trg:"きょうせい",src:"coexistence"}]},

    {type:"mc", q:"さとやま is valued internationally as:", opts:["A model of sustainable human-nature coexistence","A type of Japanese garden","A farming technique","A nature reserve with no human activity"], ans:"A model of sustainable human-nature coexistence",
     hint:"This landscape shows how humans and nature can thrive together through managed use."},
  ]
};
export default BATCH2_L_4;
