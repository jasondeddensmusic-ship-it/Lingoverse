// Unit 11 Expansion L3. Compound て-form (connecting actions)
// て-form chains, てから, sequential actions.

const LESSON_3 = {id:"jav2_u11l3", title:"アクションをつなげよう", icon:"⛓️", xp:15, board:true, steps:[
  {type:"intro", title:"アクションをつなげよう",
   desc:"Chain multiple actions together using the て-form. When you connect verbs with て, you create natural sequences like 'I got up, ate breakfast, and went to school.' This lesson also introduces てから (after doing) for explicit ordering.",
   goals:["Connect two or more actions using て-form chains","Use てから to mark 'after doing X, then Y'","Describe daily routines with sequential actions"]},

  {type:"teach", trg:"おきて", src:"wake up (て-form)", pos:"verb", gender:null,
   note:"おきる (to wake up) is Group 2. Drop る, add て.\nFirst action in many morning routines.",
   example:"A: まいあさなんじにおきますか？\nB: ろくじにおきて、シャワーをあびます。",
   exampleSrc:"A: What time do you wake up every morning?\nB: I wake up at six and take a shower.",
   funFact:"おきる is Group 2 despite ending in -iru. The て-form chain おきて、たべて、いく (wake up, eat, go) is the backbone of describing routines. Japanese daily life descriptions almost always use these chains."},

  {type:"teach", trg:"あらって", src:"wash (て-form)", pos:"verb", gender:null,
   note:"あらう (to wash) is Group 1. う ending becomes って.\nあらう becomes あらって.",
   example:"A: てをあらってからごはんをたべます。\nB: いいしゅうかんですね。",
   exampleSrc:"A: I eat after washing my hands.\nB: That is a good habit.",
   funFact:"Hand washing (tearai) is deeply ingrained in Japanese culture, long predating modern hygiene awareness. Most Japanese restaurants provide おしぼり (wet towels) for hand cleaning before meals. The verb あらう covers washing hands, dishes, clothes, and cars."},

  {type:"teach", trg:"きがえて", src:"change clothes (て-form)", pos:"verb", gender:null,
   note:"きがえる (to change clothes) is Group 2. Drop る, add て.\nき (wearing) + かえる (change).",
   example:"A: かえったらきがえてからしゅくだいをします。\nB: えらいですね。",
   exampleSrc:"A: When I get home, I change clothes and then do homework.\nB: How diligent.",
   funFact:"きがえる combines 着 (wear) and 替える (replace). Japanese schools require changing into indoor shoes (うわばき) and sometimes gym clothes. Many companies also have uniform changes. The concept of changing for different activities is deeply cultural."},

  {type:"mc", q:"おきて、シャワーをあびて、あさごはんをたべます describes:", opts:["A sequence of morning actions","Three different people","Three choices","Three separate days"], ans:"A sequence of morning actions",
   hint:"て-form chains connect a... in the order they happen."},

  {type:"teach", trg:"〜てから", src:"after doing ~, then...", pos:"part", gender:null,
   note:"て-form + から = after doing X, then Y. Emphasizes that X finishes first.\nStronger ordering than て alone.",
   example:"A: しゅくだいをしてからあそびにいきます。\nB: わかりました。",
   exampleSrc:"A: I will go play after doing homework.\nB: Understood.",
   funFact:"てから adds explicit sequencing that plain て-chains lack. With おきて、たべる, the sequence is implied. With おきてから、たべる, you stress that waking up must finish before eating starts. This distinction matters for instructions and promises."},

  {type:"teach", trg:"でて", src:"leave / go out (て-form)", pos:"verb", gender:null,
   note:"でる (to leave/exit) is Group 2. Drop る, add て.\nいえをでて = leave the house.",
   example:"A: あさはやくいえをでて、えきまであるきます。\nB: なんぷんかかりますか？",
   exampleSrc:"A: I leave the house early in the morning and walk to the station.\nB: How many minutes does it take?",
   funFact:"でる is one of the most versatile verbs. It means to exit, to leave, to appear, to attend, and to submit. でかける (to go out) is a compound using で. The kanji 出 depicts a sprout coming out of the ground."},

  {type:"fb", s:"てをあらって{1}ごはんをたべます。\n(I eat after washing my hands.)", a:"から", opts:["から","まで","けど","のに"], sSrc:"I eat after washing my hands.",
   hint:"The particle added after て-form to mean 'after doing, then...'"},

  {type:"teach", trg:"かえって", src:"return home (て-form)", pos:"verb", gender:null,
   note:"かえる (to return) is Group 1. る ending becomes って.\nかえる becomes かえって.",
   example:"A: しごとがおわってからいえにかえって、りょうりをします。\nB: じぶんでりょうりしますか？すごいですね。",
   exampleSrc:"A: After work ends, I go home and cook.\nB: You cook yourself? Impressive.",
   funFact:"かえる (Group 1) is easily confused with かえる (Group 2, to change). Context distinguishes them. The 'return home' かえる uses kanji 帰る (showing a broom and a building, suggesting sweeping your way home). ただいま (I am home) is said upon returning."},

  {type:"teach", trg:"つくって", src:"make (て-form)", pos:"verb", gender:null,
   note:"つくる (to make) is Group 1. る ending becomes って.\nつくる becomes つくって.",
   example:"A: ばんごはんをつくってからたべます。\nB: なにをつくりますか？",
   exampleSrc:"A: I cook dinner and then eat.\nB: What will you make?",
   funFact:"つくる covers making, building, creating, and cooking. The kanji 作る shows a person (亻) working with tools. Japanese cuisine values the art of making food: てづくり (handmade) is a premium quality marker for bento, sweets, and gifts."},

  {type:"mc", q:"しゅくだいをしてからあそびにいく means:", opts:["Play before homework","Play after doing homework","Play and do homework together","Play instead of homework"], ans:"Play after doing homework",
   hint:"てから emphasizes completing the first action before starting the second."},

  {type:"teach", trg:"ねて", src:"sleep (て-form)", pos:"verb", gender:null,
   note:"ねる (to sleep) is Group 2. Drop る, add て.\nねる becomes ねて.",
   example:"A: よるはいつもじゅういちじにねて、あさろくじにおきます。\nB: はやおきですね。",
   exampleSrc:"A: I always sleep at eleven at night and wake up at six in the morning.\nB: You are an early riser.",
   funFact:"ねる covers both 'to sleep' and 'to go to bed.' The distinction English makes between them does not exist in Japanese. おやすみなさい (good night) comes from やすむ (to rest), not ねる. Japanese futon culture means 'going to bed' literally involves laying out the futon."},

  {type:"teach", trg:"あそんで", src:"play / hang out (て-form)", pos:"verb", gender:null,
   note:"あそぶ (to play/hang out) is Group 1. ぶ ending becomes んで.\nあそぶ becomes あそんで.",
   example:"A: がっこうがおわってからともだちとあそんで、いえにかえります。\nB: たのしそうですね。",
   exampleSrc:"A: After school ends, I hang out with friends and go home.\nB: That sounds fun.",
   funFact:"あそぶ covers 'to play' for children but also 'to hang out' or 'to have fun' for adults. あそびにいく means 'to go hang out' or 'to go visit someone for fun.' It does not sound childish when adults use it. The noun あそび means leisure or entertainment."},

  {type:"fb", s:"いえに{1}、ごはんをつくります。\n(I return home and cook dinner.)", a:"かえって", opts:["かえって","かえて","かえりて","かえるて"], sSrc:"I return home and cook dinner.",
   hint:"かえる (return) is Group 1 with る ending, so る becomes って."},

  {type:"match", pairs:[{trg:"おきて",src:"wake up (て)"},{trg:"あらって",src:"wash (て)"},{trg:"きがえて",src:"change clothes (て)"},{trg:"でて",src:"leave (て)"}]},

  {type:"match", pairs:[{trg:"かえって",src:"return (て)"},{trg:"つくって",src:"make (て)"},{trg:"ねて",src:"sleep (て)"},{trg:"あそんで",src:"play (て)"}]},

  {type:"mc", q:"Which sentence correctly uses てから?", opts:["ねますてからおきます","ねるてからおきます","ねてからおきます","ねたてからおきます"], ans:"ねてからおきます",
   hint:"てから attaches directly after the て-form. No extra endings needed."},

  {type:"fb", s:"ともだちと{1}、いえにかえります。\n(I hang out with friends and go home.)", a:"あそんで", opts:["あそんで","あそびて","あそって","あそぶて"], sSrc:"I hang out with friends and go home.",
   hint:"あそぶ is a ぶ-ending Group 1 verb. The ぶ group changes to んで."},

  {type:"tip", title:"て-form Chains vs てから",
   text:"て-form chain (natural sequence):\nおきて、たべて、いく。(Wake up, eat, go.)\nActions happen roughly in order, but the focus is on listing them.\n\nてから (strict order):\nたべてからいく。(After eating, go.)\nAction 1 must finish completely before action 2 starts.\n\nUse てから when the order matters:\nてをあらってからたべる。(Wash hands, THEN eat.)\nUse て-chains for general routines:\nおきて、きがえて、でかける。(Wake up, change, head out.)",
   deepDive:{title:"Long て-chains",
    text:"Japanese allows impressively long て-chains:\nおきて、はをみがいて、シャワーをあびて、きがえて、あさごはんをたべて、いえをでます。\n(Wake up, brush teeth, shower, change, eat breakfast, leave the house.)\n\nIn writing, these can extend to 5-6 verbs. In speech, 3-4 is typical. The final verb at the end carries the tense and politeness level for the entire chain."}},
]};
export default LESSON_3;
