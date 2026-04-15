// L01: Kunst en Cultuur — Art World Vocabulary
const LESSON_1 = {
  id:"nlv2_b2gC_l1", title:"Kunst en Cultuur", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Art and Culture",
     desc:"Dive into the Dutch art world. From galleries to art history, these words let you discuss visual arts, museums, and creative disciplines like a native.",
     goals:["Master 12 art and culture nouns","Discuss art collections and exhibitions","Navigate Dutch museum vocabulary"]},

    {type:"teach", trg:"de kunstgeschiedenis", src:"art history", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + geschiedenis (history).\nA popular university subject in the Netherlands.",
     example:"A: Studeer je kunstgeschiedenis?\nB: Ja, ik ben in het tweede jaar.\nA: Wat is je favoriete periode?\nB: De Gouden Eeuw, natuurlijk!",
     exampleSrc:"A: Do you study art history?\nB: Yes, I'm in my second year.\nA: What's your favourite period?\nB: The Golden Age, of course!",
     funFact:"The Netherlands has more museums per capita than any other country. Art history is deeply woven into Dutch identity."},

    {type:"teach", trg:"de kunstacademie", src:"the art academy", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + academie (academy).\nWhere artists train professionally.",
     example:"A: Mijn dochter is aangenomen op de kunstacademie.\nB: Gefeliciteerd! Welke richting?\nA: Beeldende kunst.\nB: Dat is een prachtige opleiding.",
     exampleSrc:"A: My daughter got accepted at the art academy.\nB: Congratulations! Which direction?\nA: Visual arts.\nB: That's a wonderful programme.",
     funFact:"The Rijksakademie in Amsterdam, founded in 1870, is one of Europe's most prestigious artist residencies."},

    {type:"teach", trg:"de kunstcollectie", src:"the art collection", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + collectie (collection).\n'Een indrukwekkende collectie' = an impressive collection.",
     example:"A: Het museum heeft een enorme kunstcollectie.\nB: Hoeveel werken hangen er?\nA: Meer dan drieduizend, geloof ik.\nB: Daar heb je dagen voor nodig!",
     exampleSrc:"A: The museum has an enormous art collection.\nB: How many works are on display?\nA: More than three thousand, I believe.\nB: You'd need days for that!",
     funFact:"The Rijksmuseum holds over one million objects, making it one of the largest art collections in the world."},

    {type:"teach", trg:"de kunsthandelaar", src:"the art dealer", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + handelaar (dealer/trader).\n'Handelen' = to trade.",
     example:"A: Ken je een goede kunsthandelaar?\nB: Ja, er is er een in de Spiegelstraat.\nA: Verkoopt hij ook moderne kunst?\nB: Alles, van Rembrandt tot hedendaags.",
     exampleSrc:"A: Do you know a good art dealer?\nB: Yes, there's one on Spiegelstraat.\nA: Does he also sell modern art?\nB: Everything, from Rembrandt to contemporary.",
     funFact:"The Spiegelstraat in Amsterdam is famous for its antique and art dealers. It has been a hub for art trade since the 17th century."},

    {type:"teach", trg:"de kunstkenner", src:"the art connoisseur", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + kenner (expert/connoisseur).\n'Kennen' = to know (people/things).",
     example:"A: Jij bent echt een kunstkenner!\nB: Ach, ik lees er gewoon veel over.\nA: Kun je zien of dit schilderij echt is?\nB: Ik denk het wel, kijk naar de verflaag.",
     exampleSrc:"A: You're really an art connoisseur!\nB: Oh, I just read a lot about it.\nA: Can you tell if this painting is real?\nB: I think so, look at the paint layer.",
     funFact:"The suffix '-kenner' appears in many Dutch compound words: wijnkenner (wine expert), muziekkenner (music expert)."},

    {type:"mc",
     q:"Wat is een kunstkenner?",
     opts:["Iemand die kunst verkoopt","Iemand die veel van kunst weet","Iemand die kunst steelt","Iemand die kunst maakt"],
     ans:"Iemand die veel van kunst weet",
     hint:"The word 'kenner' comes from 'kennen' (to know). Someone who knows art well."},

    {type:"teach", trg:"de kunstvervalser", src:"the art forger", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + vervalser (forger).\n'Vervalsen' = to forge/falsify.",
     example:"A: Heb je die documentaire over de kunstvervalser gezien?\nB: Ja, ongelooflijk! Hij bedroog de hele kunstwereld.\nA: Zijn werk was niet van echt te onderscheiden.\nB: Knap, maar natuurlijk verboden.",
     exampleSrc:"A: Have you seen that documentary about the art forger?\nB: Yes, unbelievable! He fooled the entire art world.\nA: His work was indistinguishable from the real thing.\nB: Impressive, but of course illegal.",
     funFact:"Han van Meegeren is the Netherlands' most famous art forger. He fooled Hermann Goering with fake Vermeers during World War II."},

    {type:"teach", trg:"kunsthistorisch", src:"art-historical", pos:"adj", gender:null,
     note:"Adjective form of kunstgeschiedenis.\n'Een kunsthistorisch perspectief' = an art-historical perspective.",
     example:"A: Dit boek biedt een kunsthistorisch overzicht.\nB: Van welke periode?\nA: Van de middeleeuwen tot nu.\nB: Klinkt interessant, mag ik het lenen?",
     exampleSrc:"A: This book offers an art-historical overview.\nB: Of which period?\nA: From the Middle Ages to now.\nB: Sounds interesting, may I borrow it?",
     funFact:"Dutch art history distinguishes between 'beeldende kunst' (visual art) and 'toegepaste kunst' (applied art/design)."},

    {type:"fb",
     s:"De {1} heeft een prachtige verzameling Hollandse meesters.",
     a:["kunstcollectie"],
     opts:["kunstcollectie","kunstacademie","kunstgeschiedenis","kunstkenner"],
     hint:"A gathering of artworks belonging to one museum or person.",
     sSrc:"The {1} has a beautiful collection of Dutch masters."},

    {type:"teach", trg:"de kunstopleiding", src:"the art education / art programme", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + opleiding (education/training).\n'Een opleiding volgen' = to follow a programme.",
     example:"A: Welke kunstopleiding heb je gevolgd?\nB: Ik heb grafisch ontwerp gestudeerd.\nA: En waar werk je nu?\nB: Bij een reclamebureau in Rotterdam.",
     exampleSrc:"A: Which art programme did you do?\nB: I studied graphic design.\nA: And where do you work now?\nB: At an advertising agency in Rotterdam.",
     funFact:"The Netherlands has 14 art academies. The most famous are the Rietveld Academie and the Koninklijke Academie."},

    {type:"teach", trg:"kunstmatig", src:"artificial", pos:"adj", gender:null,
     note:"Kunst (art/artificial) + matig (moderate/made).\n'Kunstmatige intelligentie' = artificial intelligence.",
     example:"A: Is dit kunstmatig licht of daglicht?\nB: Kunstmatig, maar het lijkt op echt licht.\nA: Indrukwekkend voor een museum.\nB: Ze gebruiken speciale lampen.",
     exampleSrc:"A: Is this artificial light or daylight?\nB: Artificial, but it looks like real light.\nA: Impressive for a museum.\nB: They use special lamps.",
     funFact:"The word 'kunst' originally meant 'skill' or 'craft'. Something 'kunstmatig' is made by human skill, not by nature."},

    {type:"teach", trg:"de kunstwetenschap", src:"art science / art studies", pos:"noun", gender:"c",
     note:"Common gender (de). Kunst (art) + wetenschap (science).\nThe academic discipline studying art.",
     example:"A: Kunstwetenschap is breder dan kunstgeschiedenis.\nB: Hoe bedoel je?\nA: Het omvat ook theorie en filosofie.\nB: Ah, dus meer dan alleen data en feiten.",
     exampleSrc:"A: Art science is broader than art history.\nB: What do you mean?\nA: It also includes theory and philosophy.\nB: Ah, so more than just dates and facts.",
     funFact:"In the Netherlands, 'kunstwetenschap' is a separate academic field from 'kunstgeschiedenis', focusing more on theory."},

    {type:"mc",
     q:"'Kunstmatig' betekent:",
     opts:["Mooi gemaakt","Niet natuurlijk, door mensen gemaakt","Oud en waardevol","Met de hand geschilderd"],
     ans:"Niet natuurlijk, door mensen gemaakt",
     hint:"Think of the English cognate 'artificial'. Kunst here means craft or skill, not fine art."},

    {type:"fb",
     s:"Han van Meegeren was een beroemde {1}.",
     a:["kunstvervalser"],
     opts:["kunstvervalser","kunstkenner","kunsthandelaar","kunstacademie"],
     hint:"Someone who creates fake paintings to deceive people.",
     sSrc:"Han van Meegeren was a famous {1}."},

    {type:"match", pairs:[
      {trg:"kunstgeschiedenis", src:"art history"},
      {trg:"kunsthandelaar", src:"art dealer"},
      {trg:"kunstkenner", src:"art connoisseur"},
      {trg:"kunstvervalser", src:"art forger"}
    ]},

    {type:"mc",
     q:"Waar studeert iemand beeldende kunst?",
     opts:["Op de kunstacademie","Bij de kunsthandelaar","In het kunstmuseum","Bij de kunstvervalser"],
     ans:"Op de kunstacademie",
     hint:"An educational institution where artists learn their craft professionally."},

    {type:"fb",
     s:"Ze volgt een {1} in grafisch ontwerp.",
     a:["kunstopleiding"],
     opts:["kunstopleiding","kunstwetenschap","kunstgeschiedenis","kunstcollectie"],
     hint:"A training programme or course of study in the arts.",
     sSrc:"She is doing an {1} in graphic design."},

    {type:"match", pairs:[
      {trg:"kunstmatig", src:"artificial"},
      {trg:"kunstopleiding", src:"art programme"},
      {trg:"kunstwetenschap", src:"art science"},
      {trg:"kunstcollectie", src:"art collection"}
    ]},

    {type:"mc",
     q:"'De kunstwetenschap omvat ook theorie.' Wat betekent 'omvatten'?",
     opts:["Uitsluiten","Bevatten, inhouden","Verkopen","Vervalsen"],
     ans:"Bevatten, inhouden",
     hint:"To include or encompass. The subject covers more than just history."}
  ]
};
export default LESSON_1;
