// Batch 4 — Unit 13 Lesson 2: Life Events & Milestones
const BATCH4_L_2 = {
  id:"jav2_u13l_b4_2", title:"人生(じんせい)のできごと", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"人生(じんせい)のできごと",
     desc:"Learn vocabulary for important life events and milestones. Japanese culture has ceremonies and customs marking every major life transition.",
     goals:["Describe major life events","Talk about education and career milestones","Use past experience patterns"]},

    {type:"teach", trg:"卒業(そつぎょう)", src:"graduation", pos:"noun", gender:null,
     note:"Kanji: 卒業. Complete + work. Finishing school or a course.",
     example:"来年(らいねん)大学(だいがく)を卒業(そつぎょう)します。",
     exampleSrc:"I will graduate from university next year.",
     funFact:"Japanese graduation ceremonies (卒業式) in March are deeply emotional. Students and teachers cry together. The iconic second button tradition has boys give their second uniform button (closest to the heart) to someone special."},

    {type:"teach", trg:"入学(にゅうがく)", src:"enrollment / entering school", pos:"noun", gender:null,
     note:"Kanji: 入学. Enter + study. Starting at a new school.",
     example:"四月(しがつ)に入学式(にゅうがくしき)があります。",
     exampleSrc:"The entrance ceremony is in April.",
     funFact:"入学式 (entrance ceremonies) are formal events where new students, parents, and teachers gather. Children wear their best clothes. The ceremony marks the beginning of a new chapter and is taken as seriously as graduation."},

    {type:"teach", trg:"就職(しゅうしょく)", src:"getting a job / employment", pos:"noun", gender:null,
     note:"Kanji: 就職. Arrive at + occupation. Starting full-time work.",
     example:"大学(だいがく)を卒業(そつぎょう)して就職(しゅうしょく)しました。",
     exampleSrc:"I graduated from university and got a job.",
     funFact:"Japan's job hunting (就活 shuukatsu) is a grueling process. Students wear identical black suits, attend company seminars, and go through multiple interview rounds. The process starts over a year before graduation."},

    {type:"teach", trg:"結婚(けっこん)", src:"marriage / wedding", pos:"noun", gender:null,
     note:"Kanji: 結婚. Tie + marriage. Suru verb: 結婚(けっこん)する.",
     example:"来月(らいげつ)結婚(けっこん)します。",
     exampleSrc:"I am getting married next month.",
     funFact:"Japanese weddings blend traditions: Shinto ceremonies (white kimono, sake exchange) and Western elements (white dress, cake, chapel). Many couples have both. Wedding gifts are cash in special envelopes, with odd-numbered amounts (30,000 or 50,000 yen) for luck."},

    {type:"teach", trg:"引(ひ)っ越(こ)し", src:"moving (house)", pos:"noun", gender:null,
     note:"Kanji: 引っ越し. Pull + cross over. Changing residence.",
     example:"来週(らいしゅう)引(ひ)っ越(こ)しをします。",
     exampleSrc:"I am moving house next week.",
     funFact:"Japanese moving companies offer amazingly thorough service: they pack, transport, unpack, set up furniture, and even clean your old apartment. April is peak moving season because of job transfers (転勤 tenkin) that coincide with the fiscal year."},

    {type:"teach", trg:"出産(しゅっさん)", src:"childbirth / giving birth", pos:"noun", gender:null,
     note:"Kanji: 出産. Exit + produce. The birth of a child.",
     example:"奥(おく)さんが出産(しゅっさん)しました。おめでとうございます。",
     exampleSrc:"Your wife gave birth. Congratulations.",
     funFact:"Japan offers generous maternity/paternity leave and a childbirth allowance (出産一時金) of 500,000 yen per baby. Despite this, Japan's birth rate remains very low (around 1.2), a major national concern."},

    {type:"teach", trg:"退職(たいしょく)", src:"retirement / leaving a job", pos:"noun", gender:null,
     note:"Kanji: 退職. Withdraw + occupation. Ending employment.",
     example:"父(ちち)は来年(らいねん)退職(たいしょく)します。",
     exampleSrc:"My father will retire next year.",
     funFact:"Japanese retirement age is being raised from 60 to 65. Many retirees continue working part-time or start second careers. Retirement ceremonies involve speeches, gifts, and tears. The final farewell at a company is deeply emotional."},

    {type:"teach", trg:"思(おも)い出(で)", src:"memory / remembrance", pos:"noun", gender:null,
     note:"Kanji: 思い出. Think + exit. Memories that come out when you think.",
     example:"学生(がくせい)時代(じだい)の思(おも)い出(で)はたくさんあります。",
     exampleSrc:"I have many memories from my student days.",
     funFact:"Omoide literally means 'thoughts that come out.' Japanese culture treasures memories deeply. Photo albums, yearbooks, and school trip diaries are carefully preserved. The phrase 'ii omoide' (good memory) is used when looking back fondly."},

    {type:"teach", trg:"成人式(せいじんしき)", src:"coming-of-age ceremony", pos:"noun", gender:null,
     note:"Kanji: 成人式. Become + person + ceremony. At age 20 (now 18).",
     example:"成人式(せいじんしき)で振(ふ)り袖(そで)を着(き)ました。",
     exampleSrc:"I wore a furisode kimono at the coming-of-age ceremony.",
     funFact:"Seijin Shiki happens on the second Monday of January. Women wear gorgeous furisode (long-sleeved kimono) and men wear hakama or suits. The ceremony celebrates becoming legal adults. It is one of the most photographed events in Japan."},

    {type:"teach", trg:"お葬式(おそうしき)", src:"funeral", pos:"noun", gender:null,
     note:"Kanji: お葬式. Polite prefix + funeral + ceremony.",
     example:"昨日(きのう)お葬式(おそうしき)に行(い)きました。",
     exampleSrc:"I went to a funeral yesterday.",
     funFact:"Japanese funerals are primarily Buddhist. Mourners wear all black. Incense (お焼香 oshoukou) is offered. A monetary gift (香典 kouden) in a special black-bordered envelope is given. The process spans two days: a wake (通夜) and the funeral itself."},

    {type:"teach", trg:"七五三(しちごさん)", src:"7-5-3 festival (children's celebration)", pos:"noun", gender:null,
     note:"Kanji: 七五三. Seven + five + three. Ages of celebration.",
     example:"七五三(しちごさん)で神社(じんじゃ)に行(い)きました。",
     exampleSrc:"We went to the shrine for Shichi-Go-San.",
     funFact:"Shichi-Go-San on November 15th celebrates children at ages 7, 5, and 3. Kids wear traditional kimono and visit shrines for blessings. Long candy sticks (千歳飴 chitose-ame, thousand-year candy) symbolize wishes for a long, sweet life."},

    {type:"teach", trg:"約束(やくそく)", src:"promise / appointment", pos:"noun", gender:null,
     note:"Kanji: 約束. Bind + bundle. A commitment between people.",
     example:"指切(ゆびき)りの約束(やくそく)をしました。",
     exampleSrc:"We made a pinky promise.",
     funFact:"指切り (yubikiri, finger cutting) is the Japanese pinky promise. Children hook pinkies and chant 'yubikiri genman, uso tsuitara hari senbon nomasu' (if you lie, you'll swallow a thousand needles). Promises are serious in Japanese culture."},

    {type:"teach", trg:"夢(ゆめ)", src:"dream / ambition", pos:"noun", gender:null,
     note:"Kanji: 夢. Both sleeping dreams and life aspirations.",
     example:"私(わたし)の夢(ゆめ)は医者(いしゃ)になることです。",
     exampleSrc:"My dream is to become a doctor.",
     funFact:"Yume means both literal dreams and life goals. 'Yume wo kanaeru' (to fulfill a dream) is a powerful phrase. Japanese graduation speeches often ask students about their yume. The word carries profound emotional weight about life purpose."},

    {type:"mc", q:"What does 卒業(そつぎょう) mean?",
     opts:["graduation","enrollment","employment","retirement"], ans:"graduation",
     hint:"The ceremony marking completion of studies at a school."},

    {type:"fb", s:"来月(らいげつ){1}します。", a:"結婚(けっこん)",
     sSrc:"I am getting married next month.",
     opts:["結婚(けっこん)","卒業(そつぎょう)","就職(しゅうしょく)","引(ひ)っ越(こ)し"],
     hint:"The life event involving a wedding and a lifelong commitment."},

    {type:"match", pairs:[
      {trg:"入学(にゅうがく)", src:"enrollment"},
      {trg:"就職(しゅうしょく)", src:"getting a job"},
      {trg:"退職(たいしょく)", src:"retirement"},
      {trg:"出産(しゅっさん)", src:"childbirth"}
    ]},

    {type:"mc", q:"成人式(せいじんしき) celebrates:",
     opts:["becoming a legal adult","graduation","marriage","new year"], ans:"becoming a legal adult",
     hint:"A January ceremony where young people wear kimono and formal wear."},

    {type:"fb", s:"私(わたし)の{1}は医者(いしゃ)になることです。", a:"夢(ゆめ)",
     sSrc:"My dream is to become a doctor.",
     opts:["夢(ゆめ)","約束(やくそく)","思(おも)い出(で)","経験(けいけん)"],
     hint:"Both sleeping visions and life aspirations share this word."},

    {type:"mc", q:"七五三(しちごさん) is celebrated at ages:",
     opts:["3, 5, and 7","1, 3, and 5","5, 10, and 15","any age"], ans:"3, 5, and 7",
     hint:"The name itself contains the three numbers of the ages celebrated."},

    {type:"mc", q:"思(おも)い出(で) means:",
     opts:["memory/remembrance","future plan","promise","dream"], ans:"memory/remembrance",
     hint:"Thoughts that come out when you reflect on the past."}
  ,{type:"match",pairs:[{trg:"卒業(そつぎょう)",src:"graduation"},{trg:"引(ひ)っ越(こ)し",src:"moving (house)"},{trg:"思(おも)い出(で)",src:"memory / remembrance"},{trg:"成人式(せいじんしき)",src:"coming-of-age ceremony"},{trg:"お葬式(おそうしき)",src:"funeral"},{trg:"七五三(しちごさん)",src:"(review)"}]},{type:"match",pairs:[{trg:"約束(やくそく)",src:"promise / appointment"}]}]
};
export default BATCH4_L_2;
