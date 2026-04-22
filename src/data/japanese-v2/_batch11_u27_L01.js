// Batch 11 – Unit 27 (B2.1 Environment): Formal Adverbs & Environmental Terms
const BATCH11_L1 = {
  id:"jav2_u27l_b11_1", title:"環境(かんきょう)と形式(けいしき)", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"環境(かんきょう)と形式(けいしき)",
     desc:"Learn formal adverbs and environmental vocabulary at N2 level. These words are essential for discussing environmental issues and expressing nuanced opinions formally.",
     goals:["Use formal adverbs: かならずしも, あくまでも, いっさい","Discuss environmental topics with appropriate vocabulary","Express nuanced positions on complex issues"]},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Always with negative verb. かならずしも...ない = not necessarily.\nSoftens absolute statements.",
     example:"A: 高(たか)いものがかならずしも良(よ)いとはかぎりません。\nB: そうですね。安(やす)くても良(よ)いものはあります。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: That's right. There are good things that are cheap too.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"かならずしも (必(かなら)ずしも) is the intellectual's hedge: it softens absolute claims without fully negating them. かならず (definitely) becomes かならずしも...ない (not necessarily). This nuanced expression is a hallmark of sophisticated Japanese writing and JLPT N2 staple. It shows the speaker considers exceptions."},

    {type:"teach", trg:"あくまでも", src:"to the very end / strictly", pos:"adv", gender:null,
     note:"Emphasizes firmness or limitation.\nあくまでも参考(さんこう)です = strictly for reference only.",
     example:"A: これはあくまでも私(わたし)の意見(いけん)です。\nB: 分(わ)かりました。参考(さんこう)にします。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This is strictly my opinion.\nB: Understood. I will use it as reference.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"あくまでも (飽(あ)くまでも) literally means 'until satiated' (until you can't do more). It emphasizes persistence or limitation: あくまでも戦(たたか)う (fight to the very end) or あくまでも仮(かり)の計画(けいかく) (strictly a tentative plan). This dual use makes it versatile but requires context to interpret correctly."},

    {type:"teach", trg:"いっさい", src:"absolutely / not at all", pos:"adv", gender:null,
     note:"With negative: いっさい...ない = absolutely none.\nStronger than ぜんぜん.",
     example:"A: 原因(げんいん)についてはいっさい説明(せつめい)がありませんでした。\nB: それは問題(もんだい)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: There was absolutely no explanation about the cause.\nB: That is a problem.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"いっさい (一切(いっさい)) is the absolute zero of negation: いっさい知(し)らない (know absolutely nothing), いっさい関係(かんけい)ない (absolutely no relation). In Buddhism, いっさい means 'all things in existence' (一切衆生(いっさいしゅじょう) = all living beings). The word carries weight: using it signals zero tolerance or complete absence."},

    {type:"teach", trg:"温暖化(おんだんか)", src:"global warming", pos:"noun", gender:null,
     note:"地球(ちきゅう)温暖化(おんだんか) = global warming.\n温暖化(おんだんか)対策(たいさく) = warming countermeasures.",
     example:"A: 地球(ちきゅう)温暖化(おんだんか)は深刻(しんこく)な問題(もんだい)です。\nB: CO2排出量(はいしゅつりょう)を減(へ)らさなければなりません。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Global warming is a serious problem.\nB: We must reduce CO2 emissions.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"温暖化(おんだんか) literally means 'warm-ification.' Japan is a leader in energy-efficient technology, partly driven by resource scarcity. The 京都議定書(きょうとぎていしょ) (Kyoto Protocol, 1997) was a landmark international climate agreement named after Kyoto, Japan. Climate change vocabulary is essential for N2 reading passages."},

    {type:"teach", trg:"再生可能(さいせいかのう)", src:"renewable (energy)", pos:"adj", gender:null,
     note:"再生可能(さいせいかのう)エネルギー = renewable energy.\n太陽光(たいようこう) = solar power.",
     example:"A: 再生可能(さいせいかのう)エネルギーの割合(わりあい)は増(ふ)えていますか？\nB: はい、特(とく)に太陽光発電(たいようこうはつでん)が伸(の)びています。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Is the share of renewable energy increasing?\nB: Yes, especially solar power generation is growing.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"After the 2011 Fukushima disaster, Japan dramatically shifted energy policy. 再生可能(さいせいかのう)エネルギー investment surged. Japan set a 2050 carbon neutrality goal. 太陽光(たいようこう) (solar), 風力(ふうりょく) (wind), and 水力(すいりょく) (hydroelectric) are the main 再生可能(さいせいかのう) sources discussed in policy."},

    {type:"teach", trg:"排出(はいしゅつ)", src:"emission / discharge", pos:"noun", gender:null,
     note:"排出量(はいしゅつりょう) = emission volume.\nCO2の排出(はいしゅつ)を減(へ)らす = reduce CO2 emissions.",
     example:"A: 日本(にほん)のCO2排出量(はいしゅつりょう)は減(へ)っていますか？\nB: 少(すこ)しずつ減(へ)っていますが、まだ足(た)りません。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Is Japan's CO2 emission volume decreasing?\nB: It is decreasing little by little, but not enough.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"排出(はいしゅつ) is a key environmental term: 排気(はいき)ガス (exhaust gas), 排出権(はいしゅつけん) (emission credits), ゼロ排出(はいしゅつ) (zero emissions). Japan's industries use 排出量取引(はいしゅつりょうとりひき) (emissions trading) as part of climate strategy. The kanji 排(はい) means 'expel' and 出(しゅつ) means 'release.'"},

    {type:"teach", trg:"資源(しげん)", src:"resources", pos:"noun", gender:null,
     note:"自然資源(しぜんしげん) = natural resources.\n資源(しげん)の有効活用(ゆうこうかつよう) = effective use of resources.",
     example:"A: 日本(にほん)は自然資源(しぜんしげん)が少(すく)ない国(くに)です。\nB: だからリサイクルが盛(さか)んなのですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japan is a country with few natural resources.\nB: That's why recycling is active.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan's 資源(しげん) scarcity shaped its economy and culture. With minimal oil, gas, and minerals, Japan became a manufacturing powerhouse through imported 資源(しげん). もったいない culture and meticulous recycling stem from resource consciousness. Japan recycles about 84% of PET bottles."},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable", pos:"adj", gender:null,
     note:"持続可能(じぞくかのう)な開発(かいはつ) = sustainable development (SDGs).\n持続可能性(じぞくかのうせい) = sustainability.",
     example:"A: 持続可能(じぞくかのう)な社会(しゃかい)を目指(めざ)すべきです。\nB: SDGsの目標(もくひょう)を意識(いしき)することが大事(だいじ)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: Being conscious of SDG goals is important.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"持続可能(じぞくかのう) entered mainstream Japanese discourse through the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGsへの取(と)り組(く)み (SDG initiatives). Schools teach 持続可能性(じぞくかのうせい) as part of the curriculum. The concept aligns with traditional Japanese values of harmony with nature."},

    {type:"teach", trg:"たんに", src:"merely / simply / just", pos:"adv", gender:null,
     note:"Downplays or limits the scope.\nたんに...だけでなく = not merely... but also.",
     example:"A: この問題(もんだい)はたんに環境(かんきょう)の問題(もんだい)ではありません。\nB: 経済(けいざい)や社会(しゃかい)にも関係(かんけい)していますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: This problem is not merely an environmental issue.\nB: It is related to economy and society too.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"たんに (単(たん)に) limits scope precisely: たんに運(うん)が良(よ)かった (it was merely luck). The pattern たんに...だけでなく (not merely... but also) is a powerful essay structure. JLPT N2 loves this pattern because it tests the ability to understand scope limitations and expansions in arguments."},

    {type:"teach", trg:"かろうじて", src:"barely / narrowly", pos:"adv", gender:null,
     note:"By the slimmest margin. かろうじて間(ま)に合(あ)った = barely made it.\nImplies difficulty and close call.",
     example:"A: 締(し)め切(き)りにかろうじて間(ま)に合(あ)いました。\nB: ぎりぎりでしたね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I barely made the deadline.\nB: It was very close.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"かろうじて (辛(から)うじて) contains 辛(から)い (painful/barely), conveying that the achievement came with great difficulty. It adds dramatic tension to narratives. The synonym ぎりぎり is more casual and common in speech. Both express the Japanese appreciation for perseverance through extreme difficulty."},

    {type:"teach", trg:"おおむね", src:"generally / for the most part", pos:"adv", gender:null,
     note:"Formal. おおむね賛成(さんせい)です = I generally agree.\nUsed in reports and summaries.",
     example:"A: 計画(けいかく)はおおむね順調(じゅんちょう)に進(すす)んでいます。\nB: よかったです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The plan is progressing generally smoothly.\nB: That's good.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"おおむね (概(おおむ)ね) is the formal 'mostly/generally.' In business reports: おおむね目標達成(もくひょうたっせい) (goals generally achieved). It acknowledges imperfection while emphasizing overall success. The casual equivalent はだいたい, but おおむね carries weight in professional contexts and official statements."},

    // Quiz steps
    {type:"mc", q:"「かならずしも」はどう使(つか)いますか？",
     opts:["Always with a negative verb to mean 'not necessarily'","With positive verbs to mean 'definitely'","As a greeting","To express certainty"],
     ans:"Always with a negative verb to mean 'not necessarily'",
     hint:"This adverb weakens absolute claims. It requires a specific grammatical polarity to make sense."},

    {type:"fb", s:"地球(ちきゅう){1}は深刻(しんこく)な問題(もんだい)です。",
     a:["温暖化(おんだんか)"],
     opts:["温暖化(おんだんか)","持続可能(じぞくかのう)","再生可能(さいせいかのう)","資源(しげん)"],
     hint:"This compound noun means 'warming' of the Earth. It is the central term in climate change discussions.",
     sSrc:"Global warming is a serious problem."},

    {type:"match", pairs:[
      {trg:"あくまでも", src:"strictly / to the end"},
      {trg:"いっさい", src:"absolutely (with negative)"},
      {trg:"たんに", src:"merely / simply"},
      {trg:"かろうじて", src:"barely / narrowly"}
    ]},

    {type:"mc", q:"日本(にほん)はなぜリサイクルが盛(さか)んですか？",
     opts:["Because of foreign influence","Because of limited natural resources","Because it is legally required only","Because of aesthetic reasons"],
     ans:"Because of limited natural resources",
     hint:"Japan's scarcity of n... 資源(しげん) has shaped a culture of conservation and careful resource management."},

    {type:"fb", s:"これは{1}私(わたし)の意見(いけん)です。",
     a:["あくまでも"],
     opts:["あくまでも","かならずしも","いっさい","たんに"],
     hint:"The speaker emphasizes this is STRICTLY their personal opinion, nothing more. This adverb sets firm boundaries.",
     sSrc:"This is strictly my opinion."},

    {type:"mc", q:"「おおむね」はどんな意味(いみ)ですか？",
     opts:["Never / not at all","Suddenly / unexpectedly","Generally / for the most part","Absolutely / definitely"],
     ans:"Generally / for the most part",
     hint:"This formal adverb acknowledges that something is mostly true while leaving room for minor imperfections."}
  ,{type:"match",pairs:[{trg:"かならずしも",src:"not necessarily / not always"},{trg:"再生可能(さいせいかのう)",src:"renewable (energy)"},{trg:"排出(はいしゅつ)",src:"emission / discharge"},{trg:"資源(しげん)",src:"resources"},{trg:"持続可能(じぞくかのう)",src:"sustainable"},{trg:"おおむね",src:"generally / for the most part"}]}]
};
export default BATCH11_L1;
