// L01: Kunst en Cultuur — Art and Culture
const LESSON_1 = {
  id:"nlv2_b2gD_l01", title:"Kunst en Cultuur", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Art and Culture",
     desc:"Explore the world of Dutch art. From museums and galleries to art history and creative disciplines, build the vocabulary to discuss visual culture at a sophisticated level.",
     goals:["Master 10 art and culture terms","Discuss museums and art history","Navigate the Dutch art world"]},

    {type:"teach", trg:"de kunstgeschiedenis", src:"art history", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + geschiedenis (history).\nAn academic field and popular museum topic.",
     example:"A: Heb je kunstgeschiedenis gestudeerd?\nB: Ja, aan de universiteit van Amsterdam.\nA: Wat is je specialisatie?\nB: De Gouden Eeuw, natuurlijk.",
     exampleSrc:"A: Did you study art history?\nB: Yes, at the University of Amsterdam.\nA: What is your specialisation?\nB: The Golden Age, of course.",
     funFact:"The Netherlands has more museums per capita than almost any other country. Amsterdam alone has over 70."},

    {type:"teach", trg:"de kunstcollectie", src:"the art collection", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + collectie (collection).\n'Een indrukwekkende collectie' = an impressive collection.",
     example:"A: De kunstcollectie van het Rijksmuseum is enorm.\nB: Hoeveel werken hebben ze?\nA: Meer dan een miljoen objecten.\nB: Ongelooflijk!",
     exampleSrc:"A: The art collection of the Rijksmuseum is enormous.\nB: How many works do they have?\nA: More than a million objects.\nB: Unbelievable!",
     funFact:"The Rijksmuseum's collection includes Rembrandt's 'Night Watch', which has its own room and armed security."},

    {type:"teach", trg:"de kunstacademie", src:"the art academy", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + academie (academy).\nA school for visual arts, design, or fine art.",
     example:"A: Mijn dochter wil naar de kunstacademie.\nB: Welke richting kiest ze?\nA: Schilderkunst en beeldhouwkunst.\nB: Dat is een mooi vak.",
     exampleSrc:"A: My daughter wants to go to the art academy.\nB: Which direction is she choosing?\nA: Painting and sculpture.\nB: That's a wonderful field.",
     funFact:"The Rijksakademie in Amsterdam is one of Europe's most prestigious art residencies, attracting artists from around the world."},

    {type:"teach", trg:"de kunsthandelaar", src:"the art dealer", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + handelaar (dealer/trader).\n'Een gerenommeerde kunsthandelaar' = a reputable art dealer.",
     example:"A: De kunsthandelaar bood honderdduizend euro.\nB: Voor dat kleine schilderij?\nA: Het is een originele Mondriaan.\nB: Dan is het nog goedkoop!",
     exampleSrc:"A: The art dealer offered a hundred thousand euros.\nB: For that small painting?\nA: It's an original Mondrian.\nB: Then it's still cheap!",
     funFact:"The Netherlands has a long tradition of art dealing. Vermeer's father was also an art dealer in 17th-century Delft."},

    {type:"mc",
     q:"Wat bestudeert iemand die kunstgeschiedenis heeft gestudeerd?",
     opts:["De geschiedenis van beeldende kunst","De techniek van schilderen","De prijs van kunstwerken","De architectuur van musea"],
     ans:"De geschiedenis van beeldende kunst",
     hint:"The compound breaks down to 'art' + 'history'. It is an academic discipline studying visual art through time."},

    {type:"teach", trg:"de kunstkenner", src:"the art connoisseur", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + kenner (expert/connoisseur).\nSomeone with deep knowledge of art.",
     example:"A: Je bent een echte kunstkenner!\nB: Ik lees er veel over.\nA: Kun je zien of dit echt is?\nB: Ik denk het wel, maar laat het taxeren.",
     exampleSrc:"A: You're a real art connoisseur!\nB: I read a lot about it.\nA: Can you tell if this is real?\nB: I think so, but have it appraised.",
     funFact:"The Dutch word 'kenner' comes from 'kennen' (to know). It implies deep, experiential knowledge, not just book learning."},

    {type:"teach", trg:"de kunstvervalser", src:"the art forger", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + vervalser (forger).\n'Een meestervervalser' = a master forger.",
     example:"A: Han van Meegeren was een beroemde kunstvervalser.\nB: Wat vervalste hij?\nA: Schilderijen van Vermeer.\nB: En hij werd pas na de oorlog ontdekt.",
     exampleSrc:"A: Han van Meegeren was a famous art forger.\nB: What did he forge?\nA: Paintings by Vermeer.\nB: And he was only discovered after the war.",
     funFact:"Van Meegeren sold a fake Vermeer to Nazi leader Goering. He was charged with collaboration, then proved he painted it himself to avoid conviction."},

    {type:"teach", trg:"kunsthistorisch", src:"art-historical", pos:"adj", gender:null,
     note:"Adjective. Kunst (art) + historisch (historical).\n'Kunsthistorisch onderzoek' = art-historical research.",
     example:"A: Dit is een kunsthistorisch belangrijk gebouw.\nB: Uit welke periode stamt het?\nA: Uit de zeventiende eeuw.\nB: Dat zie je aan de gevelstenen.",
     exampleSrc:"A: This is an art-historically important building.\nB: From which period does it date?\nA: From the seventeenth century.\nB: You can tell from the facade stones.",
     funFact:"Dutch art historians pioneered the study of 'genre painting', the everyday life scenes that Vermeer and Jan Steen made famous."},

    {type:"fb",
     s:"De {1} heeft drie nieuwe werken van Rembrandt aangekocht.",
     a:["kunsthandelaar"],
     opts:["kunsthandelaar","kunstkenner","kunstvervalser","kunstacademie"],
     hint:"A professional who buys and sells artwork. Think: art + trader.",
     sSrc:"The {1} has purchased three new works by Rembrandt."},

    {type:"teach", trg:"kunstmatig", src:"artificial", pos:"adj", gender:null,
     note:"Adjective. Kunst (art/artificial) + matig (moderate, used as suffix).\n'Kunstmatige intelligentie' = artificial intelligence.",
     example:"A: Is dit kunstmatig licht of daglicht?\nB: Kunstmatig, maar het lijkt natuurlijk.\nA: Dat is goed voor de schilderijen.\nB: Ja, UV-licht is schadelijk.",
     exampleSrc:"A: Is this artificial light or daylight?\nB: Artificial, but it looks natural.\nA: That's good for the paintings.\nB: Yes, UV light is harmful.",
     funFact:"'Kunstmatig' literally means 'art-like', implying something made by human craft rather than nature. The same root gives us 'kunststof' (plastic, literally 'art-material')."},

    {type:"teach", trg:"het kunstijs", src:"artificial ice / ice rink", pos:"noun", gender:"n",
     note:"Neuter (het). Kunst (artificial) + ijs (ice).\nAn ice rink with artificially frozen ice.",
     example:"A: Gaan we naar het kunstijs vanavond?\nB: Ja, ik wil schaatsen!\nA: Neem warme kleren mee.\nB: Natuurlijk, het is daar ijskoud.",
     exampleSrc:"A: Shall we go to the ice rink tonight?\nB: Yes, I want to skate!\nA: Bring warm clothes.\nB: Of course, it's freezing there.",
     funFact:"Skating is deeply embedded in Dutch culture. The Elfstedentocht (Eleven Cities Tour) is a legendary 200km skating race through Friesland, held only when natural ice is thick enough."},

    {type:"match", pairs:[
      {trg:"kunstgeschiedenis", src:"art history"},
      {trg:"kunsthandelaar", src:"art dealer"},
      {trg:"kunstvervalser", src:"art forger"},
      {trg:"kunstmatig", src:"artificial"},
      {trg:"kunstkenner", src:"art connoisseur"}
    ]},

    {type:"mc",
     q:"Welk woord beschrijft iets dat niet natuurlijk is, maar door mensen gemaakt?",
     opts:["kunstmatig","kunsthistorisch","kundig","kostbaar"],
     ans:"kunstmatig",
     hint:"This adjective uses 'kunst' in the sense of 'crafted by humans'. Think of how 'artificial' relates to 'art'."},

    {type:"fb",
     s:"De {1} ontdekte dat het schilderij een vervalsing was.",
     a:["kunstkenner"],
     opts:["kunstkenner","kunsthandelaar","kunstvervalser","kunstacademie"],
     hint:"An expert with deep knowledge of art who can spot fakes. The second part means 'one who knows'.",
     sSrc:"The {1} discovered that the painting was a forgery."}
  ]
};
export default LESSON_1;
