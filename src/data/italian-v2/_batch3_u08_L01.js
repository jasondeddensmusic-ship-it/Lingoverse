// Batch 3 — Unit 08, Lesson 1: Materiali e taglie (Materials & Sizes)
const BATCH3_U08_L1 = {
  id:"itv2_u08l_b3_1", title:"Materiali e taglie", icon:"\uD83E\uDDF5", xp:15, board:true,
  steps:[
    {type:"intro", title:"Materiali e taglie",
     desc:"Expand your shopping vocabulary with materials, sizes, and fitting descriptions. Know exactly how to communicate what you need in Italian stores.",
     goals:["Describe fabric types and materials","Talk about sizes and fit","Navigate Italian sizing systems"]},

    {type:"teach", trg:"di seta", src:"silk / made of silk", pos:"adj", gender:null,
     note:"'Seta' = silk (noun, feminine). From Latin 'seta' (bristle).\n'Una cravatta di seta' = a silk tie.",
     example:"A: Questa sciarpa e di seta?\nB: Si, seta italiana di Como.",
     exampleSrc:"A: Is this scarf made of silk?\nB: Yes, Italian silk from Como.",
     funFact:"The Como area in Lombardy has been the center of Italian silk production since the 15th century. Como silk is considered among the finest in the world. Many luxury fashion houses source their silk fabrics exclusively from this region."},

    {type:"teach", trg:"di lino", src:"linen / made of linen", pos:"adj", gender:null,
     note:"'Lino' = linen (noun, masculine). From Latin 'linum' (flax).\n'Una camicia di lino' = a linen shirt.",
     example:"A: D'estate preferisco il lino.\nB: Si, e fresco e leggero.",
     exampleSrc:"A: In summer I prefer linen.\nB: Yes, it is cool and light.",
     funFact:"Linen is the fabric of Italian summer. It wrinkles easily, but Italians consider linen wrinkles charming and natural. Ironing linen excessively is seen as fussy. The relaxed, slightly rumpled linen look is part of Italian 'sprezzatura' (studied casualness)."},

    {type:"teach", trg:"sintetico", src:"synthetic", pos:"adj", gender:null,
     note:"Adjective. Feminine: sintetica. 'Tessuto sintetico' = synthetic fabric.\nOpposite: naturale.",
     example:"A: E sintetico o naturale?\nB: Sintetico, ma di buona qualità.",
     exampleSrc:"A: Is it synthetic or natural?\nB: Synthetic, but good quality.",
     funFact:"Italian fashion generally favors natural fibers over synthetics. Asking 'Di che tessuto e?' (What fabric is it?) is common in Italian shops. High-quality Italian clothing typically uses cotton, wool, silk, or linen. Synthetic blends are more common in fast fashion."},

    {type:"teach", trg:"la misura", src:"the measurement / size", pos:"noun", gender:"f",
     note:"Feminine. From 'misurare' (to measure).\n'Che misura porti?' for shoes; 'che taglia?' for clothes.",
     example:"A: Che misura di scarpe porti?\nB: Porto il quarantadue.",
     exampleSrc:"A: What shoe size do you wear?\nB: I wear a 42.",
     funFact:"Italian shoe sizes use the 'punto francese' system. A US men's 9 is roughly an Italian 42. Women's US 7 is about Italian 38. The numbering is based on centimeters. Always try shoes on in Italian stores, as sizes can vary between brands."},

    {type:"teach", trg:"aderente", src:"tight-fitting / slim", pos:"adj", gender:null,
     note:"Adjective. Same form masculine/feminine (-e ending).\n'Jeans aderenti' = slim jeans.",
     example:"A: Preferisci aderente o comodo?\nB: Aderente, ma non troppo stretto.",
     exampleSrc:"A: Do you prefer slim or comfortable?\nB: Slim, but not too tight.",
     funFact:"Italian fashion often favors a more fitted silhouette than American or British fashion. 'Aderente' is different from 'stretto' (too tight): aderente means it follows your body shape nicely, while stretto means uncomfortably tight."},

    {type:"teach", trg:"comodo", src:"comfortable", pos:"adj", gender:null,
     note:"Adjective. Feminine: comoda. From Latin 'commodus' (convenient).\nOpposite: scomodo.",
     example:"A: Queste scarpe sono molto comode.\nB: Perfette per camminare tutto il giorno.",
     exampleSrc:"A: These shoes are very comfortable.\nB: Perfect for walking all day.",
     funFact:"'Comodo' comes from the same root as English 'commodity' and 'accommodate.' Italian shoe brands like Geox are famous for combining style with comfort. In Italy, the ideal is 'bello e comodo' (beautiful and comfortable), never sacrificing one for the other."},

    {type:"teach", trg:"il camerino", src:"the fitting room", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'camera' (room).\n'Posso usare il camerino?' = May I use the fitting room?",
     example:"A: Dov'e il camerino?\nB: In fondo a destra.",
     exampleSrc:"A: Where is the fitting room?\nB: At the end on the right.",
     funFact:"In Italian shops, staff usually count the items you bring into the fitting room and give you a numbered tag. When leaving, they check the count matches. This anti-theft measure is standard across Italy, from small boutiques to large chains."},

    {type:"teach", trg:"il tessuto", src:"the fabric / material", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'textus' (woven).\n'Tessuto pregiato' = fine fabric.",
     example:"A: Di che tessuto e questa gonna?\nB: E un misto cotone e lino.",
     exampleSrc:"A: What fabric is this skirt?\nB: It is a cotton and linen blend.",
     funFact:"From the same Latin root as English 'text' and 'textile.' Both words originally meant 'woven.' Italian textile districts like Prato (near Florence) and Biella (Piedmont) produce fabrics for the world's top fashion houses."},

    {type:"teach", trg:"il numero", src:"the number / shoe size", pos:"noun", gender:"m",
     note:"Masculine. 'Che numero porti?' = What shoe size do you wear?\nItalian shoe sizes run from about 35 to 47.",
     example:"A: Che numero porti?\nB: Il quarantacinque. Ho piedi grandi!",
     exampleSrc:"A: What size do you wear?\nB: Size 45. I have big feet!",
     funFact:"Italian shoe artisans can make custom shoes ('scarpe su misura') based on your exact foot measurements. Bespoke shoemaking is still a living tradition in cities like Florence and Naples. A custom pair takes weeks and costs a premium, but lasts decades."},

    {type:"teach", trg:"il cambio", src:"the exchange / return", pos:"noun", gender:"m",
     note:"Masculine. From 'cambiare' (to change).\n'Posso fare un cambio?' = Can I exchange this?",
     example:"A: Posso fare un cambio taglia?\nB: Si, con lo scontrino, entro trenta giorni.",
     exampleSrc:"A: Can I exchange the size?\nB: Yes, with the receipt, within thirty days.",
     funFact:"Italian consumer law gives you 14 days to return online purchases, but in-store returns depend on the shop's policy. Always keep your 'scontrino' (receipt). Many Italian shops prefer exchanges over refunds. The phrase 'cambio merce' (merchandise exchange) is displayed in many stores."},

    {type:"teach", trg:"la vetrina", src:"the shop window / display", pos:"noun", gender:"f",
     note:"Feminine. From 'vetro' (glass).\n'Guardare le vetrine' = window shopping.",
     example:"A: Hai visto la giacca in vetrina?\nB: Si, entriamo a vedere il prezzo.",
     exampleSrc:"A: Did you see the jacket in the window?\nB: Yes, let us go in and check the price.",
     funFact:"'Fare vetrina' or 'guardare le vetrine' means window shopping. Italian shop windows are often designed as mini art installations, especially during fashion weeks. Milan's Via Montenapoleone and Rome's Via Condotti have some of the world's most elaborate window displays."},

    {type:"teach", trg:"il reparto", src:"the department / section", pos:"noun", gender:"m",
     note:"Masculine. From 'ripartire' (to divide).\n'Reparto uomo/donna' = men's/women's section.",
     example:"A: Dov'e il reparto donna?\nB: Al secondo piano.",
     exampleSrc:"A: Where is the women's section?\nB: On the second floor.",
     funFact:"Italian department stores like La Rinascente (founded 1917 in Milan) organize by 'reparti.' The name 'La Rinascente' (The Reborn One) was suggested by the poet Gabriele D'Annunzio after the store was rebuilt following a fire."},

    {type:"teach", trg:"il marchio", src:"the brand / label", pos:"noun", gender:"m",
     note:"Masculine. Plural: i marchi. From Germanic 'mark' (sign).\n'Marchio di lusso' = luxury brand.",
     example:"A: E un marchio italiano?\nB: Si, e un marchio storico fiorentino.",
     exampleSrc:"A: Is it an Italian brand?\nB: Yes, it is a historic Florentine brand.",
     funFact:"Italy has more luxury fashion brands than any other country. From Gucci and Prada to Ferragamo and Valentino, Italian 'marchi' dominate global fashion. The phrase 'Made in Italy' itself has become a powerful brand guaranteeing quality craftsmanship."},

    // Quiz steps
    {type:"mc", q:"Which Italian city is the center of silk production?",
     opts:["Milano (Milan)","Firenze (Florence)","Como","Napoli (Naples)"],
     ans:"Como",
     hint:"This lakeside city in Lombardy has produced luxury silk since the 15th century. Many fashion houses source fabrics from here."},

    {type:"fb", s:"Di che {1} e questa gonna?",
     a:["tessuto"],
     opts:["tessuto","marchio","reparto","numero"],
     hint:"You are asking about the material the skirt is made from. From Latin 'textus' (woven), same root as 'textile.'",
     sSrc:"What {1} is this skirt?"},

    {type:"match", pairs:[
      {trg:"di seta", src:"silk"},
      {trg:"di lino", src:"linen"},
      {trg:"sintetico", src:"synthetic"},
      {trg:"aderente", src:"slim-fitting"},
      {trg:"comodo", src:"comfortable"}
    ]},

    {type:"mc", q:"What is 'guardare le vetrine'?",
     opts:["Cleaning the shop windows","Arranging the product display","Window shopping","Opening the store for business"],
     ans:"Window shopping",
     hint:"'Vetrina' (from 'vetro,' glass) is the display w.... Looking at them without buying is a popular Italian pastime."},

    {type:"fb", s:"Posso fare un {1} taglia?",
     a:["cambio"],
     opts:["cambio","sconto","saldo","prezzo"],
     hint:"You bought the wrong size and want to exchange it. Keep your receipt. Many Italian shops allow this within 30 days.",
     sSrc:"Can I do a size {1}?"},

    {type:"mc", q:"What is the difference between 'aderente' and 'stretto'?",
     opts:["They mean exactly the same thing","Aderente is slim-fitting, stretto is uncomfortably tight","Stretto is slim, aderente is loose","Both mean loose-fitting"],
     ans:"Aderente is slim-fitting, stretto is uncomfortably tight",
     hint:"One follows your body shape nicely. The other squeezes u.... Italian fashion favors the first."},

    {type:"fb", s:"Dov'e il {1} donna?",
     a:["reparto"],
     opts:["reparto","camerino","marchio","tessuto"],
     hint:"The section of the store dedicated to women's clothing. Italian department stores organize by these sections.",
     sSrc:"Where is the women's {1}?"},

    {type:"mc", q:"Why do Italians accept linen wrinkles in summer?",
     opts:["They cannot afford irons","Wrinkles are part of 'sprezzatura' (studied casualness)","Linen is never sold in Italy","Italian linen does not wrinkle"],
     ans:"Wrinkles are part of 'sprezzatura' (studied casualness)",
     hint:"Over-ironing linen is considered fussy. The relaxed, slightly rumpled look is intentionally elegant in Italian fashion culture."}
  ,{type:"match",pairs:[{trg:"la misura",src:"the measurement / size"},{trg:"il camerino",src:"the fitting room"},{trg:"il numero",src:"the number / shoe size"},{trg:"la vetrina",src:"the shop window / display"},{trg:"il marchio",src:"the brand / label"}]}]
};
export default BATCH3_U08_L1;
