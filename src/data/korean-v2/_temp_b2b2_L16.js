// Korean B2. Batch 2, Lesson 16: Morality and Challenge
// Words: 도달하다, 도대체, 도덕, 도둑, 도리어, 도마, 도망, 도망가다, 도망치다, 도심, 도움말, 도입, 도자기, 도장, 도저히, 도전, 독감, 독립, 독립하다, 독일어

const LESSON_16 = {
  id:"kov2_b2b2_l16", title:"도전과 도덕", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"도전과 도덕",
     desc:"Learn words about reaching goals, morality, and independence. These words cover everything from philosophical concepts to practical daily vocabulary.",
     goals:["Master 20 words about challenge, morality, and escape","Understand compound verbs for movement and achievement","Build vocabulary for cultural and philosophical discussion"]},

    {type:"teach", trg:"도달하다", src:"to reach, to arrive at", pos:"verb", gender:null,
     note:"Sino-Korean. 到 (arrive) + 達 (reach) + 하다.\nTo successfully reach a destination or goal.",
     example:"A: 목표에 도달했어요!\nB: 축하해요, 정말 대단해요.",
     exampleSrc:"A: I reached my goal!\nB: Congratulations, that is really impressive.",
     funFact:"도달하다 is more formal than 도착하다 (arrive). It implies achievement, not just physical arrival."},

    {type:"teach", trg:"도대체", src:"on earth, what in the world", pos:"adv", gender:null,
     note:"Sino-Korean. 都 (all) + 大 (big) + 體 (body).\nExpresses frustration or bewilderment in questions.",
     example:"A: 도대체 왜 그랬어?\nB: 미안해, 설명할게.",
     exampleSrc:"A: Why on earth did you do that?\nB: Sorry, I will explain.",
     funFact:"도대체 is stronger than 대체. Frustration scale: 왜? < 대체 왜? < 도대체 왜? Three levels of exasperation."},

    {type:"teach", trg:"도덕", src:"morality, ethics", pos:"noun", gender:null,
     note:"Sino-Korean. 道 (way/path) + 德 (virtue).\nThe principles of right and wrong.",
     example:"A: 도덕적으로 올바른 선택이에요?\nB: 어려운 문제지만, 그렇다고 생각해요.",
     exampleSrc:"A: Is it a morally right choice?\nB: It is a difficult question, but I think so.",
     funFact:"도덕 is a required school subject in Korea. 도덕 수업 (ethics class) teaches Confucian and modern values."},

    {type:"teach", trg:"도둑", src:"thief, burglar", pos:"noun", gender:null,
     note:"Native Korean. A person who steals\nothers' property.",
     example:"A: 도둑이 들었어요!\nB: 경찰에 빨리 신고하세요.",
     exampleSrc:"A: A thief broke in!\nB: Report it to the police quickly.",
     funFact:"도둑고양이 (stray cat, literally 'thief cat') is a common Korean expression. 도둑놈 adds the rough -놈 suffix."},

    {type:"teach", trg:"도리어", src:"on the contrary, rather", pos:"adv", gender:null,
     note:"Native Korean. The situation turned out\nopposite to what was expected.",
     example:"A: 도와주려다가 도리어 방해가 됐어요.\nB: 괜찮아요, 마음만으로도 감사해요.",
     exampleSrc:"A: I tried to help but ended up being a hindrance.\nB: It is okay, I appreciate the thought.",
     funFact:"도리어 is literary. 오히려 is more common in speech. Both mean 'on the contrary' but 도리어 is older."},

    {type:"teach", trg:"도마", src:"cutting board", pos:"noun", gender:null,
     note:"Native Korean. A flat board for cutting\nfood in the kitchen.",
     example:"A: 도마 위에서 야채를 썰어 주세요.\nB: 나무 도마 쓸까요, 플라스틱 쓸까요?",
     exampleSrc:"A: Please chop the vegetables on the cutting board.\nB: Should I use a wooden or plastic board?",
     funFact:"도마 위에 오르다 (get on the cutting board) means to become the subject of criticism or gossip."},

    {type:"mc",
     q:"'도대체'는 어떤 감정을 표현하나요?",
     opts:["답답함이나 당황","기쁨","슬픔","지루함"],
     ans:"답답함이나 당황",
     hint:"The emotional state when you cannot understand something and feel frustrated or bewildered."},

    {type:"teach", trg:"도망", src:"escape, flight, running away", pos:"noun", gender:null,
     note:"Sino-Korean. 逃 (escape) + 亡 (flee).\nThe act of running away from danger.",
     example:"A: 도망을 치려고 했지만 실패했어요.\nB: 결국 잡혔군요.",
     exampleSrc:"A: They tried to escape but failed.\nB: So they were caught in the end.",
     funFact:"도망 rarely stands alone. 도망가다, 도망치다, 도망을 치다 are the common forms. Always involves fleeing."},

    {type:"teach", trg:"도망가다", src:"to run away, to flee", pos:"verb", gender:null,
     note:"도망 (escape) + 가다 (go).\nTo flee away from the speaker.",
     example:"A: 고양이가 도망갔어요.\nB: 문이 열려 있었나 봐요.",
     exampleSrc:"A: The cat ran away.\nB: The door must have been open.",
     funFact:"도망가다 (flee away) vs 도망치다 (flee in panic). 가다 is neutral movement, 치다 adds urgency."},

    {type:"teach", trg:"도망치다", src:"to flee in panic, to make an escape", pos:"verb", gender:null,
     note:"도망 (escape) + 치다 (strike/rush).\nTo escape hurriedly, with urgency.",
     example:"A: 범인이 현장에서 도망쳤어요.\nB: 빨리 추적해야 해요.",
     exampleSrc:"A: The criminal fled from the scene.\nB: We need to pursue them quickly.",
     funFact:"도망치다 implies panic and urgency. It is more dramatic than 도망가다 and appears in crime reporting."},

    {type:"teach", trg:"도심", src:"city center, downtown", pos:"noun", gender:null,
     note:"Sino-Korean. 都 (capital) + 心 (heart).\nThe heart of a city.",
     example:"A: 도심에 사무실이 있어요.\nB: 출퇴근이 편리하겠네요.",
     exampleSrc:"A: The office is in the city center.\nB: Your commute must be convenient.",
     funFact:"서울 도심 usually means the Jongno/Gwanghwamun area. 부도심 (sub-center) refers to places like Gangnam."},

    {type:"teach", trg:"도움말", src:"help text, tooltip, help guide", pos:"noun", gender:null,
     note:"도움 (help) + 말 (words).\nExplanatory text that provides assistance.",
     example:"A: 도움말을 읽어 보세요.\nB: 아, 이렇게 사용하는 거군요.",
     exampleSrc:"A: Read the help guide.\nB: Oh, so this is how you use it.",
     funFact:"도움말 is the Korean equivalent of 'Help' in software. Every Korean app has a 도움말 section."},

    {type:"fb",
     s:"범인이 현장에서 {1}.",
     a:["도망쳤다"],
     opts:["도망쳤다","도달했다","도입했다","도전했다"],
     hint:"To flee in panic from a place. A verb for hurried escape.",
     sSrc:"The criminal {1} from the scene."},

    {type:"teach", trg:"도입", src:"introduction, adoption (of a system)", pos:"noun", gender:null,
     note:"Sino-Korean. 導 (guide) + 入 (enter).\nBringing in a new system, method, or policy.",
     example:"A: 새로운 제도를 도입했어요.\nB: 효과가 있었나요?",
     exampleSrc:"A: They introduced a new system.\nB: Was it effective?",
     funFact:"도입 is for systems and policies, not people. 제도 도입 (system adoption), 기술 도입 (technology introduction)."},

    {type:"teach", trg:"도자기", src:"pottery, ceramics", pos:"noun", gender:null,
     note:"Sino-Korean. 陶 (pottery) + 瓷 (porcelain) + 器 (vessel).\nFired clay vessels and art.",
     example:"A: 한국 도자기가 세계적으로 유명해요.\nB: 특히 고려 청자가 아름답죠.",
     exampleSrc:"A: Korean pottery is world-famous.\nB: Especially Goryeo celadon is beautiful.",
     funFact:"Korean 청자 (celadon) from the Goryeo Dynasty is considered among the finest ceramics ever produced."},

    {type:"teach", trg:"도장", src:"stamp, seal; dojo", pos:"noun", gender:null,
     note:"Two Hanja: 圖章 (official seal) or 道場 (practice hall).\nA stamp for documents, or a martial arts hall.",
     example:"A: 여기에 도장을 찍어 주세요.\nB: 네, 여기요.",
     exampleSrc:"A: Please stamp your seal here.\nB: Yes, here it is.",
     funFact:"Korea still uses personal name seals (도장) for official documents. Banks and government offices require them."},

    {type:"teach", trg:"도저히", src:"(not) at all, by no means", pos:"adv", gender:null,
     note:"Sino-Korean. 到 (reach) + 底 (bottom) + 히.\nReaching the very bottom of impossibility.",
     example:"A: 도저히 이해할 수 없어요.\nB: 저도 마찬가지예요.",
     exampleSrc:"A: I cannot understand it at all.\nB: I feel the same way.",
     funFact:"도저히 ALWAYS pairs with a negative: 도저히 못 하다, 도저히 모르다. It never appears in positive sentences."},

    {type:"teach", trg:"도전", src:"challenge", pos:"noun", gender:null,
     note:"Sino-Korean. 挑 (provoke) + 戰 (war).\nA bold attempt at something difficult.",
     example:"A: 새로운 도전을 시작했어요.\nB: 응원할게요!",
     exampleSrc:"A: I started a new challenge.\nB: I will cheer you on!",
     funFact:"도전! is a popular exclamation in Korean variety shows. 도전 정신 (challenger's spirit) is deeply valued."},

    {type:"mc",
     q:"'도저히'는 어떤 문장에서 쓰이나요?",
     opts:["의문문에서만 쓰인다","부정문에서만 쓰인다","긍정문에서만 쓰인다","모든 문장에서 쓰인다"],
     ans:"부정문에서만 쓰인다",
     hint:"This adverb meaning 'by no means' only appears with negative verb forms. It cannot be positive."},

    {type:"teach", trg:"독감", src:"influenza, flu", pos:"noun", gender:null,
     note:"Sino-Korean. 毒 (poison) + 感 (feeling).\nA severe viral respiratory illness.",
     example:"A: 독감에 걸렸어요.\nB: 푹 쉬세요.",
     exampleSrc:"A: I caught the flu.\nB: Get plenty of rest.",
     funFact:"독감 is more severe than 감기 (common cold). 독감 예방 접종 (flu vaccination) is recommended every autumn."},

    {type:"teach", trg:"독립", src:"independence", pos:"noun", gender:null,
     note:"Sino-Korean. 獨 (alone) + 立 (stand).\nStanding on one's own, self-reliance.",
     example:"A: 한국은 1945년에 독립했어요.\nB: 광복절이 8월 15일이죠.",
     exampleSrc:"A: Korea gained independence in 1945.\nB: Liberation Day is August 15th.",
     funFact:"독립운동 (independence movement) is central to Korean national identity. Many holidays commemorate it."},

    {type:"teach", trg:"독립하다", src:"to become independent", pos:"verb", gender:null,
     note:"독립 (independence) + 하다.\nTo gain independence, politically or personally.",
     example:"A: 대학 졸업 후 독립했어요.\nB: 혼자 사는 건 어때요?",
     exampleSrc:"A: I became independent after college graduation.\nB: How is living alone?",
     funFact:"독립하다 is used for countries (national independence) and young adults (moving out of parents' home)."},

    {type:"teach", trg:"독일어", src:"German language", pos:"noun", gender:null,
     note:"독일 (Germany) + 어 (language).\nThe language spoken in Germany.",
     example:"A: 독일어를 배우고 있어요?\nB: 네, 아직 초보예요.",
     exampleSrc:"A: Are you learning German?\nB: Yes, I am still a beginner.",
     funFact:"독일 comes from the Japanese reading of 独逸 (Doitsu), which comes from German 'Deutsch.' A chain of borrowing."},

    {type:"match", pairs:[
      {trg:"도덕", src:"morality"},
      {trg:"도전", src:"challenge"},
      {trg:"독립", src:"independence"},
      {trg:"도자기", src:"pottery"},
      {trg:"독감", src:"influenza"}
    ]},

    {type:"fb",
     s:"새로운 {1}을 시작했어요.",
     a:["도전"],
     opts:["도전","도덕","도망","도입"],
     hint:"A bold attempt at something difficult. The spirit of trying new things.",
     sSrc:"I started a new {1}."}
  ]
};
export default LESSON_16;
