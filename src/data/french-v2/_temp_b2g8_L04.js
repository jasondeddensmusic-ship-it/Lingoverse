const LESSON_4 = {
  id:"frv2_b2g8_l4", title:"Médias et technologie", icon:"\u{1F4F1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Médias et technologie",
     desc:"Vocabulary for navigating the digital world, media literacy, and technology discussions in French.",
     goals:["Learn 15 media and technology words","Discuss digital culture fluently","Understand internet-age French vocabulary"]},

    {type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and bloggers.",
     example:"A: La blogosphère française est très active.\nB: Oui, il y a des milliers de blogs.",
     exampleSrc:"A: The French blogosphere is very active.\nB: Yes, there are thousands of blogs.",
     funFact:"France has one of Europe's most active blog cultures, especially for food and fashion."},

    {type:"teach", trg:"le mixage", src:"the mixing (audio)", pos:"noun", gender:"m",
     note:"Masculine noun. The process of blending audio tracks.\nStudio and music vocabulary.",
     example:"A: Le mixage de cet album est parfait.\nB: L'ingénieur du son a fait un travail remarquable.",
     exampleSrc:"A: The mixing on this album is perfect.\nB: The sound engineer did remarkable work.",
     funFact:"France's Daft Punk were known for their innovative mixing techniques that changed electronic music."},

    {type:"teach", trg:"un best-seller", src:"a best-seller", pos:"noun", gender:"m",
     note:"Masculine noun. A hugely popular book.\nBorrowed from English but fully French now.",
     example:"A: Son dernier roman est un best-seller.\nB: Il s'est vendu à un million d'exemplaires.",
     exampleSrc:"A: Her latest novel is a best-seller.\nB: It sold a million copies.",
     funFact:"The Académie française recommends 'succès de librairie' but nobody uses it. Best-seller won."},

    {type:"teach", trg:"un bonus", src:"a bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra reward or advantage.\nFrom Latin 'bonus' meaning good.",
     example:"A: On a reçu un bonus de fin d'année.\nB: C'est toujours agréable.",
     exampleSrc:"A: We received a year-end bonus.\nB: That's always nice.",
     funFact:"In French insurance, 'bonus-malus' is the system where good drivers pay less. Unique to France."},

    {type:"mc",
     q:"Quel mot désigne l'ensemble des blogs sur internet ?",
     opts:["la blogosphère","le mixage","le bonus","la liqueur"],
     ans:"la blogosphère",
     hint:"Think of 'blog' plus a suffix meaning a sphere or world. The collective blogging community."},

    {type:"teach", trg:"la liqueur", src:"the liqueur", pos:"noun", gender:"f",
     note:"Feminine noun. A sweet, flavored alcoholic drink.\nNot the same as 'alcool'.",
     example:"A: Cette liqueur de cerise est délicieuse.\nB: C'est une recette de ma grand-mère.",
     exampleSrc:"A: This cherry liqueur is delicious.\nB: It's my grandmother's recipe.",
     funFact:"France produces world-famous liqueurs like Chartreuse, made by monks since 1737 with 130 herbs."},

    {type:"teach", trg:"le coffre-fort", src:"the safe, the strongbox", pos:"noun", gender:"m",
     note:"Masculine compound noun. A secure box for valuables.\nPlural: des coffres-forts.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Tu connais la combinaison ?",
     exampleSrc:"A: The jewels are in the safe.\nB: Do you know the combination?",
     funFact:"Literally 'strong chest'. French bank vaults are called 'chambres fortes', strong rooms."},

    {type:"teach", trg:"le grillage", src:"the wire fencing, the mesh", pos:"noun", gender:"m",
     note:"Masculine noun. Wire mesh or fencing.\nAlso the act of grilling food.",
     example:"A: Le grillage du jardin est abîmé.\nB: Il faut le remplacer avant l'hiver.",
     exampleSrc:"A: The garden fencing is damaged.\nB: We need to replace it before winter.",
     funFact:"Dual meaning: 'grillage' can be wire mesh OR the grilling of coffee beans. Context is everything."},

    {type:"fb",
     s:"Son dernier roman est un {1}, il s'est vendu à un million d'exemplaires.",
     a:["best-seller"],
     opts:["best-seller","bonus","mixage","coffre-fort"],
     hint:"A hugely popular book. Borrowed from English into everyday French.",
     sSrc:"Her latest novel is a {1}, it sold a million copies."},

    {type:"teach", trg:"le coupe-papier", src:"the letter opener, the paper knife", pos:"noun", gender:"m",
     note:"Masculine compound noun. A blade for opening envelopes.\nPlural: des coupe-papiers.",
     example:"A: Passe-moi le coupe-papier, s'il te plaît.\nB: Tiens, fais attention, il coupe bien.",
     exampleSrc:"A: Pass me the letter opener, please.\nB: Here, be careful, it's sharp.",
     funFact:"French compound nouns with 'coupe-' are numerous: coupe-vent, coupe-feu, coupe-circuit."},

    {type:"teach", trg:"le grille-pain", src:"the toaster", pos:"noun", gender:"m",
     note:"Masculine compound noun. A kitchen appliance for toasting bread.\nInvariable plural.",
     example:"A: Le grille-pain est en panne.\nB: On en achète un nouveau ?",
     exampleSrc:"A: The toaster is broken.\nB: Shall we buy a new one?",
     funFact:"Literally 'bread griller'. French compound nouns often describe function directly."},

    {type:"teach", trg:"le laissez-passer", src:"the pass, the permit", pos:"noun", gender:"m",
     note:"Masculine noun. An official document allowing passage.\nInvariable, from 'let pass'.",
     example:"A: Il te faut un laissez-passer pour entrer.\nB: Où est-ce que je peux l'obtenir ?",
     exampleSrc:"A: You need a pass to enter.\nB: Where can I get one?",
     funFact:"'Laissez-faire' and 'laissez-passer' are both French terms used worldwide in economics and diplomacy."},

    {type:"mc",
     q:"Quel appareil sert à griller du pain ?",
     opts:["un grillage","un grille-pain","un coupe-papier","un coffre-fort"],
     ans:"un grille-pain",
     hint:"A compound noun that literally describes what the appliance does to bread."},

    {type:"teach", trg:"le compte-gouttes", src:"the dropper, the pipette", pos:"noun", gender:"m",
     note:"Masculine compound noun. A device for dispensing liquid drop by drop.\nAlso used figuratively.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: Il faut être patient.",
     exampleSrc:"A: Information is coming in drop by drop.\nB: We need to be patient.",
     funFact:"'Au compte-gouttes' is a beloved French idiom meaning very slowly, in tiny amounts."},

    {type:"teach", trg:"la météorologie", src:"meteorology", pos:"noun", gender:"f",
     note:"Feminine noun. The science of weather.\nShortened to 'la météo' in daily speech.",
     example:"A: La météorologie prévoit de la pluie.\nB: On reporte la sortie alors.",
     exampleSrc:"A: The meteorology service forecasts rain.\nB: We'll postpone the outing then.",
     funFact:"Météo-France is one of the world's oldest weather services, founded in 1855."},

    {type:"teach", trg:"le garde-chasse", src:"the gamekeeper", pos:"noun", gender:"m",
     note:"Masculine compound noun. A person who protects wildlife on an estate.\nPlural: gardes-chasses.",
     example:"A: Le garde-chasse surveille la forêt.\nB: Il connaît chaque sentier par coeur.",
     exampleSrc:"A: The gamekeeper watches over the forest.\nB: He knows every path by heart.",
     funFact:"French gamekeepers are civil servants. Their role dates back to the royal hunting estates."},

    {type:"fb",
     s:"Les informations arrivent au {1}, il faut être patient.",
     a:["compte-gouttes"],
     opts:["compte-gouttes","grille-pain","coupe-papier","garde-chasse"],
     hint:"A figurative expression meaning drop by drop, very slowly.",
     sSrc:"Information is coming in via {1}, we need to be patient."},

    {type:"match", pairs:[
      {trg:"coffre-fort", src:"safe, strongbox"},
      {trg:"laissez-passer", src:"pass, permit"},
      {trg:"grille-pain", src:"toaster"},
      {trg:"météorologie", src:"meteorology"},
      {trg:"garde-chasse", src:"gamekeeper"}
    ]},

    {type:"mc",
     q:"Quel document officiel permet d'accéder à un lieu restreint ?",
     opts:["un best-seller","un bonus","un laissez-passer","un compte-gouttes"],
     ans:"un laissez-passer",
     hint:"Literally means 'let pass'. An official permit for entering restricted areas."},

    {type:"fb",
     s:"Le {1} du jardin est abîmé, il faut le remplacer.",
     a:["grillage"],
     opts:["grillage","mixage","grille-pain","coupe-papier"],
     hint:"Wire mesh or fencing around a property. Not to be confused with the toaster.",
     sSrc:"The garden {1} is damaged, we need to replace it."}
  ]
};
export default LESSON_4;
