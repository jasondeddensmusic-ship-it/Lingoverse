// Dutch B2 gapB Lesson 06. Koken en Smaak
// Kitchen, cooking culture, and food vocabulary

const LESSON_6 = {id:"nlv2_b2gB_l6", title:"Koken en Smaak", icon:"\u{1F373}", xp:25, board:true, steps:[
{type:"intro", title:"Koken en Smaak",
 desc:"Dutch food culture goes far beyond stamppot and cheese. Learn vocabulary for cooking traditions, food items, and the café culture that brings people together.",
 goals:["8 food, cooking, and café nouns","Discuss Dutch food culture","Navigate kitchen and café vocabulary"]},

{type:"teach", trg:"de kookcultuur", src:"cooking culture", pos:"noun", gender:"c",
 note:"Kook (cooking) + cultuur (culture).\nDutch cooking is evolving rapidly.",
 example:"A: De Nederlandse kookcultuur verandert.\nB: Hoezo dan?\nA: Vroeger aten we alleen aardappelen.\nB: Nu zijn er invloeden van overal.",
 exampleSrc:"A: Dutch cooking culture is changing.\nB: How so?\nA: We used to eat only potatoes.\nA: Now there are influences from everywhere.",
 funFact:"Traditional Dutch cuisine was famously plain, but Indonesian, Surinamese, and Turkish influences have transformed it into one of Europe's most diverse food scenes."},

{type:"teach", trg:"de kooktraditie", src:"cooking tradition", pos:"noun", gender:"c",
 note:"Kook + traditie (tradition).\n'Familierecept' = family recipe.",
 example:"A: Elke familie heeft eigen kooktradities.\nB: Klopt, mijn oma's erwtensoep is legendarisch.\nA: Mag ik het recept?\nB: Dat is een familiegeheim!",
 exampleSrc:"A: Every family has its own cooking traditions.\nB: True, my grandma's pea soup is legendary.\nA: Can I have the recipe?\nB: That's a family secret!",
 funFact:"Erwtensoep (pea soup) is the quintessential Dutch winter dish. Tradition says it should be thick enough for a spoon to stand upright in it."},

{type:"teach", trg:"de karamel", src:"caramel", pos:"noun", gender:"c",
 note:"Same origin as English. Very popular in Dutch sweets.\n'Stroopwafel' = caramel waffle.",
 example:"A: Wil je karamel op je ijs?\nB: Ja, lekker! Ik ben dol op karamel.\nA: Dan moet je de stroopwafels eens proberen.\nB: Die ken ik, heerlijk!",
 exampleSrc:"A: Do you want caramel on your ice cream?\nB: Yes, yummy! I love caramel.\nA: Then you should try the stroopwafels.\nB: I know those, delicious!",
 funFact:"The stroopwafel, filled with caramel syrup, was invented in Gouda around 1810 by a baker using leftover crumbs and syrup."},

{type:"teach", trg:"de kroket", src:"croquette", pos:"noun", gender:"c",
 note:"A deep-fried meat ragout snack.\n'Uit de muur' = from the vending machine wall.",
 example:"A: Wil je een kroket uit de muur?\nB: Ja, graag! Met mosterd.\nA: De kroket is typisch Nederlands.\nB: Vooral na een avond stappen.",
 exampleSrc:"A: Do you want a croquette from the vending machine?\nB: Yes, please! With mustard.\nA: The croquette is typically Dutch.\nB: Especially after a night out.",
 funFact:"FEBO's 'automatiek' vending machine walls are iconic. You put in coins and pull a hot kroket from a little door. Pure Dutch engineering."},

{type:"teach", trg:"de koffieautomaat", src:"coffee machine / vending machine", pos:"noun", gender:"c",
 note:"Koffie + automaat (machine).\nFound in every Dutch office and public building.",
 example:"A: De koffieautomaat is weer kapot.\nB: Nee he, niet weer.\nA: Ik ga naar beneden voor echte koffie.\nB: Wacht, ik loop mee.",
 exampleSrc:"A: The coffee machine is broken again.\nB: Oh no, not again.\nA: I'm going downstairs for real coffee.\nB: Wait, I'll come with you.",
 funFact:"The Dutch drink an average of 3-4 cups of coffee per day, making them the second highest coffee consumers in the world per capita."},

{type:"teach", trg:"het koffiehuis", src:"coffee house", pos:"noun", gender:"n",
 note:"Koffie + huis (house).\nTraditional gathering place, not to be confused with 'coffeeshop'.",
 example:"A: Zullen we naar het koffiehuis gaan?\nB: Goed idee. Welk koffiehuis?\nA: Dat nieuwe aan de gracht.\nB: Oh ja, daar schijnt de taart lekker te zijn.",
 exampleSrc:"A: Shall we go to the coffee house?\nB: Good idea. Which coffee house?\nA: The new one on the canal.\nB: Oh yes, the cake there is supposed to be good.",
 funFact:"In Dutch, 'koffiehuis' means a traditional cafe. A 'coffeeshop' (English word used in Dutch) is where cannabis is sold. Don't confuse them!"},

{type:"teach", trg:"de kebab", src:"kebab", pos:"noun", gender:"c",
 note:"Turkish loanword, fully integrated into Dutch food culture.\n'De kebabzaak' = kebab shop.",
 example:"A: Zin in een kebab?\nB: Altijd! Met knoflooksaus?\nA: Natuurlijk. En extra groente.\nB: De beste kebab is hier om de hoek.",
 exampleSrc:"A: Fancy a kebab?\nB: Always! With garlic sauce?\nA: Of course. And extra vegetables.\nB: The best kebab is just around the corner.",
 funFact:"The 'kapsalon' (hairdresser) is a Dutch kebab invention: fries topped with shawarma, cheese, and salad, created in a Rotterdam kebab shop."},

{type:"teach", trg:"de drop", src:"liquorice", pos:"noun", gender:"c",
 note:"THE Dutch candy. Sweet, salty, or double-salt.\n'Dubbel-zoute drop' = double-salt liquorice.",
 example:"A: Wil je een dropje?\nB: Is het zoet of zout?\nA: Dubbel zout.\nB: Nee, dank je. Dat is te veel voor mij.",
 exampleSrc:"A: Want a liquorice?\nB: Is it sweet or salty?\nA: Double salt.\nB: No, thanks. That's too much for me.",
 funFact:"The Dutch consume 32 million kilos of liquorice per year, more per capita than any other country. Salty liquorice is an acquired taste."},

{type:"mc", q:"'Uit de muur' is een typisch Nederlandse manier om ... te eten.",
 opts:["Kroketten","Soep","Pannenkoeken","Broodjes"],
 ans:"Kroketten",
 hint:"FEBO's vending machine wall. You put in coins and get a hot snack."},

{type:"fb", s:"De {1} is weer kapot op kantoor.",
 a:["koffieautomaat"], opts:["koffieautomaat","kookcultuur","karamel","kebab"],
 hint:"The machine that dispenses coffee, found in every Dutch office",
 sSrc:"The {1} is broken again at the office."},

{type:"mc", q:"Wat is het verschil tussen 'koffiehuis' en 'coffeeshop' in Nederland?",
 opts:["They are the same thing","Koffiehuis serves coffee, coffeeshop sells cannabis","Koffiehuis is cheaper","Coffeeshop has better coffee"],
 ans:"Koffiehuis serves coffee, coffeeshop sells cannabis",
 hint:"A famous Dutch linguistic trap for foreigners"},

{type:"fb", s:"Nederlanders eten gemiddeld 2 kilo {1} per persoon per jaar.",
 a:["drop"], opts:["drop","karamel","kebab","kroket"],
 hint:"The black candy that comes in sweet and very salty varieties",
 sSrc:"Dutch people eat an average of 2 kilos of {1} per person per year."},

{type:"match", pairs:[
 {trg:"de kookcultuur", src:"cooking culture"},
 {trg:"de kooktraditie", src:"cooking tradition"},
 {trg:"de karamel", src:"caramel"},
 {trg:"de kroket", src:"croquette"}
]},

{type:"mc", q:"'Dubbel-zoute drop' is:",
 opts:["Liquorice-flavored ice cream","Very sweet liquorice","Double-salt liquorice","Chocolate-covered liquorice"],
 ans:"Double-salt liquorice",
 hint:"The extreme version of the Dutch national candy, with extra s..."},

{type:"fb", s:"De Nederlandse {1} is sterk beinvloed door Indonesie.",
 a:["kookcultuur"], opts:["kookcultuur","kooktraditie","koffieautomaat","kebab"],
 hint:"The broader culture around food preparation and eating habits",
 sSrc:"Dutch {1} has been strongly influenced by Indonesia."},

{type:"match", pairs:[
 {trg:"de koffieautomaat", src:"coffee machine"},
 {trg:"het koffiehuis", src:"coffee house"},
 {trg:"de kebab", src:"kebab"},
 {trg:"de drop", src:"liquorice"}
]}
]};
export default LESSON_6;
