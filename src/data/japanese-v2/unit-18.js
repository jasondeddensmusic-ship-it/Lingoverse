// Japanese V2 Unit 18. しえき (Causative)
import BATCH5_L02 from './_batch5_u18_L02.js';
import BATCH5_L01 from './_batch5_u18_L01.js';
import BATCH2_L02 from './_batch2_u18_L02.js';
import BATCH2_L01 from './_batch2_u18_L01.js';
import EXP_L3 from './_temp_u18_expand_L01.js';import EXP_L4 from './_temp_u18_expand_L02.js';import EXP_L5 from './_temp_u18_expand_L03.js';
// Level: B1.1. JLPT N3 aligned.
// Causative formation (させる/あせる), make/let, causative-passive.

const UNIT_18 = {
  n:18, lang:"ja", srcLang:"en", track:"v2",
  title:"しえき", sub:"Causative",
  icon:"👆", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: させる・あせる (Make / Let Someone Do) ═══
{id:"jav2_u18l1", title:"させる・あせる", icon:"🎬", xp:15, board:true, steps:[
  {type:"intro", title:"させる・あせる",
   desc:"Learn the causative form to express making or letting someone do something. Parents make children eat vegetables. Teachers let students leave early. This grammar is essential for talking about authority, permission, and influence.",
   goals:["Form causative with させる (Group 2) and あせる (Group 1)","Express 'make someone do' vs 'let someone do'","Handle する → させる and くる → こさせる"]},

  {type:"teach", trg:"〜させる・〜あせる", src:"causative suffix (make/let do)", pos:"part", gender:null,
   note:"Group 1: change う-ending to あ-row + せる.\nGroup 2: stem + させる. する → させる. くる → こさせる.",
   example:"A: こどもにやさいをたべさせます。\nB: たいへんですね。",
   exampleSrc:"A: I make the children eat vegetables.\nB: That must be tough.",
   funFact:"The causative form covers both 'make' and 'let' in English. Context and particles determine which meaning applies. に marks the person being caused to act. を can also be used, but に is more common and natural for people."},

  {type:"teach", trg:"たべさせる", src:"to make/let someone eat", pos:"verb", gender:null,
   note:"Causative of たべる (to eat). Group 2: たべ + させる.\nこどもにたべさせる = make a child eat.",
   example:"A: あかちゃんにミルクをたべさせました。\nB: じょうずにたべましたか？",
   exampleSrc:"A: I fed the baby milk.\nB: Did the baby eat well?",
   funFact:"たべさせる is one of the first causatives learners encounter. Feeding a baby (赤ちゃんに食べさせる) naturally uses causative because the baby cannot feed itself. Japanese parenting vocabulary is rich with causatives: ねさせる (put to sleep), きがえさせる (make change clothes)."},

  {type:"teach", trg:"まつ", src:"to wait", pos:"verb", gender:null,
   note:"Group 1 verb. まった = waited. またせる = make someone wait.\nKanji: 待つ.",
   example:"A: おまたせしました。\nB: いいえ、だいじょうぶです。",
   exampleSrc:"A: I am sorry to have kept you waiting.\nB: No, it is fine.",
   funFact:"おまたせしました is one of the most-used Japanese phrases. It literally means 'I have made you wait' using humble causative. Staff in restaurants, shops, and offices say this constantly. The phrase shows how causative is embedded in everyday polite Japanese."},

  {type:"teach", trg:"またせる", src:"to make someone wait", pos:"verb", gender:null,
   note:"Causative of まつ. Group 1: まつ → また + せる.\nおまたせしました = sorry for making you wait.",
   example:"A: 30ぷんもまたせてすみません。\nB: しんぱいしないでください。",
   exampleSrc:"A: I am sorry for making you wait 30 minutes.\nB: Please do not worry.",
   funFact:"Punctuality is deeply valued in Japan. Making someone wait (matraseru) is considered quite rude. Trains apologize for delays of even 30 seconds. The casual form matasu and polite omatase shimashita appear constantly in daily life."},

  {type:"mc", q:"こどもにやさいをたべさせる means:", opts:["I make the child eat vegetables","I eat vegetables with the child","The child ate vegetables","The child wants vegetables"], ans:"I make the child eat vegetables",
   hint:"The causative させる means making or letting someone do something. に marks who is made to act."},

  {type:"teach", trg:"やすませる", src:"to let someone rest / to give a day off", pos:"verb", gender:null,
   note:"Causative of やすむ (to rest). Group 1: やすむ → やすま + せる.\nKanji: 休ませる.",
   example:"A: びょうきなのでやすませてください。\nB: おだいじに。",
   exampleSrc:"A: I am sick, so please let me rest.\nB: Take care.",
   funFact:"やすませてください (please let me rest/take the day off) is what Japanese workers say when calling in sick. The causative てください pattern is the standard way to ask permission. It literally means 'please cause me to rest,' which is more humble than directly saying 'I will rest.'"},

  {type:"teach", trg:"いかせる", src:"to make/let someone go", pos:"verb", gender:null,
   note:"Causative of いく (to go). Group 1: いく → いか + せる.\nいかせてください = please let me go.",
   example:"A: りゅうがくにいかせてください。\nB: よくかんがえてからきめましょう。",
   exampleSrc:"A: Please let me go study abroad.\nB: Let us decide after thinking carefully.",
   funFact:"いかせる appears in family and authority contexts. Children ask parents いかせてください (let me go) for permission. In workplace dramas, employees say this project にいかせてください (please let me go on this project). The causative てください is a polite request for permission."},

  {type:"tip", title:"Causative Formation Rules",
   text:"Group 1 (う-verbs): change final う-sound to あ-row, add せる.\nまつ → またせる, よむ → よませる, かく → かかせる\n\nGroup 2 (る-verbs): remove る, add させる.\nたべる → たべさせる, みる → みさせる\n\nIrregulars:\nする → させる\nくる → こさせる\n\nMake: こどもに (child) + やさいを (vegetables) + たべさせる.\nLet: やすませてください = please let me rest.",
   deepDive:{title:"Make vs. Let in Japanese",
    text:"Japanese causative covers both 'make' and 'let.' Context tells you which:\n\nMake (compulsion): こどもにやさいをたべさせる (make child eat veggies). The child does not want to.\n\nLet (permission): いかせてください (please let me go). The speaker wants to go.\n\nThe てあげる (do as a favor) and てくれる (do for me) patterns can clarify:\nたべさせてあげる = let someone eat (as a favor, permission).\nたべさせる alone is ambiguous, relying on context."}},

  {type:"fb", s:"びょうきなので{1}てください。\n(I am sick, so please let me rest.)", a:"やすませ", opts:["やすませ","やすんで","やすみ","やすまれ"], sSrc:"I am sick, so please let me rest.",
   hint:"The causative て-form of やすむ (to rest). Causative + てください asks for permission."},

  {type:"teach", trg:"てつだわせる", src:"to make someone help", pos:"verb", gender:null,
   note:"Causative of てつだう (to help). Group 1: てつだう → てつだわ + せる.\nKanji: 手伝わせる.",
   example:"A: こどもにそうじをてつだわせました。\nB: えらいですね。",
   exampleSrc:"A: I made the children help with cleaning.\nB: Good for you.",
   funFact:"てつだう (to help) combines 手 (hand) and 伝う (transmit), meaning 'to lend a hand.' The causative てつだわせる is common in family contexts. Japanese children are often made to help with household chores (otetsudai) as part of their upbringing and responsibility training."},

  {type:"teach", trg:"はしらせる", src:"to make someone run", pos:"verb", gender:null,
   note:"Causative of はしる (to run). Group 1: はしる → はしら + せる.\nKanji: 走らせる.",
   example:"A: コーチがせんしゅをはしらせています。\nB: きびしいれんしゅうですね。",
   exampleSrc:"A: The coach is making the athletes run.\nB: That is strict training.",
   funFact:"走らせる is heard constantly in sports contexts. Japanese school sports (bukatsu) are famous for rigorous training. Coaches making athletes run laps is a staple of sports anime and real school life. The word also applies to vehicles: kuruma wo hashiraseru (to drive a car)."},

  {type:"mc", q:"やすませてください means:", opts:["Please rest yourself","Please let me rest","You must rest","I rested"], ans:"Please let me rest",
   hint:"Causative + てください is how you ask someone to allow you to do something."},

  {type:"match", pairs:[{trg:"たべさせる",src:"make/let eat"},{trg:"またせる",src:"make wait"},{trg:"やすませる",src:"let rest"},{trg:"いかせる",src:"make/let go"}]},

  {type:"match", pairs:[{trg:"てつだわせる",src:"make help"},{trg:"はしらせる",src:"make run"},{trg:"させる",src:"causative of する"},{trg:"こさせる",src:"causative of くる"}]},

  {type:"fb", s:"コーチがせんしゅを{1}ています。\n(The coach is making the athletes run.)", a:"はしらせ", opts:["はしらせ","はしって","はしり","はしられ"], sSrc:"The coach is making the athletes run.",
   hint:"The causative form of はしる (to run). Group 1: あ-row + せる."},

  {type:"mc", q:"How do you form the causative of する?", opts:["される","させられる","させる","すせる"], ans:"させる",
   hint:"する is irregular. Its causative is not formed by regular rules."},
]},

// ═══ L2: させられる (Causative-Passive) ═══
{id:"jav2_u18l2", title:"させられる", icon:"😤", xp:15, board:true, steps:[
  {type:"intro", title:"させられる",
   desc:"Combine causative and passive into one powerful form. The causative-passive expresses being MADE to do something against your will. 'I was made to wait,' 'I was forced to eat.' This is essential for expressing complaints and frustrations.",
   goals:["Form causative-passive: させられる / あされる","Express being forced to do something unwillingly","Use the short form させられる → あされる (Group 1)"]},

  {type:"teach", trg:"〜させられる", src:"to be made to do ~ (causative-passive)", pos:"part", gender:null,
   note:"Causative + passive combined. Expresses being forced.\nGroup 2: stem + させられる. する → させられる.",
   example:"A: まいにちざんぎょうさせられています。\nB: それはたいへんですね。",
   exampleSrc:"A: I am being made to work overtime every day.\nB: That must be tough.",
   funFact:"The causative-passive is one of the longest verb forms in Japanese. It stacks two suffixes: causative (させ) + passive (られる). The result always implies the subject is unhappy about being made to do something. It is the grammar of complaint and injustice."},

  {type:"teach", trg:"たべさせられる", src:"to be made to eat", pos:"verb", gender:null,
   note:"Causative-passive of たべる. Group 2: たべ + させられる.\nExpresses being forced to eat unwillingly.",
   example:"A: きらいなものをたべさせられました。\nB: いやでしたね。",
   exampleSrc:"A: I was made to eat something I dislike.\nB: That was unpleasant.",
   funFact:"This is the classic example of causative-passive. Every Japanese language textbook uses it. Children being forced to eat vegetables (yasai wo tabesaserareta) is a universal experience. The form is long but used naturally in everyday complaints."},

  {type:"teach", trg:"まだされる", src:"to be made to wait (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of まつ. Group 1 shortcut: あ-row + される.\nまたせられる → まだされる. More natural in speech.",
   example:"A: 2じかんもまだされました。\nB: ひどいですね。",
   exampleSrc:"A: I was made to wait for two whole hours.\nB: That is terrible.",
   funFact:"Group 1 verbs have a short form: the full させられる becomes される attached to the あ-row. まつ → またされる (not またせられる). This short form is strongly preferred in casual speech. It sounds more natural and is easier to say."},

  {type:"teach", trg:"のまされる", src:"to be made to drink (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of のむ. Group 1: のむ → のまされる.\nOften describes being pressured to drink alcohol.",
   example:"A: のみかいでたくさんのまされました。\nB: だいじょうぶですか？",
   exampleSrc:"A: I was made to drink a lot at the drinking party.\nB: Are you okay?",
   funFact:"のまされる is a culturally loaded word. Japanese nomikai (drinking parties) have a strong social pressure to drink. Superiors pouring drinks for juniors creates an obligation to accept. The causative-passive perfectly captures this 'I had no choice but to drink' feeling."},

  {type:"mc", q:"たべさせられた means:", opts:["I was made to eat","I let someone eat","I made someone eat","I wanted to eat"], ans:"I was made to eat",
   hint:"The causative-passive always means the subject was forced to do the action unwillingly."},

  {type:"teach", trg:"かわされる", src:"to be made to buy (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of かう (to buy). Group 1: かう → かわされる.\nImplies being pressured into purchasing.",
   example:"A: いらないものをかわされました。\nB: どこでですか？",
   exampleSrc:"A: I was made to buy something I did not need.\nB: Where?",
   funFact:"かわされる describes the experience of aggressive sales tactics. In Japan, while most shopping is pressure-free, tourist areas sometimes have pushy vendors. The causative-passive perfectly captures the feeling of being talked into a purchase you did not want."},

  {type:"teach", trg:"ざんぎょう", src:"overtime work", pos:"noun", gender:null,
   note:"ざん (remain) + ぎょう (work). ざんぎょうする = to work overtime.\nKanji: 残業. A major topic in Japanese work culture.",
   example:"A: きょうもざんぎょうですか？\nB: はい、させられています。",
   exampleSrc:"A: Overtime again today?\nB: Yes, I am being made to.",
   funFact:"残業 is one of the most discussed words in modern Japan. Japan's overwork culture (karoshi, death from overwork, is a legal term) has led to government reforms. 'Being made to do overtime' (zangyou saserareru) is a common complaint. Recent laws cap overtime at 45 hours per month."},

  {type:"tip", title:"Causative-Passive Formation",
   text:"Full form (all groups):\nGroup 2: stem + させられる. たべる → たべさせられる.\nする → させられる. くる → こさせられる.\n\nShort form (Group 1 only):\nChange う to あ-row + される.\nまつ → まだされる (not またせられる)\nのむ → のまされる\nかう → かわされる\nかく → かかされる\n\nThe short form is preferred in conversation. The full form sounds bookish.",
   deepDive:{title:"Why the Short Form Exists",
    text:"The full causative-passive for Group 1 verbs creates tongue-twisting strings: またせられる (7 syllables). The short form またされる (5 syllables) is much easier to say.\n\nThe short form merges the causative せ into the passive され, creating あされる. This only works for Group 1 verbs. Group 2 verbs must use the full させられる.\n\nIn writing, both forms are acceptable. In speech, using the long form for Group 1 verbs sounds unnatural and overly formal."}},

  {type:"fb", s:"2じかんも{1}ました。\n(I was made to wait for two whole hours.)", a:"まだされ", opts:["まだされ","またせて","まって","またされ"], sSrc:"I was made to wait for two whole hours.",
   hint:"Short causative-passive of まつ. Group 1 shortcut: あ-row + される."},

  {type:"teach", trg:"やらされる", src:"to be made to do (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of やる (to do, casual). Group 1: やる → やらされる.\nCommon in complaints about work or chores.",
   example:"A: つまらないしごとをやらされています。\nB: ちょっとがまんしてください。",
   exampleSrc:"A: I am being made to do boring work.\nB: Please bear with it a little.",
   funFact:"やらされる is the go-to causative-passive for general complaints. やる is the casual form of する (to do), so やらされる means 'being made to do stuff.' It appears constantly in complaints about school assignments, chores, and workplace tasks."},

  {type:"teach", trg:"がまんする", src:"to endure / to bear with", pos:"verb", gender:null,
   note:"する-verb. がまん = endurance/patience. Kanji: 我慢する.\nA core Japanese cultural concept.",
   example:"A: あついですけどがまんしてください。\nB: がんばります。",
   exampleSrc:"A: It is hot, but please bear with it.\nB: I will do my best.",
   funFact:"我慢 combines 我 (self) and 慢 (pride/slowness). Gaman is a deeply Japanese virtue: enduring hardship with patience and dignity. After natural disasters, Japanese resilience is often attributed to gaman. The word appears in daily life: gaman shite (bear with it) is heard constantly."},

  {type:"mc", q:"のまされた means:", opts:["I drank by choice","I was made to drink","I let someone drink","Someone drank for me"], ans:"I was made to drink",
   hint:"The short causative-passive form always implies being forced to do the action."},

  {type:"match", pairs:[{trg:"たべさせられる",src:"be made to eat"},{trg:"まだされる",src:"be made to wait"},{trg:"のまされる",src:"be made to drink"},{trg:"かわされる",src:"be made to buy"}]},

  {type:"fb", s:"つまらないしごとを{1}います。\n(I am being made to do boring work.)", a:"やらされて", opts:["やらされて","やって","やらせて","やられて"], sSrc:"I am being made to do boring work.",
   hint:"The short causative-passive て-form of やる (to do). Expresses being forced."},

  {type:"match", pairs:[{trg:"やらされる",src:"be made to do"},{trg:"ざんぎょう",src:"overtime"},{trg:"がまんする",src:"to endure"},{trg:"させられる",src:"causative-passive of する"}]},

  {type:"mc", q:"Which form is the short causative-passive of かく (to write)?", opts:["かかせられる","かかれる","かかされる","かかせる"], ans:"かかされる",
   hint:"Group 1 short form: change う to あ-row, then add される."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
]};
export default UNIT_18;
