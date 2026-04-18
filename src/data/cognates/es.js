// Spanish → English cognate corpus
//
// Transparent cognates that English speakers can recognize with minimal
// instruction. These words count as "taught" for PP68 purposes even without
// their own teach card, because the cross-linguistic transfer is reliable.
//
// Schema: { es, en, type, note? }
//   type: 'true'      — same meaning, same root (natural cognate)
//   type: 'partial'   — related but shifted meaning (e.g. embarazada)
//   type: 'false'     — false friend (same spelling, different meaning)
//
// Sources: Wiktionary Latin cross-section, cognate lists for Romance learners,
// top 5000 Spanish word frequency × English cognate filter.

export const SPANISH_COGNATES = [
  // -ción → -tion family (high-frequency, high-reliability)
  { es:"acción", en:"action", type:"true" },
  { es:"atención", en:"attention", type:"true" },
  { es:"conversación", en:"conversation", type:"true" },
  { es:"educación", en:"education", type:"true" },
  { es:"información", en:"information", type:"true" },
  { es:"nación", en:"nation", type:"true" },
  { es:"operación", en:"operation", type:"true" },
  { es:"situación", en:"situation", type:"true" },
  { es:"solución", en:"solution", type:"true" },
  { es:"relación", en:"relation", type:"true" },

  // -dad → -ty family
  { es:"ciudad", en:"city", type:"true" },
  { es:"universidad", en:"university", type:"true" },
  { es:"sociedad", en:"society", type:"true" },
  { es:"realidad", en:"reality", type:"true" },
  { es:"calidad", en:"quality", type:"true" },
  { es:"cantidad", en:"quantity", type:"true" },
  { es:"comunidad", en:"community", type:"true" },
  { es:"posibilidad", en:"possibility", type:"true" },
  { es:"actividad", en:"activity", type:"true" },
  { es:"capacidad", en:"capacity", type:"true" },

  // -mente → -ly adverbs
  { es:"realmente", en:"really", type:"true" },
  { es:"exactamente", en:"exactly", type:"true" },
  { es:"generalmente", en:"generally", type:"true" },
  { es:"finalmente", en:"finally", type:"true" },
  { es:"probablemente", en:"probably", type:"true" },
  { es:"rápidamente", en:"rapidly", type:"true" },

  // -ar / -er / -ir verbs cognate with English verbs
  { es:"usar", en:"to use", type:"true" },
  { es:"crear", en:"to create", type:"true" },
  { es:"pasar", en:"to pass", type:"true" },
  { es:"considerar", en:"to consider", type:"true" },
  { es:"continuar", en:"to continue", type:"true" },
  { es:"decidir", en:"to decide", type:"true" },
  { es:"existir", en:"to exist", type:"true" },
  { es:"mencionar", en:"to mention", type:"true" },
  { es:"preparar", en:"to prepare", type:"true" },
  { es:"presentar", en:"to present", type:"true" },
  { es:"recibir", en:"to receive", type:"true" },

  // -or / -er nouns
  { es:"actor", en:"actor", type:"true" },
  { es:"doctor", en:"doctor", type:"true" },
  { es:"profesor", en:"professor", type:"true" },
  { es:"error", en:"error", type:"true" },
  { es:"factor", en:"factor", type:"true" },
  { es:"color", en:"color", type:"true" },
  { es:"computador", en:"computer", type:"true" },

  // -ible / -able adjectives
  { es:"posible", en:"possible", type:"true" },
  { es:"imposible", en:"impossible", type:"true" },
  { es:"terrible", en:"terrible", type:"true" },
  { es:"probable", en:"probable", type:"true" },
  { es:"notable", en:"notable", type:"true" },
  { es:"responsable", en:"responsible", type:"true" },

  // -ico / -ical
  { es:"público", en:"public", type:"true" },
  { es:"música", en:"music", type:"true" },
  { es:"económico", en:"economic", type:"true" },
  { es:"político", en:"political", type:"true" },
  { es:"histórico", en:"historic", type:"true" },
  { es:"típico", en:"typical", type:"true" },

  // Everyday Latinate nouns
  { es:"restaurante", en:"restaurant", type:"true" },
  { es:"hotel", en:"hotel", type:"true" },
  { es:"taxi", en:"taxi", type:"true" },
  { es:"hospital", en:"hospital", type:"true" },
  { es:"idea", en:"idea", type:"true" },
  { es:"momento", en:"moment", type:"true" },
  { es:"familia", en:"family", type:"true" },
  { es:"animal", en:"animal", type:"true" },
  { es:"fruta", en:"fruit", type:"true" },

  // FALSE FRIENDS (critical to teach explicitly)
  { es:"embarazada", en:"pregnant", type:"false", note:"NOT 'embarrassed'. Embarrassed = avergonzado/a." },
  { es:"éxito", en:"success", type:"false", note:"NOT 'exit'. Exit = salida." },
  { es:"carpeta", en:"folder", type:"false", note:"NOT 'carpet'. Carpet = alfombra." },
  { es:"ropa", en:"clothes", type:"false", note:"NOT 'rope'. Rope = cuerda." },
  { es:"sopa", en:"soup", type:"false", note:"NOT 'soap'. Soap = jabón." },
  { es:"librería", en:"bookstore", type:"false", note:"NOT 'library'. Library = biblioteca." },
  { es:"fábrica", en:"factory", type:"false", note:"NOT 'fabric'. Fabric = tela." },
  { es:"actualmente", en:"currently", type:"false", note:"NOT 'actually'. Actually = realmente." },
  { es:"asistir", en:"to attend", type:"false", note:"NOT 'to assist'. Assist = ayudar." },
  { es:"sensible", en:"sensitive", type:"false", note:"NOT 'sensible'. Sensible = sensato/a." },
  { es:"constipado", en:"having a cold", type:"false", note:"NOT 'constipated'. Constipated = estreñido/a." },
  { es:"recordar", en:"to remember", type:"false", note:"NOT 'to record'. Record = grabar." },
  { es:"molestar", en:"to bother", type:"false", note:"NOT 'to molest'. Molest = abusar." },
  { es:"introducir", en:"to insert", type:"false", note:"NOT 'to introduce'. Introduce (a person) = presentar." },
  { es:"pariente", en:"relative", type:"false", note:"NOT 'parent'. Parent = padre/madre." },

  // Partial cognates (drift)
  { es:"asistir", en:"to attend", type:"partial" },
  { es:"suceder", en:"to happen", type:"partial", note:"Literal cognate 'succeed' but primary meaning is 'to happen.'" },
];

export default SPANISH_COGNATES;
