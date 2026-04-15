// L10: Kerk en Geloof — Church and Faith
const LESSON_10 = {
  id:"nlv2_b2gD_l10", title:"Kerk en Geloof", icon:"\u{26EA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Church and Faith",
     desc:"Religion has profoundly shaped Dutch society, from the Reformation to modern secularism. Learn vocabulary to discuss churches, faith traditions, and the spiritual landscape of the Netherlands.",
     goals:["Master 10 religion and church terms","Discuss Dutch religious history","Navigate spiritual vocabulary"]},

    {type:"teach", trg:"de kerkdienst", src:"the church service", pos:"noun", gender:"c",
     note:"Common gender (de). Kerk (church) + dienst (service).\n'De zondagse kerkdienst' = the Sunday church service.",
     example:"A: Ga je nog naar de kerkdienst?\nB: Soms, met Pasen en Kerst.\nA: Mijn ouders gingen elke zondag.\nB: Dat is echt veranderd in Nederland.",
     exampleSrc:"A: Do you still go to church services?\nB: Sometimes, at Easter and Christmas.\nA: My parents went every Sunday.\nB: That has really changed in the Netherlands.",
     funFact:"The Netherlands has secularised rapidly. In the 1960s, over 60% attended weekly services. Now less than 15% do. Many churches have been converted into apartments, restaurants, or bookshops."},

    {type:"teach", trg:"het kerkgenootschap", src:"the religious denomination / church body", pos:"noun", gender:"n",
     note:"Neuter (het). Kerk (church) + genootschap (society/association).\n'Een erkend kerkgenootschap' = a recognised denomination.",
     example:"A: Tot welk kerkgenootschap behoor je?\nB: De Protestantse Kerk in Nederland.\nA: Dat is de grootste fusiekerk.\nB: Ja, sinds 2004, een samenvoeging van drie kerken.",
     exampleSrc:"A: Which denomination do you belong to?\nB: The Protestant Church in the Netherlands.\nA: That's the largest merged church.\nB: Yes, since 2004, a merger of three churches.",
     funFact:"The PKN (Protestant Church in the Netherlands) was formed in 2004 by merging three denominations. It is the largest Protestant body, but membership continues to decline."},

    {type:"teach", trg:"de kerktaal", src:"the church language / ecclesiastical language", pos:"noun", gender:"c",
     note:"Common gender (de). Kerk (church) + taal (language).\nFormal, archaic language used in religious services.",
     example:"A: De dominee gebruikte oude kerktaal.\nB: Begreep je alles?\nA: Niet alles, het was heel formeel.\nB: Sommige gemeenten zijn heel traditioneel.",
     exampleSrc:"A: The minister used old church language.\nB: Did you understand everything?\nA: Not everything, it was very formal.\nB: Some congregations are very traditional.",
     funFact:"Dutch church language preserves archaic forms like 'Gij' (Thou) and 'hetwelk' (which). The Statenvertaling (1637 Bible translation) shaped Dutch as the King James Bible shaped English."},

    {type:"teach", trg:"het korps", src:"the corps / force / band", pos:"noun", gender:"n",
     note:"Neuter (het). From French 'corps'.\n'Het politiekorps' = the police force. 'Het muziekkorps' = the music band.",
     example:"A: Hij speelt trompet in het korps.\nB: Welk korps?\nA: Het gemeentelijke muziekkorps.\nB: Ze spelen bij elk dorpsfeest.",
     exampleSrc:"A: He plays trumpet in the band.\nB: Which band?\nA: The municipal brass band.\nB: They play at every village festival.",
     funFact:"Every Dutch town traditionally has a 'muziekkorps' or 'harmonie' (brass band). They play at King's Day, Liberation Day, and local events. Membership is declining but still cherished."},

    {type:"mc",
     q:"Wat is er met veel kerken in Nederland gebeurd?",
     opts:["Ze zijn verbouwd tot woningen, restaurants of winkels","Ze zijn allemaal gesloopt","Ze staan allemaal leeg","Ze zijn alleen voor toeristen"],
     ans:"Ze zijn verbouwd tot woningen, restaurants of winkels",
     hint:"As church attendance declined, many buildings were repurposed. Think about practical Dutch culture and creative reuse."},

    {type:"teach", trg:"de klarinet", src:"the clarinet", pos:"noun", gender:"c",
     note:"Common gender (de). From Italian 'clarinetto' (little trumpet).\n'Klarinet spelen' = to play the clarinet.",
     example:"A: Speel je al lang klarinet?\nB: Sinds mijn twaalfde.\nA: Dat is al vijftien jaar!\nB: Ja, ik kan niet meer zonder.",
     exampleSrc:"A: Have you played clarinet for long?\nB: Since I was twelve.\nA: That's already fifteen years!\nB: Yes, I can't do without it.",
     funFact:"The Netherlands has a strong tradition of wind music. Klarinet, trompet, and trombone are the most popular instruments in Dutch 'harmonieorkesten' (wind orchestras)."},

    {type:"teach", trg:"de klokslag", src:"the stroke of the clock / on the dot", pos:"noun", gender:"c",
     note:"Common gender (de). Klok (clock) + slag (stroke/beat).\n'Op de klokslag van twaalf' = on the stroke of twelve.",
     example:"A: Op de klokslag van middernacht begon het vuurwerk.\nB: Wat een spektakel!\nA: Het hele dorp stond buiten.\nB: Oud en Nieuw is altijd speciaal.",
     exampleSrc:"A: On the stroke of midnight the fireworks began.\nB: What a spectacle!\nA: The whole village was outside.\nB: New Year's is always special.",
     funFact:"Dutch punctuality is legendary. 'Op de klokslag' literally means 'on the stroke of the clock'. Being late to an appointment is considered disrespectful."},

    {type:"teach", trg:"de koortsaanval", src:"the fever attack / bout of fever", pos:"noun", gender:"c",
     note:"Common gender (de). Koorts (fever) + aanval (attack).\n'Een hevige koortsaanval' = a severe bout of fever.",
     example:"A: Het kind had vannacht een koortsaanval.\nB: Hoe hoog was de koorts?\nA: Bijna veertig graden.\nB: Bel de huisarts als het niet zakt.",
     exampleSrc:"A: The child had a fever attack last night.\nB: How high was the fever?\nA: Almost forty degrees.\nB: Call the GP if it doesn't go down.",
     funFact:"The Dutch are known for their 'nuchterheid' regarding illness. GPs often advise rest and paracetamol rather than antibiotics. 'Even afwachten' (just wait and see) is the classic response."},

    {type:"fb",
     s:"De zondagse {1} begint om tien uur in de Grote Kerk.",
     a:["kerkdienst"],
     opts:["kerkdienst","kerkgenootschap","kerktaal","korps"],
     hint:"A weekly religious gathering held in a church. Compound: church + service.",
     sSrc:"The Sunday {1} starts at ten o'clock in the Grote Kerk."},

    {type:"teach", trg:"de kroket", src:"the croquette", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'croquette' (to crunch).\n'Een kroket uit de muur' = a croquette from the vending wall.",
     example:"A: Wil je een kroket?\nB: Ja, lekker! Uit de muur?\nA: Natuurlijk, dat is traditie.\nB: Het beste middernachtelijke eten.",
     exampleSrc:"A: Do you want a croquette?\nB: Yes, delicious! From the wall?\nA: Of course, that's tradition.\nB: The best midnight snack.",
     funFact:"The FEBO 'automatiek' (vending wall) is uniquely Dutch. You insert coins, open a little door, and grab a hot kroket. It's been a Dutch institution since 1941."},

    {type:"teach", trg:"de krokodil", src:"the crocodile", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek 'krokodeilos'.\n'Krokodillentranen huilen' = to cry crocodile tears.",
     example:"A: Huil geen krokodillentranen!\nB: Ik meen het echt.\nA: De vorige keer zei je hetzelfde.\nB: Dit keer is het anders, geloof me.",
     exampleSrc:"A: Don't cry crocodile tears!\nB: I really mean it.\nA: Last time you said the same thing.\nB: This time it's different, believe me.",
     funFact:"'Krokodillentranen huilen' (to cry crocodile tears) is used the same way in Dutch as in English. The expression goes back to an ancient belief that crocodiles weep while eating prey."},

    {type:"match", pairs:[
      {trg:"kerkdienst", src:"church service"},
      {trg:"kerktaal", src:"church language"},
      {trg:"klokslag", src:"stroke of the clock"},
      {trg:"kroket", src:"croquette"},
      {trg:"krokodil", src:"crocodile"}
    ]},

    {type:"mc",
     q:"Wat is een 'automatiek' in Nederland?",
     opts:["Een muur met vakjes waar je snacks uit kunt halen","Een wasserette","Een geldautomaat","Een parkeerautomaat"],
     ans:"Een muur met vakjes waar je snacks uit kunt halen",
     hint:"Think of FEBO. A wall of small heated compartments where you insert coins to get hot snacks like croquettes."},

    {type:"fb",
     s:"Het {1} fuseerde met twee andere kerken tot een nieuwe organisatie.",
     a:["kerkgenootschap"],
     opts:["kerkgenootschap","kerkdienst","kerktaal","korps"],
     hint:"A formal religious body or denomination. Compound: church + society/association.",
     sSrc:"The {1} merged with two other churches into a new organisation."}
  ]
};
export default LESSON_10;
