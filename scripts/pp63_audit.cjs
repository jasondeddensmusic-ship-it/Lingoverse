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
  'nl': new Set(['de','het','een','en','of','maar','als','dat','omdat','ik','jij','je','u','hij','zij','ze','wij','we','jullie','zij','mij','me','jou','hem','haar','hen','hun','is','zijn','was','waren','ben','bent','heeft','hebt','hebben','had','hadden','niet','geen','ook','al','nog','meer','alleen','zo','heel','erg','te','in','op','bij','voor','met','naar','van','over','onder','door','tegen','achter','naast','tussen','wie','wat','waar','wanneer','hoe','waarom','welke','welk']),
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
  ]),
  'es': new Set(['el','la','los','las','un','una','unos','unas','y','o','pero','si','que','porque','yo','tú','él','ella','usted','nosotros','vosotros','ellos','ellas','me','te','se','le','les','lo','nos','os','es','son','era','eran','soy','eres','somos','sois','he','has','ha','hemos','habéis','han','había','habían','no','también','ya','todavía','aún','más','menos','solo','muy','en','a','al','del','de','por','para','con','sin','sobre','hacia','desde','contra','entre','quien','quienes','qué','dónde','cuándo','cómo','por','cuál','cuáles']),
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
  ])
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
    'shénme','nǎge','nǎlǐ','háishi','rúguǒ',
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
    'chángcháng','gōngjiāo','bǎoguì',
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
  ]),
  'ja': new Set(['は','が','を','に','で','と','の','も','か','へ','や','から','まで','より','こそ','さえ','だけ','しか','です','ます','だ','である','ない','ある','いる','する','なる','できる','この','その','あの','どの','これ','それ','あれ','どれ','ここ','そこ','あそこ','どこ','いつ','なに','なん','だれ','どう','なぜ','どうして']),
  'ko': new Set(['은','는','이','가','을','를','의','에','에서','에게','한테','으로','로','과','와','하고','나','저','우리','너','당신','그','그녀','이','저','그','있다','없다','이다','아니다','하다','되다','도','만','부터','까지','처럼','보다','마다','밖에','조차','뿐','라도'])
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
  if (langCode === 'zh') {
    // Strip fullwidth punctuation common in Chinese text
    text = text.replace(/[，。！？：；「」『』【】《》〈〉、～…—·]/g, ' ');
    // Strip CJK characters (1-2 chars, handled by hanzi+pinyin structure;
    // only the pinyin in parentheses should be checked as vocabulary tokens)
    text = text.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g, ' ');
  }
  // Strip punctuation and split
  return text
    .replace(/[.,;:!?()"'`\[\]{}<>/\\|@#$%^&*_=+\-–—…\n\r\t]+/g, ' ')
    .replace(/\d+/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
}

function bareForm(s, langCode) {
  if (!s) return '';
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
function matchesTaught(tok, taught, langCode) {
  const tokNorm = normalizeInflection(tok, langCode);
  for (const tw of taught) {
    if (!tw) continue;
    if (tw === tok || tw.includes(tok) || tok.includes(tw)) return true;
    const stem = romanceStem(tw, langCode);
    if (stem && stem.length >= 3 && tok.startsWith(stem)) return true;
    // Normalized inflection: compare the lexical roots.
    const twNorm = normalizeInflection(tw, langCode);
    if (twNorm.length >= 3 && tokNorm.length >= 3 &&
        (twNorm === tokNorm || twNorm.startsWith(tokNorm) || tokNorm.startsWith(twNorm))) return true;
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

    // First pass: collect teach trgs in THIS file to add to taughtWords later
    // so the current file's teach cards can reference each other even if listed
    // after the example's line. But to be strict, we add them as we encounter.
    const fileTaught = new Set();
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        if (trg) fileTaught.add(bareForm(trg, langCode));
      }
    }

    // Second pass: check each teach card's example
    for (const step of steps) {
      if (step.type !== 'teach') continue;
      const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
      const example = extractField(step.text, 'example');
      if (!trg || !example) continue;

      const ownBare = bareForm(trg, langCode);
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
        if (t === ownBare || ownBare.includes(t) || t.includes(ownBare)) continue;
        // Own-card verb-stem match: "sentir" example "sente" — same-card inflection.
        const ownStem = romanceStem(ownBare, langCode);
        if (ownStem && ownStem.length >= 3 && t.startsWith(ownStem)) continue;
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
