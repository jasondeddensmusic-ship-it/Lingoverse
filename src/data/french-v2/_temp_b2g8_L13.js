const LESSON_13 = {
  id:"frv2_b2g8_l13", title:"Arts et expression", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts et expression",
     desc:"Vocabulary for discussing art, aesthetics, and creative expression at B2 level.",
     goals:["Learn 15 art and expression words","Discuss creative works eloquently","Understand art criticism vocabulary"]},

    {type:"teach", trg:"le frémissement", src:"the shiver, the quiver", pos:"noun", gender:"m",
     note:"Masculine noun. A faint trembling or vibration.\nPhysical and emotional contexts.",
     example:"A: Un frémissement de plaisir l'a parcourue.\nB: La musique l'avait profondément touchée.",
     exampleSrc:"A: A shiver of pleasure ran through her.\nB: The music had deeply moved her.",
     funFact:"In cooking, 'à frémissement' describes water just before boiling, barely trembling."},

    {type:"teach", trg:"le cultissime", src:"the iconic (cult classic)", pos:"adj", gender:null,
     note:"Adjective used as noun. A superlative of 'culte' meaning ultra-iconic.\nInformal register.",
     example:"A: Ce film est devenu cultissime.\nB: Tout le monde peut citer les répliques.",
     exampleSrc:"A: This film has become iconic.\nB: Everyone can quote the lines.",
     funFact:"French adds '-issime' for emphasis, from Italian. 'Rarissime', 'richissime', 'cultissime'."},

    {type:"teach", trg:"le café-concert", src:"the café-concert", pos:"noun", gender:"m",
     note:"Masculine compound noun. A café with live musical entertainment.\n19th century institution.",
     example:"A: Les cafés-concerts étaient très populaires à Paris.\nB: C'est l'ancêtre du cabaret.",
     exampleSrc:"A: Café-concerts were very popular in Paris.\nB: It's the ancestor of the cabaret.",
     funFact:"Édith Piaf started her career in Parisian cafés-concerts. They were the TikTok of the 1900s."},

    {type:"teach", trg:"le café-tabac", src:"the tobacco shop/café", pos:"noun", gender:"m",
     note:"Masculine compound noun. A café that also sells tobacco and stamps.\nFrench institution.",
     example:"A: On se retrouve au café-tabac du coin ?\nB: D'accord, celui en face de la poste.",
     exampleSrc:"A: Shall we meet at the corner café-tabac?\nB: Okay, the one across from the post office.",
     funFact:"The red diamond-shaped sign marks every café-tabac in France. They also sell lottery tickets."},

    {type:"mc",
     q:"Quel suffixe français exprime un superlatif emphatique, emprunté à l'italien ?",
     opts:["-issime","-esque","-ique","-isme"],
     ans:"-issime",
     hint:"Think of 'rarissime', 'richissime', 'cultissime'. An emphatic way to say 'extremely'."},

    {type:"teach", trg:"le médiéviste", src:"the medievalist", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist in medieval history.\nFeminine: une médiéviste. Also adjective.",
     example:"A: Ce médiéviste est un expert du Moyen Âge.\nB: Il a publié dix livres sur les Croisades.",
     exampleSrc:"A: This medievalist is a Middle Ages expert.\nB: He published ten books on the Crusades.",
     funFact:"France's medieval heritage is enormous. The country has over 40,000 castles and fortified sites."},

    {type:"teach", trg:"le complet", src:"the (man's) suit", pos:"noun", gender:"m",
     note:"Masculine noun. A full suit (jacket, trousers, vest).\nAlso adjective meaning complete/full.",
     example:"A: Il portait un complet gris élégant.\nB: C'était parfait pour l'occasion.",
     exampleSrc:"A: He wore an elegant grey suit.\nB: It was perfect for the occasion.",
     funFact:"'Complet' as a suit is distinctly French. English borrowed 'suit' from Old French 'suite'."},

    {type:"teach", trg:"la cagoule", src:"the balaclava, the hood", pos:"noun", gender:"f",
     note:"Feminine noun. A head covering hiding the face.\nAlso a light children's rain jacket.",
     example:"A: Les manifestants portaient des cagoules.\nB: Ils ne voulaient pas être identifiés.",
     exampleSrc:"A: The protesters wore balaclavas.\nB: They didn't want to be identified.",
     funFact:"Originally a monk's hood, from Latin 'cuculla'. In British English, 'cagoule' means a rain jacket."},

    {type:"fb",
     s:"Ce film est devenu {1}, tout le monde cite les répliques.",
     a:["cultissime"],
     opts:["cultissime","médiéviste","magnétique","momentané"],
     hint:"A superlative meaning ultra-iconic. Uses the Italian-style '-issime' suffix.",
     sSrc:"This film has become {1}, everyone quotes the lines."},

    {type:"teach", trg:"le binocle", src:"the pince-nez, spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned eyeglasses without ear pieces.\nHumorous or literary.",
     example:"A: L'homme au binocle lisait son journal.\nB: Il avait un air d'un autre siècle.",
     exampleSrc:"A: The man with the pince-nez was reading his paper.\nB: He looked like he was from another century.",
     funFact:"'Binocle' from 'bini oculi' (two eyes). Now humorous. 'Lunettes' is the standard modern word."},

    {type:"teach", trg:"la mappemonde", src:"the world map", pos:"noun", gender:"f",
     note:"Feminine noun. A map showing the entire world.\nOften displayed flat or as a globe.",
     example:"A: Cette mappemonde date du XVIe siècle.\nB: Les contours sont approximatifs mais fascinants.",
     exampleSrc:"A: This world map dates from the 16th century.\nB: The outlines are approximate but fascinating.",
     funFact:"From medieval Latin 'mappa mundi' (cloth of the world). Old mapmakers drew dragons at the edges."},

    {type:"teach", trg:"l'intermède", src:"the interlude", pos:"noun", gender:"m",
     note:"Masculine noun. A performance or period between main events.\nTheater and figurative use.",
     example:"A: L'intermède musical était enchanteur.\nB: Les musiciens étaient exceptionnels.",
     exampleSrc:"A: The musical interlude was enchanting.\nB: The musicians were exceptional.",
     funFact:"Molière's plays featured famous intermèdes with ballet and music between acts."},

    {type:"mc",
     q:"Comment appelle-t-on un café français qui vend aussi du tabac et des timbres ?",
     opts:["un café-tabac","un café-concert","un café-crème","un café-hôtel"],
     ans:"un café-tabac",
     hint:"Marked by a red diamond sign. You can buy cigarettes, stamps, and lottery tickets there."},

    {type:"teach", trg:"le loden", src:"loden (fabric/coat)", pos:"noun", gender:"m",
     note:"Masculine noun. A thick, waterproof wool fabric, or a coat made from it.\nTypically dark green.",
     example:"A: Son loden vert lui donnait un air autrichien.\nB: C'est un tissu très chaud.",
     exampleSrc:"A: His green loden coat gave him an Austrian air.\nB: It's a very warm fabric.",
     funFact:"Originally from Tyrol in Austria. French intellectuals adopted the loden coat as a style staple."},

    {type:"teach", trg:"la liqueur", src:"the liqueur", pos:"noun", gender:"f",
     note:"Feminine noun. A sweet flavored alcohol.\nNot the same as 'spiritueux' (spirits).",
     example:"A: Cette liqueur de framboise est maison.\nB: Elle est douce et parfumée.",
     exampleSrc:"A: This raspberry liqueur is homemade.\nB: It's sweet and fragrant.",
     funFact:"French monasteries created many famous liqueurs. Chartreuse has been made by monks since 1737."},

    {type:"teach", trg:"l'ocre", src:"ochre", pos:"noun", gender:"m",
     note:"Masculine noun. A natural earth pigment, yellow to red.\nAlso invariable adjective.",
     example:"A: Les murs ocre rappellent la Provence.\nB: C'est la couleur du Midi.",
     exampleSrc:"A: The ochre walls remind one of Provence.\nB: It's the color of the South.",
     funFact:"The village of Roussillon sits on Europe's largest ochre deposits, making it a stunning orange."},

    {type:"fb",
     s:"Les {1} étaient très populaires à Paris au XIXe siècle.",
     a:["cafés-concerts"],
     opts:["cafés-concerts","cafés-tabacs","cafés-crèmes","cafés-hôtels"],
     hint:"Cafés with live musical entertainment. The ancestor of the modern cabaret.",
     sSrc:"The {1} were very popular in Paris in the 19th century."},

    {type:"match", pairs:[
      {trg:"cultissime", src:"iconic, cult classic"},
      {trg:"médiéviste", src:"medievalist"},
      {trg:"complet", src:"man's suit"},
      {trg:"loden", src:"loden coat/fabric"},
      {trg:"ocre", src:"ochre"}
    ]},

    {type:"mc",
     q:"Quel mot désigne des lunettes anciennes sans branches ?",
     opts:["un binocle","un monocle","une lorgnette","une mappemonde"],
     ans:"un binocle",
     hint:"From Latin 'two eyes'. Glasses that perch on the nose without ear pieces."},

    {type:"fb",
     s:"Cette {1} date du XVIe siècle, les contours sont approximatifs.",
     a:["mappemonde"],
     opts:["mappemonde","matrice","marquise","liqueur"],
     hint:"A map showing the entire world. From Latin 'mappa mundi' (cloth of the world).",
     sSrc:"This {1} dates from the 16th century, the outlines are approximate."}
  ]
};
export default LESSON_13;
