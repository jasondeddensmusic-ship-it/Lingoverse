// Unit 01 Batch3 L01. Polite Phrases & Classroom Japanese
// New vocab: どうぞ, どうも, ちょっとまって, わかりました, わかりません,
// もういちど, ゆっくり, しつもん, こたえ, きょうは, どうぞよろしく,
// せいかい — all absent from unit-01.js and _temp_u01 files.
const BATCH3_L_1 = {
  id:"jav2_u1l_b3_1", title:"丁寧(ていねい)なことば", icon:"🙏", xp:15, board:true,
  steps:[
    {type:"intro", title:"丁寧(ていねい)なことば",
     desc:"Learn essential polite phrases and classroom expressions. These words let you interact gracefully in everyday situations and ask for help in Japanese.",
     goals:["Use polite phrases like douzo and doumo","Handle classroom interactions in Japanese","Ask for repetition and clarification"]},

    {type:"teach", trg:"どうぞ", src:"please / go ahead / here you go", pos:"intj", gender:null,
     note:"Used when offering something, inviting someone to proceed, or handing an item over. Very versatile.",
     example:"A: お茶(ちゃ)をどうぞ。\nB: ありがとうございます。",
     exampleSrc:"A: Please have some tea.\nB: Thank you.",
     funFact:"Douzo has no exact English equivalent. It smooths countless social interactions: handing something over, inviting someone inside, letting someone pass. Japanese politeness is largely about using douzo at exactly the right moment."},

    {type:"teach", trg:"どうも", src:"thanks / hello (casual catch-all)", pos:"intj", gender:null,
     note:"Short form of ありがとう or こんにちは depending on context.\nCasual but warm. Works in many situations.",
     example:"A: これ、どうぞ。\nB: どうも！",
     exampleSrc:"A: Here you go.\nB: Thanks!",
     funFact:"Doumo is the ultimate Japanese shortcut. It can mean thank you, hello, or excuse me depending on tone. Business Japanese teachers warn students not to rely on it too much, but in casual daily life, a warm 'doumo' with a nod handles everything."},

    {type:"teach", trg:"ちょっと待(ま)ってください", src:"please wait a moment", pos:"verb", gender:null,
     note:"Polite request to wait. Casual: ちょっと待(ま)って.\nLiterally: please wait a little.",
     example:"A: ちょっと待(ま)ってください。準備(じゅんび)します。\nB: はい、わかりました。",
     exampleSrc:"A: Please wait a moment. I will get ready.\nB: Yes, understood.",
     funFact:"Chotto (a little) is one of the most powerful words in Japanese. 'Chotto...' said with a trailing voice is the polite way to say no, I can't, or that's difficult, without ever saying any of those things directly. Silence after chotto is the real answer."},

    {type:"teach", trg:"わかりました", src:"I understood / got it", pos:"verb", gender:null,
     note:"Polite past tense of わかる (to understand). The go-to response to instructions.",
     example:"A: あした、十時(じゅうじ)に来(き)てください。\nB: はい、わかりました。",
     exampleSrc:"A: Please come at ten tomorrow.\nB: Yes, understood.",
     funFact:"Wakarimashita is the essential response in any Japanese setting. Students say it to teachers, employees to managers, customers to staff. Saying hai (yes) alone feels incomplete. The proper sequence is: hai, wakarimashita (yes, understood)."},

    {type:"teach", trg:"わかりません", src:"I don't understand / I don't know", pos:"verb", gender:null,
     note:"Polite negative present of わかる. Used to express confusion or lack of knowledge.",
     example:"A: この問題(もんだい)はわかりますか？\nB: すみません、わかりません。",
     exampleSrc:"A: Do you understand this problem?\nB: Sorry, I don't understand.",
     funFact:"Japanese learners must conquer the fear of saying wakarimasen. Japanese people respect honesty about not understanding far more than pretending to understand and making a mistake. A clear wakarimasen opens the door to clarification."},

    {type:"mc", q:"わかりました means:", opts:["I understood","I don't know","Please wait","Thank you"],
     ans:"I understood",
     hint:"This is the polite past form of the verb 'to understand.'"},

    {type:"teach", trg:"もう一度(いちど)", src:"one more time / again", pos:"adv", gender:null,
     note:"Essential classroom phrase. Used before ゆっくり for 'slowly one more time.'",
     example:"A: もう一度(いちど)言(い)ってください。\nB: はい。こんにちは！",
     exampleSrc:"A: Please say it one more time.\nB: Yes. Hello!",
     funFact:"Mou (already/more) + ichido (one time). Learning a language means saying mou ichido hundreds of times. Japanese teachers expect it. Asking for repetition is not embarrassing, it is respectful participation. Never pretend you understood when you did not."},

    {type:"teach", trg:"ゆっくり", src:"slowly / at a leisurely pace", pos:"adv", gender:null,
     note:"A magic word for language learners. Combine with もう一度(いちど) for best results.",
     example:"A: ゆっくり話(はな)してください。\nB: はい、もちろんです。",
     exampleSrc:"A: Please speak slowly.\nB: Yes, of course.",
     funFact:"Yukkuri has a warm, relaxed nuance beyond just 'slowly.' Yukkuri shite itte ne means 'please relax and stay awhile' (literally: go slowly). Japanese culture values taking things at a comfortable pace in social settings, even if professional life is fast-paced."},

    {type:"fb", s:"{1}話(はな)してください。(Please speak slowly.)",
     a:"ゆっくり",
     opts:["ゆっくり","すこし","とても","もう"],
     hint:"The adverb meaning 'slowly' that language learners use constantly.",
     sSrc:"Please speak slowly."},

    {type:"teach", trg:"質問(しつもん)", src:"question", pos:"noun", gender:null,
     note:"Used when asking to ask something: 質問(しつもん)があります (I have a question).\nKanji: 質問.",
     example:"A: 質問(しつもん)があります。\nB: はい、どうぞ。",
     exampleSrc:"A: I have a question.\nB: Yes, go ahead.",
     funFact:"質問 (question) and 問題 (mondai, problem/question on a test) are related but different. Shitsumon is a polite inquiry you direct to someone. Mondai is a problem to solve. Using the wrong one in a classroom is a common beginner mistake."},

    {type:"teach", trg:"答(こた)え", src:"answer", pos:"noun", gender:null,
     note:"The answer or response. Used in classroom settings and quizzes.\nKanji: 答え.",
     example:"A: 答(こた)えは何(なん)ですか？\nB: 答(こた)えは「三(さん)」です。",
     exampleSrc:"A: What is the answer?\nB: The answer is 'three.'",
     funFact:"答 combines 竹 (bamboo, suggesting writing) with an older character for 'agree/respond.' Traditional answers were written on bamboo strips. The kanji visually suggests a formal written response, making it perfect for quiz and test contexts."},

    {type:"teach", trg:"正解(せいかい)", src:"correct answer / right!", pos:"noun", gender:null,
     note:"What a teacher says for a correct answer. Opposite: ちがいます (incorrect).\nKanji: 正解.",
     example:"A: 答(こた)えは日本(にほん)ですか？\nB: 正解(せいかい)です！よくできました！",
     exampleSrc:"A: Is the answer Japan?\nB: Correct! Well done!",
     funFact:"正 (correct/righteous) + 解 (solve/understand). Seikai on a quiz show is accompanied by a fanfare sound. In Japanese game shows, the seikai moment is celebrated dramatically. Hearing seikai from a teacher feels genuinely rewarding."},

    {type:"mc", q:"Which phrase would you use to ask a teacher to repeat something?",
     opts:["もう一度(いちど)言(い)ってください","どうぞ","わかりました","正解(せいかい)です"],
     ans:"もう一度(いちど)言(い)ってください",
     hint:"This phrase asks someone to say something 'one more time.'"},

    {type:"teach", trg:"どうぞよろしく", src:"pleased to meet you (casual)", pos:"intj", gender:null,
     note:"Casual version of よろしくお願(ねが)いします. Used among peers and in informal settings.",
     example:"A: はじめまして。リョウです。どうぞよろしく。\nB: リサです。こちらこそ。",
     exampleSrc:"A: Nice to meet you. I'm Ryo. Pleased to meet you.\nB: I'm Lisa. Likewise.",
     funFact:"Douzo yoroshiku drops the onegai shimasu for a warmer, less formal feeling. It is the greeting among classmates, teammates, and new friends. Using the full form sounds stiff between people the same age. Context decides which to use."},

    {type:"teach", trg:"お願(ねが)いします", src:"I humbly request / please (requesting a person)", pos:"verb", gender:null,
     note:"Slightly different nuance from お願(ねが)いします for objects. Directed at a person when asking for help or a favor.",
     example:"A: 佐藤(さとう)さん、手伝(てつだ)ってください。\nB: はい、お願(ねが)いします？何(なに)をしますか？",
     exampleSrc:"A: Sato-san, please help me.\nB: Yes? What would you like me to do?",
     funFact:"Onegai shimasu and onegaishimasu are the same phrase written with or without a space. In practice, onegaishimasu (one fast word) sounds more natural and urgent, while o-negai shimasu (deliberate, with pause) sounds more formal and sincere."},

    {type:"fb", s:"質問(しつもん)が{1}。(I have a question.)",
     a:"あります",
     opts:["あります","います","です","ください"],
     hint:"The verb meaning 'to exist / there is' used for non-living things like questions.",
     sSrc:"I have a question."},

    {type:"mc", q:"どうぞ is used when:", opts:["Asking for repetition","Saying goodbye","Expressing confusion","Offering something or inviting someone to proceed"],
     ans:"Offering something or inviting someone to proceed",
     hint:"This word smooths moments of handing over or giving permission."},

    {type:"match", pairs:[
      {trg:"わかりました", src:"I understood"},
      {trg:"わかりません", src:"I don't understand"},
      {trg:"もう一度(いちど)", src:"one more time"},
      {trg:"ゆっくり", src:"slowly"}
    ]},

    {type:"match", pairs:[
      {trg:"質問(しつもん)", src:"question"},
      {trg:"答(こた)え", src:"answer"},
      {trg:"正解(せいかい)", src:"correct answer"},
      {trg:"どうぞ", src:"go ahead / here you go"}
    ]},

    {type:"mc", q:"正解(せいかい) means:", opts:["question","correct answer","please wait","I understand"],
     ans:"correct answer",
     hint:"A teacher says this when a student gets something right."},
  {type:"match",pairs:[{trg:"どうも",src:"thanks / hello (casual catch-all)"},{trg:"ちょっと待(ま)ってください",src:"please wait a moment"},{trg:"お願(ねが)いします",src:"I humbly request / please (requesting a person)"}]}]
};
export default BATCH3_L_1;
