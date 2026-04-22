// L17 - Urban Life & Architecture
const LESSON_17 = {id:"frv2_b2gC_l17", title:"Vie urbaine et architecture", icon:"\u{1F3D9}", xp:15, board:true, steps:[

{type:"intro", title:"Vie urbaine et architecture",
 desc:"Master vocabulary for urban planning, city life, and architectural concepts.",
 goals:["Learn 8 words for urban life and architecture","Discuss city planning and living spaces","Express opinions about urban development"]},

{type:"teach", trg:"le presbytère", src:"rectory, parsonage", pos:"noun", gender:"m",
 note:"Masculine noun. The house where a parish priest lives.\nOften a historic building.",
 example:"A: Le presbytère a été transformé en musée.\nB: C'est un bel exemple d'architecture du XVIIIe siècle.",
 exampleSrc:"A: The rectory was turned into a museum.\nB: It is a fine example of 18th-century architecture.",
 funFact:"Breton wrote: 'Le presbytère n'a rien perdu de son charme.' A famous surrealist sentence about language."},

{type:"teach", trg:"la micro-entreprise", src:"micro-enterprise, sole proprietorship", pos:"noun", gender:"f",
 note:"Feminine noun. A very small business, often one person.\nA popular French legal status.",
 example:"A: J'ai créé une micro-entreprise pour mon activité de graphiste.\nB: C'est le statut le plus simple pour démarrer.",
 exampleSrc:"A: I created a micro-enterprise for my graphic design work.\nB: It is the simplest status to get started.",
 funFact:"France's auto-entrepreneur (now micro-entreprise) status was created in 2009. Over 2 million French people use it."},

{type:"teach", trg:"le non-fumeur", src:"non-smoker, non-smoking area", pos:"noun", gender:"m",
 note:"Masculine noun. A person who does not smoke.\nAlso designates smoke-free zones.",
 example:"A: Cette terrasse est réservée aux non-fumeurs.\nB: Parfait, je déteste l'odeur de cigarette.",
 exampleSrc:"A: This terrace is reserved for non-smokers.\nB: Perfect, I hate the smell of cigarettes.",
 funFact:"France banned smoking in public places in 2007. Before that, smoking in cafes was a French cultural icon."},

{type:"teach", trg:"l'incrustation", src:"inlay, intrusion", pos:"noun", gender:"f",
 note:"Feminine noun. Decorative material set into a surface.\nFiguratively: showing up uninvited.",
 example:"A: Les incrustations de marbre sur la façade sont magnifiques.\nB: C'est un travail artisanal qui date du XVIIe siècle.",
 exampleSrc:"A: The marble inlays on the facade are magnificent.\nB: It is craftsmanship dating from the 17th century.",
 funFact:"S'incruster (slang) means to show up uninvited and refuse to leave. A common French party complaint."},

{type:"teach", trg:"la matérialisation", src:"materialization", pos:"noun", gender:"f",
 note:"Feminine noun. Making something abstract become concrete.\nAlso: road markings.",
 example:"A: La matérialisation de ce projet a pris trois ans.\nB: De l'idée au bâtiment, le chemin a été long.",
 exampleSrc:"A: The materialization of this project took three years.\nB: From idea to building, the road was long.",
 funFact:"In French traffic, matérialisation au sol means road markings. Lines, arrows, and zebra crossings."},

{type:"teach", trg:"la grille-pain", src:"toaster", pos:"noun", gender:"m",
 note:"Masculine noun. A device for toasting bread.\nCompound: grille (grills) + pain (bread).",
 example:"A: Le grille-pain est en panne. On fait comment pour le petit-déjeuner ?\nB: On peut faire griller le pain au four.",
 exampleSrc:"A: The toaster is broken. How do we manage breakfast?\nB: We can toast the bread in the oven.",
 funFact:"French compound nouns often describe function: grille-pain (grills bread), lave-vaisselle (washes dishes)."},

{type:"teach", trg:"le coupe-papier", src:"letter opener, paper knife", pos:"noun", gender:"m",
 note:"Masculine noun. A blunt blade for opening envelopes.\nCompound: coupe (cuts) + papier (paper).",
 example:"A: Passe-moi le coupe-papier pour ouvrir cette lettre.\nB: Tiens, fais attention, il est quand même un peu tranchant.",
 exampleSrc:"A: Pass me the letter opener for this letter.\nB: Here, be careful, it is still a bit sharp.",
 funFact:"Before email, the coupe-papier was on every French desk. Now it is mostly a decorative object."},

{type:"teach", trg:"la pied-à-terre", src:"pied-a-terre, small city apartment", pos:"noun", gender:"m",
 note:"Masculine noun. A small apartment kept for occasional use.\nLiterally: foot on ground.",
 example:"A: Ils ont un pied-à-terre à Paris pour leurs voyages d'affaires.\nB: C'est plus pratique qu'un hôtel à chaque fois.",
 exampleSrc:"A: They have a pied-a-terre in Paris for their business trips.\nB: It is more practical than a hotel every time.",
 funFact:"Pied-à-terre entered English directly from French. It implies a secondary residence, usually small and urban."},

{type:"mc",
 q:"Quel bâtiment historique sert de résidence au curé d'une paroisse ?",
 opts:["le presbytère","la micro-entreprise","le grille-pain","le coupe-papier"],
 ans:"le presbytère",
 hint:"Where the parish priest lives. Often a historic building near the church."},

{type:"fb",
 s:"J'ai créé une {1} pour travailler comme graphiste indépendant.",
 a:["micro-entreprise"], opts:["micro-entreprise","incrustation","matérialisation","presbytère"],
 hint:"The simplest French legal status for a one-person business. Created in 2009.",
 sSrc:"I created a {1} to work as a freelance graphic designer."},

{type:"mc",
 q:"Que signifie 's'incruster' en français familier ?",
 opts:["Ouvrir une lettre","Arriver sans invitation et refuser de partir","Décorer un mur","Construire un bâtiment"],
 ans:"Arriver sans invitation et refuser de partir",
 hint:"From incrustation (embedding). To embed yourself somewhere uninvited."},

{type:"match", pairs:[
  {trg:"le presbytère", src:"rectory"},
  {trg:"la micro-entreprise", src:"micro-enterprise"},
  {trg:"le grille-pain", src:"toaster"},
  {trg:"le coupe-papier", src:"letter opener"},
  {trg:"le pied-à-terre", src:"small city apartment"}
]},

{type:"fb",
 s:"La {1} de ce projet architectural a nécessité trois ans de travaux.",
 a:["matérialisation"], opts:["matérialisation","incrustation","micro-entreprise","presbytère"],
 hint:"Making an abstract idea become a concrete reality. From idea to actual building.",
 sSrc:"The {1} of this architectural project required three years of work."},

{type:"mc",
 q:"Quel objet était autrefois indispensable sur tout bureau français ?",
 opts:["le pied-à-terre","le non-fumeur","le coupe-papier","le grille-pain"],
 ans:"le coupe-papier",
 hint:"Before email replaced letters. A blunt blade for opening envelopes."},

{type:"fb",
 s:"Ils ont un {1} à Lyon pour leurs voyages d'affaires mensuels.",
 a:["pied-à-terre"], opts:["pied-à-terre","presbytère","grille-pain","non-fumeur"],
 hint:"A small apartment kept for occasional use. Literally: foot on ground.",
 sSrc:"They have a {1} in Lyon for their monthly business trips."},

{type:"drag_fill",
 s:"La terrasse {1} est à côté du {2} transformé en galerie d'art.",
 blanks:{"1":"non-fumeur","2":"presbytère"},
 pool:["non-fumeur","presbytère","grille-pain","coupe-papier"],
 hint:"The smoke-free terrace is next to the former priest's house, now an art gallery"},

{type:"mc",
 q:"Depuis quelle année est-il interdit de fumer dans les lieux publics en France ?",
 opts:["1999","2015","1985","2007"],
 ans:"2007",
 hint:"A major cultural shift. Before this law, smoking in cafes was iconic French behavior."}

]};
export default LESSON_17;
