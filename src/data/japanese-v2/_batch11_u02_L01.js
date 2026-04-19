// Batch 11 – Unit 02 (A1.1 Self-Introduction): Jobs & Occupations
const BATCH11_L1 = {
  id:"jav2_u02l_b11_1", title:"仕事(しごと)", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"仕事(しごと)",
     desc:"Learn to talk about jobs and occupations. These words let you introduce yourself professionally and ask others about their work.",
     goals:["Name common occupations in Japanese","Use おしごとは何ですか to ask about work","Understand the は...です pattern with job titles"]},

    {type:"teach", trg:"仕事(しごと)", src:"work / job", pos:"noun", gender:null,
     note:"General word for work or employment.\nお仕事(しごと) is the polite form used when asking others.",
     example:"A: お仕事(しごと)はなんですか？\nB: 会社員(かいしゃいん)です。",
     exampleSrc:"A: What is your job?\nB: I am a company employee.",
     funFact:"The kanji 仕事 combines 仕 (serve) and 事 (matter). Work in Japanese is literally 'serving matters.' Adding お makes it polite. You always use お仕事(しごと) when asking someone else about their work, but 仕事(しごと) when talking about your own."},

    {type:"teach", trg:"先生(せんせい)", src:"teacher", pos:"noun", gender:null,
     note:"Used for teachers, doctors, lawyers, and other respected professionals.\nNever use for yourself.",
     example:"A: 山田(やまだ)さんは先生(せんせい)ですか？\nB: はい、数学(すうがく)の先生(せんせい)です。",
     exampleSrc:"A: Is Yamada-san a teacher?\nB: Yes, a math teacher.",
     funFact:"先生(せんせい) literally means 'born before' (先生). It is not just for classroom teachers. Doctors, lawyers, politicians, and manga artists are all called 先生(せんせい). Using it for yourself is considered arrogant."},

    {type:"teach", trg:"医者(いしゃ)", src:"doctor", pos:"noun", gender:null,
     note:"Medical doctor. Polite form: お医者(いしゃ)さん.\nAlso addressed as 先生(せんせい).",
     example:"A: お医者(いしゃ)さんに行(い)きましたか？\nB: はい、風邪(かぜ)だと言(い)われました。",
     exampleSrc:"A: Did you go to the doctor?\nB: Yes, I was told it is a cold.",
     funFact:"In Japan, doctors are addressed as 先生(せんせい), not 医者(いしゃ)さん. When referring to someone else's doctor, お医者(いしゃ)さん is standard. The word combines 医 (medicine) and 者 (person). Japan has one of the highest doctor-to-patient ratios in Asia."},

    {type:"teach", trg:"学生(がくせい)", src:"student", pos:"noun", gender:null,
     note:"University student. High school student: 高校生(こうこうせい).\nElementary: 小学生(しょうがくせい).",
     example:"A: 学生(がくせい)ですか？\nB: はい、大学(だいがく)二年生(にねんせい)です。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a second-year university student.",
     funFact:"Japanese has specific words for each student level: 小学生(しょうがくせい) (elementary), 中学生(ちゅうがくせい) (middle school), 高校生(こうこうせい) (high school), 大学生(だいがくせい) (university). 学生(がくせい) alone usually implies university student."},

    {type:"teach", trg:"会社員(かいしゃいん)", src:"company employee", pos:"noun", gender:null,
     note:"Generic office worker. Specific: 銀行員(ぎんこういん) (bank clerk).\nThe いん suffix means 'member.'",
     example:"A: 会社員(かいしゃいん)ですか？\nB: はい、ITの会社(かいしゃ)で働(はたら)いています。",
     exampleSrc:"A: Are you a company employee?\nB: Yes, I work at an IT company.",
     funFact:"In Japan, being a 会社員(かいしゃいん) at a large company (大企業) has traditionally been the ideal career path. The concept of 終身雇用 (lifetime employment) made company identity central to personal identity. People often introduce themselves by company name before their own name."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Loanword from English. IT-related jobs commonly use katakana.\nAlso: プログラマー, デザイナー.",
     example:"A: エンジニアですか？\nB: はい、ソフトウェアエンジニアです。",
     exampleSrc:"A: Are you an engineer?\nB: Yes, I am a software engineer.",
     funFact:"Modern Japanese job titles are increasingly in katakana: エンジニア, マネージャー, コンサルタント. This shift reflects the influence of English in Japanese business culture, especially in tech and startup companies."},

    {type:"teach", trg:"店(みせ)", src:"shop / store", pos:"noun", gender:null,
     note:"General word for any shop. Polite: お店(みせ).\nSpecific: パン屋(や) (bakery), 花屋(はなや) (flower shop).",
     example:"A: この店(みせ)は何時(なんじ)に開(あ)きますか？\nB: 朝(あさ)九時(くじ)に開(あ)きます。",
     exampleSrc:"A: What time does this shop open?\nB: It opens at 9 AM.",
     funFact:"The や suffix turns things into shops: パン (bread) becomes パン屋(や) (bakery), 花(はな) (flower) becomes 花屋(はなや) (florist), 肉(にく) (meat) becomes 肉屋(にくや) (butcher). This productive suffix lets you create shop names for anything."},

    {type:"teach", trg:"警察官(けいさつかん)", src:"police officer", pos:"noun", gender:null,
     note:"Formal term. Casual: おまわりさん (the person who goes around).\nこうばん = police box.",
     example:"A: 警察官(けいさつかん)になりたいです。\nB: かっこいいですね！",
     exampleSrc:"A: I want to become a police officer.\nB: That is cool!",
     funFact:"Japan's こうばん (police box) system is unique. Small neighborhood police stations are staffed around the clock. They help with directions, lost items, and minor disputes. The system has been adopted by countries like Singapore and Brazil."},

    {type:"teach", trg:"看護師(かんごし)", src:"nurse", pos:"noun", gender:null,
     note:"Gender-neutral term since 2002. Previously: 看護婦(かんごふ) (female), 看護士(かんごし) (male).\nNow 看護師(かんごし) for all.",
     example:"A: お姉(ねえ)さんは看護師(かんごし)ですか？\nB: はい、病院(びょういん)で働(はたら)いています。",
     exampleSrc:"A: Is your older sister a nurse?\nB: Yes, she works at a hospital.",
     funFact:"Japan unified the nursing title to 看護師(かんごし) in 2002, replacing the gendered terms 看護婦(かんごふ) (female nurse) and 看護士(かんごし) (male nurse). This reflected the growing number of male nurses and the push for gender-neutral language in healthcare."},

    {type:"teach", trg:"運転手(うんてんしゅ)", src:"driver", pos:"noun", gender:null,
     note:"Professional driver. タクシーの運転手(うんてんしゅ) = taxi driver.\nバスの運転手(うんてんしゅ) = bus driver.",
     example:"A: タクシーの運転手(うんてんしゅ)は親切(しんせつ)でした。\nB: 日本(にほん)の運転手(うんてんしゅ)は丁寧(ていねい)ですね。",
     exampleSrc:"A: The taxi driver was kind.\nB: Japanese drivers are polite, aren't they?",
     funFact:"Japanese taxi drivers wear white gloves, and the doors open and close automatically. The word 運転手(うんてんしゅ) combines 運転 (driving) and 手 (person/hand). Tipping taxi drivers in Japan is not customary and can even cause confusion."},

    {type:"teach", trg:"料理人(りょうりにん)", src:"cook / chef", pos:"noun", gender:null,
     note:"Professional cook. Casual: コック (from Dutch/English 'cook').\nシェフ is also used for head chef.",
     example:"A: 将来(しょうらい)料理人(りょうりにん)になりたいです。\nB: どんな料理(りょうり)が好(す)きですか？",
     exampleSrc:"A: I want to become a chef in the future.\nB: What kind of cooking do you like?",
     funFact:"Japan's dedication to food craftsmanship is legendary. 寿司職人(すしいしょくにん) (sushi craftsmen) train for years just on rice preparation. The word 料理人(りょうりにん) emphasizes the '人' (person) aspect, treating cooking as a personal art rather than just a job."},

    // Quiz steps
    {type:"mc", q:"「先生(せんせい)」はだれに使(つか)いますか？",
     opts:["Teachers, doctors, and respected professionals","Only classroom teachers","Only university professors","Children and students"],
     ans:"Teachers, doctors, and respected professionals",
     hint:"This title goes beyond the classroom. Think about who gets addressed with this respectful term."},

    {type:"fb", s:"お姉(ねえ)さんは{1}ですか？ 病院(びょういん)で働(はたら)いています。",
     a:["看護師(かんごし)"],
     opts:["看護師(かんごし)","医者(いしゃ)","先生(せんせい)","学生(がくせい)"],
     hint:"This person works at a hospital but is not a doctor. Think of the healthcare professional who cares for patients.",
     sSrc:"Is your older sister a {1}? She works at a hospital."},

    {type:"match", pairs:[
      {trg:"学生(がくせい)", src:"student"},
      {trg:"会社員(かいしゃいん)", src:"company employee"},
      {trg:"警察官(けいさつかん)", src:"police officer"},
      {trg:"運転手(うんてんしゅ)", src:"driver"}
    ]},

    {type:"mc", q:"パン屋(や)とはなんですか？",
     opts:["A bakery","A bread company","A type of bread","A bread brand"],
     ans:"A bakery",
     hint:"The や suffix turns a product word into the name of a shop that sells it."},

    {type:"fb", s:"お仕事(しごと)は{1}ですか？",
     a:["なん"],
     opts:["なん","だれ","どこ","いつ"],
     hint:"You are asking 'what is your job?' The question word before です becomes なん, not なに.",
     sSrc:"What is your job?"},

    {type:"mc", q:"日本(にほん)のタクシーの運転手(うんてんしゅ)はなにをしていますか？",
     opts:["Wearing white gloves","Wearing a suit","Wearing sunglasses","Wearing a hat"],
     ans:"Wearing white gloves",
     hint:"This is a famous detail about Japanese professional drivers that surprises many visitors."}
  ,{type:"fb", s:"近所(きんじょ)に面白(おもしろ)い{1}がいくつもあります。パン屋(や)や花屋(はなや)も近(ちか)いです。",
    a:["店(みせ)"],
    opts:["店(みせ)","仕事(しごと)","学生(がくせい)","会社員(かいしゃいん)"],
    hint:"In the neighborhood there are several interesting places to shop. This word means 'shop' or 'store.'",
    sSrc:"There are several interesting {1} in the neighborhood. There is even a bakery and florist nearby."}
  ,{type:"match",pairs:[{trg:"仕事(しごと)",src:"work / job"},{trg:"先生(せんせい)",src:"teacher"},{trg:"医者(いしゃ)",src:"doctor"},{trg:"エンジニア",src:"engineer"},{trg:"店(みせ)",src:"shop / store"},{trg:"料理人(りょうりにん)",src:"cook / chef"}]}]
};
export default BATCH11_L1;
