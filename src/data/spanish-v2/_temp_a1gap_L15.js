// L15: Description & Qualities. Describing the world around you
const LESSON_15 = {
  id:"esv2_a1gap_l15", title:"Describir el mundo", icon:"\u{1F308}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Describir el mundo",
     desc:"Learn adjectives and descriptors to paint pictures with words. Color, quality, and character.",
     goals:["Learn 20 descriptive words","Use adjectives with nouns correctly","Describe people, places, and things"]},

    {type:"teach", trg:"anaranjado", src:"orange (color)", pos:"adj", gender:null,
     note:"Adjective. Anaranjado/anaranjada.\nFrom naranja (orange fruit). Also just 'naranja'.",
     example:"A: Me gusta el color anaranjado.\nB: A mí también, es cálido.",
     exampleSrc:"A: I like the color orange.\nB: Me too, it is warm.",
     funFact:"Literally 'oranged' (like 'orange-colored'). In everyday speech, most people just say 'naranja' for the color."},

    {type:"teach", trg:"amargo", src:"bitter", pos:"adj", gender:null,
     note:"Adjective. Amargo/amarga.\nCafé amargo = black coffee (without sugar).",
     example:"A: Este café está muy amargo.\nB: \u00bfQuieres azúcar?",
     exampleSrc:"A: This coffee is very bitter.\nB: Do you want sugar?",
     funFact:"From Latin 'amarus' (bitter). Also used figuratively: 'una experiencia amarga' (a bitter experience)."},

    {type:"teach", trg:"bienvenido", src:"welcome", pos:"adj", gender:null,
     note:"Adjective. Bienvenido/bienvenida.\nBienvenidos a España = Welcome to Spain.",
     example:"A: \u00a1Bienvenido a nuestra casa!\nB: Muchas gracias, es muy bonita.",
     exampleSrc:"A: Welcome to our house!\nB: Thank you very much, it is very beautiful.",
     funFact:"From 'bien' (well) + 'venido' (come). Literally 'well arrived'. Changes form: bienvenido/a/os/as to match who is welcomed."},

    {type:"teach", trg:"la biodiversidad", src:"biodiversity", pos:"noun", gender:"f",
     note:"Feminine noun. Bio (life) + diversidad (diversity).\nEcological term increasingly common.",
     example:"A: España tiene mucha biodiversidad.\nB: Sí, por su variedad de climas.",
     exampleSrc:"A: Spain has a lot of biodiversity.\nB: Yes, because of its variety of climates.",
     funFact:"Spain is the most biodiverse country in Europe, with habitats ranging from alpine peaks to African-like deserts."},

    {type:"teach", trg:"biológico", src:"biological, organic", pos:"adj", gender:null,
     note:"Adjective. Biológico/biológica.\nProducto biológico = organic product (in Spain: ecológico is more common).",
     example:"A: Compro productos biológicos.\nB: Son más caros pero más sanos.",
     exampleSrc:"A: I buy organic products.\nB: They are more expensive but healthier.",
     funFact:"In Spain, 'ecológico' or 'eco' is the standard term for organic food. 'Biológico' is used more in scientific contexts."},

    {type:"teach", trg:"bohemio", src:"bohemian", pos:"adj", gender:null,
     note:"Adjective. Bohemio/bohemia.\nUn barrio bohemio = a bohemian neighborhood.",
     example:"A: Este barrio es muy bohemio.\nB: Sí, hay muchos artistas aquí.",
     exampleSrc:"A: This neighborhood is very bohemian.\nB: Yes, there are many artists here.",
     funFact:"From 'Bohemia' (Czech region), because Romani people were thought to come from there. Now means artistic and unconventional."},

    {type:"mc",
     q:"\u00bfQué significa 'bienvenido'?",
     opts:["welcome","goodbye","hello","thank you"],
     ans:"welcome",
     hint:"This word literally means 'well arrived'. It is what you say when someone comes to your home."},

    {type:"teach", trg:"argentino", src:"Argentine", pos:"adj", gender:null,
     note:"Adjective. Argentino/argentina.\nEl tango argentino = Argentine tango.",
     example:"A: Mi compañero de trabajo es argentino.\nB: \u00bfDe qué ciudad?",
     exampleSrc:"A: My coworker is Argentine.\nB: From which city?",
     funFact:"From Latin 'argentum' (silver). Argentina was named for the silver its explorers hoped to find. 'La Argentina' means 'the silver land'."},

    {type:"teach", trg:"americano", src:"American (from the Americas)", pos:"adj", gender:null,
     note:"Adjective. In Spanish, 'americano' can mean anyone from the Americas.\nNot just the USA.",
     example:"A: El café americano es popular aquí.\nB: Sí, pero yo prefiero el espresso.",
     exampleSrc:"A: American coffee is popular here.\nB: Yes, but I prefer espresso.",
     funFact:"In Spanish, 'americano' refers to anyone from North, Central, or South America. For USA specifically: 'estadounidense'."},

    {type:"teach", trg:"andaluz", src:"Andalusian", pos:"adj", gender:null,
     note:"Adjective. Andaluz/andaluza.\nFrom Andalucía, southern Spain.",
     example:"A: Me encanta la comida andaluza.\nB: El gazpacho es delicioso.",
     exampleSrc:"A: I love Andalusian food.\nB: Gazpacho is delicious.",
     funFact:"Andalusia is where flamenco, tapas, and gazpacho originate. The Andalusian accent is one of Spain's most distinctive."},

    {type:"teach", trg:"aéreo", src:"aerial, air (adjective)", pos:"adj", gender:null,
     note:"Adjective. Aéreo/aérea.\nTransporte aéreo = air transport. Vista aérea = aerial view.",
     example:"A: El transporte aéreo es rápido.\nB: Sí, pero caro.",
     exampleSrc:"A: Air transport is fast.\nB: Yes, but expensive.",
     funFact:"From Latin 'aereus' (of the air). 'Línea aérea' = airline. 'Correo aéreo' = airmail."},

    {type:"fb",
     s:"\u00a1{1} a España! Esperamos que disfrutes tu visita.",
     a:["Bienvenido"],
     opts:["Bienvenido","Amargo","Aéreo","Bohemio"],
     hint:"This is the greeting word that means 'well arrived', used when someone arrives at a new place.",
     sSrc:"{1} to Spain! We hope you enjoy your visit."},

    {type:"teach", trg:"administrativo", src:"administrative", pos:"adj", gender:null,
     note:"Adjective. Administrativo/administrativa.\nTrámite administrativo = administrative procedure.",
     example:"A: Necesito hacer un trámite administrativo.\nB: \u00bfEn el ayuntamiento?",
     exampleSrc:"A: I need to do an administrative procedure.\nB: At the city hall?",
     funFact:"From Latin 'administrativus'. Spanish bureaucracy is notoriously paper-heavy. 'Trámites' (procedures) are a fact of life."},

    {type:"teach", trg:"el ayuntamiento", src:"the city hall, town hall", pos:"noun", gender:"m",
     note:"Masculine noun. Ayuntamiento = city hall and the city government.\nFrom ayuntar (to join).",
     example:"A: \u00bfDónde está el ayuntamiento?\nB: En la plaza mayor.",
     exampleSrc:"A: Where is the city hall?\nB: In the main square.",
     funFact:"From 'ayuntar' (to join together). Every Spanish town has its ayuntamiento on the main plaza, the heart of civic life."},

    {type:"teach", trg:"la autoridad", src:"the authority", pos:"noun", gender:"f",
     note:"Feminine noun. Las autoridades = the authorities.\nTener autoridad = to have authority.",
     example:"A: Las autoridades cerraron la calle.\nB: \u00bfPor qué?",
     exampleSrc:"A: The authorities closed the street.\nB: Why?",
     funFact:"From Latin 'auctoritas'. In Spain, 'las autoridades' often refers to police or government officials."},

    {type:"teach", trg:"la asociación", src:"the association, organization", pos:"noun", gender:"f",
     note:"Feminine noun. Asociación de vecinos = neighborhood association.\nCommon in Spanish civic life.",
     example:"A: Soy miembro de una asociación cultural.\nB: \u00bfQué actividades hacéis?",
     exampleSrc:"A: I am a member of a cultural association.\nB: What activities do you do?",
     funFact:"From Latin 'associatio'. Spain has a rich tradition of associations for everything: sports, culture, neighborhood issues."},

    {type:"mc",
     q:"\u00bfDónde se hacen trámites administrativos en un pueblo?",
     opts:["En la biblioteca","En el ayuntamiento","En la bodega","En el bar"],
     ans:"En el ayuntamiento",
     hint:"This is the building in the main square where the local government works."},

    {type:"teach", trg:"el asunto", src:"the matter, issue", pos:"noun", gender:"m",
     note:"Masculine noun. Es un asunto importante = it is an important matter.\nAsunto = topic of discussion.",
     example:"A: Tenemos que hablar de un asunto.\nB: \u00bfDe qué se trata?",
     exampleSrc:"A: We need to talk about a matter.\nB: What is it about?",
     funFact:"From Latin 'assumptus' (taken up). In emails, 'Asunto:' is the subject line. Very practical word."},

    {type:"teach", trg:"el accidente", src:"the accident", pos:"noun", gender:"m",
     note:"Masculine noun. Accidente de tráfico = traffic accident.\nTener un accidente = to have an accident.",
     example:"A: Hubo un accidente en la autopista.\nB: \u00bfHay heridos?",
     exampleSrc:"A: There was an accident on the highway.\nB: Are there injured people?",
     funFact:"From Latin 'accidens' (happening). 'Por accidente' means 'by accident'. Nearly identical in all European languages."},

    {type:"teach", trg:"la acción", src:"the action", pos:"noun", gender:"f",
     note:"Feminine noun. Película de acción = action movie.\nAcción de gracias = Thanksgiving.",
     example:"A: Me gustan las películas de acción.\nB: A mí también.",
     exampleSrc:"A: I like action movies.\nB: Me too.",
     funFact:"From Latin 'actio'. Día de Acción de Gracias (Thanksgiving) is not celebrated in Spain but is known through American media."},

    {type:"match", pairs:[
      {trg:"bienvenido", src:"welcome"},
      {trg:"amargo", src:"bitter"},
      {trg:"ayuntamiento", src:"city hall"},
      {trg:"accidente", src:"accident"},
      {trg:"asunto", src:"matter"}
    ]},

    {type:"fb",
     s:"Las {1} cerraron la plaza por un evento especial.",
     a:["autoridades"],
     opts:["autoridades","asociaciones","acciones","aventuras"],
     hint:"This plural noun refers to people in power, like police or government officials.",
     sSrc:"The {1} closed the square for a special event."},
  ]
};
export default LESSON_15;
