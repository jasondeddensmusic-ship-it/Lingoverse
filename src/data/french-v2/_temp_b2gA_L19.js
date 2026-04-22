const LESSON_19 = {
  id:"frv2_b2gA_l19", title:"Economie et finance", icon:"\u{1F4B6}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economie et finance",
     desc:"Navigate economic discussions with confidence. From taxation to market dynamics, build your B2 financial vocabulary.",
     goals:["Learn 14 economics and finance words","Discuss economic policy and trends","Use financial vocabulary precisely"]},

    {type:"teach", trg:"le deficit", src:"the deficit", pos:"noun", gender:"m",
     note:"Masculine noun. When spending exceeds income.\n'Deficit budgetaire' = budget deficit.",
     example:"A: Le deficit budgetaire a atteint un record.\nB: Les depenses publiques sont trop elevees.",
     exampleSrc:"A: The budget deficit has reached a record.\nB: Public spending is too high.",
     funFact:"France's deficit is a perennial political issue. The EU's 3% GDP deficit rule is a constant tension point."},

    {type:"teach", trg:"la fiscalite", src:"taxation, the tax system", pos:"noun", gender:"f",
     note:"Feminine noun. The system of taxation.\n'Pression fiscale' = tax burden.",
     example:"A: La fiscalite francaise est complexe.\nB: Il y a plus de 200 taxes differentes.",
     exampleSrc:"A: The French tax system is complex.\nB: There are over 200 different taxes.",
     funFact:"France has one of the highest tax rates in Europe. 'Les impots' are a national obsession and complaint."},

    {type:"teach", trg:"l'epargne", src:"savings", pos:"noun", gender:"f",
     note:"Feminine noun. Money saved rather than spent.\n'Livret d'epargne' = savings account.",
     example:"A: L'epargne des Francais atteint des sommets.\nB: Ils epargnent en moyenne 15% de leurs revenus.",
     exampleSrc:"A: French savings are reaching record highs.\nB: They save an average of 15% of their income.",
     funFact:"The French are Europe's champion savers. The 'Livret A' savings account has over 55 million holders."},

    {type:"teach", trg:"la conjoncture", src:"the economic situation", pos:"noun", gender:"f",
     note:"Feminine noun. The current state of the economy.\n'Conjoncture favorable' = favorable economic climate.",
     example:"A: La conjoncture economique est incertaine.\nB: Les entreprises hesitent a investir.",
     exampleSrc:"A: The economic situation is uncertain.\nB: Companies are hesitant to invest.",
     funFact:"'L'INSEE' publishes regular 'notes de conjoncture' analyzing France's economic health. Widely followed."},

    {type:"teach", trg:"le patrimoine", src:"the assets, the estate", pos:"noun", gender:"m",
     note:"Masculine noun. Total assets owned by a person or family.\nAlso: cultural heritage.",
     example:"A: Son patrimoine immobilier est considerable.\nB: Il possede trois appartements a Paris.",
     exampleSrc:"A: His real estate assets are considerable.\nB: He owns three apartments in Paris.",
     funFact:"'L'impot sur la fortune immobiliere' (IFI) taxes large real estate holdings. Formerly the famous 'ISF'."},

    {type:"mc",
     q:"Quel mot designe l'ensemble du systeme d'imposition d'un pays ?",
     opts:["la fiscalite","l'epargne","le deficit","la conjoncture"],
     ans:"la fiscalite",
     hint:"The tax system as a whole. France has over 200 different taxes."},

    {type:"teach", trg:"la TVA", src:"VAT (value-added tax)", pos:"noun", gender:"f",
     note:"Feminine acronym. Taxe sur la Valeur Ajoutee.\nThe main consumption tax. Standard rate: 20%.",
     example:"A: La TVA est de 20% sur la plupart des produits.\nB: Mais seulement 5,5% sur l'alimentation.",
     exampleSrc:"A: VAT is 20% on most products.\nB: But only 5.5% on food.",
     funFact:"France invented the TVA in 1954. It was so successful that almost every country in the world adopted it."},

    {type:"teach", trg:"le taux", src:"the rate", pos:"noun", gender:"m",
     note:"Masculine noun. A rate or ratio.\n'Taux d'interet' = interest rate. 'Taux de chomage' = unemployment rate.",
     example:"A: Le taux de chomage a baisse ce trimestre.\nB: C'est une bonne nouvelle pour l'economie.",
     exampleSrc:"A: The unemployment rate fell this quarter.\nB: That's good news for the economy.",
     funFact:"'Le taux directeur' of the European Central Bank is watched obsessively by French economists."},

    {type:"teach", trg:"la bulle", src:"the bubble (economic)", pos:"noun", gender:"f",
     note:"Feminine noun. An unsustainable economic inflation.\n'Bulle immobiliere' = housing bubble.",
     example:"A: Les experts craignent une bulle immobiliere.\nB: Les prix sont deconnectes de la realite.",
     exampleSrc:"A: Experts fear a housing bubble.\nB: Prices are disconnected from reality.",
     funFact:"The most famous French bubble was the 'Mississippi Bubble' of 1720, which ruined half the French aristocracy."},

    {type:"fb",
     s:"L'{1} des Francais atteint des niveaux record depuis la crise.",
     a:["epargne"],
     opts:["epargne","deficit","fiscalite","conjoncture"],
     hint:"Money saved rather than spent. The French save about 15% of their income.",
     sSrc:"French {1} have reached record levels since the crisis."},

    {type:"teach", trg:"la croissance", src:"economic growth", pos:"noun", gender:"f",
     note:"Feminine noun. An increase in economic output.\n'Taux de croissance' = growth rate.",
     example:"A: La croissance est de 2% cette annee.\nB: C'est mieux que l'annee derniere.",
     exampleSrc:"A: Growth is 2% this year.\nB: That's better than last year.",
     funFact:"'La croissance verte' (green growth) is a major policy goal. Can the economy grow without destroying the planet?"},

    {type:"teach", trg:"l'inflation", src:"inflation", pos:"noun", gender:"f",
     note:"Feminine noun. A general rise in prices.\n'Inflation galopante' = runaway inflation.",
     example:"A: L'inflation grignote le pouvoir d'achat.\nB: Les salaires ne suivent pas.",
     exampleSrc:"A: Inflation is eroding purchasing power.\nB: Wages aren't keeping up.",
     funFact:"'Le pouvoir d'achat' (purchasing power) is the top concern of French voters in nearly every election."},

    {type:"teach", trg:"le redressement", src:"the recovery, the turnaround", pos:"noun", gender:"m",
     note:"Masculine noun. Getting back on track after decline.\n'Redressement fiscal' = tax audit/adjustment.",
     example:"A: Le redressement de l'entreprise a pris trois ans.\nB: Mais maintenant elle est rentable.",
     exampleSrc:"A: The company's turnaround took three years.\nB: But now it's profitable.",
     funFact:"'Redressement judiciaire' is bankruptcy protection allowing a company to restructure. Different from 'liquidation'."},

    {type:"mc",
     q:"Quel mot designe une hausse generale et continue des prix ?",
     opts:["la bulle","l'inflation","la croissance","le deficit"],
     ans:"l'inflation",
     hint:"When prices rise across the economy. Erodes purchasing power."},

    {type:"teach", trg:"la subvention", src:"the subsidy, the grant", pos:"noun", gender:"f",
     note:"Feminine noun. Financial aid from the government.\n'Subventionner' = to subsidize.",
     example:"A: L'association a recu une subvention de la mairie.\nB: Cela va financer le nouveau projet.",
     exampleSrc:"A: The association received a grant from the town hall.\nB: This will fund the new project.",
     funFact:"France is one of Europe's biggest users of subventions. Agriculture, culture, and sport all receive major state funding."},

    {type:"fb",
     s:"La {1} economique est de 2% cette annee, un signe encourageant.",
     a:["croissance"],
     opts:["croissance","inflation","conjoncture","subvention"],
     hint:"Increase in economic output. The percentage by which the economy grows.",
     sSrc:"Economic {1} is 2% this year, an encouraging sign."},

    {type:"match", pairs:[
      {trg:"deficit", src:"deficit"},
      {trg:"TVA", src:"VAT"},
      {trg:"taux", src:"rate"},
      {trg:"bulle", src:"economic bubble"},
      {trg:"subvention", src:"subsidy"}
    ]},

    {type:"mc",
     q:"Quel mot designe le retour a la normale apres une periode de difficulte ?",
     opts:["la conjoncture","le patrimoine","le redressement","le deficit"],
     ans:"le redressement",
     hint:"A recovery or turnaround. Getting back on track after a decline."}
  ]
};
export default LESSON_19;
