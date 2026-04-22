// Batch 3. Unit 28 Lesson 2 (Literature: Publishing & Reading Culture)
const BATCH3_L_2 = {
  id:"itv2_u28l_b3_2", title:"Editoria e cultura del libro", icon:"📕", xp:15, board:true,
  steps:[
    {type:"intro", title:"Editoria e cultura del libro",
     desc:"Explore the Italian publishing world, literary prizes, and reading culture. Learn vocabulary for discussing the book industry, translation, and Italy's place in world literature.",
     goals:["Discuss the Italian publishing industry","Describe literary prizes and their significance","Talk about translation and world literature"]},

    {type:"teach", trg:"la casa editrice", src:"the publishing house", pos:"noun", gender:"f",
     note:"Feminine compound noun. Plural: le case editrici.\n'Fondare una casa editrice' = to found a publishing house.",
     example:"A: Le grandi case editrici italiane hanno sede a Milano.\nB: Mondadori, Feltrinelli e Rizzoli dominano il mercato.",
     exampleSrc:"A: The major Italian publishing houses are based in Milan.\nB: Mondadori, Feltrinelli, and Rizzoli dominate the market.",
     funFact:"Arnoldo Mondadori Editore, founded in 1907, is Italy's largest publisher. It belongs to the Berlusconi family's Fininvest group, making media ownership concentration a perennial Italian debate topic."},

    {type:"teach", trg:"la traduzione", src:"the translation", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le traduzioni.\n'Tradurre' (verb) = to translate. 'Il traduttore' / 'la traduttrice' = translator.",
     example:"A: La traduzione di questo romanzo e eccellente.\nB: Il traduttore ha catturato perfettamente il tono dell'originale.",
     exampleSrc:"A: The translation of this novel is excellent.\nB: The translator perfectly captured the tone of the original.",
     funFact:"Italy translates more books from foreign languages than almost any other country. About 25% of books published in Italy are translations. Italian translators are respected professionals, though notoriously underpaid."},

    {type:"teach", trg:"il premio letterario", src:"the literary prize", pos:"noun", gender:"m",
     note:"Masculine compound noun. 'Vincere un premio' = to win a prize.\n'Premio Strega' = the most important Italian literary award.",
     example:"A: Il Premio Strega viene assegnato ogni luglio.\nB: Vincerlo lancia la carriera di ogni scrittore.",
     exampleSrc:"A: The Strega Prize is awarded every July.\nB: Winning it launches every writer's career.",
     funFact:"The Premio Strega, Italy's top literary prize since 1947, is awarded at the Ninfeo di Villa Giulia in Rome. Winners include literary giants like Moravia, Morante, and Ferrante's pseudonymous works through her publisher."},

    {type:"teach", trg:"il manoscritto", src:"the manuscript", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i manoscritti.\nLiterally 'written by hand.' 'Inviare un manoscritto' = to submit a manuscript.",
     example:"A: L'editore ha rifiutato il manoscritto tre volte.\nB: Alla quarta, un piccolo editore lo ha pubblicato ed e diventato un bestseller.",
     exampleSrc:"A: The publisher rejected the manuscript three times.\nB: At the fourth attempt, a small publisher published it and it became a bestseller.",
     funFact:"Giuseppe Tomasi di Lampedusa's 'Il Gattopardo' was rejected by major publishers before being published posthumously by Feltrinelli in 1958. It became one of the greatest Italian novels of the 20th century."},

    {type:"teach", trg:"la ristampa", src:"the reprint", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le ristampe.\n'Andare in ristampa' = to go into reprint. A sign of commercial success.",
     example:"A: Il romanzo e già alla decima ristampa.\nB: Ha venduto oltre centomila copie.",
     exampleSrc:"A: The novel is already at its tenth reprint.\nB: It has sold over one hundred thousand copies.",
     funFact:"In Italy, selling 5,000 copies makes a book a modest success. Selling 50,000 puts it in bestseller territory. The few books that reach 100,000+ copies ('centomila copie') become cultural events discussed on talk shows."},

    {type:"mc",
     q:"Qual e il premio letterario più prestigioso in Italia?",
     opts:["Il Premio Strega","Il Premio Pulitzer","Il Premio Goncourt","Il Premio Nobel"],
     ans:"Il Premio Strega",
     hint:"Awarded every July in Rome since 1947. Named after a famous Italian liqueur. Winning it is the pinnacle for Italian novelists."},

    {type:"teach", trg:"la collana", src:"the book series / collection", pos:"noun", gender:"f",
     note:"Feminine noun. A series of books with consistent format.\nAlso means 'necklace.' 'Collana economica' = paperback series.",
     example:"A: Gli Oscar Mondadori sono la collana tascabile più venduta.\nB: Contengono classici a prezzi accessibili.",
     exampleSrc:"A: Oscar Mondadori is the bestselling paperback collection.\nB: It contains classics at accessible prices.",
     funFact:"The double meaning of 'collana' (necklace and book series) reflects the idea of stringing together valuable items. Adelphi's blue-cover 'Biblioteca' and Einaudi's white-spine 'Supercoralli' are iconic Italian collane that readers collect like treasures."},

    {type:"teach", trg:"il bestseller", src:"the bestseller", pos:"noun", gender:"m",
     note:"Masculine noun. English loanword. A book that sells very well.\nAlso used in Italian: 'libro più venduto.'",
     example:"A: Il suo ultimo romanzo e diventato un bestseller internazionale.\nB: E stato tradotto in quaranta lingue.",
     exampleSrc:"A: Her latest novel became an international bestseller.\nB: It has been translated into forty languages.",
     funFact:"Elena Ferrante's Neapolitan novels became a global phenomenon from 2011, selling over 15 million copies worldwide. Despite (or because of) the author's anonymity, the books sparked intense speculation about her identity."},

    {type:"teach", trg:"l'antologia", src:"the anthology", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le antologie.\nA collection of selected literary works. 'Antologia scolastica' = school anthology.",
     example:"A: L'antologia raccoglie i migliori racconti del Novecento.\nB: E un'ottima introduzione alla narrativa italiana.",
     exampleSrc:"A: The anthology collects the best short stories of the twentieth century.\nB: It is an excellent introduction to Italian fiction.",
     funFact:"Every Italian student encounters literature through 'l'antologia scolastica,' thick textbooks containing excerpts from the entire Italian literary canon. These anthologies shape generations' relationship with national literature."},

    {type:"fb",
     s:"Il romanzo e stato {1} in quaranta lingue diverse.",
     a:["tradotto"],
     opts:["tradotto","stampato","scritto","pubblicato"],
     hint:"Converted from one language into another. The past participle of the verb meaning 'to translate.'",
     sSrc:"The novel has been {1} into forty different languages."},

    {type:"teach", trg:"la libreria", src:"the bookshop", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le librerie.\nAlso means 'bookshelf.' 'Libreria indipendente' = independent bookshop.",
     example:"A: Le librerie indipendenti sono in difficoltà.\nB: Amazon e le catene le mettono sotto pressione.",
     exampleSrc:"A: Independent bookshops are struggling.\nB: Amazon and chain stores are putting pressure on them.",
     funFact:"Italy has about 3,500 bookshops, but the number has been declining. A 2020 law ('legge sul libro') limited discounts to 5% to protect small shops from predatory pricing by online retailers and large chains."},

    {type:"teach", trg:"la tiratura", src:"the print run", pos:"noun", gender:"f",
     note:"Feminine noun. The number of copies printed.\n'Prima tiratura' = first print run. 'Tiratura limitata' = limited edition.",
     example:"A: La prima tiratura di tremila copie e andata esaurita in due giorni.\nB: L'editore ha ordinato una ristampa immediata.",
     exampleSrc:"A: The first print run of three thousand copies sold out in two days.\nB: The publisher ordered an immediate reprint.",
     funFact:"Average first print runs in Italy are modest: 2,000-5,000 copies for new authors, 10,000-30,000 for established names. Only megastar authors like Ferrante or Eco get first runs above 100,000 copies."},

    {type:"teach", trg:"la prefazione", src:"the preface / foreword", pos:"noun", gender:"f",
     note:"Feminine noun. An introductory text at the beginning of a book.\n'Scrivere la prefazione' = to write the preface.",
     example:"A: La prefazione e stata scritta da un critico famoso.\nB: Presenta il contesto storico del romanzo.",
     exampleSrc:"A: The preface was written by a famous critic.\nB: It presents the historical context of the novel.",
     funFact:"In Italian publishing tradition, prefaces carry weight. Having a respected intellectual write your prefazione can make or break a debut book. Nobel laureate Eugenio Montale's prefaces launched several literary careers."},

    {type:"teach", trg:"la copertina", src:"the cover (of a book)", pos:"noun", gender:"f",
     note:"Feminine noun. 'Copertina rigida' = hardcover.\n'Copertina flessibile' = paperback. 'Quarta di copertina' = back cover blurb.",
     example:"A: La copertina del libro e bellissima.\nB: Il design influenza molto le vendite.",
     exampleSrc:"A: The book's cover is beautiful.\nB: The design greatly influences sales.",
     funFact:"Italian publishers are known for distinctive cover designs. Adelphi's minimalist pastel covers, Sellerio's blue-bordered Sicilian series, and Iperborea's Nordic-themed designs are instantly recognizable. The cover is a powerful marketing tool."},

    {type:"mc",
     q:"Che cosa ha stabilito la legge italiana del 2020 sul libro?",
     opts:["L'obbligo per ogni comune di avere una biblioteca pubblica","Il limite massimo del 5% sugli sconti per proteggere le piccole librerie","Il divieto di vendere libri usati nelle bancarelle","L'obbligo per tutti i libri di avere una prefazione critica"],
     ans:"Il limite massimo del 5% sugli sconti per proteggere le piccole librerie",
     hint:"This law limited how much retailers can discount books, aiming to protect small independent shops from aggressive pricing."},

    {type:"match", pairs:[
      {trg:"traduzione", src:"translation"},
      {trg:"manoscritto", src:"manuscript"},
      {trg:"collana", src:"book series"},
      {trg:"tiratura", src:"print run"},
      {trg:"copertina", src:"cover"}
    ]},

    {type:"fb",
     s:"Il Premio {1} e il riconoscimento letterario più importante in Italia.",
     a:["Strega"],
     opts:["Strega","Nobel","Campiello","Bancarella"],
     hint:"Named after a famous Italian liqueur, this prize has been awarded every July in Rome since 1947.",
     sSrc:"The {1} Prize is the most important literary award in Italy."},

    {type:"mc",
     q:"Perche il rifiuto del manoscritto de 'Il Gattopardo' e diventato leggendario?",
     opts:["Perche fu il primo romanzo italiano tradotto in giapponese","Perche l'autore ha denunciato l'editore per mancata pubblicazione","Perche i principali editori lo rifiutarono e divenne un capolavoro solo dopo la morte dell'autore","Perche l'autore lo pubblico a proprie spese e vinse il Nobel"],
     ans:"Perche i principali editori lo rifiutarono e divenne un capolavoro solo dopo la morte dell'autore",
     hint:"Major publishers rejected it. Published after the author died, it became one of Italy's greatest novels. A cautionary tale for editors."}
  ,{type:"match",pairs:[{trg:"la casa editrice",src:"the publishing house"},{trg:"il premio letterario",src:"the literary prize"},{trg:"la ristampa",src:"the reprint"},{trg:"il bestseller",src:"the bestseller"},{trg:"la libreria",src:"the bookshop"},{trg:"la prefazione",src:"the preface / foreword"}]},{type:"mc",q:"How do you say \"anthology\" in Italian?",opts:["il tavolo","la bicicletta","la finestra","l'antologia"],ans:"l'antologia",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il romanzo ha ricevuto un importante {1} letterario.",a:["premio letterario"],opts:["premio letterario","bestseller","tiratura","collana"],hint:"A prestigious award given to outstanding books or authors.",sSrc:"The novel received an important literary {1}."},
{type:"fb",s:"Il libro e uscito in una nuova {1} per molti lettori.",a:["ristampa"],opts:["ristampa","prefazione","copertina","traduzione"],hint:"A new print run of a book that was already published.",sSrc:"The book came out in a new {1} for many readers."}]
};
export default BATCH3_L_2;
