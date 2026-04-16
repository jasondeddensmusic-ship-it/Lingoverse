// Batch 6 – Unit 20 (B1.2 Polite Language): Customer Service & Keigo
const BATCH6_L1 = {
  id:"jav2_u20l_b6_1", title:"せっきゃくけいご", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"せっきゃくけいご",
     desc:"Master the polite expressions used in Japanese service contexts. From department stores to hotels, service staff use a special register of keigo that customers hear daily.",
     goals:["Recognize and understand service-industry keigo","Use appropriate polite forms as a customer","Navigate formal service interactions confidently"]},

    {type:"teach", trg:"いらっしゃいませ", src:"welcome (to a shop/restaurant)", pos:"intj", gender:null,
     note:"The universal greeting from service staff.\nいらっしゃる = honorific form of いる/いく/くる.",
     example:"A: いらっしゃいませ。なんめいさまですか？\nB: にめいです。",
     exampleSrc:"A: Welcome. How many guests?\nB: Two people.",
     funFact:"いらっしゃいませ is shouted enthusiastically in Japanese shops and restaurants. In izakaya, the entire staff chorus it when a customer enters. The phrase comes from いらっしゃる, the honorific form of 'to come/be.' You do not need to respond; just acknowledge with a nod or smile."},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (very polite)", pos:"intj", gender:null,
     note:"The most formal way to say 'understood.' Used by service staff.\nHigher than わかりました.",
     example:"A: コーヒーをひとつおねがいします。\nB: かしこまりました。しょうしょうおまちください。",
     exampleSrc:"A: One coffee, please.\nB: Certainly. Please wait a moment.",
     funFact:"かしこまりました is the service-industry standard for 'understood.' It comes from かしこまる (to be reverential). The politeness hierarchy: わかった (casual) < わかりました (polite) < しょうちしました (formal) < かしこまりました (service-level). Hearing this means your request was received with utmost respect."},

    {type:"teach", trg:"しょうしょう", src:"a little / a moment (formal)", pos:"adv", gender:null,
     note:"Kanji: 少々. しょうしょうおまちください = please wait a moment.\nMore formal than ちょっと.",
     example:"A: しょうしょうおまちくださいませ。\nB: はい。",
     exampleSrc:"A: Please wait just a moment.\nB: Okay.",
     funFact:"しょうしょう is the formal version of すこし (a little) and ちょっと (a bit). In service contexts, even a 10-minute wait is softened with しょうしょう. The phrase しょうしょうおまちくださいませ is heard hundreds of times daily in any Japanese hotel or department store."},

    {type:"teach", trg:"おきゃくさま", src:"customer / guest (honorific)", pos:"noun", gender:null,
     note:"Kanji: お客様. The standard way service staff refer to customers.\nきゃく = guest (plain).",
     example:"A: おきゃくさま、こちらへどうぞ。\nB: ありがとうございます。",
     exampleSrc:"A: Dear customer, this way please.\nB: Thank you.",
     funFact:"おきゃくさま (お客様) adds both お and さま, the highest honorific combination. The famous phrase おきゃくさまはかみさまです (the customer is God) captures Japan's service philosophy. However, recent debate questions if this attitude enables problem customers (クレーマー)."},

    {type:"teach", trg:"ございます", src:"there is / to be (very polite form of あります)", pos:"verb", gender:null,
     note:"Humble polite form. おいろちがいもございます = we also have it in different colors.\nUsed exclusively in service/formal speech.",
     example:"A: ほかのサイズはございますか？\nB: はい、ございます。おもちしますね。",
     exampleSrc:"A: Do you have other sizes?\nB: Yes, we do. I will bring them.",
     funFact:"ございます is the super-polite あります. おはようございます (good morning) uses it. In shops: こちらにございます (it is over here), ざいこがございません (we don't have stock). Mastering when to use ございます vs あります shows advanced register awareness."},

    {type:"mc", q:"かしこまりました is:", opts:["The very formal 'understood' used by service staff","A casual way to say 'I see'","A greeting for customers","A way to say goodbye"], ans:"The very formal 'understood' used by service staff",
     hint:"This is the highest-level acknowledgment, above わかりました."},

    {type:"teach", trg:"もうしわけございません", src:"I am terribly sorry (most formal apology)", pos:"intj", gender:null,
     note:"Kanji: 申し訳ございません. The highest-level apology in service.\nBelow this: すみません, ごめんなさい.",
     example:"A: ただいまざいこぎれでございます。もうしわけございません。\nB: そうですか。いつはいりますか？",
     exampleSrc:"A: We are currently out of stock. I am terribly sorry.\nB: I see. When will it come in?",
     funFact:"もうしわけございません (申し訳ございません) literally means 'there is no excuse.' It is the deepest apology in business and service. When Japanese companies make mistakes, executives bow deeply and say this phrase. The depth of the bow corresponds to the severity of the error."},

    {type:"teach", trg:"おもちする", src:"to bring (humble form)", pos:"verb", gender:null,
     note:"Humble form of もってくる. Used by staff serving customers.\nおもちします = I will bring it.",
     example:"A: メニューをおもちしますね。\nB: おねがいします。",
     exampleSrc:"A: I will bring you the menu.\nB: Please do.",
     funFact:"おもちする is the humble keigo form of もってくる (to bring). Service staff lower themselves (humble) to elevate the customer (honorific). This double-layer politeness system is what makes Japanese service uniquely refined. Other humble service forms: おとりします (I will get it), ごあんないします (I will guide you)."},

    {type:"teach", trg:"うけたまわる", src:"to receive / to accept (very humble)", pos:"verb", gender:null,
     note:"Kanji: 承る. The humblest way to say 'I accept/receive your request.'\nうけたまわりました = I have received your order.",
     example:"A: ごちゅうもんをうけたまわります。\nB: ランチセットBをおねがいします。",
     exampleSrc:"A: I will take your order.\nB: Lunch set B, please.",
     funFact:"うけたまわる is ultra-humble, used in the most formal service contexts: hotels, high-end restaurants, airlines. It is the humble form of うける (to receive). Flight attendants say ごちゅうもんをうけたまわります. Even native speakers feel this word is impressive when they hear it."},

    {type:"teach", trg:"ごりよう", src:"usage / use (honorific)", pos:"noun", gender:null,
     note:"Honorific form of りよう (利用). ごりようありがとうございます = thank you for your patronage.\nUsed by businesses to thank customers.",
     example:"A: ごりようありがとうございます。またおこしください。\nB: ありがとうございました。",
     exampleSrc:"A: Thank you for your patronage. Please come again.\nB: Thank you.",
     funFact:"ごりようありがとうございます is the standard customer-farewell phrase. Trains announce it at every station: ごりようありがとうございます (thank you for using our service). The ご prefix adds honorific respect to りよう (usage). Stores, taxis, and websites all use this phrase."},

    {type:"fb", s:"{1}。なんめいさまですか？\n(Welcome. How many guests?)", a:"いらっしゃいませ", opts:["いらっしゃいませ","おはようございます","さようなら","おやすみなさい"], sSrc:"Welcome. How many guests?",
     hint:"The universal welcoming phrase shouted by shop and restaurant staff."},

    {type:"teach", trg:"おつかいもの", src:"shopping (honorific)", pos:"noun", gender:null,
     note:"Honorific form of かいもの. おつかいものはおすみですか = have you finished shopping?\nUsed by department store staff.",
     example:"A: おつかいものはおすみでしょうか？\nB: はい、おかいけいをおねがいします。",
     exampleSrc:"A: Have you finished shopping?\nB: Yes, please ring me up.",
     funFact:"Department store keigo is a whole register of Japanese. Staff are extensively trained in this polished language. おつかいもの adds both お and もの (thing) to つかう (use/buy). Japanese department stores (デパート) like Isetan, Mitsukoshi, and Takashimaya are famous for this level of service language."},

    {type:"teach", trg:"あいにく", src:"unfortunately / I am afraid", pos:"adv", gender:null,
     note:"Used to deliver bad news politely. あいにくまんせきでございます = unfortunately we are full.\nNo kanji commonly used.",
     example:"A: きょうのよやくはとれますか？\nB: あいにくまんせきでございます。あすはいかがですか？",
     exampleSrc:"A: Can I get a reservation for today?\nB: Unfortunately we are fully booked. How about tomorrow?",
     funFact:"あいにく softens disappointing news. It is the polite way to say 'unfortunately' in service contexts. あいにくのあめ (unfortunately it is raining) and あいにくるすにしております (unfortunately they are not here) are common patterns. Using あいにく shows sensitivity to the listener's feelings."},

    {type:"mc", q:"もうしわけございません is:", opts:["The deepest formal apology in service contexts","A casual sorry","A way to say thank you","A greeting"], ans:"The deepest formal apology in service contexts",
     hint:"This phrase literally means 'there is no excuse' and is used for serious apologies."},

    {type:"match", pairs:[
      {trg:"いらっしゃいませ", src:"welcome (shop/restaurant)"},
      {trg:"かしこまりました", src:"certainly (very formal)"},
      {trg:"ございます", src:"there is (very polite)"},
      {trg:"うけたまわる", src:"to accept (very humble)"},
      {trg:"あいにく", src:"unfortunately"}
    ]},

    {type:"fb", s:"ただいまざいこぎれでございます。{1}。\n(We are currently out of stock. I am terribly sorry.)", a:"もうしわけございません", opts:["もうしわけございません","ありがとうございます","おめでとうございます","いってきます"], sSrc:"We are currently out of stock. I am terribly sorry.",
     hint:"The deepest formal apology used when a business cannot fulfill a request."},

    {type:"mc", q:"あいにく is used to:", opts:["Deliver bad news politely","Express excitement","Make a request","Give directions"], ans:"Deliver bad news politely",
     hint:"This word softens unfortunate information for the listener."}
  ]
};
export default BATCH6_L1;
