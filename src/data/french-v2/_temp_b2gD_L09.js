// French B2 Gap Batch D Lesson 9. Business and Economy
const LESSON_9 = {id:"frv2_b2gD_l9", title:"Affaires et économie", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"Affaires et économie",
   desc:"Master vocabulary for discussing business, economic trends, and the professional world in French.",
   goals:["Learn 10 business and economy terms","Discuss economic phenomena and trends","Use professional register vocabulary"]},

  {type:"teach", trg:"le profiteur", src:"the profiteer / freeloader", pos:"noun", gender:"m",
   note:"Someone who takes unfair advantage of a situation.\nAlways negative connotation. Feminine: profiteuse.",
   example:"A: Les profiteurs de crise exploitent la peur.\nB: Ils augmentent les prix artificiellement.\nA: C'est immoral et parfois illégal.\nB: La loi devrait mieux les sanctionner.",
   exampleSrc:"A: Crisis profiteers exploit fear.\nB: They raise prices artificially.\nA: It's immoral and sometimes illegal.\nB: The law should punish them better.",
   funFact:"Not to be confused with 'profitable' (profitable). A 'profiteur' has a purely negative meaning, unlike English 'profiteer'."},

  {type:"teach", trg:"le productivisme", src:"the productivism", pos:"noun", gender:"m",
   note:"An ideology focused on maximizing production.\nOften criticized in environmental debates.",
   example:"A: Le productivisme agricole a atteint ses limites.\nB: Les sols sont épuisés.\nA: Il faut repenser notre modèle.\nB: La qualité plutôt que la quantité.",
   exampleSrc:"A: Agricultural productivism has reached its limits.\nB: The soils are depleted.\nA: We need to rethink our model.\nB: Quality over quantity.",
   funFact:"French political discourse distinguishes 'productivisme' (ideology) from 'productivité' (productivity measure). The -isme carries ideology."},

  {type:"teach", trg:"le PDG", src:"the CEO", pos:"noun", gender:"m",
   note:"Abbreviation for 'Président-Directeur Général'.\nThe head of a French company. Invariable.",
   example:"A: Le PDG a annoncé des licenciements.\nB: Combien de postes sont menacés?\nA: Trois cents dans toute l'entreprise.\nB: Les syndicats vont réagir.",
   exampleSrc:"A: The CEO announced layoffs.\nB: How many positions are at risk?\nA: Three hundred across the company.\nB: The unions will react.",
   funFact:"The French PDG combines the roles of chairman and CEO. This concentration of power is a distinctive feature of French corporate governance."},

  {type:"teach", trg:"l'administrateur", src:"the administrator / director", pos:"noun", gender:"m",
   note:"Someone who manages or directs an organization.\n'Administrateur de biens' = property manager.",
   example:"A: L'administrateur du réseau a détecté une faille.\nB: C'est grave?\nA: Oui, il faut corriger ça immédiatement.\nB: La sécurité informatique est prioritaire.",
   exampleSrc:"A: The network administrator detected a vulnerability.\nB: Is it serious?\nA: Yes, it needs to be fixed immediately.\nB: IT security is a priority.",
   funFact:"Feminine: 'administratrice'. In French law, 'administrateur judiciaire' is a court-appointed business manager."},

  {type:"mc",
   q:"Que signifie PDG en français?",
   opts:["Président-Directeur Général","Premier Délégué Général","Producteur de Données Générales","Partenaire de Direction Globale"],
   ans:"Président-Directeur Général",
   hint:"This abbreviation combines the roles of president and general director of a company."},

  {type:"teach", trg:"le consommateur", src:"the consumer", pos:"noun", gender:"m",
   note:"Someone who buys and uses goods or services.\nFeminine: consommatrice. Key economics term.",
   example:"A: Les consommateurs sont de plus en plus exigeants.\nB: Ils veulent des produits bio et locaux.\nA: Et à des prix raisonnables.\nB: C'est un équilibre difficile à trouver.",
   exampleSrc:"A: Consumers are increasingly demanding.\nB: They want organic and local products.\nA: And at reasonable prices.\nB: It's a difficult balance to find.",
   funFact:"French consumer protection law is very strong. The 'Code de la consommation' grants extensive rights to buyers."},

  {type:"teach", trg:"la division", src:"the division / department", pos:"noun", gender:"f",
   note:"A separate section of a company or organization.\nAlso: mathematical division or disagreement.",
   example:"A: Notre division a atteint ses objectifs.\nB: C'est la meilleure performance de l'année.\nA: Le directeur va nous féliciter.\nB: On mérite une prime, non?",
   exampleSrc:"A: Our division reached its targets.\nB: It's the best performance of the year.\nA: The director will congratulate us.\nB: We deserve a bonus, right?",
   funFact:"From Latin 'divisio'. In French business, 'division' is more formal than 'département'. In math, it's one of the four operations."},

  {type:"teach", trg:"l'affirmation", src:"the assertion / statement", pos:"noun", gender:"f",
   note:"A confident declaration. Also: self-assertion.\n'L'affirmation de soi' = self-confidence/assertiveness.",
   example:"A: Son affirmation a surpris tout le conseil.\nB: Personne ne s'attendait à cette annonce.\nA: C'était une stratégie audacieuse.\nB: L'avenir nous dira si elle avait raison.",
   exampleSrc:"A: Her assertion surprised the entire board.\nB: Nobody expected this announcement.\nA: It was a bold strategy.\nB: Time will tell if she was right.",
   funFact:"'L'affirmation de soi' (self-assertion) is a major concept in French personal development and professional coaching."},

  {type:"fb",
   s:"Les {1} de crise augmentent les prix des masques et du gel.",
   a:["profiteurs"],
   opts:["profiteurs","administrateurs","consommateurs","producteurs"],
   hint:"These people take unfair advantage of a crisis to make money at others' expense.",
   sSrc:"Crisis {1} raise the prices of masks and hand sanitizer."},

  {type:"teach", trg:"le modéré", src:"the moderate", pos:"noun", gender:"m",
   note:"A person with moderate, centrist views.\nUsed in politics. Also an adjective: 'un ton modéré'.",
   example:"A: Les modérés perdent du terrain aux élections.\nB: La politique se radicalise?\nA: Oui, les extrêmes attirent plus de voix.\nB: C'est inquiétant pour la démocratie.",
   exampleSrc:"A: Moderates are losing ground in elections.\nB: Is politics becoming radicalized?\nA: Yes, the extremes attract more votes.\nB: It's worrying for democracy.",
   funFact:"In the French Revolution, 'les Modérés' was a political faction. Today the term spans center-left to center-right."},

  {type:"teach", trg:"la précipitation", src:"the haste / rush", pos:"noun", gender:"f",
   note:"Excessive speed in action. Also: weather precipitation.\n'Agir sans précipitation' = to act without rushing.",
   example:"A: La précipitation a causé cette erreur.\nB: On aurait dû prendre le temps de vérifier.\nA: La pression des délais était trop forte.\nB: Il faut mieux planifier la prochaine fois.",
   exampleSrc:"A: The haste caused this error.\nB: We should have taken the time to check.\nA: The deadline pressure was too strong.\nB: We need to plan better next time.",
   funFact:"Double meaning: 'précipitations' (plural) means rainfall in weather reports. 'Précipitation' (singular, abstract) means rushing."},

  {type:"mc",
   q:"Quel terme désigne une personne qui exploite injustement une situation?",
   opts:["Un modéré","Un profiteur","Un administrateur","Un consommateur"],
   ans:"Un profiteur",
   hint:"This person takes unfair advantage of others' difficulties for personal gain. Always negative."},

  {type:"match", pairs:[
    {trg:"PDG", src:"CEO"},
    {trg:"consommateur", src:"consumer"},
    {trg:"division", src:"division"},
    {trg:"affirmation", src:"assertion"},
    {trg:"précipitation", src:"haste"}
  ]},

  {type:"fb",
   s:"L'{1} de soi est une compétence essentielle en milieu professionnel.",
   a:["affirmation"],
   opts:["affirmation","division","précipitation","administration"],
   hint:"This word combined with 'de soi' means self-assertion or assertiveness in the workplace.",
   sSrc:"Self-{1} is an essential skill in the professional environment."}
]};
export default LESSON_9;
