// Batch 8 — Unit 05 extra lesson. Home: Household Chores & Routines
const BATCH8_L1 = {id:"itv2_u05l_b8_1", title:"Le faccende domestiche", icon:"🧹", xp:15, board:true, steps:[
{type:"intro", title:"Le faccende domestiche",
 desc:"Learn vocabulary for household chores, cleaning, and maintaining a home in Italian.",
 goals:["Name common household chores","Talk about cleaning routines","Use domestic vocabulary in context"]},

{type:"teach", trg:"spazzare", src:"to sweep", pos:"verb", gender:null,
 note:"Regular -are verb. 'Spazzare il pavimento' = to sweep the floor.\n'La scopa' = the broom.",
 example:"A: Hai spazzato il pavimento?\nB: Si, ho usato la scopa nuova.",
 exampleSrc:"A: Did you sweep the floor?\nB: Yes, I used the new broom.",
 funFact:"The expression 'spazzare via' means to sweep away. Figuratively, 'la squadra ha spazzato via gli avversari' (the team swept away the opponents)."},

{type:"teach", trg:"stirare", src:"to iron", pos:"verb", gender:null,
 note:"Regular -are verb. 'Il ferro da stiro' = the iron.\n'Stirare una camicia' = to iron a shirt.",
 example:"A: Devo stirare le camicie.\nB: Usa il vapore, e più facile.",
 exampleSrc:"A: I need to iron the shirts.\nB: Use steam, it is easier.",
 funFact:"Italians take ironing seriously. Even bed sheets and underwear get ironed in many households. 'Bella figura' (looking good) starts at home."},

{type:"teach", trg:"la polvere", src:"the dust", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fare la polvere' = to dust.\n'Spolverare' = to dust (verb).",
 example:"A: C'e molta polvere sui mobili.\nB: Spolveralo con un panno umido.",
 exampleSrc:"A: There is a lot of dust on the furniture.\nB: Dust it with a damp cloth.",
 funFact:"'Polvere' also means 'powder.' 'Caffe in polvere' = instant coffee powder. 'Mordere la polvere' = to bite the dust."},

{type:"teach", trg:"il bucato", src:"the laundry", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare il bucato' = to do the laundry.\n'Stendere il bucato' = to hang the laundry.",
 example:"A: Ho fatto il bucato stamattina.\nB: Lo stendi sul balcone?",
 exampleSrc:"A: I did the laundry this morning.\nB: Are you hanging it on the balcony?",
 funFact:"Italians rarely use dryers. Clothes are hung on balconies or clotheslines. The sight of laundry drying on balconies is iconic in Italian cities."},

{type:"teach", trg:"il detersivo", src:"the detergent", pos:"noun", gender:"m",
 note:"Masculine noun. 'Detersivo per piatti' = dish soap.\n'Detersivo per lavatrice' = laundry detergent.",
 example:"A: Abbiamo finito il detersivo.\nB: Lo compro al supermercato.",
 exampleSrc:"A: We ran out of detergent.\nB: I will buy it at the supermarket.",
 funFact:"Italy has strict regulations on detergents for environmental protection. Biodegradable products are increasingly popular, especially near lakes and rivers."},

{type:"teach", trg:"riordinare", src:"to tidy up", pos:"verb", gender:null,
 note:"Regular -are verb. 'Riordinare la stanza' = to tidy up the room.\nPrefix ri- = again/back.",
 example:"A: Riordina la tua stanza, per favore!\nB: Va bene, lo faccio subito.",
 exampleSrc:"A: Tidy up your room, please!\nB: All right, I will do it right away.",
 funFact:"'Riordinare' literally means 'to put back in order.' Italians distinguish between riordinare (tidying), pulire (cleaning), and sistemare (organizing)."},

{type:"teach", trg:"l'aspirapolvere", src:"the vacuum cleaner", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: aspira (sucks) + polvere (dust).\n'Passare l'aspirapolvere' = to vacuum.",
 example:"A: Passo l'aspirapolvere in salotto.\nB: Fai anche sotto il divano!",
 exampleSrc:"A: I will vacuum the living room.\nB: Do under the sofa too!",
 funFact:"The word is a perfect example of Italian compound nouns: 'aspira' (it sucks) + 'polvere' (dust) = dust sucker. Very literal and very useful."},

{type:"teach", trg:"il secchio", src:"the bucket", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i secchi.\n'Secchio dell'immondizia' = trash can.",
 example:"A: Dove metto l'acqua sporca?\nB: Nel secchio vicino alla porta.",
 exampleSrc:"A: Where do I put the dirty water?\nB: In the bucket near the door.",
 funFact:"'Piovere a secchiate' (to rain in bucketfuls) is the Italian equivalent of 'it is raining cats and dogs.'"},

{type:"teach", trg:"lo straccio", src:"the rag / mop cloth", pos:"noun", gender:"m",
 note:"Masculine noun. 'Passare lo straccio' = to mop.\n'Essere uno straccio' = to feel like a wreck.",
 example:"A: Passo lo straccio per terra?\nB: Si, il pavimento e sporco.",
 exampleSrc:"A: Shall I mop the floor?\nB: Yes, the floor is dirty.",
 funFact:"'Essere uno straccio' (to be a rag) means to feel exhausted or terrible. After a long day of faccende domestiche, you might feel like uno straccio!"},

{type:"mc",
 q:"Where do most Italians dry their laundry?",
 opts:["On the balcony or clothesline","In a dryer","In the oven","In the bathroom"],
 ans:"On the balcony or clothesline",
 hint:"Dryers are uncommon in Italy. Think of those iconic Italian b... scenes with clothes fluttering in the breeze."},

{type:"match", pairs:[
  {trg:"spazzare", src:"to sweep"},
  {trg:"stirare", src:"to iron"},
  {trg:"riordinare", src:"to tidy up"},
  {trg:"il bucato", src:"the laundry"}
]},

{type:"fb",
 s:"Passo {1} in salotto, il pavimento e sporco.",
 a:["l'aspirapolvere"],
 opts:["l'aspirapolvere","il bucato","lo straccio","la polvere"],
 hint:"This compound noun literally means 'dust sucker.' You push it across the carpet.",
 sSrc:"I will run the {1} in the living room, the floor is dirty."},

{type:"mc",
 q:"What does 'essere uno straccio' mean figuratively?",
 opts:["To feel exhausted","To be very clean","To work hard","To mop the floor"],
 ans:"To feel exhausted",
 hint:"A 'straccio' is a rag. Imagine how a used rag looks after cleaning all day."},

{type:"fb",
 s:"Abbiamo finito il {1} per la lavatrice.",
 a:["detersivo"],
 opts:["detersivo","secchio","straccio","bucato"],
 hint:"This is what you add to the washing machine to clean clothes. A type of soap product.",
 sSrc:"We ran out of {1} for the washing machine."},

{type:"mc",
 q:"What does 'fare la polvere' mean?",
 opts:["To dust","To make powder","To sweep","To vacuum"],
 ans:"To dust",
 hint:"'Polvere' means dust. 'Fare la polvere' is the act of removing dust from surfaces."}
,{type:"match",pairs:[{trg:"la polvere",src:"the dust"},{trg:"il secchio",src:"the bucket"},{trg:"lo straccio",src:"the rag / mop cloth"}]}]};
export default BATCH8_L1;
