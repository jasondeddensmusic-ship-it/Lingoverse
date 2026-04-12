// Korean A2 Gap - Lesson 1: Body, Health & Hygiene
// Temp file - to be merged into unit by main session

const LESSON_1 = {
  id:"kov2_a2gap_l1", title:"몸과 건강", icon:"🧼", xp:15, board:true,
  steps:[
    {type:"intro", title:"몸과 건강",
     desc:"Learn essential vocabulary for talking about the body, health, hygiene, and daily self-care routines.",
     goals:["Name body care items like soap, toothbrush, and towel","Describe health and physical states","Talk about hygiene habits and routines"]},

    // --- Teach block 1: Body & Health core ---
    {type:"teach", trg:"몸", src:"body", pos:"noun", gender:null,
     note:"The physical body. One of the most basic nouns in Korean.",
     example:"A: 몸이 어디 아파요?\nB: 머리가 좀 아파요.",
     exampleSrc:"A: Where does your body hurt?\nB: My head hurts a little.",
     funFact:"Korean splits the person into 몸 (body) and 마음 (mind/heart). Many idioms pair them: 몸과 마음 means 'body and soul.'"},

    {type:"teach", trg:"환자", src:"patient", pos:"noun", gender:null,
     note:"A person receiving medical treatment. Sino-Korean word.",
     example:"A: 환자가 많아요?\nB: 네, 오늘 아주 바빠요.",
     exampleSrc:"A: Are there many patients?\nB: Yes, it is very busy today.",
     funFact:"From Hanja: 患 (suffer) + 者 (person). The same 者 appears in 학자 (scholar) and 기자 (journalist)."},

    {type:"teach", trg:"건강하다", src:"to be healthy", pos:"adj", gender:null,
     note:"Describes being in good health. Base form: 건강하다.\nConjugated: 건강해요.",
     example:"A: 할머니는 건강하세요?\nB: 네, 아주 건강하세요.",
     exampleSrc:"A: Is your grandmother healthy?\nB: Yes, she is very healthy.",
     funFact:"건강 (health) comes from Hanja 健康: 健 (strong) + 康 (peaceful). So being healthy literally means 'strong and at peace.'"},

    {type:"teach", trg:"힘", src:"strength; power", pos:"noun", gender:null,
     note:"Physical strength or power. Also used figuratively for effort.",
     example:"A: 힘이 없어요.\nB: 좀 쉬세요.",
     exampleSrc:"A: I have no strength.\nB: Please rest a little.",
     funFact:"힘 is pure Korean (not Sino-Korean). The phrase 힘내세요 (cheer up / stay strong) is one of the most common encouragements in daily life."},

    {type:"teach", trg:"힘들다", src:"to be difficult; to be hard", pos:"adj", gender:null,
     note:"Describes something physically or mentally exhausting.\nConjugated: 힘들어요.",
     example:"A: 일이 힘들어요?\nB: 네, 정말 힘들어요.",
     exampleSrc:"A: Is the work hard?\nB: Yes, it is really hard.",
     funFact:"Literally 'strength enters' (힘 + 들다). When effort must 'enter' you, the task is draining. A beautifully physical metaphor."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"몸이 아플 때 병원에 가는 사람은?",
     opts:["환자","선생님","손님","학생"],
     ans:"환자",
     hint:"This Sino-Korean word uses the character for 'suffer' plus 'person.'"},

    {type:"fb",
     s:"요즘 일이 너무 {1}.",
     a:["힘들어요"],
     opts:["힘들어요","건강해요","위험해요","즐거워요"],
     hint:"When work drains your energy and feels exhausting, you use this word.",
     sSrc:"These days work is too {1}."},

    // --- Teach block 2: Hygiene items ---
    {type:"teach", trg:"목욕", src:"bath", pos:"noun", gender:null,
     note:"A full-body bath, typically in a tub or bathhouse.",
     example:"A: 목욕했어요?\nB: 네, 방금 했어요.",
     exampleSrc:"A: Did you take a bath?\nB: Yes, I just did.",
     funFact:"From Hanja 沐浴: 沐 (wash hair) + 浴 (bathe body). Korean bathhouse culture (목욕탕) is a beloved social tradition."},

    {type:"teach", trg:"세수", src:"face washing", pos:"noun", gender:null,
     note:"Specifically washing the face. A daily morning routine word.",
     example:"A: 아침에 세수했어요?\nB: 네, 세수하고 밥 먹었어요.",
     exampleSrc:"A: Did you wash your face this morning?\nB: Yes, I washed my face and ate.",
     funFact:"From Hanja 洗手: literally 'wash hands,' but in modern Korean it specifically means washing your face. Hands shifted to 손 씻다."},

    {type:"teach", trg:"샤워", src:"shower", pos:"noun", gender:null,
     note:"A loanword from English. Used as a noun: 샤워하다 = to shower.",
     example:"A: 샤워할 거예요?\nB: 네, 운동 후에 할 거예요.",
     exampleSrc:"A: Are you going to shower?\nB: Yes, I will after exercising.",
     funFact:"One of many hygiene loanwords in Korean. While 목욕 is traditional bathing, 샤워 became standard as modern apartments replaced bathhouses."},

    {type:"teach", trg:"비누", src:"soap", pos:"noun", gender:null,
     note:"Bar soap or liquid soap for washing.",
     example:"A: 비누 있어요?\nB: 네, 화장실에 있어요.",
     exampleSrc:"A: Is there soap?\nB: Yes, it is in the bathroom.",
     funFact:"Believed to derive from Portuguese 'sabao' (soap), entering Korean through Japanese during the trade era. A linguistic fossil of global commerce."},

    {type:"teach", trg:"치약", src:"toothpaste", pos:"noun", gender:null,
     note:"Compound word: 치 (tooth) + 약 (medicine/drug).",
     example:"A: 치약이 없어요.\nB: 마트에서 사요.",
     exampleSrc:"A: There is no toothpaste.\nB: Buy it at the mart.",
     funFact:"Literally 'tooth medicine.' The 치 comes from Hanja 齒 (tooth), also found in 치과 (dentist) and 치료 (treatment)."},

    {type:"teach", trg:"칫솔", src:"toothbrush", pos:"noun", gender:null,
     note:"Compound word: 칫 (tooth, older form) + 솔 (brush).",
     example:"A: 새 칫솔 샀어요?\nB: 네, 어제 샀어요.",
     exampleSrc:"A: Did you buy a new toothbrush?\nB: Yes, I bought one yesterday.",
     funFact:"The ㅅ in 칫 is a trace of the old genitive marker (사이시옷). It literally means 'brush of teeth.' This ㅅ appears in many compounds."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"아침에 일어나서 얼굴을 씻는 것은?",
     opts:["세수","목욕","샤워","빨래"],
     ans:"세수",
     hint:"This word originally meant 'wash hands' in Chinese characters but now refers to the face."},

    {type:"match", pairs:[
      {trg:"비누", src:"soap"},
      {trg:"치약", src:"toothpaste"},
      {trg:"칫솔", src:"toothbrush"},
      {trg:"샤워", src:"shower"}
    ]},

    // --- Teach block 3: More household & danger ---
    {type:"teach", trg:"수건", src:"towel", pos:"noun", gender:null,
     note:"A cloth for drying. Used after bathing, washing, or exercising.",
     example:"A: 수건 좀 주세요.\nB: 여기 있어요.",
     exampleSrc:"A: Please give me a towel.\nB: Here it is.",
     funFact:"From Hanja 手巾: 手 (hand) + 巾 (cloth). Literally a 'hand cloth,' but used for the whole body in modern Korean."},

    {type:"teach", trg:"세탁기", src:"washing machine", pos:"noun", gender:null,
     note:"Household appliance for laundry. 세탁 (laundry) + 기 (machine).",
     example:"A: 세탁기가 있어요?\nB: 네, 화장실에 있어요.",
     exampleSrc:"A: Do you have a washing machine?\nB: Yes, it is in the bathroom.",
     funFact:"The suffix 기 (機, machine) is incredibly productive: 세탁기 (washer), 냉장고 (fridge uses 庫 instead), 청소기 (vacuum). Knowing 기 unlocks many compound nouns."},

    {type:"teach", trg:"거울", src:"mirror", pos:"noun", gender:null,
     note:"Any reflective surface used to see yourself.",
     example:"A: 거울 좀 봐요.\nB: 왜요? 뭐가 있어요?",
     exampleSrc:"A: Look in the mirror.\nB: Why? What is there?",
     funFact:"Pure Korean word, not Sino-Korean. The fairy tale phrase '거울아 거울아' (Mirror, mirror) is well known from Snow White, popularized in Korean children's culture."},

    {type:"teach", trg:"위험", src:"danger", pos:"noun", gender:null,
     note:"A dangerous situation or risk. Often seen on warning signs.",
     example:"A: 여기는 위험해요.\nB: 알겠어요, 조심할게요.",
     exampleSrc:"A: It is dangerous here.\nB: I understand, I will be careful.",
     funFact:"From Hanja 危險: 危 (precarious) + 險 (steep/risky). You will see 위험 on construction sites, cliffs, and electrical boxes all over Korea."},

    {type:"teach", trg:"위험하다", src:"to be dangerous", pos:"adj", gender:null,
     note:"Adjective form. Conjugated: 위험해요.\nDescribes risky situations or actions.",
     example:"A: 밤에 혼자 다니는 것은 위험해요.\nB: 맞아요, 같이 가요.",
     exampleSrc:"A: Walking alone at night is dangerous.\nB: You are right, let's go together.",
     funFact:"Adding 하다 to many Sino-Korean nouns creates adjectives: 위험 + 하다, 건강 + 하다, 안전 + 하다. This is one of the most productive patterns in Korean."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"목욕 후에 {1}(으)로 몸을 닦아요.",
     a:["수건"],
     opts:["수건","비누","거울","칫솔"],
     hint:"After bathing, you use this cloth item to dry yourself off.",
     sSrc:"After bathing, I dry my body with a {1}."},

    {type:"mc",
     q:"'위험'의 뜻은 무엇이에요?",
     opts:["danger","health","strength","bath"],
     ans:"danger",
     hint:"You see this word on warning signs near construction sites and steep cliffs."},

    // --- Teach block 4: Stress & cigarettes ---
    {type:"teach", trg:"스트레스", src:"stress", pos:"noun", gender:null,
     note:"Loanword from English. Used exactly as in English.",
     example:"A: 스트레스가 많아요?\nB: 네, 요즘 일 때문에요.",
     exampleSrc:"A: Do you have a lot of stress?\nB: Yes, it is because of work these days.",
     funFact:"Koreans say 스트레스를 받다 (to receive stress) and 스트레스를 풀다 (to release stress). Stress is something that comes TO you, not something you create."},

    {type:"teach", trg:"담배", src:"cigarette", pos:"noun", gender:null,
     note:"Tobacco or cigarettes. Used in health and lifestyle contexts.",
     example:"A: 담배 피우세요?\nB: 아니요, 작년에 끊었어요.",
     exampleSrc:"A: Do you smoke?\nB: No, I quit last year.",
     funFact:"From Portuguese/Spanish 'tabaco' via Japanese. Korea has strict smoking bans in public places. 금연 (no smoking) signs use Hanja: 禁 (forbid) + 煙 (smoke)."},

    // --- Final quiz block ---
    {type:"mc",
     q:"스트레스를 받을 때 어떻게 해요?",
     opts:["운동해요","담배를 많이 사요","세탁기를 써요","거울을 봐요"],
     ans:"운동해요",
     hint:"Think about a healthy way to release tension and feel better physically."},

    {type:"match", pairs:[
      {trg:"몸", src:"body"},
      {trg:"건강하다", src:"to be healthy"},
      {trg:"힘들다", src:"to be difficult"},
      {trg:"위험하다", src:"to be dangerous"}
    ]}
  ]
};
export default LESSON_1;
