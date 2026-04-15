// Unit 22 Expansion — Lesson 6: La letteratura e il teatro
const LESSON_6 = {
  id:"itv2_u22l6", title:"La letteratura e il teatro", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"La letteratura e il teatro",
     desc:"Explore Italian literature and theater vocabulary. From Dante to modern playwrights, Italy's literary tradition has shaped world culture for seven centuries.",
     goals:["Name literary genres and forms","Discuss Italian authors and their works","Understand theater vocabulary and traditions"]},

    {type:"teach", trg:"il romanzo", src:"the novel", pos:"noun", gender:"m",
     note:"Masculine. From Old French 'romanz' (in the Roman language).\n'Scrivere un romanzo' = to write a novel.",
     example:"A: Hai letto qualche romanzo italiano?\nB: Si, 'Il nome della rosa' di Eco e fantastico.",
     exampleSrc:"A: Have you read any Italian novel?\nB: Yes, 'The Name of the Rose' by Eco is fantastic.",
     funFact:"'Romanzo' originally meant 'in the Roman language' (i.e., vernacular, not Latin). Alessandro Manzoni's 'I Promessi Sposi' (The Betrothed, 1827) is considered Italy's national novel and helped standardize modern Italian. Every Italian student reads it in school, though many find it tedious."},

    {type:"teach", trg:"la poesia", src:"the poetry / poem", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'poiesis' (creation).\n'Scrivere poesie' = to write poems. 'Poeta' = poet.",
     example:"A: La poesia italiana e tra le piu belle del mondo.\nB: Dante e il padre della lingua italiana.",
     exampleSrc:"A: Italian poetry is among the most beautiful in the world.\nB: Dante is the father of the Italian language.",
     funFact:"Italian poetry begins with Dante's 'Divina Commedia' (1320), considered one of the greatest works of world literature. Petrarca invented the sonnet form that Shakespeare later adopted. Italian poetry is still alive: poetry festivals draw large crowds, and poets like Eugenio Montale won the Nobel Prize (1975)."},

    {type:"teach", trg:"lo scrittore", src:"the writer / author", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la scrittrice. From 'scrivere' (to write).\n'Scrittore di romanzi' = novelist.",
     example:"A: Chi e il tuo scrittore preferito?\nB: Elena Ferrante. I suoi libri sono coinvolgenti.",
     exampleSrc:"A: Who is your favorite writer?\nB: Elena Ferrante. Her books are engaging.",
     funFact:"Elena Ferrante is the pseudonym of an anonymous Italian writer whose Neapolitan novels became a global phenomenon. Italy has a rich literary tradition: six Italians have won the Nobel Prize in Literature (Carducci, Deledda, Pirandello, Quasimodo, Montale, Fo). Italian publishing produces around 85,000 new titles yearly."},

    {type:"teach", trg:"la commedia", src:"the comedy / play", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'komos' (festivity) + 'ode' (song).\n'Commedia dell'arte' = improvised theater form.",
     example:"A: La commedia dell'arte e nata in Italia.\nB: I personaggi come Arlecchino sono famosi ovunque.",
     exampleSrc:"A: The commedia dell'arte was born in Italy.\nB: Characters like Harlequin are famous everywhere.",
     funFact:"The Commedia dell'Arte (16th century) revolutionized European theater with stock characters: Arlecchino (Harlequin), Pulcinella (Punch), Colombina, and Pantalone. Actors improvised dialogue around scripted scenarios. This tradition influenced Shakespeare, Moliere, and modern improv comedy. Dante's great work is also called 'Commedia' (later 'Divina Commedia')."},

    {type:"teach", trg:"la tragedia", src:"the tragedy", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'tragoidia' (goat song).\n'Una storia tragica' = a tragic story.",
     example:"A: Romeo e Giulietta e una grande tragedia.\nB: Shakespeare si e ispirato a una storia italiana.",
     exampleSrc:"A: Romeo and Juliet is a great tragedy.\nB: Shakespeare was inspired by an Italian story.",
     funFact:"Shakespeare's 'Romeo and Juliet' is based on an Italian story by Luigi da Porto (1530), set in Verona. Italian drama has ancient roots: the Romans built theaters across the empire. In Italian literature, 'tragedia' often means any deeply sad event. 'Che tragedia!' (What a tragedy!) is used colloquially for any disaster."},

    {type:"teach", trg:"il palcoscenico", src:"the stage (theater)", pos:"noun", gender:"m",
     note:"Masculine. Compound: 'palco' (platform) + 'scenico' (scenic).\n'Salire sul palcoscenico' = to go up on stage.",
     example:"A: L'attore e salito sul palcoscenico.\nB: Il pubblico lo ha applaudito.",
     exampleSrc:"A: The actor went up on stage.\nB: The audience applauded him.",
     funFact:"'Palcoscenico' is specifically the theater stage (as opposed to 'palco,' which can mean any raised platform or theater box). Italy has some of the world's most beautiful theaters: La Scala (Milan), La Fenice (Venice), San Carlo (Naples, the oldest active opera house, 1737). Theater architecture is an Italian art form in itself."},

    {type:"teach", trg:"il pubblico", src:"the audience / the public", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'publicus' (of the people).\n'Il pubblico applaude' = the audience applauds.",
     example:"A: Il pubblico era entusiasta.\nB: Si, hanno applaudito per dieci minuti.",
     exampleSrc:"A: The audience was enthusiastic.\nB: Yes, they applauded for ten minutes.",
     funFact:"Italian audiences are famously expressive. At the opera, a great performance earns shouts of 'Bravo!' (for a man), 'Brava!' (woman), 'Bravi!' (group). But Italian audiences also boo ('fischiare') bad performances without mercy. La Scala audiences have reduced stars to tears with their brutal honesty."},

    {type:"teach", trg:"il premio letterario", src:"the literary prize", pos:"noun", gender:"m",
     note:"Masculine. 'Premio' from Latin 'praemium' (reward).\n'Vincere un premio' = to win a prize.",
     example:"A: Ha vinto il Premio Strega.\nB: E il premio letterario piu importante d'Italia.",
     exampleSrc:"A: She won the Premio Strega.\nB: It is the most important literary prize in Italy.",
     funFact:"The Premio Strega, founded in 1947, is Italy's most prestigious literary award. Named after 'Strega' liqueur whose producer co-founded it, the prize is announced every July. The Premio Campiello (Venice) and Premio Bancarella are other major awards. Winning the Strega guarantees bestseller status."},

    // Quiz steps
    {type:"mc", q:"What is considered Italy's national novel?",
     opts:["La Divina Commedia by Dante","I Promessi Sposi by Manzoni","Il Principe by Machiavelli","Pinocchio by Collodi"],
     ans:"I Promessi Sposi by Manzoni",
     hint:"Published in 1827, it helped standardize modern Italian. Every Italian student reads it in school, though opinions on its entertainment value vary."},

    {type:"fb", s:"La commedia dell'{1} e nata in Italia.",
     a:["arte"],
     opts:["arte","opera","anima","epoca"],
     hint:"This improvisational theater form created stock characters like Arlecchino and Pulcinella. It influenced Shakespeare and Moliere.",
     sSrc:"The commedia dell'{1} was born in Italy."},

    {type:"match", pairs:[
      {trg:"il romanzo", src:"the novel"},
      {trg:"la poesia", src:"poetry / poem"},
      {trg:"lo scrittore", src:"the writer"},
      {trg:"la commedia", src:"the comedy / play"},
      {trg:"il palcoscenico", src:"the stage"}
    ]},

    {type:"mc", q:"Which Italian story inspired Shakespeare's 'Romeo and Juliet'?",
     opts:["A Greek myth adapted in Florence","Luigi da Porto's story set in Verona (1530)","A Neapolitan folk tale","A medieval legend from Milan"],
     ans:"Luigi da Porto's story set in Verona (1530)",
     hint:"The original Italian setting explains why tourists still visit 'Juliet's balcony' in V...."},

    {type:"fb", s:"Il {1} era entusiasta. Hanno applaudito per dieci minuti.",
     a:["pubblico"],
     opts:["pubblico","palcoscenico","premio","romanzo"],
     hint:"The audience. Italian theater crowds are famously expressive: they shout 'Bravo!' for great performances and boo bad ones.",
     sSrc:"The {1} was enthusiastic. They applauded for ten minutes."},

    {type:"mc", q:"What is the Premio Strega?",
     opts:["An award for the best Italian film","Italy's most prestigious literary prize","A cooking competition in Rome","A music award at Sanremo"],
     ans:"Italy's most prestigious literary prize",
     hint:"Founded in 1947 and named after a liqueur brand. Announced every July, winning guarantees bestseller status."},

    {type:"fb", s:"L'attore e salito sul {1}.",
     a:["palcoscenico"],
     opts:["palcoscenico","pubblico","romanzo","premio"],
     hint:"The theater stage. A compound word from 'palco' (platform) and 'scenico' (scenic). Italy has some of the world's most beautiful theaters.",
     sSrc:"The actor went up on the {1}."},

    {type:"mc", q:"How many Italians have won the Nobel Prize in Literature?",
     opts:["Two writers total","Four writers total","Six writers total","None so far"],
     ans:"Six writers total",
     hint:"Carducci, Deledda, Pirandello, Quasimodo, Montale, and Fo. A remarkable count for a single national literature."}
  ]
};
export default LESSON_6;
