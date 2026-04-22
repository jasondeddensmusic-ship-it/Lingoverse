// French B2 Gap Batch 9. Lesson 6: Économie et Entreprise
// Economy and business vocabulary

const LESSON_6 = {id:"frv2_b2g9_l6", title:"Économie et Entreprise", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"Économie et Entreprise",
   desc:"Learn advanced business and economic vocabulary for B2-level discussions about companies, finance, and the modern economy.",
   goals:["Learn 20 business and economy words","Discuss corporate structures","Analyze economic trends"]},

  {type:"teach", trg:"le PDG", src:"CEO", pos:"noun", gender:"m",
   note:"Président-Directeur Général.\nThe head of a French company. Feminine: la PDG.",
   example:"A: Le PDG a annoncé la restructuration.\nB: Les employés sont inquiets.",
   exampleSrc:"A: The CEO announced the restructuring.\nB: The employees are worried.",
   funFact:"Unlike English CEO, the French PDG combines president and director general in one title."},

  {type:"teach", trg:"le décorateur", src:"decorator", pos:"noun", gender:"m",
   note:"From décorer (to decorate) + -ateur.\nFeminine: la décoratrice.",
   example:"A: Le décorateur a transformé l'appartement.\nB: Je ne reconnais plus les lieux!",
   exampleSrc:"A: The decorator transformed the apartment.\nB: I don't recognize the place anymore!",
   funFact:"Décorateur d'intérieur is the full title. In France, it is a regulated profession."},

  {type:"teach", trg:"le consommateur", src:"consumer", pos:"noun", gender:"m",
   note:"From consommer (to consume) + -ateur.\nFeminine: la consommatrice.",
   example:"A: Le consommateur est de plus en plus exigeant.\nB: La qualité est devenue prioritaire.",
   exampleSrc:"A: The consumer is increasingly demanding.\nB: Quality has become a priority.",
   funFact:"Association de consommateurs (consumer association) is very powerful in France."},

  {type:"teach", trg:"participatif", src:"participatory", pos:"adj", gender:null,
   note:"From participer (to participate) + -atif.\nFeminine: participative.",
   example:"A: Le budget participatif permet aux citoyens de décider.\nB: C'est une forme de démocratie directe.",
   exampleSrc:"A: The participatory budget lets citizens decide.\nB: It's a form of direct democracy.",
   funFact:"Budget participatif was pioneered in Porto Alegre, Brazil, and adopted by many French cities."},

  {type:"teach", trg:"la micro-entreprise", src:"micro-enterprise", pos:"noun", gender:"f",
   note:"Micro- (small) + entreprise (business).\nA very small business, often one person.",
   example:"A: Elle a créé sa micro-entreprise l'an dernier.\nB: Le statut est simplifié pour les indépendants.",
   exampleSrc:"A: She created her micro-enterprise last year.\nB: The status is simplified for independents.",
   funFact:"The French micro-entreprise status (auto-entrepreneur) was created in 2009 to simplify freelancing."},

  {type:"teach", trg:"patrimonial", src:"patrimonial, relating to heritage", pos:"adj", gender:null,
   note:"From patrimoine (heritage, assets).\nFeminine: patrimoniale. Plural: patrimoniaux.",
   example:"A: La gestion patrimoniale est essentielle.\nB: Il faut protéger nos biens immobiliers.",
   exampleSrc:"A: Asset management is essential.\nB: We must protect our real estate holdings.",
   funFact:"Patrimoine in French covers both financial assets and cultural heritage. Double meaning."},

  {type:"teach", trg:"l'accélération", src:"acceleration", pos:"noun", gender:"f",
   note:"From accélérer (to accelerate) + -ation.\nIncrease in speed or rate of change.",
   example:"A: L'accélération de la transformation numérique surprend.\nB: Les entreprises doivent s'adapter vite.",
   exampleSrc:"A: The acceleration of digital transformation is surprising.\nB: Companies must adapt quickly.",
   funFact:"Accélération has two C's in French, unlike English which has two C's and one L."},

  {type:"teach", trg:"la division", src:"division (organizational)", pos:"noun", gender:"f",
   note:"A section or department of a company.\nAlso mathematical division.",
   example:"A: La division marketing a présenté son rapport.\nB: Les chiffres sont encourageants.",
   exampleSrc:"A: The marketing division presented its report.\nB: The numbers are encouraging.",
   funFact:"Division in French covers company departments, military units, and math. Same word for all."},

  {type:"teach", trg:"le pilier", src:"pillar, mainstay", pos:"noun", gender:"m",
   note:"A supporting column, or key element.\nFigurative: un pilier de l'entreprise = a mainstay.",
   example:"A: Elle est un pilier de cette équipe.\nB: Sans elle, rien ne fonctionnerait.",
   exampleSrc:"A: She is a pillar of this team.\nB: Without her, nothing would work.",
   funFact:"Un pilier de bar is a humorous expression for someone who spends too much time at the bar."},

  {type:"mc", q:"PDG signifie:", opts:["Président-Directeur Général","Petit Directeur de Groupe","Patron De Gestion","Premier Directeur Gouvernemental"], ans:"Président-Directeur Général",
   hint:"The French equivalent of CEO. Three words, all starting with P-D-G."},

  {type:"teach", trg:"la globalité", src:"totality, entirety", pos:"noun", gender:"f",
   note:"From global (overall) + -ité.\nThe whole picture, not just parts.",
   example:"A: Il faut considérer le problème dans sa globalité.\nB: On ne peut pas traiter les symptômes isolément.",
   exampleSrc:"A: We must consider the problem in its entirety.\nB: We can't treat the symptoms in isolation.",
   funFact:"Dans sa globalité is a key B2 expression meaning 'as a whole, in its totality'."},

  {type:"teach", trg:"matériellement", src:"materially, practically", pos:"adv", gender:null,
   note:"From matériel (material) + -ment.\nIn concrete, practical terms.",
   example:"A: C'est matériellement impossible dans ce délai.\nB: Il faudrait le double du budget.",
   exampleSrc:"A: It's materially impossible in this timeframe.\nB: We'd need double the budget.",
   funFact:"Matériellement often means 'practically speaking' rather than 'regarding physical materials'."},

  {type:"teach", trg:"l'agressivité", src:"aggressiveness", pos:"noun", gender:"f",
   note:"From agressif (aggressive) + -ité.\nHostile behavior or competitive intensity.",
   example:"A: L'agressivité de la concurrence nous oblige à innover.\nB: Le marché est impitoyable.",
   exampleSrc:"A: The aggressiveness of competition forces us to innovate.\nB: The market is ruthless.",
   funFact:"In business French, agressivité commerciale is a positive trait meaning competitive drive."},

  {type:"teach", trg:"le best-seller", src:"bestseller", pos:"noun", gender:"m",
   note:"Borrowed directly from English.\nPlural: des best-sellers. Very common in French.",
   example:"A: Son roman est devenu un best-seller.\nB: Il s'est vendu à un million d'exemplaires.",
   exampleSrc:"A: Her novel became a bestseller.\nB: It sold a million copies.",
   funFact:"French tried 'meilleure vente' as a replacement but best-seller won. English borrowings persist."},

  {type:"fb", s:"L'{1} numérique oblige les entreprises à se transformer.", a:["accélération"], opts:["accélération","division","globalité","micro-entreprise"],
   hint:"The increasing speed of digital change. From accélérer, to speed up.",
   sSrc:"The digital {1} forces companies to transform."},

  {type:"tip", title:"French Business Anglicisms",
   text:"French business language borrows heavily from English:\n\nbest-seller, business, marketing, management, start-up, deadline, brainstorming, feedback\n\nThe Académie française fights these borrowings but loses most battles. In practice, French professionals mix both languages freely.\n\nSome words changed meaning: un planning in French means a schedule (not the act of planning).",
   deepDive:{title:"The Académie vs English",
    text:"The Académie française proposes French replacements: courriel for email, logiciel for software, ordinateur for computer. Some succeed (ordinateur is universal), others fail (email is still common alongside courriel). Business French remains the most anglicized register."}},

  {type:"mc", q:"'Considérer dans sa globalité' signifie:", opts:["Ignorer les détails","Voir l'ensemble du problème","Se concentrer sur un aspect","Diviser en parties"], ans:"Voir l'ensemble du problème",
   hint:"Globalité means the totality. To see the whole picture, not just parts."},

  {type:"fb", s:"Elle est un {1} de l'entreprise depuis vingt ans.", a:["pilier"], opts:["pilier","PDG","best-seller","décorateur"],
   hint:"A supporting column, metaphorically. Someone essential to the organization.",
   sSrc:"She has been a {1} of the company for twenty years."},

  {type:"match", pairs:[
    {trg:"le PDG", src:"CEO"},
    {trg:"le consommateur", src:"consumer"},
    {trg:"la micro-entreprise", src:"micro-enterprise"},
    {trg:"la division", src:"division"}
  ]},

  {type:"mc", q:"Le budget participatif permet:", opts:["Aux employés de quitter l'entreprise","Aux banques de décider","Aux citoyens de choisir comment dépenser","Au PDG de réduire les coûts"], ans:"Aux citoyens de choisir comment dépenser",
   hint:"Participatif means people participate. They decide how public money is spent."},

  {type:"fb", s:"C'est {1} impossible de finir en une journée.", a:["matériellement"], opts:["matériellement","passionnément","partiellement","patrimonial"],
   hint:"In practical, concrete terms. Not theoretically, but in reality.",
   sSrc:"It is {1} impossible to finish in one day."},

  {type:"match", pairs:[
    {trg:"l'accélération", src:"acceleration"},
    {trg:"la globalité", src:"totality"},
    {trg:"le pilier", src:"pillar"},
    {trg:"l'agressivité", src:"aggressiveness"}
  ]}
]};

export default LESSON_6;
