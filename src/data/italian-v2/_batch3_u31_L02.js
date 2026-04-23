// Batch 3. Unit 31 Lesson 2 (Advanced Media: Social Media & Ethics)
const BATCH3_L_2 = {
  id:"itv2_u31l_b3_2", title:"Social media e deontologia", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Social media e deontologia",
     desc:"Explore social media culture, media ethics, and the legal framework governing Italian media. Learn vocabulary for discussing responsible communication and press freedom.",
     goals:["Discuss social media's impact on journalism","Describe media ethics and professional standards","Understand Italian media law and regulation"]},

    {type:"teach", trg:"la deontologia", src:"professional ethics / deontology", pos:"noun", gender:"f",
     note:"Feminine noun. The ethical code governing a profession.\n'Codice deontologico' = code of professional ethics.",
     example:"A: La deontologia giornalistica impone la verifica delle fonti.\nB: Pubblicare notizie false viola il codice deontologico.",
     exampleSrc:"A: Journalistic ethics requires source verification.\nB: Publishing false news violates the professional code.",
     funFact:"Italian journalists must be registered in the 'Ordine dei Giornalisti' (Order of Journalists) and follow a strict deontological code. Violations can lead to suspension or expulsion from the profession, unique in European press systems."},

    {type:"teach", trg:"il diritto d'autore", src:"copyright", pos:"noun", gender:"m",
     note:"Masculine compound noun. Legal protection for creative works.\n'Violare il diritto d'autore' = to violate copyright.",
     example:"A: Condividere contenuti senza autorizzazione viola il diritto d'autore.\nB: Anche online, le leggi sulla proprieta intellettuale si applicano.",
     exampleSrc:"A: Sharing content without authorization violates copyright.\nB: Even online, intellectual property laws apply.",
     funFact:"Italy's copyright law (Legge 633/1941) is one of Europe's oldest and most detailed. It protects works for 70 years after the author's death. The Italian collecting society SIAE manages royalties for music, literature, and visual arts."},

    {type:"teach", trg:"la bufala", src:"the hoax / fake news", pos:"noun", gender:"f",
     note:"Feminine noun. False or misleading information.\n'Smascherare una bufala' = to debunk a hoax. Informal but widely used.",
     example:"A: Quella notizia e una bufala: non ha alcuna fonte verificabile.\nB: Purtroppo e già diventata virale.",
     exampleSrc:"A: That news is a hoax: it has no verifiable source.\nB: Unfortunately it has already gone viral.",
     funFact:"'Bufala' literally means 'female buffalo' (buffalo mozzarella comes from bufala milk). The slang meaning of 'hoax' may derive from 'menare per il naso come una bufala' (to lead by the nose like a buffalo), meaning to deceive."},

    {type:"teach", trg:"il diritto di replica", src:"the right of reply", pos:"noun", gender:"m",
     note:"Masculine compound noun. The legal right to respond to published claims.\n'Esercitare il diritto di replica' = to exercise the right of reply.",
     example:"A: Il politico ha chiesto il diritto di replica al quotidiano.\nB: La legge obbliga il giornale a pubblicare la risposta.",
     exampleSrc:"A: The politician requested the right of reply from the newspaper.\nB: The law requires the newspaper to publish the response.",
     funFact:"Italian press law guarantees a robust right of reply. Anyone mentioned in a news article can demand that the publication run their response with comparable prominence. This right is stronger in Italy than in many other democracies."},

    {type:"teach", trg:"il trolling", src:"trolling (online harassment)", pos:"noun", gender:"m",
     note:"Masculine noun. English loanword. Deliberately provocative online behavior.\n'Il troll' = a person who trolls.",
     example:"A: Il trolling sui social media e diventato un problema serio.\nB: Molti personaggi pubblici subiscono attacchi quotidiani.",
     exampleSrc:"A: Trolling on social media has become a serious problem.\nB: Many public figures suffer daily attacks.",
     funFact:"Italy's 'legge sul cyberbullismo' (cyberbullying law, 2017) was the first EU law specifically targeting online harassment of minors. It gives victims the right to request removal of harmful content within 48 hours."},

    {type:"mc",
     q:"Che cos'e una 'bufala' nel linguaggio giornalistico italiano?",
     opts:["Una notizia falsa o ingannevole priva di fonti verificabili","Un tipo di intervista esclusiva a una fonte anonima","Un editoriale controverso che provoca reazioni accese","Un articolo particolarmente lungo e approfondito"],
     ans:"Una notizia falsa o ingannevole priva di fonti verificabili",
     hint:"Informal Italian slang for fake news or a hoax. The word literally means 'female buffalo' but has acquired this figurative meaning."},

    {type:"teach", trg:"la viralita", src:"virality", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nThe rapid spread of content online.",
     example:"A: La viralita di un contenuto non ne garantisce la veridicita.\nB: Spesso le bufale si diffondono più velocemente dei fatti.",
     exampleSrc:"A: A content's virality does not guarantee its truthfulness.\nB: Hoaxes often spread faster than facts.",
     funFact:"Research shows that false news spreads 6 times faster than true news on social media. Italian fact-checking organizations like Pagella Politica and Butac work to combat this asymmetry."},

    {type:"teach", trg:"il fact-checking", src:"fact-checking", pos:"noun", gender:"m",
     note:"Masculine noun. English loanword. Verifying the accuracy of claims.\nItalian alternative: 'verifica dei fatti.'",
     example:"A: Il fact-checking e essenziale prima di condividere una notizia.\nB: Esistono siti dedicati a questo servizio.",
     exampleSrc:"A: Fact-checking is essential before sharing news.\nB: There are websites dedicated to this service.",
     funFact:"Italy's main fact-checking platforms include Pagella Politica (political claims), Facta.news, and Open (founded by journalist Enrico Mentana). Despite growing awareness, only about 30% of Italians regularly verify news before sharing."},

    {type:"teach", trg:"l'hashtag", src:"the hashtag", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. A keyword preceded by # for social media categorization.\n'Diventare trending topic' = to become a trending topic.",
     example:"A: L'hashtag ha raccolto milioni di interazioni in poche ore.\nB: Il tema e diventato trending topic in Italia.",
     exampleSrc:"A: The hashtag gathered millions of interactions in a few hours.\nB: The topic became a trending topic in Italy.",
     funFact:"Italians are heavy social media users: over 43 million active users on platforms like Instagram, Facebook, and TikTok. Italian trending hashtags often mix English and Italian, reflecting the country's bilingual digital culture."},

    {type:"fb",
     s:"La {1} giornalistica impone la verifica accurata di ogni informazione prima della pubblicazione.",
     a:["deontologia"],
     opts:["deontologia","viralita","bufala","pubblicita"],
     hint:"The professional ethical code that governs how journalists should behave. It requires source verification and truthful reporting.",
     sSrc:"Journalistic {1} requires accurate verification of every piece of information before publication."},

    {type:"teach", trg:"la bolla informativa", src:"the information bubble / filter bubble", pos:"noun", gender:"f",
     note:"Feminine compound noun. When algorithms show you only content matching your views.\nAlso: 'camera dell'eco' = echo chamber.",
     example:"A: Gli algoritmi creano una bolla informativa intorno a noi.\nB: Vediamo solo opinioni simili alle nostre.",
     exampleSrc:"A: Algorithms create an information bubble around us.\nB: We see only opinions similar to our own.",
     funFact:"Italian media scholars use both 'bolla informativa' (information bubble) and the borrowed term 'filter bubble.' The concept has become central to Italian digital literacy education, now taught in many schools."},

    {type:"teach", trg:"la diffida", src:"the cease-and-desist letter / formal warning", pos:"noun", gender:"f",
     note:"Feminine noun. A formal legal warning to stop certain behavior.\n'Inviare una diffida' = to send a cease-and-desist.",
     example:"A: L'avvocato ha inviato una diffida al sito web.\nB: Se non rimuovono il contenuto, procederemo per vie legali.",
     exampleSrc:"A: The lawyer sent a cease-and-desist to the website.\nB: If they do not remove the content, we will take legal action.",
     funFact:"In Italian media disputes, a 'diffida' is often the first step before litigation. It formally demands that the recipient stop publishing certain content. Italian press law makes this an important tool for protecting reputation."},

    {type:"teach", trg:"la rettifica", src:"the correction / rectification", pos:"noun", gender:"f",
     note:"Feminine noun. A published correction of an error.\n'Pubblicare una rettifica' = to publish a correction.",
     example:"A: Il giornale ha pubblicato una rettifica dopo l'errore.\nB: L'informazione corretta appare in prima pagina.",
     exampleSrc:"A: The newspaper published a correction after the error.\nB: The correct information appears on the front page.",
     funFact:"Italian press law requires corrections ('rettifiche') to be published with the same prominence as the original error. In practice, corrections often appear in small print while the original mistake ran as a headline."},

    {type:"mc",
     q:"Cosa impone la legge italiana sul diritto di replica?",
     opts:["Che i social media rimuovano i commenti offensivi in 24 ore","Che il soggetto citato possa rispondere all'articolo con pari visibilita","Che i lettori possano commentare tutti gli articoli online","Che ogni giornalista debba citare almeno tre fonti diverse"],
     ans:"Che il soggetto citato possa rispondere all'articolo con pari visibilita",
     hint:"Anyone mentioned in a published article has the legal right to have their response published with comparable prominence."},

    {type:"match", pairs:[
      {trg:"bufala", src:"hoax/fake news"},
      {trg:"viralita", src:"virality"},
      {trg:"fact-checking", src:"fact-checking"},
      {trg:"bolla informativa", src:"filter bubble"},
      {trg:"rettifica", src:"correction"}
    ]},

    {type:"fb",
     s:"Il {1} e essenziale per verificare la veridicita delle notizie prima di condividerle.",
     a:["fact-checking"],
     opts:["fact-checking","trolling","hashtag","streaming"],
     hint:"The process of verifying claims and c... sources. Essential in the age of disinformation.",
     sSrc:"{1} is essential to verify the truthfulness of news before sharing it."},

    {type:"mc",
     q:"Che cos'e la 'bolla informativa' creata dagli algoritmi?",
     opts:["La quantità massima di dati che un algoritmo può elaborare","Un servizio premium che offre notizie esclusive a pagamento","L'effetto per cui vediamo solo contenuti coerenti con le nostre opinioni preesistenti","Un gruppo chiuso di giornalisti che condividono informazioni riservate"],
     ans:"L'effetto per cui vediamo solo contenuti coerenti con le nostre opinioni preesistenti",
     hint:"Algorithms show you content matching your existing views, creating a bubble where you never encounter different perspectives."}
  ,{type:"match",pairs:[{trg:"il diritto di replica",src:"the right of reply"},{trg:"il trolling",src:"trolling (online harassment)"},{trg:"la diffida",src:"the cease-and-desist letter / formal warning"}]},{type:"mc",q:"How do you say \"copyright\" in Italian?",opts:["la deontologia","la bufala","il diritto di replica","il diritto d'autore"],ans:"il diritto d'autore",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"hashtag\" in Italian?",opts:["l'hashtag","la deontologia","il diritto d'autore","la bufala"],ans:"l'hashtag",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_2;
