// Batch 8 – Unit 11 (A2.1 て-form): Household Chores & Actions
const BATCH8_L1 = {
  id:"jav2_u11l_b8_1", title:"家事(かじ)の動詞(どうし)", icon:"🧹", xp:15, board:true,
  steps:[
    {type:"intro", title:"家事(かじ)の動詞(どうし)",
     desc:"Learn household action verbs that use て-form in daily requests and descriptions. These verbs cover cleaning, washing, organizing, and maintaining a home.",
     goals:["Use household action verbs in て-form","Make polite requests about chores","Describe ongoing household activities"]},

    {type:"teach", trg:"干(ほ)す", src:"to hang out to dry / to air", pos:"verb", gender:null,
     note:"洗濯物(せんたくもの)を干(ほ)す = to hang laundry out to dry.\nて-form: 干(ほ)して.",
     example:"A: 洗濯物(せんたくもの)を干(ほ)してください。\nB: ベランダに干(ほ)しますか？",
     exampleSrc:"A: Please hang the laundry out to dry.\nB: Shall I hang it on the balcony?",
     funFact:"干(ほ)す is essential to Japanese daily life. Most Japanese homes do not have clothes dryers. Families 干(ほ)す laundry on ベランダ (balconies) using 物干(ものほ)し竿(ざお) (drying poles). Weather reports include 洗濯(せんたく)日和(びより) (good laundry weather) ratings. The sun-dried smell is considered pleasant."},

    {type:"teach", trg:"畳(たた)む", src:"to fold (clothes/paper)", pos:"verb", gender:null,
     note:"洗濯物(せんたくもの)を畳(たた)む = to fold laundry.\nて-form: 畳(たた)んで.",
     example:"A: 洗濯物(せんたくもの)を畳(たた)んでくれますか？\nB: はい、今(いま)畳(たた)みます。",
     exampleSrc:"A: Can you fold the laundry?\nB: Yes, I will fold it now.",
     funFact:"畳(たた)む comes from the same root as 畳(たたみ) (tatami mat), which folds/stacks. Marie Kondo's famous KonMari method of 立(た)て畳(たた)み (vertical folding) brought Japanese folding techniques worldwide. Japanese department stores wrap gifts with precise origami-like 畳(たた)み techniques."},

    {type:"teach", trg:"片付(かたづ)ける", src:"to tidy up / to put away / to clean up", pos:"verb", gender:null,
     note:"部屋(へや)を片付(かたづ)ける = to tidy the room.\nて-form: 片付(かたづ)けて.",
     example:"A: 部屋(へや)を片付(かたづ)けてください。\nB: あとで片付(かたづ)けます。",
     exampleSrc:"A: Please tidy up the room.\nB: I will tidy up later.",
     funFact:"片付(かたづ)ける is the first chore word Japanese children learn. Schools require students to 片付(かたづ)け their own classrooms. There is no janitorial staff in most Japanese schools. This practice teaches 責任(せきにん) (responsibility) and 共同体(きょうどうたい) (community spirit)."},

    {type:"teach", trg:"拭(ふ)く", src:"to wipe / to mop", pos:"verb", gender:null,
     note:"テーブルを拭(ふ)く = to wipe the table. 床(ゆか)を拭(ふ)く = to mop the floor.\nて-form: 拭(ふ)いて.",
     example:"A: テーブルを拭(ふ)いてください。\nB: 濡(ぬ)れた布巾(ふきん)で拭(ふ)きますか？",
     exampleSrc:"A: Please wipe the table.\nB: Shall I wipe it with a wet cloth?",
     funFact:"雑巾(ぞうきん)がけ (floor wiping with a cloth) is a classic Japanese school cleaning activity. Students get on hands and knees and push a damp cloth across the floor. This traditional cleaning method is considered more thorough than mopping and builds character."},

    {type:"teach", trg:"掃(は)く", src:"to sweep", pos:"verb", gender:null,
     note:"床(ゆか)を掃(は)く = to sweep the floor. Not the same はく as 'to wear.'\nて-form: 掃(は)いて. 箒(ほうき) = broom.",
     example:"A: 玄関(げんかん)を掃(は)いてください。\nB: 箒(ほうき)はどこですか？",
     exampleSrc:"A: Please sweep the entrance.\nB: Where is the broom?",
     funFact:"掃(は)く (to sweep) is homophonous with 履(は)く (to wear shoes/pants). Context always makes it clear. Japanese monks practice 掃除(そうじ) (cleaning) as meditation, with 掃(は)く (sweeping) being a key practice. Sweeping the 玄関(げんかん) (entrance) is a daily ritual in traditional homes."},

    {type:"mc", q:"What does 干(ほ)す mean?", opts:["To hang out to dry","To fold","To sweep","To wipe"], ans:"To hang out to dry",
     hint:"Most Japanese homes do this with laundry on the balcony instead of using a dryer."},

    {type:"teach", trg:"零(こぼ)す", src:"to spill", pos:"verb", gender:null,
     note:"水(みず)を零(こぼ)す = to spill water. 零(こぼ)れる = to spill (intransitive).\nて-form: 零(こぼ)して.",
     example:"A: ジュースを零(こぼ)してしまいました。\nB: 布巾(ふきん)で拭(ふ)いてください。",
     exampleSrc:"A: I accidentally spilled the juice.\nB: Please wipe it with a cloth.",
     funFact:"零(こぼ)す (transitive, you spill it) and 零(こぼ)れる (intransitive, it spills) form a transitivity pair. Mastering these pairs is crucial for natural Japanese. 涙(なみだ)を零(こぼ)す (to spill tears) is a poetic way to say crying. 零(こぼ)れる笑顔(えがお) (a spilling smile) means a natural, overflowing smile."},

    {type:"teach", trg:"濡(ぬ)らす", src:"to wet / to moisten / to dampen", pos:"verb", gender:null,
     note:"手(て)を濡(ぬ)らす = to wet one's hands. 濡(ぬ)れる = to get wet (intransitive).\nて-form: 濡(ぬ)らして.",
     example:"A: タオルを濡(ぬ)らしてください。\nB: お湯(ゆ)と水(みず)どちらで？",
     exampleSrc:"A: Please wet the towel.\nB: With hot or cold water?",
     funFact:"濡(ぬ)らす and 濡(ぬ)れる are another transitivity pair. 雨(あめ)に濡(ぬ)れる (to get wet in the rain) is a common Japanese experience since not everyone carries 傘(かさ). The phrase 濡(ぬ)れ衣(ぎぬ)を着(き)せる (to put wet clothes on someone) means to falsely accuse someone."},

    {type:"teach", trg:"磨(みが)く", src:"to polish / to brush / to scrub", pos:"verb", gender:null,
     note:"歯(は)を磨(みが)く = to brush teeth. 靴(くつ)を磨(みが)く = to polish shoes.\nて-form: 磨(みが)いて.",
     example:"A: 靴(くつ)を磨(みが)いてからでかけましょう。\nB: ピカピカにします。",
     exampleSrc:"A: Let us polish our shoes before going out.\nB: I will make them sparkle.",
     funFact:"磨(みが)く goes beyond physical polishing. 腕(うで)を磨(みが)く (to polish one's skills) and 自分(じぶん)を磨(みが)く (to polish oneself) are about self-improvement. In Japanese martial arts and crafts, the concept of 磨(みが)き (polishing/refining) is central to mastery."},

    {type:"teach", trg:"乾(かわ)かす", src:"to dry (something)", pos:"verb", gender:null,
     note:"髪(かみ)を乾(かわ)かす = to dry hair. Transitive form.\nて-form: 乾(かわ)かして. 乾(かわ)く = to dry (intransitive).",
     example:"A: ドライヤーで髪(かみ)を乾(かわ)かしてください。\nB: もう乾(かわ)いていますよ。",
     exampleSrc:"A: Please dry your hair with a blow dryer.\nB: It is already dry.",
     funFact:"乾(かわ)かす (to dry something) and 乾(かわ)く (to dry on its own) form a transitivity pair. Japanese attention to these pairs reflects the language's emphasis on whether an action is deliberate or natural. 洗濯物(せんたくもの)が乾(かわ)く (laundry dries) vs. 洗濯物(せんたくもの)を乾(かわ)かす (to dry laundry)."},

    {type:"teach", trg:"混(ま)ぜる", src:"to mix / to stir / to blend", pos:"verb", gender:null,
     note:"よく混(ま)ぜる = to mix well. 混(ま)ぜる combines ingredients.\nて-form: 混(ま)ぜて.",
     example:"A: 卵(たまご)をよく混(ま)ぜてください。\nB: はい、ボウルで混(ま)ぜます。",
     exampleSrc:"A: Please mix the eggs well.\nB: Okay, I will mix them in a bowl.",
     funFact:"混(ま)ぜる is essential in Japanese cooking: 混(ま)ぜご飯(はん) (mixed rice) is a home comfort food. ねっとり混(ま)ぜる (to mix until sticky) describes how to prepare 納豆(なっとう) (fermented soybeans). The more you 混(ま)ぜる 納豆(なっとう), the more ねばねば (sticky strings) form, which is considered good."},

    {type:"fb", s:"洗濯物(せんたくもの)を{1}ください。\n(Please fold the laundry.)", a:"畳(たた)んで", opts:["畳(たた)んで","干(ほ)して","乾(かわ)かして","洗(あら)って"], sSrc:"Please fold the laundry.",
     hint:"This verb means to fold items neatly, often used for clothes after drying."},

    {type:"teach", trg:"絞(しぼ)る", src:"to wring / to squeeze / to tighten", pos:"verb", gender:null,
     note:"雑巾(ぞうきん)を絞(しぼ)る = to wring out a cloth.\nて-form: 絞(しぼ)って.",
     example:"A: 雑巾(ぞうきん)を絞(しぼ)ってから拭(ふ)いてください。\nB: はい、しっかり絞(しぼ)ります。",
     exampleSrc:"A: Please wring the cloth before wiping.\nB: Okay, I will wring it well.",
     funFact:"絞(しぼ)る has a wide range of uses: 雑巾(ぞうきん)を絞(しぼ)る (wring a cloth), レモンを絞(しぼ)る (squeeze a lemon), 声(こえ)を絞(しぼ)る (squeeze out your voice). The expression 知恵(ちえ)を絞(しぼ)る (to squeeze out wisdom) means to think hard to find a solution."},

    {type:"teach", trg:"箒(ほうき)", src:"broom", pos:"noun", gender:null,
     note:"Kanji: 箒. 箒(ほうき)で掃(は)く = to sweep with a broom.\nTraditional cleaning tool.",
     example:"A: 箒(ほうき)で玄関(げんかん)を掃(は)きました。\nB: きれいになりましたね。",
     exampleSrc:"A: I swept the entrance with a broom.\nB: It became clean.",
     funFact:"Traditional Japanese 箒(ほうき) are made from 箒草(ほうきぐさ) (broom grass) and are works of craft. Fancy 箒(ほうき) from Kyoto can cost thousands of yen. In Harry Potter, magical brooms are called 箒(ほうき) too. The witch-on-a-broomstick image translates perfectly."},

    {type:"match", pairs:[{trg:"干(ほ)す",src:"to hang out to dry"},{trg:"畳(たた)む",src:"to fold"},{trg:"片付(かたづ)ける",src:"to tidy up"},{trg:"拭(ふ)く",src:"to wipe"},{trg:"掃(は)く",src:"to sweep"}],
     hint:"Match each household chore verb with its English meaning."},

    {type:"mc", q:"What is the transitivity pair for 零(こぼ)す (to spill something)?", opts:["零(こぼ)れる (it spills on its own)","零(こぼ)した (past tense)","零(こぼ)さない (not spill)","零(こぼ)したい (want to spill)"], ans:"零(こぼ)れる (it spills on its own)",
     hint:"Japanese verbs often have transitive/intransitive pairs with different endings."},

    {type:"fb", s:"靴(くつ)を{1}てからでかけましょう。\n(Let us polish our shoes before going out.)", a:"磨(みが)い", opts:["磨(みが)い","洗(あら)っ","拭(ふ)い","掃(は)い"], sSrc:"Let us polish our shoes before going out.",
     hint:"This verb means to polish, brush, or scrub something to make it shine."},

    {type:"mc", q:"Why do Japanese school students do 雑巾(ぞうきん)がけ?", opts:["To clean floors on hands and knees, building character","To practice calligraphy on the floor","To play a traditional game","To exercise during breaks"], ans:"To clean floors on hands and knees, building character",
     hint:"This traditional cleaning method is part of students cleaning their own classrooms."}
  ,{type:"match",pairs:[{trg:"零(こぼ)す",src:"to spill"},{trg:"濡(ぬ)らす",src:"to wet / to moisten / to dampen"},{trg:"磨(みが)く",src:"to polish / to brush / to scrub"},{trg:"乾(かわ)かす",src:"to dry (something)"},{trg:"混(ま)ぜる",src:"to mix / to stir / to blend"},{trg:"絞(しぼ)る",src:"to wring / to squeeze / to tighten"}]},{type:"match",pairs:[{trg:"箒(ほうき)",src:"broom"}]}]
};
export default BATCH8_L1;
