// L06 - Nature & Animals
const LESSON_6 = {id:"frv2_b1gap_l6", title:"Le monde naturel", icon:"\u{1F41D}", xp:15, board:true, steps:[

{type:"intro", title:"Le monde naturel",
 desc:"Discover vocabulary for animals, insects, nature, and the natural world around us.",
 goals:["Learn 20 nature and animal words","Describe wildlife and landscapes","Discuss environmental topics"]},

{type:"teach", trg:"l'abeille", src:"bee", pos:"noun", gender:"f",
 note:"Feminine noun. The honey bee.\nEssential pollinator and cultural symbol.",
 example:"A: Les abeilles sont essentielles pour l'agriculture.\nB: Sans elles, pas de fruits ni de légumes.",
 exampleSrc:"A: Bees are essential for agriculture.\nB: Without them, no fruits or vegetables.",
 funFact:"Napoleon chose the bee as his imperial symbol. It represents industry and immortality."},

{type:"teach", trg:"l'aboiement", src:"barking", pos:"noun", gender:"m",
 note:"Masculine noun. The sound a dog makes.\nFrom aboyer (to bark).",
 example:"A: Les aboiements du chien me réveillent chaque nuit.\nB: Tu devrais en parler au voisin.",
 exampleSrc:"A: The dog's barking wakes me up every night.\nB: You should talk to the neighbor about it.",
 funFact:"French has specific words for each animal sound: aboiement (dog), miaulement (cat), mugissement (cow)."},

{type:"teach", trg:"l'aigle", src:"eagle", pos:"noun", gender:"m",
 note:"Masculine noun (the bird). Feminine in heraldry.\nSymbol of power and vision.",
 example:"A: Un aigle survole la vallée.\nB: Regarde comme il plane sans effort.",
 exampleSrc:"A: An eagle is flying over the valley.\nB: Look how it glides effortlessly.",
 funFact:"Masculine for the bird, feminine for the heraldic symbol. L'aigle impériale is feminine."},

{type:"teach", trg:"ailé", src:"winged", pos:"adj", gender:null,
 note:"Adjective. Ailé (m), ailée (f).\nFrom aile (wing). Poetic register.",
 example:"A: Pégase est un cheval ailé de la mythologie.\nB: Il est né du sang de Méduse.",
 exampleSrc:"A: Pegasus is a winged horse from mythology.\nB: He was born from the blood of Medusa.",
 funFact:"Le mot ailé means 'winged word,' a famous expression from Homer used in French literary criticism."},

{type:"teach", trg:"l'araignée", src:"spider", pos:"noun", gender:"f",
 note:"Feminine noun. Toile d'araignée = spider web.\nMany people have peur des araignées.",
 example:"A: Il y a une araignée dans la salle de bain !\nB: Ne la tue pas, elle mange les moustiques.",
 exampleSrc:"A: There's a spider in the bathroom!\nB: Don't kill it, it eats mosquitoes.",
 funFact:"The French say 'araignée du matin, chagrin. Araignée du soir, espoir.' Morning spider = bad luck."},

{type:"mc",
 q:"Quel insecte est essentiel pour la pollinisation ?",
 opts:["l'abeille","l'araignée","l'aigle","l'aimant"],
 ans:"l'abeille",
 hint:"Napoleon used this insect as his imperial symbol. It makes honey."},

{type:"teach", trg:"l'aimant", src:"magnet", pos:"noun", gender:"m",
 note:"Masculine noun. A magnetic object.\nAlso: aimant as adjective = loving.",
 example:"A: Ce jouet fonctionne avec des aimants.\nB: C'est fascinant comment ils s'attirent.",
 exampleSrc:"A: This toy works with magnets.\nB: It's fascinating how they attract each other.",
 funFact:"Same spelling as the present participle of aimer (to love). Un père aimant = a loving father."},

{type:"teach", trg:"aigu", src:"sharp, acute, high-pitched", pos:"adj", gender:null,
 note:"Adjective. Aigu (m), aiguë (f).\nMultiple senses: pain, sound, angle.",
 example:"A: Elle a ressenti une douleur aiguë au dos.\nB: Il faut consulter un médecin rapidement.",
 exampleSrc:"A: She felt a sharp pain in her back.\nB: You should see a doctor quickly.",
 funFact:"The accent aigu (é) is named after this word. It's the 'sharp' accent, pointing upward."},

{type:"teach", trg:"aiguiser", src:"to sharpen", pos:"verb", gender:null,
 note:"Regular -er verb. To sharpen a blade or mind.\nAiguiser un couteau = to sharpen a knife.",
 example:"A: Il faut aiguiser ces couteaux, ils ne coupent plus.\nB: J'ai une pierre à aiguiser dans le tiroir.",
 exampleSrc:"A: We need to sharpen these knives, they don't cut anymore.\nB: I have a sharpening stone in the drawer.",
 funFact:"Figuratively, 'aiguiser l'appétit' means to whet the appetite. 'Aiguiser la curiosité' = to sharpen curiosity."},

{type:"teach", trg:"l'acide", src:"acid", pos:"noun", gender:"m",
 note:"Masculine noun. Chemical acid.\nAlso adjective: un goût acide = a sour taste.",
 example:"A: Le citron contient de l'acide citrique.\nB: C'est pour cela qu'il est si acide.",
 exampleSrc:"A: Lemon contains citric acid.\nB: That's why it's so sour.",
 funFact:"From Latin acidus (sour). Both a noun and adjective in French, like 'acid' in English."},

{type:"fb",
 s:"Les {1} du chien ont réveillé tout le quartier.",
 a:["aboiements"],
 opts:["aboiements","aiguisements","aimants","aigles"],
 hint:"This masculine noun is the sound a dog makes, from the verb aboyer.",
 sSrc:"The dog's {1} woke up the whole neighborhood."},

{type:"teach", trg:"l'ancre", src:"anchor", pos:"noun", gender:"f",
 note:"Feminine noun. Ship's anchor.\nJeter l'ancre = to drop anchor.",
 example:"A: Le bateau a jeté l'ancre dans la baie.\nB: On peut descendre à terre maintenant.",
 exampleSrc:"A: The boat dropped anchor in the bay.\nB: We can go ashore now.",
 funFact:"Do not confuse with l'encre (ink). Same pronunciation but different spelling and meaning."},

{type:"teach", trg:"ancrer", src:"to anchor, to root", pos:"verb", gender:null,
 note:"Regular -er verb. Physical or figurative anchoring.\nBien ancré = firmly rooted.",
 example:"A: Cette tradition est bien ancrée dans la culture locale.\nB: Elle remonte au Moyen Âge.",
 exampleSrc:"A: This tradition is firmly rooted in local culture.\nB: It goes back to the Middle Ages.",
 funFact:"Ancré dans la réalité means 'grounded in reality.' The metaphor of anchoring is very productive."},

{type:"teach", trg:"l'aromate", src:"herb, spice, aromatic", pos:"noun", gender:"m",
 note:"Masculine noun. Aromatic herb or spice.\nUsed in cooking and perfume.",
 example:"A: Ce plat est parfumé avec des aromates de Provence.\nB: Le thym et le romarin, c'est délicieux.",
 exampleSrc:"A: This dish is flavored with Provençal herbs.\nB: Thyme and rosemary, it's delicious.",
 funFact:"The herbes de Provence blend (thyme, rosemary, oregano, savory) is France's most famous aromate mix."},

{type:"mc",
 q:"Quel verbe signifie 'rendre plus tranchant' ?",
 opts:["amorcer","aiguiser","ancrer","accentuer"],
 ans:"aiguiser",
 hint:"You do this to a knife that no longer cuts. Also used figuratively for curiosity."},

{type:"teach", trg:"l'anatomie", src:"anatomy", pos:"noun", gender:"f",
 note:"Feminine noun. The study of body structure.\nFrom Greek ana (up) + tomē (cutting).",
 example:"A: L'anatomie humaine est complexe.\nB: Il y a plus de 200 os dans le corps.",
 exampleSrc:"A: Human anatomy is complex.\nB: There are more than 200 bones in the body.",
 funFact:"From Greek 'cutting up.' Anatomists literally dissected bodies. The word preserves this origin."},

{type:"teach", trg:"l'anomalie", src:"anomaly, abnormality", pos:"noun", gender:"f",
 note:"Feminine noun. Something that deviates from normal.\nScientific and everyday use.",
 example:"A: Les médecins ont détecté une anomalie.\nB: Il faut faire des examens supplémentaires.",
 exampleSrc:"A: The doctors detected an anomaly.\nB: Additional tests are needed.",
 funFact:"From Greek anomalia (unevenness). Scientists use it for anything outside the expected pattern."},

{type:"teach", trg:"l'antibiotique", src:"antibiotic", pos:"noun", gender:"m",
 note:"Masculine noun. Medicine that kills bacteria.\nAlso used as adjective.",
 example:"A: Le médecin m'a prescrit des antibiotiques.\nB: N'oublie pas de finir tout le traitement.",
 exampleSrc:"A: The doctor prescribed me antibiotics.\nB: Don't forget to finish the whole course.",
 funFact:"From Greek anti (against) + bios (life). Literally 'against life,' meaning against bacterial life."},

{type:"teach", trg:"l'agilité", src:"agility", pos:"noun", gender:"f",
 note:"Feminine noun. Physical or mental nimbleness.\nAlso a business buzzword: agilité organisationnelle.",
 example:"A: Le chat a une agilité impressionnante.\nB: Il a sauté du toit sans problème.",
 exampleSrc:"A: The cat has impressive agility.\nB: It jumped from the roof without any trouble.",
 funFact:"Now a tech industry buzzword. 'Méthode agile' is agile methodology. Very trendy in France."},

{type:"fb",
 s:"Le bateau a jeté l'{1} dans la baie protégée.",
 a:["ancre"],
 opts:["ancre","aigle","aromate","abeille"],
 hint:"This feminine noun is what holds a ship in place. Don't confuse it with ink.",
 sSrc:"The boat dropped {1} in the protected bay."},

{type:"match", pairs:[
  {trg:"l'abeille", src:"bee"},
  {trg:"l'aigle", src:"eagle"},
  {trg:"l'araignée", src:"spider"},
  {trg:"l'ancre", src:"anchor"},
  {trg:"l'aromate", src:"herb/spice"}
]},

{type:"mc",
 q:"Quel adjectif signifie 'tranchant' ou 'qui a un son haut' ?",
 opts:["acide","ancré","aigu","ailé"],
 ans:"aigu",
 hint:"The French accent mark named after this word points upward. Think sharp pain or high pitch."}

]};
export default LESSON_6;
