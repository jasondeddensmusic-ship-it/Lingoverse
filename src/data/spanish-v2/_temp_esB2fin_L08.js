// Spanish B2 Final Batch - Lesson 8: Art & Culture
const LESSON_8 = {
  id:"esv2_b2fin_l8", title:"Arte y Cultura", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arte y Cultura",
     desc:"Explore the vocabulary of art, museums, and cultural heritage. Discuss exhibitions, artistic movements, and Spain's rich cultural landscape.",
     goals:["Describe artworks, exhibitions, and cultural events","Discuss artistic movements and cultural heritage","Express opinions about contemporary art and preservation"]},

    {type:"teach", trg:"el patrimonio", src:"heritage / patrimony", pos:"noun", gender:"m",
     note:"Cultural or natural heritage of a nation or civilization.",
     example:"A: Toledo es Patrimonio de la Humanidad por la UNESCO.\nB: Debemos proteger nuestro patrimonio cultural.",
     exampleSrc:"A: Toledo is a UNESCO World Heritage Site.\nB: We must protect our cultural heritage.",
     funFact:"From Latin 'patrimonium' (father's estate). Heritage is what the 'father' (patria) passes down."},

    {type:"teach", trg:"la exposición", src:"the exhibition", pos:"noun", gender:"f",
     note:"A public display of art, artifacts, or other items. Often at museums.",
     example:"A: ¿Has visto la exposición de Picasso en el Reina Sofía?\nB: Sí, la exposición es impresionante.",
     exampleSrc:"A: Have you seen the Picasso exhibition at the Reina Sofía?\nB: Yes, the exhibition is impressive.",
     funFact:"From Latin 'expositio' (setting forth). Art is 'set forth' for public viewing and appreciation."},

    {type:"teach", trg:"la escultura", src:"the sculpture", pos:"noun", gender:"f",
     note:"A three-dimensional work of art carved, molded, or cast.",
     example:"A: Esta escultura de bronce es del siglo XV.\nB: La escultura contemporánea rompe con las formas clásicas.",
     exampleSrc:"A: This bronze sculpture is from the 15th century.\nB: Contemporary sculpture breaks with classical forms.",
     funFact:"From Latin 'sculptura' (carving). 'Sculpere' meant to carve. Related to English 'sculpt'."},

    {type:"teach", trg:"contemporáneo", src:"contemporary", pos:"adj", gender:null,
     note:"Belonging to the present time. In art, refers to works from the mid-20th century onward.",
     example:"A: El museo de arte contemporáneo abrió sus puertas ayer.\nB: El arte contemporáneo a veces es difícil de entender.",
     exampleSrc:"A: The contemporary art museum opened yesterday.\nB: Contemporary art is sometimes difficult to understand.",
     funFact:"From Latin 'contemporaneus'. 'Con-' (with) + 'tempus' (time): belonging to the same time period."},

    {type:"teach", trg:"la obra maestra", src:"the masterpiece", pos:"noun", gender:"f",
     note:"An outstanding work of art. The finest creation of an artist.",
     example:"A: Las Meninas de Velázquez es una obra maestra.\nB: Crear una obra maestra requiere años de dedicación.",
     exampleSrc:"A: Velázquez's Las Meninas is a masterpiece.\nB: Creating a masterpiece requires years of dedication.",
     funFact:"'Obra' (work) + 'maestra' (master). In medieval guilds, your 'masterwork' proved you deserved master status."},

    {type:"teach", trg:"el lienzo", src:"the canvas", pos:"noun", gender:"m",
     note:"The fabric surface on which paintings are created.",
     example:"A: El pintor preparó un lienzo enorme para su nuevo cuadro.\nB: El óleo sobre lienzo es la técnica más clásica.",
     exampleSrc:"A: The painter prepared a huge canvas for his new painting.\nB: Oil on canvas is the most classical technique.",
     funFact:"From Latin 'linteum' (linen cloth). Canvases were originally made of linen before cotton became standard."},

    {type:"teach", trg:"el mecenas", src:"the patron (of the arts)", pos:"noun", gender:"m",
     note:"A wealthy supporter who finances artists and cultural projects.",
     example:"A: Sin mecenas, muchos artistas no podrían crear.\nB: Los Medici fueron los grandes mecenas del Renacimiento.",
     exampleSrc:"A: Without patrons, many artists couldn't create.\nB: The Medici were the great patrons of the Renaissance.",
     funFact:"From Gaius Maecenas, a Roman statesman who supported Virgil and Horace. His name became the word itself."},

    {type:"mc", q:"¿Qué es un 'mecenas' en el mundo del arte?",
     opts:["Una persona que financia a artistas","Un movimiento artístico","Un tipo de pintura","Un museo famoso"],
     ans:"Una persona que financia a artistas",
     hint:"This term comes from a Roman statesman who famously supported poets and artists."},

    {type:"teach", trg:"la galería", src:"the gallery", pos:"noun", gender:"f",
     note:"A space dedicated to displaying and selling works of art.",
     example:"A: La galería inauguró una muestra de fotografía.\nB: Hay galerías de arte en cada barrio de Madrid.",
     exampleSrc:"A: The gallery opened a photography show.\nB: There are art galleries in every neighborhood of Madrid.",
     funFact:"From Italian 'galleria' (long covered walkway). Originally a hallway for displaying artwork in palaces."},

    {type:"teach", trg:"el grabado", src:"the engraving / print", pos:"noun", gender:"m",
     note:"An artistic print made from an engraved surface.",
     example:"A: Los grabados de Goya son fascinantes.\nB: El grabado es una técnica que requiere mucha precisión.",
     exampleSrc:"A: Goya's engravings are fascinating.\nB: Engraving is a technique that requires great precision.",
     funFact:"From 'grabar' (to engrave), Germanic 'graban' (to dig). Goya's 'Caprichos' series has 80 famous engravings."},

    {type:"teach", trg:"la restauración", src:"restoration", pos:"noun", gender:"f",
     note:"The process of repairing and preserving artworks or historic buildings.",
     example:"A: La restauración del cuadro duró tres años.\nB: Los expertos en restauración usan técnicas muy delicadas.",
     exampleSrc:"A: The restoration of the painting took three years.\nB: Restoration experts use very delicate techniques.",
     funFact:"From Latin 'restauratio' (renewal). Spain's Prado Museum has one of Europe's leading restoration labs."},

    {type:"fb", s:"El Prado organizó una {1} temporal de obras de El Greco.", a:["exposición"],
     opts:["exposición","escultura","restauración","galería"],
     hint:"This is a public display of artworks, often temporary, at a museum or gallery.",
     sSrc:"The Prado organized a temporary {1} of works by El Greco."},

    {type:"teach", trg:"el patrimonio inmaterial", src:"intangible heritage", pos:"noun", gender:"m",
     note:"Cultural traditions, music, dances, and customs passed down through generations.",
     example:"A: El flamenco es patrimonio inmaterial de la humanidad.\nB: Las fiestas populares son patrimonio inmaterial.",
     exampleSrc:"A: Flamenco is intangible heritage of humanity.\nB: Popular festivals are intangible heritage.",
     funFact:"UNESCO distinguishes 'tangible' (buildings, art) from 'intangible' (traditions, music, crafts) heritage."},

    {type:"teach", trg:"la muestra", src:"the exhibition / sample", pos:"noun", gender:"f",
     note:"A curated display of artworks. Slightly less formal than 'exposición'.",
     example:"A: La muestra reúne obras de diez artistas emergentes.\nB: Es una muestra itinerante que viaja por toda España.",
     exampleSrc:"A: The show brings together works by ten emerging artists.\nB: It's a traveling exhibition that tours all of Spain.",
     funFact:"From 'mostrar' (to show), Latin 'monstrare'. A 'muestra' shows a curated selection of works."},

    {type:"teach", trg:"vanguardista", src:"avant-garde", pos:"adj", gender:null,
     note:"Experimental and innovative in art. Pushing boundaries beyond tradition.",
     example:"A: Dalí fue un artista vanguardista que cambió el arte.\nB: Las propuestas vanguardistas a veces generan polémica.",
     exampleSrc:"A: Dalí was an avant-garde artist who changed art.\nB: Avant-garde proposals sometimes generate controversy.",
     funFact:"From French 'avant-garde' (advance guard). Artists at the 'front line' of artistic innovation."},

    {type:"teach", trg:"el retrato", src:"the portrait", pos:"noun", gender:"m",
     note:"A painting, drawing, or photograph of a person.",
     example:"A: Velázquez pintó los retratos más famosos de la corte.\nB: ¿Te gustaría hacerte un retrato al óleo?",
     exampleSrc:"A: Velázquez painted the most famous court portraits.\nB: Would you like to have an oil portrait done?",
     funFact:"From Latin 'retractus' (drawn back). A portrait 'draws back' the image of a person for posterity."},

    {type:"mc", q:"¿Qué significa 'patrimonio inmaterial'?",
     opts:["Edificios históricos","Tradiciones, música y costumbres culturales","Esculturas de piedra","Cuadros antiguos"],
     ans:"Tradiciones, música y costumbres culturales",
     hint:"This type of heritage includes living traditions and customs, not physical objects or buildings."},

    {type:"teach", trg:"el comisario", src:"the curator", pos:"noun", gender:"m",
     note:"The person who selects and organizes artworks for an exhibition.",
     example:"A: El comisario de la exposición eligió obras de seis países.\nB: Un buen comisario crea un recorrido narrativo.",
     exampleSrc:"A: The curator of the exhibition chose works from six countries.\nB: A good curator creates a narrative journey.",
     funFact:"From Latin 'commissarius' (one entrusted). In Spain, 'comisario' also means police commissioner."},

    {type:"teach", trg:"la subasta", src:"the auction", pos:"noun", gender:"f",
     note:"A public sale where art or goods are sold to the highest bidder.",
     example:"A: El cuadro se vendió en subasta por dos millones.\nB: Las grandes subastas de arte se celebran en Londres y Nueva York.",
     exampleSrc:"A: The painting sold at auction for two million.\nB: The major art auctions are held in London and New York.",
     funFact:"From Latin 'sub hasta' (under the spear). Roman auctions were held under a planted spear as a signal."},

    {type:"fb", s:"Velázquez es famoso por sus {1} de la familia real.", a:["retratos"],
     opts:["retratos","grabados","lienzos","subastas"],
     hint:"These are paintings or images specifically depicting individual people.",
     sSrc:"Velázquez is famous for his {1} of the royal family."},

    {type:"match", pairs:[
      {trg:"el patrimonio", src:"heritage"},
      {trg:"la obra maestra", src:"the masterpiece"},
      {trg:"el lienzo", src:"the canvas"},
      {trg:"vanguardista", src:"avant-garde"}
    ]},

    {type:"mc", q:"¿Quién selecciona y organiza las obras de una exposición?",
     opts:["El grabador","El mecenas","El comisario","El escultor"],
     ans:"El comisario",
     hint:"This person curates the exhibition, choosing which works to display and how to arrange them."},

    {type:"fb", s:"La {1} del fresco dañado costó medio millón de euros.", a:["restauración"],
     opts:["restauración","subasta","muestra","galería"],
     hint:"This process involves repairing and preserving damaged artworks or historic structures.",
     sSrc:"The {1} of the damaged fresco cost half a million euros."},

    {type:"match", pairs:[
      {trg:"la galería", src:"the gallery"},
      {trg:"el grabado", src:"the engraving"},
      {trg:"la subasta", src:"the auction"},
      {trg:"el comisario", src:"the curator"}
    ]},

    {type:"mc", q:"¿Qué técnica usaba Goya en sus series de estampas?",
     opts:["La restauración","El retrato al óleo","La escultura","El grabado"],
     ans:"El grabado",
     hint:"This technique involves carving an image into a surface to create printed copies."}
  ]
};
export default LESSON_8;
