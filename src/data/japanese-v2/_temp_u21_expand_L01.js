// Unit 21 Expansion. Lesson 3: ほうどうのことば (Media Language)
const LESSON_3 = {
  id:"jav2_u21l3", title:"ほうどうのことば", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうどうのことば",
     desc:"Expand your news vocabulary with words for reporting, broadcasting, and media. Learn how journalists describe events and how information is communicated through newspapers, television, and online sources in Japan.",
     goals:["Learn reporting and broadcasting vocabulary","Understand media-related expressions","Discuss news coverage and information sources"]},

    {type:"teach", trg:"ほうどう", src:"news report / coverage / reporting", pos:"noun", gender:null,
     note:"Kanji: 報道. ほう (report) + どう (way/guide).\nほうどうする = to report/cover (a story).",
     example:"A: このじけんについてほうどうがありましたか？\nB: はい、けさのニュースでほうどうされていました。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Was there any reporting on this incident?\nB: Yes, it was covered on this morning's news.\nA: How long did it take?\nB: About two hours.",
     funFact:"報道 is the professional term for journalism and news reporting. Japan has press clubs (記者クラブ, kisha kurabu) attached to government offices and major organizations. These exclusive groups control which reporters get access to officials. The system has been both praised for order and criticized for limiting press freedom."},

    {type:"teach", trg:"きじ", src:"article / news story", pos:"noun", gender:null,
     note:"Kanji: 記事. き (record) + じ (thing/matter).\nしんぶんのきじ = newspaper article.",
     example:"A: おもしろいきじをよみました。\nB: どんなきじですか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I read an interesting article.\nB: What kind of article?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"記事 combines 記 (write/record) and 事 (matter). Japanese newspapers have incredibly high readership: the Yomiuri Shimbun was once the world's most-circulated newspaper. Morning editions (朝刊, choukan) and evening editions (夕刊, yuukan) are still delivered to millions of homes daily."},

    {type:"teach", trg:"しんぶん", src:"newspaper", pos:"noun", gender:null,
     note:"Kanji: 新聞. しん (new) + ぶん (hear/listen).\nしんぶんをよむ = to read the newspaper.",
     example:"A: まいあさしんぶんをよみますか？\nB: いいえ、さいきんはネットでニュースをみます。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Do you read the newspaper every morning?\nB: No, recently I read news online.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"新聞 literally means 'new things heard.' Japan's major newspapers include Yomiuri, Asahi, Mainichi, Nikkei, and Sankei. Japanese newspapers are printed vertically and read right to left. Home delivery is still common, with dedicated delivery workers making rounds before dawn."},

    {type:"teach", trg:"ざっし", src:"magazine", pos:"noun", gender:null,
     note:"Kanji: 雑誌. ざつ (miscellaneous) + し (record).\nCombines various topics into one publication.",
     example:"A: どんなざっしをよみますか？\nB: りょこうのざっしがすきです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: What kind of magazines do you read?\nB: I like travel magazines.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"雑誌 literally means 'miscellaneous records.' Japan's magazine culture is enormous, with specialized publications for nearly every hobby and interest. Convenience stores dedicate entire walls to magazines. Weekly manga magazines like Shonen Jump sell millions of copies."},

    {type:"mc", q:"ほうどう means:", opts:["newspaper","news coverage/reporting","magazine","advertisement"], ans:"news coverage/reporting",
     hint:"This word refers to the professional act of journalism and broadcasting stories."},

    {type:"teach", trg:"はんたい", src:"opposition / opposite / against", pos:"noun", gender:null,
     note:"Kanji: 反対. はん (anti) + たい (confront).\nはんたいする = to oppose. はんたいいけん = opposing view.",
     example:"A: このけいかくにはんたいするひとがおおいです。\nB: なぜはんたいしているのですか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Many people oppose this plan.\nB: Why are they opposing it?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"反対 is used for both physical opposites (はんたいがわ = opposite side) and opinion-based opposition. In Japanese politics, the opposition party is called やとう (野党). Public protests (デモ, from 'demonstration') have a long history in Japan, though they tend to be orderly compared to other countries."},

    {type:"teach", trg:"さんせい", src:"agreement / approval / in favor", pos:"noun", gender:null,
     note:"Kanji: 賛成. さん (praise/support) + せい (become/achieve).\nさんせいする = to agree/approve.",
     example:"A: このあんにさんせいですか？\nB: はい、わたしはさんせいです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Do you agree with this proposal?\nB: Yes, I am in favor.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"賛成 is the natural pair of 反対. In meetings and parliament, votes are often taken by asking さんせいのかた (those in favor) and はんたいのかた (those against). The word 賛 contains 貝 (shell/money), reflecting that ancient support often came with financial backing."},

    {type:"teach", trg:"ちょうさ", src:"investigation / survey / research", pos:"noun", gender:null,
     note:"Kanji: 調査. ちょう (investigate) + さ (examine).\nちょうさする = to investigate. よろんちょうさ = opinion poll.",
     example:"A: よろんちょうさのけっかがでました。\nB: どんなけっかでしたか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The results of the opinion poll are out.\nB: What were the results?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"調査 appears constantly in Japanese news. よろんちょうさ (public opinion surveys) are conducted frequently by major newspapers. The two kanji 調 (tune/investigate) and 査 (inspect) together suggest a thorough, methodical examination. Japan is known for meticulous data collection."},

    {type:"fb", s:"おもしろい{1}をよみました。\n(I read an interesting article.)", a:"きじ", opts:["きじ","しんぶん","ほうどう","ざっし"], sSrc:"I read an interesting article.",
     hint:"The word for a specific written news story or report in a publication."},

    {type:"teach", trg:"はっぴょうする", src:"to announce / to present / to publish", pos:"verb", gender:null,
     note:"する-verb. はっぴょう = announcement/presentation. Kanji: 発表する.\nはつ (emit) + ぴょう (surface/show).",
     example:"A: せいふがあたらしいたいさくをはっぴょうしました。\nB: どんなたいさくですか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: The government announced new countermeasures.\nB: What kind of countermeasures?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"発表 covers announcements, academic presentations, press releases, and publication of results. School children do はっぴょう (show-and-tell/presentations) regularly. The word literally means 'emit to the surface,' bringing hidden information into public view."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響. えい (shadow) + きょう (echo).\nえいきょうをあたえる = to have an influence.",
     example:"A: たいふうがけいざいにえいきょうをあたえました。\nB: どのくらいのえいきょうですか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: The typhoon had an impact on the economy.\nB: How much of an impact?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"影響 is beautifully metaphorical: 影 (shadow) + 響 (echo). An influence is a shadow that echoes outward. The word captures how events ripple through society. News reports use えいきょう constantly to describe how disasters, policies, and global events affect daily life."},

    {type:"teach", trg:"じょうほう", src:"information", pos:"noun", gender:null,
     note:"Kanji: 情報. じょう (emotion/situation) + ほう (report).\nじょうほうをあつめる = to gather information.",
     example:"A: インターネットでじょうほうをあつめました。\nB: しんらいできるじょうほうですか？\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: I gathered information on the internet.\nB: Is it trustworthy information?\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"情報 originally meant military intelligence. Today it is the standard word for 'information' in all contexts. じょうほうしゃかい (information society) and IT (じょうほうぎじゅつ) use this word. The kanji 情 (feeling/situation) + 報 (report) suggest that information carries both facts and context."},

    {type:"mc", q:"はんたい is the opposite of:", opts:["ほうどう","ちょうさ","さんせい","じょうほう"], ans:"さんせい",
     hint:"One means opposition; its natural pair means agreement or approval."},

    {type:"match", pairs:[{trg:"ほうどう",src:"news coverage"},{trg:"きじ",src:"article"},{trg:"しんぶん",src:"newspaper"},{trg:"ざっし",src:"magazine"}]},

    {type:"match", pairs:[{trg:"はんたい",src:"opposition"},{trg:"さんせい",src:"agreement"},{trg:"ちょうさ",src:"investigation"},{trg:"はっぴょうする",src:"to announce"}]},

    {type:"fb", s:"せいふがあたらしいたいさくを{1}しました。\n(The government announced new countermeasures.)", a:"はっぴょう", opts:["はっぴょう","ちょうさ","ほうどう","はんたい"], sSrc:"The government announced new countermeasures.",
     hint:"The word for making an official public statement or presenting results."},

    {type:"mc", q:"えいきょう means:", opts:["investigation","influence/impact","announcement","agreement"], ans:"influence/impact",
     hint:"The kanji combine 'shadow' and 'echo,' describing how something ripples outward."},

    {type:"match", pairs:[{trg:"えいきょう",src:"influence"},{trg:"じょうほう",src:"information"},{trg:"ちょうさ",src:"survey/research"},{trg:"ほうどう",src:"reporting"}]},
  ]
};
export default LESSON_3;
