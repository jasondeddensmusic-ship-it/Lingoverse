// Batch 8 – Unit 26 (B2.1 News): Media & Journalism Vocabulary
const BATCH8_L1 = {
  id:"jav2_u26l_b8_1", title:"メディアとジャーナリズム", icon:"🗞️", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアとジャーナリズム",
     desc:"Master media and journalism vocabulary for reading news and discussing current events at an advanced level. These JLPT N2 words appear in newspapers and broadcasts daily.",
     goals:["Read and discuss news articles","Understand media terminology","Express opinions on current events"]},

    {type:"teach", trg:"ほうどう", src:"news coverage / reporting / broadcast", pos:"noun", gender:null,
     note:"Kanji: 報道. ほうどうきかん = news organization.\nほうどうのじゆう = freedom of the press.",
     example:"A: このじけんはおおきくほうどうされました。\nB: テレビもしんぶんもとりあげていましたね。",
     exampleSrc:"A: This incident was widely reported.\nB: Both TV and newspapers covered it.",
     funFact:"ほうどう (報道) carries weight and responsibility in Japanese. ほうどうのじゆう (press freedom) rankings consistently place Japan lower than expected for a democracy, due to きしゃクラブ (press clubs) that limit access. ごほうどう (misinformation in reporting) triggers formal apologies from stations."},

    {type:"teach", trg:"とりあげる", src:"to cover / to feature / to pick up (a topic)", pos:"verb", gender:null,
     note:"とる (to take) + あげる (to raise). メディアがとりあげる = media covers.\nAlso: to confiscate.",
     example:"A: SNSでバズったニュースをテレビがとりあげました。\nB: はんきょうがおおきいですね。",
     exampleSrc:"A: TV picked up the news that went viral on social media.\nB: The response is huge.",
     funFact:"とりあげる in media context means 'to pick up and present a topic.' It is a compound verb: とる (take) + あげる (raise). The same verb means 'to confiscate' in other contexts. メディアにとりあげられる (to be featured in media) can be positive or negative depending on the story."},

    {type:"teach", trg:"よろん", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論 (also read せろん). よろんちょうさ = public opinion poll.\nよろんをうごかす = to move public opinion.",
     example:"A: よろんちょうさのけっかがでました。\nB: しじりつはどうですか？",
     exampleSrc:"A: The public opinion poll results are out.\nB: What is the approval rating?",
     funFact:"よろん (世論) has two accepted readings: よろん and せろん. Linguists debate which is correct, but both are used. NHK uses せろん. よろんちょうさ (opinion polls) are conducted by major newspapers (あさひ, よみうり, まいにち) and shape political discourse significantly."},

    {type:"teach", trg:"しゃせつ", src:"editorial / opinion column", pos:"noun", gender:null,
     note:"Kanji: 社説. しゃせつをよむ = to read editorials.\nThe newspaper's official stance.",
     example:"A: きょうのしゃせつをよみましたか？\nB: まだです。なにについてですか？",
     exampleSrc:"A: Did you read today's editorial?\nB: Not yet. What is it about?",
     funFact:"しゃせつ (社説) is the newspaper's institutional voice. Major papers like あさひしんぶん and よみうりしんぶん often take opposing しゃせつ positions on political issues. Reading しゃせつ from multiple papers is recommended for balanced understanding. JLPT N1 passages often resemble しゃせつ style."},

    {type:"teach", trg:"きじ", src:"article / news story", pos:"noun", gender:null,
     note:"Kanji: 記事. きじをかく = to write an article.\nトップきじ = lead story.",
     example:"A: このきじはせいかくですか？\nB: しんらいできるきしゃがかいています。",
     exampleSrc:"A: Is this article accurate?\nB: A reliable journalist wrote it.",
     funFact:"きじ (記事) combines 記 (record) and 事 (matter). Japanese newspaper きじ follow a specific structure: みだし (headline), リード (lead paragraph), ほんぶん (body). Online きじ face challenges from フェイクニュース (fake news) and クリックベイト (clickbait), issues actively discussed in Japanese media literacy education."},

    {type:"mc", q:"What is a よろんちょうさ?", opts:["A public opinion poll","A police investigation","A news article","A media conference"], ans:"A public opinion poll",
     hint:"Major newspapers conduct these to measure p... sentiment on political issues."},

    {type:"teach", trg:"みだし", src:"headline / title", pos:"noun", gender:null,
     note:"Kanji: 見出し. みだしをよむ = to read headlines.\nみだしをつける = to write a headline.",
     example:"A: みだしだけよんでないようをはんだんしないでください。\nB: たしかに、きじぜんたいをよむべきですね。",
     exampleSrc:"A: Please do not judge content by headlines alone.\nB: Indeed, one should read the full article.",
     funFact:"Japanese newspaper みだし (headlines) have their own grammar: particles are dropped, verbs are in dictionary form, and kanji are preferred over hiragana for space. みだしだけよむ (reading only headlines) is criticized as information literacy failure but is increasingly common with smartphones."},

    {type:"teach", trg:"ばんぐみ", src:"program / show (TV/radio)", pos:"noun", gender:null,
     note:"Kanji: 番組. ニュースばんぐみ = news program.\nバラエティばんぐみ = variety show.",
     example:"A: このばんぐみはいつほうそうですか？\nB: まいしゅうにちようびのよるくじです。",
     exampleSrc:"A: When does this program air?\nB: Every Sunday at 9 PM.",
     funFact:"Japanese テレビばんぐみ culture is distinctive: ワイドショー (wide shows mixing news and entertainment), バラエティ (variety shows with comedians), and ドキュメンタリー coexist. NHK (public broadcaster) and minkan (commercial) stations compete. Japan's television culture deeply influences public discourse."},

    {type:"teach", trg:"おくほう", src:"breaking news / just in / flash report", pos:"noun", gender:null,
     note:"Kanji: 速報. そくほう is the standard reading.\nおくほうが はいりました = breaking news has come in.",
     example:"A: そくほうです。おおきなじしんがはっせいしました。\nB: ひがいのじょうきょうはどうですか？",
     exampleSrc:"A: Breaking news. A major earthquake has occurred.\nB: What is the damage situation?",
     funFact:"そくほう flashes across Japanese TV screens as a red テロップ (on-screen text). NHK's じしんそくほう (earthquake flash reports) appear within seconds of detection. スマホへのそくほう (smartphone alerts) use the きんきゅうそくほう system. News apps send プッシュそくほう (push alerts) for major events."},

    {type:"teach", trg:"かいせつ", src:"commentary / explanation / analysis", pos:"noun", gender:null,
     note:"Kanji: 解説. かいせつしゃ = commentator.\nニュースかいせつ = news analysis.",
     example:"A: せんもんかのかいせつをきいてりかいできました。\nB: わかりやすかったですね。",
     exampleSrc:"A: I understood after hearing the expert's analysis.\nB: It was easy to understand.",
     funFact:"かいせつ (解説) is a key media role. NHKかいせついいん (NHK commentators) are respected voices. Sports broadcasts have じっきょう (play-by-play) and かいせつ (analysis) as separate roles. Political かいせつ helps viewers understand complex policy, though bias concerns exist."},

    {type:"teach", trg:"じじ", src:"current affairs / current events", pos:"noun", gender:null,
     note:"Kanji: 時事. じじもんだい = current issues.\nじじネタ = topical material.",
     example:"A: じじもんだいについてどうおもいますか？\nB: じょうほうをあつめてからいけんをいいます。",
     exampleSrc:"A: What do you think about current issues?\nB: I will state my opinion after gathering information.",
     funFact:"じじ (時事) knowledge is tested in Japanese job interviews, school entrance exams, and JLPT. じじつうしんしゃ (Jiji Press) is one of Japan's two major wire services. Being にゅーすにうとい (uninformed about news) is considered a weakness. Students prepare じじもんだいたいさく (current affairs preparation)."},

    {type:"fb", s:"このじけんはおおきく{1}されました。\n(This incident was widely reported.)", a:"ほうどう", opts:["ほうどう","はっぴょう","せつめい","でんたつ"], sSrc:"This incident was widely reported.",
     hint:"This word means media coverage and broadcasting of news."},

    {type:"teach", trg:"マスコミ", src:"mass media / mass communication", pos:"noun", gender:null,
     note:"Short for マスコミュニケーション.\nマスコミのちから = the power of mass media.",
     example:"A: マスコミはせいかくにほうどうすべきです。\nB: かたよったほうどうはもんだいですね。",
     exampleSrc:"A: Mass media should report accurately.\nB: Biased reporting is a problem.",
     funFact:"マスコミ is the standard Japanese abbreviation for mass media. Japanese マスコミ includes the 'big five' newspapers, NHK, and five private TV networks. The きしゃクラブ (press club) system, unique to Japan, gives member journalists exclusive access to government sources but is criticized for limiting independent journalism."},

    {type:"teach", trg:"じょうほうげん", src:"information source", pos:"noun", gender:null,
     note:"じょうほう (information) + げん (source).\nしんらいできるじょうほうげん = reliable source.",
     example:"A: じょうほうげんはしんらいできますか？\nB: ふくすうのじょうほうげんでかくにんしました。",
     exampleSrc:"A: Is the information source reliable?\nB: I confirmed with multiple sources.",
     funFact:"じょうほうげん (情報源) is crucial in the フェイクニュース era. Japanese media literacy education teaches じょうほうげんのかくにん (source verification). First-hand sources (いちじじょうほう) are valued over secondary (にじじょうほう). Whistleblower protection (こうえきつうほうしゃほご) safeguards internal じょうほうげん."},

    {type:"match", pairs:[{trg:"ほうどう",src:"news reporting"},{trg:"しゃせつ",src:"editorial"},{trg:"きじ",src:"article"},{trg:"そくほう",src:"breaking news"},{trg:"かいせつ",src:"commentary"}],
     hint:"Match each media term with its English meaning."},

    {type:"mc", q:"What is Japan's きしゃクラブ system?", opts:["A press club giving member journalists exclusive government access","A journalism school","A newspaper delivery service","A TV rating system"], ans:"A press club giving member journalists exclusive government access",
     hint:"This unique Japanese system is both praised for organized a... and criticized for limiting independent reporting."},

    {type:"fb", s:"{1}だけよんでないようをはんだんしないでください。\n(Please do not judge content by headlines alone.)", a:"みだし", opts:["みだし","きじ","しゃせつ","そくほう"], sSrc:"Please do not judge content by headlines alone.",
     hint:"This is the large text at the top of a news article."},

    {type:"mc", q:"What does マスコミ stand for?", opts:["Mass communication (abbreviated)","Master of commerce","Massive community","Marketing commission"], ans:"Mass communication (abbreviated)",
     hint:"This abbreviation covers newspapers, TV, radio, and other large-scale media."}
  ]
};
export default BATCH8_L1;
