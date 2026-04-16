// Batch 6 – Unit 28 (B2.2 Written vs Spoken): Proverbs & Idiomatic Expressions
const BATCH6_L1 = {
  id:"jav2_u28l_b6_1", title:"ことわざとかんようく", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"ことわざとかんようく",
     desc:"Learn classic Japanese proverbs and idiomatic expressions. These set phrases appear in daily conversation, writing, and JLPT tests. They reveal deep cultural values and wisdom.",
     goals:["Understand and use common ことわざ (proverbs)","Learn かんようく (idioms) with body part words","Recognize these expressions in reading and conversation"]},

    {type:"teach", trg:"ことわざ", src:"proverb / saying", pos:"noun", gender:null,
     note:"Kanji: 諺. にほんのことわざ = Japanese proverbs.\nことわざにあるように = as the proverb says.",
     example:"A: いいことわざをしっていますか？\nB: さるもきからおちる。どんなめいじんでもしっぱいする、というものです。",
     exampleSrc:"A: Do you know any good proverbs?\nB: 'Even monkeys fall from trees.' It means even experts make mistakes.",
     funFact:"Japanese ことわざ (proverbs) often use nature imagery: animals, seasons, and landscapes. Many originated in China and adapted to Japanese culture. Others are uniquely Japanese. Knowing ことわざ is considered a sign of education and wisdom. JLPT N2 and N1 tests regularly include them."},

    {type:"teach", trg:"いしのうえにもさんねん", src:"patience pays off (sit on a stone for 3 years)", pos:"intj", gender:null,
     note:"Literal: even on a stone, three years.\nMeaning: perseverance eventually brings success.",
     example:"A: にほんごがなかなかじょうたつしません。\nB: いしのうえにもさんねんですよ。つづけてください。",
     exampleSrc:"A: My Japanese is not improving easily.\nB: Patience pays off. Keep going.",
     funFact:"This proverb teaches that even a cold stone warms if you sit on it for three years. It encourages persistence through discomfort. The Japanese version of 'patience is a virtue.' It is often said to new employees struggling with their first job or students frustrated with studies."},

    {type:"teach", trg:"のうあるたかはつめをかくす", src:"a talented hawk hides its claws", pos:"intj", gender:null,
     note:"Meaning: truly skilled people do not show off.\nThe Japanese value of modesty.",
     example:"A: たなかさんはじつはピアノのめいじんなんですよ。\nB: のうあるたかはつめをかくすですね。",
     exampleSrc:"A: Mr. Tanaka is actually a piano master.\nB: A talented hawk hides its claws, indeed.",
     funFact:"This proverb embodies the Japanese value of modesty (けんきょ). Boasting is culturally discouraged. Truly talented people quietly demonstrate ability rather than announcing it. The reverse is also true: those who boast loudly are suspected of lacking real skill. This proverb is frequently applied to humble overachievers."},

    {type:"teach", trg:"めからうろこ", src:"scales falling from one's eyes (a revelation)", pos:"intj", gender:null,
     note:"Short for めからうろこがおちる.\nMeaning: suddenly understanding something clearly.",
     example:"A: そのせつめいをきいてめからうろこでした。\nB: わかりやすかったですか？",
     exampleSrc:"A: Hearing that explanation was a revelation.\nB: Was it easy to understand?",
     funFact:"めからうろこがおちる (scales fall from the eyes) actually comes from the Bible (Acts 9:18), entering Japanese through Christian missions. Despite its Western origin, it is thoroughly naturalized in Japanese. It describes the moment of sudden clarity: 'Ah, now I understand!' Used in conversation, books, and TV."},

    {type:"teach", trg:"くちがかるい", src:"loose-lipped / cannot keep a secret", pos:"adj", gender:null,
     note:"くち = mouth, かるい = light. Body part + adjective idiom.\nOpposite: くちがかたい (tight-lipped).",
     example:"A: あのひとにはひみつをいわないほうがいいですよ。\nB: くちがかるいんですか？",
     exampleSrc:"A: You should not tell that person secrets.\nB: Are they loose-lipped?",
     funFact:"Japanese has many body-part idioms: くちがかるい (loose-lipped), くちがかたい (tight-lipped), みみがいたい (painful to hear / true criticism), めがたかい (has a discerning eye), てがはやい (quick-handed / efficient). These vivid expressions paint personality through physical metaphors."},

    {type:"mc", q:"いしのうえにもさんねん means:", opts:["Patience and persistence pay off","Three years is a long time","Stones are uncomfortable","Never sit still"], ans:"Patience and persistence pay off",
     hint:"This proverb encourages continuing through difficulty until results come."},

    {type:"teach", trg:"はらをたてる", src:"to get angry / to be furious", pos:"verb", gender:null,
     note:"はら = belly/stomach. Anger 'stands up' in the belly.\nAlso: はらがたつ (intransitive).",
     example:"A: やくそくをやぶられてはらをたてました。\nB: そうですよね。おこるのもとうぜんです。",
     exampleSrc:"A: I got angry because they broke their promise.\nB: Of course. It is natural to be angry.",
     funFact:"Japanese locates emotions in the belly (はら), not the heart. はらがたつ (anger rises in the belly), はらをくくる (to brace oneself, literally 'tie the belly'), はらぐろい (black-bellied = scheming). The phrase はらをわってはなす (to split open the belly and talk) means to speak with complete honesty."},

    {type:"teach", trg:"あしをひっぱる", src:"to hold someone back / to drag someone down", pos:"verb", gender:null,
     note:"あし = leg/foot. Pulling someone's leg (negative meaning).\nNOT the English 'pulling your leg' (joking).",
     example:"A: ミスがおおいとチームのあしをひっぱってしまいます。\nB: きをつけましょう。",
     exampleSrc:"A: Too many mistakes will drag the team down.\nB: Let us be careful.",
     funFact:"あしをひっぱる (to pull someone's leg) means to hinder or hold back in Japanese. This is the OPPOSITE of the English idiom 'pulling your leg' (joking). Other あし idioms: あしがはやい (fast on one's feet / food spoils quickly), あしもとをみる (to exploit someone's weakness, look at their feet)."},

    {type:"teach", trg:"めをまわす", src:"to faint / to be overwhelmed", pos:"verb", gender:null,
     note:"め = eyes. Eyes 'spin around' from shock or overwhelm.\nめがまわる = to feel dizzy.",
     example:"A: せいきゅうしょのがくをみてめをまわしました。\nB: そんなにたかかったのですか？",
     exampleSrc:"A: I nearly fainted when I saw the bill amount.\nB: Was it that expensive?",
     funFact:"めをまわす (eyes spinning) describes being overwhelmed to the point of near-fainting. Other め idioms: めをつぶる (close your eyes = overlook), めをさます (open your eyes = wake up/realize), めをうたがう (doubt your eyes = can't believe what you see). Eyes are the most idiom-rich body part in Japanese."},

    {type:"teach", trg:"てをぬく", src:"to cut corners / to slack off", pos:"verb", gender:null,
     note:"て = hand. Pulling your hand out = not putting full effort.\nてぬき = cutting corners.",
     example:"A: しごとでてをぬいてはいけません。\nB: はい、さいごまでしっかりやります。",
     exampleSrc:"A: You must not cut corners at work.\nB: Yes, I will do it properly until the end.",
     funFact:"てをぬく (pull out the hand) means doing less than your best. Other て idioms: てをだす (put your hand in = get involved), てにいれる (put in your hand = obtain), てをやく (burn your hand = have trouble with), てがかかる (hands are occupied = requires effort). The hand represents action and effort in Japanese."},

    {type:"fb", s:"のうあるたかは{1}をかくす。\n(A talented hawk hides its claws.)", a:"つめ", opts:["つめ","て","あし","め"], sSrc:"A talented hawk hides its claws.",
     hint:"The body part that hawks use to catch prey. Talented people hide their skills."},

    {type:"teach", trg:"みみにたこができる", src:"to be sick of hearing something (calluses form on ears)", pos:"intj", gender:null,
     note:"みみ = ears, たこ = callus. Hearing something so often that calluses form.\nUsed for nagging or repetition.",
     example:"A: べんきょうしなさい！\nB: もうみみにたこができるくらいきいたよ。",
     exampleSrc:"A: Study!\nB: I have heard that so many times my ears have calluses.",
     funFact:"みみにたこができる is a humorous exaggeration. The image of calluses forming from repeated exposure to the same words is vivid. Children use it when parents nag them. It is similar to 'broken record' in English but uses the body as the site of wear. みみ idioms: みみがいたい (painful to hear = harsh truth), みみよりな (worth hearing = good news)."},

    {type:"mc", q:"あしをひっぱる in Japanese means:", opts:["To hold someone back or hinder them","To joke with someone","To help someone walk","To kick someone"], ans:"To hold someone back or hinder them",
     hint:"Unlike the English idiom, this Japanese expression has a negative, obstructing meaning."},

    {type:"match", pairs:[
      {trg:"くちがかるい", src:"loose-lipped"},
      {trg:"はらをたてる", src:"to get angry"},
      {trg:"あしをひっぱる", src:"to hold someone back"},
      {trg:"めをまわす", src:"to be overwhelmed"},
      {trg:"てをぬく", src:"to cut corners"}
    ]},

    {type:"fb", s:"しごとで{1}をぬいてはいけません。\n(You must not cut corners at work.)", a:"て", opts:["て","あし","め","くち"], sSrc:"You must not cut corners at work.",
     hint:"The body part meaning 'hand' that represents effort in this idiom."},

    {type:"mc", q:"めからうろこ describes:", opts:["A sudden moment of understanding","Being unable to see","Crying with happiness","Feeling sleepy"], ans:"A sudden moment of understanding",
     hint:"This expression describes the revelation of seeing something clearly for the first time."}
  ]
};
export default BATCH6_L1;
