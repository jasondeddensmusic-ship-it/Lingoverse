// Dutch B2 gapB Lesson 05. Koloniaal Verleden
// Colonial history and heritage vocabulary

const LESSON_5 = {id:"nlv2_b2gB_l5", title:"Koloniaal Verleden", icon:"\u{1F30D}", xp:25, board:true, steps:[
{type:"intro", title:"Koloniaal Verleden",
 desc:"The Netherlands has a complex colonial past that still influences society today. Learn the vocabulary to discuss this important historical and cultural topic.",
 goals:["8 colonial history and trade nouns","Discuss Dutch colonial heritage","Understand vocabulary around historical trade and migration"]},

{type:"teach", trg:"het kolonialisme", src:"colonialism", pos:"noun", gender:"n",
 note:"From 'koloniaal' (colonial).\n'Het koloniale verleden' = the colonial past.",
 example:"A: Het kolonialisme heeft diepe sporen nagelaten.\nB: Ja, in veel landen is dat nog voelbaar.\nA: Nederland speelde een grote rol.\nB: Dat moeten we eerlijk onder ogen zien.",
 exampleSrc:"A: Colonialism has left deep traces.\nB: Yes, in many countries that is still felt.\nA: The Netherlands played a major role.\nB: We need to face that honestly.",
 funFact:"The Dutch colonial empire was the third largest in the world, spanning from Indonesia to Suriname to South Africa."},

{type:"teach", trg:"de kolonisatie", src:"colonization", pos:"noun", gender:"c",
 note:"The process of establishing colonies.\n'Koloniseren' = to colonize.",
 example:"A: De kolonisatie begon in de zeventiende eeuw.\nB: Met de VOC, toch?\nA: Ja, maar het ging verder dan handel.\nB: Het had enorme gevolgen voor de lokale bevolking.",
 exampleSrc:"A: Colonization began in the seventeenth century.\nB: With the VOC, right?\nA: Yes, but it went further than trade.\nB: It had enormous consequences for the local population.",
 funFact:"The VOC (Dutch East India Company, 1602-1799) was the first multinational corporation and first to issue stock."},

{type:"teach", trg:"de handelsposten", src:"trading posts", pos:"noun", gender:"c",
 note:"Handels (trade) + posten (posts).\nSingular: de handelspost. Key to Dutch colonial trade.",
 example:"A: De Nederlanders hadden overal handelsposten.\nB: Van Japan tot Afrika.\nA: Het ging vooral om specerijen.\nB: En later om suiker en tabak.",
 exampleSrc:"A: The Dutch had trading posts everywhere.\nB: From Japan to Africa.\nA: It was mainly about spices.\nB: And later sugar and tobacco.",
 funFact:"The Dutch trading post on Dejima island in Japan was the only European contact point with Japan for over 200 years."},

{type:"teach", trg:"de katoenplantage", src:"cotton plantation", pos:"noun", gender:"c",
 note:"Katoen (cotton) + plantage (plantation).\nLinked to the history of slavery in Suriname.",
 example:"A: De katoenplantages draaiden op slavenarbeid.\nB: Een donker hoofdstuk uit de geschiedenis.\nA: De gevolgen zijn nog steeds voelbaar.\nB: Daarom is het belangrijk om erover te praten.",
 exampleSrc:"A: The cotton plantations ran on slave labor.\nB: A dark chapter in history.\nA: The consequences are still felt today.\nB: That's why it's important to talk about it.",
 funFact:"Suriname had over 600 plantations at the height of Dutch colonial exploitation, producing sugar, coffee, cotton, and cacao."},

{type:"teach", trg:"de koffieplantage", src:"coffee plantation", pos:"noun", gender:"c",
 note:"Koffie + plantage.\nDutch coffee culture has colonial roots.",
 example:"A: De koffieplantages lagen in Indonesie.\nB: Daar komt de naam Java-koffie vandaan.\nA: Ik drink het elke dag zonder erbij na te denken.\nB: Die geschiedenis is goed om te kennen.",
 exampleSrc:"A: The coffee plantations were in Indonesia.\nB: That's where the name Java coffee comes from.\nA: I drink it every day without thinking about it.\nB: That history is good to know.",
 funFact:"The Dutch introduced coffee cultivation to Indonesia in the 1600s. 'Java' became synonymous with coffee worldwide because of Dutch trade."},

{type:"teach", trg:"de immigrantenstromen", src:"immigration flows", pos:"noun", gender:"c",
 note:"Immigranten + stromen (flows/streams).\nUsed in policy and news discussions.",
 example:"A: De immigrantenstromen zijn toegenomen.\nB: Dat zet druk op de voorzieningen.\nA: Maar het brengt ook veel cultuur.\nB: Het is een genuanceerd verhaal.",
 exampleSrc:"A: Immigration flows have increased.\nB: That puts pressure on public services.\nA: But it also brings a lot of culture.\nB: It's a nuanced story.",
 funFact:"Post-colonial immigration from Indonesia, Suriname, and the Antilles shaped modern Dutch multicultural society."},

{type:"teach", trg:"het kompas", src:"compass", pos:"noun", gender:"n",
 note:"Het kompas. Essential tool for Dutch seafarers.\n'Het morele kompas' = moral compass.",
 example:"A: Zonder kompas waren de zeereizen onmogelijk.\nB: Het was de belangrijkste uitvinding voor navigatie.\nA: Nu gebruiken we GPS.\nB: Maar het kompas werkt altijd, zonder batterij.",
 exampleSrc:"A: Without a compass, sea voyages were impossible.\nB: It was the most important invention for navigation.\nA: Now we use GPS.\nB: But the compass always works, without batteries.",
 funFact:"Dutch cartographers like Mercator and Blaeu created the most accurate world maps of their era, essential for navigation."},

{type:"teach", trg:"de kruidnagel", src:"clove (spice)", pos:"noun", gender:"c",
 note:"Kruid (herb/spice) + nagel (nail, from the shape).\nOne of the spices driving the VOC trade.",
 example:"A: Kruidnagel was vroeger meer waard dan goud.\nB: Echt waar? Waarom?\nA: Het groeide alleen op een paar eilanden.\nB: Daarom vochten landen erom.",
 exampleSrc:"A: Cloves used to be worth more than gold.\nB: Really? Why?\nA: They only grew on a few islands.\nB: That's why countries fought over them.",
 funFact:"The Dutch fought bloody wars over the Banda Islands (modern Indonesia) to monopolize the nutmeg and clove trade."},

{type:"mc", q:"'De VOC' was:",
 opts:["The Dutch East India Company","A type of ship","A colonial governor","A Dutch airline"],
 ans:"The Dutch East India Company",
 hint:"The famous trading c... that started D... colonialism in Asia"},

{type:"fb", s:"De {1} begon in de zeventiende eeuw met de VOC.",
 a:["kolonisatie"], opts:["kolonisatie","koffieplantage","kruidnagel","kompas"],
 hint:"The process of establishing colonies in other lands",
 sSrc:"The {1} began in the seventeenth century with the VOC."},

{type:"mc", q:"'De kruidnagel' is:",
 opts:["A trading route","A spice shaped like a nail","A colonial weapon","A type of ship"],
 ans:"A spice shaped like a nail",
 hint:"Kruid (s...) + nagel (n...). One of the precious spices from the East."},

{type:"fb", s:"De Nederlanders hadden overal {1} voor de specerijenhandel.",
 a:["handelsposten"], opts:["handelsposten","immigrantenstromen","katoenplantages","kruidnagels"],
 hint:"The establishments where Dutch traders operated in foreign lands",
 sSrc:"The Dutch had {1} everywhere for the spice trade."},

{type:"match", pairs:[
 {trg:"het kolonialisme", src:"colonialism"},
 {trg:"de kolonisatie", src:"colonization"},
 {trg:"de handelsposten", src:"trading posts"},
 {trg:"de katoenplantage", src:"cotton plantation"}
]},

{type:"mc", q:"'Java-koffie' dankt zijn naam aan:",
 opts:["The Java programming language","A Dutch merchant named Java","The Indonesian island where Dutch plantations were","A type of coffee bean"],
 ans:"The Indonesian island where Dutch plantations were",
 hint:"The D... grew coffee on this famous I... i..."},

{type:"fb", s:"Het {1} heeft diepe sporen nagelaten in de samenleving.",
 a:["kolonialisme"], opts:["kolonialisme","kompas","krantenpapier","kroost"],
 hint:"The system of establishing rule over other peoples and territories",
 sSrc:"{1} has left deep traces in society."},

{type:"match", pairs:[
 {trg:"de koffieplantage", src:"coffee plantation"},
 {trg:"de immigrantenstromen", src:"immigration flows"},
 {trg:"het kompas", src:"compass"},
 {trg:"de kruidnagel", src:"clove"}
]}
]};
export default LESSON_5;
