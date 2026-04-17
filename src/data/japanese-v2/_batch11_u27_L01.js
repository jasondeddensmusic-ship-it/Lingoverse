// Batch 11 – Unit 27 (B2.1 Environment): Formal Adverbs & Environmental Terms
const BATCH11_L1 = {
  id:"jav2_u27l_b11_1", title:"かんきょうとけいしき", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんきょうとけいしき",
     desc:"Learn formal adverbs and environmental vocabulary at N2 level. These words are essential for discussing environmental issues and expressing nuanced opinions formally.",
     goals:["Use formal adverbs: かならずしも, あくまでも, いっさい","Discuss environmental topics with appropriate vocabulary","Express nuanced positions on complex issues"]},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Always with negative verb. かならずしも...ない = not necessarily.\nSoftens absolute statements.",
     example:"A: たかいものがかならずしもいいとはかぎりません。\nB: そうですね。やすくてもいいものはあります。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: That's right. There are good things that are cheap too.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"かならずしも (必ずしも) is the intellectual's hedge: it softens absolute claims without fully negating them. かならず (definitely) becomes かならずしも...ない (not necessarily). This nuanced expression is a hallmark of sophisticated Japanese writing and JLPT N2 staple. It shows the speaker considers exceptions."},

    {type:"teach", trg:"あくまでも", src:"to the very end / strictly", pos:"adv", gender:null,
     note:"Emphasizes firmness or limitation.\nあくまでもさんこうです = strictly for reference only.",
     example:"A: これはあくまでもわたしのいけんです。\nB: わかりました。さんこうにします。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This is strictly my opinion.\nB: Understood. I will use it as reference.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"あくまでも (飽くまでも) literally means 'until satiated' (until you can't do more). It emphasizes persistence or limitation: あくまでもたたかう (fight to the very end) or あくまでもかりのけいかく (strictly a tentative plan). This dual use makes it versatile but requires context to interpret correctly."},

    {type:"teach", trg:"いっさい", src:"absolutely / not at all", pos:"adv", gender:null,
     note:"With negative: いっさい...ない = absolutely none.\nStronger than ぜんぜん.",
     example:"A: げんいんについてはいっさいせつめいがありませんでした。\nB: それはもんだいですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: There was absolutely no explanation about the cause.\nB: That is a problem.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"いっさい (一切) is the absolute zero of negation: いっさいしらない (know absolutely nothing), いっさいかんけいない (absolutely no relation). In Buddhism, いっさい means 'all things in existence' (一切衆生 = all living beings). The word carries weight: using it signals zero tolerance or complete absence."},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"ちきゅうおんだんか = global warming.\nおんだんかたいさく = warming countermeasures.",
     example:"A: ちきゅうおんだんかはしんこくなもんだいです。\nB: CO2はいしゅつりょうをへらさなければなりません。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Global warming is a serious problem.\nB: We must reduce CO2 emissions.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"おんだんか (温暖化) literally means 'warm-ification.' Japan is a leader in energy-efficient technology, partly driven by resource scarcity. The 京都議定書 (Kyoto Protocol, 1997) was a landmark international climate agreement named after Kyoto, Japan. Climate change vocabulary is essential for N2 reading passages."},

    {type:"teach", trg:"さいせいかのう", src:"renewable (energy)", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nたいようこう = solar power.",
     example:"A: さいせいかのうエネルギーのわりあいはふえていますか？\nB: はい、とくにたいようこうはつでんがのびています。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Is the share of renewable energy increasing?\nB: Yes, especially solar power generation is growing.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"After the 2011 Fukushima disaster, Japan dramatically shifted energy policy. さいせいかのうエネルギー (再生可能エネルギー) investment surged. Japan set a 2050 carbon neutrality goal. たいようこう (solar), ふうりょく (wind), and すいりょく (hydroelectric) are the main さいせいかのう sources discussed in policy."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"はいしゅつりょう = emission volume.\nCO2のはいしゅつをへらす = reduce CO2 emissions.",
     example:"A: にほんのCO2はいしゅつりょうはへっていますか？\nB: すこしずつへっていますが、まだたりません。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Is Japan's CO2 emission volume decreasing?\nB: It is decreasing little by little, but not enough.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"はいしゅつ (排出) is a key environmental term: はいきガス (exhaust gas), はいしゅつけん (emission credits), ゼロはいしゅつ (zero emissions). Japan's industries use はいしゅつりょうとりひき (emissions trading) as part of climate strategy. The kanji 排 means 'expel' and 出 means 'release.'"},

    {type:"teach", trg:"しげん", src:"resources", pos:"noun", gender:null,
     note:"しぜんしげん = natural resources.\nしげんのゆうこうかつよう = effective use of resources.",
     example:"A: にほんはしぜんしげんがすくないくにです。\nB: だからリサイクルがさかんなのですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Japan is a country with few natural resources.\nB: That's why recycling is active.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japan's しげん (資源) scarcity shaped its economy and culture. With minimal oil, gas, and minerals, Japan became a manufacturing powerhouse through imported しげん. もったいない culture and meticulous recycling stem from resource consciousness. Japan recycles about 84% of PET bottles."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"じぞくかのうなかいはつ = sustainable development (SDGs).\nじぞくかのうせい = sustainability.",
     example:"A: じぞくかのうなしゃかいをめざすべきです。\nB: SDGsのもくひょうをいしきすることがだいじですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: Being conscious of SDG goals is important.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"じぞくかのう (持続可能) entered mainstream Japanese discourse through the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGsへのとりくみ (SDG initiatives). Schools teach じぞくかのうせい as part of the curriculum. The concept aligns with traditional Japanese values of harmony with nature."},

    {type:"teach", trg:"たんに", src:"merely / simply / just", pos:"adv", gender:null,
     note:"Downplays or limits the scope.\nたんに...だけでなく = not merely... but also.",
     example:"A: このもんだいはたんにかんきょうのもんだいではありません。\nB: けいざいやしゃかいにもかんけいしていますね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: This problem is not merely an environmental issue.\nB: It is related to economy and society too.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"たんに (単に) limits scope precisely: たんにうんがよかった (it was merely luck). The pattern たんに...だけでなく (not merely... but also) is a powerful essay structure. JLPT N2 loves this pattern because it tests the ability to understand scope limitations and expansions in arguments."},

    {type:"teach", trg:"かろうじて", src:"barely / narrowly", pos:"adv", gender:null,
     note:"By the slimmest margin. かろうじてまにあった = barely made it.\nImplies difficulty and close call.",
     example:"A: しめきりにかろうじてまにあいました。\nB: ぎりぎりでしたね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I barely made the deadline.\nB: It was very close.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"かろうじて (辛うじて) contains 辛い (painful/barely), conveying that the achievement came with great difficulty. It adds dramatic tension to narratives. The synonym ぎりぎり is more casual and common in speech. Both express the Japanese appreciation for perseverance through extreme difficulty."},

    {type:"teach", trg:"おおむね", src:"generally / for the most part", pos:"adv", gender:null,
     note:"Formal. おおむねさんせいです = I generally agree.\nUsed in reports and summaries.",
     example:"A: けいかくはおおむねじゅんちょうにすすんでいます。\nB: よかったです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The plan is progressing generally smoothly.\nB: That's good.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"おおむね (概ね) is the formal 'mostly/generally.' In business reports: おおむねもくひょうたっせい (goals generally achieved). It acknowledges imperfection while emphasizing overall success. The casual equivalent is だいたい, but おおむね carries weight in professional contexts and official statements."},

    // Quiz steps
    {type:"mc", q:"「かならずしも」はどうつかいますか？",
     opts:["Always with a negative verb to mean 'not necessarily'","With positive verbs to mean 'definitely'","As a greeting","To express certainty"],
     ans:"Always with a negative verb to mean 'not necessarily'",
     hint:"This adverb is A... paired with a n... form. It softens absolute statements by introducing the possibility of exceptions."},

    {type:"fb", s:"ちきゅう{1}はしんこくなもんだいです。",
     a:["おんだんか"],
     opts:["おんだんか","じぞくかのう","さいせいかのう","しげん"],
     hint:"This compound noun means 'warming' of the Earth. It is the central term in climate change discussions.",
     sSrc:"Global warming is a serious problem."},

    {type:"match", pairs:[
      {trg:"あくまでも", src:"strictly / to the end"},
      {trg:"いっさい", src:"absolutely (with negative)"},
      {trg:"たんに", src:"merely / simply"},
      {trg:"かろうじて", src:"barely / narrowly"}
    ]},

    {type:"mc", q:"にほんはなぜリサイクルがさかんですか？",
     opts:["Because of limited natural resources","Because it is legally required only","Because of aesthetic reasons","Because of foreign influence"],
     ans:"Because of limited natural resources",
     hint:"Japan's scarcity of n... しげん has shaped a culture of conservation and careful resource management."},

    {type:"fb", s:"これは{1}わたしのいけんです。",
     a:["あくまでも"],
     opts:["あくまでも","かならずしも","いっさい","たんに"],
     hint:"The speaker emphasizes this is STRICTLY their personal opinion, nothing more. This adverb sets firm boundaries.",
     sSrc:"This is strictly my opinion."},

    {type:"mc", q:"「おおむね」はどんないみですか？",
     opts:["Generally / for the most part","Absolutely / definitely","Never / not at all","Suddenly / unexpectedly"],
     ans:"Generally / for the most part",
     hint:"This formal adverb acknowledges that something is mostly true while leaving room for minor imperfections."}
  ]
};
export default BATCH11_L1;
