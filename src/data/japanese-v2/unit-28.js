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
import COVERAGE_U28 from './_coverage_u28.js';
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

// ═══ L3: Business & Society Concepts ═══
{id:"jav2_u28l3", title:"Business & Society Concepts", icon:"🏢", xp:15, board:true, steps:[
  {type:"intro", title:"Business and Society Concepts",
   desc:"Seven high-frequency nouns and adjectives from JLPT N2. These words appear constantly in Japanese newspapers, business meetings, and academic writing. Mastering them unlocks a large vocabulary cluster around work, society, and abstract reasoning.",
   goals:["Use 経営, 教育, 管理 in business contexts","Apply 過去, 印象 to descriptions and narratives","Use 具体的 and 一般 to structure arguments"]},

  {type:"teach", trg:"経営(けいえい)", src:"management / business operation", pos:"noun", gender:null,
   note:"Kanji: 経営. Often paired with する: 経営(けいえい)する = to manage (a business).\n経営者(けいえいしゃ) = business owner/manager.",
   example:"A: 会社(かいしゃ)の経営(けいえい)はうまくいっていますか？\nB: はい、先月(せんげつ)から黒字(くろじ)になりました。\nA: それはおめでとうございます。\nB: ありがとうございます。まだ安心(あんしん)はできませんが。",
   exampleSrc:"A: Is the management of the company going well?\nB: Yes, it has been profitable since last month.\nA: Congratulations on that.\nB: Thank you. I cannot relax just yet though.",
   funFact:"経営 splits into 経 (to pass through / manage) and 営 (to operate). The same 経 appears in 経験(けいけん) (experience) and 経済(けいざい) (economy). Large Japanese companies often have a 経営会議(けいえいかいぎ) (management meeting) at the board level, distinct from regular 会議(かいぎ) held by staff."},

  {type:"teach", trg:"教育(きょういく)", src:"education", pos:"noun", gender:null,
   note:"Kanji: 教育. 教(きょう) (teach) + 育(いく) (raise/nurture).\n教育(きょういく)する = to educate. 教育制度(きょういくせいど) = education system.",
   example:"A: 日本(にほん)の教育(きょういく)についてどう思(おも)いますか？\nB: 基礎的(きそてき)な学力(がくりょく)は高(たか)いと思(おも)います。\nA: 海外(かいがい)と比(くら)べるとどうでしょうか？\nB: 創造性(そうぞうせい)の面(めん)では改善(かいぜん)の余地(よち)があると言(い)われています。",
   exampleSrc:"A: What do you think about education in Japan?\nB: I think the foundational academic ability is high.\nA: How does it compare to overseas?\nB: It is said there is room for improvement in terms of creativity.",
   funFact:"教育 is one of the most discussed topics in Japanese society. Japan's 教育ママ (education mom) culture, 受験戦争(じゅけんせんそう) (examination war), and 塾(じゅく) (cram school) industry all revolve around this word. The government 文部科学省(もんぶかがくしょう) (Ministry of Education) sets the national curriculum, which is known for rigor."},

  {type:"mc", q:"経営(けいえい)する means:", opts:["to manage a business","to administer a law","to study abroad","to educate"], ans:"to manage a business",
   hint:"This word combines kanji for 'to pass through' and 'to operate', referring to running an organization."},

  {type:"teach", trg:"管理(かんり)", src:"management / administration / control", pos:"noun", gender:null,
   note:"Kanji: 管理. 管(かん) (pipe/control) + 理(り) (reason/order).\n管理(かんり)する = to manage, to administer. 管理者(かんりしゃ) = administrator.",
   example:"A: このプロジェクトの管理(かんり)は誰(だれ)が担当(たんとう)していますか？\nB: 田中(たなか)さんが責任者(せきにんしゃ)です。\nA: 進(すす)み具合(ぐあい)はどうですか？\nB: 予定(よてい)より少(すこ)し遅(おく)れていますが、来週中(らいしゅうちゅう)には追(お)いつけます。",
   exampleSrc:"A: Who is in charge of managing this project?\nB: Mr. Tanaka is the person responsible.\nA: How is the progress?\nB: It is a little behind schedule, but we can catch up by next week.",
   funFact:"管理 and 経営 are often confused. 経営 is about running and growing a business at a strategic level, while 管理 is about controlling and overseeing systems, people, or processes at an operational level. A company president does 経営; a section chief does 管理. The IT term for system administrator is システム管理者(かんりしゃ)."},

  {type:"teach", trg:"過去(かこ)", src:"the past", pos:"noun", gender:null,
   note:"Kanji: 過去. 過(か) (to pass/exceed) + 去(こ) (to leave/go away).\n過去(かこ)の = past (adjective). Opposite: 未来(みらい) (future).",
   example:"A: 過去(かこ)の経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 失敗(しっぱい)を恐(おそ)れずに挑戦(ちょうせん)することが大切(たいせつ)だと学(まな)びました。\nA: 今(いま)の仕事(しごと)にも生(い)かせていますか？\nB: はい、毎日(まいにち)意識(いしき)しています。",
   exampleSrc:"A: What have you learned from past experience?\nB: I learned that it is important to take on challenges without fearing failure.\nA: Are you applying it to your current work as well?\nB: Yes, I am conscious of it every day.",
   funFact:"過去 is also a Buddhist term for one of the three times: 過去(かこ) (past), 現在(げんざい) (present), and 未来(みらい) (future). This triple concept pervades Japanese philosophy and literature. The kanji 過 also appears in 過(す)ぎる (to pass, to go too far) and 過失(かしつ) (mistake/negligence)."},

  {type:"mc", q:"管理(かんり) is best described as:", opts:["Strategic business growth","Operational control and administration","Educational curriculum","Past events and history"], ans:"Operational control and administration",
   hint:"This word is about overseeing systems and processes at a hands-on level, not top-level strategy."},

  {type:"teach", trg:"印象(いんしょう)", src:"impression", pos:"noun", gender:null,
   note:"Kanji: 印象. 印 (seal/stamp) + 象 (image/phenomenon).\n第一印象(だいいちいんしょう) = first impression. 印象的(いんしょうてき) = impressive.",
   example:"A: あの先生(せんせい)の授業(じゅぎょう)はどんな印象(いんしょう)でしたか？\nB: とても熱心(ねっしん)で分(わ)かりやすかったです。\nA: 学生(がくせい)たちの反応(はんのう)はどうでしたか？\nB: 皆(みな)、積極的(せっきょくてき)に参加(さんか)していました。",
   exampleSrc:"A: What impression did you get from that teacher's class?\nB: It was very enthusiastic and easy to understand.\nA: How did the students react?\nB: Everyone was participating actively.",
   funFact:"印象 literally means 'stamp image', the mark something leaves in your mind, like a seal pressed into wax. 第一印象(だいいちいんしょう) (first impression) is a major concern in Japanese job-hunting culture. Companies teach 就活生(しゅうかつせい) (job-hunting students) how to walk, bow, and speak precisely to control their 第一印象."},

  {type:"fb", s:"彼女(かのじょ)の第一{1}はとても良(よ)かった。\n(Her first impression was very good.)", a:"印象(いんしょう)", opts:["印象(いんしょう)","管理(かんり)","経営(けいえい)","過去(かこ)"], sSrc:"Her first impression was very good.",
   hint:"The noun meaning the mark or image something leaves in someone's mind."},

  {type:"teach", trg:"具体的(ぐたいてき)", src:"concrete / specific", pos:"adj", gender:null,
   note:"Kanji: 具体的. Na-adjective. 具体的(ぐたいてき)に = specifically / concretely.\n具体的(ぐたいてき)な例(れい) = a concrete example.",
   example:"A: もっと具体的(ぐたいてき)に説明(せつめい)していただけますか？\nB: もちろんです。例(たと)えば、先週(せんしゅう)の会議(かいぎ)の場合(ばあい)…\nA: なるほど、よく分(わ)かりました。\nB: 具体的(ぐたいてき)な例(れい)があると理解(りかい)しやすいですよね。",
   exampleSrc:"A: Could you explain more specifically?\nB: Of course. For example, in the case of last week's meeting...\nA: I see, I understood well.\nB: It is easier to understand when there is a concrete example, right?",
   funFact:"具体的 is indispensable in Japanese business and academic contexts. Its opposite is 抽象的(ちゅうしょうてき) (abstract). Japanese presentations often follow the pattern: general statement, then 具体的(ぐたいてき)には... (specifically...) to give examples. This mirrors the top-down rhetorical structure valued in Japanese communication."},

  {type:"teach", trg:"一般(いっぱん)", src:"general / common / ordinary", pos:"noun", gender:null,
   note:"Kanji: 一般. Also used as a prefix or na-adjective: 一般的(いっぱんてき) = generally / typically.\n一般人(いっぱんじん) = ordinary person.",
   example:"A: この規則(きそく)は一般(いっぱん)の人(ひと)にも適用(てきよう)されますか？\nB: はい、特別(とくべつ)な場合(ばあい)を除(のぞ)いて一般(いっぱん)に適用(てきよう)されます。\nA: 例外(れいがい)はどのような場合(ばあい)ですか？\nB: 医療(いりょう)や教育(きょういく)の分野(ぶんや)では別(べつ)のルールが適用(てきよう)されます。",
   exampleSrc:"A: Does this rule apply to ordinary people as well?\nB: Yes, it generally applies, except in special cases.\nA: What kinds of cases are exceptions?\nB: Separate rules apply in fields such as medicine and education.",
   funFact:"一般 comes from 一 (one) + 般 (carry around/rotate), suggesting something that goes around broadly to everyone. In Japanese bureaucracy, 一般公開(いっぱんこうかい) means 'open to the public.' 一般的(いっぱんてき)に言(い)えば (generally speaking) is a standard academic phrase that signals you are about to make a broad claim before giving details."},

  {type:"fb", s:"{1}な例(れい)を挙(あ)げてください。\n(Please give a concrete example.)", a:"具体的(ぐたいてき)", opts:["具体的(ぐたいてき)","一般(いっぱん)","過去(かこ)","印象的(いんしょうてき)"], sSrc:"Please give a concrete example.",
   hint:"The na-adjective meaning specific or concrete, the opposite of abstract."},

  {type:"mc", q:"一般(いっぱん)的(てき)に言(い)えば means:", opts:["In the past","Specifically speaking","Generally speaking","Concretely speaking"], ans:"Generally speaking",
   hint:"This phrase introduces a broad claim. 一般 relates to what is common or broadly applicable."},

  {type:"match", pairs:[{trg:"経営(けいえい)",src:"business management"},{trg:"教育(きょういく)",src:"education"},{trg:"管理(かんり)",src:"administration"},{trg:"過去(かこ)",src:"the past"}]},

  {type:"match", pairs:[{trg:"印象(いんしょう)",src:"impression"},{trg:"具体的(ぐたいてき)",src:"concrete / specific"},{trg:"一般(いっぱん)",src:"general / ordinary"},{trg:"教育(きょういく)",src:"education"}]},

  {type:"fb", s:"会社(かいしゃ)の{1}をしているのは誰(だれ)ですか？\n(Who is managing the company?)", a:"経営(けいえい)", opts:["経営(けいえい)","印象(いんしょう)","教育(きょういく)","過去(かこ)"], sSrc:"Who is managing the company?",
   hint:"The noun for running and operating a business at the strategic level."},
]},

// ═══ L4: N2 Formal Vocabulary. Time, Society, and Action ═══
{id:"jav2_u28l_n2_formal", title:"N2 Formal Vocabulary", icon:"🗂️", xp:20, board:true, steps:[
  {type:"intro", title:"N2 Formal Vocabulary: Time, Society, and Action",
   desc:"Eight high-frequency N2 words spanning time reference, social context, and formal verbs. These appear in JLPT N2 reading passages, newspaper articles, and business correspondence. Mastering them unlocks a large cluster of written and spoken formal register.",
   goals:["Use 以前, 以後, 以外 as formal time and scope markers","Apply 社会的 and 現代 to describe society","Use 安定する, 応じる, and 引き受ける in formal contexts"]},

  {type:"teach", trg:"以前(いぜん)", src:"before / previously / formerly", pos:"noun", gender:null,
   note:"Marks a point before a reference time. 以前(いぜん)は = previously. 三年前(さんねんまえ)以前(いぜん) = before three years ago.",
   example:"A: 以前(いぜん)はこの町(まち)に住(す)んでいたのですか？\nB: はい、十年(じゅうねん)ほど前(まえ)に住(す)んでいました。\nA: その頃(ころ)と今(いま)では町(まち)の様子(ようす)はずいぶん変(か)わりましたか？\nB: ええ、以前(いぜん)は田んぼが多(おお)かったですが、今(いま)はマンションばかりです。",
   exampleSrc:"A: Did you used to live in this town before?\nB: Yes, I lived here about ten years ago.\nA: Has the appearance of the town changed a lot compared to that time?\nB: Yes, previously there were many rice fields, but now there are only apartment buildings.",
   funFact:"以前 splits into 以 (from/based on) and 前 (before/front). Its mirror is 以後(いご) (after/from now on). In legal documents and formal instructions, 以前 pins a cutoff date precisely: 申請期限(しんせいきげん)以前(いぜん)に提出(ていしゅつ)すること (submit before the application deadline). This precision makes it indispensable in contracts and regulations."},

  {type:"teach", trg:"以後(いご)", src:"after / from now on / hereafter", pos:"noun", gender:null,
   note:"Marks a point after a reference time, or from this point forward. 以後(いご)は = from now on. 会議(かいぎ)以後(いご) = after the meeting.",
   example:"A: 以後(いご)、このような間違(まちが)いのないようにしてください。\nB: 申(もう)し訳(わけ)ありません。以後(いご)、十分(じゅうぶん)注意(ちゅうい)いたします。\nA: 具体的(ぐたいてき)にどのような対策(たいさく)を取(と)りますか？\nB: 確認(かくにん)作業(さぎょう)を二重(にじゅう)にチェックする手順(てじゅん)を設(もう)けます。",
   exampleSrc:"A: Please make sure not to make such mistakes from now on.\nB: I am very sorry. From now on, I will take sufficient care.\nA: What specific measures will you take?\nB: I will establish a procedure to double-check the verification process.",
   funFact:"以後 is the formal counterpart of これから (from now on). In apologies and formal instructions, 以後(いご)ご注意(ちゅうい)ください (please be careful from now on) is the standard phrase. The kanji 後 also appears in 午後(ごご) (afternoon) and 後輩(こうはい) (junior). Note the reading difference: 以後 reads いご, not いあと."},

  {type:"teach", trg:"以外(いがい)", src:"except / other than / besides", pos:"noun", gender:null,
   note:"Excludes something from a scope. X以外(いがい) = everything except X. 彼(かれ)以外(いがい) = anyone but him.",
   example:"A: 月曜日(げつようび)以外(いがい)はいつでも大丈夫(だいじょうぶ)ですか？\nB: はい、火曜日(かようび)から金曜日(きんようび)であれば問題(もんだい)ありません。\nA: 場所(ばしょ)はこちらのオフィス以外(いがい)でも構(かま)いませんか？\nB: もちろんです。ご希望(きぼう)の場所(ばしょ)でも対応(たいおう)できます。",
   exampleSrc:"A: Is any day except Monday fine with you?\nB: Yes, Tuesday through Friday presents no problem.\nA: Would a location other than this office be acceptable as well?\nB: Of course. We can accommodate your preferred location.",
   funFact:"以外 is one of the most versatile exclusion words in Japanese. It contrasts with を除(のぞ)いて (excluding, more formal) and ほか (other). In everyday speech, 以外 covers almost all exclusion needs: 日本語(にほんご)以外(いがい)の言語(げんご) (languages other than Japanese). In JLPT N2 grammar, 以外に (in addition to / aside from) appears as a separate usage that means the opposite, so context matters."},

  {type:"mc", q:"以前(いぜん) refers to:", opts:["a point in time before a reference","a point in time after a reference","an exception or exclusion","something from a different place"],
   ans:"a point in time before a reference",
   hint:"This word contains the kanji for 'before/front'. Think of it as the formal way to say 'prior to'."},

  {type:"teach", trg:"社会的(しゃかいてき)", src:"social / societal", pos:"adj", gender:null,
   note:"Na-adjective. 社会的(しゃかいてき)な = social (attributive). 社会的(しゃかいてき)に = socially (adverbial).\n社会的問題(しゃかいてきもんだい) = social problem.",
   example:"A: この問題(もんだい)は社会的(しゃかいてき)に大(おお)きな影響(えいきょう)を与(あた)えています。\nB: 特(とく)にどのような層(そう)に影響(えいきょう)がありますか？\nA: 若(わか)い世代(せだい)や低所得者(ていしょとくしゃ)に深刻(しんこく)な影響(えいきょう)があると言(い)われています。\nB: 政府(せいふ)は何(なん)か対策(たいさく)を取(と)っていますか？",
   exampleSrc:"A: This issue is having a major social impact.\nB: Which groups in particular are affected?\nA: It is said to have a serious impact on younger generations and low-income earners.\nB: Is the government taking any measures?",
   funFact:"社会的 is built from 社会(しゃかい) (society) and the suffix 的(てき) that turns nouns into na-adjectives. This same suffix appears in 一般的(いっぱんてき) (general), 具体的(ぐたいてき) (specific), and 経済的(けいざいてき) (economic). Japanese frequently uses 〜的 to create adjectives from nouns, making it a powerful vocabulary-building pattern at N2 and above."},

  {type:"teach", trg:"現代(げんだい)", src:"modern times / the present age / contemporary", pos:"noun", gender:null,
   note:"Kanji: 現代. 現(げん) (present/current) + 代(だい) (era/generation). 現代語(げんだいご) = modern language. 現代社会(げんだいしゃかい) = modern society.",
   example:"A: 現代(げんだい)ではスマートフォンなしの生活(せいかつ)は想像(そうぞう)できません。\nB: 確(たし)かにそうですね。十年前(じゅうねんまえ)とは全(まった)く違(ちが)います。\nA: 現代(げんだい)の若者(わかもの)はどのようなことに価値(かち)を見出(みいだ)しているのでしょうか？\nB: 物質的(ぶっしつてき)なものより経験(けいけん)や人間関係(にんげんかんけい)を重視(じゅうし)する傾向(けいこう)がありますね。",
   exampleSrc:"A: In modern times, it is impossible to imagine life without a smartphone.\nB: That is certainly true. It is completely different from ten years ago.\nA: What do young people in modern society find value in?\nB: There is a tendency to value experiences and human relationships over material things.",
   funFact:"現代 contrasts with 古代(こだい) (ancient times), 中世(ちゅうせい) (medieval times), and 近代(きんだい) (early modern / Meiji era onward). Japanese history periodization matters at N2: the 現代 period typically begins after World War II in Japanese academic usage. Note that 近代 and 現代 are often confused by learners: 近代 is the Meiji-Taisho-early Showa era, while 現代 is post-1945."},

  {type:"fb", s:"この{1}な問題(もんだい)には政策(せいさく)的(てき)な解決(かいけつ)が必要(ひつよう)だ。\n(This social problem requires a policy-based solution.)", a:"社会的(しゃかいてき)", opts:["社会的(しゃかいてき)","以前(いぜん)","現代(げんだい)","具体的(ぐたいてき)"], sSrc:"This social problem requires a policy-based solution.",
   hint:"The na-adjective formed from the word for society plus the suffix that means relating to."},

  {type:"teach", trg:"安定(あんてい)する", src:"to stabilize / to become stable", pos:"verb", gender:null,
   note:"Kanji: 安定. 安(あん) (ease/peace) + 定(てい) (fixed/set). Noun form: 安定(あんてい) = stability. 安定(あんてい)した = stable (past/adj form).",
   example:"A: 手術(しゅじゅつ)後(ご)、患者(かんじゃ)の容態(ようだい)は安定(あんてい)していますか？\nB: はい、昨日(きのう)の夜(よる)から容態(ようだい)が安定(あんてい)してきました。\nA: 今後(こんご)の治療(ちりょう)はどのように進(すす)める予定(よてい)ですか？\nB: 経過(けいか)を観察(かんさつ)しながら段階的(だんかいてき)に回復(かいふく)を目指(めざ)します。",
   exampleSrc:"A: After the surgery, is the patient's condition stable?\nB: Yes, the condition has been stabilizing since last night.\nA: How do you plan to proceed with the treatment going forward?\nB: We will aim for gradual recovery while monitoring the progress.",
   funFact:"安定 appears in many compound terms: 安定供給(あんていきょうきゅう) (stable supply), 安定成長(あんていせいちょう) (stable growth), 精神的安定(せいしんてきあんてい) (psychological stability). In Japanese job culture, 安定した仕事(あんていしたしごと) (stable work) is a major consideration when choosing a career. Large companies and civil service (公務員, こうむいん) roles are prized precisely because of 安定."},

  {type:"teach", trg:"応(おう)じる", src:"to respond / to comply / to accommodate", pos:"verb", gender:null,
   note:"Kanji: 応じる. Group 2 verb. 要求(ようきゅう)に応(おう)じる = to respond to a demand. 状況(じょうきょう)に応(おう)じて = depending on the situation.",
   example:"A: このご要望(ようぼう)には応(おう)じかねますが、別(べつ)の形(かたち)でお手伝(てつだ)いできます。\nB: それはどのような対応(たいおう)ですか？\nA: 状況(じょうきょう)に応(おう)じて柔軟(じゅうなん)に対応(たいおう)いたします。\nB: わかりました。では、ご提案(ていあん)の内容(ないよう)を詳(くわ)しく教(おし)えていただけますか？",
   exampleSrc:"A: I am unable to comply with this request, but I can assist in another form.\nB: What kind of response would that be?\nA: We will respond flexibly depending on the situation.\nB: I understand. In that case, could you explain the details of your proposal?",
   funFact:"応じる is a highly flexible verb in formal register. The pattern 〜に応(おう)じて (according to / depending on) is an N2 grammar point in itself: 必要(ひつよう)に応(おう)じて (as needed), 能力(のうりょく)に応(おう)じて (according to ability). The kanji 応 also appears in 応援(おうえん) (cheering/support) and 対応(たいおう) (response/correspondence), making it a high-yield kanji at N2."},

  {type:"teach", trg:"引(ひ)き受(う)ける", src:"to take on / to accept responsibility / to undertake", pos:"verb", gender:null,
   note:"Kanji: 引き受ける. Compound verb: 引(ひ)く (to pull) + 受(う)ける (to receive). Takes on full responsibility for something.",
   example:"A: このプロジェクトのリーダーを引(ひ)き受(う)けていただけますか？\nB: 責任(せきにん)は大(おお)きいですが、喜(よろこ)んで引(ひ)き受(う)けます。\nA: ありがとうございます。全面的(ぜんめんてき)にサポートします。\nB: チームの皆(みな)とよく話(はな)し合(あ)って進(すす)めていきます。",
   exampleSrc:"A: Could you take on the role of leader for this project?\nB: It is a major responsibility, but I will take it on gladly.\nA: Thank you. We will support you fully.\nB: I will proceed by discussing things carefully with the whole team.",
   funFact:"引き受ける literally means to 'pull and receive,' suggesting actively drawing something toward yourself and taking it on. It is stronger than just する (to do): when you 引き受ける something, you are committing your full responsibility. The opposite action is 断(ことわ)る (to refuse/decline). In Japanese work culture, being asked to 引き受ける something is an honor, and refusing requires careful face-saving language."},

  {type:"fb", s:"会社(かいしゃ)の要求(ようきゅう)に{1}、残業(ざんぎょう)を引(ひ)き受(う)けた。\n(I accepted overtime in response to the company's request.)", a:"応(おう)じて", opts:["応(おう)じて","安定(あんてい)して","以後(いご)","以外(いがい)に"], sSrc:"I accepted overtime in response to the company's request.",
   hint:"The te-form of the verb meaning to comply or respond, used in the pattern depending on / in response to."},

  {type:"fb", s:"この仕事(しごと)を{1}くれる人(ひと)はいますか？\n(Is there anyone who will take on this work?)", a:"引(ひ)き受(う)け", opts:["引(ひ)き受(う)け","応(おう)じ","安定(あんてい)し","述(の)べ"], sSrc:"Is there anyone who will take on this work?",
   hint:"The stem of the compound verb meaning to accept responsibility for or to undertake a task."},

  {type:"tip", title:"以前 vs 以後 vs 以外",
   text:"These three formal markers look similar but function very differently.\n\n以前(いぜん) = before / prior to: marks a cutoff in the past. 申請期限(しんせいきげん)以前(いぜん) (before the deadline).\n\n以後(いご) = after / from now on: marks a point going forward. 以後(いご)ご注意(ちゅうい)を (be careful from now on).\n\n以外(いがい) = except / other than: excludes from a scope. 月曜日(げつようび)以外(いがい) (any day except Monday).\n\nMemory hook: 前(まえ) means front/before, 後(あと/ご) means after/behind, 外(そと) means outside.",
   deepDive:"All three use the prefix 以(い), which comes from 以って (by means of / from). In classical Chinese-influenced writing, 以 acts as a preposition indicating a reference point. Japanese absorbed this usage wholesale. You can extend the pattern: 以上(いじょう) (above / more than), 以下(いか) (below / less than), 以内(いない) (within). These all appear on N2 and N1 tests as reading comprehension vocabulary."},

  {type:"mc", q:"引(ひ)き受(う)ける means:", opts:["to pull away from","to take on responsibility","to push forward","to step back from"],
   ans:"to take on responsibility",
   hint:"This compound verb combines pulling toward yourself and receiving, creating the sense of actively accepting a task or duty."},

  {type:"match", pairs:[{trg:"以前(いぜん)",src:"before / previously"},{trg:"以後(いご)",src:"after / from now on"},{trg:"以外(いがい)",src:"except / other than"},{trg:"社会的(しゃかいてき)",src:"social / societal"}]},

  {type:"match", pairs:[{trg:"現代(げんだい)",src:"modern times"},{trg:"安定(あんてい)する",src:"to stabilize"},{trg:"応(おう)じる",src:"to respond / comply"},{trg:"引(ひ)き受(う)ける",src:"to take on / accept"}]},

  {type:"fb", s:"彼(かれ)は新(あたら)しい仕事(しごと)で{1}した生活(せいかつ)を手(て)に入(い)れた。\n(He obtained a stable life with the new job.)", a:"安定(あんてい)", opts:["安定(あんてい)","応(おう)じ","現代(げんだい)","以後(いご)"], sSrc:"He obtained a stable life with the new job.",
   hint:"The stem of the suru verb meaning to become stable or steady, used here as an adjective modifying life."},

  {type:"fb", s:"{1}の若者(わかもの)はどのような課題(かだい)に直面(ちょくめん)していますか？\n(What challenges are young people in modern times facing?)", a:"現代(げんだい)", opts:["現代(げんだい)","以前(いぜん)","社会的(しゃかいてき)","以外(いがい)"], sSrc:"What challenges are young people in modern times facing?",
   hint:"The noun meaning the present era or contemporary period, contrasted with ancient or medieval times."},
]},EXP_L3,EXP_L4,EXP_L5
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
, COVERAGE_U28]};
export default UNIT_28;
