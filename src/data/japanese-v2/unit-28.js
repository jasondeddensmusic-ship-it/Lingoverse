// Japanese V2 Unit 28. 文体(ぶんたい) (Written vs Spoken)
import BATCH11_L1 from './_batch11_u28_L01.js';
import BATCH10_L1 from './_batch10_u28_L01.js';
import BATCH9_L1 from './_batch9_u28_L01.js';
import BATCH7_L1 from './_batch7_u28_L01.js';
import BATCH8_L1 from './_batch8_u28_L01.js';
import BATCH6_L1 from './_batch6_u28_L01.js';
import BATCH5_L02 from './_batch5_u28_L02.js';
import BATCH5_L01 from './_batch5_u28_L01.js';
import BATCH2_L04 from './_batch2_u28_L04.js';
import BATCH2_L03 from './_batch2_u28_L03.js';
import EXP_L3 from './_temp_u28_expand_L01.js';import EXP_L4 from './_temp_u28_expand_L02.js';import EXP_L5 from './_temp_u28_expand_L03.js';
// Level: B2.2. JLPT N2 aligned.
// である, において, 及び, 述べる, 論じる, sentence-final particles.

const UNIT_28 = {
  n:28, lang:"ja", srcLang:"en", track:"v2",
  title:"文体(ぶんたい)", sub:"Written vs Spoken",
  icon:"✍️", level:"B2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: Written Style (書き言葉) ═══
{id:"jav2_u28l1", title:"Written Style", icon:"📖", xp:15, board:true, steps:[
  {type:"intro", title:"Written Style (書(か)き言葉(ことば))",
   desc:"Japanese has a sharp divide between written and spoken language. Academic papers, news articles, and official documents use patterns rarely heard in conversation. Master である (the written copula), において (in/at, formal), and 及(およ)び (and, formal) to read and write at the B2 level.",
   goals:["Use である as the written copula","Use において for formal location/context","Use 及(およ)び for formal listing"]},

  {type:"teach", trg:"である", src:"to be (written/formal copula)", pos:"aux", gender:null,
   note:"Replaces です/だ in academic and formal writing.\n日本(にほん)は島国(しまぐに)である = Japan is an island nation.",
   example:"A: 健康(けんこう)は最(もっと)も大切(たいせつ)な資産(しさん)である。\nB: 確(たし)かに、お金(かね)よりも健康(けんこう)ですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
   exampleSrc:"A: Health is the most important asset.\nB: Indeed, health matters more than money.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
   funFact:"である is the original copula of Japanese. だ evolved as a casual contraction (で + ある → だ), and です was added later as a polite form. So である is actually the oldest form. Academic Japanese still prefers it because it sounds objective and authoritative. Mixing です and である in the same text is considered poor style."},

  {type:"teach", trg:"において", src:"in / at (formal location/context)", pos:"part", gender:null,
   note:"Formal equivalent of で (location/context). Used in writing and speeches.\n日本(にほん)において = in Japan (formal).",
   example:"A: この研究(けんきゅう)は東京大学(とうきょうだいがく)において行(おこな)われた。\nB: どんな結果(けっか)が出(で)ましたか？\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
   exampleSrc:"A: This research was conducted at Tokyo University.\nB: What results came out?\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
   funFact:"において breaks into に (at) + おいて (placing). It formalizes any locational or contextual で. 現代社会(げんだいしゃかい)において (in modern society), この分野(ぶんや)において (in this field). The related form における is the attributive: 日本(にほん)における研究(けんきゅう) (research in Japan). You will rarely hear these in conversation."},

  {type:"teach", trg:"及(およ)び", src:"and / as well as (formal)", pos:"conj", gender:null,
   note:"Kanji: 及び. Formal equivalent of と or そして.\nUsed to connect nouns or clauses in documents.",
   example:"A: 出席者(しゅっせきしゃ)の名前(なまえ)及(およ)び住所(じゅうしょ)を記入(きにゅう)してください。\nB: 分(わ)かりました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
   exampleSrc:"A: Please fill in the attendees' names and addresses.\nB: Understood.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
   funFact:"及び comes from the verb 及ぶ (to reach/extend to). In legal and official documents, 及(およ)び is the standard 'and.' Contracts, regulations, and government forms use it exclusively. In everyday speech, using 及(およ)び would sound comically formal, like saying 'henceforth' in casual English."},

  {type:"mc", q:"である is the formal/written equivalent of:", opts:["です/だ","ている","ではない","でした"], ans:"です/だ",
   hint:"This copula replaces the everyday forms of 'to be' in academic and official writing."},

  {type:"teach", trg:"述(の)べる", src:"to state / to describe", pos:"verb", gender:null,
   note:"Kanji: 述べる. Group 2 verb. Formal word for expressing opinions or facts.\n意見(いけん)を述(の)べる = to state an opinion.",
   example:"A: 論文(ろんぶん)の中(なか)で著者(ちょしゃ)は次(つぎ)のように述(の)べている。\nB: どんな主張(しゅちょう)ですか？\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
   exampleSrc:"A: In the paper, the author states as follows.\nB: What kind of argument is it?\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
   funFact:"述べる is the go-to verb for 'state' in academic writing. It is more formal than いう (say) and more neutral than 主張(しゅちょう)する (assert/claim). The kanji 述 combines the movement radical (辶) with 术 (art/skill), suggesting the skill of putting thoughts into words."},

  {type:"teach", trg:"論(ろん)じる", src:"to discuss / to argue (academic)", pos:"verb", gender:null,
   note:"Kanji: 論じる. Group 2 verb. Used for academic discussion and debate.\n問題(もんだい)を論(ろん)じる = to discuss a problem.",
   example:"A: この本(ほん)では経済格差(けいざいかくさ)について論(ろん)じている。\nB: 読(よ)んでみたいですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: This book discusses economic inequality.\nB: I would like to read it.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"論じる uses 論 (argument/theory), the same kanji in 論文 (ronbun, academic paper), 議論 (giron, debate), and 理論 (riron, theory). Japanese academic culture values structured argument: thesis, evidence, conclusion. 論(ろん)じる implies rigorous, evidence-based discussion, not casual chat."},

  {type:"fb", s:"この研究(けんきゅう)は東京大学(とうきょうだいがく){1}行(おこな)われた。\n(This research was conducted at Tokyo University.)", a:"において", opts:["において","では","の中(なか)で","にとって"], sSrc:"This research was conducted at Tokyo University.",
   hint:"The formal particle replacing で for location, used in academic and official contexts."},

  {type:"teach", trg:"論文(ろんぶん)", src:"academic paper / thesis", pos:"noun", gender:null,
   note:"Kanji: 論文. 論 (argument) + 文 (writing).\n論文(ろんぶん)を書(か)く = to write a paper. 卒業論文(そつぎょうろんぶん) = graduation thesis.",
   example:"A: 卒業論文(そつぎょうろんぶん)のテーマは決(き)まりましたか？\nB: 環境問題(かんきょうもんだい)について書(か)くつもりです。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: Have you decided on your graduation thesis topic?\nB: I plan to write about environmental issues.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"論文 culture is intense in Japanese universities. The 卒論(そつろん) (abbreviation of 卒業論文) is a rite of passage for graduating students. Some companies still ask job applicants about their 卒論(そつろん) topic in interviews, even decades after graduation. The kanji 文 appears in 文化 (culture), 文学 (literature), and 文明 (civilization)."},

  {type:"mc", q:"及(およ)び is the formal equivalent of:", opts:["しかし","と (and)","または","でも"], ans:"と (and)",
   hint:"This connector joins items or clauses in official documents, replacing the everyday conjunction."},

  {type:"match", pairs:[{trg:"である",src:"to be (written)"},{trg:"において",src:"in/at (formal)"},{trg:"及(およ)び",src:"and (formal)"},{trg:"述(の)べる",src:"to state"}]},

  {type:"fb", s:"意見(いけん)を{1}ている。\n(The author states an opinion.)", a:"述(の)べ", opts:["述(の)べ","論(ろん)じ","書(か)き","話(はな)し"], sSrc:"The author states an opinion.",
   hint:"The formal verb meaning to express or state views, common in academic writing."},

  {type:"match", pairs:[{trg:"論(ろん)じる",src:"to discuss (academic)"},{trg:"論文(ろんぶん)",src:"academic paper"},{trg:"において",src:"in/at (formal)"},{trg:"及(およ)び",src:"and (formal)"}]},
]},

// ═══ L2: Spoken Style (話し言葉) ═══
{id:"jav2_u28l2", title:"Spoken Style", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"Spoken Style (話(はな)し言葉(ことば))",
   desc:"While written Japanese is formal and structured, spoken Japanese uses sentence-final particles, contractions, and casual patterns that never appear in writing. Understanding these spoken markers is essential for natural conversation and listening comprehension at B2.",
   goals:["Recognize sentence-final particles (よね, さ, ぞ)","Understand casual contractions","Distinguish written and spoken register"]},

  {type:"teach", trg:"よね", src:"(particle) right? / isn't it?", pos:"part", gender:null,
   note:"Combines よ (assertion) + ね (seeking agreement).\nConfirms shared knowledge while gently asserting.",
   example:"A: 明日(あした)は休(やす)みだよね？\nB: うん、そうだよ。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: Tomorrow is a day off, right?\nB: Yeah, that's right.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"よね is a uniquely Japanese fusion particle. よ says 'I'm telling you,' ね says 'don't you agree?' Together they create 'I'm telling you something I think you already know, but let me confirm.' This subtle blend has no exact English equivalent. It softens statements and builds social harmony."},

  {type:"teach", trg:"さ", src:"(particle) you know / (casual filler)", pos:"part", gender:null,
   note:"Casual sentence-final or mid-sentence particle.\nAdds a light, conversational tone. Mainly male speech.",
   example:"A: 昨日(きのう)さ、面白(おもしろ)い映画(えいが)を見(み)たんだ。\nB: へえ、何(なん)ていう映画(えいが)？\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: Yesterday, you know, I watched an interesting movie.\nB: Oh, what movie?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"さ is a casual filler particle that creates a relaxed, storytelling tone. Historically associated with male speech, it is increasingly used by women in casual settings. It often appears mid-sentence to pause and draw the listener in. Overusing さ sounds lazy, but the right amount sounds natural and friendly."},

  {type:"teach", trg:"ぞ", src:"(particle) I tell you! (strong assertion)", pos:"part", gender:null,
   note:"Strong, masculine assertion particle. More forceful than よ.\n行(い)くぞ！ = Let's go! / Here I go!",
   example:"A: よし、頑張(がんば)るぞ！\nB: 応援(おうえん)してるよ！\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: Right, I'm going to do my best!\nB: I'm cheering for you!\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"ぞ is one of the most masculine-coded particles in Japanese. Anime heroes use it constantly: 行(い)くぞ！(let's go!), やるぞ！(I'll do it!). In real life, it appears in self-motivation and casual male speech. Women rarely use ぞ, and doing so in formal settings would be very jarring."},

  {type:"mc", q:"よね combines which two functions?", opts:["Assertion and seeking agreement","Question and denial","Surprise and doubt","Command and request"], ans:"Assertion and seeking agreement",
   hint:"This particle merges よ (I'm telling you) with ね (right?/agree?)."},

  {type:"teach", trg:"〜んだ / 〜のだ", src:"(explanatory) it is that ~ / the thing is ~", pos:"part", gender:null,
   note:"Adds explanatory nuance. のだ is formal, んだ is casual.\nどうしたの？ = What happened? (seeking explanation).",
   example:"A: どうして遅(おく)れたの？\nB: 電車(でんしゃ)が止(と)まったんだ。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Why were you late?\nB: The thing is, the train stopped.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"んだ (casual) / のだ (formal) is one of the most important spoken patterns. It wraps a statement in explanation: 'the reason is...' or 'the situation is...' Without it, 行(い)かない (I'm not going) is flat. 行(い)かないんだ (the thing is, I'm not going) invites the listener to understand your reason. Mastering んだ is a major step toward natural Japanese."},

  {type:"teach", trg:"〜っけ", src:"(particle) was it? / remind me", pos:"part", gender:null,
   note:"Casual particle for trying to recall something.\n何(なん)だっけ？ = What was it again?",
   example:"A: あのレストラン、何(なん)ていう名前(なまえ)だっけ？\nB: 確(たし)か「さくら」だったと思(おも)う。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: What was the name of that restaurant again?\nB: I think it was 'Sakura.'\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"っけ is the particle of fuzzy memory. It signals 'I knew this but cannot quite recall.' 何(なん)だっけ (what was it?) is one of the most common casual phrases. It only works in casual speech. The polite equivalent would be a full question: 何(なん)でしたっけ or 何(なん)という名前(なまえ)でしたか."},

  {type:"fb", s:"明日(あした)は休(やす)みだ{1}？\n(Tomorrow is a day off, right?)", a:"よね", opts:["よね","ぞ","さ","っけ"], sSrc:"Tomorrow is a day off, right?",
   hint:"The combined particle that asserts something while seeking the listener's confirmation."},

  {type:"teach", trg:"書(か)き言葉(ことば)", src:"written language", pos:"noun", gender:null,
   note:"Kanji: 書き言葉. 書(か)く (write) + 言葉(ことば) (words/language).\nOpposite: 話(はな)し言葉(ことば) (spoken language).",
   example:"A: 日本語(にほんご)は書(か)き言葉(ことば)と話(はな)し言葉(ことば)がかなり違(ちが)います。\nB: そこが難(むずか)しいですよね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: Written and spoken Japanese are quite different.\nB: That's what makes it difficult, right?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"The gap between 書(か)き言葉(ことば) and 話(はな)し言葉(ことば) is wider in Japanese than in most European languages. Written Japanese uses である, において, 及(およ)び. Spoken Japanese uses だ, で, と. Until the Meiji era, the gap was even wider: written language (文語, bungo) was essentially a different language from speech (口語, kougo)."},

  {type:"mc", q:"っけ is used when:", opts:["Making a strong command","Trying to recall something","Expressing surprise","Writing an academic paper"], ans:"Trying to recall something",
   hint:"This casual particle signals fuzzy memory, as in 'what was it again?'"},

  {type:"match", pairs:[{trg:"よね",src:"right? (confirm)"},{trg:"さ",src:"you know (filler)"},{trg:"ぞ",src:"I tell you! (strong)"},{trg:"っけ",src:"was it? (recall)"}]},

  {type:"fb", s:"電車(でんしゃ)が止(と)まった{1}。\n(The thing is, the train stopped.)", a:"んだ", opts:["んだ","よね","ぞ","さ"], sSrc:"The thing is, the train stopped.",
   hint:"The casual explanatory ending that wraps a statement in 'the reason/situation is...'"},

  {type:"match", pairs:[{trg:"〜んだ / 〜のだ",src:"it is that (explanatory)"},{trg:"〜っけ",src:"was it? (recall)"},{trg:"書(か)き言葉(ことば)",src:"written language"},{trg:"である",src:"to be (written)"}]},
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
export default UNIT_28;
