// Japanese V2 Unit 22. やりもらい (Giving & Receiving)
import BATCH2_L01 from './_batch2_u22_L01.js';
import EXP_L3 from './_temp_u22_expand_L01.js';import EXP_L4 from './_temp_u22_expand_L02.js';import EXP_L5 from './_temp_u22_expand_L03.js';
// Level: B1.2. JLPT N3 aligned.
// あげる/もらう/くれる, て-form favors, polite forms.

const UNIT_22 = {
  n:22, lang:"ja", srcLang:"en", track:"v2",
  title:"やりもらい", sub:"Giving & Receiving",
  icon:"🎁", level:"B1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: あげる・もらう・くれる (Objects) ═══
{id:"jav2_u22l1", title:"あげる・もらう・くれる", icon:"🎀", xp:15, board:true, steps:[
  {type:"intro", title:"あげる・もらう・くれる",
   desc:"Master the three giving/receiving verbs, one of the trickiest systems in Japanese. あげる (give away from me), もらう (receive), and くれる (give to me). The choice depends on direction: who gives to whom, and where 'I' stand in the exchange.",
   goals:["Use あげる for giving (away from speaker)","Use もらう for receiving","Use くれる for giving (toward speaker)"]},

  {type:"teach", trg:"あげる", src:"to give (away from speaker)", pos:"verb", gender:null,
   note:"Speaker gives to someone, or 3rd person gives to another 3rd person.\nNever for giving TO the speaker. Person に + thing を + あげる.",
   example:"A: ともだちにプレゼントをあげました。\nB: なにをあげましたか？",
   exampleSrc:"A: I gave a present to my friend.\nB: What did you give?",
   funFact:"あげる literally means 'to raise' (上げる). The metaphor is raising something up to offer it. In the giving/receiving triad, あげる always moves away from the speaker's perspective. You cannot say 'someone あげる to me' because that would move toward the speaker, which requires くれる instead."},

  {type:"teach", trg:"もらう", src:"to receive / to get", pos:"verb", gender:null,
   note:"Speaker receives from someone. Person に/から + thing を + もらう.\nThe receiver is the subject.",
   example:"A: たんじょうびにともだちからプレゼントをもらいました。\nB: うれしいですね。",
   exampleSrc:"A: I received a present from my friend for my birthday.\nB: That is nice.",
   funFact:"もらう puts the receiver as the subject: 'I received from X.' This is the opposite perspective from あげる/くれる where the giver is the subject. The giver is marked with に or から (from). もらう is also used to express gratitude for favors: てもらう (to have someone do something for you)."},

  {type:"teach", trg:"くれる", src:"to give (toward speaker)", pos:"verb", gender:null,
   note:"Someone gives to the speaker (or speaker's in-group).\nExpresses gratitude: they gave TO ME.",
   example:"A: ははがおべんとうをつくってくれました。\nB: やさしいおかあさんですね。",
   exampleSrc:"A: My mother made a lunch box for me.\nB: What a kind mother.",
   funFact:"くれる is the most emotionally loaded of the three. It inherently expresses gratitude: someone did something for ME. This is absent in English. 'My mother made me lunch' is neutral in English, but ははがつくってくれた carries warmth and thankfulness. Choosing くれる over もらう shifts focus to the giver's kindness."},

  {type:"teach", trg:"プレゼント", src:"present / gift", pos:"noun", gender:null,
   note:"From English 'present.' Also おくりもの (gift, more formal).\nプレゼントをあげる = to give a present.",
   example:"A: クリスマスのプレゼントはなにがいいですか？\nB: ほんがほしいです。",
   exampleSrc:"A: What would you like for a Christmas present?\nB: I want a book.",
   funFact:"Gift-giving (贈り物, okurimono) is deeply ritualized in Japan. Ochugen (mid-year) and oseibo (year-end) gifts are exchanged between business contacts and social connections. Gifts are often wrapped beautifully and presented with both hands. Refusing a gift outright is considered very rude."},

  {type:"mc", q:"ともだちがほんをくれた means:", opts:["My friend gave me a book","I gave a book to my friend","My friend wants a book","I received a book for my friend"], ans:"My friend gave me a book",
   hint:"くれる means someone offered something TO the speaker. The giver's kindness is implied."},

  {type:"teach", trg:"おくる", src:"to send / to give (a gift)", pos:"verb", gender:null,
   note:"Group 1 verb. てがみをおくる = send a letter. プレゼントをおくる = send/give a gift.\nKanji: 送る (send) or 贈る (present a gift).",
   example:"A: りょうしんにはなをおくりました。\nB: よろこびますね。",
   exampleSrc:"A: I sent flowers to my parents.\nB: They will be happy.",
   funFact:"送る has two kanji depending on meaning: 送る (to send/see off) and 贈る (to present a gift). The sendoff meaning is important: friends 'okuru' someone leaving. At airports, Japanese families and friends often come to see travelers off, a cultural practice that is becoming less common but still valued."},

  {type:"teach", trg:"おみやげ", src:"souvenir / local gift", pos:"noun", gender:null,
   note:"Local specialty gifts brought back from trips. With honorific お.\nKanji: お土産.",
   example:"A: きょうとのおみやげをかいました。\nB: なにをかいましたか？",
   exampleSrc:"A: I bought Kyoto souvenirs.\nB: What did you buy?",
   funFact:"Omiyage culture is uniquely Japanese. When you travel anywhere, you are expected to bring back local specialty snacks for coworkers, friends, and family. Every train station and airport has omiyage shops. Failing to bring omiyage after a trip is a social faux pas. The gifts are usually individually wrapped sweets."},

  {type:"tip", title:"The Giving/Receiving Triad",
   text:"あげる: I give to you/them. You give to them.\nわたしがともだちにあげた。(I gave to friend.)\n\nくれる: You/they give to ME (or my group).\nともだちがわたしにくれた。(Friend gave to me.)\n\nもらう: I receive from you/them.\nわたしがともだちにもらった。(I received from friend.)\n\nKey rule: くれる = giving toward speaker. あげる = giving away from speaker.\nNever say: *ともだちがわたしにあげた (wrong direction).\nCorrect: ともだちがわたしにくれた.",
   deepDive:{title:"Why Three Verbs for Giving?",
    text:"English has 'give' and 'receive.' Japanese has three verbs because direction relative to the speaker matters.\n\nImagine yourself at the center of a circle:\n- あげる: arrows going OUT from you (you give, or others give to each other)\n- くれる: arrows coming IN toward you (others give to you)\n- もらう: you PULL something in (you receive)\n\nくれる and もらう describe the same event from different angles:\nともだちがくれた (friend gave to me, emphasizes friend's kindness)\nわたしがもらった (I received from friend, emphasizes my receiving)\n\nThis system encodes social awareness and gratitude into the grammar itself."}},

  {type:"fb", s:"たんじょうびにともだち{1}プレゼントをもらいました。\n(I received a present from my friend for my birthday.)", a:"から", opts:["から","に","を","で"], sSrc:"I received a present from my friend for my birthday.",
   hint:"The particle marking the source/origin when receiving something from someone."},

  {type:"teach", trg:"わたす", src:"to hand over / to deliver", pos:"verb", gender:null,
   note:"Group 1 verb. Direct physical handover of objects.\nKanji: 渡す. しょるいをわたす = hand over documents.",
   example:"A: かぎをかれにわたしてください。\nB: わかりました。",
   exampleSrc:"A: Please hand the key to him.\nB: Understood.",
   funFact:"渡す uses the kanji 渡 (cross over/ferry), suggesting something crossing from one person to another. It is more physical and concrete than あげる. You わたす documents, keys, tickets, and packages. The word also appears in 渡る (wataru, to cross a bridge/road), sharing the 'crossing over' concept."},

  {type:"teach", trg:"うける", src:"to receive (formal) / to take (an exam)", pos:"verb", gender:null,
   note:"Group 2 verb. しけんをうける = take an exam. えいきょうをうける = be influenced.\nKanji: 受ける.",
   example:"A: らいしゅうめんせつをうけます。\nB: がんばってください。",
   exampleSrc:"A: I will have an interview next week.\nB: Do your best.",
   funFact:"受ける is a versatile verb meaning to receive, undergo, or take on. しけんをうける (take an exam), めんせつをうける (have an interview), ちりょうをうける (receive treatment). In slang, うける means 'that is hilarious,' short for ウケる (it gets a good reception/laugh)."},

  {type:"mc", q:"Which verb do you use when YOUR MOTHER gives YOU something?", opts:["あげる","くれる","もらう","おくる"], ans:"くれる",
   hint:"When someone gives TO the speaker or the speaker's in-group, this verb expresses their kindness."},

  {type:"match", pairs:[{trg:"あげる",src:"to give (away from me)"},{trg:"もらう",src:"to receive"},{trg:"くれる",src:"to give (to me)"},{trg:"プレゼント",src:"present/gift"}]},

  {type:"match", pairs:[{trg:"おくる",src:"to send/give"},{trg:"おみやげ",src:"souvenir"},{trg:"わたす",src:"to hand over"},{trg:"うける",src:"to receive (formal)"}]},

  {type:"fb", s:"ともだちがほんを{1}ました。\n(My friend gave me a book.)", a:"くれ", opts:["くれ","あげ","もらい","おくり"], sSrc:"My friend gave me a book.",
   hint:"The verb for when someone else gives something TO the speaker. Implies gratitude."},

  {type:"mc", q:"おみやげ is:", opts:["a greeting card","a birthday cake","a souvenir brought back from a trip","a business card"], ans:"a souvenir brought back from a trip",
   hint:"Local specialty gifts that travelers purchase while away and share with friends and coworkers."},
]},

// ═══ L2: てあげる・てもらう・てくれる (Favors) ═══
{id:"jav2_u22l2", title:"てあげる・てもらう・てくれる", icon:"🤝", xp:15, board:true, steps:[
  {type:"intro", title:"てあげる・てもらう・てくれる",
   desc:"Extend giving and receiving to actions and favors. てあげる means doing something for someone. てもらう means having someone do something for you. てくれる means someone kindly does something for you. Add the polite forms ていただく and てくださる for formal situations.",
   goals:["Use てあげる for doing favors for others","Use てもらう/てくれる for receiving favors","Use ていただく/てくださる for polite favor language"]},

  {type:"teach", trg:"〜てあげる", src:"to do ~ for someone (favor given)", pos:"part", gender:null,
   note:"て-form + あげる = do something for someone else.\nExpresses doing a favor. Can sound condescending if misused.",
   example:"A: おばあさんのにもつをもってあげました。\nB: やさしいですね。",
   exampleSrc:"A: I carried the elderly woman's luggage for her.\nB: How kind.",
   funFact:"てあげる can sound patronizing if used carelessly. Saying てあげる TO the person you helped sounds like 'I graciously did this for you.' It is safer when describing your actions to a third party. Direct offers use ましょうか (shall I?) instead: もちましょうか？ (shall I carry it?) is more natural than もってあげましょうか？"},

  {type:"teach", trg:"〜てもらう", src:"to have someone do ~ for you", pos:"part", gender:null,
   note:"て-form + もらう = have someone do something for you.\nThe receiver (you) is the subject. Person に + てもらう.",
   example:"A: ともだちにくうこうまでおくってもらいました。\nB: いいともだちですね。",
   exampleSrc:"A: I had my friend drive me to the airport.\nB: What a good friend.",
   funFact:"てもらう is extremely natural in Japanese. It frames actions as favors received, which fits the culture of acknowledging others' kindness. 'I had my friend drive me' (okutte moratta) sounds warmer than 'my friend drove me' (tomodachi ga okutta). Japanese people use てもらう far more than English speakers use 'have someone do.'"},

  {type:"teach", trg:"〜てくれる", src:"someone kindly does ~ for me", pos:"part", gender:null,
   note:"て-form + くれる = someone does something for the speaker.\nEmphasizes the giver's kindness. Very warm and natural.",
   example:"A: あにがしゅくだいをてつだってくれました。\nB: やさしいおにいさんですね。",
   exampleSrc:"A: My older brother helped me with homework.\nB: What a kind older brother.",
   funFact:"てくれる is the most emotionally expressive favor verb. It inherently says 'they did this for me and I am grateful.' Japanese speakers use てくれる constantly in daily conversation. Saying ともだちがてつだってくれた (my friend helped me) feels warm and appreciative in a way that plain てつだった (helped) does not."},

  {type:"mc", q:"ともだちにくうこうまでおくってもらった means:", opts:["I had my friend drive me to the airport","I drove my friend to the airport","My friend asked me to drive","I will drive to the airport"], ans:"I had my friend drive me to the airport",
   hint:"てもらう means having someone do a favor for you. The receiver is the subject."},

  {type:"teach", trg:"〜ていただく", src:"to have someone do ~ (humble/polite)", pos:"part", gender:null,
   note:"Polite version of てもらう. Used with superiors, customers, strangers.\nてもらう → ていただく.",
   example:"A: せんせいにすいせんじょうをかいていただきました。\nB: よかったですね。",
   exampleSrc:"A: I had the teacher write a recommendation letter for me.\nB: That is great.",
   funFact:"ていただく is the business/formal standard for てもらう. In Japanese workplaces, almost every request uses this form: ごかくにんいただけますか (could you confirm this?), おまちいただけますか (could you wait?). The ていただけますか pattern (could you kindly do?) is the most polite standard request form."},

  {type:"teach", trg:"〜てくださる", src:"someone kindly does ~ for me (honorific)", pos:"part", gender:null,
   note:"Polite version of てくれる. Used about superiors' kind actions.\nてくれる → てくださる.",
   example:"A: ぶちょうがアドバイスをしてくださいました。\nB: ありがたいですね。",
   exampleSrc:"A: The department head kindly gave me advice.\nB: That is something to be grateful for.",
   funFact:"てくださる is the honorific of てくれる. The common ください (please) is actually the imperative of くださる. When describing a superior's kindness, always use てくださる: せんせいがおしえてくださった (the teacher kindly taught me). Using plain てくれた about a teacher would be disrespectful."},

  {type:"teach", trg:"おしえる", src:"to teach / to tell / to show", pos:"verb", gender:null,
   note:"Group 2 verb. Covers teaching, informing, and showing the way.\nKanji: 教える. みちをおしえる = give directions.",
   example:"A: みちをおしえていただけますか？\nB: まっすぐいって、みぎにまがってください。",
   exampleSrc:"A: Could you tell me the way? (polite)\nB: Go straight and turn right.",
   funFact:"教える covers a wider range than English 'teach.' It includes teaching (sensei ga oshieru), telling/informing (jyuusho wo oshieru, tell the address), and showing directions (michi wo oshieru). The polite oshiete itadakemasu ka (could you kindly tell me?) is one of the most useful phrases for travelers in Japan."},

  {type:"tip", title:"Favor Verbs: Plain vs. Polite",
   text:"Doing a favor:\nてあげる (plain) = I do for someone\nてさしあげる (polite) = I humbly do for someone\n\nReceiving a favor (receiver as subject):\nてもらう (plain) = I have someone do for me\nていただく (polite) = I humbly have someone do for me\n\nReceiving a favor (giver as subject):\nてくれる (plain) = someone does for me\nてくださる (polite) = someone kindly does for me\n\nBusiness standard: ていただけますか？ = Could you kindly do?",
   deepDive:{title:"Choosing the Right Favor Verb",
    text:"The three favor verbs encode different perspectives:\n\nてあげる: focuses on YOUR act of giving. Use when telling others about your kindness. Avoid using it directly to the person (sounds boastful).\n\nてもらう/ていただく: focuses on the benefit YOU received. Use when you want to acknowledge receiving help. Most natural for requests.\n\nてくれる/てくださる: focuses on the OTHER PERSON's kindness. Use when you want to praise someone's thoughtfulness. Most emotionally warm.\n\nExamples describing the same event:\nにもつをもってあげた (I carried it for them. My action.)\nにもつをもってもらった (I had them carry it. My benefit.)\nにもつをもってくれた (They carried it for me. Their kindness.)"}},

  {type:"fb", s:"せんせいにすいせんじょうをかいて{1}ました。\n(I had the teacher write a recommendation letter for me. - polite)", a:"いただき", opts:["いただき","もらい","くれ","あげ"], sSrc:"I had the teacher write a recommendation letter for me.",
   hint:"The polite/humble version of てもらう, used when the favor-doer is a superior."},

  {type:"teach", trg:"なおす", src:"to fix / to repair / to correct", pos:"verb", gender:null,
   note:"Group 1 verb. パソコンをなおす = fix a computer.\nKanji: 直す. Also means to correct (writing).",
   example:"A: パソコンをなおしてもらいました。\nB: だれになおしてもらいましたか？",
   exampleSrc:"A: I had my computer fixed.\nB: Who did you have fix it?",
   funFact:"直す has two main meanings: repair (broken things) and correct (mistakes). くるまをなおす (fix a car), さくぶんをなおす (correct an essay). The kanji 直 means 'straight/direct,' suggesting making something right again. The related 直る (naoru) is the intransitive: the computer fixed itself/got fixed."},

  {type:"teach", trg:"てつだう", src:"to help / to assist", pos:"verb", gender:null,
   note:"Group 1 verb. てつだってくれる = someone helps me.\nKanji: 手伝う. て (hand) + つたう (transmit).",
   example:"A: ひっこしをてつだってくれませんか？\nB: もちろん！いつですか？",
   exampleSrc:"A: Could you help me move? (lit: won't you help?)\nB: Of course! When?",
   funFact:"手伝う literally means 'lend a hand.' The request てつだってくれませんか (won't you help me?) uses the negative question form, which is the most natural way to ask for help in Japanese. Negative questions (won't you? can't you?) are softer than positive ones (will you? can you?)."},

  {type:"mc", q:"あにがしゅくだいをてつだってくれた means:", opts:["I helped my brother with homework","My brother kindly helped me with homework","My brother wants to help","I asked my brother for help"], ans:"My brother kindly helped me with homework",
   hint:"てくれる shows that someone did something for the speaker. It emphasizes their kindness."},

  {type:"match", pairs:[{trg:"てあげる",src:"do for someone"},{trg:"てもらう",src:"have someone do"},{trg:"てくれる",src:"someone does for me"},{trg:"ていただく",src:"have someone do (polite)"}]},

  {type:"fb", s:"みちを{1}いただけますか？\n(Could you kindly tell me the way?)", a:"おしえて", opts:["おしえて","おしえ","おしえる","おしえた"], sSrc:"Could you kindly tell me the way?",
   hint:"The て-form of the verb meaning 'to teach/tell.' Combined with いただけますか for a polite request."},

  {type:"match", pairs:[{trg:"てくださる",src:"someone does for me (hon.)"},{trg:"おしえる",src:"to teach/tell"},{trg:"なおす",src:"to fix/correct"},{trg:"てつだう",src:"to help"}]},

  {type:"mc", q:"ていただけますか is used to:", opts:["thank someone for a past favor","describe someone's habitual action","make a very polite request","refuse an offer politely"], ans:"make a very polite request",
   hint:"This is the formal potential question form of ていただく, used to ask someone to do a favor."},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L01
]};
export default UNIT_22;
