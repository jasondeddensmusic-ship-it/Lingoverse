// L05: Koffie en Keuken — Coffee Culture and Cooking
const LESSON_5 = {
  id:"nlv2_b2gC_l5", title:"Koffie en Keuken", icon:"\u2615", xp:15, board:true,
  steps:[
    {type:"intro", title:"Coffee Culture and Cooking",
     desc:"Coffee is central to Dutch social life. Learn the vocabulary of coffee culture, cooking traditions, and the foods that define the Netherlands.",
     goals:["Master 12 food, drink, and cooking terms","Discuss Dutch coffee and food culture","Navigate kitchen and dining vocabulary"]},

    {type:"teach", trg:"de koffieautomaat", src:"the coffee machine / vending machine", pos:"noun", gender:"c",
     note:"Common gender (de). Koffie (coffee) + automaat (machine).\nEvery Dutch office has one.",
     example:"A: De koffieautomaat is weer kapot.\nB: Alweer? Dat is de derde keer deze maand.\nA: Ik haal wel koffie bij de bakker.\nB: Neem voor mij ook een cappuccino mee!",
     exampleSrc:"A: The coffee machine is broken again.\nB: Again? That's the third time this month.\nA: I'll get coffee from the bakery.\nB: Get me a cappuccino too!",
     funFact:"The Netherlands drinks more coffee per capita than almost any other country. About 3-4 cups per day is normal."},

    {type:"teach", trg:"het koffiehuis", src:"the coffeehouse / cafe", pos:"noun", gender:"n",
     note:"Neuter (het). Koffie (coffee) + huis (house).\nNot to be confused with a 'coffeeshop' (cannabis).",
     example:"A: Zullen we naar het koffiehuis gaan?\nB: Goed idee, welk?\nA: Dat nieuwe op de hoek van de straat.\nB: Oh ja, ik heb er goede dingen over gehoord.",
     exampleSrc:"A: Shall we go to the coffeehouse?\nB: Good idea, which one?\nA: That new one on the street corner.\nB: Oh yes, I've heard good things about it.",
     funFact:"In the Netherlands, a 'koffiehuis' is a traditional cafe. A 'coffeeshop' sells cannabis. Tourists often confuse the two!"},

    {type:"teach", trg:"de kookcultuur", src:"the cooking culture / culinary culture", pos:"noun", gender:"c",
     note:"Common gender (de). Kook (cooking) + cultuur (culture).\nDutch food culture is evolving rapidly.",
     example:"A: De Nederlandse kookcultuur verandert snel.\nB: Vroeger was het altijd aardappels.\nA: Nu koken mensen van alles.\nB: Ja, met invloeden uit de hele wereld.",
     exampleSrc:"A: Dutch cooking culture is changing quickly.\nB: In the past it was always potatoes.\nA: Now people cook all sorts of things.\nB: Yes, with influences from all over the world.",
     funFact:"Traditional Dutch cuisine was simple: potatoes, vegetables, and meat. Indonesian and Surinamese influences transformed Dutch cooking."},

    {type:"teach", trg:"de kroket", src:"the croquette", pos:"noun", gender:"c",
     note:"Common gender (de). A deep-fried snack with ragout filling.\n'Uit de muur' = from the vending wall.",
     example:"A: Wil je een kroket?\nB: Ja lekker! Uit de muur?\nA: Natuurlijk, de beste komen van FEBO.\nB: Met mosterd, alsjeblieft!",
     exampleSrc:"A: Do you want a croquette?\nB: Yes please! From the vending wall?\nA: Of course, the best ones come from FEBO.\nB: With mustard, please!",
     funFact:"FEBO's 'automatiek' (vending wall) is a Dutch icon. You put in a coin, open a little door, and grab your hot kroket."},

    {type:"mc",
     q:"Wat is het verschil tussen een koffiehuis en een coffeeshop in Nederland?",
     opts:["Er is geen verschil","Een koffiehuis verkoopt koffie, een coffeeshop verkoopt cannabis","Een koffiehuis is duurder","Een coffeeshop is een modern koffiehuis"],
     ans:"Een koffiehuis verkoopt koffie, een coffeeshop verkoopt cannabis",
     hint:"This is a famous Dutch distinction that confuses many tourists visiting Amsterdam."},

    {type:"teach", trg:"de karamel", src:"the caramel", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'caramel'.\n'Stroopwafels' are filled with karamel.",
     example:"A: Wil je karamel op je ijs?\nB: Ja, graag! En slagroom.\nA: Je hebt echt een zoete tand.\nB: Dat weet ik, maar het is zo lekker!",
     exampleSrc:"A: Do you want caramel on your ice cream?\nB: Yes, please! And whipped cream.\nA: You really have a sweet tooth.\nB: I know, but it's so delicious!",
     funFact:"The stroopwafel, a thin waffle filled with caramel syrup, was invented in Gouda around 1784. It is now eaten worldwide."},

    {type:"teach", trg:"de kebab", src:"the kebab", pos:"noun", gender:"c",
     note:"Common gender (de). From Turkish/Arabic.\nVery popular Dutch street food.",
     example:"A: Zullen we een kebab halen?\nB: Ja, ik heb honger als een paard.\nA: Met alles erop?\nB: Natuurlijk, knoflooksaus en sambal!",
     exampleSrc:"A: Shall we get a kebab?\nB: Yes, I'm hungry as a horse.\nA: With everything on it?\nB: Of course, garlic sauce and sambal!",
     funFact:"The 'kapsalon' (a Rotterdam kebab dish with fries, cheese, and salad) was invented in 2003 by a hairdresser. 'Kapsalon' means hair salon!"},

    {type:"teach", trg:"de kers", src:"the cherry", pos:"noun", gender:"c",
     note:"Common gender (de). Related to German 'Kirsche'.\n'De kers op de taart' = the cherry on the cake.",
     example:"A: Wil je een kers op je taart?\nB: Ja, dat maakt het af.\nA: De kersen komen uit de Betuwe.\nB: Die zijn altijd het lekkerst!",
     exampleSrc:"A: Do you want a cherry on your cake?\nB: Yes, that finishes it off.\nA: The cherries come from the Betuwe.\nB: Those are always the tastiest!",
     funFact:"The Betuwe region between the rivers is known for its cherry orchards. 'De kers op de taart' is the Dutch equivalent of 'the icing on the cake'."},

    {type:"fb",
     s:"De {1} op het werk is weer kapot, ik ga koffie halen bij de bakker.",
     a:["koffieautomaat"],
     opts:["koffieautomaat","koffiehuis","kookcultuur","karamel"],
     hint:"The device in an office that automatically makes coffee for employees.",
     sSrc:"The {1} at work is broken again, I'm going to get coffee from the bakery."},

    {type:"teach", trg:"de kooktraditie", src:"the cooking tradition", pos:"noun", gender:"c",
     note:"Common gender (de). Kook (cooking) + traditie (tradition).\n'Traditioneel koken' = cooking traditionally.",
     example:"A: Elke regio heeft een eigen kooktraditie.\nB: Zoals stamppot in het noorden?\nA: Ja, en mosselsoep in Zeeland.\nB: En haring overal langs de kust.",
     exampleSrc:"A: Every region has its own cooking tradition.\nB: Like stamppot in the north?\nA: Yes, and mussel soup in Zeeland.\nB: And herring everywhere along the coast.",
     funFact:"Dutch 'stamppot' (mashed pot) combines potatoes with vegetables like kale, sauerkraut, or carrots. It is classic winter food."},

    {type:"teach", trg:"de krokodil", src:"the crocodile", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'crocodilus'.\n'Krokodillentranen' = crocodile tears (false tears).",
     example:"A: Heb je de krokodillen in de dierentuin gezien?\nB: Ja, ze waren enorm!\nA: Ik vind ze eng, eerlijk gezegd.\nB: Ze bewegen nauwelijks, maar toch!",
     exampleSrc:"A: Have you seen the crocodiles at the zoo?\nB: Yes, they were huge!\nA: I find them scary, to be honest.\nB: They barely move, but still!",
     funFact:"'Krokodillentranen huilen' (to cry crocodile tears) is used in Dutch just like in English, meaning to fake sadness."},

    {type:"teach", trg:"de knuffel", src:"the cuddle / stuffed animal", pos:"noun", gender:"c",
     note:"Common gender (de). From 'knuffelen' (to cuddle).\nDouble meaning: a hug AND a soft toy.",
     example:"A: Mag ik een knuffel?\nB: Natuurlijk, kom hier!\nA: Ik had een rotdag.\nB: Dan heb je een extra grote knuffel nodig.",
     exampleSrc:"A: Can I have a cuddle?\nB: Of course, come here!\nA: I had a terrible day.\nB: Then you need an extra big cuddle.",
     funFact:"A 'knuffeldier' or 'knuffelbeest' is a stuffed animal. Dutch children often take their favourite 'knuffel' everywhere."},

    {type:"mc",
     q:"'De kers op de taart' betekent:",
     opts:["Het duurste dessert","Het moeilijkste recept","Het perfecte afsluitende detail","Een probleem in de keuken"],
     ans:"Het perfecte afsluitende detail",
     hint:"Like the English expression 'the cherry on top' or 'the icing on the cake'."},

    {type:"fb",
     s:"De kinderen huilen {1} als ze hun zin niet krijgen.",
     a:["krokodillentranen"],
     opts:["krokodillentranen","krokodillen","karamellen","kersen"],
     hint:"Tears that are not real, just for show. Named after a reptile.",
     sSrc:"The children cry {1} when they don't get their way."},

    {type:"match", pairs:[
      {trg:"koffieautomaat", src:"coffee machine"},
      {trg:"koffiehuis", src:"coffeehouse"},
      {trg:"kroket", src:"croquette"},
      {trg:"karamel", src:"caramel"}
    ]},

    {type:"mc",
     q:"De 'kapsalon' is een gerecht uit:",
     opts:["Amsterdam","Den Haag","Rotterdam","Utrecht"],
     ans:"Rotterdam",
     hint:"This kebab dish was invented by a hairdresser in the Netherlands' second-largest city."},

    {type:"fb",
     s:"Elke regio heeft een eigen {1}, van stamppot tot mosselsoep.",
     a:["kooktraditie"],
     opts:["kooktraditie","kookcultuur","koffiehuis","kroket"],
     hint:"The customs and recipes that have been passed down through generations in a specific area.",
     sSrc:"Every region has its own {1}, from stamppot to mussel soup."},

    {type:"match", pairs:[
      {trg:"knuffel", src:"cuddle / stuffed animal"},
      {trg:"kers", src:"cherry"},
      {trg:"kooktraditie", src:"cooking tradition"},
      {trg:"krokodil", src:"crocodile"}
    ]},

    {type:"mc",
     q:"Een 'knuffel' kan twee dingen betekenen:",
     opts:["Een hond en een kat","Een omhelzing en een zacht speelgoeddier","Een kussen en een deken","Een kind en een volwassene"],
     ans:"Een omhelzing en een zacht speelgoeddier",
     hint:"The verb 'knuffelen' means to cuddle. The noun can be the act itself or a soft toy you cuddle."}
  ]
};
export default LESSON_5;
