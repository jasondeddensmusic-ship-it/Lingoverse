// Batch 4 — Unit 07 Lesson 1: Days of the Week & Months
const BATCH4_L_1 = {
  id:"jav2_u07l_b4_1", title:"ようびとつき", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"ようびとつき",
     desc:"Master the days of the week and months of the year. Japanese weekday names come from celestial bodies, and months simply use numbers.",
     goals:["Say all seven days of the week","Say all twelve months","Talk about schedules and dates"]},

    {type:"teach", trg:"げつようび", src:"Monday", pos:"noun", gender:null,
     note:"Kanji: 月曜日. Moon + day-of-week + day.",
     example:"げつようびはしごとがあります。",
     exampleSrc:"I have work on Monday.",
     funFact:"Monday is Moon Day in both Japanese and English. Japanese weekdays follow the same celestial body pattern as English: Moon, Fire (Mars), Water (Mercury), Wood (Jupiter), Gold (Venus), Earth (Saturn), Sun."},

    {type:"teach", trg:"かようび", src:"Tuesday", pos:"noun", gender:null,
     note:"Kanji: 火曜日. Fire + day-of-week + day.",
     example:"かようびにかいぎがあります。",
     exampleSrc:"There is a meeting on Tuesday.",
     funFact:"Fire Day corresponds to Mars (the red planet of fire). In French, Tuesday is 'mardi' (Mars day). The Japanese and European day names share the same planetary naming system inherited from Babylon."},

    {type:"teach", trg:"すいようび", src:"Wednesday", pos:"noun", gender:null,
     note:"Kanji: 水曜日. Water + day-of-week + day.",
     example:"すいようびはやすみです。",
     exampleSrc:"Wednesday is my day off.",
     funFact:"Water Day corresponds to Mercury. In French, 'mercredi' (Mercury day). Some Japanese companies give Wednesday off as 'no overtime day' to promote work-life balance."},

    {type:"teach", trg:"もくようび", src:"Thursday", pos:"noun", gender:null,
     note:"Kanji: 木曜日. Wood/Tree + day-of-week + day.",
     example:"もくようびにえいがをみます。",
     exampleSrc:"I watch a movie on Thursday.",
     funFact:"Wood Day corresponds to Jupiter. The element wood represents growth and life in the Chinese five elements (五行). Thursday's connection to Jupiter the giant planet links to the expansive nature of wood."},

    {type:"teach", trg:"きんようび", src:"Friday", pos:"noun", gender:null,
     note:"Kanji: 金曜日. Gold/Metal + day-of-week + day.",
     example:"きんようびのよるにのみにいきます。",
     exampleSrc:"I go drinking on Friday night.",
     funFact:"Friday night in Japan is called 花の金曜日 (hana no kinyoubi, Flower Friday) or shortened to 花金 (hanakin). It is the most popular night for after-work socializing, karaoke, and izakaya gatherings."},

    {type:"teach", trg:"どようび", src:"Saturday", pos:"noun", gender:null,
     note:"Kanji: 土曜日. Earth/Soil + day-of-week + day.",
     example:"どようびにサッカーをします。",
     exampleSrc:"I play soccer on Saturday.",
     funFact:"Until 2002, Japanese schools had classes on Saturday mornings (半ドン handong, half-day). The shift to a five-day school week was controversial. Some private schools still hold Saturday classes."},

    {type:"teach", trg:"にちようび", src:"Sunday", pos:"noun", gender:null,
     note:"Kanji: 日曜日. Sun + day-of-week + day.",
     example:"にちようびはゆっくりやすみます。",
     exampleSrc:"I rest and relax on Sunday.",
     funFact:"Sunday is Sun Day in both languages. Japanese calendars traditionally start the week on Sunday (日), not Monday. The weekend is called 週末 (shuumatsu, week-end), identical in concept to English."},

    {type:"teach", trg:"いちがつ", src:"January", pos:"noun", gender:null,
     note:"Kanji: 一月. One + month. Japanese months are simply numbered.",
     example:"いちがつはさむいです。",
     exampleSrc:"January is cold.",
     funFact:"Japanese months are beautifully simple: just number + gatsu. No need to memorize 12 separate names. Old Japanese had poetic month names like 睦月 (mutsuki, month of affection) for January, but these are rarely used today."},

    {type:"teach", trg:"しがつ", src:"April", pos:"noun", gender:null,
     note:"Kanji: 四月. Note: し not よん. April is when the Japanese year begins.",
     example:"しがつにさくらがさきます。",
     exampleSrc:"Cherry blossoms bloom in April.",
     funFact:"April is the most important month in Japan. The school year, fiscal year, and many jobs start in April. New suits, new backpacks, and cherry blossom viewing all happen at once. It is the month of fresh starts."},

    {type:"teach", trg:"はちがつ", src:"August", pos:"noun", gender:null,
     note:"Kanji: 八月. Eight + month. Peak of Japanese summer.",
     example:"はちがつはとてもあついです。",
     exampleSrc:"August is very hot.",
     funFact:"August is the heart of obon season, when spirits of ancestors return. Many Japanese travel to their hometowns, creating massive traffic jams. Fireworks festivals (花火大会) happen almost every weekend across the country."},

    {type:"teach", trg:"じゅうにがつ", src:"December", pos:"noun", gender:null,
     note:"Kanji: 十二月. Twelve + month. Year-end preparations.",
     example:"じゅうにがつはいそがしいです。",
     exampleSrc:"December is busy.",
     funFact:"December in Japan means bonenkai (忘年会, forget-the-year parties). Companies and friend groups hold drinking parties to forget the year's troubles. Christmas Eve is considered a romantic date night, not a family holiday."},

    {type:"teach", trg:"たんじょうび", src:"birthday", pos:"noun", gender:null,
     note:"Kanji: 誕生日. Birth + day. Important personal celebration.",
     example:"たんじょうびはなんがつですか？",
     exampleSrc:"What month is your birthday?",
     funFact:"Before the Meiji era, Japanese people did not celebrate individual birthdays. Everyone turned a year older on New Year's Day (数え年 kazoe-doshi). Individual birthday celebrations were adopted from Western culture in the 20th century."},

    {type:"teach", trg:"きねんび", src:"anniversary / memorial day", pos:"noun", gender:null,
     note:"Kanji: 記念日. Record + thought + day.",
     example:"けっこんきねんびは六月です。",
     exampleSrc:"Our wedding anniversary is in June.",
     funFact:"Japan has many unique memorial days: Pocky Day (11/11, sticks look like 1s), Good Teeth Day (11/8, ii ha), and even Meat Day (every 29th, ni-ku sounds like meat). Japanese love wordplay-based holidays."},

    {type:"mc", q:"Which day is 金曜日?",
     opts:["Friday","Monday","Saturday","Wednesday"], ans:"Friday",
     hint:"The 'gold/metal' day, associated with Venus and end-of-week fun."},

    {type:"fb", s:"{1}にさくらがさきます。", a:"しがつ",
     sSrc:"Cherry blossoms bloom in April.",
     opts:["しがつ","いちがつ","はちがつ","じゅうにがつ"],
     hint:"The month when the Japanese school year begins and flowers bloom."},

    {type:"match", pairs:[
      {trg:"げつようび", src:"Monday"},
      {trg:"すいようび", src:"Wednesday"},
      {trg:"きんようび", src:"Friday"},
      {trg:"にちようび", src:"Sunday"}
    ]},

    {type:"mc", q:"How are Japanese months named?",
     opts:["number + gatsu","poetic names","season names","animal names"], ans:"number + gatsu",
     hint:"January is literally 'month one,' February 'month two,' etc."},

    {type:"fb", s:"{1}はなんがつですか？", a:"たんじょうび",
     sSrc:"What month is your birthday?",
     opts:["たんじょうび","きねんび","やすみ","しゅうまつ"],
     hint:"The annual celebration of the day you were born."},

    {type:"mc", q:"Which month is はちがつ?",
     opts:["August","March","October","June"], ans:"August",
     hint:"Eight + month, the peak of hot Japanese summer."},

    {type:"mc", q:"What happens in December in Japan?",
     opts:["bonenkai (year-end parties)","cherry blossom viewing","school starts","golden week"], ans:"bonenkai (year-end parties)",
     hint:"P... to 'forget the y...' are a December tradition in Japan."}
  ]
};
export default BATCH4_L_1;
