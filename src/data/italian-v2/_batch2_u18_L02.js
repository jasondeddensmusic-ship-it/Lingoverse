// Unit 18 Batch2. Lesson 2: Conservation & Biodiversity
const BATCH2_U18_L2 = {
  id:"itv2_u18l_b2_2", title:"Conservazione e biodiversita", icon:"🦎", xp:15, board:true,
  steps:[
    {type:"intro", title:"Conservazione e biodiversita",
     desc:"Learn Italian vocabulary for conservation, biodiversity, and environmental activism. Italy has remarkable natural diversity and a growing conservation movement.",
     goals:["Discuss biodiversity and conservation","Understand ecosystem vocabulary","Talk about environmental activism"]},

    {type:"teach", trg:"la biodiversita", src:"biodiversity", pos:"noun", gender:"f",
     note:"Feminine. Invariable. Bio (life) + diversita (diversity).\n'Perdita di biodiversita' = biodiversity loss.",
     example:"A: L'Italia ha una grande biodiversita.\nB: Si, grazie al clima e alla geografia variata.",
     exampleSrc:"A: Italy has great biodiversity.\nB: Yes, thanks to the varied climate and geography.",
     funFact:"Italy is the European country with the highest biodiversity. Its position between Alps and Mediterranean, with islands and varied elevations, creates diverse habitats. Over 60,000 animal species and 6,700 plant species are recorded. The Mediterranean basin is one of the world's biodiversity hotspots."},

    {type:"teach", trg:"l'ecosistema", src:"the ecosystem", pos:"noun", gender:"m",
     note:"Masculine. Eco (environment) + sistema (system).\n'Ecosistema marino' = marine ecosystem.",
     example:"A: L'ecosistema marino e in pericolo.\nB: La pesca eccessiva e un problema grave.",
     exampleSrc:"A: The marine ecosystem is in danger.\nB: Overfishing is a serious problem.",
     funFact:"Italy has diverse ecosystems: Alpine ('alpino'), Mediterranean ('mediterraneo'), wetland ('zona umida'), and marine ('marino'). The Po Delta is one of Europe's most important wetlands. Italy's 8,000 km of coastline supports rich marine ecosystems, but pollution and overfishing threaten their health."},

    {type:"teach", trg:"la specie protetta", src:"the protected species", pos:"noun", gender:"f",
     note:"Feminine. 'Specie' = species (invariable). 'Protetta' = protected.\n'Specie in via di estinzione' = endangered species.",
     example:"A: Il lupo italiano e una specie protetta.\nB: Fortunatamente la popolazione sta crescendo.",
     exampleSrc:"A: The Italian wolf is a protected species.\nB: Fortunately the population is growing.",
     funFact:"The Italian wolf ('lupo italiano') was nearly extinct in the 1970s with only 100 individuals. Protection laws helped the population recover to over 3,000. Other protected species include the Marsican brown bear ('orso marsicano'), Mediterranean monk seal, and Sardinian deer. Conservation is a success story."},

    {type:"teach", trg:"il parco nazionale", src:"the national park", pos:"noun", gender:"m",
     note:"Masculine. 'Parco' = park. 'Nazionale' = national.\n'Area protetta' = protected area.",
     example:"A: Hai visitato il Parco Nazionale del Gran Paradiso?\nB: Si, e meraviglioso! Ho visto gli stambecchi.",
     exampleSrc:"A: Have you visited the Gran Paradiso National Park?\nB: Yes, it is wonderful! I saw the ibex.",
     funFact:"Italy has 25 national parks covering over 5% of its territory. Gran Paradiso (1922) was Italy's first, created to save the Alpine ibex from extinction. The Dolomites, Cinque Terre, and Amalfi Coast are UNESCO World Heritage Sites. Italy also has hundreds of regional and local protected areas."},

    {type:"teach", trg:"la deforestazione", src:"deforestation", pos:"noun", gender:"f",
     note:"Feminine. De- (removal) + forestazione (forestation).\n'Lottare contro la deforestazione' = to fight deforestation.",
     example:"A: La deforestazione e un problema globale.\nB: In Italia, in realtà, la superficie forestale sta aumentando.",
     exampleSrc:"A: Deforestation is a global problem.\nB: In Italy, actually, the forest area is increasing.",
     funFact:"Counterintuitively, Italy's forest cover has been growing for decades as abandoned agricultural land naturally reforests. Today, about 37% of Italy is forested, up from 20% in the 1950s. However, these new forests are often monocultures and lack the biodiversity of ancient woodlands."},

    {type:"teach", trg:"l'estinzione", src:"extinction", pos:"noun", gender:"f",
     note:"Feminine. From 'estinguere' (to extinguish).\n'In via di estinzione' = on the way to extinction.",
     example:"A: Molte specie sono a rischio di estinzione.\nB: Dobbiamo proteggere i loro habitat.",
     exampleSrc:"A: Many species are at risk of extinction.\nB: We must protect their habitats.",
     funFact:"'Estinzione' comes from 'estinguere' (to extinguish), the same verb used for putting out fires. 'L'estintore' (fire extinguisher) shares the root. The metaphor is powerful: extinction extinguishes a species forever. Italy's 'Lista Rossa' (Red List) tracks endangered species nationally."},

    {type:"teach", trg:"la flora e la fauna", src:"flora and fauna / plant and animal life", pos:"noun", gender:"f",
     note:"Feminine. 'Flora' = plant life. 'Fauna' = animal life.\nNamed after Roman deities: Flora (flowers) and Faunus (forests).",
     example:"A: La flora e la fauna delle Dolomiti sono uniche.\nB: Ci sono fiori alpini che non esistono altrove.",
     exampleSrc:"A: The flora and fauna of the Dolomites are unique.\nB: There are Alpine flowers that do not exist elsewhere.",
     funFact:"'Flora' and 'Fauna' were Roman deities: Flora presided over flowers and spring, Faunus over forests and fields. Italian biologists use these terms in formal scientific contexts. Italy's flora includes over 6,700 vascular plant species, with many endemic species found nowhere else."},

    {type:"teach", trg:"l'habitat", src:"the habitat", pos:"noun", gender:"m",
     note:"Masculine. Invariable: singular and plural both 'habitat.'\nFrom Latin 'habitare' (to dwell).",
     example:"A: Questo habitat e importante per gli uccelli migratori.\nB: La zona umida attira centinaia di specie.",
     exampleSrc:"A: This habitat is important for migratory birds.\nB: The wetland attracts hundreds of species.",
     funFact:"'Habitat' is used as-is from Latin in Italian (and English). Italy lies on major bird migration routes, making wetlands like the Po Delta and the Orbetello lagoon critical habitats. The EU Habitat Directive protects sites through the 'Rete Natura 2000' (Natura 2000 Network), which includes over 2,500 Italian sites."},

    {type:"teach", trg:"la riserva naturale", src:"the nature reserve", pos:"noun", gender:"f",
     note:"Feminine. 'Riserva' = reserve. 'Naturale' = natural.\nSmaller and more specific than a national park.",
     example:"A: Vicino a casa c'è una riserva naturale.\nB: Ci vado spesso per fare escursioni.",
     exampleSrc:"A: Near my house there is a nature reserve.\nB: I go there often for hikes.",
     funFact:"Italy has hundreds of 'riserve naturali' (nature reserves), both state and regional. They protect specific ecosystems: wetlands, dunes, forests, or marine areas. 'Riserva marina protetta' (marine protected area) safeguards coastal waters. The Zingaro reserve in Sicily was Italy's first nature reserve (1981)."},

    {type:"teach", trg:"il cambiamento dell'uso del suolo", src:"land use change", pos:"noun", gender:"m",
     note:"Masculine. 'Suolo' = soil/ground. Technical environmental term.\n'Consumo di suolo' = land consumption.",
     example:"A: Il consumo di suolo in Italia e preoccupante.\nB: Perdiamo otto metri quadrati al secondo.",
     exampleSrc:"A: Land consumption in Italy is worrying.\nB: We lose eight square meters per second.",
     funFact:"Italy loses about 2 square meters of green land per second to urbanization. The 'ISPRA' (national environmental agency) publishes annual reports on 'consumo di suolo.' The conversion of farmland and natural areas to concrete is a major environmental concern, reducing habitat and increasing flood risk."},

    {type:"teach", trg:"la zona umida", src:"the wetland", pos:"noun", gender:"f",
     note:"Feminine. 'Umida' = humid/wet.\n'Convenzione di Ramsar' = Ramsar Convention (wetland protection).",
     example:"A: Le zone umide sono importanti per gli uccelli.\nB: L'Italia ha 57 zone umide protette.",
     exampleSrc:"A: Wetlands are important for birds.\nB: Italy has 57 protected wetlands.",
     funFact:"Italy has 57 sites designated under the Ramsar Convention for wetland protection. The Po Delta, Comacchio Valleys, and Orbetello lagoon are among the most important. These areas support migratory birds, fish spawning, and flood control. Italian birdwatching ('birdwatching,' borrowed from English) is growing rapidly."},

    // Quiz steps
    {type:"mc", q:"Why is Italy the European country with the highest biodiversity?",
     opts:["Because of its varied climate, geography, and position between Alps and Mediterranean","Because it introduced the most foreign species","Because all European animals migrated there","Because it has the largest land area in Europe"],
     ans:"Because of its varied climate, geography, and position between Alps and Mediterranean",
     hint:"Mountains, islands, coastline, and diverse elevations create many different habitats. Over 60,000 animal species live in Italy."},

    {type:"fb", s:"Il lupo italiano e una specie {1}.",
     a:["protetta"],
     opts:["protetta","estinta","pericolosa","comune"],
     hint:"This animal is legally protected from hunting. Its population has recovered from near-extinction in the 1970s.",
     sSrc:"The Italian wolf is a {1} species."},

    {type:"match", pairs:[
      {trg:"la biodiversita", src:"biodiversity"},
      {trg:"l'ecosistema", src:"the ecosystem"},
      {trg:"il parco nazionale", src:"the national park"},
      {trg:"l'estinzione", src:"extinction"},
      {trg:"la zona umida", src:"the wetland"}
    ]},

    {type:"mc", q:"Is Italy's forest cover growing or shrinking?",
     opts:["Shrinking rapidly due to construction everywhere","Growing, as abandoned farmland naturally reforests","Completely unchanged for the last century","Shrinking in the north but growing in the south"],
     ans:"Growing, as abandoned farmland naturally reforests",
     hint:"About 37% of Italy is now forested, up from 20% in the 1950s. Rural depopulation allowed nature to reclaim agricultural land."},

    {type:"fb", s:"Molte specie sono a rischio di {1}.",
     a:["estinzione"],
     opts:["estinzione","protezione","conservazione","biodiversita"],
     hint:"These species could disappear forever if not protected. The word comes from 'estinguere' (to extinguish).",
     sSrc:"Many species are at risk of {1}."},

    {type:"mc", q:"What is the 'Rete Natura 2000' in Italy?",
     opts:["A cycling path network across the country","A new internet provider for rural areas","A network of over 2,500 protected habitat sites","A chain of organic food stores"],
     ans:"A network of over 2,500 protected habitat sites",
     hint:"This EU-wide conservation n... protects important habitats and species. Italy has one of the highest numbers of designated s...."},

    {type:"fb", s:"L'{1} marino e in pericolo a causa della pesca eccessiva.",
     a:["ecosistema"],
     opts:["ecosistema","habitat","ambiente","parco"],
     hint:"This word describes the complete system of living organisms interacting with their marine environment.",
     sSrc:"The marine {1} is in danger due to overfishing."},

    {type:"mc", q:"How much green land does Italy lose to urbanization per second?",
     opts:["About 10 square meters per second","About 50 square meters per second","About 1 square meter per second","About 2 square meters per second"],
     ans:"About 2 square meters per second",
     hint:"The ISPRA reports document this alarming rate of 'consumo di suolo.' Farmland and natural areas are converted to concrete."}
  ,{type:"match",pairs:[{trg:"la deforestazione",src:"deforestation"}]},
{type:"fb",s:"La {1} distrugge gli ecosistemi tropicali.",a:["deforestazione"],opts:["deforestazione","biodiversita","estinzione","riserva naturale"],hint:"The large-scale removal of forest cover, harming wildlife and climate.",sSrc:"The {1} destroys tropical ecosystems."},
{type:"fb",s:"Il {1} protegge le specie in via di estinzione.",a:["parco nazionale"],opts:["parco nazionale","habitat","ecosistema","zona umida"],hint:"A protected area managed by the state to preserve nature.",sSrc:"The {1} protects endangered species."}]
};
export default BATCH2_U18_L2;
