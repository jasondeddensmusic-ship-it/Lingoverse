// Dutch B2 gapB Lesson 13. Dieren en Natuur
// Animals, nature, and wildlife vocabulary

const LESSON_13 = {id:"nlv2_b2gB_l13", title:"Dieren en Natuur", icon:"\u{1F426}", xp:25, board:true, steps:[
{type:"intro", title:"Dieren en Natuur",
 desc:"The Netherlands may be small, but it has rich wildlife and nature vocabulary. From farm animals to exotic species, learn the words that describe the natural world.",
 goals:["8 animal and nature nouns","Discuss wildlife and nature in Dutch","Understand Dutch animal-related expressions"]},

{type:"teach", trg:"de krokodil", src:"crocodile", pos:"noun", gender:"c",
 note:"Same origin as English. Not native to the Netherlands.\n'Krokodillentranen' = crocodile tears.",
 example:"A: Heb je de krokodil in de dierentuin gezien?\nB: Ja, indrukwekkend beest.\nA: Hij lag helemaal stil.\nB: Maar hij kan razendsnel bewegen.",
 exampleSrc:"A: Did you see the crocodile at the zoo?\nB: Yes, impressive animal.\nA: It was completely still.\nB: But it can move incredibly fast.",
 funFact:"The expression 'krokodillentranen huilen' (to cry crocodile tears) means to show fake sadness, same as in English."},

{type:"teach", trg:"het kuiken", src:"chick / baby bird", pos:"noun", gender:"n",
 note:"A young bird, especially a chicken.\n'Spring chicken' = jonge snaak (expression).",
 example:"A: Kijk, het kuiken komt uit het ei!\nB: Wat lief! Zo klein nog.\nA: Over zes weken is het een kip.\nB: Ze groeien zo snel.",
 exampleSrc:"A: Look, the chick is coming out of the egg!\nB: How sweet! So tiny still.\nA: In six weeks it'll be a chicken.\nB: They grow so fast.",
 funFact:"The Dutch expression 'geen kuiken kwaad doen' (wouldn't hurt a chick) means someone is completely harmless and gentle."},

{type:"teach", trg:"de kaper", src:"privateer / pirate", pos:"noun", gender:"c",
 note:"A licensed pirate (historical). Also: someone who steals customers.\n'Kapersbrief' = letter of marque.",
 example:"A: De kapers waren legale piraten.\nB: Ze werkten voor de regering?\nA: Ja, met een kapersbrief.\nB: Handig, piraterij met een vergunning.",
 exampleSrc:"A: Privateers were legal pirates.\nB: They worked for the government?\nA: Yes, with a letter of marque.\nB: Convenient, piracy with a permit.",
 funFact:"Dutch 'kapers' like Piet Hein captured the Spanish Silver Fleet in 1628, one of the greatest naval prizes in history."},

{type:"teach", trg:"de klarinet", src:"clarinet", pos:"noun", gender:"c",
 note:"A woodwind instrument.\n'De klarinettist' = the clarinet player.",
 example:"A: Speel je nog klarinet?\nB: Ja, elke week repetitie bij het orkest.\nA: Leuk! Welk stuk spelen jullie nu?\nB: Mozart, een concert voor klarinet.",
 exampleSrc:"A: Do you still play clarinet?\nB: Yes, rehearsal every week with the orchestra.\nA: Nice! What piece are you playing now?\nB: Mozart, a concerto for clarinet.",
 funFact:"The Netherlands has an exceptionally rich wind band tradition. Nearly every town has a 'harmonie' or 'fanfare' band."},

{type:"teach", trg:"de klokslag", src:"stroke of the clock / on the dot", pos:"noun", gender:"c",
 note:"Klok (clock) + slag (stroke).\n'Om klokslag twaalf' = at the stroke of twelve.",
 example:"A: We beginnen om klokslag negen.\nB: Geen minuut later?\nA: Nee, stipt op tijd.\nB: Typisch Nederlands.",
 exampleSrc:"A: We start at the stroke of nine.\nB: Not a minute later?\nA: No, right on time.\nB: Typically Dutch.",
 funFact:"Dutch punctuality is legendary. Arriving even five minutes late to a meeting is considered disrespectful."},

{type:"teach", trg:"de klos", src:"spool / reel (also: the one who gets the short end)", pos:"noun", gender:"c",
 note:"Literal: a spool for thread.\nFigurative: 'de klos zijn' = to be the victim/sucker.",
 example:"A: Wie is er nu weer de klos?\nB: Ik, zoals altijd.\nA: Dat is niet eerlijk.\nB: Nee, maar zo gaat het vaak.",
 exampleSrc:"A: Who's the victim again this time?\nB: Me, as always.\nA: That's not fair.\nB: No, but that's how it often goes.",
 funFact:"'De klos zijn' is a very common Dutch expression. The origin may be from games where the losing player gets 'wound up' on a spool."},

{type:"teach", trg:"de kraal", src:"bead / kraal (South African enclosure)", pos:"noun", gender:"c",
 note:"Double meaning: a bead for jewelry, or a livestock enclosure (from Afrikaans).",
 example:"A: Ze maakt sieraden van kralen.\nB: Wat mooi! Allemaal handgemaakt?\nA: Ja, elke kraal is uniek.\nB: Dat is echt kunstwerk.",
 exampleSrc:"A: She makes jewelry from beads.\nB: How beautiful! All handmade?\nA: Yes, every bead is unique.\nB: That's real artwork.",
 funFact:"The word 'kraal' in its sense of an enclosure traveled from Dutch to Afrikaans to English, a rare linguistic round trip."},

{type:"teach", trg:"de kruising", src:"crossroads / crossbreed", pos:"noun", gender:"c",
 note:"From 'kruisen' (to cross).\nBoth traffic and biology. 'Een kruising van...' = a cross between...",
 example:"A: De kruising bij het station is gevaarlijk.\nB: Ja, er zijn veel ongelukken.\nA: Die hond is een kruising van twee rassen.\nB: Dat zie je aan zijn vacht.",
 exampleSrc:"A: The crossroads near the station is dangerous.\nB: Yes, there are many accidents.\nA: That dog is a crossbreed of two breeds.\nB: You can see that from his coat.",
 funFact:"Dutch 'kruisingen' (crossroads) are often roundabouts. The Netherlands has more roundabouts per capita than almost any country."},

{type:"mc", q:"'Krokodillentranen huilen' betekent:",
 opts:["To show fake sadness","To be scared of crocodiles","To cry very loudly","To cry from pain"],
 ans:"To show fake sadness",
 hint:"Same expression as in English: tears that aren't genuine"},

{type:"fb", s:"We beginnen om {1} negen uur, geen minuut later.",
 a:["klokslag"], opts:["klokslag","kruising","klos","kaper"],
 hint:"The word meaning 'at the stroke of' the clock, exactly on time",
 sSrc:"We start at {1} nine o'clock, not a minute later."},

{type:"mc", q:"'De klos zijn' betekent:",
 opts:["To win the prize","To be the victim or sucker","To be the boss","To be late"],
 ans:"To be the victim or sucker",
 hint:"The person who gets the short end of the stick, the unlucky one"},

{type:"fb", s:"Het {1} komt uit het ei!",
 a:["kuiken"], opts:["kuiken","krokodil","kaper","korrel"],
 hint:"The baby bird hatching from its egg",
 sSrc:"The {1} is coming out of the egg!"},

{type:"match", pairs:[
 {trg:"de krokodil", src:"crocodile"},
 {trg:"het kuiken", src:"chick"},
 {trg:"de kaper", src:"privateer"},
 {trg:"de klarinet", src:"clarinet"}
]},

{type:"mc", q:"'Een kruising' kan zijn:",
 opts:["Only a crossroads","Only a crossbreed","Both a crossroads and a crossbreed","A type of bridge"],
 ans:"Both a crossroads and a crossbreed",
 hint:"From 'kruisen' (to cross). Applies to roads and to mixing breeds."},

{type:"fb", s:"Ze maakt sieraden van {1}.",
 a:["kralen"], opts:["kralen","kuikens","kapers","korrels"],
 hint:"Small decorative balls used in jewelry making",
 sSrc:"She makes jewelry from {1}."},

{type:"match", pairs:[
 {trg:"de klokslag", src:"stroke of the clock"},
 {trg:"de klos", src:"spool / victim"},
 {trg:"de kraal", src:"bead"},
 {trg:"de kruising", src:"crossroads / crossbreed"}
]}
]};
export default LESSON_13;
