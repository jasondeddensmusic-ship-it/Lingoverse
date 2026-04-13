// L03: Home & Housing — Where you live
const LESSON_3 = {
  id:"esv2_a1gap_l3", title:"Mi casa", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mi casa",
     desc:"Learn to talk about where you live. Home, rooms, and housing vocabulary.",
     goals:["Learn 20 words about homes and housing","Describe your living situation","Use housing-related verbs"]},

    {type:"teach", trg:"el apartamento", src:"the apartment", pos:"noun", gender:"m",
     note:"Masculine noun. In Spain, 'piso' is more common.\nApartamento is used everywhere.",
     example:"A: \u00bfVives en una casa?\nB: No, vivo en un apartamento.",
     exampleSrc:"A: Do you live in a house?\nB: No, I live in an apartment.",
     funFact:"From Italian 'appartamento' (a separated part). In Spain, most people say 'piso' for apartment."},

    {type:"teach", trg:"el balcón", src:"the balcony", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: los balcones.\nVery common in Spanish architecture.",
     example:"A: Sal al balcón, hace buen tiempo.\nB: Qué vista tan bonita.",
     exampleSrc:"A: Go out to the balcony, the weather is nice.\nB: What a beautiful view.",
     funFact:"From Italian 'balcone', from Germanic 'balko' (beam). Spanish balconies are iconic, especially in Andalusia."},

    {type:"teach", trg:"el baño", src:"the bathroom", pos:"noun", gender:"m",
     note:"Masculine noun. El cuarto de baño = the bathroom.\nAlso means 'bath'.",
     example:"A: \u00bfDónde está el baño?\nB: Al final del pasillo.",
     exampleSrc:"A: Where is the bathroom?\nB: At the end of the hallway.",
     funFact:"One of the most essential travel phrases. In restaurants, you can also ask for 'los aseos' or 'los servicios'."},

    {type:"teach", trg:"la bañera", src:"the bathtub", pos:"noun", gender:"f",
     note:"Feminine noun. From baño + -era (container suffix).\nMany Spanish homes have showers instead.",
     example:"A: \u00bfTienes bañera?\nB: No, solo tengo ducha.",
     exampleSrc:"A: Do you have a bathtub?\nB: No, I only have a shower.",
     funFact:"The -era suffix often indicates a container: bañera (bathtub), cafetera (coffee maker), papelera (wastebasket)."},

    {type:"teach", trg:"amueblar", src:"to furnish", pos:"verb", gender:null,
     note:"Regular -ar verb. Amueblo, amueblas...\nFrom mueble (furniture).",
     example:"A: Tenemos que amueblar el piso.\nB: Vamos a una tienda de muebles.",
     exampleSrc:"A: We have to furnish the apartment.\nB: Let us go to a furniture store.",
     funFact:"The root 'mueble' comes from Latin 'mobilis' (movable). Furniture is literally 'movable property'."},

    {type:"mc",
     q:"\u00bfDónde está el baño?",
     opts:["Al final del pasillo","En el balcón","En la tienda","En el parque"],
     ans:"Al final del pasillo",
     hint:"The bathroom is typically found inside a home, at the end of a corridor."},

    {type:"teach", trg:"el alojamiento", src:"the accommodation", pos:"noun", gender:"m",
     note:"Masculine noun. From alojar (to lodge).\nUsed for hotels, hostels, rentals.",
     example:"A: \u00bfYa tienes alojamiento?\nB: Sí, reservé un hotel.",
     exampleSrc:"A: Do you have accommodation yet?\nB: Yes, I booked a hotel.",
     funFact:"From 'alojar', itself from 'logia' (lodge). The same root gives us English 'lodge' and 'lodging'."},

    {type:"teach", trg:"alojar", src:"to lodge, to accommodate", pos:"verb", gender:null,
     note:"Regular -ar verb. Often reflexive: alojarse = to stay (at a hotel).\nMe alojo en un hotel.",
     example:"A: \u00bfDónde te alojas?\nB: Me alojo en casa de un amigo.",
     exampleSrc:"A: Where are you staying?\nB: I am staying at a friend's house.",
     funFact:"Reflexive 'alojarse' is the standard way to say where you are staying when traveling."},

    {type:"teach", trg:"alquilar", src:"to rent", pos:"verb", gender:null,
     note:"Regular -ar verb. Alquilo, alquilas, alquila...\nUsed for apartments, cars, etc.",
     example:"A: Quiero alquilar un apartamento.\nB: \u00bfEn qué zona?",
     exampleSrc:"A: I want to rent an apartment.\nB: In which area?",
     funFact:"From Arabic 'al-kira' (the rent). Many Spanish words starting with 'al-' come from Arabic."},

    {type:"teach", trg:"el alquiler", src:"the rent", pos:"noun", gender:"m",
     note:"Masculine noun. Pagar el alquiler = to pay the rent.\nDe alquiler = for rent.",
     example:"A: \u00bfCuánto es el alquiler?\nB: Ochocientos euros al mes.",
     exampleSrc:"A: How much is the rent?\nB: Eight hundred euros per month.",
     funFact:"Also from Arabic 'al-kira'. Spanish has over 4,000 words of Arabic origin, more than any other European language."},

    {type:"fb",
     s:"Quiero {1} un piso en el centro de la ciudad.",
     a:["alquilar"],
     opts:["alquilar","amueblar","alojar","abrir"],
     hint:"You are looking for a place to live and want to pay monthly for it.",
     sSrc:"I want to {1} an apartment in the city center."},

    {type:"teach", trg:"el albergue", src:"the hostel", pos:"noun", gender:"m",
     note:"Masculine noun. Albergue juvenil = youth hostel.\nCheap accommodation for travelers.",
     example:"A: Nos quedamos en un albergue.\nB: \u00bfEs barato?\nA: Sí, muy barato.",
     exampleSrc:"A: We stayed at a hostel.\nB: Is it cheap?\nA: Yes, very cheap.",
     funFact:"From Germanic 'heriberga' (army shelter). The Camino de Santiago has famous 'albergues' for pilgrims."},

    {type:"teach", trg:"la azotea", src:"the rooftop terrace", pos:"noun", gender:"f",
     note:"Feminine noun. Flat roof used as terrace.\nCommon in Mediterranean architecture.",
     example:"A: Vamos a la azotea.\nB: Sí, se ve toda la ciudad.",
     exampleSrc:"A: Let's go to the rooftop terrace.\nB: Yes, you can see the whole city.",
     funFact:"From Arabic 'as-sutayha' (small flat surface). One of many Arabic architectural terms in Spanish."},

    {type:"teach", trg:"el bloque", src:"the block (of flats)", pos:"noun", gender:"m",
     note:"Masculine noun. Bloque de pisos = block of apartments.\nAlso means 'block' in general.",
     example:"A: Vivo en ese bloque.\nB: \u00bfEn qué piso?",
     exampleSrc:"A: I live in that block.\nB: On which floor?",
     funFact:"From French 'bloc', originally from Dutch. In Spanish cities, 'bloques' of apartments are everywhere."},

    {type:"teach", trg:"la aldea", src:"the village", pos:"noun", gender:"f",
     note:"Feminine noun. Small rural village, smaller than a pueblo.\nOften in literature.",
     example:"A: Mi familia es de una aldea pequeña.\nB: \u00bfCómo se llama?",
     exampleSrc:"A: My family is from a small village.\nB: What is it called?",
     funFact:"From Arabic 'ad-day'a' (the village). Rural Spain still has many tiny aldeas with just a few families."},

    {type:"teach", trg:"el almacén", src:"the warehouse, department store", pos:"noun", gender:"m",
     note:"Masculine noun. Grandes almacenes = department stores.\nAlso: storage room.",
     example:"A: Vamos a los grandes almacenes.\nB: \u00bfA comprar qué?",
     exampleSrc:"A: Let's go to the department stores.\nB: To buy what?",
     funFact:"From Arabic 'al-mahzan' (storehouse). English 'magazine' also comes from this Arabic word."},

    {type:"mc",
     q:"\u00bfQué palabra viene del árabe?",
     opts:["alquiler","balcón","bloque","apartamento"],
     ans:"alquiler",
     hint:"Words starting with 'al-' in Spanish very often have Arabic origins from the Moorish period."},

    {type:"teach", trg:"el aparcamiento", src:"the parking lot", pos:"noun", gender:"m",
     note:"Masculine noun. From aparcar (to park).\nIn Latin America: estacionamiento.",
     example:"A: \u00bfHay aparcamiento cerca?\nB: Sí, hay uno al lado del hotel.",
     exampleSrc:"A: Is there a parking lot nearby?\nB: Yes, there is one next to the hotel.",
     funFact:"From French 'parquer' (to pen in). In Spain you say 'aparcar', in Latin America 'estacionar'."},

    {type:"teach", trg:"arriba", src:"up, upstairs", pos:"adv", gender:null,
     note:"Adverb. Opposite of abajo (down).\nVivo arriba = I live upstairs.",
     example:"A: \u00bfDónde está tu habitación?\nB: Arriba, en el segundo piso.",
     exampleSrc:"A: Where is your room?\nB: Upstairs, on the second floor.",
     funFact:"From Latin 'ad ripam' (to the shore, to the bank). Rivers flow down, so 'upstream' meant 'upward'."},

    {type:"teach", trg:"abajo", src:"down, downstairs", pos:"adv", gender:null,
     note:"Adverb. Opposite of arriba (up).\nAquí abajo = down here.",
     example:"A: La cocina está abajo.\nB: Bajo ahora mismo.",
     exampleSrc:"A: The kitchen is downstairs.\nB: I am coming down right now.",
     funFact:"From Latin 'ad bassum' (toward the low). Together with arriba, these are essential direction words."},

    {type:"match", pairs:[
      {trg:"apartamento", src:"apartment"},
      {trg:"balcón", src:"balcony"},
      {trg:"baño", src:"bathroom"},
      {trg:"alquiler", src:"rent"},
      {trg:"aldea", src:"village"}
    ]},

    {type:"fb",
     s:"Mi habitación está {1}. La cocina está abajo.",
     a:["arriba"],
     opts:["arriba","abajo","aquí","allí"],
     hint:"Your room is on a higher floor. Think about the opposite of 'abajo' (down).",
     sSrc:"My room is {1}. The kitchen is downstairs."},
  ]
};
export default LESSON_3;
