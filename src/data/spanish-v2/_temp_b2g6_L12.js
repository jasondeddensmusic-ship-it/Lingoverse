// B2 Gap Batch 6 Lesson 12 - Economy & Finance
const LESSON_12 = {id:"esv2_b2g6_l12",title:"Economía y finanzas",icon:"📊",xp:15,board:true,steps:[
{type:"intro",title:"Economía y finanzas",desc:"Learn vocabulary for discussing economic concepts, financial markets, and business transactions.",goals:["Learn 15 economic and financial terms","Discuss financial concepts confidently","Use formal economic vocabulary"]},

{type:"teach",trg:"las finanzas",src:"finance / finances",pos:"noun",gender:"f",
 note:"Feminine plural noun. The management of money.\nAlmost always used in plural.",
 example:"A: Las finanzas de la empresa están en buena situación.\nB: Los beneficios han crecido un quince por ciento.",
 exampleSrc:"A: The company's finances are in good shape.\nB: Profits have grown by fifteen percent.",
 funFact:"From French 'finance'. In Spain, 'Hacienda' is the tax authority, while 'finanzas' is the broader field."},

{type:"teach",trg:"la intermediación",src:"intermediation / brokerage",pos:"noun",gender:"f",
 note:"Feminine noun. Acting as a go-between in transactions.\nInter- (between) + mediación.",
 example:"A: La intermediación financiera es esencial en los mercados.\nB: Los bancos conectan ahorradores con inversores.",
 exampleSrc:"A: Financial intermediation is essential in markets.\nB: Banks connect savers with investors.",
 funFact:"'Intermediación bancaria' is the core function of banks: taking deposits and making loans."},

{type:"teach",trg:"el intermediario",src:"the intermediary / middleman",pos:"noun",gender:"m",
 note:"Masculine noun. A person or company acting between\ntwo parties. Feminine: la intermediaria.",
 example:"A: Contratamos un intermediario para la negociación.\nB: Es mejor que alguien neutral facilite el acuerdo.",
 exampleSrc:"A: We hired an intermediary for the negotiation.\nB: It is better that someone neutral facilitates the agreement.",
 funFact:"In real estate, the intermediary is the 'agente inmobiliario'. In trade, a 'corredor' (broker)."},

{type:"teach",trg:"la inflexión",src:"the inflection / turning point",pos:"noun",gender:"f",
 note:"Feminine noun. A change in direction or tone.\nFrom Latin inflexio.",
 example:"A: Este trimestre marca un punto de inflexión económico.\nB: La recesión parece estar terminando.",
 exampleSrc:"A: This quarter marks an economic turning point.\nB: The recession seems to be ending.",
 funFact:"'Punto de inflexión' (inflection point) is used in both mathematics and economics."},

{type:"mc",q:"¿Qué es un intermediario?",opts:["Alguien que actúa entre dos partes","Un inversor bancario","Un tipo de impuesto","Un documento financiero"],ans:"Alguien que actúa entre dos partes",hint:"A person who acts as a go-between in a deal or negotiation."},

{type:"teach",trg:"la implantación",src:"the implementation / establishment",pos:"noun",gender:"f",
 note:"Feminine noun. The process of putting something in\nplace. From implantar.",
 example:"A: La implantación del nuevo sistema contable tardó seis meses.\nB: Pero ahora funciona mucho mejor.",
 exampleSrc:"A: The implementation of the new accounting system took six months.\nB: But now it works much better.",
 funFact:"Also used in medicine: 'implantación del embrión' (embryo implantation)."},

{type:"teach",trg:"el autoservicio",src:"the self-service",pos:"noun",gender:"m",
 note:"Masculine noun. A system where customers serve\nthemselves. Auto- (self) + servicio.",
 example:"A: Este supermercado tiene cajas de autoservicio.\nB: Son más rápidas si llevas pocas cosas.",
 exampleSrc:"A: This supermarket has self-service checkouts.\nB: They are faster if you have few items.",
 funFact:"'Autoservicio' originally meant a self-service restaurant. Now it mainly refers to self-checkout systems."},

{type:"teach",trg:"la finalización",src:"the completion / finalization",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing or completing.\nFrom finalizar (to finalize).",
 example:"A: La finalización del proyecto está prevista para diciembre.\nB: Hay que cumplir los plazos acordados.",
 exampleSrc:"A: The completion of the project is planned for December.\nB: We must meet the agreed deadlines.",
 funFact:"The verb 'finalizar' is more formal than 'terminar' or 'acabar' in business contexts."},

{type:"fb",s:"Este trimestre marca un punto de {1} en la economía.",a:["inflexión"],opts:["inflexión","intermediación","implantación","finalización"],hint:"A turning point where the direction changes.",sSrc:"This quarter marks a {1} point in the economy."},

{type:"teach",trg:"la gradualidad",src:"gradualness / gradual nature",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of happening step by step.\nFrom gradual + -idad.",
 example:"A: La gradualidad de las reformas evitó muchos problemas.\nB: Los cambios muy rápidos son siempre difíciles.",
 exampleSrc:"A: The gradual nature of the reforms avoided many problems.\nB: Very rapid changes are always difficult.",
 funFact:"From Latin gradus (step). Gradual changes proceed 'step by step'."},

{type:"teach",trg:"la irrupción",src:"the irruption / sudden appearance",pos:"noun",gender:"f",
 note:"Feminine noun. A sudden, forceful entry.\nFrom Latin irruptio.",
 example:"A: La irrupción de las criptomonedas cambió el mercado.\nB: Muchos inversores aún no las entienden.",
 exampleSrc:"A: The irruption of cryptocurrencies changed the market.\nB: Many investors still do not understand them.",
 funFact:"Not 'interrupción' (interruption). 'Irrupción' means bursting onto the scene suddenly."},

{type:"teach",trg:"la fineza",src:"the fineness / refinement / courtesy",pos:"noun",gender:"f",
 note:"Feminine noun. Delicacy, elegance, or a kind gesture.\nFrom fino (fine) + -eza.",
 example:"A: Tuvo la fineza de invitarnos a cenar.\nB: Es una persona muy atenta.",
 exampleSrc:"A: He had the courtesy of inviting us to dinner.\nB: He is a very thoughtful person.",
 funFact:"'Tener la fineza de' is a formal way of saying 'to be kind enough to'."},

{type:"mc",q:"¿Qué es la irrupción de una tecnología?",opts:["Su aparición repentina y fuerte en el mercado","Su desaparición gradual","Su mejora progresiva","Su regulación por el gobierno"],ans:"Su aparición repentina y fuerte en el mercado",hint:"A sudden, forceful appearance. Something bursting onto the scene."},

{type:"match",pairs:[
  {trg:"finanzas",src:"finance"},
  {trg:"intermediario",src:"intermediary"},
  {trg:"implantación",src:"implementation"},
  {trg:"irrupción",src:"sudden appearance"},
  {trg:"gradualidad",src:"gradualness"}
]},

{type:"fb",s:"La {1} del nuevo sistema se completará en tres fases.",a:["implantación"],opts:["implantación","irrupción","inflexión","intermediación"],hint:"Putting a new system or process in place.",sSrc:"The {1} of the new system will be completed in three phases."}
]};
export default LESSON_12;
