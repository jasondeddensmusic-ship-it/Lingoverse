const LESSON_2 = {
  id:"frv2_b2gap_l2", title:"Les \u00e9motions profondes", icon:"\u{1F494}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Les \u00e9motions profondes",
     desc:"Express complex emotions, from tenderness to hostility. Master the vocabulary of feelings at a sophisticated level.",
     goals:["Learn 20 emotion and character words","Describe feelings with nuance","Discuss personality and emotional states"]},

    {type:"teach", trg:"l'aversion", src:"the aversion, the loathing", pos:"noun", gender:"f",
     note:"Feminine noun. A strong feeling of dislike or repulsion.",
     example:"A: J'ai une aversion pour les araign\u00e9es.\nB: Moi aussi, c'est vraiment une phobie.",
     exampleSrc:"A: I have an aversion to spiders.\nB: Me too, it's really a phobia.",
     funFact:"From Latin 'aversio' meaning turning away. The physical act of turning away from disgust."},

    {type:"teach", trg:"l'antipathie", src:"the antipathy, the dislike", pos:"noun", gender:"f",
     note:"Feminine noun. A deep-seated feeling of dislike toward someone.",
     example:"A: Il y a une antipathie entre eux.\nB: Oui, ils ne se supportent pas.",
     exampleSrc:"A: There's an antipathy between them.\nB: Yes, they can't stand each other.",
     funFact:"From Greek 'anti' (against) + 'pathos' (feeling). The opposite is 'sympathie'."},

    {type:"teach", trg:"antipathique", src:"unpleasant, unlikeable", pos:"adj", gender:null,
     note:"Adjective. Describes a person who inspires dislike. Same form for m/f.",
     example:"A: Je trouve ce professeur antipathique.\nB: Pourtant, ses cours sont excellents.",
     exampleSrc:"A: I find that professor unpleasant.\nB: Yet his classes are excellent.",
     funFact:"The opposite is 'sympathique' (likeable), often shortened to 'sympa' in casual French."},

    {type:"teach", trg:"l'aggressivit\u00e9", src:"the aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. A tendency toward hostile or violent behavior.",
     example:"A: Son agressivit\u00e9 inqui\u00e8te ses coll\u00e8gues.\nB: Il devrait consulter un psychologue.",
     exampleSrc:"A: His aggressiveness worries his colleagues.\nB: He should see a psychologist.",
     funFact:"French distinguishes between 'agressivit\u00e9' (the trait) and 'agression' (the act)."},

    {type:"teach", trg:"l'all\u00e9gresse", src:"the elation, the joy", pos:"noun", gender:"f",
     note:"Feminine noun. Exuberant, overflowing happiness.",
     example:"A: Quelle all\u00e9gresse dans la salle !\nB: Oui, tout le monde f\u00eate la victoire.",
     exampleSrc:"A: What elation in the room!\nB: Yes, everyone is celebrating the victory.",
     funFact:"From Latin 'alacritas' meaning liveliness. The French national anthem mentions 'all\u00e9gresse'."},

    {type:"mc",
     q:"Quel mot d\u00e9crit un sentiment profond de d\u00e9go\u00fbt ou de r\u00e9pulsion ?",
     opts:["l'aversion","l'all\u00e9gresse","l'affirmation","l'adage"],
     ans:"l'aversion",
     hint:"From Latin meaning 'turning away'. A strong dislike that makes you recoil."},

    {type:"teach", trg:"affectionner", src:"to be fond of", pos:"verb", gender:null,
     note:"Verb. To have a special fondness for something or someone.",
     example:"A: Elle affectionne les vieux films.\nB: Oui, surtout le cin\u00e9ma noir et blanc.",
     exampleSrc:"A: She's fond of old movies.\nB: Yes, especially black and white cinema.",
     funFact:"More literary than 'aimer'. Suggests a tender, cultivated attachment rather than passion."},

    {type:"teach", trg:"affectif", src:"emotional, affective", pos:"adj", gender:null,
     note:"Adjective. Related to emotions and feelings. Feminine: affective.",
     example:"A: C'est un probl\u00e8me affectif, pas logique.\nB: Tu as raison, il faut \u00e9couter le c\u0153ur.",
     exampleSrc:"A: It's an emotional problem, not a logical one.\nB: You're right, you have to listen to the heart.",
     funFact:"Used in psychology for 'affective disorders'. French distinguishes 'affectif' from '\u00e9motionnel'."},

    {type:"teach", trg:"attrister", src:"to sadden", pos:"verb", gender:null,
     note:"Verb. To make someone sad. Reflexive: s'attrister (to become sad).",
     example:"A: Cette nouvelle m'attriste beaucoup.\nB: Moi aussi, c'est vraiment triste.",
     exampleSrc:"A: This news saddens me greatly.\nB: Me too, it's really sad.",
     funFact:"Built from 'triste' (sad) with prefix 'a-'. The reflexive form is common in literature."},

    {type:"teach", trg:"craintif", src:"fearful, timid", pos:"adj", gender:null,
     note:"Adjective. Describes someone who is easily frightened. Feminine: craintive.",
     example:"A: L'enfant est craintif avec les inconnus.\nB: C'est normal \u00e0 cet \u00e2ge.",
     exampleSrc:"A: The child is fearful with strangers.\nB: That's normal at that age.",
     funFact:"From 'crainte' (fear). More refined than 'peureux'. Used often in literary character descriptions."},

    {type:"fb",
     s:"Cette mauvaise nouvelle m'{1} beaucoup.",
     a:["attriste"],
     opts:["attriste","affectionne","alarme","agrippe"],
     hint:"To make someone feel sad. Built from the word 'triste'.",
     sSrc:"This bad news {1} me greatly."},

    {type:"teach", trg:"alarmer", src:"to alarm, to worry", pos:"verb", gender:null,
     note:"Verb. To cause anxiety or fear. Reflexive: s'alarmer.",
     example:"A: Ne vous alarmez pas, c'est un exercice.\nB: Ouf, j'ai eu peur !",
     exampleSrc:"A: Don't be alarmed, it's a drill.\nB: Phew, I was scared!",
     funFact:"From Italian 'all'arme' meaning 'to arms!' Originally a military call to grab weapons."},

    {type:"teach", trg:"alarmant", src:"alarming, worrying", pos:"adj", gender:null,
     note:"Adjective. Describes a situation that causes serious concern.",
     example:"A: Les chiffres sont alarmants.\nB: Oui, il faut agir imm\u00e9diatement.",
     exampleSrc:"A: The numbers are alarming.\nB: Yes, we must act immediately.",
     funFact:"Present participle of 'alarmer' used as adjective. Very common in news headlines."},

    {type:"teach", trg:"alarmiste", src:"alarmist", pos:"adj", gender:null,
     note:"Adjective. Describes someone who exaggerates danger. Same form for m/f.",
     example:"A: Tu es trop alarmiste.\nB: Non, la situation est vraiment grave.",
     exampleSrc:"A: You're too alarmist.\nB: No, the situation is really serious.",
     funFact:"Often used in climate debates. 'Alarmiste' can be noun or adjective in French."},

    {type:"teach", trg:"la bonhomie", src:"the good-naturedness", pos:"noun", gender:"f",
     note:"Feminine noun. A warm, friendly, simple kindness.",
     example:"A: J'aime sa bonhomie naturelle.\nB: Oui, il met tout le monde \u00e0 l'aise.",
     exampleSrc:"A: I like his natural good-naturedness.\nB: Yes, he puts everyone at ease.",
     funFact:"From 'bonhomme' (good man). Suggests unpretentious warmth. A quintessentially French virtue."},

    {type:"mc",
     q:"Quel adjectif d\u00e9crit une personne qui a facilement peur ?",
     opts:["antipathique","craintif","alarmiste","affectif"],
     ans:"craintif",
     hint:"From the noun 'crainte' (fear). Describes a timid, easily frightened character."},

    {type:"teach", trg:"la cruaut\u00e9", src:"the cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. Deliberate infliction of suffering.",
     example:"A: La cruaut\u00e9 envers les animaux est inacceptable.\nB: Absolument, c'est une cause importante.",
     exampleSrc:"A: Cruelty toward animals is unacceptable.\nB: Absolutely, it's an important cause.",
     funFact:"Artaud's 'Th\u00e9\u00e2tre de la Cruaut\u00e9' revolutionized theater by seeking raw emotional truth."},

    {type:"teach", trg:"ardent", src:"ardent, passionate", pos:"adj", gender:null,
     note:"Adjective. Burning with passion or enthusiasm. Feminine: ardente.",
     example:"A: C'est un d\u00e9fenseur ardent de la libert\u00e9.\nB: Oui, il ne l\u00e2che jamais.",
     exampleSrc:"A: He's an ardent defender of freedom.\nB: Yes, he never gives up.",
     funFact:"From Latin 'ardens' meaning burning. The Chapelle Ardente is a chapel lit with candles for the dead."},

    {type:"teach", trg:"bourru", src:"gruff, surly", pos:"adj", gender:null,
     note:"Adjective. Describes a rough, blunt manner that may hide kindness.",
     example:"A: Le voisin est un peu bourru.\nB: Mais au fond, il est gentil.",
     exampleSrc:"A: The neighbor is a bit gruff.\nB: But deep down, he's kind.",
     funFact:"Classic French archetype: the 'bourru bienfaisant' (kind-hearted grump), a stock character in comedy."},

    {type:"teach", trg:"l'aigreur", src:"the bitterness, the sourness", pos:"noun", gender:"f",
     note:"Feminine noun. Bitterness of character or taste.",
     example:"A: Il parle avec aigreur de son ancien travail.\nB: La d\u00e9ception l'a rendu amer.",
     exampleSrc:"A: He speaks with bitterness about his old job.\nB: Disappointment made him bitter.",
     funFact:"From 'aigre' (sour). Physical meaning (heartburn) and emotional meaning (resentment) coexist."},

    {type:"match", pairs:[
      {trg:"aversion", src:"loathing"},
      {trg:"all\u00e9gresse", src:"elation"},
      {trg:"bonhomie", src:"good-naturedness"},
      {trg:"cruaut\u00e9", src:"cruelty"},
      {trg:"aigreur", src:"bitterness"}
    ]},

    {type:"fb",
     s:"Il y a une {1} entre ces deux coll\u00e8gues.",
     a:["antipathie"],
     opts:["antipathie","all\u00e9gresse","bonhomie","cruaut\u00e9"],
     hint:"A deep feeling of mutual dislike. The opposite of 'sympathie'.",
     sSrc:"There is a {1} between these two colleagues."},

    {type:"mc",
     q:"Quel adjectif signifie 'passionn\u00e9, br\u00fblant d'enthousiasme' ?",
     opts:["craintif","affectif","ardent","bourru"],
     ans:"ardent",
     hint:"From Latin for 'burning'. Describes intense passion or enthusiasm."}
  ]
};
export default LESSON_2;
