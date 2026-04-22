const LESSON_5 = {
  id:"frv2_b2g7_l5", title:"Education et savoir", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education et savoir",
     desc:"Expand your vocabulary for discussing education, learning, and intellectual pursuits.",
     goals:["Learn 15 education-related words","Discuss academic topics","Express ideas about learning systems"]},

    {type:"teach", trg:"le multilinguisme", src:"multilingualism", pos:"noun", gender:"m",
     note:"Masculine noun. The ability to speak multiple languages.",
     example:"A: Le multilinguisme est un atout professionnel.\nB: Surtout en Europe.",
     exampleSrc:"A: Multilingualism is a professional asset.\nB: Especially in Europe.",
     funFact:"The EU promotes multilingualism with its motto 'In Varietate Concordia'. Belgium alone has three official languages."},

    {type:"teach", trg:"multilingue", src:"multilingual", pos:"adj", gender:null,
     note:"Adjective. Speaking or involving several languages.",
     example:"A: Cette ecole est multilingue.\nB: Les enfants apprennent en trois langues.",
     exampleSrc:"A: This school is multilingual.\nB: The children learn in three languages.",
     funFact:"Switzerland is a model multilingue country with four national languages: French, German, Italian, and Romansh."},

    {type:"teach", trg:"multiculturel", src:"multicultural", pos:"adj", gender:null,
     note:"Adjective. Involving several different cultures.\nFeminine: multiculturelle.",
     example:"A: Paris est une ville multiculturelle.\nB: C'est ce qui fait sa richesse.",
     exampleSrc:"A: Paris is a multicultural city.\nB: That's what makes it rich.",
     funFact:"France debates 'multiculturalisme' vs. 'republicanisme universaliste'. The tension shapes education policy."},

    {type:"teach", trg:"l'idealisation", src:"idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Representing something as perfect or better than reality.",
     example:"A: L'idealisation du passe est un piege.\nB: Le bon vieux temps n'etait pas toujours bon.",
     exampleSrc:"A: Idealizing the past is a trap.\nB: The good old days weren't always good.",
     funFact:"In psychology, idealization is a defense mechanism. In French literature, Romanticism was famous for it."},

    {type:"mc",
     q:"Quel mot decrit la capacite de parler plusieurs langues ?",
     opts:["le multilinguisme","le multiculturalisme","l'idealisation","le modernisme"],
     ans:"le multilinguisme",
     hint:"'Multi' (many) plus 'linguisme' (language-related). A compound noun."},

    {type:"teach", trg:"le modernisme", src:"modernism", pos:"noun", gender:"m",
     note:"Masculine noun. A cultural movement favoring innovation over tradition.",
     example:"A: Le modernisme architectural a transforme les villes.\nB: Le Corbusier en est un exemple.",
     exampleSrc:"A: Architectural modernism transformed cities.\nB: Le Corbusier is an example.",
     funFact:"French modernism spans art (Picasso lived in Paris), literature (Proust), and architecture (Le Corbusier)."},

    {type:"teach", trg:"le mentor", src:"a mentor", pos:"noun", gender:"m",
     note:"Masculine noun. An experienced guide or advisor.",
     example:"A: Mon mentor m'a beaucoup aide dans ma carriere.\nB: Un bon mentor est precieux.",
     exampleSrc:"A: My mentor helped me a lot in my career.\nB: A good mentor is precious.",
     funFact:"From Homer's Odyssey: Mentor was the name of Odysseus's friend who guided his son. The word entered French via Fenelon."},

    {type:"teach", trg:"magnifier", src:"to glorify, to exalt", pos:"verb", gender:null,
     note:"Verb. To praise highly or represent as greater than reality.\nNot 'to magnify' in the optical sense.",
     example:"A: Il ne faut pas magnifier les heros du passe.\nB: Ils avaient aussi leurs defauts.",
     exampleSrc:"A: We shouldn't glorify heroes of the past.\nB: They had their flaws too.",
     funFact:"False friend alert: 'magnifier' in French means to glorify, not to make bigger. Use 'agrandir' for optical magnification."},

    {type:"fb",
     s:"Le {1} en entreprise favorise la transmission des competences.",
     a:["mentor"],
     opts:["mentor","modernisme","multilinguisme","manifeste"],
     hint:"An experienced person who guides a less experienced colleague.",
     sSrc:"Having a {1} in a company promotes the transfer of skills."},

    {type:"teach", trg:"la magnitude", src:"magnitude", pos:"noun", gender:"f",
     note:"Feminine noun. The size or extent of something, especially earthquakes.",
     example:"A: Le seisme etait de magnitude six.\nB: Les degats sont considerables.",
     exampleSrc:"A: The earthquake was magnitude six.\nB: The damage is considerable.",
     funFact:"The Richter scale is 'l'echelle de Richter' in French. Each whole number increase means 10 times more shaking."},

    {type:"teach", trg:"magnetique", src:"magnetic", pos:"adj", gender:null,
     note:"Adjective. Having the properties of a magnet. Also: charismatic.",
     example:"A: Sa personnalite magnetique attire les foules.\nB: C'est un orateur ne.",
     exampleSrc:"A: His magnetic personality attracts crowds.\nB: He's a born speaker.",
     funFact:"'Champ magnetique' means magnetic field. Figuratively, a person 'magnetique' has irresistible charisma."},

    {type:"teach", trg:"l'intermede", src:"an interlude", pos:"noun", gender:"m",
     note:"Masculine noun. A pause or interval between two events.",
     example:"A: Cet intermede musical etait agreable.\nB: Ca a permis de souffler un peu.",
     exampleSrc:"A: This musical interlude was pleasant.\nB: It allowed us to breathe a bit.",
     funFact:"From Italian 'intermedio'. In French theater, the 'intermede' was a short comic performance between acts."},

    {type:"mc",
     q:"Quel verbe signifie 'glorifier' ou 'exalter' quelqu'un ?",
     opts:["maximiser","magnifier","malmener","manoeuvrer"],
     ans:"magnifier",
     hint:"A false friend with English. In French, it means to praise highly, not to make bigger."},

    {type:"teach", trg:"manoeuvrer", src:"to maneuver, to operate", pos:"verb", gender:null,
     note:"Verb. To move skillfully or to manipulate a situation.",
     example:"A: Il sait manoeuvrer en politique.\nB: C'est un strategiste habile.",
     exampleSrc:"A: He knows how to maneuver in politics.\nB: He's a skillful strategist.",
     funFact:"From Latin 'manu operare' meaning to work by hand. Military, nautical, and political uses all common in French."},

    {type:"teach", trg:"maximiser", src:"to maximize", pos:"verb", gender:null,
     note:"Verb. To make something as large or great as possible.",
     example:"A: Comment maximiser nos profits cette annee ?\nB: En reduisant les couts inutiles.",
     exampleSrc:"A: How can we maximize our profits this year?\nB: By cutting unnecessary costs.",
     funFact:"Business French loves anglicisms, but 'maximiser' is actually from Latin 'maximus'. 'Optimiser' is the softer alternative."},

    {type:"fb",
     s:"L'{1} du passe empeche de voir la realite telle qu'elle est.",
     a:["idealisation"],
     opts:["idealisation","intermede","interaction","intensification"],
     hint:"Seeing the past as perfect when it really wasn't.",
     sSrc:"The {1} of the past prevents seeing reality as it is."},

    {type:"match", pairs:[
      {trg:"multilinguisme", src:"multilingualism"},
      {trg:"mentor", src:"mentor"},
      {trg:"magnitude", src:"magnitude"},
      {trg:"intermede", src:"interlude"},
      {trg:"manoeuvrer", src:"to maneuver"}
    ]},

    {type:"mc",
     q:"Quel mot designe une pause entre deux evenements ?",
     opts:["un manifeste","un mandataire","un intermede","un mentor"],
     ans:"un intermede",
     hint:"From Italian 'intermedio'. A short break in a performance or event."},

    {type:"fb",
     s:"Il faut {1} l'impact de chaque euro investi.",
     a:["maximiser"],
     opts:["maximiser","magnifier","manoeuvrer","malmener"],
     hint:"To make the most of something, to get the greatest possible result.",
     sSrc:"We need to {1} the impact of every euro invested."}
  ]
};
export default LESSON_5;
