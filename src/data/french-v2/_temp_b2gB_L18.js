const LESSON_18 = {
  id:"frv2_b2gB_l18", title:"Histoire et memoire", icon:"\u{1F3F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Histoire et memoire",
     desc:"Explore vocabulary for discussing history, memory, and cultural heritage in France.",
     goals:["Learn 10 history and heritage terms","Discuss historical events formally","Express views on collective memory"]},

    {type:"teach", trg:"un centurion", src:"a centurion", pos:"noun", gender:"m",
     note:"Masculine noun. A Roman military officer commanding 100 soldiers.\nUsed in historical and figurative contexts.",
     example:"A: Les centurions etaient le pilier de l'armee romaine.\nB: Ils commandaient chacun une centurie de cent hommes.",
     exampleSrc:"A: Centurions were the backbone of the Roman army.\nB: Each commanded a century of one hundred men.",
     funFact:"Asterix comics feature bumbling centurions. These characters shaped how generations of French children picture ancient Rome."},

    {type:"teach", trg:"le patrimoine", src:"heritage, patrimony", pos:"noun", gender:"m",
     note:"Masculine noun. Cultural or financial inheritance.\nJournees du patrimoine = Heritage Days (annual open-house event).",
     example:"A: Le patrimoine architectural de Paris est extraordinaire.\nB: Les Journees du patrimoine attirent des millions de visiteurs.",
     exampleSrc:"A: Paris's architectural heritage is extraordinary.\nB: Heritage Days attract millions of visitors.",
     funFact:"Every September, France opens 17,000+ historic sites for free during Journees du patrimoine. Even the Elysee Palace opens its doors."},

    {type:"teach", trg:"la commemoration", src:"commemoration", pos:"noun", gender:"f",
     note:"Feminine noun. An event honoring a past event or person.\nCommemorer = to commemorate. Le 11 novembre = Armistice Day.",
     example:"A: La commemoration du 11 novembre est tres solennelle.\nB: Chaque village depose une gerbe au monument aux morts.",
     exampleSrc:"A: The November 11th commemoration is very solemn.\nB: Every village lays a wreath at the war memorial.",
     funFact:"France has 14 national days of commemoration. Every commune, no matter how small, has a monument aux morts listing local war dead."},

    {type:"teach", trg:"un jamais-vu", src:"a never-before-seen event", pos:"noun", gender:"m",
     note:"Masculine compound noun. Something unprecedented.\nThe opposite of 'deja-vu'. C'est du jamais-vu = it's unprecedented.",
     example:"A: Ces temperatures en avril, c'est du jamais-vu.\nB: Le record precedent datait de mille neuf cent quarante-sept.",
     exampleSrc:"A: These temperatures in April, it's unprecedented.\nB: The previous record dated from 1947.",
     funFact:"While 'deja vu' is famous worldwide, 'jamais vu' is its lesser-known opposite. Psychologists use it for failing to recognize familiar things."},

    {type:"teach", trg:"un jet-set", src:"the jet set, high society", pos:"noun", gender:"m",
     note:"Masculine noun. The wealthy international social elite.\nBorrowed from English. Le jet-set parisien = Parisian high society.",
     example:"A: Le jet-set se retrouve a Saint-Tropez chaque ete.\nB: C'est devenu un lieu mythique grace a Brigitte Bardot.",
     exampleSrc:"A: The jet set meets in Saint-Tropez every summer.\nB: It became a mythical place thanks to Brigitte Bardot.",
     funFact:"Brigitte Bardot put Saint-Tropez on the map in the 1950s. Before her, it was a quiet fishing village unknown to the jet-set."},

    {type:"teach", trg:"la decolonisation", src:"decolonization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of colonies gaining independence.\nFrance's decolonization was often violent (Algeria, Indochina).",
     example:"A: La decolonisation de l'Algerie a ete un traumatisme national.\nB: Les consequences se ressentent encore aujourd'hui.",
     exampleSrc:"A: The decolonization of Algeria was a national trauma.\nB: The consequences are still felt today.",
     funFact:"France granted independence to most African colonies in 1960. The Algerian War (1954-1962) remains the most painful chapter."},

    {type:"teach", trg:"la loge", src:"the box (theater), the lodge", pos:"noun", gender:"f",
     note:"Feminine noun. A private theater box, a porter's lodge, or a Masonic lodge.\nLa loge de la concierge = the concierge's lodge.",
     example:"A: Nous avons des places dans une loge a l'Opera.\nB: Quelle chance! C'est la meilleure vue.",
     exampleSrc:"A: We have seats in a box at the Opera.\nB: How lucky! It's the best view.",
     funFact:"The Opera Garnier's loges were the social network of 19th-century Paris. Who sat where told you everything about power and status."},

    {type:"teach", trg:"la vestige", src:"the vestige, the remains", pos:"noun", gender:"m",
     note:"Masculine noun. A trace or remnant of something that once existed.\nLes vestiges romains = Roman remains. Usually plural.",
     example:"A: Les vestiges de l'amphitheatre sont bien conserves.\nB: On peut encore imaginer les spectacles de l'epoque.",
     exampleSrc:"A: The remains of the amphitheater are well preserved.\nB: You can still imagine the shows of that era.",
     funFact:"France has more Roman vestiges than any country except Italy. Nimes, Arles, and Orange have remarkably preserved Roman monuments."},

    {type:"teach", trg:"l'epopee", src:"the epic, the saga", pos:"noun", gender:"f",
     note:"Feminine noun. A long narrative of heroic deeds, or a remarkable series of events.\nL'epopee napoleonienne = the Napoleonic epic.",
     example:"A: L'epopee de la Resistance inspire encore aujourd'hui.\nB: Ces hommes et femmes ont risque leur vie pour la liberte.",
     exampleSrc:"A: The epic of the Resistance still inspires today.\nB: These men and women risked their lives for freedom.",
     funFact:"France's national epic is the Chanson de Roland (11th century), about Charlemagne's nephew. Every French student reads it."},

    {type:"teach", trg:"un reseau", src:"a network", pos:"noun", gender:"m",
     note:"Masculine noun. A system of interconnected people or things.\nReseau social = social network. Reseau de resistance = resistance network.",
     example:"A: Le reseau de transport en commun est excellent a Paris.\nB: Le metro couvre toute la ville.",
     exampleSrc:"A: The public transport network is excellent in Paris.\nB: The metro covers the whole city.",
     funFact:"The Paris Metro has 16 lines and 308 stations. You are never more than 500 meters from a station anywhere in central Paris."},

    {type:"mc", q:"Que sont les 'Journees du patrimoine'?",
     opts:["Un evenement annuel d'ouverture de sites historiques","Un jour ferie","Un festival de musique","Des vacances scolaires"],
     ans:"Un evenement annuel d'ouverture de sites historiques",
     hint:"Every September, thousands of historic buildings open their doors for free visits"},

    {type:"fb", s:"C'est du {1}, ces temperatures n'ont jamais ete enregistrees.",
     a:["jamais-vu"], opts:["jamais-vu","jet-set","centurion","patrimoine"],
     hint:"The compound noun meaning something unprecedented, never before seen",
     sSrc:"It's {1}, these temperatures have never been recorded."},

    {type:"mc", q:"La decolonisation de l'Algerie s'est terminee en:",
     opts:["1945","1962","1950","1975"],
     ans:"1962",
     hint:"The Algerian War lasted eight years and ended in the early 1960s"},

    {type:"match", pairs:[
      {trg:"un centurion", src:"a centurion"},
      {trg:"le patrimoine", src:"heritage"},
      {trg:"un jamais-vu", src:"unprecedented"},
      {trg:"l'epopee", src:"the epic"}
    ]},

    {type:"fb", s:"Les {1} romains sont remarquablement conserves a Nimes.",
     a:["vestiges"], opts:["vestiges","reseaux","loges","patrimoines"],
     hint:"The masculine plural noun for physical traces and remains of the past",
     sSrc:"The Roman {1} are remarkably well preserved in Nimes."},

    {type:"mc", q:"Qu'est-ce qu'une 'loge' a l'opera?",
     opts:["La scene","Le vestiaire","Un espace prive pour les spectateurs","Les coulisses"],
     ans:"Un espace prive pour les spectateurs",
     hint:"This enclosed area in a theater provides private seating for privileged guests"},

    {type:"fb", s:"Le {1} de transport parisien est l'un des meilleurs au monde.",
     a:["reseau"], opts:["reseau","patrimoine","vestige","centurion"],
     hint:"The masculine noun for an interconnected system of routes and stations",
     sSrc:"The Parisian transport {1} is one of the best in the world."},

    {type:"mc", q:"La Chanson de Roland est:",
     opts:["Un opera de Bizet","Une chanson populaire","Un poeme de Baudelaire","L'epopee nationale francaise"],
     ans:"L'epopee nationale francaise",
     hint:"This 11th-century narrative poem about Charlemagne's nephew is France's founding literary epic"},

    {type:"fb", s:"La {1} du 11 novembre honore les soldats tombes.",
     a:["commemoration"], opts:["commemoration","decolonisation","epopee","loge"],
     hint:"The formal event held to honor and remember those who died in war",
     sSrc:"The November 11th {1} honors fallen soldiers."},

    {type:"match", pairs:[
      {trg:"la decolonisation", src:"decolonization"},
      {trg:"la commemoration", src:"commemoration"},
      {trg:"la loge", src:"theater box"},
      {trg:"un reseau", src:"a network"}
    ]}
  ]
};
export default LESSON_18;
