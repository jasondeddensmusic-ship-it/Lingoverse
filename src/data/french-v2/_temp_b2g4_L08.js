const LESSON_8 = {
  id:"frv2_b2g4_l8", title:"La nature et l'environnement", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La nature et l'environnement",
     desc:"Learn vocabulary about the natural world, weather phenomena, and environmental issues.",
     goals:["Learn 15 nature and environment words","Discuss ecological issues fluently","Describe natural phenomena with precision"]},

    {type:"teach", trg:"un copeau", src:"a wood shaving, a chip", pos:"noun", gender:"m",
     note:"Masculine noun. Thin curly strip of wood produced by planing.",
     example:"A: Le sol de l'atelier est couvert de copeaux.\nB: Le menuisier vient de finir son travail.",
     exampleSrc:"A: The workshop floor is covered with wood shavings.\nB: The carpenter just finished his work.",
     funFact:"From 'couper' (to cut). In cooking, 'copeaux de chocolat' are chocolate shavings on desserts."},

    {type:"teach", trg:"le fremissement", src:"the shiver, the quiver", pos:"noun", gender:"m",
     note:"Masculine noun. A slight trembling or rustling.",
     example:"A: J'ai senti un fremissement dans les feuilles.\nB: C'est le vent qui se leve.",
     exampleSrc:"A: I felt a shiver in the leaves.\nB: The wind is picking up.",
     funFact:"From 'fremir' (to tremble). In cooking, water 'fremit' just before boiling. A gentle simmer."},

    {type:"teach", trg:"le grondement", src:"the rumbling, the growling", pos:"noun", gender:"m",
     note:"Masculine noun. A deep, continuous sound like thunder or an engine.",
     example:"A: Le grondement du tonnerre annonce l'orage.\nB: Rentrons vite a la maison.",
     exampleSrc:"A: The rumbling of thunder announces the storm.\nB: Let's get home quickly.",
     funFact:"From 'gronder' (to rumble/scold). A parent 'gronde' a child. The sky 'gronde' before a storm."},

    {type:"teach", trg:"le flot", src:"the flow, the flood", pos:"noun", gender:"m",
     note:"Masculine noun. A large flow of water or a wave. Also figurative.",
     example:"A: Un flot de touristes envahit la ville chaque ete.\nB: Les rues sont bondees.",
     exampleSrc:"A: A flood of tourists invades the city every summer.\nB: The streets are packed.",
     funFact:"'Etre a flot' means to be afloat, financially stable. 'Remettre a flot' means to bail out."},

    {type:"teach", trg:"grisonnant", src:"graying, going gray", pos:"adj", gender:null,
     note:"Adjective. Describes hair turning gray. Feminine: grisonnante.",
     example:"A: Ses tempes sont grisonnantes.\nB: Ca lui donne un air distingue.",
     exampleSrc:"A: His temples are going gray.\nB: It gives him a distinguished air.",
     funFact:"From 'gris' (gray). George Clooney is often described as 'grisonnant' in French magazines."},

    {type:"mc",
     q:"Quel mot designe un bruit sourd et continu comme le tonnerre ?",
     opts:["le grondement","le fremissement","le flot","le copeau"],
     ans:"le grondement",
     hint:"From the verb 'gronder', which means both to rumble and to scold a child."},

    {type:"teach", trg:"la bordee", src:"the broadside, a volley", pos:"noun", gender:"f",
     note:"Feminine noun. A naval broadside. Figuratively: a barrage of words.",
     example:"A: Il nous a lance une bordee d'injures.\nB: On n'a rien pu repondre.",
     exampleSrc:"A: He hurled a volley of insults at us.\nB: We couldn't say anything back.",
     funFact:"Naval term originally. 'Tirer une bordee' also means to go out drinking with sailors."},

    {type:"teach", trg:"fraichement", src:"freshly, recently", pos:"adv", gender:null,
     note:"Adverb. Just done or made. Also means coolly in attitude.",
     example:"A: Le pain est fraichement sorti du four.\nB: Quelle odeur delicieuse.",
     exampleSrc:"A: The bread is freshly out of the oven.\nB: What a delicious smell.",
     funFact:"Double meaning: 'accueilli fraichement' means received coolly, not warmly. Context is everything."},

    {type:"teach", trg:"fleurer", src:"to smell faintly of, to be redolent", pos:"verb", gender:null,
     note:"Verb. To give off a faint pleasant scent. More literary than 'sentir'.",
     example:"A: Cette robe fleure la lavande.\nB: Ma grand-mere utilisait toujours ce parfum.",
     exampleSrc:"A: This dress smells faintly of lavender.\nB: My grandmother always used that perfume.",
     funFact:"Not to be confused with 'fleurir' (to bloom). 'Fleurer' is rarer and more poetic."},

    {type:"fb",
     s:"Le {1} du tonnerre a reveille toute la maison.",
     a:["grondement"],
     opts:["grondement","fremissement","flot","copeau"],
     hint:"A deep rumbling sound. The same verb also means to scold a child.",
     sSrc:"The {1} of thunder woke the whole house."},

    {type:"teach", trg:"le girofle", src:"the clove (spice)", pos:"noun", gender:"m",
     note:"Masculine noun. The dried flower bud used as a spice.",
     example:"A: Le clou de girofle parfume le vin chaud.\nB: C'est un classique de l'hiver.",
     exampleSrc:"A: Cloves flavor the mulled wine.\nB: It's a winter classic.",
     funFact:"'Clou de girofle' literally means 'nail of clove'. The dried bud looks like a small nail."},

    {type:"teach", trg:"fructifier", src:"to bear fruit, to grow", pos:"verb", gender:null,
     note:"Verb. To produce results or profits. From 'fruit'.",
     example:"A: Son investissement a bien fructifie.\nB: Il a double son capital en cinq ans.",
     exampleSrc:"A: His investment bore good fruit.\nB: He doubled his capital in five years.",
     funFact:"Used literally for trees and figuratively for money. 'Faire fructifier' means to grow wealth."},

    {type:"teach", trg:"l'exaltation", src:"the exhilaration, the fervor", pos:"noun", gender:"f",
     note:"Feminine noun. Intense excitement or passionate enthusiasm.",
     example:"A: L'exaltation de la foule etait palpable.\nB: Tout le monde chantait et dansait.",
     exampleSrc:"A: The crowd's exhilaration was palpable.\nB: Everyone was singing and dancing.",
     funFact:"From Latin 'exaltare' meaning to raise high. Can be positive (enthusiasm) or negative (mania)."},

    {type:"mc",
     q:"Quel verbe signifie 'produire des fruits ou des profits' ?",
     opts:["fructifier","fleurer","froisser","fracasser"],
     ans:"fructifier",
     hint:"Built on the root 'fruct-' from Latin 'fructus' meaning fruit. Used for trees and investments."},

    {type:"teach", trg:"le gavage", src:"the force-feeding", pos:"noun", gender:"m",
     note:"Masculine noun. The act of force-feeding, especially ducks for foie gras.",
     example:"A: Le gavage des canards est controverse.\nB: Beaucoup de pays l'ont interdit.",
     exampleSrc:"A: Force-feeding ducks is controversial.\nB: Many countries have banned it.",
     funFact:"Central to the foie gras debate. 'Gaver' also means to stuff yourself informally."},

    {type:"fb",
     s:"Cette robe {1} la lavande et le jasmin.",
     a:["fleure"],
     opts:["fleure","gronde","fructifie","gave"],
     hint:"A literary verb meaning to emit a faint pleasant scent. Not the same as 'fleurir'.",
     sSrc:"This dress {1} of lavender and jasmine."},

    {type:"match", pairs:[
      {trg:"copeau", src:"wood shaving"},
      {trg:"fremissement", src:"shiver"},
      {trg:"flot", src:"flow, flood"},
      {trg:"girofle", src:"clove"},
      {trg:"gavage", src:"force-feeding"}
    ]},

    {type:"mc",
     q:"Que signifie 'fraichement' quand on parle d'un accueil ?",
     opts:["Avec froideur","Avec chaleur","Avec joie","Avec surprise"],
     ans:"Avec froideur",
     hint:"This adverb has a double meaning. For bread it means 'freshly', but for a reception it means something colder."}
  ]
};
export default LESSON_8;
