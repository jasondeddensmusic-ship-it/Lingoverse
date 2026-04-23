// Batch 4. Unit 10, Lesson 2: Vacation Activities & Sightseeing
const BATCH4_U10_L2 = {
  id:"itv2_u10l_b4_2", title:"Cosa visitare", icon:"\uD83C\uDFDB", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cosa visitare",
     desc:"Learn vocabulary for sightseeing, vacation activities, and planning what to see in Italy.",
     goals:["Discuss tourist attractions","Plan vacation activities","Express preferences about travel"]},

    {type:"teach", trg:"la vacanza", src:"the vacation / holiday", pos:"noun", gender:"f",
     note:"Feminine. Plural: le vacanze. 'Andare in vacanza' = to go on vacation.\nFrom Latin 'vacare' (to be empty/free).",
     example:"A: Dove vai in vacanza?\nB: In Sardegna, al mare.",
     exampleSrc:"A: Where are you going on vacation?\nB: To Sardinia, to the sea.",
     funFact:"Italian vacation culture centers on August. 'Ferragosto' (August 15) marks the peak. Entire cities empty as residents flee to the coast or mountains. Italian companies often close for 2-3 weeks in August."},

    {type:"teach", trg:"il monumento", src:"the monument", pos:"noun", gender:"m",
     note:"Masculine. Plural: i monumenti. From Latin 'monumentum' (reminder).\nItaly has countless monuments.",
     example:"A: Questo monumento e bellissimo.\nB: Ha duemila anni!",
     exampleSrc:"A: This monument is beautiful.\nB: It is two thousand years old!",
     funFact:"Italy has more UNESCO World Heritage sites than any country on Earth. Italians sometimes take their monuments for granted: 'Ah, quello? E solo medievale' (Oh, that? It is only medieval). What other countries treasure, Italians consider ordinary."},

    {type:"teach", trg:"la mostra", src:"the exhibition", pos:"noun", gender:"f",
     note:"Feminine. 'Mostra d'arte' = art exhibition.\n'La mostra' is temporary; 'la collezione' is permanent.",
     example:"A: C'e una mostra di Caravaggio.\nB: Dobbiamo andare!",
     exampleSrc:"A: There is a Caravaggio exhibition.\nB: We must go!",
     funFact:"Italian museums host world-class temporary exhibitions ('mostre'). Major Italian cities have exhibition calendars packed year-round. 'La Biennale di Venezia' is one of the world's most prestigious art exhibitions, held every two years."},

    {type:"teach", trg:"il mare", src:"the sea", pos:"noun", gender:"m",
     note:"Masculine. 'Andare al mare' = to go to the sea/beach.\n'Mare' is the sea itself; 'spiaggia' is the beach.",
     example:"A: Andiamo al mare domani?\nB: Si! Porto l'asciugamano.",
     exampleSrc:"A: Shall we go to the sea tomorrow?\nB: Yes! I'll bring the towel.",
     funFact:"Italy has over 7,500 km of coastline. 'Andare al mare' is the default summer activity. Italian beaches range from free ('spiaggia libera') to expensive private beaches ('stabilimenti balneari') with umbrellas, chairs, and service."},

    {type:"teach", trg:"la spiaggia", src:"the beach", pos:"noun", gender:"f",
     note:"Feminine. Plural: le spiagge. 'Spiaggia libera' = public beach.\n'Stabilimento balneare' = private beach club.",
     example:"A: La spiaggia e bella?\nB: Bellissima! Sabbia bianca e acqua cristallina.",
     exampleSrc:"A: Is the beach beautiful?\nB: Beautiful! White sand and crystal clear water.",
     funFact:"Italian beach culture is unique. 'Stabilimenti balneari' (beach clubs) rent umbrellas and sunbeds by the day or season. They have bars, restaurants, and even entertainment. 'Spiaggia libera' sections are free but often less maintained."},

    {type:"teach", trg:"la montagna", src:"the mountain", pos:"noun", gender:"f",
     note:"Feminine. Plural: le montagne. 'Andare in montagna' = to go to the mountains.\nAlps and Dolomites in the north.",
     example:"A: Preferisci il mare o la montagna?\nB: La montagna! Amo camminare.",
     exampleSrc:"A: Do you prefer the sea or the mountains?\nB: The mountains! I love hiking.",
     funFact:"The 'mare o montagna?' (sea or mountains?) debate is a national Italian conversation. Families are firmly in one camp. Northern Italians often prefer mountains (Alps, Dolomites). Southern Italians lean toward the sea. It is almost tribal."},

    {type:"teach", trg:"la guida turistica", src:"the tour guide / guidebook", pos:"noun", gender:"f",
     note:"Feminine. Means both the person and the book.\n'Guida' = guide (person is also 'la guida,' regardless of gender).",
     example:"A: Prendiamo una guida turistica?\nB: Si, per capire meglio la storia.",
     exampleSrc:"A: Shall we get a tour guide?\nB: Yes, to better understand the history.",
     funFact:"In Italy, official tour guides ('guide turistiche') must pass rigorous exams and be licensed by the region. Unlicensed guiding is illegal. Italian tour guides are often passionate experts who bring history dramatically to life."},

    {type:"teach", trg:"la fotografia", src:"the photograph / photography", pos:"noun", gender:"f",
     note:"Feminine. Often shortened to 'la foto.' 'Fare una foto' = to take a photo.\nPlural: le foto (invariable short form).",
     example:"A: Posso fare una foto?\nB: Certo! Vuoi che ne faccia una a te?",
     exampleSrc:"A: Can I take a photo?\nB: Of course! Do you want me to take one of you?",
     funFact:"'Scattare una foto' (to snap a photo) is slightly more technical than 'fare una foto.' Italian museums often ban flash photography ('vietato il flash'). The selfie culture conflicts with Italy's strict museum photography rules."},

    {type:"teach", trg:"il souvenir", src:"the souvenir", pos:"noun", gender:"m",
     note:"Masculine. Invariable. From French 'souvenir' (to remember).\n'Negozio di souvenir' = souvenir shop.",
     example:"A: Compriamo un souvenir?\nB: Si, una bella cartolina.",
     exampleSrc:"A: Shall we buy a souvenir?\nB: Yes, a beautiful postcard.",
     funFact:"Italian souvenir shops range from tacky tourist traps to artisan workshops. The best souvenirs are local crafts: Murano glass from Venice, ceramics from Deruta, leather from Florence, limoncello from Amalfi. Avoid mass-produced 'Made in China' souvenirs."},

    {type:"teach", trg:"la cartolina", src:"the postcard", pos:"noun", gender:"f",
     note:"Feminine. Diminutive of 'carta.' 'Mandare una cartolina' = to send a postcard.\nFrom 'carta' (paper).",
     example:"A: Mando una cartolina alla nonna.\nB: Che bel pensiero!",
     exampleSrc:"A: I am sending a postcard to grandma.\nB: What a nice thought!",
     funFact:"Despite the digital age, Italian postcards ('cartoline') survive. Italian post ('Poste Italiane') is famously slow: a postcard from Italy might arrive weeks after you return home. Some people send postcards knowing this delay is part of the charm."},

    {type:"teach", trg:"godersi", src:"to enjoy (oneself)", pos:"verb", gender:null,
     note:"Reflexive verb. 'Mi godo le vacanze' = I enjoy my vacation.\n'Goditi la vita!' = Enjoy life!",
     example:"A: Goditi la vacanza!\nB: Grazie! Ci vediamo al ritorno.",
     exampleSrc:"A: Enjoy your vacation!\nB: Thanks! See you when I get back.",
     funFact:"'Godersi' captures the Italian philosophy of savoring experiences. 'Goditi il momento' (enjoy the moment) reflects the Italian emphasis on living in the present. The concept of 'dolce far niente' (the sweetness of doing nothing) is the ultimate Italian vacation goal."},

    {type:"teach", trg:"l'itinerario", src:"the itinerary / route", pos:"noun", gender:"m",
     note:"Masculine. 'Pianificare un itinerario' = to plan an itinerary.\nFrom Latin 'iter' (journey).",
     example:"A: Hai preparato l'itinerario?\nB: Si, tre giorni a Roma e due a Firenze.",
     exampleSrc:"A: Have you prepared the itinerary?\nB: Yes, three days in Rome and two in Florence.",
     funFact:"Italian travelers love planning detailed itineraries. The classic Italian road trip follows the 'Grand Tour' route: Milan, Venice, Florence, Rome, Naples. This same route was taken by English aristocrats in the 18th century to complete their education."},

    {type:"teach", trg:"scoprire", src:"to discover / to find out", pos:"verb", gender:null,
     note:"Irregular past participle: scoperto. 'Ho scoperto un posto bellissimo' = I discovered a beautiful place.\nFrom Latin 'discooperire.'",
     example:"A: Ho scoperto una trattoria fantastica!\nB: Dove? Dimmi tutto!",
     exampleSrc:"A: I discovered a fantastic trattoria!\nB: Where? Tell me everything!",
     funFact:"'Scoprire' literally means 'to uncover.' Columbus 'scopri l'America' (discovered America). In travel, 'scoprire' captures the joy of finding hidden gems. Italians love sharing discoveries: 'ho scoperto un posto...' is how every great food recommendation begins."},

    {type:"teach", trg:"indimenticabile", src:"unforgettable", pos:"adj", gender:null,
     note:"Same form for masculine and feminine. 'Un viaggio indimenticabile' = an unforgettable trip.\nFrom 'in-' (not) + 'dimenticabile' (forgettable).",
     example:"A: Com'era la vacanza?\nB: Indimenticabile! La migliore della mia vita.",
     exampleSrc:"A: How was the vacation?\nB: Unforgettable! The best of my life.",
     funFact:"Italians describe experiences with maximum emotion. 'Indimenticabile' is the ultimate travel compliment. Italian vocabulary for positive experiences is vast: 'meraviglioso' (marvelous), 'stupendo' (stunning), 'fantastico' (fantastic), 'incredibile' (incredible)."},

    // Quiz steps
    {type:"mc", q:"Cosa significa 'dolce far niente'?",
     opts:["The sweetness of doing nothing","Sweet food at night","A sweet Italian cake","A type of vacation"],
     ans:"The sweetness of doing nothing",
     hint:"This famous Italian expression captures the joy of pure relaxation."},

    {type:"fb", s:"Preferisci il {1} o la montagna in vacanza?",
     a:["mare"], opts:["mare","museo","monumento","souvenir"],
     hint:"This is the classic Italian vacation debate: coast or peaks.",
     sSrc:"Do you prefer the {1} or the mountains on vacation?"},

    {type:"match", pairs:[
      {trg:"la vacanza", src:"vacation"},
      {trg:"la spiaggia", src:"beach"},
      {trg:"la montagna", src:"mountain"},
      {trg:"la mostra", src:"exhibition"},
      {trg:"la cartolina", src:"postcard"}
    ,{trg:"indimenticabile",src:"unforgettable"}]},

    {type:"mc", q:"Cos'e uno 'stabilimento balneare'?",
     opts:["A boat rental","A private beach club with umbrellas and services","A swimming pool","A water park"],
     ans:"A private beach club with umbrellas and services",
     hint:"These Italian b... establishments rent sunbeds and u...."},

    {type:"fb", s:"Ho {1} un ristorante fantastico vicino al Colosseo!",
     a:["scoperto"], opts:["scoperto","prenotato","visitato","comprato"],
     hint:"You found an amazing restaurant, like uncovering a hidden treasure.",
     sSrc:"I {1} a fantastic restaurant near the Colosseum!"},

    {type:"mc", q:"Quanti siti UNESCO ha l'Italia?",
     opts:["Fewer than France","The same as Spain","More than any other country in the world","About 20"],
     ans:"More than any other country in the world",
     hint:"Italy leads the global UNESCO W... Heritage list."},

    {type:"fb", s:"{1} la vacanza! Ti meriti il riposo.",
     a:["Goditi"], opts:["Goditi","Prenota","Visita","Compra"],
     hint:"You are wishing someone to enjoy their holiday.",
     sSrc:"{1} your vacation! You deserve the rest."},

    {type:"mc", q:"Cos'era il 'Grand Tour'?",
     opts:["A modern tour bus company","An Italian TV show","A Renaissance art style","A journey through Italy taken by European aristocrats for education"],
     ans:"A journey through Italy taken by European aristocrats for education",
     hint:"18th-century English nobles traveled this Italian route as part of their e...."}
  ,{type:"match",pairs:[{trg:"il monumento",src:"the monument"},{trg:"la guida turistica",src:"the tour guide / guidebook"},{trg:"la fotografia",src:"the photograph / photography"},{trg:"il souvenir",src:"the souvenir"},{trg:"godersi",src:"to enjoy (oneself)"},{trg:"scoprire",src:"to discover / to find out"}]},{type:"mc",q:"How do you say \"itinerary / route\" in Italian?",opts:["l'itinerario","il tavolo","la bicicletta","la finestra"],ans:"l'itinerario",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Abbiamo comprato una {1} come ricordo del viaggio.",a:["cartolina"],opts:["cartolina","fotografia","souvenir","guida turistica"],hint:"A printed card with a picture, sent to family or kept as a memento.",sSrc:"We bought a {1} as a memory of the trip."}]
};
export default BATCH4_U10_L2;
