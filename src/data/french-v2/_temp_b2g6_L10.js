const LESSON_10 = {
  id:"frv2_b2g6_l10", title:"Politique et société", icon:"\uD83C\uDFDB\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politique et société",
     desc:"Master vocabulary for discussing politics, social movements, and civic engagement in French.",
     goals:["Learn 20 words about politics and society","Debate social issues with formal register","Understand French political vocabulary"]},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization. Feminine: une administratrice.",
     example:"A: L'administrateur a convoqué une réunion.\nB: Pour discuter du budget annuel.",
     exampleSrc:"A: The administrator called a meeting.\nB: To discuss the annual budget.",
     funFact:"In French corporate law, 'administrateur' is a board member, not just any manager."},

    {type:"teach", trg:"un commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun. A person working in sales. Feminine: une commerciale.",
     example:"A: Le commercial a décroché un gros contrat.\nB: C'est excellent pour l'entreprise.",
     exampleSrc:"A: The sales rep landed a big contract.\nB: That's excellent for the company.",
     funFact:"'Un commercial' as a noun means sales person. As an adjective, 'commercial' means business-related."},

    {type:"teach", trg:"un communiste", src:"a communist", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A member or supporter of communist ideology.",
     example:"A: Le Parti communiste a une longue histoire en France.\nB: Il a été très influent au XXe siècle.",
     exampleSrc:"A: The Communist Party has a long history in France.\nB: It was very influential in the 20th century.",
     funFact:"The PCF (Parti communiste français) was France's largest left-wing party until the 1980s."},

    {type:"teach", trg:"un contradicteur", src:"a challenger, an opponent in debate", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who argues against a position. Feminine: une contradictrice.",
     example:"A: Son contradicteur a été redoutable.\nB: Le débat était passionnant.",
     exampleSrc:"A: His debate opponent was formidable.\nB: The debate was fascinating.",
     funFact:"In French debate culture, a good 'contradicteur' is respected, not resented. Disagreement is intellectual sport."},

    {type:"mc",
     q:"Que fait 'un commercial' ?",
     opts:["Il vend des produits ou services","Il gère les finances","Il dirige une usine","Il rédige des contrats"],
     ans:"Il vend des produits ou services",
     hint:"A noun for someone in the sales department. Not to be confused with the adjective."},

    {type:"teach", trg:"un confrère", src:"a colleague (same profession)", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow professional in the same field. Feminine: une consœur.",
     example:"A: Mon confrère de Lyon m'a envoyé le dossier.\nB: C'est un avocat très réputé.",
     exampleSrc:"A: My colleague from Lyon sent me the file.\nB: He's a very reputable lawyer.",
     funFact:"Used among doctors, lawyers, journalists. More specific than 'collègue' because it implies same profession."},

    {type:"teach", trg:"le lobby", src:"the lobby (pressure group)", pos:"noun", gender:"m",
     note:"Masculine noun. An organized group seeking to influence policy.",
     example:"A: Le lobby pharmaceutique est très puissant.\nB: Il influence les décisions de santé.",
     exampleSrc:"A: The pharmaceutical lobby is very powerful.\nB: It influences health decisions.",
     funFact:"Borrowed from English. 'Lobbying' is officially 'groupe de pression' in French, but 'lobby' dominates."},

    {type:"teach", trg:"le charretier", src:"the carter, the cart driver", pos:"noun", gender:"m",
     note:"Masculine noun. A person who drives a cart. Also in the expression 'jurer comme un charretier'.",
     example:"A: Il jure comme un charretier.\nB: Son langage est vraiment grossier.",
     exampleSrc:"A: He swears like a sailor.\nB: His language is really crude.",
     funFact:"'Jurer comme un charretier' (to swear like a carter) is the French equivalent of 'to swear like a sailor'."},

    {type:"fb",
     s:"Mon {1} de Bordeaux et moi avons le même avis sur cette affaire.",
     a:["confrère"],
     opts:["confrère","contradicteur","commercial","communiste"],
     hint:"A colleague in the same profession, typically used among doctors, lawyers, or journalists.",
     sSrc:"My {1} from Bordeaux and I share the same opinion on this case."},

    {type:"teach", trg:"un curieux", src:"a curious person, an onlooker", pos:"noun", gender:"m",
     note:"Masculine noun. Someone driven by curiosity, or a bystander watching an event.",
     example:"A: Les curieux se sont attroupés autour de l'accident.\nB: La police les a repoussés.",
     exampleSrc:"A: The onlookers gathered around the accident.\nB: The police pushed them back.",
     funFact:"As a noun, 'un curieux' can be neutral (curious person) or mildly negative (nosy bystander)."},

    {type:"teach", trg:"l'encombre", src:"without hindrance (in 'sans encombre')", pos:"noun", gender:"f",
     note:"Feminine noun. Obstacle or hindrance. Almost always used in 'sans encombre'.",
     example:"A: Le voyage s'est passé sans encombre.\nB: Aucun retard, aucun problème.",
     exampleSrc:"A: The trip went without a hitch.\nB: No delays, no problems.",
     funFact:"'Sans encombre' is a set phrase meaning smoothly. You rarely hear 'encombre' used alone."},

    {type:"teach", trg:"un complet", src:"a suit (clothing)", pos:"noun", gender:"m",
     note:"Masculine noun. A matching jacket and trousers. 'Un complet-veston'.",
     example:"A: Il porte un complet gris pour l'entretien.\nB: Très élégant et professionnel.",
     exampleSrc:"A: He's wearing a grey suit for the interview.\nB: Very elegant and professional.",
     funFact:"'Un complet' is the traditional French word. 'Un costume' is now more common. Both mean suit."},

    {type:"mc",
     q:"Que signifie 'sans encombre' ?",
     opts:["Sans autorisation","Sans problème ni obstacle","Sans argent","Sans aide extérieure"],
     ans:"Sans problème ni obstacle",
     hint:"A set phrase using a rarely seen noun. Means everything went smoothly."},

    {type:"teach", trg:"le dixième", src:"the tenth", pos:"noun", gender:"m",
     note:"Masculine noun or adjective. The ordinal number ten, or one tenth.",
     example:"A: C'est le dixième étage.\nB: Heureusement qu'il y a un ascenseur.",
     exampleSrc:"A: It's the tenth floor.\nB: Fortunately there's an elevator.",
     funFact:"French ordinals add '-ième' to the cardinal: deux > deuxième, dix > dixième. Exception: premier/première."},

    {type:"teach", trg:"le cinquantième", src:"the fiftieth", pos:"adj", gender:null,
     note:"Adjective or noun. The ordinal for fifty.",
     example:"A: C'est le cinquantième anniversaire de l'entreprise.\nB: On organise une grande fête.",
     exampleSrc:"A: It's the fiftieth anniversary of the company.\nB: We're organizing a big celebration.",
     funFact:"French ordinals above 'premier' all use the '-ième' suffix. 'Le cinquantenaire' is the anniversary noun."},

    {type:"teach", trg:"la bordée", src:"the volley, the broadside", pos:"noun", gender:"f",
     note:"Feminine noun. A naval broadside, or figuratively a stream of insults.",
     example:"A: Il a lâché une bordée d'insultes.\nB: Personne n'a osé répondre.",
     exampleSrc:"A: He let loose a volley of insults.\nB: Nobody dared to respond.",
     funFact:"Naval term from 'bord' (side of a ship). 'Une bordée de jurons' is a classic French expression."},

    {type:"fb",
     s:"Le {1} pharmaceutique exerce une forte influence sur la politique de santé.",
     a:["lobby"],
     opts:["lobby","confrère","complet","dixième"],
     hint:"An organized pressure group that tries to influence government decisions.",
     sSrc:"The pharmaceutical {1} exerts strong influence on health policy."},

    {type:"teach", trg:"le lever", src:"the rising, the getting up", pos:"noun", gender:"m",
     note:"Masculine noun. The act of rising. 'Le lever du soleil' = sunrise.",
     example:"A: Le lever du soleil sur la mer est magnifique.\nB: Ça vaut la peine de se réveiller tôt.",
     exampleSrc:"A: The sunrise over the sea is magnificent.\nB: It's worth waking up early for.",
     funFact:"'Le lever du roi' was a formal ceremony at Versailles where courtiers watched Louis XIV get out of bed."},

    {type:"teach", trg:"un assisté", src:"a welfare recipient (pejorative)", pos:"noun", gender:"m",
     note:"Masculine noun. A person living on state aid. Often used pejoratively.",
     example:"A: Arrête de traiter les gens d'assistés.\nB: Tu as raison, c'est un préjugé injuste.",
     exampleSrc:"A: Stop calling people welfare cases.\nB: You're right, it's an unfair prejudice.",
     funFact:"A politically charged term in France. The debate about 'assistanat' vs. social solidarity is ongoing."},

    {type:"match", pairs:[
      {trg:"contradicteur", src:"debate opponent"},
      {trg:"lobby", src:"pressure group"},
      {trg:"charretier", src:"carter"},
      {trg:"bordée", src:"volley, broadside"},
      {trg:"lever", src:"rising, getting up"}
    ]},

    {type:"mc",
     q:"Quel substantif masculin désigne le moment où le soleil apparaît à l'horizon le matin ?",
     opts:["le complet","le curieux","le lever","le dixième"],
     ans:"le lever",
     hint:"This noun is the substantivized infinitive of the verb meaning 'to raise/rise'. Sunrise is its archetypal example."},

    {type:"fb",
     s:"Le voyage s'est déroulé sans {1}, tout était parfait.",
     a:["encombre"],
     opts:["encombre","bordée","lever","complet"],
     hint:"A noun meaning hindrance or obstacle, almost always used with 'sans' before it.",
     sSrc:"The trip went without any {1}, everything was perfect."}
  ]
};
export default LESSON_10;
