// L05: Hierarchy, Reform, and Restructuring
const LESSON_5 = {
  id:"nlv2_b2g6_l5", title:"Hervorming en Herstructurering", icon:"\uD83D\uDD04", xp:15, board:true,
  steps:[
    {type:"intro", title:"Reform and Restructuring",
     desc:"Learn vocabulary about reform, reorganization, and structural changes. These words are essential for discussing politics, business, and social change in Dutch.",
     goals:["Learn 10 words about reform and restructuring","Discuss organizational and political changes","Master the 'her-' prefix family"]},

    {type:"tip", title:"The 'her-' Prefix: Doing It Again",
     text:"The Dutch prefix 'her-' means 'again' or 're-'. It creates new verbs and nouns:\n\nhervormen (to reform) = her + vormen (to shape)\nherstructureren (to restructure) = her + structureren\nhervinden (to rediscover) = her + vinden (to find)\nherpositioneren (to reposition) = her + positioneren\n\nAll 'her-' verbs are inseparable: 'ik hervorm', not 'ik vorm her'.",
     deepDive:{title:"Why 'her-' is always inseparable",
      text:"Unlike 'ver-', 'be-', and 'ont-', which are also inseparable, 'her-' is purely directional: it points back to an earlier state. The stress falls on the root verb, not the prefix. This makes it one of the easier Dutch prefixes to master: just add 'her-' and conjugate normally."}},

    {type:"teach", trg:"hervormd", src:"reformed", pos:"adj", gender:null,
     note:"Past participle of 'hervormen' (to reform).\nAlso refers to the Reformed Protestant church.",
     example:"A: De wet is grondig hervormd.\nB: Wat is er veranderd?\nA: De straffen zijn strenger geworden.\nB: Dat was hard nodig.",
     exampleSrc:"A: The law has been thoroughly reformed.\nB: What has changed?\nA: The penalties have become stricter.\nB: That was badly needed.",
     funFact:"The 'Hervormde Kerk' (Reformed Church) was the dominant Dutch Protestant denomination until 2004, when it merged into the PKN."},

    {type:"teach", trg:"de hervormer", src:"the reformer", pos:"noun", gender:"c",
     note:"Her- (again) + vormer (shaper).\nSomeone who implements significant changes.",
     example:"A: Zij wordt gezien als een grote hervormer.\nB: Wat heeft ze bereikt?\nA: Ze heeft het onderwijs veranderd.\nB: Dat is een enorme prestatie.",
     exampleSrc:"A: She is seen as a great reformer.\nB: What has she achieved?\nA: She has changed education.\nB: That is an enormous achievement.",
     funFact:"Willem van Oranje is considered the greatest Dutch reformer. He led the revolt against Spain that created the Netherlands as an independent nation."},

    {type:"teach", trg:"de herstructurering", src:"the restructuring", pos:"noun", gender:"c",
     note:"Her- (again) + structurering (structuring).\nCommon in business and politics.",
     example:"A: De herstructurering kost veel banen.\nB: Hoeveel mensen worden ontslagen?\nA: Ongeveer tweehonderd.\nB: Dat is een zware klap voor de regio.",
     exampleSrc:"A: The restructuring costs many jobs.\nB: How many people are being fired?\nA: About two hundred.\nB: That is a heavy blow for the region.",
     funFact:"The Dutch 'sociaal plan' (social plan) requires companies to support employees during restructuring with severance and retraining."},

    {type:"teach", trg:"hervinden", src:"to rediscover, to find again", pos:"verb", gender:null,
     note:"Her- (again) + vinden (to find).\nOften used for rediscovering confidence or identity.",
     example:"A: Na de scheiding moest ze zichzelf hervinden.\nB: Dat kost tijd.\nA: Ze is nu sterker dan ooit.\nB: Soms moet je jezelf opnieuw uitvinden.",
     exampleSrc:"A: After the divorce she had to rediscover herself.\nB: That takes time.\nA: She is now stronger than ever.\nB: Sometimes you need to reinvent yourself.",
     funFact:"'Zichzelf hervinden' (to rediscover oneself) is a common Dutch expression after life changes. Self-improvement books use it extensively."},

    {type:"teach", trg:"hiërarchisch", src:"hierarchical", pos:"adj", gender:null,
     note:"From Greek 'hierarchia' (rule of a priest).\nNote the trema on the e.",
     example:"A: Dit bedrijf is zeer hiërarchisch.\nB: Moet je altijd naar je baas luisteren?\nA: Ja, er zijn veel lagen management.\nB: Dat is niet typisch Nederlands.",
     exampleSrc:"A: This company is very hierarchical.\nB: Do you always have to listen to your boss?\nA: Yes, there are many layers of management.\nB: That is not typically Dutch.",
     funFact:"Dutch workplaces are famously flat and non-hierarchical. Calling your boss by their first name is completely normal in the Netherlands."},

    {type:"mc",
     q:"Wat betekent het voorvoegsel 'her-'?",
     opts:["Opnieuw, weer","Niet, on-","Samen, mee-","Weg, ver-"],
     ans:"Opnieuw, weer",
     hint:"Think about words like 'hervormen' (re-form) and 'hervinden' (re-find). What do they have in common?"},

    {type:"teach", trg:"de heroprichting", src:"the re-establishment, the refounding", pos:"noun", gender:"c",
     note:"Her- (again) + oprichting (founding).\nRestarting an organization that ceased to exist.",
     example:"A: De heroprichting van de club was een succes.\nB: Hoeveel leden zijn er nu?\nA: Al meer dan honderd.\nB: Dat is een mooi begin.",
     exampleSrc:"A: The re-establishment of the club was a success.\nB: How many members are there now?\nA: Already more than one hundred.\nB: That is a nice start.",
     funFact:"Many Dutch sports clubs have been re-established after financial collapse. The Dutch football club AGOVV in Apeldoorn was founded, disbanded, and refounded multiple times."},

    {type:"teach", trg:"heroriënteren", src:"to reorient, to redirect", pos:"verb", gender:null,
     note:"Her- (again) + oriënteren (to orient).\nTo change direction or focus.",
     example:"A: Het bedrijf moet zich heroriënteren.\nB: Op welke markt?\nA: De digitale sector groeit het snelst.\nB: Dat is een slimme keuze.",
     exampleSrc:"A: The company needs to reorient itself.\nB: Toward which market?\nA: The digital sector is growing fastest.\nB: That is a smart choice.",
     funFact:"Dutch companies like Philips have successfully reoriented from light bulbs to healthcare technology, showing Dutch adaptability."},

    {type:"teach", trg:"de hendel", src:"the lever, the handle", pos:"noun", gender:"c",
     note:"Related to 'hand'. A mechanical handle you pull or push.\nUsed literally and metaphorically.",
     example:"A: Trek aan de hendel om de machine te starten.\nB: Deze hendel hier?\nA: Ja, die rode.\nB: Het werkt!",
     exampleSrc:"A: Pull the lever to start the machine.\nB: This lever here?\nA: Yes, the red one.\nB: It works!",
     funFact:"The word 'hendel' comes from the same root as 'hand'. In older Dutch, any tool operated by hand was called a 'hendel'."},

    {type:"fb",
     s:"Na het faillissement volgde de {1} van het hele bedrijf.",
     a:["herstructurering"],
     opts:["herstructurering","hervormer","heroprichting","hendel"],
     hint:"The process of reorganizing a company's structure, often after financial problems.",
     sSrc:"After the bankruptcy, the {1} of the entire company followed."},

    {type:"teach", trg:"de holding", src:"the holding company", pos:"noun", gender:"c",
     note:"English loanword. A company that owns other companies.\nVery common in Dutch business.",
     example:"A: De holding bezit vijf dochterondernemingen.\nB: In welke sectoren?\nA: Technologie, vastgoed en media.\nB: Dat is een divers portfolio.",
     exampleSrc:"A: The holding company owns five subsidiaries.\nB: In which sectors?\nA: Technology, real estate, and media.\nB: That is a diverse portfolio.",
     funFact:"The Netherlands is a popular country for holding companies due to favorable tax treaties. Many multinationals have Dutch holding structures."},

    {type:"mc",
     q:"Waarom is de Nederlandse werkcultuur bijzonder?",
     opts:["De baas wordt altijd met 'u' aangesproken","Bedrijven zijn relatief niet-hiërarchisch","Werknemers dragen altijd een pak","Iedereen werkt meer dan 50 uur per week"],
     ans:"Bedrijven zijn relatief niet-hiërarchisch",
     hint:"Think about the Dutch preference for flat organizational structures and first-name basis with bosses."},

    {type:"match", pairs:[
      {trg:"hervormd", src:"reformed"},
      {trg:"hervinden", src:"to rediscover"},
      {trg:"herstructurering", src:"restructuring"},
      {trg:"heroprichting", src:"re-establishment"}
    ]},

    {type:"fb",
     s:"Na de scheiding moest zij zichzelf {1}.",
     a:["hervinden"],
     opts:["hervinden","hervormen","heroriënteren","herstructureren"],
     hint:"To find yourself again, to rediscover who you are after a major life change.",
     sSrc:"After the divorce she had to {1} herself."},

    {type:"mc",
     q:"Wat is een 'holding'?",
     opts:["Een type verzekering","Een soort contract","Een bedrijf dat andere bedrijven bezit","Een sportteam"],
     ans:"Een bedrijf dat andere bedrijven bezit",
     hint:"This English loanword describes a parent company that controls subsidiary companies."}
  ]
};
export default LESSON_5;
