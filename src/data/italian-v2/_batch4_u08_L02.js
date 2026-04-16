// Batch 4 — Unit 08, Lesson 2: Returns, Exchanges & Shopping Problems
const BATCH4_U08_L2 = {
  id:"itv2_u08l_b4_2", title:"Cambi e resi", icon:"\uD83D\uDD04", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cambi e resi",
     desc:"Learn how to handle returns, exchanges, and common shopping problems in Italian stores.",
     goals:["Exchange or return items","Describe problems with products","Navigate Italian consumer rights"]},

    {type:"teach", trg:"cambiare", src:"to exchange / to change", pos:"verb", gender:null,
     note:"Regular -are verb. 'Posso cambiare questo?' = Can I exchange this?\nAlso means 'to change' in general.",
     example:"A: Posso cambiare questa maglietta?\nB: Si, ha lo scontrino?",
     exampleSrc:"A: Can I exchange this T-shirt?\nB: Yes, do you have the receipt?",
     funFact:"'Cambiare' works for exchanging products, changing clothes, changing jobs, and changing money. 'Cambiare idea' (to change one's mind) is common. 'Cambiare aria' (to change air) means to go somewhere different for a fresh start."},

    {type:"teach", trg:"restituire", src:"to return (give back)", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc-). 'Vorrei restituire questo' = I would like to return this.\nThe noun is 'il reso' (the return).",
     example:"A: Vorrei restituire questa borsa.\nB: C'e un difetto?",
     exampleSrc:"A: I would like to return this bag.\nB: Is there a defect?",
     funFact:"Italian consumer law gives 14 days for online returns ('diritto di recesso'). In-store returns depend on the shop's policy. Always keep the 'scontrino' (receipt). Without it, returns are nearly impossible in Italy."},

    {type:"teach", trg:"il difetto", src:"the defect / flaw", pos:"noun", gender:"m",
     note:"Masculine. Plural: i difetti. 'Ha un difetto' = it has a flaw.\nAlso used for character flaws.",
     example:"A: Questa giacca ha un difetto.\nB: Dov'e il difetto? Ah, vedo. La cambiamo.",
     exampleSrc:"A: This jacket has a defect.\nB: Where is the defect? Ah, I see. We'll exchange it.",
     funFact:"'Difetto' works for physical products and personality traits. 'Nessuno e senza difetti' (nobody is without flaws) is a common saying. In Italian fashion, even a tiny 'difetto' in stitching is unacceptable at premium brands."},

    {type:"teach", trg:"rotto", src:"broken", pos:"adj", gender:"m",
     note:"Masculine. Feminine: rotta. Past participle of 'rompere' (to break).\n'La cerniera e rotta' = the zipper is broken.",
     example:"A: La cerniera e rotta.\nB: Possiamo ripararla o cambiarla.",
     exampleSrc:"A: The zipper is broken.\nB: We can repair it or exchange it.",
     funFact:"'Rotto' is used for broken objects, but also figuratively: 'sono rotto' (I am exhausted, literally broken), 'rompere le scatole' (to break someone's boxes, meaning to annoy someone). Very colorful Italian expressions."},

    {type:"teach", trg:"stretto", src:"tight / narrow", pos:"adj", gender:"m",
     note:"Masculine. Feminine: stretta. Opposite: largo (wide/loose).\n'Le scarpe sono troppo strette' = the shoes are too tight.",
     example:"A: Questa giacca e troppo stretta.\nB: Provi una taglia piu grande.",
     exampleSrc:"A: This jacket is too tight.\nB: Try a bigger size.",
     funFact:"'Stretto' describes tight clothing, narrow streets, and close relationships ('amico stretto' = close friend). 'Lo stretto di Messina' (the Strait of Messina) separates Sicily from the mainland. One word, many contexts."},

    {type:"teach", trg:"largo", src:"wide / loose / big", pos:"adj", gender:"m",
     note:"Masculine. Feminine: larga. Opposite: stretto.\n'Il vestito e troppo largo' = the dress is too loose.",
     example:"A: Questi pantaloni sono troppo larghi.\nB: Ha bisogno di una taglia piu piccola.",
     exampleSrc:"A: These pants are too loose.\nB: You need a smaller size.",
     funFact:"In Italian urban planning, 'largo' is also a small square or widened section of a street (Largo Argentina in Rome). For clothing, 'largo' means the garment hangs too loosely. Italian fashion generally favors fitted clothes."},

    {type:"teach", trg:"la cerniera", src:"the zipper", pos:"noun", gender:"f",
     note:"Feminine. Also called 'la zip' (informal).\n'Cerniera lampo' = lightning zipper (full name).",
     example:"A: La cerniera non funziona.\nB: Possiamo ripararla.",
     exampleSrc:"A: The zipper doesn't work.\nB: We can repair it.",
     funFact:"The full Italian name is 'cerniera lampo' (lightning zipper), but most people just say 'cerniera' or 'zip.' 'Cerniera' also means 'hinge' for doors. Both zippers and hinges connect two sides, hence the shared word."},

    {type:"teach", trg:"il bottone", src:"the button", pos:"noun", gender:"m",
     note:"Masculine. Plural: i bottoni. From French 'bouton.'\n'Manca un bottone' = a button is missing.",
     example:"A: Manca un bottone alla camicia.\nB: Lo posso ricucire.",
     exampleSrc:"A: A button is missing from the shirt.\nB: I can sew it back on.",
     funFact:"Italian tailoring is meticulous about buttons. On a quality Italian suit, buttons are 'funzionali' (functional, they actually open) on the sleeves. This detail separates fine Italian tailoring from mass-produced suits."},

    {type:"teach", trg:"il rimborso", src:"the refund", pos:"noun", gender:"m",
     note:"Masculine. 'Chiedere un rimborso' = to ask for a refund.\nFrom 'rimborsare' (to reimburse).",
     example:"A: Posso avere un rimborso?\nB: Si, ma solo con lo scontrino.",
     exampleSrc:"A: Can I have a refund?\nB: Yes, but only with the receipt.",
     funFact:"Getting a cash refund in Italian shops can be difficult. Many prefer to offer 'un buono' (a store credit) or 'un cambio' (an exchange). Online purchases have stronger refund rights under EU consumer protection law."},

    {type:"teach", trg:"il reclamo", src:"the complaint", pos:"noun", gender:"m",
     note:"Masculine. 'Fare un reclamo' = to make a complaint.\nFrom 'reclamare' (to complain/claim).",
     example:"A: Vorrei fare un reclamo.\nB: Mi dica, qual e il problema?",
     exampleSrc:"A: I would like to make a complaint.\nB: Tell me, what is the problem?",
     funFact:"Italian consumer rights are protected by the 'Codice del Consumo' (Consumer Code). The 'Libro dei reclami' (complaints book) must legally exist in many establishments. Italians do not hesitate to 'fare reclamo' when something is wrong."},

    {type:"teach", trg:"la garanzia", src:"the warranty / guarantee", pos:"noun", gender:"f",
     note:"Feminine. 'In garanzia' = under warranty.\nEU law guarantees 2 years minimum.",
     example:"A: E ancora in garanzia?\nB: Si, la garanzia e di due anni.",
     exampleSrc:"A: Is it still under warranty?\nB: Yes, the warranty is two years.",
     funFact:"EU consumer law guarantees a 2-year warranty ('garanzia legale') on all products. This is stronger than many countries. Italian consumers are increasingly aware of their rights, and shops must honor this regardless of their own policies."},

    {type:"teach", trg:"soddisfatto", src:"satisfied / happy (with purchase)", pos:"adj", gender:"m",
     note:"Masculine. Feminine: soddisfatta. 'Soddisfatti o rimborsati' = satisfied or refunded.\n'Soddisfazione' = satisfaction.",
     example:"A: E soddisfatto dell'acquisto?\nB: Si, molto soddisfatto!",
     exampleSrc:"A: Are you satisfied with the purchase?\nB: Yes, very satisfied!",
     funFact:"'Soddisfatti o rimborsati' (satisfied or refunded) is the Italian equivalent of a money-back guarantee. It appears on many Italian products. 'Che soddisfazione!' (what satisfaction!) is said after accomplishing something pleasing."},

    {type:"teach", trg:"lamentarsi", src:"to complain", pos:"verb", gender:null,
     note:"Reflexive verb. 'Mi lamento del servizio' = I complain about the service.\nItalians are skilled complainers.",
     example:"A: Non ti lamentare sempre!\nB: Ma il servizio e terribile!",
     exampleSrc:"A: Don't always complain!\nB: But the service is terrible!",
     funFact:"Complaining ('lamentarsi') is practically an Italian art form. From the quality of coffee to traffic to politics, Italians express dissatisfaction vocally and passionately. It is seen not as negativity but as engagement with life."},

    {type:"teach", trg:"accontentarsi", src:"to be satisfied with / to settle for", pos:"verb", gender:null,
     note:"Reflexive verb. 'Chi si accontenta gode' = He who settles is happy (proverb).\nFrom 'contento' (happy).",
     example:"A: Il vestito non e perfetto, ma mi accontento.\nB: Stai bene comunque!",
     exampleSrc:"A: The dress is not perfect, but I'll settle for it.\nB: You look good anyway!",
     funFact:"'Chi si accontenta gode' (who settles, enjoys) is a famous Italian proverb about finding happiness in what you have. It is the philosophical counterpart to the Italian love of complaining: complain, but ultimately accept and enjoy."},

    {type:"teach", trg:"il commesso", src:"the shop assistant", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la commessa. The staff in Italian shops.\nFrom 'commettere' (to entrust).",
     example:"A: Chiedi al commesso se hanno la mia taglia.\nB: Scusi, avete la 44?",
     exampleSrc:"A: Ask the shop assistant if they have my size.\nB: Excuse me, do you have a 44?",
     funFact:"Italian shop assistants ('commessi') are typically well-dressed and knowledgeable. In high-end Italian stores, they provide personalized service and style advice. Entering a shop without greeting the commesso ('Buongiorno!') is considered rude."},

    // Quiz steps
    {type:"mc", q:"Cosa serve per fare un reso in Italia?",
     opts:["Lo scontrino (the receipt)","La carta d'identita","Il passaporto","La carta di credito"],
     ans:"Lo scontrino (the receipt)",
     hint:"Without this proof of purchase, returns are nearly impossible."},

    {type:"fb", s:"Questa giacca e troppo {1}, mi serve una taglia piu grande.",
     a:["stretta"], opts:["stretta","larga","rotta","nuova"],
     hint:"The jacket is too tight and you need a bigger size.",
     sSrc:"This jacket is too {1}, I need a bigger size."},

    {type:"match", pairs:[
      {trg:"cambiare", src:"to exchange"},
      {trg:"restituire", src:"to return"},
      {trg:"il rimborso", src:"refund"},
      {trg:"il reclamo", src:"complaint"},
      {trg:"la garanzia", src:"warranty"}
    ]},

    {type:"mc", q:"Quanti anni dura la garanzia legale in Europa?",
     opts:["2 anni","1 anno","6 mesi","5 anni"],
     ans:"2 anni",
     hint:"EU consumer law sets this minimum warranty period for all products."},

    {type:"fb", s:"La {1} della borsa e rotta, posso cambiarla?",
     a:["cerniera"], opts:["cerniera","taglia","borsa","pelle"],
     hint:"This fastening mechanism on the bag is broken.",
     sSrc:"The {1} on the bag is broken, can I exchange it?"},

    {type:"mc", q:"Cosa significa il proverbio 'Chi si accontenta gode'?",
     opts:["Those who accept what they have find happiness","Those who complain get better service","Rich people are always happy","Only perfect things bring joy"],
     ans:"Those who accept what they have find happiness",
     hint:"This proverb is about finding satisfaction without demanding perfection."},

    {type:"fb", s:"Vorrei {1} un reclamo per il servizio.",
     a:["fare"], opts:["fare","dare","avere","prendere"],
     hint:"The verb collocates with 'reclamo' to mean 'to make a complaint.'",
     sSrc:"I would like to {1} a complaint about the service."},

    {type:"mc", q:"Come devi salutare quando entri in un negozio italiano?",
     opts:["Dire 'Buongiorno!' al commesso","Entrare in silenzio","Aspettare che il commesso parli","Toccare i vestiti immediatamente"],
     ans:"Dire 'Buongiorno!' al commesso",
     hint:"Greeting the shop assistant is basic Italian etiquette when entering a store."}
  ]
};
export default BATCH4_U08_L2;
