// Unit 11 Expansion L4. てしまう and てみる
// Completion/regret with てしまう, trying with てみる.

const LESSON_4 = {id:"jav2_u11l4", title:"てしまう・てみる", icon:"😱", xp:15, board:true, steps:[
  {type:"intro", title:"てしまう・てみる",
   desc:"Add emotional color to your verbs. てしまう expresses that an action is completely done, often with regret or surprise. てみる means 'try doing' something new. These are two of the most expressive て-form compounds.",
   goals:["Use てしまう for completion, regret, or 'oops' moments","Use the casual contraction ちゃう/じゃう","Use てみる to express 'try doing' something"]},

  {type:"teach", trg:"〜てしまう", src:"end up doing ~ / do ~ completely", pos:"part", gender:null,
   note:"て-form + しまう = complete action, often with regret or surprise.\nPolite: てしまいます.",
   example:"A: ケーキをぜんぶたべてしまいました。\nB: えっ、ぜんぶ？",
   exampleSrc:"A: I ended up eating all the cake.\nB: What, all of it?",
   funFact:"しまう originally means 'to put away/finish.' Combined with て-form, it adds a nuance of finality. The tone can be regretful (I accidentally ate it all), accomplished (I finished reading the whole book), or surprising. Context and tone determine which."},

  {type:"teach", trg:"わすれてしまった", src:"ended up forgetting / forgot completely", pos:"verb", gender:null,
   note:"わすれる (to forget) + てしまった.\nExpresses regret about forgetting.",
   example:"A: しゅくだいをわすれてしまいました。\nB: それはこまりますね。",
   exampleSrc:"A: I completely forgot my homework.\nB: That is a problem.",
   funFact:"わすれてしまった is much more expressive than just わすれた (forgot). The てしまう adds 'unfortunately' or 'I cannot believe I...' energy. Japanese speakers use this instinctively when confessing mistakes. It softens blame by implying it was unintentional."},

  {type:"teach", trg:"なくしてしまった", src:"ended up losing (something)", pos:"verb", gender:null,
   note:"なくす (to lose an object) + てしまった.\nExpresses regret about losing something.",
   example:"A: かぎをなくしてしまいました。\nB: たいへんですね。いっしょにさがしましょう。",
   exampleSrc:"A: I lost my key.\nB: That is terrible. Let us search together.",
   funFact:"なくす means to lose an object (not a person or game). The てしまう ending makes it clear this was accidental and regrettable. For losing a game, use まける. For losing a person (death), use なくなる, a euphemism meaning 'to cease to exist.'"},

  {type:"mc", q:"ケーキをぜんぶたべてしまった expresses:", opts:["I ate all the cake (with regret/surprise)","I am eating cake now","I will eat cake later","I want to eat cake"], ans:"I ate all the cake (with regret/surprise)",
     hint:"てしまう marks completion that carries an emotional tone, like an accidental or unwanted outcome."},

  {type:"teach", trg:"〜ちゃった", src:"ended up doing ~ (casual)", pos:"part", gender:null,
   note:"Casual contraction of てしまった. Very common in speech.\nたべてしまった becomes たべちゃった.",
   example:"A: またおそくなっちゃった。\nB: きをつけてね。",
   exampleSrc:"A: I ended up being late again.\nB: Be careful, okay?",
   funFact:"In casual speech, てしまう contracts to ちゃう, and でしまう contracts to じゃう. So のんでしまった becomes のんじゃった, and たべてしまった becomes たべちゃった. This contraction is ubiquitous in daily conversation and manga dialogue."},

  {type:"teach", trg:"〜てみる", src:"try doing ~", pos:"part", gender:null,
   note:"て-form + みる = try doing (to see what it is like).\nPolite: てみます. Past: てみました.",
   example:"A: なっとうをたべてみましたか？\nB: はい、たべてみました。おいしかったです！",
   exampleSrc:"A: Have you tried eating natto?\nB: Yes, I tried it. It was delicious!",
   funFact:"みる here is not literally 'to see' but 'to see what happens.' たべてみる means 'eat it and see (how it is).' This pattern is essential for encouraging someone to try new things. やってみて (try doing it!) is encouraging, while やってみよう (let me try) is self-motivating."},

  {type:"fb", s:"なっとうをたべて{1}ましたか？\n(Have you tried eating natto?)", a:"み", opts:["み","しまい","い","おき"], sSrc:"Have you tried eating natto?",
   hint:"The verb meaning 'see/look' that, after て-form, means 'try doing.'"},

  {type:"teach", trg:"きいてみる", src:"try asking / try listening", pos:"verb", gender:null,
   note:"きく (to ask/listen) + てみる. Try asking someone.\nきいてみます = I will try asking.",
   example:"A: せんせいにきいてみましょう。\nB: そうですね。きいてみます。",
   exampleSrc:"A: Let us try asking the teacher.\nB: Good idea. I will try asking.",
   funFact:"きいてみる beautifully shows how てみる works: you ask and see what answer you get. The outcome is uncertain, which is why みる fits. Compare: きく (ask, neutral) vs きいてみる (try asking, implying curiosity about the result)."},

  {type:"teach", trg:"つかってみる", src:"try using", pos:"verb", gender:null,
   note:"つかう (to use) + てみる. Try using something new.\nGroup 1: つかう becomes つかって.",
   example:"A: このアプリをつかってみてください。\nB: おもしろそうですね。つかってみます。",
   exampleSrc:"A: Please try using this app.\nB: It looks interesting. I will try it.",
   funFact:"つかってみてください (please try using it) is the go-to phrase for product recommendations in Japan. Shop staff, friends, and online reviews all use this pattern. It is friendly and low-pressure, inviting the person to experience something rather than committing."},

  {type:"mc", q:"やってみましょう means:", opts:["Let us stop doing it","Let us try doing it","Let us finish doing it","Let us avoid doing it"], ans:"Let us try doing it",
   hint:"てみる means 't... d...' and ましょう means 'l... us.'"},

  {type:"teach", trg:"おちてしまった", src:"ended up falling / dropped", pos:"verb", gender:null,
   note:"おちる (to fall/drop) + てしまった.\nExpresses an unfortunate accident.",
   example:"A: けいたいをおとしてしまいました。\nB: だいじょうぶですか？われましたか？",
   exampleSrc:"A: I dropped my phone.\nB: Are you okay? Did it crack?",
   funFact:"おちる (intransitive, something falls) and おとす (transitive, you drop something) are a common pair. てしまう works with both: おちてしまった (it fell, unfortunately) and おとしてしまった (I dropped it, unfortunately). Transitive/intransitive pairs are a key Japanese grammar feature."},

  {type:"teach", trg:"やってみて", src:"try doing it (casual request)", pos:"verb", gender:null,
   note:"やる (to do, casual) + てみて = try it!\nA friendly, encouraging expression.",
   example:"A: このゲームはおもしろいよ。やってみて！\nB: じゃ、やってみる！",
   exampleSrc:"A: This game is fun. Try it!\nB: Okay, I will try it!",
   funFact:"やってみて is the casual equivalent of やってみてください. It is warm and encouraging without being pushy. Parents say it to children, friends say it to each other, and coaches say it to athletes. The spirit is 'give it a shot and see what happens.'"},

  {type:"fb", s:"かぎをなくして{1}ました。\n(I ended up losing my key.)", a:"しまい", opts:["しまい","み","おき","い"], sSrc:"I ended up losing my key.",
   hint:"The verb meaning 'to put away/finish' that adds regret or completion."},

  {type:"match", pairs:[{trg:"てしまう",src:"end up doing (regret)"},{trg:"てみる",src:"try doing"},{trg:"ちゃった",src:"ended up (casual)"},{trg:"やってみて",src:"try it!"}]},

  {type:"match", pairs:[{trg:"わすれてしまった",src:"forgot (regret)"},{trg:"なくしてしまった",src:"lost something (regret)"},{trg:"きいてみる",src:"try asking"},{trg:"つかってみる",src:"try using"}]},

  {type:"mc", q:"たべちゃった is the casual form of:", opts:["たべておいた","たべてみた","たべてしまった","たべている"], ans:"たべてしまった",
   hint:"In casual speech, てしまった contracts by removing しま and changing to ちゃった."},

  {type:"fb", s:"このアプリをつかって{1}ください。\n(Please try using this app.)", a:"みて", opts:["みて","しまって","おいて","いて"], sSrc:"Please try using this app.",
   hint:"The compound meaning 'try doing' uses the て-form of みる (to see)."},

  {type:"tip", title:"てしまう vs てみる",
   text:"てしまう = completion + emotion (often regret):\nたべてしまった (ate it all, oops)\nわすれてしまった (forgot, unfortunately)\nCasual: ちゃった / じゃった\n\nてみる = trying something (to see the result):\nたべてみた (tried eating it)\nきいてみる (will try asking)\nCasual: てみて (try it!)\n\nBoth attach to the て-form of any verb.",
   deepDive:{title:"ちゃう and じゃう contractions",
    text:"Casual contractions of てしまう:\nて + しまう = ちゃう: たべちゃう, わすれちゃう\nで + しまう = じゃう: のんじゃう, よんじゃう\n\nPast tense:\nちゃった: たべちゃった (ate it, oops)\nじゃった: のんじゃった (drank it, oops)\n\nThese contractions are extremely common in spoken Japanese and in manga. They sound more natural than the full てしまう form in casual contexts. In polite speech, use the full form."}},
]};
export default LESSON_4;
