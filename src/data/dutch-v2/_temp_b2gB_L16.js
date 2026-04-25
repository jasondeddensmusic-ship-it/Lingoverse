// Dutch B2 gapB Lesson 16. Kunst en Cultuur
// Art, culture, and creative vocabulary

const LESSON_16 = {id:"nlv2_b2gB_l16", title:"Kunst en Cultuur", icon:"\u{1F3A8}", xp:25, board:true, steps:[
{type:"intro", title:"Kunst en Cultuur",
 desc:"The Netherlands has a rich artistic heritage from Rembrandt to modern design. Learn vocabulary for discussing art, galleries, and creative expression.",
 goals:["8 art and culture nouns","Discuss artistic movements and institutions","Navigate Dutch cultural vocabulary"]},

{type:"teach", trg:"de kunstacademie", src:"art academy", pos:"noun", gender:"c",
 note:"Kunst (art) + academie (academy).\n'De Rijksacademie' = the Royal Academy in Amsterdam.",
 example:"A: Ze studeert aan de kunstacademie.\nB: Welke richting?\nA: Schilderkunst, net als Vermeer.\nB: Hopelijk wordt ze net zo beroemd!",
 exampleSrc:"A: She studies at the art academy.\nB: Which direction?\nA: Painting, just like Vermeer.\nB: Hopefully she'll be just as famous!",
 funFact:"The Gerrit Rietveld Academie in Amsterdam is one of Europe's most prestigious art schools, named after the De Stijl movement architect."},

{type:"teach", trg:"de kunstcollectie", src:"art collection", pos:"noun", gender:"c",
 note:"Kunst + collectie (collection).\n'De particuliere collectie' = private collection.",
 example:"A: Het museum heeft een indrukwekkende kunstcollectie.\nB: Hoeveel werken hebben ze?\nA: Meer dan tienduizend.\nB: En ze tonen er maar een klein deel van.",
 exampleSrc:"A: The museum has an impressive art collection.\nB: How many works do they have?\nA: More than ten thousand.\nB: And they only show a small part of it.",
 funFact:"The Rijksmuseum houses over one million objects, but only about 8,000 are on display at any time. The rest is in storage."},

{type:"teach", trg:"de kunstenaarsziel", src:"artist's soul", pos:"noun", gender:"c",
 note:"Kunstenaar (artist) + ziel (soul).\nHaving a sensitive, creative temperament.",
 example:"A: Hij heeft een echte kunstenaarsziel.\nB: Je ziet het aan alles wat hij doet.\nA: Soms is dat lastig in het dagelijks leven.\nB: Ja, kunstenaars denken anders.",
 exampleSrc:"A: He has a true artist's soul.\nB: You can see it in everything he does.\nA: Sometimes that's difficult in daily life.\nB: Yes, artists think differently.",
 funFact:"The Dutch expression 'kunstenaarsziel' is always a compliment, implying deep sensitivity and creative vision."},

{type:"teach", trg:"het design", src:"design", pos:"noun", gender:"n",
 note:"English loanword, fully integrated.\n'Dutch Design' is a recognized global brand.",
 example:"A: Nederlands design is wereldberoemd.\nB: Denk je aan Droog Design?\nA: Ja, en aan de Design Academy Eindhoven.\nB: Die leiden echte toptalenten op.",
 exampleSrc:"A: Dutch design is world-famous.\nB: Are you thinking of Droog Design?\nA: Yes, and the Design Academy Eindhoven.\nB: They train real top talents.",
 funFact:"Dutch Design Week in Eindhoven is the largest design event in Northern Europe, attracting over 350,000 visitors annually."},

{type:"teach", trg:"het gejoel", src:"cheering / jeering / uproar", pos:"noun", gender:"n",
 note:"Het gejoel. From 'joelen' (to shout/cheer).\nCan be positive (cheering) or negative (jeering).",
 example:"A: Het gejoel in het stadion was oorverdovend.\nB: Wie had er gescoord?\nA: Onze spits, in de laatste minuut!\nB: Geen wonder dat iedereen gek werd.",
 exampleSrc:"A: The cheering in the stadium was deafening.\nB: Who had scored?\nA: Our striker, in the last minute!\nB: No wonder everyone went crazy.",
 funFact:"Dutch football fans are famous for their 'oranjegekte' (orange madness), turning entire cities orange during international tournaments."},

{type:"teach", trg:"de keltisch", src:"Celtic", pos:"adj", gender:null,
 note:"Relating to Celtic culture and peoples.\n'De Kelten' = the Celts.",
 example:"A: Er is Keltische invloed in Zuid-Limburg.\nB: Echt? Ik dacht dat dat alleen in Ierland was.\nA: Nee, de Kelten leefden ook hier.\nB: Dat wist ik niet, fascinerend.",
 exampleSrc:"A: There's Celtic influence in South Limburg.\nB: Really? I thought that was only in Ireland.\nA: No, the Celts lived here too.\nB: I didn't know that, fascinating.",
 funFact:"Archaeological finds in Limburg show Celtic settlements dating back to 500 BC, predating the Roman conquest of the Low Countries."},

{type:"teach", trg:"de handkus", src:"hand kiss", pos:"noun", gender:"c",
 note:"Hand + kus (kiss). A formal greeting gesture.\n'Een handkus geven' = to kiss someone's hand.",
 example:"A: Hij gaf haar een handkus.\nB: Dat is heel ouderwets!\nA: Ja, maar ze vond het charmant.\nB: In sommige kringen is het nog gebruikelijk.",
 exampleSrc:"A: He gave her a hand kiss.\nB: That's very old-fashioned!\nA: Yes, but she found it charming.\nB: In some circles it's still customary.",
 funFact:"The hand kiss was common in Dutch aristocratic circles until the mid-20th century. Today it is considered charmingly old-fashioned."},

{type:"teach", trg:"de hostess", src:"hostess / receptionist", pos:"noun", gender:"c",
 note:"English loanword. A female host at events or airlines.\n'De gastheer/gastvrouw' = host/hostess (Dutch alternative).",
 example:"A: De hostess verwelkomde ons bij de ingang.\nB: Dat was heel professioneel.\nA: Ze sprak vier talen.\nB: Indrukwekkend.",
 exampleSrc:"A: The hostess welcomed us at the entrance.\nB: That was very professional.\nA: She spoke four languages.\nB: Impressive.",
 funFact:"The Dutch increasingly use gender-neutral terms: 'gastheer/gastvrouw' is being replaced by 'host' in many modern Dutch companies."},

{type:"mc", q:"'Dutch Design' is vooral bekend in:",
 opts:["Eindhoven","Amsterdam","Rotterdam","Den Haag"],
 ans:"Eindhoven",
 hint:"The city with the Design Academy and Dutch Design Week"},

{type:"fb", s:"Het museum heeft een indrukwekkende {1}.",
 a:["kunstcollectie"], opts:["kunstcollectie","kunstacademie","kunstenaarsziel","design"],
 hint:"The total body of artworks owned by a museum",
 sSrc:"The museum has an impressive {1}."},

{type:"mc", q:"'Het gejoel' kan zowel ... als ... zijn.",
 opts:["Quiet and loud","Positive cheering and negative jeering","Old and new","Dutch and English"],
 ans:"Positive cheering and negative jeering",
 hint:"The crowd's noise, which can be supportive or hostile"},

{type:"fb", s:"Hij heeft een echte {1}, je ziet het aan alles.",
 a:["kunstenaarsziel"], opts:["kunstenaarsziel","kunstcollectie","kunstacademie","handkus"],
 hint:"The deep creative sensitivity that defines a true artist",
 sSrc:"He has a true {1}, you can see it in everything."},

{type:"match", pairs:[
 {trg:"de kunstacademie", src:"art academy"},
 {trg:"de kunstcollectie", src:"art collection"},
 {trg:"de kunstenaarsziel", src:"artist's soul"},
 {trg:"het design", src:"design"}
]},

{type:"mc", q:"'Een handkus' is:",
 opts:["A wave","A high five","A formal hand kiss greeting","A handshake"],
 ans:"A formal hand kiss greeting",
 hint:"An old-fashioned, aristocratic g... gesture"},

{type:"fb", s:"Er is {1} invloed in Zuid-Limburg.",
 a:["Keltische"], opts:["Keltische","Nederlandse","Franse","Duitse"],
 hint:"The ancient culture that predated the Romans in this region",
 sSrc:"There is {1} influence in South Limburg."},

{type:"match", pairs:[
 {trg:"het gejoel", src:"cheering / uproar"},
 {trg:"keltisch", src:"Celtic"},
 {trg:"de handkus", src:"hand kiss"},
 {trg:"de hostess", src:"hostess"}
]}
]};
export default LESSON_16;
