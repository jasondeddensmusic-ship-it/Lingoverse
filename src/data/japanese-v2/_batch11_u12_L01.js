// Batch 11 – Unit 12 (A2.1 Ability & Potential): Senses & Perception Verbs
const BATCH11_L1 = {
  id:"jav2_u12l_b11_1", title:"感覚(かんかく)の動詞(どうし)", icon:"👀", xp:15, board:true,
  steps:[
    {type:"intro", title:"感覚(かんかく)の動詞(どうし)",
     desc:"Learn verbs related to the five senses and perception. Japanese distinguishes between intentional actions (looking, listening) and involuntary perception (seeing, hearing).",
     goals:["Distinguish between 見(み)る/見(み)える and 聞(き)く/聞(き)こえる","Use perception verbs with appropriate particles","Express sensory experiences naturally"]},

    {type:"teach", trg:"見(み)える", src:"to be visible / can see", pos:"verb", gender:null,
     note:"Group 2 verb. Involuntary: something IS visible to you.\nContrast: 見(み)る = to look at (intentional).",
     example:"A: ここから富士山(ふじさん)が見(み)えますか？\nB: はい、今日(きょう)はきれいに見(み)えます。",
     exampleSrc:"A: Can you see Mt. Fuji from here?\nB: Yes, today it is clearly visible.",
     funFact:"見(み)える is the potential/involuntary form of 見(み)る: you did not try to see it, it simply appeared in your vision. 富士山(ふじさん)が見(み)える = Fuji is visible (to me). Japanese carefully distinguishes between intentional and unintentional perception, which English often conflates."},

    {type:"teach", trg:"聞(き)こえる", src:"to be audible / can hear", pos:"verb", gender:null,
     note:"Group 2 verb. Involuntary: a sound reaches your ears.\nContrast: 聞(き)く = to listen (intentional).",
     example:"A: なにか聞(き)こえますか？\nB: 鳥(とり)の声(こえ)が聞(き)こえます。",
     exampleSrc:"A: Can you hear something?\nB: I can hear bird voices.",
     funFact:"聞(き)こえる = sounds reach your ears naturally. 聞(き)く = you actively listen. 音楽(おんがく)を聞(き)く (listen to music, intentional). 音(おと)が聞(き)こえる (a sound is heard, unintentional). This distinction exists in many Asian languages but not in English, making it a key learning point."},

    {type:"teach", trg:"におう", src:"to smell (intransitive)", pos:"verb", gender:null,
     note:"Group 1 verb. Something gives off a smell.\nいいにおい = good smell. くさい = stinky.",
     example:"A: なにかいいにおいがしますね。\nB: パンを焼(や)いています。",
     exampleSrc:"A: Something smells good.\nB: I am baking bread.",
     funFact:"Japanese has a rich vocabulary for smells. においがする = there is a smell (neutral). いいにおい = pleasant fragrance. くさい = stinky. かおり is a more elegant word for fragrance. The expression 鼻(はな)が利(き)く (the nose works well) means having a good sense for opportunities, not just literal smelling."},

    {type:"teach", trg:"触(さわ)る", src:"to touch", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 触(さわ)って.\n触(さわ)らないでください = please do not touch.",
     example:"A: このぬいぐるみ、触(さわ)ってもいいですか？\nB: どうぞ、やわらかいですよ。",
     exampleSrc:"A: May I touch this stuffed animal?\nB: Please do, it is soft.",
     funFact:"触(さわ)らないでください (please do not touch) is a common sign in Japanese stores and museums. Japanese culture generally values personal space and minimal physical contact. Bowing replaces handshaking. The distinction between 触(さわ)る (touch lightly) and 握(にぎ)る (grip/hold firmly) matters in martial arts."},

    {type:"teach", trg:"感(かん)じる", src:"to feel / sense", pos:"verb", gender:null,
     note:"Group 2 verb. For physical and emotional feelings.\n寒(さむ)さを感(かん)じる = feel the cold.",
     example:"A: 地震(じしん)を感(かん)じましたか？\nB: はい、少(すこ)し揺(ゆ)れました。",
     exampleSrc:"A: Did you feel the earthquake?\nB: Yes, it shook a little.",
     funFact:"感(かん)じる covers both physical sensation and emotional feeling. 地震(じしん)を感(かん)じる (feel an earthquake) and 悲(かな)しさを感(かん)じる (feel sadness) use the same verb. Japan's frequent earthquakes make 感(かん)じる one of the first verbs visitors use in real life."},

    {type:"teach", trg:"わかる", src:"to understand / to know", pos:"verb", gender:null,
     note:"Group 1 verb. Subject takes が, not を.\n日本語(にほんご)がわかる = understand Japanese.",
     example:"A: 日本語(にほんご)がわかりますか？\nB: 少(すこ)しわかります。",
     exampleSrc:"A: Do you understand Japanese?\nB: I understand a little.",
     funFact:"わかる takes が (not を) because understanding is treated as an involuntary state in Japanese, not an active action. You do not 'do' understanding, it happens to you. This is similar to 好(す)き (like) and 嫌(きら)い (dislike) taking が. The particle choice reflects a fundamentally different view of cognition."},

    {type:"teach", trg:"知(し)る", src:"to come to know / to learn (a fact)", pos:"verb", gender:null,
     note:"Group 1 verb. Usually used as 知(し)っている (know/be aware of).\n知(し)りません = I don't know.",
     example:"A: このレストランを知(し)っていますか？\nB: いいえ、知(し)りません。",
     exampleSrc:"A: Do you know this restaurant?\nB: No, I don't know it.",
     funFact:"知(し)る has a unique usage pattern. The present tense 知(し)っている means 'I know' (state of knowing). 知(し)りません means 'I don't know.' But you almost never say 知(し)っていません in negative form (it sounds strange). The pair 知(し)っている/知(し)りません is one of Japanese's quirky asymmetries."},

    {type:"teach", trg:"思(おも)う", src:"to think / to feel (opinion)", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 思(おも)って.\n...と思(おも)う = I think that...",
     example:"A: この映画(えいが)はどうでしたか？\nB: 面白(おもしろ)かったと思(おも)います。",
     exampleSrc:"A: How was this movie?\nB: I think it was interesting.",
     funFact:"...と思(おも)う (I think that...) is one of the most important patterns in Japanese conversation. It softens statements, making them sound less assertive. Japanese speakers rarely make flat declarations. Adding と思(おも)います is considered polite and humble. Removing it can sound rude or arrogant."},

    {type:"teach", trg:"気(き)づく", src:"to notice / to realize", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 気(き)づいて.\nに + 気(き)づく = notice something.",
     example:"A: 間違(まちが)いに気(き)づきましたか？\nB: はい、さっき気(き)づきました。",
     exampleSrc:"A: Did you notice the mistake?\nB: Yes, I noticed it just now.",
     funFact:"気(き)づく (to notice/realize) is valued in Japanese work culture. 気(き)がつく (similar meaning, to be attentive) describes a person who notices small details and acts on them without being told. 気(き)がつく人(ひと) (an attentive person) is one of the highest compliments in the Japanese workplace."},

    {type:"teach", trg:"思(おも)い出(だ)す", src:"to recall / to remember", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 思(おも)い出(だ)して.\n思(おも)い (thought) + 出(だ)す (bring out).",
     example:"A: あの人(ひと)の名前(なまえ)を思(おも)い出(だ)せますか？\nB: ちょっとまって... 佐藤(さとう)さんです！",
     exampleSrc:"A: Can you recall that person's name?\nB: Wait a moment... It's Sato-san!",
     funFact:"思(おも)い出(だ)す literally means 'bring out a thought.' It is different from 覚(おぼ)える (to memorize/store a memory). 覚(おぼ)える = putting information IN. 思(おも)い出(だ)す = pulling information OUT. This elegant pair describes the two directions of memory: encoding and retrieval."},

    {type:"teach", trg:"気(き)がする", src:"to have a feeling that...", pos:"verb", gender:null,
     note:"Fixed expression. ...気(き)がする = have a vague feeling.\nMore intuitive than 思(おも)う.",
     example:"A: 雨(あめ)が降(ふ)る気(き)がします。\nB: かさをもっていきましょう。",
     exampleSrc:"A: I have a feeling it will rain.\nB: Let's bring an umbrella.",
     funFact:"気(き)がする expresses intuition or a vague premonition, weaker than 思(おも)う (think). 雨(あめ)が降(ふ)る気(き)がする = I have a feeling it will rain (gut feeling). 雨(あめ)が降(ふ)ると思(おも)う = I think it will rain (based on evidence). Japanese values intuition (直感(ちょっかん)) and has many expressions for gut feelings."},

    // Quiz steps
    {type:"mc", q:"「見(み)る」と「見(み)える」はどう違(ちが)いますか？",
     opts:["見(み)る is intentional, 見(み)える is involuntary","They mean the same thing","見(み)る is polite, 見(み)える is casual","見(み)る is for objects, 見(み)える is for people"],
     ans:"見(み)る is intentional, 見(み)える is involuntary",
     hint:"One is an active choice to look, the other describes something appearing in your field of vision naturally."},

    {type:"fb", s:"日本語(にほんご)が{1}か？",
     a:["わかります"],
     opts:["わかります","知(し)ります","見(み)えます","聞(き)こえます"],
     hint:"You are asking if someone understands Japanese. This perception verb takes the が particle.",
     sSrc:"Do you understand Japanese?"},

    {type:"match", pairs:[
      {trg:"見(み)える", src:"can see (involuntary)"},
      {trg:"聞(き)こえる", src:"can hear (involuntary)"},
      {trg:"感(かん)じる", src:"to feel / sense"},
      {trg:"気(き)づく", src:"to notice"}
    ]},

    {type:"mc", q:"「知(し)っている」の否定形(ひていけい)はなんですか？",
     opts:["知(し)りません","知(し)っていません","知(し)らないです","知(し)っていないです"],
     ans:"知(し)りません",
     hint:"This verb has an unusual negative pattern. The negative form does not follow the expected ている conjugation."},

    {type:"fb", s:"雨(あめ)が降(ふ)る{1}します。",
     a:["気(き)が"],
     opts:["気(き)が","のが","ことが","ものが"],
     hint:"You have a vague feeling or intuition about rain. This fixed expression uses 気(き) (feeling) + が + する.",
     sSrc:"I have a feeling it will rain."},

    {type:"mc", q:"「覚(おぼ)える」と「思(おも)い出(だ)す」はどう違(ちが)いますか？",
     opts:["覚(おぼ)える is storing memories, 思(おも)い出(だ)す is retrieving them","They are the same","覚(おぼ)える is formal, 思(おも)い出(だ)す is casual","覚(おぼ)える is for names, 思(おも)い出(だ)す is for events"],
     ans:"覚(おぼ)える is storing memories, 思(おも)い出(だ)す is retrieving them",
     hint:"Think of memory as having two directions: putting information in and pulling information out."}
  ,{type:"match",pairs:[{trg:"におう",src:"to smell (intransitive)"},{trg:"触(さわ)る",src:"to touch"},{trg:"わかる",src:"to understand / to know"},{trg:"知(し)る",src:"to come to know / to learn (a fact)"},{trg:"思(おも)う",src:"to think / to feel (opinion)"}]}]
};
export default BATCH11_L1;
