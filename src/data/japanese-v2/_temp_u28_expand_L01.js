// Unit 28 Expansion — Lesson 3: Academic Writing Style
const LESSON_3 = {
  id:"jav2_u28l3", title:"がくじゅつぶん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"Academic Writing Style",
     desc:"Japanese academic writing has strict conventions: impersonal tone, nominalized verbs, hedging expressions, and specific citation patterns. Master the constructions that make academic Japanese distinct from everyday writing and speaking.",
     goals:["Use academic hedging with とかんがえられる, とおもわれる","Apply nominalizations with こと and の","Write using impersonal academic constructions"]},

    {type:"teach", trg:"とかんがえられる", src:"it is thought that / it can be considered", pos:"verb", gender:null,
     note:"Passive form of かんがえる (think). Standard academic hedging.\nAvoids stating opinions as absolute facts.",
     example:"A: このけっかはじっけんのせいかくさによるものとかんがえられる。\nB: ほかのかのうせいはないのですか？",
     exampleSrc:"A: This result is thought to be due to the accuracy of the experiment.\nB: Are there no other possibilities?",
     funFact:"Academic Japanese avoids direct assertions. Instead of これはAだ (This is A), papers write これはAとかんがえられる (This is thought to be A). The passive voice creates distance between the writer and the claim. This hedging is not weakness; it signals intellectual humility and awareness that conclusions are provisional."},

    {type:"teach", trg:"とおもわれる", src:"it seems / it appears that", pos:"verb", gender:null,
     note:"Passive of おもう (think). Slightly less certain than とかんがえられる.\nIndicates the writer's tentative assessment.",
     example:"A: このけいこうはこんごもつづくとおもわれる。\nB: なにかこんきょはありますか？",
     exampleSrc:"A: It appears that this trend will continue going forward.\nB: Is there any evidence?",
     funFact:"とおもわれる and とかんがえられる are the twin pillars of academic hedging. とかんがえられる is more analytical (based on reasoning), while とおもわれる is more observational (based on impression). Both avoid the directness of だ or である. Students learning academic writing must unlearn the direct style of spoken Japanese."},

    {type:"teach", trg:"けっか", src:"result / outcome", pos:"noun", gender:null,
     note:"Kanji: 結果. じっけんのけっか = experimental results.\nけっかとして = as a result.",
     example:"A: ちょうさのけっかをはっぴょうします。\nB: どのようなけっかがえられましたか？",
     exampleSrc:"A: We will present the survey results.\nB: What results were obtained?",
     funFact:"結果 uses 結 (tie/bind) and 果 (fruit/result). Results are the fruit of your work. In academic writing, けっか appears in a fixed structure: 調査の結果、...ことがわかった (As a result of investigation, it was found that...). The word pairs with many verbs: けっかをだす (produce results), けっかをまつ (await results)."},

    {type:"mc", q:"とかんがえられる is used in academic writing to:", opts:["Present claims with intellectual caution","Make strong definitive statements","Express personal feelings","Ask questions to the reader"], ans:"Present claims with intellectual caution",
     hint:"The passive of think creates distance between the writer and the assertion."},

    {type:"teach", trg:"〜ことがわかった", src:"it was found that ~ / it became clear that ~", pos:"part", gender:null,
     note:"こと (fact/thing) + がわかった (was understood).\nStandard academic phrasing for presenting findings.",
     example:"A: ちょうさのけっか、ろんぶんのすうがねんねんへっていることがわかった。\nB: その原因はなんでしょうか。",
     exampleSrc:"A: As a result of the survey, it was found that the number of papers is decreasing year by year.\nB: What might be the cause?",
     funFact:"...ことがわかった is the standard formula for presenting research findings. こと nominalizes the preceding clause (turns it into a noun phrase), and わかった means 'was understood.' This structure appears in virtually every academic paper's results section. The more formal version uses 明らかになった (became clear)."},

    {type:"teach", trg:"あきらかにする", src:"to clarify / to make clear / to reveal", pos:"verb", gender:null,
     note:"Kanji: 明らかにする. あきらか (clear) + にする (to make).\nほんけんきゅうではAをあきらかにする = this research clarifies A.",
     example:"A: このけんきゅうではきこうへんどうのえいきょうをあきらかにする。\nB: だいじなけんきゅうですね。",
     exampleSrc:"A: This research aims to clarify the impact of climate change.\nB: That is important research.",
     funFact:"明らかにする is the go-to verb for stating research objectives. It appears in the introduction of nearly every Japanese academic paper. The related passive あきらかにされた (has been clarified) is used when citing previous research. The nominal form 解明 (kaimei, elucidation) is even more formal and appears in hard science papers."},

    {type:"fb", s:"このけいこうはこんごもつづく___。\n(It appears that this trend will continue going forward.)", a:"とおもわれる", opts:["とおもわれる","とかんがえられる","ことがわかった","である"], sSrc:"It appears that this trend will continue going forward.",
     hint:"The passive hedging form based on おもう, expressing a tentative observation."},

    {type:"teach", trg:"〜にもとづく", src:"based on ~ / on the basis of ~", pos:"part", gender:null,
     note:"Kanji: 基づく. Formal: にもとづいて (te-form).\nデータにもとづく = based on data.",
     example:"A: このけつろんはじっけんデータにもとづいている。\nB: じゅうぶんなデータりょうですか？",
     exampleSrc:"A: This conclusion is based on experimental data.\nB: Is it a sufficient amount of data?",
     funFact:"基づく uses 基 (base/foundation) and the verb つく (attach). Something attached to a foundation. In academic writing, claiming something にもとづく adds credibility: it signals your argument rests on solid ground. The attributive form にもとづいた is also common: データにもとづいたけつろん (a data-based conclusion)."},

    {type:"teach", trg:"じっけん", src:"experiment", pos:"noun", gender:null,
     note:"Kanji: 実験. じっけんする = to experiment.\nじっけんけっか = experimental results. じっけんしつ = laboratory.",
     example:"A: じっけんをなんどもくりかえしました。\nB: さいげんせいはかくにんできましたか？",
     exampleSrc:"A: We repeated the experiment many times.\nB: Was reproducibility confirmed?",
     funFact:"実験 uses 実 (real/true) and 験 (test/experience). A real test. Japanese universities have a strong じっけん culture, especially in science and engineering. Laboratory work (じっけんじっしゅう) is a core part of undergraduate education. The phrase さいげんせい (reproducibility) is a fundamental scientific value."},

    {type:"mc", q:"...ことがわかった is used in academic papers to:", opts:["Report a discovery from research","Ask a question","Make a hypothesis","Describe a method"], ans:"Report a discovery from research",
     hint:"This pattern presents what became understood as a result of investigation."},

    {type:"teach", trg:"さいげんせい", src:"reproducibility", pos:"noun", gender:null,
     note:"さいげん (reproduction) + せい (nature/quality).\nFundamental to scientific method: can others get the same result?",
     example:"A: このじっけんにはさいげんせいがあるとかんがえられる。\nB: たのけんきゅうしゃもかくにんしたのですか？",
     exampleSrc:"A: This experiment is considered to have reproducibility.\nB: Did other researchers also confirm it?",
     funFact:"再現性 is a cornerstone of scientific credibility. Japan, like the global scientific community, has faced さいげんせいの危機 (reproducibility crisis), where published results cannot be replicated. The 2014 STAP cell controversy, involving fabricated data at RIKEN, brought さいげんせい into mainstream Japanese vocabulary."},

    {type:"fb", s:"このけつろんはじっけんデータに___いる。\n(This conclusion is based on experimental data.)", a:"もとづいて", opts:["もとづいて","したがって","おいて","よって"], sSrc:"This conclusion is based on experimental data.",
     hint:"The te-form of the verb meaning to be founded on or grounded in something."},

    {type:"teach", trg:"かせつ", src:"hypothesis", pos:"noun", gender:null,
     note:"Kanji: 仮説. 仮 (temporary/provisional) + 説 (theory).\nかせつをたてる = to form a hypothesis.",
     example:"A: まずかせつをたて、じっけんでけんしょうします。\nB: かがくてきほうほうのきほんですね。",
     exampleSrc:"A: First we form a hypothesis and verify it through experiments.\nB: That is the basis of the scientific method.",
     funFact:"仮説 uses 仮 (provisional) and 説 (theory). A hypothesis is a temporary theory awaiting proof. The scientific method in Japanese follows: かせつ (hypothesis), じっけん (experiment), けんしょう (verification), けつろん (conclusion). The verb けんしょうする (to verify) is critical: unverified hypotheses remain just educated guesses."},

    {type:"match", pairs:[{trg:"とかんがえられる",src:"it is thought that"},{trg:"とおもわれる",src:"it appears that"},{trg:"ことがわかった",src:"it was found that"},{trg:"あきらかにする",src:"to clarify/reveal"}]},

    {type:"mc", q:"にもとづく in academic writing signals that a claim:", opts:["Rests on evidence or a specific foundation","Is purely speculative","Was overturned by new data","Contradicts previous findings"], ans:"Rests on evidence or a specific foundation",
     hint:"基 means base/foundation, indicating the argument is grounded on something."},

    {type:"match", pairs:[{trg:"じっけん",src:"experiment"},{trg:"さいげんせい",src:"reproducibility"},{trg:"かせつ",src:"hypothesis"},{trg:"にもとづく",src:"based on"}]},
  ]
};
export default LESSON_3;
