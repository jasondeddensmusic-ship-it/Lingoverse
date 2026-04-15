// Unit 24 Expansion. Lesson 6: Condizioni nella vita quotidiana
const LESSON_6 = {
  id:"itv2_u24l6", title:"Condizioni nella vita quotidiana", icon:"🏠", xp:15, board:true,
  steps:[
    {type:"intro", title:"Condizioni nella vita quotidiana",
     desc:"Apply if-clauses to everyday situations. From making plans to giving advice, these practical conditional structures are ones you will use daily in Italian conversation.",
     goals:["Use if-clauses naturally in daily conversation","Combine conditions with practical vocabulary","Switch fluidly between all three types"]},

    {type:"teach", trg:"semmai", src:"if anything / if at all / if ever", pos:"adv", gender:null,
     note:"Adverb. Contraction of 'se mai' (if ever).\n'Semmai, ti chiamo io' = If anything, I will call you.",
     example:"A: Vuoi venire con noi?\nB: Semmai vi raggiungo dopo cena.",
     exampleSrc:"A: Do you want to come with us?\nB: If anything, I will join you after dinner.",
     funFact:"'Semmai' is casual and common in spoken Italian. It softens commitments: 'Semmai ci vediamo domani' (If anything, we will see each other tomorrow). It can also correct: 'Non e stupido, semmai e ingenuo' (He is not stupid, if anything he is naive). This little word adds flexibility to Italian conversation."},

    {type:"teach", trg:"casomai", src:"just in case / if by chance", pos:"adv", gender:null,
     note:"Adverb. Contraction of 'caso mai.' Informal alternative to 'nel caso.'\n'Casomai piove, porto l'ombrello' = Just in case it rains.",
     example:"A: Porto una giacca, casomai faccia freddo.\nB: Buona idea, la sera rinfresca.",
     exampleSrc:"A: I will bring a jacket, just in case it gets cold.\nB: Good idea, the evening gets cooler.",
     funFact:"'Casomai' is the informal spoken version of 'nel caso in cui.' Italians use it constantly for precautions: 'Casomai chiama' (Call if needed), 'Casomai passo io' (I will come by if needed). It is one of those words that make spoken Italian sound natural and fluid, much more common than the formal equivalent."},

    {type:"teach", trg:"ammesso che", src:"assuming that / granted that", pos:"conj", gender:null,
     note:"Conjunction. 'Ammesso che' + subjunctive.\n'Ammesso che sia vero' = Assuming it is true.",
     example:"A: Ammesso che tu abbia ragione, cosa facciamo?\nB: Dovremmo parlare con il capo.",
     exampleSrc:"A: Assuming you are right, what do we do?\nB: We should talk to the boss.",
     funFact:"'Ammesso che' introduces a premise that the speaker does not fully accept. It is more skeptical than 'se' (if). 'Ammesso e non concesso che' (granted but not conceded that) is the full legal formula, used in courts. In conversation, 'ammesso che' signals 'even if I accept your claim, then what?'"},

    {type:"teach", trg:"a condizione che", src:"on the condition that", pos:"conj", gender:null,
     note:"Conjunction. 'A condizione che' + subjunctive.\nFormal alternative to 'a patto che.'",
     example:"A: Accetto, a condizione che mi paghiate in anticipo.\nB: D'accordo, paghiamo subito.",
     exampleSrc:"A: I accept, on the condition that you pay me in advance.\nB: Agreed, we will pay immediately.",
     funFact:"'A condizione che' is slightly more formal than 'a patto che' and is common in business and legal contexts. Like all conditional conjunctions, it requires the subjunctive. Italian has a rich set of these: 'se,' 'a patto che,' 'a condizione che,' 'purche,' 'qualora,' each with a different register and shade of meaning."},

    {type:"teach", trg:"nel caso che", src:"in the event that", pos:"conj", gender:null,
     note:"Conjunction. Variant of 'nel caso in cui' + subjunctive.\n'Nel caso che piova' = in the event it rains.",
     example:"A: Nel caso che arrivi tardi, iniziate senza di me.\nB: Va bene, ti teniamo un posto.",
     exampleSrc:"A: In the event I arrive late, start without me.\nB: All right, we will save you a seat.",
     funFact:"'Nel caso che' is a slightly more compact form of 'nel caso in cui.' Both always take the subjunctive. The family of conditional conjunctions from most casual to most formal: casomai (very informal) > nel caso (informal) > nel caso che (neutral) > nel caso in cui (formal) > qualora (very formal)."},

    {type:"teach", trg:"basta che", src:"as long as / it is enough that", pos:"conj", gender:null,
     note:"Conjunction. 'Basta che' + subjunctive.\n'Basta che tu sia felice' = as long as you are happy.",
     example:"A: Posso uscire stasera?\nB: Si, basta che torni prima di mezzanotte.",
     exampleSrc:"A: Can I go out tonight?\nB: Yes, as long as you come back before midnight.",
     funFact:"'Basta che' is warm and parental. Italian mothers use it constantly: 'Basta che mangi' (as long as you eat), 'Basta che stai bene' (as long as you are well). It sets a minimum condition with affection. 'Basta' alone means 'enough!' but with 'che' it becomes a tender conditional."},

    {type:"teach", trg:"senza che", src:"without (someone doing something)", pos:"conj", gender:null,
     note:"Conjunction. 'Senza che' + subjunctive.\n'Senza che nessuno se ne accorga' = without anyone noticing.",
     example:"A: E uscito senza che nessuno se ne accorgesse.\nB: Come ha fatto?",
     exampleSrc:"A: He left without anyone noticing.\nB: How did he do it?",
     funFact:"'Senza che' always triggers the subjunctive because the action in the subordinate clause is negated or avoided. 'Senza che tu lo sappia' (without your knowing) implies secrecy. When the subjects are the same, Italian uses the simpler 'senza + infinitive': 'E uscito senza parlare' (He left without speaking)."},

    {type:"teach", trg:"figurati se", src:"as if (sarcastic) / there is no way", pos:"verb", gender:null,
     note:"Colloquial expression. 'Figurati se viene!' = As if he would come! / No way he is coming!\nUsed to dismiss a possibility with sarcasm.",
     example:"A: Pensi che Marco ci aiutera?\nB: Figurati se Marco alza un dito!",
     exampleSrc:"A: Do you think Marco will help us?\nB: As if Marco would lift a finger!",
     funFact:"'Figurati se...' is pure spoken Italian. It dismisses a possibility with humorous certainty. 'Figurati' alone means 'do not mention it' (in response to thanks) or 'imagine that!' 'Figurati se...' + indicative = 'there is no way that...' It belongs to the expressive, gesture-rich register of colloquial Italian."},

    // Quiz steps
    {type:"mc", q:"What does 'semmai' mean in conversation?",
     opts:["Never and absolutely not under any circumstances","If anything / if at all (softens commitments)","Always and definitely without question","Because of the following specific reason"],
     ans:"If anything / if at all (softens commitments)",
     hint:"A casual contraction of 'se mai.' It adds flexibility: 'Semmai ci vediamo domani' leaves the door open without committing."},

    {type:"fb", s:"Porto una giacca, {1} faccia freddo.",
     a:["casomai"],
     opts:["casomai","figurati","semmai","senza che"],
     hint:"Just in case. The informal spoken version of 'nel caso in cui.' Italians use it constantly for everyday precautions.",
     sSrc:"I will bring a jacket, {1} it gets cold."},

    {type:"match", pairs:[
      {trg:"semmai", src:"if anything / if at all"},
      {trg:"casomai", src:"just in case"},
      {trg:"ammesso che", src:"assuming that"},
      {trg:"basta che", src:"as long as"},
      {trg:"figurati se", src:"as if! / no way"}
    ]},

    {type:"mc", q:"What is the formality order of conditional conjunctions?",
     opts:["All conjunctions are equally formal in Italian","Casomai (most formal) to qualora (least formal)","Casomai (informal) to qualora (very formal)","There is no difference in formality at all"],
     ans:"Casomai (informal) to qualora (very formal)",
     hint:"From casual speech to legal documents: c... > nel caso > nel caso che > nel caso in cui > q...."},

    {type:"fb", s:"Si, {1} che torni prima di mezzanotte.",
     a:["basta"],
     opts:["basta","senza","ammesso","figurati"],
     hint:"As long as you come back on time. This warm, parental conjunction sets a minimum condition with affection.",
     sSrc:"Yes, {1} that you come back before midnight."},

    {type:"mc", q:"When does 'senza che' use the infinitive instead of the subjunctive?",
     opts:["When the sentence is very short and simple","When the main clause subject and subordinate subject are the same","When followed by a noun instead of a verb","It always uses the subjunctive without exceptions"],
     ans:"When the main clause subject and subordinate subject are the same",
     hint:"Same s...: 'E uscito senza parlare' (infinitive). Different subjects: 'E uscito senza che nessuno lo vedesse' (subjunctive)."},

    {type:"fb", s:"{1} che sia vero, cosa facciamo?",
     a:["Ammesso"],
     opts:["Ammesso","Basta","Senza","Figurati"],
     hint:"Assuming your claim is correct, even though I have doubts. This conjunction introduces a premise the speaker does not fully accept.",
     sSrc:"{1} that it is true, what do we do?"},

    {type:"mc", q:"What does 'Figurati se Marco alza un dito!' express?",
     opts:["Confidence that Marco will certainly help everyone","Sarcastic certainty that Marco will definitely not help","A polite request for Marco to assist the group","Surprise that Marco has already offered help"],
     ans:"Sarcastic certainty that Marco will definitely not help",
     hint:"'Figurati se...' dismisses a possibility with humor. It means 'there is absolutely no way that...' Pure spoken Italian."}
  ]
};
export default LESSON_6;
