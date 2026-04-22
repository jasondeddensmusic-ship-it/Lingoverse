// L04: Immigration and Identity
const LESSON_4 = {
  id:"nlv2_b2g6_l4", title:"Immigratie en Identiteit", icon:"\uD83C\uDF0D", xp:15, board:true,
  steps:[
    {type:"intro", title:"Immigration and Identity",
     desc:"Explore vocabulary about immigration, identity, and cultural integration. The Netherlands has been shaped by centuries of migration and continues to evolve as a multicultural society.",
     goals:["Learn 10 immigration and identity terms","Discuss integration and cultural diversity","Understand Dutch migration vocabulary"]},

    {type:"teach", trg:"de immigrante", src:"the female immigrant", pos:"noun", gender:"c",
     note:"Feminine form of 'immigrant'.\nThe '-e' ending marks feminine in Dutch.",
     example:"A: Zij is een immigrante uit Turkije.\nB: Hoe lang woont ze al in Nederland?\nA: Al twintig jaar.\nB: Ze spreekt vloeiend Nederlands.",
     exampleSrc:"A: She is a female immigrant from Turkey.\nB: How long has she been living in the Netherlands?\nA: Already twenty years.\nB: She speaks fluent Dutch.",
     funFact:"The Netherlands has about 4 million people with a migration background, roughly 24% of the population."},

    {type:"teach", trg:"impliceren", src:"to imply, to implicate", pos:"verb", gender:null,
     note:"From Latin 'implicare' (to entangle).\nUsed for suggesting something indirectly.",
     example:"A: Wat wil je daarmee impliceren?\nB: Ik zeg alleen dat het verdacht is.\nA: Je impliceert dus dat hij liegt?\nB: Dat heb ik niet gezegd.",
     exampleSrc:"A: What are you trying to imply with that?\nB: I am only saying that it is suspicious.\nA: So you are implying that he is lying?\nB: I did not say that.",
     funFact:"The Dutch are direct communicators, but 'impliceren' is used when someone hints at something without stating it outright, which the Dutch find frustrating."},

    {type:"teach", trg:"importeren", src:"to import", pos:"verb", gender:null,
     note:"From Latin 'importare' (to bring in).\nOpposite: exporteren (to export).",
     example:"A: Nederland importeert veel fruit uit Spanje.\nB: En ook bloemen uit Afrika.\nA: We zijn een groot handelsland.\nB: De haven van Rotterdam is cruciaal.",
     exampleSrc:"A: The Netherlands imports a lot of fruit from Spain.\nB: And also flowers from Africa.\nA: We are a big trading country.\nB: The port of Rotterdam is crucial.",
     funFact:"Despite being a tiny country, the Netherlands is the second-largest agricultural exporter in the world after the United States."},

    {type:"teach", trg:"imposant", src:"imposing, impressive", pos:"adj", gender:null,
     note:"From French 'imposant'.\nDescribes something grand or awe-inspiring.",
     example:"A: Het Rijksmuseum is een imposant gebouw.\nB: Vooral de grote hal is indrukwekkend.\nA: En de collectie is wereldberoemd.\nB: Rembrandt's Nachtwacht hangt daar.",
     exampleSrc:"A: The Rijksmuseum is an imposing building.\nB: Especially the great hall is impressive.\nA: And the collection is world famous.\nB: Rembrandt's Night Watch hangs there.",
     funFact:"The Rijksmuseum in Amsterdam was redesigned by Pierre Cuypers in 1885. Its neo-Gothic style was controversial at the time."},

    {type:"teach", trg:"immuun", src:"immune", pos:"adj", gender:null,
     note:"From Latin 'immunis' (exempt, free).\nUsed medically and figuratively.",
     example:"A: Ben je immuun voor griep na een vaccinatie?\nB: Grotendeels wel, maar niet honderd procent.\nA: Dat is beter dan niets.\nB: Zeker, het beschermt tegen ernstige klachten.",
     exampleSrc:"A: Are you immune to the flu after a vaccination?\nB: Largely yes, but not one hundred percent.\nA: That is better than nothing.\nB: Certainly, it protects against serious symptoms.",
     funFact:"The Dutch word 'immuunsysteem' (immune system) became one of the most-searched Dutch terms during the COVID-19 pandemic."},

    {type:"mc",
     q:"Wat betekent 'impliceren'?",
     opts:["Iets indirect suggereren","Iets duidelijk zeggen","Iets importeren","Iets imiteren"],
     ans:"Iets indirect suggereren",
     hint:"From Latin meaning to entangle. It means to hint at something without stating it directly."},

    {type:"teach", trg:"de identiteitskaart", src:"the identity card", pos:"noun", gender:"c",
     note:"Compound: identiteit (identity) + kaart (card).\nOften shortened to 'ID-kaart'.",
     example:"A: Mag ik uw identiteitskaart zien?\nB: Natuurlijk, hier is mijn paspoort.\nA: Een rijbewijs mag ook.\nB: O, dat heb ik ook bij me.",
     exampleSrc:"A: May I see your identity card?\nB: Of course, here is my passport.\nA: A driving license is also accepted.\nB: Oh, I have that with me too.",
     funFact:"In the Netherlands, everyone over 14 must carry a valid ID. The Dutch accept passports, ID cards, and driving licenses."},

    {type:"teach", trg:"immaterieel", src:"immaterial, intangible", pos:"adj", gender:null,
     note:"Im- (not) + materieel (material).\nUsed for non-physical heritage or values.",
     example:"A: Sinterklaas is immaterieel cultureel erfgoed.\nB: Wat betekent dat precies?\nA: Het is een traditie, geen tastbaar object.\nB: Zoals muziek en verhalen.",
     exampleSrc:"A: Sinterklaas is intangible cultural heritage.\nB: What does that mean exactly?\nA: It is a tradition, not a tangible object.\nB: Like music and stories.",
     funFact:"UNESCO maintains a list of intangible cultural heritage. Dutch mill networks and the craft of Delft Blue pottery are on it."},

    {type:"teach", trg:"ietwat", src:"somewhat, slightly", pos:"adv", gender:null,
     note:"Combination of 'iet' (something) + 'wat' (what).\nA formal, slightly literary word.",
     example:"A: Ik vind het ietwat overdreven.\nB: Vind je? Ik vond het normaal.\nA: Nou, het was ietwat luid.\nB: Misschien heb je gelijk.",
     exampleSrc:"A: I find it somewhat exaggerated.\nB: Do you? I thought it was normal.\nA: Well, it was slightly loud.\nB: Maybe you are right.",
     funFact:"'Ietwat' is considered more refined than 'een beetje' (a bit). Using it signals a higher register in Dutch conversation."},

    {type:"fb",
     s:"Nederland {1} veel kaas en bloemen naar andere landen.",
     a:["exporteert"],
     opts:["exporteert","importeert","impliceert","imiteert"],
     hint:"The opposite of importing. The Netherlands sends products to other countries.",
     sSrc:"The Netherlands {1} a lot of cheese and flowers to other countries."},

    {type:"teach", trg:"de ijskast", src:"the fridge, the refrigerator", pos:"noun", gender:"c",
     note:"Compound: ijs (ice) + kast (cabinet).\nThe everyday word for 'koelkast' in Belgium.",
     example:"A: Staat er nog melk in de ijskast?\nB: Ik denk het wel, kijk even.\nA: Nee, de melk is op.\nB: Dan moeten we naar de supermarkt.",
     exampleSrc:"A: Is there still milk in the fridge?\nB: I think so, check quickly.\nA: No, the milk is finished.\nB: Then we need to go to the supermarket.",
     funFact:"In the Netherlands, 'koelkast' is standard. In Belgium, 'ijskast' (ice cabinet) is the everyday word. Both are perfectly understood everywhere."},

    {type:"teach", trg:"de historicus", src:"the historian", pos:"noun", gender:"c",
     note:"From Latin 'historicus'.\nPlural: historici. A scholar of history.",
     example:"A: De historicus presenteerde nieuwe bevindingen.\nB: Over welk onderwerp?\nA: De Gouden Eeuw.\nB: Dat is altijd fascinerend.",
     exampleSrc:"A: The historian presented new findings.\nB: About which topic?\nA: The Golden Age.\nB: That is always fascinating.",
     funFact:"Dutch historians increasingly use the term 'Gouden Eeuw' (Golden Age) with nuance, acknowledging both prosperity and colonialism."},

    {type:"mc",
     q:"Wat is 'immaterieel cultureel erfgoed'?",
     opts:["Archeologische vondsten","Niet-tastbare tradities en gebruiken","Oude gebouwen en monumenten","Schilderijen in musea"],
     ans:"Niet-tastbare tradities en gebruiken",
     hint:"Immaterieel means non-physical. Think of traditions, music, and customs rather than objects."},

    {type:"match", pairs:[
      {trg:"impliceren", src:"to imply"},
      {trg:"importeren", src:"to import"},
      {trg:"imposant", src:"imposing"},
      {trg:"immuun", src:"immune"}
    ]},

    {type:"fb",
     s:"Het Rijksmuseum is een {1} gebouw in het centrum van Amsterdam.",
     a:["imposant"],
     opts:["imposant","immaterieel","immuun","ietwat"],
     hint:"An adjective meaning grand, impressive, awe-inspiring. From French.",
     sSrc:"The Rijksmuseum is an {1} building in the center of Amsterdam."},

    {type:"mc",
     q:"Wat is de betekenis van 'ietwat'?",
     opts:["Heel erg veel","Precies juist","Een beetje, enigszins","Helemaal niet"],
     ans:"Een beetje, enigszins",
     hint:"A formal word combining 'iet' (something) and 'wat' (what). It softens a statement."}
  ]
};
export default LESSON_4;
