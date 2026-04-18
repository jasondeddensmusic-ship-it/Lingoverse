// Italian → English cognate corpus
// See src/data/cognates/es.js for schema docs.

export const ITALIAN_COGNATES = [
  // -zione → -tion
  { it:"azione", en:"action", type:"true" },
  { it:"attenzione", en:"attention", type:"true" },
  { it:"conversazione", en:"conversation", type:"true" },
  { it:"educazione", en:"education", type:"true" },
  { it:"informazione", en:"information", type:"true" },
  { it:"nazione", en:"nation", type:"true" },
  { it:"situazione", en:"situation", type:"true" },
  { it:"soluzione", en:"solution", type:"true" },
  { it:"relazione", en:"relation", type:"true" },

  // -tà → -ty
  { it:"città", en:"city", type:"true" },
  { it:"università", en:"university", type:"true" },
  { it:"società", en:"society", type:"true" },
  { it:"realtà", en:"reality", type:"true" },
  { it:"qualità", en:"quality", type:"true" },
  { it:"quantità", en:"quantity", type:"true" },
  { it:"possibilità", en:"possibility", type:"true" },
  { it:"attività", en:"activity", type:"true" },
  { it:"capacità", en:"capacity", type:"true" },
  { it:"libertà", en:"liberty", type:"true" },

  // -mente adverbs
  { it:"esattamente", en:"exactly", type:"true" },
  { it:"generalmente", en:"generally", type:"true" },
  { it:"finalmente", en:"finally", type:"true" },
  { it:"probabilmente", en:"probably", type:"true" },
  { it:"rapidamente", en:"rapidly", type:"true" },

  // Verbs
  { it:"usare", en:"to use", type:"true" },
  { it:"creare", en:"to create", type:"true" },
  { it:"considerare", en:"to consider", type:"true" },
  { it:"continuare", en:"to continue", type:"true" },
  { it:"decidere", en:"to decide", type:"true" },
  { it:"esistere", en:"to exist", type:"true" },
  { it:"menzionare", en:"to mention", type:"true" },
  { it:"preparare", en:"to prepare", type:"true" },
  { it:"presentare", en:"to present", type:"true" },
  { it:"ricevere", en:"to receive", type:"true" },

  // Nouns
  { it:"ristorante", en:"restaurant", type:"true" },
  { it:"hotel", en:"hotel", type:"true" },
  { it:"taxi", en:"taxi", type:"true" },
  { it:"ospedale", en:"hospital", type:"true" },
  { it:"idea", en:"idea", type:"true" },
  { it:"momento", en:"moment", type:"true" },
  { it:"famiglia", en:"family", type:"true" },
  { it:"animale", en:"animal", type:"true" },
  { it:"dottore", en:"doctor", type:"true" },
  { it:"professore", en:"professor", type:"true" },
  { it:"errore", en:"error", type:"true" },
  { it:"fattore", en:"factor", type:"true" },
  { it:"colore", en:"color", type:"true" },
  { it:"musica", en:"music", type:"true" },

  // Adjectives
  { it:"possibile", en:"possible", type:"true" },
  { it:"impossibile", en:"impossible", type:"true" },
  { it:"terribile", en:"terrible", type:"true" },
  { it:"probabile", en:"probable", type:"true" },
  { it:"notevole", en:"notable", type:"true" },
  { it:"responsabile", en:"responsible", type:"true" },
  { it:"pubblico", en:"public", type:"true" },
  { it:"economico", en:"economic", type:"true" },
  { it:"politico", en:"political", type:"true" },
  { it:"storico", en:"historic", type:"true" },
  { it:"tipico", en:"typical", type:"true" },

  // FALSE FRIENDS
  { it:"libreria", en:"bookstore", type:"false", note:"NOT 'library'. Library = biblioteca." },
  { it:"attualmente", en:"currently", type:"false", note:"NOT 'actually'. Actually = in realtà." },
  { it:"assistere", en:"to attend or to help", type:"partial", note:"Can mean 'to assist' but often means 'to attend'." },
  { it:"sensibile", en:"sensitive", type:"false", note:"NOT 'sensible'. Sensible = ragionevole." },
  { it:"caldo", en:"hot", type:"false", note:"NOT 'cold'. Cold = freddo." },
  { it:"parenti", en:"relatives", type:"false", note:"NOT 'parents'. Parents = genitori." },
  { it:"morbido", en:"soft", type:"false", note:"NOT 'morbid'. Morbid = morboso." },
  { it:"fattoria", en:"farm", type:"false", note:"NOT 'factory'. Factory = fabbrica." },
  { it:"preservativo", en:"condom", type:"false", note:"NOT 'preservative' (food). Preservative = conservante." },
  { it:"annoiato", en:"bored", type:"false", note:"NOT 'annoyed'. Annoyed = infastidito." },
  { it:"educato", en:"polite", type:"false", note:"NOT 'educated'. Educated = istruito." },
  { it:"noioso", en:"boring", type:"false", note:"NOT 'noisy'. Noisy = rumoroso." },
];

export default ITALIAN_COGNATES;
