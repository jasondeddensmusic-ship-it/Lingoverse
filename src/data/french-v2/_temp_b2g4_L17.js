const LESSON_17 = {
  id:"frv2_b2g4_l17", title:"Medias et opinions", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medias et opinions",
     desc:"Build vocabulary for discussing media, public opinion, and the world of ideas.",
     goals:["Learn 15 words about media and public discourse","Discuss news and opinions with nuance","Express agreement and disagreement formally"]},

    {type:"teach", trg:"un hoax", src:"a hoax, fake news", pos:"noun", gender:"m",
     note:"Masculine noun. A deliberate deception or false story.\nEnglish borrowing.",
     example:"A: Cette information est un hoax.\nB: Il faut toujours verifier ses sources.",
     exampleSrc:"A: This information is a hoax.\nB: You must always check your sources.",
     funFact:"The Academie francaise prefers 'canular' (prank) or 'infox' (fake news). 'Hoax' persists anyway."},

    {type:"teach", trg:"une auteure", src:"a female author", pos:"noun", gender:"f",
     note:"Feminine noun. A woman who writes books.\nFeminized form of 'auteur'.",
     example:"A: Cette auteure a remporte le prix Goncourt.\nB: Son roman est un chef-d'oeuvre.",
     exampleSrc:"A: This author won the Goncourt Prize.\nB: Her novel is a masterpiece.",
     funFact:"The feminization of 'auteur' sparked heated debate. Quebec uses 'auteure', France also accepts 'autrice'."},

    {type:"teach", trg:"la formulation", src:"the formulation, the wording", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in media context.\nThe way something is worded.",
     example:"A: La formulation de cette question est ambigue.\nB: Il faudrait la reformuler.",
     exampleSrc:"A: The wording of this question is ambiguous.\nB: It should be rephrased.",
     funFact:"In French journalism, 'la formulation' matters enormously. A poorly worded headline can trigger lawsuits."},

    {type:"teach", trg:"la galere", src:"trouble, hardship", pos:"noun", gender:"f",
     note:"Feminine noun. A miserable situation.\nOriginally: a galley ship.",
     example:"A: Trouver un appartement a Paris, c'est la galere.\nB: Les prix sont completement fous.",
     exampleSrc:"A: Finding an apartment in Paris is a nightmare.\nB: Prices are completely crazy.",
     funFact:"From the galley ships where convicts rowed. 'Galerer' means to struggle. Very common in spoken French."},

    {type:"teach", trg:"l'idéalisation", src:"idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced here in media context.\nSeeing something as perfect.",
     example:"A: L'idealisation du passe est dangereuse.\nB: Chaque epoque avait ses problemes.",
     exampleSrc:"A: Idealization of the past is dangerous.\nB: Every era had its problems.",
     funFact:"French media critics warn against 'idealisation' of historical periods. Nostalgia distorts truth."},

    {type:"mc",
     q:"Quel mot designe une fausse information diffusee volontairement ?",
     opts:["un hoax","une gazette","une galere","un gag"],
     ans:"un hoax",
     hint:"An English borrowing. The Academie francaise proposed 'infox' as a French alternative."},

    {type:"teach", trg:"le flirter", src:"to flirt", pos:"verb", gender:null,
     note:"Verb. To engage in playful romantic behavior.\nBorrowed from English, then sent back.",
     example:"A: Il flirte avec elle depuis des semaines.\nB: Il devrait l'inviter a diner.",
     exampleSrc:"A: He's been flirting with her for weeks.\nB: He should invite her to dinner.",
     funFact:"English borrowed 'flirt' from Old French 'fleureter' (to touch lightly, like a flower). French took it back."},

    {type:"teach", trg:"la desillusionnes", src:"the disillusioned", pos:"noun", gender:"m",
     note:"Plural noun. People who have lost their illusions.\nFrom des- + illusion.",
     example:"A: Les desillusionnes de la politique sont nombreux.\nB: Ils ne votent plus.",
     exampleSrc:"A: Those disillusioned with politics are numerous.\nB: They no longer vote.",
     funFact:"Political disillusionment is a major theme in French media. 'Desenchantement' is the broader cultural term."},

    {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in media context.\nPortraying someone as evil.",
     example:"A: La diabolisation de l'adversaire est une tactique politique.\nB: C'est une strategie dangereuse.",
     exampleSrc:"A: Demonization of the opponent is a political tactic.\nB: It's a dangerous strategy.",
     funFact:"'Diaboliser' is very common in French political commentary, especially around election season."},

    {type:"fb",
     s:"Trouver un logement a Paris, c'est la {1}.",
     a:["galere"],
     opts:["galere","gazette","griffe","gabelle"],
     hint:"Originally meant a ship rowed by convicts. Now means a miserable, difficult situation.",
     sSrc:"Finding housing in Paris is a real {1}."},

    {type:"teach", trg:"le boitier", src:"the casing, the box", pos:"noun", gender:"m",
     note:"Masculine noun. A protective case for electronics or a watch.\nFrom 'boite' (box).",
     example:"A: Le boitier de cet appareil photo est en aluminium.\nB: Il est leger et solide.",
     exampleSrc:"A: The casing of this camera is aluminum.\nB: It's light and sturdy.",
     funFact:"From 'boite' (box). A 'boitier de vote' is the electronic voting device used in the French parliament."},

    {type:"teach", trg:"un complet", src:"a suit (clothing)", pos:"noun", gender:"m",
     note:"Masculine noun. A matching set of jacket and trousers.\nAlso means 'complete'.",
     example:"A: Il porte un complet gris pour l'entretien.\nB: Il veut faire bonne impression.",
     exampleSrc:"A: He wears a grey suit for the interview.\nB: He wants to make a good impression.",
     funFact:"'Complet' for suit is somewhat dated. Modern French prefers 'costume'. But 'complet-veston' persists."},

    {type:"teach", trg:"la griffure", src:"a scratch mark", pos:"noun", gender:"f",
     note:"Feminine noun. A scratch left by claws or nails.\nFrom 'griffe' (claw).",
     example:"A: Le chat m'a fait une griffure au bras.\nB: Desinfecte-la tout de suite.",
     exampleSrc:"A: The cat gave me a scratch on the arm.\nB: Disinfect it right away.",
     funFact:"Related to 'griffe' (claw/brand). The literal and figurative meanings of 'griffe' branch apart here."},

    {type:"mc",
     q:"D'ou vient le mot francais 'flirter' ?",
     opts:["De l'espagnol","De l'anglais, qui l'avait emprunte au vieux francais","De l'allemand","De l'italien"],
     ans:"De l'anglais, qui l'avait emprunte au vieux francais",
     hint:"A circular borrowing. Old French 'fleureter' became English 'flirt', which French borrowed back."},

    {type:"teach", trg:"imbuvable", src:"unbearable, undrinkable", pos:"adj", gender:null,
     note:"Adjective. Literally undrinkable. Figuratively: insufferable.\nVery colloquial for people.",
     example:"A: Ce cafe est imbuvable, il est froid.\nB: Et le nouveau chef est imbuvable aussi.",
     exampleSrc:"A: This coffee is undrinkable, it's cold.\nB: And the new boss is unbearable too.",
     funFact:"'Imbuvable' for a person is very colloquial and quite harsh. It implies someone impossible to tolerate."},

    {type:"fb",
     s:"Le {1} de cet appareil photo est en titane.",
     a:["boitier"],
     opts:["boitier","complet","boulet","bonus"],
     hint:"A protective case for electronics, from the word 'boite' meaning box.",
     sSrc:"The {1} of this camera is made of titanium."},

    {type:"match", pairs:[
      {trg:"hoax", src:"fake news"},
      {trg:"auteure", src:"female author"},
      {trg:"galere", src:"hardship, nightmare"},
      {trg:"griffure", src:"scratch mark"},
      {trg:"imbuvable", src:"unbearable"}
    ]},

    {type:"mc",
     q:"Comment decrit-on familierement une personne insupportable ?",
     opts:["genereux","flatteur","imbuvable","gracieux"],
     ans:"imbuvable",
     hint:"Literally means undrinkable. Used colloquially for a person who is impossible to tolerate."}
  ]
};
export default LESSON_17;
