// German → English cognate corpus
//
// Narrower than Romance cognate sets because most direct English-German
// cognates come from shared Germanic roots rather than Latinate borrowings.
// Still valuable: English learners can recognize these quickly.
//
// See src/data/cognates/es.js for schema docs.

export const GERMAN_COGNATES = [
  // Germanic family (same root words)
  { de:"Haus", en:"house", type:"true" },
  { de:"Buch", en:"book", type:"true" },
  { de:"Hand", en:"hand", type:"true" },
  { de:"Apfel", en:"apple", type:"true" },
  { de:"Sommer", en:"summer", type:"true" },
  { de:"Winter", en:"winter", type:"true" },
  { de:"Freund", en:"friend", type:"true" },
  { de:"Wasser", en:"water", type:"true" },
  { de:"Brot", en:"bread", type:"true" },
  { de:"Milch", en:"milk", type:"true" },
  { de:"Nacht", en:"night", type:"true" },
  { de:"Tag", en:"day", type:"true" },
  { de:"Mann", en:"man", type:"true" },
  { de:"Frau", en:"woman (cognate with 'frau' historical)", type:"true" },
  { de:"Kind", en:"child (cognate with 'kin' / 'kind' family)", type:"true" },
  { de:"Vater", en:"father", type:"true" },
  { de:"Mutter", en:"mother", type:"true" },
  { de:"Bruder", en:"brother", type:"true" },
  { de:"Schwester", en:"sister", type:"true" },

  // Latinate borrowings (later)
  { de:"Information", en:"information", type:"true" },
  { de:"Situation", en:"situation", type:"true" },
  { de:"Nation", en:"nation", type:"true" },
  { de:"Relation", en:"relation", type:"true" },
  { de:"Restaurant", en:"restaurant", type:"true" },
  { de:"Hotel", en:"hotel", type:"true" },
  { de:"Taxi", en:"taxi", type:"true" },
  { de:"Hospital", en:"hospital", type:"true" },
  { de:"Idee", en:"idea", type:"true" },
  { de:"Moment", en:"moment", type:"true" },
  { de:"Familie", en:"family", type:"true" },
  { de:"Tier", en:"animal (cognate with 'deer' historical)", type:"true" },
  { de:"Doktor", en:"doctor", type:"true" },
  { de:"Professor", en:"professor", type:"true" },
  { de:"Musik", en:"music", type:"true" },

  // Adjectives
  { de:"gut", en:"good", type:"true" },
  { de:"neu", en:"new", type:"true" },
  { de:"alt", en:"old", type:"true" },
  { de:"jung", en:"young", type:"true" },
  { de:"lang", en:"long", type:"true" },
  { de:"warm", en:"warm", type:"true" },
  { de:"kalt", en:"cold", type:"true" },
  { de:"hart", en:"hard", type:"true" },
  { de:"weich", en:"soft (cognate with 'weak' historical)", type:"true" },

  // Verbs (common Germanic)
  { de:"kommen", en:"to come", type:"true" },
  { de:"gehen", en:"to go", type:"true" },
  { de:"sehen", en:"to see", type:"true" },
  { de:"haben", en:"to have", type:"true" },
  { de:"sein", en:"to be (cognate with 'is')", type:"true" },
  { de:"machen", en:"to make", type:"true" },
  { de:"singen", en:"to sing", type:"true" },
  { de:"trinken", en:"to drink", type:"true" },
  { de:"finden", en:"to find", type:"true" },
  { de:"bringen", en:"to bring", type:"true" },

  // FALSE FRIENDS (critical — Germanic+Latin both create traps)
  { de:"Gift", en:"poison", type:"false", note:"NOT 'gift'. Gift (present) = Geschenk." },
  { de:"bekommen", en:"to receive", type:"false", note:"NOT 'to become'. Become = werden." },
  { de:"Rat", en:"advice", type:"false", note:"NOT 'rat' (rodent). Rat = Ratte." },
  { de:"also", en:"so / therefore", type:"false", note:"NOT English 'also'. Also (too) = auch." },
  { de:"fast", en:"almost", type:"false", note:"NOT 'fast'. Fast = schnell." },
  { de:"sensibel", en:"sensitive", type:"false", note:"NOT 'sensible'. Sensible = vernünftig." },
  { de:"aktuell", en:"current / up-to-date", type:"false", note:"NOT 'actual'. Actual = tatsächlich." },
  { de:"Chef", en:"boss", type:"false", note:"NOT 'chef'. Chef = Koch." },
  { de:"eventuell", en:"possibly", type:"false", note:"NOT 'eventually'. Eventually = letztendlich." },
  { de:"bald", en:"soon", type:"false", note:"NOT 'bald'. Bald = kahl." },
  { de:"See", en:"lake (m) / sea (f)", type:"partial", note:"Homograph: der See = lake, die See = sea. Gender disambiguates." },
  { de:"Hose", en:"pants / trousers", type:"false", note:"NOT 'hose'. Hose (water) = Schlauch." },
  { de:"Rente", en:"pension", type:"false", note:"NOT 'rent'. Rent = Miete." },
  { de:"Brand", en:"fire (conflagration)", type:"false", note:"NOT 'brand'. Brand = Marke." },
  { de:"Art", en:"type / species", type:"false", note:"NOT 'art'. Art = Kunst." },
];

export default GERMAN_COGNATES;
