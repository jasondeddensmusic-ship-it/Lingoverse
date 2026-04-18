// Unit 22 Batch 2 Lesson 1: 恩(おん)と義理(ぎり) (Obligation & Social Debt)
const BATCH2_L_1 = {
  id:"jav2_u22l_b2_1", title:"恩(おん)と義理(ぎり)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"恩(おん)と義理(ぎり)",
     desc:"Japanese giving and receiving is deeply tied to social obligation (恩 and 義理). Learn vocabulary for expressing indebtedness, returning favors, and navigating the unspoken rules of Japanese social exchange.",
     goals:["Express social indebtedness with 恩(おん)がある","Describe obligation to return favors with 義理(ぎり)","Use polite declining and accepting phrases"]},

    {type:"teach", trg:"恩(おん)", src:"debt of gratitude / favor owed", pos:"noun", gender:null,
     note:"Kanji: 恩. A deep sense of indebtedness for kindness received.\n恩(おん)がある = to owe a debt of gratitude.",
     example:"A: 先生(せんせい)には恩(おん)があります。\nB: たくさん教(おそ)わりましたね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I owe a debt of gratitude to my teacher.\nB: You learned a lot from them.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"恩 is one of Japanese culture's foundational concepts. When someone helps you significantly, you accumulate 恩(おん) (on), a social debt that ideally should be repaid. 恩返(おんがえ)し (ongaeshi, returning the favor) is a popular theme in Japanese folktales. The word carries more weight than English 'gratitude' because it implies obligation."},

    {type:"teach", trg:"恩返(おんがえ)し", src:"returning a favor / repaying a debt of gratitude", pos:"noun", gender:null,
     note:"恩(おん) (gratitude debt) + 返(かえ)し (return). Kanji: 恩返し.\nA core concept in Japanese social ethics.",
     example:"A: いつか恩返(おんがえ)しがしたいです。\nB: そんな気(き)にしないでください。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I want to repay the favor someday.\nB: Please do not worry about it.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"恩返し is a beloved narrative theme. The folktale 鶴(つる)の恩返(おんがえ)し (tsuru no ongaeshi, the crane's return of kindness) tells of a crane who repays a human's kindness by weaving beautiful cloth. This story captures the Japanese ideal: favors are remembered and eventually returned, completing a cycle of mutual support."},

    {type:"teach", trg:"義理(ぎり)チョコ", src:"obligation chocolate (Valentine's Day)", pos:"noun", gender:null,
     note:"義理(ぎり) (obligation) + チョコ (chocolate). Given to male colleagues out of social duty.\nNot romantic, purely obligatory.",
     example:"A: 義理(ぎり)チョコはあげますか？\nB: 職場(しょくば)では、やめる会社(かいしゃ)が増(ふ)えていますね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Do you give obligation chocolate?\nB: More companies are stopping the practice in the workplace.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"義理チョコ embodies the tension between social obligation and genuine sentiment. On Valentine's Day, women traditionally give chocolate to male coworkers. 義理(ぎり)チョコ is the 'obligatory' type, distinct from 本命(ほんめい)チョコ (honmei choco, chocolate for someone you truly like). Many workplaces are now banning the practice to reduce pressure."},

    {type:"teach", trg:"おかげさまで", src:"thanks to you / fortunately", pos:"intj", gender:null,
     note:"おかげ (thanks to/benefit) + さま (honorific) + で.\nExpresses gratitude for another's help or fortune.",
     example:"A: お元気(げんき)ですか？\nB: おかげさまで、元気(げんき)です。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: How are you?\nB: Thankfully, I am well.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"おかげさまで is one of the most culturally significant phrases in Japanese. Even when answering 'how are you,' Japanese people say おかげさまで (thanks to you/the world/fate, I am well). It attributes your wellbeing to others' support. This reflexive gratitude is deeply embedded in Japanese communication."},

    {type:"mc", q:"恩返(おんがえ)し means:", opts:["Receiving a gift","Repaying a debt of gratitude","Refusing a favor","Giving a gift"], ans:"Repaying a debt of gratitude",
     hint:"恩(おん) (g... d...) + 返(かえ)し (return) = completing the cycle of kindness by giving back."},

    {type:"teach", trg:"すまない", src:"I feel bad / I am sorry / I am indebted", pos:"adj", gender:null,
     note:"From 済(す)む (to be settled). すまない = unsettled, meaning 'I feel a debt.'\nMore emotional than すみません.",
     example:"A: そこまでしてもらってすまないね。\nB: 気(き)にしないで。友達(ともだち)でしょう。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I feel bad having you do all that.\nB: Do not worry about it. We are friends.\nA: How was it?\nB: It was very good.",
     funFact:"すまない is deeper than すみません. While すみません is a general apology/thanks, すまない expresses genuine emotional weight: 'my debt to you is unsettled, and I feel it.' Men use it more often in casual contexts. It acknowledges that you have received more than you can easily repay."},

    {type:"teach", trg:"お返(かえ)しに", src:"in return / as a return favor", pos:"adv", gender:null,
     note:"お + 返(かえ)し + に = in exchange, as reciprocation.\nUsed when giving something back to match a favor.",
     example:"A: お返(かえ)しに何(なに)か送(おく)ります。\nB: そんな気(き)をつかわないでください。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I will send something in return.\nB: Please do not go to such trouble.\nA: When was it?\nB: It was last summer.",
     funFact:"お返(かえ)しに captures the reciprocity norm. When you receive a gift, favor, or kindness, a return gesture is expected. The return should be roughly 30-50% of the original value. Too much feels like one-upping; too little feels ungrateful. This unwritten calculation is a subtle social skill in Japan."},

    {type:"teach", trg:"遠慮(えんりょ)する", src:"to hold back / to refrain / to be reserved", pos:"verb", gender:null,
     note:"する-verb. 遠慮(えんりょ) = reservation/restraint.\n遠慮(えんりょ)なく = without hesitation.",
     example:"A: 遠慮(えんりょ)なく食(た)べてください。\nB: では、いただきます。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Please eat without holding back.\nB: Then, I will have some.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"遠慮する is a deeply Japanese behavior: holding back, declining first, not taking the last piece. Hosts say 遠慮(えんりょ)なく (without reserve) to encourage guests. The dance of offering and declining is ritualized: the first refusal is expected, the second is polite, the third means it. Understanding 遠慮(えんりょ) is key to Japanese social navigation."},

    {type:"fb", s:"先生(せんせい)には{1}があります。\n(I owe a debt of gratitude to my teacher.)", a:"恩(おん)", opts:["恩(おん)","義理(ぎり)","お返(かえ)し","遠慮(えんりょ)"], sSrc:"I owe a debt of gratitude to my teacher.",
     hint:"The deep concept of social indebtedness for significant kindness received."},

    {type:"teach", trg:"気(き)を使(つか)う", src:"to be considerate / to use social care", pos:"verb", gender:null,
     note:"気(き) (energy/spirit) + を + 使(つか)う (to use). Kanji: 気を使う.\nExpending emotional energy on social awareness.",
     example:"A: あまり気(き)を使(つか)わないでください。\nB: いいえ、当然(とうぜん)のことですよ。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Please do not go to too much trouble.\nB: No, it is only natural.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"気(き)を使(つか)う literally means 'to use one's energy' on social consideration. It is exhausting work, and Japanese people acknowledge this: 気(き)を使(つか)って疲(つか)れた (I got tired from being considerate). Social situations in Japan require constant emotional labor (ki wo tsukau), reading the room, adjusting behavior, and anticipating needs."},

    {type:"teach", trg:"申(もう)し訳(わけ)ない", src:"I have no excuse / I am truly sorry", pos:"adj", gender:null,
     note:"申(もう)し (saying) + 訳(わけ) (reason/excuse) + ない (not exist).\nKanji: 申し訳ない. Deep, genuine apology.",
     example:"A: お待(ま)たせして申(もう)し訳(わけ)ございません。\nB: 大丈夫(だいじょうぶ)ですよ。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I am terribly sorry for keeping you waiting.\nB: It is fine.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"申し訳ない is one of the deepest apologies in Japanese. It literally means 'I have no words to explain myself' or 'there is no excuse for what I have done.' The polite form 申(もう)し訳(わけ)ございません is standard in business. It goes beyond すみません by acknowledging that the speaker bears full responsibility."},

    {type:"mc", q:"遠慮(えんりょ)する describes:", opts:["Being selfish","Holding back or being reserved out of consideration","Being angry","Speaking freely"], ans:"Holding back or being reserved out of consideration",
     hint:"This culturally essential verb describes the Japanese practice of not imposing and showing restraint."},

    {type:"tip", title:"Social Obligation System",
     text:"Core concepts:\n恩(おん) = deep gratitude/debt for big kindness\n義理(ぎり) = social obligation/duty\n恩返(おんがえ)し = repaying the gratitude debt\nお返(かえ)し = returning a favor/gift\n\nBehavior patterns:\n遠慮(えんりょ)する = hold back, do not impose\n気(き)を使(つか)う = be socially considerate\nすまない = feeling of unsettled debt\n申(もう)し訳(わけ)ない = I have no excuse (deep apology)\n\nThe cycle: receive kindness -> feel 恩(おん) -> find opportunity to 恩返(おんがえ)し.",
     deepDive:{title:"Why Understanding On and Giri Matters",
      text:"On (恩) and giri (義理) are invisible social currencies:\n\n恩(おん) is accumulated through significant kindness: a teacher who changes your life, parents who sacrifice for you, a mentor who guides your career.\n\n義理(ぎり) is the ongoing obligation to maintain social relationships: seasonal gifts, attending weddings, helping colleagues.\n\nForeign learners who understand this system navigate Japanese society far more effectively. When someone does something unexpectedly kind, recognizing it as creating 恩(おん) and responding appropriately builds deep trust and lasting relationships."}},

    {type:"match", pairs:[{trg:"恩(おん)",src:"gratitude debt"},{trg:"恩返(おんがえ)し",src:"repaying a favor"},{trg:"遠慮(えんりょ)する",src:"to hold back"},{trg:"おかげさまで",src:"thanks to you"}]},

    {type:"fb", s:"お待(ま)たせして{1}ございません。\n(I am terribly sorry for keeping you waiting.)", a:"申(もう)し訳(わけ)", opts:["申(もう)し訳(わけ)","すみません","ごめん","失礼(しつれい)"], sSrc:"I am terribly sorry for keeping you waiting.",
     hint:"The deep apology phrase meaning 'I have no excuse.' 申(もう)し (saying) + 訳(わけ) (reason) + ない."},

    {type:"match", pairs:[{trg:"すまない",src:"I feel bad/indebted"},{trg:"お返(かえ)しに",src:"in return"},{trg:"申(もう)し訳(わけ)ない",src:"I have no excuse"},{trg:"義理(ぎり)チョコ",src:"obligation chocolate"}]},

    {type:"mc", q:"おかげさまで元気(げんき)です is notable because:", opts:["It is rude","It attributes your wellbeing to others, showing reflexive gratitude","It means you are sick","It is only used at funerals"], ans:"It attributes your wellbeing to others, showing reflexive gratitude",
     hint:"Even answering 'how are you,' Japanese speakers thank the world/o... for their w...."},
  {type:"match",pairs:[{trg:"気(き)を使(つか)う",src:"to be considerate / to use social care"}]}]
};
export default BATCH2_L_1;
