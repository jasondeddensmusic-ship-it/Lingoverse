// Batch 8 – Unit 11 (A2.1 て-form): Household Chores & Actions
const BATCH8_L1 = {
  id:"jav2_u11l_b8_1", title:"かじのどうし", icon:"🧹", xp:15, board:true,
  steps:[
    {type:"intro", title:"かじのどうし",
     desc:"Learn household action verbs that use て-form in daily requests and descriptions. These verbs cover cleaning, washing, organizing, and maintaining a home.",
     goals:["Use household action verbs in て-form","Make polite requests about chores","Describe ongoing household activities"]},

    {type:"teach", trg:"ほす", src:"to hang out to dry / to air", pos:"verb", gender:null,
     note:"せんたくものをほす = to hang laundry out to dry.\nて-form: ほして.",
     example:"A: せんたくものをほしてください。\nB: ベランダにほしますか？",
     exampleSrc:"A: Please hang the laundry out to dry.\nB: Shall I hang it on the balcony?",
     funFact:"ほす is essential to Japanese daily life. Most Japanese homes do not have clothes dryers. Families ほす laundry on ベランダ (balconies) using ものほしざお (drying poles). Weather reports include せんたくびより (good laundry weather) ratings. The sun-dried smell is considered pleasant."},

    {type:"teach", trg:"たたむ", src:"to fold (clothes/paper)", pos:"verb", gender:null,
     note:"せんたくものをたたむ = to fold laundry.\nて-form: たたんで.",
     example:"A: せんたくものをたたんでくれますか？\nB: はい、いまたたみます。",
     exampleSrc:"A: Can you fold the laundry?\nB: Yes, I will fold it now.",
     funFact:"たたむ comes from the same root as たたみ (tatami mat), which folds/stacks. Marie Kondo's famous KonMari method of たてたたみ (vertical folding) brought Japanese folding techniques worldwide. Japanese department stores wrap gifts with precise origami-like たたみ techniques."},

    {type:"teach", trg:"かたづける", src:"to tidy up / to put away / to clean up", pos:"verb", gender:null,
     note:"へやをかたづける = to tidy the room.\nて-form: かたづけて.",
     example:"A: へやをかたづけてください。\nB: あとでかたづけます。",
     exampleSrc:"A: Please tidy up the room.\nB: I will tidy up later.",
     funFact:"かたづける is the first chore word Japanese children learn. Schools require students to かたづけ their own classrooms. There is no janitorial staff in most Japanese schools. This practice teaches responsibility (せきにん) and community spirit (きょうどうたい)."},

    {type:"teach", trg:"ふく", src:"to wipe / to mop", pos:"verb", gender:null,
     note:"テーブルをふく = to wipe the table. ゆかをふく = to mop the floor.\nて-form: ふいて.",
     example:"A: テーブルをふいてください。\nB: ぬれたふきんでふきますか？",
     exampleSrc:"A: Please wipe the table.\nB: Shall I wipe it with a wet cloth?",
     funFact:"ぞうきんがけ (floor wiping with a cloth) is a classic Japanese school cleaning activity. Students get on hands and knees and push a damp cloth across the floor. This traditional cleaning method is considered more thorough than mopping and builds character."},

    {type:"teach", trg:"はく", src:"to sweep", pos:"verb", gender:null,
     note:"ゆかをはく = to sweep the floor. Not the same はく as 'to wear.'\nて-form: はいて. ほうき = broom.",
     example:"A: げんかんをはいてください。\nB: ほうきはどこですか？",
     exampleSrc:"A: Please sweep the entrance.\nB: Where is the broom?",
     funFact:"はく (to sweep) is homophonous with はく (to wear shoes/pants). Context always makes it clear. Japanese monks practice そうじ (cleaning) as meditation, with はく (sweeping) being a key practice. Sweeping the entrance (げんかん) is a daily ritual in traditional homes."},

    {type:"mc", q:"What does ほす mean?", opts:["To hang out to dry","To fold","To sweep","To wipe"], ans:"To hang out to dry",
     hint:"Most Japanese homes do this with laundry on the balcony instead of using a dryer."},

    {type:"teach", trg:"こぼす", src:"to spill", pos:"verb", gender:null,
     note:"みずをこぼす = to spill water. こぼれる = to spill (intransitive).\nて-form: こぼして.",
     example:"A: ジュースをこぼしてしまいました。\nB: ふきんでふいてください。",
     exampleSrc:"A: I accidentally spilled the juice.\nB: Please wipe it with a cloth.",
     funFact:"こぼす (transitive, you spill it) and こぼれる (intransitive, it spills) form a transitivity pair. Mastering these pairs is crucial for natural Japanese. なみだをこぼす (to spill tears) is a poetic way to say crying. こぼれるえがお (a spilling smile) means a natural, overflowing smile."},

    {type:"teach", trg:"ぬらす", src:"to wet / to moisten / to dampen", pos:"verb", gender:null,
     note:"てをぬらす = to wet one's hands. ぬれる = to get wet (intransitive).\nて-form: ぬらして.",
     example:"A: タオルをぬらしてください。\nB: おゆとみずどちらで？",
     exampleSrc:"A: Please wet the towel.\nB: With hot or cold water?",
     funFact:"ぬらす and ぬれる are another transitivity pair. あめにぬれる (to get wet in the rain) is a common Japanese experience since not everyone carries かさ. The phrase ぬれぎぬをきせる (to put wet clothes on someone) means to falsely accuse someone."},

    {type:"teach", trg:"みがく", src:"to polish / to brush / to scrub", pos:"verb", gender:null,
     note:"はをみがく = to brush teeth. くつをみがく = to polish shoes.\nて-form: みがいて.",
     example:"A: くつをみがいてからでかけましょう。\nB: ピカピカにします。",
     exampleSrc:"A: Let us polish our shoes before going out.\nB: I will make them sparkle.",
     funFact:"みがく goes beyond physical polishing. うでをみがく (to polish one's skills) and じぶんをみがく (to polish oneself) are about self-improvement. In Japanese martial arts and crafts, the concept of みがき (polishing/refining) is central to mastery."},

    {type:"teach", trg:"かわかす", src:"to dry (something)", pos:"verb", gender:null,
     note:"かみをかわかす = to dry hair. Transitive form.\nて-form: かわかして. かわく = to dry (intransitive).",
     example:"A: ドライヤーでかみをかわかしてください。\nB: もうかわいていますよ。",
     exampleSrc:"A: Please dry your hair with a blow dryer.\nB: It is already dry.",
     funFact:"かわかす (to dry something) and かわく (to dry on its own) form a transitivity pair. Japanese attention to these pairs reflects the language's emphasis on whether an action is deliberate or natural. せんたくものがかわく (laundry dries) vs. せんたくものをかわかす (to dry laundry)."},

    {type:"teach", trg:"まぜる", src:"to mix / to stir / to blend", pos:"verb", gender:null,
     note:"よくまぜる = to mix well. まぜる combines ingredients.\nて-form: まぜて.",
     example:"A: たまごをよくまぜてください。\nB: はい、ボウルでまぜます。",
     exampleSrc:"A: Please mix the eggs well.\nB: Okay, I will mix them in a bowl.",
     funFact:"まぜる is essential in Japanese cooking: まぜごはん (mixed rice) is a home comfort food. ねっとりまぜる (to mix until sticky) describes how to prepare なっとう (fermented soybeans). The more you まぜる なっとう, the more ねばねば (sticky strings) form, which is considered good."},

    {type:"fb", s:"せんたくものを{1}ください。\n(Please fold the laundry.)", a:"たたんで", opts:["たたんで","ほして","かわかして","あらって"], sSrc:"Please fold the laundry.",
     hint:"This verb means to fold items neatly, often used for clothes after drying."},

    {type:"teach", trg:"しぼる", src:"to wring / to squeeze / to tighten", pos:"verb", gender:null,
     note:"ぞうきんをしぼる = to wring out a cloth.\nて-form: しぼって.",
     example:"A: ぞうきんをしぼってからふいてください。\nB: はい、しっかりしぼります。",
     exampleSrc:"A: Please wring the cloth before wiping.\nB: Okay, I will wring it well.",
     funFact:"しぼる has a wide range of uses: ぞうきんをしぼる (wring a cloth), レモンをしぼる (squeeze a lemon), こえをしぼる (squeeze out your voice). The expression ちえをしぼる (to squeeze out wisdom) means to think hard to find a solution."},

    {type:"teach", trg:"ほうき", src:"broom", pos:"noun", gender:null,
     note:"Kanji: 箒. ほうきではく = to sweep with a broom.\nTraditional cleaning tool.",
     example:"A: ほうきでげんかんをはきました。\nB: きれいになりましたね。",
     exampleSrc:"A: I swept the entrance with a broom.\nB: It became clean.",
     funFact:"Traditional Japanese ほうき are made from ホウキグサ (broom grass) and are works of craft. Fancy ほうき from Kyoto can cost thousands of yen. In Harry Potter, magical brooms are called ほうき too. The witch-on-a-broomstick image translates perfectly."},

    {type:"match", pairs:[{trg:"ほす",src:"to hang out to dry"},{trg:"たたむ",src:"to fold"},{trg:"かたづける",src:"to tidy up"},{trg:"ふく",src:"to wipe"},{trg:"はく",src:"to sweep"}],
     hint:"Match each household chore verb with its English meaning."},

    {type:"mc", q:"What is the transitivity pair for こぼす (to spill something)?", opts:["こぼれる (it spills on its own)","こぼした (past tense)","こぼさない (not spill)","こぼしたい (want to spill)"], ans:"こぼれる (it spills on its own)",
     hint:"Japanese verbs often have transitive/intransitive pairs with different endings."},

    {type:"fb", s:"くつを{1}てからでかけましょう。\n(Let us polish our shoes before going out.)", a:"みがい", opts:["みがい","あらっ","ふい","はい"], sSrc:"Let us polish our shoes before going out.",
     hint:"This verb means to polish, brush, or scrub something to make it shine."},

    {type:"mc", q:"Why do Japanese school students do ぞうきんがけ?", opts:["To clean floors on hands and knees, building character","To practice calligraphy on the floor","To play a traditional game","To exercise during breaks"], ans:"To clean floors on hands and knees, building character",
     hint:"This traditional cleaning method is part of students cleaning their own classrooms."}
  ]
};
export default BATCH8_L1;
