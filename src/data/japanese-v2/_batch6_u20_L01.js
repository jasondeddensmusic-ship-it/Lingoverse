// Batch 6 – Unit 20 (B1.2 Polite Language): Customer Service & Keigo
const BATCH6_L1 = {
  id:"jav2_u20l_b6_1", title:"接客(せっきゃく)敬語(けいご)", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"接客(せっきゃく)敬語(けいご)",
     desc:"Master the polite expressions used in Japanese service contexts. From department stores to hotels, service staff use a special register of keigo that customers hear daily.",
     goals:["Recognize and understand service-industry keigo","Use appropriate polite forms as a customer","Navigate formal service interactions confidently"]},

    {type:"teach", trg:"いらっしゃいませ", src:"welcome (to a shop/restaurant)", pos:"intj", gender:null,
     note:"The universal greeting from service staff.\nいらっしゃる = honorific form of いる/いく/くる.",
     example:"A: いらっしゃいませ。何名(なんめい)様(さま)ですか？\nB: 二名(にめい)です。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Welcome. How many guests?\nB: Two people.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"いらっしゃいませ is shouted enthusiastically in Japanese shops and restaurants. In izakaya, the entire staff chorus it when a customer enters. The phrase comes from いらっしゃる, the honorific form of 'to come/be.' You do not need to respond; just acknowledge with a nod or smile."},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (very polite)", pos:"intj", gender:null,
     note:"The most formal way to say 'understood.' Used by service staff.\nHigher than わかりました.",
     example:"A: コーヒーを一(ひと)つお願(ねが)いします。\nB: かしこまりました。少々(しょうしょう)お待(ま)ちください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: One coffee, please.\nB: Certainly. Please wait a moment.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"かしこまりました is the service-industry standard for 'understood.' It comes from かしこまる (to be reverential). The politeness hierarchy: わかった (casual) < わかりました (polite) < 承知(しょうち)しました (formal) < かしこまりました (service-level). Hearing this means your request was received with utmost respect."},

    {type:"teach", trg:"少々(しょうしょう)", src:"a little / a moment (formal)", pos:"adv", gender:null,
     note:"少々(しょうしょう)お待(ま)ちください = please wait a moment.\nMore formal than ちょっと.",
     example:"A: 少々(しょうしょう)お待(ま)ちくださいませ。\nB: はい。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Please wait just a moment.\nB: Okay.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"少々(しょうしょう) is the formal version of 少(すこ)し (a little) and ちょっと (a bit). In service contexts, even a 10-minute wait is softened with 少々(しょうしょう). The phrase 少々(しょうしょう)お待(ま)ちくださいませ is heard hundreds of times daily in any Japanese hotel or department store."},

    {type:"teach", trg:"お客様(きゃくさま)", src:"customer / guest (honorific)", pos:"noun", gender:null,
     note:"The standard way service staff refer to customers.\nお客(きゃく) = guest (plain).",
     example:"A: お客様(きゃくさま)、こちらへどうぞ。\nB: ありがとうございます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Dear customer, this way please.\nB: Thank you.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"お客様(きゃくさま) (お客様) adds both お and さま, the highest honorific combination. The famous phrase お客様(きゃくさま)は神様(かみさま)です (the customer is God) captures Japan's service philosophy. However, recent debate questions if this attitude enables problem customers (クレーマー)."},

    {type:"teach", trg:"ございます", src:"there is / to be (very polite form of あります)", pos:"verb", gender:null,
     note:"Humble polite form. お色(いろ)違(ちが)いもございます = we also have it in different colors.\nUsed exclusively in service/formal speech.",
     example:"A: 他(ほか)のサイズはございますか？\nB: はい、ございます。お持(も)ちしますね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Do you have other sizes?\nB: Yes, we do. I will bring them.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ございます is the super-polite あります. おはようございます (good morning) uses it. In shops: こちらにございます (it is over here), 在庫(ざいこ)がございません (we don't have stock). Mastering when to use ございます vs あります shows advanced register awareness."},

    {type:"mc", q:"かしこまりました is:", opts:["The very formal 'understood' used by service staff","A casual way to say 'I see'","A greeting for customers","A way to say goodbye"], ans:"The very formal 'understood' used by service staff",
     hint:"This is the highest-level acknowledgment, above わかりました."},

    {type:"teach", trg:"申(もう)し訳(わけ)ございません", src:"I am terribly sorry (most formal apology)", pos:"intj", gender:null,
     note:"The highest-level apology in service.\nBelow this: すみません, ごめんなさい.",
     example:"A: ただいま在庫切(ざいこぎ)れでございます。申(もう)し訳(わけ)ございません。\nB: そうですか。いつ入(はい)りますか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: We are currently out of stock. I am terribly sorry.\nB: I see. When will it come in?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"申(もう)し訳(わけ)ございません literally means 'there is no excuse.' It is the deepest apology in business and service. When Japanese companies make mistakes, executives bow deeply and say this phrase. The depth of the bow corresponds to the severity of the error."},

    {type:"teach", trg:"お持(も)ちする", src:"to bring (humble form)", pos:"verb", gender:null,
     note:"Humble form of 持(も)ってくる. Used by staff serving customers.\nお持(も)ちします = I will bring it.",
     example:"A: メニューをお持(も)ちしますね。\nB: お願(ねが)いします。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I will bring you the menu.\nB: Please do.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"お持(も)ちする is the humble keigo form of 持(も)ってくる (to bring). Service staff lower themselves (humble) to elevate the customer (honorific). This double-layer politeness system is what makes Japanese service uniquely refined. Other humble service forms: お取(と)りします (I will get it), ご案内(あんない)します (I will guide you)."},

    {type:"teach", trg:"承(うけたまわ)る", src:"to receive / to accept (very humble)", pos:"verb", gender:null,
     note:"The humblest way to say 'I accept/receive your request.'\n承(うけたまわ)りました = I have received your order.",
     example:"A: ご注文(ちゅうもん)を承(うけたまわ)ります。\nB: ランチセットBをお願(ねが)いします。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I will take your order.\nB: Lunch set B, please.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"承(うけたまわ)る is ultra-humble, used in the most formal service contexts: hotels, high-end restaurants, airlines. It is the humble form of 受(う)ける (to receive). Flight attendants say ご注文(ちゅうもん)を承(うけたまわ)ります. Even native speakers feel this word is impressive when they hear it."},

    {type:"teach", trg:"ご利用(りよう)", src:"usage / use (honorific)", pos:"noun", gender:null,
     note:"Honorific form of 利用(りよう). ご利用(りよう)ありがとうございます = thank you for your patronage.\nUsed by businesses to thank customers.",
     example:"A: ご利用(りよう)ありがとうございます。またお越(こ)しください。\nB: ありがとうございました。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Thank you for your patronage. Please come again.\nB: Thank you.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"ご利用(りよう)ありがとうございます is the standard customer-farewell phrase. Trains announce it at every station: ご利用(りよう)ありがとうございます (thank you for using our service). The ご prefix adds honorific respect to 利用(りよう) (usage). Stores, taxis, and websites all use this phrase."},

    {type:"fb", s:"{1}。何名(なんめい)様(さま)ですか？\n(Welcome. How many guests?)", a:"いらっしゃいませ", opts:["いらっしゃいませ","おはようございます","さようなら","おやすみなさい"], sSrc:"Welcome. How many guests?",
     hint:"The universal welcoming phrase shouted by shop and restaurant staff."},

    {type:"teach", trg:"お買(か)い物(もの)", src:"shopping (honorific)", pos:"noun", gender:null,
     note:"Honorific form of 買(か)い物(もの). お買(か)い物(もの)はお済(す)みですか = have you finished shopping?\nUsed by department store staff.",
     example:"A: お買(か)い物(もの)はお済(す)みでしょうか？\nB: はい、お会計(かいけい)をお願(ねが)いします。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Have you finished shopping?\nB: Yes, please ring me up.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"Department store keigo is a whole register of Japanese. Staff are extensively trained in this polished language. お買(か)い物(もの) adds both お and 物(もの) (thing) to 買(か)う (use/buy). Japanese department stores (デパート) like Isetan, Mitsukoshi, and Takashimaya are famous for this level of service language."},

    {type:"teach", trg:"あいにく", src:"unfortunately / I am afraid", pos:"adv", gender:null,
     note:"Used to deliver bad news politely. あいにく満席(まんせき)でございます = unfortunately we are full.\nNo kanji commonly used.",
     example:"A: 今日(きょう)の予約(よやく)はとれますか？\nB: あいにく満席(まんせき)でございます。明日(あす)はいかがですか？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Can I get a reservation for today?\nB: Unfortunately we are fully booked. How about tomorrow?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"あいにく softens disappointing news. It is the polite way to say 'unfortunately' in service contexts. あいにくの雨(あめ) (unfortunately it is raining) and あいにく留守(るす)にしております (unfortunately they are not here) are common patterns. Using あいにく shows sensitivity to the listener's feelings."},

    {type:"mc", q:"申(もう)し訳(わけ)ございません is:", opts:["A greeting","The deepest formal apology in service contexts","A casual sorry","A way to say thank you"], ans:"The deepest formal apology in service contexts",
     hint:"This phrase literally means 'there is no excuse' and is used for serious apologies."},

    {type:"match", pairs:[
      {trg:"いらっしゃいませ", src:"welcome (shop/restaurant)"},
      {trg:"かしこまりました", src:"certainly (very formal)"},
      {trg:"ございます", src:"there is (very polite)"},
      {trg:"承(うけたまわ)る", src:"to accept (very humble)"},
      {trg:"あいにく", src:"unfortunately"}
    ]},

    {type:"fb", s:"ただいま在庫切(ざいこぎ)れでございます。{1}。\n(We are currently out of stock. I am terribly sorry.)", a:"もうしわけございません", opts:["もうしわけございません","ありがとうございます","おめでとうございます","いってきます"], sSrc:"We are currently out of stock. I am terribly sorry.",
     hint:"The deepest formal apology used when a business cannot fulfill a request."},

    {type:"mc", q:"あいにく is used to:", opts:["Make a request","Give directions","Deliver bad news politely","Express excitement"], ans:"Deliver bad news politely",
     hint:"This word softens unfortunate information for the listener."}
  ,{type:"match",pairs:[{trg:"少々(しょうしょう)",src:"a little / a moment (formal)"},{trg:"お客様(きゃくさま)",src:"customer / guest (honorific)"},{trg:"申(もう)し訳(わけ)ございません",src:"I am terribly sorry (most formal apology)"},{trg:"お持(も)ちする",src:"to bring (humble form)"},{trg:"ご利用(りよう)",src:"usage / use (honorific)"},{trg:"お買(か)い物(もの)",src:"shopping (honorific)"}]}]
};
export default BATCH6_L1;
