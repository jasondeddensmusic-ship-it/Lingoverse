const LESSON_7 = {
  id:"frv2_b2gA_l7", title:"Objets du quotidien", icon:"\u{1F527}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Objets du quotidien",
     desc:"Name everyday objects and household items with precision. Practical B2 vocabulary for daily life and shopping.",
     goals:["Learn 14 everyday object words","Describe household items accurately","Navigate hardware stores and home improvement"]},

    {type:"teach", trg:"un grille-pain", src:"a toaster", pos:"noun", gender:"m",
     note:"Masculine compound noun. Literally 'grill-bread'.\nPlural: des grille-pain (invariable).",
     example:"A: Le grille-pain est en panne.\nB: Il faut en acheter un nouveau.",
     exampleSrc:"A: The toaster is broken.\nB: We need to buy a new one.",
     funFact:"French compound nouns with a verb + noun structure often stay invariable in the plural. Grille-pain never changes."},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine compound noun. Literally 'strong chest'.\nPlural: des coffres-forts.",
     example:"A: Mets les documents dans le coffre-fort.\nB: D'accord, j'ai le code.",
     exampleSrc:"A: Put the documents in the safe.\nB: Okay, I have the code.",
     funFact:"French banks still rent 'coffres-forts' to clients. The tradition dates back to the 19th century."},

    {type:"teach", trg:"un binocle", src:"a pince-nez, spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned eyeglasses without earpieces.\nNow used humorously.",
     example:"A: Grand-pere portait toujours son binocle.\nB: Ca lui donnait un air distingue.",
     exampleSrc:"A: Grandfather always wore his pince-nez.\nB: It gave him a distinguished look.",
     funFact:"Largely replaced by 'lunettes', but 'binocle' survives in literature and affectionate family stories."},

    {type:"teach", trg:"un peigne", src:"a comb", pos:"noun", gender:"m",
     note:"Masculine noun. A tool with teeth for styling hair.\n'Se donner un coup de peigne' = to comb quickly.",
     example:"A: Passe-moi le peigne, s'il te plait.\nB: Tiens, il est sur l'etagere.",
     exampleSrc:"A: Pass me the comb, please.\nB: Here, it's on the shelf.",
     funFact:"The expression 'passer au peigne fin' means to go through with a fine-tooth comb. Very common in French."},

    {type:"teach", trg:"le grillage", src:"the wire mesh, the fencing", pos:"noun", gender:"m",
     note:"Masculine noun. Wire mesh used for fences or protection.\nFrom 'grille' (grid).",
     example:"A: Il faut reparer le grillage du jardin.\nB: Le chien s'echappe par le trou.",
     exampleSrc:"A: We need to repair the garden fencing.\nB: The dog escapes through the hole.",
     funFact:"'Grillage' is distinct from 'cloture' (fence). Grillage specifically means wire mesh or chain-link fencing."},

    {type:"mc",
     q:"Quel objet sert a griller du pain ?",
     opts:["un grille-pain","un coffre-fort","un peigne","un grillage"],
     ans:"un grille-pain",
     hint:"A compound word: the verb for grilling plus the word for bread."},

    {type:"teach", trg:"une pancarte", src:"a sign, a placard", pos:"noun", gender:"f",
     note:"Feminine noun. A board with writing on it, often carried in protests.",
     example:"A: Les manifestants brandissaient des pancartes.\nB: Leurs messages etaient clairs.",
     exampleSrc:"A: The protesters were waving placards.\nB: Their messages were clear.",
     funFact:"During French strikes, pancartes are an art form. Some are witty, some poetic, always photographed by the press."},

    {type:"teach", trg:"le parachute", src:"the parachute", pos:"noun", gender:"m",
     note:"Masculine noun. A device for slowing descent through air.\nAlso: 'parachute dore' = golden parachute.",
     example:"A: Le saut en parachute est une experience unique.\nB: C'est terrifiant mais exaltant.",
     exampleSrc:"A: Skydiving is a unique experience.\nB: It's terrifying but exhilarating.",
     funFact:"Invented by Frenchman Louis-Sebastien Lenormand in 1783. 'Para-' (against) + 'chute' (fall)."},

    {type:"teach", trg:"un laissez-passer", src:"a pass, a permit", pos:"noun", gender:"m",
     note:"Masculine compound noun. An official document granting passage.\nInvariable in plural.",
     example:"A: Vous avez votre laissez-passer ?\nB: Oui, le voici.",
     exampleSrc:"A: Do you have your pass?\nB: Yes, here it is.",
     funFact:"Literally 'let pass'. One of many French compound nouns that entered English, like 'laissez-faire'."},

    {type:"fb",
     s:"Les manifestants portaient des {1} avec des slogans.",
     a:["pancartes"],
     opts:["pancartes","parachutes","grillages","peignes"],
     hint:"Signs or placards carried during protests. Written messages on boards.",
     sSrc:"The protesters carried {1} with slogans."},

    {type:"teach", trg:"le potage", src:"the soup (thick)", pos:"noun", gender:"m",
     note:"Masculine noun. A thick, blended vegetable soup.\nMore refined than 'soupe'.",
     example:"A: Ce potage de legumes est delicieux.\nB: C'est la recette de ma grand-mere.",
     exampleSrc:"A: This vegetable soup is delicious.\nB: It's my grandmother's recipe.",
     funFact:"'Potage' comes from 'pot' (cooking pot). In fine dining, 'potage' is the elegant word; 'soupe' is rustic."},

    {type:"teach", trg:"le pilier", src:"the pillar, the mainstay", pos:"noun", gender:"m",
     note:"Masculine noun. A structural support column.\nFiguratively: a key person or element.",
     example:"A: Elle est un pilier de cette entreprise.\nB: Sans elle, rien ne fonctionnerait.",
     exampleSrc:"A: She's a pillar of this company.\nB: Without her, nothing would work.",
     funFact:"'Pilier de bar' (bar pillar) is a humorous expression for a regular who never leaves the bar."},

    {type:"teach", trg:"le polo", src:"the polo shirt", pos:"noun", gender:"m",
     note:"Masculine noun. A short-sleeved shirt with a collar.\nNamed after the sport.",
     example:"A: Ce polo bleu te va tres bien.\nB: Merci, je l'ai achete en solde.",
     exampleSrc:"A: That blue polo shirt suits you very well.\nB: Thanks, I bought it on sale.",
     funFact:"Rene Lacoste popularized the polo in France. The crocodile logo is a French fashion icon since 1933."},

    {type:"mc",
     q:"Quel mot designe un document officiel autorisant le passage ?",
     opts:["un pilier","un laissez-passer","une pancarte","un parachute"],
     ans:"un laissez-passer",
     hint:"Literally means 'let pass'. A compound from two verb forms."},

    {type:"teach", trg:"le phosphate", src:"the phosphate", pos:"noun", gender:"m",
     note:"Masculine noun. A chemical compound containing phosphorus.\nUsed in fertilizers and cleaning products.",
     example:"A: Les phosphates polluent les rivieres.\nB: Il faut utiliser des produits sans phosphates.",
     exampleSrc:"A: Phosphates pollute rivers.\nB: We should use phosphate-free products.",
     funFact:"Morocco holds over 70% of world phosphate reserves. Phosphate exports are a major geopolitical issue."},

    {type:"fb",
     s:"Elle est le {1} de l'equipe, sans elle tout s'effondre.",
     a:["pilier"],
     opts:["pilier","potage","polo","phosphate"],
     hint:"A structural support, used figuratively for a key person. Think of a column holding up a building.",
     sSrc:"She is the {1} of the team, without her everything collapses."},

    {type:"match", pairs:[
      {trg:"grille-pain", src:"toaster"},
      {trg:"coffre-fort", src:"safe"},
      {trg:"peigne", src:"comb"},
      {trg:"potage", src:"thick soup"},
      {trg:"pancarte", src:"placard, sign"}
    ]},

    {type:"mc",
     q:"Quel mot designe une cloture en fils metalliques ?",
     opts:["le parachute","le laissez-passer","le grillage","le pilier"],
     ans:"le grillage",
     hint:"Wire mesh for fences. From the word 'grille' meaning grid or grate."}
  ]
};
export default LESSON_7;
