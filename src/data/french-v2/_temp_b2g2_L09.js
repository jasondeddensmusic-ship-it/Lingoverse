const LESSON_9 = {
  id:"frv2_b2g2_l9", title:"Economie et finances", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economie et finances",
     desc:"Build essential vocabulary for discussing economics, business, and financial matters. From bonuses to bankruptcy, from consumers to commerce.",
     goals:["Learn 20 economic and financial terms","Discuss business topics in French","Understand financial news vocabulary"]},

    {type:"teach", trg:"un bonus", src:"a bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An additional payment or reward beyond the regular amount.",
     example:"A: Les employes ont recu un bonus de fin d'annee.\nB: C'est une belle reconnaissance du travail accompli.",
     exampleSrc:"A: Employees received a year-end bonus.\nB: It's a nice recognition of work done.",
     funFact:"English borrowing widely used in French. The Academie recommends 'prime' or 'gratification' instead."},

    {type:"teach", trg:"un consommateur", src:"a consumer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who buys goods or services. Feminine: une consommatrice.",
     example:"A: Les consommateurs exigent plus de transparence.\nB: Les entreprises doivent s'adapter.",
     exampleSrc:"A: Consumers demand more transparency.\nB: Companies must adapt.",
     funFact:"France has a powerful consumer protection agency (DGCCRF). French consumer rights are among Europe's strongest."},

    {type:"teach", trg:"le business", src:"the business", pos:"noun", gender:"m",
     note:"Masculine noun. Business or commerce. An English borrowing.",
     example:"A: Le business en ligne explose depuis la pandemie.\nB: Les ventes en ligne ont double.",
     exampleSrc:"A: Online business has exploded since the pandemic.\nB: Online sales have doubled.",
     funFact:"Despite the Academie's preference for 'affaires', 'business' is everywhere in French. Even in 'classe affaires'."},

    {type:"teach", trg:"la classe affaires", src:"the business class", pos:"noun", gender:"f",
     note:"Feminine noun. Premium seating on flights or trains.",
     example:"A: Elle voyage toujours en classe affaires.\nB: Le confort est incomparable.",
     exampleSrc:"A: She always travels business class.\nB: The comfort is incomparable.",
     funFact:"Air France's 'classe affaires' was redesigned as a luxury brand. French airlines pioneered flat beds."},

    {type:"teach", trg:"un depensier", src:"a big spender", pos:"noun", gender:"m",
     note:"Masculine noun. A person who spends freely. Feminine: une depensiere. Also adjective.",
     example:"A: Mon frere est un vrai depensier.\nB: Il ne peut pas passer devant un magasin sans acheter.",
     exampleSrc:"A: My brother is a real big spender.\nB: He can't walk past a shop without buying.",
     funFact:"The opposite is 'econome' (thrifty). French culture values being 'raisonnable' with money."},

    {type:"mc",
     q:"Quel mot designe une personne qui achete des biens et services ?",
     opts:["un consommateur","un depensier","un commercial","un bonus"],
     ans:"un consommateur",
     hint:"The person who buys and uses goods. Think of 'consommer' (to consume)."},

    {type:"teach", trg:"la bagatelle", src:"the trifle, the trivial amount", pos:"noun", gender:"f",
     note:"Feminine noun. A small or insignificant thing, especially a small sum.",
     example:"A: Ca a coute la bagatelle de dix mille euros.\nB: Ce n'est pas rien !",
     exampleSrc:"A: It cost a mere trifle of ten thousand euros.\nB: That's not nothing!",
     funFact:"Used ironically for large sums: 'la bagatelle de 10,000 euros' means it is actually a lot."},

    {type:"teach", trg:"le coffre-fort", src:"the safe, the strongbox", pos:"noun", gender:"m",
     note:"Masculine noun. A secure box for storing valuables.",
     example:"A: Les bijoux sont dans le coffre-fort de la banque.\nB: C'est l'endroit le plus sur.",
     exampleSrc:"A: The jewels are in the bank's safe.\nB: It's the safest place.",
     funFact:"Compound noun: 'coffre' (chest) + 'fort' (strong). French banks pioneered secure vault technology."},

    {type:"teach", trg:"la commode", src:"the chest of drawers", pos:"noun", gender:"f",
     note:"Feminine noun. A piece of furniture with drawers. Also means 'convenient' as adjective.",
     example:"A: Cette commode Louis XVI est une antiquite precieuse.\nB: Elle vaut une petite fortune.",
     exampleSrc:"A: This Louis XVI chest of drawers is a precious antique.\nB: It's worth a small fortune.",
     funFact:"French antique commodes fetch huge prices at auction. The word literally means 'convenient furniture'."},

    {type:"teach", trg:"le complet", src:"the (business) suit", pos:"noun", gender:"m",
     note:"Masculine noun. A full suit (jacket, trousers, sometimes vest).",
     example:"A: Il porte un complet gris pour l'entretien.\nB: Il fait tres professionnel.",
     exampleSrc:"A: He's wearing a grey suit for the interview.\nB: He looks very professional.",
     funFact:"'Complet-veston' is the full term. 'Costume' is more common now, but 'complet' persists in formal usage."},

    {type:"fb",
     s:"Les bijoux de famille sont conserves dans le {1} de la banque.",
     a:["coffre-fort"],
     opts:["coffre-fort","complet","commode","bonus"],
     hint:"A secure box at the bank for storing valuables. Think 'strong chest'.",
     sSrc:"The family jewels are kept in the bank's {1}."},

    {type:"teach", trg:"le compte-gouttes", src:"the dropper, drop by drop", pos:"noun", gender:"m",
     note:"Masculine noun. A dropper or, figuratively, something given very sparingly.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: On ne sait toujours pas ce qui s'est passe.",
     exampleSrc:"A: Information is coming in drop by drop.\nB: We still don't know what happened.",
     funFact:"'Au compte-gouttes' is a common expression meaning 'very sparingly'. Used about money, news, or resources."},

    {type:"teach", trg:"un coupe-papier", src:"a letter opener", pos:"noun", gender:"m",
     note:"Masculine noun. A blade used to open envelopes or cut paper.",
     example:"A: Ce coupe-papier en ivoire est une piece de collection.\nB: Il appartenait a mon grand-pere.",
     exampleSrc:"A: This ivory letter opener is a collector's piece.\nB: It belonged to my grandfather.",
     funFact:"Compound noun: 'coupe' (cuts) + 'papier' (paper). Classic French desk accessory before emails."},

    {type:"teach", trg:"l'attirail", src:"the gear, the paraphernalia", pos:"noun", gender:"m",
     note:"Masculine noun. A collection of tools or equipment for a specific activity.",
     example:"A: Il a emporte tout son attirail de peche.\nB: Cannes, moulinets, appats... rien ne manque.",
     exampleSrc:"A: He brought all his fishing gear.\nB: Rods, reels, bait... nothing is missing.",
     funFact:"From old French 'attirail' (equipment). Often used with slight humor for excessive equipment."},

    {type:"mc",
     q:"Que signifie 'au compte-gouttes' ?",
     opts:["en tres petites quantites","en grandes quantites","rapidement","gratuitement"],
     ans:"en tres petites quantites",
     hint:"Like drops from a dropper. Very slowly and sparingly."},

    {type:"teach", trg:"la benne", src:"the dumpster, the skip", pos:"noun", gender:"f",
     note:"Feminine noun. A large container for waste or construction materials.",
     example:"A: La benne sera livree demain pour les travaux.\nB: On pourra enfin debarrasser les gravats.",
     exampleSrc:"A: The skip will be delivered tomorrow for the work.\nB: We can finally clear the rubble.",
     funFact:"A 'benne a ordures' is a garbage truck. From Germanic 'benna' (wicker basket)."},

    {type:"teach", trg:"le debarras", src:"the storage room, the junk room", pos:"noun", gender:"m",
     note:"Masculine noun. A room for storing unwanted items. Also used in 'bon debarras!'.",
     example:"A: J'ai mis les vieilles affaires au debarras.\nB: Il faudra faire du tri un jour.",
     exampleSrc:"A: I put the old stuff in the storage room.\nB: We'll need to sort through it someday.",
     funFact:"'Bon debarras !' means 'good riddance!' From 'debarrasser' (to clear away)."},

    {type:"teach", trg:"le dedommagement", src:"the compensation, the damages", pos:"noun", gender:"m",
     note:"Masculine noun. Payment given to make up for loss or damage.",
     example:"A: L'entreprise a verse un dedommagement aux victimes.\nB: C'est un premier pas vers la justice.",
     exampleSrc:"A: The company paid compensation to the victims.\nB: It's a first step toward justice.",
     funFact:"From 'de-' (reverse) + 'dommage' (damage). French consumer law makes dedommagements common."},

    {type:"teach", trg:"le depotoir", src:"the dump, the dumping ground", pos:"noun", gender:"m",
     note:"Masculine noun. A place where waste is dumped. Also used figuratively.",
     example:"A: Cette friche est devenue un depotoir sauvage.\nB: Il faut nettoyer et securiser le terrain.",
     exampleSrc:"A: This wasteland has become an illegal dump.\nB: We need to clean up and secure the site.",
     funFact:"From 'depot' (deposit). 'Depotoir' carries strong negative connotations. Used figuratively for messy places."},

    {type:"fb",
     s:"L'entreprise a verse un {1} de cinquante mille euros aux victimes.",
     a:["dedommagement"],
     opts:["dedommagement","depotoir","debarras","depensier"],
     hint:"Financial compensation for loss or damage. Think of reversing 'dommage' (damage).",
     sSrc:"The company paid {1} of fifty thousand euros to the victims."},

    {type:"match", pairs:[
      {trg:"bagatelle", src:"trifle"},
      {trg:"classe affaires", src:"business class"},
      {trg:"attirail", src:"gear"},
      {trg:"benne", src:"dumpster"},
      {trg:"depotoir", src:"dump"}
    ]},

    {type:"mc",
     q:"Quel mot designe un meuble a tiroirs souvent de style ancien ?",
     opts:["une commode","un coffre-fort","un coupe-papier","un debarras"],
     ans:"une commode",
     hint:"A piece of furniture with drawers. The word also means 'convenient'."},

    {type:"fb",
     s:"Il a emporte tout son {1} de camping pour le week-end.",
     a:["attirail"],
     opts:["attirail","complet","bonus","debarras"],
     hint:"All the gear and equipment for a specific activity. Often said with slight humor.",
     sSrc:"He brought all his camping {1} for the weekend."}
  ]
};
export default LESSON_9;
