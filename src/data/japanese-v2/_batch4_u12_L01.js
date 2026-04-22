// Batch 4. Unit 12 Lesson 1: Health & Doctor Visits
const BATCH4_L_1 = {
  id:"jav2_u12l_b4_1", title:"健康(けんこう)", icon:"🩺", xp:15, board:true,
  steps:[
    {type:"intro", title:"健康(けんこう)と病気(びょうき)",
     desc:"Learn essential health vocabulary for visiting a doctor or pharmacy. These words will help you describe symptoms and understand medical advice in Japan.",
     goals:["Describe common symptoms","Navigate a doctor's visit","Understand basic medical terms"]},

    {type:"teach", trg:"病気(びょうき)", src:"illness / sickness", pos:"noun", gender:null,
     note:"Sick + spirit. Disease affects your vital energy.",
     example:"病気(びょうき)で学校(がっこう)を休(やす)みました。",
     exampleSrc:"I missed school due to illness.",
     funFact:"病気 combines 病(やまい) (illness) with 気(き) (spirit/energy). In traditional Japanese medicine, illness was seen as a disruption of ki (life energy). This connection between spirit and health persists in the language."},

    {type:"teach", trg:"熱(ねつ)", src:"fever", pos:"noun", gender:null,
     note:"Heat/fever. 熱(ねつ)がある = to have a fever.",
     example:"熱(ねつ)が38度(ど)あります。",
     exampleSrc:"I have a fever of 38 degrees.",
     funFact:"Japan uses Celsius. A normal temperature is 36.5C. Anything over 37.5C is considered a fever. Japanese households almost all own a thermometer, and checking temperature is the first response to feeling unwell."},

    {type:"teach", trg:"風邪(かぜ)", src:"cold (illness)", pos:"noun", gender:null,
     note:"Wind + evil. A cold was thought to be caused by evil wind.",
     example:"風邪(かぜ)をひきました。",
     exampleSrc:"I caught a cold.",
     funFact:"風邪 literally means 'wind evil' because ancient medicine believed cold winds carried illness. The verb is ひく (to pull/catch). You 'pull' a cold toward yourself. Japanese cold remedies include hot ginger tea and warming foods."},

    {type:"teach", trg:"咳(せき)", src:"cough", pos:"noun", gender:null,
     note:"The sound and action of coughing.",
     example:"咳(せき)が止(と)まりません。",
     exampleSrc:"My cough won't stop.",
     funFact:"Coughing in public without a mask is considered very rude in Japan, even before COVID. Japanese people have worn surgical masks for decades during cold season, hay fever season, or simply when feeling unwell."},

    {type:"teach", trg:"薬(くすり)", src:"medicine / drug", pos:"noun", gender:null,
     note:"General word for all types of medicine.",
     example:"薬(くすり)を飲(の)んでください。",
     exampleSrc:"Please take the medicine.",
     funFact:"Japanese medicine packets are often divided into individual doses (1回分(かいぶん)). Pharmacists explain every medication in detail. Japan distinguishes 処方薬(しょほうやく) (prescription) from 市販薬(しはんやく) (over-the-counter) carefully."},

    {type:"teach", trg:"医者(いしゃ)", src:"doctor", pos:"noun", gender:null,
     note:"Medicine + person. Also called お医者(いしゃ)さん (polite).",
     example:"医者(いしゃ)に見(み)てもらいました。",
     exampleSrc:"I had the doctor examine me.",
     funFact:"Doctors in Japan are addressed as sensei (先生(せんせい)), not as 'doctor.' Japanese doctors often run small private clinics rather than working in large hospitals. Finding a good 'かかりつけ医(い)' (family doctor) is important for every household."},

    {type:"teach", trg:"注射(ちゅうしゃ)", src:"injection / shot", pos:"noun", gender:null,
     note:"Pour + shoot. Getting a vaccine or blood drawn.",
     example:"インフルエンザの注射(ちゅうしゃ)を受(う)けました。",
     exampleSrc:"I got a flu shot.",
     funFact:"Japanese needle phobia is common enough to have its own word: 注射嫌(ちゅうしゃぎら)い. However, Japanese medical technology uses some of the world's thinnest needles, making injections less painful than in many countries."},

    {type:"teach", trg:"喉(のど)が痛(いた)い", src:"to have a sore throat", pos:"adj", gender:null,
     note:"喉(のど) (throat) + が + 痛(いた)い (painful). Describing throat pain.",
     example:"喉(のど)が痛(いた)いので、お茶(ちゃ)を飲(の)みます。",
     exampleSrc:"My throat hurts, so I drink tea.",
     funFact:"Japanese home remedies for sore throats include gargling with green tea, drinking hot honey lemon water, and wearing a protective mask to keep the throat moist. Throat lozenges (喉飴(のどあめ) nodo-ame) are incredibly popular."},

    {type:"teach", trg:"怪我(けが)", src:"injury / wound", pos:"noun", gender:null,
     note:"Can be written in hiragana. Physical injuries.",
     example:"サッカーで怪我(けが)をしました。",
     exampleSrc:"I got injured playing soccer.",
     funFact:"The kanji 怪我 literally means 'mysterious self,' suggesting that injuries happen when something strange occurs to you. Japanese first aid kits (救急箱(きゅうきゅうばこ)) are found in every school, office, and home."},

    {type:"teach", trg:"マスク", src:"(face) mask", pos:"noun", gender:null,
     note:"From English 'mask.' A cultural staple in Japan long before COVID.",
     example:"風邪(かぜ)のときはマスクをします。",
     exampleSrc:"I wear a mask when I have a cold.",
     funFact:"Japan was wearing masks decades before the world caught on. Pollen allergies (花粉症(かふんしょう)), cold prevention, and even fashion drove mask use. Annual mask sales exceeded 5 billion units even before 2020."},

    {type:"teach", trg:"体調(たいちょう)", src:"physical condition", pos:"noun", gender:null,
     note:"Body + tune. How your body is 'tuned.'",
     example:"体調(たいちょう)が悪(わる)いです。",
     exampleSrc:"I am not feeling well.",
     funFact:"体調(たいちょう)が悪(わる)い (bad physical condition) is the most polite way to explain feeling unwell in Japanese. It is vague enough to avoid uncomfortable details while clearly communicating that you are not at your best."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"From German 'Allergie.' Many Japanese suffer from pollen allergies.",
     example:"わたしは花粉(かふん)アレルギーです。",
     exampleSrc:"I have pollen allergies.",
     funFact:"花粉症(かふんしょう) (kafunshou, hay fever) affects about 40% of Japanese people. Cedar pollen season (February-April) is a national health event. TV news reports pollen counts daily, and anti-allergy products fill entire store aisles."},

    {type:"teach", trg:"保険証(ほけんしょう)", src:"health insurance card", pos:"noun", gender:null,
     note:"Insurance + certificate. Required at medical visits.",
     example:"保険証(ほけんしょう)を持(も)っていますか？",
     exampleSrc:"Do you have your health insurance card?",
     funFact:"Japan's universal healthcare covers 70% of medical costs for most people. The small blue-and-white insurance card is presented at every doctor visit. Without it, you pay 100% upfront (and can be reimbursed later)."},

    {type:"teach", trg:"診察(しんさつ)", src:"medical examination / consultation", pos:"noun", gender:null,
     note:"Diagnose + examine. The doctor's examination.",
     example:"診察(しんさつ)の予約(よやく)を取(と)りたいです。",
     exampleSrc:"I want to make an appointment for an examination.",
     funFact:"Japanese clinics often work on a first-come-first-served basis without appointments. Patients arrive early and wait. Some modern clinics use online reservation systems that let you check wait times from your phone."},

    {type:"mc", q:"What does 風邪(かぜ) literally mean?",
     opts:["wind evil","cold air","bad spirit","body pain"], ans:"wind evil",
     hint:"Ancient medicine believed illness was carried by something in the w...."},

    {type:"fb", s:"{1}が38度(ど)あります。", a:"熱(ねつ)",
     sSrc:"I have a fever of 38 degrees.",
     opts:["熱(ねつ)","風邪(かぜ)","咳(せき)","怪我(けが)"],
     hint:"Elevated body temperature measured with a thermometer."},

    {type:"match", pairs:[
      {trg:"薬(くすり)", src:"medicine"},
      {trg:"医者(いしゃ)", src:"doctor"},
      {trg:"注射(ちゅうしゃ)", src:"injection"},
      {trg:"マスク", src:"mask"}
    ]},

    {type:"mc", q:"What does 体調(たいちょう)が悪(わる)い mean?",
     opts:["I am injured","I am not feeling well","I am very sick","I have a cold"], ans:"I am not feeling well",
     hint:"A polite, general way to say your physical condition is off."},

    {type:"fb", s:"{1}を持(も)っていますか？", a:"保険証(ほけんしょう)",
     sSrc:"Do you have your health insurance card?",
     opts:["保険証(ほけんしょう)","薬(くすり)","マスク","熱(ねつ)"],
     hint:"The card required at every medical visit in Japan."},

    {type:"mc", q:"花粉症 affects about what percentage of Japanese?",
     opts:["80%","15%","40%","5%"], ans:"40%",
     hint:"Pollen allergies are a massive health issue in Japan each spring."},

    {type:"mc", q:"What does 怪我(けが) mean?",
     opts:["illness","fever","allergy","injury/wound"], ans:"injury/wound",
     hint:"Physical damage to the body from accidents or sports."}
  ,{type:"match",pairs:[{trg:"病気(びょうき)",src:"illness / sickness"},{trg:"風邪(かぜ)",src:"cold (illness)"},{trg:"咳(せき)",src:"cough"},{trg:"喉(のど)が痛(いた)い",src:"to have a sore throat"},{trg:"怪我(けが)",src:"injury / wound"},{trg:"体調(たいちょう)",src:"physical condition"}]},{type:"match",pairs:[{trg:"アレルギー",src:"allergy"},{trg:"診察(しんさつ)",src:"medical examination / consultation"}]}]
};
export default BATCH4_L_1;
