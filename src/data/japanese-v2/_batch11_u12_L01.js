// Batch 11 – Unit 12 (A2.1 Ability & Potential): Senses & Perception Verbs
const BATCH11_L1 = {
  id:"jav2_u12l_b11_1", title:"かんかくのどうし", icon:"👀", xp:15, board:true,
  steps:[
    {type:"intro", title:"かんかくのどうし",
     desc:"Learn verbs related to the five senses and perception. Japanese distinguishes between intentional actions (looking, listening) and involuntary perception (seeing, hearing).",
     goals:["Distinguish between みる/みえる and きく/きこえる","Use perception verbs with appropriate particles","Express sensory experiences naturally"]},

    {type:"teach", trg:"みえる", src:"to be visible / can see", pos:"verb", gender:null,
     note:"Group 2 verb. Involuntary: something IS visible to you.\nContrast: みる = to look at (intentional).",
     example:"A: ここからふじさんがみえますか？\nB: はい、きょうはきれいにみえます。",
     exampleSrc:"A: Can you see Mt. Fuji from here?\nB: Yes, today it is clearly visible.",
     funFact:"みえる is the potential/involuntary form of みる: you did not try to see it, it simply appeared in your vision. ふじさんがみえる = Fuji is visible (to me). Japanese carefully distinguishes between intentional and unintentional perception, which English often conflates."},

    {type:"teach", trg:"きこえる", src:"to be audible / can hear", pos:"verb", gender:null,
     note:"Group 2 verb. Involuntary: a sound reaches your ears.\nContrast: きく = to listen (intentional).",
     example:"A: なにかきこえますか？\nB: とりのこえがきこえます。",
     exampleSrc:"A: Can you hear something?\nB: I can hear bird voices.",
     funFact:"きこえる = sounds reach your ears naturally. きく = you actively listen. おんがくをきく (listen to music, intentional). おとがきこえる (a sound is heard, unintentional). This distinction exists in many Asian languages but not in English, making it a key learning point."},

    {type:"teach", trg:"におう", src:"to smell (intransitive)", pos:"verb", gender:null,
     note:"Group 1 verb. Something gives off a smell.\nいいにおい = good smell. くさい = stinky.",
     example:"A: なにかいいにおいがしますね。\nB: パンをやいています。",
     exampleSrc:"A: Something smells good.\nB: I am baking bread.",
     funFact:"Japanese has a rich vocabulary for smells. においがする = there is a smell (neutral). いいにおい = pleasant fragrance. くさい = stinky. かおり is a more elegant word for fragrance. The expression はながきく (the nose works well) means having a good sense for opportunities, not just literal smelling."},

    {type:"teach", trg:"さわる", src:"to touch", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: さわって.\nさわらないでください = please do not touch.",
     example:"A: このぬいぐるみ、さわってもいいですか？\nB: どうぞ、やわらかいですよ。",
     exampleSrc:"A: May I touch this stuffed animal?\nB: Please do, it is soft.",
     funFact:"さわらないでください (please do not touch) is a common sign in Japanese stores and museums. Japanese culture generally values personal space and minimal physical contact. Bowing replaces handshaking. The distinction between さわる (touch lightly) and にぎる (grip/hold firmly) matters in martial arts."},

    {type:"teach", trg:"かんじる", src:"to feel / sense", pos:"verb", gender:null,
     note:"Group 2 verb. For physical and emotional feelings.\nさむさをかんじる = feel the cold.",
     example:"A: じしんをかんじましたか？\nB: はい、すこしゆれました。",
     exampleSrc:"A: Did you feel the earthquake?\nB: Yes, it shook a little.",
     funFact:"かんじる covers both physical sensation and emotional feeling. じしんをかんじる (feel an earthquake) and かなしさをかんじる (feel sadness) use the same verb. Japan's frequent earthquakes make かんじる one of the first verbs visitors use in real life."},

    {type:"teach", trg:"わかる", src:"to understand / to know", pos:"verb", gender:null,
     note:"Group 1 verb. Subject takes が, not を.\nにほんごがわかる = understand Japanese.",
     example:"A: にほんごがわかりますか？\nB: すこしわかります。",
     exampleSrc:"A: Do you understand Japanese?\nB: I understand a little.",
     funFact:"わかる takes が (not を) because understanding is treated as an involuntary state in Japanese, not an active action. You do not 'do' understanding, it happens to you. This is similar to すき (like) and きらい (dislike) taking が. The particle choice reflects a fundamentally different view of cognition."},

    {type:"teach", trg:"しる", src:"to come to know / to learn (a fact)", pos:"verb", gender:null,
     note:"Group 1 verb. Usually used as しっている (know/be aware of).\nしりません = I don't know.",
     example:"A: このレストランをしっていますか？\nB: いいえ、しりません。",
     exampleSrc:"A: Do you know this restaurant?\nB: No, I don't know it.",
     funFact:"しる has a unique usage pattern. The present tense しっている means 'I know' (state of knowing). しりません means 'I don't know.' But you almost never say しっています in negative form (しっていません sounds strange). The pair しっている/しりません is one of Japanese's quirky asymmetries."},

    {type:"teach", trg:"おもう", src:"to think / to feel (opinion)", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: おもって.\n...とおもう = I think that...",
     example:"A: このえいがはどうでしたか？\nB: おもしろかったとおもいます。",
     exampleSrc:"A: How was this movie?\nB: I think it was interesting.",
     funFact:"...とおもう (I think that...) is one of the most important patterns in Japanese conversation. It softens statements, making them sound less assertive. Japanese speakers rarely make flat declarations. Adding とおもいます is considered polite and humble. Removing it can sound rude or arrogant."},

    {type:"teach", trg:"きづく", src:"to notice / to realize", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: きづいて.\nに + きづく = notice something.",
     example:"A: まちがいにきづきましたか？\nB: はい、さっききづきました。",
     exampleSrc:"A: Did you notice the mistake?\nB: Yes, I noticed it just now.",
     funFact:"きづく (to notice/realize) is valued in Japanese work culture. きがつく (similar meaning, to be attentive) describes a person who notices small details and acts on them without being told. Being きがつくひと (an attentive person) is one of the highest compliments in the Japanese workplace."},

    {type:"teach", trg:"おもいだす", src:"to recall / to remember", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: おもいだして.\nおもい (thought) + だす (bring out).",
     example:"A: あのひとのなまえをおもいだせますか？\nB: ちょっとまって... さとうさんです！",
     exampleSrc:"A: Can you recall that person's name?\nB: Wait a moment... It's Sato-san!",
     funFact:"おもいだす literally means 'bring out a thought.' It is different from おぼえる (to memorize/store a memory). おぼえる = putting information IN. おもいだす = pulling information OUT. This elegant pair describes the two directions of memory: encoding and retrieval."},

    {type:"teach", trg:"きがする", src:"to have a feeling that...", pos:"verb", gender:null,
     note:"Fixed expression. ...きがする = have a vague feeling.\nMore intuitive than おもう.",
     example:"A: あめがふるきがします。\nB: かさをもっていきましょう。",
     exampleSrc:"A: I have a feeling it will rain.\nB: Let's bring an umbrella.",
     funFact:"きがする expresses intuition or a vague premonition, weaker than おもう (think). あめがふるきがする = I have a feeling it will rain (gut feeling). あめがふるとおもう = I think it will rain (based on evidence). Japanese values intuition (直感) and has many expressions for gut feelings."},

    // Quiz steps
    {type:"mc", q:"「みる」と「みえる」はどうちがいますか？",
     opts:["みる is intentional, みえる is involuntary","They mean the same thing","みる is polite, みえる is casual","みる is for objects, みえる is for people"],
     ans:"みる is intentional, みえる is involuntary",
     hint:"One is an active choice to look, the other describes something appearing in your field of vision naturally."},

    {type:"fb", s:"にほんごが{1}か？",
     a:["わかります"],
     opts:["わかります","しります","みえます","きこえます"],
     hint:"You are asking if someone understands Japanese. This perception verb takes the が particle.",
     sSrc:"Do you understand Japanese?"},

    {type:"match", pairs:[
      {trg:"みえる", src:"can see (involuntary)"},
      {trg:"きこえる", src:"can hear (involuntary)"},
      {trg:"かんじる", src:"to feel / sense"},
      {trg:"きづく", src:"to notice"}
    ]},

    {type:"mc", q:"「しっている」のひていけいはなんですか？",
     opts:["しりません","しっていません","しらないです","しっていないです"],
     ans:"しりません",
     hint:"This verb has an unusual negative pattern. The negative form does not follow the expected ている conjugation."},

    {type:"fb", s:"あめがふる{1}します。",
     a:["きが"],
     opts:["きが","のが","ことが","ものが"],
     hint:"You have a vague feeling or intuition about rain. This fixed expression uses き (feeling) + が + する.",
     sSrc:"I have a feeling it will rain."},

    {type:"mc", q:"「おぼえる」と「おもいだす」はどうちがいますか？",
     opts:["おぼえる is storing memories, おもいだす is retrieving them","They are the same","おぼえる is formal, おもいだす is casual","おぼえる is for names, おもいだす is for events"],
     ans:"おぼえる is storing memories, おもいだす is retrieving them",
     hint:"Think of memory as having two directions: putting information in and pulling information out."}
  ]
};
export default BATCH11_L1;
