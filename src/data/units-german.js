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

  {type:"verb_table",title:"haben — to have",label:"Present tense conjugation",groups:[
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

];
