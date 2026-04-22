// French B2 Gap Lesson 7. Justice and Law
const LESSON_7 = {id:"frv2_b2g5_l7", title:"Justice et droit", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Justice et droit",
   desc:"Build vocabulary for discussing legal matters, justice, and ethical questions at the B2 level.",
   goals:["Learn 15 key words about justice and law","Discuss rights, offenses, and legal procedures","Use legal register vocabulary"]},

  {type:"teach", trg:"l'injure", src:"the insult / verbal abuse", pos:"noun", gender:"f",
   note:"A verbal offense. In French law, a criminal offense.\nMore severe than a simple insult.",
   example:"A: L'injure publique est punissable par la loi.\nB: Même sur les réseaux sociaux?\nA: Oui, Internet n'est pas une zone de non-droit.\nB: Les amendes peuvent être élevées.",
   exampleSrc:"A: Public verbal abuse is punishable by law.\nB: Even on social media?\nA: Yes, the Internet is not a lawless zone.\nB: Fines can be high.",
   funFact:"From Latin 'injuria' (wrongdoing). In French law, 'injure' is distinct from 'diffamation' (defamation)."},

  {type:"teach", trg:"injurieux", src:"insulting / abusive", pos:"adj", gender:null,
   note:"Containing insults. Describes language or behavior.\nFeminine: injurieuse.",
   example:"A: Ces propos sont injurieux.\nB: Il devrait s'excuser.\nA: Ou être poursuivi en justice.\nB: La liberté d'expression a des limites.",
   exampleSrc:"A: These remarks are insulting.\nB: He should apologize.\nA: Or be taken to court.\nB: Freedom of expression has limits.",
   funFact:"From 'injure' + '-ieux'. The suffix '-ieux' creates adjectives from nouns (like 'curieux' from 'cure')."},

  {type:"teach", trg:"imputable", src:"attributable / chargeable", pos:"adj", gender:null,
   note:"Can be attributed to someone as their responsibility.\nLegal and formal register.",
   example:"A: Cette erreur est imputable au directeur.\nB: Il en assume la responsabilité?\nA: Pas encore, il nie les faits.\nB: Les preuves sont pourtant accablantes.",
   exampleSrc:"A: This error is attributable to the director.\nB: Does he take responsibility?\nA: Not yet, he denies the facts.\nB: The evidence is overwhelming though.",
   funFact:"From Latin 'imputare' (to charge to one's account). The verb 'imputer' means to attribute blame."},

  {type:"teach", trg:"l'insurgé", src:"the insurgent / rebel", pos:"noun", gender:"m",
   note:"A person who rises up against authority.\nFeminine: insurgée. Historical and political term.",
   example:"A: Les insurgés ont pris le contrôle de la ville.\nB: L'armée va-t-elle intervenir?\nA: Des négociations sont en cours.\nB: Espérons une résolution pacifique.",
   exampleSrc:"A: The insurgents took control of the city.\nB: Will the army intervene?\nA: Negotiations are underway.\nB: Let's hope for a peaceful resolution.",
   funFact:"From Latin 'insurgere' (to rise up). Victor Hugo's poem 'Les Insurgés' celebrates revolutionary spirit."},

  {type:"teach", trg:"indiscutable", src:"indisputable / unquestionable", pos:"adj", gender:null,
   note:"Cannot be questioned or challenged.\nUsed for facts, evidence, and authority.",
   example:"A: Sa compétence est indiscutable.\nB: Oui, c'est le meilleur dans son domaine.\nA: Personne ne remet en question son expertise.\nB: Ses résultats parlent d'eux-mêmes.",
   exampleSrc:"A: His competence is indisputable.\nB: Yes, he is the best in his field.\nA: Nobody questions his expertise.\nB: His results speak for themselves.",
   funFact:"From 'in-' (not) + 'discutable' (debatable). The adverb 'indiscutablement' means 'unquestionably'."},

  {type:"teach", trg:"inspecter", src:"to inspect / to examine", pos:"verb", gender:null,
   note:"To examine carefully and officially.\nUsed for buildings, food, and legal compliance.",
   example:"A: Les inspecteurs vont inspecter le restaurant demain.\nB: Tout est en règle?\nA: Je l'espère. On a tout nettoyé.\nB: La propreté est le critère numéro un.",
   exampleSrc:"A: The inspectors will inspect the restaurant tomorrow.\nB: Is everything in order?\nA: I hope so. We cleaned everything.\nA: Cleanliness is the number one criterion.",
   funFact:"From Latin 'inspectare' (to look into). An 'inspecteur' is an inspector; the noun follows naturally."},

  {type:"teach", trg:"l'infidélité", src:"the infidelity / unfaithfulness", pos:"noun", gender:"f",
   note:"Betrayal of trust, especially in relationships.\nAlso used for political or professional disloyalty.",
   example:"A: L'infidélité a détruit leur couple.\nB: La confiance est difficile à reconstruire.\nA: C'est la base de toute relation.\nB: Oui, sans confiance, rien ne tient.",
   exampleSrc:"A: Infidelity destroyed their couple.\nB: Trust is hard to rebuild.\nA: It's the foundation of every relationship.\nB: Yes, without trust, nothing holds.",
   funFact:"From Latin 'infidelitas'. In French, also used for 'infidélité à ses principes' (betraying one's principles)."},

  {type:"teach", trg:"infondé", src:"unfounded / groundless", pos:"adj", gender:null,
   note:"Without basis or evidence. Describes accusations or claims.\nFeminine: infondée.",
   example:"A: Ces accusations sont totalement infondées.\nB: Il n'y a aucune preuve?\nA: Aucune. C'est de la diffamation.\nB: Il devrait porter plainte pour faux témoignage.",
   exampleSrc:"A: These accusations are completely unfounded.\nB: There is no evidence?\nA: None. It's defamation.\nB: He should file a complaint for false testimony.",
   funFact:"From 'in-' (not) + 'fondé' (founded). The opposite of 'bien fondé' (well-founded) from lesson 2."},

  {type:"teach", trg:"infâme", src:"infamous / vile", pos:"adj", gender:null,
   note:"Extremely wicked or disgraceful.\nA strong, literary word. Same form for both genders.",
   example:"A: Ce crime est infâme.\nB: Les victimes méritent justice.\nA: Le procès commence la semaine prochaine.\nB: J'espère que la sentence sera sévère.",
   exampleSrc:"A: This crime is infamous.\nB: The victims deserve justice.\nA: The trial begins next week.\nB: I hope the sentence will be severe.",
   funFact:"From Latin 'infamis' (of ill fame). Voltaire's famous battle cry was 'Ecrasez l'infâme!' (Crush the infamous thing!)."},

  {type:"mc", q:"Quel mot désigne une offense verbale punissable par la loi?",
   opts:["L'injure","L'insurgé","L'infidélité","L'infâme"],
   ans:"L'injure",
   hint:"A verbal attack that French law considers a criminal offense"},

  {type:"fb", s:"Ces accusations sont totalement {1}, il n'y a aucune preuve.",
   a:["infondées"], opts:["infondées","indiscutables","injurieuses","imputables"],
   hint:"Without any basis or evidence to support them",
   sSrc:"These accusations are completely {1}, there is no evidence."},

  {type:"teach", trg:"l'incognito", src:"incognito", pos:"noun", gender:"m",
   note:"The state of hiding one's identity.\nOften in 'garder l'incognito' or 'voyager incognito'.",
   example:"A: La star voyage incognito.\nB: Personne ne la reconnaît?\nA: Non, elle porte des lunettes noires.\nB: L'incognito est essentiel pour les célébrités.",
   exampleSrc:"A: The star travels incognito.\nB: Nobody recognizes her?\nA: No, she wears dark glasses.\nB: Being incognito is essential for celebrities.",
   funFact:"From Italian/Latin 'incognitus' (unknown). Used both as a noun and an adverb in French."},

  {type:"teach", trg:"l'issue", src:"the outcome / exit", pos:"noun", gender:"f",
   note:"The way out, the result, or the ending.\n'A l'issue de' means 'at the end of'.",
   example:"A: Quelle sera l'issue de ce procès?\nB: Difficile à dire, les deux parties sont déterminées.\nA: Le verdict est attendu pour quand?\nB: A l'issue des délibérations, dans quelques jours.",
   exampleSrc:"A: What will be the outcome of this trial?\nB: Hard to say, both sides are determined.\nA: When is the verdict expected?\nB: At the end of deliberations, in a few days.",
   funFact:"From Latin 'exitus' (a going out). 'Issue de secours' means emergency exit."},

  {type:"teach", trg:"l'inscrit", src:"the registered person / enrollee", pos:"noun", gender:"m",
   note:"Someone officially registered. Feminine: inscrite.\nUsed for members, voters, and students.",
   example:"A: Le nombre d'inscrits aux élections a augmenté.\nB: C'est encourageant pour la démocratie.\nA: Plus de jeunes se sont inscrits.\nB: Leur participation est essentielle.",
   exampleSrc:"A: The number of registered voters increased.\nB: That's encouraging for democracy.\nA: More young people registered.\nB: Their participation is essential.",
   funFact:"Past participle of 's'inscrire' (to register). 'Inscription' (registration) is the noun form."},

  {type:"mc", q:"Quel adjectif signifie 'que l'on ne peut pas contester'?",
   opts:["Infâme","Indiscutable","Infondé","Injurieux"],
   ans:"Indiscutable",
   hint:"Something so clear and obvious that no one can argue against it"},

  {type:"fb", s:"Cette erreur est {1} au directeur, c'est sa responsabilité.",
   a:["imputable"], opts:["imputable","infâme","infondé","injurieux"],
   hint:"Can be attributed to someone as their fault or responsibility",
   sSrc:"This error is {1} to the director, it is his responsibility."},

  {type:"match", pairs:[
    {trg:"l'injure", src:"insult / verbal abuse"},
    {trg:"infondé", src:"unfounded"},
    {trg:"l'insurgé", src:"insurgent"},
    {trg:"l'issue", src:"outcome / exit"},
    {trg:"l'incognito", src:"incognito"}
  ]},

  {type:"mc", q:"Que signifie 'à l'issue de'?",
   opts:["Au milieu de","A côté de","A la fin de","Au début de"],
   ans:"A la fin de",
   hint:"This prepositional phrase indicates the conclusion or end of a process"},

  {type:"fb", s:"Les inspecteurs vont {1} le restaurant pour vérifier les normes d'hygiène.",
   a:["inspecter"], opts:["inspecter","injurier","imputer","insurger"],
   hint:"To examine officially and carefully to check compliance",
   sSrc:"The inspectors will {1} the restaurant to check hygiene standards."},

  {type:"drag_fill", s:"Les propos {1} sur Internet sont {2} par la loi française.",
   blanks:{"1":"injurieux","2":"punis"},
   pool:["injurieux","punis","infondés","encouragés"],
   hint:"Insulting remarks online are penalized under French law"},

  {type:"mc", q:"Quel mot désigne une personne officiellement enregistrée?",
   opts:["Un insurgé","Un inspecteur","Un incognito","Un inscrit"],
   ans:"Un inscrit",
   hint:"Someone who has formally registered, for voting, school, or membership"}
]};
export default LESSON_7;
