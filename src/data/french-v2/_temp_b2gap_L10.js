const LESSON_10 = {
  id:"frv2_b2gap_l10", title:"Chez soi", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Chez soi",
     desc:"Vocabulary for the home, comfort, and domestic life. From furniture to feelings of coziness.",
     goals:["Learn 20 home and comfort vocabulary words","Describe domestic spaces in French","Express feelings about home life"]},

    {type:"teach", trg:"un coussin", src:"a cushion", pos:"noun", gender:"m",
     note:"Masculine noun. A soft padded pillow for sitting or decoration.",
     example:"A: Ce coussin est tres confortable.\nB: Je l'ai achete au marche aux puces.",
     exampleSrc:"A: This cushion is very comfortable.\nB: I bought it at the flea market.",
     funFact:"From Latin 'coxinum' meaning hip cushion. French homes average 6 decorative cushions per sofa."},

    {type:"teach", trg:"une commode", src:"a chest of drawers", pos:"noun", gender:"f",
     note:"Feminine noun. A low cabinet with drawers. Also means 'convenient' as an adjective.",
     example:"A: Range tes affaires dans la commode.\nB: D'accord, elle est dans la chambre.",
     exampleSrc:"A: Put your things in the chest of drawers.\nB: Okay, it's in the bedroom.",
     funFact:"Named for being 'commode' (convenient). Louis XIV's furniture makers created the first commodes around 1700."},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine noun. A secure metal box for valuables. Plural: des coffres-forts.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Tu connais le code ?",
     exampleSrc:"A: The jewels are in the safe.\nB: Do you know the code?",
     funFact:"Literally 'strong chest'. French bank vaults are called 'salles des coffres-forts'."},

    {type:"teach", trg:"douillet", src:"cozy, snug", pos:"adj", gender:null,
     note:"Adjective. Describes a warm, comfortable space. Feminine: douillette.",
     example:"A: Ton appartement est vraiment douillet.\nB: Merci, j'aime me sentir bien chez moi.",
     exampleSrc:"A: Your apartment is really cozy.\nB: Thanks, I like feeling good at home.",
     funFact:"Can also mean 'sensitive to pain' when describing a person. Context is everything."},

    {type:"teach", trg:"chez soi", src:"at home, at one's place", pos:"adv", gender:null,
     note:"Adverbial expression. The feeling of being in your own space.",
     example:"A: Rien ne vaut le confort de chez soi.\nB: C'est vrai, apres un voyage c'est magique.",
     exampleSrc:"A: Nothing beats the comfort of home.\nB: True, after a trip it's magical.",
     funFact:"'Se sentir chez soi' means to feel at home anywhere. 'Chez' comes from Latin 'casa' meaning house."},

    {type:"mc",
     q:"Quel adjectif signifie 'confortable et chaleureux' pour un lieu ?",
     opts:["douillet","ardu","aigre","distinct"],
     ans:"douillet",
     hint:"Think of a snug, warm space with soft blankets. Also means 'sensitive to pain' for people."},

    {type:"teach", trg:"une applique", src:"a wall lamp, a sconce", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative light fixture mounted on a wall.",
     example:"A: Les appliques du salon donnent une lumiere douce.\nB: Elles sont en laiton, non ?",
     exampleSrc:"A: The wall lamps in the living room give a soft light.\nB: They're brass, right?",
     funFact:"From 'appliquer' (to apply/attach). In lace-making, 'applique' means a decorative piece sewn on."},

    {type:"teach", trg:"la boiserie", src:"the wood paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative wooden panels on walls or ceilings.",
     example:"A: Les boiseries de ce chateau sont magnifiques.\nB: Elles datent du XVIIIe siecle.",
     exampleSrc:"A: The wood paneling in this castle is magnificent.\nB: It dates from the 18th century.",
     funFact:"Versailles has some of the world's most famous boiseries, carved and gilded by master artisans."},

    {type:"teach", trg:"un bo\u00eetier", src:"a case, a housing", pos:"noun", gender:"m",
     note:"Masculine noun. A small box or case for electronics, CDs, or tools.",
     example:"A: Le boitier de la telecommande est casse.\nB: On peut en acheter un nouveau.",
     exampleSrc:"A: The remote control case is broken.\nB: We can buy a new one.",
     funFact:"From 'boite' (box) + diminutive '-ier'. Also used for camera bodies and computer cases."},

    {type:"fb",
     s:"Range tes vetements dans la {1} de ta chambre.",
     a:["commode"],
     opts:["commode","applique","boiserie","coussin"],
     hint:"A piece of furniture with drawers, named for being 'convenient'. Invented under Louis XIV.",
     sSrc:"Put your clothes in the {1} in your bedroom."},

    {type:"teach", trg:"un chauvinisme", src:"chauvinism", pos:"noun", gender:"m",
     note:"Masculine noun. Excessive patriotism or belief in superiority.",
     example:"A: Son chauvinisme est parfois agacant.\nB: Il croit que son pays est le meilleur en tout.",
     exampleSrc:"A: His chauvinism is sometimes annoying.\nB: He thinks his country is the best at everything.",
     funFact:"Named after Nicolas Chauvin, a possibly fictional soldier fanatically loyal to Napoleon."},

    {type:"teach", trg:"le d\u00e9barras", src:"the junk room, the storage room", pos:"noun", gender:"m",
     note:"Masculine noun. A room for storing unused items. Also means 'good riddance'.",
     example:"A: Les vieilles valises sont dans le debarras.\nB: Il faudrait faire du tri.",
     exampleSrc:"A: The old suitcases are in the storage room.\nB: We should sort through them.",
     funFact:"'Bon debarras!' means 'good riddance!' From 'debarrasser' meaning to clear away."},

    {type:"teach", trg:"un barillet", src:"a cylinder, a barrel (of a lock)", pos:"noun", gender:"m",
     note:"Masculine noun. The rotating part of a lock or revolver.",
     example:"A: Le barillet de la serrure est bloque.\nB: Appelle un serrurier.",
     exampleSrc:"A: The lock cylinder is jammed.\nB: Call a locksmith.",
     funFact:"Diminutive of 'baril' (barrel). A locksmith changes the 'barillet', not the whole lock."},

    {type:"teach", trg:"un cordon", src:"a cord, a string", pos:"noun", gender:"m",
     note:"Masculine noun. A thin rope or decorative string. Also an umbilical cord.",
     example:"A: Tire le cordon du rideau.\nB: Il est coince, aide-moi.",
     exampleSrc:"A: Pull the curtain cord.\nB: It's stuck, help me.",
     funFact:"'Cordon bleu' originally meant a knight of the Order of the Holy Spirit, who wore a blue ribbon."},

    {type:"mc",
     q:"Comment appelle-t-on une piece ou l'on range des objets inutilises ?",
     opts:["un d\u00e9barras","un barillet","un bo\u00eetier","un cordon"],
     ans:"un d\u00e9barras",
     hint:"The cluttered back room every French home has. The same root gives the expression meaning 'good riddance'."},

    {type:"teach", trg:"carreler", src:"to tile", pos:"verb", gender:null,
     note:"Verb. To cover a floor or wall with tiles. Conjugates like 'appeler'.",
     example:"A: On va carreler la salle de bains.\nB: Tu preferes des carreaux blancs ou gris ?",
     exampleSrc:"A: We're going to tile the bathroom.\nB: Do you prefer white or grey tiles?",
     funFact:"From 'carreau' (tile/square). A 'carreleur' is a professional tiler. The double-l appears in some forms."},

    {type:"teach", trg:"astiquer", src:"to polish, to shine", pos:"verb", gender:null,
     note:"Verb. To rub something until it shines. Often used for furniture or brass.",
     example:"A: Elle astique les meubles chaque samedi.\nB: Ca brille comme un sou neuf !",
     exampleSrc:"A: She polishes the furniture every Saturday.\nB: It shines like a new penny!",
     funFact:"Origin debated. Possibly from 'astique' (a wax stick used by cobblers). Very domestic word."},

    {type:"teach", trg:"dess\u00e9cher", src:"to dry out, to desiccate", pos:"verb", gender:null,
     note:"Verb. To remove all moisture. Reflexive 'se dessecher' = to wither.",
     example:"A: La chaleur a desseche toutes les plantes.\nB: Il faut arroser plus souvent.",
     exampleSrc:"A: The heat dried out all the plants.\nB: We need to water more often.",
     funFact:"From 'des-' (removal) + 'secher' (to dry). 'Desseche' as an adjective means parched or withered."},

    {type:"fb",
     s:"Elle {1} les meubles anciens pour les faire briller.",
     a:["astique"],
     opts:["astique","carrele","desseche","casse"],
     hint:"To polish or rub something until it shines. A very domestic, hands-on word.",
     sSrc:"She {1} the antique furniture to make it shine."},

    {type:"teach", trg:"la bricole", src:"the odd job, the trifle", pos:"noun", gender:"f",
     note:"Feminine noun. A small repair or trivial matter.",
     example:"A: J'ai quelques bricoles a faire ce week-end.\nB: Rien de grave, j'espere ?",
     exampleSrc:"A: I have a few odd jobs to do this weekend.\nB: Nothing serious, I hope?",
     funFact:"'Bricoler' (to do DIY) comes from this word. The French love of DIY is called 'le bricolage'."},

    {type:"teach", trg:"la bosse", src:"the bump, the hump", pos:"noun", gender:"f",
     note:"Feminine noun. A lump from a hit, or a hump on a surface.",
     example:"A: Il a une grosse bosse sur le front.\nB: Il est tombe dans l'escalier.",
     exampleSrc:"A: He has a big bump on his forehead.\nB: He fell on the stairs.",
     funFact:"'Avoir la bosse des maths' means to have a gift for math. From the old belief that skull bumps indicated talent."},

    {type:"match", pairs:[
      {trg:"coussin", src:"cushion"},
      {trg:"coffre-fort", src:"safe"},
      {trg:"d\u00e9barras", src:"storage room"},
      {trg:"bricole", src:"odd job"},
      {trg:"cordon", src:"cord, string"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'recouvrir un sol de carreaux' ?",
     opts:["brosser","carreler","astiquer","dess\u00e9cher"],
     ans:"carreler",
     hint:"Related to 'carreau' (tile/square). Think of bathroom or kitchen floor work."},

    {type:"fb",
     s:"Les bijoux de famille sont dans le {1}.",
     a:["coffre-fort"],
     opts:["coffre-fort","d\u00e9barras","bo\u00eetier","barillet"],
     hint:"A secure metal box for valuables. Literally means 'strong chest'.",
     sSrc:"The family jewels are in the {1}."}
  ]
};
export default LESSON_10;
