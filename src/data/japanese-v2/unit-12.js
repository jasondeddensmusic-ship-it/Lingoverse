// Japanese V2 Unit 12. 可能(かのう) (Ability & Potential)
import BATCH11_L1 from './_batch11_u12_L01.js';
import BATCH10_L1 from './_batch10_u12_L01.js';
import BATCH9_L1 from './_batch9_u12_L01.js';
import BATCH7_L1 from './_batch7_u12_L01.js';
import BATCH8_L1 from './_batch8_u12_L01.js';
import BATCH6_L1 from './_batch6_u12_L01.js';
import BATCH4_L02 from './_batch4_u12_L02.js';
import BATCH4_L01 from './_batch4_u12_L01.js';
import BATCH2_L1 from './_batch2_u12_L01.js';
// Level: A2.1. JLPT N4 aligned.
import JEXP_12_L1 from './_temp_u12_expand_L01.js';import JEXP_12_L2 from './_temp_u12_expand_L02.js';import JEXP_12_L3 from './_temp_u12_expand_L03.js';
// Potential form, koto ga dekiru, mou/mada.

const UNIT_12 = {
  n:12, lang:"ja", srcLang:"en", track:"v2",
  title:"可能(かのう)", sub:"Ability & Potential",
  icon:"\u{1F4AA}", level:"A2.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: できる (Can Do) ═══
{id:"jav2_u12l1", title:"できる", icon:"\u2B50", xp:15, board:true, steps:[
  {type:"intro", title:"できる",
   desc:"Learn to say what you can and cannot do in Japanese. The potential form changes verbs to express ability. You will also learn the versatile word dekiru and the alternative pattern koto ga dekiru.",
   goals:["Use the potential form for Group 1 and Group 2 verbs","Use できる for general ability","Express ability with ことができる as an alternative"]},

  {type:"teach", trg:"できる", src:"can do / to be possible", pos:"verb", gender:null,
   note:"The most common ability word. Used alone or with nouns.\nPattern: noun + ができる.",
   example:"A: 日本語(にほんご)ができますか?\nB: 少(すこ)しできます。",
   exampleSrc:"A: Can you do Japanese? (Do you speak Japanese?)\nB: I can do a little.",
   funFact:"できる literally means 'to come into being' or 'to be completed.' Saying nihongo ga dekiru (Japanese is possible for me) reflects the Japanese preference for describing situations rather than personal ability. It is less direct than 'I can speak Japanese.'"},

  {type:"teach", trg:"食(た)べられる", src:"can eat", pos:"verb", gender:null,
   note:"Potential form of 食(た)べる (Group 2). Drop る, add られる.\n食(た)べる becomes 食(た)べられる.",
   example:"A: 納豆(なっとう)を食(た)べられますか?\nB: はい、大好(だいす)きです!",
   exampleSrc:"A: Can you eat natto?\nB: Yes, I love it!",
   funFact:"In casual speech, many Japanese people shorten 食(た)べられる to 食(た)べれる, dropping the ら. This is called 'ra-nuki kotoba' (ら-removed words). Purists consider it incorrect, but it is extremely common, especially among younger speakers."},

  {type:"teach", trg:"読(よ)める", src:"can read", pos:"verb", gender:null,
   note:"Potential form of 読(よ)む (Group 1). Change the う-row to the え-row, add る.\n読(よ)む becomes 読(よ)める.",
   example:"A: 漢字(かんじ)が読(よ)めますか?\nB: 少(すこ)し読(よ)めます。",
   exampleSrc:"A: Can you read kanji?\nB: I can read a little.",
   funFact:"Group 1 potential forms are simpler than Group 2. Change the final う-sound to the え-sound and add る: 飲(の)む > 飲(の)める, 書(か)く > 書(か)ける, 話(はな)す > 話(はな)せる. The result is always a Group 2 verb, which makes conjugating it further very easy."},

  {type:"teach", trg:"話(はな)せる", src:"can speak", pos:"verb", gender:null,
   note:"Potential form of 話(はな)す (Group 1). す becomes せる.\n話(はな)す becomes 話(はな)せる.",
   example:"A: 英語(えいご)が話(はな)せますか?\nB: はい、話(はな)せます。",
   exampleSrc:"A: Can you speak English?\nB: Yes, I can.",
   funFact:"Notice the particle change: 話(はな)す uses を (nihongo wo hanasu = speak Japanese), but the potential form uses が (nihongo ga hanaseru = can speak Japanese). This を to が switch in potential sentences is a classic grammar point tested on JLPT N4."},

  {type:"mc", q:"日本語(にほんご)ができます means:", opts:["I can do Japanese","I like Japanese","I study Japanese","I am Japanese"], ans:"I can do Japanese",
   hint:"できる expresses ability or possibility with a noun."},

  {type:"teach", trg:"行(い)ける", src:"can go", pos:"verb", gender:null,
   note:"Potential form of 行(い)く (Group 1). く becomes ける.\n行(い)く becomes 行(い)ける.",
   example:"A: 明日(あした)パーティーに行(い)けますか?\nB: はい、行(い)けます。",
   exampleSrc:"A: Can you go to the party tomorrow?\nB: Yes, I can go.",
   funFact:"行(い)く is irregular in て-form (行(い)って, not 行(い)いて), but its potential form is perfectly regular: 行(い)ける. The potential form of 来(く)る (to come) is 来(こ)られる, which follows the irregular pattern. する becomes できる, which is actually a different word entirely."},

  {type:"teach", trg:"ことができる", src:"can do (formal alternative)", pos:"part", gender:null,
   note:"Dictionary form + ことができる. More formal than the potential form.\nUsed in writing and formal speech.",
   example:"A: このアプリで日本語(にほんご)を勉強(べんきょう)することができます。\nB: 便利(べんり)ですね。",
   exampleSrc:"A: You can study Japanese with this app.\nB: That is convenient.",
   funFact:"こと turns a verb into a noun (nominalization). So 食(た)べることができる literally means 'the act of eating is possible.' This pattern sounds more formal and is preferred in written Japanese, announcements, and official contexts."},

  {type:"fb", s:"漢字(かんじ)が{1}ますか?\n(Can you read kanji?)", a:"読(よ)め", opts:["読(よ)め","読(よ)み","読(よ)んで","読(よ)む"], sSrc:"Can you read kanji?",
   hint:"The potential form of 読(よ)む. Change the む (u-row) to め (e-row), then add る."},

  {type:"mc", q:"What is the potential form of 食(た)べる?", opts:["食(た)べれる","食(た)べられる","食(た)べできる","食(た)べける"], ans:"食(た)べられる",
   hint:"Group 2 verbs drop る and add られる. Do not drop the ら."},

  {type:"match", pairs:[{trg:"できる",src:"can do"},{trg:"食(た)べられる",src:"can eat"},{trg:"読(よ)める",src:"can read"},{trg:"話(はな)せる",src:"can speak"}]},

  {type:"tip", title:"Potential Form Rules",
   text:"Group 1 (u-verbs): change u-sound to e-sound, add る.\n飲(の)む > 飲(の)める, 書(か)く > 書(か)ける, 話(はな)す > 話(はな)せる\n\nGroup 2 (ru-verbs): drop る, add られる.\n食(た)べる > 食(た)べられる, 見(み)る > 見(み)られる\n\nIrregular:\nする > できる, 来(く)る > 来(こ)られる\n\nImportant: potential sentences use が instead of を.\n日本語(にほんご)を 話(はな)す > 日本語(にほんご)が 話(はな)せる",
   deepDive:{title:"The を vs が switch",
    text:"In regular sentences, the object takes を:\n寿司(すし)を食(た)べる。(I eat sushi.)\n\nIn potential sentences, the object often takes が:\n寿司(すし)が食(た)べられる。(I can eat sushi.)\n\nWhy? The potential form describes a state of ability, not a direct action on an object. The subject 'possesses' the ability, and the thing becomes more like a topic of that ability. In casual speech, を is increasingly used with potential forms too."}},

  {type:"fb", s:"英語(えいご)が{1}ますか?\n(Can you speak English?)", a:"話(はな)せ", opts:["話(はな)せ","話(はな)し","話(はな)して","話(はな)す"], sSrc:"Can you speak English?",
   hint:"Potential form of 話(はな)す. Change す (u-row) to せ (e-row)."},

  {type:"mc", q:"ことができる is:", opts:["more casual than potential form","the same as potential form","more formal than potential form","only for Group 2 verbs"], ans:"more formal than potential form",
   hint:"This pattern uses nominalization and is preferred in written and official contexts."},
]},

// ═══ L2: もう と まだ (Already & Not Yet) ═══
{id:"jav2_u12l2", title:"もうとまだ", icon:"\u231B", xp:15, board:true, steps:[
  {type:"intro", title:"もうとまだ",
   desc:"Learn to express what has already happened and what has not yet happened. もう (already) pairs with past tense, and まだ (not yet) pairs with negative forms. These small words add precision to your Japanese.",
   goals:["Use もう with past tense to say 'already did'","Use まだ with negative to say 'not yet'","Combine もう/まだ with potential forms"]},

  {type:"teach", trg:"もう", src:"already", pos:"adv", gender:null,
   note:"Used with past tense: もう + verb (past).\nもう食(た)べました = I already ate.",
   example:"A: 昼(ひる)ご飯(はん)を食(た)べましたか?\nB: はい、もう食(た)べました。",
   exampleSrc:"A: Did you eat lunch?\nB: Yes, I already ate.",
   funFact:"もう has a second meaning: 'more/another.' もう一度(いちど) = one more time, もう少(すこ)し = a little more. Context makes the meaning clear. In questions, もう often implies an expectation: もうできた? (Already done? / Are you done yet?)"},

  {type:"teach", trg:"まだ", src:"not yet / still", pos:"adv", gender:null,
   note:"With negative: まだ + verb (negative) = not yet.\nWith positive: まだ + verb = still doing.",
   example:"A: 宿題(しゅくだい)をしましたか?\nB: いいえ、まだしていません。",
   exampleSrc:"A: Did you do your homework?\nB: No, not yet.",
   funFact:"まだ has two faces. With negative verbs it means 'not yet': まだ食(た)べていません (have not eaten yet). With positive verbs it means 'still': まだ食(た)べています (still eating). The short answer まだです (not yet) is extremely common in conversation."},

  {type:"teach", trg:"もう読(よ)めます", src:"can already read", pos:"verb", gender:null,
   note:"もう + potential form = can already do something.\nShows progress or achievement.",
   example:"A: ひらがながもう読(よ)めますか?\nB: はい、もう読(よ)めます!",
   exampleSrc:"A: Can you already read hiragana?\nB: Yes, I can already read it!",
   funFact:"Combining もう with the potential form is a great way to celebrate language learning milestones. もう話(はな)せます (I can already speak it), もうわかります (I can already understand it). Japanese teachers love hearing these from students."},

  {type:"mc", q:"もう食(た)べました means:", opts:["I already ate","I have not eaten yet","I am still eating","I want to eat"], ans:"I already ate",
   hint:"もう with past tense means the action is completed: 'a....'"},

  {type:"teach", trg:"まだわかりません", src:"I do not understand yet", pos:"verb", gender:null,
   note:"まだ + negative = not yet. わかりません = do not understand.\nExpresses current inability with hope of future understanding.",
   example:"A: この漢字(かんじ)がわかりますか?\nB: まだわかりません。",
   exampleSrc:"A: Do you understand this kanji?\nB: I do not understand it yet.",
   funFact:"The nuance of まだ is important: it implies 'not yet, but eventually.' Saying まだわかりません is much softer than わかりません alone. It signals that you expect to understand in the future. Japanese learners are encouraged to use まだ to show a growth mindset."},

  {type:"teach", trg:"まだです", src:"not yet (short answer)", pos:"part", gender:null,
   note:"A very common short answer to 'have you done X yet?' questions.\nPolite and natural.",
   example:"A: レポートはできましたか?\nB: まだです。明日(あした)までに出(だ)します。",
   exampleSrc:"A: Is the report done?\nB: Not yet. I will submit it by tomorrow.",
   funFact:"まだです is the go-to short answer when someone asks if something is done. It is polite, concise, and avoids the awkwardness of a full negative sentence. In restaurants, when asked if you have decided your order: まだです (not yet)."},

  {type:"fb", s:"いいえ、{1}食(た)べていません。\n(No, I have not eaten yet.)", a:"まだ", opts:["まだ","もう","今(いま)","前(まえ)に"], sSrc:"No, I have not eaten yet.",
   hint:"The word meaning 'not yet' that pairs with negative verbs."},

  {type:"teach", trg:"もう一度(いちど)", src:"one more time", pos:"adv", gender:null,
   note:"もう + 一度(いちど) (one time). A polite way to ask for repetition.\nVery useful in class and conversation.",
   example:"A: すみません、もう一度(いちど)お願(ねが)いします。\nB: はい、いいですよ。",
   exampleSrc:"A: Excuse me, one more time please.\nB: Sure, no problem.",
   funFact:"もう一度(いちど)お願(ねが)いします is one of the most useful phrases for language learners. It politely asks someone to repeat what they said. You can also say もう少(すこ)しゆっくりお願(ねが)いします (a little more slowly, please) for extra help."},

  {type:"teach", trg:"書(か)ける", src:"can write", pos:"verb", gender:null,
   note:"Potential form of 書(か)く (to write). Group 1: く becomes ける.\n書(か)く becomes 書(か)ける.",
   example:"A: 漢字(かんじ)が書(か)けますか?\nB: まだ書(か)けません。ひらがなだけです。",
   exampleSrc:"A: Can you write kanji?\nB: I cannot write them yet. Only hiragana.",
   funFact:"書(か)ける is a useful example of how potential forms work in real life. Many Japanese learners can read (読(よ)める) kanji before they can write (書(か)ける) them. The potential form naturally expresses these different skill levels."},

  {type:"mc", q:"まだです means:", opts:["already done","not yet","I can do it","I cannot"], ans:"not yet",
   hint:"A short, polite answer to 'have you done X y...?' questions."},

  {type:"match", pairs:[{trg:"もう",src:"already"},{trg:"まだ",src:"not yet / still"},{trg:"もう一度(いちど)",src:"one more time"},{trg:"まだです",src:"not yet (short)"}]},

  {type:"fb", s:"{1}一度(いちど)お願(ねが)いします。\n(One more time, please.)", a:"もう", opts:["もう","まだ","また","いつも"], sSrc:"One more time, please.",
   hint:"The word meaning 'more/another' when combined with counters."},

  {type:"match", pairs:[{trg:"できる",src:"can do"},{trg:"読(よ)める",src:"can read"},{trg:"書(か)ける",src:"can write"},{trg:"話(はな)せる",src:"can speak"}]},

  {type:"mc", q:"まだ書(か)けません means:", opts:["I can already write","I wrote already","I cannot write yet","I do not like writing"], ans:"I cannot write yet",
   hint:"まだ with negative potential form means the ability has not developed y...."},

  {type:"tip", title:"もう vs まだ Quick Guide",
   text:"もう + past tense = already did\nもう食(た)べました。(I already ate.)\n\nまだ + negative = not yet\nまだ食(た)べていません。(I have not eaten yet.)\n\nまだ + positive = still doing\nまだ食(た)べています。(I am still eating.)\n\nShort answers:\nもう? > はい、もう[past]。/ いいえ、まだです。",
   deepDive:{title:"もう in questions",
    text:"When もう appears in a question, it often implies expectation:\nもうできましたか? (Are you done already? / Have you finished yet?)\nもうわかりましたか? (Do you understand now? / Have you figured it out?)\n\nThe speaker expects or hopes the answer is yes. If you want a neutral question without expectation, do not use もう."}},
{type:"match",pairs:[{trg:"行(い)ける",src:"can go"}]}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_12;
