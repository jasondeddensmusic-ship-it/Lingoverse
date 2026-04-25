const LESSON_2 = {
  id:"frv2_b2g4_l2", title:"Societe et identite", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Societe et identite",
     desc:"Discuss social structures, identity politics, and cultural belonging with advanced vocabulary.",
     goals:["Learn 15 words about society and identity","Discuss social issues with precision","Express nuanced opinions on cultural topics"]},

    {type:"teach", trg:"identitaire", src:"identity-related", pos:"adj", gender:null,
     note:"Adjective. Relating to cultural or personal identity.",
     example:"A: Le debat identitaire domine la politique.\nB: C'est un sujet tres sensible.",
     exampleSrc:"A: The identity debate dominates politics.\nB: It's a very sensitive topic.",
     funFact:"A politically charged word in France. 'Crise identitaire' means identity crisis."},

    {type:"teach", trg:"l'ascendance", src:"the ancestry, descent", pos:"noun", gender:"f",
     note:"Feminine noun. One's ancestral lineage or origins.",
     example:"A: Elle est d'ascendance algerienne.\nB: Sa famille a emigre dans les annees 60.",
     exampleSrc:"A: She is of Algerian descent.\nB: Her family emigrated in the 1960s.",
     funFact:"In astrology, 'l'ascendant' is the rising sign. Same root: what rises before you."},

    {type:"teach", trg:"la democratisation", src:"the democratization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making something accessible to all.",
     example:"A: La democratisation de l'education est essentielle.\nB: Tout le monde merite d'apprendre.",
     exampleSrc:"A: The democratization of education is essential.\nB: Everyone deserves to learn.",
     funFact:"In France, 'la democratisation culturelle' was a major post-war government policy."},

    {type:"teach", trg:"la desobeissance", src:"the disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. Refusal to obey rules or authority.",
     example:"A: La desobeissance civile est une forme de protestation.\nB: Gandhi et King l'ont pratiquee.",
     exampleSrc:"A: Civil disobedience is a form of protest.\nB: Gandhi and King practiced it.",
     funFact:"Thoreau's essay 'Civil Disobedience' inspired the French student movement of May 1968."},

    {type:"teach", trg:"generationnel", src:"generational", pos:"adj", gender:null,
     note:"Adjective. Relating to a specific generation. Feminine: generationnelle.",
     example:"A: C'est un conflit generationnel.\nB: Les jeunes et les anciens ne se comprennent pas.",
     exampleSrc:"A: It's a generational conflict.\nB: The young and the old don't understand each other.",
     funFact:"France tracks generations closely: baby-boomers, Generation X, millennials, and 'Generation Z'."},

    {type:"mc",
     q:"Quel mot decrit ce qui est lie a l'identite culturelle ?",
     opts:["identitaire","generationnel","humanitaire","alimentaire"],
     ans:"identitaire",
     hint:"Built on the noun 'identite' with the suffix -aire meaning 'related to'."},

    {type:"teach", trg:"la coexistence", src:"the coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Living together peacefully despite differences.",
     example:"A: La coexistence pacifique est possible.\nB: Il faut du respect mutuel.",
     exampleSrc:"A: Peaceful coexistence is possible.\nB: It requires mutual respect.",
     funFact:"'Coexistence pacifique' was a Cold War diplomatic term used heavily in French politics."},

    {type:"teach", trg:"la barbarie", src:"the barbarism, cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme cruelty or uncivilized behavior.",
     example:"A: La guerre est une forme de barbarie.\nB: L'humanite devrait avoir depasse ca.",
     exampleSrc:"A: War is a form of barbarism.\nB: Humanity should have moved past that.",
     funFact:"From Greek 'barbaros', meaning someone who doesn't speak Greek. Non-Greek speech sounded like 'bar-bar'."},

    {type:"teach", trg:"l'atrocite", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely wicked or cruel act.",
     example:"A: Les atrocites de la guerre sont documentees.\nB: Il ne faut jamais les oublier.",
     exampleSrc:"A: The atrocities of war are documented.\nB: We must never forget them.",
     funFact:"From Latin 'atrox' meaning fierce. The same root gives English 'atrocious'."},

    {type:"fb",
     s:"La {1} civile peut etre un acte de courage.",
     a:["desobeissance"],
     opts:["desobeissance","coexistence","democratisation","barbarie"],
     hint:"The act of refusing to obey unjust laws, famously practiced by Gandhi and King.",
     sSrc:"Civil {1} can be an act of courage."},

    {type:"teach", trg:"la cruaute", src:"the cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. Willful infliction of pain or suffering.",
     example:"A: La cruaute envers les animaux est inacceptable.\nB: Des lois existent pour les proteger.",
     exampleSrc:"A: Cruelty towards animals is unacceptable.\nB: Laws exist to protect them.",
     funFact:"Antonin Artaud's 'Theatre de la Cruaute' was about confrontation, not violence."},

    {type:"teach", trg:"l'idealiste", src:"the idealist", pos:"noun", gender:"m",
     note:"Can be masculine or feminine. Also used as adjective.",
     example:"A: Tu es un idealiste incorrigible.\nB: Quelqu'un doit croire au changement.",
     exampleSrc:"A: You're an incorrigible idealist.\nB: Someone has to believe in change.",
     funFact:"France has a long tradition of idealism, from the Enlightenment philosophes to student protesters."},

    {type:"teach", trg:"humilie", src:"humiliated", pos:"adj", gender:null,
     note:"Past participle used as adjective. Feminine: humiliee.",
     example:"A: Il s'est senti humilie devant tout le monde.\nB: C'etait vraiment injuste.",
     exampleSrc:"A: He felt humiliated in front of everyone.\nB: It was really unfair.",
     funFact:"From Latin 'humilis' meaning low or humble. Humiliation literally brings someone low."},

    {type:"mc",
     q:"Quel mot designe une extreme cruaute ou un acte horrible ?",
     opts:["une ascendance","une atrocite","une coexistence","une democratisation"],
     ans:"une atrocite",
     hint:"From Latin 'atrox' meaning fierce. Related to the English word 'atrocious'."},

    {type:"teach", trg:"la globalite", src:"the totality, the whole picture", pos:"noun", gender:"f",
     note:"Feminine noun. The complete picture, viewed as a whole.",
     example:"A: Il faut voir le probleme dans sa globalite.\nB: Les details seuls ne suffisent pas.",
     exampleSrc:"A: We need to see the problem in its totality.\nB: Details alone aren't enough.",
     funFact:"Often used in French philosophy and sociology. 'Dans sa globalite' means 'as a whole'."},

    {type:"teach", trg:"la dissociation", src:"the dissociation, the separation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of separating or disconnecting.",
     example:"A: Il y a une dissociation entre ses paroles et ses actes.\nB: On ne peut pas lui faire confiance.",
     exampleSrc:"A: There's a disconnect between his words and his actions.\nB: We can't trust him.",
     funFact:"In psychology, 'dissociation' describes a detachment from reality. Both French and English use it."},

    {type:"fb",
     s:"Il faut analyser la situation dans sa {1}.",
     a:["globalite"],
     opts:["globalite","cruaute","dissociation","ascendance"],
     hint:"The complete picture, seen as a unified whole rather than separate parts.",
     sSrc:"We need to analyze the situation in its {1}."},

    {type:"match", pairs:[
      {trg:"ascendance", src:"ancestry"},
      {trg:"barbarie", src:"barbarism"},
      {trg:"coexistence", src:"coexistence"},
      {trg:"cruaute", src:"cruelty"},
      {trg:"dissociation", src:"separation"}
    ]},

    {type:"mc",
     q:"Que signifie 'generationnel' ?",
     opts:["Relatif au genre","Relatif a la geographie","Relatif a une generation","Relatif a la genetique"],
     ans:"Relatif a une generation",
     hint:"Adjective formed by adding -el to a noun describing a peer cohort (people of the same era), not gender, geography, or genes."}
  ]
};
export default LESSON_2;
