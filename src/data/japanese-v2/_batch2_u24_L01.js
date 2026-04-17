// Unit 24 Batch 2 Lesson 1: 文章(ぶんしょう)構造(こうぞう) (Essay & Paragraph Structure)
const BATCH2_L_1 = {
  id:"jav2_u24l_b2_1", title:"文章(ぶんしょう)構造(こうぞう)", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"文章(ぶんしょう)構造(こうぞう)",
     desc:"Structured writing requires connectors that signal paragraph roles. Learn words that introduce topics, signal transitions, present evidence, and draw conclusions. These are essential for JLPT essays and formal writing.",
     goals:["Use paragraph-opening connectors for introductions","Signal topic shifts and transitions smoothly","Structure conclusions with appropriate markers"]},

    {type:"teach", trg:"はじめに", src:"first of all / to begin with / introduction", pos:"adv", gender:null,
     note:"はじめ (beginning) + に (at/in). Used to open essays and presentations.\nMore formal than まず.",
     example:"A: はじめに、この研究(けんきゅう)の背景(はいけい)を説明(せつめい)します。\nB: おねがいします。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: First, I will explain the background of this research.\nB: Please go ahead.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"はじめに is the standard essay and presentation opener. Japanese formal writing follows a clear structure: はじめに (introduction), 次(つぎ)に (next points), 最後(さいご)に (conclusion). This parallels the traditional 起承転結(きしょうてんけつ) (ki-shou-ten-ketsu: introduction, development, twist, conclusion) narrative structure."},

    {type:"teach", trg:"言(い)い換(か)えれば", src:"in other words / to put it another way", pos:"conj", gender:null,
     note:"言(い)い換(か)える (to rephrase) + ば (if). Literally: if one rephrases.\nMore formal than つまり.",
     example:"A: 人口(じんこう)が減(へ)っています。言(い)い換(か)えれば、労働力(ろうどうりょく)が不足(ぶそく)します。\nB: なるほど、そういうことですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: The population is decreasing. In other words, the labor force will be insufficient.\nB: I see, that is what you mean.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"言い換えれば is the more formal alternative to つまり for rephrasing. It uses the ば conditional of 言(い)い換(か)える (to rephrase): 'if one were to rephrase...' Academic papers and presentations prefer this form. It signals that the speaker is about to translate a complex idea into simpler or different terms."},

    {type:"teach", trg:"きっかけ", src:"trigger / catalyst / opportunity that started something", pos:"noun", gender:null,
     note:"The event or moment that set something in motion.\n日本語(にほんご)を始(はじ)めたきっかけ = what started you learning Japanese.",
     example:"A: 日本語(にほんご)を勉強(べんきょう)したきっかけは何(なん)ですか？\nB: アニメを見(み)たことがきっかけです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: What was the trigger for studying Japanese?\nB: Watching anime was the catalyst.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"きっかけ is a favorite interview and essay prompt. Japanese love asking about きっかけ because it reveals personal stories. 'What was the きっかけ for...' is one of the most common questions in Japanese conversation. It implies that every significant action has an origin story worth hearing."},

    {type:"teach", trg:"〜をきっかけに", src:"triggered by ~ / starting from ~", pos:"part", gender:null,
     note:"Noun + をきっかけに = using X as the trigger/catalyst.\nConnects a catalyst event to its result.",
     example:"A: 留学(りゅうがく)をきっかけに、日本(にほん)に興味(きょうみ)を持(も)ちました。\nB: すてきなきっかけですね。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Studying abroad triggered my interest in Japan.\nB: What a wonderful catalyst.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"をきっかけに creates a narrative link between an event and its consequence. It is standard in personal essays, interview answers, and autobiographical writing. The pattern suggests that one moment changed the trajectory of something, making it a powerful storytelling device."},

    {type:"mc", q:"はじめに is used to:", opts:["End an essay","Open an essay or presentation","Express disagreement","Ask a question"], ans:"Open an essay or presentation",
     hint:"This formal connector signals the beginning of a structured piece of writing or speaking."},

    {type:"teach", trg:"労働力(ろうどうりょく)", src:"labor force / workforce", pos:"noun", gender:null,
     note:"労働(ろうどう) (labor) + 力(りょく) (power/force).\n労働力(ろうどうりょく)不足(ぶそく) = labor shortage.",
     example:"A: 労働力(ろうどうりょく)が減(へ)っています。\nB: 移民(いみん)の受(う)け入(い)れが必要(ひつよう)かもしれません。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: The labor force is decreasing.\nB: Accepting immigrants might be necessary.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"労働力 is a key economic term. 労働(ろうどう) means 'labor' (combining 労 'toil' and 働 'work'), and 力(りょく) means 'power.' Japan's shrinking workforce is driving automation, AI adoption, and immigration debates. The term appears daily in economic news, policy discussions, and academic papers."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~ / as ~ occurs", pos:"part", gender:null,
     note:"Noun/verb + にともなって = accompanying that change.\n漢字(かんじ): に伴って. Describes parallel developments.",
     example:"A: 高齢化(こうれいか)にともなって、医療費(いりょうひ)が増(ふ)えています。\nB: 深刻(しんこく)な問題(もんだい)ですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Along with aging, medical costs are increasing.\nB: It is a serious problem.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"にともなって links two changes that occur together. 伴(ともな)う means 'to accompany,' so the pattern says 'accompanying X, Y also happens.' It is common in economic and social analysis: population decline + labor shortage, aging + medical costs. JLPT N2 reading passages love this connector."},

    {type:"fb", s:"留学(りゅうがく){1}に、日本(にほん)に興味(きょうみ)を持(も)ちました。\n(Studying abroad triggered my interest in Japan.)", a:"をきっかけ", opts:["をきっかけ","について","にたいして","にともなって"], sSrc:"Studying abroad triggered my interest in Japan.",
     hint:"The phrase that connects a catalyst event to its result, using the noun for 'trigger.'"},

    {type:"teach", trg:"〜にくわえて", src:"in addition to ~ / on top of ~", pos:"part", gender:null,
     note:"Noun + にくわえて = adding X to the existing situation.\n漢字(かんじ): に加えて. More formal than そのうえ.",
     example:"A: 残業(ざんぎょう)にくわえて、週末(しゅうまつ)出勤(しゅっきん)もあります。\nB: 大変(たいへん)ですね。体(からだ)に気(き)をつけてください。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: In addition to overtime, there is also weekend work.\nB: That is tough. Please take care of your health.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"にくわえて uses 加(くわ)える (to add) and functions as a formal addition connector. While そのうえ (moreover) adds a new point, にくわえて specifically adds to something already stated. It is the connector for piling on evidence or complaints: 'X, and on top of that, Y.'"},

    {type:"teach", trg:"結論(けつろん)", src:"conclusion", pos:"noun", gender:null,
     note:"結(けつ) (tie/conclude) + 論(ろん) (argument/theory).\n結論(けつろん)として = as a conclusion.",
     example:"A: 結論(けつろん)として、教育(きょういく)改革(かいかく)が必要(ひつよう)です。\nB: 今日(きょう)の発表(はっぴょう)、ありがとうございました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: In conclusion, educational reform is necessary.\nB: Thank you for today's presentation.\nA: How was it?\nB: It was very good.",
     funFact:"結論 combines 結 (tie/bind) and 論 (argument). Like tying together loose threads. The pattern 結論(けつろん)として (as a conclusion) or 最後(さいご)に (lastly) signals the wrap-up. Japanese essays traditionally end with a strong conclusion that circles back to the opening, creating a satisfying sense of closure."},

    {type:"teach", trg:"研究(けんきゅう)", src:"research / study / investigation", pos:"noun", gender:null,
     note:"研(けん) (polish/sharpen) + 究(きゅう) (investigate).\n研究(けんきゅう)する = to research.",
     example:"A: この研究(けんきゅう)の結果(けっか)を発表(はっぴょう)します。\nB: 注目(ちゅうもく)されていますね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: I will present the results of this research.\nB: It is getting attention.\nA: When was it?\nB: It was last summer.",
     funFact:"研究 literally means 'polish and investigate.' Japanese academia is renowned for meticulous research. The word appears in university names (研究所(けんきゅうじょ), research institute), academic papers, and news about scientific discoveries. Japan has won numerous Nobel Prizes, reflecting its strong 研究(けんきゅう) tradition."},

    {type:"mc", q:"高齢化(こうれいか)にともなって医療費(いりょうひ)が増(ふ)えている means:", opts:["Aging is caused by medical costs","Medical costs decrease with aging","Along with aging, medical costs are increasing","Aging stopped medical cost increases"], ans:"Along with aging, medical costs are increasing",
     hint:"にともなって links two parallel changes: as one occurs, the other occurs alongside it."},

    {type:"tip", title:"Essay Structure Connectors",
     text:"Introduction:\nはじめに = first of all\nきっかけ = trigger/catalyst\n\nDevelopment:\nにくわえて = in addition to\nにともなって = along with\n言(い)い換(か)えれば = in other words\n\nConclusion:\n結論(けつろん)として = in conclusion\n以上(いじょう)のことから = from the above\nようするに = in short\n\nThese connectors create clear, logical paragraph structure:\nはじめに (topic) -> にくわえて/にともなって (evidence) -> 結論(けつろん)として (conclusion).",
     deepDive:{title:"Japanese Essay Structure: 序論・本論・結論",
      text:"Formal Japanese essays follow three parts:\n\n序論(じょろん) (introduction): state the topic and your position.\nはじめに, きっかけ, について are used here.\n\n本論(ほんろん) (main argument): present evidence and reasoning.\nにくわえて, にともなって, 言(い)い換(か)えれば, いっぽうで are used here.\n\n結論(けつろん) (conclusion): summarize and restate.\n結論(けつろん)として, 以上(いじょう)のことから, ようするに are used here.\n\nJLPT N2 and N1 essay sections test your ability to use these connectors appropriately. Practicing this structure is the fastest path to writing improvement."}},

    {type:"match", pairs:[{trg:"はじめに",src:"first of all"},{trg:"言(い)い換(か)えれば",src:"in other words"},{trg:"きっかけ",src:"trigger/catalyst"},{trg:"結論(けつろん)",src:"conclusion"}]},

    {type:"fb", s:"残業(ざんぎょう){1}、週末(しゅうまつ)出勤(しゅっきん)もあります。\n(In addition to overtime, there is also weekend work.)", a:"にくわえて", opts:["にくわえて","にともなって","について","にたいして"], sSrc:"In addition to overtime, there is also weekend work.",
     hint:"The formal connector meaning 'in addition to,' using the verb 加える (to add)."},

    {type:"match", pairs:[{trg:"をきっかけに",src:"triggered by"},{trg:"にともなって",src:"along with"},{trg:"にくわえて",src:"in addition to"},{trg:"労働力(ろうどうりょく)",src:"labor force"}]},

    {type:"mc", q:"結論(けつろん)として signals:", opts:["The beginning of an essay","A change of topic","The conclusion of an argument","A question"], ans:"The conclusion of an argument",
     hint:"This phrase wraps up a logical a..., drawing everything together into a final statement."},
  ]
};
export default BATCH2_L_1;
