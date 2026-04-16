// Japanese V2 Unit 23. めいしか (Nominalization)
import BATCH6_L1 from './_batch6_u23_L01.js';
import BATCH5_L02 from './_batch5_u23_L02.js';
import BATCH5_L01 from './_batch5_u23_L01.js';
import BATCH2_L04 from './_batch2_u23_L04.js';
import BATCH2_L03 from './_batch2_u23_L03.js';
import EXP_L3 from './_temp_u23_expand_L01.js';import EXP_L4 from './_temp_u23_expand_L02.js';import EXP_L5 from './_temp_u23_expand_L03.js';
// Level: B1.3. JLPT N3 aligned.
// こと vs の, ことがある, ことにする, のがすき, のを忘れる.

const UNIT_23 = {
  n:23, lang:"ja", srcLang:"en", track:"v2",
  title:"めいしか", sub:"Nominalization",
  icon:"📝", level:"B1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: こと vs の (Turning Verbs into Nouns) ═══
{id:"jav2_u23l1", title:"こと vs の", icon:"🔄", xp:15, board:true, steps:[
  {type:"intro", title:"こと vs の",
   desc:"Learn to turn verbs into noun phrases using こと and の. Both act as nominalizers, letting you say things like 'swimming is fun' or 'I forgot to buy it.' Understanding when to use each one is key to sounding natural at the intermediate level.",
   goals:["Use こと to nominalize verbs for abstract ideas","Use の to nominalize verbs for concrete/sensory events","Distinguish when こと and の are interchangeable"]},

  {type:"teach", trg:"こと", src:"(nominalizer) the act of / -ing", pos:"part", gender:null,
   note:"Turns a verb into a noun phrase. Abstract, conceptual.\nよむことがすき = I like reading.",
   example:"A: にほんごをはなすことはむずかしいですか？\nB: はい、でもたのしいです。",
   exampleSrc:"A: Is speaking Japanese difficult?\nB: Yes, but it is fun.",
   funFact:"こと literally means 'thing' or 'matter' in the abstract sense. It appears in dozens of set phrases: ことば (words, lit. 'word-things'), しごと (work, lit. 'serve-thing'). As a nominalizer, こと is preferred for general truths and abstract statements."},

  {type:"teach", trg:"の", src:"(nominalizer) the act of / -ing (concrete)", pos:"part", gender:null,
   note:"Also turns verbs into noun phrases. Preferred for sensory, concrete, or emotional contexts.\nうたうのがすき = I like singing.",
   example:"A: ピアノをひくのがじょうずですね。\nB: ありがとうございます。まいにちれんしゅうしています。",
   exampleSrc:"A: You are good at playing piano.\nB: Thank you. I practice every day.",
   funFact:"The nominalizer の evolved from the possessive particle の. In casual speech, の is more common and warmer than こと. Women and children historically used の more, though this gender difference is fading in modern Japanese. の feels closer and more personal."},

  {type:"tip", title:"こと vs の: When to Use Each",
   text:"Both can nominalize verbs, but they differ:\n\nこと only:\n- Fixed patterns: ことがある, ことにする, ことができる\n- After です: しゅみはよむことです (my hobby is reading)\n\nの only:\n- With perception verbs: みる, きく, きづく\n- みんながうたうのをきいた (I heard everyone singing)\n\nEither works (interchangeable):\n- すきです, きらいです, じょうずです, へたです\n- およぐことがすき = およぐのがすき (both fine)",
   deepDive:{title:"Why Two Nominalizers?",
    text:"こと is abstract and conceptual. It is used when talking about ideas, habits, or facts as general categories.\n\nの is concrete and immediate. It is used when the action is happening in front of you or tied to a specific moment.\n\nCompare:\nとりがとぶのをみた (I watched a bird flying. Sensory, の required.)\nとぶことはむずかしい (Flying is difficult. General truth, こと preferred.)\n\nIn everyday conversation, の is more natural for likes/dislikes:\nりょうりするのがすき sounds warmer than りょうりすることがすき.\n\nFor set expressions (ことがある, ことにする, ことができる), only こと works. These are grammaticalized patterns."}},

  {type:"teach", trg:"〜ことにする", src:"to decide to ~", pos:"part", gender:null,
   note:"Dictionary form + ことにする = make a decision.\nあしたはやくおきることにする = I will decide to wake up early.",
   example:"A: らいねんにほんにいくことにしました。\nB: すごい！たのしみですね。",
   exampleSrc:"A: I have decided to go to Japan next year.\nB: Amazing! How exciting.",
   funFact:"ことにする literally means 'to make it a matter of doing X.' The past form ことにした (decided) is very common. There is a subtle partner: ことになる (it has been decided, impersonally). Japanese speakers often prefer ことになりました over ことにしました to avoid sounding forceful."},

  {type:"mc", q:"にほんにいくことにしました means:", opts:["I decided to go to Japan","Going to Japan is possible","I have been to Japan","Japan decided to go"], ans:"I decided to go to Japan",
   hint:"ことにする is the pattern for making a personal decision about an action."},

  {type:"teach", trg:"〜ことになる", src:"it has been decided that ~ / it turns out that ~", pos:"part", gender:null,
   note:"Dictionary form + ことになる = something was decided (not by the speaker).\nUsed for external decisions, company transfers, policy changes.",
   example:"A: らいげつおおさかにてんきんすることになりました。\nB: さびしくなりますね。",
   exampleSrc:"A: It has been decided that I will transfer to Osaka next month.\nB: We will miss you.",
   funFact:"ことになる removes personal agency. てんきんすることにした (I decided to transfer) vs. てんきんすることになった (the transfer was decided for me). Japanese business culture favors ことになる because it frames decisions as collective or inevitable rather than individual will."},

  {type:"teach", trg:"〜のがすき", src:"to like doing ~", pos:"part", gender:null,
   note:"Verb dictionary form + のがすき = like doing.\nCasual and natural. こと version also OK.",
   example:"A: えをかくのがすきですか？\nB: はい、だいすきです。しゅまつによくかきます。",
   exampleSrc:"A: Do you like drawing?\nB: Yes, I love it. I often draw on weekends.",
   funFact:"すき is technically a na-adjective, not a verb. So 'I like swimming' is およぐのがすきだ, not およぐのをすきだ. The subject particle が marks what you like. In casual speech, が often becomes は for contrast: およぐのはすきだけど... (I like swimming, but...)."},

  {type:"fb", s:"ピアノをひく{1}がじょうずですね。\n(You are good at playing piano.)", a:"の", opts:["の","こと","を","が"], sSrc:"You are good at playing piano.",
   hint:"The nominalizer preferred in casual, concrete contexts with adjectives like じょうず."},

  {type:"teach", trg:"〜のをわすれる", src:"to forget to do ~", pos:"part", gender:null,
   note:"Verb dictionary form + のをわすれる = forget to do.\nかぎをかけるのをわすれた = I forgot to lock the door.",
   example:"A: でんきをけすのをわすれました。\nB: だいじょうぶ、わたしがけします。",
   exampleSrc:"A: I forgot to turn off the lights.\nB: It is OK, I will turn them off.",
   funFact:"わすれる takes の (not こと) because forgetting involves a concrete, specific action. You forgot to do something real and immediate. This is a natural test of the こと/の distinction: abstract concepts use こと, but specific missed actions use の."},

  {type:"teach", trg:"わすれる", src:"to forget", pos:"verb", gender:null,
   note:"Group 2 verb. Kanji: 忘れる. Takes を for objects.\nかさをわすれた = I forgot my umbrella.",
   example:"A: さいふをわすれてしまいました。\nB: たいへんですね。かしましょうか？",
   exampleSrc:"A: I forgot my wallet.\nB: Oh no. Shall I lend you some?",
   funFact:"忘れる uses the kanji 忘 which combines 亡 (perish/lose) and 心 (heart), meaning 'the heart has lost it.' The related 忘年会 (bounenkai, year-end party) literally means 'forget the year gathering,' a tradition of drinking to forget the year's troubles."},

  {type:"teach", trg:"てんきん", src:"job transfer / relocation", pos:"noun", gender:null,
   note:"A company-ordered transfer to another office or city.\nKanji: 転勤. Very common in Japanese corporate life.",
   example:"A: てんきんすることになりました。\nB: どこにてんきんですか？",
   exampleSrc:"A: I am being transferred.\nB: Where are you being transferred to?",
   funFact:"転勤 is a defining feature of Japanese corporate culture. Companies regularly relocate employees to different cities, sometimes with only weeks of notice. This practice, called tenkin, can separate families for years. The 'tenkin widow' (tenkin mibojin) refers to a spouse left behind."},

  {type:"mc", q:"でんきをけすのをわすれた means:", opts:["I remembered to turn off the lights","I forgot to turn off the lights","I turned off the lights","I want to turn off the lights"], ans:"I forgot to turn off the lights",
   hint:"のをわすれる is the pattern for forgetting to do a specific action."},

  {type:"match", pairs:[{trg:"ことにする",src:"to decide to"},{trg:"ことになる",src:"it has been decided"},{trg:"のをわすれる",src:"to forget to do"},{trg:"のがすき",src:"to like doing"}]},

  {type:"fb", s:"らいねんにほんにいく{1}にしました。\n(I decided to go to Japan next year.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"I decided to go to Japan next year.",
   hint:"The nominalizer required in the fixed pattern meaning 'to decide to do.'"},

  {type:"match", pairs:[{trg:"わすれる",src:"to forget"},{trg:"てんきん",src:"job transfer"},{trg:"こと",src:"nominalizer (abstract)"},{trg:"の",src:"nominalizer (concrete)"}]},

  {type:"mc", q:"Which nominalizer MUST be used with perception verbs like みる and きく?", opts:["こと","もの","の","ところ"], ans:"の",
   hint:"When you see or hear an action happening, the concrete, immediate nominalizer is required."},
]},

// ═══ L2: ことがある・ことができる (Set Patterns) ═══
{id:"jav2_u23l2", title:"ことがある・ことができる", icon:"💡", xp:15, board:true, steps:[
  {type:"intro", title:"ことがある・ことができる",
   desc:"Master the major set patterns that only use こと as a nominalizer. ことがある marks experience or occasional events, ことができる expresses ability, and ことはない reassures that something will not happen. These fixed expressions are essential for B1-level communication.",
   goals:["Use dictionary form + ことがある for occasional events","Use ことができる for formal ability statements","Use ことはない to reassure"]},

  {type:"teach", trg:"〜ことがある", src:"it sometimes happens that ~ / there are times when ~", pos:"part", gender:null,
   note:"Dictionary form + ことがある = sometimes happens.\nDifferent from た + ことがある (experience). Present tense = occasional event.",
   example:"A: あさごはんをたべないことがあります。\nB: からだによくないですよ。",
   exampleSrc:"A: There are times when I skip breakfast.\nB: That is not good for your health.",
   funFact:"The dictionary form + ことがある is easily confused with the past form + ことがある (experience). Compare: のむことがある (I sometimes drink) vs. のんだことがある (I have drunk before). The tense of the verb before こと completely changes the meaning."},

  {type:"teach", trg:"〜ことができる", src:"to be able to ~ (formal)", pos:"part", gender:null,
   note:"Dictionary form + ことができる = can do (formal/written).\nMore formal than the potential form (e.g., よめる).",
   example:"A: このとしょかんではほんをかりることができます。\nB: カードはひつようですか？",
   exampleSrc:"A: You can borrow books at this library.\nB: Do you need a card?",
   funFact:"ことができる is the formal/written equivalent of the potential verb form. かける (can write) is casual, かくことができる is formal. Signs, announcements, and written rules prefer ことができる. In conversation, the potential form is more natural."},

  {type:"mc", q:"あさごはんをたべないことがある means:", opts:["I sometimes skip breakfast","I have never eaten breakfast","I cannot eat breakfast","I always eat breakfast"], ans:"I sometimes skip breakfast",
   hint:"Dictionary form (not past) + ことがある describes something that occasionally happens."},

  {type:"teach", trg:"〜ことはない", src:"there is no need to ~ / it will not happen that ~", pos:"part", gender:null,
   note:"Dictionary form + ことはない = no need to worry about, will not happen.\nしんぱいすることはない = no need to worry.",
   example:"A: しけんにおちることはないですか？\nB: まいにちべんきょうしていれば、だいじょうぶですよ。",
   exampleSrc:"A: Is there any chance of failing the exam?\nB: If you study every day, it will be fine.",
   funFact:"ことはない is a reassurance pattern. It combines the nominalizer こと with the negative は...ない to say 'the matter of X does not exist.' It is softer than saying 'impossible' and functions like English 'there is no way that...' or 'you do not need to.'"},

  {type:"teach", trg:"しんぱい", src:"worry / concern", pos:"noun", gender:null,
   note:"しんぱいする = to worry. しんぱいしないで = don't worry.\nKanji: 心配. 心 (heart) + 配 (distribute).",
   example:"A: しんぱいすることはありませんよ。\nB: ありがとう、すこしあんしんしました。",
   exampleSrc:"A: There is nothing to worry about.\nB: Thank you, I feel a little relieved.",
   funFact:"心配 literally means 'distributing the heart,' as if your heart is scattered in different directions from anxiety. The opposite is あんしん (安心, peaceful heart). Japanese people often say しんぱいしないで (don't worry) as reassurance, though the culture values concern for others highly."},

  {type:"teach", trg:"〜ないことにする", src:"to decide not to ~", pos:"part", gender:null,
   note:"Negative form + ことにする = decide not to do.\nあしたはのまないことにする = I will decide not to drink tomorrow.",
   example:"A: あまいものをたべないことにしました。\nB: ダイエットですか？がんばってください。",
   exampleSrc:"A: I have decided not to eat sweets.\nB: A diet? Good luck.",
   funFact:"ないことにする is the negative decision pattern. It pairs with ないことになる (it was decided not to). Japanese speakers sometimes use ことにする about past events they want to reframe: なかったことにする (to pretend it never happened, lit. to make it a matter of not having been)."},

  {type:"fb", s:"このとしょかんではほんをかりる{1}ができます。\n(You can borrow books at this library.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"You can borrow books at this library.",
   hint:"The nominalizer used in the formal ability pattern meaning 'can do.'"},

  {type:"teach", trg:"〜ないことはない", src:"it is not that I cannot ~ / I can, somewhat", pos:"part", gender:null,
   note:"Double negative = weak positive. わからないことはない = it is not that I don't understand.\nA hedging expression, very Japanese.",
   example:"A: からいものはたべられますか？\nB: たべられないことはないですが、あまりとくいではないです。",
   exampleSrc:"A: Can you eat spicy food?\nB: It is not that I cannot, but I am not very good with it.",
   funFact:"The double negative ないことはない is quintessentially Japanese. Rather than directly saying 'yes' or 'no,' it hedges: 'it is not that X is not the case.' This indirect style (aimai, ambiguity) is valued in Japanese communication. Saying できないことはない is softer than できます."},

  {type:"teach", trg:"かりる", src:"to borrow / to rent", pos:"verb", gender:null,
   note:"Group 2 verb. Kanji: 借りる. ほんをかりる = borrow a book.\nOpposite: かす (to lend).",
   example:"A: ともだちにくるまをかりました。\nB: いつかえしますか？",
   exampleSrc:"A: I borrowed a car from my friend.\nB: When will you return it?",
   funFact:"借りる and かす (lend) are a pair that learners often confuse. A simple rule: かりる moves things toward you (borrow/rent), かす moves things away from you (lend). The kanji 借 shows a person (亻) next to 昔 (past), perhaps suggesting a temporary arrangement."},

  {type:"teach", trg:"あんしん", src:"relief / peace of mind", pos:"noun", gender:null,
   note:"あんしんする = to feel relieved. Kanji: 安心.\n安 (peace) + 心 (heart). Opposite of しんぱい.",
   example:"A: しけんにうかりました。\nB: よかった！あんしんしました。",
   exampleSrc:"A: I passed the exam.\nB: Great! I am relieved.",
   funFact:"安心 means 'peaceful heart,' the exact opposite of 心配 (worried/scattered heart). It often appears in product marketing: あんしんあんぜん (safe and secure). The word captures the Japanese value of finding calm certainty in an uncertain world."},

  {type:"mc", q:"たべられないことはない means:", opts:["I absolutely cannot eat it","I can eat it, to some extent","I have never eaten it","I love eating it"], ans:"I can eat it, to some extent",
   hint:"The double negative creates a weak positive, a hedging expression."},

  {type:"match", pairs:[{trg:"ことがある (dict.)",src:"it sometimes happens"},{trg:"ことができる",src:"to be able to (formal)"},{trg:"ことはない",src:"no need to / won't happen"},{trg:"ないことにする",src:"decide not to"}]},

  {type:"fb", s:"しんぱいする{1}はありませんよ。\n(There is nothing to worry about.)", a:"こと", opts:["こと","の","もの","ほう"], sSrc:"There is nothing to worry about.",
   hint:"The nominalizer in the reassurance pattern 'there is no need to.'"},

  {type:"match", pairs:[{trg:"しんぱい",src:"worry"},{trg:"あんしん",src:"relief"},{trg:"かりる",src:"to borrow"},{trg:"ないことはない",src:"it's not that I can't"}]},

  {type:"mc", q:"ことにする vs ことになる: what is the difference?", opts:["Both mean the same thing","ことにする is past, ことになる is future","ことにする is a personal decision, ことになる is decided externally","ことにする is casual, ことになる is formal"], ans:"ことにする is a personal decision, ことになる is decided externally",
   hint:"One pattern has the speaker making the d..., the other frames it as something that happened."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
]};
export default UNIT_23;
