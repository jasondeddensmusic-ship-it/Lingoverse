// Unit 22 Expansion — Lesson 3: フォーマルなやりもらい (Formal Giving & Receiving)
const LESSON_3 = {
  id:"jav2_u22l3", title:"フォーマルなやりもらい", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"フォーマルなやりもらい",
     desc:"Master the polite and humble forms of giving and receiving used in business and formal contexts. Learn さしあげる (humble give), いただく (humble receive), and くださる (honorific give). These keigo forms are essential for professional Japanese communication.",
     goals:["Use さしあげる for humble giving to superiors","Use いただく for humble receiving from superiors","Apply formal giving/receiving in business situations"]},

    {type:"teach", trg:"さしあげる", src:"to give (humble)", pos:"verb", gender:null,
     note:"Humble form of あげる. Used when giving to superiors or customers.\nGroup 2 verb. Person に + thing を + さしあげる.",
     example:"A: しゃちょうにほうこくしょをさしあげました。\nB: よかったですね。",
     exampleSrc:"A: I gave the report to the company president.\nB: That is good.",
     funFact:"さしあげる is あげる elevated to humble speech (謙譲語, kenjougo). The prefix さし adds deference. In practice, さしあげる is used carefully because it can sound overly formal or even sarcastic in casual settings. Retail staff use it constantly: おつりをさしあげます (I will give you your change)."},

    {type:"teach", trg:"いただく", src:"to receive (humble) / to eat/drink (humble)", pos:"verb", gender:null,
     note:"Humble form of もらう. Also the humble form of たべる/のむ.\nGroup 1 verb. いただきます = the meal greeting.",
     example:"A: おきゃくさまからおみやげをいただきました。\nB: なにをいただきましたか？",
     exampleSrc:"A: We received a gift from the customer.\nB: What did you receive?",
     funFact:"いただく is one of the most-used keigo words. The famous meal greeting いただきます literally means 'I humbly receive (this food).' It expresses gratitude to everyone involved in the meal: farmers, cooks, and the life of the ingredients. This single word embodies Japanese food culture."},

    {type:"teach", trg:"くださる", src:"to give (honorific, toward speaker)", pos:"verb", gender:null,
     note:"Honorific form of くれる. Someone of higher status gives to the speaker.\nGroup 1 verb (irregular: くださいます, not くださります).",
     example:"A: せんせいがおすすめのほんをくださいました。\nB: どんなほんですか？",
     exampleSrc:"A: The teacher gave me a recommended book.\nB: What kind of book?",
     funFact:"くださる is the honorific of くれる, used when a superior gives to you. The imperative form ください (please give me/please do) comes from this verb. Every polite request in Japanese ultimately traces back to くださる. The irregular conjugation (くださいます instead of the expected くださります) is one of Japanese grammar's quirks."},

    {type:"teach", trg:"おれい", src:"thanks / expression of gratitude / return gift", pos:"noun", gender:null,
     note:"Kanji: お礼. With honorific お prefix. れい alone = manners/bow.\nおれいをいう = to express thanks. おれいをする = to give a return gift.",
     example:"A: おれいのてがみをかきましょう。\nB: そうですね、おせわになりましたから。",
     exampleSrc:"A: Let us write a thank-you letter.\nB: Yes, since they took care of us.",
     funFact:"お礼 has a dual meaning: the expression of thanks and the physical return gift. Japanese gift culture requires a return (お返し, okaeshi) for gifts received. Wedding guests receive お返し worth about half the gift value. This reciprocity system keeps social relationships balanced and is considered basic etiquette."},

    {type:"mc", q:"さしあげる is the humble form of:", opts:["もらう","くれる","あげる","おくる"], ans:"あげる",
     hint:"This keigo verb replaces the standard 'to give away from speaker' in formal situations."},

    {type:"teach", trg:"おせわになる", src:"to be in someone's care / to receive help", pos:"verb", gender:null,
     note:"Set expression. おせわになりました = thank you for your help.\nUsed in business as a greeting: いつもおせわになっております.",
     example:"A: いつもおせわになっております。\nB: こちらこそ、おせわになっております。",
     exampleSrc:"A: Thank you for always taking care of us.\nB: The pleasure is ours.",
     funFact:"おせわになっております is the most common business greeting in Japan. Every phone call, email, and meeting starts with this phrase. It acknowledges the ongoing relationship and care received. The 世話 kanji (世 world + 話 talk) originally meant 'worldly conversation' but evolved to mean 'taking care of someone.'"},

    {type:"teach", trg:"おくりもの", src:"gift (formal)", pos:"noun", gender:null,
     note:"More formal than プレゼント. Kanji: 贈り物.\nUsed for ceremonial and business gift-giving.",
     example:"A: けっこんのおくりものはなにがいいでしょうか。\nB: カタログギフトがにんきですよ。",
     exampleSrc:"A: What would be a good wedding gift?\nB: Catalog gifts are popular.",
     funFact:"贈り物 is the formal word for gifts, used for occasions like weddings, funerals, and business. Japan has specific gift seasons: お中元 (ochuugen, midsummer) and お歳暮 (oseibo, year-end). Department stores have dedicated gift counters where staff wrap presents with ritual precision. The wrapping is almost as important as the gift itself."},

    {type:"teach", trg:"きもち", src:"feelings / sentiment / small token (of gratitude)", pos:"noun", gender:null,
     note:"Kanji: 気持ち. き (spirit) + もち (hold).\nきもちです = a small token (when giving a modest gift).",
     example:"A: ほんのきもちですが、どうぞおうけとりください。\nB: わざわざありがとうございます。",
     exampleSrc:"A: It is just a small token, but please accept it.\nB: Thank you for going out of your way.",
     funFact:"きもち has two uses: emotions (気持ちがいい = feels good) and the gift-giving phrase ほんのきもちです (it is merely a token of my feelings). This phrase downplays the gift's value, which is essential Japanese etiquette. Even expensive gifts are presented as 'just a small thing.' This modesty is called 謙遜 (kenson)."},

    {type:"fb", s:"おきゃくさまからおみやげを___ました。\n(We received a gift from the customer. - humble)", a:"いただき", opts:["いただき","もらい","くれ","さしあげ"], sSrc:"We received a gift from the customer.",
     hint:"The humble form of receiving, used when the giver is someone of higher status."},

    {type:"teach", trg:"うけとる", src:"to receive / to accept (physically)", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 受け取る. うけ (receive) + とる (take).\nにもつをうけとる = to receive a package.",
     example:"A: しょるいをうけとりました。\nB: ないようをかくにんしてください。",
     exampleSrc:"A: I received the documents.\nB: Please confirm the contents.",
     funFact:"受け取る is a compound verb from 受ける (receive) and 取る (take). It emphasizes the physical act of accepting something into your hands. The word is common in business: しょるいをうけとる (receive documents), にもつをうけとる (pick up a package). Post offices use 受け取り (uketori, receipt/pickup)."},

    {type:"teach", trg:"もうしあげる", src:"to say (humble) / to tell (humble)", pos:"verb", gender:null,
     note:"Humble form of いう. もうしあげます = I would like to say.\nGroup 2 verb. Used in business and formal announcements.",
     example:"A: おいわいをもうしあげます。\nB: ありがとうございます。",
     exampleSrc:"A: Allow me to offer my congratulations.\nB: Thank you very much.",
     funFact:"申し上げる is one of the core keigo verbs. It elevates いう (say) to the highest level of humility. The simpler もうす is also humble but less formal. Business emails often end with よろしくもうしあげます (I humbly say 'yoroshiku'). Department store announcements always use もうしあげます."},

    {type:"mc", q:"おせわになっております is used for:", opts:["apologizing for a mistake","a standard business greeting acknowledging ongoing care","asking for directions","introducing yourself for the first time"], ans:"a standard business greeting acknowledging ongoing care",
     hint:"This set phrase opens virtually every b... communication in Japan."},

    {type:"match", pairs:[{trg:"さしあげる",src:"to give (humble)"},{trg:"いただく",src:"to receive (humble)"},{trg:"くださる",src:"to give (honorific)"},{trg:"おれい",src:"thanks/return gift"}]},

    {type:"match", pairs:[{trg:"おくりもの",src:"gift (formal)"},{trg:"きもち",src:"feelings/token"},{trg:"うけとる",src:"to receive (physically)"},{trg:"もうしあげる",src:"to say (humble)"}]},

    {type:"fb", s:"ほんの___ですが、どうぞおうけとりください。\n(It is just a small token, but please accept it.)", a:"きもち", opts:["きもち","おれい","おくりもの","プレゼント"], sSrc:"It is just a small token, but please accept it.",
     hint:"The word that means 'feelings' but in gift-giving means 'a modest token of gratitude.'"},

    {type:"mc", q:"くださる is the honorific form of:", opts:["あげる","もらう","くれる","おくる"], ans:"くれる",
     hint:"This verb elevates the standard word for 'giving toward the speaker' to respectful speech."},

    {type:"match", pairs:[{trg:"おせわになる",src:"to receive care"},{trg:"いただく",src:"to receive (humble)"},{trg:"さしあげる",src:"to give (humble)"},{trg:"くださる",src:"to give (honorific)"}]},
  ]
};
export default LESSON_3;
