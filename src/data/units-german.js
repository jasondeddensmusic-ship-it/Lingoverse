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

];
