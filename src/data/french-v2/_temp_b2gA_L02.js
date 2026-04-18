const LESSON_2 = {
  id:"frv2_b2gA_l2", title:"Democratie et citoyennete", icon:"\u{1F5F3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Democratie et citoyennete",
     desc:"Engage with the vocabulary of democratic participation, civic duty, and political discourse at the B2 level.",
     goals:["Learn 14 democracy and citizenship words","Discuss political systems with precision","Express opinions on civic responsibility"]},

    {type:"teach", trg:"la democratisation", src:"democratization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming more democratic.",
     example:"A: La democratisation de l'education a transforme la societe.\nB: Oui, tout le monde peut etudier maintenant.",
     exampleSrc:"A: The democratization of education transformed society.\nB: Yes, everyone can study now.",
     funFact:"France's education democratization began with Jules Ferry's laws in 1881-1882, making school free and mandatory."},

    {type:"teach", trg:"la desobeissance", src:"disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. Refusal to obey rules or authority.\nOften paired with 'civile'.",
     example:"A: La desobeissance civile est parfois necessaire.\nB: Oui, mais elle a un prix.",
     exampleSrc:"A: Civil disobedience is sometimes necessary.\nB: Yes, but it comes at a cost.",
     funFact:"Thoreau's concept was embraced by French thinkers. France has a long tradition of civic resistance."},

    {type:"teach", trg:"un scrutin", src:"a ballot, a vote", pos:"noun", gender:"m",
     note:"Masculine noun. The act of voting or a specific election round.",
     example:"A: Le scrutin aura lieu dimanche prochain.\nB: Il faut voter, c'est notre devoir.",
     exampleSrc:"A: The ballot will take place next Sunday.\nB: We must vote, it's our duty.",
     funFact:"France uses 'scrutin uninominal' (single-member) and 'scrutin de liste' (list voting) systems."},

    {type:"teach", trg:"un electeur", src:"a voter, an elector", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une electrice.\nSomeone registered to vote.",
     example:"A: Les electeurs se sont deplaces en masse.\nB: Le taux de participation est historique.",
     exampleSrc:"A: Voters turned out in large numbers.\nB: The turnout rate is historic.",
     funFact:"In France, you must be 18 and registered on the electoral rolls. Registration is now automatic at 18."},

    {type:"teach", trg:"le suffrage", src:"the right to vote, suffrage", pos:"noun", gender:"m",
     note:"Masculine noun. The right to vote in elections.\n'Suffrage universel' = universal suffrage.",
     example:"A: Le suffrage universel date de 1848 en France.\nB: Mais les femmes ont attendu jusqu'en 1944.",
     exampleSrc:"A: Universal suffrage dates from 1848 in France.\nB: But women waited until 1944.",
     funFact:"French women gained the vote in 1944, much later than in many other Western countries."},

    {type:"mc",
     q:"Quel mot designe le processus de rendre quelque chose plus democratique ?",
     opts:["la democratisation","la desobeissance","le suffrage","le scrutin"],
     ans:"la democratisation",
     hint:"A noun built from the verb 'democratiser'. The -isation suffix indicates a process."},

    {type:"teach", trg:"une reforme", src:"a reform", pos:"noun", gender:"f",
     note:"Feminine noun. A significant change to improve a system or institution.",
     example:"A: Cette reforme de l'education est ambitieuse.\nB: Esperons qu'elle sera efficace.",
     exampleSrc:"A: This education reform is ambitious.\nB: Let's hope it will be effective.",
     funFact:"France has a love-hate relationship with reforms. Each new president promises 'la reforme' as a priority."},

    {type:"teach", trg:"le mandat", src:"the term of office, the mandate", pos:"noun", gender:"m",
     note:"Masculine noun. A period of elected office, or authorization to act.",
     example:"A: Son mandat expire l'annee prochaine.\nB: Va-t-il se representer ?",
     exampleSrc:"A: His term expires next year.\nB: Will he run again?",
     funFact:"The French presidential mandate was reduced from 7 years to 5 in 2000. Called 'le quinquennat'."},

    {type:"teach", trg:"la souverainete", src:"sovereignty", pos:"noun", gender:"f",
     note:"Feminine noun. Supreme power and authority of a state.",
     example:"A: La souverainete nationale est sacree.\nB: Mais la cooperation internationale est aussi importante.",
     exampleSrc:"A: National sovereignty is sacred.\nB: But international cooperation is also important.",
     funFact:"Article 3 of the French Constitution: 'La souverainete nationale appartient au peuple.'"},

    {type:"fb",
     s:"Le {1} aura lieu le premier tour dimanche et le second tour deux semaines plus tard.",
     a:["scrutin"],
     opts:["scrutin","suffrage","mandat","electeur"],
     hint:"The word for a specific round of voting or an election event.",
     sSrc:"The {1} will take place first round Sunday and second round two weeks later."},

    {type:"teach", trg:"un amendement", src:"an amendment", pos:"noun", gender:"m",
     note:"Masculine noun. A proposed change to a law or bill.",
     example:"A: L'amendement a ete adopte par l'Assemblee.\nB: Il modifie l'article 3 du projet de loi.",
     exampleSrc:"A: The amendment was adopted by the Assembly.\nB: It modifies article 3 of the bill.",
     funFact:"French MPs propose thousands of amendments each year. Some laws receive over 1,000 amendments during debate."},

    {type:"teach", trg:"un partisan", src:"a supporter, a partisan", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une partisane.\nA strong supporter of a cause or person.",
     example:"A: C'est un partisan de la reforme.\nB: Oui, il la defend avec conviction.",
     exampleSrc:"A: He's a supporter of the reform.\nB: Yes, he defends it with conviction.",
     funFact:"During WWII, 'les partisans' referred to resistance fighters. The word carries heroic overtones."},

    {type:"teach", trg:"le decret", src:"the decree", pos:"noun", gender:"m",
     note:"Masculine noun. An official order with legal force, issued by the executive.",
     example:"A: Le president a signe le decret ce matin.\nB: Il entre en vigueur immediatement.",
     exampleSrc:"A: The president signed the decree this morning.\nB: It takes effect immediately.",
     funFact:"French presidents can govern by decree in emergencies. Article 16 gives extraordinary powers."},

    {type:"mc",
     q:"Quel mot designe la duree pendant laquelle un elu exerce ses fonctions ?",
     opts:["le mandat","le scrutin","le decret","l'amendement"],
     ans:"le mandat",
     hint:"The fixed term during which an elected official holds power. In France the presidential term lasts five years."},

    {type:"teach", trg:"le debat", src:"the debate", pos:"noun", gender:"m",
     note:"Masculine noun. A formal discussion of opposing views.",
     example:"A: Le debat a dure trois heures.\nB: Les candidats ont echange des arguments solides.",
     exampleSrc:"A: The debate lasted three hours.\nB: The candidates exchanged solid arguments.",
     funFact:"The French love debate. 'Le Grand Debat' is a national tradition before presidential elections."},

    {type:"fb",
     s:"La {1} nationale appartient au peuple selon la Constitution.",
     a:["souverainete"],
     opts:["souverainete","democratisation","desobeissance","reforme"],
     hint:"The supreme power of a state over its own affairs. A constitutional concept.",
     sSrc:"National {1} belongs to the people according to the Constitution."},

    {type:"match", pairs:[
      {trg:"electeur", src:"voter"},
      {trg:"amendement", src:"amendment"},
      {trg:"decret", src:"decree"},
      {trg:"partisan", src:"supporter"},
      {trg:"suffrage", src:"right to vote"}
    ]},

    {type:"mc",
     q:"Quel terme designe le refus delibere d'obeir a une autorite ?",
     opts:["la desobeissance","la souverainete","le suffrage","la reforme"],
     ans:"la desobeissance",
     hint:"Often paired with 'civile'. A form of protest through non-compliance."}
  ]
};
export default LESSON_2;
