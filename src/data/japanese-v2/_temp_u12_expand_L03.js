// Unit 12 Expansion L5 — Potential Negative & Comparisons
// Cannot do, becoming able, comparing abilities.

const LESSON_5 = {id:"jav2_u12l5", title:"できない・できるようになる", icon:"📈", xp:15, board:true, steps:[
  {type:"intro", title:"できない・できるようになる",
   desc:"Learn to say what you cannot do, and describe how abilities develop over time. The pattern ようになる (come to be able to) is essential for talking about progress and growth in any skill.",
   goals:["Express inability with the negative potential form","Use ようになる for 'became able to'","Use ようにする for 'try to / make an effort to'"]},

  {type:"teach", trg:"たべられない", src:"cannot eat", pos:"verb", gender:null,
   note:"Negative potential of たべる. たべられる becomes たべられない.\nPolite: たべられません.",
   example:"A: なっとうがたべられないんです。\nB: さいしょはみんなそうですよ。",
   exampleSrc:"A: I cannot eat natto.\nB: Everyone is like that at first.",
   funFact:"たべられない is used for both physical inability (allergies, dietary restrictions) and preference-based inability (dislike). In Japan, asking about food restrictions often uses this form: なにかたべられないものがありますか (Is there anything you cannot eat?). It is politer than asking about dislikes."},

  {type:"teach", trg:"のめない", src:"cannot drink", pos:"verb", gender:null,
   note:"Negative potential of のむ. のめる becomes のめない.\nPolite: のめません.",
   example:"A: おさけがのめないんです。\nB: じゃ、ジュースにしましょう。",
   exampleSrc:"A: I cannot drink alcohol.\nB: Then let us have juice.",
   funFact:"Saying おさけがのめない (I cannot drink alcohol) is perfectly acceptable in Japan, despite the strong drinking culture. No one will pressure you if you state it clearly. The phrase のめないひと is the Japanese equivalent of a 'non-drinker' and carries no stigma."},

  {type:"teach", trg:"〜ようになる", src:"come to be able to ~ / reach the point of ~", pos:"part", gender:null,
   note:"Potential form + ようになる = gradual achievement of ability.\nDescribes learning progress over time.",
   example:"A: にほんごがはなせるようになりましたか？\nB: すこしはなせるようになりました。",
   exampleSrc:"A: Have you become able to speak Japanese?\nB: I have become able to speak a little.",
   funFact:"ようになる is one of the most motivating grammar patterns in Japanese. It describes the journey from inability to ability. にほんごがわかるようになった (I came to understand Japanese) celebrates gradual progress. Language teachers love hearing students use this pattern."},

  {type:"mc", q:"はなせるようになりました means:", opts:["I forgot how to speak","I want to speak","I became able to speak","I stopped speaking"], ans:"I became able to speak",
   hint:"Potential form + ようになる = gradually achieved the ability."},

  {type:"teach", trg:"よめるようになった", src:"became able to read", pos:"verb", gender:null,
   note:"よめる (can read) + ようになった (reached that state).\nCelebrates a reading milestone.",
   example:"A: かんじがよめるようになりましたか？\nB: ひゃくじぐらいよめるようになりました。",
   exampleSrc:"A: Have you become able to read kanji?\nB: I have become able to read about a hundred characters.",
   funFact:"Tracking kanji progress is a shared experience among Japanese learners. Japanese children learn about 80 kanji in first grade and reach 1,006 by sixth grade. The JLPT N4 level requires about 300 kanji. Saying よめるようになった for each milestone is deeply satisfying."},

  {type:"teach", trg:"〜ようにする", src:"try to ~ / make an effort to ~", pos:"part", gender:null,
   note:"Dictionary form + ようにする = make a conscious effort.\nExpresses habitual effort or resolution.",
   example:"A: まいにちにほんごをべんきょうするようにしています。\nB: えらいですね。つづけてください。",
   exampleSrc:"A: I try to study Japanese every day.\nB: How admirable. Please keep it up.",
   funFact:"ようにする expresses deliberate effort to maintain a habit. It is softer than a direct statement: まいにちべんきょうします (I study every day, stated as fact) vs まいにちべんきょうするようにしています (I try to study every day, acknowledging it takes effort). The latter sounds more humble and honest."},

  {type:"fb", s:"かんじが___ようになりました。\n(I became able to read kanji.)", a:"よめる", opts:["よめる","よむ","よんだ","よめた"], sSrc:"I became able to read kanji.",
   hint:"The potential form (not past, not dictionary) comes before ようになる."},

  {type:"teach", trg:"むり", src:"impossible / cannot be done", pos:"adj", gender:null,
   note:"な-adjective. むりです = it is impossible. むりをしないで = do not overdo it.\nKanji: 無理.",
   example:"A: あしたまでにおわりますか？\nB: むりだとおもいます。じかんがたりません。",
   exampleSrc:"A: Will you finish by tomorrow?\nB: I think it is impossible. There is not enough time.",
   funFact:"無理 combines 無 (without) and 理 (reason/logic), meaning 'without reason' or 'unreasonable.' むりをしないでください (please do not overdo it) is a caring phrase said to people working too hard. In Japan, pushing yourself past your limits (むりをする) is common but not always praised."},

  {type:"teach", trg:"ぜんぜんできない", src:"cannot do at all", pos:"verb", gender:null,
   note:"ぜんぜん + negative = not at all. Strongest negative.\nぜんぜん + positive is slang (= totally).",
   example:"A: スキーができますか？\nB: ぜんぜんできません。いちどもしたことがないです。",
   exampleSrc:"A: Can you ski?\nB: I cannot at all. I have never done it even once.",
   funFact:"ぜんぜん traditionally pairs only with negatives: ぜんぜんわからない (do not understand at all). Young people increasingly use it with positives: ぜんぜんいい (totally fine), which older speakers consider incorrect. The traditional usage is safer for learners."},

  {type:"mc", q:"まいにちうんどうするようにしています means:", opts:["I exercise every day for sure","I try to exercise every day","I used to exercise every day","I cannot exercise every day"], ans:"I try to exercise every day",
   hint:"ようにしている expresses making a conscious effort to do something regularly."},

  {type:"teach", trg:"にがて", src:"weak at / not good with", pos:"adj", gender:null,
   note:"な-adjective. Less blunt than へた. にがてなもの = things you are not good with.\nKanji: 苦手.",
   example:"A: すうがくがにがてです。\nB: にがてでもれんしゅうすればできるようになりますよ。",
   exampleSrc:"A: I am not good at math.\nB: Even if you are not good at it, if you practice, you will become able to do it.",
   funFact:"苦手 combines 苦 (bitter/suffering) and 手 (hand). It is much softer than へた (unskilled). にがて implies personal difficulty rather than objective lack of skill. It is safe to use about yourself and others: あのせんせいがにがてです (I find that teacher difficult to deal with)."},

  {type:"teach", trg:"とくい", src:"strong point / good at", pos:"adj", gender:null,
   note:"な-adjective. Humble way to describe your own strengths. Opposite of にがて.\nKanji: 得意.",
   example:"A: なにかとくいなことがありますか？\nB: えをかくことがとくいです。",
   exampleSrc:"A: Is there something you are good at?\nB: Drawing is my strong point.",
   funFact:"得意 combines 得 (gain/obtain) and 意 (mind/intention). Use とくい for yourself and じょうず for others. In job interviews, とくいなこと (strengths) and にがてなこと (weaknesses) are standard questions. Having a prepared answer for both is essential."},

  {type:"fb", s:"すうがくが___です。\n(I am not good at math.)", a:"にがて", opts:["にがて","じょうず","とくい","すき"], sSrc:"I am not good at math.",
   hint:"The な-adjective meaning 'weak at' that is softer than へた."},

  {type:"match", pairs:[{trg:"たべられない",src:"cannot eat"},{trg:"のめない",src:"cannot drink"},{trg:"むり",src:"impossible"},{trg:"ぜんぜんできない",src:"cannot at all"}]},

  {type:"match", pairs:[{trg:"ようになる",src:"come to be able"},{trg:"ようにする",src:"try to / make effort"},{trg:"にがて",src:"weak at"},{trg:"とくい",src:"strong point"}]},

  {type:"mc", q:"にがて is softer than:", opts:["じょうず","とくい","へた","すき"], ans:"へた",
   hint:"Both mean 'not good at,' but one is personal difficulty, the other is objective lack of skill."},

  {type:"fb", s:"まいにちにほんごをべんきょうする___しています。\n(I try to study Japanese every day.)", a:"ように", opts:["ように","ことが","ために","ことを"], sSrc:"I try to study Japanese every day.",
   hint:"The pattern meaning 'make an effort to' that follows the dictionary form."},

  {type:"tip", title:"Ability Progress Patterns",
   text:"Cannot do: potential negative\nおよげない (cannot swim)\nたべられない (cannot eat)\n\nBecame able: potential + ようになる\nおよげるようになった (became able to swim)\nよめるようになった (became able to read)\n\nMake effort: dictionary + ようにする\nべんきょうするようにしている (trying to study)\nはやくねるようにしている (trying to sleep early)\n\nStrengths and weaknesses:\nとくい (my strong point) vs にがて (my weak point)",
   deepDive:{title:"ようになる vs ようにする",
    text:"These two patterns look similar but differ importantly:\n\nようになる = natural/gradual change (it happened)\nにほんごがわかるようになった。(I came to understand Japanese.)\nThe change happened through time and effort, but the focus is on the result.\n\nようにする = deliberate effort (I am trying)\nにほんごをはなすようにしている。(I am trying to speak Japanese.)\nThe focus is on the conscious effort, not the result.\n\nようになりたい (I want to become able to) combines both: it expresses a future goal that requires ongoing effort."}},
]};
export default LESSON_5;
