const LESSON_12 = {
  id:"frv2_b2g2_l12", title:"Vie urbaine et logement", icon:"\u{1F3D9}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vie urbaine et logement",
     desc:"Master vocabulary for urban life, housing, and city planning. From neighborhoods to construction, from elevators to architecture.",
     goals:["Learn 20 urban life and housing terms","Discuss city planning in French","Describe buildings and neighborhoods"]},

    {type:"teach", trg:"le bercail", src:"the fold, the family home", pos:"noun", gender:"m",
     note:"Masculine noun. The family home or safe place. Warm, affectionate tone.",
     example:"A: Il est temps de rentrer au bercail.\nB: Oui, la famille nous attend.",
     exampleSrc:"A: It's time to head home.\nB: Yes, the family is waiting for us.",
     funFact:"Originally a shepherd's term for the fold. 'Regagner le bercail' means to return home, with warmth."},

    {type:"teach", trg:"barbele", src:"barbed (wire)", pos:"adj", gender:null,
     note:"Adjective. Having sharp points. Usually in 'fil barbele' (barbed wire).",
     example:"A: Le terrain est entoure de fil barbele.\nB: C'est interdit d'entrer.",
     exampleSrc:"A: The land is surrounded by barbed wire.\nB: Entry is forbidden.",
     funFact:"Barbed wire was invented in the US in 1867. In French WWI memory, 'barbeles' symbolize trench warfare."},

    {type:"teach", trg:"un accrochage", src:"a collision, a clash", pos:"noun", gender:"m",
     note:"Masculine noun. A minor collision or verbal dispute.",
     example:"A: Il y a eu un accrochage entre deux voitures.\nB: Heureusement, personne n'est blesse.",
     exampleSrc:"A: There was a fender bender between two cars.\nB: Fortunately, nobody was hurt.",
     funFact:"From 'accrocher' (to hook onto). Also means hanging art: 'l'accrochage d'une exposition'."},

    {type:"teach", trg:"le chausson", src:"the slipper, the pastry", pos:"noun", gender:"m",
     note:"Masculine noun. A soft indoor shoe or a filled pastry turnover.",
     example:"A: Mets tes chaussons, le carrelage est froid.\nB: Merci, j'avais les pieds geles.",
     exampleSrc:"A: Put your slippers on, the tiles are cold.\nB: Thanks, my feet were freezing.",
     funFact:"'Chausson aux pommes' is a beloved French apple turnover. From 'chausser' (to put on shoes)."},

    {type:"teach", trg:"le boulet", src:"the cannonball, the burden", pos:"noun", gender:"m",
     note:"Masculine noun. A cannonball or, figuratively, someone who drags you down.",
     example:"A: Ce projet est un vrai boulet.\nB: On n'avance pas du tout.",
     exampleSrc:"A: This project is a real ball and chain.\nB: We're not making any progress.",
     funFact:"Prisoners used to be chained to a 'boulet'. 'Trainer un boulet' means to carry a heavy burden."},

    {type:"mc",
     q:"Que signifie 'rentrer au bercail' ?",
     opts:["rentrer chez soi","aller au travail","partir en vacances","faire les courses"],
     ans:"rentrer chez soi",
     hint:"A warm expression for returning to one's home or family. Originally a shepherd's term."},

    {type:"teach", trg:"le coulissage", src:"the sliding, the sliding mechanism", pos:"noun", gender:"m",
     note:"Masculine noun. The act or mechanism of sliding.",
     example:"A: Le coulissage de cette porte est tres fluide.\nB: Le mecanisme a ete bien huile.",
     exampleSrc:"A: The sliding of this door is very smooth.\nB: The mechanism was well oiled.",
     funFact:"From 'coulisse' (groove, track). 'En coulisses' means backstage, behind the scenes."},

    {type:"teach", trg:"crible", src:"riddled (with)", pos:"adj", gender:null,
     note:"Adjective. Full of holes or covered with something. Feminine: criblee.",
     example:"A: Le mur est crible d'impacts de balles.\nB: Cet immeuble a survecu a la guerre.",
     exampleSrc:"A: The wall is riddled with bullet holes.\nB: This building survived the war.",
     funFact:"From 'crible' (sieve). 'Crible de dettes' means drowning in debt. A vivid, common expression."},

    {type:"teach", trg:"le desamiantage", src:"the asbestos removal", pos:"noun", gender:"m",
     note:"Masculine noun. The process of removing asbestos from buildings.",
     example:"A: Le desamiantage de l'immeuble va durer six mois.\nB: C'est un chantier couteux mais necessaire.",
     exampleSrc:"A: The asbestos removal from the building will take six months.\nB: It's an expensive but necessary project.",
     funFact:"France has a massive desamiantage program. Many buildings from the 1960s-70s still contain asbestos."},

    {type:"teach", trg:"la desaffectation", src:"the decommissioning, the disuse", pos:"noun", gender:"f",
     note:"Feminine noun. The process of taking a building out of its original use.",
     example:"A: La desaffectation de l'usine a laisse un espace vacant.\nB: On pourrait le transformer en espace culturel.",
     exampleSrc:"A: The decommissioning of the factory left a vacant space.\nB: We could turn it into a cultural space.",
     funFact:"Many desaffected buildings in France become art galleries, lofts, or cultural centers. Reuse is trendy."},

    {type:"fb",
     s:"Le mur est {1} d'impacts apres le bombardement.",
     a:["crible"],
     opts:["crible","barbele","debraille","decouvert"],
     hint:"Full of holes, like a sieve. A vivid adjective describing damage.",
     sSrc:"The wall is {1} with impacts after the bombardment."},

    {type:"teach", trg:"debraille", src:"disheveled, scruffy", pos:"adj", gender:null,
     note:"Adjective. Untidy in appearance, with clothes in disarray. Feminine: debraillee.",
     example:"A: Il est arrive au bureau tout debraille.\nB: Sa chemise n'etait meme pas boutonnee.",
     exampleSrc:"A: He arrived at the office all disheveled.\nB: His shirt wasn't even buttoned.",
     funFact:"From 'braie' (old word for trousers). Literally: without proper trousers. A very visual insult."},

    {type:"teach", trg:"l'embarcation", src:"the small boat, the craft", pos:"noun", gender:"f",
     note:"Feminine noun. A small vessel or watercraft.",
     example:"A: Plusieurs embarcations ont chavire dans la tempete.\nB: Les secours ont ete envoyes immediatement.",
     exampleSrc:"A: Several boats capsized in the storm.\nB: Rescuers were sent immediately.",
     funFact:"Used in news about migration: 'embarcations de fortune' means makeshift boats. A poignant modern usage."},

    {type:"teach", trg:"l'embout", src:"the tip, the nozzle", pos:"noun", gender:"m",
     note:"Masculine noun. The end piece or tip of a tool or device.",
     example:"A: L'embout de ce tuyau est casse.\nB: Il faut le remplacer avant d'arroser.",
     exampleSrc:"A: The nozzle of this hose is broken.\nB: We need to replace it before watering.",
     funFact:"From 'en' + 'bout' (end). Very practical word used in plumbing, medicine, and everyday French."},

    {type:"mc",
     q:"Que signifie 'crible de dettes' ?",
     opts:["en train de rembourser","couvert de dettes","libre de dettes","proche de la faillite"],
     ans:"couvert de dettes",
     hint:"Full of debts, like a sieve full of holes. A vivid financial metaphor."},

    {type:"teach", trg:"la boulangerie", src:"the bakery", pos:"noun", gender:"f",
     note:"Feminine noun. A shop where bread is baked and sold.",
     example:"A: La boulangerie du coin fait le meilleur pain de Paris.\nB: Je prends toujours une baguette la-bas.",
     exampleSrc:"A: The corner bakery makes the best bread in Paris.\nB: I always get a baguette there.",
     funFact:"France has over 33,000 boulangeries. The baguette was added to UNESCO's intangible heritage in 2022."},

    {type:"teach", trg:"le deblaiement", src:"the clearing, the debris removal", pos:"noun", gender:"m",
     note:"Masculine noun. The removal of rubble or debris from a site.",
     example:"A: Le deblaiement du chantier prendra plusieurs jours.\nB: Les bulldozers sont deja sur place.",
     exampleSrc:"A: Clearing the construction site will take several days.\nB: The bulldozers are already on site.",
     funFact:"From 'deblayer' (to clear away). After WWII, France's deblaiement of bombed cities took years."},

    {type:"teach", trg:"decouvert", src:"uncovered, exposed", pos:"adj", gender:null,
     note:"Adjective. Open to the sky or exposed. Also: overdrawn (bank account).",
     example:"A: La piscine decouverte est fermee en hiver.\nB: On ira a la piscine couverte a la place.",
     exampleSrc:"A: The outdoor pool is closed in winter.\nB: We'll go to the indoor pool instead.",
     funFact:"'A decouvert' in banking means overdrawn. 'Etre a decouvert' means your account is in the red."},

    {type:"teach", trg:"l'accordeon", src:"the accordion", pos:"noun", gender:"m",
     note:"Masculine noun. The musical instrument with bellows and keys.",
     example:"A: L'accordeon est l'instrument emblematique de la chanson francaise.\nB: Piaf ne serait rien sans lui.",
     exampleSrc:"A: The accordion is the emblematic instrument of French song.\nB: Piaf would be nothing without it.",
     funFact:"The 'musette' accordion style is quintessentially Parisian. It was the soundtrack of working-class Paris."},

    {type:"fb",
     s:"Il est arrive au rendez-vous tout {1}, avec sa chemise froissee.",
     a:["debraille"],
     opts:["debraille","decouvert","crible","barbele"],
     hint:"Looking untidy and scruffy, with clothes in disarray.",
     sSrc:"He arrived at the meeting all {1}, with his shirt wrinkled."},

    {type:"match", pairs:[
      {trg:"bercail", src:"family home"},
      {trg:"chausson", src:"slipper"},
      {trg:"embarcation", src:"small boat"},
      {trg:"accordeon", src:"accordion"},
      {trg:"boulangerie", src:"bakery"}
    ]},

    {type:"mc",
     q:"Quel processus consiste a retirer l'amiante d'un batiment ?",
     opts:["la desaffectation","le coulissage","le desamiantage","le deblaiement"],
     ans:"le desamiantage",
     hint:"Removing a dangerous mineral fiber from buildings. Think of 'amiante' (asbestos)."},

    {type:"fb",
     s:"L'{1} de l'ancienne usine a permis de creer un centre culturel.",
     a:["desaffectation"],
     opts:["desaffectation","desamiantage","deblaiement","accrochage"],
     hint:"Taking a building out of its original use. Think of removing its original 'affectation'.",
     sSrc:"The {1} of the old factory made it possible to create a cultural center."}
  ]
};
export default LESSON_12;
