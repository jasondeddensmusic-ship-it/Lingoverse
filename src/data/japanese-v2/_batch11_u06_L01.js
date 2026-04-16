// Batch 11 – Unit 06 (A1.2 Family): Days of the Month
const BATCH11_L1 = {
  id:"jav2_u06l_b11_1", title:"ひづけ", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"ひづけ",
     desc:"Learn how to say dates in Japanese. The first ten days of the month use special native Japanese readings that must be memorized individually.",
     goals:["Say dates from the 1st to the 31st","Use the special readings for days 1-10","Ask and tell dates for birthdays and events"]},

    {type:"teach", trg:"ついたち", src:"the 1st (of the month)", pos:"noun", gender:null,
     note:"Unique reading. Does NOT follow the number + にち pattern.\nいちにち means 'one day' (duration), not 'the 1st.'",
     example:"A: いちがつついたちはなんのひですか？\nB: おしょうがつです。",
     exampleSrc:"A: What day is January 1st?\nB: It is New Year's Day.",
     funFact:"ついたち comes from つきたち (moon rising), referring to the first day the new moon appears. This ancient word survived from when Japan used a lunar calendar. It is one of the most commonly misspelled words even for native speakers."},

    {type:"teach", trg:"ふつか", src:"the 2nd", pos:"noun", gender:null,
     note:"Special reading. Also means 'two days' (duration).\nふつかかん = for two days.",
     example:"A: にがつふつかはなんのひですか？\nB: せつぶんです。",
     exampleSrc:"A: What day is February 2nd?\nB: It is Setsubun.",
     funFact:"ふつか uses the native Japanese counting system. The pattern for days 2-10 is: native number + か. ふた (two) becomes ふつ due to sound shifts. These readings predate Chinese number influence and are among the oldest words in Japanese."},

    {type:"teach", trg:"みっか", src:"the 3rd", pos:"noun", gender:null,
     note:"Special reading. Also means 'three days.'\nさんがつみっか = March 3rd.",
     example:"A: さんがつみっかはひなまつりです。\nB: おんなのこのおまつりですね。",
     exampleSrc:"A: March 3rd is Hinamatsuri.\nB: It is the girls' festival.",
     funFact:"March 3rd (ひなまつり) is the Doll Festival where families display elaborate tiered doll sets representing the imperial court. Girls receive special meals with chirashi sushi and hina-arare rice crackers. The festival has been celebrated for over 1,000 years."},

    {type:"teach", trg:"よっか", src:"the 4th", pos:"noun", gender:null,
     note:"Special reading. Uses よ (not し) to avoid death association.\nAlso means 'four days.'",
     example:"A: よっかにかいぎがあります。\nB: なんじからですか？",
     exampleSrc:"A: There is a meeting on the 4th.\nB: From what time?",
     funFact:"Even in dates, the number 4 avoids the し reading. よっか uses よ (the native reading) plus か. Some Japanese calendars still highlight the 4th as a day to be cautious, though this superstition is fading among younger generations."},

    {type:"teach", trg:"いつか", src:"the 5th", pos:"noun", gender:null,
     note:"Special reading. Do not confuse with いつか (someday).\nContext makes the meaning clear.",
     example:"A: ごがついつかはこどものひです。\nB: おとこのこのおまつりですね。",
     exampleSrc:"A: May 5th is Children's Day.\nB: It is the boys' festival.",
     funFact:"いつか (the 5th) and いつか (someday) are written the same in hiragana but have different pitch accents. May 5th (こどものひ) features koinobori (carp streamers) flying outside homes with sons. Carp swimming upstream symbolize strength and determination."},

    {type:"teach", trg:"むいか", src:"the 6th", pos:"noun", gender:null,
     note:"Special reading. む comes from native むつ (six).\nAlso means 'six days.'",
     example:"A: むいかにりょこうにいきます。\nB: どこにいきますか？",
     exampleSrc:"A: I am going on a trip on the 6th.\nB: Where are you going?",
     funFact:"The native Japanese number むつ (six) becomes む in the date form. This shortening pattern also appears in ようか (8th, from やつ) and とおか (10th, from とお). These compressed forms developed for speed in spoken calendar references."},

    {type:"teach", trg:"なのか", src:"the 7th", pos:"noun", gender:null,
     note:"Special reading. なな (seven) becomes なの + か.\nしちがつなのか = July 7th (Tanabata).",
     example:"A: しちがつなのかはたなばたです。\nB: おほしさまにおねがいしましょう。",
     exampleSrc:"A: July 7th is Tanabata.\nB: Let's make wishes to the stars.",
     funFact:"Tanabata (July 7th) celebrates the annual meeting of two star-crossed lovers, Orihime and Hikoboshi, separated by the Milky Way. People write wishes on colorful paper strips (短冊) and hang them on bamboo branches. It is one of Japan's most romantic festivals."},

    {type:"teach", trg:"ようか", src:"the 8th", pos:"noun", gender:null,
     note:"Special reading. やつ (eight) becomes よう + か.\nAlso means 'eight days.'",
     example:"A: ようかにびょういんにいきます。\nB: だいじょうぶですか？",
     exampleSrc:"A: I am going to the hospital on the 8th.\nB: Are you okay?",
     funFact:"The number 8 (はち) is considered very lucky in Japan because the kanji 八 widens at the bottom, symbolizing growing prosperity. Many businesses choose addresses or phone numbers containing 8. Toyota's luxury brand Lexus chose 8 for its LS 800 series."},

    {type:"teach", trg:"ここのか", src:"the 9th", pos:"noun", gender:null,
     note:"Special reading. ここの comes from native ここのつ (nine).\nAlso means 'nine days.'",
     example:"A: くがつここのかはくがつくにちですか？\nB: いいえ、ただのもくようびです。",
     exampleSrc:"A: Is September 9th a national holiday?\nB: No, it is just a Thursday.",
     funFact:"September 9th was historically ちょうようのせっく (Chrysanthemum Festival), one of Japan's five traditional seasonal festivals. The number 9 was considered the strongest yang number in Chinese philosophy. Today the festival is largely forgotten but chrysanthemum viewing persists."},

    {type:"teach", trg:"とおか", src:"the 10th", pos:"noun", gender:null,
     note:"Special reading. とお (ten) + か.\nAfter the 10th, dates use number + にち: じゅういちにち = 11th.",
     example:"A: じゅうがつとおかはたいいくのひです。\nB: うんどうかいがありますね。",
     exampleSrc:"A: October 10th is Sports Day.\nB: There will be a sports festival.",
     funFact:"After the 10th, dates become regular: じゅういちにち (11th), じゅうににち (12th), etc. The only exceptions are はつか (20th) and, in some dialects, みそか (30th). はつか uses the same native number system as the first ten days."},

    {type:"teach", trg:"はつか", src:"the 20th", pos:"noun", gender:null,
     note:"One final irregular date. はつか, not にじゅうにち.\nAlso means 'twenty days.'",
     example:"A: はつかにしけんがあります。\nB: がんばってください！",
     exampleSrc:"A: There is an exam on the 20th.\nB: Good luck!",
     funFact:"はつか is the last surviving native-number date after the 10th. It comes from はた (an old word for twenty). はつかねずみ (house mouse) literally means 'twenty-day mouse' because mice supposedly have a 20-day pregnancy. This quirky word lives on in biology class."},

    {type:"teach", trg:"たんじょうび", src:"birthday", pos:"noun", gender:null,
     note:"たんじょう (birth) + び (day). Polite: おたんじょうび.\nおたんじょうびおめでとう = Happy birthday.",
     example:"A: たんじょうびはいつですか？\nB: さんがつじゅうごにちです。",
     exampleSrc:"A: When is your birthday?\nB: It is March 15th.",
     funFact:"In Japan, everyone traditionally aged one year on New Year's Day (数え年 counting age) rather than on individual birthdays. This system was officially replaced in 1950, but some traditions still use it, especially for Shichi-Go-San (the 7-5-3 children's ceremony)."},

    // Quiz steps
    {type:"mc", q:"1がつ1にちはにほんごでなんですか？",
     opts:["いちがつついたち","いちがついちにち","いちがつはじめ","いちがつひとひ"],
     ans:"いちがつついたち",
     hint:"The 1st of the month has a special reading that comes from an ancient word meaning 'moon rising.'"},

    {type:"fb", s:"ごがつ{1}はこどものひです。",
     a:["いつか"],
     opts:["いつか","ごにち","ごか","いちか"],
     hint:"May 5th uses the special native reading for the 5th day. It is the same word as 'someday' but with different context.",
     sSrc:"May {1} is Children's Day."},

    {type:"match", pairs:[
      {trg:"ふつか", src:"2nd"},
      {trg:"よっか", src:"4th"},
      {trg:"なのか", src:"7th"},
      {trg:"とおか", src:"10th"}
    ]},

    {type:"mc", q:"11にちからはどんなパターンになりますか？",
     opts:["Number + にち","Number + か","Number + ひ","Native readings continue"],
     ans:"Number + にち",
     hint:"After the 10th, the date system becomes regular. Only the 20th (はつか) is an exception."},

    {type:"fb", s:"たんじょうびは{1}ですか？",
     a:["いつ"],
     opts:["いつ","なに","どこ","だれ"],
     hint:"You are asking WHEN someone's birthday is. Use the question word for time.",
     sSrc:"When is your birthday?"},

    {type:"mc", q:"「はつか」はなんにちですか？",
     opts:["20th","8th","1st","14th"],
     ans:"20th",
     hint:"This is the last irregular date after the 10th. It uses an ancient word for twenty."}
  ]
};
export default BATCH11_L1;
