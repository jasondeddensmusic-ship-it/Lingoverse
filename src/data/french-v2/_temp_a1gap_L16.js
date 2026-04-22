const LESSON_16 = {
  id:"frv2_a1gap_l16", title:"L'art et la culture", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'art et la culture",
     desc:"The world of arts and culture. From paintings to archaeology, explore the vocabulary that makes France a cultural powerhouse.",
     goals:["Learn 20 art and culture words","Discuss artistic activities","Talk about museums and cultural events"]},

    {type:"teach", trg:"l'art", src:"the art", pos:"noun", gender:"m",
     note:"Masculine noun. Covers all visual and performing arts.",
     example:"A: Tu aimes l'art moderne ?\nB: Oui, surtout la peinture.",
     exampleSrc:"A: Do you like modern art?\nB: Yes, especially painting.",
     funFact:"France has more than 1,200 museums. The Louvre alone holds over 380,000 objects."},

    {type:"teach", trg:"l'affiche", src:"the poster", pos:"noun", gender:"f",
     note:"Feminine noun. A printed notice or decorative poster.",
     example:"A: Tu as vu l'affiche du film ?\nB: Oui, elle est superbe.",
     exampleSrc:"A: Did you see the movie poster?\nB: Yes, it's superb.",
     funFact:"Toulouse-Lautrec made the art poster famous in 1890s Paris. His Moulin Rouge posters are iconic."},

    {type:"teach", trg:"l'animation", src:"the animation, the activity program", pos:"noun", gender:"f",
     note:"Feminine noun. Both cartoon animation and organized group activities.",
     example:"A: Il y a de l'animation ce soir ?\nB: Oui, un concert gratuit !",
     exampleSrc:"A: Is there any entertainment tonight?\nB: Yes, a free concert!",
     funFact:"France is a major animation hub. 'Persepolis' and 'The Illusionist' are acclaimed French animated films."},

    {type:"teach", trg:"l'antiquité", src:"the antiquity, the ancient era", pos:"noun", gender:"f",
     note:"Feminine noun. The classical Greek and Roman period.",
     example:"A: Cette statue date de l'Antiquité.\nB: Elle a plus de 2 000 ans !",
     exampleSrc:"A: This statue dates from antiquity.\nB: It's over 2,000 years old!",
     funFact:"France's Roman heritage is everywhere: the Pont du Gard, arenas in Nîmes, and theaters in Lyon."},

    {type:"teach", trg:"artistique", src:"artistic", pos:"adj", gender:null,
     note:"Same form for both genders. Related to art or artistry.",
     example:"A: Elle a un talent artistique.\nB: Oui, elle dessine très bien.",
     exampleSrc:"A: She has artistic talent.\nB: Yes, she draws very well.",
     funFact:"'La direction artistique' is the art direction of a project, from films to fashion shows."},

    {type:"mc",
     q:"Quel mot signifie 'poster' en français ?",
     opts:["l'affiche","l'animation","l'art","l'antiquité"],
     ans:"l'affiche",
     hint:"This feminine noun is a printed image displayed on walls to advertise or decorate."},

    {type:"teach", trg:"l'archéologie", src:"the archaeology", pos:"noun", gender:"f",
     note:"Feminine noun. The study of ancient civilizations through excavation.",
     example:"A: Tu étudies l'archéologie ?\nB: Oui, je fais des fouilles en Grèce.",
     exampleSrc:"A: Are you studying archaeology?\nB: Yes, I do excavations in Greece.",
     funFact:"French archaeology is world-class. Jean-François Champollion decoded Egyptian hieroglyphs in 1822."},

    {type:"teach", trg:"archéologique", src:"archaeological", pos:"adj", gender:null,
     note:"Same form for both genders. Related to archaeology.",
     example:"A: C'est un site archéologique ?\nB: Oui, il date de l'époque romaine.",
     exampleSrc:"A: Is this an archaeological site?\nB: Yes, it dates from the Roman era.",
     funFact:"France has thousands of 'sites archéologiques', from prehistoric caves to Roman villas."},

    {type:"teach", trg:"l'athlétisme", src:"track and field, athletics", pos:"noun", gender:"m",
     note:"Masculine noun. Running, jumping, and throwing sports.",
     example:"A: Tu fais de l'athlétisme ?\nB: Oui, je cours le cent mètres.",
     exampleSrc:"A: Do you do track and field?\nB: Yes, I run the hundred meters.",
     funFact:"France has hosted the Olympics three times: 1900, 1924, and 2024 (all in Paris)."},

    {type:"teach", trg:"athlétique", src:"athletic", pos:"adj", gender:null,
     note:"Same form for both genders. Physically strong and fit.",
     example:"A: Il est très athlétique.\nB: Normal, il fait du sport chaque jour.",
     exampleSrc:"A: He's very athletic.\nB: Of course, he exercises every day.",
     funFact:"The word comes from Greek 'athletes' (competitor). The same root in both French and English."},

    {type:"fb",
     s:"Ce site {1} date de l'époque romaine.",
     a:["archéologique"],
     opts:["archéologique","artistique","athlétique","antique"],
     hint:"This adjective describes something related to the study of ancient ruins and civilizations.",
     sSrc:"This {1} site dates from the Roman era."},

    {type:"teach", trg:"antique", src:"ancient, antique", pos:"adj", gender:null,
     note:"Same form for both genders. Very old, from classical times.",
     example:"A: Ce vase est antique ?\nB: Oui, il a trois cents ans.",
     exampleSrc:"A: Is this vase antique?\nB: Yes, it's three hundred years old.",
     funFact:"'Antique' in French typically means from the Greek/Roman era. For 'old furniture', use 'ancien'."},

    {type:"teach", trg:"l'artifice", src:"the artifice, the trick", pos:"noun", gender:"m",
     note:"Masculine noun. Cleverness or deception. Also used in 'feu d'artifice'.",
     example:"A: Le feu d'artifice est à quelle heure ?\nB: À vingt-deux heures.",
     exampleSrc:"A: What time are the fireworks?\nB: At ten PM.",
     funFact:"'Feu d'artifice' (fireworks) literally means 'fire of artifice'. France puts on spectacular shows on July 14th."},

    {type:"teach", trg:"artificiel", src:"artificial", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'artificielle'. Not natural, man-made.",
     example:"A: Ces fleurs sont artificielles ?\nB: Oui, mais elles sont belles.",
     exampleSrc:"A: Are these flowers artificial?\nB: Yes, but they're beautiful.",
     funFact:"'Intelligence artificielle' (AI) is a hot topic in France. The same term as in English."},

    {type:"teach", trg:"l'attraction", src:"the attraction, the ride", pos:"noun", gender:"f",
     note:"Feminine noun. A tourist attraction or amusement park ride.",
     example:"A: Quelle attraction tu préfères ?\nB: Les montagnes russes !",
     exampleSrc:"A: Which ride do you prefer?\nB: The roller coaster!",
     funFact:"'Montagnes russes' (roller coasters) literally means 'Russian mountains' in French."},

    {type:"mc",
     q:"Que signifie 'feu d'artifice' ?",
     opts:["wildfire","fireworks","artificial fire","campfire"],
     ans:"fireworks",
     hint:"This compound expression combines 'fire' with a word meaning cleverness or craft."},

    {type:"teach", trg:"l'ambiance", src:"the atmosphere, the vibe", pos:"noun", gender:"f",
     note:"Feminine noun. The mood or feel of a place.",
     example:"A: L'ambiance est super ici !\nB: Oui, la musique est géniale.",
     exampleSrc:"A: The vibe is great here!\nB: Yes, the music is awesome.",
     funFact:"French people judge restaurants by 'l'ambiance' as much as by the food. Atmosphere is everything."},

    {type:"teach", trg:"l'acte", src:"the act (theater, law)", pos:"noun", gender:"m",
     note:"Masculine noun. A division of a play or a formal legal document.",
     example:"A: La pièce a combien d'actes ?\nB: Cinq actes, c'est du classique.",
     exampleSrc:"A: How many acts does the play have?\nB: Five acts, it's classical.",
     funFact:"Molière, France's greatest playwright, typically wrote plays in five acts, following classical tradition."},

    {type:"teach", trg:"l'allure", src:"the look, the pace", pos:"noun", gender:"f",
     note:"Feminine noun. Someone's appearance/style or speed of movement.",
     example:"A: Elle a de l'allure !\nB: Oui, elle est très élégante.",
     exampleSrc:"A: She has style!\nB: Yes, she's very elegant.",
     funFact:"'Avoir de l'allure' means to have a stylish presence. It's the highest French fashion compliment."},

    {type:"teach", trg:"l'agrément", src:"the approval, the pleasure", pos:"noun", gender:"m",
     note:"Masculine noun. Official approval or something enjoyable.",
     example:"A: Le jardin est un lieu d'agrément.\nB: Oui, c'est très relaxant.",
     exampleSrc:"A: The garden is a place of pleasure.\nB: Yes, it's very relaxing.",
     funFact:"'Voyage d'agrément' means a pleasure trip, as opposed to a business trip."},

    {type:"fb",
     s:"L'{1} du restaurant est chaleureuse, j'adore la musique.",
     a:["ambiance"],
     opts:["ambiance","allure","attraction","animation"],
     hint:"This feminine noun describes the mood, feel, or vibe of a place.",
     sSrc:"The {1} of the restaurant is warm, I love the music."},

    {type:"match", pairs:[
      {trg:"art", src:"art"},
      {trg:"affiche", src:"poster"},
      {trg:"artifice", src:"trick/fireworks"},
      {trg:"ambiance", src:"atmosphere/vibe"},
      {trg:"acte", src:"act (theater)"}
    ]},

    {type:"mc",
     q:"Que veut dire 'avoir de l'allure' ?",
     opts:["to be old","to act well","to have style","to walk fast"],
     ans:"to have style",
     hint:"This expression compliments someone's elegant appearance and stylish presence."},

    {type:"fb",
     s:"Le feu d'{1} du 14 juillet est magnifique à Paris.",
     a:["artifice"],
     opts:["artifice","art","animation","attraction"],
     hint:"This word completes the expression for the spectacular light show in the sky.",
     sSrc:"The {1} display on July 14th is magnificent in Paris."}
  ]
};
export default LESSON_16;
