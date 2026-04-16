// Unit 24 Batch 2 Lesson 1: ぶんしょうこうぞう (Essay & Paragraph Structure)
const BATCH2_L_1 = {
  id:"jav2_u24l_b2_1", title:"ぶんしょうこうぞう", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうこうぞう",
     desc:"Structured writing requires connectors that signal paragraph roles. Learn words that introduce topics, signal transitions, present evidence, and draw conclusions. These are essential for JLPT essays and formal writing.",
     goals:["Use paragraph-opening connectors for introductions","Signal topic shifts and transitions smoothly","Structure conclusions with appropriate markers"]},

    {type:"teach", trg:"はじめに", src:"first of all / to begin with / introduction", pos:"adv", gender:null,
     note:"はじめ (beginning) + に (at/in). Used to open essays and presentations.\nMore formal than まず.",
     example:"A: はじめに、このけんきゅうのはいけいをせつめいします。\nB: おねがいします。",
     exampleSrc:"A: First, I will explain the background of this research.\nB: Please go ahead.",
     funFact:"はじめに is the standard essay and presentation opener. Japanese formal writing follows a clear structure: はじめに (introduction), 次に (next points), 最後に (conclusion). This parallels the traditional 起承転結 (ki-shou-ten-ketsu: introduction, development, twist, conclusion) narrative structure."},

    {type:"teach", trg:"いいかえれば", src:"in other words / to put it another way", pos:"conj", gender:null,
     note:"いいかえる (to rephrase) + ば (if). Literally: if one rephrases.\nMore formal than つまり.",
     example:"A: じんこうがへっています。いいかえれば、ろうどうりょくがぶそくします。\nB: なるほど、そういうことですね。",
     exampleSrc:"A: The population is decreasing. In other words, the labor force will be insufficient.\nB: I see, that is what you mean.",
     funFact:"いいかえれば is the more formal alternative to つまり for rephrasing. It uses the ば conditional of いいかえる (to rephrase): 'if one were to rephrase...' Academic papers and presentations prefer this form. It signals that the speaker is about to translate a complex idea into simpler or different terms."},

    {type:"teach", trg:"きっかけ", src:"trigger / catalyst / opportunity that started something", pos:"noun", gender:null,
     note:"The event or moment that set something in motion.\nにほんごをはじめたきっかけ = what started you learning Japanese.",
     example:"A: にほんごをべんきょうしたきっかけはなんですか？\nB: アニメをみたことがきっかけです。",
     exampleSrc:"A: What was the trigger for studying Japanese?\nB: Watching anime was the catalyst.",
     funFact:"きっかけ is a favorite interview and essay prompt. Japanese love asking about きっかけ because it reveals personal stories. 'What was the きっかけ for...' is one of the most common questions in Japanese conversation. It implies that every significant action has an origin story worth hearing."},

    {type:"teach", trg:"〜をきっかけに", src:"triggered by ~ / starting from ~", pos:"part", gender:null,
     note:"Noun + をきっかけに = using X as the trigger/catalyst.\nConnects a catalyst event to its result.",
     example:"A: りゅうがくをきっかけに、にほんにきょうみをもちました。\nB: すてきなきっかけですね。",
     exampleSrc:"A: Studying abroad triggered my interest in Japan.\nB: What a wonderful catalyst.",
     funFact:"をきっかけに creates a narrative link between an event and its consequence. It is standard in personal essays, interview answers, and autobiographical writing. The pattern suggests that one moment changed the trajectory of something, making it a powerful storytelling device."},

    {type:"mc", q:"はじめに is used to:", opts:["End an essay","Open an essay or presentation","Express disagreement","Ask a question"], ans:"Open an essay or presentation",
     hint:"This formal connector signals the beginning of a structured piece of writing or speaking."},

    {type:"teach", trg:"ろうどうりょく", src:"labor force / workforce", pos:"noun", gender:null,
     note:"ろうどう (labor) + りょく (power/force). Kanji: 労働力.\nろうどうりょくぶそく = labor shortage.",
     example:"A: ろうどうりょくがへっています。\nB: いみんのうけいれがひつようかもしれません。",
     exampleSrc:"A: The labor force is decreasing.\nB: Accepting immigrants might be necessary.",
     funFact:"労働力 is a key economic term. 労働 means 'labor' (combining 労 'toil' and 働 'work'), and 力 means 'power.' Japan's shrinking workforce is driving automation, AI adoption, and immigration debates. The term appears daily in economic news, policy discussions, and academic papers."},

    {type:"teach", trg:"〜にともなって", src:"along with ~ / accompanying ~ / as ~ occurs", pos:"part", gender:null,
     note:"Noun/verb + にともなって = accompanying that change.\nKanji: に伴って. Describes parallel developments.",
     example:"A: こうれいかにともなって、いりょうひがふえています。\nB: しんこくなもんだいですね。",
     exampleSrc:"A: Along with aging, medical costs are increasing.\nB: It is a serious problem.",
     funFact:"にともなって links two changes that occur together. 伴う means 'to accompany,' so the pattern says 'accompanying X, Y also happens.' It is common in economic and social analysis: population decline + labor shortage, aging + medical costs. JLPT N2 reading passages love this connector."},

    {type:"fb", s:"りゅうがく{1}に、にほんにきょうみをもちました。\n(Studying abroad triggered my interest in Japan.)", a:"をきっかけ", opts:["をきっかけ","について","にたいして","にともなって"], sSrc:"Studying abroad triggered my interest in Japan.",
     hint:"The phrase that connects a catalyst event to its result, using the noun for 'trigger.'"},

    {type:"teach", trg:"〜にくわえて", src:"in addition to ~ / on top of ~", pos:"part", gender:null,
     note:"Noun + にくわえて = adding X to the existing situation.\nKanji: に加えて. More formal than そのうえ.",
     example:"A: ざんぎょうにくわえて、しゅうまつしゅっきんもあります。\nB: たいへんですね。からだにきをつけてください。",
     exampleSrc:"A: In addition to overtime, there is also weekend work.\nB: That is tough. Please take care of your health.",
     funFact:"にくわえて uses 加える (to add) and functions as a formal addition connector. While そのうえ (moreover) adds a new point, にくわえて specifically adds to something already stated. It is the connector for piling on evidence or complaints: 'X, and on top of that, Y.'"},

    {type:"teach", trg:"けっろん", src:"conclusion", pos:"noun", gender:null,
     note:"Kanji: 結論. けつ (tie/conclude) + ろん (argument/theory).\nけっろんとして = as a conclusion.",
     example:"A: けっろんとして、きょういくかいかくがひつようです。\nB: きょうのはっぴょう、ありがとうございました。",
     exampleSrc:"A: In conclusion, educational reform is necessary.\nB: Thank you for today's presentation.",
     funFact:"結論 combines 結 (tie/bind) and 論 (argument). Like tying together loose threads. The pattern けっろんとして (as a conclusion) or さいごに (lastly) signals the wrap-up. Japanese essays traditionally end with a strong conclusion that circles back to the opening, creating a satisfying sense of closure."},

    {type:"teach", trg:"けんきゅう", src:"research / study / investigation", pos:"noun", gender:null,
     note:"Kanji: 研究. けん (polish/sharpen) + きゅう (investigate).\nけんきゅうする = to research.",
     example:"A: このけんきゅうのけっかをはっぴょうします。\nB: ちゅうもくされていますね。",
     exampleSrc:"A: I will present the results of this research.\nB: It is getting attention.",
     funFact:"研究 literally means 'polish and investigate.' Japanese academia is renowned for meticulous research. The word appears in university names (研究所, kenkyuujo, research institute), academic papers, and news about scientific discoveries. Japan has won numerous Nobel Prizes, reflecting its strong 研究 tradition."},

    {type:"mc", q:"こうれいかにともなっていりょうひがふえている means:", opts:["Aging is caused by medical costs","Medical costs decrease with aging","Along with aging, medical costs are increasing","Aging stopped medical cost increases"], ans:"Along with aging, medical costs are increasing",
     hint:"にともなって links two parallel changes: as one occurs, the other occurs alongside it."},

    {type:"tip", title:"Essay Structure Connectors",
     text:"Introduction:\nはじめに = first of all\nきっかけ = trigger/catalyst\n\nDevelopment:\nにくわえて = in addition to\nにともなって = along with\nいいかえれば = in other words\n\nConclusion:\nけっろんとして = in conclusion\nいじょうのことから = from the above\nようするに = in short\n\nThese connectors create clear, logical paragraph structure:\nはじめに (topic) -> にくわえて/にともなって (evidence) -> けっろんとして (conclusion).",
     deepDive:{title:"Japanese Essay Structure: 序論・本論・結論",
      text:"Formal Japanese essays follow three parts:\n\n序論 (joron, introduction): state the topic and your position.\nはじめに, きっかけ, について are used here.\n\n本論 (honron, main argument): present evidence and reasoning.\nにくわえて, にともなって, いいかえれば, いっぽうで are used here.\n\n結論 (ketsuron, conclusion): summarize and restate.\nけっろんとして, いじょうのことから, ようするに are used here.\n\nJLPT N2 and N1 essay sections test your ability to use these connectors appropriately. Practicing this structure is the fastest path to writing improvement."}},

    {type:"match", pairs:[{trg:"はじめに",src:"first of all"},{trg:"いいかえれば",src:"in other words"},{trg:"きっかけ",src:"trigger/catalyst"},{trg:"けっろん",src:"conclusion"}]},

    {type:"fb", s:"ざんぎょう{1}、しゅうまつしゅっきんもあります。\n(In addition to overtime, there is also weekend work.)", a:"にくわえて", opts:["にくわえて","にともなって","について","にたいして"], sSrc:"In addition to overtime, there is also weekend work.",
     hint:"The formal connector meaning 'in addition to,' using the verb 加える (to add)."},

    {type:"match", pairs:[{trg:"をきっかけに",src:"triggered by"},{trg:"にともなって",src:"along with"},{trg:"にくわえて",src:"in addition to"},{trg:"ろうどうりょく",src:"labor force"}]},

    {type:"mc", q:"けっろんとして signals:", opts:["The beginning of an essay","A change of topic","The conclusion of an argument","A question"], ans:"The conclusion of an argument",
     hint:"This phrase wraps up a logical a..., drawing everything together into a final statement."},
  ]
};
export default BATCH2_L_1;
