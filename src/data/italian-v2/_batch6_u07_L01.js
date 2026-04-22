// Batch 6. Unit 07 extra lesson. Al ristorante: Kitchen & Cooking Vocabulary
const BATCH6_L1 = {id:"itv2_u07l_b6_1", title:"In cucina", icon:"\u{1F373}", xp:15, board:true, steps:[
{type:"intro", title:"In cucina",
 desc:"Learn vocabulary for kitchen tools, cooking methods, and describing food preparation in Italian.",
 goals:["Name common kitchen utensils and tools","Describe cooking methods","Talk about food preparation"]},

{type:"teach", trg:"la padella", src:"the frying pan", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le padelle.\nThe most essential Italian cooking tool.",
 example:"A: Scalda l'olio nella padella.\nB: Quanto olio metto?",
 exampleSrc:"A: Heat the oil in the frying pan.\nB: How much oil should I put?",
 funFact:"'Cadere dalla padella nella brace' (to fall from the frying pan into the embers) is the Italian version of 'out of the frying pan, into the fire.'"},

{type:"teach", trg:"la pentola", src:"the pot / saucepan", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pentole.\nUsed for boiling pasta, making soups.",
 example:"A: Metti l'acqua nella pentola grande.\nB: Per la pasta?",
 exampleSrc:"A: Put water in the big pot.\nB: For pasta?",
 funFact:"The expression 'qualcosa bolle in pentola' (something is boiling in the pot) means something is being plotted or planned in secret."},

{type:"teach", trg:"mescolare", src:"to stir / to mix", pos:"verb", gender:null,
 note:"Regular -are verb. mescolo, mescoli, mescola.\nUsed in cooking and for mixing drinks.",
 example:"A: Mescola il sugo ogni cinque minuti.\nB: Con il cucchiaio di legno?",
 exampleSrc:"A: Stir the sauce every five minutes.\nB: With the wooden spoon?",
 funFact:"'Non mescolare le carte' (do not mix the cards) means do not confuse the issue. Italians love cooking metaphors in everyday language."},

{type:"teach", trg:"tritare", src:"to chop / to mince", pos:"verb", gender:null,
 note:"Regular -are verb. trito, triti, trita.\nFinely cutting ingredients with a knife.",
 example:"A: Trita l'aglio e la cipolla.\nB: Fini o grossi?",
 exampleSrc:"A: Chop the garlic and the onion.\nB: Fine or coarse?",
 funFact:"'Soffritto' (the base of most Italian dishes) starts with 'tritare' onion, celery, and carrot. This holy trinity of Italian cooking is called 'il soffritto.'"},

{type:"teach", trg:"il tagliere", src:"the cutting board", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i taglieri.\nFrom 'tagliare' (to cut). Also a food serving board.",
 example:"A: Metti il formaggio sul tagliere.\nB: Con il salame?",
 exampleSrc:"A: Put the cheese on the cutting board.\nB: With the salami?",
 funFact:"A 'tagliere di salumi e formaggi' (charcuterie and cheese board) is a classic Italian appetizer, served as a shared plate before a meal."},

{type:"teach", trg:"bollire", src:"to boil", pos:"verb", gender:null,
 note:"Regular -ire verb. bollo, bolli, bolle.\nUsed for water, pasta, eggs, vegetables.",
 example:"A: L'acqua bolle! Butto la pasta?\nB: Si, e non dimenticare il sale.",
 exampleSrc:"A: The water is boiling! Shall I put in the pasta?\nB: Yes, and do not forget the salt.",
 funFact:"Italians say the water must reach a 'bollore vivace' (vigorous boil) before adding pasta. Lukewarm water is a culinary sin."},

{type:"teach", trg:"friggere", src:"to fry", pos:"verb", gender:null,
 note:"Irregular -ere verb. friggo, friggi, frigge.\nPast participle: fritto.",
 example:"A: Friggi le melanzane in olio di oliva.\nB: Si, devono diventare dorate.",
 exampleSrc:"A: Fry the eggplants in olive oil.\nB: Yes, they need to become golden.",
 funFact:"'Fritto' as an adjective means 'fried,' but colloquially 'sono fritto' means 'I am done for' or 'I am in big trouble.' Fried = finished."},

{type:"teach", trg:"il mestolo", src:"the ladle", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i mestoli.\nA large spoon for serving soups and sauces.",
 example:"A: Passami il mestolo per il brodo.\nB: Eccolo, stai attento che è caldo.",
 exampleSrc:"A: Pass me the ladle for the broth.\nB: Here it is, be careful, it is hot.",
 funFact:"'Mestolo' and 'mestola' are sometimes confused. The 'mestolo' is the soup ladle; the 'mestola' is a flat stirring utensil used by bricklayers too."},

{type:"teach", trg:"grattugiare", src:"to grate", pos:"verb", gender:null,
 note:"Regular -are verb. grattugio, grattugi, grattugia.\nUsed for cheese, lemon zest, nutmeg.",
 example:"A: Grattugia il parmigiano sulla pasta.\nB: Quanto ne metto?",
 exampleSrc:"A: Grate the parmesan on the pasta.\nB: How much should I put?",
 funFact:"Freshly grated Parmigiano-Reggiano is a non-negotiable in Italian kitchens. Pre-grated cheese in a shaker is considered an insult to the cheese."},

{type:"teach", trg:"la grattugia", src:"the grater", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le grattugie.\nThe tool used to grate cheese and zest.",
 example:"A: Dove la grattugia?\nB: Nel cassetto a sinistra.",
 exampleSrc:"A: Where is the grater?\nB: In the left drawer.",
 funFact:"Italian graters range from the small 'grattugia a mano' to large professional ones. A proper Italian kitchen always has one dedicated to Parmigiano."},

{type:"teach", trg:"scolare", src:"to drain", pos:"verb", gender:null,
 note:"Regular -are verb. scolo, scoli, scola.\nUsed for draining pasta water, liquid from food.",
 example:"A: Scola la pasta al dente!\nB: Si, prendo lo scolapasta.",
 exampleSrc:"A: Drain the pasta when it is al dente!\nB: Yes, I will get the colander.",
 funFact:"Some Italians save a cup of pasta water ('acqua di cottura') before draining. The starchy water helps bind sauces to the pasta."},

{type:"teach", trg:"lo scolapasta", src:"the colander", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scolapasta (invariable).\nCompound: scola (drains) + pasta.",
 example:"A: Lo scolapasta e nel mobile sotto il lavandino.\nB: L'ho trovato!",
 exampleSrc:"A: The colander is in the cabinet under the sink.\nB: I found it!",
 funFact:"The scolapasta is so iconic in Italian kitchens that a pasta-related emoji was recently added to Unicode with Italian campaigning. Every kitchen has one."},

{type:"teach", trg:"il grembiule", src:"the apron", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i grembiuli.\nWorn while cooking or by schoolchildren.",
 example:"A: Metti il grembiule o ti sporchi.\nB: Hai ragione, cucino sempre un disastro.",
 exampleSrc:"A: Put on the apron or you will get dirty.\nB: You are right, I always cook a disaster.",
 funFact:"Italian schoolchildren traditionally wear a 'grembiule' (school apron) in elementary school, blue for boys and white/pink for girls in many regions."},

{type:"teach", trg:"il coperchio", src:"the lid / cover", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i coperchi.\nUsed for pots, pans, jars.",
 example:"A: Metti il coperchio sulla pentola.\nB: Cosi l'acqua bolle più veloce.",
 exampleSrc:"A: Put the lid on the pot.\nB: That way the water boils faster.",
 funFact:"'Ogni pentola ha il suo coperchio' (every pot has its lid) is the Italian way of saying there is someone for everyone, a charming cooking metaphor."},

{type:"mc", q:"Cosa usi per scolare la pasta?",
 opts:["lo scolapasta","la padella","il mestolo","la grattugia"],
 ans:"lo scolapasta",
 hint:"A bowl-shaped tool with holes that lets water drain out."},

{type:"fb", s:"{1} il parmigiano sulla pasta, per favore.", a:["Grattugia"],
 opts:["Grattugia","Mescola","Scola","Trita"],
 hint:"To reduce cheese to small shreds using a grater.",
 sSrc:"{1} the parmesan on the pasta, please."},

{type:"match", pairs:[
 {trg:"la padella", src:"frying pan"},
 {trg:"la pentola", src:"pot"},
 {trg:"il mestolo", src:"ladle"},
 {trg:"il tagliere", src:"cutting board"}
]},

{type:"mc", q:"Cosa devi fare prima di buttare la pasta nell'acqua?",
 opts:["Scolare la pentola","Aspettare che l'acqua bolla","Tritare la cipolla","Mescolare il sugo"],
 ans:"Aspettare che l'acqua bolla",
 hint:"The water needs to reach a vigorous rolling state first."},

{type:"fb", s:"Metti il {1} sulla pentola così l'acqua bolle più veloce.", a:["coperchio"],
 opts:["coperchio","grembiule","tagliere","mestolo"],
 hint:"The top piece that covers the pot to trap heat.",
 sSrc:"Put the {1} on the pot so the water boils faster."},

{type:"mc", q:"Cosa significa 'sono fritto' in italiano colloquiale?",
 opts:["I am cooking","I am tired","I am in big trouble","I am hungry"],
 ans:"I am in big trouble",
 hint:"Literally 'I am fried,' but used to mean you are done for."},

{type:"fb", s:"{1} l'aglio e la cipolla per il soffritto.", a:["Trita"],
 opts:["Trita","Bolli","Scola","Mescola"],
 hint:"To finely chop ingredients with a knife, the first step for soffritto.",
 sSrc:"{1} the garlic and onion for the soffritto."},

{type:"match", pairs:[
 {trg:"bollire", src:"to boil"},
 {trg:"friggere", src:"to fry"},
 {trg:"mescolare", src:"to stir"},
 {trg:"scolare", src:"to drain"}
]}
,{type:"match",pairs:[{trg:"il grembiule",src:"the apron"}]}]};
export default BATCH6_L1;
