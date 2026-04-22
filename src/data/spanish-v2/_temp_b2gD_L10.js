// B2 Gap Batch D Lesson 10 - Society & Movements
const LESSON_10 = {id:"esv2_b2gD_l10",title:"Sociedad y movimientos",icon:"\u270A",xp:15,board:true,steps:[
{type:"intro",title:"Sociedad y movimientos",desc:"Learn vocabulary for social movements, political concepts, and historical processes essential for B2 discussions.",goals:["Learn 10 society and political vocabulary items","Discuss social movements and ideologies","Use formal political terminology accurately"]},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. A political ideology advocating common ownership.\nRelated: comunista (communist).",
 example:"A: El comunismo tuvo una gran influencia en la política española del siglo XX.\nB: La Guerra Civil dividió al país entre diferentes ideologías.",
 exampleSrc:"A: Communism had a great influence on 20th-century Spanish politics.\nB: The Civil War divided the country between different ideologies.",
 funFact:"Spain's Communist Party (PCE) was legalized in 1977, two years after Franco's death, a key moment in the democratic transition."},

{type:"teach",trg:"el patriota",src:"the patriot",pos:"noun",gender:"m",
 note:"Masculine/feminine noun (el/la patriota).\nSomeone who loves and defends their country.",
 example:"A: Los patriotas lucharon por la independencia de su país.\nB: Su sacrificio fue fundamental para conseguir la libertad.",
 exampleSrc:"A: The patriots fought for their country's independence.\nB: Their sacrifice was fundamental to achieving freedom.",
 funFact:"In Latin America, 'patriota' has strong positive connotations tied to independence heroes like Bolivar and San Martin."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A group gathered for a common purpose.\nOften religious, but also general assemblies.",
 example:"A: La congregación se reunió para discutir los problemas del barrio.\nB: Asistieron más de doscientas personas.",
 exampleSrc:"A: The congregation gathered to discuss neighborhood problems.\nB: More than two hundred people attended.",
 funFact:"In Catholic Spain, 'congregaciones' were lay religious brotherhoods. Many still organize Semana Santa processions."},

{type:"teach",trg:"la normalización",src:"the normalization / standardization",pos:"noun",gender:"f",
 note:"Feminine noun. Making something standard or accepted.\nTechnical: setting industrial norms.",
 example:"A: La normalización del teletrabajo ha cambiado las ciudades.\nB: Muchos empleados ya no necesitan vivir cerca de la oficina.",
 exampleSrc:"A: The normalization of remote work has changed cities.\nB: Many employees no longer need to live near the office.",
 funFact:"In Catalonia and the Basque Country, 'normalización lingüística' refers to policies promoting regional languages alongside Spanish."},

{type:"mc",q:"La normalización del teletrabajo significa que...",opts:["Se ha convertido en algo habitual y aceptado","Ha sido prohibido por ley","Solo funciona en grandes empresas","Es una moda pasajera"],ans:"Se ha convertido en algo habitual y aceptado",hint:"When something becomes standard practice and widely accepted in society."},

{type:"teach",trg:"la internacionalización",src:"the internationalization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of becoming international.\nKey term in business and education.",
 example:"A: La internacionalización de la empresa comenzó con la apertura de oficinas en Francia.\nB: Ahora están presentes en quince países.",
 exampleSrc:"A: The company's internationalization began with opening offices in France.\nB: Now they're present in fifteen countries.",
 funFact:"Spanish universities use 'internacionalización' as a strategic goal. The Erasmus program drove this trend since Spain joined the EU in 1986."},

{type:"teach",trg:"la ovación",src:"the ovation / standing ovation",pos:"noun",gender:"f",
 note:"Feminine noun. Enthusiastic applause from an audience.\n'Ovación cerrada': thunderous applause.",
 example:"A: El público le dedicó una ovación de cinco minutos.\nB: Se lo merecía, la actuación fue extraordinaria.",
 exampleSrc:"A: The audience gave him a five-minute ovation.\nB: He deserved it, the performance was extraordinary.",
 funFact:"From Latin 'ovatio', a lesser form of Roman triumph. In bullfighting, an 'ovación' is an official recognition of a good performance."},

{type:"teach",trg:"la incursión",src:"the incursion / raid / foray",pos:"noun",gender:"f",
 note:"Feminine noun. A sudden attack or entry into new territory.\nAlso figurative: a foray into a new field.",
 example:"A: Su incursión en el mundo de la política fue breve pero intensa.\nB: Al final volvió a dedicarse a la empresa privada.",
 exampleSrc:"A: His foray into the world of politics was brief but intense.\nB: In the end he went back to private business.",
 funFact:"Historically, 'incursiones' referred to Moorish raids on Christian territory and vice versa during the Reconquista."},

{type:"fb",s:"El público le dedicó una {1} cerrada al final del concierto.",a:["ovación"],opts:["ovación","incursión","congregación","normalización"],hint:"Enthusiastic, prolonged applause from an audience. Often described as 'cerrada' when thunderous.",sSrc:"The audience gave him a thunderous {1} at the end of the concert."},

{type:"teach",trg:"la modificación",src:"the modification / change",pos:"noun",gender:"f",
 note:"Feminine noun. A change or alteration to something.\nFrom modificar (to modify).",
 example:"A: La modificación del contrato requiere la firma de ambas partes.\nB: Consulta con el abogado antes de firmar nada.",
 exampleSrc:"A: The modification of the contract requires both parties' signatures.\nB: Consult with the lawyer before signing anything.",
 funFact:"In Spanish law, 'modificación sustancial' (substantial modification) of work conditions has specific legal protections for workers."},

{type:"teach",trg:"la paridad",src:"the parity / equality",pos:"noun",gender:"f",
 note:"Feminine noun. State of being equal, especially in numbers.\nGender parity: paridad de género.",
 example:"A: El gobierno busca la paridad en los cargos directivos.\nB: Aún queda mucho camino por recorrer.",
 exampleSrc:"A: The government seeks parity in leadership positions.\nB: There's still a long way to go.",
 funFact:"Spain's 2007 Equality Law requires 'paridad' (40-60% each gender) on electoral lists. It was groundbreaking in Europe."},

{type:"match",pairs:[
 {trg:"comunismo",src:"communism"},
 {trg:"patriota",src:"patriot"},
 {trg:"normalización",src:"normalization"},
 {trg:"ovación",src:"ovation"},
 {trg:"paridad",src:"parity / equality"}
]},

{type:"mc",q:"La paridad de género busca...",opts:["Separación de poderes del estado","Igualdad entre hombres y mujeres en representación","Superioridad femenina en la política","Eliminación de todos los partidos políticos"],ans:"Igualdad entre hombres y mujeres en representación",hint:"Equal representation. Think of quotas and balanced numbers in leadership."},

{type:"fb",s:"Su {1} en el mundo del cine fue breve pero exitosa.",a:["incursión"],opts:["incursión","ovación","paridad","modificación"],hint:"A brief entry or foray into a new field or territory. Often used figuratively.",sSrc:"His {1} into the world of cinema was brief but successful."},

{type:"mc",q:"Una congregación es...",opts:["Un documento oficial","Una fiesta popular","Un grupo de personas reunidas con un fin común","Un tipo de edificio religioso"],ans:"Un grupo de personas reunidas con un fin común",hint:"People who come together for a shared purpose, often in a religious or community context."}
]};
export default LESSON_10;
