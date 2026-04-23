// Unit 20 Batch 2 Lesson 1: サービス敬語(けいご) (Keigo in the Service Industry)
const BATCH2_L_1 = {
  id:"jav2_u20l_b2_1", title:"サービス敬語(けいご)", icon:"🏨", xp:15, board:true,
  steps:[
    {type:"intro", title:"サービス敬語(けいご)",
     desc:"Japanese service industry keigo is legendary. Hotels, restaurants, and shops use a unique set of polite expressions that go beyond standard honorific and humble forms. Master the phrases you will hear and use in every Japanese service encounter.",
     goals:["Understand keigo phrases used in hotels and restaurants","Learn counter-service expressions and responses","Use appropriate keigo when receiving service"]},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (very polite, service)", pos:"verb", gender:null,
     note:"Ultra-polite form of わかりました. Standard response from service staff.\nKanji: 畏まりました.",
     example:"A: すみません、お水(みず)をください。\nB: かしこまりました。少々(しょうしょう)お待(ま)ちください。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Excuse me, water please.\nB: Certainly. Please wait a moment.\nA: When was it?\nB: It was last summer.",
     funFact:"かしこまりました is the highest-level acknowledgment in service Japanese. The kanji 畏 means 'awe/reverence.' When a hotel concierge or restaurant server says kashikomarimashita, they are expressing deep respect for your request. It is a step above しょうちしました and worlds above わかりました."},

    {type:"teach", trg:"ご案内(あんない)いたします", src:"I will guide you / let me show you (humble service)", pos:"verb", gender:null,
     note:"ご + 案内(あんない) + いたします. Humble form of 案内(あんない)する (to guide).\nStandard in hotels, restaurants, and museums.",
     example:"A: 予約(よやく)したものですが。\nB: かしこまりました。お席(せき)までご案内(あんない)いたします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I have a reservation.\nB: Certainly. Let me show you to your seat.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ご案内いたします is standard hospitality Japanese. The ご prefix (for Chinese-origin words) plus いたします (humble of する) creates maximum politeness. Hotel staff, museum guides, and restaurant hosts all use this phrase. The meticulous attention to guiding guests reflects Japanese hospitality (おもてなし, omotenashi)."},

    {type:"teach", trg:"申(もう)し訳(わけ)ございませんが", src:"I am sorry to say this, but ~ (very polite preface)", pos:"intj", gender:null,
     note:"Ultra-polite preface before delivering unwelcome news.\n申(もう)し訳(わけ) = speaking up. ございません = does not exist.",
     example:"A: 申(もう)し訳(わけ)ございませんが、満席(まんせき)でございます。\nB: わかりました。また来(き)ます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am terribly sorry, but we are fully booked.\nB: I understand. I will come again.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"申し訳ございませんが is the ultimate softener before bad news. It literally means 'there is no excuse for saying this, but...' Service staff use it before denying requests, announcing closures, or delivering any disappointing information. The extreme politeness cushions the blow."},

    {type:"teach", trg:"予約(よやく)", src:"reservation / booking", pos:"noun", gender:null,
     note:"Kanji: 予約. よ (in advance) + やく (promise/appointment).\n予約(よやく)する = to make a reservation.",
     example:"A: 予約(よやく)はされていますか？\nB: はい、7時(じ)に山田(やまだ)で予約(よやく)しています。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Do you have a reservation?\nB: Yes, I have a reservation under Yamada at 7.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"予約 culture is strong in Japan. Popular restaurants, hair salons, and doctors all require reservations. Walk-ins (飛(と)び込(こ)み, tobikomi) are sometimes impossible. Online reservation systems (ネット予約) have modernized the process. Cancelling a reservation last-minute is considered very rude."},

    {type:"mc", q:"かしこまりました is equivalent to:", opts:["Certainly, understood (very polite)","Please wait","I do not understand","I am sorry"], ans:"Certainly, understood (very polite)",
     hint:"This is the highest level of acknowledgment, used by service staff to show utmost respect."},

    {type:"teach", trg:"満席(まんせき)", src:"fully booked / no vacancies / sold out (seats)", pos:"noun", gender:null,
     note:"まん (full) + せき (seats). Kanji: 満席.\n満室(まんしつ) = no vacant rooms (hotel).",
     example:"A: 申(もう)し訳(わけ)ございませんが、満席(まんせき)です。\nB: 次(つぎ)の時間(じかん)は空(あ)いていますか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am sorry, but we are fully booked.\nB: Is the next time slot available?\nA: How long did it take?\nB: About two hours.",
     funFact:"満席 specifically means all seats are taken. Related terms include 満室(まんしつ) (manshitsu, no vacant rooms), 満員(まんいん) (man'in, full capacity of people), and 満車(まんしゃ) (mansha, parking lot full). Japan's meticulous categorization extends to specifying exactly what kind of 'full' something is."},

    {type:"teach", trg:"お荷物(にもつ)をお預(あず)かりします", src:"let me take your luggage (humble service)", pos:"verb", gender:null,
     note:"お + 荷物(にもつ) + を + お + 預(あず)かり + します.\nUltra-polite hotel phrase for handling guest belongings.",
     example:"A: こちらのお荷物(にもつ)をお預(あず)かりいたします。\nB: お願(ねが)いします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Allow me to take your luggage.\nB: Please do.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"お預(あず)かりします uses the humble pattern for 預(あず)かる (to keep/hold). Hotel bellhops and cloakroom staff say this when handling guest items. The double お (on 荷物(にもつ) and 預(あず)かり) creates maximum politeness. Japanese hotels are famous for handling luggage with white-gloved care."},

    {type:"teach", trg:"ございます", src:"there is / to be (very polite)", pos:"verb", gender:null,
     note:"Ultra-polite form of あります. Used in service contexts.\nご用意(ようい)はございますか = is there anything you need?",
     example:"A: 何(なに)かご質問(しつもん)はございますか？\nB: いいえ、大丈夫(だいじょうぶ)です。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Do you have any questions?\nB: No, I am fine.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ございます is the keigo form of あります. It elevates the entire tone of speech to the highest formality. Department stores, hotels, and formal businesses use it constantly. The greeting おはようございます (good morning) is actually an honorific: おはよう + ございます."},

    {type:"fb", s:"お席(せき)まで{1}いたします。\n(Let me show you to your seat.)", a:"ご案内(あんない)", opts:["ご案内(あんない)","案内(あんない)","ご紹介(しょうかい)","お知(し)らせ"], sSrc:"Let me show you to your seat.",
     hint:"The honorific prefix ご + the noun for 'guiding/showing' in the humble service pattern."},

    {type:"teach", trg:"おもてなし", src:"hospitality / warm reception", pos:"noun", gender:null,
     note:"From もてなす (to entertain/host). The お prefix adds respect.\nA core Japanese cultural value.",
     example:"A: 日本(にほん)のおもてなしはすばらしいです。\nB: ありがとうございます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Japanese hospitality is wonderful.\nB: Thank you.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"おもてなし became world-famous when it was used in Tokyo's 2020 Olympics bid presentation. The word encapsulates Japan's philosophy of selfless, anticipatory service. Hosts aim to anticipate guests' needs before they are expressed. This concept shapes everything from hotel service to home visits."},

    {type:"teach", trg:"恐(おそ)れ入(い)りますが", src:"I am sorry to trouble you, but ~ (polite preface)", pos:"intj", gender:null,
     note:"Softer than 申(もう)し訳(わけ)ございませんが. Used before requests or questions.\n恐(おそ)れ入(い)る = to be sorry/grateful.",
     example:"A: 恐(おそ)れ入(い)りますが、お名前(なまえ)を教(おし)えていただけますか？\nB: 山田(やまだ)です。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I am sorry to trouble you, but may I ask your name?\nB: It is Yamada.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"恐れ入りますが is a versatile preface used before any potentially imposing request. It literally means 'I fear/am awed.' Service staff use it before asking for information, and customers use it before making special requests. It demonstrates awareness that you are creating a small burden for the other person."},

    {type:"mc", q:"申(もう)し訳(わけ)ございませんが、満席(まんせき)でございます means:", opts:["We have many seats available","I am terribly sorry, but we are fully booked","Please have a seat","Your reservation is confirmed"], ans:"I am terribly sorry, but we are fully booked",
     hint:"The ultra-polite preface softens the delivery of disappointing news about no available seats."},

    {type:"tip", title:"Essential Service Keigo Phrases",
     text:"Staff to customer:\nいらっしゃいませ = welcome\nかしこまりました = certainly (understood)\n少々(しょうしょう)お待(ま)ちください = please wait a moment\nご案内(あんない)いたします = let me show you\n申(もう)し訳(わけ)ございませんが = I am terribly sorry, but\n恐(おそ)れ入(い)りますが = excuse me (before a request)\nございます = there is (ultra-polite あります)\n\nCustomer phrases:\n予約(よやく)したものですが = I have a reservation\nお願(ねが)いします = please\nありがとうございます = thank you",
     deepDive:{title:"Why Japanese Service Is Different",
      text:"Japanese service keigo creates a unique customer experience:\n\n1. No tipping: service excellence is the baseline, not extra.\n2. Everyone uses keigo: convenience store clerks to luxury hotels.\n3. Phrases are memorized and standardized across industries.\n4. Voice quality changes: pitch rises, pace slows.\n5. Body language accompanies words: bowing, gesturing with open palms.\n\nForeign visitors often note that Japanese service feels almost ceremonial. This is intentional: おもてなし treats every customer interaction as a small ceremony of respect."}},

    {type:"match", pairs:[{trg:"かしこまりました",src:"certainly (understood)"},{trg:"ご案内(あんない)いたします",src:"let me guide you"},{trg:"申(もう)し訳(わけ)ございませんが",src:"terribly sorry, but"},{trg:"予約(よやく)",src:"reservation"},{trg:"お荷物(にもつ)をお預(あず)かりします",src:"let me take your luggage (humble service)"}]},

    {type:"fb", s:"何(なに)かご質問(しつもん)は{1}か？\n(Do you have any questions?)", a:"ございます", opts:["ございます","あります","います","できます"], sSrc:"Do you have any questions?",
     hint:"The ultra-polite form of あります used in formal service contexts."},

    {type:"match", pairs:[{trg:"満席(まんせき)",src:"fully booked"},{trg:"おもてなし",src:"hospitality"},{trg:"ございます",src:"there is (very polite)"},{trg:"恐(おそ)れ入(い)りますが",src:"sorry to trouble you, but"}]},

    {type:"mc", q:"おもてなし is best described as:", opts:["A business title","A type of food","Japanese hospitality and selfless service","A greeting phrase"], ans:"Japanese hospitality and selfless service",
     hint:"This cultural concept became world-famous during Japan's Olympic bid and represents anticipatory, heartfelt s...."}]
};
export default BATCH2_L_1;
