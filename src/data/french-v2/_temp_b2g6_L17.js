const LESSON_17 = {
  id:"frv2_b2g6_l17", title:"Registres et émotions", icon:"\uD83D\uDCAC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Registres et émotions",
     desc:"Learn expressive vocabulary for describing emotions, reactions, and tonal registers in French.",
     goals:["Learn 20 emotional and tonal B2 words","Express complex emotions precisely","Navigate between formal and informal registers"]},

    {type:"teach", trg:"l'exaltation", src:"the exaltation, the intense excitement", pos:"noun", gender:"f",
     note:"Feminine noun. Intense enthusiasm or glorification of something.",
     example:"A: L'exaltation du public était palpable.\nB: Le discours les a galvanisés.",
     exampleSrc:"A: The exaltation of the audience was palpable.\nB: The speech galvanized them.",
     funFact:"Can be positive (elation) or a warning sign (fanatical fervor). Context determines the tone."},

    {type:"teach", trg:"le désenchantement", src:"the disenchantment", pos:"noun", gender:"m",
     note:"Masculine noun. Loss of illusions or enthusiasm.",
     example:"A: Le désenchantement des électeurs est visible.\nB: Ils ne croient plus aux promesses.",
     exampleSrc:"A: The disenchantment of voters is visible.\nB: They no longer believe in promises.",
     funFact:"Max Weber's 'désenchantement du monde' (disenchantment of the world) is a key French sociological concept."},

    {type:"teach", trg:"l'émerveillement", src:"the wonder, the amazement", pos:"noun", gender:"m",
     note:"Masculine noun. A feeling of delighted astonishment.",
     example:"A: L'émerveillement des enfants devant la neige est touchant.\nB: C'est magique pour eux.",
     exampleSrc:"A: Children's wonder at the snow is touching.\nB: It's magical for them.",
     funFact:"From 'merveille' (marvel). 'S'émerveiller' captures a childlike sense of awe that French culture values."},

    {type:"teach", trg:"l'amertume", src:"the bitterness", pos:"noun", gender:"f",
     note:"Feminine noun. A bitter taste or a feeling of resentment.",
     example:"A: Il parle de son passé avec amertume.\nB: Les blessures ne sont pas guéries.",
     exampleSrc:"A: He speaks of his past with bitterness.\nB: The wounds haven't healed.",
     funFact:"From Latin 'amarus' meaning bitter. 'Amer' (bitter) describes both taste and emotion in French."},

    {type:"mc",
     q:"Quel mot décrit la perte d'illusions et d'enthousiasme ?",
     opts:["le désenchantement","l'émerveillement","l'exaltation","l'amertume"],
     ans:"le désenchantement",
     hint:"The prefix 'dés-' means un-doing, and 'enchantement' means enchantment. Losing the magic."},

    {type:"teach", trg:"la stupéfaction", src:"the stupefaction, the astonishment", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme shock that leaves one speechless.",
     example:"A: La nouvelle a provoqué la stupéfaction générale.\nB: Personne ne s'y attendait.",
     exampleSrc:"A: The news caused general astonishment.\nB: Nobody expected it.",
     funFact:"From Latin 'stupefacere' meaning to stun. Stronger than 'surprise', it implies being frozen in shock."},

    {type:"teach", trg:"la mélancolie", src:"the melancholy", pos:"noun", gender:"f",
     note:"Feminine noun. A deep, lingering sadness without a specific cause.",
     example:"A: Une mélancolie automnale s'empare de moi.\nB: Les jours raccourcissent.",
     exampleSrc:"A: An autumnal melancholy takes hold of me.\nB: The days are getting shorter.",
     funFact:"From Greek 'melas kholé' (black bile). A favorite theme of French Romantic poets like Lamartine."},

    {type:"teach", trg:"la résignation", src:"the resignation, the acceptance", pos:"noun", gender:"f",
     note:"Feminine noun. Passive acceptance of something unpleasant.",
     example:"A: Il a accepté la nouvelle avec résignation.\nB: Il n'avait pas le choix.",
     exampleSrc:"A: He accepted the news with resignation.\nB: He had no choice.",
     funFact:"French existentialists like Camus explored the tension between resignation and revolt."},

    {type:"fb",
     s:"L'{1} des enfants devant le spectacle de magie était magnifique.",
     a:["émerveillement"],
     opts:["émerveillement","amertume","désenchantement","résignation"],
     hint:"A feeling of delighted astonishment, like seeing something magical for the first time.",
     sSrc:"The children's {1} at the magic show was wonderful."},

    {type:"teach", trg:"l'effroi", src:"the terror, the dread", pos:"noun", gender:"m",
     note:"Masculine noun. Intense fear or horror. Literary register.",
     example:"A: L'effroi se lisait sur son visage.\nB: Il avait vu quelque chose de terrible.",
     exampleSrc:"A: Terror could be read on his face.\nB: He had seen something terrible.",
     funFact:"More literary than 'peur'. 'Effroyable' (dreadful) is the adjective form used in everyday speech."},

    {type:"teach", trg:"l'allégresse", src:"the elation, the exuberance", pos:"noun", gender:"f",
     note:"Feminine noun. Great joy, often collective and festive.",
     example:"A: L'allégresse régnait dans les rues après la victoire.\nB: Tout le monde dansait.",
     exampleSrc:"A: Elation reigned in the streets after the victory.\nB: Everyone was dancing.",
     funFact:"From Italian 'allegrezza'. More joyful and festive than 'joie'. Often used for national celebrations."},

    {type:"teach", trg:"la consternation", src:"the dismay, the consternation", pos:"noun", gender:"f",
     note:"Feminine noun. Shock and distress at something unexpected.",
     example:"A: La consternation était générale après l'annonce.\nB: Personne ne comprenait cette décision.",
     exampleSrc:"A: The dismay was widespread after the announcement.\nB: Nobody understood this decision.",
     funFact:"Stronger than 'surprise'. Implies both shock and disapproval. Common in political commentary."},

    {type:"mc",
     q:"Quel mot exprime une joie collective et festive ?",
     opts:["l'allégresse","la mélancolie","la consternation","l'effroi"],
     ans:"l'allégresse",
     hint:"From Italian, meaning great collective joy. Think of celebrations in the streets."},

    {type:"teach", trg:"la véhémence", src:"the vehemence", pos:"noun", gender:"f",
     note:"Feminine noun. Great passion and force in expression.",
     example:"A: Il a défendu sa position avec véhémence.\nB: Sa conviction était impressionnante.",
     exampleSrc:"A: He defended his position with vehemence.\nB: His conviction was impressive.",
     funFact:"From Latin 'vehementia'. French debate culture values passionate argument, not just calm logic."},

    {type:"teach", trg:"la perplexité", src:"the perplexity, the bewilderment", pos:"noun", gender:"f",
     note:"Feminine noun. A state of confusion when unable to understand something.",
     example:"A: Sa réponse m'a laissé dans la perplexité.\nB: Je ne comprends toujours pas.",
     exampleSrc:"A: His answer left me in perplexity.\nB: I still don't understand.",
     funFact:"'Perplexe' (perplexed) is one of those French adjectives that sounds much more elegant than 'confused'."},

    {type:"teach", trg:"le ressenti", src:"the feeling, the perception", pos:"noun", gender:"m",
     note:"Masculine noun. A subjective feeling or emotional experience.",
     example:"A: Quel est votre ressenti sur cette situation ?\nB: Je suis partagé, honnêtement.",
     exampleSrc:"A: What is your feeling about this situation?\nB: I'm torn, honestly.",
     funFact:"A modern addition to French. 'Le ressenti' is now preferred over 'le sentiment' in psychology and media."},

    {type:"fb",
     s:"Il a plaidé sa cause avec une {1} qui a impressionné le jury.",
     a:["véhémence"],
     opts:["véhémence","perplexité","résignation","mélancolie"],
     hint:"Great passion and forceful energy in speech or argument.",
     sSrc:"He pleaded his case with a {1} that impressed the jury."},

    {type:"teach", trg:"l'indignation", src:"the indignation", pos:"noun", gender:"f",
     note:"Feminine noun. Strong anger at perceived injustice.",
     example:"A: L'indignation populaire a mené à des réformes.\nB: La voix du peuple a été entendue.",
     exampleSrc:"A: Public indignation led to reforms.\nB: The voice of the people was heard.",
     funFact:"Stéphane Hessel's 'Indignez-vous!' (Time for Outrage!) became a manifesto for the Occupy movement."},

    {type:"teach", trg:"la sérénité", src:"the serenity, the calm", pos:"noun", gender:"f",
     note:"Feminine noun. A state of peaceful calm and composure.",
     example:"A: Elle affronte les difficultés avec sérénité.\nB: Rien ne semble la perturber.",
     exampleSrc:"A: She faces difficulties with serenity.\nB: Nothing seems to disturb her.",
     funFact:"'Sérénissime' (most serene) was a title for the Doge of Venice. 'Sa Sérénité' is still used for princes of Monaco."},

    {type:"match", pairs:[
      {trg:"stupéfaction", src:"astonishment"},
      {trg:"mélancolie", src:"melancholy"},
      {trg:"effroi", src:"terror"},
      {trg:"indignation", src:"indignation"},
      {trg:"sérénité", src:"serenity"}
    ]},

    {type:"mc",
     q:"Quel mot moderne remplace souvent 'le sentiment' en psychologie ?",
     opts:["le ressenti","la perplexité","la véhémence","la consternation"],
     ans:"le ressenti",
     hint:"A modern French noun for subjective emotional experience, now preferred in media and psychology."},

    {type:"fb",
     s:"La {1} s'est emparée de la salle après l'annonce des licenciements.",
     a:["consternation"],
     opts:["consternation","sérénité","allégresse","mélancolie"],
     hint:"Shock combined with disapproval and distress. Stronger than mere surprise.",
     sSrc:"{1} gripped the room after the announcement of the layoffs."}
  ]
};
export default LESSON_17;
