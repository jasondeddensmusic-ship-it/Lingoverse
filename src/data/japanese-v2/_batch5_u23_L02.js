// Unit 23 Batch 5 Lesson 2: けいけんとへんか (Experiences, Decisions & Changes)
const BATCH5_L_2 = {
  id:"jav2_u23l_b5_2", title:"けいけんとへんか", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいけんとへんか",
     desc:"Deepen your nominalization skills with ことになる (it has been decided), ことにしている (I make it a rule), and ことはない (there is no need). These advanced こと-patterns express decisions, habits, and reassurance. They complete your toolkit for discussing experiences and life changes.",
     goals:["Use ことになる for decisions made by others","Use ことにしている for personal rules","Use ことはない for reassurance"]},

    {type:"teach", trg:"〜ことになる", src:"it has been decided that ~ / it turns out that ~", pos:"part", gender:null,
     note:"Dictionary form + ことになる. External decision or natural outcome.\nてんきんすることになった = it has been decided that I will transfer.",
     example:"A: らいげつおおさかにてんきんすることになりました。\nB: さびしくなりますね。でもおうえんしています。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: It has been decided that I will transfer to Osaka next month.\nB: I will miss you. But I am supporting you.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ことになる distances the speaker from the decision. Instead of 'I decided to transfer,' it says 'it became that I transfer,' implying an external force (company, fate, circumstances) made the decision. This face-saving construction is very Japanese: it avoids claiming personal agency for decisions that might cause others trouble."},

    {type:"teach", trg:"〜ことにしている", src:"I make it a rule to ~ / I always ~", pos:"part", gender:null,
     note:"Dictionary form + ことにしている. Personal policy or habitual decision.\nまいあさジョギングすることにしている = I make it a rule to jog every morning.",
     example:"A: まいにちにっきをかくことにしています。\nB: すごいですね。いつからですか？\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I make it a rule to write a diary every day.\nB: That is impressive. Since when?\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ことにしている expresses a personal rule established by deliberate decision. The ている shows it is ongoing. Compare with ことにした (decided, one-time) and ことにしている (have been maintaining, ongoing policy). Japanese people use this to describe disciplined habits: あさごはんをかならずたべることにしている (I make it a rule to always eat breakfast)."},

    {type:"teach", trg:"〜ことはない", src:"there is no need to ~ / you do not have to ~", pos:"part", gender:null,
     note:"Dictionary form + ことはない. Reassurance that something is unnecessary.\nしんぱいすることはない = there is no need to worry.",
     example:"A: しけんにおちたらどうしよう。\nB: しんぱいすることはないですよ。じゅうぶんべんきょうしましたから。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: What if I fail the exam?\nB: There is no need to worry. You studied enough.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"ことはない is a reassuring pattern. It tells someone their worry is unnecessary. あわてることはない (no need to panic), なくことはない (no need to cry), あやまることはない (no need to apologize). It is gentle and supportive, making it perfect for comforting friends or students. The double negative logic (no + need to) is common in Japanese reassurance."},

    {type:"teach", trg:"〜ということだ", src:"it means that ~ / I heard that ~ / that is to say", pos:"part", gender:null,
     note:"Multiple uses: hearsay (I heard that), clarification (it means that), restatement.\nUniversal connector for reporting and explaining.",
     example:"A: らいしゅうのかいぎはちゅうしだということです。\nB: いつにへんこうされましたか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I heard that next week's meeting is cancelled.\nB: When was it changed to?\nA: How long did it take?\nB: About two hours.",
     funFact:"ということだ is a Swiss Army knife pattern. As hearsay: 'I heard that...' As clarification: 'That means...' In writing: 'It is said that...' News uses it constantly for indirect reporting. Academic writing uses it for definitions. The versatility comes from こと (abstract thing) + いう (to say) + だ (copula), literally 'it is the thing that is said.'"},

    {type:"mc", q:"てんきんすることになった implies:", opts:["An external decision the speaker did not fully control","A personal voluntary choice","A wish that has not come true","A past experience"], ans:"An external decision the speaker did not fully control",
     hint:"ことになる distances the s... from the d..., implying it was not entirely their choice."},

    {type:"teach", trg:"てんきん", src:"job transfer / work relocation", pos:"noun", gender:null,
     note:"Kanji: 転勤. てんきんする = to be transferred for work.\nてんきんぞく = a family that moves frequently for work.",
     example:"A: つまのてんきんでとうきょうからふくおかにひっこしました。\nB: あたらしいせいかつはどうですか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I moved from Tokyo to Fukuoka due to my wife's job transfer.\nB: How is the new life?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"転勤 is a defining feature of Japanese corporate life. Companies transfer employees every 2-5 years, and refusing is extremely difficult. It creates 転勤族 (tenkin-zoku, transfer tribe) families who move repeatedly. Some families choose 単身赴任 (tanshin funin, solo posting) where only the employee moves. This practice is increasingly criticized as harmful to families."},

    {type:"teach", trg:"にっき", src:"diary / journal", pos:"noun", gender:null,
     note:"Kanji: 日記. にっきをつける/かく = to keep a diary.\nえにっき = picture diary (common school assignment).",
     example:"A: こどものころえにっきをかいていました。\nB: なつやすみのしゅくだいでしたね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I used to write picture diaries as a child.\nB: That was summer vacation homework.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"日記 is deeply embedded in Japanese culture. Literary diaries (日記文学, nikki bungaku) form a major genre: The Pillow Book (枕草子) and Tosa Diary (土佐日記) are classics. Schools require えにっき (picture diaries) during summer break. In modern Japan, ブログ (blogs) and SNS posts have become digital 日記 for many people."},

    {type:"teach", trg:"〜わけだ", src:"it means that ~ / so that is why ~ / no wonder", pos:"part", gender:null,
     note:"Connects a fact to its logical conclusion. わけ = reason/logic.\nだからおくれたわけだ = so that is why you were late.",
     example:"A: ゆうべぜんぜんねなかったんです。\nB: だからねむそうなわけですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I did not sleep at all last night.\nB: So that is why you look sleepy.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"わけだ expresses logical understanding: 'Ah, so THAT is the reason.' It connects cause and effect in the speaker's mind. わけがない (there is no reason/way) is the negative, meaning 'that is impossible.' できるわけがない (there is no way you can do it) is stronger than できない (you cannot). The word わけ (理由/道理) literally means 'reason/logic.'"},

    {type:"teach", trg:"〜はずだ", src:"it should be ~ / it is expected that ~", pos:"part", gender:null,
     note:"Plain form + はずだ. Expresses expectation based on logic or knowledge.\nもうついたはずだ = they should have arrived by now.",
     example:"A: メールをおくったのでもうとどいたはずです。\nB: かくにんしてみます。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I sent the email so it should have arrived.\nB: Let me check.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"はずだ expresses confident expectation based on evidence or logic. It is NOT used for hopes or wishes, only for logical conclusions. にほんはいまふゆのはずだ (it should be winter in Japan now) is based on knowledge of seasons. はずがない (there is no way it should be) expresses disbelief: そんなはずがない (that cannot be right)."},

    {type:"tip", title:"Advanced こと and Abstract Patterns",
     text:"Decisions & rules:\nことにする = I decide to (personal)\nことになる = it is decided (external)\nことにしている = I make it a rule (ongoing)\n\nReassurance:\nことはない = there is no need to\n\nLogical reasoning:\nわけだ = so that is why / no wonder\nはずだ = it should be / is expected\n\nReporting:\nということだ = I heard that / it means that\n\nThese patterns move you from describing actions to reasoning about them. Essential for B1+ discourse."},

    {type:"teach", trg:"いがい", src:"unexpected / surprising / contrary to expectations", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 意外. いがいに = unexpectedly.\nいがいなけっか = unexpected result.",
     example:"A: にほんごのしけんはいがいにかんたんでした。\nB: べんきょうしたかいがありましたね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: The Japanese exam was unexpectedly easy.\nB: Your studying paid off.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"意外 uses 意 (meaning/intention) and 外 (outside), literally 'outside expectations.' いがいに is used constantly in daily conversation: いがいにおいしい (surprisingly delicious), いがいにむずかしい (surprisingly difficult). It expresses the gap between expectation and reality, a concept Japanese finds endlessly interesting."},

    {type:"fb", s:"まいにちにっきをかく{1}しています。\n(I make it a rule to write a diary every day.)", a:"ことに", opts:["ことに","ように","ために","はずに"], sSrc:"I make it a rule to write a diary every day.",
     hint:"The pattern for establishing a personal rule or policy: dictionary form + こと + に + している."},

    {type:"mc", q:"しんぱいすることはない means:", opts:["There is no need to worry","I am worried","I will worry","Worrying is important"], ans:"There is no need to worry",
     hint:"ことはない reassures that the action (worrying) is unnecessary."},

    {type:"match", pairs:[{trg:"ことになる",src:"it has been decided"},{trg:"ことにしている",src:"I make it a rule"},{trg:"ことはない",src:"no need to"},{trg:"わけだ",src:"so that is why"}]},

    {type:"fb", s:"メールをおくったのでもうとどいた{1}です。\n(I sent the email so it should have arrived.)", a:"はず", opts:["はず","わけ","こと","もの"], sSrc:"I sent the email so it should have arrived.",
     hint:"The word expressing confident expectation based on logical reasoning."},

    {type:"mc", q:"ということだ can mean:", opts:["Both 'I heard that' and 'it means that'","Only 'I heard that'","Only 'it means that'","Neither"], ans:"Both 'I heard that' and 'it means that'",
     hint:"This versatile pattern serves as both hearsay reporting and logical clarification."}
  ]
};
export default BATCH5_L_2;
