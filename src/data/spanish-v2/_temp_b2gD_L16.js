// B2 Gap Batch D Lesson 16 - Family, Society & Values
const LESSON_16 = {id:"esv2_b2gD_l16",title:"Familia y sociedad",icon:"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",xp:15,board:true,steps:[
{type:"intro",title:"Familia y sociedad",desc:"Learn vocabulary for family relationships, social structures, and values central to Spanish-speaking cultures.",goals:["Learn 10 family and society vocabulary items","Discuss family dynamics and social norms","Use adjectives describing family and social roles"]},

{type:"teach",trg:"parental",src:"parental",pos:"adj",gender:null,
 note:"Adjective. Relating to parents. Same form for m/f.\nAutoridad parental: parental authority.",
 example:"A: El control parental en internet es importante para los niños.\nB: Hay aplicaciones que ayudan a filtrar el contenido.",
 exampleSrc:"A: Parental control on the internet is important for children.\nB: There are apps that help filter content.",
 funFact:"'Licencia parental' (parental leave) is gender-neutral in Spanish. Spain equalized paternity and maternity leave in 2021."},

{type:"teach",trg:"paternal",src:"paternal / fatherly",pos:"adj",gender:null,
 note:"Adjective. Relating to the father specifically.\nAbuelo paterno: paternal grandfather.",
 example:"A: Tiene un gesto muy paternal con sus alumnos.\nB: Se nota que los trata como si fueran sus hijos.",
 exampleSrc:"A: He has a very fatherly manner with his students.\nB: You can tell he treats them as if they were his children.",
 funFact:"Spanish distinguishes clearly: 'paternal' (father's side), 'maternal' (mother's side). Both surnames trace these lines."},

{type:"teach",trg:"patriarcal",src:"patriarchal",pos:"adj",gender:null,
 note:"Adjective. Relating to a system where men hold power.\nSociedad patriarcal: patriarchal society.",
 example:"A: La sociedad patriarcal está siendo cuestionada por las nuevas generaciones.\nB: El cambio es lento pero constante.",
 exampleSrc:"A: Patriarchal society is being questioned by the new generations.\nB: Change is slow but steady.",
 funFact:"Spain transitioned from a deeply patriarchal society under Franco to one of Europe's most progressive on gender equality."},

{type:"teach",trg:"patrimonial",src:"patrimonial / heritage-related",pos:"adj",gender:null,
 note:"Adjective. Relating to heritage or inherited property.\nBien patrimonial: heritage asset.",
 example:"A: El castillo es un bien patrimonial protegido por la ley.\nB: No se puede modificar su estructura original.",
 exampleSrc:"A: The castle is a heritage asset protected by law.\nB: Its original structure cannot be modified.",
 funFact:"Spain has 50 UNESCO World Heritage sites, the third most in the world. Each is a 'bien patrimonial de la humanidad'."},

{type:"mc",q:"'Parental' se refiere a...",opts:["Ambos padres, madre y padre","Solo el padre","Solo la madre","Los abuelos"],ans:"Ambos padres, madre y padre",hint:"This adjective is gender-neutral and applies to both parents equally."},

{type:"teach",trg:"parejo",src:"even / equal / matched",pos:"adj",gender:null,
 note:"Adjective. Equal or similar in quality or amount.\nForms: parejo/a/os/as. Ir parejos: to be neck and neck.",
 example:"A: Los dos equipos van muy parejos en la clasificación.\nB: El último partido decidirá quién gana la liga.",
 exampleSrc:"A: The two teams are very evenly matched in the standings.\nB: The last match will decide who wins the league.",
 funFact:"In Latin American Spanish, 'parejo' is more common than in Spain, where 'igualado' or 'emparejado' may be preferred."},

{type:"teach",trg:"liberador",src:"liberating / liberator",pos:"adj",gender:null,
 note:"Adjective/noun. That which frees or the person who liberates.\nFeminine: liberadora.",
 example:"A: Fue una experiencia liberadora dejar ese trabajo que me hacía infeliz.\nB: A veces hay que ser valiente para cambiar de vida.",
 exampleSrc:"A: It was a liberating experience to leave that job that made me unhappy.\nB: Sometimes you have to be brave to change your life.",
 funFact:"Simón Bolívar is called 'El Libertador' (The Liberator) across South America for his role in independence from Spain."},

{type:"teach",trg:"pascual",src:"paschal / Easter-related",pos:"adj",gender:null,
 note:"Adjective. Relating to Easter or Passover.\nCordero pascual: Paschal lamb.",
 example:"A: Las procesiones pascuales son el evento más importante de Semana Santa.\nB: En Sevilla atraen a miles de turistas cada año.",
 exampleSrc:"A: The Easter processions are the most important event of Holy Week.\nB: In Seville they attract thousands of tourists every year.",
 funFact:"Semana Santa is Spain's most spectacular religious festival. 'Pascua' can mean Easter or Christmas depending on the region."},

{type:"fb",s:"Los dos candidatos van muy {1} en las encuestas.",a:["parejos"],opts:["parejos","paternales","patriarcales","pascuales"],hint:"Evenly matched, with very similar numbers. Neither clearly ahead.",sSrc:"The two candidates are very {1} in the polls."},

{type:"teach",trg:"el día",src:"the day",pos:"noun",gender:"m",
 note:"Masculine noun. A period of 24 hours or daylight hours.\nDía a día: day by day. Hoy en día: nowadays.",
 example:"A: Hoy en día es difícil vivir sin tecnología.\nB: Hace solo veinte años era muy diferente.",
 exampleSrc:"A: Nowadays it's hard to live without technology.\nB: Just twenty years ago it was very different.",
 funFact:"'Día' is masculine despite ending in -a. Other exceptions: el mapa, el problema, el tema. All come from Greek neuter nouns."},

{type:"teach",trg:"patente",src:"obvious / patent / clear",pos:"adj",gender:null,
 note:"Adjective. Clearly visible or evident.\nAlso noun: una patente (a patent).",
 example:"A: Su nerviosismo era patente durante toda la entrevista.\nB: Le temblaban las manos cuando hablaba.",
 exampleSrc:"A: His nervousness was obvious throughout the interview.\nB: His hands were shaking when he spoke.",
 funFact:"As a noun, 'patente' means a legal patent. 'Patentar' (to patent) an invention is 'registrar una patente'."},

{type:"match",pairs:[
 {trg:"parental",src:"parental"},
 {trg:"patriarcal",src:"patriarchal"},
 {trg:"patrimonial",src:"heritage-related"},
 {trg:"liberador",src:"liberating"},
 {trg:"patente",src:"obvious / patent"}
]},

{type:"mc",q:"Un bien patrimonial es...",opts:["Un elemento del patrimonio cultural protegido","Un producto financiero bancario","Un regalo de cumpleaños","Un tipo de seguro de vida"],ans:"Un elemento del patrimonio cultural protegido",hint:"A heritage asset, like a historic building or artwork, legally protected for future generations."},

{type:"fb",s:"Dejar ese trabajo fue una experiencia {1} para ella.",a:["liberadora"],opts:["liberadora","paternal","patriarcal","pascual"],hint:"An adjective describing something that frees you from a burden or oppression.",sSrc:"Leaving that job was a {1} experience for her."},

{type:"mc",q:"'Hoy en día' es sinónimo de...",opts:["Actualmente / en la actualidad","Ayer por la mañana","El año pasado","En el futuro"],ans:"Actualmente / en la actualidad",hint:"A fixed expression meaning 'nowadays' or 'in the present time'."}
]};
export default LESSON_16;
