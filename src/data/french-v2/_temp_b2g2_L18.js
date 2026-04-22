const LESSON_18 = {
  id:"frv2_b2g2_l18", title:"Emotions et caractere", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Emotions et caractere",
     desc:"Explore vocabulary for describing emotions, character traits, and human nature. From elation to disillusionment, from audacity to resilience.",
     goals:["Learn 20 emotion and character terms","Describe personality with nuance in French","Express complex feelings"]},

    {type:"teach", trg:"debile", src:"stupid, moronic", pos:"adj", gender:null,
     note:"Adjective. Very stupid or weak. Colloquial and somewhat rude.",
     example:"A: Ce film etait completement debile.\nB: Oui, je n'ai pas ri une seule fois.",
     exampleSrc:"A: This movie was completely moronic.\nB: Yes, I didn't laugh once.",
     funFact:"Originally meant 'weak' (from Latin 'debilis'). Now mainly used as slang for 'stupid'. Register shifted."},

    {type:"teach", trg:"le depit", src:"the spite, the frustration", pos:"noun", gender:"m",
     note:"Masculine noun. Bitter disappointment or resentment.",
     example:"A: Elle a agi par depit apres la rupture.\nB: La colere la poussait.",
     exampleSrc:"A: She acted out of spite after the breakup.\nB: Anger was driving her.",
     funFact:"'En depit de' means 'in spite of'. 'Depit amoureux' is a classic literary theme in French."},

    {type:"teach", trg:"le desenchantement", src:"the disenchantment", pos:"noun", gender:"m",
     note:"Masculine noun. The loss of illusions or magic about something.",
     example:"A: Le desenchantement des jeunes vis-a-vis de la politique est profond.\nB: Ils ne croient plus aux promesses.",
     exampleSrc:"A: The disenchantment of young people with politics is profound.\nB: They no longer believe in promises.",
     funFact:"Max Weber's 'desenchantement du monde' (disenchantment of the world) is a key sociological concept."},

    {type:"teach", trg:"la detresse", src:"the distress, the anguish", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme anxiety, suffering, or danger.",
     example:"A: Le signal de detresse a ete capte par les secours.\nB: Un helicoptere est en route.",
     exampleSrc:"A: The distress signal was picked up by rescue services.\nB: A helicopter is on the way.",
     funFact:"'En detresse' is used for ships, planes, and people. 'SOS' stands for 'Save Our Souls' even in French."},

    {type:"teach", trg:"la nostalgie", src:"the nostalgia", pos:"noun", gender:"f",
     note:"Feminine noun. A sentimental longing for the past.",
     example:"A: La nostalgie de l'enfance revient avec les vieilles photos.\nB: C'etait une epoque plus simple.",
     exampleSrc:"A: Nostalgia for childhood returns with old photos.\nB: It was a simpler time.",
     funFact:"From Greek 'nostos' (return home) + 'algos' (pain). Originally a medical term for homesickness."},

    {type:"mc",
     q:"Quel mot signifie 'perte des illusions et de la magie' ?",
     opts:["le desenchantement","le depit","la detresse","la nostalgie"],
     ans:"le desenchantement",
     hint:"When the enchantment fades. Weber used this concept to describe modern society."},

    {type:"teach", trg:"la resilience", src:"the resilience", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to recover from difficulties.",
     example:"A: La resilience de cette communaute est admirable.\nB: Ils ont tout reconstruit apres l'inondation.",
     exampleSrc:"A: The resilience of this community is admirable.\nB: They rebuilt everything after the flood.",
     funFact:"Boris Cyrulnik, a French neuropsychiatrist, popularized 'resilience' in French. His work is foundational."},

    {type:"teach", trg:"la bienveillance", src:"the benevolence, the kindness", pos:"noun", gender:"f",
     note:"Feminine noun. A disposition to be kind and caring toward others.",
     example:"A: La bienveillance est la cle d'un bon management.\nB: Les employes sont plus motives quand on les respecte.",
     exampleSrc:"A: Benevolence is the key to good management.\nB: Employees are more motivated when respected.",
     funFact:"'Bienveillance' became a French buzzword in the 2010s. Every company claims to practice it now."},

    {type:"teach", trg:"l'acharnement", src:"the relentlessness, the doggedness", pos:"noun", gender:"f",
     note:"Masculine noun. Fierce determination or relentless pursuit.",
     example:"A: Son acharnement au travail a fini par payer.\nB: Il a decroche le poste de ses reves.",
     exampleSrc:"A: His relentless work finally paid off.\nB: He landed the job of his dreams.",
     funFact:"Can be positive (determination) or negative ('acharnement therapeutique' = excessive medical treatment)."},

    {type:"teach", trg:"l'amertume", src:"the bitterness", pos:"noun", gender:"f",
     note:"Feminine noun. A feeling of resentment or disappointment.",
     example:"A: Il garde une grande amertume envers son ancien employeur.\nB: Le licenciement l'a profondement blesse.",
     exampleSrc:"A: He holds great bitterness toward his former employer.\nB: The dismissal deeply hurt him.",
     funFact:"From 'amer' (bitter). In wine tasting, 'amertume' is a specific taste quality. Not always negative."},

    {type:"fb",
     s:"Le signal de {1} a ete envoye par le navire en perdition.",
     a:["detresse"],
     opts:["detresse","desenchantement","depit","nostalgie"],
     hint:"Extreme danger or anguish. The kind of signal ships send when in trouble.",
     sSrc:"The {1} signal was sent by the sinking ship."},

    {type:"teach", trg:"l'empathie", src:"the empathy", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to understand and share another's feelings.",
     example:"A: L'empathie est une qualite essentielle pour un medecin.\nB: Comprendre la douleur du patient change tout.",
     exampleSrc:"A: Empathy is an essential quality for a doctor.\nB: Understanding the patient's pain changes everything.",
     funFact:"Distinct from 'sympathie' in French. 'Empathie' is feeling with; 'sympathie' is feeling for."},

    {type:"teach", trg:"la lucidite", src:"the lucidity, the clear-headedness", pos:"noun", gender:"f",
     note:"Feminine noun. Clear, rational thinking. Often used about the elderly.",
     example:"A: A quatre-vingt-dix ans, elle garde une lucidite remarquable.\nB: Son esprit est aussi vif qu'avant.",
     exampleSrc:"A: At ninety, she maintains remarkable lucidity.\nB: Her mind is as sharp as ever.",
     funFact:"'Lucide' comes from Latin 'lux' (light). Being lucid is seeing clearly, having mental light."},

    {type:"teach", trg:"le stoicisme", src:"the stoicism", pos:"noun", gender:"m",
     note:"Masculine noun. Enduring pain or hardship without complaint.",
     example:"A: Il a supporte l'epreuve avec un stoicisme admirable.\nB: Pas une plainte, pas une larme.",
     exampleSrc:"A: He endured the ordeal with admirable stoicism.\nB: Not a complaint, not a tear.",
     funFact:"From the Greek Stoa (porch) where Zeno taught. French philosophy embraces Stoic ideas deeply."},

    {type:"mc",
     q:"Quel mot decrit la capacite a se remettre d'une epreuve ?",
     opts:["le stoicisme","la resilience","la lucidite","l'empathie"],
     ans:"la resilience",
     hint:"The ability to bounce back from hardship. Popularized by Boris Cyrulnik."},

    {type:"teach", trg:"la gratitude", src:"the gratitude", pos:"noun", gender:"f",
     note:"Feminine noun. The feeling of being thankful.",
     example:"A: Je ressens une immense gratitude envers mes parents.\nB: Ils ont tout sacrifie pour nous.",
     exampleSrc:"A: I feel immense gratitude toward my parents.\nB: They sacrificed everything for us.",
     funFact:"'Gratitude' and 'grace' share the same Latin root. French culture values expressing gratitude formally."},

    {type:"teach", trg:"la rancoeur", src:"the resentment, the grudge", pos:"noun", gender:"f",
     note:"Feminine noun. Lingering bitterness and resentment.",
     example:"A: Il garde de la rancoeur depuis des annees.\nB: Il faudrait essayer de pardonner.",
     exampleSrc:"A: He's been holding a grudge for years.\nB: He should try to forgive.",
     funFact:"From 'rancir' (to go rancid). Rancoeur literally means a feeling that has gone sour and stale."},

    {type:"teach", trg:"la melancolie", src:"the melancholy", pos:"noun", gender:"f",
     note:"Feminine noun. A deep, pensive sadness without a clear cause.",
     example:"A: La melancolie de l'automne l'envahit chaque annee.\nB: Les jours raccourcissent et le moral baisse.",
     exampleSrc:"A: Autumn melancholy overtakes him every year.\nB: Days shorten and spirits drop.",
     funFact:"Baudelaire's 'spleen' and melancolie defined French Romantic poetry. A celebrated artistic emotion."},

    {type:"teach", trg:"la serenite", src:"the serenity, the peace of mind", pos:"noun", gender:"f",
     note:"Feminine noun. A state of calm, peace, and tranquility.",
     example:"A: Depuis sa retraite, il vit dans la serenite.\nB: Plus de stress, plus de deadlines.",
     exampleSrc:"A: Since his retirement, he lives in serenity.\nB: No more stress, no more deadlines.",
     funFact:"From Latin 'serenus' (clear sky). French gardens are designed to inspire serenite."},

    {type:"fb",
     s:"Sa {1} envers son ancien associe ne s'est jamais eteinte.",
     a:["rancoeur"],
     opts:["rancoeur","gratitude","serenite","empathie"],
     hint:"A lingering grudge or resentment that refuses to fade. Think of something gone 'rancid'.",
     sSrc:"His {1} toward his former partner never faded."},

    {type:"match", pairs:[
      {trg:"nostalgie", src:"nostalgia"},
      {trg:"bienveillance", src:"benevolence"},
      {trg:"lucidite", src:"lucidity"},
      {trg:"melancolie", src:"melancholy"},
      {trg:"serenite", src:"serenity"}
    ]},

    {type:"mc",
     q:"Quel philosophe francais a popularise le concept de resilience ?",
     opts:["Michel Foucault","Jean-Paul Sartre","Boris Cyrulnik","Albert Camus"],
     ans:"Boris Cyrulnik",
     hint:"A French neuropsychiatrist who wrote extensively about recovering from trauma."},

    {type:"fb",
     s:"Son {1} au travail a impressionne tous ses collegues.",
     a:["acharnement"],
     opts:["acharnement","desenchantement","stoicisme","depit"],
     hint:"Fierce, relentless determination. Can be positive (hard work) or negative (excessive treatment).",
     sSrc:"His {1} at work impressed all his colleagues."}
  ]
};
export default LESSON_18;
