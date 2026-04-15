// Unit 14 Expansion L5 — Debates and Strong Opinions
// Expressing strong views, making arguments, persuading.

const LESSON_5 = {id:"jav2_u14l5", title:"つよいいけん", icon:"🗣️", xp:15, board:true, steps:[
  {type:"intro", title:"つよいいけん",
   desc:"Learn to express stronger opinions, make arguments, and discuss topics with depth. This lesson introduces patterns for persuasion, emphasis, and presenting multiple viewpoints on a topic.",
   goals:["Use のに (although/despite) for contrast","Express strong feelings with なければならない (must)","Present balanced arguments with pros and cons"]},

  {type:"teach", trg:"〜のに", src:"although ~ / despite ~ / even though ~", pos:"part", gender:null,
   note:"Plain form + のに = although. Expresses frustration or surprise.\nDifferent from ので (because).",
   example:"A: たくさんべんきょうしたのに、テストはだめでした。\nB: ざんねんですね。でもがんばりましたね。",
   exampleSrc:"A: Although I studied a lot, the test went badly.\nB: That is unfortunate. But you did your best.",
   funFact:"のに carries emotional weight that けど (but) does not. べんきょうしたけど、だめだった is factual. べんきょうしたのに、だめだった adds frustration or disappointment. The speaker expected a different result. This emotional nuance makes のに important for natural expression."},

  {type:"teach", trg:"〜けど", src:"but / although (neutral)", pos:"part", gender:null,
   note:"Casual version of けれど/けれども. Neutral contrast, no emotional charge.\nMost common connector in speech.",
   example:"A: にほんごはむずかしいけど、おもしろいです。\nB: そうですよね。たのしいですよね。",
   exampleSrc:"A: Japanese is difficult, but interesting.\nB: That is right. It is fun.",
   funFact:"けど is arguably the most-used conjunction in casual Japanese. It connects contrasting ideas without the frustration of のに. It also serves as a sentence softener: あした、いそがしいんですけど... (I am busy tomorrow, but...) trails off politely instead of directly refusing."},

  {type:"teach", trg:"〜なければならない", src:"must ~ / have to ~", pos:"part", gender:null,
   note:"ない-form (drop ない) + なければならない = must do.\nPolite: なければなりません. Casual: なきゃ.",
   example:"A: あしたまでにレポートをかかなければなりません。\nB: たいへんですね。がんばってください。",
   exampleSrc:"A: I must write the report by tomorrow.\nB: That is tough. Do your best.",
   funFact:"なければならない literally means 'if one does not do it, it will not do.' This triple-negative construction (na-kereba nara-nai) confuses learners but is standard Japanese. The casual form なきゃ (from なければ) is extremely common: いかなきゃ (gotta go), たべなきゃ (gotta eat)."},

  {type:"mc", q:"べんきょうしたのに、だめだった expresses:", opts:["I studied and passed","I did not study","I studied a lot but it went badly (frustrating)","I will study"], ans:"I studied a lot but it went badly (frustrating)",
   hint:"のに adds frustration or disappointment about an unexpected result."},

  {type:"teach", trg:"〜べき", src:"should ~ / ought to ~", pos:"part", gender:null,
   note:"Dictionary form + べき = should (moral/logical obligation).\nStronger than ほうがいい.",
   example:"A: もっとかんきょうのことをかんがえるべきだとおもいます。\nB: たしかに、そうですね。",
   exampleSrc:"A: I think we should think more about the environment.\nB: Indeed, that is right.",
   funFact:"べき comes from classical Japanese and sounds authoritative. It expresses what is logically or morally right, not personal preference. べき is stronger than ほうがいい (it would be better to): するべき (should do) vs したほうがいい (better to do). Use べき for universal truths and strong recommendations."},

  {type:"teach", trg:"もちろん", src:"of course / naturally", pos:"adv", gender:null,
   note:"Expresses that something is obvious or self-evident.\nStronger agreement than はい.",
   example:"A: にほんごのべんきょうをつづけますか？\nB: もちろんです！やめるつもりはありません。",
   exampleSrc:"A: Will you continue studying Japanese?\nB: Of course! I have no intention of stopping.",
   funFact:"もちろん is written with the kanji 勿論, combining 勿 (do not) and 論 (discuss/argue), meaning 'there is no need to even discuss it.' It conveys absolute certainty and enthusiasm. Using もちろん in response to a request is very positive and reassuring."},

  {type:"teach", trg:"ぜんたいてきに", src:"overall / generally speaking", pos:"adv", gender:null,
   note:"ぜんたい (whole/overall) + てき (characteristic) + に (adverb marker).\nUseful for summarizing views.",
   example:"A: にほんのせいかつはどうですか？\nB: ぜんたいてきに、とてもいいとおもいます。",
   exampleSrc:"A: How is life in Japan?\nB: Overall, I think it is very good.",
   funFact:"ぜんたいてきに is the go-to phrase for giving balanced overall assessments. The てきに suffix turns many nouns into adverbs: きほんてきに (basically), こじんてきに (personally), いっぱんてきに (generally). Learning this suffix pattern expands your vocabulary rapidly."},

  {type:"fb", s:"あしたまでにレポートをかか___なりません。\n(I must write the report by tomorrow.)", a:"なければ", opts:["なければ","なくて","ないで","なかった"], sSrc:"I must write the report by tomorrow.",
   hint:"The conditional form of ない that combines with ならない to mean 'must.'"},

  {type:"teach", trg:"こじんてきに", src:"personally / in my personal opinion", pos:"adv", gender:null,
   note:"こじん (individual) + てきに. Marks an opinion as personal, not universal.\nPolite way to preface opinions.",
   example:"A: あのえいがはどうおもいますか？\nB: こじんてきには、あまりおもしろくなかったです。",
   exampleSrc:"A: What do you think of that movie?\nB: Personally, I did not find it very interesting.",
   funFact:"Prefacing with こじんてきに signals that you are sharing a personal view, not a fact. This gives the listener space to disagree without confrontation. It is a diplomatic speech tool used frequently in Japanese meetings, interviews, and discussions."},

  {type:"teach", trg:"たいせつ", src:"important / precious", pos:"adj", gender:null,
   note:"な-adjective. たいせつなこと = important thing.\nKanji: 大切.",
   example:"A: いちばんたいせつなことはなんだとおもいますか？\nB: けんこうがいちばんたいせつだとおもいます。",
   exampleSrc:"A: What do you think is the most important thing?\nB: I think health is the most important.",
   funFact:"大切 combines 大 (big) and 切 (cut/important). Despite the kanji for 'cut,' it means 'precious' or 'important.' たいせつなひと (important person) is used for loved ones. The phrase たいせつにする (to cherish/take care of) is a heartfelt expression."},

  {type:"mc", q:"もちろん means:", opts:["maybe","I doubt it","of course","I do not know"], ans:"of course",
   hint:"Expresses absolute certainty, meaning 'there is no need to discuss it.'"},

  {type:"teach", trg:"とくに", src:"especially / particularly", pos:"adv", gender:null,
   note:"Highlights one thing among many. とくに + noun/adjective.\nKanji: 特に.",
   example:"A: にほんりょうりはすきですか？\nB: はい、とくにラーメンがすきです。",
   exampleSrc:"A: Do you like Japanese food?\nB: Yes, I especially like ramen.",
   funFact:"特に uses the kanji 特 (special/particular). It naturally narrows focus from a broad topic to a specific point. The pattern 'はい、とくに...' (yes, especially...) is extremely common in conversation and makes your answers more interesting and specific."},

  {type:"teach", trg:"なきゃ", src:"gotta / must (casual)", pos:"part", gender:null,
   note:"Casual contraction of なければ(ならない). Extremely common in speech.\nいかなきゃ = gotta go.",
   example:"A: もういかなきゃ。\nB: え、もう？もうちょっといてよ。",
   exampleSrc:"A: I gotta go now.\nB: What, already? Stay a bit longer.",
   funFact:"なきゃ is the ultra-casual form of なければならない. Most Japanese people never say the full form in daily speech. いかなきゃ (gotta go), やらなきゃ (gotta do it), ねなきゃ (gotta sleep) are heard constantly. Manga and anime use this form almost exclusively."},

  {type:"fb", s:"___、ラーメンがすきです。\n(I especially like ramen.)", a:"とくに", opts:["とくに","たしかに","もちろん","ぜったい"], sSrc:"I especially like ramen.",
   hint:"The adverb meaning 'especially' that highlights one specific thing."},

  {type:"match", pairs:[{trg:"のに",src:"although (frustrated)"},{trg:"けど",src:"but (neutral)"},{trg:"なければならない",src:"must do"},{trg:"べき",src:"should / ought to"}]},

  {type:"match", pairs:[{trg:"もちろん",src:"of course"},{trg:"こじんてきに",src:"personally"},{trg:"たいせつ",src:"important"},{trg:"とくに",src:"especially"}]},

  {type:"mc", q:"こじんてきに is used to:", opts:["State a fact","Disagree strongly","Preface a personal opinion","Ask a question"], ans:"Preface a personal opinion",
   hint:"This adverb signals that what follows is your personal view, not universal truth."},

  {type:"fb", s:"かんきょうのことをかんがえる___だとおもいます。\n(I think we should think about the environment.)", a:"べき", opts:["べき","ほう","つもり","こと"], sSrc:"I think we should think about the environment.",
   hint:"The pattern expressing moral or logical obligation, stronger than 'better to.'"},

  {type:"tip", title:"Building Strong Arguments",
   text:"Personal framing:\nこじんてきに (personally)\nわたしのいけんでは (in my opinion)\n\nStrong stance:\nべきだとおもう (I think we should)\nなければならない (must do)\n\nContrast:\nのに (although, with frustration)\nけど (but, neutral)\n\nEmphasis:\nもちろん (of course)\nとくに (especially)\nぜんたいてきに (overall)\n\nCasual must: なきゃ (gotta)",
   deepDive:{title:"のに vs けど vs でも",
    text:"Three 'but' words with different feelings:\n\nけど: neutral contrast, most common\nむずかしいけど、おもしろい。(Difficult but interesting.)\n\nでも: separate sentences, slightly stronger\nむずかしいです。でもおもしろいです。(It is difficult. But it is interesting.)\n\nのに: frustrated or disappointed\nべんきょうしたのに、テストがだめだった。(I studied, yet the test went badly.)\n\nChoose based on emotion:\nNo emotion > けど\nSlight emphasis > でも\nFrustration/surprise > のに"}},
]};
export default LESSON_5;
