// Batch 6 – Unit 29 (B2.3 Economy): Employment & Labor Market
const BATCH6_L1 = {
  id:"jav2_u29l_b6_1", title:"こようとろうどう", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"こようとろうどう",
     desc:"Learn vocabulary for employment, labor markets, and workplace issues. These JLPT N2 words are essential for understanding Japanese news, society, and business culture.",
     goals:["Discuss employment types and conditions","Use vocabulary for workplace issues","Navigate job-related conversations"]},

    {type:"teach", trg:"こよう", src:"employment", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようけいやく = employment contract.\nこようする = to employ.",
     example:"A: にほんのこようじょうきょうはどうですか？\nB: しつぎょうりつはひくいですが、ひせいきこようがおおいです。",
     exampleSrc:"A: How is Japan's employment situation?\nB: Unemployment is low, but non-regular employment is high.",
     funFact:"こよう (雇用) is a hot-button topic in Japan. Traditional しゅうしんこよう (lifetime employment) is declining. ひせいきこよう (non-regular employment: part-time, contract, dispatch workers) now covers about 40% of the workforce. This shift creates income inequality and is a major social concern."},

    {type:"teach", trg:"しつぎょう", src:"unemployment", pos:"noun", gender:null,
     note:"Kanji: 失業. しつぎょうりつ = unemployment rate.\nしつぎょうほけん = unemployment insurance.",
     example:"A: しつぎょうりつがじょうしょうしています。\nB: けいざいのえいきょうですね。",
     exampleSrc:"A: The unemployment rate is rising.\nB: It is the impact of the economy.",
     funFact:"Japan's しつぎょうりつ (unemployment rate) has historically been low (2-3%), partly because many people take ひせいき (non-regular) jobs rather than remain unemployed. しつぎょうほけん (unemployment insurance) provides financial support. ハローワーク (Hello Work) is the government employment agency where job seekers register."},

    {type:"teach", trg:"きゅうよ", src:"salary / pay", pos:"noun", gender:null,
     note:"Kanji: 給与. きゅうよめいさい = pay slip.\nDifferent from きゅうりょう (slightly less formal).",
     example:"A: きゅうよはつきにいくらですか？\nB: やくにじゅうごまんえんです。",
     exampleSrc:"A: How much is the monthly salary?\nB: About 250,000 yen.",
     funFact:"Japanese きゅうよ (salary) is typically paid monthly. Average annual salary is about 4.5 million yen. Bonuses (ボーナス/しょうよ) are paid twice yearly (summer and winter) and can equal 2-5 months' salary. Japan's wage growth has been stagnant for decades, a major economic concern called 'lost decades.'"},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"Kanji: 残業. ざんぎょうする = to work overtime.\nサービスざんぎょう = unpaid overtime.",
     example:"A: きょうもざんぎょうですか？\nB: はい、しめきりがちかいので。",
     exampleSrc:"A: Working overtime again today?\nB: Yes, the deadline is approaching.",
     funFact:"ざんぎょう (overtime) has been a controversial topic in Japan. サービスざんぎょう (service overtime = unpaid) was widespread but is now being cracked down on. The 2019 Work Style Reform laws (はたらきかたかいかく) cap overtime at 45 hours/month. かろうし (death from overwork) pushed these legal changes."},

    {type:"teach", trg:"てんしょく", src:"changing jobs / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job change websites.",
     example:"A: てんしょくをかんがえていますか？\nB: はい、あたらしいかんきょうでちょうせんしたいです。",
     exampleSrc:"A: Are you considering changing jobs?\nB: Yes, I want to challenge myself in a new environment.",
     funFact:"てんしょく (job-changing) was once taboo in Japan, where しゅうしんこよう (lifetime employment) was the norm. Now it is increasingly common, especially among younger workers. てんしょくエージェント (recruitment agencies) and sites like リクナビ and doda help. The phrase てんしょくかつどう (job-hunting activity) is now a normal part of career planning."},

    {type:"mc", q:"サービスざんぎょう means:", opts:["Unpaid overtime","A service job","Part-time work","A holiday bonus"], ans:"Unpaid overtime",
     hint:"This term combines 'service' (free) with 'o...,' meaning working extra without pay."},

    {type:"teach", trg:"ていねんたいしょく", src:"mandatory retirement", pos:"noun", gender:null,
     note:"Kanji: 定年退職. ていねん = retirement age (usually 60-65).\nたいしょくきん = retirement allowance.",
     example:"A: おとうさんはらいねんていねんたいしょくです。\nB: なにかけいかくはありますか？",
     exampleSrc:"A: My father will reach mandatory retirement next year.\nB: Does he have any plans?",
     funFact:"Japan's ていねん (mandatory retirement age) is being raised from 60 to 65 as the population ages. Many retirees continue working (さいこよう, re-employment) at reduced salaries. With the world's oldest population, Japan faces a severe labor shortage (じんてぶそく). The government encourages extending working lives."},

    {type:"teach", trg:"じんざい", src:"human resources / talented personnel", pos:"noun", gender:null,
     note:"Kanji: 人材. じんざいかいはつ = human resource development.\nグローバルじんざい = global talent.",
     example:"A: ゆうしゅうなじんざいのかくほがかだいです。\nB: がいこくじんのさいようもかんがえるべきです。",
     exampleSrc:"A: Securing excellent talent is a challenge.\nB: We should also consider hiring foreigners.",
     funFact:"じんざい (人材) uses 材 (timber/material), treating people as valuable raw material for organizations. An alternative writing 人財 (using 財 = treasure) emphasizes people as organizational treasures. Japan's declining birthrate creates fierce competition for じんざい, with companies offering better benefits to attract workers."},

    {type:"teach", trg:"いくきゅう", src:"parental leave", pos:"noun", gender:null,
     note:"Kanji: 育休. Short for いくじきゅうぎょう (childcare leave).\nいくきゅうをとる = to take parental leave.",
     example:"A: おっとがいくきゅうをとることにしました。\nB: すばらしいですね。さいきんはだんせいのいくきゅうもふえていますね。",
     exampleSrc:"A: My husband decided to take parental leave.\nB: That is great. Male parental leave is increasing recently.",
     funFact:"Japan's いくきゅう law is generous on paper (up to one year, with benefits), but actual usage, especially by men, has been historically low (about 14% of men, vs. 85% of women). The government aims to raise male いくきゅう rates. Companies that promote いくきゅう are recognized as イクメン企業 (ikumen companies, where ikumen = childcare men)."},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"Katakana loanword. ストレスがたまる = stress accumulates.\nストレスかいしょう = stress relief.",
     example:"A: さいきんしごとのストレスがたまっています。\nB: たまにはリフレッシュしたほうがいいですよ。",
     exampleSrc:"A: Work stress has been building up recently.\nB: You should refresh yourself once in a while.",
     funFact:"ストレス is a major workplace topic in Japan. Since 2015, companies with 50+ employees must conduct annual ストレスチェック (stress checks). メンタルヘルス (mental health) awareness is growing but stigma remains. ストレスかいしょう methods include onsen, karaoke, and nomikai (drinking parties)."},

    {type:"fb", s:"にほんの{1}りつはひくいです。\n(Japan's unemployment rate is low.)", a:"しつぎょう", opts:["しつぎょう","こよう","ざんぎょう","てんしょく"], sSrc:"Japan's unemployment rate is low.",
     hint:"The word meaning being without a job, combined with りつ (rate)."},

    {type:"teach", trg:"はたらきかた", src:"work style / way of working", pos:"noun", gender:null,
     note:"はたらく + かた (way). はたらきかたかいかく = work style reform.\nあたらしいはたらきかた = new work styles.",
     example:"A: はたらきかたかいかくでなにがかわりましたか？\nB: ざんぎょうじかんのじょうげんがきびしくなりました。",
     exampleSrc:"A: What changed with work style reform?\nB: The overtime hour limits became stricter.",
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
