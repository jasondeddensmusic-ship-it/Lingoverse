// Batch 6 – Unit 36 (B2.4 Comprehensive Review): Cross-Domain Mastery
const BATCH6_L1 = {
  id:"jav2_u36l_b6_1", title:"そうごうりょくかくにん", icon:"🏆", xp:15, board:true,
  steps:[
    {type:"intro", title:"そうごうりょくかくにん",
     desc:"This final expansion lesson consolidates vocabulary across all domains. Focus on high-frequency JLPT N2/N1 words that bridge multiple fields: academic connectors, common verbs, and essential set expressions.",
     goals:["Master cross-domain academic vocabulary","Use high-frequency verbs missed in previous lessons","Solidify set expressions for natural communication"]},

    {type:"teach", trg:"とりくむ", src:"to tackle / to work on / to engage with", pos:"verb", gender:null,
     note:"Group 1 verb. もんだいにとりくむ = to tackle a problem.\nKanji: 取り組む.",
     example:"A: このかだいにまじめにとりくみましょう。\nB: はい、ぜんりょくでがんばります。",
     exampleSrc:"A: Let us tackle this challenge seriously.\nB: Yes, I will give it my all.",
     funFact:"とりくむ (取り組む) originally described a sumo wrestler's grappling stance. It evolved to mean engaging seriously with any challenge. In business: しんきプロジェクトにとりくむ (to work on a new project). In sports: れんしゅうにとりくむ (to engage in practice). The word conveys dedicated, hands-on effort."},

    {type:"teach", trg:"みとめる", src:"to recognize / to acknowledge / to approve", pos:"verb", gender:null,
     note:"Group 2 verb. あやまちをみとめる = to acknowledge a mistake.\nKanji: 認める.",
     example:"A: じぶんのあやまちをみとめることがたいせつです。\nB: そうですね。そこからせいちょうできます。",
     exampleSrc:"A: It is important to acknowledge your own mistakes.\nB: Yes. You can grow from there.",
     funFact:"みとめる (認める) covers recognition (talent), acknowledgment (mistakes), and approval (applications). Japanese culture values the ability to みとめる mistakes (素直に認める). In legal contexts, ゆうざいをみとめる (to plead guilty). In relationships, あいてをみとめる (to accept the other person). A versatile and emotionally important verb."},

    {type:"teach", trg:"ことなる", src:"to differ / to be different", pos:"verb", gender:null,
     note:"Group 1 verb. Formal version of ちがう.\nKanji: 異なる. ことなるいけん = different opinions.",
     example:"A: ぶんかがことなるくにのひととはたらくのはたいへんですか？\nB: たいへんですが、まなぶことがおおいです。",
     exampleSrc:"A: Is it difficult to work with people from different cultures?\nB: It is difficult, but there is much to learn.",
     funFact:"ことなる (異なる) is the formal register of ちがう (to differ). In academic writing, ことなる is standard: けっかがことなる (results differ), しゅちょうがことなる (claims differ). The kanji 異 appears in いじょう (異常, abnormal), いぶんか (異文化, foreign culture), and いぎ (異議, objection)."},

    {type:"teach", trg:"ともなう", src:"to accompany / to entail / to involve", pos:"verb", gender:null,
     note:"Group 1 verb. きけんをともなう = to involve danger.\nKanji: 伴う.",
     example:"A: このけいかくはリスクをともないます。\nB: リスクをさいしょうげんにおさえるほうほうをかんがえましょう。",
     exampleSrc:"A: This plan involves risks.\nB: Let us think of ways to minimize the risks.",
     funFact:"ともなう (伴う) is a connector verb essential in formal Japanese. It links a primary event with its consequences: けいざいせいちょうにともなう (accompanying economic growth), ねんれいのじょうしょうにともなう (accompanying aging). JLPT N2 reading passages frequently use にともなって (along with / as X happens, Y follows)."},

    {type:"teach", trg:"おさえる", src:"to suppress / to hold down / to control", pos:"verb", gender:null,
     note:"Group 2 verb. かんじょうをおさえる = to control emotions.\nKanji: 抑える/押さえる.",
     example:"A: コストをおさえるにはどうすればいいですか？\nB: むだなしゅっぴをへらすことです。",
     exampleSrc:"A: How can we keep costs down?\nB: By reducing unnecessary expenses.",
     funFact:"おさえる has two related kanji: 抑える (suppress, restrain) and 押さえる (hold down physically, secure). コストをおさえる (control costs), かんじょうをおさえる (suppress emotions), ポイントをおさえる (grasp the key points). In news: インフレをおさえる (to curb inflation). A multi-domain essential verb."},

    {type:"mc", q:"ともなう means:", opts:["To accompany or entail","To differ","To suppress","To recognize"], ans:"To accompany or entail",
     hint:"This verb links events with their accompanying consequences or conditions."},

    {type:"teach", trg:"うったえる", src:"to appeal / to sue / to complain", pos:"verb", gender:null,
     note:"Group 2 verb. さいばんしょにうったえる = to take to court.\nKanji: 訴える.",
     example:"A: へいわのたいせつさをうったえるスピーチでした。\nB: おおくのひとのこころにひびいたとおもいます。",
     exampleSrc:"A: It was a speech appealing for the importance of peace.\nB: I think it resonated with many people's hearts.",
     funFact:"うったえる (訴える) has three distinct uses: legal (to sue), emotional (to appeal to feelings), and physical (to complain of pain: いたみをうったえる). In politics, せいさくをうったえる (to advocate a policy). The kanji 訴 contains 言 (words) and 斥 (reject), suggesting using words to challenge."},

    {type:"teach", trg:"はば", src:"width / range / scope", pos:"noun", gender:null,
     note:"Kanji: 幅. はばひろい = wide-ranging.\nねだんのはば = price range.",
     example:"A: はばひろいちしきがひつようです。\nB: そのためにいろいろなぶんやをべんきょうしています。",
     exampleSrc:"A: Wide-ranging knowledge is needed.\nB: That is why I study various fields.",
     funFact:"はば (幅) means physical width and metaphorical range. はばひろいけいけん (wide-ranging experience), ねだんのはば (price range), おおはば (greatly/large-scale). はばをきかせる (to have influence/command respect) is an idiom meaning someone has power. The concept of はば enriches both measurement and social discourse."},

    {type:"teach", trg:"めだつ", src:"to stand out / to be noticeable / to be conspicuous", pos:"verb", gender:null,
     note:"Group 1 verb. めだったせいか = notable result.\nKanji: 目立つ.",
     example:"A: さいきんがいこくじんかんこうきゃくがめだつようになりました。\nB: にほんのにんきがたかまっていますね。",
     exampleSrc:"A: Foreign tourists have become noticeably more common recently.\nB: Japan's popularity is increasing.",
     funFact:"めだつ (目立つ) literally means 'eyes stand up.' In Japanese culture, standing out has complex implications. でるくいはうたれる (the nail that sticks up gets hammered down) warns against めだつ. Yet in modern Japan, めだつ talent is increasingly valued. The tension between conformity and individuality makes めだつ a culturally rich word."},

    {type:"teach", trg:"やとう", src:"to employ / to hire", pos:"verb", gender:null,
     note:"Group 1 verb. ひとをやとう = to hire someone.\nKanji: 雇う.",
     example:"A: あたらしいスタッフをやとうよていです。\nB: どんなじんざいをさがしていますか？",
     exampleSrc:"A: We plan to hire new staff.\nB: What kind of talent are you looking for?",
     funFact:"やとう (雇う) is the direct verb for hiring. こよう (employment, the noun form) uses the same kanji. やといぬし (employer) and やとわれるひと (employee) form the employment relationship. In modern Japan, ぎぐわーかー (gig workers) and フリーランス (freelancers) are changing how people are やとわれる."},

    {type:"fb", s:"このかだいにまじめに{1}みましょう。\n(Let us tackle this challenge seriously.)", a:"とりく", opts:["とりく","みとめ","おさえ","うったえ"], sSrc:"Let us tackle this challenge seriously.",
     hint:"The verb meaning to grapple with or engage seriously in a task."},

    {type:"teach", trg:"つとめる", src:"to work (at) / to serve / to strive", pos:"verb", gender:null,
     note:"Group 2 verb. Three kanji: 勤める (work at), 務める (serve as), 努める (strive).\nかいしゃにつとめる = to work at a company.",
     example:"A: どちらにおつとめですか？\nB: ITきぎょうにつとめています。",
     exampleSrc:"A: Where do you work?\nB: I work at an IT company.",
     funFact:"つとめる has three kanji with distinct nuances: 勤める (to be employed: かいしゃにつとめる), 務める (to serve a role: しかいをつとめる = to serve as moderator), 努める (to make effort: かいぜんにつとめる = to strive for improvement). おつとめ (polite form) is a standard way to ask about someone's job."},

    {type:"teach", trg:"かかわる", src:"to be involved / to be related / to concern", pos:"verb", gender:null,
     note:"Group 1 verb. いのちにかかわる = to be a matter of life and death.\nKanji: 関わる.",
     example:"A: このもんだいはぜんいんにかかわることです。\nB: そうですね。みんなでかんがえるべきです。",
     exampleSrc:"A: This problem concerns everyone.\nB: Yes. We should all think about it.",
     funFact:"かかわる (関わる) is the formal verb for involvement. にかかわらず (regardless of) is a JLPT N2 grammar point: てんきにかかわらず (regardless of weather). いのちにかかわる (life-threatening) shows high-stakes involvement. The kanji 関 (gate/barrier) suggests connections that act as barriers or gateways."},

    {type:"mc", q:"めだつ means:", opts:["To stand out or be noticeable","To disappear","To be quiet","To copy others"], ans:"To stand out or be noticeable",
     hint:"This verb literally means 'eyes s... up' and describes being conspicuous."},

    {type:"match", pairs:[
      {trg:"とりくむ", src:"to tackle / engage with"},
      {trg:"みとめる", src:"to recognize / acknowledge"},
      {trg:"ことなる", src:"to differ"},
      {trg:"おさえる", src:"to suppress / control"},
      {trg:"かかわる", src:"to be involved / concern"}
    ]},

    {type:"fb", s:"じぶんのあやまちを{1}ことがたいせつです。\n(It is important to acknowledge your own mistakes.)", a:"みとめる", opts:["みとめる","おさえる","めだつ","やとう"], sSrc:"It is important to acknowledge your own mistakes.",
     hint:"The verb meaning to recognize, acknowledge, or accept something as true."},

    {type:"mc", q:"つとめる can mean all of the following EXCEPT:", opts:["To steal","To work at a company","To serve as a role","To strive/make effort"], ans:"To steal",
     hint:"This verb has three kanji forms covering employment, serving, and effort."}
  ]
};
export default BATCH6_L1;
