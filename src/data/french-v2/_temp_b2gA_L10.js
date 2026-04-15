const LESSON_10 = {
  id:"frv2_b2gA_l10", title:"Le monde du travail avance", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde du travail avance",
     desc:"Navigate the professional world with advanced vocabulary. From freelancing to corporate hierarchy, master the B2 language of business.",
     goals:["Learn 14 advanced work and business words","Discuss professional situations precisely","Use corporate and freelance vocabulary"]},

    {type:"teach", trg:"un pigiste", src:"a freelancer (journalism)", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une pigiste.\nA journalist paid per article or 'pige'.",
     example:"A: Elle travaille comme pigiste pour Le Monde.\nB: C'est un metier precaire mais passionnant.",
     exampleSrc:"A: She works as a freelancer for Le Monde.\nB: It's a precarious but exciting profession.",
     funFact:"'La pige' is the piece-rate payment. French media relies heavily on pigistes, who have some legal protections."},

    {type:"teach", trg:"un PDG", src:"a CEO", pos:"noun", gender:"m",
     note:"Masculine acronym. Stands for 'President-Directeur General'.\nFeminine: une PDG (informal).",
     example:"A: Le PDG a annonce des changements majeurs.\nB: Les employes sont inquiets.",
     exampleSrc:"A: The CEO announced major changes.\nB: Employees are worried.",
     funFact:"In France, the PDG holds both the chairman and CEO roles. The dual structure is uniquely French."},

    {type:"teach", trg:"un administrateur", src:"an administrator, a board member", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une administratrice.\nA member of a company's board of directors.",
     example:"A: L'administrateur a vote contre la fusion.\nB: Il a fait valoir des risques financiers.",
     exampleSrc:"A: The board member voted against the merger.\nB: He raised financial risks.",
     funFact:"French corporate boards must have at least 40% women since a 2011 law. Called 'la loi Cope-Zimmermann'."},

    {type:"teach", trg:"le pourvoyeur", src:"the supplier, the provider", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la pourvoyeuse.\nSomeone who supplies or provides something.",
     example:"A: Ce pays est le premier pourvoyeur de gaz naturel.\nB: Notre dependance est inquietante.",
     exampleSrc:"A: This country is the top supplier of natural gas.\nB: Our dependence is concerning.",
     funFact:"'Pourvoyeur de fonds' means financial backer. Used in formal business and political contexts."},

    {type:"teach", trg:"l'acceleration", src:"acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. Speeding up a process or rate of change.",
     example:"A: L'acceleration de la transformation numerique est impressionnante.\nB: Tout change si vite.",
     exampleSrc:"A: The acceleration of digital transformation is impressive.\nB: Everything changes so fast.",
     funFact:"French tech startups use 'accelerateur' for business incubators. Station F in Paris is Europe's largest."},

    {type:"mc",
     q:"Quel mot designe un journaliste paye a l'article ?",
     opts:["un pigiste","un PDG","un administrateur","un pourvoyeur"],
     ans:"un pigiste",
     hint:"From 'la pige', meaning piece-rate payment. Common in French journalism."},

    {type:"teach", trg:"la micro-entreprise", src:"the micro-business", pos:"noun", gender:"f",
     note:"Feminine noun. A very small business with simplified tax status in France.",
     example:"A: J'ai cree ma micro-entreprise l'an dernier.\nB: C'est simple comme statut fiscal.",
     exampleSrc:"A: I created my micro-business last year.\nB: It's simple as a tax status.",
     funFact:"France's 'auto-entrepreneur' status (now micro-entreprise) revolutionized freelancing in 2009. Over 2 million registered."},

    {type:"teach", trg:"la mutualiste", src:"the mutual insurance member", pos:"noun", gender:"f",
     note:"Can be noun or adjective. Relating to mutual insurance organizations.",
     example:"A: Notre assurance est une mutualiste.\nB: Les cotisations sont raisonnables.",
     exampleSrc:"A: Our insurance is a mutual.\nB: The contributions are reasonable.",
     funFact:"France's 'mutuelles' cover the portion of healthcare costs not paid by Social Security. Almost everyone has one."},

    {type:"teach", trg:"le bilan", src:"the assessment, the balance sheet", pos:"noun", gender:"m",
     note:"Masculine noun. A summary of results or financial statement.\n'Faire le bilan' = to take stock.",
     example:"A: Quel est le bilan de cette annee ?\nB: Les resultats sont encourageants.",
     exampleSrc:"A: What's the assessment for this year?\nB: The results are encouraging.",
     funFact:"'Bilan de competences' is a popular French career assessment tool, often funded by employers."},

    {type:"fb",
     s:"Le {1} a annonce une restructuration de l'entreprise.",
     a:["PDG"],
     opts:["PDG","pigiste","administrateur","pourvoyeur"],
     hint:"The acronym for the top executive who is both president and director general.",
     sSrc:"The {1} announced a restructuring of the company."},

    {type:"teach", trg:"l'agressivite", src:"aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. Hostile or forceful behavior.\nIn business: competitive drive.",
     example:"A: Son agressivite commerciale a paye.\nB: Ils ont gagne trois gros contrats.",
     exampleSrc:"A: His commercial aggressiveness paid off.\nB: They won three big contracts.",
     funFact:"In French business, 'agressivite commerciale' is positive. It means competitive drive, not hostility."},

    {type:"teach", trg:"un decret", src:"a decree, an executive order", pos:"noun", gender:"m",
     note:"Masculine noun. An official government decision with legal force.",
     example:"A: Le decret a ete publie au Journal officiel.\nB: Il entre en vigueur demain.",
     exampleSrc:"A: The decree was published in the Official Journal.\nB: It takes effect tomorrow.",
     funFact:"The 'Journal officiel de la Republique francaise' publishes all decrees. It has been published since 1869."},

    {type:"teach", trg:"le potentiel", src:"the potential", pos:"noun", gender:"m",
     note:"Masculine noun. Also used as adjective: 'un client potentiel'.\nCapacity for development.",
     example:"A: Cette region a un potentiel economique enorme.\nB: Il faut investir dans les infrastructures.",
     exampleSrc:"A: This region has enormous economic potential.\nB: We need to invest in infrastructure.",
     funFact:"'A fort potentiel' is a common phrase in French job listings and business reports."},

    {type:"mc",
     q:"Quel statut fiscal simplifie permet de creer facilement une petite activite en France ?",
     opts:["la micro-entreprise","la mutualiste","le bilan","le decret"],
     ans:"la micro-entreprise",
     hint:"Created in 2009 as 'auto-entrepreneur'. Simplified tax status for small businesses."},

    {type:"teach", trg:"la rentabilite", src:"profitability", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to generate profit.\n'Seuil de rentabilite' = break-even point.",
     example:"A: La rentabilite de ce projet est douteuse.\nB: Les couts depassent les revenus prevus.",
     exampleSrc:"A: The profitability of this project is doubtful.\nB: Costs exceed projected revenue.",
     funFact:"French business culture balances rentabilite with social responsibility. The concept of 'entreprise a mission' is growing."},

    {type:"fb",
     s:"Quel est le {1} de cette premiere annee d'activite ?",
     a:["bilan"],
     opts:["bilan","potentiel","decret","pourvoyeur"],
     hint:"A summary of results. Think of taking stock or a balance sheet.",
     sSrc:"What is the {1} of this first year of activity?"},

    {type:"match", pairs:[
      {trg:"pigiste", src:"freelance journalist"},
      {trg:"acceleration", src:"acceleration"},
      {trg:"agressivite", src:"aggressiveness"},
      {trg:"rentabilite", src:"profitability"},
      {trg:"potentiel", src:"potential"}
    ]},

    {type:"mc",
     q:"Quel mot designe une personne qui fournit des ressources ou des biens ?",
     opts:["un pourvoyeur","un pigiste","un PDG","un administrateur"],
     ans:"un pourvoyeur",
     hint:"From the verb 'pourvoir' (to provide). Someone who supplies things."}
  ]
};
export default LESSON_10;
