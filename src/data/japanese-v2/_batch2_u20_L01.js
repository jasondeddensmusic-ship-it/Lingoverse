// Unit 20 Batch 2 Lesson 1: サービスけいご (Keigo in the Service Industry)
const BATCH2_L_1 = {
  id:"jav2_u20l_b2_1", title:"サービスけいご", icon:"🏨", xp:15, board:true,
  steps:[
    {type:"intro", title:"サービスけいご",
     desc:"Japanese service industry keigo is legendary. Hotels, restaurants, and shops use a unique set of polite expressions that go beyond standard honorific and humble forms. Master the phrases you will hear and use in every Japanese service encounter.",
     goals:["Understand keigo phrases used in hotels and restaurants","Learn counter-service expressions and responses","Use appropriate keigo when receiving service"]},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (very polite, service)", pos:"verb", gender:null,
     note:"Ultra-polite form of わかりました. Standard response from service staff.\nKanji: 畏まりました.",
     example:"A: すみません、おみずをください。\nB: かしこまりました。しょうしょうおまちください。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Excuse me, water please.\nB: Certainly. Please wait a moment.\nA: When was it?\nB: It was last summer.",
     funFact:"かしこまりました is the highest-level acknowledgment in service Japanese. The kanji 畏 means 'awe/reverence.' When a hotel concierge or restaurant server says kashikomarimashita, they are expressing deep respect for your request. It is a step above しょうちしました and worlds above わかりました."},

    {type:"teach", trg:"ごあんないいたします", src:"I will guide you / let me show you (humble service)", pos:"verb", gender:null,
     note:"ご + あんない + いたします. Humble form of あんないする (to guide).\nStandard in hotels, restaurants, and museums.",
     example:"A: よやくしたものですが。\nB: かしこまりました。おせきまでごあんないいたします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I have a reservation.\nB: Certainly. Let me show you to your seat.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ごあんないいたします is standard hospitality Japanese. The ご prefix (for Chinese-origin words) plus いたします (humble of する) creates maximum politeness. Hotel staff, museum guides, and restaurant hosts all use this phrase. The meticulous attention to guiding guests reflects Japanese hospitality (おもてなし, omotenashi)."},

    {type:"teach", trg:"おもうしつけございませんが", src:"I am sorry to say this, but ~ (very polite preface)", pos:"intj", gender:null,
     note:"Ultra-polite preface before delivering unwelcome news.\nもうしつけ = speaking up. ございません = does not exist.",
     example:"A: おもうしつけございませんが、まんせきでございます。\nB: わかりました。またきます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am terribly sorry, but we are fully booked.\nB: I understand. I will come again.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"おもうしつけございませんが is the ultimate softener before bad news. It literally means 'there is no excuse for saying this, but...' Service staff use it before denying requests, announcing closures, or delivering any disappointing information. The extreme politeness cushions the blow."},

    {type:"teach", trg:"よやく", src:"reservation / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. よ (in advance) + やく (promise/appointment).\nよやくする = to make a reservation.",
     example:"A: よやくはされていますか？\nB: はい、7じにやまだでよやくしています。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Do you have a reservation?\nB: Yes, I have a reservation under Yamada at 7.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"予約 culture is strong in Japan. Popular restaurants, hair salons, and doctors all require reservations. Walk-ins (飛び込み, tobikomi) are sometimes impossible. Online reservation systems (ネット予約) have modernized the process. Cancelling a reservation last-minute is considered very rude."},

    {type:"mc", q:"かしこまりました is equivalent to:", opts:["I do not understand","I am sorry","Certainly, understood (very polite)","Please wait"], ans:"Certainly, understood (very polite)",
     hint:"This is the highest level of acknowledgment, used by service staff to show utmost respect."},

    {type:"teach", trg:"まんせき", src:"fully booked / no vacancies / sold out (seats)", pos:"noun", gender:null,
     note:"まん (full) + せき (seats). Kanji: 満席.\nまんしつ = no vacant rooms (hotel).",
     example:"A: もうしわけございませんが、まんせきです。\nB: つぎのじかんはあいていますか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am sorry, but we are fully booked.\nB: Is the next time slot available?\nA: How long did it take?\nB: About two hours.",
     funFact:"満席 specifically means all seats are taken. Related terms include 満室 (manshitsu, no vacant rooms), 満員 (man'in, full capacity of people), and 満車 (mansha, parking lot full). Japan's meticulous categorization extends to specifying exactly what kind of 'full' something is."},

    {type:"teach", trg:"おにもつをおあずかりします", src:"let me take your luggage (humble service)", pos:"verb", gender:null,
     note:"お + にもつ + を + お + あずかり + します.\nUltra-polite hotel phrase for handling guest belongings.",
     example:"A: こちらのおにもつをおあずかりいたします。\nB: おねがいします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Allow me to take your luggage.\nB: Please do.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"おあずかりします uses the humble pattern for あずかる (to keep/hold). Hotel bellhops and cloakroom staff say this when handling guest items. The double お (on にもつ and あずかり) creates maximum politeness. Japanese hotels are famous for handling luggage with white-gloved care."},

    {type:"teach", trg:"ございます", src:"there is / to be (very polite)", pos:"verb", gender:null,
     note:"Ultra-polite form of あります. Used in service contexts.\nごよういはございますか = is there anything you need?",
     example:"A: なにかごしつもんはございますか？\nB: いいえ、だいじょうぶです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Do you have any questions?\nB: No, I am fine.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ございます is the keigo form of あります. It elevates the entire tone of speech to the highest formality. Department stores, hotels, and formal businesses use it constantly. The greeting おはようございます (good morning) is actually an honorific: おはよう + ございます."},

    {type:"fb", s:"おせきまで{1}いたします。\n(Let me show you to your seat.)", a:"ごあんない", opts:["ごあんない","あんない","ごしょうかい","おしらせ"], sSrc:"Let me show you to your seat.",
     hint:"The honorific prefix ご + the noun for 'guiding/showing' in the humble service pattern."},

    {type:"teach", trg:"おもてなし", src:"hospitality / warm reception", pos:"noun", gender:null,
     note:"From もてなす (to entertain/host). The お prefix adds respect.\nKanji: おもてなし. A core Japanese cultural value.",
     example:"A: にほんのおもてなしはすばらしいです。\nB: ありがとうございます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Japanese hospitality is wonderful.\nB: Thank you.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"おもてなし became world-famous when it was used in Tokyo's 2020 Olympics bid presentation. The word encapsulates Japan's philosophy of selfless, anticipatory service. Hosts aim to anticipate guests' needs before they are expressed. This concept shapes everything from hotel service to home visits."},

    {type:"teach", trg:"おそれいりますが", src:"I am sorry to trouble you, but ~ (polite preface)", pos:"intj", gender:null,
     note:"Softer than おもうしつけございませんが. Used before requests or questions.\nおそれいる = to be sorry/grateful.",
     example:"A: おそれいりますが、おなまえをおしえていただけますか？\nB: やまだです。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am sorry to trouble you, but may I ask your name?\nB: It is Yamada.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"おそれいりますが is a versatile preface used before any potentially imposing request. It literally means 'I fear/am awed.' Service staff use it before asking for information, and customers use it before making special requests. It demonstrates awareness that you are creating a small burden for the other person."},

    {type:"mc", q:"おもうしつけございませんが、まんせきでございます means:", opts:["We have many seats available","I am terribly sorry, but we are fully booked","Please have a seat","Your reservation is confirmed"], ans:"I am terribly sorry, but we are fully booked",
     hint:"The ultra-polite preface softens the delivery of disappointing news about no available seats."},

    {type:"tip", title:"Essential Service Keigo Phrases",
     text:"Staff to customer:\nいらっしゃいませ = welcome\nかしこまりました = certainly (understood)\nしょうしょうおまちください = please wait a moment\nごあんないいたします = let me show you\nおもうしつけございませんが = I am terribly sorry, but\nおそれいりますが = excuse me (before a request)\nございます = there is (ultra-polite あります)\n\nCustomer phrases:\nよやくしたものですが = I have a reservation\nおねがいします = please\nありがとうございます = thank you",
     deepDive:{title:"Why Japanese Service Is Different",
      text:"Japanese service keigo creates a unique customer experience:\n\n1. No tipping: service excellence is the baseline, not extra.\n2. Everyone uses keigo: convenience store clerks to luxury hotels.\n3. Phrases are memorized and standardized across industries.\n4. Voice quality changes: pitch rises, pace slows.\n5. Body language accompanies words: bowing, gesturing with open palms.\n\nForeign visitors often note that Japanese service feels almost ceremonial. This is intentional: おもてなし treats every customer interaction as a small ceremony of respect."}},

    {type:"match", pairs:[{trg:"かしこまりました",src:"certainly (understood)"},{trg:"ごあんないいたします",src:"let me guide you"},{trg:"おもうしつけございませんが",src:"terribly sorry, but"},{trg:"よやく",src:"reservation"}]},

    {type:"fb", s:"なにかごしつもんは{1}か？\n(Do you have any questions?)", a:"ございます", opts:["ございます","あります","います","できます"], sSrc:"Do you have any questions?",
     hint:"The ultra-polite form of あります used in formal service contexts."},

    {type:"match", pairs:[{trg:"まんせき",src:"fully booked"},{trg:"おもてなし",src:"hospitality"},{trg:"ございます",src:"there is (very polite)"},{trg:"おそれいりますが",src:"sorry to trouble you, but"}]},

    {type:"mc", q:"おもてなし is best described as:", opts:["A type of food","Japanese hospitality and selfless service","A greeting phrase","A business title"], ans:"Japanese hospitality and selfless service",
     hint:"This cultural concept became world-famous during Japan's Olympic bid and represents anticipatory, heartfelt s...."},
  ]
};
export default BATCH2_L_1;
