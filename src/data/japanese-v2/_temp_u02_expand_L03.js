// Unit 02 Expansion L05 — Age, Birthday & Personal Details
const LESSON_5 = {
  id:"jav2_u2l5", title:"ねんれいとたんじょうび", icon:"🎂", xp:15, board:true,
  steps:[
    {type:"intro", title:"ねんれいとたんじょうび",
     desc:"Learn to talk about your age, birthday, and other personal details. Age is important in Japanese social hierarchy, and there are polite ways to ask about it.",
     goals:["Ask and tell your age with nan-sai","Say your birthday with month and day","Understand why age matters in Japanese culture"]},

    {type:"teach", trg:"なんさい", src:"how old (age question)", pos:"pron", gender:null,
     note:"Nan (what) + sai (years old). Polite: おいくつですか (o-ikutsu desu ka).\nKanji: 何歳.",
     example:"A: なんさいですか？\nB: にじゅうごさいです。",
     exampleSrc:"A: How old are you?\nB: I am 25 years old.",
     funFact:"Asking age in Japan is not rude because age determines social hierarchy. The older person uses casual speech while the younger one uses polite forms. Knowing who is older (senpai) or younger (kouhai) is essential for correct language."},

    {type:"teach", trg:"さい", src:"years old (counter)", pos:"part", gender:null,
     note:"Counter for age. Sound change: いっさい (1), はっさい (8), じゅっさい (10).\nKanji: 歳.",
     example:"A: おこさんはなんさいですか？\nB: さんさいです。",
     exampleSrc:"A: How old is your child?\nB: Three years old.",
     funFact:"歳 is one of the most complex everyday kanji with 13 strokes. A simpler version 才 (also read sai) is often used instead, especially in casual writing. Officially, 歳 is correct, but 才 is widely accepted."},

    {type:"teach", trg:"たんじょうび", src:"birthday", pos:"noun", gender:null,
     note:"Compound: たんじょう (birth) + び (day). Often celebrated with cake in modern Japan.\nKanji: 誕生日.",
     example:"A: たんじょうびはいつですか？\nB: さんがつじゅうごにちです。",
     exampleSrc:"A: When is your birthday?\nB: March 15th.",
     funFact:"誕生 (birth) + 日 (day). Birthday celebrations with cake are a Western import from the postwar period. Traditional Japan celebrated only New Year, when everyone aged together (kazoe-doshi system). Individual birthdays became common in the 1950s."},

    {type:"teach", trg:"いちがつ", src:"January", pos:"noun", gender:null,
     note:"Month 1. Japanese months are just numbers + gatsu (month).\nKanji: 一月.",
     example:"A: いちがつはさむいですね。\nB: はい、ゆきがふります。",
     exampleSrc:"A: January is cold, isn't it?\nB: Yes, it snows.",
     funFact:"Japanese months are beautifully logical: ichi-gatsu (month 1), ni-gatsu (month 2), and so on. No need to memorize separate names. The old poetic names are still known: mutsuki (month of harmony) for January, kisaragi (changing clothes) for February."},

    {type:"mc", q:"Japanese months use:", opts:["Unique names like English","Number + gatsu","Animal names","Season names"], ans:"Number + gatsu",
     hint:"Ichi-g..., ni-g..., san-g...: the logical n... system."},

    {type:"teach", trg:"にがつ", src:"February", pos:"noun", gender:null,
     note:"Month 2. The shortest month. Has Valentine's Day, which works differently in Japan.\nKanji: 二月.",
     example:"A: にがつじゅうよっかはバレンタインデーです。\nB: チョコレートをかいましたか？",
     exampleSrc:"A: February 14th is Valentine's Day.\nB: Did you buy chocolate?",
     funFact:"In Japan, women give chocolate to men on Valentine's Day (February 14). Men return the favor on White Day (March 14). Obligatory work chocolate (giri-choco) for colleagues is a whole industry, though many companies are abandoning this custom."},

    {type:"teach", trg:"さんがつ", src:"March", pos:"noun", gender:null,
     note:"Month 3. Cherry blossom season begins. Graduation month in Japan.\nKanji: 三月.",
     example:"A: さんがつはそつぎょうしきですね。\nB: はい、さくらもきれいです。",
     exampleSrc:"A: March is graduation ceremony time.\nB: Yes, and the cherry blossoms are beautiful.",
     funFact:"March is graduation month in Japan (the school year ends in March and starts in April). Cherry blossoms blooming during graduation create one of the most iconic and emotional scenes in Japanese culture."},

    {type:"teach", trg:"しがつ", src:"April", pos:"noun", gender:null,
     note:"Month 4. The start of the Japanese school and fiscal year.\nKanji: 四月.",
     example:"A: しがつはしんがっきです。\nB: あたらしいクラスですね。",
     exampleSrc:"A: April is the new school term.\nB: A new class, right?",
     funFact:"April, not September, starts the Japanese school year. New employees also begin work in April. The timing coincides with cherry blossoms, making it a symbol of fresh starts. Companies hold entrance ceremonies (nyuushashiki) for new hires."},

    {type:"teach", trg:"ごがつ", src:"May", pos:"noun", gender:null,
     note:"Month 5. Contains Golden Week, Japan's biggest holiday cluster.\nKanji: 五月.",
     example:"A: ごがつはゴールデンウィークですね。\nB: どこかにいきますか？",
     exampleSrc:"A: May has Golden Week.\nB: Are you going somewhere?",
     funFact:"Golden Week (late April to early May) strings together several national holidays. Everyone travels simultaneously, making trains, airports, and tourist spots incredibly crowded. Prices spike and hotels sell out months in advance."},

    {type:"fb", s:"わたしの___はろくがつです。",
     a:["たんじょうび"],
     opts:["たんじょうび","なまえ","しゅみ","しごと"],
     hint:"The compound word for the annual celebration of when you were born.",
     sSrc:"My birthday is in June."},

    {type:"teach", trg:"ろくがつ", src:"June", pos:"noun", gender:null,
     note:"Month 6. The rainy season (梅雨, tsuyu) begins. Humid and wet.\nKanji: 六月.",
     example:"A: ろくがつはあめがおおいですね。\nB: はい、つゆですから。",
     exampleSrc:"A: June has a lot of rain.\nB: Yes, because of the rainy season.",
     funFact:"June is tsuyu (plum rain) season, named because plums ripen during this time. The rainy season lasts about 6 weeks and is actually essential for rice cultivation. Hydrangeas (ajisai) blooming in the rain are a beloved June image."},

    {type:"teach", trg:"じゅうにがつ", src:"December", pos:"noun", gender:null,
     note:"Month 12. Year-end parties (忘年会, bounenkai) and Christmas celebrations.\nKanji: 十二月.",
     example:"A: じゅうにがつはいそがしいですか？\nB: はい、ぼうねんかいがたくさんあります。",
     exampleSrc:"A: Are you busy in December?\nB: Yes, there are many year-end parties.",
     funFact:"December in Japan is a whirlwind of bounenkai (forget-the-year parties), Christmas Eve dates, and New Year preparations. Christmas Eve is considered a romantic date night for couples. KFC (Kentucky Fried Chicken) for Christmas dinner is a famous Japanese tradition."},

    {type:"teach", trg:"ついたち", src:"1st day of the month", pos:"noun", gender:null,
     note:"Irregular reading. Most day-of-month words are irregular from 1st to 10th.\nKanji: 一日.",
     example:"A: いちがつついたちはおしょうがつです。\nB: あけましておめでとうございます！",
     exampleSrc:"A: January 1st is New Year.\nB: Happy New Year!",
     funFact:"Day-of-month readings from 1 to 10 use the old native Japanese counting system: tsuitachi (1st), futsuka (2nd), mikka (3rd), yokka (4th), itsuka (5th), muika (6th), nanoka (7th), youka (8th), kokonoka (9th), tooka (10th). After 10th, it switches to the regular number + nichi."},

    {type:"teach", trg:"にち", src:"day (counter for days of month)", pos:"part", gender:null,
     note:"Used from the 11th onwards: じゅういちにち (11th), じゅうににち (12th), etc.\nKanji: 日.",
     example:"A: なんにちですか？\nB: じゅうごにちです。",
     exampleSrc:"A: What day of the month is it?\nB: It is the 15th.",
     funFact:"日 is one of the most versatile kanji: nichi (day), hi (sun/day), jitsu (in compounds). It appears in nihon (Japan), nichiyoubi (Sunday), mainichi (every day), and kyou (today, 今日). One kanji, countless readings."},

    {type:"mc", q:"しがつ is significant because:", opts:["Cherry blossoms bloom only then","The school year starts","It is the hottest month","New Year begins"], ans:"The school year starts",
     hint:"Unlike most Western countries, Japan begins its academic y... in this spring month."},

    {type:"match", pairs:[
      {trg:"いちがつ", src:"January"},
      {trg:"しがつ", src:"April"},
      {trg:"ろくがつ", src:"June"},
      {trg:"じゅうにがつ", src:"December"}
    ]},

    {type:"match", pairs:[
      {trg:"なんさい", src:"How old?"},
      {trg:"さい", src:"years old"},
      {trg:"たんじょうび", src:"birthday"},
      {trg:"ついたち", src:"1st of the month"}
    ]},

    {type:"fb", s:"わたしは にじゅう___です。",
     a:["さい"],
     opts:["さい","にん","にち","ねん"],
     hint:"The counter specifically for a person's age.",
     sSrc:"I am 20 years old."},

    {type:"mc", q:"たんじょうび celebrations with cake are:", opts:["An ancient Japanese tradition","A Western import from the postwar period","Only for children","From the Edo period"], ans:"A Western import from the postwar period",
     hint:"Before this, Japanese people traditionally all aged together on New Year's Day."},

    {type:"mc", q:"How do you say 'March 3rd' in Japanese?", opts:["さんがつさんにち","さんがつみっか","さんつきさんび","みっかさんがつ"], ans:"さんがつみっか",
     hint:"Month comes first, then the day. Days 1-10 use the old native counting system."},
  ]
};
export default LESSON_5;
