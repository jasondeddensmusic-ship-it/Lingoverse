// L09: Religion, Tradition, and Belief
const LESSON_9 = {
  id:"nlv2_b2g6_l9", title:"Geloof en Traditie", icon:"\u26EA", xp:15, board:true,
  steps:[
    {type:"intro", title:"Religion, Tradition, and Belief",
     desc:"Explore vocabulary about religion, spiritual traditions, and the role of faith in Dutch society. The Netherlands has a unique history of religious tolerance and secularization.",
     goals:["Learn 10 words about religion and tradition","Discuss faith and secularism in Dutch society","Understand Dutch religious heritage vocabulary"]},

    {type:"teach", trg:"het hindoeïsme", src:"Hinduism", pos:"noun", gender:"n",
     note:"Het-word. Note the trema on the i.\nThe Netherlands has a significant Hindu community.",
     example:"A: Het hindoeïsme is een van de oudste godsdiensten.\nB: Hoeveel hindoes wonen er in Nederland?\nA: Ongeveer tweehonderdduizend.\nB: Vooral in Den Haag en Amsterdam.",
     exampleSrc:"A: Hinduism is one of the oldest religions.\nB: How many Hindus live in the Netherlands?\nA: About two hundred thousand.\nB: Mainly in The Hague and Amsterdam.",
     funFact:"The Dutch Hindu community is largely Surinamese-Hindustani. They celebrate Holi and Divali with large public festivals."},

    {type:"teach", trg:"het hindoefeest", src:"the Hindu festival", pos:"noun", gender:"n",
     note:"Compound: hindoe (Hindu) + feest (festival).\nMultiple Hindu festivals are celebrated in NL.",
     example:"A: Ga je naar het hindoefeest dit weekend?\nB: Ja, het Holifeest in Den Haag.\nA: Met al die kleuren?\nB: Precies, het wordt geweldig!",
     exampleSrc:"A: Are you going to the Hindu festival this weekend?\nB: Yes, the Holi festival in The Hague.\nA: With all those colors?\nB: Exactly, it will be amazing!",
     funFact:"The Hague hosts one of the largest Holi celebrations in Europe, reflecting its large Surinamese-Hindu community."},

    {type:"teach", trg:"heiligen", src:"to sanctify, to canonize", pos:"verb", gender:null,
     note:"From 'heilig' (holy, sacred).\nTo declare someone a saint or to make something sacred.",
     example:"A: De kerk heeft haar geheiligd.\nB: Na hoeveel jaar?\nA: Na meer dan honderd jaar.\nB: Het proces is heel lang.",
     exampleSrc:"A: The church has canonized her.\nB: After how many years?\nA: After more than one hundred years.\nB: The process is very long.",
     funFact:"The expression 'het doel heiligt de middelen' (the end justifies the means) is widely used in Dutch, often critically."},

    {type:"teach", trg:"de goedkeuring", src:"the approval, the endorsement", pos:"noun", gender:"c",
     note:"Compound: goed (good) + keuring (examination, inspection).\nLiterally 'good inspection'.",
     example:"A: We wachten op de goedkeuring van de directeur.\nB: Wanneer verwacht je die?\nA: Hopelijk morgen.\nB: Dan kunnen we beginnen.",
     exampleSrc:"A: We are waiting for the director's approval.\nB: When do you expect it?\nA: Hopefully tomorrow.\nB: Then we can begin.",
     funFact:"Dutch bureaucracy requires 'goedkeuring' for many things. Building permits, business licenses, and even tree removal need official approval."},

    {type:"teach", trg:"de gokverslaafde", src:"the gambling addict", pos:"noun", gender:"c",
     note:"Compound: gok (gamble) + verslaafde (addict).\nA person addicted to gambling.",
     example:"A: Hij is een gokverslaafde en heeft hulp nodig.\nB: Zijn er goede behandelingen?\nA: Ja, er zijn gespecialiseerde klinieken.\nB: Het begint met erkenning van het probleem.",
     exampleSrc:"A: He is a gambling addict and needs help.\nB: Are there good treatments?\nA: Yes, there are specialized clinics.\nB: It starts with acknowledging the problem.",
     funFact:"The Netherlands has strict gambling regulations. Online gambling was only legalized in 2021 with the 'Wet kansspelen op afstand' (Remote Gambling Act)."},

    {type:"mc",
     q:"Wat betekent 'goedkeuring'?",
     opts:["Officiële toestemming of instemming","Een goede beoordeling op school","Een medische keuring","Een keurmerk voor producten"],
     ans:"Officiële toestemming of instemming",
     hint:"Literally 'good inspection'. It means someone in authority has examined something and said yes."},

    {type:"teach", trg:"de gokautomaat", src:"the slot machine, the gambling machine", pos:"noun", gender:"c",
     note:"Compound: gok (gamble) + automaat (machine).\nFound in arcades and some cafes.",
     example:"A: Er staan gokautomaten in die bar.\nB: Dat is tegenwoordig strenger geregeld.\nA: Ja, er zijn nieuwe regels voor.\nB: Om verslaving te voorkomen.",
     exampleSrc:"A: There are slot machines in that bar.\nB: That is more strictly regulated nowadays.\nA: Yes, there are new rules for that.\nB: To prevent addiction.",
     funFact:"Dutch cafes used to have slot machines everywhere. Stricter regulations since 2012 have significantly reduced their presence."},

    {type:"teach", trg:"de geuzennaam", src:"the nickname of defiance, reclaimed slur", pos:"noun", gender:"c",
     note:"From 'Geuzen' (Beggars), Dutch rebels against Spain.\nA derogatory name adopted with pride.",
     example:"A: 'Geus' was oorspronkelijk een scheldwoord.\nB: Maar de opstandelingen namen het over?\nA: Ja, ze droegen het met trots.\nB: Dat is een geuzennaam.",
     exampleSrc:"A: 'Geus' was originally an insult.\nB: But the rebels adopted it?\nA: Yes, they wore it with pride.\nB: That is a name of defiance.",
     funFact:"The Geuzen were 16th-century Dutch rebels who wore beggar medals and fought for independence from Spain. Their name became a badge of honor."},

    {type:"teach", trg:"gewagen", src:"to mention, to speak of (literary)", pos:"verb", gender:null,
     note:"An archaic, literary verb meaning to mention.\nFound in formal texts and fixed expressions.",
     example:"A: Het boek gewaagt van een grote vloed.\nB: In welk jaar?\nA: In 1421, de Sint-Elisabethsvloed.\nB: Een van de ergste rampen in de Nederlandse geschiedenis.",
     exampleSrc:"A: The book speaks of a great flood.\nB: In which year?\nA: In 1421, the St. Elizabeth's flood.\nB: One of the worst disasters in Dutch history.",
     funFact:"'Gewagen' survives mainly in the expression 'ergens van gewagen' and in historical texts. Modern Dutch prefers 'vermelden' or 'noemen'."},

    {type:"fb",
     s:"We hebben de {1} van de gemeente nodig voor de verbouwing.",
     a:["goedkeuring"],
     opts:["goedkeuring","geuzennaam","gokautomaat","goedheid"],
     hint:"Official permission or endorsement from an authority. Literally 'good inspection'.",
     sSrc:"We need the {1} of the municipality for the renovation."},

    {type:"teach", trg:"de hoepelrok", src:"the hoopskirt, the crinoline", pos:"noun", gender:"c",
     note:"Compound: hoepel (hoop) + rok (skirt).\nA historical garment with a frame underneath.",
     example:"A: In de zeventiende eeuw droegen vrouwen hoepelrokken.\nB: Waren die niet oncomfortabel?\nA: Waarschijnlijk wel, maar het was de mode.\nB: Mode gaat soms boven comfort.",
     exampleSrc:"A: In the seventeenth century women wore hoopskirts.\nB: Were those not uncomfortable?\nA: Probably yes, but it was fashion.\nA: Fashion sometimes trumps comfort.",
     funFact:"Dutch Golden Age portraits by Rembrandt and Vermeer show the fashion of the era, though hoopskirts were more common in Spanish and French courts."},

    {type:"teach", trg:"het grondrecht", src:"the fundamental right", pos:"noun", gender:"n",
     note:"Compound: grond (ground, foundation) + recht (right).\nConstitutional rights.",
     example:"A: Vrijheid van meningsuiting is een grondrecht.\nB: Staat dat in de grondwet?\nA: Ja, in artikel zeven.\nB: Dat is een van de belangrijkste rechten.",
     exampleSrc:"A: Freedom of expression is a fundamental right.\nB: Is that in the constitution?\nA: Yes, in article seven.\nB: That is one of the most important rights.",
     funFact:"The Dutch constitution (Grondwet) of 1815 was one of the earliest in Europe to guarantee civil liberties. It has been amended many times since."},

    {type:"mc",
     q:"Wat is een 'geuzennaam'?",
     opts:["Een historische familienaam","Een scheldnaam die met trots wordt aangenomen","Een officiële titel van de koning","Een bijnaam voor een stad"],
     ans:"Een scheldnaam die met trots wordt aangenomen",
     hint:"The Geuzen were Dutch rebels who took an insult and made it their proud identity. This word describes that phenomenon."},

    {type:"match", pairs:[
      {trg:"hindoeïsme", src:"Hinduism"},
      {trg:"goedkeuring", src:"approval"},
      {trg:"geuzennaam", src:"name of defiance"},
      {trg:"grondrecht", src:"fundamental right"}
    ]},

    {type:"fb",
     s:"Het {1} is een van de oudste religies ter wereld.",
     a:["hindoeïsme"],
     opts:["hindoeïsme","hindoefeest","heiligen","hoepelrok"],
     hint:"One of the world's oldest religions, with a significant following in the Netherlands through Surinamese immigration.",
     sSrc:"{1} is one of the oldest religions in the world."},

    {type:"mc",
     q:"Wat is een 'gokautomaat'?",
     opts:["Een pinautomaat","Een koffieautomaat","Een machine om op te gokken","Een automaat voor eten"],
     ans:"Een machine om op te gokken",
     hint:"Compound of 'gok' (gamble) and 'automaat' (m...). Found in bars and arcades."}
  ]
};
export default LESSON_9;
