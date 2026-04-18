// Batch 11 – Unit 20 (B1.2 Polite Language): Workplace Etiquette Words
const BATCH11_L1 = {
  id:"jav2_u20l_b11_1", title:"職場(しょくば)のマナー", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"職場(しょくば)のマナー",
     desc:"Learn essential workplace etiquette vocabulary. Japanese business culture has specific phrases and behaviors that mark professionalism and respect.",
     goals:["Use workplace greetings and set phrases","Understand hierarchy-based language choices","Navigate common office situations"]},

    {type:"teach", trg:"お疲(つか)れ様(さま)です", src:"thank you for your hard work", pos:"intj", gender:null,
     note:"Universal workplace greeting and farewell.\nUsed when meeting, parting, or ending a task.",
     example:"A: お疲(つか)れ様(さま)です。今日(きょう)も一日(いちにち)頑張(がんば)りましたね。\nB: お疲(つか)れ様(さま)です。お先(さき)に失礼(しつれい)します。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Thank you for your hard work today too.\nB: Thank you. I'll be heading out now.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"お疲(つか)れ様(さま)です is the most versatile workplace phrase. It means 'I acknowledge your effort.' Used when arriving, leaving, passing coworkers in hallways, and ending phone calls. The longer お疲(つか)れ様(さま)でした (past tense) is used at the end of the workday. There is no English equivalent this universal."},

    {type:"teach", trg:"お先(さき)に失礼(しつれい)します", src:"excuse me for leaving before you", pos:"intj", gender:null,
     note:"Said when leaving work before others.\nThe reply: お疲(つか)れ様(さま)でした.",
     example:"A: お先(さき)に失礼(しつれい)します。\nB: お疲(つか)れ様(さま)でした。気(き)をつけて。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Excuse me for leaving before you.\nB: Good work today. Take care.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"This phrase reflects Japanese group consciousness: leaving early feels like abandoning the team. Even if it is your scheduled time, acknowledging those still working is important. Some companies are trying to eliminate this guilt culture, but the phrase persists as a politeness ritual."},

    {type:"teach", trg:"お世話(せわ)になっております", src:"I am in your care (business)", pos:"intj", gender:null,
     note:"Standard business opening on phone and email.\nExtremely formal and important.",
     example:"A: お世話(せわ)になっております。ABCの田中(たなか)です。\nB: こちらこそ、お世話(せわ)になっております。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Thank you for your continued support. This is Tanaka from ABC.\nB: Likewise, thank you.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"お世話(せわ)になっております is THE standard business greeting in emails and phone calls. It acknowledges the ongoing business relationship. New employees learn this phrase on day one. The casual version お世話(せわ)になります is used when starting a new relationship. Without it, business communication feels cold."},

    {type:"teach", trg:"報告(ほうこく)", src:"report", pos:"noun", gender:null,
     note:"報告(ほうこく)する = to report.\nほうれんそう = report-contact-consult (business concept).",
     example:"A: 社長(しゃちょう)に報告(ほうこく)しましたか？\nB: はい、さきほど報告(ほうこく)しました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Did you report to the president?\nB: Yes, I reported just a moment ago.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"ほうれんそう (報連相(ほうれんそう)) is a famous Japanese business acronym: 報告(ほうこく) (report), 連絡(れんらく) (contact/inform), 相談(そうだん) (consult). This communication framework is taught to all new employees and is considered essential for smooth teamwork. The word cleverly sounds like ほうれん草(そう) (spinach)."},

    {type:"teach", trg:"連絡(れんらく)", src:"contact / communication", pos:"noun", gender:null,
     note:"連絡(れんらく)する = to contact.\n連絡先(れんらくさき) = contact information.",
     example:"A: 何(なに)かあったら連絡(れんらく)してください。\nB: わかりました。すぐ連絡(れんらく)します。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: If something happens, please contact me.\nB: Understood. I will contact you right away.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"連絡(れんらく) is the second element of ほうれんそう. It means keeping others informed of developments without waiting to be asked. In Japanese teams, proactive 連絡(れんらく) prevents surprises. 連絡網(れんらくもう) (contact network) and 連絡帳(れんらくちょう) (communication notebook) are tools for organized information sharing."},

    {type:"teach", trg:"相談(そうだん)", src:"consultation / seeking advice", pos:"noun", gender:null,
     note:"相談(そうだん)する = to consult.\n相談(そうだん)に乗(の)る = to give counsel.",
     example:"A: ちょっと相談(そうだん)したいことがあるのですが。\nB: もちろん、なんでも相談(そうだん)してください。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I have something I'd like to consult about.\nB: Of course, consult me about anything.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"相談(そうだん) (consult before acting) is the third element of ほうれんそう and perhaps the most important. Making decisions alone (独断(どくだん)) is frowned upon. Even if you know the answer, consulting your senior (先輩(せんぱい)) shows respect and maintains harmony. Japanese decision-making is inherently consultative."},

    {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
     note:"経験(けいけん)する = to experience.\n経験者(けいけんしゃ) = experienced person.",
     example:"A: 海外(かいがい)での仕事(しごと)の経験(けいけん)はありますか？\nB: はい、二年間(にねんかん)アメリカで働(はたら)きました。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Do you have overseas work experience?\nB: Yes, I worked in America for two years.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"経験(けいけん) (経験) is highly valued in Japanese hiring. 職務経歴書(しょくむけいれきしょ) (work history document) details every professional experience. In Japanese martial arts, years of experience (段位(だんい) ranking) determine respect hierarchy. いい経験(けいけん) (good experience) is a common consolation phrase after failures."},

    {type:"teach", trg:"責任(せきにん)", src:"responsibility", pos:"noun", gender:null,
     note:"責任(せきにん)を取(と)る = to take responsibility.\n責任者(せきにんしゃ) = person in charge.",
     example:"A: このプロジェクトの責任者(せきにんしゃ)は誰(だれ)ですか？\nB: 山田(やまだ)部長(ぶちょう)です。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Who is responsible for this project?\nB: Department head Yamada.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"責任(せきにん)を取(と)る (taking responsibility) is a cornerstone of Japanese business ethics. Leaders resign over team failures even if they were not personally at fault. This contrasts with blame-shifting culture. The concept of 自己責任(じこせきにん) (self-responsibility) has become a contentious social debate topic."},

    {type:"teach", trg:"残業(ざんぎょう)", src:"overtime work", pos:"noun", gender:null,
     note:"残業(ざんぎょう)する = to work overtime.\nサービス残業(ざんぎょう) = unpaid overtime.",
     example:"A: 今日(きょう)は残業(ざんぎょう)ですか？\nB: はい、締(し)め切(き)りが明日(あした)なので。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Are you working overtime today?\nB: Yes, because the deadline is tomorrow.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"残業(ざんぎょう) culture has been a serious issue in Japan. サービス残業(ざんぎょう) (unpaid overtime) was widespread until labor reform laws capped overtime at 45 hours/month in 2019. The concept of 働(はたら)き方(かた)改革(かいかく) (work style reform) aims to reduce excessive 残業(ざんぎょう) and improve work-life balance."},

    {type:"teach", trg:"名刺(めいし)", src:"business card", pos:"noun", gender:null,
     note:"名刺(めいし)交換(こうかん) = business card exchange.\nVery important ritual in Japanese business.",
     example:"A: はじめまして。名刺(めいし)をどうぞ。\nB: ありがとうございます。こちらもどうぞ。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Nice to meet you. Here is my business card.\nB: Thank you. Here is mine as well.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"名刺(めいし)交換(こうかん) (business card exchange) has strict etiquette: present with both hands, receive with both hands, read carefully, never write on someone's card, place it on the table during the meeting. Digital cards exist but physical 名刺(めいし) remain essential. Forgetting your 名刺(めいし) at a meeting is a serious faux pas."},

    {type:"teach", trg:"締(し)め切(き)り", src:"deadline", pos:"noun", gender:null,
     note:"締(し)め切(き)りに間(ま)に合(あ)う = make the deadline.\n締(し)め切(き)りを過(す)ぎる = miss the deadline.",
     example:"A: 締(し)め切(き)りはいつですか？\nB: 来週(らいしゅう)の金曜日(きんようび)です。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"締(し)め切(き)り literally means 'closing off' (締め切り). Japanese business culture takes deadlines extremely seriously. Missing a 締(し)め切(き)り damages trust and relationships. Conversely, finishing before the deadline (前倒(まえだお)し) is highly valued. Many workers voluntarily do overtime to meet 締(し)め切(き)り, even with labor reform."},

    // Quiz steps
    {type:"mc", q:"「ほうれんそう」はなんのことですか？",
     opts:["Report, Contact, Consult (business communication)","A vegetable used in cooking","A type of business meeting","A greeting for customers"],
     ans:"Report, Contact, Consult (business communication)",
     hint:"This famous b... acronym combines three essential workplace c... practices. It also happens to sound like a vegetable name."},

    {type:"fb", s:"{1}。今日(きょう)も一日(いちにち)頑張(がんば)りましたね。",
     a:["お疲(つか)れ様(さま)です"],
     opts:["お疲(つか)れ様(さま)です","おはようございます","さようなら","すみません"],
     hint:"This is the universal end-of-day workplace greeting acknowledging mutual effort.",
     sSrc:"Thank you for your hard work. You worked hard all day today."},

    {type:"match", pairs:[
      {trg:"報告(ほうこく)", src:"report"},
      {trg:"連絡(れんらく)", src:"contact"},
      {trg:"相談(そうだん)", src:"consultation"},
      {trg:"締(し)め切(き)り", src:"deadline"}
    ]},

    {type:"mc", q:"名刺(めいし)交換(こうかん)のとき、どうしますか？",
     opts:["Present and receive with both hands","Throw it across the table","Write notes on it immediately","Put it in your pocket right away"],
     ans:"Present and receive with both hands",
     hint:"This ritual has strict etiquette about how cards are physically handled. Respect for the card equals respect for the person."},

    {type:"fb", s:"社長(しゃちょう)に{1}しましたか？",
     a:["報告(ほうこく)"],
     opts:["報告(ほうこく)","相談(そうだん)","キャンセル","連絡(れんらく)"],
     hint:"The question asks whether you informed the company president about something. This is the 'R' in ほうれんそう.",
     sSrc:"Did you report to the president?"},

    {type:"mc", q:"日本(にほん)の「働(はたら)き方(かた)改革(かいかく)」は何(なに)をめざしていますか？",
     opts:["Reducing overtime and improving work-life balance","Increasing production hours","Eliminating remote work","Raising retirement age"],
     ans:"Reducing overtime and improving work-life balance",
     hint:"This Japanese policy movement aims to tackle excessive 残業(ざんぎょう) culture and create healthier employment conditions."}
  ,{type:"match",pairs:[{trg:"お先(さき)に失礼(しつれい)します",src:"excuse me for leaving before you"},{trg:"お世話(せわ)になっております",src:"I am in your care (business)"},{trg:"経験(けいけん)",src:"experience"},{trg:"責任(せきにん)",src:"responsibility"},{trg:"残業(ざんぎょう)",src:"overtime work"},{trg:"名刺(めいし)",src:"business card"}]}]
};
export default BATCH11_L1;
