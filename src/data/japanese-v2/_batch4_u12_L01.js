// Batch 4 — Unit 12 Lesson 1: Health & Doctor Visits
const BATCH4_L_1 = {
  id:"jav2_u12l_b4_1", title:"けんこう", icon:"🩺", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんこうとびょうき",
     desc:"Learn essential health vocabulary for visiting a doctor or pharmacy. These words will help you describe symptoms and understand medical advice in Japan.",
     goals:["Describe common symptoms","Navigate a doctor's visit","Understand basic medical terms"]},

    {type:"teach", trg:"びょうき", src:"illness / sickness", pos:"noun", gender:null,
     note:"Kanji: 病気. Sick + spirit. Disease affects your vital energy.",
     example:"びょうきでがっこうをやすみました。",
     exampleSrc:"I missed school due to illness.",
     funFact:"病気 combines 病 (illness) with 気 (spirit/energy). In traditional Japanese medicine, illness was seen as a disruption of ki (life energy). This connection between spirit and health persists in the language."},

    {type:"teach", trg:"ねつ", src:"fever", pos:"noun", gender:null,
     note:"Kanji: 熱. Heat/fever. ねつがある = to have a fever.",
     example:"ねつが38どあります。",
     exampleSrc:"I have a fever of 38 degrees.",
     funFact:"Japan uses Celsius. A normal temperature is 36.5C. Anything over 37.5C is considered a fever. Japanese households almost all own a thermometer, and checking temperature is the first response to feeling unwell."},

    {type:"teach", trg:"かぜ", src:"cold (illness)", pos:"noun", gender:null,
     note:"Kanji: 風邪. Wind + evil. A cold was thought to be caused by evil wind.",
     example:"かぜをひきました。",
     exampleSrc:"I caught a cold.",
     funFact:"風邪 literally means 'wind evil' because ancient medicine believed cold winds carried illness. The verb is ひく (to pull/catch). You 'pull' a cold toward yourself. Japanese cold remedies include hot ginger tea and warming foods."},

    {type:"teach", trg:"せき", src:"cough", pos:"noun", gender:null,
     note:"Kanji: 咳. The sound and action of coughing.",
     example:"せきがとまりません。",
     exampleSrc:"My cough won't stop.",
     funFact:"Coughing in public without a mask is considered very rude in Japan, even before COVID. Japanese people have worn surgical masks for decades during cold season, hay fever season, or simply when feeling unwell."},

    {type:"teach", trg:"くすり", src:"medicine / drug", pos:"noun", gender:null,
     note:"Kanji: 薬. General word for all types of medicine.",
     example:"くすりをのんでください。",
     exampleSrc:"Please take the medicine.",
     funFact:"Japanese medicine packets are often divided into individual doses (1回分). Pharmacists explain every medication in detail. Japan distinguishes 処方薬 (prescription) from 市販薬 (over-the-counter) carefully."},

    {type:"teach", trg:"いしゃ", src:"doctor", pos:"noun", gender:null,
     note:"Kanji: 医者. Medicine + person. Also called おいしゃさん (polite).",
     example:"いしゃにみてもらいました。",
     exampleSrc:"I had the doctor examine me.",
     funFact:"Doctors in Japan are addressed as sensei (先生), not as 'doctor.' Japanese doctors often run small private clinics rather than working in large hospitals. Finding a good 'かかりつけ医' (family doctor) is important for every household."},

    {type:"teach", trg:"ちゅうしゃ", src:"injection / shot", pos:"noun", gender:null,
     note:"Kanji: 注射. Pour + shoot. Getting a vaccine or blood drawn.",
     example:"インフルエンザのちゅうしゃをうけました。",
     exampleSrc:"I got a flu shot.",
     funFact:"Japanese needle phobia is common enough to have its own word: 注射嫌い (chuusha-girai). However, Japanese medical technology uses some of the world's thinnest needles, making injections less painful than in many countries."},

    {type:"teach", trg:"のどがいたい", src:"to have a sore throat", pos:"adj", gender:null,
     note:"のど (throat) + が + いたい (painful). Describing throat pain.",
     example:"のどがいたいので、おちゃをのみます。",
     exampleSrc:"My throat hurts, so I drink tea.",
     funFact:"Japanese home remedies for sore throats include gargling with green tea, drinking hot honey lemon water, and wearing a protective mask to keep the throat moist. Throat lozenges (のど飴 nodo-ame) are incredibly popular."},

    {type:"teach", trg:"けが", src:"injury / wound", pos:"noun", gender:null,
     note:"Kanji: 怪我. Can be written in hiragana. Physical injuries.",
     example:"サッカーでけがをしました。",
     exampleSrc:"I got injured playing soccer.",
     funFact:"The kanji 怪我 literally means 'mysterious self,' suggesting that injuries happen when something strange occurs to you. Japanese first aid kits (救急箱 kyuukyuubako) are found in every school, office, and home."},

    {type:"teach", trg:"マスク", src:"(face) mask", pos:"noun", gender:null,
     note:"From English 'mask.' A cultural staple in Japan long before COVID.",
     example:"かぜのときはマスクをします。",
     exampleSrc:"I wear a mask when I have a cold.",
     funFact:"Japan was wearing masks decades before the world caught on. Pollen allergies (花粉症), cold prevention, and even fashion drove mask use. Annual mask sales exceeded 5 billion units even before 2020."},

    {type:"teach", trg:"たいちょう", src:"physical condition", pos:"noun", gender:null,
     note:"Kanji: 体調. Body + tune. How your body is 'tuned.'",
     example:"たいちょうがわるいです。",
     exampleSrc:"I am not feeling well.",
     funFact:"Taichou ga warui (bad physical condition) is the most polite way to explain feeling unwell in Japanese. It is vague enough to avoid uncomfortable details while clearly communicating that you are not at your best."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"From German 'Allergie.' Many Japanese suffer from pollen allergies.",
     example:"わたしはかふんアレルギーです。",
     exampleSrc:"I have pollen allergies.",
     funFact:"花粉症 (kafunshou, hay fever) affects about 40% of Japanese people. Cedar pollen season (February-April) is a national health event. TV news reports pollen counts daily, and anti-allergy products fill entire store aisles."},

    {type:"teach", trg:"ほけんしょう", src:"health insurance card", pos:"noun", gender:null,
     note:"Kanji: 保険証. Insurance + certificate. Required at medical visits.",
     example:"ほけんしょうをもっていますか？",
     exampleSrc:"Do you have your health insurance card?",
     funFact:"Japan's universal healthcare covers 70% of medical costs for most people. The small blue-and-white insurance card is presented at every doctor visit. Without it, you pay 100% upfront (and can be reimbursed later)."},

    {type:"teach", trg:"しんさつ", src:"medical examination / consultation", pos:"noun", gender:null,
     note:"Kanji: 診察. Diagnose + examine. The doctor's examination.",
     example:"しんさつのよやくをとりたいです。",
     exampleSrc:"I want to make an appointment for an examination.",
     funFact:"Japanese clinics often work on a first-come-first-served basis without appointments. Patients arrive early and wait. Some modern clinics use online reservation systems that let you check wait times from your phone."},

    {type:"mc", q:"What does かぜ literally mean?",
     opts:["wind evil","cold air","bad spirit","body pain"], ans:"wind evil",
     hint:"Ancient medicine believed illness was carried by something in the w...."},

    {type:"fb", s:"{1}が38どあります。", a:"ねつ",
     sSrc:"I have a fever of 38 degrees.",
     opts:["ねつ","かぜ","せき","けが"],
     hint:"Elevated body temperature measured with a thermometer."},

    {type:"match", pairs:[
      {trg:"くすり", src:"medicine"},
      {trg:"いしゃ", src:"doctor"},
      {trg:"ちゅうしゃ", src:"injection"},
      {trg:"マスク", src:"mask"}
    ]},

    {type:"mc", q:"What does たいちょうがわるい mean?",
     opts:["I am not feeling well","I am very sick","I have a cold","I am injured"], ans:"I am not feeling well",
     hint:"A polite, general way to say your physical condition is off."},

    {type:"fb", s:"{1}をもっていますか？", a:"ほけんしょう",
     sSrc:"Do you have your health insurance card?",
     opts:["ほけんしょう","くすり","マスク","ねつ"],
     hint:"The card required at every medical visit in Japan."},

    {type:"mc", q:"花粉症 affects about what percentage of Japanese?",
     opts:["40%","5%","80%","15%"], ans:"40%",
     hint:"Pollen allergies are a massive health issue in Japan each spring."},

    {type:"mc", q:"What does けが mean?",
     opts:["injury/wound","illness","fever","allergy"], ans:"injury/wound",
     hint:"Physical damage to the body from accidents or sports."}
  ]
};
export default BATCH4_L_1;
