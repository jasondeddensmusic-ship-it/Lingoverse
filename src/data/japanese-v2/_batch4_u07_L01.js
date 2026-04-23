// Batch 4. Unit 07 Lesson 1: Days of the Week & Months
const BATCH4_L_1 = {
  id:"jav2_u07l_b4_1", title:"曜日(ようび)と月(つき)", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"曜日(ようび)と月(つき)",
     desc:"Master the days of the week and months of the year. Japanese weekday names come from celestial bodies, and months simply use numbers.",
     goals:["Say all seven days of the week","Say all twelve months","Talk about schedules and dates"]},

    {type:"teach", trg:"月曜日(げつようび)", src:"Monday", pos:"noun", gender:null,
     note:"Moon + day-of-week + day.",
     example:"月曜日(げつようび)は仕事(しごと)があります。",
     exampleSrc:"I have work on Monday.",
     funFact:"Monday is Moon Day in both Japanese and English. Japanese weekdays follow the same celestial body pattern as English: Moon, Fire (Mars), Water (Mercury), Wood (Jupiter), Gold (Venus), Earth (Saturn), Sun."},

    {type:"teach", trg:"火曜日(かようび)", src:"Tuesday", pos:"noun", gender:null,
     note:"Fire + day-of-week + day.",
     example:"火曜日(かようび)に会議(かいぎ)があります。",
     exampleSrc:"There is a meeting on Tuesday.",
     funFact:"Fire Day corresponds to Mars (the red planet of fire). In French, Tuesday is 'mardi' (Mars day). The Japanese and European day names share the same planetary naming system inherited from Babylon."},

    {type:"teach", trg:"水曜日(すいようび)", src:"Wednesday", pos:"noun", gender:null,
     note:"Water + day-of-week + day.",
     example:"水曜日(すいようび)は休(やす)みです。",
     exampleSrc:"Wednesday is my day off.",
     funFact:"Water Day corresponds to Mercury. In French, 'mercredi' (Mercury day). Some Japanese companies give Wednesday off as 'no overtime day' to promote work-life balance."},

    {type:"teach", trg:"木曜日(もくようび)", src:"Thursday", pos:"noun", gender:null,
     note:"Wood/Tree + day-of-week + day.",
     example:"木曜日(もくようび)に映画(えいが)を見(み)ます。",
     exampleSrc:"I watch a movie on Thursday.",
     funFact:"Wood Day corresponds to Jupiter. The element wood represents growth and life in the Chinese five elements (五行). Thursday's connection to Jupiter the giant planet links to the expansive nature of wood."},

    {type:"teach", trg:"金曜日(きんようび)", src:"Friday", pos:"noun", gender:null,
     note:"Gold/Metal + day-of-week + day.",
     example:"金曜日(きんようび)の夜(よる)に飲(の)みに行(い)きます。",
     exampleSrc:"I go drinking on Friday night.",
     funFact:"Friday night in Japan is called 花の金曜日 (hana no kinyoubi, Flower Friday) or shortened to 花金 (hanakin). It is the most popular night for after-work socializing, karaoke, and izakaya gatherings."},

    {type:"teach", trg:"土曜日(どようび)", src:"Saturday", pos:"noun", gender:null,
     note:"Earth/Soil + day-of-week + day.",
     example:"土曜日(どようび)にサッカーをします。",
     exampleSrc:"I play soccer on Saturday.",
     funFact:"Until 2002, Japanese schools had classes on Saturday mornings (半ドン handong, half-day). The shift to a five-day school week was controversial. Some private schools still hold Saturday classes."},

    {type:"teach", trg:"日曜日(にちようび)", src:"Sunday", pos:"noun", gender:null,
     note:"Sun + day-of-week + day.",
     example:"日曜日(にちようび)はゆっくり休(やす)みます。",
     exampleSrc:"I rest and relax on Sunday.",
     funFact:"Sunday is Sun Day in both languages. Japanese calendars traditionally start the week on Sunday (日), not Monday. The weekend is called 週末 (shuumatsu, week-end), identical in concept to English."},

    {type:"teach", trg:"一月(いちがつ)", src:"January", pos:"noun", gender:null,
     note:"One + month. Japanese months are simply numbered.",
     example:"一月(いちがつ)は寒(さむ)いです。",
     exampleSrc:"January is cold.",
     funFact:"Japanese months are beautifully simple: just number + gatsu. No need to memorize 12 separate names. Old Japanese had poetic month names like 睦月 (mutsuki, month of affection) for January, but these are rarely used today."},

    {type:"teach", trg:"四月(しがつ)", src:"April", pos:"noun", gender:null,
     note:"Note: し not よん. April is when the Japanese year begins.",
     example:"四月(しがつ)に桜(さくら)が咲(さ)きます。",
     exampleSrc:"Cherry blossoms bloom in April.",
     funFact:"April is the most important month in Japan. The school year, fiscal year, and many jobs start in April. New suits, new backpacks, and cherry blossom viewing all happen at once. It is the month of fresh starts."},

    {type:"teach", trg:"八月(はちがつ)", src:"August", pos:"noun", gender:null,
     note:"Eight + month. Peak of Japanese summer.",
     example:"八月(はちがつ)はとても暑(あつ)いです。",
     exampleSrc:"August is very hot.",
     funFact:"August is the heart of obon season, when spirits of ancestors return. Many Japanese travel to their hometowns, creating massive traffic jams. Fireworks festivals (花火大会) happen almost every weekend across the country."},

    {type:"teach", trg:"十二月(じゅうにがつ)", src:"December", pos:"noun", gender:null,
     note:"Twelve + month. Year-end preparations.",
     example:"十二月(じゅうにがつ)は忙(いそが)しいです。",
     exampleSrc:"December is busy.",
     funFact:"December in Japan means bonenkai (忘年会, forget-the-year parties). Companies and friend groups hold drinking parties to forget the year's troubles. Christmas Eve is considered a romantic date night, not a family holiday."},

    {type:"teach", trg:"誕生日(たんじょうび)", src:"birthday", pos:"noun", gender:null,
     note:"Birth + day. Important personal celebration.",
     example:"誕生日(たんじょうび)は何月(なんがつ)ですか？",
     exampleSrc:"What month is your birthday?",
     funFact:"Before the Meiji era, Japanese people did not celebrate individual birthdays. Everyone turned a year older on New Year's Day (数え年 kazoe-doshi). Individual birthday celebrations were adopted from Western culture in the 20th century."},

    {type:"teach", trg:"記念日(きねんび)", src:"anniversary / memorial day", pos:"noun", gender:null,
     note:"Record + thought + day.",
     example:"結婚(けっこん)記念日(きねんび)は六月(ろくがつ)です。",
     exampleSrc:"Our wedding anniversary is in June.",
     funFact:"Japan has many unique memorial days: Pocky Day (11/11, sticks look like 1s), Good Teeth Day (11/8, ii ha), and even Meat Day (every 29th, ni-ku sounds like meat). Japanese love wordplay-based holidays."},

    {type:"mc", q:"Which day is 金曜日?",
     opts:["Friday","Monday","Saturday","Wednesday"], ans:"Friday",
     hint:"The 'gold/metal' day, associated with Venus and end-of-week fun."},

    {type:"fb", s:"{1}に桜(さくら)が咲(さ)きます。", a:"四月(しがつ)",
     sSrc:"Cherry blossoms bloom in April.",
     opts:["四月(しがつ)","一月(いちがつ)","八月(はちがつ)","十二月(じゅうにがつ)"],
     hint:"The month when the Japanese school year begins and flowers bloom."},

    {type:"match", pairs:[
      {trg:"月曜日(げつようび)", src:"Monday"},
      {trg:"水曜日(すいようび)", src:"Wednesday"},
      {trg:"金曜日(きんようび)", src:"Friday"},
      {trg:"日曜日(にちようび)", src:"Sunday"}
    ,{trg:"記念日(きねんび)",src:"anniversary / memorial day"}]},

    {type:"mc", q:"How are Japanese months named?",
     opts:["animal names","number + gatsu","poetic names","season names"], ans:"number + gatsu",
     hint:"January is literally 'month one,' February 'month two,' etc."},

    {type:"fb", s:"{1}は何月(なんがつ)ですか？", a:"誕生日(たんじょうび)",
     sSrc:"What month is your birthday?",
     opts:["誕生日(たんじょうび)","記念日(きねんび)","休(やす)み","週末(しゅうまつ)"],
     hint:"The annual celebration of the day you were born."},

    {type:"mc", q:"Which month is 八月(はちがつ)?",
     opts:["October","June","August","March"], ans:"August",
     hint:"Eight + month, the peak of hot Japanese summer."},

    {type:"mc", q:"What happens in December in Japan?",
     opts:["cherry blossom viewing","school starts","golden week","bonenkai (year-end parties)"], ans:"bonenkai (year-end parties)",
     hint:"P... to 'forget the y...' are a December tradition in Japan."}
  ,{type:"match",pairs:[{trg:"火曜日(かようび)",src:"Tuesday"},{trg:"木曜日(もくようび)",src:"Thursday"},{trg:"土曜日(どようび)",src:"Saturday"},{trg:"一月(いちがつ)",src:"January"},{trg:"八月(はちがつ)",src:"August"},{trg:"十二月(じゅうにがつ)",src:"December"}]}]
};
export default BATCH4_L_1;
