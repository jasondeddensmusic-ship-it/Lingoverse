// Japanese V2 Unit 16. 計画(けいかく) (Plans & Intentions)
import BATCH11_L1 from './_batch11_u16_L01.js';
import BATCH10_L1 from './_batch10_u16_L01.js';
import BATCH9_L1 from './_batch9_u16_L01.js';
import BATCH7_L1 from './_batch7_u16_L01.js';
import BATCH8_L1 from './_batch8_u16_L01.js';
import BATCH6_L1 from './_batch6_u16_L01.js';
import BATCH4_L02 from './_batch4_u16_L02.js';
import BATCH4_L01 from './_batch4_u16_L01.js';
import BATCH2_L1 from './_batch2_u16_L01.js';
// Level: A2.2. JLPT N4 aligned.
import JEXP_16_L1 from './_temp_u16_expand_L01.js';import JEXP_16_L2 from './_temp_u16_expand_L02.js';import JEXP_16_L3 from './_temp_u16_expand_L03.js';
import F8_LETTER from './_f8_u16_letter.js';
import COVERAGE_U16 from './_coverage_u16.js';
// つもり, よてい, たい vs ほしい, ために.

const UNIT_16 = {
  n:16, lang:"ja", srcLang:"en", track:"v2",
  title:"計画(けいかく)", sub:"Plans & Intentions",
  icon:"📋", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: つもりです (I Intend To) ═══
{id:"jav2_u16l1", title:"つもりです", icon:"🎯", xp:15, board:true, steps:[
  {type:"intro", title:"つもりです",
   desc:"Talk about your plans and intentions for the future. Learn つもり (intend to), 予定(よてい) (plan/schedule), and the difference between たい (want to do) and ほしい (want a thing). These patterns let you discuss goals and desires naturally.",
   goals:["Express intentions with dictionary form + つもり","Express plans with 予定(よてい)","Distinguish たい (want to do) from ほしい (want a thing)"]},

  {type:"teach", trg:"〜つもり", src:"intend to ~ / plan to ~", pos:"part", gender:null,
   note:"Dictionary form + つもり = personal intention.\nPolite: つもりです. Negative: ないつもり or つもりはない.",
   example:"A: 夏休(なつやす)みに何(なに)をするつもりですか？\nB: 日本(にほん)に行(い)くつもりです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: What do you intend to do for summer vacation?\nB: I intend to go to Japan.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"つもり comes from 積もる (to pile up/accumulate), suggesting plans that have been building in your mind. It expresses firm personal intention. If plans are less certain, use かもしれない instead. つもり should not be used for other people's intentions in polite speech."},

  {type:"teach", trg:"予定(よてい)", src:"plan / schedule", pos:"noun", gender:null,
   note:"More concrete than つもり. Often for scheduled events.\n予定(よてい)がある = have plans. Kanji: 予定.",
   example:"A: 明日(あした)予定(よてい)がありますか？\nB: はい、友達(ともだち)と会(あ)う予定(よてい)です。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: Do you have plans tomorrow?\nB: Yes, I have plans to meet a friend.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"予定 combines 予 (in advance) and 定 (decide). While つもり is personal intention, よてい is more like a concrete schedule. Your 予定表(よていひょう) (schedule chart) at work lists meetings and deadlines. よてい feels more committed and external than つもり."},

  {type:"teach", trg:"〜たい", src:"want to do ~", pos:"part", gender:null,
   note:"Verb stem + たい = want to do. 食(た)べたい = want to eat.\nConjugates like an い-adjective.",
   example:"A: 何(なに)が食(た)べたいですか？\nB: 寿司(すし)が食(た)べたいです。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: What do you want to eat?\nB: I want to eat sushi.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"たい attaches to the verb stem (the ます form minus ます). The object particle can be either を or が: 寿司をたべたい and 寿司がたべたい are both correct. が emphasizes the desire, を emphasizes the action. たい is for YOUR desires; for others, use たがっている."},

  {type:"teach", trg:"ほしい", src:"want (a thing)", pos:"adj", gender:null,
   note:"い-adjective for wanting objects. Thing + が + ほしい.\nDifferent from たい (want to DO).",
   example:"A: 誕生日(たんじょうび)に何(なに)がほしいですか？\nB: 新(あたら)しい携帯(けいたい)がほしいです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: What do you want for your birthday?\nB: I want a new phone.\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"ほしい is only for wanting THINGS, not actions. For actions, use たい. 'I want water' = 水(みず)がほしい. 'I want to drink' = 飲(の)みたい. Also, ほしい is only used for your own desires. For someone else wanting something, use ほしがっている."},

  {type:"mc", q:"日本(にほん)に行(い)くつもりです means:", opts:["I intend to go to Japan","I want to go to Japan","I went to Japan","I should go to Japan"], ans:"I intend to go to Japan",
   hint:"つもり expresses a firm personal intention or plan."},

  {type:"teach", trg:"夏休(なつやす)み", src:"summer vacation", pos:"noun", gender:null,
   note:"夏(なつ) (summer) + 休(やす)み (rest/holiday). School and work vacations.\nKanji: 夏休み.",
   example:"A: 夏休(なつやす)みにどこに行(い)くつもりですか？\nB: 沖縄(おきなわ)に行(い)くつもりです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: Where do you intend to go for summer vacation?\nB: I intend to go to Okinawa.\nA: Do you go often?\nB: I go about once a month.",
   funFact:"Japanese summer vacation (natsu yasumi) for schools runs from mid-July to late August. Company employees typically get Obon holidays (mid-August) for about a week. This period sees massive domestic travel, with Shinkansen trains sold out weeks in advance."},

  {type:"teach", trg:"結婚(けっこん)する", src:"to get married", pos:"verb", gender:null,
   note:"する-verb. 結婚(けっこん) = marriage. 結婚(けっこん)している = is married.\nKanji: 結婚する.",
   example:"A: いつ結婚(けっこん)するつもりですか？\nB: まだ決(き)めていません。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: When do you intend to get married?\nB: I have not decided yet.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"結婚 combines 結 (tie/bind) and 婚 (marriage). Japanese weddings blend traditions: Shinto ceremonies at shrines, Western-style chapel weddings, and grand reception parties. The average cost of a Japanese wedding is remarkably high, often exceeding several million yen."},

  {type:"fb", s:"寿司(すし)が{1}たいです。\n(I want to eat sushi.)", a:"食(た)べ", opts:["食(た)べ","食(た)べる","食(た)べて","食(た)べた"], sSrc:"I want to eat sushi.",
   hint:"たい attaches to the verb stem (masu-form minus masu)."},

  {type:"teach", trg:"決(き)める", src:"to decide", pos:"verb", gender:null,
   note:"Group 2 verb. 決(き)めた = decided. まだ決(き)めていない = have not decided yet.\nKanji: 決める.",
   example:"A: もう決(き)めましたか？\nB: はい、日本(にほん)に行(い)くことに決(き)めました。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: Have you decided yet?\nB: Yes, I decided to go to Japan.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"決める comes from 決 (decide/determine). The pattern ことに決(き)める (decide to do) is a key JLPT N4 grammar point. It contrasts with ことにする (decide to do, more casual) and ことになる (it has been decided, by circumstances beyond your control)."},

  {type:"teach", trg:"新(あたら)しい", src:"new", pos:"adj", gender:null,
   note:"い-adjective. Opposite: 古(ふる)い (old, for things).\nKanji: 新しい.",
   example:"A: 新(あたら)しい車(くるま)がほしいです。\nB: どんな車(くるま)がほしいですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: I want a new car.\nB: What kind of car do you want?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"新しい is read あたらしい, but the kanji 新 is read しん in compounds: 新聞(しんぶん) (newspaper), 新幹線(しんかんせん) (bullet train, 'new trunk line'). The word was originally あらたしい in Old Japanese, but the sounds swapped over centuries through a process called metathesis."},

  {type:"mc", q:"新(あたら)しい携帯(けいたい)がほしい means:", opts:["I want to use a phone","I want a new phone","I have a new phone","I bought a new phone"], ans:"I want a new phone",
   hint:"ほしい expresses wanting a THING. The particle が marks what you w...."},

  {type:"match", pairs:[{trg:"つもり",src:"intend to"},{trg:"予定(よてい)",src:"plan/schedule"},{trg:"たい",src:"want to do"},{trg:"ほしい",src:"want (thing)"}]},

  {type:"fb", s:"明日(あした){1}がありますか？\n(Do you have plans tomorrow?)", a:"予定(よてい)", opts:["予定(よてい)","つもり","計画(けいかく)","仕事(しごと)"], sSrc:"Do you have plans tomorrow?",
   hint:"The noun for a concrete plan or scheduled event."},

  {type:"match", pairs:[{trg:"夏休(なつやす)み",src:"summer vacation"},{trg:"結婚(けっこん)する",src:"to marry"},{trg:"決(き)める",src:"to decide"},{trg:"新(あたら)しい",src:"new"}]},

  {type:"mc", q:"The difference between たい and ほしい is:", opts:["たい is polite, ほしい is casual","たい is past, ほしい is present","たい is for actions, ほしい is for things","No difference"], ans:"たい is for actions, ほしい is for things",
   hint:"One attaches to verbs (want to DO), the other takes nouns (want a THING)."},
]},

// ═══ L2: ために (In Order To) ═══
{id:"jav2_u16l2", title:"ために", icon:"🏁", xp:15, board:true, steps:[
  {type:"intro", title:"ために",
   desc:"Express purpose and goals with ために (in order to). Learn to connect your desires to actions, talk about what you need to achieve your goals, and discuss future aspirations with confidence.",
   goals:["Express purpose with dictionary form + ために","Talk about goals and aspirations","Combine intention patterns: つもり, たい, ために"]},

  {type:"teach", trg:"〜ために", src:"in order to ~ / for the purpose of ~", pos:"part", gender:null,
   note:"Dictionary form + ために = purpose. Noun + のために = for the sake of.\nKanji: ために uses 為.",
   example:"A: 日本語(にほんご)を勉強(べんきょう)するために何(なに)をしていますか？\nB: 毎日(まいにち)アプリで練習(れんしゅう)しています。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: What are you doing in order to study Japanese?\nB: I practice with an app every day.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"ために is one of the most empowering grammar points. It lets you articulate WHY you do things. It comes from 為 (sake/benefit). There are two uses: verb + ために (to achieve an action) and noun + のために (for the sake of a person/thing)."},

  {type:"teach", trg:"夢(ゆめ)", src:"dream / aspiration", pos:"noun", gender:null,
   note:"Both sleeping dreams and life dreams. 夢(ゆめ)がある = to have a dream.\nKanji: 夢.",
   example:"A: 夢(ゆめ)は何(なん)ですか？\nB: 医者(いしゃ)になることです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: What is your dream?\nB: It is to become a doctor.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"夢 is one of the most beloved kanji in Japan. It appears in graduation speeches, company mottos, and song lyrics constantly. The phrase yume wo kanasuru (to fulfill a dream) is deeply motivational. Dream-themed songs dominate Japanese pop music."},

  {type:"teach", trg:"将来(しょうらい)", src:"future / in the future", pos:"noun", gender:null,
   note:"Used for personal future plans and career aspirations.\nKanji: 将来.",
   example:"A: 将来(しょうらい)何(なに)になりたいですか？\nB: エンジニアになりたいです。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: What do you want to become in the future?\nB: I want to become an engineer.\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"将来 combines 将 (lead/command) and 来 (come). It is specifically for personal futures and life planning. For the general future of society or the world, 未来 (mirai) is used instead. School essays about 将来(しょうらい)の夢(ゆめ) (future dreams) are a rite of passage in Japan."},

  {type:"teach", trg:"〜になる", src:"to become ~", pos:"verb", gender:null,
   note:"Noun + になる = become that thing. A key pattern for career aspirations.\n医者(いしゃ)になる = become a doctor.",
   example:"A: 先生(せんせい)になるために勉強(べんきょう)しています。\nB: 素晴(すば)らしいですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: I am studying in order to become a teacher.\nB: That is wonderful.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"なる (to become) is one of the most versatile verbs. With nouns: 医者(いしゃ)になる (become a doctor). With adjectives: 大(おお)きくなる (become big), 静(しず)かになる (become quiet). The pattern shows transformation and is essential for discussing life changes."},

  {type:"mc", q:"日本語(にほんご)を勉強(べんきょう)するために means:", opts:["In order to study Japanese","After studying Japanese","Instead of studying Japanese","Because I studied Japanese"], ans:"In order to study Japanese",
   hint:"ために expresses the PURPOSE of doing something."},

  {type:"teach", trg:"頑張(がんば)る", src:"to do one's best / to persevere", pos:"verb", gender:null,
   note:"Group 1 verb. 頑張(がんば)って！ = Do your best! (encouragement).\nKanji: 頑張る.",
   example:"A: 試験(しけん)のために頑張(がんば)ります。\nB: 頑張(がんば)ってください！\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: I will do my best for the exam.\nB: Do your best!\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"頑張る is perhaps the most Japanese of all Japanese words. It combines 頑 (stubborn) and 張る (stretch/strain). 頑張って (do your best!) is said before exams, sports, work projects, and virtually any challenge. It reflects the cultural value of effort and perseverance."},

  {type:"teach", trg:"練習(れんしゅう)する", src:"to practice", pos:"verb", gender:null,
   note:"する-verb. 練習(れんしゅう) = practice/training.\nKanji: 練習する.",
   example:"A: 毎日(まいにち)ピアノを練習(れんしゅう)しています。\nB: 上手(じょうず)になりたいですか？\nA: はい、コンサートのために頑張(がんば)っています。\nB: すごいですね。応援(おうえん)しています。",
   exampleSrc:"A: I practice piano every day.\nB: Do you want to become skilled?\nA: Yes, I am doing my best for the concert.\nB: That is impressive. I am cheering for you.",
   funFact:"練習 combines 練 (refine/knead) and 習 (learn/practice). The Japanese approach to mastery emphasizes repetitive practice. The concept of 'renshu' extends beyond skills to include spiritual and mental training. Martial arts dojos are called 練習場(れんしゅうじょう) (practice places)."},

  {type:"fb", s:"医者(いしゃ)になる{1}に勉強(べんきょう)しています。\n(I am studying in order to become a doctor.)", a:"ため", opts:["ため","つもり","こと","前(まえ)"], sSrc:"I am studying in order to become a doctor.",
   hint:"The word meaning 'for the purpose of' or 'in order to.'"},

  {type:"teach", trg:"試験(しけん)", src:"exam / test", pos:"noun", gender:null,
   note:"General word for exams. 入学試験(にゅうがくしけん) = entrance exam.\nKanji: 試験.",
   example:"A: 試験(しけん)はいつですか？\nB: 来月(らいげつ)です。たくさん勉強(べんきょう)するつもりです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: When is the exam?\nB: Next month. I intend to study a lot.\nA: How was it?\nB: It was very good.",
   funFact:"試験 combines 試 (try) and 験 (test). Exams hold enormous weight in Japanese society. The entrance exam system (juken) shapes education, careers, and even family life. University entrance exams in January-February are a national event, with news coverage of students entering exam halls."},

  {type:"teach", trg:"卒業(そつぎょう)する", src:"to graduate", pos:"verb", gender:null,
   note:"する-verb. 卒業(そつぎょう) = graduation.\nKanji: 卒業する.",
   example:"A: 来年(らいねん)卒業(そつぎょう)する予定(よてい)です。\nB: 卒業(そつぎょう)した後(あと)で何(なに)をするつもりですか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: I plan to graduate next year.\nB: What do you intend to do after graduating?\nA: When was it?\nB: It was last summer.",
   funFact:"卒業 combines 卒 (finish/complete) and 業 (work/studies). March is graduation month in Japan. Ceremonies are formal affairs with sakura (cherry blossoms) blooming as a backdrop. The second button from the top of a boy's uniform is traditionally given to someone special as a keepsake."},

  {type:"teach", trg:"必要(ひつよう)", src:"necessary / needed", pos:"adj", gender:null,
   note:"な-adjective. 必要(ひつよう)なもの = necessary things.\nKanji: 必要.",
   example:"A: 日本語(にほんご)の試験(しけん)のために何(なに)が必要(ひつよう)ですか？\nB: たくさんの練習(れんしゅう)が必要(ひつよう)です。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: What is needed for the Japanese exam?\nB: A lot of practice is needed.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"必要 combines 必 (certainly/must) and 要 (need/essential). The kanji 必 shows a heart pierced by certainty. 必要(ひつよう)ない (not necessary) is a useful negative. In business Japanese, 必要 appears constantly in planning and requirements documents."},

  {type:"mc", q:"頑張(がんば)って means:", opts:["good luck","do your best","thank you","I am sorry"], ans:"do your best",
   hint:"The most common encouragement phrase in Japanese, said before challenges."},

  {type:"match", pairs:[{trg:"ために",src:"in order to"},{trg:"夢(ゆめ)",src:"dream"},{trg:"将来(しょうらい)",src:"future"},{trg:"になる",src:"to become"}]},

  {type:"match", pairs:[{trg:"頑張(がんば)る",src:"do one's best"},{trg:"練習(れんしゅう)する",src:"to practice"},{trg:"試験(しけん)",src:"exam"},{trg:"卒業(そつぎょう)する",src:"to graduate"}]},

  {type:"fb", s:"{1}は何(なん)ですか？\n(What is your dream?)", a:"夢(ゆめ)", opts:["夢(ゆめ)","仕事(しごと)","名前(なまえ)","趣味(しゅみ)"], sSrc:"What is your dream?",
   hint:"The word for both sleeping dreams and life aspirations."},

  {type:"mc", q:"卒業(そつぎょう)した後(あと)で何(なに)をするつもりですか means:", opts:["What did you do before graduating?","Why did you graduate?","What do you intend to do after graduating?","When will you graduate?"], ans:"What do you intend to do after graduating?",
   hint:"This combines 後(あと)で (a...), つもり (i...), and a question about future plans."},

  {type:"tip", title:"Talking About Your Future",
   text:"Intention: dictionary form + つもり\n日本(にほん)に行(い)くつもりです。(I intend to go to Japan.)\n\nPlan: 予定(よてい) + がある / dictionary form + 予定(よてい)です\n明日(あした)予定(よてい)があります。(I have plans tomorrow.)\n\nDesire: verb stem + たい / noun + がほしい\n行(い)きたいです。(I want to go.)\n車(くるま)がほしい。(I want a car.)\n\nPurpose: dictionary form + ために\n勉強(べんきょう)するために図書館(としょかん)に行(い)く。(I go to the library in order to study.)",
   deepDive:{title:"つもり vs 予定(よてい) vs たい",
    text:"These three overlap but have different nuances:\n\nつもり = personal intention. You have decided.\n予定(よてい) = concrete plan/schedule. Often involves others or dates.\nたい = desire/wish. You want to, but may not have decided.\n\nExample: 日本(にほん)に行(い)きたい (I want to go to Japan) shows desire.\n日本(にほん)に行(い)くつもり (I intend to go to Japan) shows decision.\n日本(にほん)に行(い)く予定(よてい) (I have plans to go to Japan) shows scheduling.\n\nUsing the right one shows your level of commitment and makes your Japanese more precise."}},
{type:"match",pairs:[{trg:"必要(ひつよう)",src:"necessary / needed"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
,F8_LETTER
,
  JEXP_16_L1,
  JEXP_16_L2,
  JEXP_16_L3
, COVERAGE_U16]};
export default UNIT_16;
