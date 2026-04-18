// French → English cognate corpus
// See src/data/cognates/es.js for schema docs.

export const FRENCH_COGNATES = [
  // -tion → -tion (direct)
  { fr:"action", en:"action", type:"true" },
  { fr:"attention", en:"attention", type:"true" },
  { fr:"conversation", en:"conversation", type:"true" },
  { fr:"éducation", en:"education", type:"true" },
  { fr:"information", en:"information", type:"true" },
  { fr:"nation", en:"nation", type:"true" },
  { fr:"situation", en:"situation", type:"true" },
  { fr:"solution", en:"solution", type:"true" },
  { fr:"relation", en:"relation", type:"true" },

  // -té → -ty
  { fr:"université", en:"university", type:"true" },
  { fr:"société", en:"society", type:"true" },
  { fr:"réalité", en:"reality", type:"true" },
  { fr:"qualité", en:"quality", type:"true" },
  { fr:"quantité", en:"quantity", type:"true" },
  { fr:"possibilité", en:"possibility", type:"true" },
  { fr:"activité", en:"activity", type:"true" },
  { fr:"capacité", en:"capacity", type:"true" },
  { fr:"liberté", en:"liberty", type:"true" },

  // -ment adverbs
  { fr:"exactement", en:"exactly", type:"true" },
  { fr:"généralement", en:"generally", type:"true" },
  { fr:"finalement", en:"finally", type:"true" },
  { fr:"probablement", en:"probably", type:"true" },
  { fr:"rapidement", en:"rapidly", type:"true" },

  // Verbs
  { fr:"utiliser", en:"to use", type:"true" },
  { fr:"créer", en:"to create", type:"true" },
  { fr:"considérer", en:"to consider", type:"true" },
  { fr:"continuer", en:"to continue", type:"true" },
  { fr:"décider", en:"to decide", type:"true" },
  { fr:"exister", en:"to exist", type:"true" },
  { fr:"mentionner", en:"to mention", type:"true" },
  { fr:"préparer", en:"to prepare", type:"true" },
  { fr:"présenter", en:"to present", type:"true" },
  { fr:"recevoir", en:"to receive", type:"true" },

  // Nouns
  { fr:"restaurant", en:"restaurant", type:"true" },
  { fr:"hôtel", en:"hotel", type:"true" },
  { fr:"taxi", en:"taxi", type:"true" },
  { fr:"hôpital", en:"hospital", type:"true" },
  { fr:"idée", en:"idea", type:"true" },
  { fr:"moment", en:"moment", type:"true" },
  { fr:"famille", en:"family", type:"true" },
  { fr:"animal", en:"animal", type:"true" },
  { fr:"docteur", en:"doctor", type:"true" },
  { fr:"professeur", en:"professor", type:"true" },
  { fr:"erreur", en:"error", type:"true" },
  { fr:"facteur", en:"factor", type:"true" },
  { fr:"couleur", en:"color", type:"true" },
  { fr:"musique", en:"music", type:"true" },

  // Adjectives
  { fr:"possible", en:"possible", type:"true" },
  { fr:"impossible", en:"impossible", type:"true" },
  { fr:"terrible", en:"terrible", type:"true" },
  { fr:"probable", en:"probable", type:"true" },
  { fr:"notable", en:"notable", type:"true" },
  { fr:"responsable", en:"responsible", type:"true" },
  { fr:"public", en:"public", type:"true" },
  { fr:"économique", en:"economic", type:"true" },
  { fr:"politique", en:"political", type:"true" },
  { fr:"historique", en:"historic", type:"true" },
  { fr:"typique", en:"typical", type:"true" },

  // FALSE FRIENDS
  { fr:"librairie", en:"bookstore", type:"false", note:"NOT 'library'. Library = bibliothèque." },
  { fr:"actuellement", en:"currently", type:"false", note:"NOT 'actually'. Actually = en fait." },
  { fr:"assister à", en:"to attend", type:"false", note:"NOT 'to assist'. Assist = aider." },
  { fr:"sensible", en:"sensitive", type:"false", note:"NOT 'sensible'. Sensible = raisonnable." },
  { fr:"pain", en:"bread", type:"false", note:"NOT 'pain'. Pain = douleur." },
  { fr:"monnaie", en:"change (coins)", type:"false", note:"NOT 'money' in general. Money = argent." },
  { fr:"journée", en:"day (duration)", type:"false", note:"NOT 'journey'. Journey = voyage." },
  { fr:"travail", en:"work", type:"false", note:"NOT 'travel'. Travel = voyage." },
  { fr:"rester", en:"to stay", type:"false", note:"NOT 'to rest'. Rest = se reposer." },
  { fr:"coin", en:"corner", type:"false", note:"NOT 'coin'. Coin = pièce." },
  { fr:"raisin", en:"grape", type:"false", note:"NOT 'raisin'. Raisin = raisin sec." },
  { fr:"blesser", en:"to injure", type:"false", note:"NOT 'to bless'. Bless = bénir." },
  { fr:"attendre", en:"to wait", type:"false", note:"NOT 'to attend'. Attend = assister à." },
  { fr:"demander", en:"to ask", type:"false", note:"NOT 'to demand'. Demand = exiger." },
];

export default FRENCH_COGNATES;
