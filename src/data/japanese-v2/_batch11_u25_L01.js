// Batch 11 – Unit 25 (B2.1 Business): N2 Grammar Particles & Business Formality
const BATCH11_L1 = {
  id:"jav2_u25l_b11_1", title:"ビジネスの文法(ぶんぽう)", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスの文法(ぶんぽう)",
     desc:"Learn JLPT N2 grammar particles used in business and formal contexts. These expressions add precision and formality to your Japanese.",
     goals:["Use にとって, にたいして, において correctly","Express formal relationships and perspectives","Navigate N2 grammar in business contexts"]},

    {type:"teach", trg:"〜にとって", src:"for ~ / from the standpoint of ~", pos:"part", gender:null,
     note:"X にとって = for X / from X's perspective.\nわたしにとって = for me.",
     example:"A: 外国人(がいこくじん)にとって、漢字(かんじ)は難(むずか)しいですか？\nB: はい、とても難(むずか)しいです。でも面白(おもしろ)いです。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Is kanji difficult for foreigners?\nB: Yes, very difficult. But interesting.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"にとって frames a perspective: わたしにとって (for me), 日本人(にほんじん)にとって (for Japanese people). It is essential in JLPT N2 and appears frequently in essays comparing perspectives. The nuance is subjective: AにとってはBでも、CにとってはDだ (for A it's B, but for C it's D)."},

    {type:"teach", trg:"〜にたいして", src:"toward ~ / in contrast to ~", pos:"part", gender:null,
     note:"Two uses: 1) direction of action toward X. 2) contrast between X and Y.\nXにたいしてYは = in contrast to X, Y...",
     example:"A: お客様(きゃくさま)に対(たい)して丁寧(ていねい)に対応(たいおう)してください。\nB: はい、常(つね)に礼儀正(れいぎただ)しく対応(たいおう)します。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Please respond politely toward customers.\nB: Yes, I will always respond courteously.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"にたいして has dual power: direction (客(きゃく)にたいして = toward customers) and contrast (日本(にほん)にたいしてアメリカは = in contrast to Japan, America...). JLPT N2 tests both uses. The contrast meaning is especially useful in comparative essays and business analyses."},

    {type:"teach", trg:"〜において", src:"in / at (formal location/context)", pos:"part", gender:null,
     note:"Formal version of で. 会議(かいぎ)において = at the meeting.\nUsed in official and academic contexts.",
     example:"A: この件(けん)については、次(つぎ)の会議(かいぎ)において議論(ぎろん)します。\nB: 分(わ)かりました。資料(しりょう)を準備(じゅんび)します。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: This matter will be discussed at the next meeting.\nB: Understood. I will prepare the materials.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"において replaces で in formal writing: 東京(とうきょう)において (in Tokyo), 現代社会(げんだいしゃかい)において (in modern society), ビジネスの場(ば)において (in business settings). Using it in casual speech sounds oddly stiff, but in reports and presentations it is standard. JLPT N2 staple."},

    {type:"teach", trg:"〜にかんして", src:"regarding ~ / concerning ~", pos:"part", gender:null,
     note:"Formal 'about.' にかんする報告(ほうこく) = report regarding.\nMore formal than について.",
     example:"A: この問題(もんだい)にかんして、何(なに)か意見(いけん)はありますか？\nB: はい、いくつか提案(ていあん)があります。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Regarding this problem, do you have any opinions?\nB: Yes, I have several suggestions.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"にかんして and について both mean 'regarding,' but にかんして is more formal and appears in official documents. にかんする調査(ちょうさ) (survey regarding), にかんする法律(ほうりつ) (law concerning). In business email, にかんしまして adds extra politeness. JLPT N2 tests the formality distinction."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~", pos:"part", gender:null,
     note:"Based on data/facts/rules.\n事実(じじつ)にもとづいて = based on facts.",
     example:"A: 調査(ちょうさ)結果(けっか)にもとづいて、計画(けいかく)を立(た)てました。\nB: データにもとづいた計画(けいかく)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: We created a plan based on survey results.\nB: A data-driven plan.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"にもとづいて (に基(もと)づいて) connects decisions to their evidence base. 事実(じじつ)にもとづく (fact-based), 法律(ほうりつ)にもとづく (law-based), 経験(けいけん)にもとづく (experience-based). In Japanese business culture, data-driven decisions (データにもとづく意思決定(いしけってい)) are increasingly valued over intuition."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~", pos:"part", gender:null,
     note:"Two things change together.\n人口増加(じんこうぞうか)にともなって = along with population growth.",
     example:"A: 技術(ぎじゅつ)の発展(はってん)にともなって、生活(せいかつ)も変(か)わっています。\nB: 確(たし)かに、十年前(じゅうねんまえ)とはまったく違(ちが)いますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Along with technological development, lifestyles are changing too.\nB: Indeed, it is completely different from ten years ago.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"にともなって (に伴(ともな)って) describes parallel changes: when X happens, Y naturally follows. It is common in social analysis: 高齢化(こうれいか)にともなって (along with aging), グローバル化(か)にともなって (along with globalization). This pattern elegantly captures the interconnectedness of social phenomena."},

    {type:"teach", trg:"〜をつうじて", src:"through ~ / throughout ~", pos:"part", gender:null,
     note:"Two uses: 1) by means of. 2) throughout a period.\nインターネットをつうじて = through the internet.",
     example:"A: ボランティア活動(かつどう)をつうじて、多(おお)くのことを学(まな)びました。\nB: 素晴(すば)らしい経験(けいけん)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Through volunteer activities, I learned many things.\nB: That's a wonderful experience.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"をつうじて has two distinct uses: means (インターネットをつうじて = through the internet) and duration (一年(いちねん)をつうじて = throughout the year). JLPT N2 tests both. In business, をつうじての提携(ていけい) (partnership through) describes collaborative relationships."},

    {type:"teach", trg:"〜をもとに", src:"based on ~ / using ~ as a basis", pos:"part", gender:null,
     note:"Similar to にもとづいて but slightly more creative.\n事実(じじつ)をもとにした映画(えいが) = movie based on true events.",
     example:"A: 実際(じっさい)の事件(じけん)をもとにした小説(しょうせつ)です。\nB: ノンフィクションですか？\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: It is a novel based on actual events.\nB: Is it non-fiction?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"をもとに suggests creative adaptation from a source: 実話(じつわ)をもとにした (based on a true story), 伝統(でんとう)をもとにした (based on tradition). にもとづいて is stricter (following facts precisely), while をもとに allows more creative interpretation. This subtle difference appears on JLPT N2."},

    {type:"teach", trg:"〜にしたがって", src:"as ~ / in accordance with ~", pos:"part", gender:null,
     note:"Two uses: 1) following rules. 2) proportional change.\n規則(きそく)にしたがって = according to the rules.",
     example:"A: 時間(じかん)がたつにしたがって、日本語(にほんご)が上手(じょうず)になりました。\nB: 続(つづ)けることが大事(だいじ)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: As time passed, my Japanese improved.\nB: Continuing is important.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"にしたがって (に従(したが)って) describes proportional change: Xが増(ふ)えるにしたがって、Yも増(ふ)える (as X increases, Y increases too). It also means 'in accordance with': 規則(きそく)にしたがって (following the rules). The dual meaning connects obedience (following rules) with natural progression (following trends)."},

    {type:"teach", trg:"〜にかかわらず", src:"regardless of ~ / irrespective of ~", pos:"part", gender:null,
     note:"Despite X, Y happens anyway.\n天気(てんき)にかかわらず = regardless of weather.",
     example:"A: 天気(てんき)にかかわらず、イベントは行(おこな)います。\nB: 雨(あめ)でもやるのですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The event will be held regardless of weather.\nB: So you'll do it even in rain.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"にかかわらず (に関(かかわ)わらず) dismisses a variable as irrelevant. 性別(せいべつ)にかかわらず (regardless of gender), 年齢(ねんれい)にかかわらず (regardless of age). It appears in anti-discrimination policies and event notices. The formal variant いかんにかかわらず is even more official."},

    {type:"teach", trg:"〜をはじめ", src:"starting with ~ / including ~", pos:"part", gender:null,
     note:"Lists the most prominent example.\n東京(とうきょう)をはじめ = starting with Tokyo.",
     example:"A: 日本(にほん)には東京(とうきょう)をはじめ、たくさんの魅力的(みりょくてき)な街(まち)があります。\nB: 京都(きょうと)や大阪(おおさか)も素敵(すてき)ですよね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Japan has many attractive cities, starting with Tokyo.\nB: Kyoto and Osaka are wonderful too.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"をはじめ (を始(はじ)め) names the prime example before broadening: 桜(さくら)をはじめ、日本(にほん)にはきれいな花(はな)がたくさんあります (starting with cherry blossoms, Japan has many beautiful flowers). It elevates the first item as the representative example while implying there are many more."},

    // Quiz steps
    {type:"mc", q:"「にとって」はどんな意味(いみ)ですか？",
     opts:["From someone's standpoint/perspective","Because of","Despite","Through"],
     ans:"From someone's standpoint/perspective",
     hint:"This particle frames a statement from a particular person's or group's point of view."},

    {type:"fb", s:"この問題(もんだい){1}、何(なに)か意見(いけん)はありますか？",
     a:["にかんして"],
     opts:["にかんして","にとって","において","にしたがって"],
     hint:"The speaker is asking for opinions 'regarding' this problem. This is the formal version of について.",
     sSrc:"Regarding this problem, do you have any opinions?"},

    {type:"match", pairs:[
      {trg:"〜において", src:"in / at (formal)"},
      {trg:"〜にもとづいて", src:"based on"},
      {trg:"〜にともなって", src:"along with"},
      {trg:"〜にかかわらず", src:"regardless of"}
    ]},

    {type:"mc", q:"「にもとづいて」と「をもとに」はどう違(ちが)いますか？",
     opts:["にもとづいて is stricter/factual, をもとに allows creative adaptation","They are the same","にもとづいて is casual","をもとに is more formal"],
     ans:"にもとづいて is stricter/factual, をもとに allows creative adaptation",
     hint:"One follows facts precisely, the other uses something as inspiration. Think: following a law vs adapting a true story into fiction."},

    {type:"fb", s:"天気(てんき){1}、イベントは行(おこな)います。",
     a:["にかかわらず"],
     opts:["にかかわらず","にたいして","において","にしたがって"],
     hint:"The event happens regardless of what the weather is. This particle dismisses a variable as irrelevant.",
     sSrc:"The event will be held regardless of weather."},

    {type:"mc", q:"「において」is the formal register equivalent of which particle?",
     opts:["で","に","を","と"],
     ans:"で",
     hint:"This formal particle replaces the common location/context particle used in everyday speech."}
  ]
};
export default BATCH11_L1;
