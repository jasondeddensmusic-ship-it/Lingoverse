// Batch 6 – Unit 29 (B2.3 Economy): Employment & Labor Market
const BATCH6_L1 = {
  id:"jav2_u29l_b6_1", title:"こようとろうどう", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"こようとろうどう",
     desc:"Learn vocabulary for employment, labor markets, and workplace issues. These JLPT N2 words are essential for understanding Japanese news, society, and business culture.",
     goals:["Discuss employment types and conditions","Use vocabulary for workplace issues","Navigate job-related conversations"]},

    {type:"teach", trg:"こよう", src:"employment", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようけいやく = employment contract.\nこようする = to employ.",
     example:"A: にほんのこようじょうきょうはどうですか？\nB: しつぎょうりつはひくいですが、ひせいきこようがおおいです。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: How is Japan's employment situation?\nB: Unemployment is low, but non-regular employment is high.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"こよう (雇用) is a hot-button topic in Japan. Traditional しゅうしんこよう (lifetime employment) is declining. ひせいきこよう (non-regular employment: part-time, contract, dispatch workers) now covers about 40% of the workforce. This shift creates income inequality and is a major social concern."},

    {type:"teach", trg:"しつぎょう", src:"unemployment", pos:"noun", gender:null,
     note:"Kanji: 失業. しつぎょうりつ = unemployment rate.\nしつぎょうほけん = unemployment insurance.",
     example:"A: しつぎょうりつがじょうしょうしています。\nB: けいざいのえいきょうですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The unemployment rate is rising.\nB: It is the impact of the economy.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan's しつぎょうりつ (unemployment rate) has historically been low (2-3%), partly because many people take ひせいき (non-regular) jobs rather than remain unemployed. しつぎょうほけん (unemployment insurance) provides financial support. ハローワーク (Hello Work) is the government employment agency where job seekers register."},

    {type:"teach", trg:"きゅうよ", src:"salary / pay", pos:"noun", gender:null,
     note:"Kanji: 給与. きゅうよめいさい = pay slip.\nDifferent from きゅうりょう (slightly less formal).",
     example:"A: きゅうよはつきにいくらですか？\nB: やくにじゅうごまんえんです。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: How much is the monthly salary?\nB: About 250,000 yen.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japanese きゅうよ (salary) is typically paid monthly. Average annual salary is about 4.5 million yen. Bonuses (ボーナス/しょうよ) are paid twice yearly (summer and winter) and can equal 2-5 months' salary. Japan's wage growth has been stagnant for decades, a major economic concern called 'lost decades.'"},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"Kanji: 残業. ざんぎょうする = to work overtime.\nサービスざんぎょう = unpaid overtime.",
     example:"A: きょうもざんぎょうですか？\nB: はい、しめきりがちかいので。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Working overtime again today?\nB: Yes, the deadline is approaching.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"ざんぎょう (overtime) has been a controversial topic in Japan. サービスざんぎょう (service overtime = unpaid) was widespread but is now being cracked down on. The 2019 Work Style Reform laws (はたらきかたかいかく) cap overtime at 45 hours/month. かろうし (death from overwork) pushed these legal changes."},

    {type:"teach", trg:"てんしょく", src:"changing jobs / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job change websites.",
     example:"A: てんしょくをかんがえていますか？\nB: はい、あたらしいかんきょうでちょうせんしたいです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Are you considering changing jobs?\nB: Yes, I want to challenge myself in a new environment.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"てんしょく (job-changing) was once taboo in Japan, where しゅうしんこよう (lifetime employment) was the norm. Now it is increasingly common, especially among younger workers. てんしょくエージェント (recruitment agencies) and sites like リクナビ and doda help. The phrase てんしょくかつどう (job-hunting activity) is now a normal part of career planning."},

    {type:"mc", q:"サービスざんぎょう means:", opts:["Unpaid overtime","A service job","Part-time work","A holiday bonus"], ans:"Unpaid overtime",
     hint:"This term combines 'service' (free) with 'o...,' meaning working extra without pay."},

    {type:"teach", trg:"ていねんたいしょく", src:"mandatory retirement", pos:"noun", gender:null,
     note:"Kanji: 定年退職. ていねん = retirement age (usually 60-65).\nたいしょくきん = retirement allowance.",
     example:"A: おとうさんはらいねんていねんたいしょくです。\nB: なにかけいかくはありますか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: My father will reach mandatory retirement next year.\nB: Does he have any plans?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japan's ていねん (mandatory retirement age) is being raised from 60 to 65 as the population ages. Many retirees continue working (さいこよう, re-employment) at reduced salaries. With the world's oldest population, Japan faces a severe labor shortage (じんてぶそく). The government encourages extending working lives."},

    {type:"teach", trg:"じんざい", src:"human resources / talented personnel", pos:"noun", gender:null,
     note:"Kanji: 人材. じんざいかいはつ = human resource development.\nグローバルじんざい = global talent.",
     example:"A: ゆうしゅうなじんざいのかくほがかだいです。\nB: がいこくじんのさいようもかんがえるべきです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Securing excellent talent is a challenge.\nB: We should also consider hiring foreigners.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"じんざい (人材) uses 材 (timber/material), treating people as valuable raw material for organizations. An alternative writing 人財 (using 財 = treasure) emphasizes people as organizational treasures. Japan's declining birthrate creates fierce competition for じんざい, with companies offering better benefits to attract workers."},

    {type:"teach", trg:"いくきゅう", src:"parental leave", pos:"noun", gender:null,
     note:"Kanji: 育休. Short for いくじきゅうぎょう (childcare leave).\nいくきゅうをとる = to take parental leave.",
     example:"A: おっとがいくきゅうをとることにしました。\nB: すばらしいですね。さいきんはだんせいのいくきゅうもふえていますね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: My husband decided to take parental leave.\nB: That is great. Male parental leave is increasing recently.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Japan's いくきゅう law is generous on paper (up to one year, with benefits), but actual usage, especially by men, has been historically low (about 14% of men, vs. 85% of women). The government aims to raise male いくきゅう rates. Companies that promote いくきゅう are recognized as イクメン企業 (ikumen companies, where ikumen = childcare men)."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"Katakana loanword. ストレスがたまる = stress accumulates.\nストレスかいしょう = stress relief.",
     example:"A: さいきんしごとのストレスがたまっています。\nB: たまにはリフレッシュしたほうがいいですよ。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Work stress has been building up recently.\nB: You should refresh yourself once in a while.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"ストレス is a major workplace topic in Japan. Since 2015, companies with 50+ employees must conduct annual ストレスチェック (stress checks). メンタルヘルス (mental health) awareness is growing but stigma remains. ストレスかいしょう methods include onsen, karaoke, and nomikai (drinking parties)."},

    {type:"fb", s:"にほんの{1}りつはひくいです。\n(Japan's unemployment rate is low.)", a:"しつぎょう", opts:["しつぎょう","こよう","ざんぎょう","てんしょく"], sSrc:"Japan's unemployment rate is low.",
     hint:"The word meaning being without a job, combined with りつ (rate)."},

    {type:"teach", trg:"はたらきかた", src:"work style / way of working", pos:"noun", gender:null,
     note:"はたらく + かた (way). はたらきかたかいかく = work style reform.\nあたらしいはたらきかた = new work styles.",
     example:"A: はたらきかたかいかくでなにがかわりましたか？\nB: ざんぎょうじかんのじょうげんがきびしくなりました。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: What changed with work style reform?\nB: The overtime hour limits became stricter.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"はたらきかたかいかく (Work Style Reform) became law in 2019, the biggest labor reform in decades. It caps overtime, mandates paid leave usage, and promotes equal pay for equal work. テレワーク (telework) and フレックスタイム (flextime) became more common after COVID-19, permanently changing Japanese はたらきかた."},

    {type:"mc", q:"てんしょく means:", opts:["Changing jobs / career change","Getting promoted","Retiring","Taking a day off"], ans:"Changing jobs / career change",
     hint:"This word describes moving from one company or c... to another."},

    {type:"match", pairs:[
      {trg:"こよう", src:"employment"},
      {trg:"きゅうよ", src:"salary"},
      {trg:"ざんぎょう", src:"overtime"},
      {trg:"いくきゅう", src:"parental leave"},
      {trg:"ストレス", src:"stress"}
    ]},

    {type:"fb", s:"{1}をかんがえています。あたらしいかんきょうでちょうせんしたいです。\n(I am considering changing jobs. I want to challenge myself in a new environment.)", a:"てんしょく", opts:["てんしょく","しつぎょう","ていねん","いくきゅう"], sSrc:"I am considering changing jobs. I want to challenge myself in a new environment.",
     hint:"The word for voluntarily moving to a new company or career."},

    {type:"mc", q:"はたらきかたかいかく is:", opts:["Government reform of work culture and practices","A new type of job","A salary increase program","A retirement plan"], ans:"Government reform of work culture and practices",
     hint:"This 2019 law changed overtime limits and working conditions in Japan."}
  ]
};
export default BATCH6_L1;
