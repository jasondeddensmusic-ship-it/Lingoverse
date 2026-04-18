// Unit 19 Batch 2 Lesson 1: 仮定法(かていほう)の条件(じょうけん) (Hypothetical & Regret Conditionals)
const BATCH2_L_1 = {
  id:"jav2_u19l_b2_1", title:"仮定法(かていほう)", icon:"🤔", xp:15, board:true,
  steps:[
    {type:"intro", title:"仮定法(かていほう)",
     desc:"Express hypothetical situations, regrets, and wishes using advanced conditional patterns. Learn to say 'if only I had studied more,' 'if I were rich,' and 'I should not have done that.' These patterns add emotional depth to your Japanese.",
     goals:["Express regrets with ばよかった (should have)","Use たらよかったのに for unfulfilled past wishes","Combine conditionals with negative forms for 'if not'"]},

    {type:"teach", trg:"〜ばよかった", src:"I should have ~ / I wish I had ~", pos:"part", gender:null,
     note:"ば conditional + よかった (was good). Expresses regret about not doing something.\nもっと勉強(べんきょう)すればよかった = I should have studied more.",
     example:"A: もっと早(はや)く起(お)きればよかった。\nB: 明日(あした)からがんばりましょう。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I should have woken up earlier.\nB: Let us try harder from tomorrow.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ばよかった is the grammar of hindsight regret. It literally means 'if I had done X, it would have been good.' Every Japanese speaker uses this pattern regularly: もっと勉強(べんきょう)すればよかった (should have studied more), 行(い)けばよかった (should have gone). It pairs naturally with のに for extra emotion."},

    {type:"teach", trg:"〜なければよかった", src:"I should not have ~ / I wish I had not ~", pos:"part", gender:null,
     note:"Negative ば conditional + よかった. Regret about doing something.\n言(い)わなければよかった = I should not have said it.",
     example:"A: あんなことを言(い)わなければよかった。\nB: 謝(あやま)ったらどうですか？\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I should not have said such a thing.\nB: How about apologizing?\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"なければよかった is the negative counterpart: regretting something you DID do. あんなこと (such a thing) is a common companion, vaguely referring to the regretted action. Japanese people often use this after social missteps, reflecting the culture's sensitivity to words and their impact."},

    {type:"teach", trg:"〜たらよかったのに", src:"it would have been good if ~ (but it didn't happen)", pos:"part", gender:null,
     note:"たら + よかった + のに = strong unfulfilled wish about the past.\nMore emotional than ばよかった.",
     example:"A: あのとき一緒(いっしょ)に行(い)ったらよかったのに。\nB: 次(つぎ)は一緒(いっしょ)に行(い)こうね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: It would have been good if we had gone together then.\nB: Let us go together next time.\nA: How long did it take?\nB: About two hours.",
     funFact:"たらよかったのに adds the emotional layer of のに (but it was not so) to the wish. It carries a sigh of regret: if only things had been different. This pattern is frequently used in Japanese dramas and songs about missed opportunities and roads not taken."},

    {type:"teach", trg:"もしも", src:"if (strong hypothetical, emphasis)", pos:"adv", gender:null,
     note:"Stronger version of もし. Used for clearly hypothetical or unlikely scenarios.\nもしも100万円(まんえん)があったら = if I had a million yen.",
     example:"A: もしも宝(たから)くじに当(あ)たったら、何(なに)をしますか？\nB: 世界(せかい)旅行(りょこう)に行(い)きたいです。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: If you won the lottery, what would you do?\nB: I would want to travel the world.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"もしも doubles the hypothetical emphasis of もし. It signals a clearly imaginary scenario: lottery wins, superpowers, time travel. The pattern もしも + たら is common in conversation games and interviews. Japanese TV shows love the もしもシリーズ (what-if series) format."},

    {type:"mc", q:"もっと勉強(べんきょう)すればよかった means:", opts:["I studied a lot","I should have studied more","I will study more","Studying is good"], ans:"I should have studied more",
     hint:"ばよかった expresses regret about something you S... HAVE done but did not."},

    {type:"teach", trg:"宝(たから)くじ", src:"lottery", pos:"noun", gender:null,
     note:"宝(たから) (treasure) + くじ (lottery/draw).\n宝(たから)くじに当(あ)たる = to win the lottery.",
     example:"A: 宝(たから)くじを買(か)いましたか？\nB: はい、でも当(あ)たったことはありません。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Did you buy a lottery ticket?\nB: Yes, but I have never won.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"宝くじ is hugely popular in Japan. Year-end lottery (年末ジャンボ宝くじ) tickets sell millions. The dream of winning (当(あ)たったら, if I won) is a favorite conversation topic. Lottery booths are ubiquitous, and some are famous for producing winners, attracting long lines."},

    {type:"teach", trg:"後悔(こうかい)する", src:"to regret / to feel remorse", pos:"verb", gender:null,
     note:"する-verb. 後悔(こうかい) = regret/remorse.\n後(後) (after) + 悔(かい) (regret).",
     example:"A: 後悔(こうかい)しても遅(おそ)いです。\nB: そうですね。次(つぎ)に生(い)かしましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: It is too late to regret.\nB: That is right. Let us use it for next time.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"後悔 literally means 'regretting after.' The proverb 後悔先(こうかいさき)に立(た)たず (koukai saki ni tatazu, regret does not stand before) means regret cannot prevent past mistakes. Japanese philosophical tradition, influenced by Buddhism, teaches acceptance of the past while learning from mistakes."},

    {type:"fb", s:"あんなことを言(い)わ{1}よかった。\n(I should not have said such a thing.)", a:"なければ", opts:["なければ","なかったら","ないと","なくて"], sSrc:"I should not have said such a thing.",
     hint:"The negative ば conditional form of 言(い)う. ない changes to なければ for the ば form."},

    {type:"teach", trg:"世界(せかい)旅行(りょこう)", src:"world travel / trip around the world", pos:"noun", gender:null,
     note:"世界(せかい) (world) + 旅行(りょこう) (travel).\nA common dream mentioned in hypothetical conversations.",
     example:"A: いつか世界(せかい)旅行(りょこう)をしたいです。\nB: どの国(くに)が一番(いちばん)行(い)きたいですか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I want to travel the world someday.\nB: Which country do you most want to visit?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"世界旅行 is a perennial dream for Japanese people. Despite having one of the world's most powerful passports, many Japanese workers struggle to take long vacations. The ideal of sekai ryokou (world travel) represents freedom and adventure. Gap years and round-the-world trips are growing in popularity."},

    {type:"teach", trg:"あのとき", src:"at that time / back then", pos:"noun", gender:null,
     note:"あの (that) + とき (time). Refers to a specific past moment.\nあのとき、こうすればよかった = I should have done this back then.",
     example:"A: あのとき別(べつ)の道(みち)を選(えら)べばよかった。\nB: 後悔(こうかい)してもしかたないですよ。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I should have chosen a different path back then.\nB: There is no use regretting it.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"あのとき is the nostalgic time marker. It pinpoints a specific past moment when a different choice could have been made. Combined with ばよかった, it creates the classic regret structure: あのとき + action + ばよかった = I should have done that back then."},

    {type:"teach", trg:"〜ないかぎり", src:"unless ~ / as long as ~ does not", pos:"part", gender:null,
     note:"Negative form + かぎり (limit/extent). Sets a boundary condition.\n勉強(べんきょう)しないかぎり合格(ごうかく)しない = unless you study, you will not pass.",
     example:"A: 練習(れんしゅう)しないかぎり上手(じょうず)になりません。\nB: 毎日(まいにち)練習(れんしゅう)します。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Unless you practice, you will not improve.\nB: I will practice every day.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"ないかぎり sets a hard boundary: unless this condition changes, the result holds. かぎり means 'limit/extent.' The pattern is more formal and forceful than ないと (if not). It appears in rules, warnings, and firm advice. It says: there is NO path to the result except through this condition."},

    {type:"mc", q:"もしも宝(たから)くじに当(あ)たったら expresses:", opts:["A real plan to buy lottery tickets","A hypothetical scenario about winning","A past lottery win","Anger about losing the lottery"], ans:"A hypothetical scenario about winning",
     hint:"もしも signals a clearly imaginary situation. たら creates the h... condition."},

    {type:"tip", title:"Regret and Hypothetical Patterns",
     text:"Past regret (should have done):\nすればよかった = should have done\n行(い)けばよかった = should have gone\n\nPast regret (should not have done):\n言(い)わなければよかった = should not have said\n食(た)べなければよかった = should not have eaten\n\nEmotional unfulfilled wish:\nたらよかったのに = if only it had been so\n\nStrong hypothetical:\nもしも + たら = if (purely imaginary)\n\nBoundary condition:\nないかぎり = unless (hard requirement)",
     deepDive:{title:"The Japanese Philosophy of Regret",
      text:"Japanese has rich vocabulary for regret because reflection on past actions is valued:\n\n後悔(こうかい) (koukai) = regret about actions\n反省(はんせい) (hansei) = self-reflection and self-criticism\n残念(ざんねん) (zannen) = regrettable/unfortunate\n\nThe grammar supports this: ばよかった and たらよかったのに provide precise ways to articulate what should have been different. However, the proverb 後悔先(こうかいさき)に立(た)たず (regret comes too late) teaches that dwelling on the past is futile. The Japanese ideal is: reflect, learn, and move forward."}},

    {type:"match", pairs:[{trg:"ばよかった",src:"should have done"},{trg:"なければよかった",src:"should not have done"},{trg:"たらよかったのに",src:"if only (emotional wish)"},{trg:"もしも",src:"if (strong hypothetical)"}]},

    {type:"fb", s:"もしも宝(たから)くじに{1}ら、世界(せかい)旅行(りょこう)に行(い)きたいです。\n(If I won the lottery, I would want to travel the world.)", a:"当(あ)たった", opts:["当(あ)たった","当(あ)たる","当(あ)たって","当(あ)たれば"], sSrc:"If I won the lottery, I would want to travel the world.",
     hint:"The たら conditional is formed from the past tense + ら. 当(あ)たる past = 当(あ)たった."},

    {type:"match", pairs:[{trg:"宝(たから)くじ",src:"lottery"},{trg:"後悔(こうかい)する",src:"to regret"},{trg:"あのとき",src:"at that time"},{trg:"ないかぎり",src:"unless"}]},

    {type:"mc", q:"練習(れんしゅう)しないかぎり上手(じょうず)になりません means:", opts:["If you practice, you will improve","Unless you practice, you will not improve","Practicing is not necessary","You practiced and improved"], ans:"Unless you practice, you will not improve",
     hint:"ないかぎり sets a hard boundary: the result ONLY changes if the condition is met."},
  {type:"match",pairs:[{trg:"世界(せかい)旅行(りょこう)",src:"world travel / trip around the world"}]}]
};
export default BATCH2_L_1;
