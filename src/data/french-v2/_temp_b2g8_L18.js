const LESSON_18 = {
  id:"frv2_b2g8_l18", title:"Richesse et rareté", icon:"\u{1F48E}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Richesse et rareté",
     desc:"Vocabulary about wealth, privilege, trade, and scarcity. From privileged elites to shrewd merchants.",
     goals:["Learn 15 words about wealth and social status","Discuss economics and privilege in French","Express nuanced judgments about society"]},

    {type:"teach", trg:"le nanti", src:"the privileged person, the wealthy", pos:"noun", gender:"m",
     note:"Masculine noun. A well-off person, often with a negative connotation.\nPlural: les nantis.",
     example:"A: Les nantis vivent dans un autre monde.\nB: L'écart avec les pauvres se creuse.",
     exampleSrc:"A: The wealthy live in another world.\nB: The gap with the poor is growing.",
     funFact:"From 'nantir' (to provide). 'Les nantis' is strongly political, often used in left-wing discourse."},

    {type:"teach", trg:"le négociant", src:"the merchant, the trader", pos:"noun", gender:"m",
     note:"Masculine noun. A wholesale trader, especially in wine.\nFeminine: une négociante.",
     example:"A: Ce négociant en vins est réputé dans toute la région.\nB: Il travaille avec les meilleurs vignerons.",
     exampleSrc:"A: This wine merchant is renowned throughout the region.\nB: He works with the best winemakers.",
     funFact:"Bordeaux wine negociants have shaped the global wine trade for centuries. A prestigious profession."},

    {type:"teach", trg:"un narcotique", src:"a narcotic", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that induces sleep or dulls the senses.\nAlso an adjective.",
     example:"A: Ce médicament a un effet narcotique.\nB: Ne conduis pas après l'avoir pris.",
     exampleSrc:"A: This medication has a narcotic effect.\nB: Don't drive after taking it.",
     funFact:"From Greek 'narkotikos' (numbing). French law classifies 'stupéfiants' (drugs), not 'narcotiques'."},

    {type:"teach", trg:"narquois", src:"mocking, sardonic", pos:"adj", gender:null,
     note:"Adjective. Sly and mocking in a quiet way.\nFeminine: narquoise.",
     example:"A: Son sourire narquois m'énerve.\nB: Il se moque toujours en silence.",
     exampleSrc:"A: His mocking smile irritates me.\nB: He always mocks in silence.",
     funFact:"A quintessentially French adjective. The 'sourire narquois' is a literary staple from Balzac to today."},

    {type:"mc",
     q:"Quel adjectif décrit un sourire moqueur et sournois ?",
     opts:["narquois","natif","narcotique","naval"],
     ans:"narquois",
     hint:"A quiet, sly mockery. Think of someone smiling while silently making fun of you."},

    {type:"teach", trg:"naval", src:"naval", pos:"adj", gender:null,
     note:"Adjective. Relating to ships or the navy.\nMasculine plural: navals.",
     example:"A: La base navale de Toulon est la plus grande de France.\nB: La Marine y est depuis des siècles.",
     exampleSrc:"A: The naval base in Toulon is the largest in France.\nB: The Navy has been there for centuries.",
     funFact:"Masculine plural 'navals' is an exception. Most -al adjectives become -aux (national > nationaux)."},

    {type:"teach", trg:"natif", src:"native, born in", pos:"noun", gender:"m",
     note:"Noun/adjective. A person born in a specific place.\nFeminine: native.",
     example:"A: Elle est native de Marseille.\nB: Ça s'entend à son accent.",
     exampleSrc:"A: She's a native of Marseille.\nB: You can hear it in her accent.",
     funFact:"'Locuteur natif' (native speaker) is the gold standard in language learning. French linguists debate this concept."},

    {type:"teach", trg:"neutraliser", src:"to neutralize", pos:"verb", gender:null,
     note:"Verb. To render harmless or ineffective.\nUsed in science, sports, and security.",
     example:"A: La police a neutralisé le suspect.\nB: Personne n'a été blessé.",
     exampleSrc:"A: Police neutralized the suspect.\nB: Nobody was injured.",
     funFact:"In cycling, a 'neutralisation' means the race is temporarily stopped. A uniquely French sporting term."},

    {type:"fb",
     s:"Les {1} vivent dans un autre monde, l'écart se creuse.",
     a:["nantis"],
     opts:["nantis","natifs","négociants","narcotiques"],
     hint:"The privileged or wealthy. From 'nantir' meaning to provide. Often used in political discourse.",
     sSrc:"The {1} live in another world, the gap is growing."},

    {type:"teach", trg:"le neurone", src:"the neuron", pos:"noun", gender:"m",
     note:"Masculine noun. A nerve cell in the brain.\n'Neurones' is also slang for intelligence.",
     example:"A: Le cerveau contient des milliards de neurones.\nB: C'est l'organe le plus complexe.",
     exampleSrc:"A: The brain contains billions of neurons.\nB: It's the most complex organ.",
     funFact:"'Faire travailler ses neurones' means to use your brain. Colloquial but widely understood."},

    {type:"teach", trg:"l'obtention", src:"the obtaining, the achievement", pos:"noun", gender:"f",
     note:"Feminine noun. The act of obtaining or achieving something.\nFormal register.",
     example:"A: L'obtention du visa a pris trois mois.\nB: La paperasse était interminable.",
     exampleSrc:"A: Obtaining the visa took three months.\nB: The paperwork was endless.",
     funFact:"French bureaucratic vocabulary is rich. 'Obtention' appears on every official form and letter."},

    {type:"teach", trg:"l'omission", src:"the omission", pos:"noun", gender:"f",
     note:"Feminine noun. Something left out or forgotten.\n'Par omission' = by omission.",
     example:"A: Cette omission dans le contrat est grave.\nB: Il faut la corriger immédiatement.",
     exampleSrc:"A: This omission in the contract is serious.\nB: It must be corrected immediately.",
     funFact:"In French law, 'non-assistance par omission' (failing to help someone in danger) is a crime."},

    {type:"mc",
     q:"Quel mot désigne le fait d'obtenir quelque chose officiellement ?",
     opts:["l'omission","l'obtention","le neurone","le narcotique"],
     ans:"l'obtention",
     hint:"A formal noun for the process of getting something, like a visa or a diploma."},

    {type:"teach", trg:"l'ombrage", src:"the shade, the offense", pos:"noun", gender:"m",
     note:"Masculine noun. Shade from trees. Also: 'prendre ombrage' = to take offense.",
     example:"A: Les arbres donnent un ombrage agréable.\nB: Installons le pique-nique ici.",
     exampleSrc:"A: The trees provide pleasant shade.\nB: Let's set up the picnic here.",
     funFact:"'Porter ombrage' means to overshadow someone. 'Ombrageux' describes a person who is easily offended."},

    {type:"teach", trg:"l'ocre", src:"ochre (color/pigment)", pos:"noun", gender:"f",
     note:"Feminine noun. A natural earthy pigment, yellow to red.\nAlso used as an invariable adjective.",
     example:"A: Les façades ocre de Roussillon sont magnifiques.\nB: Le village est célèbre pour ses carrières.",
     exampleSrc:"A: The ochre facades of Roussillon are magnificent.\nB: The village is famous for its quarries.",
     funFact:"Roussillon in Provence has the richest ochre deposits in Europe. The whole village glows orange-red."},

    {type:"teach", trg:"l'olympisme", src:"Olympism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy and values of the Olympic movement.",
     example:"A: L'olympisme prône le respect et l'excellence.\nB: Paris 2024 a mis ces valeurs en lumière.",
     exampleSrc:"A: Olympism promotes respect and excellence.\nB: Paris 2024 highlighted these values.",
     funFact:"Pierre de Coubertin, a French educator, revived the modern Olympics in 1896. Olympism is his legacy."},

    {type:"fb",
     s:"Son sourire {1} cachait une moquerie silencieuse.",
     a:["narquois"],
     opts:["narquois","naval","natif","narcotique"],
     hint:"A sly, sardonic expression. A literary staple describing quiet, silent mockery.",
     sSrc:"His {1} smile hid a silent mockery."},

    {type:"match", pairs:[
      {trg:"nanti", src:"privileged person"},
      {trg:"négociant", src:"merchant, trader"},
      {trg:"obtention", src:"obtaining"},
      {trg:"ombrage", src:"shade / offense"},
      {trg:"olympisme", src:"Olympism"}
    ]},

    {type:"mc",
     q:"Quel Français a relancé les Jeux olympiques modernes en 1896 ?",
     opts:["Napoléon","Louis Pasteur","Pierre de Coubertin","Victor Hugo"],
     ans:"Pierre de Coubertin",
     hint:"The philosophy he created is called 'olympisme'. A French educator with a vision for world sport."},

    {type:"fb",
     s:"Cette {1} dans le contrat pourrait poser un problème juridique.",
     a:["omission"],
     opts:["omission","obtention","ocre","ombrage"],
     hint:"Something left out or forgotten. In French law, failing to include key details can be a crime.",
     sSrc:"This {1} in the contract could cause a legal problem."}
  ]
};
export default LESSON_18;
