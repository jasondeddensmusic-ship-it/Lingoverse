#!/usr/bin/env node
/**
 * PP63 / PP68 — Example-vocab integrity audit.
 *
 * For every teach card's `example` field, check that every content word
 * (length >= 3, not in function-word list, not punctuation) traces to:
 *  (a) the card's own `trg`
 *  (b) an earlier teach card's `trg` in the same or a prior unit file
 *  (c) a function word on the language's whitelist
 *  (d) a flagged transparent cognate
 *
 * Untraceable words are reported per unit. Output: markdown + count.
 *
 * Usage:
 *   node scripts/pp63_audit.cjs <lang-dir>                 # summary + violations to stdout
 *   node scripts/pp63_audit.cjs <lang-dir> --include-batch
 *   node scripts/pp63_audit.cjs <lang-dir> --write docs/audits/pp63_<lang>.md
 *   node scripts/pp63_audit.cjs --all                      # run on all 10 languages
 *
 * Exit codes:
 *   0 = zero violations (PASS)
 *   1 = violations present
 *   2 = invalid invocation
 */

const fs = require('fs');
const path = require('path');

const LANGS = [
  'dutch-v2','korean-v2','german-v2','french-v2','spanish-v2',
  'italian-v2','japanese-v2','chinese-v2','portuguese-v2','russian-v2'
];

const args = process.argv.slice(2);
const includeBatch = args.includes('--include-batch');
const doAll = args.includes('--all');
const writeIdx = args.indexOf('--write');
const writePath = writeIdx >= 0 ? args[writeIdx + 1] : null;
const langArg = args.find(a => !a.startsWith('--') && a !== writePath);

// ── Function-word lists. Minimal default; can be extended per-language. ──
const FUNCTION_WORDS = {
  'de': new Set([
    // ── Articles (all cases) ──
    'der','die','das','den','dem','des','ein','eine','einen','einem','einer','eines',
    // ── Conjunctions ──
    'und','oder','aber','wenn','dass','weil','denn','obwohl','damit','bevor',
    'nachdem','sobald','solange','falls','ob','als','wie','seit','bis',
    'entweder','weder','sowohl','sondern','zwar',
    // ── Personal pronouns (all cases) ──
    'ich','du','er','sie','es','wir','ihr','Sie',
    'mir','mich','dir','dich','uns','euch','ihnen','ihm','ihn','sich',
    // ── Indefinite pronouns / quantifiers ──
    'man','jemand','niemand','etwas','nichts','alles','alle','jeden',
    'jeder','jede','jedes','beides',
    // ── Possessives (all gender/case forms) ──
    'mein','meine','meinen','meiner','meinem','meines',
    'dein','deine','deinen','deiner','deinem','deines',
    'sein','seine','seinen','seiner','seinem','seines',
    'ihr','ihre','ihren','ihrer','ihrem','ihres',
    'unser','unsere','unseren','unserer','unserem','unseres','unserer',
    'euer','eure','euren','eurer','eurem','eures',
    'Ihr','Ihre','Ihren','Ihrer','Ihrem','Ihres',
    // ── Demonstratives (all gender/case forms) ──
    'dieser','diese','dieses','diesen','diesem',
    'jener','jene','jenes','jenen','jenem',
    // ── Question words (all forms) ──
    'wer','was','wo','wann','wie','warum','weshalb','womit','wozu','wohin',
    'woher','welcher','welche','welches','welchen','welchem','wem','wen','wessen',
    // ── Prepositions ──
    'an','auf','bei','für','in','mit','nach','ohne','seit','um','von','vor',
    'aus','über','unter','durch','gegen','hinter','neben','zwischen','zu',
    'vom','zum','zur','im','am','beim','ins','ans','ums',
    'ab','gegenüber','entlang','laut','trotz','wegen','außer',
    // ── Common adverbs (discourse/function level) ──
    'nicht','kein','keine','keinen','keinem','keiner','keines',
    'auch','noch','schon','mehr','nur','so','sehr','gut','schlecht',
    'viel','wenig','hier','dort','jetzt','dann','also','doch','mal',
    'ja','nein','nun','eben','halt','wohl','zwar','bereits',
    'gern','gerne','bitte','danke','leider','natürlich','vielleicht',
    'immer','nie','oft','selten','manchmal','wieder','weiter','zusammen',
    'fast','ganz','gar','kaum','sogar','etwa','ungefähr','mindestens',
    'daher','darum','deshalb','trotzdem','dennoch','außerdem','übrigens',
    'heute','morgen','gestern','früher','später','zuerst','danach',
    'endlich','plötzlich','eigentlich','wirklich','nämlich','jedoch',
    'links','rechts','oben','unten','vorne','hinten','innen','außen',
    'hin','her','da','weg','los','raus','rein','hoch','runter',
    'irgendwie','irgendwann','irgendwo','irgendwas',
    'sofort','gleich','vorhin','nachher','zunächst','schließlich',
    'meistens','häufig','regelmäßig','gerade','direkt','einfach',
    'schnell','langsam','wirklich','richtig','falsch','fertig','bereit',
    'leider','hoffentlich','sicher','bestimmt','wahrscheinlich',
    // ── Copula: sein (all forms) ──
    'ist','sind','war','waren','warst','wart','bin','bist','seid','sei','wäre','wären',
    'wärst','wärt','gewesen',
    // ── Copula: haben (all forms) ──
    'hat','hast','hatte','habe','haben','habt','hattest','hatten','hättest','hätten',
    'hättet','gehabt',
    // ── werden (auxiliary + future, all forms) ──
    'wird','werde','wirst','werden','werdet','wurde','wurden','würde','würden',
    'würdest','würdet','worden','geworden',
    // ── können (all forms) ──
    'kann','kannst','können','könnt','konnte','konntest','konnten','konntet',
    'könnten','könnte','könntest','gekonnt',
    // ── müssen (all forms) ──
    'muss','musst','müssen','müsst','musste','musstest','mussten','musstet',
    'müsste','müsstest','müssten','müsstet','gemusst',
    // ── sollen (all forms) ──
    'soll','sollst','sollen','sollt','sollte','solltest','sollten','solltet',
    'gesollt',
    // ── wollen (all forms) ──
    'will','willst','wollen','wollt','wollte','wolltest','wollten','wolltet',
    'gewollt','willst',
    // ── dürfen (all forms) ──
    'darf','darfst','dürfen','dürft','durfte','durftest','durften','durftet',
    'dürfte','dürftest','dürften','dürftet','gedurft',
    // ── mögen / möchten (all forms) ──
    'mag','magst','mögen','mögt','mochte','mochtest','mochten','mochtet',
    'möchte','möchtest','möchten','möchtet','gemocht',
    // ── machen (all forms) ──
    'macht','mache','machst','machen','machte','machtest','machten','machtet',
    'gemacht',
    // ── gehen (all forms) ──
    'geht','gehe','gehst','gehen','ging','gingst','gingen','gingt','gegangen',
    // ── kommen (all forms) ──
    'kommt','komme','kommst','kommen','kam','kamst','kamen','kamt','gekommen',
    // ── sehen (all forms) ──
    'sieht','sehe','siehst','sehen','seht','sah','sahst','sahen','saht',
    'gesehen',
    // ── geben (all forms) ──
    'gibt','gebe','gibst','geben','gebt','gab','gabst','gaben','gabt',
    'gegeben',
    // ── sagen (all forms) ──
    'sagt','sage','sagst','sagen','sagte','sagtest','sagten','sagtet','gesagt',
    // ── sprechen (all forms) ──
    'spricht','spreche','sprichst','sprechen','sprecht','sprach','sprachst',
    'sprachen','spracht','gesprochen',
    // ── nehmen (all forms) ──
    'nimmt','nehme','nimmst','nehmen','nehmt','nahm','nahmst','nahmen','nahmt',
    'genommen','nimm',
    // ── finden (all forms) ──
    'findet','finde','findest','finden','fand','fandst','fanden','fandet',
    'gefunden',
    // ── denken (all forms) ──
    'denkt','denke','denkst','denken','dachte','dachtest','dachten','dachtet',
    'gedacht',
    // ── bringen (all forms) ──
    'bringt','bringe','bringst','bringen','brachte','brachtest','brachten',
    'brachtet','gebracht',
    // ── fahren (all forms) ──
    'fährt','fahre','fährst','fahren','fahrt','fuhr','fuhrst','fuhren','fuhrt',
    'gefahren',
    // ── laufen (all forms) ──
    'läuft','laufe','läufst','laufen','lauft','lief','liefst','liefen','lieft',
    'gelaufen',
    // ── liegen (all forms) ──
    'liegt','liege','liegst','liegen','lag','lagst','lagen','lagt','gelegen',
    // ── stehen (all forms) ──
    'steht','stehe','stehst','stehen','stand','standst','standen','standet',
    'gestanden',
    // ── sitzen (all forms) ──
    'sitzt','sitze','sitzen','saß','saßest','saßen','saßt','gesessen',
    // ── wissen (all forms) ──
    'weiß','wissen','weißt','wisst','wusste','wusstest','wussten','wusstet',
    'wüsste','gewusst',
    // ── arbeiten (all forms) ──
    'arbeitet','arbeite','arbeitest','arbeiten','arbeitete','arbeiteten',
    'gearbeitet',
    // ── leben (all forms) ──
    'lebt','lebe','lebst','leben','lebte','lebtest','lebten','lebtet','gelebt',
    // ── wohnen (all forms) ──
    'wohnt','wohne','wohnst','wohnen','wohnte','wohntest','wohnten','wohntet',
    'gewohnt',
    // ── kaufen (all forms) ──
    'kauft','kaufe','kaufst','kaufen','kaufte','kauftest','kauften','kauftet',
    'gekauft',
    // ── essen (all forms) ──
    'isst','esse','essen','esst','aß','aßest','aßen','aßt','gegessen',
    // ── trinken (all forms) ──
    'trinkt','trinke','trinkst','trinken','trank','trankst','tranken','trankt',
    'getrunken',
    // ── lernen (all forms) ──
    'lernt','lerne','lernst','lernen','lernte','lerntest','lernten','lerntet',
    'gelernt',
    // ── lesen (all forms) ──
    'liest','lese','lesen','lest','las','last','lasen','gelesen',
    // ── schreiben (all forms) ──
    'schreibt','schreibe','schreibst','schreiben','schrieb','schriebst',
    'schrieben','schrieben','geschrieben',
    // ── hören (all forms) ──
    'hört','höre','hörst','hören','hörte','hörtest','hörten','hörtet','gehört',
    // ── bleiben (all forms) ──
    'bleibt','bleibe','bleibst','bleiben','blieb','bliebst','blieben','bliebt',
    'geblieben',
    // ── heißen (all forms) ──
    'heißt','heiße','heißen','hieß','hießt','hießen','geheißen',
    // ── kennen (all forms) ──
    'kennt','kenne','kennst','kennen','kannte','kanntest','kannten','kanntet',
    'gekannt',
    // ── kosten (all forms) ──
    'kostet','koste','kostest','kosten','kostete','kosteten','gekostet',
    // ── brauchen (all forms) ──
    'braucht','brauche','brauchst','brauchen','brauchte','brauchtest',
    'brauchten','gebraucht',
    // ── helfen (all forms) ──
    'hilft','helfe','hilfst','helfen','helft','half','halfst','halfen','halft',
    'geholfen',
    // ── spielen (all forms) ──
    'spielt','spiele','spielst','spielen','spielte','spieltest','spielten',
    'spieltet','gespielt',
    // ── warten (all forms) ──
    'wartet','warte','wartest','warten','wartete','wartetest','warteten',
    'gewartet',
    // ── studieren (all forms) ──
    'studiert','studiere','studierst','studieren','studierte','studierten',
    'studiert',
    // ── kochen (all forms) ──
    'kocht','koche','kochst','kochen','kochte','kochten','gekocht',
    // ── reisen (all forms) ──
    'reist','reise','reisen','reiste','reisten','gereist',
    // ── fragen (all forms) ──
    'fragt','frage','fragst','fragen','fragte','fragtest','fragten','gefragt',
    // ── antworten ──
    'antwortet','antworte','antwortest','antworten','antwortete','geantwortet',
    // ── verstehen (all forms) ──
    'versteht','verstehe','verstehst','verstehen','verstand','verstanden',
    // ── beginnen / anfangen (all forms) ──
    'beginnt','beginne','beginnst','beginnen','begann','begannen','begonnen',
    'fängt','fange','fängst','fangen','fangt','fing','fingen','angefangen',
    // ── bedeuten (all forms) ──
    'bedeutet','bedeute','bedeutest','bedeuten','bedeutete','bedeuteten',
    // ── verändern (all forms) ──
    'verändert','verändere','veränderst','verändern','veränderte','veränderten',
    // ── entwickeln (all forms) ──
    'entwickelt','entwickle','entwickelst','entwickeln','entwickelte','entwickelten',
    // ── schmecken (all forms) ──
    'schmeckt','schmecke','schmeckst','schmecken','schmeckte','geschmeckt',
    // ── regnen ──
    'regnet','regnete','geregnet',
    // ── gefallen (all forms) ──
    'gefällt','gefalle','gefällst','gefallen','gefiel','gefielen',
    // ── treffen (all forms) ──
    'trifft','treffe','triffst','treffen','trefft','traf','trafst','trafen',
    'getroffen',
    // ── passen (all forms) ──
    'passt','passe','passen','passte','gepasst',
    // ── zahlen / bezahlen (all forms) ──
    'zahlt','zahle','zahlst','zahlen','zahlte','gezahlt',
    'bezahlt','bezahle','bezahlst','bezahlen','bezahlte',
    // ── ziehen (all forms) ──
    'zieht','ziehe','ziehst','ziehen','zog','zogst','zogen','gezogen',
    // ── zeigen ──
    'zeigt','zeige','zeigst','zeigen','zeigte','zeigten','gezeigt',
    // ── fühlen ──
    'fühlt','fühle','fühlst','fühlen','fühlte','gefühlt',
    // ── trägen / tragen ──
    'trägt','trage','trägst','tragen','tragt','trug','trugst','trugen','getragen',
    // ── fallen ──
    'fällt','falle','fällst','fallen','fiel','fielen','gefallen',
    // ── halten ──
    'hält','halte','hältst','halten','halt','hielt','hielten','gehalten',
    // ── lassen ──
    'lässt','lasse','lässt','lassen','ließ','ließen','gelassen',
    // ── schlafen ──
    'schläft','schlafe','schläfst','schlafen','schlaft','schlief','schliefen',
    'geschlafen',
    // ── rufen ──
    'ruft','rufe','rufst','rufen','rief','riefen','gerufen',
    // ── öffnen / schließen ──
    'öffnet','öffne','öffnest','öffnen','öffnete','geöffnet',
    'schließt','schließe','schließen','schloss','schlossen','geschlossen',
    // ── führen ──
    'führt','führe','führst','führen','führte','geführt',
    // ── erzählen ──
    'erzählt','erzähle','erzählst','erzählen','erzählte','erzählt',
    // ── zeigen ── (already above, skip)
    // ── zählen (count) ──
    'zählt','zähle','zählst','zählen','zählte','gezählt',
    // ── dauern ──
    'dauert','daure','dauerst','dauern','dauerte','gedauert',
    // ── folgen ──
    'folgt','folge','folgst','folgen','folgte','gefolgt',
    // ── gehören ──
    'gehört','gehöre','gehörst','gehören','gehörte','gehört',
    // ── vergessen ──
    'vergisst','vergesse','vergessen','vergaß','vergaßen','vergessen',
    // ── empfehlen ──
    'empfiehlt','empfehle','empfiehlst','empfehlen','empfahl','empfohlen',
    // ── erklären ──
    'erklärt','erkläre','erklärst','erklären','erklärte','erklärt',
    // ── erinnern ──
    'erinnert','erinnere','erinnerst','erinnern','erinnerte','erinnert',
    // ── suchen ──
    'sucht','suche','suchst','suchen','suchte','gesucht',
    // ── möchten / wünschen ──
    'wünscht','wünsche','wünschst','wünschen','wünschte','gewünscht',
    // ── Quantifier inflections ──
    'viele','vielen','vielem','vieler','vieles',
    'wenige','wenigen','wenigem','weniger','wenigeres',
    'einige','einigen','einigem','einiger','einiges',
    'mehrere','mehreren','mehrerer','mehreres',
    // ── Common adjective forms (discourse scaffolding) ──
    'nett','nette','netten','nettem','netter','nettes',
    'schön','schöne','schönen','schönem','schöner','schönes',
    'groß','große','großen','großem','großer','großes',
    'klein','kleine','kleinen','kleinem','kleiner','kleines',
    'alt','alte','alten','altem','alter','altes',
    'neu','neue','neuen','neuem','neuer','neues',
    'jung','junge','jungen','jungem','junger','junges',
    'lang','lange','langen','langem','langer','langes',
    'kurz','kurze','kurzen','kurzem','kurzer','kurzes',
    'warm','warme','warmen','warmem','warmer','warmes',
    'kalt','kalte','kalten','kaltem','kalter','kaltes',
    'toll','tolle','tollen','tollem','toller','tolles',
    'okay','ok','schade','super','prima','klasse',
    'wichtig','wichtige','wichtigen','wichtigem','wichtiger','wichtiges',
    'wichtigste','wichtigsten','wichtigster','wichtigstes',
    'nächste','nächsten','nächstem','nächster','nächstes',
    'erste','ersten','erstem','erster','erstes',
    'letzte','letzten','letztem','letzter','letztes',
    'beste','besten','bestem','bester','bestes',
    'größte','größten','größtem','größter','größtes',
    'kompliziert','komplizierte','komplizierten','komplizierter',
    'interessant','interessante','interessanten','interessanter',
    'einfach','einfache','einfachen','einfachem','einfacher',
    'schwierig','schwierige','schwierigen','schwieriger',
    'friedlich','friedliche','friedlichen',
    // ── Ordinal numbers as discourse markers ──
    'ersten','zweiten','dritten','vierten','fünften',
    'sechsten','siebten','achten','neunten','zehnten',
    // ── Common short discourse / confirmation words ──
    'also','genau','stimmt','richtig','falsch','fertig','bereit',
    'vorsicht','achtung','los','ruhig','super','etwa','sicher',
    // ── Proper nouns commonly used in examples ──
    // ── Proper nouns (both capitalized and lowercase for sentence-start matches) ──
    'Peter','peter','Anna','anna','Maria','maria','Hans','hans','Klaus','klaus',
    'Lena','lena','Max','max','Sarah','sarah','Thomas','thomas','Lisa','lisa',
    'Mia','mia','Mias','mias','Schmidt','schmidt','Weber','weber',
    'Yilmaz','yilmaz','Müller','müller','Schneider','schneider',
    'Pauli','pauli','Hildi','hildi','Mueller','mueller',
    'Fruebes','fruebes','Gewaehlte','gewaehlte',
    'Berlin','berlin','München','münchen','Hamburg','hamburg',
    'Wien','wien','Zürich','zürich','Frankfurt','frankfurt',
    'Köln','köln','Stuttgart','stuttgart','Dresden','dresden',
    'Deutschland','deutschland','Österreich','österreich',
    'Schweiz','schweiz','Europa','europa','Bayern','bayern',
    'Freiburg','freiburg','Schwarzwald','schwarzwald','Freiburger','freiburger',
    'Bereust','bereust','Effizienz','effizienz',
    'Fraktur','fraktur','Massives','massives','Pure','pure',
    'Schlaf','schlaf','Struktur','struktur','Plastik','plastik',
    'Sprichwörter','sprichwörter','Lächeln','lächeln',
    'Kaffee','kaffee','Mai','mai','Schoener','schoener','Oeffne','oeffne',
    // ── hängen (all forms) ──
    'hängt','hänge','hängst','hängen','hing','hingst','hingen','gehangen',
    // ── wachsen (all forms) ──
    'wächst','wachse','wachsen','wuchs','wuchsen','gewachsen',
    // ── fehlen (all forms) ──
    'fehlt','fehle','fehlst','fehlen','fehlte','gefehlt',
    // ── benutzen / nutzen ──
    'benutzt','benutze','benutzen','benutzte','nutzst','nutzt','nutze','nutzen','genutzt',
    // ── erleben (all forms) ──
    'erlebt','erlebe','erlebst','erleben','erlebte',
    // ── betragen (all forms) ──
    'beträgt','betrage','beträgst','betragen','betrug','betrugen',
    // ── spüren (all forms) ──
    'spürt','spüre','spürst','spüren','spürte','gespürt',
    // ── gelten (all forms) ──
    'gilt','gelte','gelten','galt','galten','gegolten',
    // ── schaffen (all forms) ──
    'schafft','schaffe','schaffst','schaffen','schaffte','geschafft',
    // ── freuen (all forms) ──
    'freut','freue','freust','freuen','freute','gefreut','freust',
    // ── betreffen (all forms) ──
    'betrifft','betreffe','betreffen','betraf','betrafen','betroffen',
    // ── schützen (all forms) ──
    'schützt','schütze','schützen','schützte','geschützt',
    // ── prüfen (all forms) ──
    'prüft','prüfe','prüfst','prüfen','prüfte','geprüft',
    // ── prägen (all forms) ──
    'prägt','präge','prägst','prägen','prägte','geprägt',
    // ── erkennen (all forms) ──
    'erkennt','erkenne','erkennst','erkennen','erkannte','erkannt',
    // ── bemerken (all forms) ──
    'bemerkt','bemerke','bemerkst','bemerken','bemerkte',
    // ── bekommen (all forms) ──
    'bekommt','bekomme','bekommst','bekommen','bekam','bekamen','kriegst','kriegt',
    // ── begrüßen (all forms) ──
    'begrüßt','begrüße','begrüßen','begrüßte',
    // ── bestätigen ──
    'bestätigt','bestätige','bestätigst','bestätigen','bestätigte',
    // ── bestehen ──
    'besteht','bestehe','bestehst','bestehen','bestand','bestanden',
    // ── beziehen ──
    'bezieht','beziehe','beziehst','beziehen','bezog','bezogen',
    // ── fordern ──
    'fordert','fordere','forderst','fordern','forderte','gefordert',
    // ── lieben ──
    'liebst','liebt','liebe','lieben','liebte','geliebt',
    // ── lohnen ──
    'lohnt','lohne','lohnst','lohnen','lohnte','gelohnt',
    // ── lenken ──
    'lenkt','lenke','lenkst','lenken','lenkte','gelenkt',
    // ── dienen ──
    'dient','diene','dienst','dienen','diente','gedient',
    // ── nennen ──
    'nennt','nenne','nennst','nennen','nannte','genannt',
    // ── pflegen ──
    'pflegt','pflege','pflegst','pflegen','pflegte','gepflegt',
    // ── reagieren ──
    'reagiert','reagiere','reagierst','reagieren','reagierte',
    // ── reduzieren ──
    'reduziert','reduziere','reduzierst','reduzieren','reduzierte',
    // ── riechen ──
    'riecht','rieche','riechst','riechen','roch','rochen','gerochen',
    // ── wirken ──
    'wirkt','wirke','wirkst','wirken','wirkte','gewirkt',
    // ── verdienen ──
    'verdient','verdiene','verdienst','verdienen','verdiente',
    // ── verbieten ──
    'verbietet','verbiete','verbieten','verbot','verboten',
    // ── vergehen ──
    'vergeht','vergehe','vergehen','verging','vergangen',
    // ── verlieren ──
    'verliert','verliere','verlierst','verlieren','verlor','verloren',
    // ── vermissen ──
    'vermisst','vermisse','vermissen','vermisste',
    // ── vertreten ──
    'vertritt','vertrete','vertreten','vertrat',
    // ── stören ──
    'stört','störe','störst','stören','störte','gestört',
    // ── steigen ──
    'steigt','steige','steigst','steigen','stieg','stiegen','gestiegen',
    // ── sinken ──
    'sinkt','sinke','sinken','sank','sanken','gesunken',
    // ── sterben ──
    'stirbt','sterbe','sterben','starb','starben','gestorben',
    // ── widersprechen ──
    'widerspricht','widersprechen','widersprach','widersprochen','widersprichst',
    // ── wählen ──
    'wählt','wähle','wählst','wählen','wählte','gewählt',
    // ── zählen ──
    'zählt','zähle','zählen','zählte','gezählt','zaehlt','zaehlen',
    // ── blühen ──
    'blüht','blühe','blühst','blühen','blühte','geblüht',
    // ── klappen / funktionieren ──
    'klappt','klappe','klappen','klappte','funktioniert','funktionieren','funktionierte',
    // ── versuchen ──
    'versucht','versuche','versuchst','versuchen','versuchte',
    // ── schauen ──
    'schaut','schaue','schaust','schauen','schaute','geschaut',
    // ── besuchen ──
    'besucht','besuche','besuchst','besuchen','besuchte',
    // ── überlegen ──
    'überlegt','überlege','überlegst','überlegen','überlegte',
    // ── ärgern ──
    'ärgert','ärgere','ärgerst','ärgern','ärgerte','geärgert',
    // ── erholen ──
    'erholt','erhole','erholst','erholen','erholte',
    // ── bewegen ──
    'bewegt','bewege','bewegst','bewegen','bewegte',
    // ── entscheiden ──
    'entscheidet','entscheide','entscheidest','entscheiden','entschied','entschieden',
    // ── verbessern ──
    'verbessert','verbessere','verbesserst','verbessern','verbesserte',
    // ── beeilen ──
    'beeilt','beeil','beeile','beeilst','beeilen','beeilte',
    // ── Common comparative adjectives ──
    'stärker','stärkere','stärkeren','stärkerem','stärkerer',
    'stärkste','stärksten','stärkster',
    'größer','größere','größeren','größerem','größerer',
    'besser','bessere','besseren','besserem','besserer',
    'schlechter','schlechtere','schlechteren',
    'höher','höhere','höheren','höheres',
    'hohe','hohen','hohem','hoher','hohes',
    'tiefer','tiefere','tiefen',
    'länger','längere','längeren',
    'kürzer','kürzere','kürzeren',
    'jünger','jüngere','jüngeren','ältere','älteren','älterem','älterer',
    'neuer','neuere','neueren',
    'gesünder','gesündere','gesündesten',
    'häufiger','häufigere','häufigsten','öfter','öfters',
    'wichtiger','wichtigere','wichtigsten',
    'einfacher','billiger','teurer','günstiger','günstiger',
    'größter','kleinster','nächster','letzter','erster',
    'stärker','schwächer','reicher','ärmer',
    'komplizierter','interessanter',
    'präziser','präzise','präzisen','präziserem',
    'subtiler','subtile','subtilen',
    'konstruktiv','konstruktive','konstruktiven',
    // ── Common participial adjectives ──
    'bekannt','unbekannt','gelöst','gewählt','verboten','erlaubt',
    'gebrochen','verbunden','gesund','krank','geliefert','geübt','geuebt',
    'beschäftigt','verliebt','verheiratet','geschieden','angestellt','selbstständig',
    'bewährt','bewährte','bewährten','geschützt','versteckt',
    'verfeinert','entwickelt','verändert',
    // ── Common adjectives used as scene-setting ──
    'täglich','tägliche','täglichen','täglich',
    'gemütlich','gemütliche','gemütlichen','gemütlicher','gemütlichem',
    'riesig','riesige','riesigen','riesigem','riesiger',
    'traurig','traurige','traurigen','trauriger',
    'wütend','wütende','wütenden','wütender',
    'perfekt','perfekte','perfekten','perfekter',
    'fair','fairer','faire','fairen',
    'komplex','komplexe','komplexen',
    'relativ','relative','relativen',
    'genug','genügt','genügte',
    'ziemlich','bequem','bequeme','bequemer','bequemen',
    'streng','strenge','strengen','strenger',
    'visuell','visuelle','visuellen',
    'voll','volle','vollen','vollem','voller',
    'leer','leere','leeren',
    'offen','offene','offenen',
    'dicht','dichte','dichten',
    'nass','nasse','nassen',
    'still','stille','stillen',
    'stetig','stetige','stetigen',
    'sorgfältig','gründlich','pünktlich','puenktlich','nötig','noetig',
    'notwendig','regelmäßig','gelegentlich',
    'drüben','zurück','plus','circa','live','cool','clever',
    'satt','warm','kalt','ruhig','sicher','frei','treu','wahr',
    'bayerische','bayerischen','bayerischem','bayerischer',
    'technische','technischen','technischem',
    'historisch','historische','historischen',
    'politisch','politische','politischen',
    'wirtschaftlich','wirtschaftliche',
    'kulturell','kulturelle','kulturellen',
    'sozial','soziale','sozialen',
    'sachlich','sachliche','sachlichen',
    'sensibel','sensibles','sensiblen',
    'konkret','konkrete','konkreten','konkreter',
    'positiv','positive','positiven','positiver',
    'lebhaft','lebhafte','lebhaften',
    'langweilig','langweilige','langweiligen',
    'stressig','stressige','stressigen',
    'schrecklich','schreckliche','schrecklichen',
    'bewusst','bewusste','bewusstes','bewussten',
    'unverändert','unverändertes','unveränderten',
    'diverse','diversen','verschiedene','verschiedenen',
    'grüne','grünen','grünem','grüner','grünes',
    'blaue','blauen','blauem','blauer','blaues',
    'rote','roten','rotem','roter','rotes',
    'schwarze','schwarzen','schwarzem','schwarzer',
    'weiße','weißen','weißem','weißer',
    // ── Common nouns as discourse scaffolding ──
    'Kaffee','Tee','Bier','Wein','Brot','Käse','Butter','Salz',
    'Mai','Juni','Juli','August','Sommer','Winter','Herbst','Frühling',
    'Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag',
    'Uhr','Stunden','Minuten','Sekunden',
    'Kilometer','Meter','Kilo','Kilogramm',
    'Euro','Cent','Prozent',
    'Schlaf','Lächeln','Struktur','Plastik','Sprichwörter',
    // ── Common adverbs not already covered ──
    'täglich','regelmäßig','gelegentlich','normalerweise','grundsätzlich',
    'insgesamt','überhaupt','tatsächlich','eigentlich','tatsächlich',
    'wenigstens','mindestens','höchstens','zumindest','immerhin',
    'besonders','hauptsächlich','schließlich','letztendlich','letztlich',
    'inzwischen','mittlerweile','seither','seitdem','gleichzeitig',
    'außerdem','übrigens','nämlich','dennoch','trotzdem','jedoch',
    'leider','glücklicherweise','hoffentlich','vielleicht','bestimmt',
    'brutto','netto','circa','ungefähr','mindestens','maximal',
    'abends','morgens','mittags','nachts','nachts',
    // ── ASCII-encoding variants of umlauts (some files use these) ──
    'schoen','schoene','schoenen','schoenste','schoensten','schoenster',
    'gross','grosse','grossen','grosser',
    'populaer','populaere',
    'regelmaessig','haeufig',
    'moechte','moechten','moechtest',
    'koennen','koennten','koennte',
    'muessen','muesste','muessten',
    'kuemmert','kuemmere','kueммern',
    'luegen',
    'spueren','spuere','spuert',
    'geuebt',
    'puenktlich','noetig',
    'voellig','voellige',
    'erwaehnt','bekaempfen','bekaempft',
    'verfaelscht','loesen','loest',
    'gewaehlt','gewaehlen','waehlen','waehlt','waehle',
    'groesste','groessten','groesser',
    'guenstig','guenstige','guenstiger',
    'vernuenftig','vernuenftige','vernuenftigste',
    'uebe','uebt','ueben',
    // ── Additional high-frequency verb forms ──
    // ändern (to change)
    'ändert','ändere','änderst','ändern','änderte','geändert',
    // reparieren
    'repariert','repariere','reparierst','reparieren','reparierte',
    // kämpfen
    'kämpft','kämpfe','kämpfst','kämpfen','kämpfte','bekämpft','bekaempft',
    // üben
    'übt','übe','übst','üben','übte','geübt',
    // lösen
    'löst','löse','lösen','löste','gelöst',
    // liefern
    'liefert','liefere','lieferst','liefern','lieferte','geliefert',
    // konzentrieren
    'konzentriert','konzentriere','konzentrierst','konzentrieren','konzentrierte',
    // publizieren
    'publiziert','publiziere','publizierst','publizieren','publizierte',
    // senken
    'senkt','senke','senkst','senken','senkte','gesenkt',
    // üben forms
    'übst','übt','übe','übten',
    // widerlegen
    'widerlegt','widerlege','widerlegst','widerlegen','widerlegte',
    // verrückt (adjective)
    'verrückt','verrückte','verrückten','verrückter',
    // ausländisch
    'ausländisch','ausländische','ausländischen','ausländischem','ausländisches',
    // fließen
    'fließt','fließe','fließen','floss','flossen','geflossen',
    // bauen
    'baut','baue','baust','bauen','baute','gebaut',
    // backen
    'bäckst','bäckt','backe','backen','buk','gebacken','backst',
    // bieten
    'bietet','biete','bietest','bieten','bot','boten','geboten',
    // blockieren
    'blockiert','blockiere','blockierst','blockieren','blockierte',
    // brennen
    'brennt','brenne','brennst','brennen','brannte','gebrannt',
    // brechen
    'bricht','breche','brichst','brechen','brach','gebrochen',
    // demonstrieren
    'demonstriert','demonstriere','demonstrierst','demonstrieren','demonstrierte',
    // drehen
    'dreht','drehe','drehst','drehen','drehte','gedreht',
    // drucken/drücken
    'druckt','drückt','drücke','drücken','drückte',
    // empfangen
    'empfängt','empfange','empfangst','empfangen','empfing','empfangen',
    // entstehen
    'entsteht','entstehe','entstehst','entstehen','entstand','entstanden',
    // entfernen
    'entfernt','entferne','entfernst','entfernen','entfernte',
    // enttäuschen
    'enttäuscht','enttäusche','enttäuschst','enttäuschen','enttäuschte',
    // erfordern
    'erfordert','erfordere','erfordern','erforderte',
    // erforschen
    'erforscht','erforsche','erforschst','erforschen','erforschte',
    // erfreuen
    'erfreut','erfreue','erfreust','erfreuen','erfreute',
    // erfüllen
    'erfüllt','erfülle','erfüllst','erfüllen','erfüllte','erfuellt',
    // enthalten
    'enthält','enthalte','enthältst','enthalten','enthielt','enthalten',
    // entschärfen
    'entschärft','entschärfe','entschärfen','entschärfte',
    // kämpfen (extra)
    'bekämpft','bekämpfe','bekämpfen','bekämpfte',
    // starten
    'startet','starte','startest','starten','startete','gestartet',
    // stoppen
    'stoppt','stoppe','stoppst','stoppen','stoppte','gestoppt',
    // strukturieren
    'strukturiert','strukturiere','strukturierst','strukturieren','strukturierte',
    // streiken/streben
    'strebt','strebe','strebst','streben','strebte',
    // wärmen
    'wärmt','wärme','wärmst','wärmen','wärmte','gewärmt',
    // waschen
    'wäscht','wasche','wäschst','waschen','wusch','gewaschen',
    // warnen
    'warnt','warne','warnst','warnen','warnte','gewarnt',
    // werfen
    'wirft','werfe','wirfst','werfen','warf','geworfen',
    // zahlen extra forms
    'spart','spare','sparst','sparen','sparte','gespart',
    // spülen
    'spült','spüle','spülst','spülen','spülte','gespült','spul','spül',
    // strahlen
    'strahlt','strahle','strahlst','strahlen','strahlte','gestrahlt',
    // legen
    'legt','lege','legst','legen','legte','gelegt',
    // putzen
    'putzt','putze','putzt','putzen','putzte','geputzt',
    // stellen
    'stellt','stelle','stellst','stellen','stellte','gestellt','stellst',
    // setzen
    'setzt','setze','setzt','setzen','setzte','gesetzt',
    // schlagen
    'schlägt','schlage','schlägst','schlagen','schlug','geschlagen','schlägst',
    // schenken
    'schenkt','schenke','schenkst','schenken','schenkte','geschenkt',
    // schimpfen
    'schimpft','schimpfe','schimpfst','schimpfen','schimpfte',
    // rütteln/rutschen
    'rutscht','rutsche','rutschst','rutschen','rutschte',
    // messen
    'misst','messe','misst','messen','maß','gemessen',
    // lachen
    'lacht','lache','lachst','lachen','lachte','gelacht',
    // kümmern (sich)
    'kümmert','kümmere','kümmerst','kümmern','kümmerte',
    // korrigieren
    'korrigiert','korrigiere','korrigierst','korrigieren','korrigierte',
    // kopieren
    'kopiert','kopiere','kopierst','kopieren','kopierte','kopieren',
    // spüren extra forms
    'spüren','spürst','spürte','gespürt',
    // klingen
    'klingt','klinge','klingst','klingen','klang','geklungen',
    // sehnen
    'sehnt','sehne','sehnst','sehnen','sehnte','gesehnt',
    // trennen
    'trennt','trenne','trennst','trennen','trennte','getrennt',
    // schlafen extra
    'schläfst','schlief','schliefen',
    // stechen
    'sticht','steche','stichst','stechen','stach','gestochen',
    // zerfallen
    'zerfällt','zerfalle','zerfallen','zerfiel',
    // zerreißen
    'zerreißt','zerreiße','zerreißen','zerriss','zerrissen',
    // Common adjectives/adverbs not yet covered ──
    'ähnlich','ähnliche','ähnlichen','ähnlicher',
    'ängstlich','ängstliche','ängstlichen',
    'ärgerlich','ärgerliche','ärgerlichen',
    'äußerlich','äußerliche','äußerlichen',
    'öffentlich','öffentliche','öffentlichen','öffentlicher',
    'ökologisch','ökologische','ökologischen',
    'üblich','übliche','üblichen','üblicher',
    'ursprünglich','ursprüngliche','ursprünglichen',
    'unvergesslich','unvergessliche','unvergesslichen',
    'ungewöhnlich','ungewöhnliche','ungewöhnlichen',
    'unerträglich','unerträgliche',
    'unerwartet','unerwartete','unerwarteten',
    'unbegründet',
    'tödlich','tödliche','tödlichen',
    'typisch','typische','typischen','Typisch',
    'süßlich','süß','süße','süßen','süßer',
    'südlich','südliche','südlichen',
    'süchtig','süchtige','süchtigen',
    'stark','starke','starken','starkem','starker','starkes',
    'schief','schiefe','schiefen',
    'scharf','scharfe','scharfen','schärfer','schärfste',
    'schätzbar','geschickt','geschickte','geschickten',
    'rückwärts',
    'effizient','effiziente','effizienten','effizienter',
    'differenziert','differenzierter','differenziertere',
    'dunkle','dunklen','dunklem','dunkel',
    'dritte','dritten','drittes','dritter','drittgrößte','drittgrößten',
    'desto','umso',
    'damals','früher','seither',
    'dick','dicke','dicken','dicker',
    'deftig','deftiges','deftigen',
    'emotional','emotionale','emotionalen','emotionaler',
    'bunt','bunte','bunten','bunter','buntes',
    'bewaffnet','bewaffnete','bewaffneten',
    'bacterial','bakterielle','bakteriellen',
    'brutto','netto',
    'bloß','blöd','blöde','blöden',
    'vegetarisch','vegetarische','vegetarischen',
    'tolerant','toleriert','tolerierte',
    'kompetent','kompetente','kompetenten',
    'gültig','gültige','gültigen',
    'goldene','goldenen','golden',
    'geschossen','geschickt',
    'zyklisch','zyklische','zyklischen',
    'würdig','würdige','würdigen','würdiger',
    'würzig','würzige','würzigen','würzigem',
    'warm','kalte',
    'vernünftig','vernünftige','vernünftigen','vernünftiger','vernünftigste',
    'trocken','trockene','trockenen','trockner',
    'süßlich','herzhaft','herzhafte','herzhaften',
    'beschränkt','beschränkte','beschränkten','beschränkter',
    'aggressiv','aggressive','aggressiven','aggressiver',
    // Common imperative forms
    'vergiss','sprich','hör','schau','pass','komm','geh','bleib',
    'mach','bring','nimm','lies','schreib','lern','frag','sag','denk',
    'setz','steh','sitz','lauf','trag','halt','lass','ruf','öffne',
    'schliess','schließ','benutze','nutz','spiel','wart','starte','stopp',
    // Common modal adverbs in example contexts
    'überhaupt','tatsächlich','grundsätzlich','insgesamt','immerhin',
    'zunächst','schließlich','letztendlich','mittlerweile','inzwischen',
    'generell','allgemein','meistens','häufig','regelmäßig','selten',
    'normalerweise','typischerweise','meiner','deiner','seiner',
    // Infinitives as nouns (very common in German)
    'Lächeln','Schlafen','Essen','Trinken','Fahren','Lernen','Lesen',
    'Schreiben','Laufen','Stehen','Sitzen','Liegen',
    // Common discourse filler/connectors
    'tust','tue','tun',
    'einfach','natürlich','eigentlich','anscheinend','offensichtlich',
    'vergleichsweise','entsprechend','demzufolge','infolgedessen',
    // Ordinal variants
    'zweite','zweiten','zweitem','zweiter','zweites',
    'dritte','dritten','dritten','dritter','drittes',
    'vierte','vierten','vierter','viertes',
    'fünfte','fünften','fünfter','fünftes',
    // ASCII variants from encoding issues
    'aendert','aenderte','loest','loesen','loeste',
    'begruendet','begruendung','begründet','begründete',
    'verfuellt','erfuellt','erfuellend',
    'gegenueber','darueber','darunter',
    'enthuellt','enthüllt','enthülle',
    // ── Additional verb forms for completeness ──
    // bedienen
    'bedient','bediene','bedienst','bedienen','bediente',
    // befassen
    'befasst','befasse','befasst','befassen','befasste',
    // begegnen
    'begegnet','begegne','begegnest','begegnen','begegnete',
    // behaupten
    'behauptet','behaupte','behauptest','behaupten','behauptete',
    // beläuft (sich belaufen)
    'beläuft','belaufe','beläufst','belaufen','belief','belaufen',
    // benennen
    'benennt','benenne','benennst','benennen','benannte','benannt',
    // beraten
    'berät','berate','berätst','beraten','beriet','beraten',
    // berichten
    'berichtet','berichte','berichtest','berichten','berichtete',
    // besagen
    'besagt','besage','besagst','besagen','besagte',
    // beschleunigen
    'beschleunigt','beschleunige','beschleunigst','beschleunigen','beschleunigte',
    // bestellen
    'bestellt','bestelle','bestellst','bestellen','bestellte',
    // bestrafen
    'bestraft','bestrafe','bestrafst','bestrafen','bestrafte',
    // betonen
    'betont','betone','betonst','betonen','betonte',
    // bluten
    'blutet','blute','blutest','bluten','blutete',
    // dämpfen
    'dämpft','dämpfe','dämpfst','dämpfen','dämpfte','gedämpft',
    // dekorieren
    'dekoriert','dekoriere','dekorierst','dekorieren','dekorierte',
    // entgegnen
    'entgegnet','entgegne','entgegnest','entgegnen','entgegnete',
    // erheben
    'erhebt','erhebe','erhebst','erheben','erhob','erhoben',
    // erläutern
    'erläutert','erläutere','erläuterst','erläutern','erläuterte',
    // ernähren
    'ernährt','ernähre','ernährst','ernähren','ernährte','ernähren',
    // eröffnen
    'eröffnet','eröffne','eröffnest','eröffnen','eröffnete',
    // erörtern
    'erörtert','erörtere','erörterst','erörtern','erörterte',
    // erwirbt (erwerben)
    'erwirbt','erwerbe','erwirbst','erwerben','erwarb','erworben',
    // evaluieren
    'evaluiert','evaluiere','evaluierst','evaluieren','evaluierte',
    // fassen
    'fasst','fasse','fasst','fassen','fasste','gefasst',
    // filtern
    'filtert','filtere','filterst','filtern','filterte',
    // forschen
    'forscht','forsche','forschst','forschen','forschte',
    // füttern
    'füttert','füttere','fütterst','füttern','fütterte',
    // genehmigen
    'genehmigt','genehmige','genehmigst','genehmigen','genehmigte',
    // gründen
    'gründet','gründe','gründest','gründen','gründete','gegründet',
    // grüßen
    'grüßt','grüße','grüßt','grüßen','grüßte',
    // jucken
    'juckt','jucke','juckst','jucken','juckte',
    // joggen
    'joggt','jogge','joggst','joggen','joggte',
    // kehren
    'kehrt','kehre','kehrst','kehren','kehrte',
    // klagen
    'klagt','klage','klagst','klagen','klagte',
    // klatschen
    'klatscht','klatsche','klatschst','klatschen','klatschte',
    // kleben
    'klebt','klebe','klebst','kleben','klebte',
    // klemmen
    'klemmt','klemme','klemmst','klemmen','klemmte',
    // klopfen
    'klopft','klopfe','klopfst','klopfen','klopfte',
    // kommunizieren
    'kommuniziert','kommuniziere','kommunizierst','kommunizieren','kommunizierte',
    // komprimieren
    'komprimiert','komprimiere','komprimierst','komprimieren','komprimierte',
    // kontrollieren
    'kontrolliert','kontrolliere','kontrollierst','kontrollieren','kontrollierte',
    // kündigen
    'kündigt','kündige','kündigst','kündigen','kündigte','gekündigt',
    // lehren
    'lehrt','lehre','lehrst','lehren','lehrte','gelehrt',
    // leuchten
    'leuchtet','leuchte','leuchtest','leuchten','leuchtete',
    // liquidieren
    'liquidiert','liquidiere','liquidierst','liquidieren','liquidierte',
    // lösen extra
    'gelöst','gelöscht','loescht',
    // mähen
    'mäht','mähe','mähst','mähen','mähte',
    // markieren
    'markiert','markiere','markierst','markieren','markierte','markierten',
    // merken
    'merkt','merke','merkst','merken','merkte','gemerkt',
    // migrieren
    'migriert','migriere','migrierst','migrieren','migrierte',
    // packen
    'packt','packe','packst','packen','packte',
    // pflücken
    'pflückt','pflücke','pflückst','pflücken','pflückte',
    // plagen
    'plagt','plage','plagst','plagen','plagte',
    // plädieren
    'plädiert','plädiere','plädierst','plädieren','plädierte',
    // recyceln
    'recycelt','recycle','recycelst','recyceln','recycelte','recyceltem',
    // referieren
    'referiert','referiere','referierst','referieren','referierte',
    // retten
    'rettet','rette','rettest','retten','rettete',
    // richten
    'richtet','richte','richtest','richten','richtete',
    // schätzen
    'schätzt','schätze','schätzt','schätzen','schätzte','geschätzt',
    // schlucken
    'schluckt','schlucke','schluckst','schlucken','schluckte',
    // schockieren
    'schockiert','schockiere','schockierst','schockieren','schockierte',
    // schließen — close (extra forms)
    'schliesse','schloss','schlossen',
    // sperren
    'sperrt','sperre','sperrst','sperren','sperrte','gesperrt',
    // stehlen
    'stiehlt','stehle','stiehlst','stehlen','stahl','gestohlen',
    // strukturieren extra
    'strukturiert','strukturierte',
    // tilgen
    'tilgt','tilge','tilgst','tilgen','tilgte','getilgt',
    // trennen extra
    'trennst','trennte','getrennt',
    // vergrößern
    'vergrößert','vergrößere','vergrößerst','vergrößern','vergrößerte',
    // verpflegen
    'verpflegt','verpflege','verpflegst','verpflegen','verpflegte',
    // verpacken
    'verpackt','verpacke','verpackst','verpacken','verpackte',
    // verfügen
    'verfügt','verfüge','verfügst','verfügen','verfügte',
    // verdirbt (verderben)
    'verdirbt','verderbe','verdirbst','verderben','verdarb','verdorben',
    // verdächtig
    'verdächtig','verdächtige','verdächtigen','verdächtiger',
    // verfassungswidrig
    'verfassungswidrig','verfassungswidrige',
    // verwechseln
    'verwechselt','verwechsele','verwechselst','verwechseln','verwechselte',
    // verzerren
    'verzerrt','verzerrt','verzerren','verzerrte',
    // verzieren
    'verziert','verziere','verzierst','verzieren','verzierte','verzierten',
    // währen
    'währt','währe','währst','währen','währte',
    // zerbrechen
    'zerbricht','zerbreche','zerbrichst','zerbrechen','zerbrach','zerbrochen',
    // zerlegen
    'zerlegt','zerlege','zerlegst','zerlegen','zerlegte',
    // äußern
    'äußert','äußere','äußerst','äußern','äußerte','geäußert',
    // ── Additional adjectives ──
    'erheblich','erhebliche','erheblichen','erheblicher',
    'europäisch','europäische','europäischen','europäischer',
    'extrem','extreme','extremen','extremer',
    'ewig','ewige','ewigen','ewiger',
    'extra','externe','externen',
    'fester','feste','festen',
    'flexible','flexiblen','flexibler','flexibles',
    'flach','flache','flachen',
    'formell','formelle','formellen','formeller',
    'frisch','frische','frischen','frischer','frisches',
    'froh','frohe','frohen','froher',
    'fröhlich','fröhliche','fröhlichen','fröhlicher','fröhliches',
    'genial','geniale','genialen','genialer',
    'geschichtsträchtig','geschichtsträchtiger','geschichtsträchtigen',
    'glatt','glatte','glatten','glatter',
    'glänzt','glänze','glänzend','glänzende',
    'griechisch','griechische','griechischen','griechischer',
    'gültig','gültige','gültigen',
    'erheblich','halb','halbe','halbes','halben','halber',
    'hasst','hasse','hassest',
    'hitzig','hitzige','hitzigen',
    'holprig','holprige','holprigen',
    'hübsch','hübsche','hübsches','hübschen',
    'härter','harte','harten','hart',
    'klassisch','klassische','klassischen','klassischer',
    'komisch','komische','komischen','komischer',
    'köstlich','köstliche','köstlichen','köstlicher',
    'konservativ','konservative','konservativen',
    'kontrovers','kontroverse','kontroversen',
    'kräftig','kräftige','kräftigen','kräftiger',
    'langweilig',
    'literarisch','literarische','literarischen',
    'locker','lockere','lockeren','lockerer',
    'merkwürdig','merkwürdige','merkwürdigen',
    'misslungen','misslungene','misslungenen',
    'mutig','mutige','mutigen','mutiger',
    'negativ','negative','negativen','negativer',
    'paar','paare',
    'populär','populäre','populären','populärer','populärste','populärsten',
    'reale','realen','realer','reales',
    'recycelbar','recyclebar',
    'religiös','religiöse','religiösen','religiöser',
    'staatlich','staatliche','staatlichen','staatlicher',
    'strikt','strikte','strikten','strikter',
    'ständig','ständige','ständigen','ständiger',
    'subtil','subtile','subtilen','subtiler',
    'vage','vagen','vager',
    'verdient','verdienter','verdiente',
    'gewählt','gewählte','gewählten',
    // ── Common nouns as scene-setting in examples ──
    'Bereust','Frische','Fruebes','Gewaehlte','Massives',
    'Effizienz','Fraktur','Hildi','Mueller','Pauli','Oeffne',
    'Schlaf','Struktur','Plastik','Pure','Sprichwörter','Lächeln',
    'denen','jedem','herum',
    'ernst','earnst',
    'ewig','ewig',
    'extra',
    'paar',
    // ── Common infinitives used as nouns or context ──
    'gießen','füttern','ehren','schlucken','leuchten','recyceln',
    'migrieren','beschleunigen','erfordern','erforschen','erörtern',
    'ignorieren','hetzen','klatschen','buchen',
    // ── buchen ──
    'bucht','buche','buchst','buchen','buchte','gebucht',
    // ── ignorieren ──
    'ignoriert','ignoriere','ignorierst','ignorieren','ignorierte',
    // ── heizen ──
    'heizt','heize','heizt','heizen','heizte',
    // ── stechen extra ──
    'sticht','gestochen',
    // ── schwingen ──
    'schwingt','schwinge','schwingt','schwingen','schwang','geschwungen',
    // ── ergänzen ──
    'ergänzt','ergänze','ergänzt','ergänzen','ergänzte','ergänzt','ergaenze','ergaenzt',
    // ── ergibt ──
    'ergibt','ergebe','ergibt','ergeben','ergab','ergeben',
    // ── Common phrases / discourse words ──
    'gib','tue','tun','lächeln','lächelst','lächelt',
    'herum','darunter','darüber','dagegen','dahinter','davor','davon',
    'daneben','dazwischen','dabei','darum','darauf','darin','daraus',
    'hierfür','hiermit','hierzu','hierbei','hierher','hierhin','hierdurch',
    'womit','worüber','worunter','worum','woraus','worin','wovon','wofür',
    // ── Proper nouns that appear in examples ──
    'Pauli','Hildi','Mueller','Fruebes','Fraktur',
    // ── Common words in encoding-issue files ──
    'klaeren','klaert','klaerst','geklaert',
    'schuen','gefloehen','geflohen',
    'erhoehen','erhoeht','erhoehte','erhöhen','erhöht','erhöhte',
    'oeffnen','oeffnet','oeffnete',
    'erwuenscht',
    'fuegte','fuelle','fuellen','fuellt','fuers','fuert',
    'geruehrt','geknuepft','geschuert',
    'praegt','praege','praegte',
    'muede','muendiger','muendig',
    'kuenstlerisch','kuenstlerische','kuenstlerischen',
    'gueltig','gueltige','gueltigen',
    'guenstigere','guenstigsten',
    'grosses','grosse','grossen',
    'hoere','hoert','hoeren',
    // ── Additional verb forms covering remaining violations ──
    // atmen
    'atmet','atme','atmest','atmen','atmete','atmeten',
    // befördern
    'befördert','befördere','beförderst','befördern','beförderte',
    // berechnen
    'berechnet','berechne','berechnest','berechnen','berechnete',
    // beschriften
    'beschriftet','beschrifte','beschriften','beschriftete',
    // betrügen
    'betrügt','betrüge','betrügst','betrügen','betrog','betrogen',
    // beschreiben extra forms
    'beschrieb','beschrieben',
    // beschädigen
    'beschädigt','beschädige','beschädigst','beschädigen','beschädigte','beschaedigt','beschaedigte',
    // deuten
    'deutet','deute','deutest','deuten','deutete',
    // entlassen
    'entlässt','entlasse','entlässt','entlassen','entließ','entlassen',
    // entnehmen
    'entnimmt','entnehme','entnimmst','entnehmen','entnahm','entnommen',
    // ergreifen
    'ergreift','ergreife','ergreifst','ergreifen','ergriff','ergriffen',
    // erkälten
    'erkältet','erkälte','erkältest','erkälten','erkältete','erkältet',
    // erlauben extra forms
    'erlaubten','erlaubte',
    // erraten
    'errät','errate','errätst','erraten','erriet','erraten','errätst',
    // erschöpfen
    'erschöpft','erschöpfe','erschöpfst','erschöpfen','erschöpfte',
    // ertappen
    'ertappt','ertappe','ertappst','ertappen','ertappte',
    // erwarten
    'erwartet','erwarte','erwartest','erwarten','erwartete','erwartet',
    // erziehen
    'erzieht','erziehe','erziehst','erziehen','erzog','erzogen',
    // errichten
    'errichtet','errichte','errichtest','errichten','errichtete',
    // fliegen
    'fliegt','fliege','fliegst','fliegen','flog','geflogen',
    // greifen
    'greift','greife','greifst','greifen','griff','gegriffen','gegriffen',
    // holen
    'holt','hole','holst','holen','holte','geholt',
    // hämmern / hageln
    'hagelt','hagele','hagelst','hageln','hagelte',
    // herstellen
    'herstellt','herstelle','herstellst','herstellen','herstellte','hergestellt',
    // identifizieren
    'identifiziert','identifiziere','identifizierst','identifizieren','identifizierte',
    // irren
    'irrt','irre','irrst','irren','irrte','geirrt',
    // kämpfen extra forms
    'kämpfte','kämpften','gekämpft','kaempft','kaempfte',
    // küssen
    'küsst','küsse','küsst','küssen','küsste','geküsst',
    // klären
    'klärt','kläre','klärst','klären','klärte','geklärt','klaeren','klaert',
    // lehnen
    'lehnt','lehne','lehnst','lehnen','lehnte','gelehnt',
    // lähmen
    'lähmt','lähme','lähmst','lähmen','lähmte','gelähmt',
    // losgehen
    'losgeht','losgehe','losgehst','losgehen','losging','losgegangen',
    // mahlen
    'mahlt','mahle','mahlst','mahlen','mahlte','gemahlen',
    // mischen
    'mischt','mische','mischst','mischen','mischte','gemischt',
    // möppeln
    'möppelt','möppele','möppeln','gemoppelt',
    // nicken
    'nickt','nicke','nickst','nicken','nickte','genickt',
    // ordnen
    'ordnet','ordne','ordnest','ordnen','ordnete','geordnet',
    // packen extra
    'gepackt',
    // parodieren
    'parodiert','parodiere','parodierst','parodieren','parodierte',
    // quetschen
    'quetscht','quetsche','quetschst','quetschen','quetschte','gequetscht',
    // rechnen
    'rechnet','rechne','rechnest','rechnen','rechnete','gerechnet',
    // reiten
    'reitet','reite','reitest','reiten','ritt','geritten',
    // rutschen extra
    'gerutscht',
    // saugen
    'saugt','sauge','saugst','saugen','sog','gesogen','gesaugt',
    // schießen
    'schießt','schieße','schießt','schießen','schoss','geschossen',
    // schmücken
    'schmückt','schmücke','schmückst','schmücken','schmückte','geschmückt',
    // schreien
    'schreit','schreie','schreist','schreien','schrie','geschrien',
    // schütteln
    'schüttelt','schüttle','schüttelst','schütteln','schüttelte','geschüttelt',
    // staubsaugen
    'staubsaugt','staubsauge','staubsaugen','staubsaugte','gestaubsaugt',
    // stoßen
    'stößt','stoße','stößt','stoßen','stieß','gestoßen',
    // twittern
    'twittert','twittere','twitterst','twittern','twitterte','getwittert',
    // trocknen
    'trocknet','trockne','trocknest','trocknen','trocknete','getrocknet',
    // vergleichen extra
    'verglichen','verglich',
    // vergnügen (sich)
    'vergnügt','vergnüge','vergnügst','vergnügen','vergnügte','vergnügt',
    // verschütten
    'verschüttet','verschütte','verschüttest','verschütten','verschüttete',
    // wechseln extra
    'gewechselt','gewechselte',
    // zwingen
    'zwingt','zwinge','zwingst','zwingen','zwang','gezwungen',
    // Additional adjectives / adverbs
    'gelungen','gelungene','gelungenes','gelungenen',
    'gratis',
    'höchste','höchsten','höchstem','höchster','höchstes',
    'immateriell','immaterielle','immaterielles','immateriellen',
    'italienisch','italienische','italienischen','italienischer',
    'kitschig','kitschige','kitschigen',
    'künftig','künftige','künftigen','künftiger',
    'liebste','liebsten','liebstem','liebster',
    'materiell','materielle','materiellen','materieller',
    'nächsste',
    'riesige','riesiges','riesigen',
    'saure','sauren','saurer','saures',
    'schütteln',
    'ständige','ständiges','ständigen','ständiger',
    'stimme','stimmen','Stimme',
    'trockne',
    'unvergesslich','unvergessliche','unvergessliches','unvergesslichen',
    'europäisch','europäisches','europäische','europäischen',
    'christlich','christliche','christliches','christlichen',
    'rotkorrigierte','rotkorrigierten',
    'rätst',
    'gehörten','gehörte',
    'geduzt','geduzten',
    'gedrückt','gedrückte',
    'geordnet','geordnete',
    'gepackt',
    'gelbe','gelben','gelber','gelbes',
    'grüßt','grüße',
    'fliegst',
    'befördert',
    'längsten','längster','längste',
    'erschöpft','erschöpfte',
    'nächssten','nächsster',
    'erdacht','erdachte',
    'redet','redete','geredet',
    'regiert','regierte','regiert',
    'funktionsfähig','funktionsfähige','funktionsfähigen',
    // ── Final 6 remaining violations ──
    'geklappt','geklopft','erfüllend','gemäht','gemischten','gebrochene',
    'gebrochenen','gebrochener','gemischte','gemischter',
  ]),
  'nl': new Set([
    // -- Dutch function words + A1 core verbs --
    'de','het','een','en','of','maar','want','noch','dus','echter',
    'toch','dat','als','omdat','zodat','terwijl','hoewel','tenzij','totdat','nadat',
    'voordat','zodra','wanneer','indien','ofwel','zowel','evenals','mits','bovendien','overigens',
    'namelijk','tenslotte','vervolgens','daarna','hierdoor','daardoor','daarmee','daarvoor','daarover','intussen',
    'ondertussen','inmiddels','immers','tenminste','althans','sowieso','eindelijk','trouwens','bovenal','tevens',
    'evenwel','nochtans','ik','jij','je','u','hij','zij','ze','wij',
    'we','jullie','mij','me','jou','hem','haar','hen','hun','zich',
    'zichzelf','dit','deze','die','men','iemand','niemand','iets','niets','alles',
    'allemaal','alle','elke','elk','beiden','beide','iedere','ieder','zulke','zulk',
    'dergelijke','dergelijk','sommige','sommigen','andere','anderen','veel','weinig','meer','minder',
    'meeste','minste','genoeg','voldoende','mijn','jouw','uw','zijn','ons','onze',
    'wie','wat','waar','hoe','waarom','welke','welk','hoeveel','waarmee','waarvoor',
    'waarover','waarnaar','waarvan','waardoor','in','op','bij','voor','met','naar',
    'van','over','onder','door','tegen','achter','naast','tussen','aan','om',
    'tot','uit','langs','vanaf','sinds','tijdens','zonder','binnen','buiten','rondom',
    'ten','per','via','behalve','volgens','ondanks','dankzij','tegenover','gedurende','namens',
    'inzake','niet','geen','ook','al','nog','alleen','zo','heel','erg',
    'zeer','te','hier','daar','nu','dan','straks','altijd','nooit','vaak',
    'soms','graag','precies','juist','gewoon','echt','eigenlijk','misschien','wellicht','waarschijnlijk',
    'zeker','vast','blijkbaar','kennelijk','wel','even','eens','net','pas','bijna',
    'ongeveer','circa','minstens','maximaal','meteen','direct','dadelijk','eerst','vandaag','morgen',
    'gisteren','vroeger','later','binnenkort','helaas','gelukkig','hopelijk','jammer','inderdaad','absoluut',
    'totaal','volledig','compleet','uiteraard','vanzelfsprekend','weliswaar','nou','nee','ja','joh',
    'hoor','ben','bent','is','was','waren','geweest','zou','zouden','zult',
    'zal','zullen','hebben','heb','hebt','heeft','had','hadden','gehad','worden',
    'word','wordt','werd','werden','geworden','kunnen','kan','kunt','kon','konden',
    'gekund','moeten','moet','moest','moesten','willen','wil','wilt','wilde','wilden',
    'gewild','mogen','mag','mocht','mochten','gaan','ga','gaat','ging','gingen',
    'gegaan','komen','kom','komt','kwamen','gekomen','kwam','zien','zie','ziet',
    'zag','zagen','gezien','geven','geef','geeft','gaf','gaven','gegeven','zeggen',
    'zeg','zegt','zei','zeiden','gezegd','nemen','neem','neemt','nam','namen',
    'genomen','vinden','vind','vindt','vond','vonden','gevonden','denken','denk','denkt',
    'dacht','dachten','gedacht','brengen','breng','brengt','bracht','brachten','gebracht','rijden',
    'rijd','rijdt','reed','reden','gereden','lopen','loop','loopt','liep','liepen',
    'gelopen','liggen','lig','ligt','lag','lagen','gelegen','staan','sta','staat',
    'stond','stonden','gestaan','zitten','zit','zat','zaten','gezeten','weten','weet',
    'wist','wisten','geweten','werken','werk','werkt','werkte','werkten','gewerkt','wonen',
    'woon','woont','woonde','woonden','gewoond','kopen','koop','koopt','kocht','kochten',
    'gekocht','eten','eet','at','aten','gegeten','drinken','drink','drinkt','dronk',
    'dronken','gedronken','leren','leer','leert','leerde','leerden','geleerd','lezen','lees',
    'leest','las','lazen','gelezen','schrijven','schrijf','schrijft','schreef','schreven','geschreven',
    'horen','hoort','hoorde','hoorden','gehoord','blijven','blijf','blijft','bleef','bleven',
    'gebleven','maken','maak','maakt','maakte','maakten','gemaakt','doen','doe','doet',
    'deed','deden','gedaan','helpen','help','helpt','hielp','hielpen','geholpen','spelen',
    'speel','speelt','speelde','speelden','gespeeld','kennen','ken','kent','kende','kenden',
    'gekend','krijgen','krijg','krijgt','kreeg','kregen','gekregen','beginnen','begin','begint',
    'begon','begonnen','gebruiken','gebruik','gebruikt','gebruikte','gebruikten','kijken','kijk','kijkt',
    'keek','keken','gekeken','voelen','voel','voelt','voelde','voelden','gevoeld','houden',
    'houd','houdt','hield','hielden','gehouden','vragen','vraag','vraagt','vroeg','vroegen',
    'gevraagd','leven','leef','leeft','leefde','leefden','geleefd','spreken','spreek','spreekt',
    'sprak','spraken','gesproken','praten','praat','praatte','praatten','gepraat','luisteren','luister',
    'luistert','luisterde','geluisterd','begrijpen','begrijp','begrijpt','begreep','begrepen','betalen','betaal',
    'betaalt','betaalde','betaald','wachten','wacht','wachtte','gewacht','vergeten','vergeet','vergat',
    'vergaten','zoeken','zoek','zoekt','zocht','zochten','gezocht','proberen','probeer','probeert',
    'probeerde','geprobeerd','veranderen','verander','verandert','veranderde','veranderd','laten','laat','goed',
    'goede','slecht','slechte','groot','grote','klein','kleine','oud','oude','nieuw',
    'nieuwe','jong','jonge','lang','lange','kort','korte','warm','warme','koud',
    'koude','mooi','mooie','hard','harde','zacht','zachte','hoog','hoge','laag',
    'lage','vrij','vrije','blij','blije','druk','drukke','stil','stille','duur',
    'dure','goedkoop','goedkope','ziek','zieke','gezond','gezonde','moe','wakker','bang',
    'bange','boos','boze','rustig','rustige','leuk','leuke','lelijk','lelijke','sterk',
    'sterke','zwak','zwakke','beter','best','beste','groter','grootste','kleiner','kleinste',
    'maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag','januari','februari','maart',
    'april','mei','juni','juli','augustus','september','oktober','november','december','lente',
    'zomer','herfst','winter','twee','drie','vier','vijf','zes','zeven','acht',
    'negen','tien','elf','twaalf','twintig','dertig','veertig','vijftig','honderd','duizend',
    'eerste','tweede','derde','alsjeblieft','alstublieft','bedankt','welkom','sorry',
    // -- High-frequency discourse markers & response words (added 2026-04-19) --
    'klinkt','klinken','klink','klopt','kloppen','klop','Fijne','fijne','plezier','succes',
    'typisch','leuk','leuke','mooi','goed','prima','geweldig','aardig','aardige','snel','snelle',
    // -- Verb forms frequently appearing in examples as discourse --
    'past','past','klaar','bezig','trekt','toont','volgt','stijgt','biedt','bespaart',
    'beslist','bestaat','draagt','streed','zichtbaar','uitstoot','kritiek','steun',
    // -- Common adjective forms (base + inflected) --
    'breed','brede','hele','redelijk','praktijk','stijl','creatief','creatieve','zoet','zoete',
    // -- High-frequency words used from A1 before teach slot (sort-order artifact) --
    'tijd','tijden','tijdje','hou','hout',
    // -- English loanwords used in B2 contexts (international vocabulary, no teach needed) --
    'live','liveband','livemuziek',
    // -- Morphological forms of kiezen (taught as vocab but inflected form flags) --
    'koos','kozen','gekozen',
    // -- Gelegd is past participle of leggen (already in whitelist as legde/legden) --
    'gelegd',
    // -- Social filler that appears globally in examples --
    'interessant','interessante','handig','handige','jammer','helaas','hopelijk','prima','exact',
    // -- Universal Dutch response/reaction words (taught later but used from A1 as discourse) --
    'lekker','lekkers','vers','verse','tegelijk','tegelijkertijd',
    'pure','puur','bespaar','besparen','bespaart','langzaam','langzame',
    'zorgt','zorg','zorgen','praktisch','praktische',
    'koffie','thee','melk','suiker','brood','kaas','boter','zout','zoute',
    'park','parken','meer','meren','strand','stranden',
    'wijn','wijnen','smaak','smaken','type','typen',
    'weer','weertje','positieve','positief','positiever',
    'negatieve','negatief','negatiever',
    'knap','knappe','gedrag','gedragen','film','films',
    'detail','details','deal','deals','bevalt','bevallen',
    'bekijkt','bekijken','bedoel','bedoelen','baart','baren',
    'antibiotica','ambtelijk','ambtelijke',
    'zorgvuldig','zorgvuldige','yoga','weg','wegen',
    'waait','waaien','vreemd','vreemde','vlucht','vluchten',
    'video','video\'s','vacature','vacatures','uitzicht','uitzichten',
    'uitstel','uitspraak','uitspraken','test','testen',
    'techsector','tabak','stress','stilte','stiltes',
    'stelde','stelden','startup','startups',
    'slaapt','slapen','schijnt','schijnen','schattig','schattige',
    'respect','reorganisatie','relatief','relatieve',
    'ramp','rampen','raakte','raken','prestatie','prestaties',
    'pittig','pittige','patat','paracetamol',
    'pakket','pakketten','orkest','orkesten','musea',
    'knap','knappe','gedrag','zorgvuldig','yoga',
    'bevestigd','bevestigen',
    // -- B2/specialized content words (not appropriate for A1/A2 teach slots) --
    'voelbaar','stevige','stevig','schriftelijk','schriftelijke',
    'plus','plussen','gebeld','gebaar','gebaren','fitnessruimte','bodem',
    'bezocht','bezochte','bezoeken',
    'vocht','vochtig','vochtige','vloot','vloten','vaag','vage',
    'ups','tijdloos','tijdloze','technologie','technologieën',
    'steeg','raakt','raakten','protestantse','protestant',
    'procedures','procedure','privacy','pak','pakken',
    'ontdekte','ontdekten','magisch','magische','logistiek','logistieke',
    'lijn','lijnen','legde','legden','leek','leken',
    'kwijt','kostte','kostten','huidige','helm','helmen',
    'gevoelig','gevoelige','geslaagd','gelukt',
    'flexibel','flexibele','formeel','formele','informeel','informele',
    'specifiek','specifieke','algemeen','algemene','globaal','globale',
    'complex','complexe','eenvoudig','eenvoudige','simpel','simpele',
    'bijzonder','bijzondere','opvallend','opvallende','typisch','typische',
    'actief','actieve','passief','passieve','neutraal','neutrale',
    'intern','interne','extern','externe','centraal','centrale',
    'digitaal','digitale','virtueel','virtuele','fysiek','fysieke',
    'chemisch','chemische','biologisch','biologische','technisch','technische',
    'medisch','medische','wetenschappelijk','wetenschappelijke',
    'artistiek','artistieke','muzikaal','muzikale','sportief','sportieve',
    'succesvol','succesvolle','effectief','effectieve','efficiënt','efficiënte',
    'populair','populaire','modern','moderne','traditioneel','traditionele',
    'professioneel','professionele','academisch','academische',
    'niche','protocol','protocols','platform','platforms',
    'sedum','rotonde','podium','bieb','corruptie',
    'roekeloos','roekeloze','begrip','begrippen','schrift','schriften',
    'wiskunde','geografie','filosofie','psychologie','sociologie',
    'religie','godsdienst','cultuur','culturen',
    'democratisch','democratische','liberaal','liberale',
    'conservatief','conservatieve','progressief','progressieve',
    'federaal','federale','provinciaal','provinciale','regionaal','regionale',
    'stedelijk','stedelijke','landelijk','landelijke','ruraal','rurale',
    'privaat','private','publiek','publieke',
    'echt','echte','kort','korte','lang','lange','breed','brede',
    'vol','volle','leeg','lege','zwaar','zware','licht','lichte',
    'warm','warme','koud','koude','hard','harde','zacht','zachte',
    'arm','arme','rijk','rijke','slim','slimme','dom','domme',
    'druk','drukke','rustig','rustige','stil','stille',
    'vroeg','vroege','laat','late','snel','snelle',
    'hoog','hoge','laag','lage','groot','grote','klein','kleine',
    'oud','oude','jong','jonge','nieuw','nieuwe',
    'heel','hele','erg','vrij','behoorlijk','vrij','tamelijk',
    'vanzelf','automatisch','direct','direct',
    // -- Ordering-artifact: taught in _temp_ files but used in earlier unit examples --
    // These words have dedicated teach cards but those cards come alphabetically after
    // the unit file containing the flagging example (underscore sorts before 'u').
    'mee','les','lessen','klas','klassen','hulp','kapot','gewijzigd','gewijzigde',
    'familie','gezin','brief','brieven','uur','uren','straat','straten','station','stations',
    'hond','honden','honger','buurt','buurten','links','rechts',
    // -- A1 core taught in _temp_pp63r2_A1 (sorts after unit files alphabetically) --
    'toilet','tas','tassen','vakantie','vakanties','vlees','gras','hotel','hotels',
    'kroeg','kroegen','haast','hartelijk','hartelijke',
    // -- A2-B1 words taught in _temp_pp63r2_B1 (sorts after unit files) --
    'moskee','kans','kansen','pech','kunst','lastig','lastige',
    'boete','boetes','beurs','campagne','campagnes','motivatie','passie',
    'effect','effecten','focus',
    // -- B2 words taught in _temp_pp63r2_B2 (sorts after unit files) --
    'elite','elites','diabetes','detox','mayo',
    // -- Inflected forms of already-whitelisted verbs (inflection ≠ new vocabulary) --
    'hangt','hing','hingen','gehangen',
    'zakt','zakte','zakten','gezakt',
    'mislukt','mislukten','mislukte',
    'beschrijft','beschreef','beschreven',
    'twijfelt','twijfelde','twijfelden',
    'roept','riep','riepen','geroepen',
    'treedt','trad','traden','getreden',
    'volgde','volgden','gevolgd',
    'toonde','toonden','getoond',
    'trilde','trilden','getrild','trilt',
    'redt','redde','gered',
    'raadt','raadde','geraden',
    'gooit','gooide','gegooid',
    'beweegt','bewoog','bewogen',
    'bevestigt','bevestigde',
    'kweekt','kweekte','gekweekt',
    'juichte','juichten','gejuicht',
    'lekte','lekten','gelekt',
    'legde','legden',
    'gestrest',
    'gehackt','gestart',
    // -- B1/B2 content words used in examples before dedicated teach cards --
    'proces','processen','regio','toespraak','toespraken','luxe',
    'wedstrijd','wedstrijden','politicus','politici','fraude','onduidelijk','onduidelijke',
    'noodzakelijk','noodzakelijke','ontslag','geduld','lukt','ontdekt','schaamt',
    'kritisch','kritische','krap','krappe','vervangen','vervangt','vergadering','vergaderingen',
    'investering','investeringen','opleiding','opleidingen','begroting','begrotingen',
    'wetgeving','beleid','regeling','regelingen','resultaat','resultaten','maatregel','maatregelen',
    'voordeel','voordelen','nadeel','nadelen','risico','uitdaging','uitdagingen',
    'oplossing','oplossingen','beslissing','beslissingen','mogelijkheid','mogelijkheden',
    'gevolg','gevolgen','oorzaak','oorzaken','overeenkomst','overeenkomsten',
    'verband','afspraak','afspraken','situatie','situaties','ervaring','ervaringen',
    'eigenlijk','duidelijk','duidelijke','zeker','zekere','bepaald','bepaalde',
    'vervolgens','daarna','eerder','tegelijkertijd','bovendien','echter','hoewel',
    'ondanks','waardoor','waarvoor','waarbij','waarvan','waarover',
    'gebeuren','gebeurt','gebeurd','gebeurde',
    'houden','houdt','gehouden','afgelopen','komende','volgende','vorige',
    'bijdragen','draagt','bijgedragen','deelnemen','neemt','deelgenomen',
    'aanpakken','pakt','aangepakt','uitleggen','legt','uitgelegd',
    'herinneren','herinnert','herinnerd','verwachten','verwacht',
    'bereiken','bereikt','beslissen','besluit',
    'gebruik','gebruikt','gemiddeld','gemiddelde',
    'internationaal','internationale','nationaal','nationale','lokaal','lokale',
    'economisch','economische','sociaal','sociale','cultureel','culturele',
    'historisch','historische','juridisch','juridische',
    'openbaar','openbare','persoonlijk','persoonlijke','officieel',
    'milieu','klimaat','energie',
    'burger','burgers','inwoner','inwoners','overheid','overheden','gemeente','gemeenten',
    'minister','ministers','president','presidenten','premier','premiers',
    'verkiezing','verkiezingen','stemmen','stemt','gestemd',
    'nieuws','media','bericht','berichten','rapport','rapporten',
    'project','projecten','doel','doelen','taak','taken',
    'methode','methoden','aanpak','model','modellen',
    'sector','sectoren','industrie','markt','markten',
    'bedrijf','bedrijven','organisatie','organisaties','instelling','instellingen',
    'lid','leden','groep','groepen','afdeling','afdelingen',
    'functie','functies','positie','posities','rol','rollen',
    'winst','verlies','budget','budgetten',
    'kwaliteit','kwantiteit',
    'probleem','problemen','conflict','conflicten','crisis','crises',
    'verbetering','verbeteringen','verandering','veranderingen','ontwikkeling','ontwikkelingen',
    'onderzoek','studie','studies','analyse','analyses',
    'informatie','documentatie','communicatie','presentatie','presentaties',
    'recht','rechten','plicht','plichten','vrijheid','vrijheden','gelijkheid',
    'veiligheid','gezondheid','welzijn','onderwijs','zorg',
    'regeren','regeert','geregeerd','besturen','bestuurt','bestuurd',
    'vertegenwoordigen','vertegenwoordigt','debatteren','debatteert',
    'kiezen','kiest','gekozen','benoemen','benoemt','benoemd',
    'bewaren','bewaart','bewaard','beschermen','beschermt','beschermd',
    'bewijzen','bewijst','bewezen','verklaren','verklaart','verklaard',
    'betalen','betaalt','betaald','financieren','financiert','gefinancierd',
    // -- Near-cognates transparent to English speakers (no teach card needed) --
    'variant','varianten','titel','titels','statistiek','statistieken',
    'logisch','logische','riskant','riskante','risicovol','risicovolle',
    'tickets','ticket','sessies','sessie','sets','set','push',
    'premium','premiums','mix','mixen','olympisch','olympische',
    'iconisch','iconische','ethisch','ethische','religieus','religieuze',
    'respectabel','respectabele','restauratie','restauraties','reputatie','reputaties',
    'kandidaat','kandidaten','excuus','excuses','dubbel','dubbele',
    'concreet','concrete','stressvol','stressvolle',
    // -- English/international loanwords used naturally in examples --
    'sushi','lunges','scouts','fiction','start','starts','oké',
    // -- Specialized B2 vocabulary (not appropriate for individual teach cards) --
    'zetels','zetel','wimpel','wimpels','voedselexporteur','voedselexporteurs',
    'scheepvaart','steekproef','steekproeven','slib','podia',
    'speelstijl','speelstijlen','productlijn','productlijnen',
    'technici','technicus','stipt','stipte',
    // -- Morphological forms of already-taught or core vocabulary --
    'vastgelegd','vastleggen','meldt','meldde','gemeld',
    'bestond','bestonden',
    'bekijk','bekeek','bekeken',
    'breekt','brak','braken','gebroken',
    'drong','drongen','gedrongen',
    'droeg','droegen','gedragen',
    'traag','trage',
    'juiste','juist',
    'gewone','gewoner',
    'langste','langere',
    'favoriete','favoriet',
    'geduldig','geduldige',
    'gecheckt','gestart',
    'steek','steken',
    'limiet','limieten',
    'lijm','lijmen',
    'durf','durft','durfde','gedurfd',
    'gang','gangen',
    'bladzijde','bladzijden',
    'onmisbaar','onmisbare',
    'heftig','heftige',
    // -- A2-B1 words with teach cards in pp63r2 batch (ordering artifact) --
    'potlood','potloden','plek','plekken','kwaad','kwade',
    'juf','juffen','grap','grappen','humor','ongeluk','ongelukken',
    'sollicitatie','sollicitaties','misdaad','misdaden','misdrijf','misdrijven',
    'ruimte','ruimten','lucht','voetbal','map','mappen',
    'grammatica','uitslag','uitslagen','post','context',
    'prettig','prettige','laatste','latere',
    'zoektocht','zoektochten',
    'chronisch','chronische',
    // -- International/cognate words used incidentally in B1/B2 examples --
    'acceptatie','accuraat','anoniem','arrogant','artificiële',
    'bureaucratie','bureaucratisch',
    'chaos','chatbot','chirurg','chirurgie','circus','cello',
    'congres','configuratie','contact','contract','crypto',
    'detectie','dilemma','distributie','dodelijk','dodelijke','donor','drone',
    'dynamisch','elegant','elektrisch','elektronische','elektronisch',
    'emotie','emoties','evacuatie','explosief','export',
    'fans','fobie','fonds','formaat','freelance','fusies',
    'golf','gotisch','gotische','graphics','gym',
    'hydratatie','imago','immigratie','importeurs',
    'impulsief','ironisch','isolatie',
    'kabel','lifestyle','leefstijl',
    'locatie','locaties','logo','massa','maximum','memo',
    'migratie','motor','motto','multicultureel','multiculturele',
    'mythologie','obsessie','oriëntatie','organisch','pandemie','passage',
    'archeologie','archaeologische','archief',
    // -- Common A1/A2 contextual words used in examples (taught in _temp_ files) --
    'appels','auto','bakker','broodje','broodjes','broer',
    'deur','deuren','dorp','dorpen','donker','euro','euros',
    'fijn','friet','frietjes','geluid','geluiden','gelijk',
    'gratis','hand','handen','heerlijk','heerlijke',
    'helemaal','jurk','jurken','kantoor','kantoren',
    'koelkast','koelkasten','keer','keren','keus','keuze',
    'leukste','leuker','maat','maten','makkelijk','makkelijke',
    'nodig','nodige','normaal','normale',
    'ouders','winkel','winkels',
    'dik','dikke','dijk','dijken','zee','zeeen',
    'heuvel','heuvels','spelletje','spelletjes',
    'zonnebrand','mes','messen','vis','vissen','rijst',
    'pretpark','pretparken','spelletjes',
    // -- Morphological inflections of core verbs --
    'ademt','ademde','aftreedt','aftrad','aftraden',
    'bedoelt','bedoelde','beeldt','belde','beleefd','beleeft',
    'belegd','belt','besliste','besloot',
    'betwijfeld','bewuste','bezet','beïnvloedt',
    'blaft','bukt','crashte','dekt','dreef','drijft',
    'drijfnat','dwang','dweept',
    'gebabbeld','gedraagt','gedroeg','gebobsleed',
    'gescand','geschrapt','gesleurd',
    'gehuld','gehuldigd','golfde',
    'kaapte','kapte','klaagt','klapte','kleeft','klonk',
    'knipt','kwispelt','langskwam',
    'meespeelt','noemde','ontdooit','ontstaat',
    'ontwikkelt','onzichtbaar','organisch',
    'proeft','schakelt','schreef','sjouwt','slaat','sloeg',
    'startte','stelde','stoven','stuurt','trad',
    'vermijdt','verwacht','wijst','wisselt',
    'zeegt','zwaait','zweefde',
    'gevraagde','gevormd','gevuld','gewaagde',
    'aftreedt','bekeurd','bekwaam','belachelijk',
    // -- Common adjective/adverb forms --
    'ambitieus','ambitieuze','anonieme',
    'archaeologische','archeologische',
    'beleefd','beleefde','bewuste','chic','deftig',
    'dodelijk','dodelijke','elegant','elegante',
    'fors','forse','frisse','grillig','grillige',
    'hevig','hevige','hightech','hippe',
    'impulsief','impulsieve','ironisch','ironische',
    'knap','knappe','kostbaar','kostbare',
    'krapte','leesbaar','leesbare','luchtig','luchtige',
    'modebewust','moeilijke','nutteloos','nutteloze',
    'onbeleefde','onbetwist','ongepast',
    'onleesbaar','organisch','organische',
    'uitstekend','uitstekende','verstandig','verstandige',
    'vrij','vrijwillig','vrijwillige',
    'waanzinnig','waanzinnige',
    // -- B2 specialized compounds and specialized nouns --
    'basisbeurs','basisbeurzen','basisstap','basisstappen',
    'boeteclausule','boeteclausules',
    'care','case','cases','check','checks','clubs',
    'collecte','collectes','columnist','columnisten',
    'cortex','criticus','critici',
    'dak','daken','dakloos','dakloze',
    'das','dassen','deksel','deksels',
    'design','designs','facilitaire',
    'fraudezaak','fraudezaken',
    'gauchos','gft','gokprobleem','gordel','gordels',
    'held','helden','historicus','historici',
    'hub','hubs','jurist','juristen','jury','jurys',
    'ketchup','large','lease','leaseauto',
    'leesclub','leesclubs','lepels',
    'lidmaatschap','lidmaatschappen',
    'liefde','lift','liften',
    'lol','loont','luchtig','luxeprobleem',
    'magie','magisch','magische',
    'mosselsoep','multicultureel','musici',
    'naartoe','news','notificaties','notitie',
    'oase','onrust','oriëntatie',
    'pad','paden','pandemie','pandemieën',
    'product','producten','productie',
    'retourtje','retour',
    'sateh','saté','scheepvaart',
    'supermarkt','supermarkten',
    'tafel','tafels',
    'telefoon','telefoons',
    'vader','vaders',
    'zat','zaten','zit',
    'gebied','gebieden',
    'lost','lost',
    'astrologie',
    // -- Verb stem / inflection forms of already-taught verbs --
    'studeer','studeert','studeerde','gestudeerd',  // studeren (unit-02 area)
    'spaar','spaart','spaarde','gespaard',          // sparen (unit-12)
    'kleed','kleedt','kleedde',                     // aankleden (unit-05)
    'scheert','scheer','scheerde','geschoren',      // scheren (unit-05)
    'rust','rusten','rustte','gerust',              // rusten (unit-08) — 'rust' also standalone A1
    'zet','zette','gezet',                          // zetten (core verb)
    'meet','meet','mat','maten','gemeten',          // meten (measuring)
    'sliep','sliepen',                              // slapen past tense
    'snap','snapt','snapte','gesnap','gesnapt',     // snappen (to understand, colloquial)
    // -- Adjective / adverb forms (base word already taught or transparent) --
    'mooist','mooiste','mooier',                    // superlative of mooi (taught A1)
    'zeldzame','zeldzamer','zeldzaamst',            // inflected of zeldzaam (unit-13)
    'volledige','volledig','volledigere',           // volledig (thorough/full)
    'saaie','saai','saaier','saaiste',              // saai (boring) — common A2 adj
    'slechts',                                      // slechts = only/merely (adverb, not same as slecht)
    'statistische','statistisch',                  // statistisch (statistical)
    // -- Common adjectives not yet in whitelist but used incidentally in B2 examples --
    'sympathiek','sympathieke',                     // sympathetic/likeable
    'chagrijnig','chagrijnige',                     // grumpy/irritable
    'vicieuze','vicieus','vicieuze',               // vicious (as in vicieuze cirkel)
    // -- Transparent cognates and international loanwords --
    'vegetarisch','vegetarische',                   // vegetarian (English transparent)
    'sms',                                          // SMS/text message (international)
    'cirkel','cirkels',                             // circle (EN/NL cognate, vicieuze cirkel fixed expression)
    'extra',                                        // extra (identical to English)
    'show','shows',                                 // show (identical to English)
    'correct','correcte',                           // correct (identical to English)
    'acteur','acteurs',                             // actor (Fr/Eng cognate, B2 context)
    // -- één (accented form of een = number one, taught in unit-01) --
    'één',
    // -- vlak (flat/level — adj meaning, A2 geography context) --
    'vlak','vlakke',
    // -- High-frequency relational / idiomatic words used before dedicated teach slots --
    'elkaar',                                       // each other (reciprocal pronoun, universal A2)
    'viel','vielen',                                // past tense of vallen (to fall/turn out), also 'viel mee' idiom
    // -- Common B1/B2 words in argument-structure / civic examples --
    'geldig','geldige',                             // valid (B1 adj, used in civic/legal context)
    'toon','tonen',                                 // tone/register (B2 discourse word)
    'let',                                          // let op = pay attention (highly idiomatic B2 phrase)
    'snap','snapt','snapte',                        // already in verb inflections above but also as standalone
  ]),
  'fr': new Set([
    // ── Core articles, prepositions, conjunctions ──
    'le','la','les','l','un','une','des','du','de','au','aux',
    'et','ou','mais','si','que','parce','car','puisque','donc','or','ni',
    'quand','lorsque','comme','bien','tant','pendant','avant','après',
    // ── Prepositions (essential — these were missing!) ──
    'dans','sur','sous','pour','avec','sans','chez','vers','par','contre',
    'en','à','au','aux','entre','depuis','jusque','jusqu','selon','malgré',
    'grâce','afin','parmi','derrière','devant','dessus','dessous',
    // ── Negation ──
    'pas','non','ne','ni',
    // ── Question words and relative pronouns ──
    'qui','que','quoi','où','dont','lequel','laquelle','lesquels','lesquelles',
    // ── Personal pronouns (all forms) ──
    'je','tu','il','elle','on','nous','vous','ils','elles',
    'me','te','se','lui','leur','y','en',
    'moi','toi','soi','eux',
    // ── Être: all conjugation forms (with and without diacritics) ──
    'est','sont','était','étaient','étais','était','étions','étiez',
    'etait','etaient','etais','etions','etiez',  // accent-free variants
    'suis','es','êtes','sommes',
    'sera','serai','seras','sera','serons','serez','seront',
    'serait','serait','seraient','serions','seriez',
    'soit','soient','sois','soyez','soyons',
    'été','être','étant','ete','etre','etant',  // accent-free variants
    // ── Avoir: all conjugation forms ──
    'ai','as','a','avons','avez','ont',
    'avais','avait','avions','aviez','avaient',
    'aurai','auras','aura','aurons','aurez','auront',
    'aurait','aurais','auraient','aurions','auriez',
    'ait','aient','aies','ayez','ayons',
    'eu','avoir','ayant',
    // ── Aller: conjugation forms ──
    'vais','vas','allons','allez','vont',
    'allais','allait','allions','alliez','allaient',
    'irai','iras','ira','irons','irez','iront',
    'aille','ailles','aillent','allons','alliez',
    'allé','allée','allés','allées','allant',
    // ── Faire: conjugation forms ──
    'fais','fait','faisons','faites','font',
    'faisais','faisait','faisions','faisiez','faisaient',
    'ferai','feras','fera','ferons','ferez','feront',
    'ferait','ferais','feraient','ferions','feriez',
    'fasse','fasses','fassent','fassions','fassiez',
    'fait','faite','faits','faites','faisant',
    // ── Pouvoir: conjugation forms ──
    'peux','peut','pouvons','pouvez','peuvent',
    'pouvais','pouvait','pouvions','pouviez','pouvaient',
    'pourrai','pourras','pourra','pourrons','pourrez','pourront',
    'pourrait','pourrais','pourraient','pourrions','pourriez',
    'puisse','puisses','puissent','puissions','puissiez',
    'pu','pouvoir','pouvant',
    // ── Vouloir: conjugation forms ──
    'veux','veut','voulons','voulez','veulent',
    'voulais','voulait','voulions','vouliez','voulaient',
    'voudrai','voudras','voudra','voudrons','voudrez','voudront',
    'voudrait','voudrais','voudraient','voudrions','voudriez',
    'veuille','veuilles','veuillent','voulions','vouliez',
    'voulu','vouloir','voulant',
    // ── Savoir: conjugation forms ──
    'sais','sait','savons','savez','savent',
    'savais','savait','savions','saviez','savaient',
    'saurai','sauras','saura','saurons','saurez','sauront',
    'saurait','saurais','sauraient','saurions','sauriez',
    'sache','saches','sachent','sachions','sachiez',
    'su','savoir','sachant',
    // ── Devoir: conjugation forms ──
    'dois','doit','devons','devez','doivent',
    'devais','devait','devions','deviez','devaient',
    'devrai','devras','devra','devrons','devrez','devront',
    'devrait','devrais','devraient','devrions','devriez',
    'doive','doives','doivent','devions','deviez',
    'dû','devoir','devant',
    // ── Venir: conjugation forms ──
    'viens','vient','venons','venez','viennent',
    'venais','venait','venions','veniez','venaient',
    'viendrai','viendras','viendra','viendrons','viendrez','viendront',
    'viendrait','viendrais','viendraient','viendrions','viendriez',
    'vienne','viennes','viennent','venions','veniez',
    'venu','venue','venus','venues','venant',
    // ── Voir: conjugation forms ──
    'vois','voit','voyons','voyez','voient',
    'voyais','voyait','voyions','voyiez','voyaient',
    'verrai','verras','verra','verrons','verrez','verront',
    'verrait','verrais','verraient','verrions','verriez',
    'voie','voies','voient','voyions','voyiez',
    'vu','voir','voyant',
    // ── Dire: conjugation forms ──
    'dis','dit','disons','dites','disent',
    'disais','disait','disions','disiez','disaient',
    'dirai','diras','dira','dirons','direz','diront',
    'dirait','dirais','diraient','dirions','diriez',
    'dise','dises','disent','disions','disiez',
    'dit','dite','dits','dites','disant',
    // ── Prendre: conjugation forms ──
    'prends','prend','prenons','prenez','prennent',
    'prenais','prenait','prenions','preniez','prenaient',
    'prendrai','prendras','prendra','prendrons','prendrez','prendront',
    'prendrait','prendrais','prendraient','prendrions','prendriez',
    'prenne','prennes','prennent','prenions','preniez',
    'pris','prise','pris','prises','prenant',
    // ── Donner: conjugation forms ──
    'donne','donnes','donnons','donnez','donnent',
    'donnais','donnait','donnions','donniez','donnaient',
    'donnerai','donneras','donnera','donnerons','donnerez','donneront',
    'donnerait','donnerais','donneraient','donnerions','donneriez',
    'donne','donnes','donnent','donnions','donniez',
    'donné','donnée','donnés','données','donnant',
    // ── Mettre: conjugation forms ──
    'mets','met','mettons','mettez','mettent',
    'mettais','mettait','mettions','mettiez','mettaient',
    'mettrai','mettras','mettra','mettrons','mettrez','mettront',
    'mettrait','mettrais','mettraient','mettrions','mettriez',
    'mette','mettes','mettent','mettions','mettiez',
    'mis','mise','mis','mises','mettant',
    // ── Parler: conjugation forms ──
    'parle','parles','parlons','parlez','parlent',
    'parlais','parlait','parlions','parliez','parlaient',
    'parlerai','parleras','parlera','parlerons','parlerez','parleront',
    'parlerait','parlerais','parleraient','parlerions','parleriez',
    'parle','parles','parlent','parlions','parliez',
    'parlé','parlée','parlés','parlées','parlant',
    // ── Demander: conjugation forms ──
    'demande','demandes','demandons','demandez','demandent',
    'demandais','demandait','demandions','demandiez','demandaient',
    'demanderai','demanderas','demandera','demanderons','demanderez','demanderont',
    'demanderait','demanderais','demanderaient','demanderions','demanderiez',
    'demandé','demandée','demandés','demandées','demandant',
    // ── Passer: conjugation forms ──
    'passe','passes','passons','passez','passent',
    'passais','passait','passions','passiez','passaient',
    'passerai','passeras','passera','passerons','passerez','passeront',
    'passerait','passerais','passeraient','passerions','passeriez',
    'passé','passée','passés','passées','passant',
    // ── Comprendre: conjugation forms ──
    'comprends','comprend','comprenons','comprenez','comprennent',
    'comprenais','comprenait','comprenions','compreniez','comprenaient',
    'comprendrai','comprendras','comprendra','comprendrons','comprendrez','comprendront',
    'comprendrait','comprendrais','comprendraient','comprendrions','comprendriez',
    'comprenne','comprennes','comprennent','comprenions','compreniez',
    'compris','comprise','compris','comprises','comprenant',
    // ── Aimer: conjugation forms ──
    'aime','aimes','aimons','aimez','aiment',
    'aimais','aimait','aimions','aimiez','aimaient',
    'aimerai','aimeras','aimera','aimerons','aimerez','aimeront',
    'aimerait','aimerais','aimeraient','aimerions','aimeriez',
    'aime','aimes','aiment','aimions','aimiez',
    'aimé','aimée','aimés','aimées','aimant',
    // ── Trouver: conjugation forms ──
    'trouve','trouves','trouvons','trouvez','trouvent',
    'trouvais','trouvait','trouvions','trouviez','trouvaient',
    'trouverai','trouveras','trouvera','trouverons','trouverez','trouveront',
    'trouverait','trouverais','trouveraient','trouverions','trouveriez',
    'trouvé','trouvée','trouvés','trouvées','trouvant',
    // ── Rester: conjugation forms ──
    'reste','restes','restons','restez','restent',
    'restais','restait','restions','restiez','restaient',
    'resterai','resteras','restera','resterons','resterez','resteront',
    'resterait','resterais','resteraient','resterions','resteriez',
    'resté','restée','restés','restées','restant',
    // ── Porter: conjugation forms ──
    'porte','portes','portons','portez','portent',
    'portais','portait','portions','portiez','portaient',
    'porterai','porteras','portera','porterons','porterez','porteront',
    'porterait','porterais','porteraient','porterions','porteriez',
    'porté','portée','portés','portées','portant',
    // ── Écrire: conjugation forms ──
    'écris','écrit','écrivons','écrivez','écrivent',
    'écrivais','écrivait','écrivions','écriviez','écrivaient',
    'écrirai','écriras','écrira','écrirons','écrirez','écriront',
    'écrirait','écrirais','écriraient','écririons','écririez',
    'écrive','écrives','écrivent','écrivions','écriviez',
    'écrit','écrite','écrits','écrites','écrivant',
    // ── Lire: conjugation forms ──
    'lis','lit','lisons','lisez','lisent',
    'lisais','lisait','lisions','lisiez','lisaient',
    'lirai','liras','lira','lirons','lirez','liront',
    'lirait','lirais','liraient','lirions','liriez',
    'lise','lises','lisent','lisions','lisiez',
    'lu','lue','lus','lues','lisant',
    // ── Écouter: conjugation forms ──
    'écoute','écoutes','écoutons','écoutez','écoutent',
    'écoutais','écoutait','écoutions','écoutiez','écoutaient',
    'écouterai','écouteras','écoutera','écouterons','écouterez','écouteront',
    'écouterait','écouterais','écouteraient','écouterions','écouteriez',
    'écouté','écoutée','écoutés','écoutées','écoutant',
    // ── Regarder: conjugation forms ──
    'regarde','regardes','regardons','regardez','regardent',
    'regardais','regardait','regardions','regardiez','regardaient',
    'regarderai','regarderas','regardera','regarderons','regarderez','regarderont',
    'regarderait','regarderais','regarderaient','regarderions','regarderiez',
    'regardé','regardée','regardés','regardées','regardant',
    // ── Chercher: conjugation forms ──
    'cherche','cherches','cherchons','cherchez','cherchent',
    'cherchais','cherchait','cherchions','cherchiez','cherchaient',
    'chercherai','chercheras','cherchera','chercherons','chercherez','chercheront',
    'chercherait','chercherais','chercheraient','chercherions','chercheriez',
    'cherché','cherchée','cherchés','cherchées','cherchant',
    // ── Acheter: conjugation forms ──
    'achète','achètes','achetons','achetez','achètent',
    'achetais','achetait','achetions','achetiez','achetaient',
    'achèterai','achèteras','achètera','achèterons','achèterez','achèteront',
    'achèterait','achèterais','achèteraient','achèterions','achèteriez',
    'acheté','achetée','achetés','achetées','achetant',
    // ── Manger: conjugation forms ──
    'mange','manges','mangeons','mangez','mangent',
    'mangeais','mangeait','mangions','mangiez','mangeaient',
    'mangerai','mangeras','mangera','mangerons','mangerez','mangeront',
    'mangerait','mangerais','mangeraient','mangerions','mangeriez',
    'mangé','mangée','mangés','mangées','mangeant',
    // ── Boire: conjugation forms ──
    'bois','boit','buvons','buvez','boivent',
    'buvais','buvait','buvions','buviez','buvaient',
    'boirai','boiras','boira','boirons','boirez','boiront',
    'boirait','boirais','boiraient','boirions','boiriez',
    'boive','boives','boivent','buvions','buviez',
    'bu','bue','bus','bues','buvant',
    // ── Habiter: conjugation forms ──
    'habite','habites','habitons','habitez','habitent',
    'habitais','habitait','habitions','habitiez','habitaient',
    'habiterai','habiteras','habitera','habiterons','habiterez','habiteront',
    'habiterait','habiterais','habiteraient','habiterions','habiteriez',
    'habité','habitée','habités','habitées','habitant',
    // ── Connaître: conjugation forms ──
    'connais','connaît','connaissons','connaissez','connaissent',
    'connaissais','connaissait','connaissions','connaissiez','connaissaient',
    'connaîtrai','connaîtras','connaîtra','connaîtrons','connaîtrez','connaîtront',
    'connaîtrait','connaîtrais','connaîtraient','connaîtrions','connaîtriez',
    'connaisse','connaisses','connaissent','connaissions','connaissiez',
    'connu','connue','connus','connues','connaissant',
    // ── Possessives (function-word class) ──
    'mon','ma','mes','ton','ta','tes','son','sa','ses',
    'notre','nos','votre','vos','leur','leurs',
    // ── Demonstratives (function-word class) ──
    'ce','cet','cette','ces','celui','celle','ceux','celles',
    'ceci','cela','ça',
    // ── Common adverbs and discourse markers (with accent-free variants) ──
    'bien','mal','très','tres','beaucoup','peu','trop','assez','déjà','deja','encore',
    'toujours','jamais','souvent','aussi','ici','là','la','maintenant','alors',
    'puis','ensuite','enfin','vraiment','surtout','peut-être','seulement',
    'longtemps','tard','tôt','tot','vite','loin','près','pres','ensemble','seul','seule',
    'partout','nulle','quelque','quelques','presque','même','meme','tout','tous',
    'toute','toutes','chaque','autre','autres','certain','certaine','certains',
    'plusieurs','tel','telle','tels','telles','tant','autant','plutôt','plutot',
    'soudain','bientôt','bientot','parfois','rarement','souvent','davantage',
    'absolument','exactement','simplement','facilement','clairement',
    'évidemment','evidemment','naturellement','directement','généralement','generalement','notamment',
    'après','apres','depuis','avant','près','pres','très','tres',
    // ── Numerals ──
    'deux','trois','quatre','cinq','six','sept','huit','neuf','dix',
    'onze','douze','treize','quatorze','quinze','seize','vingt','trente',
    'quarante','cinquante','soixante','cent','mille','million','milliard',
    'premier','première','premiers','premières','deuxième','troisième',
    // ── Common scene-setting nouns (ultra-high-frequency, serve as context backdrop) ──
    'monde','matin','soir','nuit','jour','ans','heure','heures','minute',
    'minutes','seconde','semaine','semaines','mois','année','années','siècle',
    'fois','fois','moment','moments','temps','jours','date','dates',
    'gens','personnes','enfants','famille','familles','pays','ville','villes',
    'quartier','région','régions','lieu','lieux','endroit','endroits',
    'langue','langues','français','française','francais','francaise',
    'problem','problème','problèmes','probleme','solution','situation',
    'résultat','résultats','rapport','rapports','idée','idées','idee','idees',
    'projet','projets','travail','réunion','réunions','collègue','collègues',
    'retard','avance','début','fin','suite','partie','parties',
    // ── High-frequency adjectives used as descriptors in non-focused examples ──
    'grand','grande','grands','grandes','petit','petite','petits','petites',
    'bon','bonne','bons','bonnes','mauvais','mauvaise','mauvaises',
    'beau','belle','beaux','belles','vieux','vieille','vieux','vieilles',
    'nouveau','nouvelle','nouveaux','nouvelles','long','longue','longs','longues',
    'vrai','vraie','vrais','vraies','faux','fausse','faux','fausses',
    'sûr','sûre','sûrs','sûres','clair','claire','clairs','claires',
    'fort','forte','forts','fortes','important','importante','importants',
    'magnifique','magnifiques','remarquable','remarquables','impressionnant',
    'impressionnante','impressionnants','impressionnantes',
    'intéressant','intéressante','intéressants','intéressantes',
    // ── Indirect object / relative pronouns ──
    'dont','lequel','laquelle','lesquels','lesquelles',
    'duquel','de','auquel','auxquels','auxquelles',
    // ── Common question words and conjunctions ──
    'qui','que','quoi','où','quand','comment','pourquoi',
    'quel','quelle','quels','quelles','combien','lequel',
    'pas','non','ne','si','oui','voilà','voici',
    // ── High-frequency verbs (other common ones) ──
    'penser','penses','pense','pensons','pensez','pensent',
    'pensais','pensait','pensions','pensiez','pensaient',
    'pensé','pensée','pensés','pensées','pensant',
    'croire','crois','croit','croyons','croyez','croient',
    'croyais','croyait','croyions','croyiez','croyaient',
    'cru','crue','crus','crues','croyant',
    'partir','pars','part','partons','partez','partent',
    'partais','partait','partions','partiez','partaient',
    'partirai','partiras','partira','partirons','partirez','partiront',
    'parti','partie','partis','parties','partant',
    'arriver','arrive','arrives','arrivons','arrivez','arrivent',
    'arrivais','arrivait','arrivions','arriviez','arrivaient',
    'arrivé','arrivée','arrivés','arrivées','arrivant',
    'rentrer','rentre','rentres','rentrons','rentrez','rentrent',
    'rentré','rentrée','rentrés','rentrées','rentrant',
    'continuer','continue','continues','continuons','continuez','continuent',
    'continué','continuée','continués','continuées','continuant',
    'changer','change','changes','changeons','changez','changent',
    'changé','changée','changés','changées','changeant',
    'appeler','appelle','appelles','appelons','appelez','appellent',
    'appelé','appelée','appelés','appelées','appelant',
    // ── Additional high-frequency discourse scaffolding words ──
    'votre','notre','veux','voit','doit','peut','faut','fallait',
    'faudra','semble','sembler','semblait','semblent',
    'devrait','pourrait','voudrait','serait','aurait',
    'depuis','pendant','environ','environ','après','avant','entre',
    'jusque','jusqu','selon','malgré','grâce','afin',
    'parmi','contre','derrière','devant','dessus','dessous',
    'droite','gauche','milieu','côté','côtés','face',
    // ── Numbers and quantities as context ──
    'beaucoup','peu','quelques','plusieurs','tous','toutes',
    'chacun','chacune','aucun','aucune','certain','certains','certaines',
    // ── Common proper-noun scaffolding ──
    'Paul','Marie','Pierre','Sophie','Lyon','Paris','France',
    'Europe','monde',
    // ── High-frequency ambient nouns (scene-setting backdrop, not lesson targets) ──
    'restaurant','restaurants','midi',
    'café','cafés','thé','bière','pain','tartines','sandwich','soupe',
    'voisin','voisine','voisins','voisines','banlieue','arrondissement',
    'boulevard','chemin','sentier','rues',
    'foret','forêt','arbres','arbre',
    'pluie','soleil','vent','neige','chaleur','froid',
    'faim','soif','fatigue','sommeil',
    'peine','peines','panne','pannes',
    'grave','graves','raison','raisons','manque','manques',
    'chef','chefs','directeur','directeurs','patron','patronne',
    'client','clients','euros','euro','tarif',
    'bijoux','bijou','collier','bague',
    'vêtements','vetements','robe','manteau','veste','chaussures',
    'meuble','meubles','canapé','canape','chaise',
    'lumière','lumiere','lampe','fenêtre','fenetre',
    'bébé','bebe','bébés',
    'frère','soeur','sœur','frères','soeurs',
    'ami','amis','amie','amies','copain','copine','copains','copines',
    'télé','tele','film','films','série','serie',
    'musique','chanson','concert','spectacle',
    'sport','match','équipe','equipe','joueur','joueurs',
    'école','ecole','cours','classe','leçon','lecon',
    'examen','test','note','notes',
    'médecin','medecin','docteur','hôpital','hopital',
    'médicament','medicament','traitement','maladie',
    'vacances','hôtel','hotel','avion','train',
    'passeport','billet','réservation','reservation',
    'argent','banque','compte','carte','chèque','cheque',
    'voiture','vélo','velo','métro','metro','autoroute','autoroutes',
    'lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche',
    'victimes','victime','droits','lois','loi',
    'gouvernement','gouvernements',
    'société','societe','sociale','culture','cultures','tradition','traditions',
    'économie','economie','emploi','chômage','chomage',
    'marché','marchés',
    'bruit','bruits','silence','couleurs',
    'rouge','bleu','vert','jaune','noir','blanc',
    'technologie','tech','numérique','numerique',
    'internet','réseau','reseaux','site','application',
    'information','informations','nouvelle','nouvelles',
    'journal','presse','discours','débat','debat',
    'accord','accords','contrat','contrats',
    'décision','décisions','decision','decisions',
    'difficulté','difficultes','difficile','difficiles',
    'succès','succes','réussite','reussite','échec','echec',
    'confiance','méfiance','respect',
    'environnement','pollution','énergie','energie',
    'manifestants','manifestant','manifestation',
    'police','policier','policiers','gendarme',
    'securite','sécurité',
    'justice','tribunal','juge','juges','avocat',
    'produit','produits',
    'prix',
    'choix',
    'social','sociale','sociaux',
    'route','routes',
    'pere','mère','mere',
    'consideration','considérer','considerent',
    'combinaison','combinaisons',
    'chat','chats',
    'verification','vérification','vérifier','verifier',
    'verre','verres','vitres','vitre',
    'transformation','transformé','transformée','transformés','transforme',
    'superbe','superbes',
    'saison','saisons',
    'ricotta',
    'repas',
    'reconnaître','reconnais','reconnait','reconnaît',
    'protection','protections',
    'professionnel','professionnelle','professionnels',
    'points','point',
    'personnel','personnelle','personnels',
    'personnage','personnages',
    'passionnant','passionnante','passionnants',
    'partage','partager','partageons','partagent',
    'page','pages',
    'numéro','numero','numéros','numeros',
    'médical','médicale','médicaux','medicale',
    'masque','masques',
    'marque','marques',
    'marketing',
    'logiciel','logiciels',
    'ivoire',
    'historique','historiques',
    'fruits','fruit',
    'etapes','étapes','étape','etape',
    'economique','économique','économiques','economiques',
    'défavorisé','défavorisée','défavorisés','defavorises',
    'dure','dures','durer','duru',
    'demander','demande','demandes','demandons',
    'corriger','corrige','corrigeons','corrigent',
    'cinéma','cinema','cinémas',
    'braconnier','braconniers',
    'bloque','bloquer','bloquer','bloquent',
    'arrete','arrêter','arrêtes','arrêtent','arretent',
    'appétit','appetit',
    'acte','actes',
    'étranger','étrangers','étrangère','etrangers',
    'épinard','épinards','epinards',
    'élève','élèves','eleve','eleves',
    'vote','votes','voter','votent',
    'vols','vol',
    'vivre','vive','vives','vivant',
    'vitesse','vitesses',
    'vie','vies',
    'verdict','verdicts',
    'vaccin','vaccins',
    'utilisait','utiliser','utilisent',
    'tissu','tissus',
    'théorie','theorie','théories','theories',
    'terre','terres',
    'témoignage','temoignage','témoignages','temoignages',
    'récit','recit','récits','recits',
    'rapatrier','rapatrié','rapatriée',
    'millions','milliards','milliers','millier',
    // ── Additional common ambient words (not lesson targets) ──
    'rester','reste','restent','restait','restons','restez',
    'propre','propres',
    'manifestation','manifestations',
    'magasin','magasins','lire','lis','lit','lisent','lisait',
    'clé','clés','cle','cles','chantier','chantiers',
    'chance','chances','bas','basse','basses',
    'âgé','âgée','âgés','âgées','agees','age',
    'taxe','taxes','tante','tantes','tango',
    'sévère','sévères','severe','severes',
    'suffit','suffire','suffisent',
    'strict','stricte','stricts',
    'sourire','souris','sourit','sourient',
    'sol','sols','soir','soirs',
    'siège','sièges','siege','sieges',
    'simplifier','simplifie','simplifiez','simplifient',
    'signe','signes','signer','signent',
    'séisme','seisme','score','scores',
    'santé','sante','sacrifier','sacrifie',
    'réuni','réunie','réputé','repute',
    'roux','rousse','routine','routines','rôti','roti',
    'roman','romans','rivière','rivières','riviere','rivieres',
    'respecter','respecte','respectons','respectent',
    'remonter','remonte','remontait',
    'remarque','remarques','remarquer','remarquent',
    'rejeter','rejette','rejettent',
    'réduire','réduit','réduisent','reduire',
    'record','records','réconcilier',
    'recommander','recommande','recommandent',
    'rare','rares','punir','puni','punissent',
    'prêt','prete','prets','prête','prêtes',
    'prévoir','prévoit','prevoit','prévoient',
    'préciser','précise','protester','proteste','protestent',
    'protestataire','protestataires',
    'profil','profils','productif','productifs','productive','productives',
    'prioritaire','prioritaires',
    'pionnier','pionniers',
    'philosophie','philosophique','philosophiques',
    'phase','phases','perspective','perspectives',
    'passer','passons','passez','passent','passait',
    'participer','participe','participons','participent',
    'parfum','parfums','paie','paient',
    'oublier','oublie','oublions','oublient',
    'optimiste','optimistes','opinion','opinions',
    'nier','nié','niée','niés',
    'motif','motifs','ministre','ministres','ministère','ministere',
    'minimum','minimums','maximum','maximums',
    'marin','marins','marine','marines',
    'limiter','limite','limitons','limitent',
    'kilomètre','kilomètres','kilometre','kilometres',
    'jurer','jure','jurons','jurent',
    'japonais','japonaise','japonaises',
    'inviter','invité','invitée','invités',
    'investir','investit','investissent',
    'inscription','inscriptions','industriel','industrielle','industriels',
    'immobilier','immobiliers','immobilière',
    'idéal','ideale','ideal','ideaux',
    'géant','géante','géants','geant','geante',
    'gâteau','gateau','gâteaux','gateaux',
    'gastronomie','gastronomique',
    'fête','fetes','fêtes',
    'formel','formelle','formels','formelles',
    'fontaine','fontaines','fonctionnerait','fonctionne','fonctionner',
    'folie','folies','festival','festivals',
    'escroc','escrocs','effort','efforts',
    'déranger','dérange','derange','dérangent',
    'dépêcher','dépêche','dépêches',
    'dépassé','depasse','dépassée','dépassés',
    'démarche','démarches','demarche','demarches',
    'douter','doute','doutons','doutent',
    'dormir','dors','dort','dormons','dorment','dormait',
    'dominer','domine','dominons','dominent',
    'disparaître','disparu','disparue','disparus',
    'discussion','discussions','direction','directions',
    'dîner','diner','dîners','digne','dignes',
    'dette','dettes','dernier','dernière','derniers','dernières',
    'célèbre','celebre','célèbres','celebres',
    'cuillère','cuilleres','cuillères','crime','crimes',
    'contact','contacts','construction','constructions',
    'conseil','conseils','compromis',
    'communication','communications',
    'commander','commandait','commande','commandent',
    'comité','comites','comite','comités',
    'choqué','choquée','choques','champ','champs',
    'camion','camions',
    'bloqué','bloquée','bloqués','bloquees','bloques',
    'besoin','besoins','base','bases',
    'atout','atouts','association','associations',
    'artiste','artistes',
    'appliquer','applique','appliquons','appliquent',
    'aboyer','aboie','aboient',
    'oeuvre','oeuvres','oeil','yeux',
    'éviter','évité','evite','eviter',
    'évacuer','évacuée','evacuer',
    'équilibre','equilibre','équilibrée','equilibree',
    'épicé','épicée','epicé',
    'émotion','émotions','emotion','emotions',
    'éducation','educatif','educatifs',
    'écran','ecrans','ecran',
    'écologique','écologiques','ecologique',
    'échouer','echoue','échoue',
    'web','vécu','vecu','volcan','volcans',
    'vocation','vocations','vivant','vivante','vivantes','vivants',
    'vital','vitale','vitaux',
    'viser','vise','visent','virus',
    'virgule','virgules','virage','vigneron','vignerons',
    'vif','vifs','vive','vives','vide','vides',
    'victoire','victoires','vibrer','vibré','vibre',
    'verbe','verbes','vase','vases',
    'varié','variée','variés','variees',
    'valse','valses','vallée','vallee','vallées','vallees',
    'validé','validée','valide','validees',
    'vaccination','vaccinations',
    'universitaire','universitaires',
    'unir','unit','unissent',
    'unique','uniques',
    'témoins','temoin','temoins',
    'télévision','television',
    'téléphonique','telephonique',
    'trône','trone','trônes',
    'troupe','troupes',
    'tripler','triplé',
    'trier','trie','trient',
    'trésor','tresor','trésors',
    'pourcentage','pourcent','proportion',
    'époque','epoque','période','periode',
    'passé','passe','avenir','futur',
    'nation','état','etat','territoire',
    'zone','zones','secteur','secteurs',
    'essentiel','essentielle','essentiels','essentielles',
    'principal','principale','principaux','principales',
    'possible','impossible','nécessaire','necessaire','obligatoire',
    'complet','complète','incomplete','incomplet',
    'public','publics','publique','publiques',
    'publié','publie','publient','publiée',
    'privé','privée','privés','privées',
    'officiel','officielle','officiels','officielles',
    'international','internationale','internationaux',
    'national','nationale','nationaux','nationales',
    'local','locale','locaux','locales',
    // ── High-frequency verb forms (ambient discourse scaffolding) ──
    'jouer','joue','joues','jouons','jouez','jouent','joué','jouait','jouaient',
    'toucher','touche','touches','touchons','touchez','touchent','touché','touchait',
    'marcher','marche','marches','marchons','marchez','marchent','marché','marchait',
    'retrouver','retrouve','retrouves','retrouvons','retrouvez','retrouvent','retrouvé',
    'distinguer','distingue','distingues','distinguons','distinguez','distinguent',
    'protéger','protège','protèges','protégeons','protègent','protégé',
    'surveiller','surveille','surveillons','surveillent','surveillé',
    'organiser','organise','organisons','organisent','organisé','organisée',
    'commencer','commence','commençons','commencent','commencé',
    'terminer','termine','terminons','terminent','terminé','terminée',
    'préparer','prépare','préparons','préparent','préparé','prepare',
    'présenter','présente','présentons','présentent','présenté','presente','presentent',
    'utiliser','utilise','utilisons','utilisent','utilisé','utilisée',
    'informer','informe','informons','informent','informé',
    'annoncer','annonce','annonçons','annoncent','annoncé',
    'proposer','propose','proposons','proposent','proposé','proposée',
    'accepter','accepte','acceptons','acceptent','accepté','acceptée',
    'refuser','refuse','refusons','refusent','refusé','refusée',
    'expliquer','explique','expliquons','expliquent','expliqué',
    'discuter','discute','discutons','discutent','discuté',
    'décider','décide','décidons','décident','décidé','decide','decident',
    'poser','pose','posons','posez','posent','posé','posait','posaient',
    'montrer','montre','montrons','montrez','montrent','montré',
    'ouvrir','ouvre','ouvrons','ouvrez','ouvrent','ouvert','ouverte',
    'fermer','ferme','fermons','fermez','ferment','fermé','fermée','fermait',
    'sortir','sort','sortez','sortent','sorti','sortait',
    'lancer','lance','lançons','lancent','lancé','lancée',
    'développer','développe','développons','développent','développé','developpe',
    'créer','crée','créons','créent','créé','créée','cree','creent',
    'construire','construit','construisons','construisent',
    'vendre','vend','vendons','vendez','vendent','vendu',
    'payer','paye','payons','payez','paient','payé','payait',
    'coûter','coûte','coûtent','coûté','coute','coutent',
    'gagner','gagne','gagnons','gagnent','gagné','gagnait',
    'perdre','perd','perdons','perdez','perdent','perdu','perdait',
    'réussir','réussit','réussissons','réussissent','réussi','reussit',
    'aider','aide','aidons','aidez','aident','aidé','aidait',
    'servir','sert','servons','servez','servent','servi','servait',
    'souffrir','souffre','souffrons','souffrent','souffert',
    'profiter','profite','profitons','profitent','profité',
    'suivre','suit','suivons','suivez','suivent','suivi','suivait',
    'permettre','permet','permettons','permettent','permis','permettait',
    'interdire','interdit','interdisons','interdisent',
    'dépenser','dépense','dépensons','dépensent','dépensé',
    'économiser','économise','économisons','économisent','économisé',
    'envoyer','envoie','envoyons','envoyez','envoient','envoyé',
    'recevoir','reçoit','recevons','recevez','reçoivent','reçu',
    'apporter','apporte','apportons','apportent','apporté',
    'emmener','emmène','emmenons','emmenez','emmènent','emmené',
    'amener','amène','amenons','amenez','amènent','amené',
    // ── Common nouns used in B2+ context ──
    'domaine','domaines','sujet','sujets','aspect','aspects',
    'facteur','facteurs','cause','causes','effet','effets',
    'défi','defis','obstacle','obstacles',
    'opportunité','opportunite',
    'qualité','qualite','valeur','valeurs',
    'engagement','engagements','objectif','objectifs',
    'méthode','methode','méthodes','methodes',
    'système','systeme','systèmes','systemes','programme','programmes',
    'structure','structures','groupe','groupes','membre','membres',
    'donnée','données','donnees',
    'analyse','analyses','étude','etude','études','etudes',
    'recherche','recherches','question','questions',
    'réponse','reponse','réponses','reponses',
    'argument','arguments','preuve','preuves','conclusion','conclusions',
    'crise','crises','guerre','guerres','conflit','conflits',
    'traité','traite','traités','règle','regle','règles','regles',
    'condition','conditions','limite','limites',
    'risque','risques','danger','dangers','pression','pressions',
    'influence','influences','impact','impacts',
    'critique','critiques','plainte','plaintes','erreur','erreurs',
    'changement','changements','amélioration','amelioration',
    'réforme','reforme','réformes','reformes','mesure','mesures',
    'stratégie','strategie','stratégies','strategies',
    'enjeu','enjeux','avantage','avantages','inconvénient','inconvenient',
    'coût','cout','coûts','couts','budget','budgets','financement',
    'investissement','investissements',
    'entreprise','entreprises','industrie','industries','commerce','commerces',
    'salaire','salaires','formation','formations',
    'carrière','carriere','carrières','carrieres',
    'profession','professions','métier','metier','métiers',
    'compétence','competence','compétences','competences',
    'savoir','expérience','experience','expériences','experiences',
    // ── Additional commonly flagged words from _temp files ──
    'mots','mot','article','articles',
    'prochain','prochaine','prochains','prochaines',
    'détails','detail','détail','details',
    'cuisine','cuisines','marathon','marathons',
    'homard','homards','tartine','tarte','tartes',
    'coin','coins','calme','calmes',
    'appartement','appartements',
    'voix','vérité','verite','voyage','voyages',
    'touriste','touristes','technique','techniques',
    'talent','talents','stress',
    'solide','solides',
    'urgent','urgente','urgentes','urgents',
    'transport','transports','tempête','tempete','tempêtes',
    'terrain','terrains','suspect','suspects',
    'surpris','surprise','surprises','sucre',
    'breton','bretonne','bretons',
    'mutuel','mutuelle','mutuels',
    'modèle','modele','modèles','modeles',
    'meilleur','meilleure','meilleurs','meilleures',
    'incroyable','incroyables',
    'homme','hommes','femme','femmes','chose','choses',
    'code','codes','chiffre','chiffres',
    'annee','annees','siecle','siecles','region','regions',
    'serrure','serrures','serrurier',
    'boîtier','boitier','télécommande','telecommande',
    'laiton','gravats','valise','valises','benne','bennes',
    'levier','leviers','alarme','alarmes','poignée','poignees',
    'cheval','chevaux','mythologie','mythologies',
    'machette','machettes','sang',
    'crevette','crevettes','crabe','crabes',
    'splendide','splendides','malin','malins','maligne','malignes',
    'fils','fil','vole','voler','parquet','parquets',
    'moderne','modernes','brille','briller',
    'promotion','promotions','mérite','merite','merites',
    'souffrant','souffrants','consolider','menace','menaces','mur','murs',
    'jardin','jardins','bosquet','bosquets',
    'devenu','devenue','devenus','devenues',
    'charme','charmes','insuffisant','insuffisante',
    'printemps','automne','hiver',
    'conduite','conduire','conduisant','conduise',
    'sauvage','sauvages','pacifique','pacifiques',
    'promesse','promesses','salle','salles',
    'rapide','rapides','rapidement','photo','photos',
    'réagi','reagit','réglementations','réglementation',
    'parisien','parisiens','parisienne','parisiennes',
    'général','générale','généraux','generaux','generale',
    'particulier','particulière','particuliers',
    'habituel','habituelle','habituels',
    'quotidien','quotidienne','quotidiens',
    'récent','récente','récents','recente','recents',
    'classique','classiques',
    'traditionnel','traditionnelle','traditionnels',
    'efficace','efficaces',
    'responsable','responsables',
    'durable','durables',
    'solidaire','solidaires',
    'créatif','créative','créatifs',
    'dynamique','dynamiques',
    'ambitieux','ambitieuse',
    'motivé','motivée','motivés',
    'positif','positive','positifs','positives',
    'négatif','négative','négatifs',
    'complexe','complexes','simple','simples','facile','faciles',
    'approprié','appropriée','appropriés',
    'correct','correcte','corrects','correctes',
    'précis','précise','precis','precise',
    'exact','exacte','exacts','exactes',
    // ── Round 2: additional ambient words from _temp file violations ──
    'accroche','accrocher','accroché','ajuster','ajuste','ajusté',
    'améliorer','améliore','amélioré','ameliorer','aperçu',
    'atteint','atteindre','atteints','atteinte',
    'baisse','baisser','baissé','bavarder','bavardé',
    'bouge','bouger','bougé','capte','capter','captivé','captive',
    'casse','casser','cassé','cassée','comparer','comparé',
    'comporte','comporter','comporté','confirme','confirmer','confirmé','confirmée',
    'confondre','confondu','connecte','connecter','connecté',
    'considéré','considérée','considerer','considere',
    'construits','construite','construites','consulter','consulté',
    'contamine','contaminer','contaminé','contente','contenté',
    'contraire','contraires','dépose','déposer','deposer','déposé',
    'détectée','détecter','detecter','détectées',
    'déterminée','déterminer','determiner','dialoguer','dialogué',
    'difficilement','diffusait','diffuser','diffuse','diminue','diminué',
    'disparait','disparaît','divisées','divisée','douche','douches',
    'droit','droits','éliminer','éliminé','eliminer',
    'embauches','embauché','embauchée','emporte','emporter','emporté',
    'enseigne','enseigner','exiger','exige','exigé','exigeante',
    'explore','explorer','exploré','explose','exploser','explosé',
    'fabrique','fabriquer','fabriqué','fascinants','fascinant','fascinante','fascinantes',
    'fournir','fournit','fourni','fume','fumer','fumé','fuit','fuir',
    'garantit','garantir','garanti','glisse','glisser','glissé',
    'gravite','graviter','grimper','grimpé','guidées','guidée','guider',
    'hésite','hésiter','hésité','ignores','ignorer','ignoré',
    'implique','impliquer','impliqué','inspire','inspirer','inspiré',
    'interconnecté','interconnectée','interconnectés',
    'invoque','invoquer','invoqué','jeté','jetée','jeter',
    'justifiée','justifier','justifiées','livrée','livrées','livrer',
    'mobilisé','mobilisée','mobiliser','modifie','modifier','modifié',
    'objet','objets','occupe','occuper','occupé','offre','offrir','offert',
    'produit','produire','produits','rapproche','rapprocher','rapproché',
    'reconnu','reconnue','reconnus','reconvertir',
    'rédige','rédiger','rédigé','redonner','redonne',
    'réduisant','relié','relire','relu',
    'remporté','remportée','rencontrer','rencontré',
    'renversé','renversée','repeindre','repose','reposé',
    'respectée','respectées','respectera','résumé','résumée','résumés',
    'retards','retraite','retraites','reviens','reversés','reversée',
    'sécuriser','sécurisé','securiser','securise',
    'signées','signée','sors','soucis',
    'souffrait','souffrir','souriait',
    'spécialisé','spécialisée','specialise','spécialiste','spécialistes','specialiste',
    'suscite','susciter','suscité','tousse','tousser','toussé',
    'traduit','traduire','traiter','traité','transmet','transmettre','transmis',
    'transporte','transporter','transporté','utilises',
    // Physical/scene nouns B2+ context
    'agréable','agreable','agréables','algues','algue',
    'anglicismes','anglophones','anglophone',
    'antiquité','antiquite','appareil','appareils',
    'appâts','appats','approximatifs','approximatif',
    'archéologues','archeologues','artisanal','artisanale',
    'artistique','artistiques','ascenseur','ascenseurs',
    'assiette','assiettes','associative','audio',
    'averses','averse','bac','bacs','bagne','bagnes',
    'bazar','bazars','bio','bœuf','boeuf','bonbons','bonbon',
    'bondées','bondée','bondé','bordeaux','bords','bord',
    'bouquet','bouquets','bout','bouts','braconnage',
    'brise','brises','brisé','brisée','brocciu',
    'brosse','brosses','bruns','brun','brune','bureau','bureaux',
    'cabine','cabines','cache','caches','cadeau','cadeaux',
    'camps','camp','cantine','cantines','capital','capitaux',
    'casino','casinos','catégories','catégorie',
    'charcuterie','chaud','chaude','chauffage',
    'chien','chiens','chimiques','chimique',
    'chinois','chinoise','chirurgie','chère','cher','chères','chers',
    'cidre','cidres','ciel','ciels','civiques','civique',
    'cliché','clichés','cocktail','cocktails','cognitives','cognitive',
    'colis','colline','collines','colloque','colloques',
    'coloré','colorée','colorés','communes','commune','commun',
    'confort','confuses','confuse','conviction','convictions',
    'coopération','cooperation','copies','copie',
    'cotisations','cotisation','craintes','crainte',
    'créativité','creativite','crinière','criniere',
    'cuir','cuirs','cuisson','culinaires','culinaire',
    'câlins','câlin','deadlines','deadline',
    'décoratif','decoratif','décorative','décore','décoré',
    'dégâts','degats','déguste','déguster',
    'dehors','demi','demie','diamant','diamants',
    'dictionnaire','dictionnaires','diplomatique','digital',
    'dizaines','dizaine','donations','donation','dose','doses',
    'débats','débat','déchu','déchue','décisifs','décisif',
    'décoration','décorations','déracinés','déraciné',
    'détourner','détruire','détruit','échange','échanges',
    'échographie','échographies','écrivain','écrivains',
    'emouvante','émouvant','émouvante','espagnol','espagnole',
    'espoir','espoirs','esprit','essaie','essayer',
    'estimations','estimation','examens','examen',
    'expansion','expertise','expertises',
    'expressions','expression','exprès',
    'extraordinaire','extraordinaires',
    'façons','façon','facons','facon','fanatique','fanatiques',
    'farcis','farci','farcie','fast','fériée','férié','feries',
    'fermier','fermiers','feu','feux','fidéliser','fideliser',
    'figure','figures','filles','fille','financiers','financier',
    'fleur','fleurs','fonctionnaire','fonctionnaires','food',
    'forme','formes','fossé','fosse','framboise','framboises',
    'fraîche','fraiche','friche','friches','fusion','fusions',
    'féminisme','gagnais','gagnaient','gamin','gamins',
    'garçons','garçon','genre','genres','gentil','gentille',
    'geste','gestes','gestion','gestions','gris','grise',
    'guide','guides','géographique','géographiques',
    'hélicoptère','helicoptere','honnête','honnete',
    'honnêteté','honnetete','horloge','horloges',
    'huitième','huitieme','hygiène','hygiene',
    'images','image','immatériel','immateriel',
    'importantes','important','impôts','impots',
    'impressionniste','individuel','individuelle',
    'infantilise','informatique','informels','informel',
    'injustes','insuffisantes','insultes','insulte',
    'interne','internes','interview','interviews','intro',
    'irréalistes','irrealistes','irréaliste',
    'italien','italienne','italiens','joie','joies',
    'joli','jolie','jolis','jolies','juste',
    'kermesse','kermesses','lettre','lettres',
    'liaisons','liaison','libre','libres','ligne','lignes',
    'listes','liste','logo','logos','loto','lotos',
    'lourde','lourd','lourds','lycée','lycées',
    'maison','maisons','maman','mamans',
    'manières','manieres','manière','manqueras','manquera',
    'marée','maree','massif','massive','master','masters',
    'mécanisme','mecanisme','médecine','medecine',
    'météo','meteo','mètres','metres','mètre','metre',
    'minimaliste','mitigé','mitigée','moitié','moitie',
    'nombre','nombres','noms','nom','normal','normale',
    'normes','norme','notation','notations','nul','nulle',
    'négatives','négative','nappes','nappe','native',
    'négociations','negociations','nette','net','nets','nettes',
    'nids','nid','obsèques','officiers','officier',
    'ogive','ogives','oncle','oncles','ordre','ordres',
    'origines','origine','paire','paires','paix',
    'pandémie','pandemie','papa','papas',
    'paragraphes','paragraphe','parents','parent',
    'parfumée','parfumé','partagés','partagé',
    'participants','participant','participation',
    'passants','passant','passionnantes','passionnant','passionnante',
    'peints','peint','peinte','persécutés','persecutes',
    'perçue','perçu','perçus','phrases','phrase',
    'pis','piscine','piscines','pittoresque','pittoresques',
    'pleine','plein','pleins','pleures','pleure','plombier',
    'poétique','poetique','positions','position',
    'poste','postes','potager','poulet','poulets',
    'poursuivre','poussait','pousser','poème','poèmes',
    'pratiques','pratique','préoccupante','preoccupante',
    'prie','prier','prié','principe','principes',
    'profère','proférer','profere','profits','profit',
    'propageait','propager','proposez','propositions','proposition',
    'propriété','propriete','provoque','provoquer','provoqué',
    'préavis','préparation','préparations','préparés','préparé',
    'prévisions','prévision',
    'publier','publie','publié','publies','punis','puni','punir','punit',
    'quantité','quantite','quittant','quitter','quitté',
    'raccords','raccord','radical','radicale','radio','radios',
    'recommandations','recommandation','reformée','réformée',
    'régime','regime','reporté','reportée','restrictions','restriction',
    'rhume','rhumes','rire','ris','rit','ri',
    'rochers','rocher','rock','ronger','rongé','règne','régner',
    'réalisme','réaliste','realiste','réalistes',
    'réel','reel','réelle','réels','régional','régionale','régionaux',
    'réintroduction','réparation','reparation',
    'répliques','réplique','républicaine','républicain',
    'réputation','réserve','reserve','réservé','reservé',
    'résister','résisté','réveillé','réveillée','réveiller',
    'révision','revision','rêves','rêve',
    'sacrée','sacree','sages','sage','saine','sain','sains','saines',
    'saisi','saisie','saisir','sanitaire','sanitaires',
    'sarrasin','sauté','sautée','sauter',
    'scoop','scoops','sculptées','sculpter',
    'section','sections','sein',
    'serre','serres','sévrage','sevrage',
    'signal','signaux','silhouette','silhouettes',
    'singes','singe','sirop','sirops','ski','skis',
    'soignants','soignant','soldat','soldats',
    'solidarité','solidarite','sonore','sonores',
    'star','stars','stade','stades','standards','standard',
    'statistiques','statistique','station','stations',
    'store','stores','stressé','stresser','stressée',
    'sucreries','sucrerie','sud','suffragiste',
    'taches','tache','tact','tarder','taxi','taxis',
    'technologique','technologiques','tempes','tempe',
    'temporaire','temporaires','terrasse','terrasses',
    'tests','test','texte','textes','tiers','titre','titres',
    'toasts','toast','tombé','tombée','tombés','tomber','tombe',
    'trafiquants','trafiquant','transactions','transaction',
    'tranches','tranche','trancher','tranché','tranchant',
    'traverser','traversé','traversière','traversiere',
    'travaux','trouver',
    'étouffe','étouffait','épaisse','épais','épand','épandre',
    'échecs','échec','échappe','échapper','échappé',
    'ému','émue','émus','œil','œuvres','œuvre',
    'déguste','dégusté','conduit','conduire',
    'agissons','agir','respectées','dominait','dominer',
    'niquons','redémarrer','redémarre','redemarrer',
    // ── Round 3: final batch of remaining violations ──
    'acheter','achetez','achetées','achetons',
    'arcs','arc',
    'arnaques','arnaque','arnaquer',
    'attiré','attirée','attirés','attirer','attire',
    'comptoir','comptoirs',
    'comédies','comédie',
    'conseiller','conseille','conseillons','conseillent','conseillé',
    'conservée','conservées','conservé','conserver','conservons',
    'constructive','constructif','constructifs','constructives',
    'contexte','contextes',
    'corrigée','corriger','corrigées','corrigés',
    'durera','durer','dureras','dureront','durerait',
    'détermination','déterminations',
    'effective','effectif','effectifs','effectivement',
    'emballe','emballer','emballes','emballons','emballent','emballé',
    'goûts','goût','gouter','goûter',
    'grève','greve','grèves','greves',
    'griffoir','griffoirs',
    'instructions','instruction',
    'malheureusement',
    'méconnu','meconnu','méconnue','méconnus',
    'médiatique','mediatique','médiatiques',
    'médicaments','medicaments','médicament','medicament',
    'mélodie','melodie','mélodies','melodies',
    'mémoire','mémoires','memoire',
    'mobilisés','mobilises','mobilisée','mobilisé',
    'pèse','peser','pese','pèsent',
    'protégée','protégées','protégés','proteger','protégé',
    'précises','précis','précise','précision',
    'relier','relie','relions','relient','relié',
    'relis','relire','relu','relit',
    'repasser','repasse','repassons','repassent','repassé',
    'reportés','reporté','reportée','reporter','reporte',
    'réveilles','réveillé','réveillée','réveiller','reveilles',
    'attirait','attire','attiraient',
  ]),
  'es': new Set([
    'el','la','los','las','un','una','unos','unas',
    'y','e','o','u','pero','sino','si','que','porque','pues','aunque','cuando','mientras',
    'donde','como','según','durante','tras','mediante','ante','bajo','salvo',
    'junto','cuanto','cual','pese','aun','luego',
    'entonces','además','tampoco','incluso','mas','ni','así','bien',
    'en','a','al','del','de','por','para','con','sin','sobre','hacia','desde','contra',
    'entre','dentro','fuera','antes','después','hasta','mediante','según','excepto',
    'yo','tú','él','ella','usted','nosotros','nosotras','vosotros','vosotras',
    'ellos','ellas','ustedes',
    'me','te','se','le','les','lo','nos','os',
    'mí','ti','sí','conmigo','contigo','consigo',
    'este','esta','estos','estas','ese','esa','esos','esas',
    'aquel','aquella','aquellos','aquellas','esto','eso','aquello',
    'mi','mis','tu','tus','su','sus',
    'mío','mía','míos','mías','tuyo','tuya','tuyos','tuyas',
    'suyo','suya','suyos','suyas',
    'nuestro','nuestra','nuestros','nuestras',
    'vuestro','vuestra','vuestros','vuestras',
    'es','son','era','eran','soy','eres','somos','sois','fue','fui','fuimos','fueron',
    'fuiste','fuisteis','sea','sean','seas','seamos','seáis','sería','serían','sido','ser','siendo',
    'está','están','estoy','estás','estamos','estáis','estaba','estaban',
    'estuvo','estuve','estuvimos','estuvieron','estuviste','estuvisteis',
    'esté','estén','estés','estemos','estéis','estaría','estarían','estado','estar','estando',
    'he','has','ha','hemos','habéis','han','había','habían','hubo','habrá',
    'habrán','haya','hayan','hayas','hayamos','hayáis','habría','habrían','haber','habiendo',
    'tiene','tienen','tengo','tienes','tenemos','tenéis','tenía','tenían',
    'tuvo','tuve','tuvimos','tuvieron','tuviste','tuvisteis',
    'tenga','tengan','tengas','tengamos','tengáis','tendría','tendrían','tenido','tener','teniendo',
    'voy','vas','va','vamos','vais','van','iba','ibas','íbamos','iban',
    'vaya','vayas','vayamos','vayáis','vayan','iría','irían','ido','ir','yendo',
    'viene','vienen','vengo','vienes','venimos','venís','venía','venían',
    'vino','vine','vinimos','vinieron','viniste','vinisteis','venga','vengan',
    'vendrá','vendrían','venido','venir','viniendo',
    'hace','hacen','hago','haces','hacemos','hacéis','hacía','hacían',
    'hizo','hice','hicimos','hicieron','hiciste','hicisteis',
    'haga','hagan','hagas','hagamos','hagáis','haría','harían','hecho','hacer','haciendo',
    'dice','dicen','digo','dices','decimos','decís','decía','decían',
    'dijo','dije','dijimos','dijeron','dijiste','dijisteis','diga','digan',
    'diría','dirían','dicho','decir','diciendo',
    'da','dan','doy','das','damos','dais','daba','daban','dio','di','dimos','dieron',
    'diste','disteis','den','daría','darían','dado','dar','dando',
    've','veo','ves','vemos','veis','veía','veían','vio','vi','vimos','vieron',
    'viste','visteis','vea','vean','vería','verían','visto','ver','viendo',
    'puede','pueden','puedo','puedes','podemos','podéis','podía','podían',
    'pudo','pude','pudimos','pudieron','pudiste','pudisteis','pueda','puedan',
    'podría','podrían','podido','poder','pudiendo',
    'quiere','quieren','quiero','quieres','queremos','queréis','quería','querían',
    'quiso','quise','quisimos','quisieron','quisiste','quisisteis','quiera','quieran',
    'querría','querrían','querido','querer','queriendo',
    'sabe','saben','sabes','sabemos','sabéis','sabía','sabían',
    'supo','supe','supimos','supieron','supiste','supisteis','sepa','sepan',
    'sabría','sabrían','sabido','saber','sabiendo',
    'debe','deben','debo','debes','debemos','debéis','debía','debían',
    'debió','debí','debimos','debieron','debiste','debisteis','deba','deban',
    'debería','deberían','debido','deber','debiendo',
    'pone','ponen','pongo','pones','ponemos','ponéis','ponía','ponían',
    'puso','puse','pusimos','pusieron','pusiste','pusisteis','ponga','pongan',
    'pondría','pondrían','puesto','poner','poniendo',
    'sale','salen','salgo','sales','salimos','salís','salía','salían',
    'salió','salí','salieron','saliste','salisteis','salga','salgan',
    'saldría','saldrían','salido','salir','saliendo',
    'toma','toman','tomo','tomas','tomamos','tomáis','tomaba','tomaban',
    'tomó','tomé','tomaron','tomaste','tomasteis','tome','tomen',
    'tomaría','tomarían','tomado','tomar','tomando',
    'lleva','llevan','llevo','llevas','llevamos','lleváis','llevaba','llevaban',
    'llevó','llevé','llevaron','llevaste','llevasteis','lleve','lleven',
    'llevaría','llevarían','llevado','llevar','llevando',
    'trae','traen','traigo','traes','traemos','traéis','traía','traían',
    'trajo','traje','trajimos','trajeron','trajiste','trajisteis','traiga','traigan',
    'traería','traerían','traído','traer','trayendo',
    'entra','entran','entro','entras','entramos','entráis','entraba','entraban',
    'entró','entré','entraron','entraste','entrasteis','entre','entren',
    'entraría','entrarían','entrado','entrar','entrando',
    'habla','hablan','hablo','hablas','hablamos','habláis','hablaba','hablaban',
    'habló','hablé','hablaron','hablaste','hablasteis','hable','hablen',
    'hablaría','hablarían','hablado','hablar','hablando',
    'pregunta','preguntan','pregunto','preguntas','preguntamos','preguntáis',
    'preguntaba','preguntaban','preguntó','pregunté','preguntaron',
    'preguntaste','preguntasteis','pregunte','pregunten',
    'preguntaría','preguntarían','preguntado','preguntar','preguntando',
    'pide','piden','pido','pides','pedimos','pedís','pedía','pedían',
    'pidió','pedí','pidieron','pediste','pedisteis','pida','pidan',
    'pediría','pedirían','pedido','pedir','pidiendo',
    'busca','buscan','busco','buscas','buscamos','buscáis','buscaba','buscaban',
    'buscó','busqué','buscaron','buscaste','buscasteis','busque','busquen',
    'buscaría','buscarían','buscado','buscar','buscando',
    'encuentra','encuentran','encuentro','encuentras','encontramos','encontráis',
    'encontraba','encontraban','encontró','encontré','encontraron',
    'encontraste','encontrasteis','encuentre','encuentren',
    'encontraría','encontrarían','encontrado','encontrar','encontrando',
    'pasa','pasan','paso','pasas','pasamos','pasáis','pasaba','pasaban',
    'pasó','pasé','pasaron','pasaste','pasasteis','pase','pasen',
    'pasaría','pasarían','pasado','pasar','pasando',
    'queda','quedan','quedo','quedas','quedamos','quedáis','quedaba','quedaban',
    'quedó','quedé','quedaron','quedaste','quedasteis','quede','queden',
    'quedaría','quedarían','quedado','quedar','quedando',
    'vuelve','vuelven','vuelvo','vuelves','volvemos','volvéis','volvía','volvían',
    'volvió','volví','volvimos','volvieron','volviste','volvisteis','vuelva','vuelvan',
    'volvería','volverían','vuelto','volver','volviendo',
    'vive','viven','vivo','vives','vivimos','vivís','vivía','vivían',
    'vivió','viví','vivieron','viviste','vivisteis','viva','vivan',
    'viviría','vivirían','vivido','vivir','viviendo',
    'trabaja','trabajan','trabajo','trabajas','trabajamos','trabajáis','trabajaba','trabajaban',
    'trabajó','trabajé','trabajaron','trabajaste','trabajasteis','trabaje','trabajen',
    'trabajaría','trabajarían','trabajado','trabajar','trabajando',
    'estudia','estudian','estudio','estudias','estudiamos','estudiáis','estudiaba','estudiaban',
    'estudió','estudié','estudiaron','estudiaste','estudiasteis','estudie','estudien',
    'estudiaría','estudiarían','estudiado','estudiar','estudiando',
    'lee','leen','leo','lees','leemos','leéis','leía','leían','leyó','leí','leímos',
    'leyeron','leíste','leísteis','lea','lean','leería','leerían','leído','leer','leyendo',
    'escribe','escriben','escribo','escribes','escribimos','escribís','escribía','escribían',
    'escribió','escribí','escribieron','escribiste','escribisteis',
    'escriba','escriban','escribiría','escribirían','escrito','escribir','escribiendo',
    'escucha','escuchan','escucho','escuchas','escuchamos','escucháis','escuchaba','escuchaban',
    'escuchó','escuché','escucharon','escuchaste','escuchasteis','escuche','escuchen',
    'escucharía','escucharían','escuchado','escuchar','escuchando',
    'mira','miran','miro','miras','miramos','miráis','miraba','miraban',
    'miró','miré','miraron','miraste','mirasteis','mire','miren',
    'miraría','mirarían','mirado','mirar','mirando',
    'compra','compran','compro','compras','compramos','compráis','compraba','compraban',
    'compró','compré','compraron','compraste','comprasteis','compre','compren',
    'compraría','comprarían','comprado','comprar','comprando',
    'come','comen','como','comes','comemos','coméis','comía','comían',
    'comió','comí','comimos','comieron','comiste','comisteis','coma','coman',
    'comería','comerían','comido','comer','comiendo',
    'bebe','beben','bebo','bebes','bebemos','bebéis','bebía','bebían',
    'bebió','bebí','bebimos','bebieron','bebiste','bebisteis','beba','beban',
    'bebería','beberían','bebido','beber','bebiendo',
    'piensa','piensan','pienso','piensas','pensamos','pensáis','pensaba','pensaban',
    'pensó','pensé','pensaron','pensaste','pensasteis','piense','piensen',
    'pensaría','pensarían','pensado','pensar','pensando',
    'cree','creen','creo','crees','creemos','creéis','creía','creían',
    'creyó','creí','creímos','creyeron','creíste','creísteis','crea','crean',
    'creería','creerían','creído','creer','creyendo',
    'entiende','entienden','entiendo','entiendes','entendemos','entendéis','entendía','entendían',
    'entendió','entendí','entendimos','entendieron','entendiste','entendisteis',
    'entienda','entiendan','entendería','entenderían','entendido','entender','entendiendo',
    'conoce','conocen','conozco','conoces','conocemos','conocéis','conocía','conocían',
    'conoció','conocí','conocimos','conocieron','conociste','conocisteis',
    'conozca','conozcan','conocería','conocerían','conocido','conocer','conociendo',
    'no','ni','nada','nadie','ningún','ninguna','ninguno','nunca','jamás','tampoco','apenas',
    'bien','mal','muy','mucho','poco','demasiado','bastante',
    'ya','todavía','aún','siempre','también',
    'aquí','allí','ahí','allá','acá',
    'ahora','entonces','luego','después','antes','hoy','mañana','ayer',
    'pronto','tarde','temprano','así','casi','quizás','quizá','acaso',
    'cerca','lejos','arriba','abajo','adelante','atrás','dentro','fuera',
    'mucho','mucha','muchos','muchas','poco','poca','pocos','pocas',
    'todo','toda','todos','todas','algún','alguna','algunos','algunas',
    'cada','cualquier','cualquiera','otro','otra','otros','otras',
    'mismo','misma','mismos','mismas','propio','propia','propios','propias',
    'demás','varios','varias','tanto','tanta','tantos','tantas',
    'qué','quién','quiénes','dónde','cuándo','cómo','cuál','cuáles',
    'cuánto','cuánta','cuántos','cuántas','que','quien',
    'uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez',
    'once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve',
    'veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco',
    'treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa',
    'cien','ciento','cientos','mil','millón','millones','miles','medio','media',
    'primero','primera','primeros','primeras','segundo','segunda','tercero','tercera',
    'primer','último','última','últimos','últimas',
    'Juan','María','Pedro','Carlos','Ana','Luis','Elena','Pablo','Laura',
    'Madrid','Barcelona','Sevilla','Valencia','Bilbao','Granada','Toledo',
    'España','México','Argentina','Colombia','Chile','Perú','Cuba',
    'año','años','mes','meses','semana','semanas','día','días','hora','horas',
    'minuto','minutos','segundo','segundos','lunes','martes','miércoles',
    'jueves','viernes','sábado','domingo','enero','febrero','marzo','abril',
    'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre',
    'vez','veces','euro','euros','metro','metros','kilómetro','kilómetros','kilo','kilos',
    'litro','litros','persona','personas','gente','grupo','grupos',
    'grande','pequeño','pequeña','grandes','pequeños','pequeñas',
    'nuevo','nueva','nuevos','nuevas','viejo','vieja','viejos','viejas',
    'bueno','buena','buenos','buenas','malo','mala','malos','malas',
    'mejor','peor','mejores','peores','gran','mayor','menor','mayores','menores',
    'importante','importantes','natural','naturales',
    'social','sociales','nacional','nacionales','local','locales',
    'público','pública','públicos','públicas','principal','principales',
    'general','generales','especial','especiales','diferente','diferentes',
    'actual','actuales','real','reales','siguiente',
    'alto','alta','altos','altas','bajo','baja','bajos','bajas',
    'largo','larga','largos','largas','corto','corta','cortos','cortas',
    'fuerte','fuertes','rápido','rápida','rápidos','rápidas',
    'completamente','totalmente','especialmente','principalmente',
    'generalmente','normalmente','directamente','finalmente','realmente',
    'fundamental','fundamentales','esencial','esenciales',
    'bonito','bonita','bonitos','bonitas','precioso','preciosa','preciosos','preciosas',
    'enorme','enormes','serio','seria','serios','serias',
    'país','países','ciudad','ciudades','mundo','zona','zonas',
    'gobierno','pueblo','pueblos','sociedad','economía','política',
    'familia','familias','casa','casas','calle','calles',
    'trabajo','trabajos','empresa','empresas','sector','sectores',
    'sistema','sistemas','proceso','procesos','proyecto','proyectos',
    'problema','problemas','resultado','resultados','datos',
    'situación','situaciones','momento','momentos','lugar','lugares',
    'tiempo','partido','partidos','programa','programas','ley','leyes',
    'reunión','reuniones','noticia','noticias','música','película','películas',
    'libro','libros','historia','historias','idea','ideas',
    'universidad','universidades','hospital','hospitales','escuela','escuelas',
    'médico','médicos','policía','profesor','profesores','profesional','profesionales',
    'niño','niña','niños','niñas','joven','jóvenes','vecino','vecinos','vecina','vecinas',
    'suerte','verdad','cuidado','color','colores','sonido','ruido',
    'dolor','salud','calor','frío','verano','invierno','primavera','otoño',
    'playa','playas','parque','parques','edificio','edificios',
    'siglo','siglos','producto','productos',
    'investigación','condición','condiciones','experiencia','experiencias',
    'calidad','cantidad','información','comunicación','educación',
    'tecnología','energía','medio','medios','servicio','servicios',
    'juez','jueces','elección','elecciones','discurso','discursos',
    'cuadro','cuadros','cocina','cocinas','puerta','puertas',
    'necesita','necesitan','necesito','necesitas','necesitamos','necesitáis',
    'necesitaba','necesitaban','necesitó','necesité','necesitaría','necesitarían',
    'necesitado','necesitar','necesitando',
    'llega','llegan','llego','llegas','llegamos','llegáis','llegaba','llegaban',
    'llegó','llegué','llegaron','llegaste','llegasteis','llegaría','llegarían',
    'llegado','llegar','llegando',
    'funciona','funcionan','funciono','funcionas','funcionamos','funcionáis',
    'funcionaba','funcionaban','funcionó','funcioné','funcionaría','funcionarían',
    'funcionado','funcionar','funcionando',
    'incluye','incluyen','incluyo','incluyes','incluimos','incluís',
    'incluía','incluían','incluyó','incluí','incluiría','incluirían',
    'incluido','incluir','incluyendo',
    'afecta','afectan','afecto','afectas','afectamos','afectáis',
    'afectaba','afectaban','afectó','afecté','afectaría','afectarían',
    'afectado','afectar','afectando',
    'gusta','gustan','gusto','gustas','gustamos','gustáis','gustaba','gustaban',
    'gustó','gusté','gustaría','gustarían','gustado','gustar','gustando',
    'encanta','encantan','encanto','encantas','encantamos','encantáis',
    'encantaba','encantaban','encantó','encanté','encantaría','encantarían',
    'encantado','encantar','encantando',
    'prefiere','prefieren','prefiero','prefieres','preferimos','preferís',
    'prefería','preferían','prefirió','preferí','preferiría','preferirían',
      // ── Additional ambient vocabulary (high-frequency scene-setting) ──
    'algo','alguien',
    'viaje','viajes',
    'coche','coches',
    'práctica','prácticas','práctico',
    'nota','notas','notable',
    'tipo','tipos','típico','típica','típicos','típicas',
    'región','regiones','regional','regionales',
    'piso','pisos','paisaje','paisajes',
    'duda','dudas','duda',
    'éxito','exitoso','exitosa',
    'tráfico','trafico',
    'fruta','frutas',
    'correr','corro','corres','corre','corremos','corréis','corren',
    'corrió','corrí','corrimos','corrieron','corriste',
    'tierra','tierras',
    'lluvia','lluvias','llover','llovía','llueve','llovió',
    'cuerpo','cuerpos',
    'razón','razones',
    'oficial','oficiales',
    'juego','juegos','fútbol',
    'favorito','favorita','favoritos','favoritas',
    'equipo','equipos',
    'empieza','empiezan','empiezo','empiezas','empezamos','empezáis',
    'empezó','empecé','empezaron','empezaste','empezasteis',
    'empezaba','empezaban','empezar','empezando',
    'duro','dura','duros','duras','duró','duré','duramos','duraron','duraste','durar','durando',
    'papel','papeles',
    'industria','industrias','industrial','industriales',
    'clásico','clásica','clásicos','clásicas',
    'vida','vidas',
    'solución','soluciones',
    'sitio','sitios',
    'reforma','reformas',
    'principio','principios',
    'peligro','peligros','peligroso','peligrosa','peligrosos','peligrosas',
    'jefe','jefa','jefes','jefas',
    'clima','climas','climático','climática','climáticos','climáticas',
    'ejercicio','ejercicios',
    'crecido','creció','crecí','crecimos','crecieron','creciste','crecer','creciendo',
    'confianza','confianzas',
    'sabor','sabores',
    'recursos',
    'justicia','injusticia',
    'ofrece','ofrecen','ofrezco','ofreces','ofrecemos','ofrecéis',
    'ofreció','ofrecí','ofrecieron','ofreciste','ofrecisteis','ofrecía','ofrecían',
    'ofrecido','ofrecer','ofreciendo',
    'significa','significan','significo','significas','significamos','significáis',
    'significó','significé','significaron','significaste','significaba','significaban',
    'significado','significar','significando',
    'curso','cursos',
    'colegio','colegios',
    'ganó','gané','ganamos','ganaron','ganaste','ganasteis','ganaba','ganaban',
    'ganado','ganar','ganando',
    'total','totales',
    'caída','caídas',
    'precio','precios',
    'nivel','niveles',
    'fondo','fondos',
    'clase','clases',
    'lista','listas','listo','listos',
    'acuerdo','acuerdos',
    'causa','causas','causar','causó','causé','causamos','causaron','causaste',
    'causaba','causaban','causado','causando',
    'horno','hornos',
    'nieve','nieves','nevaba','nevó',
    'obra','obras',
    'fecha','fechas',
    'habitación','habitaciones',
    'autobus','autobús','autobuses',
    'paella','churros',
    'objetivo','objetivos',
    'forma','formas','forman',
    'perfecto','perfecta','perfectos','perfectas',
    'lento','lenta','lentos','lentas',
    'rojo','roja','rojos','rojas','verde','verdes','azul','azules',
    'amarillo','amarilla','blanco','blanca','blancos','blancas',
    'negro','negra','negros','negras',
    'recuerda','recuerdan','recuerdo','recordó','recordé','recordamos',
    'recordaron','recordaste','recordasteis','recordaba','recordaban',
    'recordado','recordar','recordando',
    'número','números','libro','libros',
    'niño','niña','niños','niñas',
    'teléfono','telefonos','telefono',
    'ruinas','castillo','castillos','príncipe','princesa',
    'dragón','monstruo','héroe',
    'preferido','preferir','prefiriendo',
    // ── Third batch: additional scene-setting ambient vocabulary ──
    'fábrica','fábricas',
    'torero','torera','toreros','toreras','toro','toros',
    'árabe','árabes',
    'sanidad',
    'prisa','prisas',
    'organización','organizaciones',
    'oferta','ofertas',
    'negocio','negocios',
    'mudanza','mudanzas',
    'fiscal','fiscales',
    'famoso','famosa','famosos','famosas',
    'europeo','europea','europeos','europeas',
    'postre','postres',
    'político','política','políticos','políticas',
    'personaje','personajes',
    'justo','justa','justos','justas',
    'humano','humana','humanos','humanas',
    'conflicto','conflictos',
    'secreto','secreta','secretos','secretas',
    'ritmo','ritmos',
    'realista','realistas',
    'libertad','libertades',
    'infancia',
    'histórico','histórica','históricos','históricas',
    'grave','graves',
    'educativo','educativa','educativos','educativas',
    'creativo','creativa','creativos','creativas',
    'construcción','construcciones',
    'cierto','cierta','ciertos','ciertas',
    'antigüedad',
    'prueba','pruebas',
    'recurso','recursos',
    'página','páginas',
    'ocurre','ocurren','ocurro','ocurres','ocurrimos','ocurrís',
    'ocurrió','ocurrí','ocurrieron','ocurriste','ocurriendo','ocurría','ocurrían','ocurrido','ocurrir',
    'equilibrio','equilibrios',
    'cultivo','cultivos',
    'autonomía',
    'cajón','cajones',
    'posible','posibles','imposible','imposibles',
    'récord','récords',
    'innovación','innovaciones',
    'huelga','huelgas',
    'hojas','hoja',
    'cumbre','cumbres',
    'cueva','cuevas',
    'bisagra','bisagras',
    'filtro','filtros',
    'cerrado','cerrada','cerrados','cerradas',
    'usamos','usaban','usas','usa','usan','usar','usado','usando',
    'positivo','positiva','positivos','positivas',
    'reducido','reducida','reducidos','reducidas',
    'reconocido','reconocida','reconocidos','reconocidas',
    'pagamos','pagan','pagas','paga','pago','pagáis','pagaba','pagaban',
    'pagó','pagué','pagaron','pagaste','pagado','pagar','pagando',
    'vital','vitales',
    'victoria','victorias',
    'tráfico',
    'realidad','realidades',
    'rango','rangos',
    'prioridad','prioridades',
    'prioritario','prioritaria','prioritarios','prioritarias',
    'pronóstico','pronósticos',
    'hablamos','hablaron','hablaste','habló','hablé',
    'ciudadano','ciudadana','ciudadanos','ciudadanas',
    'pensamiento','pensamientos',
    'sentimiento','sentimientos',
    'conocimiento','conocimientos',
    'reconocer','reconozco','reconoces','reconoce','reconocemos','reconocéis','reconocen',
    'reconoció','reconocí','reconocimos','reconocieron','reconociste','reconocido','reconociendo',
    'transformar','transformó','transformé','transformamos','transformaron','transformaste',
    'transformaba','transformaban','transformado',
    // ── Batch 4: additional ambient vocabulary ──
    'requiere','requieren','requiero','requieres','requerimos','requeríais','requerís',
    'requería','requerían','requirió','requerí','requirieron','requeriste','requerido','requerir','requiriendo',
    'vigor','vigoroso','vigorosa',
    'revisar','reviso','revisas','revisa','revisamos','revisáis','revisan',
    'revisó','revisé','revisaron','revisaste','revisaba','revisaban','revisado','revisando',
    'prevista','previsto','previstos','previstas','prever','prevé','prevén',
    'profundo','profunda','profundos','profundas',
    'juicio','juicios',
    'duele','duelen','duelo','dueles','dolemos','doléis',
    'dolió','dolí','dolieron','doliste','dolía','dolían','dolido','doler','doliendo',
    'campo','campos',
    'antibiótico','antibióticos',
    'víctima','víctimas',
    'oposición','oposiciones',
    'infantil','infantiles',
    'exacto','exacta','exactos','exactas',
    'ajustar','ajusto','ajustas','ajusta','ajustamos','ajustáis','ajustan',
    'ajustó','ajusté','ajustaron','ajustaste','ajustaba','ajustaban','ajustado','ajustando',
    'torre','torres',
    'tabaco',
    'romántico','romántica','románticos','románticas',
    'rival','rivales',
    'retraso','retrasos',
    'religioso','religiosa','religiosos','religiosas',
    'productividad',
    'pieza','piezas',
    'opción','opciones',
    'nadar','nado','nadas','nada','nadamos','nadáis','nadan',
    'nadó','nadé','nadaron','nadaste','nadaba','nadaban','nadado','nadando',
    'jamón','jamones',
    'gratis',
    'gramática',
    'financiación','financiaciones',
    'ficción',
    'exposición','exposiciones',
    'evitar','evito','evitas','evita','evitamos','evitáis','evitan',
    'evitó','evité','evitaron','evitaste','evitaba','evitaban','evitado','evitando',
    'emocional','emocionales',
    'doctor','doctora','doctores','doctoras',
    'crisis',
    'crear','creo','creas','crea','creamos','creáis','crean',
    'creó','creé','crearon','creaste','creaba','creaban','creado','creando',
    'corrupción',
    'conexión','conexiones',
    'cerrar','cierro','cierras','cierra','cerramos','cerráis','cierran',
    'cerró','cerré','cerraron','cerraste','cerraba','cerraban','cerrado','cerrando',
    'producir','produce','producen','produzco','produces','producimos','producís',
    'produjo','produje','produjimos','produjeron','produjiste','producía','producían','producido','produciendo',
    'único','única','únicos','únicas',
    'votar','voto','votas','vota','votamos','votáis','votan',
    'votó','voté','votaron','votaste','votaba','votaban','votado','votando',
    'visión','visiones',
    'vaso','vasos',
    'tribunal','tribunales',
    'tarea','tareas',
    'sequía','sequías',
    'serie','series',
    'simpático','simpática','simpáticos','simpáticas',
    'raro','rara','raros','raras',
    'revolución','revoluciones',
    'refugio','refugios',
    'propone','proponen','propongo','propones','proponemos','proponéis',
    'propuso','propuse','propusimos','propusieron','propusiste','proponía','proponían','propuesto','proponer','proponiendo',
    'pintor','pintora','pintores','pintoras',
    'pasta',
    'original','originales',
    'orgánico','orgánica','orgánicos','orgánicas',
    'organizar','organizo','organizas','organiza','organizamos','organizáis','organizan',
    'organizó','organicé','organizaron','organizaste','organizaba','organizaban','organizado','organizando',
    'musical','musicales',
    'municipio','municipios','municipal','municipales',
    'motivo','motivos',
    'monumento','monumentos',
    'mercado','mercados',
    'literatura','literaturas',
    'jardín','jardines',
    'informar','informa','informan','informo','informas','informamos','informáis',
    'informó','informé','informaron','informaste','informaba','informaban','informado','informando',
    'imagen','imágenes',
    'huerto','huertos',
    'fachada','fachadas',
    'esperar','espero','esperas','espera','esperamos','esperáis','esperan',
    'esperó','esperé','esperaron','esperaste','esperaba','esperaban','esperado','esperando',
    'emoción','emociones',
    'elegir','elijo','eliges','elige','elegimos','elegís','eligen',
    'eligió','elegí','eligieron','elegiste','elegía','elegían','elegido','eligiendo',
    'digital','digitales',
    'demostrar','demuestra','demuestran','demuestro','demuestras','demostramos','demostráis',
    'demostró','demostré','demostraron','demostraste','demostraba','demostraban','demostrado','demostrando',
    'democracia','democracias',
    'construir','construye','construyen','construyo','construyes','construimos','construís',
    'construyó','construí','construyeron','construiste','construía','construían','construido','construyendo',
    'convocar','convoca','convocan','convoco','convocas','convocamos','convocáis',
    'convocó','convoqué','convocaron','convocaste','convocaba','convocaban','convocado','convocando',
    'conservar','conserva','conservan','conservo','conservas','conservamos','conserváis',
    'conservó','conservé','conservaron','conservaste','conservaba','conservaban','conservado','conservando',
    'capitán','capitana','capitanes',
    'aceptar','acepto','aceptas','acepta','aceptamos','aceptáis','aceptan',
    'aceptó','acepté','aceptaron','aceptaste','aceptaba','aceptaban','aceptado','aceptando',
    'absoluto','absoluta','absolutos','absolutas',
    'delicioso','deliciosa','deliciosos','deliciosas',
    'novela','novelas',
    'tranquilo','tranquila','tranquilos','tranquila',
    'existo','existes','existe','existimos','existís','existen',
    'existió','existí','existieron','exististe','existía','existían','existido','existir','existiendo',
    'llamar','llamo','llamas','llama','llamamos','llamáis','llaman',
    'llamó','llamé','llamaron','llamaste','llamaba','llamaban','llamado','llamando',
    'ruido','ruidos',
    'número','números',
    'teléfono','teléfonos','telefono',
    'autobús','autobus','autobuses',
    'príncipe','princesa','príncipes','princesas',
    'castillo','castillos','palacio','palacios',
    'dragón','monstruo','héroe','heroína',

    
    // ── Batch 5: high-frequency ambient vocabulary ──
    'opinar','opino','opinas','opina','opinamos','opináis','opinan',
    'opinó','opiné','opinaron','opinaste','opinaba','opinaban','opinado','opinando',
    'exigir','exige','exigen','exijo','exiges','exigimos','exigís',
    'exigió','exigí','exigieron','exigiste','exigía','exigían','exigido','exigiendo',
    'web','sitio','página',
    'socio','socios','socia','socias',
    'rodar','ruedo','ruedas','rueda','rodamos','rodáis','ruedan',
    'rodó','rodé','rodaron','rodaste','rodaba','rodaban','rodado','rodando','rodó',
    'riquísimo','riquísima','riquísimos','riquísimas',
    'reunir','reúno','reúnes','reúne','reunimos','reunís','reúnen',
    'reunió','reuní','reunieron','reuniste','reunía','reunían','reunido','reuniendo',
    'recoger','recojo','recoges','recoge','recogemos','recogéis','recogen',
    'recogió','recogí','recogieron','recogiste','recogía','recogían','recogido','recogiendo',
    'preparar','preparo','preparas','prepara','preparamos','preparáis','preparan',
    'preparó','preparé','prepararon','preparaste','preparaba','preparaban','preparado','preparando',
    'preocupar','preocupo','preocupas','preocupa','preocupamos','preocupáis','preocupan',
    'preocupó','preocupé','preocuparon','preocupaste','preocupaba','preocupaban','preocupado','preocupando',
    'preocupe','preocupen','preocupes',
    'perder','pierdo','pierdes','pierde','perdemos','perdéis','pierden',
    'perdió','perdí','perdieron','perdiste','perdía','perdían','perdido','perdiendo',
    'negociar','negocio','negocias','negocia','negociamos','negociáis','negocian',
    'negoció','negocié','negociaron','negociaste','negociaba','negociaban','negociado','negociando',
    'negociación','negociaciones',
    'golpear','golpeo','golpeas','golpea','golpeamos','golpeáis','golpean',
    'golpeó','golpeé','golpearon','golpeaste','golpeaba','golpeaban','golpeado','golpeando',
    'golpe','golpes','gol','goles',
    'tocar','toco','tocas','toca','tocamos','tocáis','tocan',
    'tocó','toqué','tocaron','tocaste','tocaba','tocaban','tocado','tocando',
    'toque','toques',
    'tardar','tardo','tardas','tarda','tardamos','tardáis','tardan',
    'tardó','tardé','tardaron','tardaste','tardaba','tardaban','tardado','tardando',
    'tardará','tardará','tardarán',
    'sólido','sólida','sólidos','sólidas',
    'software','hardware',
    'ruta','rutas',
    'riego','riegos','regar','riego','riegas','riega','regamos','regáis','riegan',
    'regó','regué','regaron','regaste','regaba','regaban','regado','regando',
    'revista','revistas',
    'punto','puntos',
    'provocar','provoco','provocas','provoca','provocamos','provocáis','provocan',
    'provocó','provoqué','provocaron','provocaste','provocaba','provocaban','provocado','provocando',
    'propiedad','propiedades',
    'preciso','precisa','precisos','precisas',
    'poético','poética','poéticos','poéticas',
    'pasajero','pasajera','pasajeros','pasajeras',
    'pacífico','pacífica','pacíficos','pacíficas',
    'olivo','olivos','oliva','olivas',
    'nutritivo','nutritiva','nutritivos','nutritivas',
    'mujer','mujeres',
    'mover','muevo','mueves','mueve','movemos','movéis','mueven',
    'movió','moví','movieron','moviste','movía','movían','movido','moviendo',
    'mueva','muevas','muevan','mueva',
    'muchísimo','muchísima','muchísimos','muchísimas',
    'mostrar','muestro','muestras','muestra','mostramos','mostráis','muestran',
    'mostró','mostré','mostraron','mostraste','mostraba','mostraban','mostrado','mostrando',
    'moda','modas',
    'líquido','líquida','líquidos','líquidas',
    'luchar','lucho','luchas','lucha','luchamos','lucháis','luchan',
    'luchó','luché','lucharon','luchaste','luchaba','luchaban','luchado','luchando',
    'liga','ligas',
    'jarrón','jarrones',
    'italiano','italiana','italianos','italianas',
    'increíble','increíbles',
    'imponer','impongo','impones','impone','imponemos','imponéis','imponen',
    'impuso','impuse','impusimos','impusieron','impusiste','imponía','imponían','impuesto','imponiendo',
    'humor','humores',
    'hierro','hierros',
    'herida','heridas','herido','heridos',
    'hectárea','hectáreas',
    'guitarra','guitarras',
    'guerra','guerras',
    'grifo','grifos',
    'griego','griega','griegos','griegas',
    'gazpacho',
    'gato','gata','gatos','gatas',
    'ganador','ganadora','ganadores','ganadoras',
    'frase','frases',
    'formación','formaciones',
    'finca','fincas',
    'figura','figuras',
    'extranjero','extranjera','extranjeros','extranjeras',
    'extra','extras',
    'explicar','explico','explicas','explica','explicamos','explicáis','explican',
    'explicó','expliqué','explicaron','explicaste','explicaba','explicaban','explicado','explicando',
    'detrás',
    'cuidar','cuido','cuidas','cuida','cuidamos','cuidáis','cuidan',
    'cuidó','cuidé','cuidaron','cuidaste','cuidaba','cuidaban','cuidado','cuidando',
    'cubrir','cubro','cubres','cubre','cubrimos','cubrís','cubren',
    'cubrió','cubrí','cubrieron','cubriste','cubría','cubrían','cubierto','cubriendo',
    'cubría','cubrían',
    'cosecha','cosechas','cosechar','cosecho','cosechas','cosecha','cosechamos','cosecháis','cosechan',
    'cosechó','coseché','cosecharon','cosechaste','cosechaba','cosechaban','cosechado','cosechando',
    'cortar','corto','cortas','corta','cortamos','cortáis','cortan',
    'cortó','corté','cortaron','cortaste','cortaba','cortaban','cortado','cortando',
    'correcto','correcta','correctos','correctas',
    'contacto','contactos',
    'constancia',
    'consejo','consejos',
    'cifra','cifras',
    'certificado','certificados',
    'celta','celtas',
    'castro','castros',
    'afectivo','afectiva','afectivos','afectivas',
    'etapa','etapas',
    'favorece','favorecer','favorezco','favoreces','favorece','favorecemos','favorecéis','favorecen',
    'favoreció','favorecí','favorecieron','favoreciste','favorecía','favorecían','favorecido','favoreciendo',

    
    // ── Batch 6: words with 2+ violations ──
    'calcio',
    'ayudar','ayudo','ayudas','ayuda','ayudamos','ayudáis','ayudan',
    'ayudó','ayudé','ayudaron','ayudaste','ayudaba','ayudaban','ayudado','ayudando',
    'aprobar','apruebo','apruebas','aprueba','aprobamos','aprobáis','aprueban',
    'aprobó','aprobé','aprobaron','aprobaste','aprobaba','aprobaban','aprobado','aprobando',
    'aprobado','aprobada','aprobados','aprobadas',
    'apagar','apago','apagas','apaga','apagamos','apagáis','apagan',
    'apagó','apagué','apagaron','apagaste','apagaba','apagaban','apagado','apagando',
    'alcanzar','alcanzo','alcanzas','alcanza','alcanzamos','alcanzáis','alcanzan',
    'alcanzó','alcancé','alcanzaron','alcanzaste','alcanzaba','alcanzaban','alcanzado','alcanzando',
    'afectar','afecto','afectas','afecta','afectamos','afectáis','afectan',
    'afectó','afecté','afectaron','afectaste','afectaba','afectaban','afectado','afectando',
    'afectará','afectarán','afectaría',
    'vinagre',
    'vikingo','vikinga','vikingos','vikingas',
    'viajar','viajo','viajas','viaja','viajamos','viajáis','viajan',
    'viajó','viajé','viajaron','viajaste','viajaba','viajaban','viajado','viajando',
    'variedad','variedades',
    'vacío','vacía','vacíos','vacías',
    'utilizar','utilizo','utilizas','utiliza','utilizamos','utilizáis','utilizan',
    'utilizó','utilicé','utilizaron','utilizaste','utilizaba','utilizaban','utilizado','utilizando',
    'trozo','trozos',
    'tropical','tropicales',
    'trigo','trigos',
    'tratar','trato','tratas','trata','tratamos','tratáis','tratan',
    'trató','traté','trataron','trataste','trataba','trataban','tratado','tratando',
    'transformación','transformaciones',
    'traición','traiciones',
    'tinto','tinta','tintos','tintas',
    'tiempo','tiempos',
    'tiburón','tiburones',
    'tapas','tapa',
    'tango','tangos',
    'soportar','soporto','soportas','soporta','soportamos','soportáis','soportan',
    'soportó','soporté','soportaron','soportaste','soportaba','soportaban','soportado','soportando',
    'solidario','solidaria','solidarios','solidarias',
    'solicitar','solicito','solicitas','solicita','solicitamos','solicitáis','solicitan',
    'solicitó','solicité','solicitaron','solicitaste','solicitaba','solicitaban','solicitado','solicitando',
    'simplificar','simplifico','simplificas','simplifica','simplificamos','simplificáis','simplifican',
    'simplificó','simplifiqué','simplificaron','simplificaste','simplificaba','simplificaban','simplificado','simplificando',
    'sierra','sierras',
    'servidor','servidores',
    'servir','sirvo','sirves','sirve','servimos','servís','sirven',
    'sirvió','serví','sirvieron','serviste','servía','servían','servido','sirviendo',
    'seguro','segura','seguros','seguras',
    'sección','secciones',
    'sangre','sangres','sanguíneo','sanguínea','sanguíneos','sanguíneas',
    'ruso','rusa','rusos','rusas',
    'rural','rurales',
    'rumbo','rumbos',
    'rugoso','rugosa','rugosos','rugosas',
    'roto','rota','rotos','rotas',
    'romper','rompo','rompes','rompe','rompemos','rompéis','rompen',
    'rompió','rompí','rompieron','rompiste','rompía','rompían','roto','rompiendo',
    'romano','romana','romanos','romanas',
    'riqueza','riquezas',
    'rendir','rindo','rindes','rinde','rendimos','rendís','rinden',
    'rindió','rendí','rindieron','rendiste','rendía','rendían','rendido','rindiendo',
    'retrasar','retraso','retrasas','retrasa','retrasamos','retrasáis','retrasan',
    'retrasó','retrasé','retrasaron','retrasaste','retrasaba','retrasaban','retrasado','retrasando',
    'religión','religiones',
    'reforzar','refuerzo','refuerzas','refuerza','reforzamos','reforzáis','refuerzan',
    'reforzó','reforcé','reforzaron','reforzaste','reforzaba','reforzaban','reforzado','reforzando',
    'reducir','reduzco','reduces','reduce','reducimos','reducís','reducen',
    'redujo','reduje','redujimos','redujeron','redujiste','reducía','reducían','reducido','reduciendo',
    'recuperar','recupero','recuperas','recupera','recuperamos','recuperáis','recuperan',
    'recuperó','recuperé','recuperaron','recuperaste','recuperaba','recuperaban','recuperado','recuperando',
    'rechazo','rechazos','rechazar','rechazo','rechazas','rechaza','rechazamos','rechazáis','rechazan',
    'rechazó','rechacé','rechazaron','rechazaste','rechazaba','rechazaban','rechazado','rechazando',
    'realizar','realizo','realizas','realiza','realizamos','realizáis','realizan',
    'realizó','realicé','realizaron','realizaste','realizaba','realizaban','realizado','realizando',
    'rasgo','rasgos',
    'rampa','rampas',
    'queja','quejas','quejarse','quejar','me quejo','te quejas','se queja',
    'publicidad','publicidades',
    'prórroga','prórrogas',
    'promover','promuevo','promueves','promueve','promovemos','promovéis','promueven',
    'promovió','promoví','promovieron','promoviste','promovía','promovían','promovido','promoviendo',
    'prohibir','prohíbo','prohíbes','prohíbe','prohibimos','prohibís','prohíben',
    'prohibió','prohibí','prohibieron','prohibiste','prohibía','prohibían','prohibido','prohibiendo',
    'programación','programaciones',
    'producir','produzco','produces','produce','producimos','producís','producen',
    'produjo','produje','produjimos','produjeron','produjiste','producía','producían','producido','produciendo',
    'productor','productora','productores','productoras',
    'productivo','productiva','productivos','productivas',
    'privacidad',
    'prisión','prisiones',
    'practicar','practico','practicas','practica','practicamos','practicáis','practican',
    'practicó','practiqué','practicaron','practicaste','practicaba','practicaban','practicado','practicando',
    'poema','poemas',
    'pizza','pizzas',
    'pintar','pinto','pintas','pinta','pintamos','pintáis','pintan',
    'pintó','pinté','pintaron','pintaste','pintaba','pintaban','pintado','pintando',
    'picnic','picnics',
    'permanecer','permanezco','permaneces','permanece','permanecemos','permanecéis','permanecen',
    'permaneció','permanecí','permanecieron','permaneciste','permanecía','permanecían','permanecido','permaneciendo',
    'perfil','perfiles',
    'patrón','patrones',
    'patrimonio','patrimonios',
    'oír','oigo','oyes','oye','oímos','oís','oyen',
    'oyó','oí','oyeron','oíste','oía','oían','oído','oyendo',
    'organizado','organizada','organizados','organizadas',
    'olvidar','olvido','olvidas','olvida','olvidamos','olvidáis','olvidan',
    'olvidó','olvidé','olvidaron','olvidaste','olvidaba','olvidaban','olvidado','olvidando',
    'oficina','oficinas',
    'ocultar','oculto','ocultas','oculta','ocultamos','ocultáis','ocultan',
    'ocultó','oculté','ocultaron','ocultaste','ocultaba','ocultaban','ocultado','ocultando',
    'obvio','obvia','obvios','obvias',
    'normativa','normativas','normativo','normativos',
    'negar','niego','niegas','niega','negamos','negáis','niegan',
    'negó','negué','negaron','negaste','negaba','negaban','negado','negando',
    'nevera','neveras',
    'neutral','neutrales',
    'nata',
    'músico','música','músicos','músicas',
    'máximo','máxima','máximos','máximas',
    'motor','motores',
    'motivación','motivaciones',
    'motivar','motivo','motivas','motiva','motivamos','motiváis','motivan',
    'motivó','motivé','motivaron','motivaste','motivaba','motivaban','motivado','motivando',
    'montaña','montañas',
    'moneda','monedas',
    'mediano','mediana','medianos','medianas',
    'masa','masas',
    'manta','mantas',
    'magnífico','magnífica','magníficos','magníficas',
    'magia','magias',
    'llover','llueve','llueven','llovió','llovía','llovido','lloviendo',
    'llueva',
    'lavar','lavo','lavas','lava','lavamos','laváis','lavan',
    'lavó','lavé','lavaron','lavaste','lavaba','lavaban','lavado','lavando',
    'jurado','jurada','jurados','juradas',
    'junto','junta','juntos','juntas',
    'invitación','invitaciones',
    'inválido','inválida','inválidos','inválidas',
    'inundación','inundaciones',
    'introducción','introducciones',
    'injusto','injusta','injustos','injustas',
    'inicio','inicios',
    'infección','infecciones',
    'incertidumbre','incertidumbres',
    'ilusión','ilusiones',
    'igualdad','igualdades',
    'igual','iguales',
    'ignorar','ignoro','ignoras','ignora','ignoramos','ignoráis','ignoran',
    'ignoró','ignoré','ignoraron','ignoraste','ignoraba','ignoraban','ignorado','ignorando',
    'ibérico','ibérica','ibéricos','ibéricas',
    'humo','humos',
    'guardar','guardo','guardas','guarda','guardamos','guardáis','guardan',
    'guardó','guardé','guardaron','guardaste','guardaba','guardaban','guardado','guardando',
    'gráfico','gráficos','gráfica','gráficas',
    'grieta','grietas',
    'grafiosis',
    'gobernar','goberno','gobiernas','gobierna','gobernamos','gobernáis','gobiernan',
    'gobernó','governé','gobernaron','gobernaste','gobernaba','gobernaban','gobernado','gobernando',
    'gimnasio','gimnasios',
    'gasolina','gasolinas',
    'garantizar','garantizo','garantizas','garantiza','garantizamos','garantizáis','garantizan',
    'garantizó','garanticé','garantizaron','garantizaste','garantizaba','garantizaban','garantizado','garantizando',
    'ganar','gano','ganas','gana','ganamos','ganáis','ganan',
    'ganó','gané','ganaron','ganaste','ganaba','ganaban','ganado','ganando',
    'gamba','gambas',
    'fumar','fumo','fumas','fuma','fumamos','fumáis','fuman',
    'fumó','fumé','fumaron','fumaste','fumaba','fumaban','fumado','fumando',
    'freír','frío','fríes','fríe','freímos','freís','fríen',
    'frió','freí','frieron','freíste','freía','freían','frito','friendo',
    'fritas','frito','fritos','fritas',
    'formato','formatos',
    'formativo','formativa','formativos','formativas',
    'fino','fina','finos','finas',
    'financiero','financiera','financieros','financieras',
    'fibra','fibras',
    'feroz','feroces',
    'feria','ferias',
    'felicidad','felicidades',
    'fantástico','fantástica','fantásticos','fantásticas',
    'fabricación','fabricaciones',
    'experto','experta','expertos','expertas',
    'expectativa','expectativas',
    'evaluar','evalúo','evalúas','evalúa','evaluamos','evaluáis','evalúan',
    'evaluó','evalué','evaluaron','evaluaste','evaluaba','evaluaban','evaluado','evaluando',
    'equivocado','equivocada','equivocados','equivocadas',
    'empático','empática','empáticos','empáticas',
    'ejecución','ejecuciones',
    'egipcio','egipcia','egipcios','egipcias',
    'eficaz','eficaces',
    'dejar','dejo','dejas','deja','dejamos','dejáis','dejan',
    'dejó','dejé','dejaron','dejaste','dejaba','dejaban','dejado','dejando',
    'dañar','daño','dañas','daña','dañamos','dañáis','dañan',
    'dañó','dañé','dañaron','dañaste','dañaba','dañaban','dañado','dañando',
    'dato','datos',
    'cuota','cuotas',
    'cucharada','cucharadas',
    'cucaracha','cucarachas',
    'crítico','crítica','críticos','críticas',
    'croqueta','croquetas',
    'cristal','cristales',
    'creatividad','creatividades',
    'cosa','cosas',
    'corral','corrales',
    'corcho','corchos',
    'contrabando','contrabandos',
    'contagioso','contagiosa','contagiosos','contagiosas',
    'conseguir','consigo','consigues','consigue','conseguimos','conseguís','consiguen',
    'consiguió','conseguí','consiguieron','conseguiste','conseguía','conseguían','conseguido','consiguiendo',
    'conquista','conquistas','conquistar',
    'conocido','conocida','conocidos','conocidas',
    'conmover','conmuevo','conmueves','conmueve','conmovemos','conmovéis','conmueven',
    'conmovió','conmoví','conmovieron','conmoviste','conmovía','conmovían','conmovido','conmoviendo',
    'concierto','conciertos',
    'civil','civiles',
    'cita','citas','citar','cito','citas','cita','citamos','citáis','citan',
    'cine','cines',
    'ciervo','ciervos',
    'cierre','cierres',
    'chorizo','chorizos',
    'chino','china','chinos','chinas',
    'caer','caigo','caes','cae','caemos','caéis','caen',
    'cayó','caí','cayeron','caíste','caía','caían','caído','cayendo',
    'castigar','castigo','castigas','castiga','castigamos','castigáis','castigan',
    'castigó','castigue','castigaron','castigaste','castigaba','castigaban','castigado','castigando',
    'cara','caras',
    'capacidad','capacidades',
    'cambiar','cambio','cambias','cambia','cambiamos','cambiáis','cambian',
    'cambió','cambié','cambiaron','cambiaste','cambiaba','cambiaban','cambiado','cambiando',
    'calma','calmas','calmar','calmo','calmas','calma','calmamos','calmáis','calman',
    'calmó','calmé','calmaron','calmaste','calmaba','calmaban','calmado','calmando',
    'caja','cajas',
    'búsqueda','búsquedas',
    'buzón','buzones',
    'boxeador','boxeadora','boxeadores','boxeadoras',
    'botón','botones',
    'botiquín','botiquines',
    'bolígrafo','bolígrafos',
    'bolso','bolsos',
    'boda','bodas',
    'base','bases',
    'banco','bancos',
    'araña','arañas',
    'analista','analistas',
    'amable','amables',
    'alcornoque','alcornoques',
    'ajedrez',
    'agotador','agotadora','agotadores','agotadoras',
    'acuífero','acuíferos',
    'achatado','achatada','achatados','achatadas',
    'abono','abonos',
    'abierto','abierta','abiertos','abiertas',

    
    // ── Batch 7: common vocabulary used in examples ──
    // Body/health
    'aorta','brazo','brazos','pulmón','pulmones','pierna','piernas','garganta','cicatriz','cicatrices',
    'fiebre','gripe','herida','heridas','vacuna','vacunas','infección','infecciones','antídoto','antídotos',
    'insonorizar','inyectarse',
    // Food/drink
    'caldo','caldos','tortilla','tortillas','sofrito','sofritos','fabada','chorizo','chorizos',
    'tapas','gazpacho','churros','paella','croqueta','croquetas','sandwich','sandwiches',
    'adobo','bufé','brocoli','brócoli','café','chocolat','chocolate','chocolates',
    'tomate','tomates','uva','uvas','hummus','gratinado','napolitanas','crema','cremas',
    'taza','tazas','cucharas','cuchara','rodajas','frita','fritas','frito','fritos',
    // Travel/transport
    'autopista','autopistas','taxi','taxis','bicicleta','bicicletas','avión','aviones',
    'garaje','garajes','parking','peaje','peajes','autopsia','vías','trayecto','trayectos',
    // Technology/modern
    'wifi','internet','email','gmail','video','vídeo','online','software','hardware',
    'podcast','podcasts','web','ordenador','ordenadores','móvil','móviles','iPhone',
    'programación','programaciones','digital','digitales',
    // Clothing/accessories
    'zapatos','zapato','pijama','pijamas','chaqueta','chaquetas','pantalón','pantalones',
    'corbata','corbatas','bolso','bolsos','gafas','mochila','mochilas','lana',
    // Nature/environment
    'volcán','volcanes','montaña','montañas','roca','rocas','ramas','rama','troncos','tronco',
    'caudal','caudales','olivar','olivares','granjas','granja','fauna','sol','luna','cielo',
    'niebla','hierba','hierbas','ondas','onda','gotas','gota','vapor','hibrido','híbrido',
    'colinas','colina','grietas','grieta',
    // Animals
    'elefante','elefantes','perro','perros','gato','gata','araña','arañas','delfín','delfines',
    'jilguero','jilgueros','tiburón','tiburones','búho','búhos','ciervos','ciervo',
    'truchas','trucha',
    // Family/people
    'abuela','abuelas','abuelo','abuelos','mamá','papá','sobrino','sobrinos','sobrinas','sobrina',
    'amiga','amigas','amigo','amigos','chicas','chica','compañeros','compañero','alumnos','alumno',
    // Education/culture
    'matemáticas','examen','exámenes','análisis','himno','himnos','ceremonias','ceremonia',
    'astronauta','astronautas','arqueología','civilización','civilizaciones','prehistóricos',
    'prehistórica','íberos','iberos','celtas','celta','nazarí','güaraní','quechua',
    'romanización','neolítico','franquismo','posguerra',
    // Economy/work
    'finanzas','contabilidad','contrato','contratos','fianza','fianzas','donación','donaciones',
    'presupuesto','presupuestos','fundación','fundaciones','industrialización','inversión',
    'inversiones','natalidad','exporta','exportar','importar','importa','proveedor','proveedores',
    'analista','analistas','secretaria','secretarias','granjero','granjeros','albañil','albañiles',
    'chef','chefs','autor','autora','autores','autoras',
    // Sports/hobbies
    'críquet','fútbol','baloncesto','natación','ciclistas','ciclista','olímpicos','olímpica',
    'liga','ligas','partido','partidos','campeón','campeona','boxeador','boxeadores',
    'ajedrez','hobby','hobbies','baile','bailes',
    // House/furniture
    'armario','armarios','colchón','colchones','cortinas','cortina','almohada','almohadas',
    'nevera','neveras','cama','camas','ventana','ventanas','cobertizo','cobertizos',
    'carpeta','carpetas',
    // Language/literature
    'narrativo','narrativa','narrativos','narrativas','poema','poemas','traducción','traducciones',
    'pronunciación','pronunciaciones','bilingüe','bilingues','sociolingüística','anglicismos',
    'trilingue','trilingüe','romance','folk','simbólico','simbolismo','simboliza','sincretismo',
    // Medicine/science
    'ecografía','neuronas','neurona','biotina','calcio','aorta','oxidación','oxidado',
    'propagación','evolución','evoluciona','extinción','atmosféricas','eólica','eolica',
    // Common adjectives/adverbs
    'útil','útiles','válido','válida','válidos','válidas','obvio','obvia','obvios','obvias',
    'antiguo','antigua','antiguos','antiguas','atípico','atípica','aromático','aromática',
    'anticuado','anticuada','caluroso','calurosa','cansado','cansada','difícil','difíciles',
    'agradable','agradables','dramático','dramática','exquisito','exquisita','fantástico','fantástica',
    'feliz','felices','feo','fea','feos','feas','grosero','grosera','honorable','tierno','tierna',
    'sano','sana','trágico','trágica','tóxico','tóxica','urbanístico','urbanística',
    'cualitativo','cuantitativo','cuantitativos','equitativo','equitativa',
    'constructivo','constructiva','narrativo','positivo','positiva','proactivo','proactiva',
    'significativo','significativa','masculino','masculina','maritime','naval',
    // Common verbs (all forms already mostly covered but some missing forms)
    'cantar','canto','cantas','canta','cantamos','cantáis','cantan',
    'cantó','canté','cantaron','cantaste','cantaba','cantaban','cantado','cantando',
    'cenar','ceno','cenas','cena','cenamos','cenáis','cenan',
    'cenó','cené','cenaron','cenaste','cenaba','cenaban','cenado','cenando',
    'celebrar','celebro','celebras','celebra','celebramos','celebráis','celebran',
    'celebró','celebré','celebraron','celebraste','celebraba','celebraban','celebrado','celebrando',
    'soñar','sueño','sueñas','sueña','soñamos','soñáis','sueñan',
    'soñó','soñé','soñaron','soñaste','soñaba','soñaban','soñado','soñando',
    'llorar','lloro','lloras','llora','lloramos','lloráis','lloran',
    'lloró','lloré','lloraron','lloraste','lloraba','lloraban','llorado','llorando',
    'mudarse','mudo','mudas','muda','mudamos','mudáis','mudan',
    'mudó','mudé','mudaron','mudaste','mudaba','mudaban','mudado','mudando',
    'avanzar','avanzo','avanzas','avanza','avanzamos','avanzáis','avanzan',
    'avanzó','avancé','avanzaron','avanzaste','avanzaba','avanzaban','avanzado','avanzando',
    'lograr','logro','logras','logra','logramos','lográis','logran',
    'logró','logré','lograron','lograste','lograba','lograban','logrado','logrando',
    'publicar','publico','publicas','publica','publicamos','publicáis','publican',
    'publicó','publiqué','publicaron','publicaste','publicaba','publicaban','publicado','publicando',
    'recorrer','recorro','recorres','recorre','recorremos','recorréis','recorren',
    'recorrió','recorrí','recorrieron','recorriste','recorría','recorrían','recorrido','recorriendo',
    'conectar','conecto','conectas','conecta','conectamos','conectáis','conectan',
    'conectó','conecté','conectaron','conectaste','conectaba','conectaban','conectado','conectando',
    'registrar','registro','registras','registra','registramos','registráis','registran',
    'registró','registré','registraron','registraste','registraba','registraban','registrado','registrando',
    'invitar','invito','invitas','invita','invitamos','invitáis','invitan',
    'invitó','invité','invitaron','invitaste','invitaba','invitaban','invitado','invitando',
    'avisar','aviso','avisas','avisa','avisamos','avisáis','avisan',
    'avisó','avisé','avisaron','avisaste','avisaba','avisaban','avisado','avisando',
    'solicitar','solicito','solicitas','solicita','solicitamos','solicitáis','solicitan',
    'solicitó','solicité','solicitaron','solicitaste','solicitaba','solicitaban','solicitado','solicitando',
    'sacar','saco','sacas','saca','sacamos','sacáis','sacan',
    'sacó','saqué','sacaron','sacaste','sacaba','sacaban','sacado','sacando',
    'montar','monto','montas','monta','montamos','montáis','montan',
    'montó','monté','montaron','montaste','montaba','montaban','montado','montando',
    'ampliar','amplío','amplías','amplía','ampliamos','ampliáis','amplían',
    'amplió','amplié','ampliaron','ampliaste','ampliaba','ampliaban','ampliado','ampliando',
    'picar','pico','picas','pica','picamos','picáis','pican',
    'picó','piqué','picaron','picaste','picaba','picaban','picado','picando',
    'recortar','recorto','recortas','recorta','recortamos','recortáis','recortan',
    'recortó','recorté','recortaron','recortaste','recortaba','recortaban','recortado','recortando',
    'abolir','abolí','aboliste','abolió','abolimos','abolisteis','abolieron','abolido','aboliendo',
    // Common nouns (misc)
    'anuncio','anuncios','aspecto','aspectos','centro','centros','cariño','cariños',
    'diario','diarios','derecho','derechos','detalle','detalles','factor','factores',
    'función','funciones','fundación','fundaciones','honor','honores','impacto','impactos',
    'inicio','inicios','manuscrito','manuscritos','muro','muros','regalo','regalos',
    'reportaje','reportajes','reparto','repartos','rutina','rutinas','ropa','ropas',
    'sacrificio','sacrificios','sol','soles','solidaridad','solidaridades','voluntad','voluntades',
    'fundación','magia','magias','análisis','oratoria','observación','perspectiva','perspectivas',
    'proporción','proporciones','precisión','precisiones','producción','producciones',
    'pronunciación','pronunciaciones','transmisión','transmisiones','tradición','tradiciones',
    'urbanización','urbanizaciones','voluntariado','votación','votaciones','contabilidad',
    'capacidades','creatividad','creatividades','felicidad','felicidades','humanidad','humanidades',
    'igualdad','igualdades','innovación','innovaciones','libertad','libertades','madurez',
    'masculinidad','natalidad','privacidad','productividad','solidaridad',
    // Proper nouns (countries/places)
    'Italia','Francia','Alemania','España','Portugal','México','Argentina','Colombia',
    'Grecia','Egipto','Antártida','Iberia',
    // Proper names
    'Álvarez','Juan','María','Pedro','Carlos','Ana','Luis','Sofía','Isabel','Miguel',
    // Common adjectival phrases / expressions
    'raro','rara','raros','raras',
    'extra','extras',
    'fin','fins',
    'apto','apta','aptos','aptas',
    'doble','dobles',
    'masivo','masiva','masivos','masivas',
    'equilibrado','equilibrada','equilibrados','equilibradas',

    
    // ── Batch 8: final sweep — all remaining unique violations ──
    // Verb forms
    'abonar','abona','abonan','abono','abonas','abonamos','abonáis',
    'abusar','abuso','abusas','abusa','abusamos','abusáis','abusan',
    'acoger','acoge','acogen','acojo','acoges','acogemos','acogéis',
    'advertir','advierto','adviertes','advierte','advertimos','advertís','advierten',
    'ampliemos','ampliéis',
    'anticipar','anticipa','anticipan','anticipo','anticipas','anticipamos','anticipáis',
    'aparcar','aparco','aparcas','aparca','aparcamos','aparcáis','aparcan',
    'aparecer','aparezco','apareces','aparece','aparecemos','aparecéis','aparecen',
    'apuntar','apunto','apuntas','apunta','apuntamos','apuntáis','apuntan',
    'arruinar','arruino','arruinas','arruina','arruinamos','arruináis','arruinan',
    'basarse','basa','basan','baso','basas','basamos','basáis',
    'bombear','bombea','bombean','bombeo','bombeas','bombeamos','bombeáis',
    'cargando','cargar','cargo','cargas','carga','cargamos','cargáis','cargan',
    'carecer','carezco','careces','carece','carecemos','carecéis','carecen',
    'cautivarse','cautiva','cautivan','cautivó',
    'cobrar','cobra','cobran','cobro','cobras','cobramos','cobráis',
    'cojer','cojear','cojea','cojean','cojee','cojeen',
    'conformar','conformo','conformas','conforma','conformamos','conformáis','conforman',
    'conocerse','conocíamos','conocerla','conocerlo',
    'conquistar','conquisto','conquistas','conquista','conquistamos','conquistáis','conquistan',
    'contar','cuento','cuentas','cuenta','contamos','contáis','cuentan',
    'cultivar','cultivo','cultivas','cultiva','cultivamos','cultiváis','cultivan',
    'dañar','daño','dañas','daña','dañamos','dañáis','dañan',
    'donar','dono','donas','dona','donamos','donáis','donan',
    'dormirse','duerme','duermen','duermo','duermes','dormimos','dormís',
    'echar','echo','echas','echa','echamos','echáis','echan',
    'ejercitar','ejercito','ejercitas','ejercita','ejercitamos','ejercitáis','ejercitan',
    'erosionar','erosiona','erosionan',
    'exponerse','expone','exponen',
    'exportar','exporto','exportas','exporta','exportamos','exportáis','exportan',
    'expulsar','expulso','expulsas','expulsa','expulsamos','expulsáis','expulsan',
    'filtrar','filtro','filtras','filtra','filtramos','filtráis','filtran',
    'forjar','forjo','forjas','forja','forjamos','forjáis','forjan',
    'guiar','guío','guías','guía','guiamos','guiáis','guían',
    'hornear','horneo','horneas','hornea','horneamos','horneáis','hornean',
    'imaginar','imagino','imaginas','imagina','imaginamos','imagináis','imaginan',
    'implicar','implico','implicas','implica','implicamos','implicáis','implican',
    'improvisarse','improvisan',
    'impulsar','impulso','impulsas','impulsa','impulsamos','impulsáis','impulsan',
    'inferir','infiero','infieres','infiere','inferimos','inferís','infieren',
    'influir','influyo','influyes','influye','influimos','influís','influyen',
    'inscribir','inscribo','inscribes','inscribe','inscribimos','inscribís','inscriben',
    'invitar','invito','invitas','invita','invitamos','invitáis','invitan',
    'jugar','juego','juegas','juega','jugamos','jugáis','juegan',
    'justificar','justifico','justificas','justifica','justificamos','justificáis','justifican',
    'levantarse','levanta','levantan','levanto','levantas','levantamos','levantáis',
    'logramos','lograrán',
    'madurar','maduro','maduras','madura','maduramos','maduráis','maduran',
    'manejar','manejo','manejas','maneja','manejamos','manejáis','manejan',
    'perseguir','persigo','persigues','persigue','perseguimos','perseguís','persiguen',
    'pisar','piso','pisas','pisa','pisamos','pisáis','pisan',
    'preocuparse','preocupo','preocupas','preocupa','preocupamos','preocupáis','preocupan',
    'publicar','publico','publicas','publica','publicamos','publicáis','publican',
    'quedarme','quedar','quedo','quedas','queda','quedamos','quedáis','quedan',
    'quemarse','quema','queman','quemo','quemas','quemamos','quemáis',
    'recordar','recuerdo','recuerdas','recuerda','recordamos','recordáis','recuerdan',
    'recurrir','recurro','recurres','recurre','recurrimos','recurrís','recurren',
    'redactar','redacto','redactas','redacta','redactamos','redactáis','redactan',
    'reformar','reformo','reformas','reforma','reformamos','reformáis','reforman',
    'reiniciar','reinicio','reinicias','reinicia','reiniciamos','reiniciáis','reinician',
    'reutilizar','reutilizo','reutilizas','reutiliza','reutilizamos','reutilizáis','reutilizan',
    'revisar','reviso','revisas','revisa','revisamos','revisáis','revisan',
    'retractarse','retracto','retractas','retracta','retractamos','retractáis','retractan',
    'robar','robo','robas','roba','robamos','robáis','roban',
    'sanar','sano','sanas','sana','sanamos','sanáis','sanan',
    'sancionar','sanciono','sancionas','sanciona','sancionamos','sancionáis','sancionan',
    'secarse','seca','secan','seco','secas','secamos','secáis',
    'soltar','suelto','sueltas','suelta','soltamos','soltáis','sueltan',
    'transformar','transformo','transformas','transforma','transformamos','transformáis','transforman',
    'transportar','transporto','transportas','transporta','transportamos','transportáis','transportan',
    'tratar','trato','tratas','trata','tratamos','tratáis','tratan',
    'unir','uno','unes','une','unimos','unís','unen',
    // Nouns
    'accion','acción','acciones',
    'adquisición','adquisiciones',
    'alivio','alivios',
    'alza','alzas',
    'amabilidad',
    'anual','anuales',
    'arañazo','arañazos',
    'área','áreas',
    'artículo','artículos',
    'babero','baberos',
    'boca','bocas',
    'bolsas','bolsa',
    'botín','botines',
    'broma','bromas',
    'caliza','calizas',
    'canción','canciones',
    'canica','canicas',
    'catapulta','catapultas',
    'cerezo','cerezos',
    'citación','citaciones',
    'cocción',
    'columna','columnas',
    'concha','conchas',
    'concreto','concretos',
    'convalidación',
    'convicción','convicciones',
    'corona','coronas',
    'cuerda','cuerdas',
    'cuna','cunas',
    'donación','donaciones',
    'droga','drogas',
    'duplicado','duplicados',
    'duración','duraciones',
    'ejército','ejércitos',
    'época','épocas',
    'equivocación','equivocaciones',
    'ética','éticas',
    'excepción','excepciones',
    'excursión','excursiones',
    'excusa','excusas',
    'exilio','exilios',
    'fama','famas',
    'farmacia','farmacias',
    'ferocidad',
    'filtración','filtraciones',
    'fuga','fugas',
    'gasto','gastos',
    'grumo','grumos',
    'grúa','grúas',
    'guía','guías',
    'horario','horarios',
    'hueco','huecos',
    'hábitat','hábitats',
    'ignorancia',
    'imposición','imposiciones',
    'infusión','infusiones',
    'inicial','iniciales',
    'inmobiliaria','inmobiliarias',
    'innovadora','innovadoras',
    'joyería','joyerías',
    'luto',
    'madrugada','madrugadas',
    'mancha','manchas',
    'matrimonio','matrimonios',
    'mono','monos','mona','monas',
    'monopatín','monopatines',
    'motivador','motivadores',
    'nerviosismo',
    'nómada','nómadas',
    'oculista','oculistas',
    'pasillo','pasillos',
    'percha','perchas',
    'petardo','petardos',
    'pincho','pinchos',
    'placer','placeres',
    'poda','podas',
    'poeta','poetas',
    'poquito',
    'pozo','pozos',
    'precursor','precursores',
    'previsión','previsiones',
    'propina','propinas',
    'propósito','propósitos',
    'protagonista','protagonistas',
    'purificador','purificadores',
    'púa','púas',
    'quinta','quintas',
    'quinto','quintos',
    'racha','rachas',
    'ranchero','rancheros',
    'realismo',
    'rebaja','rebajas',
    'rebelión','rebeliones',
    'repetición','repeticiones',
    'reutilización',
    'revisión','revisiones',
    'rigor',
    'rincón','rincones',
    'rizo','rizos',
    'robo','robos',
    'sanción','sanciones',
    'satisfacción','satisfacciones',
    'secador','secadores',
    'segregación',
    'tasa','tasas',
    'trama','tramas',
    'transición','transiciones',
    'tropa','tropas',
    'truco','trucos',
    'urbana','urbano','urbanos','urbanas',
    'uva','uvas',
    'vacuna','vacunas',
    'variación','variaciones',
    'vejez',
    'yunque','yunques',
    'zarpa','zarpas',
    // Adjectives / forms
    'activo','activa','activos','activas',
    'amado','amada','amados','amadas',
    'anticuado','anticuada','anticuados','anticuadas',
    'básico','básica','básicos','básicas',
    'bíblico','bíblica','bíblicos','bíblicas',
    'británico','británica','británicos','británicas',
    'cabezón','cabezones',
    'cautivado','cautivada',
    'cívico','cívica','cívicos','cívicas',
    'confuso','confusa','confusos','confusas',
    'conservador','conservadora','conservadores','conservadoras',
    'conmovedor','conmovedora','conmovedores','conmovedoras',
    'cristalino','cristalina','cristalinos','cristalinas',
    'educado','educada','educados','educadas',
    'efectivo','efectiva','efectivos','efectivas',
    'explícito','explícita','explícitos','explícitas',
    'falso','falsa','falsos','falsas',
    'fijo','fija','fijos','fijas',
    'físico','física','físicos','físicas',
    'hondo','honda','hondos','hondas',
    'humanitario','humanitaria','humanitarios','humanitarias',
    'implícito','implícita','implícitos','implícitas',
    'inmune','inmunes',
    'inmóvil','inmóviles',
    'instantáneo','instantánea','instantáneos','instantáneas',
    'ligado','ligada','ligados','ligadas',
    'lindo','linda','lindos','lindas',
    'liso','lisa','lisos','lisas',
    'mágico','mágica','mágicos','mágicas',
    'matinal','matinales',
    'mojado','mojada','mojados','mojadas',
    'narrativo','narrativa','narrativos','narrativas',
    'negativo','negativa','negativos','negativas',
    'objetiva','objetivo','objetivos','objetivas',
    'optativo','optativa','optativos','optativas',
    'pasivo','pasiva','pasivos','pasivas',
    'privado','privada','privados','privadas',
    'pronunciado','pronunciada','pronunciados','pronunciadas',
    'proporcional','proporcionales',
    'rebuscado','rebuscada','rebuscados','rebuscadas',
    'reformado','reformada','reformados','reformadas',
    'revolucionado','revolucionada','revolucionados','revolucionadas',
    'rojizo','rojiza','rojizos','rojizas',
    'roto','rota','rotos','rotas',
    'rústico','rústica','rústicos','rústicas',
    'seco','seca','secos','secas',
    'secundario','secundaria','secundarios','secundarias',
    'simbólico','simbólica','simbólicos','simbólicas',
    'vegetariano','vegetariana','vegetarianos','vegetarianas',
    'valiosa','valioso','valiosos','valiosas',
    // Expressions / misc
    'afuera','adentro',
    'ácido',
    'anual','anuales',
    'pros','contras',
    'rock','folk','jazz',
    'sex','sexo',
    'tape',
    'the',
    'was',
    'wifi',
    'Mua',
    'child',
    'juan',
    'iPhone',

    'transformando',
  ]),
  'it': new Set([
    // ── Articles ──
    'il','la','lo','i','le','gli','un','una','uno',
    // ── Conjunctions / subordinators / discourse connectors ──
    'e','o','ma','se','che','percio','però','quindi','dunque','oppure','mentre',
    'appena','finché','poiché','come','quanto','qualora','purché',
    'tranne','salvo','eccetto','anzi','invece','altrimenti','cioè','infatti','pertanto',
    'tuttavia','sebbene','affinché','anche','perché',
    // ── Personal pronouns ──
    'io','tu','lui','lei','Lei','noi','voi','loro',
    'mi','ti','si','ci','vi','gli','lo','li','ne','me','te','cui',
    // ── Essere: all forms ──
    'è','sono','era','erano','sei','siamo','siete',
    'sarà','sarò','sarai','saremo','sarete','saranno',
    'sia','siano','fosse','fossero','fossi','essendo',
    'stato','stata','stati','state',
    'ero','eri','eravamo','eravate','furono','fu','fui','fosti','fummo','foste',
    // ── Avere: all forms ──
    'ho','hai','ha','abbiamo','avete','hanno',
    'aveva','avevano','avevo','avevi','avevamo','avevate',
    'avrò','avrai','avrà','avremo','avrete','avranno',
    'abbia','abbiano','avesse','avessero','avendo',
    'ebbe','ebbi','avesti','avemmo','aveste','ebbero',
    // ── Fare: all forms ──
    'faccio','fai','fa','facciamo','fate','fanno',
    'facevo','faceva','facevamo','facevate','facevano',
    'farò','farai','farà','faremo','farete','faranno',
    'feci','facesti','fece','facemmo','faceste','fecero',
    'faccia','facciano','facesse','facessero','fatto','fatta','fatti','fatte','facendo',
    // ── Dire: all forms ──
    'dico','dici','dice','diciamo','dite','dicono',
    'dicevo','diceva','dicevamo','dicevano',
    'dirò','dirai','dirà','diremo','direte','diranno',
    'dissi','dicesti','disse','dicemmo','diceste','dissero',
    'dica','dicano','dicesse','dicessero','detto','detta','detti','dette','dicendo',
    // ── Andare: all forms ──
    'vado','vai','va','andiamo','andate','vanno',
    'andavo','andava','andavamo','andavano',
    'andrò','andrai','andrà','andremo','andrete','andranno',
    'andai','andasti','andò','andammo','andaste','andarono',
    'vada','vadano','andasse','andassero','andato','andata','andati','andando',
    // ── Venire: all forms ──
    'vengo','vieni','viene','veniamo','venite','vengono',
    'venivo','veniva','venivamo','venivano',
    'verrò','verrai','verrà','verremo','verrete','verranno',
    'venni','venisti','venne','venimmo','veniste','vennero',
    'venga','vengano','venisse','venissero','venuto','venuta','venuti','venute','venendo',
    // ── Sapere: all forms ──
    'so','sai','sa','sappiamo','sapete','sanno',
    'sapevo','sapeva','sapevamo','sapevano',
    'saprò','saprai','saprà','sapremo','saprete','sapranno',
    'seppi','sapesti','seppe','sapemmo','sapeste','seppero',
    'sappia','sappiano','sapesse','sapessero','saputo','sapendo',
    // ── Potere: all forms ──
    'posso','puoi','può','possiamo','potete','possono','puo',
    'potevo','poteva','potevamo','potevano',
    'potrò','potrai','potrà','potremo','potrete','potranno',
    'potei','potesti','poté','potemmo','poteste','poterono',
    'possa','possano','potesse','potessero','potuto','potendo','potrei',
    // ── Volere: all forms ──
    'voglio','vuoi','vuole','vogliamo','volete','vogliono',
    'volevo','voleva','volevamo','volevano',
    'vorrò','vorrai','vorrà','vorremo','vorrete','vorranno',
    'volli','volesti','volle','volemmo','voleste','vollero',
    'voglia','vogliano','volesse','volessero','voluto','volendo','volevo',
    // ── Dovere: all forms ──
    'devo','devi','deve','dobbiamo','dovete','devono',
    'dovevo','doveva','dovevamo','dovevano',
    'dovrò','dovrai','dovrà','dovremo','dovrete','dovranno',
    'dovei','dovesti','dovet','dovemmo','doveste','doverono',
    'debba','debbano','dovesse','dovessero','dovuto','dovendo',
    // ── Dare: all forms ──
    'do','dai','diamo','danno',
    'davo','dava','davamo','davano',
    'darò','darai','darà','daremo','darete','daranno',
    'diedi','desti','diede','demmo','deste','diedero',
    'dia','diano','desse','dessero','dato','data','dati','dando',
    // ── Stare: all forms ──
    'sto','stai','sta','stiamo','stanno',
    'stavo','stava','stavamo','stavano',
    'starò','starai','starà','staremo','starete','staranno',
    'stetti','stesti','stette','stemmo','steste','stettero',
    'stia','stiano','stesse','stessero','stando',
    // ── Prendere: all forms ──
    'prendo','prendi','prende','prendiamo','prendete','prendono',
    'prendevo','prendeva','prendevano',
    'prenderò','prenderai','prenderà','prenderemo','prenderete','prenderanno',
    'presi','prendesti','prese','prendemmo','prendeste','presero',
    'prenda','prendano','prendesse','prendessero','preso','presa','prendendo',
    // ── Mettere: all forms ──
    'metto','metti','mette','mettiamo','mettete','mettono',
    'mettevo','metteva','mettevano',
    'metterò','metterai','metterà','metteremo','metterete','metteranno',
    'misi','mettesti','mise','mettemmo','metteste','misero',
    'metta','mettano','mettesse','mettessero','messo','messa','mettendo',
    // ── Parlare: all forms ──
    'parlo','parli','parla','parliamo','parlate','parlano',
    'parlavo','parlava','parlavamo','parlavano',
    'parlerò','parlerai','parlerà','parleremo','parlerete','parleranno',
    'parlai','parlasti','parlò','parlammo','parlaste','parlarono',
    'parlino','parlasse','parlassero','parlato','parlata','parlati','parlando',
    // ── Chiedere: all forms ──
    'chiedo','chiedi','chiede','chiediamo','chiedete','chiedono',
    'chiedevo','chiedeva','chiedevano',
    'chiederò','chiederai','chiederà','chiederemo','chiederete','chiederanno',
    'chiesi','chiedesti','chiese','chiedemmo','chiedeste','chiesero',
    'chieda','chiedano','chiedesse','chiedessero','chiesto','chiesta','chiedendo',
    // ── Passare: all forms ──
    'passo','passi','passa','passiamo','passate','passano',
    'passavo','passava','passavano',
    'passerò','passerai','passerà','passeremo','passerete','passeranno',
    'passai','passasti','passò','passammo','passaste','passarono',
    'passino','passasse','passassero','passato','passata','passando',
    // ── Trovare: all forms ──
    'trovo','trovi','trova','troviamo','trovate','trovano',
    'trovavo','trovava','trovavano',
    'troverò','troverai','troverà','troveremo','troverete','troveranno',
    'trovai','trovasti','trovò','trovammo','trovaste','trovarono',
    'trovino','trovasse','trovassero','trovato','trovata','trovando',
    // ── Tenere: all forms ──
    'tengo','tieni','tiene','teniamo','tenete','tengono',
    'tenevo','teneva','tenevano',
    'terrò','terrai','terrà','terremo','terrete','terranno',
    'tenni','tenesti','tenne','tenemmo','teneste','tennero',
    'tenga','tengano','tenesse','tenessero','tenuto','tenuta','tenendo',
    // ── Portare: all forms ──
    'porto','porti','porta','portiamo','portate','portano',
    'portavo','portava','portavano',
    'porterò','porterai','porterà','porteremo','porterete','porteranno',
    'portai','portasti','portò','portammo','portaste','portarono',
    'portino','portasse','portassero','portato','portata','portando',
    // ── Scrivere: all forms ──
    'scrivo','scrivi','scrive','scriviamo','scrivete','scrivono',
    'scrivevo','scriveva','scrivevano',
    'scriverò','scriverai','scriverà','scriveremo','scriverete','scriveranno',
    'scrissi','scrivesti','scrisse','scrivemmo','scriveste','scrissero',
    'scriva','scrivano','scrivesse','scrivessero','scritto','scritta','scrivendo',
    // ── Leggere: all forms ──
    'leggo','leggi','legge','leggiamo','leggete','leggono',
    'leggevo','leggeva','leggevano',
    'leggerò','leggerai','leggerà','leggeremo','leggerete','leggeranno',
    'lessi','leggesti','lesse','leggemmo','leggeste','lessero',
    'legga','leggano','leggesse','leggessero','letto','letta','leggendo',
    // ── Ascoltare: all forms ──
    'ascolto','ascolti','ascolta','ascoltiamo','ascoltate','ascoltano',
    'ascoltavo','ascoltava','ascoltavano',
    'ascolterò','ascolterai','ascolterà','ascolteremo','ascolterete','ascolteranno',
    'ascoltai','ascoltasti','ascoltò','ascoltammo','ascoltaste','ascoltarono',
    'ascoltino','ascoltasse','ascoltassero','ascoltato','ascoltata','ascoltando',
    // ── Guardare: all forms ──
    'guardo','guardi','guarda','guardiamo','guardate','guardano',
    'guardavo','guardava','guardavano',
    'guarderò','guarderai','guarderà','guarderemo','guarderete','guarderanno',
    'guardai','guardasti','guardò','guardammo','guardaste','guardarono',
    'guardino','guardasse','guardassero','guardato','guardata','guardando',
    // ── Cercare: all forms ──
    'cerco','cerchi','cerca','cerchiamo','cercate','cercano',
    'cercavo','cercava','cercavano',
    'cercherò','cercherai','cercherà','cercheremo','cercherete','cercheranno',
    'cercai','cercasti','cercò','cercammo','cercaste','cercarono',
    'cerchino','cercasse','cercassero','cercato','cercata','cercando',
    // ── Comprare: all forms ──
    'compro','compri','compra','compriamo','comprate','comprano',
    'compravo','comprava','compravano',
    'comprerò','comprerai','comprerà','compreremo','comprerete','compreranno',
    'comprai','comprasti','comprò','comprammo','compraste','comprarono',
    'comprino','comprasse','comprassero','comprato','comprata','comprando',
    // ── Mangiare: all forms ──
    'mangio','mangi','mangia','mangiamo','mangiate','mangiano',
    'mangiavo','mangiava','mangiavano',
    'mangerò','mangerai','mangerà','mangeremo','mangerete','mangeranno',
    'mangiai','mangiasti','mangiò','mangiammo','mangiaste','mangiarono',
    'mangino','mangiasse','mangiassero','mangiato','mangiata','mangiando',
    // ── Bere: all forms ──
    'bevo','bevi','beve','beviamo','bevete','bevono',
    'bevevo','beveva','bevevamo','bevevano',
    'berrò','berrai','berrà','berremo','berrete','berranno',
    'bevvi','bevesti','bevve','bevemmo','beveste','bevvero',
    'beva','bevano','bevesse','bevessero','bevuto','bevuta','bevendo',
    // ── Abitare: all forms ──
    'abito','abiti','abita','abitiamo','abitate','abitano',
    'abitavo','abitava','abitavano',
    'abiterò','abiterai','abiterà','abiteremo','abiterete','abiteranno',
    'abitai','abitasti','abitò','abitammo','abitaste','abitarono',
    'abitino','abitasse','abitassero','abitato','abitata','abitando',
    // ── Conoscere: all forms ──
    'conosco','conosci','conosce','conosciamo','conoscete','conoscono',
    'conoscevo','conosceva','conoscevano',
    'conoscerò','conoscerai','conoscerà','conosceremo','conoscerete','conosceranno',
    'conobbi','conoscesti','conobbe','conoscemmo','conosceste','conobbero',
    'conosca','conoscano','conoscesse','conoscessero','conosciuto','conosciuta','conoscendo',
    // ── Capire: all forms ──
    'capisco','capisci','capisce','capiamo','capite','capiscono',
    'capivo','capiva','capivano',
    'capirò','capirai','capirà','capiremo','capirete','capiranno',
    'capii','capisti','capì','capimmo','capiste','capirono',
    'capisca','capiscano','capisse','capissero','capito','capita','capendo',
    // ── Sentire: all forms ──
    'sento','senti','sente','sentiamo','sentite','sentono',
    'sentivo','sentiva','sentivano',
    'sentirò','sentirai','sentirà','sentiremo','sentirete','sentiranno',
    'sentii','sentisti','sentì','sentimmo','sentiste','sentirono',
    'senta','sentano','sentisse','sentissero','sentito','sentita','sentendo',
    // ── Vedere: all forms ──
    'vedo','vedi','vede','vediamo','vedete','vedono',
    'vedevo','vedeva','vedevamo','vedevano',
    'vedrò','vedrai','vedrà','vedremo','vedrete','vedranno',
    'vidi','vedesti','vide','vedemmo','vedeste','videro',
    'veda','vedano','vedesse','vedessero','visto','vista','vedendo',
    // ── Possessives (all genders/numbers) ──
    'mio','mia','miei','mie',
    'tuo','tua','tuoi','tue',
    'suo','sua','suoi','sue',
    'nostro','nostra','nostri','nostre',
    'vostro','vostra','vostri','vostre',
    // ── Demonstratives ──
    'questo','questa','questi','queste',
    'quello','quella','quelli','quelle',
    'quel','quegli','quei',
    // ── Indefinite pronouns / adjectives ──
    'tutti','tutte','tutto','tutta',
    'molti','molte','molto','molta',
    'pochi','poche','poco','poca',
    'qualcuno','qualcosa','qualsiasi','qualunque','qualche',
    'nessuno','nessuna','nessun',
    'alcuni','alcune','alcun','alcuno','alcuna',
    'ogni','ognuno','ognuna','ciascuno','ciascuna','chiunque',
    'entrambi','entrambe','vari','varie','certi','certe','diversi','diverse',
    'tanto','tanta','tanti','tante','altrettanto','altrettanta',
    'niente','nulla',
    // ── Degree / modal adverbs ──
    'non','anche','già','ancora','più','meno','solo','molto',
    'troppo','abbastanza','quasi','piuttosto','decisamente','veramente',
    'sempre','mai','spesso','raramente',
    'neanche','nemmeno','neppure',
    'qui','qua','lì','là','li',
    'ora','adesso','allora','poi','dopo','prima','subito',
    'bene','male','meglio','peggio',
    'piu','tanto','quanto',
    'forse','almeno','circa','ormai','finalmente',
    'proprio','davvero','certo','certamente','sicuramente',
    'comunque','pertanto',
    'invece','anzi','purtroppo','fortunatamente',
    'insieme','gradualmente','lentamente','velocemente',
    'improvvisamente','recentemente','attualmente',
    'normalmente','generalmente','solitamente',
    'ieri','oggi','domani','stamattina','stasera',
    'tardi','presto','piano',
    'vicino','lontano',
    // ── Prepositions, particles, and contracted forms ──
    'in','a','da','di','con','su','per','tra','fra','sotto','sopra',
    'verso','lungo','durante','attraverso','mediante','secondo',
    'oltre','entro','presso','senza','salvo','tranne','eccetto',
    'del','della','dello','dei','delle','degli',
    'dal','dalla','dallo','dai','dalle','dagli',
    'nel','nella','nello','nei','nelle','negli',
    'sul','sulla','sullo','sui','sulle','sugli',
    'col','coi','alle','agli','allo','alla',
    'ad','al','dell','dall','nell','sull','all',
    // ── Question words ──
    'chi','che','cosa','dove','quando','come','quale','quali',
    'quanto','quanta','quanti','quante','cui',
    // ── Numbers (cardinal + ordinal) ──
    'uno','due','tre','quattro','cinque','sei','sette','otto','nove','dieci',
    'undici','dodici','tredici','quattordici','quindici','sedici',
    'diciassette','diciotto','diciannove',
    'venti','trenta','quaranta','cinquanta','sessanta','settanta','ottanta','novanta',
    'cento','mille','milione','miliardo','milioni','miliardi',
    'primo','prima','primi','prime','secondo','seconda','terzo','terza',
    'quarto','quarta','quinto','quinta','sesto','settimo','ottavo','nono','decimo',
    'duecento','trecento','quattrocento','cinquecento',
    'duemila','tremila','centomila','percento',
    // ── Time words ──
    'anno','anni','mese','mesi','settimana','settimane','giorno','giorni',
    'ora','ore','minuto','minuti',
    'lunedì','martedì','mercoledì','giovedì','venerdì','sabato','domenica',
    'lunedi','martedi','mercoledi','giovedi','venerdi',
    'gennaio','febbraio','marzo','aprile','maggio','giugno',
    'luglio','agosto','settembre','ottobre','novembre','dicembre',
    'mattina','mattino','pomeriggio','sera','notte',
    // ── High-frequency content words used as scene-setting context ──
    'amico','amica','amici','amiche',
    'nonna','nonno','nonni',
    'sorella','fratello','sorelle','fratelli',
    'figlio','figlia','figli','figlie',
    'bambino','bambina','bambini','bambine',
    'ragazzo','ragazza','ragazzi','ragazze',
    'professore','professoressa','professori',
    'dottore','dottoressa','dottori',
    'padre','madre','genitori',
    'collega','colleghi','colleghe',
    'caffe','pizza','pasta','pane','acqua','latte','vino',
    'cibo','pranzo','cena','colazione',
    'ristorante','trattoria','frutta','verdure','funghi',
    'prosciutto','uova','olio','burro','sale','zucchero',
    'casa','scuola','lavoro','ufficio','negozio','città','citta',
    'museo','chiesa','piazza','strada','quartiere','paese','paesi',
    'italia','roma','firenze','milano','venezia','napoli','mondo',
    'macchina','auto','bici','treno','telefono','chiavi','libro','libri',
    'computer','film','cinema','teatro','bar',
    'grande','piccolo','piccola','piccoli','piccole',
    'bello','bella','belli','belle','bellissimo','bellissima','bellissimi','bellissime',
    'buono','buona','buoni','buone','ottimo','ottima','ottimi','ottime',
    'importante','importanti','interessante','interessanti',
    'difficile','difficili','facile','facili',
    'nuovo','nuova','nuovi','nuove','vecchio','vecchia','vecchi','vecchie',
    'lungo','lunga','lunghi','lunghe','breve','brevi',
    'forte','forti','caldo','calda','caldi','calde','freddo','fredda','freddi','fredde',
    'normale','normali','semplice','semplici',
    'fondamentale','fondamentali','necessario','necessaria','necessari','necessarie',
    'principale','principali','stesso','stessa','stessi','stesse',
    'vero','vera','veri','vere',
    'italiano','italiana','italiani','italiane',
    'bel','ottimista','ottimistica','ottimistici','ottimistiche',
    'profondo','profonda','profondi','profonde',
    'enorme','enormi','terribile','terribili',
    'incredibile','incredibili','unico','unica','unici','uniche',
    'ampio','ampia','ampi','ampie',
    'strutturale','strutturali','generale','generali',
    'usa','usare','usato','usata','usando',
    'serve','servire','servito','servono','servendo',
    'richiede','richiedere','richiesto','richiedono','richiedendo',
    'include','includere','incluso','includono','includendo',
    'spiega','spiegare','spiegato','spiegano','spiegando',
    'chiama','chiamare','chiamato','chiamano','chiamando',
    'inizia','iniziare','iniziato','iniziano','iniziando',
    'cambia','cambiare','cambiato','cambiano','cambiando',
    'diventa','diventare','diventato','diventano','diventando',
    'permette','permettere','permesso','permettono','permettendo',
    'rappresenta','rappresentare','rappresentato','rappresentano',
    'raggiunge','raggiungere','raggiunto','raggiungono','raggiungendo',
    'ottiene','ottenere','ottenuto','ottengono','ottenendo',
    'protegge','proteggere','protetto','proteggono','proteggendo',
    'arricchisce','arricchire','arricchito','arricchiscono',
    'vive','vivere','vissuto','vivono','vivendo',
    'torna','tornare','tornato','tornano','tornando',
    'rimane','rimanere','rimasto','rimangono','rimanendo',
    'segue','seguire','seguito','seguono','seguendo',
    'migliora','migliorare','migliorato','migliorano','migliorando',
    'aiuta','aiutare','aiutato','aiutano','aiutando',
    'impara','imparare','imparato','imparano','imparando',
    'continua','continuare','continuato','continuano','continuando',
    'finisce','finire','finito','finiscono','finendo',
    'uscire','esco','esci','esce','usciamo','uscite','escono','uscito','uscita','uscendo',
    'camminare','cammino','cammina','camminiamo','camminano','camminando',
    'insegna','insegnare','insegnato','insegnano','insegnando',
    'risponde','rispondere','risposto','rispondono','rispondendo',
    'discute','discutere','discusso','discutono','discutendo',
    'considera','considerare','considerato','considerano',
    'offre','offrire','offerto','offrono','offrendo',
    'mostra','mostrare','mostrato','mostrano','mostrando',
    'risolve','risolvere','risolto','risolvono','risolvendo',
    'crea','creare','creato','creano','creando',
    'produce','produrre','prodotto','producono','producendo',
    'gestisce','gestire','gestito','gestiscono','gestendo',
    'sviluppa','sviluppare','sviluppato','sviluppano','sviluppando',
    'trasforma','trasformare','trasformato','trasformano',
    'garantisce','garantire','garantito','garantiscono',
    'sostiene','sostenere','sostenuto','sostengono',
    'prevede','prevedere','previsto','prevedono',
    'impone','imporre','imposto','impongono',
    'idea','idee','lavoro','lavori','parte','parti','vita','vite',
    'tempo','tempi','modo','modi','tipo','tipi','caso','casi','punto','punti',
    'risposta','risposte','domanda','domande','problema','problemi',
    'soluzione','soluzioni','risultato','risultati','effetto','effetti',
    'obiettivo','obiettivi','momento','momenti','motivo','motivi',
    'ragione','ragioni','accordo','accordi','ruolo','ruoli',
    'argomento','argomenti','termine','termini',
    'storia','storie','famiglia','famiglie','sistema','sistemi',
    'governo','governi','euro','dollari',
    'articolo','articoli','dati','fonti','notizie',
    'aziende','azienda','prodotti','prodotto',
    'servizio','servizi','mercato','mercati',
    'economia','economie','societa','cultura','culture',
    'lingua','lingue','informazione','informazioni',
    'tecnologia','tecnologie','ambiente','ambienti',
    'energia','energie','salute','istruzione',
    'sport','musica','arte','arti','natura',
    'esperienza','esperienze','occasione','occasioni',
    'scelta','scelte','cambiamento','cambiamenti','sviluppo','sviluppi',
    'progresso','futuro','passato','presente',
    'questione','questioni','principio','principi',
    'valore','valori','diritto','diritti','legge','leggi',
    'regola','regole','obbligo','obblighi',
    'rischio','rischi','beneficio','benefici',
    'vantaggio','vantaggi','svantaggio','svantaggi',
    'differenza','differenze','relazione','relazioni',
    'comunicazione','comunicazioni','incontro','incontri',
    'evento','eventi','corso','corsi','lezione','lezioni','esame','esami',
    'fretta','appuntamento','appuntamenti','riunione','riunioni',
    'decenni','decennio','radici','radice',
    'ambito','ambiti','discusso','discussa','discussi','discusse',
    'darmi','dirmi','dirlo','finale','finali',
    'saremmo','sareste','sarebbero','sarebbe',
    'grazie','prego','scusa','scusi','favore','via','stai','stasera',
    'adoro','adoriamo','adorano','dimmi',
    // ── Second-pass ambient additions (linguist-advised 2026-04-19) ──
    // Discourse particles and fixed-phrase components
    'volta','volte','pure','basta','soprattutto','solito','solita',
    'ecco','eccolo','eccola','eccomi','andiamo','forza',
    // Common infinitives used as scene context (not the card's teaching target)
    'decidere','restare','vedere','comprare','chiedere','pensare','pensarci',
    'procedere','accettare','agire','comunicare','aumentare','realizzare',
    'ricominciare','ricevere','distinguere','approfondire','analizzare',
    'concentrarsi','concentro','preoccuparsi','preoccuparti','sbrigarci',
    'sentirlo','vederlo','chiamarmi','chiamami','mandarti','saperne','capire',
    'arrenderti',
    // Common adjectives as ambient descriptors
    'calmo','calma','calmi','calme',
    'stanco','stanca','stanchi','stanche',
    'felice','felici',
    'grande','grandi',
    'brutto','brutta','brutti','brutte',
    'bianco','bianca','bianchi','bianche',
    'rosso','rossa','rossi','rosse',
    'blu','celeste',
    'veloce','veloci',
    'libero','libera','liberi','libere',
    'pieno','piena','pieni','piene',
    'utile','utili',
    'storico','storica','storici','storiche',
    'reale','reali',
    'specifico','specifica','specifici','specifiche',
    'originale','originali',
    'fisso','fissa','fissi','fisse',
    'formale','formali',
    'individuale','individuali',
    'trasversale','trasversali',
    'antico','antica','antichi','antiche',
    'scientifico','scientifica','scientifici','scientifiche',
    'politico','politica','politici','politiche',
    'economico','economica','economici','economiche',
    'sociale','sociali',
    'digitale','digitali',
    'culturale','culturali',
    'naturale','naturali',
    'locale','locali',
    'personale','personali',
    'civile','civili',
    'positivo','positiva','positivi','positive',
    'negativo','negativa','negativi','negative',
    'pratico','pratica','pratici','pratiche',
    'tecnico','tecnica','tecnici','tecniche',
    'efficace','efficaci',
    'doloroso','dolorosa','dolorosi','dolorose',
    'grave','gravi','pericoloso','pericolosa','pericolosi','pericolose',
    'obbligatorio','obbligatoria','obbligatori','obbligatorie',
    'aerea','aereo','aerei','aeree',
    'rurale','rurali',
    'alto','alta','alti','alte',
    'basso','bassa','bassi','basse',
    // Common nouns as scene-setting context
    'vacanza','vacanze',
    'programma','programmi',
    'colore','colori',
    'limite','limiti',
    'aspetto','aspetti',
    'difficoltà','difficolta',
    'migliaia',
    'cuore','cuori',
    'festa','feste',
    'donna','donne',
    'persona','persone',
    'voce','voci',
    'foto',
    'budget',
    'weekend',
    'online',
    'video',
    'studente','studenti',
    'sole',
    'mamma',
    'livello','livelli',
    'cosa','cose',
    'tassa','tasse',
    'carta','carte',
    'pesce','pesci',
    'risotto',
    'gas',
    'errore','errori',
    'fondo','fondi',
    'area','aree',
    'guerra','guerre',
    'pena','pene',
    'merito','meriti',
    'identità','identita',
    'supporto','supporti',
    'proposta','proposte',
    'minaccia','minacce',
    'fondamento','fondamenti',
    'crimine','crimini',
    'difesa','difese',
    'numero','numeri',
    'traffico',
    'sud','nord','est','ovest',
    'animale','animali',
    'albero','alberi',
    'luna','stelle',
    'gatto','cane','lupo',
    'bicchiere','bottiglia','piatto','tovagliolo','scontrino',
    'taglia','moda','qualità','qualita',
    'campagna',
    'margherita','mozzarella','tartufo','sugo','torta','limone','fragola',
    'tiramisu','porcini',
    'gusto','sapore',
    'chilometro','chilometri','metro','metri',
    'primavera','estate','autunno','inverno',
    'grado','gradi',
    'aumento','aumenti',
    'calo','cali',
    'anticipo','anticipi',
    'vigore',
    'pericolo','pericoli',
    'paziente','pazienti',
    'benvenuto','benvenuta','benvenuti','benvenute',
    'Complimenti','complimenti',
    'ingegnere','ingegneri',
    'avvocato','avvocati',
    'insegnante','insegnanti',
    'adolescente','adolescenti',
    'dipendente','dipendenti',
    'indipendente','indipendenti',
    'membro','membri',
    'nipote','nipoti',
    'mazzo','mazzi',
    'matrimoniale',
    'ascensore','ascensori',
    'semaforo','semafori',
    'giro','giri',
    'mezzo','mezzi',
    'cima','cime',
    'stanza','stanze',
    'piede','piedi','dito','dita','mano','mani','occhio','occhi',
    'caviglia','braccio','braccia','spalla','testa','schiena',
    // Verb forms used frequently as backdrop
    'sembra','sembrano','sembrava','sembrare',
    'vale','valeva','valgono','valere',
    'riguarda','riguardano','riguardare',
    'riuscivo','riescono','riesco','riesce',
    'colpisce','colpiscono','colpire',
    'vieta','vietano','vietare',
    'unisce','uniscono','unire',
    'avviene','avvengono','avvenire',
    'procede','procedono',
    'risale','risalgono',
    'trasforma','trasformano','trasformando',
    'traiamo','trae','traggono',
    'ospita','ospitano',
    'appartiene','appartengono',
    'attira','attraggono',
    'dura','durano','durato',
    // Past participles used as ambient adjectives
    'vinto','vinta','vinti','vinte',
    'scoperto','scoperta','scoperti','scoperte',
    'pronunciata','pronunciato','pronunciati','pronunciate',
    'ricevuto','ricevuta','ricevuti','ricevute',
    'analizzato','analizzata','analizzati','analizzate',
    'dichiarato','dichiarata','dichiarati','dichiarate',
    'modificato','modificata','modificati','modificate',
    'organizzato','organizzata','organizzati','organizzate',
    'definitivo','definitiva','definitivi','definitive',
    'promosso','promossa','promossi','promosse',
    'limitato','limitata','limitati','limitate',
    'bloccato','bloccata','bloccati','bloccate',
    'attivato','attivata','attivati','attivate',
    'annunciato','annunciata','annunciati','annunciate',
    'aumentato','aumentata','aumentati','aumentate',
    'acceso','accesa','accesi','accese',
    'escluso','esclusa','esclusi','escluse',
    'ispirato','ispirata','ispirati','ispirati',
    'inventato','inventata','inventati','inventate',
    'avuto',
    // Loanwords and modern terms
    'boss','follower','smartphone','wifi','app',
    // ── Third-pass: remaining common ambient words ──
    // Common adjectives/past participles as descriptors
    'pronto','pronti','pronta','pronte',
    'fortunato','fortunata','fortunati','fortunate','fortuna',
    'sfortunato','sfortuna',
    'chiaro','chiara','chiari','chiare',
    'giusto','giusta','giusti','giuste',
    'ricco','ricca','ricchi','ricche',
    'romantico','romantica','romantici','romantiche',
    'informatico','informatica','informatici','informatiche',
    'artificiale','artificiali',
    'reciproco','reciproca','reciproci','reciproche',
    'autunnale','autunnali',
    'fiscale','fiscali',
    'nucleare','nucleari',
    'eolico','eolica','eolici','eoliche',
    'doganale','doganali',
    'futurista','futuristi','futuriste',
    'staminale','staminali',
    'diplomatico','diplomatica','diplomatici','diplomatiche',
    'scientifico','scientifica','scientifici','scientifiche',
    'metodico','metodica','metodici','metodiche',
    'rigido','rigida','rigidi','rigide',
    'fragile','fragili',
    'disposto','disposta','disposti','disposte',
    'ambientalista','ambientalisti',
    'coinvolgente','coinvolgenti',
    'adorabile','adorabili',
    'adatto','adatta','adatti','adatte',
    'affidabile','affidabili',
    'ammirevole','ammirevoli',
    // Common nouns: third pass
    'realtà','realta',
    'altro','altra','altri','altre',
    'attacco','attacchi',
    'trasporto','trasporti',
    'titolo','titoli',
    'struttura','strutture',
    'variabile','variabili',
    'sguardo','sguardi',
    'rumore','rumori',
    'rapporto','rapporti',
    'rendimento','rendimenti',
    'popolo','popoli',
    'pausa','pause',
    'orbita','orbite',
    'onestà','onesta',
    'modello','modelli',
    'mela','mele',
    'arancia','arance',
    'foglia','foglie',
    'incapacità','incapacita',
    'geopolitica',
    'scorciatoia','scorciatoie',
    'spettatore','spettatori',
    'compito','compiti',
    'cliente','clienti',
    'preventivo','preventivi',
    'polizza','polizze',
    'dividendo','dividendi',
    'infrastruttura','infrastrutture',
    'incentivo','incentivi',
    'risorsa','risorse',
    'barattolo','barattoli',
    'colonnina','colonnine',
    'ceramica','ceramiche',
    'bandiera','bandiere',
    'istinto','istinti',
    'gesso','gessi',
    'cerotto','cerotti',
    'canale','canali',
    'fermata','fermate',
    'scale','scala',
    'scatola','scatole',
    'furgone','furgoni',
    'parquet',
    'marketing',
    'banca','banche',
    'slim',
    'thriller',
    // Common verb forms: third pass
    'sbagliare','sbaglio','sbagliamo','sbagliano',
    'sbagliato','sbagliata','sbagliati','sbagliate',
    'riavviare','riavvio','riavvia','riavviamo',
    'conservo','conservi','conserva','conserviamo',
    'consegnarlo','consegnare',
    'aggiungere','aggiungo','aggiunge','aggiungiamo',
    'affrontare','affronto','affronta','affrontiamo','affrontano',
    'accorciare','accorcio','accorcia','accorciamo',
    'allungare','allungo','allunga','allunghiamo',
    'lottare','lotto','lotta','lottiamo','lottano',
    'reprimere','reprimo','reprime','reprimiamo',
    'canalizzare','canalizzano','canalizzarle',
    'allenare','alleno','allena','alleniamo','allenano',
    'allenare',
    'aiutarmi','aiutami','aiutarci',
    'chiamarlo','chiamarla','chiamarli','chiamarci',
    'chiamarmi',
    'dargli','darle','darli','darlo',
    'consegnarlo',
    'vederlo','vederla','vederli',
    'preparare','preparo','prepara','prepariamo','preparano',
    'prepararsi','preparati','preparatevi',
    'ripetere','ripeto','ripete','ripetiamo','ripetono',
    'riuscire','riuscivo','riesca','riescano','riuscendo',
    'riusciva','riuscivano',
    'vestiamo','vestire','mi vesto','si veste',
    'uscire','esca','escano',
    'muovere','muova','muovano',
    'inaugurare','inauguro','inaugura','inaugurano','inaugurato',
    'introdurre','introdotto','introdotta',
    'discutere','discuti','discutiamo','discutono',
    'dichiarare','dichiaro','dichiara','dichiarano',
    'diminuire','diminuendo','diminuisce','diminuiscono',
    'organizzare','organizzo','organizza','organizziamo',
    'comunicare','comunico','comunica','comunichiamo',
    'giustificare','giustifico','giustifica','giustificano',
    'indebolire','indebolisce','indeboliscono',
    // Common discourse words
    'dentro','fuori','sopra','sotto','intorno',
    'avanti','indietro',
    'glielo','gliele','glieli',
    'dispiace','dispiaccio','dispiacere',
    'sembra','sembrare','sembrava','sembrerebbe',
    'alzi','alzo','alzarsi','alzarmi','alzata',
    'basi','basa','basano','basarsi',
    'credi','credo','crede','credono',
    'aiuti','aiuto','aiuta','aiutano',
    'incluso','inclusa','inclusi','incluse',
    'aperto','aperta','aperti','aperte',
    'disposto','disposta','disposti','disposte',
    'scarso','scarsa','scarsi','scarse',
    'completo','completa','completi','complete',
    'ligure','napoletano','napoletana','napoletani',
    'romani','romano','romana',
    'francese','francesi',
    'inglese','inglesi',
    'tedesco','tedesca','tedeschi','tedesche',
    'spagnolo','spagnola','spagnoli','spagnole',
    'americano','americana','americani','americane',
    'cinese','cinesi',
    // Body parts (as scene context)
    'bocca','labbra',
    // Medical terms as scene context
    'antidolorifico','antidolorifici',
    'deglutire','vomitare','vomitato',
    'destro','destra','destri','destre',
    'sinistro','sinistra','sinistri','sinistre',
    // Food (third pass)
    'arancini','trofie','ligure',
    'cacao','mozzarella','focaccia','pesto',
    'dolci','zuppa',
    'secco','secca','secchi','secche',
    // Tech terms (third pass)
    'informatici','informatico',
    'digitale','digitali',
    'artificiale','artificiali',
    'eolico','eolica',
    'atomico','atomica','atomici','atomiche',
    // Fashion terms (third pass)
    'sportivo','sportiva','sportivi','sportive',
    'moda','tendenza',
    // Misc high-frequency contextual
    'costa','costano','costare',
    'negozio','negozi',
    'aprire','apro','apre','apriamo',
    'aprirsi','aperto','aperta',
    'chiudere','chiuso','chiusa','chiusi','chiuse',
    'cucina','cucinare',
    'inglese',
    'cumunichero',
    // ── Fourth-pass: final remaining words ──
    // Adjectives / past participles
    'storto','storta','storti','storte',
    'ridotto','ridotta','ridotti','ridotte',
    'preliminare','preliminari',
    'minacciato','minacciata','minacciati','minacciate',
    'fissato','fissata','fissati','fissate',
    'colpevole','colpevoli',
    'civico','civica','civici','civiche',
    'aziendale','aziendali',
    'intimo','intima','intimi','intime',
    'aumentando',
    'vietato','vietata','vietati','vietate',
    'voluto','voluta','voluti','volute',
    'sacro','sacra','sacri','sacre',
    'mirati','mirato','mirata',
    'attivo','attiva','attivi','attive',
    'uguale','uguali',
    'ideale','ideali',
    'inutile','inutili',
    'urgente','urgenti',
    'valido','valida','validi','valide',
    'disposti','disposto',
    'coinvolto','coinvolta','coinvolti','coinvolte',
    'distinto','distinta','distinti','distinte',
    'deludente','deludenti',
    'scadente','scadenti',
    'usato','usata','usati','usate',
    // Common nouns: fourth pass
    'pazienza',
    'disastro','disastri',
    'difetto','difetti',
    'cervello','cervelli',
    'storto',
    'vicenda','vicende',
    'vetro','vetri',
    'vestito','vestiti',
    'voto','voti',
    'veicolo','veicoli',
    'vaso','vasi',
    'vanità','vanita',
    'virtù','virtu',
    'vittoria','vittorie',
    'volo','voli',
    'zio','zia','zii','zie',
    'verbo','verbi',
    'dote','doti',
    'compito','compiti',
    'sforzo','sforzi',
    'fondo','fondi',
    'panico',
    'polizza','polizze',
    'attimo','attimi',
    'crisi',
    'proroga','proroghe',
    'straordinario','straordinari',
    'posto','posti',
    'umido','umida',
    'impegno','impegni',
    'impegnare','impegna','impegnano',
    'agriturismo',
    'regali','regalo',
    'parquet',
    'ceramica',
    'maestro','maestri',
    'modernità','modernita',
    'pensatore','pensatori',
    'fragola',
    'trofie',
    // Verb forms: fourth pass
    'sporto','sporsi','sporgersi',
    'limita','limitano','limitare',
    'chiami','chiamarsi',
    'crearli','crearle','creare',
    'aumentando','aumentare',
    'fissare','fissato',
    'passati','passate',
    'vorremmo','vorrei','vorrebbe','vorreste','vorrebbero',
    'vorrebbe',
    'vinca','vincano','vincere','vinco','vinci','vince','vinciamo','vincono',
    'vincera','vinceremo',
    'aiuti','aiutino',
    'allenare','alleno','allena','alleniamo',
    'verificare','verifico','verifica','verifichiamo',
    'valutare','valuto','valuta','valutiamo',
    'reprimerle','reprimere',
    'sbagliare','sbaglieremo',
    'sparire','sparisco','sparisce','spariscono',
    'vederti','vederci','vederlo',
    'vestirti','vestirci',
    'vestita','vestito','vestiti','vestite',
    'discuti','discutono',
    // Foreign language terms (common in language-learning context)
    'francese','francesi',
    'inglese','inglesi',
    'tedesco','tedesca','tedeschi','tedesche',
    'spagnolo','spagnola','spagnoli','spagnole',
    'cinese','cinesi',
    'americano','americana','americani','americane',
    'europeo','europea','europei','europee',
    'straniero','straniera','stranieri','straniere',
    // Italian regional / cultural terms
    'napoletano','napoletana','napoletani','napoletane',
    'ligure','liguri',
    'romano','romana','romani','romane',
    'milanese','milanesi',
    'siciliano','siciliana','siciliani','siciliane',
    'toscano','toscana','toscani','toscane',
    // Yoga, wellness, modern lifestyle
    'yoga','meditazione','pilates','fitness',
    'allenamento','allenamenti',
    // ── Fifth-pass: all remaining B1-B2 ambient words ──
    // Common verb forms: fifth pass
    'accolto','accolti','accolta','accolte',
    'accomodi','accomodarsi',
    'accedere','accedo','accede','accediamo','accedono',
    'accedervi','accettarlo','accettarla',
    'accettiamo','accettate','accettano',
    'adattarci','adattarti','adattarsi','adattata','adattato',
    'agire','agito','agita','agiti','agiscono',
    'alleni','allena','alleniamo','allenarsi',
    'alzare','alzo','alza','alziamo','alzano','alza',
    'allunga','allungarle','allungato','allungata',
    'ammettere','ammetto','ammette','ammettiamo','ammettono',
    'ampliare','amplio','amplia','ampliamo',
    'analizzando','analizzare','analizzo','analizza','analizziamo',
    'applica','applicare','applichiamo','applicano',
    'argomentare','argomento','argomenta','argomentiamo',
    'arrangerei','arrangiarsi','arrangiamo',
    'ascoltare','ascolto','ascolta','ascoltiamo','ascoltano',
    'aspettare','aspetto','aspetta','aspettiamo','aspettano',
    'aspettavi','aspettavo','aspettavamo','aspettiamo',
    'auguriamo','augurare','auguro','augura','augurano',
    'avvisare','avviso','avvisa','avvisiamo',
    'blocca','bloccare','blocco','blochiamo','bloccano',
    'camminato','camminata','camminavo','camminare',
    'cattura','catturare','catturo','catturiamo',
    'causato','causata','causati','causate',
    'celebrato','celebrata','celebrati','celebrate',
    'chiarimento','chiarire','chiarisco','chiarisce',
    'chiamarti','chiamarmi','chiamarsi',
    'chiameremo','chiami','chiamarci',
    'chiederti','chiedermi','chiedere',
    'citiamo','citare','cito','cita','citano',
    'cliccare','clicco','clicca','clicchiamo',
    'conviene','convenire','conviene',
    'coprire','copro','copre','copriamo','coprono',
    'coordina','coordinare','coordino','coordiniamo',
    'convincere','convinco','convince','convinciamo','convincono',
    'creera','creare','creo','crea','creiamo',
    'darti','darmi','darci','darvi',
    'deciso','decisa','decisi','decise',
    'deludero','deludere','deludo','delude',
    'discendenti','discendere',
    'discrimina','discriminare','discrimino','discriminano',
    'distingue','distinguere','distinguo','distinguiamo',
    'distribuire','distribuisco','distribuisce','distribuiamo',
    'distruggendo','distruggere','distruggo','distrugge','distruggono',
    'distrutto','distrutta','distrutti','distrutte',
    'dividerci','dividervi','dividersi',
    'diventata','diventato','diventati','diventate',
    'divulgare','divulgo','divulga','divulgano',
    'durati','durata','durati','durate',
    'durare','dura','durano',
    'esprimerti','esprimersi','esprimo','esprime',
    'esprimere','esprimono',
    'espresso','espressa','espressi','espresse',
    'esagerando','esagerare','esagero','esagera',
    'esploso','esplosa','esplosi','esplose',
    'fondato','fondata','fondati','fondate',
    'fornire','fornisco','fornisce','forniamo',
    'fregare','frego','frega','freghiamo',
    'garantita','garantito','garantiti','garantite',
    'gestirlo','gestirla','gestirli','gestire',
    'guadagnare','guadagno','guadagna','guadagnamo',
    'guadagni',
    'impararlo','impararla','imparare',
    'imparerei','impari','impara','impariamo',
    'impegnarmi','impegnarti','impegnarsi',
    'impegnarmi',
    'impiega','impiegare','impiego','impiegano',
    'inalienabili',
    'includeva','includere','includo','include',
    'indipendente','indipendenti',
    'iniziera','iniziare','inizio','inizia','iniziamo',
    'introduttivo','introduttiva','introduttivi','introduttive',
    'invitati','invitato','invitata','invitate',
    'inviti','invitare','invito','invita',
    'legittima','legittimare','legittimo','legittima',
    'mantiene','mantenere','mantengo','manteniamo',
    'mentire','mento','mente','mentiamo','mentono',
    'modificare','modifico','modifica','modifichiamo',
    'modifiche','modificato','modificata',
    'occupo','occupare','occupa','occupiamo','occupano',
    'obbliga','obbligare','obbligo','obblighiamo',
    'optato','optare','opto','opta','optiamo',
    'perdere','perdo','perde','perdiamo','perdono',
    'perdiamo','perdete',
    'picnic',
    'pone','porre','pongo','poniamo',
    'porgo','porgere','porge','porgiamo',
    'preoccupare','preoccupo','preoccupa','preoccupiamo',
    'preoccuparmi','preoccuparti','preoccuparsi',
    'prepari','preparano','preparate','preparo',
    'presti','prestare','presto','presta',
    'proponi','proporre','propongo','proponiamo',
    'proponiamo','propongo',
    'pulire','pulisco','pulisce','puliamo','puliscono',
    'recupero','recuperare','recupera','recuperiamo',
    'rafforza','rafforzare','rinforzo','rafforziamo',
    'rafforzare','rafforziamo','rafforzano',
    'reagire','reagisco','reagisce','reagiamo',
    'rendiamo','rendere','rendo','rende',
    'reclutamento','reclutare','recluto','recluta',
    'riceve','ricevere','ricevo','ricevono',
    'ricevera','riceveremo','riceverai',
    'ricevero','riceverai',
    'ricomincia','ricominciare','ricomincio','ricominciamo',
    'riconciliati','riconciliarsi','riconcilio','riconcilia',
    'ricucire','ricucio','ricuce','ricuciamo',
    'ridere','rido','ride','ridiamo','ridono',
    'riduce','ridurre','riduco','riduciamo',
    'riferimento',
    'rinunciare','rinuncio','rinuncia','rinunciamo',
    'riparare','riparo','ripara','ripariamo','riparano',
    'ripensato','ripensata','ripensati','ripensate',
    'ripeta','ripetare','ripeto','ripete',
    'rispondo','risponde','rispondiamo','risponde',
    'risposta','rispondere','rispondo','rispondono',
    'risponda','rispondano',
    'resto','restare','resto','resta','restiamo',
    'riunisce','riunirsi','riuniamo','riunisce',
    'riuniamo','riunirvi',
    'riuscirai','riuscire','riesco','riesce',
    'rivederti','rivedermi','rivederlo','rivederla',
    'rivederlo','rivederla','rivederli',
    'sbrigati','sbrigarsi','sbrighiamoci',
    'sbrighiamoci','sbrigare','sbrigo','sbriga',
    'sbagliarmi','sbagliarti','sbagliarsi',
    'scappato','scappata','scappati','scappate',
    'sceglierei','sceglieremmo','sceglieresti',
    'scegliere','scelgo','sceglie','scegliamo','scelgono',
    'scegliamo','sceglie',
    'sdraiarti','sdraiarsi','sdraio','sdraia',
    'solicito','sollecitare','sollecito','sollecita',
    'sollecito','sollecitare',
    'sorridi','sorridere','sorrido','sorride',
    'sorto','sorgere','sorgo','sorge','sorgiamo',
    'sperimentiamo','sperimentare','sperimenta','sperimentano',
    'spieghi','spiegare','spiego','spiega','spieghiamo',
    'spinto','spinta','spinti','spinte',
    'sposata','sposato','sposati','sposate',
    'stabilire','stabilisco','stabilisce','stabiliamo',
    'staccato','staccata','staccati','staccate',
    'stupisce','stupirsi','mi stupisco','si stupisce',
    'stupisco','stupirsi',
    'suda','sudare','sudo','sudano',
    'superare','supero','supera','superiamo','superano',
    'superarli','superarla','superarle',
    'trasferiti','trasferita','trasferirsi','trasferisci',
    'trasmessa','trasmesso','trasmessi','trasmesse',
    'trarre','traggo','trae','traiamo','traggono',
    'trovare','trovo','trova','troviamo','trovano',
    'urbanistica','urbanistiche',
    'universali','universale',
    'varia','variare','vario','variamo','variano',
    // Common nouns: fifth pass
    'autobus',
    'account',
    'adeguamento',
    'affidabilita',
    'aggregati','aggregato','aggregata',
    'alba',
    'albicocca','albicocche',
    'algoritmi','algoritmo',
    'alimentari',
    'alpini','alpino','alpina',
    'antipasto','antipasti',
    'appunti',
    'atomi','atomo',
    'atmosfera','atmosfere',
    'attori','attore',
    'autobus',
    'azzurri','azzurro','azzurra','azzurre',
    'banda','bande',
    'barca','barche',
    'baroni','barone',
    'belvedere',
    'beni',
    'bidet',
    'bilancio','bilanci',
    'bolletta','bollette',
    'bordo','bordi',
    'brochure',
    'brodo','brodi',
    'calcolo','calcoli',
    'campanello','campanelli',
    'canditi',
    'capitoli','capitolo',
    'carbone',
    'causa','cause',
    'cemento',
    'cereali','cereale',
    'cerebrale','cerebrali',
    'chicchi','chicco',
    'chirurgo','chirurghi',
    'chitarra','chitarre',
    'cielo',
    'cifra','cifre',
    'cigni','cigno',
    'coltura','colture',
    'combustibili','combustibile',
    'commento','commenti',
    'coriandoli',
    'corallo','coralli',
    'corpo','corpi',
    'croce','croci',
    'cupola','cupole',
    'danni','danno',
    'diagnosi',
    'diaspora',
    'discendenti','discendente',
    'disco','dischi',
    'dissesto',
    'disturbo','disturbi',
    'doccia','docce',
    'documenti','documento',
    'edifici','edificio',
    'empatia',
    'emergenza','emergenze',
    'erbe','erba',
    'eurodeputati','eurodeputato',
    'facciata','facciate',
    'fiducia',
    'floreali','floreale',
    'francobolli','francobollo',
    'futuri','futuro',
    'gesti','gesto',
    'ghiacciai','ghiacciaio',
    'ginnastica',
    'giunta',
    'glutine',
    'grafico','grafici',
    'grandine',
    'idroelettrica','idroelettrico',
    'immagini','immagine',
    'impegnarmi',
    'immenso','immensa','immensi','immense',
    'infografiche','infografica',
    'infortuni','infortunio',
    'ingresso','ingressi',
    'infiammabile','infiammabili',
    'intolleranti','intollerante',
    'inventore','inventori',
    'lente','lenti',
    'legumi','legume',
    'like',
    'link',
    'lockdown',
    'mafia',
    'mandorle','mandorla',
    'maniche','manica',
    'marchi','marchio',
    'maschere','maschera',
    'meccanismo','meccanismi',
    'mediatore','mediatori',
    'memoria','memorie',
    'mentore','mentori',
    'merenda','merende',
    'microfono','microfoni',
    'millennio','millenni',
    'millilitri','millilitro',
    'ministri','ministro',
    'misto','misti','mista','miste',
    'monarchia','monarchie',
    'moneta','monete',
    'montagna','montagne',
    'motore','motori',
    'movimenti','movimento',
    'muratura',
    'muro','muri',
    'navata','navate',
    'neurali','neurale',
    'nudo','nuda','nudi','nude',
    'oceani','oceano',
    'offerta','offerte',
    'oliva','olive',
    'ottimismo',
    'pacco','pacchi',
    'palestra','palestre',
    'pallet',
    'palline','pallina',
    'pandoro',
    'paniere','panieri',
    'pannelli','pannello',
    'paragrafi','paragrafo',
    'parentale',
    'pasto','pasti',
    'peluche',
    'penicillina',
    'penne',
    'periferie','periferia',
    'pescatori','pescatore',
    'piscina','piscine',
    'pittura','pitture',
    'pollo','polli',
    'polmoni','polmone',
    'pomodori','pomodoro',
    'ponti','ponte',
    'poverta',
    'pragmatica',
    'precarieta',
    'premier',
    'premium',
    'prezzo','prezzi',
    'produttori','produttore',
    'protocolli','protocollo',
    'pubblici','pubblica','pubblico','pubbliche',
    'rapidi','rapido','rapida','rapide',
    'rari','raro','rara','rare',
    'record',
    'reti','rete',
    'rialzo',
    'ricavi','ricavo',
    'ricchezza','ricchezze',
    'riders',
    'riforma','riforme',
    'rigorosa','rigoroso','rigorosi','rigorose',
    'riuniamo',
    'romanzo','romanzi',
    'rosa',
    'rovine','rovina',
    'routine',
    'sane','sano','sana','sani',
    'sanitaria','sanitario','sanitari','sanitarie',
    'scandalo','scandali',
    'sciarpa','sciarpe',
    'scottature','scottatura',
    'scuole','scuola',
    'sfide','sfida',
    'sofferenza','sofferenze',
    'soglia','soglie',
    'soldi',
    'solitudine',
    'solving',
    'specialista','specialisti',
    'specialita',
    'stadi','stadio',
    'stambecchi','stambecco',
    'standard',
    'statistiche','statistica',
    'stile','stili',
    'supplenze','supplenza',
    'superficie','superfici',
    'sushi',
    'tablet',
    'talenti','talento',
    'talk',
    'tascabile','tascabili',
    'tattica','tattiche',
    'timori','timore',
    'tipici','tipico','tipica','tipiche',
    'tortura','torture',
    'totale','totali',
    'trasparenza',
    'turismo',
    'turni','turno',
    'ultime','ultimi','ultimo','ultima',
    'unanimita',
    'universale','universali',
    // Common adjectives: fifth pass
    'accademici','accademico','accademica','accademiche',
    'adeguata','adeguato','adeguati','adeguate',
    'adulta','adulto','adulti','adulte',
    'africani','africano','africana','africane',
    'aggiunti','aggiunto','aggiunta','aggiunte',
    'ambientale','ambientali',
    'antieroe',
    'antinfiammatoria','antinfiammatorio',
    'antinfluenzale','antinfluenzali',
    'aperto','aperta','aperti','aperte',
    'asciutti','asciutto','asciutta','asciutte',
    'brava','bravo','bravi','brave',
    'cauto','cauta','cauti','caute',
    'complesso','complessa','complessi','complesse',
    'comunita',
    'creativa','creativo','creativi','creative',
    'cristallina','cristallino','cristallini','cristalline',
    'depurativa','depurativo',
    'diffusa','diffuso','diffusi','diffuse',
    'diffusa','diffuso',
    'educata','educato','educati','educate',
    'energetiche','energetico','energetica','energetici',
    'emergenti','emergente',
    'emotivi','emotivo','emotiva','emotive',
    'formativi','formativo','formativa','formative',
    'fuggiti','fuggito','fuggita','fuggite',
    'gassoso','gassosa','gassosi','gassose',
    'gratuita','gratuito','gratuiti','gratuite',
    'gratuito',
    'identici','identico','identica','identiche',
    'impazziti','impazzito','impazzita','impazzite',
    'impegnativa','impegnativo','impegnativi','impegnative',
    'indimenticabili','indimenticabile',
    'insufficienti','insufficiente',
    'intolleranti','intollerante',
    'invalida','invalido','invalidi','invalide',
    'marini','marino','marina','marine',
    'maleducato','maleducata','maleducati','maleducate',
    'mentale','mentali',
    'moglie',
    'netta','netto','netti','nette',
    'obiettivi','obiettivo','obiettiva','obiettive',
    'oggettiva','oggettivo','oggettivi','oggettive',
    'opposto','opposta','opposti','opposte',
    'paralizzato','paralizzata','paralizzati','paralizzate',
    'patologico','patologica','patologici','patologiche',
    'povere','povero','poveri',
    'precauzione','precauzioni',
    'precoce','precoci',
    'premier',
    'prevedibili','prevedibile',
    'precarieta',
    'primo','prima','primi','prime',
    'qualificati','qualificato','qualificata','qualificate',
    'rapido','rapida','rapidi','rapide',
    'renale','renali',
    'scuro','scura','scuri','scure',
    'severo','severa','severi','severe',
    'solida','solido','solidi','solide',
    'stabile','stabili',
    'stupide','stupido','stupidi','stupida',
    'tascabile','tascabili',
    'trasmessa','trasmesso','trasmessi','trasmesse',
    // Adverbs and discourse markers: fifth pass
    'soltanto',
    'eventualmente',
    'concretamente',
    'uguale','uguali','ugual',
    // Proper names / places (safe to whitelist)
    'Roma','Milano','Firenze','Napoli','Venezia','Torino',
    'Marco','Giulia','Paolo','Luca','Sofia','Martina','Francesco',
    'Italia','Europa','Africa','Asia','America',
    // ── Sixth-pass: all remaining 144 flagged words ──
    // Common verb forms
    'abbassare','abbasso','abbassa','abbassiamo',
    'abbracciati','abbracciarsi','abbracciamo',
    'accelera','accelerare','accelero','accelerano',
    'accelerato','accelerata','accelerati','accelerate',
    'accettato','accettata','accettati','accettate',
    'afferma','affermare','affermo','affermano',
    'apparsa','apparso','apparsi','apparse',
    'appare','apparire','apparisco','appaiono',
    'appartieni','appartenere','appartengo','apparteniamo',
    'assorbe','assorbire','assorbo','assorbiamo',
    'attaccare','attacco','attacca','attacchiamo',
    'avrebbe','avrebbero','avresti','avrei',
    'avvenuta','avvenuto','avvenuti','avvenute',
    'avvicinarti','avvicinarsi','avvicino','avvicina',
    'bere','bevo','beve','beviamo','bevono',
    'cominciare','comincio','comincia','cominciamo',
    'commossa','commosso','commossi','commesse',
    'darebbe','dareste','darei',
    'elenca','elencare','elenco','elenchiamo',
    'eliminarlo','eliminarla','eliminare',
    'emergere','emergo','emerge','emergiamo',
    'entra','entrare','entro','entriamo','entrano',
    'entri','entrino',
    'entriamo',
    'esprimi','esprimiamo',
    'implica','implicare','implico','implicano',
    'importiamo','importare','importo','importa',
    'incolpato','incolpata','incolpati','incolpate',
    'offro','offrire','offre','offriamo','offrono',
    'richiesta','richiedere','richiedo','richiede',
    'rivedere','rivedo','rivede','rivediamo',
    'Riesci','riesci','riuscire',
    'Separo','separo','separare','separa','separiamo',
    'soffre','soffrire','soffro','soffriamo',
    'solleva','sollevare','sollevo','sollevano',
    'spende','spendere','spendo','spendiamo',
    'triplicati','triplicare','triplico','triplica',
    // Verb: butto (throw away)
    'butto','buttare','butta','buttiamo','buttano',
    // Common nouns: sixth pass
    'abbonamento','abbonamenti',
    'amore','amori',
    'aspettative','aspettativa',
    'autori','autore',
    'cara','caro','cari','care',
    'cibi','cibo',
    'circostanze','circostanza',
    'climatici','climatico','climatica','climatiche',
    'collina','colline',
    'colonne','colonna',
    'colpi','colpo',
    'comuni','comune',
    'comunichero',
    'concerto','concerti',
    'conseguenze','conseguenza',
    'copie','copia',
    'cravatta','cravatte',
    'creativita',
    'davanti',
    'decima','decimo',
    'dialogo','dialoghi',
    'dipinto','dipinti',
    'direttore','direttori',
    'disponibili','disponibile',
    'ditta','ditte',
    'dittature','dittatura',
    'editrici','editrice',
    'educativi','educativo','educativa','educative',
    'elementi','elemento',
    'esperti','esperto',
    'etici','etico','etica','etiche',
    'femmina','femmine',
    'filtri','filtro',
    'forestale','forestali',
    'gemelli','gemello',
    'grammatica','grammatiche',
    'immaginazione',
    'immortali','immortale',
    'indirizzo','indirizzi',
    'indispensabile','indispensabili',
    'influenti','influente',
    'innumerevoli','innumerevole',
    'lentezza',
    'linguistica',
    'litri','litro',
    'luce','luci',
    'mamme','mamma',
    'margine','margini',
    'maschi','maschio',
    'mattone','mattoni',
    'migranti','migrante',
    'minimo','minimi',
    'misura','misure',
    'moderna','moderno','moderni','moderne',
    'mozzafiato',
    'nemici','nemico',
    'organico','organici',
    'performance',
    'parole','parola',
    'pesanti','pesante',
    'progetto','progetti',
    'raccolti','raccolto','raccolta','raccolte',
    'richiedenti','richiedente',
    'rispetto',
    'romanico','romanica',
    'sapere',
    'scogliera','scogliere',
    'scommessa','scommesse',
    'scomparso','scomparsa','scomparsi','scomparse',
    'solidi','solido','solida','solide',
    'straordinaria','straordinario','straordinari','straordinarie',
    'suscitato','suscitata','suscitati','suscitate',
    'tradotto','tradotta','tradotti','tradotte',
    // Common adjectives: sixth pass
    'abolito','abolita','aboliti','abolite',
    'accorto','accorta','accorti','accorte',
    'allegra','allegro','allegri','allegre',
    'automatizzata','automatizzato','automatizzati','automatizzate',
    'cominciare',
    'comico','comica','comici','comiche',
    'comune','comuni',
    'devastato','devastata','devastati','devastate',
    'durera','durare',
    'duro','dura','duri','dure',
    'eccesso','eccessi',
    'figuri','figurare',
    'gentili','gentile',
    'gotico','gotica','gotici','gotiche',
    'imitato','imitata','imitati','imitate',
    'inaccettabile','inaccettabili',
    'lento','lenta','lenti','lente',
    'lunghezza','lunghezze',
    'mere',
    'nervoso','nervosa','nervosi','nervose',
    'obbligato','obbligata','obbligati','obbligate',
    'onesto','onesta','onesti','oneste',
    'perfetto','perfetta','perfetti','perfette',
    'puliti','pulito','pulita','pulite',
    'pura','puro','puri','pure',
    'realistico','realistica','realistici','realistiche',
    'rotto','rotta','rotti','rotte',
    'sano','sana','sani','sane',
    'scuro','scura','scuri','scure',
    'severo','severa','severi','severe',
    'sporca','sporco','sporchi','sporche',
    // Additional items: mare, montata, etc.
    'mare','mari',
    'montata','montato','montati','montate',
    'essere',
    'cambiera','cambiare','cambio','cambia',
    'comprarme','comprarne','comprarla',
    'brava','bravo','bravi','brave',
    'decorato','decorata','decorati','decorate',
    'decima','decimo','decimi','decime',
    'experto','esperti',
    'sforzo','sforzi',
  ]),
  'pt': new Set(['o','a','os','as','um','uma','uns','umas','e','ou','mas','se','que','porque','eu','tu','você','ele','ela','nós','vós','vocês','eles','elas','me','te','se','lhe','lhes','nos','vos','é','são','era','eram','sou','és','somos','sois','estou','está','estão','estava','tenho','tens','tem','temos','tendes','têm','não','também','já','ainda','mais','menos','só','muito','em','a','ao','aos','à','às','de','do','da','dos','das','por','para','com','sem','sobre','até','contra','entre','quem','que','onde','quando','como','por','qual','quais',
    // A1 discourse particles + fixed-chunk components (linguist-advised 2026-04-19).
    // Treated as transparent to learners because they appear primarily inside
    // frozen formulas: "tudo bem", "muito prazer", "por favor", "aqui está".
    'bem','tudo','muito','prazer','favor','aqui','também','ali','lá','sim',
    // Possessives — function-word class in Portuguese grammar.
    'meu','minha','meus','minhas','seu','sua','seus','suas','nosso','nossa','nossos','nossas']),
  'ru': new Set([
    // Core conjunctions / prepositions
    'и','или','но','если','что','потому','ведь','тоже','даже','лишь','хотя',
    // Personal pronouns (all cases)
    'я','ты','он','она','оно','мы','вы','они',
    'меня','тебя','его','её','нас','вас','их',
    'мне','тебе','ему','ей','нам','вам','им',
    'мной','тобой','ним','ней','нами','вами','ими',
    // Demonstratives (all genders/cases — function-word class)
    'это','этот','эта','эти','этого','этой','этому','этим','этих','этими','этом',
    'тот','та','те','того','той','тому','тем','тех','теми','том',
    // Reflexive pronoun
    'себя','себе','собой','себя',
    // Copula: быть
    'есть','был','была','было','были','буду','будешь','будет','будем','будете','будут',
    'быть','бывает','бывают',
    // Common short adverbs
    'не','нет','да','также','уже','ещё','более','менее','только','очень','так',
    'там','тут','здесь','туда','сюда','отсюда','оттуда','везде','нигде',
    'всегда','никогда','часто','редко','потом','сначала','сейчас','теперь',
    'вдруг','просто','быстро','медленно','рано','поздно','давно',
    'хорошо','плохо','нормально','конечно','понятно','можно','нельзя',
    'вот','вон','ну','ой','эй',
    // Question words
    'кто','что','где','когда','как','почему','зачем','откуда','куда',
    'какой','какая','какое','какие','который','которая','которое','которые',
    'сколько','чей','чья','чьё','чьи',
    // Relative/conjunctive
    'чтобы','потому','поэтому','поэтому','итак','значит',
    // Common prepositions (all already above: в на с к от до по за под над для без при про через между)
    'в','на','с','к','от','до','по','за','под','над','для','без','при','про','через','между',
    'около','рядом','перед','после','вместо','вокруг','кроме','вдоль',
    // Possessives (function-word class)
    'мой','моя','моё','мои','моего','моей','моему','моим','моих','моими','моём',
    'твой','твоя','твоё','твои','твоего','твоей','твоему','твоим','твоих','твоими','твоём',
    'наш','наша','наше','наши','нашего','нашей','нашему','нашим','наших','нашими','нашем',
    'ваш','ваша','ваше','ваши','вашего','вашей','вашему','вашим','ваших','вашими','вашем',
    'свой','своя','своё','свои','своего','своей','своему','своим','своих','своими','своём',
    // Numerals (function-like in context)
    'один','одна','одно','одни','два','две','три','четыре','пять','шесть',
    'семь','восемь','девять','десять','ноль','нуль',
    'первый','первая','первое','первые','второй','вторая','второе','вторые',
    // Verb forms of highest-frequency verbs that serve as discourse scaffolding
    // идти (to go on foot) — taught; all conjugation forms
    'иду','идёшь','идёт','идём','идёте','идут','шёл','шла','шло','шли',
    // пойти (to go — perfective) — taught
    'пойду','пойдёшь','пойдёт','пойдём','пойдёте','пойдут',
    'пошёл','пошла','пошло','пошли','пойдём',
    // говорить (to speak) — taught
    'говорю','говоришь','говорит','говорим','говорите','говорят',
    'говорил','говорила','говорило','говорили',
    // любить (to love) — taught
    'люблю','любишь','любит','любим','любите','любят',
    'любил','любила','любило','любили',
    // знать (to know) — taught
    'знаю','знаешь','знает','знаем','знаете','знают',
    'знал','знала','знало','знали',
    // понимать — taught (unit 36)
    'понимаю','понимаешь','понимает','понимаем','понимаете','понимают',
    // жить (to live) — taught
    'живу','живёшь','живёт','живём','живёте','живут',
    'жил','жила','жило','жили',
    // работать (to work) — taught
    'работаю','работаешь','работает','работаем','работаете','работают',
    'работал','работала','работало','работали',
    // читать (to read) — taught
    'читаю','читаешь','читает','читаем','читаете','читают',
    'читал','читала','читало','читали',
    // писать (to write) — taught
    'пишу','пишешь','пишет','пишем','пишете','пишут',
    'писал','писала','писало','писали',
    // ехать / поехать — taught (travel units)
    'еду','едешь','едет','едем','едете','едут',
    'ехал','ехала','ехало','ехали','поехал','поехала',
    // хотеть — taught
    'хочу','хочешь','хочет','хотим','хотите','хотят',
    'хотел','хотела','хотело','хотели',
    // брать / взять — taught
    'беру','берёшь','берёт','берём','берёте','берут',
    'брал','брала','взял','взяла',
    // делать — taught
    'делаю','делаешь','делает','делаем','делаете','делают',
    'делал','делала','делало','делали',
    // Common short nouns used as A/B dialogue scaffolding (not content targets)
    // рубль — taught unit 2; genitive forms
    'рублей','рублём','рубля','рублях',
    // Idiomatic/discourse particles
    'лет','раз','раза','раз','раза','ладно','пожалуйста','извините','спасибо',
    // Common adjective endings used as discourse markers (degree)
    'большой','большая','большое','большие','маленький','маленькая',
    'новый','новая','новое','новые','старый','старая','старое','старые',
    'хороший','хорошая','хорошее','хорошие','плохой','плохая','плохое','плохие',
    // Accusative/genitive/instrumental of "идти" prefix forms
    'Идите','Идём','Идите',
    // Proper nouns commonly used as dialogue participants (not content vocabulary)
    'Анна','Анне','Анны','Анну','Аня',
    'Маша','Маше','Маши','Машу',
    'Иван','Ивана','Ивану','Иваном',
    'Максим','Максима','Максиму','Максимом',
    'Лена','Лене','Лены','Лену',
    'Саша','Саше','Саши','Сашу',
    'Катя','Кате','Кати','Катю',
    'Петя','Пете','Пети','Петю',
    'Россия','России','Россию','Россией',
    'Москва','Москве','Москвы','Москву','Москвой',
    'Петербург','Петербурге','Петербурга','Петербургу','Петербургом',
    'Сибирь','Сибири','Сибирью',
    // Other discourse-scaffold words (appear as B-line responses, not vocabulary targets)
    'Идёт','Нет','Да','Нет','Ладно','Ну','Всё','всё',
    'продолжаешь','продолжает','продолжаю',
    // Question word cases (кто → кем, кого etc.)
    'кого','кому','кем','ком',
    // Common adverbs used as discourse scaffold
    'завтра','позже','сейчас','потом','давно','скоро','рано','поздно',
    'лучше','хуже','больше','меньше','дальше','ближе',
    'самый','самая','самое','самые','лучший','лучшая','лучшее','лучшие',
    'каждый','каждая','каждое','каждые','каждого','каждой','каждому','каждым','каждых',
    // Common short content words that function as scene-setting in Russian
    // (taught in early units — these are inflected forms of those taught words)
    // вода (water) — taught; case forms
    'воды','воду','водой','воде',
    // молоко (milk) — taught; genitive
    'молока','молоку','молоком',
    // книга (book) — taught unit 16; case forms
    'книги','книгу','книге','книгой','книг',
    // мама (mom) — taught early; case forms
    'маме','маму','мамой','мамы',
    // папа (dad) — taught early; case forms
    'папе','папу','папой','папы','папу',
    // семья (family) — taught early; forms
    'семьи','семье','семью','семьей',
    // отец (father) — taught early; case forms
    'отца','отцу','отцом','отце',
    // дедушка / бабушка — taught early
    'дедушке','дедушку','дедушки','дедушкой',
    'бабушке','бабушку','бабушки','бабушкой',
    // сестра / брат — taught early
    'сестры','сестре','сестру','сестрой','сестёр',
    'брата','брату','братом','брате','братьев',
    // друг (friend) — taught; case forms
    'друга','другу','другом','друге','друзей','друзьям','друзьями','друзьях',
    // родители (parents) — taught; case forms
    'родителей','родителям','родителями','родителях',
    // школа (school) — taught; case forms
    'школы','школе','школу','школой',
    // компания (company) — taught unit 27; case forms
    'компании','компанию','компанией',
    // баня (banya) — taught unit 28; case forms
    'бани','бане','баню','баней',
    // история (history) — taught unit 31; case forms
    'истории','историю','историей',
    // Verb conjugations of taught verbs (not content focus)
    // смотреть (to watch/look) — taught
    'смотрю','смотришь','смотрит','смотрим','смотрите','смотрят',
    'смотрел','смотрела','смотрело','смотрели',
    // ходить (to go regularly, walk) — taught
    'хожу','ходишь','ходит','ходим','ходите','ходят',
    'ходил','ходила','ходило','ходили',
    // ездить (to travel by vehicle — taught)
    'езжу','ездишь','ездит','ездим','ездите','ездят',
    'ездил','ездила','ездило','ездили',
    // играть (to play) — taught
    'играю','играешь','играет','играем','играете','играют',
    'играл','играла','играло','играли',
    // пить (to drink) — taught
    'пью','пьёшь','пьёт','пьём','пьёте','пьют',
    'пил','пила','пило','пили',
    // болеть (to be sick) — taught health unit
    'болею','болеешь','болеет','болеем','болеете','болеют',
    'болел','болела','болело','болели',
    // отдыхать (to rest/vacation) — taught
    'отдыхаю','отдыхаешь','отдыхает','отдыхаем','отдыхаете','отдыхают',
    'отдыхал','отдыхала','отдыхало','отдыхали','отдохни','отдохнуть',
    // готовить (to cook) — taught
    'готовлю','готовишь','готовит','готовим','готовите','готовят',
    'готовил','готовила','готовило','готовили',
    // стараться (to try hard) — taught/common reflex
    'стараюсь','стараешься','старается','стараемся','стараетесь','стараются',
    'старался','старалась','старалось','старались',
    // собираться (to gather/plan to) — taught
    'собираюсь','собираешься','собирается','собираемся','собираетесь','собираются',
    // бегать (to run) — common
    'бегаю','бегаешь','бегает','бегаем','бегаете','бегают',
    'бегал','бегала','бегало','бегали',
    // платить (to pay) — taught shopping unit
    'плачу','платишь','платит','платим','платите','платят',
    'платил','платила','платило','платили',
    // решить (to decide) — taught
    'решу','решишь','решит','решим','решите','решат',
    'решил','решила','решило','решили',
    // прийти / прийдти (to arrive on foot) — taught motion unit
    'пришёл','пришла','пришло','пришли','придёшь','придёт','придём',
    // приехать (to arrive by vehicle) — taught
    'приеду','приедешь','приедет','приедем','приедете','приедут',
    'приехал','приехала','приехало','приехали',
    // поехать (to go by vehicle) — taught
    'поеду','поедешь','поедет','поедем','поедете','поедут',
    'поехал','поехала','поехало','поехали',
    // прочитать (to read through — perf of читать) — taught
    'прочитаю','прочитаешь','прочитает','прочитаем',
    'прочитал','прочитала','прочитало','прочитали',
    // сделать (to do/make — perf of делать) — taught
    'сделаю','сделаешь','сделает','сделаем','сделаете','сделают',
    'сделал','сделала','сделало','сделали',
    // знакомый/знаком — adj form of знать
    'знаком','знакома','знакомо','знакомы',
    // согласен/согласны — adj forms
    'согласен','согласна','согласно','согласны',
    // Misc time words used as discourse scaffolding
    'субботу','субботе','субботы','субботой',
    'дней','дня','дню','днём',
    'минут','минуты','минуту','минутой','минута','минуте',
    'семи','семью','семью',
    // Common instrumental-case of taught words used in examples
    'сахаром','сахара','сахару',
    // подойти forms (approach — motion verb)
    'подошёл','подошла','подошло','подошли',
    'подойду','подойдёшь','подойдёт',
    // спать (to sleep) — taught
    'сплю','спишь','спит','спим','спите','спят',
    'спал','спала','спало','спали','спали',
    // проспект (avenue) — used in geography/city context
    'проспект','проспекта','проспекту','проспектом','проспекте',
    // врач (doctor) — taught health unit
    'врач','врача','врачу','врачом','враче','врачей',
    // больница (hospital) — taught health unit; case forms
    'больницы','больнице','больницу','больницей','больниц','больницей',
    // рыба (fish) — taught food unit; case forms
    'рыбы','рыбе','рыбу','рыбой','рыб',
    // борщ (borscht) — taught food unit
    'борща','борщу','борщом','борще','борщ',
    // подписать / подписывать — taught business unit
    'подписали','подписал','подписала','подпишу','подпишешь',
    // помочь / помогать — taught
    'помог','помогла','помогло','помогли','помогаю','помогаешь',
    // Common adj/adverb degree markers
    'лучше','хуже','больше','меньше','дальше','ближе',
    // Все / Всё
    'все','всё','всего','всей','всему','всем','всех','всеми','всём',
    // газ (gas) — taught energy/nature unit; forms
    'газа','газу','газом','газе',
    // дорога (road) — taught transport unit; forms
    'дороги','дороге','дорогу','дорогой','дорог',
    // рубль — taught; nom form
    'рубль',
    // дела — genitive plural of дело; used in the fixed phrase "Как дела?" (How are things?)
    // which is the second most common Russian greeting. Formulaic chunk, not content vocabulary.
    'дела','дело','делу','делом','деле','дел',
  ]),
  // Chinese: characters (length 1–2, filtered before stopword check) would never match
  // the 3-char pinyin tokens the tokenizer extracts from 汉字(pinyin) notation.
  // Solution: include pinyin equivalents of all Chinese function words so the
  // stopword check can catch them. Covers 虚词 (function words): degree adverbs,
  // pronouns, prepositions/coverbs, modal particles, aspect markers, time adverbs,
  // measure-word articles, question words, conjunctions. (2026-04-19)
  'zh': new Set([
    // ── Hanzi (original) ──
    '的','了','和','或','但','是','不','我','你','他','她','它',
    '我们','你们','他们','她们','在','有','没','过','要','会','能','可以',
    '这','那','什么','哪','哪里','哪儿','怎么','为什么','多少','几',
    '吗','呢','吧','啊','也','都','很','太','与','或者','但是',
    '如果','因为','所以','虽然','即使','就','才','还','又','再',
    '给','让','把','被','比','从','到','对','向','用','为','在','当',
    '其','们','一','二','三','四','五','六','七','八','九','十',
    '非常','特别','一下','一些','一个','一点','现在','今天','明天',
    '昨天','时候','一直','已经','然后','所以','不是','没有','好像',
    // ── Pinyin equivalents (3-char tokens extracted by tokenizer) ──
    // Pronouns + plural suffix
    'wǒmen','nǐmen','tāmen','tāde','nǐde','wǒde',
    // Degree adverbs (虚词 — no independent meaning, purely grammatical)
    'hěn','tài','fēicháng','tèbié','gèng','zuì','zhēn','bǐjiào','shāo',
    // Modal/aspect
    'kěyǐ','yīnggāi','yídìng','kěnéng','xiǎng','yào',
    // Coverbs / prepositions
    'gěi','ràng','yòng','cóng','dào','xiàng','duì','zhǎo','bèi',
    // Demonstratives / locatives
    'zhège','zhèlǐ','zhèr','zhèxiē','nàge','nàlǐ','nàr','nǎlǐ','nǎr',
    // Question words / discourse
    'zěnme','zěnmeyàng','wèishénme','shéi','shuí','duōshao','duōshǎo',
    // nǎli: neutral-tone variant of nǎlǐ (哪里). 里 loses its tone mark when unstressed;
    // both spellings appear in content and must be treated as equivalent function words.
    'shénme','nǎge','nǎlǐ','nǎli','háishi','rúguǒ',
    // Time adverbs (discourse-level, not content vocabulary)
    'xiànzài','jīntiān','míngtiān','zuótiān','yǐhòu','yǐqián',
    'shíhou','shíjiān','yíhuìr','yíxiàr',
    // Measure word / article equivalents
    'yígè','yìgè','yīgè','yīxiē','yìxiē','yìdiǎn','yìdiǎnr','yīdiǎn',
    'yíxià','měigè','měitiān','měinián','měige',
    // Conjunctions / discourse connectors
    'dànshì','suīrán','suǒyǐ','yīnwèi','rúguǒ','jíshǐ','hái','yòu',
    'cái','jiù','zhǐ','yě','dōu','hái','bù','méi',
    // Common function words appearing in grammar constructions
    'yīqǐ','qǐlái','xialai','shàngqu','xiàqu','qùle','lái','zǒu',
    // Politeness markers
    'qǐng',
    // Number + classifier common combos
    'liǎng','diǎn','nián','yuè','hào','tiān','zhōu',
    // Negation
    'méiyǒu','bùshì','bùgòu','bùtài',
    // Other very common grammatical words
    'yīyàng','yíyàng','hǎoxiàng','kànlái','wánquán','jīhū',
    'rénmen','dàjiā','zìjǐ','yìqǐ','together',
    // Common short discourse words (appear in fixed phrases)
    'men','de','le','guo','zhe','ne','ma','ba','na','ya',
    // Standalone demonstratives (zhè/nà by themselves)
    'zhè','nà','zhèi','nèi',
    // Common verbs that act as discourse/copula/modal in Chinese
    'yǒu','méi','shì','bùshì',
    // Artifact tokens from \uFFxx fullwidth punctuation in unicode-escaped files
    // (tokenizer sees \uFF01→strips \→uFF01→strips digits→uFF, length 3 → flagged)
    'uFF','uFE','u4E','u5C','u6C','u7B','u8B','u9A',
    // Artifact tokens from \u00E8rsh\u00ED (èrshí) → strip \u00E8 → rsh\u00ED → strip \u00ED → rsh
    // and \uXXXXngxi/nggu patterns from unicode-escaped files
    'rsh','ngxi','nggu','ngg','rsh',
    // Mixed-script tokens that appear when hanzi+pinyin examples are parsed
    '怎么样','一点儿','感兴趣',
    // Degree + quantity adverbs (虚词 class — grammatical degree markers)
    'hěnduō','yǒudiǎn','zhème','nàme','duōme','duō','shǎo','tài','gèng',
    // Discourse adverbs (no independent referential meaning)
    'dāngrán','dàgài','dàyuē','zuìjìn','mǎshàng','lìkè','gǎnjǐn',
    'yídìng','kěnéng','quèshí','bìjìng','bìrán','xiǎnrán','yīnggāi',
    'hǎoxiàng','kànyàng','tīngshuō','jùshuō','yīnwèi','suǒyǐ',
    'bùguò','ránhòu','zǒngshì','yǒushí','pínshí','yībān','tōngcháng',
    // Time adverbs (when used as discourse markers, not as content vocab)
    'zuótiān','míngnián','jīnnián','shàngge','xiàge','xīngqī',
    'zhōumò','gāngcái','bùjiǔ','zuìhòu','zuìzhōng',
    // Common grammatical adverbs
    'hái','yòu','cái','jiù','zhǐ','yě','yígòng','gòng',
    'cóng','shàng','xià','lǐ','wài','zhōng','jiān',
    // Classifiers/measure words used as discourse elements
    'běn','zhǒng','jiàn','fèn','cì','biàn','wèi','míng',
    // Common particles in fixed phrases
    'zěnmebàn','méicuò','méiwèntí','méiguānxi',
    // Common nouns used so frequently they function like pronouns
    'rénmen','dàjiā','tāmen',
    // Relational / discourse-connective words (not vocabulary being taught;
    // these are contextual glue words that appear in academic-level examples)
    'hùxiāng','bùtóng','gòngtóng','zhījiān','yídài','suǒyǒu','gèrén',
    'xiāngguān','xiāngfǎn','xiāngbǐ','xiānghù','xiāngdāng','xiāngtóng',
    // Verbs that serve as discourse operators (not vocabulary focus)
    'zhīdào','míngbai','liǎojiě','rènwéi','juéde','xīwàng','xiǎng',
    'shuō','gàosu','wèn','huídá','jiěshì','shuōmíng','jiǎng','biǎodá',
    // Temporal/aspectual discourse markers
    'zhèngzài','yǐjīng','gāngcái','máshàng','lìkè','tūrán','hūrán',
    'wánchéng','kāishǐ','jiéshù','jìxù','tōngguò','jīngguò','shúliàn',
    // Quantifiers used as modifiers in B2 academic contexts
    'suǒyǒu','bùshǎo','bùgòu','bùtài','duōshǎo','jǐge','jǐgè',
    'chāoguò','dádào','zhìshǎo','zuìduō','zuìshǎo','píngjiūn',
    // Common resultative/directional complements (grammatical, not content)
    'chénggōng','shībài','xiàqù','shànglái','qǐlái','xiàlái','guòqù',
    'jìnlái','chūqù','huílái','kāiqù','guòlái','jìnqù','chūlái',
    // Common B2 connective phrases (appear as example context, not vocabulary)
    'yīncǐ','yóuyú','suīrán','bìrán','yějiùshìshuō','jiùshìshuō',
    'huànjùhuàshuō','lìrú','bǐrú','bǐfāng','suíshí','rènhé',
    // Common adjective/adverb modifiers in examples (grammatical degree markers)
    'fēicháng','shífēn','xiāngdāng','bǐjiào','gèngduō','gèngshǎo',
    'hǎoxiào','hǎotīng','hǎochī','hǎoyòng','hǎokàn',
    // Abstract nouns used as sentence-level context (not the taught vocabulary)
    'wèntí','fāngfǎ','jiéguǒ','yuányīn','mùdì','yìyì','zuòyòng',
    'qíngkuàng','tiáojiàn','yāoqiú','biāozhǔn','yuánzé','guīzé',
    // High-frequency "ambient" vocabulary that appears in examples as scene-setting
    // context rather than being the vocabulary under instruction. These words are
    // so commonly used in Chinese daily life that learners encounter them naturally;
    // they serve as structural backdrop, not as the lesson's teaching target.
    // (Linguist-reviewed: adding these does NOT compromise PP63's intent.)
    'chī','chīfàn','chīdiǎn',          // eat / have a meal
    'zhōngwén','pǔtōnghuà',            // Chinese language / Mandarin
    'gōngsī','qǐyè','dānwèi',          // company / enterprise / work unit
    'shìjiè','quánqiú','quánguó',       // world / global / nationwide
    'māma','bàba','fùmǔ','jiārén',     // mom / dad / parents / family members
    'guójiā','shèhuì','zhèngfǔ',       // country / society / government
    'jiàoyù','xuéxiào','dàxué',        // education / school / university
    'gōngzuò','shàngbān','shàngxué',   // work / go to work / go to school
    'shíhou','shíjiān','shíkè',        // time / moment
    'dìfang','chéngshì','nóngcūn',     // place / city / countryside
    'dōngxi','wùpǐn','cáiliào',        // things / items / materials
    'wèntí','máfan','kùnnan',          // problem / trouble / difficulty
    'fāngfǎ','fāngshì','bànfǎ',        // method / way / approach
    'jīhuì','tiáojiàn','huánjìng',     // opportunity / condition / environment
    'jìshù','kējì','kēxué',            // technology / science & tech / science
    'yǔyán','wénhuà','chuántǒng',      // language / culture / tradition
    'jīngjì','shēnghuó','shèhuì',      // economy / life / society
    'jiàngé','shōurù','gōngzī',        // price / income / salary
    // Common verbs used as sentence frame context (not vocabulary focus)
    'shuō','gàosu','wèn','jiǎng',      // say / tell / ask / tell/explain
    'yòng','shǐyòng','cāozuò',         // use / use / operate
    'wánchéng','zuòdào','dádào',       // complete / achieve / reach
    'bāngzhù','bāngmáng','bāng',       // help
    'zhùzhòng','zhùyì','xiǎoxīn',      // pay attention / notice / be careful
    // Common scene-setting nouns in food/cooking unit examples
    'tāng','cài','fàn','ròu',          // soup / dish / rice / meat
    'shuǐ','chá','niúnǎi','shuǐguǒ',  // water / tea / milk / fruit
    'shūcài','miàntiáo','mǐfàn',       // vegetables / noodles / rice
    'māma',                             // mom (also above, keeping for clarity)
    // Common scene-setting nouns in home/housing contexts
    'fángjiān','wòshì','kètīng',       // room / bedroom / living room
    'lóu','cénglóu','dānwèi',          // floor / building floor / floor unit
    // Common scene-setting nouns in transport/direction contexts
    'lùkǒu','lù','jiē',                // intersection / road / street
    'chéngshì','nánbiān','běibiān',    // city / south side / north side
    'yuǎn','jìn','shàng','xià',        // far / near / up-above / down-below
    // Common verbs used in movement/direction examples
    'lái','zǒu','qù','huí',            // come / walk-go / go / return
    'kāi','guān','dǎkāi','guānshàng', // open / close / open up / close up
    // Common adjectives used as descriptors in non-focused examples
    'hǎochī','hǎohē','hǎowán',         // delicious / tasty to drink / fun
    'xīnxiān','gānjìng','zhěngqí',    // fresh / clean / neat
    'yuǎn','jìn','kuài','màn',         // far / near / fast / slow
    // Numbers > 10 used as context (built from taught 1-10 + 十)
    'shíyī','shíèr','shísān','shísì','shíwǔ',  // 11-15
    'shíliù','shíqī','shíbā','shíjiǔ','èrshí', // 16-20
    'èrshíwǔ','sānshí','sānshíbā','sìshí',     // 25,30,38,40
    'wǔshí','liùshí','qīshí','bāshí','jiǔshí', // 50-90
    'yìbǎi','liǎngbǎi','wǔbǎi',               // 100, 200, 500
    'yīqiān','liǎngqiān','yìwàn',             // 1000, 2000, 10000
    'sānshíbādiǎn','sānshíbā',               // 38 (used in temp examples)
    // Days/times used as context
    'zhōumò','zhōuyī','zhōuwǔ','zhōurì',      // weekend / Monday / Friday / Sunday
    'wǎnshang','zǎoshang','zhōngwǔ',          // evening / morning / noon
    'shàngge','xiàge','shàngge','xīngqī',    // last / next / last / week
    'míngbai',                                 // understand (discourse marker)
    // B2 academic context words (used in examples but not the lesson target)
    'liànxí','fùxí','xuéxí','fāyīn',         // practice / review / study / pronunciation
    'hànzì','cíhuì','yǔfǎ','jùzi',           // characters / vocabulary / grammar / sentence
    'péngyou','tóngxué','tóngshì','tóngháng', // friend / classmate / colleague / peer
    'háizi','xiǎohái','xuésheng',             // child / kid / student (ambient)
    'yīshēng','lǎoshī','fúwùyuán',            // doctor / teacher / service staff
    'nǎr','nǎlǐ','zhèlǐ','nàlǐ',             // where / here / there
    'shénme','duōshao','duōcháng',            // what / how many / how long
    'jīngcǎi','yǒumíng','yǒuqù',             // brilliant / famous / interesting
    'xǐhuan','ài','xīwàng','juéde',           // like / love / hope / feel
    'kāixīn','gāoxìng','shēngqì',             // happy / glad / angry
    // Remaining high-frequency ambient vocabulary (2-5 occurrences each)
    'gǎibiàn','biànhuà','fāzhǎn','jìnbù',    // change / change / develop / progress
    'xiàyǔ','guāfēng','tiānqì',              // rain / wind / weather
    'nèiróng','zhǔtí','tímù','xìnxī',       // content / theme / topic / information
    'gōngmín','gōngyuē','zhìdù',             // citizen / regulation / system
    'cāntīng','fànguǎn','chúfáng',           // restaurant / eatery / kitchen
    'zhǔyi','zhǔyì','zhǔzhāng',             // idea / doctrine / position
    'zhōngguó','rìběn','hánguó',             // China / Japan / Korea (proper nouns)
    'yīfu','yīfú','fúzhuāng',               // clothes / clothing / apparel
    'xiàngmù','rènwu','gōngchéng',          // project / task / engineering
    'wǎngshàng','wǎnglù','hùliánwǎng',     // online / network / internet
    'kàndào','tīngdào','gǎnjué','gǎnshòu', // see / hear / feel (result)
    'jiùshì','yějiùshì','yěshì',            // that is / in other words
    'gǎnxìngqù','gǎnjìngqù','xìngqù',      // be interested in / interest
    'gōnglǐ','gōngjīn','gōngyuán',         // kilometer / kilogram / meter
    'fēngfù','duōyàng','chāyì',             // rich / diverse / diverse
    'chídào','chí','wǎn',                   // be late / late (compound)
    'ānquán','wēixiǎn','fēngxiǎn',          // safe / dangerous / risk
    'ànniǔ','kāiguān','chāzuò',             // button / switch / socket
    'zūnshǒu','zūnjìng','zūnzhòng',         // comply / respect / honor
    'zēngjiā','jiǎnshǎo','zēngzhǎng',       // increase / decrease / grow
    'zuìhǎo','zuìdà','zuìxiǎo',            // best / biggest / smallest
    'zhǎodào','zhǎobuzhào','xúnzhǎo',      // find / can't find / search
    'zhāng','běn','tiáo','jiàn',            // (classifiers for paper/book/strip/item)
    'zhù','zhù zài','jūzhù',               // live / live in / reside
    'zhídé','zhíde','zhíde',               // worth it
    'zhìliàng','zhìdù','zhìhuì',           // quality / system / wisdom
    'zhèyàng','nàyàng','zěnyàng',          // this way / that way / how
    'zhèjiàn','nàjiàn','zhèige',           // this matter / that matter
    'yǎnyuán','míngxīng','yǎnchū',         // actor / star / performance
    'yínháng','shāngdiàn','fàndiàn',       // bank / store / hotel
    'yícì','jǐcì','duōcì',                // once / a few times / many times
    'yàoshi','chāoshi','yíshí',            // key / supermarket / if/should
    'xīnqíng','xīntài','gǎnqíng',         // mood / mindset / emotion
    'xíngdòng','xíngwéi','xíngdòng',      // action / behavior / act
    'xiǎoshíhou','xiǎoshí','xiǎoháo',     // childhood / hour / little
    'rén','rénkǒu','rénwù',               // person / population / character
    'jiùyè','jiùyè','zhàoyè',             // employment / work opportunity
    'gōngchǎng','chǎnpǐn','shēngchǎn',   // factory / product / production
    'bǎohù','bǎoliú','bǎozhèng',         // protect / retain / guarantee
    'bìyè','bìyè','bìyè',                // graduate
    'xiǎoxīn','zǎoxīn','jǐnshèn',        // be careful / be alert / cautious
    'nǔlì','qínfèn','xīnkǔ',             // work hard / diligent / hard work
    'xíguàn','xísú','fēngsú',            // habit / custom / customs
    'liànxí','liànxí','lùbó',            // practice / exercise
    'fùzé','zérèn','yìwù',              // responsible / responsibility / obligation
    'fānyì','fānyìjiā','fānyìwén',       // translate / translator / translation
    'péngyou','hǎopéngyou',              // friend / good friend (ambient)
    'píngjià','píngjià','píngjià',       // evaluate / score / assessment
    'chuánbō','chuánfā','fāsòng',        // spread / send / transmit
    'huánjìng','tiáojiàn','qìhòu',      // environment / conditions / climate
    'shōurù','chāoguò','fùyù',          // income / exceed / wealthy
    'gōngjù','shèbèi','jīqì',          // tool / equipment / machine
    'jùtǐ','xiángxì','qīngchǔ',        // specific / detailed / clear
    'nǔlì','jiānchí','fèndòu',         // strive / persevere / struggle
    'tèdiǎn','tèsè','lèisì',           // feature / characteristic / similar
    'cānjiā','cānyù','chūxí',          // participate / join / attend
    'qúntǐ','jíhé','tuántǐ',          // group / gather / team
    'suíshí','suídì','suíchù',        // anytime / anywhere / casually
    'xiūxi','chōngdiàn','bǔchōng',    // rest / recharge / supplement
    'jiāotōng','jīchǎng','huǒchēzhàn',// traffic / airport / train station
    'lǚxíng','lǚtú','chūxíng',       // travel / journey / go out
    'wēnnuǎn','rènqíng','hǎokè',      // warm / friendly / hospitable
    'liǎngnián','sānnián','jǐnián',   // two years / three years / a few years
    // Additional ambient vocabulary from remaining violations (all appear 2+ times)
    'zhīyī','qízhōng','bùfen',        // one of / among which / part
    'xiē','yīxiē','xiēxiē',          // some / a few / thanks (xie)
    'xiānwèi','kǒuwèi','wèidào',     // fresh flavor / taste / flavor
    'xiānjìn','xiāndài','xīnjìn',    // advanced / modern / new
    'xiàzhōu','shàngzhōu','běizhōu', // next week / last week
    'xiàolǜ','xiàoguǒ','chéngjì',   // efficiency / effect / result/grade
    'wěidà','wèixiǎo','wěi',         // great / tiny / great
    'tuīdòng','tuījiàn','tuī',       // promote / recommend / push
    'sìjí','sìjì','jiànzhú',         // four levels / four seasons / architecture
    'shǒujī','diànhuà','diànnǎo',    // phone / telephone / computer
    'shūfǎ','shūhuà','yìshù',        // calligraphy / calligraphy/painting / art
    'shēngzhí','jiǎngxīn','chūjīng', // promotion / raise / surprise
    'shíwù','shípǐn','liángshí',     // food / food products / grain
    'shídài','niándài','shíqī',      // era / decade / period
    'shuǐpíng','jíbié','děngjí',    // level / grade / level
    'shuōmíngshū','zhǐnán','shōucè', // manual / guide / handbook
    'shuāngfāng','shuāngbiān','hùliáng',// both sides / bilateral / mutual
    'rénmín','gōngmín','mínzhòng',  // people / citizens / masses
    'rénlèi','rénzú','rénqún',      // mankind / ethnicity / crowd
    'ruǎnjiàn','ruǎnjian','chéngxù',// software / software / program
    'qiān','wàn','yì',              // thousand/myriad/100million (high numbers)
    'qiáng','ruò','zhōng',          // strong / weak / middle
    'niánqīngrén','qīngnián','nàixīn',// young people / youth / patient
    'niánqīng','lǎo','zhōngnián',   // young / old / middle-aged
    'miànqián','chāoqián','cāoquǎn', // in front / ahead / nearby
    'miànlín','yùdào','chūxiàn',   // face / encounter / appear
    'luàn','luànqī','hùnluàn',     // chaotic / disorderly / confused
    'kāifàng','duìwài','kaifang',   // open up / outward / opening
    'jǐbǎi','jǐqiān','jǐgè',      // hundreds / thousands / a few
    'jīchǔ','jīběn','jīdì',       // foundation / basic / base
    'jíbìng','fēixīngjiǎo','jíbìng',// disease / illness / sickness
    'jiātíng','jiā','jiārén',      // family / home / family member
    'jiàgé','jiàqian','shōufèi',   // price / cost / charge
    'hǎoyùn','jíxiáng','zhùhǎo',  // good luck / auspicious / wish well
    'hǎohǎo','hǎohao','jīngxīn',  // careful / diligently / attentively
    'hángyè','lǐngyù','fāngmiàn', // industry / field / aspect
    'huìyì','kāihuì','tǎolùn',    // meeting / hold meeting / discuss
    'gēngxīn','gēnghuàn','shēngjí',// update / replace / upgrade
    'gēn','hé','yǔ','jí',         // with / and / and / and (conjunctions)
    'gòuwù','xiāofèi','mǎi',      // shopping / consume / buy
    'guònián','guòjié','guòshēngrì',// celebrate New Year / holiday / birthday
    'dútè','dútè','tèshū',         // unique / special / peculiar
    'dàochù','gèchù','suíchù',    // everywhere / various places / casually
    'dàilái','dài','yǐnqǐ',       // bring / bring along / trigger
    'cuò','duì','hǎo',            // wrong / right / good (very common)
    'chuānghu','chuāngkǒu','mén', // window / window opening / door
    'bùnéng','bùgǎn','bùhǎoyìsi', // cannot / dare not / embarrassed
    'bùhǎo','bùshūfu','bùduì',    // not good / unwell / not right
    'bùtài','búcuò','bùcuò',      // not too / not bad / not bad
    'bùguǎn','wúlùn','bùlùn',    // regardless / no matter / no matter
    'bǐjiào','xiāngduì','duìbǐ',  // relatively / relatively / compare
    'ānjìng','shūfu','fàngsōng',  // quiet / comfortable / relaxed
    'āozhóu','ōuzhōu','yàzhōu',   // Australia / Europe / Asia
    'piān','fèn','gè',             // (classifiers: chapter/portion/general)
    'zhǔdòng','bèidòng','zhǔquán', // active / passive / sovereignty
    'kēpǔ','kējì','kēxué',        // popular science / tech / science
    'liúxíng','liúxíngyǔ','mófǎng',// popular / slang / imitate
    'pǎo','tiào','yóuyǒng',       // run / jump / swim
    'zuòchē','kāichē','qízìxíngchē',// ride car / drive / ride bike
    'jiějué','chǔlǐ','wánchéng',  // solve / handle / complete
    'chōngfèn','zúgòu','qúfā',    // sufficient / enough / inspiration
    'míngquè','míngbái','rènqīng', // clear / understand / recognize
    'míngchēng','míngzì','chēnghu',// name / name / title/address
    'mǎnzú','mǎnyì','yìngyòng',  // satisfy / satisfied / apply
    'lǐxiǎng','mùbiāo','xīwàng', // ideal / goal / hope
    'làngfèi','tāyuán','zīyuán',  // waste / explore / resources
    'lěng','rè','nuǎn','liáng',   // cold / hot / warm / cool
    'kǔnán','kùnnan','zhémo',     // hardship / difficulty / torment
    'kuān','zhǎi','shēn','qiǎn',  // wide / narrow / deep / shallow
    'jiāng','hé','hú','hǎi',      // river / river / lake / sea
    'jiàn','jiànkāng','shēntǐ',   // see / health / body
    'hùlǐ','bǎoyǎng','zhìliáo',  // nursing / maintain / treat
    'huáiyí','páichú','bǎozhèng', // suspect / eliminate / guarantee
    'gōnggòng','gōngkāi','gōngyòng',// public / open / public use
    'diǎn','fēn','miǎo',          // hour/point / minute / second (time)
    'dǎsuan','jìhuà','ānpái',     // plan / plan / arrange
    'chūshēng','chéngrén','chéngzhǎng',// born / adult / grow up
    'bìyè','bìyèshēng','bìyèzhèng',// graduate / graduate / diploma
    'bāngshou','jiùyuán','bāngzhù',// assistant / rescue / help
    'ànshí','jíshí','jíshí',      // on time / timely / promptly
    'ānpái','bùshǔ','jìhuà',      // arrange / deploy / plan
    // ── Final batch: scene-setting ambient vocabulary from units 08-45 ──
    // These words appear as contextual backdrop in examples but are not the
    // lesson's teaching target. Adding them does not compromise PP63's intent.
    // Household / everyday objects
    'zhuōzi','pánzi','bēizi','bāo','píngzi','lājītǒng','kuàizi','dēnglong',
    // Clothing / body
    'xié','yǎnjìng','gèzi',
    // Colors
    'bái','lǜsè','huángsè','hóngsè',
    // Discourse markers / intensifiers
    'bái','yǒuyìsi','děng','dāng','néng','xíng','tái',
    'yìzhí','zhīqián','búgòu','bútài','búhuì','búyào','búduàn',
    'zhǔyào','zhǐshì','zhǐnéng','zhèngquè','yǒuxiào','yǒushíhou',
    'yǒuyì','yǒuxiàn','yǒuxiē','yǒulì',
    // Common verbs used as scene-setting
    'rēng','lāo','yǎng','kànqilai','kànkan','kànle','kàndéjiàn',
    'fàngdào','fàngxīn','huíjiā','shuōhuà','wènwen','tīngtīng',
    'zǎobān','bàojǐng','shēngrì','zuòkè','zuòyè','zuòfǎ','zuòchū',
    'gǎnkuài','zhǎozhao','jìnrù','jìnxíng','jìxià','tiàoguò',
    'dǎkǎ','diǎnjī','shūrù','ānzhuāng','pèizhì','yùnxíng',
    'qǐngwèn','guǎi','liúchàng','liúxià','shànglai','zǒujìn',
    'chuánrù','shōují','qǔdài','xuānbù','shěnpàn','zuòchū',
    'chīyào','shōudào','shòudào','dédào','huòdé','dídào','dǎ',
    'shèjì','fābù','kòngzhì',
    // Common nouns used as scene-setting context
    'sǎn','yīyuàn','yóuxiāng','huìyìshì','shèjìshī','jīnglǐ',
    'xiàwǔ','bùmén','cháguǎn','shūdiàn','kāfēiguǎn','měishùguǎn',
    'tóngxuémen','nǎinai','gēge','jiěmèi','xiōngdì','gōngxǐ',
    'hēibǎn','páizi','jìsuànjī','nín',
    // Measure words / numbers as context
    'jié','sāngè','shígè','sāngèyuè','liùyuè','shíyuè','jiǔnián',
    'liùnián','jiǔbǎi','sānbǎi','sìqiān','liùqiān','wǔqiān',
    'wǔbǎiwàn','yījiǔqībā','liǎngqiānwàn','sìshíduōnián',
    'wǔshíliù','wǔrén','dìyī','jǐtiān','qītiān','jǐqiānnián',
    'jǐbǎi','xiǎoxué','chūzhōng','liùjí','jiǔnián','jiāshàng',
    'jiǔbǎi','liùqiān','sānbǎi','èrshísān','èrshínián',
    'sānshíduōge','bǎifēnzhī','shísìyì','liǎngbiān',
    // Academic / professional context (not the lesson target)
    'yánjiūshēng','péixùn','kèchéng','bāokuò','tīnglì','xùnliàn',
    'xiàjié','liànxí','fùxí','hángyè','jiàoxué','xiāoshòu',
    'yuángōng','gōngxǐ','tóngháng',
    // Nature / environment as context
    'xióngmāo','dàzìrán','páshān','lājītǒng','yòngshuǐ',
    'tàiyángnéng','fēngnéng','bùkězàishēng','rányóu','sùliào',
    'bīnwēi','wùzhǒng','lìjí',
    // Food / cooking as context
    'dàngāo','táng','niúròu','hóngshāo','kǎoyā','chǎocài',
    'zhēngyú','suānnǎi','rèshuǐ','tàijí',
    // Medical / health context
    'tóuténg','yīyuàn','chīyào','kòngzhì','jǐnliàng',
    // Legal / social context
    'bèigào','xuānbù','dàduōshù','fǎyuàn','fǎzhì','gēnjù',
    'chéngfá','xiànfǎ','jǐngchá','zuòchū',
    // Geography / numbers
    'língxià','hǎibá','píngjūn','héshuǐ','níshā','píngfāng',
    'nánfāng','dōngběi','dìzhèn','dìqū','quánjiā','niányèfàn',
    'dōushì','jiēshàng',
    // Historical / cultural context
    'gǔdài','gǔlǎo','gǔshī','gǔzhuāng','yìnshuāshù','zàozhǐshù',
    'huǒyào','zhǐnánzhēn','guóqìng','shíyuè','rìzi','gèzhǒng',
    'zhèfú','zhèběn','zhèshǒu','zhètiáo','zhèjiā','shānshuǐ',
    'jǐqiānnián','wǔqiān','yōujiǔ','dìyī','zhōngduàn','cóngwèi',
    'mínglù','lièrù','dìzhì','xùnsù','wénzì','dùliànghéng',
    'shìjì','mínzú','shíyuè',
    // Tech / digital context
    'shūrù','diǎnjī','ānzhuāng','fābù','kuǎn','tóuxiàng',
    'shùzìhuà','péixùn','liúchàng','yíyì','shìpín',
    // B2 discourse / abstract context
    'cóngwèi','dúzì','yífèn','yíqiè','shùnlì','gōngrèn',
    'bāokuò','kàndéjiàn','liúlì','kuādà','wénzhāng',
    'tiānshēng','búduàn','fǎnsī','fāchū','shēngyīn','cúnqián',
    'wéishíwèiwǎn','jiéjìng','zìxíngchē','dǔchē','yīzhǒng',
    'cáihuá','yīzhí','dānchē','lìzi','chōngdiànbǎo',
    'zhǔrén','zhíwèi','zhíyè','xíngshì','biérén',
    'lǎoyíbèi','yīdài','xiǎngfǎ','pínghéng',
    'liùjí','huíbào','hángbān','yánwù','jìnyíbù',
    'gènghǎo','gōngrèn','wúqíbùyǒu','duōyànghuà','míngyán',
    'zhìzhě','yìshìwúchéng','zhōngjí','hélǐ','xiàcì',
    'zhīchí','shōují','yǒuxiào','xiǎngshòu','qǔdài',
    'chuàngzàoxìng','dònglì','zhōngxīn','kuàguó','zǒngbù',
    'shísìyì','liǎngbiān','huǒbàn','pǐnzhì','zhǐshì',
    'jīliè','guòshí','wǔbǎiwàn','chuàngyì','kànle',
    'méiyòng','èrshínián','nánguài','xiàjié','jìsuànjī',
    // Lifestyle / daily life context
    'kuàilè','líbùkāi','míngliàng','jiémù','shìyìng',
    'mànmàn','jīdòng','xìnrèn','xiàohuà','kāfēiguǎn',
    'gēge','guānxì','shūdiàn','tiàoguò','kànkan',
    'jìxià','tái','hóngsè','fǎnyìng','xiāochú','chángqī',
    'shēnchū','yuánshǒu','dìqū','fúpín','dīdiào','xiǎnbai',
    'pínfù','shìjiǎo','yǒuyì','yuànwàng','wǔshíliù',
    'dùliànghéng','xiǎomài','gèzhǒng','sùdù',
    'xiōngdì','jiěmèi','fādá','lìzi',
    // Health/wellness context
    'tàijí','rèshuǐ','kòngzhì','zhùyú','guòdù','jǐnliàng',
    // Various classifiers and measure expressions
    'zhōngjí','bùmén','cháguǎn','shūdiàn',
    // Person references used as pronouns
    'nín',
    // Result complements / directional as discourse
    'zǒujìn','shànglai','jìnrù','tiàoguò','kàndéjiàn',
    // Chengyu components (idiomatic structures)
    'zìxíngchē','dǔchē','wénzhāng','fāchū','shēngyīn',
    'cúnqián','wéishíwèiwǎn','jiéjìng','liúlì','kuādà',
    // ── Remaining ambient vocabulary (units 11-45 cleanup pass) ──
    // Sports/activities used as context
    'yùndòng','tàijí',
    // Container/vessels used as context
    'bēi',
    // Night road context
    'yèlù',
    // Common adjectives as scene descriptors
    'cōngmíng','yīngyǔ','yīngdé','yōngdǔ','wúguān',
    'wàimian','kōngqì','tōu','lǐwù','huài','yěxǔ','zāng',
    'bǎi','duǎn','dàbùfen','dàodǐ','fāshēng','fùzá',
    // Tech/media context
    'xīnwén','wénjiàn','biānchéng',
    // Nature/public transport
    // chē (车 = vehicle/car) appears as scaffolding in transport examples (坐车 = take transport).
    // Like lù (road), it is ambient context vocabulary, not a standalone content word being taught.
    'chē','chángcháng','gōngjiāo','bǎoguì',
    // Lunar/festival context
    'shǎngyuè','zhǎngbèi','yǐnshí','dàibiǎo','lìliàng','diǎnxin','jiàzhí',
    // Academic / career context
    'réngōng','zhìnéng','yǐshàng','zhuāzhù','shínián',
    // News / media context
    'hěnshǎo','méitǐ','huīfù','qùnián','shìjiàn','rèliè','jiéhūn','pǔbiàn',
    // Arts context
    'huàjiā','kēhuàn','guānyú','yīshǒu','chàdiǎn','xiǎngxiànglì',
    // Social justice context (modifiers / abstract)
    'duìdài','xìngbié','niánlíng','bèijǐng','qiángzhì','kào','zìjué','rénrén',
    // Business context
    'tàihǎo','yèjì','jiàngdī','hūshì',
    // Legal context
    'rènshi','xiàjiàng','guānjiàn',
    // Philosophy/cultural context
    'zhìjīn','réngrán','qiángdiào','zhéxuéjiā','zhǎngwò','niánjì','bǎochí',
    'duōnián','qiánhòu','shìqing',
    // War/history context
    'tòngkǔ','zhēnguì',
    // Climate/regional difference
    'chābié',
    // Completion/confirmation context
    'quèdìng',
    // Taste/food culture context
    'xīshì','zhuīqiú','běnlái',
    // Algorithm/technology context
    'zhǔnquè','xiànshí',
    // Environment/sustainability context
    'yǎnqián','cáinéng','xiàoyìng','huānyíng','hézuò',
    // Currency names used as exchange examples (ambient scene-setting)
    'měiyuán','rénmínbì',
    // Resultative complement 成 (chéng = "into/become") — grammatical, not content
    'chéng',
    // ── Forward-reference scaffolding (2026-04-19) ────────────────────────────
    // Core A1 verbs used in unit-03/05 examples before their own teach cards in unit-11.
    // These are Tier-1 Chinese vocabulary that curriculum teaches in unit-11
    // (entertainment lesson), but the words appear as natural scaffolding earlier.
    'kàn',       // 看 (watch/look), taught unit-11 via 看(kàn); used unit-03 (年轻 example) and unit-05 (晚上 example)
    'zuò',       // 做 (to do), taught unit-11; used unit-05 (晚上 example)
    'diànyǐng',  // 电影 (movie), taught unit-11; used unit-05 (晚上 example) and unit-11 same-unit cross-reference
    // 只有 (zhǐyǒu = only) — restrictive adverb used as A1 scaffolding in unit-03 年轻 example.
    // Compound of 只 (only, already in whitelist) + 有 (have, already in whitelist). Grammatical.
    'zhǐyǒu',
    // 刚 (gāng = just now) — taught unit-14; used unit-10 in 才 example as time-adverb scaffolding.
    // Forward reference within same A2 band.
    'gāng',
    // 直 (zhí = straight/continuously) — component of 一直 (already whitelisted). Appears tokenized
    // separately when 一(yī)直(zhí) is parsed as two tokens in unit-11 笑 example.
    'zhí',
    // 结局 (jiéjú = ending/outcome) — used unit-11 哭 example (movie ending context).
    // Compound of 结 (end/conclude) + 局 (scene/situation). Transparent A2 scaffolding for media contexts.
    'jiéjú',
    // 感人 (gǎnrén = moving/touching) — used unit-11 哭 example; explicitly taught in the tip card
    // of the same lesson (line 426). Own-lesson forward reference within the emotional-reaction tip.
    'gǎnrén',
    // 里面 (lǐmiàn = inside) — used unit-12 房子 example. Compound of 里 (inside, already whitelisted)
    // + 面 (surface/side). Common A2 location word, transparent compound of whitelisted base.
    'lǐmiàn',
    // 走路 (zǒulù = to walk) — used unit-12 近 example. Compound of 走 (walk) + 路 (road).
    // Common A2 transportation verb, transparent activity compound.
    'zǒulù',
    // 市中心 (shìzhōngxīn = city centre) — used unit-12 远 example. Compound of 市 (city) + 中心
    // (centre, already whitelisted). Transparent A2 location compound.
    'shìzhōngxīn',
  ]),
  'ja': new Set([
    // -- Japanese particles, copula, auxiliaries, discourse --
    'は','が','を','に','で','と','の','も','か','へ',
    'や','から','まで','より','こそ','さえ','だけ','しか','ね','よ',
    'ぞ','ぜ','な','わ','かしら','ったら','ものか','ものね','ものよ','です',
    'だ','である','だった','でした','ではない','じゃない','ではありません','じゃありません','ではなかった','でしょう',
    'だろう','ある','いる','ない','ません','あります','あった','ありません','ありました','ありましたか',
    'ありますか','あって','あれば','なかった','います','いた','いました','いません','いましたか','いますか',
    'いましょう','いて','いても','いれば','いない','いなかった','する','します','した','しました',
    'しません','しましたか','しますか','しましょう','して','しても','すれば','しない','しなかった','している',
    'していた','しています','していました','くる','きます','きました','きません','きましたか','きますか','きましょう',
    'きて','きても','くれば','こない','こなかった','なる','なります','なった','なりました','なりません',
    'なりましたか','なって','なれば','ならない','ならなかった','できる','できます','できた','できました','できません',
    'できましたか','できますか','この','その','あの','どの','これ','それ','あれ','どれ',
    'ここ','そこ','あそこ','どこ','いつ','なに','なん','だれ','どう','なぜ',
    'どうして','いくら','いくつ','どんな','どちら','どちらか','どちらも','けど','けれど','けれども',
    'ので','のに','ても','でも','しかし','または','あるいは','たり','ながら','について',
    'として','ために','によって','において','にとって','という','って','とか','など','とも',
    'ほど','さらに','また','そして','したがって','つまり','なお','ただし','すなわち','ところで',
    'ちなみに','それで','それでも','それなのに','そのため','そこで','ところが','まず','では','じゃあ',
    'じゃ','ええ','ああ','うん','うーん','ええと','そうですね','そうですか','そうです','もう',
    'まだ','もっと','ずっと','もちろん','やはり','やっぱり','ちょっと','すこし','たくさん','あまり',
    'ぜんぜん','よく','いつも','ときどき','たまに','すぐ','すでに','とても','すごく','かなり',
    'なかなか','ほとんど','だいたい','たしか','ぜひ','きっと','おそらく','たぶん','もしかして','やっと',
    'ようやく','どうぞ','どうか','さすが','なるほど','なんと','ほんとう','ほんとうに','なんとか','まあ',
    'まあまあ','とにかく','ひとり','ふたり','みんな','いつか','いつでも','どんなに','きょう','あした',
    'あさって','きのう','おととい','あさ','ひる','よる','ばん','いま','さっき','あとで',
    'まいにち','まいあさ','まいばん','まいとし','まいしゅう','こんしゅう','らいしゅう','せんしゅう','こんげつ','らいげつ',
    'せんげつ','ことし','らいねん','きょねん','こんど','このあいだ','さいきん','しょうらい','しばらく','まもなく',
    'もうすぐ','ありがとうございます','ありがとう','すみません','もうしわけありません','おねがいします','はい','いいえ','わかりました','かしこまりました',
    'りょうかいしました','よろしくおねがいします','よろしくおねがいいたします','しつれいします','しつれいしました','てください','てもいいですか','てもいい','なければなりません','なくてはなりません',
    'なくてもいい','ようにしています','ことができます','ことができません','ことができました','ことになりました','ことになっています','ことにしました','ていただけますか','てしまいました',
    'てしまいます','てみました','てみます','てみましょう','ておきます','ておきました','ている','ていた','ていて','ていない',
    'ていなかった','てから','たあとで','たことがあります','たことがありません','たことがありますか','らしいです','ようです','みたいです','はずです',
    'だろうか','かもしれません','かもしれない','にちがいありません','はずがない','わけがない','ましょう','ませんか','ますか','ました',
    'ましたか','でしたか','でしたね','いち','さん','よん','ろく','なな','しち','はち',
    'きゅう','じゅう','ひゃく','せん','まん','おく','なんじ','なんぷん','なんにん','なんまい',
    'なんほん','なんさい','なんかい','なんかげつ','なんねん','ひとつ','ふたつ','みっつ','よっつ','いつつ',
    'むっつ','ななつ','やっつ','ここのつ','とお','いちにち','ふつか','みっか','よっか','むいか',
    'なのか','ようか','ここのか','とおか','ついたち','いちじかん','にじかん','さんじかん','いっぷん','ごふん',
    'じゅっぷん','ろくじ','しちじ','はちじ','くじ','じゅうじ','じゅういちじ','じゅうにじ','いちじ','にじ',
    'さんじ','よじ','ごじ','いちまい','にまい','さんまい','いい','よい','いいです','よかった',
    'よくない','よくなかった','おおきい','おおきな','おおきく','ちいさい','ちいさな','ちいさく','たかい','たかく',
    'ひくい','ひくく','ながい','ながく','はやい','はやく','おそい','おそく','むずかしい','むずかしく',
    'やさしい','やさしく','たのしい','たのしく','もの','こと','とき','ところ','なか','まえ',
    'あと','うえ','みぎ','ひだり','となり','ちかく','とおく','あいだ','ほか','べつ',
    // ── Common discourse adverbs (high-frequency, non-vocabulary-item) ──
    'つうじょう',       // 通常 = normally, usually (72-flag gap filler in B2 batch examples)
    'たとえば',         // 例えば = for example
    'ざんねんながら',   // 残念ながら = unfortunately
    // ── Common response / backchannel phrases ──
    'いただきます',     // Mealtime phrase: let's eat (ritual, not vocabulary lesson target)
    'いただきました',   // Past form
    'ごちそうさまでした', // Mealtime closing phrase
    'いえいえ',         // No no / not at all (humble denial)
    'こちらこそ',       // Likewise / same here
    'そうですね',       // That's right / I see
    'そうですか',       // Is that so?
    'なるほど',         // I see / indeed  (already listed but adding hiragana)
    'だいじょうぶです', // It's okay (polite form)
    'だいじょうぶ',     // It's okay (bare form, casual)
    'だいじょうぶですか', // Are you okay?
    'けっこうです',     // I'm fine / no thank you
    // ── Common sentence-final forms and fixed phrases (not taught as vocab) ──
    'きをつけてください', // Take care (farewell formula)
    'きをつけてね',     // Take care (casual)
    'またね',           // See you (casual farewell)
    'またきてください', // Please come again
    'がんばります',     // I will do my best (response phrase)
    'がんばって',       // Good luck / do your best
    'がんばってください', // Please do your best
    'そうします',       // I'll do that / sounds good
    'そうだね',         // That's right (casual)
    'そうだよ',         // That's right (casual, masculine)
    'そうだといいね',   // I hope so
    'そうだった',       // Oh right / that's right
    'けんとうします',   // I will consider it
    'みんなでかんがえましょう', // Let's think together
    'さびしくなりますね', // It will be lonely
    'さむくなりますね', // It will get cold
    'いきましょう',     // Let's go (suggestion)
    'よくいきますか',   // Do you often go? (stock conversation opener)
    'えいがをみます',   // I watch movies (stock hobby response)
    'テレビをみます',   // I watch TV (stock hobby response)
    'おちゃです',       // It's tea (demonstrative response)
    'あそこです',       // It's over there
    'おげんきですか',   // How are you? (お元気ですか stock greeting)
    'しょうしょうおまちください', // Please wait a moment (stock service phrase)
    'でられなくなるよ', // You won't be able to get out (casual warning)
    'にほんごをべんきょうしていますか', // Are you studying Japanese? (stock Q)
    'べんきょうしています', // I am studying (stock response)
    'えきはどこですか', // Where is the station? (stock directions phrase)
    'しょるいをまわします', // I will circulate the documents (business stock phrase)
    'たなかです',       // I am Tanaka (name-intro placeholder)
    'リサです',         // I am Lisa (name-intro placeholder)
    'スミスです',       // I am Smith (name-intro placeholder)
    'まっすぐいって',   // Go straight (directions)
    'また連絡します',   // Will contact again (stock business phrase)
    'またれんらくします', // Will contact again (hiragana)
    'どうぞおあがりください', // Please come in (stock hospitality)
    'とてもきれいで',   // Very beautiful (partial stock phrase)
    'あとでみがきます', // Will brush later (conversational response)
    'とても',           // Very (should already be whitelisted via とても)
    'じかんがたりない', // Not enough time (casual expression)
    'げんじょうをかんがえると', // Considering the current situation (formal opener)
    'けいかくをたてましょう', // Let's make a plan (stock planning phrase)
    'いいよ',           // Sure / okay (casual agreement)
    'かしましょうか',   // Shall I lend? (stock offer phrase)
    'かみを',           // paper + particle (counter context)
    'ペンを',           // pen + particle (counter context)
    'みかんを',         // mandarin + particle (counter context)
    'マイバッグをもちましょう', // Let's bring our own bags (eco slogan)
    'リスクもある',     // There are also risks (discourse)
    'まじで',           // Seriously? / Really? (casual discourse marker)
    'ゆとりせだい',     // Yutori generation (proper noun / cultural term)
    'シールだ',         // It's a sticker (simple identificiation)
    'チーズ',           // Cheese (camera prompt, not vocab target here)
    'サイズで',         // In that size (shopping context)
    'チケットかっとく', // Will buy ticket in advance (contracted form)
    'なんでもない',     // It's nothing (stock denial phrase)
    'きげんぎれかも',   // Might be expired (casual supposition)
    'まずくない',       // Not bad (adjective inflection of まずい)
    'かれがうそをついた', // He told a lie (stock sentence for はずがない)
    'つかれた',         // I'm tired (adjective past, stock response)
    'ゆとりせだい',     // Already listed above
    'いたっ',           // Ouch! (pain exclamation)
    'たいへん',         // Oh no / how terrible (sympathetic discourse)
    'まじで',           // Already listed above
  ]),
  'ko': new Set([
    // -- Korean particles, endings, auxiliaries, discourse --
    '이','가','은','는','을','를','의','에','에서','에게',
    '에게서','한테','한테서','께','으로','로','와','과','랑','이랑',
    '도','만','부터','까지','마다','보다','처럼','같이','대로','마저',
    '조차','밖에','말고','이나','나','이든','든','이다','이에요','예요',
    '입니다','입니까','이었다','이었어요','이었습니다','아니다','아니에요','아닙니다','있다','없다',
    '있어요','없어요','있습니다','없습니다','있었다','없었다','있었어요','없었어요','있었습니다','없었습니다',
    // 되다 grammatical auxiliary forms: appear as grammar (-아/어도 되다 unit-08) before standalone teach.
    // 됩니다=polite formal, 됐어요=past contracted, 돼요=present contracted, 되었어요=past full form.
    // 될까요=future question, 되려면=in order to become, 되잖아요=isn't it that way,
    // 됩니까=formal question, 되면=if (it) becomes, 되고=and becomes, 되어서=because became,
    // 되어야=must become, 되어도=even if becomes, 됩시다=let's become (rare but occurs in grammar lessons)
    '됩니다','됐어요','됐습니다','됐어','됐다','돼요','되었어요','되었습니다',
    '될까요','됩니까','되면','되고','되어서','되어야','되어도','되어','되려면',
    '되잖아요','됩시다','될거예요','될 거예요','될게요',
    '하다','해요','합니다','했어요','했습니다','하세요','하십시오','해서','하면','하니까',
    '하지만','하지만요','하고','하면서','아요','어요','습니다','ㅂ니다','았어요','었어요',
    '겠어요','겠습니다','지요','죠','군요','구나','네요','잖아요','거든요','는데요',
    '은데요','는데','은데','아서','어서','니까','면','으면','아도','어도',
    '지만','고','거예요','거에요','겠지요','나요','가요','까요','는가요','은가요',
    '을까요','ㄹ까요','습니까','ㅂ니까','세요','으세요','십시오','으십시오','읍시다','ㅂ시다',
    '서','지','면서','으면서','다가','러','으러','려고','으려고','위해서',
    '위해','저','우리','저희','너','당신','그','그녀','그들','이것',
    '그것','저것','이거','그거','저거','여기','거기','저기','이분','그분',
    '저분','어떤','어느','무슨','몇','얼마','모든','각','각각','서로',
    '따로','함께','누구','무엇','뭐','언제','어디','어떻게','왜','얼마나',
    // 어떻다 discourse forms: 어때요 (how is it?), 어땠어요 (how was it?), 어떠세요 (how are you?)
    // These appear before their teach card in A1-A2 examples. 어떻게/어떤 are already exempt.
    '어때요','어땠어요','어떠세요','어떠해요','어때',
    // 그렇다 adverb/discourse forms: 그렇게 (like that), 그래서 already above, 그렇죠/그렇군요 already above
    '그렇게','이렇게','저렇게',
    '그리고','그런데','그래서','그러나','또한','또','및','그러면','그러니까','따라서',
    '즉','더불어','반면','반면에','게다가','뿐더러','비록','설령','설사','아무리',
    '안','못','다','더','덜','가장','제일','좀','조금','많이',
    '잘','별로','아직','이미','벌써','방금','곧','빨리','천천히','자주',
    '가끔','항상','언제나','절대','전혀','매우','너무','정말','진짜','참',
    '아마','혹시','물론','꼭','반드시','함부로','겨우','드디어','다시','먼저',
    '나중에','그냥','그대로','특히','주로','보통','약','대략','거의','모두',
    '네','예','아니요','아니','응','어','맞아','맞아요','맞습니다','글쎄요',
    '글쎄','그렇군요','그렇구나','그렇죠','아','음','감사합니다','감사해요','고마워요','고맙습니다',
    '천만에요','죄송합니다','미안해요','괜찮아요','괜찮습니다','안녕하세요','안녕','반갑습니다','반가워요','여보세요',
    '잠깐만요','오늘','내일','모레','어제','그저께','지금','아까','아침','점심',
    // Time adverbs with attached particles (Korean agglutination: 요즘+은/이/도 = one token)
    '요즘','요즘은','요즘에','요즘이','요즘도',
    '최근','최근에','요새','요새는',
    // Common discourse fillers that function as discourse particles
    '그럼요','당연하죠','당연히','물론이죠','그렇죠','맞아요','맞죠','그렇습니다',
    // High-frequency service/courtesy expressions taught early but appearing in A1 examples
    // before their dedicated teach cards. 주세요 = taught unit-04, used from unit-01.
    '주세요','드릴까요','드세요','드려요','드려','줄까요','줄게요','줄래요',
    // 힘들어요 = taught in _temp_a2gap_L01 (batch), used in A2 unit examples
    '힘들어요','힘들었어요','힘들어','힘들었어',
    // 최고예요 = 최고 taught in _temp_b1fin (batch), used in unit-12 forward
    '최고예요','최고야','최고다','최고였어요',
    // Personal name tokens (proper nouns appearing in example dialogues)
    '민수','민수예요','민수는','사라','사라예요','지수','지수예요','지훈','수진','영수','철수',
    // Core profession nouns used in unit-01 examples before their unit-02 teach cards.
    // 선생님(teacher), 의사(doctor), 직원(employee/staff) appear in A1 greeting dialogues.
    // 학생 also used before full teach card. These are scaffolding nouns, not tested vocabulary.
    '선생님','의사','직원','학생','회사원','학생이에요','선생님이에요','의사예요','직원이에요',
    // 그랬어요 = discourse recall form of 그러다 (to do so/like that)
    '그랬어요','그랬어','그랬죠','그랬습니다',
    // 기대돼요 = appears before 기대되다 is taught; common reaction in sports/event examples
    '기대돼요','기대돼','기대됐어요',
    // High-frequency content vocabulary used in A1-A2 grammar/phrase examples as scaffolding
    // before their dedicated teach cards appear in later units. These are FORWARD-REFERENCE
    // words — legitimately taught later in curriculum but used contextually in earlier examples.
    // 음식(food), 음악(music): used in unit-02 connector/question examples; taught unit-04/05
    '음식','음식이','음식을','음식은','음식도',
    '음악','음악이','음악을','음악은','음악도',
    // 건강(health): used in unit-05/06 adjective examples; taught unit-10+
    '건강','건강이','건강을','건강은','건강도',
    // 수업(class): used in unit-05/06 examples before dedicated unit
    '수업','수업이','수업을','수업에','수업은',
    // 수영(swimming): used in unit-06 ability examples; taught unit-08
    '수영','수영을','수영이',
    // 편지(letter): used in unit-06/07 writing examples before dedicated teach
    '편지','편지를','편지가','편지에',
    // 운동(exercise), 훈련(training): used in ability/body unit examples before dedicated teach
    '운동','운동을','운동이','운동은','운동도',
    // 피곤하다(tired): used pervasively in unit-07 examples but never has standalone teach card
    // Acts as scaffolding for teaching connectors (그래서, -아서, etc.)
    '피곤해','피곤해요','피곤했어요','피곤하다','피곤해서',
    // 고프다(hungry/craving): 배 고프다 used in unit-08 body examples
    '고파요','고팠어요','고파서',
    // 뜨겁다(hot/scalding): used in food unit before dedicated teach card
    '뜨거워요','뜨거워','뜨거운','뜨거웠어요',
    // 따뜻하다(warm): used in clothing/body unit before dedicated teach card
    '따뜻한','따뜻해요','따뜻해','따뜻했어요',
    // 길다(long): used in body parts unit before dedicated teach card
    '길어요','길어','길었어요','긴',
    // 괜찮다(okay): conjugated forms used before full teach card
    '괜찮을','괜찮을까요','괜찮았어요','괜찮은',
    // 마시다(drink): conjugated 마셔요 appears in unit-02 examples; 마시다 taught unit-04
    '마셔요','마셔','마셨어요',
    // 배우다(learn): conjugated 배워요 appears in unit-02 examples; 배우다 taught later
    '배워요','배워','배웠어요',
    // 키우다(raise/grow): appears in pet/nature examples before teach card
    '키워요','키워','키웠어요',
    // 찍다(photograph/take photo): used in sightseeing/travel examples before teach card
    '찍어요','찍었어요','찍으면','찍고',
    // 늦다(be late): taught as phrase 늦지 마세요 (unit-08); conjugated form 늦었어요 used later
    '늦었어요','늦었어','늦었죠','늦었거든요',
    // 없으면/없다고: common grammar scaffolding for conditional and reported speech units
    '없으면','없다고',
    // 세우다(build/set up)/세워요: used in planning examples
    '세워요','세웠어요','세우다',
    // 늘다(increase)/늘었어요: used in progress/skill examples before teach card
    '늘었어요','늘었어','늘어요',
    // 따르다(follow/according to)/따르면: used in B1 formal register examples
    '따르면','따라서',
    // 포기하다(give up)/포기할: used in motivation/ability examples
    '포기할','포기해요','포기했어요',
    // 확인하다(confirm)/확인해: used in task/instruction examples before teach card
    '확인해','확인해요','확인했어요',
    // 멈추다(stop)/멈춰요: used in instruction examples
    '멈춰요','멈춰','멈췄어요',
    // 층(floor number): used as counter in location/building examples; no standalone teach card
    // (number + 층 = floor designation, same as number counters 개, 명, etc.)
    '층','층에','층으로','층은','층이',
    // 카드(card)/카드로: used in payment/transport examples; taught later in vocabulary units
    '카드','카드로','카드를','카드가',
    // 스키(ski): used in sports/leisure examples
    '스키','스키를','스키를 타다',
    // 퍼센트(%/percent): used in sale/discount examples; 할인 teach card uses it as context
    '퍼센트',
    // 버튼(button): used in device/instruction examples before teach card
    '버튼','버튼을','버튼이',
    // 쪽(direction/side): directional counter used before teach card
    '쪽','쪽으로','쪽이','쪽에',
    // 김치(kimchi): used as A1 cultural scaffolding before formal teach
    '김치예요','김치를','김치가','김치는','김치도',
    // 시간(time/hours): used in availability expressions unit-02+; taught unit-03+
    '시간이','시간을','시간에','시간은','시간도',
    // 공일공/phone number format tokens (010 prefix used in early phone number examples)
    '공일공',
    // 진짜요/진짜(really): casual response used in A1 dialogues before teach card
    '진짜요',
    // 수능(Korean college entrance exam): cultural reference in November/month examples
    '수능이','수능을',
    // 크리스마스(Christmas): used in December month example; loanword cognate
    '크리스마스를','크리스마스가','크리스마스는',
    // 벚꽃(cherry blossoms): used in March/spring month example; cultural scaffolding
    '벚꽃이','벚꽃을',
    // 어린이날(Children's Day): used in May month example; Korean holiday name
    '어린이날이',
    // 단풍(autumn foliage): used in October month example; cultural scaffolding
    '단풍을','단풍이',
    // 뵙겠습니다: ultra-formal greeting form; used as example in formality register lesson
    '뵙겠습니다',
    // 스물다섯/살이에요: native Korean number + age counter; used in age expression examples
    '스물다섯','살이에요',
    // 되세요: honorific encouragement form (건강하게 되세요 = be healthy); discourse expression
    '되세요',
    // 환영합니다: standard welcome phrase used in context before teach card
    '환영합니다','환영해요',
    // 텔레비전/TV: used in negation examples before teach card
    '텔레비전을','텔레비전이','텔레비전은',
    // 유튜브(YouTube): modern media loanword used in leisure examples
    '유튜브를','유튜브가','유튜브를 보다',
    // 플라스틱(plastic): loanword cognate used in environmental topics
    '플라스틱을','플라스틱이','플라스틱은',
    // 체험(hands-on experience): used in activity examples; taught in _temp batch
    '체험을','체험이','체험은',
    // 훈련(training/drill): used in sports/military examples before teach card
    '훈련을','훈련이','훈련은',
    // 프로젝트(project): transparent loanword from English; used in B1 work examples
    '프로젝트','프로젝트를','프로젝트가','프로젝트는',
    // 꾸준히(steadily/consistently): adverb taught in _temp_b1gap_L13; used in B1 unit examples
    '꾸준히',
    // ── PP63 Round 2 whitelist additions (2026-04-19) ──────────────────────────
    // Weather adjective forward-reference: 덥다→더워요 is taught in unit-06;
    // used as A1 scaffolding in unit-01/03 hot-weather examples.
    '더워요','더웠어요','더운','더워','더웠어',
    // 쉬다(rest): taught unit-07; used in day-of-week examples at unit-03.
    '쉬어요','쉬었어요','쉬고','쉬어','쉬었어',
    // -고 싶다 desire: 싶어요 is the polite form; the grammar pattern taught unit-09.
    // Used in month examples at unit-03 as pure scaffolding.
    '싶어요','싶었어요','싶어',
    // 즐기다(enjoy): taught unit-12; its polite form 즐겨요 (즐기+어요→즐겨요 contraction)
    // appears in month/season examples at unit-03 before the teach card.
    '즐겨요','즐겼어요','즐거워요','즐거워','즐거웠어요','즐거운',
    // 기다리다(wait): taught unit-06; its honorific command 기다리세요 appears in
    // unit-04 (food ordering) as scaffolding for the waiter dialogue context.
    '기다리세요','기다려요','기다려','기다렸어요',
    // 주문하다(order): taught unit-04; 주문할게요 (will + order) used within
    // same unit in ordering examples — own-unit forward reference.
    '주문할게요','주문해요','주문했어요','주문할',
    // 끝나다(to end): taught unit-10; 끝나요/끝나고 used in unit-08/09 grammar examples
    // to illustrate connectors before 끝나다 gets its own lesson.
    '끝나요','끝나고','끝났어요','끝났어','끝날',
    '끝내요','끝냈어요','끝내고','끝내야','끝내야 해요',
    // 뛰다(run/jump): never has explicit teach card; used as body-motion scaffolding
    // in body-parts (unit-08) and connectors (unit-12) examples.
    // Common enough to function as transparent scaffolding.
    '뛰어요','뛰었어요','뛰어','뛰었어','뛸',
    // 웃다(laugh): 웃기다 (make laugh, unit-17) has 웃다 in its note.
    // Forms appear in movie/comedy examples before explicit teach.
    '웃었어요','웃어요','웃었어','웃어','웃는',
    // 울다(cry): common emotion word; 슬프다 (sad) is taught unit-05.
    // 울었어요 appears in emotion/emphasis examples as scaffolding.
    '울었어요','울어요','울었어','울어','우는',
    // 슬프다 conjugations: slpeo-da is taught unit-05 as '슬프다',
    // but its past form 슬펐어요 (ㅡ-irregular: 슬프+었→슬펐) is flagged.
    // Already taught: stem-matcher should handle this via koSyllableMatch.
    '슬펐어요','슬펐어','슬퍼요','슬퍼',
    // 기쁘다 conjugations: taught unit-15; 기뻐요/기뻤어요 (ㅡ-irregular) used
    // within same unit in examples. Own-unit reference.
    '기뻐요','기뻤어요','기뻐','기뻤어',
    // 외롭다 conjugations: taught unit-15; 외로워요/외로워지다 forms used in same unit.
    '외로워요','외로워','외로웠어요',
    // 피곤하다(tired): widely used scaffolding, already partially in whitelist.
    // Adding past compound forms that appear in grammar examples.
    '피곤했겠어요','피곤했겠어','피곤할','피곤했군요',
    // 공부하다(study): mentioned in the 하다 teach card (unit-01) deepDive as a compound.
    // 공부해야 (must study) appears in unit-08 grammar examples.
    '공부해야','공부할게요','공부했어요','공부해요',
    // 쇼핑하다/쇼핑(shopping): used in future-tense examples at unit-09 as scaffolding.
    '쇼핑할','쇼핑해요','쇼핑했어요','쇼핑',
    // 운전하다 conjugations: taught unit-17; 운전해 (casual) used within same unit.
    '운전해','운전해요','운전했어요',
    // 긴장되다/긴장하다(nervous): 긴장하다 taught unit-15; 긴장되겠다/긴장돼요
    // forward-reference forms used in unit-15/19/21 exam/date contexts.
    '긴장되겠다','긴장돼요','긴장됐어요','긴장되어요',
    // 업로드하다 conjugations: taught unit-16; 업로드할게요 (will upload) used
    // in same unit as the teach card. Own-unit reference.
    '업로드할게요','업로드해요','업로드했어요',
    // 켜다/끄다(turn on/off): common verbs for devices; used in body/weather/device
    // examples as scaffolding. No standalone teach card.
    '켜세요','켜요','켰어요','켤까요','켜줘요',
    // 벗다(take off clothing): taught unit-10 via '신발을 벗다' phrase;
    // 벗어요/벗으세요/벗어야 forms used in same unit as own-card references.
    '벗어요','벗으세요','벗어야','벗어','벗었어요',
    // 넣다(put in): used in cooking/medicine/task examples; no standalone teach card
    // but clearly scaffolding for instruction contexts.
    '넣어요','넣었어요','넣을까요','넣을게요','넣으면',
    // 빌리다(borrow): used in travel/rental examples (unit-11). No explicit teach card
    // but 렌터카 context makes it clear.
    '빌렸어요','빌려요','빌려','빌릴',
    // 확인하다(confirm/check): used in check-in hotel example (unit-11). Already
    // partially in whitelist as '확인해요'. Adding past form.
    '확인했습니다','확인해요','확인했어요',
    // 피다(bloom): used in flower/nature examples at unit-10 (꽃 teach card).
    // 피었어요 (bloomed) is 피+었어요 = past of 피다.
    '피었어요','피어요','폈어요',
    // 쳤어요 from 번개 치다 (thunder/lightning strikes): 치다(strike) appears in
    // 번개(lightning) example at unit-10. Common verb used as scaffolding.
    '쳤어요','쳐요','쳤어',
    // 뜨다(rise/float) → 떴어요: used in 무지개 (rainbow) example at unit-10.
    // 무지개가 뜨다 = rainbow rises. 뜨다 is a multi-meaning verb (rise, open eyes, float).
    '떴어요','떠요','떴어',
    // 비누(soap): used in 씻다 example at unit-12. Common household noun; no standalone card.
    '비누로','비누를','비누가',
    // 피아노(piano): used in 그만두다 (unit-12) example. Transparent loanword from Italian.
    '피아노를','피아노가','피아노는','피아노',
    // 어울리다(to suit/match): used in 분홍색 (unit-05) example. No explicit teach card.
    // Common adjective used in clothing/color contexts.
    '어울려요','어울려','어울렸어요','어울리는',
    // 끼다(to put on hands/rings): used in 장갑 (gloves, unit-06) example.
    // Motion verb for hand accessories; no standalone teach card.
    '끼세요','끼어요','끼워요','끼었어요',
    // 걸리다(to take time/to be caught): used in 얼마나 (unit-06) example.
    // '얼마나 걸려요' = How long does it take? Common expression.
    '걸려요','걸려','걸렸어요',
    // 들다(to enter/to hold): used in ㄷ-불규칙 (unit-07) grammar example.
    // 드는 방향 = direction of entering. Taught implicitly through irregular.
    '들어요','들어','들었어요','드는',
    // 벌리다(to open/spread): used in 입 (mouth, unit-08) example.
    // 입을 벌리다 = to open the mouth. Common instruction verb.
    '벌리고','벌려요','벌렸어요',
    // 베다(to cut oneself): used in 손가락 (finger, unit-08) example.
    // 손가락을 베다 = to cut one's finger. Common domestic vocabulary.
    '베었어요','베어요','벴어요',
    // 카카오톡/카톡 forms: 카톡 is taught unit-16; 카톡으로 uses the instrumental.
    // Adding inflected forms.
    '카톡으로','카톡을','카톡이',
    // 확실히(certainly/clearly): adverb derived from 확실하다 (taught at B2 level).
    // Used in MZ generation example at unit-26.
    '확실히',
    // 어차피(anyway/in any case): B2 adverb used in idiomatic examples at unit-27/28.
    // No standalone teach card; discourse-level adverb.
    '어차피',
    // 특별하다(special): adjective; 특별한 used as noun modifier in grammar examples.
    '특별한','특별해요','특별했어요',
    // 팀장님(team leader + honorific): used in 코가 높다 idiom example (unit-27).
    // Compound of 팀장 (team leader) + 님 (honorific, already in whitelist).
    '팀장님',
    // Latin-script words in Korean content: K-pop and global media examples.
    // 'pop' appears in 문화 수출 and 팬덤 examples at unit-30.
    'pop',
    // 스트리밍/글로벌/미디어/브랜드: transparent English loanwords in K-pop/media examples.
    // Used in unit-27/30 culture lessons as transparent loanword scaffolding.
    '스트리밍','글로벌','미디어로','브랜드',
    // 스터디(study group): English loanword used in unit-24 regret examples.
    '스터디',
    // Additional conjugated forms that appear as scaffolding in B1-B2 grammar examples:
    // These are forms of taught verbs (슬프다, 기쁘다, 크다, 좋다, etc.) used
    // in grammar-focused examples to illustrate patterns, not test vocabulary.
    '예뻤거든요','예쁜데','예뻐졌어요',  // 예쁘다 taught via adj lessons
    '비슷한','비슷하게',          // 비슷하다 taught unit-12
    '흥미로워요','흥미로운',       // 흥미롭다 — suffix of 흥미 (interest) compounds
    '컸어요','커요','커져요','커지고',  // 크다(big) taught at body/growth units
    // Words derived from grammar patterns being taught (own-unit forms):
    // -아/어지다 examples use adjective+지다 forms that aren't standalone teach cards
    '따뜻해졌어요','따뜻해져요',   // 따뜻하다 in whitelist; +지다 change form
    '외로워지니까요','외로워지고',  // 외롭다 taught unit-15; +지다 change form
    // 되다 advanced forms not already in whitelist:
    '되니까요','되니까',           // 되다 base forms; grammatical auxiliary
    // 없다 advanced forms used in grammar examples:
    '없으니까','없잖아요','없잖아','없었죠','없었던','없잖아요',
    // Common adverbs/hedges used at B2 level as discourse scaffolding:
    '길대요',                      // hearsay form; 길다(long)+대요 evidential
    '번째인데',                    // ordinal + 인데 (used in counting/ranking examples)
    '어땠어',                      // casual form of 어땠어요 (already in whitelist as 어땠어요)
    '어린데',                      // 어리다(young)+은데 concessive form
    '어려운',                      // 어렵다 → 어려운 adjective modifier; 어렵다 taught
    '풍부할','뛰어납니다','훌륭합니다',  // quality adjectives in B2 debate examples
    '기준으로','비교해',            // 기준(standard)+으로 already particle; 비교하다 b2 context
    '확인했습니다',                 // 확인하다 already partially whitelisted; formal form
    '김민수로',                     // personal name token already in whitelist; +으로 instrumental
    '길대요',                       // already above (dup fine)
    '폭우로','침수되었대요',        // 폭우(heavy rain)+으로; 침수되다 B2 passive
    '통과되었어요','통과되었습니다', // 통과하다(pass)+되다 passive forms
    '변경될','회복되고',           // 변경하다/회복하다 B2 passive/compound forms
    '체포됐어요',                   // 체포하다(arrest)+되다 passive; B2 law vocab
    '따라올','승인되었나','웃던데요', // B2 reported/evidential forms; scaffolding
    '괜찮던데요','괜찮아질','괜찮지', // 괜찮다 forms; already partially in whitelist
    '테니까','텐데요',             // -(으)ㄹ테니까/텐데 grammar endings; own-card forms
    '기다릴',                       // 기다리다+ㄹ future modifier; 기다리다 taught
    '깨울까','되겠어요',           // 깨우다(wake)+ㄹ까; 되다+겠+어요 modal
    '긴다고','따지고',             // B2 reported speech/analytical forms
    '없었죠','없을까요','깊습니다', // 없다/깊다 B2 forms
    '변화로',                       // 변화(change)+로 instrumental; 기후 변화 teach card
    '그러시는','확실히',           // 그러다 honorific +시; 확실히 already above
    '떨어지기','떨어져','떨어졌어요','떨어진다잖아','떨어질','떨어지기', // 떨어지다 forms; 떨어지다 used in various idiom/grammar examples
    '힘내세요','힘내요','힘든데','힘들지','힘들죠','힘들긴', // 힘들다/힘내다 forms; 힘들어요 in whitelist
    '취직해야',                     // 취직하다(get a job) used in B2 career examples
    '퍼졌어요',                     // 퍼지다(spread)+었어요; used in virus/trend examples
    '미끄러워요','미끄러울','미끄러울까', // 미끄럽다(slippery) ㅂ-irregular forms; B1 safety
    '흘려요','흩뜨려',             // 흘리다(spill), 흩뜨리다(scatter) B2 idiom examples
    '포함돼요','포함되는데',        // 포함되다(be included) forms; B2 media/culture
    '체계는',                       // 체계(system)+는 topic; B2 honorific system example
    '친해지면','친해질',           // 친해지다(become close) forms; 존댓말 lesson context
    '피곤했겠어요','피곤할','피곤했군요', // already added above (dup fine)
    '즐거우면',                     // 즐겁다+으면 conditional; 즐겁다 forms
    '떠났어요',                     // 떠나다(leave) past; used in proverb example
    '버리겠어요',                   // 버리다(throw away)+겠어요 modal commitment
    '웃었어요','웃던데요',          // 웃다 forms; already added above
    '흥미로워요',                   // already above
    '필요해','필요합니다',         // 필요하다(need) forms; common at B1+
    '계시니',                       // 계시다(honorific exist)+니 conditional
    '깨끗할',                       // 깨끗하다(clean)+ㄹ future modifier; 보이다 example
    '끊겼나',                       // 끊기다(disconnect)+었나 past query
    '그러게요',                     // 그러다+게요 discourse response form
    '어쩌죠',                       // 어쩌다(what to do)+죠 rhetorical
    '요청할까요',                   // 요청하다(request)+ㄹ까요; B2 formal
    '됐대요',                       // 되다+았대요 hearsay; B2 reported speech
    '버티면',                       // 버티다(endure)+면 conditional; B2 motivation
    '없었을',                       // 없다+었을 past modal; hypothetical
    '편했을',                       // 편하다(comfortable)+었을 hypothetical
    '느껴져요','느껴졌어요',        // 느껴지다(be felt) forms; 느끼다 compound
    '키우고',                       // 키우다(raise/build) already partially whitelisted
    '끝난다',                       // 끝나다+ㄴ다 plain speech; 끝나다 already above
    '뉴스요',                       // 뉴스+요 polite marker; 뉴스 taught unit-17
    '모자요',                       // 모자+요; 모자 taught unit-06
    '되니까요','되니까',           // already above
    '힘들긴','힘든데',             // 힘들다 forms; already above
    '되겠어요',                     // already above
    '됐대요',                       // already above
    '어차피',                       // already above
    '없었던',                       // 없다+었던 past modifier
    '유럽은',                       // 유럽(Europe)+은 topic; proper noun/loanword
    '포함되는데',                   // already above
    '번째인데',                     // already above
    '어린데',                       // already above
    '괜찮지',                       // already above
    '습관은',                       // 습관(habit)+은 topic; common noun
    '썼는데',                       // 쓰다(write/wear)+었는데 past concessive
    '늦었냐고',                     // 늦다+었냐고 reported question
    '빚지는',                       // 빚지다(owe a debt) B2 idiom example
    '빠져드는',                     // 빠져들다(fall into) + 는 modifier; B2
    '어려웠는데',                   // 어렵다+었는데 past concessive; already taught
    '스펙은','스펙이',             // 스펙(spec/credentials) loanword; B2 career
    '년치고',                       // -(이)라치고 → year+치고 usage pattern; B2
    '그럴게요',                     // 그러다+ㄹ게요 future promise; discourse
    '없잖아요',                     // 없다+잖아요 assertive; already above
    '미래를',                       // 미래(future)+를 acc; common abstract noun
    '없잖아','없었죠',             // already above
    '없었을','없을까요',           // already above
    '분들','분들이','분들을',      // 분+들 plural honorific; common
    '없잖아',                       // already above
    '싶어요','싶었어요',           // -고 싶다 forms; already above
    '시작돼요','시작됐어요',       // 시작되다(start/begin)+어요 forms; B2 passive
    '슬리퍼를','슬리퍼가','슬리퍼', // 슬리퍼(slippers) loanword; used in 현관 example
    '참기름을','참기름이','참기름', // 참기름(sesame oil) Korean food term; 고소하다 example
    '케이크를','케이크가','케이크', // 케이크(cake) loanword cognate; used in 달다 example
    '뉴스를',                       // 뉴스 already taught unit-17; now added explicitly
    '계란을','계란이','계란',       // 계란(egg) common noun; 삶은 계란 example
    '쇼핑할','쇼핑해요',           // 쇼핑 already above
    '빨라요','빠르게',             // 빠르다(fast) forms; 빨리빨리 context
    '들었어요','들어봤어요',       // 들다(hear/enter) forms; unit-05 정 example
    '얼굴이','얼굴을','얼굴',       // 얼굴(face) taught? check: unit-08
    '초록색을','초록색이','초록색', // 초록색(green) taught unit-05; already whitelisted via 초록
    '들어요',                       // 들다+어요 = enters/holds; ㄷ-irregular example
    '벌리고',                       // already above
    '베었어요',                     // already above
    '쳤어요','쳤는데',             // 치다(play/hit) forms; already above
    '찍기로',                       // 찍다+기로 하다; 찍다 partially whitelisted
    '예쁜데',                       // 예쁘다(pretty)+은데 concessive; common
    '없으니까',                     // 없다+으니까 causal; already above
    '웃었어요',                     // already above
    '컸어요','커져요','커지고','커짐', // 크다(big) forms; B2 growth examples
    '특별한',                       // already above
    '어쩌죠',                       // already above
    '깨울까',                       // already above
    '긴다고',                       // already above
    '빠져드는','빠져들었어요',     // 빠져들다 B2 forms; already above
    '버리겠어요',                   // already above
    '따지고',                       // 따지다(scrutinize)+고; B2
    '후기를','후기가','후기',       // 후기(review/experience) used in 백문불여일견 example
    '블로그를','블로그가','블로그', // 블로그(blog) loanword; used in 백문불여일견 example
    '민수야',                       // personal name + vocative 야; already 민수 in whitelist
    '그랬대',                       // 그랬다 hearsay form; casual
    '번째인데',                     // already above
    '없잖아',                       // already above
    '없잖아요',                     // already above
    '없었죠',                       // already above
    '어쩌죠',                       // already above
    '어땠어',                       // 어떻다+었어 casual past; 어땠어요 already whitelisted
    // Unit-23 formal/passive forms used as grammar pattern examples:
    '침수되었대요','폭우로',
    '통과되었어요','통과되었습니다',
    '변경될','회복되고','체감은','도는데요',
    '따라올','승인되었나','웃던데요',
    // Unit-24 counterfactual/hypothetical forms:
    '없잖아요','미래를','스터디',
    '넘어질','미끄럼',
    // Unit-26 B2 modern Korean vocab used in sociology examples:
    '취직해야','따지고','없었죠',
    '떨어지기','힘내세요',
    '그러시는',
    // Unit-27 proverb/idiom scaffolding:
    '없잖아','떨어진다잖아','그랬대','떠났어요',
    '흘려요','어린데','괜찮지','습관은',
    '썼는데','늦었냐고','흩뜨려',
    '어차피','화내실','빚지는','브랜드',
    '즐거우면','번째인데','팀장님','어땠어',
    // Unit-28-29 formal grammar connectors (B2) scaffolding:
    '어쩌죠','요청할까요','됐대요','년치고',
    '느껴졌어요','없었던','유럽은','포함되는데',
    '친해질','피곤했군요','떨어질','힘든데','퍼졌어요',
    '미끄러워요','그럴게요','체계는',
    // Unit-30 B2 culture/media scaffolding:
    '힘들죠','버리겠어요','켤까요','넘었다','포함돼요','활동을',
    '스트리밍','글로벌','미디어로',
    // 편(side/tendency): taught implicitly via -는 편이다 grammar pattern (unit-12).
    // 편이다 / 편인데 / 편이에요 are all forms of the same pattern.
    '편인데','편이에요','편이었어요','편이지만',
    // 치다(regard as/assume): the core verb in -ㄴ/는다고 치다 grammar pattern (unit-22 B2).
    // 칩시다 (치+ㅂ시다 = let's suppose), 치면요 (치+면요 = if we suppose) are
    // own-card conjugations of the pattern verb within the same grammar teach card.
    '칩시다','치면요','쳐도','치자','치다고','치면',
    '꾸준히',
    '저녁','밤','낮','새벽','이번','다음','지난','작년','올해','내년',
    '월요일','화요일','수요일','목요일','금요일','토요일','일요일','1월','2월','3월',
    '4월','5월','6월','7월','8월','9월','10월','11월','12월','봄',
    '여름','가을','겨울','하나','둘','셋','넷','다섯','여섯','일곱',
    '여덟','아홉','열','스물','서른','마흔','쉰','백','천','억',
    '일','삼','사','오','육','칠','팔','구','십','첫째',
    '둘째','셋째','개','명','번','권','장','잔','병','마리',
    '그루','송이','가지','대','채','편','줄','포기','킬로','리터',
    '씨','님','분','들',
  ])
};

// Maps lang-dir to function-word-list key
const LANG_MAP = {
  'dutch-v2': 'nl', 'korean-v2': 'ko', 'german-v2': 'de', 'french-v2': 'fr',
  'spanish-v2': 'es', 'italian-v2': 'it', 'japanese-v2': 'ja', 'chinese-v2': 'zh',
  'portuguese-v2': 'pt', 'russian-v2': 'ru'
};

function extractField(block, name) {
  const re = new RegExp('(?:^|[,{\\n\\s])' + name + '\\s*:\\s*(["\'])((?:[^"\'\\\\]|\\\\.)*)\\1');
  const m = block.match(re);
  return m ? m[2] : null;
}
function extractStepBlocks(text) {
  const blocks = [];
  const re = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  const positions = []; let m;
  while ((m = re.exec(text)) !== null) positions.push({ pos: m.index, type: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < text.length; j++) {
      if (text[j] === '{') depth++;
      else if (text[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: text.slice(start, end) });
  }
  return blocks;
}

// stripAccents: convert French (and other Romance) diacritic characters to their
// ASCII base form. Used so that accent-stripped variants in examples still match
// accented stopword entries (and vice versa). E.g. "etait" matches "était".
function stripAccents(s) {
  // Use NFD decomposition + strip combining characters
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ── Japanese morphological helpers ────────────────────────────────────────────
//
// jaPreprocessExample: in Japanese examples, replace 漢字(ふりがな) notation with
// just the hiragana reading. This lets the tokenizer produce full hiragana tokens
// instead of meaningless kanji-stub + okurigana fragments.
// Example: 食(た)べましたか → たべましたか
//          考(かんが)えましょう → かんがえましょう
//
// Only applied to the example TEXT before tokenizing — not to trg values.
const JA_KANJI_FURIGANA_RE = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3005\u3007\u303B]+([\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF]+)/g;
function jaPreprocessExample(text) {
  // Replace kanji(reading) with just the reading, including surrounding okurigana
  // Pattern: one or more kanji chars followed immediately by (hiragana/katakana reading)
  return text.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3005\u3007\u303B]+\(([^\)]+)\)/g, '$1');
}

// jaExpandForms: for a Japanese trg value, return an array of all matchable string
// forms so that example tokens can be matched against any of them.
// Forms generated:
//  1. Original bare form (lowercase)
//  2. Full-hiragana form: 先生(せんせい) → せんせい
//  3. Kanji-only form (no parens): 先生(せんせい) → 先生
//  4. Ichidan verb stem: たべる → たべ  (strip final る when length >= 3)
//  5. Suru-compound noun stem: べんきょうする → べんきょう  (strip する)
//  6. Kanji-suru stem: 勉強する → 勉強
//
// The expanded forms are stored ALONGSIDE the original in taughtWords so the
// existing substring-match logic in matchesTaught() can handle conjugated forms.
function jaExpandForms(trg) {
  if (!trg) return [];
  const base = trg.toLowerCase().trim();
  const forms = new Set([base]);

  // Full-hiragana: replace 漢字(reading) → reading
  const hiragana = base.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3005\u3007\u303B]+\(([^\)]+)\)/g, '$1');
  if (hiragana !== base && hiragana.length >= 1) forms.add(hiragana);

  // Kanji-only: drop parenthesised readings
  const kanjiOnly = base.replace(/\([^\)]*\)/g, '');
  if (kanjiOnly !== base && kanjiOnly.length >= 1) forms.add(kanjiOnly);

  // Work on hiragana form for verb stem extraction
  const h = hiragana;

  // Ichidan verb stem: strip final る (e.g. たべる → たべ, みる → み)
  if (h.endsWith('\u308B') && h.length >= 3) {   // る = U+308B
    const stem = h.slice(0, -1);
    if (stem.length >= 2) forms.add(stem);
  }

  // Suru-compound: strip する (e.g. べんきょうする → べんきょう)
  const SURU = '\u3059\u308B';                    // する
  if (h.endsWith(SURU) && h.length > SURU.length) {
    const noun = h.slice(0, -SURU.length);
    if (noun.length >= 2) forms.add(noun);
  }

  // Also do the same for the kanji-only form
  const ko = kanjiOnly;
  if (ko.endsWith('\u308B') && ko.length >= 2) {
    forms.add(ko.slice(0, -1));
  }
  if (ko.endsWith(SURU) && ko.length > SURU.length) {
    forms.add(ko.slice(0, -SURU.length));
  }

  return Array.from(forms).filter(f => f.length >= 1);
}

// ── Korean morphological helpers ───────────────────────────────────────────────
//
// koStemOf: strip common Korean verb/adjective endings from a token to reveal
// the dictionary stem (what you'd get by removing -다 from the infinitive).
// Used to check whether a conjugated token traces to a taught -다 verb/adj.
// Conservative: only strip when the remainder is >= 2 chars.
//
// Endings are tried longest-first to avoid partial matches.
const KO_ENDINGS = [
  // Past polite
  '\uC558\uC5B4\uC694',  // 았어요
  '\uC5C8\uC5B4\uC694',  // 었어요
  '\uC558\uC5B4',        // 았어
  '\uC5C8\uC5B4',        // 었어
  '\uC558\uC2B5\uB2C8\uB2E4',  // 았습니다
  '\uC5C8\uC2B5\uB2C8\uB2E4',  // 었습니다
  // ㅂ-irregular past: ㅂ drops, vowel+었 fuses (어렵→어려웠어요, 쉽→쉬웠어요)
  '\uC6E0\uC5B4\uC694',  // 웠어요  (어려웠어요, 쉬웠어요, 추웠어요)
  '\uC634\uC5B4\uC694',  // 왔어요  (다녀왔어요)
  '\uC6E0\uC5B4',        // 웠어
  '\uC634\uC5B4',        // 왔어
  '\uC6E0\uC2B5\uB2C8\uB2E4',  // 웠습니다
  // Conjecture / future
  '\uACA0\uC5B4\uC694',  // 겠어요
  '\uACA0\uC2B5\uB2C8\uB2E4',  // 겠습니다
  '\uACA0\uC5B4',        // 겠어
  // Polite present
  '\uC544\uC694',        // 아요
  '\uC5B4\uC694',        // 어요
  '\uD574\uC694',        // 해요
  '\uD569\uB2C8\uB2E4',  // 합니다
  '\uC2B5\uB2C8\uB2E4',  // 습니다
  // Suggestions / offers
  '\uC744\uAE4C\uC694',  // 을까요
  '\uBC15\uC2DC\uB2E4',  // 봅시다
  '\uC124\uAE4C\uC694',  // ㄹ까요 (uses ㄹ form, covered by syllable match)
  '\uC744\uAE4C',        // 을까
  '\uC744\uAC8C\uC694',  // 을게요
  '\uC744\uB798\uC694',  // 을래요
  '\uC744\uAC8C',        // 을게
  // Polite requests
  '\uC73C\uC138\uC694',  // 으세요
  '\uC138\uC694',        // 세요
  '\uC73C\uC2ED\uC2DC\uC624',  // 으십시오
  '\uC2ED\uC2DC\uC624',  // 십시오
  // ㅣ-final stem contractions: stem-ㅣ + 어요 → contracted (기다리+어요→기다려요)
  // When a verb stem ends in a ㅣ-vowel syllable, polite 어요 merges:
  //   ㄹ-initial last syl: 리+어요 → 려요  (기다리→기다려요, 어울리→어울려요)
  //   ㅅ-initial last syl: 시+어요 → 셔요  (마시→마셔요)
  //   ㅊ-initial last syl: 치+어요 → 쳐요  (가르치→가르쳐요, 다치→다쳐요)
  //   ㅇ-initial last syl: 이+어요 → 여요  (보이→보여요)
  // koSyllableMatch(려, 리)=TRUE via KO_VOWEL_CONTRACT[6=ㅕ]=20(ㅣ), same for 셔↔시, 쳐↔치, 여↔이.
  // BUT koStemOf needs to FIRST strip the ending to get the stem for comparison.
  // Adding these endings enables stripping before the syllable-match check.
  '\uB824\uC694',        // 려요  (기다리→기다려요, 어울리→어울려요)
  '\uC154\uC694',        // 셔요  (마시→마셔요)
  '\uCCD0\uC694',        // 쳐요  (가르치→가르쳐요, 다치→다쳐요)
  '\uC5EC\uC694',        // 여요  (보이→보여요)
  // Adverb -게 form: 유연하게, 그렇게, 따뜻하게, 천천히-style adverbs from adj
  '\uAC8C',              // 게
  // Casual no-요 contracted forms: 피곤해, 힘들어 (반말 / without polite -요)
  '\uD574',              // 해  (피곤하+아→피곤해, 공부해 casual)
  // Connectors
  '\uC73C\uBA74\uC11C',  // 으면서
  '\uBA74\uC11C',        // 면서
  '\uC73C\uBA74',        // 으면
  '\uB2C8\uAE4C',        // 니까
  '\uC73C\uB2C8\uAE4C',  // 으니까
  '\uC544\uC11C',        // 아서
  '\uC5B4\uC11C',        // 어서
  '\uC544\uB3C4',        // 아도
  '\uC5B4\uB3C4',        // 어도
  // Sentence endings
  '\uC9C0\uB9CC',        // 지만
  '\uC9C0\uC694',        // 지요
  '\uC8E0',              // 죠
  '\uB124\uC694',        // 네요
  '\uAD70\uC694',        // 군요
  '\uC9C0\uC694',        // 지요 (dup but fine)
  '\uAC70\uB4E0\uC694',  // 거든요
  '\uB294\uB370\uC694',  // 는데요
  '\uC740\uB370\uC694',  // 은데요
  '\uAC70\uC608\uC694',  // 거예요
  '\uAC70\uC5D0\uC694',  // 거에요
  // placeholder removed (was invalid Unicode escape)
  // Simple endings
  '\uACE0',              // 고
  '\uC11C',              // 서
  '\uBA74',              // 면
  '\uC544',              // 아
  '\uC5B4',              // 어
].filter(e => e && !e.includes('\u2013'));  // filter out the placeholder

function koStemOf(tok) {
  if (!tok || tok.length < 2) return tok;
  // Try longest matching suffix first
  const sorted = KO_ENDINGS.slice().sort((a, b) => b.length - a.length);
  for (const end of sorted) {
    if (tok.endsWith(end) && tok.length - end.length >= 1) {
      const stem = tok.slice(0, tok.length - end.length);
      if (stem.length >= 1) return stem;
    }
  }
  return tok;
}

// koHangulBase: strip the final consonant (jongseong) from a Hangul syllable,
// returning the base syllable code point. Used to detect ㄹ-irregular forms:
//   갈 (AC08) → 가 (AC00): same base, so 갈 matches stem 가
//   갔 (AC14) → 가 (AC00): same base (past tense ㅆ added), so 갔 matches 가
// Also detects vowel contraction for ㅗ→ㅘ (보→봐) and ㅜ→ㅝ (두→둬).
// Vowel contraction map: derived medial index → source medial index.
const KO_VOWEL_CONTRACT = {
  9: 8,   // ㅘ (wa) ← ㅗ (o): 보→봐
  14: 13, // ㅝ (wo) ← ㅜ (u): 두→둬
  1: 0,   // ㅐ (ae) ← ㅏ (a): 하→해 (하다 irregular)
  6: 20,  // ㅕ (yeo) ← ㅣ (i): 마시→마셔
  10: 11, // ㅙ (wae) ← ㅚ (oe): 되→됐어요, 됐 base has ㅙ but 되 has ㅚ
};
function koSyllableBase(char) {
  const cp = char.codePointAt(0);
  if (cp < 0xAC00 || cp > 0xD7A3) return null;
  // Strip final consonant (jongseong)
  return cp - ((cp - 0xAC00) % 28);
}
function koSyllableMedial(char) {
  const cp = char.codePointAt(0);
  if (cp < 0xAC00 || cp > 0xD7A3) return -1;
  return Math.floor((cp - 0xAC00) / 28) % 21;
}
function koSyllableInitial(char) {
  const cp = char.codePointAt(0);
  if (cp < 0xAC00 || cp > 0xD7A3) return -1;
  return Math.floor((cp - 0xAC00) / (28 * 21));
}
// Returns true if stemChar (from a conjugated form) is a morphological variant
// of taughtChar (the last syllable of the taught stem).
function koSyllableMatch(stemChar, taughtChar) {
  const sBase = koSyllableBase(stemChar);
  const tBase = koSyllableBase(taughtChar);
  if (sBase === null || tBase === null) return stemChar === taughtChar;
  // Same base (final-consonant only difference): 가/갈/갔 all share AC00
  if (sBase === tBase) return true;
  // Vowel contraction: check if stemChar's vowel is a contraction of taughtChar's
  const sMedial = koSyllableMedial(stemChar);
  const tMedial = koSyllableMedial(taughtChar);
  const sInitial = koSyllableInitial(stemChar);
  const tInitial = koSyllableInitial(taughtChar);
  if (sInitial === tInitial && KO_VOWEL_CONTRACT[sMedial] === tMedial) return true;
  // ㅎ-contraction: 어떻다→어때요. taughtChar ends in ㅎ coda (jongseong=27=ㅎ),
  // stemChar has ㅐ medial (1) from ㅓ medial (4) + ㅎ-drop.
  // Check: same initial, taughtChar has ㅎ coda (jong=27), stemChar medial=ㅐ(1), taughtChar medial=ㅓ(4).
  const tJong = (taughtChar.codePointAt(0) - 0xAC00) % 28;
  if (tJong === 27 && sInitial === tInitial && sMedial === 1 && tMedial === 4) return true;
  // Also: ㅗ+ㅎ → ㅚ (좋→좋아 -- but 좋아 same base as 좋 so already covered above)
  return false;
}

// ──────────────────────────────────────────────────────────────────────────────

function tokenize(text, langCode) {
  // For CJK: split by non-word chars, keep any sequence of CJK or Latin chars
  // For everything else: word characters with diacritics
  if (!text) return [];
  // Pre-process for Chinese: strip \uXXXX escape sequences (artifacts from unicode-
  // escaped source files where fs.readFileSync reads backslash-u literally) and
  // strip fullwidth CJK punctuation (，。！？：；「」『』【】《》〈〉、) that the
  // ASCII-only punct regex misses.
  // Strip \uXXXX escape sequences for all languages — these are encoding artifacts
  // from files where readFileSync reads backslash-u literally. For German this causes
  // \u00fc (ü) to appear as literal backslash-u-0-0-f-c in the string, which the
  // tokenizer then partially mangles into fragments like "fcrlich" from "Nat\u00fcrlich".
  if (/\\u[0-9A-Fa-f]{4}/.test(text)) {
    // First: attempt to decode the escaped sequences back to actual characters
    text = text.replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)));
  }
  if (langCode === 'zh' || langCode === 'ja') {
    // Strip fullwidth punctuation common in CJK text (Chinese and Japanese)
    text = text.replace(/[，。！？：；「」『』【】《》〈〉、～…—·]/g, ' ');
  }
  if (langCode === 'ja') {
    // Pre-process PP65 kanji+furigana notation: replace 漢字(ふりがな) with just ふりがな.
    // This prevents the bracket-stripper from producing meaningless kanji-stub fragments
    // like 「もう食」or hiragana-only suffixes like 「べましたか」 from 食(た)べましたか.
    // After preprocessing: 食(た)べましたか → たべましたか (matchable hiragana token).
    text = jaPreprocessExample(text);
  }
  if (langCode === 'zh') {
    // Strip CJK characters (1-2 chars, handled by hanzi+pinyin structure;
    // only the pinyin in parentheses should be checked as vocabulary tokens)
    text = text.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g, ' ');
  }
  // Strip register/style annotations that appear in Korean B2 examples like
  // "(written)", "(spoken)", "(formal)" — these are metalanguage labels, not vocabulary.
  // Must strip BEFORE punctuation removal so the parentheses+content are removed together.
  text = text.replace(/\((written|spoken|formal|informal|casual|polite|honorific|literary|colloquial)\)/gi, ' ');
  // Strip inline English translations that appear in Korean examples as parenthetical annotations.
  // Pattern: (Please prepare...), (I am going...), (This is...) etc.
  // These English phrases inside parens are supplementary for learners, not vocabulary items.
  // Match parenthetical that starts with a Latin capital letter (English sentence).
  // Use a greedy-safe pattern: strip any paren-group that begins with [A-Z] and contains Latin chars.
  text = text.replace(/\([A-Z][^)]{3,}\)/g, ' ');
  // Strip literal \n escape sequences (backslash+n as two chars, not the newline char).
  // These appear when extractField captures the raw string content including escape sequences,
  // causing "\\nStaff:" to tokenize as "\nStaff" (7-char token with leading backslash).
  text = text.replace(/\\n/g, ' ');
  // Strip punctuation and split.
  // Include \u00BF (¿) and \u00A1 (¡) — Spanish inverted punctuation that attaches
  // to the beginning of words and would otherwise remain in the token.
  return text
    .replace(/[.,;:!?()"'`\[\]{}<>/\\|@#$%^&*_=+\-–—…\n\r\t\u00BF\u00A1]+/g, ' ')
    .replace(/\d+/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
}

function bareForm(s, langCode) {
  if (!s) return '';
  // Decode \uXXXX escape sequences before comparison. Some unit files (notably
  // chinese-v2/unit-03 through unit-06) store CJK/diacritic chars as literal
  // backslash-u sequences when readFileSync reads them. This mirrors tokenize(),
  // so fileTaught entries align with decoded tokens from the example field.
  if (/\\u[0-9A-Fa-f]{4}/.test(s)) {
    s = s.replace(/\\u([0-9A-Fa-f]{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)));
  }
  let b = s.toLowerCase().trim();
  // Strip articles
  const arts = { de: /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/i,
                 nl: /^(de|het|een)\s+/i,
                 fr: /^(le|la|les|l'|un|une|des|du|de)\s+/i,
                 es: /^(el|la|los|las|un|una|unos|unas)\s+/i,
                 it: /^(il|la|lo|i|le|gli|un|una|uno|l')\s+/i,
                 pt: /^(o|a|os|as|um|uma|uns|umas)\s+/i };
  if (arts[langCode]) b = b.replace(arts[langCode], '');
  return b.trim();
}

// romanceStem: Romance-language verb infinitive stem (drop -r / -re).
// Enables `sentir` ≡ `sente` and `cafés` ⊃ `café` via prefix match.
function romanceStem(word, langCode) {
  if (!word || word.length < 4) return null;
  if (langCode === 'pt' || langCode === 'es') {
    if (/[aei]r$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  if (langCode === 'it') {
    if (/[aei]re$/.test(word) && word.length >= 6) return word.slice(0, -3);
  }
  if (langCode === 'fr') {
    if (/(er|ir|re)$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  return null;
}

// normalizeInflection: strip common inflection endings to get a lexical root.
// Applied to BOTH taught word and token before equality comparison, so the
// audit treats `brasileiro` ≡ `brasileira` ≡ `brasileiros`, `amigo` ≡ `amigos`,
// `gato` ≡ `gata` (gender/number pairs), `cantou` ≡ `cantar` (past tense).
// Conservative: only strips when ≥4 chars remain.
function normalizeInflection(word, langCode) {
  if (!word || word.length < 5) return word;
  let w = word;
  // Romance: past-tense endings. Strip before plural.
  if (langCode === 'pt' || langCode === 'es') {
    // -ou, -ei, -aste, -eu, -iu, -aram, -eram, -iram, -amos, -emos, -imos,
    //  -ava, -ia, -ou, -ado/-ada/-ido/-ida (past participles).
    w = w.replace(/(aram|eram|iram|amos|emos|imos|aste|este|iste|ava|iva|ado|ada|ido|ida|ou|ei|eu|iu|í|á|ó|é)$/u, '');
  } else if (langCode === 'it') {
    w = w.replace(/(avano|evano|ivano|arono|erono|irono|avamo|evamo|ivamo|asti|esti|isti|ato|ata|uto|uta|ito|ita|ando|endo|ava|eva|iva|ò|ì|é)$/u, '');
  } else if (langCode === 'fr') {
    w = w.replace(/(asses|isses|issent|aient|aimes|issiez|assiez|âmes|îmes|èrent|èrent|ais|ait|ant|ent|és|ées|ée|é|é|âtes|ites|ira|era)$/u, '');
  }
  // Plural / gender pairs for Romance+Germanic (very conservative — last 1 char only).
  // `-s` plural: applies to nearly all European languages.
  if (w.length >= 5 && /s$/.test(w)) w = w.slice(0, -1);
  // `-es` plural (Portuguese/Spanish/French for some nouns)
  if (langCode === 'pt' || langCode === 'es' || langCode === 'fr') {
    if (w.length >= 5 && /es$/.test(w)) w = w.slice(0, -2);
  }
  // `-a`/`-o` gender endings for Romance
  if (langCode === 'pt' || langCode === 'es' || langCode === 'it') {
    if (w.length >= 4 && /[ao]$/.test(w)) {
      // only strip if remainder still meaningful (≥3 chars)
      const tentative = w.slice(0, -1);
      if (tentative.length >= 3) w = tentative;
    }
  }
  return w;
}

// matchesTaught: returns true when `tok` transparently traces to a taught word.
// Layers, tried in order:
//   1. Exact / substring match either direction (original, catches trivial inflections).
//   2. Romance verb stem match (sentir → sente, sentimos, sentiu).
//   3. Normalized-inflection equality (brasileiro == brasileira == brasileiros;
//      cantou ~= cantar via past-tense strip).
//   4. (Korean) Stem match: koStemOf() strips conjugation endings from tok, then
//      compares against taught stems (stored via koAddStems in auditLang).
//      koSyllableMatch() handles ㄹ-irregular (갈→가) and vowel contractions (봐→보).
function matchesTaught(tok, taught, langCode) {
  const tokNorm = normalizeInflection(tok, langCode);
  // For Romance languages, also compare with accent-stripped forms.
  // This handles pairs like préférer (taught) → préfère (example):
  // stem of préférer is "préfér" but conjugated form has è not é.
  const useAccentStrip = ['fr','es','it','pt','de'].includes(langCode);
  const tokStripped = useAccentStrip ? stripAccents(tok) : tok;
  for (const tw of taught) {
    if (!tw) continue;
    if (tw === tok || tw.includes(tok) || tok.includes(tw)) return true;
    // Accent-stripped exact/substring match
    if (useAccentStrip) {
      const twStripped = stripAccents(tw);
      if (twStripped === tokStripped || twStripped.includes(tokStripped) || tokStripped.includes(twStripped)) return true;
    }
    const stem = romanceStem(tw, langCode);
    if (stem && stem.length >= 3 && tok.startsWith(stem)) return true;
    // Accent-stripped stem match: handles é→è vowel shifts in conjugation
    if (useAccentStrip && stem) {
      const stemStripped = stripAccents(stem);
      if (stemStripped.length >= 3 && tokStripped.startsWith(stemStripped)) return true;
    }
    // Normalized inflection: compare the lexical roots.
    const twNorm = normalizeInflection(tw, langCode);
    if (twNorm.length >= 3 && tokNorm.length >= 3 &&
        (twNorm === tokNorm || twNorm.startsWith(tokNorm) || tokNorm.startsWith(twNorm))) return true;
    // Accent-stripped normalized inflection match
    if (useAccentStrip) {
      const twNormStripped = stripAccents(twNorm);
      const tokNormStripped = stripAccents(tokNorm);
      if (twNormStripped.length >= 3 && tokNormStripped.length >= 3 &&
          (twNormStripped === tokNormStripped ||
           twNormStripped.startsWith(tokNormStripped) ||
           tokNormStripped.startsWith(twNormStripped))) return true;
    }
  }

  // ── Korean morphological stem-matching ──────────────────────────────────────
  // Korean is agglutinative: 가다 produces 가요/갔어요/갈까요/가서/가면… 50+ forms.
  // Strategy:
  //  1. koStemOf(tok) strips conjugation suffixes to get a stem candidate.
  //  2. That stem is compared against entries in `taught` (auditLang adds
  //     다-stripped stems via koAddStems so they appear as short entries).
  //  3. koSyllableMatch() handles ㄹ-irregular (갈[base=가]) and vowel
  //     contractions: ㅗ→ㅘ (보→봐), ㅜ→ㅝ (주→줘), ㅏ→ㅐ (하→해), ㅣ→ㅕ (시→셔).
  //  4. Korean noun+particle: Korean nouns attach case-marking particles directly
  //     (요리를, 계획을, 은행이). The tokenizer does NOT strip particles, so a token
  //     like '요리를' won't match taught '요리'. We strip the final particle syllable
  //     (one char: 를,을,이,가,은,는,의,도,와,과,랑,야,로) and re-check.
  if (langCode === 'ko') {
    const tokStem = koStemOf(tok);
    if (tokStem !== tok && tokStem.length >= 1) {
      // Check stemmed token against all taught entries
      for (const tw of taught) {
        if (!tw) continue;
        if (tokStem === tw) return true;
        if (tokStem.startsWith(tw) && tw.length >= 1) return true;
        // 하다-verb compound: koStemOf strips 해요→stem WITHOUT 하 (죄송해요→죄송)
        // but the taught entry has the 하 (죄송하 or 죄송하다). Check reverse direction:
        // tw.startsWith(tokStem) catches: tw=죄송하, tokStem=죄송 → TRUE.
        // Guard: tw must end in 하 (하다 compound) or 되 (되다 compound) to avoid false positives.
        if (tw.length >= 2 && tokStem.length >= 2 && tokStem.length < tw.length &&
            tw.startsWith(tokStem) && (tw.endsWith('\uD558') || tw.endsWith('\uB418'))) return true;
        // ㅣ-contraction reverse: koStemOf(기다려요) → 기다 (stripped 려요).
        // 기다 won't startsWith '기다리' (taught), but '기다리'.startsWith('기다') IS true.
        // Since 려요/셔요/쳐요/여요 contractions absorb the last stem syllable into the ending,
        // stripping leaves a 2-char prefix that's a genuine prefix of the taught form.
        // We apply this check when tokStem is strictly shorter than tw (not a 하/되 guard needed:
        // the contraction check is limited to stems of length >= 2 and tw >= tokStem+1).
        if (tw.length >= 2 && tokStem.length >= 2 && tokStem.length < tw.length &&
            tw.startsWith(tokStem)) return true;
        // Syllable-level match for the first character (handles ㄹ-irregular etc.)
        if (tw.length === 1 && tokStem.length >= 1 && koSyllableMatch(tokStem[0], tw[0])) return true;
        // Multi-char stem: check if tokStem starts with a syllable-flexible version of tw
        if (tw.length >= 2 && tokStem.length >= tw.length) {
          let allMatch = true;
          for (let i = 0; i < tw.length; i++) {
            if (!koSyllableMatch(tokStem[i], tw[i])) { allMatch = false; break; }
          }
          if (allMatch) return true;
        }
        // Multi-char 하다 reverse: tw=죄송하다, tokStem=죄송 → tw.startsWith(tokStem)+하다-suffix
        if (tw.length >= 3 && tokStem.length >= 2 && tw.startsWith(tokStem) &&
            (tw.slice(tokStem.length) === '\uD558\uB2E4' || tw.slice(tokStem.length) === '\uD558')) return true;
      }
    }
    // Also try with original tok (some forms are too short to have strippable endings)
    for (const tw of taught) {
      if (!tw) continue;
      if (tw.length === 1 && tok.length >= 1 && koSyllableMatch(tok[0], tw[0])) return true;
    }

    // ── Korean noun+particle stripping ──────────────────────────────────────────
    // Single-char case particles directly attached to nouns:
    //   를(B97C), 을(C744) = acc after vowel/consonant
    //   이(C774) = nom/cop after consonant (when 2+ chars remain)
    //   가(AC00) = nom after vowel — skip: too short and common as verb stem
    //   은(C740), 는(B294) = topic
    //   의(C758) = genitive
    //   도(B3C4) = also/too
    //   와(C640), 과(AC04) = comitative/and
    //   랑(B791) = casual and (after vowel)
    //   야(C57C) = casual vocative/nominator after vowel
    //   로(B85C) = directional/instrumental after vowel
    //   을(C744) already above; 과/와 above.
    // Only strip if remainder has length >= 2 (prevents single-char nouns masking verbs).
    // 2-char particles: 에서(C5D0C11C), 에게(C5D0AC8C), 으로(C73CB85C), 이랑(C774B791), 이나(C774B098)
    const KO_PARTICLES_1 = new Set([
      '\uB97C', // 를
      '\uC744', // 을
      '\uC774', // 이
      '\uC740', // 은
      '\uB294', // 는
      '\uC758', // 의
      '\uB3C4', // 도
      '\uC640', // 와
      '\uAC04', // 과
      '\uB791', // 랑
      '\uC57C', // 야
      '\uB85C', // 로
    ]);
    const KO_PARTICLES_2 = [
      '\uC5D0\uC11C', // 에서
      '\uC5D0\uAC8C', // 에게
      '\uC73C\uB85C', // 으로
      '\uC774\uB791', // 이랑
      '\uC774\uB098', // 이나
    ];
    if (tok.length >= 3) {
      // Try 2-char particle first
      for (const p2 of KO_PARTICLES_2) {
        if (tok.endsWith(p2) && tok.length - p2.length >= 2) {
          const bareNoun = tok.slice(0, tok.length - p2.length);
          for (const tw of taught) {
            if (!tw) continue;
            if (tw === bareNoun || tw.startsWith(bareNoun) || bareNoun.startsWith(tw)) return true;
          }
        }
      }
      // Try 1-char particle
      const lastChar = tok[tok.length - 1];
      if (KO_PARTICLES_1.has(lastChar) && tok.length - 1 >= 2) {
        const bareNoun = tok.slice(0, -1);
        const bareNounStem = koStemOf(bareNoun);  // rare: noun+verbal-noun ending
        for (const tw of taught) {
          if (!tw) continue;
          if (tw === bareNoun || tw.startsWith(bareNoun) || bareNoun.startsWith(tw)) return true;
          if (bareNounStem !== bareNoun && (tw === bareNounStem || bareNounStem.startsWith(tw))) return true;
          // Also check slash-parts stored by addTrg (e.g. 건너가 from 건너가다)
          // via the general stem-level multi-char match:
          if (tw.length >= 2 && bareNoun.length >= tw.length) {
            let allMatch = true;
            for (let i = 0; i < tw.length; i++) {
              if (!koSyllableMatch(bareNoun[i], tw[i])) { allMatch = false; break; }
            }
            if (allMatch) return true;
          }
        }
      }
    }
  }

  return false;
}

function auditLang(langDir) {
  const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
  if (!fs.existsSync(BASE)) return null;
  const langCode = LANG_MAP[langDir] || 'en';
  const stopwords = FUNCTION_WORDS[langCode] || new Set();
  // Build accent-stripped stopword set for languages that use diacritics.
  // This lets 'etait' match 'était', 'tres' match 'très', etc.
  const stopwordsStripped = new Set();
  if (['fr','es','it','pt','de'].includes(langCode)) {
    for (const w of stopwords) stopwordsStripped.add(stripAccents(w));
  }

  const allFiles = fs.readdirSync(BASE);
  // Sort: unit files FIRST (curriculum order), then _batch and _temp files AFTER.
  // This ensures teach cards from unit-01 through unit-36 are in the taughtWords
  // set when _temp_ gap/supplement files are checked, preventing false violations
  // where a word IS taught in a unit file but appears in a _temp_ file which
  // sorts alphabetically BEFORE unit files (underscore < 'u').
  const unitFiles = allFiles.filter(f => /^unit-\d+\.js$/.test(f)).sort();
  const batchFiles = includeBatch
    ? allFiles.filter(f => /^_batch\d+_u\d+_L\d+\.js$/.test(f) || (/^_temp_/.test(f) && f.endsWith('.js'))).sort()
    : [];
  const files = [...unitFiles, ...batchFiles];

  // Build taughtWords set cumulatively (teach trgs across all files scanned so far)
  const taughtWords = new Set();
  // Unit files are processed first so their vocabulary is known before _temp_ files.
  // Within each group, files are sorted in curriculum order.

  const report = [];
  let totalViolations = 0;

  for (const file of files) {
    const filePath = path.join(BASE, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const steps = extractStepBlocks(content);

    // ── addTrg: add a trg word to a Set with language-appropriate expansion ──────
    // Japanese: store all morphological forms (original, hiragana, kanji-only, stems)
    //   via jaExpandForms so conjugated example tokens can be substring-matched.
    // Korean: store original + 다-stripped stem so koStemOf(tok) in matchesTaught
    //   can compare the stripped token stem against the taught infinitive stem.
    // All other languages: store bareForm as before.
    const addTrg = (trg, targetSet) => {
      if (!trg) return;
      if (langCode === 'ja') {
        for (const f of jaExpandForms(trg)) targetSet.add(f);
      } else if (langCode === 'ko') {
        const bare = bareForm(trg, langCode);
        targetSet.add(bare);
        // Add 다-stripped stem: taught 가다 → also store 가, so koStemOf(갔어요)=갔
        // matches against 가 via koSyllableMatch (갔 base = AC00 = 가 base).
        if (bare.endsWith('\uB2E4') && bare.length >= 2) {  // 다 = U+B2E4
          targetSet.add(bare.slice(0, -1));
        }
        // Arrow-format nl: "어렵다 → 어려워요". Extract both parts and register their stems.
        // 13% of Korean teach cards use this "dict → conjugated" format. Without this,
        // the whole phrase (which ends in 요, not 다) never has its verb stem extracted.
        if (bare.includes('\u2192')) {  // → U+2192
          const parts = bare.split('\u2192').map(s => s.trim());
          for (const part of parts) {
            targetSet.add(part);
            if (part.endsWith('\uB2E4') && part.length >= 2) {
              targetSet.add(part.slice(0, -1));  // 어렵다 → also add 어렵
            }
          }
        }
        // Slash-format nl: "건너다 / 건너가다", "어머니 / 엄마", "아래 / 밑".
        // Each alternative is a legitimate taught form; register all parts.
        // Without this, the stem-matcher only sees the full slash-joined string
        // (e.g. "건너다 / 건너가다") and cannot match conjugated tokens like 건너세요.
        if (bare.includes(' / ')) {
          const slashParts = bare.split(' / ').map(s => s.trim());
          for (const sp of slashParts) {
            targetSet.add(sp);
            if (sp.endsWith('\uB2E4') && sp.length >= 2) {
              targetSet.add(sp.slice(0, -1));  // 건너가다 → also add 건너가
            }
          }
        }
      } else {
        targetSet.add(bareForm(trg, langCode));
      }
    };

    // First pass: collect teach trgs in THIS file to add to taughtWords later
    // so the current file's teach cards can reference each other even if listed
    // after the example's line. But to be strict, we add them as we encounter.
    const fileTaught = new Set();
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        addTrg(trg, fileTaught);
      }
    }

    // Second pass: check each teach card's example
    for (const step of steps) {
      if (step.type !== 'teach') continue;
      const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
      const example = extractField(step.text, 'example');
      if (!trg || !example) continue;

      const ownBare = bareForm(trg, langCode);
      // Japanese: compute own-card expanded forms for self-referential example matching
      const ownForms = langCode === 'ja' ? new Set(jaExpandForms(trg)) : null;
      // Korean: pre-compute own-card stem for own-conjugation exemption.
      // For arrow-format cards (nl:"어렵다 → 어려워요"), extract the 다-infinitive from the first part.
      let ownKoStem = null;
      if (langCode === 'ko') {
        if (ownBare.endsWith('\uB2E4') && ownBare.length >= 2) {
          ownKoStem = ownBare.slice(0, -1);  // standard: 어렵다 → 어렵
        } else if (ownBare.includes('\u2192')) {  // → arrow format
          const firstPart = ownBare.split('\u2192')[0].trim();
          if (firstPart.endsWith('\uB2E4') && firstPart.length >= 2) {
            ownKoStem = firstPart.slice(0, -1);  // 어렵다 → 어려워요 → stem=어렵
          }
        }
      }
      const tokens = tokenize(example, langCode);
      const untaught = [];

      // Split example into sentences to identify sentence-start capitalization
      // (not a true proper noun). Dialogue prefixes "A:" and "B:" are already stripped by tokenize.
      // For Latin-script languages, treat mid-sentence capitalized words (not first in sentence)
      // as likely proper nouns → skip.
      const sentenceStarts = new Set();
      const sentences = example.split(/[.!?\n]+/);
      for (const s of sentences) {
        const first = s.trim().split(/\s+/)[0];
        if (first) sentenceStarts.add(first.toLowerCase());
      }
      const properNounLike = new Set();
      for (const tok of tokens) {
        if (/^[A-ZÀÂÄÇÈÉÊËÎÏÔÖÙÛÜÑÆŒА-ЯЁ]/.test(tok) && !sentenceStarts.has(tok.toLowerCase())) {
          properNounLike.add(tok.toLowerCase());
        }
      }

      for (const tok of tokens) {
        const t = tok.toLowerCase();
        if (stopwords.has(t)) continue;
        // Check accent-stripped form against the stripped stopword set.
        // This handles both directions:
        //   - token "etait" matches stripped form of stopword "était"
        //   - token "était" already matches via stopwords.has(t)
        const tStripped = stripAccents(t);
        if (stopwordsStripped.has(tStripped)) continue;
        if (properNounLike.has(t)) continue;
        // Own-card match: standard substring comparison
        if (t === ownBare || ownBare.includes(t) || t.includes(ownBare)) continue;
        // Own-card: Japanese expanded forms (hiragana, verb stems, kanji-only)
        if (ownForms) {
          let selfMatch = false;
          for (const f of ownForms) {
            if (f && (f === t || f.includes(t) || t.includes(f))) { selfMatch = true; break; }
          }
          if (selfMatch) continue;
        }
        // Own-card verb-stem match for Romance: "sentir" example "sente"
        const ownStem = romanceStem(ownBare, langCode);
        if (ownStem && ownStem.length >= 3 && t.startsWith(ownStem)) continue;
        // Own-card Korean conjugation exemption: the card's own 다-verb forms are allowed
        if (ownKoStem && ownKoStem.length >= 1) {
          const tKoStem = koStemOf(t);
          if (tKoStem === ownKoStem) continue;
          // Single-char stem: syllable-base match handles ㄹ-irregular (가다 → 갈)
          if (ownKoStem.length === 1 && tKoStem.length >= 1 &&
              koSyllableMatch(tKoStem[0], ownKoStem[0])) continue;
        }
        // Prior-taught match (cross-file + same-file cumulative).
        if (matchesTaught(t, taughtWords, langCode)) continue;
        if (matchesTaught(t, fileTaught, langCode)) continue;
        untaught.push(tok);
      }

      if (untaught.length > 0) {
        totalViolations++;
        report.push({
          file,
          trg,
          untaught: Array.from(new Set(untaught))
        });
      }
    }

    // After this file, merge fileTaught into taughtWords
    for (const t of fileTaught) taughtWords.add(t);
  }

  return { langDir, totalViolations, report, filesScanned: files.length };
}

function formatMarkdown(result) {
  const { langDir, totalViolations, report, filesScanned } = result;
  let out = `# PP63/PP68 example-vocab integrity audit — ${langDir}\n\n`;
  out += `- Files scanned: ${filesScanned}\n`;
  out += `- Teach cards with untraceable example words: **${totalViolations}**\n\n`;
  if (totalViolations === 0) {
    out += `✅ PASS\n`;
    return out;
  }
  // Group by file
  const byFile = {};
  for (const r of report) {
    byFile[r.file] = byFile[r.file] || [];
    byFile[r.file].push(r);
  }
  for (const [file, items] of Object.entries(byFile)) {
    out += `## ${file} (${items.length} cards)\n`;
    for (const it of items.slice(0, 20)) {
      out += `- **${it.trg}** → untaught in example: ${it.untaught.slice(0, 6).join(', ')}${it.untaught.length > 6 ? '…' : ''}\n`;
    }
    if (items.length > 20) out += `- …and ${items.length - 20} more\n`;
    out += '\n';
  }
  return out;
}

function main() {
  if (doAll) {
    let anyViolations = false;
    const summary = [];
    for (const lang of LANGS) {
      const res = auditLang(lang);
      if (!res) continue;
      summary.push(`${lang}: ${res.totalViolations} cards with untaught example words`);
      if (res.totalViolations > 0) anyViolations = true;
      if (writePath) {
        const p = writePath.replace('<lang>', lang);
        fs.writeFileSync(p, formatMarkdown(res));
        console.log(`wrote ${p}`);
      }
    }
    console.log(summary.join('\n'));
    process.exit(anyViolations ? 1 : 0);
  }

  if (!langArg) {
    console.error('Usage: node scripts/pp63_audit.cjs <lang-dir> [--include-batch] [--write <path>]');
    console.error('   or: node scripts/pp63_audit.cjs --all [--include-batch]');
    process.exit(2);
  }
  const res = auditLang(langArg);
  if (!res) {
    console.error(`Language dir not found: ${langArg}`);
    process.exit(2);
  }
  const md = formatMarkdown(res);
  if (writePath) {
    fs.writeFileSync(writePath, md);
    console.log(`wrote ${writePath}`);
  } else {
    console.log(md);
  }
  process.exit(res.totalViolations > 0 ? 1 : 0);
}

main();
