// Batch 2 expansion for Unit 16 (Plans) — more future plans, intentions, promises, schedules
const BATCH2_L_1 = {
  id:"jav2_u16l_b2_1", title:"未来(みらい)の話(はなし)", icon:"🔭", xp:15, board:true,
  steps:[
  {type:"intro", title:"未来(みらい)の話(はなし)",
   desc:"Expand your planning vocabulary with words for scheduling, making commitments, discussing career goals, and talking about life milestones. These expressions help you discuss the future with confidence and nuance.",
   goals:["Talk about career and life milestones","Express strong commitments and promises","Discuss future events with time expressions"]},

  {type:"teach", trg:"来年(らいねん)", src:"next year", pos:"noun", gender:null,
   note:"Time word: 来(らい) (coming) + 年(ねん) (year). No particle needed.\nKanji: 来年(らいねん).",
   example:"A: 来年(らいねん)何(なに)をするつもりですか？\nB: 日本(にほん)に旅行(りょこう)するつもりです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: What do you intend to do next year?\nB: I intend to travel to Japan.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"来年(らいねん) follows the pattern: 去年(きょねん) (last year), 今年(ことし) (this year), 来年(らいねん) (next year). 来(らい) (coming) appears in 来月(らいげつ) (next month), 来週(らいしゅう) (next week). Time words with 来 all face the future. Japanese fiscal and school years start in April, so 来年(らいねん) often means 'next April' in context."},

  {type:"teach", trg:"来月(らいげつ)", src:"next month", pos:"noun", gender:null,
   note:"Time word: 来(らい) (coming) + 月(げつ) (month). No particle needed.\nKanji: 来月(らいげつ).",
   example:"A: 来月(らいげつ)引(ひ)っ越(こ)しする予定(よてい)です。\nB: どこに引(ひ)っ越(こ)しますか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: I plan to move next month.\nB: Where are you moving?\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"来月(らいげつ) is essential for planning conversations. Japanese people plan ahead meticulously. You will hear 来月(らいげつ)の予定(よてい) (next month's schedule) in both business and personal contexts. Monthly planning is a cultural norm, with many people using detailed planner books (手帳(てちょう))."},

  {type:"teach", trg:"来週(らいしゅう)", src:"next week", pos:"noun", gender:null,
   note:"Time word: 来(らい) (coming) + 週(しゅう) (week). No particle needed.\nKanji: 来週(らいしゅう).",
   example:"A: 来週(らいしゅう)空(あ)いていますか？\nB: 水曜日(すいようび)なら空(あ)いています。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: Are you free next week?\nB: I am free on Wednesday.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"来週(らいしゅう) is the go-to time frame for making plans with friends. Japanese social planning typically happens one to two weeks in advance. Last-minute invitations (当日(とうじつ)) are less common. The phrase 来週(らいしゅう)のいつがいい？ (When is good next week?) starts many planning conversations."},

  {type:"teach", trg:"就職(しゅうしょく)する", src:"to get a job / to find employment", pos:"verb", gender:null,
   note:"する-verb. 就職(しゅうしょく) = employment. A major life milestone.\nKanji: 就職(しゅうしょく)する.",
   example:"A: 卒業(そつぎょう)したら就職(しゅうしょく)するつもりです。\nB: どんな仕事(しごと)がしたいですか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: I intend to get a job after graduating.\nB: What kind of work do you want to do?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"就職(しゅうしょく) combines 就(しゅう) (take up) and 職(しょく) (occupation). Japanese job hunting (就活(しゅうかつ), shuukatsu) is a massive, organized process. University students begin job hunting in their third year with standardized suits, resume formats, and group interviews. Companies hire in batches every April."},

  {type:"mc", q:"来年(らいねん) means:", opts:["last year","this year","next year","every year"], ans:"next year",
   hint:"The time word using 来(らい) (coming) + 年(ねん) (y...), pointing to the future."},

  {type:"teach", trg:"入学(にゅうがく)する", src:"to enter school / to enroll", pos:"verb", gender:null,
   note:"する-verb. 入学(にゅうがく) = school enrollment. Opposite: 卒業(そつぎょう) (graduation).\nKanji: 入学(にゅうがく)する.",
   example:"A: 息子(むすこ)は来年(らいねん)小学校(しょうがっこう)に入学(にゅうがく)します。\nB: おめでとうございます！\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: My son will enter elementary school next year.\nB: Congratulations!\nA: How was it?\nB: It was very good.",
   funFact:"入学(にゅうがく) combines 入(にゅう) (enter) and 学(がく) (study). 入学式(にゅうがくしき) (entrance ceremony) in April is a major family event. Parents take photos of children in new uniforms under cherry blossoms. Japanese school entrance is determined by age: all children born in the same year start together."},

  {type:"teach", trg:"引(ひ)っ越(こ)しする", src:"to move (to a new home)", pos:"verb", gender:null,
   note:"する-verb. 引(ひ)っ越(こ)し = a move/relocation.\nKanji: 引(ひ)っ越(こ)しする.",
   example:"A: 来月(らいげつ)引(ひ)っ越(こ)しする予定(よてい)です。\nB: 大変(たいへん)ですね。手伝(てつだ)いましょうか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: I plan to move next month.\nB: That is tough. Shall I help?\nA: When was it?\nB: It was last summer.",
   funFact:"引(ひ)っ越(こ)し combines 引(ひ)く (pull) and 越(こ)す (cross over), literally 'pulling things across.' Moving season in Japan peaks in March-April as the school and fiscal year changes. Moving companies are extremely professional, wrapping everything meticulously and even rearranging furniture."},

  {type:"teach", trg:"退院(たいいん)する", src:"to leave the hospital / to be discharged", pos:"verb", gender:null,
   note:"する-verb. 退院(たいいん) = hospital discharge. Opposite: 入院(にゅういん) (hospitalization).\nKanji: 退院(たいいん)する.",
   example:"A: おばあさんはいつ退院(たいいん)しますか？\nB: 来週(らいしゅう)退院(たいいん)する予定(よてい)です。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: When will your grandmother be discharged?\nB: She is planned to be discharged next week.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"退院(たいいん) combines 退(たい) (retreat/leave) and 院(いん) (institution). Japanese hospitals keep patients longer than Western ones. A broken arm might mean a week-long stay. Upon discharge, patients and families often bring gifts (お礼(れい)) to the nurses and doctors as thanks."},

  {type:"fb", s:"{1}日本(にほん)に旅行(りょこう)するつもりです。\n(I intend to travel to Japan next year.)", a:"来年(らいねん)", opts:["来年(らいねん)","去年(きょねん)","今年(ことし)","毎年(まいとし)"], sSrc:"I intend to travel to Japan next year.",
   hint:"The future time word combining 'coming' with 'year.'"},

  {type:"teach", trg:"間(ま)に合(あ)う", src:"to be on time / to make it", pos:"verb", gender:null,
   note:"Group 1 verb. Opposite: 間(ま)に合(あ)わない (will not make it).\nKanji: 間(ま)に合(あ)う.",
   example:"A: 電車(でんしゃ)に間(ま)に合(あ)いますか？\nB: 急(いそ)げば間(ま)に合(あ)います！\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: Will you make it to the train?\nB: If I hurry, I will make it!\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"間(ま)に合(あ)う literally means 'to fit within the space/time.' Japanese trains run on exact schedules, so 間(ま)に合(あ)う/間(ま)に合(あ)わない is a daily concern. Being even one minute late means missing the train. 間(ま)に合(あ)った！ (I made it!) is the sweet sound of relief on the platform."},

  {type:"teach", trg:"急(いそ)ぐ", src:"to hurry / to rush", pos:"verb", gender:null,
   note:"Group 1 verb. 急(いそ)いでください = please hurry.\nKanji: 急(いそ)ぐ.",
   example:"A: 急(いそ)がないと間(ま)に合(あ)いません。\nB: わかりました。急(いそ)ぎましょう！\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: If we do not hurry, we will not make it.\nB: Understood. Let us hurry!\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"急(いそ)ぐ uses the kanji 急(きゅう) (urgent), which also appears in 急行(きゅうこう) (express train), 急病(きゅうびょう) (sudden illness), and 救急車(きゅうきゅうしゃ) (ambulance). Japanese society values punctuality, but rushing is also seen as undignified. The ideal is to plan well enough that you never need to 急(いそ)ぐ."},

  {type:"teach", trg:"約束(やくそく)", src:"promise / appointment", pos:"noun", gender:null,
   note:"Both a promise between people and a scheduled meeting.\nKanji: 約束(やくそく). 約束(やくそく)する = to promise.",
   example:"A: 友達(ともだち)との約束(やくそく)があります。\nB: 何時(なんじ)に会(あ)う約束(やくそく)ですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: I have an appointment with a friend.\nB: What time are you meeting?\nA: How long did it take?\nB: About two hours.",
   funFact:"約束(やくそく) combines 約(やく) (approximately/promise) and 束(そく) (bundle/bind). A promise is literally 'binding together.' Breaking a 約束(やくそく) is taken very seriously in Japanese culture. The childhood pinky promise (指切(ゆびき)りげんまん) has a dark traditional penalty song about swallowing needles."},

  {type:"teach", trg:"大切(たいせつ)にする", src:"to cherish / to take care of", pos:"verb", gender:null,
   note:"大切(たいせつ) (important) + にする (to make it so). Treating something with care.\nKanji: 大切(たいせつ)にする.",
   example:"A: この経験(けいけん)を大切(たいせつ)にしてください。\nB: はい、忘(わす)れません。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Please cherish this experience.\nB: Yes, I will not forget it.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"大切(たいせつ)にする goes beyond just 'valuing' something. It means actively taking care of it, nurturing it. You can 大切(たいせつ)にする relationships, memories, objects, and traditions. ものを大切(たいせつ)にする (taking care of things) is a core Japanese value taught from childhood, related to もったいない (what a waste)."},

  {type:"mc", q:"間(ま)に合(あ)う means:", opts:["to be late","to be on time","to wait","to cancel"], ans:"to be on time",
   hint:"Literally 'to fit within the t.../space,' describing arriving before the deadline."},

  {type:"match", pairs:[{trg:"来年(らいねん)",src:"next year"},{trg:"来月(らいげつ)",src:"next month"},{trg:"来週(らいしゅう)",src:"next week"},{trg:"約束(やくそく)",src:"promise"}]},

  {type:"match", pairs:[{trg:"就職(しゅうしょく)する",src:"get a job"},{trg:"入学(にゅうがく)する",src:"enter school"},{trg:"引(ひ)っ越(こ)しする",src:"move house"},{trg:"間(ま)に合(あ)う",src:"make it on time"}]},

  {type:"fb", s:"電車(でんしゃ)に{1}ますか？\n(Will you make it to the train?)", a:"間(ま)に合(あ)い", opts:["間(ま)に合(あ)い","急(いそ)ぎ","遅(おく)れ","乗(の)り"], sSrc:"Will you make it to the train?",
   hint:"The polite stem of the verb meaning 'to be on time' or 'to catch (a train).'"},

  {type:"mc", q:"約束(やくそく) covers:", opts:["only formal contracts","only casual promises","both promises and appointments","only work meetings"], ans:"both promises and appointments",
   hint:"This word serves for both interpersonal commitments and scheduled meetings."},

  {type:"fb", s:"{1}しないと間(ま)に合(あ)いません。\n(If we do not hurry, we will not make it.)", a:"急(いそ)が", opts:["急(いそ)が","間(ま)に合(あ)わ","遅(おく)れ","やめ"], sSrc:"If we do not hurry, we will not make it.",
   hint:"The negative conditional stem of the verb meaning 'to rush.'"},
{type:"match",pairs:[{trg:"退院(たいいん)する",src:"to leave the hospital / to be discharged"},{trg:"急(いそ)ぐ",src:"to hurry / to rush"},{trg:"大切(たいせつ)にする",src:"to cherish / to take care of"}]}]};
export default BATCH2_L_1;
