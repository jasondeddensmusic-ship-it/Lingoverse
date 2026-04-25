// L01: Nature & Outdoors - Trees, landscapes, and the natural world
const LESSON_1 = {
  id:"esv2_b1gap_l1", title:"La naturaleza", icon:"\u{1F333}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La naturaleza",
     desc:"Explore the natural world. Learn vocabulary for trees, landscapes, and outdoor activities.",
     goals:["Learn 20 nature and landscape words","Describe outdoor scenes and activities","Use articles and gender with nature vocabulary"]},

    {type:"teach", trg:"el abeto", src:"the fir tree", pos:"noun", gender:"m",
     note:"Masculine noun. A coniferous evergreen tree.\nCommon in northern Spain.",
     example:"A: \u00bfQu\u00e9 \u00e1rbol es ese?\nB: Es un abeto. Huele muy bien.",
     exampleSrc:"A: What tree is that?\nB: It is a fir tree. It smells very nice.",
     funFact:"From Latin 'abies'. The Spanish Christmas tree is often an abeto, though many families prefer artificial ones."},

    {type:"teach", trg:"el acantilado", src:"the cliff", pos:"noun", gender:"m",
     note:"Masculine noun. A steep rock face by the sea.\nSpain has famous acantilados.",
     example:"A: \u00bfHas visto los acantilados?\nB: S\u00ed, son impresionantes. Ten cuidado.",
     exampleSrc:"A: Have you seen the cliffs?\nB: Yes, they are impressive. Be careful.",
     funFact:"Related to 'canto' (edge, stone). The cliffs of Moher in Ireland are 'los Acantilados de Moher' in Spanish."},

    {type:"teach", trg:"la arboleda", src:"the grove", pos:"noun", gender:"f",
     note:"Feminine noun. A small group of trees.\nOften in parks or countryside.",
     example:"A: \u00bfDamos un paseo?\nB: S\u00ed, vamos a la arboleda del parque.",
     exampleSrc:"A: Shall we take a walk?\nB: Yes, let's go to the grove in the park.",
     funFact:"From '\u00e1rbol' (tree) + suffix '-eda' meaning a collection. Like 'alameda' (poplar grove) which became a word for boulevard."},

    {type:"teach", trg:"el alga", src:"the seaweed", pos:"noun", gender:"m",
     note:"Feminine noun, but uses 'el' in singular.\nPlural: las algas. Like 'el agua'.",
     example:"A: La playa tiene muchas algas hoy.\nB: Es normal en verano.",
     exampleSrc:"A: The beach has a lot of seaweed today.\nB: It is normal in summer.",
     funFact:"From Latin 'alga'. Despite starting with 'el', it is feminine. This happens with feminine nouns starting with stressed 'a'."},

    {type:"teach", trg:"la ara\u00f1a", src:"the spider", pos:"noun", gender:"f",
     note:"Feminine noun. Also means a type of chandelier.\nCommon in gardens.",
     example:"A: \u00a1Hay una ara\u00f1a en el ba\u00f1o!\nB: Tranquilo, no es peligrosa.",
     exampleSrc:"A: There is a spider in the bathroom!\nB: Relax, it is not dangerous.",
     funFact:"From Latin 'aranea'. The Canary Islands have a rare wolf spider called the 'ara\u00f1a lobo'."},

    {type:"mc",
     q:"\u00bfQu\u00e9 es un acantilado?",
     opts:["Una roca alta junto al mar","Un tipo de \u00e1rbol","Un insecto del bosque","Una planta acu\u00e1tica"],
     ans:"Una roca alta junto al mar",
     hint:"Think of steep rock faces that drop into the ocean. Coastal landscapes."},

    {type:"teach", trg:"la acampada", src:"the camping trip", pos:"noun", gender:"f",
     note:"Feminine noun. The activity, not the place.\nIr de acampada = to go camping.",
     example:"A: \u00bfQu\u00e9 planes tienes este fin de semana?\nB: Vamos de acampada a la monta\u00f1a.",
     exampleSrc:"A: What plans do you have this weekend?\nB: We are going camping in the mountains.",
     funFact:"From 'acampar' (to camp), from 'campo' (field). Spaniards often camp in designated 'campings' (campsites)."},

    {type:"teach", trg:"al aire libre", src:"outdoors, in the open air", pos:"adv", gender:null,
     note:"Adverbial phrase. Very common in daily speech.\nOpposite: bajo techo (indoors).",
     example:"A: \u00bfComemos dentro o fuera?\nB: Al aire libre, hace buen tiempo.",
     exampleSrc:"A: Shall we eat inside or outside?\nB: Outdoors, the weather is nice.",
     funFact:"Literally 'to the free air'. Spanish culture revolves around outdoor life: terraces, plazas, and paseos."},

    {type:"teach", trg:"el albatros", src:"the albatross", pos:"noun", gender:"m",
     note:"Masculine noun. A large seabird.\nPlural stays the same: los albatros.",
     example:"A: \u00bfHas visto un albatros alguna vez?\nB: S\u00ed, en un documental sobre el oc\u00e9ano.",
     exampleSrc:"A: Have you ever seen an albatross?\nB: Yes, in a documentary about the ocean.",
     funFact:"From Portuguese 'alcatraz' (pelican), which itself comes from Arabic 'al-qadus' (the bucket). Alcatraz Island shares this origin."},

    {type:"fb",
     s:"Este verano vamos de {1} a los Pirineos.",
     a:["acampada"],
     opts:["acampada","acantilado","arboleda","albatros"],
     hint:"The noun for a camping trip. You would pack a tent for this activity.",
     sSrc:"This summer we are going on a {1} to the Pyrenees."},

    {type:"teach", trg:"el b\u00faho", src:"the owl", pos:"noun", gender:"m",
     note:"Masculine noun. The eagle owl specifically.\nLa lechuza = barn owl.",
     example:"A: \u00bfQu\u00e9 animal hace ese sonido?\nB: Es un b\u00faho. Solo sale de noche.",
     exampleSrc:"A: What animal makes that sound?\nB: It is an owl. It only comes out at night.",
     funFact:"From Latin 'bufo' (a type of toad), transferred to the owl possibly because of its round shape and nocturnal habits."},

    {type:"teach", trg:"la bellota", src:"the acorn", pos:"noun", gender:"f",
     note:"Feminine noun. The fruit of the oak tree.\nCritical for ib\u00e9rico ham production.",
     example:"A: \u00bfDe qu\u00e9 se alimentan los cerdos ib\u00e9ricos?\nB: Comen bellotas en la dehesa.",
     exampleSrc:"A: What do Iberian pigs eat?\nB: They eat acorns in the pasture.",
     funFact:"From Arabic 'balluta' (oak). Jam\u00f3n de bellota is Spain's most prized ham, from pigs that eat only acorns."},

    {type:"teach", trg:"la avellana", src:"the hazelnut", pos:"noun", gender:"f",
     note:"Feminine noun. A common nut in Spanish cooking.\nAlso a shade of brown.",
     example:"A: \u00bfDe qu\u00e9 es este helado?\nB: De avellana. \u00bfQuieres probar?",
     exampleSrc:"A: What flavor is this ice cream?\nB: Hazelnut. Do you want to try it?",
     funFact:"From Latin 'abellana nux' (nut from Abella), a town in southern Italy famous for its hazelnuts."},

    {type:"teach", trg:"la aurora", src:"the dawn", pos:"noun", gender:"f",
     note:"Feminine noun. Poetic word for dawn.\nAurora boreal = northern lights.",
     example:"A: Me levant\u00e9 con la aurora.\nB: \u00bfTan temprano? \u00bfA qu\u00e9 hora?",
     exampleSrc:"A: I got up at dawn.\nB: So early? At what time?",
     funFact:"From Latin 'Aurora', the Roman goddess of dawn. She opened the gates of heaven each morning for the sun."},

    {type:"mc",
     q:"\u00bfQu\u00e9 animal solo sale de noche?",
     opts:["el b\u00faho","la ara\u00f1a","el albatros","el abeto"],
     ans:"el b\u00faho",
     hint:"A nocturnal bird with large eyes that hunts in the dark."},

    {type:"teach", trg:"el bicho", src:"the bug, critter", pos:"noun", gender:"m",
     note:"Masculine noun. Informal word for any small creature.\nAlso slang for a sly person.",
     example:"A: \u00a1Hay un bicho en la cocina!\nB: \u00bfQu\u00e9 tipo de bicho? \u00bfUna cucaracha?",
     exampleSrc:"A: There is a bug in the kitchen!\nB: What kind of bug? A cockroach?",
     funFact:"Origin debated: possibly from Latin 'bestius' (little beast). In Argentina, 'bicho' can mean any creature, even a horse."},

    {type:"teach", trg:"la burbuja", src:"the bubble", pos:"noun", gender:"f",
     note:"Feminine noun. Both literal and figurative.\nBurbuja econ\u00f3mica = economic bubble.",
     example:"A: A los ni\u00f1os les encantan las burbujas.\nB: S\u00ed, es un juego muy divertido.",
     exampleSrc:"A: Children love bubbles.\nB: Yes, it is a very fun game.",
     funFact:"Onomatopoeic origin, imitating the sound of bubbling water. The 'bur-bur' sound is almost universal across languages."},

    {type:"teach", trg:"el anochecer", src:"the nightfall, dusk", pos:"noun", gender:"m",
     note:"Masculine noun. Also a verb: anochecer (to get dark).\nOpposite: el amanecer.",
     example:"A: \u00bfA qu\u00e9 hora es el anochecer?\nB: Sobre las nueve en verano.",
     exampleSrc:"A: What time is nightfall?\nB: Around nine in summer.",
     funFact:"From 'a-' + 'noche' (night) + '-ecer' (to become). Spanish loves verbs that describe time transitions: amanecer, atardecer, anochecer."},

    {type:"teach", trg:"la atm\u00f3sfera", src:"the atmosphere", pos:"noun", gender:"f",
     note:"Feminine noun. Both scientific and figurative.\nEl restaurante tiene buena atm\u00f3sfera.",
     example:"A: La atm\u00f3sfera de este lugar es muy agradable.\nB: S\u00ed, me encanta la m\u00fasica.",
     exampleSrc:"A: The atmosphere of this place is very pleasant.\nB: Yes, I love the music.",
     funFact:"From Greek 'atmos' (vapor) + 'sphaira' (sphere). Used figuratively in Spanish since the 1800s for mood or ambiance."},

    {type:"fb",
     s:"Las {1} de jab\u00f3n flotan por el jard\u00edn.",
     a:["burbujas"],
     opts:["burbujas","bellotas","avellanas","arboledas"],
     hint:"Round, transparent floating spheres made of soapy water.",
     sSrc:"The soap {1} float through the garden."},

    {type:"match", pairs:[
      {trg:"acantilado", src:"cliff"},
      {trg:"acampada", src:"camping trip"},
      {trg:"arboleda", src:"grove"},
      {trg:"aurora", src:"dawn"},
      {trg:"anochecer", src:"nightfall"}
    ]},

    {type:"mc",
     q:"\u00bfQu\u00e9 fruto comen los cerdos ib\u00e9ricos?",
     opts:["la burbuja","la bellota","la avellana","el alga"],
     ans:"la bellota",
     hint:"This nut grows on oak trees and is famous in Spanish ham production."},

    {type:"fb",
     s:"Desde el {1} se ve todo el mar.",
     a:["acantilado"],
     opts:["acantilado","anochecer","abeto","albatros"],
     hint:"A tall, steep rock face overlooking the ocean.",
     sSrc:"From the {1} you can see the whole sea."}
  ]
};
export default LESSON_1;
