// French B2 Gap Batch 9. Lesson 15: Vie Professionnelle
// Professional life vocabulary

const LESSON_15 = {id:"frv2_b2g9_l15", title:"Vie Professionnelle", icon:"👔", xp:15, board:true, steps:[
  {type:"intro", title:"Vie Professionnelle",
   desc:"Master vocabulary for discussing careers, workplaces, and professional situations. Essential for B2 discussions about employment and work culture.",
   goals:["Learn 20 professional life words","Discuss careers and workplaces","Navigate professional situations"]},

  {type:"teach", trg:"le pigiste", src:"freelance journalist", pos:"noun", gender:"m",
   note:"From pige (piece rate).\nFeminine: la pigiste. Paid per article or assignment.",
   example:"A: Beaucoup de pigistes n'ont pas d'assurance maladie.\nB: La précarité du métier est un vrai problème.",
   exampleSrc:"A: Many freelancers don't have health insurance.\nB: The precariousness of the job is a real problem.",
   funFact:"Pige originally referred to the piece rate in typesetting. The word survived the technology."},

  {type:"teach", trg:"le confrère", src:"colleague (same profession)", pos:"noun", gender:"m",
   note:"Con- (with) + frère (brother). Professional peer.\nFeminine: la consoeur.",
   example:"A: Mon confrère avocat m'a recommandé un client.\nB: C'est bien d'avoir un réseau professionnel.",
   exampleSrc:"A: My fellow lawyer recommended a client to me.\nB: It's good to have a professional network.",
   funFact:"Confrère implies the same profession, not just the same company. Collègue is more general."},

  {type:"teach", trg:"l'administrateur", src:"administrator", pos:"noun", gender:"m",
   note:"From administrer + -ateur.\nFeminine: l'administratrice. Manages organizations.",
   example:"A: L'administratrice du site a bloqué les comptes frauduleux.\nB: La sécurité est sa priorité.",
   exampleSrc:"A: The site administrator blocked the fraudulent accounts.\nB: Security is her priority.",
   funFact:"Administrateur judiciaire is a court-appointed manager for bankrupt companies."},

  {type:"teach", trg:"le décorateur", src:"interior decorator", pos:"noun", gender:"m",
   note:"From décorer + -ateur.\nFeminine: la décoratrice. Designs interior spaces.",
   example:"A: La décoratrice a choisi des tons neutres.\nB: L'appartement est méconnaissable.",
   exampleSrc:"A: The decorator chose neutral tones.\nB: The apartment is unrecognizable.",
   funFact:"Décorateur d'intérieur requires no diploma. Architecte d'intérieur does. The titles differ."},

  {type:"teach", trg:"le footballeur", src:"football player", pos:"noun", gender:"m",
   note:"From football + -eur.\nFeminine: la footballeuse.",
   example:"A: Les footballeurs professionnels gagnent des millions.\nB: Mais leur carrière est courte.",
   exampleSrc:"A: Professional football players earn millions.\nB: But their career is short.",
   funFact:"Football always means soccer in French. American football is always specified as 'américain'."},

  {type:"teach", trg:"le bibliothécaire", src:"librarian", pos:"noun", gender:"m",
   note:"From bibliothèque (library) + -aire.\nSame form for masculine and feminine.",
   example:"A: Le bibliothécaire m'a aidé à trouver le livre.\nB: Il connaît chaque rayon par coeur.",
   exampleSrc:"A: The librarian helped me find the book.\nB: He knows every section by heart.",
   funFact:"Bibliothécaire comes from Greek: biblion (book) + theke (storage). A book-keeper, literally."},

  {type:"teach", trg:"la mutualiste", src:"mutual insurance member", pos:"noun", gender:"f",
   note:"From mutuelle (mutual insurance company).\nA member of a non-profit health insurer.",
   example:"A: Ma mutualiste rembourse les soins dentaires.\nB: C'est un bon complément à la Sécurité sociale.",
   exampleSrc:"A: My mutual insurance covers dental care.\nB: It's a good complement to Social Security.",
   funFact:"French healthcare is a two-tier system: Sécurité sociale + mutuelle (complementary insurance)."},

  {type:"teach", trg:"le PDG", src:"CEO", pos:"noun", gender:"m",
   note:"Président-Directeur Général.\nThe highest executive in a French company.",
   example:"A: Le PDG a démissionné après le scandale.\nB: Le conseil d'administration cherche un remplaçant.",
   exampleSrc:"A: The CEO resigned after the scandal.\nB: The board of directors is looking for a replacement.",
   funFact:"PDG combines two roles that are often separate in Anglo-Saxon companies: president and CEO."},

  {type:"teach", trg:"l'interro", src:"test, quiz (school slang)", pos:"noun", gender:"f",
   note:"Short for interrogation (test).\nVery common in student slang.",
   example:"A: On a une interro de maths demain.\nB: Je n'ai pas encore révisé!",
   exampleSrc:"A: We have a math test tomorrow.\nB: I haven't studied yet!",
   funFact:"Interro is clipped from interrogation. French students clip many words: prof, bac, fac, resto."},

  {type:"mc", q:"La différence entre confrère et collègue est:", opts:["Confrère implique la même profession, collègue le même lieu","Collègue est plus formel","Confrère est péjoratif","Aucune différence"], ans:"Confrère implique la même profession, collègue le même lieu",
   hint:"A c... shares your p.... A colleague shares your workplace."},

  {type:"teach", trg:"la micro-entreprise", src:"micro-enterprise", pos:"noun", gender:"f",
   note:"A one-person or very small business.\nSimplified French business status.",
   example:"A: Créer une micro-entreprise est simple en France.\nB: Les démarches sont en ligne.",
   exampleSrc:"A: Creating a micro-enterprise is simple in France.\nB: The procedures are online.",
   funFact:"Over 1 million French people created micro-entreprises since the status launched in 2009."},

  {type:"teach", trg:"le consommateur", src:"consumer", pos:"noun", gender:"m",
   note:"From consommer + -ateur.\nFeminine: la consommatrice.",
   example:"A: Les droits du consommateur sont protégés par la loi.\nB: On peut retourner un produit sous 14 jours.",
   exampleSrc:"A: Consumer rights are protected by law.\nB: You can return a product within 14 days.",
   funFact:"French consumer protection law gives a 14-day cooling-off period for online purchases."},

  {type:"teach", trg:"participatif", src:"participatory", pos:"adj", gender:null,
   note:"Involving active participation.\nFeminine: participative.",
   example:"A: Le management participatif implique tous les employés.\nB: Chacun donne son avis sur les décisions.",
   exampleSrc:"A: Participatory management involves all employees.\nB: Everyone gives their opinion on decisions.",
   funFact:"Le financement participatif is the French term for crowdfunding."},

  {type:"teach", trg:"le business", src:"business", pos:"noun", gender:"m",
   note:"Borrowed from English. Very common in French.\nAlternative: les affaires.",
   example:"A: Le business marche bien cette année.\nB: Le chiffre d'affaires a doublé.",
   exampleSrc:"A: Business is going well this year.\nB: Revenue has doubled.",
   funFact:"The Académie française recommends 'les affaires' but 'business' is everywhere in French."},

  {type:"fb", s:"Le {1} travaille à son compte pour plusieurs journaux.", a:["pigiste"], opts:["pigiste","PDG","bibliothécaire","footballeur"],
   hint:"A freelance journalist paid per article, not employed full-time.",
   sSrc:"The {1} works independently for several newspapers."},

  {type:"teach", trg:"le grillage", src:"wire fence, mesh", pos:"noun", gender:"m",
   note:"From grille (grid) + -age.\nMetal fencing around properties.",
   example:"A: Le grillage autour du chantier est obligatoire.\nB: C'est pour la sécurité des passants.",
   exampleSrc:"A: The wire fence around the construction site is mandatory.\nB: It's for the safety of passersby.",
   funFact:"Grillage is also the wire mesh used in chicken coops. Very practical word."},

  {type:"mc", q:"Une interro est:", opts:["Un interrogatoire de police","Un test scolaire court","Une interview journalistique","Un questionnaire médical"], ans:"Un test scolaire court",
   hint:"Student slang for interrogation (school t...). Clipped word."},

  {type:"fb", s:"Le financement {1} a permis de lancer le projet.", a:["participatif"], opts:["participatif","patrimonial","paternaliste","paroissial"],
   hint:"Crowdfunding. Where many people participate financially in a project.",
   sSrc:"{1} funding made it possible to launch the project."},

  {type:"match", pairs:[
    {trg:"le pigiste", src:"freelancer"},
    {trg:"le confrère", src:"professional peer"},
    {trg:"l'administrateur", src:"administrator"},
    {trg:"le PDG", src:"CEO"}
  ]},

  {type:"mc", q:"Le statut de micro-entreprise en France est:", opts:["Un statut pour les fonctionnaires","Réservé aux grandes entreprises","Un statut simplifié pour les indépendants","Obligatoire pour tous les commerces"], ans:"Un statut simplifié pour les indépendants",
   hint:"Micro means small. A simplified status for one-person businesses."},

  {type:"fb", s:"Ma {1} rembourse 80% des frais dentaires.", a:["mutualiste"], opts:["mutualiste","micro-entreprise","administratrice","consommatrice"],
   hint:"A member of a mutual health insurance company. Complements state coverage.",
   sSrc:"My {1} reimburses 80% of dental costs."},

  {type:"match", pairs:[
    {trg:"le bibliothécaire", src:"librarian"},
    {trg:"le décorateur", src:"decorator"},
    {trg:"le consommateur", src:"consumer"},
    {trg:"le business", src:"business"}
  ]}
]};

export default LESSON_15;
