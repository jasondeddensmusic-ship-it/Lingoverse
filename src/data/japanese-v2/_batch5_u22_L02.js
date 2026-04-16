// Unit 22 Batch 5 Lesson 2: けいごのやりもらい (Polite Favor Exchange)
const BATCH5_L_2 = {
  id:"jav2_u22l_b5_2", title:"けいごのやりもらい", icon:"🎗️", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいごのやりもらい",
     desc:"Elevate your favor exchange to polite and humble levels. てさしあげる (humble give-action), ていただく (humble receive-action), and てくださる (honorific give-to-me action). These keigo favor forms are essential for business Japanese and formal requests.",
     goals:["Use てさしあげる, ていただく, てくださる correctly","Make formal requests with ていただけますか","Navigate polite favor exchange in professional contexts"]},

    {type:"teach", trg:"〜てさしあげる", src:"to do ~ for someone (humble)", pos:"verb", gender:null,
     note:"Humble form of てあげる. Used cautiously; can still sound patronizing.\nにもつをもってさしあげる = carry luggage for someone (humble).",
     example:"A: おきゃくさまのおにもつをもってさしあげてください。\nB: かしこまりました。",
     exampleSrc:"A: Please carry the customer's luggage for them.\nB: Certainly.",
     funFact:"てさしあげる is theoretically humble, using さしあげる (humble 'give'). However, it still implies you are doing a favor, which can sound condescending even in polite form. In practice, many Japanese speakers avoid てさしあげる with clients and superiors, preferring indirect expressions like おもちいたします (I will carry it) instead."},

    {type:"teach", trg:"〜ていただく", src:"to have someone do ~ (humble, grateful)", pos:"verb", gender:null,
     note:"Humble form of てもらう. Extremely polite way to express receiving a favor.\nおしえていただく = humbly have someone teach me.",
     example:"A: せんせいにていねいにおしえていただきました。\nB: いいせんせいにめぐまれましたね。",
     exampleSrc:"A: The teacher kindly taught me (and I humbly received that teaching).\nB: You are blessed with a good teacher.",
     funFact:"ていただく is one of the most important keigo patterns. It frames the speaker as a grateful recipient of someone's action. ていただけますか (could I receive the favor of...?) is the gold standard for formal requests. Business emails consistently use it: ごかくにんいただけますでしょうか (could you kindly confirm?)."},

    {type:"teach", trg:"〜てくださる", src:"to do ~ for me (honorific, respectful)", pos:"verb", gender:null,
     note:"Honorific form of てくれる. Elevates the giver's action.\nせんせいがおしえてくださった = the teacher kindly taught me (honorific).",
     example:"A: しゃちょうがじきじきにあいさつしてくださいました。\nB: こうえいですね。",
     exampleSrc:"A: The company president personally greeted us.\nB: What an honor.",
     funFact:"てくださる uses くださる (honorific 'give to me'). It elevates the giver while expressing gratitude. The difference between てくれた and てくださった is register: a friend てくれた, a teacher or boss てくださった. てください (please do) comes from this same verb, making every polite request technically a favor-exchange expression."},

    {type:"teach", trg:"めぐまれる", src:"to be blessed with / to be fortunate to have", pos:"verb", gender:null,
     note:"Passive of めぐむ (to bless/bestow). しぜんにめぐまれた = blessed with nature.\nKanji: 恵まれる.",
     example:"A: にほんはしぜんにめぐまれたくにです。\nB: しきもゆたかですね。",
     exampleSrc:"A: Japan is a country blessed with nature.\nB: The four seasons are rich indeed.",
     funFact:"恵まれる uses 恵 (blessing/grace), which also appears in 知恵 (wisdom). Being めぐまれた implies receiving blessings beyond personal effort: good parents, natural talent, a beautiful homeland. The passive form is significant: you are GIVEN these blessings, not earning them. This aligns with Japanese humility about personal advantages."},

    {type:"mc", q:"ていただく is:", opts:["The humble form of てもらう (receiving a favor)","The casual form of てあげる","The imperative of てくれる","The past tense of てもらう"], ans:"The humble form of てもらう (receiving a favor)",
     hint:"This h... pattern frames the speaker as gratefully r... someone's kind action."},

    {type:"teach", trg:"〜ていただけますか", src:"could you kindly do ~? (very polite request)", pos:"verb", gender:null,
     note:"Potential form of ていただく + question marker.\nThe most polite standard request form in Japanese.",
     example:"A: このしょるいにサインしていただけますか？\nB: はい、もちろんです。",
     exampleSrc:"A: Could you kindly sign this document?\nB: Yes, of course.",
     funFact:"ていただけますか is the polished request form for professional settings. Even more polite: ていただけませんでしょうか (could you not possibly...?). The escalation of politeness in requests shows how Japanese builds social distance through grammar. Each additional layer (もらう → いただく → いただける → いただけません → いただけませんでしょうか) adds more deference."},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (formal acknowledgment)", pos:"verb", gender:null,
     note:"Very formal version of わかりました. Used in service and business.\nLiterally: I have humbly understood.",
     example:"A: にめいさまですね。おまどぎわのせきをごようい いたします。\nB: ありがとうございます。",
     exampleSrc:"A: Two guests, correct? I will prepare a window seat.\nB: Thank you.",
     funFact:"かしこまりました is the service industry's standard 'understood.' Every hotel, restaurant, and department store employee uses it. The verb かしこまる means 'to be reverently humble.' It is stronger than しょうちしました (acknowledged, business) and much more formal than わかりました (understood, standard). Hearing かしこまりました immediately signals premium service."},

    {type:"teach", trg:"おれい", src:"thanks / gratitude / expression of thanks", pos:"noun", gender:null,
     note:"Kanji: お礼. おれいをいう = to express thanks.\nおれいのことば = words of thanks.",
     example:"A: たすけていただいたおれいがしたいのですが。\nB: おきになさらないでください。",
     exampleSrc:"A: I would like to express my thanks for your help.\nB: Please do not worry about it.",
     funFact:"お礼 is a formal expression of gratitude. Japanese culture takes おれい seriously: receiving help or gifts creates a debt of gratitude (恩 on) that should be repaid. おれいをする (to give thanks/return the favor) is a social obligation. This is why Japanese people sometimes resist accepting favors: they know it creates an おれい expectation."},

    {type:"tip", title:"Keigo Favor Forms: Complete System",
     text:"Plain → Polite → Humble/Honorific\n\nDoing for others:\nてあげる → てさしあげる\nWarning: Can sound condescending. Use with care.\n\nReceiving favors:\nてもらう → ていただく\nMost useful keigo pattern. Use for requests.\n\nOther doing for me:\nてくれる → てくださる\nExpresses gratitude with honorific respect.\n\nRequest escalation:\nてくれる？ (casual)\nてくれますか？ (polite)\nてもらえますか？ (polite, asking ability)\nていただけますか？ (formal, humble)\nていただけませんでしょうか？ (maximum politeness)"},

    {type:"teach", trg:"こうえい", src:"honor / privilege", pos:"noun", gender:null,
     note:"Kanji: 光栄. こうえいです = I am honored.\nこうえいにおもいます = I consider it an honor.",
     example:"A: おめにかかれてこうえいです。\nB: こちらこそ。どうぞよろしくおねがいします。",
     exampleSrc:"A: I am honored to meet you.\nB: Likewise. Pleased to meet you.",
     funFact:"光栄 combines 光 (light) and 栄 (prosperity/glory). Being honored 'shines light' on you. こうえいです is the standard phrase when meeting important people, receiving awards, or being given opportunities. In acceptance speeches, Japanese recipients almost always begin with こうえいにおもいます (I consider it an honor)."},

    {type:"teach", trg:"おん", src:"debt of gratitude / favor owed / grace", pos:"noun", gender:null,
     note:"Kanji: 恩. おんがえし = repaying a debt of gratitude.\nおんしらず = ungrateful person.",
     example:"A: せんせいのおんはわすれません。\nB: りっぱなおとなになることがいちばんのおんがえしですよ。",
     exampleSrc:"A: I will never forget my teacher's kindness.\nB: Becoming a fine adult is the best way to repay that debt.",
     funFact:"恩 is a profound concept in Japanese ethics. It describes a moral debt created when someone does something for you. おんをかんじる (to feel on) means recognizing the debt. おんがえし (repaying on) is a moral duty. The tale of the tsuru no ongaeshi (crane's repayment) is one of Japan's most beloved folk stories. 恩 drives much of Japanese social reciprocity."},

    {type:"fb", s:"せんせいにていねいにおしえて{1}ました。\n(The teacher kindly taught me. [humble])", a:"いただき", opts:["いただき","もらい","くれ","あげ"], sSrc:"The teacher kindly taught me (and I humbly received that).",
     hint:"The humble form of the favor-receiving verb, in its masu-stem form."},

    {type:"mc", q:"かしこまりました is the formal version of:", opts:["わかりました (understood)","すみません (sorry)","ありがとう (thank you)","おねがいします (please)"], ans:"わかりました (understood)",
     hint:"This very formal acknowledgment is standard in service industries and premium business."},

    {type:"match", pairs:[{trg:"てさしあげる",src:"do for someone (humble)"},{trg:"ていただく",src:"receive favor (humble)"},{trg:"てくださる",src:"do for me (honorific)"},{trg:"ていただけますか",src:"could you kindly...?"}]},

    {type:"fb", s:"このしょるいにサインして{1}ますか？\n(Could you kindly sign this document?)", a:"いただけ", opts:["いただけ","もらえ","くれ","あげ"], sSrc:"Could you kindly sign this document?",
     hint:"The potential form of the humble favor-receiving verb, used for formal requests."},

    {type:"mc", q:"おん (恩) describes:", opts:["A moral debt of gratitude that should be repaid","A religious ritual","A type of music","A financial debt"], ans:"A moral debt of gratitude that should be repaid",
     hint:"This deep concept drives Japanese social reciprocity and sense of obligation."}
  ]
};
export default BATCH5_L_2;
