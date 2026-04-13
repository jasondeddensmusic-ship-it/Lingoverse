// L06: Arts and Entertainment — 20 B1 gap words
const LESSON_6 = {
  id:"nlv2_b1gap_l6", title:"Kunst en Amusement", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts and Entertainment",
     desc:"Learn Dutch vocabulary for the performing arts, film, and entertainment. From actors to applause.",
     goals:["Master 20 arts and entertainment words","Talk about movies and performances","Discuss artists and shows"]},

    {type:"teach", trg:"de acteur", src:"the actor", pos:"noun", gender:"c",
     note:"Common gender (de). Male actor. French origin.",
     example:"A: Die acteur speelt heel goed.\nB: Ja, hij verdient een prijs.",
     exampleSrc:"A: That actor performs really well.\nB: Yes, he deserves an award.",
     funFact:"From French 'acteur'. Dutch uses separate words for male (acteur) and female (actrice) actors."},

    {type:"teach", trg:"de actrice", src:"the actress", pos:"noun", gender:"c",
     note:"Common gender (de). Female actor. French origin.",
     example:"A: De actrice won een Gouden Kalf.\nB: Wat knap!",
     exampleSrc:"A: The actress won a Golden Calf.\nB: How impressive!",
     funFact:"The 'Gouden Kalf' (Golden Calf) is the most prestigious Dutch film award, given at the Netherlands Film Festival."},

    {type:"teach", trg:"de actie", src:"the action / the campaign", pos:"noun", gender:"c",
     note:"Common gender (de). Can mean action or a promotional campaign.",
     example:"A: De film zit vol actie.\nB: Perfect, ik hou van spanning!",
     exampleSrc:"A: The movie is full of action.\nB: Perfect, I love excitement!",
     funFact:"Also used for charity campaigns: 'actie voeren' means to campaign. Very versatile word."},

    {type:"teach", trg:"de actiefilm", src:"the action movie", pos:"noun", gender:"c",
     note:"Common gender (de). Actie + film compound.",
     example:"A: Zullen we een actiefilm kijken?\nB: Ja, leuk! Welke?",
     exampleSrc:"A: Shall we watch an action movie?\nB: Yes, fun! Which one?",
     funFact:"Hollywood action films are hugely popular in the Netherlands. They are shown with Dutch subtitles, never dubbed."},

    {type:"mc",
     q:"Een film met veel explosies, gevechten en spanning heet een ___.",
     opts:["actiefilm","animatie","affiche","album"],
     ans:"actiefilm",
     hint:"What type of movie features car chases and fight scenes?"},

    {type:"teach", trg:"het applaus", src:"the applause", pos:"noun", gender:"n",
     note:"Neuter gender (het). Clapping to show appreciation.",
     example:"A: Het publiek gaf een staand applaus.\nB: De voorstelling was fantastisch.",
     exampleSrc:"A: The audience gave a standing ovation.\nB: The performance was fantastic.",
     funFact:"From Latin 'applaudere'. In Dutch theaters, stamping feet also shows appreciation."},

    {type:"teach", trg:"applaudisseren", src:"to applaud / to clap", pos:"verb", gender:null,
     note:"Inseparable verb. Ik applaudisseer, jij applaudisseert.",
     example:"A: Iedereen begon te applaudisseren.\nB: Het was echt een geweldig concert.",
     exampleSrc:"A: Everyone started to applaud.\nB: It was truly a great concert.",
     funFact:"Dutch also uses the simpler 'klappen' (to clap). 'Applaudisseren' sounds more formal and French."},

    {type:"teach", trg:"het album", src:"the album", pos:"noun", gender:"n",
     note:"Neuter gender (het). Music album or photo album.",
     example:"A: Heb je het nieuwe album al gehoord?\nB: Ja, het is geweldig!",
     exampleSrc:"A: Have you heard the new album already?\nB: Yes, it is amazing!",
     funFact:"Same word in English, Dutch, and German. From Latin 'album' (white tablet for writing)."},

    {type:"teach", trg:"de animatie", src:"the animation", pos:"noun", gender:"c",
     note:"Common gender (de). Animated film or the technique.",
     example:"A: Deze animatie is prachtig gemaakt.\nB: Ja, elk detail klopt.",
     exampleSrc:"A: This animation is beautifully made.\nB: Yes, every detail is right.",
     funFact:"The Netherlands has a growing animation industry. The Holland Animation Film Festival is world-renowned."},

    {type:"teach", trg:"de affiche", src:"the poster", pos:"noun", gender:"c",
     note:"Common gender (de). French loanword for a promotional poster.",
     example:"A: Heb je de affiche voor de voorstelling gezien?\nB: Ja, het ontwerp is mooi.",
     exampleSrc:"A: Have you seen the poster for the show?\nB: Yes, the design is beautiful.",
     funFact:"From French. In Belgium, 'affiche' is used more. In the Netherlands, 'poster' is also common."},

    {type:"fb",
     s:"Na het concert begon iedereen te {1}.",
     a:["applaudisseren"],
     opts:["applaudisseren","animeren","amuseren","adoreren"],
     hint:"Which verb means to show appreciation by clapping your hands?",
     sSrc:"After the concert everyone started to {1}."},

    {type:"teach", trg:"het amusement", src:"the entertainment / the amusement", pos:"noun", gender:"n",
     note:"Neuter gender (het). Fun and entertainment.",
     example:"A: Er is veel amusement in de stad.\nB: Ja, theaters, bioscopen, festivals.",
     exampleSrc:"A: There is a lot of entertainment in the city.\nB: Yes, theaters, cinemas, festivals.",
     funFact:"French loanword. 'Amusementspark' is the Dutch word for amusement park. The Efteling is the most famous."},

    {type:"teach", trg:"amuseren", src:"to amuse / to entertain", pos:"verb", gender:null,
     note:"Inseparable verb. 'Zich amuseren' = to enjoy oneself.",
     example:"A: Heb je je geamuseerd?\nB: Ja, het was een leuke avond!",
     exampleSrc:"A: Did you enjoy yourself?\nB: Yes, it was a fun evening!",
     funFact:"Reflexive: 'zich amuseren'. You 'amuse yourself'. Very common in spoken Dutch."},

    {type:"teach", trg:"de act", src:"the act / the performance", pos:"noun", gender:"c",
     note:"Common gender (de). A performance or show segment.",
     example:"A: Zijn act was de beste van de avond.\nB: Hij was echt grappig.",
     exampleSrc:"A: His act was the best of the evening.\nB: He was really funny.",
     funFact:"English loanword. Used for comedy acts, circus acts, and talent show performances."},

    {type:"teach", trg:"de anekdote", src:"the anecdote", pos:"noun", gender:"c",
     note:"Common gender (de). A short, entertaining story.",
     example:"A: Mijn opa vertelde altijd anekdotes.\nB: Over zijn tijd in het leger?",
     exampleSrc:"A: My grandpa always told anecdotes.\nB: About his time in the army?",
     funFact:"From Greek 'anekdota' (things unpublished). Same word across many European languages."},

    {type:"mc",
     q:"Een kort, grappig verhaal dat iemand vertelt heet een ___.",
     opts:["anekdote","animatie","affiche","actie"],
     ans:"anekdote",
     hint:"Think of a brief amusing story someone shares at a dinner party."},

    {type:"teach", trg:"de auteur", src:"the author", pos:"noun", gender:"c",
     note:"Common gender (de). A writer of books or articles.",
     example:"A: Wie is de auteur van dit boek?\nB: Het is geschreven door Herman Koch.",
     exampleSrc:"A: Who is the author of this book?\nB: It was written by Herman Koch.",
     funFact:"From Latin 'auctor'. 'Het Diner' by Herman Koch is one of the best-selling Dutch novels internationally."},

    {type:"teach", trg:"het auteursrecht", src:"copyright", pos:"noun", gender:"n",
     note:"Neuter gender (het). Auteur + recht (right) compound.",
     example:"A: Het auteursrecht beschermt de schrijver.\nB: Hoelang geldt dat?",
     exampleSrc:"A: Copyright protects the writer.\nB: How long does it apply?",
     funFact:"Dutch copyright law (Auteurswet) protects works for 70 years after the author's death."},

    {type:"teach", trg:"de actualiteit", src:"current events / the news", pos:"noun", gender:"c",
     note:"Common gender (de). What is happening now in society.",
     example:"A: De actualiteit verandert elke dag.\nB: Daarom kijk ik het journaal.",
     exampleSrc:"A: Current events change every day.\nB: That is why I watch the news.",
     funFact:"Dutch news programs like NOS Journaal and RTL Nieuws cover 'de actualiteit' daily."},

    {type:"teach", trg:"artistiek", src:"artistic", pos:"adj", gender:null,
     note:"Adjective. Related to art or showing artistic skill.",
     example:"A: Het was een artistiek hoogstandje.\nB: Echt heel bijzonder.",
     exampleSrc:"A: It was an artistic highlight.\nB: Really very special.",
     funFact:"From French 'artistique'. Dutch culture values art highly: the country produced Rembrandt and Van Gogh."},

    {type:"match", pairs:[
      {trg:"acteur", src:"actor"},
      {trg:"actrice", src:"actress"},
      {trg:"applaus", src:"applause"},
      {trg:"auteur", src:"author"},
      {trg:"amusement", src:"entertainment"}
    ]},

    {type:"fb",
     s:"Heb je je goed {1} op het feest gisteravond?",
     a:["geamuseerd"],
     opts:["geamuseerd","geapplaudisseerd","geacteerd","geanimeerd"],
     hint:"Which past participle means you had a good time and enjoyed yourself?",
     sSrc:"Did you {1} yourself well at the party last night?"},

    {type:"mc",
     q:"Wie schrijft boeken en verhalen als beroep?",
     opts:["een auteur","een acteur","een atleet","een adviseur"],
     ans:"een auteur",
     hint:"Think about the person whose job is creating written works."}
  ]
};
export default LESSON_6;
