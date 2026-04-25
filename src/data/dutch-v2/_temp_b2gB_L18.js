// Dutch B2 gapB Lesson 18. Sport en Vrije Tijd
// Sports, leisure, and recreation vocabulary

const LESSON_18 = {id:"nlv2_b2gB_l18", title:"Sport en Vrije Tijd", icon:"\u{26BD}", xp:25, board:true, steps:[
{type:"intro", title:"Sport en Vrije Tijd",
 desc:"The Dutch love their sports, from football to ice skating to korfbal. Learn the vocabulary for discussing recreation, athletics, and the unique Dutch sports culture.",
 goals:["8 sports and leisure nouns","Discuss Dutch sports culture","Navigate recreation vocabulary"]},

{type:"teach", trg:"het korfbal", src:"korfball", pos:"noun", gender:"c",
 note:"A Dutch team sport, similar to basketball.\nPlayed by mixed-gender teams.",
 example:"A: Heb je weleens korfbal gespeeld?\nB: Nee, wat is dat precies?\nA: Een beetje zoals basketbal, maar gemengd.\nB: Dat klinkt leuk, ik wil het proberen.",
 exampleSrc:"A: Have you ever played korfball?\nB: No, what is it exactly?\nA: A bit like basketball, but mixed gender.\nB: That sounds fun, I want to try it.",
 funFact:"Korfball was invented in the Netherlands in 1902 and is one of the few team sports where men and women play together on the same team."},

{type:"teach", trg:"de krokusvakantie", src:"spring break (February holiday)", pos:"noun", gender:"c",
 note:"Krokus (crocus) + vakantie (holiday).\nOne week in February when crocuses bloom.",
 example:"A: Wat doen jullie met de krokusvakantie?\nB: We gaan skieen in Oostenrijk.\nA: Leuk! Wij blijven thuis.\nB: Dat kan ook fijn zijn.",
 exampleSrc:"A: What are you doing for spring break?\nB: We're going skiing in Austria.\nA: Nice! We're staying home.\nB: That can be nice too.",
 funFact:"The Dutch school year has multiple short holidays spread throughout the year, staggered by region to prevent traffic jams."},

{type:"teach", trg:"de duik", src:"dive / plunge", pos:"noun", gender:"c",
 note:"From 'duiken' (to dive).\n'Een duik nemen' = to take a dive/dip.",
 example:"A: Zullen we een duik nemen?\nB: In dit koude water?\nA: Ja, het is verfrissend!\nB: Vooruit dan maar, een snelle duik.",
 exampleSrc:"A: Shall we take a dip?\nB: In this cold water?\nA: Yes, it's refreshing!\nB: Alright then, a quick dip.",
 funFact:"The Dutch 'Nieuwjaarsduik' (New Year's dive) at Scheveningen beach attracts over 10,000 people who plunge into the icy North Sea on January 1st."},

{type:"teach", trg:"de kampplaats", src:"campsite / camping pitch", pos:"noun", gender:"c",
 note:"Kamp + plaats (place).\n'De camping' = the campground (English loanword).",
 example:"A: Hebben jullie al een kampplaats gereserveerd?\nB: Ja, vlak bij het strand.\nA: Mooi, dan kunnen we elke dag zwemmen.\nB: En 's avonds bij het kampvuur zitten.",
 exampleSrc:"A: Have you reserved a campsite yet?\nB: Yes, right near the beach.\nA: Great, then we can swim every day.\nB: And sit by the campfire in the evening.",
 funFact:"Camping is the most popular holiday type in the Netherlands. Dutch campsites are known for their excellent facilities and orderliness."},

{type:"teach", trg:"de hobbyschrijver", src:"amateur writer / hobby writer", pos:"noun", gender:"c",
 note:"Hobby + schrijver (writer).\nSomeone who writes for fun, not professionally.",
 example:"A: Ben je een professionele schrijver?\nB: Nee, ik ben een hobbyschrijver.\nA: Maar je verhalen zijn heel goed!\nB: Dank je, misschien ooit een boek.",
 exampleSrc:"A: Are you a professional writer?\nB: No, I'm a hobby writer.\nA: But your stories are very good!\nB: Thanks, maybe a book someday.",
 funFact:"The Netherlands has a thriving amateur writing scene with dozens of 'schrijfverenigingen' (writing associations) across the country."},

{type:"teach", trg:"het hink-stap-springen", src:"triple jump", pos:"noun", gender:"n",
 note:"Het hink-stap-springen. Hink (hop) + stap (step) + springen (jump).\nThe track and field event.",
 example:"A: Hink-stap-springen is een lastige discipline.\nB: Ja, je hebt veel techniek nodig.\nA: De timing moet perfect zijn.\nB: En je moet explosief zijn.",
 exampleSrc:"A: The triple jump is a difficult discipline.\nB: Yes, you need a lot of technique.\nA: The timing must be perfect.\nB: And you need to be explosive.",
 funFact:"The Dutch word perfectly describes the three phases: hink (hop), stap (step), springen (jump). More descriptive than 'triple jump'."},

{type:"teach", trg:"de hoofdact", src:"main act / headliner", pos:"noun", gender:"c",
 note:"Hoofd (main) + act (act/performance).\nThe star performer at a festival or concert.",
 example:"A: Wie is de hoofdact vanavond?\nB: Een bekende Nederlandse band.\nA: Hoe laat beginnen ze?\nB: Om tien uur, na het voorprogramma.",
 exampleSrc:"A: Who's the main act tonight?\nB: A famous Dutch band.\nA: What time do they start?\nB: At ten, after the opening act.",
 funFact:"Dutch music festivals like Lowlands, Pinkpop, and North Sea Jazz are among Europe's most popular, with international headliners."},

{type:"teach", trg:"de hoofdsponsor", src:"main sponsor", pos:"noun", gender:"c",
 note:"Hoofd + sponsor.\n'Het sponsorcontract' = sponsorship deal.",
 example:"A: De hoofdsponsor trekt zich terug.\nB: Dat is slecht nieuws.\nA: We moeten snel een nieuwe vinden.\nB: Zonder sponsor kunnen we niet door.",
 exampleSrc:"A: The main sponsor is pulling out.\nB: That's bad news.\nA: We need to find a new one quickly.\nB: We can't continue without a sponsor.",
 funFact:"Dutch football clubs rely heavily on sponsors. The shirt sponsor deal is the most lucrative, with top clubs earning millions per season."},

{type:"mc", q:"Korfbal is bijzonder omdat:",
 opts:["Men and women play together on one team","It uses no ball","Only the Dutch play it","It's played on ice"],
 ans:"Men and women play together on one team",
 hint:"One of the few t... sports with mixed-gender teams"},

{type:"fb", s:"Zullen we een {1} nemen in de zee?",
 a:["duik"], opts:["duik","kampplaats","krokusvakantie","korfbal"],
 hint:"A plunge into water, like the famous New Year's tradition at Scheveningen",
 sSrc:"Shall we take a {1} in the sea?"},

{type:"mc", q:"'De krokusvakantie' is in:",
 opts:["December","February","June","October"],
 ans:"February",
 hint:"Named after the crocus flower that blooms in late winter"},

{type:"fb", s:"Wie is de {1} op het festival vanavond?",
 a:["hoofdact"], opts:["hoofdact","hoofdsponsor","hobbyschrijver","kampplaats"],
 hint:"The star performer, the headliner of the event",
 sSrc:"Who is the {1} at the festival tonight?"},

{type:"match", pairs:[
 {trg:"het korfbal", src:"korfball"},
 {trg:"de krokusvakantie", src:"spring break"},
 {trg:"de duik", src:"dive / plunge"},
 {trg:"de kampplaats", src:"campsite"}
]},

{type:"mc", q:"'Hink-stap-springen' beschrijft:",
 opts:["A way of walking","A children's game","The triple jump in athletics","A dance move"],
 ans:"The triple jump in athletics",
 hint:"Hop, step, j.... The three phases of this track and field event."},

{type:"fb", s:"De {1} trekt zich terug, we hebben een probleem.",
 a:["hoofdsponsor"], opts:["hoofdsponsor","hoofdact","hobbyschrijver","kampplaats"],
 hint:"The main financial backer of a team or event",
 sSrc:"The {1} is pulling out, we have a problem."},

{type:"match", pairs:[
 {trg:"de hobbyschrijver", src:"amateur writer"},
 {trg:"het hink-stap-springen", src:"triple jump"},
 {trg:"de hoofdact", src:"main act"},
 {trg:"de hoofdsponsor", src:"main sponsor"}
]}
]};
export default LESSON_18;
