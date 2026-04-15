// B2 Gap Batch B Lesson 13 — Argumentation & Debate
const LESSON_13 = {id:"esv2_b2gB_l13",title:"Argumentación y debate",icon:"💬",xp:15,board:true,steps:[
{type:"intro",title:"Argumentación y debate",desc:"Master vocabulary for constructing arguments, debating, and expressing opinions persuasively in Spanish.",goals:["Learn 12 words about argumentation and debate","Construct formal arguments","Use connectors and evaluative vocabulary"]},

{type:"teach",trg:"en cambio",src:"on the other hand / however",pos:"adv",gender:null,
 note:"Adverbial phrase. Introduces a contrast.\nMore neutral than 'sin embargo'.",
 example:"A: A mi hermano le encanta el fútbol. Yo, en cambio, prefiero el tenis.\nB: Son deportes muy diferentes.",
 exampleSrc:"A: My brother loves football. I, on the other hand, prefer tennis.\nB: They are very different sports.",
 funFact:"'En cambio' literally means 'in exchange'. It softly contrasts two ideas without strong opposition."},

{type:"teach",trg:"como que no",src:"no way / as if not",pos:"adv",gender:null,
 note:"Colloquial expression. Shows disbelief or refusal.\nOften with exclamation mark.",
 example:"A: ¿Puedes quedarte a trabajar hasta las diez?\nB: Como que no, tengo planes esta noche.",
 exampleSrc:"A: Can you stay working until ten?\nB: No way, I have plans tonight.",
 funFact:"This colloquial phrase is typical of informal Peninsular Spanish and shows mild indignation."},

{type:"teach",trg:"la consideración",src:"the consideration / respect",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought about something.\nAlso: respect for others' feelings.",
 example:"A: Hay que tomar en consideración todas las opiniones.\nB: Solo así llegaremos a un acuerdo justo.",
 exampleSrc:"A: We must take all opinions into consideration.\nB: Only then will we reach a fair agreement.",
 funFact:"'De mi consideración' is a very formal letter opening in Spanish, similar to 'Dear Sir/Madam'."},

{type:"teach",trg:"el motivo",src:"the reason / motive",pos:"noun",gender:"m",
 note:"Masculine noun. The reason behind an action.\nAlso adj: motivating, driving.",
 example:"A: ¿Cuál fue el motivo de su dimisión?\nB: Discrepancias con la dirección de la empresa.",
 exampleSrc:"A: What was the reason for his resignation?\nB: Disagreements with the company management.",
 funFact:"In art, 'motivo' also means a recurring theme or pattern, like a musical motif."},

{type:"mc",q:"¿Qué función tiene 'en cambio' en una frase?",
 opts:["Introduce un contraste entre dos ideas","Añade una causa a un efecto","Concluye un argumento","Presenta un ejemplo"],
 ans:"Introduce un contraste entre dos ideas",
 hint:"Think about connecting two sentences where the second presents an opposite or different perspective."},

{type:"teach",trg:"la inconveniencia",src:"the inconvenience / unsuitability",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being unsuitable.\nMore formal than 'inconveniente'.",
 example:"A: La inconveniencia de esa propuesta es evidente.\nB: No tiene en cuenta las necesidades reales.",
 exampleSrc:"A: The unsuitability of that proposal is evident.\nB: It does not take real needs into account.",
 funFact:"In formal Spanish, 'inconveniencia' stresses the quality of being inappropriate, not just bothersome."},

{type:"teach",trg:"la máxima",src:"the maxim / principle",pos:"noun",gender:"f",
 note:"Feminine noun. A short, wise statement.\nAlso: the highest temperature of the day.",
 example:"A: Su máxima era: 'quien no arriesga, no gana'.\nB: Vivió toda su vida según ese principio.",
 exampleSrc:"A: His maxim was: 'nothing ventured, nothing gained'.\nB: He lived his whole life by that principle.",
 funFact:"In weather forecasts, 'la máxima' means the day's high temperature: 'máxima de 35 grados'."},

{type:"teach",trg:"la fechoría",src:"the misdeed / wrongdoing",pos:"noun",gender:"f",
 note:"Feminine noun. A wicked or mischievous act.\nFrom hecho (deed) with pejorative suffix.",
 example:"A: Las fechorías del dictador fueron juzgadas años después.\nB: La justicia llegó tarde pero llegó.",
 exampleSrc:"A: The dictator's misdeeds were judged years later.\nB: Justice arrived late but it arrived.",
 funFact:"The suffix -oría gives a negative twist. 'Fechoría' always implies something wrong or harmful."},

{type:"fb",s:"A mi madre le gusta el campo. Yo, {1}, prefiero la ciudad.",
 a:["en cambio"],opts:["en cambio","como que no","la máxima","el motivo"],
 hint:"A two-word connector that introduces a contrast between two different preferences.",
 sSrc:"My mother likes the countryside. I, {1}, prefer the city."},

{type:"teach",trg:"ordinario",src:"ordinary / vulgar / common",pos:"adj",gender:null,
 note:"Adjective. Feminine: ordinaria.\nMeans both 'regular' and 'vulgar/coarse' depending on context.",
 example:"A: Su comportamiento fue bastante ordinario.\nB: No debería haber gritado en la reunión.",
 exampleSrc:"A: His behavior was quite vulgar.\nB: He should not have shouted in the meeting.",
 funFact:"Be careful: 'ordinario' can mean 'regular' (sesión ordinaria) or 'vulgar' (persona ordinaria)."},

{type:"teach",trg:"oficioso",src:"unofficial / officious",pos:"adj",gender:null,
 note:"Adjective. Feminine: oficiosa.\nNot official but from a reliable source.\nDifferent from 'oficial'.",
 example:"A: La información es oficiosa, no ha sido confirmada.\nB: Esperemos al comunicado oficial.",
 exampleSrc:"A: The information is unofficial, it has not been confirmed.\nB: Let's wait for the official statement.",
 funFact:"In Spanish, 'oficioso' and 'oficial' are clearly distinct. English 'officious' has a different meaning."},

{type:"teach",trg:"mensurable",src:"measurable",pos:"adj",gender:null,
 note:"Adjective. That can be measured.\nFormal. Synonym: medible.",
 example:"A: Los resultados deben ser mensurables y verificables.\nB: Sin datos concretos, no podemos evaluar el progreso.",
 exampleSrc:"A: The results must be measurable and verifiable.\nB: Without concrete data, we cannot evaluate progress.",
 funFact:"From Latin mensurabilis. In everyday Spanish, 'medible' is more common, but 'mensurable' appears in formal writing."},

{type:"mc",q:"¿Qué significa 'oficioso' en español?",
 opts:["No oficial pero de fuente fiable","Muy trabajador y eficiente","Relacionado con una oficina","Opuesto a lo religioso"],
 ans:"No oficial pero de fuente fiable",
 hint:"Think about information that comes from a credible source but has not been formally confirmed."},

{type:"match",pairs:[
 {trg:"en cambio",src:"on the other hand"},
 {trg:"máxima",src:"maxim / principle"},
 {trg:"fechoría",src:"misdeed"},
 {trg:"ordinario",src:"ordinary / vulgar"},
 {trg:"mensurable",src:"measurable"}
]},

{type:"fb",s:"Sus {1} durante la guerra fueron documentadas por los historiadores.",
 a:["fechorías"],opts:["fechorías","máximas","inconveniencias","consideraciones"],
 hint:"Wicked or harmful actions committed by someone, often documented as crimes.",
 sSrc:"His {1} during the war were documented by historians."},

{type:"fb",s:"Los resultados de la investigación deben ser {1} para tener validez.",
 a:["mensurables"],opts:["mensurables","oficiosos","ordinarios","oficiosos"],
 hint:"Able to be quantified or measured with precision, a key requirement in research.",
 sSrc:"The research results must be {1} to have validity."},

]};
export default LESSON_13;
