// Unit 19 Batch 2 Lesson 1: かていほうのじょうけん (Hypothetical & Regret Conditionals)
const BATCH2_L_1 = {
  id:"jav2_u19l_b2_1", title:"かていほう", icon:"🤔", xp:15, board:true,
  steps:[
    {type:"intro", title:"かていほう",
     desc:"Express hypothetical situations, regrets, and wishes using advanced conditional patterns. Learn to say 'if only I had studied more,' 'if I were rich,' and 'I should not have done that.' These patterns add emotional depth to your Japanese.",
     goals:["Express regrets with ばよかった (should have)","Use たらよかったのに for unfulfilled past wishes","Combine conditionals with negative forms for 'if not'"]},

    {type:"teach", trg:"〜ばよかった", src:"I should have ~ / I wish I had ~", pos:"part", gender:null,
     note:"ば conditional + よかった (was good). Expresses regret about not doing something.\nもっとべんきょうすればよかった = I should have studied more.",
     example:"A: もっとはやくおきればよかった。\nB: あしたからがんばりましょう。",
     exampleSrc:"A: I should have woken up earlier.\nB: Let us try harder from tomorrow.",
     funFact:"ばよかった is the grammar of hindsight regret. It literally means 'if I had done X, it would have been good.' Every Japanese speaker uses this pattern regularly: もっとべんきょうすればよかった (should have studied more), いけばよかった (should have gone). It pairs naturally with のに for extra emotion."},

    {type:"teach", trg:"〜なければよかった", src:"I should not have ~ / I wish I had not ~", pos:"part", gender:null,
     note:"Negative ば conditional + よかった. Regret about doing something.\nいわなければよかった = I should not have said it.",
     example:"A: あんなことをいわなければよかった。\nB: あやまったらどうですか？",
     exampleSrc:"A: I should not have said such a thing.\nB: How about apologizing?",
     funFact:"なければよかった is the negative counterpart: regretting something you DID do. あんなこと (such a thing) is a common companion, vaguely referring to the regretted action. Japanese people often use this after social missteps, reflecting the culture's sensitivity to words and their impact."},

    {type:"teach", trg:"〜たらよかったのに", src:"it would have been good if ~ (but it didn't happen)", pos:"part", gender:null,
     note:"たら + よかった + のに = strong unfulfilled wish about the past.\nMore emotional than ばよかった.",
     example:"A: あのときいっしょにいったらよかったのに。\nB: つぎはいっしょにいこうね。",
     exampleSrc:"A: It would have been good if we had gone together then.\nB: Let us go together next time.",
     funFact:"たらよかったのに adds the emotional layer of のに (but it was not so) to the wish. It carries a sigh of regret: if only things had been different. This pattern is frequently used in Japanese dramas and songs about missed opportunities and roads not taken."},

    {type:"teach", trg:"もしも", src:"if (strong hypothetical, emphasis)", pos:"adv", gender:null,
     note:"Stronger version of もし. Used for clearly hypothetical or unlikely scenarios.\nもしも100まんえんがあったら = if I had a million yen.",
     example:"A: もしもたからくじにあたったら、なにをしますか？\nB: せかいりょこうにいきたいです。",
     exampleSrc:"A: If you won the lottery, what would you do?\nB: I would want to travel the world.",
     funFact:"もしも doubles the hypothetical emphasis of もし. It signals a clearly imaginary scenario: lottery wins, superpowers, time travel. The pattern もしも + たら is common in conversation games and interviews. Japanese TV shows love the もしもシリーズ (what-if series) format."},

    {type:"mc", q:"もっとべんきょうすればよかった means:", opts:["I studied a lot","I should have studied more","I will study more","Studying is good"], ans:"I should have studied more",
     hint:"ばよかった expresses regret about something you S... HAVE done but did not."},

    {type:"teach", trg:"たからくじ", src:"lottery", pos:"noun", gender:null,
     note:"たから (treasure) + くじ (lottery/draw). Kanji: 宝くじ.\nたからくじにあたる = to win the lottery.",
     example:"A: たからくじをかいましたか？\nB: はい、でもあたったことはありません。",
     exampleSrc:"A: Did you buy a lottery ticket?\nB: Yes, but I have never won.",
     funFact:"宝くじ is hugely popular in Japan. Year-end lottery (年末ジャンボ宝くじ) tickets sell millions. The dream of winning (当たったら, if I won) is a favorite conversation topic. Lottery booths are ubiquitous, and some are famous for producing winners, attracting long lines."},

    {type:"teach", trg:"こうかいする", src:"to regret / to feel remorse", pos:"verb", gender:null,
     note:"する-verb. こうかい = regret/remorse. Kanji: 後悔する.\n後 (after) + 悔 (regret).",
     example:"A: こうかいしてもおそいです。\nB: そうですね。つぎにいかしましょう。",
     exampleSrc:"A: It is too late to regret.\nB: That is right. Let us use it for next time.",
     funFact:"後悔 literally means 'regretting after.' The proverb 後悔先に立たず (koukai saki ni tatazu, regret does not stand before) means regret cannot prevent past mistakes. Japanese philosophical tradition, influenced by Buddhism, teaches acceptance of the past while learning from mistakes."},

    {type:"fb", s:"あんなことをいわ{1}よかった。\n(I should not have said such a thing.)", a:"なければ", opts:["なければ","なかったら","ないと","なくて"], sSrc:"I should not have said such a thing.",
     hint:"The negative ば conditional form of いう. ない changes to なければ for the ば form."},

    {type:"teach", trg:"せかいりょこう", src:"world travel / trip around the world", pos:"noun", gender:null,
     note:"せかい (world) + りょこう (travel). Kanji: 世界旅行.\nA common dream mentioned in hypothetical conversations.",
     example:"A: いつかせかいりょこうをしたいです。\nB: どのくにがいちばんいきたいですか？",
     exampleSrc:"A: I want to travel the world someday.\nB: Which country do you most want to visit?",
     funFact:"世界旅行 is a perennial dream for Japanese people. Despite having one of the world's most powerful passports, many Japanese workers struggle to take long vacations. The ideal of sekai ryokou (world travel) represents freedom and adventure. Gap years and round-the-world trips are growing in popularity."},

    {type:"teach", trg:"あのとき", src:"at that time / back then", pos:"noun", gender:null,
     note:"あの (that) + とき (time). Refers to a specific past moment.\nあのときこうすればよかった = I should have done this back then.",
     example:"A: あのときべつのみちをえらべばよかった。\nB: こうかいしてもしかたないですよ。",
     exampleSrc:"A: I should have chosen a different path back then.\nB: There is no use regretting it.",
     funFact:"あのとき is the nostalgic time marker. It pinpoints a specific past moment when a different choice could have been made. Combined with ばよかった, it creates the classic regret structure: あのとき + action + ばよかった = I should have done that back then."},

    {type:"teach", trg:"〜ないかぎり", src:"unless ~ / as long as ~ does not", pos:"part", gender:null,
     note:"Negative form + かぎり (limit/extent). Sets a boundary condition.\nべんきょうしないかぎりごうかくしない = unless you study, you will not pass.",
     example:"A: れんしゅうしないかぎりじょうずになりません。\nB: まいにちれんしゅうします。",
     exampleSrc:"A: Unless you practice, you will not improve.\nB: I will practice every day.",
     funFact:"ないかぎり sets a hard boundary: unless this condition changes, the result holds. かぎり means 'limit/extent.' The pattern is more formal and forceful than ないと (if not). It appears in rules, warnings, and firm advice. It says: there is NO path to the result except through this condition."},

    {type:"mc", q:"もしもたからくじにあたったら expresses:", opts:["A real plan to buy lottery tickets","A hypothetical scenario about winning","A past lottery win","Anger about losing the lottery"], ans:"A hypothetical scenario about winning",
     hint:"もしも signals a clearly imaginary situation. たら creates the h... condition."},

    {type:"tip", title:"Regret and Hypothetical Patterns",
     text:"Past regret (should have done):\nすればよかった = should have done\nいけばよかった = should have gone\n\nPast regret (should not have done):\nいわなければよかった = should not have said\nたべなければよかった = should not have eaten\n\nEmotional unfulfilled wish:\nたらよかったのに = if only it had been so\n\nStrong hypothetical:\nもしも + たら = if (purely imaginary)\n\nBoundary condition:\nないかぎり = unless (hard requirement)",
     deepDive:{title:"The Japanese Philosophy of Regret",
      text:"Japanese has rich vocabulary for regret because reflection on past actions is valued:\n\n後悔 (koukai) = regret about actions\n反省 (hansei) = self-reflection and self-criticism\n残念 (zannen) = regrettable/unfortunate\n\nThe grammar supports this: ばよかった and たらよかったのに provide precise ways to articulate what should have been different. However, the proverb 後悔先に立たず (regret comes too late) teaches that dwelling on the past is futile. The Japanese ideal is: reflect, learn, and move forward."}},

    {type:"match", pairs:[{trg:"ばよかった",src:"should have done"},{trg:"なければよかった",src:"should not have done"},{trg:"たらよかったのに",src:"if only (emotional wish)"},{trg:"もしも",src:"if (strong hypothetical)"}]},

    {type:"fb", s:"もしもたからくじに{1}ら、せかいりょこうにいきたいです。\n(If I won the lottery, I would want to travel the world.)", a:"あたった", opts:["あたった","あたる","あたって","あたれば"], sSrc:"If I won the lottery, I would want to travel the world.",
     hint:"The たら conditional is formed from the past tense + ら. あたる past = あたった."},

    {type:"match", pairs:[{trg:"たからくじ",src:"lottery"},{trg:"こうかいする",src:"to regret"},{trg:"あのとき",src:"at that time"},{trg:"ないかぎり",src:"unless"}]},

    {type:"mc", q:"れんしゅうしないかぎりじょうずになりません means:", opts:["If you practice, you will improve","Unless you practice, you will not improve","Practicing is not necessary","You practiced and improved"], ans:"Unless you practice, you will not improve",
     hint:"ないかぎり sets a hard boundary: the result ONLY changes if the condition is met."},
  ]
};
export default BATCH2_L_1;
