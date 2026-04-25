const LESSON_20 = {
  id:"frv2_b2g4_l20", title:"Expressions et nuances", icon:"\u{1F3AF}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et nuances",
     desc:"Master subtle vocabulary, rare adjectives, and expressive words that add depth to your French.",
     goals:["Learn 15 nuanced and expressive words","Use rare adjectives and adverbs with precision","Express subtle distinctions in French"]},

    {type:"teach", trg:"un eldorado", src:"an El Dorado, a promised land", pos:"noun", gender:"m",
     note:"Masculine noun. A place of fabulous wealth or opportunity.\nFrom the Spanish legend.",
     example:"A: La Californie etait l'eldorado des chercheurs d'or.\nB: Beaucoup ont tout quitte pour y aller.",
     exampleSrc:"A: California was the El Dorado for gold seekers.\nB: Many left everything to go there.",
     funFact:"French uses 'eldorado' metaphorically for any dream destination. From the myth of the golden city."},

    {type:"teach", trg:"frappe", src:"chilled, struck", pos:"adj", gender:null,
     note:"Adjective. Cooled or iced (drinks). Also: struck by something.\n'Bien frappe' = well chilled.",
     example:"A: Un champagne bien frappe, s'il vous plait.\nB: Tout de suite, monsieur.",
     exampleSrc:"A: A well-chilled champagne, please.\nB: Right away, sir.",
     funFact:"'Frappe de stupeur' means struck with amazement. 'Cafe frappe' is iced coffee. Context decides meaning."},

    {type:"teach", trg:"le gant", src:"the glove", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier. Reinforced in idiomatic context.\nUsed in many expressions.",
     example:"A: Il faut prendre des gants avec lui.\nB: C'est une personne tres susceptible.",
     exampleSrc:"A: You have to handle him with kid gloves.\nB: He's a very touchy person.",
     funFact:"'Jeter le gant' (throw down the gauntlet) and 'relever le gant' (pick it up) come from medieval duels."},

    {type:"teach", trg:"un gueridon", src:"a pedestal table", pos:"noun", gender:"m",
     note:"Masculine noun. A small round table, often on one leg.\nClassic French furniture.",
     example:"A: Pose le vase sur le gueridon.\nB: Il est parfait pour l'entree.",
     exampleSrc:"A: Put the vase on the pedestal table.\nB: It's perfect for the entryway.",
     funFact:"Named after a Moorish servant character in a 17th century play who held a candle tray on stage."},

    {type:"teach", trg:"la flute", src:"the flute", pos:"noun", gender:"f",
     note:"Feminine noun. A musical instrument. Also: a thin baguette or champagne glass.",
     example:"A: Elle joue de la flute traversiere depuis dix ans.\nB: Son prochain concert est samedi.",
     exampleSrc:"A: She has played the transverse flute for ten years.\nB: Her next concert is Saturday.",
     funFact:"'Une flute de champagne' is the tall narrow glass. 'Une flute' at the bakery is a thin baguette."},

    {type:"mc",
     q:"Que signifie 'prendre des gants' avec quelqu'un ?",
     opts:["Le traiter avec precaution","Lui donner des gants","Le frapper","L'ignorer"],
     ans:"Le traiter avec precaution",
     hint:"An idiomatic expression about handling someone carefully. Think of delicate kid gloves."},

    {type:"teach", trg:"le flou", src:"the blur, the vagueness", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of clarity or sharpness.\nAlso adjective: blurry, vague.",
     example:"A: Le flou artistique donne un effet poetique.\nB: En politique, le flou est une strategie.",
     exampleSrc:"A: Artistic blur gives a poetic effect.\nB: In politics, vagueness is a strategy.",
     funFact:"'Le flou' in French politics is almost an art form. Politicians deliberately keep positions vague."},

    {type:"teach", trg:"fonde", src:"well-founded, justified", pos:"adj", gender:null,
     note:"Adjective. Taught earlier. Reinforced in expressive context.\nBased on solid reasoning.",
     example:"A: Tes craintes sont parfaitement fondees.\nB: Nous devons prendre des precautions.",
     exampleSrc:"A: Your fears are perfectly well-founded.\nB: We must take precautions.",
     funFact:"'Mal fonde' means unjustified. In law, 'non fonde' means a claim has no legal basis."},

    {type:"teach", trg:"la force", src:"strength, force", pos:"noun", gender:"f",
     note:"Feminine noun. Physical or moral strength.\nAlso: the police (les forces de l'ordre).",
     example:"A: La force de caractere est une qualite admirable.\nB: Elle n'abandonne jamais.",
     exampleSrc:"A: Strength of character is an admirable quality.\nB: She never gives up.",
     funFact:"'La Force' is also a famous prison in Paris. And 'force est de constater' means one must acknowledge."},

    {type:"fb",
     s:"Le {1} artistique donne un effet poetique a la photo.",
     a:["flou"],
     opts:["flou","flot","fleuron","flamand"],
     hint:"The lack of sharpness in an image. In politics, it means deliberate vagueness.",
     sSrc:"Artistic {1} gives a poetic effect to the photo."},

    {type:"teach", trg:"le grille-pain", src:"the toaster", pos:"noun", gender:"m",
     note:"Masculine noun. A device for toasting bread.\nCompound: grille (grills) + pain (bread).",
     example:"A: Le grille-pain est en panne.\nB: Il faudra faire les tartines au four.",
     exampleSrc:"A: The toaster is broken.\nB: We'll have to make toast in the oven.",
     funFact:"A perfect example of French compound nouns: verb + noun. Like 'ouvre-boite' (can opener) and 'tire-bouchon' (corkscrew)."},

    {type:"teach", trg:"un coupe-papier", src:"a letter opener", pos:"noun", gender:"m",
     note:"Masculine noun. A blade for opening envelopes.\nCompound: coupe (cuts) + papier (paper).",
     example:"A: Le coupe-papier en ivoire est un objet de collection.\nB: On n'en utilise presque plus.",
     exampleSrc:"A: The ivory letter opener is a collector's item.\nB: They're hardly used anymore.",
     funFact:"Like 'grille-pain', this is a verb+noun compound. French creates tools this way: what it does + what it acts on."},

    {type:"teach", trg:"un compte-goutte", src:"a dropper, drop by drop", pos:"noun", gender:"m",
     note:"Masculine noun. A medical dropper. Also figurative: in tiny amounts.\n'Au compte-goutte'.",
     example:"A: Les informations arrivent au compte-goutte.\nB: On ne sait presque rien.",
     exampleSrc:"A: Information is coming in drop by drop.\nB: We know almost nothing.",
     funFact:"'Au compte-goutte' is a common expression meaning gradually, in dribs and drabs. Very useful idiom."},

    {type:"mc",
     q:"Quel objet sert a ouvrir des enveloppes ?",
     opts:["un coffre-fort","un coupe-papier","un grille-pain","un compte-goutte"],
     ans:"un coupe-papier",
     hint:"A compound noun built from a cutting action plus a material. Used at elegant desks to slit open envelopes."},

    {type:"teach", trg:"un ex", src:"an ex-partner", pos:"noun", gender:"m",
     note:"Masculine or feminine noun. A former romantic partner.\nVery informal but universal.",
     example:"A: Mon ex m'a envoye un message.\nB: Qu'est-ce qu'il voulait ?",
     exampleSrc:"A: My ex sent me a message.\nB: What did he want?",
     funFact:"'Ex' is universal in French. 'Mon ex' is gender-neutral in conversation. The full form is 'ex-conjoint'."},

    {type:"teach", trg:"impatient", src:"impatient, eager", pos:"noun", gender:"m",
     note:"Masculine noun or adjective. Taught earlier. Reinforced here.\nSomeone who cannot wait.",
     example:"A: Les impatients font souvent des erreurs.\nB: La patience est une vertu.",
     exampleSrc:"A: Impatient people often make mistakes.\nB: Patience is a virtue.",
     funFact:"From Latin 'im-' (not) + 'patiens' (suffering). The impatient person cannot suffer waiting."},

    {type:"fb",
     s:"Les nouvelles arrivent au {1}, une par une.",
     a:["compte-goutte"],
     opts:["compte-goutte","coupe-papier","grille-pain","coffre-fort"],
     hint:"A dropper that releases liquid one drop at a time. Figuratively: in tiny, slow amounts.",
     sSrc:"News is coming in {1}, one by one."},

    {type:"match", pairs:[
      {trg:"eldorado", src:"promised land"},
      {trg:"gueridon", src:"pedestal table"},
      {trg:"flou", src:"blur, vagueness"},
      {trg:"grille-pain", src:"toaster"},
      {trg:"compte-goutte", src:"dropper, drop by drop"}
    ]},

    {type:"mc",
     q:"D'ou vient le nom du meuble 'gueridon' ?",
     opts:["D'une ville italienne","D'un mot arabe","D'un personnage de theatre du XVIIe siecle","D'un roi de France"],
     ans:"D'un personnage de theatre du XVIIe siecle",
     hint:"Named after a character in a play who held a candle tray. The table replaced the servant."}
  ]
};
export default LESSON_20;
