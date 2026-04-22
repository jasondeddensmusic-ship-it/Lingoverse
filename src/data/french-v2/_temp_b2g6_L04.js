const LESSON_4 = {
  id:"frv2_b2g6_l4", title:"Le légal et le légitime", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le légal et le légitime",
     desc:"Explore vocabulary for law, legitimacy, and justice used in formal debate and news media.",
     goals:["Learn 20 words about law and legitimacy","Discuss legal matters with precision","Distinguish between legal and moral concepts"]},

    {type:"teach", trg:"légitime", src:"legitimate, rightful", pos:"adj", gender:null,
     note:"Adjective. Lawful and morally justified. Same form masculine/feminine.",
     example:"A: Sa colère est parfaitement légitime.\nB: Oui, il a le droit d'être furieux.",
     exampleSrc:"A: His anger is perfectly legitimate.\nB: Yes, he has the right to be furious.",
     funFact:"'Légitime défense' (self-defense) is a crucial legal concept in French criminal law."},

    {type:"teach", trg:"légitimement", src:"legitimately, rightfully", pos:"adv", gender:null,
     note:"Adverb. In a way that is justified by law or reason.",
     example:"A: On peut légitimement poser la question.\nB: Bien sûr, c'est notre droit.",
     exampleSrc:"A: We can legitimately ask the question.\nB: Of course, it's our right.",
     funFact:"Often used in French editorials to validate a controversial position before stating it."},

    {type:"teach", trg:"légiférer", src:"to legislate", pos:"verb", gender:null,
     note:"Verb. To make or pass laws. Takes accent grave on second 'e' in some forms.",
     example:"A: Le parlement doit légiférer sur ce sujet.\nB: Un projet de loi est en préparation.",
     exampleSrc:"A: Parliament must legislate on this topic.\nB: A bill is being prepared.",
     funFact:"From Latin 'legem ferre' meaning to carry or propose a law. Very formal register."},

    {type:"teach", trg:"léser", src:"to harm, to wrong (legally)", pos:"verb", gender:null,
     note:"Verb. To cause harm to someone's rights or interests.",
     example:"A: Cette décision lèse les petits commerçants.\nB: Ils vont porter plainte.",
     exampleSrc:"A: This decision harms small business owners.\nB: They're going to file a complaint.",
     funFact:"'Lèse-majesté' uses this root. To harm the king's dignity was the ultimate crime in old France."},

    {type:"mc",
     q:"Quel verbe signifie 'faire des lois' ?",
     opts:["légiférer","léser","localiser","légitime"],
     ans:"légiférer",
     hint:"From Latin roots meaning 'to carry a law'. This is what parliaments do."},

    {type:"teach", trg:"la laïcisation", src:"the secularization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of removing religious influence from institutions.",
     example:"A: La laïcisation de l'école date de 1882.\nB: Oui, avec les lois de Jules Ferry.",
     exampleSrc:"A: The secularization of schools dates from 1882.\nB: Yes, with the Jules Ferry laws.",
     funFact:"'Laïcité' is a foundational French value, enshrined in the constitution since 1958."},

    {type:"teach", trg:"laïque", src:"secular, non-religious", pos:"adj", gender:null,
     note:"Adjective or noun. Describes a non-religious person or institution.",
     example:"A: La France est un État laïque.\nB: La religion et l'État sont séparés.",
     exampleSrc:"A: France is a secular state.\nB: Religion and the state are separated.",
     funFact:"'Laïque' can also be a noun meaning a lay person (not a member of the clergy)."},

    {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: Elle étudie la criminologie à l'université.\nB: C'est un domaine passionnant.",
     exampleSrc:"A: She studies criminology at university.\nB: It's a fascinating field.",
     funFact:"France was a pioneer in criminology. Alexandre Lacassagne founded the Lyon school in the 1880s."},

    {type:"fb",
     s:"Cette loi {1} les droits des travailleurs.",
     a:["lèse"],
     opts:["lèse","légifère","localise","laïcise"],
     hint:"To cause harm to someone's rights or interests. A legal term for wronging someone.",
     sSrc:"This law {1} the rights of workers."},

    {type:"teach", trg:"l'investiture", src:"the investiture, the nomination", pos:"noun", gender:"f",
     note:"Feminine noun. The formal conferring of authority or a candidacy.",
     example:"A: Il a reçu l'investiture de son parti.\nB: Il est maintenant candidat officiel.",
     exampleSrc:"A: He received the nomination from his party.\nB: He is now the official candidate.",
     funFact:"From medieval Latin 'investitura'. Originally meant dressing someone in the robes of office."},

    {type:"teach", trg:"l'incarnation", src:"the incarnation, the embodiment", pos:"noun", gender:"f",
     note:"Feminine noun. The perfect embodiment of a quality or idea.",
     example:"A: Elle est l'incarnation de l'élégance.\nB: Toujours impeccable.",
     exampleSrc:"A: She is the embodiment of elegance.\nB: Always impeccable.",
     funFact:"From Latin 'incarnatio' meaning becoming flesh. Used both in religion and as a powerful metaphor."},

    {type:"teach", trg:"un insurgé", src:"an insurgent", pos:"noun", gender:"m",
     note:"Masculine noun. A person who revolts against authority. Feminine: une insurgée.",
     example:"A: Les insurgés ont pris le contrôle de la ville.\nB: L'armée prépare une riposte.",
     exampleSrc:"A: The insurgents took control of the city.\nB: The army is preparing a response.",
     funFact:"'S'insurger' means to rebel. Victor Hugo's 'Les Misérables' immortalized French insurgents."},

    {type:"mc",
     q:"Que représente 'la laïcité' en France ?",
     opts:["L'éducation gratuite","La séparation de l'État et de la religion","La liberté de la presse","Le droit de vote universel"],
     ans:"La séparation de l'État et de la religion",
     hint:"A foundational French value about keeping religious and state affairs separate."},

    {type:"teach", trg:"la largeur", src:"the width", pos:"noun", gender:"f",
     note:"Feminine noun. The measurement from side to side.",
     example:"A: Quelle est la largeur de cette pièce ?\nB: Environ quatre mètres.",
     exampleSrc:"A: What is the width of this room?\nB: About four meters.",
     funFact:"From 'large' (wide). 'Largeur d'esprit' means open-mindedness, a beautiful figurative use."},

    {type:"teach", trg:"la longueur", src:"the length", pos:"noun", gender:"f",
     note:"Feminine noun. The measurement from end to end, or duration.",
     example:"A: La longueur du film est excessive.\nB: Trois heures, c'est trop.",
     exampleSrc:"A: The length of the film is excessive.\nB: Three hours is too much.",
     funFact:"'En longueur' means lengthwise. 'Traîner en longueur' means to drag on endlessly."},

    {type:"teach", trg:"légendaire", src:"legendary", pos:"adj", gender:null,
     note:"Adjective. Famous or remarkable enough to be talked about.",
     example:"A: Sa patience est légendaire.\nB: Il ne s'énerve jamais.",
     exampleSrc:"A: His patience is legendary.\nB: He never gets angry.",
     funFact:"From 'légende' (legend). Used both literally (mythological) and figuratively (remarkably notable)."},

    {type:"fb",
     s:"La {1} de l'école publique est un principe fondamental en France.",
     a:["laïcisation"],
     opts:["laïcisation","criminologie","investiture","incarnation"],
     hint:"The process of removing religious influence from public institutions.",
     sSrc:"The {1} of public schools is a fundamental principle in France."},

    {type:"teach", trg:"localiser", src:"to locate, to localize", pos:"verb", gender:null,
     note:"Verb. To find the exact position of something.",
     example:"A: On a réussi à localiser l'épave.\nB: Elle était à 3 000 mètres de profondeur.",
     exampleSrc:"A: We managed to locate the wreck.\nB: It was at 3,000 meters depth.",
     funFact:"'Se localiser' means to be located. GPS has made this word part of everyday French."},

    {type:"teach", trg:"la lisière", src:"the edge, the border", pos:"noun", gender:"f",
     note:"Feminine noun. The border of a forest or the edge of a fabric.",
     example:"A: La maison est à la lisière de la forêt.\nB: Quel cadre magnifique !",
     exampleSrc:"A: The house is at the edge of the forest.\nB: What a magnificent setting!",
     funFact:"Originally a weaving term for the edge of cloth. The forest meaning came from boundary markers."},

    {type:"match", pairs:[
      {trg:"légitime", src:"legitimate"},
      {trg:"insurgé", src:"insurgent"},
      {trg:"investiture", src:"nomination"},
      {trg:"lisière", src:"edge, border"},
      {trg:"largeur", src:"width"}
    ]},

    {type:"mc",
     q:"Que fait-on quand on 'localise' quelque chose ?",
     opts:["On le détruit","On le mesure","On trouve sa position exacte","On le déplace"],
     ans:"On trouve sa position exacte",
     hint:"Think of GPS technology. This verb means finding where something is."},

    {type:"fb",
     s:"Il a reçu l'{1} de son parti pour les élections présidentielles.",
     a:["investiture"],
     opts:["investiture","incarnation","insuffisance","identification"],
     hint:"The formal nomination or conferring of candidacy by a political party.",
     sSrc:"He received the {1} from his party for the presidential elections."}
  ]
};
export default LESSON_4;
