// src/data/units-french.js - French (lang:"fr") curriculum units
// A1-B2 curriculum, DELF / CEFR aligned
// Article colors: le=blue (#4A8FE7), la=coral (#E8475E)
// Elision: le/la → l' before vowels (gender hidden, must memorize)

// ═══ FRENCH SEED REGISTRY ═══
// concept → first_seen → harvest
// agreement_web → fre1l5 (JRTF) → fre3l5
// tu_vous → fre1l6 → fre2l4 (deepened)
// er_verbs → fre2l6 (seeds) → fre5l1
// partitive_articles → fre4l4 → fre4l5 (practiced)
// passé_composé_avoir → fre9l1 → fre9l3 (drilled)
// passé_composé_être → fre10l1 → fre10l3 (drilled)
// imparfait → fre11l1 → fre12l1 (vs passé composé)
// subjonctif → fre17l1 → fre18l1 (irregular forms)

export default [

// ── FRENCH UNITS (v1 Curriculum) ──

// ══════════════════════════════════════════════════════════════
// UNIT 1: BIENVENUE! — Greetings & Goodbyes
// Core constructs named: Agreement Web preview, tu/vous, Bonjour culture
// P26: L1-L3 name core constructs. L4+ elaborate.
// ══════════════════════════════════════════════════════════════
{n:1,lang:"fr",track:"v1",title:"Bienvenue!",sub:"Greetings & Goodbyes",icon:"👋",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Bonjour! ═══
{id:"fre1l1",title:"Bonjour!",icon:"👋",xp:15,board:true,steps:[
  {type:"intro",title:"Bonjour!",desc:"Your first French words: the greetings that open every door. In France, saying Bonjour is not optional. It is the key to every interaction.",goals:["4 core greetings","Know which greeting fits which time","Understand Bonjour culture"]},

  {type:"teach",kind:"phrase",nl:"Bonjour",en:"Hello / Good day",phonetic:"bon-ZHOOR",cognate:{words:[{lang:"English",word:"bon voyage (good journey)"}],family:"romance"},example:"A: Bonjour!\nB: Bonjour! Comment allez-vous?\nA: Très bien, merci!",exampleEn:"A: Hello!\nB: Hello! How are you?\nA: Very well, thank you!",note:"The universal French greeting.\nUsed from morning until early evening.\nALWAYS say Bonjour before any interaction: shops, offices, strangers."},

  {type:"tip",title:"Bonjour Is Not Optional",text:"In France, skipping Bonjour is rude. Before asking anything:\n\n1. Enter a shop: Bonjour!\n2. Approach a stranger: Bonjour, excusez-moi...\n3. Answer the phone: Allô? (different from Bonjour)\n4. Start any conversation: Bonjour!\n\nFrench people notice when you skip it. It signals respect.",deepDive:{title:"Why is Bonjour so important?",text:"French politesse (politeness) culture requires acknowledging the other person before any request. Jumping straight to a question without Bonjour is like walking into someone's home without knocking.\n\nThis applies everywhere: boulangeries, pharmacies, restaurants, offices. Even a quick Bonjour to your neighbor in the elevator is expected. It costs nothing and earns everything."}},

  {type:"tip",title:"How French Works: Your Roadmap",text:"French has 8 systems you will learn step by step:\n\n1. le/la articles: every noun has a gender (Unit 4)\n2. Verb conjugation: verbs change by person (Unit 5)\n3. The Agreement Web: adjectives match nouns (Unit 3)\n4. tu/vous: formal and informal you (this unit, Lesson 6)\n5. Nasal vowels: sounds that do not exist in English (Foundations)\n6. Silent letters: most final consonants are not pronounced\n7. Liaison: silent consonants wake up before vowels\n8. Passé composé vs imparfait: the great tense battle (A2)\n\nYou do not need to understand these yet. Just know they are coming.",deepDive:{title:"Why a roadmap?",text:"Research shows that knowing the shape of what you are learning helps you learn faster. When you encounter a grammar rule later, your brain will say: I was expecting this.\n\nFrench is a Romance language from Latin. English borrowed about 40% of its vocabulary from French after 1066. You already know more French than you think."}},

  {type:"teach",kind:"phrase",nl:"Bonsoir",en:"Good evening",phonetic:"bon-SWAHR",example:"A: Bonsoir, madame!\nB: Bonsoir! Vous désirez?\nA: Une table pour deux, s'il vous plaît.",exampleEn:"A: Good evening, ma'am!\nB: Good evening! What would you like?\nA: A table for two, please.",note:"Used from about 6 PM onwards.\nBon = good. Soir = evening.\nSame structure as Bonjour (bon + jour = good + day)."},

  {type:"teach",kind:"phrase",nl:"Salut",en:"Hi / Hey (casual)",phonetic:"sah-LEW",example:"A: Salut, Marie!\nB: Salut! Ça va?\nA: Oui, ça va bien!",exampleEn:"A: Hi, Marie!\nB: Hi! How's it going?\nA: Yes, I'm good!",note:"Casual greeting for friends and peers.\nNEVER use with strangers or in formal settings.\nAlso works as a casual goodbye: Salut!"},

  {type:"teach",kind:"phrase",nl:"Bonne nuit",en:"Good night",phonetic:"bon NWEE",example:"A: Je vais dormir. Bonne nuit!\nB: Bonne nuit! Fais de beaux rêves.\nA: Merci, toi aussi!",exampleEn:"A: I'm going to sleep. Good night!\nB: Good night! Sweet dreams.\nA: Thanks, you too!",note:"Said only at bedtime, when going to sleep.\nNOT a greeting. NOT used in the evening as hello.\nBonne = good (feminine). Nuit = night (feminine noun)."},

  {type:"tip",title:"Bon vs Bonne: A First Glimpse of Agreement",text:"Notice two patterns:\n\nBonjour = bon + jour (masculine: le jour)\nBonsoir = bon + soir (masculine: le soir)\nBonne nuit = bonne + nuit (feminine: la nuit)\n\nBon becomes bonne before feminine nouns. This is the Agreement Web in action. You will learn this properly in Unit 3.",deepDive:{title:"The Agreement Web preview",text:"In French, adjectives change form to match the noun's gender. Bon (good) becomes bonne before feminine nouns. Grand (big) becomes grande. Petit (small) becomes petite.\n\nThis is one of the most important patterns in French. For now, just notice it in the greetings. The full system comes later."}},

  {type:"mc",q:"You walk into a bakery at 10 AM. Before ordering, you say:",opts:["Bonsoir!","Bonjour!","Bonne nuit!","Salut!"],ans:"Bonjour!",hint:"Morning through afternoon, always this greeting."},

  {type:"mc",q:"It is 8 PM. You arrive at a restaurant. You greet the host with:",opts:["Bonjour!","Bonne nuit!","Bonsoir!","Salut!"],ans:"Bonsoir!",hint:"Evening greeting, used from about 6 PM."},

  {type:"mc",q:"Your friend texts you. You reply casually with:",opts:["Bonjour, monsieur","Bonsoir, madame","Bonne nuit","Salut!"],ans:"Salut!",hint:"Casual greeting for friends, not formal."},

  {type:"fb",s:"___ nuit! Je vais dormir.",a:"Bonne",opts:["Bonne","Bon","Bonjour","Salut"],hint:"Complete the bedtime farewell. The noun is feminine."},

  {type:"mc",q:"Why is 'Bonne nuit' feminine but 'Bonjour' is not?",opts:["Random choice","la nuit is feminine, le jour is masculine","Nuit is longer","Jour is a verb"],ans:"la nuit is feminine, le jour is masculine",hint:"French nouns have gender. The adjective matches."},

  {type:"match",pairs:[{nl:"Bonjour",en:"Hello / Good day"},{nl:"Bonsoir",en:"Good evening"},{nl:"Salut",en:"Hi (casual)"},{nl:"Bonne nuit",en:"Good night"}]},

  {type:"mc",q:"Skipping 'Bonjour' in a French shop is considered:",opts:["Normal","Rude","Only wrong in Paris","Fine if you are in a hurry"],ans:"Rude",hint:"French politesse requires greeting before any request."},

  {type:"fb",s:"Bon___! Comment allez-vous?",a:"jour",opts:["jour","soir","nuit","salut"],hint:"Daytime greeting: bon + this word."},

  {type:"mc",q:"'Salut' can be used as:",opts:["Only a greeting","Only a goodbye","Both a casual greeting and goodbye","A formal greeting"],ans:"Both a casual greeting and goodbye",hint:"Like Italian ciao, this word works both ways."},

  {type:"mc",q:"Which greeting would you NEVER use with a stranger?",opts:["Bonjour","Bonsoir","Salut","Bonne nuit"],ans:"Salut",hint:"One of these is only for friends and peers."},
]},

// ═══ L2: Au revoir! ═══
{id:"fre1l2",title:"Au revoir!",icon:"👋",xp:15,board:true,steps:[
  {type:"intro",title:"Au revoir!",desc:"Now that you can say hello, learn how to say goodbye. French has formal and casual farewells, plus time-based options.",goals:["4 ways to say goodbye","Formal vs casual register","Time-based farewells with à"]},

  {type:"teach",kind:"phrase",nl:"Au revoir",en:"Goodbye (standard)",phonetic:"oh ruh-VWAHR",cognate:{words:[{lang:"English",word:"reservoir (seeing again)"}],family:"romance"},example:"A: Merci beaucoup! Au revoir!\nB: Au revoir! Bonne journée!\nA: Merci, vous aussi!",exampleEn:"A: Thank you very much! Goodbye!\nB: Goodbye! Have a nice day!\nA: Thanks, you too!",note:"The standard goodbye. Works in any situation.\nLiterally: to the seeing-again (au = to the, revoir = to see again).\nSafe with strangers, colleagues, and friends."},

  {type:"teach",kind:"phrase",nl:"À bientôt",en:"See you soon",phonetic:"ah bee-en-TOH",example:"A: Je dois partir. À bientôt!\nB: À bientôt! Passe une bonne soirée.\nA: Toi aussi!",exampleEn:"A: I have to leave. See you soon!\nB: See you soon! Have a good evening.\nA: You too!",note:"À = to/until. Bientôt = soon.\nUse when you expect to meet again but have no set time.\nThe circumflex on ô marks a historical lost S (Old French: bientost)."},

  {type:"teach",kind:"phrase",nl:"À demain",en:"See you tomorrow",phonetic:"ah duh-MAN",example:"A: C'est tout pour aujourd'hui. À demain!\nB: À demain! Bonne soirée.\nA: Merci!",exampleEn:"A: That's all for today. See you tomorrow!\nB: See you tomorrow! Good evening.\nA: Thanks!",note:"À = to/until. Demain = tomorrow.\nCommon among classmates and colleagues.\nNasal vowel: demain ends with the in/ain nasal sound."},

  {type:"teach",kind:"phrase",nl:"À plus tard",en:"See you later",phonetic:"ah plew TAHR",example:"A: Je reviens dans une heure. À plus tard!\nB: À plus tard! Pas de problème.\nA: Merci!",exampleEn:"A: I'll be back in an hour. See you later!\nB: See you later! No problem.\nA: Thanks!",note:"À = to/until. Plus tard = later.\nCasual short form: À plus! (ah PLEWS) or even just A+.\nThe S in plus is silent here."},

  {type:"tip",title:"À + Time: Build Your Own Farewell",text:"French builds time-based farewells with one word:\n\nà + bientôt = à bientôt (see you soon)\nà + demain = à demain (see you tomorrow)\nà + plus tard = à plus tard (see you later)\nà + lundi = à lundi (see you Monday)\nà + ce soir = à ce soir (see you tonight)\n\nYou can use à with any time word to build a farewell!",deepDive:{title:"Au revoir vs À bientôt",text:"Au revoir is the most neutral goodbye. It makes no promise about meeting again.\n\nÀ bientôt implies you expect to see the person again soon. À demain specifies tomorrow. À plus tard means later today.\n\nThe à + time pattern is infinitely productive. Once you know it, you can create any time-based farewell by combining à with a time expression."}},

  {type:"teach",kind:"phrase",nl:"Bonne journée",en:"Have a nice day",phonetic:"bon zhoor-NAY",example:"A: Merci pour tout. Au revoir!\nB: Au revoir! Bonne journée!\nA: Vous aussi!",exampleEn:"A: Thanks for everything. Goodbye!\nB: Goodbye! Have a nice day!\nA: You too!",note:"Said by shopkeepers, colleagues, anyone parting during the day.\nJournée = the span of the day (feminine).\nBonne = good (feminine form, because journée is feminine)."},

  {type:"teach",kind:"phrase",nl:"Bonne soirée",en:"Have a nice evening",phonetic:"bon swah-RAY",example:"A: Je rentre chez moi. Bonne soirée!\nB: Bonne soirée! À demain.\nA: À demain!",exampleEn:"A: I'm going home. Have a nice evening!\nB: Have a nice evening! See you tomorrow.\nA: See you tomorrow!",note:"Said when parting in the evening.\nSoirée = the span of the evening (feminine).\nBonne soirée vs Bonsoir: soirée is a farewell wish, soir is a greeting."},

  {type:"mc",q:"The standard goodbye that works in ANY situation is:",opts:["Salut","Bonne nuit","Au revoir","À plus"],ans:"Au revoir",hint:"The most neutral, universally appropriate farewell."},

  {type:"mc",q:"You are leaving a colleague. You will see them tomorrow. You say:",opts:["Au revoir","À demain","Bonne nuit","Salut"],ans:"À demain",hint:"À + the word for tomorrow."},

  {type:"fb",s:"À ___! On se voit la semaine prochaine.",a:"bientôt",opts:["bientôt","demain","revoir","plus"],hint:"See you soon, no exact time specified."},

  {type:"mc",q:"'À plus tard' means:",opts:["Goodbye forever","See you later","Good night","Have a nice day"],ans:"See you later",hint:"Plus tard = later. À = until."},

  {type:"match",pairs:[{nl:"Au revoir",en:"Goodbye"},{nl:"À demain",en:"See you tomorrow"},{nl:"À bientôt",en:"See you soon"},{nl:"Bonne journée",en:"Have a nice day"}]},

  {type:"mc",q:"A shopkeeper says 'Bonne journée!' as you leave. This means:",opts:["Come back soon","Have a nice day","Goodbye forever","Good morning"],ans:"Have a nice day",hint:"Bonne = good. Journée = the span of the day."},

  {type:"mc",q:"'Bonne soirée' is used when parting in the:",opts:["Morning","Afternoon","Evening","At bedtime"],ans:"Evening",hint:"Soirée refers to the later part of the day, after work."},

  {type:"fb",s:"Bonne ___! À demain.",a:"soirée",opts:["soirée","journée","nuit","matinée"],hint:"Evening farewell wish when you will see them tomorrow."},

  {type:"mc",q:"The casual short form of 'à plus tard' is:",opts:["À tard","À plus","Au revoir","Salut plus"],ans:"À plus",hint:"Drop 'tard' for the casual version. Written as A+ in texts."},

  {type:"mc",q:"'Bonne journée' uses 'bonne' (not 'bon') because:",opts:["It sounds better","la journée is feminine","It is more polite","Random choice"],ans:"la journée is feminine",hint:"The adjective matches the noun's gender. Agreement Web!"},
]},

// ═══ L3: Comment ça va? ═══
{id:"fre1l3",title:"Comment ça va?",icon:"🗣️",xp:15,board:true,steps:[
  {type:"intro",title:"Comment ça va?",desc:"Learn to ask how someone is doing and give real answers. French has formal and casual ways to ask, and the answers range from great to not so great.",goals:["Ask how are you (formal and casual)","Give 5 different responses","Handle the ça va exchange"]},

  {type:"teach",kind:"phrase",nl:"Comment allez-vous?",en:"How are you? (formal)",phonetic:"koh-MON tah-lay VOO",example:"A: Bonjour! Comment allez-vous?\nB: Très bien, merci. Et vous?\nA: Bien, merci!",exampleEn:"A: Hello! How are you?\nB: Very well, thank you. And you?\nA: Well, thank you!",note:"Formal: use with strangers, elders, professionals.\nVous = formal you. Allez = go (you go, formal).\nLiterally: How go you?"},

  {type:"teach",kind:"phrase",nl:"Ça va?",en:"How's it going? (casual)",phonetic:"sah VAH",example:"A: Salut! Ça va?\nB: Oui, ça va. Et toi?\nA: Ça va bien!",exampleEn:"A: Hi! How's it going?\nB: Yeah, fine. And you?\nA: I'm good!",note:"Casual: use with friends, peers, children.\nÇa = that/it. Va = goes.\nLiterally: Does it go? Response: Ça va. (It goes.)"},

  {type:"teach",kind:"phrase",nl:"Très bien",en:"Very well",phonetic:"treh bee-EN",example:"A: Comment allez-vous?\nB: Très bien, merci! Et vous?\nA: Très bien aussi!",exampleEn:"A: How are you?\nB: Very well, thank you! And you?\nA: Very well too!",note:"The most positive standard response.\nTrès = very. Bien = well.\nAlways sounds polite and upbeat."},

  {type:"teach",kind:"phrase",nl:"Comme ci, comme ça",en:"So-so",phonetic:"kom SEE kom SAH",example:"A: Ça va?\nB: Comme ci, comme ça.\nA: Oh, qu'est-ce qui ne va pas?",exampleEn:"A: How's it going?\nB: So-so.\nA: Oh, what's wrong?",note:"Literally: like this, like that.\nA neutral, honest answer. Neither great nor terrible.\nFrench speakers may follow up with concern if you say this."},

  {type:"teach",kind:"phrase",nl:"Pas mal",en:"Not bad",phonetic:"pah MAHL",example:"A: Comment ça va?\nB: Pas mal, et toi?\nA: Pas mal non plus!",exampleEn:"A: How are you?\nB: Not bad, and you?\nA: Not bad either!",note:"Literally: not bad.\nSlightly positive, casual.\nPas = not. Mal = bad."},

  {type:"tip",title:"The Ça Va Ping-Pong",text:"A typical French exchange bounces back and forth:\n\n1. Greeting: Bonjour! or Salut!\n2. Ask: Comment allez-vous? or Ça va?\n3. Answer: Très bien / Ça va / Comme ci, comme ça\n4. Thank: merci\n5. Return: Et vous? (formal) or Et toi? (casual)\n6. Answer back: Bien, merci!\n\nThis ping-pong happens automatically. Practice until it flows.",deepDive:{title:"Et vous? vs Et toi?",text:"When someone asks how you are, you answer and then bounce the question back:\n\nFormal: Et vous? (And you, formal?)\nCasual: Et toi? (And you, casual?)\n\nVous and toi both mean you. Vous is formal, toi is casual. You will learn this distinction fully in Lesson 6."}},

  {type:"mc",q:"You greet your boss formally. You ask:",opts:["Ça va?","Comment allez-vous?","Salut, ça va?","Comment tu vas?"],ans:"Comment allez-vous?",hint:"Formal situations require the vous form."},

  {type:"mc",q:"A friend asks 'Ça va?' You are feeling okay but not great. You say:",opts:["Très bien!","Comme ci, comme ça","Bonsoir","Merci beaucoup"],ans:"Comme ci, comme ça",hint:"The so-so response: neither great nor terrible."},

  {type:"fb",s:"Comment ___-vous? Très bien, merci!",a:"allez",opts:["allez","vas","va","êtes"],hint:"Formal how are you: Comment ___ -vous?"},

  {type:"mc",q:"After answering 'Très bien, merci', you bounce the question back with:",opts:["Bonjour","Et vous? (formal) or Et toi? (casual)","Au revoir","Merci"],ans:"Et vous? (formal) or Et toi? (casual)",hint:"The ping-pong: answer, then return the question."},

  {type:"match",pairs:[{nl:"Très bien",en:"Very well"},{nl:"Comme ci, comme ça",en:"So-so"},{nl:"Pas mal",en:"Not bad"},{nl:"Ça va",en:"I'm fine / It's going"}]},

  {type:"mc",q:"'Ça va' is literally translated as:",opts:["I am well","How are you","It goes","Good day"],ans:"It goes",hint:"Ça = it/that. Va = goes."},

  {type:"mc",q:"'Pas mal' literally means:",opts:["Very good","Not bad","So-so","I am sick"],ans:"Not bad",hint:"Pas = not. Mal = bad."},

  {type:"fb",s:"Ça va? Oui, ___ bien, merci.",a:"ça va",opts:["ça va","très","je suis","comment"],hint:"Echo the question phrase back as an answer, adding bien."},

  {type:"mc",q:"Which response is the MOST positive?",opts:["Comme ci, comme ça","Pas mal","Très bien","Ça va"],ans:"Très bien",hint:"Très = very. Bien = well. The most upbeat response."},

  {type:"mc",q:"You meet a stranger. The correct way to ask how they are is:",opts:["Ça va?","Comment allez-vous?","T'es bien?","Salut!"],ans:"Comment allez-vous?",hint:"Strangers require the formal form of the question."},

  {type:"fb",s:"Comment allez-___? Très bien, merci!",a:"vous",opts:["vous","tu","toi","moi"],hint:"Formal how are you ends with this pronoun."},
]},

// ═══ L4: La politesse ═══
{id:"fre1l4",title:"La politesse",icon:"🙏",xp:15,board:true,steps:[
  {type:"intro",title:"La politesse",desc:"French politeness phrases are essential. Merci, s'il vous plaît, excusez-moi, and de rien will carry you through every interaction.",goals:["Say please and thank you","Apologize and excuse yourself","Use pardon vs excusez-moi"]},

  {type:"teach",kind:"phrase",nl:"Merci",en:"Thank you",phonetic:"mair-SEE",cognate:{words:[{lang:"English",word:"mercy"}],family:"romance"},example:"A: Voici votre café.\nB: Merci beaucoup!\nA: Je vous en prie.",exampleEn:"A: Here is your coffee.\nB: Thank you very much!\nA: You're welcome.",note:"The basic thank you. Works everywhere.\nMerci beaucoup = thank you very much.\nbeaucoup = a lot (boh-KOO)."},

  {type:"teach",kind:"phrase",nl:"S'il vous plaît",en:"Please (formal)",phonetic:"seel voo PLAY",example:"A: Un café, s'il vous plaît.\nB: Tout de suite!\nA: Merci!",exampleEn:"A: A coffee, please.\nB: Right away!\nA: Thank you!",note:"Literally: if it pleases you (formal).\nS'il = si + il (if it). Vous = you (formal). Plaît = pleases.\nCasual form: s'il te plaît (seel tuh PLAY)."},

  {type:"teach",kind:"phrase",nl:"De rien",en:"You're welcome",phonetic:"duh ree-EN",example:"A: Merci pour votre aide!\nB: De rien!\nA: Vous êtes très gentil.",exampleEn:"A: Thank you for your help!\nB: You're welcome!\nA: You are very kind.",note:"Literally: of nothing (it was nothing).\nCasual and common.\nMore formal options: Je vous en prie, Il n'y a pas de quoi."},

  {type:"teach",kind:"phrase",nl:"Excusez-moi",en:"Excuse me (formal)",phonetic:"ek-skew-ZAY MWAH",example:"A: Excusez-moi, où est la gare?\nB: La gare? C'est tout droit.\nA: Merci beaucoup!",exampleEn:"A: Excuse me, where is the station?\nB: The station? It's straight ahead.\nA: Thank you very much!",note:"Used to get attention or apologize.\nFormal: excusez-moi (vous form).\nCasual: excuse-moi (tu form)."},

  {type:"teach",kind:"phrase",nl:"Pardon",en:"Sorry / Pardon",phonetic:"par-DON",cognate:{words:[{lang:"English",word:"pardon"}],family:"romance"},example:"A: Pardon! Je suis désolé.\nB: Ce n'est pas grave.\nA: Merci de votre compréhension.",exampleEn:"A: Sorry! I apologize.\nB: It's not serious.\nA: Thank you for understanding.",note:"Quick apology or attention-getter.\nPardon = stepping on someone's foot, bumping into them.\nExcusez-moi = more deliberate (asking for directions, interrupting)."},

  {type:"tip",title:"Excusez-moi vs Pardon",text:"Both mean sorry or excuse me, but they differ:\n\nPardon: quick, reflexive. Bumping into someone, passing through a crowd.\nExcusez-moi: deliberate. Getting someone's attention, interrupting a conversation.\n\nBoth are polite. Neither is wrong. Pardon is shorter and more common for small incidents.",deepDive:{title:"Je suis désolé(e)",text:"For a sincere apology (not just bumping into someone), French uses:\n\nJe suis désolé (m) / Je suis désolée (f) = I am sorry.\n\nThis is stronger than Pardon and Excusez-moi. It expresses genuine regret. The extra -e on désolée is the feminine agreement. Silent in speech, visible in writing."}},

  {type:"mc",q:"You want to order a coffee politely. You say:",opts:["Un café, merci","Un café, s'il vous plaît","Un café, pardon","Un café, de rien"],ans:"Un café, s'il vous plaît",hint:"Please comes after your request in French."},

  {type:"mc",q:"Someone thanks you. You respond with:",opts:["Merci","S'il vous plaît","De rien","Pardon"],ans:"De rien",hint:"Literally: of nothing. It was nothing."},

  {type:"fb",s:"___, où est le métro?",a:"Excusez-moi",opts:["Excusez-moi","Merci","De rien","Bonjour"],hint:"Getting a stranger's attention politely."},

  {type:"mc",q:"You accidentally bump into someone. You quickly say:",opts:["De rien","Merci","Pardon","S'il vous plaît"],ans:"Pardon",hint:"Quick reflexive apology for small incidents."},

  {type:"match",pairs:[{nl:"Merci",en:"Thank you"},{nl:"S'il vous plaît",en:"Please"},{nl:"De rien",en:"You're welcome"},{nl:"Excusez-moi",en:"Excuse me"}]},

  {type:"mc",q:"'S'il vous plaît' literally means:",opts:["If it pleases you","Please now","Thank you please","Be kind"],ans:"If it pleases you",hint:"S'il = if it. Vous = you. Plaît = pleases."},

  {type:"mc",q:"The casual form of 's'il vous plaît' is:",opts:["S'il te plaît","S'il nous plaît","S'il elle plaît","Merci"],ans:"S'il te plaît",hint:"Replace vous (formal) with te (casual)."},

  {type:"fb",s:"Merci ___! Vous êtes très gentil.",a:"beaucoup",opts:["beaucoup","bien","très","mal"],hint:"Thank you very much. The word means a lot."},

  {type:"mc",q:"Which is a MORE formal way to say you're welcome?",opts:["De rien","Je vous en prie","Pas de quoi","OK"],ans:"Je vous en prie",hint:"The most formal you're welcome in French."},

  {type:"mc",q:"You need to interrupt a conversation to ask for directions. You say:",opts:["Pardon!","Excusez-moi...","Salut!","Merci!"],ans:"Excusez-moi...",hint:"Deliberate interruption requires this more formal form."},

  {type:"mc",q:"'De rien' literally translates to:",opts:["You're welcome","It's nothing","Of nothing","No problem"],ans:"Of nothing",hint:"De = of. Rien = nothing. A humble dismissal."},
]},

// ═══ L5: Les présentations ═══
{id:"fre1l5",title:"Les présentations",icon:"🤝",xp:15,board:true,steps:[
  {type:"intro",title:"Les présentations",desc:"Learn to introduce yourself and meet others. Je m'appelle, Enchanté, and the essential first exchange.",goals:["Introduce yourself by name","Ask someone's name","Say nice to meet you"]},

  {type:"teach",kind:"phrase",nl:"Je m'appelle...",en:"My name is... (I call myself...)",phonetic:"zhuh mah-PELL",example:"A: Bonjour! Je m'appelle Sophie.\nB: Enchanté! Je m'appelle Marc.\nA: Enchantée, Marc!",exampleEn:"A: Hello! My name is Sophie.\nB: Nice to meet you! My name is Marc.\nA: Nice to meet you, Marc!",note:"Literally: I call myself.\nJe = I. Me = myself. Appelle = call.\nThe most natural way to give your name."},

  {type:"teach",kind:"phrase",nl:"Comment vous appelez-vous?",en:"What is your name? (formal)",phonetic:"koh-MON vooz ah-PLAY VOO",example:"A: Bonjour. Comment vous appelez-vous?\nB: Je m'appelle Pierre Durand.\nA: Enchanté, monsieur Durand.",exampleEn:"A: Hello. What is your name?\nB: My name is Pierre Durand.\nA: Nice to meet you, Mr. Durand.",note:"Formal: use with strangers and professionals.\nLiterally: How do you call yourself?\nCasual: Comment tu t'appelles? (koh-MON tew tah-PELL)"},

  {type:"teach",kind:"phrase",nl:"Enchanté / Enchantée",en:"Nice to meet you",phonetic:"on-shon-TAY",example:"A: Je m'appelle Claire.\nB: Enchanté! Moi, c'est Thomas.\nA: Enchantée, Thomas!",exampleEn:"A: My name is Claire.\nB: Nice to meet you! I'm Thomas.\nA: Nice to meet you, Thomas!",note:"Enchanté = said by a man.\nEnchantée = said by a woman (extra -e for feminine).\nThe pronunciation is the same! The difference is only in writing."},

  {type:"teach",kind:"phrase",nl:"Moi, c'est...",en:"Me, I'm... (casual introduction)",phonetic:"MWAH say",example:"A: Salut! Moi, c'est Julie.\nB: Moi, c'est Lucas. Ça va?\nA: Oui, ça va bien!",exampleEn:"A: Hi! I'm Julie.\nB: I'm Lucas. How's it going?\nA: Yeah, I'm good!",note:"Very casual way to introduce yourself.\nMoi = me. C'est = it is.\nUsed among peers, at parties, in casual settings."},

  {type:"tip",title:"Enchanté vs Enchantée: Your Gender Matters",text:"This is the Agreement Web again:\n\nA man says: Enchanté (no extra letter)\nA woman says: Enchantée (extra -e at the end)\n\nThe pronunciation is identical.\nThe spelling changes in writing.\n\nThis pattern repeats constantly in French: adjectives and past participles gain -e when the speaker or subject is feminine.",deepDive:{title:"Why does gender affect what YOU say?",text:"In English, I am happy is the same whether a man or woman says it. In French, the adjective must agree with the subject.\n\nJe suis content (man) vs Je suis contente (woman).\nJe suis fatigué (man) vs Je suis fatiguée (woman).\n\nThis is the Agreement Web connecting everything to gender. You will practice this extensively in Unit 3."}},

  {type:"mc",q:"You meet someone for the first time. You say your name with:",opts:["Je suis nom","Je m'appelle...","Mon nom c'est","Je me dis"],ans:"Je m'appelle...",hint:"The standard self-introduction: I call myself."},

  {type:"mc",q:"You want to know a stranger's name formally. You ask:",opts:["C'est qui?","Comment tu t'appelles?","Comment vous appelez-vous?","Ton nom?"],ans:"Comment vous appelez-vous?",hint:"Formal question uses vous."},

  {type:"fb",s:"Bonjour! Je ___ Sophie.",a:"m'appelle",opts:["m'appelle","suis","appelle","me nomme"],hint:"I call myself. The standard introduction."},

  {type:"mc",q:"A woman says 'nice to meet you' in writing. She writes:",opts:["Enchanté","Enchantée","Enchanter","Enchante"],ans:"Enchantée",hint:"Feminine adds -e. Same pronunciation, different spelling."},

  {type:"match",pairs:[{nl:"Je m'appelle",en:"My name is"},{nl:"Enchanté(e)",en:"Nice to meet you"},{nl:"Comment vous appelez-vous?",en:"What is your name? (formal)"},{nl:"Moi, c'est...",en:"I'm... (casual)"}]},

  {type:"mc",q:"At a casual party, you introduce yourself with:",opts:["Comment vous appelez-vous?","Je m'appelle... (formal tone)","Moi, c'est...","Monsieur, je suis..."],ans:"Moi, c'est...",hint:"Casual settings call for the relaxed introduction."},

  {type:"mc",q:"'Je m'appelle' literally translates to:",opts:["I am called","My name is","I call myself","People call me"],ans:"I call myself",hint:"Je = I. Me = myself. Appelle = call."},

  {type:"fb",s:"___, madame! Je m'appelle Thomas.",a:"Enchanté",opts:["Enchanté","Enchantée","Bonjour","Merci"],hint:"A man says nice to meet you. Which form?"},

  {type:"mc",q:"The casual way to ask someone's name (tu form) is:",opts:["Comment vous appelez-vous?","Comment tu t'appelles?","C'est quoi ton nom?","Qui es-tu?"],ans:"Comment tu t'appelles?",hint:"Replace vous with tu for the casual version."},

  {type:"mc",q:"Enchanté and Enchantée sound:",opts:["Completely different","Slightly different","Identical in speech","Only different in questions"],ans:"Identical in speech",hint:"The -e is silent. The difference exists only in writing."},

  {type:"fb",s:"Comment tu t'___? Je m'appelle Julie.",a:"appelles",opts:["appelles","appelle","appelez","appeler"],hint:"Casual: how do you call yourself? Second person singular."},

  {type:"mc",q:"'Moi, c'est...' is best used in:",opts:["A job interview","A formal reception","A casual party","A government office"],ans:"A casual party",hint:"This relaxed intro works among peers and at informal gatherings."},
]},

// ═══ L6: Tu ou vous? ═══
{id:"fre1l6",title:"Tu ou vous?",icon:"🤝",xp:15,board:true,steps:[
  {type:"intro",title:"Tu ou vous?",desc:"French has two words for you: casual tu and formal vous. Using the right one shows social awareness. This choice matters more in French than in almost any other language.",goals:["When to use tu vs vous","Handle the tutoiement ritual","Know vous is also plural"]},

  {type:"teach",kind:"word",nl:"tu",en:"you (informal, singular)",phonetic:"tew",example:"A: Salut! Tu vas bien?\nB: Oui, et toi?\nA: Très bien, merci!",exampleEn:"A: Hi! Are you doing well?\nB: Yes, and you?\nA: Very well, thanks!",note:"For friends, family, children, and peers your age.\nAlways lowercase, even at sentence start (in casual writing).\nUsing tu too early with strangers is rude."},

  {type:"teach",kind:"word",nl:"vous",en:"you (formal singular, or ANY plural)",phonetic:"voo",example:"A: Bonjour, monsieur. Comment allez-vous?\nB: Très bien, merci. Et vous?\nA: Bien, merci.",exampleEn:"A: Hello, sir. How are you?\nB: Very well, thank you. And you?\nA: Well, thank you.",note:"Two uses: (1) formal singular = one stranger/elder.\n(2) plural = any group of 2+ people, even friends.\nWhen in doubt, use vous. It is never wrong."},

  {type:"tip",title:"Tu vs Vous: The Social Compass",text:"French tu/vous is more socially loaded than German du/Sie:\n\ntu = friends, family, children, classmates, peers\nvous = strangers, elders, professionals, shopkeepers, anyone you just met\n\nThe switch from vous to tu (called tutoiement) must be offered by the older or higher-status person. Never assume.\n\nModern exceptions: young people often use tu immediately with each other. Online spaces tend to use tu.",deepDive:{title:"The tutoiement ritual",text:"When two French speakers decide to switch from vous to tu, one will say: On se tutoie? (Shall we use tu with each other?)\n\nThis is a social moment. It signals that the relationship has become informal.\n\nIn the workplace, some companies use tu universally (startup culture). Traditional companies maintain vous with superiors. French children always use tu with each other and vous with teachers.\n\nFor learners: default to vous. If a French person uses tu with you, mirror them. If unsure, vous is always safe."}},

  {type:"teach",kind:"word",nl:"Monsieur",en:"Sir / Mr.",phonetic:"muh-SYUH",example:"A: Bonjour, monsieur!\nB: Bonjour! Qu'est-ce que je peux faire pour vous?\nA: Je cherche la poste.",exampleEn:"A: Hello, sir!\nB: Hello! What can I do for you?\nA: I'm looking for the post office.",note:"Title for men. Used alone or with last name.\nMonsieur Dupont. Never Monsieur Pierre (first name).\nAbbreviation: M."},

  {type:"teach",kind:"word",nl:"Madame",en:"Ma'am / Mrs. / Ms.",phonetic:"mah-DAHM",example:"A: Bonjour, madame!\nB: Bonjour! Vous désirez?\nA: Un croissant, s'il vous plaît.",exampleEn:"A: Hello, ma'am!\nB: Hello! What would you like?\nA: A croissant, please.",note:"Title for women. Works for all adult women.\nMademoiselle (Miss) is considered outdated. Use Madame.\nAbbreviation: Mme."},

  {type:"mc",q:"You meet someone for the first time at a business meeting. You use:",opts:["tu","vous","Either is fine","toi"],ans:"vous",hint:"First meetings and professional settings require formality."},

  {type:"mc",q:"Your best friend calls you. You use:",opts:["vous","tu","Monsieur","Madame"],ans:"tu",hint:"Close friends always use the informal form."},

  {type:"mc",q:"You address a group of friends (3 people). You use:",opts:["tu (because they are friends)","vous (because it is a group)","toi","ils"],ans:"vous (because it is a group)",hint:"Vous is always used for groups, even friends."},

  {type:"fb",s:"Bonjour, ___. Comment allez-vous?",a:"monsieur",opts:["monsieur","tu","salut","toi"],hint:"Formal address to a man you do not know."},

  {type:"mc",q:"The switch from vous to tu is called:",opts:["Le vouvoiement","Le tutoiement","La politesse","Le salut"],ans:"Le tutoiement",hint:"Tutoyer = to use tu with someone."},

  {type:"match",pairs:[{nl:"tu",en:"you (informal, one person)"},{nl:"vous (formal)",en:"you (formal, one person)"},{nl:"vous (plural)",en:"you (any group)"},{nl:"Madame",en:"Ma'am / Ms."}]},

  {type:"mc",q:"'Mademoiselle' in modern French is:",opts:["The correct title for young women","Considered outdated, use Madame","More formal than Madame","Used only in writing"],ans:"Considered outdated, use Madame",hint:"Modern French uses Madame for all adult women."},

  {type:"mc",q:"When in doubt about tu or vous, you should:",opts:["Always use tu","Always use vous","Flip a coin","Ask first"],ans:"Always use vous",hint:"The formal form is never wrong. The casual form can offend."},

  {type:"fb",s:"On se ___? (Shall we use tu?)",a:"tutoie",opts:["tutoie","vouvoie","parle","dit"],hint:"The ritual phrase to suggest switching to informal."},

  {type:"mc",q:"A child addresses their teacher with:",opts:["tu","vous","toi","Salut"],ans:"vous",hint:"Children must use the formal form with teachers and non-family adults."},

  {type:"mc",q:"Monsieur is abbreviated as:",opts:["Mr.","M.","Mon.","Ms."],ans:"M.",hint:"French abbreviation for Monsieur is M. (not Mr.)"},

  {type:"fb",s:"On se ___? (Shall we switch to informal?)",a:"tutoie",opts:["tutoie","vouvoie","parle","salut"],hint:"The verb for switching to the informal you form."},
]},

// ═══ L7: Au café ═══
{id:"fre1l7",title:"Au café",icon:"☕",xp:15,board:true,steps:[
  {type:"intro",title:"Au café",desc:"Put all your greetings and politeness together in a real scenario: ordering at a French café. This is where everything connects.",goals:["Complete a café interaction","Order food and drink politely","Handle the full greeting-to-goodbye flow"]},

  {type:"teach",kind:"phrase",nl:"Je voudrais...",en:"I would like...",phonetic:"zhuh voo-DRAY",example:"A: Bonjour! Qu'est-ce que vous désirez?\nB: Bonjour! Je voudrais un café, s'il vous plaît.\nA: Tout de suite!",exampleEn:"A: Hello! What would you like?\nB: Hello! I would like a coffee, please.\nA: Right away!",note:"The polite way to order anything.\nJe voudrais = I would like (conditional of vouloir).\nMore polite than Je veux (I want)."},

  {type:"teach",kind:"phrase",nl:"L'addition, s'il vous plaît",en:"The check, please",phonetic:"lah-dee-SYON seel voo PLAY",example:"A: L'addition, s'il vous plaît.\nB: Voilà. Ça fait huit euros.\nA: Voici. Merci!",exampleEn:"A: The check, please.\nB: Here you are. That's eight euros.\nA: Here you go. Thank you!",note:"L'addition = the bill/check (feminine: la addition = l'addition).\nElision: la + addition = l'addition.\nAlways say this to get the bill in France."},

  {type:"teach",kind:"phrase",nl:"Oui",en:"Yes",phonetic:"WEE",example:"A: Vous désirez un café?\nB: Oui, s'il vous plaît!\nA: Avec du sucre?\nB: Oui, merci.",exampleEn:"A: Would you like a coffee?\nB: Yes, please!\nA: With sugar?\nB: Yes, thank you.",note:"The most basic French word.\nAlways oui, never oui-oui (that sounds childish).\nSi is used for yes after a negative question."},

  {type:"teach",kind:"phrase",nl:"Non",en:"No",phonetic:"NON",example:"A: Vous voulez du lait?\nB: Non, merci.\nA: D'accord!",exampleEn:"A: Do you want milk?\nB: No, thank you.\nA: Okay!",note:"Non = no. Non merci = no thank you.\nNasal vowel: the O nasalizes, the N is not pronounced.\nNon, merci is the polite refusal."},

  {type:"tip",title:"A Full Café Interaction",text:"Here is the complete flow:\n\n1. Enter: Bonjour!\n2. Waiter: Bonjour! Qu'est-ce que vous désirez?\n3. Order: Je voudrais un café, s'il vous plaît.\n4. Waiter brings it: Voilà.\n5. You: Merci!\n6. Ready to leave: L'addition, s'il vous plaît.\n7. Pay: Merci, au revoir!\n8. Waiter: Au revoir! Bonne journée!\n\nNotice: Bonjour opens. Au revoir closes. Merci and s'il vous plaît weave through.",deepDive:{title:"Café culture in France",text:"French cafés are social institutions. A few things to know:\n\nTipping: service is included in the price (service compris). You may leave small change but it is not expected.\n\nSeating: sitting at the bar (comptoir) is cheaper than sitting at a table (salle) in some places. The terrace (terrasse) may cost more.\n\nPace: French café culture is slow. You are paying for the seat, not just the drink. No one will rush you."}},

  {type:"mc",q:"You enter a café. Your FIRST word should be:",opts:["Je voudrais","S'il vous plaît","Bonjour","L'addition"],ans:"Bonjour",hint:"Always greet before ordering. The universal greeting opens every interaction."},

  {type:"mc",q:"To politely order a coffee, you say:",opts:["Un café!","Je veux un café","Je voudrais un café, s'il vous plaît","Donnez-moi un café"],ans:"Je voudrais un café, s'il vous plaît",hint:"Je voudrais + item + s'il vous plaît is the polite formula."},

  {type:"fb",s:"___, s'il vous plaît. Ça fait combien?",a:"L'addition",opts:["L'addition","Le café","Merci","Bonjour"],hint:"Asking for the bill at the end of a meal."},

  {type:"mc",q:"Someone asks 'Vous voulez du sucre?' You do not want sugar. You say:",opts:["Oui","Non, merci","S'il vous plaît","De rien"],ans:"Non, merci",hint:"Polite refusal: no, thank you."},

  {type:"match",pairs:[{nl:"Je voudrais",en:"I would like"},{nl:"L'addition",en:"The check/bill"},{nl:"Oui",en:"Yes"},{nl:"Non, merci",en:"No, thank you"}]},

  {type:"mc",q:"In French café culture, tipping is:",opts:["Required at 20%","Included in the price","Considered rude","Only for excellent service"],ans:"Included in the price",hint:"Service compris means service is included."},

  {type:"mc",q:"The waiter says 'Voilà!' as they bring your coffee. This means:",opts:["Goodbye","Here you are","Please","Thank you"],ans:"Here you are",hint:"Voilà = here it is / there you go."},

  {type:"fb",s:"Je voudrais un croissant, s'il vous ___.",a:"plaît",opts:["plaît","merci","bien","vous"],hint:"Complete the please: if it ___ you."},

  {type:"mc",q:"Put the café steps in order: (1) Au revoir (2) Bonjour (3) L'addition (4) Je voudrais",opts:["2, 4, 3, 1","4, 2, 1, 3","1, 2, 3, 4","2, 3, 4, 1"],ans:"2, 4, 3, 1",hint:"Greet, order, ask for bill, say goodbye."},

  {type:"mc",q:"'Non' contains a nasal vowel. The N at the end is:",opts:["Pronounced clearly","Silent (the O nasalizes instead)","Doubled","Optional"],ans:"Silent (the O nasalizes instead)",hint:"Nasal vowels: the N/M nasalizes the vowel and disappears."},

  {type:"fb",s:"Je ___ un thé, s'il vous plaît.",a:"voudrais",opts:["voudrais","veux","vais","suis"],hint:"The polite conditional form: I would like."},

  {type:"mc",q:"After your meal, you ask the waiter for the bill. You say:",opts:["Merci, au revoir","Je voudrais payer","L'addition, s'il vous plaît","C'est combien?"],ans:"L'addition, s'il vous plaît",hint:"The standard phrase for requesting the check."},
]},

// ═══ L8: Révision Unit 1 ═══
{id:"fre1l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 1 Review",desc:"Let's review everything from Unit 1: greetings, farewells, politeness, introductions, tu/vous, and your first café interaction.",goals:["Review all greetings and farewells","Test politeness phrases","Combine everything in context"]},

  {type:"mc",q:"It is 3 PM. You enter a shop. You say:",opts:["Bonsoir","Bonjour","Bonne nuit","Salut"],ans:"Bonjour",hint:"Daytime greeting used from morning through afternoon."},

  {type:"mc",q:"It is 9 PM. You arrive at a dinner party. You say:",opts:["Bonjour","Bonne nuit","Bonsoir","Au revoir"],ans:"Bonsoir",hint:"Evening greeting from about 6 PM."},

  {type:"fb",s:"Au ___! Bonne journée!",a:"revoir",opts:["revoir","demain","soir","café"],hint:"The standard goodbye: until seeing again."},

  {type:"mc",q:"You will see your colleague tomorrow. You say:",opts:["Au revoir","À demain","Bonne nuit","Adieu"],ans:"À demain",hint:"À + tomorrow = see you tomorrow."},

  {type:"mc",q:"Your boss asks how you are. You respond formally:",opts:["Ça va","Très bien, merci. Et vous?","Salut, ça va","Pas mal, et toi?"],ans:"Très bien, merci. Et vous?",hint:"Formal requires très bien + merci + et vous."},

  {type:"match",pairs:[{nl:"Merci",en:"Thank you"},{nl:"S'il vous plaît",en:"Please"},{nl:"Pardon",en:"Sorry"},{nl:"De rien",en:"You're welcome"}]},

  {type:"fb",s:"Comment vous ___-vous? Je m'appelle Marie.",a:"appelez",opts:["appelez","allez","êtes","avez"],hint:"Formal: what do you call yourself?"},

  {type:"mc",q:"A woman writes 'nice to meet you'. She writes:",opts:["Enchanté","Enchantée","Enchanter","Enchante"],ans:"Enchantée",hint:"Feminine adds -e. Same pronunciation."},

  {type:"mc",q:"You order politely at a restaurant. You say:",opts:["Je veux un steak","Donnez-moi un steak","Je voudrais un steak, s'il vous plaît","Un steak!"],ans:"Je voudrais un steak, s'il vous plaît",hint:"Je voudrais + item + s'il vous plaît."},

  {type:"mc",q:"A stranger asks you a question. You should address them with:",opts:["tu","vous","toi","on"],ans:"vous",hint:"Strangers always get the formal form."},

  {type:"fb",s:"Bon___! Vous désirez?",a:"jour",opts:["jour","soir","nuit","ne"],hint:"Daytime greeting."},

  {type:"mc",q:"'Bonne nuit' uses bonne (not bon) because:",opts:["It is more formal","la nuit is feminine","It is a farewell","Nuit is longer"],ans:"la nuit is feminine",hint:"Agreement: bon becomes bonne before feminine nouns."},

  {type:"match",pairs:[{nl:"Bonjour",en:"Hello"},{nl:"Au revoir",en:"Goodbye"},{nl:"Ça va?",en:"How's it going?"},{nl:"Je m'appelle",en:"My name is"}]},

  {type:"mc",q:"Mademoiselle in modern French is:",opts:["Required for young women","Outdated, use Madame","More polite than Madame","For teenagers only"],ans:"Outdated, use Madame",hint:"Modern French uses Madame for all adult women."},

  {type:"mc",q:"To ask for the bill at a café:",opts:["Combien?","L'addition, s'il vous plaît","Au revoir","Merci beaucoup"],ans:"L'addition, s'il vous plaît",hint:"The check please: l'addition + s'il vous plaît."},

  {type:"fb",s:"Salut! ___, c'est Lucas.",a:"Moi",opts:["Moi","Je","Mon","Tu"],hint:"Casual introduction: Me, it's Lucas."},

  {type:"mc",q:"The complete café flow is:",opts:["Order, greet, pay, leave","Greet, order, pay, say goodbye","Pay, greet, order, leave","Order, pay, greet, leave"],ans:"Greet, order, pay, say goodbye",hint:"Bonjour → Je voudrais → L'addition → Au revoir."},

  {type:"mc",q:"'Comme ci, comme ça' means:",opts:["Very well","Terrible","So-so","Wonderful"],ans:"So-so",hint:"Like this, like that. Neither good nor bad."},
]},
]},

];
