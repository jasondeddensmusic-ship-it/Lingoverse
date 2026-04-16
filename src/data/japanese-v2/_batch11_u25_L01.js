// Batch 11 – Unit 25 (B2.1 Business): N2 Grammar Particles & Business Formality
const BATCH11_L1 = {
  id:"jav2_u25l_b11_1", title:"ビジネスのぶんぽう", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスのぶんぽう",
     desc:"Learn JLPT N2 grammar particles used in business and formal contexts. These expressions add precision and formality to your Japanese.",
     goals:["Use にとって, にたいして, において correctly","Express formal relationships and perspectives","Navigate N2 grammar in business contexts"]},

    {type:"teach", trg:"〜にとって", src:"for ~ / from the standpoint of ~", pos:"part", gender:null,
     note:"X にとって = for X / from X's perspective.\nわたしにとって = for me.",
     example:"A: がいこくじんにとって、かんじはむずかしいですか？\nB: はい、とてもむずかしいです。でもおもしろいです。",
     exampleSrc:"A: Is kanji difficult for foreigners?\nB: Yes, very difficult. But interesting.",
     funFact:"にとって frames a perspective: わたしにとって (for me), にほんじんにとって (for Japanese people). It is essential in JLPT N2 and appears frequently in essays comparing perspectives. The nuance is subjective: AにとってはBでも、CにとってはDだ (for A it's B, but for C it's D)."},

    {type:"teach", trg:"〜にたいして", src:"toward ~ / in contrast to ~", pos:"part", gender:null,
     note:"Two uses: 1) direction of action toward X. 2) contrast between X and Y.\nXにたいしてYは = in contrast to X, Y...",
     example:"A: おきゃくさまにたいしてていねいにたいおうしてください。\nB: はい、つねにれいぎただしくたいおうします。",
     exampleSrc:"A: Please respond politely toward customers.\nB: Yes, I will always respond courteously.",
     funFact:"にたいして has dual power: direction (きゃくにたいして = toward customers) and contrast (にほんにたいしてアメリカは = in contrast to Japan, America...). JLPT N2 tests both uses. The contrast meaning is especially useful in comparative essays and business analyses."},

    {type:"teach", trg:"〜において", src:"in / at (formal location/context)", pos:"part", gender:null,
     note:"Formal version of で. かいぎにおいて = at the meeting.\nUsed in official and academic contexts.",
     example:"A: このけんについては、つぎのかいぎにおいてぎろんします。\nB: わかりました。しりょうをじゅんびします。",
     exampleSrc:"A: This matter will be discussed at the next meeting.\nB: Understood. I will prepare the materials.",
     funFact:"において replaces で in formal writing: とうきょうにおいて (in Tokyo), げんだいしゃかいにおいて (in modern society), ビジネスのばにおいて (in business settings). Using it in casual speech sounds oddly stiff, but in reports and presentations it is standard. JLPT N2 staple."},

    {type:"teach", trg:"〜にかんして", src:"regarding ~ / concerning ~", pos:"part", gender:null,
     note:"Formal 'about.' にかんするほうこく = report regarding.\nMore formal than について.",
     example:"A: このもんだいにかんして、なにかいけんはありますか？\nB: はい、いくつかていあんがあります。",
     exampleSrc:"A: Regarding this problem, do you have any opinions?\nB: Yes, I have several suggestions.",
     funFact:"にかんして and について both mean 'regarding,' but にかんして is more formal and appears in official documents. にかんするちょうさ (survey regarding), にかんするほうりつ (law concerning). In business email, にかんしまして adds extra politeness. JLPT N2 tests the formality distinction."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~", pos:"part", gender:null,
     note:"Based on data/facts/rules.\nじじつにもとづいて = based on facts.",
     example:"A: ちょうさけっかにもとづいて、けいかくをたてました。\nB: データにもとづいたけいかくですね。",
     exampleSrc:"A: We created a plan based on survey results.\nB: A data-driven plan.",
     funFact:"にもとづいて (に基づいて) connects decisions to their evidence base. じじつにもとづく (fact-based), ほうりつにもとづく (law-based), けいけんにもとづく (experience-based). In Japanese business culture, data-driven decisions (データにもとづくいしけってい) are increasingly valued over intuition."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~", pos:"part", gender:null,
     note:"Two things change together.\nじんこうぞうかにともなって = along with population growth.",
     example:"A: ぎじゅつのはってんにともなって、せいかつもかわっています。\nB: たしかに、じゅうねんまえとはまったくちがいますね。",
     exampleSrc:"A: Along with technological development, lifestyles are changing too.\nB: Indeed, it is completely different from ten years ago.",
     funFact:"にともなって (に伴って) describes parallel changes: when X happens, Y naturally follows. It is common in social analysis: こうれいかにともなって (along with aging), グローバルかにともなって (along with globalization). This pattern elegantly captures the interconnectedness of social phenomena."},

    {type:"teach", trg:"〜をつうじて", src:"through ~ / throughout ~", pos:"part", gender:null,
     note:"Two uses: 1) by means of. 2) throughout a period.\nインターネットをつうじて = through the internet.",
     example:"A: ボランティアかつどうをつうじて、おおくのことをまなびました。\nB: すばらしいけいけんですね。",
     exampleSrc:"A: Through volunteer activities, I learned many things.\nB: That's a wonderful experience.",
     funFact:"をつうじて has two distinct uses: means (インターネットをつうじて = through the internet) and duration (いちねんをつうじて = throughout the year). JLPT N2 tests both. In business, をつうじてのていけい (partnership through) describes collaborative relationships."},

    {type:"teach", trg:"〜をもとに", src:"based on ~ / using ~ as a basis", pos:"part", gender:null,
     note:"Similar to にもとづいて but slightly more creative.\nじじつをもとにしたえいが = movie based on true events.",
     example:"A: じっさいのじけんをもとにしたしょうせつです。\nB: ノンフィクションですか？",
     exampleSrc:"A: It is a novel based on actual events.\nB: Is it non-fiction?",
     funFact:"をもとに suggests creative adaptation from a source: じっわをもとにした (based on a true story), でんとうをもとにした (based on tradition). にもとづいて is stricter (following facts precisely), while をもとに allows more creative interpretation. This subtle difference appears on JLPT N2."},

    {type:"teach", trg:"〜にしたがって", src:"as ~ / in accordance with ~", pos:"part", gender:null,
     note:"Two uses: 1) following rules. 2) proportional change.\nきそくにしたがって = according to the rules.",
     example:"A: じかんがたつにしたがって、にほんごがじょうずになりました。\nB: つづけることがだいじですね。",
     exampleSrc:"A: As time passed, my Japanese improved.\nB: Continuing is important.",
     funFact:"にしたがって (に従って) describes proportional change: Xがふえるにしたがって、Yもふえる (as X increases, Y increases too). It also means 'in accordance with': きそくにしたがって (following the rules). The dual meaning connects obedience (following rules) with natural progression (following trends)."},

    {type:"teach", trg:"〜にかかわらず", src:"regardless of ~ / irrespective of ~", pos:"part", gender:null,
     note:"Despite X, Y happens anyway.\nてんきにかかわらず = regardless of weather.",
     example:"A: てんきにかかわらず、イベントはおこないます。\nB: あめでもやるのですね。",
     exampleSrc:"A: The event will be held regardless of weather.\nB: So you'll do it even in rain.",
     funFact:"にかかわらず (に関わらず) dismisses a variable as irrelevant. せいべつにかかわらず (regardless of gender), ねんれいにかかわらず (regardless of age). It appears in anti-discrimination policies and event notices. The formal variant いかんにかかわらず is even more official."},

    {type:"teach", trg:"〜をはじめ", src:"starting with ~ / including ~", pos:"part", gender:null,
     note:"Lists the most prominent example.\nとうきょうをはじめ = starting with Tokyo.",
     example:"A: にほんにはとうきょうをはじめ、たくさんのみりょくてきなまちがあります。\nB: きょうとやおおさかもすてきですよね。",
     exampleSrc:"A: Japan has many attractive cities, starting with Tokyo.\nB: Kyoto and Osaka are wonderful too.",
     funFact:"をはじめ (を始め) names the prime example before broadening: さくらをはじめ、にほんにはきれいなはながたくさんあります (starting with cherry blossoms, Japan has many beautiful flowers). It elevates the first item as the representative example while implying there are many more."},

    // Quiz steps
    {type:"mc", q:"「にとって」はどんないみですか？",
     opts:["From someone's standpoint/perspective","Because of","Despite","Through"],
     ans:"From someone's standpoint/perspective",
     hint:"This particle frames a statement from a particular person's or group's point of view."},

    {type:"fb", s:"このもんだい{1}、なにかいけんはありますか？",
     a:["にかんして"],
     opts:["にかんして","にとって","において","にしたがって"],
     hint:"The speaker is asking for opinions 'regarding' this problem. This is the formal version of について.",
     sSrc:"Regarding this problem, do you have any opinions?"},

    {type:"match", pairs:[
      {trg:"〜において", src:"in / at (formal)"},
      {trg:"〜にもとづいて", src:"based on"},
      {trg:"〜にともなって", src:"along with"},
      {trg:"〜にかかわらず", src:"regardless of"}
    ]},

    {type:"mc", q:"「にもとづいて」と「をもとに」はどうちがいますか？",
     opts:["にもとづいて is stricter/factual, をもとに allows creative adaptation","They are the same","にもとづいて is casual","をもとに is more formal"],
     ans:"にもとづいて is stricter/factual, をもとに allows creative adaptation",
     hint:"One follows facts precisely, the other uses something as inspiration. Think: following a law vs adapting a true story into fiction."},

    {type:"fb", s:"てんき{1}、イベントはおこないます。",
     a:["にかかわらず"],
     opts:["にかかわらず","にたいして","において","にしたがって"],
     hint:"The event happens regardless of what the weather is. This particle dismisses a variable as irrelevant.",
     sSrc:"The event will be held regardless of weather."},

    {type:"mc", q:"「において」はどのことばのフォーマルなかたちですか？",
     opts:["で","に","を","と"],
     ans:"で",
     hint:"This formal particle replaces the common location/context particle used in everyday speech."}
  ]
};
export default BATCH11_L1;
