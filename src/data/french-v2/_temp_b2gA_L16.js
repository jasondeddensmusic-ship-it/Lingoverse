const LESSON_16 = {
  id:"frv2_b2gA_l16", title:"Lieux et institutions", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Lieux et institutions",
     desc:"Navigate French institutions and places with confidence. From religious sites to government buildings, master the vocabulary of public life.",
     goals:["Learn 14 place and institution words","Discuss public buildings and their roles","Use formal vocabulary for official contexts"]},

    {type:"teach", trg:"la paroisse", src:"the parish", pos:"noun", gender:"f",
     note:"Feminine noun. A local church district and its community.",
     example:"A: La paroisse organise une kermesse dimanche.\nB: Tout le quartier sera la.",
     exampleSrc:"A: The parish is organizing a fair on Sunday.\nB: The whole neighborhood will be there.",
     funFact:"Even in secular France, the paroisse remains a community anchor. 'Kermesse paroissiale' is a beloved tradition."},

    {type:"teach", trg:"le presbytene", src:"the presbytery, the rectory", pos:"noun", gender:"m",
     note:"Masculine noun. The residence of a parish priest.\nOften a historic building.",
     example:"A: Le presbytere est classe monument historique.\nB: C'est un batiment du XVIIe siecle.",
     exampleSrc:"A: The presbytery is a listed historic monument.\nB: It's a 17th century building.",
     funFact:"Boris Vian's novel 'L'Ecume des jours' opens with a famous absurdist phrase about a presbytery and a garden."},

    {type:"teach", trg:"le cabinet", src:"the office (professional), the cabinet", pos:"noun", gender:"m",
     note:"Masculine noun. A professional office (doctor, lawyer).\nAlso: a political cabinet.",
     example:"A: Le cabinet du dentiste est au troisieme etage.\nB: J'ai rendez-vous a 14 heures.",
     exampleSrc:"A: The dentist's office is on the third floor.\nB: I have an appointment at 2 PM.",
     funFact:"'Cabinet ministeriel' is the minister's personal staff. 'Cabinet de curiosites' is a 17th century collection room."},

    {type:"teach", trg:"la creperie", src:"the creperie", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.\nA Breton tradition spread across France.",
     example:"A: On va a la creperie ce soir ?\nB: Oh oui, j'adore les galettes au sarrasin.",
     exampleSrc:"A: Shall we go to the creperie tonight?\nB: Oh yes, I love buckwheat galettes.",
     funFact:"Brittany is the homeland of crepes. A true creperie serves 'galettes' (savory, buckwheat) and 'crepes' (sweet, wheat)."},

    {type:"teach", trg:"le cafe-concert", src:"the cafe-concert, music hall", pos:"noun", gender:"m",
     note:"Masculine compound noun. A venue combining cafe and live music.\nHistoric entertainment form.",
     example:"A: Les cafes-concerts etaient populaires au XIXe siecle.\nB: C'est la que la chanson francaise est nee.",
     exampleSrc:"A: Cafe-concerts were popular in the 19th century.\nB: That's where French chanson was born.",
     funFact:"Edith Piaf, Mistinguett, and Maurice Chevalier all started in cafes-concerts. The birthplace of French popular song."},

    {type:"mc",
     q:"Quel mot designe la communaute locale d'une eglise ?",
     opts:["la paroisse","le cabinet","la creperie","le presbytere"],
     ans:"la paroisse",
     hint:"A church district and its community. Organizes local events and fairs."},

    {type:"teach", trg:"le tribunal", src:"the court, the tribunal", pos:"noun", gender:"m",
     note:"Masculine noun. A court of law.\n'Tribunal de grande instance' = high court.",
     example:"A: L'affaire sera jugee par le tribunal.\nB: L'audience est prevue pour mars.",
     exampleSrc:"A: The case will be tried by the court.\nB: The hearing is scheduled for March.",
     funFact:"France's judicial system is based on the Napoleonic Code. Judges investigate cases actively, unlike in common law."},

    {type:"teach", trg:"la prefecture", src:"the prefecture", pos:"noun", gender:"f",
     note:"Feminine noun. The regional administrative headquarters.\nWhere official permits are issued.",
     example:"A: Je dois aller a la prefecture pour mon titre de sejour.\nB: Prends rendez-vous en ligne.",
     exampleSrc:"A: I need to go to the prefecture for my residence permit.\nB: Book an appointment online.",
     funFact:"Each French department has a prefecture. Lines at the prefecture are legendary for their length and frustration."},

    {type:"teach", trg:"la sous-prefecture", src:"the sub-prefecture", pos:"noun", gender:"f",
     note:"Feminine noun. A secondary administrative office in a department.",
     example:"A: La sous-prefecture est moins frequentee.\nB: C'est vrai, c'est plus rapide.",
     exampleSrc:"A: The sub-prefecture is less crowded.\nB: True, it's faster.",
     funFact:"France has 233 sub-prefectures. They handle administrative tasks for smaller areas within each department."},

    {type:"fb",
     s:"L'affaire sera jugee par le {1} correctionnel.",
     a:["tribunal"],
     opts:["tribunal","cabinet","presbytere","cafe-concert"],
     hint:"A court of law. Where criminal and civil cases are heard by judges.",
     sSrc:"The case will be tried by the criminal {1}."},

    {type:"teach", trg:"le conservatoire", src:"the conservatory", pos:"noun", gender:"m",
     note:"Masculine noun. A school for music, dance, or drama.\nOften publicly funded in France.",
     example:"A: Elle etudie le violon au conservatoire.\nB: C'est une ecole tres selective.",
     exampleSrc:"A: She studies violin at the conservatory.\nB: It's a very selective school.",
     funFact:"The Conservatoire de Paris, founded in 1795, trained Berlioz, Debussy, and Ravel. Free for admitted students."},

    {type:"teach", trg:"la mairie", src:"the town hall", pos:"noun", gender:"f",
     note:"Feminine noun. The municipal government building.\n'Se marier a la mairie' = to have a civil wedding.",
     example:"A: La mairie est ouverte du lundi au vendredi.\nB: Tu peux y faire ta carte d'identite.",
     exampleSrc:"A: The town hall is open Monday to Friday.\nB: You can get your ID card there.",
     funFact:"In France, only the civil ceremony at the mairie is legally binding. Church weddings are optional additions."},

    {type:"teach", trg:"la mediatheque", src:"the media library", pos:"noun", gender:"f",
     note:"Feminine noun. A public library with books, DVDs, music, and internet.\nModern version of 'bibliotheque'.",
     example:"A: La mediatheque propose des ateliers gratuits.\nB: Je vais m'inscrire a celui de photo.",
     exampleSrc:"A: The media library offers free workshops.\nB: I'll sign up for the photography one.",
     funFact:"French mediatheques are community hubs. Beyond books, they offer concerts, exhibitions, and digital literacy classes."},

    {type:"mc",
     q:"Ou doit-on aller pour obtenir un titre de sejour en France ?",
     opts:["a la prefecture","au tribunal","a la mairie","au conservatoire"],
     ans:"a la prefecture",
     hint:"The regional administrative headquarters. Known for long queues and paperwork."},

    {type:"teach", trg:"le commissariat", src:"the police station", pos:"noun", gender:"m",
     note:"Masculine noun. A police station. 'Commissariat de police'.\nHeaded by a 'commissaire'.",
     example:"A: J'ai depose une plainte au commissariat.\nB: Ils vont ouvrir une enquete.",
     exampleSrc:"A: I filed a complaint at the police station.\nB: They're going to open an investigation.",
     funFact:"French police dramas always feature the commissariat. 'Commissaire Maigret' made it famous worldwide."},

    {type:"fb",
     s:"Elle etudie le piano au {1} depuis l'age de six ans.",
     a:["conservatoire"],
     opts:["conservatoire","commissariat","tribunal","cabinet"],
     hint:"A school dedicated to music, dance, or dramatic arts. Often publicly funded.",
     sSrc:"She has studied piano at the {1} since age six."},

    {type:"match", pairs:[
      {trg:"creperie", src:"creperie"},
      {trg:"prefecture", src:"prefecture"},
      {trg:"mairie", src:"town hall"},
      {trg:"mediatheque", src:"media library"},
      {trg:"commissariat", src:"police station"}
    ]},

    {type:"mc",
     q:"Quel lieu historique servait de salle de spectacle avec cafe ?",
     opts:["le cafe-concert","la creperie","le conservatoire","le cabinet"],
     ans:"le cafe-concert",
     hint:"A 19th century entertainment venue. Where French popular song (chanson) was born."}
  ]
};
export default LESSON_16;
