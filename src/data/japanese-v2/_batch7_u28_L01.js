// Batch 7 – Unit 28 (B2.1 Written vs Spoken): Formal Writing Vocabulary
const BATCH7_L1 = {
  id:"jav2_u28l_b7_1", title:"ぶんしょうひょうげん", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうひょうげん",
     desc:"Learn formal writing vocabulary that distinguishes written Japanese from spoken. These words appear in academic papers, business documents, and formal correspondence.",
     goals:["Recognize formal written-only expressions","Use academic and document vocabulary","Distinguish register in written contexts"]},

    {type:"teach", trg:"じょうき", src:"the above-mentioned / aforementioned", pos:"noun", gender:null,
     note:"じょうきのとおり = as mentioned above.\nWritten-only expression.",
     example:"A: じょうきのりゆうにより、ていあんをしょうにんします。\nB: ありがとうございます。",
     exampleSrc:"A: For the aforementioned reasons, we approve the proposal.\nB: Thank you.",
     funFact:"じょうき (上記) literally means 'written above.' Japanese formal documents use spatial references: 上記 (above), 下記 (below), 左記 (left-written), 右記 (right-written). These reflect traditional vertical writing where 'above' meant earlier text. Even in horizontal writing, the convention persists."},

    {type:"teach", trg:"かき", src:"the following / below-mentioned", pos:"noun", gender:null,
     note:"かきのとおり = as written below.\nかきをごらんください = please see below.",
     example:"A: しょうさいはかきのとおりです。\nB: かくにんいたしました。",
     exampleSrc:"A: Details are as follows.\nB: I have confirmed them.",
     funFact:"かき (下記) is essential in business emails and documents. The formula じょうき...かき (above...below) structures formal communication. Japanese business emails follow rigid patterns: greeting, purpose, details (かき), closing. Deviating from this structure signals either informality or incompetence."},

    {type:"teach", trg:"とうがい", src:"the said / the relevant / in question", pos:"noun", gender:null,
     note:"とうがいしゃ = the person in question.\nとうがいじこう = the matter in question.",
     example:"A: とうがいしゃにれんらくしてください。\nB: しょうちいたしました。",
     exampleSrc:"A: Please contact the person in question.\nB: Understood.",
     funFact:"とうがい (当該) is pure legal/administrative language. It specifies 'the one we are talking about' without naming it again. Japanese legal documents use とうがい extensively to avoid repetition and maintain precision. Hearing とうがい in conversation sounds extremely formal, like a lawyer speaking."},

    {type:"teach", trg:"おそれがある", src:"there is a risk that / liable to", pos:"verb", gender:null,
     note:"Formal risk expression.\nじこがおこるおそれがある = there is a risk of an accident.",
     example:"A: たいふうにより、でんしゃがうんきゅうするおそれがあります。\nB: はやめにかえりましょう。",
     exampleSrc:"A: There is a risk of train suspension due to the typhoon.\nB: Let us go home early.",
     funFact:"おそれがある is the official risk warning phrase used in weather alerts, legal notices, and safety announcements. Train companies say 遅延のおそれがあります (there is a risk of delays). It is more formal than かもしれない and carries official weight. News broadcasts use it constantly."},

    {type:"teach", trg:"ないし", src:"or / to (range)", pos:"conj", gender:null,
     note:"Formal alternative to 'or.' Used for ranges.\n3にちないし5にち = 3 to 5 days.",
     example:"A: 2しゅうかんないし3しゅうかんかかります。\nB: わかりました。おまちします。",
     exampleSrc:"A: It will take 2 to 3 weeks.\nB: I understand. I will wait.",
     funFact:"ないし (乃至) is formal written Japanese for 'or/through.' It appears in legal documents, contracts, and official notices. In speech, people say 'から...まで' (from...to) or 'または' (or). Using ないし in conversation marks the speaker as extremely formal or bureaucratic."},

    {type:"teach", trg:"きさい", src:"description / entry / listing", pos:"noun", gender:null,
     note:"きさいする = to write/describe/list.\nきさいじこう = items to be listed.",
     example:"A: しょうさいはウェブサイトにきさいされています。\nB: かくにんしてみます。",
     exampleSrc:"A: Details are listed on the website.\nB: I will check.",
     funFact:"きさい (記載) is the standard word for written entries in forms, documents, and contracts. きさいもれ (omission in listing) is a serious error in official documents. Japanese bureaucracy requires precise きさい of personal information. Even one wrong character can cause document rejection."},

    {type:"teach", trg:"きょか", src:"permission / authorization", pos:"noun", gender:null,
     note:"きょかする = to permit/authorize.\nきょかしょう = permit/license.",
     example:"A: けんちくのきょかがおりました。\nB: やっとこうじがはじめられますね。",
     exampleSrc:"A: The construction permit was granted.\nB: We can finally start building.",
     funFact:"きょか (許可) is needed for countless activities in Japan: construction, business operation, event hosting, even some types of photography. The bureaucratic きょか process can be lengthy. However, once obtained, きょか is respected. 無許可 (むきょか, without permission) carries serious legal consequences."},

    {type:"teach", trg:"てきせつ", src:"appropriate / proper / suitable", pos:"adj", gender:null,
     note:"Na-adjective. てきせつなたいおう = appropriate response.\nてきせつにしょりする = to handle properly.",
     example:"A: てきせつなたいおうをおねがいします。\nB: しょうちいたしました。",
     exampleSrc:"A: Please provide an appropriate response.\nB: Understood.",
     funFact:"てきせつ (適切) is the formal version of ふさわしい. It appears in business communications, policy documents, and quality standards. Japanese quality control (品質管理) revolves around てきせつ procedures. The word implies not just suitability but optimal appropriateness for the specific situation."},

    {type:"teach", trg:"ぜんりゃく", src:"dispensing with formalities (letter opening)", pos:"noun", gender:null,
     note:"Letter/email opener. ぜんりゃく = skipping the seasonal greeting.\nUsed when getting straight to business.",
     example:"A: ぜんりゃく。きんきゅうのようけんです。\nB: (reads the rest of the message)",
     exampleSrc:"A: Dispensing with formalities. This is an urgent matter.\nB: (reads the rest)",
     funFact:"ぜんりゃく (前略) literally means 'abbreviating what comes before.' Japanese letters traditionally start with seasonal greetings (時候の挨拶). Writing ぜんりゃく skips this and signals urgency or casual familiarity. Formal letters must include proper seasonal openings like 'the leaves are changing color' (紅葉の候)."},

    {type:"teach", trg:"そうこう", src:"draft / manuscript", pos:"noun", gender:null,
     note:"そうこうをかく = to write a draft.\nさいしゅうこう = final draft.",
     example:"A: レポートのそうこうができました。\nB: かくにんしますので、そうしんしてください。",
     exampleSrc:"A: The report draft is ready.\nB: I will review it, so please send it.",
     funFact:"そうこう (草稿) uses 草 (grass/rough) and 稿 (manuscript). A draft is a 'rough manuscript.' Japanese academic writing involves multiple そうこう rounds with advisor review. The process of revising from そうこう to final version (最終稿) teaches precision. 下書き (したがき, rough draft) is the casual equivalent."},

    {type:"teach", trg:"じょうほうかいじ", src:"information disclosure", pos:"noun", gender:null,
     note:"じょうほうかいじせいど = information disclosure system.\nかいじせいきゅう = disclosure request.",
     example:"A: じょうほうかいじをせいきゅうしました。\nB: かいじまでどのくらいかかりますか？",
     exampleSrc:"A: I requested information disclosure.\nB: How long until disclosure?",
     funFact:"じょうほうかいじ (情報開示) is a democratic right in Japan since the 1999 Information Disclosure Law. Citizens can request government documents. Corporate じょうほうかいじ is required for publicly traded companies. The balance between とうめいせい (transparency) and プライバシー (privacy) is constantly debated."},

    {type:"teach", trg:"そんちょう", src:"respect / esteem", pos:"noun", gender:null,
     note:"そんちょうする = to respect. じんけんをそんちょうする = to respect human rights.\nそんちょうすべき = worthy of respect.",
     example:"A: たがいのいけんをそんちょうしましょう。\nB: そうですね。ちがいをみとめることがだいじです。",
     exampleSrc:"A: Let us respect each other's opinions.\nB: Yes. Recognizing differences is important.",
     funFact:"そんちょう (尊重) combines 尊 (valuable/revered) and 重 (heavy/important). It is stronger than simply 'respecting.' 基本的人権の尊重 (respect for fundamental human rights) is a cornerstone of Japan's postwar constitution. In business, そんちょう of diverse opinions drives better decision-making."},

    // Quiz steps
    {type:"mc", q:"ぜんりゃく in a letter means:",
     opts:["Skipping the seasonal greeting to get to the point","A formal closing","A signature block","An attachment notice"],
     ans:"Skipping the seasonal greeting to get to the point",
     hint:"Japanese letters traditionally open with s... greetings. This word signals those are being omitted."},

    {type:"match", pairs:[
      {trg:"じょうき", src:"above-mentioned"},
      {trg:"かき", src:"below-mentioned"},
      {trg:"とうがい", src:"the said/in question"},
      {trg:"きさい", src:"listing/entry"},
      {trg:"きょか", src:"permission"}
    ]},

    {type:"fb", s:"たいふうにより、でんしゃがうんきゅうする{1}があります。",
     a:["おそれ"],
     opts:["おそれ","きょか","きさい","そうこう"],
     hint:"There is a risk of train suspension. This formal phrase warns about potential danger.",
     sSrc:"There is a {1} of train suspension due to the typhoon."},

    {type:"mc", q:"きさいもれ on an official document means:",
     opts:["An omission in the required information","A spelling mistake","A signature missing","An expired date"],
     ans:"An omission in the required information",
     hint:"Failing to fill in r... fields can cause document rejection in Japanese bureaucracy."},

    {type:"fb", s:"レポートの{1}ができました。かくにんしてください。",
     a:["そうこう"],
     opts:["そうこう","きさい","きょか","じょうき"],
     hint:"The first version of the report is ready for review. This word means 'draft.'",
     sSrc:"The report {1} is ready. Please review it."},

    {type:"mc", q:"ないし is used for:",
     opts:["Expressing a range (2 to 3 weeks)","Asking questions","Showing contrast","Expressing emotions"],
     ans:"Expressing a range (2 to 3 weeks)",
     hint:"This formal conjunction means 'or' or 'to' when describing a r... of values."},

    {type:"match", pairs:[
      {trg:"おそれがある", src:"there is a risk"},
      {trg:"てきせつ", src:"appropriate"},
      {trg:"ぜんりゃく", src:"dispensing with formalities"},
      {trg:"そうこう", src:"draft"},
      {trg:"そんちょう", src:"respect"}
    ]},

    {type:"fb", s:"たがいのいけんを{1}しましょう。",
     a:["そんちょう"],
     opts:["そんちょう","きさい","きょか","はいしゅつ"],
     hint:"Let us respect each other's opinions. This verb means 'to esteem' or 'to respect.'",
     sSrc:"Let us {1} each other's opinions."}
  ]
};
export default BATCH7_L1;
