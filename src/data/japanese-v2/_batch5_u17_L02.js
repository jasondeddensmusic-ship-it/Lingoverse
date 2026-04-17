// Unit 17 Batch 5 Lesson 2: 可能(かのう)の受(う)け身(み) (Potential Passive & Spontaneous Passive)
const BATCH5_L_2 = {
  id:"jav2_u17l_b5_2", title:"可能(かのう)の受(う)け身(み)", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"可能(かのう)の受(う)け身(み)",
     desc:"Beyond direct and adversity passive, Japanese has spontaneous passive: actions that happen naturally or are perceived emotionally. 'This poem is thought to be...' or 'It is believed that...' These patterns are common in writing and formal speech, and overlap with the potential form for Group 2 verbs.",
     goals:["Use passive for spontaneous perception and belief","Understand passive in formal descriptions and evaluations","Distinguish passive, potential, and spontaneous meanings"]},

    {type:"teach", trg:"思(おも)われる", src:"to be thought / it seems / one feels", pos:"verb", gender:null,
     note:"Passive of 思(おも)う. Spontaneous meaning: a thought arises naturally.\nKanji: 思(おも)われる. Common in formal writing.",
     example:"A: この計画(けいかく)は成功(せいこう)すると思(おも)われます。\nB: 私(わたし)もそう思(おも)います。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: This plan is thought likely to succeed.\nB: I think so too.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"思(おも)われる has three uses: (1) passive (I am thought of by others), (2) spontaneous (a feeling arises naturally), (3) honorific (you think, polite). The spontaneous use is most common in formal writing: considered, believed, felt. It softens statements by removing the speaker as the active thinker."},

    {type:"teach", trg:"考(かんが)えられる", src:"to be considered / it is conceivable", pos:"verb", gender:null,
     note:"Passive of 考(かんが)える. Used for objective analysis and formal reasoning.\nKanji: 考(かんが)えられる.",
     example:"A: 原因(げんいん)はいくつか考(かんが)えられます。\nB: 具体的(ぐたいてき)にどのような原因(げんいん)ですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Several causes are conceivable.\nB: Specifically what kind of causes?\nA: How long did it take?\nB: About two hours.",
     funFact:"考(かんが)えられる is essential academic Japanese. Research papers use it constantly: 'It can be considered that...' or 'It is conceivable that...' The passive creates objective distance. Instead of 'I think X causes Y,' scientists write 'X is considered to cause Y.' This passive-heavy style defines Japanese academic writing."},

    {type:"teach", trg:"認(みと)められる", src:"to be recognized / to be acknowledged", pos:"verb", gender:null,
     note:"Passive of 認(みと)める (to recognize). 世界的(せかいてき)に認(みと)められている = internationally recognized.\nKanji: 認(みと)められる.",
     example:"A: 彼女(かのじょ)の才能(さいのう)は世界的(せかいてき)に認(みと)められています。\nB: 素晴(すば)らしいことですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Her talent is recognized internationally.\nB: That is wonderful.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"認(みと)められる carries deep weight in Japanese culture, where group recognition matters enormously. Being 認(みと)められた by peers, superiors, or society validates one's efforts. The kanji 認 combines 言 (word) and 忍 (endure), suggesting recognition comes after patient endurance."},

    {type:"teach", trg:"信(しん)じられる", src:"to be believed / it is believable / I cannot believe it", pos:"verb", gender:null,
     note:"Passive of 信(しん)じる (to believe). 信(しん)じられない = unbelievable.\nKanji: 信(しん)じられる.",
     example:"A: 信(しん)じられないほどきれいな景色(けしき)でした。\nB: 写真(しゃしん)を見(み)せてください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The scenery was unbelievably beautiful.\nB: Please show me photos.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"信(しん)じられない (unbelievable) is used constantly in everyday speech for positive surprise. It literally means 'it cannot be believed.' This negative potential-passive is one of the most common exclamations. TV shows use it for dramatic reactions. The kanji 信 also appears in 信用(しんよう) (trust) and 信号(しんごう) (signal)."},

    {type:"mc", q:"この計画(けいかく)は成功(せいこう)すると思(おも)われます means:", opts:["This plan is thought likely to succeed","I think about success","The plan thinks it will succeed","Someone thought of a plan"], ans:"This plan is thought likely to succeed",
     hint:"The spontaneous passive of 思(おも)う creates an impersonal, objective statement."},

    {type:"teach", trg:"疑(うたが)われる", src:"to be suspected / to be doubted", pos:"verb", gender:null,
     note:"Passive of 疑(うたが)う (to doubt/suspect). Kanji: 疑(うたが)われる.\n犯人(はんにん)と疑(うたが)われている = suspected of being the criminal.",
     example:"A: 彼(かれ)は横領(おうりょう)の疑(うたが)いで疑(うたが)われています。\nB: まだ確定(かくてい)ではないんですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: He is suspected of embezzlement.\nB: It is not confirmed yet, right?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"疑(うたが)われる appears in both legal and medical contexts. In court, 疑(うたが)わしきは罰(ばっ)せず (when in doubt, do not punish) is a fundamental principle. In medicine, がんが疑(うたが)われる (cancer is suspected) means further testing is needed. The kanji 疑 shows a person looking back hesitantly."},

    {type:"teach", trg:"期待(きたい)される", src:"to be expected / to be anticipated", pos:"verb", gender:null,
     note:"Passive of 期待(きたい)する (to expect). 大(おお)いに期待(きたい)されている = highly anticipated.\nKanji: 期待(きたい)される.",
     example:"A: 若(わか)い選手(せんしゅ)の活躍(かつやく)が期待(きたい)されています。\nB: オリンピックが楽(たの)しみですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: The young athletes' performance is highly anticipated.\nB: The Olympics will be exciting.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"期待(きたい)される is how Japanese media describes promising people and projects. A rising star is 期待(きたい)の新人(しんじん) (anticipated newcomer). The passive emphasizes that expectations come from society, not one individual. Being 期待(きたい)されている can be both encouraging and pressuring in Japan's group-oriented culture."},

    {type:"teach", trg:"評価(ひょうか)される", src:"to be evaluated / to be appraised", pos:"verb", gender:null,
     note:"Passive of 評価(ひょうか)する (to evaluate). 高(たか)く評価(ひょうか)される = to be highly rated.\nKanji: 評価(ひょうか)される.",
     example:"A: この映画(えいが)は批評家(ひひょうか)から高(たか)く評価(ひょうか)されています。\nB: 見(み)てみたいですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This film is highly rated by critics.\nB: I would like to see it.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"評価(ひょうか)される is used in education, business, and art criticism. Japanese schools use 評価(ひょうか) for grading. Companies have 人事評価(じんじひょうか) (personnel evaluation). The passive shifts focus to how something is received rather than who judges it. 高(たか)く評価(ひょうか)される (highly rated) is the standard phrase for critical acclaim."},

    {type:"tip", title:"Passive for Objectivity in Writing",
     text:"Japanese formal writing heavily uses passive to sound objective:\n\n思(おも)われる = it is thought (vs. 思(おも)う = I think)\n考(かんが)えられる = it is considered\n期待(きたい)される = it is expected\n認(みと)められる = it is recognized\n\nThis creates distance between the writer and the claim. Academic papers almost never use 私(わたし)は思(おも)う (I think). Instead: と思(おも)われる (it is thought that...) or と考(かんが)えられる (it can be considered that...).\n\nNews reports use the same strategy:\n犯人(はんにん)は逃(に)げたと見(み)られる = the criminal is seen to have escaped.",
     deepDive:{title:"Passive-Heavy Writing Style",
      text:"Japanese academic and journalistic style uses passive far more than English does. Compare:\n\nEnglish: 'Researchers found that...'\nJapanese: '...ということが明(あき)らかにされた' (it was made clear that...)\n\nEnglish: 'We believe this approach works.'\nJapanese: 'このアプローチは有効(ゆうこう)であると考(かんが)えられる' (this approach is considered effective)\n\nThe passive removes the actor, creating objectivity. This is not considered awkward in Japanese the way 'it is believed' sometimes sounds in English. It is the expected register for formal writing."}},

    {type:"teach", trg:"望(のぞ)まれる", src:"to be desired / to be wished for", pos:"verb", gender:null,
     note:"Passive of 望(のぞ)む (to desire/wish). 早(はや)い解決(かいけつ)が望(のぞ)まれる = a swift resolution is desired.\nKanji: 望(のぞ)まれる.",
     example:"A: 国民(こくみん)から政府(せいふ)に対(たい)して早(はや)い対応(たいおう)が望(のぞ)まれています。\nB: 政治家(せいじか)たちはどう答(こた)えるでしょうか。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: A swift response from the government is desired by the people.\nB: How will the politicians respond?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"望(のぞ)まれる is the language of editorials and policy discussions. The kanji 望 shows a figure standing on a raised platform (王) looking at the moon (月), expressing longing from a high vantage point. In formal Japanese, 望(のぞ)まれる expresses collective wishes without naming any specific person."},

    {type:"teach", trg:"明(あき)らかにされる", src:"to be made clear / to be revealed", pos:"verb", gender:null,
     note:"Passive of 明(あき)らかにする (to clarify/reveal). Research results being revealed.\nKanji: 明(あき)らかにされる.",
     example:"A: 調査(ちょうさ)の結果(けっか)が明(あき)らかにされました。\nB: どのような結果(けっか)でしたか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The results of the investigation were revealed.\nB: What kind of results were they?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"明(あき)らかにされる is standard in research reporting. 明 combines 日 (sun) and 月 (moon), meaning brightness and clarity. Academic papers end sections with findings being 明(あき)らかにされた (clarified/revealed). This passive construction is so common in Japanese research papers that it has become almost formulaic."},

    {type:"fb", s:"彼女(かのじょ)の才能(さいのう)は世界的(せかいてき)に{1}います。\n(Her talent is recognized internationally.)", a:"認(みと)められて", opts:["認(みと)められて","認(みと)めて","認(みと)め","認(みと)めさせて"], sSrc:"Her talent is recognized internationally.",
     hint:"The passive of 認(みと)める (to recognize) in the progressive form."},

    {type:"teach", trg:"才能(さいのう)", src:"talent / ability / gift", pos:"noun", gender:null,
     note:"Kanji: 才能(さいのう). 才能(さいのう)がある = to have talent.\n才能(さいのう)を生(い)かす = to make use of one's talent.",
     example:"A: 音楽(おんがく)の才能(さいのう)があるんですね。\nB: 子供(こども)のころからピアノを弾(ひ)いています。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: You have a talent for music.\nB: I have been playing piano since childhood.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"才能(さいのう) combines 才 (talent) and 能 (ability). Japanese culture has a complex view of talent: the word 天才(てんさい) (genius) literally means 'heaven-given talent,' but the proverb 天才(てんさい)は1%のひらめきと99%の努力(どりょく) (genius is 1% inspiration and 99% effort) reflects the belief that hard work matters more than innate ability."},

    {type:"teach", trg:"注目(ちゅうもく)される", src:"to be attracting attention / to be noticed", pos:"verb", gender:null,
     note:"Passive of 注目(ちゅうもく)する (to pay attention). 世界(せかい)から注目(ちゅうもく)されている = attracting global attention.\nKanji: 注目(ちゅうもく)される.",
     example:"A: この技術(ぎじゅつ)は世界(せかい)から注目(ちゅうもく)されています。\nB: 日本(にほん)発(はつ)の技術(ぎじゅつ)ですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: This technology is attracting attention from around the world.\nB: Is it a technology originating from Japan?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"注目(ちゅうもく)される is media language for trending topics. 注 means 'pour' and 目 means 'eye,' so 注目(ちゅうもく) literally means 'pouring eyes onto something.' The passive される shows that attention comes from many people. News anchors say 注目(ちゅうもく)されている when introducing a trending story."},

    {type:"mc", q:"信(しん)じられないほどきれい means:", opts:["Unbelievably beautiful","I believe it is beautiful","It was not beautiful","Beautifully believable"], ans:"Unbelievably beautiful",
     hint:"The negative potential-passive of 信(しん)じる means 'cannot be believed.' Combined with ほど (to the extent that)."},

    {type:"match", pairs:[{trg:"思(おも)われる",src:"it is thought"},{trg:"期待(きたい)される",src:"it is expected"},{trg:"評価(ひょうか)される",src:"it is evaluated"},{trg:"注目(ちゅうもく)される",src:"it is attracting attention"}]},

    {type:"fb", s:"原因(げんいん)はいくつか{1}ます。\n(Several causes are conceivable.)", a:"考(かんが)えられ", opts:["考(かんが)えられ","考(かんが)えて","考(かんが)え","考(かんが)えさせ"], sSrc:"Several causes are conceivable.",
     hint:"The passive-spontaneous form of 考(かんが)える (to consider/think). Group 2 passive: stem + られる."},

    {type:"mc", q:"批評家(ひひょうか)から高(たか)く評価(ひょうか)されている means:", opts:["It is highly rated by critics","Critics are being evaluated","Critics gave a low rating","Someone evaluated the critics"], ans:"It is highly rated by critics",
     hint:"批評家(ひひょうか) (c...) + から (by) + 高(たか)く (h...) + 評価(ひょうか)されている (is being evaluated/r...)."}
  ]
};
export default BATCH5_L_2;
