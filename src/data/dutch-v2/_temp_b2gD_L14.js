// L14: Keuken en Kooktraditie. Kitchen and Cooking Traditions
const LESSON_14 = {
  id:"nlv2_b2gD_l14", title:"Keuken en Kooktraditie", icon:"\u{1F373}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Kitchen and Cooking Traditions",
     desc:"Dutch food culture is more diverse than its reputation suggests. Learn vocabulary about cooking traditions, traditional food, and the evolving Dutch kitchen.",
     goals:["Master 10 food and cooking terms","Discuss Dutch culinary traditions","Navigate kitchen and cooking vocabulary"]},

    {type:"teach", trg:"de kooktraditie", src:"the cooking tradition", pos:"noun", gender:"c",
     note:"Common gender (de). Kook (cooking) + traditie (tradition).\n'Een rijke kooktraditie' = a rich cooking tradition.",
     example:"A: Nederland heeft een bescheiden kooktraditie.\nB: Dat is een beetje oneerlijk.\nA: Stamppot en erwtensoep zijn toch klassiekers?\nB: En de Indonesische invloed is geweldig.",
     exampleSrc:"A: The Netherlands has a modest cooking tradition.\nB: That's a bit unfair.\nA: Stamppot and pea soup are classics, right?\nB: And the Indonesian influence is amazing.",
     funFact:"Dutch cuisine has been heavily influenced by its colonial past. The 'rijsttafel' (rice table) is an elaborate Indonesian-Dutch dining tradition found in no other country."},

    {type:"teach", trg:"de kookcultuur", src:"the cooking culture / food culture", pos:"noun", gender:"c",
     note:"Common gender (de). Kook (cooking) + cultuur (culture).\n'De Nederlandse kookcultuur verandert' = Dutch food culture is changing.",
     example:"A: De kookcultuur in Nederland is enorm veranderd.\nB: Hoezo?\nA: Vroeger aten we elke dag aardappelen.\nB: Nu koken mensen van alles, van sushi tot tajine.",
     exampleSrc:"A: Food culture in the Netherlands has changed enormously.\nB: How so?\nA: We used to eat potatoes every day.\nB: Now people cook everything, from sushi to tagine.",
     funFact:"The traditional Dutch meal was 'aardappelen, groente, vlees' (potatoes, vegetables, meat) eaten at 6pm sharp. Modern Dutch kitchens now feature global cuisines from pasta to pad thai."},

    {type:"teach", trg:"de drop", src:"liquorice", pos:"noun", gender:"c",
     note:"Common gender (de). From Middle Dutch.\n'Zoete drop' = sweet liquorice. 'Zoute drop' = salted liquorice.",
     example:"A: Wil je een dropje?\nB: Is het zoet of zout?\nA: Dubbel zout!\nB: Te zout voor mij, ik hou van zoete drop.",
     exampleSrc:"A: Do you want a liquorice?\nB: Is it sweet or salty?\nA: Double salt!\nB: Too salty for me, I like sweet liquorice.",
     funFact:"The Dutch consume more liquorice per capita than any nation on earth: about 2kg per person per year. 'Dubbel zout' (double salt) liquorice shocks most foreigners."},

    {type:"teach", trg:"de gum", src:"the eraser / gum", pos:"noun", gender:"c",
     note:"Common gender (de). From English 'gum'.\nIn Dutch, 'gum' primarily means eraser, not chewing gum (which is 'kauwgom').",
     example:"A: Heb je een gum?\nB: Ja, hier.\nA: Ik heb een fout gemaakt.\nB: Met potlood schrijven heeft voordelen!",
     exampleSrc:"A: Do you have an eraser?\nB: Yes, here.\nA: I made a mistake.\nB: Writing in pencil has advantages!",
     funFact:"In Dutch, 'gum' means eraser and 'kauwgom' means chewing gum. If you ask for 'gum' in a Dutch classroom, you will get an eraser, not something to chew."},

    {type:"mc",
     q:"Hoeveel drop eten Nederlanders gemiddeld per persoon per jaar?",
     opts:["Ongeveer 2 kilo","Ongeveer 100 gram","Ongeveer 5 kilo","Ongeveer 10 kilo"],
     ans:"Ongeveer 2 kilo",
     hint:"The Dutch are the world's biggest consumers of this candy per capita. The amount is measured in kilograms, not grams."},

<<<<<<< HEAD
    {type:"teach", trg:"het bauxiet", src:"bauxite", pos:"noun", gender:"n",
=======
    {type:"teach", trg:"het bauxiet", src:"bauxite", pos:"noun", gender:"c",
>>>>>>> origin/main
     note:"Common gender (de). Named after Les Baux, France where it was discovered.\nThe raw material for aluminium.",
     example:"A: Bauxiet is de grondstof voor aluminium.\nB: Waar wordt het gewonnen?\nA: Vooral in tropische landen.\nB: Suriname was ooit een grote producent.",
     exampleSrc:"A: Bauxite is the raw material for aluminium.\nB: Where is it mined?\nA: Mainly in tropical countries.\nB: Suriname was once a major producer.",
     funFact:"Suriname's bauxite mines were crucial to the Dutch economy. The American company Alcoa operated mines there from 1916 to 2015, transforming the country's economy."},

    {type:"teach", trg:"de feministe", src:"the feminist (female)", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'feministe'.\n'Een overtuigde feministe' = a committed feminist.",
     example:"A: Aletta Jacobs was de eerste Nederlandse feministe.\nB: Wat deed ze precies?\nA: Ze vocht voor vrouwenkiesrecht.\nB: En ze was de eerste vrouwelijke arts.",
     exampleSrc:"A: Aletta Jacobs was the first Dutch feminist.\nB: What did she do exactly?\nA: She fought for women's suffrage.\nB: And she was the first female doctor.",
     funFact:"Aletta Jacobs (1854-1929) was the first woman to attend a Dutch university and the first female physician. She campaigned for women's rights, birth control, and peace."},

    {type:"teach", trg:"de hostess", src:"the hostess / receptionist", pos:"noun", gender:"c",
     note:"Common gender (de). From English.\n'Een hostess bij een evenement' = a hostess at an event.",
     example:"A: De hostess verwelkomde ons bij de deur.\nB: Was het een groot evenement?\nA: Ja, met meer dan vijfhonderd gasten.\nB: Goed georganiseerd!",
     exampleSrc:"A: The hostess welcomed us at the door.\nB: Was it a big event?\nA: Yes, with more than five hundred guests.\nB: Well organised!",
     funFact:"In Dutch, 'hostess' specifically refers to a woman who welcomes guests at events or exhibitions. The male equivalent 'host' is less commonly used in this professional context."},

    {type:"fb",
     s:"Nederland staat bekend om zijn {1}, vooral de zoute variant die buitenlanders schokt.",
     a:["drop"],
     opts:["drop","karamel","kebab","gum"],
     hint:"A black candy made from liquorice root. The Dutch eat more of this per capita than any other nation.",
     sSrc:"The Netherlands is known for its {1}, especially the salty variety that shocks foreigners."},

    {type:"teach", trg:"het kweken", src:"to grow / to cultivate / breeding", pos:"verb", gender:null,
     note:"Verb. From Middle Dutch.\n'Planten kweken' = to grow plants. 'Dieren kweken' = to breed animals.",
     example:"A: Mijn buurman kweekt rozen in zijn tuin.\nB: Hoeveel soorten heeft hij?\nA: Meer dan twintig verschillende.\nB: Dat is indrukwekkend!",
     exampleSrc:"A: My neighbour grows roses in his garden.\nB: How many varieties does he have?\nA: More than twenty different ones.\nB: That's impressive!",
     funFact:"The Netherlands is the world's largest flower exporter. Dutch growers 'kweken' billions of tulips, roses, and other flowers annually. The Aalsmeer flower auction is the world's largest."},

    {type:"teach", trg:"de kering", src:"the barrier / dam / turning", pos:"noun", gender:"c",
     note:"Common gender (de). From 'keren' (to turn/stop).\n'De Maeslantkering' = the Maeslant storm surge barrier.",
     example:"A: De stormvloedkering beschermt Rotterdam.\nB: Hoe werkt die?\nA: Bij hoog water sluiten de deuren automatisch.\nB: Een indrukwekkend staaltje techniek.",
     exampleSrc:"A: The storm surge barrier protects Rotterdam.\nB: How does it work?\nA: When the water is high, the doors close automatically.\nB: An impressive feat of engineering.",
     funFact:"The Maeslantkering near Rotterdam is one of the largest moving structures on Earth. Each arm is as long as the Eiffel Tower is tall. It is part of the Deltawerken (Delta Works)."},

    {type:"match", pairs:[
      {trg:"kooktraditie", src:"cooking tradition"},
      {trg:"drop", src:"liquorice"},
      {trg:"feministe", src:"feminist"},
      {trg:"kweken", src:"to grow / cultivate"},
      {trg:"kering", src:"barrier / dam"}
    ]},

    {type:"mc",
     q:"Wat is de Maeslantkering?",
     opts:["Een haven voor schepen","Een stormvloedkering die Rotterdam beschermt","Een brug over de Maas","Een museum in Rotterdam"],
     ans:"Een stormvloedkering die Rotterdam beschermt",
     hint:"This is a massive engineering structure near R.... It closes automatically when water levels threaten the city."},

    {type:"fb",
     s:"Nederlandse tuinders {1} bloemen die over de hele wereld worden geexporteerd.",
     a:["kweken"],
     opts:["kweken","koken","keren","kopen"],
     hint:"The process of growing plants or breeding animals through careful cultivation. Starts with 'kw'.",
     sSrc:"Dutch growers {1} flowers that are exported all over the world."}
  ]
};
export default LESSON_14;
