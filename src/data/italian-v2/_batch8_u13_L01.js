// Batch 8 — Unit 13 extra lesson. Subjunctive: Doubt & Uncertainty
const BATCH8_L1 = {id:"itv2_u13l_b8_1", title:"Dubbi e incertezze", icon:"🤔", xp:15, board:true, steps:[
{type:"intro", title:"Dubbi e incertezze",
 desc:"Learn to express doubt, uncertainty, and possibility using the subjunctive with new trigger phrases.",
 goals:["Express doubt with subjunctive triggers","Use uncertainty vocabulary","Form complex opinion sentences"]},

{type:"teach", trg:"supporre", src:"to suppose / to assume", pos:"verb", gender:null,
 note:"Irregular. Past: supposto. Triggers subjunctive.\n'Suppongo che...' = I suppose that...",
 example:"A: Suppongo che tu abbia ragione.\nB: Ne sono sicuro!",
 exampleSrc:"A: I suppose you are right.\nB: I am sure of it!",
 funFact:"'Supporre' comes from Latin 'sub + ponere' (to place under). You 'place an idea under' consideration. It always triggers the subjunctive because it implies uncertainty."},

{type:"teach", trg:"il dubbio", src:"the doubt", pos:"noun", gender:"m",
 note:"Masculine noun. 'Avere un dubbio' = to have a doubt.\n'Senza dubbio' = without doubt.",
 example:"A: Ho un dubbio sulla risposta.\nB: Quale? Posso aiutarti.",
 exampleSrc:"A: I have a doubt about the answer.\nB: Which one? I can help you.",
 funFact:"'Nel dubbio, astieniti' (when in doubt, abstain) is a classic Italian proverb. It reflects the Italian love of careful deliberation before action."},

{type:"teach", trg:"l'ipotesi", src:"the hypothesis", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural: le ipotesi.\n'Fare un'ipotesi' = to make a hypothesis.",
 example:"A: La mia ipotesi e che piova domani.\nB: Io invece penso che faccia bello.",
 exampleSrc:"A: My hypothesis is that it will rain tomorrow.\nB: I instead think the weather will be nice.",
 funFact:"From Greek 'hypo' (under) + 'thesis' (placing). Italian kept the Greek word intact. Scientific Italian uses many Greek-origin terms."},

{type:"teach", trg:"ammettere", src:"to admit / to acknowledge", pos:"verb", gender:null,
 note:"Irregular. Past: ammesso. 'Ammesso che...' + subjunctive = assuming that...",
 example:"A: Ammetto che sia difficile.\nB: Almeno ci stai provando!",
 exampleSrc:"A: I admit that it is difficult.\nB: At least you are trying!",
 funFact:"'Ammesso e non concesso' (admitted but not granted) is a legal and rhetorical phrase meaning 'even if we accept this point, it does not follow that...'"},

{type:"teach", trg:"la convinzione", src:"the belief / conviction", pos:"noun", gender:"f",
 note:"Feminine noun. 'Avere la convinzione' = to have the conviction.\n'Convincere' = to convince.",
 example:"A: Ho la convinzione che le cose miglioreranno.\nB: Ammiro il tuo ottimismo.",
 exampleSrc:"A: I have the conviction that things will improve.\nB: I admire your optimism.",
 funFact:"'Convinzione' can be positive (belief) or negative (stubbornness). 'E testardo nelle sue convinzioni' means someone who will not change their mind."},

{type:"teach", trg:"presumere", src:"to presume / to assume", pos:"verb", gender:null,
 note:"Irregular. Past: presunto.\n'Presunto' = presumed/alleged (used in law).",
 example:"A: Presumo che arrivi in ritardo.\nB: Come sempre, purtroppo.",
 exampleSrc:"A: I presume he will arrive late.\nB: As always, unfortunately.",
 funFact:"'Il presunto colpevole' (the alleged guilty party) is a legal term. Italian law uses 'presunto innocente' (presumed innocent), a principle dating to Roman law."},

{type:"teach", trg:"la certezza", src:"the certainty", pos:"noun", gender:"f",
 note:"Feminine noun. Opposite of 'il dubbio.'\n'Con certezza' = with certainty.",
 example:"A: Non ho nessuna certezza sul futuro.\nB: Nessuno ce l'ha, tranquillo.",
 exampleSrc:"A: I have no certainty about the future.\nB: Nobody does, do not worry.",
 funFact:"'Le poche certezze della vita' (the few certainties of life) is a philosophical Italian expression. Italians often say death and taxes are the only ones."},

{type:"teach", trg:"negare", src:"to deny", pos:"verb", gender:null,
 note:"Regular -are verb. 'Negare che...' + subjunctive.\n'La negazione' = the denial/negation.",
 example:"A: Nega che ci sia un problema.\nB: Ma il problema e evidente!",
 exampleSrc:"A: He denies that there is a problem.\nB: But the problem is obvious!",
 funFact:"'Non si puo negare che...' (you cannot deny that...) is a powerful rhetorical tool in Italian debate. It introduces a point as undeniable fact."},

{type:"teach", trg:"l'apparenza", src:"the appearance / semblance", pos:"noun", gender:"f",
 note:"Feminine noun. 'Le apparenze ingannano' = appearances are deceiving.\n'In apparenza' = apparently.",
 example:"A: In apparenza sembra tutto normale.\nB: Ma le apparenze ingannano.",
 exampleSrc:"A: Apparently everything seems normal.\nB: But appearances are deceiving.",
 funFact:"'Salvare le apparenze' (to save appearances) is quintessentially Italian. Maintaining a good external image even when things are falling apart. Related to 'bella figura.'"},

{type:"mc",
 q:"What does 'le apparenze ingannano' mean?",
 opts:["Appearances are deceiving","Appearances are everything","The first impression is right","People never change"],
 ans:"Appearances are deceiving",
 hint:"'Ingannare' means to deceive. Things may not be what they seem on the surface."},

{type:"match", pairs:[
  {trg:"il dubbio", src:"the doubt"},
  {trg:"la certezza", src:"the certainty"},
  {trg:"supporre", src:"to suppose"},
  {trg:"negare", src:"to deny"}
]},

{type:"fb",
 s:"{1} che tu abbia ragione su questo punto.",
 a:["Suppongo"],
 opts:["Suppongo","Nego","Ammetto","Presumo"],
 hint:"This verb means 'I suppose.' It expresses a tentative acceptance that something might be true.",
 sSrc:"I {1} that you are right about this point."},

{type:"mc",
 q:"What does 'ammesso e non concesso' mean?",
 opts:["Even if we accept this, it does not follow that...","Admitted and agreed","Accepted and understood","Denied and rejected"],
 ans:"Even if we accept this, it does not follow that...",
 hint:"It is a legal and rhetorical phrase. E... granting one point does not mean the conclusion follows."},

{type:"fb",
 s:"Nega che ci {1} un problema evidente.",
 a:["sia"],
 opts:["sia","e","sara","era"],
 hint:"After 'negare che' you need the subjunctive. The present subjunctive of 'essere' for 'ci' is needed here.",
 sSrc:"He denies that there {1} an obvious problem."},

{type:"mc",
 q:"What is 'salvare le apparenze'?",
 opts:["Maintaining a good external image","Saving money","Helping others","Telling the truth"],
 ans:"Maintaining a good external image",
 hint:"This is related to 'bella figura.' Even when things go wrong, the outward impression must be preserved."}
,{type:"match",pairs:[{trg:"ammettere",src:"to admit / to acknowledge"},{trg:"la convinzione",src:"the belief / conviction"},{trg:"presumere",src:"to presume / to assume"}]},{type:"mc",q:"How do you say \"hypothesis\" in Italian?",opts:["l'ipotesi","la finestra","il tavolo","la bicicletta"],ans:"l'ipotesi",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"appearance / semblance\" in Italian?",opts:["la finestra","l'apparenza","il tavolo","la bicicletta"],ans:"l'apparenza",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
