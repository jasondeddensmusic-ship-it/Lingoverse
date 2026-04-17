// Japanese V2 Unit 23. 名詞化(めいしか) (Nominalization)
import BATCH11_L1 from './_batch11_u23_L01.js';
import BATCH10_L1 from './_batch10_u23_L01.js';
import BATCH9_L1 from './_batch9_u23_L01.js';
import BATCH7_L1 from './_batch7_u23_L01.js';
import BATCH8_L1 from './_batch8_u23_L01.js';
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
  title:"名詞化(めいしか)", sub:"Nominalization",
  icon:"📝", level:"B1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: こと vs の (Turning Verbs into Nouns) ═══
{id:"jav2_u23l1", title:"こと vs の", icon:"🔄", xp:15, board:true, steps:[
  {type:"intro", title:"こと vs の",
   desc:"Learn to turn verbs into noun phrases using こと and の. Both act as nominalizers, letting you say things like 'swimming is fun' or 'I forgot to buy it.' Understanding when to use each one is key to sounding natural at the intermediate level.",
   goals:["Use こと to nominalize verbs for abstract ideas","Use の to nominalize verbs for concrete/sensory events","Distinguish when こと and の are interchangeable"]},

  {type:"teach", trg:"こと", src:"(nominalizer) the act of / -ing", pos:"part", gender:null,
   note:"Turns a verb into a noun phrase. Abstract, conceptual.\n読(よ)むことが好(す)き = I like reading.",
   example:"A: 日本語(にほんご)を話(はな)すことは難(むずか)しいですか？\nB: はい、でも楽(たの)しいです。",
   exampleSrc:"A: Is speaking Japanese difficult?\nB: Yes, but it is fun.",
   funFact:"こと literally means 'thing' or 'matter' in the abstract sense. It appears in dozens of set phrases: 言葉(ことば) (words, lit. 'word-things'), 仕事(しごと) (work, lit. 'serve-thing'). As a nominalizer, こと is preferred for general truths and abstract statements."},

  {type:"teach", trg:"の", src:"(nominalizer) the act of / -ing (concrete)", pos:"part", gender:null,
   note:"Also turns verbs into noun phrases. Preferred for sensory, concrete, or emotional contexts.\n歌(うた)うのが好(す)き = I like singing.",
   example:"A: ピアノを弾(ひ)くのが上手(じょうず)ですね。\nB: ありがとうございます。毎日(まいにち)練習(れんしゅう)しています。",
   exampleSrc:"A: You are good at playing piano.\nB: Thank you. I practice every day.",
   funFact:"The nominalizer の evolved from the possessive particle の. In casual speech, の is more common and warmer than こと. Women and children historically used の more, though this gender difference is fading in modern Japanese. の feels closer and more personal."},

  {type:"tip", title:"こと vs の: When to Use Each",
   text:"Both can nominalize verbs, but they differ:\n\nこと only:\n- Fixed patterns: ことがある, ことにする, ことができる\n- After です: 趣味(しゅみ)は読(よ)むことです (my hobby is reading)\n\nの only:\n- With perception verbs: 見(み)る, 聞(き)く, 気(き)づく\n- みんなが歌(うた)うのを聞(き)いた (I heard everyone singing)\n\nEither works (interchangeable):\n- 好(す)きです, 嫌(きら)いです, 上手(じょうず)です, 下手(へた)です\n- 泳(およ)ぐことが好(す)き = 泳(およ)ぐのが好(す)き (both fine)",
   deepDive:{title:"Why Two Nominalizers?",
    text:"こと is abstract and conceptual. It is used when talking about ideas, habits, or facts as general categories.\n\nの is concrete and immediate. It is used when the action is happening in front of you or tied to a specific moment.\n\nCompare:\n鳥(とり)が飛(と)ぶのを見(み)た (I watched a bird flying. Sensory, の required.)\n飛(と)ぶことは難(むずか)しい (Flying is difficult. General truth, こと preferred.)\n\nIn everyday conversation, の is more natural for likes/dislikes:\n料理(りょうり)するのが好(す)き sounds warmer than 料理(りょうり)することが好(す)き.\n\nFor set expressions (ことがある, ことにする, ことができる), only こと works. These are grammaticalized patterns."}},

  {type:"teach", trg:"〜ことにする", src:"to decide to ~", pos:"part", gender:null,
   note:"Dictionary form + ことにする = make a decision.\n明日早(あしたはや)く起(お)きることにする = I will decide to wake up early.",
   example:"A: 来年(らいねん)日本(にほん)に行(い)くことにしました。\nB: すごい！楽(たの)しみですね。",
   exampleSrc:"A: I have decided to go to Japan next year.\nB: Amazing! How exciting.",
   funFact:"ことにする literally means 'to make it a matter of doing X.' The past form ことにした (decided) is very common. There is a subtle partner: ことになる (it has been decided, impersonally). Japanese speakers often prefer ことになりました over ことにしました to avoid sounding forceful."},

  {type:"mc", q:"日本(にほん)に行(い)くことにしました means:", opts:["I decided to go to Japan","Going to Japan is possible","I have been to Japan","Japan decided to go"], ans:"I decided to go to Japan",
   hint:"ことにする is the pattern for making a personal decision about an action."},

  {type:"teach", trg:"〜ことになる", src:"it has been decided that ~ / it turns out that ~", pos:"part", gender:null,
   note:"Dictionary form + ことになる = something was decided (not by the speaker).\nUsed for external decisions, company transfers, policy changes.",
   example:"A: 来月(らいげつ)大阪(おおさか)に転勤(てんきん)することになりました。\nB: 寂(さび)しくなりますね。",
   exampleSrc:"A: It has been decided that I will transfer to Osaka next month.\nB: We will miss you.",
   funFact:"ことになる removes personal agency. 転勤(てんきん)することにした (I decided to transfer) vs. 転勤(てんきん)することになった (the transfer was decided for me). Japanese business culture favors ことになる because it frames decisions as collective or inevitable rather than individual will."},

  {type:"teach", trg:"〜のが好(す)き", src:"to like doing ~", pos:"part", gender:null,
   note:"Verb dictionary form + のが好(す)き = like doing.\nCasual and natural. こと version also OK.",
   example:"A: 絵(え)を描(か)くのが好(す)きですか？\nB: はい、大好(だいす)きです。週末(しゅうまつ)によく描(か)きます。",
   exampleSrc:"A: Do you like drawing?\nB: Yes, I love it. I often draw on weekends.",
   funFact:"好(す)き is technically a na-adjective, not a verb. So 'I like swimming' is 泳(およ)ぐのが好(す)きだ, not 泳(およ)ぐのを好(す)きだ. The subject particle が marks what you like. In casual speech, が often becomes は for contrast: 泳(およ)ぐのは好(す)きだけど... (I like swimming, but...)."},

  {type:"fb", s:"ピアノを弾(ひ)く{1}が上手(じょうず)ですね。\n(You are good at playing piano.)", a:"の", opts:["の","こと","を","が"], sSrc:"You are good at playing piano.",
   hint:"The nominalizer preferred in casual, concrete contexts with adjectives like 上手(じょうず)."},

  {type:"teach", trg:"〜のを忘(わす)れる", src:"to forget to do ~", pos:"part", gender:null,
   note:"Verb dictionary form + のを忘(わす)れる = forget to do.\n鍵(かぎ)をかけるのを忘(わす)れた = I forgot to lock the door.",
   example:"A: 電気(でんき)を消(け)すのを忘(わす)れました。\nB: 大丈夫(だいじょうぶ)、私(わたし)が消(け)します。",
   exampleSrc:"A: I forgot to turn off the lights.\nB: It is OK, I will turn them off.",
   funFact:"忘(わす)れる takes の (not こと) because forgetting involves a concrete, specific action. You forgot to do something real and immediate. This is a natural test of the こと/の distinction: abstract concepts use こと, but specific missed actions use の."},

  {type:"teach", trg:"忘(わす)れる", src:"to forget", pos:"verb", gender:null,
   note:"Group 2 verb. Kanji: 忘れる. Takes を for objects.\n傘(かさ)を忘(わす)れた = I forgot my umbrella.",
   example:"A: 財布(さいふ)を忘(わす)れてしまいました。\nB: 大変(たいへん)ですね。貸(か)しましょうか？",
   exampleSrc:"A: I forgot my wallet.\nB: Oh no. Shall I lend you some?",
   funFact:"忘れる uses the kanji 忘 which combines 亡 (perish/lose) and 心 (heart), meaning 'the heart has lost it.' The related 忘年会(ぼうねんかい) (bounenkai, year-end party) literally means 'forget the year gathering,' a tradition of drinking to forget the year's troubles."},

  {type:"teach", trg:"転勤(てんきん)", src:"job transfer / relocation", pos:"noun", gender:null,
   note:"A company-ordered transfer to another office or city.\nKanji: 転勤. Very common in Japanese corporate life.",
   example:"A: 転勤(てんきん)することになりました。\nB: どこに転勤(てんきん)ですか？",
   exampleSrc:"A: I am being transferred.\nB: Where are you being transferred to?",
   funFact:"転勤 is a defining feature of Japanese corporate culture. Companies regularly relocate employees to different cities, sometimes with only weeks of notice. This practice, called tenkin, can separate families for years. The 'tenkin widow' (tenkin mibojin) refers to a spouse left behind."},

  {type:"mc", q:"電気(でんき)を消(け)すのを忘(わす)れた means:", opts:["I remembered to turn off the lights","I forgot to turn off the lights","I turned off the lights","I want to turn off the lights"], ans:"I forgot to turn off the lights",
   hint:"のを忘(わす)れる is the pattern for forgetting to do a specific action."},

  {type:"match", pairs:[{trg:"ことにする",src:"to decide to"},{trg:"ことになる",src:"it has been decided"},{trg:"のを忘(わす)れる",src:"to forget to do"},{trg:"のが好(す)き",src:"to like doing"}]},

  {type:"fb", s:"来年(らいねん)日本(にほん)に行(い)く{1}にしました。\n(I decided to go to Japan next year.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"I decided to go to Japan next year.",
   hint:"The nominalizer required in the fixed pattern meaning 'to decide to do.'"},

  {type:"match", pairs:[{trg:"忘(わす)れる",src:"to forget"},{trg:"転勤(てんきん)",src:"job transfer"},{trg:"こと",src:"nominalizer (abstract)"},{trg:"の",src:"nominalizer (concrete)"}]},

  {type:"mc", q:"Which nominalizer MUST be used with perception verbs like 見(み)る and 聞(き)く?", opts:["こと","もの","の","ところ"], ans:"の",
   hint:"When you see or hear an action happening, the concrete, immediate nominalizer is required."},
]},

// ═══ L2: ことがある・ことができる (Set Patterns) ═══
{id:"jav2_u23l2", title:"ことがある・ことができる", icon:"💡", xp:15, board:true, steps:[
  {type:"intro", title:"ことがある・ことができる",
   desc:"Master the major set patterns that only use こと as a nominalizer. ことがある marks experience or occasional events, ことができる expresses ability, and ことはない reassures that something will not happen. These fixed expressions are essential for B1-level communication.",
   goals:["Use dictionary form + ことがある for occasional events","Use ことができる for formal ability statements","Use ことはない to reassure"]},

  {type:"teach", trg:"〜ことがある", src:"it sometimes happens that ~ / there are times when ~", pos:"part", gender:null,
   note:"Dictionary form + ことがある = sometimes happens.\nDifferent from た + ことがある (experience). Present tense = occasional event.",
   example:"A: 朝(あさ)ご飯(はん)を食(た)べないことがあります。\nB: 体(からだ)によくないですよ。",
   exampleSrc:"A: There are times when I skip breakfast.\nB: That is not good for your health.",
   funFact:"The dictionary form + ことがある is easily confused with the past form + ことがある (experience). Compare: 飲(の)むことがある (I sometimes drink) vs. 飲(の)んだことがある (I have drunk before). The tense of the verb before こと completely changes the meaning."},

  {type:"teach", trg:"〜ことができる", src:"to be able to ~ (formal)", pos:"part", gender:null,
   note:"Dictionary form + ことができる = can do (formal/written).\nMore formal than the potential form (e.g., 読(よ)める).",
   example:"A: この図書館(としょかん)では本(ほん)を借(か)りることができます。\nB: カードは必要(ひつよう)ですか？",
   exampleSrc:"A: You can borrow books at this library.\nB: Do you need a card?",
   funFact:"ことができる is the formal/written equivalent of the potential verb form. 書(か)ける (can write) is casual, 書(か)くことができる is formal. Signs, announcements, and written rules prefer ことができる. In conversation, the potential form is more natural."},

  {type:"mc", q:"朝(あさ)ご飯(はん)を食(た)べないことがある means:", opts:["I sometimes skip breakfast","I have never eaten breakfast","I cannot eat breakfast","I always eat breakfast"], ans:"I sometimes skip breakfast",
   hint:"Dictionary form (not past) + ことがある describes something that occasionally happens."},

  {type:"teach", trg:"〜ことはない", src:"there is no need to ~ / it will not happen that ~", pos:"part", gender:null,
   note:"Dictionary form + ことはない = no need to worry about, will not happen.\n心配(しんぱい)することはない = no need to worry.",
   example:"A: 試験(しけん)に落(お)ちることはないですか？\nB: 毎日(まいにち)勉強(べんきょう)していれば、大丈夫(だいじょうぶ)ですよ。",
   exampleSrc:"A: Is there any chance of failing the exam?\nB: If you study every day, it will be fine.",
   funFact:"ことはない is a reassurance pattern. It combines the nominalizer こと with the negative は...ない to say 'the matter of X does not exist.' It is softer than saying 'impossible' and functions like English 'there is no way that...' or 'you do not need to.'"},

  {type:"teach", trg:"心配(しんぱい)", src:"worry / concern", pos:"noun", gender:null,
   note:"心配(しんぱい)する = to worry. 心配(しんぱい)しないで = don't worry.\nKanji: 心配. 心(しん) (heart) + 配(ぱい) (distribute).",
   example:"A: 心配(しんぱい)することはありませんよ。\nB: ありがとう、少(すこ)し安心(あんしん)しました。",
   exampleSrc:"A: There is nothing to worry about.\nB: Thank you, I feel a little relieved.",
   funFact:"心配 literally means 'distributing the heart,' as if your heart is scattered in different directions from anxiety. The opposite is 安心(あんしん) (peaceful heart). Japanese people often say 心配(しんぱい)しないで (don't worry) as reassurance, though the culture values concern for others highly."},

  {type:"teach", trg:"〜ないことにする", src:"to decide not to ~", pos:"part", gender:null,
   note:"Negative form + ことにする = decide not to do.\n明日(あした)は飲(の)まないことにする = I will decide not to drink tomorrow.",
   example:"A: 甘(あま)いものを食(た)べないことにしました。\nB: ダイエットですか？頑張(がんば)ってください。",
   exampleSrc:"A: I have decided not to eat sweets.\nB: A diet? Good luck.",
   funFact:"ないことにする is the negative decision pattern. It pairs with ないことになる (it was decided not to). Japanese speakers sometimes use ことにする about past events they want to reframe: なかったことにする (to pretend it never happened, lit. to make it a matter of not having been)."},

  {type:"fb", s:"この図書館(としょかん)では本(ほん)を借(か)りる{1}ができます。\n(You can borrow books at this library.)", a:"こと", opts:["こと","の","もの","ところ"], sSrc:"You can borrow books at this library.",
   hint:"The nominalizer used in the formal ability pattern meaning 'can do.'"},

  {type:"teach", trg:"〜ないことはない", src:"it is not that I cannot ~ / I can, somewhat", pos:"part", gender:null,
   note:"Double negative = weak positive. 分(わ)からないことはない = it is not that I don't understand.\nA hedging expression, very Japanese.",
   example:"A: 辛(から)いものは食(た)べられますか？\nB: 食(た)べられないことはないですが、あまり得意(とくい)ではないです。",
   exampleSrc:"A: Can you eat spicy food?\nB: It is not that I cannot, but I am not very good with it.",
   funFact:"The double negative ないことはない is quintessentially Japanese. Rather than directly saying 'yes' or 'no,' it hedges: 'it is not that X is not the case.' This indirect style (aimai, ambiguity) is valued in Japanese communication. Saying できないことはない is softer than できます."},

  {type:"teach", trg:"借(か)りる", src:"to borrow / to rent", pos:"verb", gender:null,
   note:"Group 2 verb. Kanji: 借りる. 本(ほん)を借(か)りる = borrow a book.\nOpposite: 貸(か)す (to lend).",
   example:"A: 友達(ともだち)に車(くるま)を借(か)りました。\nB: いつ返(かえ)しますか？",
   exampleSrc:"A: I borrowed a car from my friend.\nB: When will you return it?",
   funFact:"借りる and 貸(か)す (lend) are a pair that learners often confuse. A simple rule: 借(か)りる moves things toward you (borrow/rent), 貸(か)す moves things away from you (lend). The kanji 借 shows a person (亻) next to 昔 (past), perhaps suggesting a temporary arrangement."},

  {type:"teach", trg:"安心(あんしん)", src:"relief / peace of mind", pos:"noun", gender:null,
   note:"安心(あんしん)する = to feel relieved. Kanji: 安心.\n安(あん) (peace) + 心(しん) (heart). Opposite of 心配(しんぱい).",
   example:"A: 試験(しけん)に受(う)かりました。\nB: よかった！安心(あんしん)しました。",
   exampleSrc:"A: I passed the exam.\nB: Great! I am relieved.",
   funFact:"安心 means 'peaceful heart,' the exact opposite of 心配 (worried/scattered heart). It often appears in product marketing: 安心安全(あんしんあんぜん) (safe and secure). The word captures the Japanese value of finding calm certainty in an uncertain world."},

  {type:"mc", q:"食(た)べられないことはない means:", opts:["I absolutely cannot eat it","I can eat it, to some extent","I have never eaten it","I love eating it"], ans:"I can eat it, to some extent",
   hint:"The double negative creates a weak positive, a hedging expression."},

  {type:"match", pairs:[{trg:"ことがある (dict.)",src:"it sometimes happens"},{trg:"ことができる",src:"to be able to (formal)"},{trg:"ことはない",src:"no need to / won't happen"},{trg:"ないことにする",src:"decide not to"}]},

  {type:"fb", s:"心配(しんぱい)する{1}はありませんよ。\n(There is nothing to worry about.)", a:"こと", opts:["こと","の","もの","ほう"], sSrc:"There is nothing to worry about.",
   hint:"The nominalizer in the reassurance pattern 'there is no need to.'"},

  {type:"match", pairs:[{trg:"心配(しんぱい)",src:"worry"},{trg:"安心(あんしん)",src:"relief"},{trg:"借(か)りる",src:"to borrow"},{trg:"ないことはない",src:"it's not that I can't"}]},

  {type:"mc", q:"ことにする vs ことになる: what is the difference?", opts:["Both mean the same thing","ことにする is past, ことになる is future","ことにする is a personal decision, ことになる is decided externally","ことにする is casual, ことになる is formal"], ans:"ことにする is a personal decision, ことになる is decided externally",
   hint:"One pattern has the speaker making the d..., the other frames it as something that happened."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_23;
