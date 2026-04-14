const LESSON_8 = {
  id:"frv2_b2g8_l8", title:"Économie et commerce", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Économie et commerce",
     desc:"Business and economics vocabulary for discussing markets, trade, and financial concepts at B2 level.",
     goals:["Learn 15 economics and business words","Discuss financial topics confidently","Understand formal business register"]},

    {type:"teach", trg:"un négociant", src:"a merchant, a dealer", pos:"noun", gender:"m",
     note:"Masculine noun. A trader, especially in wine or commodities.\nFeminine: une négociante.",
     example:"A: Ce négociant en vin est réputé.\nB: Il fournit les meilleurs restaurants.",
     exampleSrc:"A: This wine merchant is well-known.\nB: He supplies the best restaurants.",
     funFact:"Bordeaux wine négociants have been powerful since the 18th century. They buy, blend, and sell."},

    {type:"teach", trg:"la démocratisation", src:"the democratization", pos:"noun", gender:"f",
     note:"Feminine noun. Making something accessible to all.\nPolitical and consumer contexts.",
     example:"A: La démocratisation de l'internet a changé le monde.\nB: Tout le monde y a accès maintenant.",
     exampleSrc:"A: The democratization of the internet changed the world.\nB: Everyone has access now.",
     funFact:"In France, 'démocratisation de la culture' was André Malraux's grand mission in the 1960s."},

    {type:"teach", trg:"un mutualiste", src:"a member of a mutual society", pos:"noun", gender:"m",
     note:"Masculine noun. A member of a cooperative insurance group.\nAlso adjective.",
     example:"A: Les mutualistes bénéficient de tarifs réduits.\nB: C'est l'avantage du système coopératif.",
     exampleSrc:"A: Mutual society members benefit from reduced rates.\nB: That's the advantage of the cooperative system.",
     funFact:"France's 'mutuelles' cover 95% of the population as supplementary health insurance."},

    {type:"teach", trg:"la martingale", src:"the winning strategy, the system", pos:"noun", gender:"f",
     note:"Feminine noun. A supposed sure-win gambling strategy.\nAlso a belt on a coat.",
     example:"A: Il croit avoir trouvé la martingale.\nB: Au casino, la maison gagne toujours.",
     exampleSrc:"A: He thinks he's found the winning system.\nB: At the casino, the house always wins.",
     funFact:"Named after residents of Martigues in Provence, stereotyped as naive gamblers."},

    {type:"mc",
     q:"Quel mot désigne un commerçant spécialisé, surtout dans le vin ?",
     opts:["un négociant","un mutualiste","une martingale","un consommateur"],
     ans:"un négociant",
     hint:"A merchant or dealer. Bordeaux is famous for these professionals in the wine trade."},

    {type:"teach", trg:"le modernisme", src:"modernism", pos:"noun", gender:"m",
     note:"Masculine noun. The modernist movement in arts and architecture.",
     example:"A: Le modernisme a bouleversé l'architecture.\nB: Le Corbusier en est un symbole.",
     exampleSrc:"A: Modernism revolutionized architecture.\nB: Le Corbusier is a symbol of it.",
     funFact:"France's Le Corbusier became the global face of architectural modernism in the 20th century."},

    {type:"teach", trg:"l'intermède", src:"the interlude, the intermission", pos:"noun", gender:"m",
     note:"Masculine noun. A break between parts of a performance.\nAlso figurative.",
     example:"A: Profitons de cet intermède pour souffler.\nB: Bonne idée, la réunion est longue.",
     exampleSrc:"A: Let's use this interlude to catch our breath.\nB: Good idea, the meeting is long.",
     funFact:"From Latin 'intermedium' (between things). Theater intermèdes in Molière's time were mini-shows."},

    {type:"teach", trg:"un confrère", src:"a colleague (same profession)", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow member of the same profession.\nFeminine: une consoeur.",
     example:"A: Mon confrère a publié un article passionnant.\nB: Vous travaillez dans le même domaine ?",
     exampleSrc:"A: My colleague published a fascinating article.\nB: You work in the same field?",
     funFact:"Stronger than 'collègue'. A confrère shares your profession and expertise, not just your office."},

    {type:"fb",
     s:"La {1} de l'internet a changé le monde entier.",
     a:["démocratisation"],
     opts:["démocratisation","martingale","diabolisation","modernisme"],
     hint:"Making something accessible to everyone. Think of democracy applied to access.",
     sSrc:"The {1} of the internet changed the entire world."},

    {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. A unit of measurement, one tenth of a meter.\n10 cm.",
     example:"A: Le poisson mesure trois décimètres.\nB: Trente centimètres, c'est un beau poisson.",
     exampleSrc:"A: The fish measures three decimeters.\nB: Thirty centimeters, that's a fine fish.",
     funFact:"France invented the metric system in 1799. The décimètre is rarely used in daily life."},

    {type:"teach", trg:"un décorateur", src:"a decorator, a set designer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who designs interiors or stage sets.\nFeminine: une décoratrice.",
     example:"A: Le décorateur a transformé l'appartement.\nB: On ne reconnaît plus rien.",
     exampleSrc:"A: The decorator transformed the apartment.\nB: You can't recognize anything anymore.",
     funFact:"In French cinema, the 'décorateur' is the production designer, a prestigious creative role."},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization.\nFeminine: une administratrice.",
     example:"A: L'administrateur gère le budget annuel.\nB: C'est une lourde responsabilité.",
     exampleSrc:"A: The administrator manages the annual budget.\nB: It's a heavy responsibility.",
     funFact:"In French tech, 'administrateur système' is the sysadmin. In law, 'administrateur judiciaire' manages bankrupt companies."},

    {type:"mc",
     q:"Quel mot désigne un collègue de la même profession ?",
     opts:["un confrère","un négociant","un mutualiste","un administrateur"],
     ans:"un confrère",
     hint:"Stronger bond than 'collègue'. You share the same professional expertise, not just an office."},

    {type:"teach", trg:"un curieux", src:"an onlooker, a curious person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone driven by curiosity.\nFeminine: une curieuse. Also adjective.",
     example:"A: Les curieux se sont attroupés.\nB: L'accident a attiré beaucoup de monde.",
     exampleSrc:"A: The onlookers gathered around.\nB: The accident attracted a lot of people.",
     funFact:"In 18th century France, 'les curieux' were collectors of art and rarities. A noble pursuit."},

    {type:"teach", trg:"la micro-entreprise", src:"the micro-enterprise", pos:"noun", gender:"f",
     note:"Feminine compound noun. A very small business, often one person.\nA legal status in France.",
     example:"A: J'ai créé ma micro-entreprise l'an dernier.\nB: Comment ça se passe ?",
     exampleSrc:"A: I created my micro-enterprise last year.\nB: How is it going?",
     funFact:"France's 'auto-entrepreneur' system (now micro-entreprise) launched in 2009 and created millions of small businesses."},

    {type:"teach", trg:"le non-sens", src:"the nonsense, the absurdity", pos:"noun", gender:"m",
     note:"Masculine noun. Something that makes no sense.\nBorrowed from English.",
     example:"A: Cette décision est un non-sens économique.\nB: Elle va coûter des millions.",
     exampleSrc:"A: This decision is economic nonsense.\nB: It will cost millions.",
     funFact:"Though borrowed from English, the French use it specifically for absurd situations, not silly humor."},

    {type:"fb",
     s:"Mon {1} a publié un article passionnant dans la même revue.",
     a:["confrère"],
     opts:["confrère","administrateur","décorateur","curieux"],
     hint:"A fellow member of the same profession. Stronger than just a work colleague.",
     sSrc:"My {1} published a fascinating article in the same journal."},

    {type:"match", pairs:[
      {trg:"négociant", src:"merchant, dealer"},
      {trg:"martingale", src:"winning strategy"},
      {trg:"intermède", src:"interlude"},
      {trg:"micro-entreprise", src:"micro-enterprise"},
      {trg:"non-sens", src:"nonsense"}
    ]},

    {type:"mc",
     q:"Quel système français permet de créer facilement une petite entreprise individuelle ?",
     opts:["la micro-entreprise","la martingale","le modernisme","la mutualité"],
     ans:"la micro-entreprise",
     hint:"A legal status for very small businesses, often just one person. Created in 2009."},

    {type:"fb",
     s:"Cette décision est un {1} économique, elle va coûter des millions.",
     a:["non-sens"],
     opts:["non-sens","intermède","modernisme","décimètre"],
     hint:"Something that makes no sense. An absurdity. Borrowed from English into French.",
     sSrc:"This decision is economic {1}, it will cost millions."}
  ]
};
export default LESSON_8;
