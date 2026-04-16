// Unit 25 Batch 2 Lesson 4: プレゼンとめいし (Presentations & Business Cards)
const BATCH2_L_4 = {
  id:"jav2_u25l_b2_4", title:"プレゼンとめいし", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"プレゼンとめいし",
     desc:"Japanese business presentations and networking follow specific cultural protocols. Learn vocabulary for slides, demonstrations, business card exchange, and audience engagement. These skills are critical for anyone working in a Japanese corporate environment.",
     goals:["Use presentation vocabulary","Master business card exchange terms","Navigate formal self-introduction language"]},

    {type:"teach", trg:"スライド", src:"slide (presentation)", pos:"noun", gender:null,
     note:"Loanword from English. スライドをつくる = to make slides.\nスライドをめくる = to advance slides.",
     example:"A: スライドをじゅんびしましたので、ごらんください。\nB: はっきりみえます。つづけてください。",
     exampleSrc:"A: I have prepared slides, so please take a look.\nB: I can see them clearly. Please continue.",
     funFact:"While PowerPoint dominates globally, Japanese business presentations have unique characteristics. Slides tend to be text-heavy compared to Western minimalist styles. The phrase えらべんスライド (bullet-point slide) coexists with infographic-style layouts. Companies like Toyota pioneered the A3ほうこくしょ (A3 report), a one-page visual summary."},

    {type:"teach", trg:"めいし", src:"business card / name card", pos:"noun", gender:null,
     note:"Kanji: 名刺. めいしこうかん = business card exchange.\nめいしいれ = business card holder.",
     example:"A: めいしをおわたしいたします。\nB: ちょうだいいたします。",
     exampleSrc:"A: Allow me to give you my business card.\nB: I gratefully receive it.",
     funFact:"名刺 exchange is a ritual in Japanese business. Cards are presented with both hands, text facing the receiver. You study the card carefully, never write on it or put it in your pocket immediately. During meetings, cards are arranged on the table in the seating order. A messy めいしいれ (card holder) signals disorganization."},

    {type:"teach", trg:"じこしょうかい", src:"self-introduction", pos:"noun", gender:null,
     note:"Kanji: 自己紹介. じこしょうかいする = to introduce oneself.\nA fundamental skill in Japanese business and social life.",
     example:"A: では、じこしょうかいをおねがいします。\nB: はじめまして。ABCしゃのたなかともうします。",
     exampleSrc:"A: Now then, please introduce yourself.\nB: How do you do. I am Tanaka from ABC Company.",
     funFact:"自己紹介 is practiced from childhood in Japan. On the first day of school, work, or any group activity, じこしょうかい is expected. The standard format includes: name, affiliation, and a brief personal detail. Japanese people often rehearse their じこしょうかい to ensure it is polished. In business, your company name typically comes before your personal name."},

    {type:"mc", q:"めいしこうかん requires:", opts:["Presenting the card with both hands, text facing the receiver","Tossing the card casually across the table","Writing notes on the card during the meeting","Keeping your card in your wallet until asked"], ans:"Presenting the card with both hands, text facing the receiver",
     hint:"Japanese business c... exchange is a formal ritual showing respect through physical gestures."},

    {type:"teach", trg:"えいぎょう", src:"sales / business development", pos:"noun", gender:null,
     note:"Kanji: 営業. えいぎょうぶ = sales department.\nえいぎょうマン = salesperson.",
     example:"A: えいぎょうせいせきがこんげつもくひょうをたっせいしました。\nB: すばらしい！チームのどりょくのけっかですね。",
     exampleSrc:"A: Sales performance achieved this month's target.\nB: Wonderful! It is the result of the team's effort.",
     funFact:"営業 uses 営 (manage/operate) and 業 (business/industry). Japanese えいぎょう culture emphasizes relationship-building over hard selling. The concept of ルートえいぎょう (route sales, visiting clients regularly) builds long-term trust. えいぎょうマン (salesperson) is a respected profession, and top performers are celebrated at annual company events."},

    {type:"teach", trg:"もくひょう", src:"target / goal / objective", pos:"noun", gender:null,
     note:"Kanji: 目標. もくひょうをたてる = to set a target.\nえいぎょうもくひょう = sales target.",
     example:"A: こんきのもくひょうはなんですか？\nB: うりあげをじゅうパーセントぞうかさせることです。",
     exampleSrc:"A: What is this quarter's target?\nB: To increase sales by ten percent.",
     funFact:"目標 uses 目 (eye) and 標 (mark/sign). A target is an 'eye-mark' to aim at. While もくてき (purpose) asks 'why,' もくひょう (target) asks 'how much/by when.' Japanese management by objectives (目標管理, mokuhyou kanri) sets clear, measurable もくひょう for each employee, reviewed quarterly or annually."},

    {type:"teach", trg:"うりあげ", src:"sales / revenue / turnover", pos:"noun", gender:null,
     note:"Kanji: 売上. うりあげだか = sales figures.\nうりあげがのびる = sales grow.",
     example:"A: うりあげがぜんねんひにじゅうパーセントぞうかしました。\nB: いちばのかくだいがきいていますね。",
     exampleSrc:"A: Sales increased 20% compared to the previous year.\nB: Market expansion is contributing.",
     funFact:"売上 combines 売 (sell) and 上 (up). Sales literally 'go up' when business is good. In Japanese companies, うりあげ numbers are closely tracked and publicly shared within teams. Monthly, quarterly, and annual うりあげ reports drive strategic decisions. The phrase うりあげナンバーワン (number one in sales) is a badge of honor."},

    {type:"fb", s:"こんきの{1}はうりあげをじゅうパーセントぞうかさせることです。\n(This quarter's target is to increase sales by 10%.)", a:"もくひょう", opts:["もくひょう","もくてき","けっか","せいか"], sSrc:"This quarter's target is to increase sales by 10%.",
     hint:"The noun for a measurable goal or target, answering 'how much' or 'by when.'"},

    {type:"teach", trg:"きゃくさき", src:"client / customer (visited)", pos:"noun", gender:null,
     note:"Kanji: 客先. きゃくさきをほうもんする = to visit a client.\nUsed when going to the client's location.",
     example:"A: きょうはきゃくさきでうちあわせがあります。\nB: なんじにもどりますか？",
     exampleSrc:"A: I have a meeting at a client's office today.\nB: What time will you return?",
     funFact:"客先 uses 客 (guest/customer) and 先 (destination/ahead). In Japanese business, visiting きゃくさき (going to the client) is more common than asking clients to come to you. This reflects the service-oriented culture where the provider goes to the customer. The phrase きゃくさきでのたいおう (handling things at the client's site) is a core business skill."},

    {type:"teach", trg:"うちあわせ", src:"meeting / consultation / coordination meeting", pos:"noun", gender:null,
     note:"Kanji: 打ち合わせ. Less formal than かいぎ.\nうちあわせをする = to have a coordination meeting.",
     example:"A: あしたのうちあわせのじかんをかくにんさせてください。\nB: ごぜんじゅうじからでいかがですか？",
     exampleSrc:"A: Let me confirm the time for tomorrow's meeting.\nB: How about from 10 AM?",
     funFact:"打ち合わせ literally means 'striking together,' from the music term for synchronizing rhythms. Unlike the formal かいぎ (conference), うちあわせ is a working meeting to coordinate details and align plans. It is typically smaller, less structured, and more collaborative. Many decisions in Japanese companies happen in うちあわせ rather than formal かいぎ."},

    {type:"teach", trg:"ぜんねんひ", src:"compared to the previous year / year-on-year", pos:"noun", gender:null,
     note:"Kanji: 前年比. ぜんねん (previous year) + ひ (ratio/comparison).\nぜんげつひ = month-on-month.",
     example:"A: ぜんねんひでうりあげがぞうかしました。\nB: どのくらいぞうかしましたか？",
     exampleSrc:"A: Sales increased compared to last year.\nB: By how much did they increase?",
     funFact:"前年比 is a standard business metric. Japanese financial reporting constantly references ぜんねんひ to show growth or decline. The suffix 比 (comparison) appears in many business terms: ぜんきひ (compared to previous period), たいぜんねんひ (versus previous year). These comparisons drive quarterly earnings reports and stock market analysis."},

    {type:"mc", q:"うちあわせ is different from かいぎ because:", opts:["It is less formal and more collaborative","It is more formal and structured","It requires written minutes","It only happens with clients"], ans:"It is less formal and more collaborative",
     hint:"This working meeting is for coordination and alignment, unlike the f... conference setting."},

    {type:"fb", s:"きょうは{1}でうちあわせがあります。\n(I have a meeting at a client's office today.)", a:"きゃくさき", opts:["きゃくさき","かいしゃ","ほんしゃ","じむしょ"], sSrc:"I have a meeting at a client's office today.",
     hint:"The compound noun for a client's location that you visit for business."},

    {type:"match", pairs:[{trg:"めいし",src:"business card"},{trg:"じこしょうかい",src:"self-introduction"},{trg:"えいぎょう",src:"sales"},{trg:"うちあわせ",src:"coordination meeting"}]},

    {type:"fb", s:"うりあげがぜんねん{1}にじゅうパーセントぞうかしました。\n(Sales increased 20% compared to the previous year.)", a:"ひ", opts:["ひ","から","より","まで"], sSrc:"Sales increased 20% compared to the previous year.",
     hint:"The suffix meaning 'ratio' or 'comparison,' attached after the time period being compared against."},

    {type:"match", pairs:[{trg:"うりあげ",src:"sales/revenue"},{trg:"もくひょう",src:"target/goal"},{trg:"きゃくさき",src:"client (visited)"},{trg:"ぜんねんひ",src:"year-on-year"}]},

    {type:"mc", q:"じこしょうかい in Japanese business typically includes:", opts:["Only your name","Your company name, department, then personal name","Your personal hobbies first","Your salary information"], ans:"Your company name, department, then personal name",
     hint:"In Japanese business culture, your organizational affiliation comes before your individual identity."},
  ]
};
export default BATCH2_L_4;
