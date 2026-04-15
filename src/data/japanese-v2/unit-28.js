// Japanese V2 Unit 28. ぶんたい (Written vs Spoken)
import EXP_L3 from './_temp_u28_expand_L01.js';import EXP_L4 from './_temp_u28_expand_L02.js';import EXP_L5 from './_temp_u28_expand_L03.js';
// Level: B2.2. JLPT N2 aligned.
// である, において, および, 述べる, 論じる, sentence-final particles.

const UNIT_28 = {
  n:28, lang:"ja", srcLang:"en", track:"v2",
  title:"ぶんたい", sub:"Written vs Spoken",
  icon:"✍️", level:"B2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: Written Style (書き言葉) ═══
{id:"jav2_u28l1", title:"Written Style", icon:"📖", xp:15, board:true, steps:[
  {type:"intro", title:"Written Style (かきことば)",
   desc:"Japanese has a sharp divide between written and spoken language. Academic papers, news articles, and official documents use patterns rarely heard in conversation. Master である (the written copula), において (in/at, formal), and および (and, formal) to read and write at the B2 level.",
   goals:["Use である as the written copula","Use において for formal location/context","Use および for formal listing"]},

  {type:"teach", trg:"である", src:"to be (written/formal copula)", pos:"aux", gender:null,
   note:"Replaces です/だ in academic and formal writing.\nにほんはしまぐにである = Japan is an island nation.",
   example:"A: けんこうはもっともたいせつなしさんである。\nB: たしかに、おかねよりもけんこうですね。",
   exampleSrc:"A: Health is the most important asset.\nB: Indeed, health matters more than money.",
   funFact:"である is the original copula of Japanese. だ evolved as a casual contraction (で + ある → だ), and です was added later as a polite form. So である is actually the oldest form. Academic Japanese still prefers it because it sounds objective and authoritative. Mixing です and である in the same text is considered poor style."},

  {type:"teach", trg:"において", src:"in / at (formal location/context)", pos:"part", gender:null,
   note:"Formal equivalent of で (location/context). Used in writing and speeches.\nにほんにおいて = in Japan (formal).",
   example:"A: このけんきゅうはとうきょうだいがくにおいておこなわれた。\nB: どんなけっかがでましたか？",
   exampleSrc:"A: This research was conducted at Tokyo University.\nB: What results came out?",
   funFact:"において breaks into に (at) + おいて (placing). It formalizes any locational or contextual で. げんだいしゃかいにおいて (in modern society), このぶんやにおいて (in this field). The related form における is the attributive: にほんにおけるけんきゅう (research in Japan). You will rarely hear these in conversation."},

  {type:"teach", trg:"および", src:"and / as well as (formal)", pos:"conj", gender:null,
   note:"Kanji: 及び. Formal equivalent of と or そして.\nUsed to connect nouns or clauses in documents.",
   example:"A: しゅっせきしゃのなまえおよびじゅうしょをきにゅうしてください。\nB: わかりました。",
   exampleSrc:"A: Please fill in the attendees' names and addresses.\nB: Understood.",
   funFact:"及び comes from the verb 及ぶ (to reach/extend to). In legal and official documents, および is the standard 'and.' Contracts, regulations, and government forms use it exclusively. In everyday speech, using および would sound comically formal, like saying 'henceforth' in casual English."},

  {type:"mc", q:"である is the formal/written equivalent of:", opts:["です/だ","ている","ではない","でした"], ans:"です/だ",
   hint:"This copula replaces the everyday forms of 'to be' in academic and official writing."},

  {type:"teach", trg:"のべる", src:"to state / to describe", pos:"verb", gender:null,
   note:"Kanji: 述べる. Group 2 verb. Formal word for expressing opinions or facts.\nいけんをのべる = to state an opinion.",
   example:"A: ろんぶんのなかでちょしゃはつぎのようにのべている。\nB: どんなしゅちょうですか？",
   exampleSrc:"A: In the paper, the author states as follows.\nB: What kind of argument is it?",
   funFact:"述べる is the go-to verb for 'state' in academic writing. It is more formal than いう (say) and more neutral than しゅちょうする (assert/claim). The kanji 述 combines the movement radical (辶) with 术 (art/skill), suggesting the skill of putting thoughts into words."},

  {type:"teach", trg:"ろんじる", src:"to discuss / to argue (academic)", pos:"verb", gender:null,
   note:"Kanji: 論じる. Group 2 verb. Used for academic discussion and debate.\nもんだいをろんじる = to discuss a problem.",
   example:"A: このほんではけいざいかくさについてろんじている。\nB: よんでみたいですね。",
   exampleSrc:"A: This book discusses economic inequality.\nB: I would like to read it.",
   funFact:"論じる uses 論 (argument/theory), the same kanji in 論文 (ronbun, academic paper), 議論 (giron, debate), and 理論 (riron, theory). Japanese academic culture values structured argument: thesis, evidence, conclusion. ろんじる implies rigorous, evidence-based discussion, not casual chat."},

  {type:"fb", s:"このけんきゅうはとうきょうだいがく{1}おこなわれた。\n(This research was conducted at Tokyo University.)", a:"において", opts:["において","では","のなかで","にとって"], sSrc:"This research was conducted at Tokyo University.",
   hint:"The formal particle replacing で for location, used in academic and official contexts."},

  {type:"teach", trg:"ろんぶん", src:"academic paper / thesis", pos:"noun", gender:null,
   note:"Kanji: 論文. 論 (argument) + 文 (writing).\nろんぶんをかく = to write a paper. そつぎょうろんぶん = graduation thesis.",
   example:"A: そつぎょうろんぶんのテーマはきまりましたか？\nB: かんきょうもんだいについてかくつもりです。",
   exampleSrc:"A: Have you decided on your graduation thesis topic?\nB: I plan to write about environmental issues.",
   funFact:"論文 culture is intense in Japanese universities. The そつろん (abbreviation of 卒業論文) is a rite of passage for graduating students. Some companies still ask job applicants about their そつろん topic in interviews, even decades after graduation. The kanji 文 appears in 文化 (culture), 文学 (literature), and 文明 (civilization)."},

  {type:"mc", q:"および is the formal equivalent of:", opts:["しかし","と (and)","または","でも"], ans:"と (and)",
   hint:"This connector joins items or clauses in official documents, replacing the everyday conjunction."},

  {type:"match", pairs:[{trg:"である",src:"to be (written)"},{trg:"において",src:"in/at (formal)"},{trg:"および",src:"and (formal)"},{trg:"のべる",src:"to state"}]},

  {type:"fb", s:"いけんを{1}ている。\n(The author states an opinion.)", a:"のべ", opts:["のべ","ろんじ","かき","はなし"], sSrc:"The author states an opinion.",
   hint:"The formal verb meaning to express or state views, common in academic writing."},

  {type:"match", pairs:[{trg:"ろんじる",src:"to discuss (academic)"},{trg:"ろんぶん",src:"academic paper"},{trg:"において",src:"in/at (formal)"},{trg:"および",src:"and (formal)"}]},
]},

// ═══ L2: Spoken Style (話し言葉) ═══
{id:"jav2_u28l2", title:"Spoken Style", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"Spoken Style (はなしことば)",
   desc:"While written Japanese is formal and structured, spoken Japanese uses sentence-final particles, contractions, and casual patterns that never appear in writing. Understanding these spoken markers is essential for natural conversation and listening comprehension at B2.",
   goals:["Recognize sentence-final particles (よね, さ, ぞ)","Understand casual contractions","Distinguish written and spoken register"]},

  {type:"teach", trg:"よね", src:"(particle) right? / isn't it?", pos:"part", gender:null,
   note:"Combines よ (assertion) + ね (seeking agreement).\nConfirms shared knowledge while gently asserting.",
   example:"A: あしたはやすみだよね？\nB: うん、そうだよ。",
   exampleSrc:"A: Tomorrow is a day off, right?\nB: Yeah, that's right.",
   funFact:"よね is a uniquely Japanese fusion particle. よ says 'I'm telling you,' ね says 'don't you agree?' Together they create 'I'm telling you something I think you already know, but let me confirm.' This subtle blend has no exact English equivalent. It softens statements and builds social harmony."},

  {type:"teach", trg:"さ", src:"(particle) you know / (casual filler)", pos:"part", gender:null,
   note:"Casual sentence-final or mid-sentence particle.\nAdds a light, conversational tone. Mainly male speech.",
   example:"A: きのうさ、おもしろいえいがをみたんだ。\nB: へえ、なんていうえいが？",
   exampleSrc:"A: Yesterday, you know, I watched an interesting movie.\nB: Oh, what movie?",
   funFact:"さ is a casual filler particle that creates a relaxed, storytelling tone. Historically associated with male speech, it is increasingly used by women in casual settings. It often appears mid-sentence to pause and draw the listener in. Overusing さ sounds lazy, but the right amount sounds natural and friendly."},

  {type:"teach", trg:"ぞ", src:"(particle) I tell you! (strong assertion)", pos:"part", gender:null,
   note:"Strong, masculine assertion particle. More forceful than よ.\nいくぞ！ = Let's go! / Here I go!",
   example:"A: よし、がんばるぞ！\nB: おうえんしてるよ！",
   exampleSrc:"A: Right, I'm going to do my best!\nB: I'm cheering for you!",
   funFact:"ぞ is one of the most masculine-coded particles in Japanese. Anime heroes use it constantly: いくぞ！(let's go!), やるぞ！(I'll do it!). In real life, it appears in self-motivation and casual male speech. Women rarely use ぞ, and doing so in formal settings would be very jarring."},

  {type:"mc", q:"よね combines which two functions?", opts:["Assertion and seeking agreement","Question and denial","Surprise and doubt","Command and request"], ans:"Assertion and seeking agreement",
   hint:"This particle merges よ (I'm telling you) with ね (right?/agree?)."},

  {type:"teach", trg:"〜んだ / 〜のだ", src:"(explanatory) it is that ~ / the thing is ~", pos:"part", gender:null,
   note:"Adds explanatory nuance. のだ is formal, んだ is casual.\nどうしたの？ = What happened? (seeking explanation).",
   example:"A: どうしておくれたの？\nB: でんしゃがとまったんだ。",
   exampleSrc:"A: Why were you late?\nB: The thing is, the train stopped.",
   funFact:"んだ (casual) / のだ (formal) is one of the most important spoken patterns. It wraps a statement in explanation: 'the reason is...' or 'the situation is...' Without it, いかない (I'm not going) is flat. いかないんだ (the thing is, I'm not going) invites the listener to understand your reason. Mastering んだ is a major step toward natural Japanese."},

  {type:"teach", trg:"〜っけ", src:"(particle) was it? / remind me", pos:"part", gender:null,
   note:"Casual particle for trying to recall something.\nなんだっけ？ = What was it again?",
   example:"A: あのレストラン、なんていうなまえだっけ？\nB: たしか「さくら」だったとおもう。",
   exampleSrc:"A: What was the name of that restaurant again?\nB: I think it was 'Sakura.'",
   funFact:"っけ is the particle of fuzzy memory. It signals 'I knew this but cannot quite recall.' なんだっけ (what was it?) is one of the most common casual phrases. It only works in casual speech. The polite equivalent would be a full question: なんでしたっけ or なんというなまえでしたか."},

  {type:"fb", s:"あしたはやすみだ{1}？\n(Tomorrow is a day off, right?)", a:"よね", opts:["よね","ぞ","さ","っけ"], sSrc:"Tomorrow is a day off, right?",
   hint:"The combined particle that asserts something while seeking the listener's confirmation."},

  {type:"teach", trg:"かきことば", src:"written language", pos:"noun", gender:null,
   note:"Kanji: 書き言葉. 書く (write) + 言葉 (words/language).\nOpposite: はなしことば (spoken language).",
   example:"A: にほんごはかきことばとはなしことばがかなりちがいます。\nB: そこがむずかしいですよね。",
   exampleSrc:"A: Written and spoken Japanese are quite different.\nB: That's what makes it difficult, right?",
   funFact:"The gap between かきことば and はなしことば is wider in Japanese than in most European languages. Written Japanese uses である, において, および. Spoken Japanese uses だ, で, と. Until the Meiji era, the gap was even wider: written language (文語, bungo) was essentially a different language from speech (口語, kougo)."},

  {type:"mc", q:"っけ is used when:", opts:["Making a strong command","Trying to recall something","Expressing surprise","Writing an academic paper"], ans:"Trying to recall something",
   hint:"This casual particle signals fuzzy memory, as in 'what was it again?'"},

  {type:"match", pairs:[{trg:"よね",src:"right? (confirm)"},{trg:"さ",src:"you know (filler)"},{trg:"ぞ",src:"I tell you! (strong)"},{trg:"っけ",src:"was it? (recall)"}]},

  {type:"fb", s:"でんしゃがとまった{1}。\n(The thing is, the train stopped.)", a:"んだ", opts:["んだ","よね","ぞ","さ"], sSrc:"The thing is, the train stopped.",
   hint:"The casual explanatory ending that wraps a statement in 'the reason/situation is...'"},

  {type:"match", pairs:[{trg:"〜んだ / 〜のだ",src:"it is that (explanatory)"},{trg:"〜っけ",src:"was it? (recall)"},{trg:"かきことば",src:"written language"},{trg:"である",src:"to be (written)"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
]};
export default UNIT_28;
