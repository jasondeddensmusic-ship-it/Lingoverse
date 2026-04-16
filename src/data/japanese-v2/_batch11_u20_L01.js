// Batch 11 – Unit 20 (B1.2 Polite Language): Workplace Etiquette Words
const BATCH11_L1 = {
  id:"jav2_u20l_b11_1", title:"しょくばのマナー", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょくばのマナー",
     desc:"Learn essential workplace etiquette vocabulary. Japanese business culture has specific phrases and behaviors that mark professionalism and respect.",
     goals:["Use workplace greetings and set phrases","Understand hierarchy-based language choices","Navigate common office situations"]},

    {type:"teach", trg:"おつかれさまです", src:"thank you for your hard work", pos:"intj", gender:null,
     note:"Universal workplace greeting and farewell.\nUsed when meeting, parting, or ending a task.",
     example:"A: おつかれさまです。きょうもいちにちがんばりましたね。\nB: おつかれさまです。おさきにしつれいします。",
     exampleSrc:"A: Thank you for your hard work today too.\nB: Thank you. I'll be heading out now.",
     funFact:"おつかれさまです is the most versatile workplace phrase. It means 'I acknowledge your effort.' Used when arriving, leaving, passing coworkers in hallways, and ending phone calls. The longer おつかれさまでした (past tense) is used at the end of the workday. There is no English equivalent this universal."},

    {type:"teach", trg:"おさきにしつれいします", src:"excuse me for leaving before you", pos:"intj", gender:null,
     note:"Said when leaving work before others.\nThe reply: おつかれさまでした.",
     example:"A: おさきにしつれいします。\nB: おつかれさまでした。きをつけて。",
     exampleSrc:"A: Excuse me for leaving before you.\nB: Good work today. Take care.",
     funFact:"This phrase reflects Japanese group consciousness: leaving early feels like abandoning the team. Even if it is your scheduled time, acknowledging those still working is important. Some companies are trying to eliminate this guilt culture, but the phrase persists as a politeness ritual."},

    {type:"teach", trg:"おせわになっております", src:"I am in your care (business)", pos:"intj", gender:null,
     note:"Standard business opening on phone and email.\nExtremely formal and important.",
     example:"A: おせわになっております。ABCのたなかです。\nB: こちらこそ、おせわになっております。",
     exampleSrc:"A: Thank you for your continued support. This is Tanaka from ABC.\nB: Likewise, thank you.",
     funFact:"おせわになっております is THE standard business greeting in emails and phone calls. It acknowledges the ongoing business relationship. New employees learn this phrase on day one. The casual version おせわになります is used when starting a new relationship. Without it, business communication feels cold."},

    {type:"teach", trg:"ほうこく", src:"report", pos:"noun", gender:null,
     note:"ほうこくする = to report.\nほうれんそう = report-contact-consult (business concept).",
     example:"A: しゃちょうにほうこくしましたか？\nB: はい、さきほどほうこくしました。",
     exampleSrc:"A: Did you report to the president?\nB: Yes, I reported just a moment ago.",
     funFact:"ほうれんそう (報連相) is a famous Japanese business acronym: ほうこく (report), れんらく (contact/inform), そうだん (consult). This communication framework is taught to all new employees and is considered essential for smooth teamwork. The word cleverly sounds like ほうれんそう (spinach)."},

    {type:"teach", trg:"れんらく", src:"contact / communication", pos:"noun", gender:null,
     note:"れんらくする = to contact.\nれんらくさき = contact information.",
     example:"A: なにかあったられんらくしてください。\nB: わかりました。すぐれんらくします。",
     exampleSrc:"A: If something happens, please contact me.\nB: Understood. I will contact you right away.",
     funFact:"れんらく is the second element of ほうれんそう. It means keeping others informed of developments without waiting to be asked. In Japanese teams, proactive れんらく prevents surprises. れんらくもう (contact network) and れんらくちょう (communication notebook) are tools for organized information sharing."},

    {type:"teach", trg:"そうだん", src:"consultation / seeking advice", pos:"noun", gender:null,
     note:"そうだんする = to consult.\nそうだんにのる = to give counsel.",
     example:"A: ちょっとそうだんしたいことがあるのですが。\nB: もちろん、なんでもそうだんしてください。",
     exampleSrc:"A: I have something I'd like to consult about.\nB: Of course, consult me about anything.",
     funFact:"そうだん (consult before acting) is the third element of ほうれんそう and perhaps the most important. Making decisions alone (独断) is frowned upon. Even if you know the answer, consulting your senior (先輩) shows respect and maintains harmony. Japanese decision-making is inherently consultative."},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"けいけんする = to experience.\nけいけんしゃ = experienced person.",
     example:"A: かいがいでのしごとのけいけんはありますか？\nB: はい、にねんかんアメリカではたらきました。",
     exampleSrc:"A: Do you have overseas work experience?\nB: Yes, I worked in America for two years.",
     funFact:"けいけん (経験) is highly valued in Japanese hiring. しょくむけいれきしょ (work history document) details every professional experience. In Japanese martial arts, years of experience (段位 ranking) determine respect hierarchy. いいけいけん (good experience) is a common consolation phrase after failures."},

    {type:"teach", trg:"せきにん", src:"responsibility", pos:"noun", gender:null,
     note:"せきにんをとる = to take responsibility.\nせきにんしゃ = person in charge.",
     example:"A: このプロジェクトのせきにんしゃはだれですか？\nB: やまだぶちょうです。",
     exampleSrc:"A: Who is responsible for this project?\nB: Department head Yamada.",
     funFact:"せきにんをとる (taking responsibility) is a cornerstone of Japanese business ethics. Leaders resign over team failures even if they were not personally at fault. This contrasts with blame-shifting culture. The concept of 自己責任 (self-responsibility) has become a contentious social debate topic."},

    {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
     note:"ざんぎょうする = to work overtime.\nサービスざんぎょう = unpaid overtime.",
     example:"A: きょうはざんぎょうですか？\nB: はい、しめきりがあしたなので。",
     exampleSrc:"A: Are you working overtime today?\nB: Yes, because the deadline is tomorrow.",
     funFact:"ざんぎょう culture has been a serious issue in Japan. サービスざんぎょう (unpaid overtime) was widespread until labor reform laws capped overtime at 45 hours/month in 2019. The concept of 働き方改革 (work style reform) aims to reduce excessive ざんぎょう and improve work-life balance."},

    {type:"teach", trg:"めいし", src:"business card", pos:"noun", gender:null,
     note:"めいしこうかん = business card exchange.\nVery important ritual in Japanese business.",
     example:"A: はじめまして。めいしをどうぞ。\nB: ありがとうございます。こちらもどうぞ。",
     exampleSrc:"A: Nice to meet you. Here is my business card.\nB: Thank you. Here is mine as well.",
     funFact:"めいしこうかん (business card exchange) has strict etiquette: present with both hands, receive with both hands, read carefully, never write on someone's card, place it on the table during the meeting. Digital cards exist but physical めいし remain essential. Forgetting your めいし at a meeting is a serious faux pas."},

    {type:"teach", trg:"しめきり", src:"deadline", pos:"noun", gender:null,
     note:"しめきりにまにあう = make the deadline.\nしめきりをすぎる = miss the deadline.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.",
     funFact:"しめきり literally means 'closing off' (締め切り). Japanese business culture takes deadlines extremely seriously. Missing a しめきり damages trust and relationships. Conversely, finishing before the deadline (前倒し) is highly valued. Many workers voluntarily do overtime to meet しめきり, even with labor reform."},

    // Quiz steps
    {type:"mc", q:"「ほうれんそう」はなんのことですか？",
     opts:["Report, Contact, Consult (business communication)","A vegetable used in cooking","A type of business meeting","A greeting for customers"],
     ans:"Report, Contact, Consult (business communication)",
     hint:"This famous b... acronym combines three essential workplace c... practices. It also happens to sound like a vegetable name."},

    {type:"fb", s:"{1}。きょうもいちにちがんばりましたね。",
     a:["おつかれさまです"],
     opts:["おつかれさまです","おはようございます","さようなら","すみません"],
     hint:"This is the universal end-of-day workplace greeting acknowledging mutual effort.",
     sSrc:"Thank you for your hard work. You worked hard all day today."},

    {type:"match", pairs:[
      {trg:"ほうこく", src:"report"},
      {trg:"れんらく", src:"contact"},
      {trg:"そうだん", src:"consultation"},
      {trg:"しめきり", src:"deadline"}
    ]},

    {type:"mc", q:"めいしこうかんのとき、どうしますか？",
     opts:["Present and receive with both hands","Throw it across the table","Write notes on it immediately","Put it in your pocket right away"],
     ans:"Present and receive with both hands",
     hint:"This ritual has strict etiquette about how cards are physically handled. Respect for the card equals respect for the person."},

    {type:"fb", s:"しゃちょうに{1}しましたか？",
     a:["ほうこく"],
     opts:["ほうこく","そうだん","キャンセル","れんらく"],
     hint:"The question asks whether you informed the company president about something. This is the 'R' in ほうれんそう.",
     sSrc:"Did you report to the president?"},

    {type:"mc", q:"にほんの「はたらきかたかいかく」はなにをめざしていますか？",
     opts:["Reducing overtime and improving work-life balance","Increasing production hours","Eliminating remote work","Raising retirement age"],
     ans:"Reducing overtime and improving work-life balance",
     hint:"This reform movement addresses the serious problem of excessive ざんぎょう in Japanese workplaces."}
  ]
};
export default BATCH11_L1;
