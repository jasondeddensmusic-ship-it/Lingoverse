// Portuguese (Brazilian) → English cognate corpus
// See src/data/cognates/es.js for schema docs.

export const PORTUGUESE_COGNATES = [
  // -ção → -tion (note the ~)
  { pt:"ação", en:"action", type:"true" },
  { pt:"atenção", en:"attention", type:"true" },
  { pt:"conversação", en:"conversation", type:"true" },
  { pt:"educação", en:"education", type:"true" },
  { pt:"informação", en:"information", type:"true" },
  { pt:"nação", en:"nation", type:"true" },
  { pt:"situação", en:"situation", type:"true" },
  { pt:"solução", en:"solution", type:"true" },
  { pt:"relação", en:"relation", type:"true" },

  // -dade → -ty
  { pt:"cidade", en:"city", type:"true" },
  { pt:"universidade", en:"university", type:"true" },
  { pt:"sociedade", en:"society", type:"true" },
  { pt:"realidade", en:"reality", type:"true" },
  { pt:"qualidade", en:"quality", type:"true" },
  { pt:"quantidade", en:"quantity", type:"true" },
  { pt:"possibilidade", en:"possibility", type:"true" },
  { pt:"atividade", en:"activity", type:"true" },
  { pt:"capacidade", en:"capacity", type:"true" },
  { pt:"liberdade", en:"liberty", type:"true" },

  // -mente adverbs
  { pt:"exatamente", en:"exactly", type:"true" },
  { pt:"geralmente", en:"generally", type:"true" },
  { pt:"finalmente", en:"finally", type:"true" },
  { pt:"provavelmente", en:"probably", type:"true" },
  { pt:"rapidamente", en:"rapidly", type:"true" },

  // Verbs
  { pt:"usar", en:"to use", type:"true" },
  { pt:"criar", en:"to create", type:"true" },
  { pt:"considerar", en:"to consider", type:"true" },
  { pt:"continuar", en:"to continue", type:"true" },
  { pt:"decidir", en:"to decide", type:"true" },
  { pt:"existir", en:"to exist", type:"true" },
  { pt:"mencionar", en:"to mention", type:"true" },
  { pt:"preparar", en:"to prepare", type:"true" },
  { pt:"apresentar", en:"to present", type:"true" },
  { pt:"receber", en:"to receive", type:"true" },

  // Nouns
  { pt:"restaurante", en:"restaurant", type:"true" },
  { pt:"hotel", en:"hotel", type:"true" },
  { pt:"táxi", en:"taxi", type:"true" },
  { pt:"hospital", en:"hospital", type:"true" },
  { pt:"ideia", en:"idea", type:"true" },
  { pt:"momento", en:"moment", type:"true" },
  { pt:"família", en:"family", type:"true" },
  { pt:"animal", en:"animal", type:"true" },
  { pt:"doutor", en:"doctor", type:"true" },
  { pt:"professor", en:"professor", type:"true" },
  { pt:"erro", en:"error", type:"true" },
  { pt:"fator", en:"factor", type:"true" },
  { pt:"cor", en:"color", type:"true" },
  { pt:"música", en:"music", type:"true" },

  // Adjectives
  { pt:"possível", en:"possible", type:"true" },
  { pt:"impossível", en:"impossible", type:"true" },
  { pt:"terrível", en:"terrible", type:"true" },
  { pt:"provável", en:"probable", type:"true" },
  { pt:"notável", en:"notable", type:"true" },
  { pt:"responsável", en:"responsible", type:"true" },
  { pt:"público", en:"public", type:"true" },
  { pt:"econômico", en:"economic", type:"true" },
  { pt:"político", en:"political", type:"true" },
  { pt:"histórico", en:"historic", type:"true" },
  { pt:"típico", en:"typical", type:"true" },

  // FALSE FRIENDS (essential for EN learners)
  { pt:"puxar", en:"to pull", type:"false", note:"NOT 'to push'. Push = empurrar. Classic false friend — signs on doors!" },
  { pt:"sensível", en:"sensitive", type:"false", note:"NOT 'sensible'. Sensible = sensato." },
  { pt:"parentes", en:"relatives", type:"false", note:"NOT 'parents'. Parents = pais." },
  { pt:"livraria", en:"bookstore", type:"false", note:"NOT 'library'. Library = biblioteca." },
  { pt:"assistir", en:"to watch", type:"false", note:"NOT 'to assist'. Assist = ajudar." },
  { pt:"atualmente", en:"currently", type:"false", note:"NOT 'actually'. Actually = na verdade." },
  { pt:"pretender", en:"to intend", type:"false", note:"NOT 'to pretend'. Pretend = fingir." },
  { pt:"esquisito", en:"strange", type:"false", note:"NOT 'exquisite'. Exquisite = requintado." },
  { pt:"colar", en:"necklace / to glue", type:"false", note:"NOT 'collar'. Collar (shirt) = gola." },
  { pt:"data", en:"date (calendar)", type:"partial", note:"Same spelling but primary meaning is calendar date, not information." },
  { pt:"lanche", en:"snack", type:"false", note:"NOT 'lunch'. Lunch = almoço." },
  { pt:"realizar", en:"to carry out, accomplish", type:"partial", note:"Can mean 'realize' in some contexts but primary meaning is 'to carry out'." },
];

export default PORTUGUESE_COGNATES;
