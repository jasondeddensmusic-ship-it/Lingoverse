// B2 Gap Batch 4 Lesson 20 - Advanced Verbs & Actions
const LESSON_20 = {id:"esv2_b2g4_l20",title:"Verbos y acciones avanzadas",icon:"⚡",xp:15,board:true,steps:[
{type:"intro",title:"Verbos y acciones avanzadas",desc:"Master advanced verbs and action words to express complex ideas at B2 level.",goals:["Learn 18 advanced verbs and action terms","Use precise verbs for nuanced expression","Discuss complex actions confidently"]},

{type:"teach",trg:"descuajar",src:"to uproot / to dissolve",pos:"verb",gender:null,
 note:"Regular -ar verb. To pull out by the roots or dissolve completely.\nVery expressive verb.",
 example:"A: La tormenta descuajó varios árboles del parque.\nB: Uno cayó sobre un coche aparcado.",
 exampleSrc:"A: The storm uprooted several trees in the park.\nB: One fell on a parked car.",
 funFact:"'Descuajaringarse' (to fall apart laughing) is a hilarious derivative used colloquially in Spain."},

{type:"teach",trg:"divisar",src:"to spot / to make out in the distance",pos:"verb",gender:null,
 note:"Regular -ar verb. To see something far away.\nMore literary than 'ver a lo lejos'.",
 example:"A: Desde la cima, pudimos divisar el mar a lo lejos.\nB: La vista era espectacular.",
 exampleSrc:"A: From the summit, we could make out the sea in the distance.\nB: The view was spectacular.",
 funFact:"'Divisar' implies effort or distance. You 'divisar' a ship on the horizon, not the TV in your room."},

{type:"teach",trg:"desembarazar",src:"to clear / to free from",pos:"verb",gender:null,
 note:"Regular -ar verb (z>c before e). To remove obstacles.\nReflexive: desembarazarse de (to get rid of).",
 example:"A: Hay que desembarazar el pasillo de cajas.\nB: Los bomberos necesitan paso libre.",
 exampleSrc:"A: We need to clear the hallway of boxes.\nB: The firefighters need a clear path.",
 funFact:"In Latin America, 'embarazada' means pregnant. 'Desembarazar' has no connection to pregnancy."},

{type:"teach",trg:"enfundar",src:"to sheathe / to holster",pos:"verb",gender:null,
 note:"Regular -ar verb. To put something into its case.\nFrom funda (cover, case).",
 example:"A: El policía enfundó su arma después de la detención.\nB: La situación estaba bajo control.",
 exampleSrc:"A: The police officer holstered his weapon after the arrest.\nB: The situation was under control.",
 funFact:"'Enfundarse' also means to put on tight clothing: 'Se enfundó un vestido negro'."},

{type:"teach",trg:"engominar",src:"to slick back with gel",pos:"verb",gender:null,
 note:"Regular -ar verb. To apply hair gel or pomade.\nFrom gomina (hair gel).",
 example:"A: Mi abuelo siempre se engominaba el pelo hacia atrás.\nB: Era el estilo de su época.",
 exampleSrc:"A: My grandfather always slicked his hair back with gel.\nB: It was the style of his era.",
 funFact:"'Gomina' comes from the brand Gomina Argentina, popular in 1920s Spain. The brand became the product."},

{type:"mc",q:"'Divisar' algo a lo lejos significa:",opts:["Ver algo en la distancia con esfuerzo","Dividir algo en partes","Adivinar el futuro","Olvidar algo importante"],ans:"Ver algo en la distancia con esfuerzo",hint:"Think about straining your eyes to see something far away on the horizon."},

{type:"teach",trg:"engullir",src:"to gulp down / to devour",pos:"verb",gender:null,
 note:"Irregular -ir verb (ll absorbs i in 3rd person).\nTo eat voraciously, without chewing properly.",
 example:"A: El perro engulló la comida en segundos.\nB: Come como si no lo hubieran alimentado en días.",
 exampleSrc:"A: The dog devoured the food in seconds.\nB: It eats as if it had not been fed in days.",
 funFact:"'Engullir' is more vivid than 'devorar'. It implies swallowing whole, like a snake eating prey."},

{type:"teach",trg:"ensangrentar",src:"to stain with blood",pos:"verb",gender:null,
 note:"Stem-changing verb (e>ie): ensangriento.\nFrom sangre (blood). Very dramatic register.",
 example:"A: La guerra civil ensangrentó el país durante tres años.\nB: Las heridas tardaron décadas en sanar.",
 exampleSrc:"A: The civil war bloodied the country for three years.\nB: The wounds took decades to heal.",
 funFact:"Used almost exclusively in literary or historical contexts. Too dramatic for everyday conversation."},

{type:"teach",trg:"españolizar",src:"to Hispanicize / to make Spanish",pos:"verb",gender:null,
 note:"Regular -ar verb (z>c before e). To adapt to Spanish customs or language.\nNoun: la españolización.",
 example:"A: Muchos apellidos extranjeros se españolizaron con el tiempo.\nB: 'Fischer' se convirtió en 'Pescador'.",
 exampleSrc:"A: Many foreign surnames were Hispanicized over time.\nB: 'Fischer' became 'Pescador'.",
 funFact:"Spain historically españolizó many place names: New York was briefly 'Nueva York' in colonial maps."},

{type:"teach",trg:"dar de alta",src:"to discharge (from hospital) / to register",pos:"verb",gender:null,
 note:"Verbal phrase. To release a patient or register someone.\nOpposite: dar de baja.",
 example:"A: El médico le dio de alta después de tres días en el hospital.\nB: Ya puede seguir la recuperación en casa.",
 exampleSrc:"A: The doctor discharged him after three days in the hospital.\nB: He can continue recovery at home.",
 funFact:"'Darse de alta' in an online service means to sign up. 'Darse de baja' means to unsubscribe."},

{type:"fb",s:"Desde la torre pudimos {1} las montañas nevadas a lo lejos.",a:["divisar"],opts:["divisar","engullir","enfundar","descuajar"],hint:"To see something in the distance, usually from a high vantage point.",sSrc:"From the tower we could {1} the snow-capped mountains in the distance."},

{type:"teach",trg:"explicitar",src:"to make explicit / to spell out",pos:"verb",gender:null,
 note:"Regular -ar verb. To state something clearly and directly.\nMore formal than 'aclarar'.",
 example:"A: El contrato debe explicitar las condiciones de pago.\nB: No puede haber ambigüedades legales.",
 exampleSrc:"A: The contract must spell out the payment conditions.\nB: There cannot be any legal ambiguities.",
 funFact:"'Explicitar' is a relatively new verb in Spanish, becoming common in academic and legal writing."},

{type:"teach",trg:"extraviar",src:"to misplace / to lead astray",pos:"verb",gender:null,
 note:"Regular -ar verb (i>í when stressed): extravío.\nReflexive: extraviarse (to get lost).",
 example:"A: Se me ha extraviado el pasaporte en el aeropuerto.\nB: Ve a la oficina de objetos perdidos.",
 exampleSrc:"A: I have misplaced my passport at the airport.\nB: Go to the lost and found office.",
 funFact:"'Extraviar' is more formal than 'perder'. Airlines use it: 'equipaje extraviado' (misplaced luggage)."},

{type:"teach",trg:"expatriar",src:"to expatriate / to exile",pos:"verb",gender:null,
 note:"Regular -ar verb (i>í when stressed): expatrío.\nReflexive: expatriarse (to move abroad).",
 example:"A: Muchos jóvenes españoles se expatriaron durante la crisis de 2008.\nB: Buscaban oportunidades en otros países europeos.",
 exampleSrc:"A: Many young Spaniards expatriated during the 2008 crisis.\nB: They were looking for opportunities in other European countries.",
 funFact:"Spain's 2008 'fuga de cerebros' (brain drain) sent thousands of young professionals abroad."},

{type:"teach",trg:"evidenciar",src:"to demonstrate / to make evident",pos:"verb",gender:null,
 note:"Regular -ar verb. To show clearly or reveal.\nMore formal than 'mostrar'.",
 example:"A: Los datos evidencian un aumento de la desigualdad.\nB: Es urgente tomar medidas políticas.",
 exampleSrc:"A: The data demonstrates an increase in inequality.\nB: It is urgent to take political measures.",
 funFact:"In Spanish, 'evidenciar' can also mean to embarrass: 'No me evidencies delante de todos'."},

{type:"mc",q:"'Dar de alta' a un paciente significa:",opts:["Transferirlo a otro centro","Permitirle salir del hospital","Ingresarlo en el hospital","Operarlo de urgencia"],ans:"Permitirle salir del hospital",hint:"Think about the moment when a doctor tells a patient they can go home."},

{type:"teach",trg:"descuajar",src:"to uproot / to dissolve",pos:"verb",gender:null,
 note:"Regular -ar verb. To pull out by the roots.\nCommon with storms and trees.",
 example:"A: El huracán descuajó postes de luz en toda la comarca.\nB: Miles de hogares se quedaron sin electricidad.",
 exampleSrc:"A: The hurricane uprooted power poles across the whole region.\nB: Thousands of homes were left without electricity.",
 funFact:"'Descuajaringarse de risa' (to fall apart laughing) is one of Spanish's most colorful verbs."},

{type:"fb",s:"Los datos {1} que el problema es más grave de lo esperado.",a:["evidencian"],opts:["evidencian","expatrían","extravían","explicitan"],hint:"To clearly show or demonstrate something through proof.",sSrc:"The data {1} that the problem is more serious than expected."},

{type:"match",pairs:[{trg:"engullir",src:"to gulp down"},{trg:"divisar",src:"to spot in distance"},{trg:"extraviar",src:"to misplace"},{trg:"expatriar",src:"to expatriate"},{trg:"dar de alta",src:"to discharge"}]}
]};

export default LESSON_20;
