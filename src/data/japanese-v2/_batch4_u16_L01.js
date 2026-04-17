// Batch 4 — Unit 16 Lesson 1: Work & Career
const BATCH4_L_1 = {
  id:"jav2_u16l_b4_1", title:"仕事(しごと)", icon:"💼", xp:15, board:true,
  steps:[
    {type:"intro", title:"仕事(しごと)の言葉(ことば)",
     desc:"Learn workplace vocabulary for jobs, offices, and daily work life. These words will help you discuss careers and navigate Japanese work culture.",
     goals:["Name common job titles","Describe workplace activities","Understand Japanese work culture vocabulary"]},

    {type:"teach", trg:"会社員(かいしゃいん)", src:"company employee", pos:"noun", gender:null,
     note:"Kanji: 会社員. Company + employee. A salaryman/woman.",
     example:"私(わたし)は会社員(かいしゃいん)です。",
     exampleSrc:"I am a company employee.",
     funFact:"Kaishain is the default identity for millions of Japanese. The 'salaryman' (サラリーマン) image of a suited worker is iconic. Recently, the term ビジネスパーソン (business person) is preferred as more gender-neutral."},

    {type:"teach", trg:"上司(じょうし)", src:"boss / superior", pos:"noun", gender:null,
     note:"Kanji: 上司. Above + manage. Your workplace superior.",
     example:"上司(じょうし)に報告(ほうこく)します。",
     exampleSrc:"I report to my boss.",
     funFact:"The joushi-buka (boss-subordinate) relationship is foundational in Japanese companies. Seniors guide juniors, and respect flows upward. Even how you pour drinks at company dinners follows hierarchy: the junior pours for the senior, never the reverse."},

    {type:"teach", trg:"同僚(どうりょう)", src:"colleague / coworker", pos:"noun", gender:null,
     note:"Kanji: 同僚. Same + companion. People at your same level.",
     example:"同僚(どうりょう)と昼(ひる)ごはんを食(た)べます。",
     exampleSrc:"I eat lunch with my colleagues.",
     funFact:"Douryou are people at roughly the same level. Japanese companies have strict hierarchies: 先輩 (senpai, senior) and 後輩 (kouhai, junior) matter as much as job title. Colleagues who started the same year (同期 douki) form lifelong bonds."},

    {type:"teach", trg:"給料(きゅうりょう)", src:"salary / pay", pos:"noun", gender:null,
     note:"Kanji: 給料. Supply + charge. Monthly compensation.",
     example:"給料(きゅうりょう)が上(あ)がりました。",
     exampleSrc:"My salary went up.",
     funFact:"Japanese companies traditionally pay bonuses (ボーナス) twice a year: summer (June-July) and winter (December). These bonuses can equal 2-6 months of salary. Housing loans and spending plans are built around bonus timing."},

    {type:"teach", trg:"残業(ざんぎょう)", src:"overtime work", pos:"noun", gender:null,
     note:"Kanji: 残業. Remain + work. Working beyond regular hours.",
     example:"今日(きょう)は残業(ざんぎょう)があります。",
     exampleSrc:"I have overtime today.",
     funFact:"Japan's overwork culture (残業文化) has been a serious social issue. The word karoshi (過労死, death from overwork) entered the English language. Recent labor reforms cap overtime at 45 hours/month, but enforcement varies."},

    {type:"teach", trg:"会議(かいぎ)", src:"meeting", pos:"noun", gender:null,
     note:"Kanji: 会議. Meet + discuss. Business meetings.",
     example:"午後(ごご)三時(さんじ)に会議(かいぎ)があります。",
     exampleSrc:"There is a meeting at 3 PM.",
     funFact:"Japanese meetings are famous for being long and consensus-driven. The nemawashi (根回し, root-binding) process means most decisions are made informally before the meeting. The meeting itself is for formal approval."},

    {type:"teach", trg:"締(し)め切(き)り", src:"deadline", pos:"noun", gender:null,
     note:"Kanji: 締め切り. Tighten + cut. The final point.",
     example:"締(し)め切(き)りはいつですか？",
     exampleSrc:"When is the deadline?",
     funFact:"Japanese take deadlines extremely seriously. Missing a shimekiri damages trust and reputation. The expression 締め切りに追われる (being chased by a deadline) is how manga artists describe their constant time pressure."},

    {type:"teach", trg:"名刺(めいし)", src:"business card", pos:"noun", gender:null,
     note:"Kanji: 名刺. Name + thorn/card. Essential in Japanese business.",
     example:"名刺(めいし)を交換(こうかん)しましょう。",
     exampleSrc:"Let's exchange business cards.",
     funFact:"Meishi exchange is a sacred ritual in Japanese business. Cards are given and received with both hands, studied carefully, and placed on the table during meetings. Bending, writing on, or sitting on someone's meishi is deeply offensive."},

    {type:"teach", trg:"転勤(てんきん)", src:"job transfer / relocation", pos:"noun", gender:null,
     note:"Kanji: 転勤. Transfer + serve. Company-ordered relocation.",
     example:"大阪(おおさか)に転勤(てんきん)になりました。",
     exampleSrc:"I was transferred to Osaka.",
     funFact:"Tenkin (company transfers) uproot families every 2-5 years. Employees rarely refuse. Some families live separately (単身赴任 tanshin funin) with the father working in one city and family staying in another. This is a unique Japanese corporate culture phenomenon."},

    {type:"teach", trg:"出張(しゅっちょう)", src:"business trip", pos:"noun", gender:null,
     note:"Kanji: 出張. Go out + stretch. Traveling for work purposes.",
     example:"来週(らいしゅう)大阪(おおさか)に出張(しゅっちょう)します。",
     exampleSrc:"I will go on a business trip to Osaka next week.",
     funFact:"Shutchou in Japan often includes socializing after business hours. Evening dinners and even visits to hot springs with business partners are considered part of the trip. The expense report (経費精算) covers meals and entertainment."},

    {type:"teach", trg:"休憩(きゅうけい)", src:"break / rest period", pos:"noun", gender:null,
     note:"Kanji: 休憩. Rest + rest. A work break, usually for lunch.",
     example:"十二時(じゅうにじ)から一時(いちじ)まで休憩(きゅうけい)です。",
     exampleSrc:"Break is from 12 to 1 o'clock.",
     funFact:"Lunch break (昼休み) at Japanese companies is typically 12:00-13:00. Many workers eat at their desks, nap briefly (昼寝 hirune), or take a quick walk. Some progressive companies offer napping rooms to boost afternoon productivity."},

    {type:"teach", trg:"定時(ていじ)", src:"regular hours / quitting time", pos:"noun", gender:null,
     note:"Kanji: 定時. Fixed + time. Official end of work hours.",
     example:"今日(きょう)は定時(ていじ)で上(あ)がります。",
     exampleSrc:"I will leave at regular time today.",
     funFact:"Leaving at teiji (定時退社 teiji taisha) was once frowned upon. The phrase 'osaki ni shitsurei shimasu' (excuse me for leaving first) reveals the guilt of leaving before others. Modern companies are working to normalize on-time departures."},

    {type:"teach", trg:"アルバイト", src:"part-time job", pos:"noun", gender:null,
     note:"From German 'Arbeit' (work). Shortened to バイト.",
     example:"学生(がくせい)のときにアルバイトをしていました。",
     exampleSrc:"I worked part-time when I was a student.",
     funFact:"Arubaito from German 'Arbeit' entered Japanese in the Meiji era. Nearly every college student works a baito. Common jobs: convenience store clerk, restaurant server, tutor. Baito culture is a rite of passage for Japanese youth."},

    {type:"mc", q:"What does 残業(ざんぎょう) mean?",
     opts:["overtime work","vacation","break","meeting"], ans:"overtime work",
     hint:"Working beyond your scheduled hours, a famously common Japanese practice."},

    {type:"fb", s:"{1}を交換(こうかん)しましょう。", a:"名刺(めいし)",
     sSrc:"Let's exchange business cards.",
     opts:["名刺(めいし)","給料(きゅうりょう)","締(し)め切(き)り","会議(かいぎ)"],
     hint:"Small cards with your name and company, ritually exchanged in business."},

    {type:"match", pairs:[
      {trg:"上司(じょうし)", src:"boss"},
      {trg:"同僚(どうりょう)", src:"colleague"},
      {trg:"出張(しゅっちょう)", src:"business trip"},
      {trg:"転勤(てんきん)", src:"job transfer"}
    ]},

    {type:"mc", q:"アルバイト comes from which language?",
     opts:["German","English","French","Dutch"], ans:"German",
     hint:"From the G... word meaning 'work,' entering Japanese in the Meiji era."},

    {type:"fb", s:"{1}はいつですか？", a:"締(し)め切(き)り",
     sSrc:"When is the deadline?",
     opts:["締(し)め切(き)り","会議(かいぎ)","休憩(きゅうけい)","定時(ていじ)"],
     hint:"The final date by which something must be completed."},

    {type:"mc", q:"What is 根回し (nemawashi)?",
     opts:["informal consensus-building before meetings","formal debate","written proposal","deadline extension"], ans:"informal consensus-building before meetings",
     hint:"The pre-meeting process of b... agreement through individual conversations."},

    {type:"mc", q:"定時(ていじ) means:",
     opts:["regular work hours / quitting time","overtime","holiday","meeting time"], ans:"regular work hours / quitting time",
     hint:"The official scheduled t... when the workday ends."}
  ]
};
export default BATCH4_L_1;
