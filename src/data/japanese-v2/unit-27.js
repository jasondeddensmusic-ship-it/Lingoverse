// Japanese V2 Unit 27. 環境(かんきょう) (Environment)
import BATCH11_L1 from './_batch11_u27_L01.js';
import BATCH10_L1 from './_batch10_u27_L01.js';
import BATCH9_L1 from './_batch9_u27_L01.js';
import BATCH7_L1 from './_batch7_u27_L01.js';
import BATCH8_L1 from './_batch8_u27_L01.js';
import BATCH6_L1 from './_batch6_u27_L01.js';
import BATCH5_L02 from './_batch5_u27_L02.js';
import BATCH5_L01 from './_batch5_u27_L01.js';
import BATCH2_L04 from './_batch2_u27_L04.js';
import BATCH2_L03 from './_batch2_u27_L03.js';
import EXP_L3 from './_temp_u27_expand_L01.js';import EXP_L4 from './_temp_u27_expand_L02.js';import EXP_L5 from './_temp_u27_expand_L03.js';
// Level: B2.1. JLPT N2 aligned.
// 地球温暖化, 大気汚染, リサイクル, ～べき, ～ざるを得ない.

const UNIT_27 = {
  n:27, lang:"ja", srcLang:"en", track:"v2",
  title:"環境(かんきょう)", sub:"Environment",
  icon:"🌍", level:"B2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: Environmental Issues ═══
{id:"jav2_u27l1", title:"Environmental Issues", icon:"🌿", xp:15, board:true, steps:[
  {type:"intro", title:"Environmental Issues",
   desc:"Environmental vocabulary is essential for reading Japanese news, understanding public policy debates, and passing JLPT N2. Learn the key terms for global warming, pollution, and recycling, alongside the grammar pattern べき (should/ought to) for expressing opinions.",
   goals:["Use 地球温暖化, 大気汚染, リサイクル","Apply べき to express moral obligation","Discuss environmental topics with appropriate vocabulary"]},

  {type:"teach", trg:"環境(かんきょう)", src:"environment", pos:"noun", gender:null,
   note:"Kanji: 環境. 環境問題(かんきょうもんだい) = environmental issue.\n環境保護(かんきょうほご) = environmental protection.",
   example:"A: 環境問題(かんきょうもんだい)についてどう思(おも)いますか？\nB: もっと真剣(しんけん)に考(かんが)えるべきだと思(おも)います。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: What do you think about environmental issues?\nB: I think we should think about them more seriously.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"環境 combines 環 (ring/surround) and 境 (border/boundary). The word literally means 'the surrounding boundaries,' capturing how environment encircles us. Japan's Environmental Agency was upgraded to a full Ministry (環境省) in 2001, reflecting growing concern about pollution and climate change."},

  {type:"teach", trg:"地球温暖化(ちきゅうおんだんか)", src:"global warming", pos:"noun", gender:null,
   note:"Kanji: 地球温暖化. 地球(ちきゅう) (earth) + 温暖化(おんだんか) (warming).\nA compound of four kanji elements.",
   example:"A: 地球温暖化(ちきゅうおんだんか)の影響(えいきょう)はますます深刻(しんこく)になっています。\nB: 対策(たいさく)が急務(きゅうむ)ですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: The effects of global warming are becoming increasingly serious.\nB: Countermeasures are urgently needed.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"地球温暖化 is a four-part compound: 地球 (earth) + 温暖 (warm) + 化 (-ification). Japanese excels at building long compounds from kanji. The Kyoto Protocol (京都議定書, Kyoto giteisho) was adopted in Kyoto in 1997, making Japan historically central to the global warming discussion."},

  {type:"teach", trg:"大気汚染(たいきおせん)", src:"air pollution", pos:"noun", gender:null,
   note:"Kanji: 大気汚染. 大気(たいき) (atmosphere) + 汚染(おせん) (pollution).\n化学物質(かがくぶっしつ)による大気汚染(たいきおせん) = air pollution from chemicals.",
   example:"A: この地域(ちいき)では大気汚染(たいきおせん)が問題(もんだい)になっています。\nB: 工場(こうじょう)からの排気(はいき)ガスが原因(げんいん)ですか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: Air pollution has become a problem in this area.\nB: Is it caused by exhaust gas from factories?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"Japan experienced devastating pollution in the 1950s-70s. Minamata disease (水俣病) from mercury and Yokkaichi asthma from air pollution were national tragedies. These led to some of the world's strictest environmental laws. The word 公害 (kougai, public harm/pollution) became a defining term of that era."},

  {type:"teach", trg:"〜べき", src:"should / ought to", pos:"part", gender:null,
   note:"Dictionary form + べき (drop る for する verbs: すべき).\nExpresses moral obligation or strong recommendation.",
   example:"A: プラスチックの使用(しよう)を減(へ)らすべきです。\nB: 賛成(さんせい)です。マイバッグを持(も)ちましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: We should reduce the use of plastic.\nB: I agree. Let's bring our own bags.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"べき comes from classical Japanese べし, an auxiliary expressing obligation. It is stronger than ほうがいい (had better) but less forceful than a direct command. In modern Japanese, べき is common in opinions, editorials, and debates. するべき and すべき are both acceptable, though すべき sounds more formal."},

  {type:"mc", q:"地球温暖化(ちきゅうおんだんか) breaks down as:", opts:["World + heating + change marker","Sky + pollution + problem","Nature + protection + law","Climate + change + report"], ans:"World + heating + change marker",
   hint:"地球(ちきゅう) = the round body we live on, 温暖(おんだん) = warm, 化 = a morpheme meaning transformation."},

  {type:"teach", trg:"リサイクル", src:"recycling", pos:"noun", gender:null,
   note:"Loanword from English 'recycle.' リサイクルする = to recycle.\nリサイクル率(りつ) = recycling rate.",
   example:"A: 日本(にほん)のリサイクル率(りつ)は高(たか)いですか？\nB: はい、ペットボトルのリサイクル率(りつ)は約(やく)九十(きゅうじゅう)パーセントです。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: Is Japan's recycling rate high?\nB: Yes, the PET bottle recycling rate is about 90%.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"Japan's recycling system is famously detailed. Garbage is sorted into burnable, non-burnable, plastic, PET bottles, cans, glass, and more. Some municipalities have over 30 categories. Garbage day rules are strict, and putting trash out on the wrong day is a serious social faux pas in residential areas."},

  {type:"fb", s:"プラスチックの使用(しよう)を減(へ)らす{1}です。\n(We should reduce the use of plastic.)", a:"べき", opts:["べき","ほう","こと","もの"], sSrc:"We should reduce the use of plastic.",
   hint:"The grammar pattern expressing moral obligation, stronger than 'had better.'"},

  {type:"teach", trg:"排気(はいき)ガス", src:"exhaust gas / emissions", pos:"noun", gender:null,
   note:"排気(はいき) (exhaust/emission) + ガス (gas, loanword).\nKanji: 排気. 車(くるま)の排気(はいき)ガス = car exhaust.",
   example:"A: 車(くるま)の排気(はいき)ガスを減(へ)らす必要(ひつよう)があります。\nB: 電気自動車(でんきじどうしゃ)が増(ふ)えるといいですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: We need to reduce car exhaust emissions.\nB: It would be good if electric cars increase.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"排気 uses 排 (expel) and 気 (air/gas). Japan's car emission standards are among the world's strictest, partly because of the country's compact urban areas. The 車検 (shaken, vehicle inspection) system, mandatory every two years, includes emission testing. Old cars that cannot pass are scrapped."},

  {type:"mc", q:"リサイクル率(りつ) means:", opts:["Recycling center","How much waste gets reprocessed, as a number","Recycling day","Recycling bin"], ans:"How much waste gets reprocessed, as a number",
   hint:"率(りつ) (率) is the suffix meaning a numerical proportion or ratio."},

  {type:"match", pairs:[{trg:"環境(かんきょう)",src:"environment"},{trg:"地球温暖化(ちきゅうおんだんか)",src:"global warming"},{trg:"大気汚染(たいきおせん)",src:"air pollution"},{trg:"リサイクル",src:"recycling"}]},

  {type:"fb", s:"この地域(ちいき)では{1}が問題(もんだい)になっています。\n(Air pollution has become a problem in this area.)", a:"大気汚染(たいきおせん)", opts:["大気汚染(たいきおせん)","地球温暖化(ちきゅうおんだんか)","リサイクル","環境(かんきょう)"], sSrc:"Air pollution has become a problem in this area.",
   hint:"The compound noun combining 'atmosphere' and 'contamination.'"},

  {type:"match", pairs:[{trg:"〜べき",src:"should/ought to"},{trg:"排気(はいき)ガス",src:"exhaust gas"},{trg:"リサイクル",src:"recycling"},{trg:"環境問題(かんきょうもんだい)",src:"environmental issue"}]},
]},

// ═══ L2: Obligation & Inevitability ═══
{id:"jav2_u27l2", title:"Obligation & Inevitability", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Obligation & Inevitability",
   desc:"Advanced grammar for expressing things that must be done or cannot be avoided. The pattern ざるを得ない (cannot help but / have no choice but to) is essential for formal writing and JLPT N2. Combined with environmental vocabulary, these patterns let you discuss policy and responsibility.",
   goals:["Use ざるを得ない for unavoidable actions","Combine obligation patterns with environmental topics","Distinguish べき, ざるを得ない, and なければならない"]},

  {type:"teach", trg:"〜ざるを得(え)ない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
   note:"Negative stem + ざるを得(え)ない. する → せざるを得(え)ない.\nExpresses that something is unavoidable despite reluctance.",
   example:"A: 環境(かんきょう)のために生活(せいかつ)スタイルを変(か)えざるを得(え)ません。\nB: そうですね。不便(ふべん)でも必要(ひつよう)なことですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: We have no choice but to change our lifestyle for the environment.\nB: That's right. Even if inconvenient, it is necessary.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"ざるを得ない uses classical Japanese: ざる is the old negative form (modern ない) and 得ない means 'cannot obtain.' The literal meaning is 'cannot obtain not doing it,' a double negative meaning 'must do it.' This pattern is formal and literary. する becomes せざるを得ない (not しざるを得ない), an irregular form."},

  {type:"tip", title:"Three Levels of Obligation",
   text:"Japanese has several obligation patterns at different levels:\n\nべき (should): Moral obligation, recommendation.\nもっとリサイクルすべきだ.\n(We should recycle more.)\n\nなければならない (must): Objective necessity.\nCO2を減(へ)らさなければならない.\n(We must reduce CO2.)\n\nざるを得(え)ない (have no choice but to): Reluctant necessity.\n工場(こうじょう)を閉鎖(へいさ)せざるを得(え)ない.\n(We have no choice but to close the factory.)\n\nべき is about what is right. なければならない is about what is required. ざるを得(え)ない is about what is unavoidable.",
   deepDive:{title:"Classical Roots of ざるを得ない",
    text:"This pattern preserves two classical grammar elements:\n\nざる = classical negative (modern ない). From the old auxiliary ず, attributive form ざる.\n\n得(え)ない = cannot obtain/achieve.\n\nThe combination means 'one cannot achieve the state of not doing X,' which equals 'one must do X.'\n\nFormation:\nGroup 1 verbs: negative stem + ざるを得(え)ない (行(い)かざるを得(え)ない)\nGroup 2 verbs: negative stem + ざるを得(え)ない (食(た)べざるを得(え)ない)\nする → せざるを得(え)ない (irregular, not しざるを得(え)ない)\nくる → こざるを得(え)ない\n\nThis pattern appears frequently in formal writing, business emails, and news commentary."}},

  {type:"teach", trg:"生活(せいかつ)スタイル", src:"lifestyle", pos:"noun", gender:null,
   note:"生活(せいかつ) (life/living) + スタイル (style, loanword).\n生活(せいかつ)スタイルを変(か)える = to change one's lifestyle.",
   example:"A: 健康的(けんこうてき)な生活(せいかつ)スタイルを心(こころ)がけています。\nB: 例(たと)えば、どんなことをしていますか？\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: I try to maintain a healthy lifestyle.\nB: For example, what kind of things do you do?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"Japanese freely combines native words with loanwords. 生活(せいかつ) (生活, Sino-Japanese) + スタイル (English) is a typical hybrid compound. Other examples: 食(た)べ放題(ほうだい) (all-you-can-eat, native + Sino-Japanese), ケータイ電話(でんわ) (mobile phone, abbreviated English + Sino-Japanese)."},

  {type:"teach", trg:"資源(しげん)", src:"resources / natural resources", pos:"noun", gender:null,
   note:"Kanji: 資源. 自然資源(しぜんしげん) = natural resources.\n資源(しげん)を大切(たいせつ)にする = to value resources.",
   example:"A: 日本(にほん)は資源(しげん)が少(すく)ない国(くに)です。\nB: だからリサイクルが大事(だいじ)なんですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
   exampleSrc:"A: Japan is a country with few natural resources.\nB: That is why recycling is important.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
   funFact:"資源 uses 資 (resources/capital) and 源 (source/origin). Japan imports nearly all its oil, gas, and minerals. This resource scarcity shaped its history: the pursuit of resources was a driver of expansion in the early 20th century. Today, Japan leads in resource efficiency and recycling technology."},

  {type:"mc", q:"生活(せいかつ)スタイルを変(か)えざるを得(え)ない means:", opts:["We have no choice but to change our lifestyle","We should change our lifestyle","We want to change our lifestyle","We decided to change our lifestyle"], ans:"We have no choice but to change our lifestyle",
   hint:"ざるを得(え)ない expresses that something is unavoidable, even if the speaker is reluctant."},

  {type:"teach", trg:"対策(たいさく)", src:"countermeasure / measure", pos:"noun", gender:null,
   note:"Kanji: 対策. 対策(たいさく)を立(た)てる = to formulate measures.\n防災対策(ぼうさいたいさく) = disaster prevention measures.",
   example:"A: 地球温暖化(ちきゅうおんだんか)への対策(たいさく)が急務(きゅうむ)です。\nB: 国際的(こくさいてき)な協力(きょうりょく)が必要(ひつよう)ですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
   exampleSrc:"A: Countermeasures against global warming are urgently needed.\nB: International cooperation is necessary.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
   funFact:"対策 combines 対 (against/toward) and 策 (plan). Japanese governance loves 対策(たいさく). Every problem gets a 対策(たいさく) committee. Earthquake 対策(たいさく), COVID 対策(たいさく), heat stroke 対策(たいさく). The word implies organized, systematic response rather than ad hoc reactions."},

  {type:"teach", trg:"急務(きゅうむ)", src:"urgent task / pressing matter", pos:"noun", gender:null,
   note:"Kanji: 急務. 急 (urgent) + 務 (duty/task).\nFormal word used in policy discussions and editorials.",
   example:"A: 環境保護(かんきょうほご)は全人類(ぜんじんるい)の急務(きゅうむ)です。\nB: 一人一人(ひとりひとり)の行動(こうどう)が大切(たいせつ)です。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
   exampleSrc:"A: Environmental protection is an urgent task for all humanity.\nB: Each person's actions are important.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
   funFact:"急務 is a formal word you will encounter in editorials, policy papers, and speeches. It elevates a simple 'urgent' into something that demands action. The 務 kanji (duty) also appears in 事務 (office work), 義務 (obligation), and 公務員 (public servant)."},

  {type:"fb", s:"工場(こうじょう)を閉鎖(へいさ){1}を得(え)ません。\n(We have no choice but to close the factory.)", a:"せざる", opts:["せざる","しざる","さざる","すざる"], sSrc:"We have no choice but to close the factory.",
   hint:"する becomes an irregular form in this classical negative pattern. Think: せ + ざる."},

  {type:"mc", q:"Which pattern expresses reluctant, unavoidable obligation?", opts:["べき","ざるを得(え)ない","たほうがいい","ことにする"], ans:"ざるを得(え)ない",
   hint:"This pattern uses classical grammar to convey that the speaker has no alternative."},

  {type:"match", pairs:[{trg:"〜ざるを得(え)ない",src:"have no choice but to"},{trg:"資源(しげん)",src:"resources"},{trg:"対策(たいさく)",src:"countermeasure"},{trg:"急務(きゅうむ)",src:"urgent task"}]},

  {type:"fb", s:"環境保護(かんきょうほご)は全人類(ぜんじんるい)の{1}です。\n(Environmental protection is an urgent task for all humanity.)", a:"急務(きゅうむ)", opts:["急務(きゅうむ)","対策(たいさく)","問題(もんだい)","政策(せいさく)"], sSrc:"Environmental protection is an urgent task for all humanity.",
   hint:"The formal noun meaning a pressing duty that demands immediate action."},

  {type:"match", pairs:[{trg:"生活(せいかつ)スタイル",src:"lifestyle"},{trg:"べき",src:"should"},{trg:"地球温暖化(ちきゅうおんだんか)",src:"global warming"},{trg:"環境保護(かんきょうほご)",src:"environmental protection"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_27;
