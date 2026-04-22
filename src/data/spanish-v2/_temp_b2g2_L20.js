// B2 Gap2 Lesson 20 - Miscellaneous B2 Vocabulary
const LESSON_20 = {id:"esv2_b2g2_l20",title:"Vocabulario avanzado variado",icon:"📚",xp:15,board:true,steps:[
{type:"intro",title:"Vocabulario avanzado variado",desc:"Round out your B2 vocabulary with a diverse collection of useful advanced words across multiple domains.",goals:["Learn 20 varied B2-level words","Use diverse advanced vocabulary","Recognize words across different contexts"]},

{type:"teach",trg:"el apocalipsis",src:"the apocalypse",pos:"noun",gender:"m",
 note:"Masculine noun. A catastrophic event, or the end of the world.",
 example:"A: La película describe un apocalipsis nuclear.\nB: Es aterradora pero muy bien hecha.",
 exampleSrc:"A: The film describes a nuclear apocalypse.\nB: It is terrifying but very well made.",
 funFact:"From Greek apokalypsis (revelation). Also the name of the last book of the Bible in Spanish."},

{type:"teach",trg:"la biblia",src:"the Bible",pos:"noun",gender:"f",
 note:"Feminine noun. The sacred text of Christianity, or an authoritative reference.",
 example:"A: Este libro es la biblia de la cocina española.\nB: Todo cocinero debería tener un ejemplar.",
 exampleSrc:"A: This book is the bible of Spanish cooking.\nB: Every cook should have a copy.",
 funFact:"Figuratively, any definitive reference is called 'la biblia de...' in Spanish."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / outfitting",pos:"noun",gender:"m",
 note:"Masculine noun. The process of preparing or equipping a space.",
 example:"A: El acondicionamiento del local costó más de lo previsto.\nB: Pero ahora está perfecto para el negocio.",
 exampleSrc:"A: The outfitting of the premises cost more than expected.\nB: But now it is perfect for the business.",
 funFact:"'Aire acondicionado' (air conditioning) is Spain's summer essential. From 'acondicionar'."},

{type:"teach",trg:"el anticipo",src:"the advance (payment)",pos:"noun",gender:"m",
 note:"Masculine noun. Money paid before goods or services are delivered.",
 example:"A: Pagamos un anticipo del veinte por ciento.\nB: El resto se abona a la entrega.",
 exampleSrc:"A: We paid a twenty percent advance.\nB: The rest is paid on delivery.",
 funFact:"'Pedir un anticipo' (to request an advance) is common in Spanish employment. Not frowned upon."},

{type:"teach",trg:"la actualización",src:"the update / upgrade",pos:"noun",gender:"f",
 note:"Feminine noun. Bringing something up to date.",
 example:"A: La actualización del software incluye mejoras de seguridad.\nB: Es importante instalarla cuanto antes.",
 exampleSrc:"A: The software update includes security improvements.\nB: It is important to install it as soon as possible.",
 funFact:"False friend: 'actual' = current (not 'actual'). So 'actualización' = update, not 'actualization'."},

{type:"mc",q:"¿Qué es un anticipo?",opts:["Dinero pagado por adelantado","Un recibo de compra","Una devolución de producto","Un tipo de préstamo bancario"],ans:"Dinero pagado por adelantado",hint:"Think about paying part of the price before receiving the full goods or service."},

{type:"teach",trg:"la asignación",src:"the allocation / allowance",pos:"noun",gender:"f",
 note:"Feminine noun. The distribution of resources, or a regular payment.",
 example:"A: La asignación de becas se hará en septiembre.\nB: Hay más solicitudes que plazas disponibles.",
 exampleSrc:"A: The allocation of scholarships will take place in September.\nB: There are more applications than available spots.",
 funFact:"'Asignación mensual' is a monthly allowance. Parents giving kids money use this term formally."},

{type:"teach",trg:"el cese",src:"the cessation / dismissal",pos:"noun",gender:"m",
 note:"Masculine noun. The stopping of an activity, or removal from a position.",
 example:"A: El cese del director fue una sorpresa para todos.\nB: Nadie esperaba ese cambio tan repentino.",
 exampleSrc:"A: The director's dismissal was a surprise for everyone.\nB: Nobody expected such a sudden change.",
 funFact:"'Cese de hostilidades' (cessation of hostilities) is the diplomatic term for a ceasefire."},

{type:"teach",trg:"el auge",src:"the boom / peak",pos:"noun",gender:"m",
 note:"Masculine noun. A period of maximum growth or success.",
 example:"A: El sector tecnológico está en pleno auge.\nB: Las empresas buscan programadores desesperadamente.",
 exampleSrc:"A: The tech sector is booming.\nB: Companies are desperately looking for programmers.",
 funFact:"From French 'auge'. 'Estar en auge' and 'en pleno auge' are essential business expressions."},

{type:"teach",trg:"la clasificación",src:"the classification / rankings",pos:"noun",gender:"f",
 note:"Feminine noun. The organization into categories, or sports standings.",
 example:"A: ¿Quién lidera la clasificación de la Champions?\nB: El Real Madrid va primero de grupo.",
 exampleSrc:"A: Who leads the Champions League standings?\nB: Real Madrid is first in the group.",
 funFact:"In Spanish football culture, checking 'la clasificación' every Monday is a sacred ritual."},

{type:"teach",trg:"el casting",src:"the casting (audition)",pos:"noun",gender:"m",
 note:"Masculine noun. An audition for actors or models.",
 example:"A: Se presentó a un casting para una serie de televisión.\nB: Había más de doscientos aspirantes.",
 exampleSrc:"A: She went to a casting for a TV series.\nB: There were more than two hundred hopefuls.",
 funFact:"English loanword fully adopted. 'Hacer un casting' is standard in Spain's entertainment industry."},

{type:"fb",s:"El sector inmobiliario está en pleno {1} otra vez.",a:["auge"],opts:["auge","cese","casting","apocalipsis"],hint:"The noun meaning boom or peak, indicating maximum growth and success.",sSrc:"The real estate sector is in full {1} again."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The amount of space available to fit something.",
 example:"A: El teatro tiene cabida para quinientas personas.\nB: Las entradas ya no están disponibles.",
 exampleSrc:"A: The theater has room for five hundred people.\nB: Tickets are no longer available.",
 funFact:"'Dar cabida a' (to make room for) is used both literally and figuratively in formal Spanish."},

{type:"teach",trg:"el córner",src:"the corner kick",pos:"noun",gender:"m",
 note:"Masculine noun. A corner kick in football. Plural: córneres.",
 example:"A: El gol llegó tras un córner desde la derecha.\nB: Fue un momento muy bueno para el equipo.",
 exampleSrc:"A: The goal came after a corner kick from the right.\nB: It was a very good moment for the team.",
 funFact:"English loanword adapted to Spanish pronunciation: CÓR-ner. Fully integrated into football talk."},

{type:"teach",trg:"el bandazo",src:"the swerve / sudden change",pos:"noun",gender:"m",
 note:"Masculine noun. A sudden, violent change of direction.",
 example:"A: El gobierno da bandazos con su política económica.\nB: Cada mes cambian de rumbo.",
 exampleSrc:"A: The government lurches in its economic policy.\nB: Every month they change course.",
 funFact:"From 'banda' (side). 'Dar bandazos' is a vivid metaphor for erratic, zig-zagging behavior."},

{type:"teach",trg:"la credibilidad",src:"the credibility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being trusted and believed.",
 example:"A: Su credibilidad como periodista está en entredicho.\nB: Publicó información sin verificar.",
 exampleSrc:"A: His credibility as a journalist is in question.\nB: He published unverified information.",
 funFact:"'Perder credibilidad' (to lose credibility) is one of the most damaging things in Spanish media."},

{type:"mc",q:"¿Qué significa 'dar bandazos'?",opts:["Avanzar en línea recta","Cambiar de dirección bruscamente y sin rumbo","Conducir con mucho cuidado","Tomar decisiones con calma"],ans:"Cambiar de dirección bruscamente y sin rumbo",hint:"Think about a ship or vehicle swaying violently from side to side without control."},

{type:"teach",trg:"el acoso",src:"the harassment",pos:"noun",gender:"m",
 note:"Masculine noun. Persistent unwanted behavior that intimidates.",
 example:"A: El acoso escolar es un problema grave.\nB: Los colegios deben tener protocolos de actuación.",
 exampleSrc:"A: School bullying is a serious problem.\nB: Schools must have action protocols.",
 funFact:"'Acoso laboral' (workplace harassment) and 'acoso escolar' (bullying) are major issues in Spain."},

{type:"teach",trg:"la conveniencia",src:"the convenience / suitability",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being useful, suitable, or advantageous.",
 example:"A: No estoy seguro de la conveniencia de esa medida.\nB: Podría tener efectos no deseados.",
 exampleSrc:"A: I am not sure about the suitability of that measure.\nB: It could have undesired effects.",
 funFact:"'Por conveniencia' means for practical reasons. 'Matrimonio de conveniencia' is a marriage of convenience."},

{type:"teach",trg:"la competitividad",src:"the competitiveness",pos:"noun",gender:"f",
 note:"Feminine noun. The ability to compete effectively.",
 example:"A: La competitividad de nuestras exportaciones ha mejorado.\nB: Los productos españoles ganan mercado en Asia.",
 exampleSrc:"A: The competitiveness of our exports has improved.\nB: Spanish products are gaining market share in Asia.",
 funFact:"Spain works hard on 'competitividad'. The country ranks around 30th on global competitiveness indices."},

{type:"teach",trg:"corporativo",src:"corporate",pos:"adj",gender:null,
 note:"Adjective. Relating to a business corporation.\nFeminine: corporativa.",
 example:"A: La cultura corporativa de esta empresa es muy buena.\nB: Se preocupan por el bienestar de los empleados.",
 exampleSrc:"A: The corporate culture of this company is very good.\nB: They care about employee wellbeing.",
 funFact:"'Responsabilidad social corporativa' (CSR) has become a buzzword in Spanish business culture."},

{type:"fb",s:"El {1} escolar es un problema que los colegios deben abordar.",a:["acoso"],opts:["acoso","bandazo","córner","casting"],hint:"The noun for persistent harassment or bullying, especially in schools.",sSrc:"School {1} is a problem that schools must address."},

{type:"match",pairs:[{trg:"anticipo",src:"advance payment"},{trg:"auge",src:"boom"},{trg:"bandazo",src:"swerve"},{trg:"acoso",src:"harassment"},{trg:"credibilidad",src:"credibility"}]}
]};

export default LESSON_20;
