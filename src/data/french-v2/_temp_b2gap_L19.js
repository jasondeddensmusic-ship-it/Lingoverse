const LESSON_19 = {
  id:"frv2_b2gap_l19", title:"Objets et vetements", icon:"\u{1F45C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Objets et vetements",
     desc:"Vocabulary for everyday objects, accessories, and clothing. From monocles to hoods, from bonnets to banners.",
     goals:["Learn 20 object and clothing vocabulary words","Name household items and accessories in French","Describe what people wear and carry"]},

    {type:"teach", trg:"une banderole", src:"a banner, a streamer", pos:"noun", gender:"f",
     note:"Feminine noun. A long strip of cloth with a message, carried at protests or events.",
     example:"A: Les manifestants portent des banderoles.\nB: On peut lire leurs revendications.",
     exampleSrc:"A: The protesters are carrying banners.\nB: You can read their demands.",
     funFact:"From Italian 'banderuola' (small flag). Banderoles are a fixture of French demonstrations."},

    {type:"teach", trg:"un binocle", src:"a pince-nez, old-fashioned spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. An old style of eyeglasses without earpieces.",
     example:"A: Mon arriere-grand-pere portait un binocle.\nB: Ca donne un air distingue.",
     exampleSrc:"A: My great-grandfather wore a pince-nez.\nB: It gives a distinguished look.",
     funFact:"From Latin 'bini oculi' (two eyes). Now slightly humorous or archaic. 'Binoculars' shares the root."},

    {type:"teach", trg:"une bottine", src:"a bootie, an ankle boot", pos:"noun", gender:"f",
     note:"Feminine noun. A short boot reaching the ankle. Diminutive of 'botte'.",
     example:"A: Ces bottines en cuir sont superbes.\nB: Elles iront bien avec ta robe.",
     exampleSrc:"A: These leather ankle boots are gorgeous.\nB: They'll go well with your dress.",
     funFact:"Diminutive of 'botte' (boot). 19th century bottines were essential fashion items for Parisian women."},

    {type:"teach", trg:"une cagoule", src:"a hood, a balaclava", pos:"noun", gender:"f",
     note:"Feminine noun. A face-covering hood. Also: a lightweight rain jacket (regional).",
     example:"A: Le voleur portait une cagoule noire.\nB: Impossible de l'identifier.",
     exampleSrc:"A: The thief wore a black balaclava.\nB: Impossible to identify him.",
     funFact:"From Latin 'cuculla' (monk's cowl). In northern France, 'cagoule' also means a rain jacket (K-way)."},

    {type:"teach", trg:"un chausson", src:"a slipper, a ballet shoe", pos:"noun", gender:"m",
     note:"Masculine noun. A soft indoor shoe. Also: a turnover pastry.",
     example:"A: Mets tes chaussons, le carrelage est froid.\nB: Merci maman, j'avais oublie.",
     exampleSrc:"A: Put your slippers on, the tiling is cold.\nB: Thanks mom, I forgot.",
     funFact:"'Chausson aux pommes' is an apple turnover pastry. Same word, completely different meaning."},

    {type:"mc",
     q:"Quel objet est une cagoule qui couvre le visage ?",
     opts:["Un type de capuche fermee","Des lunettes sans branches","Des bottines de cuir","Une banderole de manifestation"],
     ans:"Un type de capuche fermee",
     hint:"From Latin for 'monk's cowl'. Used by criminals to hide identity, or by skiers against cold."},

    {type:"teach", trg:"un cendrier", src:"an ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A receptacle for cigarette ashes.",
     example:"A: Ou est le cendrier ?\nB: Sur la terrasse, on ne fume pas a l'interieur.",
     exampleSrc:"A: Where's the ashtray?\nB: On the terrace, we don't smoke indoors.",
     funFact:"From 'cendre' (ash). Smoking bans since 2007 made ashtrays disappear from French cafes."},

    {type:"teach", trg:"un accordeon", src:"an accordion", pos:"noun", gender:"m",
     note:"Masculine noun. A portable bellows instrument with buttons or keys.",
     example:"A: Le son de l'accordeon me rappelle Paris.\nB: C'est l'instrument de la musette.",
     exampleSrc:"A: The sound of the accordion reminds me of Paris.\nB: It's the instrument of musette music.",
     funFact:"The accordion became the symbol of Parisian music in the 1930s. Edith Piaf's songs feature it prominently."},

    {type:"teach", trg:"un attirail", src:"a gear, a paraphernalia", pos:"noun", gender:"m",
     note:"Masculine noun. A collection of equipment or tools for an activity.",
     example:"A: Il a emporte tout son attirail de peche.\nB: Cannes, moulinets, appats, tout y est.",
     exampleSrc:"A: He brought all his fishing gear.\nB: Rods, reels, bait, everything's there.",
     funFact:"From Old French 'atirier' (to equip). Slightly ironic, suggesting someone has too much stuff."},

    {type:"fb",
     s:"Les manifestants brandissaient des {1} contre la reforme.",
     a:["banderoles"],
     opts:["banderoles","bottines","cagoules","cendriers"],
     hint:"Long strips of cloth with messages, carried at protests. A fixture of French demonstrations.",
     sSrc:"The protesters were waving {1} against the reform."},

    {type:"teach", trg:"un ch\u00e2ssis", src:"a frame, a chassis", pos:"noun", gender:"m",
     note:"Masculine noun. A structural frame. Used for windows, cars, and paintings.",
     example:"A: Le chassis de la fenetre est en bois.\nB: Il faudrait le repeindre.",
     exampleSrc:"A: The window frame is made of wood.\nB: It should be repainted.",
     funFact:"From 'chasse' (frame). A painter's canvas is stretched on a 'chassis'. Also used for car frames."},

    {type:"teach", trg:"le crible", src:"the sieve, the riddle", pos:"noun", gender:"m",
     note:"Masculine noun. A mesh tool for sorting. 'Passer au crible' = to scrutinize.",
     example:"A: Passons ces donnees au crible.\nB: Il faut verifier chaque chiffre.",
     exampleSrc:"A: Let's scrutinize this data.\nB: We need to verify every figure.",
     funFact:"'Passer au crible' (to sift through) is a very common expression meaning to examine critically."},

    {type:"teach", trg:"un coupe-papier", src:"a letter opener", pos:"noun", gender:"m",
     note:"Masculine noun. A small blade for opening envelopes. Invariable plural.",
     example:"A: Ce coupe-papier en ivoire est ancien.\nB: Il appartient a mon grand-pere.",
     exampleSrc:"A: This ivory letter opener is antique.\nB: It belongs to my grandfather.",
     funFact:"Once essential desk items. 'Couper' (cut) + 'papier' (paper). French compound nouns often use this pattern."},

    {type:"mc",
     q:"Que signifie 'passer au crible' ?",
     opts:["Examiner en detail","Jeter a la poubelle","Couper en morceaux","Mettre en ordre"],
     ans:"Examiner en detail",
     hint:"A crible is a sieve or riddle. To pass something through it means to scrutinize carefully."},

    {type:"teach", trg:"une clope", src:"a cigarette (slang)", pos:"noun", gender:"f",
     note:"Feminine noun. Slang for cigarette. Very informal.",
     example:"A: Tu as une clope ?\nB: Non, j'ai arrete de fumer.",
     exampleSrc:"A: Got a cigarette?\nB: No, I quit smoking.",
     funFact:"Origin debated: possibly from 'clopiner' (to limp) or Russian 'klop'. Very common slang word."},

    {type:"teach", trg:"la benne", src:"the dumpster, the skip", pos:"noun", gender:"f",
     note:"Feminine noun. A large container for waste or bulk materials.",
     example:"A: Jette les gravats dans la benne.\nB: Elle est deja presque pleine.",
     exampleSrc:"A: Throw the rubble in the dumpster.\nB: It's already almost full.",
     funFact:"Also means the bucket of a crane or a mining cart. 'Benne a ordures' = garbage truck."},

    {type:"teach", trg:"un accroc", src:"a tear, a snag, a hitch", pos:"noun", gender:"m",
     note:"Masculine noun. A rip in fabric, or a problem/setback.",
     example:"A: Il y a un accroc a ta veste.\nB: Zut, elle est toute neuve.",
     exampleSrc:"A: There's a tear in your jacket.\nB: Darn, it's brand new.",
     funFact:"From 'accrocher' (to hook/catch). Figurative: 'sans accroc' means without a hitch. Very versatile."},

    {type:"fb",
     s:"Il a emporte tout son {1} de camping : tente, sac de couchage, rechaud.",
     a:["attirail"],
     opts:["attirail","cendrier","accordeon","chassis"],
     hint:"A collection of equipment for an activity. Slightly ironic, suggesting too much stuff.",
     sSrc:"He brought all his camping {1}: tent, sleeping bag, stove."},

    {type:"teach", trg:"un cabinets", src:"a toilet, a lavatory", pos:"noun", gender:"m",
     note:"Masculine plural noun. A polite, slightly old-fashioned word for toilet.",
     example:"A: Ou sont les cabinets, s'il vous plait ?\nB: Au fond du couloir a droite.",
     exampleSrc:"A: Where is the lavatory, please?\nB: At the end of the hall on the right.",
     funFact:"Euphemism: 'cabinet' means small room. Also 'cabinet medical' (doctor's office) or 'cabinet d'avocats' (law firm)."},

    {type:"teach", trg:"le compte-gouttes", src:"the dropper, drop by drop", pos:"noun", gender:"m",
     note:"Masculine noun. A pipette. Figurative: 'au compte-gouttes' = very sparingly.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: C'est frustrant, on veut tout savoir.",
     exampleSrc:"A: Information is coming in drop by drop.\nB: It's frustrating, we want to know everything.",
     funFact:"'Au compte-gouttes' (drop by drop) is the common figurative use. Very vivid imagery."},

    {type:"match", pairs:[
      {trg:"banderole", src:"banner"},
      {trg:"bottine", src:"ankle boot"},
      {trg:"accroc", src:"tear, snag"},
      {trg:"crible", src:"sieve"},
      {trg:"compte-gouttes", src:"dropper"}
    ]},

    {type:"mc",
     q:"Quel instrument de musique est un symbole de la musique parisienne ?",
     opts:["l'accord\u00e9on","le binocle","le coupe-papier","le cendrier"],
     ans:"l'accord\u00e9on",
     hint:"A bellows instrument with keys or buttons. Think of musette music and Edith Piaf."},

    {type:"fb",
     s:"Il y a un petit {1} a ta chemise, on peut le recoudre.",
     a:["accroc"],
     opts:["accroc","crible","chassis","accordeon"],
     hint:"A tear or snag in fabric. Also means a hitch or setback figuratively. From 'accrocher'.",
     sSrc:"There's a small {1} in your shirt, we can sew it up."}
  ]
};
export default LESSON_19;
