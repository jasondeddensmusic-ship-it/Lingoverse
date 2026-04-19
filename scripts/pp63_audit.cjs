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
  'ko': new Set([
    'ability','about','abundant','accident','accomplishment','achieved','acquire','after','agree','and','announced','applied','are','argument','arrested','article','aspirations','attention','became','because',
    'begun','being','bibimbap','big','blocked','bts를','building','but','carefully','cctv가','change','climate','coffee','come','command','company','competencies','complicated','composed','comprehension',
    'compromise','conclusion','conjugation','conversation','cover','damage','day','decreasing','deep','depending','diary','different','differs','difficult','dirty','diverse','drink','due','dust','effort',
    'elders','every','evidence','excellent','experience','experts','expression','factory','failed','families','find','fine','friends','from','fulfill','future','gap','generation','goal','good',
    'got','government','graduating','great','happy','hard','has','have','high','hire','important','improve','improved','incident','increasing','individualistic','ingredients','instead','intend','interesting',
    'interview','introduce','investigated','investigating','issue','job','joining','kbs를','ktx가','ktx로','ktx를','ktx보다','ktx요','lacks','large','leader','letter','looking','lot','made',
    'may','mistake','must','mz세대는','mz세대의','need','nervous','new','next','notice','occurred','often','open','opinion','oppose','opposition','ordered','out','overcoming','passed',
    'passionate','pd가','people','plain','plan','played','police','policy','pollution','pop','population','pop을','possess','practicing','prepare','proficiency','protection','qualifications','read','reading',
    'received','recommend','recruitment','rejection','report','requires','responsibility','restaurant','results','resume','road','role','sad','salary','season','sent','sentences','separated','share','shifted',
    'sides','situation','skills','speech','spoken','statistics','steadily','strengths','structure','suitable','suspect','talent','tea','team','tell','temperatures','tendencies','tends','that','the',
    'this','tomorrow','traffic','typhoon','ufo인가','university','un은','usb에','values','verbs','want','was','weaknesses','will','work','worked','working','workplace','written','wrote',
    'years','you','young','your','ㄹ까요','ㅂ니다','가','가게가','가게는','가게를','가게에','가게에서','가게와','가게요','가겠습니다','가격도','가격에','가격은','가격을','가격이',
    '가격이라니','가격이에요','가격이요','가구가','가구를','가기로','가까우니까','가까운','가까워서요','가까워요','가까워졌네','가까워졌어요','가까워지기','가까워질','가까웠었어요','가까이','가까이에','가깝네요','가꾸셨네요','가꿔요',
    '가난에','가난을','가네요','가는지','가늘네요','가늘어요','가능성이','가능한가요','가능할','가능할까요','가능합니다','가능해','가능해요','가능해졌어요','가능해졌죠','가득하겠네요','가득해','가득해요','가득히','가라앉고',
    '가라앉았어요','가라앙고','가려고','가려고요','가려던','가려요','가려워','가려워요','가려졌어','가로등','가로등이','가로로','가로막고','가로막는','가로막지','가로수가','가로와','가르자','가르쳐','가르쳐요',
    '가르치고','가르치세요','가르침을','가리지','가리키고','가리키는','가만있어','가만있을','가만히','가문의','가뭄이','가방에','가방에서','가방은','가방을','가방의','가방이','가방이에요','가벼운','가볍게',
    '가볍고','가볼게요','가볼까','가봅시다','가사가','가설이','가세요','가셔서요','가셨어','가셨어요','가수가','가수는','가수들이','가수예요','가수의','가슴속','가슴속에','가슴이','가습기를','가시가',
    '가시나요','가시에','가십니까','가야겠네요','가야겠다','가야지','가요도','가요를','가운데','가운데에','가위가','가을에','가을에는','가을이','가을이라','가을이면','가이드가','가이드를','가입은','가입을',
    '가입자','가입자가','가입자에게','가입하고','가입하기로','가입하셨어요','가입할게요','가입했어','가입했어요','가자고','가정교사를','가정교사요','가정에서','가정의','가정이','가져가','가져가는','가져가도','가져가세요','가져가야겠네요',
    '가져가자','가져갈게요','가져갈까요','가져갔어요','가져다','가져다녀야지','가져다줄게','가져다줄게요','가져다줄래','가져야','가져오세요','가져오셨나요','가져온','가져올','가져올게','가져올게요','가져올까요','가져와','가져왔는데요','가져왔어',
    '가져왔어요','가져요','가족과','가족들','가족들이','가족들이랑','가족은','가족을','가족의','가족이','가족이랑','가족이에요','가족하고','가족한테','가죽이에요','가지고','가지도','가지런히','가지를','가지만',
    '가지세요','가지씩','가짜와','가짜인','가치가','가치관에서','가치관이','가치관이네요','가치는','가치를','가치예요','가톨릭','가품의','가하는','각국에서','각국의','각오가','각오를','각오야','각오하고',
    '각자의','간격으로','간격을','간격이','간격인데','간다고','간다고요','간다면서요','간단해요','간단히','간섭이','간식으로','간식을','간신히','간장게장','간장게장이','간장을','간장이랑','간접적으로','간지러워',
    '간지러웠어','간직하고','간직하세요','간직한','간직할게','간판을','간판이','간편식도','간편한','간편해요','간호가','간호사','간호사가','간호사예요','간호사의','간호학을','간호했어요','갇혔어','갇혔어요','갇히면',
    '갈게요','갈까요','갈등도','갈등은','갈등이','갈래요','갈비탕','갈비탕이','갈색이에요','갈수록','갈아야','갈아입고','갈아입어','갈아입을','갈아입을게요','갈아타세요','갈아타요','갈증이','감각을','감각이',
    '감각이죠','감각적인','감기가','감기약을','감기에','감기예요','감기인','감독은','감독이','감독이에요','감독이죠','감동받는지','감동받아서','감동받았어요','감동이','감동이에요','감동적이야','감동적이었구나','감동적이었나','감동적이었어',
    '감동적이었어요','감동적인','감동했어요','감사는커녕','감사로','감사한','감사함을','감사합니다','감사해요','감상문을','감상을','감상이','감상하는','감상하며','감상했어요','감소가','감소되었어요','감소된','감소의','감소하고',
    '감소했어요','감수성이','감싸죠','감았어요','감염됐어요','감염을','감옥에','감옥에서','감으세요','감자를','감자예요','감자전이','감자찌개','감자튀김도','감정에','감정은','감정을','감정이','감정이거든요','감정이에요',
    '감정적으로','감정적이었어요','감정적인','감추려고','감추면','감추지','갑니까','갑니다','갑이네요','갑이야','갑이지','갑자기','갑작스러운','갑작스럽게','값싸요','값싸지만','갔거든요','갔네요','갔는데','갔대요',
    '갔어요','갔었구나','강가에','강국이','강국이잖아요','강남구','강남구에','강남까지','강남에','강남에서','강남역','강남역에서','강남은','강남의','강당에서','강당에서요','강당이','강도가','강도를','강력하게',
    '강력한','강력히','강렬한','강렬했어','강렬했어요','강물이','강변에서','강변을','강변이','강변이요','강북과','강북에는','강북에서','강북은','강사가','강사로','강수량이','강아지','강아지가','강아지는',
    '강아지들이','강아지를','강에서','강연을','강요하면','강요하지','강원도에','강의가','강의를','강의하세요','강일이','강점이','강제로','강제인가요','강조점이네요','강조하셨어요','강조했어','강조했어요','강하네요','강하니까',
    '강해요','강해졌죠','강해진','강화됐어요','강화합시다','강화해야','갖가지','갖추고','갖추기','갖춰졌어요','같네요','같다고','같아요','같았어요','같은데','같이할래','갚아야','갚을게','갚을게요','개개인의',
    '개관했어요','개구리','개구리가','개구리는','개국에','개국이나','개그가','개나리가','개념이','개미가','개미는','개미처럼','개발되었어요','개발이','개발하고','개방됐대요','개방되었어요','개방이','개방이에요','개방할',
    '개방했어요','개선돼야','개선됐어요','개선되고','개선되었어요','개선되었죠','개선된','개선하겠어','개선하면','개선할까요','개선합시다','개선해야','개설하고','개성을','개성이','개었어','개예요','개월이에요','개월째','개인의',
    '개인적으로','개인적으로는','개인적인','개인주의적','객관적으로','객관적인','갱신했어요','거구나','거군요','거기가','거기까지','거기로','거기서','거기에','거기에서','거꾸로','거네요','거니까','거대하네요','거대한',
    '거두었습니다','거두었어요','거뒀어','거들어','거듭하면','거라고','거라서','거라서요','거래에서','거론되는','거리가','거리네요','거리야','거리에','거리예요','거부할','거부했다면서요','거부했어요','거스름돈이','거실에서',
    '거액에','거액의','거액이네요','거였군요','거예요','거울에','거잖아','거절하기','거절하세요','거절한','거절해야','거짓말','거짓말을','거짓말이','거짓말했어요','거짓이었어','거쳐서','거쳐야','거칠어','거칠어요',
    '거칠어졌어요','거품을','거품이','걱정돼','걱정돼요','걱정되네요','걱정되지','걱정되지만','걱정스러운','걱정스러워','걱정스러워요','걱정시키고','걱정이','걱정이야','걱정이에요','걱정하실','걱정하지','걱정해서','걱정했던','걱정했어요',
    '건가요','건강과','건강도','건강식품','건강에','건강은','건강은요','건강을','건강의','건강이','건강이라고','건강하려면','건강하세요','건강하시길','건강하시죠','건강한','건강해','건강해지기','건너가세요','건너갑니다',
    '건너갔어요','건너려면','건너로','건너세요','건너에','건너오세요','건너올게요','건너와','건너요','건너편','건너편에','건넌방에서','건네받았어요','건네주세요','건네줄','건네줬어요','건데요','건드렸어요','건드리지','건물도',
    '건물에서','건물은','건물을','건물의','건물이','건물이에요','건물이요','건물인데','건설되었어요','건설될','건설이','건설적인','건설하고','건설합니다','건설해요','건전한','건졌대요','건졌어요','건조한','건조해서',
    '건조해요','건축이','걷기가','걷기를','걷히겠지','걸까요','걸려요','걸렸나','걸렸어','걸렸어요','걸렸지만','걸리겠다','걸리나요','걸리는','걸리지','걸릴까요','걸어가요','걸어가자','걸어갈','걸어갔어요',
    '걸어서','걸어서요','걸어오고','걸어요','걸었어요','걸으면','걸음만','걸음씩','걸음이','걸작이야','걸정은','걸정하지','걸치고','검사를','검색하는','검색해','검색했어요','검은색','검은색이','검은색이에요',
    '검정색','검정색으로','검진을','검진이','검토가','검토하겠습니다','검토해','겁나요','겁나지','것까지','것들이','것보다','것부터','것으로','것이야','것이야말로','것이에요','것입니다','것처럼','겉모습만',
    '겉모습보다요','겉옷을','게다가','게스트하우스가','게으른','게을러졌어요','게을러진','게임에','게임을','게임의','게임이에요','게임해요','게임했어','겠습니다','겨울에','겨울에는','겨울은','겨울은요','겨울이','겨울이네',
    '겨울이라','겨울이라서','겨울철','겨울철에는','겨울철의','겨자를','격식을','격차가','겪었어요','견뎌요','견해가','견해로는','견해를','결과가','결과는','결과를','결과에','결과예요','결과입니다','결과적으로',
    '결과죠','결론에','결론에서','결론은','결론을','결론적으로','결말이','결석이','결석하면','결석한','결석해도','결석했어요','결승골을','결승에','결승에서','결승이','결승전은','결승전이라서','결실을','결심만',
    '결심을','결심이','결심이에요','결심했어','결심했어요','결정돼요','결정됐어요','결정될','결정은','결정을','결정이','결정이네요','결정이야','결정이었어요','결정하는','결정하면','결정할게요','결정해','결정해야','결정해요',
    '결정했어','결정했어요','결제하면','결제할','결제할게요','결혼기념일이에요','결혼식에','결혼식을','결혼을','결혼해요','결혼했어요','겸손하게','겸손하면','경계가','경계를','경계해야','경고가','경고를','경고했어요','경기가',
    '경기는','경기인가','경기장이','경기해요','경력이','경력직을','경복궁','경복궁과','경복궁에','경복궁은','경복궁이','경비가','경비를','경사가','경상도','경영이','경영하고','경영하세요','경영학과에','경영학을',
    '경영학이래','경우가','경우는','경우에','경쟁력을','경쟁력이','경쟁사는요','경쟁사에','경쟁에서','경쟁은','경쟁이','경제가','경제력이','경제에는','경제에도','경제에서','경제와','경제와도','경제적','경제적으로',
    '경제적이에요','경제적인','경제학을','경제학이','경주에','경주에서','경찰관이','경찰관이에요','경찰서가','경찰에','경찰이','경치가','경치도','경치를','경향이','경험도','경험에','경험에서','경험은','경험을',
    '경험이','경험이라고','경험이야','경험이었겠네요','경험이었어요','경험하고','경험하니까','경험한','경험했어요','계곡물이','계곡에','계곡에서','계곡이','계단으로','계단을','계란만','계란은','계란을','계산기','계산기가',
    '계산은','계산하겠습니다','계산하세요','계산할게요','계산해','계세요','계셔요','계속돼요','계속됐어','계속되고','계속되면','계속된다고','계속하면','계속하세요','계속할','계속해야','계시니','계십니다','계약서','계약서를',
    '계약서에','계약서의','계약이','계약할','계절이구나','계절이에요','계좌를','계층을','계획대로','계획만','계획서를','계획에','계획은','계획을','계획의','계획이','계획이네요','계획이래요','계획이야','계획이에요',
    '계획하고','고개를','고객들이','고객의','고교에','고구려','고구마','고구마가','고구마는','고궁에서','고궁이','고급스러운','고급스러워','고급스러워요','고급이에요','고기가','고기는','고기를','고대사가','고등어를',
    '고등학교','고등학생이에요','고려해야','고려해야지','고르기','고르는','고르세요','고르자','고를게요','고를까요','고마운','고마워','고마워요','고마워하더라','고마워하셨어요','고모가','고모부가','고무신을','고민도','고민이',
    '고민이에요','고민하고','고민하는','고민하세요','고민해요','고생하셨어요','고생한','고생했는데','고생했어요','고생했으니만큼','고소해','고소해요','고속도로','고속도로가','고속도로를','고속도로에서','고속도로예요','고속버스로','고속으로','고양이',
    '고양이가','고양이는','고양이를','고양이요','고와야','고와요','고요하다','고장났어요','고장이라서','고장이에요','고전이죠','고전했어','고정관념에','고조선은','고집도','고집이','고집하면','고집해요','고쳐야겠네요','고쳐야겠다',
    '고추가','고추가루를','고추를','고추장','고추장을','고춧가루가','고춧가루를','고치기','고치면','고치세요','고칠게요','고콧가루','고콧가루가','고통스러운','고통스러웠어요','고통을','고파서','고파요','고팠나','고팠어',
    '고팠어요','고프데','고픈가','고픈데','고함을','고향에','고향을','고향이','고향이세요','곡식은','곡식을','곡식이에요','곡이나','곡이죠','곤란한','곤란해요','곤충도','곧바로','곧이어','골고루',
    '골골루','골골한','골라서','골라야','골라요','골랐어요','골목길','골목길마다','골목길에','골목에','골수가','골수좀','골이에요','골짜기','골짜기에','골짜기의','골치를','골치예요','골프가','골프도',
    '골프를','골프장','골프장에','골프장은','골프장이','곱네요','곱다잖아','곳곳에','곳에서는','곳으로','곳으로요','곳이니까','곳이다','곳이었나','곳이에요','곳이요','공간이','공개가','공개되었어요','공개했어',
    '공개했어요','공격은','공격이','공격하고','공고가','공고를','공공장소에서는','공군에서','공급의','공급이','공기가','공기는','공기를','공놀이하다가','공동으로','공무원','공무원은','공부가','공부도','공부를',
    '공부에','공부하고','공부하기','공부하느라','공부하는','공부하면','공부하면서','공부하세요','공부하죠','공부하지','공부한','공부한다면서요','공부할','공부할걸','공부합시다','공부해','공부해야','공부해야겠어요','공부해요','공부했어',
    '공부했어요','공부했으니까','공사가','공사는','공사를','공사하나','공사하는','공식에','공식적으로','공식적으로는','공식적으로는요','공식적인','공업은','공업이','공업이에요','공업이요','공연도','공연돼','공연돼요','공연될',
    '공연에서','공연을','공연이','공연이네요','공연이었어요','공연이었죠','공연이에요','공연장은','공연장의','공연장이','공연장이네요','공연한','공연해','공연해요','공연히','공영주차장이','공원도','공원에','공원에서','공원으로',
    '공원은','공원이','공유해','공일공','공장에서','공장이','공정하지','공주가','공중으로','공중을','공중전화가','공중전화는','공지가','공지를','공짜로','공짜야','공짜예요','공짜치고는','공책을','공책이에요',
    '공통돼','공통돼요','공통되는','공통된','공통적으로','공통적인','공통점을','공통점이','공포심이','공포증이','공학용','공항버스가','공항버스를','공항에','공해가','공해를','공헌하는','공휴일이','과','과거는',
    '과거보다','과거에','과거에는','과거에서','과까지예요','과목을','과목이','과목이에요','과목이요','과반수가','과부터','과외를','과외비가','과일은','과일을','과일이','과자는','과자하고','과장님','과장님이',
    '과장으로','과장이','과장이야','과정에','과정은','과정을','과정이','과정이었겠네요','과정이에요','과정인가요','과제를','과제의','과학에','과학을','과학의','과학이','과학자가','과학자를','과학자의','과학적으로',
    '과학적이에요','과학적인','관객들이','관객으로','관객이','관계가','관계네요','관계돼','관계돼요','관계를','관계없이','관계없이요','관계에서','관계자','관광객도','관광객이','관광버스가','관광버스를','관광이','관광지가',
    '관광지에서','관광하러','관념이','관념이네요','관람객이','관람불가예요','관람을','관람할','관련돼','관련된','관련이','관련하여','관리도','관리를','관리실에','관리하고','관리해야','관리해요','관습은','관습을',
    '관습이','관심사가','관심사를','관심사야','관심을','관심이','관점에서','관점에서요','관점을','관점이','관중으로','관찰력이','관찰을','관찰이','관찰하세요','관찰해요','관찰했어요','괉장한','괉장해요','광경이',
    '광고가','광고예요','광복절이','광장에','광장에서','광장이','광케이블을','광화문','광화문에서','광화문이','괜찮겠네요','괜찮더라고요','괜찮던데요','괜찮습니다','괜찮아','괜찮아요','괜찮아질','괜찮았어요','괜찮은','괜찮은데',
    '괜찮을','괜찮을까요','괜찮지','괴로움을','괴로움이','괴로워','괴로워하고','괴로워하세요','괴로워하지','괴로웠어요','괴롭지','괴롭히면','괴롭힘을','괽히고','괽히지','굉장했어','굉장히','교과서','교대에서','교대해',
    '교류가','교류를','교문에서','교보문고','교복을','교복이','교사가','교사는','교수님','교수님은','교수님의','교수님이','교수님이네요','교수님이세요','교시까지','교시까지예요','교시는','교시야','교실이','교양을',
    '교양이','교외에','교외에서','교육대학교를','교육받을','교육비','교육비가','교육에','교육열이','교육은','교육을','교육의','교육이','교육자가','교육자는','교육자예요','교육해','교재도','교재를','교직에',
    '교직은','교차로에서','교체가','교체해야겠다','교통사고가','교통사고로','교통은','교통이','교포가','교환을','교환할','교환할까요','교환합시다','교환했어요','교회에','교훈은','교훈을','교훈이','교훈이에요','구간이',
    '구경만','구경하고','구경하는','구경하러','구경하자','구경할','구경했어요','구두도','구두를','구르고','구르며','구름도','구름에','구름이','구름이에요','구멍을','구멍이','구명보트를','구명조끼를','구별돼',
    '구별돼요','구별되는지','구별이','구별하기','구별하세요','구별할','구분돼','구분돼요','구분을','구분이','구분이네요','구분하세요','구분해','구분해야','구분해요','구분했네요','구분했어요','구사합니다','구석구석','구석구석을',
    '구석에','구석이','구성돼','구성원은','구성이','구성하세요','구성할까요','구성합시다','구성해야','구속됐대','구속됐어','구속되었어요','구속했어','구속했어요','구식이야','구역도','구역마다','구역에','구역으로','구역은',
    '구역이','구역이에요','구울게요','구울까요','구워야','구월에','구입은','구입이','구입하셨어요','구입할','구입했어','구입했어요','구조가','구조대를','구조를','구청에','구청에서','구청이','구체적으로','구체적인',
    '구하고','구하려고요','구하면','구해요','구했어요','국가에서','국가예요','국가적','국간장으로','국간장이','국기는','국기예요','국내선','국내선은','국내에','국내외','국내외에서','국력을','국립박물관에','국립은',
    '국립현대미술관에','국물을','국물이','국민들','국민의','국민이','국민적','국방력과도','국사를','국산이야','국산이에요','국산품을','국수가','국수는','국수예요','국어를','국왕은','국왕이','국왕이죠','국적이',
    '국적이에요','국적입니다','국제관계학','국제선','국제선은','국제적','국제적으로','국제적인','국제화','국제화가','국제화의','국화라','국회에','국회에서','국회의','국회의원이','군고구마가','군대에','군데를','군인은',
    '굳어졌어','굳어졌어요','굳어지면','굳었어','굳히고','굴러갔어','굵네요','굵어요','굵어지고','굶었어','굸었어요','굸으면','굽네요','굽히고','궁궐이','궁극적으로','궁극적인','궁금하다','궁금한','궁금해',
    '궁금해서','궁금해요','궁금해져','궁금했어요','권리가','권리를','권리죠','권위가','권위자야','권투를','권해요','귀가하세요','귀가할','귀가했네요','귀가했어요','귀국하니까','귀국할','귀국해','귀국해요','귀국했어',
    '귀국했어요','귀신을','귀여워','귀여워서요','귀여워요','귀여웠어요','귀엽다','귀엽죠','귀중한','귀중해요','귀찮아','귀찮아서요','귀찮아요','귃속말로','귃속에서','귓속이','규모가','규모에','규모예요','규정과',
    '규정을','규정이','규정이요','규정집을','규제가','규칙을','규칙이에요','규칙입니다','규칙적으로','규칙적인','균형이','그','그거군요','그걸로','그것도','그것만','그것만은','그것은','그것을','그곳은',
    '그나마','그녀','그녀가','그녀는','그녀에게','그녀의','그놈이','그늘도','그늘에서','그늘이','그다음에','그다음에는요','그다지','그대가','그대로','그대로예요','그대를','그동안','그때가','그때그때',
    '그때까지','그때는','그때를','그래도','그래서','그래야','그래요','그래픽이','그램에','그랬구나','그랬군요','그랬나','그랬대','그랬더니','그랬어','그랬어요','그랬죠','그러게요','그러나','그러는',
    '그러니까','그러니까요','그러다가는','그러면','그러므로','그러시는','그러하니','그러해서','그런가','그런대로','그런데','그런지','그럴게요','그럴듯한','그럴듯해','그럼요','그렇게','그렇게까지','그렇군요','그렇네요',
    '그렇다고','그렇다더라','그렇습니다','그렇죠','그렇지','그렇지만','그려요','그려져요','그렸어','그렸어요','그루를','그룹에','그룹으로','그룹이','그룹이요','그릇에','그릇을','그리고','그리고요','그리로',
    '그리세요','그리스','그리스예요','그리움이','그리움이에요','그리워','그리워요','그리워졌어','그리워지네요','그리하여','그림에','그림을','그림의','그림이','그림자가','그림자예요','그립지','그맇에','그만둘까요','그만뒀어요',
    '그만큼','그만큼은','그만하면','그만하세요','그만해','그만해요','그만했어요','그분들도','그분은','그분이','그사이','그사이에','그야말로','그을까','그이는','그이를','그이와','그이의','그저께','그저께는',
    '그저께부터','그전에는','그전의','그제서야','그제야','그중에서','그쪽으로','그쳤어','그쳤어요','그치고','그칠까요','그토록','그해가','그해에','극복의','극복이','극복하고','극복하는','극복하세요','극복합시다',
    '극복해서','극복해야','극복했어요','극이야','극이에요','극작가예요','극작가의','극장에서','근거가','근거를','근거하고','근거해서','근교에','근래에','근로자','근로자의','근무는','근무도','근무하고','근무하세요',
    '근무하셨어요','근무해요','근본부터','근본을','근본적으로','근본적인','근원부터','근원은','근원을','근육에','근육을','근육이','근처에','근처에서','글로벌','글쎄요','글쎎요','글쓰기','글쓰기는','글씨가',
    '글씨를','글씨체로','글자는','글자로','글자를','긁으면','금고에','금년에는','금년은','금메달도','금메달을','금메달의','금속이에요','금액으로','금액이','금연이에요','금요일까지만','금요일까지야','금요일까지죠','금요일에',
    '금요일을','금요일이래','금이야','금지돼','금지되었어요','금지를','금지예요','금지입니다','금지했어','금지했어요','금하고','급격히','급속히','급여가','급증했어','급증했어요','급증했죠','급하다고','급하면','급하지',
    '급해서요','급해요','긋겠습니다','긋을까요','긍정적','긍정적으로','긍정적이에요','긍정적인','기간에는','기간은','기간이','기간이라','기간이에요','기계가','기계는','기관마다','기관에','기관에서','기관이에요','기구를',
    '기구에서','기구예요','기기가','기기는','기기를','기기예요','기꺼이','기념으로','기념일이라','기념일이에요','기념입니다','기념품','기념하나요','기념하는','기능이','기능이요','기다려','기다려야','기다려야겠어요','기다려요',
    '기다렸는데','기다렸어요','기다렸죠','기다리겠습니다','기다리는','기다리면서','기다리세요','기다릴','기다릴게','기다릴게요','기대가','기대도','기대돼','기대돼요','기대되나','기대되는데','기대됩니다','기대어','기대에','기대하고',
    '기대하면','기대한','기대할게요','기대합니다','기도가','기도를','기도합니다','기도해요','기도했어요','기독교','기독교가','기독교인이에요','기둥이','기둥이에요','기록돼요','기록되었나요','기록되었습니다','기록될','기록은','기록을',
    '기록이에요','기록적인','기록하세요','기록했어요','기르고','기름을','기름이','기름진','기막히게','기막힎','기반이','기반이죠','기법을','기법이','기법이에요','기본권은','기본부터','기본에','기본을','기본이',
    '기본이에요','기본이죠','기본이지','기본적인','기부까지','기부하지','기분이','기분이에요','기뻐요','기뻐하세요','기뻐했어요','기뻤겠다','기뻤어요','기뽔할','기뽔했어요','기쁨을','기쁨의','기쁨이','기사가','기사를',
    '기상청에서','기성세대는','기성세대도','기성세대와','기숙사에','기술로','기술을','기술이','기술이야','기술자','기술자가','기술자를','기술자요','기술하겠습니다','기술하세요','기술할게요','기술해','기술했나요','기술했습니다','기승이에요',
    '기어요','기억나','기억나요','기억났네요','기억났어','기억났어요','기억되고','기억되나요','기억될','기억됩니다','기억에','기억을','기억이','기억이네요','기억이에요','기억하고','기억할','기억해','기억해요','기업도',
    '기업들의','기업들이','기업에서','기업의','기업이','기업이에요','기업이요','기업인을','기업인이','기여가','기여도','기여를','기여하고','기온이','기온이래요','기운이','기울고','기울어져','기울었어요','기울여',
    '기울여야','기울였어요','기원은','기원을','기원전','기원한다고','기입해','기자가','기자로','기적을','기적이','기적이에요','기준으로','기차가','기차로','기차역이','기차표','기초가','기초부터','기초적인',
    '기초죠','기초하고','기초한','기초해야','기침을','기침이','기침해요','기타를','기호가','기호에','기혼이세요','기혼이에요','기혼입니다','기혼자','기회가','기회는','기회를','기회에','기회예요','기획력이',
    '기획은','기획을','기획이에요','기획했어요','기후는','기후변화가','기후변화의','기후예요','긴다고','긴장감이','긴장돼','긴장돼요','긴장됐어','긴장되겠다','긴장을','긴장하지','긴장해서','긴장해요','길가에','길거리',
    '길거리가','길거리에','길겠네요','길겠다','길대요','길어서','길어요','길어졌어요','길어지고','길어지면','길었어요','길에서','길이가','김민수','김민수로','김민수입니다','김밥에','김입니다','김장은','김철수',
    '김치가','김치도','김치를','김치만두를','김치볶음밥을','김치예요','김치찌개','김치찌개가','김치찌개도','김치찌개를','김치찌개예요','김치찌개요','김치하고','깁스를','깁으면','깊숙이','깊습니다','깊어요','깊어지고','깊었어요',
    '까닭으로','까닭이었군요','까만색으로','까만색이','까매서','까먹었어','까지','까치가','깎아야겠다','깔끔하네요','깔끔해졌네','깔았어','깜빡했어요','깜짝이네요','깜짝이야','깡패가','깨끗이','깨끗하게','깨끗하네요','깨끗한',
    '깨끗할','깨끗해','깨끗해요','깨끗해져요','깨끗해졌겠네요','깨끗해졌다고','깨끗해졌어요','깨달았는데요','깨달았어요','깨달음을','깨달음이요','깨뜨렸어','깨소금을','깨어났어요','깨어졌어요','깨울까','깨졌어요','깨지기','깨지면','깼네요',
    '깼어요','꺼내고','꺼내기','꺼내세요','꺼냈어요','꺼졌어요','껍질을','껍질째','꼬리를','꼬마가','꼭대기에','꼰대도','꼰대라고','꼰대짓만','꼼꼼하게','꼼꼼해요','꼼꼼히','꼼짝도','꼽혀요','꽃놀이',
    '꽃무늬인데','꽃병에','꽃병이','꽃씨를','꾸렸어','꾸몄네요','꾸몄어요','꾸준한','꾸준히','꾸중을','꿀잼이었어요','꿀잼이에요','꿈꿨어요','꿈속에서','꿈이네요','꿈이야','꿈이었네요','꿈이었어','꿈이었어요','꿈이에요',
    '꿨어요','끄덕끄덕','끄덕였어요','끄셨어요','끄어요','끈기가','끈으로','끊겼나','끊겼어','끊겼어요','끊어야겠어요','끊어졌어요','끊었어요','끊으세요','끊이지','끊임없는','끊임없이','끌게요','끌리는','끌어당기듯이요',
    '끌었어요','끓었나','끓이고','끔겠다는','끔찍했어요','끝까지','끝나가는','끝나겠네요','끝나고','끝나는','끝나면','끝나요','끝나자','끝난다','끝납니다','끝났다고','끝났어','끝났어요','끝내고','끝내기에는',
    '끝내는','끝내세요','끝내야','끝냈어요','끝없는','끝없이','끝이다기보다','끼겠습니다','끼세요','끼어들지','끼어요','끼었어','끼웠어','낌네요','나','나가겠습니다','나가기','나가기로','나가면','나가서',
    '나가세요','나가야','나가야겠다','나가요','나가자','나갈게','나갈게요','나갈까','나갈래요','나갔어','나갔어요','나네요','나누고','나누니까','나누어서','나누어져요','나눌게','나눌게요','나눠서','나눠요',
    '나눠진','나뉘는','나뉘었어요','나니까','나더라','나들이','나라가','나라들도','나라로','나라를','나라마다','나라에','나라에도','나라에서','나라예요','나라와','나라의','나란히','나르고','나르는',
    '나르자','나름대로','나름의','나머지는','나무가','나무는','나무보다','나무에서','나무예요','나물에','나물이','나뭇가지가','나뭇잎이','나비가','나비하고','나빠요','나빠져요','나빠지고','나빠진','나빴어요',
    '나쁘게','나쁘잖아','나쁘지','나서겠습니다','나서서','나서야','나서요','나아가고','나아요','나아져야','나아져요','나아졌어','나아졌어요','나아지겠네요','나아지고','나아지는','나아질','나았겠네요','나았구나','나았어요',
    '나오는','나오더라','나오면','나오면서','나오세요','나와요','나왔는데','나왔어','나왔어요','나요','나으면','나으세요','나이가','나이에','나중에','나침반을','나타나','나타났다고','나타났대요','나타났어요',
    '나타내요','나타냈어요','나태주','나흘이면','낙았네요','낙엽으로','낚시꾼이','낚시하기','낚싯대를','난리를','난방비가','난방을','날개가','날개를','날려요','날렸어요','날마다','날씨가','날씨도','날씨라',
    '날씨에','날아가요','날아간','날아갈','날아갔어요','날아다녀요','날아왔어요','날았어요','날에는','날이에요','날짜가','날짜를','날카로워요','낡았어요','남겼네요','남기고','남기세요','남기시겠어요','남녀노소','남달라요',
    '남대문시장에서','남대문을','남동생이','남매가','남산에','남산타워가','남산타워에','남성과','남성만','남았어','남았어요','남으면','남자는','남자예요','남자친구하고','남쪽에','남쪽으로','남편이','남학생이','납득하셨나요',
    '낫겠다','났대요','났어요','났지만','낭비되는','낭비예요','낭비하지','낭비해요','낮말은','낮아서','낮아요','낮아졌어요','낮출게요','낯설어요','낱말의','낳았어요','내과가','내과에','내기로','내년에',
    '내년에는','내놓았어요','내다보는','내달에','내려가요','내려간대','내려갈','내려놓으세요','내려다봤어요','내려야','내려오세요','내려졌나요','내려졌어요','내렸어요','내리나','내밀어','내버렸어요','내보냈어요','내복을','내부를',
    '내성적이에요','내세요','내쉬었어요','내야겠어요','내외가','내용만','내용물을','내용은','내용은요','내용을','내용의','내용이','내용이야','내용이었어','내용이었어요','내용이에요','내일까지','내일까지는','내일도','내일로',
    '내일부터','내일은','내일이','내일이라서','내일이래','내일이야','내일이에요','내일인데요','내줬어요','내후년에','낼게요','냄비에','냄새가','냄새를','냄새만','냄새예요','냈어요','냉동실에','냉면도','냉면에',
    '냉방이','냉장고가','냉장고를','냉장고에','너','너머에','너무','너무나','너무하지','넉넉하게','넉넉하잖아요','넉넉해요','널었어요','넓네요','넓어서','넓어요','넓어져요','넓어졌어요','넓으시네요','넓히고',
    '넓히는','넘겨주세요','넘는다고','넘더라고요','넘어가요','넘어갈게요','넘어갔어요','넘어도','넘어뜨렸어','넘어로','넘어섰어요','넘어오세요','넘어요','넘어져서','넘어져요','넘어졌어요','넘어질','넘었다','넘었어','넘었어요',
    '넘으면','넘치네요','넘치는구나','넘치지','넣어서','넣어야','넣어야지','넣어요','넣었거든요','넣었더니','넣었어','넣었어요','넣으면','넣으세요','넣을게','넣을게요','넣을까','넣을까요','네거리에서','네거리요',
    '네이버에서','넥타이를','넷플릭스를','넷플릭스에서','녀석이야','년대에','년도가','년도에','년밖에','년생이에요','년이나','년이야','년이요','년치고','년형을','노동에는','노동자를','노동자의','노동조합에서','노란색',
    '노란색이','노랗게','노래가','노래네요','노래는','노래라서요','노래를','노래방에','노래예요','노래요','노래하고','노래하나','노래하는','노래하면서','노랫소리가','노력도','노력은','노력을','노력의','노력이',
    '노력이에요','노력하겠습니다','노력하고','노력하기는','노력하는','노력하면','노력한','노력한들','노력할','노력할게','노력할게요','노력할수록','노력해','노력해야','노력해야지','노력했습니다','노력했어','노력했어요','노력했으니만큼','노력했잖아요',
    '노릇해지면','노벨상','노선이','노을을','노을이','노인분께','노잼인','노트를','노트북이','노트에','녹음은','녹음해','녹음했어요','녹일게요','녹화가','녹화를','녹화합니다','논란을','논리가','논리적으로',
    '논문을','논의에','논의할','논의합시다','논의해','논의해야','논쟁은','논합시다','놀기만','놀라서','놀라운','놀라워요','놀라웠어요','놀라지','놀랍게도','놀랍죠','놀랐대요','놀랐어','놀랐어요','놀렸어',
    '놀아서','놀아요','놀았어요','놀이공원','놀이를','놀이터에서','농구가','농구를','농담을','농담이','농담이었어요','농민도','농민들이','농사가','농사를','농사일이','농산물을','농업은','농업이','농작물',
    '농작물이','농촌에','높네요','높다는','높습니다','높아서','높아요','높아져요','높아졌군요','높아졌어','높아졌어요','높아졌으면','높아지면','높여야','높이가','높이를','높이면','놓아두세요','놓았어요','놓았을',
    '놓으면','놓으세요','놓으셨을','놓을게','놓을게요','놓을까','놓자고','놓쳤어요','놓치기','놓치면','놓치지','놨어요','누구나','누구도','누구랑','누구를','누구세요','누구야','누구에게','누구에게나',
    '누구예요','누구의','누구인지','누구하고','누구한테','누구한테서','누구한테요','누나가','누르면','누르세요','누워요','눈가에','눈감아','눈길을','눈동자가','눈물을','눈물이','눈병이','눈부시게','눈빛만',
    '눈빛이','눈빛이었어요','눈사람','눈썹을','눈앞에','눈앞이','눈으로','눈으로만','눈이에요','눈치가','눈치채고','눌러요','눌렀어요','뉴스가','뉴스랑','뉴스를','뉴스마다','뉴스에','뉴스에서','뉴스예요',
    '뉴스요','뉴욕에','뉴턴의','느껴요','느껴져','느껴져요','느껴졌어요','느꼈어','느꼈어요','느끼면','느낌을','느낌이','느낌이야','느낌이에요','느려요','늑대가','는','는가요','는데','늘겠네요',
    '늘려야겠네','늘려요','늘어나고','늘어나요','늘어난','늘어놓지','늘어서','늘어요','늘어졌어요','늘었네요','늘었어','늘었어요','늘었죠','늘었지','늙으셨어요','능동적으로','능력도','능력은','능력을','능력이',
    '늦가을에는','늦게까지','늦겠다','늦겠어요','늦어서','늦어졌어요','늦어질','늦었거든요','늦었냐고','늦었어','늦었어요','늦었을','늦었잖아','늦었지만','늦으니까','늦은데다가','늦을까','늦추면','다가가세요','다가갈게',
    '다가서면','다가오거든요','다가오고','다가오는','다가와서','다녀갔어요','다녀오세요','다녀올게요','다녀왔어','다녀왔어요','다녀요','다녔어요','다니고','다니는','다니다','다니면','다니잖아','다닐게','다듬어서','다루고',
    '다루나요','다루세요','다룹니다','다뤘어','다르거든','다르게','다르겠지만','다르군요','다르네요','다르니까','다르다고요','다르다니까요','다르다면서요','다르면','다르죠','다르지','다르지만','다를요','다름없어요','다릅니다',
    '다리가','다리네요','다리는','다리에','다리요','다리의','다문화','다방이','다섯째예요','다수가','다수네요','다수만','다시','다시는','다양성을','다양성이','다양성이에요','다양하더라','다양하죠','다양한',
    '다양해요','다양해졌어요','다양해지고','다운로드할','다운로드할게요','다음부터','다음부터는','다음에','다음에는','다음에도','다음엔','다음은','다이어트를','다이어트에','다이어트한다더니','다정해요','다졌어요','다짐했어요','다쳤는데','다쳤어',
    '다쳤어요','다치기','다치지','다치진','다투었어요','다툼이','다퉈요','다하겠습니다','다하는구나','다하자','다할게요','다합시다','다해서','다했어요','다했으니까','다행이네요','다행이다','다행이야','다행이에요','다행히',
    '닥쳤어요','닦아요','닦았어요','닦으세요','닦을게요','단계로','단계를','단계별로','단계에','단계예요','단골이','단골이세요','단단한','단단해요','단단히','단맛이','단백질도','단순하게','단순해요','단순히',
    '단어가','단어는','단어를','단어야','단어장을','단위는','단위로','단점은','단점을','단점이에요','단지가','단체가','단체에','단체에서','단추가','단추를','단톡방에','단풍을','단풍이','단호하게',
    '닫아요','닫았어요','닫으세요','닫을게요','닫자마자','닫혔어요','달걀을','달걀이랑','달걸을','달까요','달까지','달라고','달라도','달라서','달라요','달라져','달라졌구나','달라졌네요','달라졌어요','달라졌지',
    '달라지는','달라진','달라질','달랐지','달러에','달러예요','달려갔어요','달려들었어요','달려왔어요','달려요','달력에','달리고','달리기를','달리면','달리세요','달리해','달밖에','달부터','달빛이','달아났어요',
    '달아야','달아야겠어요','달아요','달아줄게요','달았어요','달이에요','달콤하죠','달해요','닭고기','닮았어요','담갔어요','담겼어요','담그고','담그는군요','담그니까','담그때','담당이에요','담당자에게','담당자한테서','담당하고',
    '담당해요','담배를','담아요','담았어','담았어요','담을까요','담임이에요','담장에서','답답하면','답답해요','답변하겠습니다','답변해','답장을','답해도','닷새만','당근이랑','당기는','당기세요','당기지','당길게요',
    '당당하게','당분간','당신','당신도요','당신은','당연하게','당연하죠','당연하지','당연하지요','당연한','당연히','당하는','당하지','당했어요','당황하면','당황하지','당황했어요','닿아요','대가가','대겠습니다',
    '대국이잖아요','대국이죠','대규모','대기업','대기업에서','대기업은','대기업이','대기해','대낮에','대다수의','대단하네','대단하네요','대단하다','대단하시네요','대단한','대단해','대단해요','대단했어','대단했어요','대단히',
    '대담하네요','대답을','대답이','대답하세요','대답해','대답했어요','대더라고요','대도시에','대려고','대륙은','대리인은','대문을','대박이네요','대박이었어요','대보름이라서','대부분','대부분의','대부분이에요','대비해서','대비해야',
    '대사가','대사관이','대상자가','대성공이네요','대신에','대신해서','대신했죠','대여섯','대응이','대응하자고','대응해야','대입하면','대입해','대전에','대접을','대접할게요','대중교통은','대중교통을','대중교통이','대중문화가',
    '대중문화에','대중적이에요','대책을','대책이','대처였네요','대처하는','대처해요','대처했네요','대체로','대출금이','대출을','대통령','대통령상을','대통령의','대통령이','대표가','대표로','대표로서','대표예요','대표적이에요',
    '대표적이지','대표적인','대표해요','대하는','대학교','대학교는','대학교를','대학교수가','대학교에','대학교에서','대학병원에서','대학생이야','대학생이에요','대학에','대학에서','대학원에','대학원에서','대한민국','대합실에서','대해서',
    '대해서도','대해서요','대해야','대해요','대했거든요','대화가','대화로','대화를','대화에','대화하고','대화하면','대회를','대회에','대회에서','대회예요','댓글도','댓글을','댓글이','댔어요','더',
    '더구나','더더욱','더러워요','더러워져','더러워졌어요','더불어','더우니까','더우면','더욱더','더욱이','더운가','더워서','더워요','더웠어','더웠어요','더위가','더위를','더위에','더하기','더하다고',
    '더해요','덕분에','덕분이야','덕분이에요','덕분이지','덕분인가요','덕이야','덕혜공주가','던졌어','던지고','던지세요','던질게요','덜','덥네요','덧붙이겠습니다','덩어리가','덩어리로','덮으면','데려가야','데려다줄게요',
    '데려와도','데리고','데었어요','데이터','데이터가','데이터도','데이터를','데이트','도','도구가','도까지','도달했어요','도대체','도덕적으로','도둑을','도둑이','도래요','도로가','도로는','도로를',
    '도로예요','도로의','도리어','도망가다가','도망갔어','도망갔어요','도망을','도망쳤어요','도망친','도매보다','도서관','도서관에','도서관에도','도서관이에요','도서로','도세요','도시가','도시네요','도시락을','도시로',
    '도시를','도시보다','도시에','도시에서','도시에서는','도시에서요','도시예요','도심에','도예요','도와드릴게요','도와드릴까요','도와요','도와주고','도와주기는커녕','도와주려다가','도와주세요','도와주셔서','도와주셨어요','도와주시네요','도와주신',
    '도와주잖아','도와줄','도와줄까요','도와줘서','도와줘요','도와줬어요','도우면','도움말을','도움을','도움이','도입해야','도입했어요','도자기가','도자기를','도장을','도저히','도전을','도전하면','도전하세요','도전해',
    '도중에','도착하는','도착하면','도착하자마자','도착한','도착할','도착해요','도착했어','도착했어요','도쿄까지','독감에','독감을','독립운동을','독립했어요','독서가','독서는','독서도','독서를','독소가','독일어를',
    '독일에','독창적이에요','독특하구나','독특하지','독특한','독특해','독특해서','독특해요','독하게','독학이래요','독학치고','돈보다','돌려주라고','돌려주세요','돌려줄게요','돌려줘','돌려줘야','돌리세요','돌멩이를','돌보는',
    '돌봐요','돌아가기','돌아가세요','돌아가셨거든요','돌아가야','돌아가요','돌아갈','돌아다녔어요','돌아다니면','돌아보면','돌아보지','돌아봤어요','돌아서서','돌아오면','돌아올','돌아와요','돌아왔어','돌아요','돌이네요','돌이키고',
    '돌이킬','돗자리를','동갑이야','동그라미를','동그랗게','동기가','동기들이랑','동기를','동네가','동네는','동네로','동네에','동대문에','동등하게','동등한','동료가','동료는','동료야','동료에게도요','동료예요',
    '동문서답이네','동물원에','동물원에서','동물은','동물을','동물의','동물이','동물이죠','동부에','동사가','동사는','동사로','동생은','동생이','동생이요','동서남북','동시에','동아리','동아리에','동아리예요',
    '동아시아는','동안이요','동양이나','동양인에','동의가','동의하세요','동의하셨나요','동의한다는','동의합니다','동의해','동의해요','동의했습니다','동이에요','동일한','동작을','동전이','동쪽에서','동창을','동포가','동행해',
    '동호회에','동화를','동화에','동화에서도','동화책을','돼지고기를','돼지고기예요','됐네요','됐대요','됐어요','됐으면','되겠네요','되겠다','되겠어요','되나요','되네요','되는데요','되니까','되니까요','되다',
    '되돌릴','되돌아갈','되돌아봤어요','되돌아왔어요','되려면','되살리려는','되세요','되시니까','되어도','되었어요','되잖아요','되찾았어요','되풀이되고','되풀이하지','된장도','된장으로','된장은','된장찌개','된장찌개도','된장찌개를',
    '된장찌개예요','될까요','됩니다','두꺼운','두꺼워요','두껍네요','두께가','두드러져요','두드려','두드렸는데','두드리고','두려움을','두려워하지','두렵지','두렵지만','두르세요','두리번거리고','두부를','두세요','두통약',
    '두통이','둘러보고','둘러보세요','둘러봐도','둘러싸고','둘러싸여','둘러싸였어요','둘렀어요','둘이서','둥글네요','둥글어요','둥지가','둬야지','뒀는데','뒀어요','뒤늦게','뒤따라요','뒤라서','뒤에는','뒤져도',
    '뒤집어야','뒤집어요','뒤집으세요','뒤쪽에','뒤쪽으로','뒤처져','뒤편에','뒷골목에','뒷모습이','뒷문으로','뒷산에','드디어','드라마','드라마가','드라마나','드라마네','드라마를','드라마만','드라마에','드라마예요',
    '드라마요','드라마의','드라이기로','드라이버가','드라이브가','드러났어','드러났어요','드려도','드려요','드리겠습니다','드리면요','드리자','드릴게요','드릴까요','드릴이','드물어','드물어요','드세요','드셨어요','드시겠어요',
    '드시고','드시는','드실래요','든든해요','듣기와','듣는다','듣으니까','들까요','들렀어요','들려서요','들려오는','들려와요','들려요','들려주세요','들렸어','들렸어요','들르려고요','들를게요','들를까요','들리고',
    '들리는','들리는구나','들면요','들어가고','들어가네','들어가요','들어갔어','들어갔어요','들어볼게요','들어서','들어서자','들어섰네요','들어섰어요','들어야','들어오던','들어오면','들어오세요','들어온','들어올','들어왔는데',
    '들어요','들어주세요','들었나','들었네요','들었는데','들었어','들었어요','들었을','들여놓았어요','들여다보고','들여야','들였어요','들으니까','들으면','들으면서','들으시다시피','들으시더라','들을지','들이마셨어요','들이켰어요',
    '들키면','듯싶어요','듯했어요','등급으로','등록금이','등록되어','등록은','등록을','등록증을','등록하면','등록할','등록했어요','등산로는','등산보다','등산을','등산이','등산이요','등산하러','등산하면서','등산한',
    '등산할','등산합시다','등산화를','등이에요','등장해','등장했어요','디스크가','디자이너가','디자이너는','디자인도','디자인이','디자인이었죠','디저트가','따님이','따뜻하게','따뜻하겠네요','따뜻하고','따뜻하죠','따뜻한','따뜻함을',
    '따뜻해서','따뜻해요','따뜻해졌어요','따라가지','따라갈게요','따라다녀','따라서','따라야','따라오세요','따라올','따라와','따라잡을','따라했으면','따로따로','따르는','따르면','따르죠','따를게요','따릅시다','따스하다',
    '따지고','딱딱해','딱어요','딱이다','딱이야','딱이에요','딸기를','딸기맛','딸아이가','딸이야','땄어요','땅바닥에','땅속에','땅속에서','땅이네요','땅이에요','때까지','때까지요','때때로','때라도',
    '때로는','때리면','때문에','때문에요','때문이래','때문이래요','때문이었군요','때문이었어요','때문이에요','때문이죠','때문인','때문인가','때문일까요','때부터','때였네요','떠가는구나','떠나갔어','떠나는','떠나시는','떠나온',
    '떠나요','떠났어','떠났어요','떠들썩해','떠들어요','떠올랐어요','떠올리면','떠졌구나','떡국을','떡볶이','떡볶이가','떡볶이를','떨려요','떨어뜨렸어요','떨어뜨리면','떨어져','떨어져서','떨어졌대요','떨어졌어','떨어졌어요',
    '떨어지고','떨어지기','떨어지네요','떨어지지','떨어진다잖아','떨어질','떴어요','떼게요','또다시','똑같아요','똑같이','똑똑하구나','똑똑하잖아','똑바로','뚜렷한','뚜렷해요','뚫어야','뚱뚱한','뛰놀고','뛰어갔어',
    '뛰어나갔어','뛰어나네요','뛰어나왔어','뛰어나요','뛰어납니다','뛰어내리면','뛰어넘어서','뛰어노는','뛰어놀고','뛰어놀곤','뛰어다녀서','뛰어들어서','뛰어들었어요','뛰어서','뛰어올랐어','뛰어왔어','뛰어요','뛰었어요','뜨거우네요','뜨거우니까',
    '뜨거운','뜨거워','뜨거워요','뜨겁죠','뜨끈한','뜨세요','뜨자마자','뜯어서','뜻대로','뜻밖에','뜻밖의','뜻으로','뜻이야','뜻이에요','뜻인지','뜻하는','띄더라','띄웠어','라도','라디오',
    '라면만','라면을','라운드','라이벌이야','라이터','라인을','라켓을','러시아는','러시아예요','레몬즙을','레스토랑','레스토랑도','레스토랑에','레스토랑이','레시피','레시피가','레시피를','레이저','레저를','렌즈를',
    '렌터카가','렌터카를','로','로고가','로맨스','로션을','로터리에서','를','리그가','리더가','리더라고','리더로서','리듬이','리듬이에요','리뷰가','링크로','마감을','마감이','마감일이','마나야',
    '마누라한테','마늘을','마늘이','마늘이에요','마다','마당에서','마당으로','마당을','마디만','마땅해','마라톤에','마련됐어요','마련이에요','마련이지','마련할','마련할게요','마련해','마련해야','마루가','마루에',
    '마르겠어요','마르면','마르면서','마리가','마리예요','마무리를','마사지','마사지를','마세요','마셔도','마셔야','마셔야겠어요','마셔요','마셨는데','마셨어요','마셨지','마술사인가','마스크','마스크도','마스크를',
    '마시겠습니다','마시고','마시는','마시는구나','마시러','마시면','마시면서','마시세요','마시지','마실게요','마실래요','마약은','마요네즈를','마을에는','마을은','마을을','마을이','마을이었어요','마음가짐이','마음껏',
    '마음대로','마음만으로도','마음먹으면','마음속에','마음속으로','마음씨가','마음에','마음으로','마음을','마음의','마음이','마음이네요','마음이야','마음이에요','마이크','마주쳤어','마주쳤어요','마지막','마지막까지','마지막에',
    '마지막이에요','마찬가지로','마찬가지야','마찬가지예요','마찬가지지','마찰이','마쳤어요','마칠게요','마침내','마케팅','마케팅부가','마케팅부에서','마케팅의','마크가','마트도','마트에','마트에서','막걸리','막내야','막혀서',
    '막혀서요','막혀요','막혔습니다','막혔어요','만','만나겠네','만나고','만나니까','만나면','만나서','만나셨겠네요','만나요','만나자','만나자고','만날까','만날까요','만남은','만남을','만남이','만남이었어요',
    '만났네','만났네요','만났는데','만났어','만났어요','만두를','만드는','만드신','만들고','만들러','만들려면','만들어','만들어서','만들어야','만들어야겠다','만들어요','만들어져요','만들어졌어요','만들어진','만들었거든요',
    '만들었대','만들었어','만들었어요','만들자','만들죠','만들지','만만하지','만이네','만이에요','만일을','만장일치로','만점을','만족도','만족도가','만족스러운','만족스러워','만족시킬','만족이','만족하고','만족해',
    '만족해요','만지고','만지면','만지지','만하네요','만해요','만했어요','만화가가','많거든요','많겠다','많구나','많나요','많네요','많다고','많더라','많더라고요','많아서','많아서요','많아야','많아요',
    '많아졌나','많아졌어요','많았대요','많았어','많았어요','많았죠','많으면','많으셨습니다','많으셨어요','많은데다가','많을수록','많이','말고요','말기에','말라고','말라서','말라요','말랐나','말려야','말렸어',
    '말로는','말릴게','말썽을','말씀드려','말씀드리겠습니다','말씀드린','말씀드릴','말씀드릴까요','말씀은요','말씀을','말씀이니까요','말씀하세요','말씀하셨는데','말씀하셨어요','말씀해','말씩해야','말았어요','말없이','말에는','말이네요',
    '말이에요','말투가','말하기','말하나','말하는','말하면','말하세요','말하자고','말하죠','말하지','말할게','말할게요','말할까','말해도','말해야','말해야지','말해요','말했더니','말했어','말했어요',
    '말했잖아','말했잖아요','맑겠어요','맑아서','맑아요','맑았어요','맘대로','맙시다','맛없어요','맛있게','맛있겠다','맛있는','맛있다고','맛있다는','맛있다더라','맛있대요','맛있더라고요','맛있던지','맛있어','맛있어서',
    '맛있어요','맛있어지고','맛있어질','맛있었어요','맛있으니','맛있으니까요','맛있으면','맛있을까요','맛있죠','맛있지','맛집도','맛집에','맛집으로','맛집을','맛집이','맛집이네요','맛집인가','망설이고','망원경으로','망쳤어',
    '망치하고','망했대','망했대요','망했어','맞서야','맞아서','맞아야','맞아요','맞았어','맞았어요','맞으면','맞은편에','맞이하여','맞추기','맞출게요','맞춰서','맞췄더라면','맡겨요','맡겼어요','맡기겠습니다',
    '맡기고','맡아도','맡았어','맡았어요','맡을게요','매너가','매달려','매달자','매력은','매력이','매력이에요','매력이죠','매력적이야','매력적이에요','매세요','매스컴에서','매야지','매우','매운데','매워요',
    '매워질','매일요','매장에','매진될','매체를','매출은','매출이','맥주도','맥주에','맺었어','머리가','머리끈으로','머리를','머리말을','머리색이죠','머리카락의','머리카락이','머리카락이에요','머리칼이','머릿속이',
    '머무를','먹겠습니다','먹겠어요','먹고살기','먹고살았어','먹기가','먹기로','먹는다는','먹는다면서요','먹는대','먹다가','먹다가는','먹방을','먹방이었어요','먹어도','먹어서','먹어야','먹어야겠다','먹어야겠어요','먹어야죠',
    '먹어야지','먹어요','먹었거든요','먹었냐고','먹었는데','먹었니','먹었다고','먹었어','먹었어요','먹었으면','먹였어요','먹으라고','먹으러','먹으려고','먹으면','먹으면서','먹으세요','먹을게','먹을게요','먹을까',
    '먹을까요','먹을래','먹을래요','먹을지','먹이는','먹이를','먹자고','먼저야','먼지가','먼지를','멀어요','멀어졌어','멀어졌어요','멀었어요','멈추면','멈추세요','멈출게','멈춰요','멋있네요','멋있는',
    '멋있다','멋있어','멋있어요','멋있었어요','멋있죠','멋져요','멋졌어','멋졌어요','멋지다','멍하게','멍하니','멍했어요','멎었어','메뉴가','메뉴로','메뉴를','메모해','메시지','메시지를','메시지요',
    '메우면','메워야','멤버들을','며느리가','며느리를','며칠까지','며칠이에요','면담이','면봉으로','면에서','면역력이','면적도','면적이','면접에','면접에서','면접이','면했어요','면허가','면허를','멸치로',
    '명까지','명단을','명동에','명동에서','명동은','명동을','명동이','명령어를','명령어인데요','명령에','명령을','명령했어요','명상을','명소를','명씩이에요','명예를','명으로','명의로','명의예요','명이나',
    '명이네요','명이면','명이서','명이야','명이에요','명이요','명인데','명절에','명절에는','명절이니까','명절이라','명정도예요','명함이에요','명확하지','명확한','몇으로','몇이야','몇이에요','모금만','모기를',
    '모기에','모기장을','모내기','모니터가','모델이','모델이에요','모두가','모두의','모래가','모래는','모래사장에서','모래에서','모레는','모르게','모르겠어요','모르는','모바일','모범이','모색하고','모서리를',
    '모셨어요','모습을','모습이','모습이에요','모시고','모았어요','모양이','모양이에요','모여들고','모여서','모여요','모였네요','모였어요','모으는','모을게','모임에','모임을','모임이','모자라요','모자를',
    '모자요','모조리','모집하고','모처럼','모통이에서','모퉁이에','목걸이를','목도리를','목록을','목사님','목소리가','목소리도','목소리예요','목숨을','목요일에','목욕탕에','목욕했어요','목적으로','목적을','목적이',
    '목적이에요','목적인가','목표가','목표네','목표는','목표는요','목표로','목표를','목표에','몰라서','몰라요','몰랐거든요','몰랐네요','몰랐는데','몰랐어','몰랐어요','몰려들었어요','몰려오고','몸매가','몸무게가',
    '몸살이','몸속에','몸짓으로','못','못됐어','못생겼다고','못지않아요','못하고','못하던','못해요','못했어요','못했죠','묐어들었어요','묘사가','묘사했어요','무거운','무거운데','무거워서','무거워요','무거웠어',
    '무거웠어요','무겁네요','무겁다','무겁지','무게가','무관심이','무관심해','무국은','무궁화가','무궁화호요','무기가','무너졌대요','무늬가','무대가','무대에서','무더위가','무덤은','무덤을','무덥다','무뎌져서',
    '무떠졌어요','무렵에','무료네요','무료라서','무료로','무료야','무료예요','무릎을','무릎이','무리가','무리하면','무리하지','무리한','무리할까','무사하세요','무사해요','무서운','무서워','무서워요','무서웠거든',
    '무서웠겠다','무서웠어요','무섭긴','무섭지','무섭지만','무시하고','무시하는','무시한','무시해요','무알코올이에요','무어라','무엇에','무엇을','무엇이','무엇일까','무역이','무용가예요','무용을','무의미해요','무조건',
    '무지개가','무책임해','묶여서','묶을게요','묶을까요','문구점에서','문맥으로','문맥을','문명을','문물이','문밖에','문법부터','문법은','문법이','문법이에요','문법이요','문법책을','문서를','문서에','문서에서는',
    '문어체로','문이군요','문자를','문장은','문장을','문장의','문제가','문제네요','문제는','문제도','문제로','문제를','문제야','문제에','문제였어요','문제예요','문제와','문제의','문제점이','문제지만',
    '문틈으로','문학에','문학으로서','문학을','문학적','문화가','문화네요','문화는','문화도','문화를','문화에','문화예요','문화요','문화유산으로','문화의','문화재예요','문화적','문화적인','묻었어요','물가가',
    '물가도','물가만','물감이','물건들이야','물건을','물건이','물건이요','물결이','물고기가','물고기를','물기를','물놀이','물놀이하자','물들었어요','물러나자','물러났대요','물론','물론이요','물론이죠','물론이지',
    '물리학을','물리학의','물병을','물속에','물속이','물어뜯는','물어보세요','물어보셨어요','물어볼걸','물어볼게요','물어봐야','물어봤는데','물어봤어','물어봤어요','물었어요','물으려고요','물은요','물이라도','물이라서요','물이랑',
    '물이에요','물질은','물질의','물질적','물체가','물품을','뭐든지','뭐라고','뭐라도','뭐랬어','뭐부터','뭐였어요','뭐예요','뭐일까요','뭔데요','뭘까요','뮤지컬은','뮤지컬을','뮤지컬이에요','믌치죠',
    '미국에','미국에서','미끄러울','미끄러울까','미끄러워','미끄러워요','미끄러져요','미끄러질','미끄럼','미디어도요','미디어로','미디어를','미래가','미래를','미래에','미루면','미만은','미사에','미사일','미세먼지가',
    '미세먼지로','미세요','미소가','미소를','미술관에','미술관에서','미안해','미안해요','미역국을','미용실에','미용실에서','미용실이에요','미움을','미워하는','미워하지','미인이네요','미쳐요','미치지','미터가','미터예요',
    '미터정도예요','미혼이세요','미확인','민간이','민간인은','민감한','민감해요','민망하네요','민수랑','민수야','민수에게','민수예요','민수한테','민음이에요','민족이에요','민주주의의','민주화','민준이에요','민트맛','민호가',
    '믿어야','믿어요','믿어지��','믿었는데','믿었어요','믿으면','믿음을','믿음이','밀가루가','밀려서','밀리미터','밀어야','밀접한','밑거름이에요','밑바닥을','밑줄을','바가지를','바구니를','바깥쪽에','바깥쪽이',
    '바꾸고','바꾸니','바꾸려면','바꾸지','바꿀게요','바꿀까','바꿀까요','바꿀지','바꿔야','바꿔요','바꿨어요','바뀌겠어','바뀌니까','바뀌면','바뀌셨어요','바뀌었네요','바뀌었다고','바뀌었습니다','바뀌었어요','바뀌었으니까',
    '바나나','바나나가','바나나를','바느질','바느질해서','바늘에','바다가','바다도','바다로','바다를','바다에','바다에는','바다에서','바닥에','바닥에서','바닥이','바닷가','바닷가에','바닷가에서','바닷물은',
    '바닷물이','바라보고','바라요','바람도','바람에','바람이','바람직해요','바랍니다','바로는','바로잡아야','바르고','바르세요','바르시지','바르지','바를까','바비큐를','바빠서','바빠요','바빴거든','바빴거든요',
    '바빴나','바빴어요','바빴지만','바쁘기','바쁘니','바쁘다고','바쁘죠','바쁘지','바쁜가','바쁜데','바삭해요','바이러스에','바이올린을','바이트가','바지가','바지를','바지에','바쳤어요','바퀴가','바탕으로',
    '박물관에','박물관이네요','박사님','박수가','박수를','박스가','박스를','박아야','박혔어','밖에','밖에서','밖에서는','밖에서는요','밖으로','반가운가','반가워','반가워서','반가워요','반가워하시겠어요','반가웠겠네요',
    '반가웠겠다','반가웠나','반가웠어요','반갑겠다','반갑습니다','반기며','반까지','반달곰은','반대가','반대는','반대로','반대예요','반대편에','반대하는','반대하실','반대합니다','반대해요','반대했어','반대했어요','반도체',
    '반도체를','반도체에','반도체와','반드시','반말로','반말을','반말해도','반면에','반바지를','반박했어요','반밖에','반반으로','반반이','반반이에요','반발이','반복되고','반복되기','반복되지','반복될','반복하네',
    '반복하는','반복하지','반복해서','반성이','반성하고','반성해야겠다','반영합시다','반영했어요','반으로','반응은','반응은요','반응이','반응이에요','반응하지','반이면','반이에요','반입니다','반장은','반장이에요','반죽을',
    '반지네요','반지는','반지를','반지야','반지에','반짝거려','반짝반짝하네요','반짝여요','반짝이는','반찬에','반찬이','반창고','반했어요','받더라니','받아들여야지','받아들이기','받아들이면','받아들일게요','받아서','받아야',
    '받아요','받았거든','받았습니다','받았어','받았어요','받으면','받으세요','받으셨어요','받침이','받침이요','발가락을','발걸음을','발견됐대요','발견됐어','발견됐어요','발견됐으면','발견되지','발견하면','발견했어요','발급받아야',
    '발길이','발끝으로','발달되고','발달에','발달했어','발달했어요','발등에','발라드를','발라야겠어요','발랐어요','발레를','발령되었어요','발명은','발목을','발바닥이','발생했다고','발생했대','발생했대요','발생했습니다','발생했어요',
    '발언이네','발음도','발음은','발음을','발음이','발음해요','발의되었다고','발의했어요','발자국이','발전됐어요','발전에','발전으로','발전을','발전의','발전이','발전하고','발전한','발전할','발전해야','발전했어',
    '발전했어요','발전했죠','발전했지','발톱깎이','발톱을','발표가','발표된대','발표를','발표에','발표에서','발표입니다','발표할','발표해','발표했다','발표했습니다','발표했어요','발휘하세요','밝기를','밝아요','밝아졌네요',
    '밝아지기','밝혀냈어요','밝혀졌군요','밝혀졌어요','밝혔어요','밟아야','밟았어요','밤낮으로','밤늦게까지','밤마다','밤말은','밤에는','밤에도','밤이니까','밤이야','밤중에','밤하늘에','밥그릇이','밥맛이','밥상을',
    '밥솥을','밥은커녕','밥하고','방면으로','방문이','방문이에요','방문한','방문했어','방문했어요','방바닥이','방법으로','방법은','방법을','방법이','방법이네요','방법이에요','방송국에서','방송국이요','방송부에','방송사',
    '방송해요','방식만','방식으로','방식은','방식을','방식이','방심하면','방안을','방에는','방울이','방지를','방지하려면','방학에','방학에도','방학이','방해가','방해만','방해하지','방해했는데요','방향으로',
    '방향을','방향이','방향이에요','밭에서','배경을','배경이','배고파서','배고파요','배고파져','배고파져요','배고파졌어요','배고팠어요','배고프지','배고플까','배꼽이','배낭을','배달비가','배달앱으로','배달의민족','배드민턴',
    '배려가','배려해야지','배로도','배불러요','배송비는','배신하지','배었어','배우가','배우고','배우기가','배우기로','배우는','배우니','배우들','배우래','배우러','배우려는','배우를','배우면','배우의',
    '배우자의','배울까요','배울수록','배워야','배워요','배웠거든','배웠어','배웠어요','배추김치가','배추를','배치를','배터리를','백문이','백성을','백칠십오','백화점','백화점에서','밴드가','뱃사람이셨어','버려도',
    '버려야','버려요','버려졌대요','버려진','버렸어','버릇이','버리겠어요','버리기','버리세요','버섯이','버스가','버스는','버스로','버스를','버스예요','버전도','버터를','버텨야','버텼더니','버튼을',
    '버튼이요','버티면','번개가','번거로워요','번뿐이에요','번역가가','번역이','번역해','번이나','번이라도','번이에요','번이요','번지가','번지예요','번째에','번째예요','번째인데','번호가','번호를','번호예요',
    '벌금을','벌금이','벌금이에요','벌레가','벌리고','벌써부터','벌써요','벌어요','벌어졌어요','벌어진','벌이고','벌컥벌컥','범위가','범위를','범인은','범인을','범인의','범인이','범인이에요','범죄물이',
    '범죄율이','법률이','법안을','법안이에요','법원에','법으로','법이군요','법이야','법이에요','법인가요','법칙을','벗길까요','벗어야','벗어요','벗었는데','벗으세요','벚꽃도','벚꽃이','벚꽃잎이','베개가',
    '베개로','베를린이','베었어','베었어요','벤치에','벨트를','변경될','변경이','변경할까요','변동이','변명은','변명하지','변수가','변신이야','변하고','변하네요','변하지','변했어','변했어요','변호사',
    '변호사는','변호사와','변화가','변화는','변화되고','변화로','변화를','변화에','변화예요','변화할','변화해야','변화했어요','별다른','별도입니다','별로였어요','별로인','별말씀요','별말씀을요','병들어요','병실에',
    '병아리가','병원에','병원에서','병원으로','병원이','병원이에요','보거나','보겠습니다','보고서','보고서는','보고서를','보고서만','보고서에','보고할','보고했어요','보관에','보관하세요','보관해야','보관해야겠다','보관해요',
    '보관했어요','보기에는','보내겠습니다','보내려고요','보내려다가','보내세요','보내야','보내오고','보내지','보낼게','보낼게요','보냈는데','보냈어요','보너스를','보는데','보니까','보다','보다가','보도에','보도했어',
    '보라색','보라색이','보람이','보려고요','보려면','보름달이','보름달이라서','보름달이에요','보리차는','보리차를','보면서','보살피고','보상을','보상이','보석이','보세요','보셨어요','보수적이세요','보습제를','보시다시피',
    '보실래요','보안을','보안이','보여서','보여요','보여줄까요','보였어','보였어요','보완해야','보이기','보이네요','보이는군요','보이더라','보이세요','보이잖아','보이잖아요','보이지','보인다','보인다고','보인대요',
    '보입니다','보자고요','보자기로','보장돼요','보장된','보장은','보장이','보장하는','보장할','보장합니다','보전이','보조금을','보존에','보존이','보존해야','보증금이','보충하세요','보통이에요','보편적','보편적인',
    '보험에','보험은','보험을','보험이랑','보험이요','보호가','보호돼요','보호를','보호법이','보호법이에요','보호소에','보호해야','복구에','복도에서','복무했어','복사기가','복사해','복숭아','복숭아가','복습이',
    '복습했어','복잡하게','복잡하죠','복잡한','복잡해','복잡해요','복잡했어요','복지도','복지를','볶아요','볶으세요','볶을까요','볶음밥','볶음밥에','본격적인','본론에서','본보기예요','본부에서','본부요','본사가',
    '본사에서','본선에서도','본성은','본인의','본인이','본질이','본질이야','볼게요','볼까요','볼래요','볼수록','볼일이','봄바람이','봄이네요','봄이라','봄이에요','봅시다','봉사하고','봉사활동도','봉사활동은요',
    '봉사활동을','봉준호','봐야겠네요','봐야겠다','봐야겠어요','봐줄게','봤거든요','봤겠네요','봤는데','봤대요','봤더니','봤어야','봤어요','봤으면','봤지만','뵙겠습니다','부근에','부끄러움을','부끄러워서','부끄러워서요',
    '부끄러워요','부담스러워요','부담이','부담할게요','부대에서','부대였어','부동산','부동산을','부드러운','부드러워요','부드럽게','부딪쳤어요','부딪혔을','부러워','부러워요','부러워하지','부러졌대','부러졌대요','부러졌어','부럽다',
    '부렸어','부르세요','부를게','부릅시다','부모가','부모님','부모님과','부모님께','부모님도','부모님은','부모님을','부모님의','부모님이','부모님하고','부문에서','부부는','부분도','부분에','부분으로','부분은',
    '부분을','부분이','부분이에요','부분적으로만','부산까지','부산보다','부산에','부산에서','부산에서도','부산은','부산이','부산이면','부산이에요','부상이','부상이야','부서를','부서에','부서져요','부서졌어','부셔요',
    '부었네요','부었어요','부었으니까','부엌에서','부엌에서요','부에서','부위가','부응하면','부인이세요','부자가','부작용이','부잣집이','부장님','부장님께','부장님도','부장님을','부장님이','부정이야','부정적이야','부정적인',
    '부정하면','부족과','부족에서','부족이','부족하긴','부족하다거나','부족하면','부족한','부족합니다','부족해','부족해서','부족해요','부족해지는','부족했어요','부지런하다','부지런하시네요','부지런하죠','부지런함이','부지런히','부채가',
    '부채춤이','부처님','부츠를','부치러','부친께서는','부탁드려요','부탁드립니다','부탁을','부탁인데요','부탁할','부탁합니다','부탁해도','부탁해요','부터','부품을','부품이','부피가','부회장으로','북부에는','북쪽이',
    '북한산','북한이에요','분노가','분노를','분량이','분리가','분리됐어','분리수거부터','분리해','분마다','분명한','분명해지고','분명히','분밖에','분석만','분석이','분석하다','분석합시다','분석해','분식집에서',
    '분야가','분야네요','분야를','분야에','분야에서','분야요','분야의','분위기','분위기가','분위기도','분위기를','분으로','분이나','분이네요','분이라','분이라도','분이래요','분이면','분이야','분이에요',
    '분이죠','분이지','분인데','분정도','분주하다','분포해','분필로','분필밖에','분홍색이','불가능해요','불가입니다','불가피해졌어요','불고기','불고기가','불고기도','불고기로','불고기를','불공평한','불공평했어요','불과해',
    '불교가','불교를','불구하고','불국사하고','불꽃놀이','불닭볶음면이','불러야','불러야겠다','불러야겠어요','불러요','불러일으켰어','불러줄게요','불렀어요','불리지','불리해','불리했어요','불만이','불빛이','불상이래요','불쌍해',
    '불쌍했어','불안이','불안정해요','불안해','불안해요','불어서','불어온다','불어요','불여일견이에요','불완전해요','불의를','불이익이','불이익이요','불편하지','불편한','불편해요','불평등하다는','불평만','불필요한','불합격',
    '불합격했어요','불행은','불행하다고','불확실해서','붐벼요','붓글씨','붙들고','붙었어요','붙여도','붙여야겠어요','붙이세요','붙잡았어','붙잡혔대','브랜드','브랜드가','브랜드를','브랜드야','브랜드요','블라우스','블로그',
    '블로그에','블루투스를','비격식이','비격식이에요','비결이','비겼어','비교네요','비교적','비교하게','비교하면','비교하지','비교해','비극이야','비극이에요','비난을','비누로','비늘부터','비닐봉지','비닐을','비둘기가',
    '비둘기는','비디오를','비로소','비롯됐어','비롯하여','비만이','비명이','비밀번호가','비밀번호는','비밀번호를','비밀번호예요','비밀을','비밀이','비밀이래요','비밀이야','비밀이에요','비밀인데','비바람이','비벼야','비빔국수',
    '비빔국수요','비빔밥','비빔밥에','비빔밥으로','비빔밥은','비빔밥을','비빔밥이','비빔밥이야말로','비빔밥이에요','비빔밥이요','비빔밥하고','비상벨을','비상사태가','비상사태를','비서에게','비슷하지만','비슷한','비슷해도요','비슷해서','비슷해요',
    '비싸네요','비싸니까','비싸다','비싸다고','비싸다니','비싸다더라','비싸도','비싸요','비싸죠','비싸지','비싸지만','비었네','비용만','비용은','비용을','비용이','비우면','비웃으면','비웠는데','비유가',
    '비율은','비율이','비자를','비자요','비중이','비치는','비켜갈게요','비타민','비타민으로','비타민을','비타민이','비판과','비판은','비판적','비판하는','비판해요','비행기','비행기가','비행기는','비행기로',
    '비행기를','비행기에','비행기표도','비행기표를','비행사를','비행장이','빌딩이','빌딩이라고','빌딩이에요','빌려도','빌려서라도','빌려야겠어요','빌려줄','빌려줄래','빌렸어요','빌었어요','빗물이','빗방울이','빗자루','빗줄기가',
    '빙판길이','빙판에서','빚지는','빛깔이','빛나는','빠뜨리면','빠르게','빠르고','빠르네요','빠르니까요','빠르다','빠르다면서요','빠르시네요','빠르죠','빠져나가는','빠져나왔어','빠져드는','빠졌나','빠졌어요','빠지게',
    '빠지면','빡빡하네요','빨간불이야','빨간불이에요','빨간색','빨간색이랑','빨간색이에요','빨강과','빨개요','빨개졌어','빨개졌어요','빨라서','빨라요','빨랐어요','빨래를','빨래하고','빨래할','빨리빨리','빨아야','빨아야겠네',
    '빵집도','빵집이','빼놓을','빼앗겼어','빼앗았어','빼야겠다','뻔했구나','뻔했는데','뻔했어','뻔했어요','뻗으면','뻣뻣해서','뽑아야','뽑아요','뽑혔대','뿌듯해요','뿌리가','뿌리세요','뿌리치고','뿌릴까요',
    '뿐','뿐이었어요','뿐이에요','삐었어','사건과','사건으로','사건은','사건을','사건의','사건이','사건이요','사건이죠','사계가','사계절이','사고가','사고로','사고를','사고의','사과가','사과도',
    '사과로','사과를','사과하고','사과하는','사과할게','사과해야','사교육비','사귀고','사귀는','사귀었는데','사귀었어요','사극이에요','사기가','사기나','사기로','사기를','사나이답게','사냥으로','사는지','사니까',
    '사다가','사들이고','사라예요','사라지고','사라지는','사라지지','사람과','사람도','사람들','사람들과의','사람들도','사람들만','사람들에게','사람들은','사람들을','사람들의','사람들이','사람마다','사람만','사람에게',
    '사람에게는','사람으로','사람은','사람은요','사람을','사람의','사람이','사람이네요','사람이래요','사람이야','사람이에요','사람이요','사람이죠','사람인','사람일까','사람처럼','사람한테만','사랑스럽다','사랑은','사랑을',
    '사랑이','사랑하는','사랑합니다','사랑해요','사려고','사례를','사망자가','사망했습니다','사모님','사무소가','사무실의','사무실이','사무실이에요','사무직이','사물을','사방이','사상에','사생활','사생활도','사세요',
    '사셨어요','사셨죠','사소한','사슴을','사실','사실대로','사실만','사실상','사실에','사실은','사실을','사실이','사실이야','사야겠네요','사야겠어요','사업가가','사업에','사업을','사업이','사업자',
    '사용돼요','사용법','사용법을','사용자가','사용하기','사용하나요','사용하는','사용하세요','사용하죠','사용할','사용해','사용해도','사용해야','사용해요','사원은','사원이에요','사월에','사월은','사위가','사유서를',
    '사이가','사이는','사이도','사이사이에','사이야','사이에','사이에요','사이의','사이잖아요','사이좋게','사이즈','사이즈가','사이즈로','사이트에서','사자가','사자성어는','사장님','사장님을','사장님이','사장님한테',
    '사장이','사장이라면','사전에서','사전을','사전이에요','사정으로','사정을','사정이','사진기를','사진도','사진에','사진으로는','사진은','사진을','사진이','사진이에요','사촌이','사춘기','사탕을','사투리',
    '사투리가','사투리는','사투리도','사표를','사항을','사항이','사회가','사회를','사회생활이','사회에','사회에서는','사회의','사회자가','사회적','사회적으로','사회주의와','사회학을','산길이','산부인과','산소가',
    '산속에서','산업이','산에는','산에서','산에서도','산으로','산이라서','산이요','산책을','산책하기','산책하는','산책하니까','산책하러','산책할','산책할까요','산책해요','살게요','살겠어요','살기에','살까요',
    '살렸어요','살렸지','살림을','살면요','살부터','살아가는','살아남으려면','살아났어','살아오면서','살아요','살았대요','살았어','살았어요','살았었어요','살이세요','살이야','살이에요','살지만','살펴보세요','살피고',
    '삶아야','삶이란','삼가야','삼각김밥','삼각김밥도','삼겤살','삼겹살','삼겹살은','삼겹살을','삼겹살이','삼겹살이랑','삼았어','삼월에','삼천오백','삼촌이','삼키기가','샀네요','샀는데','샀어요','상관없어',
    '상관없어요','상관없이','상관이','상금이','상담실에','상담을','상당수의','상당하네요','상당하다고','상당한','상당히','상대가','상대방','상대방도','상대방의','상대방이','상대성','상대적으로','상대편의','상류층의',
    '상반기','상봉이','상사도','상사에게','상사에게는','상사한테는','상상력을','상상력이','상상만','상상이','상상이요','상상해','상상해요','상식이야','상업이','상의해','상이야','상인들이','상자나','상자를',
    '상자에','상자의','상점이','상징이에요','상징적인','상징해','상징해요','상처가','상처를','상처예요','상추가','상쾌하다','상쾌해져요','상쾌해지죠','상큼해질','상태가','상표는','상표야','상품이','상했어요',
    '상황에','상황에서는','상황에서요','상황을','상황이','상황이네요','상황이야','상황이에요','새끼가','새들의','새로운','새로이','새벽에','새벽의','새소리가','새예요','새우를','새웠어','새웠어요','새콤해요',
    '새해를','새해에','색감이','색깔도','색깔로','색깔별로','색깔을','색깔이','색다르다','색연필로','색으로','색이에요','색이죠','샌드위치를','샌드위치에','샐러드','샘플이에요','생각나요','생각대로','생각돼요',
    '생각만','생각보다','생각을','생각이','생각이네요','생각이야','생각이에요','생각이요','생각하고','생각하니까요','생각하려고','생각하면','생각하세요','생각하자','생각하지','생각할게요','생각할래요','생각합시다','생각해','생각해야',
    '생각해요','생각했는데','생각했어야죠','생겨나고','생겨서','생겨요','생겼구나','생겼어요','생기가','생기고','생기고요','생기는','생기더라','생기면','생긴다는','생긴대요','생길까','생명은','생물도','생물이',
    '생방송이야','생산돼','생산되고','생산력이','생산자와','생산적이지','생산하고','생산하는','생산해','생선이','생선회를','생신이','생신이시래','생으로','생일에','생일이','생일이에요','생태계에','생활도','생활비가',
    '생활수준이','생활에','생활용품을','생활은','생활의','생활이','생활이죠','생활하고','생활환경이','샤워할','샤워해요','서겠습니다','서늘하다','서두르고','서두르면','서두르지','서둘러요','서랍에','서랍을','서로에',
    '서로의','서론에서','서류가','서류는','서류를','서명하셨나요','서명해','서명했습니다','서비스','서비스가','서비스도','서비스를','서비스에','서비스예요','서비스의','서서히','서양인','서예를','서운했어','서울과',
    '서울까지','서울대에','서울말하고','서울보다','서울시','서울에','서울에는','서울에서','서울에서는','서울에서도','서울에서만','서울역에서','서울역이','서울역이에요','서울은','서울을','서울의','서울이','서울이라면서요','서울이야',
    '서울이에요','서울중학교','서울하고','서적이','서점에','서점에서','서쪽에서','서쪽으로','서클에','서투르지만','서툴어요','석굴암이','섞어야','섞어요','섞였어요','선거가','선거는','선글라스를','선덕여왕에','선명하다',
    '선물로','선물받은','선물을','선물이','선물이네요','선물이니까요','선물할','선배님도','선배에게는','선배에게는요','선생님','선생님과','선생님께','선생님만큼','선생님은','선생님을','선생님의','선생님이','선생님이구나','선생님이세요',
    '선생님이야','선생님이었어요','선생님이에요','선생님한테','선수가','선수는','선수들이','선수예요','선수요','선수의','선약이','선언했어','선장의','선장이','선전했어','선정됐어','선진국이','선출되셨네요','선크림','선택을',
    '선택이','선택이야','선택이에요','선택일','선택할','선택할게요','선택해야','선포됐어','선풍기라도','선풍기를','선플이','선하다고','선호하는','선호하세요','선호합니다','설거지','설거지는','설거지하기','설거지할게','설교가',
    '설날에','설득력이','설득하는','설렁탕이','설레요','설립됐어','설명되는데','설명될','설명서를','설명을','설명이','설명할게','설명해','설명했어','설악산','설악산에','설악산에서','설악산이','설치되어','설치를',
    '설치해야','설치했어','설탕을','설탕이','설탕이랑','섬유유연제를','섬이에요','섭섭하다','섭취하세요','섭취해야','성격도','성격은','성격은요','성격을','성격이','성경을','성공에','성공에는','성공의','성공이네요',
    '성공이라고','성공이에요','성공적으로','성공적이래요','성공하기','성공하는','성공한','성공한다고','성공할','성공했네요','성공했는걸요','성공했어','성공했어요','성과가','성과를','성과예요','성당에','성립됐어','성립하려면','성명을',
    '성묘를','성별에','성숙하게','성숙해졌어','성실할','성실해','성인이야','성장률이','성장을','성장의','성장이','성장한','성장함에','성장했습니다','성장했어요','성적에','성적을','성적이','성조가','성질이',
    '성취를','성함이','세계관이','세계로','세계에서','세계에서도','세계적으로','세계적으로도','세계적이에요','세계적이죠','세계화','세금을','세금이','세기의','세기쯤이에요','세네요','세대가','세대는','세대를','세대마다',
    '세대와','세대의','세련됐다','세련됐지','세로가','세로로','세무서에','세미나에','세배하고','세뱃돈을','세부터야','세상에','세상은','세상을','세상이','세수도','세수하고','세수했어요','세예요','세요',
    '세우세요','세우지','세울게','세워서','세워야','세워요','세워졌어요','세월이','세웠어요','세일이','세일인데','세일하길래','세제가','세제를','세종대왕은','세종대왕이','세종대왕이에요','세척기가','세탁기가','세탁물이',
    '세탁소에','세탁하면','세탁해요','세트로','세트를','섹시하다','센터에','센티미터예요','센티밖에','센티예요','셈이군요','셈이네','셈이네요','셈이에요','셈이죠','셔츠를','소가죽으로','소가죽이에요','소갈비로','소개됐어',
    '소개된','소개로','소개를','소개팅','소개한다','소개해','소규모','소극적이야','소금에','소금을','소나기가','소나무가','소녀가','소년은','소독부터','소득이','소리가','소리네요','소리도','소리를',
    '소리에','소리에요','소리인','소리쳤어요','소망이','소망이죠','소매치기한테','소문났더라','소문대로','소문이','소박한','소방관은','소방관이','소비를','소비자','소비자의','소비하고','소설가가','소설에','소설은',
    '소설을','소설이','소설이라서','소속돼','소속되어','소속이에요','소수의','소스가','소스로','소스를','소시지','소식에','소식을','소식이','소식이겠네요','소식이네','소식이네요','소식이에요','소식인','소아과',
    '소아과에','소요돼','소용없어','소용없어요','소원이','소원이네요','소원이야','소유는','소유자가','소유하고','소유하는','소음이','소재가','소재야','소중하다고','소중해','소중해요','소중히','소지품을','소질이',
    '소집되었어요','소통이','소통하면','소파가','소파를','소파에','소파에서','소포가','소포를','소풍을','소풍해요','소프트웨어','소프트웨어를','소홀히','소화가','소화제','소화하고','소��돼','속담에는','속담을',
    '속도가','속도를','속도위반으로','속마음을','속삭이듯이','속상하겠다','속상하죠','속상해','속에서','속옷을','속이면','속하나요','속해요','손가락','손가락도','손가락에','손가락에서','손가락을','손길이','손녀가',
    '손님을','손님이','손등에','손맛이','손목이','손바닥이','손발이','손뼉을','손수건','손쉽게','손실이','손으로','손자가','손잡고','손잡이가','손전등을','손주를','손질을','손질하고','손톱깎이',
    '손톱이','손해를','손흥민','솔직하게','솔직한','솔직해야','솔직히','솜씨가','솟아오르고','송강호','송강호를','송금할','송아지가','송편을','쇠고기','쇼핑몰을','쇼핑이','쇼핑하러','쇼핑할','쇼핑할까요',
    '수건이','수고하셨어요','수고했어','수능은','수능이','수단만','수단이든','수도권에','수도꼭지에서','수도는','수돗물을','수동적으로','수리를','수리점에서','수리해야','수리해야겠다','수많은','수면과','수명이','수박을',
    '수박이','수밖에','수비를','수사가','수상했대요','수석으로','수술은','수시로','수십억','수업도','수업에','수업을','수업이','수업이었어요','수없이','수염을','수영도','수영복은','수영은','수영을',
    '수영이','수영장도','수영장에','수영장은','수영장이','수영하고','수영하기','수영하러','수영하면','수영할','수영해도','수영해요','수요가','수요도','수요와','수요일만','수요일에','수입된','수입산이에요','수입품만',
    '수입하세요','수입해요','수입했어요','수정으로는','수정할까요','수정해야','수족관에','수준이','수진이가','수진이는','수진이랑','수진이에요','수집이요','수집했어요','수채화','수출국이에요','수출에','수출이','수출품이','수출하네요',
    '수출해요','수칙을','수컷이에요','수표로','수학이에요','수학이요','수행해','수험생이라','수화기를','수확량이','수확의','수확했어요','숙가락이요','숙박비','숙소는','숙소를','숙이고','숙제가','숙제는','숙제를',
    '순간이','순간이네요','순간적인','순금이야','순두부찌개가','순서는','순서대로','순서를','순수한','순수해','순식간에','순위가','순조롭게','순종이야','순진해서','순해요','숟가락','숟가락만','숟가락이면','술병이',
    '술자리가','술잔을','숨겨진','숨겼어','숨기는','숨바꼭질','숨쉬기가','숨었어요','숨졌대','숫자가','숫자를','숲에서','쉬려고요','쉬면서','쉬세요','쉬어서','쉬어야','쉬어야겠다','쉬어야죠','쉬어요',
    '쉬었어','쉬었어요','쉬워요','쉬워져요','쉬웠는데','쉬웠어요','쉴게요','쉼었다','쉽더라','슈퍼마켓','스노보드를','스노클링하고','스마트','스마트폰','스마트폰을','스물다섯','스물두','스물셋이에요','스스로','스승의',
    '스웨터를','스위치가','스쳤어','스카프를','스케이트','스케줄이','스크린','스키를','스키장','스키장이','스타들을','스타를','스타일을','스타일이','스터디','스튜디오에서','스트레스','스트레스가','스트레스도','스트레스를',
    '스트레칭을','스트레칭이','스트리밍','스티커','스티커를','스펙에','스펙으로','스펙이','스포츠를','슬그머니','슬리퍼','슬리퍼를','슬퍼서요','슬퍼요','슬퍼하지','슬펐어','슬펐어요','슬프게','슬프다기보다','슬픔을',
    '슬픔이나','습관은','습관을','습관이','습관이네요','습관이야','습관이에요','습기가','습니다','습도가','습해서','승객의','승객이','승리했대','승리했어','승부였어','승용차로','승인되면','승인되었나','승진했다면서요',
    '승진했어','시각이','시간도','시간밖에','시간씩','시간에','시간에는','시간은','시간을','시간이','시간이나','시간이라','시간이라서요','시간이면','시간이야','시간이었겠어요','시간이었어요','시간이에요','시간이요','시간쯤',
    '시간쯤이요','시계가','시계는','시골에','시골에서는','시골이','시골이라','시금치','시급해요','시기가','시기네요','시기야','시기지','시까지','시까지예요','시까지요','시끄러워','시끄러워요','시끄럽지','시나리오가',
    '시내를','시내버스로','시내에','시네요','시대가','시대니까요','시대를','시대부터','시대에','시대에는','시대였어요','시대의','시대적','시댁에','시도에서','시도할','시도해','시드니가','시들었네','시디롬',
    '시디롬으로','시라고','시리즈','시멘트가','시멘트로','시민들도','시민들에게','시민들의','시민들이','시민에게','시민의','시민이','시민입니다','시부모님을','시부터','시선이','시설을','시설이','시술을','시스템',
    '시스템에','시스템을','시아버지께서','시야가','시야를','시어머니','시어머니가','시에서','시에요','시예요','시외버스','시외에','시원하게','시원하고','시원하네요','시원하니까','시원하다','시원한','시원해서','시원해요',
    '시원했겠다','시월에','시위가','시위를','시위야','시위에','시인을','시인의','시인이','시인이래','시일이','시작돼요','시작됐어','시작됐어요','시작되었습니다','시작되었어요','시작을','시작이','시작이야','시작이죠',
    '시작하고','시작하기','시작하는','시작하면','시작하세요','시작하시죠','시작하자','시작한','시작할','시작할걸','시작할게','시작할게요','시작할까요','시작합니까','시작합니다','시작합시다','시작해','시작해요','시작했어','시작했어요',
    '시장에','시장에서','시장은','시장을','시장이','시절에','시절이','시점에서','시중에서','시즌이','시집가','시집이야','시쯤이네요','시청까지','시청률이','시청에','시청역에서','시청이','시켜야겠네요','시켜요',
    '시키는','시킬게','시킬게요','시킬까','시킬까요','시합에서','시합을','시행됐어요','시행되나요','시행되면요','시행될','시행착오를','시험까지','시험도','시험에','시험에서','시험은','시험을','시험이','시험이에요',
    '시험이잖아요','시험해','식겠다','식구가','식단이','식당도','식당에','식당에서','식당은','식당을','식당의','식당이','식당이에요','식료품','식물은','식물을','식물이','식빵을','식빵이','식사를',
    '식사비는','식사할까요','식생활이','식습관','식욕이','식용유를','식이에요','식중독','식탁에서','식품을','식품점이','식혀서','신고하세요','신고해야','신고해야겠어요','신고했어','신고했어요','신곡이야','신기해','신나요',
    '신념을','신데렐라네요','신랑이','신뢰가','신뢰할','신문사에서','신문에','신문지로','신발도','신발은','신발을','신부가','신부도','신분증을','신분증이랑','신비는','신사예요','신선하고','신선한','신선해요',
    '신설됐대','신세대는','신세대의','신속한','신어야','신어요','신었어요','신용카드','신용카드로','신으라고','신으세요','신을걸','신을게요','신인상은','신입보다','신입사원을','신입생','신자가','신자예요','신제품',
    '신제품을','신중하게','신중한','신청서를','신청하세요','신청하시면','신청해','신청해야','신청했어','신청했어요','신체검사','신체적','신호가','신호등을','신호등이','신혼부부가','신혼여행은','신화에','신화에서','실감이',
    '실내에서','실력만큼','실력뿐만','실력은','실력을','실력이','실력이야','실력이에요','실렸어','실례잖아요','실례하겠습니다','실례합니다','실망시키지','실망이다','실망한','실망할','실망했어','실망했어요','실수가','실수는',
    '실수라서','실수를','실수야','실수였어요','실수예요','실수하기','실수하는','실수하지','실수한','실수할','실수해','실수해서','실수해요','실수했어','실수했어요','실습이야','실시간으로','실시될','실시됩니다','실시하고',
    '실업은','실업의','실었어요','실장님','실적이','실정이','실제는','실제로','실직했지만','실질적인','실천부터','실천이','실천하고','실천해야지','실체가','실태를','실패는','실패라기보다','실패를','실패에서',
    '실패하기','실패하더라도','실패한','실패한다고','실패해서','실패했어요','실패했지만','실행돼요','실행이','실험에','실험에서','실험을','실험적이에요','실현됐어','실현을','실현하려면','실화를','싫어요','싫어졌어','싫어해요',
    '심각한','심각한가요','심각해','심각해요','심각해지고','심리를','심리적','심리학','심부름','심심할','심심해','심어야','심어져','심었어','심었어요','심으면','심을까요','심장이','심정을','심판이',
    '심플하면서도','심플한','심하게','심하네요','심하니까','심해서','심해요','심해졌어','심해졌어요','심해지겠네요','심호흡을','심호흡하세요','십상이니까요','십상이에요','십상이죠','십오일이에요','십이에요','십이월에','십일월이에요','싱거운',
    '싱거워요','싱겁지','싱싱하다','싶네요','싶어서','싶어서요','싶어요','싶어졌어','싶어지는','싶어해요','싶었겠네요','싶었는데','싶었어','싶었어요','싶으니까','싶으세요','싶은데','싶은데요','싶을지라도','싶지만',
    '싸구려','싸세요','싸우지','싸움을','싸웠는데','싸웠어','싸웠어요','싸지만','싼값에','쌀쌀해요','쌌어요','쌍둥이래','쌍둥이를','쌍둥이야','쌓기가','쌓둡이와','쌓였어','쌓였어요','쌓으면','쌓이면',
    '써야겠다','써야지','썩었어요','썰렁해','썼는데','썼어요','쏟아졌어','쏟아졌어요','쏟았거든요','쏟았나','쏟았어요','쓰기가','쓰기는요','쓰기에서','쓰느라','쓰니까','쓰다듬어','쓰러지셨다고요','쓰러지셨어요','쓰러질',
    '쓰레기','쓰레기로','쓰레기를','쓰레기통에','쓰레기통이','쓰세요','쓰시네요','쓴맛이','쓸까요','쓸데없는','쓸데없이','쓸쓸하다','쓸쓸해','쓸어야','씨앗을','씨하고','씩씩하네요','씹어야','씹으세요','씻기가',
    '씻기고','씻어야','씻어야겠어요','씻어요','씻었어요','씻으세요','씻을게요','아','아가씨','아기가','아기라서','아기를','아기의','아기한테','아까까지','아까워요','아깝네요','아깝다','아끼고','아나운서가',
    '아내가','아는구나','아는군요','아는데','아니다','아니라','아니라고요','아니면','아니야','아니에요','아니요','아니죠','아니지','아니하였다','아닌데','아닐까','아닙니다','아드님이','아들이','아래가',
    '아래로','아래에','아래에서','아래쪽에','아래층에서','아랫사람한테도','아르바이트','아르바이트는','아르바이트를','아르바이트해서라도','아름다운','아름다워','아름다워요','아름다웠어','아름다웠어요','아름답게','아름답네요','아름답다','아름답죠','아마',
    '아마도','아마요','아메리카노로','아메리카노를','아무개','아무거나','아무것도','아무도','아무도요','아무래도','아무렇지도','아무리','아무튼','아무한테도','아버님은','아버지','아버지가','아버지는','아버지한테','아빠가',
    '아빠를','아서','아세요','아쉬운','아쉬워요','아쉬웠어요','아쉽겠다','아쉽네요','아쉽다','아스팔트가','아슬아슬했겠네요','아시는','아시다시피','아시아','아시아에서만','아요','아요?','아울러','아이가','아이고',
    '아이는','아이도','아이들','아이들도','아이들은','아이들을','아이들의','아이들이','아이들하고','아이들한테','아이들한테는','아이디','아이디어가','아이를','아이스크림','아이스크림이에요','아이에게','아이예요','아이유예요','아이의',
    '아이폰','아이한테','아인슈타인의','아저씨','아저씨가','아저씨예요','아주','아주머니','아줌마','아직','아직도','아직요','아직이에요','아직이요','아침까지','아침마다','아침부터','아침부터요','아침에','아침에도',
    '아침을','아침이','아침형','아파도','아파서','아파서요','아파요','아파트','아파트가','아파트에','아팠어요','아프고','아프네요','아프다거나','아프면','아프세요','아프시겠어요','아프지','아픔을','악기를',
    '악몽을','악수를','악수합시다','악플도','악플은','안개가','안건은','안겼어','안경보다','안경을','안과에','안내할게요','안내해','안내했습니다','안녕하세요','안녕하십니까','안녕히','안돼요','안목이','안방에서',
    '안방이','안부를','안심이','안심이야','안심이에요','안심했어','안았어','안았어요','안을게요','안전벨트를','안전을','안전이','안전하게','안전하죠','안전하지만','안전한','안전해요','안정돼요','안정됐어','안정이',
    '안정적이니까요','안정적이야','안정적이에요','안정적인','안주도','안쪽에','안쪽으로','안타까워요','안타깝다','안타깝지만','안팎이','앉아도','앉아라','앉아서','앉아요','앉았나','앉으세요','앉을게요','앉을까','앉을까요',
    '앉읍시다','앉히세요','않겠네요','않겠습니다','않고요','않나요','않는다고','않는들','않도록','않아도','않아서','않아야','않아요','않았어','않았어요','않았으면','않았을','않으려면','않으려면요','않으면',
    '않을게','않을게요','않을까','않을까요','않지만','알갠어요','알겠습니다','알겠어','알겠어요','알람도','알람을','알레르기가','알려야','알려져','알려진','알루미늄이야','알릴게요','알림을','알림이','알맞아요',
    '알면서','알수록','알아냈어','알아들어요','알아들을','알아보고','알아봐','알아봤어요','알아서','알아야','알아요','알아주지','알아줄게','알았는데','알았어','알았어요','알코올이','앓았다면서요','앓았어요','암시가',
    '암컷이에요','압니다','압도적이네요','압도적인','압력이','압박감이','앞길이','앞날이','앞두고','앞뒤가','앞아서','앞에서','앞에서요','앞으로','앞으로도','앞장설','앞쪽에','애쓰지','애인이','애정을',
    '애초에','액세서리','액수가','앱에서','앱으로','앱이에요','야','야경이','야구를','야구장','야구장에서','야구하고','야근을','야근이','야근하느라','야근하면','야근해서','야근해야','야근했다면서요','야단맞았어',
    '야외에서','야채를','약간만','약국도','약국에','약국이','약사가','약속에','약속을','약속이','약속이에요','약속한','약속할게요','약속해요','약수를','약이라고','약이에요','약점을','약점이','약초는',
    '약품은','약학을','약한가','약해서','약해지면','약혼녀를','약혼자와','얄밉게','얇아서','얇아요','양궁을','양념으로','양념을','양념이','양념치킨','양념하고','양력으로','양로원에서','양말에','양말을',
    '양말인데','양배추즙이','양보가','양보해','양보했더니','양보했어요','양상추','양성도','양성이','양식이','양심에','양쪽을','양쪽이','양측이','양파를','양파하고','양호하대요','얘기가','얘기예요','얘기하자',
    '얘기했어요','어','어기면','어깨가','어깨를','어깨에','어느덧','어느새','어두운','어두워서','어두워요','어두워졌네','어둠이','어디가','어디까지','어디나','어디든','어디로','어디를','어디서',
    '어디서든','어디서부터','어디서요','어디세요','어디야','어디에','어디에나','어디에서','어디에서요','어디에요','어디예요','어디요','어땀어요','어때요','어땖어요','어땠어','어땠어요','어떐어요','어떠세요','어떠셨어요',
    '어떡하지','어떡해','어떡해요','어떤가요','어떤데','어떻게','어떻게요','어떻어요','어떻���','어려서','어려요','어려운','어려운데요','어려울','어려울지라도','어려움을','어려움의','어려움이','어려워','어려워요',
    '어려워졌죠','어려워지고','어려웠거든요','어려웠는데','어려웠어','어려웠어요','어려웠지만','어렵겠네요','어렵군요','어렵네요','어렵다','어렵다고','어렵더라고요','어렵습니다','어렵죠','어렵지','어렵지는','어렵지만','어렸을','어르신을',
    '어른들도','어른한테는','어리석은','어린데','어린아이가','어린애니까','어린이날에','어린이날이','어맀니가','어마니가','어마니의','어머니','어머니가','어머니를','어머니야','어머님께서','어머님이','어색해요','어서','어순은',
    '어요','어요?','어울려요','어울리는','어울리니까요','어저께','어제는','어제도','어제보다','어제보다는','어제부터','어제부터요','어젯밤에','어지러워','어지러워요','어째서','어쨌든','어쩌다','어쩌다가','어쩌면',
    '어쩌죠','어쩌지','어쩐지','어찌나','어차피','어휘가','어휘를','억울해서','억이래','언니가','언덕을','언론에서','언론이','언어도','언어를','언제가','언제까지','언제까지야','언제나','언제든',
    '언제로','언제부터','언제부터요','언제야','언제예요','언제쯤','언제쯤이에요','언젠가','언젠가는','얹을까요','얻어먹었어','얻어요','얻었어요','얼굴에','얼굴은','얼굴을','얼굴이','얼룩을','얼마간','얼마나',
    '얼마나요','얼마야','얼마에','얼마였어','얼마예요','얼마짜리로','얼었어','얼음으로','얼음을','엄격하셔','엄격해요','엄격히','엄마가','엄마를','엄마에게','엄마의','엄마한테','엄숙했어','엄청나게','엄청나네요',
    '엄청나다고','업로드할게요','업로드했어요','업무가','업무에','업종마다','업종에서','업종이요','업체를','업체에','없겠네요','없네요','없는데','없는데요','없다','없다거나','없다고','없습니다','없애고','없어서',
    '없어서요','없어요','없어졌어요','없어질','없었군요','없었던','없었어','없었어요','없었으니까요','없었으면','없었을','없었죠','없으니까','없으면','없을까요','없이는','없이요','없잖아','없잖아요','엇갈리고',
    '엉덩이가','엉뚱한','엉망이었어','엉터리야','엊그제','엎드렸어','에','에게','에너지가','에너지를','에서','에세이로','에세이의','에어컨','에어컨도','에어컨을','에어프라이어로','에코백을','엔지니어예요','엔진에서',
    '엘리베이터','엘리베이터가','엘리베이터로','엘리베이터에','여건이','여겨지고','여겼는데','여관이','여권을','여권이요','여기가','여기고','여기는','여기서','여기서는','여기에','여기에서','여기요','여기저기','여동생이',
    '여든까지','여러분','여럿이','여론이','여름에','여름에는','여름은','여름이','여름철에는','여보가','여보세요','여성의','여세요','여왕이지','여우가','여유가','여유로워요','여유롭게','여의도','여의도가',
    '여자예요','여전하네','여전하죠','여전히','여학생이','여행도','여행사를','여행에서','여행을','여행의','여행이','여행이에요','여행하고','여행하기로','여행했어요','역까지','역량을','역사가','역사가를','역사가예요',
    '역사네요','역사를','역사상','역사에','역사와','역사적','역사적으로','역사적인','역사학을','역삼동','역에서','역할은','역할을','역할이','역할이야','역할이죠','연결돼','연결돼요','연결됐네요','연결이',
    '연결할게요','연결해','연결했어요','연관이','연관인데','연구네요','연구는','연구를','연구소가','연구소에요','연구실이','연구에','연구원으로','연구자가','연구자들이','연구자예요','연구하고','연구하세요','연구해요','연구했어',
    '연기가','연기도','연기됐대','연기력이','연기를','연기자가','연기해야','연두색','연락을','연락이','연락처','연락처를','연락하면','연락하세요','연락할게','연락할게요','연락해','연락해도','연락해야겠네요','연락해요',
    '연락했는데','연락했어','연말에','연봉이','연상돼','연설을','연설이','연세가','연속으로','연수가','연습을','연습이','연습하고','연습하면','연습하세요','연습한','연습할게요','연습해','연습해야','연습해요',
    '연습했어','연습했어요','연예인','연예인이','연장을','연주가','연주할','연출가가','연출이','연출했어','연하다','연합에서','연휴에','열기가','열대어가','열려고요','열려요','열렸어','열리고','열리나요',
    '열매를','열쇠가','열쇠를','열쇠야','열쉼를','열심히','열어요','열었어','열위를','열자마자','열정과','열정이','열정적으로','열정적이었지','열정적입니다','열중하지','열차가','열차를','염려하세요','염색했어요',
    '엿봤어','영리하대','영상도','영상에','영수증을','영수증이','영양소를','영양을','영양이','영어가','영어로','영어를','영어와','영역이','영웅이','영웅이야','영웅이에요','영원한','영원할','영원히',
    '영하로','영향도','영향력이','영향을','영향이','영향이에요','영혼을','영화가','영화관','영화관에서','영화관이','영화는','영화라도','영화를','영화배우','영화야','영화에','영화에서','영화였네요','영화였어요',
    '영화예요','영화의','영화인데','영화제에','영화제에서','옆구리가','옆에서','옆집에','옆집에서','옆집이','예감이','예고했어','예년보다','예능도','예매했어','예방에','예방이','예방하려면','예보를','예뻐요',
    '예뻐졌어요','예뻤거든요','예뻤어요','예쁘게','예쁘겠다','예쁘길래','예쁘네','예쁘네요','예쁘다','예쁘다고','예쁘면','예쁘요','예쁘죠','예쁘지','예쁜데','예산도','예산은','예산이','예상과','예상됩니다',
    '예상보다','예상이','예상하지','예상해요','예상했어','예선을','예술가들은','예술가의','예술을','예술의전당에서','예술적','예술적이야','예술적이에요','예습했어','예식장을','예약을','예약이','예약하고','예약하는','예약하세요',
    '예약하셨어요','예약하자','예약한','예약할게요','예약할까요','예약합시다','예약해','예약해야','예약했어','예약했어요','예외는','예외도','예외로','예요','예의가','예의를','예전보다','예전에','예전에는','예절을',
    '예절이','예정돼','예정이래','예정이래요','예정이야','예정이에요','예정입니다','예측하기','예컨대','옛날과','옛날에','옛날에는','옛날이야기를','옛날이야기에','옛적에','오감을','오겠네요','오겠습니다','오는데','오는데다가',
    '오늘까지','오늘날','오늘날에는','오늘도','오늘만','오늘부터','오늘은','오늘은요','오늘이라','오니까','오래간만에','오래간만이네요','오래돼서','오래됐어요','오래된','오래전부터','오래전에','오랜만에','오랜만이다','오랜만이라',
    '오랜만이야','오랜만이었어요','오랜만이에요','오랫동안','오렌지','오류가','오르고','오르는','오른쪽','오른쪽에','오른쪽요','오른쪽으로','오림픽의','오면요','오븐에요','오븐이','오빠가','오세요','오셔야','오셨어요',
    '오십만','오염이','오월에','오전에는','오전이에요','오징어','오징어볶음이','오합지졸이','오해가','오해였나','오해할','오후에','오후에는','오후예요','오히려','옥감의','온난화가','온다고','온다더니','온대요',
    '온도가','온도를','온돌이','온라인','온라인에서','온라인으로','온라인으로도','온몸이','올게요','올까요','올라가','올라가도','올라가면','올라가세요','올라가야','올라가요','올라갈','올라갈게요','올라갈까요','올라갔다',
    '올라갔어요','올라도','올라서','올라오세요','올라왔어요','올라요','올랐대요','올랐어','올랐어요','올랐지','올래요','올려요','올리려고요','올리브','올리세요','올릴까요','올림픽에서','올림픽이','올립시다','올바른',
    '올여름','올해는','올해부터','올해에','올해의','옮겼어요','옮기는','옮기자','옮기죠','옮길게요','옮길까요','옳다고','옳았어요','옷으로','옷이야','와','와닿았어','와서요','와야겠다','와이파이',
    '와이파이가','와이파이를','와이파이예요','완공까지','완공될','완공은','완료될','완료했어','완만해서','완벽하게','완벽하네요','완벽하지','완벽하지는','완벽한','완벽해요','완벽했어요','완성된','완성하는','완성했어요','완숙은',
    '완전히','왔거든요','왔구나','왔네요','왔는데','왔대요','왔습니다','왔어요','왔었어요','왔으니까','왔지만','왕스를','왕이에요','왜냐면','왜냐하면','외교가','외국어','외국으로','외국인','외국인치고',
    '외로울','외로워요','외로워지니까요','외롭고','외에는','외에도','외워요','외웠어요','외제야','외출을','외출이','외출하지','외투는','왼쪽에','왼쪽으로','요구는','요구예요','요구하고','요구한','요구했어요',
    '요금은','요금이','요리는','요리를','요리법은','요리사가','요리사예요','요리에','요리의','요리하고','요리하기','요리하다가','요리하면','요리하면서','요리할','요리할까요','요리해','요리해요','요리했어요','요일을',
    '요일이에요','요즈음','요즘은','요청할까요','요청했어야지','요청했어요','욕실에','욕실에서','욕심이','용감하네요','용감한','용기가','용기를','용돈을','용의자가','용의자를','우려낸','우리','우리가','우리나라',
    '우리는','우리도','우리를','우리밖에','우리의','우리한테','우산도','우산을','우산이','우수한','우승을','우승하길','우승할까','우승했어요','우여곡절','우연히','우위와','우유가','우유를','우정은',
    '우정의','우주의','우체국','우체국에','우체국에서','우체국이','우표를','우회전하세요','운동도','운동으로','운동은','운동은요','운동을','운동의','운동이','운동이나','운동이네요','운동이라도','운동이랑','운동이에요',
    '운동장에서','운동하겠다고','운동하고','운동하기로','운동하는','운동하니까','운동하다가','운동하라고','운동하면','운동하면서','운동하세요','운동하자고','운동한다더니','운동할','운동해야','운동해요','운동했어요','운동화','운동화를','운영해요',
    '운전면허를','운전을','운전이','운전하다가','운전하지','운전할','운전해','운전해요','울려고','울릴게요','울어서','울어요','울었어요','울음을','울타리','울타리를','움직여','움직이면','움직이지','웃겼어',
    '웃겼어요','웃던데요','웃어요','웃었어','웃었어요','웃으며','웃으면','웃음이','웅장하다','워라밸','워라밸을','워라밸이','워라밸이라고','워라밸이라는','원래는','원숭이도','원숭이보다','원어민인','원이래','원이래요',
    '원이에요','원이요','원인을','원인이','원인이었어요','원입니다','원작이','원재료를','원짜리','원피스를','원피스예요','원하는','원하세요','원해요','월급도','월급보다','월급의','월까지','월부터','월세가',
    '월세예요','월요일로','월요일부터','월요일에','월요일이에요','월이에요','월인데','웨딩드레스가','웨이트','웹툰도','위기에','위대한','위로의','위반으로','위반이었어요','위반하면','위스키로','위안이','위에서','위원회는',
    '위주로','위층에서','위층으로','위치가','위치를','위치해','위하는','위해서','위해서는','위해서요','위험이','위험하니까','위험하죠','위험하지','위험하지만','위험한','위험해','위험해요','위험했겠어요','유가족에게',
    '유교가','유교와','유기농','유난히','유럽도','유럽은','유리잔을','유리창을','유명인의','유명하거든요','유명하고','유명하다고','유명하다더라','유명하잖아','유명하잖아요','유명하죠','유명한','유명해','유명해요','유물은',
    '유비무환이에요','유연성도','유연하게','유용하네요','유용해요','유월에','유적이','유적지','유지돼요','유지되고','유지비도','유지하는','유턴하세요','유튜브','유튜브를','유학을','유학하고','유행이라서','유행이래요','육십오',
    '육칠팔구예요','윤동주','으로','으세요','은','은데','은지한테','은퇴하면','은행과','은행에','은행에서','은행이','을','을까요','을이라는','읊는다고','음료가','음료에','음식도','음식에',
    '음식에는','음식으로','음식은','음식은요','음식을','음식이','음식이에요','음식이요','음악도','음악에','음악에서','음악을','음악의','음악이','음악이요','음양과','음질이','음향이','응원할게','응원할게요',
    '응원합니다','응원해','응원했죠','의','의견도','의견만','의견을','의견이','의견이네요','의논해서','의도는','의무가','의무도','의무를','의무예요','의미가','의미거든요','의미를','의미인데','의미해요',
    '의사가','의사들도','의사세요','의사소통','의사소통이','의사예요','의사요','의식이네요','의심스러워요','의심해야','의심해요','의외로','의원에','의자가','의자를','의자에','의자요','의지가','의하면','의학의',
    '의학이','이','이거요','이걸로','이것만','이것뿐이에요','이것뿐인가요','이것으로','이것은','이것이','이것저것','이겨요','이겼어','이겼어요','이겼으니','이곳에서는','이곳은','이곳의','이곳이','이기고',
    '이기려고','이끌었어','이날은','이날이','이다','이동이','이동하나','이동해요','이따가','이래요','이러하니','이러한','이렇게','이렇게요','이렇습니다','이력서를','이론은','이론을','이론하고','이론��',
    '이루고','이루어졌어요','이루어지길','이루어질','이루었어요','이뤄졌어요','이뤘어요','이륙할','이르렀어요','이름만','이름은','이름을','이름이','이마에','이만큼','이메일','이메일로','이메일을','이미','이미지가',
    '이백오십은','이번만','이번에','이번에는','이번엔','이별은','이별의','이별이','이분은','이불에','이불을','이불이','이불이라서','이사를','이사하는데','이사할','이사해서','이사했어요','이산가족','이산가족의',
    '이삼사오','이상의','이상이','이상이면','이상이어야','이상이에요','이상적인','이상하네요','이상한','이상해','이상해요','이성적으로','이순신','이심전심이에요','이십일이에요','이십팔일이에요','이야','이야기','이야기가','이야기군요',
    '이야기네요','이야기는','이야기도','이야기를','이야기야','이야기였어','이야기였어요','이야기예요','이야기의','이야기죠','이야기지','이야기하고','이야기하곤','이야기하는','이야기하세요','이야기할게요','이야기해','이야기해요','이야기했어요','이어서',
    '이어져','이어져요','이어지면서','이어폰을','이었어요','이에요','이외에','이용돼요','이용되고','이용료가','이용하라고','이용하세요','이용해요','이웃과','이웃은','이웃집','이웃한테','이월은','이유가','이유는',
    '이유도','이유죠','이이화','이익이','이자가','이자율이','이전에','이제는','이지만','이지영입니다','이쪽으로','이쪽이','이탈리안','이튿날','이하는','이해가','이해돼','이해되는','이해되죠','이해하게',
    '이해하고','이해하기','이해하는','이해하려고','이해하려면','이해하면','이해할','이해합니다','이해해','이해해야','이해해요','이해했어','이해했어요','이후로','이후에','이후에는','익숙해져요','익숙해졌어요','익숙해질','익어서',
    '익어요','익었네','익었어요','익히려면','익히세요','인간은','인간의','인간인','인공지능','인공지능을','인구가','인구는','인구도','인구의','인권은','인권이지','인기가','인기를','인기예요','인기죠',
    '인내심이','인류의','인물이','인물이야','인물이지','인사드립니다','인사와','인사하러','인사해야','인사했어요','인상을','인상적이야','인상적이었어','인상적이었어요','인상주의','인생에서','인생을','인생의','인성도','인쇄술',
    '인스타','인스타에','인스타하고','인심이','인원이','인재를','인정받기','인정하는','인정해','인증도','인천공항에서','인체에','인터넷','인터넷과','인터넷에서','인터넷으로','인터넷을','인터넷이','인터넷이라고','인터뷰를',
    '인턴도','인테리어가','일기를','일기예보에서','일란성','일련번호를','일몰이','일반적으로','일본과','일본어가','일본어도','일본어를','일본에','일본으로요','일본은','일본이','일부만','일상으로','일상이','일상이에요',
    '일석이조예요','일어나고','일어나네요','일어나는','일어나려면','일어나서','일어나세요','일어나야','일어나요','일어나자마자','일어났어','일어났어요','일요일마다','일요일에','일요일에는','일요일에는요','일요일은','일요일은요','일월에','일으켰어요',
    '일으키고','일으키다니','일이네','일이네요','일이니까요','일이라서요','일이삼사예요','일이야','일이었어','일이었어요','일이에요','일이요','일이죠','일이지','일자리를','일정을','일정이','일주일','일주일에','일출의',
    '일출이','일하고','일하기','일하다가','일하면','일하세요','일하시거든요','일해서','일해요','일했더니','일했어요','일회용','읽거나','읽기는','읽기로','읽어요','읽었는데','읽었어','읽었어요','읽으면',
    '읽으세요','잃어버렸어요','잃어버린','잃었어요','임금이','임시적인','입구가','입구에','입니다','입력하면','입사했는데','입사했어요','입술이','입어야','입어야겠다','입어요','입었네','입었어요','입으면','입으세요',
    '입을까요','입장도','입장료가','입장이','입학해','입학했다면서요','입학했어요','있거든요','있겠네','있겠네요','있겠다','있겠어요','있겠지','있군요','있기는','있나요','있네요','있는걸요','있는데','있다',
    '있다가','있다거나','있다고','있다는','있다더라','있다면','있다면서요','있다잖아','있대요','있더라','있더라고요','있던데요','있습니까','있습니다','있어서','있어야','있어야죠','있어요','있었겠네요','있었나',
    '있었나요','있었네','있었는데','있었대요','있었던','있었어','있었어요','있었으면','있었죠','있었지만','있으니까','있으니까요','있으니만큼','있으면','있으세요','있을게','있을게요','있을까','있을까요','있잖아',
    '있잖아요','있지만','있���요','잊어버렸어요','잊었어','잊으셨어','자격을','자격증을','자격증이','자기가','자기만의','자기소개서를','자네요','자동문이라서','자동으로','자동이에요','자동차','자동차가','자동차로','자동차를',
    '자동화','자랐네요','자랐어요','자랑스러워요','자랑스럽겠어요','자랑이에요','자려고','자려고요','자료가','자료도','자료를','자료야','자료에','자르고','자르세요','자리가','자리까지','자리는','자리로','자리를',
    '자리에','자리에서','자리에서는','자만하면','자발적','자발적이에요','자본주의의','자산이','자석이','자세가','자세를','자세요','자세한','자세히','자식이','자신감도','자신감을','자신감이','자신을','자신이',
    '자업자득이지','자연스러운','자연스러워','자연스러워요','자연스럽게','자연스럽게요','자연을','자연이','자유가','자유로운','자유로워','자유로워요','자유롭게','자유와','자장가','자장면','자전거','자전거를','자제해야','자책하게',
    '자체가','작가가','작가를','작가예요','작가의','작년보다','작년부터','작년에','작사가가','작성해서','작성했습니다','작심삼일','작아서','작아요','작업해요','작품은','작품을','작품이','작품이었어','작품이에요',
    '잔디밭에','잔소리하셨어','잔이에요','잔잔하다','잔치국수가','잘','잘게요','잘됐어요','잘라요','잘랐네요','잘랐어요','잘못됐어요','잘못된','잘못을','잘못이','잘못이야','잘못이에요','잘못한','잘못했네요','잘못했어',
    '잘못했으면','잘하게','잘하고','잘하기는요','잘하네요','잘하는','잘하는구나','잘하더라','잘하려면','잘하면','잘하세요','잘하셨어요','잘하시겠네요','잘하시네요','잘하시는','잘하시는군요','잘하시는데요','잘하자','잘하잖아','잘하죠',
    '잘해야','잘해요','잘했는데','잘했다고','잘했어','잘했어요','잘했으니까','잠가야','잠갔어요','잠그세요','잠글게요','잠금장치도','잠깐만','잠깐만요','잠들어서','잠들었어요','잠시만','잠시만요','잠실에서','잠실역에서',
    '잠잤어요','잡수세요','잡아서','잡았대요','잡읍시다','잡지를','잡혔군요','잡혔네','잡혔대요','잡혔어요','잡히고','잤거든','잤거든요','잤더라면','잤어요','장갑을','장관이','장관이네요','장관이었겠네요','장관이었어',
    '장군은','장군을','장난감을','장난감이','장난이었을','장단점을','장단점이','장래에','장르가','장르를','장르별로','장르의','장마가','장마도','장마철에는','장마철이라','장면에서','장면에서는','장면이','장면이네요',
    '장면이었어','장미가','장미로','장미를','장미하고','장바구니를','장보기','장보기가','장사가','장소가','장소를','장소예요','장식부터','장식을','장에서','장으로','장점부터','장점은','장점을','장점이',
    '장점이에요','장점입니다','장학금은','장학금을','장학금이','잦아요','재난에','재료가','재료를','재료의','재미없어요','재미있겠다','재미있네요','재미있는','재미있는데','재미있어','재미있어요','재미있어져요','재미있었어','재미있었어요',
    '재미있을','재미있죠','재미있지','재산이','재설정하세요','재울게','재웠어요','재촉해야','재킷을','재킷이에요','재택근무가','재택근무도','재택근무를','재판은','재활용','재활용과','재활용은','쟔치국수요','저','저것과',
    '저것은','저것이','저곳은','저곳이','저기서','저기에','저기요','저녁도','저녁때가','저녁에','저녁은','저녁을','저녁이네요','저도요','저렴하니까','저렴하죠','저렴해요','저분은','저어요','저으면',
    '저절로','저쪽에','저쪽에서','저쪽으로','저쪽이구나','저쪽이에요','저축을','저축해','저한테','저한테도','적극적으로','적극적인','적당한','적당해요','적당히','적셨어','적습니다','적어도','적어요','적에게',
    '적용돼야','적용했어요','적을게','적을게요','적응하기','적응하는','적응해서','적합한','적합해','전공이야','전공하고','전공해요','전공했어','전공했어요','전국에서','전국으로','전까지','전날에','전달할','전망대에서',
    '전문가','전문가가','전문가도','전문가들의','전문가들이죠','전문가로','전문가만','전문가에','전문가의','전문가인','전문가죠','전문으로','전문이에요','전부터','전부터요','전세로','전세예요','전시가','전시돼','전시를',
    '전시물을','전시품을','전시회','전시회가','전시회라서','전시회에','전시회에서','전에는','전원은','전원을','전이랑','전자레인지에','전자제품이에요','전쟁은','전적으로','전주에서','전체가','전체적으로','전통을','전통의',
    '전통적인','전합니다','전해져','전형적인','전화가','전화로','전화를','전화번호가','전화번호를','전화선이','전화였어요','전화위복이에요','전화하겠다고','전화하려다가','전화하려던','전화하면','전화하세요','전화한','전화할','전화할게',
    '전화할게요','전화할까요','전화해','전화해서','전화해요','전화했는데','전화했다고','전화했대','전화했어','전화했어요','전환점이었네요','전환할','절감이','절대로','절반만','절반은','절반이','절약돼요','절약을','절약이',
    '절약하는','절약해야겠어요','절에서','절여야','절여요','절이에요','절정이에요','절차를','젊어도','젊었을','젊으니까','젊으니까요','젊은이네','젊은이들은','점검을','점수가','점수네요','점수하고','점심도','점심시간에',
    '점심시간이에요','점심에','점심은','점심은요','점심을','점이에요','접근이','접근해야','접시가','젓가락으로','젓가락은','젓가락이','정거장이면','정거장이야','정답에','정당한','정도는','정도로','정도면','정도야',
    '정도였어','정도였어요','정도예요','정도요','정류장에서','정류장이','정리를','정리하겠습니다','정리하는','정리하세요','정리한다','정리할게','정리할게요','정리합시다','정리해','정리해야겠어요','정리했어','정말','정말로','정말요',
    '정말이에요','정보가','정보는','정보를','정보에','정보예요','정부가','정부와','정부의','정비소에','정상이래요','정상이에요','정성껏','정수기를','정식으로','정신력이','정신을','정신이','정신적','정신적으로',
    '정오에','정원에','정원을','정원이','정원이에요','정장을','정전이야','정전인가','정중하게','정직이','정직하고','정직해야','정책에','정책을','정책이','정책이에요','정책이요','정체를','정치에','정치인을',
    '정치인의','정치인이','정치적으로','정치적이에요','정하면','정해요','정해졌어요','정했어요','정확하게','정확한','정확해요','정확히','젖었겠다','젖었구나','젖었어요','젖었으니까','젖을까','제거하자','제곱미터예요','제공하죠',
    '제공해요','제대로','제도가','제도를','제습기를','제시한다','제안에','제안을','제안의','제작을','제주도','제주도가','제주도는','제주도로','제주도에','제주도에서','제주로요','제출하세요','제출할게요','제출해',
    '제출해야','제품보다','제품에','제품은','제품을','제품의','제품이','제품이라','제품이에요','제한돼','제한이','졌습니다','조각으로','조건은','조건을','조건이','조건이면','조건이에요','조그마해요','조금',
    '조금만','조금씩','조금씩이라도','조금요','조금은','조기에','조깅해요','조명이','조사가','조사부터','조사에','조사하고','조사했어요','조상님들의','조상의','조선업이','조선의','조식을','조심스러워요','조심스럽게',
    '조심하는','조심하라고','조심하세요','조심할게','조심할게요','조심해','조심해서','조심해야','조심히','조용하게','조용하겠다','조용하고','조용하네요','조용하지만','조용한','조용해서','조용해요','조용했었는데요','조용히','조절을',
    '조절할게','조정됩니다','조정할','조정할까요','조종사야','조직돼','조차','조치를','조합이','조합이에요','조화를','존경받는','존경스러운','존경하는','존경합니다','존경해야','존경해요','존경했어요','존댓말을','존댓말이',
    '존중하는','존중해야','존중해야지','존중해요','졸업식이','졸업하고','졸업한','졸업해요','졸업했어','졸업했어요','좁구나','좁네요','좁아졌어','좁지만','종교가','종교는','종로나','종류가','종류별로','종류예요',
    '종류의','종업원이','종에도','종이가','종이로','종이를','종이배를','종이에','종이에요','종합적으로','좋거든요','좋겠네요','좋겠는데','좋겠다','좋겠어요','좋겠죠','좋네요','좋다고','좋다는','좋다더라',
    '좋더라','좋더라고요','좋던데요','좋습니다','좋아서','좋아요','좋아요가','좋아요만','좋아져요','좋아졌네요','좋아졌어','좋아졌어요','좋아지게','좋아지겠네요','좋아지겠죠','좋아지고','좋아지길','좋아지니까요','좋아진','좋아질',
    '좋아하나','좋아하는','좋아하는구나','좋아하세요','좋아하셨겠네요','좋아하시나','좋아하시는','좋아하잖아','좋아하지','좋아할','좋아해','좋아해서','좋아해요','좋아했겠다','좋아했어요','좋아했잖아','좋았겠네요','좋았겠다','좋았구나','좋았네요',
    '좋았는데','좋았어','좋았어요','좋았을','좋았잖아','좋았잖아요','좋으니까','좋으니까요','좋으면','좋으세요','좋으시네요','좋은데','좋을까','좋을까요','좋잖아요','좋지는','좋지만','좌석으로','좌석을','좌석이',
    '좌석이에요','좌충우돌하면','좌회전해','죄송하지만','죄송합니다','죄송해요','주름은','주름이','주말마다','주말부터예요','주말에','주말에는','주말은','주머니','주머니를','주머니에','주먹을','주무세요','주무시는','주문한',
    '주문할게요','주문해야겠다','주문했어요','주민등록을','주민등록증을','주변에','주변을','주부도','주부터','주부터요','주사가','주사를','주사예요','주세요','주셔서','주셔야','주셨겠다','주셨어','주셨어요','주소를',
    '주시겠어요','주시는','주시면','주실래요','주십시오','주웠어요','주위를','주의보가','주의하겠습니다','주의하세요','주의해야','주인공의','주인공이','주인공이야','주인공이에요','주인데요','주인을','주인이','주인이에요','주장에는',
    '주장은','주장을','주장이','주장하고','주장해요','주제가','주제를','주제별로','주제예요','주차는','주차장에','주차장이','주차하기','주차하면','주차할','주차해야','주황색이에요','죽겠어요','죽겠으니까','죽었어요',
    '죽였어요','죽음에','준비가','준비는','준비됐어요','준비로','준비를','준비하고','준비하기는','준비하는','준비하려고','준비하세요','준비하자','준비한','준비할','준비할게','준비할게요','준비합시다','준비해야','준비해야겠다',
    '준비해야겠어요','준비해요','준비했거든요','준비했구나','준비했더라면','준비했습니다','준비했어','준비했어요','준비했으니','준비했잖아','준비했잖아요','준수해야죠','준혁이가','줄게요','줄기가','줄기를','줄까요','줄래요','줄어들고','줄어들까요',
    '줄어들었어요','줄었어요','줄에서','줄여야','줄이는','줄이라고','줄이려고요','줄이자','줄이지','줄일까','줄일까요','중간시험','중간시험이','중고등학교에서','중국도','중국어','중국은','중소기업에서','중시하는','중시하면',
    '중시한다는','중시해요','중심에','중심이','중심이에요','중에는','중에서','중요성을','중요하게','중요하군요','중요하네요','중요하니까','중요하니까요','중요하다고','중요하다고요','중요하다는','중요하대요','중요하죠','중요하지','중요하지만',
    '중요한','중요합니다','중요해','중요해요','중요해졌죠','중요했던','중요했어요','중이라','중이래','중이십니다','중이야','중이에요','중이지만','중인가','중학교','중학생','중학생이야','중학생이에요','줬어요','줬으면',
    '즐거우면','즐거워요','즐거웠어요','즐겨요','즐기는','즐기자','증가하고','증가했습니다','증거가','증거죠','증명됐어요','증상이','지각하면','지각할','지갑을','지갑이','지경은','지경이','지경이에요','지금까지',
    '지금도','지금만큼','지금은','지금의','지금이라도','지나가던','지나가야','지나간','지나갈','지나갔는데','지나갔어요','지나고','지나니까','지나면','지나면서','지나쳤어요','지나치게','지나친','지난달부터','지난달에',
    '지난달에도','지난번에','지난주','지난주가','지난주도','지난주에','지난주에도','지난해보다','지난해에','지났는데','지났어','지났어요','지내고','지내네','지내야','지내요','지냈어','지냈어요','지는요','지도를',
    '지도에서','지도자로','지루해','지루해요','지르지','지만','지방에서','지방은','지붕에서','지붕은','지붕을','지속적으로','지수가','지어졌어요','지었네요','지었어요','지역에','지역은','지역이','지역이에요',
    '지역이요','지연되고','지우개','지우지','지울까요','지원했어요','지원했지만','지으세요','지정합시다','지진이네요','지쳐서','지쳤어요','지출부터','지출을','지켜야','지켜야지','지켜요','지켰어','지켰어요','지키고',
    '지키기만','지키는','지키려고','지킬게','지킬게요','지하에','지하철','지하철로','지하철에서','지하철역에','지하철역을','지하철역이','지하철은','지하철을','지하철이','지하철이라서','지혜가','직급에','직업을','직업이',
    '직업이에요','직업이죠','직원들이','직원들한테','직원은','직원을','직원이','직원이에요','직장에','직장에서','직장에서는','직장을','직장이','직접적으로','직진하세요','직진해서','직진해요','진간장과','진간장으로','진로에',
    '진실을','진실이','진짜를','진짜야','진짜예요','진짜요','진출했어','진출했어요','진품과','진학할','진행되고','진행될수록','진행됩니다','진행할까요','진행합시다','질렀어요','질문과','질문에','질문을','질문이',
    '질문이네','질문이에요','질문했어요','질서를','집값이','집들이','집안일을','집에는','집에서','집으로','집중됐어','집중되어','집중력이','집중이','집중할래','집중해','집중해야겠어요','집중해야지','짙어요','짧게라도',
    '짧아도','짧아져요','짬뽕도','쪘어요','쪽으로','쪽으로요','찌개를','찍기로','찍어도','찍어요','찍었거든','찍었어요','찍으러','찍으면','찍을게요','찔려요','찔렸어요','찜질방','찜질방도','찜질방에',
    '찜질방에서','찜질해야','찢어질','차가운','차가워요','차가웠는데','차가웠어요','차네요','차는요','차라리','차려야','차려입었어','차렸어요','차례예요','차리면','차릴까','차별은','차분하게','차에서','차예요',
    '차원의','차이가','차이도','차이를','차이에','착용하는','착해요','찬반으로','찬성이에요','찬성하고','찬성하는','찬성합니다','찬성해요','찬성했습니다','찬성했어요','참가자가','참가하거든','참가한','참가할','참가해',
    '참가해요','참가했어','참기름','참기름도','참기름을','참기름이','참기름이라','참새인','참석이','참석자','참석하고','참석할','참석할게요','참석해야','참석했어요','참아야','참여가','참여를','참여자에게','참여할',
    '참여할까요','참여해','참여해야','참여해요','참여했어','참여했어요','참을성이','참이었는데','참이었어요','참치맛으로','찼어요','창가로','창문에','창문에서','창문을','창문이','창밖을','창의성을','창제하셨어요','창창한',
    '창피해','창피해요','찾아갔어요','찾아냈어요','찾아보세요','찾아볼게요','찾아볼까요','찾아봐','찾아봐요','찾아봤는데','찾아봤어요','찾아뵈야겠어요','찾아야','찾아왔어요','찾아요','찾았구나','찾았다','찾았어','찾았어요','찾으세요',
    '찾으셨어요','채로요','채소나','채소도','채소를','채용하고자','채울게요','책상에','책상은','책상을','책상하고','책이에요','책임감이','책임을','책임이','책임자가','책임자예요','책임져야','챔피언이','챙겨야',
    '챙겨야겠다','챙겨야지','챙겼어','챙겼어요','챙기는','챙기세요','처럼','처리하겠습니다','처리하세요','처리해야','처방전을','처방전이','처음부터','처음에','처음에는','처음엔','처음으로','처음이라','처음이었어요','처음이에요',
    '처음이죠','척하다가','천둥이','천만에요','천오백','천장에','천천히','철저한','철천하네요','철학에','철학적인','첫걸음이죠','첫날부터','첫눈에','첫인상이','청년들이','청바지','청바지를','청소가','청소기가',
    '청소년','청소년도','청소를','청소부터요','청소해','청소해야','청소해야겠어요','청소해요','청소했어','청소했어요','청양고추라서','청자가','체감은','체계는','체계적으로','체력도','체력은','체력적으로','체면을','체온이',
    '체육관에','체육관에서','체제가','체증에서','체증이','체크아웃은','체크인하고','체크인한','체포됐어요','체포되었습니다','체포였네요','체험도','체험을','쳐다봐요','쳐다봤어요','쳤는데','쳤어요','초대를','초대할','초대해',
    '초등학교','초등학교에','초록불','초록불로','초록불일','초록색','초록색을','초보예요','초보자에게','초월하죠','초코예요','초콜릿','초콜릿이','총장이','촬영은','촬영이','촬영지예요','최고로','최고야','최고였어요',
    '최고예요','최고의','최고죠','최고지','최근에','최대죠','최선을','최선이라는','최선이에요','최선이죠','최소한','최악이었겠네요','최초로','최초의','추가되었어요','추가하세요','추가할게요','추모식','추석에','추억으로',
    '추억이','추억이네요','추우니까','추우면','추운데요','추워도','추워서','추워요','추워지고','추워지네요','추웠어요','추위는','추이를','추적해야','추진해야','추천하시는','추천할게요','추천해','추천해요','추천했어요',
    '축구공은','축구를','축구보다','축구하고','축구해요','축제가','축제를','축제예요','축하드려요','축하합니다','축하해','축하해야','축하해야겠다','축하해요','출구는','출구로','출근은','출근하고','출근하는','출근하려고',
    '출근해요','출발이','출발점으로','출발하는','출발하세요','출발할','출발할까요','출발해','출발해서','출발해야','출발해야겠네요','출발해요','출발했더라면','출발했어','출발했어요','출생률','출생률이','출석해야','출입이','출장이',
    '출장이에요','출퇴근','출퇴근이','춤추고','춤추는','춤출까요','춤춰요','춥네요','충격을','충격적이었어요','충동구매했어','충분하네요','충분한','충분해','충분해요','충분했나','충분했어요','충분히','충성이','충실하면',
    '충전기','충전기요','췄어요','취급에','취급할','취미가','취미는','취미로','취미를','취미예요','취미요','취미치고','취소도','취소됐어요','취소되었다','취소할까요','취업률도','취업이','취업할','취업했어요',
    '취임했어요','취직해야','취하세요','취해야','측정할','측정해요','층으로','층이야','층인데','치거나','치과에','치대면','치대야','치더니','치려고','치료를','치료율이','치료제가','치료해서','치료해요',
    '치마를','치마예요','치면요','치안이','치약이','치열하겠네요','치열합니다','치열해요','치열해지고','치울게요','치웠어요','치킨도','치킨만','치킨은','치킨을','치킨이','치킨이랑','친구가','친구끼리는','친구니까',
    '친구도','친구들','친구들과','친구들과의','친구들을','친구들이','친구들이랑','친구랑','친구로','친구를','친구에게','친구예요','친구와','친구잖아요','친구하고','친구한테','친구한테서','친근하게','친절하게','친절하네요',
    '친절하더라고요','친절해','친절해요','친절했어요','친척을','친척이','친해져요','친해졌어','친해지면','친해질','친환경','칠월에','칠판에','칠했어요','침대에','침대에서','침수되었대요','침착하게','침체가','침침해서',
    '침해는','칩시다','칭찬해','카네이션하고','카드로','카드를','카드만','카메라','카메라가','카메라는','카메라로','카메라를','카운터에','카카오톡','카톡으로','카톡을','카페가','카페는','카페도','카페를',
    '카페에','카페에서','카페에서요','카페요','칼보다','캄캄해서','캄캄해요','캐나다에서','캐내야','캐주얼한','캠페인의','캠핑장이','캤어요','커다란','커뮤니티','커져요','커졌네요','커졌어요','커지고','커튼을',
    '커피가','커피나','커피는','커피도','커피라도','커피로','커피를','커피숍에서','커피에','커피에서','커피였어요','커피예요','커피의','컨디션이','컴어요','컴퓨터','컴퓨터가','컴퓨터를','컵라면을','컵이요',
    '컸어요','케이블을','케이크','케이크가','케이크를','켜세요','켜져요','켜졌어요','켤게요','켤까요','코너가','코너에','코로나','코리아','코리아타운이','코미디를','코스로','코앞에','코트를','콘서트',
    '콘서트가','콘서트도','콘서트에','콘텐츠','콘텐츠가','콘텐츠잖아요','콜롬비아에서','콤플렉스가','콤플렉스예요','콧물이','콩으로','콩이에요','콩쥐팥쥐를','크거든요','크게요','크기가','크기도','크나요','크네요','크레이터가',
    '크리스마스','크리스마스를','크리스마스에','크림으로','크림을','크셔서요','크시겠어요','큰가요','큰일날','큰일이다','큰일이야','키우고','키우는','키울까','키워야','키워요','킬로그램이에요','킬로미터로','킬로미터예요','킬로예요',
    '타거나','타다가','타세요','타워에','타이어를','타이틀곡이','타협해야','탄탄하면','탈게요','탈까요','탈출할','탐험이','탐험했어요','탑승구가','탑에서','탓이에요','탔어야','탔어요','태국에서','태권도를',
    '태극기야','태극기예요','태극기의','태도가','태블릿이에요','태양열','태양이','태양초','태어났어요','태어났을','태어났��','태우면','태워도','태풍에도','태풍으로','태풍이','택시가','택시를','택시보다','택시예요',
    '탤런트가','터뜨려','터뜨려도','터미널은','터미널이','터예요','터졌어요','털어야겠어요','테니까','테니스','테라스에','테이블','테이블에서','테이프가','텐데요','텔레비전','텔레비전을','토끼가','토끼를','토끼에게',
    '토론을','토론토에서','토론해요','토마토도','토마토를','토요일','토요일로','토요일에','토요일에도','토요일에요','토요일이에요','톤까지','통계를','통계에','통계와','통과되었습니다','통과되었어요','통과시컰어요','통과시켰어','통과했어',
    '통보를','통신이','통일이','통일해','통제되었다고','통치했어요','통해서','통해요','퇴근길에','퇴근하는','퇴근해도','퇴근해요','퇴사하곤','투어를','투자도','투자를','투자에서','투자한','투자했거든요','투표권이',
    '투표하러','튤립을','트럭은','트레이닝이','트레킹을','트로트','트이더라고요','특별하더라고요','특별하죠','특별한','특별해','특별해서','특별해요','특별히','특성을','특징은','특징이','특징이네요','특징이에요','튼튼하겠다',
    '튼튼한','튼튼해야','튼튼해요','튼튼해질','틀까요','틀렸어요','틀리는','틀림없어요','틀어도','틀어야겠다','티브이','티셔츠를','티켓이','팀에서','팀워크가','팀워크도','팀워크의','팀원들도','팀원들에게','팀원들을',
    '팀원들한테','팀원이','팀이에요','팀장님','팀장님이','팀장님이랑','팀장님한테','팀장으로서','파도가','파란색','파란색으로','파란색을','파란색이에요','파랑이','파래요','파랬어요','파리에','파스타','파스타를','파악하더라고요',
    '파이팅','파일로','파일을','파일함에','파장을','파전이랑','파티가','파티를','파티에','판결이','판단이','판단이었어','판단이었어요','판단하지','판단해야','판단해요','판매가','팔려요','팔렸는데요','팔렸대요',
    '팔로우할게요','팔로우해요','팔로워가','팔매량이','팔아요','팔월에','팔이에요','팝니다','팝콘은','패턴이','팬덤도','팬덤에서','팬덤이','팬들이','팬이에요','팬케이크를','퍼센트','퍼센트예요','퍼졌어요','페이지가',
    '페이지나','페이지로','페인트로','펜으로','편견에','편견을','편견이','편리하겠네요','편리하겠다','편리하죠','편리하지만','편리한','편리해요','편리해졌죠','편리해지겠네요','편리했어요','편식하지','편안한','편안해요','편안해졌어요',
    '편의점에','편의점에서','편의점이','편이라면서요','편이래요','편이셨어요','편이야','편이에요','편이죠','편이지','편인가요','편인데','편지를','편하게','편하죠','편해서','편해요','편해졌어요','편해지더라고요','편했어요',
    '편했을','펼쳐져','펼쳐져요','펼쳤어요','펼치고','평가되고','평가하나요','평가해요','평년보다','평등한','평등해야','평범하지만','평범한','평생을','평소에','평일에','평일에는','평화가','평화로운','평화로워요',
    '평화를','포근해','포기하고','포기하기엔','포기하면','포기하지','포기한다기보다','포기할','포부를','포스터를','포용적','포유류에','포장만','포장이구나','포장이에요','포장이요','포함돼','포함돼요','포함되는데','포함된',
    '포함하면','폭력은','폭염이었지','폭우가','폭우로','폭우를','폭포가','표고버섯으로','표시가','표시를','표정이','표정이에요','표현도','표현을','표현이','표현이네요','표현이에요','표현하기','표현하는','표현하세요',
    '표현한','표현할까요','표현해요','푸르네요','푸르러요','풀겠어','풀기만','풀려면','풀려서','풀렸어요','풀밭에','풀부하죠','풀어졌네','풀었어요','품절이더라고요','품질도','품질은','품질을','품질이','풍경이',
    '풍경이네요','풍경이에요','풍경이죠','풍경이지','풍미가','풍부하게','풍부하네요','풍부하며','풍부하시겠다','풍부한','풍부할','풍부합니다','풍부해','풍부해요','풍선을','풍요가','풍월을','프라이로','프라이팬에','프랑스어를',
    '프랑스와','프로그램','프로그램도','프로그램에','프로그램은','프로그램을','프로그램이','프로그램이네요','프로그램이야','프로그램이에요','프로야구','프로예요','프로젝트','프로젝트가','프로젝트네요','프로젝트는','프로젝트를','프로젝트에','프로젝트에서','프로젝트예요',
    '프로젝트의','프리랜서예요','플라스틱','플라스틱을','플랭크를','피곤하거든요','피곤하겠다','피곤하고','피곤하다고','피곤하세요','피곤한데','피곤할','피곤해','피곤해서','피곤해요','피곤했겠어요','피곤했군요','피곤했나','피곤했어요','피곳해요',
    '피드백을','피부가','피시방에','피시방에서','피아노','피아노랑','피아노를','피아노보다','피어서','피어요','피었네','피었어','피었어요','피우고','피우면','피우세요','피울게요','피워도','피워야겠다','피자는',
    '피자요','피해가','피해는','피해를','피해에','핀셋으로','핀어요','필까요','필수야','필요하겠네','필요하겠네요','필요하겠다','필요하고','필요하면','필요하세요','필요하잖아요','필요하죠','필요하지','필요한','필요한데',
    '필요할','필요합니다','필요해','필요해요','필요해졌어요','핌어요','핑계가','핑계를','하겠습니다','하겠어','하고','하기만','하기에','하기에는','하기에도','하나가','하나도','하나둘','하나만','하나씩',
    '하나요','하네요','하는군요','하는데','하늘에','하늘을','하늘이','하늘이에요','하니까','하다','하다니','하더니','하더라고요','하라고','하려고','하려고요','하루에','하루였어요','하마터면','하면서',
    '하반기에도','하세요','하셔요','하셨겠네요','하셨겠죠','하셨어','하셨어요','하시네요','하시는','하시더라고요','하시면','하신대','하얘요','하여튼','하와이로','하잖아','하잖아요','하지만','학과가','학과인데',
    '학교가','학교구나','학교까지','학교를','학교마다','학교에','학교에서','학교였어요','학교예요','학기에','학기에요','학년이에요','학생들도','학생들은','학생들을','학생들의','학생들이','학생은','학생의','학생이',
    '학생이야','학생이에요','학습을','학습이','학원에','학원에서','학위가','학위를','한강에','한강에서','한강의','한국도','한국만의','한국말','한국식으로','한국어','한국어가','한국어는','한국어도','한국어랑',
    '한국어로','한국어를','한국어만','한국어부터','한국어야','한국어의','한국어하고','한국에','한국에는','한국에도','한국에서','한국에서는','한국은','한국은행','한국을','한국의','한국이','한국이라는','한국인의','한국인인',
    '한국일보에서','한국전쟁이','한국하고','한글로','한글에서','한글은','한글을','한글의','한꺼번에','한다고','한동안','한라산에','한라산에서도','한라산하고','한류가','한마디가','한민족은','한번도','한복을','한숨을',
    '한숨이','한식당이','한식당이에요','한식을','한식이','한식이랑','한옥이','한우를','한이라는','한인타운도','한자는','한자도','한자를','한잔하면서','한정식','한쪽만','한쪽으로','한참을','한창이에요','한턱내야지',
    '한테','할게요','할까요','할래요','할머니','할머니가','할머니는','할머니도','할아버지','할아버지가','할아버지는','할아버지도','할아버지한테','할인을','할인이','할인이야','할인이에요','함께한','함부로','합격이에요',
    '합격하는','합격하셨다면서요','합격한','합격할','합격해서','합격했어','합격했어요','합니다','합류한','합리적이에요','합시다','합의가','합의에','합의했어요','합쳐요','항공권과','항공권을','항공사를','항의해야','해',
    '해결돼요','해결됐어','해결될','해결이','해결책은','해결책을','해결책이','해결하고','해결할','해결할까요','해결합시다','해결해','해결해야','해결해야지','해결해요','해내더라','해냈어요','해로워요','해마다','해바라기',
    '해변으로','해산물이','해석이','해석할','해소에','해야겠네요','해야겠다','해야겠어요','해야죠','해외로','해외에','해외여행','해요','해운대가','해운대는','해운대를','해운대에','해운대에서','해운대요','해질녕이',
    '핵심은','핵심이에요','핵심이죠','핸드폰','핸드폰만','핸드폰에','핸드폰으로','핸들을','햄버거','햇볕이','햇빛이','햇살은','햇살이','했거든요','했구나','했는데','했는데요','했다기보다','했더니','했습니다',
    '했어요','했으니까','했으니까요','했을까요','했잖아','했잖아요','했지만','행동으로','행동은','행동을','행동하세요','행동하지','행동해라','행동했어요','행복은','행복의','행복이','행복이에요','행복하게','행복한',
    '행복할','행복해야','행복해요','행복했던','행복했어요','행사가','행사는','행사니까요','행사라서','행사를','행사에','행사의','행사입니다','행위가','행위를','향기가','향기예요','향상시키고자','허락해','허리가',
    '허리를','허비하면','허용돼요','허용되지','헌법에','헌법으로','험해서','헤어스타일을','헤어졌어요','헤어지자고','헬스장도','헬스장에','혁신이','현관에서','현금으로','현금이나','현대가','현대인의','현대적인','현상은',
    '현실적인','현장에서','현재로서는','현지에서','혐의로','혐의예요','협력의','협력이','협력이네요','협력하기로','협력하는','협력해야죠','협상에서는','협상이','협상해','형광펜으로','형제가','형제끼리','형제는','형태는',
    '형태로요','혜택을','혜택이','혜택이에요','호기심','호기심이','호랑이도','호랑이를','호선에서','호선이에요','호수가','호수에','호수의','호주로','호주에','호칭이','호텔까지','호텔에','호텔에서','호텔은',
    '호텔을','호텔이','호텔이네요','혼란스러워요','혼란스러웠어요','혼밥하는','혼밥할','혼자가','혼자예요','홈페이지에서','홍길동전을','홍보용','홍수가','화가가','화났어','화났어요','화내실','화내지','화두야','화려하네요',
    '화려하다','화려하지만','화려한','화려해요','화면이','화목한','화분에','화분을','화상은','화씨예요','화요일에','화장실','화장실에','화장실이','화장품이','확고해요','확대됐어요','확대할','확률이','확실한',
    '확실해요','확실히','확인이','확인하겠습니다','확인하고','확인하라잖아요','확인하세요','확인하지','확인할게','확인할게요','확인합시다','확인해','확인해야','확인해요','확인했습니다','확인했어','확인했어요','확정됐군요','확정되었나요','환경과',
    '환경에는','환경을','환경이','환불도','환불이','환승하세요','환영이에요','환영합니다','환영해','환영해요','환영했어','환영회가','환자가','환자를','환자의','활동으로','활동은','활동을','활동이','활동하고',
    '활동해','활동해요','활발한','활발해요','활발해졌어요','활발해지겠네요','활용이','활용하고','활용한','활용해','홥위에','황금색으로','회복되고','회복되면','회복한','회복했대요','회사가','회사는','회사야','회사에',
    '회사에서','회사에서는','회사에서요','회사원이에요','회사의','회사인데요','회색이에요','회식도','회식이야','회원권에','회원에게','회원으로','회원을','회원이','회의가','회의는','회의를','회의실에서','회의실을','회의에',
    '회의에서','회의에서는','회의였네요','회의였어요','회장이','회장이에요','회전이','회화를','횡단보도로','횡단보도에서','횡단보도에서요','효과가','효과네요','효과인','효과적이네요','효과적이라고','효과적이에요','효과적인걸요','효도하는','효율이',
    '후기를','후라이드','후라이드가','후라이드로','후배를','후보로','후보자는','후보자보다','후에요','후임자는','후춧가루','후회돼','후회하기','후회하지','후회할','후회해도','후회해요','훈련도','훈련을','훈련했어요',
    '훌륭한','훌륭합니다','훌륭해','훌륭했어요','휘두르면','휴가를','휴가에','휴게소에','휴대폰','휴대폰을','휴일이에요','휴지에','휴지통이','흐려요','흐르고','흔들려요','흔들면서요','흔들어','흔들어요','흘러나오는',
    '흘러나와요','흘려요','흘렸어요','흘리면','흙이에요','흡연이','흥미로워서','흥미로워요','흥미롭네요','흥미롭죠','흩뜨려','희망을','희망이','희생이','흰색을','히터를','힘내세요','힘내요','힘내자','힘든데',
    '힘들겠네요','힘들겠다','힘들겠어요','힘들긴','힘들다고','힘들면','힘들어','힘들어서','힘들어요','힘들어졌어','힘들어��','힘들었겠네요','힘들었겠다','힘들었겠어요','힘들었는데','힘들었는데요','힘들었어','힘들었어요','힘들었죠','힘들었지',
    '힘들었지만','힘들었지만요','힘들죠','힘들지','힘들지라도','힘들지만','힘쓰고','��디까지예요','��아해','��야','���존'
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
  if (langCode === 'zh') {
    // Strip CJK characters (1-2 chars, handled by hanzi+pinyin structure;
    // only the pinyin in parentheses should be checked as vocabulary tokens)
    text = text.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g, ' ');
  }
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
