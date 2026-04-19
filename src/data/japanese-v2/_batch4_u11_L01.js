// Batch 4 — Unit 11 Lesson 1: Te-form Compound Verbs
const BATCH4_L_1 = {
  id:"jav2_u11l_b4_1", title:"て-形(けい)の複合(ふくごう)", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"て-形(けい)の複合(ふくごう)動詞(どうし)",
     desc:"Learn compound verb patterns using the te-form. These patterns let you express ongoing actions, trying things, and completing actions.",
     goals:["Use te-iru for ongoing states","Use te-miru for trying","Use te-shimau for completion/regret"]},

    {type:"teach", trg:"続(つづ)ける", src:"to continue", pos:"verb", gender:null,
     note:"Ichidan verb. Attaches to verb stems: 話(はな)し続(つづ)ける.",
     example:"日本語(にほんご)を勉強(べんきょう)し続(つづ)けます。",
     exampleSrc:"I continue studying Japanese.",
     funFact:"Tsuzukeru attaches to the masu-stem of other verbs: 走(はし)り続(つづ)ける (keep running), 食(た)べ続(つづ)ける (keep eating). This compound pattern is extremely productive and used constantly in daily Japanese."},

    {type:"teach", trg:"始(はじ)める", src:"to begin / start (transitive)", pos:"verb", gender:null,
     note:"Ichidan verb. As compound: verb stem + 始(はじ)める.",
     example:"雨(あめ)が降(ふ)り始(はじ)めました。",
     exampleSrc:"It began to rain.",
     funFact:"Hajimeru as a compound verb means 'to start doing': 読(よ)み始(はじ)める (start reading), 泣(な)き始(はじ)める (start crying). This is different from hajimeru alone (to start something). The compound adds the sense of 'begin the action of.'"},

    {type:"teach", trg:"終(お)わる", src:"to end / finish (intransitive)", pos:"verb", gender:null,
     note:"Godan verb. As compound: verb stem + 終(お)わる.",
     example:"宿題(しゅくだい)が終(お)わりました。",
     exampleSrc:"The homework is finished.",
     funFact:"Owaru is intransitive (the thing ends itself). The transitive pair is 終(お)える (oeru, to finish something). Verb stem + 終(お)わる means 'finish doing': 食(た)べ終(お)わる (finish eating), 読(よ)み終(お)わる (finish reading)."},

    {type:"teach", trg:"てみる", src:"to try doing (te-form + miru)", pos:"verb", gender:null,
     note:"Te-form + みる. Literally 'do and see (what happens).'",
     example:"この料理(りょうり)を食(た)べてみてください。",
     exampleSrc:"Please try eating this dish.",
     funFact:"Te-miru literally means 'do it and see.' It implies trying something to find out the result. It is less about effort (trying hard) and more about experimentation (trying to see what it is like)."},

    {type:"teach", trg:"てしまう", src:"to finish / end up doing (accidentally)", pos:"verb", gender:null,
     note:"Te-form + しまう. Expresses completion or regret.\nCasual: ちゃう.",
     example:"ケーキを全部(ぜんぶ)食(た)べてしまいました。",
     exampleSrc:"I ended up eating all the cake.",
     funFact:"Te-shimau has two feelings: complete finish (I ate it all!) and regret (I accidentally ate it all...). Context determines which. Casual speech contracts it to -chau: tabechatta (ate it all). This casual form is everywhere in spoken Japanese."},

    {type:"teach", trg:"ておく", src:"to do in advance / leave as is", pos:"verb", gender:null,
     note:"Te-form + おく. Preparation or intentional leaving.\nCasual: とく.",
     example:"明日(あした)の料理(りょうり)を作(つく)っておきます。",
     exampleSrc:"I will prepare tomorrow's food in advance.",
     funFact:"Te-oku has two uses: (1) do in advance for later benefit (prepare, set up), and (2) leave as is (ignore, let it be). 'Mado wo akete oku' can mean 'open the window and leave it open.' The casual -toku form is very common."},

    {type:"teach", trg:"てある", src:"has been done (result state)", pos:"verb", gender:null,
     note:"Te-form + ある. Focus on the resulting state of a completed action.",
     example:"窓(まど)が開(あ)けてあります。",
     exampleSrc:"The window has been opened (and is still open).",
     funFact:"Te-aru emphasizes the result: someone opened the window AND it remains open now. Compare: 開(あ)けている (someone is opening it / it is open) vs 開(あ)けてある (it has been opened intentionally and left that way)."},

    {type:"teach", trg:"てくる", src:"to come doing / to have been doing", pos:"verb", gender:null,
     note:"Te-form + くる. Action approaching the speaker or developing over time.",
     example:"寒(さむ)くなってきました。",
     exampleSrc:"It has gotten cold (gradually coming to be cold).",
     funFact:"Te-kuru adds the sense of approach or development toward the present. '雨(あめ)が降(ふ)ってきた' means rain started coming. '日本語(にほんご)がわかってきた' means I am gradually coming to understand Japanese. It implies change reaching the present moment."},

    {type:"teach", trg:"ていく", src:"to go on doing / to continue away", pos:"verb", gender:null,
     note:"Te-form + いく. Action continuing into the future or moving away.",
     example:"これからも頑張(がんば)っていきます。",
     exampleSrc:"I will continue to do my best from now on.",
     funFact:"Te-iku is the opposite of te-kuru. It projects into the future: 暖(あたた)かくなっていく (it will gradually get warmer). It is often used in speeches: 'I will keep going forward.' Politicians and athletes use it to express determination."},

    {type:"teach", trg:"直(なお)す", src:"to fix / repair / redo", pos:"verb", gender:null,
     note:"Godan verb. As compound: verb stem + 直(なお)す = redo.",
     example:"間違(まちが)いを直(なお)しました。",
     exampleSrc:"I fixed the mistake.",
     funFact:"As a compound, naosu means 'redo': 書(か)き直(なお)す (rewrite), 作(つく)り直(なお)す (remake), やり直(なお)す (do over). This pattern is incredibly useful because any verb can be combined with naosu to express 'doing it again correctly.'"},

    {type:"teach", trg:"過(す)ぎる", src:"too much / excessively", pos:"verb", gender:null,
     note:"Ichidan verb. Attaches to verb/adj stems.",
     example:"食(た)べ過(す)ぎました。",
     exampleSrc:"I ate too much.",
     funFact:"Sugiru attaches to almost anything: 食(た)べ過(す)ぎ (overeating), 飲(の)み過(す)ぎ (overdrinking), 大(おお)きすぎる (too big), 高(たか)すぎる (too expensive). It is the universal 'too much' marker and one of the most useful compound patterns in Japanese."},

    {type:"teach", trg:"やすい", src:"easy to (suffix)", pos:"adj", gender:null,
     note:"Attached to verb stems: わかりやすい (easy to understand). Not the adjective for cheap.",
     example:"この本(ほん)は読(よ)みやすいです。",
     exampleSrc:"This book is easy to read.",
     funFact:"The suffix -yasui (easy to) pairs with -nikui (hard to): 読(よ)みやすい (easy to read) vs 読(よ)みにくい (hard to read). This pair works with any verb and is essential for giving opinions about usability and design."},

    {type:"teach", trg:"にくい", src:"hard to / difficult to (suffix)", pos:"adj", gender:null,
     note:"Attached to verb stems: わかりにくい (hard to understand).",
     example:"この漢字(かんじ)は覚(おぼ)えにくいです。",
     exampleSrc:"This kanji is hard to memorize.",
     funFact:"Nikui literally means 'hateful/unpleasant' when used alone, but as a suffix it simply means 'difficult to do.' 住(す)みにくい (hard to live in), 使(つか)いにくい (hard to use). Product reviews in Japan heavily use this suffix."},

    {type:"teach", trg:"かた", src:"way of doing / method (suffix)", pos:"noun", gender:null,
     note:"Attaches to verb stems: 使(つか)い方(かた) (way of using).",
     example:"箸(はし)の使(つか)い方(かた)を教(おし)えてください。",
     exampleSrc:"Please teach me how to use chopsticks.",
     funFact:"The suffix -kata turns any verb into 'the way of doing it': 食(た)べ方(かた) (way of eating), 書(か)き方(かた) (way of writing), 読(よ)み方(かた) (way of reading/pronunciation). It is so productive that you can create the 'how-to' for any action."},

    {type:"mc", q:"てしまう expresses:",
     opts:["completion or regret","beginning","intention","ability"], ans:"completion or regret",
     hint:"Either 'I finished it all' or 'I accidentally did it.'"},

    {type:"fb", s:"この料理(りょうり)を食(た)べて{1}ください。", a:"みて",
     sSrc:"Please try eating this dish.",
     opts:["みて","しまって","おいて","いて"],
     hint:"Do something to see what happens, an experimental attempt."},

    {type:"match", pairs:[
      {trg:"てくる", src:"to come doing / develop toward now"},
      {trg:"ていく", src:"to go on doing / continue away"},
      {trg:"ておく", src:"to do in advance"},
      {trg:"てある", src:"has been done (result state)"}
    ]},

    {type:"mc", q:"食(た)べ過(す)ぎました means:",
     opts:["I ate too much","I finished eating","I started eating","I tried eating"], ans:"I ate too much",
     hint:"The suffix that means excess, going beyond the normal amount."},

    {type:"fb", s:"この本(ほん)は{1}やすいです。", a:"読(よ)み",
     sSrc:"This book is easy to read.",
     opts:["読(よ)み","書(か)き","話(はな)し","覚(おぼ)え"],
     hint:"The verb stem for 'to read' combined with the ease suffix."},

    {type:"mc", q:"What does -かた mean as a suffix?",
     opts:["way of doing","too much","hard to","continue"], ans:"way of doing",
     hint:"Turns a verb into 'the method/manner of performing that action.'"},

    {type:"fb", s:"間違(まちが)いを{1}ました。", a:"直(なお)し",
     sSrc:"I fixed the mistake.",
     opts:["直(なお)し","始(はじ)め","終(お)わり","続(つづ)け"],
     hint:"The verb for repairing or correcting something wrong."}
  ,{type:"match",pairs:[{trg:"続(つづ)ける",src:"to continue"},{trg:"始(はじ)める",src:"to begin / start (transitive)"},{trg:"終(お)わる",src:"to end / finish (intransitive)"},{trg:"てみる",src:"to try doing (te-form + miru)"},{trg:"てしまう",src:"to finish / end up doing (accidentally)"},{trg:"直(なお)す",src:"to fix / repair / redo"}]},{type:"match",pairs:[{trg:"過(す)ぎる",src:"too much / excessively"},{trg:"やすい",src:"easy to (suffix)"},{trg:"にくい",src:"hard to / difficult to (suffix)"},{trg:"かた",src:"way of doing / method (suffix)"}]},
  {type:"fb", s:"毎朝(まいあさ)ジョギングを{1}ことにしました。", a:["始(はじ)める"], opts:["始(はじ)める","続(つづ)ける","終(お)わる","てしまう"], hint:"The transitive verb for commencing a new activity or habit.", sSrc:"I decided to {1} jogging every morning."},
  {type:"fb", s:"壊(こわ)れた椅子(いす)を自分(じぶん)で{1}ました。", a:["直(なお)す"], opts:["直(なお)す","始(はじ)める","終(お)わる","過(す)ぎる"], hint:"The verb for repairing or fixing something that is broken.", sSrc:"I fixed the broken chair myself."}
]
};
export default BATCH4_L_1;
