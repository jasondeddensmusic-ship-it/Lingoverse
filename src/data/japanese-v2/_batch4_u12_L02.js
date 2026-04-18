// Batch 4 — Unit 12 Lesson 2: Abilities & Skills
const BATCH4_L_2 = {
  id:"jav2_u12l_b4_2", title:"能力(のうりょく)", icon:"🏅", xp:15, board:true,
  steps:[
    {type:"intro", title:"能力(のうりょく)とスキル",
     desc:"Learn vocabulary for talking about abilities, skills, and talents. These words help you describe what you and others can and cannot do.",
     goals:["Talk about skills and talents","Compare abilities","Express improvement and progress"]},

    {type:"teach", trg:"能力(のうりょく)", src:"ability / capability", pos:"noun", gender:null,
     note:"Can + power. General term for what you can do.",
     example:"日本語能力(にほんごのうりょく)試験(しけん)を受(う)けます。",
     exampleSrc:"I will take the Japanese Language Proficiency Test.",
     funFact:"The JLPT (日本語能力試験(にほんごのうりょくしけん)) is the world's most-taken Japanese exam. Over 1 million people take it annually in 80+ countries. It has 5 levels from N5 (easiest) to N1 (hardest)."},

    {type:"teach", trg:"得意(とくい)", src:"good at / strong point", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of 苦手(にがて).",
     example:"数学(すうがく)が得意(とくい)です。",
     exampleSrc:"I am good at math.",
     funFact:"Tokui implies natural strength or comfort with something. It is different from jouzu (skilled through practice). Tokui is about what comes easily, jouzu is about what you have mastered. The nuance matters."},

    {type:"teach", trg:"苦手(にがて)", src:"bad at / weak point", pos:"adj", gender:null,
     note:"Na-adjective. Bitter + hand. Opposite of 得意(とくい).",
     example:"料理(りょうり)が苦手(にがて)です。",
     exampleSrc:"I am bad at cooking.",
     funFact:"Nigate literally means 'bitter hand' and is softer than heta (unskilled). Saying nigate implies 'it is not my strong suit' rather than 'I am terrible at it.' Japanese people use nigate to be honest while remaining modest."},

    {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
     note:"Pass through + verify. What you have lived through.",
     example:"海外(かいがい)の経験(けいけん)はありますか？",
     exampleSrc:"Do you have overseas experience?",
     funFact:"Experience is highly valued in Japanese culture. 経験者(けいけんしゃ) (keikensha, experienced person) is a common job requirement. The phrase 経験(けいけん)は力(ちから) (experience is power) reflects the belief that lived experience trumps theoretical knowledge."},

    {type:"teach", trg:"自信(じしん)", src:"self-confidence", pos:"noun", gender:null,
     note:"Self + believe. Different from 地震(じしん) (earthquake).",
     example:"もっと自信(じしん)を持(も)ってください。",
     exampleSrc:"Please have more confidence.",
     funFact:"自信 and 地震 are homophones (both 'jishin') but completely different. Self-confidence (自信, self + belief) vs earthquake (地震, earth + shake). Context always makes the meaning clear, but it is a famous example of Japanese homophones."},

    {type:"teach", trg:"努力(どりょく)する", src:"to make an effort / work hard", pos:"verb", gender:null,
     note:"Strive + power. Valued highly in Japanese culture.",
     example:"毎日(まいにち)努力(どりょく)しています。",
     exampleSrc:"I am making an effort every day.",
     funFact:"Doryoku is one of Japanese culture's core values. The belief that effort (not talent) determines success runs deep. '努力(どりょく)の人(ひと)' (person of effort) is one of the highest compliments. Schools reward effort as much as results."},

    {type:"teach", trg:"成長(せいちょう)する", src:"to grow / develop", pos:"verb", gender:null,
     note:"Achieve + long. Personal or professional growth.",
     example:"多(おお)くの経験(けいけん)を通(とお)して成長(せいちょう)しました。",
     exampleSrc:"I grew through many experiences.",
     funFact:"Seichou in business means professional development. Companies invest heavily in employee growth (人材育成(じんざいいくせい)). The concept of lifelong growth and learning (生涯学習(しょうがいがくしゅう)) is deeply embedded in Japanese culture."},

    {type:"teach", trg:"挑戦(ちょうせん)する", src:"to challenge / take on a challenge", pos:"verb", gender:null,
     note:"Provoke + battle. Positive connotation in Japanese.",
     example:"新(あたら)しいことに挑戦(ちょうせん)したいです。",
     exampleSrc:"I want to take on new challenges.",
     funFact:"In Japanese, 'challenge' is always positive: it means bravely attempting something new. '挑戦(ちょうせん)する' is used in job interviews, speeches, and everyday motivation. It lacks the aggressive connotation of 'challenging someone' in English."},

    {type:"teach", trg:"失敗(しっぱい)する", src:"to fail", pos:"verb", gender:null,
     note:"Lose + defeat. Making a mistake or failing.",
     example:"何度(なんど)も失敗(しっぱい)しましたが、諦(あきら)めません。",
     exampleSrc:"I failed many times, but I won't give up.",
     funFact:"七転(ななころ)び八起(やお)き (nana korobi ya oki, fall seven times, rise eight) is Japan's most famous proverb about failure. Japanese culture teaches that failure is not the end but a necessary step toward mastery."},

    {type:"teach", trg:"成功(せいこう)する", src:"to succeed", pos:"verb", gender:null,
     note:"Achieve + merit. Accomplishing your goal.",
     example:"やっと試験(しけん)に成功(せいこう)しました。",
     exampleSrc:"I finally succeeded on the exam.",
     funFact:"Success in Japan is often credited to the group and to effort, not individual talent. Japanese athletes and businesspeople typically thank their teams and supporters first when celebrating seikousuru. Humility accompanies achievement."},

    {type:"teach", trg:"諦(あきら)める", src:"to give up", pos:"verb", gender:null,
     note:"Ichidan verb. Originally a Buddhist term for acceptance.",
     example:"まだ諦(あきら)めないでください。",
     exampleSrc:"Please don't give up yet.",
     funFact:"Akirameru originally meant 'to see clearly' (from Buddhist 'to illuminate'). It evolved from enlightened acceptance to giving up. 諦(あきら)めないで (don't give up) is one of the most common phrases of encouragement in Japanese sports and life."},

    {type:"teach", trg:"頑張(がんば)る", src:"to do one's best / try hard", pos:"verb", gender:null,
     note:"Godan verb. Stubborn + stretch. Japan's most motivational verb.",
     example:"試験(しけん)に頑張(がんば)ってください。",
     exampleSrc:"Do your best on the exam.",
     funFact:"Ganbaru and its imperative '頑張(がんば)れ!' (hang in there!) may be the most-used motivational word in Japan. It is shouted at sports events, said to students, and used as a greeting. It literally means 'to stretch yourself stubbornly.'"},

    {type:"teach", trg:"無理(むり)", src:"impossible / unreasonable", pos:"adj", gender:null,
     note:"Na-adjective. Without + reason. Often used casually.",
     example:"もう無理(むり)です。助(たす)けてください。",
     exampleSrc:"I can't do this anymore. Help me.",
     funFact:"Muri is incredibly common in casual speech. '無理(むり)無理(むり)!' (no way no way!) is how young people decline something. 無理(むり)しないで (don't push yourself too hard) is a caring phrase that acknowledges someone's limits."},

    {type:"teach", trg:"コツ", src:"knack / trick / key technique", pos:"noun", gender:null,
     note:"The secret to doing something well. Often asked: コツは何(なん)ですか?",
     example:"日本語(にほんご)のコツは毎日(まいにち)練習(れんしゅう)することです。",
     exampleSrc:"The trick to Japanese is practicing every day.",
     funFact:"Kotsu originally comes from 骨(ほね) (bone/core essence). The kotsu of something is its skeletal framework, the essential technique that makes it work. Asking for the kotsu is asking a master to share their secret."},

    {type:"mc", q:"What is the opposite of 得意(とくい)?",
     opts:["苦手(にがて)","じょうず","無理(むり)","頑張(がんば)る"], ans:"苦手(にがて)",
     hint:"Your weak point, the things that do not come naturally to you."},

    {type:"fb", s:"まだ{1}ないでください。", a:"諦(あきら)め",
     sSrc:"Please don't give up yet.",
     opts:["諦(あきら)め","頑張(がんば)ら","失敗(しっぱい)し","挑戦(ちょうせん)し"],
     hint:"To stop trying, to surrender. Don't do this yet."},

    {type:"match", pairs:[
      {trg:"努力(どりょく)", src:"effort"},
      {trg:"成功(せいこう)", src:"success"},
      {trg:"失敗(しっぱい)", src:"failure"},
      {trg:"挑戦(ちょうせん)", src:"challenge"}
    ]},

    {type:"mc", q:"頑張(がんば)る means:",
     opts:["to do one's best","to give up","to fail","to succeed"], ans:"to do one's best",
     hint:"Japan's most famous motivational verb, heard everywhere."},

    {type:"fb", s:"日本語(にほんご)の{1}は毎日(まいにち)練習(れんしゅう)することです。", a:"コツ",
     sSrc:"The trick to Japanese is practicing every day.",
     opts:["コツ","無理(むり)","自信(じしん)","能力(のうりょく)"],
     hint:"The essential technique or secret to doing something well."},

    {type:"mc", q:"What does 無理(むり) mean?",
     opts:["impossible/unreasonable","easy","difficult","interesting"], ans:"impossible/unreasonable",
     hint:"When something is beyond what can reasonably be done."},

    {type:"mc", q:"自信(じしん) means:",
     opts:["self-confidence","earthquake","effort","ability"], ans:"self-confidence",
     hint:"S... + believe. Different kanji from the natural disaster word."}
  ,{type:"match",pairs:[{trg:"能力(のうりょく)",src:"ability / capability"},{trg:"得意(とくい)",src:"good at / strong point"},{trg:"経験(けいけん)",src:"experience"},{trg:"自信(じしん)",src:"self-confidence"},{trg:"成長(せいちょう)する",src:"to grow / develop"}]}]
};
export default BATCH4_L_2;
