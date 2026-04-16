// Japanese V2 Unit 16. けいかく (Plans & Intentions)
import BATCH4_L02 from './_batch4_u16_L02.js';
import BATCH4_L01 from './_batch4_u16_L01.js';
import BATCH2_L1 from './_batch2_u16_L01.js';
// Level: A2.2. JLPT N4 aligned.
import JEXP_16_L1 from './_temp_u16_expand_L01.js';import JEXP_16_L2 from './_temp_u16_expand_L02.js';import JEXP_16_L3 from './_temp_u16_expand_L03.js';
// つもり, よてい, たい vs ほしい, ために.

const UNIT_16 = {
  n:16, lang:"ja", srcLang:"en", track:"v2",
  title:"けいかく", sub:"Plans & Intentions",
  icon:"📋", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: つもりです (I Intend To) ═══
{id:"jav2_u16l1", title:"つもりです", icon:"🎯", xp:15, board:true, steps:[
  {type:"intro", title:"つもりです",
   desc:"Talk about your plans and intentions for the future. Learn つもり (intend to), よてい (plan/schedule), and the difference between たい (want to do) and ほしい (want a thing). These patterns let you discuss goals and desires naturally.",
   goals:["Express intentions with dictionary form + つもり","Express plans with よてい","Distinguish たい (want to do) from ほしい (want a thing)"]},

  {type:"teach", trg:"〜つもり", src:"intend to ~ / plan to ~", pos:"part", gender:null,
   note:"Dictionary form + つもり = personal intention.\nPolite: つもりです. Negative: ないつもり or つもりはない.",
   example:"A: なつやすみになにをするつもりですか？\nB: にほんにいくつもりです。",
   exampleSrc:"A: What do you intend to do for summer vacation?\nB: I intend to go to Japan.",
   funFact:"つもり comes from 積もる (to pile up/accumulate), suggesting plans that have been building in your mind. It expresses firm personal intention. If plans are less certain, use かもしれない instead. つもり should not be used for other people's intentions in polite speech."},

  {type:"teach", trg:"よてい", src:"plan / schedule", pos:"noun", gender:null,
   note:"More concrete than つもり. Often for scheduled events.\nよていがある = have plans. Kanji: 予定.",
   example:"A: あしたよていがありますか？\nB: はい、ともだちとあうよていです。",
   exampleSrc:"A: Do you have plans tomorrow?\nB: Yes, I have plans to meet a friend.",
   funFact:"予定 combines 予 (in advance) and 定 (decide). While つもり is personal intention, よてい is more like a concrete schedule. Your よていひょう (schedule chart) at work lists meetings and deadlines. よてい feels more committed and external than つもり."},

  {type:"teach", trg:"〜たい", src:"want to do ~", pos:"part", gender:null,
   note:"Verb stem + たい = want to do. たべたい = want to eat.\nConjugates like an い-adjective.",
   example:"A: なにがたべたいですか？\nB: すしがたべたいです。",
   exampleSrc:"A: What do you want to eat?\nB: I want to eat sushi.",
   funFact:"たい attaches to the verb stem (the ます form minus ます). The object particle can be either を or が: すしをたべたい and すしがたべたい are both correct. が emphasizes the desire, を emphasizes the action. たい is for YOUR desires; for others, use たがっている."},

  {type:"teach", trg:"ほしい", src:"want (a thing)", pos:"adj", gender:null,
   note:"い-adjective for wanting objects. Thing + が + ほしい.\nDifferent from たい (want to DO).",
   example:"A: たんじょうびになにがほしいですか？\nB: あたらしいけいたいがほしいです。",
   exampleSrc:"A: What do you want for your birthday?\nB: I want a new phone.",
   funFact:"ほしい is only for wanting THINGS, not actions. For actions, use たい. 'I want water' = みずがほしい. 'I want to drink' = のみたい. Also, ほしい is only used for your own desires. For someone else wanting something, use ほしがっている."},

  {type:"mc", q:"にほんにいくつもりです means:", opts:["I intend to go to Japan","I want to go to Japan","I went to Japan","I should go to Japan"], ans:"I intend to go to Japan",
   hint:"つもり expresses a firm personal intention or plan."},

  {type:"teach", trg:"なつやすみ", src:"summer vacation", pos:"noun", gender:null,
   note:"なつ (summer) + やすみ (rest/holiday). School and work vacations.\nKanji: 夏休み.",
   example:"A: なつやすみにどこにいくつもりですか？\nB: おきなわにいくつもりです。",
   exampleSrc:"A: Where do you intend to go for summer vacation?\nB: I intend to go to Okinawa.",
   funFact:"Japanese summer vacation (natsu yasumi) for schools runs from mid-July to late August. Company employees typically get Obon holidays (mid-August) for about a week. This period sees massive domestic travel, with Shinkansen trains sold out weeks in advance."},

  {type:"teach", trg:"けっこんする", src:"to get married", pos:"verb", gender:null,
   note:"する-verb. けっこん = marriage. けっこんしている = is married.\nKanji: 結婚する.",
   example:"A: いつけっこんするつもりですか？\nB: まだきめていません。",
   exampleSrc:"A: When do you intend to get married?\nB: I have not decided yet.",
   funFact:"結婚 combines 結 (tie/bind) and 婚 (marriage). Japanese weddings blend traditions: Shinto ceremonies at shrines, Western-style chapel weddings, and grand reception parties. The average cost of a Japanese wedding is remarkably high, often exceeding several million yen."},

  {type:"fb", s:"すしが{1}たいです。\n(I want to eat sushi.)", a:"たべ", opts:["たべ","たべる","たべて","たべた"], sSrc:"I want to eat sushi.",
   hint:"たい attaches to the verb stem (masu-form minus masu)."},

  {type:"teach", trg:"きめる", src:"to decide", pos:"verb", gender:null,
   note:"Group 2 verb. きめた = decided. まだきめていない = have not decided yet.\nKanji: 決める.",
   example:"A: もうきめましたか？\nB: はい、にほんにいくことにきめました。",
   exampleSrc:"A: Have you decided yet?\nB: Yes, I decided to go to Japan.",
   funFact:"決める comes from 決 (decide/determine). The pattern ことにきめる (decide to do) is a key JLPT N4 grammar point. It contrasts with ことにする (decide to do, more casual) and ことになる (it has been decided, by circumstances beyond your control)."},

  {type:"teach", trg:"あたらしい", src:"new", pos:"adj", gender:null,
   note:"い-adjective. Opposite: ふるい (old, for things).\nKanji: 新しい.",
   example:"A: あたらしいくるまがほしいです。\nB: どんなくるまがほしいですか？",
   exampleSrc:"A: I want a new car.\nB: What kind of car do you want?",
   funFact:"新しい is read あたらしい, but the kanji 新 is read しん in compounds: しんぶん (newspaper), しんかんせん (bullet train, 'new trunk line'). The word was originally あらたしい in Old Japanese, but the sounds swapped over centuries through a process called metathesis."},

  {type:"mc", q:"あたらしいけいたいがほしい means:", opts:["I want to use a phone","I want a new phone","I have a new phone","I bought a new phone"], ans:"I want a new phone",
   hint:"ほしい expresses wanting a THING. The particle が marks what you w...."},

  {type:"match", pairs:[{trg:"つもり",src:"intend to"},{trg:"よてい",src:"plan/schedule"},{trg:"たい",src:"want to do"},{trg:"ほしい",src:"want (thing)"}]},

  {type:"fb", s:"あした{1}がありますか？\n(Do you have plans tomorrow?)", a:"よてい", opts:["よてい","つもり","けいかく","しごと"], sSrc:"Do you have plans tomorrow?",
   hint:"The noun for a concrete plan or scheduled event."},

  {type:"match", pairs:[{trg:"なつやすみ",src:"summer vacation"},{trg:"けっこんする",src:"to marry"},{trg:"きめる",src:"to decide"},{trg:"あたらしい",src:"new"}]},

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
   example:"A: にほんごをべんきょうするためになにをしていますか？\nB: まいにちアプリでれんしゅうしています。",
   exampleSrc:"A: What are you doing in order to study Japanese?\nB: I practice with an app every day.",
   funFact:"ために is one of the most empowering grammar points. It lets you articulate WHY you do things. It comes from 為 (sake/benefit). There are two uses: verb + ために (to achieve an action) and noun + のために (for the sake of a person/thing)."},

  {type:"teach", trg:"ゆめ", src:"dream / aspiration", pos:"noun", gender:null,
   note:"Both sleeping dreams and life dreams. ゆめがある = to have a dream.\nKanji: 夢.",
   example:"A: ゆめはなんですか？\nB: いしゃになることです。",
   exampleSrc:"A: What is your dream?\nB: It is to become a doctor.",
   funFact:"夢 is one of the most beloved kanji in Japan. It appears in graduation speeches, company mottos, and song lyrics constantly. The phrase yume wo kanasuru (to fulfill a dream) is deeply motivational. Dream-themed songs dominate Japanese pop music."},

  {type:"teach", trg:"しょうらい", src:"future / in the future", pos:"noun", gender:null,
   note:"Used for personal future plans and career aspirations.\nKanji: 将来.",
   example:"A: しょうらいなにになりたいですか？\nB: エンジニアになりたいです。",
   exampleSrc:"A: What do you want to become in the future?\nB: I want to become an engineer.",
   funFact:"将来 combines 将 (lead/command) and 来 (come). It is specifically for personal futures and life planning. For the general future of society or the world, 未来 (mirai) is used instead. School essays about しょうらいのゆめ (future dreams) are a rite of passage in Japan."},

  {type:"teach", trg:"〜になる", src:"to become ~", pos:"verb", gender:null,
   note:"Noun + になる = become that thing. A key pattern for career aspirations.\nいしゃになる = become a doctor.",
   example:"A: せんせいになるためにべんきょうしています。\nB: すばらしいですね。",
   exampleSrc:"A: I am studying in order to become a teacher.\nB: That is wonderful.",
   funFact:"なる (to become) is one of the most versatile verbs. With nouns: いしゃになる (become a doctor). With adjectives: おおきくなる (become big), しずかになる (become quiet). The pattern shows transformation and is essential for discussing life changes."},

  {type:"mc", q:"にほんごをべんきょうするために means:", opts:["In order to study Japanese","After studying Japanese","Instead of studying Japanese","Because I studied Japanese"], ans:"In order to study Japanese",
   hint:"ために expresses the PURPOSE of doing something."},

  {type:"teach", trg:"がんばる", src:"to do one's best / to persevere", pos:"verb", gender:null,
   note:"Group 1 verb. がんばって！ = Do your best! (encouragement).\nKanji: 頑張る.",
   example:"A: しけんのためにがんばります。\nB: がんばってください！",
   exampleSrc:"A: I will do my best for the exam.\nB: Do your best!",
   funFact:"がんばる is perhaps the most Japanese of all Japanese words. It combines 頑 (stubborn) and 張る (stretch/strain). がんばって (do your best!) is said before exams, sports, work projects, and virtually any challenge. It reflects the cultural value of effort and perseverance."},

  {type:"teach", trg:"れんしゅうする", src:"to practice", pos:"verb", gender:null,
   note:"する-verb. れんしゅう = practice/training.\nKanji: 練習する.",
   example:"A: まいにちピアノをれんしゅうしています。\nB: じょうずになりたいですか？\nA: はい、コンサートのためにがんばっています。",
   exampleSrc:"A: I practice piano every day.\nB: Do you want to become skilled?\nA: Yes, I am doing my best for the concert.",
   funFact:"練習 combines 練 (refine/knead) and 習 (learn/practice). The Japanese approach to mastery emphasizes repetitive practice. The concept of 'renshu' extends beyond skills to include spiritual and mental training. Martial arts dojos are called renshujo (practice places)."},

  {type:"fb", s:"いしゃになる{1}にべんきょうしています。\n(I am studying in order to become a doctor.)", a:"ため", opts:["ため","つもり","こと","まえ"], sSrc:"I am studying in order to become a doctor.",
   hint:"The word meaning 'for the purpose of' or 'in order to.'"},

  {type:"teach", trg:"しけん", src:"exam / test", pos:"noun", gender:null,
   note:"General word for exams. にゅうがくしけん = entrance exam.\nKanji: 試験.",
   example:"A: しけんはいつですか？\nB: らいげつです。たくさんべんきょうするつもりです。",
   exampleSrc:"A: When is the exam?\nB: Next month. I intend to study a lot.",
   funFact:"試験 combines 試 (try) and 験 (test). Exams hold enormous weight in Japanese society. The entrance exam system (juken) shapes education, careers, and even family life. University entrance exams in January-February are a national event, with news coverage of students entering exam halls."},

  {type:"teach", trg:"そつぎょうする", src:"to graduate", pos:"verb", gender:null,
   note:"する-verb. そつぎょう = graduation.\nKanji: 卒業する.",
   example:"A: らいねんそつぎょうするよていです。\nB: そつぎょうしたあとでなにをするつもりですか？",
   exampleSrc:"A: I plan to graduate next year.\nB: What do you intend to do after graduating?",
   funFact:"卒業 combines 卒 (finish/complete) and 業 (work/studies). March is graduation month in Japan. Ceremonies are formal affairs with sakura (cherry blossoms) blooming as a backdrop. The second button from the top of a boy's uniform is traditionally given to someone special as a keepsake."},

  {type:"teach", trg:"ひつよう", src:"necessary / needed", pos:"adj", gender:null,
   note:"な-adjective. ひつようなもの = necessary things.\nKanji: 必要.",
   example:"A: にほんごのしけんのためになにがひつようですか？\nB: たくさんのれんしゅうがひつようです。",
   exampleSrc:"A: What is needed for the Japanese exam?\nB: A lot of practice is needed.",
   funFact:"必要 combines 必 (certainly/must) and 要 (need/essential). The kanji 必 shows a heart pierced by certainty. ひつようない (not necessary) is a useful negative. In business Japanese, ひつよう appears constantly in planning and requirements documents."},

  {type:"mc", q:"がんばって means:", opts:["good luck","do your best","thank you","I am sorry"], ans:"do your best",
   hint:"The most common encouragement phrase in Japanese, said before challenges."},

  {type:"match", pairs:[{trg:"ために",src:"in order to"},{trg:"ゆめ",src:"dream"},{trg:"しょうらい",src:"future"},{trg:"になる",src:"to become"}]},

  {type:"match", pairs:[{trg:"がんばる",src:"do one's best"},{trg:"れんしゅうする",src:"to practice"},{trg:"しけん",src:"exam"},{trg:"そつぎょうする",src:"to graduate"}]},

  {type:"fb", s:"{1}はなんですか？\n(What is your dream?)", a:"ゆめ", opts:["ゆめ","しごと","なまえ","しゅみ"], sSrc:"What is your dream?",
   hint:"The word for both sleeping dreams and life aspirations."},

  {type:"mc", q:"そつぎょうしたあとでなにをするつもりですか means:", opts:["What did you do before graduating?","Why did you graduate?","What do you intend to do after graduating?","When will you graduate?"], ans:"What do you intend to do after graduating?",
   hint:"This combines あとで (a...), つもり (i...), and a question about future plans."},

  {type:"tip", title:"Talking About Your Future",
   text:"Intention: dictionary form + つもり\nにほんにいくつもりです。(I intend to go to Japan.)\n\nPlan: よてい + がある / dictionary form + よていです\nあしたよていがあります。(I have plans tomorrow.)\n\nDesire: verb stem + たい / noun + がほしい\nいきたいです。(I want to go.)\nくるまがほしい。(I want a car.)\n\nPurpose: dictionary form + ために\nべんきょうするためにとしょかんにいく。(I go to the library in order to study.)",
   deepDive:{title:"つもり vs よてい vs たい",
    text:"These three overlap but have different nuances:\n\nつもり = personal intention. You have decided.\nよてい = concrete plan/schedule. Often involves others or dates.\nたい = desire/wish. You want to, but may not have decided.\n\nExample: にほんにいきたい (I want to go to Japan) shows desire.\nにほんにいくつもり (I intend to go to Japan) shows decision.\nにほんにいくよてい (I have plans to go to Japan) shows scheduling.\n\nUsing the right one shows your level of commitment and makes your Japanese more precise."}},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
]};
export default UNIT_16;
