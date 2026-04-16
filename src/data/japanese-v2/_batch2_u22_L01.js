// Unit 22 Batch 2 Lesson 1: おんとぎり (Obligation & Social Debt)
const BATCH2_L_1 = {
  id:"jav2_u22l_b2_1", title:"おんとぎり", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"おんとぎり",
     desc:"Japanese giving and receiving is deeply tied to social obligation (恩 and 義理). Learn vocabulary for expressing indebtedness, returning favors, and navigating the unspoken rules of Japanese social exchange.",
     goals:["Express social indebtedness with おんがある","Describe obligation to return favors with ぎり","Use polite declining and accepting phrases"]},

    {type:"teach", trg:"おん", src:"debt of gratitude / favor owed", pos:"noun", gender:null,
     note:"Kanji: 恩. A deep sense of indebtedness for kindness received.\nおんがある = to owe a debt of gratitude.",
     example:"A: せんせいにはおんがあります。\nB: たくさんおそわりましたね。",
     exampleSrc:"A: I owe a debt of gratitude to my teacher.\nB: You learned a lot from them.",
     funFact:"恩 is one of Japanese culture's foundational concepts. When someone helps you significantly, you accumulate 恩 (on), a social debt that ideally should be repaid. 恩返し (ongaeshi, returning the favor) is a popular theme in Japanese folktales. The word carries more weight than English 'gratitude' because it implies obligation."},

    {type:"teach", trg:"おんがえし", src:"returning a favor / repaying a debt of gratitude", pos:"noun", gender:null,
     note:"おん (gratitude debt) + かえし (return). Kanji: 恩返し.\nA core concept in Japanese social ethics.",
     example:"A: いつかおんがえしがしたいです。\nB: そんなきにしないでください。",
     exampleSrc:"A: I want to repay the favor someday.\nB: Please do not worry about it.",
     funFact:"恩返し is a beloved narrative theme. The folktale 鶴の恩返し (tsuru no ongaeshi, the crane's return of kindness) tells of a crane who repays a human's kindness by weaving beautiful cloth. This story captures the Japanese ideal: favors are remembered and eventually returned, completing a cycle of mutual support."},

    {type:"teach", trg:"ぎりチョコ", src:"obligation chocolate (Valentine's Day)", pos:"noun", gender:null,
     note:"ぎり (obligation) + チョコ (chocolate). Given to male colleagues out of social duty.\nNot romantic, purely obligatory.",
     example:"A: ぎりチョコはあげますか？\nB: しょくばでは、やめるかいしゃがふえていますね。",
     exampleSrc:"A: Do you give obligation chocolate?\nB: More companies are stopping the practice in the workplace.",
     funFact:"義理チョコ embodies the tension between social obligation and genuine sentiment. On Valentine's Day, women traditionally give chocolate to male coworkers. 義理チョコ is the 'obligatory' type, distinct from 本命チョコ (honmei choco, chocolate for someone you truly like). Many workplaces are now banning the practice to reduce pressure."},

    {type:"teach", trg:"おかげさまで", src:"thanks to you / fortunately", pos:"intj", gender:null,
     note:"おかげ (thanks to/benefit) + さま (honorific) + で.\nExpresses gratitude for another's help or fortune.",
     example:"A: おげんきですか？\nB: おかげさまで、げんきです。",
     exampleSrc:"A: How are you?\nB: Thankfully, I am well.",
     funFact:"おかげさまで is one of the most culturally significant phrases in Japanese. Even when answering 'how are you,' Japanese people say おかげさまで (thanks to you/the world/fate, I am well). It attributes your wellbeing to others' support. This reflexive gratitude is deeply embedded in Japanese communication."},

    {type:"mc", q:"おんがえし means:", opts:["Receiving a gift","Repaying a debt of gratitude","Refusing a favor","Giving a gift"], ans:"Repaying a debt of gratitude",
     hint:"恩 (g... d...) + 返し (return) = completing the cycle of kindness by giving back."},

    {type:"teach", trg:"すまない", src:"I feel bad / I am sorry / I am indebted", pos:"adj", gender:null,
     note:"From すむ (to be settled). すまない = unsettled, meaning 'I feel a debt.'\nMore emotional than すみません.",
     example:"A: そこまでしてもらってすまないね。\nB: きにしないで。ともだちでしょう。",
     exampleSrc:"A: I feel bad having you do all that.\nB: Do not worry about it. We are friends.",
     funFact:"すまない is deeper than すみません. While すみません is a general apology/thanks, すまない expresses genuine emotional weight: 'my debt to you is unsettled, and I feel it.' Men use it more often in casual contexts. It acknowledges that you have received more than you can easily repay."},

    {type:"teach", trg:"おかえしに", src:"in return / as a return favor", pos:"adv", gender:null,
     note:"お + かえし + に = in exchange, as reciprocation.\nUsed when giving something back to match a favor.",
     example:"A: おかえしになにかおくります。\nB: そんなきをつかわないでください。",
     exampleSrc:"A: I will send something in return.\nB: Please do not go to such trouble.",
     funFact:"おかえしに captures the reciprocity norm. When you receive a gift, favor, or kindness, a return gesture is expected. The return should be roughly 30-50% of the original value. Too much feels like one-upping; too little feels ungrateful. This unwritten calculation is a subtle social skill in Japan."},

    {type:"teach", trg:"えんりょする", src:"to hold back / to refrain / to be reserved", pos:"verb", gender:null,
     note:"する-verb. えんりょ = reservation/restraint. Kanji: 遠慮する.\nえんりょなく = without hesitation.",
     example:"A: えんりょなくたべてください。\nB: では、いただきます。",
     exampleSrc:"A: Please eat without holding back.\nB: Then, I will have some.",
     funFact:"遠慮する is a deeply Japanese behavior: holding back, declining first, not taking the last piece. Hosts say えんりょなく (without reserve) to encourage guests. The dance of offering and declining is ritualized: the first refusal is expected, the second is polite, the third means it. Understanding 遠慮 is key to Japanese social navigation."},

    {type:"fb", s:"せんせいには{1}があります。\n(I owe a debt of gratitude to my teacher.)", a:"おん", opts:["おん","ぎり","おかえし","えんりょ"], sSrc:"I owe a debt of gratitude to my teacher.",
     hint:"The deep concept of social indebtedness for significant kindness received."},

    {type:"teach", trg:"きをつかう", src:"to be considerate / to use social care", pos:"verb", gender:null,
     note:"き (energy/spirit) + を + つかう (to use). Kanji: 気を使う.\nExpending emotional energy on social awareness.",
     example:"A: あまりきをつかわないでください。\nB: いいえ、とうぜんのことですよ。",
     exampleSrc:"A: Please do not go to too much trouble.\nB: No, it is only natural.",
     funFact:"気を使う literally means 'to use one's energy' on social consideration. It is exhausting work, and Japanese people acknowledge this: 気を使って疲れた (I got tired from being considerate). Social situations in Japan require constant emotional labor (ki wo tsukau), reading the room, adjusting behavior, and anticipating needs."},

    {type:"teach", trg:"もうしわけない", src:"I have no excuse / I am truly sorry", pos:"adj", gender:null,
     note:"もうし (saying) + わけ (reason/excuse) + ない (not exist).\nKanji: 申し訳ない. Deep, genuine apology.",
     example:"A: おまたせしてもうしわけございません。\nB: だいじょうぶですよ。",
     exampleSrc:"A: I am terribly sorry for keeping you waiting.\nB: It is fine.",
     funFact:"申し訳ない is one of the deepest apologies in Japanese. It literally means 'I have no words to explain myself' or 'there is no excuse for what I have done.' The polite form もうしわけございません is standard in business. It goes beyond すみません by acknowledging that the speaker bears full responsibility."},

    {type:"mc", q:"えんりょする describes:", opts:["Being selfish","Holding back or being reserved out of consideration","Being angry","Speaking freely"], ans:"Holding back or being reserved out of consideration",
     hint:"This culturally essential verb describes the Japanese practice of not imposing and showing restraint."},

    {type:"tip", title:"Social Obligation System",
     text:"Core concepts:\nおん = deep gratitude/debt for big kindness\nぎり = social obligation/duty\nおんがえし = repaying the gratitude debt\nおかえし = returning a favor/gift\n\nBehavior patterns:\nえんりょする = hold back, do not impose\nきをつかう = be socially considerate\nすまない = feeling of unsettled debt\nもうしわけない = I have no excuse (deep apology)\n\nThe cycle: receive kindness -> feel おん -> find opportunity to おんがえし.",
     deepDive:{title:"Why Understanding On and Giri Matters",
      text:"On (恩) and giri (義理) are invisible social currencies:\n\n恩 is accumulated through significant kindness: a teacher who changes your life, parents who sacrifice for you, a mentor who guides your career.\n\n義理 is the ongoing obligation to maintain social relationships: seasonal gifts, attending weddings, helping colleagues.\n\nForeign learners who understand this system navigate Japanese society far more effectively. When someone does something unexpectedly kind, recognizing it as creating 恩 and responding appropriately builds deep trust and lasting relationships."}},

    {type:"match", pairs:[{trg:"おん",src:"gratitude debt"},{trg:"おんがえし",src:"repaying a favor"},{trg:"えんりょする",src:"to hold back"},{trg:"おかげさまで",src:"thanks to you"}]},

    {type:"fb", s:"おまたせして{1}ございません。\n(I am terribly sorry for keeping you waiting.)", a:"もうしわけ", opts:["もうしわけ","すみません","ごめん","しつれい"], sSrc:"I am terribly sorry for keeping you waiting.",
     hint:"The deep apology phrase meaning 'I have no excuse.' もうし (saying) + わけ (reason) + ない."},

    {type:"match", pairs:[{trg:"すまない",src:"I feel bad/indebted"},{trg:"おかえしに",src:"in return"},{trg:"もうしわけない",src:"I have no excuse"},{trg:"ぎりチョコ",src:"obligation chocolate"}]},

    {type:"mc", q:"おかげさまでげんきです is notable because:", opts:["It is rude","It attributes your wellbeing to others, showing reflexive gratitude","It means you are sick","It is only used at funerals"], ans:"It attributes your wellbeing to others, showing reflexive gratitude",
     hint:"Even answering 'how are you,' Japanese speakers thank the world/o... for their w...."},
  ]
};
export default BATCH2_L_1;
