// Batch 6. Unit 12 extra lesson. Essere al passato: Movement & Direction Verbs
const BATCH6_L1 = {id:"itv2_u12l_b6_1", title:"Verbi di movimento", icon:"\u{1F3C3}", xp:15, board:true, steps:[
{type:"intro", title:"Verbi di movimento",
 desc:"Learn key verbs of movement and direction that use 'essere' in the past tense, plus physical action verbs.",
 goals:["Master movement verbs with essere","Describe physical actions and directions","Use past tense with movement verbs correctly"]},

{type:"teach", trg:"salire", src:"to go up / to climb", pos:"verb", gender:null,
 note:"Irregular -ire verb. salgo, sali, sale.\nPast participle: salito. Uses essere.",
 example:"A: Siamo saliti al quinto piano a piedi.\nB: Senza ascensore? Complimenti!",
 exampleSrc:"A: We climbed up to the fifth floor on foot.\nB: Without the elevator? Well done!",
 funFact:"'Salire' uses essere: 'sono salito.' But with a direct object it uses avere: 'ho salito le scale' (I climbed the stairs). This dual behavior is common in Italian."},

{type:"teach", trg:"scendere", src:"to go down / to descend", pos:"verb", gender:null,
 note:"Irregular -ere verb. scendo, scendi, scende.\nPast participle: sceso. Uses essere.",
 example:"A: Sono scesa al piano terra.\nB: Ci vediamo all'ingresso.",
 exampleSrc:"A: I went down to the ground floor.\nB: See you at the entrance.",
 funFact:"'Scendere dall'autobus' (to get off the bus) and 'scendere le scale' (to go down the stairs) are everyday expressions. 'Scendere a compromessi' means to compromise."},

{type:"teach", trg:"cadere", src:"to fall", pos:"verb", gender:null,
 note:"Irregular -ere verb. cado, cadi, cade.\nPast participle: caduto. Uses essere.",
 example:"A: Sono caduto dalla bicicletta.\nB: Ti sei fatto male?",
 exampleSrc:"A: I fell off the bicycle.\nB: Did you hurt yourself?",
 funFact:"'Cadere' has many figurative uses: 'cadere in trappola' (to fall into a trap), 'cadere dal cielo' (to come out of nowhere), 'cadere in piedi' (to land on your feet)."},

{type:"teach", trg:"saltare", src:"to jump / to skip", pos:"verb", gender:null,
 note:"Regular -are verb. salto, salti, salta.\nUses avere. Also means 'to skip' a meal or class.",
 example:"A: Ho saltato il pranzo oggi.\nB: Perche? Non avevi fame?",
 exampleSrc:"A: I skipped lunch today.\nB: Why? Were you not hungry?",
 funFact:"'Saltare' means both to jump physically and to skip/miss something. 'Saltare la scuola' (to skip school) and 'saltare di gioia' (to jump for joy) use the same verb."},

{type:"teach", trg:"attraversare", src:"to cross", pos:"verb", gender:null,
 note:"Regular -are verb. attraverso, attraversi, attraversa.\nUses avere. For streets, rivers, borders.",
 example:"A: Attraversa la strada al semaforo.\nB: Si, e più sicuro.",
 exampleSrc:"A: Cross the street at the traffic light.\nB: Yes, it is safer.",
 funFact:"'Attraversare' contains 'traverso' (across). Italian pedestrians technically have the right of way at zebra crossings, though drivers in Naples may disagree."},

{type:"teach", trg:"raggiungere", src:"to reach / to catch up with", pos:"verb", gender:null,
 note:"Irregular -ere verb. raggiungo, raggiungi, raggiunge.\nPast participle: raggiunto.",
 example:"A: Abbiamo raggiunto la vetta della montagna.\nB: Che vista incredibile!",
 exampleSrc:"A: We reached the mountain peak.\nB: What an incredible view!",
 funFact:"'Raggiungere' combines 'ri' (again) + 'aggiungere' (to join). It means to catch up to something or someone, or to arrive at a destination."},

{type:"teach", trg:"fuggire", src:"to flee / to escape", pos:"verb", gender:null,
 note:"Regular -ire verb. fuggo, fuggi, fugge.\nPast participle: fuggito. Uses essere.",
 example:"A: Il gatto e fuggito dal giardino.\nB: Lo cerchiamo nel quartiere.",
 exampleSrc:"A: The cat escaped from the garden.\nB: Let us look for it in the neighborhood.",
 funFact:"'Fuga' (escape/fugue) comes from 'fuggire.' In music, a 'fuga' is a piece where melodies seem to chase and flee from each other."},

{type:"teach", trg:"strisciare", src:"to crawl / to drag", pos:"verb", gender:null,
 note:"Regular -are verb. striscio, strisci, striscia.\nFor slow movement along the ground.",
 example:"A: Il bambino striscia sul pavimento.\nB: Presto imparera a camminare!",
 exampleSrc:"A: The baby is crawling on the floor.\nB: Soon he will learn to walk!",
 funFact:"'Striscia' as a noun means a strip or a streak. 'Striscia la Notizia' is one of Italy's most popular satirical TV shows, playing on the double meaning."},

{type:"teach", trg:"scivolare", src:"to slip / to slide", pos:"verb", gender:null,
 note:"Regular -are verb. scivolo, scivoli, scivola.\nUses essere when indicating movement.",
 example:"A: Sono scivolato sul pavimento bagnato.\nB: Stai bene? Il pavimento era appena lavato.",
 exampleSrc:"A: I slipped on the wet floor.\nB: Are you OK? The floor was just washed.",
 funFact:"'Scivolo' is also the noun for a playground slide. 'Lasciar scivolare' (to let it slide) means not to dwell on something, to let it go."},

{type:"teach", trg:"trascinare", src:"to drag / to haul", pos:"verb", gender:null,
 note:"Regular -are verb. trascino, trascini, trascina.\nPhysically dragging something heavy.",
 example:"A: Ho trascinato la valigia per tutto l'aeroporto.\nB: Era così pesante?",
 exampleSrc:"A: I dragged the suitcase through the whole airport.\nB: Was it that heavy?",
 funFact:"'Trascinare' also means to captivate: 'un discorso trascinante' is a rousing speech. The idea of being pulled along by something compelling."},

{type:"teach", trg:"inciampare", src:"to stumble / to trip", pos:"verb", gender:null,
 note:"Regular -are verb. inciampo, inciampi, inciampa.\nUses essere. To trip over something.",
 example:"A: Sono inciampato nel tappeto.\nB: Quel tappeto e pericoloso!",
 exampleSrc:"A: I tripped on the rug.\nB: That rug is dangerous!",
 funFact:"'Inciampare' is purely physical (tripping). 'Inciampare in qualcuno' means to run into someone unexpectedly, a nice figurative extension."},

{type:"teach", trg:"rotolare", src:"to roll", pos:"verb", gender:null,
 note:"Regular -are verb. rotolo, rotoli, rotola.\nUses essere when indicating movement.",
 example:"A: La palla e rotolata giu per la collina.\nB: Andiamo a prenderla!",
 exampleSrc:"A: The ball rolled down the hill.\nB: Let us go get it!",
 funFact:"'Rotolo' is both the verb form and a noun meaning 'roll' (of paper, etc.). 'Andare a rotoli' (to go to rolls) means to go to ruin."},

{type:"teach", trg:"tuffarsi", src:"to dive / to plunge", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi tuffo, ti tuffi, si tuffa.\nUsed for diving into water.",
 example:"A: Mi sono tuffato nel mare dalla scogliera.\nB: Non avevi paura?",
 exampleSrc:"A: I dived into the sea from the cliff.\nB: Were you not afraid?",
 funFact:"'Tuffo' (dive) is also used figuratively: 'un tuffo al cuore' (a heart-skipping moment). The 'tuffi' (diving) is a popular Olympic sport in Italy."},

{type:"teach", trg:"stendersi", src:"to lie down / to stretch out", pos:"verb", gender:null,
 note:"Reflexive -ere verb. mi stendo, ti stendi, si stende.\nPast participle: steso.",
 example:"A: Mi sono steso sul divano dopo pranzo.\nB: La classica pennichella!",
 exampleSrc:"A: I lay down on the couch after lunch.\nB: The classic little nap!",
 funFact:"The Italian 'pennichella' (afternoon nap) is a beloved tradition. 'Stendersi' for a quick rest after pranzo is practically a national institution."},

{type:"teach", trg:"arrampicarsi", src:"to climb up / to scramble", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi arrampico, ti arrampichi, si arrampica.\nPhysical climbing.",
 example:"A: I bambini si sono arrampicati sull'albero.\nB: State attenti la su!",
 exampleSrc:"A: The children climbed up the tree.\nB: Be careful up there!",
 funFact:"'Arrampicarsi sugli specchi' (to climb on mirrors) means to make desperate excuses, grasping at straws to justify something impossible."},

{type:"mc", q:"Quale verbo usa 'essere' al passato prossimo?",
 opts:["cadere (sono caduto)","saltare (ho saltato)","attraversare (ho attraversato)","trascinare (ho trascinato)"],
 ans:"cadere (sono caduto)",
 hint:"Movement verbs indicating change of state use essere. This verb means 'to fall.'"},

{type:"fb", s:"Siamo {1} al quinto piano senza ascensore.", a:["saliti"],
 opts:["saliti","saltati","caduti","attraversati"],
 hint:"Past participle (plural) of the verb meaning 'to go up.' Uses essere.",
 sSrc:"We {1} to the fifth floor without the elevator."},

{type:"match", pairs:[
 {trg:"salire", src:"to go up"},
 {trg:"scendere", src:"to go down"},
 {trg:"cadere", src:"to fall"},
 {trg:"fuggire", src:"to flee"}
]},

{type:"mc", q:"Cosa significa 'attraversare la strada'?",
 opts:["to run along the street","to cross the street","to walk down the street","to climb the street"],
 ans:"to cross the street",
 hint:"To go from one side to the other. Usually done at a 'semaforo' (traffic light)."},

{type:"fb", s:"Sono {1} sul pavimento bagnato e sono caduto.", a:["scivolato"],
 opts:["scivolato","inciampato","rotolato","strisciato"],
 hint:"To lose your footing on a smooth, wet surface. A slippery situation.",
 sSrc:"I {1} on the wet floor and fell."},

{type:"mc", q:"Quale espressione idiomatica significa 'fare scuse disperate'?",
 opts:["saltare la scuola","cadere dalle nuvole","arrampicarsi sugli specchi","tuffarsi nel lavoro"],
 ans:"arrampicarsi sugli specchi",
 hint:"Literally 'to climb on mirrors.' An impossible physical feat used figuratively."},

{type:"fb", s:"La palla e {1} giu per la collina fino al fiume.", a:["rotolata"],
 opts:["rotolata","scivolata","caduta","strisciata"],
 hint:"Past participle (feminine) of the verb meaning 'to roll.' The ball went rolling.",
 sSrc:"The ball {1} down the hill to the river."},

{type:"match", pairs:[
 {trg:"scivolare", src:"to slip"},
 {trg:"inciampare", src:"to stumble"},
 {trg:"tuffarsi", src:"to dive"},
 {trg:"arrampicarsi", src:"to climb"}
]}
,{type:"match",pairs:[{trg:"raggiungere",src:"to reach / to catch up with"},{trg:"strisciare",src:"to crawl / to drag"},{trg:"rotolare",src:"to roll"},{trg:"stendersi",src:"to lie down / to stretch out"}]}]};
export default BATCH6_L1;
