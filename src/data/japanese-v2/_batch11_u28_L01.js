// Batch 11 – Unit 28 (B2.2 Written vs Spoken): Register & Style Vocabulary
const BATCH11_L1 = {
  id:"jav2_u28l_b11_1", title:"ぶんたいのちがい", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんたいのちがい",
     desc:"Learn vocabulary for discussing differences between written and spoken Japanese, formal and informal registers, and stylistic choices in communication.",
     goals:["Understand register-specific vocabulary","Use formal written expressions","Distinguish between spoken and written style markers"]},

    {type:"teach", trg:"である", src:"is / to be (written style)", pos:"verb", gender:null,
     note:"Written equivalent of です. Used in essays and academic writing.\nXである = X is (formal/written).",
     example:"A: にほんはしまぐにである。\nB: これはろんぶんのかきかたですね。",
     exampleSrc:"A: Japan is an island nation. (written style)\nB: This is essay writing style.",
     funFact:"である is the backbone of Japanese academic writing. It replaces です/だ with a more authoritative tone. ろんぶん (academic papers) almost exclusively use である調 (である style). Students learn to switch between です/ます (polite) and である (written) styles, a skill tested on JLPT N2."},

    {type:"teach", trg:"くだけた", src:"casual / informal (style)", pos:"adj", gender:null,
     note:"くだけたひょうげん = casual expression.\nOpposite: かたい (stiff/formal).",
     example:"A: このメールはすこしくだけすぎていませんか？\nB: しゃちょうあてなので、もっとていねいにしましょう。",
     exampleSrc:"A: Isn't this email a bit too casual?\nB: Since it's addressed to the president, let's make it more polite.",
     funFact:"Japanese communication constantly navigates くだけた (casual) vs かたい (formal). The same message has dramatically different forms: うん (yeah), はい (yes), はい、かしこまりました (yes, certainly). Choosing the wrong register causes social discomfort. This register awareness is called 敬語力 (keigo competence)."},

    {type:"teach", trg:"ぶんまつ", src:"sentence ending", pos:"noun", gender:null,
     note:"ぶんまつひょうげん = sentence-ending expressions.\nKey indicator of formality level.",
     example:"A: ぶんまつをかえるだけで、いんしょうがかわります。\nB: たしかに、です/ます とだ/である はだいぶちがいますね。",
     exampleSrc:"A: Just changing the sentence ending changes the impression.\nB: Indeed, です/ます and だ/である are quite different.",
     funFact:"Japanese ぶんまつ (文末) is where register lives. The same content changes tone entirely: たべる (casual), たべます (polite), めしあがる (honorific), いただく (humble). Sentence endings also convey gender and personality: わ, よ, ぞ, ぜ each carry distinct nuances."},

    {type:"teach", trg:"かきことば", src:"written language", pos:"noun", gender:null,
     note:"Opposite: はなしことば (spoken language).\nかきことばてきなひょうげん = written-style expression.",
     example:"A: これはかきことばなので、はなしことばにかえましょう。\nB: どのぶぶんをかえればいいですか？",
     exampleSrc:"A: This is written language, so let's change it to spoken style.\nB: Which parts should I change?",
     funFact:"The gap between かきことば and はなしことば in Japanese is enormous compared to English. Written Japanese uses kanji-heavy compounds (従って = therefore), while spoken uses simpler forms (だから = so). This divide means Japanese students must learn essentially two vocabularies. JLPT tests both extensively."},

    {type:"teach", trg:"はなしことば", src:"spoken language / colloquial", pos:"noun", gender:null,
     note:"Everyday conversational Japanese.\nはなしことばてきなひょうげん = colloquial expression.",
     example:"A: 「すげー」ははなしことばです。\nB: かきことばでは「すごい」ですね。",
     exampleSrc:"A: 'Sugee' is spoken language.\nB: In written language it is 'sugoi.'",
     funFact:"はなしことば includes contractions (食べている > 食べてる), slang (すげー for すごい), and filler words (えーと, あのー). Young people's はなしことば evolves rapidly: マジ (seriously?), やばい (awesome/terrible), and エモい (emotional/moving) are recent additions that older speakers may not use."},

    {type:"teach", trg:"けいしき", src:"form / format / formality", pos:"noun", gender:null,
     note:"けいしきてき = formal/ceremonial.\nけいしきばる = to be formal/stiff.",
     example:"A: このしょるいのけいしきをおしえてください。\nB: A4サイズで、ひだりそろえです。",
     exampleSrc:"A: Please tell me the format of this document.\nB: A4 size, left-aligned.",
     funFact:"けいしき (形式) matters enormously in Japanese culture. Documents have strict formats. Speeches follow set けいしき. Even informal gatherings have loose けいしき (opening greetings, closing words). The phrase けいしきてきな (formal/ceremonial) describes events that prioritize protocol over substance."},

    {type:"teach", trg:"ひょうげん", src:"expression", pos:"noun", gender:null,
     note:"ひょうげんする = to express.\nひょうげんりょく = expressive ability.",
     example:"A: にほんごのひょうげんはとてもゆたかです。\nB: おのまとぺだけでもすうひゃくありますね。",
     exampleSrc:"A: Japanese expressions are very rich.\nB: There are hundreds of onomatopoeia alone.",
     funFact:"ひょうげん (表現) is a fundamental concept in Japanese language education. ひょうげんりょく (expressive ability) is a key metric in school assessments. Japanese prides itself on nuanced ひょうげん: the difference between さむい (cold), ひえる (get chilled), and こごえる (freeze) captures precisely different experiences of cold."},

    {type:"teach", trg:"ニュアンス", src:"nuance", pos:"noun", gender:null,
     note:"Loanword from French/English.\nニュアンスがちがう = the nuance is different.",
     example:"A: 「すき」と「あいしてる」はニュアンスがちがいます。\nB: 「あいしてる」のほうがつよいですね。",
     exampleSrc:"A: 'Suki' and 'Aishiteru' have different nuances.\nB: 'Aishiteru' is stronger.",
     funFact:"Japanese speakers are extremely sensitive to ニュアンス. The difference between すき (like/love, mild) and あいしてる (I love you, intense) illustrates this. Japanese people rarely say あいしてる, reserving it for the deepest emotions. すき covers most romantic situations. This ニュアンス gap shocks English speakers."},

    {type:"teach", trg:"てきかく", src:"accurate / precise", pos:"adj", gender:null,
     note:"てきかくなひょうげん = precise expression.\nてきかくにつたえる = convey accurately.",
     example:"A: もっとてきかくにせつめいしてください。\nB: すみません、もういちどせつめいします。",
     exampleSrc:"A: Please explain more precisely.\nB: Sorry, I will explain again.",
     funFact:"てきかく (的確) is valued highly in Japanese communication, especially in business. てきかくなしじ (precise instructions) prevent misunderstandings. The emphasis on てきかく reflects a culture where ambiguity in instructions can cause serious problems in manufacturing and service delivery."},

    {type:"teach", trg:"あいまい", src:"ambiguous / vague", pos:"adj", gender:null,
     note:"あいまいなへんじ = vague reply.\nにほんじんはあいまいなひょうげんがおおい.",
     example:"A: はっきりこたえてください。あいまいなへんじはこまります。\nB: すみません、はっきりいいます。",
     exampleSrc:"A: Please answer clearly. Vague answers are troublesome.\nB: Sorry, I will speak clearly.",
     funFact:"あいまい (曖昧) is famously central to Japanese communication. Japanese culture values あいまいさ (ambiguity) as social lubrication: leaving room for interpretation avoids direct confrontation. けんきゅうしゃ are divided on whether Japanese あいまい is a virtue (harmony-preserving) or a problem (miscommunication-causing)."},

    {type:"teach", trg:"わかりやすい", src:"easy to understand / clear", pos:"adj", gender:null,
     note:"Compound: わかる + やすい.\nわかりやすくせつめいする = explain in an easy-to-understand way.",
     example:"A: このせつめいはとてもわかりやすいです。\nB: ありがとうございます。かんたんなことばでかきました。",
     exampleSrc:"A: This explanation is very easy to understand.\nB: Thank you. I wrote it in simple words.",
     funFact:"The やすい suffix (easy to do) is incredibly productive: よみやすい (easy to read), つかいやすい (easy to use), すみやすい (easy to live in). Japanese UX design highly values わかりやすさ (understandability). Signs, instructions, and public announcements prioritize わかりやすい communication over sophisticated language."},

    // Quiz steps
    {type:"mc", q:"「である」はいつつかいますか？",
     opts:["In essays and academic writing","In casual conversation","In text messages","In children's books"],
     ans:"In essays and academic writing",
     hint:"This sentence-ending style replaces です with a more authoritative, impersonal tone appropriate for formal w...."},

    {type:"fb", s:"にほんごの{1}はとてもゆたかです。",
     a:["ひょうげん"],
     opts:["ひょうげん","ぶんまつ","けいしき","ニュアンス"],
     hint:"The speaker is commenting on how rich and varied Japanese words and phrases are. This means 'expressions.'",
     sSrc:"Japanese expressions are very rich."},

    {type:"match", pairs:[
      {trg:"かきことば", src:"written language"},
      {trg:"はなしことば", src:"spoken language"},
      {trg:"てきかく", src:"accurate / precise"},
      {trg:"あいまい", src:"ambiguous / vague"}
    ]},

    {type:"mc", q:"にほんごの「あいまいさ」はどうとらえられていますか？",
     opts:["Both as harmony-preserving virtue and miscommunication risk","Only negative","Only positive","Not discussed at all"],
     ans:"Both as harmony-preserving virtue and miscommunication risk",
     hint:"Researchers debate whether Japanese ambiguity is good (avoiding confrontation) or bad (causing misunderstandings)."},

    {type:"fb", s:"「すき」と「あいしてる」は{1}がちがいます。",
     a:["ニュアンス"],
     opts:["ニュアンス","けいしき","ぶんまつ","ひょうげん"],
     hint:"These two love expressions differ in subtle emotional intensity. This loanword describes such subtle differences in meaning.",
     sSrc:"'Suki' and 'Aishiteru' have different nuances."},

    {type:"mc", q:"「やすい」のせつびじはどんないみですか？",
     opts:["Easy to do","Cheap","Fast","Important"],
     ans:"Easy to do",
     hint:"When attached to verb stems, this suffix creates adjectives meaning the action is easy to perform."}
  ]
};
export default BATCH11_L1;
