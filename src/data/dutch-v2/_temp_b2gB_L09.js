// Dutch B2 gapB Lesson 09 — Verborgen Werkwoorden
// Less common but useful verbs from the gap list

const LESSON_9 = {id:"nlv2_b2gB_l9", title:"Verborgen Werkwoorden", icon:"\u{1F4AC}", xp:25, board:true, steps:[
{type:"intro", title:"Verborgen Werkwoorden",
 desc:"Beyond the basics, Dutch has many expressive verbs for everyday actions. These verbs add color and precision to your speech.",
 goals:["8 expressive Dutch verbs","Use specific verbs instead of generic ones","Understand informal and dialectal verbs"]},

{type:"teach", trg:"knabbelen", src:"to nibble / to snack", pos:"verb", gender:null,
 note:"Light, repeated biting. Often on snacks.\n'Op een koekje knabbelen' = to nibble on a cookie.",
 example:"A: Wat zit je te knabbelen?\nB: Nootjes. Wil je ook?\nA: Lekker. Ik knabbel de hele avond.\nB: Pas op, dan is de zak zo leeg.",
 exampleSrc:"A: What are you nibbling on?\nB: Nuts. Want some?\nA: Nice. I've been nibbling all evening.\nB: Watch out, the bag will be empty soon.",
 funFact:"Dutch has a rich vocabulary for eating sounds: knabbelen (nibble), knagen (gnaw), kauwen (chew), smakken (smack lips)."},

{type:"teach", trg:"knagen", src:"to gnaw / to nag (figuratively)", pos:"verb", gender:null,
 note:"Stronger than 'knabbelen'. Also figurative: 'het knaagt aan me' = it eats at me.",
 example:"A: De hond knaagt op een bot.\nB: Dat is goed voor zijn tanden.\nA: Er knaagt iets aan me.\nB: Wat is er? Wil je erover praten?",
 exampleSrc:"A: The dog is gnawing on a bone.\nB: That's good for his teeth.\nA: Something is nagging at me.\nB: What's wrong? Do you want to talk about it?",
 funFact:"The figurative use of 'knagen' is very common: 'het knaagt aan je geweten' means it gnaws at your conscience."},

{type:"teach", trg:"klaren", src:"to manage / to handle / to clear", pos:"verb", gender:null,
 note:"'De klus klaren' = to get the job done.\n'Het weer klaart op' = the weather is clearing up.",
 example:"A: Denk je dat we dit kunnen klaren?\nB: Ja, als we samenwerken.\nA: We moeten het vandaag af hebben.\nB: Dan gaan we er meteen mee aan de slag.",
 exampleSrc:"A: Do you think we can manage this?\nB: Yes, if we work together.\nA: We need to have it done today.\nB: Then let's get started right away.",
 funFact:"'De klus klaren' is one of the most satisfying Dutch expressions, used when a tough job is finally done."},

{type:"teach", trg:"kleven", src:"to stick / to adhere", pos:"verb", gender:null,
 note:"Both literal and figurative.\n'Er kleeft een risico aan' = there's a risk attached to it.",
 example:"A: De sticker kleeft niet meer.\nB: Gebruik dan lijm.\nA: Er kleeft een nadeel aan dit plan.\nB: Welk nadeel bedoel je?",
 exampleSrc:"A: The sticker doesn't stick anymore.\nB: Then use glue.\nA: There's a downside to this plan.\nB: Which downside do you mean?",
 funFact:"The figurative 'kleven' is common in news and politics: 'Er kleeft een imagoprobleem aan de partij' (a reputation problem sticks to the party)."},

{type:"teach", trg:"koersen", src:"to head toward / to steer a course", pos:"verb", gender:null,
 note:"From 'koers' (course/direction).\nAlso: stock market prices moving.",
 example:"A: We koersen af op een conflict.\nB: Dat moeten we voorkomen.\nA: De economie koerst richting herstel.\nB: Dat is goed nieuws.",
 exampleSrc:"A: We're heading toward a conflict.\nB: We need to prevent that.\nA: The economy is heading toward recovery.\nB: That's good news.",
 funFact:"'Koersen' comes from nautical Dutch, where a ship follows a course. It is now used for any directional movement, including financial markets."},

{type:"teach", trg:"kakelen", src:"to cackle / to chatter", pos:"verb", gender:null,
 note:"Originally: the sound chickens make.\nNow: to chatter non-stop (often mildly negative).",
 example:"A: Die twee zitten de hele dag te kakelen.\nB: Laat ze toch, het is pauze.\nA: Ze kakelen als kippen.\nB: Maar het klinkt wel gezellig.",
 exampleSrc:"A: Those two have been chattering all day.\nB: Let them be, it's break time.\nA: They cackle like chickens.\nB: But it does sound cozy.",
 funFact:"'Kakelen' is mildly dismissive but rarely mean. It implies non-stop talking about trivial things, like hens in a chicken coop."},

{type:"teach", trg:"kleineren", src:"to belittle / to diminish", pos:"verb", gender:null,
 note:"From 'klein' (small). To make someone feel small.\n'Vernederd' = humiliated.",
 example:"A: Je moet mensen niet kleineren.\nB: Dat was niet mijn bedoeling.\nA: Het kwam wel zo over.\nB: Sorry, ik zal beter opletten.",
 exampleSrc:"A: You shouldn't belittle people.\nB: That wasn't my intention.\nA: That's how it came across.\nB: Sorry, I'll be more careful.",
 funFact:"Dutch directness can sometimes cross the line into 'kleineren'. Learning the difference is a key social skill in the Netherlands."},

{type:"teach", trg:"klef", src:"clammy / clingy / sticky (informal)", pos:"adj", gender:null,
 note:"Describes both physical stickiness and overly clingy behavior.\n'Klef weer' = muggy weather.",
 example:"A: Het is klef weer vandaag.\nB: Ja, ik plak aan alles.\nA: Die film was ook een beetje klef.\nB: Te romantisch, vond je?",
 exampleSrc:"A: It's muggy weather today.\nB: Yes, I'm sticking to everything.\nA: That movie was also a bit corny.\nB: Too romantic, you think?",
 funFact:"'Klef' is the perfect Dutch word for when something is uncomfortably sticky, whether it is the weather, bread, or a sappy movie."},

{type:"mc", q:"'Knagen' verschilt van 'knabbelen' doordat het:",
 opts:["Softer and gentler","Stronger and also used figuratively","Only for animals","A synonym for eating"],
 ans:"Stronger and also used figuratively",
 hint:"A dog gnaws a bone, a worry gnaws at your conscience"},

{type:"fb", s:"Die twee zitten de hele dag te {1}.",
 a:["kakelen"], opts:["kakelen","knagen","klaren","koersen"],
 hint:"To chatter non-stop, like chickens in a coop",
 sSrc:"Those two have been {1} all day."},

{type:"mc", q:"'De klus klaren' betekent:",
 opts:["To start a job","To quit a job","To get the job done","To find a job"],
 ans:"To get the job done",
 hint:"Klaren means to handle or manage. When the job is done, you've 'cleared' it."},

{type:"fb", s:"Er {1} een risico aan dit voorstel.",
 a:["kleeft"], opts:["kleeft","koerst","knaagt","kakeldt"],
 hint:"To stick or adhere, used figuratively for a disadvantage attached to something",
 sSrc:"There's a risk {1} to this proposal."},

{type:"match", pairs:[
 {trg:"knabbelen", src:"to nibble"},
 {trg:"knagen", src:"to gnaw"},
 {trg:"klaren", src:"to manage"},
 {trg:"kleven", src:"to stick"}
]},

{type:"mc", q:"'Klef' kan beschrijven:",
 opts:["Only food","Only weather","Weather, food, and sappy behavior","Only romantic movies"],
 ans:"Weather, food, and sappy behavior",
 hint:"It describes anything uncomfortably sticky, whether literal or figurative"},

{type:"fb", s:"Je moet mensen niet {1}.",
 a:["kleineren"], opts:["kleineren","kakelen","knabbelen","koersen"],
 hint:"To make someone feel small, to belittle them",
 sSrc:"You shouldn't {1} people."},

{type:"match", pairs:[
 {trg:"koersen", src:"to head toward"},
 {trg:"kakelen", src:"to chatter"},
 {trg:"kleineren", src:"to belittle"},
 {trg:"klef", src:"clammy / clingy"}
]}
]};
export default LESSON_9;
