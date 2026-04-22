const LESSON_11 = {
  id:"frv2_b2g3_l11", title:"Famille et société", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Famille et société",
     desc:"Learn vocabulary about family structures, social relations, and how French society discusses belonging and identity.",
     goals:["Learn 17 B2 family and society words","Discuss social dynamics and belonging","Describe family relationships and social roles"]},

    {type:"teach", trg:"un arrière-grand-parent", src:"a great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. A grandparent's parent. Plural: arriere-grands-parents.",
     example:"A: Mes arrière-grands-parents venaient de Bretagne.\nB: C'est une belle région, tu y es déjà allé ?",
     exampleSrc:"A: My great-grandparents came from Brittany.\nB: It's a beautiful region, have you ever been?",
     funFact:"French family vocabulary adds 'arriere-' for each generation back. An 'arriere-arriere-grand-pere' is a great-great-grandfather."},

    {type:"teach", trg:"une auteure", src:"a female author", pos:"noun", gender:"f",
     note:"Feminine noun. A woman who writes books. The traditional masculine is 'un auteur'.",
     example:"A: Cette auteure a remporté le prix Goncourt.\nB: Son roman est un chef-d'oeuvre.",
     exampleSrc:"A: This author won the Goncourt Prize.\nB: Her novel is a masterpiece.",
     funFact:"The feminization of job titles is debated in France. 'Auteure' (Quebec form) and 'autrice' (historical form) compete. The Academie francaise accepted 'autrice' in 2019."},

    {type:"teach", trg:"un anthropologue", src:"an anthropologist", pos:"noun", gender:"m",
     note:"Masculine noun. A scientist who studies human cultures. Also feminine: une anthropologue.",
     example:"A: L'anthropologue a vécu deux ans avec cette tribu.\nB: Son étude est passionnante.",
     exampleSrc:"A: The anthropologist lived two years with this tribe.\nB: Her study is fascinating.",
     funFact:"Claude Levi-Strauss, France's most famous anthropologist, founded structural anthropology and spent years studying Brazilian indigenous peoples."},

    {type:"teach", trg:"un ethnologue", src:"an ethnologist", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in the study of different peoples and cultures.",
     example:"A: L'ethnologue a documenté les traditions orales du village.\nB: Ce travail de mémoire est essentiel.",
     exampleSrc:"A: The ethnologist documented the village's oral traditions.\nB: This memory work is essential.",
     funFact:"The Musee du quai Branly in Paris, dedicated to non-European civilizations, is France's temple of ethnology."},

    {type:"mc",
     q:"Quel scientifique étudie les cultures humaines et les sociétés ?",
     opts:["un anthropologue","un ethnologue","un criminologue","un démographe"],
     ans:"un anthropologue",
     hint:"Claude Levi-Strauss was France's most famous practitioner of this science. It comes from Greek 'anthropos' (human)."},

    {type:"teach", trg:"un démographe", src:"a demographer", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in population statistics. Also feminine: une demographe.",
     example:"A: Le démographe prévoit un vieillissement de la population.\nB: Les politiques doivent s'adapter.",
     exampleSrc:"A: The demographer predicts an aging population.\nB: Policies must adapt.",
     funFact:"France's INSEE (national statistics institute) employs many demographers. French demography is a respected academic discipline since the 18th century."},

    {type:"teach", trg:"analphabète", src:"illiterate", pos:"adj", gender:null,
     note:"Adjective. Unable to read or write. Also a noun: un/une analphabete.",
     example:"A: Quinze pour cent de la population mondiale est analphabète.\nB: L'éducation reste un combat.",
     exampleSrc:"A: Fifteen percent of the world's population is illiterate.\nB: Education remains a battle.",
     funFact:"France distinguishes 'analphabete' (never learned to read) from 'illettre' (learned but lost the skill). Both are tracked separately."},

    {type:"teach", trg:"la déscolarisation", src:"school dropout, leaving school", pos:"noun", gender:"f",
     note:"Feminine noun. The process of leaving the school system prematurely.",
     example:"A: La déscolarisation touche surtout les milieux défavorisés.\nB: Il faut agir dès le primaire.",
     exampleSrc:"A: Dropping out of school mainly affects disadvantaged communities.\nB: We need to act starting in primary school.",
     funFact:"France tracks 'decrocheurs scolaires' (school dropouts) closely. Around 100,000 young people leave school without qualifications each year."},

    {type:"teach", trg:"fiancé", src:"engaged", pos:"adj", gender:null,
     note:"Adjective. Formally engaged to be married. Feminine: fiancee. Also a noun.",
     example:"A: Ils sont fiancés depuis six mois.\nB: Le mariage est prévu pour l'été prochain.",
     exampleSrc:"A: They have been engaged for six months.\nB: The wedding is planned for next summer.",
     funFact:"'Fiance/fiancee' entered English directly from French. In France, formal engagements with family dinners are still a cherished tradition."},

    {type:"fb",
     s:"La lutte contre l'analphabétisme commence par l'accès à l'éducation pour les enfants {1}.",
     a:["analphabètes"],
     opts:["analphabètes","fiancés","déscolarisés","ethnologiques"],
     hint:"This adjective describes people who cannot read or write at all.",
     sSrc:"The fight against illiteracy begins with access to education for {1} children."},

    {type:"teach", trg:"un défunt", src:"a deceased person", pos:"noun", gender:"m",
     note:"Masculine noun. A person who has died. Feminine: defunte. Formal register.",
     example:"A: Le défunt était un grand homme de lettres.\nB: Ses oeuvres resteront dans la mémoire collective.",
     exampleSrc:"A: The deceased was a great literary figure.\nB: His works will remain in the collective memory.",
     funFact:"'Le defunt' is the standard term in legal and funeral contexts. 'Feu' is an archaic synonym: 'feu mon pere' means 'my late father'."},

    {type:"teach", trg:"un curieux", src:"a curious person, an onlooker", pos:"noun", gender:"m",
     note:"Masculine noun. A nosy person or spectator. Feminine: curieuse.",
     example:"A: Les curieux se sont rassemblés autour de l'accident.\nB: La police leur a demandé de reculer.",
     exampleSrc:"A: The onlookers gathered around the accident.\nB: The police asked them to step back.",
     funFact:"In 18th-century France, a 'cabinet de curiosites' was a collection of exotic objects. The word 'curieux' originally meant passionate about knowledge."},

    {type:"teach", trg:"un commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun. A person who works in sales. Feminine: commerciale.",
     example:"A: Le commercial a conclu un gros contrat.\nB: C'est le meilleur vendeur de l'équipe.",
     exampleSrc:"A: The sales rep closed a big contract.\nB: He's the best seller on the team.",
     funFact:"In French business, 'un commercial' is a specific job title. 'Faire du commercial' means to do sales work. 'Centre commercial' means shopping mall."},

    {type:"mc",
     q:"Comment appelle-t-on une personne qui est décédée, dans un contexte formel ?",
     opts:["un commercial","un défunt","un curieux","un aspirant"],
     ans:"un défunt",
     hint:"This formal noun is used in legal proceedings and funeral contexts for someone who has passed away."},

    {type:"teach", trg:"s'absenter", src:"to be absent, to leave temporarily", pos:"verb", gender:null,
     note:"Reflexive verb. To leave a place temporarily or be away.",
     example:"A: Je dois m'absenter quelques minutes.\nB: Pas de problème, prenez votre temps.",
     exampleSrc:"A: I need to step out for a few minutes.\nB: No problem, take your time.",
     funFact:"French workplace culture values 'presenteisme' (being physically present). 'S'absenter' too often is noticed and frowned upon."},

    {type:"teach", trg:"au préalable", src:"beforehand, in advance", pos:"adv", gender:null,
     note:"Adverbial phrase. Something that must be done first, as a prerequisite.",
     example:"A: Il faut remplir ce formulaire au préalable.\nB: D'accord, je m'en occupe tout de suite.",
     exampleSrc:"A: You need to fill out this form beforehand.\nB: Alright, I'll take care of it right away.",
     funFact:"French bureaucracy loves 'au prealable'. Nearly every administrative procedure has prerequisite steps that must be completed first."},

    {type:"teach", trg:"un complet", src:"a suit (clothing)", pos:"noun", gender:"m",
     note:"Masculine noun. A matching jacket and trousers. 'Complet-veston' is the full term.",
     example:"A: Il portait un complet gris pour l'entretien.\nB: C'est toujours une bonne impression.",
     exampleSrc:"A: He wore a grey suit for the interview.\nB: It always makes a good impression.",
     funFact:"'Complet' as clothing is considered slightly old-fashioned. Younger French speakers prefer 'costume'. But 'complet' persists in formal contexts."},

    {type:"match", pairs:[
      {trg:"arrière-grand-parent", src:"great-grandparent"},
      {trg:"analphabète", src:"illiterate"},
      {trg:"défunt", src:"deceased person"},
      {trg:"s'absenter", src:"to be absent"},
      {trg:"au préalable", src:"beforehand"}
    ]},

    {type:"fb",
     s:"Veuillez signer le document {1} avant de vous présenter au guichet.",
     a:["au préalable"],
     opts:["au préalable","en présence","en marge","en dehors"],
     hint:"This adverbial phrase means 'beforehand' or 'as a prerequisite'. Very common in French administration.",
     sSrc:"Please sign the document {1} before presenting yourself at the counter."}
  ]
};
export default LESSON_11;
