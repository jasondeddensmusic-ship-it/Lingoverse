// Batch 4 — Unit 13 Lesson 2: Life Events & Milestones
const BATCH4_L_2 = {
  id:"jav2_u13l_b4_2", title:"じんせいのできごと", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"じんせいのできごと",
     desc:"Learn vocabulary for important life events and milestones. Japanese culture has ceremonies and customs marking every major life transition.",
     goals:["Describe major life events","Talk about education and career milestones","Use past experience patterns"]},

    {type:"teach", trg:"そつぎょう", src:"graduation", pos:"noun", gender:null,
     note:"Kanji: 卒業. Complete + work. Finishing school or a course.",
     example:"らいねんだいがくをそつぎょうします。",
     exampleSrc:"I will graduate from university next year.",
     funFact:"Japanese graduation ceremonies (卒業式) in March are deeply emotional. Students and teachers cry together. The iconic second button tradition has boys give their second uniform button (closest to the heart) to someone special."},

    {type:"teach", trg:"にゅうがく", src:"enrollment / entering school", pos:"noun", gender:null,
     note:"Kanji: 入学. Enter + study. Starting at a new school.",
     example:"しがつににゅうがくしきがあります。",
     exampleSrc:"The entrance ceremony is in April.",
     funFact:"入学式 (entrance ceremonies) are formal events where new students, parents, and teachers gather. Children wear their best clothes. The ceremony marks the beginning of a new chapter and is taken as seriously as graduation."},

    {type:"teach", trg:"しゅうしょく", src:"getting a job / employment", pos:"noun", gender:null,
     note:"Kanji: 就職. Arrive at + occupation. Starting full-time work.",
     example:"だいがくをそつぎょうしてしゅうしょくしました。",
     exampleSrc:"I graduated from university and got a job.",
     funFact:"Japan's job hunting (就活 shuukatsu) is a grueling process. Students wear identical black suits, attend company seminars, and go through multiple interview rounds. The process starts over a year before graduation."},

    {type:"teach", trg:"けっこん", src:"marriage / wedding", pos:"noun", gender:null,
     note:"Kanji: 結婚. Tie + marriage. Suru verb: けっこんする.",
     example:"らいげつけっこんします。",
     exampleSrc:"I am getting married next month.",
     funFact:"Japanese weddings blend traditions: Shinto ceremonies (white kimono, sake exchange) and Western elements (white dress, cake, chapel). Many couples have both. Wedding gifts are cash in special envelopes, with odd-numbered amounts (30,000 or 50,000 yen) for luck."},

    {type:"teach", trg:"ひっこし", src:"moving (house)", pos:"noun", gender:null,
     note:"Kanji: 引っ越し. Pull + cross over. Changing residence.",
     example:"らいしゅうひっこしをします。",
     exampleSrc:"I am moving house next week.",
     funFact:"Japanese moving companies offer amazingly thorough service: they pack, transport, unpack, set up furniture, and even clean your old apartment. April is peak moving season because of job transfers (転勤 tenkin) that coincide with the fiscal year."},

    {type:"teach", trg:"しゅっさん", src:"childbirth / giving birth", pos:"noun", gender:null,
     note:"Kanji: 出産. Exit + produce. The birth of a child.",
     example:"おくさんがしゅっさんしました。おめでとうございます。",
     exampleSrc:"Your wife gave birth. Congratulations.",
     funFact:"Japan offers generous maternity/paternity leave and a childbirth allowance (出産一時金) of 500,000 yen per baby. Despite this, Japan's birth rate remains very low (around 1.2), a major national concern."},

    {type:"teach", trg:"たいしょく", src:"retirement / leaving a job", pos:"noun", gender:null,
     note:"Kanji: 退職. Withdraw + occupation. Ending employment.",
     example:"ちちはらいねんたいしょくします。",
     exampleSrc:"My father will retire next year.",
     funFact:"Japanese retirement age is being raised from 60 to 65. Many retirees continue working part-time or start second careers. Retirement ceremonies involve speeches, gifts, and tears. The final farewell at a company is deeply emotional."},

    {type:"teach", trg:"おもいで", src:"memory / remembrance", pos:"noun", gender:null,
     note:"Kanji: 思い出. Think + exit. Memories that come out when you think.",
     example:"がくせいじだいのおもいではたくさんあります。",
     exampleSrc:"I have many memories from my student days.",
     funFact:"Omoide literally means 'thoughts that come out.' Japanese culture treasures memories deeply. Photo albums, yearbooks, and school trip diaries are carefully preserved. The phrase 'ii omoide' (good memory) is used when looking back fondly."},

    {type:"teach", trg:"せいじんしき", src:"coming-of-age ceremony", pos:"noun", gender:null,
     note:"Kanji: 成人式. Become + person + ceremony. At age 20 (now 18).",
     example:"せいじんしきでふりそでをきました。",
     exampleSrc:"I wore a furisode kimono at the coming-of-age ceremony.",
     funFact:"Seijin Shiki happens on the second Monday of January. Women wear gorgeous furisode (long-sleeved kimono) and men wear hakama or suits. The ceremony celebrates becoming legal adults. It is one of the most photographed events in Japan."},

    {type:"teach", trg:"おそうしき", src:"funeral", pos:"noun", gender:null,
     note:"Kanji: お葬式. Polite prefix + funeral + ceremony.",
     example:"きのうおそうしきにいきました。",
     exampleSrc:"I went to a funeral yesterday.",
     funFact:"Japanese funerals are primarily Buddhist. Mourners wear all black. Incense (お焼香 oshoukou) is offered. A monetary gift (香典 kouden) in a special black-bordered envelope is given. The process spans two days: a wake (通夜) and the funeral itself."},

    {type:"teach", trg:"しちごさん", src:"7-5-3 festival (children's celebration)", pos:"noun", gender:null,
     note:"Kanji: 七五三. Seven + five + three. Ages of celebration.",
     example:"しちごさんでじんじゃにいきました。",
     exampleSrc:"We went to the shrine for Shichi-Go-San.",
     funFact:"Shichi-Go-San on November 15th celebrates children at ages 7, 5, and 3. Kids wear traditional kimono and visit shrines for blessings. Long candy sticks (千歳飴 chitose-ame, thousand-year candy) symbolize wishes for a long, sweet life."},

    {type:"teach", trg:"やくそく", src:"promise / appointment", pos:"noun", gender:null,
     note:"Kanji: 約束. Bind + bundle. A commitment between people.",
     example:"ゆびきりのやくそくをしました。",
     exampleSrc:"We made a pinky promise.",
     funFact:"指切り (yubikiri, finger cutting) is the Japanese pinky promise. Children hook pinkies and chant 'yubikiri genman, uso tsuitara hari senbon nomasu' (if you lie, you'll swallow a thousand needles). Promises are serious in Japanese culture."},

    {type:"teach", trg:"ゆめ", src:"dream / ambition", pos:"noun", gender:null,
     note:"Kanji: 夢. Both sleeping dreams and life aspirations.",
     example:"わたしのゆめはいしゃになることです。",
     exampleSrc:"My dream is to become a doctor.",
     funFact:"Yume means both literal dreams and life goals. 'Yume wo kanaeru' (to fulfill a dream) is a powerful phrase. Japanese graduation speeches often ask students about their yume. The word carries profound emotional weight about life purpose."},

    {type:"mc", q:"What does そつぎょう mean?",
     opts:["graduation","enrollment","employment","retirement"], ans:"graduation",
     hint:"The ceremony marking completion of studies at a school."},

    {type:"fb", s:"らいげつ{1}します。", a:"けっこん",
     sSrc:"I am getting married next month.",
     opts:["けっこん","そつぎょう","しゅうしょく","ひっこし"],
     hint:"The life event involving a wedding and a lifelong commitment."},

    {type:"match", pairs:[
      {trg:"にゅうがく", src:"enrollment"},
      {trg:"しゅうしょく", src:"getting a job"},
      {trg:"たいしょく", src:"retirement"},
      {trg:"しゅっさん", src:"childbirth"}
    ]},

    {type:"mc", q:"せいじんしき celebrates:",
     opts:["becoming a legal adult","graduation","marriage","new year"], ans:"becoming a legal adult",
     hint:"A January ceremony where young people wear kimono and formal wear."},

    {type:"fb", s:"わたしの{1}はいしゃになることです。", a:"ゆめ",
     sSrc:"My dream is to become a doctor.",
     opts:["ゆめ","やくそく","おもいで","けいけん"],
     hint:"Both sleeping visions and life aspirations share this word."},

    {type:"mc", q:"しちごさん is celebrated at ages:",
     opts:["3, 5, and 7","1, 3, and 5","5, 10, and 15","any age"], ans:"3, 5, and 7",
     hint:"The name itself contains the three numbers of the ages celebrated."},

    {type:"mc", q:"おもいで means:",
     opts:["memory/remembrance","future plan","promise","dream"], ans:"memory/remembrance",
     hint:"Thoughts that come out when you reflect on the past."}
  ]
};
export default BATCH4_L_2;
