const LESSON_4 = {
  id:"frv2_b2gA_l4", title:"Le monde numerique", icon:"\u{1F4BB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde numerique",
     desc:"Navigate the digital world in French. From cybersecurity to online culture, master the B2 vocabulary of technology and the internet.",
     goals:["Learn 14 digital and technology words","Discuss online trends and risks","Use tech vocabulary in formal contexts"]},

    {type:"teach", trg:"la blogosphere", src:"the blogosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The collective world of blogs and bloggers.",
     example:"A: La blogosphere francaise est tres active.\nB: Oui, surtout sur la mode et la cuisine.",
     exampleSrc:"A: The French blogosphere is very active.\nB: Yes, especially on fashion and cooking.",
     funFact:"France has one of Europe's most vibrant blog cultures. 'Blogeur' and 'blogueur' are both used."},

    {type:"teach", trg:"le mixage", src:"the mixing (audio/video)", pos:"noun", gender:"m",
     note:"Masculine noun. The process of combining audio or video tracks.",
     example:"A: Le mixage de cet album est impeccable.\nB: Le son est clair et equilibre.",
     exampleSrc:"A: The mixing on this album is impeccable.\nB: The sound is clear and balanced.",
     funFact:"French music production is world-renowned. Daft Punk popularized electronic mixage globally."},

    {type:"teach", trg:"le photomontage", src:"the photomontage", pos:"noun", gender:"m",
     note:"Masculine noun. A composite image made from multiple photos.",
     example:"A: Ce photomontage est tres reussi.\nB: On dirait une vraie photo.",
     exampleSrc:"A: This photomontage is very well done.\nB: It looks like a real photo.",
     funFact:"The Surrealists in 1920s Paris pioneered photomontage as an art form. Man Ray was a master."},

    {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of identifying someone or something.\nAlso: login authentication.",
     example:"A: L'identification numerique est obligatoire.\nB: Il faut votre carte d'identite.",
     exampleSrc:"A: Digital identification is mandatory.\nB: You need your ID card.",
     funFact:"France's 'carte d'identite' is a key document. Digital identification with FranceConnect is expanding rapidly."},

    {type:"teach", trg:"le plurilinguisme", src:"multilingualism", pos:"noun", gender:"m",
     note:"Masculine noun. The ability to use multiple languages.",
     example:"A: Le plurilinguisme est un atout professionnel.\nB: Les entreprises le valorisent de plus en plus.",
     exampleSrc:"A: Multilingualism is a professional asset.\nB: Companies value it more and more.",
     funFact:"The EU officially promotes plurilinguisme. France has over 75 regional and minority languages."},

    {type:"mc",
     q:"Quel mot designe l'ensemble des blogs et blogueurs sur internet ?",
     opts:["la blogosphere","le photomontage","le mixage","le plurilinguisme"],
     ans:"la blogosphere",
     hint:"A compound word combining 'blog' with the Greek suffix for sphere or world."},

    {type:"teach", trg:"la justification", src:"the justification", pos:"noun", gender:"f",
     note:"Feminine noun. A valid reason or explanation for something.",
     example:"A: Quelle est la justification de cette depense ?\nB: C'est un investissement necessaire.",
     exampleSrc:"A: What is the justification for this expense?\nB: It's a necessary investment.",
     funFact:"In typography, 'justification' means text alignment. In French printing, 'justifie' text is aligned on both sides."},

    {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The act of becoming or making something more intense.",
     example:"A: L'intensification des controles est necessaire.\nB: Oui, pour garantir la securite.",
     exampleSrc:"A: The intensification of controls is necessary.\nB: Yes, to guarantee security.",
     funFact:"Climate scientists use this term constantly for extreme weather events becoming more frequent."},

    {type:"teach", trg:"l'omission", src:"the omission", pos:"noun", gender:"f",
     note:"Feminine noun. Something left out, whether accidentally or deliberately.",
     example:"A: C'est une omission grave dans le rapport.\nB: Il faut la corriger immediatement.",
     exampleSrc:"A: It's a serious omission in the report.\nB: We need to correct it immediately.",
     funFact:"In French law, 'omission de porter secours' (failure to assist) is a criminal offense since 1941."},

    {type:"fb",
     s:"L'{1} des cyberattaques preoccupe les gouvernements du monde entier.",
     a:["intensification"],
     opts:["intensification","identification","justification","omission"],
     hint:"The process of something becoming stronger or more frequent. Think of escalation.",
     sSrc:"The {1} of cyberattacks worries governments worldwide."},

    {type:"teach", trg:"la division", src:"the division, the split", pos:"noun", gender:"f",
     note:"Feminine noun. A separation or disagreement between groups.",
     example:"A: La division au sein du parti est profonde.\nB: Ils ne sont d'accord sur rien.",
     exampleSrc:"A: The division within the party is deep.\nB: They don't agree on anything.",
     funFact:"'Diviser pour regner' (divide and conquer) is attributed to Louis XI but echoes Caesar's strategy."},

    {type:"teach", trg:"l'oscillation", src:"the oscillation, the fluctuation", pos:"noun", gender:"f",
     note:"Feminine noun. A swinging back and forth between positions or states.",
     example:"A: Les oscillations du marche sont inquietantes.\nB: Il faut rester prudent.",
     exampleSrc:"A: The market oscillations are worrying.\nB: We need to stay cautious.",
     funFact:"Used in physics for pendulums and in economics for market swings. French scientists love precise vocabulary."},

    {type:"teach", trg:"positionner", src:"to position, to place", pos:"verb", gender:null,
     note:"Regular -er verb. Reflexive 'se positionner' means to take a stance.",
     example:"A: Comment vous positionnez-vous sur ce sujet ?\nB: Je suis plutot favorable a la reforme.",
     exampleSrc:"A: How do you position yourself on this topic?\nB: I'm rather in favor of the reform.",
     funFact:"Business French loves this verb. 'Se positionner sur un marche' means to establish your market position."},

    {type:"mc",
     q:"Quel mot designe le fait de laisser quelque chose hors d'un texte ou rapport ?",
     opts:["une omission","une oscillation","une division","une justification"],
     ans:"une omission",
     hint:"From Latin 'omittere' meaning to let go. Something that was left out."},

    {type:"teach", trg:"le modernisme", src:"modernism", pos:"noun", gender:"m",
     note:"Masculine noun. An artistic and cultural movement embracing new forms.",
     example:"A: Le modernisme a revolutionne l'architecture.\nB: Les lignes epurees et les materiaux bruts.",
     exampleSrc:"A: Modernism revolutionized architecture.\nB: Clean lines and raw materials.",
     funFact:"Le Corbusier's modernist buildings in France are UNESCO World Heritage sites."},

    {type:"fb",
     s:"Comment vous {1}-vous sur la question du nucleaire ?",
     a:["positionnez"],
     opts:["positionnez","identifiez","justifiez","divisez"],
     hint:"To take a stance or express where you stand. Reflexive form used here.",
     sSrc:"How do you {1} yourself on the nuclear question?"},

    {type:"match", pairs:[
      {trg:"mixage", src:"mixing (audio)"},
      {trg:"identification", src:"identification"},
      {trg:"omission", src:"omission"},
      {trg:"oscillation", src:"fluctuation"},
      {trg:"modernisme", src:"modernism"}
    ]},

    {type:"mc",
     q:"Quel nom designe la capacite de parler plusieurs langues ?",
     opts:["le plurilinguisme","le modernisme","le photomontage","le mixage"],
     ans:"le plurilinguisme",
     hint:"Built from 'pluri-' (many) and 'linguisme' (relating to languages)."}
  ]
};
export default LESSON_4;
