// Italian V2 Unit 08 Expansion — Lesson 6: Taglie e misure (Sizes & Measurements)
// Expands shopping unit with detailed size vocabulary, fitting, and fabric care.

const LESSON_6 = {id:"itv2_u8l6", title:"Taglie e misure", icon:"\uD83D\uDCCF", xp:15, board:true, steps:[
  {type:"intro", title:"Taglie e misure",
   desc:"Master the vocabulary for sizes, measurements, and fit in Italian shops. Italian sizing systems differ from American and British ones, so these words are essential.",
   goals:["Understand Italian size systems","Describe how clothing fits","Ask for alterations and adjustments"]},

  {type:"teach", trg:"piccolo", src:"small (size S)", pos:"adj", gender:null,
   note:"Adj. Feminine: piccola. Abbreviation: S (from English 'small').\nAlso means 'little' in general.",
   example:"A: La M e troppo grande. Ha la piccola?\nB: Si, eccola.",
   exampleSrc:"A: The M is too big. Do you have the small?\nB: Yes, here it is.",
   funFact:"International letter sizes (S, M, L, XL) are used alongside Italian numbered sizes. Italian S = taglia 42 for women, taglia 46 for men. Knowing both systems helps: 'Vorrei una taglia piccola, la 42' covers all bases."},

  {type:"teach", trg:"medio", src:"medium (size M)", pos:"adj", gender:null,
   note:"Adj. Feminine: media. From Latin 'medius' (middle).\n'Taglia media' = medium size.",
   example:"A: Che taglia prende?\nB: Di solito la media, la M.",
   exampleSrc:"A: What size do you take?\nB: Usually medium, M.",
   funFact:"From Latin 'medius' (middle), which gave English 'medium,' 'median,' and 'medieval' (middle ages). Italian M = taglia 44 for women, taglia 48 for men. The word 'media' also means 'average' in Italian statistics and everyday speech."},

  {type:"teach", trg:"grande", src:"large (size L)", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\n'Taglia grande' = large size. Also 'big' in general.",
   example:"A: Questa e un po' piccola. Ha una taglia piu grande?\nB: La L va bene?",
   exampleSrc:"A: This is a bit small. Do you have a bigger size?\nB: Does the L work?",
   funFact:"In Italian, 'grande' is one of the most versatile adjectives. 'Una grande citta' (a great city), 'una taglia grande' (a large size), 'un grande uomo' (a great man). Before a noun, it can mean 'great' rather than 'big.'"},

  {type:"teach", trg:"il numero", src:"the number / shoe size", pos:"noun", gender:"m",
   note:"Masculine. For shoes: 'Che numero porta?' = What shoe size do you wear?\nItalian shoe sizes differ from US/UK.",
   example:"A: Che numero porta?\nB: Il quarantadue.",
   exampleSrc:"A: What shoe size do you wear?\nB: Forty-two.",
   funFact:"Italian shoe sizes use the Paris Point system: each size is 6.67mm. A US men's 9 = Italian 42. A US women's 8 = Italian 39. Italian shoe stores always have a conversion chart. 'Numero' for shoes, 'taglia' for clothes."},

  {type:"teach", trg:"lungo", src:"long", pos:"adj", gender:null,
   note:"Adj. Feminine: lunga. Opposite: corto (short).\nFrom Latin 'longus' (long).",
   example:"A: I pantaloni sono troppo lunghi.\nB: Li possiamo accorciare.",
   exampleSrc:"A: The trousers are too long.\nB: We can shorten them.",
   funFact:"From Latin 'longus' (long). English 'long,' 'longitude,' and 'prolong' share the root. In Italian fashion, trouser length is crucial. 'Pantaloni lunghi' (long trousers), 'pantaloni corti' (shorts). Tailoring ('sartoria') is still very common in Italy."},

  {type:"teach", trg:"corto", src:"short (length)", pos:"adj", gender:null,
   note:"Adj. Feminine: corta. Opposite: lungo (long).\nFrom Latin 'curtus' (cut short).",
   example:"A: Le maniche sono troppo corte.\nB: Purtroppo non possiamo allungarle.",
   exampleSrc:"A: The sleeves are too short.\nB: Unfortunately we cannot lengthen them.",
   funFact:"From Latin 'curtus' (shortened), which also gave English 'curtail' and 'curt.' 'Corto' describes length: 'gonna corta' (short skirt), 'capelli corti' (short hair). For height, Italians use 'basso' (low/short) for people, not 'corto.'"},

  {type:"teach", trg:"la seta", src:"silk", pos:"noun", gender:"f",
   note:"Feminine. From Latin 'seta' (bristle, later silk thread).\n'Di seta' = made of silk. Como is Italy's silk capital.",
   example:"A: Questa cravatta e di seta?\nB: Si, seta italiana di Como.",
   exampleSrc:"A: Is this tie silk?\nB: Yes, Italian silk from Como.",
   funFact:"Lake Como has been Italy's silk center since the 15th century. The area produces over 80% of Europe's silk. Italian silk ties, scarves, and shirts are luxury goods worldwide. 'Seta' originally meant 'bristle' in Latin, then shifted to mean silk fiber."},

  {type:"teach", trg:"il cotone", src:"cotton", pos:"noun", gender:"m",
   note:"Masculine. From Arabic 'qutn' (cotton).\n'Di cotone' = made of cotton. 'Cotone organico' = organic cotton.",
   example:"A: Preferisce cotone o sintetico?\nB: Cotone, per favore. E piu fresco.",
   exampleSrc:"A: Do you prefer cotton or synthetic?\nB: Cotton, please. It is cooler.",
   funFact:"From Arabic 'qutn,' entering Italian during medieval trade. Cotton transformed global trade and history. Egyptian cotton and Sea Island cotton are the most prized varieties. Italian 'cotone organico' (organic cotton) is a growing market segment."},

  {type:"teach", trg:"la taglia unica", src:"one size / one size fits all", pos:"noun", gender:"f",
   note:"'Unica' = unique/single. 'Taglia unica' = universal size.\nCommon for scarves, hats, gloves.",
   example:"A: C'e solo una taglia?\nB: Si, e taglia unica.",
   exampleSrc:"A: Is there only one size?\nB: Yes, it is one size fits all.",
   funFact:"'Taglia unica' means the item comes in only one size designed to fit most people. Common for accessories: scarves ('sciarpe'), hats ('cappelli'), some dresses. The concept works better for stretchy or draped items than structured clothing."},

  {type:"teach", trg:"aderente", src:"tight-fitting / form-fitting", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\nFrom 'aderire' (to adhere, to cling).",
   example:"A: Preferisce aderente o morbido?\nB: Aderente, mi piace lo stile slim.",
   exampleSrc:"A: Do you prefer tight-fitting or soft?\nB: Tight-fitting, I like the slim style.",
   funFact:"From 'aderire' (to cling to), from Latin 'adhaerere.' The same root gave English 'adhere' and 'adhesive.' Italian fashion often distinguishes 'aderente' (intentionally snug), 'stretto' (too tight/uncomfortable), and 'slim fit' (modern cut)."},

  // Quiz steps
  {type:"mc", q:"What is the difference between 'numero' and 'taglia'?",
   opts:["Numero is for shoes, taglia is for clothes","They are the same","Numero is bigger","Taglia is for shoes"],
   ans:"Numero is for shoes, taglia is for clothes",
   hint:"'Che n... porta?' for feet, 'Che t... porta?' for body. Different systems entirely."},

  {type:"fb", s:"I pantaloni sono troppo {1}.",
   a:["lunghi"],
   opts:["lunghi","corti","stretti","larghi"],
   hint:"The trousers extend past your feet. They need to be shortened. This adjective means 'long.'",
   sSrc:"The trousers are too {1}."},

  {type:"match", pairs:[
    {trg:"piccolo", src:"small"},
    {trg:"medio", src:"medium"},
    {trg:"grande", src:"large"},
    {trg:"lungo", src:"long"},
    {trg:"corto", src:"short"}
  ]},

  {type:"mc", q:"Which Italian city is the historic center of silk production?",
   opts:["Como","Milan","Rome","Florence"],
   ans:"Como",
   hint:"This lakeside city in northern Italy has produced over 80% of Europe's silk since the 15th century."},

  {type:"fb", s:"Questa cravatta e di {1}?",
   a:["seta"],
   opts:["seta","lana","cotone","pelle"],
   hint:"This luxury fabric feels smooth and has a natural sheen. Como produces most of Europe's supply.",
   sSrc:"Is this tie {1}?"},

  {type:"mc", q:"What does 'aderente' mean for clothing?",
   opts:["Tight-fitting / form-fitting","Loose","Oversized","Casual"],
   ans:"Tight-fitting / form-fitting",
   hint:"From 'aderire' (to cling). The fabric follows the shape of your body closely."},

  {type:"fb", s:"Che {1} porta? Il quarantadue?",
   a:["numero"],
   opts:["numero","taglia","misura","scarpe"],
   hint:"This word is specifically used for shoe sizes. It differs between Italian and American systems.",
   sSrc:"What {1} do you wear? Forty-two?"},

  {type:"mc", q:"What does 'taglia unica' mean?",
   opts:["One size fits all","Unique design","Small size","Custom made"],
   ans:"One size fits all",
   hint:"'Unica' means single/unique. The item comes in only one s... designed for most people."},

  {type:"fb", s:"Preferisce {1} o sintetico?",
   a:["cotone"],
   opts:["cotone","seta","lana","pelle"],
   hint:"This natural plant fiber is breathable and cool. From Arabic 'qutn.' The everyday fabric choice.",
   sSrc:"Do you prefer {1} or synthetic?"}
]};
export default LESSON_6;
