// Unit 28 Expansion. Lesson 3: Academic Writing Style
const LESSON_3 = {
  id:"jav2_u28l3", title:"がくじゅつぶん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"Academic Writing Style",
     desc:"Japanese academic writing has strict conventions: impersonal tone, nominalized verbs, hedging expressions, and specific citation patterns. Master the constructions that make academic Japanese distinct from everyday writing and speaking.",
     goals:["Use academic hedging with とかんがえられる, とおもわれる","Apply nominalizations with こと and の","Write using impersonal academic constructions"]},

    {type:"teach", trg:"とかんがえられる", src:"it is thought that / it can be considered", pos:"verb", gender:null,
     note:"Passive form of かんがえる (think). Standard academic hedging.\nAvoids stating opinions as absolute facts.",
     example:"A: このけっかはじっけんのせいかくさによるものとかんがえられる。\nB: ほかのかのうせいはないのですか？\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: This result is thought to be due to the accuracy of the experiment.\nB: Are there no other possibilities?\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Academic Japanese avoids direct assertions. Instead of これはAだ (This is A), papers write これはAとかんがえられる (This is thought to be A). The passive voice creates distance between the writer and the claim. This hedging is not weakness; it signals intellectual humility and awareness that conclusions are provisional."},

    {type:"teach", trg:"とおもわれる", src:"it seems / it appears that", pos:"verb", gender:null,
     note:"Passive of おもう (think). Slightly less certain than とかんがえられる.\nIndicates the writer's tentative assessment.",
     example:"A: このけいこうはこんごもつづくとおもわれる。\nB: なにかこんきょはありますか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: It appears that this trend will continue going forward.\nB: Is there any evidence?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"とおもわれる and とかんがえられる are the twin pillars of academic hedging. とかんがえられる is more analytical (based on reasoning), while とおもわれる is more observational (based on impression). Both avoid the directness of だ or である. Students learning academic writing must unlearn the direct style of spoken Japanese."},

    {type:"teach", trg:"けっか", src:"result / outcome", pos:"noun", gender:null,
     note:"Kanji: 結果. じっけんのけっか = experimental results.\nけっかとして = as a result.",
     example:"A: ちょうさのけっかをはっぴょうします。\nB: どのようなけっかがえられましたか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: We will present the survey results.\nB: What results were obtained?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"結果 uses 結 (tie/bind) and 果 (fruit/result). Results are the fruit of your work. In academic writing, けっか appears in a fixed structure: 調査の結果、...ことがわかった (As a result of investigation, it was found that...). The word pairs with many verbs: けっかをだす (produce results), けっかをまつ (await results)."},

    {type:"mc", q:"とかんがえられる is used in academic writing to:", opts:["Present claims with intellectual caution","Make strong definitive statements","Express personal feelings","Ask questions to the reader"], ans:"Present claims with intellectual caution",
     hint:"The passive of think creates distance between the writer and the assertion."},

    {type:"teach", trg:"〜ことがわかった", src:"it was found that ~ / it became clear that ~", pos:"part", gender:null,
     note:"こと (fact/thing) + がわかった (was understood).\nStandard academic phrasing for presenting findings.",
     example:"A: ちょうさのけっか、ろんぶんのすうがねんねんへっていることがわかった。\nB: その原因はなんでしょうか。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: As a result of the survey, it was found that the number of papers is decreasing year by year.\nB: What might be the cause?\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"...ことがわかった is the standard formula for presenting research findings. こと nominalizes the preceding clause (turns it into a noun phrase), and わかった means 'was understood.' This structure appears in virtually every academic paper's results section. The more formal version uses 明らかになった (became clear)."},

    {type:"teach", trg:"あきらかにする", src:"to clarify / to make clear / to reveal", pos:"verb", gender:null,
     note:"Kanji: 明らかにする. あきらか (clear) + にする (to make).\nほんけんきゅうではAをあきらかにする = this research clarifies A.",
     example:"A: このけんきゅうではきこうへんどうのえいきょうをあきらかにする。\nB: だいじなけんきゅうですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This research aims to clarify the impact of climate change.\nB: That is important research.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"明らかにする is the go-to verb for stating research objectives. It appears in the introduction of nearly every Japanese academic paper. The related passive あきらかにされた (has been clarified) is used when citing previous research. The nominal form 解明 (kaimei, elucidation) is even more formal and appears in hard science papers."},

    {type:"fb", s:"このけいこうはこんごもつづく{1}。\n(It appears that this trend will continue going forward.)", a:"とおもわれる", opts:["とおもわれる","とかんがえられる","ことがわかった","である"], sSrc:"It appears that this trend will continue going forward.",
     hint:"The passive hedging form based on おもう, expressing a tentative observation."},

    {type:"teach", trg:"〜にもとづく", src:"based on ~ / on the basis of ~", pos:"part", gender:null,
     note:"Kanji: 基づく. Formal: にもとづいて (te-form).\nデータにもとづく = based on data.",
     example:"A: このけつろんはじっけんデータにもとづいている。\nB: じゅうぶんなデータりょうですか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: This conclusion is based on experimental data.\nB: Is it a sufficient amount of data?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"基づく uses 基 (base/foundation) and the verb つく (attach). Something attached to a foundation. In academic writing, claiming something にもとづく adds credibility: it signals your argument rests on solid ground. The attributive form にもとづいた is also common: データにもとづいたけつろん (a data-based conclusion)."},

    {type:"teach", trg:"じっけん", src:"experiment", pos:"noun", gender:null,
     note:"Kanji: 実験. じっけんする = to experiment.\nじっけんけっか = experimental results. じっけんしつ = laboratory.",
     example:"A: じっけんをなんどもくりかえしました。\nB: さいげんせいはかくにんできましたか？\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We repeated the experiment many times.\nB: Was reproducibility confirmed?\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"実験 uses 実 (real/true) and 験 (test/experience). A real test. Japanese universities have a strong じっけん culture, especially in science and engineering. Laboratory work (じっけんじっしゅう) is a core part of undergraduate education. The phrase さいげんせい (reproducibility) is a fundamental scientific value."},

    {type:"mc", q:"...ことがわかった is used in academic papers to:", opts:["Make a hypothesis","Report a discovery from research","Describe a method","Ask a question"], ans:"Report a discovery from research",
     hint:"This pattern presents what became understood as a result of investigation."},

    {type:"teach", trg:"さいげんせい", src:"reproducibility", pos:"noun", gender:null,
     note:"さいげん (reproduction) + せい (nature/quality).\nFundamental to scientific method: can others get the same result?",
     example:"A: このじっけんにはさいげんせいがあるとかんがえられる。\nB: たのけんきゅうしゃもかくにんしたのですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: This experiment is considered to have reproducibility.\nB: Did other researchers also confirm it?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"再現性 is a cornerstone of scientific credibility. Japan, like the global scientific community, has faced さいげんせいの危機 (reproducibility crisis), where published results cannot be replicated. The 2014 STAP cell controversy, involving fabricated data at RIKEN, brought さいげんせい into mainstream Japanese vocabulary."},

    {type:"fb", s:"このけつろんはじっけんデータに{1}いる。\n(This conclusion is based on experimental data.)", a:"もとづいて", opts:["もとづいて","したがって","おいて","よって"], sSrc:"This conclusion is based on experimental data.",
     hint:"The te-form of the verb meaning to be founded on or grounded in something."},

    {type:"teach", trg:"かせつ", src:"hypothesis", pos:"noun", gender:null,
     note:"Kanji: 仮説. 仮 (temporary/provisional) + 説 (theory).\nかせつをたてる = to form a hypothesis.",
     example:"A: まずかせつをたて、じっけんでけんしょうします。\nB: かがくてきほうほうのきほんですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: First we form a hypothesis and verify it through experiments.\nB: That is the basis of the scientific method.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"仮説 uses 仮 (provisional) and 説 (theory). A hypothesis is a temporary theory awaiting proof. The scientific method in Japanese follows: かせつ (hypothesis), じっけん (experiment), けんしょう (verification), けつろん (conclusion). The verb けんしょうする (to verify) is critical: unverified hypotheses remain just educated guesses."},

    {type:"match", pairs:[{trg:"とかんがえられる",src:"it is thought that"},{trg:"とおもわれる",src:"it appears that"},{trg:"ことがわかった",src:"it was found that"},{trg:"あきらかにする",src:"to clarify/reveal"}]},

    {type:"mc", q:"にもとづく in academic writing signals that a claim:", opts:["Was overturned by new data","Contradicts previous findings","Rests on evidence or a specific foundation","Is purely speculative"], ans:"Rests on evidence or a specific foundation",
     hint:"基 means base/f..., indicating the argument is grounded on something."},

    {type:"match", pairs:[{trg:"じっけん",src:"experiment"},{trg:"さいげんせい",src:"reproducibility"},{trg:"かせつ",src:"hypothesis"},{trg:"にもとづく",src:"based on"}]},
  ]
};
export default LESSON_3;
