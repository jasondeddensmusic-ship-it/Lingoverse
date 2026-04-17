// Batch 8 – Unit 24 (B1.3 Connectors): Formal Conjunctions & Transitions
const BATCH8_L1 = {
  id:"jav2_u24l_b8_1", title:"ぶんしょうのせつぞく", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうのせつぞく",
     desc:"Master formal conjunctions and transitional expressions used in writing and speeches. These connectors elevate your Japanese from conversational to academic level.",
     goals:["Use formal conjunctions in essays and reports","Connect complex arguments logically","Transition smoothly between ideas"]},

    {type:"teach", trg:"したがって", src:"therefore / consequently / accordingly", pos:"conj", gender:null,
     note:"Formal version of だから. Used in writing and presentations.\nしたがって、けつろんとして = therefore, in conclusion.",
     example:"A: コストがじょうしょうしました。したがって、かかくをみなおすひつようがあります。\nB: りかいしました。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: Costs have risen. Therefore, we need to review prices.\nB: Understood.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"したがって comes from したがう (to follow). It literally means 'following that.' It is the standard formal therefore in academic papers, business reports, and news. だから is too casual for writing. そのため is slightly less formal than したがって."},

    {type:"teach", trg:"すなわち", src:"in other words / namely / that is to say", pos:"conj", gender:null,
     note:"Formal rephrasing connector. Very academic.\nすなわち、つまり = in other words.",
     example:"A: このけっかは、すなわちかせつがただしいことをしめしています。\nB: なるほど。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: This result, in other words, shows the hypothesis was correct.\nB: I see.\nA: How was it?\nB: It was very good.",
     funFact:"すなわち (即ち) is highly formal and mostly written. It restates something in clearer terms. The hierarchy: つまり (casual) > いいかえると (standard) > すなわち (formal/academic). Using すなわち in casual speech sounds comically formal, like speaking in essay style."},

    {type:"teach", trg:"にもかかわらず", src:"despite / in spite of / nevertheless", pos:"conj", gender:null,
     note:"Very formal. More emphatic than のに.\nどりょくにもかかわらず = despite efforts.",
     example:"A: けいこくにもかかわらず、じこがはっせいしました。\nB: たいさくがふじゅうぶんでした。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Despite warnings, an accident occurred.\nB: The measures were insufficient.\nA: When was it?\nB: It was last summer.",
     funFact:"にもかかわらず (にも関わらず) is one of the most formal concessive expressions. It emphasizes the contradiction between expectation and reality. In news: たいふうにもかかわらずしあいはおこなわれた (despite the typhoon, the match was held). It appears frequently in JLPT N2 reading passages."},

    {type:"teach", trg:"いっぽう", src:"on the other hand / meanwhile / while", pos:"conj", gender:null,
     note:"Kanji: 一方. Contrasts two situations.\nAにゅうがくしゃがふえる. いっぽう, Bはへっている.",
     example:"A: とかいのじんこうはふえています。いっぽう、いなかではげんしょうしています。\nB: ちいきかくさですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Urban population is increasing. On the other hand, rural areas are declining.\nB: That is regional disparity.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"いっぽう (一方) literally means 'one direction.' It introduces a contrasting perspective. In academic writing, いっぽうで (on one hand) is paired with たほうで (on the other hand) for balanced arguments. News broadcasts use いっぽう constantly to present multiple viewpoints."},

    {type:"teach", trg:"さらに", src:"furthermore / in addition / moreover", pos:"adv", gender:null,
     note:"Kanji: 更に. Adds information that strengthens the previous point.\nさらに、もうひとつ = furthermore, one more thing.",
     example:"A: うりあげがぞうかしました。さらに、コストもさくげんできました。\nB: すばらしいけっかですね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: Sales increased. Furthermore, we were able to reduce costs.\nB: That is a wonderful result.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"さらに intensifies and adds. It is stronger than そして (and then) and more formal than それに (additionally). In business presentations, さらに introduces each additional positive point for maximum impact. さらなるせいちょう (further growth) is a common corporate goal phrase."},

    {type:"mc", q:"Which connector means 'therefore' in formal writing?", opts:["したがって","しかし","さらに","いっぽう"], ans:"したがって",
     hint:"This formal conjunction replaces だから in academic and business writing."},

    {type:"teach", trg:"たとえば", src:"for example / for instance", pos:"adv", gender:null,
     note:"Kanji: 例えば. Introduces examples.\nたとえば、つぎのようなれいがあります = for example, there are cases like the following.",
     example:"A: にほんにはおもしろいぶんかがあります。たとえば、おんせんぶんかです。\nB: おんせんだいすきです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Japan has interesting cultures. For example, hot spring culture.\nB: I love hot springs.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"たとえば is one of the first formal connectors students master. It comes from たとえる (to compare/liken). In essays, たとえば introduces concrete examples to support abstract claims. JLPT tests frequently ask you to identify what たとえば refers to."},

    {type:"teach", trg:"つまり", src:"in short / in other words / that is", pos:"conj", gender:null,
     note:"Summarizes or rephrases the previous statement.\nつまり、こういうことです = in short, this is what it means.",
     example:"A: しゅうにゅうよりしゅっぴのほうがおおい。つまり、あかじです。\nB: たいさくがひつようですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Expenses exceed income. In short, it is a deficit.\nB: Countermeasures are needed.\nA: How long did it take?\nB: About two hours.",
     funFact:"つまり comes from つまる (to be packed/blocked), implying condensing information. It is the most natural rephrasing word for speech. In conversations, つまり、どういうこと？(so what does that mean?) is a common request for clarification. It is less formal than すなわち."},

    {type:"teach", trg:"むしろ", src:"rather / if anything / on the contrary", pos:"adv", gender:null,
     note:"Corrects or offers a better alternative.\nむしろ、ぎゃくです = rather, it is the opposite.",
     example:"A: このほうほうはむずかしいですか？\nB: むしろ、かんたんだとおもいます。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Is this method difficult?\nB: Rather, I think it is easy.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"むしろ introduces a correction or preferred alternative. AよりBではなく、むしろCだ (not B over A, but rather C). It is assertive without being aggressive. In debates, むしろ reframes the discussion. Casual equivalent: どちらかというと (if I had to say)."},

    {type:"teach", trg:"もっとも", src:"however / although / that said", pos:"conj", gender:null,
     note:"Introduces a qualification or limitation.\nAdds nuance after a strong statement.",
     example:"A: このけいかくはうまくいくとおもいます。もっとも、リスクもあります。\nB: バランスがだいじですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I think this plan will work. However, there are risks too.\nB: Balance is important.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"もっとも as a conjunction means 'that said' or 'although.' It is different from もっとも as an adjective meaning 'most reasonable.' The conjunction use softens a preceding strong claim by adding a fair qualifier. It shows balanced, mature thinking in Japanese discourse."},

    {type:"teach", trg:"けっきょく", src:"in the end / after all / ultimately", pos:"adv", gender:null,
     note:"Kanji: 結局. Summarizes an outcome.\nけっきょく、どうなったの？ = so what happened in the end?",
     example:"A: いろいろかんがえましたが、けっきょくそのままにしました。\nB: それがいちばんよかったかもしれませんね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I thought about it a lot, but in the end I left it as is.\nB: That may have been the best choice.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"けっきょく (結局) combines 結 (tie/conclude) and 局 (bureau/situation). It wraps up a narrative with the final result. けっきょくのところ (ultimately speaking) is a slightly more formal variant. In storytelling, けっきょく introduces the punchline or conclusion."},

    {type:"teach", trg:"そもそも", src:"in the first place / to begin with / fundamentally", pos:"adv", gender:null,
     note:"Questions the basic premise. そもそもなぜ = why in the first place.\nUsed to go back to fundamentals.",
     example:"A: そもそも、なぜこのもんだいがおきたのですか？\nB: きじゅんがあいまいだったからです。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: In the first place, why did this problem occur?\nB: Because the standards were ambiguous.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"そもそも rewinds the conversation to the root cause. It is powerful in debates and problem-solving. そもそもろん (fundamental argument) questions whether the premise is correct. Using そもそも shows analytical thinking. It can sound challenging, so tone matters."},

    {type:"fb", s:"コストがじょうしょうしました。{1}、かかくをみなおすひつようがあります。\n(Costs have risen. Therefore, we need to review prices.)", a:"したがって", opts:["したがって","しかし","さらに","そもそも"], sSrc:"Costs have risen. Therefore, we need to review prices.",
     hint:"This formal connector introduces a logical consequence."},

    {type:"teach", trg:"ようするに", src:"in summary / to sum up / the point is", pos:"adv", gender:null,
     note:"ようする = to require + に. ようするに、こうだ = the point is this.\nSlightly more casual than つまり in some contexts.",
     example:"A: ようするに、よさんがたりないということですね？\nB: そのとおりです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: In summary, you mean the budget is insufficient?\nB: Exactly.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"ようするに cuts through complexity to reach the core point. In meetings, ようするに signals 'let me get to the point.' It can sound slightly impatient if overused. Paired with ということですね (so you mean...), it confirms understanding efficiently."},

    {type:"teach", trg:"いずれにしても", src:"in any case / either way / regardless", pos:"conj", gender:null,
     note:"Formal version of どちらにしても.\nConcludes regardless of the scenario.",
     example:"A: いずれにしても、きめなければなりません。\nB: そうですね。もうじかんがありません。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: In any case, we must decide.\nB: Right. There is no more time.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"いずれにしても is elegant formal Japanese. いずれ means 'which' or 'someday.' The expression means 'no matter which way.' It is useful for concluding discussions where multiple scenarios were considered. Business meetings often end with いずれにしても followed by the final decision."},

    {type:"match", pairs:[{trg:"したがって",src:"therefore"},{trg:"さらに",src:"furthermore"},{trg:"むしろ",src:"rather"},{trg:"けっきょく",src:"in the end"},{trg:"そもそも",src:"in the first place"}],
     hint:"Match each formal connector with its English meaning."},

    {type:"mc", q:"What does にもかかわらず express?", opts:["Despite / in spite of","Because of","In addition to","As a result of"], ans:"Despite / in spite of",
     hint:"This very formal expression emphasizes a contradiction between expectation and reality."},

    {type:"fb", s:"{1}、なぜこのもんだいがおきたのですか？\n(In the first place, why did this problem occur?)", a:"そもそも", opts:["そもそも","したがって","さらに","つまり"], sSrc:"In the first place, why did this problem occur?",
     hint:"This word questions the fundamental premise and takes the discussion back to basics."},

    {type:"mc", q:"Which is the most formal way to say 'in other words'?", opts:["すなわち","つまり","ようするに","けっきょく"], ans:"すなわち",
     hint:"This connector is primarily used in academic papers and very formal writing."}
  ]
};
export default BATCH8_L1;
