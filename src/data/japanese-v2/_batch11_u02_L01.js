// Batch 11 – Unit 02 (A1.1 Self-Introduction): Jobs & Occupations
const BATCH11_L1 = {
  id:"jav2_u02l_b11_1", title:"しごと", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"しごと",
     desc:"Learn to talk about jobs and occupations. These words let you introduce yourself professionally and ask others about their work.",
     goals:["Name common occupations in Japanese","Use おしごとは何ですか to ask about work","Understand the は...です pattern with job titles"]},

    {type:"teach", trg:"しごと", src:"work / job", pos:"noun", gender:null,
     note:"General word for work or employment.\nおしごと is the polite form used when asking others.",
     example:"A: おしごとはなんですか？\nB: かいしゃいんです。",
     exampleSrc:"A: What is your job?\nB: I am a company employee.",
     funFact:"The kanji 仕事 combines 仕 (serve) and 事 (matter). Work in Japanese is literally 'serving matters.' Adding お makes it polite. You always use おしごと when asking someone else about their work, but しごと when talking about your own."},

    {type:"teach", trg:"せんせい", src:"teacher", pos:"noun", gender:null,
     note:"Used for teachers, doctors, lawyers, and other respected professionals.\nNever use for yourself.",
     example:"A: やまださんはせんせいですか？\nB: はい、すうがくのせんせいです。",
     exampleSrc:"A: Is Yamada-san a teacher?\nB: Yes, a math teacher.",
     funFact:"せんせい literally means 'born before' (先生). It is not just for classroom teachers. Doctors, lawyers, politicians, and manga artists are all called せんせい. Using it for yourself is considered arrogant."},

    {type:"teach", trg:"いしゃ", src:"doctor", pos:"noun", gender:null,
     note:"Medical doctor. Polite form: おいしゃさん.\nAlso addressed as せんせい.",
     example:"A: おいしゃさんにいきましたか？\nB: はい、かぜだといわれました。",
     exampleSrc:"A: Did you go to the doctor?\nB: Yes, I was told it is a cold.",
     funFact:"In Japan, doctors are addressed as せんせい, not いしゃさん. When referring to someone else's doctor, おいしゃさん is standard. The word combines 医 (medicine) and 者 (person). Japan has one of the highest doctor-to-patient ratios in Asia."},

    {type:"teach", trg:"がくせい", src:"student", pos:"noun", gender:null,
     note:"University student. High school student: こうこうせい.\nElementary: しょうがくせい.",
     example:"A: がくせいですか？\nB: はい、だいがくにねんせいです。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a second-year university student.",
     funFact:"Japanese has specific words for each student level: しょうがくせい (elementary), ちゅうがくせい (middle school), こうこうせい (high school), だいがくせい (university). がくせい alone usually implies university student."},

    {type:"teach", trg:"かいしゃいん", src:"company employee", pos:"noun", gender:null,
     note:"Generic office worker. Specific: ぎんこういん (bank clerk).\nThe いん suffix means 'member.'",
     example:"A: かいしゃいんですか？\nB: はい、ITのかいしゃではたらいています。",
     exampleSrc:"A: Are you a company employee?\nB: Yes, I work at an IT company.",
     funFact:"In Japan, being a かいしゃいん at a large company (大企業) has traditionally been the ideal career path. The concept of 終身雇用 (lifetime employment) made company identity central to personal identity. People often introduce themselves by company name before their own name."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Loanword from English. IT-related jobs commonly use katakana.\nAlso: プログラマー, デザイナー.",
     example:"A: エンジニアですか？\nB: はい、ソフトウェアエンジニアです。",
     exampleSrc:"A: Are you an engineer?\nB: Yes, I am a software engineer.",
     funFact:"Modern Japanese job titles are increasingly in katakana: エンジニア, マネージャー, コンサルタント. This shift reflects the influence of English in Japanese business culture, especially in tech and startup companies."},

    {type:"teach", trg:"みせ", src:"shop / store", pos:"noun", gender:null,
     note:"General word for any shop. Polite: おみせ.\nSpecific: パンや (bakery), はなや (flower shop).",
     example:"A: このみせはなんじにあきますか？\nB: あさくじにあきます。",
     exampleSrc:"A: What time does this shop open?\nB: It opens at 9 AM.",
     funFact:"The や suffix turns things into shops: パン (bread) becomes パンや (bakery), はな (flower) becomes はなや (florist), にく (meat) becomes にくや (butcher). This productive suffix lets you create shop names for anything."},

    {type:"teach", trg:"けいさつかん", src:"police officer", pos:"noun", gender:null,
     note:"Formal term. Casual: おまわりさん (the person who goes around).\nこうばん = police box.",
     example:"A: けいさつかんになりたいです。\nB: かっこいいですね！",
     exampleSrc:"A: I want to become a police officer.\nB: That is cool!",
     funFact:"Japan's こうばん (police box) system is unique. Small neighborhood police stations are staffed around the clock. They help with directions, lost items, and minor disputes. The system has been adopted by countries like Singapore and Brazil."},

    {type:"teach", trg:"かんごし", src:"nurse", pos:"noun", gender:null,
     note:"Gender-neutral term since 2002. Previously: かんごふ (female), かんごし (male).\nNow かんごし for all.",
     example:"A: おねえさんはかんごしですか？\nB: はい、びょういんではたらいています。",
     exampleSrc:"A: Is your older sister a nurse?\nB: Yes, she works at a hospital.",
     funFact:"Japan unified the nursing title to かんごし in 2002, replacing the gendered terms かんごふ (female nurse) and かんごし (male nurse). This reflected the growing number of male nurses and the push for gender-neutral language in healthcare."},

    {type:"teach", trg:"うんてんしゅ", src:"driver", pos:"noun", gender:null,
     note:"Professional driver. タクシーのうんてんしゅ = taxi driver.\nバスのうんてんしゅ = bus driver.",
     example:"A: タクシーのうんてんしゅはしんせつでした。\nB: にほんのうんてんしゅはていねいですね。",
     exampleSrc:"A: The taxi driver was kind.\nB: Japanese drivers are polite, aren't they?",
     funFact:"Japanese taxi drivers wear white gloves, and the doors open and close automatically. The word うんてんしゅ combines 運転 (driving) and 手 (person/hand). Tipping taxi drivers in Japan is not customary and can even cause confusion."},

    {type:"teach", trg:"りょうりにん", src:"cook / chef", pos:"noun", gender:null,
     note:"Professional cook. Casual: コック (from Dutch/English 'cook').\nシェフ is also used for head chef.",
     example:"A: しょうらいりょうりにんになりたいです。\nB: どんなりょうりがすきですか？",
     exampleSrc:"A: I want to become a chef in the future.\nB: What kind of cooking do you like?",
     funFact:"Japan's dedication to food craftsmanship is legendary. すし職人 (sushi craftsmen) train for years just on rice preparation. The word 料理人 emphasizes the 'person' (人) aspect, treating cooking as a personal art rather than just a job."},

    // Quiz steps
    {type:"mc", q:"「せんせい」はだれにつかいますか？",
     opts:["Teachers, doctors, and respected professionals","Only classroom teachers","Only university professors","Children and students"],
     ans:"Teachers, doctors, and respected professionals",
     hint:"This title goes beyond the classroom. Think about who gets addressed with this respectful term."},

    {type:"fb", s:"おねえさんは{1}ですか？ びょういんではたらいています。",
     a:["かんごし"],
     opts:["かんごし","いしゃ","せんせい","がくせい"],
     hint:"This person works at a hospital but is not a doctor. Think of the healthcare professional who cares for patients.",
     sSrc:"Is your older sister a {1}? She works at a hospital."},

    {type:"match", pairs:[
      {trg:"がくせい", src:"student"},
      {trg:"かいしゃいん", src:"company employee"},
      {trg:"けいさつかん", src:"police officer"},
      {trg:"うんてんしゅ", src:"driver"}
    ]},

    {type:"mc", q:"パンやとはなんですか？",
     opts:["A bakery","A bread company","A type of bread","A bread brand"],
     ans:"A bakery",
     hint:"The や suffix turns a product word into the name of a shop that sells it."},

    {type:"fb", s:"おしごとは{1}ですか？",
     a:["なん"],
     opts:["なん","だれ","どこ","いつ"],
     hint:"You are asking 'what is your job?' The question word before です becomes なん, not なに.",
     sSrc:"What is your job?"},

    {type:"mc", q:"にほんのタクシーのうんてんしゅはなにをしていますか？",
     opts:["Wearing white gloves","Wearing a suit","Wearing sunglasses","Wearing a hat"],
     ans:"Wearing white gloves",
     hint:"This is a famous detail about Japanese professional drivers that surprises many visitors."}
  ]
};
export default BATCH11_L1;
