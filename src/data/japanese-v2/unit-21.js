// Japanese V2 Unit 21. しゃかい (Society & News)
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
  title:"しゃかい", sub:"Society & News",
  icon:"📰", level:"B1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: ニュースのことば (News Vocabulary) ═══
{id:"jav2_u21l1", title:"ニュースのことば", icon:"📺", xp:15, board:true, steps:[
  {type:"intro", title:"ニュースのことば",
   desc:"Build your vocabulary for understanding Japanese news and current events. Learn words for incidents, accidents, disasters, elections, and the economy. These words appear daily in newspapers, TV news, and online media.",
   goals:["Learn core news vocabulary: incidents, accidents, disasters","Understand election and economy terms","Read and discuss simple news topics"]},

  {type:"teach", trg:"ニュース", src:"news", pos:"noun", gender:null,
   note:"From English 'news.' Used for TV news, online news, any news.\nニュースをみる = to watch the news.",
   example:"A: きょうのニュースをみましたか？\nB: はい、おおきなじしんがあったそうです。",
   exampleSrc:"A: Did you watch today's news?\nB: Yes, apparently there was a big earthquake.",
   funFact:"Japanese news (nyuusu) is dominated by NHK, the public broadcaster. Japanese news shows often feature panels of commentators (コメンテーター) who discuss stories together. Weather segments are extensive because natural disasters are frequent. News vocabulary is essential for daily life in Japan."},

  {type:"teach", trg:"じけん", src:"incident / case / crime", pos:"noun", gender:null,
   note:"Covers crimes, mysteries, and notable events. Kanji: 事件.\nじ (matter) + けん (case).",
   example:"A: きのうおおきなじけんがありました。\nB: どんなじけんですか？",
   exampleSrc:"A: There was a major incident yesterday.\nB: What kind of incident?",
   funFact:"事件 combines 事 (matter) and 件 (case/item). It appears constantly in news and detective fiction. Japan has one of the lowest crime rates in the developed world, so when a じけん occurs, it dominates news coverage for days. Mystery novels and dramas are called 事件もの (jiken-mono)."},

  {type:"teach", trg:"じこ", src:"accident", pos:"noun", gender:null,
   note:"Traffic accidents, industrial accidents, any unintended harmful event.\nKanji: 事故. こうつうじこ = traffic accident.",
   example:"A: こうつうじこでみちがこんでいます。\nB: べつのみちをいきましょう。",
   exampleSrc:"A: The road is congested due to a traffic accident.\nB: Let us take a different road.",
   funFact:"事故 combines 事 (matter) and 故 (cause/reason). Traffic accidents (koutsuu jiko) are reported extensively. Japan's traffic safety campaigns are famous, especially in spring and autumn. Jiko bukken (accident property) is a real estate term for apartments where someone died, which must be disclosed by law."},

  {type:"teach", trg:"さいがい", src:"disaster", pos:"noun", gender:null,
   note:"Natural or man-made disasters. Kanji: 災害.\nしぜんさいがい = natural disaster.",
   example:"A: にほんはさいがいがおおいくにです。\nB: じしんやたいふうがありますね。",
   exampleSrc:"A: Japan is a country with many disasters.\nB: There are earthquakes and typhoons.",
   funFact:"災害 combines 災 (disaster/calamity) and 害 (harm). Japan sits on the Pacific Ring of Fire and faces earthquakes, tsunamis, typhoons, and volcanic eruptions regularly. Disaster preparedness (防災, bousai) is taught from elementary school. Every September 1st is Disaster Prevention Day."},

  {type:"teach", trg:"せんきょ", src:"election", pos:"noun", gender:null,
   note:"Kanji: 選挙. せんきょする = to hold an election.\nとうひょうする = to vote.",
   example:"A: らいげつせんきょがあります。\nB: とうひょうにいきますか？",
   exampleSrc:"A: There is an election next month.\nB: Will you go to vote?",
   funFact:"選挙 combines 選 (choose) and 挙 (raise/nominate). Japanese elections use a unique system: voters write candidates' names by hand on ballots. Voter turnout has been declining, especially among young people. Campaign trucks with speakers drive through neighborhoods, and candidates bow deeply at intersections."},

  {type:"mc", q:"じけん means:", opts:["incident/crime","accident","weather","economy"], ans:"incident/crime",
   hint:"This word covers crimes, notable events, and legal cases. Think detective stories."},

  {type:"teach", trg:"けいざい", src:"economy / economics", pos:"noun", gender:null,
   note:"Kanji: 経済. けいざいてき = economic (な-adjective).\nA core topic in Japanese news.",
   example:"A: にほんのけいざいはいまどうですか？\nB: すこしよくなっているそうです。",
   exampleSrc:"A: How is the Japanese economy now?\nB: It seems to be improving a little.",
   funFact:"経済 combines 経 (manage/pass through) and 済 (settle/finish). Japan had the world's second-largest economy for decades until China surpassed it in 2010. Terms like keiki (economic climate), bukka (prices), and kabuka (stock prices) fill Japanese news daily."},

  {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
   note:"Kanji: 地震. じ (earth) + しん (shake).\nJapan experiences thousands per year.",
   example:"A: きのうのよるじしんがありました。\nB: だいじょうぶでしたか？",
   exampleSrc:"A: There was an earthquake last night.\nB: Were you okay?",
   funFact:"地震 literally means 'earth-shake.' Japan experiences over 1,500 noticeable earthquakes per year. The seismic intensity scale (震度, shindo) runs from 0 to 7 and is unique to Japan. Earthquake early warning systems send alerts to phones seconds before shaking arrives. Every building in Japan is designed with seismic resistance."},

  {type:"fb", s:"にほんは{1}がおおいくにです。\n(Japan is a country with many disasters.)", a:"さいがい", opts:["さいがい","じけん","せんきょ","けいざい"], sSrc:"Japan is a country with many disasters.",
   hint:"The word for natural or man-made disasters, including earthquakes and typhoons."},

  {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
   note:"Kanji: 台風. Peak season: August to October.\nにほんにたいふうがくる = a typhoon comes to Japan.",
   example:"A: たいふうがちかづいています。\nB: きをつけてください。",
   exampleSrc:"A: A typhoon is approaching.\nB: Please be careful.",
   funFact:"台風 comes from the Cantonese 'tai fung' (big wind). Japan faces about 25 typhoons per year, with several making landfall. Typhoons are numbered, not named, in Japanese media. Schools and businesses close during strong typhoons. Convenience stores stock up on supplies before typhoon season."},

  {type:"teach", trg:"とうひょうする", src:"to vote", pos:"verb", gender:null,
   note:"する-verb. とうひょう = voting/ballot. Kanji: 投票する.\nとう (throw) + ひょう (ballot).",
   example:"A: もうとうひょうしましたか？\nB: はい、けさいきました。",
   exampleSrc:"A: Have you voted already?\nB: Yes, I went this morning.",
   funFact:"投票 literally means 'throw a ballot.' Japanese voting is done on paper, with voters writing the candidate's name by hand. This system means candidates with simple, memorable names have an advantage. Polling stations are often set up in schools and community centers."},

  {type:"teach", trg:"〜そうです", src:"I heard that ~ / apparently ~", pos:"part", gender:null,
   note:"Plain form + そうです = hearsay. Reporting what you heard/read.\nDifferent from stem + そう (looks like).",
   example:"A: あしたあめがふるそうです。\nB: かさをもっていきましょう。",
   exampleSrc:"A: I heard it will rain tomorrow.\nB: Let us bring umbrellas.",
   funFact:"そうです (hearsay) is essential for discussing news. It marks information as secondhand: you read it, heard it, or were told. Japanese communication values sourcing information. ニュースによると...そうです (according to the news, apparently...) is a standard news-discussion pattern."},

  {type:"mc", q:"あしたあめがふるそうです means:", opts:["It looks like rain tomorrow","I heard it will rain tomorrow","I hope it rains tomorrow","It rained yesterday"], ans:"I heard it will rain tomorrow",
   hint:"Plain form + そうです marks hearsay: information you received from another source."},

  {type:"match", pairs:[{trg:"ニュース",src:"news"},{trg:"じけん",src:"incident/crime"},{trg:"じこ",src:"accident"},{trg:"さいがい",src:"disaster"}]},

  {type:"match", pairs:[{trg:"せんきょ",src:"election"},{trg:"けいざい",src:"economy"},{trg:"じしん",src:"earthquake"},{trg:"たいふう",src:"typhoon"}]},

  {type:"fb", s:"らいげつ{1}があります。\n(There is an election next month.)", a:"せんきょ", opts:["せんきょ","じけん","さいがい","けいざい"], sSrc:"There is an election next month.",
   hint:"The word for a democratic voting event where citizens choose representatives."},

  {type:"mc", q:"けいざい means:", opts:["politics","education","economy","culture"], ans:"economy",
   hint:"This word covers financial systems, markets, and economic conditions."},
]},

// ═══ L2: いけんをいう (Expressing Opinions) ═══
{id:"jav2_u21l2", title:"いけんをいう", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"いけんをいう",
   desc:"Learn to express and discuss opinions about society. Master key phrases like 'regarding X,' 'according to Y,' and 'toward Z.' These patterns let you participate in discussions about news, problems, and solutions at an intermediate level.",
   goals:["Express opinions with ～について (regarding)","Report sources with ～によると (according to)","Discuss attitudes with ～にたいして (toward)"]},

  {type:"teach", trg:"〜について", src:"regarding ~ / about ~", pos:"part", gender:null,
   note:"Noun + について = about/regarding that topic.\nMore formal than the casual のこと.",
   example:"A: かんきょうもんだいについてどうおもいますか？\nB: とてもじゅうようなもんだいだとおもいます。",
   exampleSrc:"A: What do you think regarding environmental problems?\nB: I think it is a very important problem.",
   funFact:"について is the discussion connector of formal Japanese. It appears in essays, presentations, news articles, and business meetings. Built from つく (to attach), it literally means 'attached to (the topic of).' Every JLPT N3 reading passage uses this grammar point multiple times."},

  {type:"teach", trg:"〜にたいして", src:"toward ~ / against ~ / in contrast to ~", pos:"part", gender:null,
   note:"Noun + にたいして = attitude or action directed toward something.\nKanji: に対して.",
   example:"A: せいふのたいおうにたいしてふまんがあります。\nB: おおくのひとがそうおもっています。",
   exampleSrc:"A: There is dissatisfaction toward the government's response.\nB: Many people think so.",
   funFact:"に対して expresses direction of attitude, opinion, or action. It is more specific than について (about): について discusses a topic, while にたいして shows a stance toward it. In debates and opinion pieces, にたいして introduces positions: 'toward this issue, I believe...'"},

  {type:"teach", trg:"〜によると", src:"according to ~", pos:"part", gender:null,
   note:"Source + によると = according to that source.\nニュースによると = according to the news.",
   example:"A: ニュースによるとあしたゆきがふるそうです。\nB: さむくなりますね。",
   exampleSrc:"A: According to the news, it will snow tomorrow.\nB: It will get cold.",
   funFact:"によると is the attribution marker for Japanese reporting. It always comes with そうです (hearsay) at the end. News anchors, essay writers, and everyday speakers use it to cite their sources. けんきゅうによると (according to research) is how Japanese academics begin citing studies."},

  {type:"teach", trg:"かんきょう", src:"environment", pos:"noun", gender:null,
   note:"Kanji: 環境. かんきょうもんだい = environmental problem.\nかん (ring/surroundings) + きょう (boundary).",
   example:"A: かんきょうをまもることがたいせつです。\nB: わたしもそうおもいます。",
   exampleSrc:"A: It is important to protect the environment.\nB: I think so too.",
   funFact:"環境 combines 環 (ring/cycle) and 境 (boundary), meaning 'surrounding conditions.' Environmental awareness has grown significantly in Japan. Garbage separation (ゴミの分別, gomi no bunbetsu) is extremely detailed, with some cities having over 30 categories. Japan's recycling culture is among the world's most rigorous."},

  {type:"mc", q:"かんきょうもんだいについてどうおもいますか means:", opts:["What do you think regarding environmental problems?","What caused environmental problems?","Environmental problems are solved","I do not think about the environment"], ans:"What do you think regarding environmental problems?",
   hint:"について connects to the topic being discussed. どうおもいますか asks for an opinion."},

  {type:"teach", trg:"もんだい", src:"problem / question", pos:"noun", gender:null,
   note:"Kanji: 問題. Both 'problem' (social issue) and 'question' (exam question).\nもん (ask) + だい (topic).",
   example:"A: これはおおきなもんだいです。\nB: かいけつさくをかんがえましょう。",
   exampleSrc:"A: This is a big problem.\nB: Let us think of a solution.",
   funFact:"問題 is one of the most frequently used nouns in Japanese. It means both 'problem' (社会問題, social problem) and 'question' (試験問題, exam question). The phrase mondai nai (no problem) is casual reassurance. In news, mondai always signals something serious that needs addressing."},

  {type:"teach", trg:"かいけつする", src:"to solve / to resolve", pos:"verb", gender:null,
   note:"する-verb. かいけつ = solution/resolution. Kanji: 解決する.\nかい (untie) + けつ (decide).",
   example:"A: このもんだいをかいけつしなければなりません。\nB: みんなでかんがえましょう。",
   exampleSrc:"A: We must solve this problem.\nB: Let us think about it together.",
   funFact:"解決 combines 解 (untie/dissolve) and 決 (decide). The metaphor is beautiful: solving a problem means 'untying a knot and deciding.' Japanese business culture emphasizes group problem-solving (nemawashi, consensus building) before implementing solutions."},

  {type:"teach", trg:"いけん", src:"opinion", pos:"noun", gender:null,
   note:"Kanji: 意見. いけんをいう = to state an opinion.\nい (thought/meaning) + けん (see/view).",
   example:"A: みなさんのいけんをきかせてください。\nB: わたしは、かんきょうもんだいがいちばんじゅうようだとおもいます。",
   exampleSrc:"A: Please share your opinions.\nB: I think environmental problems are the most important.",
   funFact:"意見 literally means 'thought-view.' In Japanese culture, directly stating opinions (iken wo iu) requires social awareness. Meetings often use the phrase 'please share your iken,' but responses are carefully framed. Starting with 'I think...' (to omoimasu) softens the opinion."},

  {type:"fb", s:"ニュース{1}あしたゆきがふるそうです。\n(According to the news, it will snow tomorrow.)", a:"によると", opts:["によると","について","にたいして","のために"], sSrc:"According to the news, it will snow tomorrow.",
   hint:"The attribution phrase meaning 'according to' a source of information."},

  {type:"teach", trg:"せいふ", src:"government", pos:"noun", gender:null,
   note:"Kanji: 政府. せい (politics/govern) + ふ (office/government).\nUsed for national and local governments.",
   example:"A: せいふはあたらしいほうりつをつくりました。\nB: どんなほうりつですか？",
   exampleSrc:"A: The government made a new law.\nB: What kind of law?",
   funFact:"政府 combines 政 (govern) and 府 (government office). Japan has a parliamentary system with a Prime Minister (首相, shushou). The government offices are centered in Kasumigaseki, Tokyo. せいふ appears in news daily, often in debates about policy and reform."},

  {type:"teach", trg:"しゃかい", src:"society", pos:"noun", gender:null,
   note:"Kanji: 社会. しゃかいもんだい = social problem.\nしゃ (company/group) + かい (meeting/society).",
   example:"A: しゃかいについてもっとしるべきです。\nB: そうですね。ニュースをよみましょう。",
   exampleSrc:"A: We should know more about society.\nB: That is right. Let us read the news.",
   funFact:"社会 combines 社 (shrine/company) and 会 (meeting/gathering). It is a relatively modern word, coined in the Meiji era to translate the Western concept of 'society.' しゃかいじん (shakaijin, society person) means a working adult, a term with no English equivalent. Graduating students 'become shakaijin' when they start working."},

  {type:"mc", q:"〜にたいして expresses:", opts:["a reason for something","an attitude or stance toward something","a time when something happened","a way to do something"], ans:"an attitude or stance toward something",
   hint:"This grammar point shows a directed position or opinion aimed at a specific issue."},

  {type:"match", pairs:[{trg:"について",src:"regarding/about"},{trg:"にたいして",src:"toward/against"},{trg:"によると",src:"according to"},{trg:"そうです",src:"I heard that"}]},

  {type:"match", pairs:[{trg:"かんきょう",src:"environment"},{trg:"もんだい",src:"problem"},{trg:"かいけつする",src:"to solve"},{trg:"いけん",src:"opinion"}]},

  {type:"fb", s:"せいふのたいおう{1}ふまんがあります。\n(There is dissatisfaction toward the government's response.)", a:"にたいして", opts:["にたいして","について","によると","のために"], sSrc:"There is dissatisfaction toward the government's response.",
   hint:"The phrase expressing an attitude or stance directed toward something."},

  {type:"match", pairs:[{trg:"せいふ",src:"government"},{trg:"しゃかい",src:"society"},{trg:"とうひょうする",src:"to vote"},{trg:"けいざい",src:"economy"}]},

  {type:"mc", q:"かいけつする means:", opts:["to discuss","to complain","to solve/resolve","to investigate"], ans:"to solve/resolve",
   hint:"The kanji mean 'untie' and 'decide,' describing the process of resolving a problem."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
]};
export default UNIT_21;
