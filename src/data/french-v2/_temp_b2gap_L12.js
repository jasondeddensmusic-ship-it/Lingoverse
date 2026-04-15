const LESSON_12 = {
  id:"frv2_b2gap_l12", title:"Corps et sante", icon:"\u{1F3E5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Corps et sante",
     desc:"Vocabulary for health, body, and well-being. From medical terms to physical descriptions.",
     goals:["Learn 20 health and body vocabulary words","Discuss medical topics in French","Describe physical states and conditions"]},

    {type:"teach", trg:"dentaire", src:"dental", pos:"adj", gender:null,
     note:"Adjective. Relating to teeth and dental care.",
     example:"A: J'ai un rendez-vous dentaire demain.\nB: Chez quel dentiste ?",
     exampleSrc:"A: I have a dental appointment tomorrow.\nB: With which dentist?",
     funFact:"From Latin 'dens, dentis' (tooth). French dental care is largely reimbursed by social security."},

    {type:"teach", trg:"la di\u00e9t\u00e9tique", src:"dietetics, nutrition science", pos:"noun", gender:"f",
     note:"Feminine noun. The science of diet and nutrition.",
     example:"A: Elle etudie la dietetique a l'universite.\nB: C'est un domaine en pleine expansion.",
     exampleSrc:"A: She's studying dietetics at university.\nB: It's a rapidly growing field.",
     funFact:"From Greek 'diaita' meaning way of life. French 'dietetique' emphasizes balance, not restriction."},

    {type:"teach", trg:"dodu", src:"plump, chubby", pos:"adj", gender:null,
     note:"Adjective. Describes something pleasantly round and well-fed. Feminine: dodue.",
     example:"A: Ce bebe est tout dodu.\nB: Il a de bonnes joues !",
     exampleSrc:"A: This baby is so chubby.\nB: He has such chubby cheeks!",
     funFact:"Onomatopoeia imitating the sound of something round and bouncy. Always affectionate, never rude."},

    {type:"teach", trg:"amincir", src:"to slim down, to thin", pos:"verb", gender:null,
     note:"Verb. To make thinner. Reflexive 's'amincir' = to lose weight.",
     example:"A: Ce pantalon t'amincit beaucoup.\nB: Merci, c'est la coupe qui fait ca.",
     exampleSrc:"A: These pants really slim you down.\nB: Thanks, it's the cut that does it.",
     funFact:"From 'a-' (toward) + 'mince' (thin). A 'regime amincissant' is a slimming diet."},

    {type:"teach", trg:"chuter", src:"to fall, to drop", pos:"verb", gender:null,
     note:"Verb. To fall suddenly. Used for physical falls and statistics.",
     example:"A: Les temperatures ont chute cette nuit.\nB: Oui, il a gele.",
     exampleSrc:"A: Temperatures dropped last night.\nB: Yes, it froze.",
     funFact:"From 'chute' (fall). 'Faire une chute' is more formal than 'tomber'. Used in news for stock market drops."},

    {type:"mc",
     q:"Quel adjectif decrit un bebe bien en chair, de facon affectueuse ?",
     opts:["dodu","aigre","ardu","douillet"],
     ans:"dodu",
     hint:"An onomatopoeia suggesting something round and bouncy. Always used affectionately."},

    {type:"teach", trg:"l'anesth\u00e9sie", src:"the anesthesia", pos:"noun", gender:"f",
     note:"Feminine noun. The medical suppression of pain sensation.",
     example:"A: L'anesthesie a bien fonctionne.\nB: Le patient n'a rien senti.",
     exampleSrc:"A: The anesthesia worked well.\nB: The patient didn't feel anything.",
     funFact:"From Greek 'anaisthesia' meaning without sensation. General anesthesia is 'anesthesie generale'."},

    {type:"teach", trg:"la contraction", src:"the contraction", pos:"noun", gender:"f",
     note:"Feminine noun. A muscle tightening. Also labor contractions in pregnancy.",
     example:"A: J'ai une contraction dans le mollet.\nB: Etire-toi doucement.",
     exampleSrc:"A: I have a contraction in my calf.\nB: Stretch gently.",
     funFact:"In childbirth, 'les contractions' are how French doctors describe labor pains. Same word, double meaning."},

    {type:"teach", trg:"l'atrocit\u00e9", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel or horrific act.",
     example:"A: Les atrocites de la guerre sont innombrables.\nB: Il ne faut jamais oublier.",
     exampleSrc:"A: The atrocities of war are countless.\nB: We must never forget.",
     funFact:"From Latin 'atrox' meaning fierce, cruel. Used in both legal and everyday contexts."},

    {type:"fb",
     s:"Les temperatures ont {1} brutalement cette nuit.",
     a:["chut\u00e9"],
     opts:["chut\u00e9","amorti","anesth\u00e9si\u00e9","aminci"],
     hint:"To fall or drop suddenly. Used for temperatures, stocks, and physical falls.",
     sSrc:"Temperatures {1} sharply last night."},

    {type:"teach", trg:"chevelu", src:"long-haired, hairy", pos:"adj", gender:null,
     note:"Adjective. Having a lot of hair. Feminine: chevelue.",
     example:"A: Ce chanteur de rock est tres chevelu.\nB: Sa criniere est impressionnante.",
     exampleSrc:"A: This rock singer is very long-haired.\nB: His mane is impressive.",
     funFact:"From 'chevelure' (head of hair). 'Le cuir chevelu' means the scalp (literally 'hairy leather')."},

    {type:"teach", trg:"le chevet", src:"the bedside", pos:"noun", gender:"m",
     note:"Masculine noun. The head of a bed. 'Livre de chevet' = bedside book.",
     example:"A: Quel est ton livre de chevet ?\nB: Le Petit Prince, toujours.",
     exampleSrc:"A: What's your bedside book?\nB: The Little Prince, always.",
     funFact:"'Livre de chevet' means your favorite, go-to book. Also the apse end of a church (architecture)."},

    {type:"teach", trg:"assourdir", src:"to deafen, to muffle", pos:"verb", gender:null,
     note:"Verb. To make deaf or to dampen sound. From 'sourd' (deaf).",
     example:"A: Le bruit des travaux nous assourdit.\nB: Mettons des bouchons d'oreilles.",
     exampleSrc:"A: The construction noise is deafening us.\nB: Let's put in earplugs.",
     funFact:"From 'a-' + 'sourd' (deaf). 'Assourdissant' (deafening) is the common adjective form."},

    {type:"teach", trg:"un donneur", src:"a donor", pos:"noun", gender:"m",
     note:"Masculine noun. A person who gives (blood, organs). Feminine: une donneuse.",
     example:"A: La France manque de donneurs de sang.\nB: Je vais m'inscrire cette semaine.",
     exampleSrc:"A: France needs more blood donors.\nB: I'll register this week.",
     funFact:"'Donneur d'organes' = organ donor. France has an opt-out system: everyone is a donor unless they refuse."},

    {type:"mc",
     q:"Comment s'appelle le cote du lit ou l'on pose son livre ?",
     opts:["le chevet","le chevron","le cordon","le barillet"],
     ans:"le chevet",
     hint:"'Livre de c...' means your bedside book, your all-time favorite."},

    {type:"teach", trg:"un abonn\u00e9", src:"a subscriber", pos:"noun", gender:"m",
     note:"Masculine noun. A person with a subscription. Feminine: une abonnee.",
     example:"A: Le journal a perdu beaucoup d'abonnes.\nB: Les gens lisent en ligne maintenant.",
     exampleSrc:"A: The newspaper lost many subscribers.\nB: People read online now.",
     funFact:"From 'abonner' (to subscribe). 'S'abonner' is reflexive. Very common with streaming services."},

    {type:"teach", trg:"un aspirant", src:"an officer cadet, an aspirant", pos:"noun", gender:"m",
     note:"Masculine noun. A military trainee officer or someone who aspires.",
     example:"A: L'aspirant a reussi toutes ses epreuves.\nB: Il sera bientot officier.",
     exampleSrc:"A: The cadet passed all his tests.\nB: He'll soon be an officer.",
     funFact:"In the French military, 'aspirant' is a real rank between warrant officer and second lieutenant."},

    {type:"teach", trg:"l'alt\u00e9ration", src:"the deterioration", pos:"noun", gender:"f",
     note:"Feminine noun. A damaging change, decay, or corruption.",
     example:"A: L'alteration de sa sante est preoccupante.\nB: Il devrait voir un specialiste.",
     exampleSrc:"A: The deterioration of his health is worrying.\nB: He should see a specialist.",
     funFact:"In music, an 'alteration' is a sharp or flat. The word covers both damage and deliberate change."},

    {type:"fb",
     s:"Le bruit des travaux nous {1} depuis ce matin.",
     a:["assourdit"],
     opts:["assourdit","amincit","anesthesie","alerte"],
     hint:"To deafen or muffle. Built from the word for 'deaf' (sourd).",
     sSrc:"The construction noise has been {1} us since this morning."},

    {type:"teach", trg:"doper", src:"to dope, to boost", pos:"verb", gender:null,
     note:"Verb. To use performance-enhancing drugs. Also: to boost or stimulate.",
     example:"A: Le cafe me dope le matin.\nB: Moi, c'est plutot le the.",
     exampleSrc:"A: Coffee gives me a boost in the morning.\nB: For me, it's more tea.",
     funFact:"From English 'dope'. 'Dopage' (doping) is a major topic in French sports. Also used figuratively."},

    {type:"teach", trg:"la cicatrice", src:"the scar", pos:"noun", gender:"f",
     note:"Feminine noun. A mark left on the skin after a wound heals.",
     example:"A: Cette cicatrice raconte une histoire.\nB: Oui, c'est un souvenir de mon enfance.",
     exampleSrc:"A: This scar tells a story.\nB: Yes, it's a memory from my childhood.",
     funFact:"From Latin 'cicatrix'. 'Cicatriser' means to heal over. Also used figuratively for emotional scars."},

    {type:"match", pairs:[
      {trg:"di\u00e9t\u00e9tique", src:"dietetics"},
      {trg:"donneur", src:"donor"},
      {trg:"chevet", src:"bedside"},
      {trg:"abonn\u00e9", src:"subscriber"},
      {trg:"cicatrice", src:"scar"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'rendre plus mince' ?",
     opts:["amincir","assourdir","chuter","doper"],
     ans:"amincir",
     hint:"Built from the adjective 'mince' (thin). Often used about clothing that flatters the figure."},

    {type:"fb",
     s:"La France a un systeme de {1} d'organes par consentement presume.",
     a:["donneurs"],
     opts:["donneurs","abonnes","aspirants","consultants"],
     hint:"People who give blood or organs. France's opt-out system assumes everyone is one.",
     sSrc:"France has an organ {1} system based on presumed consent."}
  ]
};
export default LESSON_12;
