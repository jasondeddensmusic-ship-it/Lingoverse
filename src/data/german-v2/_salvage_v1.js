// German V1 salvage lesson — 23 teach cards from v1 units that were not
// covered by v2 content. Imported into Unit 35 (Prüfung B2) as a final
// vocabulary review. See docs/V1_SALVAGE_STATUS.md.

const GERMAN_SALVAGE_V1 = {
  id:"deu_r35l_sal", title:"Wortschatz aus dem Alltag", icon:"🧳", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vocabulary Review",
     desc:"A final review of everyday B2 vocabulary across feelings, work, travel, numbers, and academic phrases. These words round out your exam preparation.",
     goals:["Learn 23 B2-level everyday words","Review adjectives, nouns, and verbs","Master formal academic phrases"]},

    // ── Feelings ──
    {type:"teach", trg:"wütend", src:"furious, angry", pos:"adj", gender:null,
     note:"Adjective. Stronger than 'böse' (mad).\nEr war wütend = he was furious.",
     example:"A: Warum bist du so wütend?\nB: Mein Zug ist wieder ausgefallen.",
     exampleSrc:"A: Why are you so furious?\nB: My train was cancelled again.",
     funFact:"From 'Wut' (rage). The suffix '-end' here is the present-participle form used as an adjective. Stronger than 'böse' but weaker than 'rasend' (raging)."},

    {type:"teach", trg:"frustriert", src:"frustrated", pos:"adj", gender:null,
     note:"Adjective. Past participle of 'frustrieren'.\nFrom French via Latin 'frustrari'.",
     example:"A: Ich bin total frustriert von diesem Projekt.\nB: Mach eine Pause. Du arbeitest zu lange.",
     exampleSrc:"A: I am totally frustrated with this project.\nB: Take a break. You have been working too long.",
     funFact:"A loanword. Germans pronounce the 'u' like English 'oo' (froos-tree-ert). Pair with 'sein' for a state: 'Ich bin frustriert' (I am frustrated)."},

    {type:"teach", trg:"zerstört", src:"destroyed, devastated", pos:"adj", gender:null,
     note:"Adjective. Past participle of 'zerstören'.\nUsed literally and emotionally.",
     example:"A: Das alte Haus ist komplett zerstört.\nB: Ja, der Sturm war sehr heftig.",
     exampleSrc:"A: The old house is completely destroyed.\nB: Yes, the storm was very severe.",
     funFact:"The prefix 'zer-' means 'apart' or 'to pieces.' Compare 'zerbrechen' (to break to pieces), 'zerreißen' (to tear apart). Emotionally, 'ich bin zerstört' means 'I am devastated.'"},

    {type:"teach", trg:"schlapp", src:"weak, sluggish, limp", pos:"adj", gender:null,
     note:"Adjective. Colloquial. Describes tired, exhausted energy.\nSich schlapp fühlen = to feel run-down.",
     example:"A: Ich fühle mich heute so schlapp.\nB: Hast du genug geschlafen?",
     exampleSrc:"A: I feel so sluggish today.\nB: Did you sleep enough?",
     funFact:"An onomatopoeic word: say it and your mouth goes limp. Also used for limp hair (schlappe Haare) or a weak handshake (ein schlapper Händedruck)."},

    {type:"match", pairs:[
      {trg:"wütend", src:"furious"},
      {trg:"frustriert", src:"frustrated"},
      {trg:"zerstört", src:"destroyed"},
      {trg:"schlapp", src:"sluggish"}
    ]},

    // ── Everyday things ──
    {type:"teach", trg:"lila", src:"purple", pos:"adj", gender:null,
     note:"Adjective. Does NOT decline (ein lila Kleid, not ein lilas).\nAlso 'violett' for a redder purple.",
     example:"A: Mir gefällt dein lila Pullover.\nB: Danke, lila ist meine Lieblingsfarbe.",
     exampleSrc:"A: I like your purple sweater.\nB: Thanks, purple is my favorite color.",
     funFact:"From Arabic 'lilak' via Persian, referring to the lilac flower. One of a small set of German color adjectives that never decline: lila, rosa, orange, beige."},

    {type:"teach", trg:"der Gürtel", src:"the belt", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: die Gürtel.\nWhat holds your trousers up.",
     example:"A: Ich brauche einen neuen Gürtel.\nB: Welche Farbe soll er haben?",
     exampleSrc:"A: I need a new belt.\nB: What color should it be?",
     funFact:"Related to 'gürten' (to gird). The idiom 'den Gürtel enger schnallen' (to tighten one's belt) is the same as in English: to economize during hard times."},

    {type:"teach", trg:"der Löwe", src:"the lion", pos:"noun", gender:"m",
     note:"Masculine noun. N-deklination: den Löwen.\nAlso the zodiac sign Leo.",
     example:"A: Im Zoo haben wir einen Löwen gesehen.\nB: War er groß?",
     exampleSrc:"A: We saw a lion at the zoo.\nB: Was it big?",
     funFact:"Belongs to the German 'N-Deklination' class: takes an -n in every case except nominative singular: der Löwe, den Löwen, dem Löwen, des Löwen. Same pattern as Student and Junge."},

    {type:"teach", trg:"das Gepäck", src:"the luggage, baggage", pos:"noun", gender:"n",
     note:"Neuter noun. Uncountable (no plural).\nSay 'ein Gepäckstück' for one piece.",
     example:"A: Wo ist dein Gepäck?\nB: Es kommt noch vom Band.",
     exampleSrc:"A: Where is your luggage?\nB: It is still coming from the belt.",
     funFact:"From 'packen' (to pack). The ge- prefix turns the verb into a collective noun: everything you have packed. Like 'das Gebäude' (building) from 'bauen' (to build)."},

    {type:"teach", trg:"das Ladegerät", src:"the charger", pos:"noun", gender:"n",
     note:"Neuter noun. Plural: die Ladegeräte.\nLaden (to load, charge) + Gerät (device).",
     example:"A: Hast du mein Ladegerät gesehen?\nB: Es liegt auf dem Tisch.",
     exampleSrc:"A: Have you seen my charger?\nB: It is on the table.",
     funFact:"'Laden' in German covers both 'to load' (ein Auto beladen) and 'to charge' (ein Handy laden). The noun 'Ladegerät' specifically means a charging device, never a loading device."},

    {type:"match", pairs:[
      {trg:"lila", src:"purple"},
      {trg:"der Gürtel", src:"the belt"},
      {trg:"der Löwe", src:"the lion"},
      {trg:"das Gepäck", src:"the luggage"},
      {trg:"das Ladegerät", src:"the charger"}
    ]},

    // ── Work and professions ──
    {type:"teach", trg:"der Programmierer", src:"the programmer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: die Programmiererin.\nFrom 'programmieren' (to program).",
     example:"A: Mein Sohn ist Programmierer.\nB: Was programmiert er?",
     exampleSrc:"A: My son is a programmer.\nB: What does he program?",
     funFact:"The '-er' suffix turns verbs into agent nouns: programmieren to Programmierer, lehren to Lehrer, backen to Bäcker. One of German's most productive word-building patterns."},

    {type:"teach", trg:"der Feuerwehrmann", src:"the firefighter", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: die Feuerwehrfrau.\nFeuer (fire) + Wehr (defense) + Mann.",
     example:"A: Mein Nachbar ist Feuerwehrmann.\nB: Ein wichtiger Beruf.",
     exampleSrc:"A: My neighbor is a firefighter.\nB: An important job.",
     funFact:"Literally 'fire-defense-man.' 'Die Feuerwehr' (the fire brigade) appears in many compounds: Feuerwehrauto (fire truck), Feuerwehrwache (fire station), Freiwillige Feuerwehr (volunteer fire brigade)."},

    {type:"teach", trg:"die Probezeit", src:"the probationary period", pos:"noun", gender:"f",
     note:"Feminine noun. Probe (trial) + Zeit (time).\nA trial period at a new job.",
     example:"A: Wie lange dauert deine Probezeit?\nB: Sechs Monate.",
     exampleSrc:"A: How long is your probationary period?\nB: Six months.",
     funFact:"German labor law standardizes a Probezeit of up to six months, during which either side can terminate the contract on short notice. After that, stronger dismissal protections kick in."},

    {type:"teach", trg:"die Gleitzeit", src:"flextime, flexible working hours", pos:"noun", gender:"f",
     note:"Feminine noun. Gleiten (to glide) + Zeit (time).\nFlexible start and finish times.",
     example:"A: Habt ihr Gleitzeit in der Firma?\nB: Ja, wir können zwischen sieben und zehn anfangen.",
     exampleSrc:"A: Do you have flextime at the company?\nB: Yes, we can start between seven and ten.",
     funFact:"Literally 'gliding time.' Introduced in Germany in the late 1960s, Gleitzeit defines a 'core time' (Kernzeit) during which everyone must be present, plus flexible bands on either side."},

    {type:"match", pairs:[
      {trg:"der Programmierer", src:"the programmer"},
      {trg:"der Feuerwehrmann", src:"the firefighter"},
      {trg:"die Probezeit", src:"probationary period"},
      {trg:"die Gleitzeit", src:"flextime"}
    ]},

    // ── Civic, direction, numbers ──
    {type:"teach", trg:"das Bußgeld", src:"the fine, penalty fee", pos:"noun", gender:"n",
     note:"Neuter noun. Buße (atonement) + Geld (money).\nOfficial financial penalty.",
     example:"A: Ich habe ein Bußgeld bekommen.\nB: Wofür?\nA: Falsch geparkt.",
     exampleSrc:"A: I got a fine.\nB: What for?\nA: Parking in the wrong place.",
     funFact:"'Buße' originally meant religious atonement; over centuries it came to mean any penalty paid to make amends. The German 'Bußgeldkatalog' lists the exact fine for every traffic offense."},

    {type:"teach", trg:"östlich", src:"eastern, easterly", pos:"adj", gender:null,
     note:"Adjective/adverb. From 'Osten' (east).\nÖstlich von Berlin = east of Berlin.",
     example:"A: Wo liegt Polen?\nB: Östlich von Deutschland.",
     exampleSrc:"A: Where is Poland located?\nB: East of Germany.",
     funFact:"The four compass-point adjectives form a regular set: nördlich, östlich, südlich, westlich. The nouns add 'Osten' etc.: 'im Osten' (in the east) vs 'östlich' (eastward or eastern)."},

    {type:"teach", trg:"dreiunddreißig", src:"thirty-three", pos:"num", gender:null,
     note:"Cardinal number. Written as one word.\nGerman says 'three-and-thirty.'",
     example:"A: Wie alt ist deine Schwester?\nB: Sie ist dreiunddreißig.",
     exampleSrc:"A: How old is your sister?\nB: She is thirty-three.",
     funFact:"German counts 21 to 99 backwards: einundzwanzig (one-and-twenty), dreiunddreißig (three-and-thirty). Same pattern as old-fashioned English nursery rhymes: 'four-and-twenty blackbirds.'"},

    {type:"teach", trg:"neunundneunzig", src:"ninety-nine", pos:"num", gender:null,
     note:"Cardinal number. Written as one word.\nNeun (nine) + und (and) + neunzig (ninety).",
     example:"A: Wie viele Luftballons sind das?\nB: Neunundneunzig, wie im Lied.",
     exampleSrc:"A: How many balloons is that?\nB: Ninety-nine, like in the song.",
     funFact:"A reference to Nena's 1983 hit '99 Luftballons.' Germany's biggest pop-song export of the Cold War era. Every German knows the number on sight."},

    {type:"match", pairs:[
      {trg:"das Bußgeld", src:"the fine"},
      {trg:"östlich", src:"eastern"},
      {trg:"dreiunddreißig", src:"thirty-three"},
      {trg:"neunundneunzig", src:"ninety-nine"}
    ]},

    // ── Academic B2 phrasing ──
    {type:"teach", trg:"bereuen", src:"to regret", pos:"verb", gender:null,
     note:"Regular verb. Ich bereue, du bereust.\nExpresses remorse for a past action.",
     example:"A: Bereust du deine Entscheidung?\nB: Nein, keinen Moment.",
     exampleSrc:"A: Do you regret your decision?\nB: No, not for a moment.",
     funFact:"From Old High German 'hriuwan' (to cause sorrow). Same root as English 'rue.' In legal German, 'bereuen' can appear in court statements to indicate remorse affecting sentencing."},

    {type:"teach", trg:"erörtern", src:"to discuss, to debate (formally)", pos:"verb", gender:null,
     note:"Regular verb. Formal academic register.\nEtwas ausführlich erörtern = to discuss in depth.",
     example:"A: Wir müssen dieses Thema erörtern.\nB: Gut, ich bereite mich vor.",
     exampleSrc:"A: We have to discuss this topic.\nB: Good, I will prepare.",
     funFact:"A classic Abitur-essay verb. 'Erörtern' is more formal than 'besprechen' (to talk about) and implies weighing arguments for and against. Often paired with 'Vor- und Nachteile' (pros and cons)."},

    {type:"teach", trg:"die Erörterung", src:"the discussion, argumentative essay", pos:"noun", gender:"f",
     note:"Feminine noun. Noun form of 'erörtern'.\nA standard German essay genre.",
     example:"A: Was ist das Thema der Erörterung?\nB: Homeoffice als neue Normalität.",
     exampleSrc:"A: What is the topic of the essay?\nB: Home office as the new normal.",
     funFact:"In the German school curriculum, 'die Erörterung' is a structured argumentative essay. Two main types: lineare Erörterung (one-sided) and dialektische Erörterung (pro-and-con). Tested at B2 and the Abitur."},

    {type:"teach", trg:"Hals über Kopf", src:"head over heels, headlong", pos:"adv", gender:null,
     note:"Fixed adverbial phrase. Hals (neck) + Kopf (head).\nAbruptly, without planning.",
     example:"A: Sie sind Hals über Kopf nach Berlin gezogen.\nB: Ohne Plan?\nA: Ohne Plan.",
     exampleSrc:"A: They moved to Berlin head over heels.\nB: Without a plan?\nA: Without a plan.",
     funFact:"The German ordering is the opposite of the English: 'neck over head,' not 'head over heels.' Both describe the same tumbling motion used metaphorically for doing something abruptly."},

    {type:"teach", trg:"In Anlehnung an", src:"drawing on, based on, inspired by", pos:"prep", gender:null,
     note:"Formal prepositional phrase. Takes accusative.\nCommon in academic writing.",
     example:"A: In Anlehnung an Kant argumentiere ich, dass...\nB: Eine gute Einleitung.",
     exampleSrc:"A: Drawing on Kant, I argue that...\nB: A good introduction.",
     funFact:"Literally 'in leaning against.' From 'sich anlehnen' (to lean on). A hallmark of formal academic German: one's argument 'leans on' a predecessor without claiming to simply quote them."},

    {type:"teach", trg:"Laut Angaben", src:"according to reports, according to (the) information", pos:"prep", gender:null,
     note:"Formal prepositional phrase. Takes genitive or dative.\nLaut Angaben der Polizei = according to police reports.",
     example:"A: Laut Angaben der Polizei gab es keine Verletzten.\nB: Das ist gut.",
     exampleSrc:"A: According to police reports, there were no injuries.\nB: That is good.",
     funFact:"'Laut' (according to) is a two-letter preposition with three meanings in German: the adjective 'laut' (loud), the noun 'der Laut' (sound), and the preposition 'laut' (according to). Context tells you which."},

    {type:"match", pairs:[
      {trg:"bereuen", src:"to regret"},
      {trg:"erörtern", src:"to discuss (formally)"},
      {trg:"die Erörterung", src:"argumentative essay"},
      {trg:"Hals über Kopf", src:"head over heels"},
      {trg:"In Anlehnung an", src:"drawing on"},
      {trg:"Laut Angaben", src:"according to reports"}
    ]}
  ]
};

export default GERMAN_SALVAGE_V1;
