// Unit 36 Batch 2 Lesson 1: こうどなひょうげん (Advanced Expressions)
const BATCH2_L_1 = {
  id:"jav2_u36l_b2_1", title:"こうどなひょうげん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうどなひょうげん",
     desc:"Advanced Japanese requires nuanced expressions for qualification, emphasis, and precision. These patterns appear in academic writing, formal speeches, and JLPT N1 grammar sections. Mastering them marks the transition from upper-intermediate to advanced.",
     goals:["Use advanced qualification patterns","Master emphasis and precision expressions","Navigate JLPT N1 grammar patterns"]},

    {type:"teach", trg:"〜にほかならない", src:"nothing but ~ / none other than ~", pos:"part", gender:null,
     note:"Strong assertion that X is the only explanation.\nせいこうはどりょくのけっかにほかならない = success is nothing but the result of effort.",
     example:"A: これはチームぜんいんのどりょくのけっかにほかなりません。\nB: みなさんのこうけんにかんしゃします。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This is none other than the result of the whole team's effort.\nB: I appreciate everyone's contribution.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"にほかならない uses 他 (other) + ならない (is not). Literally 'it is not other than X.' This pattern is used for emphatic identification: the speaker insists that the explanation is singular and definitive. It appears frequently in JLPT N1 and in formal writing to deliver a powerful concluding statement."},

    {type:"teach", trg:"〜をもって", src:"with ~ / by means of ~ / as of ~", pos:"part", gender:null,
     note:"Formal pattern. ここをもって = hereby.\nいじょうをもって = with this (concluding).",
     example:"A: いじょうをもってほんじつのかいぎをしゅうりょういたします。\nB: おつかれさまでした。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: With this, we conclude today's meeting.\nB: Thank you for your hard work.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"をもって is a formal particle combination meaning 'by means of' or 'as of.' It appears in official announcements, meeting closings, and legal documents. いじょうをもってしゅうりょう (concluded with the above) is a standard meeting-closing phrase. In legal writing, をもって specifies effective dates: ほんじつをもってゆうこう (effective as of today)."},

    {type:"teach", trg:"〜をとわず", src:"regardless of ~ / irrespective of ~", pos:"part", gender:null,
     note:"Kanji: 問わず. From とう (to ask/question).\nねんれいをとわず = regardless of age.",
     example:"A: このイベントはねんれいやせいべつをとわずさんかできます。\nB: だれでもかんげいですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: This event can be joined regardless of age or gender.\nB: Everyone is welcome.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"を問わず literally means 'without asking/questioning X.' It dismisses a variable as irrelevant: the outcome is the same no matter what X is. Common collocations: ねんれいをとわず (regardless of age), けいけんをとわず (regardless of experience), きせつをとわず (regardless of season). This pattern is frequent in job postings and event announcements."},

    {type:"mc", q:"にほかならない expresses:", opts:["Strong assertion that X is the only explanation","Uncertainty about the cause","A polite refusal","A conditional statement"], ans:"Strong assertion that X is the only explanation",
     hint:"This pattern insists there is no other e...: it IS this and nothing else."},

    {type:"teach", trg:"〜ものの", src:"although ~ / even though ~ (literary concession)", pos:"conj", gender:null,
     note:"Literary concessive. More formal than けど/が.\nりかいしたものの = although I understood.",
     example:"A: せつめいをきいたものの、まだふにおちない。\nB: もういちどしつもんしてみてはどうですか？\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Although I heard the explanation, I am still not convinced.\nB: How about asking once more?\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"ものの is a literary concessive that acknowledges one fact while asserting a contrasting reality. It is more nuanced than けど (but) and carries the nuance of 'I accept X, yet Y remains true.' It appears in novels, essays, and JLPT N1 passages. The pattern verb-past + ものの is especially common."},

    {type:"teach", trg:"ふにおちない", src:"to not be convinced / to not make sense", pos:"verb", gender:null,
     note:"Kanji: 腑に落ちない. ふ (gut) + におちない (does not fall into).\nOpposite: ふにおちる (to be convinced).",
     example:"A: かれのせつめいはろんりてきだが、ふにおちない。\nB: ちょっかんてきにちがうとかんじるのですね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: His explanation is logical, but I am not convinced.\nB: You feel intuitively that something is off.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"腑に落ちない literally means 'it does not fall into the gut.' Japanese locates understanding in the はら (belly/gut), not the head. This expression captures that moment when something is intellectually logical but does not feel right emotionally. The positive form ふにおちる (it falls into place) describes the satisfying moment of true understanding."},

    {type:"teach", trg:"〜にすぎない", src:"merely ~ / nothing more than ~ / only ~", pos:"part", gender:null,
     note:"Minimizes importance. かのうせいのひとつにすぎない = merely one possibility.\nStrong downplaying expression.",
     example:"A: これはかせつにすぎません。\nB: じっしょうがひつようですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: This is merely a hypothesis.\nB: Verification is needed.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"にすぎない uses 過ぎない (does not exceed). It frames X as less important than it might appear. In academic writing, にすぎない hedges claims: the findings are 'merely preliminary.' In debate, it downgrades the opponent's point. This pattern is essential for the kind of measured, qualified statements that characterize advanced Japanese argumentation."},

    {type:"fb", s:"これはチームぜんいんのどりょくのけっかに{1}。\n(This is none other than the result of the whole team's effort.)", a:"ほかなりません", opts:["ほかなりません","すぎません","とわず","もって"], sSrc:"This is none other than the result of the whole team's effort.",
     hint:"The emphatic pattern asserting there is no other possible explanation."},

    {type:"teach", trg:"〜つつある", src:"to be in the process of ~ing / to be gradually ~ing", pos:"part", gender:null,
     note:"Formal progressive. More literary than ている.\nかわりつつある = is in the process of changing.",
     example:"A: しゃかいはおおきくかわりつつあります。\nB: へんかについていくのがたいへんですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Society is in the process of greatly changing.\nB: Keeping up with the changes is tough.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"つつある combines the continuative つつ (while) with ある (exist). It emphasizes ongoing, gradual change. Unlike ている (simple progressive), つつある implies a noticeable directional trend. News reports love this pattern: こうれいかがすすみつつある (aging is progressing), けいざいがかいふくしつつある (the economy is recovering). It signals a process that has not yet completed."},

    {type:"teach", trg:"〜からといって", src:"just because ~ (does not mean...)", pos:"part", gender:null,
     note:"Warns against false conclusions.\nやすいからといってかわないほうがいい = just because it is cheap does not mean you should buy it.",
     example:"A: にほんごがはなせるからといって、にほんぶんかをりかいしているとはかぎりません。\nB: ことばとぶんかはべつのものですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Just because you can speak Japanese does not necessarily mean you understand Japanese culture.\nB: Language and culture are separate things.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"からといって warns against jumping to conclusions: premise X does not automatically guarantee conclusion Y. It is paired with とはかぎらない (it is not necessarily the case that) or わけではない (it does not mean that). This pattern is essential for nuanced argumentation and appears regularly on JLPT N1 and N2 tests."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~ / in accordance with ~", pos:"part", gender:null,
     note:"From もとづく (to be based on). Formal. Kanji: 基づいて.\nじじつにもとづいて = based on facts.",
     example:"A: データにもとづいてはんだんしましょう。\nB: かんじょうではなくきゃっかんてきなこんきょがだいじですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us make judgments based on data.\nB: Not emotions but objective evidence is important.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"にもとづいて is the te-form of もとづく (to be grounded in). It is one of the most important patterns in academic and legal Japanese. Research papers say データにもとづいて (based on data), laws say けんぽうにもとづいて (based on the constitution), and business decisions should be こんきょにもとづいて (based on evidence)."},

    {type:"mc", q:"にすぎない is used to:", opts:["Emphasize great importance","Minimize or downplay something","Express strong agreement","Ask a question"], ans:"Minimize or downplay something",
     hint:"This pattern says s... 'does not exceed' a certain level, framing it as less than expected."},

    {type:"fb", s:"しゃかいはおおきくかわり{1}あります。\n(Society is in the process of greatly changing.)", a:"つつ", opts:["つつ","ながら","ている","すぎ"], sSrc:"Society is in the process of greatly changing.",
     hint:"The formal progressive pattern emphasizing ongoing gradual change."},

    {type:"match", pairs:[{trg:"にほかならない",src:"nothing but / none other than"},{trg:"をもって",src:"with this / by means of"},{trg:"をとわず",src:"regardless of"},{trg:"ものの",src:"although (literary)"}]},

    {type:"fb", s:"これはかせつに{1}。\n(This is merely a hypothesis.)", a:"すぎません", opts:["すぎません","ほかなりません","もとづいて","とわず"], sSrc:"This is merely a hypothesis.",
     hint:"The minimizing pattern that says something 'does not exceed' a certain level."},

    {type:"match", pairs:[{trg:"にすぎない",src:"merely / nothing more than"},{trg:"つつある",src:"in the process of"},{trg:"からといって",src:"just because (warning)"},{trg:"にもとづいて",src:"based on"}]},

    {type:"mc", q:"からといって...とはかぎらない means:", opts:["Just because X does not necessarily mean Y","Because of X, Y definitely follows","X and Y are the same","Neither X nor Y is true"], ans:"Just because X does not necessarily mean Y",
     hint:"This combined pattern warns against assuming a conclusion from a premise."},
  ]
};
export default BATCH2_L_1;
