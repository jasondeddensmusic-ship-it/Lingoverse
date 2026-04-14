// B2 Gap Batch 5 Lesson 13 - Buildings & Construction
const LESSON_13 = {id:"esv2_b2g5_l13",title:"Edificios y construcción",icon:"🏗️",xp:15,board:true,steps:[
{type:"intro",title:"Edificios y construcción",desc:"Learn vocabulary about buildings, construction, and architectural features.",goals:["Learn 15 words about buildings and construction","Discuss architecture and structural elements","Use construction and spatial vocabulary"]},

{type:"teach",trg:"el bungaló",src:"the bungalow",pos:"noun",gender:"m",
 note:"Masculine noun. A single-story house or vacation lodge.\nFrom English 'bungalow'.",
 example:"A: Alquilamos un bungaló en la playa para el verano.\nB: ¿Tiene jardín?\nA: Sí, con vistas al mar.",
 exampleSrc:"A: We rented a bungalow on the beach for summer.\nB: Does it have a garden?\nA: Yes, with sea views.",
 funFact:"From Hindi bangla (Bengali-style house). Bungalós are very popular in Spanish coastal campsites."},

{type:"teach",trg:"el foso",src:"the moat / pit",pos:"noun",gender:"m",
 note:"Masculine noun. A deep trench around a castle.\nAlso: the orchestra pit in a theater.",
 example:"A: El castillo tenía un foso lleno de agua.\nB: Era una defensa muy efectiva en la Edad Media.",
 exampleSrc:"A: The castle had a moat full of water.\nB: It was a very effective defense in the Middle Ages.",
 funFact:"From Latin fossa (ditch). In theaters, the 'foso de la orquesta' is where musicians sit."},

{type:"teach",trg:"el enrejado",src:"the lattice / grille / railing",pos:"noun",gender:"m",
 note:"Masculine noun. A framework of bars or strips.\nFrom reja (bar/grill).",
 example:"A: El enrejado del balcón es de hierro forjado.\nB: Es típico de la arquitectura andaluza.",
 exampleSrc:"A: The balcony grille is wrought iron.\nB: It is typical of Andalusian architecture.",
 funFact:"Enrejados are iconic in Spanish architecture. Lovers in old novels would speak through window grilles."},

{type:"teach",trg:"el batiente",src:"the door frame / leaf of a door",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door frame the door closes against.\nAlso: each wing of a double door.",
 example:"A: El batiente de la puerta está dañado.\nB: Hay que cambiarlo antes de que se rompa del todo.",
 exampleSrc:"A: The door frame is damaged.\nB: We need to replace it before it breaks completely.",
 funFact:"From batir (to beat). The batiente is where the door 'beats' or strikes when closing."},

{type:"teach",trg:"el elevador",src:"the elevator / lift",pos:"noun",gender:"m",
 note:"Masculine noun. A device for moving between floors.\nIn Spain: ascensor is more common.",
 example:"A: El elevador está fuera de servicio.\nB: Tendremos que subir por las escaleras.",
 exampleSrc:"A: The elevator is out of service.\nB: We will have to take the stairs.",
 funFact:"In Spain, 'ascensor' is standard. 'Elevador' is used in Latin America and in technical/industrial contexts."},

{type:"mc",q:"¿Qué es un foso en un castillo?",opts:["Una zanja profunda alrededor de las murallas","Una torre de vigilancia","Un puente levadizo","Una sala de armas"],ans:"Una zanja profunda alrededor de las murallas",hint:"A deep trench, often filled with water, surrounding the castle walls for defense."},

{type:"teach",trg:"la covacha",src:"the small cave / dingy room",pos:"noun",gender:"f",
 note:"Feminine noun. A small, dark cave or room.\nColloquial: a cramped, unpleasant space.",
 example:"A: Ese estudio es una covacha sin ventanas.\nB: No sé cómo puede vivir alguien ahí.",
 exampleSrc:"A: That studio is a dingy room without windows.\nB: I don't know how anyone can live there.",
 funFact:"Diminutive of cueva (cave). In colloquial Spanish, calling a room a 'covacha' is quite derogatory."},

{type:"teach",trg:"desamueblar",src:"to unfurnish / to strip of furniture",pos:"verb",gender:null,
 note:"Regular -ar verb. To remove all furniture from a space.\nPrefix des- reverses amueblar.",
 example:"A: Hay que desamueblar el piso antes de la reforma.\nB: Llamaré a una empresa de mudanzas.",
 exampleSrc:"A: We need to unfurnish the apartment before the renovation.\nB: I'll call a moving company.",
 funFact:"The des- prefix is highly productive in Spanish: hacer/deshacer, montar/desmontar, armar/desarmar."},

{type:"teach",trg:"el desplazamiento",src:"the displacement / commute / travel",pos:"noun",gender:"m",
 note:"Masculine noun. Movement from one place to another.\nAlso: commuting to work.",
 example:"A: El desplazamiento al trabajo me lleva una hora.\nB: ¿No puedes teletrabajar algunos días?",
 exampleSrc:"A: The commute to work takes me an hour.\nB: Can't you work from home some days?",
 funFact:"In physics, 'desplazamiento' is the vector from start to end point, distinct from distance traveled."},

{type:"teach",trg:"la cabida",src:"the capacity / room",pos:"noun",gender:"f",
 note:"Feminine noun. The amount of space available.\nFrom caber (to fit).",
 example:"A: ¿Cuál es la cabida de este auditorio?\nB: Tiene cabida para quinientas personas.",
 exampleSrc:"A: What is the capacity of this auditorium?\nB: It has room for five hundred people.",
 funFact:"'Dar cabida a' means 'to make room for' and is common in formal writing about inclusion."},

{type:"fb",s:"El {1} del balcón es de hierro forjado del siglo XVIII.",a:["enrejado"],opts:["enrejado","batiente","foso","elevador"],hint:"A framework of metal bars, typical on Spanish balconies.",sSrc:"The {1} on the balcony is 18th-century wrought iron."},

{type:"teach",trg:"el gallinero",src:"the chicken coop / upper gallery (theater)",pos:"noun",gender:"m",
 note:"Masculine noun. A henhouse.\nColloquial: the cheapest, highest seats in a theater.",
 example:"A: Solo quedaban entradas de gallinero.\nB: No importa, la acústica es buena desde arriba.",
 exampleSrc:"A: There were only upper gallery tickets left.\nB: It doesn't matter, the acoustics are good from up there.",
 funFact:"Called 'gallinero' because the upper gallery was noisy and chaotic, like a henhouse."},

{type:"teach",trg:"hotelero",src:"hotel-related / hotelier",pos:"adj",gender:null,
 note:"Adjective. Relating to hotels.\nAlso noun: el hotelero (the hotel owner). Feminine: hotelera.",
 example:"A: El sector hotelero se recuperó tras la pandemia.\nB: El turismo es vital para la economía española.",
 exampleSrc:"A: The hotel sector recovered after the pandemic.\nB: Tourism is vital for the Spanish economy.",
 funFact:"Spain is the world's second-most visited country and has over 14,000 hotels."},

{type:"teach",trg:"hexagonal",src:"hexagonal",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Having six sides.\nFrom hexágono (hexagon).",
 example:"A: Los azulejos hexagonales están muy de moda.\nB: Quedan muy bien en el cuarto de baño.",
 exampleSrc:"A: Hexagonal tiles are very fashionable.\nB: They look great in the bathroom.",
 funFact:"From Greek hex (six) + gonia (angle). Hexagonal patterns are common in Moorish-influenced Spanish tilework."},

{type:"teach",trg:"el desajuste",src:"the mismatch / imbalance",pos:"noun",gender:"m",
 note:"Masculine noun. A lack of fit between things.\nFrom des- + ajuste (adjustment).",
 example:"A: Hay un desajuste entre la oferta y la demanda de vivienda.\nB: Los precios siguen subiendo por eso.",
 exampleSrc:"A: There is a mismatch between housing supply and demand.\nB: That's why prices keep going up.",
 funFact:"In economics, 'desajuste' is a technical term for any imbalance in markets or fiscal policy."},

{type:"mc",q:"¿Qué es el gallinero en un teatro?",opts:["Las butacas más altas y baratas","El escenario principal","Los camerinos de los actores","La primera fila"],ans:"Las butacas más altas y baratas",hint:"Named after the bird enclosure because of the noise and chaos in the cheapest upper seats."},

{type:"fb",s:"El auditorio tiene {1} para mil espectadores.",a:["cabida"],opts:["cabida","covacha","desajuste","desplazamiento"],hint:"The amount of space or capacity available in a venue.",sSrc:"The auditorium has {1} for a thousand spectators."},

{type:"match",pairs:[{trg:"bungaló",src:"bungalow"},{trg:"foso",src:"moat"},{trg:"covacha",src:"dingy room"},{trg:"gallinero",src:"upper gallery"},{trg:"desajuste",src:"mismatch"}]},

{type:"fb",s:"El {1} al trabajo en coche me lleva cuarenta minutos.",a:["desplazamiento"],opts:["desplazamiento","desajuste","enrejado","batiente"],hint:"The act of traveling from one place to another, especially commuting.",sSrc:"The {1} to work by car takes me forty minutes."},

{type:"mc",q:"¿Qué significa 'desamueblar'?",opts:["Quitar todos los muebles de un espacio","Pintar las paredes de blanco","Instalar muebles nuevos","Reparar una puerta rota"],ans:"Quitar todos los muebles de un espacio",hint:"The prefix des- reverses the action of 'amueblar' (to furnish)."}
]};

export default LESSON_13;
