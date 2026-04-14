const LESSON_9 = {
  id:"frv2_b2g8_l9", title:"Éducation et savoir", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Éducation et savoir",
     desc:"Vocabulary for discussing education, knowledge, and intellectual pursuits at B2 level.",
     goals:["Learn 15 education and knowledge words","Discuss academic topics fluently","Understand institutional vocabulary"]},

    {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters in a writing system.\nFrom Greek alpha + beta.",
     example:"A: L'alphabet français compte 26 lettres.\nB: Comme l'anglais, mais avec des accents.",
     exampleSrc:"A: The French alphabet has 26 letters.\nB: Like English, but with accents.",
     funFact:"French uses the same 26 Latin letters as English but adds 16 accent combinations (é, è, ê, ë, etc.)."},

    {type:"teach", trg:"la laïcisation", src:"secularization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of removing religious influence.\nCentral to French identity.",
     example:"A: La laïcisation de l'école date de 1882.\nB: Les lois de Jules Ferry.",
     exampleSrc:"A: The secularization of schools dates from 1882.\nB: The Jules Ferry laws.",
     funFact:"'Laïcité' is a core French value. No equivalent exists in English. It means strict state-religion separation."},

    {type:"teach", trg:"la néologie", src:"neology (creation of new words)", pos:"noun", gender:"f",
     note:"Feminine noun. The process of creating or adopting new words.\nA linguistic term.",
     example:"A: La néologie enrichit la langue.\nB: Internet a créé des centaines de mots.",
     exampleSrc:"A: Neology enriches the language.\nB: The internet created hundreds of words.",
     funFact:"The Académie française has a commission dedicated to néologie, creating French alternatives to Anglicisms."},

    {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of seeing something as perfect.\nPsychology and everyday use.",
     example:"A: L'idéalisation du passé est un piège.\nB: Le bon vieux temps n'était pas si bon.",
     exampleSrc:"A: The idealization of the past is a trap.\nB: The good old days weren't so good.",
     funFact:"Freud's concept of idealization was widely adopted in French psychoanalysis, a very popular field in France."},

    {type:"mc",
     q:"Quel concept français décrit la séparation stricte entre l'État et la religion ?",
     opts:["la laïcité","la néologie","l'idéalisation","la démocratisation"],
     ans:"la laïcité",
     hint:"A core French value with no exact English equivalent. Think of state-religion separation."},

    {type:"teach", trg:"l'incrustation", src:"the inlay, the encrustation", pos:"noun", gender:"f",
     note:"Feminine noun. Embedding something into a surface.\nArt, TV, and geology.",
     example:"A: L'incrustation de nacre est magnifique.\nB: C'est un travail d'artisan.",
     exampleSrc:"A: The mother-of-pearl inlay is magnificent.\nB: It's artisan craftsmanship.",
     funFact:"In French TV, 'incrustation' means a picture-in-picture overlay or a chroma key effect."},

    {type:"teach", trg:"l'intégrisme", src:"fundamentalism", pos:"noun", gender:"m",
     note:"Masculine noun. Rigid adherence to a doctrine.\nOriginally a Catholic term in France.",
     example:"A: L'intégrisme menace la liberté de pensée.\nB: Le dialogue est la seule réponse.",
     exampleSrc:"A: Fundamentalism threatens freedom of thought.\nB: Dialogue is the only answer.",
     funFact:"Originally described ultra-traditional Catholics in France. Now used for any form of extremism."},

    {type:"teach", trg:"la déscolarisation", src:"the dropping out of school", pos:"noun", gender:"f",
     note:"Feminine noun. Children leaving the school system.\nA social policy concern.",
     example:"A: La déscolarisation touche les quartiers défavorisés.\nB: Il faut agir rapidement.",
     exampleSrc:"A: Dropping out affects disadvantaged neighborhoods.\nB: We need to act quickly.",
     funFact:"France made education compulsory until age 16 in 1959. 'Déscolarisation' remains a policy priority."},

    {type:"fb",
     s:"La {1} enrichit la langue en créant de nouveaux mots.",
     a:["néologie"],
     opts:["néologie","laïcisation","idéalisation","incrustation"],
     hint:"The linguistic process of creating or adopting new words into a language.",
     sSrc:"{1} enriches the language by creating new words."},

    {type:"teach", trg:"le binocle", src:"the pince-nez, spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned eyeglasses without arms.\nNow humorous or literary.",
     example:"A: Mon grand-père portait un binocle.\nB: Ça lui donnait un air distingué.",
     exampleSrc:"A: My grandfather wore a pince-nez.\nB: It gave him a distinguished air.",
     funFact:"From Latin 'bini oculi' (two eyes). Now mostly used humorously for any glasses."},

    {type:"teach", trg:"la cagoule", src:"the hood, the balaclava", pos:"noun", gender:"f",
     note:"Feminine noun. A head covering that hides the face.\nAlso a children's rain jacket.",
     example:"A: Il portait une cagoule noire.\nB: Impossible de le reconnaître.",
     exampleSrc:"A: He was wearing a black balaclava.\nB: Impossible to recognize him.",
     funFact:"In France, 'cagoule' also means a child's lightweight rain jacket with a hood. Context matters."},

    {type:"teach", trg:"un footballeur", src:"a football player", pos:"noun", gender:"m",
     note:"Masculine noun. A soccer player.\nFeminine: une footballeuse.",
     example:"A: Ce footballeur est devenu une star mondiale.\nB: Ses performances sont incroyables.",
     exampleSrc:"A: This football player has become a world star.\nB: His performances are incredible.",
     funFact:"France's 1998 World Cup victory made footballers like Zidane national heroes overnight."},

    {type:"mc",
     q:"Quel mot décrit l'abandon de l'école par des enfants ?",
     opts:["la déscolarisation","la laïcisation","la néologie","l'incrustation"],
     ans:"la déscolarisation",
     hint:"'Dé-' means removal, 'scolarisation' means schooling. Children leaving the education system."},

    {type:"teach", trg:"un mécène", src:"a patron (of the arts)", pos:"noun", gender:"m",
     note:"Masculine noun. A wealthy supporter of arts and culture.\nFrom the Roman name Maecenas.",
     example:"A: Le musée remercie ses mécènes.\nB: Sans eux, l'exposition n'aurait pas eu lieu.",
     exampleSrc:"A: The museum thanks its patrons.\nB: Without them, the exhibition wouldn't have happened.",
     funFact:"Named after Gaius Maecenas, advisor to Augustus and famous patron of Virgil and Horace."},

    {type:"teach", trg:"un galeriste", src:"a gallery owner", pos:"noun", gender:"m",
     note:"Masculine noun. A person who runs an art gallery.\nFeminine: une galeriste.",
     example:"A: Le galeriste expose des artistes émergents.\nB: C'est courageux et passionnant.",
     exampleSrc:"A: The gallery owner exhibits emerging artists.\nB: It's brave and exciting.",
     funFact:"Paris's gallery district around the Marais has hundreds of galeristes. It's the art capital of Europe."},

    {type:"teach", trg:"la marquise", src:"the marchioness, the canopy", pos:"noun", gender:"f",
     note:"Feminine noun. A noblewoman, or a glass entrance canopy.\nTwo distinct meanings.",
     example:"A: La marquise de l'hôtel protège de la pluie.\nB: C'est aussi très élégant.",
     exampleSrc:"A: The hotel's canopy protects from the rain.\nB: It's also very elegant.",
     funFact:"The Marquise de Pompadour was one of France's most powerful women, mistress of Louis XV."},

    {type:"fb",
     s:"Le musée remercie ses {1} pour leur généreux soutien.",
     a:["mécènes"],
     opts:["mécènes","galeristes","footballeurs","marquises"],
     hint:"Wealthy supporters of arts and culture. Named after a famous Roman patron.",
     sSrc:"The museum thanks its {1} for their generous support."},

    {type:"match", pairs:[
      {trg:"alphabet", src:"alphabet"},
      {trg:"laïcisation", src:"secularization"},
      {trg:"mécène", src:"patron of the arts"},
      {trg:"galeriste", src:"gallery owner"},
      {trg:"cagoule", src:"balaclava, hood"}
    ]},

    {type:"mc",
     q:"Qui gère une galerie d'art ?",
     opts:["un galeriste","un mécène","un footballeur","un négociant"],
     ans:"un galeriste",
     hint:"The person who runs an art gallery and exhibits artists. Think of 'galerie' + '-iste'."},

    {type:"fb",
     s:"L'{1} du passé est un piège, le bon vieux temps n'était pas si bon.",
     a:["idéalisation"],
     opts:["idéalisation","incrustation","intégrisme","laïcisation"],
     hint:"Seeing something as perfect when it was not. A psychological concept.",
     sSrc:"The {1} of the past is a trap, the good old days weren't so good."}
  ]
};
export default LESSON_9;
