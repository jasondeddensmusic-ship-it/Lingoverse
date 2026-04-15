const LESSON_15 = {
  id:"frv2_b2gap_l15", title:"Travail et commerce", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Travail et commerce",
     desc:"Vocabulary for the workplace, business, and professional life. From consultants to allocations.",
     goals:["Learn 20 work and business vocabulary words","Discuss professional contexts in French","Navigate formal workplace language"]},

    {type:"teach", trg:"un consultant", src:"a consultant", pos:"noun", gender:"m",
     note:"Masculine noun. An expert hired to give advice. Feminine: une consultante.",
     example:"A: Le consultant a presente son rapport.\nB: Ses recommandations sont claires.",
     exampleSrc:"A: The consultant presented his report.\nB: His recommendations are clear.",
     funFact:"Borrowed back from English, which took it from Latin 'consultare'. A Franco-English ping-pong word."},

    {type:"teach", trg:"un commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun. A salesperson. Feminine: une commerciale.",
     example:"A: Le commercial a signe trois contrats ce mois.\nB: C'est un excellent resultat.",
     exampleSrc:"A: The sales rep signed three contracts this month.\nB: That's an excellent result.",
     funFact:"In French companies, 'les commerciaux' are the sales team. 'Commercial' as an adjective means business-related."},

    {type:"teach", trg:"le business", src:"the business (informal)", pos:"noun", gender:"m",
     note:"Masculine noun. Borrowed from English. Used informally for business dealings.",
     example:"A: Il est dans le business depuis vingt ans.\nB: C'est un homme d'experience.",
     exampleSrc:"A: He's been in business for twenty years.\nB: He's an experienced man.",
     funFact:"Despite having 'affaires' and 'commerce', French often uses 'business' for its informal, dynamic feel."},

    {type:"teach", trg:"allouer", src:"to allocate, to grant", pos:"verb", gender:null,
     note:"Verb. To distribute resources or funds for a specific purpose.",
     example:"A: Le gouvernement a alloue des fonds pour la recherche.\nB: C'est une bonne nouvelle pour les chercheurs.",
     exampleSrc:"A: The government allocated funds for research.\nB: That's good news for researchers.",
     funFact:"From Old French 'alouer' (to place). 'Allocation' in French usually means a government benefit payment."},

    {type:"teach", trg:"approvisionner", src:"to supply, to stock up", pos:"verb", gender:null,
     note:"Verb. To provide goods or supplies. Reflexive: s'approvisionner = to stock up.",
     example:"A: Il faut approvisionner le magasin avant Noel.\nB: Les commandes sont deja passees.",
     exampleSrc:"A: We need to stock the store before Christmas.\nB: The orders have already been placed.",
     funFact:"From 'provisions' (supplies/groceries). 'S'approvisionner' is what you do at the supermarket."},

    {type:"mc",
     q:"Quel verbe signifie 'distribuer des ressources pour un usage precis' ?",
     opts:["allouer","approvisionner","administrer","astiquer"],
     ans:"allouer",
     hint:"A formal word for distributing funds or resources. 'Allocation' is the noun form."},

    {type:"teach", trg:"un avenant", src:"an amendment (to a contract)", pos:"noun", gender:"m",
     note:"Masculine noun. A modification added to an existing contract.",
     example:"A: Il faut signer un avenant au contrat.\nB: Quel article modifie-t-il ?",
     exampleSrc:"A: We need to sign an amendment to the contract.\nB: Which article does it modify?",
     funFact:"Also an adjective meaning 'pleasant, agreeable'. Two completely different meanings for the same word."},

    {type:"teach", trg:"un boulet", src:"a ball and chain, a burden", pos:"noun", gender:"m",
     note:"Masculine noun. Originally a cannonball. Now: a burden or incompetent person.",
     example:"A: Ce projet est un vrai boulet.\nB: On n'arrive pas a s'en debarrasser.",
     exampleSrc:"A: This project is a real millstone.\nB: We can't seem to get rid of it.",
     funFact:"'Trainer un boulet' means to drag a ball and chain. In slang, calling someone a 'boulet' is quite rude."},

    {type:"teach", trg:"le clivage", src:"the divide, the rift", pos:"noun", gender:"f",
     note:"Masculine noun. A sharp division between groups or ideas.",
     example:"A: Le clivage entre les generations s'accentue.\nB: Les jeunes et les aines ne se comprennent plus.",
     exampleSrc:"A: The generational divide is growing.\nB: Young and old no longer understand each other.",
     funFact:"From 'cliver' (to cleave). Used in politics, psychology, and geology. A very analytical word."},

    {type:"fb",
     s:"Il faut {1} le magasin en marchandises avant l'ouverture.",
     a:["approvisionner"],
     opts:["approvisionner","allouer","administrer","astiquer"],
     hint:"To supply or stock up with goods. Related to 'provisions' (supplies/groceries).",
     sSrc:"We need to {1} the store with merchandise before opening."},

    {type:"teach", trg:"le bonus", src:"the bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra payment or advantage. From Latin via English.",
     example:"A: Les employes ont recu un bonus de fin d'annee.\nB: C'est bien merite.",
     exampleSrc:"A: The employees received a year-end bonus.\nB: It's well deserved.",
     funFact:"Latin word meaning 'good'. Entered French through English. In insurance, 'bonus-malus' adjusts premiums."},

    {type:"teach", trg:"un complet", src:"a suit (clothing)", pos:"noun", gender:"m",
     note:"Masculine noun. A full men's suit (jacket + trousers). Adjective: complete.",
     example:"A: Il porte un complet gris pour l'entretien.\nB: Ca fait tres professionnel.",
     exampleSrc:"A: He's wearing a grey suit for the interview.\nB: It looks very professional.",
     funFact:"Short for 'complet-veston'. An older, more elegant word than 'costume'. Still used in formal contexts."},

    {type:"teach", trg:"caser", src:"to place, to find a spot for", pos:"verb", gender:null,
     note:"Verb. To fit something/someone into a space. Informal register.",
     example:"A: J'ai reussi a me caser dans cette entreprise.\nB: Bravo, c'etait difficile.",
     exampleSrc:"A: I managed to land a spot in this company.\nB: Well done, it was tough.",
     funFact:"From 'case' (box/compartment). 'Se caser' informally means to settle down (find a partner or job)."},

    {type:"teach", trg:"le confrere", src:"the colleague (same profession)", pos:"noun", gender:"m",
     note:"Masculine noun. A peer in the same profession. Feminine: la consoeur.",
     example:"A: Mon confrere a obtenu une promotion.\nB: Il la meritait depuis longtemps.",
     exampleSrc:"A: My colleague got a promotion.\nB: He deserved it for a long time.",
     funFact:"Originally 'fellow monk' (con + frere = with + brother). Now used among lawyers, doctors, journalists."},

    {type:"mc",
     q:"Comment appelle-t-on une modification ajoutee a un contrat existant ?",
     opts:["un avenant","un boulet","un bonus","un complet"],
     ans:"un avenant",
     hint:"A legal term for a contractual amendment. Also means 'pleasant' as an adjective."},

    {type:"teach", trg:"le blanchisseur", src:"the launderer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who launders clothes. Also: money launderer.",
     example:"A: Le blanchisseur a perdu ma chemise preferee.\nB: Demande un dedommagement.",
     exampleSrc:"A: The launderer lost my favorite shirt.\nB: Ask for compensation.",
     funFact:"'Blanchiment d'argent' (money laundering) uses the same root. Making dirty money 'white' (clean)."},

    {type:"teach", trg:"boulonner", src:"to bolt, to work hard (slang)", pos:"verb", gender:null,
     note:"Verb. Literally to bolt/screw. Slang: to work hard.",
     example:"A: Il boulonne soixante heures par semaine.\nB: C'est trop, il va s'epuiser.",
     exampleSrc:"A: He works sixty hours a week.\nB: That's too much, he'll burn out.",
     funFact:"From 'boulon' (bolt). The slang meaning comes from factory work: tightening bolts all day."},

    {type:"teach", trg:"la classe affaires", src:"business class", pos:"noun", gender:"f",
     note:"Feminine noun. The premium cabin on a plane or train.",
     example:"A: Il voyage toujours en classe affaires.\nB: Son entreprise paie les billets.",
     exampleSrc:"A: He always travels business class.\nB: His company pays for the tickets.",
     funFact:"Air France was among the first to introduce 'classe affaires' in the 1970s."},

    {type:"fb",
     s:"Le {1} entre les riches et les pauvres se creuse.",
     a:["clivage"],
     opts:["clivage","bonus","avenant","complet"],
     hint:"A sharp division or rift between groups. Used in politics and sociology.",
     sSrc:"The {1} between rich and poor is widening."},

    {type:"teach", trg:"la conjoncture", src:"the economic climate", pos:"noun", gender:"f",
     note:"Feminine noun. The current economic conditions and trends.",
     example:"A: La conjoncture est favorable aux investissements.\nB: Les taux d'interet sont bas.",
     exampleSrc:"A: The economic climate is favorable for investments.\nB: Interest rates are low.",
     funFact:"French economists distinguish 'conjoncture' (short-term conditions) from 'structure' (long-term trends)."},

    {type:"match", pairs:[
      {trg:"consultant", src:"consultant"},
      {trg:"avenant", src:"contract amendment"},
      {trg:"clivage", src:"divide, rift"},
      {trg:"blanchisseur", src:"launderer"},
      {trg:"boulonner", src:"to work hard"}
    ]},

    {type:"mc",
     q:"Comment dit-on 'se trouver un emploi ou une place' de facon informelle ?",
     opts:["se caser","boulonner","allouer","approvisionner"],
     ans:"se caser",
     hint:"From 'case' (box/compartment). Means to fit yourself into a spot. Also means to settle down."},

    {type:"fb",
     s:"Il porte un {1} gris elegant pour la reunion.",
     a:["complet"],
     opts:["complet","boulet","bonus","clivage"],
     hint:"A men's suit (jacket + trousers). Short for 'c...-veston', more formal than 'costume'.",
     sSrc:"He wears an elegant grey {1} for the meeting."}
  ]
};
export default LESSON_15;
