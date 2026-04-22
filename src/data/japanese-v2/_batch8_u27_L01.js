// Batch 8 – Unit 27 (B2.1 Environment): Energy & Sustainability
const BATCH8_L1 = {
  id:"jav2_u27l_b8_1", title:"エネルギーと持続(じぞく)", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギーと持続(じぞく)",
     desc:"Master energy and sustainability vocabulary at N2 level. These terms are essential for discussing Japan's environmental policies and global climate action.",
     goals:["Discuss energy sources and policy","Understand sustainability terminology","Express views on environmental issues"]},

    {type:"teach", trg:"再生可能(さいせいかのう)", src:"renewable", pos:"adj", gender:null,
     note:"再生可能(さいせいかのう)エネルギー = renewable energy.\nKanji: 再生可能.",
     example:"A: 再生可能(さいせいかのう)エネルギーの割合(わりあい)を増(ふ)やすべきです。\nB: 太陽光(たいようこう)と風力(ふうりょく)が有望(ゆうぼう)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We should increase the proportion of renewable energy.\nB: Solar and wind power are promising.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"Japan's 再生可能(さいせいかのう)エネルギー ratio was about 22% in 2023, with a target of 36-38% by 2030. After the 2011 Fukushima disaster, all nuclear plants were shut down, forcing rapid expansion of 再生可能(さいせいかのう) sources. Japan's geography challenges wind and solar: limited flat land and frequent typhoons."},

    {type:"teach", trg:"太陽光(たいようこう)", src:"solar power / sunlight", pos:"noun", gender:null,
     note:"太陽(たいよう) (sun) + 光(こう) (light). 太陽光(たいようこう)パネル = solar panel.\n太陽光(たいようこう)発電(はつでん) = solar power generation.",
     example:"A: 屋根(やね)に太陽光(たいようこう)パネルをつけました。\nB: 電気代(でんきだい)は減(へ)りましたか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: I installed solar panels on the roof.\nB: Did the electricity bill decrease?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"Japan is the world's third-largest solar energy producer. After Fukushima, the government introduced FIT (固定(こてい)価格(かかく)買取(かいとり)制度(せいど)) guaranteeing prices for solar electricity. Mega solar farms appeared across Japan, though land use conflicts arose. Rooftop 太陽光(たいようこう) is increasingly popular for homes."},

    {type:"teach", trg:"原子力(げんしりょく)", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. 原子力(げんしりょく)発電所(はつでんしょ) = nuclear power plant.\n原発(げんぱつ) = nuclear plant (casual abbreviation).",
     example:"A: 原子力(げんしりょく)発電所(はつでんしょ)の再稼動(さいかどう)について議論(ぎろん)が続(つづ)いています。\nB: 安全性(あんぜんせい)が最優先(さいゆうせん)です。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Safety is the top priority.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"Japan's relationship with 原子力(げんしりょく) is complex: the only country to suffer atomic bombing, yet a major nuclear power user. The 2011 Fukushima disaster fundamentally changed public opinion. 原発(げんぱつ)反対(はんたい) (anti-nuclear) movements grew, but energy security concerns led to gradual restart of some plants."},

    {type:"teach", trg:"温室効果(おんしつこうか)ガス", src:"greenhouse gas", pos:"noun", gender:null,
     note:"温室(おんしつ) (greenhouse) + 効果(こうか) (effect) + ガス (gas).\nCO2 is the main 温室効果(おんしつこうか)ガス.",
     example:"A: 温室効果(おんしつこうか)ガスの排出(はいしゅつ)量(りょう)を削減(さくげん)しなければなりません。\nB: 2050年(ねん)に実質(じっしつ)ゼロが目標(もくひょう)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We must reduce greenhouse gas emissions.\nB: The goal is net zero by 2050.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"Japan pledged カーボンニュートラル (carbon neutrality) by 2050. 温室効果(おんしつこうか)ガス reduction targets drive policy across industry, transport, and households. The term 脱炭素(だつたんそ) (decarbonization) has become a major business buzzword. Companies tout ESG (環境(かんきょう)・社会(しゃかい)・ガバナンス) commitments."},

    {type:"teach", trg:"省(しょう)エネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for 省(しょう)エネルギー. 省(しょう)エネ家電(かでん) = energy-efficient appliance.\n節電(せつでん) = electricity saving.",
     example:"A: 夏(なつ)は省(しょう)エネを心(こころ)がけましょう。\nB: エアコンの温度(おんど)を二十八度(にじゅうはちど)にします。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us be mindful of energy saving in summer.\nB: I will set the AC to 28 degrees.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"Japan's 省(しょう)エネ culture is world-leading. クールビズ (Cool Biz) campaign encourages 28-degree AC settings and no neckties in summer. 省(しょう)エネ法(ほう) (Energy Conservation Law) sets efficiency standards. After Fukushima, 節電(せつでん) (electricity saving) became a national effort with planned blackout schedules."},

    {type:"mc", q:"What does 再生可能(さいせいかのう)エネルギー mean?", opts:["Renewable energy","Nuclear energy","Fossil fuel energy","Chemical energy"], ans:"Renewable energy",
     hint:"This term combines 're-birth possible' with 'e...' for sources that naturally replenish."},

    {type:"teach", trg:"排出(はいしゅつ)", src:"emission / discharge", pos:"noun", gender:null,
     note:"Kanji: 排出. 排出(はいしゅつ)量(りょう) = emission volume.\nCO2排出(はいしゅつ) = CO2 emissions.",
     example:"A: 工場(こうじょう)からの排出(はいしゅつ)量(りょう)を計測(けいそく)しています。\nB: 基準(きじゅん)内(ない)ですか？\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: We are measuring emissions from the factory.\nB: Are they within standards?\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"排出(はいしゅつ) combines 排 (expel) and 出 (put out). 排出権(はいしゅつけん) (emission rights) trading is part of Japan's climate policy. 排水(はいすい)基準(きじゅん) (wastewater standards) protect rivers and oceans. Japan's strict 排出(はいしゅつ)規制(きせい) (emission regulations) for vehicles led to the development of hybrid and electric cars."},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable", pos:"adj", gender:null,
     note:"Kanji: 持続可能. SDGs = 持続可能(じぞくかのう)な開発(かいはつ)目標(もくひょう).\n持続可能性(じぞくかのうせい) = sustainability.",
     example:"A: 持続可能(じぞくかのう)な社会(しゃかい)を目指(めざ)しましょう。\nB: SDGsの目標(もくひょう)に取(と)り組(く)んでいます。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us aim for a sustainable society.\nB: We are working on SDG goals.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"持続可能(じぞくかのう) has become ubiquitous in Japanese corporate and government language since the UN SDGs gained traction. SDGsバッジ (colorful wheel pins) are worn by many Japanese businesspeople. 持続可能性(じぞくかのうせい) (sustainability) appears in corporate reports, school curricula, and consumer product marketing."},

    {type:"teach", trg:"生態系(せいたいけい)", src:"ecosystem", pos:"noun", gender:null,
     note:"Kanji: 生態系. 海洋(かいよう)生態系(せいたいけい) = marine ecosystem.\n生態系(せいたいけい)を守(まも)る = to protect ecosystems.",
     example:"A: 開発(かいはつ)が生態系(せいたいけい)に影響(えいきょう)を与(あた)えています。\nB: 環境(かんきょう)アセスメントが必要(ひつよう)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Development is affecting the ecosystem.\nB: Environmental assessment is needed.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"Japan's 生態系(せいたいけい) is remarkably diverse for a small country. Four main islands span subtropical to subarctic zones. Unique species like 日本(にほん)カモシカ and 日本(にほん)ザル thrive. 白神山地(しらかみさんち) (Shirakami Mountains) is a UNESCO site for its pristine ブナ (beech) forest 生態系(せいたいけい)."},

    {type:"teach", trg:"資源(しげん)", src:"resources / natural resources", pos:"noun", gender:null,
     note:"Kanji: 資源. 天然(てんねん)資源(しげん) = natural resources.\n資源(しげん)の無駄遣(むだづか)い = wasting resources.",
     example:"A: 日本(にほん)は資源(しげん)が少(すく)ない国(くに)です。\nB: リサイクルが重要(じゅうよう)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japan is a country with few resources.\nB: Recycling is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan imports over 90% of its energy 資源(しげん) (resources). This vulnerability drives 省(しょう)エネ technology and リサイクル innovation. Japan's 3R policy (リデュース, リユース, リサイクル) is world-leading. 人的(じんてき)資源(しげん) (human resources) is considered Japan's greatest asset, compensating for lack of 天然(てんねん)資源(しげん)."},

    {type:"teach", trg:"開発(かいはつ)", src:"development", pos:"noun", gender:null,
     note:"Kanji: 開発. 持続可能(じぞくかのう)な開発(かいはつ) = sustainable development.\n技術(ぎじゅつ)開発(かいはつ) = technology development.",
     example:"A: 地域(ちいき)開発(かいはつ)と環境(かんきょう)保全(ほぜん)のバランスが大事(だいじ)です。\nB: どちらかだけではだめですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Balance between regional development and environmental conservation is important.\nB: Neither alone is sufficient.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"開発(かいはつ) spans physical (土地(とち)開発(かいはつ), land development), technological (技術(ぎじゅつ)開発(かいはつ), R&D), and human (人材(じんざい)開発(かいはつ), human resource development). Japan's 高度経済成長期(こうどけいざいせいちょうき) (high economic growth period) saw massive 開発(かいはつ) that both modernized and damaged the environment."},

    {type:"fb", s:"温室効果(おんしつこうか)ガスの{1}量(りょう)を削減(さくげん)しなければなりません。\n(We must reduce greenhouse gas emission volume.)", a:"排出(はいしゅつ)", opts:["排出(はいしゅつ)","資源(しげん)","開発(かいはつ)","エネルギー"], sSrc:"We must reduce greenhouse gas emission volume.",
     hint:"This word means releasing or discharging substances into the environment."},

    {type:"teach", trg:"絶滅危惧種(ぜつめつきぐしゅ)", src:"endangered species", pos:"noun", gender:null,
     note:"絶滅(ぜつめつ) (extinction) + 危惧(きぐ) (concern) + 種(しゅ) (species).\nレッドリスト = Red List of endangered species.",
     example:"A: 日本(にほん)には多(おお)くの絶滅危惧種(ぜつめつきぐしゅ)がいます。\nB: 保護(ほご)活動(かつどう)が必要(ひつよう)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: There are many endangered species in Japan.\nB: Conservation activities are needed.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's 絶滅危惧種(ぜつめつきぐしゅ) include トキ (Japanese crested ibis), イリオモテヤマネコ (Iriomote wildcat), and ラッコ (sea otter). The トキ was once extinct in the wild in Japan but has been successfully reintroduced through breeding programs. Japan's レッドデータブック lists over 3,700 threatened species."},

    {type:"teach", trg:"保全(ほぜん)", src:"conservation / preservation", pos:"noun", gender:null,
     note:"Kanji: 保全. 環境(かんきょう)保全(ほぜん) = environmental conservation.\n生態系(せいたいけい)保全(ほぜん) = ecosystem preservation.",
     example:"A: 自然(しぜん)環境(かんきょう)の保全(ほぜん)に取(と)り組(く)んでいます。\nB: 具体的(ぐたいてき)に何(なに)をしていますか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: We are working on natural environment conservation.\nB: What specifically are you doing?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"保全(ほぜん) and 保護(ほご) are related but distinct: 保全(ほぜん) means maintaining the current state, 保護(ほご) means actively protecting from threats. Japanese environmental law uses both precisely. 環境(かんきょう)保全(ほぜん)法(ほう) (Environmental Conservation Law) and 自然(しぜん)公園(こうえん)法(ほう) (Natural Parks Law) form the legal framework."},

    {type:"match", pairs:[{trg:"再生可能(さいせいかのう)",src:"renewable"},{trg:"持続可能(じぞくかのう)",src:"sustainable"},{trg:"省(しょう)エネ",src:"energy conservation"},{trg:"排出(はいしゅつ)",src:"emission"},{trg:"保全(ほぜん)",src:"conservation"}],
     hint:"Match each environmental term with its English meaning."},

    {type:"mc", q:"Why is 省(しょう)エネ culture so strong in Japan?", opts:["Japan produces all its own energy","Japan imports over 90% of its energy resources","Japan has too much energy","It is only a trend since 2020"], ans:"Japan imports over 90% of its energy resources",
     hint:"Resource scarcity drives innovation in efficiency and conservation."},

    {type:"fb", s:"{1}な社会(しゃかい)を目指(めざ)しましょう。\n(Let us aim for a sustainable society.)", a:"持続可能(じぞくかのう)", opts:["持続可能(じぞくかのう)","再生可能(さいせいかのう)","省(しょう)エネ","環境(かんきょう)"], sSrc:"Let us aim for a sustainable society.",
     hint:"This term from the UN SDGs describes something that can be maintained long-term."},

    {type:"mc", q:"What is Japan's carbon neutrality target year?", opts:["2040","2060","2050","2030"], ans:"2050",
     hint:"Japan pledged to achieve net-zero greenhouse gas emissions by this year."}
  ,{type:"match",pairs:[{trg:"太陽光(たいようこう)",src:"solar power / sunlight"},{trg:"原子力(げんしりょく)",src:"nuclear power / atomic energy"},{trg:"温室効果(おんしつこうか)ガス",src:"greenhouse gas"},{trg:"生態系(せいたいけい)",src:"ecosystem"},{trg:"資源(しげん)",src:"resources / natural resources"},{trg:"開発(かいはつ)",src:"development"}]},{type:"match",pairs:[{trg:"絶滅危惧種(ぜつめつきぐしゅ)",src:"endangered species"}]}]
};
export default BATCH8_L1;
