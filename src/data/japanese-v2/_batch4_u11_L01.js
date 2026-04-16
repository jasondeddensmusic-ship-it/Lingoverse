// Batch 4 — Unit 11 Lesson 1: Te-form Compound Verbs
const BATCH4_L_1 = {
  id:"jav2_u11l_b4_1", title:"て-けいのふくごう", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"て-けいのふくごうどうし",
     desc:"Learn compound verb patterns using the te-form. These patterns let you express ongoing actions, trying things, and completing actions.",
     goals:["Use te-iru for ongoing states","Use te-miru for trying","Use te-shimau for completion/regret"]},

    {type:"teach", trg:"つづける", src:"to continue", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 続ける. Attaches to verb stems: はなしつづける.",
     example:"にほんごをべんきょうしつづけます。",
     exampleSrc:"I continue studying Japanese.",
     funFact:"Tsuzukeru attaches to the masu-stem of other verbs: 走り続ける (keep running), 食べ続ける (keep eating). This compound pattern is extremely productive and used constantly in daily Japanese."},

    {type:"teach", trg:"はじめる", src:"to begin / start (transitive)", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 始める. As compound: verb stem + はじめる.",
     example:"あめがふりはじめました。",
     exampleSrc:"It began to rain.",
     funFact:"Hajimeru as a compound verb means 'to start doing': 読み始める (start reading), 泣き始める (start crying). This is different from hajimeru alone (to start something). The compound adds the sense of 'begin the action of.'"},

    {type:"teach", trg:"おわる", src:"to end / finish (intransitive)", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 終わる. As compound: verb stem + おわる.",
     example:"しゅくだいがおわりました。",
     exampleSrc:"The homework is finished.",
     funFact:"Owaru is intransitive (the thing ends itself). The transitive pair is 終える (oeru, to finish something). Verb stem + 終わる means 'finish doing': 食べ終わる (finish eating), 読み終わる (finish reading)."},

    {type:"teach", trg:"てみる", src:"to try doing (te-form + miru)", pos:"verb", gender:null,
     note:"Te-form + みる. Literally 'do and see (what happens).'",
     example:"このりょうりをたべてみてください。",
     exampleSrc:"Please try eating this dish.",
     funFact:"Te-miru literally means 'do it and see.' It implies trying something to find out the result. It is less about effort (trying hard) and more about experimentation (trying to see what it is like)."},

    {type:"teach", trg:"てしまう", src:"to finish / end up doing (accidentally)", pos:"verb", gender:null,
     note:"Te-form + しまう. Expresses completion or regret.\nCasual: ちゃう.",
     example:"ケーキをぜんぶたべてしまいました。",
     exampleSrc:"I ended up eating all the cake.",
     funFact:"Te-shimau has two feelings: complete finish (I ate it all!) and regret (I accidentally ate it all...). Context determines which. Casual speech contracts it to -chau: tabechatta (ate it all). This casual form is everywhere in spoken Japanese."},

    {type:"teach", trg:"ておく", src:"to do in advance / leave as is", pos:"verb", gender:null,
     note:"Te-form + おく. Preparation or intentional leaving.\nCasual: とく.",
     example:"あしたのりょうりをつくっておきます。",
     exampleSrc:"I will prepare tomorrow's food in advance.",
     funFact:"Te-oku has two uses: (1) do in advance for later benefit (prepare, set up), and (2) leave as is (ignore, let it be). 'Mado wo akete oku' can mean 'open the window and leave it open.' The casual -toku form is very common."},

    {type:"teach", trg:"てある", src:"has been done (result state)", pos:"verb", gender:null,
     note:"Te-form + ある. Focus on the resulting state of a completed action.",
     example:"まどがあけてあります。",
     exampleSrc:"The window has been opened (and is still open).",
     funFact:"Te-aru emphasizes the result: someone opened the window AND it remains open now. Compare: 開けている (someone is opening it / it is open) vs 開けてある (it has been opened intentionally and left that way)."},

    {type:"teach", trg:"てくる", src:"to come doing / to have been doing", pos:"verb", gender:null,
     note:"Te-form + くる. Action approaching the speaker or developing over time.",
     example:"さむくなってきました。",
     exampleSrc:"It has gotten cold (gradually coming to be cold).",
     funFact:"Te-kuru adds the sense of approach or development toward the present. 'Ame ga futte kita' means rain started coming. 'Nihongo ga wakatte kita' means I am gradually coming to understand Japanese. It implies change reaching the present moment."},

    {type:"teach", trg:"ていく", src:"to go on doing / to continue away", pos:"verb", gender:null,
     note:"Te-form + いく. Action continuing into the future or moving away.",
     example:"これからもがんばっていきます。",
     exampleSrc:"I will continue to do my best from now on.",
     funFact:"Te-iku is the opposite of te-kuru. It projects into the future: 暖かくなっていく (it will gradually get warmer). It is often used in speeches: 'I will keep going forward.' Politicians and athletes use it to express determination."},

    {type:"teach", trg:"なおす", src:"to fix / repair / redo", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 直す. As compound: verb stem + なおす = redo.",
     example:"まちがいをなおしました。",
     exampleSrc:"I fixed the mistake.",
     funFact:"As a compound, naosu means 'redo': 書き直す (rewrite), 作り直す (remake), やり直す (do over). This pattern is incredibly useful because any verb can be combined with naosu to express 'doing it again correctly.'"},

    {type:"teach", trg:"すぎる", src:"too much / excessively", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 過ぎる. Attaches to verb/adj stems.",
     example:"たべすぎました。",
     exampleSrc:"I ate too much.",
     funFact:"Sugiru attaches to almost anything: 食べ過ぎ (overeating), 飲み過ぎ (overdrinking), 大きすぎる (too big), 高すぎる (too expensive). It is the universal 'too much' marker and one of the most useful compound patterns in Japanese."},

    {type:"teach", trg:"やすい", src:"easy to (suffix)", pos:"adj", gender:null,
     note:"Attached to verb stems: わかりやすい (easy to understand). Not the adjective for cheap.",
     example:"このほんはよみやすいです。",
     exampleSrc:"This book is easy to read.",
     funFact:"The suffix -yasui (easy to) pairs with -nikui (hard to): 読みやすい (easy to read) vs 読みにくい (hard to read). This pair works with any verb and is essential for giving opinions about usability and design."},

    {type:"teach", trg:"にくい", src:"hard to / difficult to (suffix)", pos:"adj", gender:null,
     note:"Attached to verb stems: わかりにくい (hard to understand).",
     example:"このかんじはおぼえにくいです。",
     exampleSrc:"This kanji is hard to memorize.",
     funFact:"Nikui literally means 'hateful/unpleasant' when used alone, but as a suffix it simply means 'difficult to do.' 住みにくい (hard to live in), 使いにくい (hard to use). Product reviews in Japan heavily use this suffix."},

    {type:"teach", trg:"かた", src:"way of doing / method (suffix)", pos:"noun", gender:null,
     note:"Kanji: 方. Attaches to verb stems: つかいかた (way of using).",
     example:"はしのつかいかたをおしえてください。",
     exampleSrc:"Please teach me how to use chopsticks.",
     funFact:"The suffix -kata turns any verb into 'the way of doing it': 食べ方 (way of eating), 書き方 (way of writing), 読み方 (way of reading/pronunciation). It is so productive that you can create the 'how-to' for any action."},

    {type:"mc", q:"てしまう expresses:",
     opts:["completion or regret","beginning","intention","ability"], ans:"completion or regret",
     hint:"Either 'I finished it all' or 'I accidentally did it.'"},

    {type:"fb", s:"このりょうりをたべて{1}ください。", a:"みて",
     sSrc:"Please try eating this dish.",
     opts:["みて","しまって","おいて","いて"],
     hint:"Do something to see what happens, an experimental attempt."},

    {type:"match", pairs:[
      {trg:"てくる", src:"to come doing / develop toward now"},
      {trg:"ていく", src:"to go on doing / continue away"},
      {trg:"ておく", src:"to do in advance"},
      {trg:"てある", src:"has been done (result state)"}
    ]},

    {type:"mc", q:"たべすぎました means:",
     opts:["I ate too much","I finished eating","I started eating","I tried eating"], ans:"I ate too much",
     hint:"The suffix that means excess, going beyond the normal amount."},

    {type:"fb", s:"このほんは{1}やすいです。", a:"よみ",
     sSrc:"This book is easy to read.",
     opts:["よみ","かき","はなし","おぼえ"],
     hint:"The verb stem for 'to read' combined with the ease suffix."},

    {type:"mc", q:"What does -かた mean as a suffix?",
     opts:["way of doing","too much","hard to","continue"], ans:"way of doing",
     hint:"Turns a verb into 'the method/manner of performing that action.'"},

    {type:"fb", s:"まちがいを{1}ました。", a:"なおし",
     sSrc:"I fixed the mistake.",
     opts:["なおし","はじめ","おわり","つづけ"],
     hint:"The verb for repairing or correcting something wrong."}
  ]
};
export default BATCH4_L_1;
