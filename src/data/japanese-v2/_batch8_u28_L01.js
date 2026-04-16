// Batch 8 – Unit 28 (B2.2 Written vs Spoken): Formal Writing Patterns
const BATCH8_L1 = {
  id:"jav2_u28l_b8_1", title:"かきことばのパターン", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"かきことばのパターン",
     desc:"Master formal sentence-ending patterns and written-style expressions used in essays, reports, and official documents. These distinguish polished writing from casual speech.",
     goals:["Use formal sentence endings in writing","Recognize written vs spoken patterns","Apply academic and official writing conventions"]},

    {type:"teach", trg:"である", src:"is / are (written formal style)", pos:"verb", gender:null,
     note:"Formal written equivalent of だ/です.\nろんぶんではであるたいをつかう = essays use である style.",
     example:"A: にほんはしまぐにである。\nB: これがであるたいですか。",
     exampleSrc:"A: Japan is an island nation (written style).\nB: Is this the である style?",
     funFact:"である is the backbone of Japanese academic writing. While です/ます is polite speech, である is neutral-formal writing. Academic papers, newspaper editorials, and legal documents use である consistently. Mixing である and です/ます in one text is a common student error."},

    {type:"teach", trg:"において", src:"in / at / regarding (formal location/context)", pos:"part", gender:null,
     note:"Formal version of で (at/in). Very common in written Japanese.\nかいぎにおいて = at the meeting.",
     example:"A: このぶんやにおいてにほんはせかいをリードしている。\nB: ぎじゅつりょくがたかいですね。",
     exampleSrc:"A: In this field, Japan leads the world.\nB: The technological capability is high.",
     funFact:"において replaces the particle で in formal writing. It elevates the register instantly. にほんにおいて (in Japan), げんざいにおいて (at present), このてんにおいて (regarding this point). Overusing it in speech sounds comically stiff, like speaking in essay style."},

    {type:"teach", trg:"にかんして", src:"regarding / concerning / about (formal)", pos:"part", gender:null,
     note:"Formal version of について.\nこのもんだいにかんして = regarding this problem.",
     example:"A: かんきょうもんだいにかんしてぎろんします。\nB: さんかしゃはだれですか？",
     exampleSrc:"A: We will discuss regarding environmental issues.\nB: Who are the participants?",
     funFact:"にかんして and について are near-synonyms, but にかんして is more formal and often used in legal, academic, and business documents. かんしてかんし (関してかんし, double kanji) looks impressive in writing. にかんするちょうさ (survey regarding) is standard in research."},

    {type:"teach", trg:"にともなう", src:"accompanying / along with / as a result of", pos:"verb", gender:null,
     note:"Formal. けいざいせいちょうにともなう = accompanying economic growth.\nChanges that come alongside something.",
     example:"A: こうれいかにともないいりょうひがぞうかしている。\nB: ふたんがおおきいですね。",
     exampleSrc:"A: Medical costs are increasing along with the aging population.\nB: The burden is heavy.",
     funFact:"にともなう (に伴う) is essential in formal Japanese writing about cause-and-effect relationships. It describes changes that naturally accompany other changes: ぎじゅつのしんぽにともなう (accompanying technological progress). Unlike ために (because of), ともなう implies a parallel, connected change rather than direct causation."},

    {type:"teach", trg:"にすぎない", src:"merely / nothing more than / only", pos:"verb", gender:null,
     note:"Minimizes something. いちれいにすぎない = merely one example.\nFrom すぎる (to exceed) + ない.",
     example:"A: これはかせつにすぎない。しょうこがひつようだ。\nB: じっけんでたしかめましょう。",
     exampleSrc:"A: This is merely a hypothesis. Evidence is needed.\nB: Let us verify with experiments.",
     funFact:"にすぎない downplays significance: これははじまりにすぎない (this is merely the beginning), いちぶにすぎない (merely a part). It is a powerful rhetorical tool in essays for arguing that something is less important than assumed. Academic writing uses it frequently."},

    {type:"mc", q:"What is the formal written equivalent of です/だ?", opts:["である","でございます","でした","であります"], ans:"である",
     hint:"This style is used in academic papers, editorials, and legal documents."},

    {type:"teach", trg:"にもとづく", src:"based on / grounded in / in accordance with", pos:"verb", gender:null,
     note:"Formal. ほうりつにもとづく = based on law.\nKanji: に基づく.",
     example:"A: けんぽうにもとづいてはんだんする。\nB: ほうてきこんきょがじゅうようですね。",
     exampleSrc:"A: The judgment is based on the constitution.\nB: Legal basis is important.",
     funFact:"にもとづく is indispensable in legal and administrative Japanese. じじつにもとづく (based on facts), データにもとづく (data-based), and けいけんにもとづく (experience-based) all use this pattern. The nominalizing form にもとづいた also appears: じじつにもとづいたはなし (a story based on facts)."},

    {type:"teach", trg:"をつうじて", src:"through / throughout / via (formal)", pos:"part", gender:null,
     note:"Formal version of をとおして.\nねんかんをつうじて = throughout the year.",
     example:"A: ボランティアかつどうをつうじておおくのことをまなんだ。\nB: けいけんはたからですね。",
     exampleSrc:"A: I learned many things through volunteer activities.\nB: Experience is treasure.",
     funFact:"をつうじて is the formal register of をとおして (through). Both mean 'by means of' or 'throughout,' but つうじて appears in written essays and speeches. れきしをつうじて (throughout history) and たいわをつうじて (through dialogue) are common in academic and diplomatic writing."},

    {type:"teach", trg:"にさいして", src:"on the occasion of / when / in doing", pos:"part", gender:null,
     note:"Formal. そつぎょうにさいして = on the occasion of graduation.\nKanji: に際して.",
     example:"A: かいぎょうにさいしてごあいさつもうしあげます。\nB: おめでとうございます。",
     exampleSrc:"A: On the occasion of the opening, I offer greetings.\nB: Congratulations.",
     funFact:"にさいして marks formal occasions and important moments. It appears in speeches: そつぎょうにさいして (at graduation), しゅうにんにさいして (upon taking office), ぼうねんかいにさいして (at the year-end party). It is too formal for everyday use but essential for official and ceremonial Japanese."},

    {type:"teach", trg:"べき", src:"should / ought to", pos:"part", gender:null,
     note:"Formal obligation. するべきだ = should do.\nLess personal than したほうがいい.",
     example:"A: わたしたちはかんきょうをまもるべきである。\nB: いぎなしです。",
     exampleSrc:"A: We should protect the environment.\nB: No objection.",
     funFact:"べき is the go-to formal recommendation. するべき vs. すべき are both acceptable (すべき is slightly more formal). べきではない (should not) is the negative. In essays, べきだ concludes arguments with conviction. するべきかどうか (whether one should or not) frames dilemmas."},

    {type:"teach", trg:"ざるをえない", src:"have no choice but to / cannot help but", pos:"verb", gender:null,
     note:"Formal reluctant obligation. みとめざるをえない = have to acknowledge.\nStronger than しかたがない.",
     example:"A: コストさくげんのためにリストラせざるをえない。\nB: くるしいけつだんですね。",
     exampleSrc:"A: We have no choice but to restructure to cut costs.\nB: It is a painful decision.",
     funFact:"ざるをえない expresses forced inevitability with reluctance. It uses classical negative ず (ない) plus ある (to exist) in negative: literally 'cannot exist without doing.' It appears in business decisions, legal judgments, and political statements. The tone is serious and resigned."},

    {type:"teach", trg:"にほかならない", src:"nothing other than / precisely because", pos:"verb", gender:null,
     note:"Emphatic identification. どりょくのけっかにほかならない = nothing other than the result of effort.\nStrong assertion.",
     example:"A: このせいこうはチームワークのたまものにほかならない。\nB: みなさんのおかげです。",
     exampleSrc:"A: This success is nothing other than the fruit of teamwork.\nB: It is thanks to everyone.",
     funFact:"にほかならない makes powerful assertions in formal writing. AはBにほかならない means 'A is precisely B.' It strips away ambiguity. In editorials: きょういくのもんだいにほかならない (it is nothing other than an education problem). It appears in JLPT N2 reading passages frequently."},

    {type:"fb", s:"かんきょうもんだい{1}ぎろんします。\n(We will discuss regarding environmental issues.)", a:"にかんして", opts:["にかんして","において","にもとづいて","をつうじて"], sSrc:"We will discuss regarding environmental issues.",
     hint:"This formal expression means 'regarding' or 'concerning' a topic."},

    {type:"teach", trg:"いっぽうで", src:"on one hand / while (contrasting)", pos:"conj", gender:null,
     note:"Formal contrast marker. Aであるいっぽうで、Bでもある = while A, also B.\nBalanced argument connector.",
     example:"A: べんりであるいっぽうで、リスクもある。\nB: バランスのよいはんだんがひつようですね。",
     exampleSrc:"A: While it is convenient, there are also risks.\nB: A balanced judgment is needed.",
     funFact:"いっぽうで (一方で) is a workhorse in academic and journalistic writing. It introduces the contrasting side of an argument for balanced presentation. News articles use it to show objectivity. In debates, failing to acknowledge the いっぽうで (the other side) makes arguments seem one-sided."},

    {type:"teach", trg:"をふまえて", src:"taking into account / based on / considering", pos:"verb", gender:null,
     note:"Formal. けっかをふまえて = based on the results.\nふまえる = to step on / to take into account.",
     example:"A: ちょうさけっかをふまえてけいかくをみなおします。\nB: よりよいけいかくになるでしょう。",
     exampleSrc:"A: We will review the plan based on the survey results.\nB: It will become a better plan.",
     funFact:"をふまえて literally means 'stepping on' information before proceeding. It implies careful consideration: じじょうをふまえたうえで (after considering the circumstances). Business plans include まえねんどのけっかをふまえて (based on previous year results). It shows thorough, evidence-based thinking."},

    {type:"match", pairs:[{trg:"において",src:"in/at (formal)"},{trg:"にかんして",src:"regarding (formal)"},{trg:"にもとづく",src:"based on"},{trg:"をつうじて",src:"through (formal)"},{trg:"べき",src:"should/ought to"}],
     hint:"Match each formal written pattern with its English meaning."},

    {type:"mc", q:"What does にすぎない express?", opts:["Merely / nothing more than (minimizing)","More than / exceeding","Absolutely / certainly","Possibly / perhaps"], ans:"Merely / nothing more than (minimizing)",
     hint:"This expression downplays the significance of something by saying it does not exceed a certain point."},

    {type:"fb", s:"わたしたちはかんきょうをまもる{1}である。\n(We should protect the environment.)", a:"べき", opts:["べき","はず","そう","らしい"], sSrc:"We should protect the environment.",
     hint:"This formal particle expresses strong obligation or recommendation."},

    {type:"mc", q:"What does ざるをえない express?", opts:["Having no choice but to (reluctant obligation)","Wanting to do something","Being able to do something","Refusing to do something"], ans:"Having no choice but to (reluctant obligation)",
     hint:"This pattern combines classical negative ず with forced inevitability."}
  ]
};
export default BATCH8_L1;
