// Batch 8. Unit 21 extra lesson. Conditional: Polite Requests & Wishes
const BATCH8_L1 = {id:"itv2_u21l_b8_1", title:"Desideri e cortesia", icon:"✨", xp:15, board:true, steps:[
{type:"intro", title:"Desideri e cortesia",
 desc:"Learn to use the conditional for polite requests, wishes, and hypothetical desires.",
 goals:["Make polite requests with the conditional","Express wishes and desires","Use conditional in everyday polite speech"]},

{type:"teach", trg:"desiderare", src:"to desire / to wish", pos:"verb", gender:null,
 note:"Regular -are verb. 'Desiderei' = I would wish (conditional).\n'Il desiderio' = the wish/desire.",
 example:"A: Desidererei un mondo più giusto.\nB: Chi non lo desidererebbe?",
 exampleSrc:"A: I would wish for a fairer world.\nB: Who would not wish for that?",
 funFact:"'Desiderare' comes from Latin 'de + sidus' (from the stars). To desire literally means 'to miss the stars.' The longing for something unreachable."},

{type:"teach", trg:"il favore", src:"the favor", pos:"noun", gender:"m",
 note:"Masculine noun. 'Per favore' = please.\n'Chiedere un favore' = to ask a favor.",
 example:"A: Potrei chiederti un favore?\nB: Certo, dimmi pure.",
 exampleSrc:"A: Could I ask you a favor?\nB: Of course, go ahead.",
 funFact:"'Per favore' and 'per piacere' both mean 'please.' The first is more formal, the second more personal. Using neither makes you sound rude in Italian."},

{type:"teach", trg:"il sogno", src:"the dream", pos:"noun", gender:"m",
 note:"Masculine noun. 'Sognare' = to dream.\n'Il mio sogno nel cassetto' = my secret dream.",
 example:"A: Qual e il tuo sogno nel cassetto?\nB: Vivere in Toscana e fare il vino.",
 exampleSrc:"A: What is your secret dream?\nB: To live in Tuscany and make wine.",
 funFact:"'Sogno nel cassetto' (dream in the drawer) is a beautiful Italian expression for a secret ambition. You keep it hidden, safely tucked away, waiting for the right moment."},

{type:"teach", trg:"la proposta", src:"the proposal / suggestion", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fare una proposta' = to make a proposal.\n'Proporre' = to propose.",
 example:"A: Ho una proposta: usciamo a cena stasera?\nB: Ottima idea, dove andiamo?",
 exampleSrc:"A: I have a suggestion: shall we go out for dinner tonight?\nB: Great idea, where shall we go?",
 funFact:"'Proposta di matrimonio' = marriage proposal. Italian proposals are often theatrical. Some people propose in front of the Trevi Fountain or at the top of the Duomo."},

{type:"teach", trg:"la cortesia", src:"the courtesy / politeness", pos:"noun", gender:"f",
 note:"Feminine noun. 'Per cortesia' = as a courtesy.\n'Cortese' = courteous/polite.",
 example:"A: La ringrazio per la Sua cortesia.\nB: Si figuri, e stato un piacere.",
 exampleSrc:"A: I thank you for your courtesy.\nB: Do not mention it, it was a pleasure.",
 funFact:"Italian courtesy has deep medieval roots. 'Cortesia' comes from 'corte' (court). Courtly manners became the foundation of Italian social interaction."},

{type:"teach", trg:"il compromesso", src:"the compromise", pos:"noun", gender:"m",
 note:"Masculine noun. 'Trovare un compromesso' = to find a compromise.\n'Scendere a compromessi' = to make compromises.",
 example:"A: Dobbiamo trovare un compromesso.\nB: Sono d'accordo, nessuno deve perdere.",
 exampleSrc:"A: We need to find a compromise.\nB: I agree, nobody should lose.",
 funFact:"'Compromesso storico' was a famous Italian political term from the 1970s, describing the proposed alliance between the Christian Democrats and the Communist Party."},

{type:"teach", trg:"accontentarsi", src:"to settle for / to be content with", pos:"verb", gender:null,
 note:"Reflexive verb. 'Chi si accontenta gode' = who settles is content (proverb).\n'Accontentarsi di poco' = to be happy with little.",
 example:"A: Non mi accontento di un lavoro qualsiasi.\nB: Hai ragione, punta in alto.",
 exampleSrc:"A: I will not settle for just any job.\nB: You are right, aim high.",
 funFact:"'Chi si accontenta gode' is a classic Italian proverb. It can be wisdom (appreciate what you have) or criticism (you lack ambition). Tone decides everything."},

{type:"teach", trg:"l'aspirazione", src:"the aspiration / ambition", pos:"noun", gender:"f",
 note:"Feminine noun. 'Aspirare a' = to aspire to.\n'Le aspirazioni' = one's ambitions.",
 example:"A: Quali sono le tue aspirazioni?\nB: Vorrei diventare medico e aiutare gli altri.",
 exampleSrc:"A: What are your aspirations?\nB: I would like to become a doctor and help others.",
 funFact:"'Aspirazione' also means 'suction' in technical Italian. An 'aspirapolvere' (vacuum cleaner) uses the same root. Dreams and vacuum cleaners both 'draw in.'"},

{type:"teach", trg:"la speranza", src:"the hope", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sperare' = to hope.\n'La speranza e l'ultima a morire' = hope is the last to die.",
 example:"A: C'e speranza di trovare una soluzione?\nB: Si, non arrenderti mai.",
 exampleSrc:"A: Is there hope of finding a solution?\nB: Yes, never give up.",
 funFact:"'La speranza e l'ultima a morire' (hope is the last to die) is one of Italy's most beloved proverbs. It echoes Pandora's box, where hope remained when all evils escaped."},

{type:"mc",
 q:"What does 'sogno nel cassetto' mean?",
 opts:["A secret dream kept hidden away","A nightmare","A dream about furniture","A daydream at work"],
 ans:"A secret dream kept hidden away",
 hint:"'Cassetto' means drawer. The d... is tucked a... in a drawer, k... safe until the right moment."},

{type:"match", pairs:[
  {trg:"desiderare", src:"to desire"},
  {trg:"la cortesia", src:"the courtesy"},
  {trg:"il compromesso", src:"the compromise"},
  {trg:"la speranza", src:"the hope"}
]},

{type:"fb",
 s:"Potrei chiederti un {1}? Ho bisogno di aiuto.",
 a:["favore"],
 opts:["favore","sogno","compromesso","desiderio"],
 hint:"You want someone to do something for you. This polite request word means a kind act.",
 sSrc:"Could I ask you a {1}? I need help."},

{type:"mc",
 q:"Where does 'desiderare' literally come from?",
 opts:["French for 'to dream'","Latin for 'from the stars' (longing for something unreachable)","Latin for 'to decide'","Greek for 'to want'"],
 ans:"Latin for 'from the stars' (longing for something unreachable)",
 hint:"'De' + 'sidus' (star). The desire is as distant and beautiful as the s... above."},

{type:"fb",
 s:"Non mi {1} di un lavoro qualsiasi. Voglio il meglio.",
 a:["accontento"],
 opts:["accontento","propongo","spero","aspiro"],
 hint:"This reflexive verb means to settle for or be satisfied with something less than ideal.",
 sSrc:"I will not {1} for just any job. I want the best."},

{type:"mc",
 q:"What does the proverb 'la speranza e l'ultima a morire' mean?",
 opts:["Death brings hope","The last hope is the best","Hope is the last to die (never give up)","Hope always dies first"],
 ans:"Hope is the last to die (never give up)",
 hint:"Even when everything seems lost, hope persists. It echoes the Greek myth of Pandora's box."}
,{type:"match",pairs:[{trg:"il sogno",src:"the dream"},{trg:"la proposta",src:"the proposal / suggestion"},{trg:"accontentarsi",src:"to settle for / to be content with"}]},{type:"mc",q:"How do you say \"aspiration / ambition\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'aspirazione"],ans:"l'aspirazione",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
