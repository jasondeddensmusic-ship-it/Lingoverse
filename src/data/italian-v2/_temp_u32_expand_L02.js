// Unit 32 Expansion. Lesson 5: La migrazione e l'accoglienza
const LESSON_5 = {
  id:"itv2_u32l5", title:"La migrazione e l'accoglienza", icon:"🚢", xp:15, board:true,
  steps:[
    {type:"intro", title:"La migrazione e l'accoglienza",
     desc:"Learn advanced vocabulary for discussing migration patterns, refugee policies, and the social impact of population movements. Central topics in Italian public discourse.",
     goals:["Discuss migration causes and consequences","Describe asylum and refugee policies","Express nuanced views on integration challenges"]},

    {type:"teach", trg:"l'emigrazione", src:"the emigration", pos:"noun", gender:"f",
     note:"Feminine noun. Leaving one's own country to live elsewhere.\n'Emigrante' = emigrant. Opposite: 'l'immigrazione' (immigration).",
     example:"A: L'emigrazione italiana nel Novecento fu enorme.\nB: Milioni partirono per le Americhe e l'Australia.",
     exampleSrc:"A: Italian emigration in the twentieth century was enormous.\nB: Millions left for the Americas and Australia.",
     funFact:"Between 1861 and 1985, over 29 million Italians emigrated. This massive diaspora means there are more people of Italian descent outside Italy than inside. Argentina, Brazil, and the US have the largest Italian-descended populations."},

    {type:"teach", trg:"il clandestino", src:"the undocumented migrant", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la clandestina.\nA person without legal residency status.\n'Immigrazione clandestina' = undocumented immigration.",
     example:"A: Il termine 'clandestino' e considerato da molti offensivo.\nB: 'Migrante irregolare' e preferito nel linguaggio giornalistico.",
     exampleSrc:"A: The term 'clandestino' is considered offensive by many.\nB: 'Irregular migrant' is preferred in journalistic language.",
     funFact:"The word 'clandestino' (from Latin 'clandestinus,' secret) is hotly debated in Italy. Advocacy groups argue it dehumanizes people, while some politicians use it deliberately. Major Italian news outlets have moved toward 'migrante irregolare' following ethical guidelines."},

    {type:"teach", trg:"il permesso di soggiorno", src:"the residence permit", pos:"noun", gender:"m",
     note:"Masculine compound noun. The document allowing a foreigner to live in Italy legally.\n'Rinnovare il permesso' = to renew the permit.",
     example:"A: Il permesso di soggiorno scade tra tre mesi.\nB: Devi rinnovarlo alla questura.",
     exampleSrc:"A: The residence permit expires in three months.\nB: You must renew it at the police headquarters.",
     funFact:"Obtaining and renewing a 'permesso di soggiorno' is famously bureaucratic. Long queues at questure (police offices), missing paperwork, and slow processing times are a rite of passage for every foreigner living in Italy. The word 'questura' strikes fear into immigrant hearts."},

    {type:"teach", trg:"il respingimento", src:"the pushback / refoulement", pos:"noun", gender:"m",
     note:"Masculine noun. Turning migrants back at the border or at sea.\n'Politica dei respingimenti' = pushback policy.",
     example:"A: I respingimenti in mare violano il diritto internazionale secondo molte ONG.\nB: Il governo sostiene che proteggono i confini.",
     exampleSrc:"A: Pushbacks at sea violate international law according to many NGOs.\nB: The government maintains they protect borders.",
     funFact:"Italy's 'politica dei respingimenti' has been condemned by the European Court of Human Rights. The tension between border control and humanitarian obligations is perhaps the most divisive issue in Italian politics, splitting families and communities."},

    {type:"teach", trg:"il corridoio umanitario", src:"the humanitarian corridor", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i corridoi umanitari.\nSafe, legal pathways for refugees to reach safety.",
     example:"A: I corridoi umanitari offrono un'alternativa sicura ai viaggi pericolosi.\nB: L'Italia e stata pioniera di questo modello in Europa.",
     exampleSrc:"A: Humanitarian corridors offer a safe alternative to dangerous journeys.\nB: Italy was a pioneer of this model in Europe.",
     funFact:"Italy launched Europe's first humanitarian corridors in 2016, a collaboration between the government, the Catholic Sant'Egidio community, and Protestant churches. The program brings refugees directly from conflict zones, bypassing dangerous Mediterranean crossings."},

    {type:"mc",
     q:"Quanti italiani emigrarono tra il 1861 e il 1985?",
     opts:["Circa un milione","Circa cinque milioni","Oltre 29 milioni","Meno di centomila"],
     ans:"Oltre 29 milioni",
     hint:"A staggering number that exceeded the entire Italian population at the time of unification. The diaspora spread across the Americas, Australia, and northern Europe."},

    {type:"teach", trg:"la tratta", src:"the trafficking", pos:"noun", gender:"f",
     note:"Feminine noun. 'Tratta di esseri umani' = human trafficking.\n'Tratta di migranti' = migrant smuggling. 'Trafficante' = trafficker.",
     example:"A: La tratta di esseri umani e un crimine gravissimo.\nB: Le vittime spesso non sanno cosa le aspetta.",
     exampleSrc:"A: Human trafficking is a very serious crime.\nB: Victims often do not know what awaits them.",
     funFact:"Italy is both a transit and destination country for human trafficking. The 'mafie' (organized crime groups) profit from smuggling routes across the Mediterranean. Italian anti-trafficking laws include protections for victims, including residence permits for those who cooperate with authorities."},

    {type:"teach", trg:"il rimpatrio", src:"the repatriation", pos:"noun", gender:"m",
     note:"Masculine noun. Returning someone to their country of origin.\n'Rimpatrio volontario' = voluntary repatriation.\n'Rimpatriare' (verb) = to repatriate.",
     example:"A: Il rimpatrio forzato e contestato dalle organizzazioni umanitarie.\nB: Spesso le condizioni nel paese d'origine non sono sicure.",
     exampleSrc:"A: Forced repatriation is contested by humanitarian organizations.\nB: Often the conditions in the country of origin are not safe.",
     funFact:"'Rimpatrio' comes from 'ri-' (back) + 'patria' (homeland). Italy's repatriation agreements with North African countries are controversial. The principle of 'non-refoulement' (non-respingimento) prohibits returning people to countries where they face persecution."},

    {type:"fb",
     s:"Il {1} di soggiorno deve essere rinnovato ogni anno alla questura.",
     a:["permesso"],
     opts:["permesso","corridoio","rimpatrio","respingimento"],
     hint:"The official document that allows a foreign national to live legally in Italy. Without it, a person's stay is irregular.",
     sSrc:"The residence {1} must be renewed every year at the police headquarters."},

    {type:"teach", trg:"la diaspora", src:"the diaspora", pos:"noun", gender:"f",
     note:"Feminine noun. The dispersion of a people from their homeland.\n'Diaspora italiana' = Italian diaspora.",
     example:"A: La diaspora italiana nel mondo conta oltre 80 milioni di discendenti.\nB: Dall'Argentina alla Australia, la cultura italiana e ovunque.",
     exampleSrc:"A: The Italian diaspora worldwide counts over 80 million descendants.\nB: From Argentina to Australia, Italian culture is everywhere.",
     funFact:"Italians abroad can vote in Italian elections through a special overseas constituency. 'Italiani nel mondo' (Italians abroad) elect their own members of Parliament. This connection between the diaspora and the homeland remains constitutionally protected."},

    {type:"teach", trg:"lo sradicamento", src:"the uprooting / displacement", pos:"noun", gender:"m",
     note:"Masculine noun. The experience of being torn from one's roots.\n'Sradicare' (verb) = to uproot. 'Sradicato/a' (adj) = uprooted.",
     example:"A: Lo sradicamento e una delle esperienze piu dolorose della migrazione.\nB: Lasciare tutto cio che conosci non si supera facilmente.",
     exampleSrc:"A: Uprooting is one of the most painful experiences of migration.\nB: Leaving everything you know is not easily overcome.",
     funFact:"Italian literature about emigration is rich with the theme of 'sradicamento.' From Pascoli's poems about emigrants to De Amicis's 'Sull'Oceano,' the pain of leaving home resonates across generations. This literary memory gives Italians a visceral connection to today's migrants."},

    {type:"mc",
     q:"Che cosa sono i corridoi umanitari?",
     opts:["Strade costruite per i rifugiati","Percorsi legali e sicuri per portare i rifugiati dalle zone di conflitto a paesi sicuri","Tunnel sotterranei usati dai migranti","Zone di confine dove i migranti possono aspettare"],
     ans:"Percorsi legali e sicuri per portare i rifugiati dalle zone di conflitto a paesi sicuri",
     hint:"Legal and safe pathways organized by governments and religious organizations. Italy pioneered this approach in Europe as an alternative to dangerous sea crossings."},

    {type:"match", pairs:[
      {trg:"emigrazione", src:"emigration"},
      {trg:"permesso di soggiorno", src:"residence permit"},
      {trg:"respingimento", src:"pushback"},
      {trg:"corridoio umanitario", src:"humanitarian corridor"},
      {trg:"diaspora", src:"diaspora"}
    ]},

    {type:"fb",
     s:"Lo {1} culturale e una delle esperienze piu dolorose per chi emigra.",
     a:["sradicamento"],
     opts:["sradicamento","scambio","sviluppo","stereotipo"],
     hint:"Being torn from your roots, your language, your community. The deep pain of losing everything familiar when forced to leave home.",
     sSrc:"Cultural {1} is one of the most painful experiences for those who emigrate."},

    {type:"mc",
     q:"Perche il termine 'clandestino' e considerato problematico da molti giornalisti italiani?",
     opts:["Perche e grammaticalmente sbagliato","Perche disumanizza le persone riducendole al loro status legale","Perche non esiste nel vocabolario italiano","Perche e troppo formale"],
     ans:"Perche disumanizza le persone riducendole al loro status legale",
     hint:"The word reduces a human being to their legal s.... Many journalism ethics codes now recommend alternatives that maintain the person's dignity and humanity."}
  ]
};
export default LESSON_5;
