// Unit 05 Batch 2 — Lesson 1: More Rooms & Describing a House
const BATCH2_U05_L1 = {
  id:"itv2_u05l_b2_1", title:"Tutta la casa", icon:"\ud83c\udfe2", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tutta la casa",
     desc:"Learn more rooms, house types, and how to describe a home in Italian.",
     goals:["Name additional rooms and house areas","Describe different types of homes","Talk about your living situation"]},

    {type:"teach", trg:"l'ingresso", src:"the entrance / hallway", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From 'ingresso' (entering).\nThe first room you see when entering.",
     example:"A: Lascia le scarpe nell'ingresso.\nB: Va bene!",
     exampleSrc:"A: Leave your shoes in the hallway.\nB: All right!",
     funFact:"Italians often remove shoes at the entrance. 'Pantofole' (slippers) are offered to guests. The ingresso often has a small table for keys and mail, and hooks for coats. Function over decoration."},

    {type:"teach", trg:"il corridoio", src:"the hallway / corridor", pos:"noun", gender:"m",
     note:"Masculine. From 'correre' (to run).\nThe passage connecting rooms.",
     example:"A: Il bagno e in fondo al corridoio.\nB: Grazie!",
     exampleSrc:"A: The bathroom is at the end of the hallway.\nB: Thanks!",
     funFact:"From 'correre' (to run). A corridor is a space for running through, not lingering. English 'corridor' is borrowed from Italian. The word entered English during the Renaissance when Italian architecture influenced Europe."},

    {type:"teach", trg:"il balcone", src:"the balcony", pos:"noun", gender:"m",
     note:"Masculine. From Germanic 'balko' (beam, platform).\nA defining feature of Italian urban architecture.",
     example:"A: Hai un balcone?\nB: Si, un bel balcone con vista sulla città.",
     exampleSrc:"A: Do you have a balcony?\nB: Yes, a nice balcony overlooking the city.",
     funFact:"Balconies are essential in Italian architecture. Italians use them for drying laundry, growing herbs, and socializing with neighbors. Romeo and Juliet's famous scene takes place on a Verona balcony."},

    {type:"teach", trg:"il terrazzo", src:"the terrace / rooftop", pos:"noun", gender:"m",
     note:"Masculine. Larger than a balcony, often on the roof.\nFrom Latin 'terraceus' (of earth).",
     example:"A: Mangiamo sul terrazzo stasera?\nB: Si, fa bel tempo!",
     exampleSrc:"A: Shall we eat on the terrace tonight?\nB: Yes, the weather is nice!",
     funFact:"A terrazzo is larger than a balcone and often furnished with tables and chairs. Eating dinner on the terrazzo on warm summer evenings is one of the great Italian pleasures. Some have panoramic city views."},

    {type:"teach", trg:"le scale", src:"the stairs", pos:"noun", gender:"f",
     note:"Feminine plural. Singular 'la scala' = staircase.\n'Fare le scale' = to take the stairs.",
     example:"A: C'e l'ascensore?\nB: No, solo le scale. E al terzo piano.",
     exampleSrc:"A: Is there an elevator?\nB: No, only stairs. It is on the third floor.",
     funFact:"Many old Italian buildings have no elevator. Walking up five flights of stairs is normal. 'La Scala' in Milan is the famous opera house, named after the staircase of the church it replaced."},

    {type:"teach", trg:"l'ascensore", src:"the elevator / lift", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From 'ascendere' (to go up).\nOlder Italian buildings often lack one.",
     example:"A: Prendiamo l'ascensore?\nB: Si, abito all'ottavo piano!",
     exampleSrc:"A: Shall we take the elevator?\nB: Yes, I live on the eighth floor!",
     funFact:"Italian elevators in old buildings can be tiny, fitting only two people. They were often added after the building was constructed, squeezed into the stairwell. The 'piano terra' (ground floor) is floor 0, not floor 1."},

    {type:"teach", trg:"il piano", src:"the floor / story (of building)", pos:"noun", gender:"m",
     note:"Masculine. 'Piano terra' = ground floor. 'Primo piano' = first floor.\nAlso means 'plan' and the musical instrument.",
     example:"A: A che piano abiti?\nB: Al quarto piano.",
     exampleSrc:"A: What floor do you live on?\nB: On the fourth floor.",
     funFact:"Italian floor numbering starts at 'piano terra' (ground = 0). The 'primo piano' (first floor) is what Americans call the second floor. This European numbering system confuses many visitors."},

    {type:"teach", trg:"il garage", src:"the garage", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from French. Invariable plural.\nOften underground in Italian cities.",
     example:"A: Hai il garage?\nB: Si, nel sottosuolo del palazzo.",
     exampleSrc:"A: Do you have a garage?\nB: Yes, in the basement of the building.",
     funFact:"Parking is a major challenge in Italian cities. Many buildings have underground garages. Street parking often requires colored lines: white (free), blue (paid), yellow (reserved). Double-parking is an art form."},

    {type:"teach", trg:"il palazzo", src:"the building / apartment block", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'palatium' (Palatine Hill).\nIn everyday Italian, means an apartment building.",
     example:"A: In che palazzo abiti?\nB: Nel palazzo rosso all'angolo.",
     exampleSrc:"A: In which building do you live?\nB: In the red building on the corner.",
     funFact:"'Palazzo' originally meant 'palace' (from Rome's Palatine Hill where emperors lived). In modern Italian, it simply means any large building, especially apartment blocks. English 'palace' comes from the same root."},

    {type:"teach", trg:"l'appartamento", src:"the apartment", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. Most urban Italians live in apartments.\nFrom 'appartare' (to separate).",
     example:"A: L'appartamento e grande?\nB: Ha tre camere e due bagni.",
     exampleSrc:"A: Is the apartment big?\nB: It has three bedrooms and two bathrooms.",
     funFact:"About 70% of Italians own their home, one of the highest rates in Europe. Most urban Italians live in apartments. The dream of 'la villetta' (small house with garden) exists but is harder to achieve in cities."},

    {type:"teach", trg:"l'affitto", src:"the rent", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. 'Pagare l'affitto' = to pay rent.\n'In affitto' = for rent.",
     example:"A: Quanto e l'affitto?\nB: Ottocento euro al mese.",
     exampleSrc:"A: How much is the rent?\nB: Eight hundred euros per month.",
     funFact:"Italian rental contracts are typically 4+4 years (four years, renewable for four more). This system gives tenants strong protection. Finding an affordable apartment in Rome or Milan is notoriously difficult."},

    {type:"teach", trg:"comodo", src:"comfortable / convenient", pos:"adj", gender:"m",
     note:"Masculine: comodo. Feminine: comoda.\nFrom Latin 'commodus' (suitable, convenient).",
     example:"A: L'appartamento e comodo?\nB: Si, molto comodo! Vicino a tutto.",
     exampleSrc:"A: Is the apartment comfortable?\nB: Yes, very comfortable! Close to everything.",
     funFact:"'Comodo' means both physically comfortable and conveniently located. 'Il comodo' as a noun is a polite word for toilet. 'Fare comodo' means 'to come in handy.' A versatile word with varied uses."},

    {type:"teach", trg:"spazioso", src:"spacious", pos:"adj", gender:"m",
     note:"Masculine: spazioso. Feminine: spaziosa.\nFrom 'spazio' (space). Italian apartments can be small.",
     example:"A: La cucina e spaziosa?\nB: Si, e una cucina molto spaziosa.",
     exampleSrc:"A: Is the kitchen spacious?\nB: Yes, it is a very spacious kitchen.",
     funFact:"'Spazio' comes from Latin 'spatium' (space, distance). Italian real estate ads always mention size in square meters ('metri quadri'). A 60 m2 apartment is typical for a couple; 100+ m2 is considered large."},

    {type:"teach", trg:"nuovo", src:"new", pos:"adj", gender:"m",
     note:"Masculine: nuovo. Feminine: nuova.\nFrom Latin 'novus.' 'Di nuovo' = again.",
     example:"A: L'appartamento e nuovo?\nB: No, ma e ristrutturato.",
     exampleSrc:"A: Is the apartment new?\nB: No, but it is renovated.",
     funFact:"In Italian real estate, 'nuova costruzione' (new build) commands higher prices. But many Italians prefer 'ristrutturato' (renovated) old buildings for their character: high ceilings, thick walls, terracotta floors."},

    // Quiz steps
    {type:"mc", q:"What is the Italian ground floor called?",
     opts:["Piano terra","Primo piano","Secondo piano","Piano zero"],
     ans:"Piano terra",
     hint:"Italian numbering starts at ground level. The 'first floor' is actually one level up from this."},

    {type:"fb", s:"Abito al quarto {1}.",
     a:["piano"],
     opts:["piano","palazzo","corridoio","balcone"],
     hint:"This word means 'floor' or 'story' of a building. Also means 'plan' and a musical instrument.",
     sSrc:"I live on the fourth {1}."},

    {type:"mc", q:"What is a 'palazzo' in everyday Italian?",
     opts:["An apartment building","A royal palace","A museum","A church"],
     ans:"An apartment building",
     hint:"Despite its regal origin from Rome's Palatine Hill, this word now simply means any large b... in daily speech."},

    {type:"fb", s:"Lascia le scarpe nell'{1}.",
     a:["ingresso"],
     opts:["ingresso","corridoio","bagno","cucina"],
     hint:"The first area you enter when walking into a home. Where shoes and coats are left.",
     sSrc:"Leave your shoes in the {1}."},

    {type:"match", pairs:[
      {trg:"l'ingresso", src:"the entrance"},
      {trg:"il balcone", src:"the balcony"},
      {trg:"le scale", src:"the stairs"},
      {trg:"l'ascensore", src:"the elevator"},
      {trg:"l'appartamento", src:"the apartment"}
    ]},

    {type:"mc", q:"Why is 'La Scala' in Milan famous?",
     opts:["It is a world-famous opera house","It has the longest staircase","It is a shopping center","It is a train station"],
     ans:"It is a world-famous opera house",
     hint:"Named after the staircase of the church it replaced. 'Scala' means staircase. Now it hosts o... and ballet."},

    {type:"fb", s:"Quanto e l'{1}? Ottocento euro al mese.",
     a:["affitto"],
     opts:["affitto","ingresso","appartamento","ascensore"],
     hint:"The monthly payment for living in a home you do not own. From 'affittare' (to rent).",
     sSrc:"How much is the {1}? Eight hundred euros per month."},

    {type:"mc", q:"What percentage of Italians own their home?",
     opts:["About 70%","About 30%","About 50%","About 90%"],
     ans:"About 70%",
     hint:"One of the highest home ownership rates in Europe. Renting is common for young people in cities."}
  ,{type:"match",pairs:[{trg:"comodo",src:"comfortable / convenient"},{trg:"spazioso",src:"spacious"},{trg:"nuovo",src:"new"}]}]
};
export default BATCH2_U05_L1;
