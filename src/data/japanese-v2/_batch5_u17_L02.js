// Unit 17 Batch 5 Lesson 2: かのうのうけみ (Potential Passive & Spontaneous Passive)
const BATCH5_L_2 = {
  id:"jav2_u17l_b5_2", title:"かのうのうけみ", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"かのうのうけみ",
     desc:"Beyond direct and adversity passive, Japanese has spontaneous passive: actions that happen naturally or are perceived emotionally. 'This poem is thought to be...' or 'It is believed that...' These patterns are common in writing and formal speech, and overlap with the potential form for Group 2 verbs.",
     goals:["Use passive for spontaneous perception and belief","Understand passive in formal descriptions and evaluations","Distinguish passive, potential, and spontaneous meanings"]},

    {type:"teach", trg:"おもわれる", src:"to be thought / it seems / one feels", pos:"verb", gender:null,
     note:"Passive of おもう. Spontaneous meaning: a thought arises naturally.\nKanji: 思われる. Common in formal writing.",
     example:"A: このけいかくはせいこうするとおもわれます。\nB: わたしもそうおもいます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: This plan is thought likely to succeed.\nB: I think so too.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"思われる has three uses: (1) passive (I am thought of by others), (2) spontaneous (a feeling arises naturally), (3) honorific (you think, polite). The spontaneous use is most common in formal writing: considered, believed, felt. It softens statements by removing the speaker as the active thinker."},

    {type:"teach", trg:"かんがえられる", src:"to be considered / it is conceivable", pos:"verb", gender:null,
     note:"Passive of かんがえる. Used for objective analysis and formal reasoning.\nKanji: 考えられる.",
     example:"A: げんいんはいくつかかんがえられます。\nB: ぐたいてきにどのようなげんいんですか？\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Several causes are conceivable.\nB: Specifically what kind of causes?\nA: How long did it take?\nB: About two hours.",
     funFact:"考えられる is essential academic Japanese. Research papers use it constantly: 'It can be considered that...' or 'It is conceivable that...' The passive creates objective distance. Instead of 'I think X causes Y,' scientists write 'X is considered to cause Y.' This passive-heavy style defines Japanese academic writing."},

    {type:"teach", trg:"みとめられる", src:"to be recognized / to be acknowledged", pos:"verb", gender:null,
     note:"Passive of みとめる (to recognize). せかいてきにみとめられている = internationally recognized.\nKanji: 認められる.",
     example:"A: かのじょのさいのうはせかいてきにみとめられています。\nB: すばらしいことですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Her talent is recognized internationally.\nB: That is wonderful.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"認められる carries deep weight in Japanese culture, where group recognition matters enormously. Being みとめられた by peers, superiors, or society validates one's efforts. The kanji 認 combines 言 (word) and 忍 (endure), suggesting recognition comes after patient endurance."},

    {type:"teach", trg:"しんじられる", src:"to be believed / it is believable / I cannot believe it", pos:"verb", gender:null,
     note:"Passive of しんじる (to believe). しんじられない = unbelievable.\nKanji: 信じられる.",
     example:"A: しんじられないほどきれいなけしきでした。\nB: しゃしんをみせてください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The scenery was unbelievably beautiful.\nB: Please show me photos.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"信じられない (unbelievable) is used constantly in everyday speech for positive surprise. It literally means 'it cannot be believed.' This negative potential-passive is one of the most common exclamations. TV shows use it for dramatic reactions. The kanji 信 also appears in 信用 (trust) and 信号 (signal)."},

    {type:"mc", q:"このけいかくはせいこうするとおもわれます means:", opts:["This plan is thought likely to succeed","I think about success","The plan thinks it will succeed","Someone thought of a plan"], ans:"This plan is thought likely to succeed",
     hint:"The spontaneous passive of おもう creates an impersonal, objective statement."},

    {type:"teach", trg:"うたがわれる", src:"to be suspected / to be doubted", pos:"verb", gender:null,
     note:"Passive of うたがう (to doubt/suspect). Kanji: 疑われる.\nはんにんとうたがわれている = suspected of being the criminal.",
     example:"A: かれはよこりょうのうたがいでうたがわれています。\nB: まだかくていではないんですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: He is suspected of embezzlement.\nB: It is not confirmed yet, right?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"疑われる appears in both legal and medical contexts. In court, うたがわしきはばっせず (when in doubt, do not punish) is a fundamental principle. In medicine, がんがうたがわれる (cancer is suspected) means further testing is needed. The kanji 疑 shows a person looking back hesitantly."},

    {type:"teach", trg:"きたいされる", src:"to be expected / to be anticipated", pos:"verb", gender:null,
     note:"Passive of きたいする (to expect). おおいにきたいされている = highly anticipated.\nKanji: 期待される.",
     example:"A: わかいせんしゅのかつやくがきたいされています。\nB: オリンピックがたのしみですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: The young athletes' performance is highly anticipated.\nB: The Olympics will be exciting.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"期待される is how Japanese media describes promising people and projects. A rising star is 期待の新人 (kitai no shinjin, anticipated newcomer). The passive emphasizes that expectations come from society, not one individual. Being きたいされている can be both encouraging and pressuring in Japan's group-oriented culture."},

    {type:"teach", trg:"ひょうかされる", src:"to be evaluated / to be appraised", pos:"verb", gender:null,
     note:"Passive of ひょうかする (to evaluate). たかくひょうかされる = to be highly rated.\nKanji: 評価される.",
     example:"A: このえいがはひひょうかからたかくひょうかされています。\nB: みてみたいですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This film is highly rated by critics.\nB: I would like to see it.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"評価される is used in education, business, and art criticism. Japanese schools use ひょうか for grading. Companies have 人事評価 (jinji hyouka, personnel evaluation). The passive shifts focus to how something is received rather than who judges it. たかくひょうかされる (highly rated) is the standard phrase for critical acclaim."},

    {type:"tip", title:"Passive for Objectivity in Writing",
     text:"Japanese formal writing heavily uses passive to sound objective:\n\nおもわれる = it is thought (vs. おもう = I think)\nかんがえられる = it is considered\nきたいされる = it is expected\nみとめられる = it is recognized\n\nThis creates distance between the writer and the claim. Academic papers almost never use わたしはおもう (I think). Instead: と おもわれる (it is thought that...) or とかんがえられる (it can be considered that...).\n\nNews reports use the same strategy:\nはんにんはにげたとみられる = the criminal is seen to have escaped.",
     deepDive:{title:"Passive-Heavy Writing Style",
      text:"Japanese academic and journalistic style uses passive far more than English does. Compare:\n\nEnglish: 'Researchers found that...'\nJapanese: '...ということがあきらかにされた' (it was made clear that...)\n\nEnglish: 'We believe this approach works.'\nJapanese: 'このアプローチはゆうこうであるとかんがえられる' (this approach is considered effective)\n\nThe passive removes the actor, creating objectivity. This is not considered awkward in Japanese the way 'it is believed' sometimes sounds in English. It is the expected register for formal writing."}},

    {type:"teach", trg:"のぞまれる", src:"to be desired / to be wished for", pos:"verb", gender:null,
     note:"Passive of のぞむ (to desire/wish). はやいかいけつがのぞまれる = a swift resolution is desired.\nKanji: 望まれる.",
     example:"A: こくみんからせいふにたいしてはやいたいおうがのぞまれています。\nB: せいじかたちはどうこたえるでしょうか。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: A swift response from the government is desired by the people.\nB: How will the politicians respond?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"望まれる is the language of editorials and policy discussions. The kanji 望 shows a figure standing on a raised platform (王) looking at the moon (月), expressing longing from a high vantage point. In formal Japanese, のぞまれる expresses collective wishes without naming any specific person."},

    {type:"teach", trg:"あきらかにされる", src:"to be made clear / to be revealed", pos:"verb", gender:null,
     note:"Passive of あきらかにする (to clarify/reveal). Research results being revealed.\nKanji: 明らかにされる.",
     example:"A: ちょうさのけっかがあきらかにされました。\nB: どのようなけっかでしたか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The results of the investigation were revealed.\nB: What kind of results were they?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"明らかにされる is standard in research reporting. 明 combines 日 (sun) and 月 (moon), meaning brightness and clarity. Academic papers end sections with findings being 明らかにされた (clarified/revealed). This passive construction is so common in Japanese research papers that it has become almost formulaic."},

    {type:"fb", s:"かのじょのさいのうはせかいてきに{1}います。\n(Her talent is recognized internationally.)", a:"みとめられて", opts:["みとめられて","みとめて","みとめ","みとめさせて"], sSrc:"Her talent is recognized internationally.",
     hint:"The passive of みとめる (to recognize) in the progressive form."},

    {type:"teach", trg:"さいのう", src:"talent / ability / gift", pos:"noun", gender:null,
     note:"Kanji: 才能. さいのうがある = to have talent.\nさいのうをいかす = to make use of one's talent.",
     example:"A: おんがくのさいのうがあるんですね。\nB: こどものころからピアノをひいています。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: You have a talent for music.\nB: I have been playing piano since childhood.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"才能 combines 才 (talent) and 能 (ability). Japanese culture has a complex view of talent: the word 天才 (tensai, genius) literally means 'heaven-given talent,' but the proverb 天才は1%のひらめきと99%のどりょく (genius is 1% inspiration and 99% effort) reflects the belief that hard work matters more than innate ability."},

    {type:"teach", trg:"ちゅうもくされる", src:"to be attracting attention / to be noticed", pos:"verb", gender:null,
     note:"Passive of ちゅうもくする (to pay attention). せかいからちゅうもくされている = attracting global attention.\nKanji: 注目される.",
     example:"A: このぎじゅつはせかいからちゅうもくされています。\nB: にほんはつのぎじゅつですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: This technology is attracting attention from around the world.\nB: Is it a technology originating from Japan?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"注目される is media language for trending topics. 注 means 'pour' and 目 means 'eye,' so 注目 literally means 'pouring eyes onto something.' The passive される shows that attention comes from many people. News anchors say ちゅうもくされている when introducing a trending story."},

    {type:"mc", q:"しんじられないほどきれい means:", opts:["Unbelievably beautiful","I believe it is beautiful","It was not beautiful","Beautifully believable"], ans:"Unbelievably beautiful",
     hint:"The negative potential-passive of しんじる means 'cannot be believed.' Combined with ほど (to the extent that)."},

    {type:"match", pairs:[{trg:"おもわれる",src:"it is thought"},{trg:"きたいされる",src:"it is expected"},{trg:"ひょうかされる",src:"it is evaluated"},{trg:"ちゅうもくされる",src:"it is attracting attention"}]},

    {type:"fb", s:"げんいんはいくつか{1}ます。\n(Several causes are conceivable.)", a:"かんがえられ", opts:["かんがえられ","かんがえて","かんがえ","かんがえさせ"], sSrc:"Several causes are conceivable.",
     hint:"The passive-spontaneous form of かんがえる (to consider/think). Group 2 passive: stem + られる."},

    {type:"mc", q:"ひひょうかからたかくひょうかされている means:", opts:["It is highly rated by critics","Critics are being evaluated","Critics gave a low rating","Someone evaluated the critics"], ans:"It is highly rated by critics",
     hint:"ひひょうか (c...) + から (by) + たかく (h...) + ひょうかされている (is being evaluated/r...)."}
  ]
};
export default BATCH5_L_2;
