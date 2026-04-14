const LESSON_4 = {
  id:"frv2_b2g7_l4", title:"Sante et bien-etre", icon:"\u{1F3E5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sante et bien-etre",
     desc:"Learn vocabulary for discussing health, medical topics, and well-being at an advanced level.",
     goals:["Learn 15 health and wellness words","Discuss medical conditions","Express health-related concerns"]},

    {type:"teach", trg:"l'hepatite", src:"hepatitis", pos:"noun", gender:"f",
     note:"Feminine noun. Inflammation of the liver. Several types exist (A, B, C).",
     example:"A: L'hepatite B se transmet par le sang.\nB: La vaccination est fortement recommandee.",
     exampleSrc:"A: Hepatitis B is transmitted through blood.\nB: Vaccination is strongly recommended.",
     funFact:"From Greek 'hepar' meaning liver. France has a national hepatitis screening program since the 1990s."},

    {type:"teach", trg:"l'heredite", src:"heredity", pos:"noun", gender:"f",
     note:"Feminine noun. The passing of traits from parents to offspring.",
     example:"A: L'heredite joue un role dans cette maladie.\nB: C'est genetique alors ?",
     exampleSrc:"A: Heredity plays a role in this disease.\nB: So it's genetic then?",
     funFact:"Gregor Mendel's pea experiments founded genetics. His work was translated into French early, spreading 'heredite' widely."},

    {type:"teach", trg:"l'inhalation", src:"inhalation", pos:"noun", gender:"f",
     note:"Feminine noun. Breathing in a substance, or a steam treatment.",
     example:"A: Le medecin m'a prescrit des inhalations.\nB: C'est bon pour les bronches.",
     exampleSrc:"A: The doctor prescribed inhalations for me.\nB: It's good for the bronchi.",
     funFact:"In France, 'faire des inhalations' is a common home remedy: breathing steam over a bowl with eucalyptus drops."},

    {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Difficulty digesting food, stomach discomfort.",
     example:"A: J'ai une terrible indigestion.\nB: Tu as trop mange a la fete hier soir.",
     exampleSrc:"A: I have terrible indigestion.\nB: You ate too much at last night's party.",
     funFact:"The French say 'une crise de foie' (liver crisis) for what English speakers call indigestion. It's a cultural myth."},

    {type:"mc",
     q:"Quelle maladie touche le foie et peut se transmettre par le sang ?",
     opts:["l'hepatite","l'heredite","l'inhalation","l'indigestion"],
     ans:"l'hepatite",
     hint:"The Greek root 'hepar' refers to the organ this disease attacks."},

    {type:"teach", trg:"la malformation", src:"a malformation", pos:"noun", gender:"f",
     note:"Feminine noun. An abnormality in the structure of a body part.",
     example:"A: La malformation a ete detectee a l'echographie.\nB: Heureusement, elle est operable.",
     exampleSrc:"A: The malformation was detected on the ultrasound.\nB: Fortunately, it's operable.",
     funFact:"'Mal' (bad) + 'formation'. French medicine uses many 'mal-' compounds: malnutrition, malaise, maladie."},

    {type:"teach", trg:"la machoire", src:"the jaw", pos:"noun", gender:"f",
     note:"Feminine noun. The bone structure of the mouth.",
     example:"A: J'ai mal a la machoire depuis ce matin.\nB: Tu devrais consulter un dentiste.",
     exampleSrc:"A: My jaw has been hurting since this morning.\nB: You should see a dentist.",
     funFact:"'Serrer les machoires' means to clench one's jaw, figuratively to grit one's teeth and endure."},

    {type:"teach", trg:"la garderie", src:"a daycare, nursery", pos:"noun", gender:"f",
     note:"Feminine noun. A place where young children are cared for.",
     example:"A: La garderie ouvre a sept heures.\nB: Parfait, je commence tot demain.",
     exampleSrc:"A: The daycare opens at seven o'clock.\nB: Perfect, I start early tomorrow.",
     funFact:"France has an extensive public daycare system. 'Creche' is more formal, 'garderie' is more casual."},

    {type:"fb",
     s:"L'{1} de vapeur d'eucalyptus soulage la congestion nasale.",
     a:["inhalation"],
     opts:["inhalation","indigestion","heredite","hepatite"],
     hint:"Breathing in steam or medicated vapor as a home remedy.",
     sSrc:"{1} of eucalyptus steam relieves nasal congestion."},

    {type:"teach", trg:"meconnaissable", src:"unrecognizable", pos:"adj", gender:null,
     note:"Adjective. So changed as to be impossible to recognize.",
     example:"A: Apres dix ans, la ville est meconnaissable.\nB: Tout a change, meme le centre.",
     exampleSrc:"A: After ten years, the city is unrecognizable.\nB: Everything has changed, even the center.",
     funFact:"Built from 'me-' (mis-) + 'connaissable' (recognizable). The prefix 'me-' marks negation in old French."},

    {type:"teach", trg:"l'exaltation", src:"exaltation, elation", pos:"noun", gender:"f",
     note:"Feminine noun. A state of intense excitement or enthusiasm.",
     example:"A: L'exaltation de la victoire etait palpable.\nB: Tout le monde criait de joie.",
     exampleSrc:"A: The elation of victory was palpable.\nB: Everyone was shouting with joy.",
     funFact:"Can be positive (enthusiasm) or negative (unhealthy obsession). 'Exalte' as adjective means fanatical."},

    {type:"teach", trg:"la grossierete", src:"rudeness, vulgarity", pos:"noun", gender:"f",
     note:"Feminine noun. Rude or vulgar behavior or language.",
     example:"A: Sa grossierete a choque tout le monde.\nB: Il ne s'est meme pas excuse.",
     exampleSrc:"A: His rudeness shocked everyone.\nB: He didn't even apologize.",
     funFact:"From 'gros' meaning big or coarse. A 'personnage grossier' is someone lacking refinement, not just large."},

    {type:"mc",
     q:"Comment decrit-on une personne qu'on ne reconnait plus ?",
     opts:["meconnaissable","mortifere","minutieux","moisi"],
     ans:"meconnaissable",
     hint:"The prefix 'me-' negates 'connaissable' (recognizable)."},

    {type:"teach", trg:"la moquerie", src:"mockery, teasing", pos:"noun", gender:"f",
     note:"Feminine noun. Making fun of someone or something.",
     example:"A: Ses moqueries continuelles blessent les autres.\nB: Il devrait montrer plus de respect.",
     exampleSrc:"A: His constant mockery hurts others.\nB: He should show more respect.",
     funFact:"'Se moquer de' means to make fun of. French has a rich vocabulary for teasing: raillerie, sarcasme, ironie."},

    {type:"teach", trg:"malmener", src:"to mistreat, to rough up", pos:"verb", gender:null,
     note:"Verb. To treat someone or something roughly.\nConjugation follows 'mener'.",
     example:"A: L'equipe a ete malmenee en premiere mi-temps.\nB: Mais elle s'est bien reprise ensuite.",
     exampleSrc:"A: The team was roughed up in the first half.\nB: But they recovered well afterwards.",
     funFact:"'Mal' (badly) + 'mener' (to lead). Used for both physical and figurative rough treatment."},

    {type:"fb",
     s:"La {1} n'est jamais acceptable, meme entre amis.",
     a:["grossierete"],
     opts:["grossierete","moquerie","garderie","machoire"],
     hint:"Crude, vulgar behavior that shows a lack of manners.",
     sSrc:"{1} is never acceptable, even among friends."},

    {type:"match", pairs:[
      {trg:"hepatite", src:"hepatitis"},
      {trg:"machoire", src:"jaw"},
      {trg:"garderie", src:"daycare"},
      {trg:"moquerie", src:"mockery"},
      {trg:"malmener", src:"to mistreat"}
    ]},

    {type:"mc",
     q:"Quel mot designe un etat d'enthousiasme intense ?",
     opts:["l'exaltation","l'indigestion","l'inhalation","l'heredite"],
     ans:"l'exaltation",
     hint:"An intense feeling of excitement, sometimes bordering on fanaticism."},

    {type:"fb",
     s:"L'equipe adverse nous a {1} pendant tout le match.",
     a:["malmenes"],
     opts:["malmenes","meconnaissables","minutieux","moqueries"],
     hint:"Treated roughly, dominated. Think 'badly led'.",
     sSrc:"The opposing team {1} us throughout the entire match."}
  ]
};
export default LESSON_4;
