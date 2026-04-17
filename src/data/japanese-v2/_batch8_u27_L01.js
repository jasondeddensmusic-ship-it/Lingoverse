// Batch 8 – Unit 27 (B2.1 Environment): Energy & Sustainability
const BATCH8_L1 = {
  id:"jav2_u27l_b8_1", title:"エネルギーとじぞく", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーとじぞく",
     desc:"Master energy and sustainability vocabulary at N2 level. These terms are essential for discussing Japan's environmental policies and global climate action.",
     goals:["Discuss energy sources and policy","Understand sustainability terminology","Express views on environmental issues"]},

    {type:"teach", trg:"さいせいかのう", src:"renewable", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nKanji: 再生可能.",
     example:"A: さいせいかのうエネルギーのわりあいをふやすべきです。\nB: たいようこうとふうりょくがゆうぼうですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We should increase the proportion of renewable energy.\nB: Solar and wind power are promising.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan's さいせいかのうエネルギー ratio was about 22% in 2023, with a target of 36-38% by 2030. After the 2011 Fukushima disaster, all nuclear plants were shut down, forcing rapid expansion of さいせいかのう sources. Japan's geography challenges wind and solar: limited flat land and frequent typhoons."},

    {type:"teach", trg:"たいようこう", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"たいよう (sun) + こう (light). たいようこうパネル = solar panel.\nたいようこうはつでん = solar power generation.",
     example:"A: やねにたいようこうパネルをつけました。\nB: でんきだいはへりましたか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: I installed solar panels on the roof.\nB: Did the electricity bill decrease?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan is the world's third-largest solar energy producer. After Fukushima, the government introduced FIT (こていかかくかいとりせいど) guaranteeing prices for solar electricity. Mega solar farms appeared across Japan, though land use conflicts arose. Rooftop たいようこう is increasingly popular for homes."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nげんぱつ = nuclear plant (casual abbreviation).",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: あんぜんせいがさいゆうせんです。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Safety is the top priority.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan's relationship with げんしりょく is complex: the only country to suffer atomic bombing, yet a major nuclear power user. The 2011 Fukushima disaster fundamentally changed public opinion. げんぱつはんたい (anti-nuclear) movements grew, but energy security concerns led to gradual restart of some plants."},

    {type:"teach", trg:"おんしつこうかガス", src:"greenhouse gas", pos:"noun", gender:null,
     note:"おんしつ (greenhouse) + こうか (effect) + ガス (gas).\nCO2 is the main おんしつこうかガス.",
     example:"A: おんしつこうかガスのはいしゅつりょうをさくげんしなければなりません。\nB: 2050ねんにじっしつゼロがもくひょうです。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We must reduce greenhouse gas emissions.\nB: The goal is net zero by 2050.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan pledged カーボンニュートラル (carbon neutrality) by 2050. おんしつこうかガス reduction targets drive policy across industry, transport, and households. The term だつたんそ (decarbonization) has become a major business buzzword. Companies tout ESG (かんきょう・しゃかい・ガバナンス) commitments."},

    {type:"teach", trg:"しょうエネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for しょうエネルギー. しょうエネかでん = energy-efficient appliance.\nせつでん = electricity saving.",
     example:"A: なつはしょうエネをこころがけましょう。\nB: エアコンのおんどをにじゅうはちどにします。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us be mindful of energy saving in summer.\nB: I will set the AC to 28 degrees.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan's しょうエネ culture is world-leading. クールビズ (Cool Biz) campaign encourages 28-degree AC settings and no neckties in summer. しょうエネほう (Energy Conservation Law) sets efficiency standards. After Fukushima, せつでん (electricity saving) became a national effort with planned blackout schedules."},

    {type:"mc", q:"What does さいせいかのうエネルギー mean?", opts:["Renewable energy","Nuclear energy","Fossil fuel energy","Chemical energy"], ans:"Renewable energy",
     hint:"This term combines 're-birth possible' with 'e...' for sources that naturally replenish."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"Kanji: 排出. はいしゅつりょう = emission volume.\nCO2はいしゅつ = CO2 emissions.",
     example:"A: こうじょうからのはいしゅつりょうをけいそくしています。\nB: きじゅんないですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We are measuring emissions from the factory.\nB: Are they within standards?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"はいしゅつ (排出) combines 排 (expel) and 出 (put out). はいしゅつけん (emission rights) trading is part of Japan's climate policy. はいすいきじゅん (wastewater standards) protect rivers and oceans. Japan's strict はいしゅつきせい (emission regulations) for vehicles led to the development of hybrid and electric cars."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. SDGs = じぞくかのうなかいはつもくひょう.\nじぞくかのうせい = sustainability.",
     example:"A: じぞくかのうなしゃかいをめざしましょう。\nB: SDGsのもくひょうにとりくんでいます。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us aim for a sustainable society.\nB: We are working on SDG goals.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"じぞくかのう (sustainable) has become ubiquitous in Japanese corporate and government language since the UN SDGs gained traction. SDGsバッジ (colorful wheel pins) are worn by many Japanese businesspeople. じぞくかのうせい (sustainability) appears in corporate reports, school curricula, and consumer product marketing."},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. かいようせいたいけい = marine ecosystem.\nせいたいけいをまもる = to protect ecosystems.",
     example:"A: かいはつがせいたいけいにえいきょうをあたえています。\nB: かんきょうアセスメントがひつようですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Development is affecting the ecosystem.\nB: Environmental assessment is needed.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's せいたいけい is remarkably diverse for a small country. Four main islands span subtropical to subarctic zones. Unique species like にほんカモシカ and にほんザル thrive. しらかみさんち (Shirakami Mountains) is a UNESCO site for its pristine ブナ (beech) forest せいたいけい."},

    {type:"teach", trg:"しげん", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源. てんねんしげん = natural resources.\nしげんのムダづかい = wasting resources.",
     example:"A: にほんはしげんがすくないくにです。\nB: リサイクルがじゅうようですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japan is a country with few resources.\nB: Recycling is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan imports over 90% of its energy しげん (resources). This vulnerability drives しょうエネ technology and リサイクル innovation. Japan's 3R policy (リデュース, リユース, リサイクル) is world-leading. じんてきしげん (human resources) is considered Japan's greatest asset, compensating for lack of てんねんしげん."},

    {type:"teach", trg:"かいはつ", src:"development", pos:"noun", gender:null,
     note:"Kanji: 開発. じぞくかのうなかいはつ = sustainable development.\nぎじゅつかいはつ = technology development.",
     example:"A: ちいきかいはつとかんきょうほぜんのバランスがだいじです。\nB: どちらかだけではだめですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Balance between regional development and environmental conservation is important.\nB: Neither alone is sufficient.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"かいはつ (開発) spans physical (とちかいはつ, land development), technological (ぎじゅつかいはつ, R&D), and human (じんざいかいはつ, human resource development). Japan's こうどけいざいせいちょうき (high economic growth period) saw massive かいはつ that both modernized and damaged the environment."},

    {type:"fb", s:"おんしつこうかガスの{1}りょうをさくげんしなければなりません。\n(We must reduce greenhouse gas emission volume.)", a:"はいしゅつ", opts:["はいしゅつ","しげん","かいはつ","エネルギー"], sSrc:"We must reduce greenhouse gas emission volume.",
     hint:"This word means releasing or discharging substances into the environment."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"ぜつめつ (extinction) + きぐ (concern) + しゅ (species).\nレッドリスト = Red List of endangered species.",
     example:"A: にほんにはおおくのぜつめつきぐしゅがいます。\nB: ほごかつどうがひつようですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: There are many endangered species in Japan.\nB: Conservation activities are needed.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's ぜつめつきぐしゅ include トキ (Japanese crested ibis), イリオモテヤマネコ (Iriomote wildcat), and ラッコ (sea otter). The トキ was once extinct in the wild in Japan but has been successfully reintroduced through breeding programs. Japan's レッドデータブック lists over 3,700 threatened species."},

    {type:"teach", trg:"ほぜん", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. かんきょうほぜん = environmental conservation.\nせいたいけいほぜん = ecosystem preservation.",
     example:"A: しぜんかんきょうのほぜんにとりくんでいます。\nB: ぐたいてきになにをしていますか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: We are working on natural environment conservation.\nB: What specifically are you doing?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
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
