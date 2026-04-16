// Unit 36 Batch 2 Lesson 1: こうどなひょうげん (Advanced Expressions)
const BATCH2_L_1 = {
  id:"jav2_u36l_b2_1", title:"こうどなひょうげん", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうどなひょうげん",
     desc:"Advanced Japanese requires nuanced expressions for qualification, emphasis, and precision. These patterns appear in academic writing, formal speeches, and JLPT N1 grammar sections. Mastering them marks the transition from upper-intermediate to advanced.",
     goals:["Use advanced qualification patterns","Master emphasis and precision expressions","Navigate JLPT N1 grammar patterns"]},

    {type:"teach", trg:"〜にほかならない", src:"nothing but ~ / none other than ~", pos:"part", gender:null,
     note:"Strong assertion that X is the only explanation.\nせいこうはどりょくのけっかにほかならない = success is nothing but the result of effort.",
     example:"A: これはチームぜんいんのどりょくのけっかにほかなりません。\nB: みなさんのこうけんにかんしゃします。",
     exampleSrc:"A: This is none other than the result of the whole team's effort.\nB: I appreciate everyone's contribution.",
     funFact:"にほかならない uses 他 (other) + ならない (is not). Literally 'it is not other than X.' This pattern is used for emphatic identification: the speaker insists that the explanation is singular and definitive. It appears frequently in JLPT N1 and in formal writing to deliver a powerful concluding statement."},

    {type:"teach", trg:"〜をもって", src:"with ~ / by means of ~ / as of ~", pos:"part", gender:null,
     note:"Formal pattern. ここをもって = hereby.\nいじょうをもって = with this (concluding).",
     example:"A: いじょうをもってほんじつのかいぎをしゅうりょういたします。\nB: おつかれさまでした。",
     exampleSrc:"A: With this, we conclude today's meeting.\nB: Thank you for your hard work.",
     funFact:"をもって is a formal particle combination meaning 'by means of' or 'as of.' It appears in official announcements, meeting closings, and legal documents. いじょうをもってしゅうりょう (concluded with the above) is a standard meeting-closing phrase. In legal writing, をもって specifies effective dates: ほんじつをもってゆうこう (effective as of today)."},

    {type:"teach", trg:"〜をとわず", src:"regardless of ~ / irrespective of ~", pos:"part", gender:null,
     note:"Kanji: 問わず. From とう (to ask/question).\nねんれいをとわず = regardless of age.",
     example:"A: このイベントはねんれいやせいべつをとわずさんかできます。\nB: だれでもかんげいですね。",
     exampleSrc:"A: This event can be joined regardless of age or gender.\nB: Everyone is welcome.",
     funFact:"を問わず literally means 'without asking/questioning X.' It dismisses a variable as irrelevant: the outcome is the same no matter what X is. Common collocations: ねんれいをとわず (regardless of age), けいけんをとわず (regardless of experience), きせつをとわず (regardless of season). This pattern is frequent in job postings and event announcements."},

    {type:"mc", q:"にほかならない expresses:", opts:["Strong assertion that X is the only explanation","Uncertainty about the cause","A polite refusal","A conditional statement"], ans:"Strong assertion that X is the only explanation",
     hint:"This pattern insists there is no other e...: it IS this and nothing else."},

    {type:"teach", trg:"〜ものの", src:"although ~ / even though ~ (literary concession)", pos:"conj", gender:null,
     note:"Literary concessive. More formal than けど/が.\nりかいしたものの = although I understood.",
     example:"A: せつめいをきいたものの、まだふにおちない。\nB: もういちどしつもんしてみてはどうですか？",
     exampleSrc:"A: Although I heard the explanation, I am still not convinced.\nB: How about asking once more?",
     funFact:"ものの is a literary concessive that acknowledges one fact while asserting a contrasting reality. It is more nuanced than けど (but) and carries the nuance of 'I accept X, yet Y remains true.' It appears in novels, essays, and JLPT N1 passages. The pattern verb-past + ものの is especially common."},

    {type:"teach", trg:"ふにおちない", src:"to not be convinced / to not make sense", pos:"verb", gender:null,
     note:"Kanji: 腑に落ちない. ふ (gut) + におちない (does not fall into).\nOpposite: ふにおちる (to be convinced).",
     example:"A: かれのせつめいはろんりてきだが、ふにおちない。\nB: ちょっかんてきにちがうとかんじるのですね。",
     exampleSrc:"A: His explanation is logical, but I am not convinced.\nB: You feel intuitively that something is off.",
     funFact:"腑に落ちない literally means 'it does not fall into the gut.' Japanese locates understanding in the はら (belly/gut), not the head. This expression captures that moment when something is intellectually logical but does not feel right emotionally. The positive form ふにおちる (it falls into place) describes the satisfying moment of true understanding."},

    {type:"teach", trg:"〜にすぎない", src:"merely ~ / nothing more than ~ / only ~", pos:"part", gender:null,
     note:"Minimizes importance. かのうせいのひとつにすぎない = merely one possibility.\nStrong downplaying expression.",
     example:"A: これはかせつにすぎません。\nB: じっしょうがひつようですね。",
     exampleSrc:"A: This is merely a hypothesis.\nB: Verification is needed.",
     funFact:"にすぎない uses 過ぎない (does not exceed). It frames X as less important than it might appear. In academic writing, にすぎない hedges claims: the findings are 'merely preliminary.' In debate, it downgrades the opponent's point. This pattern is essential for the kind of measured, qualified statements that characterize advanced Japanese argumentation."},

    {type:"fb", s:"これはチームぜんいんのどりょくのけっかに{1}。\n(This is none other than the result of the whole team's effort.)", a:"ほかなりません", opts:["ほかなりません","すぎません","とわず","もって"], sSrc:"This is none other than the result of the whole team's effort.",
     hint:"The emphatic pattern asserting there is no other possible explanation."},

    {type:"teach", trg:"〜つつある", src:"to be in the process of ~ing / to be gradually ~ing", pos:"part", gender:null,
     note:"Formal progressive. More literary than ている.\nかわりつつある = is in the process of changing.",
     example:"A: しゃかいはおおきくかわりつつあります。\nB: へんかについていくのがたいへんですね。",
     exampleSrc:"A: Society is in the process of greatly changing.\nB: Keeping up with the changes is tough.",
     funFact:"つつある combines the continuative つつ (while) with ある (exist). It emphasizes ongoing, gradual change. Unlike ている (simple progressive), つつある implies a noticeable directional trend. News reports love this pattern: こうれいかがすすみつつある (aging is progressing), けいざいがかいふくしつつある (the economy is recovering). It signals a process that has not yet completed."},

    {type:"teach", trg:"〜からといって", src:"just because ~ (does not mean...)", pos:"part", gender:null,
     note:"Warns against false conclusions.\nやすいからといってかわないほうがいい = just because it is cheap does not mean you should buy it.",
     example:"A: にほんごがはなせるからといって、にほんぶんかをりかいしているとはかぎりません。\nB: ことばとぶんかはべつのものですね。",
     exampleSrc:"A: Just because you can speak Japanese does not necessarily mean you understand Japanese culture.\nB: Language and culture are separate things.",
     funFact:"からといって warns against jumping to conclusions: premise X does not automatically guarantee conclusion Y. It is paired with とはかぎらない (it is not necessarily the case that) or わけではない (it does not mean that). This pattern is essential for nuanced argumentation and appears regularly on JLPT N1 and N2 tests."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~ / in accordance with ~", pos:"part", gender:null,
     note:"From もとづく (to be based on). Formal. Kanji: 基づいて.\nじじつにもとづいて = based on facts.",
     example:"A: データにもとづいてはんだんしましょう。\nB: かんじょうではなくきゃっかんてきなこんきょがだいじですね。",
     exampleSrc:"A: Let us make judgments based on data.\nB: Not emotions but objective evidence is important.",
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
