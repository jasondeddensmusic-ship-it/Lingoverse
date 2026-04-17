// Unit 15 Expansion L5. Asking for Help & Polite Requests
// Polite direction requests, emergency phrases, helpful expressions.

const LESSON_5 = {id:"jav2_u15l5", title:"おねがいとたすけ", icon:"🙏", xp:15, board:true, steps:[
  {type:"intro", title:"おねがいとたすけ",
   desc:"Learn to ask for help politely when navigating Japan. From requesting directions to handling emergencies, these patterns combine practical vocabulary with the politeness levels that Japanese culture values.",
   goals:["Ask for directions politely with すみません and おねがいします","Use ていただけますか for very polite requests","Learn emergency and help vocabulary"]},

  {type:"teach", trg:"すみません", src:"excuse me / I am sorry", pos:"intj", gender:null,
   note:"The most useful word in Japan. Used to get attention, apologize, and thank.\nCovers excuse me, sorry, and even thank you.",
   example:"A: すみません、えきはどちらですか？\nB: あちらです。まっすぐいってください。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: Excuse me, which way is the station?\nB: That way. Please go straight.\nA: How was it?\nB: It was very good.",
   funFact:"すみません is arguably the single most useful word in Japanese. It opens conversations (excuse me), apologizes (I am sorry), and even expresses gratitude (thank you for the trouble). Japanese people say it dozens of times daily. It comes from すむ (to be clear/settled), implying 'things are not settled' (I owe you)."},

  {type:"teach", trg:"〜ていただけますか", src:"could you please ~ ? (very polite)", pos:"part", gender:null,
   note:"て-form + いただけますか = extremely polite request.\nMore polite than てください.",
   example:"A: すみません、みちをおしえていただけますか？\nB: はい、もちろん。どこにいきたいですか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: Excuse me, could you please tell me the way?\nB: Yes, of course. Where do you want to go?\nA: When was it?\nB: It was last summer.",
   funFact:"ていただけますか uses the humble form of もらう (to receive) in the potential. It literally asks 'could I receive the favor of you doing...' This level of politeness is appropriate with strangers. てもらえますか is slightly less formal but still polite. てください is the standard polite request."},

  {type:"teach", trg:"おしえる", src:"to teach / to tell / to show", pos:"verb", gender:null,
   note:"Group 2 verb. Covers teaching, telling, and showing the way.\nKanji: 教える.",
   example:"A: トイレのばしょをおしえていただけますか？\nB: このろうかのつきあたりです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Could you please tell me where the restroom is?\nB: It is at the end of this hallway.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"おしえる covers a wider range than English 'teach.' It includes teaching (school), telling (information), and showing (directions). みちをおしえる (show the way) is the standard phrase for asking directions. おしえてください is sufficient in most situations."},

  {type:"mc", q:"みちをおしえていただけますか is:", opts:["A casual request","A very polite request for directions","A command","A complaint"], ans:"A very polite request for directions",
   hint:"ていただけますか is the most p... r... form, suitable for strangers."},

  {type:"teach", trg:"ちず", src:"map", pos:"noun", gender:null,
   note:"Paper or digital map. ちずをみる = to look at a map.\nKanji: 地図.",
   example:"A: すみません、ちずをみせていただけますか？\nB: はい、どうぞ。いまここにいます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: Excuse me, could you please show me the map?\nB: Yes, here you go. You are here now.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"地図 combines 地 (ground/earth) and 図 (diagram). In the smartphone era, Googleマップ has become the go-to navigation tool in Japan. Station maps (えきのちず) posted inside stations show exits, shops, and transfer routes. The phrase 'ima koko' (you are here) appears on all maps."},

  {type:"teach", trg:"みせる", src:"to show", pos:"verb", gender:null,
   note:"Group 2 verb. みせてください = please show me.\nKanji: 見せる. Transitive form of みる.",
   example:"A: けいたいのちずをみせてください。\nB: はい、このアプリをつかいましょう。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Please show me the map on your phone.\nB: Yes, let us use this app.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"みせる (to show) is the transitive partner of みる (to see). The pair works like this: I show (みせる), you see (みる). Similarly: きかせる (make someone hear) and きく (hear). These transitive/intransitive pairs are fundamental to Japanese grammar."},

  {type:"teach", trg:"つれていく", src:"to take (a person) somewhere", pos:"verb", gender:null,
   note:"つれる (to lead) + いく (to go). Used for taking people places.\nKanji: 連れて行く.",
   example:"A: えきまでつれていっていただけますか？\nB: はい、いっしょにいきましょう。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Could you please take me to the station?\nB: Yes, let us go together.\nA: How long did it take?\nB: About two hours.",
   funFact:"つれていく is for taking people somewhere. For things, use もっていく (to take/bring). This distinction is important: ともだちをつれていく (take a friend), かばんをもっていく (take a bag). Using the wrong one sounds very unnatural."},

  {type:"fb", s:"みちを{1}ていただけますか？\n(Could you please tell me the way?)", a:"おしえ", opts:["おしえ","おしえる","おしえた","おしえない"], sSrc:"Could you please tell me the way?",
   hint:"Group 2 verb stem (drop る) + ていただけますか for a very polite request."},

  {type:"teach", trg:"こまる", src:"to be troubled / to be in difficulty", pos:"verb", gender:null,
   note:"Group 1 verb. こまっています = I am in trouble/difficulty.\nKanji: 困る.",
   example:"A: すみません、こまっています。たすけていただけますか？\nB: どうしましたか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: Excuse me, I am in difficulty. Could you help me?\nB: What happened?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"困る is the all-purpose 'I am in trouble' verb. こまった！ (Oh no! / I am stuck!) is a universal exclamation. こまりました (I am troubled) politely expresses that you need help. Japanese people respond very warmly to foreigners who clearly express their difficulty."},

  {type:"teach", trg:"たすける", src:"to help / to rescue", pos:"verb", gender:null,
   note:"Group 2 verb. たすけて！ = Help! たすけてください = Please help me.\nKanji: 助ける.",
   example:"A: たすけてください！みちがわかりません。\nB: おちついてください。いっしょにさがしましょう。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: Please help me! I do not know the way.\nB: Please calm down. Let us look together.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"たすけて (help!) is the emergency shout in Japanese. For everyday help, たすけていただけますか (could you help me) is polite. てつだう is 'to help with a task' (less urgent). In real emergencies, shout たすけて loudly. Japanese bystanders will respond."},

  {type:"mc", q:"こまっています means:", opts:["I am happy","I am in difficulty","I am in a hurry","I am tired"], ans:"I am in difficulty",
   hint:"こまる means to be troubled or stuck, and ています shows the ongoing state."},

  {type:"teach", trg:"けいさつ", src:"police", pos:"noun", gender:null,
   note:"けいさつしょ = police station. こうばん = police box (local mini-station).\nKanji: 警察.",
   example:"A: ちかくにこうばんはありますか？\nB: えきのまえにあります。けいさつかんがいつもいますよ。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: Is there a police box nearby?\nB: There is one in front of the station. An officer is always there.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"Japan's koban (交番, police box) system is unique. Small neighborhood police posts dot every area, staffed by officers who know the local area intimately. They are the best resource for directions, lost items, and any trouble. Asking a koban officer for directions is completely normal and welcome."},

  {type:"teach", trg:"だいじょうぶ", src:"okay / all right / fine", pos:"adj", gender:null,
   note:"な-adjective. だいじょうぶですか？ = Are you okay?\nKanji: 大丈夫.",
   example:"A: だいじょうぶですか？\nB: はい、だいじょうぶです。ありがとうございます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: Are you okay?\nB: Yes, I am fine. Thank you.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"大丈夫 is one of the most versatile words in modern Japanese. It means 'okay/fine,' can decline offers (だいじょうぶです = no thank you), and asks about well-being (だいじょうぶ？ = you okay?). The kanji 大丈夫 originally meant 'great strong man,' implying reliability."},

  {type:"fb", s:"{1}ていただけますか？\n(Could you help me?)", a:"たすけ", opts:["たすけ","たすける","たすけた","たすけない"], sSrc:"Could you help me?",
   hint:"Group 2 verb stem (drop る) before the polite request pattern."},

  {type:"match", pairs:[{trg:"すみません",src:"excuse me"},{trg:"おしえる",src:"to tell/teach"},{trg:"みせる",src:"to show"},{trg:"つれていく",src:"to take someone"}]},

  {type:"match", pairs:[{trg:"こまる",src:"be in difficulty"},{trg:"たすける",src:"to help"},{trg:"けいさつ",src:"police"},{trg:"だいじょうぶ",src:"okay/fine"}]},

  {type:"mc", q:"こうばん is:", opts:["A train station","A convenience store","A local police box","A hospital"], ans:"A local police box",
   hint:"Small neighborhood p... posts found throughout Japan, great for asking directions."},

  {type:"fb", s:"けいたいの{1}をみせてください。\n(Please show me the map on your phone.)", a:"ちず", opts:["ちず","でんわ","しゃしん","メール"], sSrc:"Please show me the map on your phone.",
   hint:"The word for a diagram showing streets, landmarks, and locations."},

  {type:"tip", title:"Asking for Help in Japan",
   text:"Getting attention:\nすみません (excuse me)\n\nPolite request levels:\nてください (please do)\nていただけますか (could you please)\n\nKey phrases:\nみちをおしえてください (please tell me the way)\nちずをみせてください (please show me the map)\nこまっています (I am in difficulty)\nたすけてください (please help me)\n\nReassurance:\nだいじょうぶですか？ (Are you okay?)\nだいじょうぶです。 (I am fine.)",
   deepDive:{title:"Politeness levels for requests",
    text:"From most to least polite:\n\nていただけませんか (would you be so kind as to...)\nていただけますか (could you please...)\nてもらえますか (could you... for me)\nてくださいませんか (would you please...)\nてください (please do...)\nて (do it, casual)\n\nFor strangers on the street: ていただけますか is ideal.\nFor shop staff: てください is fine.\nFor friends: てくれる？ (can you do it?)\n\nAlways start with すみません before making a request to a stranger. It signals that you know you are asking for their time and attention."}},
]};
export default LESSON_5;
