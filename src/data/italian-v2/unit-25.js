// Italian V2 Unit 25. L'economia (B2.1)
import BATCH8_L1 from './_batch8_u25_L01.js';
import BATCH7_L1 from './_batch7_u25_L01.js';
import BATCH6_L1 from './_batch6_u25_L01.js';
import BATCH5_L02 from './_batch5_u25_L02.js';
import BATCH5_L01 from './_batch5_u25_L01.js';
import BATCH3_L02 from './_batch3_u25_L02.js';
import BATCH3_L01 from './_batch3_u25_L01.js';
import EXP_L4 from './_temp_u25_expand_L01.js';import EXP_L5 from './_temp_u25_expand_L02.js';import EXP_L6 from './_temp_u25_expand_L03.js';
import COVERAGE_U25 from './_coverage_u25.js';
// CILS B2 aligned. Finance, business, and economic vocabulary.

const UNIT_25 = {
  n:25, lang:"it", srcLang:"en", track:"v2",
  title:"L'economia", sub:"Economy & Finance",
  icon:"📈", level:"B2.1", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Il mondo della finanza ───
    {id:"itv2_u25l1", title:"Il mondo della finanza", icon:"💰", xp:15, board:true, steps:[
      {type:"intro", title:"Il mondo della finanza",
       desc:"Enter the world of Italian finance. Learn key terms for investments, markets, and economic indicators used in news and business contexts.",
       goals:["Name core financial instruments and institutions","Discuss market trends and economic indicators","Understand Italian business news vocabulary"]},

      {type:"teach", trg:"l'investimento", src:"the investment", pos:"noun", gender:"m",
       note:"Masculine noun. From investire (to invest).\nPlural: gli investimenti.",
       example:"A: Hai fatto un buon investimento?\nB: Si, ho investito in azioni tecnologiche.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: Did you make a good investment?\nB: Yes, I invested in technology stocks.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"From Latin 'investire' meaning 'to clothe' or 'to surround.' The financial sense of putting money into something developed in 17th-century Italian banking."},

      {type:"teach", trg:"l'azione", src:"the share / stock", pos:"noun", gender:"f",
       note:"Feminine noun. In finance, means a share of company ownership.\nPlural: le azioni. Also means 'action' in everyday use.",
       example:"A: Quante azioni hai comprato?\nB: Cento azioni della Fiat.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: How many shares did you buy?\nB: One hundred Fiat shares.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"The word 'azione' carries a double life: 'action' in daily speech, 'share/stock' in finance. The Borsa Italiana lists azioni of all major Italian companies."},

      {type:"teach", trg:"la borsa", src:"the stock exchange", pos:"noun", gender:"f",
       note:"Feminine noun. Short for 'Borsa Valori.'\nAlso means 'bag/purse' in everyday use.",
       example:"A: Come va la borsa oggi?\nB: Male, i titoli sono in calo.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: How is the stock exchange doing today?\nB: Badly, stocks are down.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Named after the Van der Beurze family of Bruges, whose house was a medieval trading hub. Italian borrowed 'borsa' (bag) for the concept because traders carried money bags."},

      {type:"teach", trg:"l'inflazione", src:"the inflation", pos:"noun", gender:"f",
       note:"Feminine noun. A sustained increase in the general price level.\nPlural: le inflazioni (rare, usually singular).",
       example:"A: L'inflazione e al tre per cento.\nB: I prezzi continuano a salire.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: Inflation is at three percent.\nB: Prices keep going up.\nA: How is it going now?\nB: Much better than before, thanks.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy experienced devastating inflation in the 1970s-80s, reaching 21% in 1980. The switch to the euro in 2002 was partly driven by the desire for price stability."},

      {type:"teach", trg:"il tasso", src:"the rate", pos:"noun", gender:"m",
       note:"Masculine noun. Used in 'tasso di interesse' (interest rate),\n'tasso di cambio' (exchange rate), 'tasso di disoccupazione' (unemployment rate).",
       example:"A: Qual e il tasso di interesse?\nB: L'uno e mezzo per cento.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: What is the interest rate?\nB: One and a half percent.\nA: Do you do it often?\nB: At least once a week.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"'Tasso' also means 'badger' (the animal) and 'yew tree.' Three completely unrelated meanings from different Latin roots, all spelled identically in modern Italian."},
{type:"match",pairs:[{trg:"l'azione",src:"the share / stock"},{trg:"la borsa",src:"the stock exchange"},{trg:"l'inflazione",src:"the inflation"},{trg:"il tasso",src:"the rate"}]},

      {type:"mc",
       q:"Come si chiama il mercato dove si comprano e vendono le azioni?",
       opts:["La borsa","La banca","Il bilancio","Il debito"],
       ans:"La borsa",
       hint:"Think of where traders gathered with their money bags in medieval times. A place for buying and selling shares."},

      {type:"teach", trg:"il bilancio", src:"the budget / balance sheet", pos:"noun", gender:"m",
       note:"Masculine noun. 'Bilancio dello Stato' = national budget.\n'Bilancio aziendale' = company balance sheet.",
       example:"A: Il bilancio aziendale e positivo?\nB: Si, quest'anno siamo in attivo.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: Is the company balance sheet positive?\nB: Yes, this year we are in the black.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"From 'bilancia' (scale/balance). The Italian government presents its 'legge di bilancio' (budget law) every autumn, sparking weeks of political debate on national television."},

      {type:"teach", trg:"il debito", src:"the debt", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i debiti.\n'Debito pubblico' = national/public debt.",
       example:"A: L'Italia ha un debito pubblico enorme.\nB: Circa il 140% del PIL.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Italy has an enormous public debt.\nB: Around 140% of GDP.\nA: How long does it take?\nB: Usually about an hour, no more.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"Italy's public debt is the second largest in the eurozone. The phrase 'essere in debito con qualcuno' also means 'to owe someone a favor,' not just money."},

      {type:"teach", trg:"il credito", src:"the credit / loan", pos:"noun", gender:"m",
       note:"Masculine noun. Opposite of debito.\n'Carta di credito' = credit card.",
       example:"A: La banca mi ha concesso un credito.\nB: A che tasso di interesse?\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: The bank granted me a loan.\nB: At what interest rate?\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"From Latin 'credere' (to believe/trust). A loan is literally an act of trust. 'Dare credito' means both 'to lend money' and 'to believe someone.'"},

      {type:"fb",
       s:"L'aumento dei prezzi si chiama {1}.",
       a:["inflazione"],
       opts:["inflazione","investimento","bilancio","credito"],
       hint:"When prices keep rising across the economy over time, that sustained increase has a specific name.",
       sSrc:"The increase in prices is called {1}."},

      {type:"teach", trg:"investire", src:"to invest", pos:"verb", gender:null,
       note:"Regular -ire verb. Io investo, tu investi, lui investe.\nPassato prossimo: ho investito.",
       example:"A: Dove conviene investire oggi?\nB: Molti investono in fondi sostenibili.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: Where is it advisable to invest today?\nB: Many people invest in sustainable funds.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"In Italian, 'investire' also means 'to run over' (with a vehicle). 'Ho investito i miei risparmi' (I invested my savings) and 'Ho investito un pedone' (I ran over a pedestrian) use the same verb."},

      {type:"teach", trg:"risparmiare", src:"to save (money)", pos:"verb", gender:null,
       note:"Regular -are verb. Io risparmio, tu risparmi.\n'Il risparmio' (noun) = savings.",
       example:"A: Riesci a risparmiare ogni mese?\nB: Un po', metto via duecento euro.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: Do you manage to save every month?\nB: A little, I put away two hundred euros.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Italians have historically been among Europe's biggest savers. The verb comes from Germanic 'sparjan' (to spare), entering Italian during Lombard rule in the early Middle Ages."},

      {type:"mc",
       q:"Che cosa significa 'investire' nel contesto finanziario?",
       opts:["Spendere tutto il denaro","Mettere denaro in un'attivita per ottenere un profitto","Chiedere un prestito alla banca","Pagare le tasse al governo"],
       ans:"Mettere denaro in un'attivita per ottenere un profitto",
       hint:"This verb means putting your money into something with the expectation of gaining a return."},

      {type:"teach", trg:"finanziare", src:"to finance / fund", pos:"verb", gender:null,
       note:"Regular -are verb (with i: io finanzio).\n'Il finanziamento' (noun) = funding/financing.",
       example:"A: Chi finanzia questo progetto?\nB: Lo finanzia l'Unione Europea.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: Who finances this project?\nB: The European Union funds it.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"The word 'finanza' entered Italian from Old French 'finance' (payment, settlement), which itself came from the Latin 'finis' (end), because payment was the 'end' or settlement of a transaction."},

      {type:"teach", trg:"quotare", src:"to list (on the stock exchange) / to quote", pos:"verb", gender:null,
       note:"Regular -are verb. 'Una societa quotata in borsa' =\na publicly listed company.",
       example:"A: La societa sara quotata in borsa il mese prossimo.\nB: Finalmente! Aspettavamo da anni.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: The company will be listed on the stock exchange next month.\nB: Finally! We have been waiting for years.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"Only about 400 companies are listed on the Borsa Italiana, far fewer than in London or New York. Italian business is dominated by small family-owned firms that prefer to stay private."},

      {type:"match", pairs:[
        {trg:"investimento", src:"investment"},
        {trg:"azione", src:"share/stock"},
        {trg:"borsa", src:"stock exchange"},
        {trg:"bilancio", src:"budget"},
        {trg:"debito", src:"debt"}
      ]},

      {type:"fb",
       s:"La banca mi ha concesso un {1} a tasso fisso.",
       a:["credito"],
       opts:["credito","debito","bilancio","tasso"],
       hint:"The bank gives you money that you must pay back. This word is the opposite of 'debito.'",
       sSrc:"The bank granted me a {1} at a fixed rate."},

      {type:"mc",
       q:"Che cosa vuol dire 'quotare in borsa'?",
       opts:["Risparmiare denaro in banca","Chiudere un'azienda per fallimento","Rendere le azioni di una societa disponibili al pubblico","Calcolare il bilancio annuale"],
       ans:"Rendere le azioni di una societa disponibili al pubblico",
       hint:"When a company's shares become available for public trading on the stock exchange."}
    ]},

    // ─── Lesson 2: Le imprese e il commercio ───
    {id:"itv2_u25l2", title:"Le imprese e il commercio", icon:"🏢", xp:15, board:true, steps:[
      {type:"intro", title:"Le imprese e il commercio",
       desc:"Learn vocabulary for business operations, trade, and corporate life. Understand how Italian companies function and discuss commercial activity.",
       goals:["Describe business structures and operations","Discuss trade and exports","Talk about corporate performance and challenges"]},

      {type:"teach", trg:"l'impresa", src:"the enterprise / business", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le imprese.\nAlso means 'feat' or 'undertaking' in general use.",
       example:"A: Che tipo di impresa gestisci?\nB: Una piccola impresa familiare.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: What type of business do you run?\nB: A small family business.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italy has over 4 million active businesses, most of them micro-enterprises with fewer than 10 employees. The phrase 'piccola e media impresa' (PMI) is central to Italian economic identity."},

      {type:"teach", trg:"la fusione", src:"the merger", pos:"noun", gender:"f",
       note:"Feminine noun. In business, when two companies combine into one.\nAlso means 'melting/fusion' in science.",
       example:"A: La fusione tra le due aziende e stata approvata.\nB: Sara la piu grande del settore.\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: The merger between the two companies was approved.\nB: It will be the largest in the sector.\nA: That is my opinion too.\nB: Good, then we agree on this point.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"From Latin 'fusionem' (a pouring out, melting). The word captures both physical melting and corporate merging. Italy's biggest mergers often involve banking groups consolidating."},

      {type:"teach", trg:"il fallimento", src:"the bankruptcy / failure", pos:"noun", gender:"m",
       note:"Masculine noun. 'Dichiarare fallimento' = to declare bankruptcy.\nAlso used figuratively: 'un fallimento totale' = a total failure.",
       example:"A: L'azienda ha dichiarato fallimento.\nB: Che peccato, aveva trecento dipendenti.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: The company declared bankruptcy.\nB: What a shame, it had three hundred employees.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italian bankruptcy law was completely reformed in 2019, replacing a code from 1942. The new law emphasizes early warning systems and restructuring over liquidation."},

      {type:"teach", trg:"la competitivita", src:"the competitiveness", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable: same form singular and plural.\n'Competitivita internazionale' = international competitiveness.",
       example:"A: Come possiamo migliorare la competitivita?\nB: Con l'innovazione e la formazione.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: How can we improve competitiveness?\nB: Through innovation and training.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"Italian nouns ending in an accented vowel never change in the plural. 'La competitivita' stays 'le competitivita.' This pattern applies to many abstract nouns borrowed from Latin."},

      {type:"teach", trg:"l'esportazione", src:"the export", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le esportazioni.\nOpposite: l'importazione.",
       example:"A: Le esportazioni italiane sono cresciute.\nB: Soprattutto nel settore alimentare.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: Italian exports have grown.\nB: Especially in the food sector.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
       funFact:"Italy is the world's 8th largest exporter. 'Made in Italy' is a globally recognized brand, especially for fashion, food, machinery, and luxury cars. The phrase itself has legal protection."},
{type:"match",pairs:[{trg:"la fusione",src:"the merger"},{trg:"il fallimento",src:"the bankruptcy / failure"},{trg:"la competitivita",src:"the competitiveness"},{trg:"l'esportazione",src:"the export"}]},

      {type:"mc",
       q:"Quando due aziende si uniscono, come si chiama questa operazione?",
       opts:["Una fusione","Un fallimento","Un'esportazione","Un investimento"],
       ans:"Una fusione",
       hint:"Think of melting two things together into one. The business term for combining two companies."},

      {type:"teach", trg:"il fatturato", src:"the revenue / turnover", pos:"noun", gender:"m",
       note:"Masculine noun. The total income from sales.\n'Fatturato annuo' = annual revenue.",
       example:"A: Qual e il vostro fatturato annuo?\nB: Circa dieci milioni di euro.\nA: C'e qualcosa che posso fare?\nB: Grazie, per adesso va tutto bene.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: What is your annual revenue?\nB: About ten million euros.\nA: Is there anything I can do?\nB: Thanks, for now everything is fine.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"From 'fattura' (invoice). The fatturato is literally 'the amount that has been invoiced.' Italy's largest company by revenue is typically ENEL (energy) or Eni (oil and gas)."},

      {type:"teach", trg:"il settore", src:"the sector / industry", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i settori.\n'Settore privato/pubblico' = private/public sector.",
       example:"A: In quale settore lavori?\nB: Nel settore della tecnologia.\nA: Quando e successo?\nB: La settimana scorsa, di giovedi.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: Which sector do you work in?\nB: In the technology sector.\nA: When did it happen?\nB: Last week, on Thursday.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"The Italian economy is traditionally divided into three pillars: manufacturing (especially in the north), tourism, and agriculture. The 'terziario' (tertiary/service sector) has grown to dominate since the 1990s."},

      {type:"teach", trg:"la crescita", src:"the growth", pos:"noun", gender:"f",
       note:"Feminine noun. 'Crescita economica' = economic growth.\nFrom the verb 'crescere' (to grow).",
       example:"A: La crescita economica e stata debole.\nB: Solo lo 0,5% quest'anno.\nA: Chi altro lo sa?\nB: Per adesso solo noi due e la famiglia.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: Economic growth has been weak.\nB: Only 0.5% this year.\nA: Who else knows?\nB: For now just the two of us and the family.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"Italy's economic growth rate has lagged behind European averages for decades, a phenomenon economists call 'il declino italiano.' Yet the country remains the third-largest economy in the eurozone."},

      {type:"fb",
       s:"L'azienda non poteva pagare i debiti e ha dichiarato {1}.",
       a:["fallimento"],
       opts:["fallimento","fusione","crescita","esportazione"],
       hint:"When a company can no longer pay its debts and must officially close down, it declares this.",
       sSrc:"The company could not pay its debts and declared {1}."},

      {type:"teach", trg:"la concorrenza", src:"the competition", pos:"noun", gender:"f",
       note:"Feminine noun. 'Concorrenza sleale' = unfair competition.\nRelated adjective: concorrenziale (competitive).",
       example:"A: La concorrenza nel settore e fortissima.\nB: Dobbiamo differenziarci.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: Competition in the sector is very strong.\nB: We need to differentiate ourselves.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"The Italian competition authority is called 'Autorita Garante della Concorrenza e del Mercato' (AGCM). Italians informally call it 'l'Antitrust,' borrowing the English term."},

      {type:"teach", trg:"il profitto", src:"the profit", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i profitti.\nSynonym: il guadagno (earnings).",
       example:"A: I profitti sono aumentati del venti per cento.\nB: Un risultato eccellente.\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: Profits increased by twenty percent.\nB: An excellent result.\nA: Did it cost a lot?\nB: Less than I thought, fortunately.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"From Latin 'profectus' (progress, profit). Italian distinguishes 'profitto lordo' (gross profit) from 'profitto netto' (net profit), just as English does."},

      {type:"mc",
       q:"Come si chiama il totale delle vendite di un'azienda in un anno?",
       opts:["Il profitto","Il fatturato","Il debito","Il bilancio"],
       ans:"Il fatturato",
       hint:"This word comes from 'fattura' (invoice). It represents the total amount invoiced over a period."},

      {type:"teach", trg:"il commercio", src:"the trade / commerce", pos:"noun", gender:"m",
       note:"Masculine noun. 'Commercio estero' = foreign trade.\n'Camera di commercio' = chamber of commerce.",
       example:"A: Il commercio tra Italia e Germania e molto forte.\nB: La Germania e il nostro primo partner commerciale.\nA: Come hai saputo?\nB: Me l'ha detto un amico ieri sera.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: Trade between Italy and Germany is very strong.\nB: Germany is our first trade partner.\nA: How did you find out?\nB: A friend told me last night.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Italian city-states like Venice, Genoa, and Florence were the commercial powerhouses of medieval Europe. Modern Italian still uses many financial terms coined during the Renaissance."},

      {type:"teach", trg:"il mercato", src:"the market", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i mercati.\n'Mercato libero' = free market. 'Mercato rionale' = local street market.",
       example:"A: Il mercato immobiliare e in ripresa.\nB: I prezzi delle case stanno salendo.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: The housing market is recovering.\nB: House prices are going up.\nA: What do you think?\nB: In my opinion it is an excellent choice.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Every Italian town has a weekly 'mercato rionale' (neighborhood market) for fresh produce. The word serves double duty for both the physical marketplace and abstract economic markets."},

      {type:"match", pairs:[
        {trg:"impresa", src:"enterprise"},
        {trg:"fatturato", src:"revenue"},
        {trg:"concorrenza", src:"competition"},
        {trg:"crescita", src:"growth"},
        {trg:"profitto", src:"profit"}
      ]},

      {type:"fb",
       s:"Le {1} italiane nel settore alimentare sono cresciute del 15%.",
       a:["esportazioni"],
       opts:["esportazioni","importazioni","fusioni","concorrenze"],
       hint:"When Italian food products are sold to other countries, those sales are called this (plural).",
       sSrc:"Italian {1} in the food sector grew by 15%."},

      {type:"mc",
       q:"Che cos'e la 'concorrenza sleale'?",
       opts:["Il commercio tra paesi diversi","Un tipo di investimento rischioso","Pratiche commerciali scorrette contro i rivali","La crescita economica lenta"],
       ans:"Pratiche commerciali scorrette contro i rivali",
       hint:"When businesses use dishonest or 'unfair' methods against their rivals. The adjective 'sleale' means disloyal/unfair."}
    ]},

    // ─── Lesson 3: Politica economica ───
    {id:"itv2_u25l3", title:"Politica economica", icon:"🏛️", xp:15, board:true, steps:[
      {type:"intro", title:"Politica economica",
       desc:"Learn to discuss economic policy, taxation, and macroeconomic concepts. Understand terms used in Italian political and economic debate.",
       goals:["Discuss taxation and government spending","Understand macroeconomic indicators","Express opinions about economic policy"]},

      {type:"teach", trg:"la tassa", src:"the tax", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le tasse.\n'Pagare le tasse' = to pay taxes. Different from 'imposta' (a specific tax levy).",
       example:"A: Le tasse in Italia sono alte.\nB: Tra le piu alte d'Europa.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: Taxes in Italy are high.\nB: Among the highest in Europe.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Italy distinguishes between 'tasse' (fees for services, like university tuition) and 'imposte' (compulsory taxes like income tax). In everyday speech, most Italians use 'tasse' for everything."},

      {type:"teach", trg:"il PIL", src:"the GDP (Gross Domestic Product)", pos:"noun", gender:"m",
       note:"Masculine noun. Abbreviation for 'Prodotto Interno Lordo.'\nPronounced as a word: 'peel.'",
       example:"A: Il PIL italiano e cresciuto dello 0,8%.\nB: Meglio delle previsioni.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: Italian GDP grew by 0.8%.\nB: Better than the forecasts.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"Italy is the world's 8th largest economy by GDP but has had near-zero growth for much of the 21st century. Economists call this 'il ventennio perduto' (the lost two decades)."},

      {type:"teach", trg:"la disoccupazione", src:"the unemployment", pos:"noun", gender:"f",
       note:"Feminine noun. 'Tasso di disoccupazione' = unemployment rate.\nOpposite: l'occupazione (employment).",
       example:"A: La disoccupazione giovanile e al 25%.\nB: Un problema gravissimo per il paese.\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Youth unemployment is at 25%.\nB: A very serious problem for the country.\nA: Is it the first time?\nB: No, I did it last year too.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"Italy has one of the highest youth unemployment rates in the EU, leading to the phenomenon of 'fuga dei cervelli' (brain drain), where young graduates move abroad for work."},

      {type:"teach", trg:"la riforma", src:"the reform", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le riforme.\n'Riforma fiscale' = tax reform. 'Riforma del lavoro' = labor reform.",
       example:"A: Il governo ha proposto una riforma fiscale.\nB: Speriamo che riduca la burocrazia.\nA: Come ti sei trovato?\nB: Molto bene, lo consiglio a tutti.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: The government proposed a tax reform.\nB: Let us hope it reduces the bureaucracy.\nA: How did you find it?\nB: Very well, I recommend it to everyone.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"Italy averages a major economic reform attempt roughly every two years. The word 'riforma' appears in Italian political headlines more than almost any other noun."},

      {type:"mc",
       q:"Che cosa significa PIL?",
       opts:["Prodotto Interno Lordo","Profitto Industriale Locale","Piano di Investimento a Lungo termine","Programma Italiano di Lavoro"],
       ans:"Prodotto Interno Lordo",
       hint:"This three-letter abbreviation measures the total value of goods and services produced within a country."},

      {type:"teach", trg:"il deficit", src:"the deficit", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable (no plural change).\n'Deficit di bilancio' = budget deficit.",
       example:"A: Il deficit pubblico supera il tre per cento.\nB: L'Europa ci impone dei limiti.\nA: Da quanto tempo?\nB: Da qualche mese ormai.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: The public deficit exceeds three percent.\nB: Europe imposes limits on us.\nA: For how long?\nB: For a few months now.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"The Maastricht criteria limit EU member states' deficits to 3% of GDP. Italy regularly comes close to or exceeds this limit, leading to tense negotiations with Brussels."},

      {type:"teach", trg:"la spesa pubblica", src:"the public spending", pos:"noun", gender:"f",
       note:"Feminine noun (compound). 'Tagliare la spesa pubblica' =\nto cut public spending. 'Spending review' is also used in Italian.",
       example:"A: La spesa pubblica deve essere ridotta.\nB: Ma senza tagliare i servizi essenziali.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: Public spending must be reduced.\nB: But without cutting essential services.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Italians frequently use the English term 'spending review' alongside the Italian 'revisione della spesa.' This mixing of English financial jargon into Italian political discourse is increasingly common."},

      {type:"teach", trg:"il reddito", src:"the income", pos:"noun", gender:"m",
       note:"Masculine noun. 'Reddito nazionale' = national income.\n'Reddito di cittadinanza' = universal basic income (a controversial Italian policy).",
       example:"A: Qual e il reddito medio in Italia?\nB: Circa trentamila euro lordi l'anno.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: What is the average income in Italy?\nB: About thirty thousand euros gross per year.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"Italy introduced the 'reddito di cittadinanza' (citizens' income) in 2019, a form of basic income for the poor. It was heavily debated and partially reformed by subsequent governments."},

      {type:"fb",
       s:"Il {1} di disoccupazione giovanile e troppo alto.",
       a:["tasso"],
       opts:["tasso","debito","reddito","deficit"],
       hint:"This word means 'rate' and is used with percentages. It appears in 'interest rate' and 'unemployment rate.'",
       sSrc:"The unemployment {1} for young people is too high."},

      {type:"teach", trg:"l'austerita", src:"the austerity", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Politica di austerita' = austerity policy.",
       example:"A: L'austerita ha causato molti problemi sociali.\nB: Si, ma il debito andava ridotto.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: Austerity caused many social problems.\nB: Yes, but the debt had to be reduced.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"Austerity measures imposed during the European debt crisis of 2011-2013 left a deep mark on Italian politics, fueling the rise of populist parties and Eurosceptic sentiment."},

      {type:"teach", trg:"la privatizzazione", src:"the privatization", pos:"noun", gender:"f",
       note:"Feminine noun. The process of selling state-owned assets to private buyers.\nOpposite: la nazionalizzazione.",
       example:"A: La privatizzazione delle poste e stata controversa.\nB: Alcuni preferivano il servizio pubblico.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: The privatization of the postal service was controversial.\nB: Some preferred the public service.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italy carried out massive privatizations in the 1990s, selling off IRI, one of the world's largest state holding companies. Telecom Italia, Autostrade, and ENEL all went private during this period."},

      {type:"mc",
       q:"Che cos'e la 'fuga dei cervelli'?",
       opts:["Una riforma del sistema universitario","Giovani qualificati che emigrano per trovare lavoro","Un tipo di investimento estero","La crescita del settore tecnologico"],
       ans:"Giovani qualificati che emigrano per trovare lavoro",
       hint:"'Cervelli' means brains. When skilled young people leave their country to find work elsewhere, their country loses those 'brains.'"},

      {type:"teach", trg:"la burocrazia", src:"the bureaucracy", pos:"noun", gender:"f",
       note:"Feminine noun. Excessive administrative procedures.\nOften used negatively: 'troppa burocrazia' = too much red tape.",
       example:"A: La burocrazia italiana e un ostacolo per le imprese.\nB: Ci vogliono mesi per aprire un'attivita.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: Italian bureaucracy is an obstacle for businesses.\nB: It takes months to open a business.\nA: How is it going now?\nB: Much better than before, thanks.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"Italians frequently rank bureaucracy as their top frustration with the public sector. The phrase 'via crucis burocratica' (bureaucratic way of the cross) captures the feeling of endless administrative suffering."},

      {type:"match", pairs:[
        {trg:"PIL", src:"GDP"},
        {trg:"disoccupazione", src:"unemployment"},
        {trg:"deficit", src:"deficit"},
        {trg:"reddito", src:"income"},
        {trg:"riforma", src:"reform"}
      ]},

      {type:"fb",
       s:"La {1} pubblica deve essere ridotta per abbassare il deficit.",
       a:["spesa"],
       opts:["spesa","tassa","riforma","borsa"],
       hint:"Government money going out. The amount the state spends on services, salaries, and infrastructure.",
       sSrc:"Public {1} must be reduced to lower the deficit."},

      {type:"mc",
       q:"Che cos'e una privatizzazione?",
       opts:["La fusione di due aziende pubbliche","L'aumento delle tasse per le imprese","La vendita di beni statali a privati","L'assunzione di nuovi dipendenti pubblici"],
       ans:"La vendita di beni statali a privati",
       hint:"When the state sells its companies or assets to private buyers. The opposite of nationalization."}
    ,{type:"match",pairs:[{trg:"investire",src:"to invest"},{trg:"finanziare",src:"to finance / fund"},{trg:"quotare",src:"to list (on the stock exchange) / to quote"},{trg:"la tassa",src:"the tax"},{trg:"la burocrazia",src:"the bureaucracy"}]},{type:"fb",s:"La societa ha dichiarato {1} dopo anni di perdite.",a:["il fallimento"],opts:["il fallimento","la fusione","il debito","il bilancio"],hint:"The legal state when a company can no longer pay its creditors and ceases operations.",sSrc:"The company declared {1} after years of losses."},{type:"fb",s:"{1} tra le due banche ha creato il gruppo piu grande del paese.",a:["la fusione"],opts:["la fusione","il debito","il settore","il profitto"],hint:"When two companies combine to form a single entity, a common corporate strategy.",sSrc:"{1} between the two banks created the largest group in the country."}]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH5_L02,
  BATCH5_L01,
  BATCH3_L02,
  BATCH3_L01,
  EXP_L4,
  EXP_L5,
  EXP_L6
, COVERAGE_U25]
};

export default UNIT_25;
