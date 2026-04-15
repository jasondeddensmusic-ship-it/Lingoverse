// Unit 05 Expansion. Lesson 5: Prepositions of Place
// Theme: Location prepositions, spatial relationships, describing layouts

const LESSON_5 = {
  id:"itv2_u5l5", title:"Dove si trova?", icon:"\ud83d\udccd", xp:15, board:true,
  steps:[
    {type:"intro", title:"Dove si trova?",
     desc:"Learn Italian prepositions of place to describe where things are located in your home and beyond.",
     goals:["Use prepositions to describe locations","Combine prepositions with articles","Describe spatial relationships between objects"]},

    {type:"tip", title:"Prepositions + articles (preposizioni articolate)",
     text:"When prepositions combine with definite articles, they merge into one word.\n\n- in + il = nel\n- in + la = nella\n- in + l' = nell'\n- su + il = sul\n- su + la = sulla\n- a + il = al\n- a + la = alla\n- di + il = del\n- di + la = della\n\nExamples:\n- Il gatto e sul tavolo. (on the table)\n- I libri sono nell'armadio. (in the wardrobe)\n- Vado alla stazione. (to the station)",
     deepDive:"These combined forms (preposizioni articolate) are mandatory in Italian. You can never say 'su il tavolo.' It must be 'sul tavolo.' The seven prepositions that merge are: di, a, da, in, con, su, per. Learning these combinations is essential for fluent Italian."},

    {type:"teach", trg:"su", src:"on / on top of", pos:"prep", gender:null,
     note:"Combines with articles: sul, sulla, sull', sullo, sui, sulle, sugli.\nFrom Latin 'super' (above).",
     example:"A: Dov'e il telefono?\nB: E sul tavolo.",
     exampleSrc:"A: Where is the phone?\nB: It is on the table.",
     funFact:"Latin 'super' (above) became Italian 'su' through simplification. English kept the full form in 'super,' 'superior,' and 'surface.' Italian 'su' is one of the most-used prepositions in daily speech."},

    {type:"teach", trg:"sotto", src:"under / below", pos:"prep", gender:null,
     note:"Opposite of 'su.' Does not merge with articles.\nFrom Latin 'subtus' (beneath).",
     example:"A: Dov'e il gatto?\nB: E sotto il tavolo.",
     exampleSrc:"A: Where is the cat?\nB: It is under the table.",
     funFact:"From Latin 'subtus' (underneath). English 'subtle' (originally 'finely woven, beneath notice') and 'subterranean' share this root. 'Sotto' does not combine with articles: 'sotto il tavolo,' not 'sottil tavolo.'"},

    {type:"teach", trg:"davanti a", src:"in front of", pos:"prep", gender:null,
     note:"'Davanti' + 'a' (+ article). From 'd'avanti' (from the front).\nOpposite: dietro (behind).",
     example:"A: La macchina e davanti alla casa.\nB: Perfetto, arrivo subito.",
     exampleSrc:"A: The car is in front of the house.\nB: Perfect, I'll be right there.",
     funFact:"'Davanti' comes from 'd'avanti' (from before/ahead). The 'a' after it requires an articulated preposition: davanti al museo, davanti alla chiesa. 'Di fronte a' (facing) is a synonym."},

    {type:"teach", trg:"dietro", src:"behind / in back of", pos:"prep", gender:null,
     note:"Can be used alone or with 'a': 'dietro la porta' or 'dietro alla porta.'\nOpposite: davanti a.",
     example:"A: Il giardino e dietro la casa.\nB: Che bello! E grande?",
     exampleSrc:"A: The garden is behind the house.\nB: How nice! Is it big?",
     funFact:"From Latin 'de retro' (from behind). English 'retro' (backward-looking) comes from the same Latin root. In Italian, 'dietro' can work with or without 'a,' making it more flexible than 'davanti.'"},

    {type:"teach", trg:"accanto a", src:"next to / beside", pos:"prep", gender:null,
     note:"'Accanto' + 'a' (+ article). Literally: at the side of.\nSynonym: 'vicino a' (near).",
     example:"A: La farmacia e accanto al supermercato.\nB: Ah, comodo!",
     exampleSrc:"A: The pharmacy is next to the supermarket.\nB: Ah, convenient!",
     funFact:"'Accanto' comes from 'a canto' (at the side). 'Canto' means 'side' or 'corner.' The same root appears in English 'canton' (a division/corner of a country, as in Swiss cantons)."},

    {type:"teach", trg:"tra", src:"between / among", pos:"prep", gender:null,
     note:"Also: 'fra' (identical meaning, used for sound variety).\nDoes not merge with articles. From Latin 'intra.'",
     example:"A: Il bar e tra la banca e la farmacia.\nB: Ah, lo vedo!",
     exampleSrc:"A: The bar is between the bank and the pharmacy.\nB: Ah, I see it!",
     funFact:"'Tra' and 'fra' are completely interchangeable. Italians choose whichever sounds better: 'fra tre giorni' sounds awkward (fra tre), so they say 'tra tre giorni.' 'Tra fratelli' sounds odd, so 'fra fratelli.'"},

    {type:"teach", trg:"sopra", src:"above / over", pos:"prep", gender:null,
     note:"Does not merge with articles. From Latin 'supra' (above).\n'Sopra' vs 'su': sopra = above (not touching), su = on (touching).",
     example:"A: Il quadro e sopra il divano.\nB: Si, e molto bello.",
     exampleSrc:"A: The painting is above the sofa.\nB: Yes, it is very beautiful.",
     funFact:"'Sopra' means above without contact. 'Su' means on with contact. 'Il gatto e sul tavolo' (cat touching table) vs 'la lampada e sopra il tavolo' (lamp hanging above, not touching). This distinction matters."},

    {type:"teach", trg:"dentro", src:"inside", pos:"prep", gender:null,
     note:"Can be used alone: 'E dentro.' Or with 'a/di': 'dentro la scatola.'\nOpposite: fuori (outside). From Latin 'de intro.'",
     example:"A: Il gatto e dentro o fuori?\nB: E dentro, in salotto.",
     exampleSrc:"A: Is the cat inside or outside?\nB: It is inside, in the living room.",
     funFact:"'Dentro' comes from 'de intro' (from within). Its opposite 'fuori' comes from Latin 'foris' (outside), which also gave English 'foreign' and 'forest' (the wild land outside the village)."},

    {type:"teach", trg:"fuori", src:"outside", pos:"prep", gender:null,
     note:"Opposite of 'dentro.' Can be used alone: 'Vado fuori.'\nFrom Latin 'foris' (outside the door).",
     example:"A: I bambini sono fuori.\nB: In giardino?\nA: Si, giocano in giardino.",
     exampleSrc:"A: The children are outside.\nB: In the garden?\nA: Yes, they are playing in the garden.",
     funFact:"'Fuori' comes from Latin 'foris' (door). Being 'outside' originally meant being outside the door. English 'foreign' (from outside) and 'forest' (the wild outside) share this ancient root."},

    {type:"teach", trg:"a destra di", src:"to the right of", pos:"prep", gender:null,
     note:"Combines direction with 'di' to show position relative to something.\nOpposite: a sinistra di.",
     example:"A: Il bagno e a destra della cucina.\nB: Grazie!",
     exampleSrc:"A: The bathroom is to the right of the kitchen.\nB: Thanks!",
     funFact:"Spatial descriptions in Italian always use preposition + article combinations. 'A destra della cucina' (della = di + la). These articulated prepositions are essential for giving any kind of location description."},

    // Quiz steps
    {type:"mc", q:"What is 'sul tavolo'?",
     opts:["su + il tavolo (on the table)","sotto il tavolo","sopra il tavolo","su la tavolo"],
     ans:"su + il tavolo (on the table)",
     hint:"When 'su' combines with the article 'il,' they merge into a single word. This is mandatory in Italian."},

    {type:"fb", s:"Il gatto e {1} il tavolo.",
     a:["sotto"],
     opts:["sotto","sopra","su","dentro"],
     hint:"The cat is beneath the table, on the floor underneath it.",
     sSrc:"The cat is {1} the table."},

    {type:"mc", q:"What is the difference between 'su' and 'sopra'?",
     opts:["Su = touching, sopra = not touching","They are identical","Su = above, sopra = on","Sopra is informal"],
     ans:"Su = touching, sopra = not touching",
     hint:"The cat ON the table (t...) uses 'su.' The lamp ABOVE the table (hanging, not t...) uses 's....'"},

    {type:"fb", s:"La farmacia e {1} al supermercato.",
     a:["accanto"],
     opts:["accanto","dentro","sotto","sopra"],
     hint:"The pharmacy and supermarket are side by side. This word means 'next to.'",
     sSrc:"The pharmacy is {1} the supermarket."},

    {type:"match", pairs:[
      {trg:"su", src:"on"},
      {trg:"sotto", src:"under"},
      {trg:"davanti a", src:"in front of"},
      {trg:"dietro", src:"behind"},
      {trg:"tra/fra", src:"between"}
    ]},

    {type:"mc", q:"Why are 'tra' and 'fra' interchangeable?",
     opts:["Italians choose whichever sounds better with surrounding words","Fra is formal","Tra is old Italian","They have slightly different meanings"],
     ans:"Italians choose whichever sounds better with surrounding words",
     hint:"These two forms exist for phonetic variety. 'Tra tre' s... bad, so use 'fra tre.' 'Fra fratelli' s... bad, so use 'tra fratelli.'"},

    {type:"fb", s:"I bambini sono {1}, in giardino.",
     a:["fuori"],
     opts:["fuori","dentro","sopra","sotto"],
     hint:"The children are not in the house. They are outside. From Latin 'foris' (door).",
     sSrc:"The children are {1}, in the garden."},

    {type:"mc", q:"What does 'dentro' mean?",
     opts:["Inside","Outside","Above","Between"],
     ans:"Inside",
     hint:"The opposite of 'fuori.' From Latin 'de intro' (from within). Think of 'interior.'"},

    {type:"fb", s:"Il quadro e {1} il divano.",
     a:["sopra"],
     opts:["sopra","su","sotto","accanto"],
     hint:"The painting hangs on the wall above the sofa, not touching it. This preposition indicates height without contact.",
     sSrc:"The painting is {1} the sofa."},

    {type:"mc", q:"How do you say 'in the wardrobe' using an articulated preposition?",
     opts:["Nell'armadio","In l'armadio","Nel armadio","N'armadio"],
     ans:"Nell'armadio",
     hint:"'In' combines with the elided masculine article before a vowel. The result fuses the two words into one. never keep them separate in Italian."}
  ]
};
export default LESSON_5;
