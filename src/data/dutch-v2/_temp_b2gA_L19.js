// B2 Gap Batch A — Lesson 19: Uiterlijk & Lichaam
// Theme: Appearance, body, physical descriptions

const LESSON_19 = {id:"nlv2_b2gA_l19", title:"Uiterlijk & Lichaam", icon:"\u{1F9D1}", xp:40, board:true, steps:[
  {type:"intro", title:"Uiterlijk & Lichaam",
   desc:"Learn vocabulary about physical appearance, body parts, and physical descriptions. These words help you describe people and discuss health topics in more detail.",
   goals:["Learn body and appearance vocabulary","Describe physical features in Dutch","Understand medical and everyday body terms"]},

  {type:"teach", trg:"de haarlok", src:"lock of hair", pos:"noun", gender:"c",
   note:"Compound: haar (hair) + lok (curl/lock).\nA single curl or strand of hair.",
   example:"A: Een haarlok viel voor haar ogen.\nB: Ze veegde hem achter haar oor.\nA: In de negentiende eeuw bewaarden mensen haarlokken als aandenken.\nB: Dat klinkt romantisch.",
   exampleSrc:"A: A lock of hair fell in front of her eyes.\nB: She brushed it behind her ear.\nA: In the nineteenth century, people kept locks of hair as keepsakes.\nB: That sounds romantic.",
   funFact:"Keeping a haarlok as a memento was common practice in the Netherlands until the early 20th century. The Rijksmuseum has haarlokken from famous Dutch figures including William of Orange."},

  {type:"teach", trg:"de handpalm", src:"palm of the hand", pos:"noun", gender:"c",
   note:"Compound: hand + palm.\nThe inner flat part of the hand.",
   example:"A: De waarzegster keek naar mijn handpalm.\nB: Geloofde je haar?\nA: Nee, maar het was leuk. Ze las de lijnen in mijn handpalm.\nB: In Nederland noemen we dat 'handlijnkunde'.",
   exampleSrc:"A: The fortune teller looked at my palm.\nB: Did you believe her?\nA: No, but it was fun. She read the lines in my palm.\nB: In the Netherlands we call that 'palmistry'.",
   funFact:"Dutch has separate words for different parts of the hand: handpalm (palm), handrug (back of hand), vingertop (fingertip), and knokkel (knuckle). Very precise body vocabulary."},

  {type:"teach", trg:"de hoofdwond", src:"head wound", pos:"noun", gender:"c",
   note:"Compound: hoofd (head) + wond (wound).\nA physical injury to the head.",
   example:"A: Het slachtoffer had een hoofdwond.\nB: Was het ernstig?\nA: De hoofdwond bloedde hevig, maar het viel mee.\nB: Hoofdwonden bloeden altijd veel, dat ziet er erger uit dan het is.",
   exampleSrc:"A: The victim had a head wound.\nB: Was it serious?\nA: The head wound bled heavily, but it turned out to be minor.\nB: Head wounds always bleed a lot, it looks worse than it is.",
   funFact:"Dutch emergency rooms categorize wounds by location: hoofdwond (head), armwond (arm), beenwond (leg). The compound system makes medical communication precise and efficient."},

  {type:"teach", trg:"de hendel", src:"lever, handle", pos:"noun", gender:"c",
   note:"A mechanical lever or handle that you pull or push.\nUsed for machines, doors, and mechanisms.",
   example:"A: Trek aan de hendel om de machine te starten.\nB: Welke hendel? Er zijn er drie.\nA: De rode hendel links.\nB: Ah, nu werkt het!",
   exampleSrc:"A: Pull the lever to start the machine.\nB: Which lever? There are three.\nA: The red lever on the left.\nB: Ah, now it works!",
   funFact:"The Dutch word 'hendel' comes from 'hand' (hand). It literally means 'thing you operate with your hand'. The word appears in everyday contexts (toilet hendel, koffie hendel) and technical ones."},

  {type:"teach", trg:"de kasplant", src:"hothouse plant, sheltered person", pos:"noun", gender:"c",
   note:"Compound: kas (greenhouse) + plant.\nLiterally: greenhouse plant. Figuratively: an overprotected person.",
   example:"A: Je moet je kinderen niet als kasplanten opvoeden.\nB: Wat bedoel je?\nA: Ze moeten leren omgaan met tegenslagen.\nB: Je hebt gelijk, een kasplant overleeft het buiten niet.",
   exampleSrc:"A: You shouldn't raise your children as hothouse plants.\nB: What do you mean?\nA: They need to learn to deal with setbacks.\nB: You're right, a hothouse plant doesn't survive outside.",
   funFact:"The Netherlands has the most greenhouses (kassen) per capita in the world. The Westland region is one giant glass city. The metaphor 'kasplant' for an overprotected child is therefore very Dutch."},

  {type:"teach", trg:"de kanshebber", src:"contender, person with a chance", pos:"noun", gender:"c",
   note:"Compound: kans (chance) + hebber (haver).\nSomeone who has a good chance of winning or succeeding.",
   example:"A: Wie zijn de kanshebbers voor de verkiezing?\nB: De VVD en GroenLinks zijn de grootste kanshebbers.\nA: Is er een duidelijke kanshebber?\nB: Nee, het wordt spannend.",
   exampleSrc:"A: Who are the contenders for the election?\nB: VVD and GroenLinks are the biggest contenders.\nA: Is there a clear front-runner?\nB: No, it's going to be exciting.",
   funFact:"Dutch elections always produce multiple kanshebbers because of the proportional representation system. No party has ever won a majority alone. Coalition-building is the art of Dutch politics."},

  {type:"tip", title:"Body Part Compounds",
   text:"Dutch creates medical and descriptive terms by combining body parts with conditions:\n\nhoofd- (head):\n- hoofdwond (head wound)\n- hoofdpijn (headache)\n- hoofdhuid (scalp)\n\nhand- (hand):\n- handpalm (palm)\n- handschoen (glove, literally 'hand-shoe')\n- handtekening (signature, literally 'hand-drawing')\n\nhaar- (hair):\n- haarlok (lock of hair)\n- haarkleur (hair colour)\n- haarverlies (hair loss)",
   deepDive:{title:"Figurative Body Expressions",
    text:"Dutch uses body parts in many figurative expressions:\n\n- kasplant: overprotected person (greenhouse plant)\n- koppig: stubborn (from kop = head)\n- handig: handy/clever (from hand)\n- voet bij stuk houden: to stand firm (keep foot by piece)\n\nThe kasplant metaphor is especially Dutch. In a country that literally grows plants in kassen (greenhouses), comparing someone to a sheltered plant that cannot survive in the real world is a powerful image."}},

  {type:"mc", q:"Welk woord betekent 'palm of the hand'?",
   opts:["de handpalm","de haarlok","de hoofdwond","de hendel"],
   ans:"de handpalm",
   hint:"Hand + palm. The flat inner surface of your hand."},

  {type:"fb", s:"Een {1} viel voor haar ogen.",
   a:["haarlok"], opts:["haarlok","handpalm","hoofdwond","hendel"],
   hint:"A single curl or strand of hair. Haar + lok.",
   sSrc:"A lock of hair fell in front of her eyes."},

  {type:"mc", q:"Je moet je kinderen niet als kasplanten opvoeden. Wat is een 'kasplant'?",
   opts:["an overprotected person, like a greenhouse plant","a wild child","a talented child","a plant in a window box"],
   ans:"an overprotected person, like a greenhouse plant",
   hint:"Kas (greenhouse) + plant. Someone who is too sheltered to handle the real world."},

  {type:"fb", s:"Het slachtoffer had een ernstige {1}.",
   a:["hoofdwond"], opts:["hoofdwond","handpalm","haarlok","hendel"],
   hint:"An injury (wond) to the head (hoofd).",
   sSrc:"The victim had a serious head wound."},

  {type:"match", pairs:[
    {trg:"haarlok", src:"lock of hair"},
    {trg:"handpalm", src:"palm of the hand"},
    {trg:"hoofdwond", src:"head wound"},
    {trg:"hendel", src:"lever, handle"},
    {trg:"kasplant", src:"hothouse plant, sheltered person"},
    {trg:"kanshebber", src:"contender"}
  ]},

  {type:"mc", q:"Wie zijn de kanshebbers voor de verkiezing? Wat is een 'kanshebber'?",
   opts:["someone with a good chance of winning","someone who lost","a voter","a campaign manager"],
   ans:"someone with a good chance of winning",
   hint:"Kans (chance) + hebber (haver). A person who has a real shot at success."},

  {type:"fb", s:"Trek aan de {1} om de machine te starten.",
   a:["hendel"], opts:["hendel","handpalm","haarlok","kasplant"],
   hint:"A mechanical lever or handle that you pull to operate something.",
   sSrc:"Pull the lever to start the machine."},

  {type:"drag_fill", s:"De {1} voor de titel had een {2} opgelopen, maar weigerde op te geven: hij was geen {3}.",
   blanks:{"1":"kanshebber","2":"hoofdwond","3":"kasplant"},
   pool:["kanshebber","hoofdwond","kasplant","hendel","haarlok"],
   hint:"The contender for the title had sustained a head injury but refused to give up: he was no sheltered weakling."}
]};
export default LESSON_19;
