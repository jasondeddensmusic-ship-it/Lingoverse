// Batch 7 – Unit 20 (B1.2 Polite Language): Formal Social Vocabulary
const BATCH7_L1 = {
  id:"jav2_u20l_b7_1", title:"フォーマルなば", icon:"🎩", xp:15, board:true,
  steps:[
    {type:"intro", title:"フォーマルなば",
     desc:"Learn vocabulary for formal social situations: ceremonies, official events, and proper etiquette. These words pair naturally with keigo patterns from this unit.",
     goals:["Use vocabulary for formal ceremonies","Navigate official event language","Express appropriate formality in social contexts"]},

    {type:"teach", trg:"しきてん", src:"ceremony / formal event", pos:"noun", gender:null,
     note:"にゅうがくしきてん = entrance ceremony.\nそつぎょうしきてん = graduation ceremony.",
     example:"A: しきてんにはスーツをきていきます。\nB: ネクタイもひつようですか？",
     exampleSrc:"A: I will wear a suit to the ceremony.\nB: Is a tie necessary too?",
     funFact:"Japanese life is punctuated by しきてん (式典). School entrance and graduation, coming-of-age day (成人式), weddings, and funerals all have specific protocols. Participants arrive early, sit in assigned seats, and follow a precise program. Even the dress code is strictly defined for each しきてん."},

    {type:"teach", trg:"しょうたい", src:"invitation", pos:"noun", gender:null,
     note:"しょうたいする = to invite. しょうたいじょう = invitation card.\nしょうたいをうける = to accept an invitation.",
     example:"A: けっこんしきのしょうたいじょうがとどきました。\nB: おめでとう。しゅっせきしますか？",
     exampleSrc:"A: A wedding invitation arrived.\nB: Congratulations. Will you attend?",
     funFact:"Japanese しょうたいじょう (invitation cards) require formal responses. Wedding invitations come with a return postcard where you circle 出席 (attend) or 欠席 (decline). When attending, you cross out 欠席 and add ご before 出席. These etiquette details matter deeply."},

    {type:"teach", trg:"あいさつまわり", src:"greeting rounds / courtesy visits", pos:"noun", gender:null,
     note:"あいさつ = greetings, まわり = going around.\nBusiness and neighborhood ritual.",
     example:"A: しんねんのあいさつまわりにいってきます。\nB: いってらっしゃい。なまえのカードをわすれないで。",
     exampleSrc:"A: I am going on New Year greeting rounds.\nB: Take care. Do not forget your name cards.",
     funFact:"あいさつまわり is a Japanese ritual of visiting important contacts to maintain relationships. New employees visit clients, new neighbors visit surrounding houses, and businesses make rounds at New Year. Bringing a small gift (手土産, てみやげ) is expected. Skipping あいさつまわり damages relationships."},

    {type:"teach", trg:"てみやげ", src:"gift brought when visiting", pos:"noun", gender:null,
     note:"て = hand, みやげ = souvenir/gift.\nおみやげ for visits, not trips.",
     example:"A: てみやげはなにがいいですか？\nB: おかしがむなんですよ。",
     exampleSrc:"A: What is a good gift to bring?\nB: Sweets are safe.",
     funFact:"てみやげ (手土産) etiquette is precise. Bring something from a known brand, nicely wrapped. Present it saying つまらないものですが (this is a trivial thing). The host will usually not open it in front of you. Budget varies: 1,000-3,000 yen for casual, 5,000+ yen for important visits."},

    {type:"teach", trg:"ふさわしい", src:"suitable / appropriate / befitting", pos:"adj", gender:null,
     note:"I-adjective. ふさわしいふく = appropriate attire.\nばにふさわしい = appropriate for the occasion.",
     example:"A: このふくはしきてんにふさわしいですか？\nB: はい、ふさわしいとおもいます。",
     exampleSrc:"A: Are these clothes appropriate for the ceremony?\nB: Yes, I think they are appropriate.",
     funFact:"ふさわしい is key to Japanese social navigation. Every situation has ふさわしい behavior, clothing, and language. The concept of TPO (Time, Place, Occasion) is taught in schools. Knowing what is ふさわしい shows social maturity. Getting it wrong causes 恥 (はじ, shame)."},

    {type:"teach", trg:"れいぎ", src:"manners / etiquette / courtesy", pos:"noun", gender:null,
     note:"れいぎただしい = well-mannered.\nれいぎしらず = rude person (lacking manners).",
     example:"A: あのひとはれいぎただしいですね。\nB: いいかていでそだったのでしょう。",
     exampleSrc:"A: That person has good manners.\nB: They were probably raised in a good family.",
     funFact:"れいぎ (礼儀) is foundational to Japanese society. It is taught from age 3 in preschool. Bowing angle indicates respect level: 15 degrees (casual), 30 degrees (normal), 45 degrees (deep respect). Business card exchange has specific れいぎ. Martial arts begin and end with れいぎ (bowing)."},

    {type:"teach", trg:"えんりょ", src:"restraint / holding back / modesty", pos:"noun", gender:null,
     note:"えんりょする = to hold back/refrain.\nえんりょなく = without restraint.",
     example:"A: えんりょしないでたくさんたべてください。\nB: ありがとうございます。いただきます。",
     exampleSrc:"A: Please do not hold back, eat plenty.\nB: Thank you. I will eat.",
     funFact:"えんりょ (遠慮) is one of the most important Japanese social concepts. It means restraining yourself out of consideration for others. Taking the last piece of food requires overcoming えんりょ. The 'last piece phenomenon' (最後の一個) is famous: food sits untouched because everyone is doing えんりょ."},

    {type:"teach", trg:"かんしゃ", src:"gratitude / appreciation", pos:"noun", gender:null,
     note:"かんしゃする = to feel grateful.\nかんしゃのきもち = feelings of gratitude.",
     example:"A: いつもおせわになっています。かんしゃしています。\nB: こちらこそ。",
     exampleSrc:"A: Thank you for always looking after me. I am grateful.\nB: Likewise.",
     funFact:"かんしゃ (感謝) goes deeper than ありがとう. Annual 感謝祭 (kansha-sai) events thank customers, staff, and nature. November 23 is 勤労感謝の日 (Labor Thanksgiving Day). Writing かんしゃのてがみ (gratitude letters) is a school activity. Japanese people express かんしゃ through actions more than words."},

    {type:"teach", trg:"けんきょ", src:"humble / modest", pos:"adj", gender:null,
     note:"Na-adjective. けんきょなたいど = a humble attitude.\nOpposite: ごうまん (arrogant).",
     example:"A: せいこうしてもけんきょなひとですね。\nB: だからみんなにすかれるのですね。",
     exampleSrc:"A: Despite success, that person remains humble.\nB: That is why everyone likes them.",
     funFact:"けんきょ (謙虚) is perhaps the most admired personality trait in Japan. Even successful people are expected to be けんきょ. Bragging (自慢, じまん) is strongly disliked. When praised, the proper response is deflection: まだまだです (I still have far to go). けんきょ gains more respect than confidence."},

    {type:"teach", trg:"おせわになる", src:"to be in someone's care / to be helped by", pos:"verb", gender:null,
     note:"おせわになっています = thank you for your ongoing support.\nCommon business greeting.",
     example:"A: いつもおせわになっております。\nB: こちらこそ、おせわになっております。",
     exampleSrc:"A: Thank you for your ongoing support.\nB: Likewise, thank you for yours.",
     funFact:"おせわになっております is the most common business phone greeting. It acknowledges the mutual relationship between companies or individuals. When leaving a company, you say おせわになりました (past tense, thank you for all the support). It is an untranslatable social lubricant."},

    {type:"teach", trg:"おわび", src:"apology (formal)", pos:"noun", gender:null,
     note:"おわびする = to apologize formally.\nMore formal than ごめんなさい and すみません.",
     example:"A: このたびはたいへんしつれいいたしました。こころよりおわびもうしあげます。\nB: おきもちはわかりました。",
     exampleSrc:"A: I was very rude this time. I sincerely apologize.\nB: I understand your feelings.",
     funFact:"おわび (お詫び) is the most formal apology level. Corporate scandals require public おわび press conferences where executives bow deeply (sometimes 90 degrees). The depth and duration of the bow signal sincerity. Japanese apology culture is elaborate: timing, wording, and physical gestures all matter."},

    {type:"teach", trg:"もてなす", src:"to host / to entertain guests", pos:"verb", gender:null,
     note:"Group 1 verb. おもてなし = hospitality (noun).\nおきゃくさまをもてなす = to entertain guests.",
     example:"A: にほんのおもてなしはすばらしいです。\nB: ありがとうございます。よろこんでいただけてうれしいです。",
     exampleSrc:"A: Japanese hospitality is wonderful.\nB: Thank you. I am glad you are pleased.",
     funFact:"おもてなし became Japan's global brand when the word was used in Tokyo's 2020 Olympics bid presentation. It means wholehearted hospitality without expectation of reward. The difference from 'service': おもてなし anticipates needs before the guest notices them. It is proactive, invisible, and selfless."},

    // Quiz steps
    {type:"mc", q:"えんりょ describes:",
     opts:["Holding back out of consideration for others","Being rude to strangers","Eating too much","Talking loudly"],
     ans:"Holding back out of consideration for others",
     hint:"This concept causes the 'last piece phenomenon' where food sits untouched because everyone restrains themselves."},

    {type:"match", pairs:[
      {trg:"しきてん", src:"ceremony"},
      {trg:"しょうたい", src:"invitation"},
      {trg:"てみやげ", src:"gift when visiting"},
      {trg:"れいぎ", src:"manners"},
      {trg:"おわび", src:"formal apology"}
    ]},

    {type:"fb", s:"いつも{1}になっております。",
     a:["おせわ"],
     opts:["おせわ","めいわく","きょうりょく","あいさつ"],
     hint:"The standard business greeting acknowledging someone's ongoing support.",
     sSrc:"Thank you for always {1}."},

    {type:"mc", q:"おもてなし became globally famous through:",
     opts:["Tokyo's 2020 Olympics bid presentation","A TV drama","A restaurant chain","A government campaign"],
     ans:"Tokyo's 2020 Olympics bid presentation",
     hint:"This word was used to describe Japan's hospitality culture in a famous international p...."},

    {type:"fb", s:"このふくはしきてんに{1}ですか？",
     a:["ふさわしい"],
     opts:["ふさわしい","めずらしい","やさしい","むずかしい"],
     hint:"Is this outfit appropriate for the ceremony? This i-adjective means 'suitable' or 'befitting.'",
     sSrc:"Are these clothes {1} for the ceremony?"},

    {type:"mc", q:"けんきょ means:",
     opts:["Humble and modest","Confident and bold","Quiet and shy","Angry and frustrated"],
     ans:"Humble and modest",
     hint:"The most admired personality trait in Japan. Even successful people are expected to show this quality."},

    {type:"match", pairs:[
      {trg:"えんりょ", src:"restraint"},
      {trg:"かんしゃ", src:"gratitude"},
      {trg:"けんきょ", src:"humble"},
      {trg:"ふさわしい", src:"appropriate"},
      {trg:"もてなす", src:"to host"}
    ]},

    {type:"fb", s:"せいこうしても{1}なたいどがだいじです。",
     a:["けんきょ"],
     opts:["けんきょ","ごうまん","ふさわしい","めずらしい"],
     hint:"Even after success, a humble attitude is important. This na-adjective means 'modest.'",
     sSrc:"Even with success, a {1} attitude is important."}
  ]
};
export default BATCH7_L1;
