// L18: More Descriptions and States, 20 A1 gap words
const LESSON_18 = {
  id:"nlv2_a1gap_l18", title:"Meer Beschrijvingen", icon:"\u{1F50D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"More Descriptions and States",
     desc:"Learn more Dutch adjectives for describing things, people, and states. Same or different, open or closed, own or other.",
     goals:["Master 20 descriptive words","Compare things using dezelfde/hetzelfde","Express ownership and states"]},

    {type:"teach", trg:"dezelfde", src:"the same (de-word)", pos:"adj", gender:null,
     note:"Used with de-words. For het-words use 'hetzelfde'.",
     example:"A: We hebben dezelfde jas!\nB: Grappig! Dezelfde kleur ook.",
     exampleSrc:"A: We have the same coat!\nB: Funny! The same color too.",
     funFact:"De + zelfde (self/same). Changes to 'hetzelfde' with het-nouns."},

    {type:"teach", trg:"hetzelfde", src:"the same (het-word)", pos:"adj", gender:null,
     note:"Used with het-words. For de-words use 'dezelfde'.",
     example:"A: Dat is hetzelfde boek!\nB: Ja, ik heb het ook gelezen.",
     exampleSrc:"A: That's the same book!\nB: Yes, I read it too.",
     funFact:"Het + zelfde. Dutch distinguishes de/het even in 'the same'. Tricky for learners!"},

    {type:"teach", trg:"ander", src:"other / different", pos:"adj", gender:null,
     note:"'Een ander' = another. 'De andere' = the other.",
     example:"A: Heb je een ander idee?\nB: Ja, laten we naar het park gaan.",
     exampleSrc:"A: Do you have another idea?\nB: Yes, let's go to the park.",
     funFact:"Cognate with English 'other' and German 'ander'. Same root."},

    {type:"teach", trg:"eigen", src:"own", pos:"adj", gender:null,
     note:"Possessive adjective. 'Mijn eigen huis' = my own house.",
     example:"A: Ik heb mijn eigen kamer.\nB: Wat fijn!",
     exampleSrc:"A: I have my own room.\nB: How nice!",
     funFact:"Cognate with English 'own' (old form 'aegen'). Same Germanic root."},

    {type:"mc",
     q:"We hebben ___ boek. (het-woord, 'the same')",
     opts:["hetzelfde","dezelfde","andere","eigen"],
     ans:"hetzelfde",
     hint:"Which form of 'the same' is used with het-words like 'boek'?"},

    {type:"teach", trg:"dicht bij", src:"close to / near", pos:"adj", gender:null,
     note:"Compound expression. 'Dicht bij' + location.",
     example:"A: Woon je dicht bij het station?\nB: Ja, vijf minuten lopen.",
     exampleSrc:"A: Do you live close to the station?\nB: Yes, five minutes walking.",
     funFact:"'Dicht' (closed/tight) + 'bij' (by/at). Tightly by = close to."},

    {type:"teach", trg:"het ding", src:"the thing", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: dingen. Very general word.",
     example:"A: Wat is dat voor ding?\nB: Geen idee!",
     exampleSrc:"A: What kind of thing is that?\nB: No idea!",
     funFact:"Cognate with English 'thing'. Same word, same meaning, same root."},

    {type:"teach", trg:"het antwoord", src:"the answer", pos:"noun", gender:"n",
     note:"Neuter noun (het). 'Antwoord geven' = to give an answer.",
     example:"A: Wat is het antwoord?\nB: Ik weet het niet!",
     exampleSrc:"A: What is the answer?\nB: I don't know!",
     funFact:"Cognate with English 'answer' (old form 'andswaru'). Same root."},

    {type:"teach", trg:"het lokaal", src:"the room / premises", pos:"noun", gender:"n",
     note:"Neuter noun (het). A room for a specific purpose.",
     example:"A: In welk lokaal is de les?\nB: Lokaal 205.",
     exampleSrc:"A: In which room is the class?\nB: Room 205.",
     funFact:"From Latin 'localis'. In schools, rooms are called 'lokalen'."},

    {type:"teach", trg:"het bedrijf", src:"the company", pos:"noun", gender:"n",
     note:"Neuter noun (het). Already covered in L15 but key vocab.",
     example:"A: Het is een groot bedrijf.\nB: Ja, met honderd werknemers.",
     exampleSrc:"A: It is a big company.\nB: Yes, with a hundred employees.",
     funFact:"The Netherlands hosts many multinational headquarters (Shell, Unilever, Philips)."},

    {type:"fb",
     s:"We hebben {1} kleur jas. Grappig!",
     a:["dezelfde"],
     opts:["dezelfde","hetzelfde","andere","eigen"],
     hint:"Which form means 'the same' for a de-word like 'kleur'?",
     sSrc:"We have the {1} color coat. Funny!"},

    {type:"teach", trg:"de loop", src:"the course / walk", pos:"noun", gender:"c",
     note:"Common gender (de). 'In de loop van' = in the course of.",
     example:"A: In de loop van de week bel ik je.\nB: Oké, ik wacht.",
     exampleSrc:"A: In the course of the week I'll call you.\nB: Okay, I'll wait.",
     funFact:"From 'lopen' (to walk). The 'walk/course' of time or events."},

    {type:"teach", trg:"het leven", src:"the life", pos:"noun", gender:"n",
     note:"Neuter noun (het). Both 'life' and the verb 'to live'.",
     example:"A: Het leven is goed.\nB: Ja, zeker hier in Nederland!",
     exampleSrc:"A: Life is good.\nB: Yes, especially here in the Netherlands!",
     funFact:"Cognate with English 'life/live'. 'Leven' as verb: Ik leef, jij leeft."},

    {type:"teach", trg:"de hond", src:"the dog", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: honden.",
     example:"A: Heb je een hond?\nB: Ja, ik heb een hond.",
     exampleSrc:"A: Do you have a dog?\nB: Yes, I have a dog.",
     funFact:"Cognate with English 'hound'. The Dutch love dogs: many dog-friendly cafes."},

    {type:"teach", trg:"de kat", src:"the cat", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: katten.",
     example:"A: De kat slaapt op de bank.\nB: Typisch, katten slapen veel!",
     exampleSrc:"A: The cat is sleeping on the couch.\nB: Typical, cats sleep a lot!",
     funFact:"Cognate with English 'cat'. Same word in many Germanic languages."},

    {type:"mc",
     q:"Dat is mijn ___ kamer. Niemand anders mag erin.",
     opts:["dichte","eigen","andere","dezelfde"],
     ans:"eigen",
     hint:"Which adjective means 'own', indicating personal possession?"},

    {type:"teach", trg:"de beet", src:"the bite", pos:"noun", gender:"c",
     note:"Common gender (de). From 'bijten' (to bite).",
     example:"A: De hond heeft een beet gegeven.\nB: Is alles goed?",
     exampleSrc:"A: The dog gave a bite.\nB: Is everything okay?",
     funFact:"Cognate with English 'bite'. From the verb 'bijten' (to bite)."},

    {type:"teach", trg:"de kus", src:"the kiss", pos:"noun", gender:"c",
     note:"Common gender (de). The Dutch greet with three kisses.",
     example:"A: Ze gaf hem een kus.\nB: Wat romantisch!",
     exampleSrc:"A: She gave him a kiss.\nB: How romantic!",
     funFact:"The Dutch give three kisses on alternating cheeks as a greeting. Not two, three!"},

    {type:"teach", trg:"blaffen", src:"to bark", pos:"verb", gender:null,
     note:"Regular verb. Ik blaf, jij blaft. What dogs do.",
     example:"A: De hond blaft heel hard.\nB: Ja, er is iemand aan de deur.",
     exampleSrc:"A: The dog is barking very loudly.\nB: Yes, someone is at the door.",
     funFact:"Onomatopoeia. The Dutch say dogs go 'waf waf', not 'woof woof'."},

    {type:"teach", trg:"de bewoner", src:"the resident", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who lives in a place.",
     example:"A: De bewoners zijn niet thuis.\nB: Probeer het later nog eens.",
     exampleSrc:"A: The residents are not home.\nB: Try again later.",
     funFact:"From 'bewonen' (to inhabit). 'De bewoner' = the one who dwells there."},

    {type:"match", pairs:[
      {trg:"dezelfde", src:"the same (de-word)"},
      {trg:"hetzelfde", src:"the same (het-word)"},
      {trg:"eigen", src:"own"},
      {trg:"ander", src:"other"}
    ]}
  ]
};
export default LESSON_18;
