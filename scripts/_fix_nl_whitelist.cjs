#!/usr/bin/env node
/**
 * _fix_nl_whitelist.cjs
 * Replaces the minimal Dutch nl whitelist in pp63_audit.cjs with a comprehensive one.
 * Run once from repo root: node scripts/_fix_nl_whitelist.cjs
 */
'use strict';
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pp63_audit.cjs');
let content = fs.readFileSync(filePath, 'utf8');

const old = "  'nl': new Set(['de','het','een','en','of','maar','als','dat','omdat','ik','jij','je','u','hij','zij','ze','wij','we','jullie','zij','mij','me','jou','hem','haar','hen','hun','is','zijn','was','waren','ben','bent','heeft','hebt','hebben','had','hadden','niet','geen','ook','al','nog','meer','alleen','zo','heel','erg','te','in','op','bij','voor','met','naar','van','over','onder','door','tegen','achter','naast','tussen','wie','wat','waar','wanneer','hoe','waarom','welke','welk']),";

if (!content.includes(old)) {
  console.log('ERROR: old string not found - already patched or file changed');
  process.exit(1);
}

// Build the comprehensive nl word list
const words = [
  // Articles
  'de','het','een',
  // Conjunctions
  'en','of','maar','als','dat','omdat','want','zodat','terwijl','hoewel',
  'tenzij','totdat','nadat','voordat','zodra','wanneer','indien','noch',
  'ofwel','zowel','dus','echter','bovendien','overigens','toch','namelijk',
  // Personal pronouns
  'ik','jij','je','u','hij','zij','ze','het','wij','we','jullie',
  'mij','me','jou','hem','haar','hen','hun','zich','zichzelf',
  // Demonstratives
  'dit','dat','deze','die',
  // Indefinite pronouns / quantifiers
  'men','iemand','niemand','iets','niets','alles','allemaal','alle','elke','elk',
  'beiden','beide','iedere','ieder','zulke','zulk','dergelijke','dergelijk',
  'veel','weinig','meer','minder','meeste','minste','genoeg','voldoende',
  'sommige','sommigen','andere','anderen',
  // Possessives
  'mijn','jouw','uw','zijn','haar','ons','onze','jullie','hun',
  // Question words
  'wie','wat','waar','wanneer','hoe','waarom','welke','welk','hoeveel',
  'waarmee','waarvoor','waarover','waarnaar','waarvan','waardoor',
  // Prepositions
  'in','op','bij','voor','met','naar','van','over','onder','door',
  'tegen','achter','naast','tussen','aan','om','tot','uit','langs',
  'vanaf','sinds','tijdens','zonder','binnen','buiten','rondom',
  'ten','per','via','behalve','volgens','ondanks','dankzij',
  // Negation
  'niet','geen',
  // Common adverbs
  'ook','al','nog','meer','alleen','zo','heel','erg','zeer','te',
  'hier','daar','nu','dan','straks','altijd','nooit','vaak','soms',
  'snel','langzaam','graag','goed','slecht','precies','juist',
  'gewoon','echt','eigenlijk','misschien','wellicht','waarschijnlijk',
  'zeker','vast','blijkbaar','kennelijk',
  'wel','toch','even','eens','net','pas','bijna',
  'ongeveer','circa','minstens','maximaal',
  'meteen','direct','dadelijk','eerst','daarna','vervolgens',
  'vandaag','morgen','gisteren','vroeger','later','binnenkort',
  'helaas','gelukkig','hopelijk','jammer','inderdaad','absoluut',
  'totaal','volledig','compleet','geweldig','fantastisch','prima',
  'lekker','leuk','mooi','fijn','interessant','typisch','bijzonder',
  'makkelijk','gemakkelijk','eenvoudig','moeilijk','lastig','zwaar',
  'belangrijk','noodzakelijk','nodig','verplicht','mogelijk','onmogelijk',
  'logisch','begrijpelijk','duidelijk','onduidelijk','vaag','helder',
  'positief','negatief','redelijk','relatief','kritisch','slim',
  'creatief','praktisch','effectief','efficient',
  'uniek','zeldzaam',
  'hard','zacht','hoog','laag','breed','smal','diep',
  'vol','leeg','open','dicht','vrij','bezig','klaar','weg','mee',
  'tegelijk','tenslotte','uiteraard','vanzelfsprekend',
  'weliswaar','daardoor','daarmee','daarvoor','daarover',
  'intussen','ondertussen','inmiddels','hierdoor',
  'immers','tenminste','althans','sowieso',
  'live','online','digitaal','virtueel','sociaal',
  // zijn (to be)
  'zijn','ben','bent','is','was','waren','geweest',
  'zou','zouden','zult','zal','zullen',
  // hebben (to have)
  'hebben','heb','hebt','heeft','had','hadden','gehad',
  // worden (to become)
  'worden','word','wordt','werd','werden','geworden',
  // kunnen (can)
  'kunnen','kan','kunt','kon','konden','gekund',
  // moeten (must)
  'moeten','moet','moest','moesten','gemoeten',
  // willen (to want)
  'willen','wil','wilt','wilde','wilden','gewild',
  // mogen (may)
  'mogen','mag','mocht','mochten','gemogen',
  // gaan (to go)
  'gaan','ga','gaat','ging','gingen','gegaan',
  // komen (to come)
  'komen','kom','komt','kwamen','gekomen',
  // zien (to see)
  'zien','zie','ziet','zag','zagen','gezien',
  // geven (to give)
  'geven','geef','geeft','gaf','gaven','gegeven',
  // zeggen (to say)
  'zeggen','zeg','zegt','zei','zeiden','gezegd',
  // spreken (to speak)
  'spreken','spreek','spreekt','sprak','spraken','gesproken',
  // nemen (to take)
  'nemen','neem','neemt','nam','namen','genomen',
  // vinden (to find/think)
  'vinden','vind','vindt','vond','vonden','gevonden',
  // denken (to think)
  'denken','denk','denkt','dacht','dachten','gedacht',
  // brengen (to bring)
  'brengen','breng','brengt','bracht','brachten','gebracht',
  // rijden (to ride/drive)
  'rijden','rijd','rijdt','reed','reden','gereden',
  // lopen (to walk/run)
  'lopen','loop','loopt','liep','liepen','gelopen',
  // liggen (to lie)
  'liggen','lig','ligt','lag','lagen','gelegen',
  // staan (to stand)
  'staan','sta','staat','stond','stonden','gestaan',
  // zitten (to sit)
  'zitten','zit','zat','zaten','gezeten',
  // weten (to know)
  'weten','weet','wist','wisten','geweten',
  // werken (to work)
  'werken','werk','werkt','werkte','werkten','gewerkt',
  // wonen (to live/reside)
  'wonen','woon','woont','woonde','woonden','gewoond',
  // kopen (to buy)
  'kopen','koop','koopt','kocht','kochten','gekocht',
  // eten (to eat)
  'eten','eet','at','aten','gegeten',
  // drinken (to drink)
  'drinken','drink','drinkt','dronk','dronken','gedronken',
  // leren (to learn/teach)
  'leren','leer','leert','leerde','leerden','geleerd',
  // lezen (to read)
  'lezen','lees','leest','las','lazen','gelezen',
  // schrijven (to write)
  'schrijven','schrijf','schrijft','schreef','schreven','geschreven',
  // horen (to hear)
  'horen','hoor','hoort','hoorde','hoorden','gehoord',
  // blijven (to stay)
  'blijven','blijf','blijft','bleef','bleven','gebleven',
  // maken (to make)
  'maken','maak','maakt','maakte','maakten','gemaakt',
  // doen (to do)
  'doen','doe','doet','deed','deden','gedaan',
  // helpen (to help)
  'helpen','help','helpt','hielp','hielpen','geholpen',
  // spelen (to play)
  'spelen','speel','speelt','speelde','speelden','gespeeld',
  // kennen (to know/acquainted)
  'kennen','ken','kent','kende','kenden','gekend',
  // krijgen (to get/receive)
  'krijgen','krijg','krijgt','kreeg','kregen','gekregen',
  // beginnen (to begin)
  'beginnen','begin','begint','begon','begonnen',
  // gebruiken (to use)
  'gebruiken','gebruik','gebruikt','gebruikte','gebruikten',
  // stellen (to put/ask)
  'stellen','stel','stelt','stelde','stelden','gesteld',
  // kijken (to look/watch)
  'kijken','kijk','kijkt','keek','keken','gekeken',
  // voelen (to feel)
  'voelen','voel','voelt','voelde','voelden','gevoeld',
  // houden (to hold/love)
  'houden','houd','houdt','hield','hielden','gehouden',
  // trekken (to pull/go)
  'trekken','trek','trekt','trok','trokken','getrokken',
  // tonen (to show)
  'tonen','toon','toont','toonde','toonden','getoond',
  // vragen (to ask)
  'vragen','vraag','vraagt','vroeg','vroegen','gevraagd',
  // volgen (to follow)
  'volgen','volg','volgt','volgde','volgden','gevolgd',
  // praten (to talk)
  'praten','praat','praatte','praatten','gepraat',
  // kiezen (to choose)
  'kiezen','kies','kiest','koos','kozen','gekozen',
  // stijgen (to rise/increase)
  'stijgen','stijg','stijgt','steeg','stegen','gestegen',
  // bieden (to offer)
  'bieden','bied','biedt','bood','boden','geboden',
  // zoeken (to search)
  'zoeken','zoek','zoekt','zocht','zochten','gezocht',
  // dragen (to carry/wear)
  'dragen','draag','draagt','droeg','droegen','gedragen',
  // bestaan (to exist)
  'bestaan','besta','bestaat','bestond','bestonden',
  // besparen (to save money)
  'besparen','bespaar','bespaart','bespaarde','bespaard',
  // beschrijven (to describe)
  'beschrijven','beschrijf','beschrijft','beschreef','beschreven',
  // beslissen (to decide)
  'beslissen','beslis','beslist','besliste','beslisten',
  // bezoeken (to visit)
  'bezoeken','bezoek','bezoekt','bezocht','bezochten',
  // bellen (to call)
  'bellen','bel','belt','belde','belden','gebeld',
  // leven (to live)
  'leven','leef','leeft','leefde','leefden','geleefd',
  // bereiken (to reach/achieve)
  'bereiken','bereik','bereikt','bereikte','bereikten',
  // verkopen (to sell)
  'verkopen','verkoop','verkoopt','verkocht','verkochten',
  // vertellen (to tell)
  'vertellen','vertel','vertelt','vertelde','vertelden','verteld',
  // begrijpen (to understand)
  'begrijpen','begrijp','begrijpt','begreep','begrepen',
  // verstaan (to understand speech)
  'verstaan','versta','verstaat','verstond','verstonden',
  // ontdekken (to discover)
  'ontdekken','ontdek','ontdekt','ontdekte','ontdekten',
  // luisteren (to listen)
  'luisteren','luister','luistert','luisterde','geluisterd',
  // bewegen (to move)
  'bewegen','beweeg','beweegt','bewoog','bewogen',
  // lukken (to succeed)
  'lukken','lukt','lukte','gelukt',
  // klinken (to sound)
  'klinken','klink','klinkt','klonk','geklonken',
  // raken (to touch/affect)
  'raken','raak','raakt','raakte','raakten','geraakt',
  // slagen (to succeed)
  'slagen','slaag','slaagt','slaagde','slaagden','geslaagd',
  // betalen (to pay)
  'betalen','betaal','betaalt','betaalde','betaald',
  // strijden (to fight)
  'strijden','strijd','strijdt','streed','streden','gestreden',
  // hopen (to hope)
  'hopen','hoop','hoopt','hoopte','hoopten','gehoopt',
  // verwachten (to expect)
  'verwachten','verwacht','verwachtte','verwachtten',
  // stoppen (to stop)
  'stoppen','stop','stopt','stopte','gestopt',
  // winnen (to win)
  'winnen','win','wint','won','wonnen','gewonnen',
  // verliezen (to lose)
  'verliezen','verlies','verliest','verloor','verloren',
  // wachten (to wait)
  'wachten','wacht','wachtte','gewacht',
  // vergeten (to forget)
  'vergeten','vergeet','vergat','vergaten',
  // herinneren (to remember)
  'herinneren','herinner','herinnert','herinnerde','herinnerd',
  // duren (to last)
  'duren','duurt','duurde','geduurd',
  // gelden (to apply)
  'gelden','geldt','gold','golden','gegolden',
  // smaken (to taste)
  'smaken','smaak','smaakt','smaakte','gesmaakt',
  // ruiken (to smell)
  'ruiken','ruik','ruikt','rook','geroken',
  // vallen (to fall)
  'vallen','val','valt','viel','vielen','gevallen',
  // blijken (to appear/turn out)
  'blijken','blijkt','bleek','gebleken',
  // veranderen (to change)
  'veranderen','verander','verandert','veranderde','veranderd',
  // verbeteren (to improve)
  'verbeteren','verbeter','verbetert','verbeterde','verbeterd',
  // beïnvloeden (to influence)
  'beïnvloeden','beïnvloed','beïnvloedt','beïnvloedde',
  // zorgen (to take care / to cause)
  'zorgen','zorg','zorgt','zorgde','gezorgd',
  // proberen (to try)
  'proberen','probeer','probeert','probeerde','geprobeerd',
  // groeien (to grow)
  'groeien','groei','groeit','groeide','gegroeid',
  // dalen (to fall/decrease)
  'dalen','daal','daalt','daalde','gedaald',
  // meten (to measure)
  'meten','meet','mat','maten','gemeten',
  // bouwen (to build)
  'bouwen','bouw','bouwt','bouwde','gebouwd',
  // breken (to break)
  'breken','breek','breekt','brak','gebroken',
  // openen (to open)
  'openen','open','opent','opende','geopend',
  // sluiten (to close)
  'sluiten','sluit','sloot','gesloten',
  // stemmen (to vote)
  'stemmen','stem','stemt','stemde','gestemd',
  // organiseren (to organize)
  'organiseren','organiseer','organiseert','organiseerde','georganiseerd',
  // plannen (to plan)
  'plant','plande','gepland',
  // bespreken (to discuss)
  'bespreken','bespreek','bespreekt','besprak','besproken',
  // ondersteunen (to support)
  'ondersteunen','ondersteun','ondersteunt','ondersteunde','ondersteund',
  // doorgaan (to continue)
  'doorgaan','gaat door','ging door','doorgegaan',
  // verdwijnen (to disappear)
  'verdwijnen','verdwijn','verdwijnt','verdween','verdwenen',
  // verschijnen (to appear)
  'verschijnen','verschijn','verschijnt','verscheen','verschenen',
  // leiden (to lead)
  'leiden','leid','leidt','leidde','geleid',
  // regelen (to arrange/manage)
  'regelen','regel','regelt','regelde','geregeld',
  // sturen (to send/steer)
  'sturen','stuur','stuurt','stuurde','gestuurd',
  // koken (to cook)
  'koken','kook','kookt','kookte','gekookt',
  // tellen (to count)
  'tellen','tel','telt','telde','geteld',
  // controleren (to check)
  'controleren','controleer','controleert','controleerde','gecontroleerd',
  // leggen (to lay/put)
  'leggen','leg','legt','legde','gelegd',
  // Common participials
  'geweest','geworden','gekregen','gegaan','gezegd','gedaan','gemaakt',
  'gezien','gehad','gekomen','gebleven','gestaan','gelopen','gelegen',
  'gewerkt','gewoond','geleerd','geschreven','gevonden','gedacht',
  'gesproken','gestemd','gelekt','gewijzigd','gesteld',
  'georganiseerd','gepland','gericht','beschreven','aangeboden',
  'gestart','gestopt','geslaagd','gevraagd','gezocht','gevuld',
  'gebeld','bezocht','gevoeld','gemeten','gebouwd',
  'gespaard','gewacht','geluisterd','gebruikt',
  // Adjectives uninflected and -e forms
  'goed','goede','slecht','slechte',
  'groot','grote','klein','kleine',
  'oud','oude','nieuw','nieuwe',
  'jong','jonge','lang','lange',
  'kort','korte','warm','warme',
  'koud','koude','mooi','mooie',
  'lelijk','lelijke','sterk','sterke',
  'zwak','zwakke','hard','harde',
  'zacht','zachte','hoog','hoge',
  'laag','lage','diep','diepe',
  'snelle','traag','trage',
  'breed','brede','smal','smalle',
  'vol','volle','leeg','lege',
  'vrij','vrije','blij','blije',
  'druk','drukke','stil','stille',
  'vreemd','vreemde','duur','dure',
  'goedkoop','goedkope','rijk','rijke',
  'arm','arme','ziek','zieke',
  'gezond','gezonde','moe',
  'wakker','bang','bange',
  'boos','boze','verdrietig','verdrietige',
  'rustig','rustige','klaar',
  'krap','krappe','zwaar','zware',
  'licht','lichte','vers','verse',
  'zoet','zoete','zout','zoute',
  'bitter','bittere','zuur','zure',
  'pittig','pittige','stevig','stevige',
  'lekker','lekkere','vies','vieze',
  'nat','natte','droog','droge',
  'schoon','schone','vuil','vuile',
  'helder','heldere','donker','donkere',
  'geweldig','geweldige',
  'fantastisch','fantastische',
  'prima','moeilijk','moeilijke',
  'makkelijk','makkelijke',
  'eenvoudig','eenvoudige',
  'lastig','lastige',
  'ingewikkeld','ingewikkelde',
  'interessant','interessante',
  'saai','saaie','leuk','leuke',
  'aardig','aardige',
  'vriendelijk','vriendelijke',
  'beleefd','beleefde',
  'onbeleefd','onbeleefde',
  'eerlijk','eerlijke',
  'oneerlijk','oneerlijke',
  'slim','slimme','dom','domme',
  'grappig','grappige',
  'serieus','serieuze',
  'populair','populaire',
  'beroemd','beroemde',
  'onbekend','onbekende',
  'bekend','bekende',
  'bijzonder','bijzondere',
  'gewoon','gewone',
  'speciaal','speciale',
  'normaal','normale',
  'typisch','typische',
  'uniek','unieke',
  'zeldzaam','zeldzame',
  'schattig','schattige',
  'knap','knappe',
  'lief','lieve','streng','strenge',
  'zorgvuldig','zorgvuldige',
  'nauwkeurig','nauwkeurige',
  'geduldig','geduldige',
  'haastig','haastige',
  'gevaarlijk','gevaarlijke',
  'veilig','veilige',
  'pijnlijk','pijnlijke',
  'prettig','prettige',
  'handig','handige',
  'nuttig','nuttige',
  'effectief','effectieve',
  'efficient',
  'creatief','creatieve',
  'innovatief','innovatieve',
  'praktisch','praktische',
  'theoretisch','theoretische',
  'logisch','logische',
  'realistisch','realistische',
  'ideaal','ideale',
  'perfect','perfecte',
  'fout','foute','juist','juiste',
  'correct','correcte',
  'verkeerd','verkeerde',
  'volledig','volledige',
  'compleet','complete',
  'onvolledig','onvolledige',
  'duidelijk','duidelijke',
  'onduidelijk','onduidelijke',
  'vaag','vage','concreet','concrete',
  'positief','positieve',
  'negatief','negatieve',
  'neutraal','neutrale',
  'redelijk','redelijke',
  'relatief','relatieve',
  'absoluut','absolute',
  'zeker','zekere',
  'onzeker','onzekere',
  'belangrijk','belangrijke','belangrijkste',
  'noodzakelijk','noodzakelijke',
  'mogelijk','mogelijke',
  'onmogelijk','onmogelijke',
  'waarschijnlijk',
  'bewust','bewuste',
  'gevoelig','gevoelige',
  'begrijpelijk','begrijpelijke',
  'zichtbaar','zichtbare',
  'duurzaam','duurzame',
  'tijdelijk','tijdelijke',
  'tijdloos','tijdloze',
  'actueel','actuele',
  'modern','moderne',
  'klassiek','klassieke',
  'historisch','historische',
  'cultureel','culturele',
  'sociaal','sociale',
  'politiek','politieke',
  'economisch','economische',
  'juridisch','juridische',
  'technisch','technische',
  'medisch','medische',
  'wetenschappelijk','wetenschappelijke',
  'academisch','academische',
  'professioneel','professionele',
  'persoonlijk','persoonlijke',
  'algemeen','algemene',
  'officieel','offici\u00eble',
  'informeel','informele',
  'formeel','formele',
  'publiek','publieke',
  'nationaal','nationale',
  'internationaal','internationale',
  'lokaal','lokale',
  'regionaal','regionale',
  // Comparatives/superlatives
  'beter','best','beste','slechtste',
  'groter','grootst','grootste',
  'kleiner','kleinst','kleinste',
  'ouder','oudst','oudste',
  'jonger','jongst','jongste',
  'sneller','snelst','snelste',
  'mooier','mooist','mooiste',
  'meest','minst','minste',
  'zwaarder','zwaarst','zwaarste',
  'hoger','hoogst','hoogste',
  'lager','laagst','laagste',
  'duurder','duurst','duurste',
  'goedkoper','goedkoopst','goedkoopste',
  'sterker','sterkst','sterkste',
  'rijker','rijkst','rijkste',
  'moeilijker','moeilijkst','moeilijkste',
  'makkelijker','makkelijkst','makkelijkste',
  'belangrijker','belangrijkst','belangrijkste',
  // Common nouns as discourse scaffolding
  'dag','dagen','week','weken','maand','maanden','jaar','jaren',
  'tijd','tijden','moment','momenten','keer','periode',
  'man','mannen','vrouw','vrouwen','kind','kinderen','meisje','jongen',
  'vriend','vriendin','familie','gezin','vader','moeder','ouders',
  'collega','medewerker','mensen','persoon',
  'huis','thuis','kamer','keuken','tuin',
  'stad','steden','land','landen','wereld',
  'school','werk','kantoor','winkel',
  'auto','fiets','trein','bus',
  'boek','film','muziek','sport','spel',
  'plan','plannen','idee','keuze','keuzes',
  'doel','doelen','weg','wegen','reden','redenen',
  'situatie','situaties','probleem','problemen','oplossing',
  'vraag','vragen','antwoord','antwoorden','informatie',
  'leven','levens','toekomst','verleden','begin','einde',
  'systeem','systemen','proces','processen','resultaat',
  'effect','effecten','gevaar','gevaren','kans','kansen',
  'steun','hulp','advies','kritiek','respect','begrip',
  'contact','controle','functie','functies','rol','rollen',
  'stijl','stijlen','type','typen','soort','soorten',
  'mening','meningen','standpunt','visie','beleid',
  'punt','punten','detail','details','feit','feiten',
  'recht','rechten','plicht','plichten','regel','regels',
  'maatregel','maatregelen','procedure','procedures',
  'uitkomst','uitkomsten','conclusie','conclusies',
  'rapport','rapporten','onderzoek','onderzoeken',
  'studie','studies','experiment','experimenten',
  'analyse','analyses','statistiek','gegevens','data',
  // Days, months, seasons
  'maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag','zondag',
  'januari','februari','maart','april','mei','juni',
  'juli','augustus','september','oktober','november','december',
  'lente','zomer','herfst','winter',
  // Numbers as words
  'twee','drie','vier','vijf','zes','zeven','acht','negen','tien',
  'elf','twaalf','twintig','dertig','veertig','vijftig',
  'honderd','duizend','eerste','tweede','derde',
  'euro','cent','procent','meter','kilometer','kilo','liter',
  // Common international loanwords in Dutch examples
  'website','internet','online','app','team','sport','film','hotel',
  'restaurant','museum','park','station','theater','concert',
  'computer','telefoon','televisie','radio','camera',
  'corona','virus','crisis','stress','energie',
  'politiek','democratie','economie','technologie',
  'natuur','milieu','klimaat','cultuur','religie','psychologie',
  'debat','project','principe',
  'concept','categorie','sector','regio','fase',
  'media','nieuws','artikel','document',
  'directeur','manager','expert','specialist',
  'organisatie','organisaties','bedrijf','bedrijven','instelling',
  'campagne','campagnes','partij','beweging','groep','teams',
  'fraude','corruptie','conflict',
  'strategie','beleid','contract','protocol','agenda',
  'budget','risico','succes','resultaat','prestatie','prestaties',
  'video','foto','design','logo','format',
  'yoga','fitness','training','coaching','therapie',
  'antibiotica','diagnose','symptoom','behandeling',
  'alcohol','tabak',
  'startups','innovatie','platform',
  'privacy','data','algoritme',
  // High-frequency Dutch societal/abstract terms
  'leeftijd','leeftijden','overheid','samenleving','maatschappij',
  'onderwijs','gezondheidszorg','verkiezing','verkiezingen',
  'minister','premier','rechter','advocaat','dokter','arts',
  'belasting','belastingen','inkomen','loon','salaris','uitkering',
  'huur','hypotheek','lening','investering','pensioen',
  'ontslag','sollicitatie','vacature','vacatures','loopbaan',
  'diploma','opleiding','cursus','examen','beurs',
  'strand','zee','bos','berg','rivier','natuur',
  'fitnessruimte','sportschool','zwembad','zwembaden',
  'supermarkt','apotheek','bibliotheek',
  'vliegtuig','metro','tram','boot',
  'krant','tijdschrift','gedicht','roman','verhaal',
  'wedstrijd','wedstrijden','competitie','toernooi','kampioenschap',
  'festival','voorstelling','tentoonstelling','expositie',
  'vergadering','bijeenkomst','conferentie','congres',
  'ramp','ongeluk',
  'reorganisatie','hervorming','wet','wetten','besluit',
  'toespraak','speech','presentatie','lezing','discussie',
  'gevolg','gevolgen','oorzaak','oorzaken','aanleiding',
  'kwaliteit','kwantiteit','waarde','waarden','norm','normen',
  'traditie','tradities','gewoonten','gebruik',
  'godsdienst','geloof','kerk','moskee','synagoge','tempel',
  'kunst','dans','literatuur','architectuur',
  'voetbal','basketball','tennis','atletiek','hockey',
  'misdaad','straf','gevangenis','bewijs','aanklacht','rechtbank',
  'ontdekking','uitvinding',
  // Proper nouns commonly used in Dutch examples
  'Nederland','Amsterdam','Rotterdam','Utrecht','Groningen',
  'Eindhoven','Tilburg','Almere','Breda',
  'Europa','Duitsland','Belgi\u00eb','Frankrijk','Engeland',
  'Anna','Jan','Piet','Marie','Sophie','Thomas','Lisa','Max',
  'Anne','Lena','Tim','Tom','Eva','Erik','Karin','Peter',
  'Pieter','Karel','Joris','Liesbeth','Mark','Sander','Roos',
  // Discourse markers / pragmatic particles
  'Laat','laten','laat','nou','nee','ja','joh','hoor',
  // Additional high-freq verb forms from audit violations
  'weet','wist','wisten',
  'helpt','hielp','hielpen',
  'geeft','gaf','gaven',
  'ziet','zag','zagen',
  'zegt','zei','zeiden',
  'voelt','voelde',
  'krijgt','kreeg','kregen',
  'speelt','speelde',
  'schrijft','schreef',
  'leest','las','lazen',
  'trekt','trok',
  'toont','toonde',
  'volgt','volgde',
  'stijgt','steeg',
  'biedt','bood',
  'draagt','droeg',
  'bespaart','bespaarde',
  'beslist','besliste',
  'beschrijft',
  'bekijkt','bekeek','bekijken',
  'begrijpt','begreep',
  'begint','begon',
  'kijkt','keek',
  'vraagt','vroeg',
  'denkt','dacht',
  'lijkt','leek','lijken',
  'hoort','hoorde',
  'houdt','hield',
  'raakt','raakte',
  'brengt','bracht',
  'loopt','liep',
  'rijdt','reed',
  'koopt','kocht',
  'leert','leerde',
  'maakt','maakte',
  'werkt','werkte',
  'woont','woonde',
  'verandert','veranderde',
  'verbetert','verbeterde',
  'beïnvloedt','beïnvloedde',
  'luistert','luisterde',
  'beweegt','bewoog',
  'slaagt','slaagde',
  'hoopt','hoopte',
  'verwacht','verwachtte',
  'stopt','stopte',
  'wint','won',
  'verliest','verloor',
  'vergeet','vergat',
  'herinnert','herinnerde',
  'duurt','duurde',
  'zorgt','zorgde',
  'probeert','probeerde',
  'klinkt','klonk',
  'baart','baarde',
  'bevestigt','bevestigde',
  'ontdekt','ontdekte',
  'bezoekt','bezocht',
  'verdwijnt','verdween',
  'verschijnt','verscheen',
  'leidt','leidde',
  'regelt','regelde',
  'stuurt','stuurde',
  'bouwt','bouwde',
  'betaalt','betaalde',
  'groeit','groeide',
  'daalt','daalde',
  // Short context words
  'via','mee','weg','thuis','ver','zelf','steeds',
  'best','uiteindelijk',
  'hierna','hiervoor','hierbij','hierdoor','hiermee','hierom',
  'daarin','waarvoor','waarnaar','waaraan',
  // Additional nouns from audit hits
  'partij','partijen',
  'debatten','democratie',
  'directeur','directeuren',
  'zwembad','zwembaden',
  'museum','musea',
  'moskee','strand','stranden',
  'toespraak','wedstrijden',
  'politicus','politici',
  'wiskunde','wijn','wijnen',
  'schriftelijk','schriftelijke',
  'bodem','bodems',
  'orkest','hotel','hotels',
  'kroeg','kroegen',
  'haast','hartelijk','hartelijke',
  'luxe','klaar',
  'bezig',
  'restaurant','restaurants',
  'kritisch','kritische',
  'krap',
  'campagne',
  'reorganisatie','religie',
  'ramp','prestatie','patat',
  'pakket','pakketten',
  'functie','focus','elite',
  'begrip','beurs','beurzen',
  'brief','brieven','boete','boetes',
  'uitstoot',
  'huidige','huidig',
  'vorige','volgende',
  'eigen','hetzelfde','dezelfde',
  'ambtelijke','ambtelijk',
  'logistiek','logistieke',
];

const newLine = "  'nl': new Set([" + words.map(w => "'" + w + "'").join(',') + "]),";
const newContent = content.replace(old, newLine);

if (newContent === content) {
  console.log('ERROR: replacement had no effect');
  process.exit(1);
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('SUCCESS: wrote', newContent.length, 'chars to', filePath);
console.log('New nl word count:', words.length);
