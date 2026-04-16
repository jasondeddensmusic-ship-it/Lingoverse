// Batch 8 – Unit 17 (B1.1 Passive): Transitivity Pairs
const BATCH8_L1 = {
  id:"jav2_u17l_b8_1", title:"じどうし・たどうし", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"じどうし・たどうし",
     desc:"Master transitivity pairs: verbs that come in intransitive/transitive sets. Understanding these pairs is essential for natural Japanese at B1 level and beyond.",
     goals:["Distinguish intransitive from transitive verbs","Use common transitivity pairs correctly","Understand how Japanese describes events vs. actions"]},

    {type:"teach", trg:"あく", src:"to open (by itself) / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ドアがあく. Pair: あける (transitive).\nThe door opens on its own.",
     example:"A: ドアがあきました。\nB: かぜであいたのかな？",
     exampleSrc:"A: The door opened.\nB: I wonder if it opened from the wind?",
     funFact:"あく/あける is the textbook example of Japanese transitivity. あく (intransitive) describes the door opening without specifying who did it. あける (transitive) requires a subject who opens it. Japanese prefers the intransitive when the agent is unimportant, which is much more common than in English."},

    {type:"teach", trg:"しまる", src:"to close (by itself) / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ドアがしまる. Pair: しめる (transitive).\nThe door closes on its own.",
     example:"A: まどがしまっています。\nB: さむいからだれかがしめたんでしょう。",
     exampleSrc:"A: The window is closed.\nB: Someone probably closed it because it was cold.",
     funFact:"しまる/しめる pair is used constantly. でんしゃのドアがしまります (the train doors are closing) uses intransitive because the system, not a person, closes them. みせがしまっている (the shop is closed) uses intransitive because the state matters, not who closed it."},

    {type:"teach", trg:"きまる", src:"to be decided / to be settled / intransitive", pos:"verb", gender:null,
     note:"Intransitive: にちじがきまる. Pair: きめる (transitive, to decide).\nきまった = it is decided.",
     example:"A: かいぎのにちじがきまりましたか？\nB: はい、らいしゅうのげつようびにきまりました。",
     exampleSrc:"A: Has the meeting date been decided?\nB: Yes, it was decided for next Monday.",
     funFact:"Using きまる instead of きめる is a strategic Japanese communication choice. にちじがきまりました (the date was decided) avoids naming who decided, which is useful in group-consensus culture. It feels more harmonious than わたしがきめました (I decided)."},

    {type:"teach", trg:"つく", src:"to be attached / to turn on / intransitive", pos:"verb", gender:null,
     note:"でんきがつく = the light turns on. Pair: つける (transitive).\nMultiple meanings: arrive, attach, light up.",
     example:"A: でんきがつきました。\nB: じどうセンサーですね。",
     exampleSrc:"A: The light turned on.\nB: It is an automatic sensor.",
     funFact:"つく is one of Japanese's most versatile verbs. でんきがつく (light turns on), きがつく (to notice), うそがつく (to become a lie), せきにつく (to take a seat). Each compound has its own meaning. The transitive pair つける is equally versatile: でんきをつける (turn on the light), なをつける (to name)."},

    {type:"teach", trg:"こわれる", src:"to break / to be broken / intransitive", pos:"verb", gender:null,
     note:"Intransitive: パソコンがこわれた. Pair: こわす (transitive).\nこわれやすい = fragile.",
     example:"A: パソコンがこわれてしまいました。\nB: しゅうりにだしましょう。",
     exampleSrc:"A: My computer broke.\nB: Let us send it for repair.",
     funFact:"こわれる/こわす is crucial for daily Japanese. Japanese speakers strongly prefer こわれた (it broke) over こわした (I broke it) to describe accidents. This is not about avoiding blame. Japanese grammar naturally frames events from the perspective of the affected object."},

    {type:"mc", q:"What is the transitive pair of あく (to open by itself)?", opts:["あける","あく","あかす","あい"], ans:"あける",
     hint:"The transitive form means someone actively opens something."},

    {type:"teach", trg:"おちる", src:"to fall / to drop / intransitive", pos:"verb", gender:null,
     note:"Intransitive: はっぱがおちる. Pair: おとす (transitive, to drop).\nしけんにおちる = to fail an exam.",
     example:"A: さいふをおとしました。\nB: どこでおちたかわかりますか？",
     exampleSrc:"A: I dropped my wallet.\nB: Do you know where it fell?",
     funFact:"おちる/おとす is interesting because おちる extends to abstract meanings: しけんにおちる (fail an exam), にんきがおちる (popularity drops), いなずまがおちる (lightning strikes). おとす has its own extensions: でんわをおとす (to drop a call), いろをおとす (to remove color)."},

    {type:"teach", trg:"かわる", src:"to change / intransitive", pos:"verb", gender:null,
     note:"Intransitive: きせつがかわる. Pair: かえる (transitive, to change something).\nいろがかわる = the color changes.",
     example:"A: まちがずいぶんかわりましたね。\nB: じゅうねんまえとぜんぜんちがいます。",
     exampleSrc:"A: The town has changed quite a lot.\nB: It is completely different from ten years ago.",
     funFact:"かわる/かえる is one of the trickiest pairs because かえる has multiple unrelated meanings: 帰る (to return home), 変える (to change something), and 買える (to be able to buy). Context and kanji distinguish them. きもちがかわる (feelings change) uses intransitive naturally."},

    {type:"teach", trg:"そだつ", src:"to grow up / to be raised / intransitive", pos:"verb", gender:null,
     note:"Intransitive: こどもがそだつ. Pair: そだてる (transitive, to raise).\nそだった = I grew up in.",
     example:"A: どこでそだちましたか？\nB: おおさかでそだちました。",
     exampleSrc:"A: Where did you grow up?\nB: I grew up in Osaka.",
     funFact:"そだつ/そだてる is a beautiful pair. こどもがそだつ (a child grows up) vs. こどもをそだてる (to raise a child). こそだて (child-raising) is a major topic in Japan. Plants also そだつ: はながそだつ (flowers grow). そだちがいい (well-raised) describes someone's upbringing."},

    {type:"teach", trg:"まざる", src:"to be mixed / to mingle / intransitive", pos:"verb", gender:null,
     note:"Intransitive: いろがまざる. Pair: まぜる (transitive, to mix).\nまざっている = mixed together.",
     example:"A: いろいろなぶんかがまざっています。\nB: たぶんかしゃかいですね。",
     exampleSrc:"A: Various cultures are mixed together.\nB: It is a multicultural society.",
     funFact:"まざる/まぜる is another essential pair. こんらんがまざる (confusion is mixed in), ぐんしゅうにまざる (to mingle in a crowd). The intransitive まざる emphasizes the resulting state of being mixed, while まぜる emphasizes the action of mixing."},

    {type:"teach", trg:"うつる", src:"to move / to transfer / to be reflected / intransitive", pos:"verb", gender:null,
     note:"Intransitive: かがみにうつる (reflected in mirror). Pair: うつす (transitive).\nMultiple meanings depending on kanji.",
     example:"A: みずにやまがうつっています。\nB: きれいですね。しゃしんをとりましょう。",
     exampleSrc:"A: The mountain is reflected in the water.\nB: Beautiful. Let us take a photo.",
     funFact:"うつる has several kanji: 映る (to be reflected), 移る (to move/transfer), 写る (to appear in a photo). Each pairs with うつす: 映す (to project), 移す (to move something), 写す (to copy/photograph). This one-sound, many-meaning pattern is typical of Japanese."},

    {type:"fb", s:"パソコンが{1}てしまいました。\n(My computer broke.)", a:"こわれ", opts:["こわれ","こわし","おち","あき"], sSrc:"My computer broke.",
     hint:"Use the intransitive form because the computer broke on its own."},

    {type:"teach", trg:"たまる", src:"to accumulate / to pile up / intransitive", pos:"verb", gender:null,
     note:"Intransitive: ストレスがたまる. Pair: ためる (transitive, to save/accumulate).\nおかねがたまる = money accumulates.",
     example:"A: しごとがたまっています。\nB: すこしずつかたづけましょう。",
     exampleSrc:"A: Work has piled up.\nB: Let us handle it little by little.",
     funFact:"たまる/ためる is great for everyday complaints: ストレスがたまる (stress piles up), せんたくものがたまる (laundry piles up), つかれがたまる (fatigue accumulates). The transitive ためる is positive: おかねをためる (to save money), ポイントをためる (to collect points)."},

    {type:"teach", trg:"なおる", src:"to be fixed / to heal / intransitive", pos:"verb", gender:null,
     note:"Intransitive: かぜがなおる (cold heals). Pair: なおす (transitive, to fix/heal).\nAlso: to return to normal.",
     example:"A: パソコンがなおりました。\nB: よかったですね。",
     exampleSrc:"A: The computer is fixed.\nB: That is good.",
     funFact:"なおる/なおす covers both mechanical fixing and medical healing. びょうきがなおる (illness heals), くせがなおる (habit is corrected), くるまをなおす (to fix a car), まちがいをなおす (to correct a mistake). Japanese people say おだいじに hoping the person's illness なおる."},

    {type:"match", pairs:[{trg:"あく/あける",src:"to open"},{trg:"しまる/しめる",src:"to close"},{trg:"こわれる/こわす",src:"to break"},{trg:"おちる/おとす",src:"to fall/drop"},{trg:"なおる/なおす",src:"to be fixed/to fix"}],
     hint:"Match each transitivity pair with its shared English meaning."},

    {type:"mc", q:"Why do Japanese speakers prefer こわれた (it broke) over こわした (I broke it)?", opts:["Japanese naturally frames events from the perspective of the affected object","To avoid taking responsibility","Because transitive verbs are harder to conjugate","Because Japanese has no transitive verbs"], ans:"Japanese naturally frames events from the perspective of the affected object",
     hint:"This reflects how J... grammar describes e..., not a cultural avoidance."},

    {type:"fb", s:"きせつが{1}ましたね。\n(The season has changed, hasn't it.)", a:"かわり", opts:["かわり","かえ","なおり","うつり"], sSrc:"The season has changed, hasn't it.",
     hint:"Use the intransitive form because the season changes naturally on its own."},

    {type:"mc", q:"Which pair means 'to grow up / to raise'?", opts:["そだつ / そだてる","あく / あける","こわれる / こわす","きまる / きめる"], ans:"そだつ / そだてる",
     hint:"The intransitive form describes a child growing, the transitive describes raising a child."}
  ]
};
export default BATCH8_L1;
