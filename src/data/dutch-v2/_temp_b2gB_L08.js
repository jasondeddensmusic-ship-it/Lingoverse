// Dutch B2 gapB Lesson 08. Kleding en Stijl
// Clothing, fashion, and textile vocabulary

const LESSON_8 = {id:"nlv2_b2gB_l8", title:"Kleding en Stijl", icon:"\u{1F457}", xp:25, board:true, steps:[
{type:"intro", title:"Kleding en Stijl",
 desc:"From traditional folk costumes to modern fashion, Dutch clothing vocabulary reveals cultural attitudes about style, practicality, and self-expression.",
 goals:["8 clothing and textile nouns and adjectives","Discuss fashion and style choices","Understand Dutch attitudes toward clothing"]},

{type:"teach", trg:"de kledingstijl", src:"clothing style / fashion style", pos:"noun", gender:"c",
 note:"Kleding (clothing) + stijl (style).\n'Je kledingstijl zegt veel over je' = your style says a lot about you.",
 example:"A: Wat is jouw kledingstijl?\nB: Casual, denk ik. Spijkerbroek en sneakers.\nA: Typisch Nederlands eigenlijk.\nB: Ja, we zijn niet zo modebewust.",
 exampleSrc:"A: What's your clothing style?\nB: Casual, I think. Jeans and sneakers.\nA: Typically Dutch, actually.\nB: Yes, we're not very fashion-conscious.",
 funFact:"The Dutch are known for practical, understated fashion. 'Doe maar gewoon' (just be normal) extends to clothing choices."},

{type:"teach", trg:"de kledij", src:"attire / garb (formal/archaic)", pos:"noun", gender:"c",
 note:"More formal or literary than 'kleding'.\nUsed in Belgian Dutch more than in the Netherlands.",
 example:"A: De traditionele kledij is prachtig.\nB: Ja, de Volendamse klederdracht.\nA: Dragen mensen dat nog?\nB: Alleen bij feesten en op foto's.",
 exampleSrc:"A: The traditional attire is beautiful.\nB: Yes, the Volendam folk costume.\nA: Do people still wear it?\nB: Only at festivals and for photos.",
 funFact:"Volendam and Staphorst are among the last Dutch towns where traditional folk dress is occasionally still worn."},

{type:"teach", trg:"de kleurstof", src:"dye / coloring agent", pos:"noun", gender:"c",
 note:"Kleur (color) + stof (substance).\nUsed for textiles and food coloring.",
 example:"A: Deze stof is geverfd met natuurlijke kleurstof.\nB: Dat verklaart de zachte kleuren.\nA: Chemische kleurstoffen zijn feller.\nB: Maar minder milieuvriendelijk.",
 exampleSrc:"A: This fabric is dyed with natural dye.\nB: That explains the soft colors.\nA: Chemical dyes are brighter.\nB: But less environmentally friendly.",
 funFact:"The Dutch were major traders in indigo dye from their colonies, which created the famous 'Delft blue' color in pottery."},

{type:"teach", trg:"de kleedruimte", src:"changing room / dressing room", pos:"noun", gender:"c",
 note:"Kleed (dress) + ruimte (room/space).\n'De paskamer' is more common in shops.",
 example:"A: Waar is de kleedruimte?\nB: Aan het einde van de gang.\nA: Mag ik drie stuks meenemen?\nB: Ja hoor, geen probleem.",
 exampleSrc:"A: Where is the changing room?\nB: At the end of the hallway.\nA: Can I take three items?\nB: Sure, no problem.",
 funFact:"In Dutch sports, the changing room (kleedkamer) is where important team talks happen. 'In de kleedkamer' is also a common news phrase."},

{type:"teach", trg:"het korset", src:"corset", pos:"noun", gender:"n",
 note:"From French. A historical undergarment.\n'Strak als een korset' = tight as a corset.",
 example:"A: Vrouwen droegen vroeger een korset.\nB: Dat lijkt me verschrikkelijk oncomfortabel.\nA: Het was mode, maar ook ongezond.\nB: Gelukkig is dat veranderd.",
 exampleSrc:"A: Women used to wear a corset.\nB: That seems terribly uncomfortable.\nA: It was fashionable, but also unhealthy.\nB: Fortunately that has changed.",
 funFact:"The Rijksmuseum in Amsterdam has an extensive collection of historical Dutch fashion, including 17th-century corsets and ruffs."},

{type:"teach", trg:"de hoepelrok", src:"hoop skirt / crinoline", pos:"noun", gender:"c",
 note:"Hoepel (hoop) + rok (skirt).\nPopular in the 17th-19th century.",
 example:"A: De hoepelrok was heel populair in de Gouden Eeuw.\nB: Hoe liepen vrouwen daarmee?\nA: Heel voorzichtig door smalle deuren.\nB: De mode was belangrijker dan gemak.",
 exampleSrc:"A: The hoop skirt was very popular in the Golden Age.\nB: How did women walk with those?\nA: Very carefully through narrow doors.\nB: Fashion was more important than comfort.",
 funFact:"Dutch Golden Age paintings by Vermeer and Rembrandt show the elaborate fashion of the 17th century, including ruffs, capes, and hoepelrokken."},

{type:"teach", trg:"klantgericht", src:"customer-oriented", pos:"adj", gender:null,
 note:"Klant (customer) + gericht (oriented/focused).\n'Klantgerichtheid' = customer orientation.",
 example:"A: Dit bedrijf is heel klantgericht.\nB: Ja, de service is uitstekend.\nA: Ze luisteren echt naar feedback.\nB: Dat merk je aan alles.",
 exampleSrc:"A: This company is very customer-oriented.\nB: Yes, the service is excellent.\nA: They really listen to feedback.\nB: You notice that in everything.",
 funFact:"Dutch directness and customer orientation can seem contradictory: they will tell you honestly if something looks bad on you."},

{type:"teach", trg:"kernachtig", src:"concise / pithy / succinct", pos:"adj", gender:null,
 note:"From 'kern' (core/kernel).\nGetting to the core of the matter.",
 example:"A: Zijn presentatie was heel kernachtig.\nB: Ja, kort maar krachtig.\nA: Precies wat we nodig hadden.\nB: Geen woord te veel.",
 exampleSrc:"A: His presentation was very concise.\nB: Yes, short but powerful.\nA: Exactly what we needed.\nB: Not a word too many.",
 funFact:"The Dutch value 'kernachtig' communication. Long-winded speeches are poorly received. Get to the point is the cultural motto."},

{type:"mc", q:"'De kledij' is:",
 opts:["Attire (formal word)","A fashion designer","A textile factory","A clothing store"],
 ans:"Attire (formal word)",
 hint:"A more f... or literary w... for clothing, used especially in Belgian Dutch"},

{type:"fb", s:"De {1} is geverfd met natuurlijke materialen.",
 a:["kleurstof"], opts:["kleurstof","kledingstijl","kledij","kleedruimte"],
 hint:"The substance used to color fabric or food",
 sSrc:"The {1} is made with natural materials."},

{type:"mc", q:"'Klantgericht' betekent:",
 opts:["Client-free","Customer-oriented","Store-focused","Budget-friendly"],
 ans:"Customer-oriented",
 hint:"Klant (c...) + gericht (o...). A business quality."},

{type:"fb", s:"Waar is de {1}? Ik wil dit passen.",
 a:["kleedruimte"], opts:["kleedruimte","kledingstijl","hoepelrok","korset"],
 hint:"The room where you try on clothes",
 sSrc:"Where is the {1}? I want to try this on."},

{type:"match", pairs:[
 {trg:"de kledingstijl", src:"clothing style"},
 {trg:"de kledij", src:"attire"},
 {trg:"de kleurstof", src:"dye"},
 {trg:"de kleedruimte", src:"changing room"}
]},

{type:"mc", q:"'Kernachtig' betekent:",
 opts:["Colorful","Nuclear","Concise and to the point","Loud"],
 ans:"Concise and to the point",
 hint:"From 'kern' (core). Getting to the core of the matter without extra words."},

{type:"fb", s:"De {1} was heel populair in de zeventiende eeuw.",
 a:["hoepelrok"], opts:["hoepelrok","kleedruimte","kledingstijl","kleurstof"],
 hint:"The wide skirt supported by hoops, worn in the Golden Age",
 sSrc:"The {1} was very popular in the seventeenth century."},

{type:"match", pairs:[
 {trg:"het korset", src:"corset"},
 {trg:"de hoepelrok", src:"hoop skirt"},
 {trg:"klantgericht", src:"customer-oriented"},
 {trg:"kernachtig", src:"concise"}
]}
]};
export default LESSON_8;
