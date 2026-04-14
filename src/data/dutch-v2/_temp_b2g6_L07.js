// L07: Hygiene, Health Behavior, and Wellness
const LESSON_7 = {
  id:"nlv2_b2g6_l7", title:"Hygiëne en Welzijn", icon:"\uD83E\uDDF4", xp:15, board:true,
  steps:[
    {type:"intro", title:"Hygiene, Health Behavior, and Wellness",
     desc:"Learn vocabulary about personal hygiene, health behavior, and wellness culture. The Dutch take a practical approach to health and cleanliness.",
     goals:["Learn 10 words about hygiene and health habits","Discuss wellness and self-care","Understand Dutch health behavior vocabulary"]},

    {type:"teach", trg:"hygiënisch", src:"hygienic", pos:"adj", gender:null,
     note:"From Greek 'Hygieia' (goddess of health).\nNote the trema: hygiënisch.",
     example:"A: Is dit restaurant hygiënisch?\nB: Ja, het heeft drie sterren van de voedselautoriteit.\nA: Dan eten we hier.\nB: De keuken ziet er schoon uit.",
     exampleSrc:"A: Is this restaurant hygienic?\nB: Yes, it has three stars from the food authority.\nA: Then we will eat here.\nB: The kitchen looks clean.",
     funFact:"The Dutch food safety authority (NVWA) inspects restaurants unannounced. Results are public, and the Dutch take food hygiene very seriously."},

    {type:"teach", trg:"hysterisch", src:"hysterical", pos:"adj", gender:null,
     note:"From Greek 'hystera' (womb), but the gendered origin is rejected today.\nMeans extremely emotional or frantic.",
     example:"A: Word niet hysterisch, het komt goed.\nB: Ik ben niet hysterisch, ik maak me zorgen!\nA: Sorry, dat was het verkeerde woord.\nB: Ik ben gewoon bezorgd.",
     exampleSrc:"A: Do not get hysterical, it will be fine.\nB: I am not hysterical, I am worried!\nA: Sorry, that was the wrong word.\nB: I am just concerned.",
     funFact:"Many Dutch people avoid using 'hysterisch' because of its sexist etymological roots. 'Overspannen' or 'paniekerig' are preferred alternatives."},

    {type:"teach", trg:"de haardroger", src:"the hair dryer", pos:"noun", gender:"c",
     note:"Compound: haar (hair) + droger (dryer).\nA common household appliance.",
     example:"A: Mag ik je haardroger lenen?\nB: Natuurlijk, hij ligt in de badkamer.\nA: Ik heb die van mij vergeten.\nB: Geen probleem.",
     exampleSrc:"A: May I borrow your hair dryer?\nB: Of course, it is in the bathroom.\nA: I forgot mine.\nB: No problem.",
     funFact:"The Dutch word 'fohn' (from the German brand Fön) is also widely used as a synonym for 'haardroger'."},

    {type:"teach", trg:"de haarlok", src:"the lock of hair", pos:"noun", gender:"c",
     note:"Compound: haar (hair) + lok (lock, curl).\nA single strand or curl of hair.",
     example:"A: Ze bewaart een haarlok van haar baby.\nB: Dat is een mooi aandenken.\nA: Veel ouders doen dat.\nB: Het zit in een speciaal doosje.",
     exampleSrc:"A: She keeps a lock of hair from her baby.\nB: That is a nice keepsake.\nA: Many parents do that.\nB: It is in a special box.",
     funFact:"Keeping a baby's first haarlok is a Dutch tradition. Some families preserve it in a 'geboortekaartje' (birth announcement card) album."},

    {type:"teach", trg:"gezonder", src:"healthier", pos:"adv", gender:null,
     note:"Comparative of 'gezond' (healthy).\nUsed as adjective and adverb.",
     example:"A: We moeten gezonder eten.\nB: Meer groenten en minder suiker?\nA: Precies, en ook meer bewegen.\nB: Laten we samen gaan hardlopen.",
     exampleSrc:"A: We need to eat healthier.\nB: More vegetables and less sugar?\nA: Exactly, and also more exercise.\nB: Let us go running together.",
     funFact:"The Dutch government runs the 'Schijf van Vijf' (Disc of Five) nutritional guidelines, which are taught in every Dutch school."},

    {type:"mc",
     q:"Wat betekent 'hygiënisch'?",
     opts:["Schoon en vrij van ziektekiemen","Heel erg droog","Chemisch behandeld","Medicinaal en genezend"],
     ans:"Schoon en vrij van ziektekiemen",
     hint:"From the Greek goddess of health, Hygieia. Related to cleanliness and preventing disease."},

    {type:"teach", trg:"het helium", src:"helium", pos:"noun", gender:"n",
     note:"From Greek 'helios' (sun).\nFirst discovered in sunlight before found on Earth.",
     example:"A: Ballonnen met helium stijgen omhoog.\nB: Waarom?\nA: Helium is lichter dan lucht.\nB: Daarom klinkt je stem ook raar als je het inademt.",
     exampleSrc:"A: Balloons with helium rise upward.\nB: Why?\nA: Helium is lighter than air.\nB: That is also why your voice sounds funny when you inhale it.",
     funFact:"The Dutch physicist Heike Kamerlingh Onnes was the first to liquefy helium in 1908 at Leiden University, winning the Nobel Prize."},

    {type:"teach", trg:"de graffiti", src:"graffiti", pos:"noun", gender:"c",
     note:"From Italian 'graffiare' (to scratch).\nUsed as singular in Dutch: 'de graffiti'.",
     example:"A: Er staat graffiti op de muur van de school.\nB: Wie heeft dat gedaan?\nA: Dat weet niemand.\nB: De gemeente gaat het verwijderen.",
     exampleSrc:"A: There is graffiti on the school wall.\nB: Who did that?\nA: Nobody knows.\nB: The municipality will remove it.",
     funFact:"Dutch cities have designated 'graffiti walls' where street art is legal. Amsterdam and Rotterdam have vibrant street art scenes."},

    {type:"teach", trg:"de glamping", src:"glamping (glamorous camping)", pos:"noun", gender:"c",
     note:"English blend: glamorous + camping.\nUpscale outdoor accommodation with comfort.",
     example:"A: We gaan glamping in de Veluwe.\nB: In een tent of een boomhut?\nA: Een safaritent met een echt bed.\nB: Dat klinkt perfect!",
     exampleSrc:"A: We are going glamping in the Veluwe.\nB: In a tent or a treehouse?\nA: A safari tent with a real bed.\nB: That sounds perfect!",
     funFact:"The Veluwe, a large forested area in central Netherlands, is the most popular glamping destination for Dutch people."},

    {type:"fb",
     s:"We moeten {1} leven als we langer gezond willen blijven.",
     a:["gezonder"],
     opts:["gezonder","hygiënisch","hysterisch","helium"],
     hint:"The comparative form of 'gezond' (healthy). More healthy.",
     sSrc:"We need to live {1} if we want to stay healthy longer."},

    {type:"teach", trg:"het gejoel", src:"the jeering, the cheering (loud)", pos:"noun", gender:"n",
     note:"From 'joelen' (to cheer loudly, to jeer).\nCan be positive (sports crowd) or negative (mockery).",
     example:"A: Het gejoel van het publiek was oorverdovend.\nB: Ze waren heel enthousiast.\nA: Of heel boos, dat hangt van de context af.\nB: In dit geval was het feestelijk.",
     exampleSrc:"A: The cheering of the audience was deafening.\nB: They were very enthusiastic.\nA: Or very angry, that depends on the context.\nB: In this case it was festive.",
     funFact:"During Koningsdag (King's Day), the gejoel in Dutch streets is legendary. The entire country becomes one big orange party."},

    {type:"teach", trg:"de hybride", src:"the hybrid", pos:"noun", gender:"c",
     note:"From Latin 'hybrida' (mixed offspring).\nUsed for cars, plants, work models, and more.",
     example:"A: We rijden nu een hybride auto.\nB: Elektrisch en benzine?\nA: Ja, het bespaart veel brandstof.\nB: En het is beter voor het milieu.",
     exampleSrc:"A: We now drive a hybrid car.\nB: Electric and petrol?\nA: Yes, it saves a lot of fuel.\nB: And it is better for the environment.",
     funFact:"The Netherlands has the highest density of electric and hybrid cars in Europe. Government subsidies make them very attractive."},

    {type:"mc",
     q:"Wat is 'glamping'?",
     opts:["Luxe kamperen met comfort","Een soort glamoureuze kleding","Een sportieve activiteit","Een festival voor jongeren"],
     ans:"Luxe kamperen met comfort",
     hint:"A blend of 'glamorous' and 'camping'. Think of staying outdoors but with luxury amenities."},

    {type:"match", pairs:[
      {trg:"hygiënisch", src:"hygienic"},
      {trg:"haardroger", src:"hair dryer"},
      {trg:"glamping", src:"glamorous camping"},
      {trg:"hybride", src:"hybrid"}
    ]},

    {type:"fb",
     s:"Het {1} van de fans was door het hele stadion te horen.",
     a:["gejoel"],
     opts:["gejoel","helium","graffiti","glamping"],
     hint:"The loud shouting or cheering from a crowd. A het-word derived from the verb 'joelen'.",
     sSrc:"The {1} of the fans could be heard throughout the entire stadium."},

    {type:"mc",
     q:"Welke Nederlandse wetenschapper maakte helium vloeibaar?",
     opts:["Heike Kamerlingh Onnes","Christiaan Huygens","Antonie van Leeuwenhoek","Johannes van der Waals"],
     ans:"Heike Kamerlingh Onnes",
     hint:"This Leiden University physicist won the Nobel Prize for his work with extremely cold temperatures."}
  ]
};
export default LESSON_7;
