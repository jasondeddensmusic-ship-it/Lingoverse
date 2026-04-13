#!/usr/bin/env node
/**
 * Enrich Dutch V2 teach cards with COMPOUND breakdowns.
 */
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'src', 'data', 'dutch-v2');
const files = fs.readdirSync(dir).filter(f => /^unit-\d+\.js$/.test(f)).sort();

const COMPOUNDS = {
  'goedemorgen': 'goede (good) + morgen (morning)',
  'goedemiddag': 'goede (good) + middag (midday)',
  'goedenavond': 'goede (good) + avond (evening)',
  'goedenacht': 'goede (good) + nacht (night)',
  'alsjeblieft': 'als je belieft (if you please)',
  'alstublieft': 'als het u belieft (if it pleases you)',
  'dankjewel': 'dank je wel (thank you well)',
  'dankuwel': 'dank u wel (thank you well)',
  'huiswerk': 'huis (house) + werk (work)',
  'hoofdstad': 'hoofd (head/main) + stad (city)',
  'vliegtuig': 'vlieg (fly) + tuig (equipment)',
  'ziekenhuis': 'zieken (sick) + huis (house)',
  'verjaardag': 'ver (passing) + jaar (year) + dag (day)',
  'werkgever': 'werk (work) + gever (giver)',
  'werknemer': 'werk (work) + nemer (taker)',
  'schooljaar': 'school + jaar (year)',
  'speelgoed': 'speel (play) + goed (goods)',
  'ontbijt': 'ont (un-) + bijt (bite) = breaking fast',
  'handschoen': 'hand + schoen (shoe) = hand-shoe = glove',
  'schildpad': 'schild (shield) + pad (toad) = turtle',
  'stofzuiger': 'stof (dust) + zuiger (sucker) = vacuum',
  'koelkast': 'koel (cool) + kast (cabinet)',
  'slaapkamer': 'slaap (sleep) + kamer (room)',
  'badkamer': 'bad (bath) + kamer (room)',
  'woonkamer': 'woon (live) + kamer (room)',
  'tandenborstel': 'tanden (teeth) + borstel (brush)',
  'zwembad': 'zwem (swim) + bad (bath)',
  'voetbal': 'voet (foot) + bal (ball)',
  'woordenboek': 'woorden (words) + boek (book)',
  'fiets': null,
  'trein': null,
  'vliegveld': 'vlieg (fly) + veld (field)',
  'fietsenrek': 'fietsen (bikes) + rek (rack)',
  'rijbewijs': 'rij (drive) + bewijs (proof)',
  'wegenwacht': 'wegen (roads) + wacht (guard)',
  'verkeersregels': 'verkeers (traffic) + regels (rules)',
  'snelweg': 'snel (fast) + weg (road)',
  'kruispunt': 'kruis (cross) + punt (point)',
  'rotonde': null,
  'bushalte': 'bus + halte (stop)',
  'tramhalte': 'tram + halte (stop)',
  'overstappen': 'over (over) + stappen (step)',
  'instappen': 'in + stappen (step)',
  'uitstappen': 'uit (out) + stappen (step)',
  'fietspad': 'fiets (bike) + pad (path)',
  'voetpad': 'voet (foot) + pad (path)',
  'rijstrook': 'rij (drive) + strook (lane)',
  'stadsleven': 'stad (city) + leven (life)',
  'platteland': 'plat (flat) + land (land)',
  'boerderij': null,
  'huisdier': 'huis (house) + dier (animal)',
  'buurman': 'buur (neighbor) + man (man)',
  'buurvrouw': 'buur (neighbor) + vrouw (woman)',
  'buurtwinkel': 'buurt (neighborhood) + winkel (shop)',
  'huisarts': 'huis (house) + arts (doctor)',
  'tandarts': 'tand (tooth) + arts (doctor)',
  'oogarts': 'oog (eye) + arts (doctor)',
  'ziekenhuisopname': 'ziekenhuis (hospital) + opname (admission)',
  'bloeddruk': 'bloed (blood) + druk (pressure)',
  'hoofdpijn': 'hoofd (head) + pijn (pain)',
  'buikpijn': 'buik (stomach) + pijn (pain)',
  'rugpijn': 'rug (back) + pijn (pain)',
  'kiespijn': 'kies (molar) + pijn (pain)',
  'keelpijn': 'keel (throat) + pijn (pain)',
  'zonnebrand': 'zonne (sun) + brand (burn)',
  'zonnebril': 'zonne (sun) + bril (glasses)',
  'zonneschijn': 'zonne (sun) + schijn (shine)',
  'regenboog': 'regen (rain) + boog (bow)',
  'regenjack': 'regen (rain) + jack (jacket)',
  'paraplu': null,
  'weerbericht': 'weer (weather) + bericht (report)',
  'weersverwachting': 'weers (weather) + verwachting (expectation)',
  'sneeuwpop': 'sneeuw (snow) + pop (doll)',
  'seizoen': null,
  'eindexamen': 'eind (final) + examen (exam)',
  'huiswerk': 'huis (house) + werk (work)',
  'lesrooster': 'les (lesson) + rooster (schedule)',
  'schoolvakantie': 'school + vakantie (vacation)',
  'basisschool': 'basis (basic) + school',
  'middelbare': null,
  'universiteit': null,
  'hogeschool': 'hoge (high) + school',
  'leerling': null,
  'leraar': null,
  'werkplek': 'werk (work) + plek (place)',
  'arbeidscontract': 'arbeid (labor) + contract',
  'werkervaring': 'werk (work) + ervaring (experience)',
  'sollicitatiebrief': 'sollicitatie (application) + brief (letter)',
  'sollicitatiegesprek': 'sollicitatie (application) + gesprek (conversation)',
  'thuiswerken': 'thuis (home) + werken (work)',
  'overwerk': 'over + werk (work)',
  'loonstrookje': 'loon (wage) + strookje (slip)',
  'vakbond': 'vak (profession) + bond (union)',
  'zorgverzekering': 'zorg (care) + verzekering (insurance)',
  'belastingaangifte': 'belasting (tax) + aangifte (declaration)',
  'woensdag': 'Wodan (Odin) + dag (day)',
  'donderdag': 'Donar (Thor) + dag (day)',
  'maandag': 'maan (moon) + dag (day)',
  'dinsdag': 'Tiu (Norse god) + dag (day)',
  'vrijdag': 'Freya (Norse goddess) + dag (day)',
  'zaterdag': 'Saturn + dag (day)',
  'zondag': 'zon (sun) + dag (day)',
  'middag': 'mid (middle) + dag (day)',
  'middernacht': 'midden (middle) + nacht (night)',
  'namiddag': 'na (after) + middag (midday)',
  'voormiddag': 'voor (before) + middag (midday)',
  'weekend': null,
  'letterlijk': null,
  'gemeentehuis': 'gemeente (municipality) + huis (house)',
  'stadhuis': 'stad (city) + huis (house)',
  'postkantoor': 'post + kantoor (office)',
  'politiebureau': 'politie (police) + bureau (office)',
  'brandweer': 'brand (fire) + weer (defense)',
  'brandweerkazerne': 'brandweer (fire brigade) + kazerne (barracks)',
  'waterval': 'water + val (fall)',
  'waterkraan': 'water + kraan (tap/crane)',
  'drinkwater': 'drink + water',
  'grondwater': 'grond (ground) + water',
  'afvalwater': 'afval (waste) + water',
  'rioolwater': 'riool (sewer) + water',
  'wasmachine': 'was (wash) + machine',
  'vaatwasser': 'vaat (dish) + wasser (washer)',
  'magnetron': null,
  'strijkijzer': 'strijk (iron) + ijzer (iron metal)',
  'broodrooster': 'brood (bread) + rooster (roaster)',
  'koffiezetapparaat': 'koffie (coffee) + zet (set) + apparaat (device)',
  'waterkoker': 'water + koker (cooker/boiler)',
  'haardroger': 'haar (hair) + droger (dryer)',
  'scheerapparaat': 'scheer (shave) + apparaat (device)',
  'boodschappen': null,
  'winkelwagen': 'winkel (shop) + wagen (cart)',
  'klantenservice': 'klanten (customers) + service',
  'garantiebewijs': 'garantie (guarantee) + bewijs (proof)',
  'volkslied': 'volk (folk) + lied (song)',
  'volksfeest': 'volk (folk) + feest (party)',
  'straatfeest': 'straat (street) + feest (party)',
  'verjaardagsfeest': 'verjaardag (birthday) + feest (party)',
  'verjaardagstaart': 'verjaardag (birthday) + taart (cake)',
  'bruidstaart': 'bruid (bride) + taart (cake)',
  'kerstboom': 'kerst (Christmas) + boom (tree)',
  'kerstmarkt': 'kerst (Christmas) + markt (market)',
  'kerstcadeau': 'kerst (Christmas) + cadeau (gift)',
  'nieuwjaar': 'nieuw (new) + jaar (year)',
  'nieuwjaarsdag': 'Nieuwjaar (New Year) + dag (day)',
  'vuurwerk': 'vuur (fire) + werk (work)',
  'geboorte': null,
  'moederdag': 'moeder (mother) + dag (day)',
  'vaderdag': 'vader (father) + dag (day)',
};

let totalEnriched = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let modified = content;
  let count = 0;

  modified = modified.replace(/(\{type:"teach",trg:"([^"]*)",src:"([^"]*)",pos:"[^"]*"[^}]*funFact:"([^"]*)")/g,
    (match, full, trg, src, existingFunFact) => {
      const bare = trg.replace(/^(de|het|een)\s+/, '').toLowerCase();
      // Check dictionary (case-insensitive match)
      let breakdown = null;
      for (const [key, val] of Object.entries(COMPOUNDS)) {
        if (key.toLowerCase() === bare && val !== null) {
          breakdown = val;
          break;
        }
      }
      if (!breakdown) return match;
      if (existingFunFact.includes('COMPOUND')) return match;

      const newFunFact = `COMPOUND: ${breakdown}. ${existingFunFact}`;
      const escaped = newFunFact.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      count++;
      totalEnriched++;

      return full.replace(`funFact:"${existingFunFact}"`, `funFact:"${escaped}"`);
    });

  if (count > 0) {
    fs.writeFileSync(filePath, modified);
    console.log(`${file}: ${count} compound breakdowns added`);
  }
}

console.log(`\nTotal: ${totalEnriched} compound breakdowns added to Dutch v2`);
