// Batch 4 — Unit 12 Lesson 2: Abilities & Skills
const BATCH4_L_2 = {
  id:"jav2_u12l_b4_2", title:"のうりょく", icon:"🏅", xp:15, board:true,
  steps:[
    {type:"intro", title:"のうりょくとスキル",
     desc:"Learn vocabulary for talking about abilities, skills, and talents. These words help you describe what you and others can and cannot do.",
     goals:["Talk about skills and talents","Compare abilities","Express improvement and progress"]},

    {type:"teach", trg:"のうりょく", src:"ability / capability", pos:"noun", gender:null,
     note:"Kanji: 能力. Can + power. General term for what you can do.",
     example:"にほんごのうりょくしけんをうけます。",
     exampleSrc:"I will take the Japanese Language Proficiency Test.",
     funFact:"The JLPT (日本語能力試験, nihongo nouryoku shiken) is the world's most-taken Japanese exam. Over 1 million people take it annually in 80+ countries. It has 5 levels from N5 (easiest) to N1 (hardest)."},

    {type:"teach", trg:"とくい", src:"good at / strong point", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 得意. Opposite of にがて.",
     example:"すうがくがとくいです。",
     exampleSrc:"I am good at math.",
     funFact:"Tokui implies natural strength or comfort with something. It is different from jouzu (skilled through practice). Tokui is about what comes easily, jouzu is about what you have mastered. The nuance matters."},

    {type:"teach", trg:"にがて", src:"bad at / weak point", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 苦手. Bitter + hand. Opposite of とくい.",
     example:"りょうりがにがてです。",
     exampleSrc:"I am bad at cooking.",
     funFact:"Nigate literally means 'bitter hand' and is softer than heta (unskilled). Saying nigate implies 'it is not my strong suit' rather than 'I am terrible at it.' Japanese people use nigate to be honest while remaining modest."},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"Kanji: 経験. Pass through + verify. What you have lived through.",
     example:"かいがいのけいけんはありますか？",
     exampleSrc:"Do you have overseas experience?",
     funFact:"Experience is highly valued in Japanese culture. 経験者 (keikensha, experienced person) is a common job requirement. The phrase 経験は力 (keiken wa chikara, experience is power) reflects the belief that lived experience trumps theoretical knowledge."},

    {type:"teach", trg:"じしん", src:"self-confidence", pos:"noun", gender:null,
     note:"Kanji: 自信. Self + believe. Different from じしん (earthquake, 地震).",
     example:"もっとじしんをもってください。",
     exampleSrc:"Please have more confidence.",
     funFact:"自信 and 地震 are homophones (both 'jishin') but completely different. Self-confidence (自信, self + belief) vs earthquake (地震, earth + shake). Context always makes the meaning clear, but it is a famous example of Japanese homophones."},

    {type:"teach", trg:"どりょくする", src:"to make an effort / work hard", pos:"verb", gender:null,
     note:"Kanji: 努力する. Strive + power. Valued highly in Japanese culture.",
     example:"まいにちどりょくしています。",
     exampleSrc:"I am making an effort every day.",
     funFact:"Doryoku is one of Japanese culture's core values. The belief that effort (not talent) determines success runs deep. 'Doryoku no hito' (person of effort) is one of the highest compliments. Schools reward effort as much as results."},

    {type:"teach", trg:"せいちょうする", src:"to grow / develop", pos:"verb", gender:null,
     note:"Kanji: 成長する. Achieve + long. Personal or professional growth.",
     example:"おおくのけいけんをとおしてせいちょうしました。",
     exampleSrc:"I grew through many experiences.",
     funFact:"Seichou in business means professional development. Companies invest heavily in employee growth (人材育成). The concept of lifelong growth and learning (生涯学習 shougai gakushuu) is deeply embedded in Japanese culture."},

    {type:"teach", trg:"ちょうせんする", src:"to challenge / take on a challenge", pos:"verb", gender:null,
     note:"Kanji: 挑戦する. Provoke + battle. Positive connotation in Japanese.",
     example:"あたらしいことにちょうせんしたいです。",
     exampleSrc:"I want to take on new challenges.",
     funFact:"In Japanese, 'challenge' is always positive: it means bravely attempting something new. 'Chousen suru' is used in job interviews, speeches, and everyday motivation. It lacks the aggressive connotation of 'challenging someone' in English."},

    {type:"teach", trg:"しっぱいする", src:"to fail", pos:"verb", gender:null,
     note:"Kanji: 失敗する. Lose + defeat. Making a mistake or failing.",
     example:"なんどもしっぱいしましたが、あきらめません。",
     exampleSrc:"I failed many times, but I won't give up.",
     funFact:"七転び八起き (nana korobi ya oki, fall seven times, rise eight) is Japan's most famous proverb about failure. Japanese culture teaches that failure is not the end but a necessary step toward mastery."},

    {type:"teach", trg:"せいこうする", src:"to succeed", pos:"verb", gender:null,
     note:"Kanji: 成功する. Achieve + merit. Accomplishing your goal.",
     example:"やっとしけんにせいこうしました。",
     exampleSrc:"I finally succeeded on the exam.",
     funFact:"Success in Japan is often credited to the group and to effort, not individual talent. Japanese athletes and businesspeople typically thank their teams and supporters first when celebrating seikousuru. Humility accompanies achievement."},

    {type:"teach", trg:"あきらめる", src:"to give up", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 諦める. Originally a Buddhist term for acceptance.",
     example:"まだあきらめないでください。",
     exampleSrc:"Please don't give up yet.",
     funFact:"Akirameru originally meant 'to see clearly' (from Buddhist 'to illuminate'). It evolved from enlightened acceptance to giving up. 諦めないで (don't give up) is one of the most common phrases of encouragement in Japanese sports and life."},

    {type:"teach", trg:"がんばる", src:"to do one's best / try hard", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 頑張る. Stubborn + stretch. Japan's most motivational verb.",
     example:"しけんにがんばってください。",
     exampleSrc:"Do your best on the exam.",
     funFact:"Ganbaru and its imperative 'ganbare!' (hang in there!) may be the most-used motivational word in Japan. It is shouted at sports events, said to students, and used as a greeting. It literally means 'to stretch yourself stubbornly.'"},

    {type:"teach", trg:"むり", src:"impossible / unreasonable", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 無理. Without + reason. Often used casually.",
     example:"もうむりです。たすけてください。",
     exampleSrc:"I can't do this anymore. Help me.",
     funFact:"Muri is incredibly common in casual speech. 'Muri muri!' (no way no way!) is how young people decline something. むりしないで (don't push yourself too hard) is a caring phrase that acknowledges someone's limits."},

    {type:"teach", trg:"コツ", src:"knack / trick / key technique", pos:"noun", gender:null,
     note:"The secret to doing something well. Often asked: コツはなんですか?",
     example:"にほんごのコツはまいにちれんしゅうすることです。",
     exampleSrc:"The trick to Japanese is practicing every day.",
     funFact:"Kotsu originally comes from 骨 (bone/core essence). The kotsu of something is its skeletal framework, the essential technique that makes it work. Asking for the kotsu is asking a master to share their secret."},

    {type:"mc", q:"What is the opposite of とくい?",
     opts:["にがて","じょうず","むり","がんばる"], ans:"にがて",
     hint:"Your weak point, the things that do not come naturally to you."},

    {type:"fb", s:"まだ{1}ないでください。", a:"あきらめ",
     sSrc:"Please don't give up yet.",
     opts:["あきらめ","がんばら","しっぱいし","ちょうせんし"],
     hint:"To stop trying, to surrender. Don't do this yet."},

    {type:"match", pairs:[
      {trg:"どりょく", src:"effort"},
      {trg:"せいこう", src:"success"},
      {trg:"しっぱい", src:"failure"},
      {trg:"ちょうせん", src:"challenge"}
    ]},

    {type:"mc", q:"がんばる means:",
     opts:["to do one's best","to give up","to fail","to succeed"], ans:"to do one's best",
     hint:"Japan's most famous motivational verb, heard everywhere."},

    {type:"fb", s:"にほんごの{1}はまいにちれんしゅうすることです。", a:"コツ",
     sSrc:"The trick to Japanese is practicing every day.",
     opts:["コツ","むり","じしん","のうりょく"],
     hint:"The essential technique or secret to doing something well."},

    {type:"mc", q:"What does むり mean?",
     opts:["impossible/unreasonable","easy","difficult","interesting"], ans:"impossible/unreasonable",
     hint:"When something is beyond what can reasonably be done."},

    {type:"mc", q:"じしん (自信) means:",
     opts:["self-confidence","earthquake","effort","ability"], ans:"self-confidence",
     hint:"S... + believe. Different kanji from the natural disaster word."}
  ]
};
export default BATCH4_L_2;
