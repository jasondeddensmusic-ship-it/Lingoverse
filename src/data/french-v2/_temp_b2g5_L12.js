// French B2 Gap Lesson 12 — Urban Life
const LESSON_12 = {id:"frv2_b2g5_l12", title:"Vie urbaine", icon:"🏙️", xp:15, board:true, steps:[
  {type:"intro", title:"Vie urbaine",
   desc:"Build vocabulary for discussing city life, housing, infrastructure, and urban challenges at B2 level.",
   goals:["Learn 15 key words about urban life and housing","Discuss city infrastructure and problems","Use vocabulary for urban environments"]},

  {type:"teach", trg:"le coffre-fort", src:"the safe / strongbox", pos:"noun", gender:"m",
   note:"A secure metal box for valuables.\nPlural: coffres-forts.",
   example:"A: Le coffre-fort de l'hôtel est gratuit?\nB: Oui, il y en a un dans chaque chambre.\nA: Je vais y mettre mon passeport.\nB: C'est prudent, surtout en voyage.",
   exampleSrc:"A: Is the hotel safe free?\nB: Yes, there is one in each room.\nA: I'll put my passport in it.\nB: That's wise, especially when traveling.",
   funFact:"Compound noun: 'coffre' (chest) + 'fort' (strong). The hyphen marks it as a single unit."},

  {type:"teach", trg:"la cagoule", src:"the balaclava / hood", pos:"noun", gender:"f",
   note:"A head covering showing only the face.\nAlso: a lightweight rain jacket (regional).",
   example:"A: Les cambrioleurs portaient des cagoules.\nB: Personne ne les a reconnus?\nA: Non, leurs visages étaient cachés.\nB: Les caméras de surveillance n'ont rien capté d'utile.",
   exampleSrc:"A: The burglars were wearing balaclavas.\nB: Nobody recognized them?\nA: No, their faces were hidden.\nB: The security cameras captured nothing useful.",
   funFact:"Named after Balaklava in Crimea, where British soldiers wore them during the 1854 siege."},

  {type:"teach", trg:"la bordée", src:"the volley / barrage", pos:"noun", gender:"f",
   note:"A series of shots or insults fired at once.\nNautical origin: the side of a ship.",
   example:"A: Il a reçu une bordée d'insultes.\nB: Pourquoi tant d'hostilité?\nA: Sa décision était très impopulaire.\nB: La réaction a été violente.",
   exampleSrc:"A: He received a barrage of insults.\nB: Why so much hostility?\nA: His decision was very unpopular.\nB: The reaction was violent.",
   funFact:"Originally nautical: firing cannons from one side ('bord') of a ship. Now figurative for any barrage."},

  {type:"teach", trg:"le guet-apens", src:"the ambush / trap", pos:"noun", gender:"m",
   note:"A surprise attack from a hidden position.\nAlso used figuratively for traps and setups.",
   example:"A: C'était un véritable guet-apens.\nB: Ils nous attendaient au coin de la rue.\nA: Heureusement, personne n'a été blessé.\nB: Il faut signaler cet incident à la police.",
   exampleSrc:"A: It was a real ambush.\nB: They were waiting for us at the street corner.\nA: Fortunately, nobody was hurt.\nB: We need to report this incident to the police.",
   funFact:"From 'guet' (watch/lookout) + 'apens' (premeditated). The 's' in 'apens' is silent."},

  {type:"teach", trg:"le guéridon", src:"the pedestal table", pos:"noun", gender:"m",
   note:"A small round table on a single leg.\nA classic piece of French furniture.",
   example:"A: Pose ton café sur le guéridon.\nB: Ce petit meuble est très élégant.\nA: C'est un antiquité du dix-neuvième siècle.\nB: Il ajoute du charme au salon.",
   exampleSrc:"A: Put your coffee on the pedestal table.\nB: This small piece of furniture is very elegant.\nA: It's a nineteenth-century antique.\nB: It adds charm to the living room.",
   funFact:"Named after a Moorish character 'Guéridon' in a 17th century ballet who held a candle tray."},

  {type:"teach", trg:"le charretier", src:"the carter / wagon driver", pos:"noun", gender:"m",
   note:"Historically: a person who drove a horse-drawn cart.\nIdiom: 'jurer comme un charretier' (to swear like a sailor).",
   example:"A: Il jure comme un charretier.\nB: Son langage est vraiment grossier.\nA: Les charretiers avaient cette réputation?\nB: Oui, ils étaient connus pour leur vocabulaire coloré.",
   exampleSrc:"A: He swears like a sailor.\nB: His language is really crude.\nA: Did carters have that reputation?\nB: Yes, they were known for their colorful vocabulary.",
   funFact:"From 'charrette' (cart). The idiom 'jurer comme un charretier' is equivalent to English 'swear like a sailor'."},

  {type:"teach", trg:"le binocle", src:"the pince-nez / spectacles", pos:"noun", gender:"m",
   note:"Old-fashioned eyeglasses without earpieces.\nNow humorous or literary for any glasses.",
   example:"A: Mon grand-père portait un binocle.\nB: Comme dans les films anciens?\nA: Exactement. C'était très élégant.\nB: Aujourd'hui, c'est un objet de collection.",
   exampleSrc:"A: My grandfather wore a pince-nez.\nB: Like in old movies?\nA: Exactly. It was very elegant.\nB: Today, it's a collector's item.",
   funFact:"From Latin 'bini' (two) + 'oculus' (eye). Now charmingly old-fashioned."},

  {type:"teach", trg:"l'encombre", src:"the obstacle / hindrance", pos:"noun", gender:"m",
   note:"Something that blocks the way. Often in 'sans encombre' (without difficulty).",
   example:"A: Le voyage s'est passé sans encombre.\nB: Pas de retards ni de problèmes?\nA: Non, tout s'est parfaitement déroulé.\nB: Quelle chance, c'est rare de nos jours.",
   exampleSrc:"A: The trip went without a hitch.\nB: No delays or problems?\nA: No, everything went perfectly.\nA: How lucky, that's rare these days.",
   funFact:"From 'encombrer' (to obstruct). 'Sans encombre' is one of the most elegant ways to say 'smoothly'."},

  {type:"teach", trg:"inhabité", src:"uninhabited", pos:"adj", gender:null,
   note:"Not lived in. Describes buildings, islands, or areas.\nFeminine: inhabitée.",
   example:"A: Cette maison est inhabitée depuis dix ans.\nB: C'est dommage, elle est magnifique.\nA: Le propriétaire vit à l'étranger.\nB: Il devrait la louer ou la vendre.",
   exampleSrc:"A: This house has been uninhabited for ten years.\nB: That's a shame, it's magnificent.\nA: The owner lives abroad.\nB: He should rent or sell it.",
   funFact:"From 'in-' (not) + 'habité' (inhabited). Note: 'inhabitable' in French means 'uninhabitable' (false friend!)."},

  {type:"mc", q:"Que signifie 'sans encombre'?",
   opts:["Sans difficulté","Sans argent","Sans aide","Sans raison"],
   ans:"Sans difficulté",
   hint:"When everything goes smoothly, without obstacles blocking the way"},

  {type:"fb", s:"C'était un véritable {1}, ils nous attendaient cachés au coin de la rue.",
   a:["guet-apens"], opts:["guet-apens","coffre-fort","guéridon","binocle"],
   hint:"A surprise attack from a hidden position, a premeditated trap",
   sSrc:"It was a real {1}, they were waiting for us hidden at the street corner."},

  {type:"teach", trg:"le coupe-papier", src:"the letter opener", pos:"noun", gender:"m",
   note:"A blade used to open sealed letters.\nA traditional desk accessory. Plural: coupe-papiers.",
   example:"A: Ce coupe-papier en argent appartenait à mon arrière-grand-mère.\nB: Il est magnifique, c'est un objet d'art.\nA: On n'en utilise plus beaucoup aujourd'hui.\nB: Avec les courriels, c'est devenu décoratif.",
   exampleSrc:"A: This silver letter opener belonged to my great-grandmother.\nB: It's magnificent, it's a work of art.\nA: We don't use them much anymore.\nB: With emails, it's become decorative.",
   funFact:"Compound: 'coupe' (cuts) + 'papier' (paper). A quintessential item of French bourgeois desk culture."},

  {type:"teach", trg:"le grille-pain", src:"the toaster", pos:"noun", gender:"m",
   note:"An appliance for toasting bread.\nInvariant plural: des grille-pain.",
   example:"A: Le grille-pain est en panne.\nB: Encore? Il faut en acheter un nouveau.\nA: Celui-ci a duré dix ans quand même.\nB: Prends un modèle de meilleure qualité cette fois.",
   exampleSrc:"A: The toaster is broken.\nB: Again? We need to buy a new one.\nA: This one lasted ten years though.\nB: Get a better quality model this time.",
   funFact:"Compound: 'grille' (grills/toasts) + 'pain' (bread). French compound nouns are delightfully literal."},

  {type:"teach", trg:"l'arrière-grand-parent", src:"the great-grandparent", pos:"noun", gender:"m",
   note:"A grandparent's parent. Plural: arrière-grands-parents.\nFeminine: arrière-grand-mère.",
   example:"A: Mon arrière-grand-parent est arrivé en France en 1920.\nB: D'où venait-il?\nA: De Pologne, comme beaucoup à cette époque.\nB: L'immigration a enrichi la culture française.",
   exampleSrc:"A: My great-grandparent arrived in France in 1920.\nB: Where did he come from?\nA: From Poland, like many at that time.\nB: Immigration enriched French culture.",
   funFact:"'Arrière' (behind/back) + 'grand-parent'. Add another 'arrière-' for great-great: 'arrière-arrière-grand-parent'."},

  {type:"mc", q:"Quel idiome signifie 'avoir un langage très grossier'?",
   opts:["Jurer comme un charretier","Porter un binocle","Ouvrir un coffre-fort","Poser un guéridon"],
   ans:"Jurer comme un charretier",
   hint:"Carter drivers were famous for their extremely crude vocabulary"},

  {type:"fb", s:"Cette maison est {1} depuis dix ans, personne n'y vit.",
   a:["inhabitée"], opts:["inhabitée","insalubre","incomplète","indirecte"],
   hint:"Not lived in, empty of residents for a long period",
   sSrc:"This house has been {1} for ten years, nobody lives there."},

  {type:"match", pairs:[
    {trg:"le coffre-fort", src:"safe / strongbox"},
    {trg:"le guet-apens", src:"ambush"},
    {trg:"le grille-pain", src:"toaster"},
    {trg:"le coupe-papier", src:"letter opener"},
    {trg:"inhabité", src:"uninhabited"}
  ]},

  {type:"mc", q:"Qu'est-ce qu'un guéridon?",
   opts:["Une petite table ronde sur un pied","Un type de lampe","Un outil de jardinage","Un instrument de musique"],
   ans:"Une petite table ronde sur un pied",
   hint:"A classic piece of French furniture with a single central leg"},

  {type:"fb", s:"Il a reçu une {1} d'insultes après sa décision impopulaire.",
   a:["bordée"], opts:["bordée","cagoule","galère","griffe"],
   hint:"A barrage or volley, originally a naval term for a broadside of cannon fire",
   sSrc:"He received a {1} of insults after his unpopular decision."},

  {type:"drag_fill", s:"Le voyage s'est passé sans {1} et nous sommes arrivés dans une maison {2}.",
   blanks:{"1":"encombre","2":"inhabitée"},
   pool:["encombre","inhabitée","bordée","insalubre"],
   hint:"The trip went smoothly and we arrived at a place where nobody had been living"},

  {type:"mc", q:"Pourquoi le coupe-papier est-il devenu un objet décoratif?",
   opts:["Parce que les courriels ont remplacé les lettres","Parce qu'il est trop dangereux","Parce qu'il coûte trop cher","Parce qu'il est difficile à trouver"],
   ans:"Parce que les courriels ont remplacé les lettres",
   hint:"With digital communication replacing physical mail, the tool lost its primary purpose"}
]};
export default LESSON_12;
