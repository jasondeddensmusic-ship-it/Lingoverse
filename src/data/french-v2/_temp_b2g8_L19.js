const LESSON_19 = {
  id:"frv2_b2g8_l19", title:"Pensée et perception", icon:"\u{1F4AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pensée et perception",
     desc:"Vocabulary for discussing thought, perception, obstinacy, and intellectual processes at B2 level.",
     goals:["Learn 15 words about thought and perception","Discuss abstract ideas with precision","Express intellectual judgments"]},

    {type:"teach", trg:"obscurcir", src:"to darken, to obscure", pos:"verb", gender:null,
     note:"Verb. To make dark or unclear.\nReflexive: s'obscurcir = to become dark/cloudy.",
     example:"A: Les nuages obscurcissent le ciel.\nB: On dirait qu'il va pleuvoir.",
     exampleSrc:"A: The clouds are darkening the sky.\nB: It looks like it's going to rain.",
     funFact:"Also used figuratively: 'obscurcir le débat' means to muddy a discussion. Very useful in debates."},

    {type:"teach", trg:"s'obstiner", src:"to persist stubbornly", pos:"verb", gender:null,
     note:"Verb. To stubbornly insist on something.\nAlways reflexive in this meaning.",
     example:"A: Il s'obstine à refuser toute aide.\nB: Sa fierté l'empêche d'accepter.",
     exampleSrc:"A: He stubbornly refuses all help.\nB: His pride prevents him from accepting.",
     funFact:"'Obstiné' can be positive (persistent) or negative (stubborn). Context and tone decide everything."},

    {type:"teach", trg:"obstruer", src:"to obstruct, to block", pos:"verb", gender:null,
     note:"Verb. To block a passage or pipe.\nAlso used figuratively for processes.",
     example:"A: Les feuilles mortes obstruent la gouttière.\nB: Il faut la nettoyer avant l'hiver.",
     exampleSrc:"A: Dead leaves are blocking the gutter.\nB: We need to clean it before winter.",
     funFact:"In parliament, 'obstruction' is filibustering. French MPs have used marathon speeches to block laws."},

    {type:"teach", trg:"l'optique", src:"the optics, the perspective", pos:"noun", gender:"f",
     note:"Noun/adjective. The science of light, or a way of seeing things.\n'Dans cette optique' = from this perspective.",
     example:"A: Dans cette optique, le projet est viable.\nB: Tout dépend du point de vue.",
     exampleSrc:"A: From this perspective, the project is viable.\nB: Everything depends on the point of view.",
     funFact:"'Opticien' (optician) comes from the same root. 'Dans l'optique de' is essential business French."},

    {type:"mc",
     q:"Quel verbe signifie 'persister avec entêtement malgré les obstacles' ?",
     opts:["s'obstiner","obstruer","observer","obscurcir"],
     ans:"s'obstiner",
     hint:"Always reflexive. Can be seen as positive persistence or negative stubbornness."},

    {type:"teach", trg:"l'incapacité", src:"the inability, the incapacity", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being unable to do something.\n'In' + 'capacité'.",
     example:"A: Son incapacité à écouter crée des conflits.\nB: Il faudrait qu'il travaille sur ça.",
     exampleSrc:"A: His inability to listen creates conflicts.\nB: He should work on that.",
     funFact:"In French law, 'incapacité de travail' (work disability) triggers specific social protections."},

    {type:"teach", trg:"l'insuffisance", src:"the insufficiency, the inadequacy", pos:"noun", gender:"f",
     note:"Feminine noun. A lack or shortcoming.\nMedical: 'insuffisance cardiaque' = heart failure.",
     example:"A: L'insuffisance de moyens freine le projet.\nB: Il faut trouver des financements.",
     exampleSrc:"A: The lack of resources is slowing the project.\nB: We need to find funding.",
     funFact:"'Insuffisance rénale' (kidney failure) is a major medical term. The word bridges formal and medical French."},

    {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of recognizing or establishing identity.",
     example:"A: L'identification du suspect a pris des semaines.\nB: Les caméras ont finalement aidé.",
     exampleSrc:"A: The identification of the suspect took weeks.\nB: Cameras finally helped.",
     funFact:"French ID cards are mandatory from age 12. 'Pièce d'identité' is the most-asked-for document."},

    {type:"fb",
     s:"Les feuilles mortes {1} la gouttière chaque automne.",
     a:["obstruent"],
     opts:["obstruent","obscurcissent","obstinent","observent"],
     hint:"To block a passage or pipe. Dead leaves cause this problem every year.",
     sSrc:"Dead leaves {1} the gutter every autumn."},

    {type:"teach", trg:"l'indicateur", src:"the indicator, the informant", pos:"noun", gender:"m",
     note:"Masculine noun. A sign that shows something.\nAlso: a police informant.",
     example:"A: Les indicateurs économiques sont au rouge.\nB: La récession menace.",
     exampleSrc:"A: The economic indicators are in the red.\nB: Recession threatens.",
     funFact:"'Indicateur' also means a train timetable book. And in crime fiction, it means a police snitch."},

    {type:"teach", trg:"l'intensification", src:"intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making something more intense or stronger.",
     example:"A: L'intensification des contrôles rassure les voyageurs.\nB: La sécurité est renforcée.",
     exampleSrc:"A: The intensification of checks reassures travelers.\nB: Security is strengthened.",
     funFact:"In agriculture, 'intensification' means maximizing yield. In grammar, it means adding emphasis."},

    {type:"teach", trg:"l'interaction", src:"interaction", pos:"noun", gender:"f",
     note:"Feminine noun. Reciprocal action between people or things.\nKey word in social sciences.",
     example:"A: L'interaction entre professeur et élèves est essentielle.\nB: Un cours magistral seul ne suffit pas.",
     exampleSrc:"A: Interaction between teacher and students is essential.\nB: A lecture alone is not enough.",
     funFact:"French pedagogy increasingly values 'interaction'. The traditional 'cours magistral' (lecture) is evolving."},

    {type:"mc",
     q:"Quel nom désigne un signe ou une donnée qui révèle une tendance ?",
     opts:["une identification","un indicateur","une intensification","une interaction"],
     ans:"un indicateur",
     hint:"Something that shows or points to a trend. Used in economics, transport, and police work."},

    {type:"teach", trg:"l'intermède", src:"the interlude", pos:"noun", gender:"m",
     note:"Masculine noun. A pause or short performance between two parts of a show.",
     example:"A: L'intermède musical a enchanté le public.\nB: C'était une belle surprise.",
     exampleSrc:"A: The musical interlude delighted the audience.\nB: It was a lovely surprise.",
     funFact:"From Latin 'intermedium'. French theater loves intermèdes. Molière wrote musical ones into his plays."},

    {type:"teach", trg:"méconnaissable", src:"unrecognizable", pos:"adj", gender:null,
     note:"Adjective. So changed as to be impossible to recognize.\n'Mé' + 'connaissable'.",
     example:"A: Après sa transformation, il est méconnaissable.\nB: Je ne l'aurais jamais reconnu.",
     exampleSrc:"A: After his transformation, he's unrecognizable.\nB: I would never have recognized him.",
     funFact:"The prefix 'mé-' negates like English 'mis-': méconnaître, méfiance, mécontent. Very productive."},

    {type:"teach", trg:"le mécène", src:"the patron (of the arts)", pos:"noun", gender:"m",
     note:"Masculine noun. A wealthy supporter of the arts.\nFrom Latin 'Maecenas'.",
     example:"A: Sans mécène, ce musée fermerait.\nB: Le mécénat culturel est vital en France.",
     exampleSrc:"A: Without a patron, this museum would close.\nB: Cultural patronage is vital in France.",
     funFact:"Named after Gaius Maecenas, patron of Virgil and Horace. 'Mécénat' has tax advantages in France."},

    {type:"fb",
     s:"Après sa transformation, il est devenu {1}.",
     a:["méconnaissable"],
     opts:["méconnaissable","méridional","momentané","mortifère"],
     hint:"So changed that you cannot recognize the person anymore. The prefix 'mé-' adds negation.",
     sSrc:"After his transformation, he became {1}."},

    {type:"match", pairs:[
      {trg:"obscurcir", src:"to darken"},
      {trg:"s'obstiner", src:"to persist stubbornly"},
      {trg:"optique", src:"perspective, optics"},
      {trg:"intermède", src:"interlude"},
      {trg:"mécène", src:"patron of the arts"}
    ]},

    {type:"mc",
     q:"Quel mot désigne un riche soutien financier des arts et de la culture ?",
     opts:["un indicateur","un intermède","un mécène","un modéré"],
     ans:"un mécène",
     hint:"Named after a Roman who supported poets. In France, this role comes with tax advantages."},

    {type:"fb",
     s:"Dans cette {1}, le projet semble tout à fait viable.",
     a:["optique"],
     opts:["optique","interaction","identification","incapacité"],
     hint:"A way of looking at things. 'Dans cette...' means from this perspective or viewpoint.",
     sSrc:"From this {1}, the project seems entirely viable."}
  ]
};
export default LESSON_19;
