// L17: Buildings and Places, 20 B1 gap words
const LESSON_17 = {
  id:"nlv2_b1gap_l17", title:"Gebouwen en Plekken", icon:"\u{1F3D7}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Buildings and Places",
     desc:"Learn Dutch vocabulary for buildings, venues, and important places. From bakeries to care homes, from studios to resorts.",
     goals:["Master 20 building and location words","Describe different venues","Navigate Dutch urban landscape"]},

    {type:"teach", trg:"het atelier", src:"the studio / the workshop", pos:"noun", gender:"n",
     note:"Neuter gender (het). An artist's or craftsman's workspace.",
     example:"A: De schilder werkt in haar atelier.\nB: Mag ik het een keer zien?",
     exampleSrc:"A: The painter works in her studio.\nB: May I see it sometime?",
     funFact:"French loanword. Dutch artists from Vermeer to Mondriaan worked in famous 'ateliers'."},

    {type:"teach", trg:"de bakkerij", src:"the bakery", pos:"noun", gender:"c",
     note:"Common gender (de). Where bread and pastries are made.",
     example:"A: De bakkerij op de hoek heeft heerlijk brood.\nB: Ik ga er elke zaterdag naartoe.",
     exampleSrc:"A: The bakery on the corner has delicious bread.\nB: I go there every Saturday.",
     funFact:"Dutch bakeries sell traditional items like 'oliebollen', 'krentenbollen', and 'beschuit'. A neighborhood staple."},

    {type:"teach", trg:"het armenhuis", src:"the poorhouse", pos:"noun", gender:"n",
     note:"Neuter gender (het). A historical institution for the poor.",
     example:"A: Dit gebouw was vroeger een armenhuis.\nB: Nu is het een museum.",
     exampleSrc:"A: This building used to be a poorhouse.\nB: Now it is a museum.",
     funFact:"Dutch 'armenhuizen' existed from the Middle Ages until the 20th century. Many are now repurposed as cultural spaces."},

    {type:"teach", trg:"het adviesbureau", src:"the consulting firm", pos:"noun", gender:"n",
     note:"Neuter gender (het). Advies + bureau compound.",
     example:"A: Het adviesbureau heeft ons geholpen.\nB: Met welk probleem?",
     exampleSrc:"A: The consulting firm helped us.\nB: With which problem?",
     funFact:"The Netherlands has a huge consulting industry. The Zuidas in Amsterdam is the business district hub."},

    {type:"mc",
     q:"Een schilder of beeldhouwer werkt in een ___.",
     opts:["atelier","bakkerij","armenhuis","adviesbureau"],
     ans:"atelier",
     hint:"Think about the creative workspace where artists make their art."},

    {type:"teach", trg:"de adreskaart", src:"the address card", pos:"noun", gender:"c",
     note:"Common gender (de). A card with contact information.",
     example:"A: Hier is mijn adreskaart.\nB: Dank je, ik neem contact op.",
     exampleSrc:"A: Here is my address card.\nB: Thanks, I will get in touch.",
     funFact:"Less common now due to smartphones, but still used in formal Dutch business settings."},

    {type:"teach", trg:"de aktetas", src:"the briefcase", pos:"noun", gender:"c",
     note:"Common gender (de). Akte (document) + tas (bag).",
     example:"A: Vergeet je aktetas niet!\nB: O, dank je. Mijn laptop zit erin.",
     exampleSrc:"A: Don't forget your briefcase!\nB: Oh, thanks. My laptop is in it.",
     funFact:"'Akte' means document or deed. An aktetas carries your important papers. Modern Dutch uses 'laptoptas' too."},

    {type:"teach", trg:"de bankbediende", src:"the bank clerk", pos:"noun", gender:"c",
     note:"Common gender (de). Someone who works at a bank.",
     example:"A: De bankbediende hielp me met mijn aanvraag.\nB: Was het snel geregeld?",
     exampleSrc:"A: The bank clerk helped me with my application.\nB: Was it arranged quickly?",
     funFact:"With online banking booming, physical bank branches and 'bankbedienden' are disappearing fast in the Netherlands."},

    {type:"teach", trg:"bankieren", src:"to do banking", pos:"verb", gender:null,
     note:"Inseparable verb. Ik bankier, jij bankiert.",
     example:"A: Ik bankier alleen online.\nB: Ga je nooit naar een filiaal?",
     exampleSrc:"A: I only do banking online.\nB: Do you never go to a branch?",
     funFact:"The Netherlands is one of the most digitally banked countries. iDEAL is the dominant payment system."},

    {type:"teach", trg:"de beeldbuis", src:"the TV screen (dated)", pos:"noun", gender:"c",
     note:"Common gender (de). Beeld (image) + buis (tube). Old-fashioned word.",
     example:"A: Wat is er vanavond op de beeldbuis?\nB: Een documentaire over natuur.",
     exampleSrc:"A: What is on TV tonight?\nB: A documentary about nature.",
     funFact:"Refers to the cathode ray tube era. Now used humorously. Modern Dutch just says 'op tv'."},

    {type:"fb",
     s:"De {1} op de hoek bakt het beste brood van de stad.",
     a:["bakkerij"],
     opts:["bakkerij","bankbediende","beeldbuis","aktetas"],
     hint:"Which building is a shop where bread and pastries are made and sold?",
     sSrc:"The {1} on the corner bakes the best bread in the city."},

    {type:"teach", trg:"de asielprocedure", src:"the asylum procedure", pos:"noun", gender:"c",
     note:"Common gender (de). The legal process for refugees.",
     example:"A: De asielprocedure duurt soms maanden.\nB: Dat is heel lang wachten.",
     exampleSrc:"A: The asylum procedure sometimes takes months.\nB: That is a very long wait.",
     funFact:"The IND (Immigration and Naturalization Service) handles all asylum procedures in the Netherlands."},

    {type:"teach", trg:"de anticlimax", src:"the anticlimax", pos:"noun", gender:"c",
     note:"Common gender (de). A disappointing ending after buildup.",
     example:"A: De film had een anticlimax.\nB: Ja, het einde was teleurstellend.",
     exampleSrc:"A: The movie had an anticlimax.\nB: Yes, the ending was disappointing.",
     funFact:"Same word in English and Dutch. Anti- prefix reverses the climax. Very common in reviews."},

    {type:"teach", trg:"de apostel", src:"the apostle", pos:"noun", gender:"c",
     note:"Common gender (de). A follower of Jesus, or a devoted advocate.",
     example:"A: De apostel Paulus schreef vele brieven.\nB: Die staan in de Bijbel.",
     exampleSrc:"A: The apostle Paul wrote many letters.\nB: They are in the Bible.",
     funFact:"From Greek 'apostolos' (one sent forth). Also used figuratively: 'apostel van de vrede' (apostle of peace)."},

    {type:"teach", trg:"de aquamarijn", src:"aquamarine (gemstone)", pos:"noun", gender:"c",
     note:"Common gender (de). A blue-green precious stone.",
     example:"A: Ze draagt een ring met aquamarijn.\nB: Wat een mooie kleur!",
     exampleSrc:"A: She wears a ring with aquamarine.\nB: What a beautiful color!",
     funFact:"From Latin 'aqua marina' (sea water). The color matches the North Sea on a sunny day."},

    {type:"mc",
     q:"Je doet al je geldzaken via internet. Je ___ online.",
     opts:["activeert","bankiert","bakkert","adviseert"],
     ans:"bankiert",
     hint:"Which verb describes managing your financial transactions via the internet?"},

    {type:"teach", trg:"de amoreel", src:"amoral", pos:"adj", gender:null,
     note:"Adjective. Without moral sense, not immoral but non-moral.",
     example:"A: Zijn gedrag was amoreel.\nB: Hij dacht niet na over goed of fout.",
     exampleSrc:"A: His behavior was amoral.\nB: He did not think about right or wrong.",
     funFact:"A- (without) + moreel (moral). Different from 'immoreel' (acting against morals)."},

    {type:"teach", trg:"de adonis", src:"an Adonis / a very handsome man", pos:"noun", gender:"c",
     note:"Common gender (de). A reference to Greek mythology.",
     example:"A: Die acteur is een echte adonis.\nB: Alle vrouwen kijken naar hem.",
     exampleSrc:"A: That actor is a real Adonis.\nB: All the women look at him.",
     funFact:"From the Greek myth of Adonis, loved by Aphrodite. Used in Dutch to describe an exceptionally attractive man."},

    {type:"teach", trg:"de adolescent", src:"the adolescent", pos:"noun", gender:"c",
     note:"Common gender (de). A young person in their teens.",
     example:"A: Adolescenten zoeken hun identiteit.\nB: Dat is normaal op die leeftijd.",
     exampleSrc:"A: Adolescents search for their identity.\nB: That is normal at that age.",
     funFact:"From Latin 'adolescere' (to grow up). More formal than 'tiener' (teenager) in Dutch."},

    {type:"teach", trg:"de adolescentie", src:"adolescence", pos:"noun", gender:"c",
     note:"Common gender (de). The period of teenage development.",
     example:"A: De adolescentie is een moeilijke periode.\nB: Ja, er verandert zo veel.",
     exampleSrc:"A: Adolescence is a difficult period.\nB: Yes, so much changes.",
     funFact:"Dutch schools teach about adolescentie in biology and social studies. Very formally used."},

    {type:"match", pairs:[
      {trg:"atelier", src:"studio/workshop"},
      {trg:"bakkerij", src:"bakery"},
      {trg:"bankieren", src:"to do banking"},
      {trg:"adolescent", src:"adolescent"},
      {trg:"anticlimax", src:"anticlimax"}
    ]},

    {type:"fb",
     s:"Vergeet je {1} niet! Je laptop en documenten zitten erin.",
     a:["aktetas"],
     opts:["aktetas","adreskaart","autoband","alarmbel"],
     hint:"Which bag specifically carries important documents and a laptop?",
     sSrc:"Don't forget your {1}! Your laptop and documents are in it."},

    {type:"mc",
     q:"De leeftijd tussen 12 en 18 jaar noem je de ___.",
     opts:["armoedegrens","afwisseling","adolescentie","anticlimax"],
     ans:"adolescentie",
     hint:"Which term describes the developmental stage of being a teenager?"}
  ]
};
export default LESSON_17;
