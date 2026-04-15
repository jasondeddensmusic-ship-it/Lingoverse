// Unit 16 Expansion L3 — Scheduling & Invitations
// Making appointments, inviting people, accepting/declining.

const LESSON_3 = {id:"jav2_u16l3", title:"やくそくとさそい", icon:"📅", xp:15, board:true, steps:[
  {type:"intro", title:"やくそくとさそい",
   desc:"Learn to make appointments, invite people to events, and respond to invitations. Japanese has specific patterns for inviting, accepting, and politely declining, each with important cultural nuances.",
   goals:["Make plans and appointments with specific times","Invite people using ませんか and ましょう","Accept and decline invitations politely"]},

  {type:"teach", trg:"やくそく", src:"promise / appointment", pos:"noun", gender:null,
   note:"やくそくする = to make a promise/appointment.\nやくそくをまもる = to keep a promise. Kanji: 約束.",
   example:"A: にちようびにやくそくがあります。\nB: なんのやくそくですか？\nA: ともだちとひるごはんをたべるやくそくです。",
   exampleSrc:"A: I have an appointment on Sunday.\nB: What kind of appointment?\nA: A promise to eat lunch with a friend.",
   funFact:"約束 combines 約 (promise/bind) and 束 (bundle/bind). In Japanese culture, keeping promises (やくそくをまもる) is considered fundamental. Children are taught from kindergarten: やくそくだよ！ (It is a promise!) accompanied by linking pinky fingers (ゆびきり)."},

  {type:"teach", trg:"〜ませんか", src:"would you like to ~ ? (invitation)", pos:"part", gender:null,
   note:"Polite negative question form used as an invitation.\nたべませんか = Would you like to eat?",
   example:"A: いっしょにえいがをみませんか？\nB: いいですね。いきましょう！",
   exampleSrc:"A: Would you like to watch a movie together?\nB: That sounds good. Let us go!",
   funFact:"ませんか is a negative question ('will you not...?') that functions as a polite invitation. The logic: asking 'will you not join?' is more considerate than 'will you join?' because it gives the listener more room to decline. This indirect approach is characteristic of Japanese politeness."},

  {type:"teach", trg:"〜ましょう", src:"let us ~ / shall we ~", pos:"part", gender:null,
   note:"The volitional form in polite speech. Suggests doing something together.\nいきましょう = Let us go.",
   example:"A: あしたのプランをたてましょう。\nB: いいですね。なにをしますか？",
   exampleSrc:"A: Let us make plans for tomorrow.\nB: Good idea. What shall we do?",
   funFact:"ましょう is the polite volitional, expressing 'let us do' or 'I will do.' It is enthusiastic and proactive. The casual equivalent is よう/おう: いこう (let us go), たべよう (let us eat). ましょうか (shall I/shall we?) adds a question, useful for offering help."},

  {type:"mc", q:"いっしょにえいがをみませんか means:", opts:["I do not want to see a movie","Do you not like movies?","Would you like to watch a movie together?","I saw a movie alone"], ans:"Would you like to watch a movie together?",
   hint:"ませんか is a polite invitation pattern, not a simple negative question."},

  {type:"teach", trg:"あく", src:"to be free / to be available (time)", pos:"verb", gender:null,
   note:"Group 1 verb. あいていますか？ = Are you free?\nKanji: 空く. Used for scheduling.",
   example:"A: どようびはあいていますか？\nB: ごぜんちゅうはあいています。",
   exampleSrc:"A: Are you free on Saturday?\nB: I am free in the morning.",
   funFact:"空く uses the kanji 空 (empty/sky). When your schedule is 'empty,' you are available. あいていますか is the standard way to check someone's availability. It also works for seats (このせきはあいていますか = Is this seat free?) and parking spots."},

  {type:"teach", trg:"つごう", src:"convenience / availability", pos:"noun", gender:null,
   note:"つごうがいい = convenient/available. つごうがわるい = inconvenient.\nKanji: 都合.",
   example:"A: きんようびはつごうがいいですか？\nB: すみません、きんようびはつごうがわるいです。",
   exampleSrc:"A: Is Friday convenient for you?\nB: Sorry, Friday is not convenient.",
   funFact:"都合 is the polite way to discuss scheduling. つごうがわるい (inconvenient) is a diplomatic way to decline without giving a specific reason. In Japanese business culture, つごう is the standard framing for availability discussions. It sounds more professional than あいていますか."},

  {type:"teach", trg:"ぜひ", src:"by all means / definitely (enthusiastic yes)", pos:"adv", gender:null,
   note:"Used to enthusiastically accept an invitation or recommend something.\nStronger than はい alone.",
   example:"A: にちようびにバーベキューをしませんか？\nB: ぜひ！たのしみにしています。",
   exampleSrc:"A: Would you like to have a barbecue on Sunday?\nB: Absolutely! I am looking forward to it.",
   funFact:"ぜひ is the enthusiastic 'yes' to invitations. It conveys genuine excitement and eagerness. The full phrase ぜひおねがいします (by all means, please) is used in both social and business contexts. When recommending something, ぜひ + command: ぜひたべてみてください (you absolutely must try eating this)."},

  {type:"fb", s:"どようびは___がいいですか？\n(Is Saturday convenient for you?)", a:"つごう", opts:["つごう","よてい","やくそく","じかん"], sSrc:"Is Saturday convenient for you?",
   hint:"The polite word for scheduling availability/convenience."},

  {type:"teach", trg:"ざんねんですが", src:"unfortunately / I am sorry but", pos:"part", gender:null,
   note:"ざんねん (regrettable) + ですが (but). Polite way to decline.\nKanji: 残念ですが.",
   example:"A: どようびにカラオケにいきませんか？\nB: ざんねんですが、どようびはよていがあります。",
   exampleSrc:"A: Would you like to go to karaoke on Saturday?\nB: Unfortunately, I have plans on Saturday.",
   funFact:"ざんねんですが is the gold standard for polite declining. It expresses genuine regret before giving the reason. The pattern ざんねんですが + reason + counter-offer is ideal: ざんねんですが、どようびはだめです。にちようびはどうですか？ (Unfortunately Saturday does not work. How about Sunday?)"},

  {type:"teach", trg:"またこんど", src:"next time / some other time", pos:"adv", gender:null,
   note:"また (again) + こんど (this time/next time). A friendly rain check.\nSoftens a decline.",
   example:"A: あしたひまですか？\nB: ごめん、あしたはむりです。またこんどね。",
   exampleSrc:"A: Are you free tomorrow?\nB: Sorry, tomorrow is not possible. Next time, okay?",
   funFact:"またこんど is the friendly 'let us do it another time.' It signals that the decline is about timing, not about the person or activity. In casual speech, またね (see you again) and またこんどね (next time, okay?) maintain warmth. In business, またのきかいに (on another occasion) is the formal version."},

  {type:"mc", q:"ぜひ when responding to an invitation means:", opts:["Maybe later","No thank you","Absolutely / I would love to","I am not sure"], ans:"Absolutely / I would love to",
   hint:"This adverb expresses enthusiastic acceptance."},

  {type:"teach", trg:"たのしみにしている", src:"looking forward to", pos:"verb", gender:null,
   note:"たのしみ (enjoyment) + にしている (in the state of).\nA warm expression of anticipation.",
   example:"A: らいしゅうのパーティーをたのしみにしています。\nB: わたしも！",
   exampleSrc:"A: I am looking forward to next week's party.\nB: Me too!",
   funFact:"たのしみにしています is one of the most heartwarming phrases in Japanese. It shows genuine anticipation and makes the other person feel their event is valued. In business emails, it is a standard closing phrase. The casual version, たのしみ！ (looking forward to it!), is used among friends."},

  {type:"teach", trg:"ひま", src:"free time / not busy", pos:"adj", gender:null,
   note:"な-adjective. ひまですか？ = Are you free? (casual way to ask).\nKanji: 暇.",
   example:"A: こんしゅうのどようびはひまですか？\nB: はい、ひまです。なにかありますか？",
   exampleSrc:"A: Are you free this Saturday?\nB: Yes, I am free. Is something happening?",
   funFact:"暇 can be positive (free time available) or slightly negative (bored/idle). ひまですか is casual but widely used among friends. In business, あいていますか or つごうはいかがですか are more appropriate. Saying ひまです about yourself is fine; saying it about someone else's job can be rude."},

  {type:"fb", s:"___ですが、どようびはよていがあります。\n(Unfortunately, I have plans on Saturday.)", a:"ざんねん", opts:["ざんねん","たのしみ","だいじょうぶ","すみません"], sSrc:"Unfortunately, I have plans on Saturday.",
   hint:"The word meaning 'regrettable' used before explaining why you must decline."},

  {type:"match", pairs:[{trg:"やくそく",src:"promise/appointment"},{trg:"ませんか",src:"would you like to?"},{trg:"ましょう",src:"let us"},{trg:"ぜひ",src:"absolutely"}]},

  {type:"match", pairs:[{trg:"つごう",src:"convenience"},{trg:"ざんねんですが",src:"unfortunately"},{trg:"またこんど",src:"next time"},{trg:"たのしみにしている",src:"looking forward to"}]},

  {type:"mc", q:"ざんねんですが is used to:", opts:["Accept enthusiastically","Politely decline","Ask a question","Express surprise"], ans:"Politely decline",
   hint:"This phrase expresses regret before giving a reason for declining."},

  {type:"fb", s:"らいしゅうの パーティーを___にしています。\n(I am looking forward to next week's party.)", a:"たのしみ", opts:["たのしみ","たのしい","たのしく","たのしむ"], sSrc:"I am looking forward to next week's party.",
   hint:"The noun form meaning 'enjoyment/anticipation' used with にしている."},

  {type:"tip", title:"Invitations: Making, Accepting, Declining",
   text:"Inviting:\nいっしょに〜ませんか？ (Would you like to...?)\n〜ましょう！ (Let us...!)\n\nAccepting:\nいいですね！ (Sounds good!)\nぜひ！ (Absolutely!)\nたのしみにしています。 (Looking forward to it.)\n\nDeclining politely:\nざんねんですが... (Unfortunately...)\nすみません、ちょっと... (Sorry, it is a bit...)\nまたこんど。 (Next time.)\n\nChecking availability:\nあいていますか？ (Are you free?)\nつごうはいいですか？ (Is it convenient?)",
   deepDive:{title:"How to decline without hurting feelings",
    text:"Japanese declining is an art:\n\n1. Express regret first: ざんねんですが / すみません\n2. Give a vague reason: ちょっとよていがありまして... (I have some plans...)\n3. Offer an alternative: にちようびはどうですか？ (How about Sunday?)\n4. Use a rain check: またこんどぜひ (definitely next time)\n\nNever say a flat いいえ (no) to an invitation. Even if you cannot go, show that you appreciate being invited. The phrase さそってくれてありがとう (thank you for inviting me) goes a long way."}},
]};
export default LESSON_3;
