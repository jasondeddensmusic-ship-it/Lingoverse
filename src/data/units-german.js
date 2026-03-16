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
  {type:"teach",kind:"phrase",nl:"Viertel vor ...",en:"quarter to ...",phonetic:"FEER-tel FOR",example:"A: Viertel vor fünf — wir müssen losfahren!\nB: Ja, gleich bin ich fertig.\nA: Beeil dich!",exampleEn:"A: Quarter to five — we have to leave!\nB: Yes, I am almost ready.\nA: Hurry up!",note:"Vor = before/to. Viertel vor fünf = 4:45.\nCounts toward the next hour like halb."},
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
  {type:"teach",kind:"word",nl:"duschen",en:"to shower",phonetic:"DOO-shen",example:"A: Duschst du morgens oder abends?\nB: Ich dusche immer morgens.\nA: Ich auch — das wacht mich auf!",exampleEn:"A: Do you shower in the morning or evening?\nB: I always shower in the morning.\nA: Me too — it wakes me up!",note:"Regular verb, no separable prefix.\ndie Dusche = the shower (feminine)."},
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
  {type:"mc",q:"Der Wecker klingelt. What happens next in the routine?",opts:["Du gehst schlafen.","Du stehst auf.","Du isst Mittagessen.","Du kommst nach Hause."],ans:"Du stehst auf.",hint:"The alarm rings — so you..."},
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
  {type:"mc",q:"'Ich kaufe heute Gemüse ein.' The word 'ein' is at the end because:",opts:["It is an article","Einkaufen is separable — prefix goes last","Gemüse is neuter","Ein always ends sentences"],ans:"Einkaufen is separable — prefix goes last",hint:"Ein is the separable prefix of einkaufen."},
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
  {type:"mc",q:"'Ins Bett gehen' — 'ins' is a contraction of:",opts:["in + das","in + dem","an + das","auf + das"],ans:"in + das",hint:"Ins = in + das (into the). Das Bett is neuter."},
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
  {type:"mc",q:"Am Mittwoch — which day is this?",opts:["Monday","Wednesday","Saturday","Thursday"],ans:"Wednesday",hint:"Mittwoch = middle of the week."},
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

];
