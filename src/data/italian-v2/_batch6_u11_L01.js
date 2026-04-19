// Batch 6 — Unit 11 extra lesson. Il passato: Common Irregular Past Participles
const BATCH6_L1 = {id:"itv2_u11l_b6_1", title:"Participi irregolari", icon:"\u{1F4DA}", xp:15, board:true, steps:[
{type:"intro", title:"Participi irregolari",
 desc:"Master the most common irregular past participles in Italian and practice using them in everyday sentences.",
 goals:["Learn 15 key irregular past participles","Use them correctly with avere and essere","Build sentences about past events"]},

{type:"teach", trg:"spingere", src:"to push", pos:"verb", gender:null,
 note:"Irregular -ere verb. spingo, spingi, spinge.\nPast participle: spinto. Uses avere.",
 example:"A: Chi ha spinto la porta?\nB: Io! Era molto pesante.",
 exampleSrc:"A: Who pushed the door?\nB: I did! It was very heavy.",
 funFact:"'Spingere' comes from Latin 'expingere.' The past participle 'spinto' also means 'risque' or 'daring' when used as an adjective: 'una barzelletta spinta' (a dirty joke)."},

{type:"teach", trg:"tirare", src:"to pull / to throw", pos:"verb", gender:null,
 note:"Regular -are verb. tiro, tiri, tira.\nPast participle: tirato. Means both pull and throw.",
 example:"A: Ho tirato la corda troppo forte.\nB: Si e rotta?",
 exampleSrc:"A: I pulled the rope too hard.\nB: Did it break?",
 funFact:"'Tirare' means both to pull and to throw, depending on context. 'Tirare la palla' (throw the ball) vs. 'tirare la porta' (pull the door). 'Tirare avanti' means to get by."},

{type:"teach", trg:"rompere", src:"to break", pos:"verb", gender:null,
 note:"Irregular -ere verb. rompo, rompi, rompe.\nPast participle: rotto. Uses avere.",
 example:"A: Ho rotto il bicchiere!\nB: Non ti preoccupare, ne ho altri.",
 exampleSrc:"A: I broke the glass!\nB: Do not worry, I have others.",
 funFact:"'Rotto' is one of the most versatile Italian adjectives. 'Sono rotto' (I am broken/exhausted), 'rompere le scatole' (to be annoying, literally 'to break boxes')."},

{type:"teach", trg:"accendere", src:"to turn on / to light", pos:"verb", gender:null,
 note:"Irregular -ere verb. accendo, accendi, accende.\nPast participle: acceso. Uses avere.",
 example:"A: Hai acceso la luce?\nB: Si, era troppo buio.",
 exampleSrc:"A: Did you turn on the light?\nB: Yes, it was too dark.",
 funFact:"'Acceso' as an adjective means 'on' (for lights and devices) and also 'passionate/heated': 'una discussione accesa' (a heated discussion)."},

{type:"teach", trg:"spegnere", src:"to turn off / to extinguish", pos:"verb", gender:null,
 note:"Irregular -ere verb. spengo, spegni, spegne.\nPast participle: spento. Opposite of accendere.",
 example:"A: Hai spento il computer?\nB: No, me ne sono dimenticato.",
 exampleSrc:"A: Did you turn off the computer?\nB: No, I forgot.",
 funFact:"'Spento' as an adjective means 'off' but also 'dull/lifeless': 'occhi spenti' (lifeless eyes). 'Spegnere un incendio' means to extinguish a fire."},

{type:"teach", trg:"raccogliere", src:"to pick up / to collect", pos:"verb", gender:null,
 note:"Irregular -ere verb. raccolgo, raccogli, raccoglie.\nPast participle: raccolto.",
 example:"A: Ho raccolto i fiori nel giardino.\nB: Che bel mazzo!",
 exampleSrc:"A: I picked flowers in the garden.\nB: What a beautiful bouquet!",
 funFact:"'Raccogliere' also means to harvest. 'La raccolta' (the harvest/collection) and 'raccolta differenziata' (recycling, literally 'differentiated collection') share this root."},

{type:"teach", trg:"nascondere", src:"to hide", pos:"verb", gender:null,
 note:"Irregular -ere verb. nascondo, nascondi, nasconde.\nPast participle: nascosto.",
 example:"A: Dove hai nascosto il regalo?\nB: Nell'armadio, dietro i cappotti.",
 exampleSrc:"A: Where did you hide the gift?\nB: In the closet, behind the coats.",
 funFact:"'Nascondino' (hide and seek) is derived from 'nascondere.' Italian children play 'a nascondino' in parks and streets, just like children everywhere."},

{type:"teach", trg:"piangere", src:"to cry / to weep", pos:"verb", gender:null,
 note:"Irregular -ere verb. piango, piangi, piange.\nPast participle: pianto. Uses avere.",
 example:"A: Perche hai pianto?\nB: Il film era molto triste.",
 exampleSrc:"A: Why did you cry?\nB: The movie was very sad.",
 funFact:"'Piangere sul latte versato' (to cry over spilled milk) exists in Italian too. 'Pianto' (crying/weeping) is also a literary term for a lament."},

{type:"teach", trg:"ridere", src:"to laugh", pos:"verb", gender:null,
 note:"Irregular -ere verb. rido, ridi, ride.\nPast participle: riso. Uses avere.",
 example:"A: Abbiamo riso tutta la sera.\nB: Era una serata divertentissima!",
 exampleSrc:"A: We laughed all evening.\nB: It was a very fun evening!",
 funFact:"'Riso' means both 'laughter' (past participle) and 'rice' (the grain). 'Risata' (a laugh/burst of laughter) avoids the ambiguity."},

{type:"teach", trg:"correre", src:"to run", pos:"verb", gender:null,
 note:"Irregular -ere verb. corro, corri, corre.\nPast participle: corso. Uses avere or essere.",
 example:"A: Ho corso per prendere l'autobus.\nB: L'hai preso?",
 exampleSrc:"A: I ran to catch the bus.\nB: Did you catch it?",
 funFact:"'Correre' uses 'avere' when the focus is on the action ('ho corso molto') and 'essere' when there is a destination ('sono corso a casa'). The noun 'corsa' means a race or a run."},

{type:"teach", trg:"dipingere", src:"to paint", pos:"verb", gender:null,
 note:"Irregular -ere verb. dipingo, dipingi, dipinge.\nPast participle: dipinto. Uses avere.",
 example:"A: Chi ha dipinto questo quadro?\nB: Mia nonna, era un'artista.",
 exampleSrc:"A: Who painted this picture?\nB: My grandmother, she was an artist.",
 funFact:"'Dipinto' (painting) is the standard word for a painted artwork. Italy has more 'dipinti' in museums than any other country in the world."},

{type:"teach", trg:"stringere", src:"to tighten / to squeeze", pos:"verb", gender:null,
 note:"Irregular -ere verb. stringo, stringi, stringe.\nPast participle: stretto.",
 example:"A: Mi hai stretto la mano molto forte!\nB: Scusa, sono entusiasta!",
 exampleSrc:"A: You shook my hand very hard!\nB: Sorry, I am enthusiastic!",
 funFact:"'Stringere la mano' means to shake hands. 'Stretto' as an adjective means 'tight/narrow': 'una strada stretta' (a narrow street). The Strait of Messina is 'lo Stretto di Messina.'"},

{type:"teach", trg:"vincere", src:"to win", pos:"verb", gender:null,
 note:"Irregular -ere verb. vinco, vinci, vince.\nPast participle: vinto. Uses avere.",
 example:"A: Abbiamo vinto la partita!\nB: Tre a uno! Che vittoria!",
 exampleSrc:"A: We won the game!\nB: Three to one! What a victory!",
 funFact:"Leonardo da Vinci's surname literally means 'of the winner/conqueror.' 'Vincere' and 'convincere' (to convince) share the Latin root 'vincere.'"},

{type:"teach", trg:"proteggere", src:"to protect", pos:"verb", gender:null,
 note:"Irregular -ere verb. proteggo, proteggi, protegge.\nPast participle: protetto.",
 example:"A: Il cane ha protetto la casa dai ladri.\nB: E un ottimo cane da guardia!",
 exampleSrc:"A: The dog protected the house from thieves.\nB: He is an excellent guard dog!",
 funFact:"'Proteggere' comes from Latin 'protegere' (to cover in front). 'Area protetta' is a nature reserve, and 'santo protettore' is a patron saint."},

{type:"teach", trg:"distruggere", src:"to destroy", pos:"verb", gender:null,
 note:"Irregular -ere verb. distruggo, distruggi, distrugge.\nPast participle: distrutto.",
 example:"A: Il terremoto ha distrutto molte case.\nB: Che tragedia terribile.",
 exampleSrc:"A: The earthquake destroyed many houses.\nB: What a terrible tragedy.",
 funFact:"'Distrutto' colloquially means 'exhausted/wiped out': 'Sono distrutto dopo il lavoro' (I am destroyed after work). Much more dramatic than 'stanco.'"},

{type:"mc", q:"Qual e il participio passato di 'rompere'?",
 opts:["rotto","romputo","rompito","rompso"],
 ans:"rotto",
 hint:"This irregular form also means 'broken' as an adjective. Think of 'broken glass.'"},

{type:"fb", s:"Hai {1} la luce in camera? E buio.", a:["acceso"],
 opts:["acceso","spento","rotto","nascosto"],
 hint:"Past participle of the verb meaning 'to turn on.' The light is now on.",
 sSrc:"Did you {1} the light in the room? It is dark."},

{type:"match", pairs:[
 {trg:"spinto", src:"pushed"},
 {trg:"nascosto", src:"hidden"},
 {trg:"dipinto", src:"painted"},
 {trg:"distrutto", src:"destroyed"}
]},

{type:"mc", q:"Cosa significa 'stringere la mano'?",
 opts:["to shake hands","to clap hands","to wave","to hold tight"],
 ans:"to shake hands",
 hint:"The standard Italian expression for a handshake greeting."},

{type:"fb", s:"Abbiamo {1} la partita tre a zero!", a:["vinto"],
 opts:["vinto","rotto","corso","riso"],
 hint:"Past participle of the verb meaning 'to win.' Leonardo da Vinci's name is related.",
 sSrc:"We {1} the game three to zero!"},

{type:"mc", q:"Quale verbo ha il participio passato 'pianto'?",
 opts:["piangere","piantare","piangare","piantere"],
 ans:"piangere",
 hint:"The verb that means 'to cry' or 'to weep.' An irregular -ere verb."},

{type:"fb", s:"Il cane ha {1} i bambini durante il temporale.", a:["protetto"],
 opts:["protetto","distrutto","nascosto","stretto"],
 hint:"Past participle of the verb meaning 'to protect.' Regular pattern from Latin.",
 sSrc:"The dog {1} the children during the storm."},

{type:"match", pairs:[
 {trg:"acceso", src:"turned on"},
 {trg:"spento", src:"turned off"},
 {trg:"stretto", src:"tightened"},
 {trg:"vinto", src:"won"}
]}
,{type:"match",pairs:[{trg:"spingere",src:"to push"},{trg:"tirare",src:"to pull / to throw"},{trg:"rompere",src:"to break"},{trg:"accendere",src:"to turn on / to light"},{trg:"spegnere",src:"to turn off / to extinguish"},{trg:"raccogliere",src:"to pick up / to collect"}]},{type:"match",pairs:[{trg:"nascondere",src:"to hide"},{trg:"ridere",src:"to laugh"},{trg:"correre",src:"to run"},{trg:"dipingere",src:"to paint"},{trg:"stringere",src:"to tighten / to squeeze"},{trg:"vincere",src:"to win"}]},{type:"match",pairs:[{trg:"proteggere",src:"to protect"},{trg:"distruggere",src:"to destroy"}]},
{type:"fb",s:"Bisogna {1} la finestra prima di uscire di casa.",a:["spegnere"],opts:["spegnere","accendere","rompere","dipingere"],hint:"To turn off or extinguish something. Opposite of accendere.",sSrc:"You need to {1} the window before leaving home."},
{type:"fb",s:"I bambini amano {1} per tutto il parco.",a:["correre"],opts:["correre","spingere","nascondere","ridere"],hint:"To run, to move fast on foot. An irregular verb in Italian.",sSrc:"Children love to {1} all around the park."}]};
export default BATCH6_L1;
