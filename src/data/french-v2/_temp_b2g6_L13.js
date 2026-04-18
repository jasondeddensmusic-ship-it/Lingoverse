const LESSON_13 = {
  id:"frv2_b2g6_l13", title:"Le monde du travail", icon:"\uD83D\uDCBC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde du travail",
     desc:"Build vocabulary for the workplace, professional life, and the modern economy.",
     goals:["Learn 20 words about work and business","Navigate professional French","Discuss economic trends and workplace culture"]},

    {type:"teach", trg:"le business", src:"business", pos:"noun", gender:"m",
     note:"Masculine noun. Commerce, trade, or a particular business venture.",
     example:"A: Le business du luxe se porte bien en France.\nB: C'est un secteur en pleine croissance.",
     exampleSrc:"A: The luxury business is doing well in France.\nB: It's a growing sector.",
     funFact:"Borrowed from English but fully integrated. 'Faire du business' is informal, 'les affaires' is the formal equivalent."},

    {type:"teach", trg:"le best-seller", src:"the bestseller", pos:"noun", gender:"m",
     note:"Masculine noun. A book that sells extremely well. Plural: des best-sellers.",
     example:"A: Son dernier roman est un best-seller.\nB: Plus de 500 000 exemplaires vendus.",
     exampleSrc:"A: Her latest novel is a bestseller.\nB: Over 500,000 copies sold.",
     funFact:"The Académie française recommends 'succès de librairie' but 'best-seller' won in everyday usage."},

    {type:"teach", trg:"le galeriste", src:"the gallery owner", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A person who owns or manages an art gallery.",
     example:"A: Le galeriste expose de jeunes artistes.\nB: Il a un bon œil pour les talents.",
     exampleSrc:"A: The gallery owner exhibits young artists.\nB: He has a good eye for talent.",
     funFact:"Paris has over 300 art galleries. The Marais district is the heart of the contemporary art scene."},

    {type:"teach", trg:"un garde-chasse", src:"a gamekeeper", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages wildlife and prevents poaching.",
     example:"A: Le garde-chasse surveille la forêt.\nB: Le braconnage est un vrai problème.",
     exampleSrc:"A: The gamekeeper watches over the forest.\nB: Poaching is a real problem.",
     funFact:"French hunting culture ('la chasse') is deeply rooted. Over a million French people hold hunting licenses."},

    {type:"mc",
     q:"Que fait un 'galeriste' ?",
     opts:["Il gère une galerie d'art","Il répare des galeries souterraines","Il vend des gâteaux","Il construit des galeries marchandes"],
     ans:"Il gère une galerie d'art",
     hint:"A professional who exhibits and sells contemporary works in a dedicated space. Think of Paris's Marais district."},

    {type:"teach", trg:"le laissez-passer", src:"the pass, the permit", pos:"noun", gender:"m",
     note:"Masculine compound noun. An official document granting access. Invariable in plural.",
     example:"A: Vous avez votre laissez-passer ?\nB: Oui, le voici.",
     exampleSrc:"A: Do you have your pass?\nB: Yes, here it is.",
     funFact:"Literally 'let pass'. 'Laissez-faire' (let do) is the related economic philosophy born in 18th-century France."},

    {type:"teach", trg:"un compte-gouttes", src:"a dropper (medicine), trickle", pos:"noun", gender:"m",
     note:"Masculine compound noun. A medicine dropper, or figuratively very slowly.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: On n'a presque rien reçu.",
     exampleSrc:"A: Information is coming in drop by drop.\nB: We've received almost nothing.",
     funFact:"'Au compte-gouttes' (drop by drop) is a common expression for things given out very stingily."},

    {type:"teach", trg:"un coupe-papier", src:"a letter opener", pos:"noun", gender:"m",
     note:"Masculine compound noun. A blade for opening sealed letters. Invariable in plural.",
     example:"A: Ce coupe-papier en argent est un objet de collection.\nB: Il appartenait à mon arrière-grand-père.",
     exampleSrc:"A: This silver letter opener is a collector's item.\nB: It belonged to my great-grandfather.",
     funFact:"Historically essential when letters were sealed with wax. Now mostly decorative desk objects."},

    {type:"fb",
     s:"Les subventions sont distribuées au {1}, c'est frustrant.",
     a:["compte-gouttes"],
     opts:["compte-gouttes","coupe-papier","laissez-passer","best-seller"],
     hint:"A compound noun meaning dropper. The expression means giving things out very slowly.",
     sSrc:"Subsidies are being distributed at a {1}, it's frustrating."},

    {type:"teach", trg:"un arrière-grand-parent", src:"a great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. A grandparent's parent. Plural: des arrière-grands-parents.",
     example:"A: Mes arrière-grands-parents venaient d'Italie.\nB: Beaucoup de Français ont des origines italiennes.",
     exampleSrc:"A: My great-grandparents came from Italy.\nB: Many French people have Italian origins.",
     funFact:"French family terms stack prefixes: arrière-grand-parent, arrière-arrière-grand-parent, and so on."},

    {type:"teach", trg:"le demi-tour", src:"the U-turn, the about-face", pos:"noun", gender:"m",
     note:"Masculine compound noun. A 180-degree turn, literally or figuratively.",
     example:"A: Le gouvernement a fait demi-tour sur cette loi.\nB: La pression populaire a été trop forte.",
     exampleSrc:"A: The government made a U-turn on this law.\nB: Popular pressure was too strong.",
     funFact:"'Faire demi-tour' is used for cars, hikers, and politicians who reverse their position."},

    {type:"teach", trg:"le guet-apens", src:"the ambush, the trap", pos:"noun", gender:"m",
     note:"Masculine compound noun. A planned ambush or trap. Plural: des guets-apens.",
     example:"A: Les soldats sont tombés dans un guet-apens.\nB: L'ennemi les attendait.",
     exampleSrc:"A: The soldiers fell into an ambush.\nB: The enemy was waiting for them.",
     funFact:"From Old French 'guet' (watch) + 'apenser' (to plan). A premeditated trap, used literally and figuratively."},

    {type:"mc",
     q:"Que signifie 'faire demi-tour' ?",
     opts:["Revenir en arrière, changer de direction","Tourner à gauche","Accélérer fortement","S'arrêter brusquement"],
     ans:"Revenir en arrière, changer de direction",
     hint:"A 180-degree reversal. Used for driving, walking, or changing one's mind completely."},

    {type:"teach", trg:"le café-tabac", src:"the cafe-tobacconist", pos:"noun", gender:"m",
     note:"Masculine compound noun. A French cafe that also sells tobacco and stamps.",
     example:"A: On se retrouve au café-tabac du coin ?\nB: D'accord, à midi.",
     exampleSrc:"A: Shall we meet at the corner cafe-tobacconist?\nB: Okay, at noon.",
     funFact:"A quintessentially French institution. The red diamond sign outside means they sell tobacco products."},

    {type:"teach", trg:"le cabinets", src:"the restroom, the toilet", pos:"noun", gender:"m",
     note:"Masculine plural noun. Formal word for the toilet or restroom.",
     example:"A: Où sont les cabinets, s'il vous plaît ?\nB: Au fond du couloir à droite.",
     exampleSrc:"A: Where are the restrooms, please?\nB: At the end of the corridor on the right.",
     funFact:"More formal than 'les toilettes'. 'Le cabinet' (singular) means a professional office (doctor, lawyer)."},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a snack", pos:"noun", gender:"m",
     note:"Masculine compound noun. Small bites served before a meal. Plural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont délicieux.\nB: Essaie les feuilletés au fromage.",
     exampleSrc:"A: The appetizers are delicious.\nB: Try the cheese puffs.",
     funFact:"Literally 'amuse the mouth'. Restaurants use the politer 'amuse-bouche'. 'Gueule' is slang for mouth/face."},

    {type:"fb",
     s:"Les soldats sont tombés dans un {1} tendu par l'ennemi.",
     a:["guet-apens"],
     opts:["guet-apens","demi-tour","laissez-passer","café-tabac"],
     hint:"A planned ambush or trap, from Old French words meaning 'watch' and 'to plan'.",
     sSrc:"The soldiers fell into a {1} set by the enemy."},

    {type:"teach", trg:"la crêperie", src:"the creperie", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes (sweet and savory).",
     example:"A: On va à la crêperie ce soir ?\nB: Bonne idée, j'adore les galettes.",
     exampleSrc:"A: Shall we go to the creperie tonight?\nB: Good idea, I love savory crepes.",
     funFact:"Brittany is the home of crepes. 'Galette' is the savory buckwheat crepe, 'crêpe' the sweet one."},

    {type:"teach", trg:"le béarnaise", src:"Bearnaise (sauce)", pos:"noun", gender:"f",
     note:"Feminine noun. A rich butter and tarragon sauce from southwestern France.",
     example:"A: Un steak avec de la béarnaise, s'il vous plaît.\nB: Excellent choix !",
     exampleSrc:"A: A steak with Bearnaise sauce, please.\nB: Excellent choice!",
     funFact:"Named after Béarn, Henri IV's homeland. Made with butter, egg yolks, shallots, and tarragon."},

    {type:"match", pairs:[
      {trg:"laissez-passer", src:"pass, permit"},
      {trg:"guet-apens", src:"ambush"},
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"café-tabac", src:"cafe-tobacconist"},
      {trg:"crêperie", src:"creperie"}
    ]},

    {type:"mc",
     q:"Que vend-on dans un 'café-tabac' en plus des boissons ?",
     opts:["Du tabac et des timbres","Des médicaments","Des journaux uniquement","Des vêtements"],
     ans:"Du tabac et des timbres",
     hint:"A dual-function French establishment. The red diamond sign outside is the clue."},

    {type:"fb",
     s:"Les {1} sont servis avant le repas pour ouvrir l'appétit.",
     a:["amuse-gueules"],
     opts:["amuse-gueules","crêperies","béarnaises","cabinets"],
     hint:"Small bite-sized snacks served before a meal. Literally means 'a... the mouth'.",
     sSrc:"The {1} are served before the meal to whet the appetite."}
  ]
};
export default LESSON_13;
