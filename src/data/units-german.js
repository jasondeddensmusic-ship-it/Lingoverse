// src/data/units-german.js — German (lang:"de") curriculum units
// A1-B2 complete curriculum, Goethe-Institut / CEFR aligned
// Article colors: der=blue (#4A8FE7), die=coral (#E8475E), das=purple (#7B5EE8)

export default [

// ── GERMAN UNITS (v1 Curriculum) ──
{n:1,lang:"de",track:"v1",title:"Willkommen!",sub:"Greetings & Goodbyes",icon:"👋",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Hallo! ═══
{id:"deu1l1",title:"Hallo!",icon:"👋",xp:15,board:true,steps:[
  {type:"intro",title:"Hallo!",desc:"Your first German words: the greetings you will use every single day. German greetings match the time of day, and learning them opens every door.",goals:["4 core greetings","Know which greeting fits which time","Say hello like a native"]},

  {type:"teach",kind:"word",nl:"Hallo",en:"hello",phonetic:"HAH-loh",cognate:{words:[{lang:"English",word:"hello"},{lang:"Dutch",word:"hallo"}],family:"germanic"},example:"A: Hallo! Wie geht es dir?\nB: Hallo! Mir geht es gut, danke.\nA: Super!",exampleEn:"A: Hello! How are you?\nB: Hello! I am fine, thanks.\nA: Great!",note:"Works any time of day.\nSafe with friends, family, and casual settings."},

  {type:"teach",kind:"phrase",nl:"Guten Morgen",en:"good morning",phonetic:"GOO-ten MOR-gen",cognate:{words:[{lang:"English",word:"good morning"},{lang:"Dutch",word:"goedemorgen"}],family:"germanic"},example:"A: Guten Morgen, Frau Schmidt!\nB: Guten Morgen! Wie geht es Ihnen?\nA: Danke, gut!",exampleEn:"A: Good morning, Ms. Schmidt!\nB: Good morning! How are you?\nA: Fine, thank you!",note:"Used until about noon.\nGuten = good (accusative). Morgen = morning."},

  {type:"teach",kind:"phrase",nl:"Guten Tag",en:"good day / good afternoon",phonetic:"GOO-ten TAHK",cognate:{words:[{lang:"English",word:"good day"},{lang:"Dutch",word:"goedemiddag"}],family:"germanic"},example:"A: Guten Tag! Ich suche das Rathaus.\nB: Guten Tag! Das ist geradeaus.\nA: Vielen Dank!",exampleEn:"A: Good day! I am looking for the town hall.\nB: Good day! That is straight ahead.\nA: Many thanks!",note:"From noon until early evening.\nSlight formal tone, common in shops and offices."},

  {type:"teach",kind:"phrase",nl:"Guten Abend",en:"good evening",phonetic:"GOO-ten AH-bent",cognate:{words:[{lang:"English",word:"good evening"},{lang:"Dutch",word:"goedenavond"}],family:"germanic"},example:"A: Guten Abend! Haben Sie reserviert?\nB: Ja, auf den Namen Müller.\nA: Einen Moment, bitte.",exampleEn:"A: Good evening! Do you have a reservation?\nB: Yes, under the name Müller.\nA: One moment, please.",note:"From about 6 PM onwards.\nAbend = evening. Often heard in restaurants and hotels."},

  {type:"tip",title:"The Guten + Time Pattern",text:"All formal time-of-day greetings follow one formula:\n\nGuten + Morgen = Guten Morgen (good morning)\nGuten + Tag = Guten Tag (good day)\nGuten + Abend = Guten Abend (good evening)\n\nThree words, one pattern. Guten is the accusative form of gut (good).",deepDive:{title:"Why Guten and not Gut?",text:"German adjectives change ending depending on grammatical context. 'Guten' here comes from an old shortened form of 'Ich wünsche Ihnen einen guten Morgen' (I wish you a good morning). The phrase was trimmed down but the accusative -en ending on 'guten' stayed.\n\nYou will study adjective endings properly in B1. For now, just learn the three greetings as fixed phrases."}},

  {type:"teach",kind:"word",nl:"Hi",en:"hi",phonetic:"hai",cognate:{words:[{lang:"English",word:"hi"}],family:"germanic"},example:"A: Hi! Kommst du heute Abend?\nB: Hi! Ja, natürlich!\nA: Super, bis dann!",exampleEn:"A: Hi! Are you coming tonight?\nB: Hi! Yes, of course!\nA: Great, see you then!",note:"Borrowed directly from English.\nVery casual, friends and peers only. Not used in formal settings."},

  {type:"teach",kind:"word",nl:"Servus",en:"hello / goodbye (Southern)",phonetic:"ZER-voos",example:"A: Servus, Markus!\nB: Servus! Lang nicht gesehen!\nA: Stimmt, wie geht's?",exampleEn:"A: Hey, Markus!\nB: Hey! Long time no see!\nA: True, how are you?",note:"Used in Bavaria and Austria.\nWorks as both hello AND goodbye, like Italian ciao.\nNot standard in Northern Germany."},

  {type:"tip",title:"Regional Greetings",text:"Germany, Austria, and Switzerland each have regional flavors:\n\nNorthern Germany: Moin! (anytime, very casual)\nBavaria and Austria: Servus! (hello and goodbye)\nSwitzerland: Grüezi! (formal hello)\n\nIn standard German, Hallo and Guten Tag are always safe.",deepDive:{title:"Why does Moin mean hello if it sounds like morning?",text:"Moin comes from Low German 'moin dag' (good day), shortened to just 'moin'. Despite sounding like 'Morgen', it is used all day and even in the evening in Hamburg, Bremen, and the far north. It is one of the most efficient greetings in any language, and Hamburgers are proud of it."}},

  {type:"mc",q:"It is 8 AM. You walk into a German office. You say:",opts:["Guten Abend","Guten Morgen","Guten Tag","Hi"],ans:"Guten Morgen",hint:"Which greeting fits the morning?"},

  {type:"mc",q:"It is 7 PM. You arrive at a restaurant. You greet the host with:",opts:["Guten Morgen","Guten Tag","Guten Abend","Servus"],ans:"Guten Abend",hint:"Evening starts around 6 PM in German custom."},

  {type:"mc",q:"Which greeting works as BOTH hello and goodbye in Bavaria?",opts:["Hallo","Guten Tag","Moin","Servus"],ans:"Servus",hint:"Southern German and Austrian usage"},

  {type:"fb",s:"___ Morgen! Wie geht es Ihnen?",a:"Guten",opts:["Guten","Schönen","Groß","Hallo"],hint:"Complete the formal morning greeting."},

  {type:"match",pairs:[{nl:"Guten Morgen",en:"good morning"},{nl:"Guten Tag",en:"good day"},{nl:"Guten Abend",en:"good evening"},{nl:"Hallo",en:"hello"}]},

  {type:"mc",q:"'Hi' in German is:",opts:["Only for formal use","Borrowed from English and very casual","A Bavarian regional word","Used only in the morning"],ans:"Borrowed from English and very casual",hint:"Think about where the word came from."},

  {type:"mc",q:"'Moin' is used mostly in:",opts:["Bavaria","Switzerland","Northern Germany","Austria"],ans:"Northern Germany",hint:"Hamburg, Bremen, and the coast."},

  {type:"fb",s:"___ Tag! Kann ich Ihnen helfen?",a:"Guten",opts:["Guten","Hallo","Tschüss","Abend"],hint:"Formal afternoon greeting in a shop."},

  {type:"mc",q:"Which greeting is appropriate at ANY time of day?",opts:["Guten Morgen","Guten Abend","Hallo","Guten Tag"],ans:"Hallo",hint:"One of these is not time-restricted."},
]},

// ═══ L2: Tschüss! ═══
{id:"deu1l2",title:"Tschüss!",icon:"👋",xp:15,board:true,steps:[
  {type:"intro",title:"Tschüss!",desc:"Now that you can say hello, learn how to say goodbye. German has formal and casual farewells for every situation.",goals:["4 ways to say goodbye","Formal vs casual register","Time-based farewells"]},

  {type:"teach",kind:"word",nl:"Tschüss",en:"bye (casual)",phonetic:"chüss",example:"A: Ich muss jetzt gehen. Tschüss!\nB: Tschüss! Bis morgen!\nA: Ja, bis dann!",exampleEn:"A: I have to go now. Bye!\nB: Bye! See you tomorrow!\nA: Yes, see you then!",note:"The most common casual goodbye in German.\nUsed with friends, family, and peers.\nAlso spelled: Tschüs (one s)."},

  {type:"teach",kind:"phrase",nl:"Auf Wiedersehen",en:"goodbye (formal)",phonetic:"owf-VEE-der-zay-en",cognate:{words:[{lang:"Dutch",word:"tot ziens"}],family:"germanic"},example:"A: Auf Wiedersehen, Herr Bauer!\nB: Auf Wiedersehen! Einen schönen Tag noch.\nA: Danke, Ihnen auch!",exampleEn:"A: Goodbye, Mr. Bauer!\nB: Goodbye! Have a nice day.\nA: Thank you, you too!",note:"Literally: until seeing again.\nFormal setting: offices, shops, strangers."},

  {type:"teach",kind:"phrase",nl:"Auf Wiederhören",en:"goodbye (on the phone)",phonetic:"owf-VEE-der-hör-en",example:"A: Dann bis später. Auf Wiederhören!\nB: Auf Wiederhören! Einen schönen Tag.\nA: Danke, Ihnen auch!",exampleEn:"A: Then see you later. Goodbye!\nB: Goodbye! Have a nice day.\nA: Thank you, you too!",note:"Used on the phone ONLY.\nWiederhören = hearing again (not seeing).\nWrong to use in person."},

  {type:"teach",kind:"phrase",nl:"Bis morgen",en:"see you tomorrow",phonetic:"bis MOR-gen",cognate:{words:[{lang:"English",word:"till morning"}],family:"germanic"},example:"A: Dann bis morgen!\nB: Bis morgen! Schlaf gut.\nA: Du auch, danke!",exampleEn:"A: Then see you tomorrow!\nB: See you tomorrow! Sleep well.\nA: You too, thanks!",note:"Bis = until. Morgen = tomorrow (or morning).\nContext makes clear: bis morgen = until tomorrow."},

  {type:"teach",kind:"phrase",nl:"Bis später",en:"see you later",phonetic:"bis SHPAY-ter",example:"A: Ich gehe jetzt. Bis später!\nB: Bis später! Viel Spaß.\nA: Danke!",exampleEn:"A: I am going now. See you later!\nB: See you later! Have fun.\nA: Thanks!",note:"Später = later.\nBis bald = see you soon (more vague timing)."},

  {type:"teach",kind:"phrase",nl:"Gute Nacht",en:"good night",phonetic:"GOO-te NAHKT",cognate:{words:[{lang:"English",word:"good night"},{lang:"Dutch",word:"goedenacht"}],family:"germanic"},example:"A: Es ist spät. Gute Nacht!\nB: Gute Nacht! Schlaf gut.\nA: Du auch!",exampleEn:"A: It is late. Good night!\nB: Good night! Sleep well.\nA: You too!",note:"Said when going to bed or very late at night.\nNacht = night. Not used as a greeting."},

  {type:"teach",kind:"phrase",nl:"Bis bald",en:"see you soon",phonetic:"bis BAHLT",example:"A: Tschüss! Bis bald!\nB: Bis bald! Pass auf dich auf.\nA: Du auch!",exampleEn:"A: Bye! See you soon!\nB: See you soon! Take care.\nA: You too!",note:"Bald = soon. Vague time.\nUse when you expect to meet again but no set time."},

  {type:"tip",title:"Bis + Time: Build Your Own Farewell",text:"German builds time-based farewells with one word:\n\nbis + morgen = bis morgen (see you tomorrow)\nbis + später = bis später (see you later)\nbis + bald = bis bald (see you soon)\nbis + nächste Woche = bis nächste Woche (see you next week)\n\nYou can use this pattern with any time word!",deepDive:{title:"Auf Wiedersehen vs Auf Wiederhören",text:"Both start with 'Auf Wieder-' which means 'until again'. The difference is the sense used:\n\nAuf Wiedersehen: -sehen = to see. Used face to face.\nAuf Wiederhören: -hören = to hear. Used on the phone.\n\nThis distinction is strict in formal German. Using 'Auf Wiedersehen' on the phone is considered slightly awkward. 'Auf Wiederhören' on the phone is polished and professional."}},

  {type:"mc",q:"You are ending a business phone call. You say:",opts:["Tschüss!","Gute Nacht!","Auf Wiederhören!","Bis morgen!"],ans:"Auf Wiederhören!",hint:"Which farewell is specifically for phone calls?"},

  {type:"mc",q:"Leaving a shop after paying, you use:",opts:["Tschüss","Auf Wiedersehen","Gute Nacht","Bis bald"],ans:"Auf Wiedersehen",hint:"Formal farewell, face-to-face setting."},

  {type:"fb",s:"Es ist Mitternacht. ___ Nacht!",a:"Gute",opts:["Gute","Guten","Auf","Bis"],hint:"Complete the bedtime farewell."},

  {type:"mc",q:"'Bis bald' means:",opts:["Goodbye forever","See you soon","Good night","See you tomorrow"],ans:"See you soon",hint:"Bald = soon. The time is vague."},

  {type:"match",pairs:[{nl:"Tschüss",en:"bye (casual)"},{nl:"Auf Wiedersehen",en:"goodbye (formal)"},{nl:"Gute Nacht",en:"good night"},{nl:"Bis morgen",en:"see you tomorrow"}]},

  {type:"mc",q:"Which farewell is WRONG to use on the phone?",opts:["Auf Wiederhören","Tschüss","Auf Wiedersehen","Bis später"],ans:"Auf Wiedersehen",hint:"One of these is for face-to-face only."},

  {type:"fb",s:"Ich gehe. ___ später!",a:"Bis",opts:["Bis","Auf","Gute","Hallo"],hint:"The word that builds time-based farewells."},

  {type:"mc",q:"'Bis morgen' literally means:",opts:["Good morning","Until tomorrow","See you soon","Until morning"],ans:"Until tomorrow",hint:"Bis = until. Morgen = tomorrow or morning."},

  {type:"mc",q:"'Gute Nacht' is said when:",opts:["Greeting someone in the morning","Saying goodbye in the evening before sleep","Ending a phone call","Entering a shop"],ans:"Saying goodbye in the evening before sleep",hint:"Nacht = night. Used at bedtime, not as a daytime farewell."},
]},

// ═══ L3: du oder Sie? ═══
{id:"deu1l3",title:"du oder Sie?",icon:"🤝",xp:15,board:true,steps:[
  {type:"intro",title:"du oder Sie?",desc:"German has two ways to say 'you': casual du and formal Sie. Using the right one shows respect and social awareness. This is one of the most important choices in German.",goals:["When to use du vs Sie","Herr and Frau titles","Polite formal address"]},

  {type:"teach",kind:"word",nl:"du",en:"you (informal)",phonetic:"doo",cognate:{words:[{lang:"English",word:"thou (old English)"}],family:"germanic"},example:"A: Hallo! Ich bin Jonas. Und du?\nB: Ich bin Lena. Nett, dich kennenzulernen!\nA: Dich auch!",exampleEn:"A: Hello! I am Jonas. And you?\nB: I am Lena. Nice to meet you!\nA: You too!",note:"For friends, family, children, and peers.\nAlways lowercase, even at the start of a sentence as a rule break."},

  {type:"teach",kind:"word",nl:"Sie",en:"you (formal)",phonetic:"zee",example:"A: Guten Tag! Sind Sie Frau Hoffmann?\nB: Ja, das bin ich. Und Sie?\nA: Mein Name ist Berger.",exampleEn:"A: Good day! Are you Ms. Hoffmann?\nB: Yes, that is me. And you?\nA: My name is Berger.",note:"ALWAYS capitalized, even mid-sentence.\nFor strangers, elders, customers, and professionals.\nSame form as sie (they), capital S distinguishes them."},

  {type:"tip",title:"du vs Sie: The Two-Level System",text:"English once had this too: thou (informal) and you (formal). English dropped thou. German kept both.\n\ndu = for friends, family, children, and peers\nSie = for strangers, elders, and professional settings\n\nIn Germany: start with Sie. Wait for the other person to suggest du.\nIn Austria and Switzerland: rules are similar but relaxed slightly.",deepDive:{title:"The Duzen ritual",text:"When two German speakers decide to switch from Sie to du, it is called 'sich duzen'. One person formally offers: 'Können wir uns duzen?' (Can we use du with each other?)\n\nIn modern Germany, the tech and startup world has largely dropped Sie internally. IKEA was famous for addressing all customers with du in their communications, which caused debate.\n\nFor learners: always start with Sie in formal contexts, and follow the native speaker's lead. If they use du with you, mirror it."}},

  {type:"teach",kind:"word",nl:"Herr",en:"Mr.",phonetic:"hehr",example:"A: Guten Morgen, Herr Weber!\nB: Guten Morgen! Kommen Sie herein.\nA: Danke, Herr Weber.",exampleEn:"A: Good morning, Mr. Weber!\nB: Good morning! Come in.\nA: Thank you, Mr. Weber.",note:"Title for men. Used with last name.\nHerr + Nachname. Not Herr + first name in formal settings."},

  {type:"teach",kind:"word",nl:"Frau",en:"Ms. / Mrs.",phonetic:"frow",example:"A: Guten Tag, Frau Müller!\nB: Guten Tag! Was kann ich für Sie tun?\nA: Ich habe eine Frage.",exampleEn:"A: Good day, Ms. Müller!\nB: Good day! What can I do for you?\nA: I have a question.",note:"Title for women. Frau covers both Miss and Mrs.\nFräulein (Miss) is outdated. Frau is always correct.\nFrau also means 'woman' or 'wife'."},

  {type:"teach",kind:"phrase",nl:"Wie heißen Sie?",en:"What is your name? (formal)",phonetic:"vee HAI-sen zee",example:"A: Guten Tag! Wie heißen Sie?\nB: Ich heiße Thomas Becker. Und Sie?\nA: Mein Name ist Anna Braun.",exampleEn:"A: Good day! What is your name?\nB: My name is Thomas Becker. And you?\nA: My name is Anna Braun.",note:"Heißen = to be called.\nIch heiße = I am called / my name is."},

  {type:"teach",kind:"phrase",nl:"Wie heißt du?",en:"What is your name? (informal)",phonetic:"vee hayst doo",example:"A: Hey! Wie heißt du?\nB: Ich heiße Sophie. Und du?\nA: Ich bin Max. Nett, dich zu treffen!",exampleEn:"A: Hey! What is your name?\nB: My name is Sophie. And you?\nA: I am Max. Nice to meet you!",note:"Casual version.\nHeißt = second person informal form of heißen."},

  {type:"teach",kind:"phrase",nl:"Mein Name ist",en:"My name is",phonetic:"myne NAH-me ist",example:"A: Guten Tag! Mein Name ist Dr. Fischer.\nB: Guten Tag, Herr Dr. Fischer! Willkommen.\nA: Vielen Dank.",exampleEn:"A: Good day! My name is Dr. Fischer.\nB: Good day, Dr. Fischer! Welcome.\nA: Many thanks.",note:"Formal self-introduction.\nCasual alternative: Ich bin [Name] (I am [name])."},

  {type:"tip",title:"Ich heiße vs Mein Name ist",text:"Both mean 'my name is', but tone differs:\n\nIch heiße [Name] = I am called [Name] (neutral, any situation)\nMein Name ist [Name] = My name is [Name] (slightly more formal)\nIch bin [Name] = I am [Name] (very casual, like English)\n\nIn a job interview: Mein Name ist.\nWith a new classmate: Ich bin or Ich heiße.",deepDive:{title:"Academic and professional titles in German",text:"Germans use titles with care. If someone has a doctorate, they are addressed as 'Herr Doktor Fischer' or 'Frau Doktor Müller'. Professors keep their title permanently.\n\nOn official letters and in formal meetings, you may see:\nHerr Prof. Dr. Müller\nFrau Dr. Schneider\n\nDropping the title when addressing such a person can be seen as disrespectful. When in doubt, use the title. The person will tell you if they prefer otherwise."}},

  {type:"mc",q:"You meet your new neighbor for the first time. You use:",opts:["du","Sie","Herr","Frau"],ans:"Sie",hint:"New adult stranger: formal is safer."},

  {type:"mc",q:"You are chatting with a classmate your own age. You use:",opts:["Sie","Herr","du","Frau"],ans:"du",hint:"Peers and friends use the informal form."},

  {type:"fb",s:"Guten Tag, ___ Schmidt! Kommen Sie herein.",a:"Herr",opts:["Herr","Frau","Du","Ihr"],hint:"Title for a man, followed by his last name."},

  {type:"mc",q:"'Sie' is ALWAYS written with:",opts:["lowercase s","capital S","no difference","only in questions"],ans:"capital S",hint:"This capitalization rule sets it apart from sie (she/they)."},

  {type:"match",pairs:[{nl:"du",en:"you (informal)"},{nl:"Sie",en:"you (formal)"},{nl:"Herr",en:"Mr."},{nl:"Frau",en:"Ms. / Mrs."}]},

  {type:"mc",q:"'Wie heißen Sie?' is used when speaking to:",opts:["A close friend","A young child","A professional colleague","Your sibling"],ans:"A professional colleague",hint:"The verb form -en Sie signals formal address."},

  {type:"fb",s:"___ Name ist Klara Wolff.",a:"Mein",opts:["Mein","Dein","Ihr","Sein"],hint:"First person possessive: my."},

  {type:"mc",q:"Fräulein (Miss) in modern German is:",opts:["The standard word for Ms.","Outdated, replaced by Frau","Only for girls under 18","Common in Northern Germany"],ans:"Outdated, replaced by Frau",hint:"Frau is correct for all adult women today."},
]},

// ═══ L4: Wie geht's? ═══
{id:"deu1l4",title:"Wie geht's?",icon:"😊",xp:15,board:true,steps:[
  {type:"intro",title:"Wie geht's?",desc:"Learn to ask 'How are you?' and give natural answers in German. This exchange is part of almost every German conversation.",goals:["Formal and informal 'how are you'","5 ways to respond","Danke and polite returns"]},

  {type:"teach",kind:"phrase",nl:"Wie geht es Ihnen?",en:"How are you? (formal)",phonetic:"vee gayt es EE-nen",example:"A: Guten Morgen! Wie geht es Ihnen?\nB: Danke, gut! Und Ihnen?\nA: Auch gut, danke.",exampleEn:"A: Good morning! How are you?\nB: Fine, thanks! And you?\nA: Also fine, thank you.",note:"Formal. Ihnen = to you (formal dative).\nStandard in offices, shops, and with elders."},

  {type:"teach",kind:"phrase",nl:"Wie geht's?",en:"How are you? (casual)",phonetic:"vee gayts",example:"A: Hey! Wie geht's?\nB: Gut, danke! Und dir?\nA: Auch gut. Was machst du so?",exampleEn:"A: Hey! How are you?\nB: Good, thanks! And you?\nA: Also good. What are you up to?",note:"Casual shortening of 'Wie geht es dir?'\nDirect: How goes it? Dir = to you (informal dative)."},

  {type:"teach",kind:"word",nl:"gut",en:"good / fine",phonetic:"goot",cognate:{words:[{lang:"English",word:"good"},{lang:"Dutch",word:"goed"}],family:"germanic"},example:"A: Wie geht's?\nB: Gut, danke! Mir geht es wirklich gut.\nA: Das freut mich!",exampleEn:"A: How are you?\nB: Good, thanks! I am really doing well.\nA: That makes me happy!",note:"The most common positive answer.\nMir geht es gut = lit. It goes well to me.\nMir = dative of ich (to me)."},

  {type:"teach",kind:"word",nl:"sehr gut",en:"very good",phonetic:"zehr goot",example:"A: Wie geht es Ihnen?\nB: Sehr gut, danke! Ich habe Urlaub.\nA: Das ist schön!",exampleEn:"A: How are you?\nB: Very good, thanks! I am on holiday.\nA: That is lovely!",note:"Sehr = very. Emphatic positive answer.\nNatural follow-up: explain why (Ich habe... = I have...)."},

  {type:"teach",kind:"word",nl:"nicht so gut",en:"not so good",phonetic:"nikht zo goot",example:"A: Wie geht's? Du siehst müde aus.\nB: Nicht so gut. Ich bin krank.\nA: Oh nein! Gute Besserung.",exampleEn:"A: How are you? You look tired.\nB: Not so good. I am ill.\nA: Oh no! Get well soon.",note:"Polite way to say things are not great.\nNicht = not. So = so/that."},

  {type:"teach",kind:"phrase",nl:"So lala",en:"so-so",phonetic:"zo LAH-lah",example:"A: Wie geht es dir?\nB: Ach, so lala. Nicht super, nicht schlecht.\nA: Ich hoffe, es wird besser!",exampleEn:"A: How are you?\nB: Ah, so-so. Not great, not bad.\nA: I hope it gets better!",note:"Casual, slightly French-influenced expression.\nHonest and relatable. Often said with a shrug."},

  {type:"teach",kind:"word",nl:"danke",en:"thank you",phonetic:"DAHN-keh",cognate:{words:[{lang:"English",word:"thanks"},{lang:"Dutch",word:"dank"}],family:"germanic"},example:"A: Hier ist Ihr Kaffee.\nB: Danke! Das ist sehr nett.\nA: Bitte sehr!",exampleEn:"A: Here is your coffee.\nB: Thank you! That is very kind.\nA: You are welcome!",note:"Danke = thank you.\nDanke schön = thank you very much (more formal).\nVielen Dank = many thanks (most formal)."},

  {type:"teach",kind:"phrase",nl:"Und dir?",en:"And you? (informal)",phonetic:"oont deer",example:"A: Wie geht's?\nB: Gut, danke. Und dir?\nA: Auch gut!",exampleEn:"A: How are you?\nB: Good, thanks. And you?\nA: Also fine!",note:"The automatic return question.\nDir = to you (informal). Und Ihnen? for formal.\nAlso gut! = Me too!"},

  {type:"tip",title:"The Mir geht es Structure",text:"German uses a unique structure for feelings:\n\nMir geht es gut. = lit. To me it goes well.\nMir = dative of ich (to me)\n\nThis is different from English 'I am good'. German says the wellbeing happens TO the person.\n\nOther examples:\nMir geht es schlecht. = I am not well.\nMir ist kalt. = I am cold. (lit. To me it is cold.)",deepDive:{title:"Dative of personal pronouns",text:"You will study dative pronouns fully in A2. For now, memorize these two:\n\nMir = to me (dative of ich)\nDir = to you, informal (dative of du)\nIhnen = to you, formal (dative of Sie)\n\nThese appear in fixed phrases like:\nWie geht es dir? / Wie geht es Ihnen?\nMir geht es gut / schlecht.\n\nThink of them as bundled into the phrase. You do not need to construct them yet."}},

  {type:"mc",q:"A colleague asks 'Wie geht es Ihnen?' You reply:",opts:["Guten Morgen!","Danke, gut! Und Ihnen?","Tschüss!","Bis später!"],ans:"Danke, gut! Und Ihnen?",hint:"Thank and return the question formally."},

  {type:"mc",q:"'So lala' means:",opts:["Very good","Terrible","So-so","Not at all"],ans:"So-so",hint:"Honest middle-ground answer, often with a shrug."},

  {type:"fb",s:"Wie geht ___ dir?",a:"es",opts:["es","ist","bin","du"],hint:"The missing pronoun in the set phrase."},

  {type:"mc",q:"'Mir geht es gut' literally means:",opts:["I feel good","To me it goes well","I am good","My day is good"],ans:"To me it goes well",hint:"Mir = to me. Geht = goes."},

  {type:"match",pairs:[{nl:"gut",en:"good"},{nl:"sehr gut",en:"very good"},{nl:"nicht so gut",en:"not so good"},{nl:"danke",en:"thank you"}]},

  {type:"mc",q:"Casual 'And you?' in German is:",opts:["Und Ihnen?","Und Sie?","Und dir?","Und Herr?"],ans:"Und dir?",hint:"Dir is the informal dative of du."},

  {type:"mc",q:"'Wie geht's?' is a shortening of:",opts:["Wie geht es Ihnen?","Wie geht es dir?","Wie heißen Sie?","Wie ist Ihr Name?"],ans:"Wie geht es dir?",hint:"The apostrophe replaces 'es'. It is the casual form."},

  {type:"fb",s:"___ gut, danke! Und dir?",a:"Gut",opts:["Gut","Nein","Bis","Hallo"],hint:"Start with your answer, then return the question."},
]},

// ═══ L5: Bitte & Danke ═══
{id:"deu1l5",title:"Bitte & Danke",icon:"🙏",xp:15,board:true,steps:[
  {type:"intro",title:"Bitte & Danke",desc:"Please, thank you, sorry, and you're welcome. These small words make a huge impression and are used in every German interaction.",goals:["Please and thank you","Excuse me and sorry","You are welcome"]},

  {type:"teach",kind:"word",nl:"bitte",en:"please / you are welcome",phonetic:"BIT-teh",cognate:{words:[{lang:"English",word:"bid (archaic: to request)"}],family:"germanic"},example:"A: Einen Kaffee, bitte!\nB: Gern! Hier bitte.\nA: Danke schön!",exampleEn:"A: A coffee, please!\nB: Gladly! Here you go.\nA: Thank you very much!",note:"Bitte has three uses:\n1. Please (polite request)\n2. You are welcome (reply to Danke)\n3. Here you go (when handing something over)"},

  {type:"teach",kind:"phrase",nl:"Danke schön",en:"thank you very much",phonetic:"DAHN-keh shön",example:"A: Ich habe Ihre Tasche gefunden.\nB: Danke schön! Das ist sehr nett.\nA: Bitte sehr!",exampleEn:"A: I found your bag.\nB: Thank you very much! That is very kind.\nA: You are most welcome!",note:"Schön = nice/lovely. Adds warmth.\nDanke sehr = also very formal and correct.\nVielen Dank = many thanks (most formal)."},

  {type:"teach",kind:"phrase",nl:"Bitte sehr",en:"you are most welcome",phonetic:"BIT-teh zehr",example:"A: Danke für Ihre Hilfe!\nB: Bitte sehr! Kein Problem.\nA: Das ist sehr nett von Ihnen.",exampleEn:"A: Thank you for your help!\nB: You are most welcome! No problem.\nA: That is very kind of you.",note:"Reply to Danke sehr or Danke schön.\nBitte sehr is more emphatic than just Bitte."},

  {type:"teach",kind:"phrase",nl:"Entschuldigung",en:"excuse me / sorry",phonetic:"ent-SHOOL-dee-goong",example:"A: Entschuldigung! Ist dieser Platz frei?\nB: Ja, natürlich! Bitte.\nA: Danke schön.",exampleEn:"A: Excuse me! Is this seat free?\nB: Yes, of course! Go ahead.\nA: Thank you very much.",note:"Use to get attention or apologize.\nEntschuldigen Sie bitte = more formal version.\nEntschuldigung + pause = Excuse me (to get attention)."},

  {type:"teach",kind:"phrase",nl:"Es tut mir leid",en:"I am sorry",phonetic:"es toot meer lyte",example:"A: Sie haben meinen Termin vergessen!\nB: Es tut mir leid! Das war mein Fehler.\nA: Kein Problem.",exampleEn:"A: You forgot my appointment!\nB: I am sorry! That was my mistake.\nA: No problem.",note:"Deeper apology than Entschuldigung.\nLit: It does sorrow to me.\nEs tut mir sehr leid = I am very sorry."},

  {type:"teach",kind:"phrase",nl:"Kein Problem",en:"no problem",phonetic:"kyne pro-BLAYM",cognate:{words:[{lang:"English",word:"no problem"}],family:"borrowed"},example:"A: Tut mir leid, ich bin etwas spät.\nB: Kein Problem! Ich habe Zeit.\nA: Du bist sehr nett!",exampleEn:"A: Sorry, I am a little late.\nB: No problem! I have time.\nA: You are very kind!",note:"Very common reassurance.\nProblem is borrowed from Latin (via French).\nKein = no (negates a noun)."},

  {type:"teach",kind:"phrase",nl:"Gern geschehen",en:"my pleasure / you are welcome",phonetic:"gehrn geh-SHAY-en",example:"A: Danke für deine Hilfe!\nB: Gern geschehen! Das mache ich gern.\nA: Du bist super!",exampleEn:"A: Thank you for your help!\nB: My pleasure! I gladly do that.\nA: You are great!",note:"Warmer and more personal than Bitte.\nGern = gladly. Geschehen = happened.\nLit: Gladly happened. Natural in friendly settings."},

  {type:"tip",title:"Four Ways to Say You Are Welcome",text:"German has a gradient of formality:\n\nBitte = you are welcome (neutral)\nBitte sehr = you are most welcome (formal)\nGern geschehen = my pleasure (warm)\nKein Problem = no problem (casual)\n\nIn shops: Bitte or Bitte sehr.\nWith friends: Gern geschehen or Kein Problem.",deepDive:{title:"Bitte: the most multi-purpose word in German",text:"Bitte is one of the most flexible words in German:\n\n1. Please: Einen Kaffee, bitte!\n2. You are welcome: Danke! / Bitte!\n3. Here you go: (handing something) Hier, bitte.\n4. Pardon? / Come again? (rising intonation): Bitte?\n5. Please go ahead: Bitte! (waving someone through a door)\n\nMastering bitte's contexts makes you sound immediately more natural in German."}},

  {type:"mc",q:"Someone hands you your order and says 'Bitte!' They mean:",opts:["Please!","Here you go!","Thank you!","Excuse me!"],ans:"Here you go!",hint:"Bitte when handing something over means..."},

  {type:"mc",q:"You bumped into someone on the street. You say:",opts:["Danke schön","Gern geschehen","Entschuldigung","Bitte sehr"],ans:"Entschuldigung",hint:"Getting attention or apologizing for minor contact."},

  {type:"fb",s:"Danke für Ihre Hilfe! / ___ sehr!",a:"Bitte",opts:["Bitte","Danke","Gut","Kein"],hint:"Standard formal reply to Danke."},

  {type:"mc",q:"'Es tut mir leid' is used when:",opts:["Asking for something","Expressing a deeper apology","Saying thank you","Greeting someone"],ans:"Expressing a deeper apology",hint:"Deeper than Entschuldigung."},

  {type:"match",pairs:[{nl:"bitte",en:"please / you are welcome"},{nl:"Entschuldigung",en:"excuse me"},{nl:"Kein Problem",en:"no problem"},{nl:"Gern geschehen",en:"my pleasure"}]},

  {type:"mc",q:"The most formal way to say thank you is:",opts:["Danke","Danke schön","Vielen Dank","Bitte"],ans:"Vielen Dank",hint:"Vielen = many. Dank = thanks."},

  {type:"mc",q:"'Es tut mir leid' literally means:",opts:["I am sorry","It does sorrow to me","I made a mistake","Please forgive me"],ans:"It does sorrow to me",hint:"Leid = sorrow. Tut = does. Mir = to me."},

  {type:"fb",s:"___ geschehen! Ich helfe gern.",a:"Gern",opts:["Gern","Kein","Bitte","Danke"],hint:"Warm reply: My pleasure!"},

  {type:"mc",q:"'Bitte?' with a rising tone means:",opts:["Please sit down","Here you go","Pardon? Come again?","You are welcome"],ans:"Pardon? Come again?",hint:"Intonation changes meaning. Rising = asking for repetition."},
]},

// ═══ L6: Ja & Nein ═══
{id:"deu1l6",title:"Ja & Nein",icon:"✅",xp:15,board:true,steps:[
  {type:"intro",title:"Ja & Nein",desc:"Yes, no, maybe, and more. These small response words carry big weight in German conversation. Learn to agree, disagree, and confirm naturally.",goals:["Ja, nein, and vielleicht","Natural responses: genau, stimmt, doch","Polite disagreement"]},

  {type:"teach",kind:"word",nl:"ja",en:"yes",phonetic:"yah",cognate:{words:[{lang:"English",word:"yea (archaic)"},{lang:"Dutch",word:"ja"}],family:"germanic"},example:"A: Sprechen Sie Deutsch?\nB: Ja, ein bisschen.\nA: Das ist super!",exampleEn:"A: Do you speak German?\nB: Yes, a little.\nA: That is great!",note:"Simple affirmation. Always lowercase.\nJa, genau = Yes, exactly (common filler)."},

  {type:"teach",kind:"word",nl:"nein",en:"no",phonetic:"nyne",cognate:{words:[{lang:"English",word:"nay"},{lang:"Dutch",word:"nee"}],family:"germanic"},example:"A: Ist das dein Buch?\nB: Nein, das ist nicht meins.\nA: Ah, Entschuldigung!",exampleEn:"A: Is that your book?\nB: No, that is not mine.\nA: Ah, sorry!",note:"Direct negation.\nNein, danke = No, thank you (politely declining).\nNicht = not (negates verbs and adjectives)."},

  {type:"teach",kind:"word",nl:"vielleicht",en:"maybe / perhaps",phonetic:"feel-LYKT",example:"A: Kommst du heute Abend?\nB: Vielleicht. Ich bin nicht sicher.\nA: Okay, sag mir Bescheid!",exampleEn:"A: Are you coming tonight?\nB: Maybe. I am not sure.\nA: Okay, let me know!",note:"Expressing uncertainty.\nViel = much. Leicht = light. Together: perhaps.\nMore neutral than 'wahrscheinlich' (probably)."},

  {type:"teach",kind:"word",nl:"genau",en:"exactly / right / indeed",phonetic:"geh-NOW",example:"A: Das ist also ein Problem?\nB: Genau! Das verstehe ich auch.\nA: Gut, dann sind wir uns einig.",exampleEn:"A: So that is a problem?\nB: Exactly! I understand that too.\nA: Good, then we agree.",note:"One of the most common German response words.\nUsed to confirm and show you are following.\nEquivalent to 'exactly', 'right', 'indeed', or 'precisely'."},

  {type:"teach",kind:"word",nl:"stimmt",en:"that's right / true",phonetic:"shtimt",example:"A: Berlin ist die Hauptstadt, oder?\nB: Stimmt! Und eine tolle Stadt.\nA: Ja, genau!",exampleEn:"A: Berlin is the capital, right?\nB: That's right! And a wonderful city.\nA: Yes, exactly!",note:"From stimmen = to be correct.\nOften used to confirm facts.\nStimmt! after a statement = You are correct!"},

  {type:"teach",kind:"word",nl:"doch",en:"yes (contradicting a negative)",phonetic:"dokh",example:"A: Du bist nicht müde, oder?\nB: Doch! Ich bin sehr müde.\nA: Oh, dann geh schlafen!",exampleEn:"A: You are not tired, are you?\nB: Yes I am! I am very tired.\nA: Oh, then go to sleep!",note:"The unique German contradiction word.\nUsed ONLY to say YES when contradicting a NEGATIVE statement.\nEnglish has no direct equivalent. 'Oh yes I am!' is the closest."},

  {type:"tip",title:"Doch: The Contradictor",text:"German has a special word for contradicting a negative:\n\nA: Du kommst nicht? (You are not coming?)\nB: Doch! Ich komme. (Yes I am! I am coming.)\n\nDoch = yes (but I disagree with your negative assumption)\nJa = yes (regular agreement)\nNein = no\n\nIf you say 'ja' to a negative question, the meaning is unclear in German. Doch removes all ambiguity.",deepDive:{title:"Why German needs doch",text:"Many languages have a third answer word for contradicting negatives. French has 'si', German has 'doch', Dutch has 'toch' (in some uses) or 'jawel'.\n\nEnglish lost this word. When someone says 'You didn't eat, did you?' and you DID eat, English speakers say 'Yes I did!' with heavy stress. German uses one word: Doch.\n\nDoch has many other uses in German (e.g., as a softener, in commands, in exclamations). For now, master the contradiction function. It will serve you immediately."}},

  {type:"teach",kind:"word",nl:"natürlich",en:"of course / naturally",phonetic:"na-TÜR-likh",example:"A: Kannst du mir helfen?\nB: Natürlich! Gern.\nA: Danke, du bist toll!",exampleEn:"A: Can you help me?\nB: Of course! Gladly.\nA: Thank you, you are great!",note:"Strong affirmation, warm and direct.\nNatur = nature. Natürlich = naturally / of course.\nCognate: English 'naturally'."},

  {type:"mc",q:"Someone says 'Du bist nicht krank!' but you ARE sick. You say:",opts:["Ja!","Nein!","Doch!","Genau!"],ans:"Doch!",hint:"Contradicting a negative statement requires a special word."},

  {type:"mc",q:"'Stimmt' means:",opts:["That is wrong","That is right","I agree to disagree","Maybe"],ans:"That is right",hint:"Stimmen = to be correct."},

  {type:"fb",s:"Ja, ___! Das verstehe ich auch.",a:"genau",opts:["genau","nein","doch","bitte"],hint:"Enthusiastic agreement: exactly!"},

  {type:"mc",q:"When declining politely, you say:",opts:["Nein, danke","Doch","Genau","Stimmt"],ans:"Nein, danke",hint:"Two words: no, followed by thank you."},

  {type:"match",pairs:[{nl:"ja",en:"yes"},{nl:"nein",en:"no"},{nl:"vielleicht",en:"maybe"},{nl:"doch",en:"yes (contradicting a negative)"}]},

  {type:"mc",q:"'Natürlich' most closely matches:",opts:["Maybe","Of course","No problem","That is right"],ans:"Of course",hint:"Strong positive confirmation."},

  {type:"mc",q:"A: Sprichst du kein Deutsch? / B: ___, ich spreche Deutsch!",opts:["Ja","Nein","Doch","Genau"],ans:"Doch",hint:"The question is negative. The answer contradicts it."},

  {type:"fb",s:"A: Kommst du? B: ___, ich bin beschäftigt.",a:"Nein",opts:["Nein","Doch","Ja","Bitte"],hint:"Declining the invitation."},

  {type:"mc",q:"'Stimmt' is used to:",opts:["Disagree with a statement","Confirm a fact is correct","Express uncertainty","Ask a question"],ans:"Confirm a fact is correct",hint:"Stimmen = to be correct or accurate."},
]},

// ═══ L7: Zahlen 0-12 ═══
{id:"deu1l7",title:"Zahlen 0-12",icon:"🔢",xp:20,board:true,steps:[
  {type:"intro",title:"Zahlen 0-12",desc:"Numbers are your foundation for telling time, ordering food, giving your phone number, and more. Start with 0-12 and notice the Germanic patterns.",goals:["Numbers 0 to 12","Spot the Germanic number family","Use numbers in simple sentences"]},

  {type:"teach",kind:"word",nl:"null",en:"zero",phonetic:"nool",cognate:{words:[{lang:"English",word:"null"},{lang:"Dutch",word:"nul"}],family:"germanic"},example:"A: Was ist die Zimmernummer?\nB: Null, null, sieben.\nA: Danke!",exampleEn:"A: What is the room number?\nB: Zero, zero, seven.\nA: Thank you!",note:"Null is used in technical and phone number contexts.\nFootball: Zwei zu null = 2-0."},

  {type:"teach",kind:"word",nl:"eins",en:"one",phonetic:"ayns",cognate:{words:[{lang:"English",word:"one"},{lang:"Dutch",word:"een"}],family:"germanic"},example:"A: Wie viele Kinder haben Sie?\nB: Eins! Einen Sohn.\nA: Wie schön!",exampleEn:"A: How many children do you have?\nB: One! A son.\nA: How lovely!",note:"Standalone form: eins.\nBefore a noun it changes: ein Sohn (one son). You will learn articles next unit."},

  {type:"teach",kind:"word",nl:"zwei",en:"two",phonetic:"tsvay",cognate:{words:[{lang:"English",word:"two"},{lang:"Dutch",word:"twee"}],family:"germanic"},example:"A: Zwei Tassen Kaffee, bitte.\nB: Gern! Sofort.\nA: Danke schön.",exampleEn:"A: Two cups of coffee, please.\nB: Gladly! Right away.\nA: Thank you very much.",note:"The z in German = ts sound.\nZwei sounds like ts-VYE.\nNOT like English z."},

  {type:"teach",kind:"word",nl:"drei",en:"three",phonetic:"dry",cognate:{words:[{lang:"English",word:"three"},{lang:"Dutch",word:"drie"}],family:"germanic"},example:"A: Ich brauche drei Stühle.\nB: Drei? Kein Problem!\nA: Danke!",exampleEn:"A: I need three chairs.\nB: Three? No problem!\nA: Thanks!",note:"Drei rhymes with English 'dry'.\nRemarkably close to English three and Dutch drie."},

  {type:"teach",kind:"word",nl:"vier",en:"four",phonetic:"feer",cognate:{words:[{lang:"English",word:"four"},{lang:"Dutch",word:"vier"}],family:"germanic"},example:"A: Tisch für vier Personen, bitte.\nB: Natürlich! Folgen Sie mir.\nA: Vielen Dank.",exampleEn:"A: Table for four people, please.\nB: Of course! Follow me.\nA: Many thanks.",note:"Vier sounds like English 'fear'.\nFour, vier, vier: the Germanic family is clear."},

  {type:"teach",kind:"word",nl:"fünf",en:"five",phonetic:"fünf",example:"A: Das kostet fünf Euro.\nB: Hier sind fünf Euro.\nA: Danke!",exampleEn:"A: That costs five euros.\nB: Here are five euros.\nA: Thank you!",note:"The ü sound has no English equivalent.\nSay 'ee' and round your lips forward. Practice: fünf."},

  {type:"tip",title:"The Umlaut Sounds",text:"German has three vowel-with-dots sounds: ä, ö, ü.\n\nä: like English 'air' or 'bed' (open e)\nö: like English 'her' or 'bird' (no direct match)\nü: like English 'ee' but with rounded lips\n\nPractice ü: say 'ee', keep your tongue there, now round your lips. That is ü.\n\nYou will hear fünf, grün (green), and über (over) constantly. These sounds are worth practicing early.",deepDive:{title:"Umlauts in history",text:"Umlauts (ä, ö, ü) originally developed as vowel modifications caused by an 'i' sound in the following syllable (a process called i-mutation, shared with English: man/men, foot/feet).\n\nWhen printing was invented, the dots replaced the small 'e' that scribes had been adding above the vowel (ae, oe, ue). If you ever cannot type the umlaut, you can always write ae, oe, ue instead:\nü = ue (strasse > straße, but Müller = Mueller)\n\nThis ae/oe/ue substitution is still used in email addresses and usernames."}},

  {type:"teach",kind:"word",nl:"sechs",en:"six",phonetic:"zeks",cognate:{words:[{lang:"English",word:"six"},{lang:"Dutch",word:"zes"}],family:"germanic"},example:"A: Wie spät ist es?\nB: Es ist sechs Uhr.\nA: Dann muss ich gehen!",exampleEn:"A: What time is it?\nB: It is six o'clock.\nA: Then I have to go!",note:"Sechs = zeks (the chs = ks sound).\nCH in sechs: a hard ks cluster, not a soft ch."},

  {type:"teach",kind:"word",nl:"sieben",en:"seven",phonetic:"ZEE-ben",cognate:{words:[{lang:"English",word:"seven"},{lang:"Dutch",word:"zeven"}],family:"germanic"},example:"A: Sieben Tage die Woche arbeite ich.\nB: Das ist zu viel!\nA: Ich weiß.",exampleEn:"A: I work seven days a week.\nB: That is too much!\nA: I know.",note:"Seven, sieben, zeven: clearly the same root.\nThe b in sieben is soft, almost like English 'v'."},

  {type:"teach",kind:"word",nl:"acht",en:"eight",phonetic:"akht",cognate:{words:[{lang:"English",word:"eight"},{lang:"Dutch",word:"acht"}],family:"germanic"},example:"A: Wir treffen uns um acht Uhr.\nB: Um acht? Das ist früh!\nA: Ja, leider.",exampleEn:"A: We meet at eight o'clock.\nB: At eight? That is early!\nA: Yes, unfortunately.",note:"The ch in acht is a guttural back-of-throat sound.\nLike the ch in Scottish 'loch'. Practice: acht."},

  {type:"teach",kind:"word",nl:"neun",en:"nine",phonetic:"noyn",cognate:{words:[{lang:"English",word:"nine"},{lang:"Dutch",word:"negen"}],family:"germanic"},example:"A: Das Büro öffnet um neun.\nB: Neun Uhr? Gut.\nA: Bis dann!",exampleEn:"A: The office opens at nine.\nB: Nine o'clock? Good.\nA: See you then!",note:"Neun sounds like English 'noyn'.\nNumber nine is a false friend: neun = 9, nein = no."},

  {type:"teach",kind:"word",nl:"zehn",en:"ten",phonetic:"tsayn",cognate:{words:[{lang:"English",word:"ten"},{lang:"Dutch",word:"tien"}],family:"germanic"},example:"A: Zehn Minuten, bitte!\nB: Okay, ich warte.\nA: Danke, gleich!",exampleEn:"A: Ten minutes, please!\nB: Okay, I will wait.\nA: Thanks, be right there!",note:"Z in German is always ts sound.\nZehn = ts-AYN. Not like English 'zen'."},

  {type:"teach",kind:"word",nl:"elf",en:"eleven",phonetic:"elf",cognate:{words:[{lang:"English",word:"eleven"},{lang:"Dutch",word:"elf"}],family:"germanic"},example:"A: Es ist elf Uhr abends.\nB: So spät?\nA: Ja, Zeit zu schlafen!",exampleEn:"A: It is eleven o'clock at night.\nB: That late?\nA: Yes, time to sleep!",note:"Elf in German = 11, and also the mythical creature.\nBoth meanings from Germanic roots."},

  {type:"teach",kind:"word",nl:"zwölf",en:"twelve",phonetic:"tsvölf",example:"A: Wir essen um zwölf.\nB: Mittag? Super!\nA: Genau!",exampleEn:"A: We eat at twelve.\nB: Noon? Great!\nA: Exactly!",note:"Has the ö umlaut sound.\nMittag = midday (literally mid-day). Zwölf Uhr = noon."},

  {type:"mc",q:"How do you say 'zero' in German?",opts:["Eins","Null","Nein","Zwei"],ans:"Null",hint:"Watch out for the false friend."},

  {type:"mc",q:"'Neun' sounds like:",opts:["nine","noyn","nyne","noon"],ans:"noyn",hint:"The eu diphthong in German sounds like oy."},

  {type:"fb",s:"Tisch für ___ Personen, bitte. (table for 4)",a:"vier",opts:["vier","fünf","drei","zwei"],hint:"The number four in German."},

  {type:"match",pairs:[{nl:"fünf",en:"five"},{nl:"sieben",en:"seven"},{nl:"zehn",en:"ten"},{nl:"zwölf",en:"twelve"}]},

  {type:"mc",q:"The Z in German words like 'zehn' and 'zwei' sounds like:",opts:["English z as in zoo","ts as in cats","s as in sun","sh as in shoe"],ans:"ts as in cats",hint:"Z = ts. Always. This is consistent in German."},
]},

// ═══ L8: Willkommen Review ═══
{id:"deu1l8",title:"Willkommen Review",icon:"🌟",xp:25,board:true,steps:[
  {type:"intro",title:"Willkommen Review",desc:"You have completed Unit 1! This lesson brings everything together: greetings, farewells, formal address, feelings, politeness, yes and no, and numbers 0-12.",goals:["Connect greetings with situations","Combine politeness phrases naturally","Review numbers 0-12"]},

  {type:"tip",title:"Unit 1 Summary: What You Know",text:"You can now:\n\nGreet: Hallo, Guten Morgen, Guten Tag, Guten Abend\nFarewell: Tschüss, Auf Wiedersehen, Gute Nacht, Bis morgen\nAddress: du (informal) vs Sie (formal), Herr / Frau\nAsk feelings: Wie geht's? / Wie geht es Ihnen?\nAnswer: gut, sehr gut, nicht so gut, so lala\nPolite: bitte, danke, Entschuldigung, Kein Problem\nRespond: ja, nein, doch, genau, stimmt\nNumbers: null through zwölf",deepDive:{title:"Your first German conversation",text:"You now have everything to have a short real German conversation:\n\nA: Guten Morgen! Ich bin Anna. Wie heißen Sie?\nB: Guten Morgen, Frau Müller! Mein Name ist Thomas. Wie geht es Ihnen?\nA: Danke, gut! Und Ihnen?\nB: Sehr gut, danke. Auf Wiedersehen!\nA: Auf Wiedersehen!\n\nRead this out loud. Every word in it came from Unit 1."}},

  {type:"mc",q:"It is 3 PM. You enter a German pharmacy. You say:",opts:["Guten Morgen!","Guten Abend!","Guten Tag!","Gute Nacht!"],ans:"Guten Tag!",hint:"3 PM is afternoon. Which greeting fits?"},

  {type:"mc",q:"Your elderly neighbor says 'Wie geht es Ihnen?' You reply:",opts:["Wie geht's?","Danke, gut! Und Ihnen?","Tschüss!","Servus!"],ans:"Danke, gut! Und Ihnen?",hint:"Match the formal register and return the question."},

  {type:"fb",s:"___ Wiedersehen, Herr Fischer!",a:"Auf",opts:["Auf","Bis","Gute","Tschüss"],hint:"Formal goodbye, used in face-to-face settings."},

  {type:"mc",q:"A: Du bist doch nicht krank! B: ___! Ich habe Fieber.",opts:["Ja","Nein","Doch","Vielleicht"],ans:"Doch",hint:"Contradicting a negative statement."},

  {type:"match",pairs:[{nl:"Entschuldigung",en:"excuse me"},{nl:"genau",en:"exactly"},{nl:"doch",en:"yes (contradicting negative)"},{nl:"Gern geschehen",en:"my pleasure"}]},

  {type:"mc",q:"'Auf Wiederhören' is used:",opts:["At the end of a meal","When saying goodbye in person","When ending a phone call","When someone sneezes"],ans:"When ending a phone call",hint:"Hören = to hear. Used when you cannot see the person."},

  {type:"fb",s:"Ich bin ___. Das sind fünf plus drei.",a:"acht",opts:["acht","neun","sieben","zehn"],hint:"Five plus three equals..."},

  {type:"mc",q:"Which of these is the FORMAL title for a woman?",opts:["Herr","Fräulein","Frau","Sie"],ans:"Frau",hint:"Used for all adult women in modern German."},

  {type:"mc",q:"You want to politely decline an offer. You say:",opts:["Doch, danke","Nein, danke","Ja, bitte","Genau, bitte"],ans:"Nein, danke",hint:"No followed by thank you is the polite formula."},

  {type:"fb",s:"Wie ___ es Ihnen? (formal: How are you?)",a:"geht",opts:["geht","bist","sind","haben"],hint:"The verb in 'Wie geht es Ihnen' is..."},

  {type:"mc",q:"'Bis morgen' literally means:",opts:["Good morning","Until tomorrow","See you soon","Goodbye"],ans:"Until tomorrow",hint:"Bis = until. Morgen = tomorrow."},

  {type:"match",pairs:[{nl:"null",en:"zero"},{nl:"elf",en:"eleven"},{nl:"zwölf",en:"twelve"},{nl:"fünf",en:"five"}]},

  {type:"mc",q:"The Z in 'zwei' and 'zehn' sounds like:",opts:["English z in 'zoo'","ts in 'cats'","sh in 'shoe'","s in 'sun'"],ans:"ts in 'cats'",hint:"German Z is always the ts cluster."},

  {type:"mc",q:"Which word means 'maybe' in German?",opts:["genau","stimmt","vielleicht","natürlich"],ans:"vielleicht",hint:"Expressing uncertainty, not confirmation."},

  {type:"fb",s:"Es ___ mir leid. Das war mein Fehler.",a:"tut",opts:["tut","bin","ist","hat"],hint:"Complete the apology: Es ___ mir leid."},

  {type:"mc",q:"'So lala' expresses:",opts:["Enthusiasm","Refusal","A so-so feeling","Strong agreement"],ans:"A so-so feeling",hint:"Middle-ground answer, often with a shrug."},
]},

]},


// ── UNIT 2: Ich bin... ──
{n:2,lang:"de",track:"v1",title:"Ich bin...",sub:"Self-introduction & Nationality",icon:"\u{1F4DB}",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Ich heiße... ═══
{id:"deu2l1",title:"Ich hei\u00dfe...",icon:"\u{1F4DB}",xp:15,board:true,steps:[
  {type:"intro",title:"Ich hei\u00dfe...",desc:"Time to introduce yourself in German! In this lesson you learn how to say your name, ask for someone else's name, and respond politely in a first meeting.",goals:["Say your name with Ich hei\u00dfe and Mein Name ist","Ask for a name formally and informally","Complete a mini self-introduction"]},

  {type:"teach",kind:"phrase",nl:"Ich hei\u00dfe...",en:"My name is... / I am called...",phonetic:"ikh HY-suh",example:"A: Guten Tag! Ich hei\u00dfe Lena Brandt.\nB: Hallo! Ich hei\u00dfe Kai. Freut mich!\nA: Freut mich auch!",exampleEn:"A: Good day! My name is Lena Brandt.\nB: Hello! My name is Kai. Nice to meet you!\nA: Nice to meet you too!",note:"Ich hei\u00dfe = I am called. Most natural way to give your name in spoken German.",cognate:{words:[{lang:"English",word:"I am called"}],family:"germanic"}},

  {type:"teach",kind:"phrase",nl:"Mein Name ist...",en:"My name is... (formal variant)",phonetic:"myn NAH-muh ist",example:"A: Darf ich fragen, wie Ihr Name ist?\nB: Mein Name ist Thomas M\u00fcller.\nA: Angenehm, Herr M\u00fcller.",exampleEn:"A: May I ask what your name is?\nB: My name is Thomas Mueller.\nA: Pleased to meet you, Mr. Mueller.",note:"Slightly more formal than Ich hei\u00dfe.\nUsed on forms, phone calls, and formal introductions."},

  {type:"teach",kind:"phrase",nl:"Wie hei\u00dfen Sie?",en:"What is your name? (formal)",phonetic:"vee HY-suhn zee",example:"A: Entschuldigung, wie hei\u00dfen Sie?\nB: Ich hei\u00dfe Petra Wagner. Und Sie?\nA: Mein Name ist Bernd Koch.",exampleEn:"A: Excuse me, what is your name?\nB: My name is Petra Wagner. And you?\nA: My name is Bernd Koch.",note:"Formal register. Use with strangers, authority figures, and people older than you.\nSie = formal you (always capitalized)."},

  {type:"teach",kind:"phrase",nl:"Wie hei\u00dft du?",en:"What is your name? (informal)",phonetic:"vee hysst doo",example:"A: Hey! Ich bin neu hier. Wie hei\u00dft du?\nB: Ich hei\u00dfe Jonas. Und du?\nA: Ich hei\u00dfe Emma. Nett, dich kennenzulernen!",exampleEn:"A: Hey! I am new here. What is your name?\nB: My name is Jonas. And you?\nA: My name is Emma. Nice to meet you!",note:"Informal register. Use with peers, children, and friends.\ndu = informal you (lowercase)."},

  {type:"teach",kind:"phrase",nl:"Und Sie? / Und du?",en:"And you? (formal / informal)",phonetic:"oont zee / oont doo",example:"A: Mein Name ist Clara. Und Sie?\nB: Freut mich, Clara. Ich hei\u00dfe Dr. Weber.\nA: Guten Tag, Dr. Weber!",exampleEn:"A: My name is Clara. And you?\nB: Nice to meet you, Clara. My name is Dr. Weber.\nA: Good day, Dr. Weber!",note:"Used to bounce the question back.\nSie = formal, du = informal. Match the register of the conversation."},

  {type:"teach",kind:"phrase",nl:"Freut mich!",en:"Nice to meet you!",phonetic:"froyt mikh",example:"A: Ich hei\u00dfe Sofia. Das ist mein Kollege Markus.\nB: Freut mich, Sofia!\nA: Freut mich auch, Markus.",exampleEn:"A: My name is Sofia. This is my colleague Markus.\nB: Nice to meet you, Sofia!\nA: Nice to meet you too, Markus.",note:"Literally: It pleases me.\nFreut mich auch = Nice to meet you too.\nAngenehm is a more formal alternative."},

  {type:"tip",title:"hei\u00dfen: The Name Verb",text:"hei\u00dfen means 'to be called' and uses a special stem:\n\nich hei\u00dfe (I am called)\ndu hei\u00dft (you are called, informal)\nSie hei\u00dfen (you are called, formal)\ner/sie hei\u00dft (he/she is called)\n\nNote: du hei\u00dft has no extra -e because the stem ends in -\u00df.",deepDive:{title:"Why hei\u00dfen instead of haben?",text:"In German, you do not 'have' a name, you 'are called' one. This matches Dutch (heten), Swedish (heta), and even Old English 'to be hight'. The verb hei\u00dfen also means 'to mean': Was hei\u00dft das? (What does that mean?). One verb, two jobs."}},

  {type:"mc",q:"How do you ask for someone's name informally?",opts:["Wie hei\u00dfen Sie?","Wie hei\u00dft du?","Mein Name ist?","Wie ist Ihr Name?"],ans:"Wie hei\u00dft du?",hint:"Informal = du register. Which option uses du?"},

  {type:"mc",q:"Which phrase is the most formal way to give your name?",opts:["Ich bin...","Ich hei\u00dfe...","Mein Name ist...","Hi, ich bin..."],ans:"Mein Name ist...",hint:"One phrase is used on forms and official introductions."},

  {type:"fb",s:"Guten Tag! Ich ___ Anna Schmidt.",a:"hei\u00dfe",opts:["hei\u00dfe","bin","habe","komme"],hint:"Which verb means 'to be called' in German?"},

  {type:"fb",s:"___ hei\u00dfen Sie? Mein Name ist M\u00fcller.",a:"Wie",opts:["Wie","Was","Wer","Wo"],hint:"The question word for 'what (name)' in German."},

  {type:"match",pairs:[{nl:"Ich hei\u00dfe...",en:"My name is..."},{nl:"Wie hei\u00dfen Sie?",en:"What is your name? (formal)"},{nl:"Wie hei\u00dft du?",en:"What is your name? (informal)"},{nl:"Freut mich!",en:"Nice to meet you!"}]},

  {type:"mc",q:"Someone introduces themselves and holds out their hand. You respond:",opts:["Tsch\u00fcss!","Freut mich!","Guten Morgen!","Entschuldigung!"],ans:"Freut mich!",hint:"This phrase is the standard response when meeting someone for the first time."},

  {type:"mc",q:"You are 25 and meet a new classmate your age. Which form do you use?",opts:["Wie hei\u00dfen Sie?","Wie ist Ihr Name?","Wie hei\u00dft du?","Mein Name ist..."],ans:"Wie hei\u00dft du?",hint:"Same age, informal setting. Which register is appropriate?"},

  {type:"mc",q:"Which is the correct response to 'Ich hei\u00dfe Thomas. Und Sie?'",opts:["Tsch\u00fcss, Thomas!","Mein Name ist Anna. Freut mich!","Guten Morgen!","Entschuldigung!"],ans:"Mein Name ist Anna. Freut mich!",hint:"Give your name and the standard response for a first meeting."},

  {type:"mc",q:"A new colleague at work introduces themselves. You ask their name:",opts:["Wie hei\u00dft du?","Hey, wie hei\u00dft du?","Wie hei\u00dfen Sie?","Hi du!"],ans:"Wie hei\u00dfen Sie?",hint:"Workplace context means formal register. Which option uses Sie?"},

  {type:"drag_fill",s:"A: Guten Tag! {1} hei\u00dfe Claudia. {2} Sie?\nB: Freut mich! {3} Name ist Herr Becker.",blanks:{"1":"Ich","2":"Und","3":"Mein"},pool:["Ich","Und","Mein","Wie","Sie","Du"],hint:"First-person pronoun, the bounce-back word, then the possessive for 'my'."},
]},

// ═══ L2: Woher kommen Sie? ═══
{id:"deu2l2",title:"Woher kommen Sie?",icon:"\ud83c\udf0d",xp:15,board:true,steps:[
  {type:"intro",title:"Woher kommen Sie?",desc:"Where are you from? This lesson teaches important country names, how to ask where someone is from, and how to answer with Ich komme aus...",goals:["Ask where someone is from","Say your country of origin","Learn 8 key country names in German"]},

  {type:"teach",kind:"phrase",nl:"Ich komme aus...",en:"I come from... / I am from...",phonetic:"ikh KOM-uh ows",example:"A: Woher kommen Sie?\nB: Ich komme aus Deutschland. Und Sie?\nA: Ich komme aus der T\u00fcrkei.",exampleEn:"A: Where are you from?\nB: I am from Germany. And you?\nA: I am from Turkey.",note:"komme aus = come from. aus = from/out of.\nMost countries: aus Deutschland. A few need the article: aus der T\u00fcrkei."},

  {type:"teach",kind:"phrase",nl:"Woher kommen Sie?",en:"Where are you from? (formal)",phonetic:"VOH-her KOM-uhn zee",example:"A: Woher kommen Sie, wenn ich fragen darf?\nB: Ich komme aus Spanien. Und Sie?\nA: Aus England, aus London.",exampleEn:"A: Where are you from, if I may ask?\nB: I am from Spain. And you?\nA: From England, from London.",note:"Woher = from where. kommen = to come.\nFormal: Woher kommen Sie. Informal: Woher kommst du."},

  {type:"teach",kind:"word",nl:"Deutschland",en:"Germany",phonetic:"DOYCH-lant",cognate:{words:[{lang:"English",word:"Dutch (historical root)"}],family:"germanic"},example:"A: Sind Sie aus Deutschland?\nB: Ja, ich bin aus M\u00fcnchen. Das ist in S\u00fcddeutschland.\nA: Sch\u00f6n! Ich kenne M\u00fcnchen gut.",exampleEn:"A: Are you from Germany?\nB: Yes, I am from Munich. That is in southern Germany.\nA: Nice! I know Munich well.",note:"Deutschland = Land of the Deutsche (Germans).\nOften shortened to DE on addresses and car stickers."},

  {type:"teach",kind:"word",nl:"\u00d6sterreich",en:"Austria",phonetic:"OES-ter-ryekh",example:"A: Kommen Sie aus Deutschland?\nB: Nein, ich komme aus \u00d6sterreich, aus Wien.\nA: Ah, Wien ist wundersch\u00f6n!",exampleEn:"A: Are you from Germany?\nB: No, I am from Austria, from Vienna.\nA: Ah, Vienna is beautiful!",note:"Austria in German. Wien = Vienna.\nNote: in \u00d6sterreich (location), but aus \u00d6sterreich (origin)."},

  {type:"teach",kind:"word",nl:"die Schweiz",en:"Switzerland",phonetic:"dee shvyts",example:"A: Woher kommen Sie?\nB: Ich komme aus der Schweiz, aus Z\u00fcrich.\nA: Sprechen Sie auch Franz\u00f6sisch?",exampleEn:"A: Where are you from?\nB: I am from Switzerland, from Zurich.\nA: Do you also speak French?",note:"Always uses the article: aus der Schweiz.\nSwitzerland has 4 official languages: German, French, Italian, Romansh."},

  {type:"teach",kind:"word",nl:"England",en:"England / the UK",phonetic:"ENG-lant",cognate:{words:[{lang:"English",word:"England"}],family:"germanic"},example:"A: Sprechen Sie Englisch?\nB: Ja, ich komme aus England, aus London.\nA: Ihr Deutsch ist sehr gut!",exampleEn:"A: Do you speak English?\nB: Yes, I am from England, from London.\nA: Your German is very good!",note:"England is commonly used for the UK in everyday German speech.\nGro\u00dfbritannien = Great Britain (more precise)."},

  {type:"teach",kind:"word",nl:"Frankreich",en:"France",phonetic:"FRANK-ryekh",example:"A: Kommen Sie aus Frankreich?\nB: Ja, aus Paris. Ich bin seit drei Jahren in Berlin.\nA: Wie gef\u00e4llt Ihnen Berlin?",exampleEn:"A: Are you from France?\nB: Yes, from Paris. I have been in Berlin for three years.\nA: How do you like Berlin?",note:"Frankreich = Land of the Franks.\nFranz\u00f6sisch = French language. Franzose/Franz\u00f6sin = French person."},

  {type:"teach",kind:"word",nl:"die T\u00fcrkei",en:"Turkey",phonetic:"dee t\u00fcr-KY",example:"A: Woher kommen Sie urspr\u00fcnglich?\nB: Ich komme aus der T\u00fcrkei, aus Istanbul.\nA: Und wie lange wohnen Sie schon hier?",exampleEn:"A: Where are you originally from?\nB: I am from Turkey, from Istanbul.\nA: And how long have you been living here?",note:"die T\u00fcrkei needs the article: aus der T\u00fcrkei.\nA small group of countries always take an article in German."},

  {type:"tip",title:"Countries with Articles",text:"Most German country names take NO article:\naus Deutschland, aus Frankreich, aus England\n\nA few always take the article:\naus der T\u00fcrkei (f), aus der Schweiz (f)\naus den USA (pl), aus dem Iran (m)\n\nWhen in doubt: no article is safe for most European countries.",deepDive:{title:"Why do some countries have articles?",text:"German uses articles with country names when the name is grammatically feminine or plural. Die T\u00fcrkei comes from an older phrase. Die Schweiz likely traces to the canton of Schwyz. The USA is plural (die Vereinigten Staaten = the United States). Memorize the article as part of the name when it applies."}},

  {type:"mc",q:"How do you say 'I am from France'?",opts:["Ich bin aus Frankreich","Ich komme aus Frankreich","Ich hei\u00dfe aus Frankreich","Ich wohne aus Frankreich"],ans:"Ich komme aus Frankreich",hint:"The fixed phrase uses 'kommen aus', not another verb."},

  {type:"mc",q:"Which country ALWAYS needs an article in 'Ich komme aus ___'?",opts:["Deutschland","England","Frankreich","die T\u00fcrkei"],ans:"die T\u00fcrkei",hint:"One of these countries keeps its article. Which one has 'die' in its German name?"},

  {type:"fb",s:"Woher ___ Sie? Ich komme aus Spanien.",a:"kommen",opts:["kommen","kommt","kommst","bin"],hint:"Formal 'you' form of kommen."},

  {type:"match",pairs:[{nl:"Deutschland",en:"Germany"},{nl:"\u00d6sterreich",en:"Austria"},{nl:"Frankreich",en:"France"},{nl:"die Schweiz",en:"Switzerland"}]},

  {type:"mc",q:"'Woher' in German means:",opts:["Where to","Where from","How long","When"],ans:"Where from",hint:"wo = where, her = from (direction toward speaker)."},

  {type:"mc",q:"You meet someone from Z\u00fcrich. They are from:",opts:["Deutschland","England","die Schweiz","\u00d6sterreich"],ans:"die Schweiz",hint:"Z\u00fcrich is the largest city in which German-speaking country?"},


  {type:"mc",q:"Which sentence correctly asks where someone is from informally?",opts:["Woher kommen Sie?","Woher kommst du?","Woher kommt er?","Woher komme ich?"],ans:"Woher kommst du?",hint:"Informal = du register. The du form of kommen is..."},
  {type:"drag_fill",s:"A: {1} kommen Sie?\nB: Ich komme {2} Deutschland. Und Sie?\nA: {3} komme aus \u00d6sterreich.",blanks:{"1":"Woher","2":"aus","3":"Ich"},pool:["Woher","Wer","aus","von","Ich","Du"],hint:"Question word for origin, the preposition, then the first-person pronoun."},
]},

// ═══ L3: Ich bin Student ═══
{id:"deu2l3",title:"Ich bin Student",icon:"\ud83d\udcbc",xp:15,board:true,steps:[
  {type:"intro",title:"Ich bin Student",desc:"What do you do? Learn how to say your profession in German using the verb sein (to be), and discover why German drops the article with job titles.",goals:["Say your profession with Ich bin...","Learn 8 common professions","Understand the no-article rule for jobs"]},

  {type:"teach",kind:"phrase",nl:"Ich bin...",en:"I am... (for professions)",phonetic:"ikh bin",example:"A: Was machen Sie beruflich?\nB: Ich bin Lehrerin. Und Sie?\nA: Ich bin Ingenieur.",exampleEn:"A: What do you do for work?\nB: I am a teacher. And you?\nA: I am an engineer.",note:"In German, NO article before professions: Ich bin Lehrer, not Ich bin ein Lehrer.\nThis is different from English!"},

  {type:"teach",kind:"word",nl:"der Lehrer / die Lehrerin",en:"teacher (m/f)",phonetic:"der LAY-rer / dee LAY-rer-in",example:"A: Sind Sie Lehrer?\nB: Ja, ich bin Lehrer an einer Grundschule.\nA: Das ist ein sch\u00f6ner Beruf!",exampleEn:"A: Are you a teacher?\nB: Yes, I am a teacher at an elementary school.\nA: That is a nice profession!",note:"Most professions have -in for the female form.\nLehrer (m) vs Lehrerin (f)."},

  {type:"teach",kind:"word",nl:"der Arzt / die \u00c4rztin",en:"doctor (m/f)",phonetic:"der ahrts / dee AIRTS-tin",example:"A: Meine Mutter ist \u00c4rztin.\nB: Interessant! Als was arbeitet sie?\nA: Sie ist Kinder\u00e4rztin in K\u00f6ln.",exampleEn:"A: My mother is a doctor.\nB: Interesting! What kind of doctor?\nA: She is a pediatrician in Cologne.",note:"Arzt = doctor (m). \u00c4rztin = doctor (f).\nNote the umlaut change: Arzt \u2192 \u00c4rztin."},

  {type:"teach",kind:"word",nl:"der Student / die Studentin",en:"university student (m/f)",phonetic:"der shtu-DENT / dee shtu-DEN-tin",cognate:{words:[{lang:"English",word:"student"}],family:"latin"},example:"A: Was studierst du?\nB: Ich bin Student. Ich studiere Informatik.\nA: Ich bin auch Studentin!",exampleEn:"A: What do you study?\nB: I am a student. I study computer science.\nA: I am a student too!",note:"Student = university student only.\nSch\u00fcler = school pupil (different word)."},

  {type:"teach",kind:"word",nl:"der Ingenieur / die Ingenieurin",en:"engineer (m/f)",phonetic:"der in-zheh-NYEUR",cognate:{words:[{lang:"English",word:"engineer"}],family:"latin"},example:"A: Ich habe geh\u00f6rt, Sie sind Ingenieur?\nB: Ja, Maschinenbauingenieur.\nA: Das klingt sehr interessant!",exampleEn:"A: I heard you are an engineer?\nB: Yes, mechanical engineer.\nA: That sounds very interesting!",note:"Borrowed from French. German pronunciation keeps the French stress.\nMaschinenbauingenieur = mechanical engineer."},

  {type:"teach",kind:"word",nl:"der Verk\u00e4ufer / die Verk\u00e4uferin",en:"sales assistant (m/f)",phonetic:"der fer-KOY-fer",example:"A: Wo arbeiten Sie?\nB: Ich bin Verk\u00e4ufer in einem Supermarkt.\nA: Und m\u00f6gen Sie die Arbeit?",exampleEn:"A: Where do you work?\nB: I am a sales assistant in a supermarket.\nA: And do you like the work?",note:"Verkauf = sale. Verk\u00e4ufer = one who sells.\nVerk\u00e4uferin = female sales assistant."},

  {type:"teach",kind:"word",nl:"der Programmierer / die Programmiererin",en:"programmer / software developer (m/f)",phonetic:"der pro-gra-MEER-er",cognate:{words:[{lang:"English",word:"programmer"}],family:"latin"},example:"A: Was machst du so?\nB: Ich bin Programmiererin bei einem Start-up.\nA: Arbeitest du mit Python oder JavaScript?",exampleEn:"A: What do you do?\nB: I am a programmer at a start-up.\nA: Do you work with Python or JavaScript?",note:"A direct loan word from English.\nVery common job title in modern Germany."},

  {type:"teach",kind:"word",nl:"der Journalist / die Journalistin",en:"journalist (m/f)",phonetic:"der zhoor-nah-LIST",cognate:{words:[{lang:"English",word:"journalist"}],family:"latin"},example:"A: Ich habe Sie in der Zeitung gesehen.\nB: Ja, ich bin Journalist beim Tagesspiegel.\nA: Und wor\u00fcber schreiben Sie?",exampleEn:"A: I saw you in the newspaper.\nB: Yes, I am a journalist at Der Tagesspiegel.\nA: And what do you write about?",note:"International loan word. Nearly identical in English.\nJournalist (m) / Journalistin (f)."},

  {type:"tip",title:"No Article with Professions",text:"German drops the article before professions:\n\nIch bin Lehrer. (NOT: Ich bin ein Lehrer)\nSie ist \u00c4rztin. (NOT: Sie ist eine \u00c4rztin)\nEr ist Student. (NOT: Er ist ein Student)\n\nException: if you add an adjective, the article returns:\nEr ist ein sehr guter Lehrer.",deepDive:{title:"Why no article with professions?",text:"Job titles after 'sein' classify the person rather than count them as objects. German omits the article for exactly this reason. The same happens with nationalities (Ich bin Deutsche) and religions. Once an adjective is added, the article returns because a full noun phrase is restored."}},

  {type:"mc",q:"How do you correctly say 'I am a doctor' in German?",opts:["Ich bin ein Arzt","Ich bin Arzt","Ich habe Arzt","Ich bin der Arzt"],ans:"Ich bin Arzt",hint:"German drops the article before professions after 'sein'."},

  {type:"mc",q:"What is the female form of 'Lehrer'?",opts:["Lehrerin","Lehrerfrau","Lehrerinnen","Lehrersfrau"],ans:"Lehrerin",hint:"Female profession forms in German add -in to the masculine form."},

  {type:"fb",s:"Was machen Sie beruflich? Ich ___ Ingenieurin.",a:"bin",opts:["bin","hei\u00dfe","komme","habe"],hint:"Which verb links a subject to a profession in German?"},

  {type:"match",pairs:[{nl:"der Arzt",en:"doctor (m)"},{nl:"die Studentin",en:"university student (f)"},{nl:"die Verk\u00e4uferin",en:"sales assistant (f)"},{nl:"der Journalist",en:"journalist (m)"}]},

  {type:"mc",q:"Which sentence is correct German?",opts:["Ich bin ein Programmierer","Ich bin Programmierer","Ich bin der Programmierer","Ich habe Programmierer"],ans:"Ich bin Programmierer",hint:"Profession after 'sein' takes no article."},

  {type:"mc",q:"What is the difference between Sch\u00fcler and Student?",opts:["Sch\u00fcler is university, Student is school","Sch\u00fcler is school pupil, Student is university student","They are identical in meaning","Sch\u00fcler is male, Student is female"],ans:"Sch\u00fcler is school pupil, Student is university student",hint:"German has precise vocabulary for different levels of education."},


  {type:"mc",q:"Someone says 'Ich bin Journalistin.' What is her profession?",opts:["She is a teacher","She is a journalist","She is a programmer","She is an engineer"],ans:"She is a journalist",hint:"Journalistin is the female form of which profession?"},
  {type:"drag_fill",s:"{1} bin Lehrerin. Ich komme {2} Deutschland und ich arbeite {3} einer Schule in Berlin.",blanks:{"1":"Ich","2":"aus","3":"an"},pool:["Ich","Sie","aus","von","an","in"],hint:"First-person pronoun, the 'from' preposition, then the preposition for working at a place."},
]},

// ═══ L4: sein - Full Conjugation ═══
{id:"deu2l4",title:"sein: Full Conjugation",icon:"\ud83d\udd24",xp:20,board:true,steps:[
  {type:"intro",title:"sein: Full Conjugation",desc:"The most important verb in German: sein (to be). It connects you to your identity, profession, nationality, and feelings. Master every form now.",goals:["All 6 forms of sein","Formal vs informal you","Use sein in sentences about yourself and others"]},

  {type:"teach",kind:"word",nl:"sein",en:"to be",phonetic:"zyn",cognate:{words:[{lang:"English",word:"be / am / is / are"}],family:"germanic"},example:"A: Was ist das auf Deutsch?\nB: Das ist ein W\u00f6rterbuch.\nA: Und wer sind diese Leute?\nB: Das sind meine Kollegen.",exampleEn:"A: What is that in German?\nB: That is a dictionary.\nA: And who are these people?\nB: Those are my colleagues.",note:"sein is the most irregular verb in German.\nForms: bin, bist, ist, sind, seid, sind.\nThese forms appear in almost every sentence."},

  {type:"verb_table",title:"sein \u2013 to be",label:"Present tense",groups:[
    {label:"Singular",rows:[
      {pronoun:"ich",form:"bin",en:"I am"},
      {pronoun:"du",form:"bist",en:"you are (informal)"},
      {pronoun:"er/sie/es",form:"ist",en:"he/she/it is"}
    ]},
    {label:"Plural",rows:[
      {pronoun:"wir",form:"sind",en:"we are"},
      {pronoun:"ihr",form:"seid",en:"you all are (informal plural)"},
      {pronoun:"sie",form:"sind",en:"they are"}
    ]},
    {label:"Formal",rows:[
      {pronoun:"Sie",form:"sind",en:"you are (formal)"}
    ]}
  ],note:"ich bin is unique. bist, ist, and seid have no parallels in English.\nSie sind (formal) and sie sind (they) share the same form. Context distinguishes them.",deepDive:{title:"Why is sein so irregular?",text:"'sein' merges three ancient Proto-Germanic verbs. The forms bin and bist come from *beun\u0105. The forms ist and sind come from *sin\u00fean\u0105. The past tense war comes from *wesan\u0105. English underwent the same merger: be, am, is, are, was, were all come from different root verbs. These verbs were so frequently used that speakers never replaced them, so their unusual forms survived into modern languages."}},

  {type:"teach",kind:"phrase",nl:"Ich bin m\u00fcde.",en:"I am tired.",phonetic:"ikh bin M\u00dc-duh",example:"A: Du siehst m\u00fcde aus.\nB: Ja, ich bin sehr m\u00fcde. Ich habe schlecht geschlafen.\nA: Ich auch. Ich bin total ersch\u00f6pft.",exampleEn:"A: You look tired.\nB: Yes, I am very tired. I slept badly.\nA: Me too. I am completely exhausted.",note:"bin + adjective = describe yourself.\nAdjectives after sein have NO ending change in this position."},

  {type:"teach",kind:"phrase",nl:"Er ist Arzt. Sie ist \u00c4rztin.",en:"He is a doctor. She is a doctor.",phonetic:"air ist ahrts / zee ist AIRTS-tin",example:"A: Wer ist Ihr Vater?\nB: Er ist Arzt in Hamburg.\nA: Und Ihre Mutter?\nB: Sie ist Lehrerin.",exampleEn:"A: Who is your father?\nB: He is a doctor in Hamburg.\nA: And your mother?\nB: She is a teacher.",note:"er = he, sie = she. Both use ist.\nNo article before professions."},

  {type:"teach",kind:"phrase",nl:"Wir sind aus Deutschland.",en:"We are from Germany.",phonetic:"veer zint ows DOYCH-lant",example:"A: Woher kommt ihr?\nB: Wir sind aus Deutschland, aus Frankfurt.\nA: Und sprecht ihr beide Deutsch?\nB: Ja, nat\u00fcrlich!",exampleEn:"A: Where are you all from?\nB: We are from Germany, from Frankfurt.\nA: And do you both speak German?\nB: Yes, of course!",note:"wir sind = we are.\nwir and sie (they) share the same form: sind."},

  {type:"tip",title:"du / ihr / Sie: Three Ways to Say You",text:"German has three ways to address people:\n\ndu = one person, informal (friends, family, peers)\nihr = two or more people, informal (you all)\nSie = one or more people, formal (strangers, bosses, customers)\n\nVerb forms:\ndu bist, ihr seid, Sie sind",deepDive:{title:"When did German start using Sie as a formal pronoun?",text:"The formal Sie comes from 17th-century court culture. It was originally the third-person plural (sie = they) used as a distancing honorific, as if addressing royalty as a group. French went through a similar process with 'vous'. English once had 'thou' (informal) vs 'you' (formal) but eventually merged both into 'you'. German kept the distinction, which is why learning the register is important."}},

  {type:"mc",q:"Fill in: Mein Bruder ___ Ingenieur.",opts:["bin","bist","ist","sind"],ans:"ist",hint:"Third-person singular of sein."},

  {type:"mc",q:"Which form completes: Wir ___ aus \u00d6sterreich.",opts:["bin","bist","ist","sind"],ans:"sind",hint:"First-person plural of sein."},

  {type:"mc",q:"How do you ask 'Are you tired?' formally to one person?",opts:["Bist du m\u00fcde?","Seid ihr m\u00fcde?","Sind Sie m\u00fcde?","Ist er m\u00fcde?"],ans:"Sind Sie m\u00fcde?",hint:"Formal singular 'you' uses the Sie form."},

  {type:"fb",s:"___ ihr auch aus Frankfurt?",a:"Seid",opts:["Seid","Sind","Bist","Bin"],hint:"Informal plural 'you all' form of sein."},

  {type:"match",pairs:[{nl:"ich bin",en:"I am"},{nl:"du bist",en:"you are (informal)"},{nl:"wir sind",en:"we are"},{nl:"Sie sind",en:"you are (formal)"}]},

  {type:"mc",q:"'Ihr seid' means:",opts:["You are (formal singular)","They are","You all are (informal plural)","We are"],ans:"You all are (informal plural)",hint:"ihr = informal plural you."},


  {type:"mc",q:"'Es ist kalt' (It is cold) uses which form of sein?",opts:["bin","bist","ist","sind"],ans:"ist",hint:"es = it. Third-person singular."},

  {type:"mc",q:"Your friends are from Austria. You ask them: '___ ihr aus Wien?'",opts:["Bist","Bin","Ist","Seid"],ans:"Seid",hint:"Informal plural you = ihr. Which form of sein goes with ihr?"},

  {type:"fb",s:"Ich ___ Studentin. Meine Freundin ___ auch Studentin.",a:"bin",opts:["bin","bist","ist","sind"],hint:"First-person singular of sein."},
  {type:"drag_fill",s:"A: {1} Sie Lehrerin?\nB: Nein, ich {2} \u00c4rztin. Und Sie?\nA: Ich {3} Journalist.",blanks:{"1":"Sind","2":"bin","3":"bin"},pool:["Sind","Bist","Seid","bin","ist","bist"],hint:"Formal question form of sein, then first-person for two different speakers."},

  {type:"mc",q:"Which sentence is grammatically correct?",opts:["Er sind Arzt","Sie ist \u00c4rztin","Wir ist m\u00fcde","Ich sind Student"],ans:"Sie ist \u00c4rztin",hint:"Match the subject and verb form. Only one pair is correct."},
]},

// ═══ L5: Sprachen ═══
{id:"deu2l5",title:"Sprachen",icon:"\ud83d\udde3\ufe0f",xp:15,board:true,steps:[
  {type:"intro",title:"Sprachen",desc:"Which languages do you speak? In this lesson you learn language names in German and how to use the verb sprechen (to speak) to talk about your language skills.",goals:["Name 7 languages in German","Conjugate sprechen (to speak)","Say which languages you speak"]},

  {type:"teach",kind:"word",nl:"Deutsch",en:"German (language)",phonetic:"doych",example:"A: Sprechen Sie Deutsch?\nB: Ja, aber nicht so gut. Ich lerne gerade.\nA: Ihr Deutsch ist schon sehr gut!",exampleEn:"A: Do you speak German?\nB: Yes, but not that well. I am currently learning.\nA: Your German is already very good!",note:"Deutsch = the language. Deutschland = the country.\nDas Deutsche W\u00f6rterbuch = the German dictionary."},

  {type:"teach",kind:"word",nl:"Englisch",en:"English (language)",phonetic:"ENG-lish",cognate:{words:[{lang:"English",word:"English"}],family:"germanic"},example:"A: Sprechen Sie Englisch?\nB: Ja, nat\u00fcrlich. Ich komme aus England.\nA: Und wie gut sprechen Sie Deutsch?\nB: Noch nicht so gut, aber ich \u00fcbe!",exampleEn:"A: Do you speak English?\nB: Yes, of course. I am from England.\nA: And how well do you speak German?\nB: Not that well yet, but I am practising!",note:"Englisch is a cognate. Nearly identical in pronunciation."},

  {type:"teach",kind:"word",nl:"Franz\u00f6sisch",en:"French (language)",phonetic:"fran-ZOE-zish",example:"A: Welche Sprachen sprichst du?\nB: Ich spreche Deutsch und Franz\u00f6sisch.\nA: Franz\u00f6sisch ist eine sch\u00f6ne Sprache!",exampleEn:"A: Which languages do you speak?\nB: I speak German and French.\nA: French is a beautiful language!",note:"Frankreich = France. Franz\u00f6sisch = French (language).\nPattern: country \u2192 language with -(z)isch suffix."},

  {type:"teach",kind:"word",nl:"Spanisch",en:"Spanish (language)",phonetic:"SHPAH-nish",cognate:{words:[{lang:"English",word:"Spanish"}],family:"latin"},example:"A: Lernst du noch Sprachen?\nB: Ja, ich lerne Spanisch. Ich m\u00f6chte nach Spanien reisen.\nA: Toll! Spanisch ist nicht so schwer.",exampleEn:"A: Are you learning any other languages?\nB: Yes, I am learning Spanish. I want to travel to Spain.\nA: Great! Spanish is not that difficult.",note:"Spanien = Spain. Spanisch = Spanish.\nThe -isch suffix turns country names into language adjectives."},

  {type:"teach",kind:"word",nl:"T\u00fcrkisch",en:"Turkish (language)",phonetic:"T\u00dcR-kish",example:"A: Sprechen Sie T\u00fcrkisch?\nB: Ja, T\u00fcrkisch ist meine Muttersprache.\nA: Und wie viele Sprachen sprechen Sie?\nB: Drei: T\u00fcrkisch, Deutsch und ein bisschen Englisch.",exampleEn:"A: Do you speak Turkish?\nB: Yes, Turkish is my native language.\nA: Wow, and how many languages do you speak?\nB: Three: Turkish, German, and a little English.",note:"T\u00fcrkisch = Turkish. die T\u00fcrkei = Turkey.\nMuttersprache = mother tongue / native language."},

  {type:"teach",kind:"word",nl:"Arabisch",en:"Arabic (language)",phonetic:"ah-RAH-bish",example:"A: Welche Sprachen sprechen Sie?\nB: Arabisch ist meine Muttersprache. Ich spreche auch Deutsch.\nA: Beeindruckend! Zwei Sprachen!",exampleEn:"A: Which languages do you speak?\nB: Arabic is my native language. I also speak German.\nA: Impressive! Two languages!",note:"Arabisch = Arabic. Arabien is the region.\nArabic is widely spoken among people with Middle Eastern heritage in Germany."},

  {type:"teach",kind:"phrase",nl:"Ich spreche... / Ich lerne...",en:"I speak... / I am learning...",phonetic:"ikh SHPREH-khuh / ikh LER-nuh",example:"A: Welche Sprachen sprechen Sie?\nB: Ich spreche Deutsch und Englisch. Ich lerne auch Franz\u00f6sisch.\nA: Das ist toll! Mehrsprachigkeit ist ein gro\u00dfes Plus.",exampleEn:"A: Which languages do you speak?\nB: I speak German and English. I am also learning French.\nA: That is great! Multilingualism is a big plus.",note:"sprechen = to speak (acquired skill).\nlernen = to learn.\nIch spreche kein Spanisch = I do not speak Spanish."},

  {type:"tip",title:"sprechen: A Strong Verb",text:"sprechen is a strong (irregular) verb. The stem vowel changes in the du and er/sie/es forms:\n\nich spreche\ndu sprichst (e \u2192 i)\ner/sie/es spricht (e \u2192 i)\nwir sprechen\nihr sprecht\nsie/Sie sprechen\n\nThis e\u2192i vowel shift appears in many German strong verbs.",deepDive:{title:"Strong vs Weak Verbs",text:"German verbs are divided into weak (regular) verbs that add endings only (-e, -st, -t, -en) and strong verbs that also change their stem vowel. The vowel change (Ablaut) is a very old Germanic feature, the same one that gives English 'speak/spoke', 'sing/sang', and 'run/ran'. German strong verbs preserved this pattern especially in the du and er/sie/es present tense forms."}},

  {type:"mc",q:"How do you say 'I speak German and English'?",opts:["Ich spreche Deutsch und Englisch","Ich lerne Deutsch und Englisch","Ich bin Deutsch und Englisch","Ich hei\u00dfe Deutsch und Englisch"],ans:"Ich spreche Deutsch und Englisch",hint:"Which verb means 'to speak'?"},

  {type:"mc",q:"The du-form of sprechen is:",opts:["sprechst","sprechen","sprichst","spr\u00e4chst"],ans:"sprichst",hint:"Strong verb: the vowel changes from e to i in the du form."},

  {type:"fb",s:"Welche Sprachen ___ du? Ich spreche Arabisch und Deutsch.",a:"sprichst",opts:["sprichst","sprechen","sprecht","sprichtet"],hint:"The du form of a strong verb with e\u2192i vowel shift."},

  {type:"match",pairs:[{nl:"Deutsch",en:"German"},{nl:"Franz\u00f6sisch",en:"French"},{nl:"Spanisch",en:"Spanish"},{nl:"T\u00fcrkisch",en:"Turkish"}]},

  {type:"mc",q:"'Ich lerne Chinesisch' means:",opts:["I speak Chinese","I am learning Chinese","I teach Chinese","I like Chinese"],ans:"I am learning Chinese",hint:"lernen = to learn, not to speak."},

  {type:"mc",q:"Which sentence is correct?",opts:["Ich sprechen Englisch","Ich spricht Englisch","Ich spreche Englisch","Ich sprichst Englisch"],ans:"Ich spreche Englisch",hint:"First-person singular of sprechen ends in -e."},


  {type:"mc",q:"How do you say 'Do you speak Turkish?' formally?",opts:["Sprechen Sie Türkisch?","Sprichst du Türkisch?","Sprecht ihr Türkisch?","Spricht er Türkisch?"],ans:"Sprechen Sie Türkisch?",hint:"Formal you = Sie. Which sprechen form goes with Sie?"},

  {type:"match",pairs:[{nl:"Englisch",en:"English"},{nl:"Arabisch",en:"Arabic"},{nl:"Ich lerne...",en:"I am learning..."},{nl:"Ich spreche...",en:"I speak..."}]},
  {type:"drag_fill",s:"A: {1} Sprachen sprechen Sie?\nB: Ich {2} Deutsch und Englisch. Ich {3} gerade Spanisch.",blanks:{"1":"Welche","2":"spreche","3":"lerne"},pool:["Welche","Wer","spreche","sprichst","lerne","lernt"],hint:"Question word for 'which', first-person sprechen, then first-person lernen."},
]},

// ═══ L6: Zahlen 0-20 ═══
{id:"deu2l6",title:"Zahlen 0-20",icon:"\ud83d\udd22",xp:15,board:true,steps:[
  {type:"intro",title:"Zahlen 0-20",desc:"Numbers are everywhere: ages, phone numbers, prices, addresses. In this lesson you master 0-20 in German, including the tricky teens from 13 to 19.",goals:["Count from 0 to 20","Spot the -zehn pattern in the teens","Use numbers in real sentences"]},

  {type:"teach",kind:"word",nl:"null, eins, zwei, drei",en:"zero, one, two, three",phonetic:"nool, ayns, tsvy, dry",cognate:{words:[{lang:"English",word:"null / one / two / three"}],family:"germanic"},example:"A: Was ist Ihre Handynummer?\nB: Null, eins, sieben, zwei, drei...\nA: Warten Sie, ich schreibe mit!",exampleEn:"A: What is your mobile number?\nB: Zero, one, seven, two, three...\nA: Wait, I am writing it down!",note:"eins = one when counting alone. ein = one before a noun.\nnull = zero (same as the English word null)."},

  {type:"teach",kind:"word",nl:"vier, f\u00fcnf, sechs",en:"four, five, six",phonetic:"feer, f\u00fcnf, zeks",cognate:{words:[{lang:"English",word:"four / five / six"}],family:"germanic"},example:"A: Wie viele Kinder haben Sie?\nB: Ich habe vier Kinder: zwei S\u00f6hne und zwei T\u00f6chter.\nA: Vier Kinder! Das ist wunderbar.",exampleEn:"A: How many children do you have?\nB: I have four children: two sons and two daughters.\nA: Four children! That is wonderful.",note:"vier is a cognate with English four. f\u00fcnf with five. sechs with six.\nThe German \u00fc in f\u00fcnf = a rounded front vowel."},

  {type:"teach",kind:"word",nl:"sieben, acht, neun, zehn",en:"seven, eight, nine, ten",phonetic:"ZEE-ben, akht, noyn, tsayn",cognate:{words:[{lang:"English",word:"seven / eight / nine / ten"}],family:"germanic"},example:"A: Wie sp\u00e4t ist es?\nB: Es ist neun Uhr zehn.\nA: Oh! Ich muss um acht Uhr beim Arzt sein.",exampleEn:"A: What time is it?\nB: It is nine ten.\nA: Oh! I have to be at the doctor's at eight o'clock.",note:"neun = nine, zehn = ten, acht = eight.\nAll strong Germanic cognates. zehn is the base for all teen numbers 13-19."},

  {type:"teach",kind:"word",nl:"elf, zw\u00f6lf",en:"eleven, twelve",phonetic:"elf, tsvoelf",cognate:{words:[{lang:"English",word:"eleven / twelve"}],family:"germanic"},example:"A: Wann kommt der Zug?\nB: Um elf Uhr zw\u00f6lf.\nA: Zw\u00f6lf Minuten Versp\u00e4tung? Typisch!",exampleEn:"A: When does the train come?\nB: At eleven twelve.\nA: Twelve minutes late? Typical!",note:"elf and zw\u00f6lf are unique forms, just like eleven and twelve in English.\nThey do not follow the -zehn teen pattern."},

  {type:"teach",kind:"word",nl:"dreizehn, vierzehn, f\u00fcnfzehn",en:"thirteen, fourteen, fifteen",phonetic:"DRY-tsayn, FEER-tsayn, F\u00dcNF-tsayn",example:"A: Wie alt ist deine Schwester?\nB: Sie ist dreizehn. Und dein Bruder?\nA: Er ist f\u00fcnfzehn.",exampleEn:"A: How old is your sister?\nB: She is thirteen. And your brother?\nA: He is fifteen.",note:"Pattern: number + zehn = -teen.\ndreizehn = drei + zehn. Just like English thirteen, fourteen, fifteen."},

  {type:"teach",kind:"word",nl:"sechzehn, siebzehn, achtzehn, neunzehn, zwanzig",en:"sixteen, seventeen, eighteen, nineteen, twenty",phonetic:"ZEKH-tsayn, ZEEP-tsayn, AKHT-tsayn, NOYN-tsayn, TSVAN-tsikh",example:"A: Wie alt bist du?\nB: Ich bin achtzehn. Und du?\nA: Ich bin zwanzig. Ich habe am Samstag Geburtstag.",exampleEn:"A: How old are you?\nB: I am eighteen. And you?\nA: I am twenty. My birthday is on Saturday.",note:"sechzehn drops one c: sechs \u2192 sech.\nsiebzehn drops -en: sieben \u2192 sieb.\nzwanzig = twenty, a new word."},

  {type:"tip",title:"The -zehn Teen Pattern",text:"German teens follow a clear rule:\n3 + zehn = dreizehn (13)\n4 + zehn = vierzehn (14)\n5 + zehn = f\u00fcnfzehn (15)\n6 + zehn = sechzehn (16): one letter dropped\n7 + zehn = siebzehn (17): shortened form\n8 + zehn = achtzehn (18)\n9 + zehn = neunzehn (19)\n\nJust like English -teen (three-teen = thirteen).",deepDive:{title:"Why do 16 and 17 have irregular shortenings?",text:"Sechzehn drops one 's' from sechs to avoid the awkward cluster *sechszehn. Siebzehn drops the '-en' from sieben for the same phonetic smoothing: *siebenzehn has one too many syllables. English went through similar smoothing: 'five-teen' became 'fifteen'. When similar sounds collide, languages tend to trim them down over generations."}},

  {type:"mc",q:"What is 13 in German?",opts:["dreizehn","dreizig","dreihin","dreissig"],ans:"dreizehn",hint:"drei (3) + zehn (10) = ?"},

  {type:"mc",q:"Which teen drops a letter compared to its base number?",opts:["dreizehn","vierzehn","sechzehn","neunzehn"],ans:"sechzehn",hint:"One teen is spelled differently from what you would expect. Which one?"},

  {type:"fb",s:"Meine Tochter ist ___ Jahre alt. (fifteen)",a:"f\u00fcnfzehn",opts:["f\u00fcnfzehn","f\u00fcnfzig","f\u00fcnfzehnten","f\u00fcnfmal"],hint:"5 + zehn = ? Complete the teen number."},

  {type:"match",pairs:[{nl:"acht",en:"eight"},{nl:"zw\u00f6lf",en:"twelve"},{nl:"neunzehn",en:"nineteen"},{nl:"zwanzig",en:"twenty"}]},

  {type:"mc",q:"How do you count 17, 18, 19 in German?",opts:["siebenzehn, achtzehn, neunzehn","siebzehn, achtzehn, neunzehn","siebzehn, achzehn, neunzehn","siebzehn, achtzehn, neunzig"],ans:"siebzehn, achtzehn, neunzehn",hint:"17 = shortened sieb+zehn. 18 = acht+zehn. 19 = neun+zehn."},

  {type:"mc",q:"'Ich bin zwanzig Jahre alt' means:",opts:["I am twelve years old","I am twenty years old","I am two years old","I am two hundred years old"],ans:"I am twenty years old",hint:"zwanzig = twenty. Jahre alt = years old."},


  {type:"mc",q:"Which number is spelled correctly?",opts:["siebenzehn","siebzehn","sibenzehn","siebenzehn"],ans:"siebzehn",hint:"17 uses the shortened form of sieben. One letter group is dropped."},

  {type:"fb",s:"Es ist ___ Uhr. (It is twelve o'clock.)",a:"zwölf",opts:["zwölf","elf","zehn","zwan"],hint:"The word for twelve in German."},

  {type:"match",pairs:[{nl:"sieben",en:"seven"},{nl:"dreizehn",en:"thirteen"},{nl:"fünfzehn",en:"fifteen"},{nl:"achtzehn",en:"eighteen"}]},
  {type:"drag_fill",s:"Meine Telefonnummer ist {1}-{2}-{3}.",blanks:{"1":"null","2":"achtzehn","3":"zwanzig"},pool:["null","eins","achtzehn","elf","zwanzig","dreizehn"],hint:"Zero, then eighteen, then twenty. Fill in the spelled-out numbers."},
]},

// ═══ L7: Wie alt bist du? ═══
{id:"deu2l7",title:"Wie alt bist du?",icon:"\ud83c\udf82",xp:20,board:true,steps:[
  {type:"intro",title:"Wie alt bist du?",desc:"Personal questions are the backbone of small talk. Learn how to ask and answer questions about age, where you live, and your phone number.",goals:["Ask and state your age","Say where you live","Give and ask for a phone number"]},

  {type:"teach",kind:"phrase",nl:"Wie alt bist du?",en:"How old are you? (informal)",phonetic:"vee alt bist doo",example:"A: Wie alt bist du?\nB: Ich bin zweiundzwanzig. Und du?\nA: Ich bin zwanzig.",exampleEn:"A: How old are you?\nB: I am twenty-two. And you?\nA: I am twenty.",note:"Wie alt = how old. bist = are (du form of sein).\nFormal version: Wie alt sind Sie?"},

  {type:"teach",kind:"phrase",nl:"Ich bin ... Jahre alt.",en:"I am ... years old.",phonetic:"ikh bin ... YAH-ruh alt",example:"A: Wie alt ist Ihre Mutter?\nB: Sie ist achtundf\u00fcnfzig Jahre alt.\nA: Und Ihr Vater?\nB: Er ist zweiundneunzig.",exampleEn:"A: How old is your mother?\nB: She is fifty-eight years old.\nA: And your father?\nB: He is ninety-two.",note:"Jahre alt = years old. Jahre = plural of Jahr (year).\nAlt = old. After sein, no ending change on the adjective."},

  {type:"teach",kind:"phrase",nl:"Wo wohnst du?",en:"Where do you live? (informal)",phonetic:"voh vohnst doo",example:"A: Wo wohnst du zurzeit?\nB: Ich wohne in Berlin, in Mitte.\nA: Sch\u00f6n! Und wie lange schon?\nB: Seit zwei Jahren.",exampleEn:"A: Where do you live at the moment?\nB: I live in Berlin, in Mitte.\nA: Nice! And for how long?\nB: For two years.",note:"wohnen = to live/reside (habitual).\nIch wohne in... = I live in...\nNo article needed before city names."},

  {type:"teach",kind:"phrase",nl:"Ich wohne in...",en:"I live in...",phonetic:"ikh VOH-nuh in",example:"A: Kommen Sie aus M\u00fcnchen?\nB: Nein, ich komme aus Stuttgart, aber ich wohne jetzt in M\u00fcnchen.\nA: Und wie gef\u00e4llt Ihnen M\u00fcnchen?\nB: Sehr gut! Ich liebe diese Stadt.",exampleEn:"A: Are you from Munich?\nB: No, I am from Stuttgart, but I now live in Munich.\nA: And how do you like Munich?\nB: Very much! I love this city.",note:"wohnen = to live somewhere (habitual residence).\nDifferent from bleiben (to stay temporarily)."},

  {type:"teach",kind:"phrase",nl:"Was ist deine Telefonnummer?",en:"What is your phone number? (informal)",phonetic:"vas ist DY-nuh teh-leh-FON-noom-er",example:"A: Darf ich deine Nummer haben?\nB: Klar! Meine Nummer ist null, eins, f\u00fcnf...\nA: Warte mal, ich speichere sie.",exampleEn:"A: May I have your number?\nB: Sure! My number is zero, one, five...\nA: Hang on, I am saving it.",note:"Telefonnummer = phone number.\ndeine = your (informal). Ihre = your (formal).\nNumbers are read digit by digit in German."},

  {type:"teach",kind:"phrase",nl:"Ich bin verheiratet / ledig.",en:"I am married / single.",phonetic:"ikh bin fer-HY-ra-tet / LAY-dish",example:"A: Sind Sie verheiratet?\nB: Ja, ich bin seit zehn Jahren verheiratet. Wir haben zwei Kinder.\nA: Wie sch\u00f6n!\nB: Danke!",exampleEn:"A: Are you married?\nB: Yes, I have been married for ten years. We have two children.\nA: How lovely!\nB: Thank you!",note:"verheiratet = married. ledig = single (unmarried).\ngeschieden = divorced. verwitwet = widowed."},

  {type:"teach",kind:"phrase",nl:"Haben Sie Kinder?",en:"Do you have children? (formal)",phonetic:"HAH-ben zee KIN-der",example:"A: Haben Sie Kinder?\nB: Ja, ich habe zwei Kinder: einen Sohn und eine Tochter.\nA: Wie alt sind sie?\nB: Mein Sohn ist sieben, meine Tochter ist vier.",exampleEn:"A: Do you have children?\nB: Yes, I have two children: a son and a daughter.\nA: How old are they?\nB: My son is seven, my daughter is four.",note:"haben = to have. Kinder = children (plural of Kind).\nSohn = son. Tochter = daughter."},

  {type:"tip",title:"Compound Numbers Above 20",text:"German numbers above 20 are built units-first:\n\n21 = einundzwanzig (one and twenty)\n22 = zweiundzwanzig (two and twenty)\n35 = f\u00fcnfunddreizig (five and thirty)\n47 = siebenundvierzig (seven and forty)\n\nPattern: units + und + tens.\nAll written as one word.",deepDive:{title:"Why does German say 'one-and-twenty' instead of 'twenty-one'?",text:"Old English used the same structure: 'one and twenty' appears in Shakespeare and older texts. Most Germanic languages historically put the smaller number first. Modern English dropped this pattern, but German kept it strictly. This means that when hearing a spoken German number above 20, you hear the units digit BEFORE the tens digit, which requires mentally reordering. With practice this becomes automatic."}},

  {type:"mc",q:"How do you ask someone's age informally?",opts:["Wie alt sind Sie?","Wie alt bist du?","Wie alt ist er?","Wie alt seid ihr?"],ans:"Wie alt bist du?",hint:"Informal singular 'you' uses the du/bist form."},

  {type:"mc",q:"'Ich wohne in K\u00f6ln' means:",opts:["I come from Cologne","I live in Cologne","I am in Cologne right now","I was in Cologne"],ans:"I live in Cologne",hint:"wohnen = habitual residence, not a one-time visit."},

  {type:"fb",s:"___ alt bist du? Ich bin neunzehn Jahre alt.",a:"Wie",opts:["Wie","Was","Wer","Wo"],hint:"The German question word for 'how' when asking about qualities or age."},

  {type:"mc",q:"21 in German is:",opts:["zwanzigein","einzwanzig","einundzwanzig","zwanzigeins"],ans:"einundzwanzig",hint:"German puts units first: ein(s) + und + zwanzig."},

  {type:"match",pairs:[{nl:"Wo wohnst du?",en:"Where do you live?"},{nl:"Ich bin ledig.",en:"I am single."},{nl:"Haben Sie Kinder?",en:"Do you have children?"},{nl:"Jahre alt",en:"years old"}]},

  {type:"mc",q:"'Meine Nummer ist...' is used when:",opts:["Asking for someone's address","Giving your own phone number","Asking how old someone is","Saying where you are from"],ans:"Giving your own phone number",hint:"meine = my. Nummer = number. Whose information are you sharing?"},

  {type:"mc",q:"Which question is in the formal register?",opts:["Wie alt bist du?","Wo wohnst du?","Haben Sie Kinder?","Was machst du?"],ans:"Haben Sie Kinder?",hint:"Look for the formal Sie form."},


  {type:"mc",q:"How do you say 'We are twenty-five years old'?",opts:["Wir sind fünfundzwanzig Jahre alt","Wir sind zwanzigfünf Jahre alt","Wir haben fünfundzwanzig Jahre","Wir sind fünfundzwanzig alt"],ans:"Wir sind fünfundzwanzig Jahre alt",hint:"Units-first compound + Jahre alt with the correct sein form for wir."},
  {type:"drag_fill",s:"A: {1} alt sind Sie?\nB: Ich bin {2} Jahre alt. Ich {3} in Hamburg.",blanks:{"1":"Wie","2":"siebenunddreizig","3":"wohne"},pool:["Wie","Was","siebenunddreizig","drei\u00dfig","wohne","wohnt"],hint:"Question word for age, the number 37, then first-person 'to live'."},
]},

// ═══ L8: Steckbrief ═══
{id:"deu2l8",title:"Steckbrief",icon:"\ud83c\udf1f",xp:25,board:true,steps:[
  {type:"intro",title:"Steckbrief",desc:"Steckbrief means personal profile. In this final lesson you put everything from Unit 2 together: name, age, origin, language, and profession. This is real German conversation.",goals:["Give a complete self-introduction","Understand someone else's introduction","Combine all Unit 2 vocabulary fluently"]},

  {type:"teach",kind:"phrase",nl:"Ich m\u00f6chte mich vorstellen.",en:"I would like to introduce myself.",phonetic:"ikh MOEKH-tuh mikh FOR-shtel-uhn",example:"A: Darf ich mich vorstellen? Mein Name ist Julia Becker.\nB: Sehr erfreut, Frau Becker. Ich bin Klaus Hartmann.\nA: Freut mich, Herr Hartmann!",exampleEn:"A: May I introduce myself? My name is Julia Becker.\nB: Very pleased to meet you, Ms. Becker. I am Klaus Hartmann.\nA: Nice to meet you, Mr. Hartmann!",note:"m\u00f6chte = would like (polite form).\nsich vorstellen = to introduce oneself. Formal and polished."},

  {type:"teach",kind:"phrase",nl:"Ich bin ... von Beruf.",en:"I am a ... by profession.",phonetic:"ikh bin ... fon buh-ROOF",example:"A: Was machen Sie beruflich?\nB: Ich bin \u00c4rztin von Beruf. Ich arbeite in einem Krankenhaus.\nA: Das ist ein sehr wichtiger Beruf.",exampleEn:"A: What do you do for work?\nB: I am a doctor by profession. I work in a hospital.\nA: That is a very important profession.",note:"von Beruf = by profession.\nAdds emphasis and formality to a job introduction.\nKrankenhaus = hospital."},

  {type:"teach",kind:"phrase",nl:"Ich spreche ... flie\u00dfend.",en:"I speak ... fluently.",phonetic:"ikh SHPREH-khuh ... FLEE-zent",example:"A: Wie gut sprechen Sie Englisch?\nB: Ich spreche Englisch flie\u00dfend und Franz\u00f6sisch auf mittlerem Niveau.\nA: Beeindruckend! Ich spreche nur Deutsch.",exampleEn:"A: How well do you speak English?\nB: I speak English fluently and French at an intermediate level.\nA: Impressive! I only speak German.",note:"flie\u00dfend = fluently.\nein bisschen = a little.\nauf mittlerem Niveau = at intermediate level."},

  {type:"teach",kind:"phrase",nl:"Ich bin seit ... in Deutschland.",en:"I have been in Germany for ...",phonetic:"ikh bin zyt ... in DOYCH-lant",example:"A: Wie lange sind Sie schon in Deutschland?\nB: Ich bin seit drei Jahren hier. Ich komme aus der T\u00fcrkei.\nA: Ihr Deutsch ist ausgezeichnet!",exampleEn:"A: How long have you been in Germany?\nB: I have been here for three years. I am from Turkey.\nA: Your German is excellent!",note:"seit + time period = for (a duration up to now).\nGerman uses present tense here where English uses present perfect."},

  {type:"tip",title:"A Complete German Self-Introduction",text:"A full Steckbrief uses five building blocks:\n\n1. Name: Ich hei\u00dfe... / Mein Name ist...\n2. Origin: Ich komme aus...\n3. Residence: Ich wohne in...\n4. Profession: Ich bin... (von Beruf)\n5. Languages: Ich spreche...\n\nOptional: Ich bin ... Jahre alt. / Ich bin verheiratet / ledig.",deepDive:{title:"First impressions in German culture",text:"Germans tend to be more reserved in small talk than English speakers, but introductions follow clear social scripts. In formal contexts, people shake hands and use full names. Academic and professional titles (Dr., Prof.) are important and should be used. In informal settings, Hallo + first name + handshake is standard. First names are only used after explicitly switching to the du form, which requires one party to suggest it."}},

  {type:"mc",q:"Which of these is NOT part of a standard German self-introduction?",opts:["Ich hei\u00dfe...","Ich komme aus...","Ich esse gern Pizza","Ich bin ... von Beruf"],ans:"Ich esse gern Pizza",hint:"Three are classic introduction elements. One is a food preference, not an introduction."},

  {type:"mc",q:"'Ich bin seit zwei Jahren in Berlin' means:",opts:["I was in Berlin two years ago","I will be in Berlin in two years","I have been in Berlin for two years","I am going to Berlin in two years"],ans:"I have been in Berlin for two years",hint:"seit + present tense in German = duration up to now."},

  {type:"fb",s:"Ich spreche Deutsch und Englisch ___. (fluently)",a:"flie\u00dfend",opts:["flie\u00dfend","schnell","gut","laut"],hint:"The adverb meaning 'fluently' in German."},

  {type:"mc",q:"You hear: 'Ich bin Programmierer von Beruf, ich komme aus Spanien und ich wohne seit einem Jahr in Berlin.' This person:",opts:["Is a teacher from France","Is a programmer from Spain living in Berlin","Is an engineer from Spain visiting Berlin","Is a student from Germany working in Spain"],ans:"Is a programmer from Spain living in Berlin",hint:"Beruf = profession, Spanien = origin, wohnen + seit = residence duration."},

  {type:"match",pairs:[{nl:"sich vorstellen",en:"to introduce oneself"},{nl:"flie\u00dfend",en:"fluently"},{nl:"von Beruf",en:"by profession"},{nl:"seit",en:"for (duration up to now)"}]},

  {type:"mc",q:"How do you formally say 'I would like to introduce myself'?",opts:["Ich will vorstellen","Ich m\u00f6chte mich vorstellen","Ich kann vorstellen","Ich muss vorstellen"],ans:"Ich m\u00f6chte mich vorstellen",hint:"The polite modal for 'would like' + the reflexive pronoun."},

  {type:"mc",q:"Which sentence is a correct formal introduction?",opts:["Ich bin Student, ich komme aus England und ich wohnt in M\u00fcnchen","Mein Name ist Paul Weber. Ich bin Ingenieur von Beruf und komme aus der Schweiz","Ich hei\u00dfe Stefan, ich sind Student, ich kommen aus Berlin","Meine Name ist Anna, ich bin aus Berlin"],ans:"Mein Name ist Paul Weber. Ich bin Ingenieur von Beruf und komme aus der Schweiz",hint:"Check every verb form. Only one sentence has all forms correct."},


  {type:"mc",q:"Which element is missing from: 'Ich heiße Max. Ich komme aus England. Ich bin Journalist.'",opts:["Age","Where he lives","His native language","Nothing, it is complete"],ans:"Where he lives",hint:"A full Steckbrief has five parts: name, origin, residence, profession, languages. Which is missing?"},

  {type:"fb",s:"Guten Tag! Mein Name ist Sabine. Ich ___ aus der Schweiz.",a:"komme",opts:["komme","bin","heiße","wohne"],hint:"The verb for 'come from' in the first-person singular."},

  {type:"match",pairs:[{nl:"Ich möchte mich vorstellen.",en:"I would like to introduce myself."},{nl:"von Beruf",en:"by profession"},{nl:"Ich bin seit...",en:"I have been... for"},{nl:"Ich spreche fließend.",en:"I speak fluently."}]},
  {type:"drag_fill",s:"Guten Tag! {1} Name ist Sandra Bauer. Ich {2} aus Deutschland und ich {3} in Wien. Ich {4} Journalistin von Beruf.",blanks:{"1":"Mein","2":"komme","3":"wohne","4":"bin"},pool:["Mein","Dein","komme","kommen","wohne","wohnt","bin","bist"],hint:"Possessive for 'my', then three first-person verbs: kommen, wohnen, sein."},

  {type:"mc",q:"Someone says: 'Ich hei\u00dfe Yuki. Ich komme aus Japan und ich bin seit einem Jahr in Deutschland.' What is true?",opts:["Yuki speaks German fluently","Yuki is from Germany and learning Japanese","Yuki is from Japan and has been in Germany for one year","Yuki lives in Japan and visits Germany sometimes"],ans:"Yuki is from Japan and has been in Germany for one year",hint:"Ich komme aus = origin. seit einem Jahr = for one year."},
]},

]},

// ══════════════════════════════════════════════════════════════════════════
// UNIT 3: Meine Familie — Family & Possessives
// ══════════════════════════════════════════════════════════════════════════
{n:3,lang:"de",track:"v1",title:"Meine Familie",sub:"Family & Possessives",icon:"👨‍👩‍👧‍👦",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: die Familie ═══
{id:"deu3l1",title:"die Familie",icon:"👨‍👩‍👧",xp:15,board:true,steps:[
  {type:"intro",title:"die Familie",desc:"Every German learner needs family vocabulary early. Learn the six core family words and start describing the people closest to you.",goals:["Core family: mother, father, sister, brother","die Eltern (parents)","das Kind (child)","Say 'Das ist meine...'"]},

  {type:"teach",kind:"word",nl:"die Mutter",en:"the mother",phonetic:"dee MOO-ter",cognate:{words:[{lang:"English",word:"mother"},{lang:"Dutch",word:"de moeder"}],family:"germanic"},example:"A: Ist das deine Mutter?\nB: Ja, das ist meine Mutter. Sie heißt Petra.\nA: Sie sieht sehr nett aus!",exampleEn:"A: Is that your mother?\nB: Yes, that is my mother. Her name is Petra.\nA: She looks very nice!",note:"die Mutter = the mother.\nPlural: die Mütter (with umlaut)."},

  {type:"teach",kind:"word",nl:"der Vater",en:"the father",phonetic:"dehr FAH-ter",cognate:{words:[{lang:"English",word:"father"},{lang:"Dutch",word:"de vader"}],family:"germanic"},example:"A: Wie alt ist dein Vater?\nB: Mein Vater ist 52 Jahre alt.\nA: Oh, er ist noch jung!",exampleEn:"A: How old is your father?\nB: My father is 52 years old.\nA: Oh, he is still young!",note:"der Vater = the father.\nPlural: die Väter (with umlaut)."},

  {type:"teach",kind:"word",nl:"die Schwester",en:"the sister",phonetic:"dee SHVES-ter",cognate:{words:[{lang:"English",word:"sister"},{lang:"Dutch",word:"de zuster"}],family:"germanic"},example:"A: Hast du eine Schwester?\nB: Ja, ich habe eine Schwester. Sie ist 19 Jahre alt.\nA: Ist sie älter oder jünger?",exampleEn:"A: Do you have a sister?\nB: Yes, I have a sister. She is 19 years old.\nA: Is she older or younger?",note:"die Schwester = the sister.\nPlural: die Schwestern."},

  {type:"teach",kind:"word",nl:"der Bruder",en:"the brother",phonetic:"dehr BROO-der",cognate:{words:[{lang:"English",word:"brother"},{lang:"Dutch",word:"de broer"}],family:"germanic"},example:"A: Das ist mein Bruder Tom.\nB: Hallo Tom! Wie alt bist du?\nA: Ich bin 16 Jahre alt.",exampleEn:"A: This is my brother Tom.\nB: Hello Tom! How old are you?\nA: I am 16 years old.",note:"der Bruder = the brother.\nPlural: die Brüder (with umlaut)."},

  {type:"teach",kind:"word",nl:"das Kind",en:"the child",phonetic:"dahs kint",cognate:{words:[{lang:"English",word:"kindergarten (child garden)"},{lang:"Dutch",word:"het kind"}],family:"germanic"},example:"A: Haben Sie Kinder?\nB: Ja, ich habe zwei Kinder.\nA: Wie alt sind sie?",exampleEn:"A: Do you have children?\nB: Yes, I have two children.\nA: How old are they?",note:"das Kind = the child.\nPlural: die Kinder. Common in: Kindergarten."},

  {type:"teach",kind:"word",nl:"die Eltern",en:"the parents",phonetic:"dee EL-tern",cognate:{words:[{lang:"English",word:"elders (related root)"},{lang:"Dutch",word:"de ouders"}],family:"germanic"},example:"A: Wo wohnen deine Eltern?\nB: Meine Eltern wohnen in München.\nA: Das ist weit!",exampleEn:"A: Where do your parents live?\nB: My parents live in Munich.\nA: That is far away!",note:"die Eltern = the parents. Always plural.\nSingular: der Elternteil (parent, rarely used)."},

  {type:"tip",title:"Article Colors: der, die, das",text:"Every German noun has a grammatical gender.\nThe article shows the gender:\n\nder Vater, der Bruder (masculine, blue)\ndie Mutter, die Schwester (feminine, coral)\ndas Kind (neuter, gold)\ndie Eltern (always plural)\n\nLearn the article WITH each noun from day one. They are inseparable.",deepDive:{title:"Why does German have grammatical gender?",text:"German inherited grammatical gender from Proto-Germanic and Proto-Indo-European. Unlike English which dropped most gender markers, German kept all three.\n\nGender does not always follow logic. das Mädchen (girl) is neuter because -chen is a neuter diminutive ending. der Tisch (table) is masculine. There is no universal rule, so every noun must be learned with its article.\n\nTip: Many nouns ending in -er are masculine (der Bruder, der Vater). Many nouns ending in -ung, -keit, or -heit are feminine. Nouns ending in -chen or -lein are neuter. These patterns help but have exceptions."}},

  {type:"mc",q:"Which article goes with 'Vater'?",opts:["die","das","der","den"],ans:"der",hint:"Father is masculine in German."},

  {type:"mc",q:"Which article goes with 'Mutter'?",opts:["der","das","die","dem"],ans:"die",hint:"Mother is feminine in German."},

  {type:"mc",q:"Which article goes with 'Kind'?",opts:["der","die","das","dem"],ans:"das",hint:"Child is neuter in German. -chen/-lein endings are often neuter."},

  {type:"fb",s:"Das ist ___ Schwester. Sie heißt Anna.",a:"die",opts:["die","der","das","den"],hint:"Schwester is feminine."},

  {type:"match",pairs:[{nl:"die Mutter",en:"the mother"},{nl:"der Vater",en:"the father"},{nl:"die Schwester",en:"the sister"},{nl:"der Bruder",en:"the brother"}]},

  {type:"mc",q:"'die Eltern' in German is always:",opts:["Singular","Masculine","Plural","Neuter"],ans:"Plural",hint:"No singular form exists for Eltern in everyday German."},

  {type:"fb",s:"Ich habe einen Bruder und eine ___.",a:"Schwester",opts:["Schwester","Mutter","Vater","Kind"],hint:"The female sibling."},

  {type:"mc",q:"The word 'Kind' appears in which famous English word?",opts:["kind (nice)","king","kindergarten","kindle"],ans:"kindergarten",hint:"Kind = child. Garten = garden."},

  {type:"match",pairs:[{nl:"das Kind",en:"the child"},{nl:"die Eltern",en:"the parents"},{nl:"der Bruder",en:"the brother"},{nl:"die Schwester",en:"the sister"}]},

  {type:"mc",q:"You point to a photo and say 'Das ist mein ___.' The person is your father.",opts:["Schwester","Mutter","Vater","Kind"],ans:"Vater",hint:"The male parent."},

  {type:"mc",q:"Which noun takes the article 'die' because it ends in a typical feminine pattern?",opts:["der Bruder","das Kind","die Schwester","der Vater"],ans:"die Schwester",hint:"-er nouns that are female family members often take die."},
]},

// ═══ L2: Großeltern & mehr ═══
{id:"deu3l2",title:"Großeltern & mehr",icon:"👴👵",xp:15,board:true,steps:[
  {type:"intro",title:"Großeltern & mehr",desc:"Expand your family vocabulary with grandparents, aunts, uncles, and cousins. These words let you describe a full family tree in German.",goals:["Grandparents: Oma, Opa","Extended family: Tante, Onkel","Cousins: Cousin, Cousine","Ich habe... with family members"]},

  {type:"teach",kind:"word",nl:"die Oma",en:"grandma",phonetic:"dee OH-mah",cognate:{words:[{lang:"English",word:"grandma (informal)"},{lang:"Dutch",word:"de oma"}],family:"germanic"},example:"A: Besucht ihr dieses Wochenende die Oma?\nB: Ja, meine Oma macht Kuchen für uns.\nA: Oh, das klingt lecker!",exampleEn:"A: Are you visiting grandma this weekend?\nB: Yes, my grandma is making cake for us.\nA: Oh, that sounds delicious!",note:"die Oma = grandma (informal, very common).\nFormal: die Großmutter. Both are widely used."},

  {type:"teach",kind:"word",nl:"der Opa",en:"grandpa",phonetic:"dehr OH-pah",cognate:{words:[{lang:"English",word:"grandpa (informal)"},{lang:"Dutch",word:"de opa"}],family:"germanic"},example:"A: Hat dein Opa ein Auto?\nB: Nein, mein Opa fährt Fahrrad.\nA: Das ist toll!",exampleEn:"A: Does your grandpa have a car?\nB: No, my grandpa rides a bicycle.\nA: That is great!",note:"der Opa = grandpa (informal, very common).\nFormal: der Großvater."},

  {type:"teach",kind:"word",nl:"die Großmutter",en:"the grandmother",phonetic:"dee GROHS-moo-ter",example:"A: Wie alt ist deine Großmutter?\nB: Meine Großmutter ist 78 Jahre alt.\nA: Sie ist wirklich jung geblieben!",exampleEn:"A: How old is your grandmother?\nB: My grandmother is 78 years old.\nA: She has stayed really young!",note:"die Großmutter = the grandmother (formal).\nGroß = big/great. Mutter = mother.\nComp: Großvater (grandfather), Großeltern (grandparents)."},

  {type:"teach",kind:"word",nl:"der Großvater",en:"the grandfather",phonetic:"dehr GROHS-fah-ter",example:"A: Mein Großvater war Arzt.\nB: Wirklich? Wie interessant!\nA: Ja, er hat 40 Jahre lang gearbeitet.",exampleEn:"A: My grandfather was a doctor.\nB: Really? How interesting!\nA: Yes, he worked for 40 years.",note:"der Großvater = the grandfather (formal).\nGroß + Vater. Note: Großvater vs Opa both work."},

  {type:"teach",kind:"word",nl:"die Tante",en:"the aunt",phonetic:"dee TAN-teh",cognate:{words:[{lang:"English",word:"auntie (informal)"},{lang:"Dutch",word:"de tante"}],family:"germanic"},example:"A: Das ist meine Tante Maria.\nB: Hallo, Tante Maria! Schön, Sie kennenzulernen.\nA: Dich auch!",exampleEn:"A: This is my aunt Maria.\nB: Hello, Aunt Maria! Nice to meet you.\nA: You too!",note:"die Tante = the aunt.\nPlural: die Tanten."},

  {type:"teach",kind:"word",nl:"der Onkel",en:"the uncle",phonetic:"dehr ONG-kel",cognate:{words:[{lang:"English",word:"uncle"},{lang:"Dutch",word:"de oom"}],family:"germanic"},example:"A: Mein Onkel wohnt in Berlin.\nB: Cool! Besuchst du ihn oft?\nA: Ja, jeden Sommer.",exampleEn:"A: My uncle lives in Berlin.\nB: Cool! Do you visit him often?\nA: Yes, every summer.",note:"der Onkel = the uncle.\nPlural: die Onkel (no change)."},

  {type:"teach",kind:"word",nl:"die Cousine",en:"the cousin (female)",phonetic:"dee koo-ZEE-neh",example:"A: Hast du Cousinen?\nB: Ja, ich habe drei Cousinen.\nA: Seid ihr befreundet?",exampleEn:"A: Do you have female cousins?\nB: Yes, I have three female cousins.\nA: Are you friends?",note:"die Cousine = female cousin.\nFrom French: cousin(e). Pronounced with French influence.\nMale cousin: der Cousin."},

  {type:"teach",kind:"word",nl:"der Cousin",en:"the cousin (male)",phonetic:"dehr koo-ZAN",example:"A: Das ist mein Cousin Felix.\nB: Hallo Felix! Spielst du Fußball?\nA: Ja, jedes Wochenende!",exampleEn:"A: This is my cousin Felix.\nB: Hello Felix! Do you play football?\nA: Yes, every weekend!",note:"der Cousin = male cousin.\nNote the French-style pronunciation: koo-ZAN.\nBoth Cousin and Cousine come from French."},

  {type:"tip",title:"Großeltern: German Compound Words",text:"German builds new words by joining existing words:\n\nGroß + Mutter = Großmutter (grandmother)\nGroß + Vater = Großvater (grandfather)\nGroß + Eltern = Großeltern (grandparents)\n\nThe first word modifies the second.\nGroß here means 'great' (as in great-parent).\n\nThis compounding is a core German superpower. You will see it everywhere.",deepDive:{title:"Oma/Opa vs Großmutter/Großvater",text:"In daily life, most Germans say Oma and Opa rather than Großmutter and Großvater. The formal versions appear in writing, official contexts, and obituaries.\n\nSimilarly, Mutti (mummy) and Vati (daddy) are very common affectionate forms. Regional variations exist: in Bavaria and Austria you hear Mama and Papa universally even into adulthood.\n\nFor learners: use Oma, Opa, Mutti, Vati in conversation. Switch to the formal forms in writing."}},

  {type:"mc",q:"What is the formal German word for grandmother?",opts:["die Oma","die Tante","die Großmutter","die Cousine"],ans:"die Großmutter",hint:"Groß + Mutter. The big/great mother."},

  {type:"mc",q:"'die Tante' means:",opts:["the grandmother","the aunt","the cousin (female)","the sister"],ans:"the aunt",hint:"Your parent's sister."},

  {type:"fb",s:"Mein ___ wohnt in Hamburg. Er ist der Bruder meiner Mutter.",a:"Onkel",opts:["Onkel","Tante","Cousin","Opa"],hint:"The brother of your mother is your..."},

  {type:"match",pairs:[{nl:"die Oma",en:"grandma"},{nl:"der Opa",en:"grandpa"},{nl:"die Tante",en:"the aunt"},{nl:"der Onkel",en:"the uncle"}]},

  {type:"mc",q:"'der Cousin' in German is pronounced:",opts:["KOH-sin","koo-ZAN","KOO-sin","koh-ZAHN"],ans:"koo-ZAN",hint:"French origin: the u sounds like oo, stress on the last syllable."},

  {type:"fb",s:"Das ist meine ___. Sie ist die Tochter meiner Tante.",a:"Cousine",opts:["Cousine","Tante","Schwester","Oma"],hint:"The female child of your aunt or uncle."},

  {type:"match",pairs:[{nl:"der Großvater",en:"the grandfather"},{nl:"die Großmutter",en:"the grandmother"},{nl:"der Cousin",en:"the cousin (male)"},{nl:"die Cousine",en:"the cousin (female)"}]},

  {type:"mc",q:"Which noun is ALWAYS plural in German?",opts:["die Oma","die Tante","die Eltern","die Cousine"],ans:"die Eltern",hint:"You learned this in the last lesson. No singular form."},

  {type:"mc",q:"German builds 'Großmutter' by joining two words. Which two?",opts:["groß + Mama","Groß + Mutter","Grand + Mutter","Groß + Oma"],ans:"Groß + Mutter",hint:"Groß = great/big. Mutter = mother."},

  {type:"mc",q:"You want to say 'my uncle' in German. You say:",opts:["meine Onkel","meinen Onkel","mein Onkel","meiner Onkel"],ans:"mein Onkel",hint:"Onkel is masculine. Masculine possessive in nominative: mein."},
]},

// ═══ L3: haben: I have ═══
{id:"deu3l3",title:"haben: I have",icon:"🤲",xp:15,board:true,steps:[
  {type:"intro",title:"haben: I have",desc:"'haben' (to have) is one of the two most important verbs in German. You will use it to describe what you have, as an auxiliary verb, and to talk about your family.",goals:["haben conjugation: all persons","Say Ich habe / Du hast / Er hat","Use haben with family members","Auxiliary use preview"]},

  {type:"teach",kind:"phrase",nl:"ich habe",en:"I have",phonetic:"ikh HAH-beh",example:"A: Ich habe eine Schwester.\nB: Wirklich? Ich habe zwei Brüder.\nA: Eine große Familie!",exampleEn:"A: I have a sister.\nB: Really? I have two brothers.\nA: A big family!",note:"ich habe = I have.\nBase verb: haben. Drop -en, add: habe."},

  {type:"teach",kind:"phrase",nl:"du hast",en:"you have (informal)",phonetic:"doo hahst",example:"A: Hast du Geschwister?\nB: Ja, ich habe einen Bruder.\nA: Du hast Glück!",exampleEn:"A: Do you have siblings?\nB: Yes, I have a brother.\nA: You are lucky!",note:"du hast = you have (informal).\nNote the irregular stem: hab- becomes has-."},

  {type:"teach",kind:"phrase",nl:"er/sie hat",en:"he/she has",phonetic:"ehr/zee haht",example:"A: Hat Lisa einen Hund?\nB: Ja, sie hat einen kleinen Hund.\nA: Wie süß!",exampleEn:"A: Does Lisa have a dog?\nB: Yes, she has a small dog.\nA: How cute!",note:"er hat = he has. sie hat = she has.\nSame form for both. Stem: hat (irregular)."},

  {type:"verb_table",title:"haben: to have",label:"Present tense conjugation",groups:[
    {label:"Singular",rows:[
      {pronoun:"ich",form:"habe",note:"I have"},
      {pronoun:"du",form:"hast",note:"you have (informal)"},
      {pronoun:"er/sie/es",form:"hat",note:"he/she/it has"}
    ]},
    {label:"Plural",rows:[
      {pronoun:"wir",form:"haben",note:"we have"},
      {pronoun:"ihr",form:"habt",note:"you all have (informal)"},
      {pronoun:"sie/Sie",form:"haben",note:"they/you (formal) have"}
    ]}
  ],note:"haben is irregular in du (hast) and er/sie/es (hat). The plural forms are regular except ihr habt.",deepDive:{title:"haben vs sein as auxiliary verbs",text:"In German, both haben and sein are used as auxiliary (helper) verbs to form the past tense (Perfekt).\n\nIch habe gegessen = I have eaten (haben + past participle)\nIch bin gegangen = I have gone (sein + past participle)\n\nVerbs of motion and change-of-state typically use sein. Other verbs typically use haben. You will learn this fully in Unit 9. For now, master the present tense forms."}},

  {type:"teach",kind:"phrase",nl:"wir haben",en:"we have",phonetic:"veer HAH-ben",example:"A: Wir haben zwei Katzen zu Hause.\nB: Wie schön! Sind sie jung?\nA: Ja, sie sind noch klein.",exampleEn:"A: We have two cats at home.\nB: How lovely! Are they young?\nA: Yes, they are still small.",note:"wir haben = we have.\nSame form as the infinitive: haben."},

  {type:"teach",kind:"phrase",nl:"ihr habt",en:"you all have",phonetic:"eer hahbt",example:"A: Habt ihr ein Auto?\nB: Ja, wir haben einen alten Volkswagen.\nA: Das ist praktisch!",exampleEn:"A: Do you all have a car?\nB: Yes, we have an old Volkswagen.\nA: That is practical!",note:"ihr habt = you all have (plural informal).\nFor groups of friends, family, etc."},

  {type:"teach",kind:"phrase",nl:"sie/Sie haben",en:"they/you (formal) have",phonetic:"zee HAH-ben",example:"A: Haben Sie Kinder?\nB: Ja, wir haben drei Kinder.\nA: Eine schöne Familie!",exampleEn:"A: Do you have children?\nB: Yes, we have three children.\nA: A lovely family!",note:"sie haben = they have.\nSie haben = you (formal) have.\nCapital S on Sie = formal you."},

  {type:"tip",title:"haben: irregular in singular",text:"haben follows a pattern in plural but has two irregular singular forms:\n\nich habe (regular -e ending)\ndu hast (irregular: not 'habst')\ner/sie/es hat (irregular: not 'habt')\n\nMemory trick: sing 'habe-HAST-hat' three times.\nThe plural forms (haben, habt, haben) are predictable.",deepDive:{title:"Inversion in questions with haben",text:"In German, to ask a yes/no question, you swap the subject and verb:\n\nDu hast einen Bruder. (statement: You have a brother.)\nHast du einen Bruder? (question: Do you have a brother?)\n\nIch habe eine Katze. (statement)\nHabe ich eine Katze? (question, rare unless rhetorical)\n\nHat sie Geschwister? (Does she have siblings?)\n\nThis inversion rule applies to ALL German verbs, not just haben."}},

  {type:"mc",q:"Which form of 'haben' goes with 'du'?",opts:["haben","habe","hat","hast"],ans:"hast",hint:"The du-form is irregular: not 'habst'."},

  {type:"mc",q:"Which form of 'haben' goes with 'er'?",opts:["habe","haben","hat","habt"],ans:"hat",hint:"Third person singular is also irregular."},

  {type:"fb",s:"Wir ___ drei Kinder.",a:"haben",opts:["haben","habt","habe","hat"],hint:"We = wir. Which haben form goes with wir?"},

  {type:"mc",q:"Complete: '___ du einen Bruder?'",opts:["Haben","Hast","Hat","Habt"],ans:"Hast",hint:"Question with du: invert subject and verb."},

  {type:"fb",s:"Meine Eltern ___ ein Haus in Berlin.",a:"haben",opts:["haben","habt","habe","hat"],hint:"Meine Eltern = they (plural). Which form?"},

  {type:"mc",q:"'Ihr habt' means:",opts:["I have","He has","You all have","We have"],ans:"You all have",hint:"Ihr is the plural informal 'you'. Habt is its form."},

  {type:"match",pairs:[{nl:"ich habe",en:"I have"},{nl:"du hast",en:"you have"},{nl:"er/sie hat",en:"he/she has"},{nl:"wir haben",en:"we have"}]},

  {type:"mc",q:"'Sie haben Kinder.' could mean either 'they have children' or:",opts:["he has children","she has children","you (formal) have children","we have children"],ans:"you (formal) have children",hint:"Capital Sie = formal you. Same verb form as sie (they)."},

  {type:"fb",s:"___ Sie Geschwister? (formal: Do you have siblings?)",a:"Haben",opts:["Haben","Hast","Habt","Habe"],hint:"Formal question with Sie. Which form of haben?"},

  {type:"mc",q:"To make a yes/no question in German with haben, you:",opts:["Add 'do' before the verb","Add '?' at the end of a statement","Swap the subject and verb (inversion)","Add -en to the verb"],ans:"Swap the subject and verb (inversion)",hint:"Hast du... not Du hast...?"},
]},

// ═══ L4: Mein & Dein ═══
{id:"deu3l4",title:"Mein & Dein",icon:"🤝",xp:15,board:true,steps:[
  {type:"intro",title:"Mein & Dein",desc:"Possessive pronouns show who something belongs to. German possessives change endings based on the noun's gender. Start with the four most common: mein, dein, sein, ihr.",goals:["mein/meine (my)","dein/deine (your)","sein/seine (his), ihr/ihre (her)","Nominative forms for der/die/das nouns"]},

  {type:"teach",kind:"word",nl:"mein / meine",en:"my",phonetic:"mine / MY-neh",example:"A: Das ist mein Vater und das ist meine Mutter.\nB: Deine Familie ist groß!\nA: Ja, wir sind fünf Personen.",exampleEn:"A: That is my father and that is my mother.\nB: Your family is big!\nA: Yes, we are five people.",note:"mein = my (before masculine and neuter nouns)\nmeine = my (before feminine nouns and all plurals)\nMein Bruder. Meine Schwester. Mein Kind."},

  {type:"teach",kind:"word",nl:"dein / deine",en:"your (informal)",phonetic:"dyne / DY-neh",example:"A: Ist das deine Schwester?\nB: Ja, das ist meine Schwester Lisa.\nA: Und ist das dein Bruder?",exampleEn:"A: Is that your sister?\nB: Yes, that is my sister Lisa.\nA: And is that your brother?",note:"dein = your informal (masc/neut nouns)\ndeine = your informal (fem nouns + plural)\nDein Vater. Deine Mutter. Dein Kind."},

  {type:"teach",kind:"word",nl:"sein / seine",en:"his",phonetic:"zyne / ZY-neh",example:"A: Das ist Thomas. Das ist sein Vater.\nB: Und wer ist die Frau?\nA: Das ist seine Mutter.",exampleEn:"A: That is Thomas. That is his father.\nB: And who is the woman?\nA: That is his mother.",note:"sein = his (masc/neut nouns)\nseine = his (fem nouns + plural)\nSein Bruder. Seine Schwester. Sein Kind."},

  {type:"teach",kind:"word",nl:"ihr / ihre",en:"her",phonetic:"eer / EER-eh",example:"A: Das ist Maria. Das ist ihr Sohn.\nB: Und das kleine Mädchen?\nA: Das ist ihre Tochter.",exampleEn:"A: That is Maria. That is her son.\nB: And the little girl?\nA: That is her daughter.",note:"ihr = her (masc/neut nouns)\nihre = her (fem nouns + plural)\nIhr Vater. Ihre Mutter. Ihr Kind.\nWARNING: ihr also means 'you all' (as in ihr habt). Context separates them."},

  {type:"tip",title:"The -e Rule for Possessives",text:"German possessives follow a simple pattern:\n\nBefore masculine nouns (der-words): mein, dein, sein, ihr\nBefore feminine nouns (die-words): meine, deine, seine, ihre\nBefore neuter nouns (das-words): mein, dein, sein, ihr\nBefore plural nouns: meine, deine, seine, ihre\n\nSummary: Add -e before die-words and all plurals.",deepDive:{title:"Possessives in accusative and dative (preview)",text:"In Unit 4 you will learn the accusative case. When possessives appear in accusative position (after verbs like 'have'), the masculine form adds -en:\n\nDas ist mein Bruder. (nominative: this IS my brother)\nIch habe einen Bruder. / Ich habe meinen Bruder. (accusative: I have a/my brother)\n\nFeminine and neuter forms do not change in accusative. For now, focus on nominative: mein/meine, dein/deine, sein/seine, ihr/ihre."}},

  {type:"mc",q:"Complete: 'Das ist ___ Mutter.' (my mother)",opts:["mein","meinen","meine","meiner"],ans:"meine",hint:"Mutter is feminine (die). Add -e to mein."},

  {type:"mc",q:"Complete: 'Das ist ___ Vater.' (his father)",opts:["seine","sein","seinen","seiner"],ans:"sein",hint:"Vater is masculine (der). No -e ending in nominative."},

  {type:"fb",s:"Ist das ___ Bruder? (your brother, informal)",a:"dein",opts:["dein","deine","mein","sein"],hint:"dein = your (informal). Bruder is masculine."},

  {type:"mc",q:"'Das ist ihre Schwester.' means:",opts:["That is my sister","That is your sister","That is his sister","That is her sister"],ans:"That is her sister",hint:"ihre = her (feminine noun, die Schwester)."},

  {type:"match",pairs:[{nl:"mein Vater",en:"my father"},{nl:"deine Mutter",en:"your mother"},{nl:"sein Bruder",en:"his brother"},{nl:"ihre Schwester",en:"her sister"}]},

  {type:"mc",q:"Which possessive has TWO forms: one without -e and one with -e?",opts:["All of them","Only mein","Only dein","None, they all have one form"],ans:"All of them",hint:"All four possessives follow the same -e rule for feminine nouns."},

  {type:"fb",s:"Das ist ___ Kind. (her child)",a:"ihr",opts:["ihr","ihre","sein","mein"],hint:"Kind is neuter (das). No -e before das-words."},

  {type:"mc",q:"'Meine' is used before which type of noun?",opts:["Only masculine nouns","Only neuter nouns","Feminine nouns and all plurals","Only singular nouns"],ans:"Feminine nouns and all plurals",hint:"The -e ending marks die-words and plural."},

  {type:"mc",q:"'Sein' and 'ihr' look different but follow the same rule: no -e before which gender?",opts:["Feminine","Plural","Masculine and neuter","None"],ans:"Masculine and neuter",hint:"Before der-words and das-words, the base form (no -e) is used."},

  {type:"fb",s:"Das ist ___ Oma. (my grandma)",a:"meine",opts:["meine","mein","deine","seine"],hint:"Oma is feminine (die Oma). Which form of mein?"},

  {type:"match",pairs:[{nl:"mein Kind",en:"my child"},{nl:"sein Bruder",en:"his brother"},{nl:"ihre Tante",en:"her aunt"},{nl:"dein Onkel",en:"your uncle"}]},

  {type:"drag_fill",s:"Das ist {1} Vater, das ist {2} Mutter, und das ist {3} Kind.",blanks:{"1":"mein","2":"meine","3":"mein"},pool:["mein","meine","dein","deine","sein","ihre"],hint:"Fill in the possessive for each family noun. Watch the gender!"},
]},

// ═══ L5: Wie viele? ═══
{id:"deu3l5",title:"Wie viele?",icon:"🔢",xp:15,board:true,steps:[
  {type:"intro",title:"Wie viele?",desc:"Learn to describe your family with numbers. How many siblings? How many children? Combine haben with numbers and plurals for natural family descriptions.",goals:["Ich habe + number + family word","Plural forms of family nouns","Wie viele... hast du?","Numbers review 1-20 in context"]},

  {type:"teach",kind:"phrase",nl:"Wie viele?",en:"How many?",phonetic:"vee FEE-leh",example:"A: Wie viele Geschwister hast du?\nB: Ich habe drei Geschwister: zwei Brüder und eine Schwester.\nA: Das ist eine große Familie!",exampleEn:"A: How many siblings do you have?\nB: I have three siblings: two brothers and one sister.\nA: That is a big family!",note:"Wie viele? = How many?\nAlways followed by a plural noun.\nWie viele Kinder? Wie viele Brüder?"},

  {type:"teach",kind:"word",nl:"die Geschwister",en:"the siblings",phonetic:"dee geh-SHVIS-ter",example:"A: Hast du Geschwister?\nB: Ja, ich habe zwei Geschwister.\nA: Brüder oder Schwestern?",exampleEn:"A: Do you have siblings?\nB: Yes, I have two siblings.\nA: Brothers or sisters?",note:"die Geschwister = the siblings. Always plural.\nSingular: das Geschwister (rarely used). Usually always plural context.\nCovers brothers and sisters together."},

  {type:"teach",kind:"phrase",nl:"Ich bin Einzelkind.",en:"I am an only child.",phonetic:"ikh bin EIN-tsel-kint",example:"A: Hast du Geschwister?\nB: Nein, ich bin Einzelkind.\nA: Oh, ich auch!",exampleEn:"A: Do you have siblings?\nB: No, I am an only child.\nA: Oh, me too!",note:"Einzelkind = only child. Einzel = single/alone.\nKind = child. No article needed in this phrase."},

  {type:"teach",kind:"phrase",nl:"Ich habe zwei Brüder.",en:"I have two brothers.",phonetic:"ikh HAH-beh tsvay BROO-der",example:"A: Ich habe zwei Brüder.\nB: Ältere oder jüngere?\nA: Einen älteren und einen jüngeren.",exampleEn:"A: I have two brothers.\nB: Older or younger?\nA: One older and one younger.",note:"zwei Brüder = two brothers.\nBrüder is the plural of Bruder (umlaut change: u to ü).\nPlurals are irregular in German, must be learned."},

  {type:"teach",kind:"phrase",nl:"Ich habe eine Schwester.",en:"I have one sister.",phonetic:"ikh HAH-beh EYE-neh SHVES-ter",example:"A: Wie viele Schwestern hast du?\nB: Ich habe nur eine Schwester.\nA: Seid ihr gut befreundet?",exampleEn:"A: How many sisters do you have?\nB: I have only one sister.\nA: Are you close friends?",note:"eine = one/a (feminine accusative).\nSchwestern = plural of Schwester.\nNote: eine Schwester not ein Schwester."},

  {type:"tip",title:"German Plural: No Single Rule",text:"German plural forms are unpredictable. You must learn each one.\n\nCommon patterns to notice:\n\nBruder: die Brüder (umlaut + r)\nSchwester: die Schwestern (add -n)\nMutter: die Mütter (umlaut only)\nVater: die Väter (umlaut only)\nKind: die Kinder (add -er)\nEltern: always plural (no singular)\n\nStrategy: learn plurals with nouns from the start.",deepDive:{title:"Why German plurals have no rule",text:"English forms most plurals with -s. German has 8+ plural patterns:\n\n1. No change: der Bruder / die Bruder? No, die Brüder (umlaut)\n2. Add -e: der Tag / die Tage\n3. Add -er: das Kind / die Kinder\n4. Add -n/-en: die Schwester / die Schwestern\n5. Add -s (foreign words): das Auto / die Autos\n6. Umlaut + e: der Vater / die Väter\n7. Umlaut only: die Mutter / die Mütter\n8. No change: der Lehrer / die Lehrer\n\nThe dictionary entry for a German noun always includes the plural form. Learn it with each new word."}},

  {type:"mc",q:"'Wie viele Geschwister hast du?' asks about:",opts:["Your age","How many siblings you have","Your family's location","How old your siblings are"],ans:"How many siblings you have",hint:"Wie viele = how many. Geschwister = siblings."},

  {type:"mc",q:"The plural of 'der Bruder' is:",opts:["die Bruders","die Brüder","die Brudern","die Brüders"],ans:"die Brüder",hint:"Umlaut change: u becomes ü. The -r ending stays."},

  {type:"fb",s:"Ich habe ___ Geschwister: eine Schwester und einen Bruder.",a:"zwei",opts:["zwei","drei","eins","vier"],hint:"One sister plus one brother equals how many siblings?"},

  {type:"mc",q:"'Ich bin Einzelkind' means:",opts:["I am the oldest child","I have one sibling","I am an only child","I have a big family"],ans:"I am an only child",hint:"Einzel = single/alone. Kind = child."},

  {type:"mc",q:"The plural of 'die Schwester' is:",opts:["die Schwester","die Schwestern","die Schwestern","die Schwesterinen"],ans:"die Schwestern",hint:"Schwester + -n = Schwestern."},

  {type:"fb",s:"Wie ___ Kinder haben Sie?",a:"viele",opts:["viele","alt","groß","lange"],hint:"Complete 'Wie ___?' meaning 'How many?'"},

  {type:"match",pairs:[{nl:"die Brüder",en:"the brothers"},{nl:"die Schwestern",en:"the sisters"},{nl:"die Kinder",en:"the children"},{nl:"die Eltern",en:"the parents"}]},

  {type:"mc",q:"'Meine Mütter' means:",opts:["My mother","My mothers","My mom","Mother of mine"],ans:"My mothers",hint:"Mütter is the plural of Mutter. Meine = my (before plurals)."},

  {type:"mc",q:"You have no siblings. You say:",opts:["Ich habe keine Geschwister.","Ich habe Geschwister.","Ich bin kein Kind.","Ich habe null."],ans:"Ich habe keine Geschwister.",hint:"kein/keine = none/not a. Keine before plural nouns."},

  {type:"fb",s:"Ich habe ___ Bruder und zwei Schwestern.",a:"einen",opts:["einen","ein","eine","einer"],hint:"Einen = one (masculine accusative). Bruder is masculine."},

  {type:"mc",q:"Which is the correct plural of 'das Kind'?",opts:["die Kinds","die Kindes","die Kinder","die Kinden"],ans:"die Kinder",hint:"Kind adds -er for plural: Kinder (also heard in kindergarten)."},
]},

// ═══ L6: Haustiere ═══
{id:"deu3l6",title:"Haustiere",icon:"🐾",xp:15,board:true,steps:[
  {type:"intro",title:"Haustiere",desc:"Pets are a natural topic in German family conversations. Learn the five most common household pets and describe them using haben and adjectives you already know.",goals:["5 pets: Hund, Katze, Fisch, Vogel, Kaninchen","Hast du ein Haustier?","Describe pets with gut / klein / groß","Ich habe + ein/eine + pet"]},

  {type:"teach",kind:"word",nl:"das Haustier",en:"the pet",phonetic:"dahs HOWS-teer",example:"A: Hast du ein Haustier?\nB: Ja, ich habe ein Haustier.\nA: Was für ein Haustier?",exampleEn:"A: Do you have a pet?\nB: Yes, I have a pet.\nA: What kind of pet?",note:"das Haustier = the pet. Haus = house. Tier = animal.\nLiteral: house animal. Compound word."},

  {type:"teach",kind:"word",nl:"der Hund",en:"the dog",phonetic:"dehr hoont",cognate:{words:[{lang:"English",word:"hound"},{lang:"Dutch",word:"de hond"}],family:"germanic"},example:"A: Ich habe einen Hund. Er heißt Max.\nB: Wie groß ist er?\nA: Er ist mittelgroß und sehr freundlich.",exampleEn:"A: I have a dog. His name is Max.\nB: How big is he?\nA: He is medium-sized and very friendly.",note:"der Hund = the dog.\nPlural: die Hunde.\nEinen Hund (accusative masculine)."},

  {type:"teach",kind:"word",nl:"die Katze",en:"the cat",phonetic:"dee KAT-seh",cognate:{words:[{lang:"English",word:"cat"},{lang:"Dutch",word:"de kat"}],family:"germanic"},example:"A: Hast du eine Katze?\nB: Ja, meine Katze heißt Luna.\nA: Ist sie lieb?",exampleEn:"A: Do you have a cat?\nB: Yes, my cat's name is Luna.\nA: Is she affectionate?",note:"die Katze = the cat (feminine).\nPlural: die Katzen.\nEine Katze (accusative feminine)."},

  {type:"teach",kind:"word",nl:"der Fisch",en:"the fish",phonetic:"dehr fish",cognate:{words:[{lang:"English",word:"fish"},{lang:"Dutch",word:"de vis"}],family:"germanic"},example:"A: Was für ein Haustier hast du?\nB: Ich habe einen Fisch. Er ist golden.\nA: Wie langweilig! (lacht)",exampleEn:"A: What kind of pet do you have?\nB: I have a fish. He is golden.\nA: How boring! (laughs)",note:"der Fisch = the fish.\nPlural: die Fische.\nCommon: einen Goldfisch haben (to have a goldfish)."},

  {type:"teach",kind:"word",nl:"der Vogel",en:"the bird",phonetic:"dehr FOH-gel",cognate:{words:[{lang:"English",word:"fowl (related)"},{lang:"Dutch",word:"de vogel"}],family:"germanic"},example:"A: Ich habe einen Vogel.\nB: Kann er sprechen?\nA: Ein bisschen! Er sagt 'Hallo!'",exampleEn:"A: I have a bird.\nB: Can he speak?\nA: A little! He says 'Hello!'",note:"der Vogel = the bird.\nPlural: die Vögel (with umlaut).\nCommon pet birds: Papagei (parrot), Wellensittich (budgie)."},

  {type:"teach",kind:"word",nl:"das Kaninchen",en:"the rabbit",phonetic:"dahs kah-NEEN-khen",example:"A: Mein Kaninchen heißt Schneeweißchen.\nB: Das ist ein langer Name!\nA: Ja, aber es passt.",exampleEn:"A: My rabbit's name is Snow White.\nB: That is a long name!\nA: Yes, but it fits.",note:"das Kaninchen = the rabbit.\nPlural: die Kaninchen (no change).\n-chen ending = diminutive = always neuter (das)."},

  {type:"tip",title:"ein vs eine vs einen",text:"After haben, the article changes (accusative case):\n\nhaben + masculine (der): einen\nhaben + feminine (die): eine\nhaben + neuter (das): ein\n\nExamples:\nIch habe einen Hund. (der Hund: einen)\nIch habe eine Katze. (die Katze: eine)\nIch habe ein Kaninchen. (das Kaninchen: ein)\n\nOnly masculine changes: der becomes einen.",deepDive:{title:"Why does only masculine change in accusative?",text:"German has 4 grammatical cases. In the accusative case (used for direct objects, like what you 'have'), only the masculine article changes:\n\nnominative: der Hund (subject: The dog runs)\naccusative: Ich habe einen Hund (object: I have a dog)\n\nFeminine (die) and neuter (das) stay the same in accusative. Masculine (der) changes to den (definite) or einen (indefinite).\n\nThis is a crucial rule in German. You will study all four cases systematically starting in Unit 6."}},

  {type:"mc",q:"What does 'das Haustier' literally mean?",opts:["Garden animal","Forest animal","House animal","Outdoor animal"],ans:"House animal",hint:"Haus = house. Tier = animal."},

  {type:"mc",q:"Which article goes with 'Katze'?",opts:["der","das","die","den"],ans:"die",hint:"Die Katze is feminine."},

  {type:"fb",s:"Ich habe ___ Hund. Er heißt Bello.",a:"einen",opts:["einen","eine","ein","der"],hint:"Hund is masculine (der). After haben: einen (accusative)."},

  {type:"mc",q:"Complete: 'Ich habe ___ Kaninchen.'",opts:["ein","einen","eine","das"],hint:"Kaninchen is neuter (das). Neuter accusative = ein."},

  {type:"match",pairs:[{nl:"der Hund",en:"the dog"},{nl:"die Katze",en:"the cat"},{nl:"der Vogel",en:"the bird"},{nl:"das Kaninchen",en:"the rabbit"}]},

  {type:"mc",q:"'das Kaninchen' is neuter because:",opts:["Rabbits are small","It ends in -chen (diminutive)","All animals are neuter","It ends in -en"],ans:"It ends in -chen (diminutive)",hint:"The -chen/-lein diminutive ending always signals neuter gender."},

  {type:"fb",s:"Hast du ein ___? (Do you have a pet?)",a:"Haustier",opts:["Haustier","Hund","Katze","Fisch"],hint:"The general word for pet in German."},

  {type:"mc",q:"Ich habe ___ Katze. (a cat)",opts:["einen","ein","eine","der"],hint:"Katze is feminine. Feminine accusative = eine."},

  {type:"mc",q:"The plural of 'der Vogel' is:",opts:["die Vogels","die Vögel","die Vogeln","die Vögeln"],ans:"die Vögel",hint:"Umlaut change: o becomes ö. No ending added."},

  {type:"match",pairs:[{nl:"einen Hund haben",en:"to have a dog"},{nl:"eine Katze haben",en:"to have a cat"},{nl:"ein Kaninchen haben",en:"to have a rabbit"},{nl:"einen Fisch haben",en:"to have a fish"}]},

  {type:"mc",q:"After 'Ich habe', which article changes compared to its nominative form?",opts:["die (feminine)","das (neuter)","der (masculine)","No articles change"],ans:"der (masculine)",hint:"Only der changes: der Hund becomes einen Hund after haben."},
]},

// ═══ L7: Meine Familie stellt sich vor ═══
{id:"deu3l7",title:"Meine Familie stellt sich vor",icon:"🗣️",xp:20,board:true,steps:[
  {type:"intro",title:"Meine Familie stellt sich vor",desc:"Learn to introduce and describe family members. Combine Das ist mein/meine with sein/ihr, profession, age, and location for complete family descriptions.",goals:["Das ist mein/meine... (introducing family)","Er/Sie ist... + adjective or profession","Er/Sie ist X Jahre alt","Combining mehrere Sätze about one person"]},

  {type:"teach",kind:"phrase",nl:"Das ist mein Vater.",en:"This is my father.",phonetic:"dahs ist myne FAH-ter",example:"A: Das ist mein Vater. Er heißt Klaus.\nB: Hallo, Klaus! Schön, Sie kennenzulernen.\nA: Mein Vater spricht auch ein bisschen Englisch.",exampleEn:"A: This is my father. His name is Klaus.\nB: Hello, Klaus! Nice to meet you.\nA: My father also speaks a little English.",note:"Das ist = this is / that is.\nUse with mein (masc/neut) or meine (fem/plural)."},

  {type:"teach",kind:"phrase",nl:"Das ist meine Mutter.",en:"This is my mother.",phonetic:"dahs ist MY-neh MOO-ter",example:"A: Das ist meine Mutter. Sie ist Ärztin.\nB: Oh, interessant! Wo arbeitet sie?\nA: Sie arbeitet in einem Krankenhaus.",exampleEn:"A: This is my mother. She is a doctor.\nB: Oh, interesting! Where does she work?\nA: She works in a hospital.",note:"meine before feminine nouns.\nDie Mutter, die Schwester, die Tante: alle meine."},

  {type:"teach",kind:"phrase",nl:"Er/Sie ist ... Jahre alt.",en:"He/She is ... years old.",phonetic:"ehr/zee ist ... YAH-reh alt",example:"A: Wie alt ist dein Bruder?\nB: Er ist 17 Jahre alt.\nA: Ist er älter oder jünger als du?",exampleEn:"A: How old is your brother?\nB: He is 17 years old.\nA: Is he older or younger than you?",note:"Jahre alt = years old. Jahre = years (plural of Jahr).\nEr ist = he is. Sie ist = she is.\nHas verb sein from Unit 2."},

  {type:"teach",kind:"phrase",nl:"Er/Sie wohnt in...",en:"He/She lives in...",phonetic:"ehr/zee vohnt in",example:"A: Wo wohnt deine Oma?\nB: Meine Oma wohnt in Hamburg.\nA: Das ist weit von hier!",exampleEn:"A: Where does your grandma live?\nB: My grandma lives in Hamburg.\nA: That is far from here!",note:"wohnen = to live/reside.\nEr/sie wohnt = he/she lives. Wir wohnen = we live."},

  {type:"teach",kind:"phrase",nl:"Er/Sie ist ... von Beruf.",en:"He/She is a ... by profession.",phonetic:"ehr/zee ist ... fon beh-ROOF",example:"A: Was macht dein Vater?\nB: Er ist Ingenieur von Beruf.\nA: Und deine Mutter?",exampleEn:"A: What does your father do?\nB: He is an engineer by profession.\nA: And your mother?",note:"von Beruf = by profession (literally: by job).\nAlternative: Er arbeitet als Ingenieur (he works as an engineer).\nNo article before professions after sein!"},

  {type:"tip",title:"No Article with Professions after sein",text:"In German, professions after 'sein' take NO article:\n\nEr ist Arzt. (He is a doctor.) NOT: Er ist ein Arzt.\nSie ist Lehrerin. (She is a teacher.) NOT: Sie ist eine Lehrerin.\n\nThis is a key difference from English.\nException: with an adjective, the article returns:\nEr ist ein guter Arzt. (He is a GOOD doctor.)",deepDive:{title:"Masculine and feminine profession forms",text:"Most German professions have a male and female form:\n\nArzt (male doctor) / Ärztin (female doctor)\nLehrer (male teacher) / Lehrerin (female teacher)\nIngenieur (male engineer) / Ingenieurin (female engineer)\nStudent (male student) / Studentin (female student)\n\nThe female form adds -in to the masculine base (sometimes with umlaut change).\n\nModern German also uses gender-neutral forms ending in -person or the increasingly common 'gender asterisk' forms (Lehrer*in) in written media, though standard German for learners uses the two traditional forms."}},

  {type:"mc",q:"'Das ist meine Schwester.' uses 'meine' because:",opts:["Schwester is masculine","Schwester starts with S","Schwester is feminine (die)","It comes after 'das'"],ans:"Schwester is feminine (die)",hint:"meine before feminine nouns and plurals."},

  {type:"fb",s:"Mein Vater ___ 50 Jahre alt.",a:"ist",opts:["ist","hat","sind","habe"],hint:"Er/Sie ist X Jahre alt. Which verb form?"},

  {type:"mc",q:"Correct German: 'She is a teacher.'",opts:["Sie ist eine Lehrerin.","Sie ist Lehrerin.","Sie hat Lehrerin.","Sie sind Lehrerin."],ans:"Sie ist Lehrerin.",hint:"No article after sein before a profession in German."},

  {type:"fb",s:"Meine Oma ___ in Bremen.",a:"wohnt",opts:["wohnt","wohnen","wohne","wohnte"],hint:"Third person singular present of wohnen."},

  {type:"mc",q:"'Er ist Arzt von Beruf.' means:",opts:["He studies medicine","He wants to be a doctor","He is a doctor by profession","He was a doctor"],ans:"He is a doctor by profession",hint:"von Beruf = by profession. ist = is (present tense)."},

  {type:"match",pairs:[{nl:"Das ist mein Bruder.",en:"This is my brother."},{nl:"Sie ist 25 Jahre alt.",en:"She is 25 years old."},{nl:"Er wohnt in Berlin.",en:"He lives in Berlin."},{nl:"Meine Mutter ist Ärztin.",en:"My mother is a doctor."}]},

  {type:"mc",q:"To describe your sister's age, you say:",opts:["Sie hat 22 Jahre.","Sie ist 22 Jahre alt.","Ihre Jahre sind 22.","Sie sein 22 alt."],ans:"Sie ist 22 Jahre alt.",hint:"Sein (ist) + age + Jahre alt."},

  {type:"fb",s:"Das ist ___ Tante Maria. Sie ist 45 Jahre alt.",a:"meine",opts:["meine","mein","sein","dein"],hint:"Tante is feminine. My = meine before die-words."},

  {type:"mc",q:"How do you say 'He works as an engineer' in German?",opts:["Er ist einen Ingenieur.","Er arbeitet als Ingenieur.","Er hat Ingenieur.","Er wohnt Ingenieur."],ans:"Er arbeitet als Ingenieur.",hint:"arbeiten als = to work as. Or: Er ist Ingenieur (no article)."},

  {type:"mc",q:"What is the female form of 'Lehrer' (teacher)?",opts:["Lehrerin","Lehrere","Lehrers","Lehererin"],ans:"Lehrerin",hint:"Female profession form: masculine + -in."},

  {type:"drag_fill",s:"Das ist {1} Vater. {2} ist 48 Jahre alt und {3} in Hamburg.",blanks:{"1":"mein","2":"Er","3":"wohnt"},pool:["mein","meine","Er","Sie","wohnt","wohnen","ist","bin"],hint:"Introduce a father: possessive + name + age + location."},
]},

// ═══ L8: Familien Review ═══
{id:"deu3l8",title:"Familien Review",icon:"🌟",xp:25,board:true,steps:[
  {type:"intro",title:"Familien Review",desc:"Unit 3 complete! Bring together family vocabulary, haben conjugation, possessives, plurals, pets, and family introductions in one comprehensive review.",goals:["Family vocab: core + extended + pets","haben all six forms","mein/dein/sein/ihr + gender","Describe and introduce family members"]},

  {type:"tip",title:"Unit 3 Summary",text:"You can now:\n\nFamily: Mutter, Vater, Bruder, Schwester, Kind, Eltern\nExtended: Oma, Opa, Tante, Onkel, Cousin, Cousine\nPets: Hund, Katze, Fisch, Vogel, Kaninchen\nhaben: habe, hast, hat, haben, habt, haben\nPossessives: mein/meine, dein/deine, sein/seine, ihr/ihre\nDescribing: Das ist mein... Er/Sie ist X Jahre alt. Er wohnt in...",deepDive:{title:"Putting it all together",text:"A: Erzähl mir von deiner Familie!\nB: Gerne! Meine Familie ist nicht sehr groß. Ich habe eine Schwester. Sie ist 20 Jahre alt und wohnt in Berlin. Sie ist Studentin.\nA: Und deine Eltern?\nB: Mein Vater ist 52 Jahre alt und ist Ingenieur von Beruf. Meine Mutter ist Ärztin. Wir haben auch einen Hund. Er heißt Bruno.\nA: Toll! Eine schöne Familie.\n\nEvery sentence in this dialogue uses Unit 3 grammar. Read it aloud!"}},

  {type:"mc",q:"'Meine Schwester ist Ärztin.' What is wrong with 'Sie ist eine Ärztin'?",opts:["Nothing is wrong","German does not use sie","No article before professions after sein","Ärztin needs der"],ans:"No article before professions after sein",hint:"After ist (sein), professions take no article in German."},

  {type:"mc",q:"Which form of haben goes with 'ihr'?",opts:["haben","habe","hat","habt"],ans:"habt",hint:"Ihr habt = you all have. Not haben like wir."},

  {type:"fb",s:"Das ist ___ Opa. Er ist 75 Jahre alt.",a:"mein",opts:["mein","meine","sein","ihr"],hint:"Opa is masculine (der Opa). My = mein before der-words."},

  {type:"mc",q:"Plural of 'der Bruder' is:",opts:["die Bruder","die Brüder","die Bruders","die Brüdern"],ans:"die Brüder",hint:"Umlaut: u to ü. Family noun plurals often change internally."},

  {type:"mc",q:"'Ich habe einen Hund.' Why is it 'einen' and not 'ein'?",opts:["Hund is neuter","Hund is feminine","Hund is masculine and the accusative changes der to einen","Random rule"],ans:"Hund is masculine and the accusative changes der to einen",hint:"After haben, masculine nouns take einen (accusative case)."},

  {type:"match",pairs:[{nl:"die Geschwister",en:"the siblings"},{nl:"das Haustier",en:"the pet"},{nl:"der Onkel",en:"the uncle"},{nl:"die Cousine",en:"the cousin (female)"}]},

  {type:"fb",s:"Meine Tante ___ zwei Kinder.",a:"hat",opts:["hat","haben","habe","habt"],hint:"Meine Tante = she. er/sie/es hat."},

  {type:"mc",q:"'Sie ist meine Cousine.' The 'Sie' here refers to:",opts:["A formal you","They (plural)","She (singular)","It"],ans:"She (singular)",hint:"Context: talking about a female cousin. Sie = she."},

  {type:"mc",q:"Which ending does the possessive take before 'die Mutter'?",opts:["-n","-en","-e","no ending"],ans:"-e",hint:"Before feminine nouns: mein-e, dein-e, sein-e, ihr-e."},

  {type:"drag_fill",s:"Hast du {1}? Ich habe {2} Katze und {3} Hund.",blanks:{"1":"Haustiere","2":"eine","3":"einen"},pool:["Haustiere","Haustier","eine","einen","ein","einen","der"],hint:"Asking about pets, then describing two pets."},

  {type:"mc",q:"Which sentence correctly introduces a grandmother?",opts:["Das ist mein Oma.","Das ist meine Oma.","Das ist meiner Oma.","Das ist meine Opas."],ans:"Das ist meine Oma.",hint:"Oma is feminine. meine before die-words."},

  {type:"mc",q:"'Wie viele Geschwister hast du?' asks about:",opts:["Your age","Your parents' jobs","How many siblings you have","Where your family lives"],ans:"How many siblings you have",hint:"Wie viele = how many. Geschwister = siblings."},

  {type:"match",pairs:[{nl:"ich habe",en:"I have"},{nl:"du hast",en:"you have"},{nl:"er/sie hat",en:"he/she has"},{nl:"wir haben",en:"we have"}]},

  {type:"fb",s:"Das ist ___ Bruder Felix. Er ___ 19 Jahre alt.",a:"mein",opts:["mein","meine","ein","einen"],hint:"Bruder is masculine. My = mein. (First blank only)"},

  {type:"mc",q:"'Das Kaninchen' takes the article 'das' because:",opts:["All animals are neuter","It ends in -chen (always neuter)","It is plural","Random assignment"],ans:"It ends in -chen (always neuter)",hint:"Diminutive -chen/-lein = always neuter (das)."},

  {type:"mc",q:"Which sentence best introduces your mother's job?",opts:["Meine Mutter hat eine Lehrerin.","Meine Mutter ist eine Lehrerin.","Meine Mutter ist Lehrerin.","Meine Mutter wohnt Lehrerin."],ans:"Meine Mutter ist Lehrerin.",hint:"Sein + profession = no article."},
]},

]},

// ══════════════════════════════════════════════════════════════════════════
// UNIT 4: Essen & Trinken — Food, Drink & Ordering
// ══════════════════════════════════════════════════════════════════════════
{n:4,lang:"de",track:"v1",title:"Essen & Trinken",sub:"Food, Drink & Ordering",icon:"🍽️",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Getränke ═══
{id:"deu4l1",title:"Getränke",icon:"☕",xp:15,board:true,steps:[
  {type:"intro",title:"Getränke",desc:"Drinks are the gateway to German café and social culture. Learn the most common beverages and you will be ordering confidently from your very first day.",goals:["6 core drinks","Masculine and neuter articles in context","Order a drink simply"]},

  {type:"teach",kind:"word",nl:"der Kaffee",en:"the coffee",phonetic:"dehr KAH-feh",cognate:{words:[{lang:"English",word:"coffee"},{lang:"Dutch",word:"koffie"}],family:"borrowed"},example:"A: Möchten Sie etwas trinken?\nB: Ja, einen Kaffee bitte!\nA: Sofort.",exampleEn:"A: Would you like something to drink?\nB: Yes, a coffee please!\nA: Right away.",note:"Masculine: der Kaffee.\nDer becomes einen when ordering (accusative). You will learn this in U6."},

  {type:"teach",kind:"word",nl:"der Tee",en:"the tea",phonetic:"dehr tay",cognate:{words:[{lang:"English",word:"tea"},{lang:"Dutch",word:"thee"}],family:"borrowed"},example:"A: Kaffee oder Tee?\nB: Tee, bitte. Ohne Milch.\nA: Gern!",exampleEn:"A: Coffee or tea?\nB: Tea, please. Without milk.\nA: Gladly!",note:"Masculine: der Tee.\nOhne = without. Ohne Milch = without milk."},

  {type:"teach",kind:"word",nl:"das Wasser",en:"the water",phonetic:"dahs VAH-ser",cognate:{words:[{lang:"English",word:"water"},{lang:"Dutch",word:"water"}],family:"germanic"},example:"A: Was trinken Sie?\nB: Stilles Wasser, bitte.\nA: Mit oder ohne Kohlensäure?",exampleEn:"A: What are you drinking?\nB: Still water, please.\nA: With or without carbonation?",note:"Neuter: das Wasser.\nStilles Wasser = still water. Sprudelwasser = sparkling water."},

  {type:"teach",kind:"word",nl:"der Saft",en:"the juice",phonetic:"dehr zahft",example:"A: Haben Sie Orangensaft?\nB: Ja! Ein Glas Saft?\nA: Bitte, danke.",exampleEn:"A: Do you have orange juice?\nB: Yes! A glass of juice?\nA: Please, thank you.",note:"Masculine: der Saft.\nOrangensaft = orange juice. Apfelsaft = apple juice."},

  {type:"teach",kind:"word",nl:"das Bier",en:"the beer",phonetic:"dahs beer",cognate:{words:[{lang:"English",word:"beer"},{lang:"Dutch",word:"bier"}],family:"germanic"},example:"A: Ein Bier, bitte!\nB: Welches Bier möchten Sie?\nA: Ein Weizen, bitte.",exampleEn:"A: One beer, please!\nB: Which beer would you like?\nA: A wheat beer, please.",note:"Neuter: das Bier.\nGermany is famous for beer culture. Prost! = Cheers!"},

  {type:"teach",kind:"word",nl:"der Wein",en:"the wine",phonetic:"dehr vyne",cognate:{words:[{lang:"English",word:"wine"},{lang:"Dutch",word:"wijn"}],family:"borrowed"},example:"A: Ein Glas Wein?\nB: Ja, Rotwein bitte!\nA: Und ich nehme Weißwein.",exampleEn:"A: A glass of wine?\nB: Yes, red wine please!\nA: And I will have white wine.",note:"Masculine: der Wein.\nRotwein = red wine. Weißwein = white wine."},

  {type:"tip",title:"Drinks and Their Articles",text:"Memorize the article WITH every new noun. It is part of the word.\n\nder Kaffee (m)\nder Tee (m)\nder Saft (m)\nder Wein (m)\ndas Wasser (n)\ndas Bier (n)\n\nNo shortcut: every noun has a fixed gender. Learn it from the start.",deepDive:{title:"Why German has three genders",text:"German nouns are masculine (der), feminine (die), or neuter (das). These categories come from Proto-Germanic and are largely unpredictable in modern German.\n\nA few tendencies:\nNouns ending in -ung, -heit, -keit are usually die.\nNouns ending in -chen, -lein are always das.\nNouns ending in -er from verbs are usually der.\n\nBut drinks are a mixed bag: der Kaffee, das Bier. The best strategy: always learn der/die/das as part of the word, the way you learn spelling."}},

  {type:"mc",q:"What is the article for Kaffee?",opts:["die","das","der","ein"],ans:"der",hint:"Kaffee is a masculine noun."},

  {type:"mc",q:"What is the article for Wasser?",opts:["der","die","das","ein"],ans:"das",hint:"Wasser is a neuter noun."},

  {type:"fb",s:"Ein Glas ___, bitte. (water)",a:"Wasser",opts:["Wasser","Kaffee","Bier","Tee"],hint:"The neuter drink that is not coffee or beer."},

  {type:"mc",q:"Prost! is used when:",opts:["Ordering a drink","Finishing a drink","Toasting a drink","Spilling a drink"],ans:"Toasting a drink",hint:"The German equivalent of Cheers!"},

  {type:"match",pairs:[{nl:"der Kaffee",en:"the coffee"},{nl:"der Tee",en:"the tea"},{nl:"das Wasser",en:"the water"},{nl:"der Saft",en:"the juice"}]},

  {type:"mc",q:"Rotwein means:",opts:["White wine","Sparkling water","Red wine","Fruit juice"],ans:"Red wine",hint:"Rot = red. Wein = wine."},

  {type:"fb",s:"___ Bier, bitte! (one beer, neuter article)",a:"Ein",opts:["Ein","Der","Das","Einen"],hint:"The neuter indefinite article for das Bier."},

  {type:"mc",q:"Which two drinks share the article der?",opts:["Wasser and Bier","Kaffee and Tee","Tee and Bier","Wasser and Wein"],ans:"Kaffee and Tee",hint:"Both hot drinks are masculine."},

  {type:"mc",q:"Stilles Wasser means:",opts:["Cold water","Sparkling water","Still water","Hot water"],ans:"Still water",hint:"Still = without bubbles, not carbonated."},

  {type:"fb",s:"Kaffee ___ Tee? (coffee or tea?)",a:"oder",opts:["oder","und","mit","ohne"],hint:"The German word for or."},

  {type:"mc",q:"Which drink is neuter (das)?",opts:["der Kaffee","der Saft","das Bier","der Wein"],ans:"das Bier",hint:"Check the article shown with each option."},
]},

// ═══ L2: Brot & Frühstück ═══
{id:"deu4l2",title:"Brot & Frühstück",icon:"🍞",xp:15,board:true,steps:[
  {type:"intro",title:"Brot & Frühstück",desc:"Breakfast in Germany is built around bread. Learn the key breakfast foods and their articles, and you will be ready for every Frühstück conversation.",goals:["6 breakfast foods","Feminine and neuter articles","Ask for breakfast items simply"]},

  {type:"teach",kind:"word",nl:"das Brot",en:"the bread",phonetic:"dahs broht",cognate:{words:[{lang:"English",word:"bread"},{lang:"Dutch",word:"brood"}],family:"germanic"},example:"A: Möchtest du Brot zum Frühstück?\nB: Ja, mit Butter bitte!\nA: Hier, bitte.",exampleEn:"A: Would you like bread for breakfast?\nB: Yes, with butter please!\nA: Here you go.",note:"Neuter: das Brot.\nGerman bread culture is famous: 300+ varieties. Dark rye, sourdough, mixed grain."},

  {type:"teach",kind:"word",nl:"die Butter",en:"the butter",phonetic:"dee BUT-ter",cognate:{words:[{lang:"English",word:"butter"},{lang:"Dutch",word:"boter"}],family:"germanic"},example:"A: Ist noch Butter im Kühlschrank?\nB: Ja, hier ist die Butter.\nA: Danke!",exampleEn:"A: Is there still butter in the fridge?\nB: Yes, here is the butter.\nA: Thanks!",note:"Feminine: die Butter.\nAlmost identical to English butter and Dutch boter."},

  {type:"teach",kind:"word",nl:"das Ei",en:"the egg",phonetic:"dahs ay",cognate:{words:[{lang:"English",word:"egg"},{lang:"Dutch",word:"ei"}],family:"germanic"},example:"A: Wie möchtest du dein Ei?\nB: Weichgekocht, bitte.\nA: Drei Minuten?",exampleEn:"A: How would you like your egg?\nB: Soft-boiled, please.\nA: Three minutes?",note:"Neuter: das Ei. Plural: die Eier.\nWeichgekocht = soft-boiled. Hartgekocht = hard-boiled."},

  {type:"teach",kind:"word",nl:"die Marmelade",en:"the jam",phonetic:"dee mar-meh-LAH-deh",cognate:{words:[{lang:"English",word:"marmalade"},{lang:"Dutch",word:"marmelade"}],family:"borrowed"},example:"A: Welche Marmelade möchtest du?\nB: Erdbeermarmelade, bitte!\nA: Hier ist sie.",exampleEn:"A: Which jam would you like?\nB: Strawberry jam, please!\nA: Here it is.",note:"Feminine: die Marmelade.\nIn German this covers ALL fruit jams, not just orange.\nErdbeer = strawberry."},

  {type:"teach",kind:"word",nl:"das Brötchen",en:"the bread roll",phonetic:"dahs BRØT-khen",example:"A: Frische Brötchen!\nB: Toll! Ich nehme zwei.\nA: Bitte sehr.",exampleEn:"A: Fresh bread rolls!\nB: Great! I will take two.\nA: Here you go.",note:"Neuter: das Brötchen.\n-chen ending = always neuter (diminutive suffix).\nBrötchen = little Brot."},

  {type:"teach",kind:"word",nl:"der Käse",en:"the cheese",phonetic:"dehr KAY-zeh",cognate:{words:[{lang:"English",word:"cheese"},{lang:"Dutch",word:"kaas"}],family:"germanic"},example:"A: Hast du Käse?\nB: Ja, Gouda und Emmentaler.\nA: Dann nehme ich Gouda.",exampleEn:"A: Do you have cheese?\nB: Yes, Gouda and Emmentaler.\nA: Then I will have Gouda.",note:"Masculine: der Käse.\nGermany produces 150+ types of cheese."},

  {type:"tip",title:"The -chen Trick",text:"Words ending in -chen are ALWAYS neuter (das):\n\ndas Brötchen (bread roll) from Brot\ndas Mädchen (girl) from Magd\ndas Häuschen (little house) from Haus\n\nWhy? The -chen suffix is a diminutive. Diminutives in German are always neuter, without exception. One of the most reliable article rules you will learn.",deepDive:{title:"Diminutives across Germanic languages",text:"The -chen diminutive (das Brötchen, das Mädchen) is unique to German. Dutch uses -je (broodje, meisje), English once used -kin (napkin, lambkin) and -ling.\n\nAll Germanic diminutives make neuter nouns. The pattern survived in German because Standard German retained neuter assignment as a grammatical rule.\n\nBonus: -lein is another German diminutive (das Büchlein = little book), also always neuter."}},

  {type:"mc",q:"What is the article for Brötchen?",opts:["der","die","das","ein"],ans:"das",hint:"The -chen ending is always neuter."},

  {type:"mc",q:"What is the article for Butter?",opts:["der","das","die","ein"],ans:"die",hint:"Butter is feminine."},

  {type:"fb",s:"Ich möchte ___ mit Butter. (bread)",a:"Brot",opts:["Brot","Käse","Ei","Marmelade"],hint:"The base German bread, neuter."},

  {type:"mc",q:"Weichgekocht describes an egg that is:",opts:["Fried","Scrambled","Soft-boiled","Hard-boiled"],ans:"Soft-boiled",hint:"Weich = soft. Gekocht = cooked."},

  {type:"match",pairs:[{nl:"das Brot",en:"the bread"},{nl:"die Butter",en:"the butter"},{nl:"das Ei",en:"the egg"},{nl:"der Käse",en:"the cheese"}]},

  {type:"mc",q:"Erdbeermarmelade is:",opts:["Orange jam","Strawberry jam","Plum jam","Apricot jam"],ans:"Strawberry jam",hint:"Erdbeer = strawberry. Erde = earth, Beere = berry."},

  {type:"fb",s:"Das ___ hat eine -chen Endung, also ist es Neutrum.",a:"Brötchen",opts:["Brötchen","Käse","Butter","Brot"],hint:"Which breakfast word ends in -chen?"},

  {type:"mc",q:"Which breakfast food has a masculine article?",opts:["das Brot","die Butter","der Käse","das Ei"],ans:"der Käse",hint:"Find the word preceded by der."},

  {type:"mc",q:"Frühstück means:",opts:["Lunch","Dinner","Breakfast","Brunch"],ans:"Breakfast",hint:"Früh = early. Stück = piece. The early meal."},

  {type:"fb",s:"___ Ei, bitte. Weichgekocht. (one egg)",a:"Ein",opts:["Ein","Eine","Einen","Der"],hint:"Indefinite neuter article for das Ei."},
]},

// ═══ L3: der, die, das ═══
{id:"deu4l3",title:"der, die, das",icon:"📚",xp:20,board:true,steps:[
  {type:"intro",title:"der, die, das",desc:"Every German noun has a grammatical gender. Mastering articles is the single most important habit in German. This lesson gives you the rules, tricks, and strategies.",goals:["Definite articles: der, die, das","Gender signals and suffixes","Learning strategies for articles"]},

  {type:"tip",title:"The Three German Articles",text:"German has three definite articles (the):\n\nder = masculine (m)\ndie = feminine (f)\ndas = neuter (n)\n\nEvery noun belongs to one category. This is GRAMMATICAL gender, not natural gender.\n\nColor code:\nder = blue\ndie = coral\ndas = purple\n\nAlways learn the article with the noun. Der Kaffee. Not just Kaffee.",deepDive:{title:"Why gender?",text:"Proto-Germanic had three genders, inherited from Proto-Indo-European. Most modern Germanic languages reduced this: English dropped all three, Dutch merged to two (de/het), Swedish/Danish use two (en/ett).\n\nGerman kept all three. This is one reason German is harder for English speakers than Dutch or Swedish.\n\nThe good news: you only need to assign the right article to the right noun. You do not need to understand WHY Mädchen (girl) is neuter or why Sonne (sun) is feminine. Just learn the word with its article every time."}},

  {type:"tip",title:"Suffix Rules: Reliable Signals",text:"Some endings tell you the gender reliably:\n\nALWAYS die (feminine):\n-ung: die Zeitung, die Übung\n-heit/-keit: die Freiheit, die Möglichkeit\n-schaft: die Freundschaft\n-tion: die Nation, die Station\n-ei: die Bäckerei\n\nALWAYS das (neuter):\n-chen: das Brötchen, das Mädchen\n-lein: das Büchlein\n-um: das Museum\n\nOften der (masculine):\n-er (agent nouns): der Lehrer, der Fahrer",deepDive:{title:"The -tion rule and loanwords",text:"German borrowed thousands of words from Latin and French. Nouns ending in -tion (Station, Nation, Organisation) are ALL feminine (die).\n\nSimilarly:\n-tät (Qualität, Universität) = always die\n-ik (Musik, Physik) = usually die\n-ismus (Tourismus, Idealismus) = always der\n-ment (Instrument, Moment) = usually das\n\nKnowing these suffix rules handles a large proportion of technical and academic vocabulary without memorization."}},

  {type:"teach",kind:"phrase",nl:"der (blau)",en:"masculine article",phonetic:"dehr",example:"A: Was ist das?\nB: Das ist der Kaffee. Der ist sehr gut!\nA: Ah, ein Kaffee für mich auch!",exampleEn:"A: What is that?\nB: That is the coffee. It is very good!\nA: Ah, a coffee for me too!",note:"Masculine nouns: der Kaffee, der Tee, der Saft, der Wein, der Käse.\nColor code: blue."},

  {type:"teach",kind:"phrase",nl:"die (koralle)",en:"feminine article",phonetic:"dee",example:"A: Wo ist die Butter?\nB: Die Butter ist im Kühlschrank.\nA: Danke!",exampleEn:"A: Where is the butter?\nB: The butter is in the fridge.\nA: Thanks!",note:"Feminine nouns: die Butter, die Marmelade, die Suppe, die Kartoffel.\nColor code: coral."},

  {type:"teach",kind:"phrase",nl:"das (lila)",en:"neuter article",phonetic:"dahs",example:"A: Das Brot ist frisch!\nB: Ja, das Brötchen auch.\nA: Und das Wasser?",exampleEn:"A: The bread is fresh!\nB: Yes, the bread roll too.\nA: And the water?",note:"Neuter nouns: das Brot, das Brötchen, das Ei, das Wasser, das Bier.\nColor code: purple."},

  {type:"tip",title:"Learning Strategy: Learn Articles from Day One",text:"The proven strategy for German article mastery:\n\n1. Never learn a noun without its article.\nNot Kaffee. Always: der Kaffee.\n\n2. Use color coding in your notes.\nder = blue, die = coral/red, das = green/gold\n\n3. Group by article when reviewing.\nAll der words together. All die words together.\n\n4. Visualize: give each noun a color tag.\nEvery time you see Kaffee, see it in blue.\n\n5. Accept that some words are surprising.\nMädchen (girl) = das. Accept it and move on.",deepDive:{title:"What happens if you use the wrong article?",text:"Germans will ALWAYS understand you. Wrong articles do not cause misunderstanding.\n\nBut article errors are immediately noticeable, like subject-verb agreement errors in English ('he go' instead of 'he goes').\n\nAt A1-A2, focus on high-frequency nouns and get their articles right. At B1-B2, refine the rest.\n\nProfessional tip: when you truly cannot remember an article, use das as your fallback. German has more neuter nouns than most learners expect, and borrowings and nominalizations are often neuter."}},

  {type:"mc",q:"Which article signals a FEMININE noun?",opts:["der","das","die","ein"],ans:"die",hint:"Three articles: der, die, das. Which is feminine?"},

  {type:"mc",q:"die Zeitung ends in -ung. This suffix is always:",opts:["masculine","neuter","feminine","mixed"],ans:"feminine",hint:"The -ung suffix rule."},

  {type:"fb",s:"___ Brötchen ist frisch. (-chen = always neuter)",a:"Das",opts:["Das","Der","Die","Ein"],hint:"Apply the -chen rule to find the article."},

  {type:"mc",q:"das Mädchen (girl) is neuter because:",opts:["Girls are not gendered in German","It ends in -chen","It is a loanword","There is no rule"],ans:"It ends in -chen",hint:"The -chen diminutive suffix."},

  {type:"match",pairs:[{nl:"der",en:"masculine article"},{nl:"die",en:"feminine article"},{nl:"das",en:"neuter article"},{nl:"-chen",en:"always neuter suffix"}]},

  {type:"mc",q:"die Nation ends in -tion. This rule is useful because:",opts:["All -tion words are feminine","All -tion words are masculine","All -tion words are neuter","The rule only works sometimes"],ans:"All -tion words are feminine",hint:"Loanwords ending in -tion always take die."},

  {type:"fb",s:"___ Butter ist im Kühlschrank. (butter, feminine)",a:"Die",opts:["Die","Der","Das","Eine"],hint:"The definite feminine article."},

  {type:"mc",q:"The color code for der (masculine) in LingoVerse is:",opts:["coral","purple","gold","blue"],ans:"blue",hint:"der = blue, die = coral, das = purple."},

  {type:"mc",q:"When you cannot remember an article, the safest fallback is:",opts:["der","die","das","ein"],ans:"das",hint:"Many borrowings and nominalizations are neuter."},

  {type:"fb",s:"___ Kaffee, bitte. (masculine definite article)",a:"Der",opts:["Der","Die","Das","Ein"],hint:"Kaffee is masculine."},

  {type:"mc",q:"Which suffix reliably signals a masculine (der) noun?",opts:["-ung","-keit","-er (from a verb)","-tion"],ans:"-er (from a verb)",hint:"Agent nouns ending in -er are usually masculine. Der Lehrer, der Fahrer."},
]},

// ═══ L4: Mittagessen ═══
{id:"deu4l4",title:"Mittagessen",icon:"🍜",xp:15,board:true,steps:[
  {type:"intro",title:"Mittagessen",desc:"Lunch is the main meal in many German-speaking countries. Learn the essential lunch foods and practice their articles.",goals:["6 lunch foods","Feminine and neuter articles in new words","Use food vocabulary naturally"]},

  {type:"teach",kind:"word",nl:"die Suppe",en:"the soup",phonetic:"dee ZUP-eh",cognate:{words:[{lang:"English",word:"soup"},{lang:"Dutch",word:"soep"}],family:"borrowed"},example:"A: Was ist die Tagessuppe?\nB: Tomatensuppe!\nA: Sehr gut, die bitte.",exampleEn:"A: What is the soup of the day?\nB: Tomato soup!\nA: Very good, that one please.",note:"Feminine: die Suppe.\nTagessuppe = soup of the day. Tomatensuppe = tomato soup."},

  {type:"teach",kind:"word",nl:"der Salat",en:"the salad",phonetic:"dehr zah-LAHT",cognate:{words:[{lang:"English",word:"salad"},{lang:"Dutch",word:"salade"}],family:"borrowed"},example:"A: Ich nehme einen gemischten Salat.\nB: Mit Dressing?\nA: Ja, Essig und Öl bitte.",exampleEn:"A: I will have a mixed salad.\nB: With dressing?\nA: Yes, vinegar and oil please.",note:"Masculine: der Salat.\nGemischter Salat = mixed salad. Essig = vinegar. Öl = oil."},

  {type:"teach",kind:"word",nl:"das Fleisch",en:"the meat",phonetic:"dahs flysh",cognate:{words:[{lang:"English",word:"flesh"},{lang:"Dutch",word:"vlees"}],family:"germanic"},example:"A: Essen Sie Fleisch?\nB: Ja, aber kein Schweinefleisch.\nA: Wir haben Rindfleisch und Hühnchen.",exampleEn:"A: Do you eat meat?\nB: Yes, but no pork.\nA: We have beef and chicken.",note:"Neuter: das Fleisch.\nSchweinefleisch = pork (Schwein = pig).\nRindfleisch = beef (Rind = cattle)."},

  {type:"teach",kind:"word",nl:"der Fisch",en:"the fish",phonetic:"dehr fish",cognate:{words:[{lang:"English",word:"fish"},{lang:"Dutch",word:"vis"}],family:"germanic"},example:"A: Haben Sie frischen Fisch?\nB: Ja! Lachs und Forelle.\nA: Lachs, bitte.",exampleEn:"A: Do you have fresh fish?\nB: Yes! Salmon and trout.\nA: Salmon, please.",note:"Masculine: der Fisch.\nLachs = salmon. Forelle = trout."},

  {type:"teach",kind:"word",nl:"die Kartoffel",en:"the potato",phonetic:"dee kar-TOF-el",example:"A: Möchten Sie Kartoffeln oder Reis?\nB: Kartoffeln, bitte. Gekocht?\nA: Ja, mit Butter.",exampleEn:"A: Would you like potatoes or rice?\nB: Potatoes, please. Boiled?\nA: Yes, with butter.",note:"Feminine: die Kartoffel. Plural: Kartoffeln.\nA staple of German cuisine."},

  {type:"teach",kind:"word",nl:"der Reis",en:"the rice",phonetic:"dehr ryes",cognate:{words:[{lang:"English",word:"rice"},{lang:"Dutch",word:"rijst"}],family:"borrowed"},example:"A: Kommt der Reis dazu?\nB: Ja, der Reis ist inklusive.\nA: Super!",exampleEn:"A: Does the rice come with it?\nB: Yes, the rice is included.\nA: Great!",note:"Masculine: der Reis.\nReis sounds very close to English rice.\nInklusive = included."},

  {type:"tip",title:"Lunch Plate Patterns",text:"A typical German Mittagessen has three components:\n\nHauptgericht = main course (often Fleisch or Fisch)\nBeilage = side dish (Kartoffeln, Reis, Gemüse)\nNachtisch = dessert\n\nIn cafeterias (Kantine) and restaurants, you often choose:\nGericht 1 (vegetarian), Gericht 2 (meat), Gericht 3 (fish)\n\nKantine = company or school cafeteria. Mensa = university cafeteria.",deepDive:{title:"German lunch culture",text:"Traditionally, Mittagessen is the main hot meal of the day in Germany, eaten between 12 and 2 PM. Abendessen (dinner) is often a cold meal of bread, cheese, and cold cuts called Abendbrot (evening bread).\n\nThis differs from the English-speaking pattern where dinner is the main hot meal. When studying in Germany, expect the university Mensa to be packed from noon to 1:30 PM.\n\nKantine = company/school cafeteria. Mensa = university cafeteria. Both serve a rotating daily menu at low prices."}},

  {type:"mc",q:"What is the article for Suppe?",opts:["der","das","die","ein"],ans:"die",hint:"Suppe is feminine."},

  {type:"mc",q:"What is the article for Fleisch?",opts:["der","die","das","ein"],ans:"das",hint:"Fleisch is neuter."},

  {type:"fb",s:"Ich nehme ___ Salat. (the salad, use accusative: der becomes den)",a:"den",opts:["den","die","das","der"],hint:"Masculine accusative: der becomes den after nehmen."},

  {type:"mc",q:"Schweinefleisch means:",opts:["Beef","Pork","Chicken","Lamb"],ans:"Pork",hint:"Schwein = pig. Fleisch = meat."},

  {type:"match",pairs:[{nl:"die Suppe",en:"the soup"},{nl:"der Salat",en:"the salad"},{nl:"das Fleisch",en:"the meat"},{nl:"der Fisch",en:"the fish"}]},

  {type:"mc",q:"Beilage refers to:",opts:["The starter","The main course","A side dish","The dessert"],ans:"A side dish",hint:"Kartoffeln, Reis, and Gemüse are typical Beilagen."},

  {type:"fb",s:"Möchten Sie ___ oder Reis? (potatoes)",a:"Kartoffeln",opts:["Kartoffeln","Suppe","Salat","Fleisch"],hint:"Plural of die Kartoffel."},

  {type:"mc",q:"Which food is masculine (der)?",opts:["die Kartoffel","das Fleisch","der Fisch","die Suppe"],ans:"der Fisch",hint:"Check the article on each option."},

  {type:"mc",q:"Nachtisch in a German meal context means:",opts:["Main course","Starter","Dessert","Side dish"],ans:"Dessert",hint:"Nach = after. Tisch = table. The after-table course."},

  {type:"fb",s:"Lachs und Forelle sind Arten von ___.",a:"Fisch",opts:["Fisch","Fleisch","Suppe","Reis"],hint:"Salmon and trout are both types of..."},
]},

// ═══ L5: Im Restaurant ═══
{id:"deu4l5",title:"Im Restaurant",icon:"🍴",xp:20,board:true,steps:[
  {type:"intro",title:"Im Restaurant",desc:"Order food and drink, ask for the bill, and navigate a German restaurant with confidence. These phrases work in cafés, restaurants, and canteens.",goals:["Ich möchte and Ich hätte gern","Key restaurant phrases","Ask for the bill politely"]},

  {type:"teach",kind:"phrase",nl:"Ich möchte...",en:"I would like...",phonetic:"ikh MØKH-teh",example:"A: Was darf es sein?\nB: Ich möchte eine Suppe, bitte.\nA: Sofort!",exampleEn:"A: What can I get you?\nB: I would like a soup, please.\nA: Right away!",note:"Möchte is the polite want form. More polite than ich will.\nIch will = I want (blunt, slightly demanding).\nIch möchte = I would like (standard polite)."},

  {type:"teach",kind:"phrase",nl:"Ich hätte gern...",en:"I would gladly have...",phonetic:"ikh HET-eh gehrn",example:"A: Was hätten Sie gern?\nB: Ich hätte gern den Lachs.\nA: Ausgezeichnet!",exampleEn:"A: What would you like?\nB: I would gladly have the salmon.\nA: Excellent!",note:"More formal and elegant than Ich möchte.\nUsed in upscale restaurants.\nHätte = would have (Konjunktiv II). Gern = gladly."},

  {type:"teach",kind:"phrase",nl:"Die Speisekarte, bitte",en:"The menu, please",phonetic:"dee SHPY-zeh-kar-teh BIT-teh",example:"A: Guten Abend! Willkommen.\nB: Danke! Die Speisekarte, bitte.\nA: Hier bitte!",exampleEn:"A: Good evening! Welcome.\nB: Thank you! The menu, please.\nA: Here you go!",note:"Speise = food. Karte = card or menu.\nDie Speisekarte = the menu (feminine)."},

  {type:"teach",kind:"phrase",nl:"Was empfehlen Sie?",en:"What do you recommend?",phonetic:"vahs emp-FAY-len zee",example:"A: Was empfehlen Sie heute?\nB: Der Lachs ist sehr frisch!\nA: Dann nehme ich den Lachs.",exampleEn:"A: What do you recommend today?\nB: The salmon is very fresh!\nA: Then I will have the salmon.",note:"Empfehlen = to recommend.\nSie = formal you. A useful question in any restaurant."},

  {type:"teach",kind:"phrase",nl:"Die Rechnung, bitte",en:"The bill, please",phonetic:"dee REKH-noong BIT-teh",example:"A: Entschuldigung! Die Rechnung, bitte.\nB: Sofort! Zusammen oder getrennt?\nA: Zusammen, bitte.",exampleEn:"A: Excuse me! The bill, please.\nB: Right away! Together or separate?\nA: Together, please.",note:"Rechnung = bill or invoice.\nDie Rechnung is feminine.\nZahlen, bitte! = Pay, please (very direct but used)."},

  {type:"teach",kind:"phrase",nl:"Getrennt oder zusammen?",en:"Separate or together?",phonetic:"geh-TRENT OH-der tsoo-ZAH-men",example:"A: Die Rechnung, bitte!\nB: Getrennt oder zusammen?\nA: Getrennt, bitte.",exampleEn:"A: The bill, please!\nB: Separate or together?\nA: Separate, please.",note:"Common waiter question for groups.\nGetrennt = separate. Zusammen = together."},

  {type:"teach",kind:"phrase",nl:"Das schmeckt sehr gut!",en:"That tastes very good!",phonetic:"dahs shMEKT zehr goot",example:"A: Wie ist das Essen?\nB: Das schmeckt sehr gut!\nA: Das freut mich!",exampleEn:"A: How is the food?\nB: That tastes very good!\nA: That makes me happy!",note:"Schmecken = to taste. Schmeckt = tastes (3rd person).\nA natural compliment for the cook or waiter."},

  {type:"teach",kind:"phrase",nl:"Ich bin Vegetarier/Vegetarierin",en:"I am vegetarian",phonetic:"ikh bin veh-geh-TAR-ee-er",example:"A: Haben Sie vegetarische Gerichte?\nB: Ja! Ich bin Vegetarierin.\nA: Hier ist unsere vegetarische Karte.",exampleEn:"A: Do you have vegetarian dishes?\nB: Yes! I am vegetarian.\nA: Here is our vegetarian menu.",note:"Vegetarier = male form. Vegetarierin = female form.\nVegetarische Gerichte = vegetarian dishes."},

  {type:"tip",title:"Restaurant Etiquette in Germany",text:"A few customs that differ from other countries:\n\n1. Seating: You seat yourself unless a sign says Bitte warten.\n2. Water: Not automatically free. Tap water is rarely served unless asked.\n3. Tipping: Round up or add 10%. Say the total when paying.\n4. Bill: Germans often split individually (Getrennt zahlen).\n5. Payment: Zahlen Sie bar oder mit Karte? (Cash or card?)",deepDive:{title:"Bar oder Karte? German payment culture",text:"Germany remains strongly cash-oriented compared to most of Western Europe. Many restaurants, bakeries, and small shops are Nur Bar (cash only).\n\nWhen paying, you tell the waiter the exact amount: Stimmt so (= keep the change). Or: Machen Sie 23 Euro (= make it 23 euros, the rest is a tip).\n\nThis direct approach with tipping is normal and not considered impolite."}},

  {type:"mc",q:"The polite way to order in German is:",opts:["Ich will Kaffee","Ich möchte Kaffee, bitte","Gib mir Kaffee","Kaffee jetzt"],ans:"Ich möchte Kaffee, bitte",hint:"Möchte is the polite want form."},

  {type:"mc",q:"Die Rechnung, bitte means:",opts:["A menu, please","The bill, please","The reservation, please","More water, please"],ans:"The bill, please",hint:"Rechnung = bill or invoice."},

  {type:"fb",s:"___ empfehlen Sie? (What do you recommend?)",a:"Was",opts:["Was","Wie","Wer","Wo"],hint:"The question word for what."},

  {type:"mc",q:"Ich hätte gern is used in:",opts:["Casual fast food orders","Upscale restaurant orders","Street market haggling","Supermarket self-checkout"],ans:"Upscale restaurant orders",hint:"Hätte = Konjunktiv II form. More elegant than möchte."},

  {type:"match",pairs:[{nl:"Ich möchte...",en:"I would like..."},{nl:"Die Rechnung, bitte",en:"The bill, please"},{nl:"Was empfehlen Sie?",en:"What do you recommend?"},{nl:"Getrennt oder zusammen?",en:"Separate or together?"}]},

  {type:"mc",q:"In Germany, water at a restaurant is typically:",opts:["Always free","Always sparkling","Not automatically free","Only served in summer"],ans:"Not automatically free",hint:"German restaurants charge for water. Tap water is rarely served free."},

  {type:"fb",s:"Das ___ sehr gut! (That tastes very good!)",a:"schmeckt",opts:["schmeckt","ist","trinkt","hat"],hint:"The verb schmecken conjugated for 3rd person singular."},

  {type:"mc",q:"Stimmt so when paying means:",opts:["That is correct change","Keep the change","Can I pay by card?","The bill is wrong"],ans:"Keep the change",hint:"German tipping custom: the waiter keeps the rest."},

  {type:"mc",q:"Vegetarische Gerichte means:",opts:["Meat dishes","Seafood dishes","Vegetarian dishes","Daily specials"],ans:"Vegetarian dishes",hint:"Vegetarisch = vegetarian. Gerichte = dishes."},
]},

// ═══ L6: Obst & Gemüse ═══
{id:"deu4l6",title:"Obst & Gemüse",icon:"🍎",xp:15,board:true,steps:[
  {type:"intro",title:"Obst & Gemüse",desc:"Fruits and vegetables are essential vocabulary for shopping, cooking, and healthy eating. Learn five common ones with their articles.",goals:["5 fruits and vegetables","Articles for new nouns","Market and shopping vocabulary"]},

  {type:"teach",kind:"word",nl:"der Apfel",en:"the apple",phonetic:"dehr AP-fel",cognate:{words:[{lang:"English",word:"apple"},{lang:"Dutch",word:"appel"}],family:"germanic"},example:"A: Wie viele Äpfel möchten Sie?\nB: Sechs Äpfel, bitte.\nA: Sehr gut!",exampleEn:"A: How many apples would you like?\nB: Six apples, please.\nA: Very good!",note:"Masculine: der Apfel. Plural: die Äpfel (umlaut!).\nÄpfel: common umlaut plural pattern."},

  {type:"teach",kind:"word",nl:"die Banane",en:"the banana",phonetic:"dee bah-NAH-neh",cognate:{words:[{lang:"English",word:"banana"},{lang:"Dutch",word:"banaan"}],family:"borrowed"},example:"A: Ich kaufe zwei Bananen.\nB: Die sind sehr reif!\nA: Prima!",exampleEn:"A: I am buying two bananas.\nB: Those are very ripe!\nA: Great!",note:"Feminine: die Banane. Plural: Bananen.\nReif = ripe. Unreif = unripe."},

  {type:"teach",kind:"word",nl:"die Tomate",en:"the tomato",phonetic:"dee toh-MAH-teh",cognate:{words:[{lang:"English",word:"tomato"},{lang:"Dutch",word:"tomaat"}],family:"borrowed"},example:"A: Haben Sie frische Tomaten?\nB: Ja! Diese hier sind toll.\nA: Ein Kilo, bitte.",exampleEn:"A: Do you have fresh tomatoes?\nB: Yes! These here are great.\nA: One kilo, please.",note:"Feminine: die Tomate. Plural: Tomaten.\nEin Kilo = one kilogram. Common market unit."},

  {type:"teach",kind:"word",nl:"die Gurke",en:"the cucumber",phonetic:"dee GOOR-keh",example:"A: Frische Gurken!\nB: Zwei für einen Euro!\nA: Ich nehme vier, bitte.",exampleEn:"A: Fresh cucumbers!\nB: Two for one euro!\nA: I will take four, please.",note:"Feminine: die Gurke. Plural: Gurken.\nA common salad and snack vegetable."},

  {type:"teach",kind:"word",nl:"die Zwiebel",en:"the onion",phonetic:"dee TSVEE-bel",example:"A: Brauchst du Zwiebeln?\nB: Ja, drei Zwiebeln bitte.\nA: Hier!",exampleEn:"A: Do you need onions?\nB: Yes, three onions please.\nA: Here!",note:"Feminine: die Zwiebel. Plural: Zwiebeln.\nBase of many German sauces and stews."},

  {type:"tip",title:"Obst vs Gemüse",text:"Two important category words:\n\nObst = fruit (das Obst, neuter, uncountable)\nGemüse = vegetables (das Gemüse, neuter, uncountable)\n\nUse them when shopping:\nIch suche das Obst. = I am looking for the fruit section.\nHaben Sie frisches Gemüse? = Do you have fresh vegetables?\n\nNote: individual fruits use their own article (der Apfel, die Banane), but the category word Obst is always das.",deepDive:{title:"At the German Wochenmarkt",text:"Germany has vibrant weekly markets (Wochenmärkte) in almost every town and city, open on Saturday mornings (and often Wednesday).\n\nUseful phrases:\nWas kostet ein Kilo? = What does a kilo cost?\nIch hätte gern 500 Gramm. = I would like 500 grams.\nDas macht... Euro. = That comes to... euros.\nEinen schönen Tag! = Have a nice day!\n\nMarket German is fast and friendly."}},

  {type:"mc",q:"What is the article for Apfel?",opts:["die","das","der","ein"],ans:"der",hint:"Apfel is masculine."},

  {type:"mc",q:"What is the article for Tomate?",opts:["der","das","die","ein"],ans:"die",hint:"Tomate is feminine."},

  {type:"fb",s:"Ich kaufe ___ Bananen. (two bananas)",a:"zwei",opts:["zwei","drei","vier","eins"],hint:"The number 2 in German."},

  {type:"mc",q:"Das Gemüse refers to:",opts:["A single carrot","Vegetables as a category","A vegetable dish","A fruit salad"],ans:"Vegetables as a category",hint:"Gemüse is the collective word for all vegetables."},

  {type:"match",pairs:[{nl:"der Apfel",en:"the apple"},{nl:"die Banane",en:"the banana"},{nl:"die Tomate",en:"the tomato"},{nl:"die Zwiebel",en:"the onion"}]},

  {type:"mc",q:"Reif describes a banana that is:",opts:["Green and unripe","Yellow and ripe","Overripe and brown","Frozen"],ans:"Yellow and ripe",hint:"Reif = ripe. The opposite is unreif."},

  {type:"fb",s:"___ Kilo Tomaten, bitte. (one kilo)",a:"Ein",opts:["Ein","Zwei","Drei","Vier"],hint:"The number 1 before a measurement."},

  {type:"mc",q:"Which fruit or vegetable is MASCULINE (der)?",opts:["die Banane","die Gurke","der Apfel","die Tomate"],ans:"der Apfel",hint:"Check the article shown next to each word."},

  {type:"mc",q:"A Wochenmarkt typically happens:",opts:["Every evening","On weekdays only","Once a week, often Saturday","Every day at noon"],ans:"Once a week, often Saturday",hint:"Wochen = week. Markt = market."},

  {type:"fb",s:"Haben Sie frische ___? (cucumbers, plural)",a:"Gurken",opts:["Gurken","Äpfel","Bananen","Tomaten"],hint:"Plural of die Gurke."},

  {type:"mc",q:"Which of these fruits and vegetables is FEMININE (die)?",opts:["der Apfel","die Tomate","das Gemüse","das Obst"],ans:"die Tomate",hint:"Check the article shown with each word."},
]},

// ═══ L7: Schmeckt gut! ═══
{id:"deu4l7",title:"Schmeckt gut!",icon:"😋",xp:15,board:true,steps:[
  {type:"intro",title:"Schmeckt gut!",desc:"How do you describe what you taste? Learn the German words for flavors and opinions about food, and start expressing preferences.",goals:["6 taste and opinion words","Schmeckt and gern patterns","Express food preferences"]},

  {type:"teach",kind:"word",nl:"lecker",en:"delicious / yummy",phonetic:"LEK-er",example:"A: Wie ist die Suppe?\nB: Lecker! Sehr lecker!\nA: Das freut mich wirklich.",exampleEn:"A: How is the soup?\nB: Delicious! Very delicious!\nA: That really makes me happy.",note:"The most common positive food word in German.\nLecker alone = Yum! Very natural in any food context."},

  {type:"teach",kind:"word",nl:"süß",en:"sweet",phonetic:"züss",example:"A: Ist der Kuchen süß?\nB: Ja, sehr süß! Magst du Süßes?\nA: Natürlich!",exampleEn:"A: Is the cake sweet?\nB: Yes, very sweet! Do you like sweet things?\nA: Of course!",note:"ü umlaut: round lips and say ee.\nSüß also means cute in casual speech.\nSüßigkeiten = sweets or candy."},

  {type:"teach",kind:"word",nl:"salzig",en:"salty",phonetic:"ZAL-tsikh",example:"A: Wie sind die Chips?\nB: Zu salzig! Ich brauche Wasser.\nA: Hier!",exampleEn:"A: How are the chips?\nB: Too salty! I need water.\nA: Here!",note:"Salz = salt. Salzig = salty.\nZu salzig = too salty. Zu = too (excess)."},

  {type:"teach",kind:"word",nl:"scharf",en:"spicy / hot",phonetic:"shahrf",example:"A: Ist das Curry scharf?\nB: Ja, sehr scharf! Magst du scharf?\nA: Ja, ich liebe scharfes Essen!",exampleEn:"A: Is the curry spicy?\nB: Yes, very spicy! Do you like spicy?\nA: Yes, I love spicy food!",note:"Scharf = sharp or spicy in food context.\nAlso: scharf = sharp (knife), keen (eye).\nContext makes meaning clear."},

  {type:"teach",kind:"word",nl:"sauer",en:"sour / acidic",phonetic:"ZOW-er",cognate:{words:[{lang:"English",word:"sour"},{lang:"Dutch",word:"zuur"}],family:"germanic"},example:"A: Wie ist die Zitrone?\nB: Sauer! Sehr sauer.\nA: Das mag ich!",exampleEn:"A: How is the lemon?\nB: Sour! Very sour.\nA: I like that!",note:"Sauer = sour. Cognate with English sour.\nSauerkraut = sour cabbage (fermented). A German classic."},

  {type:"teach",kind:"word",nl:"bitter",en:"bitter",phonetic:"BIT-ter",cognate:{words:[{lang:"English",word:"bitter"},{lang:"Dutch",word:"bitter"}],family:"germanic"},example:"A: Magst du dunkle Schokolade?\nB: Nein, sie ist zu bitter.\nA: Ich liebe es bitter!",exampleEn:"A: Do you like dark chocolate?\nB: No, it is too bitter.\nA: I love it bitter!",note:"Bitter is identical in English and German.\nDunkle Schokolade = dark chocolate."},

  {type:"tip",title:"Schmeckt + Taste Description",text:"The key verb for food opinions:\n\nEs schmeckt gut. = It tastes good.\nEs schmeckt lecker. = It tastes delicious.\nEs schmeckt zu salzig. = It tastes too salty.\nEs schmeckt scharf. = It tastes spicy.\n\nPattern: Es schmeckt + adjective\n\nPersonal preference:\nIch mag süßes Essen. = I like sweet food.\nIch esse gern Fisch. = I like eating fish.\ngern with a verb = gladly = expressing liking.",deepDive:{title:"German food adjective patterns",text:"When an adjective follows a verb (predicate adjective), it does NOT change form:\nDas Essen ist lecker.\nDer Kuchen ist süß.\nDie Suppe ist salzig.\n\nWhen an adjective comes BEFORE a noun (attributive adjective), it DOES change:\nLeckeres Essen (neuter)\nSüßer Kuchen (masculine)\nSalzige Suppe (feminine)\n\nYou will study adjective endings formally in A2 and B1. For now, use the predicate form (after the verb). It always works in Es schmeckt... sentences."}},

  {type:"teach",kind:"phrase",nl:"Schmeckt es dir?",en:"Does it taste good to you?",phonetic:"shMEKT es deer",example:"A: Schmeckt es dir?\nB: Ja! Sehr lecker!\nA: Wunderbar!",exampleEn:"A: Does it taste good to you?\nB: Yes! Very delicious!\nA: Wonderful!",note:"Schmeckt es dir? = casual.\nSchmeckt es Ihnen? = formal.\nDir = dative of du. Pattern from Unit 1: Wie geht es dir."},

  {type:"mc",q:"The most common positive food word in German is:",opts:["gut","schön","lecker","nett"],ans:"lecker",hint:"The go-to word when food tastes good."},

  {type:"mc",q:"Zu salzig means:",opts:["A little salty","Very salty","Too salty","Not salty"],ans:"Too salty",hint:"Zu + adjective = too + adjective."},

  {type:"fb",s:"Es ___ sehr lecker! (It tastes very delicious!)",a:"schmeckt",opts:["schmeckt","ist","hat","mag"],hint:"The verb schmecken conjugated for es."},

  {type:"mc",q:"Scharf in a food context means:",opts:["Cold","Sweet","Spicy","Sour"],ans:"Spicy",hint:"Also means sharp in other contexts."},

  {type:"match",pairs:[{nl:"lecker",en:"delicious"},{nl:"süß",en:"sweet"},{nl:"salzig",en:"salty"},{nl:"scharf",en:"spicy"}]},

  {type:"mc",q:"Sauerkraut literally means:",opts:["Sour cabbage","Spicy herb","Bitter greens","Sweet pickles"],ans:"Sour cabbage",hint:"Sauer = sour. Kraut = herb or cabbage."},

  {type:"fb",s:"Ich esse gern ___. Das ist sehr lecker! (fish)",a:"Fisch",opts:["Fisch","Fleisch","Brot","Salat"],hint:"The masculine noun for fish, taught in L4."},

  {type:"mc",q:"Ich esse gern Fisch means:",opts:["I must eat fish","I dislike fish","I like eating fish","I always eat fish"],ans:"I like eating fish",hint:"Gern with a verb = gladly = expressing liking."},

  {type:"mc",q:"Schmeckt es Ihnen? is used when speaking to:",opts:["A child","A close friend","A formal adult","A classmate"],ans:"A formal adult",hint:"Ihnen is the formal dative of Sie."},

  {type:"fb",s:"Dunkle Schokolade ist ___. (bitter)",a:"bitter",opts:["bitter","süß","lecker","salzig"],hint:"Dark chocolate has a characteristically bitter taste."},
]},

// ═══ L8: Essen Review ═══
{id:"deu4l8",title:"Essen Review",icon:"🌟",xp:25,board:true,steps:[
  {type:"intro",title:"Essen Review",desc:"You have completed Unit 4! This lesson brings together all the food, drink, articles, restaurant phrases, and taste vocabulary you have learned.",goals:["Review all U4 food and drink","Practice der/die/das in context","Combine ordering and taste expressions"]},

  {type:"tip",title:"Unit 4 Summary",text:"You can now:\n\nDrinks: der Kaffee, der Tee, das Wasser, der Saft, das Bier, der Wein\nBreakfast: das Brot, die Butter, das Ei, die Marmelade, das Brötchen, der Käse\nLunch: die Suppe, der Salat, das Fleisch, der Fisch, die Kartoffel, der Reis\nFruits/Veg: der Apfel, die Banane, die Tomate, die Gurke, die Zwiebel\nTaste: lecker, süß, salzig, scharf, sauer, bitter\nOrder: Ich möchte, Ich hätte gern, Die Rechnung bitte\nArticles: der (m/blue), die (f/coral), das (n/purple)",deepDive:{title:"Your first German restaurant conversation",text:"You now have the full toolkit for ordering food in German:\n\nA: Guten Abend! Ich hätte gern die Speisekarte.\nB: Hier bitte!\nA: Danke. Ich möchte die Suppe und dann den Lachs.\nB: Sehr gut. Und zu trinken?\nA: Ein Wasser, bitte. Stilles Wasser.\nB: Natürlich!\n(after eating)\nA: Das hat sehr gut geschmeckt! Die Rechnung, bitte.\nB: Sofort! Zusammen oder getrennt?\nA: Zusammen, bitte.\n\nRead this out loud. Every word came from Unit 4."}},

  {type:"mc",q:"What is the article for Bier?",opts:["der","die","das","ein"],ans:"das",hint:"Beer is neuter."},

  {type:"mc",q:"What is the article for Suppe?",opts:["der","das","die","ein"],ans:"die",hint:"Soup is feminine."},

  {type:"fb",s:"Ich ___ gern einen Kaffee. (I would like...)",a:"möchte",opts:["möchte","bin","habe","mache"],hint:"Polite ordering verb."},

  {type:"mc",q:"The -chen suffix rule means das Brötchen is:",opts:["masculine","feminine","neuter","unpredictable"],ans:"neuter",hint:"-chen endings are ALWAYS neuter."},

  {type:"match",pairs:[{nl:"lecker",en:"delicious"},{nl:"scharf",en:"spicy"},{nl:"sauer",en:"sour"},{nl:"bitter",en:"bitter"}]},

  {type:"mc",q:"Die Rechnung, bitte is said when:",opts:["You want the menu","You arrive at the restaurant","You want to pay and leave","You need more water"],ans:"You want to pay and leave",hint:"Rechnung = bill."},

  {type:"fb",s:"Der Salat ist frisch. Er schmeckt ___.",a:"gut",opts:["gut","salzig","scharf","sauer"],hint:"If it is fresh and good, it tastes..."},

  {type:"mc",q:"Which food has a masculine article (der)?",opts:["das Fleisch","die Kartoffel","der Fisch","die Tomate"],ans:"der Fisch",hint:"Find the masculine article."},

  {type:"mc",q:"Ich hätte gern is more formal than:",opts:["Ich will","Ich möchte","Bitte geben","Ich brauche"],ans:"Ich möchte",hint:"Hätte gern is the most polite ordering form."},

  {type:"fb",s:"___ Apfel, bitte. (one apple, masculine accusative)",a:"Einen",opts:["Einen","Eine","Ein","Der"],hint:"Masculine accusative indefinite article: ein becomes einen."},

  {type:"mc",q:"Obst and Gemüse both take the article:",opts:["der","die","das","kein"],ans:"das",hint:"Both category words are neuter."},

  {type:"mc",q:"Zu süß means:",opts:["A little sweet","Too sweet","Not sweet","Very sweet"],ans:"Too sweet",hint:"Zu + adjective = too + adjective."},

  {type:"match",pairs:[{nl:"das Brot",en:"the bread"},{nl:"der Reis",en:"the rice"},{nl:"das Ei",en:"the egg"},{nl:"die Butter",en:"the butter"}]},

  {type:"mc",q:"Stimmt so when paying in a restaurant means:",opts:["That is correct, I need change","Keep the change","Can I pay by card?","The bill is wrong"],ans:"Keep the change",hint:"German tipping custom: tell the waiter to keep the rest."},

  {type:"fb",s:"Haben Sie ___? Ich bin Vegetarierin. (vegetarian dishes)",a:"vegetarische Gerichte",opts:["vegetarische Gerichte","Fleischgerichte","Fischgerichte","Tagessuppe"],hint:"Asking for vegetarian options."},

  {type:"mc",q:"Which drink pair both have der as their article?",opts:["Wasser und Bier","Kaffee und Tee","Bier und Saft","Tee und Wasser"],ans:"Kaffee und Tee",hint:"Both hot drinks from L1 were masculine."},
]},

]},

// ══════════════════════════════════════════════════════════════════════════
// UNIT 5: Mein Tag — Daily Routine & Time
// ══════════════════════════════════════════════════════════════════════════
{n:5,lang:"de",track:"v1",title:"Mein Tag",sub:"Daily Routine & Time",icon:"⏰",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Wie spät ist es? ═══
{id:"deu5l1",title:"Wie spät ist es?",icon:"🕐",xp:15,board:true,steps:[
  {type:"intro",title:"Wie spät ist es?",desc:"Germans run on time. Telling time is one of the most practical skills you can learn. By the end of this lesson you will read any clock and ask and answer time questions naturally.",goals:["Ask what time it is","Give the full hour and half hour","Use Viertel vor and Viertel nach","Read digital time"]},
  {type:"teach",kind:"phrase",nl:"Wie spät ist es?",en:"What time is it?",phonetic:"VEE shpayt ist ess",example:"A: Entschuldigung, wie spät ist es?\nB: Es ist drei Uhr.\nA: Danke schön!",exampleEn:"A: Excuse me, what time is it?\nB: It is three o'clock.\nA: Thank you very much!",note:"Literally: How late is it?\nSpät = late. Use this phrase every time you ask the time."},
  {type:"teach",kind:"phrase",nl:"Wie viel Uhr ist es?",en:"What time is it? (alternate form)",phonetic:"VEE feel OOR ist ess",example:"A: Wie viel Uhr ist es jetzt?\nB: Es ist halb neun.\nA: Oh, ich muss gehen!",exampleEn:"A: What time is it now?\nB: It is half past eight.\nA: Oh, I have to go!",note:"Both questions are equally common.\nUhr = clock. Jetzt = now."},
  {type:"teach",kind:"phrase",nl:"Es ist ... Uhr",en:"It is ... o'clock",phonetic:"ess ist ... OOR",example:"A: Wann fängt der Film an?\nB: Um acht Uhr.\nA: Dann haben wir noch Zeit.",exampleEn:"A: When does the film start?\nB: At eight o'clock.\nA: Then we still have time.",note:"Um ... Uhr = at ... o'clock (for specific times).\nEs ist = It is."},
  {type:"tip",title:"Full Hours: Es ist ... Uhr",text:"For full hours, state the number followed by Uhr:\n\nEs ist ein Uhr. (1:00)\nEs ist zwei Uhr. (2:00)\nEs ist zehn Uhr. (10:00)\nEs ist zwölf Uhr. (12:00)\n\nNote: alone, 1:00 is said as 'eins'. With Uhr, say 'ein Uhr'.",deepDive:{title:"12-hour vs 24-hour time",text:"In everyday speech Germans use the 12-hour clock. On timetables and schedules the 24-hour clock is standard. 'Der Zug fährt um 14:30 ab' is normal written German. In speech you would say 'halb drei nachmittags'. Both systems are worth learning."}},
  {type:"teach",kind:"phrase",nl:"halb ...",en:"half past ... (the PREVIOUS hour)",phonetic:"HALP",example:"A: Wann essen wir?\nB: Um halb zwei.\nA: Gut, ich bin pünktlich da.",exampleEn:"A: When do we eat?\nB: At half past one.\nA: Good, I will be there on time.",note:"Halb = half. BUT: halb zwei = 1:30, not 2:30!\nGerman halb counts toward the NEXT hour."},
  {type:"tip",title:"The Halb Trap",text:"German halb is halfway TO the next hour, not past the last:\n\nhalb zwei = 1:30 (halfway to 2)\nhalb sieben = 6:30 (halfway to 7)\nhalb zwölf = 11:30 (halfway to 12)\n\nEnglish 'half past one' = German 'halb zwei'.\nThis trips up almost every learner. Lock this in early.",deepDive:{title:"Why does German count toward the next hour?",text:"Rather than saying 'half past one', German speakers historically thought of the half-hour as 'half of the journey to two'. The same pattern appears in Dutch (half twee = 1:30) and some other Germanic languages. Just internalize the rule: halb + the NEXT hour."}},
  {type:"teach",kind:"phrase",nl:"Viertel nach ...",en:"quarter past ...",phonetic:"FEER-tel nakh",example:"A: Wie spät ist es?\nB: Viertel nach drei.\nA: Oh, schon so spät!",exampleEn:"A: What time is it?\nB: Quarter past three.\nA: Oh, that late already!",note:"Viertel = quarter. Nach = after/past.\nViertel nach drei = 3:15."},
  {type:"teach",kind:"phrase",nl:"Viertel vor ...",en:"quarter to ...",phonetic:"FEER-tel FOR",example:"A: Viertel vor fünf! Wir müssen losfahren!\nB: Ja, gleich bin ich fertig.\nA: Beeil dich!",exampleEn:"A: Quarter to five. We have to leave!\nB: Yes, I am almost ready.\nA: Hurry up!",note:"Vor = before/to. Viertel vor fünf = 4:45.\nCounts toward the next hour like halb."},
  {type:"mc",q:"Es ist halb sieben. In English this is:",opts:["7:30","6:00","6:30","7:00"],ans:"6:30",hint:"Halb counts toward the NEXT hour. Halb sieben = halfway to seven."},
  {type:"mc",q:"How do you say 3:15 in German?",opts:["Viertel vor drei","Halb vier","Viertel nach drei","Es ist drei halb"],ans:"Viertel nach drei",hint:"15 minutes past three. Nach = after/past."},
  {type:"mc",q:"Viertel vor acht means:",opts:["8:15","7:45","8:45","7:15"],ans:"7:45",hint:"Vor = before/to. Fifteen minutes before eight."},
  {type:"fb",s:"Es ist ___ drei. (It is 2:30.)",a:"halb",opts:["halb","Viertel","nach","vor"],hint:"2:30 = halfway toward the hour of three."},
  {type:"mc",q:"It is 10:00. You say:",opts:["Es ist halb zehn.","Es ist zehn Uhr.","Es ist Viertel nach zehn.","Es ist Viertel vor zehn."],ans:"Es ist zehn Uhr.",hint:"Full hours: number + Uhr, nothing extra needed."},
  {type:"teach",kind:"phrase",nl:"Um wie viel Uhr...?",en:"At what time...?",phonetic:"OOM vee feel OOR",example:"A: Um wie viel Uhr beginnt die Stunde?\nB: Um Viertel nach neun.\nA: Perfekt, ich bin rechtzeitig da.",exampleEn:"A: At what time does the lesson begin?\nB: At quarter past nine.\nA: Perfect, I will be there in time.",note:"Use Um wie viel Uhr to ask about scheduled times.\nUm = at (for clock times)."},
  {type:"match",pairs:[{nl:"Wie spät ist es?",en:"What time is it?"},{nl:"Es ist halb zwei.",en:"It is 1:30."},{nl:"Viertel nach fünf",en:"5:15"},{nl:"Viertel vor neun",en:"8:45"}]},
  {type:"mc",q:"You must catch a train at 7:30. In German: the train goes 'um':",opts:["um sieben Uhr","um halb sieben","um halb acht","um Viertel vor sieben"],ans:"um halb acht",hint:"7:30 = halfway to eight. Halb + next hour."},
  {type:"fb",s:"___ ist es? Es ist Viertel nach zwölf.",a:"Wie spät",opts:["Wie spät","Wie viel","Wann geht","Um wie viel"],hint:"Asking what time it is: ___ ist es?"},
  {type:"mc",q:"In German time-telling, halb refers to:",opts:["Half past the current hour","Half toward the next hour","Half a day","Thirty seconds"],ans:"Half toward the next hour",hint:"Halb zwei is 1:30, not 2:30."},
]},

// ═══ L2: Am Morgen ═══
{id:"deu5l2",title:"Am Morgen",icon:"🌅",xp:15,board:true,steps:[
  {type:"intro",title:"Am Morgen",desc:"What does a German morning look like? Wake up, shower, dress, eat breakfast, head out. This lesson teaches the verbs and vocabulary for your morning routine.",goals:["Name 6 morning routine verbs","Describe your morning in German","Use reflexive sich with anziehen","Understand separable prefix verbs"]},
  {type:"teach",kind:"word",nl:"aufstehen",en:"to get up",phonetic:"OWF-shtay-en",example:"A: Wann stehst du morgens auf?\nB: Ich stehe um sieben Uhr auf.\nA: Das ist früh!",exampleEn:"A: When do you get up in the morning?\nB: I get up at seven o'clock.\nA: That is early!",note:"SEPARABLE: auf + stehen.\nIn main clauses: Ich stehe auf. (auf moves to end)\nPrefix auf = up."},
  {type:"tip",title:"Separable Verbs: First Look",text:"Some German verbs have a detachable prefix that jumps to the end:\n\naufstehen (to get up):\n  Ich stehe um 7 Uhr auf.\n\nThe base verb conjugates normally.\nThe prefix (auf) goes to the very end.\nYou will study the full pattern in Lesson 3.",deepDive:{title:"Why do prefixes detach?",text:"German separable verbs come from old compounds. The prefix carries specific meaning (auf = up, an = on, ein = in/into). The base verb provides the action. In a main clause, the prefix always travels to the end. In an infinitive, they rejoin: Ich muss aufstehen (I have to get up)."}},
  {type:"teach",kind:"word",nl:"duschen",en:"to shower",phonetic:"DOO-shen",example:"A: Duschst du morgens oder abends?\nB: Ich dusche immer morgens.\nA: Ich auch. Das wacht mich auf!",exampleEn:"A: Do you shower in the morning or evening?\nB: I always shower in the morning.\nA: Me too. It wakes me up!",note:"Regular verb, no separable prefix.\ndie Dusche = the shower (feminine)."},
  {type:"teach",kind:"word",nl:"sich anziehen",en:"to get dressed",phonetic:"zikh AN-tsee-en",example:"A: Wie lange brauchst du, um dich anzuziehen?\nB: Etwa zehn Minuten.\nA: Ich brauche zwanzig!",exampleEn:"A: How long do you need to get dressed?\nB: About ten minutes.\nA: I need twenty!",note:"Reflexive + separable: sich an|ziehen.\nIch ziehe mich an. (I get dressed.)\nSich = oneself. An = on (clothing)."},
  {type:"teach",kind:"word",nl:"frühstücken",en:"to have breakfast",phonetic:"FROO-shtoo-ken",example:"A: Frühstückst du jeden Morgen?\nB: Ja, ich frühstücke um halb acht.\nA: Was isst du zum Frühstück?",exampleEn:"A: Do you have breakfast every morning?\nB: Yes, I have breakfast at half past seven.\nA: What do you eat for breakfast?",note:"das Frühstück = breakfast (noun).\nFrüh = early. Regular verb, no prefix."},
  {type:"teach",kind:"phrase",nl:"das Frühstück",en:"breakfast",phonetic:"FROO-shtook",example:"A: Was gibt es zum Frühstück?\nB: Brot, Käse und Kaffee.\nA: Lecker!",exampleEn:"A: What is there for breakfast?\nB: Bread, cheese and coffee.\nA: Delicious!",note:"Zum Frühstück = for breakfast.\nDas = neuter article."},
  {type:"teach",kind:"word",nl:"losfahren",en:"to set off / leave by vehicle",phonetic:"LOSS-fah-ren",example:"A: Wann fährst du los?\nB: Ich fahre um acht Uhr los.\nA: Dann bis später!",exampleEn:"A: When do you set off?\nB: I leave at eight o'clock.\nA: See you later then!",note:"SEPARABLE: los + fahren.\nLos = off/away. Ich fahre los.\nUsed for leaving by car, bus, bike."},
  {type:"teach",kind:"word",nl:"der Wecker",en:"the alarm clock",phonetic:"VEK-er",cognate:{words:[{lang:"English",word:"to wake (wecken)"}],family:"germanic"},example:"A: Mein Wecker klingelt um sechs Uhr.\nB: Das ist zu früh für mich!\nA: Ich muss früh aufstehen.",exampleEn:"A: My alarm clock rings at six o'clock.\nB: That is too early for me!\nA: I have to get up early.",note:"Der Wecker (masculine).\nKlingeln = to ring. Der Wecker klingelt.\nWecken = to wake someone up."},
  {type:"mc",q:"'Ich stehe um sieben Uhr auf.' Why is 'auf' at the end?",opts:["It is an adjective","It is a separable verb prefix","It is a preposition","Auf always comes last"],ans:"It is a separable verb prefix",hint:"Aufstehen is separable. Prefix jumps to end in main clauses."},
  {type:"mc",q:"Which word means 'to have breakfast'?",opts:["aufstehen","frühstücken","duschen","losfahren"],ans:"frühstücken",hint:"Das Frühstück = breakfast. The verb adds -en."},
  {type:"fb",s:"Ich ___ um halb sieben ___. (I get up at 6:30.)",a:"stehe",opts:["stehe","steh","aufstehe","aufstehen"],hint:"Aufstehen is separable. The prefix auf goes to the end. (First blank only)"},
  {type:"mc",q:"'Sich anziehen' contains 'sich' because:",opts:["The verb is irregular","The action is done to oneself","It is a separable verb","Sich means very"],ans:"The action is done to oneself",hint:"Sich = oneself. Reflexive verbs describe actions you do to yourself."},
  {type:"match",pairs:[{nl:"aufstehen",en:"to get up"},{nl:"duschen",en:"to shower"},{nl:"frühstücken",en:"to have breakfast"},{nl:"losfahren",en:"to set off"}]},
  {type:"mc",q:"Der Wecker klingelt. What happens next in the routine?",opts:["Du gehst schlafen.","Du stehst auf.","Du isst Mittagessen.","Du kommst nach Hause."],ans:"Du stehst auf.",hint:"The alarm rings. So you..."},
  {type:"fb",s:"Jeden Morgen ___ ich und dann esse ich Frühstück.",a:"dusche",opts:["dusche","duschen","frühstücke","aufstehe"],hint:"Showering is done first. Regular verb, no prefix."},
  {type:"mc",q:"'Zahnbürste' literally combines which two German words?",opts:["Morning + brush","Tooth + brush","Clean + stick","Wash + tool"],ans:"Tooth + brush",hint:"Zahn = tooth. Bürste = brush."},
  {type:"mc",q:"'Ich ziehe mich an.' means:",opts:["I get undressed.","I get dressed.","I am ready to leave.","I put on a coat."],ans:"I get dressed.",hint:"Sich anziehen = to get dressed. An = on (clothing onto body)."},
  {type:"mc",q:"Losfahren is used when leaving by:",opts:["Foot","Vehicle","Elevator","Train only"],ans:"Vehicle",hint:"Fahren = to drive/travel. Los = off/away. Used for transport."},
]},

// ═══ L3: Trennbare Verben ═══
{id:"deu5l3",title:"Trennbare Verben",icon:"✂️",xp:15,board:true,steps:[
  {type:"intro",title:"Trennbare Verben",desc:"Separable verbs are one of German's core building blocks. Learn the pattern once and it applies to hundreds of verbs for life.",goals:["Understand how separable verbs work","Conjugate 6 key separable verbs","Know where the prefix goes","Use separable verbs in sentences"]},
  {type:"tip",title:"Separable Verbs: The Full Pattern",text:"A separable verb = prefix + base verb.\nIn a main clause, prefix goes to the END:\n\naufstehen: Ich stehe um 7 Uhr auf.\nanfangen: Der Kurs fängt um 9 an.\neinkaufen: Ich kaufe heute ein.\n\nBase verb stays in position 2 (V2 rule).\nPrefix is the last word in the sentence.",deepDive:{title:"Separable vs inseparable prefixes",text:"Not all German verb prefixes separate. Inseparable prefixes (be-, ge-, er-, ver-, ent-, zer-, miss-) NEVER detach: 'Ich verstehe dich' (I understand you).\n\nSeparable prefixes are usually standalone directional words: auf (up), an (on), ein (in), aus (out), ab (off), mit (with), vor (before), nach (after), zu (closed).\n\nIf the prefix can stand alone as a word with meaning, it is likely separable."}},
  {type:"teach",kind:"word",nl:"anfangen",en:"to start / begin",phonetic:"AN-fang-en",example:"A: Wann fängt die Schule an?\nB: Sie fängt um halb neun an.\nA: Dann müssen wir jetzt gehen.",exampleEn:"A: When does school start?\nB: It starts at half past eight.\nA: Then we have to go now.",note:"SEPARABLE: an + fangen.\nIch fange an. Du fängst an. Es fängt an.\nStem-changing: fangen -> fängt (3rd sg)."},
  {type:"teach",kind:"word",nl:"aufhören",en:"to stop / finish",phonetic:"OWF-hör-en",example:"A: Wann hörst du heute mit der Arbeit auf?\nB: Ich höre um fünf auf.\nA: Dann gehen wir danach essen?",exampleEn:"A: When do you finish work today?\nB: I finish at five.\nA: Then shall we eat afterwards?",note:"SEPARABLE: auf + hören.\nHören = to hear. Aufhören = to stop.\nIch höre auf. Opposite of anfangen."},
  {type:"teach",kind:"word",nl:"einkaufen",en:"to go shopping",phonetic:"INE-kow-fen",example:"A: Was machst du heute Nachmittag?\nB: Ich kaufe ein. Wir brauchen Brot und Milch.\nA: Kann ich mitkommen?",exampleEn:"A: What are you doing this afternoon?\nB: I am going shopping. We need bread and milk.\nA: Can I come along?",note:"SEPARABLE: ein + kaufen.\nEin = in/into. Kaufen = to buy.\nIch kaufe ein. Also: Ich gehe einkaufen."},
  {type:"teach",kind:"word",nl:"anrufen",en:"to call / phone someone",phonetic:"AN-roo-fen",example:"A: Ich rufe dich heute Abend an.\nB: Super! Wann rufst du an?\nA: So gegen acht Uhr.",exampleEn:"A: I will call you this evening.\nB: Great! When will you call?\nA: Around eight o'clock.",note:"SEPARABLE: an + rufen.\nRufen = to call out. Anrufen = to telephone.\nIch rufe an. Object before prefix: Ich rufe dich an."},
  {type:"teach",kind:"word",nl:"abfahren",en:"to depart / leave (transport)",phonetic:"AP-fah-ren",example:"A: Wann fährt der Zug ab?\nB: Er fährt um zehn nach neun ab.\nA: Dann haben wir noch zehn Minuten.",exampleEn:"A: When does the train depart?\nB: It departs at ten past nine.\nA: Then we have ten more minutes.",note:"SEPARABLE: ab + fahren.\nAb = off/away. Fahren = to drive/travel.\nIch fahre ab. Er fährt ab (stem change)."},
  {type:"teach",kind:"word",nl:"mitkommen",en:"to come along",phonetic:"MIT-kom-en",example:"A: Wir gehen zum Supermarkt. Kommst du mit?\nB: Ja, ich komme mit!\nA: Super, dann gehen wir.",exampleEn:"A: We are going to the supermarket. Are you coming along?\nB: Yes, I am coming along!\nA: Great, let's go.",note:"SEPARABLE: mit + kommen.\nMit = with/along. Ich komme mit.\nCommonly used in invitations."},
  {type:"mc",q:"'Ich kaufe heute Gemüse ein.' The word 'ein' is at the end because:",opts:["It is an article","Einkaufen is separable: prefix goes last","Gemüse is neuter","Ein always ends sentences"],ans:"Einkaufen is separable: prefix goes last",hint:"Ein is the separable prefix of einkaufen."},
  {type:"fb",s:"Wann ___ der Zug ___? (When does the train depart?)",a:"fährt",opts:["fährt","fahrt","geht","fähren"],hint:"Abfahren separable: conjugated base verb in position 2. (First blank only)"},
  {type:"mc",q:"Which of these is a separable verb?",opts:["verstehen","beginnen","einkaufen","erklären"],ans:"einkaufen",hint:"Separable prefixes are independent words. Ein- can stand alone."},
  {type:"mc",q:"'Ich fange um neun Uhr an.' Rearranged starting with the time: 'Um neun Uhr ___':",opts:["ich an fange","fange ich an","an fange ich","ich fange an"],ans:"fange ich an",hint:"V2 rule: verb in second position. Prefix still at end."},
  {type:"match",pairs:[{nl:"anfangen",en:"to start"},{nl:"aufhören",en:"to stop"},{nl:"anrufen",en:"to phone"},{nl:"mitkommen",en:"to come along"}]},
  {type:"mc",q:"'Ich rufe meine Mutter an.' The object 'meine Mutter' comes before 'an' because:",opts:["Objects go between verb and prefix","An is an adjective here","The verb is irregular","Meine Mutter is the subject"],ans:"Objects go between verb and prefix",hint:"In separable verb sentences, objects fill the space before the prefix."},
  {type:"drag_fill",s:"Der Unterricht {1} um neun Uhr {2}. Wann {3} ihr mit der Hausaufgabe {4}?",blanks:{"1":"fängt","2":"an","3":"hört","4":"auf"},pool:["fängt","an","hört","auf","fangen","stehen"],hint:"Two separable verbs: anfangen and aufhören. Each prefix goes last."},
  {type:"mc",q:"To say 'I am going shopping' (action in progress), you say:",opts:["Ich kaufe ein.","Ich gehe einkaufen.","Ich einkaufe.","Ich kaufe gehe ein."],ans:"Ich gehe einkaufen.",hint:"Gehen + infinitive = going to do something. Infinitive stays whole."},
  {type:"fb",s:"Kommst du ___? Wir gehen jetzt los.",a:"mit",opts:["mit","an","auf","ein"],hint:"Which prefix means along/with? From mitkommen."},
  {type:"mc",q:"In 'Er fährt um zehn Uhr ab', the word 'ab' is:",opts:["An adjective meaning gone","The separable prefix of abfahren","A preposition meaning from","An adverb meaning off"],ans:"The separable prefix of abfahren",hint:"Abfahren = to depart. The prefix ab detaches to end position."},
  {type:"mc",q:"Which prefix means 'to stop' when added to hören?",opts:["an","ein","auf","ab"],ans:"auf",hint:"Aufhören = to stop. Auf + hören."},
]},

// ═══ L4: Am Nachmittag ═══
{id:"deu5l4",title:"Am Nachmittag",icon:"☀️",xp:15,board:true,steps:[
  {type:"intro",title:"Am Nachmittag",desc:"Afternoons in Germany are busy with work, school, and errands. This lesson covers afternoon activities, work and study verbs, and useful time connectors.",goals:["Describe afternoon activities","Use arbeiten and lernen","Talk about lunch and errands","Use danach, dann, später"]},
  {type:"teach",kind:"word",nl:"arbeiten",en:"to work",phonetic:"AR-by-ten",example:"A: Arbeitest du heute?\nB: Ja, ich arbeite bis fünf Uhr.\nA: Und danach?",exampleEn:"A: Are you working today?\nB: Yes, I work until five o'clock.\nA: And afterwards?",note:"Regular verb: arbeite, arbeitest, arbeitet.\nDie Arbeit = work (noun). Das Büro = the office."},
  {type:"teach",kind:"phrase",nl:"das Mittagessen",en:"lunch",phonetic:"MIT-tahk-ess-en",example:"A: Was gibt es zum Mittagessen?\nB: Wir haben Nudeln mit Tomatensoße.\nA: Lecker! Wann essen wir?",exampleEn:"A: What is there for lunch?\nB: We have pasta with tomato sauce.\nA: Delicious! When do we eat?",note:"Mittag = midday. Essen = meal.\nZum Mittagessen = for lunch. Das (neuter)."},
  {type:"teach",kind:"word",nl:"lernen",en:"to learn / study",phonetic:"LAIR-nen",cognate:{words:[{lang:"English",word:"learn"},{lang:"Dutch",word:"leren"}],family:"germanic"},example:"A: Was lernst du gerade?\nB: Ich lerne Deutsch und Mathe.\nA: Das ist viel!",exampleEn:"A: What are you learning right now?\nB: I am learning German and Maths.\nA: That is a lot!",note:"Regular verb. Lernen = to learn school material.\nStudieren = to study at university.\nIch lerne Deutsch = I am learning German."},
  {type:"teach",kind:"phrase",nl:"die Hausaufgaben",en:"homework",phonetic:"HOWS-owf-gah-ben",example:"A: Machst du jetzt deine Hausaufgaben?\nB: Ja, Mathe und Englisch.\nA: Ich helfe dir, wenn du willst.",exampleEn:"A: Are you doing your homework now?\nB: Yes, maths and English.\nA: I will help you if you want.",note:"Haus = house. Aufgaben = tasks.\nAlways plural in German.\nHausaufgaben machen = to do homework."},
  {type:"teach",kind:"word",nl:"die Pause",en:"the break",phonetic:"POW-zeh",cognate:{words:[{lang:"English",word:"pause"},{lang:"Dutch",word:"pauze"}],family:"borrowed"},example:"A: Wann hast du Pause?\nB: Um halb eins, für dreißig Minuten.\nA: Treffen wir uns dann?",exampleEn:"A: When do you have your break?\nB: At half twelve, for thirty minutes.\nA: Shall we meet up then?",note:"Die Pause (feminine). Eine Pause machen = to take a break.\nCognate via Latin pausa."},
  {type:"tip",title:"Afternoon Time Connectors",text:"Connect activities in sequence:\n\ndann = then (in a plan or narrative)\ndanach = afterwards (after a completed event)\nzuerst = first\nspäter = later\ngleich = right away / in a moment\njetzt = now\nnoch = still / yet\n\nExample: Zuerst esse ich Mittagessen, dann mache ich Hausaufgaben.",deepDive:{title:"Dann vs danach",text:"Both mean then/afterwards but with different focus. Dann is about sequence: first this, then that. Danach emphasizes after a completed event: I finished eating. Afterwards, I did homework. In spoken German, dann is more common. Danach sounds slightly more formal."}},
  {type:"teach",kind:"word",nl:"erledigen",en:"to take care of / get done",phonetic:"er-LAY-dig-en",example:"A: Was musst du heute noch erledigen?\nB: Ich muss einkaufen und die Bank anrufen.\nA: Das klingt stressig.",exampleEn:"A: What do you still need to get done today?\nB: I have to go shopping and call the bank.\nA: That sounds stressful.",note:"Ich erledige das. = I will take care of that.\nCommon in work and daily life. Practical, not casual."},
  {type:"teach",kind:"word",nl:"spazieren gehen",en:"to go for a walk",phonetic:"shpa-TSEE-ren GAY-en",example:"A: Was machst du nach der Arbeit?\nB: Ich gehe spazieren.\nA: Das ist gut für den Kopf!",exampleEn:"A: What do you do after work?\nB: I go for a walk.\nA: That is good for the mind!",note:"Gehen + infinitive. Ich gehe spazieren.\nCommon afternoon and evening activity in Germany."},
  {type:"mc",q:"'Ich arbeite bis fünf Uhr.' 'Bis' means:",opts:["from","at","until","for"],ans:"until",hint:"Bis = until. Common with time expressions."},
  {type:"mc",q:"Hausaufgaben always appears in which grammatical form?",opts:["Singular","Plural","Both forms","Only with machen"],ans:"Plural",hint:"Aufgaben is already plural (tasks). Hausaufgaben is always plural."},
  {type:"fb",s:"Zuerst ___ ich Mittagessen, danach mache ich Hausaufgaben.",a:"esse",opts:["esse","essen","koche","isst"],hint:"Essen is irregular: ich esse (I eat)."},
  {type:"mc",q:"Which verb means 'to study at university' in German?",opts:["lernen","arbeiten","studieren","wissen"],ans:"studieren",hint:"Lernen = school learning. Studieren = university study."},
  {type:"match",pairs:[{nl:"arbeiten",en:"to work"},{nl:"lernen",en:"to learn"},{nl:"die Pause",en:"the break"},{nl:"spazieren gehen",en:"to go for a walk"}]},
  {type:"mc",q:"'Dann' and 'danach' both mean then/afterwards but:",opts:["They are completely interchangeable","Danach emphasizes after a completed event","Dann is more formal","Danach is only for morning use"],ans:"Danach emphasizes after a completed event",hint:"Dann = sequence in plan. Danach = after a finished action."},
  {type:"drag_fill",s:"Zuerst {1} ich in der Schule, dann {2} ich Mittagessen, und danach {3} ich meine Hausaufgaben.",blanks:{"1":"lerne","2":"esse","3":"mache"},pool:["lerne","lernst","esse","essen","mache","macht"],hint:"Three afternoon activities in sequence: learn, eat, do homework."},
  {type:"mc",q:"'Wir haben Nudeln zum Mittagessen.' 'Zum' here means:",opts:["for the","with","at the","from"],ans:"for the",hint:"Zu + dem = zum. Zum Mittagessen = for lunch."},
  {type:"fb",s:"Ich muss heute noch viele Dinge ___. (I have to get many things done.)",a:"erledigen",opts:["erledigen","arbeiten","lernen","kaufen"],hint:"To take care of / get done. Starts with er-."},
  {type:"mc",q:"A typical German afternoon sequence is:",opts:["Hausaufgaben, dann Mittagessen, dann Frühstück","Mittagessen, dann Pause, dann Hausaufgaben","Frühstück, dann Abendessen, dann Hausaufgaben","Schlafen, dann Mittagessen, dann Arbeit"],ans:"Mittagessen, dann Pause, dann Hausaufgaben",hint:"After the midday meal: break, then study or work tasks."},
]},

// ═══ L5: Am Abend ═══
{id:"deu5l5",title:"Am Abend",icon:"🌙",xp:15,board:true,steps:[
  {type:"intro",title:"Am Abend",desc:"Evening is when Germans relax, cook, watch TV, or read. This lesson covers evening vocabulary, kitchen verbs, and how to talk about winding down.",goals:["Name 5 evening activities","Use kochen and fernsehen","Describe your evening routine","Use ins Bett gehen naturally"]},
  {type:"teach",kind:"word",nl:"kochen",en:"to cook",phonetic:"KOH-khen",example:"A: Kochst du heute Abend?\nB: Ja, ich koche Suppe.\nA: Das riecht schon gut!",exampleEn:"A: Are you cooking tonight?\nB: Yes, I am making soup.\nA: That already smells good!",note:"Regular verb: koche, kochst, kocht.\nDer Koch = the cook (masculine).\nDie Küche = the kitchen."},
  {type:"teach",kind:"word",nl:"fernsehen",en:"to watch TV",phonetic:"FERN-zay-en",example:"A: Was machst du heute Abend?\nB: Ich sehe fern. Es gibt eine gute Serie.\nA: Welcher Sender?",exampleEn:"A: What are you doing tonight?\nB: I am watching TV. There is a good series.\nA: Which channel?",note:"SEPARABLE: fern + sehen.\nIch sehe fern. (fern goes to end)\nDer Fernseher = the television set."},
  {type:"teach",kind:"word",nl:"lesen",en:"to read",phonetic:"LAY-zen",cognate:{words:[{lang:"Dutch",word:"lezen"}],family:"germanic"},example:"A: Liest du gern?\nB: Ja, ich lese jeden Abend.\nA: Was liest du gerade?",exampleEn:"A: Do you like reading?\nB: Yes, I read every evening.\nA: What are you reading right now?",note:"STEM-CHANGING: lesen -> liest (2nd/3rd sg).\nIch lese, du liest, er/sie liest.\nGern lesen = to like reading."},
  {type:"teach",kind:"phrase",nl:"ins Bett gehen",en:"to go to bed",phonetic:"ins BET gay-en",example:"A: Wann gehst du ins Bett?\nB: Meistens um elf Uhr.\nA: Ich auch, manchmal später.",exampleEn:"A: When do you go to bed?\nB: Usually at eleven o'clock.\nA: Me too, sometimes later.",note:"Ins = in das (into the).\nDas Bett = the bed.\nIns Bett gehen = go into the bed."},
  {type:"teach",kind:"word",nl:"sich entspannen",en:"to relax",phonetic:"zikh ent-SHPAN-en",example:"A: Wie entspannst du dich nach der Arbeit?\nB: Ich lese oder höre Musik.\nA: Das klingt gut.",exampleEn:"A: How do you relax after work?\nB: I read or listen to music.\nA: That sounds good.",note:"Reflexive verb: sich entspannen.\nIch entspanne mich. Du entspannst dich.\nEnt- is inseparable, so the verb does NOT split."},
  {type:"teach",kind:"phrase",nl:"das Abendessen",en:"dinner / supper",phonetic:"AH-bent-ess-en",example:"A: Was gibt es zum Abendessen?\nB: Brot, Käse und Salat.\nA: Ein typisch deutsches Abendessen!",exampleEn:"A: What is there for dinner?\nB: Bread, cheese and salad.\nA: A typically German dinner!",note:"Abend = evening. Essen = meal.\nDas (neuter). Zum Abendessen = for dinner.\nGerman dinner is often cold: Brot, Käse, Wurst."},
  {type:"tip",title:"Abendbrot: Germany's Cold Dinner",text:"In many German households the hot meal is Mittagessen (lunch), not dinner. Abendessen is often cold: bread, cold cuts, cheese.\n\nThis is called Abendbrot (evening bread).\n\nModern families with working parents now often eat hot dinners too. But Abendbrot is a living cultural tradition.",deepDive:{title:"Why cold dinner?",text:"Abendbrot comes from times when the main hot meal was cooked at midday while the family was home. The evening meal was simple: bread with toppings. Today supermarkets sell sliced bread and deli meats specifically marketed for Abendbrot. When Germans say 'Wir essen Abendbrot', they mean this cold meal tradition."}},
  {type:"teach",kind:"word",nl:"aufräumen",en:"to tidy up",phonetic:"OWF-roy-men",example:"A: Kannst du bitte aufräumen?\nB: Ja, ich räume gleich auf.\nA: Danke!",exampleEn:"A: Can you tidy up please?\nB: Yes, I will tidy up in a moment.\nA: Thank you!",note:"SEPARABLE: auf + räumen.\nIch räume auf. (auf to end)\nRäumen = to clear. Aufräumen = to tidy up."},
  {type:"mc",q:"'Ich sehe fern.' The word 'fern' appears at the end because:",opts:["Fern is an adjective","Fernsehen is a separable verb","Fern means television","German sentences end with adverbs"],ans:"Fernsehen is a separable verb",hint:"Fern-sehen: fern is the separable prefix."},
  {type:"mc",q:"'Du liest.' This means:",opts:["I read","He reads","You read (informal)","We read"],ans:"You read (informal)",hint:"Du = informal you. Lesen is stem-changing: du liest."},
  {type:"fb",s:"Jeden Abend ___ ich ein Buch oder sehe ich fern.",a:"lese",opts:["lese","liest","sehe","koche"],hint:"First activity: reading. Lesen is stem-changing. Ich form = lese."},
  {type:"match",pairs:[{nl:"kochen",en:"to cook"},{nl:"fernsehen",en:"to watch TV"},{nl:"lesen",en:"to read"},{nl:"aufräumen",en:"to tidy up"}]},
  {type:"mc",q:"'Ins Bett gehen': 'ins' is a contraction of:",opts:["in + das","in + dem","an + das","auf + das"],ans:"in + das",hint:"Ins = in + das (into the). Das Bett is neuter."},
  {type:"drag_fill",s:"Am Abend {1} ich, dann {2} ich fern, und um elf Uhr {3} ich ins Bett.",blanks:{"1":"koche","2":"sehe","3":"gehe"},pool:["koche","kochst","sehe","sehen","gehe","geht"],hint:"Three evening activities: cook, watch TV, go to bed."},
  {type:"mc",q:"Traditional German Abendbrot typically includes:",opts:["Hot soup and potatoes","Pasta with sauce","Bread, cold cuts, and cheese","Pizza"],ans:"Bread, cold cuts, and cheese",hint:"Abendbrot = cold evening bread with toppings."},
  {type:"fb",s:"Wie ___ du dich nach der Arbeit? (How do you relax?)",a:"entspannst",opts:["entspannst","entspannen","arbeitest","lernst"],hint:"Sich entspannen: du form = entspannst dich."},
  {type:"mc",q:"'Er liest jeden Abend ein Buch.' What is irregular about 'liest'?",opts:["Er is an unusual pronoun","Lesen changes its stem: liest not lest","Jeden Abend is an idiom","Ein Buch takes accusative"],ans:"Lesen changes its stem: liest not lest",hint:"Stem-changing verb: e -> ie in 2nd and 3rd person singular."},
  {type:"mc",q:"Which of these is NOT a separable verb?",opts:["fernsehen","aufräumen","kochen","aufstehen"],ans:"kochen",hint:"Kochen has no detachable prefix. It is a simple regular verb."},
]},

// ═══ L6: Wochentage ═══
{id:"deu5l6",title:"Wochentage",icon:"📅",xp:15,board:true,steps:[
  {type:"intro",title:"Wochentage",desc:"Days of the week unlock your schedule. Say what you do on which day, make plans, and understand when things happen.",goals:["Name all 7 days of the week","Use am + weekday correctly","Ask and say which day it is","Combine days with activities"]},
  {type:"teach",kind:"word",nl:"der Montag",en:"Monday",phonetic:"MON-tahk",example:"A: Was machst du am Montag?\nB: Am Montag arbeite ich.\nA: Und am Dienstag?",exampleEn:"A: What do you do on Monday?\nB: On Monday I work.\nA: And on Tuesday?",note:"Am Montag = on Monday.\nAll days are masculine: der Montag.\nMon = Mond (moon) in origin."},
  {type:"tip",title:"Wochentage: All Seven Days",text:"Monday through Sunday:\n\nMontag (Mon), Dienstag (Tue), Mittwoch (Wed)\nDonnerstag (Thu), Freitag (Fri)\nSamstag (Sat), Sonntag (Sun)\n\nAll are masculine (der). All use am to say on [day]:\nam Montag = on Monday.\nGerman week starts on Monday.",deepDive:{title:"The names behind the days",text:"German day names come from Germanic mythology and astronomy:\n\nMontag = Mond (moon) + Tag\nDienstag = Thing (old Germanic assembly) + Tag\nMittwoch = Mitte der Woche (middle of the week)\nDonnerstag = Donner (thunder, Thor) + Tag\nFreitag = Freia (Norse goddess) + Tag\nSamstag = from Hebrew Shabbat via Greek\nSonntag = Sonne (sun) + Tag\n\nMittwoch is unique: not named after a deity, but literally midweek."}},
  {type:"teach",kind:"word",nl:"der Dienstag",en:"Tuesday",phonetic:"DEENS-tahk",example:"A: Haben wir Dienstag einen Termin?\nB: Ja, um 14 Uhr beim Arzt.\nA: Ich schreibe es auf.",exampleEn:"A: Do we have an appointment on Tuesday?\nB: Yes, at 2 PM at the doctor.\nA: I will write it down.",note:"Am Dienstag = on Tuesday.\nDer Termin = the appointment."},
  {type:"teach",kind:"word",nl:"der Mittwoch",en:"Wednesday",phonetic:"MIT-vokh",example:"A: Am Mittwoch bin ich nicht da.\nB: Warum nicht?\nA: Ich fahre nach München.",exampleEn:"A: On Wednesday I will not be here.\nB: Why not?\nA: I am travelling to Munich.",note:"Literally: middle of the week.\nMit-Woche = midweek. Unique among German days."},
  {type:"teach",kind:"word",nl:"der Donnerstag",en:"Thursday",phonetic:"DON-ers-tahk",example:"A: Was hast du am Donnerstag vor?\nB: Ich lerne Deutsch.\nA: Jeden Donnerstag?",exampleEn:"A: What do you have planned on Thursday?\nB: I am studying German.\nA: Every Thursday?",note:"Donner = thunder (Thor's day).\nJeden Donnerstag = every Thursday."},
  {type:"teach",kind:"word",nl:"der Freitag",en:"Friday",phonetic:"FRY-tahk",example:"A: Am Freitag fängt das Wochenende an!\nB: Endlich! Was machst du?\nA: Ich fahre zu meinen Eltern.",exampleEn:"A: On Friday the weekend begins!\nB: Finally! What are you doing?\nA: I am going to my parents.",note:"Named after Freia, Norse goddess.\nEnd of the working week. Eagerly awaited."},
  {type:"teach",kind:"word",nl:"der Samstag",en:"Saturday",phonetic:"ZAMS-tahk",example:"A: Was machst du am Samstag?\nB: Ich schlafe lange und kaufe ein.\nA: Klingt entspannt!",exampleEn:"A: What are you doing on Saturday?\nB: I sleep in and go shopping.\nA: Sounds relaxed!",note:"Also Sonnabend in Eastern Germany.\nFrom Hebrew Shabbat via Greek.\nLange schlafen = to sleep in."},
  {type:"teach",kind:"word",nl:"der Sonntag",en:"Sunday",phonetic:"ZON-tahk",example:"A: Am Sonntag darf man nicht einkaufen.\nB: Wirklich? Warum?\nA: Sonntag ist ein gesetzlicher Ruhetag.",exampleEn:"A: On Sunday you cannot go shopping.\nB: Really? Why?\nA: Sunday is a statutory day of rest.",note:"Sonne = sun. Tag = day.\nGerman law requires shops to close on Sundays.\nSonntag ist Ruhetag = Sunday is a rest day."},
  {type:"mc",q:"Which day literally means 'midweek'?",opts:["Montag","Donnerstag","Mittwoch","Freitag"],ans:"Mittwoch",hint:"Mitte = middle. Woche = week."},
  {type:"mc",q:"Am Samstag means:",opts:["on Saturday morning","this Saturday","on Saturday","last Saturday"],ans:"on Saturday",hint:"Am + day = on that recurring day of the week."},
  {type:"fb",s:"Am ___ fängt die Woche an. (The week begins on Monday.)",a:"Montag",opts:["Montag","Dienstag","Sonntag","Mittwoch"],hint:"First day of the German working week."},
  {type:"match",pairs:[{nl:"Montag",en:"Monday"},{nl:"Mittwoch",en:"Wednesday"},{nl:"Freitag",en:"Friday"},{nl:"Sonntag",en:"Sunday"}]},
  {type:"mc",q:"'Jeden Donnerstag' means:",opts:["last Thursday","next Thursday","every Thursday","on Thursday"],ans:"every Thursday",hint:"Jeden = every (accusative of jeder). Jeden Donnerstag = every Thursday."},
  {type:"mc",q:"Why are German shops closed on Sundays?",opts:["Germans do not like shopping on Sundays","Sunday is a statutory day of rest by law","Shops open on Monday instead","Sunday is a national bank holiday"],ans:"Sunday is a statutory day of rest by law",hint:"Gesetzlicher Ruhetag. German law and cultural tradition."},
  {type:"drag_fill",s:"Am {1} arbeite ich, am {2} lerne ich, und am {3} schlafe ich lange.",blanks:{"1":"Montag","2":"Mittwoch","3":"Samstag"},pool:["Montag","Dienstag","Mittwoch","Freitag","Samstag","Sonntag"],hint:"Working Monday, studying Wednesday, sleeping in Saturday."},
  {type:"mc",q:"All German weekdays share which article?",opts:["die","der","das","ein"],ans:"der",hint:"All seven days of the week are masculine in German."},
  {type:"fb",s:"Wann haben wir den Termin? Am ___, um drei Uhr.",a:"Donnerstag",opts:["Donnerstag","Mittwoch","Samstag","Sonntag"],hint:"Thor's day. Thunder. The fourth weekday."},
  {type:"mc",q:"'Sonnabend' is a regional name used in Eastern Germany for:",opts:["Sunday","Saturday","Friday","Monday"],ans:"Saturday",hint:"Sonne (sun) + Abend (evening). Alternative to Samstag."},
]},

// ═══ L7: Mein Tagesablauf ═══
{id:"deu5l7",title:"Mein Tagesablauf",icon:"📋",xp:15,board:true,steps:[
  {type:"intro",title:"Mein Tagesablauf",desc:"Putting it all together: time + days + activities. Describe a full daily schedule by combining everything from this unit.",goals:["Describe a full day morning to evening","Combine time expressions with activities","Use separable verbs naturally in context","Talk about your weekly schedule"]},
  {type:"tip",title:"Building a Daily Routine Description",text:"Combine time + day + activity:\n\n1. Time: Um sieben Uhr...\n2. Day: Am Montag...\n3. Activity: ...stehe ich auf.\n4. Connector: dann, danach, später, zuerst\n\nExample:\nUm halb sieben stehe ich auf.\nIch dusche und ziehe mich an.\nUm acht Uhr frühstücke ich.\nDann fahre ich zur Arbeit los.",deepDive:{title:"Verb position with time adverbials",text:"When a sentence starts with a time expression (Um sieben, Am Montag, Dann), the verb STILL comes second and the subject gets pushed to position three:\n\nUm sieben | stehe | ich | auf.\n      1    |   2   |  3  | prefix\n\nThis is the V2 (verb-second) rule. The verb always occupies position 2 regardless of what comes first. Time adverbials simply push the subject after the verb."}},
  {type:"teach",kind:"phrase",nl:"jeden Tag",en:"every day",phonetic:"YAY-den tahk",example:"A: Machst du das jeden Tag?\nB: Ja, jeden Tag ohne Ausnahme.\nA: Das ist Disziplin!",exampleEn:"A: Do you do that every day?\nB: Yes, every day without exception.\nA: That is discipline!",note:"Jeden Tag = accusative of jeder Tag.\nAlso: jeden Morgen, jeden Abend, jede Woche."},
  {type:"teach",kind:"phrase",nl:"meistens",en:"usually / mostly",phonetic:"MY-stens",example:"A: Frühstückst du immer?\nB: Meistens. Manchmal habe ich keine Zeit.\nA: Das kenne ich!",exampleEn:"A: Do you always have breakfast?\nB: Usually. Sometimes I have no time.\nA: I know that feeling!",note:"Meistens = most of the time.\nFrequency scale: immer, meistens, manchmal, selten, nie."},
  {type:"teach",kind:"phrase",nl:"in der Woche",en:"during the working week",phonetic:"in dair VOH-kheh",example:"A: In der Woche stehe ich früh auf.\nB: Und am Wochenende?\nA: Da schlafe ich lange!",exampleEn:"A: During the week I get up early.\nB: And at the weekend?\nA: Then I sleep in!",note:"In der Woche = Mon-Fri.\nAm Wochenende = at the weekend."},
  {type:"teach",kind:"phrase",nl:"das Wochenende",en:"the weekend",phonetic:"VOH-khen-en-deh",example:"A: Was machst du am Wochenende?\nB: Am Samstag kaufe ich ein, am Sonntag besuche ich meine Familie.\nA: Schön!",exampleEn:"A: What do you do at the weekend?\nB: On Saturday I go shopping, on Sunday I visit my family.\nA: Nice!",note:"Am Wochenende = at the weekend.\nDas Wochenende is neuter.\nWoche = week. Ende = end."},
  {type:"mc",q:"'Um halb sieben stehe ich auf.' The verb comes second because:",opts:["Stehen is always second","German V2 rule: verb always in position 2","Um is a verb","Ich must come first"],ans:"German V2 rule: verb always in position 2",hint:"V2 = verb second. When a time phrase starts, verb still takes slot 2."},
  {type:"mc",q:"'Jeden Morgen' means:",opts:["good morning","every morning","this morning","on Monday morning"],ans:"every morning",hint:"Jeden = every (accusative). Morgen = morning."},
  {type:"drag_fill",s:"Am Montag {1} ich um sieben auf, dann {2} ich, und danach {3} ich zur Schule.",blanks:{"1":"stehe","2":"frühstücke","3":"fahre"},pool:["stehe","stehen","frühstücke","frühstücken","fahre","fährt"],hint:"Monday morning: get up, have breakfast, go to school."},
  {type:"mc",q:"Which sentence uses V2 word order correctly with a time phrase at the start?",opts:["Ich um acht arbeite.","Ich arbeite um acht.","Um acht arbeite ich.","Um acht ich arbeite."],ans:"Um acht arbeite ich.",hint:"V2: time phrase first, verb second, subject third."},
  {type:"fb",s:"In der ___ arbeite ich viel, aber am ___ schlafe ich lange.",a:"Woche",opts:["Woche","Wochentag","Morgen","Nacht"],hint:"Weekdays vs weekend. First blank: in der ___"},
  {type:"mc",q:"'Meistens' is closest in meaning to:",opts:["never","always","usually","sometimes"],ans:"usually",hint:"Meistens = most of the time. Not absolute like immer."},
  {type:"match",pairs:[{nl:"jeden Tag",en:"every day"},{nl:"meistens",en:"usually"},{nl:"das Wochenende",en:"the weekend"},{nl:"in der Woche",en:"during the working week"}]},
  {type:"mc",q:"Anna's schedule: she gets up at 7, showers, has breakfast at 7:30, and leaves at 8:15. 'Viertel nach acht' = ___?",opts:["7:45","8:15","8:00","8:30"],ans:"8:15",hint:"Viertel nach acht = 15 minutes past eight."},
  {type:"drag_fill",s:"Am Wochenende {1} ich lange, dann {2} ich ein, und am Abend {3} ich fern.",blanks:{"1":"schlafe","2":"kaufe","3":"sehe"},pool:["schlafe","schlafen","kaufe","kaufen","sehe","sehen"],hint:"Weekend activities: sleep in, shop, watch TV. All separable or regular."},
  {type:"mc",q:"'Am Wochenende' uses am because:",opts:["Wochenende is masculine","Am = an + dem, standard with time expressions","It is a fixed idiom with no grammar","Wochenende starts with W"],ans:"Am = an + dem, standard with time expressions",hint:"Am = an + dem (dative). Standard pattern for time expressions."},
  {type:"mc",q:"You want to say you work every weekday. Which phrase fits?",opts:["Am Wochenende arbeite ich.","Jeden Tag ohne Wochenende.","In der Woche arbeite ich.","Ich arbeite manchmal."],ans:"In der Woche arbeite ich.",hint:"In der Woche = during the working week (Mon-Fri)."},
  {type:"fb",s:"Ich stehe immer früh auf, aber am Samstag schlafe ich ___.",a:"lange",opts:["lange","spät","früh","viel"],hint:"Lange schlafen = to sleep in. On weekends you sleep..."},
]},

// ═══ L8: Mein Tag Review ═══
{id:"deu5l8",title:"Mein Tag: Review",icon:"🔁",xp:20,board:true,steps:[
  {type:"intro",title:"Mein Tag: Review",desc:"Time to consolidate everything from Unit 5. Time-telling, daily routine verbs, separable verbs, days of the week, and full schedule descriptions all come together here.",goals:["Consolidate all Unit 5 vocabulary","Use time + day + activity combinations","Apply separable verb rules correctly","Build fluency in describing your day"]},
  {type:"tip",title:"Unit 5 Summary",text:"What you have learned:\n\nTime: Wie spät ist es? Es ist... Uhr, halb, Viertel vor/nach.\nMorning: aufstehen, duschen, frühstücken, sich anziehen.\nSeparable verbs: prefix to end in main clause.\nAfternoon: arbeiten, lernen, Mittagessen, Pause.\nEvening: kochen, fernsehen, lesen, ins Bett gehen.\nDays: Montag bis Sonntag, am + Wochentag.\nSchedule: V2 + time expressions, dann/danach."},
  {type:"mc",q:"Es ist halb zehn. In English this is:",opts:["10:30","9:30","9:00","10:00"],ans:"9:30",hint:"Halb counts toward the NEXT hour. Halb zehn = halfway to ten = 9:30."},
  {type:"mc",q:"'Ich stehe um sieben auf.' Where does auf go when you add a time?",opts:["Ich stehe auf um sieben.","Ich stehe um sieben auf.","Ich aufstehe um sieben.","Auf stehe ich um sieben."],ans:"Ich stehe um sieben auf.",hint:"Prefix at end. Time expression fills the middle of the sentence."},
  {type:"fb",s:"Wann ___ der Kurs ___? Er ___ um neun an.",a:"fängt",opts:["fängt","fangen","beginnt","fange"],hint:"Anfangen separable: conjugated form for er/sie/es. (First blank only)"},
  {type:"mc",q:"Viertel vor zwölf is:",opts:["12:15","11:45","12:45","11:15"],ans:"11:45",hint:"Vor = before/to. Fifteen minutes before twelve."},
  {type:"match",pairs:[{nl:"frühstücken",en:"to have breakfast"},{nl:"fernsehen",en:"to watch TV"},{nl:"aufräumen",en:"to tidy up"},{nl:"losfahren",en:"to set off"}]},
  {type:"mc",q:"Which verb uses a reflexive pronoun (sich)?",opts:["aufstehen","kochen","sich anziehen","arbeiten"],ans:"sich anziehen",hint:"Reflexive = action done to oneself. Sich anziehen = to dress oneself."},
  {type:"drag_fill",s:"Um {1} Uhr stehe ich auf, dusche mich, und um {2} frühstücke ich.",blanks:{"1":"sieben","2":"halb acht"},pool:["sieben","sechs","halb acht","halb sieben","neun","Viertel nach neun"],hint:"7:00 for waking up, 7:30 for breakfast."},
  {type:"mc",q:"Am Mittwoch: which day is this?",opts:["Monday","Wednesday","Saturday","Thursday"],ans:"Wednesday",hint:"Mittwoch = middle of the week."},
  {type:"fb",s:"___ Donnerstag lerne ich Deutsch.",a:"Jeden",opts:["Jeden","Am","Den","Einem"],hint:"Every Thursday = ___ Donnerstag. Accusative of jeder."},
  {type:"mc",q:"What does 'In der Woche' mean?",opts:["In the weekend","During the working week","On any given day","At the end of the week"],ans:"During the working week",hint:"Woche = week. In der Woche = Mon-Fri, the working days."},
  {type:"drag_fill",s:"Am Abend {1} ich, dann {2} ich fern, und um elf {3} ich ins Bett.",blanks:{"1":"koche","2":"sehe","3":"gehe"},pool:["koche","kochst","sehe","sehen","gehe","geht"],hint:"Evening: cook, watch TV, go to bed. Two separable verbs."},
  {type:"mc",q:"'Ich rufe dich an.' What is the separable prefix here?",opts:["ich","rufe","dich","an"],ans:"an",hint:"Anrufen = to phone. The prefix an detaches to end position."},
  {type:"mc",q:"Which sentence uses V2 word order correctly?",opts:["Dann ich esse Mittagessen.","Dann esse ich Mittagessen.","Ich dann esse Mittagessen.","Esse dann ich Mittagessen."],ans:"Dann esse ich Mittagessen.",hint:"V2: time/connector first, verb second, subject third."},
  {type:"match",pairs:[{nl:"meistens",en:"usually"},{nl:"jeden Tag",en:"every day"},{nl:"das Wochenende",en:"the weekend"},{nl:"danach",en:"afterwards"}]},
  {type:"mc",q:"German shops are typically closed on Sunday because:",opts:["There is no customer demand","It is legally required as a day of rest","All workers attend church","Only Bavarian shops close"],ans:"It is legally required as a day of rest",hint:"Gesetzlicher Ruhetag. Law and long-standing cultural tradition."},
  {type:"fb",s:"Ich höre heute um fünf Uhr mit der Arbeit ___.",a:"auf",opts:["auf","an","aus","ab"],hint:"Aufhören = to stop/finish. Which prefix?"},
  {type:"mc",q:"To say 'I am going shopping' (as an activity you are heading to do), you say:",opts:["Ich kaufe ein.","Ich gehe einkaufen.","Ich einkaufe.","Kaufe ich ein."],ans:"Ich gehe einkaufen.",hint:"Gehen + infinitive = going to do. Infinitive stays unsplit."},
]},

]},

{n:9,lang:"de",track:"v1",title:"Was hast du gemacht?",sub:"Past Tense (Perfekt with haben)",icon:"⏮️",level:"A2.1",color:"#7B5EE8",lessons:[

// ═══ L1: Was ist Perfekt? ═══
{id:"deu9l1",title:"Was ist Perfekt?",icon:"⏮️",xp:20,board:true,steps:[
  {type:"intro",title:"Was ist Perfekt?",desc:"German uses Perfekt to talk about things that happened in the past. It is the most common past tense in spoken German. You need two things: the helper verb haben and a Partizip II.",goals:["Understand the Perfekt structure","Learn haben as the helper verb","Form your first Partizip II: gemacht"]},

  {type:"tip",title:"The Perfekt Formula",text:"Perfekt = haben (position 2) + Partizip II (sentence end)\n\nIch habe Kaffee gemacht.\nDu hast Hausaufgaben gemacht.\nEr hat Fußball gespielt.\n\nTwo verbs. haben is conjugated. Partizip II goes to the END.",deepDive:{title:"Why two verbs?",text:"German Perfekt is a compound tense. It works like English 'I have made' but is used where English often uses the simple past: 'I made' and 'I have made' are both Ich habe gemacht in German.\n\nIn spoken German, Perfekt is used for nearly all past events. Written German also uses Präteritum (simple past), which you will study in B1. For now, Perfekt is all you need to talk about the past."}},

  {type:"teach",kind:"phrase",nl:"ich habe ... gemacht",en:"I made / I did",phonetic:"ikh HAH-beh ... ge-MAKHT",example:"A: Was hast du gestern gemacht?\nB: Ich habe Pizza gemacht.\nA: Lecker! Ich habe auch gekocht.\nB: Was hast du gekocht?",exampleEn:"A: What did you do yesterday?\nB: I made pizza.\nA: Delicious! I cooked too.\nB: What did you cook?",note:"machen = to make/do. Partizip II: gemacht.\nge + mach + t is the pattern for regular verbs."},

  {type:"verb_table",title:"haben - Perfekt Helper",label:"haben (present tense)",groups:[{label:"Singular",rows:[["ich","habe"],["du","hast"],["er/sie/es","hat"]]},{label:"Plural",rows:[["wir","haben"],["ihr","habt"],["sie/Sie","haben"]]}],note:"haben conjugation in present tense = Perfekt helper.\nThe Partizip II always goes to the END of the sentence."},

  {type:"teach",kind:"phrase",nl:"du hast ... gemacht",en:"you did / you made (informal)",phonetic:"doo hast ... ge-MAKHT",example:"A: Du hast das sehr gut gemacht!\nB: Danke! Ich habe lange geübt.\nA: Das sieht man.\nB: Ich übe jeden Tag.",exampleEn:"A: You did that very well!\nB: Thanks! I practised for a long time.\nA: It shows.\nB: I practise every day.",note:"du hast is the 2nd person singular.\nSame Partizip II: gemacht."},

  {type:"teach",kind:"phrase",nl:"er/sie hat ... gemacht",en:"he/she did / made",phonetic:"air/zee hat ... ge-MAKHT",example:"A: Hat er das Frühstück gemacht?\nB: Ja, er hat Eier gemacht.\nA: Und sie? Was hat sie gemacht?\nB: Sie hat Kaffee gemacht.",exampleEn:"A: Did he make breakfast?\nB: Yes, he made eggs.\nA: And her? What did she make?\nB: She made coffee.",note:"3rd person singular = hat.\nSame Partizip II for all persons."},

  {type:"teach",kind:"phrase",nl:"wir haben ... gemacht",en:"we did / made",phonetic:"veer HAH-ben ... ge-MAKHT",example:"A: Was habt ihr am Wochenende gemacht?\nB: Wir haben ein Picknick gemacht!\nA: Super! Wir haben auch etwas gemacht.\nB: Was habt ihr gemacht?",exampleEn:"A: What did you all do at the weekend?\nB: We had a picnic!\nA: Great! We did something too.\nB: What did you all do?",note:"wir haben, ihr habt, sie haben.\nPlural forms use haben just as in present."},

  {type:"tip",title:"Word Order Rule: Partizip II to the End",text:"In a main clause, Partizip II is ALWAYS the last element:\n\nIch habe gestern Pizza gemacht.\n(I made pizza yesterday.)\n\nEr hat am Morgen Kaffee gemacht.\n(He made coffee in the morning.)\n\nTime words and other phrases go in the middle. Partizip II stays at the end.",deepDive:{title:"What about questions?",text:"In a yes/no question, haben moves to position 1, Partizip II stays at the end:\n\nHast du Pizza gemacht? (Did you make pizza?)\nHat er Kaffee gemacht? (Did he make coffee?)\n\nIn a W-question, haben stays at position 2:\nWas hast du gemacht? (What did you do?)"}},

  {type:"mc",q:"Ich ___ Pizza gemacht. Which form of haben fits?",opts:["habe","hast","hat","haben"],ans:"habe",hint:"First person singular of haben."},

  {type:"mc",q:"In Ich habe Kaffee gemacht, where does gemacht sit?",opts:["After Ich","After habe","After Kaffee at the end","Before Kaffee"],ans:"After Kaffee at the end",hint:"Partizip II always goes to the end of the main clause."},

  {type:"fb",s:"Du ___ sehr gut gekocht. (Perfekt of haben, du-form)",a:"hast",opts:["hast","habe","hat","habt"],hint:"Du + haben: the second person singular form."},

  {type:"mc",q:"Was hast du gemacht? means:",opts:["What are you doing?","What did you do?","What will you do?","What do you like to do?"],ans:"What did you do?",hint:"Hast + gemacht signals past tense."},

  {type:"mc",q:"Er ___ Fußball gespielt. Complete the Perfekt sentence.",opts:["habe","hast","hat","haben"],ans:"hat",hint:"Third person singular of haben."},

  {type:"fb",s:"Wir ___ ein Picknick gemacht.",a:"haben",opts:["haben","habt","hast","hat"],hint:"Wir = first person plural form of haben."},

  {type:"mc",q:"Habt ihr das gemacht? is asking:",opts:["Can you all do this?","Did you all do this?","Will you all do this?","Are you all doing this?"],ans:"Did you all do this?",hint:"Habt is past-tense helper for ihr."},

  {type:"mc",q:"Which sentence has CORRECT Perfekt word order?",opts:["Ich gemacht habe Pizza.","Ich habe Pizza gemacht.","Habe ich gemacht Pizza.","Pizza ich habe gemacht."],ans:"Ich habe Pizza gemacht.",hint:"haben at position 2, Partizip II at the end."},

  {type:"fb",s:"Sie (she) ___ gestern viel gemacht.",a:"hat",opts:["hat","hast","habe","haben"],hint:"She = 3rd person singular of haben."},

  {type:"mc",q:"The Perfekt tense uses which helper verb (most action verbs)?",opts:["sein","werden","wollen","haben"],ans:"haben",hint:"Most action verbs use haben as the Perfekt helper."},
]},

// ═══ L2: Regelmäßige Verben ═══
{id:"deu9l2",title:"Regelmäßige Verben",icon:"✅",xp:20,board:true,steps:[
  {type:"intro",title:"Regelmäßige Verben",desc:"Regular verbs form their Partizip II with a simple formula: ge + STEM + t. Learn the five most useful regular verbs and their past forms.",goals:["Master the ge-STEM-t formula","Learn gemacht, gekocht, gespielt, gelernt, gearbeitet","Use regular Partizip II in Perfekt sentences"]},

  {type:"tip",title:"Regular Partizip II: ge + STEM + t",text:"Regular verbs follow one rule:\n\nge + verb stem + t\n\nmachen (stem: mach) = gemacht\nkochen (stem: koch) = gekocht\nspielen (stem: spiel) = gespielt\nlernen (stem: lern) = gelernt\narbeiten (stem: arbeit) = gearbeitet\n\nIf the stem ends in -t or -d, add -et instead: gearbeitet.",deepDive:{title:"Why gearbeitet and not gearbeit?",text:"When a verb stem ends in a consonant cluster that is hard to pronounce (like arbeit-), German inserts an -e- before the -t ending: arbeiten = gearbeitet.\n\nThe same rule applies to verbs like warten (to wait) = gewartet, and reden (to talk) = geredet.\n\nThis is purely for pronunciation. You will recognise this pattern once you hear it a few times."}},

  {type:"teach",kind:"word",nl:"gemacht",en:"made / done (Partizip II of machen)",phonetic:"ge-MAKHT",example:"A: Hast du das allein gemacht?\nB: Ja, ich habe alles allein gemacht.\nA: Respekt! Das hast du gut gemacht.\nB: Danke, ich habe viel geübt.",exampleEn:"A: Did you do that alone?\nB: Yes, I did everything alone.\nA: Respect! You did that well.\nB: Thanks, I practised a lot.",note:"machen = to do/make. Stem: mach. Partizip II: gemacht.\nUsed for almost any doing action."},

  {type:"teach",kind:"word",nl:"gekocht",en:"cooked (Partizip II of kochen)",phonetic:"ge-KOKHT",example:"A: Wer hat heute gekocht?\nB: Ich habe Pasta gekocht.\nA: Lecker! Ich habe gestern auch gekocht.\nB: Was hast du gekocht?",exampleEn:"A: Who cooked today?\nB: I cooked pasta.\nA: Delicious! I cooked yesterday too.\nB: What did you cook?",note:"kochen = to cook. Stem: koch. Partizip II: gekocht.\nge + koch + t = gekocht."},

  {type:"teach",kind:"word",nl:"gespielt",en:"played (Partizip II of spielen)",phonetic:"ge-SHPEELT",example:"A: Hast du heute Fußball gespielt?\nB: Nein, ich habe Gitarre gespielt.\nA: Oh! Ich habe Tennis gespielt.\nB: Wir haben verschiedene Sachen gespielt.",exampleEn:"A: Did you play football today?\nB: No, I played guitar.\nA: Oh! I played tennis.\nB: We played different things.",note:"spielen = to play. Stem: spiel. Partizip II: gespielt.\nWorks for sports, instruments, and games."},

  {type:"teach",kind:"word",nl:"gelernt",en:"learned / studied (Partizip II of lernen)",phonetic:"ge-LERNT",example:"A: Was habt ihr heute gelernt?\nB: Wir haben Perfekt gelernt!\nA: Gut! Ich habe auch Deutsch gelernt.\nB: Wir lernen jeden Tag etwas Neues.",exampleEn:"A: What did you all learn today?\nB: We learned Perfekt!\nA: Good! I studied German too.\nB: We learn something new every day.",note:"lernen = to learn. Stem: lern. Partizip II: gelernt.\nAlso means to study for a test."},

  {type:"teach",kind:"word",nl:"gearbeitet",en:"worked (Partizip II of arbeiten)",phonetic:"ge-AR-bi-tet",example:"A: Hast du heute gearbeitet?\nB: Ja, ich habe acht Stunden gearbeitet.\nA: Das ist viel! Ich habe nur vier Stunden gearbeitet.\nB: Morgen arbeite ich weniger.",exampleEn:"A: Did you work today?\nB: Yes, I worked eight hours.\nA: That is a lot! I only worked four hours.\nB: Tomorrow I will work less.",note:"arbeiten = to work. Stem: arbeit. Partizip II: gearbeitet.\nStem ends in -t, so: ge + arbeit + et = gearbeitet."},

  {type:"verb_table",title:"Regular Partizip II Patterns",label:"ge + STEM + t",groups:[{label:"Regular -t",rows:[["machen","gemacht"],["kochen","gekocht"],["spielen","gespielt"],["lernen","gelernt"]]},{label:"Stem ends -t or -d (add -et)",rows:[["arbeiten","gearbeitet"],["warten","gewartet"],["reden","geredet"]]}],note:"The -et ending is added when the stem ends in -t or -d.\nThis makes the Partizip II easier to pronounce."},

  {type:"mc",q:"What is the Partizip II of lernen?",opts:["gelearnt","gelernt","lernte","lerniert"],ans:"gelernt",hint:"ge + stem + t: ge + lern + t = gelernt."},

  {type:"mc",q:"What is the Partizip II of arbeiten?",opts:["gearbeitt","gearbeit","gearbeitet","arbeitete"],ans:"gearbeitet",hint:"Stem ends in -t, so add -et not just -t."},

  {type:"fb",s:"Ich habe gestern Gitarre ___. (played)",a:"gespielt",opts:["gespielt","spielte","gespiele","gespieltet"],hint:"spielen: ge + spiel + t = gespielt."},

  {type:"mc",q:"Wir haben Pizza gekocht means:",opts:["We are cooking pizza","We cooked pizza","We will cook pizza","We like pizza"],ans:"We cooked pizza",hint:"Haben + gekocht = Perfekt past tense."},

  {type:"fb",s:"Sie hat acht Stunden ___. (worked)",a:"gearbeitet",opts:["gearbeitet","gearbeitete","gearbeit","arbeitete"],hint:"arbeiten: stem ends in -t, so ge + arbeit + et."},

  {type:"mc",q:"Which verb does NOT follow the regular ge-STEM-t pattern?",opts:["machen","kochen","spielen","trinken"],ans:"trinken",hint:"trinken is a strong verb with a vowel change in Partizip II."},

  {type:"mc",q:"Ich habe Deutsch gelernt. The Partizip II is at:",opts:["Position 1","Position 2","After Deutsch","At the very end"],ans:"At the very end",hint:"Partizip II always closes the Perfekt sentence."},

  {type:"match",pairs:[{nl:"gemacht",en:"made/done"},{nl:"gekocht",en:"cooked"},{nl:"gespielt",en:"played"},{nl:"gelernt",en:"learned"}]},

  {type:"mc",q:"To say 'she worked', you say:",opts:["Sie hat gearbeitet.","Sie hast gearbeitet.","Sie haben gearbeitet.","Sie habe gearbeitet."],ans:"Sie hat gearbeitet.",hint:"3rd person singular of haben is hat."},

  {type:"fb",s:"Hast du heute ___? (cooked)",a:"gekocht",opts:["gekocht","kochen","kochte","kochiert"],hint:"kochen: ge + koch + t = gekocht."},

  {type:"mc",q:"What is TRUE about regular Partizip II forms?",opts:["They all begin with ge- and end in -en","They all begin with ge- and end in -t or -et","They change the vowel in the stem","They use a different ending for each person"],ans:"They all begin with ge- and end in -t or -et",hint:"ge-STEM-t or ge-STEM-et for stems ending in -t or -d."},
]},

// ═══ L3: Unregelmäßige Verben ═══
{id:"deu9l3",title:"Unregelmäßige Verben",icon:"⚡",xp:20,board:true,steps:[
  {type:"intro",title:"Unregelmäßige Verben",desc:"Irregular verbs do not follow the ge-STEM-t rule. Instead, they use ge-STEM-en and often change the vowel in the stem. These are the most common verbs, so they must be memorised.",goals:["Understand ge-STEM-en as the irregular pattern","Learn: geschrieben, getrunken, gegessen, gelesen, genommen","Use irregular Partizip II in Perfekt sentences"]},

  {type:"tip",title:"Irregular Partizip II: ge + (new stem) + en",text:"Strong (irregular) verbs use ge + changed stem + en:\n\nschreiben (to write) = geschrieben\ntrinken (to drink) = getrunken\nessen (to eat) = gegessen\nlesen (to read) = gelesen\nnehmen (to take) = genommen\n\nThe stem vowel often changes. These must be learned as vocabulary items.",deepDive:{title:"Why do these verbs change?",text:"These are Germanic strong verbs, a pattern inherited from Old Germanic. The vowel change (called ablaut) is how they mark the past tense. English has the same system: sing/sang/sung, drink/drank/drunk, write/wrote/written.\n\nYou have already encountered strong verbs in separable and other units. German strong Partizip II forms often correspond to Dutch cognates: geschrieben = geschreven, getrunken = gedronken, gegessen = gegeten."}},

  {type:"teach",kind:"word",nl:"geschrieben",en:"written (Partizip II of schreiben)",phonetic:"ge-SHREE-ben",example:"A: Hast du die E-Mail geschrieben?\nB: Ja, ich habe sie geschrieben.\nA: Gut! Ich habe auch einen Brief geschrieben.\nB: An wen hast du geschrieben?",exampleEn:"A: Did you write the email?\nB: Yes, I wrote it.\nA: Good! I also wrote a letter.\nB: To whom did you write?",note:"schreiben = to write. Vowel change: ei becomes ie.\nge + schrieb + en = geschrieben."},

  {type:"teach",kind:"word",nl:"getrunken",en:"drunk (Partizip II of trinken)",phonetic:"ge-TROON-ken",example:"A: Was hast du getrunken?\nB: Ich habe Kaffee getrunken.\nA: Ich habe Tee getrunken.\nB: Hast du auch Wasser getrunken?",exampleEn:"A: What did you drink?\nB: I drank coffee.\nA: I drank tea.\nB: Did you drink water too?",note:"trinken = to drink. Vowel change: i becomes u.\nge + trunk + en = getrunken."},

  {type:"teach",kind:"word",nl:"gegessen",en:"eaten (Partizip II of essen)",phonetic:"ge-GES-sen",example:"A: Hast du schon gegessen?\nB: Ja, ich habe Suppe gegessen.\nA: Ich habe noch nicht gegessen.\nB: Ich habe Pizza gegessen. Sie war lecker!",exampleEn:"A: Have you eaten already?\nB: Yes, I ate soup.\nA: I have not eaten yet.\nB: I ate pizza. It was delicious!",note:"essen = to eat. Vowel change: e becomes e with double s.\nge + gess + en = gegessen."},

  {type:"teach",kind:"word",nl:"gelesen",en:"read (Partizip II of lesen)",phonetic:"ge-LAY-zen",example:"A: Was hast du gelesen?\nB: Ich habe ein Buch gelesen.\nA: Ich habe die Zeitung gelesen.\nB: Ich habe auch Nachrichten gelesen.",exampleEn:"A: What did you read?\nB: I read a book.\nA: I read the newspaper.\nB: I also read the news.",note:"lesen = to read. Strong verb: vowel length shifts.\nge + les + en = gelesen."},

  {type:"teach",kind:"word",nl:"genommen",en:"taken (Partizip II of nehmen)",phonetic:"ge-NOM-men",example:"A: Hast du das Taxi genommen?\nB: Nein, ich habe den Bus genommen.\nA: Ich habe das Fahrrad genommen.\nB: Wir haben verschiedene Wege genommen.",exampleEn:"A: Did you take the taxi?\nB: No, I took the bus.\nA: I took the bicycle.\nB: We took different routes.",note:"nehmen = to take. Vowel change: e becomes o.\nge + nomm + en = genommen."},

  {type:"verb_table",title:"Irregular Partizip II Forms",label:"ge + changed stem + en",groups:[{label:"Key strong verbs",rows:[["schreiben","geschrieben"],["trinken","getrunken"],["essen","gegessen"],["lesen","gelesen"],["nehmen","genommen"]]}],note:"These Partizip II forms end in -en, not -t.\nThe stem vowel changes. Memorise as vocabulary."},

  {type:"mc",q:"What is the Partizip II of trinken?",opts:["getrinkt","getrunken","trinkiert","getrank"],ans:"getrunken",hint:"i becomes u: ge + trunk + en."},

  {type:"mc",q:"What is the Partizip II of essen?",opts:["gegessen","geessen","geesst","essiert"],ans:"gegessen",hint:"ge + gess + en (double s in the Partizip II)."},

  {type:"fb",s:"Hast du das Buch ___? (read, Partizip II)",a:"gelesen",opts:["gelesen","geleest","gelest","geliest"],hint:"lesen: ge + les + en = gelesen."},

  {type:"mc",q:"Ich habe den Bus genommen means:",opts:["I will take the bus","I am taking the bus","I took the bus","I need to take the bus"],ans:"I took the bus",hint:"Habe + genommen = Perfekt past."},

  {type:"mc",q:"Which ending do IRREGULAR Partizip II forms use?",opts:["-t","-et","-en","-iert"],ans:"-en",hint:"Strong verbs end in -en, not -t."},

  {type:"fb",s:"Er hat einen Brief ___. (schreiben)",a:"geschrieben",opts:["geschrieben","schriebte","schreiben","geschriebt"],hint:"schreiben: ei becomes ie. ge + schrieb + en."},

  {type:"mc",q:"Was hast du gegessen? asks about:",opts:["What you will eat","What you are eating","What you ate","What you cooked"],ans:"What you ate",hint:"Hast + gegessen = past tense of essen."},

  {type:"match",pairs:[{nl:"geschrieben",en:"written"},{nl:"getrunken",en:"drunk"},{nl:"gegessen",en:"eaten"},{nl:"genommen",en:"taken"}]},

  {type:"mc",q:"Which verb has a REGULAR Partizip II with -t?",opts:["schreiben","trinken","machen","nehmen"],ans:"machen",hint:"Regular verbs use ge-STEM-t; the others are strong verbs."},

  {type:"fb",s:"Sie hat Kaffee ___. (trinken)",a:"getrunken",opts:["getrunken","getrinkt","trinkiert","trinkete"],hint:"trinken: i becomes u. ge + trunk + en."},

  {type:"mc",q:"Which PAIR correctly links verb and Partizip II?",opts:["lesen = gelesst","lesen = gelesen","lesen = gelest","lesen = geliest"],ans:"lesen = gelesen",hint:"ge + les + en = gelesen."},

  {type:"mc",q:"Ich habe das Taxi genommen is in which tense?",opts:["Present","Future","Past (Perfekt)","Imperative"],ans:"Past (Perfekt)",hint:"Habe + Partizip II = Perfekt structure."},
]},

// ═══ L4: Trennbare im Perfekt ═══
{id:"deu9l4",title:"Trennbare im Perfekt",icon:"✂️",xp:20,board:true,steps:[
  {type:"intro",title:"Trennbare im Perfekt",desc:"You already know separable verbs: the prefix goes to the end in present tense. In Perfekt, the ge- is inserted BETWEEN the prefix and the stem. eingekauft, not ge-eingekauft!",goals:["Form Partizip II of separable verbs","Learn: eingekauft, aufgeräumt, angefangen, mitgebracht","Avoid the common ge-prefix error"]},

  {type:"tip",title:"Separable Verbs in Perfekt",text:"Separable verbs insert ge- between prefix and stem:\n\neinkaufen (to shop) = eingekauft (prefix + ge + stem + t)\naufräumen (to tidy up) = aufgeräumt\nanfangen (to begin) = angefangen\nmitbringen (to bring along) = mitgebracht\n\nFormula: PREFIX + ge + STEM + t/en\n\nNOT: ge + prefix + stem.",deepDive:{title:"Why does ge- go in the middle?",text:"Separable verbs are treated as one word in Partizip II, but the stress falls on the prefix. Since ge- needs to attach to the stressed syllable, it slots in between prefix and stem.\n\nThink of it like einkaufen becoming ein-ge-kauf-t. The prefix ein keeps its place; ge- slides into the gap. This is the same reason the prefix goes to the end in present tense: the verb's stress structure stays intact."}},

  {type:"teach",kind:"word",nl:"eingekauft",en:"shopped (Partizip II of einkaufen)",phonetic:"EYN-ge-kowft",example:"A: Hast du heute eingekauft?\nB: Ja, ich habe viel eingekauft.\nA: Ich habe auch eingekauft.\nB: Was hast du eingekauft?",exampleEn:"A: Did you go shopping today?\nB: Yes, I bought a lot.\nA: I shopped too.\nB: What did you buy?",note:"einkaufen = to shop. Separable: ein + kaufen.\nPartizip II: ein + ge + kauf + t = eingekauft."},

  {type:"teach",kind:"word",nl:"aufgeräumt",en:"tidied up (Partizip II of aufräumen)",phonetic:"OWF-ge-roymt",example:"A: Hast du dein Zimmer aufgeräumt?\nB: Ja, ich habe alles aufgeräumt.\nA: Gut! Ich habe auch aufgeräumt.\nB: Das Zimmer ist jetzt sauber.",exampleEn:"A: Did you tidy your room?\nB: Yes, I tidied everything up.\nA: Good! I tidied up too.\nB: The room is clean now.",note:"aufräumen = to tidy up. Prefix: auf.\nauf + ge + räum + t = aufgeräumt."},

  {type:"teach",kind:"word",nl:"angefangen",en:"started / begun (Partizip II of anfangen)",phonetic:"AN-ge-fang-en",example:"A: Wann hast du angefangen?\nB: Ich habe um neun Uhr angefangen.\nA: Gut. Ich habe früher angefangen.\nB: Wann hast du angefangen?",exampleEn:"A: When did you start?\nB: I started at nine o'clock.\nA: Good. I started earlier.\nB: When did you start?",note:"anfangen = to begin/start. Prefix: an.\nan + ge + fang + en = angefangen. (strong verb: fang)"},

  {type:"teach",kind:"word",nl:"mitgebracht",en:"brought along (Partizip II of mitbringen)",phonetic:"MIT-ge-brahkt",example:"A: Hast du Wein mitgebracht?\nB: Ja, ich habe zwei Flaschen mitgebracht.\nA: Super! Ich habe Käse mitgebracht.\nB: Perfekt, wir haben alles mitgebracht.",exampleEn:"A: Did you bring wine?\nB: Yes, I brought two bottles.\nA: Great! I brought cheese.\nB: Perfect, we brought everything.",note:"mitbringen = to bring along. Prefix: mit.\nmit + ge + brach + t = mitgebracht. (irregular stem: brach)"},

  {type:"verb_table",title:"Separable Verbs: Partizip II",label:"PREFIX + ge + STEM + t/en",groups:[{label:"Separable Partizip II",rows:[["einkaufen","eingekauft"],["aufräumen","aufgeräumt"],["anfangen","angefangen"],["mitbringen","mitgebracht"],["aufstehen","aufgestanden"],["anrufen","angerufen"]]}],note:"ge- goes BETWEEN prefix and stem.\nStrong separable verbs (like anfangen) use -en ending."},

  {type:"mc",q:"What is the Partizip II of einkaufen?",opts:["geeingekauft","eingekauft","einkaufte","eingekaufte"],ans:"eingekauft",hint:"Prefix ein + ge + stem kauf + t = eingekauft."},

  {type:"mc",q:"What is the Partizip II of aufräumen?",opts:["aufgeräumt","geaufräumt","aufräumte","aufgeräumte"],ans:"aufgeräumt",hint:"Prefix auf + ge + stem räum + t = aufgeräumt."},

  {type:"fb",s:"Ich habe früh ___. (anfangen, Partizip II)",a:"angefangen",opts:["angefangen","angefangt","angefängte","geangefangen"],hint:"anfangen is strong: an + ge + fang + en."},

  {type:"mc",q:"Where does ge- go in separable verb Partizip II?",opts:["Before the prefix","After the whole verb","Between prefix and stem","At the very end"],ans:"Between prefix and stem",hint:"PREFIX + ge + STEM + t/en"},

  {type:"fb",s:"Hast du Essen ___? (mitbringen, Partizip II)",a:"mitgebracht",opts:["mitgebracht","mitbrachte","gemitbracht","mitgebringt"],hint:"mitbringen is irregular: mit + ge + brach + t."},

  {type:"mc",q:"Ich habe aufgeräumt means:",opts:["I am tidying up","I tidied up","I will tidy up","I have to tidy up"],ans:"I tidied up",hint:"Habe + aufgeräumt = Perfekt past."},

  {type:"mc",q:"Which Partizip II is WRONG?",opts:["eingekauft","aufgeräumt","angefangen","geaufgestanden"],ans:"geaufgestanden",hint:"ge- goes between prefix and stem, never before the prefix."},

  {type:"match",pairs:[{nl:"eingekauft",en:"shopped"},{nl:"aufgeräumt",en:"tidied up"},{nl:"angefangen",en:"started"},{nl:"mitgebracht",en:"brought along"}]},

  {type:"mc",q:"angefangen is the Partizip II of:",opts:["aufräumen","anfangen","einkaufen","mitbringen"],ans:"anfangen",hint:"an + ge + fang + en. The stem fang comes from anfangen."},

  {type:"fb",s:"Wir haben viel ___. (einkaufen, Partizip II)",a:"eingekauft",opts:["eingekauft","gekauft","eingekaufte","geeingekauft"],hint:"ein + ge + kauf + t = eingekauft."},

  {type:"mc",q:"The Partizip II of anrufen (to call) is:",opts:["gerufen","angerufen","angerufft","gerufte"],ans:"angerufen",hint:"Prefix an + ge + stem ruf + en (strong verb)."},

  {type:"mc",q:"Hast du Wein mitgebracht? is asking:",opts:["Will you bring wine?","Are you bringing wine?","Did you bring wine?","Do you want wine?"],ans:"Did you bring wine?",hint:"Hast + mitgebracht = Perfekt past."},
]},

// ═══ L5: Verben ohne ge- ═══
{id:"deu9l5",title:"Verben ohne ge-",icon:"🚫",xp:20,board:true,steps:[
  {type:"intro",title:"Verben ohne ge-",desc:"Two groups of verbs do NOT add ge- in Partizip II. Verbs ending in -ieren (telefoniert, studiert) and verbs with inseparable prefixes (besucht, erzählt, verstanden).",goals:["Recognise -ieren verbs: no ge- prefix","Learn inseparable prefixes: be-, er-, ver-, zer-","Practise: telefoniert, studiert, besucht, erzählt, verstanden"]},

  {type:"tip",title:"Two Groups Without ge-",text:"Group 1: Verbs ending in -ieren\nThese are international loanwords.\ntelefonieren = telefoniert (not ge-telefoniert)\nstudieren = studiert\nfotografieren = fotografiert\n\nGroup 2: Inseparable prefix verbs\nPrefixes be-, er-, ver-, ent-, ge-, zer-\nbesuchen = besucht (not gebesucht)\nverstehen = verstanden\nerzählen = erzählt\n\nNo ge-. Ever. For these two groups.",deepDive:{title:"Why no ge-?",text:"-ieren verbs end in a stressed syllable (-IER-), so adding ge- before it would create two unstressed syllables at the start, which German phonology avoids. The -iert ending itself signals the past.\n\nInseparable prefix verbs (be-, er-, ver-, ent-, ge-, zer-) already start with an unstressed prefix that cannot be split. The verb is not separable, so there is no gap to insert ge- into. If the prefix is inseparable, there is no ge-."}},

  {type:"teach",kind:"word",nl:"telefoniert",en:"called / phoned (Partizip II of telefonieren)",phonetic:"teh-leh-foh-NEERT",cognate:{words:[{lang:"English",word:"telephoned"},{lang:"Dutch",word:"getelefoneerd"}],family:"borrowed"},example:"A: Hast du mit deiner Mutter telefoniert?\nB: Ja, ich habe eine Stunde telefoniert.\nA: Lang! Ich habe auch telefoniert.\nB: Mit wem hast du telefoniert?",exampleEn:"A: Did you call your mother?\nB: Yes, I talked for an hour.\nA: Long! I called too.\nB: Who did you call?",note:"telefonieren ends in -ieren. No ge-.\ntelefoniert is the full Partizip II."},

  {type:"teach",kind:"word",nl:"studiert",en:"studied (Partizip II of studieren)",phonetic:"shtoo-DEERT",cognate:{words:[{lang:"English",word:"studied"},{lang:"Dutch",word:"gestudeerd"}],family:"borrowed"},example:"A: Was hast du studiert?\nB: Ich habe Medizin studiert.\nA: Toll! Ich habe Informatik studiert.\nB: Wir haben verschiedene Fächer studiert.",exampleEn:"A: What did you study?\nB: I studied medicine.\nA: Great! I studied computer science.\nB: We studied different subjects.",note:"studieren ends in -ieren. No ge-.\nstudiert is the full Partizip II. Used for university study."},

  {type:"teach",kind:"word",nl:"besucht",en:"visited (Partizip II of besuchen)",phonetic:"be-ZOOKHT",example:"A: Hast du das Museum besucht?\nB: Ja, ich habe es gestern besucht.\nA: Ich habe meine Oma besucht.\nB: Wir haben verschiedene Orte besucht.",exampleEn:"A: Did you visit the museum?\nB: Yes, I visited it yesterday.\nA: I visited my grandmother.\nB: We visited different places.",note:"besuchen = to visit. Prefix: be- (inseparable).\nNo ge-: besucht (not: gebesucht)."},

  {type:"teach",kind:"word",nl:"erzählt",en:"told / narrated (Partizip II of erzählen)",phonetic:"er-TSAILT",example:"A: Was hast du erzählt?\nB: Ich habe eine Geschichte erzählt.\nA: Hast du die Wahrheit erzählt?\nB: Ja, ich habe alles erzählt.",exampleEn:"A: What did you tell?\nB: I told a story.\nA: Did you tell the truth?\nB: Yes, I told everything.",note:"erzählen = to tell/narrate. Prefix: er- (inseparable).\nNo ge-: erzählt (not: geerzählt)."},

  {type:"teach",kind:"word",nl:"verstanden",en:"understood (Partizip II of verstehen)",phonetic:"fer-SHTAN-den",example:"A: Hast du das verstanden?\nB: Ja, ich habe alles verstanden.\nA: Gut! Ich habe es nicht sofort verstanden.\nB: Der Lehrer hat es gut erklärt.",exampleEn:"A: Did you understand that?\nB: Yes, I understood everything.\nA: Good! I did not understand it right away.\nB: The teacher explained it well.",note:"verstehen = to understand. Prefix: ver- (inseparable).\nStrong verb: ver + stand + en = verstanden. No ge-."},

  {type:"verb_table",title:"Verbs Without ge- in Partizip II",label:"No ge- for these groups",groups:[{label:"-ieren verbs (no ge-)",rows:[["telefonieren","telefoniert"],["studieren","studiert"],["fotografieren","fotografiert"],["reparieren","repariert"]]},{label:"Inseparable prefix verbs (no ge-)",rows:[["besuchen","besucht"],["erzählen","erzählt"],["verstehen","verstanden"],["erklären","erklärt"]]}],note:"Neither group uses ge-.\nInseparable prefixes: be-, er-, ver-, ent-, ge-, zer-."},

  {type:"mc",q:"What is the Partizip II of telefonieren?",opts:["getelefoniert","telefonierte","telefoniert","telefonieret"],ans:"telefoniert",hint:"-ieren verbs never add ge-."},

  {type:"mc",q:"What is the Partizip II of besuchen?",opts:["gebesucht","besucht","besuchte","besuchiert"],ans:"besucht",hint:"be- is an inseparable prefix. No ge-."},

  {type:"fb",s:"Hast du das ___? (verstehen, Partizip II)",a:"verstanden",opts:["verstanden","verstant","gestandenes","geverstanden"],hint:"ver- is inseparable. Strong verb: ver + stand + en."},

  {type:"mc",q:"Which verb DOES use ge- in its Partizip II?",opts:["telefonieren","besuchen","kochen","erzählen"],ans:"kochen",hint:"Regular verb with no special prefix or -ieren ending."},

  {type:"fb",s:"Sie hat Medizin ___. (studieren, Partizip II)",a:"studiert",opts:["studiert","gestudiert","studieret","studiertet"],hint:"-ieren ending: no ge-. Just studiert."},

  {type:"mc",q:"Ich habe eine Geschichte erzählt means:",opts:["I am telling a story","I told a story","I will tell a story","I must tell a story"],ans:"I told a story",hint:"Habe + erzählt = Perfekt past."},

  {type:"mc",q:"Which prefix is inseparable?",opts:["ein-","auf-","mit-","ver-"],ans:"ver-",hint:"be-, er-, ver-, ent-, ge-, zer- are inseparable."},

  {type:"match",pairs:[{nl:"telefoniert",en:"phoned"},{nl:"besucht",en:"visited"},{nl:"erzählt",en:"told"},{nl:"verstanden",en:"understood"}]},

  {type:"mc",q:"fotografieren Partizip II is:",opts:["gefotografiert","fotografierte","fotografiert","fotografieret"],ans:"fotografiert",hint:"-ieren ending: no ge- ever."},

  {type:"fb",s:"Er hat den Fehler ___. (erklären, Partizip II)",a:"erklärt",opts:["erklärt","geerklart","erklärte","erklärien"],hint:"erklären: er- is inseparable. No ge-. Regular ending: erklärt."},

  {type:"mc",q:"Hast du das Museum besucht? Has no ge- because:",opts:["Museum is a neuter noun","besuchen ends in -ieren","be- is an inseparable prefix","It is an irregular verb"],ans:"be- is an inseparable prefix",hint:"Inseparable prefix verbs skip ge-."},
]},

// ═══ L6: Zeitausdrücke ═══
{id:"deu9l6",title:"Zeitausdrücke",icon:"📅",xp:20,board:true,steps:[
  {type:"intro",title:"Zeitausdrücke",desc:"Time expressions anchor your Perfekt sentences to specific moments: yesterday, last week, two days ago. Learn the key time words and how to position them in a Perfekt sentence.",goals:["Learn: gestern, letzte Woche, vor zwei Tagen, letzten Monat","Understand time expression position in the sentence","Combine time expressions with Perfekt"]},

  {type:"tip",title:"Time Expressions in Perfekt Sentences",text:"Time expressions usually go after haben (position 3) or at the start:\n\nIch habe gestern gekocht.\nGestern habe ich gekocht. (emphasis on gestern)\n\nCommon positions:\nStart of sentence = emphatic\nAfter haben = neutral\nPartizip II is ALWAYS last.\n\nTime expressions never push Partizip II from the end.",deepDive:{title:"Temporal adverbs in German",text:"German word order follows the TeKaMoLo rule for the middle field:\nTemporal (when) - Kausal (why) - Modal (how) - Lokal (where)\n\nTime expressions come first in the middle field, right after the conjugated verb. This means time comes before place:\n\nIch habe gestern in Berlin gearbeitet.\n(I worked in Berlin yesterday.)\nnot: Ich habe in Berlin gestern gearbeitet."}},

  {type:"teach",kind:"word",nl:"gestern",en:"yesterday",phonetic:"GES-tern",cognate:{words:[{lang:"English",word:"yester- (yesterday)"},{lang:"Dutch",word:"gisteren"}],family:"germanic"},example:"A: Was hast du gestern gemacht?\nB: Ich habe gestern eingekauft.\nA: Ich habe gestern auch eingekauft.\nB: Wir haben das Gleiche gemacht!",exampleEn:"A: What did you do yesterday?\nB: I went shopping yesterday.\nA: I went shopping yesterday too.\nB: We did the same thing!",note:"Most common time expression with Perfekt.\ngestern can open the sentence or follow haben."},

  {type:"teach",kind:"phrase",nl:"letzte Woche",en:"last week",phonetic:"LETS-te VO-khe",example:"A: Hast du letzte Woche gearbeitet?\nB: Ja, ich habe letzte Woche viel gearbeitet.\nA: Ich habe letzte Woche Urlaub gemacht.\nB: Schön! Wohin bist du gefahren?",exampleEn:"A: Did you work last week?\nB: Yes, I worked a lot last week.\nA: I went on holiday last week.\nB: Nice! Where did you go?",note:"letzte = last (feminine, accusative).\nWoche = week (die Woche). Common time frame."},

  {type:"teach",kind:"phrase",nl:"vor zwei Tagen",en:"two days ago",phonetic:"for tsvay TAH-gen",example:"A: Wann hast du angerufen?\nB: Ich habe vor zwei Tagen angerufen.\nA: Ich habe das vor drei Tagen gemacht.\nB: Ich habe vor einem Tag angefangen.",exampleEn:"A: When did you call?\nB: I called two days ago.\nA: I did that three days ago.\nB: I started one day ago.",note:"vor + [time] = [time] ago.\nvor einem Tag (one day ago), vor einer Woche (one week ago)."},

  {type:"teach",kind:"phrase",nl:"letzten Monat",en:"last month",phonetic:"LETS-ten MOH-nat",example:"A: Hast du letzten Monat viel gelernt?\nB: Ja, ich habe letzten Monat Deutsch gelernt.\nA: Ich habe letzten Monat ein Buch gelesen.\nB: Was hast du gelesen?",exampleEn:"A: Did you study a lot last month?\nB: Yes, I studied German last month.\nA: I read a book last month.\nB: What did you read?",note:"letzten = last (masculine, accusative).\nMonat = month (der Monat). letzten Monat = last month."},

  {type:"teach",kind:"phrase",nl:"letztes Jahr",en:"last year",phonetic:"LETS-tes YAHR",example:"A: Was hast du letztes Jahr gemacht?\nB: Ich habe letztes Jahr studiert.\nA: Ich habe letztes Jahr gearbeitet.\nB: Wir haben letztes Jahr viel erlebt.",exampleEn:"A: What did you do last year?\nB: I studied last year.\nA: I worked last year.\nB: We experienced a lot last year.",note:"letztes = last (neuter, accusative).\nJahr = year (das Jahr). letztes Jahr = last year."},

  {type:"teach",kind:"phrase",nl:"am Wochenende",en:"at the weekend",phonetic:"am VO-khen-en-de",example:"A: Was hast du am Wochenende gemacht?\nB: Ich habe am Wochenende Sport gemacht.\nA: Ich habe am Wochenende Freunde besucht.\nB: Das klingt schön!",exampleEn:"A: What did you do at the weekend?\nB: I did sport at the weekend.\nA: I visited friends at the weekend.\nB: That sounds nice!",note:"am Wochenende = at the weekend.\ndas Wochenende. am = an + dem (dative)."},

  {type:"mc",q:"Where does gestern typically go in a Perfekt sentence?",opts:["Always before Partizip II","Always at the very start","After haben or at the sentence start","After Partizip II"],ans:"After haben or at the sentence start",hint:"Time expressions go after haben or at the start for emphasis."},

  {type:"mc",q:"vor drei Tagen means:",opts:["in three days","for three days","three days ago","since three days"],ans:"three days ago",hint:"vor + time period = that period ago."},

  {type:"fb",s:"Ich habe ___ viel gearbeitet. (last week)",a:"letzte Woche",opts:["letzte Woche","letzten Monat","gestern","vor einem Jahr"],hint:"The feminine noun Woche takes letzte in accusative."},

  {type:"mc",q:"In Ich habe letzten Monat Deutsch gelernt, the time expression is:",opts:["Deutsch","gelernt","letzten Monat","habe"],ans:"letzten Monat",hint:"letzten Monat = last month = the time expression."},

  {type:"fb",s:"Was hast du ___ gemacht? (at the weekend)",a:"am Wochenende",opts:["am Wochenende","an das Wochenende","im Wochenende","das Wochenende"],hint:"Wochenende uses am (an + dem) in this expression."},

  {type:"mc",q:"Gestern habe ich gekocht versus Ich habe gestern gekocht. The difference is:",opts:["Grammatical correctness","Tense","Emphasis on gestern in the first","Meaning of the verb"],ans:"Emphasis on gestern in the first",hint:"Moving the time expression to the start creates emphasis."},

  {type:"mc",q:"Which time expression uses accusative masculine ending -en?",opts:["letzte Woche","letztes Jahr","letzten Monat","gestern"],ans:"letzten Monat",hint:"Monat = der Monat (masculine). Accusative masculine ending is -en."},

  {type:"match",pairs:[{nl:"gestern",en:"yesterday"},{nl:"letzte Woche",en:"last week"},{nl:"vor zwei Tagen",en:"two days ago"},{nl:"letzten Monat",en:"last month"}]},

  {type:"mc",q:"letztes Jahr uses neuter -es because:",opts:["Jahr ends in -r","Jahr = das Jahr (neuter noun)","All time words use neuter","letztes is always neuter"],ans:"Jahr = das Jahr (neuter noun)",hint:"The adjective ending matches the gender of the noun."},

  {type:"fb",s:"___ habe ich Freunde besucht. (yesterday, emphatic)",a:"Gestern",opts:["Gestern","Letzte Woche","Vor drei Tagen","Letzten Monat"],hint:"gestern = yesterday. At the start for emphasis."},

  {type:"mc",q:"vor einer Woche means:",opts:["next week","this week","one week ago","in one week"],ans:"one week ago",hint:"vor + time = that period ago. Einer Woche = one week."},
]},

// ═══ L7: Was hast du am Wochenende gemacht? ═══
{id:"deu9l7",title:"Was hast du am Wochenende gemacht?",icon:"📖",xp:20,board:true,steps:[
  {type:"intro",title:"Was hast du am Wochenende gemacht?",desc:"Put it all together. Regular verbs, irregular verbs, separable verbs, -ieren verbs, inseparable prefixes, and time expressions. Tell a full weekend story in Perfekt.",goals:["Combine all Partizip II types in one story","Use time expressions naturally","Produce a full weekend narrative in Perfekt"]},

  {type:"tip",title:"A Complete Weekend Story",text:"Ich habe am Samstag lange geschlafen.\nDann habe ich eingekauft.\nIch habe Pasta gekocht und gegessen.\nAm Abend habe ich einen Film gesehen.\nAm Sonntag habe ich Freunde besucht.\nWir haben Kaffee getrunken und erzählt.\n\nEvery sentence uses haben + Partizip II.\nTime words: am Samstag, dann, am Abend, am Sonntag.",deepDive:{title:"Two new strong Partizip II forms",text:"geschlafen: schlafen (to sleep) is a strong verb. Partizip II = geschlafen. The vowel a stays a, but the -en ending signals the strong class.\n\ngesehen: sehen (to see/watch) is also strong. Partizip II = gesehen. Vowel e stays e.\n\nBoth follow ge + stem + en. Both are very common and worth memorising now."}},

  {type:"teach",kind:"word",nl:"geschlafen",en:"slept (Partizip II of schlafen)",phonetic:"ge-SHLAH-fen",example:"A: Hast du gut geschlafen?\nB: Ja, ich habe lange geschlafen.\nA: Ich habe nur sechs Stunden geschlafen.\nB: Ich habe acht Stunden geschlafen.",exampleEn:"A: Did you sleep well?\nB: Yes, I slept a long time.\nA: I only slept six hours.\nB: I slept eight hours.",note:"schlafen = to sleep. Strong: ge + schlaf + en.\nVowel does not change. Partizip II: geschlafen."},

  {type:"teach",kind:"word",nl:"gesehen",en:"seen / watched (Partizip II of sehen)",phonetic:"ge-ZAY-en",example:"A: Hast du den Film gesehen?\nB: Ja, ich habe ihn gestern gesehen.\nA: Ich habe ihn noch nicht gesehen.\nB: Du musst ihn sehen! Er ist sehr gut.",exampleEn:"A: Did you see the film?\nB: Yes, I watched it yesterday.\nA: I have not seen it yet.\nB: You must see it! It is very good.",note:"sehen = to see/watch. Strong: ge + seh + en.\nPartizip II: gesehen."},

  {type:"mc",q:"Which Partizip II is from a separable verb?",opts:["gemacht","getrunken","aufgeräumt","telefoniert"],ans:"aufgeräumt",hint:"Separable verbs insert ge- between prefix and stem."},

  {type:"mc",q:"Which Partizip II comes from an -ieren verb?",opts:["gekocht","geschrieben","telefoniert","genommen"],ans:"telefoniert",hint:"-ieren verbs never add ge-."},

  {type:"fb",s:"Ich habe am Wochenende lange ___. (schlafen)",a:"geschlafen",opts:["geschlafen","geschlaft","schlief","geschläft"],hint:"schlafen is strong: ge + schlaf + en."},

  {type:"mc",q:"Was hast du am Wochenende gemacht? To answer naturally, you use:",opts:["Present tense only","Perfekt with haben","Future tense","Modal verb only"],ans:"Perfekt with haben",hint:"Reporting past weekend activities uses Perfekt."},

  {type:"drag_fill",s:"Ich {1} am Samstag {2} und dann Pasta {3}.",blanks:{"1":"habe","2":"eingekauft","3":"gekocht"},pool:["habe","hat","eingekauft","kochen","gekocht","kaufen"],hint:"Helper verb haben + two Partizip II forms."},

  {type:"mc",q:"Er hat einen Film gesehen. gesehen is:",opts:["Regular ge-STEM-t form","Irregular ge-STEM-en form (strong verb)","An inseparable prefix verb","An -ieren verb"],ans:"Irregular ge-STEM-en form (strong verb)",hint:"sehen = strong verb. ge + seh + en = gesehen."},

  {type:"fb",s:"Wir haben Kaffee getrunken und Geschichten ___. (erzählen)",a:"erzählt",opts:["erzählt","erzählen","geerzählt","erzählte"],hint:"erzählen: er- is inseparable. No ge-. Regular ending: -t."},

  {type:"mc",q:"Ich habe Freunde besucht. besucht has no ge- because:",opts:["Freunde is plural","besuchen is an -ieren verb","be- is an inseparable prefix","besuchen is a separable verb"],ans:"be- is an inseparable prefix",hint:"be-, er-, ver-, ent-, ge-, zer- are inseparable. No ge- added."},

  {type:"drag_fill",s:"Sie hat gestern {1} und dann ihren Bruder {2}.",blanks:{"1":"eingekauft","2":"besucht"},pool:["eingekauft","eingekaufte","besucht","besuchen","gekauft","besuchte"],hint:"Separable verb (ein-) and inseparable prefix verb (be-)."},

  {type:"mc",q:"Which sentence has correct Perfekt word order?",opts:["Gestern ich gemacht habe Sport.","Ich habe gestern Sport gemacht.","Ich gestern Sport habe gemacht.","Sport habe gestern ich gemacht."],ans:"Ich habe gestern Sport gemacht.",hint:"haben at position 2, time word after haben, Partizip II at end."},

  {type:"mc",q:"Du hast am Abend ferngesehen. The Partizip II is from:",opts:["sehen","fernsehen (separable)","gesehen as strong only","ferngeseh"],ans:"fernsehen (separable)",hint:"fernsehen: prefix fern + ge + seh + en = ferngesehen."},

  {type:"fb",s:"Was ___ du am Wochenende gemacht?",a:"hast",opts:["hast","habe","haben","hat"],hint:"Du-form of haben = hast. W-question: hast moves to position 2."},

  {type:"mc",q:"To say I photographed the city (fotografieren):",opts:["Ich habe die Stadt gefotografiert.","Ich habe die Stadt fotografiert.","Ich habe die Stadt fotografiet.","Ich habe die Stadt fotografie."],ans:"Ich habe die Stadt fotografiert.",hint:"-ieren verbs: no ge-. Partizip II = fotografiert."},

  {type:"mc",q:"Am Sonntag habe ich Freunde besucht. Which element comes first for emphasis?",opts:["Freunde (object)","habe (helper verb)","Am Sonntag (time expression)","besucht (Partizip II)"],ans:"Am Sonntag (time expression)",hint:"Fronting the time expression creates emphasis on when."},
]},

// ═══ L8: Perfekt Review ═══
{id:"deu9l8",title:"Perfekt Review",icon:"🌟",xp:25,board:true,steps:[
  {type:"intro",title:"Perfekt Review",desc:"Unit 9 complete! You now know all four Partizip II patterns: regular ge-STEM-t, irregular ge-STEM-en, separable PREFIX-ge-STEM-t/en, and verbs without ge-. This review brings them all together.",goals:["Distinguish all four Partizip II patterns","Use time expressions with Perfekt","Produce Perfekt sentences fluently"]},

  {type:"tip",title:"Unit 9: The Complete Partizip II Map",text:"Pattern 1: ge + STEM + t (regular)\nmachen = gemacht, kochen = gekocht\n\nPattern 2: ge + (new stem) + en (strong)\nschreiben = geschrieben, trinken = getrunken\n\nPattern 3: PREFIX + ge + STEM + t/en (separable)\neinkaufen = eingekauft, anfangen = angefangen\n\nPattern 4: no ge- (-ieren or inseparable prefix)\nbesuchen = besucht, studieren = studiert\n\nHelper: haben. Partizip II always at the END.",deepDive:{title:"How to identify which pattern to use",text:"Step 1: Is the verb an -ieren verb? No ge-.\nStep 2: Does the verb have an inseparable prefix (be-, er-, ver-, ent-, ge-, zer-)? No ge-.\nStep 3: Does the verb have a separable prefix (auf-, ein-, mit-, an-)? Use PREFIX + ge + STEM.\nStep 4: Is it a strong verb with a vowel change? Use ge + (new stem) + en.\nStep 5: None of the above? Use ge + STEM + t.\n\nWith practice, you will feel the pattern immediately."}},

  {type:"mc",q:"What is the Partizip II of spielen?",opts:["gespielt","gespielrt","spielierte","gespieltet"],ans:"gespielt",hint:"Regular: ge + spiel + t = gespielt."},

  {type:"mc",q:"What is the Partizip II of schreiben?",opts:["geschrieben","geschriebte","schriebiert","geschriebt"],ans:"geschrieben",hint:"Strong: ei becomes ie. ge + schrieb + en."},

  {type:"mc",q:"What is the Partizip II of aufräumen?",opts:["geaufräumt","aufräumte","aufgeräumt","aufräumt"],ans:"aufgeräumt",hint:"Separable: auf + ge + räum + t = aufgeräumt."},

  {type:"mc",q:"What is the Partizip II of besuchen?",opts:["besucht","gebesucht","besuchte","besuchiert"],ans:"besucht",hint:"be- is inseparable. No ge-. Regular stem: besucht."},

  {type:"mc",q:"What is the Partizip II of studieren?",opts:["gestudiert","studierte","studiert","studieret"],ans:"studiert",hint:"-ieren ending: no ge-. Just studiert."},

  {type:"fb",s:"Ich habe letzte Woche viel ___. (arbeiten)",a:"gearbeitet",opts:["gearbeitet","gearbeit","arbeitete","gearbeitete"],hint:"arbeiten: stem ends in -t, so ge + arbeit + et."},

  {type:"fb",s:"Hast du das Buch ___? (lesen)",a:"gelesen",opts:["gelesen","geleest","gelest","geliest"],hint:"lesen: strong verb. ge + les + en = gelesen."},

  {type:"drag_fill",s:"Ich {1} gestern {2} und dann einen Brief {3}.",blanks:{"1":"habe","2":"eingekauft","3":"geschrieben"},pool:["habe","hat","eingekauft","einkaufte","geschrieben","geschrieb","gekauft"],hint:"haben + separable Partizip II + strong irregular Partizip II."},

  {type:"mc",q:"Which sentence uses the WRONG form?",opts:["Ich habe Kaffee getrunken.","Er hat Musik gehört.","Sie habe das Museum gebesucht.","Wir haben viel gelernt."],ans:"Sie habe das Museum gebesucht.",hint:"Two errors: habe wrong for sie, and gebesucht wrong (be- inseparable, no ge-)."},

  {type:"mc",q:"Wir haben letzten Monat viel erlebt. erlebt has no ge- because:",opts:["-leben ends in -en","er- is an inseparable prefix","it is an -ieren verb","leben is irregular"],ans:"er- is an inseparable prefix",hint:"erleben: er- is inseparable. No ge-."},

  {type:"fb",s:"Hast du die E-Mail ___? (schreiben)",a:"geschrieben",opts:["geschrieben","geschriebte","schrieben","geschriebt"],hint:"schreiben: strong. ei changes to ie. ge + schrieb + en."},

  {type:"mc",q:"Du hast vor drei Tagen angerufen means:",opts:["You will call in three days","You called three days ago","You are calling in three days","You called for three days"],ans:"You called three days ago",hint:"vor + drei Tagen = three days ago. Perfekt = past."},

  {type:"match",pairs:[{nl:"gemacht",en:"made/done"},{nl:"geschrieben",en:"written"},{nl:"eingekauft",en:"shopped"},{nl:"telefoniert",en:"phoned"}]},

  {type:"mc",q:"In Ich habe gestern viel gegessen, gegessen sits at:",opts:["Position 1","Position 2","After gestern","At the end"],ans:"At the end",hint:"Partizip II is always the last element in a main clause."},

  {type:"drag_fill",s:"Sie {1} letztes Jahr Informatik {2} und viele Freunde {3}.",blanks:{"1":"hat","2":"studiert","3":"besucht"},pool:["hat","habe","studiert","gestudiert","besucht","gebesucht","lernt"],hint:"-ieren verb and inseparable prefix verb. Both have no ge-."},

  {type:"mc",q:"Which Partizip II pair both come from strong verbs?",opts:["gemacht / telefoniert","geschrieben / getrunken","eingekauft / aufgeräumt","besucht / erzählt"],ans:"geschrieben / getrunken",hint:"Strong verbs use ge-STEM-en with a vowel change in the stem."},

  {type:"mc",q:"Was hast du am Wochenende gemacht? A natural, complete Perfekt answer is:",opts:["Ja, ich mache Sport gern.","Ich habe am Samstag eingekauft und am Sonntag Freunde besucht.","Ich werde nächste Woche kochen.","Am Wochenende ich schlafe lange."],ans:"Ich habe am Samstag eingekauft und am Sonntag Freunde besucht.",hint:"Uses Perfekt correctly with time expressions and two Partizip II forms."},
]},

]},


// ══════════════════════════════════════════════════════════════════════════
// UNIT 6: Meine Wohnung — Home, Rooms, Furniture, es gibt + Accusative
// ══════════════════════════════════════════════════════════════════════════
{n:6,lang:"de",track:"v1",title:"Meine Wohnung",sub:"Home, Rooms & es gibt",icon:"🏠",level:"A1.2",color:"#7B5EE8",lessons:[

// ═══ L1: Zimmer ═══
{id:"deu6l1",title:"Zimmer",icon:"🏠",xp:15,board:true,steps:[
  {type:"intro",title:"Zimmer",desc:"A German home has many rooms. Learn the names of each room so you can describe where you are, where things are, and what your home looks like.",goals:["6 core room words","der/die/das for each room","Describe your home"]},

  {type:"teach",kind:"word",nl:"die Küche",en:"the kitchen",phonetic:"dee KÜ-che",example:"A: Wo bist du?\nB: Ich bin in der Küche.\nA: Machst du Frühstück?",exampleEn:"A: Where are you?\nB: I am in the kitchen.\nA: Are you making breakfast?",note:"die Küche (feminine).\nKüchenmaschine = kitchen machine (compound)."},

  {type:"teach",kind:"word",nl:"das Schlafzimmer",en:"the bedroom",phonetic:"dahs SHLAHF-tsim-mer",cognate:{words:[{lang:"English",word:"sleep room (literal)"}],family:"germanic"},example:"A: Wo schläfst du?\nB: Ich schlafe im Schlafzimmer.\nA: Natürlich!",exampleEn:"A: Where do you sleep?\nB: I sleep in the bedroom.\nA: Of course!",note:"Schlaf = sleep. Zimmer = room.\ndas Schlafzimmer (neuter)."},

  {type:"teach",kind:"word",nl:"das Badezimmer",en:"the bathroom",phonetic:"dahs BAH-de-tsim-mer",cognate:{words:[{lang:"English",word:"bathing room (literal)"}],family:"germanic"},example:"A: Kann ich das Badezimmer benutzen?\nB: Ja, die erste Tür links.\nA: Danke!",exampleEn:"A: Can I use the bathroom?\nB: Yes, the first door on the left.\nA: Thanks!",note:"Baden = to bathe. Zimmer = room.\ndas Badezimmer (neuter)."},

  {type:"teach",kind:"word",nl:"das Wohnzimmer",en:"the living room",phonetic:"dahs VOHN-tsim-mer",cognate:{words:[{lang:"English",word:"living room (literal)"}],family:"germanic"},example:"A: Lass uns im Wohnzimmer sitzen.\nB: Gute Idee! Ich hole Tee.\nA: Super!",exampleEn:"A: Let us sit in the living room.\nB: Good idea! I will get tea.\nA: Great!",note:"Wohnen = to live/reside. Zimmer = room.\ndas Wohnzimmer (neuter)."},

  {type:"teach",kind:"word",nl:"der Flur",en:"the hallway",phonetic:"dehr floor",example:"A: Deine Jacke hängt im Flur.\nB: Danke, ich habe sie gesucht!\nA: Ich habe sie dort gesehen.",exampleEn:"A: Your jacket is in the hallway.\nB: Thanks, I was looking for it!\nA: I saw it there.",note:"The entrance hall connecting all rooms.\nder Flur (masculine)."},

  {type:"teach",kind:"word",nl:"das Arbeitszimmer",en:"the study / home office",phonetic:"dahs AR-baits-tsim-mer",example:"A: Wo ist Papa?\nB: Er ist im Arbeitszimmer.\nA: Er arbeitet schon wieder!",exampleEn:"A: Where is Dad?\nB: He is in the study.\nA: He is working again!",note:"Arbeit = work. Zimmer = room.\ndas Arbeitszimmer (neuter)."},

  {type:"teach",kind:"word",nl:"der Keller",en:"the basement / cellar",phonetic:"dehr KEL-ler",cognate:{words:[{lang:"English",word:"cellar"}],family:"germanic"},example:"A: Wo sind die Getränke?\nB: Im Keller auf dem Regal.\nA: Ich hole welche.",exampleEn:"A: Where are the drinks?\nB: In the basement on the shelf.\nA: I will get some.",note:"der Keller (masculine).\nCommon in German houses for storage."},

  {type:"tip",title:"Room Genders: A Pattern to Notice",text:"Most rooms are neuter (das) when they contain -zimmer:\n\ndas Schlafzimmer (bedroom)\ndas Badezimmer (bathroom)\ndas Wohnzimmer (living room)\ndas Arbeitszimmer (study)\n\nExceptions: die Küche (feminine), der Flur (masculine).\n\nRule: If the room name ends in -zimmer, it is almost always das.",deepDive:{title:"Why -zimmer rooms are neuter",text:"In German, compound nouns take the gender of their LAST component. Zimmer (room) is neuter: das Zimmer. So any compound ending in -zimmer inherits neuter gender.\n\nBadezimmer = Baden + Zimmer = das Zimmer = das Badezimmer\nSchlafzimmer = Schlafen + Zimmer = das Zimmer = das Schlafzimmer\n\nThis is the compound gender rule. You will use it thousands of times in German."}},

  {type:"mc",q:"Which room article is WRONG?",opts:["die Küche","das Wohnzimmer","der Badezimmer","der Flur"],ans:"der Badezimmer",hint:"Badezimmer ends in -zimmer. What gender is das Zimmer?"},

  {type:"mc",q:"You go to shower. You go to:",opts:["das Wohnzimmer","die Küche","das Badezimmer","der Flur"],ans:"das Badezimmer",hint:"Shower = bathing. Which room is for bathing?"},

  {type:"fb",s:"Ich schlafe im ___zimmer.",a:"Schlaf",opts:["Schlaf","Wohn","Bade","Flur"],hint:"The room for sleeping. Schlaf = sleep."},

  {type:"mc",q:"'Das Wohnzimmer' literally means:",opts:["The sleeping room","The washing room","The living room","The work room"],ans:"The living room",hint:"Wohnen = to live/reside."},

  {type:"match",pairs:[{nl:"die Küche",en:"the kitchen"},{nl:"das Schlafzimmer",en:"the bedroom"},{nl:"das Wohnzimmer",en:"the living room"},{nl:"der Flur",en:"the hallway"}]},

  {type:"mc",q:"A room ending in '-zimmer' is almost always:",opts:["masculine (der)","feminine (die)","neuter (das)","plural (die)"],ans:"neuter (das)",hint:"Compounds take the gender of their last part. das Zimmer."},

  {type:"fb",s:"Wo ist das Bade___?",a:"zimmer",opts:["zimmer","raum","haus","flur"],hint:"Complete the compound: Bade + ___"},

  {type:"mc",q:"Where would you store old boxes and bikes?",opts:["das Wohnzimmer","die Küche","der Flur","der Keller"],ans:"der Keller",hint:"Underground storage space in German homes."},

  {type:"mc",q:"'Er ist im Arbeitszimmer' tells you he is:",opts:["Eating","Working or studying","Sleeping","In the hallway"],ans:"Working or studying",hint:"Arbeit = work. Arbeitszimmer = room for work."},
]},

// ═══ L2: Möbel ═══
{id:"deu6l2",title:"Möbel",icon:"🛋️",xp:15,board:true,steps:[
  {type:"intro",title:"Möbel",desc:"Every room has furniture. Learn the core pieces you will find in a German home, with their articles, so you can describe what is where.",goals:["8 furniture words with articles","der/die/das for each item","First furniture descriptions"]},

  {type:"teach",kind:"word",nl:"der Tisch",en:"the table",phonetic:"dehr tish",cognate:{words:[{lang:"English",word:"dish (related root)"}],family:"germanic"},example:"A: Ist das Essen fertig?\nB: Ja! Leg es bitte auf den Tisch.\nA: Sofort!",exampleEn:"A: Is the food ready?\nB: Yes! Please put it on the table.\nA: Right away!",note:"der Tisch (masculine).\nEsstisch = dining table. Schreibtisch = writing desk."},

  {type:"teach",kind:"word",nl:"der Stuhl",en:"the chair",phonetic:"dehr shtool",cognate:{words:[{lang:"English",word:"stool"}],family:"germanic"},example:"A: Nimm bitte Platz!\nB: Danke, wo soll ich sitzen?\nA: Auf dem Stuhl neben dem Fenster.",exampleEn:"A: Please have a seat!\nB: Thanks, where should I sit?\nA: On the chair next to the window.",note:"der Stuhl (masculine).\nPlural: die Stühle."},

  {type:"teach",kind:"word",nl:"das Bett",en:"the bed",phonetic:"dahs bet",cognate:{words:[{lang:"English",word:"bed"}],family:"germanic"},example:"A: Ich bin so müde!\nB: Geh doch ins Bett.\nA: Gute Idee. Gute Nacht!",exampleEn:"A: I am so tired!\nB: Then go to bed.\nA: Good idea. Good night!",note:"das Bett (neuter).\nIns Bett gehen = to go to bed."},

  {type:"teach",kind:"word",nl:"der Schrank",en:"the wardrobe / cabinet",phonetic:"dehr shrank",example:"A: Wo sind meine Jeans?\nB: Im Schrank, zweites Regal.\nA: Gefunden, danke!",exampleEn:"A: Where are my jeans?\nB: In the wardrobe, second shelf.\nA: Found them, thanks!",note:"der Schrank (masculine).\nKleiderschrank = wardrobe.\nKüchenschrank = kitchen cabinet."},

  {type:"teach",kind:"word",nl:"das Sofa",en:"the sofa / couch",phonetic:"dahs ZOH-fah",cognate:{words:[{lang:"English",word:"sofa"}],family:"borrowed"},example:"A: Komm, setz dich aufs Sofa!\nB: Gerne, ich bin so müde.\nA: Ich auch. Lass uns einen Film gucken.",exampleEn:"A: Come, sit on the sofa!\nB: Sure, I am so tired.\nA: Me too. Let us watch a film.",note:"das Sofa (neuter).\nCouch (die Couch) also used in informal German."},

  {type:"teach",kind:"word",nl:"die Lampe",en:"the lamp",phonetic:"dee LAM-pe",cognate:{words:[{lang:"English",word:"lamp"}],family:"borrowed"},example:"A: Es ist dunkel hier.\nB: Mach die Lampe an!\nA: Wo ist der Schalter?",exampleEn:"A: It is dark here.\nB: Turn on the lamp!\nA: Where is the switch?",note:"die Lampe (feminine).\nMach an = turn on (separable: anmachen).\nMach aus = turn off."},

  {type:"teach",kind:"word",nl:"der Kühlschrank",en:"the refrigerator",phonetic:"dehr KÜHL-shrank",cognate:{words:[{lang:"English",word:"cool cabinet (literal)"}],family:"germanic"},example:"A: Haben wir noch Milch?\nB: Schau mal in den Kühlschrank.\nA: Ja, da ist noch eine Flasche.",exampleEn:"A: Do we still have milk?\nB: Have a look in the fridge.\nA: Yes, there is still a bottle.",note:"Kühl = cool. Schrank = cabinet.\nder Kühlschrank (masculine)."},

  {type:"teach",kind:"word",nl:"das Regal",en:"the shelf / bookshelf",phonetic:"dahs reh-GAHL",example:"A: Wo sind meine Bücher?\nB: Im Regal neben der Tür.\nA: Ah, da sind sie!",exampleEn:"A: Where are my books?\nB: On the shelf next to the door.\nA: Ah, there they are!",note:"das Regal (neuter).\nBücherregal = bookshelf.\nPlural: die Regale."},

  {type:"tip",title:"Furniture Articles: The Gender Spread",text:"Furniture genders are mixed, no single rule covers all:\n\nMasculine (der): Tisch, Stuhl, Schrank, Kühlschrank\nFeminine (die): Lampe\nNeuter (das): Bett, Sofa, Regal\n\nLearn each noun with its article from day one.\nIf you forget the article, you cannot use the word correctly in sentences.",deepDive:{title:"Compound nouns in furniture",text:"German builds specific furniture by combining words:\n\nSchreib + Tisch = Schreibtisch (writing desk)\nEss + Tisch = Esstisch (dining table)\nKleidung + Schrank = Kleiderschrank (wardrobe)\nKüchen + Schrank = Küchenschrank (kitchen cabinet)\nBücher + Regal = Bücherregal (bookshelf)\n\nThe last word (Grundwort) always determines the gender.\nSchreibtisch = der Tisch = der Schreibtisch."}},

  {type:"mc",q:"Which furniture article is correct?",opts:["die Bett","der Sofa","die Lampe","das Stuhl"],ans:"die Lampe",hint:"Check the teach cards. Only one of these has the right article."},

  {type:"mc",q:"Where do you store clothes?",opts:["das Regal","der Kühlschrank","der Schrank","das Bett"],ans:"der Schrank",hint:"Kleiderschrank = wardrobe."},

  {type:"fb",s:"Ich lege das Buch auf das ___.",a:"Regal",opts:["Regal","Sofa","Bett","Stuhl"],hint:"Where do books go? Bücher + ___ = Bücherregal."},

  {type:"match",pairs:[{nl:"der Tisch",en:"the table"},{nl:"das Bett",en:"the bed"},{nl:"der Schrank",en:"the wardrobe"},{nl:"die Lampe",en:"the lamp"}]},

  {type:"mc",q:"'Der Kühlschrank' literally means:",opts:["The cold room","The cool cabinet","The food box","The ice machine"],ans:"The cool cabinet",hint:"Kühl = cool. Schrank = cabinet."},

  {type:"fb",s:"Setz dich auf den ___!",a:"Stuhl",opts:["Stuhl","Tisch","Regal","Bett"],hint:"You sit ON it. What piece of furniture?"},

  {type:"mc",q:"Which compound means writing desk?",opts:["Esstisch","Schreibtisch","Küchentisch","Couchtisch"],ans:"Schreibtisch",hint:"Schreiben = to write. Writing + table."},

  {type:"mc",q:"'Mach die Lampe an!' means:",opts:["Break the lamp","Turn the lamp on","Move the lamp","Buy the lamp"],ans:"Turn the lamp on",hint:"Anmachen = to turn on (separable verb from Unit 5)."},

  {type:"drag_fill",s:"Das {1} steht im Schlafzimmer. Auf dem {2} liegt ein Buch. Die {3} gibt Licht.",blanks:{"1":"Bett","2":"Regal","3":"Lampe"},pool:["Bett","Sofa","Regal","Tisch","Lampe","Kühlschrank","Stuhl"],hint:"Bedroom scene: what sleeps, what holds books, what gives light."},
]},

// ═══ L3: Es gibt ═══
{id:"deu6l3",title:"Es gibt",icon:"🏡",xp:15,board:true,steps:[
  {type:"intro",title:"Es gibt",desc:"'Es gibt' means 'there is' or 'there are'. It is one of the most useful sentences in German. You use it to describe what exists in a place, and it always triggers the accusative case.",goals:["Es gibt = there is / there are","Es gibt + accusative article","Es gibt keinen/keine/kein for negation"]},

  {type:"teach",kind:"phrase",nl:"Es gibt",en:"there is / there are",phonetic:"es gibt",example:"A: Was gibt es in der Küche?\nB: Es gibt einen Tisch und vier Stühle.\nA: Und ein Sofa?",exampleEn:"A: What is in the kitchen?\nB: There is a table and four chairs.\nA: And a sofa?",note:"Es gibt = it gives (literally).\nAlways followed by accusative case.\nWorks for singular AND plural."},

  {type:"tip",title:"Es gibt + Accusative: The Rule",text:"After 'es gibt', nouns must be in the ACCUSATIVE case.\n\nIn A1, only masculine nouns change:\nder Tisch (nominative) becomes einen Tisch (accusative)\ndie Lampe stays eine Lampe\ndas Bett stays ein Bett\n\nSo: Es gibt einen Tisch. Es gibt eine Lampe. Es gibt ein Bett.",deepDive:{title:"Why accusative after es gibt?",text:"'Es gibt' takes an accusative object because it is a real verb sentence: Es = it, gibt = gives. The thing that is 'given' (the thing that exists) is always in accusative position.\n\nThis is the same reason that 'haben' takes accusative: 'Ich habe einen Tisch'. 'Es gibt einen Tisch' works by the same logic."}},

  {type:"teach",kind:"phrase",nl:"Es gibt einen Tisch.",en:"There is a table.",phonetic:"es gibt AY-nen tish",example:"A: Wie ist die Küche?\nB: Es gibt einen Tisch und zwei Stühle.\nA: Und einen Kühlschrank?",exampleEn:"A: What is the kitchen like?\nB: There is a table and two chairs.\nA: And a refrigerator?",note:"Einen = accusative of ein for masculine nouns.\nder Tisch (nominative) becomes einen Tisch."},

  {type:"teach",kind:"phrase",nl:"Es gibt eine Lampe.",en:"There is a lamp.",phonetic:"es gibt AY-ne LAM-pe",example:"A: Ist es dunkel im Zimmer?\nB: Nein, es gibt eine Lampe.\nA: Gut, dann kann ich lesen.",exampleEn:"A: Is it dark in the room?\nB: No, there is a lamp.\nA: Good, then I can read.",note:"Eine = accusative of eine for feminine nouns.\ndie Lampe stays eine Lampe. Feminine accusative indefinite = eine (no change!)."},

  {type:"teach",kind:"phrase",nl:"Es gibt ein Bett.",en:"There is a bed.",phonetic:"es gibt ain bet",example:"A: Kann ich bei dir schlafen?\nB: Ja! Es gibt ein Bett im Gästezimmer.\nA: Super, danke!",exampleEn:"A: Can I sleep at your place?\nB: Yes! There is a bed in the guest room.\nA: Great, thanks!",note:"Ein = accusative of ein for neuter nouns.\ndas Bett stays ein Bett. Neuter accusative indefinite = no change!"},

  {type:"teach",kind:"phrase",nl:"Es gibt keinen Schrank.",en:"There is no wardrobe.",phonetic:"es gibt KAY-nen shrank",example:"A: Wo kann ich meine Kleider hängen?\nB: Tut mir leid, es gibt keinen Schrank.\nA: Kein Problem, ich habe Taschen.",exampleEn:"A: Where can I hang my clothes?\nB: Sorry, there is no wardrobe.\nA: No problem, I have bags.",note:"Keinen = accusative negative for masculine nouns.\nkein follows the same pattern as ein:\nkeinen (masc. acc.), keine (fem.), kein (neut.)"},

  {type:"teach",kind:"phrase",nl:"Es gibt keine Lampe.",en:"There is no lamp.",phonetic:"es gibt KAY-ne LAM-pe",example:"A: Ist es hell im Keller?\nB: Nein, es gibt keine Lampe.\nA: Dann brauchen wir eine Taschenlampe.",exampleEn:"A: Is it bright in the basement?\nB: No, there is no lamp.\nA: Then we need a torch.",note:"Keine = accusative negative for feminine nouns.\ndie Lampe becomes keine Lampe."},

  {type:"teach",kind:"phrase",nl:"Es gibt kein Bett.",en:"There is no bed.",phonetic:"es gibt kain bet",example:"A: Kann ich im Gästezimmer schlafen?\nB: Da gibt es kein Bett, leider.\nA: Dann schlafe ich auf dem Sofa.",exampleEn:"A: Can I sleep in the guest room?\nB: There is no bed there, unfortunately.\nA: Then I will sleep on the sofa.",note:"Kein = accusative negative for neuter nouns.\ndas Bett becomes kein Bett."},

  {type:"tip",title:"Summary: Es gibt + (k)ein",text:"After es gibt, use the accusative indefinite article:\n\nMasculine: ein -> einen, kein -> keinen\nFeminine: eine -> eine (no change), keine -> keine\nNeuter: ein -> ein (no change), kein -> kein\n\nOnly MASCULINE nouns change: ein -> einen, kein -> keinen.\nFeminine and neuter stay the same in accusative indefinite!",deepDive:{title:"A preview of the full accusative system",text:"You are learning accusative in A1 through practical use: after haben and es gibt. The full accusative system also applies to:\n\n1. Definite articles: der -> den (masc.), die stays die, das stays das\n2. Pronouns: er -> ihn (him)\n3. Adjectives: guten Tisch, gute Lampe, gutes Bett\n\nYou will study the full definite accusative in L4 of this unit. For now, master einen/keine for es gibt."}},

  {type:"mc",q:"'Es gibt ___ Stuhl.' What goes in the blank for an existing chair?",opts:["der","ein","einen","einem"],ans:"einen",hint:"Stuhl is masculine. Es gibt triggers accusative. ein to einen."},

  {type:"mc",q:"'Es gibt ___ Sofa in der Küche.' (There is no sofa in the kitchen.)",opts:["kein","keinen","keine","nicht"],ans:"kein",hint:"Sofa is neuter (das). Neuter negative accusative: kein."},

  {type:"fb",s:"In meiner Wohnung gibt es ___ Badezimmer.",a:"ein",opts:["ein","eine","einen","kein"],hint:"Badezimmer is neuter (das). Accusative indefinite for neuter."},

  {type:"mc",q:"'Es gibt keine Küche.' What does this mean?",opts:["There is a kitchen","The kitchen is nice","There is no kitchen","The kitchen is big"],ans:"There is no kitchen",hint:"keine = no / not a. Küche is feminine."},

  {type:"match",pairs:[{nl:"Es gibt einen Tisch.",en:"There is a table."},{nl:"Es gibt eine Lampe.",en:"There is a lamp."},{nl:"Es gibt kein Bett.",en:"There is no bed."},{nl:"Es gibt keinen Schrank.",en:"There is no wardrobe."}]},

  {type:"mc",q:"Which form is correct? 'Es gibt ___ Lampe.'",opts:["eine","einen","ein","keinen"],ans:"eine",hint:"Lampe is feminine (die). Feminine accusative indefinite = eine."},

  {type:"fb",s:"Es gibt ___ Regal im Wohnzimmer.",a:"ein",opts:["ein","eine","einen","kein"],hint:"Regal is neuter (das). Accusative indefinite."},

  {type:"mc",q:"Why does 'Es gibt' use accusative case?",opts:["Random rule","Because it is in a sentence with 'there'","Es gibt is a verb taking an object, like haben","Because rooms are always accusative"],ans:"Es gibt is a verb taking an object, like haben",hint:"Es gibt = it gives. The thing that exists is the object."},
]},

// ═══ L4: den Akkusativ ═══
{id:"deu6l4",title:"den Akkusativ",icon:"📚",xp:15,board:true,steps:[
  {type:"intro",title:"den Akkusativ",desc:"You have been using accusative since Unit 3 with 'haben'. Now name it, understand the full pattern, and practice it with the definite article. The key rule: only masculine nouns change.",goals:["der to den (masculine accusative)","die and das stay the same","Accusative in real sentences with common verbs"]},

  {type:"tip",title:"The Accusative Case: Full Overview",text:"The accusative is the case of the DIRECT OBJECT: the thing being acted on.\n\nDefinite articles:\nder -> den (masculine)\ndie -> die (feminine, no change)\ndas -> das (neuter, no change)\n\nIndefinite articles:\nein -> einen (masculine)\neine -> eine (feminine, no change)\nein -> ein (neuter, no change)\n\nOnly masculine nouns change. That is the core rule.",deepDive:{title:"Why only masculine changes?",text:"In Old High German, all three genders had distinct accusative forms. Over centuries, the feminine and neuter accusative forms merged with the nominative. Only the masculine kept its distinct accusative: the -en ending (den, einen).\n\nThis is actually helpful: you only need to learn ONE change. If the noun is masculine, add -en to the article. If not, nothing changes."}},

  {type:"teach",kind:"phrase",nl:"Ich sehe den Tisch.",en:"I see the table.",phonetic:"ich ZEY-e den tish",example:"A: Was siehst du?\nB: Ich sehe den Tisch und den Stuhl.\nA: Und das Regal?",exampleEn:"A: What do you see?\nB: I see the table and the chair.\nA: And the shelf?",note:"den = the (masculine accusative).\nder Tisch becomes den Tisch after sehen.\nSehen = to see."},

  {type:"teach",kind:"phrase",nl:"Ich kaufe die Lampe.",en:"I am buying the lamp.",phonetic:"ich KOW-fe dee LAM-pe",example:"A: Was kaufst du?\nB: Ich kaufe die Lampe und das Sofa.\nA: Schöne Wahl!",exampleEn:"A: What are you buying?\nB: I am buying the lamp and the sofa.\nA: Good choice!",note:"die = the (feminine accusative).\ndie Lampe stays die Lampe. No change!\nKaufen = to buy."},

  {type:"teach",kind:"phrase",nl:"Ich brauche das Bett.",en:"I need the bed.",phonetic:"ich BROW-che dahs bet",example:"A: Was brauchst du für das Schlafzimmer?\nB: Ich brauche das Bett und den Schrank.\nA: Okay, lass uns einkaufen.",exampleEn:"A: What do you need for the bedroom?\nB: I need the bed and the wardrobe.\nA: Okay, let us go shopping.",note:"das = the (neuter accusative).\ndas Bett stays das Bett. No change!\nBrauchen = to need."},

  {type:"tip",title:"Haben + Accusative (You Already Know This!)",text:"You have been using accusative since Unit 3 with 'haben':\n\nIch habe einen Hund. (I have a dog.)\nIch habe eine Katze. (I have a cat.)\n\nWith the definite article:\nIch habe den Hund. (I have the dog.)\nIch habe die Katze. (I have the cat.)\n\nSame rules. Only masculine changes. You already know this pattern.",deepDive:{title:"Accusative triggers: which verbs use it?",text:"The accusative is used after transitive verbs. The most common A1 ones:\n\nhaben (to have): Ich habe einen Tisch.\nbrauchen (to need): Ich brauche den Schrank.\nkaufen (to buy): Ich kaufe das Sofa.\nsehen (to see): Ich sehe die Lampe.\nessen (to eat): Ich esse einen Apfel.\ntrinken (to drink): Ich trinke den Kaffee.\nes gibt: Es gibt einen Stuhl.\n\nNotice the pattern: something is DIRECTLY affected by the verb."}},

  {type:"mc",q:"'Ich habe ___ Schrank.' (I have THE wardrobe.)",opts:["der","den","die","das"],ans:"den",hint:"Schrank is masculine (der). Accusative: der to den."},

  {type:"mc",q:"'Ich kaufe ___ Lampe.' (I buy THE lamp.)",opts:["den","der","das","die"],ans:"die",hint:"Lampe is feminine (die). Feminine accusative: die stays die."},

  {type:"fb",s:"Ich sehe ___ Tisch.",a:"den",opts:["den","der","die","das"],hint:"Tisch is masculine. Definite accusative for masculine."},

  {type:"mc",q:"Which sentence uses accusative CORRECTLY?",opts:["Ich kaufe der Stuhl.","Ich kaufe den Stuhl.","Ich kaufe dem Stuhl.","Ich kaufe die Stuhl."],ans:"Ich kaufe den Stuhl.",hint:"Stuhl is masculine. Kaufen triggers accusative: der to den."},

  {type:"match",pairs:[{nl:"Ich habe den Schrank.",en:"I have the wardrobe."},{nl:"Ich sehe die Lampe.",en:"I see the lamp."},{nl:"Ich brauche das Bett.",en:"I need the bed."},{nl:"Es gibt einen Tisch.",en:"There is a table."}]},

  {type:"mc",q:"'das Sofa' in the accusative after 'ich kaufe' is:",opts:["den Sofa","dem Sofa","das Sofa","die Sofa"],ans:"das Sofa",hint:"Sofa is neuter. Neuter accusative: das stays das."},

  {type:"fb",s:"Ich brauche ___ Kühlschrank.",a:"den",opts:["den","die","das","der"],hint:"Kühlschrank is masculine. Definite accusative."},

  {type:"mc",q:"The accusative is used for the:",opts:["Subject (who acts)","Location of the action","Direct object (what is affected)","Time of the action"],ans:"Direct object (what is affected)",hint:"The accusative marks the thing being directly acted upon."},

  {type:"mc",q:"Which nouns change article in the accusative?",opts:["All nouns","Feminine nouns only","Masculine nouns only","Neuter nouns only"],ans:"Masculine nouns only",hint:"Der to den. Die stays die. Das stays das."},

  {type:"mc",q:"'Sie trinkt ___ Kaffee.' (She drinks THE coffee.)",opts:["der","den","die","das"],ans:"den",hint:"Kaffee is masculine (der Kaffee). Accusative: der to den."},

  {type:"fb",s:"Wir kaufen ___ Schrank und ___ Sofa.",a:"den",opts:["den","das","die","dem"],hint:"Schrank is masculine, accusative. Focus on the first blank."},

  {type:"drag_fill",s:"Ich habe {1} Tisch, {2} Lampe und {3} Bett.",blanks:{"1":"einen","2":"eine","3":"ein"},pool:["einen","eine","ein","der","die","das","kein"],hint:"Indefinite accusative: I have a table, a lamp, and a bed."},
]},

// ═══ L5: Farben ═══
{id:"deu6l5",title:"Farben",icon:"🎨",xp:15,board:true,steps:[
  {type:"intro",title:"Farben",desc:"Colors make your German vivid. Learn the core colors and how to use them to describe rooms and furniture. German adjectives before a noun must agree with the noun's gender.",goals:["8 core color words","Colors after sein (no ending needed)","Colors before a noun (intro to endings)"]},

  {type:"teach",kind:"word",nl:"rot",en:"red",phonetic:"roht",cognate:{words:[{lang:"English",word:"red"}],family:"germanic"},example:"A: Welche Farbe hat das Sofa?\nB: Das Sofa ist rot.\nA: Schön! Rot passt gut zum Wohnzimmer.",exampleEn:"A: What color is the sofa?\nB: The sofa is red.\nA: Nice! Red goes well with the living room.",note:"rot = red.\nAfter sein: das Sofa ist rot. No ending needed."},

  {type:"teach",kind:"word",nl:"blau",en:"blue",phonetic:"blow",cognate:{words:[{lang:"English",word:"blue"}],family:"germanic"},example:"A: Was für eine Farbe hat die Wand?\nB: Die Wand ist blau.\nA: Blau ist ruhig und schön!",exampleEn:"A: What color is the wall?\nB: The wall is blue.\nA: Blue is calm and beautiful!",note:"blau = blue.\nPredicate use (after sein): no ending."},

  {type:"teach",kind:"word",nl:"grün",en:"green",phonetic:"grün",cognate:{words:[{lang:"English",word:"green"}],family:"germanic"},example:"A: Ich mag diese Lampe!\nB: Die grüne Lampe?\nA: Ja, sie ist wunderschön!",exampleEn:"A: I like this lamp!\nB: The green lamp?\nA: Yes, it is beautiful!",note:"grün = green.\nNote: die grüne Lampe has -e before feminine noun.\nMore adjective endings come in A2."},

  {type:"teach",kind:"word",nl:"gelb",en:"yellow",phonetic:"gelb",cognate:{words:[{lang:"English",word:"yellow"}],family:"germanic"},example:"A: Welche Farbe magst du?\nB: Ich mag Gelb. Es ist fröhlich.\nA: Ich finde es zu hell.",exampleEn:"A: Which color do you like?\nB: I like yellow. It is cheerful.\nA: I find it too bright.",note:"gelb = yellow.\nAs a noun: das Gelb (the yellow)."},

  {type:"teach",kind:"word",nl:"weiß",en:"white",phonetic:"vice",cognate:{words:[{lang:"English",word:"white"}],family:"germanic"},example:"A: Wie ist die Küche?\nB: Weiß und modern.\nA: Das mag ich! Weiß wirkt groß.",exampleEn:"A: What is the kitchen like?\nB: White and modern.\nA: I like that! White makes things look spacious.",note:"weiß = white. The ß = ss sound.\nweiße before feminine noun: die weiße Küche."},

  {type:"teach",kind:"word",nl:"schwarz",en:"black",phonetic:"shvarts",cognate:{words:[{lang:"English",word:"black (Germanic root)"}],family:"germanic"},example:"A: Was für ein Tisch?\nB: Ein schwarzer Tisch aus Holz.\nA: Das klingt elegant!",exampleEn:"A: What kind of table?\nB: A black wooden table.\nA: That sounds elegant!",note:"schwarz = black.\nschwarzER before masculine noun (ein schwarzer Tisch).\nAdjective endings preview."},

  {type:"teach",kind:"word",nl:"braun",en:"brown",phonetic:"brown",cognate:{words:[{lang:"English",word:"brown"}],family:"germanic"},example:"A: Welche Farbe hat der Schrank?\nB: Er ist braun.\nA: Holzfarben passen gut zusammen.",exampleEn:"A: What color is the wardrobe?\nB: It is brown.\nA: Wood colors go well together.",note:"braun = brown.\nTypical for wooden furniture."},

  {type:"teach",kind:"word",nl:"orange",en:"orange",phonetic:"oh-RAHN-zhe",cognate:{words:[{lang:"English",word:"orange"}],family:"borrowed"},example:"A: Was denkst du über die Lampe?\nB: Die orange Lampe? Sie ist mutig!\nA: Ich finde sie lustig.",exampleEn:"A: What do you think about the lamp?\nB: The orange lamp? It is bold!\nA: I find it fun.",note:"orange = orange. Never takes adjective endings.\nBorrowed word, treated as indeclinable."},

  {type:"tip",title:"Colors After sein: No Endings Needed",text:"When you describe color AFTER sein (to be), the adjective does not change:\n\nDer Tisch ist braun. (The table is brown.)\nDie Lampe ist grün. (The lamp is green.)\nDas Sofa ist rot. (The sofa is red.)\n\nThis is the PREDICATE position. No gender endings needed.\nThis is the easiest place to use adjectives!",deepDive:{title:"Colors BEFORE a noun: endings preview",text:"When a color comes BEFORE a noun, it must agree with the noun's gender. This is the ATTRIBUTIVE position:\n\nder rote Stuhl (the red chair): masculine, definite -e\ndie grüne Lampe (the green lamp): feminine, definite -e\ndas weiße Sofa (the white sofa): neuter, definite -e\n\nWith indefinite articles:\nein roter Stuhl: masculine, indefinite -er\neine grüne Lampe: feminine, indefinite -e\nein weißes Sofa: neuter, indefinite -es\n\nDo not worry about mastering all endings now. You will learn this fully in A2-B1."}},

  {type:"mc",q:"'Das Sofa ist ___.' Which form is correct here?",opts:["roter","grünen","rot","rotes"],ans:"rot",hint:"After sein (predicate position), colors take NO ending."},

  {type:"mc",q:"What color is typical for wooden furniture?",opts:["blau","rot","braun","weiß"],ans:"braun",hint:"Wood color = Holzfarbe = brown."},

  {type:"fb",s:"Die Wand ist ___. Ich mag Blau sehr.",a:"blau",opts:["blau","blaue","blauer","blauen"],hint:"After ist (predicate): no adjective ending."},

  {type:"match",pairs:[{nl:"rot",en:"red"},{nl:"weiß",en:"white"},{nl:"schwarz",en:"black"},{nl:"gelb",en:"yellow"}]},

  {type:"mc",q:"Which color is borrowed and never changes form?",opts:["rot","grün","orange","braun"],ans:"orange",hint:"An exception: borrowed word, no adjective endings ever."},

  {type:"mc",q:"'Ein ___ Tisch.' A black table: which form is correct?",opts:["schwarze","schwarz","schwarzer","schwarzes"],ans:"schwarzer",hint:"Tisch is masculine. Indefinite attributive masculine = -er ending."},

  {type:"fb",s:"Der Stuhl ist ___. Er passt gut zur Küche.",a:"weiß",opts:["weiß","weiße","weißer","weißen"],hint:"After ist = predicate position. No ending."},

  {type:"mc",q:"'Die grüne Lampe': why does the -e ending appear?",opts:["Green always ends in -e","The lamp is in the accusative","Grün gets -e before feminine nouns (definite)","All colors get -e"],ans:"Grün gets -e before feminine nouns (definite)",hint:"Attributive adjective before a definite feminine noun = -e."},

  {type:"mc",q:"Which sentence is CORRECT?",opts:["Das Sofa ist roter.","Das Sofa ist rotes.","Das Sofa ist rot.","Das Sofa ist roten."],ans:"Das Sofa ist rot.",hint:"Predicate adjective after sein: no ending, ever."},
]},

// ═══ L6: Wo ist...? ═══
{id:"deu6l6",title:"Wo ist...?",icon:"📍",xp:15,board:true,steps:[
  {type:"intro",title:"Wo ist...?",desc:"Where is the lamp? Where is the table? German uses small prepositions to describe location precisely. These prepositions take the DATIVE case when expressing a fixed location.",goals:["6 location prepositions","Prepositions + dative for location","Masculine and neuter: dem. Feminine: der."]},

  {type:"teach",kind:"phrase",nl:"in + dem = im",en:"in the (location)",phonetic:"im",example:"A: Wo ist das Buch?\nB: Es ist im Schlafzimmer.\nA: Auf dem Bett oder im Schrank?",exampleEn:"A: Where is the book?\nB: It is in the bedroom.\nA: On the bed or in the wardrobe?",note:"in + dem = im (contraction).\nUsed for location INSIDE a room or container.\ndas Zimmer -> im Zimmer."},

  {type:"teach",kind:"phrase",nl:"auf dem / auf der",en:"on the (location)",phonetic:"owf daym / owf dehr",example:"A: Wo sind meine Schlüssel?\nB: Auf dem Tisch!\nA: Ah, danke!",exampleEn:"A: Where are my keys?\nB: On the table!\nA: Ah, thanks!",note:"auf = on.\nauf + dem (masc./neut. dative)\nauf + der (fem. dative)\nauf dem Tisch, auf der Kommode."},

  {type:"teach",kind:"phrase",nl:"unter dem / unter der",en:"under the",phonetic:"OON-ter daym",example:"A: Hast du den Hund gesehen?\nB: Er schläft unter dem Tisch.\nA: Typisch!",exampleEn:"A: Have you seen the dog?\nB: He is sleeping under the table.\nA: Typical!",note:"unter = under, beneath.\nunter dem Tisch (masc.), unter dem Bett (neut.).\nunter der Küche (fem.)."},

  {type:"teach",kind:"phrase",nl:"neben dem / neben der",en:"next to the",phonetic:"NAY-ben daym",example:"A: Wo steht die Lampe?\nB: Neben dem Sofa.\nA: Perfekt für Lesen!",exampleEn:"A: Where is the lamp?\nB: Next to the sofa.\nA: Perfect for reading!",note:"neben = next to, beside.\nneben dem Sofa (neut. dative)\nneben der Küche (fem. dative)"},

  {type:"teach",kind:"phrase",nl:"vor dem / vor der",en:"in front of the",phonetic:"for daym",example:"A: Wo ist der Hund?\nB: Vor der Tür!\nA: Er will raus!",exampleEn:"A: Where is the dog?\nB: In front of the door!\nA: He wants to go out!",note:"vor = in front of.\nvor dem Tisch, vor der Tür.\nAlso means 'before' in time: vor zwei Stunden."},

  {type:"teach",kind:"phrase",nl:"hinter dem / hinter der",en:"behind the",phonetic:"HIN-ter daym",example:"A: Wo hast du den Schlüssel versteckt?\nB: Hinter dem Schrank.\nA: Das ist ein gutes Versteck!",exampleEn:"A: Where did you hide the key?\nB: Behind the wardrobe.\nA: That is a good hiding spot!",note:"hinter = behind.\nhinter dem Stuhl (masc. dative)\nhinter der Küche (fem. dative)"},

  {type:"tip",title:"Location Prepositions + Dative Case",text:"For LOCATION (Wo? = where?), these prepositions use DATIVE:\n\nMasculine: der -> dem (im Zimmer, auf dem Tisch)\nNeuter: das -> dem (im Bett, unter dem Sofa)\nFeminine: die -> der (auf der Lampe, vor der Tür)\n\nContractions: in + dem = im, an + dem = am\n\nDative tells you WHERE something IS. Accusative tells you WHERE something GOES.",deepDive:{title:"Wechselpräpositionen: a preview",text:"Prepositions like in, auf, unter, neben, vor, hinter are called 'Wechselpräpositionen' (two-way prepositions). They have two meanings:\n\nWo? (where?) = location = DATIVE\nWohin? (where to?) = direction = ACCUSATIVE\n\nDas Buch liegt auf dem Tisch. (Wo? Location. Dative.)\nIch lege das Buch auf den Tisch. (Wohin? Direction. Accusative.)\n\nYou will study this fully in A2 Unit 12."}},

  {type:"mc",q:"'Das Buch liegt ___ Tisch.' (on the table: location)",opts:["auf der","auf dem","auf den","auf des"],ans:"auf dem",hint:"Tisch is masculine. Location = dative. der to dem."},

  {type:"mc",q:"'Die Katze schläft ___ Sofa.' (under the sofa)",opts:["unter dem","unter der","unter den","unter des"],ans:"unter dem",hint:"Sofa is neuter (das). Dative: das to dem."},

  {type:"fb",s:"Wo ist der Stuhl? Er steht ___ Tisch.",a:"neben dem",opts:["neben dem","neben der","neben den","neben die"],hint:"Next to the table. Tisch = masculine. Location = dative."},

  {type:"match",pairs:[{nl:"im Schlafzimmer",en:"in the bedroom"},{nl:"auf dem Tisch",en:"on the table"},{nl:"unter dem Bett",en:"under the bed"},{nl:"neben der Tür",en:"next to the door"}]},

  {type:"mc",q:"'in + dem' contracts to:",opts:["indem","imd","im","ind"],ans:"im",hint:"Standard German contraction of in + dem."},

  {type:"mc",q:"Which case do location prepositions (Wo?) use?",opts:["Nominative","Accusative","Dative","Genitive"],ans:"Dative",hint:"Wo? (where?) = fixed location = dative. Wohin? (where to?) = accusative."},

  {type:"fb",s:"Die Lampe steht ___ Sofa.",a:"neben dem",opts:["neben dem","neben der","vor den","unter die"],hint:"Next to the sofa. Sofa is neuter. Dative: das to dem."},

  {type:"mc",q:"'Vor der Tür' means:",opts:["Behind the door","Next to the door","In front of the door","Under the door"],ans:"In front of the door",hint:"vor = in front of. Die Tür = door (feminine). Dative: die to der."},

  {type:"mc",q:"The dative form of 'die Küche' after a preposition is:",opts:["der Küche","die Küche","dem Küche","den Küche"],ans:"der Küche",hint:"Feminine dative: die to der."},

  {type:"drag_fill",s:"Das Buch liegt {1} Tisch. Die Lampe steht {2} Schrank. Der Hund schläft {3} Bett.",blanks:{"1":"auf dem","2":"neben dem","3":"unter dem"},pool:["auf dem","auf der","neben dem","neben der","unter dem","unter der","vor dem","hinter der"],hint:"Book on table, lamp next to wardrobe, dog under bed."},
]},

// ═══ L7: Meine Traumwohnung ═══
{id:"deu6l7",title:"Meine Traumwohnung",icon:"✨",xp:20,board:true,steps:[
  {type:"intro",title:"Meine Traumwohnung",desc:"Dream apartment time! Combine rooms, furniture, colors, es gibt, accusative, and location prepositions in rich descriptions. This is your first open-ended German production challenge.",goals:["Describe a room with furniture and colors","Use es gibt + accusative naturally","Combine location prepositions in descriptions"]},

  {type:"tip",title:"Describing a Room: A Template",text:"Here is a framework for describing any room in German:\n\n1. Was für ein Zimmer? (What kind of room?)\n   Das ist mein Wohnzimmer.\n\n2. Es gibt... (What is there?)\n   Es gibt ein Sofa, einen Tisch und eine Lampe.\n\n3. Farben (Colors, after ist/sind):\n   Das Sofa ist grün. Die Lampe ist weiß.\n\n4. Wo ist was? (Where is what?)\n   Das Sofa steht vor dem Fenster.\n   Die Lampe steht neben dem Sofa.",deepDive:{title:"Full sample description",text:"Das ist mein Traumwohnzimmer. Es gibt ein großes Sofa und einen runden Tisch. Es gibt auch ein Bücherregal neben der Tür. Das Sofa ist blau, und der Tisch ist weiß. Die Lampe steht auf dem Tisch. Vor dem Sofa liegt ein roter Teppich. Es gibt keinen Fernseher, aber viele Bücher!\n\nTranslation: This is my dream living room. There is a large sofa and a round table. There is also a bookshelf next to the door. The sofa is blue, and the table is white. The lamp is on the table. In front of the sofa lies a red rug. There is no TV, but many books!"}},

  {type:"teach",kind:"word",nl:"groß",en:"large / big",phonetic:"grohss",cognate:{words:[{lang:"English",word:"great (archaic: large)"}],family:"germanic"},example:"A: Wie ist dein Schlafzimmer?\nB: Es ist groß und hell.\nA: Hast du ein großes Bett?",exampleEn:"A: What is your bedroom like?\nB: It is large and bright.\nA: Do you have a large bed?",note:"groß = large/big. Predicate (after sein): no ending.\nhell = bright. dunkel = dark."},

  {type:"teach",kind:"word",nl:"klein",en:"small",phonetic:"kline",cognate:{words:[{lang:"English",word:"clean (archaic small sense)"}],family:"germanic"},example:"A: Hast du ein Arbeitszimmer?\nB: Ja, aber es ist sehr klein.\nA: Klein aber fein!",exampleEn:"A: Do you have a study?\nB: Yes, but it is very small.\nA: Small but fine!",note:"klein = small.\nKlein aber fein = small but fine (common saying).\nAntonym: groß (large)."},

  {type:"mc",q:"'Mein Traumschlafzimmer hat ein großes Bett.' What is 'ein' used for here?",opts:["Nominative subject","Dative location","Accusative object after haben","No specific reason"],ans:"Accusative object after haben",hint:"haben + object = accusative. Bett is neuter: ein stays ein."},

  {type:"mc",q:"'Es gibt ___ Sofa in meiner Traumwohnung.' (a sofa exists)",opts:["einen","ein","eine","kein"],ans:"ein",hint:"Sofa is neuter (das). Es gibt + accusative: ein (no change)."},

  {type:"fb",s:"Das Sofa ist ___. Ich liebe Blau!",a:"blau",opts:["blau","blaue","blauen","blauer"],hint:"After ist = predicate position. No adjective ending."},

  {type:"mc",q:"'Die Lampe steht neben dem Tisch.' What case is 'dem Tisch'?",opts:["Nominative","Accusative","Dative","Genitive"],ans:"Dative",hint:"Neben + Wo? = dative. der Tisch to dem Tisch."},

  {type:"mc",q:"You want to say 'There is no wardrobe in the room.' Which is correct?",opts:["Es gibt kein Schrank.","Es gibt keinen Schrank.","Es gibt keine Schrank.","Es gibt nicht Schrank."],ans:"Es gibt keinen Schrank.",hint:"Schrank is masculine. Negative accusative: kein to keinen."},

  {type:"match",pairs:[{nl:"Es gibt ein Bett.",en:"There is a bed."},{nl:"Der Tisch ist weiß.",en:"The table is white."},{nl:"Die Lampe steht neben dem Sofa.",en:"The lamp is next to the sofa."},{nl:"Das Zimmer ist klein.",en:"The room is small."}]},

  {type:"mc",q:"'Das Bücherregal' is neuter because:",opts:["All furniture is neuter","Books are always neuter","The last element -regal is neuter (das Regal)","Random assignment"],ans:"The last element -regal is neuter (das Regal)",hint:"Compound nouns: gender comes from the last word. das Regal to das Bücherregal."},

  {type:"fb",s:"Es gibt ___ Kühlschrank in der Küche.",a:"einen",opts:["einen","ein","eine","keinen"],hint:"Indefinite accusative. Kühlschrank is masculine: ein to einen."},

  {type:"mc",q:"'Das Sofa steht ___ dem Fenster.' (in front of the window)",opts:["neben","auf","vor","unter"],ans:"vor",hint:"In front of = vor. Das Fenster = the window."},

  {type:"mc",q:"Which sentence correctly says the room is large?",opts:["Das Zimmer ist großer.","Das Zimmer ist großes.","Das Zimmer ist groß.","Das Zimmer ist großen."],ans:"Das Zimmer ist groß.",hint:"Predicate adjective after sein: no ending."},

  {type:"fb",s:"Es gibt ___ Tisch in meiner Traumküche.",a:"einen",opts:["einen","ein","eine","keinen"],hint:"Traumküche = dream kitchen. Tisch is masculine. Es gibt + accusative."},

  {type:"mc",q:"Which describes a bedroom in German?",opts:["Es gibt ein Bett und einen Schrank.","Der Tisch ist in der Küche.","Die Lampe steht im Badezimmer.","Es gibt keinen Flur."],ans:"Es gibt ein Bett und einen Schrank.",hint:"Bedroom furniture: Bett and Schrank. Which sentence matches?"},

  {type:"match",pairs:[{nl:"groß",en:"large"},{nl:"klein",en:"small"},{nl:"hell",en:"bright"},{nl:"dunkel",en:"dark"}]},

  {type:"drag_fill",s:"Mein Traumzimmer: Es gibt {1} Sofa und {2} Lampe. Das Sofa ist {3}. Die Lampe steht {4} Sofa.",blanks:{"1":"ein","2":"eine","3":"blau","4":"neben dem"},pool:["ein","einen","eine","blau","blaue","neben dem","neben der","auf dem","auf der"],hint:"Dream room: sofa + lamp, color, lamp position."},
]},

// ═══ L8: Wohnung Review ═══
{id:"deu6l8",title:"Wohnung Review",icon:"🌟",xp:25,board:true,steps:[
  {type:"intro",title:"Wohnung Review",desc:"Unit 6 complete! This review brings together everything: rooms, furniture, colors, es gibt + accusative, the accusative case full pattern, location prepositions + dative, and apartment descriptions.",goals:["All room and furniture vocabulary","Es gibt + accusative (einen/eine/ein, keinen/keine/kein)","Accusative: der to den, die stays die, das stays das","Location prepositions + dative"]},

  {type:"tip",title:"Unit 6 Summary",text:"You can now:\n\nRooms: die Küche, das Schlafzimmer, das Badezimmer, das Wohnzimmer, der Flur, der Keller\nFurniture: der Tisch, der Stuhl, das Bett, der Schrank, das Sofa, die Lampe, der Kühlschrank, das Regal\nColors: rot, blau, grün, gelb, weiß, schwarz, braun, orange\nEs gibt: einen (masc.), eine (fem.), ein (neut.) and keinen/keine/kein\nAccusative: der to den, die stays die, das stays das\nLocation: im, auf dem/der, unter dem, neben dem/der, vor dem/der, hinter dem/der",deepDive:{title:"The accusative-dative connection",text:"You now use two cases in real sentences:\n\nACCUSATIVE (what is directly affected):\nIch kaufe den Stuhl. (buying the chair)\nEs gibt einen Tisch. (there is a table)\n\nDATIVE (location after Wo? prepositions):\nDas Buch liegt auf dem Tisch. (on the table)\nDie Lampe steht neben dem Sofa. (next to the sofa)\n\nNominative = subject (who does it)\nAccusative = direct object (what is done to)\nDative = indirect object or location\n\nYou are building the German case system one step at a time."}},

  {type:"mc",q:"Which room article is CORRECT?",opts:["der Küche","das Flur","die Küche","das Badezimmer und der Wohnzimmer"],ans:"die Küche",hint:"Küche is feminine. Check: -zimmer compounds are neuter."},

  {type:"mc",q:"'Es gibt ___ Stuhl.' What fills the blank?",opts:["der","ein","einen","einem"],ans:"einen",hint:"Stuhl is masculine. Es gibt = accusative. ein to einen."},

  {type:"fb",s:"Ich kaufe ___ Sofa für das Wohnzimmer.",a:"das",opts:["das","den","die","ein"],hint:"Kaufen triggers accusative. Sofa is neuter: das stays das."},

  {type:"mc",q:"'Die Lampe steht auf ___ Tisch.' Location: dative.",opts:["der","den","dem","des"],ans:"dem",hint:"Tisch is masculine. Dative: der to dem."},

  {type:"mc",q:"Which color takes NO adjective ending, even before a noun?",opts:["rot","blau","schwarz","orange"],ans:"orange",hint:"Borrowed word exception: orange is indeclinable."},

  {type:"match",pairs:[{nl:"der Schrank",en:"the wardrobe"},{nl:"das Regal",en:"the shelf"},{nl:"die Lampe",en:"the lamp"},{nl:"der Kühlschrank",en:"the fridge"}]},

  {type:"fb",s:"Das Buch liegt ___ dem Bett.",a:"auf",opts:["auf","unter","neben","vor"],hint:"The book is lying ON the bed. Which preposition?"},

  {type:"mc",q:"'in + dem' contracts to 'im'. What does 'an + dem' contract to?",opts:["anm","am","ande","and"],ans:"am",hint:"an + dem = am. Like in + dem = im."},

  {type:"mc",q:"'Ich brauche ___ Schrank.' (I need the wardrobe.)",opts:["der","den","die","dem"],ans:"den",hint:"Schrank is masculine. Accusative definite: der to den."},

  {type:"fb",s:"Es gibt ___ Badezimmer in meiner Wohnung.",a:"ein",opts:["ein","eine","einen","kein"],hint:"Badezimmer is neuter. Es gibt + accusative indefinite: ein (no change)."},

  {type:"mc",q:"The dative of 'die Küche' is:",opts:["die Küche","der Küche","dem Küche","den Küche"],ans:"der Küche",hint:"Feminine dative: die to der."},

  {type:"match",pairs:[{nl:"Es gibt keinen Stuhl.",en:"There is no chair."},{nl:"Das Sofa ist grün.",en:"The sofa is green."},{nl:"Die Lampe steht im Flur.",en:"The lamp is in the hallway."},{nl:"Ich habe den Schrank gesehen.",en:"I saw the wardrobe."}]},

  {type:"mc",q:"Why does only masculine change in the accusative (der to den)?",opts:["Random rule from medieval times","Feminine and neuter accusative merged with nominative historically","All genders actually change","Masculine is always special in all languages"],ans:"Feminine and neuter accusative merged with nominative historically",hint:"Old High German had distinct forms for all genders. Feminine and neuter lost the distinction over time."},

  {type:"fb",s:"Der Hund liegt ___ dem Sofa.",a:"unter",opts:["unter","auf","neben","vor"],hint:"The dog is lying UNDER the sofa."},

  {type:"drag_fill",s:"Es gibt {1} Tisch und {2} Lampe. Der Tisch steht {3} Küche.",blanks:{"1":"einen","2":"eine","3":"im"},pool:["einen","ein","eine","im","in der","auf dem","auf der","neben dem"],hint:"Apartment description: table + lamp + location of table."},

  {type:"mc",q:"'Das Schlafzimmer ist ___ und gemütlich.' (small and cozy)",opts:["kleiner","kleines","klein","kleine"],ans:"klein",hint:"Predicate adjective after ist: no ending needed."},
]},

]},

,

// ════════════════════════════════════════════════════════════════════════
// UNIT 10: Ich bin gefahren — Perfekt with sein & Travel
// ════════════════════════════════════════════════════════════════════════
{n:10,lang:"de",track:"v1",title:"Ich bin gefahren",sub:"Past Tense (Perfekt with sein) & Travel",icon:"✈️",level:"A2.1",color:"#7B5EE8",lessons:[

// ═══ L1: Perfekt mit sein ═══
{id:"deu10l1",title:"Perfekt mit sein",icon:"🚶",xp:20,board:true,steps:[
  {type:"intro",title:"Perfekt mit sein",desc:"You already know Perfekt with haben. Now meet the second helper verb: sein. A special group of verbs use sein instead of haben to form the past tense.",goals:["Why some verbs use sein","4 core sein-Perfekt verbs","Build your first sein-Perfekt sentences"]},

  {type:"tip",title:"Two Helpers: haben and sein",text:"In Perfekt, most verbs use haben as the helper:\nIch habe gegessen. (I ate.)\n\nBut a special group uses sein:\nIch bin gegangen. (I went.)\n\nThe Partizip II form itself does NOT change. Only the helper changes.",deepDive:{title:"Which verbs take sein?",text:"Two main groups take sein:\n1. Motion verbs that describe moving from A to B: gehen, fahren, fliegen, laufen, reisen.\n2. Change-of-state verbs: werden, einschlafen, aufwachen, sterben.\nPlus the verb bleiben (to stay) as a special case.\n\nAll other verbs use haben. When in doubt, ask: does this verb describe moving somewhere or changing state? If yes, try sein."}},

  {type:"teach",kind:"word",nl:"gegangen (sein)",en:"went / have gone",phonetic:"ge-GANG-en",example:"A: Bist du zur Schule gegangen?\nB: Nein, ich bin zu Hause geblieben.\nA: Warum das denn?\nB: Ich war krank.",exampleEn:"A: Did you go to school?\nB: No, I stayed at home.\nA: Why?\nB: I was sick.",note:"gehen (to go) uses sein helper.\nPartizip: ge- + gang + -en."},

  {type:"teach",kind:"word",nl:"gefahren (sein)",en:"drove / traveled",phonetic:"ge-FAH-ren",example:"A: Wohin seid ihr gefahren?\nB: Wir sind nach Berlin gefahren.\nA: Wie lange habt ihr gebraucht?\nB: Ungefähr zwei Stunden.",exampleEn:"A: Where did you drive to?\nB: We drove to Berlin.\nA: How long did it take?\nB: About two hours.",note:"fahren (to drive/travel) uses sein.\nPartizip: ge- + fahr + -en."},

  {type:"teach",kind:"word",nl:"geflogen (sein)",en:"flew / have flown",phonetic:"ge-FLOH-gen",example:"A: Wie bist du nach Madrid gekommen?\nB: Ich bin geflogen.\nA: War der Flug lang?\nB: Nur drei Stunden.",exampleEn:"A: How did you get to Madrid?\nB: I flew.\nA: Was the flight long?\nB: Only three hours.",note:"fliegen (to fly) uses sein.\nPartizip: ge- + flog + -en. Irregular stem change."},

  {type:"teach",kind:"word",nl:"gekommen (sein)",en:"came / have come",phonetic:"ge-KOM-en",example:"A: Wann bist du angekommen?\nB: Ich bin gestern Abend angekommen.\nA: Alles gut mit dem Zug?\nB: Ja, pünktlich!",exampleEn:"A: When did you arrive?\nB: I arrived yesterday evening.\nA: Was the train fine?\nB: Yes, on time!",note:"kommen (to come) uses sein.\nPartizip: ge- + komm + -en."},

  {type:"verb_table",title:"Perfekt with sein: Full Conjugation",label:"Ich bin gegangen (I went)",groups:[{label:"Singular",rows:[["ich","bin gegangen","I went"],["du","bist gegangen","you went"],["er/sie/es","ist gegangen","he/she/it went"]]},{label:"Plural",rows:[["wir","sind gegangen","we went"],["ihr","seid gegangen","you all went"],["sie/Sie","sind gegangen","they / you (formal) went"]]}],note:"Only the sein helper conjugates. Gegangen never changes.",deepDive:{title:"Position of Partizip II",text:"In a main clause, the Partizip II goes to the END of the sentence. The helper sein stays in position 2:\n\nIch bin gestern nach Hamburg gefahren.\n(I drove to Hamburg yesterday.)\n\nTime, Manner, Place: the TMP rule still applies."}},

  {type:"mc",q:"Ich ___ nach Berlin gefahren.",opts:["habe","bin","ist","haben"],ans:"bin",hint:"fahren is a motion verb. First person singular of sein."},

  {type:"mc",q:"Er ___ nach Hause gegangen.",opts:["hat","haben","ist","sind"],ans:"ist",hint:"gehen is a motion verb. Third person singular of sein."},

  {type:"fb",s:"Wir ___ nach Hamburg geflogen.",a:"sind",opts:["haben","sind","ist","seid"],hint:"fliegen takes sein. First person plural."},

  {type:"mc",q:"Which Partizip II belongs to fliegen?",opts:["geflogen","gefliegt","geflieget","fliegend"],ans:"geflogen",hint:"fliegen is irregular: the stem changes from ie to o."},

  {type:"mc",q:"'I drove to Munich.' Which is correct?",opts:["Ich habe nach München gefahren","Ich bin nach München gefahren","Ich bin nach München fahren","Ich habe nach München fahren"],ans:"Ich bin nach München gefahren",hint:"fahren uses sein. The Partizip goes to the end."},

  {type:"fb",s:"Bist du zu Fuß ___?",a:"gegangen",opts:["gegangen","gefahren","geflogen","gekommen"],hint:"Zu Fuß = on foot. Which Partizip matches going on foot?"},

  {type:"mc",q:"The Partizip II of kommen is:",opts:["gekommen","gekommt","gekomm","gekommt"],ans:"gekommen",hint:"ge- + irregular stem + -en is the pattern for strong verbs."},

  {type:"match",pairs:[{nl:"bin gegangen",en:"went (I)"},{nl:"ist gefahren",en:"drove (he/she)"},{nl:"sind geflogen",en:"flew (we/they)"},{nl:"bist gekommen",en:"came (you)"}]},

  {type:"mc",q:"Complete: Sie (formal) ___ um 9 Uhr angekommen.",opts:["haben","sind","ist","seid"],ans:"sind",hint:"Sie (formal) takes the same form as sie (they): sind."},

  {type:"fb",s:"Ihr ___ mit dem Zug gefahren.",a:"seid",opts:["seid","sind","ist","habt"],hint:"ihr = you all. Conjugate sein for ihr."},

  {type:"mc",q:"Ich bin nach Frankfurt ___.",opts:["gegangen haben","geflogen","fliegen","fliegst"],ans:"geflogen",hint:"Complete the Perfekt sentence. The Partizip goes last."},

  {type:"mc",q:"In Perfekt with sein, the Partizip II:",opts:["Conjugates to match the subject","Stays the same no matter the subject","Uses -t ending always","Goes to position 2"],ans:"Stays the same no matter the subject",hint:"Only the helper verb (sein) changes form."},
]},

// ═══ L2: Bewegungsverben ═══
{id:"deu10l2",title:"Bewegungsverben",icon:"🏃",xp:20,board:true,steps:[
  {type:"intro",title:"Bewegungsverben",desc:"Motion verbs are the heart of the sein group. Today you learn 7 key movement verbs and their Partizip II forms. All of them travel with sein.",goals:["7 movement verbs with sein","Partizip II forms","Use movement verbs in past-tense sentences"]},

  {type:"teach",kind:"word",nl:"laufen (ist gelaufen)",en:"to run / ran",phonetic:"LAU-fen, ge-LAU-fen",example:"A: Warum bist du so spät?\nB: Ich bin gelaufen, mein Bus war weg.\nA: Wie weit bist du gelaufen?\nB: Fast zwei Kilometer!",exampleEn:"A: Why are you so late?\nB: I ran, my bus was gone.\nA: How far did you run?\nB: Almost two kilometers!",note:"laufen = run or walk casually.\nPartizip: ge- + lauf + -en. Irregular vowel in present tense only."},

  {type:"teach",kind:"word",nl:"schwimmen (ist geschwommen)",en:"to swim / swam",phonetic:"SHVIM-en, ge-SHVOM-en",example:"A: Was habt ihr am Meer gemacht?\nB: Wir sind viel geschwommen.\nA: War das Wasser kalt?\nB: Nein, super warm!",exampleEn:"A: What did you do at the sea?\nB: We swam a lot.\nA: Was the water cold?\nB: No, wonderfully warm!",note:"schwimmen: strong irregular.\nimm changes to omm in Partizip II."},

  {type:"teach",kind:"word",nl:"reisen (ist gereist)",en:"to travel / traveled",phonetic:"RY-zen, ge-RYZT",example:"A: Wohin bist du diesen Sommer gereist?\nB: Ich bin durch Spanien gereist.\nA: Wie lange warst du weg?\nB: Drei Wochen.",exampleEn:"A: Where did you travel this summer?\nB: I traveled through Spain.\nA: How long were you away?\nB: Three weeks.",note:"reisen: regular weak verb.\nPartizip: ge- + reis + -t."},

  {type:"teach",kind:"word",nl:"rennen (ist gerannt)",en:"to sprint / sprinted",phonetic:"REN-en, ge-RANT",example:"A: Du siehst erschöpft aus.\nB: Ich bin zum Bahnhof gerannt.\nA: Hast du den Zug erwischt?\nB: Ja, gerade noch!",exampleEn:"A: You look exhausted.\nB: I sprinted to the station.\nA: Did you catch the train?\nB: Yes, just barely!",note:"rennen: mixed irregular.\nPartizip: gerannt (NOT gerennt). Memorize this form."},

  {type:"teach",kind:"word",nl:"klettern (ist geklettert)",en:"to climb / climbed",phonetic:"KLET-ern, ge-KLET-ert",example:"A: Was habt ihr in den Alpen gemacht?\nB: Wir sind auf einen Berg geklettert.\nA: War das schwierig?\nB: Ein bisschen, aber toll!",exampleEn:"A: What did you do in the Alps?\nB: We climbed a mountain.\nA: Was it difficult?\nB: A little, but great!",note:"klettern: weak verb with -ert ending.\nPartizip: ge- + kletter + -t."},

  {type:"teach",kind:"word",nl:"springen (ist gesprungen)",en:"to jump / jumped",phonetic:"SHPRING-en, ge-SHPRUNG-en",example:"A: Was ist passiert?\nB: Ich bin ins Wasser gesprungen.\nA: Absichtlich?\nB: Nein, ich bin ausgerutscht!",exampleEn:"A: What happened?\nB: I jumped into the water.\nA: On purpose?\nB: No, I slipped!",note:"springen: strong irregular.\nPartizip: ge- + sprung + -en. Like ring/rang/rung in English."},

  {type:"teach",kind:"word",nl:"wandern (ist gewandert)",en:"to hike / hiked",phonetic:"VAN-dern, ge-VAN-dert",example:"A: Wie war das Wochenende?\nB: Wir sind durch den Schwarzwald gewandert.\nA: Wie viele Kilometer?\nB: Ungefähr fünfzehn.",exampleEn:"A: How was the weekend?\nB: We hiked through the Black Forest.\nA: How many kilometers?\nB: About fifteen.",note:"wandern: regular weak verb.\nPartizip: ge- + wander + -t."},

  {type:"verb_table",title:"Bewegungsverben: Partizip II",label:"Movement verbs + sein",groups:[{label:"Regular (-t ending)",rows:[["reisen","ist gereist","traveled"],["wandern","ist gewandert","hiked"],["klettern","ist geklettert","climbed"]]},{label:"Irregular (-en ending)",rows:[["laufen","ist gelaufen","ran"],["schwimmen","ist geschwommen","swam"],["springen","ist gesprungen","jumped"],["rennen","ist gerannt","sprinted"]]}],note:"When you see -en in Partizip II, the verb is usually irregular.",deepDive:{title:"laufen vs rennen",text:"Both describe movement on foot:\nlaufen = general running or walking at a moderate pace\nrennen = sprinting, urgent or fast running\n\nIn everyday speech laufen covers both. In sports contexts and emergencies, rennen implies speed and urgency."}},

  {type:"mc",q:"The Partizip II of rennen is:",opts:["gerennt","gerannt","gerunnt","rennt"],ans:"gerannt",hint:"rennen is mixed irregular. The stem vowel changes to a."},

  {type:"mc",q:"Wir ___ durch den Park gelaufen.",opts:["haben","sind","habt","hat"],ans:"sind",hint:"laufen is a motion verb. wir + sein."},

  {type:"fb",s:"Sie ist den ganzen Tag ___.",a:"gewandert",opts:["gewandert","geschwommen","gelaufen","gereist"],hint:"All-day walking in nature: which verb means to hike?"},

  {type:"mc",q:"Which verb has the Partizip II 'geschwommen'?",opts:["springen","laufen","schwimmen","rennen"],ans:"schwimmen",hint:"schwimmen: the stem vowel changes from i to o."},

  {type:"match",pairs:[{nl:"ist gelaufen",en:"ran"},{nl:"ist gereist",en:"traveled"},{nl:"ist geschwommen",en:"swam"},{nl:"ist gewandert",en:"hiked"}]},

  {type:"mc",q:"Er ist auf den Turm ___.",opts:["geklettert","gereist","gelaufen","geschwommen"],ans:"geklettert",hint:"Climbing something vertical: which motion verb fits?"},

  {type:"fb",s:"Ich bin ins Wasser ___.",a:"gesprungen",opts:["gesprungen","geschwommen","gewandert","gerannt"],hint:"Jumping from above into water."},

  {type:"mc",q:"Which Partizip II uses a -t ending (weak/regular)?",opts:["gelaufen","gesprungen","geschwommen","gereist"],ans:"gereist",hint:"Weak verbs end in -t. Strong verbs end in -en."},

  {type:"mc",q:"Ich ___ letztes Jahr durch Frankreich gereist.",opts:["habe","bin","ist","sind"],ans:"bin",hint:"reisen is a motion verb. First person singular."},

  {type:"mc",q:"'We hiked in the mountains.' Which is correct?",opts:["Wir haben in den Bergen gewandert","Wir sind in den Bergen gewandert","Wir sind in den Bergen wandern","Wir haben in den Bergen wandert"],ans:"Wir sind in den Bergen gewandert",hint:"wandern takes sein. Partizip at the end."},
]},

// ═══ L3: Zustandsverben ═══
{id:"deu10l3",title:"Zustandsverben",icon:"😴",xp:20,board:true,steps:[
  {type:"intro",title:"Zustandsverben",desc:"Motion verbs take sein. But there is a second group: change-of-state verbs. When something CHANGES or becomes something, sein is also the helper. Plus one special exception: bleiben.",goals:["Change-of-state verbs with sein","5 Partizip II forms","bleiben as a special exception"]},

  {type:"tip",title:"Change of State = sein",text:"Motion verbs describe moving from A to B.\nChange-of-state verbs describe a transformation:\n\neinschlafen: awake BECOMES asleep\naufwachen: asleep BECOMES awake\nwerden: X BECOMES Y\nsterben: alive BECOMES dead\npassieren: something happens (changes occur)\n\nbleiben is the odd one: no motion, no change, but still uses sein.",deepDive:{title:"The logic behind sein",text:"The original idea: haben was for actions done to something (transitive), sein was for intransitive verbs of movement or change.\n\nModern German has exceptions, but the motion/change test catches about 90% of cases. If you are unsure, a German dictionary marks verbs as 'ist' or 'hat' next to the infinitive."}},

  {type:"teach",kind:"word",nl:"einschlafen (ist eingeschlafen)",en:"to fall asleep / fell asleep",phonetic:"IN-shlah-fen, in-ge-SHLAH-fen",example:"A: Hast du gut geschlafen?\nB: Ich bin sofort eingeschlafen.\nA: Warst du so müde?\nB: Ja, nach dem langen Flug.",exampleEn:"A: Did you sleep well?\nB: I fell asleep immediately.\nA: Were you that tired?\nB: Yes, after the long flight.",note:"ein- is a separable prefix. ge- goes between prefix and stem.\nein + ge + schlafen = eingeschlafen."},

  {type:"teach",kind:"word",nl:"aufwachen (ist aufgewacht)",en:"to wake up / woke up",phonetic:"OWF-vah-khen, owf-ge-VAKHT",example:"A: Wann bist du aufgewacht?\nB: Ich bin um sieben aufgewacht.\nA: Ohne Wecker?\nB: Ja, mein Körper kennt die Zeit.",exampleEn:"A: When did you wake up?\nB: I woke up at seven.\nA: Without an alarm?\nB: Yes, my body knows the time.",note:"auf- is a separable prefix.\nPartizip: auf + ge + wacht = aufgewacht."},

  {type:"teach",kind:"word",nl:"werden (ist geworden)",en:"to become / became",phonetic:"VER-den, ge-VOR-den",example:"A: Was ist er geworden?\nB: Er ist Arzt geworden.\nA: Und seine Schwester?\nB: Sie ist Lehrerin geworden.",exampleEn:"A: What did he become?\nB: He became a doctor.\nA: And his sister?\nB: She became a teacher.",note:"werden: highly irregular Partizip.\nwerd- changes to word-. Core verb for Perfekt and future tense."},

  {type:"teach",kind:"word",nl:"sterben (ist gestorben)",en:"to die / died",phonetic:"SHTER-ben, ge-SHTOR-ben",example:"A: Was ist mit dem alten Baum passiert?\nB: Er ist im Sturm gestorben.\nA: Schade, er war so alt.\nB: Ja, über hundert Jahre.",exampleEn:"A: What happened to the old tree?\nB: It died in the storm.\nA: Pity, it was so old.\nB: Yes, over a hundred years.",note:"sterben: strong irregular.\nPartizip: ge- + storb + -en."},

  {type:"teach",kind:"word",nl:"passieren (ist passiert)",en:"to happen / happened",phonetic:"pa-SEER-en, pa-SEERT",example:"A: Was ist hier passiert?\nB: Ein Auto ist in die Mauer gefahren.\nA: Ist jemand verletzt?\nB: Nein, zum Glück nicht.",exampleEn:"A: What happened here?\nB: A car drove into the wall.\nA: Is anyone hurt?\nB: No, fortunately not.",note:"passieren: regular loanword.\nPartizip: ge- + passier + -t."},

  {type:"teach",kind:"word",nl:"bleiben (ist geblieben)",en:"to stay / stayed",phonetic:"BLY-ben, ge-BLEE-ben",example:"A: Warum bist du nicht mitgekommen?\nB: Ich bin zu Hause geblieben.\nA: Warst du krank?\nB: Nein, ich wollte ausruhen.",exampleEn:"A: Why didn't you come along?\nB: I stayed at home.\nA: Were you sick?\nB: No, I wanted to rest.",note:"bleiben: no motion, no change, yet uses sein.\nMemorize this exception. Partizip: geblieben."},

  {type:"verb_table",title:"Zustandsverben: Partizip II",label:"Change-of-state verbs + sein",groups:[{label:"Separable prefix verbs",rows:[["einschlafen","ist eingeschlafen","fell asleep"],["aufwachen","ist aufgewacht","woke up"]]},{label:"Irregular core verbs",rows:[["werden","ist geworden","became"],["sterben","ist gestorben","died"],["bleiben","ist geblieben","stayed"]]},{label:"Regular loanword",rows:[["passieren","ist passiert","happened"]]}],note:"Separable verbs insert ge- between prefix and stem.",deepDive:{title:"Separable prefix + ge- rule",text:"For separable verbs in Partizip II, the ge- is inserted between the prefix and the verb stem:\nein + schlafen becomes eingeschlafen\nauf + wachen becomes aufgewacht\nan + kommen becomes angekommen\n\nThis applies to all separable verbs, not just the state-change group."}},

  {type:"mc",q:"Er ___ sofort eingeschlafen.",opts:["hat","haben","ist","sind"],ans:"ist",hint:"einschlafen is a change-of-state verb. Third person singular of sein."},

  {type:"fb",s:"Was ___ mit dem Auto passiert?",a:"ist",opts:["ist","hat","sind","haben"],hint:"passieren is a change/event verb. Third person singular of sein."},

  {type:"mc",q:"The Partizip II of werden is:",opts:["gewerdet","geworden","gewirdet","gewerden"],ans:"geworden",hint:"werden is highly irregular. The stem changes: werd becomes word."},

  {type:"mc",q:"Ich bin lange ___.",opts:["geblieben","gebleiben","gebleibtet","gebliebt"],ans:"geblieben",hint:"bleiben: strong irregular. The -ie- diphthong stays in the Partizip."},

  {type:"match",pairs:[{nl:"ist eingeschlafen",en:"fell asleep"},{nl:"ist aufgewacht",en:"woke up"},{nl:"ist geworden",en:"became"},{nl:"ist geblieben",en:"stayed"}]},

  {type:"mc",q:"Which verb uses sein because it shows a change of state?",opts:["essen","kaufen","sterben","arbeiten"],ans:"sterben",hint:"Alive to dead is a change of state."},

  {type:"fb",s:"Sie ist Ärztin ___.",a:"geworden",opts:["geworden","gewerdet","gewurd","gewird"],hint:"werden + sein: she became a doctor."},

  {type:"mc",q:"aufwachen forms its Partizip II as:",opts:["aufgewacht","geaufwacht","aufwachtet","gewacht"],ans:"aufgewacht",hint:"Separable verb: prefix + ge + stem."},

  {type:"mc",q:"'It happened very quickly.' Which is correct?",opts:["Es hat sehr schnell passiert","Es ist sehr schnell passiert","Es hat sehr schnell passieren","Es ist sehr schnell passieren"],ans:"Es ist sehr schnell passiert",hint:"passieren uses sein. Partizip at the end."},

  {type:"mc",q:"bleiben uses sein because:",opts:["It is a motion verb","It is a regular verb","It is a special exception to memorize","It describes a physical action"],ans:"It is a special exception to memorize",hint:"bleiben has no motion and no change. It is just an irregular helper choice."},
]},

// ═══ L4: sein oder haben? ═══
{id:"deu10l4",title:"sein oder haben?",icon:"⚖️",xp:20,board:true,steps:[
  {type:"intro",title:"sein oder haben?",desc:"The big question in German Perfekt: do I use sein or haben? Today you master the decision tree and practise with mixed exercises combining both helpers.",goals:["Master the sein vs haben decision","Mixed Perfekt sentences","Distinguish tricky borderline cases"]},

  {type:"tip",title:"The sein vs haben Decision Tree",text:"Ask three questions in order:\n\n1. Is it a MOTION verb (moving from A to B)?\n   YES: use sein\n   Examples: gehen, fahren, fliegen, laufen, rennen, reisen, klettern, springen, schwimmen, wandern\n\n2. Is it a CHANGE-OF-STATE verb?\n   YES: use sein\n   Examples: werden, sterben, einschlafen, aufwachen, passieren\n\n3. Special exception?\n   bleiben uses sein. sein itself uses sein.\n\nEverything else: use haben.",deepDive:{title:"Tricky edge cases",text:"fahren and schwimmen can sometimes take haben when the focus is on the activity and not the destination:\n'Ich habe Auto gefahren' (I drove a car, activity focus)\n'Ich bin nach Berlin gefahren' (I drove to Berlin, motion to a destination)\n\nFor A2 level, the simple rule covers almost everything: motion to a destination or change of state = sein."}},

  {type:"teach",kind:"phrase",nl:"Ich habe gegessen.",en:"I ate / I have eaten.",phonetic:"ikh HA-be ge-ES-en",example:"A: Hast du schon gegessen?\nB: Ja, ich habe schon gegessen.\nA: Was hast du gegessen?\nB: Einen Salat und Brot.",exampleEn:"A: Have you eaten yet?\nB: Yes, I have already eaten.\nA: What did you eat?\nB: A salad and bread.",note:"essen = activity. No motion, no change. Takes haben."},

  {type:"teach",kind:"phrase",nl:"Ich bin gefahren.",en:"I drove / I traveled.",phonetic:"ikh bin ge-FAH-ren",example:"A: Wie bist du nach Köln gekommen?\nB: Ich bin mit dem Auto gefahren.\nA: Lange Fahrt?\nB: Zwei Stunden ungefähr.",exampleEn:"A: How did you get to Cologne?\nB: I drove by car.\nA: Long drive?\nB: About two hours.",note:"fahren = motion to destination. Takes sein."},

  {type:"teach",kind:"phrase",nl:"Ich habe geschlafen.",en:"I slept.",phonetic:"ikh HA-be ge-SHLAH-fen",example:"A: Wie hast du geschlafen?\nB: Ich habe gut geschlafen.\nA: Und wann bist du eingeschlafen?\nB: Gleich nach dem Film.",exampleEn:"A: How did you sleep?\nB: I slept well.\nA: And when did you fall asleep?\nB: Right after the movie.",note:"schlafen (to sleep) = activity. Takes haben.\neinschlafen (to fall asleep) = change of state. Takes sein."},

  {type:"teach",kind:"phrase",nl:"Ich bin geblieben.",en:"I stayed.",phonetic:"ikh bin ge-BLEE-ben",example:"A: Warum bist du nicht mitgekommen?\nB: Ich bin im Hotel geblieben.\nA: Hast du ausgeruht?\nB: Ja, ich habe lange geschlafen.",exampleEn:"A: Why didn't you come?\nB: I stayed at the hotel.\nA: Did you rest?\nB: Yes, I slept for a long time.",note:"bleiben: special exception, takes sein.\nNote both sein and haben appear naturally in this conversation."},

  {type:"mc",q:"'She read a book.' German Perfekt uses:",opts:["sein, it involves attention","haben, lesen is an activity","sein, it describes change","haben, it is a common exception"],ans:"haben, lesen is an activity",hint:"lesen: no motion, no change of state."},

  {type:"mc",q:"Ich ___ zur Bibliothek gegangen.",opts:["habe","bin","hat","sind"],ans:"bin",hint:"gehen is a motion verb. First person singular of sein."},

  {type:"fb",s:"Er ___ das Buch gelesen.",a:"hat",opts:["hat","ist","haben","sind"],hint:"lesen is an activity verb. Third person singular of haben."},

  {type:"mc",q:"Which pair BOTH use haben in Perfekt?",opts:["fahren + gehen","essen + kaufen","kommen + fliegen","schlafen + einschlafen"],ans:"essen + kaufen",hint:"Look for verbs with no motion and no change of state."},

  {type:"mc",q:"Sie ___ in Hamburg geblieben.",opts:["hat","haben","ist","sind"],ans:"ist",hint:"bleiben is a special exception: it always uses sein."},

  {type:"drag_fill",s:"Wir {1} viel {2} und haben den ganzen Tag {3}.",blanks:{"1":"sind","2":"gewandert","3":"gegessen"},pool:["sind","haben","gewandert","gegessen","gefahren","gegangen"],hint:"One motion verb with sein, one activity verb with haben."},

  {type:"mc",q:"'She fell asleep on the train.' Which helper?",opts:["hat","ist","haben","sind"],ans:"ist",hint:"einschlafen is a change of state: awake to asleep."},

  {type:"mc",q:"'He worked all day.' German Perfekt helper:",opts:["sein, motion verb","sein, state change","haben, activity verb","haben, special exception"],ans:"haben, activity verb",hint:"arbeiten: no motion, no change of state."},

  {type:"fb",s:"Was ___ hier passiert?",a:"ist",opts:["ist","hat","sind","haben"],hint:"passieren is a change/event verb. Third person singular."},

  {type:"mc",q:"Which sentence is grammatically WRONG?",opts:["Ich bin nach Wien gefahren","Ich habe Pizza gegessen","Ich habe nach Wien gegangen","Ich bin eingeschlafen"],ans:"Ich habe nach Wien gegangen",hint:"gehen is a motion verb: it must take sein, not haben."},

  {type:"match",pairs:[{nl:"bin geflogen",en:"flew (sein)"},{nl:"habe gekauft",en:"bought (haben)"},{nl:"ist geworden",en:"became (sein)"},{nl:"hat gearbeitet",en:"worked (haben)"}]},

  {type:"mc",q:"The key question to decide sein or haben is:",opts:["Is the verb more than two syllables?","Is there motion to a destination or change of state?","Does the verb start with ge-?","Is the subject a person?"],ans:"Is there motion to a destination or change of state?",hint:"The decision tree always starts with motion or state change."},

  {type:"mc",q:"Ich habe gut ___ (schlafen, activity).",opts:["geschlafen","eingeschlafen","geschläft","schlafe"],ans:"geschlafen",hint:"schlafen as an activity takes haben. Partizip: geschlafen."},
]},

// ═══ L5: Reiseziele ═══
{id:"deu10l5",title:"Reiseziele",icon:"🗺️",xp:20,board:true,steps:[
  {type:"intro",title:"Reiseziele",desc:"Where are you going? German has specific prepositions for different types of destinations. Today you master travel destinations and combine them with sein-Perfekt.",goals:["nach, in die, ans for destinations","Country and place names","Full travel sentences in Perfekt"]},

  {type:"tip",title:"Destination Prepositions",text:"German uses different prepositions for different destinations:\n\nnach + country or city (no article): nach Deutschland, nach Berlin, nach Japan\nin die + feminine country: in die Schweiz, in die Türkei, in die USA\nan + das (body of water): ans Meer, ans Mittelmeer\nin die + mountains: in die Berge, in die Alpen\nin den + masculine area: in den Schwarzwald\n\nMost countries have NO article and take nach.",deepDive:{title:"Countries with articles",text:"Most German country names have no article, so they take nach:\nDeutschland, Frankreich, Japan, Italien.\n\nBut a few have definite articles and require in die or in den:\ndie Schweiz: in die Schweiz\ndie Türkei: in die Türkei\ndie USA: in die USA\nder Iran: in den Iran\ndie Niederlande: in die Niederlande\n\nIf a country has an article, nach is wrong. Use in die or in den."}},

  {type:"teach",kind:"phrase",nl:"nach Deutschland",en:"to Germany",phonetic:"nakh DOYTSH-lant",example:"A: Wohin bist du gefahren?\nB: Ich bin nach Deutschland gefahren.\nA: Welche Stadt?\nB: Zuerst München, dann Berlin.",exampleEn:"A: Where did you travel?\nB: I traveled to Germany.\nA: Which city?\nB: First Munich, then Berlin.",note:"nach + country name with no article.\nDeutschland, Frankreich, Italien: all take nach."},

  {type:"teach",kind:"phrase",nl:"in die Schweiz",en:"to Switzerland",phonetic:"in dee SHVITES",example:"A: Bist du schon mal in die Schweiz gereist?\nB: Ja, ich bin letztes Jahr dorthin gefahren.\nA: Hast du Ski gefahren?\nB: Natürlich, in den Alpen!",exampleEn:"A: Have you ever traveled to Switzerland?\nB: Yes, I traveled there last year.\nA: Did you ski?\nB: Of course, in the Alps!",note:"die Schweiz has a feminine article.\nSo: in die Schweiz, not nach Schweiz."},

  {type:"teach",kind:"phrase",nl:"ans Meer",en:"to the sea / to the seaside",phonetic:"ans MAYR",example:"A: Was habt ihr im Urlaub gemacht?\nB: Wir sind ans Meer gefahren.\nA: Habt ihr viel geschwommen?\nB: Jeden Tag!",exampleEn:"A: What did you do on holiday?\nB: We went to the sea.\nA: Did you swim a lot?\nB: Every day!",note:"an + das Meer = ans Meer (contraction).\nUsed for seas, lakes, and rivers."},

  {type:"teach",kind:"phrase",nl:"in die Berge",en:"to the mountains",phonetic:"in dee BER-ge",example:"A: Wohin bist du diesen Winter gefahren?\nB: Ich bin in die Berge gefahren.\nA: Welche Berge?\nB: Die Alpen, natürlich.",exampleEn:"A: Where did you go this winter?\nB: I went to the mountains.\nA: Which mountains?\nB: The Alps, of course.",note:"die Berge (plural). in die Berge = into the mountains."},

  {type:"teach",kind:"phrase",nl:"in die Türkei",en:"to Turkey",phonetic:"in dee TUER-kye",example:"A: Bist du schon mal in die Türkei gereist?\nB: Ja, zweimal.\nA: Was hast du gesehen?\nB: Istanbul ist wunderschön.",exampleEn:"A: Have you ever traveled to Turkey?\nB: Yes, twice.\nA: What did you see?\nB: Istanbul is magnificent.",note:"die Türkei has a feminine article.\nTherefore: in die Türkei, not nach Türkei."},

  {type:"teach",kind:"phrase",nl:"in den Urlaub fahren",en:"to go on holiday",phonetic:"in den URL-owb FAH-ren",example:"A: Wann seid ihr in den Urlaub gefahren?\nB: Im August, für zwei Wochen.\nA: War es schön?\nB: Traumhaft, wir kommen wieder.",exampleEn:"A: When did you go on holiday?\nB: In August, for two weeks.\nA: Was it nice?\nB: Wonderful, we will come back.",note:"der Urlaub = the holiday.\nIn den Urlaub fahren is the fixed expression for going on holiday."},

  {type:"teach",kind:"word",nl:"das Ausland",en:"abroad / foreign country",phonetic:"OWS-lant",example:"A: Bist du viel im Ausland gewesen?\nB: Ja, ich reise gerne ins Ausland.\nA: Welches Land war am schönsten?\nB: Neuseeland war unglaublich.",exampleEn:"A: Have you been abroad much?\nB: Yes, I like traveling abroad.\nA: Which country was most beautiful?\nB: New Zealand was incredible.",note:"ins Ausland = in das Ausland (contraction).\nUsed for any destination outside your home country."},

  {type:"mc",q:"You are traveling to France. You say: Ich bin ___ gefahren.",opts:["nach Frankreich","in die Frankreich","ans Frankreich","in Frankreich"],ans:"nach Frankreich",hint:"France has no article in German. Use nach."},

  {type:"mc",q:"You went to Switzerland. Which is correct?",opts:["Ich bin nach Schweiz gefahren","Ich bin in der Schweiz gefahren","Ich bin in die Schweiz gefahren","Ich bin an die Schweiz gefahren"],ans:"Ich bin in die Schweiz gefahren",hint:"die Schweiz has the feminine article. Use in die."},

  {type:"fb",s:"Wir sind ___ Meer gefahren.",a:"ans",opts:["ans","am","ins","zum"],hint:"an + das = ans. Used for sea destinations."},

  {type:"mc",q:"'We went to the mountains.' Which is correct?",opts:["Wir sind nach Berge gefahren","Wir sind in die Berge gefahren","Wir sind ans Berge gefahren","Wir sind in den Berg gefahren"],ans:"Wir sind in die Berge gefahren",hint:"die Berge is plural. In die Berge is the standard phrase."},

  {type:"match",pairs:[{nl:"nach Deutschland",en:"to Germany (no article)"},{nl:"in die Schweiz",en:"to Switzerland (fem. article)"},{nl:"ans Meer",en:"to the sea"},{nl:"in die Berge",en:"to the mountains"}]},

  {type:"mc",q:"'I went on holiday.' Correct set phrase:",opts:["Ich bin in Urlaub gewesen","Ich bin in den Urlaub gefahren","Ich bin zum Urlaub gegangen","Ich bin nach Urlaub gereist"],ans:"Ich bin in den Urlaub gefahren",hint:"der Urlaub: the fixed phrase is in den Urlaub fahren."},

  {type:"fb",s:"Ich bin letzten Sommer ins ___ gereist.",a:"Ausland",opts:["Ausland","Inland","Urlaub","Ausländer"],hint:"Traveling outside your home country."},

  {type:"mc",q:"Which country uses 'in die' instead of 'nach'?",opts:["Deutschland","Japan","Italien","die Türkei"],ans:"die Türkei",hint:"Countries with a definite article use in die or in den, not nach."},

  {type:"mc",q:"Complete: Sie ___ letztes Jahr in die USA ___.",opts:["ist, geflogen","hat, geflogen","ist, flogen","hat, geflogen haben"],ans:"ist, geflogen",hint:"fliegen takes sein. She flew to the USA."},

  {type:"mc",q:"Ins Ausland means:",opts:["At home","In the countryside","Abroad","To the sea"],ans:"Abroad",hint:"Ausland = out-land, i.e. outside one's own country."},
]},

// ═══ L6: Im Hotel ═══
{id:"deu10l6",title:"Im Hotel",icon:"🏨",xp:20,board:true,steps:[
  {type:"intro",title:"Im Hotel",desc:"You have arrived at your destination. Now you need to check in, communicate with hotel staff, and find your room. Today: hotel vocabulary and using sein-Perfekt in travel contexts.",goals:["Hotel vocabulary with articles","Check in and check out phrases","Perfekt in real travel conversations"]},

  {type:"teach",kind:"word",nl:"das Hotel",en:"the hotel",phonetic:"ho-TEL",example:"A: In welchem Hotel seid ihr geblieben?\nB: Wir sind in einem kleinen Hotel geblieben.\nA: War es schön?\nB: Sehr gemütlich!",exampleEn:"A: Which hotel did you stay in?\nB: We stayed in a small hotel.\nA: Was it nice?\nB: Very cozy!",note:"das Hotel (neuter).\ngeblieben (bleiben) = stayed. Uses sein."},

  {type:"teach",kind:"word",nl:"die Rezeption",en:"the reception / front desk",phonetic:"re-tsep-TSEE-on",example:"A: Guten Abend! Ich bin Müller.\nB: Willkommen! Ich suche Ihre Reservierung.\nA: Hier ist die Bestätigung.\nB: Perfekt, Zimmer 14.",exampleEn:"A: Good evening! I am Müller.\nB: Welcome! I am looking for your reservation.\nA: Here is the confirmation.\nB: Perfect, room 14.",note:"die Rezeption (feminine). Formal front-desk term.\nAlso: der Empfang (reception area, more general)."},

  {type:"teach",kind:"word",nl:"einchecken (ist eingecheckt)",en:"to check in / checked in",phonetic:"IN-che-ken, in-ge-CHEKT",example:"A: Wo habt ihr eingecheckt?\nB: Wir sind um drei Uhr eingecheckt.\nA: War es schnell?\nB: Ja, nur fünf Minuten.",exampleEn:"A: Where did you check in?\nB: We checked in at three o'clock.\nA: Was it quick?\nB: Yes, only five minutes.",note:"einchecken: separable loanword.\nPartizip: ein + ge + checkt = eingecheckt."},

  {type:"teach",kind:"word",nl:"auschecken (ist ausgecheckt)",en:"to check out / checked out",phonetic:"OWS-che-ken, ows-ge-CHEKT",example:"A: Wann habt ihr ausgecheckt?\nB: Wir sind um elf Uhr ausgecheckt.\nA: War jemand an der Rezeption?\nB: Ja, die Dame war sehr freundlich.",exampleEn:"A: When did you check out?\nB: We checked out at eleven.\nA: Was anyone at reception?\nB: Yes, the lady was very friendly.",note:"aus- is the separable prefix.\nPartizip: aus + ge + checkt."},

  {type:"teach",kind:"word",nl:"das Zimmer",en:"the room",phonetic:"TSIM-er",example:"A: Kann ich mein Zimmer sehen?\nB: Natürlich! Zimmer 205, zweiter Stock.\nA: Gibt es ein Badezimmer?\nB: Ja, mit Dusche und Badewanne.",exampleEn:"A: Can I see my room?\nB: Of course! Room 205, second floor.\nA: Is there a bathroom?\nB: Yes, with shower and bath.",note:"das Zimmer (neuter). Literally: the room.\ndas Badezimmer = bathroom. das Schlafzimmer = bedroom."},

  {type:"teach",kind:"word",nl:"der Schlüssel",en:"the key",phonetic:"SHLUES-el",example:"A: Hier ist Ihr Schlüssel für Zimmer 14.\nB: Danke. Wo ist der Aufzug?\nA: Links neben der Rezeption.\nB: Vielen Dank!",exampleEn:"A: Here is your key for room 14.\nB: Thank you. Where is the elevator?\nA: Left of the reception.\nB: Many thanks!",note:"der Schlüssel (masculine).\ndie Schlüsselkarte = key card (modern hotels)."},

  {type:"teach",kind:"word",nl:"die Reservierung",en:"the reservation / booking",phonetic:"re-zer-VEER-ung",example:"A: Ich habe eine Reservierung.\nB: Auf welchen Namen?\nA: Auf den Namen Weber.\nB: Einen Moment, ich suche.",exampleEn:"A: I have a reservation.\nB: Under what name?\nA: Under the name Weber.\nB: One moment, I am looking.",note:"die Reservierung (feminine).\nAlso: die Buchung (booking), common for online reservations."},

  {type:"teach",kind:"word",nl:"das Frühstück",en:"the breakfast",phonetic:"FRUE-shtuek",example:"A: Ist das Frühstück inklusive?\nB: Ja, Frühstück ist von sieben bis zehn.\nA: Und wo ist das Restaurant?\nB: Im Erdgeschoss, links.",exampleEn:"A: Is breakfast included?\nB: Yes, breakfast is from seven to ten.\nA: And where is the restaurant?\nB: On the ground floor, to the left.",note:"das Frühstück (neuter). Früh = early. Stück = piece.\nAsking about breakfast is standard at check-in."},

  {type:"mc",q:"'Where is the key?' In German:",opts:["Wo ist die Schlüssel?","Wo ist das Schlüssel?","Wo ist der Schlüssel?","Wo sind die Schlüssel?"],ans:"Wo ist der Schlüssel?",hint:"der Schlüssel is masculine singular."},

  {type:"mc",q:"Sie ___ um 14 Uhr eingecheckt.",opts:["haben","sind","hat","ist"],ans:"ist",hint:"einchecken takes sein. Third person singular."},

  {type:"fb",s:"Wir haben eine ___ auf den Namen Schmidt.",a:"Reservierung",opts:["Reservierung","Schlüssel","Zimmer","Rezeption"],hint:"Booking under a name at a hotel."},

  {type:"mc",q:"'Is breakfast included?' In German:",opts:["Ist das Frühstück inklusive?","Ist die Frühstück inklusive?","Ist der Frühstück inklusive?","Sind das Frühstück inklusive?"],ans:"Ist das Frühstück inklusive?",hint:"das Frühstück is neuter."},

  {type:"match",pairs:[{nl:"die Rezeption",en:"the front desk"},{nl:"der Schlüssel",en:"the key"},{nl:"das Zimmer",en:"the room"},{nl:"das Frühstück",en:"the breakfast"}]},

  {type:"mc",q:"auschecken Partizip II is:",opts:["ausgecheckt","geausscheckt","auscheckte","ausgechecken"],ans:"ausgecheckt",hint:"Separable verb: aus + ge + checkt."},

  {type:"fb",s:"Wo ist der ___? Ich kann mein Zimmer nicht öffnen.",a:"Schlüssel",opts:["Schlüssel","Zimmer","Aufzug","Frühstück"],hint:"You cannot open your door. What do you need?"},

  {type:"mc",q:"Which sentence correctly describes checking in?",opts:["Ich habe um zwei Uhr eingecheckt","Ich bin um zwei Uhr eingecheckt","Ich habe um zwei Uhr eincheckt","Ich bin um zwei Uhr checken"],ans:"Ich bin um zwei Uhr eingecheckt",hint:"einchecken takes sein. Partizip: eingecheckt."},

  {type:"mc",q:"'The reservation is under the name Hoffmann.' Correct form:",opts:["Die Reservierung ist auf dem Namen Hoffmann","Die Reservierung ist auf den Namen Hoffmann","Die Buchung ist nach Namen Hoffmann","Die Reservierung heißt Hoffmann"],ans:"Die Reservierung ist auf den Namen Hoffmann",hint:"auf + accusative for names: auf den Namen."},

  {type:"mc",q:"das Schlafzimmer means:",opts:["The living room","The bathroom","The bedroom","The kitchen"],ans:"The bedroom",hint:"schlafen = to sleep. Schlafzimmer = sleep-room."},
]},

// ═══ L7: Urlaubsgeschichten ═══
{id:"deu10l7",title:"Urlaubsgeschichten",icon:"📸",xp:20,board:true,steps:[
  {type:"intro",title:"Urlaubsgeschichten",desc:"Holiday stories use BOTH haben and sein in Perfekt. Today you practise telling full travel stories by mixing motion verbs (sein) with activity verbs (haben) and sequencing events naturally.",goals:["Tell holiday stories in Perfekt","Mix sein and haben naturally","Use time words to sequence events"]},

  {type:"tip",title:"Sequencing a Story in Perfekt",text:"German time words help you sequence events:\n\nzuerst = first\ndann = then\ndanach = after that\nam nächsten Tag = the next day\nschließlich = finally\n\nA good holiday story layers both helpers:\nWir sind nach Wien gefahren. (sein, motion)\nWir haben ein Konzert besucht. (haben, activity)\nAm nächsten Tag sind wir ins Museum gegangen. (sein, motion)",deepDive:{title:"Word order with time adverbs",text:"Time adverbs can go to position 1 or right after the verb:\n\nDann sind wir ins Kino gegangen. (dann in position 1)\nWir sind dann ins Kino gegangen. (dann after the verb)\n\nBoth are correct. Position 1 gives the time word more emphasis."}},

  {type:"teach",kind:"phrase",nl:"Wir sind angekommen.",en:"We arrived.",phonetic:"veer zint AN-ge-kom-en",example:"A: Wann seid ihr angekommen?\nB: Wir sind am Freitagabend angekommen.\nA: War der Flug lang?\nB: Ja, neun Stunden!",exampleEn:"A: When did you arrive?\nB: We arrived on Friday evening.\nA: Was the flight long?\nB: Yes, nine hours!",note:"ankommen: separable verb (an + kommen).\nPartizip: an + ge + kommen = angekommen. Takes sein."},

  {type:"teach",kind:"phrase",nl:"Wir haben das Museum besucht.",en:"We visited the museum.",phonetic:"veer HA-ben das moo-ZAY-um be-ZUCHT",example:"A: Was habt ihr in Wien gesehen?\nB: Wir haben das Kunsthistorische Museum besucht.\nA: Und danach?\nB: Wir sind durch die Altstadt spaziert.",exampleEn:"A: What did you see in Vienna?\nB: We visited the Art History Museum.\nA: And afterwards?\nB: We strolled through the old town.",note:"besuchen: takes haben (activity, no destination motion).\nPartizip: be- + such + -t = besucht."},

  {type:"teach",kind:"phrase",nl:"Wir haben tolle Fotos gemacht.",en:"We took great photos.",phonetic:"veer HA-ben TOH-le FOH-tos ge-MAKHT",example:"A: Habt ihr viele Fotos gemacht?\nB: Ja, wir haben hunderte Fotos gemacht!\nA: Werde ich sie sehen?\nB: Natürlich, ich schicke dir alle.",exampleEn:"A: Did you take many photos?\nB: Yes, we took hundreds of photos!\nA: Will I see them?\nB: Of course, I will send you all of them.",note:"Fotos machen: activity verb, takes haben.\ngemacht is the Partizip of machen."},

  {type:"teach",kind:"phrase",nl:"Wir sind spazieren gegangen.",en:"We went for a walk.",phonetic:"veer zint shpa-TSEER-en ge-GANG-en",example:"A: Was habt ihr am Sonntag gemacht?\nB: Wir sind spazieren gegangen.\nA: Wo entlang?\nB: Am See, es war wunderschön.",exampleEn:"A: What did you do on Sunday?\nB: We went for a walk.\nA: Where?\nB: Along the lake, it was beautiful.",note:"spazieren gehen: fixed two-word phrase.\nDescribes motion, uses sein. Partizip: spazieren gegangen."},

  {type:"teach",kind:"phrase",nl:"Wir haben gut gegessen.",en:"We ate well.",phonetic:"veer HA-ben goot ge-ES-en",example:"A: Habt ihr lokale Küche probiert?\nB: Ja! Wir haben jeden Tag gut gegessen.\nA: Was war am besten?\nB: Die Sachertorte, natürlich!",exampleEn:"A: Did you try local food?\nB: Yes! We ate well every day.\nA: What was best?\nB: Sachertorte, of course!",note:"essen: activity verb, takes haben.\nPartizip: gegessen (strong irregular)."},

  {type:"mc",q:"Which sentence uses the WRONG helper verb?",opts:["Wir sind nach Paris geflogen","Wir haben den Eiffelturm besucht","Wir ist spazieren gegangen","Wir haben gut gegessen"],ans:"Wir ist spazieren gegangen",hint:"spazieren gehen takes sein. wir needs sind, not ist."},

  {type:"mc",q:"Wir ___ am Nachmittag ins Museum gegangen.",opts:["haben","sind","habt","seid"],ans:"sind",hint:"gehen is a motion verb. wir + sein."},

  {type:"fb",s:"Zuerst ___ wir angekommen, dann haben wir eingecheckt.",a:"sind",opts:["sind","haben","ist","hat"],hint:"ankommen takes sein. First person plural."},

  {type:"drag_fill",s:"Wir {1} nach München gefahren und {2} viel gegessen.",blanks:{"1":"sind","2":"haben"},pool:["sind","haben","ist","hat","seid","habt"],hint:"fahren takes sein, essen takes haben."},

  {type:"mc",q:"'We visited the cathedral.' Which helper?",opts:["sein, it is a destination","haben, besuchen is an activity","sein, it involves movement","haben, it is irregular"],ans:"haben, besuchen is an activity",hint:"besuchen = to visit: no directional motion, it is an activity."},

  {type:"mc",q:"Am nächsten Tag ___ wir in die Berge gewandert.",opts:["haben","sind","habt","seid"],ans:"sind",hint:"wandern is a motion verb. wir + sein."},

  {type:"fb",s:"Wir haben tolle ___ gemacht.",a:"Fotos",opts:["Fotos","Reisen","Hotels","Flüge"],hint:"Taking pictures on holiday."},

  {type:"mc",q:"Which sequence is grammatically CORRECT?",opts:["Zuerst sind wir geflogen, dann sind wir eingecheckt, danach sind wir spazieren gegangen.","Zuerst haben wir geflogen, dann haben wir eingecheckt, danach haben wir spazieren gegangen.","Zuerst sind wir geflogen, dann sind wir eingecheckt, danach haben wir spazieren gegangen.","Zuerst haben wir geflogen, dann sind wir eingecheckt, danach sind wir spazieren gegangen."],ans:"Zuerst sind wir geflogen, dann sind wir eingecheckt, danach sind wir spazieren gegangen.",hint:"fliegen = sein, einchecken = sein, spazieren gehen = sein."},

  {type:"mc",q:"'I took many photos.' In Perfekt:",opts:["Ich bin viele Fotos gemacht","Ich habe viele Fotos gemacht","Ich bin viele Fotos machen","Ich habe viele Fotos gemachen"],ans:"Ich habe viele Fotos gemacht",hint:"Fotos machen is an activity. Takes haben."},

  {type:"mc",q:"spazieren gehen Partizip II:",opts:["gespaziert gegangen","spaziert gegangen","spazieren gegangen","gegangen spazieren"],ans:"spazieren gegangen",hint:"spazieren stays as the infinitive. gegangen is the Partizip of gehen."},

  {type:"mc",q:"'We arrived in Rome.' Which is correct?",opts:["Wir haben in Rom angekommen","Wir sind in Rom angekommen","Wir sind in Rom ankommen","Wir haben in Rom ankommen"],ans:"Wir sind in Rom angekommen",hint:"ankommen is a motion verb. Takes sein."},
]},

// ═══ L8: Perfekt komplett ═══
{id:"deu10l8",title:"Perfekt komplett",icon:"🎓",xp:25,board:true,steps:[
  {type:"intro",title:"Perfekt komplett",desc:"Unit 10 finale. Today you consolidate the full Perfekt system: sein vs haben decision, all irregular Partizip II forms, and building complex travel sentences.",goals:["Full sein vs haben review","Irregular Partizip II forms","Complex multi-verb Perfekt sentences"]},

  {type:"tip",title:"Perfekt Mastery Summary",text:"The complete Perfekt system:\n\nFORMULA: haben/sein (position 2) + Partizip II (end)\n\nsein group (motion + state change):\ngehen, kommen, fahren, fliegen, laufen, rennen\nschwimmen, reisen, klettern, springen, wandern\nwerden, sterben, einschlafen, aufwachen, passieren, bleiben\n\nhaben group (everything else):\nessen, trinken, kaufen, lesen, arbeiten, besuchen\nschlafen, machen, sehen, hören, lernen, schreiben\n\nKey irregular Partizip II forms:\ngehen: gegangen | kommen: gekommen | fahren: gefahren\nfliegen: geflogen | laufen: gelaufen | schwimmen: geschwommen\nschreiben: geschrieben | lesen: gelesen | essen: gegessen",deepDive:{title:"Partizip II patterns",text:"Four patterns to recognize:\n1. Weak regular: ge + stem + t (kaufen: gekauft)\n2. Mixed irregular: ge + changed stem + t (rennen: gerannt, bringen: gebracht)\n3. Strong: ge + changed stem + en (fahren: gefahren, fliegen: geflogen)\n4. Separable: prefix + ge + stem + t or en (einchecken: eingecheckt, ankommen: angekommen)\n\nVerbs with inseparable prefixes (be-, ge-, er-, ver-) do NOT add ge-:\nbesuchen: besucht | verstehen: verstanden | erklären: erklärt"}},

  {type:"verb_table",title:"Complete Partizip II Reference",label:"Key forms to memorize",groups:[{label:"sein group (motion)",rows:[["gehen","ist gegangen","went"],["kommen","ist gekommen","came"],["fahren","ist gefahren","drove/traveled"],["fliegen","ist geflogen","flew"],["laufen","ist gelaufen","ran"],["schwimmen","ist geschwommen","swam"]]},{label:"sein group (state change)",rows:[["werden","ist geworden","became"],["bleiben","ist geblieben","stayed"],["einschlafen","ist eingeschlafen","fell asleep"],["aufwachen","ist aufgewacht","woke up"]]},{label:"haben group (activities)",rows:[["essen","hat gegessen","ate"],["lesen","hat gelesen","read"],["schreiben","hat geschrieben","wrote"],["kaufen","hat gekauft","bought"],["besuchen","hat besucht","visited"]]}],note:"These are the highest-frequency verbs in German."},

  {type:"mc",q:"Which Partizip II is WRONG?",opts:["gegangen","geflogen","geschwimmt","geblieben"],ans:"geschwimmt",hint:"schwimmen is a strong verb: the Partizip II is geschwommen, not geschwimmt."},

  {type:"mc",q:"'She read the book.' Perfekt helper:",opts:["sein, lesen involves focus","haben, lesen is an activity","sein, reading changes the reader","haben, it is a vowel-change verb"],ans:"haben, lesen is an activity",hint:"lesen: no motion, no change of state."},

  {type:"fb",s:"Ich ___ gestern Nacht sehr schlecht geschlafen.",a:"habe",opts:["habe","bin","hat","ist"],hint:"schlafen (sleeping, activity) takes haben."},

  {type:"mc",q:"Wir ___ durch den Park gelaufen und ___ dann Kaffee getrunken.",opts:["sind / haben","haben / sind","ist / hat","sind / sind"],ans:"sind / haben",hint:"laufen = sein (motion). trinken = haben (activity)."},

  {type:"drag_fill",s:"Er {1} nach Wien {2} und {3} das Kunstmuseum {4}.",blanks:{"1":"ist","2":"geflogen","3":"hat","4":"besucht"},pool:["ist","hat","geflogen","besucht","sind","haben","gefahren","gegangen"],hint:"fliegen uses sein (motion). besuchen uses haben (activity)."},

  {type:"mc",q:"The Partizip II of schreiben is:",opts:["geschrieben","geschreibt","schreibt","geskrieben"],ans:"geschrieben",hint:"schreiben: strong verb. ei changes to ie in the Partizip."},

  {type:"mc",q:"'We stayed in Munich for three days.' Correct sentence:",opts:["Wir haben drei Tage in München geblieben","Wir sind drei Tage in München geblieben","Wir sind drei Tage in München bleiben","Wir haben drei Tage in München bleiben"],ans:"Wir sind drei Tage in München geblieben",hint:"bleiben always takes sein. Partizip: geblieben."},

  {type:"fb",s:"Was ___ hier passiert? Das Auto ist in die Mauer gefahren.",a:"ist",opts:["ist","hat","sind","haben"],hint:"passieren takes sein. Third person singular."},

  {type:"mc",q:"Inseparable prefix verbs (be-, ver-, er-) form Partizip II:",opts:["With ge- at the start","Without ge-","With ge- after the prefix","With -t added to infinitive"],ans:"Without ge-",hint:"besuchen: besucht (no ge-). verstehen: verstanden (no ge-)."},

  {type:"mc",q:"Which sentence contains a wrong helper?",opts:["Ich bin nach Hamburg gefahren","Er hat das Konzert besucht","Sie ist im Hotel geblieben","Wir haben nach Berlin gegangen"],ans:"Wir haben nach Berlin gegangen",hint:"gehen describes motion to a destination. It must take sein."},

  {type:"match",pairs:[{nl:"ist gelaufen",en:"ran (sein)"},{nl:"hat gegessen",en:"ate (haben)"},{nl:"ist geworden",en:"became (sein)"},{nl:"hat gekauft",en:"bought (haben)"}]},

  {type:"mc",q:"'I fell asleep immediately.' In Perfekt:",opts:["Ich habe sofort eingeschlafen","Ich bin sofort eingeschlafen","Ich bin sofort einschlaf","Ich habe sofort schlafen"],ans:"Ich bin sofort eingeschlafen",hint:"einschlafen = change of state. Takes sein. Partizip: eingeschlafen."},

  {type:"drag_fill",s:"Wir {1} in die Schweiz {2}, {3} gewandert und {4} in einem Berghotel {5}.",blanks:{"1":"sind","2":"gefahren","3":"sind","4":"haben","5":"übernachtet"},pool:["sind","haben","gefahren","gewandert","übernachtet","gereist","gegessen"],hint:"fahren + wandern = sein. übernachten (to stay overnight) = haben."},

  {type:"mc",q:"'I woke up at 6 AM.' Perfekt:",opts:["Ich habe um 6 Uhr aufgewacht","Ich bin um 6 Uhr aufgewacht","Ich bin um 6 Uhr aufwachen","Ich habe um 6 Uhr gewacht"],ans:"Ich bin um 6 Uhr aufgewacht",hint:"aufwachen = change of state. Takes sein. Partizip: aufgewacht."},

  {type:"mc",q:"Complete: Wir ___ nach Salzburg gefahren, ___ Mozart's Geburtshaus besucht und ___ abends ins Konzert gegangen.",opts:["sind / haben / sind","haben / sind / haben","sind / sind / haben","haben / haben / sind"],ans:"sind / haben / sind",hint:"fahren = sein, besuchen = haben, gehen = sein."},
]},

]},

{n:12,lang:"de",track:"v1",title:"Wo oder Wohin?",sub:"Two-Way Prepositions",icon:"📍",level:"A2.1",color:"#7B5EE8",lessons:[

// ═══ L1: Wechselpräpositionen ═══
{id:"deu12l1",title:"Wechselpräpositionen",icon:"📍",xp:20,board:true,steps:[
  {type:"intro",title:"Wechselpräpositionen",desc:"Nine German prepositions can take DATIVE or ACCUSATIVE depending on whether you are describing a LOCATION (where?) or a DIRECTION (where to?). This is the core of German spatial language.",goals:["Learn the 9 two-way prepositions","Understand the Wo/Wohin contrast","Start building spatial sentences"]},

  {type:"tip",title:"The Core Rule",text:"Nine prepositions switch case:\n\nin, an, auf, über, unter, vor, hinter, neben, zwischen\n\nWo? (where, location) = DATIVE\nWohin? (where to, direction) = ACCUSATIVE\n\nStatic = dative. Moving into = accusative.",deepDive:{title:"Why two cases for one preposition?",text:"German preserves a distinction English lost. 'The book is ON the table' (static) versus 'Put the book ON the table' (movement onto). English uses on for both. German uses different case endings to keep them apart: in + dative = already inside, in + accusative = going into."}},

  {type:"teach",kind:"word",nl:"in",en:"in / into",phonetic:"in",example:"A: Wo ist dein Buch?\nB: Es ist in der Tasche.\nA: Und wo legst du es?\nB: Ich lege es in die Tasche.",exampleEn:"A: Where is your book?\nB: It is in the bag.\nA: And where do you put it?\nB: I put it into the bag.",note:"in + dative = location inside.\nin + accusative = movement into."},

  {type:"teach",kind:"word",nl:"an",en:"at / on (vertical surface)",phonetic:"an",example:"A: Hängt das Bild an der Wand?\nB: Nein, ich hänge es gerade an die Wand.\nA: Super, da sieht es gut aus!",exampleEn:"A: Is the picture on the wall?\nB: No, I am just hanging it on the wall.\nA: Great, it looks good there!",note:"an + dative = at, attached to surface.\nan + accusative = movement onto/up to."},

  {type:"teach",kind:"word",nl:"auf",en:"on (horizontal surface)",phonetic:"owf",example:"A: Liegt mein Schlüssel auf dem Tisch?\nB: Nein, du hast ihn auf den Stuhl gelegt.\nA: Ach so!",exampleEn:"A: Is my key on the table?\nB: No, you put it on the chair.\nA: Ah, I see!",note:"auf + dative = resting on top.\nauf + accusative = placed onto."},

  {type:"teach",kind:"word",nl:"über",en:"over / above",phonetic:"YU-ber",example:"A: Die Lampe hängt über dem Tisch.\nB: Kannst du sie über den Stuhl hängen?\nA: Ja, kein Problem.",exampleEn:"A: The lamp hangs above the table.\nB: Can you hang it above the chair?\nA: Yes, no problem.",note:"über + dative = hovering above.\nüber + accusative = moved to above."},

  {type:"teach",kind:"word",nl:"unter",en:"under / below",phonetic:"UN-ter",example:"A: Ist die Katze unter dem Bett?\nB: Ja! Und sie legt sich immer unter den Tisch.\nA: Typisch Katze.",exampleEn:"A: Is the cat under the bed?\nB: Yes! And she always lies under the table.\nA: Typical cat.",note:"unter + dative = located below.\nunter + accusative = movement to under."},

  {type:"teach",kind:"word",nl:"vor",en:"in front of / before",phonetic:"for",example:"A: Wo treffen wir uns?\nB: Vor dem Kino.\nA: Okay, ich gehe jetzt vor das Kino.",exampleEn:"A: Where do we meet?\nB: In front of the cinema.\nA: Okay, I am going in front of the cinema now.",note:"vor + dative = in front of (location).\nvor + accusative = movement to in front of."},

  {type:"teach",kind:"word",nl:"hinter",en:"behind",phonetic:"HIN-ter",example:"A: Das Auto steht hinter dem Haus.\nB: Ich fahre es hinter die Garage.\nA: Ja, da ist mehr Platz.",exampleEn:"A: The car is behind the house.\nB: I will drive it behind the garage.\nA: Yes, there is more space there.",note:"hinter + dative = located behind.\nhinter + accusative = movement to behind."},

  {type:"teach",kind:"word",nl:"neben",en:"next to / beside",phonetic:"NAY-ben",example:"A: Setz dich neben mich!\nB: Ich sitze schon neben dir.\nA: Oh, ich habe dich nicht gesehen!",exampleEn:"A: Sit next to me!\nB: I am already sitting next to you.\nA: Oh, I did not see you!",note:"neben + dative = beside (location).\nneben + accusative = movement next to."},

  {type:"teach",kind:"word",nl:"zwischen",en:"between",phonetic:"TSVI-shen",example:"A: Das Café ist zwischen der Bank und dem Hotel.\nB: Ich stelle mein Fahrrad zwischen die Autos.\nA: Da ist ein Fahrradständer!",exampleEn:"A: The cafe is between the bank and the hotel.\nB: I will put my bike between the cars.\nA: There is a bike rack there!",note:"zwischen + dative = between two things (location).\nzwischen + accusative = placed between."},

  {type:"tip",title:"Quick Memory Aid",text:"Ask yourself:\n\nWo? = WHERE is it? Describes a STATE. Use DATIVE.\nWohin? = WHERE TO? Describes MOVEMENT. Use ACCUSATIVE.\n\nDative = sitting still.\nAccusative = on the move.",deepDive:{title:"Static vs dynamic: the universal test",text:"When in doubt, ask: is there movement CHANGING position? If something is already there, it is dative. If something is being moved to a new location, it is accusative. This rule is reliable at A2 level for all nine Wechselpräpositionen."}},

  {type:"mc",q:"Which question word signals DATIVE with a Wechselpräposition?",opts:["Wohin?","Woher?","Wo?","Wann?"],ans:"Wo?",hint:"Static location uses which question word?"},

  {type:"mc",q:"Which question word signals ACCUSATIVE with a Wechselpräposition?",opts:["Wo?","Wann?","Woher?","Wohin?"],ans:"Wohin?",hint:"Direction or movement uses which question word?"},

  {type:"mc",q:"How many Wechselpräpositionen are there?",opts:["5","7","9","11"],ans:"9",hint:"in, an, auf, über, unter, vor, hinter, neben, zwischen"},

  {type:"match",pairs:[{nl:"in",en:"in / into"},{nl:"an",en:"at / on vertical"},{nl:"auf",en:"on horizontal"},{nl:"über",en:"over / above"}]},

  {type:"match",pairs:[{nl:"unter",en:"under / below"},{nl:"vor",en:"in front of"},{nl:"hinter",en:"behind"},{nl:"zwischen",en:"between"}]},

  {type:"mc",q:"'Das Buch liegt AUF dem Tisch.' This sentence expresses:",opts:["Direction - accusative","Location - dative","Always accusative with auf","Depends on the noun"],ans:"Location - dative",hint:"Liegt = is lying (static). Wo liegt es?"},

  {type:"mc",q:"'Ich lege das Buch AUF den Tisch.' This sentence expresses:",opts:["Location - dative","Direction - accusative","Always dative with auf","Depends on the verb"],ans:"Direction - accusative",hint:"Lege = I place (movement into position). Wohin lege ich es?"},

  {type:"fb",s:"Wo? Dativ. Wohin? ___.",a:"Akkusativ",opts:["Akkusativ","Nominativ","Genitiv","Dativ"],hint:"Movement into a position triggers which case in German?"},
]},

// ═══ L2: Wo? + Dativ ═══
{id:"deu12l2",title:"Wo? + Dativ",icon:"📌",xp:20,board:true,steps:[
  {type:"intro",title:"Wo? + Dativ",desc:"When answering 'where is something?', all nine two-way prepositions take DATIVE. Let's practice the dative article forms with der, die, das nouns and build real location sentences.",goals:["Form dative phrases with all 9 prepositions","Use dem, der correctly","Build natural location sentences"]},

  {type:"tip",title:"Dative Articles for Wo?",text:"When Wo? triggers dative:\n\nder Tisch (m) → auf DEM Tisch\ndie Wand (f) → an DER Wand\ndas Bett (n) → unter DEM Bett\ndie Bücher (pl) → zwischen DEN Büchern\n\nMasculine and neuter: dem.\nFeminine: der.\nPlural: den + noun adds -n ending.",deepDive:{title:"Why does plural add -n?",text:"In dative plural, nouns gain an -n suffix: die Bücher becomes den Büchern, die Autos becomes den Autos. This -n addition in dative plural is consistent across ALL nouns in German."}},

  {type:"teach",kind:"phrase",nl:"auf dem Tisch",en:"on the table",phonetic:"owf daym TISH",example:"A: Wo ist mein Handy?\nB: Es liegt auf dem Tisch.\nA: Danke! Ich sehe es.\nB: Es liegt neben dem Laptop.",exampleEn:"A: Where is my phone?\nB: It is lying on the table.\nA: Thanks! I see it.\nB: It is next to the laptop.",note:"der Tisch = masculine.\nauf + dem = masculine dative."},

  {type:"teach",kind:"phrase",nl:"in der Küche",en:"in the kitchen",phonetic:"in dair KYU-khe",example:"A: Wo bist du?\nB: Ich bin in der Küche.\nA: Was machst du in der Küche?\nB: Ich koche Abendessen.",exampleEn:"A: Where are you?\nB: I am in the kitchen.\nA: What are you doing in the kitchen?\nB: I am cooking dinner.",note:"die Küche = feminine.\nin + der = feminine dative."},

  {type:"teach",kind:"phrase",nl:"im Zimmer",en:"in the room",phonetic:"im TSIM-mer",example:"A: Wo ist Lukas?\nB: Er ist in seinem Zimmer.\nA: Schon wieder im Zimmer?\nB: Er lernt für die Prüfung.",exampleEn:"A: Where is Lukas?\nB: He is in his room.\nA: In the room again?\nB: He is studying for the exam.",note:"das Zimmer = neuter.\nim = in + dem (contraction). Covered fully in L6."},

  {type:"teach",kind:"phrase",nl:"an der Wand",en:"on the wall",phonetic:"an dair VANT",example:"A: Wo hängt das Foto?\nB: An der Wand, neben dem Fenster.\nA: Das sieht schön aus!\nB: Danke, ich habe es selbst gemacht.",exampleEn:"A: Where does the photo hang?\nB: On the wall, next to the window.\nA: That looks nice!\nB: Thanks, I made it myself.",note:"die Wand = feminine.\nan + der = feminine dative."},

  {type:"teach",kind:"phrase",nl:"vor dem Haus",en:"in front of the house",phonetic:"for daym HOWS",example:"A: Wo parkt ihr Auto?\nB: Immer vor dem Haus.\nA: Und im Sommer?\nB: Auch vor dem Haus, wir haben keine Garage.",exampleEn:"A: Where do you park your car?\nB: Always in front of the house.\nA: And in summer?\nB: Also in front of the house, we have no garage.",note:"das Haus = neuter.\nvor + dem = neuter dative."},

  {type:"teach",kind:"phrase",nl:"hinter der Schule",en:"behind the school",phonetic:"HIN-ter dair SHOO-le",example:"A: Wo ist der Sportplatz?\nB: Hinter der Schule.\nA: Und die Turnhalle?\nB: Die ist neben der Schule.",exampleEn:"A: Where is the sports field?\nB: Behind the school.\nA: And the gym?\nB: That is next to the school.",note:"die Schule = feminine.\nhinter + der = feminine dative."},

  {type:"teach",kind:"phrase",nl:"zwischen dem Sofa und dem Tisch",en:"between the sofa and the table",phonetic:"TSVI-shen daym ZO-fa unt daym TISH",example:"A: Wo ist die Fernbedienung?\nB: Zwischen dem Sofa und dem Tisch.\nA: Schon wieder!\nB: Das passiert immer.",exampleEn:"A: Where is the remote control?\nB: Between the sofa and the table.\nA: Again!\nB: That always happens.",note:"zwischen takes dative for BOTH nouns when answering Wo?."},

  {type:"tip",title:"Dative Summary Table",text:"der (m): auf dem Tisch, vor dem Haus, hinter dem Baum\ndie (f): in der Küche, an der Wand, vor der Schule\ndas (n): im Zimmer (in + dem), auf dem Bett\nPlural: zwischen den Stühlen, neben den Büchern\n\nKey: m and n both use DEM. f uses DER."},

  {type:"mc",q:"'Das Buch liegt ___ Regal.' (das Regal = shelf, location in):",opts:["in der","im","auf der","in die"],ans:"im",hint:"das Regal is neuter. in + dem = im. Location = dative."},

  {type:"mc",q:"'Die Katze schläft ___ Sofa.' (das Sofa, on top, location):",opts:["auf der","auf dem","auf das","auf den"],ans:"auf dem",hint:"das Sofa = neuter. auf + dative = auf dem."},

  {type:"fb",s:"Das Bild hängt an ___ Wand.",a:"der",opts:["der","dem","den","die"],hint:"die Wand is feminine. Dative feminine = ?"},

  {type:"mc",q:"'Die Kinder spielen ___ Garten.' (der Garten = garden, in, location):",opts:["in dem","in der","in das","im"],ans:"im",hint:"der Garten is masculine. in + dem = im."},

  {type:"match",pairs:[{nl:"auf dem Tisch",en:"on the table (neut)"},{nl:"an der Wand",en:"on the wall (fem)"},{nl:"vor dem Haus",en:"in front of the house (neut)"},{nl:"in der Küche",en:"in the kitchen (fem)"}]},

  {type:"mc",q:"'Die Schlüssel liegen ___ Tisch.' (der Tisch, under, location):",opts:["unter der","unter dem","unter den","unter das"],ans:"unter dem",hint:"der Tisch is masculine. Dative masculine = dem."},

  {type:"drag_fill",s:"Die Lampe hängt {1} dem Tisch, und die Katze liegt {2} dem Sofa.",blanks:{"1":"über","2":"auf"},pool:["über","unter","auf","in","vor","an"],hint:"Lamp above the table, cat lying on the sofa."},

  {type:"mc",q:"'Er steht ___ der Spüle.' (die Spüle = sink, beside, location):",opts:["auf","neben","über","zwischen"],ans:"neben",hint:"Next to the sink. Which preposition means beside?"},

  {type:"fb",s:"Die Schuhe stehen vor ___ Tür.",a:"der",opts:["der","dem","den","die"],hint:"die Tür is feminine. Dative feminine = ?"},

  {type:"mc",q:"'Die Bücher stehen zwischen ___ Lampe und ___ Vase.' Both feminine (die). Dative:",opts:["die / die","der / der","dem / dem","den / den"],ans:"der / der",hint:"zwischen + dative. Feminine dative = der for both nouns."},
]},

// ═══ L3: Wohin? + Akkusativ ═══
{id:"deu12l3",title:"Wohin? + Akkusativ",icon:"➡️",xp:20,board:true,steps:[
  {type:"intro",title:"Wohin? + Akkusativ",desc:"When something or someone MOVES to a new position, the two-way prepositions take ACCUSATIVE. A new set of article forms applies. Let's master them.",goals:["Form accusative phrases for direction","Use den, die, das correctly","Build movement sentences with Wechselpräpositionen"]},

  {type:"tip",title:"Accusative Articles for Wohin?",text:"When Wohin? triggers accusative:\n\nder Tisch (m) → auf DEN Tisch\ndie Wand (f) → an DIE Wand\ndas Bett (n) → unter DAS Bett\ndie Stühle (pl) → zwischen DIE Stühle\n\nMasculine CHANGES: der → den.\nFeminine and neuter: same as nominative.\nPlural: die (same as nominative).",deepDive:{title:"Why does only masculine change in accusative?",text:"Proto-Germanic had more distinctions that eroded in most genders. Masculine is the only gender that still shows a difference between nominative (der/ein) and accusative (den/einen). Feminine and neuter look the same in both cases. This is why masculine is 'the hard one': it is the only gender that truly inflects in accusative."}},

  {type:"teach",kind:"phrase",nl:"auf den Tisch",en:"onto the table",phonetic:"owf dayn TISH",example:"A: Wohin legst du das Buch?\nB: Ich lege es auf den Tisch.\nA: Und die Zeitung?\nB: Die lege ich auch auf den Tisch.",exampleEn:"A: Where are you putting the book?\nB: I am putting it on the table.\nA: And the newspaper?\nB: I am putting that on the table too.",note:"der Tisch = masculine.\nauf + accusative = auf DEN."},

  {type:"teach",kind:"phrase",nl:"in die Küche",en:"into the kitchen",phonetic:"in dee KYU-khe",example:"A: Wohin gehst du?\nB: Ich gehe in die Küche.\nA: Was machst du dort?\nB: Ich hole etwas zu trinken.",exampleEn:"A: Where are you going?\nB: I am going into the kitchen.\nA: What are you doing there?\nB: I am getting something to drink.",note:"die Küche = feminine.\nin + accusative feminine = in DIE.\nFeminine accusative = same as nominative."},

  {type:"teach",kind:"phrase",nl:"ins Zimmer",en:"into the room",phonetic:"ins TSIM-mer",example:"A: Wohin läuft das Kind?\nB: Es läuft ins Zimmer.\nA: Warum so schnell?\nB: Es hat sein Spielzeug vergessen.",exampleEn:"A: Where is the child running?\nB: It is running into the room.\nA: Why so fast?\nB: It forgot its toy.",note:"das Zimmer = neuter.\nins = in + das (contraction).\nNeuter accusative = same as nominative."},

  {type:"teach",kind:"phrase",nl:"an die Wand",en:"onto the wall",phonetic:"an dee VANT",example:"A: Wohin hängst du das Poster?\nB: Ich hänge es an die Wand.\nA: Welche Wand?\nB: An die Wand neben dem Fenster.",exampleEn:"A: Where are you hanging the poster?\nB: I am hanging it on the wall.\nA: Which wall?\nB: On the wall next to the window.",note:"die Wand = feminine.\nan + accusative = an DIE Wand.\nhängen here = to hang (transitive, movement)."},

  {type:"teach",kind:"phrase",nl:"vor das Haus",en:"in front of the house (direction)",phonetic:"for das HOWS",example:"A: Wohin fährst du das Auto?\nB: Ich fahre es vor das Haus.\nA: Warum nicht in die Garage?\nB: Die ist voll.",exampleEn:"A: Where are you driving the car?\nB: I am driving it in front of the house.\nA: Why not into the garage?\nB: It is full.",note:"das Haus = neuter.\nvor + accusative neuter = vor DAS.\nNeuter accusative = same as nominative."},

  {type:"teach",kind:"phrase",nl:"hinter die Schule",en:"behind the school (direction)",phonetic:"HIN-ter dee SHOO-le",example:"A: Wohin geht ihr nach dem Unterricht?\nB: Wir gehen hinter die Schule.\nA: Was macht ihr dort?\nB: Wir spielen Fußball.",exampleEn:"A: Where do you go after class?\nB: We go behind the school.\nA: What do you do there?\nB: We play football.",note:"die Schule = feminine.\nhinter + accusative = hinter DIE."},

  {type:"teach",kind:"phrase",nl:"unter den Tisch",en:"under the table (direction)",phonetic:"UN-ter dayn TISH",example:"A: Wohin ist die Katze gegangen?\nB: Sie ist unter den Tisch gelaufen.\nA: Immer dasselbe!\nB: Sie hat Angst vor dem Staubsauger.",exampleEn:"A: Where did the cat go?\nB: It ran under the table.\nA: Always the same!\nB: It is afraid of the vacuum cleaner.",note:"der Tisch = masculine.\nunter + accusative masculine = unter DEN."},

  {type:"tip",title:"Dative vs Accusative: Side by Side",text:"Wo? (dative) vs Wohin? (accusative):\n\nDas Buch liegt auf dem Tisch. (dative)\nIch lege das Buch auf den Tisch. (accusative)\n\nDie Lampe hängt an der Wand. (dative)\nIch hänge die Lampe an die Wand. (accusative)\n\nOnly masculine changes: dem → den."},

  {type:"mc",q:"'Ich hänge das Bild ___ Wand.' (direction, die Wand = wall):",opts:["an die","an der","an dem","ans"],ans:"an die",hint:"die Wand is feminine. Wohin = accusative. Feminine accusative = die."},

  {type:"mc",q:"'Ich stelle die Vase ___ Tisch.' (direction, der Tisch = table):",opts:["auf der","auf dem","auf den","auf das"],ans:"auf den",hint:"der Tisch = masculine. Wohin = accusative. Masculine accusative = den."},

  {type:"fb",s:"Das Kind läuft in ___ Garten.",a:"den",opts:["den","dem","der","das"],hint:"der Garten = masculine. Movement into = accusative. Masculine accusative = ?"},

  {type:"mc",q:"'Die Katze springt ___ Sofa.' (direction, das Sofa = sofa, onto):",opts:["auf das","auf dem","auf der","auf den"],ans:"auf das",hint:"das Sofa = neuter. Wohin = accusative. Neuter accusative = das."},

  {type:"match",pairs:[{nl:"auf den Tisch legen",en:"to put on the table (m)"},{nl:"an die Wand hängen",en:"to hang on the wall (f)"},{nl:"ins Zimmer laufen",en:"to run into the room (n)"},{nl:"vor das Haus fahren",en:"to drive in front of the house (n)"}]},

  {type:"mc",q:"Which article CHANGES between nominative and accusative?",opts:["die (feminine)","das (neuter)","die (plural)","der → den (masculine)"],ans:"der → den (masculine)",hint:"Only one gender has a different accusative form. Which one?"},

  {type:"drag_fill",s:"Ich lege das Buch {1} den Rucksack und stelle die Tasse {2} den Tisch.",blanks:{"1":"in","2":"auf"},pool:["in","an","auf","vor","hinter","unter"],hint:"Book goes inside the backpack, cup goes on top of the table."},

  {type:"mc",q:"'Er setzt sich ___ Sofa.' (direction, das Sofa, accusative, onto):",opts:["auf dem","auf das","auf den","auf die"],ans:"auf das",hint:"das Sofa = neuter. Movement to = accusative. Neuter accusative = das."},

  {type:"fb",s:"Ich gehe heute Abend in ___ Kino.",a:"das",opts:["das","dem","der","den"],hint:"das Kino = neuter. Into the cinema = movement = accusative. Neuter accusative = ?"},

  {type:"mc",q:"'Wir fahren ___ Stadt.' (direction, die Stadt = city, into):",opts:["in die","in der","ins","in das"],ans:"in die",hint:"die Stadt = feminine. Accusative feminine = die. No contraction for feminine."},
]},

// ═══ L4: stehen/stellen, liegen/legen ═══
{id:"deu12l4",title:"stehen/stellen, liegen/legen",icon:"🪑",xp:20,board:true,steps:[
  {type:"intro",title:"stehen/stellen, liegen/legen",desc:"German distinguishes WHERE something IS from WHERE you PUT it. stehen (standing still) vs stellen (placing upright). liegen (lying flat) vs legen (placing flat). This pairs perfectly with Dative and Accusative.",goals:["Master stehen vs stellen","Master liegen vs legen","Connect verb choice to Wo/Wohin"]},

  {type:"tip",title:"The Verb Pair Logic",text:"Two pairs, one logic:\n\nstehen = to stand (location, already there) + DATIVE\nstellen = to place upright (action, movement) + ACCUSATIVE\n\nliegen = to lie flat (location, already there) + DATIVE\nlegen = to lay flat (action, movement) + ACCUSATIVE\n\nState verb = dative. Action verb = accusative.",deepDive:{title:"Why does German have these pairs?",text:"Proto-Germanic distinguished strong intransitive verbs (liegen, stehen, sitzen, hängen) from their weak causative counterparts (legen = to cause to lie, stellen = to cause to stand). English lost most of these: 'lay' vs 'lie' is the only survivor, and native speakers frequently confuse them. German preserves the full system."}},

  {type:"teach",kind:"word",nl:"stehen",en:"to stand (location)",phonetic:"SHTAY-en",example:"A: Wo steht der Kühlschrank?\nB: Er steht in der Küche, neben dem Herd.\nA: Und das Regal?\nB: Das steht an der Wand.",exampleEn:"A: Where does the fridge stand?\nB: It stands in the kitchen, next to the stove.\nA: And the shelf?\nB: That stands against the wall.",note:"stehen = static position, upright.\nAlways with dative (Wo?)."},

  {type:"teach",kind:"word",nl:"stellen",en:"to place / put upright",phonetic:"SHTEH-len",example:"A: Wohin stellst du die Flasche?\nB: Ich stelle sie in den Kühlschrank.\nA: Und das Glas?\nB: Das stelle ich auf den Tisch.",exampleEn:"A: Where are you putting the bottle?\nB: I am putting it in the fridge.\nA: And the glass?\nB: I am putting that on the table.",note:"stellen = action, placing upright.\nAlways with accusative (Wohin?)."},

  {type:"teach",kind:"word",nl:"liegen",en:"to lie / be lying flat",phonetic:"LEE-gen",example:"A: Wo liegt meine Brille?\nB: Sie liegt auf dem Tisch.\nA: Nein, sie liegt neben dem Buch.\nB: Oh, stimmt!",exampleEn:"A: Where are my glasses?\nB: They are lying on the table.\nA: No, they are lying next to the book.\nB: Oh, right!",note:"liegen = flat, static position.\nAlways with dative (Wo?)."},

  {type:"teach",kind:"word",nl:"legen",en:"to lay / place flat",phonetic:"LAY-gen",example:"A: Wohin legst du das Handtuch?\nB: Ich lege es auf das Bett.\nA: Und die Zeitung?\nB: Die lege ich auf den Stuhl.",exampleEn:"A: Where are you putting the towel?\nB: I am laying it on the bed.\nA: And the newspaper?\nB: I am laying that on the chair.",note:"legen = action, placing flat.\nAlways with accusative (Wohin?)."},

  {type:"tip",title:"Quick Test: stehen/stellen vs liegen/legen",text:"Is the object UPRIGHT (bottle, vase, lamp) or FLAT (book, paper, clothes)?\n\nUpright: stehen / stellen\nFlat: liegen / legen\n\nThen: LOCATION (already there) or ACTION (you move it)?\n\nLocation: stehen / liegen + dative\nAction: stellen / legen + accusative"},

  {type:"mc",q:"'Das Buch ___ auf dem Tisch.' (already lying flat, state):",opts:["stellt","legt","liegt","steht"],ans:"liegt",hint:"Book already lying flat on the table. State verb for flat objects."},

  {type:"mc",q:"'Ich ___ das Buch auf den Tisch.' (placing flat, action):",opts:["liege","stehe","lege","stelle"],ans:"lege",hint:"You are placing something flat. Action verb for flat objects."},

  {type:"mc",q:"'Die Flasche ___ im Kühlschrank.' (upright, already inside, state):",opts:["liegt","legt","steht","stellt"],ans:"steht",hint:"Bottle standing upright inside the fridge. State verb for upright."},

  {type:"mc",q:"'Ich ___ die Flasche in den Kühlschrank.' (placing upright, action):",opts:["stehe","lege","liege","stelle"],ans:"stelle",hint:"You are placing something upright. Action verb for upright."},

  {type:"fb",s:"Das Handy ___ auf dem Tisch.",a:"liegt",opts:["liegt","legt","steht","stellt"],hint:"Phone lying flat, already there. State verb for flat objects."},

  {type:"fb",s:"Ich ___ das Handy auf den Tisch.",a:"lege",opts:["lege","liege","stelle","stehe"],hint:"I am placing the phone flat. Action verb for flat objects."},

  {type:"mc",q:"'Wo ___ die Bücher? Sie ___ im Regal.' Choose the correct verb for both blanks:",opts:["legen / liegen","liegen / stehen","stehen / stehen","liegen / liegen"],ans:"liegen / liegen",hint:"Books lying flat in the shelf. State verb for flat objects fills both blanks."},

  {type:"drag_fill",s:"{1} die Vase auf dem Tisch? Nein, ich {2} sie auf das Regal.",blanks:{"1":"Steht","2":"stelle"},pool:["Steht","Stellt","Liegt","stelle","lege","stehe"],hint:"Vase = upright. First: is it there already (state)? Second: I am moving it (action)."},

  {type:"mc",q:"'Ich lege die Jacke auf ___.' (das Bett = bed, neuter, accusative):",opts:["dem Bett","der Bett","den Bett","das Bett"],ans:"das Bett",hint:"legen = action = accusative. das Bett = neuter. Neuter accusative = das."},

  {type:"mc",q:"'Die Jacke liegt auf ___.' (das Bett = bed, neuter, dative):",opts:["das Bett","der Bett","den Bett","dem Bett"],ans:"dem Bett",hint:"liegen = state = dative. das Bett neuter dative = dem."},

  {type:"match",pairs:[{nl:"stehen + Dativ",en:"to stand (location)"},{nl:"stellen + Akkusativ",en:"to place upright (action)"},{nl:"liegen + Dativ",en:"to lie flat (location)"},{nl:"legen + Akkusativ",en:"to lay flat (action)"}]},

  {type:"mc",q:"Error check: 'Ich stehe das Buch auf den Tisch.' What is wrong?",opts:["The case is wrong","stehe should be stelle","The preposition is wrong","Nothing is wrong"],ans:"stehe should be stelle",hint:"stehe = I stand (intransitive, cannot take an object). To place something = which verb?"},

  {type:"drag_fill",s:"Das Handtuch {1} am Haken, und ich {2} die Seife neben das Waschbecken.",blanks:{"1":"hängt","2":"lege"},pool:["hängt","hänge","lege","liege","steht","stelle"],hint:"Towel hanging on hook (state), soap being placed flat beside sink (action)."},
]},

// ═══ L5: hängen, setzen, sitzen ═══
{id:"deu12l5",title:"hängen, setzen, sitzen",icon:"🪞",xp:20,board:true,steps:[
  {type:"intro",title:"hängen, setzen, sitzen",desc:"Three more positional verb pairs: hängen (hang state vs hang action), sitzen (sitting) vs setzen (to sit down), plus the reflexive sich setzen. These complete the core set of placement verbs.",goals:["Use hängen state vs action","Use sitzen vs setzen","Use sich setzen (reflexive)"]},

  {type:"teach",kind:"word",nl:"hängen (intransitiv)",en:"to hang / be hanging (state)",phonetic:"HENG-en",example:"A: Wo hängt das Bild?\nB: Es hängt an der Wand über dem Sofa.\nA: Es hängt sehr schief!\nB: Ich richte es gerade.",exampleEn:"A: Where does the picture hang?\nB: It hangs on the wall above the sofa.\nA: It is hanging very crooked!\nB: I will straighten it.",note:"hängen (intransitive) = state.\nEs hängt an der Wand = it is hanging there.\nWith dative (Wo?)."},

  {type:"teach",kind:"word",nl:"hängen (transitiv)",en:"to hang / put up (action)",phonetic:"HENG-en",example:"A: Wohin hängst du die Jacke?\nB: Ich hänge sie an den Haken.\nA: Und den Mantel?\nB: Den hänge ich in den Schrank.",exampleEn:"A: Where are you hanging the jacket?\nB: I am hanging it on the hook.\nA: And the coat?\nB: I am hanging that in the wardrobe.",note:"hängen (transitive) = action.\nIch hänge es an den Haken.\nWith accusative (Wohin?).\nSame spelling, different grammar!"},

  {type:"tip",title:"Two hängens: One Word, Two Functions",text:"hängen (intransitive) = to be hanging (state):\nDas Bild hängt an der Wand. (dative)\n\nhängen (transitive) = to hang up (action):\nIch hänge das Bild an die Wand. (accusative)\n\nTest: if there is a direct object being moved, it is the action version. If the subject itself is simply there, it is the state version.",deepDive:{title:"Strong vs weak forms of hängen",text:"The intransitive hängen is a strong verb: hing / gehangen (past forms). The transitive action hängen is weak: hängte / gehängt. So 'Das Bild hat an der Wand gehangen' (state past) vs 'Ich habe das Bild an die Wand gehängt' (action past). The past tense forms help you tell them apart."}},

  {type:"teach",kind:"word",nl:"sitzen",en:"to sit / be sitting",phonetic:"ZIT-sen",example:"A: Wo sitzt du?\nB: Ich sitze am Fenster.\nA: Sitzt du gern am Fenster?\nB: Ja, ich liebe den Ausblick.",exampleEn:"A: Where are you sitting?\nB: I am sitting by the window.\nA: Do you like sitting by the window?\nB: Yes, I love the view.",note:"sitzen = state, already seated.\nWith dative (Wo?).\nIrregular: ich sitze, du sitzt, er sitzt."},

  {type:"teach",kind:"word",nl:"sich setzen",en:"to sit down (reflexive)",phonetic:"zikh ZET-sen",example:"A: Setzen Sie sich bitte!\nB: Danke, ich setze mich hier.\nA: Möchten Sie Kaffee?\nB: Ja, gern.",exampleEn:"A: Please sit down!\nB: Thank you, I will sit here.\nA: Would you like coffee?\nB: Yes, please.",note:"sich setzen = action of sitting down.\nAlways reflexive: ich setze mich, du setzt dich.\nWith accusative (Wohin?): Sie setzt sich auf den Stuhl."},

  {type:"teach",kind:"word",nl:"setzen",en:"to place / set (something)",phonetic:"ZET-sen",example:"A: Wohin setzt du das Kind?\nB: Ich setze es auf den Stuhl.\nA: Es kann noch nicht alleine sitzen.\nB: Stimmt, ich halte es fest.",exampleEn:"A: Where are you placing the child?\nB: I am putting it on the chair.\nA: It cannot sit alone yet.\nB: True, I am holding it steady.",note:"setzen (transitive) = to place/seat something.\nWith accusative.\nContrast: sitzen = state, setzen = action."},

  {type:"mc",q:"'Das Kind sitzt ___ Stuhl.' (der Stuhl = chair, location):",opts:["auf den","auf dem","auf der","auf das"],ans:"auf dem",hint:"sitzen = state = dative. der Stuhl = masculine. Dative masculine = dem."},

  {type:"mc",q:"'Das Kind setzt sich ___ Stuhl.' (direction, sitting down):",opts:["auf dem","auf der","auf den","auf das"],ans:"auf den",hint:"sich setzen = movement = accusative. der Stuhl = masculine. Accusative masculine = den."},

  {type:"mc",q:"'Das Bild hängt ___ Wand.' (die Wand, state/location):",opts:["an die","an das","an den","an der"],ans:"an der",hint:"hängen (state) = dative. die Wand = feminine. Dative feminine = der."},

  {type:"mc",q:"'Ich hänge das Bild ___ Wand.' (direction, placing it there):",opts:["an der","an dem","an die","ans"],ans:"an die",hint:"hängen (action) = accusative. die Wand = feminine. Accusative feminine = die."},

  {type:"fb",s:"Ich ___ mich auf das Sofa.",a:"setze",opts:["setze","sitze","stehe","liege"],hint:"I am sitting DOWN (action). Which reflexive verb?"},

  {type:"fb",s:"Ich ___ schon auf dem Sofa.",a:"sitze",opts:["sitze","setze","stehe","lege"],hint:"I am already seated (state). Which verb?"},

  {type:"match",pairs:[{nl:"sitzen + Dativ",en:"to be sitting (state)"},{nl:"sich setzen + Akkusativ",en:"to sit down (action)"},{nl:"hängen intrans. + Dativ",en:"to be hanging (state)"},{nl:"hängen trans. + Akkusativ",en:"to hang up (action)"}]},

  {type:"mc",q:"'Setzen Sie sich!' means:",opts:["Please stand up","Please sit down","Where are you sitting?","Do you want to sit?"],ans:"Please sit down",hint:"Setzen Sie sich = formal imperative of sich setzen."},

  {type:"drag_fill",s:"Das Handtuch {1} am Haken. Ich {2} meine Jacke an den Haken.",blanks:{"1":"hängt","2":"hänge"},pool:["hängt","hänge","hängen","liegt","lege","steht"],hint:"Towel is there already (state). I am placing my jacket (action)."},

  {type:"mc",q:"'Wo sitzt der Chef?' He is at his desk. Which is correct?",opts:["Er sitzt an seinem Schreibtisch.","Er setzt sich an seinen Schreibtisch.","Er sitzt an seinen Schreibtisch.","Er setzt sich an seinem Schreibtisch."],ans:"Er sitzt an seinem Schreibtisch.",hint:"sitzt = state = dative. seinem Schreibtisch = dative of sein Schreibtisch."},

  {type:"mc",q:"'Wohin setzt du das Baby?' Choose the correct answer:",opts:["Ich setze es auf dem Stuhl.","Ich sitze es auf den Stuhl.","Ich setze es auf den Stuhl.","Ich sitze es auf dem Stuhl."],ans:"Ich setze es auf den Stuhl.",hint:"setzen (transitive) + accusative. der Stuhl masculine → den."},

  {type:"tip",title:"The Full Positional Verb System",text:"State (Wo? + dative):\nstehen, liegen, sitzen, hängen (intrans.)\n\nAction (Wohin? + accusative):\nstellen, legen, setzen / sich setzen, hängen (trans.)\n\nMemory key: the action verb takes a direct object (something is being moved). The state verb just describes where something already is."},
]},

// ═══ L6: Contractions ═══
{id:"deu12l6",title:"Contractions: im, ins, am, ans",icon:"🔗",xp:20,board:true,steps:[
  {type:"intro",title:"Contractions: im, ins, am, ans",desc:"German regularly contracts 'in dem', 'in das', 'an dem', and 'an das' into single words: im, ins, am, ans. These contractions are mandatory in most contexts. Let's learn them all.",goals:["Use im, ins, am, ans correctly","Know when contractions are mandatory","Apply contractions to real sentences"]},

  {type:"tip",title:"The Core Four Contractions",text:"in + dem = im (dative, location)\nin + das = ins (accusative, direction)\nan + dem = am (dative, location)\nan + das = ans (accusative, direction)\n\nThese are NOT optional in normal speech.\nim Zimmer, ins Kino, am Bahnhof, ans Meer.",deepDive:{title:"Are there more contractions in German?",text:"Yes. The full list includes: im, ins, am, ans, aufs (auf + das), vors (vor + das), hinters (hinter + das), unters (unter + das), übers (über + das). The an/in group is most common. For A2, master im, ins, am, ans first."}},

  {type:"teach",kind:"phrase",nl:"im (in + dem)",en:"in the (dative, location)",phonetic:"im",example:"A: Wo bist du?\nB: Ich bin im Supermarkt.\nA: Wie lange bist du noch im Supermarkt?\nB: Nur noch zehn Minuten.",exampleEn:"A: Where are you?\nB: I am in the supermarket.\nA: How much longer are you in the supermarket?\nB: Only ten more minutes.",note:"im = in + dem.\nUsed with masculine and neuter nouns in dative.\nim Supermarkt (der), im Zimmer (das)."},

  {type:"teach",kind:"phrase",nl:"ins (in + das)",en:"into the (accusative, direction)",phonetic:"ins",example:"A: Wohin gehst du?\nB: Ich gehe ins Kino.\nA: Welchen Film schaust du?\nB: Den neuen Actionfilm.",exampleEn:"A: Where are you going?\nB: I am going to the cinema.\nA: Which film are you watching?\nB: The new action film.",note:"ins = in + das.\nUsed with neuter nouns in accusative (direction).\nins Kino (das), ins Büro (das), ins Bett (das)."},

  {type:"teach",kind:"phrase",nl:"am (an + dem)",en:"at the / on the (dative, location)",phonetic:"am",example:"A: Wo treffen wir uns?\nB: Am Bahnhof, vor dem Haupteingang.\nA: Um wie viel Uhr?\nB: Um halb drei.",exampleEn:"A: Where shall we meet?\nB: At the station, in front of the main entrance.\nA: What time?\nB: At half past two.",note:"am = an + dem.\nUsed with masculine and neuter nouns in dative.\nAlso used for time: am Montag, am Abend."},

  {type:"teach",kind:"phrase",nl:"ans (an + das)",en:"to the (accusative, direction)",phonetic:"ans",example:"A: Wohin fahren wir?\nB: Ans Meer!\nA: Toll! Ich freue mich so.\nB: Wir fahren ans Meer jedes Jahr.",exampleEn:"A: Where are we driving?\nB: To the sea!\nA: Great! I am so excited.\nB: We drive to the sea every year.",note:"ans = an + das.\nUsed with neuter nouns in accusative.\nans Meer (das), ans Fenster (das), ans Telefon (das)."},

  {type:"tip",title:"Feminine Has NO Contraction",text:"in die Küche, an die Wand, in die Schule, an die Tür.\n\nFeminine (die) has no contracted form.\nOnly masculine/neuter in dative get im/am.\nOnly neuter in accusative gets ins/ans.\n\nFeminine accusative: always 'in die', 'an die' in full.",deepDive:{title:"Why no feminine contraction?",text:"Masculine and neuter share 'dem' in the dative, which contracts easily to 'im/am'. Feminine has 'der' in the dative. 'in der' does not contract because 'inder' would be ambiguous. The system is not perfectly symmetrical but follows the path of least resistance in spoken German."}},

  {type:"teach",kind:"phrase",nl:"aufs (auf + das)",en:"onto the (neuter, accusative)",phonetic:"owfs",example:"A: Wohin gehst du?\nB: Aufs Dach! Ich repariere etwas.\nA: Sei vorsichtig!\nB: Keine Sorge, ich passe auf.",exampleEn:"A: Where are you going?\nB: Onto the roof! I am fixing something.\nA: Be careful!\nB: No worries, I will be careful.",note:"aufs = auf + das.\nLess mandatory than im/ins/am/ans.\nCommon with: aufs Bett, aufs Land, aufs Dach."},

  {type:"mc",q:"'Ich gehe ___ Kino.' (das Kino, direction into):",opts:["in dem","im","ins","in die"],ans:"ins",hint:"in + das (neuter, accusative) = ?"},

  {type:"mc",q:"'Er ist ___ Büro.' (das Büro, location inside):",opts:["ins","in das","im","in die"],ans:"im",hint:"in + dem (neuter, dative) = ?"},

  {type:"mc",q:"'Wir fahren ___ Meer.' (das Meer, direction toward):",opts:["am","ans","im","an das"],ans:"ans",hint:"an + das (neuter, accusative) = ?"},

  {type:"mc",q:"'Das Konzert ist ___ Samstag.' Which contraction is used with days?",opts:["im","ans","ins","am"],ans:"am",hint:"an + dem for days and times. Which contraction?"},

  {type:"fb",s:"Sie sitzt ___ Fenster und schaut raus.",a:"am",opts:["am","ans","im","ins"],hint:"an + dem (dative, location at the window) = ?"},

  {type:"mc",q:"'Ich gehe ___ Schule.' (die Schule, direction, feminine):",opts:["ins","im","in die","in der"],ans:"in die",hint:"die Schule is feminine. Feminine has NO contraction. Accusative feminine = die."},

  {type:"match",pairs:[{nl:"im",en:"in + dem (m/n dative)"},{nl:"ins",en:"in + das (n accusative)"},{nl:"am",en:"an + dem (m/n dative)"},{nl:"ans",en:"an + das (n accusative)"}]},

  {type:"mc",q:"'Ich hänge den Mantel ___ Haken.' (der Haken = hook, direction, masculine):",opts:["am","ans","an den","an dem"],ans:"an den",hint:"der Haken is MASCULINE. Accusative masculine = den. No contraction exists for an + den."},

  {type:"drag_fill",s:"Morgens gehe ich {1} Bäckerei, dann fahre ich {2} Büro.",blanks:{"1":"in die","2":"ins"},pool:["in die","ins","im","an die","am","ans"],hint:"Bäckerei = die (feminine, no contraction). Büro = das (neuter, contraction applies)."},

  {type:"mc",q:"Which of these is non-standard in modern spoken German?",opts:["im Supermarkt","ins Kino","am Bahnhof","in dem Zimmer"],ans:"in dem Zimmer",hint:"When a contraction exists (im, ins, am, ans), using the full form sounds unnatural."},

  {type:"mc",q:"'Er geht ___ Bett.' (das Bett, direction into bed):",opts:["im","am","ans","ins"],ans:"ins",hint:"in + das (neuter accusative) = ?"},

  {type:"mc",q:"'Er liegt ___ Bett.' (das Bett, location in bed):",opts:["ins","ans","im","am"],ans:"im",hint:"in + dem (neuter dative) = ?"},
]},

// ═══ L7: Mein Zimmer beschreiben ═══
{id:"deu12l7",title:"Mein Zimmer beschreiben",icon:"🛋️",xp:20,board:true,steps:[
  {type:"intro",title:"Mein Zimmer beschreiben",desc:"Time to use everything. Describe where things ARE in a room (Wo? + dative) and where you PUT things (Wohin? + accusative). All nine prepositions, positional verbs, and contractions come together here.",goals:["Describe room layout using all 9 prepositions","Combine state and action verbs","Use contractions naturally in room descriptions"]},

  {type:"teach",kind:"phrase",nl:"das Zimmer einrichten",en:"to furnish / arrange a room",phonetic:"das TSIM-mer ain-RIKH-ten",example:"A: Wie richtest du dein Zimmer ein?\nB: Ich stelle das Bett an die Wand.\nA: Und den Schreibtisch?\nB: Den stelle ich vor das Fenster.",exampleEn:"A: How are you arranging your room?\nB: I am putting the bed against the wall.\nA: And the desk?\nB: I am putting that in front of the window.",note:"einrichten = to furnish, arrange.\nSeparable: richte... ein."},

  {type:"teach",kind:"word",nl:"der Schreibtisch",en:"the desk",phonetic:"dair SHRAIP-tish",example:"A: Wo steht dein Schreibtisch?\nB: Er steht vor dem Fenster.\nA: Und die Lampe?\nB: Die hängt über dem Schreibtisch.",exampleEn:"A: Where does your desk stand?\nB: It stands in front of the window.\nA: And the lamp?\nB: It hangs above the desk.",note:"der Schreibtisch (masculine).\nSchreib (writing) + Tisch (table) = writing table."},

  {type:"teach",kind:"word",nl:"das Regal",en:"the shelf / bookcase",phonetic:"das ray-GAHL",example:"A: Wo stehen deine Bücher?\nB: Sie stehen im Regal.\nA: Wo steht das Regal?\nB: Es steht zwischen dem Schreibtisch und dem Bett.",exampleEn:"A: Where are your books?\nB: They are in the bookcase.\nA: Where does the bookcase stand?\nB: It stands between the desk and the bed.",note:"das Regal (neuter).\nim Regal = in the bookcase. Note: in, not auf, for shelves."},

  {type:"teach",kind:"word",nl:"der Kleiderschrank",en:"the wardrobe",phonetic:"dair KLAI-der-shrank",example:"A: Wo hängen deine Jacken?\nB: Im Kleiderschrank, neben meinen Hemden.\nA: Und deine Schuhe?\nB: Die stehen vor dem Kleiderschrank.",exampleEn:"A: Where do your jackets hang?\nB: In the wardrobe, next to my shirts.\nA: And your shoes?\nB: They stand in front of the wardrobe.",note:"der Kleiderschrank (masculine).\nKleider (clothes) + Schrank (cabinet)."},

  {type:"teach",kind:"word",nl:"das Fenster",en:"the window",phonetic:"das FENS-ter",example:"A: Wo sitzt du am liebsten?\nB: Am Fenster, natürlich!\nA: Was siehst du durchs Fenster?\nB: Den Garten und die Straße.",exampleEn:"A: Where do you like sitting most?\nB: By the window, of course!\nA: What do you see through the window?\nB: The garden and the street.",note:"das Fenster (neuter).\nans Fenster = toward the window (accusative).\nam Fenster = at the window (dative)."},

  {type:"teach",kind:"phrase",nl:"Das Bett steht an der Wand.",en:"The bed stands against the wall.",phonetic:"das BET shtayt an dair VANT",example:"A: Wie ist dein Zimmer eingerichtet?\nB: Das Bett steht an der Wand, und der Schreibtisch steht vor dem Fenster.\nA: Und das Regal?\nB: Das Regal steht neben der Tür.",exampleEn:"A: How is your room arranged?\nB: The bed stands against the wall, and the desk stands in front of the window.\nA: And the bookcase?\nB: The bookcase stands next to the door.",note:"Full sentence combining stehen + dative location."},

  {type:"mc",q:"'Das Bett steht ___ Wand.' (die Wand, location, against):",opts:["an die","an der","an dem","an das"],ans:"an der",hint:"stehen = state = dative. die Wand = feminine dative = der."},

  {type:"mc",q:"'Ich stelle den Stuhl ___ Tisch.' (der Tisch, direction, next to):",opts:["neben dem","neben den","neben der","neben das"],ans:"neben den",hint:"stellen = action = accusative. der Tisch = masculine accusative = den."},

  {type:"mc",q:"'Die Lampe hängt ___ Schreibtisch.' (der Schreibtisch, above, location):",opts:["über den","über die","über dem","übers"],ans:"über dem",hint:"hängen (state) = dative. der Schreibtisch = masculine dative = dem."},

  {type:"fb",s:"Die Bücher stehen ___ Regal.",a:"im",opts:["im","ins","am","ans"],hint:"in + dem (das Regal, neuter, dative location) = ?"},

  {type:"drag_fill",s:"{1} steht das Sofa? Es steht {2} der Wand, {3} dem Fernseher.",blanks:{"1":"Wo","2":"an","3":"vor"},pool:["Wo","Wohin","an","auf","vor","unter"],hint:"First: location question word. Then: against the wall, in front of the TV."},

  {type:"mc",q:"'Ich hänge die Lampe ___ Tisch.' (der Tisch, direction, over):",opts:["über dem","über den","übers","über die"],ans:"über den",hint:"hängen (action) = accusative. der Tisch = masculine accusative = den."},

  {type:"mc",q:"'Das Poster hängt ___ Bett.' (das Bett, above, location):",opts:["über das","über dem","über den","über der"],ans:"über dem",hint:"hängen (state) = dative. das Bett = neuter dative = dem."},

  {type:"mc",q:"'Ich lege das Kissen ___ Sofa.' (das Sofa, onto, direction):",opts:["auf dem","auf der","auf den","auf das"],ans:"auf das",hint:"legen = action = accusative. das Sofa = neuter accusative = das."},

  {type:"drag_fill",s:"Ich stelle den Schreibtisch {1} das Fenster und lege das Buch {2} den Tisch.",blanks:{"1":"vor","2":"auf"},pool:["vor","hinter","auf","unter","an","neben"],hint:"Desk in front of the window, book on top of the table."},

  {type:"match",pairs:[{nl:"Das Bett steht an der Wand.",en:"The bed is against the wall."},{nl:"Ich stelle das Bett an die Wand.",en:"I put the bed against the wall."},{nl:"Das Regal steht neben der Tür.",en:"The shelf is next to the door."},{nl:"Ich stelle das Regal neben die Tür.",en:"I put the shelf next to the door."}]},

  {type:"mc",q:"'Zwischen dem Sofa und dem Tisch liegt der Teppich.' Where is the rug?",opts:["On the sofa","On the table","Between the sofa and table","Under the table"],ans:"Between the sofa and table",hint:"zwischen = between. Dative = location."},

  {type:"mc",q:"'Der Spiegel hängt über ___.' (das Waschbecken = sink, neuter, location above):",opts:["dem Waschbecken","das Waschbecken","den Waschbecken","der Waschbecken"],ans:"dem Waschbecken",hint:"hängen (state) = dative. das Waschbecken = neuter dative = dem."},

  {type:"mc",q:"'Ich stelle die Pflanze ___ Fenster.' (das Fenster, next to, direction):",opts:["neben dem","neben das","neben den","neben der"],ans:"neben das",hint:"stellen = action = accusative. das Fenster = neuter accusative = das."},
]},

// ═══ L8: Wechselpräp Review ═══
{id:"deu12l8",title:"Wechselpräp Review",icon:"🔁",xp:20,board:true,steps:[
  {type:"intro",title:"Wechselpräp Review",desc:"Final review of everything in Unit 12: all nine two-way prepositions, Wo vs Wohin, dative vs accusative, positional verb pairs, and contractions. Mixed practice from all angles.",goals:["Distinguish Wo and Wohin reliably","Apply all 9 Wechselpräpositionen","Use stehen/stellen, liegen/legen, sitzen/setzen, hängen correctly","Use contractions naturally"]},

  {type:"tip",title:"Unit 12 Complete Summary",text:"Nine Wechselpräpositionen:\nin, an, auf, über, unter, vor, hinter, neben, zwischen\n\nWo? + DATIVE: dem (m/n), der (f), den (pl)\nWohin? + ACCUSATIVE: den (m), die (f), das (n)\n\nState verbs (Wo + dative): stehen, liegen, sitzen, hängen (intrans.)\nAction verbs (Wohin + acc.): stellen, legen, setzen, hängen (trans.)\n\nContractions: im, ins, am, ans"},

  {type:"mc",q:"'Das Glas steht auf dem Tisch.' Is this Wo? or Wohin?",opts:["Wohin, accusative","Wo, dative","Wohin, dative","Wo, accusative"],ans:"Wo, dative",hint:"Steht = state verb. Wo? = dative."},

  {type:"mc",q:"'Ich stelle das Glas auf den Tisch.' Is this Wo? or Wohin?",opts:["Wo, dative","Wohin, dative","Wo, accusative","Wohin, accusative"],ans:"Wohin, accusative",hint:"Stelle = action verb. Wohin? = accusative."},

  {type:"mc",q:"'Die Katze liegt ___ Sofa.' (das Sofa, under, location):",opts:["unter das","unter den","unter dem","unter der"],ans:"unter dem",hint:"liegen = state = dative. das Sofa = neuter dative = dem."},

  {type:"mc",q:"'Die Katze läuft ___ Sofa.' (das Sofa, under, direction):",opts:["unter dem","unter der","unter das","unter den"],ans:"unter das",hint:"läuft = movement = accusative. das Sofa = neuter accusative = das."},

  {type:"fb",s:"Ich gehe ___ Supermarkt.",a:"in den",opts:["in den","im","in dem","ins"],hint:"der Supermarkt = masculine. Direction = accusative. Masculine accusative = den. No contraction for masc. acc."},

  {type:"fb",s:"Ich bin ___ Supermarkt.",a:"im",opts:["im","ins","in den","in dem"],hint:"der Supermarkt = masculine. Location = dative. in + dem = ?"},

  {type:"mc",q:"'The lamp is above the table.' Correct German sentence:",opts:["Die Lampe hängt über den Tisch.","Die Lampe hängt über dem Tisch.","Die Lampe hänge über dem Tisch.","Die Lampe hängt über der Tisch."],ans:"Die Lampe hängt über dem Tisch.",hint:"State = dative. der Tisch = masculine dative = dem."},

  {type:"mc",q:"'I am hanging the lamp above the table.' Correct German sentence:",opts:["Ich hänge die Lampe über dem Tisch.","Ich hänge die Lampe über den Tisch.","Ich hänge die Lampe über der Tisch.","Ich hänge die Lampe über das Tisch."],ans:"Ich hänge die Lampe über den Tisch.",hint:"Action = accusative. der Tisch = masculine accusative = den."},

  {type:"match",pairs:[{nl:"im Zimmer",en:"in + dem: neuter dative"},{nl:"ins Kino",en:"in + das: neuter accusative"},{nl:"am Bahnhof",en:"an + dem: masc/neut dative"},{nl:"ans Meer",en:"an + das: neuter accusative"}]},

  {type:"mc",q:"'Das Buch stellt auf dem Tisch.' What is wrong here?",opts:["auf is wrong","dem is wrong","stellt is wrong, should be steht","Das is wrong"],ans:"stellt is wrong, should be steht",hint:"stellen = action verb (transitive). For 'the book is there', use stehen (state)."},

  {type:"drag_fill",s:"Das Bild {1} an der Wand, aber ich {2} es über den Schreibtisch.",blanks:{"1":"hängt","2":"hänge"},pool:["hängt","hänge","liegt","lege","steht","stelle"],hint:"First: picture is hanging (state). Second: I am moving it to a new position (action)."},

  {type:"mc",q:"'Sie setzt sich ___ Fenster.' (das Fenster, direction to sit by):",opts:["am","an das","ans","an dem"],ans:"ans",hint:"sich setzen = action = accusative. an + das (neuter) = ?"},

  {type:"mc",q:"'Sie sitzt ___ Fenster.' (das Fenster, state, sitting by):",opts:["ans","an das","am","an die"],ans:"am",hint:"sitzen = state = dative. an + dem (neuter) = ?"},

  {type:"drag_fill",s:"Wo liegt das Buch? Es liegt {1} dem Tisch, {2} dem Regal.",blanks:{"1":"auf","2":"neben"},pool:["auf","unter","neben","vor","hinter","zwischen"],hint:"The book is lying ON the table, NEXT TO the shelf."},

  {type:"mc",q:"'Ich lege die Zeitung zwischen die Stühle.' Which case is used here?",opts:["zwischen + dative plural","zwischen + accusative plural","in + dative neuter","an + accusative feminine"],ans:"zwischen + accusative plural",hint:"legen = action = accusative. die Stühle = plural accusative = die."},

  {type:"mc",q:"'Hinter ___ Haus gibt es einen Garten.' (das Haus, location behind):",opts:["das","den","dem","der"],ans:"dem",hint:"gibt es = there is (state/location). hinter + dative. das Haus = neuter dative = dem."},

  {type:"fb",s:"Das Sofa steht vor ___ Fernseher.",a:"dem",opts:["dem","den","der","das"],hint:"der Fernseher = masculine. vor + dative (state). Masculine dative = ?"},

  {type:"mc",q:"'Sie stellen die Stühle vor ___ Bühne.' (die Bühne = stage, direction):",opts:["der","dem","die","das"],ans:"die",hint:"stellen = action = accusative. die Bühne = feminine. Feminine accusative = die."},
]},

]},


// ══════════════════════════════════════════════════════════════
// UNIT 7: Unterwegs — Directions, Transport & Modal Verbs A1.2
// ══════════════════════════════════════════════════════════════
{n:7,lang:"de",track:"v1",title:"Unterwegs",sub:"Directions, Transport & Modal Verbs",icon:"🚌",level:"A1.2",color:"#7B5EE8",lessons:[

// ═══ L1: Verkehrsmittel ═══
{id:"deu7l1",title:"Verkehrsmittel",icon:"🚌",xp:15,board:true,steps:[
  {type:"intro",title:"Verkehrsmittel",desc:"How do you get around in Germany? By bus, by bike, or on foot? In this lesson you learn the core transport words that will carry you through every city.",goals:["6 transport nouns with articles","Say how you travel: mit + vehicle","Understand zu Fuß (on foot)"]},
  {type:"teach",kind:"word",nl:"der Bus",en:"the bus",phonetic:"der BOOS",example:"A: Nimmst du den Bus?\nB: Ja, der Bus fährt alle zehn Minuten.\nA: Perfekt!",exampleEn:"A: Are you taking the bus?\nB: Yes, the bus runs every ten minutes.\nA: Perfect!",note:"Masculine (der). Regular public transport in every German city."},
  {type:"teach",kind:"word",nl:"die U-Bahn",en:"the underground / subway",phonetic:"dee OO-bahn",example:"A: Wo ist die U-Bahn?\nB: Die U-Bahn ist da drüben.\nA: Danke!",exampleEn:"A: Where is the subway?\nB: The subway is over there.\nA: Thanks!",note:"Feminine (die). U = Untergrund (underground). Major German cities have extensive U-Bahn networks."},
  {type:"teach",kind:"word",nl:"die Straßenbahn",en:"the tram",phonetic:"dee SHTRAH-sen-bahn",example:"A: Fährt hier eine Straßenbahn?\nB: Ja, die Linie 4 kommt gleich.\nA: Gut, ich nehme die Straßenbahn.",exampleEn:"A: Does a tram run here?\nB: Yes, line 4 is coming soon.\nA: Good, I will take the tram.",note:"Feminine (die). Straße = street + Bahn = rail/path. Common in cities like Freiburg, Dresden, and Frankfurt."},
  {type:"teach",kind:"word",nl:"das Auto",en:"the car",phonetic:"dahs OW-toh",cognate:{words:[{lang:"English",word:"automobile"},{lang:"Dutch",word:"auto"}],family:"germanic"},example:"A: Hast du ein Auto?\nB: Ja, aber ich nehme oft den Bus.\nA: Warum?\nB: Parken ist zu teuer.",exampleEn:"A: Do you have a car?\nB: Yes, but I often take the bus.\nA: Why?\nB: Parking is too expensive.",note:"Neuter (das). Short for Automobil. Germany is famous for its car culture and the Autobahn."},
  {type:"teach",kind:"word",nl:"das Fahrrad",en:"the bicycle",phonetic:"dahs FAR-raht",cognate:{words:[{lang:"English",word:"farrad (archaic fare-wheel)"},{lang:"Dutch",word:"fiets"}],family:"germanic"},example:"A: Ich nehme heute das Fahrrad.\nB: Gute Idee! Das Wetter ist schön.\nA: Ja, und es ist schneller als der Bus.",exampleEn:"A: I am taking the bicycle today.\nB: Good idea! The weather is nice.\nA: Yes, and it is faster than the bus.",note:"Neuter (das). Fahr = travel + Rad = wheel. Germany has excellent cycling infrastructure."},
  {type:"tip",title:"Mit + Vehicle = How You Travel",text:"To say how you travel, use:\nMit + dem/der + vehicle\n\nIch fahre mit dem Bus. (I travel by bus.)\nIch fahre mit dem Auto. (I travel by car.)\nIch fahre mit der U-Bahn. (I travel by U-Bahn.)\nIch fahre mit dem Fahrrad. (I ride the bike.)\n\nException: zu Fuß (on foot). No article, no mit.",deepDive:{title:"Why dative after mit?",text:"Mit is a dative preposition. The article that follows must be in dative form:\nder Bus (nominative) becomes dem Bus (dative).\ndie U-Bahn (nominative) becomes der U-Bahn (dative).\ndas Auto (nominative) becomes dem Auto (dative).\nYou will study dative fully in A2. For now, just learn the mit-phrases as fixed chunks."}},
  {type:"teach",kind:"phrase",nl:"zu Fuß",en:"on foot",phonetic:"tsoo FOOS",example:"A: Wie kommst du zur Schule?\nB: Ich gehe zu Fuß. Es sind nur fünf Minuten.\nA: Das ist praktisch!",exampleEn:"A: How do you get to school?\nB: I go on foot. It is only five minutes.\nA: That is practical!",note:"Fixed phrase. No article. Fuß = foot. zu Fuß gehen = to walk."},
  {type:"verb_table",title:"fahren (to travel/drive) — present tense",label:"fahren",groups:[{label:"singular",rows:[["ich","fahre"],["du","fährst"],["er/sie/es","fährt"]]},{label:"plural",rows:[["wir","fahren"],["ihr","fahrt"],["Sie/sie","fahren"]]}],note:"fahren has a vowel change: a to ä in du/er forms. Common with all transport."},
  {type:"mc",q:"'Die U-Bahn' means:",opts:["the tram","the bus","the underground/subway","the bicycle"],ans:"the underground/subway",hint:"U stands for Untergrund = underground."},
  {type:"mc",q:"'Das Fahrrad' means:",opts:["the car","the bicycle","the tram","the bus"],ans:"the bicycle",hint:"Fahr = travel. Rad = wheel."},
  {type:"fb",s:"Ich fahre mit ___ Bus in die Stadt.",a:"dem",opts:["dem","der","das","den"],hint:"Mit always takes dative. Der Bus becomes ___ Bus in dative."},
  {type:"mc",q:"Which phrase means 'on foot' in German?",opts:["mit dem Fuß","zu Fuß","auf Fuß","per Fuß"],ans:"zu Fuß",hint:"A fixed phrase. No article used here."},
  {type:"match",pairs:[{nl:"der Bus",en:"the bus"},{nl:"die U-Bahn",en:"the subway"},{nl:"das Auto",en:"the car"},{nl:"das Fahrrad",en:"the bicycle"}]},
  {type:"mc",q:"Which sentence says 'I travel by tram'?",opts:["Ich fahre zu Fuß.","Ich fahre mit dem Auto.","Ich fahre mit der Straßenbahn.","Ich nehme den Bus."],ans:"Ich fahre mit der Straßenbahn.",hint:"Straßenbahn is feminine. Mit + dative feminine = mit der."},
  {type:"fb",s:"___ Straßenbahn fährt um acht Uhr.",a:"Die",opts:["Die","Der","Das","Den"],hint:"What article does Straßenbahn take? Nominative subject position."},
  {type:"mc",q:"'Du fährst' is the du-form of which verb?",opts:["fahren","finden","fallen","fragen"],ans:"fahren",hint:"Du form has an umlaut vowel change: a becomes ä."},
  {type:"drag_fill",s:"Ich gehe {1} Fuß, aber mein Vater fährt mit {2} Auto.",blanks:{"1":"zu","2":"dem"},pool:["zu","mit","dem","der","das","nach","ein"],hint:"Two transport phrases in one sentence."},
  {type:"mc",q:"Which article does Bus take?",opts:["die","das","der","keine"],ans:"der",hint:"Der Bus. Masculine."},
  {type:"mc",q:"Complete: 'Ich fahre mit ___ U-Bahn.'",opts:["dem","der","das","den"],ans:"der",hint:"Die U-Bahn is feminine. Mit + dative feminine = mit der."},
]},

// ═══ L2: Wohin gehst du? ═══
{id:"deu7l2",title:"Wohin gehst du?",icon:"🗺️",xp:15,board:true,steps:[
  {type:"intro",title:"Wohin gehst du?",desc:"Someone asks for directions. Can you help? Left, right, straight ahead, traffic light, crossing. These five words will get you through any German city.",goals:["Core direction words","Describe a route step by step","Understand and give simple directions"]},
  {type:"teach",kind:"word",nl:"links",en:"left",phonetic:"links",cognate:{words:[{lang:"English",word:"links (archaic)"},{lang:"Dutch",word:"links"}],family:"germanic"},example:"A: Wo ist die Post?\nB: Gehen Sie links. Dann die erste Straße.\nA: Links, verstanden. Danke!",exampleEn:"A: Where is the post office?\nB: Go left. Then the first street.\nA: Left, understood. Thank you!",note:"Direction word. No article. Links is also used for 'on the left side'."},
  {type:"teach",kind:"word",nl:"rechts",en:"right",phonetic:"rechts",cognate:{words:[{lang:"English",word:"right"},{lang:"Dutch",word:"rechts"}],family:"germanic"},example:"A: Wie komme ich zum Bahnhof?\nB: Gehen Sie hier rechts, dann geradeaus.\nA: Rechts, dann geradeaus. Danke!",exampleEn:"A: How do I get to the station?\nB: Go right here, then straight ahead.\nA: Right, then straight ahead. Thanks!",note:"Direction word. No article. Rechts also means 'on the right side'."},
  {type:"teach",kind:"word",nl:"geradeaus",en:"straight ahead",phonetic:"ge-rah-de-OWS",example:"A: Ist die Apotheke weit?\nB: Nein, gehen Sie einfach geradeaus.\nA: Wie viele Minuten?\nB: Etwa drei Minuten.",exampleEn:"A: Is the pharmacy far?\nB: No, just go straight ahead.\nA: How many minutes?\nB: About three minutes.",note:"One word. Gerade = straight + aus = out/ahead. Very common in directions."},
  {type:"teach",kind:"word",nl:"die Kreuzung",en:"the intersection / crossroads",phonetic:"dee KROY-tsoong",example:"A: Wo muss ich abbiegen?\nB: An der Kreuzung rechts.\nA: An der Kreuzung rechts, gut.\nB: Genau!",exampleEn:"A: Where do I need to turn?\nB: Right at the intersection.\nA: Right at the intersection, good.\nB: Exactly!",note:"Feminine (die). Kreuz = cross. An der Kreuzung = at the intersection."},
  {type:"teach",kind:"word",nl:"die Ampel",en:"the traffic light",phonetic:"dee AHM-pel",example:"A: Wie weit ist es noch?\nB: Bis zur Ampel, dann links.\nA: Bis zur Ampel links.\nB: Richtig, dann sehen Sie es schon.",exampleEn:"A: How far is it?\nB: To the traffic light, then left.\nA: To the traffic light, then left.\nB: Right, then you will see it.",note:"Feminine (die). An der Ampel = at the traffic light. Bis zur Ampel = up to the traffic light."},
  {type:"tip",title:"Giving Directions: The Formula",text:"German directions follow a simple pattern:\n\nGehen Sie + direction + preposition phrase\n\nGehen Sie links. (Go left.)\nGehen Sie geradeaus. (Go straight ahead.)\nGehen Sie bis zur Ampel. (Go to the traffic light.)\nBiegen Sie rechts ab. (Turn right.)\n\nGehen Sie = formal you go. Geh = informal.",deepDive:{title:"abbiegen: a separable verb for turning",text:"Abbiegen (to turn) is a separable verb:\nIch biege rechts ab. (I turn right.)\nBiegen Sie hier links ab. (Turn left here.)\nThe prefix ab jumps to the end. You learned separable verbs in Unit 5 with aufstehen and anfangen. The same rule applies here."}},
  {type:"teach",kind:"word",nl:"die Straße",en:"the street",phonetic:"dee SHTRAH-se",cognate:{words:[{lang:"English",word:"street"},{lang:"Dutch",word:"straat"}],family:"germanic"},example:"A: In welcher Straße wohnt er?\nB: In der Hauptstraße Nummer zwölf.\nA: Hauptstraße zwölf, danke.",exampleEn:"A: Which street does he live on?\nB: On Hauptstraße, number twelve.\nA: Hauptstraße twelve, thanks.",note:"Feminine (die). Haupt|straße = main street. German street names are compound nouns."},
  {type:"mc",q:"'Geradeaus' means:",opts:["turn right","turn left","straight ahead","at the corner"],ans:"straight ahead",hint:"Gerade = straight. Aus = ahead/out."},
  {type:"mc",q:"'An der Kreuzung rechts' means:",opts:["straight ahead at the light","right at the intersection","left at the crossing","go to the street"],ans:"right at the intersection",hint:"Kreuzung = intersection. Rechts = right."},
  {type:"fb",s:"Gehen Sie ___, dann an der Ampel rechts.",a:"geradeaus",opts:["geradeaus","links","rechts","weit"],hint:"First go straight, then turn right at the light."},
  {type:"mc",q:"'Die Ampel' means:",opts:["the intersection","the street","the traffic light","the corner"],ans:"the traffic light",hint:"Common sight at any German city crossing."},
  {type:"match",pairs:[{nl:"links",en:"left"},{nl:"rechts",en:"right"},{nl:"geradeaus",en:"straight ahead"},{nl:"die Kreuzung",en:"the intersection"}]},
  {type:"mc",q:"She should turn right at the traffic light. Which answer is correct?",opts:["An der Ampel links.","Geradeaus immer.","An der Ampel rechts.","Die Kreuzung links."],ans:"An der Ampel rechts.",hint:"Rechts = right. Ampel = traffic light."},
  {type:"fb",s:"Gehen Sie bis zur ___, dann links.",a:"Ampel",opts:["Ampel","Kreuzung","Straße","Fahrrad"],hint:"You go until the traffic light, then turn left."},
  {type:"mc",q:"Which article does 'Kreuzung' take?",opts:["der","die","das","keine"],ans:"die",hint:"Die Kreuzung. Feminine."},
  {type:"drag_fill",s:"Gehen Sie {1} und dann an der {2} rechts.",blanks:{"1":"geradeaus","2":"Ampel"},pool:["geradeaus","links","Ampel","Kreuzung","rechts","Straße"],hint:"Straight first, then right at the traffic light."},
  {type:"mc",q:"'Biegen Sie rechts ab' contains which type of verb?",opts:["modal verb","reflexive verb","separable verb","irregular verb"],ans:"separable verb",hint:"The prefix ab jumps to the end. You saw this pattern with aufstehen in Unit 5."},
  {type:"mc",q:"Someone says: 'Die erste Straße links.' This means:",opts:["The first street on the right","Straight ahead on the first street","The first street on the left","Turn at the traffic light"],ans:"The first street on the left",hint:"Links = left. Erste = first."},
  {type:"mc",q:"You want to ask 'Where is the train station?' formally. You say:",opts:["Wo ist der Bahnhof?","Wo ist die Bahnhof?","Wie komme ich der Bahnhof?","Wohin ist der Bahnhof?"],ans:"Wo ist der Bahnhof?",hint:"Bahnhof is masculine. Wo ist = where is."},
]},

// ═══ L3: können ═══
{id:"deu7l3",title:"können",icon:"💪",xp:15,board:true,steps:[
  {type:"intro",title:"können",desc:"Can you speak German? Can you help me? Können is one of the most useful words in the language. It unlocks ability, possibility, and polite requests.",goals:["Full conjugation of können","Verb-to-end rule in modal sentences","Use können in real situations"]},
  {type:"tip",title:"Modal Verbs: The Big Pattern",text:"German has 6 modal verbs. Können is the first. They all share one critical rule:\n\nThe MAIN VERB goes to the END of the clause.\n\nIch kann Deutsch sprechen. (I can speak German.)\nKannst du mir helfen? (Can you help me?)\n\nModal verb = position 2. Main verb = LAST. Never forget this.",deepDive:{title:"Why does the verb go to the end?",text:"German is a verb-second (V2) language in main clauses. When a modal verb takes position 2, it pushes the main verb to the final position as an infinitive.\n\nSubject + Modal (pos.2) + ... + Infinitive (END)\nIch (subject) + kann (modal) + gut (adverb) + schwimmen (infinitive).\n\nThis applies to ALL modal verbs. Once you learn this pattern with können, müssen, wollen, dürfen, sollen, and möchten will all work the same way."}},
  {type:"verb_table",title:"können (can / to be able to) — present tense",label:"können",groups:[{label:"singular",rows:[["ich","kann"],["du","kannst"],["er/sie/es","kann"]]},{label:"plural",rows:[["wir","können"],["ihr","könnt"],["Sie/sie","können"]]}],note:"Ich and er/sie/es share the same form 'kann'. No -e or -t ending in 1st/3rd singular. This is typical of all modal verbs."},
  {type:"teach",kind:"phrase",nl:"Ich kann Deutsch sprechen.",en:"I can speak German.",phonetic:"Ich kan DOYch SHPREH-chen",example:"A: Sprechen Sie Englisch?\nB: Nein, aber ich kann ein bisschen Deutsch sprechen.\nA: Super! Wir sprechen dann Deutsch.",exampleEn:"A: Do you speak English?\nB: No, but I can speak a little German.\nA: Great! We will speak German then.",note:"Modal structure: kann (pos.2) + sprechen (end). sprechen is the infinitive at the END."},
  {type:"teach",kind:"phrase",nl:"Kannst du mir helfen?",en:"Can you help me?",phonetic:"KAN-st doo meer HEL-fen",example:"A: Kannst du mir helfen?\nB: Natürlich! Was brauchst du?\nA: Ich finde den Bahnhof nicht.",exampleEn:"A: Can you help me?\nB: Of course! What do you need?\nA: I cannot find the train station.",note:"Question form: modal moves to position 1. Main verb helfen stays at end. Mir = me (dative)."},
  {type:"teach",kind:"phrase",nl:"Ich kann nicht kommen.",en:"I cannot come.",phonetic:"Ich kan nicht KOM-en",example:"A: Kommst du heute Abend?\nB: Leider kann ich nicht kommen.\nA: Schade! Warum?\nB: Ich bin krank.",exampleEn:"A: Are you coming tonight?\nB: Unfortunately I cannot come.\nA: What a pity! Why?\nB: I am ill.",note:"Negation: nicht comes BEFORE the infinitive at the end. Leider = unfortunately."},
  {type:"teach",kind:"phrase",nl:"Wir können das machen.",en:"We can do that.",phonetic:"veer KEN-nen dahs MAH-chen",example:"A: Ist das möglich?\nB: Ja, wir können das machen.\nA: Wunderbar!\nB: Kein Problem.",exampleEn:"A: Is that possible?\nB: Yes, we can do that.\nA: Wonderful!\nB: No problem.",note:"Wir + können + ... + machen (end). machen = to do/make. Very common phrase."},
  {type:"mc",q:"'Können' in 'Ich kann schwimmen' means:",opts:["I must swim","I can swim","I want to swim","I should swim"],ans:"I can swim",hint:"Können = can / to be able to."},
  {type:"mc",q:"Where does the main verb go in a modal sentence?",opts:["Position 1","Position 2","Right after the modal","At the END"],ans:"At the END",hint:"Modal takes position 2, pushing the infinitive to the end of the clause."},
  {type:"fb",s:"Ich kann gut ___ spielen.",a:"Gitarre",opts:["Gitarre","Noten","Musik","spielen"],hint:"What can you play? Place the instrument here, not the verb spielen."},
  {type:"mc",q:"Which sentence is grammatically correct?",opts:["Ich kann sprechen Deutsch.","Deutsch sprechen ich kann.","Ich kann Deutsch sprechen.","Ich kann Deutsch sprechen gut."],ans:"Ich kann Deutsch sprechen.",hint:"Modal at position 2, main verb at the end. Standard sentence word order."},
  {type:"mc",q:"'Kannst du Klavier spielen?' means:",opts:["Do you want to play piano?","Can you play piano?","Do you play piano now?","Are you learning piano?"],ans:"Can you play piano?",hint:"Kannst du = can you (informal). Klavier = piano."},
  {type:"fb",s:"___ du mir bitte helfen?",a:"Kannst",opts:["Kannst","Kann","Können","Könnt"],hint:"Informal you + können, asking for help. Which form fits du?"},
  {type:"match",pairs:[{nl:"ich kann",en:"I can"},{nl:"du kannst",en:"you can"},{nl:"er/sie kann",en:"he/she can"},{nl:"wir können",en:"we can"}]},
  {type:"mc",q:"In 'Ich kann nicht kommen.' where is 'nicht'?",opts:["After ich","Before kann","Before kommen (the infinitive)","After kommen"],ans:"Before kommen (the infinitive)",hint:"Nicht comes just before the final infinitive in modal sentences."},
  {type:"drag_fill",s:"Wir {1} heute nicht {2}. Es ist zu spät.",blanks:{"1":"können","2":"kommen"},pool:["können","kann","kommen","gehen","nicht","wir"],hint:"We cannot come today. Two blanks in one modal sentence."},
  {type:"mc",q:"Which form is correct for 'ihr' (you all)?",opts:["können","kann","kannst","könnt"],ans:"könnt",hint:"Ihr takes the -t ending: ihr könnt."},
  {type:"mc",q:"'Sie können morgen kommen.' translates as:",opts:["They must come tomorrow.","You/They can come tomorrow.","You should come tomorrow.","Can they come tomorrow?"],ans:"You/They can come tomorrow.",hint:"Sie können = you (formal) can OR they can. Infinitive kommen at the end."},
  {type:"mc",q:"Which question asks 'Can you speak German?' informally?",opts:["Sprichst du Deutsch?","Kannst du Deutsch sprechen?","Willst du Deutsch sprechen?","Können Sie Deutsch?"],ans:"Kannst du Deutsch sprechen?",hint:"Kannst du = can you (informal). sprechen at the end."},
]},

// ═══ L4: müssen & wollen ═══
{id:"deu7l4",title:"müssen & wollen",icon:"🎯",xp:15,board:true,steps:[
  {type:"intro",title:"müssen & wollen",desc:"Must and want. Two opposites, both essential. With müssen and wollen you can express obligation and desire. Same sentence structure as können.",goals:["Full conjugation of müssen and wollen","Distinguish must vs want","Build sentences with verb-at-end rule"]},
  {type:"verb_table",title:"müssen (must / to have to) — present tense",label:"müssen",groups:[{label:"singular",rows:[["ich","muss"],["du","musst"],["er/sie/es","muss"]]},{label:"plural",rows:[["wir","müssen"],["ihr","müsst"],["Sie/sie","müssen"]]}],note:"Like können: ich/er share the same stem form 'muss'. No -e/-t in 1st/3rd singular. Umlaut in infinitive and plural."},
  {type:"verb_table",title:"wollen (to want) — present tense",label:"wollen",groups:[{label:"singular",rows:[["ich","will"],["du","willst"],["er/sie/es","will"]]},{label:"plural",rows:[["wir","wollen"],["ihr","wollt"],["Sie/sie","wollen"]]}],note:"Wollen is irregular. Ich will looks like English 'will' but means WANT, not future! Wir wollen = we want."},
  {type:"tip",title:"müssen vs wollen: The Key Contrast",text:"müssen = must / have to (obligation or necessity)\nwollen = want to (desire or intention)\n\nIch muss arbeiten. (I must work. No choice.)\nIch will arbeiten. (I want to work. My desire.)\n\nBoth follow the SAME rule: main verb goes to the END.\nIch muss jetzt gehen. (I must go now.)\nIch will jetzt gehen. (I want to go now.)",deepDive:{title:"Warning: wollen vs werden (future)",text:"Do NOT confuse:\nIch will = I want (from wollen, present desire)\nIch werde = I will (future tense marker, from werden)\n\nIch will Arzt werden. = I want to become a doctor.\nIch werde Arzt werden. = I will become a doctor.\n\nYou will learn werden in Unit 16. For now: ich will = WANT, not future."}},
  {type:"teach",kind:"phrase",nl:"Ich muss jetzt gehen.",en:"I must go now.",phonetic:"Ich moos yetst GAY-en",example:"A: Bleibst du noch?\nB: Leider nicht. Ich muss jetzt gehen.\nA: Schade! Bis morgen.\nB: Bis morgen!",exampleEn:"A: Are you staying longer?\nB: Unfortunately not. I must go now.\nA: Pity! See you tomorrow.\nB: See you tomorrow!",note:"Muss (position 2) + gehen (end). Jetzt = now. Leider = unfortunately."},
  {type:"teach",kind:"phrase",nl:"Ich will Deutsch lernen.",en:"I want to learn German.",phonetic:"Ich vil DOYch LER-nen",example:"A: Warum lernst du Deutsch?\nB: Ich will in Deutschland arbeiten.\nA: Das ist ein guter Grund!\nB: Ja, und ich finde Deutsch toll.",exampleEn:"A: Why are you learning German?\nB: I want to work in Germany.\nA: That is a good reason!\nB: Yes, and I find German great.",note:"Will (position 2) + lernen (end). Common with plans and goals."},
  {type:"teach",kind:"phrase",nl:"Was willst du essen?",en:"What do you want to eat?",phonetic:"vahs vilsT doo ES-sen",example:"A: Was willst du essen?\nB: Ich will eine Pizza.\nA: Und ich will einen Salat.\nB: Gut, wir bestellen das.",exampleEn:"A: What do you want to eat?\nB: I want a pizza.\nA: And I want a salad.\nB: Good, we will order that.",note:"Willst du (question form) = modal in position 1. essen = to eat (infinitive at end)."},
  {type:"teach",kind:"phrase",nl:"Wir müssen den Bus nehmen.",en:"We must take the bus.",phonetic:"veer MU-ssen den BOOS NAY-men",example:"A: Haben wir ein Auto?\nB: Nein, wir müssen den Bus nehmen.\nA: Wann fährt er?\nB: In zehn Minuten.",exampleEn:"A: Do we have a car?\nB: No, we must take the bus.\nA: When does it leave?\nB: In ten minutes.",note:"Müssen (position 2) + nehmen (end). nehmen = to take. Den Bus = accusative masculine."},
  {type:"mc",q:"'Ich will' means:",opts:["I will (future)","I must","I want","I can"],ans:"I want",hint:"Wollen = desire/intention. NOT the English future 'will'."},
  {type:"mc",q:"'Er muss arbeiten.' means:",opts:["He wants to work.","He can work.","He must work.","He is working."],ans:"He must work.",hint:"Muss comes from müssen = must/have to."},
  {type:"fb",s:"Ich ___ jetzt nach Hause gehen.",a:"muss",opts:["muss","will","kann","musst"],hint:"'I must go home now.' Which form of müssen goes with ich?"},
  {type:"mc",q:"Which sentence correctly says 'We want to travel to Berlin'?",opts:["Wir wollen nach Berlin fahren.","Wir wollen fahren nach Berlin.","Wir wollen nach Berlin gefahren.","Wollen wir Berlin nach fahren."],ans:"Wir wollen nach Berlin fahren.",hint:"Modal at position 2. Infinitive fahren at the END."},
  {type:"mc",q:"'Willst du kommen?' means:",opts:["Must you come?","Can you come?","Do you want to come?","Should you come?"],ans:"Do you want to come?",hint:"Willst = wollen (2nd person singular). Modal in position 1 = question."},
  {type:"match",pairs:[{nl:"ich muss",en:"I must"},{nl:"du willst",en:"you want"},{nl:"er will",en:"he wants"},{nl:"wir müssen",en:"we must"}]},
  {type:"fb",s:"Was ___ du nach der Schule machen?",a:"willst",opts:["willst","musst","kannst","wollt"],hint:"'What do you WANT to do after school?' Informal you + wollen."},
  {type:"drag_fill",s:"Ich {1} heute arbeiten, aber ich {2} lieber schlafen.",blanks:{"1":"muss","2":"will"},pool:["muss","will","kann","musst","willst","wollen"],hint:"I must work today, but I want to sleep instead."},
  {type:"mc",q:"In 'Du musst früh aufstehen.' where is the main verb?",opts:["Position 1","Position 2","After Du","At the end"],ans:"At the end",hint:"Musst = position 2. Aufstehen goes to the END. Also a separable verb."},
  {type:"mc",q:"Which sentence is WRONG?",opts:["Ich muss arbeiten.","Wir wollen essen.","Er will schlafen gehen.","Ich muss gehen jetzt."],ans:"Ich muss gehen jetzt.",hint:"Jetzt should come before gehen, not after. The infinitive must be LAST."},
  {type:"mc",q:"'Wir wollen einen Film sehen.' means:",opts:["We must watch a film.","We can watch a film.","We want to watch a film.","We are watching a film."],ans:"We want to watch a film.",hint:"Wollen = want. sehen = see/watch. Infinitive at the end."},
]},

// ═══ L5: Am Bahnhof ═══
{id:"deu7l5",title:"Am Bahnhof",icon:"🚉",xp:15,board:true,steps:[
  {type:"intro",title:"Am Bahnhof",desc:"The German train station is a world of its own. Announcements, departure boards, ticket windows. You need the right words to get on the right train.",goals:["Train station vocabulary","Buy a ticket and ask about departures","Read departure board basics"]},
  {type:"teach",kind:"word",nl:"der Bahnhof",en:"the train station",phonetic:"der BAHN-hof",cognate:{words:[{lang:"English",word:"station"},{lang:"Dutch",word:"station"}],family:"germanic"},example:"A: Entschuldigung, wie komme ich zum Bahnhof?\nB: Gehen Sie geradeaus, dann rechts.\nA: Danke!\nB: Kein Problem.",exampleEn:"A: Excuse me, how do I get to the train station?\nB: Go straight ahead, then right.\nA: Thank you!\nB: No problem.",note:"Masculine (der). Bahn = railway + Hof = yard/court. Zum Bahnhof = to the train station (dative)."},
  {type:"teach",kind:"word",nl:"der Zug",en:"the train",phonetic:"der TSOOK",example:"A: Wann kommt der Zug?\nB: Der Zug kommt um 14:30 an.\nA: Gleis drei?\nB: Ja, Gleis drei.",exampleEn:"A: When does the train arrive?\nB: The train arrives at 14:30.\nA: Platform three?\nB: Yes, platform three.",note:"Masculine (der). Common in travel sentences. Züge = plural."},
  {type:"teach",kind:"word",nl:"die Fahrkarte",en:"the ticket",phonetic:"dee FAR-kar-teh",example:"A: Ich brauche eine Fahrkarte nach München.\nB: Einfach oder hin und zurück?\nA: Hin und zurück, bitte.\nB: Das kostet 48 Euro.",exampleEn:"A: I need a ticket to Munich.\nB: One way or return?\nA: Return, please.\nB: That costs 48 euros.",note:"Feminine (die). Fahr = travel + Karte = card/ticket. Einfach = one way. Hin und zurück = return."},
  {type:"teach",kind:"word",nl:"der Fahrplan",en:"the timetable",phonetic:"der FAR-plahn",example:"A: Haben Sie den Fahrplan?\nB: Ja, hier. Der nächste Zug fährt um 15 Uhr.\nA: Wie lange dauert die Fahrt?\nB: Ungefähr zwei Stunden.",exampleEn:"A: Do you have the timetable?\nB: Yes, here. The next train leaves at 15:00.\nA: How long does the journey take?\nB: About two hours.",note:"Masculine (der). Fahr = travel + Plan = plan. Found on display boards and apps."},
  {type:"teach",kind:"word",nl:"das Gleis",en:"the platform / track",phonetic:"dahs GLYS",example:"A: Von welchem Gleis fährt der Zug?\nB: Gleis vier.\nA: Gleis vier, danke!\nB: Aber schnell, er fährt in zwei Minuten ab.",exampleEn:"A: Which platform does the train leave from?\nB: Platform four.\nA: Platform four, thanks!\nB: But hurry, it leaves in two minutes.",note:"Neuter (das). The numbered platform where the train arrives and departs. Von Gleis + number."},
  {type:"teach",kind:"phrase",nl:"Einmal nach Hamburg, bitte.",en:"One ticket to Hamburg, please.",phonetic:"INE-mahl nach HAM-boorg BIT-teh",example:"A: Guten Tag! Einmal nach Hamburg, bitte.\nB: Einfach oder hin und zurück?\nA: Einfach, bitte.\nB: Das macht 32 Euro.",exampleEn:"A: Good day! One ticket to Hamburg, please.\nB: One way or return?\nA: One way, please.\nB: That is 32 euros.",note:"Standard ticket-window phrase. Einmal = one time/one ticket. Nach + city = to a city."},
  {type:"tip",title:"Wann fährt der Zug ab?",text:"Key questions at the train station:\n\nWann fährt der Zug ab? (When does the train depart?)\nVon welchem Gleis? (From which platform?)\nWie lange dauert die Fahrt? (How long is the journey?)\nMuss ich umsteigen? (Do I need to change trains?)\n\nNote: abfahren is a separable verb. Ab- jumps to the end.\nDer Zug fährt um 16 Uhr ab.",deepDive:{title:"umsteigen: transfer and change trains",text:"Umsteigen = to change trains/transfer. Another separable verb:\nIch muss umsteigen. (I have to change trains.)\nSteigen Sie in Köln um. (Change in Cologne.)\nThe prefix um- jumps to the end. All German separable prefixes (ab-, auf-, an-, um-) behave this way."}},
  {type:"mc",q:"'Die Fahrkarte' means:",opts:["the platform","the timetable","the ticket","the train"],ans:"the ticket",hint:"Fahr = travel. Karte = card/ticket."},
  {type:"mc",q:"'Von welchem Gleis fährt der Zug?' asks:",opts:["When does the train leave?","How much does the ticket cost?","Which platform does the train leave from?","Where does the train go?"],ans:"Which platform does the train leave from?",hint:"Gleis = platform. Von welchem = from which."},
  {type:"fb",s:"Einmal nach Berlin, ___!",a:"bitte",opts:["bitte","danke","Gleis","Zug"],hint:"Complete the standard ticket request with the polite word."},
  {type:"mc",q:"'Der Fahrplan' is:",opts:["the train","the ticket","the timetable","the platform"],ans:"the timetable",hint:"Plan = plan/schedule. Fahr = travel."},
  {type:"match",pairs:[{nl:"der Zug",en:"the train"},{nl:"das Gleis",en:"the platform"},{nl:"die Fahrkarte",en:"the ticket"},{nl:"der Bahnhof",en:"the train station"}]},
  {type:"mc",q:"'Muss ich umsteigen?' means:",opts:["Must I buy a ticket?","Do I need to change trains?","Can I take the tram?","Where is the platform?"],ans:"Do I need to change trains?",hint:"Umsteigen = to transfer/change trains."},
  {type:"fb",s:"Der Zug fährt von ___ drei ab.",a:"Gleis",opts:["Gleis","Bahn","Zug","Bahnhof"],hint:"The train departs from platform three."},
  {type:"mc",q:"'Hin und zurück' means:",opts:["One way","Return (round trip)","First class","Departure time"],ans:"Return (round trip)",hint:"Hin = there. Zurück = back. Together: there and back."},
  {type:"drag_fill",s:"Ich brauche eine {1} nach Köln. Wann fährt der {2} ab?",blanks:{"1":"Fahrkarte","2":"Zug"},pool:["Fahrkarte","Fahrplan","Zug","Gleis","Bahnhof","Bahn"],hint:"I need a ticket to Cologne. When does the train depart?"},
  {type:"mc",q:"'Abfahren' is which type of verb?",opts:["modal verb","reflexive verb","separable verb","auxiliary verb only"],ans:"separable verb",hint:"The prefix ab- separates and goes to the end: fährt... ab."},
  {type:"mc",q:"'Wie lange dauert die Fahrt?' is asking:",opts:["When does the journey start?","How long is the journey?","How much does the journey cost?","Where does the journey end?"],ans:"How long is the journey?",hint:"Wie lange = how long. dauert = lasts."},
]},

// ═══ L6: dürfen & sollen ═══
{id:"deu7l6",title:"dürfen & sollen",icon:"📋",xp:15,board:true,steps:[
  {type:"intro",title:"dürfen & sollen",desc:"May you do this? Should you do that? dürfen and sollen complete the core modal verb set. They handle permission and obligation from an outside source.",goals:["Full conjugation of dürfen and sollen","Distinguish may vs should","Use in rules, permissions, and instructions"]},
  {type:"verb_table",title:"dürfen (may / to be allowed to) — present tense",label:"dürfen",groups:[{label:"singular",rows:[["ich","darf"],["du","darfst"],["er/sie/es","darf"]]},{label:"plural",rows:[["wir","dürfen"],["ihr","dürft"],["Sie/sie","dürfen"]]}],note:"Ich/er share 'darf'. Same pattern as können (kann) and müssen (muss). Umlaut in infinitive and plural forms."},
  {type:"verb_table",title:"sollen (should / to be supposed to) — present tense",label:"sollen",groups:[{label:"singular",rows:[["ich","soll"],["du","sollst"],["er/sie/es","soll"]]},{label:"plural",rows:[["wir","sollen"],["ihr","sollt"],["Sie/sie","sollen"]]}],note:"Sollen has NO umlaut and NO vowel change. Very regular for a modal verb. Soll = someone else's expectation."},
  {type:"tip",title:"dürfen vs sollen: Who Sets the Rule?",text:"dürfen = permission (allowed or not allowed)\nSie dürfen hier parken. (You may park here.)\nSie dürfen nicht rauchen. (You may not smoke.)\n\nsollen = expectation from SOMEONE ELSE\nDu sollst jetzt schlafen. (You should sleep now. Mom said so.)\nIch soll um 9 Uhr da sein. (I am supposed to be there at 9. Someone told me.)\n\nBoth follow the verb-at-end rule:\nDu darfst hier nicht parken. (You may not park here.)\nEr soll morgen kommen. (He is supposed to come tomorrow.)",deepDive:{title:"dürfen nicht = must not (strong prohibition)",text:"Be careful: dürfen nicht is much stronger than müssen nicht.\n\ndürfen nicht = must not / not allowed to (prohibition)\nmüssen nicht = do not have to (no obligation)\n\nSie dürfen hier nicht rauchen. (You must not smoke here.)\nSie müssen hier nicht parken. (You do not have to park here.)\n\nThis distinction catches many learners off guard."}},
  {type:"teach",kind:"phrase",nl:"Darf ich hier sitzen?",en:"May I sit here?",phonetic:"darf ich HEER ZIT-sen",example:"A: Darf ich hier sitzen?\nB: Ja, natürlich! Der Platz ist frei.\nA: Danke schön!\nB: Bitte sehr.",exampleEn:"A: May I sit here?\nB: Yes, of course! The seat is free.\nA: Thank you very much!\nB: You are welcome.",note:"Darf ich = may I (1st person, polite request). Very common phrase."},
  {type:"teach",kind:"phrase",nl:"Hier dürfen Sie nicht parken.",en:"You may not park here.",phonetic:"HEER DUR-fen zee nicht PAR-ken",example:"A: Kann ich hier parken?\nB: Nein, hier dürfen Sie nicht parken.\nA: Wo kann ich dann parken?\nB: Dort hinten ist ein Parkplatz.",exampleEn:"A: Can I park here?\nB: No, you may not park here.\nA: Where can I park then?\nB: There is a car park in the back.",note:"Dürfen + nicht = prohibition. Sie = formal you. parken = to park."},
  {type:"teach",kind:"phrase",nl:"Ich soll um 8 Uhr da sein.",en:"I am supposed to be there at 8.",phonetic:"Ich zol oom AHCHT oor da ZINE",example:"A: Wann kommst du?\nB: Ich soll um 8 Uhr da sein.\nA: Wer hat das gesagt?\nB: Mein Chef.",exampleEn:"A: When are you coming?\nB: I am supposed to be there at 8.\nA: Who said that?\nB: My boss.",note:"Sollen describes an expectation set by SOMEONE ELSE. Da sein = to be there."},
  {type:"teach",kind:"phrase",nl:"Du sollst nicht lügen.",en:"You shall not lie.",phonetic:"doo zolst nicht LU-gen",example:"A: Ist das wahr?\nB: Ja! Du sollst nicht lügen.\nA: Das weiß ich.\nB: Dann sei ehrlich!",exampleEn:"A: Is that true?\nB: Yes! You shall not lie.\nA: I know that.\nB: Then be honest!",note:"Classic sollen construction. Lügen = to lie. A moral or parental expectation."},
  {type:"mc",q:"'Darf ich das machen?' means:",opts:["Must I do that?","Should I do that?","May I do that?","Can I do that?"],ans:"May I do that?",hint:"Dürfen = to be allowed to, permission."},
  {type:"mc",q:"'Hier dürfen Sie nicht rauchen.' means:",opts:["You do not have to smoke here.","You should not smoke here.","You must not smoke here (not allowed).","You cannot smoke here (physically impossible)."],ans:"You must not smoke here (not allowed).",hint:"Dürfen nicht = strong prohibition. Not allowed. Not just 'do not have to'."},
  {type:"fb",s:"Du ___ jetzt dein Zimmer aufräumen.",a:"sollst",opts:["sollst","darfst","kannst","musst"],hint:"Someone ELSE (like a parent) told you to tidy your room. That is sollen."},
  {type:"mc",q:"Which is the correct 'ich' form of dürfen?",opts:["dürfe","dürft","darf","darfst"],ans:"darf",hint:"Like kann and muss: no ending on ich form. ich darf."},
  {type:"match",pairs:[{nl:"ich darf",en:"I may"},{nl:"du darfst",en:"you may"},{nl:"ich soll",en:"I should"},{nl:"du sollst",en:"you should"}]},
  {type:"mc",q:"'Müssen nicht' vs 'dürfen nicht': what is the difference?",opts:["No difference, both mean must not","müssen nicht = do not have to. dürfen nicht = must not (prohibited)","müssen nicht = prohibited. dürfen nicht = do not have to","Both mean should not"],ans:"müssen nicht = do not have to. dürfen nicht = must not (prohibited)",hint:"dürfen nicht is a prohibition. müssen nicht is absence of obligation."},
  {type:"fb",s:"___ ich bitte das Fenster öffnen?",a:"Darf",opts:["Darf","Soll","Muss","Kann"],hint:"Asking for permission politely: 'May I open the window?'"},
  {type:"drag_fill",s:"Er {1} nicht hier rauchen, aber er {2} draußen rauchen.",blanks:{"1":"darf","2":"darf"},pool:["darf","soll","muss","kann","dürfen","sollst"],hint:"He is not allowed to smoke inside, but he is allowed outside."},
  {type:"mc",q:"Your boss says you should come at 9. You report this with:",opts:["Ich muss um 9 kommen.","Ich will um 9 kommen.","Ich soll um 9 kommen.","Ich darf um 9 kommen."],ans:"Ich soll um 9 kommen.",hint:"Someone else's expectation = sollen. Not your desire (wollen) or necessity (müssen)."},
  {type:"mc",q:"Which sentence correctly says 'Children may not go there'?",opts:["Kinder müssen nicht dahin gehen.","Kinder dürfen nicht dahin gehen.","Kinder sollen nicht dahin gehen.","Kinder wollen nicht dahin gehen."],ans:"Kinder dürfen nicht dahin gehen.",hint:"Prohibition = dürfen nicht. Kinder = children."},
  {type:"mc",q:"'Ihr sollt jetzt leise sein.' — who is most likely speaking?",opts:["A friend making a request","A person asking a favour","Someone in authority giving an instruction","The speakers themselves deciding"],ans:"Someone in authority giving an instruction",hint:"Sollen = instruction from an external source, not self-generated desire or ability."},
]},

// ═══ L7: Die Stadt ═══
{id:"deu7l7",title:"Die Stadt",icon:"🏙️",xp:15,board:true,steps:[
  {type:"intro",title:"Die Stadt",desc:"Every German city has the same essential buildings. Post office, bank, pharmacy, hospital, school. You need these words to navigate everyday life.",goals:["8 essential city place nouns","Ask where places are using modal verbs","Combine directions with city vocabulary"]},
  {type:"teach",kind:"word",nl:"die Post",en:"the post office",phonetic:"dee POST",cognate:{words:[{lang:"English",word:"post"},{lang:"Dutch",word:"postkantoor"}],family:"germanic"},example:"A: Wo ist die Post?\nB: Die Post ist in der Hauptstraße.\nA: Ist sie weit?\nB: Nein, nur fünf Minuten zu Fuß.",exampleEn:"A: Where is the post office?\nB: The post office is on the main street.\nA: Is it far?\nB: No, only five minutes on foot.",note:"Feminine (die). Also called das Postamt (formal). Zur Post gehen = to go to the post office."},
  {type:"teach",kind:"word",nl:"die Bank",en:"the bank",phonetic:"dee BANK",cognate:{words:[{lang:"English",word:"bank"},{lang:"Dutch",word:"bank"}],family:"borrowed"},example:"A: Ich muss zur Bank.\nB: Warum?\nA: Ich muss Geld abheben.\nB: Die Bank ist gleich um die Ecke.",exampleEn:"A: I need to go to the bank.\nB: Why?\nA: I need to withdraw money.\nB: The bank is right around the corner.",note:"Feminine (die). Zur Bank gehen = to go to the bank. Geld abheben = to withdraw money."},
  {type:"teach",kind:"word",nl:"die Apotheke",en:"the pharmacy / chemist",phonetic:"dee ah-poh-TAY-keh",example:"A: Wo kann ich Aspirin kaufen?\nB: In der Apotheke.\nA: Wo ist die nächste Apotheke?\nB: Dort drüben, neben der Post.",exampleEn:"A: Where can I buy aspirin?\nB: At the pharmacy.\nA: Where is the nearest pharmacy?\nB: Over there, next to the post office.",note:"Feminine (die). In Germany, medications are ONLY available in pharmacies, not supermarkets."},
  {type:"teach",kind:"word",nl:"das Krankenhaus",en:"the hospital",phonetic:"dahs KRAN-ken-hows",example:"A: Wo bringt man jemanden hin, wenn er krank ist?\nB: Ins Krankenhaus.\nA: Wie weit ist das Krankenhaus?\nB: Etwa zehn Minuten mit dem Auto.",exampleEn:"A: Where do you take someone when they are ill?\nB: To the hospital.\nA: How far is the hospital?\nB: About ten minutes by car.",note:"Neuter (das). Krank = sick + Haus = house. Ins Krankenhaus = to the hospital (accusative)."},
  {type:"teach",kind:"word",nl:"die Schule",en:"the school",phonetic:"dee SHOO-leh",cognate:{words:[{lang:"English",word:"school"},{lang:"Dutch",word:"school"}],family:"borrowed"},example:"A: Wo ist deine Schule?\nB: Meine Schule ist in der Mitte der Stadt.\nA: Gehst du zu Fuß?\nB: Nein, ich fahre mit dem Bus.",exampleEn:"A: Where is your school?\nB: My school is in the middle of the city.\nA: Do you go on foot?\nB: No, I go by bus.",note:"Feminine (die). Zur Schule gehen = to go to school. In die Schule gehen = to go into the building."},
  {type:"teach",kind:"word",nl:"das Rathaus",en:"the town hall",phonetic:"dahs RAHT-hows",example:"A: Ich muss ein Formular einreichen.\nB: Das machst du auf dem Rathaus.\nA: Wann ist das Rathaus offen?\nB: Von 8 bis 16 Uhr.",exampleEn:"A: I need to submit a form.\nB: You do that at the town hall.\nA: When is the town hall open?\nB: From 8 to 16:00.",note:"Neuter (das). Rat = council + Haus = house. Every German city has one. Important for administrative tasks."},
  {type:"teach",kind:"word",nl:"der Supermarkt",en:"the supermarket",phonetic:"der ZOO-per-markt",cognate:{words:[{lang:"English",word:"supermarket"},{lang:"Dutch",word:"supermarkt"}],family:"borrowed"},example:"A: Wollen wir einkaufen gehen?\nB: Ja, ich muss in den Supermarkt.\nA: Welchen nimmst du?\nB: Ich gehe zum Rewe.",exampleEn:"A: Shall we go shopping?\nB: Yes, I need to go to the supermarket.\nA: Which one are you going to?\nB: I am going to Rewe.",note:"Masculine (der). In den Supermarkt = into the supermarket (accusative). Einkaufen gehen = to go shopping."},
  {type:"teach",kind:"word",nl:"die Polizei",en:"the police / police station",phonetic:"dee poh-lee-TSAI",example:"A: Mein Fahrrad ist weg!\nB: Du musst zur Polizei gehen.\nA: Wo ist die Polizei?\nB: Gehen Sie geradeaus, dann links.",exampleEn:"A: My bicycle is gone!\nB: You must go to the police.\nA: Where is the police station?\nB: Go straight ahead, then left.",note:"Feminine (die). Plural is also die Polizei. Zur Polizei gehen = to go to the police."},
  {type:"mc",q:"'Die Apotheke' is:",opts:["the hospital","the school","the pharmacy","the post office"],ans:"the pharmacy",hint:"In Germany, medications are only available there."},
  {type:"mc",q:"'Das Krankenhaus' means:",opts:["the school","the hospital","the bank","the town hall"],ans:"the hospital",hint:"Krank = sick. Haus = house."},
  {type:"fb",s:"Ich muss zur ___ — ich brauche meine Medikamente.",a:"Apotheke",opts:["Apotheke","Post","Schule","Bank"],hint:"Where do you get medicine in Germany?"},
  {type:"match",pairs:[{nl:"die Post",en:"the post office"},{nl:"die Bank",en:"the bank"},{nl:"das Rathaus",en:"the town hall"},{nl:"die Polizei",en:"the police"}]},
  {type:"mc",q:"'Ich muss in den Supermarkt.' Which article case is 'den'?",opts:["Nominative masculine","Accusative masculine","Dative masculine","Genitive masculine"],ans:"Accusative masculine",hint:"Into a location = accusative. Der Supermarkt becomes in den Supermarkt."},
  {type:"fb",s:"Wo ist das ___? Ich muss ein Formular einreichen.",a:"Rathaus",opts:["Rathaus","Krankenhaus","Supermarkt","Schule"],hint:"Where do you go for official city documents and administration?"},
  {type:"mc",q:"'Mein Fahrrad ist weg. Ich muss zur ___.'",opts:["Post","Apotheke","Polizei","Bank"],hint:"If something is stolen or missing, you report it here."},
  {type:"drag_fill",s:"Ich {1} zur Apotheke gehen, aber ich {2} erst zur Bank.",blanks:{"1":"muss","2":"muss"},pool:["muss","will","kann","darf","soll","müssen"],hint:"I must go to the pharmacy, but I must first go to the bank."},
  {type:"mc",q:"Which sentence combines a city place with a modal verb correctly?",opts:["Ich muss Krankenhaus gehen.","Ich muss ins Krankenhaus gehen.","Ich muss das Krankenhaus gehen.","Ins muss ich Krankenhaus gehen."],ans:"Ich muss ins Krankenhaus gehen.",hint:"Ins = in + das (accusative). Muss at position 2. gehen at the END."},
  {type:"mc",q:"'Zur Schule gehen' vs 'in die Schule gehen': which describes going INTO the building?",opts:["Zur Schule gehen","In die Schule gehen","Both mean the same","Neither is correct"],ans:"In die Schule gehen",hint:"In die = into (accusative). Zur = to the (dative). Direction uses accusative."},
]},

// ═══ L8: Unterwegs Review ═══
{id:"deu7l8",title:"Unterwegs Review",icon:"🗺️",xp:20,board:true,steps:[
  {type:"intro",title:"Unterwegs Review",desc:"You have covered transport, directions, six modal verbs, the train station, and city places. Now it all comes together. This review tests real-world use across all topics.",goals:["Use all 6 modal verbs correctly","Navigate with transport and direction vocabulary","Combine city places with modal sentences"]},
  {type:"tip",title:"The 6 Modal Verbs at a Glance",text:"You now know all 6 core German modal verbs:\n\nkönnen = can (ability/possibility)\nmüssen = must (necessity/obligation)\nwollen = want (desire/intention)\ndürfen = may (permission)\nsollen = should (external expectation)\nmöchten = would like (polite wish, A2)\n\nAll share the same rule: MAIN VERB goes to the END.\nIch kann ... sprechen.\nIch muss ... gehen.\nIch will ... lernen.",deepDive:{title:"Modal verb sentence frame",text:"The core frame for all modals:\n\nSubject + Modal (pos.2) + [middle field] + Infinitive (END)\n\nIch (S) + kann (modal) + gut Deutsch (middle) + sprechen (end).\nWir (S) + müssen (modal) + jetzt (middle) + gehen (end).\nDu (S) + darfst (modal) + hier nicht (middle) + rauchen (end).\n\nNotice: negation (nicht), adverbs (jetzt, gut), and objects all go in the middle field. The infinitive is always LAST."}},
  {type:"mc",q:"Which modal verb expresses permission?",opts:["müssen","wollen","dürfen","sollen"],ans:"dürfen",hint:"May / to be allowed to = dürfen."},
  {type:"mc",q:"Which modal verb expresses an expectation from SOMEONE ELSE?",opts:["wollen","können","dürfen","sollen"],ans:"sollen",hint:"Your boss says you should be there at 9 = sollen."},
  {type:"fb",s:"Ich ___ mit dem Bus oder mit der U-Bahn fahren.",a:"kann",opts:["kann","will","muss","darf"],hint:"'I can travel by bus or by subway.' Expressing ability or option."},
  {type:"mc",q:"Complete: 'Wir ___ jetzt nach Hause gehen. Es ist spät.'",opts:["wollen","können","müssen","dürfen"],ans:"müssen",hint:"It is late = obligation/necessity. Must = müssen."},
  {type:"mc",q:"'Hier dürfen Sie nicht fotografieren.' This sign means:",opts:["Photography is recommended here.","Photography is allowed here.","Photography is not permitted here.","You do not have to photograph here."],ans:"Photography is not permitted here.",hint:"Dürfen nicht = prohibition."},
  {type:"drag_fill",s:"Er {1} den Bus nehmen, weil er kein Auto {2}.",blanks:{"1":"muss","2":"hat"},pool:["muss","will","hat","haben","nehmen","kann","darf"],hint:"He must take the bus because he has no car."},
  {type:"mc",q:"At the train station, 'das Gleis' refers to:",opts:["the ticket","the timetable","the platform/track","the departure hall"],ans:"the platform/track",hint:"Von Gleis 3 = from platform 3."},
  {type:"fb",s:"Einmal nach Frankfurt, ___, hin und zurück.",a:"bitte",opts:["bitte","danke","gern","ja"],hint:"Standard polite ending to a ticket request."},
  {type:"mc",q:"'Geradeaus' means:",opts:["to the right","to the left","straight ahead","around the corner"],ans:"straight ahead",hint:"Gerade = straight. Aus = out/ahead."},
  {type:"mc",q:"'Ich muss zur Apotheke.' What does this tell us about the speaker?",opts:["They want to go (desire)","They need to go (necessity)","They are allowed to go (permission)","They were told to go (external order)"],ans:"They need to go (necessity)",hint:"Müssen = necessity/must."},
  {type:"match",pairs:[{nl:"können",en:"can"},{nl:"müssen",en:"must"},{nl:"wollen",en:"want"},{nl:"dürfen",en:"may (permission)"}]},
  {type:"mc",q:"Which sentence correctly says 'I want to take the subway'?",opts:["Ich will U-Bahn nehmen die.","Ich will die U-Bahn nehmen.","Die will ich U-Bahn nehmen.","Ich nehme die U-Bahn wollen."],ans:"Ich will die U-Bahn nehmen.",hint:"Modal at position 2. Infinitive nehmen at the END. Article before noun."},
  {type:"fb",s:"Gehen Sie bis zur ___, dann biegen Sie rechts ab.",a:"Ampel",opts:["Ampel","Kreuzung","Straße","Post"],hint:"Go until the traffic light, then turn right."},
  {type:"drag_fill",s:"Ich {1} hier nicht parken. Es {2} verboten.",blanks:{"1":"darf","2":"ist"},pool:["darf","muss","soll","ist","hat","sein","kann"],hint:"I may not park here. It is forbidden."},
  {type:"mc",q:"'Das Krankenhaus' is grammatically:",opts:["masculine","feminine","neuter","plural"],ans:"neuter",hint:"Das = neuter article. Das Krankenhaus."},
  {type:"mc",q:"Someone says: 'Du sollst mehr Wasser trinken.' Who most likely said this?",opts:["A stranger on the street","A friend making small talk","A doctor or parent giving advice","The speaker to themselves"],ans:"A doctor or parent giving advice",hint:"Sollen reflects an expectation set by an EXTERNAL authority figure."},
  {type:"mc",q:"Which transport option uses 'mit dem' (dative masculine)?",opts:["mit der U-Bahn","mit der Straßenbahn","mit dem Bus","zu Fuß"],ans:"mit dem Bus",hint:"Der Bus is masculine. Dative of der = dem. Mit dem Bus."},
  {type:"mc",q:"To say 'Can you help me?' informally, you say:",opts:["Können Sie mir helfen?","Kannst du mir helfen?","Darf ich dir helfen?","Willst du mir helfen?"],ans:"Kannst du mir helfen?",hint:"Du = informal. Können = can. helfen = to help at the end."},
]},

]},
,

{n:8,lang:"de",track:"v1",title:"Einkaufen",sub:"Shopping, Clothing & Numbers",icon:"🛍️",level:"A1.2",color:"#7B5EE8",lessons:[

{id:"deu8l1",title:"Im Geschäft",icon:"🏪",xp:15,board:true,steps:[
  {type:"intro",title:"Im Geschäft",desc:"Welcome to the shop! Learn how to ask prices, understand costs, and use key shopping vocabulary.",goals:["Ask how much something costs","Understand Euro and Cent","Use teuer, billig, and günstig"]},
  {type:"teach",kind:"phrase",nl:"Was kostet das?",en:"How much does that cost?",phonetic:"vas KOS-tet das",example:"A: Was kostet das T-Shirt?\nB: Das kostet zwölf Euro.",exampleEn:"A: How much does that T-shirt cost?\nB: That costs twelve euros.",note:"The most essential shopping question. Kostet = third-person singular of kosten."},
  {type:"teach",kind:"phrase",nl:"Was kosten die...?",en:"How much do the... cost?",phonetic:"vas KOS-ten dee",example:"A: Was kosten die Schuhe?\nB: Die kosten vierzig Euro.",exampleEn:"A: How much do the shoes cost?\nB: They cost forty euros.",note:"Plural: kosten (not kostet). Die for all plural nouns."},
  {type:"teach",kind:"word",nl:"der Euro",en:"the euro",phonetic:"der OY-roh",example:"A: Das macht drei Euro.\nB: Hier sind drei Euro.",exampleEn:"A: That comes to three euros.\nB: Here are three euros.",note:"Currency. Plural: Euro (no -s in German)."},
  {type:"teach",kind:"word",nl:"der Cent",en:"the cent",phonetic:"der tsent",example:"A: Das kostet neunzig Cent.\nB: Nur neunzig Cent? Das ist günstig!",exampleEn:"A: That costs ninety cents.\nB: Only ninety cents? That is a good deal!",note:"Pronounced differently from English cent. Plural: Cent (unchanged)."},
  {type:"tip",title:"Prices in German",text:"Euro and Cent are written like this:\n3,50 Euro = drei Euro fünfzig\n0,99 Euro = neunundneunzig Cent\nGerman uses a comma where English uses a decimal point."},
  {type:"teach",kind:"word",nl:"teuer",en:"expensive",phonetic:"TOY-er",example:"A: Ist das Kleid teuer?\nB: Ja, es kostet zweihundert Euro!",exampleEn:"A: Is the dress expensive?\nB: Yes, it costs two hundred euros!",note:"Adjective. Teuer = expensive."},
  {type:"teach",kind:"word",nl:"billig",en:"cheap",phonetic:"BIL-ikh",example:"A: Das ist sehr billig!\nB: Ja, nur fünf Euro.",exampleEn:"A: That is very cheap!\nB: Yes, only five euros.",note:"Cheap in the sense of low price. Can also imply low quality."},
  {type:"teach",kind:"word",nl:"günstig",en:"affordable / good value",phonetic:"GYUN-stikh",example:"A: Ist das günstig?\nB: Ja, für diese Qualität ist es sehr günstig.",exampleEn:"A: Is that affordable?\nB: Yes, for this quality it is very good value.",note:"Preferred over billig when you mean good value, not low quality."},
  {type:"teach",kind:"phrase",nl:"Das macht...",en:"That comes to...",phonetic:"das makht",example:"A: Das macht acht Euro fünfzig.\nB: Bitte sehr.",exampleEn:"A: That comes to eight euros fifty.\nB: Here you are.",note:"Used by cashiers to state the total. Das macht = literally that makes."},
  {type:"teach",kind:"phrase",nl:"Haben Sie...?",en:"Do you have...?",phonetic:"HAH-ben zee",example:"A: Haben Sie das in Größe M?\nB: Ja, einen Moment bitte.",exampleEn:"A: Do you have this in size M?\nB: Yes, one moment please.",note:"Formal (Sie). Haben + Sie = inverted for a yes/no question."},
  {type:"teach",kind:"phrase",nl:"Ich nehme das.",en:"I'll take it.",phonetic:"ikh NAY-meh das",example:"A: Wie finden Sie das Hemd?\nB: Sehr schön. Ich nehme das.",exampleEn:"A: How do you like the shirt?\nB: Very nice. I'll take it.",note:"Standard phrase for deciding to buy something."},
  {type:"mc",q:"How do you ask the price of a single item?",opts:["Was kosten die?","Was kostet das?","Haben Sie das?","Ich nehme das."],ans:"Was kostet das?",hint:"Single item = kostet (singular verb form)."},
  {type:"fb",s:"A: ___ das? B: Das kostet zehn Euro.",a:"Was kostet",opts:["Was kostet","Was kosten","Wie viel macht","Haben Sie"],hint:"Price question for one item. Two words."},
  {type:"mc",q:"Which word means good value without implying low quality?",opts:["billig","teuer","günstig","schön"],ans:"günstig",hint:"Billig can carry a negative tone. The other word is neutral or positive."},
  {type:"mc",q:"A cashier says: Das macht sechs Euro zwanzig. What do they mean?",opts:["Six euros is too expensive","You owe six euros twenty","The item is on sale","The shop closes at six"],ans:"You owe six euros twenty",hint:"Das macht = that comes to (a total)."},
  {type:"fb",s:"Die Hose ist sehr ___. Sie kostet nur drei Euro.",a:"billig",opts:["billig","teuer","günstig","schön"],hint:"Very low price. Billig and günstig both fit but billig is more blunt."},
  {type:"match",pairs:[{nl:"Was kostet das?",en:"How much does that cost?"},{nl:"teuer",en:"expensive"},{nl:"günstig",en:"affordable"},{nl:"Ich nehme das.",en:"I'll take it."}]},
  {type:"mc",q:"Which sentence correctly uses kosten for a plural noun?",opts:["Was kosten der Schuh?","Was kostet die Schuhe?","Was kosten die Schuhe?","Was kostet das Schuhe?"],ans:"Was kosten die Schuhe?",hint:"Plural noun + plural verb form kosten."},
  {type:"fb",s:"A: Das ___ fünfzehn Euro. B: Hier sind fünfzehn Euro.",a:"macht",opts:["macht","kostet","ist","hat"],hint:"Das ___ = standard cashier phrase for the total amount."},
]},

{id:"deu8l2",title:"Kleidung",icon:"👕",xp:15,board:true,steps:[
  {type:"intro",title:"Kleidung",desc:"Clothing vocabulary! Every item has a gender. Learn the article and the word together as one unit.",goals:["Name 8 clothing items with correct articles","Ask about sizes","Use adjectives with clothing"]},
  {type:"tip",title:"Clothing articles",text:"Every German noun has a fixed article. For clothes:\nder = masculine (Mantel, Pullover, Schuh, Gürtel)\ndie = feminine (Hose, Jacke, Bluse, Jeans, Socke)\ndas = neuter (Hemd, Kleid, T-Shirt)\nLearn: der Mantel, die Hose, das Hemd as a unit."},
  {type:"teach",kind:"word",nl:"das Hemd",en:"the shirt (formal/button-up)",phonetic:"das hemt",example:"A: Dieses Hemd ist sehr elegant.\nB: Ja, es passt gut zu deiner Hose.",exampleEn:"A: This shirt is very elegant.\nB: Yes, it goes well with your trousers.",note:"Neuter. A formal woven shirt, not a T-shirt."},
  {type:"teach",kind:"word",nl:"die Hose",en:"the trousers",phonetic:"dee HOH-zeh",example:"A: Ich suche eine Hose in Größe 32.\nB: Schauen Sie hier drüben.",exampleEn:"A: I'm looking for trousers in size 32.\nB: Look over here.",note:"Feminine. Singular in German even though English says trousers (plural)."},
  {type:"teach",kind:"word",nl:"der Mantel",en:"the coat",phonetic:"der MAN-tel",example:"A: Ist dieser Mantel warm genug?\nB: Ja, er ist perfekt für den Winter.",exampleEn:"A: Is this coat warm enough?\nB: Yes, it's perfect for winter.",note:"Masculine. A long, heavy outer coat."},
  {type:"teach",kind:"word",nl:"die Schuhe (pl.)",en:"the shoes",phonetic:"dee SHOO-eh",example:"A: Was kosten diese Schuhe?\nB: Sechzig Euro.",exampleEn:"A: How much do these shoes cost?\nB: Sixty euros.",note:"Plural. Singular: der Schuh (masculine)."},
  {type:"teach",kind:"word",nl:"der Pullover",en:"the pullover / sweater",phonetic:"der poo-LOH-ver",cognate:"pullover",example:"A: Der Pullover ist sehr weich.\nB: Ja, er ist aus Wolle.",exampleEn:"A: The sweater is very soft.\nB: Yes, it's made of wool.",note:"Masculine. Cognate with English pullover."},
  {type:"teach",kind:"word",nl:"das Kleid",en:"the dress",phonetic:"das klite",example:"A: Das rote Kleid ist wunderschön!\nB: Danke, ich habe es gestern gekauft.",exampleEn:"A: The red dress is beautiful!\nB: Thank you, I bought it yesterday.",note:"Neuter. Only for one-piece dresses."},
  {type:"teach",kind:"word",nl:"die Jacke",en:"the jacket",phonetic:"dee YAK-eh",example:"A: Brauchst du eine Jacke?\nB: Nein, es ist heute warm.",exampleEn:"A: Do you need a jacket?\nB: No, it's warm today.",note:"Feminine. A lighter jacket, not a heavy coat."},
  {type:"teach",kind:"word",nl:"die Jeans (pl.)",en:"the jeans",phonetic:"dee djeens",cognate:"jeans",example:"A: Hast du eine neue Jeans?\nB: Ja, ich habe sie im Sale gekauft.",exampleEn:"A: Do you have new jeans?\nB: Yes, I bought them on sale.",note:"Takes die (feminine). Often treated as singular in German."},
  {type:"teach",kind:"phrase",nl:"Welche Größe haben Sie?",en:"What size do you take?",phonetic:"VEL-kheh GROH-seh HAH-ben zee",example:"A: Welche Größe haben Sie?\nB: Ich habe Größe M.",exampleEn:"A: What size do you take?\nB: I take size M.",note:"Größe = size. Sizes: XS, S, M, L, XL or numeric."},
  {type:"teach",kind:"phrase",nl:"Kann ich das anprobieren?",en:"Can I try this on?",phonetic:"kan ikh das AN-proh-beer-en",example:"A: Kann ich das Kleid anprobieren?\nB: Natürlich, die Umkleidekabine ist dort.",exampleEn:"A: Can I try on the dress?\nB: Of course, the changing room is over there.",note:"Separable verb: an|probieren. In questions, prefix stays attached."},
  {type:"mc",q:"Which clothing item is neuter (das)?",opts:["der Pullover","die Hose","das Hemd","der Mantel"],ans:"das Hemd",hint:"Check the article. Only one option is neuter."},
  {type:"fb",s:"Ich suche ___ Mantel.",a:"einen",opts:["einen","eine","ein","der"],hint:"Mantel is masculine. In accusative, ein becomes..."},
  {type:"mc",q:"Kann ich das anprobieren? What does the customer want?",opts:["Buy the item immediately","Try the item on","Ask the price","Return the item"],ans:"Try the item on",hint:"Anprobieren = to try on clothing."},
  {type:"match",pairs:[{nl:"das Hemd",en:"the shirt"},{nl:"die Hose",en:"the trousers"},{nl:"der Mantel",en:"the coat"},{nl:"das Kleid",en:"the dress"}]},
  {type:"fb",s:"Was kosten ___ Schuhe?",a:"die",opts:["die","der","das","den"],hint:"Schuhe is plural. Plural definite article is always..."},
  {type:"mc",q:"Which article goes with Pullover?",opts:["die","das","der","keine"],ans:"der",hint:"Pullover is masculine. Masculine article = der."},
  {type:"mc",q:"Welche Größe haben Sie? asks about:",opts:["The colour you want","Your clothing size","The price of an item","Whether you want a bag"],ans:"Your clothing size",hint:"Größe = size."},
  {type:"fb",s:"A: Haben Sie ___ Kleid in Größe S? B: Ja, natürlich.",a:"ein",opts:["ein","einen","eine","das"],hint:"Kleid is neuter. Neuter accusative indefinite article = ?"},
]},

{id:"deu8l3",title:"Zahlen 13-100",icon:"🔢",xp:15,board:true,steps:[
  {type:"intro",title:"Zahlen 13-100",desc:"Numbers 13 to 100. From 21 onwards, German says ONE-AND-TWENTY, not twenty-one. This reversal is the most important number rule to learn.",goals:["Say numbers 13-19","Say tens 20-90","Say combined numbers 21-99 in German order"]},
  {type:"teach",kind:"word",nl:"dreizehn",en:"thirteen",phonetic:"DRY-tsayn",example:"A: Wie alt ist deine Schwester?\nB: Sie ist dreizehn Jahre alt.",exampleEn:"A: How old is your sister?\nB: She is thirteen years old.",note:"13 = drei (3) + zehn (10). The -zehn suffix marks all teens."},
  {type:"teach",kind:"word",nl:"vierzehn bis neunzehn",en:"fourteen to nineteen",phonetic:"FEER-tsayn bis NOYN-tsayn",example:"A: Wann fährt der Bus?\nB: Um sechzehn Uhr fünfzehn.",exampleEn:"A: When does the bus leave?\nB: At sixteen fifteen.",note:"14=vierzehn, 15=fünfzehn, 16=sechzehn, 17=siebzehn, 18=achtzehn, 19=neunzehn.\nsechzehn loses the s (not sechszehn). siebzehn loses -en (not siebenzehn)."},
  {type:"teach",kind:"word",nl:"zwanzig",en:"twenty",phonetic:"TSVAN-tsikh",example:"A: Ich bin zwanzig Jahre alt.\nB: Oh, du bist noch jung!",exampleEn:"A: I am twenty years old.\nB: Oh, you are still young!",note:"20 = zwanzig. The -zig suffix marks tens from 30-90 (with one exception)."},
  {type:"tip",title:"The -zig pattern for tens",text:"German tens from 30-90 use -zig:\n30 = dreißig (IRREGULAR! not dreizig)\n40 = vierzig\n50 = fünfzig\n60 = sechzig (not sechszig)\n70 = siebzig (not siebenzig)\n80 = achtzig\n90 = neunzig\ndreißig is the only odd one out. Memorise it separately."},
  {type:"teach",kind:"word",nl:"dreißig",en:"thirty",phonetic:"DRY-sikh",example:"A: Was kostet das?\nB: Dreißig Euro.",exampleEn:"A: How much does that cost?\nB: Thirty euros.",note:"Irregular! 30 = dreißig, NOT dreizig. The -ßig ending is unique to 30."},
  {type:"teach",kind:"word",nl:"sechzig / siebzig",en:"sixty / seventy",phonetic:"ZEKH-tsikh / ZEEP-tsikh",example:"A: Wie viele Schüler sind in der Schule?\nB: Ungefähr sechzig.",exampleEn:"A: How many students are in the school?\nB: About sixty.",note:"sechzig (not sechszig), siebzig (not siebenzig). The base shortens before -zig."},
  {type:"tip",title:"The reversal rule: einundzwanzig",text:"From 21 onwards, German says the ONES digit FIRST, then und, then the TENS:\n21 = einundzwanzig (one-and-twenty)\n43 = dreiundvierzig (three-and-forty)\n99 = neunundneunzig (nine-and-ninety)\nThis is the OPPOSITE of English order. All written as one word, no spaces."},
  {type:"teach",kind:"word",nl:"einundzwanzig",en:"twenty-one",phonetic:"INE-oont-tsvan-tsikh",example:"A: Ich bin einundzwanzig.\nB: Happy Birthday!",exampleEn:"A: I am twenty-one.\nB: Happy Birthday!",note:"REVERSAL: ein (1) + und (and) + zwanzig (20). Always written as one word."},
  {type:"teach",kind:"word",nl:"dreiunddreißig",en:"thirty-three",phonetic:"DRY-oont-dry-sikh",example:"A: Die Wohnung kostet dreiunddreißig Euro pro Tag.\nB: Das ist günstig!",exampleEn:"A: The apartment costs thirty-three euros per day.\nB: That's affordable!",note:"drei (3) + und + dreißig (30). Compound number as one word."},
  {type:"teach",kind:"word",nl:"neunundneunzig",en:"ninety-nine",phonetic:"NOYN-oont-NOYN-tsikh",example:"A: Das kostet neunundneunzig Cent.\nB: Fast ein Euro!",exampleEn:"A: That costs ninety-nine cents.\nB: Almost one euro!",note:"The reversal extends all the way to 99. Always: ones + und + tens."},
  {type:"mc",q:"How does German say 21?",opts:["zwanzigeins","zwanzigein","einundzwanzig","zwanzigund"],ans:"einundzwanzig",hint:"German reverses the order: ones-and-tens, all one word."},
  {type:"fb",s:"43 auf Deutsch: dreiund___.",a:"vierzig",opts:["vierzig","zwanzig","dreißig","fünfzig"],hint:"43 = three-and-FORTY. Which German word means forty?"},
  {type:"mc",q:"Which tens number is IRREGULAR (not ending in -zig)?",opts:["zwanzig","vierzig","dreißig","neunzig"],ans:"dreißig",hint:"One of these uses -ßig instead of -zig. Memorise it."},
  {type:"mc",q:"How do you say 67 in German?",opts:["sechzigundssieben","siebenundsechzig","sechsundsechzig","siebenundzwanzig"],ans:"siebenundsechzig",hint:"67 = sieben (7) + und + sechzig (60). Ones first."},
  {type:"fb",s:"16 auf Deutsch: ___ (watch the spelling!)",a:"sechzehn",opts:["sechzehn","sechszehn","siebzehn","sechdzehn"],hint:"sech- not sechs- before -zehn. The s drops."},
  {type:"mc",q:"Which is the correct way to write 55 in German?",opts:["fünfundfünfzig","fünfzigfünf","fünffünfzig","fünfundzwanzig"],ans:"fünfundfünfzig",hint:"55 = fünf (5) + und + fünfzig (50). One word."},
  {type:"match",pairs:[{nl:"dreißig",en:"30"},{nl:"siebzig",en:"70"},{nl:"neunundneunzig",en:"99"},{nl:"einundzwanzig",en:"21"}]},
  {type:"mc",q:"Das kostet siebenundachtzig Euro. What is the price?",opts:["78 euros","87 euros","88 euros","77 euros"],ans:"87 euros",hint:"sieben = 7, achtzig = 80. Seven-and-eighty = 87."},
  {type:"fb",s:"___ Jahre alt ist er. (He is 19 years old.)",a:"Neunzehn",opts:["Neunzehn","Neunzig","Neunzehnzig","Neundreizehn"],hint:"19 = nine-teen. Teens in German use -zehn suffix."},
  {type:"mc",q:"How is 33 written in German?",opts:["dreiundvierzig","dreidreißig","dreiunddreißig","dreiunddreizig"],ans:"dreiunddreißig",hint:"33 = drei (3) + und + dreißig (30). Note the ß in dreißig."},
]},

{id:"deu8l4",title:"Zahlen bis 1000",icon:"💯",xp:15,board:true,steps:[
  {type:"intro",title:"Zahlen bis 1000",desc:"Hundreds and thousands! Now you can handle any price, year, or quantity in German.",goals:["Say hundreds 100-900","Say 1000 and compound thousands","Combine hundreds and tens for full prices"]},
  {type:"teach",kind:"word",nl:"hundert",en:"one hundred",phonetic:"HOON-dert",example:"A: Was kostet das?\nB: Hundert Euro.",exampleEn:"A: How much does it cost?\nB: One hundred euros.",note:"100 = hundert. No ein before hundert for exactly 100. For 200+: zweihundert, dreihundert, etc."},
  {type:"teach",kind:"word",nl:"zweihundert / dreihundert",en:"two hundred / three hundred",phonetic:"TSVY-hoon-dert / DRY-hoon-dert",example:"A: Das Fahrrad kostet dreihundert Euro.\nB: Das ist aber teuer!",exampleEn:"A: The bike costs three hundred euros.\nB: That's quite expensive!",note:"Simply prefix the number: zwei + hundert = 200. All one word."},
  {type:"tip",title:"Building large numbers",text:"German large numbers combine directly as one word:\n243 = zweihundertdreiundvierzig\n(two-hundred-three-and-forty)\n765 = siebenhundertfünfundsechzig\n(seven-hundred-five-and-sixty)\nRead order: hundreds, then ones-and-tens."},
  {type:"teach",kind:"word",nl:"tausend",en:"one thousand",phonetic:"TOW-zent",example:"A: Das Auto kostet zwanzigtausend Euro.\nB: So viel Geld habe ich nicht!",exampleEn:"A: The car costs twenty thousand euros.\nB: I don't have that much money!",note:"1000 = tausend. 2000 = zweitausend. No ein needed before tausend for exactly 1000."},
  {type:"teach",kind:"phrase",nl:"eintausend / zweitausend",en:"one thousand / two thousand",phonetic:"INE-tow-zent / TSVY-tow-zent",example:"A: Das Flugticket kostet eintausend Euro.\nB: Gibt es nichts Billigeres?",exampleEn:"A: The plane ticket costs one thousand euros.\nB: Is there nothing cheaper?",note:"eintausend is used when being explicit. zweitausend, dreitausend, etc. follow the same pattern."},
  {type:"teach",kind:"phrase",nl:"Das kostet...",en:"That costs...",phonetic:"das KOS-tet",example:"A: Das kostet dreihundertfünfzig Euro.\nB: Ich nehme es.",exampleEn:"A: That costs three hundred and fifty euros.\nB: I'll take it.",note:"Use kostet (singular) for a single price. Combine numbers fluently."},
  {type:"teach",kind:"phrase",nl:"Haben Sie es günstiger?",en:"Do you have it cheaper?",phonetic:"HAH-ben zee es GYUN-stih-ger",example:"A: Haben Sie es günstiger?\nB: Tut mir leid, das ist unser bester Preis.",exampleEn:"A: Do you have it cheaper?\nB: I'm sorry, that's our best price.",note:"günstiger = comparative of günstig. Polite negotiation phrase."},
  {type:"teach",kind:"phrase",nl:"Das ist zu teuer.",en:"That is too expensive.",phonetic:"das ist tsoo TOY-er",example:"A: Das kostet fünfhundert Euro.\nB: Das ist zu teuer für mich.",exampleEn:"A: That costs five hundred euros.\nB: That is too expensive for me.",note:"Zu + adjective = too + adjective. Zu teuer = too expensive."},
  {type:"mc",q:"How do you say 500 in German?",opts:["fünfhundert","hundertfünf","fünfhunderts","fünf hundert"],ans:"fünfhundert",hint:"fünf (5) + hundert (100) = one word, no space."},
  {type:"fb",s:"Das Sofa kostet ___. (895 euros = achthundertfünfundneunzig)",a:"achthundertfünfundneunzig",opts:["achthundertfünfundneunzig","achthundertneunzigfünf","fünfundneunzighundertacht","achtneunzigfünf"],hint:"Build: acht-hundert (800) + fünf-und-neunzig (95). All one word."},
  {type:"mc",q:"Which number is 1000?",opts:["hundert","tausend","zehnhundert","tausends"],ans:"tausend",hint:"Thousand in German = tausend. A completely different root from hundert."},
  {type:"mc",q:"Das kostet zweihundertdreißig Euro. What is the price?",opts:["203 euros","230 euros","320 euros","300 euros"],ans:"230 euros",hint:"zwei-hundert (200) + dreißig (30) = 230."},
  {type:"fb",s:"___ Euro kostet das Auto. (20,000 euros)",a:"Zwanzigtausend",opts:["Zwanzigtausend","Zweitausendzehn","Tausendenzwanzig","Zwanzigtausends"],hint:"20,000 = zwanzig (20) + tausend (1000) as one word."},
  {type:"mc",q:"How do you say: That is too expensive?",opts:["Das ist sehr teuer.","Das kostet viel.","Das ist zu teuer.","Das ist nicht günstig."],ans:"Das ist zu teuer.",hint:"Zu + adjective = too + adjective."},
  {type:"match",pairs:[{nl:"hundert",en:"100"},{nl:"dreihundert",en:"300"},{nl:"tausend",en:"1000"},{nl:"achthundert",en:"800"}]},
  {type:"mc",q:"How is 743 written in German?",opts:["siebenvierdrei","siebenhundertdreiundvierzig","siebenhundertvierundvierzig","dreiundsiebenzigehundert"],ans:"siebenhundertdreiundvierzig",hint:"sieben-hundert (700) + drei-und-vierzig (43)."},
  {type:"fb",s:"Haben Sie es ___? Ich finde es zu teuer.",a:"günstiger",opts:["günstiger","billig","teurer","schöner"],hint:"Comparative of günstig. Add -er to the adjective."},
  {type:"mc",q:"Das kostet dreihundertfünfzig Euro means:",opts:["Three hundred euros","Three hundred and fifteen euros","Three hundred and fifty euros","Thirty-five euros"],ans:"Three hundred and fifty euros",hint:"drei-hundert (300) + fünfzig (50) = 350."},
]},

{id:"deu8l5",title:"Das gefällt mir",icon:"❤️",xp:15,board:true,steps:[
  {type:"intro",title:"Das gefällt mir",desc:"Express what you like! The verb gefallen works differently from mögen: the thing you like is the SUBJECT, and you are the DATIVE object.",goals:["Use gefallen correctly with dative","Ask about color preferences","Say Das steht dir gut"]},
  {type:"tip",title:"gefallen: the backwards like",text:"In German, gefallen (to please) expresses liking:\nDas gefällt mir. = That pleases me. = I like that.\nDie Schuhe gefallen mir. = The shoes please me. = I like the shoes.\nThe THING liked is the SUBJECT. The PERSON is dative (mir/dir/ihm/ihr).\nNever say: Ich gefalle das.\nCorrect: Das gefällt mir."},
  {type:"teach",kind:"phrase",nl:"Das gefällt mir.",en:"I like that.",phonetic:"das geh-FELLT meer",example:"A: Wie findest du das Hemd?\nB: Das gefällt mir sehr gut!",exampleEn:"A: What do you think of the shirt?\nB: I really like that!",note:"Mir = dative of ich. gefällt = 3rd person singular of gefallen."},
  {type:"teach",kind:"phrase",nl:"Das gefällt mir nicht.",en:"I don't like that.",phonetic:"das geh-FELLT meer nikht",example:"A: Was denkst du über die Farbe?\nB: Das gefällt mir nicht. Ich mag Blau lieber.",exampleEn:"A: What do you think about the color?\nB: I don't like that. I prefer blue.",note:"Nicht comes after the dative object to negate."},
  {type:"teach",kind:"phrase",nl:"Welche Farbe gefällt dir?",en:"Which color do you like?",phonetic:"VEL-kheh FAR-beh geh-FELLT deer",example:"A: Welche Farbe gefällt dir?\nB: Mir gefällt Grün am besten.",exampleEn:"A: Which color do you like?\nB: I like green the best.",note:"Dir = dative of du (informal). Formal: Welche Farbe gefällt Ihnen?"},
  {type:"teach",kind:"phrase",nl:"Das steht dir gut.",en:"That suits you well.",phonetic:"das shtayt deer goot",example:"A: Wie sieht das Kleid aus?\nB: Das steht dir wirklich gut!",exampleEn:"A: How does the dress look?\nB: That really suits you well!",note:"Stehen + dative = to suit. Dir = you (informal dative)."},
  {type:"teach",kind:"word",nl:"die Farbe",en:"the color",phonetic:"dee FAR-beh",example:"A: In welcher Farbe möchten Sie das?\nB: In Blau, bitte.",exampleEn:"A: In which color would you like that?\nB: In blue, please.",note:"Feminine. Colors from Unit 5: rot, blau, grün, gelb, schwarz, weiß, grau."},
  {type:"tip",title:"Color review in shopping context",text:"From Unit 5, you know:\nrot (red), blau (blue), grün (green), gelb (yellow)\nschwarz (black), weiß (white), grau (grey)\nIn shops: Haben Sie das in Rot? = Do you have that in red?\nColor follows in without an article. Capitalize the color."},
  {type:"teach",kind:"phrase",nl:"Haben Sie das in...?",en:"Do you have that in...?",phonetic:"HAH-ben zee das in",example:"A: Haben Sie das in Schwarz?\nB: Ja, Schwarz haben wir auf Lager.",exampleEn:"A: Do you have that in black?\nB: Yes, we have black in stock.",note:"Standard shopping question for color variants."},
  {type:"teach",kind:"phrase",nl:"Ich mag... lieber.",en:"I prefer...",phonetic:"ikh mahk LEE-ber",example:"A: Magst du Rot oder Blau?\nB: Ich mag Blau lieber.",exampleEn:"A: Do you like red or blue?\nB: I prefer blue.",note:"Lieber = rather/preferably. Ich mag X lieber = I prefer X."},
  {type:"teach",kind:"word",nl:"am besten",en:"best of all",phonetic:"am BES-ten",example:"A: Welche Farbe magst du am besten?\nB: Am besten gefällt mir Grün.",exampleEn:"A: Which color do you like best?\nB: I like green best of all.",note:"Am besten = superlative. Mir gefällt X am besten = I like X the most."},
  {type:"mc",q:"Das gefällt mir. What does mir refer to?",opts:["The thing being liked","The speaker (dative)","The speaker (nominative)","The color of the item"],ans:"The speaker (dative)",hint:"With gefallen, the person who likes something is in the DATIVE case."},
  {type:"fb",s:"Die Schuhe ___ mir sehr.",a:"gefallen",opts:["gefallen","gefällt","mögen","mag"],hint:"Schuhe is PLURAL. Plural subject needs plural form: gefallen (not gefällt)."},
  {type:"mc",q:"How do you ask a friend informally: Which color do you like?",opts:["Welche Farbe gefällt Ihnen?","Welche Farbe magst Sie?","Welche Farbe gefällt dir?","Welche Farbe ist dir?"],ans:"Welche Farbe gefällt dir?",hint:"Informal = dir. Formal = Ihnen."},
  {type:"mc",q:"Das steht Ihnen gut means:",opts:["That is expensive for you","That suits you well","That is your size","Do you like that?"],ans:"That suits you well",hint:"Stehen + dative = to suit someone."},
  {type:"fb",s:"Haben Sie das ___ Grün?",a:"in",opts:["in","auf","mit","bei"],hint:"Color variants: Haben Sie das ___ [color]? One preposition."},
  {type:"mc",q:"Which sentence correctly expresses I prefer blue?",opts:["Ich gefalle Blau lieber.","Blau gefällt mich lieber.","Ich mag Blau lieber.","Ich liebe Blau gefällt."],ans:"Ich mag Blau lieber.",hint:"Lieber with mögen = prefer. Ich mag X lieber = I prefer X."},
  {type:"match",pairs:[{nl:"Das gefällt mir.",en:"I like that."},{nl:"Das steht dir gut.",en:"That suits you."},{nl:"am besten",en:"best of all"},{nl:"Welche Farbe?",en:"Which color?"}]},
  {type:"mc",q:"Mir gefällt Rot am besten. This means:",opts:["Red is the most expensive","I dislike red","I like red the best","Red is my only option"],ans:"I like red the best",hint:"Am besten = best of all. Mir gefällt = I like (dative construction)."},
  {type:"fb",s:"A: Das Kleid ___ mir nicht. B: Schade!",a:"gefällt",opts:["gefällt","gefallen","mag","steht"],hint:"Das Kleid is singular. Singular form of gefallen = ge-fällt."},
]},

{id:"deu8l6",title:"Dieser, diese, dieses",icon:"👆",xp:15,board:true,steps:[
  {type:"intro",title:"Dieser, diese, dieses",desc:"Demonstratives! Dieser/diese/dieses = this/these. They change endings by gender and case, mirroring the definite article system.",goals:["Use dieser/diese/dieses for this","Apply nominative and accusative forms","Contrast with welcher/welche/welches"]},
  {type:"tip",title:"Dieser follows the definite article pattern",text:"Dieser (this/these) mirrors der/die/das endings:\nMasc: dieser (nom) / diesen (acc)\nFem: diese (nom+acc)\nNeut: dieses (nom+acc)\nPlural: diese (nom+acc)\nMemory trick: replace der/die/das with dies- and keep the same ending.\nder Mantel -> dieser Mantel\ndie Hose -> diese Hose\ndas Hemd -> dieses Hemd"},
  {type:"teach",kind:"word",nl:"dieser (m.)",en:"this (masculine nominative)",phonetic:"DEE-zer",example:"A: Welcher Mantel gefällt dir?\nB: Dieser Mantel hier ist schön.",exampleEn:"A: Which coat do you like?\nB: This coat here is nice.",note:"Nominative masculine. Dieser agrees with the noun's gender."},
  {type:"teach",kind:"word",nl:"diese (f.)",en:"this (feminine nominative)",phonetic:"DEE-zeh",example:"A: Kaufst du diese Hose?\nB: Ja, diese Hose gefällt mir sehr.",exampleEn:"A: Are you buying these trousers?\nB: Yes, I like these trousers very much.",note:"Feminine AND plural nominative share the form diese."},
  {type:"teach",kind:"word",nl:"dieses (n.)",en:"this (neuter nominative/accusative)",phonetic:"DEE-zes",example:"A: Wie findest du dieses Hemd?\nB: Dieses Hemd ist perfekt für die Arbeit.",exampleEn:"A: What do you think of this shirt?\nB: This shirt is perfect for work.",note:"Neuter nominative and accusative are the same form: dieses."},
  {type:"teach",kind:"word",nl:"diesen (m. acc.)",en:"this (masculine accusative)",phonetic:"DEE-zen",example:"A: Ich möchte diesen Mantel kaufen.\nB: Eine gute Wahl!",exampleEn:"A: I would like to buy this coat.\nB: A good choice!",note:"Masculine accusative: dieser becomes diesen. Same -en ending as einen/den."},
  {type:"tip",title:"Nominative vs Accusative with dieser",text:"Nominative (subject):\nDieser Pullover ist warm.\nDiese Jacke ist neu.\nDieses Kleid ist schön.\nAccusative (direct object):\nIch kaufe diesen Pullover.\nIch nehme diese Jacke.\nIch trage dieses Kleid.\nOnly masculine changes: dieser -> diesen in accusative."},
  {type:"teach",kind:"phrase",nl:"Welcher / Welche / Welches?",en:"Which? (m./f./n.)",phonetic:"VEL-kher / VEL-kheh / VEL-khes",example:"A: Welches Kleid nimmst du?\nB: Dieses hier.",exampleEn:"A: Which dress are you taking?\nB: This one here.",note:"Question word for which. Same gender endings as dieser."},
  {type:"teach",kind:"phrase",nl:"Dieser hier / Diese da",en:"This one here / That one there",phonetic:"DEE-zer heer / DEE-zeh da",example:"A: Welchen Schuh möchten Sie?\nB: Diesen hier, bitte.",exampleEn:"A: Which shoe would you like?\nB: This one here, please.",note:"Hier = here (nearby), da = there (further away). Useful for pointing in shops."},
  {type:"mc",q:"___ Hemd ist sehr schön. (This shirt is beautiful.)",opts:["Dieser","Diese","Dieses","Diesen"],ans:"Dieses",hint:"Hemd is neuter (das Hemd). Neuter demonstrative nominative = ?"},
  {type:"fb",s:"Ich kaufe ___ Mantel.",a:"diesen",opts:["diesen","dieser","diese","dieses"],hint:"Mantel is masculine. In accusative, masculine dieser becomes..."},
  {type:"mc",q:"Which sentence correctly says: This jacket is new?",opts:["Dieser Jacke ist neu.","Diesen Jacke ist neu.","Dieses Jacke ist neu.","Diese Jacke ist neu."],ans:"Diese Jacke ist neu.",hint:"Jacke is feminine (die Jacke). Feminine demonstrative = ?"},
  {type:"match",pairs:[{nl:"dieser (m. nom.)",en:"this coat as subject"},{nl:"diese (f. nom.)",en:"this jacket as subject"},{nl:"dieses (n. nom.)",en:"this shirt as subject"},{nl:"diesen (m. acc.)",en:"this coat as object"}]},
  {type:"fb",s:"___ Schuhe sind zu teuer.",a:"Diese",opts:["Diese","Dieser","Dieses","Diesen"],hint:"Schuhe is plural. Plural demonstrative (nom./acc.) = ?"},
  {type:"mc",q:"How do you ask: Which dress do you want?",opts:["Welcher Kleid möchten Sie?","Welches Kleid möchten Sie?","Welche Kleid möchten Sie?","Welchem Kleid möchten Sie?"],ans:"Welches Kleid möchten Sie?",hint:"Kleid is neuter (das). Neuter welch- ending = welches."},
  {type:"mc",q:"Sie nimmt diesen Pullover. What is the case of diesen?",opts:["Nominative masculine","Accusative masculine","Nominative feminine","Accusative neuter"],ans:"Accusative masculine",hint:"Nimmt = takes. The Pullover is the direct object = accusative. Pullover is masculine."},
  {type:"fb",s:"A: ___ Jacke nimmst du? B: Diese hier.",a:"Welche",opts:["Welche","Welcher","Welches","Welchen"],hint:"Jacke is feminine (die). Question word welch- takes feminine ending = welche."},
  {type:"mc",q:"Dieser Hut hier oder dieser da? What is the speaker doing?",opts:["Asking the price of two hats","Pointing to two hats and comparing them","Complaining about a hat","Asking if they have hats in stock"],ans:"Pointing to two hats and comparing them",hint:"Hier = nearby, da = further away. Using dieser twice with location words."},
  {type:"mc",q:"Ich möchte ___ Kleid kaufen. (neuter accusative: this dress)",opts:["dieser","diese","dieses","diesen"],ans:"dieses",hint:"Kleid is neuter. Neuter accusative of dieser = dieses (same as nominative)."},
]},

{id:"deu8l7",title:"Auf dem Markt",icon:"🥦",xp:15,board:true,steps:[
  {type:"intro",title:"Auf dem Markt",desc:"At the market! Learn quantities, weights, and how to buy produce. Also: polite negotiation and everyday market phrases.",goals:["Use ein Kilo, eine Tüte, ein Stück for quantities","Ask for items at a market stall","Use polite negotiation phrases"]},
  {type:"teach",kind:"phrase",nl:"ein Kilo",en:"one kilogram",phonetic:"ine KEE-loh",example:"A: Ich hätte gern ein Kilo Tomaten.\nB: Gerne, das macht zwei Euro.",exampleEn:"A: I'd like one kilogram of tomatoes.\nB: Of course, that comes to two euros.",note:"Kilo is neuter (ein Kilo). No article on the item after Kilo: ein Kilo Tomaten."},
  {type:"teach",kind:"phrase",nl:"ein halbes Kilo",en:"half a kilogram / 500 grams",phonetic:"ine HAL-bes KEE-loh",example:"A: Ein halbes Kilo Äpfel, bitte.\nB: Einsfünfzig, bitte.",exampleEn:"A: Half a kilo of apples, please.\nB: One fifty, please.",note:"halbes = neuter adjective (Kilo is neuter). Standard quantity at markets."},
  {type:"teach",kind:"phrase",nl:"eine Tüte",en:"a bag of",phonetic:"INE-eh TYU-teh",example:"A: Ich möchte eine Tüte Kartoffeln.\nB: Klein oder groß?",exampleEn:"A: I'd like a bag of potatoes.\nB: Small or large?",note:"Tüte = bag (feminine, eine Tüte). Used for loose items sold by the bag."},
  {type:"teach",kind:"phrase",nl:"ein Stück",en:"one piece / one item",phonetic:"ine shtyk",example:"A: Ein Stück Kuchen, bitte.\nB: Mit Sahne?",exampleEn:"A: One piece of cake, please.\nB: With cream?",note:"Stück is neuter (ein Stück). Used for countable single items."},
  {type:"teach",kind:"phrase",nl:"Ich hätte gern...",en:"I would like... (polite)",phonetic:"ikh HET-eh gern",example:"A: Ich hätte gern zwei Kilo Kartoffeln.\nB: Natürlich, einen Moment.",exampleEn:"A: I would like two kilos of potatoes.\nB: Of course, one moment.",note:"Hätte gern = most polite way to order. Konjunktiv II of haben + gern."},
  {type:"teach",kind:"phrase",nl:"Ist das alles?",en:"Is that everything?",phonetic:"ist das AL-es",example:"A: Zwei Äpfel, bitte.\nB: Gerne. Ist das alles?\nA: Ja, das ist alles.",exampleEn:"A: Two apples, please.\nB: Of course. Is that everything?\nA: Yes, that's everything.",note:"Standard checkout question at markets and small shops."},
  {type:"teach",kind:"phrase",nl:"Kann ich kosten?",en:"Can I taste / try?",phonetic:"kan ikh KOS-ten",example:"A: Kann ich den Käse kosten?\nB: Aber natürlich!",exampleEn:"A: Can I taste the cheese?\nB: But of course!",note:"Kosten here = to taste/try (different from kosten = to cost)."},
  {type:"teach",kind:"phrase",nl:"Geht da noch was?",en:"Can you do anything on the price?",phonetic:"gayt da nokh vas",example:"A: Drei Euro für so wenig? Geht da noch was?\nB: Na gut, zwei fünfzig für Sie.",exampleEn:"A: Three euros for so little? Can you do any better?\nB: OK, two fifty for you.",note:"Informal haggling phrase. Literally: does something go there still? Market vendors expect this."},
  {type:"teach",kind:"word",nl:"frisch",en:"fresh",phonetic:"frish",example:"A: Sind die Erdbeeren frisch?\nB: Ja, von heute Morgen!",exampleEn:"A: Are the strawberries fresh?\nB: Yes, from this morning!",note:"Key quality adjective at markets. Also useful: regional (local), bio (organic)."},
  {type:"teach",kind:"word",nl:"bio",en:"organic",phonetic:"bee-OH",cognate:"bio",example:"A: Haben Sie bio Kartoffeln?\nB: Ja, die bio Produkte sind hier.",exampleEn:"A: Do you have organic potatoes?\nB: Yes, the organic products are here.",note:"Bio = standard word for organic in German shops and markets."},
  {type:"mc",q:"Ich hätte gern ein Kilo Äpfel. Which quantity unit is used?",opts:["eine Tüte","ein Stück","ein Kilo","eine Portion"],ans:"ein Kilo",hint:"Äpfel sold by weight. Which unit = weight?"},
  {type:"fb",s:"___ Stück Kuchen, bitte.",a:"Ein",opts:["Ein","Eine","Einen","Einer"],hint:"Stück is neuter. Indefinite article for neuter nominative = ?"},
  {type:"mc",q:"Ist das alles? The right reply if you want nothing more is:",opts:["Ja, danke.","Nein, ich kaufe mehr.","Kann ich kosten?","Geht da noch was?"],ans:"Ja, danke.",hint:"Ja, danke = yes, thank you. Confirms that's everything."},
  {type:"mc",q:"What does Geht da noch was? mean at a market?",opts:["Is there more stock?","Can you lower the price?","Is the item fresh?","Do you take card payment?"],ans:"Can you lower the price?",hint:"A polite informal way to ask for a discount."},
  {type:"fb",s:"Ich möchte ___ Tüte Kartoffeln.",a:"eine",opts:["eine","ein","einen","einer"],hint:"Tüte is feminine. Feminine accusative indefinite article = ?"},
  {type:"mc",q:"Kann ich den Käse kosten? What does the customer want?",opts:["Buy the cheese immediately","Ask the price of the cheese","Taste the cheese before buying","Cook with the cheese"],ans:"Taste the cheese before buying",hint:"Kosten here means to taste/sample, not to cost."},
  {type:"match",pairs:[{nl:"ein Kilo",en:"one kilogram"},{nl:"eine Tüte",en:"a bag of"},{nl:"ein Stück",en:"one piece"},{nl:"bio",en:"organic"}]},
  {type:"mc",q:"How do you politely ask for 2 kilos of tomatoes at a market stall?",opts:["Gib mir zwei Kilo Tomaten.","Ich will Tomaten.","Ich hätte gern zwei Kilo Tomaten.","Was kosten Tomaten?"],ans:"Ich hätte gern zwei Kilo Tomaten.",hint:"Hätte gern = the most polite market ordering phrase."},
  {type:"fb",s:"Sind die Erdbeeren ___?",a:"frisch",opts:["frisch","teuer","bio","gut"],hint:"Fresh = key quality word at markets."},
  {type:"mc",q:"Ein halbes Kilo means:",opts:["Half a kilogram (500g)","One and a half kilos","A hundred grams","Two kilos"],ans:"Half a kilogram (500g)",hint:"halb = half. Ein halbes Kilo = 500g."},
]},

{id:"deu8l8",title:"A1 Abschluss",icon:"🎓",xp:25,board:true,steps:[
  {type:"intro",title:"A1 Abschluss",desc:"You have completed A1 German! This final lesson reviews everything from Units 1-8: greetings, grammar, daily life, and vocabulary.",goals:["Review all A1 grammar patterns across Units 1-8","Consolidate key vocabulary","Prepare for A2"]},
  {type:"tip",title:"Was du auf A1 kannst",text:"You can now:\nGreet and say goodbye (U1)\nIntroduce yourself, say your nationality (U2)\nTalk about family and possessives (U3)\nOrder food and drinks (U4)\nDescribe your daily routine and time (U5)\nDescribe your home (U6)\nAsk for and give directions (U7)\nShop for clothes and use numbers to 1000 (U8)\nCore grammar: sein, haben, modals, accusative, articles, separable verbs, dieser/diese/dieses."},
  {type:"mc",q:"Guten Morgen is used until approximately:",opts:["9am","12pm","3pm","6pm"],ans:"12pm",hint:"Morgen = morning. The morning greeting covers until midday."},
  {type:"mc",q:"Which pronoun is the formal address in German?",opts:["du","Sie","er","wir"],ans:"Sie",hint:"Capital S is the giveaway. Use with strangers, older people, and new colleagues."},
  {type:"fb",s:"Ich ___ aus Deutschland.",a:"komme",opts:["komme","bin","habe","wohne"],hint:"Kommen aus = to come from. Ich ___ aus..."},
  {type:"mc",q:"Which sentence correctly uses haben?",opts:["Ich habe müde.","Ich habe zwei Schwestern.","Ich habe kalt.","Ich habe groß."],ans:"Ich habe zwei Schwestern.",hint:"Haben = to have. It takes a direct object, something you possess."},
  {type:"mc",q:"Mein Vater arbeitet in Hamburg. What does mein indicate?",opts:["Formal address","Possessive: my","Plural of Mann","Past tense marker"],ans:"Possessive: my",hint:"Mein/meine/mein = my. Possessive pronoun agreeing with the noun's gender."},
  {type:"fb",s:"Ich ___ gern Kaffee.",a:"mag",opts:["mag","möchte","kann","will"],hint:"Mögen in present tense: ich mag = I like."},
  {type:"mc",q:"What time is halb vier in German?",opts:["4:00","4:30","3:30","3:45"],ans:"3:30",hint:"German: halb vier = half TO four = 3:30. Halfway to four."},
  {type:"mc",q:"Ich stehe um sieben Uhr auf. Which word is the separable prefix?",opts:["stehe","Uhr","auf","um"],ans:"auf",hint:"Separable verbs split: the prefix goes to the END of the main clause."},
  {type:"fb",s:"Das Wohnzimmer ___ im Erdgeschoss.",a:"ist",opts:["ist","hat","gibt","steht"],hint:"Sein (to be) describes location. Ich bin, du bist, er/sie/es ___."},
  {type:"mc",q:"Es gibt einen Supermarkt in der Nähe. What does es gibt mean?",opts:["I want","There is / there are","He has","It gives"],ans:"There is / there are",hint:"Es gibt + accusative = there is/are. Covered in Unit 6."},
  {type:"mc",q:"Gehen Sie geradeaus, dann links. What does geradeaus mean?",opts:["Turn left","Turn right","Straight ahead","Go back"],ans:"Straight ahead",hint:"Geradeaus = straight ahead. From gerade (straight) + aus (ahead)."},
  {type:"fb",s:"Der Rock kostet ___. (35 euros)",a:"fünfunddreißig Euro",opts:["fünfunddreißig Euro","dreißigfünf Euro","fünfdreißig Euro","fünfundzwanzig Euro"],hint:"35 = fünf (5) + und + dreißig (30). Ones-and-tens order."},
  {type:"mc",q:"Which article is correct: ___ Hemd ist weiß.",opts:["Der","Die","Das","Den"],ans:"Das",hint:"Hemd (shirt) is neuter. Neuter nominative article = das."},
  {type:"mc",q:"Was kostet das? is asking about:",opts:["The color of an item","The size of an item","The price of an item","The material of an item"],ans:"The price of an item",hint:"Kosten = to cost. Was kostet = what does... cost?"},
  {type:"fb",s:"___ Jacke gefällt mir sehr.",a:"Diese",opts:["Diese","Dieser","Dieses","Diesen"],hint:"Jacke is feminine (die). Feminine demonstrative = ?"},
  {type:"mc",q:"Ich hätte gern ein Kilo Äpfel. The form hätte is:",opts:["Indicative present of haben","Imperative of haben","Konjunktiv II of haben","Future of haben"],ans:"Konjunktiv II of haben",hint:"Hätte = subjunctive of haben. Used for polite requests."},
  {type:"mc",q:"Which modal verb expresses must / obligation?",opts:["können","wollen","müssen","dürfen"],ans:"müssen",hint:"Müssen = must / to have to. Covered in Unit 7."},
  {type:"match",pairs:[{nl:"Guten Morgen",en:"Good morning"},{nl:"Auf Wiedersehen",en:"Goodbye (formal)"},{nl:"Wie geht es Ihnen?",en:"How are you? (formal)"},{nl:"Bitte",en:"Please / You're welcome"}]},
  {type:"fb",s:"Können Sie mir helfen? Ich suche ___ Bahnhof.",a:"den",opts:["den","der","das","die"],hint:"Bahnhof is masculine. Masculine accusative definite article = den."},
  {type:"mc",q:"What case do you encounter first in A2, building on A1 accusative?",opts:["Genitive case","Konjunktiv I","Dative case","Partizip II"],ans:"Dative case",hint:"After nominative and accusative, the next German case is dative. You will meet mir, dir, ihm, ihr in A2."},
]},

]},
,
{n:11,lang:"de",track:"v1",title:"Wem gibst du das?",sub:"The Dative Case",icon:"🎯",level:"A2.1",color:"#7B5EE8",lessons:[
  {id:"deu11l1",title:"Was ist der Dativ?",icon:"🎯",xp:20,board:true,steps:[
    {type:"intro",title:"Was ist der Dativ?",desc:"German has four cases. You already know nominative (subject) and accusative (direct object). Now meet the dative: the case of the indirect object.",goals:["Understand when to use the dative case","Learn the dative articles dem, der, dem, den","See how dative changes the article"]},
    {type:"tip",title:"The Dative Case",text:"The dative marks the INDIRECT object: the person who receives something.\nNominative: der/die/das/die\nAccusative: den/die/das/die\nDative: dem/der/dem/den (+n on plural nouns)\nAsk 'Wem?' (To whom?) to find the dative."},
    {type:"teach",kind:"grammar",nl:"dem",en:"the (masc/neut dative)",phonetic:"dehm",example:"A: Wem gibst du das Buch?\nB: Ich gebe dem Mann das Buch.",exampleEn:"A: To whom do you give the book?\nB: I give the book to the man.",note:"der and das both become dem in the dative."},
    {type:"teach",kind:"grammar",nl:"der",en:"the (fem dative)",phonetic:"dehr",example:"A: Wem schenkst du die Blumen?\nB: Ich schenke der Frau die Blumen.",exampleEn:"A: To whom do you give the flowers?\nB: I give the flowers to the woman.",note:"die becomes der in the dative. Don't confuse with der (masc nominative)!"},
    {type:"teach",kind:"grammar",nl:"den + n",en:"the (plural dative)",phonetic:"dehn",example:"A: Wem zeigst du das Haus?\nB: Ich zeige den Kindern das Haus.",exampleEn:"A: To whom do you show the house?\nB: I show the house to the children.",note:"Plural die becomes den, and the noun adds -n if it doesn't already end in -n or -s."},
    {type:"teach",kind:"word",nl:"geben",en:"to give",phonetic:"GAY-ben",example:"A: Gibst du mir das Salz?\nB: Ja, ich gebe dir das Salz.",exampleEn:"A: Do you give me the salt?\nB: Yes, I give you the salt.",note:"geben takes dative (receiver) + accusative (thing given). er gibt."},
    {type:"teach",kind:"word",nl:"zeigen",en:"to show",phonetic:"TSYE-gen",example:"A: Zeigst du dem Kind das Bild?\nB: Ja, ich zeige dem Kind das Bild.",exampleEn:"A: Do you show the child the picture?\nB: Yes, I show the child the picture.",note:"zeigen: to show someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"schenken",en:"to give (as a gift)",phonetic:"SHENK-en",example:"A: Was schenkst du der Lehrerin?\nB: Ich schenke der Lehrerin ein Buch.",exampleEn:"A: What do you give the teacher (f)?\nB: I give the teacher a book.",note:"schenken implies a gift. Receiver is always dative."},
    {type:"mc",q:"Which article is the dative form of 'der' (masculine)?",opts:["dem","den","der","des"],ans:"dem",hint:"Think about what replaces der/das in the dative."},
    {type:"mc",q:"Which article is the dative form of 'die' (feminine)?",opts:["der","dem","die","den"],ans:"der",hint:"Feminine dative looks like masculine nominative."},
    {type:"mc",q:"'Ich gebe ___ Frau den Kaffee.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"The woman receives the coffee. Feminine dative article needed."},
    {type:"fb",s:"Ich zeige {1} Kind das Foto.",a:"dem",opts:["dem","den","der","das"],hint:"Kind is neuter. Neuter dative article is the same as masculine dative."},
    {type:"fb",s:"Er schenkt {1} Kindern ein Spiel.",a:"den",opts:["den","dem","der","die"],hint:"Plural dative always uses the same article, plus -n on the noun."},
    {type:"mc",q:"'Wem gibst du das Geschenk?' What does 'wem' ask about?",opts:["The indirect object (dative)","The direct object (accusative)","The subject (nominative)","The location"],ans:"The indirect object (dative)",hint:"Wem asks about the receiver of an action."},
    {type:"fb",s:"Sie gibt {1} Mann die Zeitung.",a:"dem",opts:["dem","der","den","die"],hint:"Mann is masculine. Think about the masculine dative article."},
    {type:"match",pairs:[{nl:"dem Mann",en:"to the man (dat)"},{nl:"der Frau",en:"to the woman (dat)"},{nl:"dem Kind",en:"to the child (dat)"},{nl:"den Kindern",en:"to the children (dat)"}]},
    {type:"mc",q:"Which sentence correctly uses the dative?",opts:["Ich gebe dem Bruder ein Buch.","Ich gebe der Bruder ein Buch.","Ich gebe den Bruder ein Buch.","Ich gebe des Bruder ein Buch."],ans:"Ich gebe dem Bruder ein Buch.",hint:"Bruder is masculine. Which masculine dative article did you learn?"},
    {type:"fb",s:"Wir schenken {1} Lehrerin Blumen.",a:"der",opts:["der","die","dem","den"],hint:"Lehrerin is feminine. Recall the feminine dative article."},
    {type:"mc",q:"In 'Ich zeige den Freunden das Museum', why is it 'den Freunden'?",opts:["Plural dative: den + noun with -n","Accusative plural","Masculine dative singular","Genitive plural"],ans:"Plural dative: den + noun with -n",hint:"Multiple friends receiving something. Think about the plural dative rule."},
    {type:"drag_fill",s:"Er gibt {1} Schwester {2} Geschenk.",blanks:{"1":"der","2":"ein"},pool:["der","dem","ein","den","eine"],hint:"Schwester is feminine (dative). Geschenk is neuter accusative (thing given)."}
  ]},
  {id:"deu11l2",title:"Wem gibst du das?",icon:"🎁",xp:20,board:true,steps:[
    {type:"intro",title:"Wem gibst du das?",desc:"Practice using dative articles with people. Give things, show things, send things: the receiver is always in the dative.",goals:["Use dem/der/dem/den with people","Practice geben, zeigen, schicken, bringen","Form sentences with indirect objects"]},
    {type:"teach",kind:"word",nl:"schicken",en:"to send",phonetic:"SHIK-en",example:"A: Schickst du dem Opa eine Karte?\nB: Ja, ich schicke dem Opa eine Karte.",exampleEn:"A: Do you send grandpa a card?\nB: Yes, I send grandpa a card.",note:"schicken: send someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"bringen",en:"to bring",phonetic:"BRING-en",example:"A: Bringst du der Oma Kuchen?\nB: Ja, ich bringe der Oma Kuchen.",exampleEn:"A: Do you bring grandma cake?\nB: Yes, I bring grandma cake.",note:"bringen: bring someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"der Bruder",en:"the brother",phonetic:"BROO-der",example:"A: Was schenkst du dem Bruder?\nB: Ich schenke dem Bruder eine Uhr.",exampleEn:"A: What do you give your brother?\nB: I give my brother a watch.",note:"Masculine: der Bruder (nom) becomes dem Bruder (dat)."},
    {type:"teach",kind:"word",nl:"die Schwester",en:"the sister",phonetic:"SHVES-ter",example:"A: Zeigst du der Schwester das Foto?\nB: Ja, ich zeige der Schwester das Foto.",exampleEn:"A: Do you show your sister the photo?\nB: Yes, I show my sister the photo.",note:"Feminine: die Schwester (nom) becomes der Schwester (dat)."},
    {type:"teach",kind:"word",nl:"das Baby",en:"the baby",phonetic:"BAY-bee",example:"A: Was gibst du dem Baby?\nB: Ich gebe dem Baby die Milch.",exampleEn:"A: What do you give the baby?\nB: I give the baby the milk.",note:"Neuter: das Baby (nom) becomes dem Baby (dat)."},
    {type:"teach",kind:"phrase",nl:"einem Freund",en:"to a friend (m, dat)",phonetic:"EYE-nem froynt",example:"A: Schickst du einem Freund eine Nachricht?\nB: Ja, ich schicke einem Freund eine Nachricht.",exampleEn:"A: Do you send a friend a message?\nB: Yes, I send a friend a message.",note:"ein becomes einem in masc/neut dative. eine becomes einer in fem dative."},
    {type:"tip",title:"Indefinite Articles in Dative",text:"ein/ein/eine also change in the dative:\nMasc: ein becomes einem\nNeut: ein becomes einem\nFem: eine becomes einer\nSame pattern as dem/dem/der for definite!"},
    {type:"mc",q:"'Ich bringe ___ Mutter einen Tee.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"Mutter is feminine. The receiver of the tea needs a feminine dative article."},
    {type:"fb",s:"Er schickt {1} Vater eine E-Mail.",a:"dem",opts:["dem","der","den","die"],hint:"Vater is masculine. Think about the masculine dative form."},
    {type:"mc",q:"Which sentence means 'I give a friend (f) the book'?",opts:["Ich gebe einer Freundin das Buch.","Ich gebe eine Freundin das Buch.","Ich gebe einem Freundin das Buch.","Ich gebe den Freundin das Buch."],ans:"Ich gebe einer Freundin das Buch.",hint:"Freundin is feminine. What does eine become in the dative?"},
    {type:"fb",s:"Wir zeigen {1} Kindern den Garten.",a:"den",opts:["den","dem","der","die"],hint:"Kindern is plural dative. Recall the plural dative article."},
    {type:"match",pairs:[{nl:"einem Mann",en:"to a man (dat)"},{nl:"einer Frau",en:"to a woman (dat)"},{nl:"einem Kind",en:"to a child (dat)"},{nl:"dem Lehrer",en:"to the teacher (dat)"}]},
    {type:"mc",q:"'Sie bringt dem Baby ___ Flasche.' What goes in the blank?",opts:["eine","einer","einem","ein"],ans:"eine",hint:"Flasche is the thing being brought. It's accusative, not dative."},
    {type:"drag_fill",s:"Ich gebe {1} Bruder {2} Buch.",blanks:{"1":"dem","2":"ein"},pool:["dem","der","ein","eine","einem"],hint:"Bruder receives (dative). Buch is what's given (accusative, neuter)."},
    {type:"fb",s:"Er schenkt {1} Freundin Blumen.",a:"einer",opts:["einer","einem","eine","ein"],hint:"Freundin is feminine. Indefinite feminine article in the dative."},
    {type:"mc",q:"In 'Ich zeige dem Onkel das Auto', who is in the dative?",opts:["dem Onkel","das Auto","Ich","zeige"],ans:"dem Onkel",hint:"The dative marks who receives the showing. Look for dem."},
    {type:"drag_fill",s:"Sie schickt {1} Eltern {2} Brief.",blanks:{"1":"den","2":"einen"},pool:["den","dem","einen","ein","einer"],hint:"Eltern is plural (dative: den Eltern). Brief is masculine accusative."},
    {type:"fb",s:"Ich bringe {1} Nachbarin einen Kuchen.",a:"der",opts:["der","die","dem","den"],hint:"Nachbarin is feminine. The neighbor receives the cake."}
  ]},
  {id:"deu11l3",title:"Mit und zu",icon:"🚌",xp:20,board:true,steps:[
    {type:"intro",title:"Mit und zu",desc:"Two of the most common dative prepositions: mit (with) and zu (to). After these prepositions, articles ALWAYS change to dative.",goals:["Use mit + dative correctly","Use zu + dative correctly","Learn contractions zum and zur"]},
    {type:"teach",kind:"grammar",nl:"mit + Dativ",en:"with + dative",phonetic:"mit",example:"A: Wie fährst du zur Arbeit?\nB: Ich fahre mit dem Bus.",exampleEn:"A: How do you get to work?\nB: I go by bus.",note:"mit always takes dative. mit dem Bus, mit der Bahn, mit dem Auto."},
    {type:"teach",kind:"grammar",nl:"zu + Dativ",en:"to + dative",phonetic:"tsoo",example:"A: Wohin gehst du?\nB: Ich gehe zum Arzt.",exampleEn:"A: Where are you going?\nB: I'm going to the doctor.",note:"zu always takes dative. zu + dem = zum, zu + der = zur."},
    {type:"teach",kind:"phrase",nl:"zum (zu + dem)",en:"to the (m/n, contraction)",phonetic:"tsum",example:"A: Gehst du zum Supermarkt?\nB: Ja, ich gehe zum Supermarkt.",exampleEn:"A: Are you going to the supermarket?\nB: Yes, I'm going to the supermarket.",note:"zum is the contraction of zu + dem. Used with masculine and neuter nouns."},
    {type:"teach",kind:"phrase",nl:"zur (zu + der)",en:"to the (f, contraction)",phonetic:"tsoor",example:"A: Fährst du zur Uni?\nB: Ja, ich fahre zur Uni.",exampleEn:"A: Are you going to the university?\nB: Yes, I'm going to the university.",note:"zur is the contraction of zu + der. Used with feminine nouns."},
    {type:"teach",kind:"phrase",nl:"mit dem Zug",en:"by train",phonetic:"mit dehm tsook",example:"A: Fährst du mit dem Zug?\nB: Ja, ich fahre mit dem Zug nach Hamburg.",exampleEn:"A: Are you going by train?\nB: Yes, I'm going to Hamburg by train.",note:"Zug is masculine. mit + dem Zug. Common transport phrase."},
    {type:"teach",kind:"phrase",nl:"mit der Straßenbahn",en:"by tram",phonetic:"mit dehr SHTRAH-sen-bahn",example:"A: Wie kommst du zur Schule?\nB: Ich fahre mit der Straßenbahn.",exampleEn:"A: How do you get to school?\nB: I go by tram.",note:"Straßenbahn is feminine. mit + der Straßenbahn."},
    {type:"tip",title:"Dative Prepositions: Always Dative!",text:"These prepositions ALWAYS take dative:\nmit (with/by), zu (to), bei (at/near)\nnach (to/after), von (from/of), aus (from/out of)\nseit (since/for), gegenüber (opposite)\nMemory trick: Mit zu bei, nach von aus, seit gegenüber."},
    {type:"mc",q:"'Ich fahre ___ dem Auto.' Which preposition fits?",opts:["mit","zu","in","auf"],ans:"mit",hint:"Which dative preposition means 'by' for transportation?"},
    {type:"fb",s:"Er geht {1} Bäcker.",a:"zum",opts:["zum","zur","zu dem","mit dem"],hint:"Bäcker is masculine. zu + dem contracts to a single word."},
    {type:"mc",q:"'Sie fährt ___ Schule.' Which contraction is correct?",opts:["zur","zum","zu die","mit der"],ans:"zur",hint:"Schule is feminine. zu + der contracts to a short word."},
    {type:"fb",s:"Wir fahren mit {1} Straßenbahn.",a:"der",opts:["der","dem","die","den"],hint:"Straßenbahn is feminine. After mit, use the feminine dative article."},
    {type:"mc",q:"Which is correct: 'Ich gehe zum Arzt' or 'Ich gehe zu dem Arzt'?",opts:["Both are correct, but zum is more common","Only zum is correct","Only zu dem is correct","Neither is correct"],ans:"Both are correct, but zum is more common",hint:"Contractions are standard in spoken and written German, but the full form is not wrong."},
    {type:"fb",s:"Sie fährt mit {1} Fahrrad zur Arbeit.",a:"dem",opts:["dem","der","den","das"],hint:"Fahrrad is neuter. After mit, neuter nouns need the same article as masculine dative."},
    {type:"match",pairs:[{nl:"mit dem Bus",en:"by bus"},{nl:"mit der Bahn",en:"by train/rail"},{nl:"zum Arzt",en:"to the doctor"},{nl:"zur Schule",en:"to school"}]},
    {type:"drag_fill",s:"Ich gehe {1} Supermarkt und fahre {2} dem Bus nach Hause.",blanks:{"1":"zum","2":"mit"},pool:["zum","zur","mit","von","bei"],hint:"First blank: to the supermarket (masc). Second blank: by bus."},
    {type:"mc",q:"'Er geht mit ___ Schwester zum Park.' Fill in the blank.",opts:["der","die","dem","den"],ans:"der",hint:"Schwester is feminine. After mit, feminine nouns take which dative article?"},
    {type:"fb",s:"Wir gehen {1} Bahnhof.",a:"zum",opts:["zum","zur","mit dem","bei dem"],hint:"Bahnhof is masculine. Going to a place uses zu + dative."},
    {type:"drag_fill",s:"Sie fährt {1} der U-Bahn {2} Universität.",blanks:{"1":"mit","2":"zur"},pool:["mit","zur","zum","von","bei"],hint:"By subway (fem preposition). To the university (fem contraction)."}
  ]},
  {id:"deu11l4",title:"Bei, nach und von",icon:"🏠",xp:20,board:true,steps:[
    {type:"intro",title:"Bei, nach und von",desc:"Three more dative prepositions: bei (at/near), nach (to/after), and von (from/of). These are essential for talking about locations and origins.",goals:["Use bei + dative (at someone's place, at work)","Use nach + dative (to cities/countries, after)","Use von + dative (from, of)"]},
    {type:"teach",kind:"grammar",nl:"bei + Dativ",en:"at / near / at someone's place",phonetic:"bye",example:"A: Wo bist du?\nB: Ich bin beim Arzt.",exampleEn:"A: Where are you?\nB: I'm at the doctor's.",note:"bei + dem = beim. Used for 'at someone's place' or 'at a professional'."},
    {type:"teach",kind:"grammar",nl:"nach + Dativ",en:"to (cities/countries) / after",phonetic:"nahkh",example:"A: Wohin fliegst du?\nB: Ich fliege nach Berlin.",exampleEn:"A: Where are you flying to?\nB: I'm flying to Berlin.",note:"nach is used for cities and most countries (no article). Also means 'after'."},
    {type:"teach",kind:"grammar",nl:"von + Dativ",en:"from / of",phonetic:"fon",example:"A: Woher kommst du?\nB: Ich komme von der Arbeit.",exampleEn:"A: Where are you coming from?\nB: I'm coming from work.",note:"von + dem = vom. Indicates origin or belonging."},
    {type:"teach",kind:"phrase",nl:"beim (bei + dem)",en:"at the (m/n, contraction)",phonetic:"byme",example:"A: Wo ist Papa?\nB: Er ist beim Friseur.",exampleEn:"A: Where is Dad?\nB: He's at the hairdresser's.",note:"beim = bei + dem. Very common in everyday speech."},
    {type:"teach",kind:"phrase",nl:"vom (von + dem)",en:"from the (m/n, contraction)",phonetic:"fom",example:"A: Woher kommst du?\nB: Ich komme vom Bahnhof.",exampleEn:"A: Where are you coming from?\nB: I'm coming from the train station.",note:"vom = von + dem. Used with masculine and neuter nouns."},
    {type:"teach",kind:"phrase",nl:"nach dem Essen",en:"after the meal",phonetic:"nahkh dehm ES-en",example:"A: Wann trinkst du Kaffee?\nB: Ich trinke Kaffee nach dem Essen.",exampleEn:"A: When do you drink coffee?\nB: I drink coffee after the meal.",note:"nach also means 'after'. nach + dative for time expressions."},
    {type:"tip",title:"Nach for Places vs. Zu for Places",text:"nach is for cities, countries, and directions:\nnach Berlin, nach Deutschland, nach Hause\nzu is for people and specific places:\nzum Arzt, zur Schule, zu meiner Mutter\nBoth take dative, but the usage differs!"},
    {type:"mc",q:"'Ich bin ___ Arzt.' Which contraction means 'at the doctor's'?",opts:["beim","vom","zum","im"],ans:"beim",hint:"Which preposition means 'at someone's place'? Contract it with dem."},
    {type:"fb",s:"Sie kommt {1} der Uni.",a:"von",opts:["von","bei","nach","mit"],hint:"Coming FROM a place. Which dative preposition expresses origin?"},
    {type:"mc",q:"Which is correct for 'I'm flying to Munich'?",opts:["Ich fliege nach München.","Ich fliege zu München.","Ich fliege bei München.","Ich fliege von München."],ans:"Ich fliege nach München.",hint:"Cities and countries without articles use a specific preposition."},
    {type:"fb",s:"Er trinkt Tee {1} dem Frühstück.",a:"nach",opts:["nach","bei","von","mit"],hint:"He drinks tea AFTER breakfast. Which preposition means 'after'?"},
    {type:"match",pairs:[{nl:"beim Arzt",en:"at the doctor's"},{nl:"vom Bahnhof",en:"from the station"},{nl:"nach Berlin",en:"to Berlin"},{nl:"bei der Arbeit",en:"at work"}]},
    {type:"mc",q:"'Er kommt ___ Büro.' Which contraction means 'from the office'?",opts:["vom","beim","zum","im"],ans:"vom",hint:"Coming from a place. Büro is neuter. von + dem = ?"},
    {type:"fb",s:"Wir sind {1} Freunden.",a:"bei",opts:["bei","von","nach","mit"],hint:"We are AT our friends' place. Which preposition expresses location at someone's?"},
    {type:"drag_fill",s:"Ich komme {1} der Schule und gehe {2} Hause.",blanks:{"1":"von","2":"nach"},pool:["von","nach","bei","mit","zu"],hint:"Coming FROM school, going home. 'nach Hause' is a fixed expression."},
    {type:"mc",q:"'Wir fahren nach ___ Essen nach Hause.' Which article fits?",opts:["dem","der","die","das"],ans:"dem",hint:"After the meal (Essen is neuter). nach + neuter dative article."},
    {type:"fb",s:"Sie arbeitet {1} Siemens.",a:"bei",opts:["bei","von","nach","mit"],hint:"She works AT a company. Which preposition is used for workplace?"},
    {type:"drag_fill",s:"Er kommt {1} Friseur und fährt {2} Berlin.",blanks:{"1":"vom","2":"nach"},pool:["vom","zum","nach","bei","mit"],hint:"FROM the hairdresser (masc, contracted). TO a city."}
  ]},
  {id:"deu11l5",title:"Aus, seit und gegenüber",icon:"🌍",xp:20,board:true,steps:[
    {type:"intro",title:"Aus, seit und gegenüber",desc:"Three more dative prepositions: aus (from/out of), seit (since/for), and gegenüber (opposite/across from). These complete the set!",goals:["Use aus + dative for origin","Use seit + dative for duration","Use gegenüber + dative for position"]},
    {type:"teach",kind:"grammar",nl:"aus + Dativ",en:"from / out of",phonetic:"ows",example:"A: Woher kommst du?\nB: Ich komme aus der Türkei.",exampleEn:"A: Where are you from?\nB: I'm from Turkey.",note:"aus = from (origin, material). aus dem Haus (out of the house), aus der Schweiz (from Switzerland)."},
    {type:"teach",kind:"grammar",nl:"seit + Dativ",en:"since / for (time)",phonetic:"zyte",example:"A: Wie lange wohnst du hier?\nB: Ich wohne seit einem Jahr hier.",exampleEn:"A: How long have you lived here?\nB: I've lived here for a year.",note:"seit expresses duration up to now. German uses PRESENT tense with seit (not perfect)."},
    {type:"teach",kind:"grammar",nl:"gegenüber + Dativ",en:"opposite / across from",phonetic:"GAY-gen-ue-ber",example:"A: Wo ist die Bank?\nB: Die Bank ist gegenüber dem Rathaus.",exampleEn:"A: Where is the bank?\nB: The bank is opposite the town hall.",note:"gegenüber can come before or after the noun: gegenüber dem Park or dem Park gegenüber."},
    {type:"teach",kind:"phrase",nl:"aus dem Haus",en:"out of the house",phonetic:"ows dehm hows",example:"A: Wo ist die Katze?\nB: Sie läuft aus dem Haus.",exampleEn:"A: Where is the cat?\nB: She's running out of the house.",note:"aus + dem (neuter dative). Haus is neuter."},
    {type:"teach",kind:"phrase",nl:"seit drei Monaten",en:"for three months",phonetic:"zyte dry MOH-nah-ten",example:"A: Seit wann lernst du Deutsch?\nB: Seit drei Monaten.",exampleEn:"A: Since when have you been learning German?\nB: For three months.",note:"Plural dative: Monaten (Monat + en). seit + dative plural."},
    {type:"teach",kind:"phrase",nl:"aus der Schweiz",en:"from Switzerland",phonetic:"ows dehr shvytes",example:"A: Woher kommt Anna?\nB: Anna kommt aus der Schweiz.",exampleEn:"A: Where is Anna from?\nB: Anna is from Switzerland.",note:"Die Schweiz (fem). Some countries have articles: die Schweiz, die Türkei, die USA (pl)."},
    {type:"tip",title:"Aus vs. Von vs. Nach",text:"aus = from INSIDE (origin, material)\nvon = from a place/person (general 'from')\nnach = TO cities/countries\n\nIch komme aus Deutschland. (I'm from Germany, origin)\nIch komme von der Arbeit. (I'm coming from work)\nIch fliege nach Deutschland. (I'm flying to Germany)"},
    {type:"mc",q:"'Ich komme ___ der Türkei.' Which preposition means 'from' (origin)?",opts:["aus","von","nach","mit"],ans:"aus",hint:"When talking about where you are originally from, use the preposition for origin."},
    {type:"fb",s:"Sie lernt Deutsch seit {1} Jahr.",a:"einem",opts:["einem","ein","einer","den"],hint:"Jahr is neuter. Indefinite neuter dative article needed."},
    {type:"mc",q:"Which is correct for 'The pharmacy is opposite the church'?",opts:["Die Apotheke ist gegenüber der Kirche.","Die Apotheke ist gegenüber die Kirche.","Die Apotheke ist gegenüber dem Kirche.","Die Apotheke ist gegenüber den Kirche."],ans:"Die Apotheke ist gegenüber der Kirche.",hint:"Kirche is feminine. gegenüber takes which case?"},
    {type:"fb",s:"Der Hund läuft {1} dem Haus.",a:"aus",opts:["aus","von","bei","nach"],hint:"The dog runs OUT OF the house. Which preposition means 'out of'?"},
    {type:"match",pairs:[{nl:"aus der Schweiz",en:"from Switzerland"},{nl:"seit einem Monat",en:"for one month"},{nl:"gegenüber dem Park",en:"opposite the park"},{nl:"aus dem Glas",en:"out of the glass"}]},
    {type:"mc",q:"'Er wohnt hier seit drei ___.' Which noun form is correct?",opts:["Monaten","Monate","Monat","Monats"],ans:"Monaten",hint:"Plural dative nouns add -n. What is the plural of Monat with the dative -n?"},
    {type:"fb",s:"Das Cafe ist {1} der Post.",a:"gegenüber",opts:["gegenüber","neben","aus","seit"],hint:"The cafe is OPPOSITE the post office. Which dative preposition means 'across from'?"},
    {type:"drag_fill",s:"Sie kommt {1} den USA und wohnt {2} zwei Jahren in Berlin.",blanks:{"1":"aus","2":"seit"},pool:["aus","seit","von","nach","mit"],hint:"FROM the USA (origin). FOR two years (duration up to now)."},
    {type:"mc",q:"Why does German use present tense with 'seit'?",opts:["The action is still ongoing now","Seit always requires present tense by rule","Past tense cannot be used with time words","It is a regional dialect feature"],ans:"The action is still ongoing now",hint:"Think about what seit expresses: something started in the past and continues."},
    {type:"fb",s:"Ich trinke Wasser {1} der Flasche.",a:"aus",opts:["aus","von","mit","bei"],hint:"Drinking water OUT OF the bottle. Which preposition expresses 'out of'?"},
    {type:"drag_fill",s:"Er wohnt {1} fünf Jahren {2} dem Bahnhof.",blanks:{"1":"seit","2":"gegenüber"},pool:["seit","gegenüber","aus","von","bei"],hint:"FOR five years (duration). OPPOSITE the train station (position)."}
  ]},
  {id:"deu11l6",title:"Mir, dir, ihm, ihr...",icon:"👤",xp:20,board:true,steps:[
    {type:"intro",title:"Mir, dir, ihm, ihr...",desc:"Personal pronouns also change in the dative! Instead of 'ich' you say 'mir', instead of 'du' you say 'dir'. Learn all the dative pronouns.",goals:["Learn all dative personal pronouns","Use dative pronouns with verbs","Replace dative nouns with pronouns"]},
    {type:"teach",kind:"grammar",nl:"mir",en:"(to) me",phonetic:"meer",example:"A: Gibst du mir das Buch?\nB: Ja, ich gebe dir das Buch.",exampleEn:"A: Do you give me the book?\nB: Yes, I give you the book.",note:"ich (nom) becomes mich (acc) or mir (dat). Dative: the receiver."},
    {type:"teach",kind:"grammar",nl:"dir",en:"(to) you (informal)",phonetic:"deer",example:"A: Kann ich dir helfen?\nB: Ja, bitte hilf mir!",exampleEn:"A: Can I help you?\nB: Yes, please help me!",note:"du (nom) becomes dich (acc) or dir (dat)."},
    {type:"teach",kind:"grammar",nl:"ihm",en:"(to) him / (to) it (m/n)",phonetic:"eem",example:"A: Schenkst du ihm etwas?\nB: Ja, ich schenke ihm ein Buch.",exampleEn:"A: Are you giving him something?\nB: Yes, I'm giving him a book.",note:"er/es (nom) becomes ihn/es (acc) or ihm (dat). Same form for masc and neuter!"},
    {type:"teach",kind:"grammar",nl:"ihr",en:"(to) her",phonetic:"eer",example:"A: Was sagst du ihr?\nB: Ich sage ihr die Wahrheit.",exampleEn:"A: What do you tell her?\nB: I tell her the truth.",note:"sie (nom, she) becomes sie (acc) or ihr (dat). Don't confuse with ihr (you plural)!"},
    {type:"teach",kind:"grammar",nl:"uns",en:"(to) us",phonetic:"oons",example:"A: Zeigt er uns das Haus?\nB: Ja, er zeigt uns das Haus.",exampleEn:"A: Does he show us the house?\nB: Yes, he shows us the house.",note:"wir (nom) becomes uns (acc AND dat). Same form in both cases!"},
    {type:"teach",kind:"grammar",nl:"euch",en:"(to) you (plural)",phonetic:"oykh",example:"A: Bringe ich euch Kaffee?\nB: Ja, bring uns bitte Kaffee!",exampleEn:"A: Shall I bring you (all) coffee?\nB: Yes, please bring us coffee!",note:"ihr (nom, you pl) becomes euch (acc AND dat). Same form in both cases!"},
    {type:"teach",kind:"grammar",nl:"ihnen",en:"(to) them",phonetic:"EE-nen",example:"A: Gibst du ihnen das Geld?\nB: Ja, ich gebe ihnen das Geld.",exampleEn:"A: Do you give them the money?\nB: Yes, I give them the money.",note:"sie (nom, they) becomes sie (acc) or ihnen (dat). Capital Ihnen = formal 'you'."},
    {type:"verb_table",title:"Personal Pronouns: All Cases",label:"Nominative / Accusative / Dative",groups:[{header:"Singular",rows:["ich / mich / mir","du / dich / dir","er / ihn / ihm","sie / sie / ihr","es / es / ihm"]},{header:"Plural",rows:["wir / uns / uns","ihr / euch / euch","sie / sie / ihnen","Sie / Sie / Ihnen"]}],note:"uns and euch are the same in accusative and dative."},
    {type:"mc",q:"'Kannst du ___ helfen?' (me)",opts:["mir","mich","ich","mein"],ans:"mir",hint:"Helfen takes the dative. What is the dative form of ich?"},
    {type:"fb",s:"Ich gebe {1} das Geschenk.",a:"dir",opts:["dir","dich","du","dein"],hint:"I give YOU the gift. Dative form of du needed."},
    {type:"mc",q:"'Sie schickt ___ eine Nachricht.' (him)",opts:["ihm","ihn","er","sein"],ans:"ihm",hint:"She sends HIM a message. The receiver is in the dative."},
    {type:"fb",s:"Er zeigt {1} das Foto.",a:"ihr",opts:["ihr","sie","ihnen","ihre"],hint:"He shows HER the photo. Dative pronoun for 'she' needed."},
    {type:"match",pairs:[{nl:"mir",en:"(to) me"},{nl:"dir",en:"(to) you"},{nl:"ihm",en:"(to) him"},{nl:"ihr",en:"(to) her"},{nl:"ihnen",en:"(to) them"}]},
    {type:"mc",q:"'Bringst du ___ den Kaffee?' (us)",opts:["uns","wir","unser","euch"],ans:"uns",hint:"Bring US the coffee. The dative form of wir is the same as the accusative."},
    {type:"fb",s:"Ich sage {1} die Wahrheit.",a:"euch",opts:["euch","ihr","euer","sie"],hint:"I tell YOU ALL the truth. Dative of ihr (you plural)."},
    {type:"drag_fill",s:"Er gibt {1} das Buch und ich gebe {2} den Stift.",blanks:{"1":"mir","2":"ihm"},pool:["mir","ihm","mich","ihn","dir"],hint:"He gives ME the book (dative of ich). I give HIM the pen (dative of er)."},
    {type:"mc",q:"What is the difference between 'ihnen' and 'Ihnen'?",opts:["ihnen = to them, Ihnen = to you (formal)","ihnen = to you, Ihnen = to them","No difference, both mean 'to them'","ihnen is accusative, Ihnen is dative"],ans:"ihnen = to them, Ihnen = to you (formal)",hint:"Capital letters in German pronouns always signal the formal address form."},
    {type:"fb",s:"Wir schenken {1} Blumen.",a:"ihnen",opts:["ihnen","sie","ihr","ihn"],hint:"We give THEM flowers. Dative plural pronoun needed."}
  ]},
  {id:"deu11l7",title:"Verben mit Dativ",icon:"💬",xp:20,board:true,steps:[
    {type:"intro",title:"Verben mit Dativ",desc:"Some German verbs ALWAYS take dative, not accusative. The most common: helfen, gefallen, gehören, danken, gratulieren. Master these essential dative verbs.",goals:["Learn verbs that always take dative","Use helfen, gefallen, gehören correctly","Practice danken and gratulieren with dative"]},
    {type:"teach",kind:"word",nl:"helfen",en:"to help",phonetic:"HEL-fen",example:"A: Kannst du mir helfen?\nB: Ja, ich helfe dir gern!",exampleEn:"A: Can you help me?\nB: Yes, I'll gladly help you!",note:"helfen + dative. NOT 'ich helfe dich'. er hilft (vowel change!)."},
    {type:"teach",kind:"word",nl:"gefallen",en:"to please / to like (lit.)",phonetic:"geh-FAL-en",example:"A: Gefällt dir das Kleid?\nB: Ja, es gefällt mir sehr gut!",exampleEn:"A: Do you like the dress?\nB: Yes, I like it a lot!",note:"gefallen + dative. The THING is the subject. 'Das Kleid gefällt mir' = The dress pleases me."},
    {type:"teach",kind:"word",nl:"gehören",en:"to belong to",phonetic:"geh-HER-en",example:"A: Wem gehört das Buch?\nB: Es gehört dem Lehrer.",exampleEn:"A: Whose book is this?\nB: It belongs to the teacher.",note:"gehören + dative. The owner is in the dative."},
    {type:"teach",kind:"word",nl:"danken",en:"to thank",phonetic:"DANK-en",example:"A: Ich danke dir für die Hilfe!\nB: Gern geschehen!",exampleEn:"A: I thank you for the help!\nB: You're welcome!",note:"danken + dative. 'Ich danke dir' not 'Ich danke dich'."},
    {type:"teach",kind:"word",nl:"gratulieren",en:"to congratulate",phonetic:"grah-too-LEE-ren",example:"A: Ich gratuliere dir zum Geburtstag!\nB: Vielen Dank!",exampleEn:"A: Happy birthday! (I congratulate you)\nB: Thank you very much!",note:"gratulieren + dative. Used for birthdays, achievements, etc."},
    {type:"teach",kind:"word",nl:"antworten",en:"to answer (someone)",phonetic:"ANT-vor-ten",example:"A: Antwortest du dem Lehrer?\nB: Ja, ich antworte ihm sofort.",exampleEn:"A: Do you answer the teacher?\nB: Yes, I answer him right away.",note:"antworten + dative for the person. The question itself uses auf + acc."},
    {type:"tip",title:"Why Dative with These Verbs?",text:"These verbs describe a relationship TO someone, not an action ON someone.\nhelfen: giving help TO someone\ngefallen: being pleasing TO someone\ngehören: belonging TO someone\ndanken: giving thanks TO someone\nThink of the dative as the 'beneficiary' case."},
    {type:"mc",q:"'Das Haus ___ meinem Vater.' Which verb means 'belongs to'?",opts:["gehört","gefällt","hilft","dankt"],ans:"gehört",hint:"Which dative verb expresses ownership or belonging?"},
    {type:"fb",s:"Ich {1} dir für das Geschenk.",a:"danke",opts:["danke","helfe","gefalle","gehöre"],hint:"Expressing gratitude for the gift. Which verb means 'to thank'?"},
    {type:"mc",q:"'___ dir die Stadt?' means 'Do you like the city?'",opts:["Gefällt","Gehört","Hilft","Dankt"],ans:"Gefällt",hint:"Which verb literally means 'is pleasing to you'?"},
    {type:"fb",s:"Er {1} dem alten Mann mit den Taschen.",a:"hilft",opts:["hilft","gefällt","gehört","dankt"],hint:"He assists the old man with the bags. Which verb means 'to help'? Watch the vowel change."},
    {type:"match",pairs:[{nl:"helfen",en:"to help (+ dat)"},{nl:"gefallen",en:"to please (+ dat)"},{nl:"gehören",en:"to belong to (+ dat)"},{nl:"danken",en:"to thank (+ dat)"},{nl:"gratulieren",en:"to congratulate (+ dat)"}]},
    {type:"mc",q:"Which sentence is grammatically correct?",opts:["Das Kleid gefällt mir.","Das Kleid gefällt mich.","Ich gefalle das Kleid.","Mir gefällt das Kleid mich."],ans:"Das Kleid gefällt mir.",hint:"With gefallen, the thing liked is the subject. The person is in the dative."},
    {type:"fb",s:"Wir {1} ihm zum Geburtstag.",a:"gratulieren",opts:["gratulieren","danken","helfen","gehören"],hint:"We wish him happy birthday. Which verb means 'to congratulate'?"},
    {type:"drag_fill",s:"Das Auto {1} meinem Bruder und es {2} ihm sehr.",blanks:{"1":"gehört","2":"gefällt"},pool:["gehört","gefällt","hilft","dankt","antwortet"],hint:"The car BELONGS TO my brother and he LIKES it (it pleases him)."},
    {type:"mc",q:"'Sie antwortet ___ Lehrerin.' Which article is correct?",opts:["der","die","dem","den"],ans:"der",hint:"antworten takes dative. Lehrerin is feminine. Feminine dative article?"},
    {type:"drag_fill",s:"Ich {1} dir und {2} dir für alles.",blanks:{"1":"helfe","2":"danke"},pool:["helfe","danke","gefalle","gehöre","antworte"],hint:"I HELP you and THANK you for everything. Both verbs take dative."}
  ]},
  {id:"deu11l8",title:"Dativ-Meister",icon:"🏆",xp:20,board:true,steps:[
    {type:"intro",title:"Dativ-Meister",desc:"Time to combine everything: dative articles, prepositions, pronouns, and verbs. Can you master the dative case?",goals:["Combine dative prepositions with correct articles","Use dative pronouns naturally","Apply dative verbs in context"]},
    {type:"tip",title:"Dative Checklist",text:"Three reasons for dative:\n1. Indirect object: Ich gebe DEM MANN das Buch.\n2. After dative prepositions: mit, zu, bei, nach, von, aus, seit, gegenüber\n3. After dative verbs: helfen, gefallen, gehören, danken, gratulieren, antworten"},
    {type:"mc",q:"'Sie fährt mit ___ Freundin zum Bahnhof.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"mit takes dative. Freundin is feminine. Feminine dative article needed."},
    {type:"fb",s:"Das Buch gehört {1} Schwester.",a:"meiner",opts:["meiner","meine","meinem","mein"],hint:"The book belongs to MY sister. Possessive + feminine noun in dative."},
    {type:"mc",q:"Which sentence correctly uses dative in two places?",opts:["Ich helfe dir mit dem Koffer.","Ich helfe dich mit den Koffer.","Ich helfe dir mit der Koffer.","Ich helfe dich mit dem Koffer."],ans:"Ich helfe dir mit dem Koffer.",hint:"helfen takes dative (dir). mit takes dative (dem Koffer, masculine)."},
    {type:"drag_fill",s:"Er kommt {1} dem Büro und fährt {2} der U-Bahn nach Hause.",blanks:{"1":"aus","2":"mit"},pool:["aus","mit","von","bei","nach"],hint:"OUT OF the office. BY subway."},
    {type:"fb",s:"Gefällt {1} die neue Wohnung?",a:"euch",opts:["euch","ihr","ihnen","dir"],hint:"Do you ALL like the new apartment? Dative plural informal pronoun."},
    {type:"mc",q:"'Ich wohne seit einem Jahr ___ dem Supermarkt.' Which preposition means 'opposite'?",opts:["gegenüber","neben","bei","nach"],ans:"gegenüber",hint:"Which dative preposition means 'across from' or 'opposite'?"},
    {type:"drag_fill",s:"Sie {1} dem Lehrer und {2} ihm für die Hilfe.",blanks:{"1":"antwortet","2":"dankt"},pool:["antwortet","dankt","hilft","gefällt","gehört"],hint:"She ANSWERS the teacher and THANKS him for the help."},
    {type:"fb",s:"Wir gratulieren {1} zum Geburtstag!",a:"Ihnen",opts:["Ihnen","ihnen","Sie","sie"],hint:"We congratulate YOU (formal) on your birthday. Formal dative pronoun starts with a capital."},
    {type:"match",pairs:[{nl:"mit dem Zug",en:"by train"},{nl:"beim Arzt",en:"at the doctor's"},{nl:"vom Bahnhof",en:"from the station"},{nl:"zur Schule",en:"to school"},{nl:"aus der Schweiz",en:"from Switzerland"}]},
    {type:"mc",q:"'Er gibt ___ Kindern Schokolade.' Fill in the blank.",opts:["den","dem","der","die"],ans:"den",hint:"Kindern is plural. Recall the plural dative article."},
    {type:"drag_fill",s:"Ich fahre {1} dem Bus {2} Arzt.",blanks:{"1":"mit","2":"zum"},pool:["mit","zum","zur","von","bei"],hint:"BY bus (preposition + dative). TO the doctor (masc contraction)."},
    {type:"fb",s:"Das Auto gehört {1} Nachbarn.",a:"dem",opts:["dem","der","den","die"],hint:"The car belongs to the neighbor (masc). Dative article for masculine needed."},
    {type:"mc",q:"Which is the correct dative form: 'Ich helfe meinem Bruder' or 'Ich helfe meinen Bruder'?",opts:["Ich helfe meinem Bruder","Ich helfe meinen Bruder","Both are correct","Neither is correct"],ans:"Ich helfe meinem Bruder",hint:"helfen takes dative. Masculine dative possessive: mein becomes meinem."},
    {type:"drag_fill",s:"Sie kommt {1} der Türkei und wohnt {2} drei Jahren in Berlin.",blanks:{"1":"aus","2":"seit"},pool:["aus","seit","von","nach","bei"],hint:"FROM Turkey (origin). FOR three years (ongoing duration)."},
    {type:"mc",q:"Translate: 'Can you help us?'",opts:["Kannst du uns helfen?","Kannst du wir helfen?","Kannst du unser helfen?","Kannst du euch helfen?"],ans:"Kannst du uns helfen?",hint:"Us in dative is the same form as us in accusative."},
    {type:"fb",s:"Die Blumen {1} mir sehr.",a:"gefallen",opts:["gefallen","helfen","gehören","danken"],hint:"The flowers please me. Which verb means 'to be pleasing'? The subject is plural here."},
    {type:"drag_fill",s:"{1} gibst du {2} Geschenk? {3} Mutter!",blanks:{"1":"Wem","2":"das","3":"Der"},pool:["Wem","das","Der","Die","dem"],hint:"TO WHOM (dative question). THE gift (acc neuter). TO THE mother (fem dative, start of sentence)."}
  ]}
]},
{n:13,lang:"de",track:"v1",title:"Größer, schneller, besser!",sub:"Comparatives & Superlatives",icon:"⚖️",level:"A2.2",color:"#7B5EE8",lessons:[
{id:"deu13l1",title:"Schneller als...",icon:"🏃",xp:20,board:true,steps:[
{type:"intro",title:"Schneller als...",desc:"Learn to compare two things using the comparative form with -er and als.",goals:["Form comparatives with -er","Use als to compare two things","Apply Umlaut changes in common comparatives"]},
{type:"teach",kind:"word",nl:"schnell",en:"fast, quick",phonetic:"SHNELL",example:"A: Ist der Zug schnell?\nB: Ja, der Zug ist sehr schnell!",exampleEn:"A: Is the train fast?\nB: Yes, the train is very fast!",note:"Base adjective. Add -er for comparative."},
{type:"teach",kind:"word",nl:"schneller",en:"faster",phonetic:"SHNELL-er",example:"A: Ist der Zug schneller als der Bus?\nB: Ja, viel schneller!",exampleEn:"A: Is the train faster than the bus?\nB: Yes, much faster!",note:"Comparative: schnell + er = schneller."},
{type:"teach",kind:"word",nl:"als",en:"than (in comparisons)",phonetic:"AHLS",example:"A: Wer ist größer, du oder dein Bruder?\nB: Mein Bruder ist größer als ich.",exampleEn:"A: Who is taller, you or your brother?\nB: My brother is taller than me.",note:"Used after comparatives to compare two things."},
{type:"teach",kind:"word",nl:"langsam",en:"slow",phonetic:"LAHNG-zahm",example:"A: Fährt der Bus langsam?\nB: Ja, er ist langsamer als die Straßenbahn.",exampleEn:"A: Does the bus go slowly?\nB: Yes, it is slower than the tram.",note:"langsam + er = langsamer. No Umlaut needed."},
{type:"tip",title:"How comparatives work",text:"Most adjectives: add -er.\nschnell → schneller\nlangsam → langsamer\nklein → kleiner\n\nOne-syllable adjectives with a/o/u often add Umlaut:\nalt → älter\ngroß → größer\njung → jünger\n\nAlways use als (than) after the comparative."},
{type:"teach",kind:"word",nl:"alt",en:"old",phonetic:"AHLT",example:"A: Wie alt ist das Haus?\nB: Es ist sehr alt, älter als die Kirche.",exampleEn:"A: How old is the house?\nB: It is very old, older than the church.",note:"alt → älter (Umlaut change a → ä)."},
{type:"teach",kind:"word",nl:"jung",en:"young",phonetic:"YOONG",example:"A: Ist deine Schwester jünger als du?\nB: Ja, sie ist drei Jahre jünger.",exampleEn:"A: Is your sister younger than you?\nB: Yes, she is three years younger.",note:"jung → jünger (Umlaut change u → ü)."},
{type:"teach",kind:"word",nl:"groß",en:"big, tall",phonetic:"GROHS",example:"A: Der Baum ist groß.\nB: Ja, aber der andere Baum ist noch größer!",exampleEn:"A: The tree is big.\nB: Yes, but the other tree is even bigger!",note:"groß → größer (Umlaut change o → ö)."},
{type:"mc",q:"How do you say 'faster than' in German?",opts:["schneller als","schnell als","schneller wie","mehr schnell als"],ans:"schneller als",hint:"Add -er to the adjective, then the comparison word."},
{type:"fb",s:"Der Zug ist {1} als der Bus.",a:["schneller"],opts:["schneller","schnell","am schnellsten","langsamer"],hint:"Which comparative form of schnell fits here?"},
{type:"mc",q:"What is the comparative of 'alt'?",opts:["älter","alter","alts","mehr alt"],ans:"älter",hint:"One-syllable adjectives with 'a' often get an Umlaut."},
{type:"fb",s:"Mein Bruder ist {1} als ich.",a:["jünger"],opts:["jünger","jung","junger","am jüngsten"],hint:"Think about the Umlaut change for jung."},
{type:"mc",q:"Which word means 'than' in German comparisons?",opts:["als","wie","dass","ob"],ans:"als",hint:"This short word always follows a comparative adjective."},
{type:"match",pairs:[{nl:"schneller",en:"faster"},{nl:"älter",en:"older"},{nl:"jünger",en:"younger"},{nl:"größer",en:"bigger/taller"},{nl:"langsamer",en:"slower"}]},
{type:"fb",s:"Das Haus ist {1} als die Wohnung.",a:["größer"],opts:["größer","groß","großer","am größten"],hint:"groß changes its vowel in the comparative form."},
{type:"teach",kind:"word",nl:"klein",en:"small, short",phonetic:"KLINE",example:"A: Ist dein Hund klein?\nB: Ja, er ist kleiner als dein Hund.",exampleEn:"A: Is your dog small?\nB: Yes, he is smaller than your dog.",note:"klein → kleiner (no Umlaut needed)."},
{type:"mc",q:"'Die Katze ist _____ als der Hund.' Which form completes this?",opts:["kleiner","klein","kleinst","am kleinsten"],ans:"kleiner",hint:"You need the comparative form to compare two things."},
{type:"drag_fill",s:"Mein Auto ist {1} aber dein Auto ist {2}.",blanks:{"1":"langsamer","2":"schneller"},pool:["langsamer","schneller","langsam","schnell"],hint:"Compare the two cars using comparative forms."},
{type:"fb",s:"Berlin ist {1} als München.",a:["größer"],opts:["größer","kleiner","schneller","älter"],hint:"Berlin has about 3.5 million people, Munich about 1.5 million."}
]},
{id:"deu13l2",title:"Am schnellsten!",icon:"🏆",xp:20,board:true,steps:[
{type:"intro",title:"Am schnellsten!",desc:"Learn to express the highest degree with superlatives: am -sten.",goals:["Form superlatives with am + -sten","Recognize Umlaut patterns in superlatives","Compare base, comparative, and superlative forms"]},
{type:"teach",kind:"word",nl:"am schnellsten",en:"the fastest",phonetic:"ahm SHNELL-sten",example:"A: Welches Tier ist am schnellsten?\nB: Der Gepard ist am schnellsten.",exampleEn:"A: Which animal is the fastest?\nB: The cheetah is the fastest.",note:"Superlative: am + adjective + sten."},
{type:"teach",kind:"word",nl:"am größten",en:"the biggest/tallest",phonetic:"ahm GREUS-ten",example:"A: Welche Stadt ist am größten?\nB: Berlin ist am größten.",exampleEn:"A: Which city is the biggest?\nB: Berlin is the biggest.",note:"groß → größer → am größten. Umlaut carries through."},
{type:"teach",kind:"word",nl:"am kleinsten",en:"the smallest",phonetic:"ahm KLINE-sten",example:"A: Welches Zimmer ist am kleinsten?\nB: Das Bad ist am kleinsten.",exampleEn:"A: Which room is the smallest?\nB: The bathroom is the smallest.",note:"klein → kleiner → am kleinsten. No Umlaut."},
{type:"tip",title:"Forming superlatives",text:"Pattern: am + adjective stem + sten\nschnell → am schnellsten\nklein → am kleinsten\n\nWith Umlaut (same as comparative):\nalt → am ältesten\ngroß → am größten\njung → am jüngsten\n\nAfter -d, -t, -s, -z: add -esten\nalt → am ältesten\nkalt → am kältesten"},
{type:"teach",kind:"word",nl:"am ältesten",en:"the oldest",phonetic:"ahm ELL-tess-ten",example:"A: Wer ist am ältesten in deiner Familie?\nB: Mein Großvater ist am ältesten.",exampleEn:"A: Who is the oldest in your family?\nB: My grandfather is the oldest.",note:"alt → älter → am ältesten. Note -esten after -t."},
{type:"teach",kind:"word",nl:"am jüngsten",en:"the youngest",phonetic:"ahm YUENG-sten",example:"A: Wer ist am jüngsten?\nB: Meine Schwester ist am jüngsten.",exampleEn:"A: Who is the youngest?\nB: My sister is the youngest.",note:"jung → jünger → am jüngsten."},
{type:"teach",kind:"word",nl:"am kältesten",en:"the coldest",phonetic:"ahm KELL-tess-ten",example:"A: Welcher Monat ist am kältesten?\nB: Der Januar ist am kältesten.",exampleEn:"A: Which month is the coldest?\nB: January is the coldest.",note:"kalt → kälter → am kältesten. Umlaut + -esten after t."},
{type:"mc",q:"How do you say 'the fastest' in German?",opts:["am schnellsten","am schnellesten","der schnellste","schnellster"],ans:"am schnellsten",hint:"Superlative pattern: am + stem + sten."},
{type:"fb",s:"Der Montblanc ist {1}.",a:["am höchsten"],opts:["am höchsten","am größten","höher","am höhesten"],hint:"Think about the superlative of hoch (high)."},
{type:"mc",q:"Which is the correct superlative of 'alt'?",opts:["am ältesten","am altesten","am älsten","am alsten"],ans:"am ältesten",hint:"Remember the Umlaut AND the extra -e- after -t."},
{type:"match",pairs:[{nl:"am schnellsten",en:"the fastest"},{nl:"am größten",en:"the biggest"},{nl:"am kleinsten",en:"the smallest"},{nl:"am ältesten",en:"the oldest"},{nl:"am jüngsten",en:"the youngest"}]},
{type:"fb",s:"Welcher Monat ist {1}?",a:["am kältesten"],opts:["am kältesten","am kaltesten","kälter","am kältsten"],hint:"kalt needs an Umlaut AND the extra -e- before -sten."},
{type:"mc",q:"'Berlin ist am _____.' Which form means 'the biggest'?",opts:["größten","großsten","größesten","großen"],ans:"größten",hint:"The superlative of groß keeps the Umlaut from the comparative."},
{type:"drag_fill",s:"Er ist {1}, sie ist {2}, aber er ist {3}.",blanks:{"1":"alt","2":"älter","3":"am ältesten"},pool:["alt","älter","am ältesten","jung"],hint:"Fill in the three degrees: base, comparative, superlative."},
{type:"fb",s:"Der Gepard ist {1} als der Löwe.",a:["schneller"],opts:["schneller","am schnellsten","schnell","schnellsten"],hint:"When comparing two things, use the comparative form."},
{type:"mc",q:"When do you add -esten instead of -sten for superlatives?",opts:["After stems ending in -d, -t, -s, or -z","After all vowels","After Umlaut changes","After long adjectives"],ans:"After stems ending in -d, -t, -s, or -z",hint:"Certain consonant endings need an extra -e- for pronunciation."},
{type:"drag_fill",s:"Das Zimmer ist {1} aber die Küche ist {2}.",blanks:{"1":"klein","2":"am kleinsten"},pool:["klein","am kleinsten","kleiner","kleinsten"],hint:"The first blank is the base form, the second is the superlative."},
{type:"fb",s:"Meine Oma ist {1} in der Familie.",a:["am ältesten"],opts:["am ältesten","älter","am altesten","alt"],hint:"Use the superlative to express the highest degree."}
]},
{id:"deu13l3",title:"Gut, besser, am besten",icon:"⭐",xp:20,board:true,steps:[
{type:"intro",title:"Gut, besser, am besten",desc:"Master the most common irregular comparatives and superlatives.",goals:["Learn gut → besser → am besten","Learn viel → mehr → am meisten","Use irregular forms in sentences"]},
{type:"teach",kind:"word",nl:"gut",en:"good, well",phonetic:"GOOT",example:"A: Wie ist das Essen?\nB: Es ist sehr gut!",exampleEn:"A: How is the food?\nB: It is very good!",note:"Base form. Irregular comparative and superlative."},
{type:"teach",kind:"word",nl:"besser",en:"better",phonetic:"BESS-er",example:"A: Ist dieses Restaurant besser?\nB: Ja, es ist viel besser als das andere.",exampleEn:"A: Is this restaurant better?\nB: Yes, it is much better than the other one.",note:"Irregular comparative of gut. Completely different stem."},
{type:"teach",kind:"word",nl:"am besten",en:"the best",phonetic:"ahm BESS-ten",example:"A: Welches Essen schmeckt am besten?\nB: Die Pizza schmeckt am besten!",exampleEn:"A: Which food tastes the best?\nB: The pizza tastes the best!",note:"Irregular superlative of gut."},
{type:"teach",kind:"word",nl:"viel",en:"much, a lot",phonetic:"FEEL",example:"A: Hast du viel Arbeit?\nB: Ja, ich habe sehr viel Arbeit.",exampleEn:"A: Do you have a lot of work?\nB: Yes, I have a lot of work.",note:"Base form. Irregular comparative and superlative."},
{type:"teach",kind:"word",nl:"mehr",en:"more",phonetic:"MAIR",example:"A: Möchtest du mehr Kaffee?\nB: Ja, bitte! Ich brauche heute mehr Kaffee als sonst.",exampleEn:"A: Would you like more coffee?\nB: Yes, please! I need more coffee than usual today.",note:"Irregular comparative of viel. Completely different stem."},
{type:"teach",kind:"word",nl:"am meisten",en:"the most",phonetic:"ahm MY-sten",example:"A: Wer arbeitet am meisten?\nB: Mein Vater arbeitet am meisten.",exampleEn:"A: Who works the most?\nB: My father works the most.",note:"Irregular superlative of viel."},
{type:"tip",title:"Irregular comparisons: the big two",text:"gut → besser → am besten (good, better, best)\nviel → mehr → am meisten (much, more, most)\n\nThese are completely irregular.\nYou must memorize them.\n\nNotice: English does the same!\ngood → better → best\nmuch → more → most"},
{type:"mc",q:"What is the comparative of 'gut'?",opts:["besser","guter","güter","mehr gut"],ans:"besser",hint:"This irregular form has a completely different stem."},
{type:"fb",s:"Dieses Buch ist {1} als das andere.",a:["besser"],opts:["besser","gut","am besten","mehr"],hint:"You are comparing two books. Which irregular comparative fits?"},
{type:"mc",q:"How do you say 'the most' in German?",opts:["am meisten","am mehrsten","am vielsten","mehr als"],ans:"am meisten",hint:"This is the superlative of viel, following the am + sten pattern."},
{type:"fb",s:"Wer hat {1} Geld?",a:["am meisten"],opts:["am meisten","mehr","viel","am besten"],hint:"You want the superlative form meaning 'the most'."},
{type:"match",pairs:[{nl:"gut",en:"good"},{nl:"besser",en:"better"},{nl:"am besten",en:"the best"},{nl:"mehr",en:"more"},{nl:"am meisten",en:"the most"}]},
{type:"drag_fill",s:"Das Essen ist {1}, aber zu Hause schmeckt es {2}.",blanks:{"1":"gut","2":"am besten"},pool:["gut","am besten","besser","mehr"],hint:"Base form first, then the superlative."},
{type:"mc",q:"'Ich trinke _____ Wasser als Saft.' What fits?",opts:["mehr","am meisten","viel","besser"],ans:"mehr",hint:"You are comparing two amounts, so you need the comparative."},
{type:"fb",s:"Sie kocht {1} als ich.",a:["besser"],opts:["besser","am besten","gut","mehr"],hint:"Comparing cooking skills between two people."},
{type:"drag_fill",s:"Er spricht {1} Deutsch, aber sie spricht {2} Deutsch {3} er.",blanks:{"1":"gut","2":"besser","3":"als"},pool:["gut","besser","als","am besten","wie"],hint:"Base form, then comparative form, then the comparison word."},
{type:"mc",q:"Which sentence is correct?",opts:["Pizza schmeckt am besten.","Pizza schmeckt am bessten.","Pizza schmeckt am gusten.","Pizza schmeckt mehr gut."],ans:"Pizza schmeckt am besten.",hint:"Remember the irregular superlative of gut."}
]},
{id:"deu13l4",title:"Lieber und höher",icon:"📈",xp:20,board:true,steps:[
{type:"intro",title:"Lieber und höher",desc:"More irregular comparatives: gern, hoch, nah, and other tricky forms.",goals:["Learn gern → lieber → am liebsten","Learn hoch → höher → am höchsten","Learn nah → näher → am nächsten","Use these forms naturally in context"]},
{type:"teach",kind:"word",nl:"gern",en:"gladly, to like (doing)",phonetic:"GAIRN",example:"A: Spielst du gern Fußball?\nB: Ja, ich spiele sehr gern Fußball!",exampleEn:"A: Do you like playing football?\nB: Yes, I really like playing football!",note:"Used with verbs to express liking an activity."},
{type:"teach",kind:"word",nl:"lieber",en:"rather, prefer (doing)",phonetic:"LEE-ber",example:"A: Möchtest du Tee oder Kaffee?\nB: Ich trinke lieber Kaffee.",exampleEn:"A: Would you like tea or coffee?\nB: I prefer coffee.",note:"Comparative of gern. Expresses preference."},
{type:"teach",kind:"word",nl:"am liebsten",en:"most of all, favorite (doing)",phonetic:"ahm LEEB-sten",example:"A: Was machst du am liebsten?\nB: Am liebsten lese ich Bücher.",exampleEn:"A: What do you like doing most?\nB: Most of all, I like reading books.",note:"Superlative of gern. Your absolute favorite."},
{type:"teach",kind:"word",nl:"hoch",en:"high, tall",phonetic:"HOHKH",example:"A: Ist der Berg hoch?\nB: Ja, er ist sehr hoch!",exampleEn:"A: Is the mountain high?\nB: Yes, it is very high!",note:"Base form. Loses the -c- in comparative."},
{type:"teach",kind:"word",nl:"höher",en:"higher",phonetic:"HEU-er",example:"A: Ist die Zugspitze höher als der Brocken?\nB: Ja, sie ist viel höher.",exampleEn:"A: Is the Zugspitze higher than the Brocken?\nB: Yes, it is much higher.",note:"Irregular: hoch → höher (drops the c, adds Umlaut)."},
{type:"teach",kind:"word",nl:"am höchsten",en:"the highest",phonetic:"ahm HEUKH-sten",example:"A: Welcher Berg ist am höchsten?\nB: Die Zugspitze ist am höchsten in Deutschland.",exampleEn:"A: Which mountain is the highest?\nB: The Zugspitze is the highest in Germany.",note:"hoch → höher → am höchsten."},
{type:"teach",kind:"word",nl:"nah",en:"near, close",phonetic:"NAH",example:"A: Ist der Supermarkt nah?\nB: Ja, er ist ganz nah.",exampleEn:"A: Is the supermarket near?\nB: Yes, it is very close.",note:"nah → näher → am nächsten (very irregular superlative!)."},
{type:"tip",title:"More irregular forms",text:"gern → lieber → am liebsten\n(gladly → rather → most of all)\n\nhoch → höher → am höchsten\n(high → higher → highest)\nNote: hoch drops the -c- in höher.\n\nnah → näher → am nächsten\n(near → nearer → nearest)\nNote: am nächsten also means 'next'."},
{type:"mc",q:"How do you say 'I prefer swimming' in German?",opts:["Ich schwimme lieber.","Ich schwimme gern.","Ich schwimme am liebsten.","Ich schwimme mehr."],ans:"Ich schwimme lieber.",hint:"The comparative of gern expresses preference."},
{type:"fb",s:"Ich lese {1} Bücher.",a:["am liebsten"],opts:["am liebsten","lieber","gern","am besten"],hint:"Express your absolute favorite activity with the superlative of gern."},
{type:"mc",q:"What is the comparative of 'hoch'?",opts:["höher","hocher","höcher","hocherer"],ans:"höher",hint:"This form drops a consonant and adds an Umlaut."},
{type:"fb",s:"Der Bahnhof ist {1} als die Schule.",a:["näher"],opts:["näher","nah","am nächsten","naher"],hint:"You need the comparative of nah to compare distances."},
{type:"match",pairs:[{nl:"gern",en:"gladly"},{nl:"lieber",en:"rather/prefer"},{nl:"am liebsten",en:"most of all"},{nl:"höher",en:"higher"},{nl:"am nächsten",en:"nearest/next"}]},
{type:"drag_fill",s:"Ich esse {1} Pizza, aber {2} esse ich Sushi.",blanks:{"1":"gern","2":"am liebsten"},pool:["gern","am liebsten","lieber","mehr"],hint:"Base form first, then the superlative of gern."},
{type:"mc",q:"'Die Zugspitze ist _____ in Deutschland.' Which form fits?",opts:["am höchsten","höher","hoch","am hochsten"],ans:"am höchsten",hint:"You need the superlative for 'the highest'."},
{type:"fb",s:"Ich koche {1} als ich backe.",a:["lieber"],opts:["lieber","am liebsten","gern","besser"],hint:"Express preference between two activities."},
{type:"drag_fill",s:"Das Hotel ist {1}, das Restaurant ist {2}, aber der Park ist {3}.",blanks:{"1":"nah","2":"näher","3":"am nächsten"},pool:["nah","näher","am nächsten","weit"],hint:"Three degrees: base, comparative, superlative of nah."},
{type:"mc",q:"Which set is correct?",opts:["gern → lieber → am liebsten","gern → gerner → am gernsten","gern → besser → am besten","gern → mehr → am meisten"],ans:"gern → lieber → am liebsten",hint:"This is a fully irregular set, like good/better/best in English."}
]},
{id:"deu13l5",title:"Der große Mann",icon:"👔",xp:20,board:true,steps:[
{type:"intro",title:"Der große Mann",desc:"Learn how adjectives change their endings after der, die, das (definite articles).",goals:["Understand adjective endings after definite articles","Apply correct endings for nominative case","Recognize the pattern: definite article does the heavy lifting"]},
{type:"tip",title:"Adjective endings after der/die/das",text:"When an adjective comes between a definite article and a noun, it gets a weak ending.\n\nNominative case:\nder große Mann (the tall man)\ndie kleine Frau (the short woman)\ndas alte Haus (the old house)\ndie netten Leute (the nice people)\n\nPattern: after der/die/das, the adjective usually ends in -e (singular) or -en (plural)."},
{type:"teach",kind:"phrase",nl:"der große Mann",en:"the tall man",phonetic:"dair GROH-se MAHN",example:"A: Siehst du den großen Mann dort?\nB: Ja, der große Mann ist mein Nachbar.",exampleEn:"A: Do you see the tall man there?\nB: Yes, the tall man is my neighbor.",note:"After der (masc. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"die kleine Frau",en:"the short woman",phonetic:"dee KLINE-e FROW",example:"A: Kennst du die kleine Frau?\nB: Ja, die kleine Frau arbeitet im Supermarkt.",exampleEn:"A: Do you know the short woman?\nB: Yes, the short woman works in the supermarket.",note:"After die (fem. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"das alte Haus",en:"the old house",phonetic:"dahs AHL-te HOWS",example:"A: Ist das alte Haus noch bewohnt?\nB: Ja, das alte Haus gehört meiner Oma.",exampleEn:"A: Is the old house still inhabited?\nB: Yes, the old house belongs to my grandma.",note:"After das (neut. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"die netten Leute",en:"the nice people",phonetic:"dee NET-en LOY-te",example:"A: Wer sind die netten Leute?\nB: Die netten Leute sind unsere neuen Nachbarn.",exampleEn:"A: Who are the nice people?\nB: The nice people are our new neighbors.",note:"Plural (all genders): adjective gets -en."},
{type:"teach",kind:"word",nl:"schön",en:"beautiful, nice",phonetic:"SHEUN",example:"A: Die schöne Stadt gefällt mir.\nB: Ja, die schöne Altstadt ist besonders toll.",exampleEn:"A: I like the beautiful city.\nB: Yes, the beautiful old town is especially great.",note:"After die (fem.): die schöne Stadt."},
{type:"teach",kind:"word",nl:"neu",en:"new",phonetic:"NOY",example:"A: Wie ist das neue Auto?\nB: Das neue Auto fährt sehr gut.",exampleEn:"A: How is the new car?\nB: The new car drives very well.",note:"After das (neut.): das neue Auto."},
{type:"mc",q:"'Der _____ Hund schläft.' Which ending is correct?",opts:["kleine","kleinen","kleiner","klein"],ans:"kleine",hint:"After der (masc. nominative), adjectives get a weak ending."},
{type:"fb",s:"Die {1} Frau lacht.",a:["nette"],opts:["nette","netten","netter","nett"],hint:"After die (fem. nominative), the adjective ending is weak."},
{type:"mc",q:"'Das _____ Kind spielt.' What goes in the blank?",opts:["kleine","kleinen","kleiner","klein"],ans:"kleine",hint:"After das (neuter nominative), same ending as masculine."},
{type:"fb",s:"Die {1} Kinder spielen im Park.",a:["kleinen"],opts:["kleinen","kleine","kleiner","klein"],hint:"In the plural, the adjective ending changes."},
{type:"match",pairs:[{nl:"der große Mann",en:"the tall man"},{nl:"die kleine Frau",en:"the short woman"},{nl:"das alte Haus",en:"the old house"},{nl:"die netten Leute",en:"the nice people"}]},
{type:"mc",q:"What ending do adjectives get after definite articles in singular nominative?",opts:["-e","-en","-er","-es"],ans:"-e",hint:"Singular nominative is the simplest case for weak endings."},
{type:"fb",s:"Der {1} Film ist sehr spannend.",a:["neue"],opts:["neue","neuen","neuer","neu"],hint:"After der (masc. nominative), the weak adjective ending applies."},
{type:"drag_fill",s:"Die {1} Katze und der {2} Hund sind Freunde.",blanks:{"1":"kleine","2":"große"},pool:["kleine","große","kleinen","großen"],hint:"Both are singular nominative after definite articles."},
{type:"mc",q:"Which is correct?",opts:["die schönen Blumen","die schöne Blumen","die schöner Blumen","die schön Blumen"],ans:"die schönen Blumen",hint:"Plural adjective endings after definite articles are different from singular."},
{type:"fb",s:"Das {1} Restaurant ist am Marktplatz.",a:["neue"],opts:["neue","neuen","neuer","neu"],hint:"After das (neuter nominative), the adjective takes the weak ending."}
]},
{id:"deu13l6",title:"Ein großer Mann",icon:"🎩",xp:20,board:true,steps:[
{type:"intro",title:"Ein großer Mann",desc:"Learn how adjective endings change after ein, eine, ein (indefinite articles).",goals:["Understand adjective endings after indefinite articles","See the difference from definite article endings","Apply strong endings where ein gives no signal"]},
{type:"tip",title:"Adjective endings after ein/eine/ein",text:"After indefinite articles, adjectives sometimes do the 'signaling'.\n\nNominative:\nein großer Mann (a tall man) \u2192 -er\neine kleine Frau (a short woman) \u2192 -e\nein altes Haus (an old house) \u2192 -es\n\nWhy? ein has no ending for masc/neut.\nSo the ADJECTIVE takes over the signal:\n-er for masculine, -es for neuter.\nFeminine eine already signals, so adjective stays -e."},
{type:"teach",kind:"phrase",nl:"ein großer Mann",en:"a tall man",phonetic:"ine GROH-ser MAHN",example:"A: Wer ist das?\nB: Das ist ein großer Mann mit einem Hut.",exampleEn:"A: Who is that?\nB: That is a tall man with a hat.",note:"ein (no ending) + großer (-er signals masculine)."},
{type:"teach",kind:"phrase",nl:"eine kleine Frau",en:"a short woman",phonetic:"INE-e KLINE-e FROW",example:"A: Siehst du die Frau dort?\nB: Ja, eine kleine Frau mit roten Haaren.",exampleEn:"A: Do you see the woman there?\nB: Yes, a short woman with red hair.",note:"eine already signals feminine, so adjective gets -e."},
{type:"teach",kind:"phrase",nl:"ein altes Haus",en:"an old house",phonetic:"ine AHL-tes HOWS",example:"A: Was ist das?\nB: Das ist ein altes Haus aus dem 18. Jahrhundert.",exampleEn:"A: What is that?\nB: That is an old house from the 18th century.",note:"ein (no ending) + altes (-es signals neuter)."},
{type:"teach",kind:"word",nl:"lang",en:"long",phonetic:"LAHNG",example:"A: Hast du einen langen Weg zur Arbeit?\nB: Nein, es ist ein kurzer Weg.",exampleEn:"A: Do you have a long way to work?\nB: No, it is a short way.",note:"ein kurzer Weg = a short way (masc. nom. + adjective)."},
{type:"teach",kind:"word",nl:"kurz",en:"short (length)",phonetic:"KOORTS",example:"A: Der Film ist kurz.\nB: Ja, ein kurzer Film, aber sehr gut!",exampleEn:"A: The film is short.\nB: Yes, a short film, but very good!",note:"kurz → kürzer → am kürzesten (Umlaut in comparative)."},
{type:"mc",q:"'Ein _____ Kind spielt im Garten.' Which ending?",opts:["kleines","kleine","kleiner","klein"],ans:"kleines",hint:"After ein (neuter), the adjective must signal the gender."},
{type:"fb",s:"Das ist {1} Mann.",a:["ein großer"],opts:["ein großer","ein große","ein großes","einer großer"],hint:"Masculine nominative: ein has no ending, so the adjective signals."},
{type:"mc",q:"Why does 'ein großer Mann' have -er but 'der große Mann' has -e?",opts:["Because ein has no masculine signal, so the adjective takes over","Because ein is informal","Because der is always -e","Because masculine always gets -er"],ans:"Because ein has no masculine signal, so the adjective takes over",hint:"The adjective compensates when the article cannot show gender."},
{type:"fb",s:"Ich sehe {1} Katze.",a:["eine kleine"],opts:["eine kleine","ein kleiner","eine kleiner","ein kleine"],hint:"Feminine: eine already signals, so the adjective stays simple."},
{type:"match",pairs:[{nl:"ein großer Mann",en:"a tall man (-er)"},{nl:"eine kleine Frau",en:"a short woman (-e)"},{nl:"ein altes Haus",en:"an old house (-es)"},{nl:"der große Mann",en:"the tall man (-e)"},{nl:"das alte Haus",en:"the old house (-e)"}]},
{type:"mc",q:"'Eine _____ Tasche liegt auf dem Tisch.' Which ending?",opts:["schöne","schöner","schönes","schönen"],ans:"schöne",hint:"After eine (feminine), the adjective takes the simple ending."},
{type:"drag_fill",s:"{1} Hund und {2} Katze spielen zusammen.",blanks:{"1":"ein kleiner","2":"eine große"},pool:["ein kleiner","eine große","ein kleines","eine kleiner"],hint:"Masc. nom. gets -er signal, fem. nom. gets -e."},
{type:"fb",s:"Das ist {1} Buch.",a:["ein gutes"],opts:["ein gutes","ein guter","ein gute","eine gutes"],hint:"Neuter nominative: ein has no ending, so adjective gets -es."},
{type:"mc",q:"Which pair shows the correct difference?",opts:["der alte Mann / ein alter Mann","der alter Mann / ein alte Mann","der altes Mann / ein alte Mann","der alten Mann / ein alter Mann"],ans:"der alte Mann / ein alter Mann",hint:"After der: -e ending. After ein (masc.): -er ending."},
{type:"drag_fill",s:"Hier ist {1} und dort ist {2}.",blanks:{"1":"ein neues Auto","2":"ein alter Bus"},pool:["ein neues Auto","ein alter Bus","ein neue Auto","ein altes Bus"],hint:"Neuter gets -es signal, masculine gets -er signal after ein."},
{type:"fb",s:"Er hat {1} Idee.",a:["eine gute"],opts:["eine gute","ein guter","eine guter","ein gutes"],hint:"Idee is feminine. After eine, the adjective takes what ending?"}
]},
{id:"deu13l7",title:"So groß wie...",icon:"🤝",xp:20,board:true,steps:[
{type:"intro",title:"So groß wie...",desc:"Learn to express equality and inequality: so...wie, genauso...wie, nicht so...wie.",goals:["Use so...wie for equal comparisons","Use nicht so...wie for inequality","Use genauso...wie for emphasis"]},
{type:"teach",kind:"phrase",nl:"so ... wie",en:"as ... as",phonetic:"zoh ... vee",example:"A: Ist Tom so groß wie Peter?\nB: Ja, er ist genau so groß wie Peter.",exampleEn:"A: Is Tom as tall as Peter?\nB: Yes, he is exactly as tall as Peter.",note:"For equal comparisons. Use the base adjective (not comparative)."},
{type:"teach",kind:"phrase",nl:"genauso ... wie",en:"just as ... as",phonetic:"ge-NOW-zoh ... vee",example:"A: Ist das Buch genauso gut wie der Film?\nB: Ja, das Buch ist genauso gut!",exampleEn:"A: Is the book just as good as the film?\nB: Yes, the book is just as good!",note:"Stronger version of so...wie. Emphasizes equality."},
{type:"teach",kind:"phrase",nl:"nicht so ... wie",en:"not as ... as",phonetic:"nikht zoh ... vee",example:"A: Ist der Bus so schnell wie der Zug?\nB: Nein, der Bus ist nicht so schnell wie der Zug.",exampleEn:"A: Is the bus as fast as the train?\nB: No, the bus is not as fast as the train.",note:"For inequality. Base adjective, not comparative."},
{type:"teach",kind:"word",nl:"genauso",en:"just as, equally",phonetic:"ge-NOW-zoh",example:"A: Kocht dein Vater gut?\nB: Ja, er kocht genauso gut wie meine Mutter.",exampleEn:"A: Does your father cook well?\nB: Yes, he cooks just as well as my mother.",note:"Emphasizes that two things are equal."},
{type:"tip",title:"Comparing equals vs. unequals",text:"Equal: so + adjective + wie\nDer Tee ist so heiß wie der Kaffee.\n\nStrong equal: genauso + adjective + wie\nSie ist genauso klug wie er.\n\nnot equal: nicht so + adjective + wie\nDer Winter ist nicht so warm wie der Sommer.\n\nRemember: use the BASE form of the adjective.\nNEVER: so schneller wie (wrong!)\nALWAYS: so schnell wie (correct!)"},
{type:"mc",q:"How do you say 'as big as' in German?",opts:["so groß wie","so größer wie","so groß als","mehr groß wie"],ans:"so groß wie",hint:"Equal comparisons use the base adjective form with specific framing words."},
{type:"fb",s:"Der Tee ist {1} heiß wie der Kaffee.",a:["so"],opts:["so","als","mehr","sehr"],hint:"Which word starts an equal comparison?"},
{type:"mc",q:"'Berlin ist nicht so klein _____ Hamburg.' What completes this?",opts:["wie","als","so","dass"],ans:"wie",hint:"In equal and unequal comparisons, the second element uses the same word."},
{type:"fb",s:"Mein Auto ist nicht {1} schnell wie dein Auto.",a:["so"],opts:["so","als","sehr","mehr"],hint:"This word begins the 'not as ... as' construction."},
{type:"match",pairs:[{nl:"so ... wie",en:"as ... as"},{nl:"genauso ... wie",en:"just as ... as"},{nl:"nicht so ... wie",en:"not as ... as"},{nl:"schneller als",en:"faster than"},{nl:"am schnellsten",en:"the fastest"}]},
{type:"drag_fill",s:"Sie ist {1} klug {2} ihr Bruder.",blanks:{"1":"genauso","2":"wie"},pool:["genauso","wie","als","so"],hint:"Express that she is equally smart. Use the emphatic form."},
{type:"mc",q:"Which sentence is correct?",opts:["Er läuft so schnell wie ich.","Er läuft so schneller wie ich.","Er läuft so schnell als ich.","Er läuft schnell so wie ich."],ans:"Er läuft so schnell wie ich.",hint:"Equal comparisons need the base form, not the comparative."},
{type:"fb",s:"Das Buch ist {1} gut wie der Film.",a:["genauso"],opts:["genauso","nicht","so","als"],hint:"Use the emphatic 'just as' form here."},
{type:"drag_fill",s:"Der Winter ist {1} warm {2} der Sommer.",blanks:{"1":"nicht so","2":"wie"},pool:["nicht so","wie","als","genauso"],hint:"Express inequality: winter is NOT as warm as summer."},
{type:"mc",q:"When comparing with als vs. wie: which is correct?",opts:["als after comparatives, wie after so/genauso","wie after comparatives, als after so/genauso","They are interchangeable","als is formal, wie is informal"],ans:"als after comparatives, wie after so/genauso",hint:"Each comparison structure has its own connecting word."},
{type:"fb",s:"Deutsch ist nicht {1} schwer wie Chinesisch.",a:["so"],opts:["so","als","mehr","sehr"],hint:"Express that German is not as difficult as Chinese."},
{type:"drag_fill",s:"Pizza ist {1} {2} Pasta, aber Sushi ist {3} als beide.",blanks:{"1":"genauso","2":"gut wie","3":"besser"},pool:["genauso","gut wie","besser","so"],hint:"First equal comparison, then a comparative."}
]},
{id:"deu13l8",title:"Alles zusammen!",icon:"🎯",xp:20,board:true,steps:[
{type:"intro",title:"Alles zusammen!",desc:"Review everything: comparatives, superlatives, irregular forms, adjective endings, and equal comparisons.",goals:["Combine all comparison forms","Mix regular and irregular forms","Apply adjective declension in comparisons"]},
{type:"mc",q:"What is the correct comparative form of 'gern'?",opts:["lieber","gerner","mehr gern","am liebsten"],ans:"lieber",hint:"This is one of the fully irregular comparison sets."},
{type:"fb",s:"Der Mount Everest ist {1} Berg der Welt.",a:["der höchste"],opts:["der höchste","am höchsten","höher","ein hoher"],hint:"Use the superlative with a definite article before the noun."},
{type:"mc",q:"'Ein _____ Mädchen singt.' What ending?",opts:["kleines","kleine","kleiner","klein"],ans:"kleines",hint:"Mädchen is neuter. After ein (neuter), the adjective signals the gender."},
{type:"drag_fill",s:"Mein Bruder ist {1} als ich, aber meine Schwester ist {2}.",blanks:{"1":"älter","2":"am ältesten"},pool:["älter","am ältesten","alt","jünger"],hint:"Comparative for the brother, superlative for the sister."},
{type:"fb",s:"Die Suppe ist {1} heiß wie der Tee.",a:["genauso"],opts:["genauso","mehr","als","nicht"],hint:"Express that both are equally hot."},
{type:"mc",q:"Which is correct?",opts:["Das ist der beste Film.","Das ist der besserte Film.","Das ist der am besten Film.","Das ist der gutste Film."],ans:"Das ist der beste Film.",hint:"Before a noun with definite article, use the adjective form of the superlative."},
{type:"match",pairs:[{nl:"besser als",en:"better than"},{nl:"am besten",en:"the best"},{nl:"so gut wie",en:"as good as"},{nl:"der beste Film",en:"the best film"},{nl:"ein guter Film",en:"a good film"}]},
{type:"fb",s:"Sie ist {1} als er, aber nicht so groß wie Maria.",a:["größer"],opts:["größer","am größten","groß","so groß"],hint:"Comparing two people requires the comparative form."},
{type:"drag_fill",s:"{1} Katze ist {2} als {3} Hund.",blanks:{"1":"die kleine","2":"schneller","3":"der große"},pool:["die kleine","schneller","der große","ein kleiner"],hint:"Definite articles with adjective endings plus a comparative."},
{type:"mc",q:"'Ich esse _____ Schokolade als Obst.' What fits?",opts:["lieber","am liebsten","gern","besser"],ans:"lieber",hint:"You prefer one over the other. Which irregular comparative expresses preference?"},
{type:"fb",s:"Das ist {1} Restaurant in der Stadt.",a:["das beste"],opts:["das beste","am besten","das bessere","ein bestes"],hint:"Superlative before a noun with definite article."},
{type:"drag_fill",s:"Ein {1} Mann trinkt {2} Kaffee {3} ein {4} Kind.",blanks:{"1":"alter","2":"mehr","3":"als","4":"junges"},pool:["alter","mehr","als","junges","alte","wie"],hint:"Indefinite article endings: masc. gets -er, neuter gets -es."},
{type:"mc",q:"Complete: 'Hamburg ist groß, München ist _____, aber Berlin ist _____.'",opts:["größer / am größten","mehr groß / am großsten","großer / am größten","größer / der größte"],ans:"größer / am größten",hint:"Comparative for Munich, superlative for Berlin."},
{type:"fb",s:"Ein {1} Buch ist besser als ein schlechtes Buch.",a:["gutes"],opts:["gutes","guter","gute","gut"],hint:"Buch is neuter. After ein (neuter), what ending does the adjective need?"},
{type:"drag_fill",s:"Der Sommer ist {1} als der Frühling, aber der Winter ist {2} {3} der Sommer.",blanks:{"1":"wärmer","2":"nicht so warm","3":"wie"},pool:["wärmer","nicht so warm","wie","als","am wärmsten"],hint:"First a comparative comparison, then an unequal comparison."},
{type:"mc",q:"Which sentence uses ALL three comparison types correctly?",opts:["Er ist so alt wie ich, aber größer als ich, und am schnellsten von uns drei.","Er ist so älter wie ich, aber groß als ich, und am schnelleren.","Er ist als alt wie ich, aber größer wie ich, und der schnellsten.","Er ist so alt als ich, aber mehr groß als ich, und am schnellsten."],ans:"Er ist so alt wie ich, aber größer als ich, und am schnellsten von uns drei.",hint:"Check each part: equal (so...wie), comparative (..er als), superlative (am ...sten)."},
{type:"drag_fill",s:"Die {1} Lehrerin gibt {2} Hausaufgaben {3} der {4} Lehrer.",blanks:{"1":"neue","2":"mehr","3":"als","4":"alte"},pool:["neue","mehr","als","alte","neuer","älter"],hint:"Definite article adjective endings (both -e in nom.) plus a comparative."},
{type:"fb",s:"Am {1} lerne ich Deutsch!",a:["liebsten"],opts:["liebsten","besten","meisten","liebster"],hint:"What do you like doing most of all? Use the superlative of gern."}
]}
]},
{n:11,lang:"de",track:"v1",title:"Wem gibst du das?",sub:"The Dative Case",icon:"🎯",level:"A2.1",color:"#7B5EE8",lessons:[
  {id:"deu11l1",title:"Was ist der Dativ?",icon:"🎯",xp:20,board:true,steps:[
    {type:"intro",title:"Was ist der Dativ?",desc:"German has four cases. You already know nominative (subject) and accusative (direct object). Now meet the dative: the case of the indirect object.",goals:["Understand when to use the dative case","Learn the dative articles dem, der, dem, den","See how dative changes the article"]},
    {type:"tip",title:"The Dative Case",text:"The dative marks the INDIRECT object: the person who receives something.\nNominative: der/die/das/die\nAccusative: den/die/das/die\nDative: dem/der/dem/den (+n on plural nouns)\nAsk 'Wem?' (To whom?) to find the dative."},
    {type:"teach",kind:"grammar",nl:"dem",en:"the (masc/neut dative)",phonetic:"dehm",example:"A: Wem gibst du das Buch?\nB: Ich gebe dem Mann das Buch.",exampleEn:"A: To whom do you give the book?\nB: I give the book to the man.",note:"der and das both become dem in the dative."},
    {type:"teach",kind:"grammar",nl:"der",en:"the (fem dative)",phonetic:"dehr",example:"A: Wem schenkst du die Blumen?\nB: Ich schenke der Frau die Blumen.",exampleEn:"A: To whom do you give the flowers?\nB: I give the flowers to the woman.",note:"die becomes der in the dative. Don't confuse with der (masc nominative)!"},
    {type:"teach",kind:"grammar",nl:"den + n",en:"the (plural dative)",phonetic:"dehn",example:"A: Wem zeigst du das Haus?\nB: Ich zeige den Kindern das Haus.",exampleEn:"A: To whom do you show the house?\nB: I show the house to the children.",note:"Plural die becomes den, and the noun adds -n if it doesn't already end in -n or -s."},
    {type:"teach",kind:"word",nl:"geben",en:"to give",phonetic:"GAY-ben",example:"A: Gibst du mir das Salz?\nB: Ja, ich gebe dir das Salz.",exampleEn:"A: Do you give me the salt?\nB: Yes, I give you the salt.",note:"geben takes dative (receiver) + accusative (thing given). er gibt."},
    {type:"teach",kind:"word",nl:"zeigen",en:"to show",phonetic:"TSYE-gen",example:"A: Zeigst du dem Kind das Bild?\nB: Ja, ich zeige dem Kind das Bild.",exampleEn:"A: Do you show the child the picture?\nB: Yes, I show the child the picture.",note:"zeigen: to show someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"schenken",en:"to give (as a gift)",phonetic:"SHENK-en",example:"A: Was schenkst du der Lehrerin?\nB: Ich schenke der Lehrerin ein Buch.",exampleEn:"A: What do you give the teacher (f)?\nB: I give the teacher a book.",note:"schenken implies a gift. Receiver is always dative."},
    {type:"mc",q:"Which article is the dative form of 'der' (masculine)?",opts:["dem","den","der","des"],ans:"dem",hint:"Think about what replaces der/das in the dative."},
    {type:"mc",q:"Which article is the dative form of 'die' (feminine)?",opts:["der","dem","die","den"],ans:"der",hint:"Feminine dative looks like masculine nominative."},
    {type:"mc",q:"'Ich gebe ___ Frau den Kaffee.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"The woman receives the coffee. Feminine dative article needed."},
    {type:"fb",s:"Ich zeige {1} Kind das Foto.",a:"dem",opts:["dem","den","der","das"],hint:"Kind is neuter. Neuter dative article is the same as masculine dative."},
    {type:"fb",s:"Er schenkt {1} Kindern ein Spiel.",a:"den",opts:["den","dem","der","die"],hint:"Plural dative always uses the same article, plus -n on the noun."},
    {type:"mc",q:"'Wem gibst du das Geschenk?' What does 'wem' ask about?",opts:["The indirect object (dative)","The direct object (accusative)","The subject (nominative)","The location"],ans:"The indirect object (dative)",hint:"Wem asks about the receiver of an action."},
    {type:"fb",s:"Sie gibt {1} Mann die Zeitung.",a:"dem",opts:["dem","der","den","die"],hint:"Mann is masculine. Think about the masculine dative article."},
    {type:"match",pairs:[{nl:"dem Mann",en:"to the man (dat)"},{nl:"der Frau",en:"to the woman (dat)"},{nl:"dem Kind",en:"to the child (dat)"},{nl:"den Kindern",en:"to the children (dat)"}]},
    {type:"mc",q:"Which sentence correctly uses the dative?",opts:["Ich gebe dem Bruder ein Buch.","Ich gebe der Bruder ein Buch.","Ich gebe den Bruder ein Buch.","Ich gebe des Bruder ein Buch."],ans:"Ich gebe dem Bruder ein Buch.",hint:"Bruder is masculine. Which masculine dative article did you learn?"},
    {type:"fb",s:"Wir schenken {1} Lehrerin Blumen.",a:"der",opts:["der","die","dem","den"],hint:"Lehrerin is feminine. Recall the feminine dative article."},
    {type:"mc",q:"In 'Ich zeige den Freunden das Museum', why is it 'den Freunden'?",opts:["Plural dative: den + noun with -n","Accusative plural","Masculine dative singular","Genitive plural"],ans:"Plural dative: den + noun with -n",hint:"Multiple friends receiving something. Think about the plural dative rule."},
    {type:"drag_fill",s:"Er gibt {1} Schwester {2} Geschenk.",blanks:{"1":"der","2":"ein"},pool:["der","dem","ein","den","eine"],hint:"Schwester is feminine (dative). Geschenk is neuter accusative (thing given)."}
  ]},
  {id:"deu11l2",title:"Wem gibst du das?",icon:"🎁",xp:20,board:true,steps:[
    {type:"intro",title:"Wem gibst du das?",desc:"Practice using dative articles with people. Give things, show things, send things: the receiver is always in the dative.",goals:["Use dem/der/dem/den with people","Practice geben, zeigen, schicken, bringen","Form sentences with indirect objects"]},
    {type:"teach",kind:"word",nl:"schicken",en:"to send",phonetic:"SHIK-en",example:"A: Schickst du dem Opa eine Karte?\nB: Ja, ich schicke dem Opa eine Karte.",exampleEn:"A: Do you send grandpa a card?\nB: Yes, I send grandpa a card.",note:"schicken: send someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"bringen",en:"to bring",phonetic:"BRING-en",example:"A: Bringst du der Oma Kuchen?\nB: Ja, ich bringe der Oma Kuchen.",exampleEn:"A: Do you bring grandma cake?\nB: Yes, I bring grandma cake.",note:"bringen: bring someone (dat) something (acc)."},
    {type:"teach",kind:"word",nl:"der Bruder",en:"the brother",phonetic:"BROO-der",example:"A: Was schenkst du dem Bruder?\nB: Ich schenke dem Bruder eine Uhr.",exampleEn:"A: What do you give your brother?\nB: I give my brother a watch.",note:"Masculine: der Bruder (nom) becomes dem Bruder (dat)."},
    {type:"teach",kind:"word",nl:"die Schwester",en:"the sister",phonetic:"SHVES-ter",example:"A: Zeigst du der Schwester das Foto?\nB: Ja, ich zeige der Schwester das Foto.",exampleEn:"A: Do you show your sister the photo?\nB: Yes, I show my sister the photo.",note:"Feminine: die Schwester (nom) becomes der Schwester (dat)."},
    {type:"teach",kind:"word",nl:"das Baby",en:"the baby",phonetic:"BAY-bee",example:"A: Was gibst du dem Baby?\nB: Ich gebe dem Baby die Milch.",exampleEn:"A: What do you give the baby?\nB: I give the baby the milk.",note:"Neuter: das Baby (nom) becomes dem Baby (dat)."},
    {type:"teach",kind:"phrase",nl:"einem Freund",en:"to a friend (m, dat)",phonetic:"EYE-nem froynt",example:"A: Schickst du einem Freund eine Nachricht?\nB: Ja, ich schicke einem Freund eine Nachricht.",exampleEn:"A: Do you send a friend a message?\nB: Yes, I send a friend a message.",note:"ein becomes einem in masc/neut dative. eine becomes einer in fem dative."},
    {type:"tip",title:"Indefinite Articles in Dative",text:"ein/ein/eine also change in the dative:\nMasc: ein becomes einem\nNeut: ein becomes einem\nFem: eine becomes einer\nSame pattern as dem/dem/der for definite!"},
    {type:"mc",q:"'Ich bringe ___ Mutter einen Tee.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"Mutter is feminine. The receiver of the tea needs a feminine dative article."},
    {type:"fb",s:"Er schickt {1} Vater eine E-Mail.",a:"dem",opts:["dem","der","den","die"],hint:"Vater is masculine. Think about the masculine dative form."},
    {type:"mc",q:"Which sentence means 'I give a friend (f) the book'?",opts:["Ich gebe einer Freundin das Buch.","Ich gebe eine Freundin das Buch.","Ich gebe einem Freundin das Buch.","Ich gebe den Freundin das Buch."],ans:"Ich gebe einer Freundin das Buch.",hint:"Freundin is feminine. What does eine become in the dative?"},
    {type:"fb",s:"Wir zeigen {1} Kindern den Garten.",a:"den",opts:["den","dem","der","die"],hint:"Kindern is plural dative. Recall the plural dative article."},
    {type:"match",pairs:[{nl:"einem Mann",en:"to a man (dat)"},{nl:"einer Frau",en:"to a woman (dat)"},{nl:"einem Kind",en:"to a child (dat)"},{nl:"dem Lehrer",en:"to the teacher (dat)"}]},
    {type:"mc",q:"'Sie bringt dem Baby ___ Flasche.' What goes in the blank?",opts:["eine","einer","einem","ein"],ans:"eine",hint:"Flasche is the thing being brought. It's accusative, not dative."},
    {type:"drag_fill",s:"Ich gebe {1} Bruder {2} Buch.",blanks:{"1":"dem","2":"ein"},pool:["dem","der","ein","eine","einem"],hint:"Bruder receives (dative). Buch is what's given (accusative, neuter)."},
    {type:"fb",s:"Er schenkt {1} Freundin Blumen.",a:"einer",opts:["einer","einem","eine","ein"],hint:"Freundin is feminine. Indefinite feminine article in the dative."},
    {type:"mc",q:"In 'Ich zeige dem Onkel das Auto', who is in the dative?",opts:["dem Onkel","das Auto","Ich","zeige"],ans:"dem Onkel",hint:"The dative marks who receives the showing. Look for dem."},
    {type:"drag_fill",s:"Sie schickt {1} Eltern {2} Brief.",blanks:{"1":"den","2":"einen"},pool:["den","dem","einen","ein","einer"],hint:"Eltern is plural (dative: den Eltern). Brief is masculine accusative."},
    {type:"fb",s:"Ich bringe {1} Nachbarin einen Kuchen.",a:"der",opts:["der","die","dem","den"],hint:"Nachbarin is feminine. The neighbor receives the cake."}
  ]},
  {id:"deu11l3",title:"Mit und zu",icon:"🚌",xp:20,board:true,steps:[
    {type:"intro",title:"Mit und zu",desc:"Two of the most common dative prepositions: mit (with) and zu (to). After these prepositions, articles ALWAYS change to dative.",goals:["Use mit + dative correctly","Use zu + dative correctly","Learn contractions zum and zur"]},
    {type:"teach",kind:"grammar",nl:"mit + Dativ",en:"with + dative",phonetic:"mit",example:"A: Wie fährst du zur Arbeit?\nB: Ich fahre mit dem Bus.",exampleEn:"A: How do you get to work?\nB: I go by bus.",note:"mit always takes dative. mit dem Bus, mit der Bahn, mit dem Auto."},
    {type:"teach",kind:"grammar",nl:"zu + Dativ",en:"to + dative",phonetic:"tsoo",example:"A: Wohin gehst du?\nB: Ich gehe zum Arzt.",exampleEn:"A: Where are you going?\nB: I'm going to the doctor.",note:"zu always takes dative. zu + dem = zum, zu + der = zur."},
    {type:"teach",kind:"phrase",nl:"zum (zu + dem)",en:"to the (m/n, contraction)",phonetic:"tsum",example:"A: Gehst du zum Supermarkt?\nB: Ja, ich gehe zum Supermarkt.",exampleEn:"A: Are you going to the supermarket?\nB: Yes, I'm going to the supermarket.",note:"zum is the contraction of zu + dem. Used with masculine and neuter nouns."},
    {type:"teach",kind:"phrase",nl:"zur (zu + der)",en:"to the (f, contraction)",phonetic:"tsoor",example:"A: Fährst du zur Uni?\nB: Ja, ich fahre zur Uni.",exampleEn:"A: Are you going to the university?\nB: Yes, I'm going to the university.",note:"zur is the contraction of zu + der. Used with feminine nouns."},
    {type:"teach",kind:"phrase",nl:"mit dem Zug",en:"by train",phonetic:"mit dehm tsook",example:"A: Fährst du mit dem Zug?\nB: Ja, ich fahre mit dem Zug nach Hamburg.",exampleEn:"A: Are you going by train?\nB: Yes, I'm going to Hamburg by train.",note:"Zug is masculine. mit + dem Zug. Common transport phrase."},
    {type:"teach",kind:"phrase",nl:"mit der Straßenbahn",en:"by tram",phonetic:"mit dehr SHTRAH-sen-bahn",example:"A: Wie kommst du zur Schule?\nB: Ich fahre mit der Straßenbahn.",exampleEn:"A: How do you get to school?\nB: I go by tram.",note:"Straßenbahn is feminine. mit + der Straßenbahn."},
    {type:"tip",title:"Dative Prepositions: Always Dative!",text:"These prepositions ALWAYS take dative:\nmit (with/by), zu (to), bei (at/near)\nnach (to/after), von (from/of), aus (from/out of)\nseit (since/for), gegenüber (opposite)\nMemory trick: Mit zu bei, nach von aus, seit gegenüber."},
    {type:"mc",q:"'Ich fahre ___ dem Auto.' Which preposition fits?",opts:["mit","zu","in","auf"],ans:"mit",hint:"Which dative preposition means 'by' for transportation?"},
    {type:"fb",s:"Er geht {1} Bäcker.",a:"zum",opts:["zum","zur","zu dem","mit dem"],hint:"Bäcker is masculine. zu + dem contracts to a single word."},
    {type:"mc",q:"'Sie fährt ___ Schule.' Which contraction is correct?",opts:["zur","zum","zu die","mit der"],ans:"zur",hint:"Schule is feminine. zu + der contracts to a short word."},
    {type:"fb",s:"Wir fahren mit {1} Straßenbahn.",a:"der",opts:["der","dem","die","den"],hint:"Straßenbahn is feminine. After mit, use the feminine dative article."},
    {type:"mc",q:"Which is correct: 'Ich gehe zum Arzt' or 'Ich gehe zu dem Arzt'?",opts:["Both are correct, but zum is more common","Only zum is correct","Only zu dem is correct","Neither is correct"],ans:"Both are correct, but zum is more common",hint:"Contractions are standard in spoken and written German, but the full form is not wrong."},
    {type:"fb",s:"Sie fährt mit {1} Fahrrad zur Arbeit.",a:"dem",opts:["dem","der","den","das"],hint:"Fahrrad is neuter. After mit, neuter nouns need the same article as masculine dative."},
    {type:"match",pairs:[{nl:"mit dem Bus",en:"by bus"},{nl:"mit der Bahn",en:"by train/rail"},{nl:"zum Arzt",en:"to the doctor"},{nl:"zur Schule",en:"to school"}]},
    {type:"drag_fill",s:"Ich gehe {1} Supermarkt und fahre {2} dem Bus nach Hause.",blanks:{"1":"zum","2":"mit"},pool:["zum","zur","mit","von","bei"],hint:"First blank: to the supermarket (masc). Second blank: by bus."},
    {type:"mc",q:"'Er geht mit ___ Schwester zum Park.' Fill in the blank.",opts:["der","die","dem","den"],ans:"der",hint:"Schwester is feminine. After mit, feminine nouns take which dative article?"},
    {type:"fb",s:"Wir gehen {1} Bahnhof.",a:"zum",opts:["zum","zur","mit dem","bei dem"],hint:"Bahnhof is masculine. Going to a place uses zu + dative."},
    {type:"drag_fill",s:"Sie fährt {1} der U-Bahn {2} Universität.",blanks:{"1":"mit","2":"zur"},pool:["mit","zur","zum","von","bei"],hint:"By subway (fem preposition). To the university (fem contraction)."}
  ]},
  {id:"deu11l4",title:"Bei, nach und von",icon:"🏠",xp:20,board:true,steps:[
    {type:"intro",title:"Bei, nach und von",desc:"Three more dative prepositions: bei (at/near), nach (to/after), and von (from/of). These are essential for talking about locations and origins.",goals:["Use bei + dative (at someone's place, at work)","Use nach + dative (to cities/countries, after)","Use von + dative (from, of)"]},
    {type:"teach",kind:"grammar",nl:"bei + Dativ",en:"at / near / at someone's place",phonetic:"bye",example:"A: Wo bist du?\nB: Ich bin beim Arzt.",exampleEn:"A: Where are you?\nB: I'm at the doctor's.",note:"bei + dem = beim. Used for 'at someone's place' or 'at a professional'."},
    {type:"teach",kind:"grammar",nl:"nach + Dativ",en:"to (cities/countries) / after",phonetic:"nahkh",example:"A: Wohin fliegst du?\nB: Ich fliege nach Berlin.",exampleEn:"A: Where are you flying to?\nB: I'm flying to Berlin.",note:"nach is used for cities and most countries (no article). Also means 'after'."},
    {type:"teach",kind:"grammar",nl:"von + Dativ",en:"from / of",phonetic:"fon",example:"A: Woher kommst du?\nB: Ich komme von der Arbeit.",exampleEn:"A: Where are you coming from?\nB: I'm coming from work.",note:"von + dem = vom. Indicates origin or belonging."},
    {type:"teach",kind:"phrase",nl:"beim (bei + dem)",en:"at the (m/n, contraction)",phonetic:"byme",example:"A: Wo ist Papa?\nB: Er ist beim Friseur.",exampleEn:"A: Where is Dad?\nB: He's at the hairdresser's.",note:"beim = bei + dem. Very common in everyday speech."},
    {type:"teach",kind:"phrase",nl:"vom (von + dem)",en:"from the (m/n, contraction)",phonetic:"fom",example:"A: Woher kommst du?\nB: Ich komme vom Bahnhof.",exampleEn:"A: Where are you coming from?\nB: I'm coming from the train station.",note:"vom = von + dem. Used with masculine and neuter nouns."},
    {type:"teach",kind:"phrase",nl:"nach dem Essen",en:"after the meal",phonetic:"nahkh dehm ES-en",example:"A: Wann trinkst du Kaffee?\nB: Ich trinke Kaffee nach dem Essen.",exampleEn:"A: When do you drink coffee?\nB: I drink coffee after the meal.",note:"nach also means 'after'. nach + dative for time expressions."},
    {type:"tip",title:"Nach for Places vs. Zu for Places",text:"nach is for cities, countries, and directions:\nnach Berlin, nach Deutschland, nach Hause\nzu is for people and specific places:\nzum Arzt, zur Schule, zu meiner Mutter\nBoth take dative, but the usage differs!"},
    {type:"mc",q:"'Ich bin ___ Arzt.' Which contraction means 'at the doctor's'?",opts:["beim","vom","zum","im"],ans:"beim",hint:"Which preposition means 'at someone's place'? Contract it with dem."},
    {type:"fb",s:"Sie kommt {1} der Uni.",a:"von",opts:["von","bei","nach","mit"],hint:"Coming FROM a place. Which dative preposition expresses origin?"},
    {type:"mc",q:"Which is correct for 'I'm flying to Munich'?",opts:["Ich fliege nach München.","Ich fliege zu München.","Ich fliege bei München.","Ich fliege von München."],ans:"Ich fliege nach München.",hint:"Cities and countries without articles use a specific preposition."},
    {type:"fb",s:"Er trinkt Tee {1} dem Frühstück.",a:"nach",opts:["nach","bei","von","mit"],hint:"He drinks tea AFTER breakfast. Which preposition means 'after'?"},
    {type:"match",pairs:[{nl:"beim Arzt",en:"at the doctor's"},{nl:"vom Bahnhof",en:"from the station"},{nl:"nach Berlin",en:"to Berlin"},{nl:"bei der Arbeit",en:"at work"}]},
    {type:"mc",q:"'Er kommt ___ Büro.' Which contraction means 'from the office'?",opts:["vom","beim","zum","im"],ans:"vom",hint:"Coming from a place. Büro is neuter. von + dem = ?"},
    {type:"fb",s:"Wir sind {1} Freunden.",a:"bei",opts:["bei","von","nach","mit"],hint:"We are AT our friends' place. Which preposition expresses location at someone's?"},
    {type:"drag_fill",s:"Ich komme {1} der Schule und gehe {2} Hause.",blanks:{"1":"von","2":"nach"},pool:["von","nach","bei","mit","zu"],hint:"Coming FROM school, going home. 'nach Hause' is a fixed expression."},
    {type:"mc",q:"'Wir fahren nach ___ Essen nach Hause.' Which article fits?",opts:["dem","der","die","das"],ans:"dem",hint:"After the meal (Essen is neuter). nach + neuter dative article."},
    {type:"fb",s:"Sie arbeitet {1} Siemens.",a:"bei",opts:["bei","von","nach","mit"],hint:"She works AT a company. Which preposition is used for workplace?"},
    {type:"drag_fill",s:"Er kommt {1} Friseur und fährt {2} Berlin.",blanks:{"1":"vom","2":"nach"},pool:["vom","zum","nach","bei","mit"],hint:"FROM the hairdresser (masc, contracted). TO a city."}
  ]},
  {id:"deu11l5",title:"Aus, seit und gegenüber",icon:"🌍",xp:20,board:true,steps:[
    {type:"intro",title:"Aus, seit und gegenüber",desc:"Three more dative prepositions: aus (from/out of), seit (since/for), and gegenüber (opposite/across from). These complete the set!",goals:["Use aus + dative for origin","Use seit + dative for duration","Use gegenüber + dative for position"]},
    {type:"teach",kind:"grammar",nl:"aus + Dativ",en:"from / out of",phonetic:"ows",example:"A: Woher kommst du?\nB: Ich komme aus der Türkei.",exampleEn:"A: Where are you from?\nB: I'm from Turkey.",note:"aus = from (origin, material). aus dem Haus (out of the house), aus der Schweiz (from Switzerland)."},
    {type:"teach",kind:"grammar",nl:"seit + Dativ",en:"since / for (time)",phonetic:"zyte",example:"A: Wie lange wohnst du hier?\nB: Ich wohne seit einem Jahr hier.",exampleEn:"A: How long have you lived here?\nB: I've lived here for a year.",note:"seit expresses duration up to now. German uses PRESENT tense with seit (not perfect)."},
    {type:"teach",kind:"grammar",nl:"gegenüber + Dativ",en:"opposite / across from",phonetic:"GAY-gen-ue-ber",example:"A: Wo ist die Bank?\nB: Die Bank ist gegenüber dem Rathaus.",exampleEn:"A: Where is the bank?\nB: The bank is opposite the town hall.",note:"gegenüber can come before or after the noun: gegenüber dem Park or dem Park gegenüber."},
    {type:"teach",kind:"phrase",nl:"aus dem Haus",en:"out of the house",phonetic:"ows dehm hows",example:"A: Wo ist die Katze?\nB: Sie läuft aus dem Haus.",exampleEn:"A: Where is the cat?\nB: She's running out of the house.",note:"aus + dem (neuter dative). Haus is neuter."},
    {type:"teach",kind:"phrase",nl:"seit drei Monaten",en:"for three months",phonetic:"zyte dry MOH-nah-ten",example:"A: Seit wann lernst du Deutsch?\nB: Seit drei Monaten.",exampleEn:"A: Since when have you been learning German?\nB: For three months.",note:"Plural dative: Monaten (Monat + en). seit + dative plural."},
    {type:"teach",kind:"phrase",nl:"aus der Schweiz",en:"from Switzerland",phonetic:"ows dehr shvytes",example:"A: Woher kommt Anna?\nB: Anna kommt aus der Schweiz.",exampleEn:"A: Where is Anna from?\nB: Anna is from Switzerland.",note:"Die Schweiz (fem). Some countries have articles: die Schweiz, die Türkei, die USA (pl)."},
    {type:"tip",title:"Aus vs. Von vs. Nach",text:"aus = from INSIDE (origin, material)\nvon = from a place/person (general 'from')\nnach = TO cities/countries\n\nIch komme aus Deutschland. (I'm from Germany, origin)\nIch komme von der Arbeit. (I'm coming from work)\nIch fliege nach Deutschland. (I'm flying to Germany)"},
    {type:"mc",q:"'Ich komme ___ der Türkei.' Which preposition means 'from' (origin)?",opts:["aus","von","nach","mit"],ans:"aus",hint:"When talking about where you are originally from, use the preposition for origin."},
    {type:"fb",s:"Sie lernt Deutsch seit {1} Jahr.",a:"einem",opts:["einem","ein","einer","den"],hint:"Jahr is neuter. Indefinite neuter dative article needed."},
    {type:"mc",q:"Which is correct for 'The pharmacy is opposite the church'?",opts:["Die Apotheke ist gegenüber der Kirche.","Die Apotheke ist gegenüber die Kirche.","Die Apotheke ist gegenüber dem Kirche.","Die Apotheke ist gegenüber den Kirche."],ans:"Die Apotheke ist gegenüber der Kirche.",hint:"Kirche is feminine. gegenüber takes which case?"},
    {type:"fb",s:"Der Hund läuft {1} dem Haus.",a:"aus",opts:["aus","von","bei","nach"],hint:"The dog runs OUT OF the house. Which preposition means 'out of'?"},
    {type:"match",pairs:[{nl:"aus der Schweiz",en:"from Switzerland"},{nl:"seit einem Monat",en:"for one month"},{nl:"gegenüber dem Park",en:"opposite the park"},{nl:"aus dem Glas",en:"out of the glass"}]},
    {type:"mc",q:"'Er wohnt hier seit drei ___.' Which noun form is correct?",opts:["Monaten","Monate","Monat","Monats"],ans:"Monaten",hint:"Plural dative nouns add -n. What is the plural of Monat with the dative -n?"},
    {type:"fb",s:"Das Cafe ist {1} der Post.",a:"gegenüber",opts:["gegenüber","neben","aus","seit"],hint:"The cafe is OPPOSITE the post office. Which dative preposition means 'across from'?"},
    {type:"drag_fill",s:"Sie kommt {1} den USA und wohnt {2} zwei Jahren in Berlin.",blanks:{"1":"aus","2":"seit"},pool:["aus","seit","von","nach","mit"],hint:"FROM the USA (origin). FOR two years (duration up to now)."},
    {type:"mc",q:"Why does German use present tense with 'seit'?",opts:["The action is still ongoing now","Seit always requires present tense by rule","Past tense cannot be used with time words","It is a regional dialect feature"],ans:"The action is still ongoing now",hint:"Think about what seit expresses: something started in the past and continues."},
    {type:"fb",s:"Ich trinke Wasser {1} der Flasche.",a:"aus",opts:["aus","von","mit","bei"],hint:"Drinking water OUT OF the bottle. Which preposition expresses 'out of'?"},
    {type:"drag_fill",s:"Er wohnt {1} fünf Jahren {2} dem Bahnhof.",blanks:{"1":"seit","2":"gegenüber"},pool:["seit","gegenüber","aus","von","bei"],hint:"FOR five years (duration). OPPOSITE the train station (position)."}
  ]},
  {id:"deu11l6",title:"Mir, dir, ihm, ihr...",icon:"👤",xp:20,board:true,steps:[
    {type:"intro",title:"Mir, dir, ihm, ihr...",desc:"Personal pronouns also change in the dative! Instead of 'ich' you say 'mir', instead of 'du' you say 'dir'. Learn all the dative pronouns.",goals:["Learn all dative personal pronouns","Use dative pronouns with verbs","Replace dative nouns with pronouns"]},
    {type:"teach",kind:"grammar",nl:"mir",en:"(to) me",phonetic:"meer",example:"A: Gibst du mir das Buch?\nB: Ja, ich gebe dir das Buch.",exampleEn:"A: Do you give me the book?\nB: Yes, I give you the book.",note:"ich (nom) becomes mich (acc) or mir (dat). Dative: the receiver."},
    {type:"teach",kind:"grammar",nl:"dir",en:"(to) you (informal)",phonetic:"deer",example:"A: Kann ich dir helfen?\nB: Ja, bitte hilf mir!",exampleEn:"A: Can I help you?\nB: Yes, please help me!",note:"du (nom) becomes dich (acc) or dir (dat)."},
    {type:"teach",kind:"grammar",nl:"ihm",en:"(to) him / (to) it (m/n)",phonetic:"eem",example:"A: Schenkst du ihm etwas?\nB: Ja, ich schenke ihm ein Buch.",exampleEn:"A: Are you giving him something?\nB: Yes, I'm giving him a book.",note:"er/es (nom) becomes ihn/es (acc) or ihm (dat). Same form for masc and neuter!"},
    {type:"teach",kind:"grammar",nl:"ihr",en:"(to) her",phonetic:"eer",example:"A: Was sagst du ihr?\nB: Ich sage ihr die Wahrheit.",exampleEn:"A: What do you tell her?\nB: I tell her the truth.",note:"sie (nom, she) becomes sie (acc) or ihr (dat). Don't confuse with ihr (you plural)!"},
    {type:"teach",kind:"grammar",nl:"uns",en:"(to) us",phonetic:"oons",example:"A: Zeigt er uns das Haus?\nB: Ja, er zeigt uns das Haus.",exampleEn:"A: Does he show us the house?\nB: Yes, he shows us the house.",note:"wir (nom) becomes uns (acc AND dat). Same form in both cases!"},
    {type:"teach",kind:"grammar",nl:"euch",en:"(to) you (plural)",phonetic:"oykh",example:"A: Bringe ich euch Kaffee?\nB: Ja, bring uns bitte Kaffee!",exampleEn:"A: Shall I bring you (all) coffee?\nB: Yes, please bring us coffee!",note:"ihr (nom, you pl) becomes euch (acc AND dat). Same form in both cases!"},
    {type:"teach",kind:"grammar",nl:"ihnen",en:"(to) them",phonetic:"EE-nen",example:"A: Gibst du ihnen das Geld?\nB: Ja, ich gebe ihnen das Geld.",exampleEn:"A: Do you give them the money?\nB: Yes, I give them the money.",note:"sie (nom, they) becomes sie (acc) or ihnen (dat). Capital Ihnen = formal 'you'."},
    {type:"verb_table",title:"Personal Pronouns: All Cases",label:"Nominative / Accusative / Dative",groups:[{header:"Singular",rows:["ich / mich / mir","du / dich / dir","er / ihn / ihm","sie / sie / ihr","es / es / ihm"]},{header:"Plural",rows:["wir / uns / uns","ihr / euch / euch","sie / sie / ihnen","Sie / Sie / Ihnen"]}],note:"uns and euch are the same in accusative and dative."},
    {type:"mc",q:"'Kannst du ___ helfen?' (me)",opts:["mir","mich","ich","mein"],ans:"mir",hint:"Helfen takes the dative. What is the dative form of ich?"},
    {type:"fb",s:"Ich gebe {1} das Geschenk.",a:"dir",opts:["dir","dich","du","dein"],hint:"I give YOU the gift. Dative form of du needed."},
    {type:"mc",q:"'Sie schickt ___ eine Nachricht.' (him)",opts:["ihm","ihn","er","sein"],ans:"ihm",hint:"She sends HIM a message. The receiver is in the dative."},
    {type:"fb",s:"Er zeigt {1} das Foto.",a:"ihr",opts:["ihr","sie","ihnen","ihre"],hint:"He shows HER the photo. Dative pronoun for 'she' needed."},
    {type:"match",pairs:[{nl:"mir",en:"(to) me"},{nl:"dir",en:"(to) you"},{nl:"ihm",en:"(to) him"},{nl:"ihr",en:"(to) her"},{nl:"ihnen",en:"(to) them"}]},
    {type:"mc",q:"'Bringst du ___ den Kaffee?' (us)",opts:["uns","wir","unser","euch"],ans:"uns",hint:"Bring US the coffee. The dative form of wir is the same as the accusative."},
    {type:"fb",s:"Ich sage {1} die Wahrheit.",a:"euch",opts:["euch","ihr","euer","sie"],hint:"I tell YOU ALL the truth. Dative of ihr (you plural)."},
    {type:"drag_fill",s:"Er gibt {1} das Buch und ich gebe {2} den Stift.",blanks:{"1":"mir","2":"ihm"},pool:["mir","ihm","mich","ihn","dir"],hint:"He gives ME the book (dative of ich). I give HIM the pen (dative of er)."},
    {type:"mc",q:"What is the difference between 'ihnen' and 'Ihnen'?",opts:["ihnen = to them, Ihnen = to you (formal)","ihnen = to you, Ihnen = to them","No difference, both mean 'to them'","ihnen is accusative, Ihnen is dative"],ans:"ihnen = to them, Ihnen = to you (formal)",hint:"Capital letters in German pronouns always signal the formal address form."},
    {type:"fb",s:"Wir schenken {1} Blumen.",a:"ihnen",opts:["ihnen","sie","ihr","ihn"],hint:"We give THEM flowers. Dative plural pronoun needed."}
  ]},
  {id:"deu11l7",title:"Verben mit Dativ",icon:"💬",xp:20,board:true,steps:[
    {type:"intro",title:"Verben mit Dativ",desc:"Some German verbs ALWAYS take dative, not accusative. The most common: helfen, gefallen, gehören, danken, gratulieren. Master these essential dative verbs.",goals:["Learn verbs that always take dative","Use helfen, gefallen, gehören correctly","Practice danken and gratulieren with dative"]},
    {type:"teach",kind:"word",nl:"helfen",en:"to help",phonetic:"HEL-fen",example:"A: Kannst du mir helfen?\nB: Ja, ich helfe dir gern!",exampleEn:"A: Can you help me?\nB: Yes, I'll gladly help you!",note:"helfen + dative. NOT 'ich helfe dich'. er hilft (vowel change!)."},
    {type:"teach",kind:"word",nl:"gefallen",en:"to please / to like (lit.)",phonetic:"geh-FAL-en",example:"A: Gefällt dir das Kleid?\nB: Ja, es gefällt mir sehr gut!",exampleEn:"A: Do you like the dress?\nB: Yes, I like it a lot!",note:"gefallen + dative. The THING is the subject. 'Das Kleid gefällt mir' = The dress pleases me."},
    {type:"teach",kind:"word",nl:"gehören",en:"to belong to",phonetic:"geh-HER-en",example:"A: Wem gehört das Buch?\nB: Es gehört dem Lehrer.",exampleEn:"A: Whose book is this?\nB: It belongs to the teacher.",note:"gehören + dative. The owner is in the dative."},
    {type:"teach",kind:"word",nl:"danken",en:"to thank",phonetic:"DANK-en",example:"A: Ich danke dir für die Hilfe!\nB: Gern geschehen!",exampleEn:"A: I thank you for the help!\nB: You're welcome!",note:"danken + dative. 'Ich danke dir' not 'Ich danke dich'."},
    {type:"teach",kind:"word",nl:"gratulieren",en:"to congratulate",phonetic:"grah-too-LEE-ren",example:"A: Ich gratuliere dir zum Geburtstag!\nB: Vielen Dank!",exampleEn:"A: Happy birthday! (I congratulate you)\nB: Thank you very much!",note:"gratulieren + dative. Used for birthdays, achievements, etc."},
    {type:"teach",kind:"word",nl:"antworten",en:"to answer (someone)",phonetic:"ANT-vor-ten",example:"A: Antwortest du dem Lehrer?\nB: Ja, ich antworte ihm sofort.",exampleEn:"A: Do you answer the teacher?\nB: Yes, I answer him right away.",note:"antworten + dative for the person. The question itself uses auf + acc."},
    {type:"tip",title:"Why Dative with These Verbs?",text:"These verbs describe a relationship TO someone, not an action ON someone.\nhelfen: giving help TO someone\ngefallen: being pleasing TO someone\ngehören: belonging TO someone\ndanken: giving thanks TO someone\nThink of the dative as the 'beneficiary' case."},
    {type:"mc",q:"'Das Haus ___ meinem Vater.' Which verb means 'belongs to'?",opts:["gehört","gefällt","hilft","dankt"],ans:"gehört",hint:"Which dative verb expresses ownership or belonging?"},
    {type:"fb",s:"Ich {1} dir für das Geschenk.",a:"danke",opts:["danke","helfe","gefalle","gehöre"],hint:"Expressing gratitude for the gift. Which verb means 'to thank'?"},
    {type:"mc",q:"'___ dir die Stadt?' means 'Do you like the city?'",opts:["Gefällt","Gehört","Hilft","Dankt"],ans:"Gefällt",hint:"Which verb literally means 'is pleasing to you'?"},
    {type:"fb",s:"Er {1} dem alten Mann mit den Taschen.",a:"hilft",opts:["hilft","gefällt","gehört","dankt"],hint:"He assists the old man with the bags. Which verb means 'to help'? Watch the vowel change."},
    {type:"match",pairs:[{nl:"helfen",en:"to help (+ dat)"},{nl:"gefallen",en:"to please (+ dat)"},{nl:"gehören",en:"to belong to (+ dat)"},{nl:"danken",en:"to thank (+ dat)"},{nl:"gratulieren",en:"to congratulate (+ dat)"}]},
    {type:"mc",q:"Which sentence is grammatically correct?",opts:["Das Kleid gefällt mir.","Das Kleid gefällt mich.","Ich gefalle das Kleid.","Mir gefällt das Kleid mich."],ans:"Das Kleid gefällt mir.",hint:"With gefallen, the thing liked is the subject. The person is in the dative."},
    {type:"fb",s:"Wir {1} ihm zum Geburtstag.",a:"gratulieren",opts:["gratulieren","danken","helfen","gehören"],hint:"We wish him happy birthday. Which verb means 'to congratulate'?"},
    {type:"drag_fill",s:"Das Auto {1} meinem Bruder und es {2} ihm sehr.",blanks:{"1":"gehört","2":"gefällt"},pool:["gehört","gefällt","hilft","dankt","antwortet"],hint:"The car BELONGS TO my brother and he LIKES it (it pleases him)."},
    {type:"mc",q:"'Sie antwortet ___ Lehrerin.' Which article is correct?",opts:["der","die","dem","den"],ans:"der",hint:"antworten takes dative. Lehrerin is feminine. Feminine dative article?"},
    {type:"drag_fill",s:"Ich {1} dir und {2} dir für alles.",blanks:{"1":"helfe","2":"danke"},pool:["helfe","danke","gefalle","gehöre","antworte"],hint:"I HELP you and THANK you for everything. Both verbs take dative."}
  ]},
  {id:"deu11l8",title:"Dativ-Meister",icon:"🏆",xp:20,board:true,steps:[
    {type:"intro",title:"Dativ-Meister",desc:"Time to combine everything: dative articles, prepositions, pronouns, and verbs. Can you master the dative case?",goals:["Combine dative prepositions with correct articles","Use dative pronouns naturally","Apply dative verbs in context"]},
    {type:"tip",title:"Dative Checklist",text:"Three reasons for dative:\n1. Indirect object: Ich gebe DEM MANN das Buch.\n2. After dative prepositions: mit, zu, bei, nach, von, aus, seit, gegenüber\n3. After dative verbs: helfen, gefallen, gehören, danken, gratulieren, antworten"},
    {type:"mc",q:"'Sie fährt mit ___ Freundin zum Bahnhof.' Which article fits?",opts:["der","die","dem","den"],ans:"der",hint:"mit takes dative. Freundin is feminine. Feminine dative article needed."},
    {type:"fb",s:"Das Buch gehört {1} Schwester.",a:"meiner",opts:["meiner","meine","meinem","mein"],hint:"The book belongs to MY sister. Possessive + feminine noun in dative."},
    {type:"mc",q:"Which sentence correctly uses dative in two places?",opts:["Ich helfe dir mit dem Koffer.","Ich helfe dich mit den Koffer.","Ich helfe dir mit der Koffer.","Ich helfe dich mit dem Koffer."],ans:"Ich helfe dir mit dem Koffer.",hint:"helfen takes dative (dir). mit takes dative (dem Koffer, masculine)."},
    {type:"drag_fill",s:"Er kommt {1} dem Büro und fährt {2} der U-Bahn nach Hause.",blanks:{"1":"aus","2":"mit"},pool:["aus","mit","von","bei","nach"],hint:"OUT OF the office. BY subway."},
    {type:"fb",s:"Gefällt {1} die neue Wohnung?",a:"euch",opts:["euch","ihr","ihnen","dir"],hint:"Do you ALL like the new apartment? Dative plural informal pronoun."},
    {type:"mc",q:"'Ich wohne seit einem Jahr ___ dem Supermarkt.' Which preposition means 'opposite'?",opts:["gegenüber","neben","bei","nach"],ans:"gegenüber",hint:"Which dative preposition means 'across from' or 'opposite'?"},
    {type:"drag_fill",s:"Sie {1} dem Lehrer und {2} ihm für die Hilfe.",blanks:{"1":"antwortet","2":"dankt"},pool:["antwortet","dankt","hilft","gefällt","gehört"],hint:"She ANSWERS the teacher and THANKS him for the help."},
    {type:"fb",s:"Wir gratulieren {1} zum Geburtstag!",a:"Ihnen",opts:["Ihnen","ihnen","Sie","sie"],hint:"We congratulate YOU (formal) on your birthday. Formal dative pronoun starts with a capital."},
    {type:"match",pairs:[{nl:"mit dem Zug",en:"by train"},{nl:"beim Arzt",en:"at the doctor's"},{nl:"vom Bahnhof",en:"from the station"},{nl:"zur Schule",en:"to school"},{nl:"aus der Schweiz",en:"from Switzerland"}]},
    {type:"mc",q:"'Er gibt ___ Kindern Schokolade.' Fill in the blank.",opts:["den","dem","der","die"],ans:"den",hint:"Kindern is plural. Recall the plural dative article."},
    {type:"drag_fill",s:"Ich fahre {1} dem Bus {2} Arzt.",blanks:{"1":"mit","2":"zum"},pool:["mit","zum","zur","von","bei"],hint:"BY bus (preposition + dative). TO the doctor (masc contraction)."},
    {type:"fb",s:"Das Auto gehört {1} Nachbarn.",a:"dem",opts:["dem","der","den","die"],hint:"The car belongs to the neighbor (masc). Dative article for masculine needed."},
    {type:"mc",q:"Which is the correct dative form: 'Ich helfe meinem Bruder' or 'Ich helfe meinen Bruder'?",opts:["Ich helfe meinem Bruder","Ich helfe meinen Bruder","Both are correct","Neither is correct"],ans:"Ich helfe meinem Bruder",hint:"helfen takes dative. Masculine dative possessive: mein becomes meinem."},
    {type:"drag_fill",s:"Sie kommt {1} der Türkei und wohnt {2} drei Jahren in Berlin.",blanks:{"1":"aus","2":"seit"},pool:["aus","seit","von","nach","bei"],hint:"FROM Turkey (origin). FOR three years (ongoing duration)."},
    {type:"mc",q:"Translate: 'Can you help us?'",opts:["Kannst du uns helfen?","Kannst du wir helfen?","Kannst du unser helfen?","Kannst du euch helfen?"],ans:"Kannst du uns helfen?",hint:"Us in dative is the same form as us in accusative."},
    {type:"fb",s:"Die Blumen {1} mir sehr.",a:"gefallen",opts:["gefallen","helfen","gehören","danken"],hint:"The flowers please me. Which verb means 'to be pleasing'? The subject is plural here."},
    {type:"drag_fill",s:"{1} gibst du {2} Geschenk? {3} Mutter!",blanks:{"1":"Wem","2":"das","3":"Der"},pool:["Wem","das","Der","Die","dem"],hint:"TO WHOM (dative question). THE gift (acc neuter). TO THE mother (fem dative, start of sentence)."}
  ]}
]},
{n:13,lang:"de",track:"v1",title:"Größer, schneller, besser!",sub:"Comparatives & Superlatives",icon:"⚖️",level:"A2.2",color:"#7B5EE8",lessons:[
{id:"deu13l1",title:"Schneller als...",icon:"🏃",xp:20,board:true,steps:[
{type:"intro",title:"Schneller als...",desc:"Learn to compare two things using the comparative form with -er and als.",goals:["Form comparatives with -er","Use als to compare two things","Apply Umlaut changes in common comparatives"]},
{type:"teach",kind:"word",nl:"schnell",en:"fast, quick",phonetic:"SHNELL",example:"A: Ist der Zug schnell?\nB: Ja, der Zug ist sehr schnell!",exampleEn:"A: Is the train fast?\nB: Yes, the train is very fast!",note:"Base adjective. Add -er for comparative."},
{type:"teach",kind:"word",nl:"schneller",en:"faster",phonetic:"SHNELL-er",example:"A: Ist der Zug schneller als der Bus?\nB: Ja, viel schneller!",exampleEn:"A: Is the train faster than the bus?\nB: Yes, much faster!",note:"Comparative: schnell + er = schneller."},
{type:"teach",kind:"word",nl:"als",en:"than (in comparisons)",phonetic:"AHLS",example:"A: Wer ist größer, du oder dein Bruder?\nB: Mein Bruder ist größer als ich.",exampleEn:"A: Who is taller, you or your brother?\nB: My brother is taller than me.",note:"Used after comparatives to compare two things."},
{type:"teach",kind:"word",nl:"langsam",en:"slow",phonetic:"LAHNG-zahm",example:"A: Fährt der Bus langsam?\nB: Ja, er ist langsamer als die Straßenbahn.",exampleEn:"A: Does the bus go slowly?\nB: Yes, it is slower than the tram.",note:"langsam + er = langsamer. No Umlaut needed."},
{type:"tip",title:"How comparatives work",text:"Most adjectives: add -er.\nschnell → schneller\nlangsam → langsamer\nklein → kleiner\n\nOne-syllable adjectives with a/o/u often add Umlaut:\nalt → älter\ngroß → größer\njung → jünger\n\nAlways use als (than) after the comparative."},
{type:"teach",kind:"word",nl:"alt",en:"old",phonetic:"AHLT",example:"A: Wie alt ist das Haus?\nB: Es ist sehr alt, älter als die Kirche.",exampleEn:"A: How old is the house?\nB: It is very old, older than the church.",note:"alt → älter (Umlaut change a → ä)."},
{type:"teach",kind:"word",nl:"jung",en:"young",phonetic:"YOONG",example:"A: Ist deine Schwester jünger als du?\nB: Ja, sie ist drei Jahre jünger.",exampleEn:"A: Is your sister younger than you?\nB: Yes, she is three years younger.",note:"jung → jünger (Umlaut change u → ü)."},
{type:"teach",kind:"word",nl:"groß",en:"big, tall",phonetic:"GROHS",example:"A: Der Baum ist groß.\nB: Ja, aber der andere Baum ist noch größer!",exampleEn:"A: The tree is big.\nB: Yes, but the other tree is even bigger!",note:"groß → größer (Umlaut change o → ö)."},
{type:"mc",q:"How do you say 'faster than' in German?",opts:["schneller als","schnell als","schneller wie","mehr schnell als"],ans:"schneller als",hint:"Add -er to the adjective, then the comparison word."},
{type:"fb",s:"Der Zug ist {1} als der Bus.",a:["schneller"],opts:["schneller","schnell","am schnellsten","langsamer"],hint:"Which comparative form of schnell fits here?"},
{type:"mc",q:"What is the comparative of 'alt'?",opts:["älter","alter","alts","mehr alt"],ans:"älter",hint:"One-syllable adjectives with 'a' often get an Umlaut."},
{type:"fb",s:"Mein Bruder ist {1} als ich.",a:["jünger"],opts:["jünger","jung","junger","am jüngsten"],hint:"Think about the Umlaut change for jung."},
{type:"mc",q:"Which word means 'than' in German comparisons?",opts:["als","wie","dass","ob"],ans:"als",hint:"This short word always follows a comparative adjective."},
{type:"match",pairs:[{nl:"schneller",en:"faster"},{nl:"älter",en:"older"},{nl:"jünger",en:"younger"},{nl:"größer",en:"bigger/taller"},{nl:"langsamer",en:"slower"}]},
{type:"fb",s:"Das Haus ist {1} als die Wohnung.",a:["größer"],opts:["größer","groß","großer","am größten"],hint:"groß changes its vowel in the comparative form."},
{type:"teach",kind:"word",nl:"klein",en:"small, short",phonetic:"KLINE",example:"A: Ist dein Hund klein?\nB: Ja, er ist kleiner als dein Hund.",exampleEn:"A: Is your dog small?\nB: Yes, he is smaller than your dog.",note:"klein → kleiner (no Umlaut needed)."},
{type:"mc",q:"'Die Katze ist _____ als der Hund.' Which form completes this?",opts:["kleiner","klein","kleinst","am kleinsten"],ans:"kleiner",hint:"You need the comparative form to compare two things."},
{type:"drag_fill",s:"Mein Auto ist {1} aber dein Auto ist {2}.",blanks:{"1":"langsamer","2":"schneller"},pool:["langsamer","schneller","langsam","schnell"],hint:"Compare the two cars using comparative forms."},
{type:"fb",s:"Berlin ist {1} als München.",a:["größer"],opts:["größer","kleiner","schneller","älter"],hint:"Berlin has about 3.5 million people, Munich about 1.5 million."}
]},
{id:"deu13l2",title:"Am schnellsten!",icon:"🏆",xp:20,board:true,steps:[
{type:"intro",title:"Am schnellsten!",desc:"Learn to express the highest degree with superlatives: am -sten.",goals:["Form superlatives with am + -sten","Recognize Umlaut patterns in superlatives","Compare base, comparative, and superlative forms"]},
{type:"teach",kind:"word",nl:"am schnellsten",en:"the fastest",phonetic:"ahm SHNELL-sten",example:"A: Welches Tier ist am schnellsten?\nB: Der Gepard ist am schnellsten.",exampleEn:"A: Which animal is the fastest?\nB: The cheetah is the fastest.",note:"Superlative: am + adjective + sten."},
{type:"teach",kind:"word",nl:"am größten",en:"the biggest/tallest",phonetic:"ahm GREUS-ten",example:"A: Welche Stadt ist am größten?\nB: Berlin ist am größten.",exampleEn:"A: Which city is the biggest?\nB: Berlin is the biggest.",note:"groß → größer → am größten. Umlaut carries through."},
{type:"teach",kind:"word",nl:"am kleinsten",en:"the smallest",phonetic:"ahm KLINE-sten",example:"A: Welches Zimmer ist am kleinsten?\nB: Das Bad ist am kleinsten.",exampleEn:"A: Which room is the smallest?\nB: The bathroom is the smallest.",note:"klein → kleiner → am kleinsten. No Umlaut."},
{type:"tip",title:"Forming superlatives",text:"Pattern: am + adjective stem + sten\nschnell → am schnellsten\nklein → am kleinsten\n\nWith Umlaut (same as comparative):\nalt → am ältesten\ngroß → am größten\njung → am jüngsten\n\nAfter -d, -t, -s, -z: add -esten\nalt → am ältesten\nkalt → am kältesten"},
{type:"teach",kind:"word",nl:"am ältesten",en:"the oldest",phonetic:"ahm ELL-tess-ten",example:"A: Wer ist am ältesten in deiner Familie?\nB: Mein Großvater ist am ältesten.",exampleEn:"A: Who is the oldest in your family?\nB: My grandfather is the oldest.",note:"alt → älter → am ältesten. Note -esten after -t."},
{type:"teach",kind:"word",nl:"am jüngsten",en:"the youngest",phonetic:"ahm YUENG-sten",example:"A: Wer ist am jüngsten?\nB: Meine Schwester ist am jüngsten.",exampleEn:"A: Who is the youngest?\nB: My sister is the youngest.",note:"jung → jünger → am jüngsten."},
{type:"teach",kind:"word",nl:"am kältesten",en:"the coldest",phonetic:"ahm KELL-tess-ten",example:"A: Welcher Monat ist am kältesten?\nB: Der Januar ist am kältesten.",exampleEn:"A: Which month is the coldest?\nB: January is the coldest.",note:"kalt → kälter → am kältesten. Umlaut + -esten after t."},
{type:"mc",q:"How do you say 'the fastest' in German?",opts:["am schnellsten","am schnellesten","der schnellste","schnellster"],ans:"am schnellsten",hint:"Superlative pattern: am + stem + sten."},
{type:"fb",s:"Der Montblanc ist {1}.",a:["am höchsten"],opts:["am höchsten","am größten","höher","am höhesten"],hint:"Think about the superlative of hoch (high)."},
{type:"mc",q:"Which is the correct superlative of 'alt'?",opts:["am ältesten","am altesten","am älsten","am alsten"],ans:"am ältesten",hint:"Remember the Umlaut AND the extra -e- after -t."},
{type:"match",pairs:[{nl:"am schnellsten",en:"the fastest"},{nl:"am größten",en:"the biggest"},{nl:"am kleinsten",en:"the smallest"},{nl:"am ältesten",en:"the oldest"},{nl:"am jüngsten",en:"the youngest"}]},
{type:"fb",s:"Welcher Monat ist {1}?",a:["am kältesten"],opts:["am kältesten","am kaltesten","kälter","am kältsten"],hint:"kalt needs an Umlaut AND the extra -e- before -sten."},
{type:"mc",q:"'Berlin ist am _____.' Which form means 'the biggest'?",opts:["größten","großsten","größesten","großen"],ans:"größten",hint:"The superlative of groß keeps the Umlaut from the comparative."},
{type:"drag_fill",s:"Er ist {1}, sie ist {2}, aber er ist {3}.",blanks:{"1":"alt","2":"älter","3":"am ältesten"},pool:["alt","älter","am ältesten","jung"],hint:"Fill in the three degrees: base, comparative, superlative."},
{type:"fb",s:"Der Gepard ist {1} als der Löwe.",a:["schneller"],opts:["schneller","am schnellsten","schnell","schnellsten"],hint:"When comparing two things, use the comparative form."},
{type:"mc",q:"When do you add -esten instead of -sten for superlatives?",opts:["After stems ending in -d, -t, -s, or -z","After all vowels","After Umlaut changes","After long adjectives"],ans:"After stems ending in -d, -t, -s, or -z",hint:"Certain consonant endings need an extra -e- for pronunciation."},
{type:"drag_fill",s:"Das Zimmer ist {1} aber die Küche ist {2}.",blanks:{"1":"klein","2":"am kleinsten"},pool:["klein","am kleinsten","kleiner","kleinsten"],hint:"The first blank is the base form, the second is the superlative."},
{type:"fb",s:"Meine Oma ist {1} in der Familie.",a:["am ältesten"],opts:["am ältesten","älter","am altesten","alt"],hint:"Use the superlative to express the highest degree."}
]},
{id:"deu13l3",title:"Gut, besser, am besten",icon:"⭐",xp:20,board:true,steps:[
{type:"intro",title:"Gut, besser, am besten",desc:"Master the most common irregular comparatives and superlatives.",goals:["Learn gut → besser → am besten","Learn viel → mehr → am meisten","Use irregular forms in sentences"]},
{type:"teach",kind:"word",nl:"gut",en:"good, well",phonetic:"GOOT",example:"A: Wie ist das Essen?\nB: Es ist sehr gut!",exampleEn:"A: How is the food?\nB: It is very good!",note:"Base form. Irregular comparative and superlative."},
{type:"teach",kind:"word",nl:"besser",en:"better",phonetic:"BESS-er",example:"A: Ist dieses Restaurant besser?\nB: Ja, es ist viel besser als das andere.",exampleEn:"A: Is this restaurant better?\nB: Yes, it is much better than the other one.",note:"Irregular comparative of gut. Completely different stem."},
{type:"teach",kind:"word",nl:"am besten",en:"the best",phonetic:"ahm BESS-ten",example:"A: Welches Essen schmeckt am besten?\nB: Die Pizza schmeckt am besten!",exampleEn:"A: Which food tastes the best?\nB: The pizza tastes the best!",note:"Irregular superlative of gut."},
{type:"teach",kind:"word",nl:"viel",en:"much, a lot",phonetic:"FEEL",example:"A: Hast du viel Arbeit?\nB: Ja, ich habe sehr viel Arbeit.",exampleEn:"A: Do you have a lot of work?\nB: Yes, I have a lot of work.",note:"Base form. Irregular comparative and superlative."},
{type:"teach",kind:"word",nl:"mehr",en:"more",phonetic:"MAIR",example:"A: Möchtest du mehr Kaffee?\nB: Ja, bitte! Ich brauche heute mehr Kaffee als sonst.",exampleEn:"A: Would you like more coffee?\nB: Yes, please! I need more coffee than usual today.",note:"Irregular comparative of viel. Completely different stem."},
{type:"teach",kind:"word",nl:"am meisten",en:"the most",phonetic:"ahm MY-sten",example:"A: Wer arbeitet am meisten?\nB: Mein Vater arbeitet am meisten.",exampleEn:"A: Who works the most?\nB: My father works the most.",note:"Irregular superlative of viel."},
{type:"tip",title:"Irregular comparisons: the big two",text:"gut → besser → am besten (good, better, best)\nviel → mehr → am meisten (much, more, most)\n\nThese are completely irregular.\nYou must memorize them.\n\nNotice: English does the same!\ngood → better → best\nmuch → more → most"},
{type:"mc",q:"What is the comparative of 'gut'?",opts:["besser","guter","güter","mehr gut"],ans:"besser",hint:"This irregular form has a completely different stem."},
{type:"fb",s:"Dieses Buch ist {1} als das andere.",a:["besser"],opts:["besser","gut","am besten","mehr"],hint:"You are comparing two books. Which irregular comparative fits?"},
{type:"mc",q:"How do you say 'the most' in German?",opts:["am meisten","am mehrsten","am vielsten","mehr als"],ans:"am meisten",hint:"This is the superlative of viel, following the am + sten pattern."},
{type:"fb",s:"Wer hat {1} Geld?",a:["am meisten"],opts:["am meisten","mehr","viel","am besten"],hint:"You want the superlative form meaning 'the most'."},
{type:"match",pairs:[{nl:"gut",en:"good"},{nl:"besser",en:"better"},{nl:"am besten",en:"the best"},{nl:"mehr",en:"more"},{nl:"am meisten",en:"the most"}]},
{type:"drag_fill",s:"Das Essen ist {1}, aber zu Hause schmeckt es {2}.",blanks:{"1":"gut","2":"am besten"},pool:["gut","am besten","besser","mehr"],hint:"Base form first, then the superlative."},
{type:"mc",q:"'Ich trinke _____ Wasser als Saft.' What fits?",opts:["mehr","am meisten","viel","besser"],ans:"mehr",hint:"You are comparing two amounts, so you need the comparative."},
{type:"fb",s:"Sie kocht {1} als ich.",a:["besser"],opts:["besser","am besten","gut","mehr"],hint:"Comparing cooking skills between two people."},
{type:"drag_fill",s:"Er spricht {1} Deutsch, aber sie spricht {2} Deutsch {3} er.",blanks:{"1":"gut","2":"besser","3":"als"},pool:["gut","besser","als","am besten","wie"],hint:"Base form, then comparative form, then the comparison word."},
{type:"mc",q:"Which sentence is correct?",opts:["Pizza schmeckt am besten.","Pizza schmeckt am bessten.","Pizza schmeckt am gusten.","Pizza schmeckt mehr gut."],ans:"Pizza schmeckt am besten.",hint:"Remember the irregular superlative of gut."}
]},
{id:"deu13l4",title:"Lieber und höher",icon:"📈",xp:20,board:true,steps:[
{type:"intro",title:"Lieber und höher",desc:"More irregular comparatives: gern, hoch, nah, and other tricky forms.",goals:["Learn gern → lieber → am liebsten","Learn hoch → höher → am höchsten","Learn nah → näher → am nächsten","Use these forms naturally in context"]},
{type:"teach",kind:"word",nl:"gern",en:"gladly, to like (doing)",phonetic:"GAIRN",example:"A: Spielst du gern Fußball?\nB: Ja, ich spiele sehr gern Fußball!",exampleEn:"A: Do you like playing football?\nB: Yes, I really like playing football!",note:"Used with verbs to express liking an activity."},
{type:"teach",kind:"word",nl:"lieber",en:"rather, prefer (doing)",phonetic:"LEE-ber",example:"A: Möchtest du Tee oder Kaffee?\nB: Ich trinke lieber Kaffee.",exampleEn:"A: Would you like tea or coffee?\nB: I prefer coffee.",note:"Comparative of gern. Expresses preference."},
{type:"teach",kind:"word",nl:"am liebsten",en:"most of all, favorite (doing)",phonetic:"ahm LEEB-sten",example:"A: Was machst du am liebsten?\nB: Am liebsten lese ich Bücher.",exampleEn:"A: What do you like doing most?\nB: Most of all, I like reading books.",note:"Superlative of gern. Your absolute favorite."},
{type:"teach",kind:"word",nl:"hoch",en:"high, tall",phonetic:"HOHKH",example:"A: Ist der Berg hoch?\nB: Ja, er ist sehr hoch!",exampleEn:"A: Is the mountain high?\nB: Yes, it is very high!",note:"Base form. Loses the -c- in comparative."},
{type:"teach",kind:"word",nl:"höher",en:"higher",phonetic:"HEU-er",example:"A: Ist die Zugspitze höher als der Brocken?\nB: Ja, sie ist viel höher.",exampleEn:"A: Is the Zugspitze higher than the Brocken?\nB: Yes, it is much higher.",note:"Irregular: hoch → höher (drops the c, adds Umlaut)."},
{type:"teach",kind:"word",nl:"am höchsten",en:"the highest",phonetic:"ahm HEUKH-sten",example:"A: Welcher Berg ist am höchsten?\nB: Die Zugspitze ist am höchsten in Deutschland.",exampleEn:"A: Which mountain is the highest?\nB: The Zugspitze is the highest in Germany.",note:"hoch → höher → am höchsten."},
{type:"teach",kind:"word",nl:"nah",en:"near, close",phonetic:"NAH",example:"A: Ist der Supermarkt nah?\nB: Ja, er ist ganz nah.",exampleEn:"A: Is the supermarket near?\nB: Yes, it is very close.",note:"nah → näher → am nächsten (very irregular superlative!)."},
{type:"tip",title:"More irregular forms",text:"gern → lieber → am liebsten\n(gladly → rather → most of all)\n\nhoch → höher → am höchsten\n(high → higher → highest)\nNote: hoch drops the -c- in höher.\n\nnah → näher → am nächsten\n(near → nearer → nearest)\nNote: am nächsten also means 'next'."},
{type:"mc",q:"How do you say 'I prefer swimming' in German?",opts:["Ich schwimme lieber.","Ich schwimme gern.","Ich schwimme am liebsten.","Ich schwimme mehr."],ans:"Ich schwimme lieber.",hint:"The comparative of gern expresses preference."},
{type:"fb",s:"Ich lese {1} Bücher.",a:["am liebsten"],opts:["am liebsten","lieber","gern","am besten"],hint:"Express your absolute favorite activity with the superlative of gern."},
{type:"mc",q:"What is the comparative of 'hoch'?",opts:["höher","hocher","höcher","hocherer"],ans:"höher",hint:"This form drops a consonant and adds an Umlaut."},
{type:"fb",s:"Der Bahnhof ist {1} als die Schule.",a:["näher"],opts:["näher","nah","am nächsten","naher"],hint:"You need the comparative of nah to compare distances."},
{type:"match",pairs:[{nl:"gern",en:"gladly"},{nl:"lieber",en:"rather/prefer"},{nl:"am liebsten",en:"most of all"},{nl:"höher",en:"higher"},{nl:"am nächsten",en:"nearest/next"}]},
{type:"drag_fill",s:"Ich esse {1} Pizza, aber {2} esse ich Sushi.",blanks:{"1":"gern","2":"am liebsten"},pool:["gern","am liebsten","lieber","mehr"],hint:"Base form first, then the superlative of gern."},
{type:"mc",q:"'Die Zugspitze ist _____ in Deutschland.' Which form fits?",opts:["am höchsten","höher","hoch","am hochsten"],ans:"am höchsten",hint:"You need the superlative for 'the highest'."},
{type:"fb",s:"Ich koche {1} als ich backe.",a:["lieber"],opts:["lieber","am liebsten","gern","besser"],hint:"Express preference between two activities."},
{type:"drag_fill",s:"Das Hotel ist {1}, das Restaurant ist {2}, aber der Park ist {3}.",blanks:{"1":"nah","2":"näher","3":"am nächsten"},pool:["nah","näher","am nächsten","weit"],hint:"Three degrees: base, comparative, superlative of nah."},
{type:"mc",q:"Which set is correct?",opts:["gern → lieber → am liebsten","gern → gerner → am gernsten","gern → besser → am besten","gern → mehr → am meisten"],ans:"gern → lieber → am liebsten",hint:"This is a fully irregular set, like good/better/best in English."}
]},
{id:"deu13l5",title:"Der große Mann",icon:"👔",xp:20,board:true,steps:[
{type:"intro",title:"Der große Mann",desc:"Learn how adjectives change their endings after der, die, das (definite articles).",goals:["Understand adjective endings after definite articles","Apply correct endings for nominative case","Recognize the pattern: definite article does the heavy lifting"]},
{type:"tip",title:"Adjective endings after der/die/das",text:"When an adjective comes between a definite article and a noun, it gets a weak ending.\n\nNominative case:\nder große Mann (the tall man)\ndie kleine Frau (the short woman)\ndas alte Haus (the old house)\ndie netten Leute (the nice people)\n\nPattern: after der/die/das, the adjective usually ends in -e (singular) or -en (plural)."},
{type:"teach",kind:"phrase",nl:"der große Mann",en:"the tall man",phonetic:"dair GROH-se MAHN",example:"A: Siehst du den großen Mann dort?\nB: Ja, der große Mann ist mein Nachbar.",exampleEn:"A: Do you see the tall man there?\nB: Yes, the tall man is my neighbor.",note:"After der (masc. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"die kleine Frau",en:"the short woman",phonetic:"dee KLINE-e FROW",example:"A: Kennst du die kleine Frau?\nB: Ja, die kleine Frau arbeitet im Supermarkt.",exampleEn:"A: Do you know the short woman?\nB: Yes, the short woman works in the supermarket.",note:"After die (fem. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"das alte Haus",en:"the old house",phonetic:"dahs AHL-te HOWS",example:"A: Ist das alte Haus noch bewohnt?\nB: Ja, das alte Haus gehört meiner Oma.",exampleEn:"A: Is the old house still inhabited?\nB: Yes, the old house belongs to my grandma.",note:"After das (neut. nom.), adjective gets -e."},
{type:"teach",kind:"phrase",nl:"die netten Leute",en:"the nice people",phonetic:"dee NET-en LOY-te",example:"A: Wer sind die netten Leute?\nB: Die netten Leute sind unsere neuen Nachbarn.",exampleEn:"A: Who are the nice people?\nB: The nice people are our new neighbors.",note:"Plural (all genders): adjective gets -en."},
{type:"teach",kind:"word",nl:"schön",en:"beautiful, nice",phonetic:"SHEUN",example:"A: Die schöne Stadt gefällt mir.\nB: Ja, die schöne Altstadt ist besonders toll.",exampleEn:"A: I like the beautiful city.\nB: Yes, the beautiful old town is especially great.",note:"After die (fem.): die schöne Stadt."},
{type:"teach",kind:"word",nl:"neu",en:"new",phonetic:"NOY",example:"A: Wie ist das neue Auto?\nB: Das neue Auto fährt sehr gut.",exampleEn:"A: How is the new car?\nB: The new car drives very well.",note:"After das (neut.): das neue Auto."},
{type:"mc",q:"'Der _____ Hund schläft.' Which ending is correct?",opts:["kleine","kleinen","kleiner","klein"],ans:"kleine",hint:"After der (masc. nominative), adjectives get a weak ending."},
{type:"fb",s:"Die {1} Frau lacht.",a:["nette"],opts:["nette","netten","netter","nett"],hint:"After die (fem. nominative), the adjective ending is weak."},
{type:"mc",q:"'Das _____ Kind spielt.' What goes in the blank?",opts:["kleine","kleinen","kleiner","klein"],ans:"kleine",hint:"After das (neuter nominative), same ending as masculine."},
{type:"fb",s:"Die {1} Kinder spielen im Park.",a:["kleinen"],opts:["kleinen","kleine","kleiner","klein"],hint:"In the plural, the adjective ending changes."},
{type:"match",pairs:[{nl:"der große Mann",en:"the tall man"},{nl:"die kleine Frau",en:"the short woman"},{nl:"das alte Haus",en:"the old house"},{nl:"die netten Leute",en:"the nice people"}]},
{type:"mc",q:"What ending do adjectives get after definite articles in singular nominative?",opts:["-e","-en","-er","-es"],ans:"-e",hint:"Singular nominative is the simplest case for weak endings."},
{type:"fb",s:"Der {1} Film ist sehr spannend.",a:["neue"],opts:["neue","neuen","neuer","neu"],hint:"After der (masc. nominative), the weak adjective ending applies."},
{type:"drag_fill",s:"Die {1} Katze und der {2} Hund sind Freunde.",blanks:{"1":"kleine","2":"große"},pool:["kleine","große","kleinen","großen"],hint:"Both are singular nominative after definite articles."},
{type:"mc",q:"Which is correct?",opts:["die schönen Blumen","die schöne Blumen","die schöner Blumen","die schön Blumen"],ans:"die schönen Blumen",hint:"Plural adjective endings after definite articles are different from singular."},
{type:"fb",s:"Das {1} Restaurant ist am Marktplatz.",a:["neue"],opts:["neue","neuen","neuer","neu"],hint:"After das (neuter nominative), the adjective takes the weak ending."}
]},
{id:"deu13l6",title:"Ein großer Mann",icon:"🎩",xp:20,board:true,steps:[
{type:"intro",title:"Ein großer Mann",desc:"Learn how adjective endings change after ein, eine, ein (indefinite articles).",goals:["Understand adjective endings after indefinite articles","See the difference from definite article endings","Apply strong endings where ein gives no signal"]},
{type:"tip",title:"Adjective endings after ein/eine/ein",text:"After indefinite articles, adjectives sometimes do the 'signaling'.\n\nNominative:\nein großer Mann (a tall man) \u2192 -er\neine kleine Frau (a short woman) \u2192 -e\nein altes Haus (an old house) \u2192 -es\n\nWhy? ein has no ending for masc/neut.\nSo the ADJECTIVE takes over the signal:\n-er for masculine, -es for neuter.\nFeminine eine already signals, so adjective stays -e."},
{type:"teach",kind:"phrase",nl:"ein großer Mann",en:"a tall man",phonetic:"ine GROH-ser MAHN",example:"A: Wer ist das?\nB: Das ist ein großer Mann mit einem Hut.",exampleEn:"A: Who is that?\nB: That is a tall man with a hat.",note:"ein (no ending) + großer (-er signals masculine)."},
{type:"teach",kind:"phrase",nl:"eine kleine Frau",en:"a short woman",phonetic:"INE-e KLINE-e FROW",example:"A: Siehst du die Frau dort?\nB: Ja, eine kleine Frau mit roten Haaren.",exampleEn:"A: Do you see the woman there?\nB: Yes, a short woman with red hair.",note:"eine already signals feminine, so adjective gets -e."},
{type:"teach",kind:"phrase",nl:"ein altes Haus",en:"an old house",phonetic:"ine AHL-tes HOWS",example:"A: Was ist das?\nB: Das ist ein altes Haus aus dem 18. Jahrhundert.",exampleEn:"A: What is that?\nB: That is an old house from the 18th century.",note:"ein (no ending) + altes (-es signals neuter)."},
{type:"teach",kind:"word",nl:"lang",en:"long",phonetic:"LAHNG",example:"A: Hast du einen langen Weg zur Arbeit?\nB: Nein, es ist ein kurzer Weg.",exampleEn:"A: Do you have a long way to work?\nB: No, it is a short way.",note:"ein kurzer Weg = a short way (masc. nom. + adjective)."},
{type:"teach",kind:"word",nl:"kurz",en:"short (length)",phonetic:"KOORTS",example:"A: Der Film ist kurz.\nB: Ja, ein kurzer Film, aber sehr gut!",exampleEn:"A: The film is short.\nB: Yes, a short film, but very good!",note:"kurz → kürzer → am kürzesten (Umlaut in comparative)."},
{type:"mc",q:"'Ein _____ Kind spielt im Garten.' Which ending?",opts:["kleines","kleine","kleiner","klein"],ans:"kleines",hint:"After ein (neuter), the adjective must signal the gender."},
{type:"fb",s:"Das ist {1} Mann.",a:["ein großer"],opts:["ein großer","ein große","ein großes","einer großer"],hint:"Masculine nominative: ein has no ending, so the adjective signals."},
{type:"mc",q:"Why does 'ein großer Mann' have -er but 'der große Mann' has -e?",opts:["Because ein has no masculine signal, so the adjective takes over","Because ein is informal","Because der is always -e","Because masculine always gets -er"],ans:"Because ein has no masculine signal, so the adjective takes over",hint:"The adjective compensates when the article cannot show gender."},
{type:"fb",s:"Ich sehe {1} Katze.",a:["eine kleine"],opts:["eine kleine","ein kleiner","eine kleiner","ein kleine"],hint:"Feminine: eine already signals, so the adjective stays simple."},
{type:"match",pairs:[{nl:"ein großer Mann",en:"a tall man (-er)"},{nl:"eine kleine Frau",en:"a short woman (-e)"},{nl:"ein altes Haus",en:"an old house (-es)"},{nl:"der große Mann",en:"the tall man (-e)"},{nl:"das alte Haus",en:"the old house (-e)"}]},
{type:"mc",q:"'Eine _____ Tasche liegt auf dem Tisch.' Which ending?",opts:["schöne","schöner","schönes","schönen"],ans:"schöne",hint:"After eine (feminine), the adjective takes the simple ending."},
{type:"drag_fill",s:"{1} Hund und {2} Katze spielen zusammen.",blanks:{"1":"ein kleiner","2":"eine große"},pool:["ein kleiner","eine große","ein kleines","eine kleiner"],hint:"Masc. nom. gets -er signal, fem. nom. gets -e."},
{type:"fb",s:"Das ist {1} Buch.",a:["ein gutes"],opts:["ein gutes","ein guter","ein gute","eine gutes"],hint:"Neuter nominative: ein has no ending, so adjective gets -es."},
{type:"mc",q:"Which pair shows the correct difference?",opts:["der alte Mann / ein alter Mann","der alter Mann / ein alte Mann","der altes Mann / ein alte Mann","der alten Mann / ein alter Mann"],ans:"der alte Mann / ein alter Mann",hint:"After der: -e ending. After ein (masc.): -er ending."},
{type:"drag_fill",s:"Hier ist {1} und dort ist {2}.",blanks:{"1":"ein neues Auto","2":"ein alter Bus"},pool:["ein neues Auto","ein alter Bus","ein neue Auto","ein altes Bus"],hint:"Neuter gets -es signal, masculine gets -er signal after ein."},
{type:"fb",s:"Er hat {1} Idee.",a:["eine gute"],opts:["eine gute","ein guter","eine guter","ein gutes"],hint:"Idee is feminine. After eine, the adjective takes what ending?"}
]},
{id:"deu13l7",title:"So groß wie...",icon:"🤝",xp:20,board:true,steps:[
{type:"intro",title:"So groß wie...",desc:"Learn to express equality and inequality: so...wie, genauso...wie, nicht so...wie.",goals:["Use so...wie for equal comparisons","Use nicht so...wie for inequality","Use genauso...wie for emphasis"]},
{type:"teach",kind:"phrase",nl:"so ... wie",en:"as ... as",phonetic:"zoh ... vee",example:"A: Ist Tom so groß wie Peter?\nB: Ja, er ist genau so groß wie Peter.",exampleEn:"A: Is Tom as tall as Peter?\nB: Yes, he is exactly as tall as Peter.",note:"For equal comparisons. Use the base adjective (not comparative)."},
{type:"teach",kind:"phrase",nl:"genauso ... wie",en:"just as ... as",phonetic:"ge-NOW-zoh ... vee",example:"A: Ist das Buch genauso gut wie der Film?\nB: Ja, das Buch ist genauso gut!",exampleEn:"A: Is the book just as good as the film?\nB: Yes, the book is just as good!",note:"Stronger version of so...wie. Emphasizes equality."},
{type:"teach",kind:"phrase",nl:"nicht so ... wie",en:"not as ... as",phonetic:"nikht zoh ... vee",example:"A: Ist der Bus so schnell wie der Zug?\nB: Nein, der Bus ist nicht so schnell wie der Zug.",exampleEn:"A: Is the bus as fast as the train?\nB: No, the bus is not as fast as the train.",note:"For inequality. Base adjective, not comparative."},
{type:"teach",kind:"word",nl:"genauso",en:"just as, equally",phonetic:"ge-NOW-zoh",example:"A: Kocht dein Vater gut?\nB: Ja, er kocht genauso gut wie meine Mutter.",exampleEn:"A: Does your father cook well?\nB: Yes, he cooks just as well as my mother.",note:"Emphasizes that two things are equal."},
{type:"tip",title:"Comparing equals vs. unequals",text:"Equal: so + adjective + wie\nDer Tee ist so heiß wie der Kaffee.\n\nStrong equal: genauso + adjective + wie\nSie ist genauso klug wie er.\n\nnot equal: nicht so + adjective + wie\nDer Winter ist nicht so warm wie der Sommer.\n\nRemember: use the BASE form of the adjective.\nNEVER: so schneller wie (wrong!)\nALWAYS: so schnell wie (correct!)"},
{type:"mc",q:"How do you say 'as big as' in German?",opts:["so groß wie","so größer wie","so groß als","mehr groß wie"],ans:"so groß wie",hint:"Equal comparisons use the base adjective form with specific framing words."},
{type:"fb",s:"Der Tee ist {1} heiß wie der Kaffee.",a:["so"],opts:["so","als","mehr","sehr"],hint:"Which word starts an equal comparison?"},
{type:"mc",q:"'Berlin ist nicht so klein _____ Hamburg.' What completes this?",opts:["wie","als","so","dass"],ans:"wie",hint:"In equal and unequal comparisons, the second element uses the same word."},
{type:"fb",s:"Mein Auto ist nicht {1} schnell wie dein Auto.",a:["so"],opts:["so","als","sehr","mehr"],hint:"This word begins the 'not as ... as' construction."},
{type:"match",pairs:[{nl:"so ... wie",en:"as ... as"},{nl:"genauso ... wie",en:"just as ... as"},{nl:"nicht so ... wie",en:"not as ... as"},{nl:"schneller als",en:"faster than"},{nl:"am schnellsten",en:"the fastest"}]},
{type:"drag_fill",s:"Sie ist {1} klug {2} ihr Bruder.",blanks:{"1":"genauso","2":"wie"},pool:["genauso","wie","als","so"],hint:"Express that she is equally smart. Use the emphatic form."},
{type:"mc",q:"Which sentence is correct?",opts:["Er läuft so schnell wie ich.","Er läuft so schneller wie ich.","Er läuft so schnell als ich.","Er läuft schnell so wie ich."],ans:"Er läuft so schnell wie ich.",hint:"Equal comparisons need the base form, not the comparative."},
{type:"fb",s:"Das Buch ist {1} gut wie der Film.",a:["genauso"],opts:["genauso","nicht","so","als"],hint:"Use the emphatic 'just as' form here."},
{type:"drag_fill",s:"Der Winter ist {1} warm {2} der Sommer.",blanks:{"1":"nicht so","2":"wie"},pool:["nicht so","wie","als","genauso"],hint:"Express inequality: winter is NOT as warm as summer."},
{type:"mc",q:"When comparing with als vs. wie: which is correct?",opts:["als after comparatives, wie after so/genauso","wie after comparatives, als after so/genauso","They are interchangeable","als is formal, wie is informal"],ans:"als after comparatives, wie after so/genauso",hint:"Each comparison structure has its own connecting word."},
{type:"fb",s:"Deutsch ist nicht {1} schwer wie Chinesisch.",a:["so"],opts:["so","als","mehr","sehr"],hint:"Express that German is not as difficult as Chinese."},
{type:"drag_fill",s:"Pizza ist {1} {2} Pasta, aber Sushi ist {3} als beide.",blanks:{"1":"genauso","2":"gut wie","3":"besser"},pool:["genauso","gut wie","besser","so"],hint:"First equal comparison, then a comparative."}
]},
{id:"deu13l8",title:"Alles zusammen!",icon:"🎯",xp:20,board:true,steps:[
{type:"intro",title:"Alles zusammen!",desc:"Review everything: comparatives, superlatives, irregular forms, adjective endings, and equal comparisons.",goals:["Combine all comparison forms","Mix regular and irregular forms","Apply adjective declension in comparisons"]},
{type:"mc",q:"What is the correct comparative form of 'gern'?",opts:["lieber","gerner","mehr gern","am liebsten"],ans:"lieber",hint:"This is one of the fully irregular comparison sets."},
{type:"fb",s:"Der Mount Everest ist {1} Berg der Welt.",a:["der höchste"],opts:["der höchste","am höchsten","höher","ein hoher"],hint:"Use the superlative with a definite article before the noun."},
{type:"mc",q:"'Ein _____ Mädchen singt.' What ending?",opts:["kleines","kleine","kleiner","klein"],ans:"kleines",hint:"Mädchen is neuter. After ein (neuter), the adjective signals the gender."},
{type:"drag_fill",s:"Mein Bruder ist {1} als ich, aber meine Schwester ist {2}.",blanks:{"1":"älter","2":"am ältesten"},pool:["älter","am ältesten","alt","jünger"],hint:"Comparative for the brother, superlative for the sister."},
{type:"fb",s:"Die Suppe ist {1} heiß wie der Tee.",a:["genauso"],opts:["genauso","mehr","als","nicht"],hint:"Express that both are equally hot."},
{type:"mc",q:"Which is correct?",opts:["Das ist der beste Film.","Das ist der besserte Film.","Das ist der am besten Film.","Das ist der gutste Film."],ans:"Das ist der beste Film.",hint:"Before a noun with definite article, use the adjective form of the superlative."},
{type:"match",pairs:[{nl:"besser als",en:"better than"},{nl:"am besten",en:"the best"},{nl:"so gut wie",en:"as good as"},{nl:"der beste Film",en:"the best film"},{nl:"ein guter Film",en:"a good film"}]},
{type:"fb",s:"Sie ist {1} als er, aber nicht so groß wie Maria.",a:["größer"],opts:["größer","am größten","groß","so groß"],hint:"Comparing two people requires the comparative form."},
{type:"drag_fill",s:"{1} Katze ist {2} als {3} Hund.",blanks:{"1":"die kleine","2":"schneller","3":"der große"},pool:["die kleine","schneller","der große","ein kleiner"],hint:"Definite articles with adjective endings plus a comparative."},
{type:"mc",q:"'Ich esse _____ Schokolade als Obst.' What fits?",opts:["lieber","am liebsten","gern","besser"],ans:"lieber",hint:"You prefer one over the other. Which irregular comparative expresses preference?"},
{type:"fb",s:"Das ist {1} Restaurant in der Stadt.",a:["das beste"],opts:["das beste","am besten","das bessere","ein bestes"],hint:"Superlative before a noun with definite article."},
{type:"drag_fill",s:"Ein {1} Mann trinkt {2} Kaffee {3} ein {4} Kind.",blanks:{"1":"alter","2":"mehr","3":"als","4":"junges"},pool:["alter","mehr","als","junges","alte","wie"],hint:"Indefinite article endings: masc. gets -er, neuter gets -es."},
{type:"mc",q:"Complete: 'Hamburg ist groß, München ist _____, aber Berlin ist _____.'",opts:["größer / am größten","mehr groß / am großsten","großer / am größten","größer / der größte"],ans:"größer / am größten",hint:"Comparative for Munich, superlative for Berlin."},
{type:"fb",s:"Ein {1} Buch ist besser als ein schlechtes Buch.",a:["gutes"],opts:["gutes","guter","gute","gut"],hint:"Buch is neuter. After ein (neuter), what ending does the adjective need?"},
{type:"drag_fill",s:"Der Sommer ist {1} als der Frühling, aber der Winter ist {2} {3} der Sommer.",blanks:{"1":"wärmer","2":"nicht so warm","3":"wie"},pool:["wärmer","nicht so warm","wie","als","am wärmsten"],hint:"First a comparative comparison, then an unequal comparison."},
{type:"mc",q:"Which sentence uses ALL three comparison types correctly?",opts:["Er ist so alt wie ich, aber größer als ich, und am schnellsten von uns drei.","Er ist so älter wie ich, aber groß als ich, und am schnelleren.","Er ist als alt wie ich, aber größer wie ich, und der schnellsten.","Er ist so alt als ich, aber mehr groß als ich, und am schnellsten."],ans:"Er ist so alt wie ich, aber größer als ich, und am schnellsten von uns drei.",hint:"Check each part: equal (so...wie), comparative (..er als), superlative (am ...sten)."},
{type:"drag_fill",s:"Die {1} Lehrerin gibt {2} Hausaufgaben {3} der {4} Lehrer.",blanks:{"1":"neue","2":"mehr","3":"als","4":"alte"},pool:["neue","mehr","als","alte","neuer","älter"],hint:"Definite article adjective endings (both -e in nom.) plus a comparative."},
{type:"fb",s:"Am {1} lerne ich Deutsch!",a:["liebsten"],opts:["liebsten","besten","meisten","liebster"],hint:"What do you like doing most of all? Use the superlative of gern."}
]}
]},
];