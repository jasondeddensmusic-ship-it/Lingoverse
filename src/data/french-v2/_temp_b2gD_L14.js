// French B2 Gap Batch D Lesson 14. Nature and Animals
const LESSON_14 = {id:"frv2_b2gD_l14", title:"Nature et animaux", icon:"🦅", xp:15, board:true, steps:[
  {type:"intro", title:"Nature et animaux",
   desc:"Expand your vocabulary for discussing wildlife, natural phenomena, and the animal kingdom.",
   goals:["Learn 10 nature and animal terms","Describe wildlife and natural habitats","Use scientific and everyday nature vocabulary"]},

  {type:"teach", trg:"le pou", src:"the louse", pos:"noun", gender:"m",
   note:"A tiny parasitic insect living on hair or skin.\nPlural: 'les poux'. A common school problem.",
   example:"A: Il y a une alerte poux à l'école.\nB: Encore? C'est la troisième fois.\nA: Il faut traiter toute la famille.\nB: Et laver tous les draps et bonnets.",
   exampleSrc:"A: There's a lice alert at school.\nB: Again? That's the third time.\nA: The whole family needs treatment.\nB: And wash all the sheets and hats.",
   funFact:"Plural 'poux' is one of seven French words ending in -ou that take -x in plural (bijoux, cailloux, choux, genoux, hiboux, joujoux, poux)."},

  {type:"teach", trg:"le plantigrade", src:"the plantigrade (flat-footed animal)", pos:"noun", gender:"m",
   note:"An animal that walks on the soles of its feet.\nBears, humans, and hedgehogs are plantigrades.",
   example:"A: L'ours est un plantigrade.\nB: Ça veut dire qu'il marche sur toute la plante du pied?\nA: Exactement, contrairement aux chats qui marchent sur leurs doigts.\nB: C'est pour ça qu'il est si stable.",
   exampleSrc:"A: The bear is a plantigrade.\nB: Does that mean it walks on the whole sole of its foot?\nA: Exactly, unlike cats who walk on their toes.\nB: That's why it's so stable.",
   funFact:"From Latin 'planta' (sole) + 'gradus' (step). Humans are plantigrades too. Cats and dogs are 'digitigrades' (toe-walkers)."},

  {type:"teach", trg:"la pègre", src:"the underworld", pos:"noun", gender:"f",
   note:"Already taught in L10. Here as recycling context.\nUsed figuratively for predatory behavior.",
   example:"A: Dans la nature aussi, il y a une pègre.\nB: Tu veux dire les prédateurs?\nA: Non, les parasites qui exploitent les autres.\nB: Comme le coucou qui pond dans les nids des autres.",
   exampleSrc:"A: In nature too, there's an underworld.\nB: You mean the predators?\nA: No, the parasites that exploit others.\nB: Like the cuckoo that lays eggs in other birds' nests.",
   funFact:"The cuckoo's strategy of laying in other nests is called 'parasitisme de couvée' in French. Nature has its own underworld."},

  {type:"teach", trg:"l'orangé", src:"the orange (color shade)", pos:"noun", gender:"m",
   note:"An orange-tinged color, somewhere between orange and red.\nAlso adjective: 'un ciel orangé'.",
   example:"A: Le ciel est d'un orangé magnifique ce soir.\nB: C'est le coucher de soleil d'automne.\nA: Les feuilles ont la même teinte.\nB: C'est ma saison préférée pour les couleurs.",
   exampleSrc:"A: The sky is a magnificent orange shade this evening.\nB: It's the autumn sunset.\nA: The leaves have the same tint.\nB: It's my favorite season for colors.",
   funFact:"Unlike 'orange' (invariable adjective), 'orangé' agrees with its noun: 'une teinte orangée'. Subtle French color distinction."},

  {type:"mc",
   q:"Pourquoi le mot 'poux' est-il spécial en grammaire française?",
   opts:["C'est un des sept mots en -ou qui prennent un -x au pluriel","Il ne change jamais au pluriel","Il a deux genres possibles","Il s'écrit différemment en France et au Canada"],
   ans:"C'est un des sept mots en -ou qui prennent un -x au pluriel",
   hint:"Most -ou nouns add -s in plural, but seven famous exceptions take -x: bijoux, cailloux, and five others."},

  {type:"teach", trg:"le frisbee", src:"the frisbee", pos:"noun", gender:"m",
   note:"A plastic disc thrown for sport or play.\nPopular in French parks and beaches.",
   example:"A: On fait une partie de frisbee sur la plage?\nB: Bonne idée, il y a assez de vent.\nA: Attention aux baigneurs!\nB: On va se mettre plus loin.",
   exampleSrc:"A: Shall we play frisbee on the beach?\nB: Good idea, there's enough wind.\nA: Watch out for the swimmers!\nB: Let's go further away.",
   funFact:"The word entered French from English. 'Ultimate frisbee' is growing fast in France, with the French team among Europe's best."},

  {type:"teach", trg:"le primaire", src:"the primary school / primary sector", pos:"noun", gender:"m",
   note:"Primary school education. Also: the primary economic sector.\n'L'école primaire' covers ages 6-11 in France.",
   example:"A: Mon fils entre au primaire en septembre.\nB: Il est content?\nA: Un peu nerveux, c'est un grand changement.\nB: Il va se faire des amis très vite.",
   exampleSrc:"A: My son is starting primary school in September.\nB: Is he happy?\nA: A bit nervous, it's a big change.\nB: He'll make friends very quickly.",
   funFact:"French primary school has 5 years: CP, CE1, CE2, CM1, CM2. The abbreviations stand for Cours Préparatoire, Élémentaire, and Moyen."},

  {type:"teach", trg:"le paraphe", src:"the initials / flourish", pos:"noun", gender:"m",
   note:"A simplified signature or initials used to validate documents.\n'Parapher' = to initial each page.",
   example:"A: N'oubliez pas de mettre votre paraphe sur chaque page.\nB: Mon paraphe ou ma signature complète?\nA: Votre paraphe suffit pour les pages intermédiaires.\nB: Et la signature complète à la dernière page.",
   exampleSrc:"A: Don't forget to put your initials on each page.\nB: My initials or my full signature?\nA: Your initials are enough for the intermediate pages.\nB: And the full signature on the last page.",
   funFact:"From Greek 'paragraphos'. In French administration, 'parapher' every page prevents insertion of fraudulent pages."},

  {type:"fb",
   s:"L'ours est un {1} car il marche sur la plante de ses pieds.",
   a:["plantigrade"],
   opts:["plantigrade","prédateur","parasite","primaire"],
   hint:"This zoological term describes animals that walk flat on the soles of their feet, from Latin for 'sole-stepper'.",
   sSrc:"The bear is a {1} because it walks on the soles of its feet."},

  {type:"teach", trg:"la précipitation", src:"the precipitation / rainfall", pos:"noun", gender:"f",
   note:"Atmospheric moisture that falls as rain, snow, or hail.\nAlways plural in weather: 'les précipitations'.",
   example:"A: Les précipitations seront abondantes cette semaine.\nB: Il faut sortir les parapluies.\nA: La Bretagne va recevoir le plus de pluie.\nB: Comme d'habitude en automne.",
   exampleSrc:"A: Precipitation will be heavy this week.\nB: Time to get the umbrellas out.\nA: Brittany will receive the most rain.\nB: As usual in autumn.",
   funFact:"In weather reports, always plural: 'des précipitations'. Singular 'la précipitation' means 'haste' (see L9). Context determines meaning."},

  {type:"teach", trg:"l'incrustation", src:"the inlay / encrustation", pos:"noun", gender:"f",
   note:"A decorative pattern embedded in a surface.\nAlso informal: 'faire une incrustation' = to crash a party.",
   example:"A: Les incrustations de nacre sur ce meuble sont superbes.\nB: C'est un travail artisanal remarquable.\nA: Ce style vient du Moyen-Orient.\nB: Les artisans maîtrisaient cette technique depuis des siècles.",
   exampleSrc:"A: The mother-of-pearl inlays on this furniture are superb.\nB: It's remarkable craftsmanship.\nA: This style comes from the Middle East.\nB: Artisans have mastered this technique for centuries.",
   funFact:"Informal French: 's'incruster' means to overstay your welcome or crash a party. 'Il s'est incrusté toute la soirée' (he wouldn't leave)."},

  {type:"mc",
   q:"Que signifie 'les précipitations' dans un bulletin météo?",
   opts:["La température maximale","La pluie, la neige ou la grêle qui tombe","La vitesse du vent","La pression atmosphérique"],
   ans:"La pluie, la neige ou la grêle qui tombe",
   hint:"In weather context, this plural noun describes all forms of moisture falling from the sky."},

  {type:"match", pairs:[
    {trg:"pou", src:"louse"},
    {trg:"plantigrade", src:"flat-footed animal"},
    {trg:"orangé", src:"orange-tinted"},
    {trg:"paraphe", src:"initials"},
    {trg:"incrustation", src:"inlay"}
  ]},

  {type:"fb",
   s:"N'oubliez pas de mettre votre {1} en bas de chaque page du contrat.",
   a:["paraphe"],
   opts:["paraphe","préambule","prétexte","précepte"],
   hint:"This is a simplified version of your signature, just initials, used to validate document pages.",
   sSrc:"Don't forget to put your {1} at the bottom of each page of the contract."}
]};
export default LESSON_14;
