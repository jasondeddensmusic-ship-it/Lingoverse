const LESSON_8 = {
  id:"frv2_b2g3_l8", title:"L'art et l'esthétique", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'art et l'esthétique",
     desc:"Explore vocabulary for art movements, creative expression, and aesthetic judgment in French.",
     goals:["Learn 17 B2 art and aesthetics words","Discuss art movements and styles","Express aesthetic opinions and judgments"]},

    {type:"teach", trg:"le cubisme", src:"cubism", pos:"noun", gender:"m",
     note:"Masculine noun. The early 20th-century art movement pioneered by Picasso and Braque.",
     example:"A: Le cubisme a révolutionné la peinture.\nB: Oui, il a brisé les règles de la perspective.",
     exampleSrc:"A: Cubism revolutionized painting.\nB: Yes, it shattered the rules of perspective.",
     funFact:"The term 'cubisme' was coined by French critic Louis Vauxcelles in 1908 when he mocked Braque's paintings as 'bizarreries cubiques'."},

    {type:"teach", trg:"le fauvisme", src:"fauvism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement using bold, non-naturalistic colors.",
     example:"A: Le fauvisme utilisait des couleurs vives et audacieuses.\nB: Matisse en était le chef de file.",
     exampleSrc:"A: Fauvism used vivid, bold colors.\nB: Matisse was the leader.",
     funFact:"Named after 'les fauves' (wild beasts) by critic Vauxcelles. He saw Matisse's colorful paintings near a classical sculpture and said 'Donatello among the wild beasts!'"},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement prioritizing emotional experience over realism.",
     example:"A: L'expressionnisme est né en Allemagne au début du vingtième siècle.\nB: Les couleurs traduisent les émotions intérieures.",
     exampleSrc:"A: Expressionism was born in Germany at the start of the twentieth century.\nB: The colors convey inner emotions.",
     funFact:"Though German in origin, expressionism deeply influenced French cinema. Marcel Carne's 'Les Enfants du Paradis' shows its mark."},

    {type:"teach", trg:"le cinématographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original film projector and camera invented by the Lumiere brothers.",
     example:"A: Le cinématographe a été inventé à Lyon.\nB: Les frères Lumière ont changé le monde.",
     exampleSrc:"A: The cinematograph was invented in Lyon.\nB: The Lumiere brothers changed the world.",
     funFact:"The first public film screening was on December 28, 1895, at the Grand Cafe in Paris. The audience reportedly fled from the oncoming train."},

    {type:"mc",
     q:"Quel mouvement artistique utilise des couleurs vives et non naturalistes ?",
     opts:["le fauvisme","le cubisme","l'expressionnisme","le cinématographe"],
     ans:"le fauvisme",
     hint:"The name comes from 'wild beasts'. Matisse was its leader, and the colors were deliberately bold and unrealistic."},

    {type:"teach", trg:"un décorateur", src:"a decorator, a set designer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who designs interiors or stage sets. Feminine: decoratrice.",
     example:"A: Le décorateur a transformé cet appartement.\nB: On ne reconnaît plus rien, c'est superbe.",
     exampleSrc:"A: The decorator transformed this apartment.\nB: You can't recognize anything, it's superb.",
     funFact:"In French cinema, the 'decorateur' or 'chef decorateur' designs all sets. It is one of the most respected film crew positions."},

    {type:"teach", trg:"un dérivé", src:"a derivative, a by-product", pos:"noun", gender:"m",
     note:"Masculine noun. Something derived from another thing.",
     example:"A: Ce parfum est un dérivé de la lavande.\nB: On sent bien les notes florales.",
     exampleSrc:"A: This perfume is a derivative of lavender.\nB: You can clearly smell the floral notes.",
     funFact:"In linguistics, a 'derive' is a word formed from another word. French creates thousands of derives using prefixes and suffixes."},

    {type:"teach", trg:"l'altération", src:"alteration, degradation", pos:"noun", gender:"f",
     note:"Feminine noun. A change that damages or worsens the original state.",
     example:"A: L'altération des couleurs est due à la lumière.\nB: Il faut protéger les tableaux du soleil.",
     exampleSrc:"A: The alteration of colors is due to light.\nB: We must protect the paintings from sunlight.",
     funFact:"In music, an 'alteration' means adding a sharp or flat to a note. In art restoration, it describes unwanted color changes."},

    {type:"teach", trg:"les armoiries", src:"coat of arms", pos:"noun", gender:"pl",
     note:"Feminine plural noun. Heraldic symbols of a family or institution. Always plural.",
     example:"A: Les armoiries de la ville sont visibles sur la mairie.\nB: Elles représentent un lion et une fleur de lys.",
     exampleSrc:"A: The city's coat of arms is visible on the town hall.\nB: It depicts a lion and a fleur-de-lis.",
     funFact:"French heraldry has its own specialized vocabulary. 'Blason' is the shield, 'armoiries' is the full coat of arms including crest and motto."},

    {type:"fb",
     s:"Le {1} a été inventé par les frères Lumière à Lyon en 1895.",
     a:["cinématographe"],
     opts:["cinématographe","cubisme","fauvisme","expressionnisme"],
     hint:"This is the original device that combined a camera and projector. It gave us the word 'cinema'.",
     sSrc:"The {1} was invented by the Lumiere brothers in Lyon in 1895."},

    {type:"teach", trg:"enlaidir", src:"to make ugly, to become ugly", pos:"verb", gender:null,
     note:"Verb. The opposite of 'embellir'. Can be transitive or intransitive.",
     example:"A: Cette construction enlaidit le paysage.\nB: Je suis d'accord, c'est une horreur.",
     exampleSrc:"A: This building makes the landscape ugly.\nB: I agree, it's an eyesore.",
     funFact:"Built from 'en-' + 'laid' (ugly). French has many pairs: embellir/enlaidir, enrichir/appauvrir, encourager/decourager."},

    {type:"teach", trg:"figer", src:"to freeze, to fix in place", pos:"verb", gender:null,
     note:"Verb. To solidify or become motionless. Also: to fix an expression permanently.",
     example:"A: La peur l'a figé sur place.\nB: Il n'a pas pu bouger pendant plusieurs secondes.",
     exampleSrc:"A: Fear froze him in place.\nB: He couldn't move for several seconds.",
     funFact:"A 'expression figee' is a fixed expression or idiom. Once language 'freezes' into a set phrase, the words cannot be rearranged."},

    {type:"teach", trg:"une filature", src:"a spinning mill, a shadowing", pos:"noun", gender:"f",
     note:"Feminine noun. A factory for spinning thread, or the act of following someone secretly.",
     example:"A: La police a organisé une filature du suspect.\nB: Il a été suivi pendant trois jours.",
     exampleSrc:"A: The police organized a surveillance of the suspect.\nB: He was followed for three days.",
     funFact:"The dual meaning comes from the thread metaphor: following someone means 'spinning out' a thread of surveillance behind them."},

    {type:"mc",
     q:"Quel verbe signifie rendre quelque chose plus laid ?",
     opts:["décorer","enlaidir","figer","altérer"],
     ans:"enlaidir",
     hint:"This is the exact opposite of 'embellir' (to beautify). It contains the word 'laid' (ugly)."},

    {type:"teach", trg:"l'apogée", src:"the peak, the zenith", pos:"noun", gender:"m",
     note:"Masculine noun. The highest point of development or achievement.",
     example:"A: L'empire romain a atteint son apogée au deuxième siècle.\nB: Ensuite, le déclin a commencé.",
     exampleSrc:"A: The Roman Empire reached its peak in the second century.\nB: After that, the decline began.",
     funFact:"From Greek 'apo' (away) + 'ge' (earth), originally an astronomy term for a satellite's farthest point from Earth."},

    {type:"teach", trg:"l'asymétrie", src:"asymmetry", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of symmetry or balance between two sides.",
     example:"A: L'asymétrie du visage lui donne du charme.\nB: La perfection serait ennuyeuse.",
     exampleSrc:"A: The asymmetry of her face gives her charm.\nB: Perfection would be boring.",
     funFact:"In Japanese aesthetics, asymmetry (wabi-sabi) is valued. French art criticism increasingly appreciates 'asymetrie' as a design choice."},

    {type:"teach", trg:"erroné", src:"erroneous, incorrect", pos:"adj", gender:null,
     note:"Adjective. Containing errors or based on mistakes. Feminine: erronee.",
     example:"A: Cette information est totalement erronée.\nB: Il faut la corriger immédiatement.",
     exampleSrc:"A: This information is completely erroneous.\nB: It must be corrected immediately.",
     funFact:"From Latin 'erroneus'. More formal than 'faux' or 'incorrect'. Used in academic and legal contexts."},

    {type:"match", pairs:[
      {trg:"cubisme", src:"cubism"},
      {trg:"fauvisme", src:"fauvism"},
      {trg:"armoiries", src:"coat of arms"},
      {trg:"apogée", src:"peak"},
      {trg:"asymétrie", src:"asymmetry"}
    ]},

    {type:"fb",
     s:"Cette théorie est basée sur des données {1} et ne peut pas être acceptée.",
     a:["erronées"],
     opts:["erronées","figées","altérées","dérivées"],
     hint:"This adjective means containing errors or based on mistakes. More formal than 'faux'.",
     sSrc:"This theory is based on {1} data and cannot be accepted."}
  ]
};
export default LESSON_8;
