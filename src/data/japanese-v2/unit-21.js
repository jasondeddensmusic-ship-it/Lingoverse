// Japanese V2 Unit 21. 社会(しゃかい) (Society & News)
import BATCH11_L1 from './_batch11_u21_L01.js';
import BATCH10_L1 from './_batch10_u21_L01.js';
import BATCH9_L1 from './_batch9_u21_L01.js';
import BATCH7_L1 from './_batch7_u21_L01.js';
import BATCH8_L1 from './_batch8_u21_L01.js';
import BATCH6_L1 from './_batch6_u21_L01.js';
import BATCH5_L02 from './_batch5_u21_L02.js';
import BATCH5_L01 from './_batch5_u21_L01.js';
import BATCH2_L02 from './_batch2_u21_L02.js';
import BATCH2_L01 from './_batch2_u21_L01.js';
import EXP_L3 from './_temp_u21_expand_L01.js';import EXP_L4 from './_temp_u21_expand_L02.js';import EXP_L5 from './_temp_u21_expand_L03.js';
// Level: B1.2. JLPT N3 aligned.
// News vocabulary, opinion expressions, society topics.

const UNIT_21 = {
  n:21, lang:"ja", srcLang:"en", track:"v2",
  title:"社会(しゃかい)", sub:"Society & News",
  icon:"📰", level:"B1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: ニュースの言葉(ことば) (News Vocabulary) ═══
{id:"jav2_u21l1", title:"ニュースの言葉(ことば)", icon:"📺", xp:15, board:true, steps:[
  {type:"intro", title:"ニュースの言葉(ことば)",
   desc:"Build your vocabulary for understanding Japanese news and current events. Learn words for incidents, accidents, disasters, elections, and the economy. These words appear daily in newspapers, TV news, and online media.",
   goals:["Learn core news vocabulary: incidents, accidents, disasters","Understand election and economy terms","Read and discuss simple news topics"]},

  {type:"teach", trg:"ニュース", src:"news", pos:"noun", gender:null,
   note:"From English 'news.' Used for TV news, online news, any news.\nニュースを見(み)る = to watch the news.",
   example:"A: 今日(きょう)のニュースを見(み)ましたか？\nB: はい、大(おお)きな地震(じしん)があったそうです。",
   exampleSrc:"A: Did you watch today's news?\nB: Yes, apparently there was a big earthquake.",
   funFact:"Japanese news (nyuusu) is dominated by NHK, the public broadcaster. Japanese news shows often feature panels of commentators (コメンテーター) who discuss stories together. Weather segments are extensive because natural disasters are frequent. News vocabulary is essential for daily life in Japan."},

  {type:"teach", trg:"事件(じけん)", src:"incident / case / crime", pos:"noun", gender:null,
   note:"Covers crimes, mysteries, and notable events. Kanji: 事件.\n事(じ) (matter) + 件(けん) (case).",
   example:"A: 昨日(きのう)大(おお)きな事件(じけん)がありました。\nB: どんな事件(じけん)ですか？",
   exampleSrc:"A: There was a major incident yesterday.\nB: What kind of incident?",
   funFact:"事件 combines 事 (matter) and 件 (case/item). It appears constantly in news and detective fiction. Japan has one of the lowest crime rates in the developed world, so when a 事件 occurs, it dominates news coverage for days. Mystery novels and dramas are called 事件もの (jiken-mono)."},

  {type:"teach", trg:"事故(じこ)", src:"accident", pos:"noun", gender:null,
   note:"Traffic accidents, industrial accidents, any unintended harmful event.\nKanji: 事故. 交通事故(こうつうじこ) = traffic accident.",
   example:"A: 交通事故(こうつうじこ)で道(みち)が混(こ)んでいます。\nB: 別(べつ)の道(みち)を行(い)きましょう。",
   exampleSrc:"A: The road is congested due to a traffic accident.\nB: Let us take a different road.",
   funFact:"事故 combines 事 (matter) and 故 (cause/reason). Traffic accidents (koutsuu jiko) are reported extensively. Japan's traffic safety campaigns are famous, especially in spring and autumn. Jiko bukken (accident property) is a real estate term for apartments where someone died, which must be disclosed by law."},

  {type:"teach", trg:"災害(さいがい)", src:"disaster", pos:"noun", gender:null,
   note:"Natural or man-made disasters. Kanji: 災害.\n自然災害(しぜんさいがい) = natural disaster.",
   example:"A: 日本(にほん)は災害(さいがい)が多(おお)い国(くに)です。\nB: 地震(じしん)や台風(たいふう)がありますね。",
   exampleSrc:"A: Japan is a country with many disasters.\nB: There are earthquakes and typhoons.",
   funFact:"災害 combines 災 (disaster/calamity) and 害 (harm). Japan sits on the Pacific Ring of Fire and faces earthquakes, tsunamis, typhoons, and volcanic eruptions regularly. Disaster preparedness (防災, bousai) is taught from elementary school. Every September 1st is Disaster Prevention Day."},

  {type:"teach", trg:"選挙(せんきょ)", src:"election", pos:"noun", gender:null,
   note:"Kanji: 選挙. 選挙(せんきょ)する = to hold an election.\n投票(とうひょう)する = to vote.",
   example:"A: 来月(らいげつ)選挙(せんきょ)があります。\nB: 投票(とうひょう)に行(い)きますか？",
   exampleSrc:"A: There is an election next month.\nB: Will you go to vote?",
   funFact:"選挙 combines 選 (choose) and 挙 (raise/nominate). Japanese elections use a unique system: voters write candidates' names by hand on ballots. Voter turnout has been declining, especially among young people. Campaign trucks with speakers drive through neighborhoods, and candidates bow deeply at intersections."},
{type:"match",pairs:[{trg:"事件(じけん)",src:"incident / case / crime"},{trg:"事故(じこ)",src:"accident"},{trg:"災害(さいがい)",src:"disaster"},{trg:"選挙(せんきょ)",src:"election"}]},

  {type:"mc", q:"事件(じけん) means:", opts:["incident/crime","accident","weather","economy"], ans:"incident/crime",
   hint:"This word covers crimes, notable events, and legal cases. Think detective stories."},

  {type:"teach", trg:"経済(けいざい)", src:"economy / economics", pos:"noun", gender:null,
   note:"Kanji: 経済. 経済的(けいざいてき) = economic (な-adjective).\nA core topic in Japanese news.",
   example:"A: 日本(にほん)の経済(けいざい)は今(いま)どうですか？\nB: 少(すこ)し良(よ)くなっているそうです。",
   exampleSrc:"A: How is the Japanese economy now?\nB: It seems to be improving a little.",
   funFact:"経済 combines 経 (manage/pass through) and 済 (settle/finish). Japan had the world's second-largest economy for decades until China surpassed it in 2010. Terms like keiki (economic climate), bukka (prices), and kabuka (stock prices) fill Japanese news daily."},

  {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
   note:"Kanji: 地震. 地(じ) (earth) + 震(しん) (shake).\nJapan experiences thousands per year.",
   example:"A: 昨日(きのう)の夜(よる)地震(じしん)がありました。\nB: 大丈夫(だいじょうぶ)でしたか？",
   exampleSrc:"A: There was an earthquake last night.\nB: Were you okay?",
   funFact:"地震 literally means 'earth-shake.' Japan experiences over 1,500 noticeable earthquakes per year. The seismic intensity scale (震度, shindo) runs from 0 to 7 and is unique to Japan. Earthquake early warning systems send alerts to phones seconds before shaking arrives. Every building in Japan is designed with seismic resistance."},

  {type:"fb", s:"日本(にほん)は{1}が多(おお)い国(くに)です。\n(Japan is a country with many disasters.)", a:"災害(さいがい)", opts:["災害(さいがい)","事件(じけん)","選挙(せんきょ)","経済(けいざい)"], sSrc:"Japan is a country with many disasters.",
   hint:"The word for natural or man-made disasters, including earthquakes and typhoons."},

  {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
   note:"Kanji: 台風. Peak season: August to October.\n日本(にほん)に台風(たいふう)が来(く)る = a typhoon comes to Japan.",
   example:"A: 台風(たいふう)が近(ちか)づいています。\nB: 気(き)をつけてください。",
   exampleSrc:"A: A typhoon is approaching.\nB: Please be careful.",
   funFact:"台風 comes from the Cantonese 'tai fung' (big wind). Japan faces about 25 typhoons per year, with several making landfall. Typhoons are numbered, not named, in Japanese media. Schools and businesses close during strong typhoons. Convenience stores stock up on supplies before typhoon season."},

  {type:"teach", trg:"投票(とうひょう)する", src:"to vote", pos:"verb", gender:null,
   note:"する-verb. 投票(とうひょう) = voting/ballot. Kanji: 投票する.\n投(とう) (throw) + 票(ひょう) (ballot).",
   example:"A: もう投票(とうひょう)しましたか？\nB: はい、今朝(けさ)行(い)きました。",
   exampleSrc:"A: Have you voted already?\nB: Yes, I went this morning.",
   funFact:"投票 literally means 'throw a ballot.' Japanese voting is done on paper, with voters writing the candidate's name by hand. This system means candidates with simple, memorable names have an advantage. Polling stations are often set up in schools and community centers."},

  {type:"teach", trg:"〜そうです", src:"I heard that ~ / apparently ~", pos:"part", gender:null,
   note:"Plain form + そうです = hearsay. Reporting what you heard/read.\nDifferent from stem + そう (looks like).",
   example:"A: 明日(あした)雨(あめ)が降(ふ)るそうです。\nB: 傘(かさ)を持(も)っていきましょう。",
   exampleSrc:"A: I heard it will rain tomorrow.\nB: Let us bring umbrellas.",
   funFact:"そうです (hearsay) is essential for discussing news. It marks information as secondhand: you read it, heard it, or were told. Japanese communication values sourcing information. ニュースによると...そうです (according to the news, apparently...) is a standard news-discussion pattern."},

  {type:"mc", q:"明日(あした)雨(あめ)が降(ふ)るそうです means:", opts:["It looks like rain tomorrow","I heard it will rain tomorrow","I hope it rains tomorrow","It rained yesterday"], ans:"I heard it will rain tomorrow",
   hint:"Plain form + そうです marks hearsay: information you received from another source."},

  {type:"match", pairs:[{trg:"ニュース",src:"news"},{trg:"事件(じけん)",src:"incident/crime"},{trg:"事故(じこ)",src:"accident"},{trg:"災害(さいがい)",src:"disaster"}]},

  {type:"match", pairs:[{trg:"選挙(せんきょ)",src:"election"},{trg:"経済(けいざい)",src:"economy"},{trg:"地震(じしん)",src:"earthquake"},{trg:"台風(たいふう)",src:"typhoon"}]},

  {type:"fb", s:"来月(らいげつ){1}があります。\n(There is an election next month.)", a:"選挙(せんきょ)", opts:["選挙(せんきょ)","事件(じけん)","災害(さいがい)","経済(けいざい)"], sSrc:"There is an election next month.",
   hint:"The word for a democratic voting event where citizens choose representatives."},

  {type:"mc", q:"経済(けいざい) means:", opts:["politics","education","economy","culture"], ans:"economy",
   hint:"This word covers financial systems, markets, and economic conditions."},
]},

// ═══ L2: 意見(いけん)を言(い)う (Expressing Opinions) ═══
{id:"jav2_u21l2", title:"意見(いけん)を言(い)う", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"意見(いけん)を言(い)う",
   desc:"Learn to express and discuss opinions about society. Master key phrases like 'regarding X,' 'according to Y,' and 'toward Z.' These patterns let you participate in discussions about news, problems, and solutions at an intermediate level.",
   goals:["Express opinions with 〜について (regarding)","Report sources with 〜によると (according to)","Discuss attitudes with 〜に対(たい)して (toward)"]},

  {type:"teach", trg:"〜について", src:"regarding ~ / about ~", pos:"part", gender:null,
   note:"Noun + について = about/regarding that topic.\nMore formal than the casual のこと.",
   example:"A: 環境問題(かんきょうもんだい)についてどう思(おも)いますか？\nB: とても重要(じゅうよう)な問題(もんだい)だと思(おも)います。",
   exampleSrc:"A: What do you think regarding environmental problems?\nB: I think it is a very important problem.",
   funFact:"について is the discussion connector of formal Japanese. It appears in essays, presentations, news articles, and business meetings. Built from つく (to attach), it literally means 'attached to (the topic of).' Every JLPT N3 reading passage uses this grammar point multiple times."},

  {type:"teach", trg:"〜に対(たい)して", src:"toward ~ / against ~ / in contrast to ~", pos:"part", gender:null,
   note:"Noun + に対(たい)して = attitude or action directed toward something.\nKanji: に対して.",
   example:"A: 政府(せいふ)の対応(たいおう)に対(たい)して不満(ふまん)があります。\nB: 多(おお)くの人(ひと)がそう思(おも)っています。",
   exampleSrc:"A: There is dissatisfaction toward the government's response.\nB: Many people think so.",
   funFact:"に対して expresses direction of attitude, opinion, or action. It is more specific than について (about): について discusses a topic, while に対して shows a stance toward it. In debates and opinion pieces, に対して introduces positions: 'toward this issue, I believe...'"},

  {type:"teach", trg:"〜によると", src:"according to ~", pos:"part", gender:null,
   note:"Source + によると = according to that source.\nニュースによると = according to the news.",
   example:"A: ニュースによると明日(あした)雪(ゆき)が降(ふ)るそうです。\nB: 寒(さむ)くなりますね。",
   exampleSrc:"A: According to the news, it will snow tomorrow.\nB: It will get cold.",
   funFact:"によると is the attribution marker for Japanese reporting. It always comes with そうです (hearsay) at the end. News anchors, essay writers, and everyday speakers use it to cite their sources. 研究(けんきゅう)によると (according to research) is how Japanese academics begin citing studies."},

  {type:"teach", trg:"環境(かんきょう)", src:"environment", pos:"noun", gender:null,
   note:"Kanji: 環境. 環境問題(かんきょうもんだい) = environmental problem.\n環(かん) (ring/surroundings) + 境(きょう) (boundary).",
   example:"A: 環境(かんきょう)を守(まも)ることが大切(たいせつ)です。\nB: 私(わたし)もそう思(おも)います。",
   exampleSrc:"A: It is important to protect the environment.\nB: I think so too.",
   funFact:"環境 combines 環 (ring/cycle) and 境 (boundary), meaning 'surrounding conditions.' Environmental awareness has grown significantly in Japan. Garbage separation (ゴミの分別, gomi no bunbetsu) is extremely detailed, with some cities having over 30 categories. Japan's recycling culture is among the world's most rigorous."},

  {type:"mc", q:"環境問題(かんきょうもんだい)についてどう思(おも)いますか means:", opts:["What do you think regarding environmental problems?","What caused environmental problems?","Environmental problems are solved","I do not think about the environment"], ans:"What do you think regarding environmental problems?",
   hint:"について connects to the topic being discussed. どう思(おも)いますか asks for an opinion."},

  {type:"teach", trg:"問題(もんだい)", src:"problem / question", pos:"noun", gender:null,
   note:"Kanji: 問題. Both 'problem' (social issue) and 'question' (exam question).\n問(もん) (ask) + 題(だい) (topic).",
   example:"A: これは大(おお)きな問題(もんだい)です。\nB: 解決策(かいけつさく)を考(かんが)えましょう。",
   exampleSrc:"A: This is a big problem.\nB: Let us think of a solution.",
   funFact:"問題 is one of the most frequently used nouns in Japanese. It means both 'problem' (社会問題, social problem) and 'question' (試験問題, exam question). The phrase mondai nai (no problem) is casual reassurance. In news, mondai always signals something serious that needs addressing."},

  {type:"teach", trg:"解決(かいけつ)する", src:"to solve / to resolve", pos:"verb", gender:null,
   note:"する-verb. 解決(かいけつ) = solution/resolution. Kanji: 解決する.\n解(かい) (untie) + 決(けつ) (decide).",
   example:"A: この問題(もんだい)を解決(かいけつ)しなければなりません。\nB: みんなで考(かんが)えましょう。",
   exampleSrc:"A: We must solve this problem.\nB: Let us think about it together.",
   funFact:"解決 combines 解 (untie/dissolve) and 決 (decide). The metaphor is beautiful: solving a problem means 'untying a knot and deciding.' Japanese business culture emphasizes group problem-solving (nemawashi, consensus building) before implementing solutions."},

  {type:"teach", trg:"意見(いけん)", src:"opinion", pos:"noun", gender:null,
   note:"Kanji: 意見. 意見(いけん)を言(い)う = to state an opinion.\n意(い) (thought/meaning) + 見(けん) (see/view).",
   example:"A: 皆(みな)さんの意見(いけん)を聞(き)かせてください。\nB: 私(わたし)は、環境問題(かんきょうもんだい)が一番(いちばん)重要(じゅうよう)だと思(おも)います。",
   exampleSrc:"A: Please share your opinions.\nB: I think environmental problems are the most important.",
   funFact:"意見 literally means 'thought-view.' In Japanese culture, directly stating opinions (iken wo iu) requires social awareness. Meetings often use the phrase 'please share your iken,' but responses are carefully framed. Starting with 'I think...' (to omoimasu) softens the opinion."},

  {type:"fb", s:"ニュース{1}明日(あした)雪(ゆき)が降(ふ)るそうです。\n(According to the news, it will snow tomorrow.)", a:"によると", opts:["によると","について","に対(たい)して","のために"], sSrc:"According to the news, it will snow tomorrow.",
   hint:"The attribution phrase meaning 'according to' a source of information."},

  {type:"teach", trg:"政府(せいふ)", src:"government", pos:"noun", gender:null,
   note:"Kanji: 政府. 政(せい) (politics/govern) + 府(ふ) (office/government).\nUsed for national and local governments.",
   example:"A: 政府(せいふ)は新(あたら)しい法律(ほうりつ)を作(つく)りました。\nB: どんな法律(ほうりつ)ですか？",
   exampleSrc:"A: The government made a new law.\nB: What kind of law?",
   funFact:"政府 combines 政 (govern) and 府 (government office). Japan has a parliamentary system with a Prime Minister (首相, shushou). The government offices are centered in Kasumigaseki, Tokyo. 政府 appears in news daily, often in debates about policy and reform."},

  {type:"teach", trg:"社会(しゃかい)", src:"society", pos:"noun", gender:null,
   note:"Kanji: 社会. 社会問題(しゃかいもんだい) = social problem.\n社(しゃ) (company/group) + 会(かい) (meeting/society).",
   example:"A: 社会(しゃかい)についてもっと知(し)るべきです。\nB: そうですね。ニュースを読(よ)みましょう。",
   exampleSrc:"A: We should know more about society.\nB: That is right. Let us read the news.",
   funFact:"社会 combines 社 (shrine/company) and 会 (meeting/gathering). It is a relatively modern word, coined in the Meiji era to translate the Western concept of 'society.' 社会人(しゃかいじん) (shakaijin, society person) means a working adult, a term with no English equivalent. Graduating students 'become shakaijin' when they start working."},

  {type:"mc", q:"〜に対(たい)して expresses:", opts:["a reason for something","an attitude or stance toward something","a time when something happened","a way to do something"], ans:"an attitude or stance toward something",
   hint:"This grammar point shows a directed position or opinion aimed at a specific issue."},

  {type:"match", pairs:[{trg:"について",src:"regarding/about"},{trg:"に対(たい)して",src:"toward/against"},{trg:"によると",src:"according to"},{trg:"そうです",src:"I heard that"}]},

  {type:"match", pairs:[{trg:"環境(かんきょう)",src:"environment"},{trg:"問題(もんだい)",src:"problem"},{trg:"解決(かいけつ)する",src:"to solve"},{trg:"意見(いけん)",src:"opinion"}]},

  {type:"fb", s:"政府(せいふ)の対応(たいおう){1}不満(ふまん)があります。\n(There is dissatisfaction toward the government's response.)", a:"に対(たい)して", opts:["に対(たい)して","について","によると","のために"], sSrc:"There is dissatisfaction toward the government's response.",
   hint:"The phrase expressing an attitude or stance directed toward something."},

  {type:"match", pairs:[{trg:"政府(せいふ)",src:"government"},{trg:"社会(しゃかい)",src:"society"},{trg:"投票(とうひょう)する",src:"to vote"},{trg:"経済(けいざい)",src:"economy"}]},

  {type:"mc", q:"解決(かいけつ)する means:", opts:["to discuss","to complain","to solve/resolve","to investigate"], ans:"to solve/resolve",
   hint:"The kanji mean 'untie' and 'decide,' describing the process of resolving a problem."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_21;
