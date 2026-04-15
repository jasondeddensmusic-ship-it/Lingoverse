// Unit 11 Expansion L5 — ておく and て-form review
// Preparation with ておく, prohibition with てはいけない, comprehensive review.

const LESSON_5 = {id:"jav2_u11l5", title:"ておく・てはいけない", icon:"📦", xp:15, board:true, steps:[
  {type:"intro", title:"ておく・てはいけない",
   desc:"Two more essential て-form compounds: ておく (do in advance/prepare) and てはいけない (must not do). Together with てしまう and てみる, these four compounds cover most real-world uses of the て-form beyond basic connections.",
   goals:["Use ておく for advance preparation","Use てはいけない for prohibition","Distinguish all て-form compound patterns"]},

  {type:"teach", trg:"〜ておく", src:"do ~ in advance / prepare by doing ~", pos:"part", gender:null,
   note:"て-form + おく = do something in preparation for later.\nPolite: ておきます. Casual contraction: とく.",
   example:"A: パーティーのまえにビールをかっておきます。\nB: いいですね。わたしはりょうりをつくっておきます。",
   exampleSrc:"A: I will buy beer in advance for the party.\nB: Good idea. I will prepare food in advance.",
   funFact:"おく literally means 'to put/place.' So ておく means 'do and leave in place for later.' Buying beer and putting it in the fridge for the party is classic ておく usage. It implies foresight and planning, valued traits in Japanese culture."},

  {type:"teach", trg:"よやくしておく", src:"make a reservation in advance", pos:"verb", gender:null,
   note:"よやくする (to reserve) + ておく. A very practical combination.\nよやく = reservation. Kanji: 予約.",
   example:"A: レストランをよやくしておきましたか？\nB: はい、もうしておきました。",
   exampleSrc:"A: Did you make a restaurant reservation in advance?\nB: Yes, I already did.",
   funFact:"よやく combines 予 (in advance) and 約 (promise/agreement). In Japan, reservations are taken very seriously. No-shows are considered extremely rude. Some popular ramen shops do not take reservations at all, requiring lining up, which has its own cultural etiquette."},

  {type:"teach", trg:"じゅんびしておく", src:"prepare in advance", pos:"verb", gender:null,
   note:"じゅんびする (to prepare) + ておく. Double preparation emphasis.\nじゅんび = preparation. Kanji: 準備.",
   example:"A: あしたのかいぎのためにしりょうをじゅんびしておいてください。\nB: はい、じゅんびしておきます。",
   exampleSrc:"A: Please prepare materials in advance for tomorrow's meeting.\nB: Yes, I will prepare them.",
   funFact:"じゅんびしておく is the ultimate preparation phrase. Japanese business culture values being prepared (用意周到, youi-shutou = thoroughly prepared). Arriving unprepared to a meeting is a serious faux pas. The ておく pattern naturally fits this preparation-oriented mindset."},

  {type:"mc", q:"ビールをかっておきます means:", opts:["I am drinking beer now","I will buy beer in advance","I forgot to buy beer","I do not want beer"], ans:"I will buy beer in advance",
   hint:"ておく means doing something now to prepare for a future situation."},

  {type:"teach", trg:"〜てはいけない", src:"must not do ~ / it is not allowed to ~", pos:"part", gender:null,
   note:"て-form + はいけない = prohibition. Must not do.\nPolite: てはいけません. Casual: ちゃだめ.",
   example:"A: ここでしゃしんをとってはいけません。\nB: すみません、しりませんでした。",
   exampleSrc:"A: You must not take photos here.\nB: Sorry, I did not know.",
   funFact:"てはいけない literally means 'if you do it, it will not go well.' The は is the topic particle emphasizing the action, and いけない means 'it will not do.' This indirect phrasing is typical of Japanese prohibition: instead of saying 'do not,' it says 'it would be bad if you did.'"},

  {type:"teach", trg:"はいってはいけない", src:"must not enter", pos:"verb", gender:null,
   note:"はいる (to enter) + てはいけない. Common for restricted areas.\nはいる is Group 1.",
   example:"A: このへやにはいってはいけません。\nB: どうしてですか？\nA: きけんですから。",
   exampleSrc:"A: You must not enter this room.\nB: Why?\nA: Because it is dangerous.",
   funFact:"きんし (禁止, prohibition) signs are common in Japan: さつえいきんし (no photography), きんえん (no smoking), たちいりきんし (no entry). The てはいけない pattern is the spoken version of these written prohibitions."},

  {type:"fb", s:"ここでたばこをすって___いけません。\n(You must not smoke here.)", a:"は", opts:["は","を","が","に"], sSrc:"You must not smoke here.",
   hint:"The topic particle that comes between て-form and いけない in the prohibition pattern."},

  {type:"teach", trg:"さわってはいけない", src:"must not touch", pos:"verb", gender:null,
   note:"さわる (to touch) is Group 1. る becomes って.\nさわってはいけない = must not touch.",
   example:"A: このえにさわってはいけません。\nB: みるだけですね。わかりました。",
   exampleSrc:"A: You must not touch this painting.\nB: Just looking, right. Understood.",
   funFact:"Museums and galleries in Japan strictly enforce no-touching rules. The phrase てをふれないでください (please do not touch) is the formal version seen on signs. さわる covers all types of touching, from gentle contact to handling objects."},

  {type:"teach", trg:"〜とく", src:"do in advance (casual)", pos:"part", gender:null,
   note:"Casual contraction of ておく. Very common in speech.\nかっておく becomes かっとく.",
   example:"A: チケットかっとく？\nB: うん、おねがい！",
   exampleSrc:"A: Shall I buy tickets in advance?\nB: Yeah, please!",
   funFact:"In casual speech, ておく contracts to とく, and でおく contracts to どく. かっておく becomes かっとく, よんでおく becomes よんどく. This contraction is universal in informal conversation. Knowing it helps you understand fast casual speech."},

  {type:"mc", q:"しゃしんをとってはいけません means:", opts:["Please take a photo","You must not take photos","I took a photo","I want to take a photo"], ans:"You must not take photos",
   hint:"てはいけません is the prohibition pattern meaning 'm... not do.'"},

  {type:"teach", trg:"しらべておく", src:"look up / research in advance", pos:"verb", gender:null,
   note:"しらべる (to research) + ておく. Prepare by researching beforehand.\nGroup 2: drop る, add ておく.",
   example:"A: りょこうのまえにホテルをしらべておきます。\nB: いいですね。わたしはレストランをしらべておきます。",
   exampleSrc:"A: I will research hotels before the trip.\nB: Good idea. I will look up restaurants.",
   funFact:"しらべる covers researching, investigating, looking up, and checking. In the smartphone era, しらべておく often means Googling something in advance. The kanji 調べる uses 調 (tune/investigate), which also appears in 調子 (condition/tune)."},

  {type:"teach", trg:"はしってはいけない", src:"must not run", pos:"verb", gender:null,
   note:"はしる (to run) is Group 1. る becomes って.\nCommon rule in schools and pools.",
   example:"A: プールのまわりではしってはいけません。\nB: あるきます。",
   exampleSrc:"A: You must not run around the pool.\nB: I will walk.",
   funFact:"はしってはいけません is heard constantly in Japanese schools. Other common school rules: ろうかをはしってはいけません (no running in hallways), おかしをたべてはいけません (no eating snacks). These rule-stating patterns are deeply familiar to every Japanese person."},

  {type:"fb", s:"レストランをよやく___おきました。\n(I made a restaurant reservation in advance.)", a:"して", opts:["して","しって","すって","させて"], sSrc:"I made a restaurant reservation in advance.",
   hint:"よやくする is a する compound verb. Form the て-form of its base verb."},

  {type:"match", pairs:[{trg:"ておく",src:"do in advance"},{trg:"てはいけない",src:"must not do"},{trg:"とく",src:"do in advance (casual)"},{trg:"ちゃだめ",src:"must not (casual)"}]},

  {type:"match", pairs:[{trg:"よやくしておく",src:"reserve in advance"},{trg:"しらべておく",src:"research in advance"},{trg:"はいってはいけない",src:"must not enter"},{trg:"さわってはいけない",src:"must not touch"}]},

  {type:"mc", q:"かっとく is the casual form of:", opts:["かっている","かってみる","かっておく","かってしまう"], ans:"かっておく",
   hint:"The casual contraction replaces ておく with とく."},

  {type:"fb", s:"この えに___てはいけません。\n(You must not touch this painting.)", a:"さわっ", opts:["さわっ","さわり","さわる","さわい"], sSrc:"You must not touch this painting.",
   hint:"This Group 1 verb ends in る. Apply the る-ending て-form rule: る becomes って."},

  {type:"tip", title:"The Four て-form Compounds",
   text:"ている = ongoing action / state\nたべている (is eating)\n\nてしまう = completion / regret\nたべてしまった (ate it all, oops)\n\nてみる = try doing\nたべてみた (tried eating it)\n\nておく = do in advance\nかっておく (buy in advance)\n\nProhibition pattern:\nてはいけない = must not do\nたべてはいけない (must not eat)",
   deepDive:{title:"Casual contractions summary",
    text:"All four compounds have casual contractions:\nている > てる: たべてる (is eating)\nてしまう > ちゃう/じゃう: たべちゃう (eat it all)\nてみる: no contraction (already short)\nておく > とく/どく: かっとく (buy in advance)\n\nFor prohibition:\nてはいけない > ちゃだめ/じゃだめ\nたべちゃだめ (must not eat, casual)\n\nKnowing these contractions is essential for understanding natural spoken Japanese. Textbooks teach the full forms, but real conversation uses contractions."}},
]};
export default LESSON_5;
