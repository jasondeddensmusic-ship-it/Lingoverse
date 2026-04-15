// Unit 13 Expansion L5. Cultural Experiences in Japan
// Experience pattern with cultural activities and seasonal events.

const LESSON_5 = {id:"jav2_u13l5", title:"にほんのぶんか", icon:"🎎", xp:15, board:true, steps:[
  {type:"intro", title:"にほんのぶんか",
   desc:"Explore Japanese cultural experiences: tea ceremony, kimono, hanami, and more. These are the experiences that make Japan unique, and knowing how to talk about them shows cultural awareness and genuine interest.",
   goals:["Discuss traditional Japanese cultural experiences","Learn vocabulary for seasonal events and customs","Use experience patterns with cultural activities"]},

  {type:"teach", trg:"きもの", src:"kimono (traditional garment)", pos:"noun", gender:null,
   note:"The traditional Japanese garment. きものをきる = to wear a kimono.\nKanji: 着物 (thing to wear).",
   example:"A: きものをきたことがありますか？\nB: はい、きょうとでレンタルしてきました。",
   exampleSrc:"A: Have you worn a kimono before?\nB: Yes, I rented one in Kyoto and wore it.",
   funFact:"着物 literally means 'thing to wear' (着 = wear, 物 = thing). Kimono rental shops in Kyoto and Asakusa are hugely popular with tourists and Japanese people alike. A full kimono outfit includes the garment, obi belt, tabi socks, and geta sandals. Dressing properly requires skill."},

  {type:"teach", trg:"はなみ", src:"cherry blossom viewing", pos:"noun", gender:null,
   note:"はな (flower) + み (viewing). The springtime tradition of viewing cherry blossoms.\nKanji: 花見.",
   example:"A: はなみをしたことがありますか？\nB: はい、うえのこうえんではなみをしました。とてもきれいでした。",
   exampleSrc:"A: Have you done cherry blossom viewing before?\nB: Yes, I did hanami at Ueno Park. It was very beautiful.",
   funFact:"Hanami season (late March to mid-April) is a national event. Colleagues, families, and friends gather under cherry trees to eat, drink, and celebrate. Companies send junior employees early in the morning to claim spots with blue tarps. The sakura forecast (さくらよほう) is broadcast on national news."},

  {type:"teach", trg:"さどう", src:"tea ceremony", pos:"noun", gender:null,
   note:"The traditional art of preparing and serving matcha tea.\nKanji: 茶道 (way of tea).",
   example:"A: さどうをたいけんしたことがありますか？\nB: いいえ、いちどやってみたいです。",
   exampleSrc:"A: Have you experienced tea ceremony before?\nB: No, I want to try it once.",
   funFact:"茶道 combines 茶 (tea) and 道 (way/path). Tea ceremony is not just about drinking tea but about mindfulness, aesthetics, and respect. The four principles are wa (harmony), kei (respect), sei (purity), and jaku (tranquility). A single ceremony can take up to four hours."},

  {type:"mc", q:"はなみをしたことがありますか means:", opts:["Do you like flowers?","Have you gone flower shopping?","Have you done cherry blossom viewing?","Will you go see flowers?"], ans:"Have you done cherry blossom viewing?",
   hint:"はなみ is the springtime tradition of v... c... blossoms."},

  {type:"teach", trg:"たいけん", src:"hands-on experience", pos:"noun", gender:null,
   note:"たいけんする = to experience (hands-on). More active than けいけん.\nKanji: 体験.",
   example:"A: にほんでどんなたいけんをしましたか？\nB: おんせんとさどうをたいけんしました。",
   exampleSrc:"A: What kind of experiences did you have in Japan?\nB: I experienced hot springs and tea ceremony.",
   funFact:"体験 combines 体 (body) and 験 (test/experience), emphasizing physical, hands-on experience. たいけんきょうしつ (experience class) and たいけんツアー (experience tour) are common tourist activities. The nuance differs from けいけん (general life experience): たいけん implies active participation."},

  {type:"teach", trg:"ゆかた", src:"yukata (light summer kimono)", pos:"noun", gender:null,
   note:"A casual, cotton kimono worn in summer and at hot spring resorts.\nKanji: 浴衣.",
   example:"A: おまつりでゆかたをきたことがありますか？\nB: はい、とてもすずしくてきもちよかったです。",
   exampleSrc:"A: Have you worn a yukata at a festival before?\nB: Yes, it was very cool and comfortable.",
   funFact:"浴衣 combines 浴 (bathe) and 衣 (clothing), as it was originally a bathrobe. Today, yukata are worn at summer festivals, fireworks displays, and ryokan (traditional inns). They are simpler and cheaper than formal kimono, making them accessible to everyone."},

  {type:"teach", trg:"はなび", src:"fireworks", pos:"noun", gender:null,
   note:"はな (flower) + び/ひ (fire) = 'flower fire.' Summer tradition.\nKanji: 花火. はなびたいかい = fireworks festival.",
   example:"A: はなびたいかいにいったことがありますか？\nB: はい、すみだがわのはなびをみました。すごかったです！",
   exampleSrc:"A: Have you been to a fireworks festival?\nB: Yes, I saw the Sumida River fireworks. It was amazing!",
   funFact:"花火 literally means 'flower fire,' beautifully describing how fireworks bloom in the sky. Japan's fireworks festivals are summer highlights. The Sumida River festival in Tokyo dates back to 1733. Spectators shout 'tamaya!' and 'kagiya!' (names of historic fireworks makers) as fireworks burst."},

  {type:"fb", s:"さどうを{1}したことがありますか？\n(Have you experienced tea ceremony before?)", a:"たいけん", opts:["たいけん","けいけん","べんきょう","れんしゅう"], sSrc:"Have you experienced tea ceremony before?",
   hint:"The word for a hands-on, physical experience of trying something."},

  {type:"teach", trg:"おせちりょうり", src:"New Year's cuisine", pos:"noun", gender:null,
   note:"Special dishes eaten at New Year. Each dish has symbolic meaning.\nKanji: おせち料理.",
   example:"A: おせちりょうりをたべたことがありますか？\nB: いいえ、でもいちどたべてみたいです。",
   exampleSrc:"A: Have you eaten New Year's cuisine before?\nB: No, but I want to try it once.",
   funFact:"Each osechi dish has meaning: kuromame (black beans) for health, kazunoko (herring roe) for fertility, ebi (shrimp) for longevity. Dishes are packed in jubako (stacked lacquer boxes). Modern families increasingly buy pre-made osechi from department stores rather than cooking every dish from scratch."},

  {type:"teach", trg:"おみやげ", src:"souvenir / gift from a trip", pos:"noun", gender:null,
   note:"Gifts bought during travel for friends, family, and coworkers.\nKanji: お土産.",
   example:"A: にほんでおみやげをかったことがありますか？\nB: はい、おかしとストラップをかいました。",
   exampleSrc:"A: Have you bought souvenirs in Japan?\nB: Yes, I bought sweets and phone straps.",
   funFact:"Omiyage culture is a deeply ingrained social obligation. When traveling, you are expected to buy treats for coworkers and friends. Train stations have entire floors dedicated to omiyage. Regional specialties (めいぶつ) are the standard choice. Forgetting omiyage can cause social awkwardness."},

  {type:"mc", q:"はなび literally means:", opts:["sky light","big sound","flower fire","star rain"], ans:"flower fire",
   hint:"はな (f...) + び/ひ (f...), describing how fireworks bloom like flowers."},

  {type:"teach", trg:"もみじ", src:"autumn leaves / maple", pos:"noun", gender:null,
   note:"The autumn equivalent of はなみ. もみじがり = autumn leaf viewing.\nKanji: 紅葉.",
   example:"A: もみじがりにいったことがありますか？\nB: はい、きょうとのもみじはほんとうにきれいでした。",
   exampleSrc:"A: Have you gone autumn leaf viewing before?\nB: Yes, the autumn leaves in Kyoto were truly beautiful.",
   funFact:"紅葉 uses the kanji for 'crimson leaves.' もみじがり (autumn leaf hunting) is as beloved as はなみ (cherry blossom viewing). Kyoto, Nikko, and Hakone are top spots. The season runs from October to December, moving from north to south, opposite to the cherry blossom front."},

  {type:"fb", s:"にほんで{1}をかったことがありますか？\n(Have you bought souvenirs in Japan?)", a:"おみやげ", opts:["おみやげ","おかし","きもの","おちゃ"], sSrc:"Have you bought souvenirs in Japan?",
   hint:"The gifts you buy during travel for friends and coworkers."},

  {type:"match", pairs:[{trg:"きもの",src:"kimono"},{trg:"はなみ",src:"cherry blossom viewing"},{trg:"さどう",src:"tea ceremony"},{trg:"ゆかた",src:"summer kimono"}]},

  {type:"match", pairs:[{trg:"はなび",src:"fireworks"},{trg:"おせちりょうり",src:"New Year food"},{trg:"おみやげ",src:"souvenir"},{trg:"もみじ",src:"autumn leaves"}]},

  {type:"mc", q:"おみやげ is:", opts:["A type of food","A gift bought during travel","A festival event","A traditional dance"], ans:"A gift bought during travel",
   hint:"A deeply ingrained Japanese social obligation: you must return from any trip with something for those who stayed behind."},

  {type:"fb", s:"きょうとで{1}をしたことがありますか？\n(Have you done cherry blossom viewing in Kyoto?)", a:"はなみ", opts:["はなみ","はなび","はなし","はなや"], sSrc:"Have you done cherry blossom viewing in Kyoto?",
   hint:"The spring tradition of viewing cherry blossoms under the trees."},

  {type:"tip", title:"Japanese Seasonal Experiences",
   text:"Spring: はなみ (cherry blossom viewing)\nSummer: はなびたいかい (fireworks festival), ゆかた, おまつり\nAutumn: もみじがり (autumn leaf viewing)\nWinter: おせちりょうり (New Year food), おんせん\n\nYear-round: さどう (tea ceremony), きもの, おみやげ\n\nUseful patterns:\n〜をたいけんしたことがある (have experienced)\n〜にいったことがある (have been to)\nいちどやってみたい (want to try once)",
   deepDive:{title:"たいけん vs けいけん",
    text:"Both mean 'experience' but differ:\n\nたいけん (体験) = hands-on, physical experience\nさどうをたいけんする (experience tea ceremony by doing it)\nしごとたいけん (work experience/internship)\n\nけいけん (経験) = general life experience\nしごとのけいけんがある (have work experience)\nいいけいけんだった (it was a good experience)\n\nたいけん emphasizes active participation.\nけいけん emphasizes having gone through something.\n\nBoth work with ことがある:\nたいけんしたことがある (have experienced, hands-on)\nけいけんしたことがある (have experienced, general)"}},
]};
export default LESSON_5;
