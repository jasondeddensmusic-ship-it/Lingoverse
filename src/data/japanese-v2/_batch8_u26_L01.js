// Batch 8 – Unit 26 (B2.1 News): Media & Journalism Vocabulary
const BATCH8_L1 = {
  id:"jav2_u26l_b8_1", title:"メディアとジャーナリズム", icon:"🗞️", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアとジャーナリズム",
     desc:"Master media and journalism vocabulary for reading news and discussing current events at an advanced level. These JLPT N2 words appear in newspapers and broadcasts daily.",
     goals:["Read and discuss news articles","Understand media terminology","Express opinions on current events"]},

    {type:"teach", trg:"報道(ほうどう)", src:"news coverage / reporting / broadcast", pos:"noun", gender:null,
     note:"Kanji: 報道. 報道(ほうどう)機関(きかん) = news organization.\n報道(ほうどう)の自由(じゆう) = freedom of the press.",
     example:"A: この事件(じけん)は大(おお)きく報道(ほうどう)されました。\nB: テレビも新聞(しんぶん)も取(と)り上(あ)げていましたね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: This incident was widely reported.\nB: Both TV and newspapers covered it.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"報道(ほうどう) carries weight and responsibility in Japanese. 報道(ほうどう)の自由(じゆう) (press freedom) rankings consistently place Japan lower than expected for a democracy, due to 記者(きしゃ)クラブ (press clubs) that limit access. 誤(ご)報道(ほうどう) (misinformation in reporting) triggers formal apologies from stations."},

    {type:"teach", trg:"取(と)り上(あ)げる", src:"to cover / to feature / to pick up (a topic)", pos:"verb", gender:null,
     note:"取(と)る (to take) + 上(あ)げる (to raise). メディアが取(と)り上(あ)げる = media covers.\nAlso: to confiscate.",
     example:"A: SNSでバズったニュースをテレビが取(と)り上(あ)げました。\nB: 反響(はんきょう)が大(おお)きいですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: TV picked up the news that went viral on social media.\nB: The response is huge.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"取(と)り上(あ)げる in media context means 'to pick up and present a topic.' It is a compound verb: 取(と)る (take) + 上(あ)げる (raise). The same verb means 'to confiscate' in other contexts. メディアに取(と)り上(あ)げられる (to be featured in media) can be positive or negative depending on the story."},

    {type:"teach", trg:"世論(よろん)", src:"public opinion", pos:"noun", gender:null,
     note:"Kanji: 世論 (also read せろん). 世論(よろん)調査(ちょうさ) = public opinion poll.\n世論(よろん)を動(うご)かす = to move public opinion.",
     example:"A: 世論(よろん)調査(ちょうさ)の結果(けっか)が出(で)ました。\nB: 支持率(しじりつ)はどうですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The public opinion poll results are out.\nB: What is the approval rating?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"世論(よろん) has two accepted readings: よろん and せろん. Linguists debate which is correct, but both are used. NHK uses せろん. 世論(よろん)調査(ちょうさ) (opinion polls) are conducted by major newspapers (朝日(あさひ), 読売(よみうり), 毎日(まいにち)) and shape political discourse significantly."},

    {type:"teach", trg:"社説(しゃせつ)", src:"editorial / opinion column", pos:"noun", gender:null,
     note:"Kanji: 社説. 社説(しゃせつ)を読(よ)む = to read editorials.\nThe newspaper's official stance.",
     example:"A: 今日(きょう)の社説(しゃせつ)を読(よ)みましたか？\nB: まだです。何(なに)についてですか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Did you read today's editorial?\nB: Not yet. What is it about?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"社説(しゃせつ) is the newspaper's institutional voice. Major papers like 朝日新聞(あさひしんぶん) and 読売新聞(よみうりしんぶん) often take opposing 社説(しゃせつ) positions on political issues. Reading 社説(しゃせつ) from multiple papers is recommended for balanced understanding. JLPT N1 passages often resemble 社説(しゃせつ) style."},

    {type:"teach", trg:"記事(きじ)", src:"article / news story", pos:"noun", gender:null,
     note:"Kanji: 記事. 記事(きじ)を書(か)く = to write an article.\nトップ記事(きじ) = lead story.",
     example:"A: この記事(きじ)は正確(せいかく)ですか？\nB: 信頼(しんらい)できる記者(きしゃ)が書(か)いています。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Is this article accurate?\nB: A reliable journalist wrote it.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"記事(きじ) combines 記 (record) and 事 (matter). Japanese newspaper 記事(きじ) follow a specific structure: 見出(みだ)し (headline), リード (lead paragraph), 本文(ほんぶん) (body). Online 記事(きじ) face challenges from フェイクニュース (fake news) and クリックベイト (clickbait), issues actively discussed in Japanese media literacy education."},

    {type:"mc", q:"What is a 世論(よろん)調査(ちょうさ)?", opts:["A public opinion poll","A police investigation","A news article","A media conference"], ans:"A public opinion poll",
     hint:"Major newspapers conduct these to measure p... sentiment on political issues."},

    {type:"teach", trg:"見出(みだ)し", src:"headline / title", pos:"noun", gender:null,
     note:"Kanji: 見出し. 見出(みだ)しを読(よ)む = to read headlines.\n見出(みだ)しをつける = to write a headline.",
     example:"A: 見出(みだ)しだけ読(よ)んで内容(ないよう)を判断(はんだん)しないでください。\nB: たしかに、記事(きじ)全体(ぜんたい)を読(よ)むべきですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Please do not judge content by headlines alone.\nB: Indeed, one should read the full article.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japanese newspaper 見出(みだ)し (headlines) have their own grammar: particles are dropped, verbs are in dictionary form, and kanji are preferred over hiragana for space. 見出(みだ)しだけ読(よ)む (reading only headlines) is criticized as information literacy failure but is increasingly common with smartphones."},

    {type:"teach", trg:"番組(ばんぐみ)", src:"program / show (TV/radio)", pos:"noun", gender:null,
     note:"Kanji: 番組. ニュース番組(ばんぐみ) = news program.\nバラエティ番組(ばんぐみ) = variety show.",
     example:"A: この番組(ばんぐみ)はいつ放送(ほうそう)ですか？\nB: 毎週(まいしゅう)日曜日(にちようび)の夜(よる)九時(くじ)です。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: When does this program air?\nB: Every Sunday at 9 PM.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese テレビ番組(ばんぐみ) culture is distinctive: ワイドショー (wide shows mixing news and entertainment), バラエティ (variety shows with comedians), and ドキュメンタリー coexist. NHK (public broadcaster) and 民間(みんかん) (commercial) stations compete. Japan's television culture deeply influences public discourse."},

    {type:"teach", trg:"速報(そくほう)", src:"breaking news / just in / flash report", pos:"noun", gender:null,
     note:"Kanji: 速報. 速報(そくほう)が入(はい)りました = breaking news has come in.",
     example:"A: 速報(そくほう)です。大(おお)きな地震(じしん)が発生(はっせい)しました。\nB: 被害(ひがい)の状況(じょうきょう)はどうですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Breaking news. A major earthquake has occurred.\nB: What is the damage situation?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"速報(そくほう) flashes across Japanese TV screens as a red テロップ (on-screen text). NHKの地震(じしん)速報(そくほう) (earthquake flash reports) appear within seconds of detection. スマホへの速報(そくほう) (smartphone alerts) use the 緊急(きんきゅう)速報(そくほう) system. News apps send プッシュ速報(そくほう) (push alerts) for major events."},

    {type:"teach", trg:"解説(かいせつ)", src:"commentary / explanation / analysis", pos:"noun", gender:null,
     note:"Kanji: 解説. 解説(かいせつ)者(しゃ) = commentator.\nニュース解説(かいせつ) = news analysis.",
     example:"A: 専門家(せんもんか)の解説(かいせつ)を聞(き)いて理解(りかい)できました。\nB: 分(わ)かりやすかったですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I understood after hearing the expert's analysis.\nB: It was easy to understand.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"解説(かいせつ) is a key media role. NHK解説(かいせつ)委員(いいん) (NHK commentators) are respected voices. Sports broadcasts have 実況(じっきょう) (play-by-play) and 解説(かいせつ) (analysis) as separate roles. Political 解説(かいせつ) helps viewers understand complex policy, though bias concerns exist."},

    {type:"teach", trg:"時事(じじ)", src:"current affairs / current events", pos:"noun", gender:null,
     note:"Kanji: 時事. 時事(じじ)問題(もんだい) = current issues.\n時事(じじ)ネタ = topical material.",
     example:"A: 時事(じじ)問題(もんだい)についてどう思(おも)いますか？\nB: 情報(じょうほう)を集(あつ)めてから意見(いけん)を言(い)います。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: What do you think about current issues?\nB: I will state my opinion after gathering information.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"時事(じじ) knowledge is tested in Japanese job interviews, school entrance exams, and JLPT. 時事通信社(じじつうしんしゃ) (Jiji Press) is one of Japan's two major wire services. Being ニュースに疎(うと)い (uninformed about news) is considered a weakness. Students prepare 時事(じじ)問題(もんだい)対策(たいさく) (current affairs preparation)."},

    {type:"fb", s:"この事件(じけん)は大(おお)きく{1}されました。\n(This incident was widely reported.)", a:"報道(ほうどう)", opts:["報道(ほうどう)","発表(はっぴょう)","説明(せつめい)","伝達(でんたつ)"], sSrc:"This incident was widely reported.",
     hint:"This word means media coverage and broadcasting of news."},

    {type:"teach", trg:"マスコミ", src:"mass media / mass communication", pos:"noun", gender:null,
     note:"Short for マスコミュニケーション.\nマスコミの力(ちから) = the power of mass media.",
     example:"A: マスコミは正確(せいかく)に報道(ほうどう)すべきです。\nB: 偏(かたよ)った報道(ほうどう)は問題(もんだい)ですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Mass media should report accurately.\nB: Biased reporting is a problem.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"マスコミ is the standard Japanese abbreviation for mass media. Japanese マスコミ includes the 'big five' newspapers, NHK, and five private TV networks. The 記者(きしゃ)クラブ (press club) system, unique to Japan, gives member journalists exclusive access to government sources but is criticized for limiting independent journalism."},

    {type:"teach", trg:"情報源(じょうほうげん)", src:"information source", pos:"noun", gender:null,
     note:"情報(じょうほう) (information) + 源(げん) (source).\n信頼(しんらい)できる情報源(じょうほうげん) = reliable source.",
     example:"A: 情報源(じょうほうげん)は信頼(しんらい)できますか？\nB: 複数(ふくすう)の情報源(じょうほうげん)で確認(かくにん)しました。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Is the information source reliable?\nB: I confirmed with multiple sources.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"情報源(じょうほうげん) is crucial in the フェイクニュース era. Japanese media literacy education teaches 情報源(じょうほうげん)の確認(かくにん) (source verification). First-hand sources (一次(いちじ)情報(じょうほう)) are valued over secondary (二次(にじ)情報(じょうほう)). Whistleblower protection (公益(こうえき)通報者(つうほうしゃ)保護(ほご)) safeguards internal 情報源(じょうほうげん)."},

    {type:"match", pairs:[{trg:"報道(ほうどう)",src:"news reporting"},{trg:"社説(しゃせつ)",src:"editorial"},{trg:"記事(きじ)",src:"article"},{trg:"速報(そくほう)",src:"breaking news"},{trg:"解説(かいせつ)",src:"commentary"}],
     hint:"Match each media term with its English meaning."},

    {type:"mc", q:"What is Japan's 記者(きしゃ)クラブ system?", opts:["A press club giving member journalists exclusive government access","A journalism school","A newspaper delivery service","A TV rating system"], ans:"A press club giving member journalists exclusive government access",
     hint:"This unique Japanese system is both praised for organized a... and criticized for limiting independent reporting."},

    {type:"fb", s:"{1}だけ読(よ)んで内容(ないよう)を判断(はんだん)しないでください。\n(Please do not judge content by headlines alone.)", a:"見出(みだ)し", opts:["見出(みだ)し","記事(きじ)","社説(しゃせつ)","速報(そくほう)"], sSrc:"Please do not judge content by headlines alone.",
     hint:"This is the large text at the top of a news article."},

    {type:"mc", q:"What does マスコミ stand for?", opts:["Mass communication (abbreviated)","Master of commerce","Massive community","Marketing commission"], ans:"Mass communication (abbreviated)",
     hint:"This abbreviation covers newspapers, TV, radio, and other large-scale media."}
  ,{type:"match",pairs:[{trg:"取(と)り上(あ)げる",src:"to cover / to feature / to pick up (a topic)"},{trg:"世論(よろん)",src:"public opinion"},{trg:"番組(ばんぐみ)",src:"program / show (TV/radio)"},{trg:"時事(じじ)",src:"current affairs / current events"},{trg:"マスコミ",src:"mass media / mass communication"},{trg:"情報源(じょうほうげん)",src:"information source"}]}]
};
export default BATCH8_L1;
