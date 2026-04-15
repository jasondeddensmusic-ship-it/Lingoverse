// Japanese V2 Unit 27 — かんきょう (Environment)
// Level: B2.1 — JLPT N2 aligned.
// ちきゅうおんだんか, たいきおせん, リサイクル, ～べき, ～ざるを得ない.

const UNIT_27 = {
  n:27, lang:"ja", srcLang:"en", track:"v2",
  title:"かんきょう", sub:"Environment",
  icon:"🌍", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Environmental Issues ═══
{id:"jav2_u27l1", title:"Environmental Issues", icon:"🌿", xp:15, board:true, steps:[
  {type:"intro", title:"Environmental Issues",
   desc:"Environmental vocabulary is essential for reading Japanese news, understanding public policy debates, and passing JLPT N2. Learn the key terms for global warming, pollution, and recycling, alongside the grammar pattern べき (should/ought to) for expressing opinions.",
   goals:["Use ちきゅうおんだんか, たいきおせん, リサイクル","Apply べき to express moral obligation","Discuss environmental topics with appropriate vocabulary"]},

  {type:"teach", trg:"かんきょう", src:"environment", pos:"noun", gender:null,
   note:"Kanji: 環境. かんきょうもんだい = environmental issue.\nかんきょうほご = environmental protection.",
   example:"A: かんきょうもんだいについてどうおもいますか？\nB: もっとしんけんにかんがえるべきだとおもいます。",
   exampleSrc:"A: What do you think about environmental issues?\nB: I think we should think about them more seriously.",
   funFact:"環境 combines 環 (ring/surround) and 境 (border/boundary). The word literally means 'the surrounding boundaries,' capturing how environment encircles us. Japan's Environmental Agency was upgraded to a full Ministry (環境省) in 2001, reflecting growing concern about pollution and climate change."},

  {type:"teach", trg:"ちきゅうおんだんか", src:"global warming", pos:"noun", gender:null,
   note:"Kanji: 地球温暖化. ちきゅう (earth) + おんだんか (warming).\nA compound of four kanji elements.",
   example:"A: ちきゅうおんだんかのえいきょうはますますしんこくになっています。\nB: たいさくがきゅうむですね。",
   exampleSrc:"A: The effects of global warming are becoming increasingly serious.\nB: Countermeasures are urgently needed.",
   funFact:"地球温暖化 is a four-part compound: 地球 (earth) + 温暖 (warm) + 化 (-ification). Japanese excels at building long compounds from kanji. The Kyoto Protocol (京都議定書, Kyoto giteisho) was adopted in Kyoto in 1997, making Japan historically central to the global warming discussion."},

  {type:"teach", trg:"たいきおせん", src:"air pollution", pos:"noun", gender:null,
   note:"Kanji: 大気汚染. たいき (atmosphere) + おせん (pollution).\nかがくぶっしつによるたいきおせん = air pollution from chemicals.",
   example:"A: このちいきではたいきおせんがもんだいになっています。\nB: こうじょうからのはいきガスがげんいんですか？",
   exampleSrc:"A: Air pollution has become a problem in this area.\nB: Is it caused by exhaust gas from factories?",
   funFact:"Japan experienced devastating pollution in the 1950s-70s. Minamata disease (水俣病) from mercury and Yokkaichi asthma from air pollution were national tragedies. These led to some of the world's strictest environmental laws. The word 公害 (kougai, public harm/pollution) became a defining term of that era."},

  {type:"teach", trg:"〜べき", src:"should / ought to", pos:"part", gender:null,
   note:"Dictionary form + べき (drop る for する verbs: すべき).\nExpresses moral obligation or strong recommendation.",
   example:"A: プラスチックのしようをへらすべきです。\nB: さんせいです。マイバッグをもちましょう。",
   exampleSrc:"A: We should reduce the use of plastic.\nB: I agree. Let's bring our own bags.",
   funFact:"べき comes from classical Japanese べし, an auxiliary expressing obligation. It is stronger than ほうがいい (had better) but less forceful than a direct command. In modern Japanese, べき is common in opinions, editorials, and debates. するべき and すべき are both acceptable, though すべき sounds more formal."},

  {type:"mc", q:"ちきゅうおんだんか breaks down as:", opts:["World + heating + change marker","Sky + pollution + problem","Nature + protection + law","Climate + change + report"], ans:"World + heating + change marker",
   hint:"ちきゅう = the round body we live on, おんだん = warm, 化 = a morpheme meaning transformation."},

  {type:"teach", trg:"リサイクル", src:"recycling", pos:"noun", gender:null,
   note:"Loanword from English 'recycle.' リサイクルする = to recycle.\nリサイクルりつ = recycling rate.",
   example:"A: にほんのリサイクルりつはたかいですか？\nB: はい、ペットボトルのリサイクルりつはやくきゅうじゅうパーセントです。",
   exampleSrc:"A: Is Japan's recycling rate high?\nB: Yes, the PET bottle recycling rate is about 90%.",
   funFact:"Japan's recycling system is famously detailed. Garbage is sorted into burnable, non-burnable, plastic, PET bottles, cans, glass, and more. Some municipalities have over 30 categories. Garbage day rules are strict, and putting trash out on the wrong day is a serious social faux pas in residential areas."},

  {type:"fb", s:"プラスチックのしようをへらす___です。\n(We should reduce the use of plastic.)", a:"べき", opts:["べき","ほう","こと","もの"], sSrc:"We should reduce the use of plastic.",
   hint:"The grammar pattern expressing moral obligation, stronger than 'had better.'"},

  {type:"teach", trg:"はいきガス", src:"exhaust gas / emissions", pos:"noun", gender:null,
   note:"はいき (exhaust/emission) + ガス (gas, loanword).\nKanji: 排気. くるまのはいきガス = car exhaust.",
   example:"A: くるまのはいきガスをへらすひつようがあります。\nB: でんきじどうしゃがふえるといいですね。",
   exampleSrc:"A: We need to reduce car exhaust emissions.\nB: It would be good if electric cars increase.",
   funFact:"排気 uses 排 (expel) and 気 (air/gas). Japan's car emission standards are among the world's strictest, partly because of the country's compact urban areas. The 車検 (shaken, vehicle inspection) system, mandatory every two years, includes emission testing. Old cars that cannot pass are scrapped."},

  {type:"mc", q:"リサイクルりつ means:", opts:["Recycling center","How much waste gets reprocessed, as a number","Recycling day","Recycling bin"], ans:"How much waste gets reprocessed, as a number",
   hint:"りつ (率) is the suffix meaning a numerical proportion or ratio."},

  {type:"match", pairs:[{trg:"かんきょう",src:"environment"},{trg:"ちきゅうおんだんか",src:"global warming"},{trg:"たいきおせん",src:"air pollution"},{trg:"リサイクル",src:"recycling"}]},

  {type:"fb", s:"このちいきでは___がもんだいになっています。\n(Air pollution has become a problem in this area.)", a:"たいきおせん", opts:["たいきおせん","ちきゅうおんだんか","リサイクル","かんきょう"], sSrc:"Air pollution has become a problem in this area.",
   hint:"The compound noun combining 'atmosphere' and 'contamination.'"},

  {type:"match", pairs:[{trg:"〜べき",src:"should/ought to"},{trg:"はいきガス",src:"exhaust gas"},{trg:"リサイクル",src:"recycling"},{trg:"かんきょうもんだい",src:"environmental issue"}]},
]},

// ═══ L2: Obligation & Inevitability ═══
{id:"jav2_u27l2", title:"Obligation & Inevitability", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Obligation & Inevitability",
   desc:"Advanced grammar for expressing things that must be done or cannot be avoided. The pattern ざるを得ない (cannot help but / have no choice but to) is essential for formal writing and JLPT N2. Combined with environmental vocabulary, these patterns let you discuss policy and responsibility.",
   goals:["Use ざるを得ない for unavoidable actions","Combine obligation patterns with environmental topics","Distinguish べき, ざるを得ない, and なければならない"]},

  {type:"teach", trg:"〜ざるを得ない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
   note:"Negative stem + ざるを得ない. する → せざるを得ない.\nExpresses that something is unavoidable despite reluctance.",
   example:"A: かんきょうのためにせいかつスタイルをかえざるをえません。\nB: そうですね。ふべんでもひつようなことですね。",
   exampleSrc:"A: We have no choice but to change our lifestyle for the environment.\nB: That's right. Even if inconvenient, it is necessary.",
   funFact:"ざるを得ない uses classical Japanese: ざる is the old negative form (modern ない) and 得ない means 'cannot obtain.' The literal meaning is 'cannot obtain not doing it,' a double negative meaning 'must do it.' This pattern is formal and literary. する becomes せざるを得ない (not しざるを得ない), an irregular form."},

  {type:"tip", title:"Three Levels of Obligation",
   text:"Japanese has several obligation patterns at different levels:\n\nべき (should): Moral obligation, recommendation.\nもっとリサイクルすべきだ.\n(We should recycle more.)\n\nなければならない (must): Objective necessity.\nCO2をへらさなければならない.\n(We must reduce CO2.)\n\nざるを得ない (have no choice but to): Reluctant necessity.\nこうじょうをへいさせざるをえない.\n(We have no choice but to close the factory.)\n\nべき is about what is right. なければならない is about what is required. ざるを得ない is about what is unavoidable.",
   deepDive:{title:"Classical Roots of ざるを得ない",
    text:"This pattern preserves two classical grammar elements:\n\nざる = classical negative (modern ない). From the old auxiliary ず, attributive form ざる.\n\n得ない = cannot obtain/achieve.\n\nThe combination means 'one cannot achieve the state of not doing X,' which equals 'one must do X.'\n\nFormation:\nGroup 1 verbs: negative stem + ざるを得ない (いかざるをえない)\nGroup 2 verbs: negative stem + ざるを得ない (たべざるをえない)\nする → せざるを得ない (irregular, not しざるを得ない)\nくる → こざるを得ない\n\nThis pattern appears frequently in formal writing, business emails, and news commentary."}},

  {type:"teach", trg:"せいかつスタイル", src:"lifestyle", pos:"noun", gender:null,
   note:"せいかつ (life/living) + スタイル (style, loanword).\nせいかつスタイルをかえる = to change one's lifestyle.",
   example:"A: けんこうてきなせいかつスタイルをこころがけています。\nB: たとえば、どんなことをしていますか？",
   exampleSrc:"A: I try to maintain a healthy lifestyle.\nB: For example, what kind of things do you do?",
   funFact:"Japanese freely combines native words with loanwords. せいかつ (生活, Sino-Japanese) + スタイル (English) is a typical hybrid compound. Other examples: 食べ放題 (all-you-can-eat, native + Sino-Japanese), ケータイ電話 (mobile phone, abbreviated English + Sino-Japanese)."},

  {type:"teach", trg:"しげん", src:"resources / natural resources", pos:"noun", gender:null,
   note:"Kanji: 資源. しぜんしげん = natural resources.\nしげんをたいせつにする = to value resources.",
   example:"A: にほんはしげんがすくないくにです。\nB: だからリサイクルがだいじなんですね。",
   exampleSrc:"A: Japan is a country with few natural resources.\nB: That is why recycling is important.",
   funFact:"資源 uses 資 (resources/capital) and 源 (source/origin). Japan imports nearly all its oil, gas, and minerals. This resource scarcity shaped its history: the pursuit of resources was a driver of expansion in the early 20th century. Today, Japan leads in resource efficiency and recycling technology."},

  {type:"mc", q:"せいかつスタイルをかえざるをえない means:", opts:["We want to change our lifestyle","We should change our lifestyle","We have no choice but to change our lifestyle","We decided to change our lifestyle"], ans:"We have no choice but to change our lifestyle",
   hint:"ざるを得ない expresses that something is unavoidable, even if the speaker is reluctant."},

  {type:"teach", trg:"たいさく", src:"countermeasure / measure", pos:"noun", gender:null,
   note:"Kanji: 対策. たいさくをたてる = to formulate measures.\nぼうさいたいさく = disaster prevention measures.",
   example:"A: ちきゅうおんだんかへのたいさくがきゅうむです。\nB: こくさいてきなきょうりょくがひつようですね。",
   exampleSrc:"A: Countermeasures against global warming are urgently needed.\nB: International cooperation is necessary.",
   funFact:"対策 combines 対 (against/toward) and 策 (plan). Japanese governance loves たいさく. Every problem gets a たいさく committee. Earthquake たいさく, COVID たいさく, heat stroke たいさく. The word implies organized, systematic response rather than ad hoc reactions."},

  {type:"teach", trg:"きゅうむ", src:"urgent task / pressing matter", pos:"noun", gender:null,
   note:"Kanji: 急務. 急 (urgent) + 務 (duty/task).\nFormal word used in policy discussions and editorials.",
   example:"A: かんきょうほごはぜんじんるいのきゅうむです。\nB: ひとりひとりのこうどうがたいせつです。",
   exampleSrc:"A: Environmental protection is an urgent task for all humanity.\nB: Each person's actions are important.",
   funFact:"急務 is a formal word you will encounter in editorials, policy papers, and speeches. It elevates a simple 'urgent' into something that demands action. The 務 kanji (duty) also appears in 事務 (office work), 義務 (obligation), and 公務員 (public servant)."},

  {type:"fb", s:"こうじょうをへいさ___をえません。\n(We have no choice but to close the factory.)", a:"せざる", opts:["せざる","しざる","さざる","すざる"], sSrc:"We have no choice but to close the factory.",
   hint:"する becomes an irregular form in this classical negative pattern. Think: せ + ざる."},

  {type:"mc", q:"Which pattern expresses reluctant, unavoidable obligation?", opts:["べき","たほうがいい","ざるを得ない","ことにする"], ans:"ざるを得ない",
   hint:"This pattern uses classical grammar to convey that the speaker has no alternative."},

  {type:"match", pairs:[{trg:"〜ざるを得ない",src:"have no choice but to"},{trg:"しげん",src:"resources"},{trg:"たいさく",src:"countermeasure"},{trg:"きゅうむ",src:"urgent task"}]},

  {type:"fb", s:"かんきょうほごはぜんじんるいの___です。\n(Environmental protection is an urgent task for all humanity.)", a:"きゅうむ", opts:["きゅうむ","たいさく","もんだい","せいさく"], sSrc:"Environmental protection is an urgent task for all humanity.",
   hint:"The formal noun meaning a pressing duty that demands immediate action."},

  {type:"match", pairs:[{trg:"せいかつスタイル",src:"lifestyle"},{trg:"べき",src:"should"},{trg:"ちきゅうおんだんか",src:"global warming"},{trg:"かんきょうほご",src:"environmental protection"}]},
]},

]};
export default UNIT_27;
