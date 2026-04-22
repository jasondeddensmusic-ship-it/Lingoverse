// B2 Gap Batch C Lesson 02 - Marketing & Sales
const LESSON_2 = {id:"esv2_b2gC_l2",title:"Marketing y ventas",icon:"📊",xp:15,board:true,steps:[
{type:"intro",title:"Marketing y ventas",desc:"Learn essential vocabulary for marketing departments, advertising agencies, and sales strategies in Spain.",goals:["Learn 12 words about marketing and sales","Discuss advertising strategies","Use commercial vocabulary fluently"]},

{type:"teach",trg:"la agencia de publicidad",src:"the advertising agency",pos:"noun",gender:"f",
 note:"Feminine compound noun. A company that creates ads.\nPublicidad comes from Latin publicus.",
 example:"A: Nuestra agencia de publicidad ha diseñado la nueva campaña.\nB: ¿Cuándo se lanza al mercado?",
 exampleSrc:"A: Our advertising agency has designed the new campaign.\nB: When does it launch on the market?",
 funFact:"Spain's advertising industry is the fourth largest in Europe, centered in Madrid and Barcelona."},

{type:"teach",trg:"la directora de ventas",src:"the sales director (female)",pos:"noun",gender:"f",
 note:"Feminine compound noun. Leads the sales team.\nMale form: el director de ventas.",
 example:"A: La directora de ventas ha superado los objetivos del trimestre.\nB: Impresionante, un 120% de la meta.",
 exampleSrc:"A: The sales director has exceeded the quarterly targets.\nB: Impressive, 120% of the goal.",
 funFact:"In Spanish business, 'ventas' (sales) always uses the plural, unlike English which can use singular."},

{type:"teach",trg:"la dirección comercial",src:"the commercial management / sales department",pos:"noun",gender:"f",
 note:"Feminine compound noun. The department overseeing\ncommercial strategy and client relations.",
 example:"A: La dirección comercial ha aprobado el nuevo descuento.\nB: Eso nos ayudará a competir mejor este mes.",
 exampleSrc:"A: The commercial department has approved the new discount.\nB: That will help us compete better this month.",
 funFact:"In Spain, 'comercial' as a noun means a salesperson, while as an adjective it means commercial."},

{type:"teach",trg:"la comunicación empresarial",src:"the corporate communication",pos:"noun",gender:"f",
 note:"Feminine compound noun. Internal and external\nmessaging of a company.",
 example:"A: La comunicación empresarial ha mejorado mucho este año.\nB: Sí, el nuevo director ha cambiado la estrategia.",
 exampleSrc:"A: Corporate communication has improved a lot this year.\nB: Yes, the new director has changed the strategy.",
 funFact:"Many Spanish companies now have a 'dircom' (director de comunicación), a role that barely existed 20 years ago."},

{type:"mc",q:"¿Qué hace una agencia de publicidad?",opts:["Diseña campañas publicitarias","Gestiona los recursos humanos","Fabrica productos industriales","Ofrece servicios médicos"],ans:"Diseña campañas publicitarias",hint:"This company creates advertisements and promotional campaigns for clients."},

{type:"teach",trg:"el comercio exterior",src:"the foreign trade",pos:"noun",gender:"m",
 note:"Masculine compound noun. International buying and selling.\nAlso: comercio internacional.",
 example:"A: El comercio exterior ha crecido un 8% este año.\nB: Las exportaciones de aceite de oliva han sido clave.",
 exampleSrc:"A: Foreign trade has grown 8% this year.\nB: Olive oil exports have been key.",
 funFact:"Spain is the world's largest producer of olive oil, exporting over half its production."},

{type:"teach",trg:"el mercado común",src:"the common market",pos:"noun",gender:"m",
 note:"Masculine compound noun. A trade area with shared rules.\nHistorically refers to the EU predecessor.",
 example:"A: España entró en el mercado común en 1986.\nB: Fue un momento decisivo para la economía española.",
 exampleSrc:"A: Spain entered the common market in 1986.\nB: It was a decisive moment for the Spanish economy.",
 funFact:"Spain joined the European Economic Community on January 1, 1986, transforming its economy."},

{type:"teach",trg:"el conductor",src:"the presenter / host / driver",pos:"noun",gender:"m",
 note:"Masculine noun. Person who leads or drives.\nFeminine: la conductora.",
 example:"A: El conductor del programa de televisión es muy famoso.\nB: Sí, lleva más de diez años presentando.",
 exampleSrc:"A: The TV show host is very famous.\nB: Yes, he has been presenting for over ten years.",
 funFact:"In Spain, 'conductor' means both TV host and vehicle driver. Context always clarifies."},

{type:"fb",s:"Nuestra {1} ha diseñado una campaña muy creativa.",a:["agencia de publicidad"],opts:["agencia de publicidad","dirección comercial","comunicación empresarial","mercado común"],hint:"A company you hire to create your advertisements and promotions.",sSrc:"Our {1} has designed a very creative campaign."},

{type:"teach",trg:"la intermediación",src:"the intermediation / brokerage",pos:"noun",gender:"f",
 note:"Feminine noun. Acting as a go-between in deals.\nFrom intermediar (to mediate).",
 example:"A: La intermediación financiera es clave en este sector.\nB: Sin intermediarios, las operaciones serían muy lentas.",
 exampleSrc:"A: Financial intermediation is key in this sector.\nB: Without intermediaries, operations would be very slow.",
 funFact:"The -ción suffix in Spanish always creates feminine nouns, just like English -tion."},

{type:"teach",trg:"la metodología",src:"the methodology",pos:"noun",gender:"f",
 note:"Feminine noun. A system of methods for a field.\nFrom Greek methodos + logos.",
 example:"A: ¿Cuál es la metodología de este estudio de mercado?\nB: Encuestas a mil consumidores en cinco ciudades.",
 exampleSrc:"A: What is the methodology of this market study?\nB: Surveys of a thousand consumers in five cities.",
 funFact:"Spanish borrowed this directly from Greek via Latin. It sounds nearly identical in many European languages."},

{type:"teach",trg:"la pauta",src:"the guideline / pattern",pos:"noun",gender:"f",
 note:"Feminine noun. A rule to follow or a recurring pattern.\nVery common in business contexts.",
 example:"A: Las pautas del proyecto están claras desde el principio.\nB: Bien, así evitamos malentendidos.",
 exampleSrc:"A: The project guidelines are clear from the start.\nB: Good, that way we avoid misunderstandings.",
 funFact:"From Latin pacta (agreements). In media, 'pauta publicitaria' means the advertising schedule."},

{type:"mc",q:"¿Cuándo entró España en el mercado común europeo?",opts:["En 2002","En 1986","En 1975","En 1992"],ans:"En 1986",hint:"Think about the year that came about a decade after Franco's dictatorship ended."},

{type:"fb",s:"La {1} de trabajo que seguimos garantiza resultados fiables.",a:["metodología"],opts:["metodología","intermediación","pauta","comunicación"],hint:"A systematic approach or set of methods used to conduct research or work.",sSrc:"The work {1} we follow guarantees reliable results."},

{type:"match",pairs:[{trg:"agencia de publicidad",src:"advertising agency"},{trg:"comercio exterior",src:"foreign trade"},{trg:"pauta",src:"guideline"},{trg:"intermediación",src:"brokerage"},{trg:"conductor",src:"host / driver"}]},

{type:"fb",s:"Las {1} del proyecto deben respetarse en todo momento.",a:["pautas"],opts:["pautas","ventas","agencias","direcciones"],hint:"The rules or guidelines that everyone must follow during a project.",sSrc:"The project {1} must be respected at all times."}
]};

export default LESSON_2;
