// L14 - Food & Agriculture
const LESSON_14 = {id:"frv2_b1gap_l14", title:"Terroir et gastronomie", icon:"\u{1F33F}", xp:15, board:true, steps:[

{type:"intro", title:"Terroir et gastronomie",
 desc:"Dive into French food culture, agriculture, and the vocabulary of taste and cooking.",
 goals:["Learn 20 food and agriculture words","Discuss taste, fermentation, and farming","Navigate French culinary vocabulary"]},

{type:"teach", trg:"l'abattage", src:"slaughter, felling (trees)", pos:"noun", gender:"m",
 note:"Masculine noun. From abattre. Killing animals for food\nor cutting down trees.",
 example:"A: L'abattage des arbres est interdit dans cette forêt.\nB: C'est une zone protégée.",
 exampleSrc:"A: Felling trees is forbidden in this forest.\nB: It's a protected area.",
 funFact:"Double meaning: animal slaughter and tree felling. Both involve abattre (to knock down)."},

{type:"teach", trg:"alcoolisé", src:"alcoholic (containing alcohol)", pos:"adj", gender:null,
 note:"Adjective. Alcoolisé (m), alcoolisée (f).\nDescribes drinks that contain alcohol.",
 example:"A: Cette boisson est-elle alcoolisée ?\nB: Non, c'est un cocktail sans alcool.",
 exampleSrc:"A: Is this drink alcoholic?\nB: No, it's a non-alcoholic cocktail.",
 funFact:"Boisson alcoolisée is the formal term. In ads, the famous warning: 'L'abus d'alcool est dangereux.'"},

{type:"teach", trg:"l'agressif", src:"aggressive", pos:"adj", gender:null,
 note:"Adjective. Agressif (m), agressive (f).\nHostile behavior or marketing strategy.",
 example:"A: Ce chien est très agressif avec les étrangers.\nB: Son maître devrait le dresser.",
 exampleSrc:"A: This dog is very aggressive with strangers.\nB: His owner should train him.",
 funFact:"In business, 'stratégie agressive' is positive, meaning ambitious. In daily life, it's negative."},

{type:"teach", trg:"agrémenter", src:"to embellish, to garnish", pos:"verb", gender:null,
 note:"Regular -er verb. From agrément (pleasure, approval).\nTo add pleasant touches.",
 example:"A: Elle agrémente ses salades de noix et de fromage.\nB: C'est ce qui les rend si bonnes.",
 exampleSrc:"A: She garnishes her salads with nuts and cheese.\nB: That's what makes them so good.",
 funFact:"Agrémenter goes beyond food: agrémenter un texte = to embellish a text with examples."},

{type:"teach", trg:"l'alléger", src:"to lighten, to reduce", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è). To make lighter.\nPhysical weight or figurative burden.",
 example:"A: J'ai allégé la recette en utilisant moins de beurre.\nB: C'est plus sain mais toujours délicieux.",
 exampleSrc:"A: I lightened the recipe by using less butter.\nB: It's healthier but still delicious.",
 funFact:"Allégé is on every French yogurt and cheese: 'fromage allégé' = reduced-fat cheese."},

{type:"mc",
 q:"Quel verbe signifie 'rendre plus léger' ?",
 opts:["alléger","agrémenter","altérer","accentuer"],
 ans:"alléger",
 hint:"This verb is on every French diet product label. It means to reduce the weight or richness."},

{type:"teach", trg:"l'adoptif", src:"adoptive, adopted", pos:"adj", gender:null,
 note:"Adjective. Adoptif (m), adoptive (f).\nParents adoptifs = adoptive parents.",
 example:"A: Ses parents adoptifs l'ont accueilli avec amour.\nB: Il a eu une enfance très heureuse.",
 exampleSrc:"A: His adoptive parents welcomed him with love.\nB: He had a very happy childhood.",
 funFact:"L'adoption is a major topic in French society. The laws changed significantly in 2022."},

{type:"teach", trg:"l'adoption", src:"adoption", pos:"noun", gender:"f",
 note:"Feminine noun. Adopting a child, law, or custom.\nAlso: adoption d'une loi = passing a law.",
 example:"A: L'adoption de cette loi a pris des mois.\nB: Le débat parlementaire a été long.",
 exampleSrc:"A: The adoption of this law took months.\nB: The parliamentary debate was long.",
 funFact:"Double meaning: adopting a child and passing a law. Parliament 'adopts' legislation."},

{type:"teach", trg:"admirablement", src:"admirably", pos:"adv", gender:null,
 note:"Adverb from admirable. In an admirable way.\nFormal compliment.",
 example:"A: Elle a géré la situation admirablement.\nB: Son calme était impressionnant.",
 exampleSrc:"A: She handled the situation admirably.\nB: Her calm was impressive.",
 funFact:"One of French's many -ment adverbs. Admirable > admirablement, following the standard rule."},

{type:"teach", trg:"l'asiatique", src:"Asian (person)", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Also adjective.\nDescribes people or things from Asia.",
 example:"A: La cuisine asiatique est très variée.\nB: Chaque pays a ses spécialités.",
 exampleSrc:"A: Asian cuisine is very varied.\nB: Each country has its specialties.",
 funFact:"In France, 'restaurant asiatique' often means Vietnamese or Chinese. Thailand and Japan get named specifically."},

{type:"fb",
 s:"Elle {1} ses plats de fines herbes du jardin.",
 a:["agrémente"],
 opts:["agrémente","allège","altère","adopte"],
 hint:"This verb means to embellish or garnish. It comes from the word for pleasure.",
 sSrc:"She {1} her dishes with fine herbs from the garden."},

{type:"teach", trg:"l'amiable", src:"amicable, friendly (settlement)", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nÀ l'amiable = amicably, out of court.",
 example:"A: Ils ont réglé le conflit à l'amiable.\nB: C'est mieux que d'aller au tribunal.",
 exampleSrc:"A: They settled the conflict amicably.\nB: That's better than going to court.",
 funFact:"À l'amiable is a key French legal phrase. Settling things amicably avoids the slow court system."},

{type:"teach", trg:"l'alinéa", src:"paragraph, subsection", pos:"noun", gender:"m",
 note:"Masculine noun. A paragraph or clause in a legal text.\nTechnical writing and law.",
 example:"A: Lisez l'alinéa trois de l'article cinq.\nB: Il précise les conditions d'application.",
 exampleSrc:"A: Read subsection three of article five.\nB: It specifies the conditions of application.",
 funFact:"From Italian 'a linea' (at the line). Every French law student learns to cite by alinéa number."},

{type:"teach", trg:"l'assemblée", src:"assembly, meeting", pos:"noun", gender:"f",
 note:"Feminine noun. A formal gathering.\nL'Assemblée nationale = the National Assembly.",
 example:"A: L'assemblée générale aura lieu mardi prochain.\nB: Tous les membres sont convoqués.",
 exampleSrc:"A: The general meeting will take place next Tuesday.\nB: All members are summoned.",
 funFact:"L'Assemblée nationale is France's lower house of parliament. 577 deputies sit in the hemicycle."},

{type:"mc",
 q:"Comment dit-on qu'un conflit a été résolu sans tribunal ?",
 opts:["à l'assemblée","à l'amiable","à l'abattage","à l'alinéa"],
 ans:"à l'amiable",
 hint:"This expression means 'amicably' or 'out of court.' It avoids the slow legal system."},

{type:"teach", trg:"l'assentiment", src:"assent, agreement", pos:"noun", gender:"m",
 note:"Masculine noun. Formal approval or agreement.\nDonner son assentiment = to give one's assent.",
 example:"A: Il a donné son assentiment au projet.\nB: On peut maintenant commencer les travaux.",
 exampleSrc:"A: He gave his assent to the project.\nB: We can now begin the work.",
 funFact:"More formal than accord. Used in legal and diplomatic contexts. A nod of assentiment is enough."},

{type:"teach", trg:"l'allongement", src:"lengthening, extension", pos:"noun", gender:"m",
 note:"Masculine noun. From allonger (to lengthen).\nMaking something longer in time or space.",
 example:"A: L'allongement de la durée de vie pose des questions.\nB: Il faut repenser le système de retraite.",
 exampleSrc:"A: The lengthening of life expectancy raises questions.\nB: We need to rethink the retirement system.",
 funFact:"The debate about allongement de la durée de cotisation (pension contribution period) is eternal in France."},

{type:"teach", trg:"l'anniversaire", src:"birthday, anniversary", pos:"noun", gender:"m",
 note:"Masculine noun. Both birthday and anniversary.\nJoyeux anniversaire ! = Happy birthday!",
 example:"A: C'est l'anniversaire de mariage de mes parents.\nB: Combien d'années déjà ?",
 exampleSrc:"A: It's my parents' wedding anniversary.\nB: How many years already?",
 funFact:"Same word for birthday and anniversary. Context tells you which: anniversaire de naissance vs. de mariage."},

{type:"teach", trg:"l'annales", src:"annals, past exam papers", pos:"noun", gender:"f",
 note:"Feminine plural noun. Historical records.\nAlso: past exam papers for studying.",
 example:"A: J'étudie les annales du bac pour me préparer.\nB: C'est la meilleure méthode de révision.",
 exampleSrc:"A: I'm studying past bac papers to prepare.\nB: It's the best revision method.",
 funFact:"Every French student knows 'les annales.' Bookstores sell collections of past exams by subject."},

{type:"fb",
 s:"L'{1} de la durée de vie change la société.",
 a:["allongement"],
 opts:["allongement","assentiment","assemblée","alinéa"],
 hint:"This masculine noun means the act of making something longer. Think of life expectancy increasing.",
 sSrc:"The {1} of life expectancy changes society."},

{type:"match", pairs:[
  {trg:"alcoolisé", src:"alcoholic (drink)"},
  {trg:"à l'amiable", src:"amicably"},
  {trg:"l'assemblée", src:"assembly"},
  {trg:"l'annales", src:"past exams"},
  {trg:"l'assentiment", src:"assent"}
]},

{type:"mc",
 q:"Quel mot français couvre à la fois une célébration de naissance et une célébration de mariage, là où l'anglais utilise deux mots distincts ?",
 opts:["assemblée","adoption","anniversaire","annales"],
 ans:"anniversaire",
 hint:"One word covers both birthdays and wedding anniversaries in French. Context tells you which."}

]};
export default LESSON_14;
