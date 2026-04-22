const LESSON_1 = {
  id:"frv2_b2g2_l1", title:"Medias et societe", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medias et societe",
     desc:"Explore the vocabulary of media, online culture, and public discourse. From blogs to best-sellers, from anonymity to digital identity.",
     goals:["Learn 20 media and society terms","Discuss digital culture in French","Express opinions about public discourse"]},

    {type:"teach", trg:"un best-seller", src:"a best-seller", pos:"noun", gender:"m",
     note:"Masculine noun. An English borrowing widely used in French publishing.",
     example:"A: Son dernier roman est un best-seller.\nB: Il s'est vendu a plus d'un million d'exemplaires.",
     exampleSrc:"A: His latest novel is a best-seller.\nB: It sold over a million copies.",
     funFact:"The Academie francaise recommends 'succes de librairie' but everyone says best-seller anyway."},

    {type:"teach", trg:"la blogosphere", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and online commentary.",
     example:"A: La blogosphere s'est enflammee apres cette declaration.\nB: Les commentaires fusent de partout.",
     exampleSrc:"A: The blogosphere caught fire after that statement.\nB: Comments are pouring in from everywhere.",
     funFact:"French was one of the top languages for blogging in the 2000s. Paris had a vibrant blog scene."},

    {type:"teach", trg:"un communique", src:"a press release, a communique", pos:"noun", gender:"m",
     note:"Masculine noun. An official announcement or statement to the media.",
     example:"A: Le ministere a publie un communique de presse.\nB: Que disent-ils exactement ?",
     exampleSrc:"A: The ministry issued a press release.\nB: What exactly do they say?",
     funFact:"From 'communiquer' (to communicate). Diplomatic communiques shaped world politics for centuries."},

    {type:"teach", trg:"anonyme", src:"anonymous", pos:"adj", gender:null,
     note:"Adjective. Having an unknown identity. Same form for both genders.",
     example:"A: L'auteur de cette lettre reste anonyme.\nB: C'est etrange, pourquoi se cacher ?",
     exampleSrc:"A: The author of this letter remains anonymous.\nB: That's strange, why hide?",
     funFact:"'Les Alcooliques anonymes' is the French name for AA. The adjective comes from Greek 'anonymos'."},

    {type:"teach", trg:"une encyclopedie", src:"an encyclopedia", pos:"noun", gender:"f",
     note:"Feminine noun. A comprehensive reference work covering all knowledge.",
     example:"A: Wikipedia est l'encyclopedie la plus consultee au monde.\nB: Mais il faut verifier les sources.",
     exampleSrc:"A: Wikipedia is the most consulted encyclopedia in the world.\nB: But you need to check the sources.",
     funFact:"Diderot's 'Encyclopedie' (1751-1772) was a key text of the Enlightenment and helped spark the French Revolution."},

    {type:"mc",
     q:"Quel mot designe un article officiel publie par une institution ?",
     opts:["un communique","une encyclopedie","un best-seller","un blog"],
     ans:"un communique",
     hint:"Think of an official announcement from a ministry or organization."},

    {type:"teach", trg:"un abonne", src:"a subscriber", pos:"noun", gender:"m",
     note:"Masculine noun. A regular subscriber or follower. Feminine: une abonnee.",
     example:"A: Combien d'abonnes as-tu sur ta chaine ?\nB: Presque dix mille maintenant.",
     exampleSrc:"A: How many subscribers do you have on your channel?\nB: Almost ten thousand now.",
     funFact:"From 'abonner' (to subscribe). Originally meant someone who had 'good limits' (bonnes) on a contract."},

    {type:"teach", trg:"une archive", src:"an archive", pos:"noun", gender:"f",
     note:"Feminine noun. A collection of historical records. Often used in plural.",
     example:"A: Les archives nationales conservent des documents precieux.\nB: Certains datent de la Revolution.",
     exampleSrc:"A: The national archives preserve precious documents.\nB: Some date back to the Revolution.",
     funFact:"France's Archives nationales, founded in 1790, hold over 400 km of documents on shelves."},

    {type:"teach", trg:"un antiheros", src:"an antihero", pos:"noun", gender:"m",
     note:"Masculine noun. A protagonist lacking heroic qualities. Feminine: une antiheroine.",
     example:"A: Le personnage principal est un vrai antiheros.\nB: C'est ce qui rend le film si interessant.",
     exampleSrc:"A: The main character is a real antihero.\nB: That's what makes the film so interesting.",
     funFact:"French cinema adores antiheroes. Think of Jean-Paul Belmondo in 'A bout de souffle'."},

    {type:"teach", trg:"la classification", src:"the classification", pos:"noun", gender:"f",
     note:"Feminine noun. The systematic arrangement into categories.",
     example:"A: La classification de ces donnees prend du temps.\nB: Il faut creer des categories claires.",
     exampleSrc:"A: Classifying this data takes time.\nB: We need to create clear categories.",
     funFact:"Buffon's natural classification system in the 18th century was a French scientific triumph."},

    {type:"fb",
     s:"La {1} s'est enflammee apres l'annonce du gouvernement.",
     a:["blogosphere"],
     opts:["blogosphere","encyclopedie","archive","classification"],
     hint:"The collective world of online blogs and commentary. Think digital public square.",
     sSrc:"The {1} caught fire after the government's announcement."},

    {type:"teach", trg:"l'argumentation", src:"the argumentation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of constructing a logical argument.",
     example:"A: Ton argumentation est solide.\nB: Merci, j'ai bien prepare mes points.",
     exampleSrc:"A: Your argumentation is solid.\nB: Thanks, I prepared my points well.",
     funFact:"French education places huge emphasis on argumentation. The 'dissertation' is a rite of passage."},

    {type:"teach", trg:"un contradicteur", src:"a challenger, a debater", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who argues the opposing position.",
     example:"A: Le contradicteur a souleve un point interessant.\nB: Oui, il a destabilise le candidat.",
     exampleSrc:"A: The challenger raised an interesting point.\nB: Yes, he destabilized the candidate.",
     funFact:"French political debates always feature a contradicteur. It is seen as essential to democratic discourse."},

    {type:"teach", trg:"un auteur", src:"an author", pos:"noun", gender:"m",
     note:"Masculine noun. A writer or creator. Feminine: une auteure (or une autrice).",
     example:"A: Qui est l'auteur de ce roman ?\nB: C'est une jeune ecrivaine senegalaise.",
     exampleSrc:"A: Who is the author of this novel?\nB: She's a young Senegalese writer.",
     funFact:"The feminine 'auteure' vs 'autrice' debate rages on. Quebec prefers 'auteure', France increasingly uses 'autrice'."},

    {type:"mc",
     q:"Comment appelle-t-on une personne qui s'oppose dans un debat ?",
     opts:["un antiheros","un contradicteur","un abonne","un auteur"],
     ans:"un contradicteur",
     hint:"Someone who contradicts or challenges. Think of the root 'contre' (against)."},

    {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire ne sert a rien.\nB: Il vaut mieux debattre sur le fond.",
     exampleSrc:"A: The demonization of the opponent serves no purpose.\nB: It's better to debate on substance.",
     funFact:"Very common in French political journalism. From 'diable' (devil). A key concept in media literacy."},

    {type:"teach", trg:"la coexistence", src:"the coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Living together peacefully, especially different groups.",
     example:"A: La coexistence pacifique est un ideal.\nB: Elle demande des efforts des deux cotes.",
     exampleSrc:"A: Peaceful coexistence is an ideal.\nB: It requires efforts from both sides.",
     funFact:"'Coexistence pacifique' was a key Cold War term. France used it in its independent foreign policy."},

    {type:"teach", trg:"la democratisation", src:"the democratization", pos:"noun", gender:"f",
     note:"Feminine noun. Making something accessible to all people.",
     example:"A: La democratisation de l'education est essentielle.\nB: Tout le monde doit avoir acces au savoir.",
     exampleSrc:"A: The democratization of education is essential.\nB: Everyone must have access to knowledge.",
     funFact:"In France, 'democratisation culturelle' was Andre Malraux's great project as Minister of Culture."},

    {type:"teach", trg:"la division", src:"the division, the split", pos:"noun", gender:"f",
     note:"Feminine noun. A separation or disagreement within a group.",
     example:"A: La division au sein du parti est profonde.\nB: Ils n'arrivent plus a se mettre d'accord.",
     exampleSrc:"A: The division within the party is deep.\nB: They can't agree anymore.",
     funFact:"France has a political tradition of 'divisions gauche-droite' (left-right splits) dating to the Revolution."},

    {type:"teach", trg:"le chauvinisme", src:"the chauvinism", pos:"noun", gender:"m",
     note:"Masculine noun. Excessive or blind patriotism. Also used for gender bias.",
     example:"A: Le chauvinisme n'a pas sa place dans le debat.\nB: On doit rester objectif.",
     exampleSrc:"A: Chauvinism has no place in the debate.\nB: We must remain objective.",
     funFact:"Named after Nicolas Chauvin, a possibly fictional Napoleonic soldier known for fanatical loyalty."},

    {type:"fb",
     s:"La {1} de l'adversaire politique est une tactique malhonnete.",
     a:["diabolisation"],
     opts:["diabolisation","democratisation","coexistence","division"],
     hint:"Portraying your opponent as evil or dangerous. Related to the word 'diable'.",
     sSrc:"The {1} of the political opponent is a dishonest tactic."},

    {type:"match", pairs:[
      {trg:"abonne", src:"subscriber"},
      {trg:"communique", src:"press release"},
      {trg:"antiheros", src:"antihero"},
      {trg:"chauvinisme", src:"chauvinism"},
      {trg:"argumentation", src:"argumentation"}
    ]},

    {type:"mc",
     q:"Quel terme designe le fait de rendre quelque chose accessible a tous ?",
     opts:["la division","la coexistence","la democratisation","la diabolisation"],
     ans:"la democratisation",
     hint:"Making something available to the entire population. Think of 'demos' (the people)."},

    {type:"fb",
     s:"Cet {1} a vendu deux millions d'exemplaires en un mois.",
     a:["auteur"],
     opts:["auteur","abonne","antiheros","contradicteur"],
     hint:"The person who writes a book or creates a work of art.",
     sSrc:"This {1} sold two million copies in one month."}
  ]
};
export default LESSON_1;
