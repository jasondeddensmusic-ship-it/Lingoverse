// Unit 20 Batch 5 Lesson 1: 謙譲語(けんじょうご) (Humble Language)
const BATCH5_L_1 = {
  id:"jav2_u20l_b5_1", title:"謙譲語(けんじょうご)", icon:"🙇", xp:15, board:true,
  steps:[
    {type:"intro", title:"謙譲語(けんじょうご)",
     desc:"Humble language (kenjougo) is the mirror of honorific language. Instead of elevating others, you lower yourself. 'I humbly go' instead of 'I go.' 'I humbly receive' instead of 'I receive.' This system shows respect by making your own actions seem smaller. It is mandatory in business Japanese.",
     goals:["Use humble verbs: まいる, いただく, もうす","Understand the お + stem + する pattern","Know when to use humble language (for your own actions)"]},

    {type:"teach", trg:"参(まい)る", src:"to go / to come (humble)", pos:"verb", gender:null,
     note:"Humble replacement for 行(い)く and 来(く)る. Lowers the speaker.\n参(まい)ります = I will go/come (humble polite).",
     example:"A: 明日(あした)そちらに参(まい)ります。\nB: お待(ま)ちしております。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I will come to your place tomorrow.\nB: We will be waiting (humble).\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"参(まい)る is humble for both 行(い)く (go) and 来(く)る (come). While いらっしゃる elevates others' movement, 参(まい)る humbles your own. The expression 参(まい)りました (literally 'I have gone') colloquially means 'I give up' or 'I am defeated,' as if saying 'I have reached my limit.'"},

    {type:"teach", trg:"いただく", src:"to receive / to eat / to drink (humble)", pos:"verb", gender:null,
     note:"Humble replacement for もらう, 食(た)べる, and 飲(の)む.\nいただきます = I humbly receive (said before eating).",
     example:"A: お土産(みやげ)をいただきました。ありがとうございます。\nB: お口(くち)に合(あ)えばうれしいです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I received a souvenir. Thank you very much.\nB: I would be happy if it suits your taste.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"いただきます, said before every meal, is one of the most recognized Japanese phrases worldwide. It means 'I humbly receive' and expresses gratitude to everyone involved in the food: farmers, cooks, and even the ingredients themselves. This humble acknowledgment reflects the Japanese respect for food and labor."},

    {type:"teach", trg:"申(もう)す", src:"to say / to be called (humble)", pos:"verb", gender:null,
     note:"Humble replacement for 言(い)う (to say). 申(もう)します = I say (humble).\n私(わたくし)は田中(たなか)と申(もう)します = My name is Tanaka (humble).",
     example:"A: 私(わたくし)は田中(たなか)と申(もう)します。\nB: 田中(たなか)さんですね。よろしくお願(ねが)いします。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: My name is Tanaka (humble introduction).\nB: Tanaka-san, is it. Pleased to meet you.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"申(もう)す is the humble counterpart of おっしゃる (honorific 'say'). The phrase と申(もう)します (to moushimasu) is the formal self-introduction formula. On the phone, もしもし comes from 申(もう)す申(もう)す (mousu mousu), originally meaning 'I am speaking, I am speaking.' This everyday greeting has humble origins."},

    {type:"teach", trg:"拝見(はいけん)する", src:"to look / to see (humble)", pos:"verb", gender:null,
     note:"Humble replacement for 見(み)る (to see/look). Kanji: 拝見(はいけん)する.\n資料(しりょう)を拝見(はいけん)する = to look at materials (humble).",
     example:"A: 資料(しりょう)を拝見(はいけん)してもよろしいですか？\nB: どうぞご覧(らん)ください。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: May I look at the materials? (humble)\nB: Please go ahead and look. (honorific)\nA: How was it?\nB: It was very good.",
     funFact:"拝見(はいけん) uses the kanji 拝(はい) (worship/bow) and 見(けん) (see). You are literally 'bowing to see,' showing that even looking at something is done with humility. This word pairs with ご覧(らん)になる (honorific 'see') showing the perfect symmetry of keigo: you 拝見(はいけん)する, they ご覧(らん)になる."},

    {type:"mc", q:"申(もう)す is the humble equivalent of:", opts:["言(い)う (to say)","見(み)る (to see)","行(い)く (to go)","食(た)べる (to eat)"], ans:"言(い)う (to say)",
     hint:"This humble verb replaces the everyday verb for speaking or saying."},

    {type:"teach", trg:"お目(め)にかかる", src:"to meet (humble)", pos:"verb", gender:null,
     note:"Humble replacement for 会(あ)う (to meet). Extremely polite.\nお目(め)にかかれて光栄(こうえい)です = it is an honor to meet you.",
     example:"A: 初(はじ)めてお目(め)にかかります。\nB: こちらこそ、お目(め)にかかれてうれしいです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I am meeting you for the first time (humble).\nB: Likewise, I am glad to meet you.\nA: When was it?\nB: It was last summer.",
     funFact:"お目(め)にかかる literally means 'to come before your eyes,' treating the other person's gaze as something you are granted access to. This extreme humility is reserved for the most formal introductions: meeting important clients, company executives, or at formal ceremonies. It is the humble counterpart of おあいになる."},

    {type:"teach", trg:"〜お + stem + する", src:"humble verb pattern", pos:"part", gender:null,
     note:"Productive humble pattern: お + verb masu-stem + する.\nお待(ま)ちする = to wait (humble). お伝(つた)えする = to convey (humble).",
     example:"A: お荷物(にもつ)をお持(も)ちしましょうか？\nB: すみません、お願(ねが)いします。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Shall I carry your luggage? (humble)\nB: Thank you, please do.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"The お + stem + する pattern is the humble mirror of お + stem + になる (honorific). Where になる elevates the other person, する humbles yourself. お持(も)ちする (I will humbly carry), お伝(つた)えする (I will humbly convey), お待(ま)ちする (I will humbly wait). Master this pattern and you can make almost any verb humble."},

    {type:"teach", trg:"伺(うかが)う", src:"to visit / to ask / to hear (humble)", pos:"verb", gender:null,
     note:"Humble replacement for 聞(き)く (ask), 訪(たず)ねる (visit), and 聞(き)く (hear).\nKanji: 伺(うかが)う. Multiple meanings.",
     example:"A: 明日(あした)十時(じゅうじ)に伺(うかが)ってもよろしいですか？\nB: はい、お待(ま)ちしております。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: May I visit at ten o'clock tomorrow? (humble)\nB: Yes, we will be waiting.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"伺(うかが)う is a triple-duty humble verb: to visit (someone important), to ask (humbly), and to hear (humbly). On the phone, businesses say 伺(うかが)いますが (I would like to ask, humble) before questions. At restaurants taking reservations: 何名様(なんめいさま)で伺(うかが)いましょうか (may I ask how many guests?)."},

    {type:"tip", title:"Sonkeigo vs. Kenjougo: Mirror System",
     text:"Honorific (for others)      Humble (for yourself)\nいらっしゃる (be/go/come)    参(まい)る (go/come)\n召(め)し上(あ)がる (eat/drink) いただく (eat/drink)\nおっしゃる (say)             申(もう)す (say)\nご覧(らん)になる (see)        拝見(はいけん)する (see)\nなさる (do)                  いたす (do)\nくださる (give me)            差(さ)し上(あ)げる (give you)\n\nProductive patterns:\nお + stem + になる (honorific)\nお + stem + する (humble)\n\nRule: Honorific for OTHER people's actions.\nHumble for YOUR OWN actions.",
     deepDive:{title:"Common Keigo Mistakes",
      text:"Mixing up honorific and humble is a serious error:\n\nWRONG: 私(わたし)がいらっしゃいます (using honorific for yourself)\nRIGHT: 私(わたし)が参(まい)ります (using humble for yourself)\n\nWRONG: 社長(しゃちょう)が申(もう)しました (using humble for your boss)\nRIGHT: 社長(しゃちょう)がおっしゃいました (using honorific for boss)\n\nThe rule is simple but easy to confuse under pressure:\nYour actions = humble (kenjougo)\nOther's actions = honorific (sonkeigo)\n\nWhen in doubt, remember: humble yourself, elevate others. Japanese keigo is fundamentally about showing respect through this vertical relationship."}},

    {type:"teach", trg:"お口(くち)に合(あ)う", src:"to suit one's taste (polite set phrase)", pos:"verb", gender:null,
     note:"Polite way to hope food/drink is acceptable.\nお口(くち) (your mouth, honorific) + に + 合(あ)う (to suit).",
     example:"A: 手作(てづく)りのお菓子(かし)をどうぞ。お口(くち)に合(あ)えばいいのですが。\nB: とてもおいしいです。ありがとうございます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please have some homemade sweets. I hope they suit your taste.\nB: They are very delicious. Thank you.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"お口(くち)に合(あ)う is a gracious phrase used when offering food. Rather than saying 'This is delicious, eat it!' Japanese custom humbly hopes it merely 'suits your mouth.' This indirect, self-deprecating approach is typical of Japanese hospitality. Even professional chefs may say お口(くち)に合(あ)えば幸(さいわ)いです (I would be happy if it suits your taste)."},

    {type:"teach", trg:"いたす", src:"to do (humble)", pos:"verb", gender:null,
     note:"Humble replacement for する. Extremely polite.\n私(わたくし)がいたします = I will do it (humble).",
     example:"A: ご予約(よやく)の確認(かくにん)をいたします。\nB: お願(ねが)いします。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I will confirm the reservation (humble).\nB: Please do.\nA: How long did it take?\nB: About two hours.",
     funFact:"いたす is heard constantly in Japanese service. Hotels say チェックインをいたします, airlines say ご案内(あんない)をいたします. The phrase どういたしまして (you are welcome) contains いたす in its core: 'what have I done (that deserves thanks)?' This everyday expression reveals humble language embedded in basic courtesy."},

    {type:"fb", s:"私(わたくし)は田中(たなか)と{1}します。\n(My name is Tanaka. [humble])", a:"申(もう)", opts:["申(もう)","おっしゃい","言(い)い","言(い)わ"], sSrc:"My name is Tanaka (humble self-introduction).",
     hint:"The humble verb for 'to say' in its masu-stem form."},

    {type:"mc", q:"お荷物(にもつ)をお持(も)ちしましょうか uses:", opts:["Humble language (I will carry for you)","Honorific language (you will carry)","Casual language","No keigo"], ans:"Humble language (I will carry for you)",
     hint:"The お + stem + する pattern humbles the speaker's own action of carrying."},

    {type:"match", pairs:[{trg:"参(まい)る",src:"to go/come (humble)"},{trg:"いただく",src:"to receive/eat (humble)"},{trg:"拝見(はいけん)する",src:"to look/see (humble)"},{trg:"伺(うかが)う",src:"to visit/ask (humble)"}]},

    {type:"fb", s:"資料(しりょう)を{1}してもよろしいですか？\n(May I look at the materials? [humble])", a:"拝見(はいけん)", opts:["拝見(はいけん)","ご覧(らん)","見物(けんぶつ)","見(み)せて"], sSrc:"May I look at the materials? (humble)",
     hint:"The humble する-verb for 'to see/look at,' combining 拝(はい) (worship) and 見(けん) (see)."},

    {type:"mc", q:"お目(め)にかかる is humble for:", opts:["会(あ)う (to meet)","見(み)る (to see)","買(か)う (to buy)","かかる (to cost)"], ans:"会(あ)う (to meet)",
     hint:"This phrase literally means 'to come before your eyes,' humbling oneself before the other person."}
  ]
};
export default BATCH5_L_1;
