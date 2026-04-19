// Unit 22 Batch 5 Lesson 2: 敬語(けいご)のやりもらい (Polite Favor Exchange)
const BATCH5_L_2 = {
  id:"jav2_u22l_b5_2", title:"敬語(けいご)のやりもらい", icon:"🎗️", xp:15, board:true,
  steps:[
    {type:"intro", title:"敬語(けいご)のやりもらい",
     desc:"Elevate your favor exchange to polite and humble levels. てさしあげる (humble give-action), ていただく (humble receive-action), and てくださる (honorific give-to-me action). These keigo favor forms are essential for business Japanese and formal requests.",
     goals:["Use てさしあげる, ていただく, てくださる correctly","Make formal requests with ていただけますか","Navigate polite favor exchange in professional contexts"]},

    {type:"teach", trg:"〜てさしあげる", src:"to do ~ for someone (humble)", pos:"verb", gender:null,
     note:"Humble form of てあげる. Used cautiously; can still sound patronizing.\nお荷物(にもつ)をお持(も)ちさしあげる = carry luggage for someone (humble).",
     example:"A: お客様(きゃくさま)のお荷物(にもつ)をお持(も)ちさしあげてください。\nB: かしこまりました。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please carry the customer's luggage for them.\nB: Certainly.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"てさしあげる is theoretically humble, using さしあげる (humble 'give'). However, it still implies you are doing a favor, which can sound condescending even in polite form. In practice, many Japanese speakers avoid てさしあげる with clients and superiors, preferring indirect expressions like お持(も)ちいたします (I will carry it) instead."},

    {type:"teach", trg:"〜ていただく", src:"to have someone do ~ (humble, grateful)", pos:"verb", gender:null,
     note:"Humble form of てもらう. Extremely polite way to express receiving a favor.\nお教(おし)えていただく = humbly have someone teach me.",
     example:"A: 先生(せんせい)に丁寧(ていねい)にお教(おし)えていただきました。\nB: いい先生(せんせい)に恵(めぐ)まれましたね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: The teacher kindly taught me (and I humbly received that teaching).\nB: You are blessed with a good teacher.\nA: How long did it take?\nB: About two hours.",
     funFact:"ていただく is one of the most important keigo patterns. It frames the speaker as a grateful recipient of someone's action. ていただけますか (could I receive the favor of...?) is the gold standard for formal requests. Business emails consistently use it: ご確認(かくにん)いただけますでしょうか (could you kindly confirm?)."},

    {type:"teach", trg:"〜てくださる", src:"to do ~ for me (honorific, respectful)", pos:"verb", gender:null,
     note:"Honorific form of てくれる. Elevates the giver's action.\n先生(せんせい)がお教(おし)えてくださった = the teacher kindly taught me (honorific).",
     example:"A: 社長(しゃちょう)が直(じき)々(じき)にご挨拶(あいさつ)してくださいました。\nB: 光栄(こうえい)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: The company president personally greeted us.\nB: What an honor.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"てくださる uses くださる (honorific 'give to me'). It elevates the giver while expressing gratitude. The difference between てくれた and てくださった is register: a friend てくれた, a teacher or boss てくださった. てください (please do) comes from this same verb, making every polite request technically a favor-exchange expression."},

    {type:"teach", trg:"恵(めぐ)まれる", src:"to be blessed with / to be fortunate to have", pos:"verb", gender:null,
     note:"Passive of 恵(めぐ)む (to bless/bestow). 自然(しぜん)に恵(めぐ)まれた = blessed with nature.\nKanji: 恵(めぐ)まれる.",
     example:"A: 日本(にほん)は自然(しぜん)に恵(めぐ)まれた国(くに)です。\nB: 四季(しき)も豊(ゆた)かですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Japan is a country blessed with nature.\nB: The four seasons are rich indeed.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"恵(めぐ)まれる uses 恵 (blessing/grace), which also appears in 知恵(ちえ) (wisdom). Being 恵(めぐ)まれた implies receiving blessings beyond personal effort: good parents, natural talent, a beautiful homeland. The passive form is significant: you are GIVEN these blessings, not earning them. This aligns with Japanese humility about personal advantages."},

    {type:"mc", q:"ていただく is:", opts:["The humble form of てもらう (receiving a favor)","The casual form of てあげる","The imperative of てくれる","The past tense of てもらう"], ans:"The humble form of てもらう (receiving a favor)",
     hint:"This h... pattern frames the speaker as gratefully r... someone's kind action."},

    {type:"teach", trg:"〜ていただけますか", src:"could you kindly do ~? (very polite request)", pos:"verb", gender:null,
     note:"Potential form of ていただく + question marker.\nThe most polite standard request form in Japanese.",
     example:"A: この書類(しょるい)にサインしていただけますか？\nB: はい、もちろんです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Could you kindly sign this document?\nB: Yes, of course.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"ていただけますか is the polished request form for professional settings. Even more polite: ていただけませんでしょうか (could you not possibly...?). The escalation of politeness in requests shows how Japanese builds social distance through grammar. Each additional layer (もらう → いただく → いただける → いただけません → いただけませんでしょうか) adds more deference."},

    {type:"teach", trg:"かしこまりました", src:"certainly / understood (formal acknowledgment)", pos:"verb", gender:null,
     note:"Very formal version of わかりました. Used in service and business.\nLiterally: I have humbly understood.",
     example:"A: 二名様(にめいさま)ですね。お窓際(まどぎわ)の席(せき)をご用意(ようい)いたします。\nB: ありがとうございます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Two guests, correct? I will prepare a window seat.\nB: Thank you.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"かしこまりました is the service industry's standard 'understood.' Every hotel, restaurant, and department store employee uses it. The verb かしこまる means 'to be reverently humble.' It is stronger than 承知(しょうち)しました (acknowledged, business) and much more formal than わかりました (understood, standard). Hearing かしこまりました immediately signals premium service."},

    {type:"teach", trg:"お礼(れい)", src:"thanks / gratitude / expression of thanks", pos:"noun", gender:null,
     note:"Kanji: お礼(れい). お礼(れい)を言(い)う = to express thanks.\nお礼(れい)の言葉(ことば) = words of thanks.",
     example:"A: 助(たす)けていただいたお礼(れい)がしたいのですが。\nB: お気(き)になさらないでください。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I would like to express my thanks for your help.\nB: Please do not worry about it.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"お礼 is a formal expression of gratitude. Japanese culture takes お礼(れい) seriously: receiving help or gifts creates a debt of gratitude (恩(おん)) that should be repaid. お礼(れい)をする (to give thanks/return the favor) is a social obligation. This is why Japanese people sometimes resist accepting favors: they know it creates an お礼(れい) expectation."},

    {type:"tip", title:"Keigo Favor Forms: Complete System",
     text:"Plain → Polite → Humble/Honorific\n\nDoing for others:\nてあげる → てさしあげる\nWarning: Can sound condescending. Use with care.\n\nReceiving favors:\nてもらう → ていただく\nMost useful keigo pattern. Use for requests.\n\nOther doing for me:\nてくれる → てくださる\nExpresses gratitude with honorific respect.\n\nRequest escalation:\nてくれる？ (casual)\nてくれますか？ (polite)\nてもらえますか？ (polite, asking ability)\nていただけますか？ (formal, humble)\nていただけませんでしょうか？ (maximum politeness)"},

    {type:"teach", trg:"光栄(こうえい)", src:"honor / privilege", pos:"noun", gender:null,
     note:"Kanji: 光栄(こうえい). 光栄(こうえい)です = I am honored.\n光栄(こうえい)に思(おも)います = I consider it an honor.",
     example:"A: お目(め)にかかれて光栄(こうえい)です。\nB: こちらこそ。どうぞよろしくお願(ねが)いします。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I am honored to meet you.\nB: Likewise. Pleased to meet you.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"光栄 combines 光 (light) and 栄 (prosperity/glory). Being honored 'shines light' on you. 光栄(こうえい)です is the standard phrase when meeting important people, receiving awards, or being given opportunities. In acceptance speeches, Japanese recipients almost always begin with 光栄(こうえい)に思(おも)います (I consider it an honor)."},

    {type:"teach", trg:"恩(おん)", src:"debt of gratitude / favor owed / grace", pos:"noun", gender:null,
     note:"Kanji: 恩(おん). 恩返(おんがえ)し = repaying a debt of gratitude.\n恩知(おんし)らず = ungrateful person.",
     example:"A: 先生(せんせい)の恩(おん)は忘(わす)れません。\nB: 立派(りっぱ)な大人(おとな)になることが一番(いちばん)の恩返(おんがえ)しですよ。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I will never forget my teacher's kindness.\nB: Becoming a fine adult is the best way to repay that debt.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"恩 is a profound concept in Japanese ethics. It describes a moral debt created when someone does something for you. 恩(おん)を感(かん)じる (to feel on) means recognizing the debt. 恩返(おんがえ)し (repaying on) is a moral duty. The tale of the tsuru no ongaeshi (crane's repayment) is one of Japan's most beloved folk stories. 恩(おん) drives much of Japanese social reciprocity."},

    {type:"fb", s:"先生(せんせい)に丁寧(ていねい)にお教(おし)えて{1}ました。\n(The teacher kindly taught me. [humble])", a:"いただき", opts:["いただき","もらい","くれ","あげ"], sSrc:"The teacher kindly taught me (and I humbly received that).",
     hint:"The humble form of the favor-receiving verb, in its masu-stem form."},

    {type:"mc", q:"かしこまりました is the formal version of:", opts:["わかりました (understood)","すみません (sorry)","ありがとう (thank you)","おねがいします (please)"], ans:"わかりました (understood)",
     hint:"This very formal acknowledgment is standard in service industries and premium business."},

    {type:"match", pairs:[{trg:"てさしあげる",src:"do for someone (humble)"},{trg:"ていただく",src:"receive favor (humble)"},{trg:"てくださる",src:"do for me (honorific)"},{trg:"ていただけますか",src:"could you kindly...?"}]},

    {type:"fb", s:"この書類(しょるい)にサインして{1}ますか？\n(Could you kindly sign this document?)", a:"いただけ", opts:["いただけ","もらえ","くれ","あげ"], sSrc:"Could you kindly sign this document?",
     hint:"The potential form of the humble favor-receiving verb, used for formal requests."},

    {type:"mc", q:"恩(おん) describes:", opts:["A moral debt of gratitude that should be repaid","A religious ritual","A type of music","A financial debt"], ans:"A moral debt of gratitude that should be repaid",
     hint:"This deep concept drives Japanese social reciprocity and sense of obligation."}
  ,{type:"match",pairs:[{trg:"恵(めぐ)まれる",src:"to be blessed with / to be fortunate to have"},{trg:"かしこまりました",src:"certainly / understood (formal acknowledgment)"},{trg:"お礼(れい)",src:"thanks / gratitude / expression of thanks"},{trg:"光栄(こうえい)",src:"honor / privilege"},{trg:"恩(おん)",src:"debt of gratitude / favor owed / grace"}]},
  {type:"fb", s:"自然(しぜん)豊(ゆた)かな環境(かんきょう)に{1}て育(そだ)ちました。", a:["恵(めぐ)まれる"], opts:["恵(めぐ)まれる","〜てさしあげる","〜ていただく","〜てくださる"], hint:"The passive verb for being fortunate enough to have or receive something wonderful.", sSrc:"I grew up {1} with a nature-rich environment."}
]
};
export default BATCH5_L_2;
