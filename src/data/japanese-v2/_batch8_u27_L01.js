// Batch 8 – Unit 27 (B2.1 Environment): Energy & Sustainability
const BATCH8_L1 = {
  id:"jav2_u27l_b8_1", title:"エネルギーとじぞく", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーとじぞく",
     desc:"Master energy and sustainability vocabulary at N2 level. These terms are essential for discussing Japan's environmental policies and global climate action.",
     goals:["Discuss energy sources and policy","Understand sustainability terminology","Express views on environmental issues"]},

    {type:"teach", trg:"さいせいかのう", src:"renewable", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nKanji: 再生可能.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうとふうりょくがゆうぼうですね。",
     exampleSrc:"A: We should increase the proportion of renewable energy.\nB: Solar and wind power are promising.",
     funFact:"Japan's さいせいかのうエネルギー ratio was about 22% in 2023, with a target of 36-38% by 2030. After the 2011 Fukushima disaster, all nuclear plants were shut down, forcing rapid expansion of さいせいかのう sources. Japan's geography challenges wind and solar: limited flat land and frequent typhoons."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"たいよう (sun) + こう (light). たいようこうパネル = solar panel.\nたいようこうはつでん = solar power generation.",
     example:"A: やねにたいようこうパネルをつけました。\nB: でんきだいはへりましたか？",
     exampleSrc:"A: I installed solar panels on the roof.\nB: Did the electricity bill decrease?",
     funFact:"Japan is the world's third-largest solar energy producer. After Fukushima, the government introduced FIT (こていかかくかいとりせいど) guaranteeing prices for solar electricity. Mega solar farms appeared across Japan, though land use conflicts arose. Rooftop たいようこう is increasingly popular for homes."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nげんぱつ = nuclear plant (casual abbreviation).",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: あんぜんせいがさいゆうせんです。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Safety is the top priority.",
     funFact:"Japan's relationship with げんしりょく is complex: the only country to suffer atomic bombing, yet a major nuclear power user. The 2011 Fukushima disaster fundamentally changed public opinion. げんぱつはんたい (anti-nuclear) movements grew, but energy security concerns led to gradual restart of some plants."},

    {type:"teach", trg:"おんしつこうかガス", src:"greenhouse gas", pos:"noun", gender:null,
     note:"おんしつ (greenhouse) + こうか (effect) + ガス (gas).\nCO2 is the main おんしつこうかガス.",
     example:"A: おんしつこうかガスのはいしゅつりょうをさくげんしなければなりません。\nB: 2050ねんにじっしつゼロがもくひょうです。",
     exampleSrc:"A: We must reduce greenhouse gas emissions.\nB: The goal is net zero by 2050.",
     funFact:"Japan pledged カーボンニュートラル (carbon neutrality) by 2050. おんしつこうかガス reduction targets drive policy across industry, transport, and households. The term だつたんそ (decarbonization) has become a major business buzzword. Companies tout ESG (かんきょう・しゃかい・ガバナンス) commitments."},

    {type:"teach", trg:"しょうエネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for しょうエネルギー. しょうエネかでん = energy-efficient appliance.\nせつでん = electricity saving.",
     example:"A: なつはしょうエネをこころがけましょう。\nB: エアコンのおんどをにじゅうはちどにします。",
     exampleSrc:"A: Let us be mindful of energy saving in summer.\nB: I will set the AC to 28 degrees.",
     funFact:"Japan's しょうエネ culture is world-leading. クールビズ (Cool Biz) campaign encourages 28-degree AC settings and no neckties in summer. しょうエネほう (Energy Conservation Law) sets efficiency standards. After Fukushima, せつでん (electricity saving) became a national effort with planned blackout schedules."},

    {type:"mc", q:"What does さいせいかのうエネルギー mean?", opts:["Renewable energy","Nuclear energy","Fossil fuel energy","Chemical energy"], ans:"Renewable energy",
     hint:"This term combines 're-birth possible' with 'e...' for sources that naturally replenish."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"Kanji: 排出. はいしゅつりょう = emission volume.\nCO2はいしゅつ = CO2 emissions.",
     example:"A: こうじょうからのはいしゅつりょうをけいそくしています。\nB: きじゅんないですか？",
     exampleSrc:"A: We are measuring emissions from the factory.\nB: Are they within standards?",
     funFact:"はいしゅつ (排出) combines 排 (expel) and 出 (put out). はいしゅつけん (emission rights) trading is part of Japan's climate policy. はいすいきじゅん (wastewater standards) protect rivers and oceans. Japan's strict はいしゅつきせい (emission regulations) for vehicles led to the development of hybrid and electric cars."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. SDGs = じぞくかのうなかいはつもくひょう.\nじぞくかのうせい = sustainability.",
     example:"A: じぞくかのうなしゃかいをめざしましょう。\nB: SDGsのもくひょうにとりくんでいます。",
     exampleSrc:"A: Let us aim for a sustainable society.\nB: We are working on SDG goals.",
     funFact:"じぞくかのう (sustainable) has become ubiquitous in Japanese corporate and government language since the UN SDGs gained traction. SDGsバッジ (colorful wheel pins) are worn by many Japanese businesspeople. じぞくかのうせい (sustainability) appears in corporate reports, school curricula, and consumer product marketing."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. かいようせいたいけい = marine ecosystem.\nせいたいけいをまもる = to protect ecosystems.",
     example:"A: かいはつがせいたいけいにえいきょうをあたえています。\nB: かんきょうアセスメントがひつようですね。",
     exampleSrc:"A: Development is affecting the ecosystem.\nB: Environmental assessment is needed.",
     funFact:"Japan's せいたいけい is remarkably diverse for a small country. Four main islands span subtropical to subarctic zones. Unique species like にほんカモシカ and にほんザル thrive. しらかみさんち (Shirakami Mountains) is a UNESCO site for its pristine ブナ (beech) forest せいたいけい."},

    {type:"teach", trg:"しげん", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源. てんねんしげん = natural resources.\nしげんのムダづかい = wasting resources.",
     example:"A: にほんはしげんがすくないくにです。\nB: リサイクルがじゅうようですね。",
     exampleSrc:"A: Japan is a country with few resources.\nB: Recycling is important.",
     funFact:"Japan imports over 90% of its energy しげん (resources). This vulnerability drives しょうエネ technology and リサイクル innovation. Japan's 3R policy (リデュース, リユース, リサイクル) is world-leading. じんてきしげん (human resources) is considered Japan's greatest asset, compensating for lack of てんねんしげん."},

    {type:"teach", trg:"かいはつ", src:"development", pos:"noun", gender:null,
     note:"Kanji: 開発. じぞくかのうなかいはつ = sustainable development.\nぎじゅつかいはつ = technology development.",
     example:"A: ちいきかいはつとかんきょうほぜんのバランスがだいじです。\nB: どちらかだけではだめですね。",
     exampleSrc:"A: Balance between regional development and environmental conservation is important.\nB: Neither alone is sufficient.",
     funFact:"かいはつ (開発) spans physical (とちかいはつ, land development), technological (ぎじゅつかいはつ, R&D), and human (じんざいかいはつ, human resource development). Japan's こうどけいざいせいちょうき (high economic growth period) saw massive かいはつ that both modernized and damaged the environment."},

    {type:"fb", s:"おんしつこうかガスの{1}りょうをさくげんしなければなりません。\n(We must reduce greenhouse gas emission volume.)", a:"はいしゅつ", opts:["はいしゅつ","しげん","かいはつ","エネルギー"], sSrc:"We must reduce greenhouse gas emission volume.",
     hint:"This word means releasing or discharging substances into the environment."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ (extinction) + きぐ (concern) + しゅ (species).\nレッドリスト = Red List of endangered species.",
     example:"A: にほんにはおおくのぜつめつきぐしゅがいます。\nB: ほごかつどうがひつようですね。",
     exampleSrc:"A: There are many endangered species in Japan.\nB: Conservation activities are needed.",
     funFact:"Japan's ぜつめつきぐしゅ include トキ (Japanese crested ibis), イリオモテヤマネコ (Iriomote wildcat), and ラッコ (sea otter). The トキ was once extinct in the wild in Japan but has been successfully reintroduced through breeding programs. Japan's レッドデータブック lists over 3,700 threatened species."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. かんきょうほぜん = environmental conservation.\nせいたいけいほぜん = ecosystem preservation.",
     example:"A: しぜんかんきょうのほぜんにとりくんでいます。\nB: ぐたいてきになにをしていますか？",
     exampleSrc:"A: We are working on natural environment conservation.\nB: What specifically are you doing?",
     funFact:"ほぜん (保全) and ほご (保護) are related but distinct: ほぜん means maintaining the current state, ほご means actively protecting from threats. Japanese environmental law uses both precisely. かんきょうほぜんほう (Environmental Conservation Law) and しぜんこうえんほう (Natural Parks Law) form the legal framework."},

    {type:"match", pairs:[{trg:"さいせいかのう",src:"renewable"},{trg:"じぞくかのう",src:"sustainable"},{trg:"しょうエネ",src:"energy conservation"},{trg:"はいしゅつ",src:"emission"},{trg:"ほぜん",src:"conservation"}],
     hint:"Match each environmental term with its English meaning."},

    {type:"mc", q:"Why is しょうエネ culture so strong in Japan?", opts:["Japan imports over 90% of its energy resources","Japan has too much energy","It is only a trend since 2020","Japan produces all its own energy"], ans:"Japan imports over 90% of its energy resources",
     hint:"Resource scarcity drives innovation in efficiency and conservation."},

    {type:"fb", s:"{1}なしゃかいをめざしましょう。\n(Let us aim for a sustainable society.)", a:"じぞくかのう", opts:["じぞくかのう","さいせいかのう","しょうエネ","かんきょう"], sSrc:"Let us aim for a sustainable society.",
     hint:"This term from the UN SDGs describes something that can be maintained long-term."},

    {type:"mc", q:"What is Japan's carbon neutrality target year?", opts:["2050","2030","2040","2060"], ans:"2050",
     hint:"Japan pledged to achieve net-zero greenhouse gas emissions by this year."}
  ]
};
export default BATCH8_L1;
