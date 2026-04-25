// L18: Household, Daily Objects, and Routines
const LESSON_18 = {
  id:"nlv2_b2g6_l18", title:"Huishouden en Dagelijks Leven", icon:"\uD83C\uDFE1", xp:15, board:true,
  steps:[
    {type:"intro", title:"Household, Daily Objects, and Routines",
     desc:"Learn vocabulary about the Dutch household, from cleaning to daily routines. Dutch homes have their own character, from the famous large windows to the gezellige living rooms.",
     goals:["Learn 10 household and daily life terms","Discuss domestic routines and objects","Understand Dutch home culture vocabulary"]},

    {type:"teach", trg:"de hoes", src:"the cover, the case, the slipcover", pos:"noun", gender:"c",
     note:"From French 'housse' (cover).\nA protective covering for furniture, cushions, or electronics.",
     example:"A: De hoes van de bank is vies.\nB: Kunnen we hem wassen?\nA: Ja, hij past in de wasmachine.\nB: Dat scheelt weer geld voor een nieuwe.",
     exampleSrc:"A: The cover of the couch is dirty.\nB: Can we wash it?\nA: Yes, it fits in the washing machine.\nB: That saves money on a new one.",
     funFact:"The Dutch love removable covers on everything. IKEA's most popular Dutch products are sofas with washable hoezen (covers)."},

    {type:"teach", trg:"de blogs", src:"the blogs", pos:"noun", gender:"c",
     note:"English loanword, plural. Widely used in Dutch.\nOnline personal or professional journals.",
     example:"A: Ik lees graag blogs over reizen.\nB: Welke vind je het leukst?\nA: Nederlandse reisbloggers zijn heel goed.\nB: Ze schrijven eerlijk en persoonlijk.",
     exampleSrc:"A: I like reading blogs about travel.\nB: Which do you like best?\nA: Dutch travel bloggers are very good.\nB: They write honestly and personally.",
     funFact:"The Netherlands has a vibrant blogging culture. 'Mamablogs' (parenting blogs) and food blogs are especially popular among Dutch readers."},

    {type:"teach", trg:"de homepage", src:"the homepage", pos:"noun", gender:"c",
     note:"English loanword. The main page of a website.\nPronounced with Dutch vowels: HO-muh-pay-juh.",
     example:"A: De homepage van de website is vernieuwd.\nB: Ziet hij er beter uit?\nA: Veel moderner en overzichtelijker.\nB: Een goede homepage is belangrijk.",
     exampleSrc:"A: The homepage of the website has been renewed.\nB: Does it look better?\nA: Much more modern and organized.\nB: A good homepage is important.",
     funFact:"Dutch website design is known for being clean and functional. The Netherlands ranks among the top countries in the world for internet usage."},

    {type:"teach", trg:"de hondenstront", src:"the dog poop", pos:"noun", gender:"c",
     note:"Compound: honden (dogs) + stront (excrement).\nA very Dutch complaint about city streets.",
     example:"A: Ik heb in de hondenstront getrapt.\nB: Bah, dat is vervelend!\nA: De eigenaar had het moeten opruimen.\nB: Er staat een boete op van 150 euro.",
     exampleSrc:"A: I stepped in dog poop.\nB: Yuck, that is annoying!\nA: The owner should have cleaned it up.\nB: There is a fine of 150 euros for that.",
     funFact:"Dutch municipalities wage a constant war against hondenstront. Special enforcement officers (BOAs) can issue on-the-spot fines to dog owners."},

    {type:"teach", trg:"de eyeliner", src:"the eyeliner", pos:"noun", gender:"c",
     note:"English loanword. Cosmetic for lining the eyes.\nFully adopted into Dutch beauty vocabulary.",
     example:"A: Welke eyeliner gebruik jij?\nB: Een waterproof zwarte.\nA: Die van mij loopt altijd uit.\nB: Probeer een ander merk, dat blijft beter zitten.",
     exampleSrc:"A: Which eyeliner do you use?\nB: A waterproof black one.\nA: Mine always smudges.\nB: Try a different brand, it stays on better.",
     funFact:"The Dutch beauty industry is growing fast. Rituals, a Dutch cosmetics brand, has become a global luxury skincare company."},

    {type:"mc",
     q:"Wat is een 'hoes' in het Nederlands?",
     opts:["Een beschermhoes of overtrek","Een tuinslang","Een soort schoen","Een type gordijn"],
     ans:"Een beschermhoes of overtrek",
     hint:"From French 'housse'. A removable protective cover for furniture, cushions, or devices."},

    {type:"teach", trg:"de creamer", src:"the coffee creamer", pos:"noun", gender:"c",
     note:"English loanword. Powdered or liquid coffee whitener.\n'Koffiemelk' is the fresh milk version.",
     example:"A: Doe je creamer in je koffie?\nB: Nee, ik drink het zwart.\nA: Ik vind het te bitter zonder.\nB: Een beetje suiker helpt ook.",
     exampleSrc:"A: Do you put creamer in your coffee?\nB: No, I drink it black.\nA: I find it too bitter without.\nB: A little sugar helps too.",
     funFact:"Friesche Vlag, a Frisian dairy company, dominates the Dutch coffee creamer market. Coffee is essentially a national drink in the Netherlands."},

    {type:"teach", trg:"de chesterfield", src:"the Chesterfield (sofa)", pos:"noun", gender:"c",
     note:"From the English Earl of Chesterfield.\nA deep-buttoned leather sofa. Status symbol.",
     example:"A: Die chesterfield is prachtig.\nB: Echt leer?\nA: Ja, en heel comfortabel.\nB: Maar waarschijnlijk ook heel duur.",
     exampleSrc:"A: That Chesterfield is beautiful.\nB: Real leather?\nA: Yes, and very comfortable.\nB: But probably also very expensive.",
     funFact:"The Chesterfield sofa is a status symbol in Dutch 'herenkamers' (gentleman's rooms). English-style furniture has been popular in the Netherlands since the 18th century."},

    {type:"teach", trg:"de event", src:"the event", pos:"noun", gender:"c",
     note:"English loanword. A planned social or commercial occasion.\nVery common in Dutch business language.",
     example:"A: We organiseren een groot event volgende maand.\nB: Wat voor event?\nA: Een productlancering met driehonderd gasten.\nB: Dat klinkt indrukwekkend.",
     exampleSrc:"A: We are organizing a big event next month.\nB: What kind of event?\nA: A product launch with three hundred guests.\nB: That sounds impressive.",
     funFact:"The Dutch events industry is worth billions. Amsterdam RAI, Ahoy Rotterdam, and Jaarbeurs Utrecht host thousands of events annually."},

    {type:"fb",
     s:"Pas op waar je loopt, er ligt {1} op het trottoir.",
     a:["hondenstront"],
     opts:["hondenstront","chesterfield","eyeliner","creamer"],
     hint:"A very common Dutch street complaint. Dog excrement left behind by irresponsible owners.",
     sSrc:"Watch where you walk, there is {1} on the sidewalk."},

    {type:"teach", trg:"detineren", src:"to detain, to hold in custody", pos:"verb", gender:null,
     note:"From Latin 'detinere' (to hold back).\nFormal legal term for keeping someone in custody.",
     example:"A: De verdachte wordt gedetineerd in de gevangenis.\nB: Voor hoe lang?\nA: Tot het proces begint.\nB: Dat kan maanden duren.",
     exampleSrc:"A: The suspect is being detained in prison.\nB: For how long?\nA: Until the trial begins.\nB: That can take months.",
     funFact:"Dutch prisons are known for being relatively comfortable compared to other countries. Cells have their own furniture, TV, and sometimes a small kitchen."},

    {type:"teach", trg:"het documentatiemateriaal", src:"the documentation material", pos:"noun", gender:"n",
     note:"Compound: documentatie (documentation) + materiaal (material).\nPrinted or digital reference materials.",
     example:"A: Heb je het documentatiemateriaal ontvangen?\nB: Ja, het is heel uitgebreid.\nA: Alles wat je nodig hebt staat erin.\nB: Ik ga het dit weekend lezen.",
     exampleSrc:"A: Have you received the documentation material?\nB: Yes, it is very extensive.\nA: Everything you need is in it.\nB: I will read it this weekend.",
     funFact:"The Dutch love documentation. Government agencies, schools, and companies produce extensive written materials for everything."},

    {type:"mc",
     q:"Wat is een 'event' in het Nederlands?",
     opts:["Een ramp","Een georganiseerd evenement","Een sportprestatie","Een televisieshow"],
     ans:"Een georganiseerd evenement",
     hint:"An English loanword widely used in Dutch business. A planned occasion with guests and a program."},

    {type:"match", pairs:[
      {trg:"hoes", src:"cover/case"},
      {trg:"homepage", src:"homepage"},
      {trg:"chesterfield", src:"Chesterfield sofa"},
      {trg:"event", src:"organized event"}
    ]},

    {type:"fb",
     s:"We moeten het {1} voor de cursus nog uitprinten.",
     a:["documentatiemateriaal"],
     opts:["documentatiemateriaal","homepage","blogs","event"],
     hint:"Printed or digital reference materials and documents. A long compound typical of formal Dutch.",
     sSrc:"We still need to print the {1} for the course."},

    {type:"mc",
     q:"Wat is de boete voor hondenstront niet opruimen?",
     opts:["1000 euro","Er is geen boete","Ongeveer 150 euro","5 euro"],
     ans:"Ongeveer 150 euro",
     hint:"Dutch municipalities take this seriously. Special enforcement officers patrol the streets."}
  ]
};
export default LESSON_18;
