const LESSON_7 = {
  id:"frv2_b2g4_l7", title:"Politique et pouvoir", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et pouvoir",
     desc:"Learn vocabulary for discussing politics, governance, and civic life at an advanced level.",
     goals:["Learn 15 political and civic vocabulary words","Discuss governance and democracy","Analyze political trends with precision"]},

    {type:"teach", trg:"le federalisme", src:"federalism", pos:"noun", gender:"m",
     note:"Masculine noun. A system where power is shared between central and regional governments.",
     example:"A: Le federalisme suisse est un modele.\nB: Chaque canton garde beaucoup d'autonomie.",
     exampleSrc:"A: Swiss federalism is a model.\nB: Each canton keeps a lot of autonomy.",
     funFact:"France is famously centralized. Federalism is debated but resisted due to Jacobin tradition."},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine noun. Also used as adjective. Feminine: communiste (same form).",
     example:"A: Les communistes ont eu un role majeur dans la Resistance.\nB: Oui, ils ont beaucoup sacrifie.",
     exampleSrc:"A: The communists played a major role in the Resistance.\nB: Yes, they sacrificed a lot.",
     funFact:"The French Communist Party (PCF) was once the country's largest party, peaking at 28% in 1946."},

    {type:"teach", trg:"un contradicteur", src:"an opponent in debate, a dissenter", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who contradicts or opposes in discussion.",
     example:"A: Le contradicteur a souleve un point important.\nB: Le debat en est devenu plus riche.",
     exampleSrc:"A: The dissenter raised an important point.\nB: The debate became richer for it.",
     funFact:"French debate culture values the 'contradicteur'. A good argument needs a worthy opponent."},

    {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire est une tactique courante.\nB: Ca empeche le vrai debat.",
     exampleSrc:"A: Demonizing the opponent is a common tactic.\nB: It prevents real debate.",
     funFact:"Very common in French political discourse. 'Diaboliser' became key vocabulary during the 2000s."},

    {type:"teach", trg:"fiscal", src:"fiscal, tax-related", pos:"adj", gender:null,
     note:"Adjective. Relating to government revenue and taxation. Feminine: fiscale.",
     example:"A: La politique fiscale doit etre reformee.\nB: Les impots sont trop eleves.",
     exampleSrc:"A: Tax policy needs to be reformed.\nB: Taxes are too high.",
     funFact:"France has one of the highest tax burdens in the OECD. 'Le fisc' is informal for the tax authority."},

    {type:"mc",
     q:"Quel systeme politique partage le pouvoir entre gouvernement central et regions ?",
     opts:["le federalisme","le communisme","l'absolutisme","le centralisme"],
     ans:"le federalisme",
     hint:"Switzerland and Germany use this system where regions keep significant autonomy."},

    {type:"teach", trg:"l'entrepreneuriat", src:"entrepreneurship", pos:"noun", gender:"m",
     note:"Masculine noun. The activity of creating and running businesses.",
     example:"A: L'entrepreneuriat est encourage par le gouvernement.\nB: Les start-ups se multiplient.",
     exampleSrc:"A: Entrepreneurship is encouraged by the government.\nB: Start-ups are multiplying.",
     funFact:"'Entrepreneur' is one of France's most successful linguistic exports. English borrowed it unchanged."},

    {type:"teach", trg:"le declassement", src:"the downgrading, the loss of status", pos:"noun", gender:"m",
     note:"Masculine noun. Social decline or loss of one's previous status.",
     example:"A: La peur du declassement est reelle.\nB: La classe moyenne se sent menacee.",
     exampleSrc:"A: The fear of losing status is real.\nB: The middle class feels threatened.",
     funFact:"A major theme in French sociology. 'Declassement social' dominates political debate."},

    {type:"teach", trg:"un commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun. A business salesperson. Also adjective: commercial.",
     example:"A: Le commercial a signe un gros contrat.\nB: Ses clients lui font confiance.",
     exampleSrc:"A: The sales rep signed a big contract.\nB: His clients trust him.",
     funFact:"In France, 'un commercial' specifically means a salesperson, while 'commercial' as adjective means business-related."},

    {type:"fb",
     s:"La {1} de l'adversaire politique est une strategie dangereuse.",
     a:["diabolisation"],
     opts:["diabolisation","democratisation","division","deduction"],
     hint:"The act of making someone look like a demon or villain. A common political tactic.",
     sSrc:"The {1} of the political opponent is a dangerous strategy."},

    {type:"teach", trg:"la gageure", src:"the challenge, the bold gamble", pos:"noun", gender:"f",
     note:"Feminine noun. A near-impossible challenge. Pronounced 'gajur'.",
     example:"A: Reformer ce systeme est une gageure.\nB: Beaucoup ont essaye et echoue.",
     exampleSrc:"A: Reforming this system is a challenge.\nB: Many have tried and failed.",
     funFact:"One of the trickiest French words to pronounce. The 'eu' is pronounced like 'u'. From 'gager' (to wager)."},

    {type:"teach", trg:"generaliste", src:"general, non-specialized", pos:"adj", gender:null,
     note:"Adjective. Not specialized. Also a noun: a general practitioner (doctor).",
     example:"A: Mon medecin generaliste m'a oriente vers un specialiste.\nB: C'est la procedure normale.",
     exampleSrc:"A: My general practitioner referred me to a specialist.\nB: That's the normal procedure.",
     funFact:"In France, you must see your 'medecin generaliste' first before any specialist. It's the healthcare gateway."},

    {type:"teach", trg:"l'avenement", src:"the advent, the coming to power", pos:"noun", gender:"m",
     note:"Masculine noun. The arrival of something important, especially a new era.",
     example:"A: L'avenement d'Internet a tout change.\nB: Le monde ne sera plus jamais le meme.",
     exampleSrc:"A: The advent of the Internet changed everything.\nB: The world will never be the same.",
     funFact:"Originally reserved for a king's accession to the throne. Now used for any major historic shift."},

    {type:"mc",
     q:"Quel mot designe la peur de perdre son statut social ?",
     opts:["le declassement","le federalisme","l'entrepreneuriat","l'avenement"],
     ans:"le declassement",
     hint:"The prefix 'de-' indicates removal, and 'classe' refers to social class or rank."},

    {type:"teach", trg:"un forcat", src:"a convict, a galley slave", pos:"noun", gender:"m",
     note:"Masculine noun. A prisoner condemned to hard labor.",
     example:"A: Les forcats travaillaient dans des conditions horribles.\nB: Le bagne de Cayenne etait le pire.",
     exampleSrc:"A: Convicts worked in horrible conditions.\nB: The Cayenne penal colony was the worst.",
     funFact:"Victor Hugo's Jean Valjean was a forcat. The word comes from Italian 'forzato' (forced)."},

    {type:"fb",
     s:"L'{1} de l'intelligence artificielle transforme tous les secteurs.",
     a:["avenement"],
     opts:["avenement","entrepreneuriat","declassement","federalisme"],
     hint:"The arrival or dawn of something major. Originally used for a king taking the throne.",
     sSrc:"The {1} of artificial intelligence is transforming all sectors."},

    {type:"match", pairs:[
      {trg:"federalisme", src:"federalism"},
      {trg:"fiscal", src:"tax-related"},
      {trg:"declassement", src:"loss of status"},
      {trg:"gageure", src:"bold challenge"},
      {trg:"forcat", src:"convict"}
    ]},

    {type:"mc",
     q:"Comment prononce-t-on le mot 'gageure' ?",
     opts:["ga-jur","ga-geur","ga-jeure","gaj-ur"],
     ans:"ga-jur",
     hint:"This is one of French's trickiest pronunciations. The 'eu' sounds like 'u', not like in 'beurre'."}
  ]
};
export default LESSON_7;
