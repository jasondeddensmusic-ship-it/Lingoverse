const LESSON_10 = {
  id:"frv2_b2gB_l10", title:"Economie et commerce", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economie et commerce",
     desc:"Master business and economics vocabulary for professional settings and media consumption.",
     goals:["Learn 10 business and economics terms","Discuss market dynamics","Understand financial news"]},

    {type:"teach", trg:"un consommateur", src:"a consumer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who buys goods or services.\nFeminine: une consommatrice. Protection du consommateur = consumer protection.",
     example:"A: Le consommateur a de plus en plus de pouvoir.\nB: Grace a internet, il peut comparer les prix facilement.",
     exampleSrc:"A: The consumer has more and more power.\nB: Thanks to the internet, they can easily compare prices.",
     funFact:"French consumer protection law is among the strongest in Europe. The 'droit de retractation' gives 14 days to return online purchases."},

    {type:"teach", trg:"le productivisme", src:"productivism", pos:"noun", gender:"m",
     note:"Masculine noun. The ideology of maximizing production at all costs.\nOften criticized in ecological contexts.",
     example:"A: Le productivisme agricole a epuise les sols.\nB: Il faut revenir a des methodes plus durables.",
     exampleSrc:"A: Agricultural productivism has exhausted the soils.\nB: We need to return to more sustainable methods.",
     funFact:"France's 'decroissance' (degrowth) movement directly opposes productivisme. It has gained political traction since the 2010s."},

    {type:"teach", trg:"provisionner", src:"to provision, to set aside funds", pos:"verb", gender:null,
     note:"Regular -er verb. To set aside money for anticipated expenses.\nCompte provisionne = funded account.",
     example:"A: L'entreprise a provisionne dix millions pour les imprevus.\nB: C'est une mesure de prudence necessaire.",
     exampleSrc:"A: The company provisioned ten million for contingencies.\nB: It's a necessary precautionary measure.",
     funFact:"In French banking, 'provision' means available funds. 'Cheque sans provision' (check without funds) is equivalent to a bounced check."},

    {type:"teach", trg:"previsionnel", src:"projected, forecast", pos:"adj", gender:null,
     note:"Adjective. Relating to forecasts or projections.\nFeminine: previsionnelle. Budget previsionnel = projected budget.",
     example:"A: Le budget previsionnel est optimiste.\nB: Les recettes reelles pourraient etre inferieures.",
     exampleSrc:"A: The projected budget is optimistic.\nB: Actual revenue could be lower.",
     funFact:"Every French company must file a 'plan previsionnel de tresorerie' (cash flow forecast). It is legally required for larger businesses."},

    {type:"teach", trg:"la micro-entreprise", src:"the micro-enterprise", pos:"noun", gender:"f",
     note:"Feminine noun. A very small business with simplified tax status.\nFrench 'auto-entrepreneur' status is a micro-entreprise.",
     example:"A: J'ai cree ma micro-entreprise en une heure en ligne.\nB: Le regime fiscal est vraiment simplifie.",
     exampleSrc:"A: I created my micro-enterprise in one hour online.\nB: The tax system is really simplified.",
     funFact:"France created the 'auto-entrepreneur' status in 2009. Over 2 million people now use it for freelance and side businesses."},

    {type:"teach", trg:"la main-d'oeuvre", src:"the workforce, labor", pos:"noun", gender:"f",
     note:"Feminine compound noun. The workers available for a task.\nMain (hand) + oeuvre (work). Invariant plural.",
     example:"A: La main-d'oeuvre qualifiee manque dans ce secteur.\nB: Il faut investir dans la formation professionnelle.",
     exampleSrc:"A: Skilled labor is lacking in this sector.\nB: We need to invest in professional training.",
     funFact:"Literally 'work of the hand'. French labor law (Code du travail) is one of the thickest legal codes in the world at 3,000+ pages."},

    {type:"teach", trg:"un modere", src:"a moderate", pos:"noun", gender:"m",
     note:"Masculine noun. A person with centrist or moderate views.\nFeminine: une moderee. Also adjective: un ton modere.",
     example:"A: Les moderes cherchent un compromis.\nB: Ni la gauche ni la droite ne veut ceder.",
     exampleSrc:"A: The moderates are seeking a compromise.\nB: Neither the left nor the right wants to give in.",
     funFact:"In French politics, the center is called 'le marais' (the swamp) by its critics, suggesting indecision rather than moderation."},

    {type:"teach", trg:"le pretexte", src:"the pretext, the excuse", pos:"noun", gender:"m",
     note:"Masculine noun. A false reason given to justify an action.\nSous pretexte que = on the pretext that.",
     example:"A: Sous pretexte de securite, ils limitent les libertes.\nB: C'est un argument dangereux.",
     exampleSrc:"A: On the pretext of security, they limit freedoms.\nB: It's a dangerous argument.",
     funFact:"'Sous aucun pretexte' (under no pretext) is a firm refusal. It leaves absolutely no room for negotiation."},

    {type:"teach", trg:"la materialization", src:"the materialization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming real or tangible.\nLa materialisation d'un projet = a project becoming reality.",
     example:"A: La materialisation de ce plan prendra des annees.\nB: Mais les premieres etapes sont deja en cours.",
     exampleSrc:"A: The materialization of this plan will take years.\nB: But the first steps are already underway.",
     funFact:"French bureaucracy is famous for the gap between plans and materialisation. 'Ca va se concretiser' is a perennial promise."},

    {type:"teach", trg:"un processeur", src:"a processor", pos:"noun", gender:"m",
     note:"Masculine noun. A computer chip that performs calculations.\nProcesseur central = CPU.",
     example:"A: Ce processeur est deux fois plus rapide que le precedent.\nB: La technologie evolue a une vitesse folle.",
     exampleSrc:"A: This processor is twice as fast as the previous one.\nB: Technology evolves at a crazy speed.",
     funFact:"France has its own processor design companies. Bull and Atos produce European alternatives to American chips."},

    {type:"mc", q:"Qu'est-ce qu'une 'micro-entreprise' en France?",
     opts:["Un statut simplifie pour petits entrepreneurs","Une tres petite usine","Un laboratoire scientifique","Une start-up technologique"],
     ans:"Un statut simplifie pour petits entrepreneurs",
     hint:"This legal status was created in 2009 to simplify freelancing and small business"},

    {type:"fb", s:"La {1} qualifiee est rare dans cette region.",
     a:["main-d'oeuvre"], opts:["main-d'oeuvre","micro-entreprise","materialisation","moderation"],
     hint:"The compound noun literally means 'work of the hand' and refers to available workers",
     sSrc:"Skilled {1} is rare in this region."},

    {type:"mc", q:"Que signifie 'sous pretexte de'?",
     opts:["En utilisant comme fausse raison","Avant de commencer","A cause de","Grace a"],
     ans:"En utilisant comme fausse raison",
     hint:"A pretext is a false justification used to hide the real motivation"},

    {type:"match", pairs:[
      {trg:"un consommateur", src:"a consumer"},
      {trg:"le productivisme", src:"productivism"},
      {trg:"previsionnel", src:"projected"},
      {trg:"un processeur", src:"a processor"}
    ]},

    {type:"fb", s:"L'entreprise a {1} des fonds pour les risques futurs.",
     a:["provisionne"], opts:["provisionne","materialise","modere","processe"],
     hint:"The verb means to set aside money in advance for anticipated expenses",
     sSrc:"The company {1} funds for future risks."},

    {type:"mc", q:"Le 'productivisme' est souvent critique par:",
     opts:["Les ecologistes","Les banquiers","Les consommateurs","Les informaticiens"],
     ans:"Les ecologistes",
     hint:"This ideology of maximizing production at all costs conflicts with sustainability"},

    {type:"fb", s:"Le budget {1} prevoit une croissance de trois pour cent.",
     a:["previsionnel"], opts:["previsionnel","modere","processeur","productiviste"],
     hint:"The adjective describes something that relates to forecasts and projections",
     sSrc:"The {1} budget forecasts three percent growth."},

    {type:"mc", q:"Que signifie 'cheque sans provision'?",
     opts:["Un cheque sans fonds suffisants","Un cheque sans signature","Un cheque sans date","Un cheque sans nom"],
     ans:"Un cheque sans fonds suffisants",
     hint:"Provision in banking means the available balance to cover a payment"},

    {type:"fb", s:"Les {1} cherchent toujours un terrain d'entente.",
     a:["moderes"], opts:["moderes","consommateurs","processeurs","pretextes"],
     hint:"People with centrist views who seek compromise between extreme positions",
     sSrc:"The {1} always seek common ground."},

    {type:"match", pairs:[
      {trg:"provisionner", src:"to set aside funds"},
      {trg:"la micro-entreprise", src:"micro-enterprise"},
      {trg:"la main-d'oeuvre", src:"workforce"},
      {trg:"le pretexte", src:"pretext"}
    ]}
  ]
};
export default LESSON_10;
