const LESSON_10 = {
  id:"frv2_b2g2_l10", title:"Science et technologie", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Science et technologie",
     desc:"Master vocabulary for discussing scientific research, technology, and innovation. From adduction to denaturation, from decimals to discoveries.",
     goals:["Learn 20 science and technology terms","Discuss research topics in French","Understand technical and scientific vocabulary"]},

    {type:"teach", trg:"l'adduction", src:"the supply (of water), the adduction", pos:"noun", gender:"f",
     note:"Feminine noun. The process of bringing water or resources to a location.",
     example:"A: L'adduction d'eau potable est essentielle.\nB: Beaucoup de villages en manquent encore.",
     exampleSrc:"A: The supply of drinking water is essential.\nB: Many villages still lack it.",
     funFact:"In anatomy, 'adduction' means moving a limb toward the body. In engineering, it means piping water."},

    {type:"teach", trg:"le decimetre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. A unit of length equal to 10 centimeters.",
     example:"A: Un decimetre, c'est dix centimetres.\nB: Oui, et dix decimetres font un metre.",
     exampleSrc:"A: A decimeter is ten centimeters.\nB: Yes, and ten decimeters make a meter.",
     funFact:"France invented the metric system during the Revolution. The decimetre is rarely used in daily life."},

    {type:"teach", trg:"denoter", src:"to denote, to indicate", pos:"verb", gender:null,
     note:"Verb. To indicate or be a sign of something.",
     example:"A: Ce comportement denote un manque de confiance.\nB: Il faudrait en parler avec lui.",
     exampleSrc:"A: This behavior denotes a lack of confidence.\nB: We should talk to him about it.",
     funFact:"From Latin 'denotare'. In semiotics, 'denotation' is the literal meaning vs 'connotation' (implied meaning)."},

    {type:"teach", trg:"la deconnexion", src:"the disconnection", pos:"noun", gender:"f",
     note:"Feminine noun. The act of disconnecting from technology or from reality.",
     example:"A: La deconnexion numerique est devenue un luxe.\nB: Les gens sont accros a leurs ecrans.",
     exampleSrc:"A: Digital disconnection has become a luxury.\nB: People are addicted to their screens.",
     funFact:"France pioneered the 'droit a la deconnexion' (right to disconnect) law in 2017. No work emails after hours."},

    {type:"teach", trg:"deconnecter", src:"to disconnect", pos:"verb", gender:null,
     note:"Verb. To unplug or stop being connected. Reflexive: se deconnecter.",
     example:"A: Il faut savoir se deconnecter le soir.\nB: C'est essentiel pour la sante mentale.",
     exampleSrc:"A: You need to know how to disconnect in the evening.\nB: It's essential for mental health.",
     funFact:"'Deconnecte' also means out of touch with reality. 'Il est completement deconnecte' is a common critique."},

    {type:"mc",
     q:"Quel droit innovant la France a-t-elle etabli en 2017 concernant le travail ?",
     opts:["le droit a la deconnexion","le droit au bonus","le droit au silence","le droit a la greve"],
     ans:"le droit a la deconnexion",
     hint:"The legal right for employees to not check emails or messages outside work hours."},

    {type:"teach", trg:"decortiquer", src:"to dissect, to analyze thoroughly", pos:"verb", gender:null,
     note:"Verb. To analyze in detail. Originally: to remove bark or shell.",
     example:"A: L'expert a decortique le rapport page par page.\nB: Il a trouve plusieurs erreurs.",
     exampleSrc:"A: The expert dissected the report page by page.\nB: He found several errors.",
     funFact:"Literally means to remove the 'cortex' (bark/shell). Now used figuratively for thorough analysis."},

    {type:"teach", trg:"denaturer", src:"to denature, to distort", pos:"verb", gender:null,
     note:"Verb. To alter something's natural state or to misrepresent facts.",
     example:"A: Ne denaturez pas mes propos !\nB: Je cite exactement ce que vous avez dit.",
     exampleSrc:"A: Don't distort my words!\nB: I'm quoting exactly what you said.",
     funFact:"In chemistry, 'denaturer' means to change a protein's structure. In law, it means to misrepresent."},

    {type:"teach", trg:"demonter", src:"to disassemble, to take apart", pos:"verb", gender:null,
     note:"Verb. To take something apart. Also: to disconcert someone.",
     example:"A: J'ai demonte le meuble pour le demenagement.\nB: Tu pourras le remonter facilement ?",
     exampleSrc:"A: I took the furniture apart for the move.\nB: Will you be able to reassemble it easily?",
     funFact:"'Ca ne me demonte pas' means 'that doesn't faze me'. The figurative use is very common."},

    {type:"teach", trg:"un derive", src:"a derivative, a by-product", pos:"noun", gender:"m",
     note:"Masculine noun. Something that originates from another source.",
     example:"A: Ce medicament est un derive de plantes tropicales.\nB: La nature offre des solutions incroyables.",
     exampleSrc:"A: This medicine is a derivative of tropical plants.\nB: Nature offers incredible solutions.",
     funFact:"In mathematics, 'la derivee' is the derivative function. In everyday French, 'derives' means excesses."},

    {type:"fb",
     s:"L'expert a {1} le dossier pour trouver la faille.",
     a:["decortique"],
     opts:["decortique","demonte","denature","deconnecte"],
     hint:"To analyze something in minute detail. Originally meant to remove bark or shell.",
     sSrc:"The expert {1} the file to find the flaw."},

    {type:"teach", trg:"decomposer", src:"to decompose, to break down", pos:"verb", gender:null,
     note:"Verb. To separate into components or to rot.",
     example:"A: On peut decomposer ce probleme en trois parties.\nB: C'est la meilleure approche.",
     exampleSrc:"A: We can break this problem down into three parts.\nB: It's the best approach.",
     funFact:"Descartes' analytical method decomposes complex problems into simple parts. A French intellectual tradition."},

    {type:"teach", trg:"l'encombre", src:"the obstacle, the hindrance", pos:"noun", gender:"f",
     note:"Feminine noun. An obstacle or difficulty. Often used in 'sans encombre'.",
     example:"A: Le voyage s'est passe sans encombre.\nB: Aucun retard, aucun probleme.",
     exampleSrc:"A: The journey went without a hitch.\nB: No delays, no problems.",
     funFact:"'Sans encombre' is a very common expression meaning 'without difficulty'. Elegant in formal writing."},

    {type:"teach", trg:"l'empatement", src:"the serif (typography), the wheelbase", pos:"noun", gender:"m",
     note:"Masculine noun. In typography: the small lines at letter ends. In cars: the wheelbase.",
     example:"A: Les polices avec empatement sont plus lisibles sur papier.\nB: C'est pour cela que les livres les utilisent.",
     exampleSrc:"A: Serif fonts are more readable on paper.\nB: That's why books use them.",
     funFact:"'Police a empatement' = serif font, 'police sans empatement' = sans-serif. From 'pate' (foot/base)."},

    {type:"mc",
     q:"Que signifie 'sans encombre' ?",
     opts:["sans raison","sans difficulte","sans argent","sans aide"],
     ans:"sans difficulte",
     hint:"A common expression meaning everything went smoothly, with no obstacles."},

    {type:"teach", trg:"le biscuit", src:"the cookie, the biscuit", pos:"noun", gender:"m",
     note:"Masculine noun. A baked good. Also unfired ceramic in pottery.",
     example:"A: Ces biscuits sont faits maison.\nB: La recette est celle de ma grand-mere.",
     exampleSrc:"A: These cookies are homemade.\nB: The recipe is my grandmother's.",
     funFact:"From 'bis' (twice) + 'cuit' (cooked). Biscuits were twice-baked for long voyages. LU biscuits are iconic French."},

    {type:"teach", trg:"le cognac", src:"the cognac (brandy)", pos:"noun", gender:"m",
     note:"Masculine noun. A premium brandy from the Cognac region of France.",
     example:"A: Un bon cognac se deguste lentement.\nB: La chaleur de la main rechauffe le verre.",
     exampleSrc:"A: A good cognac is savored slowly.\nB: The warmth of the hand heats the glass.",
     funFact:"Only brandy from the Cognac region can be called 'cognac'. The name is legally protected worldwide."},

    {type:"teach", trg:"le binocle", src:"the pince-nez, the old-fashioned glasses", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned eyeglasses that clip on the nose.",
     example:"A: Mon arriere-grand-pere portait un binocle.\nB: Ca lui donnait un air distingue.",
     exampleSrc:"A: My great-grandfather wore a pince-nez.\nB: It gave him a distinguished look.",
     funFact:"From Latin 'bini oculi' (two eyes). 'Binoculaire' and 'binocle' share the same root."},

    {type:"teach", trg:"la bosse", src:"the bump, the hump, the talent", pos:"noun", gender:"f",
     note:"Feminine noun. A swelling or bump. Figuratively: a natural talent.",
     example:"A: Il a la bosse des maths.\nB: C'est vrai, les chiffres sont faciles pour lui.",
     exampleSrc:"A: He has a knack for math.\nB: True, numbers come easy to him.",
     funFact:"'Avoir la bosse de' means to have a natural gift for. From phrenology, which mapped skull bumps to talents."},

    {type:"fb",
     s:"Le voyage s'est deroule sans {1}, nous sommes arrives a l'heure.",
     a:["encombre"],
     opts:["encombre","empatement","derive","adduction"],
     hint:"Without any obstacle or difficulty. A common formal expression.",
     sSrc:"The trip went without {1}, we arrived on time."},

    {type:"match", pairs:[
      {trg:"decimetre", src:"decimeter"},
      {trg:"deconnexion", src:"disconnection"},
      {trg:"cognac", src:"cognac"},
      {trg:"bosse", src:"bump, talent"},
      {trg:"biscuit", src:"cookie"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'separer en elements plus simples' ?",
     opts:["denaturer","deconnecter","decomposer","demonter"],
     ans:"decomposer",
     hint:"To break down into component parts. Think of 'com-' (together) being reversed by 'de-'."},

    {type:"fb",
     s:"Ne {1} pas mes paroles, j'ai dit exactement le contraire.",
     a:["denaturez"],
     opts:["denaturez","demontez","decortiquiez","decomposez"],
     hint:"To distort or misrepresent what someone said. Think of changing the 'nature' of words.",
     sSrc:"Don't {1} my words, I said exactly the opposite."}
  ]
};
export default LESSON_10;
