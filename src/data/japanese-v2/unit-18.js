// Japanese V2 Unit 18. 使役(しえき) (Causative)
import BATCH11_L1 from './_batch11_u18_L01.js';
import BATCH10_L1 from './_batch10_u18_L01.js';
import BATCH9_L1 from './_batch9_u18_L01.js';
import BATCH7_L1 from './_batch7_u18_L01.js';
import BATCH8_L1 from './_batch8_u18_L01.js';
import BATCH6_L1 from './_batch6_u18_L01.js';
import BATCH5_L02 from './_batch5_u18_L02.js';
import BATCH5_L01 from './_batch5_u18_L01.js';
import BATCH2_L02 from './_batch2_u18_L02.js';
import BATCH2_L01 from './_batch2_u18_L01.js';
import EXP_L3 from './_temp_u18_expand_L01.js';import EXP_L4 from './_temp_u18_expand_L02.js';import EXP_L5 from './_temp_u18_expand_L03.js';
// Level: B1.1. JLPT N3 aligned.
// Causative formation (させる/あせる), make/let, causative-passive.

const UNIT_18 = {
  n:18, lang:"ja", srcLang:"en", track:"v2",
  title:"使役(しえき)", sub:"Causative",
  icon:"👆", level:"B1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: させる・あせる (Make / Let Someone Do) ═══
{id:"jav2_u18l1", title:"させる・あせる", icon:"🎬", xp:15, board:true, steps:[
  {type:"intro", title:"させる・あせる",
   desc:"Learn the causative form to express making or letting someone do something. Parents make children eat vegetables. Teachers let students leave early. This grammar is essential for talking about authority, permission, and influence.",
   goals:["Form causative with させる (Group 2) and あせる (Group 1)","Express 'make someone do' vs 'let someone do'","Handle する → させる and くる → こさせる"]},

  {type:"teach", trg:"〜させる・〜あせる", src:"causative suffix (make/let do)", pos:"part", gender:null,
   note:"Group 1: change う-ending to あ-row + せる.\nGroup 2: stem + させる. する → させる. くる → こさせる.",
   example:"A: 子供(こども)に野菜(やさい)を食(た)べさせます。\nB: 大変(たいへん)ですね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: I make the children eat vegetables.\nB: That must be tough.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"The causative form covers both 'make' and 'let' in English. Context and particles determine which meaning applies. に marks the person being caused to act. を can also be used, but に is more common and natural for people."},

  {type:"teach", trg:"食(た)べさせる", src:"to make/let someone eat", pos:"verb", gender:null,
   note:"Causative of 食(た)べる (to eat). Group 2: 食(た)べ + させる.\n子供(こども)に食(た)べさせる = make a child eat.",
   example:"A: 赤(あか)ちゃんにミルクを食(た)べさせました。\nB: 上手(じょうず)に食(た)べましたか？\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: I fed the baby milk.\nB: Did the baby eat well?\nA: How was it?\nB: It was very good.",
   funFact:"食べさせる is one of the first causatives learners encounter. Feeding a baby (赤ちゃんに食べさせる) naturally uses causative because the baby cannot feed itself. Japanese parenting vocabulary is rich with causatives: 寝(ね)させる (put to sleep), 着替(きが)えさせる (make change clothes)."},

  {type:"teach", trg:"待(ま)つ", src:"to wait", pos:"verb", gender:null,
   note:"Group 1 verb. 待(ま)った = waited. 待(ま)たせる = make someone wait.\nKanji: 待つ.",
   example:"A: お待(ま)たせしました。\nB: いいえ、大丈夫(だいじょうぶ)です。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: I am sorry to have kept you waiting.\nB: No, it is fine.\nA: When was it?\nB: It was last summer.",
   funFact:"お待たせしました is one of the most-used Japanese phrases. It literally means 'I have made you wait' using humble causative. Staff in restaurants, shops, and offices say this constantly. The phrase shows how causative is embedded in everyday polite Japanese."},

  {type:"teach", trg:"待(ま)たせる", src:"to make someone wait", pos:"verb", gender:null,
   note:"Causative of 待(ま)つ. Group 1: 待(ま)つ → 待(ま)た + せる.\nお待(ま)たせしました = sorry for making you wait.",
   example:"A: 30分(ぷん)も待(ま)たせてすみません。\nB: 心配(しんぱい)しないでください。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: I am sorry for making you wait 30 minutes.\nB: Please do not worry.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"Punctuality is deeply valued in Japan. Making someone wait (matraseru) is considered quite rude. Trains apologize for delays of even 30 seconds. The casual form matasu and polite omatase shimashita appear constantly in daily life."},

  {type:"mc", q:"子供(こども)に野菜(やさい)を食(た)べさせる means:", opts:["I make the child eat vegetables","I eat vegetables with the child","The child ate vegetables","The child wants vegetables"], ans:"I make the child eat vegetables",
   hint:"The causative させる means making or letting someone do something. に marks who is made to act."},

  {type:"teach", trg:"休(やす)ませる", src:"to let someone rest / to give a day off", pos:"verb", gender:null,
   note:"Causative of 休(やす)む (to rest). Group 1: 休(やす)む → 休(やす)ま + せる.\nKanji: 休ませる.",
   example:"A: 病気(びょうき)なので休(やす)ませてください。\nB: お大事(だいじ)に。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: I am sick, so please let me rest.\nB: Take care.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"休ませてください (please let me rest/take the day off) is what Japanese workers say when calling in sick. The causative てください pattern is the standard way to ask permission. It literally means 'please cause me to rest,' which is more humble than directly saying 'I will rest.'"},

  {type:"teach", trg:"行(い)かせる", src:"to make/let someone go", pos:"verb", gender:null,
   note:"Causative of 行(い)く (to go). Group 1: 行(い)く → 行(い)か + せる.\n行(い)かせてください = please let me go.",
   example:"A: 留学(りゅうがく)に行(い)かせてください。\nB: よく考(かんが)えてから決(き)めましょう。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Please let me go study abroad.\nB: Let us decide after thinking carefully.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"行かせる appears in family and authority contexts. Children ask parents 行かせてください (let me go) for permission. In workplace dramas, employees say this project に行かせてください (please let me go on this project). The causative てください is a polite request for permission."},

  {type:"tip", title:"Causative Formation Rules",
   text:"Group 1 (う-verbs): change final う-sound to あ-row, add せる.\n待(ま)つ → 待(ま)たせる, 読(よ)む → 読(よ)ませる, 書(か)く → 書(か)かせる\n\nGroup 2 (る-verbs): remove る, add させる.\n食(た)べる → 食(た)べさせる, 見(み)る → 見(み)させる\n\nIrregulars:\nする → させる\nくる → こさせる\n\nMake: 子供(こども)に (child) + 野菜(やさい)を (vegetables) + 食(た)べさせる.\nLet: 休(やす)ませてください = please let me rest.",
   deepDive:{title:"Make vs. Let in Japanese",
    text:"Japanese causative covers both 'make' and 'let.' Context tells you which:\n\nMake (compulsion): 子供(こども)に野菜(やさい)を食(た)べさせる (make child eat veggies). The child does not want to.\n\nLet (permission): 行(い)かせてください (please let me go). The speaker wants to go.\n\nThe てあげる (do as a favor) and てくれる (do for me) patterns can clarify:\n食(た)べさせてあげる = let someone eat (as a favor, permission).\n食(た)べさせる alone is ambiguous, relying on context."}},

  {type:"fb", s:"病気(びょうき)なので{1}てください。\n(I am sick, so please let me rest.)", a:"休(やす)ませ", opts:["休(やす)ませ","休(やす)んで","休(やす)み","休(やす)まれ"], sSrc:"I am sick, so please let me rest.",
   hint:"The causative て-form of 休(やす)む (to rest). Causative + てください asks for permission."},

  {type:"teach", trg:"手伝(てつだ)わせる", src:"to make someone help", pos:"verb", gender:null,
   note:"Causative of 手伝(てつだ)う (to help). Group 1: 手伝(てつだ)う → 手伝(てつだ)わ + せる.\nKanji: 手伝わせる.",
   example:"A: 子供(こども)に掃除(そうじ)を手伝(てつだ)わせました。\nB: 偉(えら)いですね。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: I made the children help with cleaning.\nB: Good for you.\nA: How long did it take?\nB: About two hours.",
   funFact:"手伝う (to help) combines 手 (hand) and 伝う (transmit), meaning 'to lend a hand.' The causative 手伝わせる is common in family contexts. Japanese children are often made to help with household chores (otetsudai) as part of their upbringing and responsibility training."},

  {type:"teach", trg:"走(はし)らせる", src:"to make someone run", pos:"verb", gender:null,
   note:"Causative of 走(はし)る (to run). Group 1: 走(はし)る → 走(はし)ら + せる.\nKanji: 走らせる.",
   example:"A: コーチが選手(せんしゅ)を走(はし)らせています。\nB: 厳(きび)しい練習(れんしゅう)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: The coach is making the athletes run.\nB: That is strict training.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"走らせる is heard constantly in sports contexts. Japanese school sports (bukatsu) are famous for rigorous training. Coaches making athletes run laps is a staple of sports anime and real school life. The word also applies to vehicles: 車(くるま)を走(はし)らせる (to drive a car)."},

  {type:"mc", q:"休(やす)ませてください means:", opts:["Please rest yourself","Please let me rest","You must rest","I rested"], ans:"Please let me rest",
   hint:"Causative + てください is how you ask someone to allow you to do something."},

  {type:"match", pairs:[{trg:"食(た)べさせる",src:"make/let eat"},{trg:"待(ま)たせる",src:"make wait"},{trg:"休(やす)ませる",src:"let rest"},{trg:"行(い)かせる",src:"make/let go"}]},

  {type:"match", pairs:[{trg:"手伝(てつだ)わせる",src:"make help"},{trg:"走(はし)らせる",src:"make run"},{trg:"させる",src:"causative of する"},{trg:"こさせる",src:"causative of くる"}]},

  {type:"fb", s:"コーチが選手(せんしゅ)を{1}ています。\n(The coach is making the athletes run.)", a:"走(はし)らせ", opts:["走(はし)らせ","走(はし)って","走(はし)り","走(はし)られ"], sSrc:"The coach is making the athletes run.",
   hint:"The causative form of 走(はし)る (to run). Group 1: あ-row + せる."},

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
   example:"A: 毎日(まいにち)残業(ざんぎょう)させられています。\nB: それは大変(たいへん)ですね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
   exampleSrc:"A: I am being made to work overtime every day.\nB: That must be tough.\nA: Do you recommend it?\nB: Yes, please try it.",
   funFact:"The causative-passive is one of the longest verb forms in Japanese. It stacks two suffixes: causative (させ) + passive (られる). The result always implies the subject is unhappy about being made to do something. It is the grammar of complaint and injustice."},

  {type:"teach", trg:"食(た)べさせられる", src:"to be made to eat", pos:"verb", gender:null,
   note:"Causative-passive of 食(た)べる. Group 2: 食(た)べ + させられる.\nExpresses being forced to eat unwillingly.",
   example:"A: 嫌(きら)いなものを食(た)べさせられました。\nB: 嫌(いや)でしたね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
   exampleSrc:"A: I was made to eat something I dislike.\nB: That was unpleasant.\nA: Shall we go together?\nB: That sounds good. Let's go.",
   funFact:"This is the classic example of causative-passive. Every Japanese language textbook uses it. Children being forced to eat vegetables (yasai wo tabesaserareta) is a universal experience. The form is long but used naturally in everyday complaints."},

  {type:"teach", trg:"待(ま)たされる", src:"to be made to wait (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of 待(ま)つ. Group 1 shortcut: あ-row + される.\n待(ま)たせられる → 待(ま)たされる. More natural in speech.",
   example:"A: 2時間(じかん)も待(ま)たされました。\nB: ひどいですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
   exampleSrc:"A: I was made to wait for two whole hours.\nB: That is terrible.\nA: Where do you recommend?\nB: I recommend Kyoto.",
   funFact:"Group 1 verbs have a short form: the full させられる becomes される attached to the あ-row. 待(ま)つ → 待(ま)たされる (not 待(ま)たせられる). This short form is strongly preferred in casual speech. It sounds more natural and is easier to say."},

  {type:"teach", trg:"飲(の)まされる", src:"to be made to drink (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of 飲(の)む. Group 1: 飲(の)む → 飲(の)まされる.\nOften describes being pressured to drink alcohol.",
   example:"A: 飲(の)み会(かい)でたくさん飲(の)まされました。\nB: 大丈夫(だいじ��うぶ)ですか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
   exampleSrc:"A: I was made to drink a lot at the drinking party.\nB: Are you okay?\nA: What was the best part?\nB: The food was the most delicious.",
   funFact:"飲まされる is a culturally loaded word. Japanese nomikai (drinking parties) have a strong social pressure to drink. Superiors pouring drinks for juniors creates an obligation to accept. The causative-passive perfectly captures this 'I had no choice but to drink' feeling."},

  {type:"mc", q:"食(た)べさせられた means:", opts:["I was made to eat","I let someone eat","I made someone eat","I wanted to eat"], ans:"I was made to eat",
   hint:"The causative-passive always means the subject was forced to do the action unwillingly."},

  {type:"teach", trg:"買(か)わされる", src:"to be made to buy (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of 買(か)う (to buy). Group 1: 買(か)う → 買(か)わされる.\nImplies being pressured into purchasing.",
   example:"A: 要(い)らないものを買(か)わされました。\nB: どこでですか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
   exampleSrc:"A: I was made to buy something I did not need.\nB: Where?\nA: Do you go often?\nB: I go about once a month.",
   funFact:"買わされる describes the experience of aggressive sales tactics. In Japan, while most shopping is pressure-free, tourist areas sometimes have pushy vendors. The causative-passive perfectly captures the feeling of being talked into a purchase you did not want."},

  {type:"teach", trg:"残業(ざんぎょう)", src:"overtime work", pos:"noun", gender:null,
   note:"残(ざん) (remain) + 業(ぎょう) (work). 残業(ざんぎょう)する = to work overtime.\nKanji: 残業. A major topic in Japanese work culture.",
   example:"A: 今日(きょう)も残業(ざんぎょう)ですか？\nB: はい、させられています。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Overtime again today?\nB: Yes, I am being made to.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"残業 is one of the most discussed words in modern Japan. Japan's overwork culture (karoshi, death from overwork, is a legal term) has led to government reforms. 'Being made to do overtime' (zangyou saserareru) is a common complaint. Recent laws cap overtime at 45 hours per month."},

  {type:"tip", title:"Causative-Passive Formation",
   text:"Full form (all groups):\nGroup 2: stem + させられる. 食(た)べる → 食(た)べさせられる.\nする → させられる. くる → こさせられる.\n\nShort form (Group 1 only):\nChange う to あ-row + される.\n待(ま)つ → 待(ま)たされる (not 待(ま)たせられる)\n飲(の)む → 飲(の)まされる\n買(か)う → 買(か)わされる\n書(か)く → 書(か)かされる\n\nThe short form is preferred in conversation. The full form sounds bookish.",
   deepDive:{title:"Why the Short Form Exists",
    text:"The full causative-passive for Group 1 verbs creates tongue-twisting strings: 待(ま)たせられる (7 syllables). The short form 待(ま)たされる (5 syllables) is much easier to say.\n\nThe short form merges the causative せ into the passive され, creating あされる. This only works for Group 1 verbs. Group 2 verbs must use the full させられる.\n\nIn writing, both forms are acceptable. In speech, using the long form for Group 1 verbs sounds unnatural and overly formal."}},

  {type:"fb", s:"2時間(じかん)も{1}ました。\n(I was made to wait for two whole hours.)", a:"待(ま)たされ", opts:["待(ま)たされ","待(ま)たせて","待(ま)って","待(ま)つ"], sSrc:"I was made to wait for two whole hours.",
   hint:"Short causative-passive of 待(ま)つ. Group 1 shortcut: あ-row + される."},

  {type:"teach", trg:"やらされる", src:"to be made to do (short form)", pos:"verb", gender:null,
   note:"Short causative-passive of やる (to do, casual). Group 1: やる → やらされる.\nCommon in complaints about work or chores.",
   example:"A: つまらない仕事(しごと)をやらされています。\nB: ちょっと我慢(がまん)してください。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: I am being made to do boring work.\nB: Please bear with it a little.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"やらされる is the go-to causative-passive for general complaints. やる is the casual form of する (to do), so やらされる means 'being made to do stuff.' It appears constantly in complaints about school assignments, chores, and workplace tasks."},

  {type:"teach", trg:"我慢(がまん)する", src:"to endure / to bear with", pos:"verb", gender:null,
   note:"する-verb. 我慢(がまん) = endurance/patience. Kanji: 我慢する.\nA core Japanese cultural concept.",
   example:"A: 暑(あつ)いですけど我慢(がまん)してください。\nB: 頑張(がんば)ります。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: It is hot, but please bear with it.\nB: I will do my best.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"我慢 combines 我 (self) and 慢 (pride/slowness). Gaman is a deeply Japanese virtue: enduring hardship with patience and dignity. After natural disasters, Japanese resilience is often attributed to gaman. The word appears in daily life: 我慢(がまん)して (bear with it) is heard constantly."},

  {type:"mc", q:"飲(の)まされた means:", opts:["I drank by choice","I was made to drink","I let someone drink","Someone drank for me"], ans:"I was made to drink",
   hint:"The short causative-passive form always implies being forced to do the action."},

  {type:"match", pairs:[{trg:"食(た)べさせられる",src:"be made to eat"},{trg:"待(ま)たされる",src:"be made to wait"},{trg:"飲(の)まされる",src:"be made to drink"},{trg:"買(か)わされる",src:"be made to buy"},{trg:"待(ま)つ",src:"to wait"}]},

  {type:"fb", s:"つまらない仕事(しごと)を{1}います。\n(I am being made to do boring work.)", a:"やらされて", opts:["やらされて","やって","やらせて","やられて"], sSrc:"I am being made to do boring work.",
   hint:"The short causative-passive て-form of やる (to do). Expresses being forced."},

  {type:"match", pairs:[{trg:"やらされる",src:"be made to do"},{trg:"残業(ざんぎょう)",src:"overtime"},{trg:"我慢(がまん)する",src:"to endure"},{trg:"させられる",src:"causative-passive of する"}]},

  {type:"mc", q:"Which form is the short causative-passive of 書(か)く (to write)?", opts:["書(か)かせられる","書(か)かれる","書(か)かされる","書(か)かせる"], ans:"書(か)かされる",
   hint:"Group 1 short form: change う to あ-row, then add される."},

  {type:"fb", s:"仕事(しごと)が多(おお)くても、何(なに)とか{1}ています。あきらめません。",
   a:["我慢(がまん)する"],
   opts:["我慢(がまん)する","残業(ざんぎょう)する","休(やす)む","断(ことわ)る"],
   hint:"Even with a heavy workload you are persevering and not giving up. This する-verb means 'to endure' or 'to bear with' hardship.",
   sSrc:"Even with a lot of work, I am somehow {1}. I will not give up."},

  {type:"fb", s:"今日(きょう)も{1}があって、疲(つか)れました。早(はや)く家(いえ)に帰(かえ)りたいです。",
   a:["残業(ざんぎょう)"],
   opts:["残業(ざんぎょう)","休憩(きゅうけい)","仕事(しごと)","勤務(きんむ)"],
   hint:"You stayed at work beyond normal hours again and are exhausted. This noun refers to extra hours worked past the scheduled end of the workday.",
   sSrc:"There was {1} again today and I am tired. I want to go home soon."}]},EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_18;
