const LESSON_16 = {
  id:"frv2_b2g8_l16", title:"Famille et générations", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Famille et générations",
     desc:"Vocabulary for discussing family structures, generational dynamics, and kinship at B2 level.",
     goals:["Learn 15 family and generation words","Discuss family dynamics in depth","Express complex family relationships"]},

    {type:"teach", trg:"l'arrière-grand-parent", src:"the great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. A grandparent's parent.\nPlural: des arrière-grands-parents.",
     example:"A: Mes arrière-grands-parents ont vécu deux guerres.\nB: Quelle force de caractère.",
     exampleSrc:"A: My great-grandparents lived through two wars.\nB: What strength of character.",
     funFact:"French adds 'arrière-' for each generation back. 'Bisaïeul' is the literary alternative."},

    {type:"teach", trg:"la maisonnée", src:"the household, all in the house", pos:"noun", gender:"f",
     note:"Feminine noun. Everyone living under one roof.\nWarmer and more literary than 'ménage'.",
     example:"A: La maisonnée se retrouve chaque dimanche.\nB: C'est une belle tradition familiale.",
     exampleSrc:"A: The household gathers every Sunday.\nB: It's a beautiful family tradition.",
     funFact:"A warm, old-fashioned word. Modern French uses 'foyer' or 'ménage' in official documents."},

    {type:"teach", trg:"l'hérédité", src:"heredity", pos:"noun", gender:"f",
     note:"Feminine noun. The passing of traits from parents to children.\nGenetics and law.",
     example:"A: L'hérédité explique cette ressemblance.\nB: Tu es le portrait de ton père.",
     exampleSrc:"A: Heredity explains this resemblance.\nB: You're the spitting image of your father.",
     funFact:"In French law, 'hérédité' also relates to inheritance rights. Biology and law use the same word."},

    {type:"teach", trg:"la nôtre", src:"ours (feminine possessive)", pos:"pron", gender:null,
     note:"Emphatic possessive pronoun. 'Le nôtre' (m), 'la nôtre' (f), 'les nôtres' (pl).",
     example:"A: Leur maison est belle, mais la nôtre aussi.\nB: Oui, on a bien rénové.",
     exampleSrc:"A: Their house is beautiful, but ours too.\nB: Yes, we renovated well.",
     funFact:"The circumflex on 'nôtre' distinguishes the possessive pronoun from the adjective 'notre'."},

    {type:"mc",
     q:"Quel mot désigne un parent de la génération des grands-parents de vos grands-parents ?",
     opts:["arrière-grand-parent","grand-parent","bisaïeul","aïeul"],
     ans:"arrière-grand-parent",
     hint:"French adds a prefix meaning 'behind' or 'back' to go one generation further."},

    {type:"teach", trg:"l'infidélité", src:"infidelity", pos:"noun", gender:"f",
     note:"Feminine noun. Betrayal of trust, especially romantic.\n'In' + 'fidélité'.",
     example:"A: L'infidélité est la première cause de divorce.\nB: La confiance est fragile.",
     exampleSrc:"A: Infidelity is the leading cause of divorce.\nB: Trust is fragile.",
     funFact:"Despite stereotypes, French surveys show growing intolerance of infidelity among younger generations."},

    {type:"teach", trg:"la grossièreté", src:"the rudeness, the coarseness", pos:"noun", gender:"f",
     note:"Feminine noun. Rude, vulgar behavior or language.\nFrom 'grossier' (coarse).",
     example:"A: La grossièreté n'a pas sa place à table.\nB: C'est une question d'éducation.",
     exampleSrc:"A: Rudeness has no place at the table.\nB: It's a matter of upbringing.",
     funFact:"Table manners are sacred in French culture. Teaching them is called 'le savoir-vivre'."},

    {type:"teach", trg:"la niaiserie", src:"the silliness, the foolishness", pos:"noun", gender:"f",
     note:"Feminine noun. Naive or silly behavior.\nFrom 'niais' (naive, gullible).",
     example:"A: Ce film est une niaiserie totale.\nB: Parfois, c'est tout ce qu'on veut.",
     exampleSrc:"A: This film is total silliness.\nB: Sometimes, that's all you want.",
     funFact:"In Quebec, 'niaiseux' is one of the most common insults, meaning stupid or goofy."},

    {type:"fb",
     s:"La {1} se retrouve chaque dimanche pour le déjeuner.",
     a:["maisonnée"],
     opts:["maisonnée","hérédité","grossièreté","infidélité"],
     hint:"Everyone living under one roof. A warm, literary word for household.",
     sSrc:"The {1} gathers every Sunday for lunch."},

    {type:"teach", trg:"l'atrocité", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel act.\nOften used in plural: des atrocités.",
     example:"A: Les atrocités commises pendant la guerre sont documentées.\nB: L'histoire ne doit pas les oublier.",
     exampleSrc:"A: The atrocities committed during the war are documented.\nB: History must not forget them.",
     funFact:"'Atroce' is also used casually: 'Ce café est atroce' means it tastes terrible."},

    {type:"teach", trg:"la guise", src:"the way, the manner", pos:"noun", gender:"f",
     note:"Feminine noun. Almost always in expressions:\n'En guise de' = as, by way of. 'A sa guise' = as one pleases.",
     example:"A: En guise de dessert, je vous offre des fruits.\nB: C'est léger et parfait.",
     exampleSrc:"A: By way of dessert, I'm offering you fruit.\nB: It's light and perfect.",
     funFact:"From Frankish 'wisa' (manner). The same root as English 'wise' and German 'Weise'."},

    {type:"teach", trg:"la malhonnêteté", src:"the dishonesty", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of honesty or integrity.\n'Mal' + 'honnêteté'.",
     example:"A: Sa malhonnêteté a fini par être découverte.\nB: On ne peut pas mentir éternellement.",
     exampleSrc:"A: His dishonesty was eventually discovered.\nB: You can't lie forever.",
     funFact:"French negative prefix 'mal-' creates many antonyms: malheureux, maladroit, malhonnête."},

    {type:"mc",
     q:"Que signifie 'en guise de' ?",
     opts:["Au lieu de","En remplacement de, comme","En plus de","Malgré"],
     ans:"En remplacement de, comme",
     hint:"A formal expression meaning 'as' or 'by way of'. Think of offering something as a substitute."},

    {type:"teach", trg:"momentané", src:"momentary, temporary", pos:"adj", gender:null,
     note:"Adjective. Lasting only a brief time.\nFeminine: momentanée.",
     example:"A: Cette difficulté est momentanée.\nB: Ça ira mieux la semaine prochaine.",
     exampleSrc:"A: This difficulty is temporary.\nB: It will be better next week.",
     funFact:"From 'moment'. French has 'momentané' for temporary and 'éphémère' for fleeting."},

    {type:"teach", trg:"observateur", src:"observant, perceptive", pos:"adj", gender:null,
     note:"Adjective. Good at noticing details.\nFeminine: observatrice. Also a noun.",
     example:"A: Ma fille est très observatrice.\nB: Rien ne lui échappe.",
     exampleSrc:"A: My daughter is very observant.\nB: Nothing escapes her.",
     funFact:"French children's game 'Jeu des 7 erreurs' (spot the 7 differences) is a test of being 'observateur'."},

    {type:"teach", trg:"onéreux", src:"expensive, costly", pos:"adj", gender:null,
     note:"Adjective. Formal word for expensive.\nFeminine: onéreuse.",
     example:"A: L'école privée est très onéreuse.\nB: Mais l'éducation n'a pas de prix.",
     exampleSrc:"A: Private school is very expensive.\nB: But education is priceless.",
     funFact:"'Titre onéreux' in French law means a transaction where something is given in return. Opposite of 'gratuit'."},

    {type:"fb",
     s:"Sa {1} a fini par être découverte, on ne peut pas mentir éternellement.",
     a:["malhonnêteté"],
     opts:["malhonnêteté","grossièreté","niaiserie","atrocité"],
     hint:"Lack of honesty. Built with the negative prefix 'mal-' before 'honnêteté'.",
     sSrc:"His {1} was eventually discovered, you can't lie forever."},

    {type:"match", pairs:[
      {trg:"arrière-grand-parent", src:"great-grandparent"},
      {trg:"hérédité", src:"heredity"},
      {trg:"la nôtre", src:"ours (feminine)"},
      {trg:"onéreux", src:"expensive"},
      {trg:"momentané", src:"temporary"}
    ]},

    {type:"mc",
     q:"Quel adjectif formel signifie 'cher, coûteux' ?",
     opts:["momentané","narquois","onéreux","observateur"],
     ans:"onéreux",
     hint:"From Latin 'onerosus' meaning burdensome. Used in legal and formal contexts."},

    {type:"fb",
     s:"En {1} de cadeau, je t'offre ce livre.",
     a:["guise"],
     opts:["guise","nôtre","hérédité","maisonnée"],
     hint:"An expression meaning 'as' or 'by way of'. Think of offering something as a substitute.",
     sSrc:"By way of a gift, I'm giving you this book."}
  ]
};
export default LESSON_16;
