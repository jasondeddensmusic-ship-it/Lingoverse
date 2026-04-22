// Unit 25 Expansion. Lesson 4: Negotiation Language
const LESSON_4 = {
  id:"jav2_u25l4", title:"こうしょうのことば", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Negotiation Language",
     desc:"Japanese business negotiations rely on indirect communication, strategic hedging, and polite refusal patterns. Master the vocabulary of proposals, conditions, compromises, and the art of saying no without actually saying no.",
     goals:["Use こうしょう, じょうけん, だきょう in context","Recognize indirect refusal patterns in business","Navigate negotiation vocabulary at B2 level"]},

    {type:"teach", trg:"こうしょう", src:"negotiation", pos:"noun", gender:null,
     note:"Kanji: 交渉. こうしょうする = to negotiate.\nかかくこうしょう = price negotiation.",
     example:"A: とりひきさきとこうしょうがひつようです。\nB: いつごろはじめましょうか。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: We need to negotiate with the business partner.\nB: When shall we start?\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"交渉 uses 交 (exchange/cross) and 渉 (wade through). Negotiation is literally wading through an exchange. Japanese こうしょう tends to be slower than Western negotiation because consensus-building takes time. The phrase 粘り強い交渉 (sticky/persistent negotiation) is considered a compliment."},

    {type:"teach", trg:"とりひきさき", src:"business partner / client company", pos:"noun", gender:null,
     note:"Kanji: 取引先. 取引 (transaction) + 先 (destination/party).\nThe company you do business with.",
     example:"A: おもなとりひきさきはどちらですか？\nB: アジアのきぎょうがおおいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Who are your main business partners?\nB: Mostly Asian companies.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"取引先 is a compound of 取引 (dealing/transaction) and 先 (other party). In Japanese business, maintaining good relationships with とりひきさき is paramount. The concept of 信頼関係 (trust relationship) means companies often stick with the same partners for decades, even if cheaper alternatives exist."},

    {type:"teach", trg:"じょうけん", src:"conditions / terms", pos:"noun", gender:null,
     note:"Kanji: 条件. じょうけんをだす = to present conditions.\nじょうけんをのむ = to accept conditions.",
     example:"A: このじょうけんではむずかしいです。\nB: どのようなじょうけんならかのうですか？\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Under these conditions, it is difficult.\nB: Under what conditions would it be possible?\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"条件 uses 条 (article/clause) and 件 (matter). The verb のむ (swallow) paired with じょうけん is vivid: you swallow the conditions whole, accepting them even if they are hard to digest. The opposite, じょうけんをつける (to attach conditions), means adding requirements before agreeing."},

    {type:"mc", q:"じょうけんをのむ means:", opts:["To accept terms even if unfavorable","To propose new terms","To discuss terms casually","To reject terms outright"], ans:"To accept terms even if unfavorable",
     hint:"のむ literally means to swallow, implying you take in the conditions whole."},

    {type:"teach", trg:"だきょう", src:"compromise", pos:"noun", gender:null,
     note:"Kanji: 妥協. だきょうする = to compromise.\nだきょうてん = point of compromise.",
     example:"A: りょうしゃのだきょうてんをさがしましょう。\nB: そうですね。おたがいにゆずるひつようがあります。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us find a compromise point for both sides.\nB: Yes. Both sides need to make concessions.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"妥協 uses 妥 (proper/settled) and 協 (cooperate). Finding だきょう is central to Japanese negotiation. Rather than one side winning, the goal is often おたがいさま (mutual accommodation). The phrase 妥協案 (compromise proposal) is a positive term, not a sign of weakness."},

    {type:"teach", trg:"ゆずる", src:"to yield / to concede / to give way", pos:"verb", gender:null,
     note:"Kanji: 譲る. Group 1 verb. ゆずりあう = to yield to each other (mutual compromise).\nAlso: to hand over, to transfer.",
     example:"A: このてんについてはゆずることができます。\nB: それならこちらもべつのてんでゆずりましょう。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: We can concede on this point.\nB: Then let us also yield on another point.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"譲る is a rich verb. In negotiation, it means to concede. On trains, it means to give up your seat. In business succession, it means to hand over leadership. The compound 譲り合い (mutual yielding) captures a core Japanese social value: harmony through reciprocal concession."},

    {type:"fb", s:"りょうしゃの{1}てんをさがしましょう。\n(Let us find a compromise point for both sides.)", a:"だきょう", opts:["だきょう","こうしょう","じょうけん","けいやく"], sSrc:"Let us find a compromise point for both sides.",
     hint:"The noun for a middle ground where both sides give something up."},

    {type:"teach", trg:"けんとう", src:"consideration / examination", pos:"noun", gender:null,
     note:"Kanji: 検討. けんとうする = to consider/examine.\nOften used as a polite way to defer or decline.",
     example:"A: このけんについてけんとうさせていただきます。\nB: いつまでにおへんじいただけますか？\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We will consider this matter.\nB: By when can we receive your reply?\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"検討します is one of the most important business phrases to decode. On the surface, it means 'we will consider it.' In practice, it often means 'probably no.' Japanese business culture avoids direct rejection. When someone says けんとうさせていただきます with a troubled expression, experienced negotiators read it as a soft decline."},

    {type:"teach", trg:"むずかしい", src:"difficult (often = polite refusal)", pos:"adj", gender:null,
     note:"Used literally and as an indirect refusal in business.\nちょっとむずかしいです = That is a bit difficult (often means no).",
     example:"A: のうきをいっしゅうかんはやめることはできますか？\nB: ちょっとむずかしいかとおもいます。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Can you move the deadline up by one week?\nB: I think that would be a bit difficult.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"むずかしい is the most common indirect refusal in Japanese business. When someone says ちょっとむずかしいです, they almost always mean no. Direct rejection (できません, no we cannot) is considered rude in business contexts. Learning to read むずかしい as 'no' is essential for non-Japanese negotiators."},

    {type:"tip", title:"Reading Between the Lines in Negotiation",
     text:"Japanese negotiation uses layers of indirectness:\n\nけんとうします = We will consider it.\n(Often means: probably no.)\n\nちょっとむずかしいです = It is a bit difficult.\n(Almost always means: no.)\n\nまえむきにけんとうします = We will consider it positively.\n(Actually means: maybe, we are open to it.)\n\nぜんしょします = We will handle it well.\n(Means: we will try our best, but no promise.)\n\nListening for these patterns is critical for understanding real positions.",
     deepDive:{title:"Why Indirectness Works",
      text:"Japanese business indirectness is not dishonesty. It serves important functions:\n\nFace-saving: Direct rejection humiliates the other party. Indirect signals let them withdraw gracefully.\n\nFlexibility: A soft no leaves the door open. If circumstances change, the conversation can resume without either side losing face.\n\nRelationship preservation: The business relationship matters more than any single deal. A harsh rejection damages the long-term とりひき.\n\nExperienced negotiators on both sides understand these signals perfectly. The indirectness is a shared code, not a barrier to communication."}},

    {type:"teach", trg:"まえむき", src:"positive / forward-looking / constructive", pos:"adj", gender:null,
     note:"Kanji: 前向き. まえ (forward) + むき (facing).\nまえむきにけんとうする = to consider positively.",
     example:"A: ごていあんについて、まえむきにけんとういたします。\nB: ありがとうございます。おへんじをおまちしております。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Regarding your proposal, we will consider it positively.\nB: Thank you. We look forward to your reply.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"前向き literally means 'facing forward.' When added before けんとう, it signals genuine interest rather than a polite brush-off. まえむきにけんとう is significantly more positive than plain けんとう. Skilled negotiators listen carefully for the presence or absence of まえむき as a key signal."},

    {type:"mc", q:"When a Japanese business partner says けんとうさせていただきます, the most likely real meaning is:", opts:["They have already accepted","They will probably decline","They are enthusiastic about the idea","They need time to get excited"], ans:"They will probably decline",
     hint:"Without まえむき (positive) attached, this phrase is often a gentle way to signal no."},

    {type:"fb", s:"このてんについては{1}ことができます。\n(We can concede on this point.)", a:"ゆずる", opts:["ゆずる","けんとう","だきょう","こうしょう"], sSrc:"We can concede on this point.",
     hint:"The verb meaning to give way or yield ground in a negotiation."},

    {type:"teach", trg:"ぜんしょ", src:"doing one's best / handling favorably", pos:"noun", gender:null,
     note:"Kanji: 善処. ぜんしょする = to deal with favorably.\nA polite promise of effort without guaranteeing results.",
     example:"A: このもんだいについてぜんしょしていただけますか？\nB: できるかぎりぜんしょいたします。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Could you handle this matter favorably?\nB: We will do our best to handle it.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"善処 uses 善 (good) and 処 (deal with). Politicians love this word because it sounds helpful while committing to nothing specific. ぜんしょします in a Diet answer means 'we acknowledge the issue and will try,' which critics call 政治家の逃げ言葉 (a politician's escape word)."},

    {type:"match", pairs:[{trg:"こうしょう",src:"negotiation"},{trg:"じょうけん",src:"conditions"},{trg:"だきょう",src:"compromise"},{trg:"けんとう",src:"consideration"}]},

    {type:"fb", s:"ごていあんについて、{1}にけんとういたします。\n(Regarding your proposal, we will consider it positively.)", a:"まえむき", opts:["まえむき","むずかしい","ぜんしょ","だきょう"], sSrc:"Regarding your proposal, we will consider it positively.",
     hint:"The adjective meaning forward-facing, signaling genuine openness."},

    {type:"match", pairs:[{trg:"ゆずる",src:"to yield/concede"},{trg:"まえむき",src:"positive/constructive"},{trg:"ぜんしょ",src:"handling favorably"},{trg:"とりひきさき",src:"business partner"}]},
  ]
};
export default LESSON_4;
