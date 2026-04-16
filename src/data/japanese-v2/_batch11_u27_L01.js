// Batch 11 – Unit 27 (B2.1 Environment): Formal Adverbs & Environmental Terms
const BATCH11_L1 = {
  id:"jav2_u27l_b11_1", title:"かんきょうとけいしき", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんきょうとけいしき",
     desc:"Learn formal adverbs and environmental vocabulary at N2 level. These words are essential for discussing environmental issues and expressing nuanced opinions formally.",
     goals:["Use formal adverbs: かならずしも, あくまでも, いっさい","Discuss environmental topics with appropriate vocabulary","Express nuanced positions on complex issues"]},

    {type:"teach", trg:"かならずしも", src:"not necessarily / not always", pos:"adv", gender:null,
     note:"Always with negative verb. かならずしも...ない = not necessarily.\nSoftens absolute statements.",
     example:"A: たかいものがかならずしもいいとはかぎりません。\nB: そうですね。やすくてもいいものはあります。",
     exampleSrc:"A: Expensive things are not necessarily good.\nB: That's right. There are good things that are cheap too.",
     funFact:"かならずしも (必ずしも) is the intellectual's hedge: it softens absolute claims without fully negating them. かならず (definitely) becomes かならずしも...ない (not necessarily). This nuanced expression is a hallmark of sophisticated Japanese writing and JLPT N2 staple. It shows the speaker considers exceptions."},

    {type:"teach", trg:"あくまでも", src:"to the very end / strictly", pos:"adv", gender:null,
     note:"Emphasizes firmness or limitation.\nあくまでもさんこうです = strictly for reference only.",
     example:"A: これはあくまでもわたしのいけんです。\nB: わかりました。さんこうにします。",
     exampleSrc:"A: This is strictly my opinion.\nB: Understood. I will use it as reference.",
     funFact:"あくまでも (飽くまでも) literally means 'until satiated' (until you can't do more). It emphasizes persistence or limitation: あくまでもたたかう (fight to the very end) or あくまでもかりのけいかく (strictly a tentative plan). This dual use makes it versatile but requires context to interpret correctly."},

    {type:"teach", trg:"いっさい", src:"absolutely / not at all", pos:"adv", gender:null,
     note:"With negative: いっさい...ない = absolutely none.\nStronger than ぜんぜん.",
     example:"A: げんいんについてはいっさいせつめいがありませんでした。\nB: それはもんだいですね。",
     exampleSrc:"A: There was absolutely no explanation about the cause.\nB: That is a problem.",
     funFact:"いっさい (一切) is the absolute zero of negation: いっさいしらない (know absolutely nothing), いっさいかんけいない (absolutely no relation). In Buddhism, いっさい means 'all things in existence' (一切衆生 = all living beings). The word carries weight: using it signals zero tolerance or complete absence."},

    {type:"teach", trg:"おんだんか", src:"global warming", pos:"noun", gender:null,
     note:"ちきゅうおんだんか = global warming.\nおんだんかたいさく = warming countermeasures.",
     example:"A: ちきゅうおんだんかはしんこくなもんだいです。\nB: CO2はいしゅつりょうをへらさなければなりません。",
     exampleSrc:"A: Global warming is a serious problem.\nB: We must reduce CO2 emissions.",
     funFact:"おんだんか (温暖化) literally means 'warm-ification.' Japan is a leader in energy-efficient technology, partly driven by resource scarcity. The 京都議定書 (Kyoto Protocol, 1997) was a landmark international climate agreement named after Kyoto, Japan. Climate change vocabulary is essential for N2 reading passages."},

    {type:"teach", trg:"さいせいかのう", src:"renewable (energy)", pos:"adj", gender:null,
     note:"さいせいかのうエネルギー = renewable energy.\nたいようこう = solar power.",
     example:"A: さいせいかのうエネルギーのわりあいはふえていますか？\nB: はい、とくにたいようこうはつでんがのびています。",
     exampleSrc:"A: Is the share of renewable energy increasing?\nB: Yes, especially solar power generation is growing.",
     funFact:"After the 2011 Fukushima disaster, Japan dramatically shifted energy policy. さいせいかのうエネルギー (再生可能エネルギー) investment surged. Japan set a 2050 carbon neutrality goal. たいようこう (solar), ふうりょく (wind), and すいりょく (hydroelectric) are the main さいせいかのう sources discussed in policy."},

    {type:"teach", trg:"はいしゅつ", src:"emission / discharge", pos:"noun", gender:null,
     note:"はいしゅつりょう = emission volume.\nCO2のはいしゅつをへらす = reduce CO2 emissions.",
     example:"A: にほんのCO2はいしゅつりょうはへっていますか？\nB: すこしずつへっていますが、まだたりません。",
     exampleSrc:"A: Is Japan's CO2 emission volume decreasing?\nB: It is decreasing little by little, but not enough.",
     funFact:"はいしゅつ (排出) is a key environmental term: はいきガス (exhaust gas), はいしゅつけん (emission credits), ゼロはいしゅつ (zero emissions). Japan's industries use はいしゅつりょうとりひき (emissions trading) as part of climate strategy. The kanji 排 means 'expel' and 出 means 'release.'"},

    {type:"teach", trg:"しげん", src:"resources", pos:"noun", gender:null,
     note:"しぜんしげん = natural resources.\nしげんのゆうこうかつよう = effective use of resources.",
     example:"A: にほんはしぜんしげんがすくないくにです。\nB: だからリサイクルがさかんなのですね。",
     exampleSrc:"A: Japan is a country with few natural resources.\nB: That's why recycling is active.",
     funFact:"Japan's しげん (資源) scarcity shaped its economy and culture. With minimal oil, gas, and minerals, Japan became a manufacturing powerhouse through imported しげん. もったいない culture and meticulous recycling stem from resource consciousness. Japan recycles about 84% of PET bottles."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"じぞくかのうなかいはつ = sustainable development (SDGs).\nじぞくかのうせい = sustainability.",
     example:"A: じぞくかのうなしゃかいをめざすべきです。\nB: SDGsのもくひょうをいしきすることがだいじですね。",
     exampleSrc:"A: We should aim for a sustainable society.\nB: Being conscious of SDG goals is important.",
     funFact:"じぞくかのう (持続可能) entered mainstream Japanese discourse through the SDGs (Sustainable Development Goals). Japanese companies actively promote SDGsへのとりくみ (SDG initiatives). Schools teach じぞくかのうせい as part of the curriculum. The concept aligns with traditional Japanese values of harmony with nature."},

    {type:"teach", trg:"たんに", src:"merely / simply / just", pos:"adv", gender:null,
     note:"Downplays or limits the scope.\nたんに...だけでなく = not merely... but also.",
     example:"A: このもんだいはたんにかんきょうのもんだいではありません。\nB: けいざいやしゃかいにもかんけいしていますね。",
     exampleSrc:"A: This problem is not merely an environmental issue.\nB: It is related to economy and society too.",
     funFact:"たんに (単に) limits scope precisely: たんにうんがよかった (it was merely luck). The pattern たんに...だけでなく (not merely... but also) is a powerful essay structure. JLPT N2 loves this pattern because it tests the ability to understand scope limitations and expansions in arguments."},

    {type:"teach", trg:"かろうじて", src:"barely / narrowly", pos:"adv", gender:null,
     note:"By the slimmest margin. かろうじてまにあった = barely made it.\nImplies difficulty and close call.",
     example:"A: しめきりにかろうじてまにあいました。\nB: ぎりぎりでしたね。",
     exampleSrc:"A: I barely made the deadline.\nB: It was very close.",
     funFact:"かろうじて (辛うじて) contains 辛い (painful/barely), conveying that the achievement came with great difficulty. It adds dramatic tension to narratives. The synonym ぎりぎり is more casual and common in speech. Both express the Japanese appreciation for perseverance through extreme difficulty."},

    {type:"teach", trg:"おおむね", src:"generally / for the most part", pos:"adv", gender:null,
     note:"Formal. おおむねさんせいです = I generally agree.\nUsed in reports and summaries.",
     example:"A: けいかくはおおむねじゅんちょうにすすんでいます。\nB: よかったです。",
     exampleSrc:"A: The plan is progressing generally smoothly.\nB: That's good.",
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
