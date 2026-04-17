// Batch 11 – Unit 06 (A1.2 Family): Days of the Month
const BATCH11_L1 = {
  id:"jav2_u06l_b11_1", title:"日付(ひづけ)", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"日付(ひづけ)",
     desc:"Learn how to say dates in Japanese. The first ten days of the month use special native Japanese readings that must be memorized individually.",
     goals:["Say dates from the 1st to the 31st","Use the special readings for days 1-10","Ask and tell dates for birthdays and events"]},

    {type:"teach", trg:"ついたち", src:"the 1st (of the month)", pos:"noun", gender:null,
     note:"Unique reading. Does NOT follow the number + にち pattern.\n一日(いちにち) means 'one day' (duration), not 'the 1st.'",
     example:"A: 一月(いちがつ)ついたちはなんの日(ひ)ですか？\nB: お正月(しょうがつ)です。",
     exampleSrc:"A: What day is January 1st?\nB: It is New Year's Day.",
     funFact:"ついたち comes from つきたち (moon rising), referring to the first day the new moon appears. This ancient word survived from when Japan used a lunar calendar. It is one of the most commonly misspelled words even for native speakers."},

    {type:"teach", trg:"二日(ふつか)", src:"the 2nd", pos:"noun", gender:null,
     note:"Special reading. Also means 'two days' (duration).\n二日間(ふつかかん) = for two days.",
     example:"A: 二月(にがつ)二日(ふつか)はなんの日(ひ)ですか？\nB: 節分(せつぶん)です。",
     exampleSrc:"A: What day is February 2nd?\nB: It is Setsubun.",
     funFact:"二日(ふつか) uses the native Japanese counting system. The pattern for days 2-10 is: native number + か. ふた (two) becomes ふつ due to sound shifts. These readings predate Chinese number influence and are among the oldest words in Japanese."},

    {type:"teach", trg:"三日(みっか)", src:"the 3rd", pos:"noun", gender:null,
     note:"Special reading. Also means 'three days.'\n三月(さんがつ)三日(みっか) = March 3rd.",
     example:"A: 三月(さんがつ)三日(みっか)はひなまつりです。\nB: 女(おんな)の子(こ)のお祭(まつ)りですね。",
     exampleSrc:"A: March 3rd is Hinamatsuri.\nB: It is the girls' festival.",
     funFact:"March 3rd (ひなまつり) is the Doll Festival where families display elaborate tiered doll sets representing the imperial court. Girls receive special meals with chirashi sushi and hina-arare rice crackers. The festival has been celebrated for over 1,000 years."},

    {type:"teach", trg:"四日(よっか)", src:"the 4th", pos:"noun", gender:null,
     note:"Special reading. Uses よ (not し) to avoid death association.\nAlso means 'four days.'",
     example:"A: 四日(よっか)に会議(かいぎ)があります。\nB: 何時(なんじ)からですか？",
     exampleSrc:"A: There is a meeting on the 4th.\nB: From what time?",
     funFact:"Even in dates, the number 4 avoids the し reading. 四日(よっか) uses よ (the native reading) plus か. Some Japanese calendars still highlight the 4th as a day to be cautious, though this superstition is fading among younger generations."},

    {type:"teach", trg:"五日(いつか)", src:"the 5th", pos:"noun", gender:null,
     note:"Special reading. Do not confuse with いつか (someday).\nContext makes the meaning clear.",
     example:"A: 五月(ごがつ)五日(いつか)は子供(こども)の日(ひ)です。\nB: 男(おとこ)の子(こ)のお祭(まつ)りですね。",
     exampleSrc:"A: May 5th is Children's Day.\nB: It is the boys' festival.",
     funFact:"五日(いつか) (the 5th) and いつか (someday) are written the same in hiragana but have different pitch accents. May 5th (子供(こども)の日(ひ)) features koinobori (carp streamers) flying outside homes with sons. Carp swimming upstream symbolize strength and determination."},

    {type:"teach", trg:"六日(むいか)", src:"the 6th", pos:"noun", gender:null,
     note:"Special reading. む comes from native むつ (six).\nAlso means 'six days.'",
     example:"A: 六日(むいか)に旅行(りょこう)に行(い)きます。\nB: どこに行(い)きますか？",
     exampleSrc:"A: I am going on a trip on the 6th.\nB: Where are you going?",
     funFact:"The native Japanese number むつ (six) becomes む in the date form. This shortening pattern also appears in 八日(ようか) (8th, from やつ) and 十日(とおか) (10th, from とお). These compressed forms developed for speed in spoken calendar references."},

    {type:"teach", trg:"七日(なのか)", src:"the 7th", pos:"noun", gender:null,
     note:"Special reading. なな (seven) becomes なの + か.\n七月(しちがつ)七日(なのか) = July 7th (Tanabata).",
     example:"A: 七月(しちがつ)七日(なのか)はたなばたです。\nB: お星(ほし)さまにおねがいしましょう。",
     exampleSrc:"A: July 7th is Tanabata.\nB: Let's make wishes to the stars.",
     funFact:"Tanabata (July 7th) celebrates the annual meeting of two star-crossed lovers, Orihime and Hikoboshi, separated by the Milky Way. People write wishes on colorful paper strips (短冊(たんざく)) and hang them on bamboo branches. It is one of Japan's most romantic festivals."},

    {type:"teach", trg:"八日(ようか)", src:"the 8th", pos:"noun", gender:null,
     note:"Special reading. やつ (eight) becomes よう + か.\nAlso means 'eight days.'",
     example:"A: 八日(ようか)に病院(びょういん)に行(い)きます。\nB: 大丈夫(だいじょうぶ)ですか？",
     exampleSrc:"A: I am going to the hospital on the 8th.\nB: Are you okay?",
     funFact:"The number 8 (はち) is considered very lucky in Japan because the kanji 八 widens at the bottom, symbolizing growing prosperity. Many businesses choose addresses or phone numbers containing 8. Toyota's luxury brand Lexus chose 8 for its LS 800 series."},

    {type:"teach", trg:"九日(ここのか)", src:"the 9th", pos:"noun", gender:null,
     note:"Special reading. ここの comes from native ここのつ (nine).\nAlso means 'nine days.'",
     example:"A: 九月(くがつ)九日(ここのか)は国民(こくみん)の祝日(しゅくじつ)ですか？\nB: いいえ、ただの木曜日(もくようび)です。",
     exampleSrc:"A: Is September 9th a national holiday?\nB: No, it is just a Thursday.",
     funFact:"September 9th was historically 重陽(ちょうよう)の節句(せっく) (Chrysanthemum Festival), one of Japan's five traditional seasonal festivals. The number 9 was considered the strongest yang number in Chinese philosophy. Today the festival is largely forgotten but chrysanthemum viewing persists."},

    {type:"teach", trg:"十日(とおか)", src:"the 10th", pos:"noun", gender:null,
     note:"Special reading. とお (ten) + か.\nAfter the 10th, dates use number + にち: 十一日(じゅういちにち) = 11th.",
     example:"A: 十月(じゅうがつ)十日(とおか)は体育(たいいく)の日(ひ)です。\nB: 運動会(うんどうかい)がありますね。",
     exampleSrc:"A: October 10th is Sports Day.\nB: There will be a sports festival.",
     funFact:"After the 10th, dates become regular: 十一日(じゅういちにち) (11th), 十二日(じゅうににち) (12th), etc. The only exceptions are 二十日(はつか) (20th) and, in some dialects, 三十日(みそか) (30th). 二十日(はつか) uses the same native number system as the first ten days."},

    {type:"teach", trg:"二十日(はつか)", src:"the 20th", pos:"noun", gender:null,
     note:"One final irregular date. 二十日(はつか), not 二十日(にじゅうにち).\nAlso means 'twenty days.'",
     example:"A: 二十日(はつか)に試験(しけん)があります。\nB: 頑張(がんば)ってください！",
     exampleSrc:"A: There is an exam on the 20th.\nB: Good luck!",
     funFact:"二十日(はつか) is the last surviving native-number date after the 10th. It comes from はた (an old word for twenty). 二十日(はつか)ねずみ (house mouse) literally means 'twenty-day mouse' because mice supposedly have a 20-day pregnancy. This quirky word lives on in biology class."},

    {type:"teach", trg:"誕生日(たんじょうび)", src:"birthday", pos:"noun", gender:null,
     note:"誕生(たんじょう) (birth) + 日(び) (day). Polite: お誕生日(たんじょうび).\nお誕生日(たんじょうび)おめでとう = Happy birthday.",
     example:"A: 誕生日(たんじょうび)はいつですか？\nB: 三月(さんがつ)十五日(じゅうごにち)です。",
     exampleSrc:"A: When is your birthday?\nB: It is March 15th.",
     funFact:"In Japan, everyone traditionally aged one year on New Year's Day (数(かぞ)え年(どし) counting age) rather than on individual birthdays. This system was officially replaced in 1950, but some traditions still use it, especially for 七五三(しちごさん) (the 7-5-3 children's ceremony)."},

    // Quiz steps
    {type:"mc", q:"1月(がつ)1日(にち)は日本語(にほんご)でなんですか？",
     opts:["一月(いちがつ)ついたち","一月(いちがつ)一日(いちにち)","一月(いちがつ)はじめ","一月(いちがつ)ひとひ"],
     ans:"一月(いちがつ)ついたち",
     hint:"The 1st of the month has a special reading that comes from an ancient word meaning 'moon rising.'"},

    {type:"fb", s:"五月(ごがつ){1}は子供(こども)の日(ひ)です。",
     a:["五日(いつか)"],
     opts:["五日(いつか)","五日(ごにち)","五日(ごか)","一日(いちか)"],
     hint:"May 5th uses the special native reading for the 5th day. It is the same word as 'someday' but with different context.",
     sSrc:"May {1} is Children's Day."},

    {type:"match", pairs:[
      {trg:"二日(ふつか)", src:"2nd"},
      {trg:"四日(よっか)", src:"4th"},
      {trg:"七日(なのか)", src:"7th"},
      {trg:"十日(とおか)", src:"10th"}
    ]},

    {type:"mc", q:"11日(にち)からはどんなパターンになりますか？",
     opts:["Number + にち","Number + か","Number + ひ","Native readings continue"],
     ans:"Number + にち",
     hint:"After the 10th, the date system becomes regular. Only the 20th (二十日(はつか)) is an exception."},

    {type:"fb", s:"誕生日(たんじょうび)は{1}ですか？",
     a:["いつ"],
     opts:["いつ","なに","どこ","だれ"],
     hint:"You are asking WHEN someone's birthday is. Use the question word for time.",
     sSrc:"When is your birthday?"},

    {type:"mc", q:"「二十日(はつか)」はなん日(にち)ですか？",
     opts:["20th","8th","1st","14th"],
     ans:"20th",
     hint:"This is the last irregular date after the 10th. It uses an ancient word for twenty."}
  ]
};
export default BATCH11_L1;
