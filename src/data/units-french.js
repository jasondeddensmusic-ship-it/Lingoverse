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

// ══════════════════════════════════════════════════════════════
// UNIT 2: JE ME PRÉSENTE — Identity, Numbers, être & avoir
// Nationalities, languages, numbers 0-20, être + avoir present tense
// P26: être/avoir named as core verbs. Conjugation seeds planted.
// ══════════════════════════════════════════════════════════════
{n:2,lang:"fr",track:"v1",title:"Je me présente",sub:"Identity, Numbers & Core Verbs",icon:"🪪",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: Les nationalités ═══
{id:"fre2l1",title:"Les nationalités",icon:"🌍",xp:15,board:true,steps:[
  {type:"intro",title:"Les nationalités",desc:"Learn to say where you are from and ask others. French nationalities change form based on gender: the Agreement Web at work.",goals:["Say your nationality","Ask where someone is from","Understand masculine/feminine nationality forms"]},

  {type:"teach",kind:"phrase",nl:"Je suis...",en:"I am...",phonetic:"zhuh SWEE",example:"A: Bonjour! Je suis français.\nB: Enchanté! Je suis anglaise.\nA: Vous habitez à Paris?",exampleEn:"A: Hello! I am French.\nB: Nice to meet you! I am English.\nA: Do you live in Paris?",note:"Je = I. Suis = am (from être).\nJe suis + nationality/adjective.\nThe most important verb in French: être (to be)."},

  {type:"teach",kind:"word",nl:"français / française",en:"French (m/f)",phonetic:"fron-SAY / fron-SEZ",example:"A: Tu es français?\nB: Oui, je suis française. Et toi?\nA: Je suis américain.",exampleEn:"A: Are you French?\nB: Yes, I am French (f). And you?\nA: I am American.",note:"Masculine: français (no extra letter).\nFeminine: française (adds -e, changes pronunciation).\nThe -ais ending sounds like AY; -aise sounds like EZ."},

  {type:"teach",kind:"word",nl:"anglais / anglaise",en:"English (m/f)",phonetic:"on-GLAY / on-GLEZ",example:"A: Vous êtes anglais?\nB: Non, je suis américaine.\nA: Ah, vous parlez bien français!",exampleEn:"A: Are you English?\nB: No, I am American (f).\nA: Ah, you speak French well!",note:"Same pattern as français/française.\nAnglais = from England specifically.\nFor British in general: britannique (same for m/f)."},

  {type:"teach",kind:"word",nl:"américain / américaine",en:"American (m/f)",phonetic:"ah-may-ree-KAN / ah-may-ree-KEN",example:"A: D'où venez-vous?\nB: Je suis américain, de New York.\nA: J'adore New York!",exampleEn:"A: Where are you from?\nB: I am American, from New York.\nA: I love New York!",note:"Masculine: américain (nasal -ain ending).\nFeminine: américaine (adds -e, -aine sounds like KEN).\nNationalities are lowercase in French (not capitalized)."},

  {type:"tip",title:"The Agreement Web: Nationalities",text:"French nationalities follow gender agreement:\n\nMasculine (he): français, anglais, américain\nFeminine (she): française, anglaise, américaine\n\nCommon pattern: add -e for feminine.\nSome change more: italien/italienne, allemand/allemande.\nSome are the same: belge, suisse, russe (already end in -e).\n\nRemember: nationalities are NOT capitalized in French.",deepDive:{title:"Why lowercase?",text:"In French, nationalities used as adjectives are always lowercase: je suis français, elle est anglaise.\n\nBut as nouns (the person), they capitalize: un Français, une Anglaise.\n\nThis is the opposite of English, where both are capitalized. For now, when using je suis + nationality, keep it lowercase."}},

  {type:"teach",kind:"word",nl:"allemand / allemande",en:"German (m/f)",phonetic:"al-MON / al-MOND",example:"A: Il est allemand?\nB: Oui, il est de Berlin.\nA: Il parle français aussi?",exampleEn:"A: Is he German?\nB: Yes, he is from Berlin.\nA: Does he speak French too?",note:"Masculine: allemand (silent D at end).\nFeminine: allemande (the D is pronounced: MOND).\nAdding -e makes the final consonant audible."},

  {type:"mc",q:"A woman says 'I am French'. She says:",opts:["Je suis français","Je suis française","Je suis francaise","Je suis franchaise"],ans:"Je suis française",hint:"Feminine form adds -e. The cedilla on ç is required."},

  {type:"mc",q:"Nationalities in French are written:",opts:["Always capitalized","Always lowercase as adjectives","With only the first letter capitalized","In all caps"],ans:"Always lowercase as adjectives",hint:"Unlike English, adjective nationalities stay lowercase."},

  {type:"fb",s:"Je suis ___. Je viens de Londres.",a:"anglais",opts:["anglais","français","américain","allemand"],hint:"From London means English. Masculine form."},

  {type:"mc",q:"'Allemand' becomes 'allemande' in feminine. The D is now:",opts:["Still silent","Pronounced","Doubled","Removed"],ans:"Pronounced",hint:"Adding -e to feminine makes the final consonant audible."},

  {type:"match",pairs:[{nl:"français/e",en:"French"},{nl:"anglais/e",en:"English"},{nl:"américain/e",en:"American"},{nl:"allemand/e",en:"German"}]},

  {type:"mc",q:"Which nationality is the SAME for masculine and feminine?",opts:["français","américain","belge","anglais"],ans:"belge",hint:"Nationalities already ending in -e do not change."},

  {type:"fb",s:"Elle est ___. Elle vient de Rome.",a:"italienne",opts:["italienne","italien","italiene","italie"],hint:"Italian woman: feminine form doubles the N and adds -e."},

  {type:"mc",q:"'Je suis' uses the verb:",opts:["avoir (to have)","être (to be)","aller (to go)","faire (to do)"],ans:"être (to be)",hint:"I am = je suis. Suis comes from the verb to be."},

  {type:"mc",q:"A man from the United States says:",opts:["Je suis américaine","Je suis américain","Je suis amérique","Je suis états-unien"],ans:"Je suis américain",hint:"Masculine nationality: no extra -e at the end."},

  {type:"fb",s:"D'où ___-vous? Je suis de Paris.",a:"venez",opts:["venez","êtes","allez","avez"],hint:"Where do you come from? Formal you form of venir."},

  {type:"mc",q:"In French, 'je suis anglaise' tells you the speaker is:",opts:["A man from England","A woman from England","Anyone from England","A French person"],ans:"A woman from England",hint:"The -e ending on anglaise signals feminine gender."},

  {type:"mc",q:"'Suisse' (Swiss) in feminine is:",opts:["Suissesse","Suissaine","Suisse","Suissée"],ans:"Suisse",hint:"Already ends in -e, so it stays the same for both genders."},
]},

// ═══ L2: Les langues ═══
{id:"fre2l2",title:"Les langues",icon:"💬",xp:15,board:true,steps:[
  {type:"intro",title:"Les langues",desc:"Learn to talk about the languages you speak. In multilingual Europe, this is an everyday conversation topic.",goals:["Name 5 major languages","Say what languages you speak","Use parler (to speak) basics"]},

  {type:"teach",kind:"word",nl:"le français",en:"French (the language)",phonetic:"luh fron-SAY",example:"A: Vous parlez français?\nB: Oui, je parle français et anglais.\nA: Très bien!",exampleEn:"A: Do you speak French?\nB: Yes, I speak French and English.\nA: Very good!",note:"le français = the French language (masculine).\nLanguage names are lowercase: le français, not le Français.\nAll language names are masculine in French."},

  {type:"teach",kind:"word",nl:"l'anglais",en:"English (the language)",phonetic:"lon-GLAY",example:"A: Tu parles anglais?\nB: Oui, c'est ma langue maternelle.\nA: Tu as de la chance!",exampleEn:"A: Do you speak English?\nB: Yes, it's my mother tongue.\nA: You're lucky!",note:"l'anglais = le + anglais (elision before vowel).\nAll language names use le: le français, l'anglais, l'allemand.\nLangue maternelle = mother tongue."},

  {type:"teach",kind:"phrase",nl:"Je parle...",en:"I speak...",phonetic:"zhuh PAHRL",example:"A: Quelles langues parlez-vous?\nB: Je parle anglais et un peu français.\nA: C'est très bien!",exampleEn:"A: What languages do you speak?\nB: I speak English and a little French.\nA: That's very good!",note:"Parler = to speak (regular -er verb).\nJe parle = I speak. No article needed after parler:\nJe parle français (not Je parle le français)."},

  {type:"teach",kind:"word",nl:"l'espagnol",en:"Spanish (the language)",phonetic:"less-pah-NYOL",example:"A: Tu parles espagnol?\nB: Un peu. J'apprends depuis un an.\nA: C'est une belle langue!",exampleEn:"A: Do you speak Spanish?\nB: A little. I've been learning for a year.\nA: It's a beautiful language!",note:"l'espagnol = le + espagnol.\nSpanish is a Romance language like French.\nMany shared Latin roots make them partially mutually intelligible."},

  {type:"teach",kind:"word",nl:"l'allemand",en:"German (the language)",phonetic:"lal-MON",example:"A: Elle parle allemand?\nB: Oui, elle est bilingue français-allemand.\nA: Impressionnant!",exampleEn:"A: Does she speak German?\nB: Yes, she is bilingual French-German.\nA: Impressive!",note:"l'allemand = le + allemand.\nNote: the language and the nationality use the same word.\nContext tells you which: Je parle allemand (language) vs Il est allemand (nationality)."},

  {type:"teach",kind:"phrase",nl:"un peu",en:"a little",phonetic:"un PUH",example:"A: Vous parlez japonais?\nB: Un peu. Et vous?\nA: Non, pas du tout!",exampleEn:"A: Do you speak Japanese?\nB: A little. And you?\nA: No, not at all!",note:"Un = a/one. Peu = little.\nJe parle un peu français = I speak a little French.\nVery useful for being honest about your level!"},

  {type:"tip",title:"Parler: Your First -er Verb",text:"Parler (to speak) is a regular -er verb. In French, about 90% of verbs end in -er and follow this pattern:\n\nJe parle (I speak)\nTu parles (you speak, casual)\nIl/Elle parle (he/she speaks)\n\nNotice: je parle and il parle sound identical!\nThe -e and -es endings are silent.\nYou will learn full conjugation in Unit 5.",deepDive:{title:"Why -er verbs matter",text:"French has 3 verb groups: -er (about 90%), -ir (about 10%), and -re (rare). Plus irregulars.\n\nBecause -er verbs are so common, mastering this pattern gives you access to hundreds of verbs: parler (speak), manger (eat), habiter (live), travailler (work), aimer (love/like), détester (hate).\n\nFor now, just notice the je/tu/il forms. Full conjugation comes in Unit 5."}},

  {type:"mc",q:"All French language names are:",opts:["Feminine","Masculine","Neutral","It varies"],ans:"Masculine",hint:"Le français, l'anglais, l'espagnol: all use le."},

  {type:"mc",q:"'Je parle un peu français' means:",opts:["I speak perfect French","I speak a little French","I don't speak French","I want to speak French"],ans:"I speak a little French",hint:"Un peu = a little. Honest about your level!"},

  {type:"fb",s:"Je ___ anglais et français.",a:"parle",opts:["parle","parles","parlé","parler"],hint:"I speak: first person singular of the -er verb."},

  {type:"mc",q:"After 'parler', language names use:",opts:["The article (Je parle le français)","No article (Je parle français)","A preposition (Je parle en français)","A possessive (Je parle mon français)"],ans:"No article (Je parle français)",hint:"Parler + language directly, no article needed."},

  {type:"match",pairs:[{nl:"le français",en:"French"},{nl:"l'anglais",en:"English"},{nl:"l'espagnol",en:"Spanish"},{nl:"l'allemand",en:"German"}]},

  {type:"mc",q:"'L'anglais' uses l' instead of le because:",opts:["It sounds better","anglais starts with a vowel sound","It is feminine","It is informal"],ans:"anglais starts with a vowel sound",hint:"Elision: le becomes l' before vowel sounds."},

  {type:"fb",s:"Vous parlez ___? Non, pas du tout.",a:"japonais",opts:["japonais","japon","japonaise","le japon"],hint:"The language of Japan. Masculine, like all languages."},

  {type:"mc",q:"'Je parle' and 'il parle' are pronounced:",opts:["Differently","Identically","Il parle is louder","Je parle is shorter"],ans:"Identically",hint:"The -e ending is silent in both. Same sound."},

  {type:"mc",q:"About 90% of French verbs follow which pattern?",opts:["-ir verbs","-re verbs","-er verbs","Irregular verbs"],ans:"-er verbs",hint:"Parler is a model: the largest group of regular verbs."},

  {type:"fb",s:"Tu parles ___ peu français?",a:"un",opts:["un","le","du","en"],hint:"A little: ___ peu. The indefinite article."},
]},

// ═══ L3: Les nombres 0-10 ═══
{id:"fre2l3",title:"Les nombres 0-10",icon:"🔢",xp:15,board:true,steps:[
  {type:"intro",title:"Les nombres 0-10",desc:"Numbers are essential for everyday life: phone numbers, prices, addresses. French numbers 0-10 are the foundation for the entire number system.",goals:["Count from 0 to 10","Pronounce each number correctly","Use numbers in simple contexts"]},

  {type:"teach",kind:"word",nl:"zéro",en:"zero",phonetic:"zay-ROH",example:"A: Quel est le score?\nB: Zéro à zéro.\nA: Match nul!",exampleEn:"A: What's the score?\nB: Zero to zero.\nA: Draw!",note:"Cognate with English zero.\nUsed in phone numbers, scores, temperatures.\nLe zéro = masculine."},

  {type:"teach",kind:"word",nl:"un / une",en:"one (m/f)",phonetic:"UH / EWN",example:"A: Combien de frères as-tu?\nB: J'ai un frère et une soeur.\nA: Moi aussi!",exampleEn:"A: How many brothers do you have?\nB: I have one brother and one sister.\nA: Me too!",note:"Un = one (masculine). Une = one (feminine).\nAlso the indefinite articles: un café, une bière.\nNasal vowel: un sounds like UH with nasal."},

  {type:"teach",kind:"word",nl:"deux",en:"two",phonetic:"DUH",example:"A: Combien de langues parles-tu?\nB: Deux: français et anglais.\nA: C'est bien!",exampleEn:"A: How many languages do you speak?\nB: Two: French and English.\nA: That's good!",note:"Deux = two. The X is silent.\nBefore a vowel, the X links: deux amis (duhz ah-MEE).\nThis linking is called liaison."},

  {type:"teach",kind:"word",nl:"trois",en:"three",phonetic:"TRWAH",example:"A: Trois cafés, s'il vous plaît.\nB: Tout de suite!\nA: Merci!",exampleEn:"A: Three coffees, please.\nB: Right away!\nA: Thank you!",note:"Trois = three. The S is silent.\nTrois has the OI vowel combination: sounds like WAH.\nLiaison before vowels: trois enfants (trwaz on-FON)."},

  {type:"teach",kind:"word",nl:"quatre, cinq, six",en:"four, five, six",phonetic:"KATR, SANK, SEES",example:"A: Quatre plus cinq?\nB: Neuf!\nA: Et six plus trois?\nB: Neuf aussi!",exampleEn:"A: Four plus five?\nB: Nine!\nA: And six plus three?\nB: Nine too!",note:"Quatre: the R is uvular (back of throat).\nCinq: nasal vowel (in sound). Final Q pronounced.\nSix: S sound at end when alone. Silent before consonant."},

  {type:"teach",kind:"word",nl:"sept, huit, neuf, dix",en:"seven, eight, nine, ten",phonetic:"SET, WEET, NUHF, DEES",example:"A: Il y a dix personnes ici.\nB: Non, neuf. Marie n'est pas là.\nA: Ah oui, c'est vrai.",exampleEn:"A: There are ten people here.\nB: No, nine. Marie is not here.\nA: Oh yes, that's true.",note:"Sept: the P is silent, T is pronounced.\nHuit: starts with the W sound. No liaison before it.\nNeuf: F is pronounced. Before vowels: neuf heures (nuhv UHR).\nDix: like six, S sound alone, silent before consonants."},

  {type:"tip",title:"Silent Final Letters in Numbers",text:"French numbers show silent letter rules clearly:\n\nSilent final letter: deux (X), trois (S), six (X), dix (X)\nPronounced final letter: cinq (K), sept (T), neuf (F), huit (T)\n\nBefore vowels, silent letters can wake up (liaison):\ndeux amis = duhz ah-MEE\ntrois enfants = trwaz on-FON\nsix heures = seez UHR\n\nThis is liaison: silent consonants linking to the next vowel.",deepDive:{title:"Why are some letters silent?",text:"French evolved from Latin over 1,000 years. During this time, many final consonants stopped being pronounced, but the spelling stayed.\n\nLatin: sex > Old French: sis > Modern French: six (X silent)\nLatin: tres > Old French: treis > Modern French: trois (S silent)\n\nLiaison preserves the old pronunciation before vowels. It is a living fossil of medieval French pronunciation."}},

  {type:"mc",q:"How do you say 'five' in French?",opts:["Quatre","Cinq","Six","Sept"],ans:"Cinq",hint:"Starts with a nasal vowel sound. Ends with a K sound."},

  {type:"mc",q:"The X in 'deux' is:",opts:["Pronounced as KS","Pronounced as Z","Silent","Pronounced as S"],ans:"Silent",hint:"Most final consonants in French are not pronounced."},

  {type:"fb",s:"___, deux, trois, quatre, cinq.",a:"Un",opts:["Un","Zéro","Dix","Neuf"],hint:"The first counting number in the sequence."},

  {type:"match",pairs:[{nl:"trois",en:"three"},{nl:"sept",en:"seven"},{nl:"cinq",en:"five"},{nl:"huit",en:"eight"}]},

  {type:"mc",q:"Before a vowel, 'six' is pronounced:",opts:["SEES","SEEZ","SEE","SEEKZ"],ans:"SEEZ",hint:"Liaison: the silent X wakes up as a Z before vowels."},

  {type:"fb",s:"Quatre plus ___ font neuf.",a:"cinq",opts:["cinq","six","trois","deux"],hint:"4 + ? = 9. Which number completes the equation?"},

  {type:"mc",q:"'Sept' has a silent letter. Which one?",opts:["S","E","P","T"],ans:"P",hint:"The letter between the E and T is not pronounced."},

  {type:"mc",q:"'Un' becomes 'une' when counting:",opts:["Always","Before feminine nouns","Before vowels","Never"],ans:"Before feminine nouns",hint:"Gender agreement: un frère, une soeur."},

  {type:"fb",s:"Dix moins trois font ___.",a:"sept",opts:["sept","six","huit","cinq"],hint:"10 minus 3 equals this number."},

  {type:"mc",q:"The French R in 'quatre' is produced:",opts:["With the tongue tip","At the back of the throat","With the lips","Between the teeth"],ans:"At the back of the throat",hint:"The uvular R is a distinctive French sound."},
]},

// ═══ L4: Les nombres 11-20 ═══
{id:"fre2l4",title:"Les nombres 11-20",icon:"🔢",xp:15,board:true,steps:[
  {type:"intro",title:"Les nombres 11-20",desc:"Numbers 11-16 are irregular (you must memorize them). From 17-20, the system becomes logical. Master these and you can handle prices and ages.",goals:["Count from 11 to 20","Notice the pattern shift at 17","Use numbers for age and prices"]},

  {type:"teach",kind:"word",nl:"onze, douze",en:"eleven, twelve",phonetic:"ONZ, DOOZ",example:"A: Quel âge as-tu?\nB: J'ai onze ans.\nA: Et ton frère?\nB: Il a douze ans.",exampleEn:"A: How old are you?\nB: I am eleven.\nA: And your brother?\nB: He is twelve.",note:"Onze = eleven. Douze = twelve.\nThese are unique forms, memorize them.\nNo liaison before onze: les onze (lay ONZ), not lez onze."},

  {type:"teach",kind:"word",nl:"treize, quatorze, quinze, seize",en:"thirteen, fourteen, fifteen, sixteen",phonetic:"TREZ, kah-TORZ, KANZ, SEZ",example:"A: Combien ça coûte?\nB: Quinze euros.\nA: Et celui-là?\nB: Seize euros.",exampleEn:"A: How much does it cost?\nB: Fifteen euros.\nA: And that one?\nB: Sixteen euros.",note:"13-16 each have unique forms.\nPattern: they all end in a consonant sound.\nQuinze has the nasal vowel in (KANZ).\nSeize: EI sounds like EZ."},

  {type:"teach",kind:"word",nl:"dix-sept, dix-huit, dix-neuf",en:"seventeen, eighteen, nineteen",phonetic:"dee-SET, deez-WEET, deez-NUHF",example:"A: Il y a dix-sept étudiants dans la classe.\nB: Non, dix-huit. J'ai oublié Marie.\nA: Ah oui!",exampleEn:"A: There are seventeen students in the class.\nB: No, eighteen. I forgot Marie.\nA: Oh yes!",note:"From 17: the system is logical! 10+7, 10+8, 10+9.\nDix-sept = ten-seven. Dix-huit = ten-eight.\nThe hyphen connects the two parts."},

  {type:"teach",kind:"word",nl:"vingt",en:"twenty",phonetic:"VAN",example:"A: J'ai vingt ans aujourd'hui!\nB: Joyeux anniversaire!\nA: Merci beaucoup!",exampleEn:"A: I am twenty today!\nB: Happy birthday!\nA: Thank you very much!",note:"Vingt = twenty. The GT is silent.\nNasal vowel: VAN (the N nasalizes the vowel).\nBefore a vowel: vingt ans (vant ON) with liaison on T."},

  {type:"tip",title:"The Number System: Two Halves",text:"French numbers 11-20 have two patterns:\n\n11-16: IRREGULAR (unique forms, must memorize)\nonze, douze, treize, quatorze, quinze, seize\n\n17-19: LOGICAL (dix + unit)\ndix-sept, dix-huit, dix-neuf\n\n20: vingt (new base number)\n\nThis split exists because 11-16 come from Old French/Latin compounds that fused into single words. 17-19 were formed later and kept the transparent dix + number structure.",deepDive:{title:"Why the irregularity?",text:"Latin had unique forms for 11-15 (undecim, duodecim, tredecim, quattuordecim, quindecim). French inherited these as onze, douze, treize, quatorze, quinze.\n\nSeize (16) was also unique in Old French. But 17-19 were formed analytically: dix-sept literally means ten-seven.\n\nThis pattern will repeat: French numbers get wild at 70 (soixante-dix = sixty-ten) and 90 (quatre-vingts-dix = four-twenties-ten). That comes in Unit 8."}},

  {type:"teach",kind:"phrase",nl:"J'ai ... ans",en:"I am ... years old",phonetic:"zhay ... ON",example:"A: Quel âge avez-vous?\nB: J'ai trente ans.\nA: Vous ne les faites pas!",exampleEn:"A: How old are you?\nB: I am thirty years old.\nA: You don't look it!",note:"Literally: I have ... years.\nFrench uses avoir (to have) for age, not être (to be).\nJ'ai = I have. Ans = years. NEVER: Je suis vingt ans."},

  {type:"mc",q:"Numbers 11-16 in French are:",opts:["Logical combinations of dix + number","Unique irregular forms","The same as English","Based on vingt"],ans:"Unique irregular forms",hint:"These six numbers must be memorized individually."},

  {type:"mc",q:"'Dix-sept' means:",opts:["Sixteen","Seventeen","Seventy","Seven"],ans:"Seventeen",hint:"Dix (ten) + sept (seven) = ten-seven."},

  {type:"fb",s:"J'ai ___ ans. (I am 15 years old.)",a:"quinze",opts:["quinze","cinq","quatorze","seize"],hint:"Fifteen: one of the irregular 11-16 numbers."},

  {type:"match",pairs:[{nl:"onze",en:"eleven"},{nl:"quatorze",en:"fourteen"},{nl:"dix-huit",en:"eighteen"},{nl:"vingt",en:"twenty"}]},

  {type:"mc",q:"French uses which verb for age?",opts:["être (to be)","avoir (to have)","aller (to go)","faire (to do)"],ans:"avoir (to have)",hint:"J'ai vingt ans = I HAVE twenty years."},

  {type:"fb",s:"___, douze, treize, quatorze, quinze.",a:"Onze",opts:["Onze","Dix","Neuf","Seize"],hint:"The number that starts the irregular 11-16 sequence."},

  {type:"mc",q:"The GT in 'vingt' is:",opts:["Pronounced fully","Only T is pronounced","Silent","Pronounced as a K"],ans:"Silent",hint:"Vingt sounds like VAN. The final letters are not spoken."},

  {type:"mc",q:"'J'ai quinze ans' literally means:",opts:["I am fifteen years old","I have fifteen years","I have fifteen","Fifteen years old"],ans:"I have fifteen years",hint:"J'ai = I have. Ans = years. French counts age differently."},

  {type:"fb",s:"Dix plus ___ font vingt.",a:"dix",opts:["dix","neuf","onze","cinq"],hint:"10 + ? = 20. What equals twenty?"},

  {type:"mc",q:"Which number starts the 'logical' pattern (dix + unit)?",opts:["Onze (11)","Treize (13)","Seize (16)","Dix-sept (17)"],ans:"Dix-sept (17)",hint:"From 17 onwards, the structure is transparent."},

  {type:"mc",q:"'Seize' (16) is the last number that is:",opts:["Even","Logical","Irregular","A teen number"],ans:"Irregular",hint:"After 16, the pattern switches to the transparent dix + unit."},
]},

// ═══ L5: Être: to be ═══
{id:"fre2l5",title:"Être",icon:"📝",xp:15,board:true,steps:[
  {type:"intro",title:"Être: to be",desc:"Être (to be) is THE most important French verb. It is also the most irregular. You already know 'je suis' from nationalities. Now learn the full present tense.",goals:["Conjugate être in present tense","Use être for identity and description","Recognize all 6 forms"]},

  {type:"teach",kind:"word",nl:"je suis",en:"I am",phonetic:"zhuh SWEE",example:"A: Bonjour! Je suis Marie.\nB: Enchanté! Je suis Pierre.\nA: Je suis contente de vous rencontrer.",exampleEn:"A: Hello! I am Marie.\nB: Nice to meet you! I am Pierre.\nA: I am happy to meet you.",note:"Je = I. Suis = am.\nYou already know this from je suis français.\nUsed for identity, nationality, profession, feelings."},

  {type:"teach",kind:"word",nl:"tu es",en:"you are (informal)",phonetic:"tew AY",example:"A: Tu es prêt?\nB: Oui, je suis prêt!\nA: Alors, on y va!",exampleEn:"A: Are you ready?\nB: Yes, I am ready!\nA: Then let's go!",note:"Tu = you (informal). Es = are.\nTu es + adjective: Tu es grand (You are tall).\nUsed with friends, family, children."},

  {type:"teach",kind:"word",nl:"il est / elle est",en:"he is / she is",phonetic:"eel AY / el AY",example:"A: Où est Pierre?\nB: Il est au bureau.\nA: Et Marie?\nB: Elle est à la maison.",exampleEn:"A: Where is Pierre?\nB: He is at the office.\nA: And Marie?\nB: She is at home.",note:"Il = he. Elle = she. Est = is.\nIl est and elle est sound nearly identical.\nAlso: on est = we are (casual, very common)."},

  {type:"teach",kind:"word",nl:"nous sommes",en:"we are",phonetic:"noo SOM",example:"A: Nous sommes en retard!\nB: Non, nous sommes à l'heure.\nA: Ah bon? Tant mieux!",exampleEn:"A: We are late!\nB: No, we are on time.\nA: Really? Good!",note:"Nous = we. Sommes = are.\nNous sommes is formal/written.\nIn speech, French often uses on est instead."},

  {type:"teach",kind:"word",nl:"vous êtes",en:"you are (formal/plural)",phonetic:"vooz ET",example:"A: Vous êtes français?\nB: Oui, je suis français.\nA: Vous êtes de quelle ville?",exampleEn:"A: Are you French?\nB: Yes, I am French.\nA: Which city are you from?",note:"Vous = you (formal or plural). Êtes = are.\nThe circumflex on ê marks a historical S (Latin: estis).\nVous êtes: use for strangers AND groups."},

  {type:"teach",kind:"word",nl:"ils sont / elles sont",en:"they are (m/f)",phonetic:"eel SON / el SON",example:"A: Où sont les enfants?\nB: Ils sont dans le jardin.\nA: Et les filles?\nB: Elles sont à l'école.",exampleEn:"A: Where are the children?\nB: They are in the garden.\nA: And the girls?\nB: They are at school.",note:"Ils = they (masculine or mixed). Elles = they (all feminine).\nSont = are.\nMixed group = always ils (even 99 women + 1 man)."},

  {type:"tip",title:"Être: The Full Picture",text:"Here is the complete present tense:\n\nje suis (I am)\ntu es (you are, informal)\nil/elle/on est (he/she/one is)\nnous sommes (we are)\nvous êtes (you are, formal/plural)\nils/elles sont (they are)\n\nNotice: every form is different. No two forms sound alike.\nThis is why être is irregular: it does not follow any pattern.\nYou must memorize all six forms.",deepDive:{title:"Why is être so irregular?",text:"Être comes from Latin esse (to be). In every Romance language, this verb is maximally irregular: Spanish ser/estar, Italian essere, Portuguese ser.\n\nThe reason: to be is used so frequently that it resists regularization. High-frequency words preserve old forms because speakers never forget them.\n\nJe suis comes from Latin sum. Nous sommes from sumus. Vous êtes from estis (the S became the circumflex ê). Ils sont from sunt."}},

  {type:"mc",q:"Complete: 'Nous ___ français.'",opts:["est","sommes","êtes","suis"],ans:"sommes",hint:"We are: the nous form of être."},

  {type:"mc",q:"'Vous êtes' is used for:",opts:["Only formal singular","Only plural","Both formal singular AND plural","Only informal"],ans:"Both formal singular AND plural",hint:"Vous serves double duty: formal one person or any group."},

  {type:"fb",s:"Tu ___ prêt? Oui, je suis prêt!",a:"es",opts:["es","est","suis","êtes"],hint:"Informal you are: the tu form of être."},

  {type:"match",pairs:[{nl:"je suis",en:"I am"},{nl:"tu es",en:"you are (informal)"},{nl:"nous sommes",en:"we are"},{nl:"ils sont",en:"they are"}]},

  {type:"mc",q:"A mixed group (men and women) uses:",opts:["Elles sont","Ils sont","On est","Nous sommes"],ans:"Ils sont",hint:"Any mixed group defaults to the masculine ils."},

  {type:"fb",s:"Elle ___ française. Il ___ allemand.",a:"est",opts:["est","es","suis","sont"],hint:"He/she is: the same form for both il and elle."},

  {type:"mc",q:"'On est' is the casual replacement for:",opts:["Je suis","Tu es","Nous sommes","Ils sont"],ans:"Nous sommes",hint:"In spoken French, on replaces nous for 'we'."},

  {type:"mc",q:"The circumflex on 'êtes' (ê) marks:",opts:["A nasal vowel","A historical lost S","A feminine form","Emphasis"],ans:"A historical lost S",hint:"Latin estis became êtes. The hat replaces the S."},

  {type:"mc",q:"How many DIFFERENT forms does être have in present tense?",opts:["Three","Four","Five","Six"],ans:"Six",hint:"Every person has a unique form. No repeats."},

  {type:"fb",s:"Ils ___ à la maison.",a:"sont",opts:["sont","est","sommes","êtes"],hint:"They are: the ils/elles form of être."},
]},

// ═══ L6: Avoir: to have ═══
{id:"fre2l6",title:"Avoir",icon:"📝",xp:15,board:true,steps:[
  {type:"intro",title:"Avoir: to have",desc:"Avoir (to have) is the second most important French verb. You already know it from 'J'ai ... ans' (age). Now learn the full present tense and its many uses.",goals:["Conjugate avoir in present tense","Use avoir for age, possession, and expressions","Spot the j'ai/tu as/il a pattern"]},

  {type:"teach",kind:"word",nl:"j'ai",en:"I have",phonetic:"ZHAY",example:"A: Tu as un animal?\nB: Oui, j'ai un chat.\nA: Comment s'appelle-t-il?",exampleEn:"A: Do you have a pet?\nB: Yes, I have a cat.\nA: What's his name?",note:"J'ai = je + ai (elision: je becomes j' before a vowel).\nYou know this from J'ai 20 ans (I am 20 years old).\nAvoir is used for age, hunger, thirst, and many expressions."},

  {type:"teach",kind:"word",nl:"tu as",en:"you have (informal)",phonetic:"tew AH",example:"A: Tu as faim?\nB: Oui, j'ai très faim!\nA: On va manger alors!",exampleEn:"A: Are you hungry?\nB: Yes, I am very hungry!\nA: Let's go eat then!",note:"Tu = you (informal). As = have.\nTu as faim? = Are you hungry? (Literally: You have hunger?)\nFrench uses avoir for hunger, thirst, hot, cold."},

  {type:"teach",kind:"word",nl:"il a / elle a",en:"he has / she has",phonetic:"eel AH / el AH",example:"A: Marie a un frère?\nB: Oui, elle a deux frères.\nA: Et un chien aussi!",exampleEn:"A: Does Marie have a brother?\nB: Yes, she has two brothers.\nA: And a dog too!",note:"Il/elle + a = he/she has.\nA = just one letter! The shortest verb form.\nOn a = we have (casual), same form as il/elle a."},

  {type:"teach",kind:"word",nl:"nous avons",en:"we have",phonetic:"nooz ah-VON",example:"A: Nous avons un problème.\nB: Quel problème?\nA: Nous avons faim mais le restaurant est fermé!",exampleEn:"A: We have a problem.\nB: What problem?\nA: We are hungry but the restaurant is closed!",note:"Nous = we. Avons = have.\nLiaison: nous avons (nooz ah-VON).\nCasual: on a replaces nous avons in speech."},

  {type:"teach",kind:"word",nl:"vous avez",en:"you have (formal/plural)",phonetic:"vooz ah-VAY",example:"A: Vous avez l'heure?\nB: Oui, il est trois heures.\nA: Merci beaucoup!",exampleEn:"A: Do you have the time?\nB: Yes, it is three o'clock.\nA: Thank you very much!",note:"Vous = you (formal/plural). Avez = have.\nVous avez l'heure? = a common way to ask the time.\nLiaison: vous avez (vooz ah-VAY)."},

  {type:"teach",kind:"word",nl:"ils ont / elles ont",en:"they have",phonetic:"eelz ON / elz ON",example:"A: Les enfants ont faim?\nB: Oui, ils ont très faim.\nA: Je vais préparer le dîner.",exampleEn:"A: Are the children hungry?\nB: Yes, they are very hungry.\nA: I'll prepare dinner.",note:"Ils/elles + ont = they have.\nLiaison: ils ont (eelz ON).\nOnt sounds like the nasal ON. Do not confuse with sont (they are)."},

  {type:"tip",title:"Avoir Expressions: French Uses Have Where English Uses Be",text:"French uses avoir (to have) for many states that English expresses with to be:\n\navoir faim = to be hungry (to have hunger)\navoir soif = to be thirsty (to have thirst)\navoir chaud = to be hot (to have heat)\navoir froid = to be cold (to have cold)\navoir peur = to be afraid (to have fear)\navoir raison = to be right (to have reason)\navoir tort = to be wrong (to have wrong)\navoir ... ans = to be ... years old (to have ... years)\n\nThink of it as: you POSSESS the sensation.",deepDive:{title:"Why avoir and not être?",text:"Latin used habere (to have) for many physical sensations. This passed into all Romance languages: Spanish tener hambre (to have hunger), Italian avere fame (to have hunger), French avoir faim.\n\nThe logic: hunger, thirst, and fear are things that happen TO you. You possess them temporarily. English is the odd one out by using to be for these states.\n\nThis will trip you up early. You will want to say 'Je suis faim' (I am hunger). Always use J'ai faim (I have hunger)."}},

  {type:"mc",q:"Complete: 'J'___ vingt ans.'",opts:["ai","suis","est","as"],ans:"ai",hint:"Age uses avoir: I HAVE twenty years."},

  {type:"mc",q:"'Tu as faim?' means:",opts:["Are you hungry?","You are eating?","Do you have food?","Are you cooking?"],ans:"Are you hungry?",hint:"Avoir faim = to be hungry. Literally: to have hunger."},

  {type:"fb",s:"Elle ___ trois enfants.",a:"a",opts:["a","as","ai","est"],hint:"She has: the il/elle form of avoir. Just one letter."},

  {type:"match",pairs:[{nl:"j'ai",en:"I have"},{nl:"tu as",en:"you have (informal)"},{nl:"nous avons",en:"we have"},{nl:"vous avez",en:"you have (formal)"}]},

  {type:"mc",q:"'Ils ont' and 'ils sont' differ in that:",opts:["Ont = avoir (have), sont = être (be)","They mean the same thing","Ont is formal, sont is casual","Ont is plural, sont is singular"],ans:"Ont = avoir (have), sont = être (be)",hint:"Two different verbs: avoir vs être."},

  {type:"fb",s:"Nous ___ un problème.",a:"avons",opts:["avons","sommes","avez","ont"],hint:"We have: the nous form of avoir."},

  {type:"mc",q:"Which expression uses avoir (not être)?",opts:["I am French","I am tall","I am hungry","I am here"],ans:"I am hungry",hint:"Hunger is a possession in French: J'ai faim."},

  {type:"mc",q:"'On a' in casual speech replaces:",opts:["J'ai","Tu as","Nous avons","Ils ont"],ans:"Nous avons",hint:"On replaces nous in casual spoken French."},

  {type:"fb",s:"Vous ___ l'heure, s'il vous plaît?",a:"avez",opts:["avez","êtes","allez","avons"],hint:"Do you have the time? Formal you form of avoir."},

  {type:"mc",q:"J'ai becomes j'ai (with apostrophe) because:",opts:["It looks better","je + ai: elision before a vowel","It is informal","It saves space"],ans:"je + ai: elision before a vowel",hint:"Elision: je loses its -e before the vowel sound of ai."},
]},

// ═══ L7: Premiers dialogues ═══
{id:"fre2l7",title:"Premiers dialogues",icon:"💬",xp:15,board:true,steps:[
  {type:"intro",title:"Premiers dialogues",desc:"Combine everything from Unit 2: introductions, nationality, languages, numbers, être, and avoir in real conversations.",goals:["Have a complete self-introduction","Ask and answer about nationality, age, and languages","Flow naturally through a dialogue"]},

  {type:"teach",kind:"phrase",nl:"D'où venez-vous?",en:"Where do you come from? (formal)",phonetic:"doo vuh-NAY VOO",example:"A: D'où venez-vous?\nB: Je viens de Lyon.\nA: Ah, la ville des lumières!",exampleEn:"A: Where do you come from?\nB: I come from Lyon.\nA: Ah, the city of lights!",note:"D'où = from where. Venez = come (vous form of venir).\nCommon alternatives: Vous venez d'où? (same, less formal word order).\nCasual: Tu viens d'où?"},

  {type:"teach",kind:"phrase",nl:"Je viens de...",en:"I come from...",phonetic:"zhuh vee-EN duh",example:"A: Tu viens d'où?\nB: Je viens de Madrid.\nA: Tu es espagnol alors?\nB: Oui!",exampleEn:"A: Where do you come from?\nB: I come from Madrid.\nA: You are Spanish then?\nB: Yes!",note:"Je viens = I come (from venir, irregular).\nDe = from. De + city: Je viens de Paris.\nDe + countries: varies (du, de, d', des)."},

  {type:"teach",kind:"phrase",nl:"Quel âge avez-vous?",en:"How old are you? (formal)",phonetic:"kel AHZH ah-VAY VOO",example:"A: Quel âge avez-vous?\nB: J'ai vingt-cinq ans.\nA: Vous êtes jeune!",exampleEn:"A: How old are you?\nB: I am twenty-five.\nA: You are young!",note:"Quel = what. Âge = age. Avez-vous = do you have.\nLiterally: What age have you?\nCasual: Tu as quel âge?"},

  {type:"teach",kind:"phrase",nl:"Quelle est votre profession?",en:"What is your profession? (formal)",phonetic:"kel ay votr proh-feh-SYON",example:"A: Quelle est votre profession?\nB: Je suis professeur.\nA: Ah, c'est intéressant!",exampleEn:"A: What is your profession?\nB: I am a teacher.\nA: Ah, that's interesting!",note:"Quelle = what (feminine, matching profession).\nVotre = your (formal).\nNote: no article before profession! Je suis professeur (not un professeur)."},

  {type:"tip",title:"No Article Before Professions",text:"In French, when stating your profession with être, you drop the article:\n\nJe suis professeur (not: un professeur)\nElle est médecin (not: une médecin)\nIl est étudiant (not: un étudiant)\n\nBut with a modifier, the article returns:\nJe suis un bon professeur.\nElle est une excellente médecin.\n\nThis is different from English, where you always say: I am A teacher.",deepDive:{title:"When does the article return?",text:"The article-less pattern only works with bare professions after être:\n\nJe suis médecin. (I am a doctor.)\nElle est actrice. (She is an actress.)\n\nBut add any adjective and the article returns:\nJe suis un bon médecin. (I am a good doctor.)\nC'est un médecin. (He is a doctor. c'est always takes the article.)\n\nThis will feel strange at first. Practice until it becomes natural."}},

  {type:"mc",q:"Complete the dialogue: 'D'où ___-vous?'",opts:["êtes","venez","avez","allez"],ans:"venez",hint:"Where do you come from? The formal form of venir."},

  {type:"mc",q:"'Je suis professeur' has no article because:",opts:["It is informal","French drops articles before professions with être","Professeur is not a real noun","The article is optional"],ans:"French drops articles before professions with être",hint:"Bare professions after être: no un/une."},

  {type:"fb",s:"Quel ___ avez-vous? J'ai trente ans.",a:"âge",opts:["âge","an","jour","nom"],hint:"What ___ do you have? Asking about years."},

  {type:"mc",q:"'Tu viens d'où?' is the casual version of:",opts:["Quel âge as-tu?","D'où venez-vous?","Comment vous appelez-vous?","Où habites-tu?"],ans:"D'où venez-vous?",hint:"Same question (where from), casual word order with tu."},

  {type:"match",pairs:[{nl:"D'où venez-vous?",en:"Where are you from?"},{nl:"Quel âge avez-vous?",en:"How old are you?"},{nl:"Je suis professeur",en:"I am a teacher"},{nl:"Je viens de Paris",en:"I come from Paris"}]},

  {type:"mc",q:"Put this self-introduction in order: (1) J'ai 25 ans (2) Je m'appelle Sophie (3) Bonjour (4) Je suis française",opts:["3, 2, 4, 1","1, 2, 3, 4","2, 3, 1, 4","4, 3, 2, 1"],ans:"3, 2, 4, 1",hint:"Greet, name, nationality, age: the natural flow."},

  {type:"fb",s:"Je suis ___. Je travaille à l'hôpital.",a:"médecin",opts:["médecin","un médecin","le médecin","de médecin"],hint:"No article before profession with être."},

  {type:"mc",q:"Which uses avoir (not être)?",opts:["Je ___ français","Je ___ vingt ans","Je ___ à Paris","Je ___ grand"],ans:"Je ___ vingt ans",hint:"Age uses avoir: I HAVE twenty years."},

  {type:"mc",q:"The casual way to ask someone's age is:",opts:["Quel âge avez-vous?","Tu as quel âge?","Combien d'âge?","Ton âge?"],ans:"Tu as quel âge?",hint:"Tu form: rearranged word order, more relaxed."},

  {type:"fb",s:"Je ___ de Madrid. Je suis espagnol.",a:"viens",opts:["viens","suis","vais","ai"],hint:"I come from: first person of venir."},

  {type:"mc",q:"A complete self-introduction includes:",opts:["Only your name","Name, nationality, age, profession","Only name and age","Just a greeting"],ans:"Name, nationality, age, profession",hint:"Cover all the basics: who you are, where from, what you do."},

  {type:"fb",s:"Je ___ Sophie. Je suis française.",a:"m'appelle",opts:["m'appelle","suis","ai","appelle"],hint:"I call myself: the standard self-introduction."},
]},

// ═══ L8: Révision Unit 2 ═══
{id:"fre2l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 2 Review",desc:"Review everything from Unit 2: nationalities, languages, numbers 0-20, être, avoir, and self-introduction dialogues.",goals:["Review nationality gender agreement","Test number knowledge","Combine être and avoir correctly"]},

  {type:"mc",q:"A woman from Germany says:",opts:["Je suis allemand","Je suis allemande","Je suis Allemande","Je suis allemenade"],ans:"Je suis allemande",hint:"Feminine form: the silent D becomes pronounced with -e."},

  {type:"fb",s:"Je ___ anglais et un peu français.",a:"parle",opts:["parle","suis","ai","parles"],hint:"I speak: first person singular of the -er verb for speaking."},

  {type:"mc",q:"Douze + trois =",opts:["Treize","Quatorze","Quinze","Seize"],ans:"Quinze",hint:"12 + 3 = 15 in any language."},

  {type:"match",pairs:[{nl:"treize",en:"thirteen"},{nl:"seize",en:"sixteen"},{nl:"dix-neuf",en:"nineteen"},{nl:"vingt",en:"twenty"}]},

  {type:"mc",q:"'Nous sommes' is the nous form of:",opts:["avoir","être","aller","faire"],ans:"être",hint:"We are = nous sommes. The verb to be."},

  {type:"fb",s:"Ils ___ trois enfants.",a:"ont",opts:["ont","sont","a","avons"],hint:"They have: the ils/elles form of avoir."},

  {type:"mc",q:"'J'ai faim' means:",opts:["I am fine","I am hungry","I have food","I am eating"],ans:"I am hungry",hint:"Avoir faim = to be hungry. French uses have."},

  {type:"mc",q:"French nationalities as adjectives are:",opts:["Always capitalized","Always lowercase","Capitalized only for countries","Random"],ans:"Always lowercase",hint:"Unlike English: je suis français, not Français."},

  {type:"fb",s:"Tu ___ quel âge? J'ai dix-huit ans.",a:"as",opts:["as","es","ai","a"],hint:"You have: tu form of avoir. Age uses avoir."},

  {type:"match",pairs:[{nl:"je suis",en:"I am"},{nl:"j'ai",en:"I have"},{nl:"tu es",en:"you are"},{nl:"tu as",en:"you have"}]},

  {type:"mc",q:"'Je suis médecin' has no article because:",opts:["Médecin is not a noun","French drops articles before professions with être","It is a question","You must add un"],ans:"French drops articles before professions with être",hint:"Bare profession after être: no un/une needed."},

  {type:"fb",s:"D'où ___-vous? Je viens de Berlin.",a:"venez",opts:["venez","êtes","avez","allez"],hint:"Where do you come from? Formal you form of venir."},

  {type:"mc",q:"'Quatre' has which distinctive French sound?",opts:["Nasal vowel","Uvular R","Silent H","Liaison"],ans:"Uvular R",hint:"The R in quatre is produced at the back of the throat."},

  {type:"mc",q:"Numbers 17-19 are called 'logical' because:",opts:["They are easy to spell","They combine dix + unit (dix-sept, dix-huit, dix-neuf)","They rhyme","They are even numbers"],ans:"They combine dix + unit (dix-sept, dix-huit, dix-neuf)",hint:"10 + 7, 10 + 8, 10 + 9: transparent structure."},

  {type:"fb",s:"Elle ___ française. Elle vient de Marseille.",a:"est",opts:["est","a","as","suis"],hint:"She is: the il/elle form of être."},

  {type:"mc",q:"Which is NOT an avoir expression?",opts:["J'ai faim","J'ai froid","J'ai peur","J'ai grand"],ans:"J'ai grand",hint:"Grand (tall/big) uses être, not avoir."},

  {type:"mc",q:"All French language names are:",opts:["Feminine","Masculine","Neutral","It depends"],ans:"Masculine",hint:"Le français, l'anglais, l'espagnol: all use le."},

  {type:"mc",q:"'On a' replaces which formal expression?",opts:["J'ai","Tu as","Nous avons","Ils ont"],ans:"Nous avons",hint:"On = casual we. It replaces the formal first person plural."},
]},
]},

// ══════════════════════════════════════════════════════════════
// UNIT 3: LA FAMILLE - Family, Possessives & the Agreement Web
// Possessives (mon/ma/mes, ton/ta/tes, son/sa/ses), descriptions
// P26: Agreement Web formally named and taught
// ══════════════════════════════════════════════════════════════
{n:3,lang:"fr",track:"v1",title:"La famille",sub:"Family, Possessives & Descriptions",icon:"👨‍👩‍👧‍👦",level:"A1.1",color:"#7B5EE8",lessons:[

// ═══ L1: La famille proche ═══
{id:"fre3l1",title:"La famille proche",icon:"👨‍👩‍👧‍👦",xp:15,board:true,steps:[
  {type:"intro",title:"La famille proche",desc:"Learn the core family vocabulary. Every noun has a gender, and family words come in natural pairs: le père / la mère, le frère / la soeur.",goals:["Name 8 core family members","Notice masculine/feminine pairs","Use le/la articles with family nouns"]},

  {type:"teach",kind:"word",nl:"le père",en:"the father",phonetic:"luh PEHR",example:"A: Comment s'appelle ton père?\nB: Mon père s'appelle Jean.\nA: Il est sympa?",exampleEn:"A: What is your father's name?\nB: My father's name is Jean.\nA: Is he nice?",note:"Le père = the father (masculine: le).\nPère sounds like English PAIR.\nInformal: papa (same as English papa/daddy)."},

  {type:"teach",kind:"word",nl:"la mère",en:"the mother",phonetic:"lah MEHR",example:"A: Ta mère est française?\nB: Oui, ma mère est française.\nA: Et ton père?",exampleEn:"A: Is your mother French?\nB: Yes, my mother is French.\nA: And your father?",note:"La mère = the mother (feminine: la).\nMère sounds like English MARE.\nInformal: maman (same as English mama)."},

  {type:"teach",kind:"word",nl:"le frère",en:"the brother",phonetic:"luh FREHR",example:"A: Tu as des frères?\nB: J'ai un frère. Il a quinze ans.\nA: Il est plus jeune que toi?",exampleEn:"A: Do you have brothers?\nB: I have one brother. He is fifteen.\nA: Is he younger than you?",note:"Le frère = the brother (masculine).\nThe accent grave (è) makes the E say EH.\nDes frères = brothers (plural, the S is silent)."},

  {type:"teach",kind:"word",nl:"la soeur",en:"the sister",phonetic:"lah SUHR",example:"A: Et des soeurs?\nB: J'ai deux soeurs. Elles sont grandes.\nA: Une grande famille!",exampleEn:"A: And sisters?\nB: I have two sisters. They are tall.\nA: A big family!",note:"La soeur = the sister (feminine).\nThe OE combination sounds like UH.\nDes soeurs = sisters (plural)."},

  {type:"teach",kind:"word",nl:"le fils / la fille",en:"the son / the daughter",phonetic:"luh FEES / lah FEE-yuh",example:"A: Vous avez des enfants?\nB: Oui, j'ai un fils et une fille.\nA: Quel âge ont-ils?",exampleEn:"A: Do you have children?\nB: Yes, I have a son and a daughter.\nA: How old are they?",note:"Le fils = the son. The L is silent! Sounds like FEES.\nLa fille = the daughter. Also means girl.\nLes enfants = the children (masculine plural, even if mixed)."},

  {type:"teach",kind:"word",nl:"le mari / la femme",en:"the husband / the wife",phonetic:"luh mah-REE / lah FAHM",example:"A: Je vous présente ma femme, Sophie.\nB: Enchanté, Sophie!\nA: Et voici mon mari, Pierre.",exampleEn:"A: Let me introduce my wife, Sophie.\nB: Nice to meet you, Sophie!\nA: And here is my husband, Pierre.",note:"Le mari = the husband (masculine).\nLa femme = the wife AND the woman (context tells you which).\nModern alternative: l'époux / l'épouse (spouse, more formal)."},

  {type:"tip",title:"Le or La? Gender is Built Into Family",text:"Family words come in natural gender pairs:\n\nle père (father) / la mère (mother)\nle frère (brother) / la soeur (sister)\nle fils (son) / la fille (daughter)\nle mari (husband) / la femme (wife)\n\nFor these, gender is biological AND grammatical.\nBut most French nouns have grammatical gender with no biological reason: le livre (book, masc), la table (table, fem).\n\nAlways learn the article WITH the noun: never just mère, always la mère.",deepDive:{title:"Why learn the article?",text:"In French, you cannot use a noun correctly without knowing its gender. The article (le/la), the adjective form, and the pronoun all depend on gender.\n\nle grand frère (the big brother) vs la grande soeur (the big sister)\nmon père (my father) vs ma mère (my mother)\nil est... (he is) vs elle est... (she is)\n\nIf you learn words without their articles, you will struggle with agreement forever. Start right: always le or la."}},

  {type:"mc",q:"'La soeur' means:",opts:["The brother","The sister","The mother","The daughter"],ans:"The sister",hint:"La signals feminine. Soeur is the female sibling."},

  {type:"mc",q:"The L in 'fils' (son) is:",opts:["Pronounced","Silent","Doubled","Nasal"],ans:"Silent",hint:"Fils sounds like FEES. The L disappears."},

  {type:"fb",s:"J'ai un ___ et une soeur.",a:"frère",opts:["frère","père","fils","mari"],hint:"One male sibling and one female sibling."},

  {type:"mc",q:"'La femme' can mean both:",opts:["Wife and sister","Mother and wife","Wife and woman","Daughter and wife"],ans:"Wife and woman",hint:"Context tells you which meaning applies."},

  {type:"match",pairs:[{nl:"le père",en:"the father"},{nl:"la mère",en:"the mother"},{nl:"le frère",en:"the brother"},{nl:"la soeur",en:"the sister"}]},

  {type:"mc",q:"Why should you always learn 'le/la' with every noun?",opts:["It sounds formal","Gender affects articles, adjectives, and pronouns","It is optional","Teachers require it"],ans:"Gender affects articles, adjectives, and pronouns",hint:"The article determines how everything else agrees."},

  {type:"fb",s:"Vous avez des enfants? Oui, j'ai un ___ et une fille.",a:"fils",opts:["fils","frère","père","ami"],hint:"One male child: the word for son."},

  {type:"mc",q:"'Les enfants' (the children) uses 'les' because:",opts:["It is feminine","It is plural","It is formal","It is masculine"],ans:"It is plural",hint:"Les = the (plural). Works for both masculine and feminine."},

  {type:"mc",q:"The informal word for 'mother' is:",opts:["Mère","Femme","Maman","Madame"],ans:"Maman",hint:"Like English mama/mommy. Used in families."},

  {type:"fb",s:"J'ai un ___ et deux soeurs.",a:"frère",opts:["frère","fils","père","ami"],hint:"One male sibling: the word for brother."},
]},

// ═══ L2: Les possessifs ═══
{id:"fre3l2",title:"Les possessifs",icon:"🏷️",xp:15,board:true,steps:[
  {type:"intro",title:"Les possessifs",desc:"My, your, his/her: French possessives agree with the THING OWNED, not the owner. This is the biggest source of confusion for English speakers.",goals:["Use mon/ma/mes (my)","Use ton/ta/tes (your, casual)","Understand: possessive matches the noun, not the person"]},

  {type:"teach",kind:"word",nl:"mon / ma / mes",en:"my (m/f/plural)",phonetic:"MON / MAH / MAY",example:"A: C'est ton chien?\nB: Oui, c'est mon chien.\nA: Et ta maison est grande?\nB: Ma maison est petite mais mes enfants l'adorent.",exampleEn:"A: Is that your dog?\nB: Yes, it's my dog.\nA: And your house is big?\nB: My house is small but my children love it.",note:"Mon = my (before masculine nouns): mon père, mon frère.\nMa = my (before feminine nouns): ma mère, ma soeur.\nMes = my (before ALL plurals): mes parents, mes soeurs."},

  {type:"teach",kind:"word",nl:"ton / ta / tes",en:"your (m/f/plural, informal)",phonetic:"TON / TAH / TAY",example:"A: Comment s'appelle ton père?\nB: Mon père s'appelle Marc.\nA: Et ta mère?\nB: Ma mère s'appelle Claire.",exampleEn:"A: What is your father's name?\nB: My father's name is Marc.\nA: And your mother?\nB: My mother's name is Claire.",note:"Ton = your (before masculine nouns): ton père.\nTa = your (before feminine nouns): ta mère.\nTes = your (before ALL plurals): tes parents.\nThese are the tu forms. Formal = votre/vos."},

  {type:"teach",kind:"word",nl:"son / sa / ses",en:"his, her, its (m/f/plural)",phonetic:"SON / SAH / SAY",example:"A: Marie aime son travail.\nB: Et son mari?\nA: Son mari aime sa voiture!\nB: Et ses enfants?",exampleEn:"A: Marie loves her job.\nB: And her husband?\nA: Her husband loves his car!\nB: And their children?",note:"CRITICAL: son/sa/ses match the NOUN, not the owner.\nSon père = his father OR her father.\nSa mère = his mother OR her mother.\nFrench does not distinguish his from her!"},

  {type:"tip",title:"The Great Confusion: Son = His AND Her",text:"English: his father / her father (we know the owner's gender).\nFrench: son père / son père (we only know the NOUN is masculine).\n\nMarie aime son père. = Marie loves her father.\nPierre aime son père. = Pierre loves his father.\n\nBoth use SON because père is masculine.\nThe possessive matches the THING, not the PERSON.\n\nThis will feel wrong. Practice until it clicks.",deepDive:{title:"Why does French work this way?",text:"Latin possessives agreed with the possessed noun, not the possessor. French inherited this system.\n\nThe logic: the possessive is an adjective modifying the noun. Like all French adjectives, it agrees with the noun it modifies, not with something else in the sentence.\n\nThis is the Agreement Web: everything connected to a noun matches that noun's gender and number.\n\nSpanish (su), Italian (suo/sua), and Portuguese (seu/sua) all work the same way."}},

  {type:"teach",kind:"word",nl:"mon amie (not ma amie)",en:"my friend (feminine, before vowel)",phonetic:"mon ah-MEE",example:"A: Tu connais Sophie?\nB: Oui, c'est mon amie.\nA: Elle est sympa!",exampleEn:"A: Do you know Sophie?\nB: Yes, she is my friend.\nA: She is nice!",note:"EXCEPTION: before feminine nouns starting with a vowel,\nuse MON instead of MA for pronunciation.\nMon amie (not ma amie). Mon école (not ma école).\nThis avoids two vowel sounds colliding."},

  {type:"teach",kind:"word",nl:"votre / vos",en:"your (formal/plural)",phonetic:"VOTR / VOH",example:"A: Votre nom, s'il vous plaît?\nB: Dupont. Et votre profession?\nA: Je suis médecin. Vos enfants vont bien?",exampleEn:"A: Your name, please?\nB: Dupont. And your profession?\nA: I am a doctor. Are your children well?",note:"Votre = your (singular, formal): votre père, votre mère.\nVos = your (plural, formal): vos parents, vos enfants.\nVotre works for BOTH masculine and feminine singular."},

  {type:"mc",q:"'Ma soeur' means my sister. Why 'ma' and not 'mon'?",opts:["I am female","Soeur is feminine","Ma sounds better","It is informal"],ans:"Soeur is feminine",hint:"The possessive matches the noun's gender, not yours."},

  {type:"mc",q:"Marie talks about her father. She says:",opts:["Sa père","Son père","Son père (because Marie is female)","Mon père"],ans:"Son père",hint:"Père is masculine, so it takes son. The owner's gender does not matter."},

  {type:"fb",s:"Comment s'appelle ___ mère? Ma mère s'appelle Claire.",a:"ta",opts:["ta","ton","tes","votre"],hint:"Your (casual) before a feminine noun."},

  {type:"mc",q:"Why do we say 'mon amie' instead of 'ma amie'?",opts:["Amie is masculine","To avoid two vowels colliding","It is more formal","Mon is always correct"],ans:"To avoid two vowels colliding",hint:"Ma + vowel sound is hard to pronounce. Mon replaces ma."},

  {type:"match",pairs:[{nl:"mon/ma/mes",en:"my"},{nl:"ton/ta/tes",en:"your (informal)"},{nl:"son/sa/ses",en:"his/her"},{nl:"votre/vos",en:"your (formal)"}]},

  {type:"mc",q:"'Ses parents' means:",opts:["Only his parents","Only her parents","His OR her parents","Your parents"],ans:"His OR her parents",hint:"Ses matches the plural noun. Owner could be he or she."},

  {type:"fb",s:"___ enfants sont à l'école. (formal: your children)",a:"Vos",opts:["Vos","Votre","Tes","Mes"],hint:"Formal your before a plural noun."},

  {type:"mc",q:"'Ton père' uses ton because:",opts:["You are male","Père is masculine","Ton is always for family","It is plural"],ans:"Père is masculine",hint:"The possessive matches the noun, not the speaker."},

  {type:"mc",q:"Which is the correct set for 'my'?",opts:["mon, ma, mes","mon, mon, mon","le, la, les","un, une, des"],ans:"mon, ma, mes",hint:"Three forms: masculine, feminine, plural."},

  {type:"fb",s:"Pierre aime ___ voiture. (his car, la voiture)",a:"sa",opts:["sa","son","ses","la"],hint:"His car: voiture is feminine, so the possessive is feminine."},

  {type:"mc",q:"'Votre maison' uses votre (not vos) because:",opts:["Maison is masculine","Maison is singular","Votre is more formal","It is a question"],ans:"Maison is singular",hint:"Votre = formal singular. Vos = formal plural."},
]},

// ═══ L3: Décrire les gens ═══
{id:"fre3l3",title:"Décrire les gens",icon:"🎨",xp:15,board:true,steps:[
  {type:"intro",title:"Décrire les gens",desc:"Describe people using adjectives. In French, most adjectives come AFTER the noun and must agree in gender and number. This is the Agreement Web.",goals:["Use 6 common adjectives","Place adjectives correctly (after the noun)","Make adjectives agree with gender"]},

  {type:"teach",kind:"word",nl:"grand / grande",en:"tall, big (m/f)",phonetic:"GRON / GROND",example:"A: Ton frère est grand?\nB: Oui, il est très grand.\nA: Et ta soeur?\nB: Elle est grande aussi.",exampleEn:"A: Is your brother tall?\nB: Yes, he is very tall.\nA: And your sister?\nB: She is tall too.",note:"Grand = tall/big (masculine). Grande = feminine.\nThe D is silent in grand (GRON).\nThe D is pronounced in grande (GROND).\nThis is the same pattern as allemand/allemande."},

  {type:"teach",kind:"word",nl:"petit / petite",en:"small, short (m/f)",phonetic:"puh-TEE / puh-TEET",example:"A: Ta fille est petite?\nB: Oui, elle est petite. Elle a trois ans.\nA: Comme c'est mignon!",exampleEn:"A: Is your daughter small?\nB: Yes, she is small. She is three.\nA: How cute!",note:"Petit = small (masculine). Petite = feminine.\nThe T is silent in petit (puh-TEE).\nThe T is pronounced in petite (puh-TEET).\nAgreement Web: silent letter becomes audible with -e."},

  {type:"teach",kind:"word",nl:"jeune",en:"young",phonetic:"ZHUHN",example:"A: Elle est jeune?\nB: Oui, elle est très jeune. Elle a vingt ans.\nA: C'est jeune!",exampleEn:"A: Is she young?\nB: Yes, she is very young. She is twenty.\nA: That's young!",note:"Jeune = young. Same form for masculine AND feminine.\nAlready ends in -e, so no change needed.\nLike belge, suisse, and other adjectives ending in -e."},

  {type:"teach",kind:"word",nl:"gentil / gentille",en:"nice, kind (m/f)",phonetic:"zhon-TEE / zhon-TEE-yuh",example:"A: Ton père est gentil?\nB: Oui, il est très gentil.\nA: Et ta mère?\nB: Elle est gentille aussi!",exampleEn:"A: Is your father nice?\nB: Yes, he is very nice.\nA: And your mother?\nB: She is nice too!",note:"Gentil = nice (masculine). Gentille = feminine.\nPronunciation changes: TEE becomes TEE-yuh.\nThe double L + E creates a Y sound."},

  {type:"teach",kind:"word",nl:"sympa",en:"nice, cool (informal)",phonetic:"sam-PAH",example:"A: Tes parents sont sympas?\nB: Oui, ils sont très sympas!\nA: Tu as de la chance.",exampleEn:"A: Are your parents nice?\nB: Yes, they are very nice!\nA: You are lucky.",note:"Sympa = short for sympathique. Very common in speech.\nSame form for masculine and feminine: il est sympa, elle est sympa.\nPlural: sympas (add S, still silent)."},

  {type:"tip",title:"The Agreement Web: Adjectives",text:"French adjectives must AGREE with the noun in gender and number:\n\nMasculine singular: Il est grand.\nFeminine singular: Elle est grande. (+e)\nMasculine plural: Ils sont grands. (+s)\nFeminine plural: Elles sont grandes. (+es)\n\nPattern: +e for feminine, +s for plural, +es for feminine plural.\nException: adjectives already ending in -e (jeune, sympa) do not add another -e.\n\nThe Agreement Web connects nouns, articles, possessives, AND adjectives. Everything must match.",deepDive:{title:"Why is this called the Agreement Web?",text:"In English, adjectives never change: a tall man, a tall woman, tall men, tall women.\n\nIn French, the adjective is caught in a web of agreement. It must match:\n1. The gender of the noun (masculine or feminine)\n2. The number of the noun (singular or plural)\n\nThis web extends to articles (le/la/les), possessives (mon/ma/mes), and demonstratives (ce/cette/ces). Everything orbits the noun.\n\nOnce you internalize this, French grammar clicks into place."}},

  {type:"mc",q:"'Elle est grande' uses grande (not grand) because:",opts:["Grande is more polite","Elle is feminine, so the adjective adds -e","Grande sounds better","It is plural"],ans:"Elle is feminine, so the adjective adds -e",hint:"Agreement Web: adjective matches the subject's gender."},

  {type:"mc",q:"Which adjective does NOT change for feminine?",opts:["Grand","Petit","Jeune","Gentil"],ans:"Jeune",hint:"Already ends in -e. No extra -e needed."},

  {type:"fb",s:"Ma soeur est ___. Elle a cinq ans. (small, feminine)",a:"petite",opts:["petite","petit","grande","grand"],hint:"Small/short, feminine form. The T becomes audible."},

  {type:"mc",q:"To make an adjective plural, you usually add:",opts:["-e","-s","-es","-ment"],ans:"-s",hint:"Plural marker for adjectives: silent S."},

  {type:"match",pairs:[{nl:"grand/grande",en:"tall/big"},{nl:"petit/petite",en:"small/short"},{nl:"gentil/gentille",en:"nice/kind"},{nl:"jeune",en:"young"}]},

  {type:"mc",q:"In 'grand', the D is silent. In 'grande', the D is:",opts:["Still silent","Pronounced","Doubled","Nasal"],ans:"Pronounced",hint:"Adding -e makes the final consonant audible."},

  {type:"fb",s:"Mes parents sont très ___. (nice, plural, informal)",a:"sympas",opts:["sympas","sympa","gentils","gentil"],hint:"Informal nice, plural form. Add -s."},

  {type:"mc",q:"'Gentil' becomes 'gentille' in feminine. The sound changes to:",opts:["zhon-TEE","zhon-TEE-yuh","zhon-TEEL","zhon-TIL"],ans:"zhon-TEE-yuh",hint:"Double L + E creates a Y sound in pronunciation."},

  {type:"mc",q:"The Agreement Web connects a noun to its:",opts:["Only its article","Only its adjective","Articles, possessives, and adjectives","Only its verb"],ans:"Articles, possessives, and adjectives",hint:"Everything orbiting the noun must match its gender and number."},

  {type:"fb",s:"Ils sont ___ et gentils. (tall, masculine plural)",a:"grands",opts:["grands","grand","grandes","grande"],hint:"Tall in masculine plural: base + s."},

  {type:"mc",q:"'Sympa' is the same for masculine and feminine because:",opts:["It is informal","It already ends in -a","It is short for sympathique","It is an exception"],ans:"It is short for sympathique",hint:"Abbreviated adjectives often have one form for both genders."},
]},

// ═══ L4: La famille étendue ═══
{id:"fre3l4",title:"La famille étendue",icon:"👴",xp:15,board:true,steps:[
  {type:"intro",title:"La famille étendue",desc:"Expand your family vocabulary with grandparents, uncle, aunt, cousin. These words follow the same gender patterns you already know.",goals:["Name extended family members","Use possessives with extended family","Describe family relationships"]},

  {type:"teach",kind:"word",nl:"le grand-père",en:"the grandfather",phonetic:"luh gron-PEHR",example:"A: Ton grand-père est français?\nB: Oui, mon grand-père est de Bordeaux.\nA: Il a quel âge?",exampleEn:"A: Is your grandfather French?\nB: Yes, my grandfather is from Bordeaux.\nA: How old is he?",note:"Le grand-père = the grandfather (masculine).\nGrand = big/great. Père = father.\nPlural: les grands-parents = the grandparents."},

  {type:"teach",kind:"word",nl:"la grand-mère",en:"the grandmother",phonetic:"lah gron-MEHR",example:"A: Ta grand-mère cuisine bien?\nB: Ma grand-mère fait le meilleur gâteau!\nA: J'adore les gâteaux!",exampleEn:"A: Does your grandmother cook well?\nB: My grandmother makes the best cake!\nA: I love cakes!",note:"La grand-mère = the grandmother (feminine).\nNote: grand does NOT become grande here.\nThis is a fixed compound: grand-mère, not grande-mère."},

  {type:"teach",kind:"word",nl:"l'oncle / la tante",en:"the uncle / the aunt",phonetic:"LONKL / lah TONT",example:"A: Tu as un oncle?\nB: J'ai deux oncles et trois tantes.\nA: Une grande famille!",exampleEn:"A: Do you have an uncle?\nB: I have two uncles and three aunts.\nA: A big family!",note:"L'oncle = le + oncle (elision before vowel). Masculine.\nLa tante = the aunt (feminine).\nOncle is a cognate with English uncle."},

  {type:"teach",kind:"word",nl:"le cousin / la cousine",en:"the cousin (m/f)",phonetic:"luh koo-ZAN / lah koo-ZEEN",example:"A: Ta cousine habite à Paris?\nB: Oui, ma cousine est étudiante à Paris.\nA: C'est bien!",exampleEn:"A: Does your cousin live in Paris?\nB: Yes, my cousin is a student in Paris.\nA: That's nice!",note:"Le cousin = male cousin. La cousine = female cousin.\nCognate with English cousin.\nThe -in/-ine ending follows the pattern: nasal in masculine, clear EEN in feminine."},

  {type:"teach",kind:"phrase",nl:"Il/Elle est...",en:"He/She is...",phonetic:"eel AY / el AY",example:"A: Comment est ton oncle?\nB: Il est grand et gentil.\nA: Et ta tante?\nB: Elle est petite et sympa.",exampleEn:"A: What is your uncle like?\nB: He is tall and kind.\nA: And your aunt?\nB: She is short and nice.",note:"Use il est / elle est + adjective for descriptions.\nThe adjective must agree with il (masculine) or elle (feminine).\nIl est grand. Elle est grande. The Agreement Web!"},

  {type:"tip",title:"Describing Family Members",text:"Combine what you know:\n\nMon père est grand et gentil.\nMa mère est petite et sympa.\nMes grands-parents sont vieux mais actifs.\n\nAlways match:\n1. Possessive to the noun (mon/ma/mes)\n2. Adjective to the subject (grand/grande)\n3. Article to the noun (le/la/les)\n\nAll three threads of the Agreement Web.",deepDive:{title:"Mais and Et",text:"Two essential connectors:\n\nEt = and. Il est grand et gentil.\nMais = but. Elle est petite mais forte.\n\nMais introduces a contrast. Et joins similar ideas.\nBoth are extremely common in descriptions.\n\nYou can chain multiple adjectives:\nIl est grand, gentil et sympa.\nElle est petite mais forte et intelligente."}},

  {type:"mc",q:"'La grand-mère' uses 'grand' (not 'grande') because:",opts:["Grand-mère is a fixed compound word","Grand is always masculine","Mère is masculine","It is informal"],ans:"Grand-mère is a fixed compound word",hint:"Compound words sometimes freeze adjective forms."},

  {type:"mc",q:"'Ma cousine' refers to:",opts:["A male cousin","A female cousin","Any cousin","A grandparent"],ans:"A female cousin",hint:"Cousine is the feminine form. La cousine = female cousin."},

  {type:"fb",s:"Mon ___  habite à Lyon. (uncle)",a:"oncle",opts:["oncle","tante","cousin","père"],hint:"The male sibling of your parent."},

  {type:"mc",q:"'L'oncle' uses l' because:",opts:["Oncle is feminine","Oncle starts with a vowel","It is more formal","Oncle is plural"],ans:"Oncle starts with a vowel",hint:"Elision: le becomes l' before vowel sounds."},

  {type:"match",pairs:[{nl:"le grand-père",en:"the grandfather"},{nl:"la grand-mère",en:"the grandmother"},{nl:"l'oncle",en:"the uncle"},{nl:"la tante",en:"the aunt"}]},

  {type:"mc",q:"To describe your aunt, you say 'Elle est...' The adjective must be:",opts:["Masculine","Feminine","Plural","Neutral"],ans:"Feminine",hint:"Elle = she. Adjectives must match the subject's gender."},

  {type:"fb",s:"Ma tante est ___ et sympa. (tall, feminine)",a:"grande",opts:["grande","grand","grands","petit"],hint:"Tall in feminine: the D becomes pronounced with the -e."},

  {type:"mc",q:"'Mais' in 'petit mais fort' means:",opts:["And","But","Or","Also"],ans:"But",hint:"Mais introduces a contrast: small BUT strong."},

  {type:"mc",q:"Les grands-parents includes:",opts:["Only grandfathers","Only grandmothers","Both grandfather and grandmother","Parents and grandparents"],ans:"Both grandfather and grandmother",hint:"The plural form covers both grandparents."},

  {type:"fb",s:"Mon ___ est américain. Ma cousine est française.",a:"cousin",opts:["cousin","cousine","oncle","frère"],hint:"Male relative of the same generation. Masculine form."},

  {type:"mc",q:"'Mes grands-parents sont gentils.' Why gentils (not gentilles)?",opts:["Masculine plural for mixed groups","Grands-parents is masculine","Gentils sounds better","It is always gentils"],ans:"Masculine plural for mixed groups",hint:"Mixed gender groups default to masculine in French."},
]},

// ═══ L5: C'est + Il est ═══
{id:"fre3l5",title:"C'est vs Il est",icon:"💡",xp:15,board:true,steps:[
  {type:"intro",title:"C'est vs Il est",desc:"French has two ways to say 'it is' or 'he is': c'est and il est. They are NOT interchangeable. This distinction trips up every learner.",goals:["Know when to use c'est vs il est","Use c'est for identification","Use il est for description"]},

  {type:"teach",kind:"phrase",nl:"C'est...",en:"This is... / It is... / He is...",phonetic:"SAY",example:"A: Qui est cet homme?\nB: C'est mon père.\nA: C'est un homme gentil.",exampleEn:"A: Who is that man?\nB: That is my father.\nA: He is a kind man.",note:"C'est = ce + est (this/it is).\nUse for identification: C'est Pierre. C'est mon ami.\nUse before un/une/des: C'est un professeur. C'est une fille."},

  {type:"teach",kind:"phrase",nl:"Il est... / Elle est...",en:"He is... / She is...",phonetic:"eel AY / el AY",example:"A: Ton frère, comment est-il?\nB: Il est grand. Il est sympa.\nA: Il est français?",exampleEn:"A: Your brother, what is he like?\nB: He is tall. He is nice.\nA: Is he French?",note:"Il/Elle est + adjective for descriptions.\nIl est grand (He is tall). Elle est française (She is French).\nNEVER: Il est un professeur. Always: C'est un professeur."},

  {type:"tip",title:"C'est vs Il est: The Rule",text:"Simple rule:\n\nC'est + noun (with article): C'est un ami. C'est ma soeur.\nIl/Elle est + adjective (alone): Il est grand. Elle est française.\n\nC'est = identification (who/what is it?)\nIl/Elle est = description (what is he/she like?)\n\nC'est mon père. Il est grand et gentil.\nC'est ma mère. Elle est petite et sympa.\n\nNever mix them: NEVER say 'Il est un ami' or 'C'est grand'.",deepDive:{title:"Why two systems?",text:"C'est treats the subject as a thing to be identified. You point at it and label it.\nIl est treats the subject as already identified. You describe its qualities.\n\nThink of it as:\nC'est = WHO is it? WHAT is it? (labeling)\nIl est = What is he LIKE? (describing)\n\nThis distinction does not exist in English, which uses 'it is' and 'he is' more freely. In French, the grammar is strict."}},

  {type:"teach",kind:"phrase",nl:"C'est + adjective (reactions)",en:"It is + adjective (for general reactions)",phonetic:"SAY + adj",example:"A: Le film est bien?\nB: C'est génial!\nA: C'est intéressant?\nB: C'est très intéressant!",exampleEn:"A: Is the movie good?\nB: It's great!\nA: Is it interesting?\nB: It's very interesting!",note:"Exception: c'est + adjective for general reactions (no specific person).\nC'est bien! (It's good!). C'est super! (It's great!).\nC'est beau! (It's beautiful!). C'est intéressant! (It's interesting!)\nThese react to a situation, not describe a person."},

  {type:"teach",kind:"word",nl:"intelligent / intelligente",en:"intelligent, smart (m/f)",phonetic:"an-teh-lee-ZHON / an-teh-lee-ZHONT",example:"A: Ta fille est intelligente?\nB: Oui, elle est très intelligente.\nA: C'est bien!",exampleEn:"A: Is your daughter smart?\nB: Yes, she is very smart.\nA: That's good!",note:"Intelligent = masculine. Intelligente = feminine.\nSame pattern: silent T in masculine, pronounced T in feminine.\nCognate with English intelligent."},

  {type:"teach",kind:"word",nl:"amusant / amusante",en:"funny, entertaining (m/f)",phonetic:"ah-mew-ZON / ah-mew-ZONT",example:"A: Ton oncle est amusant?\nB: Oui, il est très amusant! Il raconte des blagues.\nA: C'est sympa!",exampleEn:"A: Is your uncle funny?\nB: Yes, he is very funny! He tells jokes.\nA: That's nice!",note:"Amusant = masculine. Amusante = feminine.\nNasal ending in masculine (ZON). T pronounced in feminine (ZONT).\nCognate with English amusing."},

  {type:"mc",q:"'C'est mon père.' This uses c'est because:",opts:["C'est is always correct","It identifies someone (c'est + noun)","Mon père is masculine","It is a question"],ans:"It identifies someone (c'est + noun)",hint:"C'est + noun with article for identification."},

  {type:"mc",q:"'___ grand.' Fill in with il est or c'est:",opts:["C'est","Il est","Ce sont","Ils sont"],ans:"Il est",hint:"Adjective alone (no noun after) = il/elle est."},

  {type:"fb",s:"___ un bon professeur. (This is/He is)",a:"C'est",opts:["C'est","Il est","Elle est","Ce sont"],hint:"Before un/une + noun = identification form."},

  {type:"mc",q:"'C'est intéressant!' is used for:",opts:["Describing a person","A general reaction to a situation","Identifying someone","Asking a question"],ans:"A general reaction to a situation",hint:"C'est + adjective for reactions (not about a specific person)."},

  {type:"match",pairs:[{nl:"C'est mon frère",en:"This is my brother"},{nl:"Il est grand",en:"He is tall"},{nl:"C'est un ami",en:"He is a friend"},{nl:"Elle est française",en:"She is French"}]},

  {type:"mc",q:"Which is WRONG?",opts:["C'est mon père","Il est grand","Il est un professeur","C'est un professeur"],ans:"Il est un professeur",hint:"Never il/elle est + un/une. Always c'est + un/une."},

  {type:"fb",s:"Ma mère? ___ est petite et gentille.",a:"Elle",opts:["Elle","C'est","Il","Ce"],hint:"Describing a person already identified: pronoun + est + adjective."},

  {type:"mc",q:"'Intelligente' sounds different from 'intelligent' because:",opts:["Extra syllable","The final T is now pronounced","The N changes","The accent shifts"],ans:"The final T is now pronounced",hint:"Adding -e makes the silent T audible."},

  {type:"mc",q:"You see a beautiful sunset. You say:",opts:["Il est beau","Elle est belle","C'est beau!","Ils sont beaux"],ans:"C'est beau!",hint:"General reaction to a situation: c'est + adjective."},

  {type:"fb",s:"Ton cousin est ___. Il raconte des histoires drôles. (funny, masculine)",a:"amusant",opts:["amusant","amusante","amusé","amuser"],hint:"Funny in masculine: the T is silent."},

  {type:"mc",q:"'C'est mon frère. Il est grand.' Which pattern is each?",opts:["Both c'est","Both il est","C'est = identification, Il est = description","C'est = description, Il est = identification"],ans:"C'est = identification, Il est = description",hint:"C'est labels who it is. Il est describes qualities."},
]},

// ═══ L6: Parler de sa famille ═══
{id:"fre3l6",title:"Parler de sa famille",icon:"🗣️",xp:15,board:true,steps:[
  {type:"intro",title:"Parler de sa famille",desc:"Practice talking about your family in complete sentences. Combine possessives, être, avoir, and adjectives in natural descriptions.",goals:["Describe your family in full sentences","Combine possessives + être/avoir + adjectives","Handle follow-up questions about family"]},

  {type:"teach",kind:"phrase",nl:"J'ai ... frères et ... soeurs",en:"I have ... brothers and ... sisters",phonetic:"zhay ... FREHR ay ... SUHR",example:"A: Tu as des frères et soeurs?\nB: J'ai deux frères et une soeur.\nA: Tu es l'aîné?\nB: Non, je suis le plus jeune.",exampleEn:"A: Do you have brothers and sisters?\nB: I have two brothers and one sister.\nA: Are you the eldest?\nB: No, I am the youngest.",note:"Des frères et soeurs = brothers and sisters.\nThis is the standard question about siblings.\nDes = some (indefinite plural article)."},

  {type:"teach",kind:"phrase",nl:"Il/Elle s'appelle...",en:"His/Her name is... (He/She is called...)",phonetic:"eel sah-PELL / el sah-PELL",example:"A: Comment s'appelle ton frère?\nB: Il s'appelle Thomas.\nA: Et ta soeur?\nB: Elle s'appelle Marie.",exampleEn:"A: What is your brother's name?\nB: His name is Thomas.\nA: And your sister?\nB: Her name is Marie.",note:"Il s'appelle = he calls himself.\nElle s'appelle = she calls herself.\nSame verb as je m'appelle, different person."},

  {type:"teach",kind:"phrase",nl:"Il/Elle a ... ans",en:"He/She is ... years old",phonetic:"eel AH ... ON / el AH ... ON",example:"A: Ta soeur a quel âge?\nB: Elle a dix-sept ans.\nA: Elle est au lycée alors?",exampleEn:"A: How old is your sister?\nB: She is seventeen.\nA: She is in high school then?",note:"He/She has ... years = age expression.\nRemember: French uses AVOIR for age.\nIl a 10 ans (He is 10). Elle a 20 ans (She is 20)."},

  {type:"teach",kind:"phrase",nl:"Nous sommes ... dans la famille",en:"There are ... of us in the family",phonetic:"noo som ... don lah fah-MEE-yuh",example:"A: Vous êtes combien dans la famille?\nB: Nous sommes cinq: mes parents, mes deux frères, et moi.\nA: C'est une grande famille!",exampleEn:"A: How many are you in the family?\nB: We are five: my parents, my two brothers, and me.\nA: That's a big family!",note:"Nous sommes cinq = We are five.\nDans la famille = in the family.\nCommon question: Vous êtes combien? (How many are you?)"},

  {type:"tip",title:"A Complete Family Description",text:"Here is a model description:\n\nNous sommes quatre dans ma famille.\nMon père s'appelle Jean. Il a cinquante ans. Il est grand et gentil.\nMa mère s'appelle Claire. Elle a quarante-huit ans. Elle est petite et intelligente.\nJ'ai un frère. Il s'appelle Thomas. Il a quinze ans. Il est amusant.\n\nPattern for each person:\n1. Name (il/elle s'appelle)\n2. Age (il/elle a ... ans)\n3. Description (il/elle est + adjectives)",deepDive:{title:"Cinquante and quarante",text:"Preview of larger numbers:\nQuarante = 40. Cinquante = 50. Soixante = 60.\n\nThese come in Unit 8. For now, just recognize them in family descriptions. French ages past 20 will use these numbers.\n\nThe full number system has some surprises: 70 = soixante-dix (60+10), 80 = quatre-vingts (4x20), 90 = quatre-vingt-dix (4x20+10). That is a Unit 8 adventure."}},

  {type:"mc",q:"To ask about siblings, you say:",opts:["Vous avez des enfants?","Tu as des frères et soeurs?","Comment s'appelle ta mère?","Quel âge as-tu?"],ans:"Tu as des frères et soeurs?",hint:"Brothers and sisters: the standard sibling question."},

  {type:"mc",q:"'Elle s'appelle Marie' means:",opts:["She is Marie","She calls herself Marie","Marie is calling","She likes Marie"],ans:"She calls herself Marie",hint:"Same structure as je m'appelle, but third person."},

  {type:"fb",s:"Mon frère ___ Thomas. Il a quinze ans.",a:"s'appelle",opts:["s'appelle","est","a","appelle"],hint:"His name is Thomas: he calls himself."},

  {type:"mc",q:"'Nous sommes cinq dans la famille' means:",opts:["We have five families","There are five of us in the family","We are five years old","Five families are here"],ans:"There are five of us in the family",hint:"Nous sommes + number + dans la famille."},

  {type:"match",pairs:[{nl:"Il s'appelle Pierre",en:"His name is Pierre"},{nl:"Elle a vingt ans",en:"She is twenty"},{nl:"Il est gentil",en:"He is kind"},{nl:"Nous sommes quatre",en:"There are four of us"}]},

  {type:"mc",q:"The pattern for describing a family member is:",opts:["Age, name, description","Name, description, age","Name, age, description","Description, age, name"],ans:"Name, age, description",hint:"S'appelle, a ... ans, est + adjective. Natural flow."},

  {type:"fb",s:"Ma soeur ___ dix-huit ans. Elle est étudiante.",a:"a",opts:["a","est","s'appelle","fait"],hint:"She HAS eighteen years. Age uses avoir."},

  {type:"mc",q:"'Des frères et soeurs' uses 'des' because:",opts:["Des is formal","Des is the indefinite plural article","Des means many","Des is masculine"],ans:"Des is the indefinite plural article",hint:"Des = some. Used before plural nouns in questions with avoir."},

  {type:"fb",s:"Vous êtes ___ dans la famille? Nous sommes six.",a:"combien",opts:["combien","comment","quoi","qui"],hint:"How many: the question word for quantity."},

  {type:"mc",q:"In the model description, which verb is used for age?",opts:["Être","Avoir","Aller","Appeler"],ans:"Avoir",hint:"Il/Elle a ... ans. Age = having years."},

  {type:"mc",q:"When describing a male family member, adjectives are:",opts:["Always feminine","Masculine form","Always plural","Unchanged"],ans:"Masculine form",hint:"Il est grand, gentil, amusant. Agreement Web: masculine."},

  {type:"fb",s:"Nous sommes ___ dans ma famille: mes parents, mon frère et moi.",a:"quatre",opts:["quatre","trois","cinq","deux"],hint:"Parents (2) + brother (1) + me (1) = this number."},
]},

// ═══ L7: Les adjectifs BAGS ═══
{id:"fre3l7",title:"Les adjectifs BAGS",icon:"📏",xp:15,board:true,steps:[
  {type:"intro",title:"Avant le nom: les adjectifs BAGS",desc:"Most French adjectives come AFTER the noun. But a small group comes BEFORE. They follow the BAGS pattern: Beauty, Age, Goodness, Size.",goals:["Know the BAGS adjectives (before the noun)","Place adjectives correctly","Handle beau/belle, vieux/vieille, nouveau/nouvelle"]},

  {type:"teach",kind:"word",nl:"beau / belle",en:"beautiful, handsome (m/f)",phonetic:"BOH / BEL",example:"A: C'est une belle maison!\nB: Merci! Mon mari est un bel homme aussi.\nA: Oui, c'est vrai!",exampleEn:"A: That's a beautiful house!\nB: Thanks! My husband is a handsome man too.\nA: Yes, that's true!",note:"Beau = masculine. Belle = feminine.\nSpecial form before masculine vowels: un bel homme (not beau homme).\nBAGS adjective: goes BEFORE the noun. Une belle maison."},

  {type:"teach",kind:"word",nl:"vieux / vieille",en:"old (m/f)",phonetic:"vyuh / vee-AY-yuh",example:"A: Ton grand-père est vieux?\nB: Oui, c'est un vieil homme de quatre-vingts ans.\nA: Il est en forme?",exampleEn:"A: Is your grandfather old?\nB: Yes, he is an old man of eighty.\nA: Is he in good shape?",note:"Vieux = masculine. Vieille = feminine.\nSpecial form before masculine vowels: un vieil homme.\nBAGS adjective: goes BEFORE the noun. Un vieux livre."},

  {type:"teach",kind:"word",nl:"nouveau / nouvelle",en:"new (m/f)",phonetic:"noo-VOH / noo-VEL",example:"A: C'est ta nouvelle voiture?\nB: Oui! Et j'ai un nouvel appartement aussi.\nA: Tout est nouveau!",exampleEn:"A: Is that your new car?\nB: Yes! And I have a new apartment too.\nA: Everything is new!",note:"Nouveau = masculine. Nouvelle = feminine.\nSpecial form before masculine vowels: un nouvel ami.\nBAGS adjective: goes BEFORE the noun. Un nouveau livre."},

  {type:"teach",kind:"word",nl:"bon / bonne",en:"good (m/f)",phonetic:"BON / BON",example:"A: C'est un bon restaurant?\nB: Oui, c'est un très bon restaurant.\nA: Et la nourriture?\nB: Une bonne pizza!",exampleEn:"A: Is it a good restaurant?\nB: Yes, it's a very good restaurant.\nA: And the food?\nB: A good pizza!",note:"You know this from Bonjour and Bonne nuit!\nBon = masculine. Bonne = feminine (doubles the N).\nBAGS: Un bon livre. Une bonne idée."},

  {type:"tip",title:"BAGS: Adjectives That Go BEFORE the Noun",text:"Most French adjectives go AFTER: une maison grande, un homme intelligent.\nBut BAGS adjectives go BEFORE:\n\nB = Beauty: beau/belle (beautiful)\nA = Age: vieux/vieille (old), jeune (young), nouveau/nouvelle (new)\nG = Goodness: bon/bonne (good), mauvais (bad), gentil (nice)\nS = Size: grand (big), petit (small), gros (fat), long (long)\n\nUne belle maison (a beautiful house)\nUn vieux livre (an old book)\nUn bon ami (a good friend)\nUn petit chat (a small cat)\n\nThese are all very common, high-frequency adjectives.",deepDive:{title:"The special masculine vowel forms",text:"Three BAGS adjectives have a special form before masculine nouns starting with a vowel:\n\nbeau > bel: un bel homme (a handsome man)\nvieux > vieil: un vieil ami (an old friend)\nnouveau > nouvel: un nouvel appartement (a new apartment)\n\nThese exist purely for pronunciation: beau homme would create an awkward gap between two vowel sounds. Bel homme flows smoothly.\n\nFeminine forms (belle, vieille, nouvelle) do not change before vowels."}},

  {type:"mc",q:"'Une belle maison' puts belle BEFORE maison because:",opts:["Maison is feminine","Belle is a BAGS adjective (Beauty)","It sounds better","Belle is short"],ans:"Belle is a BAGS adjective (Beauty)",hint:"BAGS adjectives go before the noun."},

  {type:"mc",q:"'Un bel homme' uses bel (not beau) because:",opts:["Homme is feminine","Homme starts with a vowel sound","Bel is more formal","Beau is for objects only"],ans:"Homme starts with a vowel sound",hint:"Special form before masculine vowels for smooth pronunciation."},

  {type:"fb",s:"C'est un ___ restaurant! La nourriture est excellente.",a:"bon",opts:["bon","bonne","bien","beau"],hint:"A good restaurant. Masculine BAGS adjective before noun."},

  {type:"mc",q:"Where does 'intelligent' go?",opts:["Before the noun (BAGS)","After the noun","It depends on gender","Either position"],ans:"After the noun",hint:"Intelligent is not in BAGS. Regular adjectives go after."},

  {type:"match",pairs:[{nl:"une belle fille",en:"a beautiful girl"},{nl:"un vieux livre",en:"an old book"},{nl:"un bon ami",en:"a good friend"},{nl:"une petite maison",en:"a small house"}]},

  {type:"mc",q:"Which is correct?",opts:["Un homme grand et intelligent","Un grand et intelligent homme","Un intelligent homme grand","Grand un homme intelligent"],ans:"Un homme grand et intelligent",hint:"Grand (BAGS, before) can also go after. Intelligent always goes after."},

  {type:"fb",s:"C'est une ___ idée! (new, feminine)",a:"nouvelle",opts:["nouvelle","nouveau","nouvel","nouveaux"],hint:"New in feminine before a noun. BAGS placement."},

  {type:"mc",q:"'Vieux' becomes 'vieille' in feminine. They sound:",opts:["The same","Completely different","Similar with minor change","Vieille is silent"],ans:"Completely different",hint:"vyuh vs vee-AY-yuh. Very different pronunciations."},

  {type:"mc",q:"BAGS stands for:",opts:["Basic Adjective Grammar Structure","Beauty, Age, Goodness, Size","Before After Grammar Syntax","Big And Good Small"],ans:"Beauty, Age, Goodness, Size",hint:"The four categories of adjectives that go before the noun."},

  {type:"fb",s:"Mon grand-père est un ___ homme. (old, before masculine vowel)",a:"vieil",opts:["vieil","vieux","vieille","vieill"],hint:"Special masculine form before a vowel sound."},

  {type:"mc",q:"'Un nouveau livre' but 'un nouvel ami' because:",opts:["Ami is feminine","Ami starts with a vowel sound","Livre is masculine","Nouveau is for objects"],ans:"Ami starts with a vowel sound",hint:"Special form before masculine vowels for pronunciation."},

  {type:"fb",s:"C'est une ___ fille. Elle a trois ans. (small, BAGS placement)",a:"petite",opts:["petite","petit","grande","belle"],hint:"Small before a feminine noun. Size is a BAGS category."},
]},

// ═══ L8: Révision Unit 3 ═══
{id:"fre3l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 3 Review",desc:"Review all of Unit 3: family vocabulary, possessives, descriptions, c'est vs il est, and BAGS adjectives.",goals:["Review family vocabulary","Test possessive agreement","Combine descriptions with BAGS placement"]},

  {type:"mc",q:"'Mon frère' uses mon because:",opts:["I am male","Frère is masculine","Mon is always for family","Frère starts with F"],ans:"Frère is masculine",hint:"Possessive matches the noun, not the speaker."},

  {type:"fb",s:"___ soeur s'appelle Marie. (my, feminine)",a:"Ma",opts:["Ma","Mon","Mes","Sa"],hint:"My before a feminine noun: the feminine possessive."},

  {type:"mc",q:"Pierre parle de sa mère. 'Sa' means:",opts:["Only his","Only her","His OR her","Their"],ans:"His OR her",hint:"Sa matches mère (feminine). The owner could be male or female."},

  {type:"match",pairs:[{nl:"le grand-père",en:"grandfather"},{nl:"la tante",en:"aunt"},{nl:"le cousin",en:"male cousin"},{nl:"la fille",en:"daughter"}]},

  {type:"mc",q:"'Elle est grande' vs 'C'est une grande fille'. Both are correct because:",opts:["They mean different things","Elle est + adjective, c'est + noun phrase","They are interchangeable","Only the first is correct"],ans:"Elle est + adjective, c'est + noun phrase",hint:"Two correct patterns for two different structures."},

  {type:"fb",s:"C'est un ___ homme. (handsome, before masculine vowel)",a:"bel",opts:["bel","beau","belle","bels"],hint:"Special BAGS form before masculine vowels."},

  {type:"mc",q:"'Mon amie' uses mon (not ma) because:",opts:["Amie is masculine","To avoid two vowel sounds colliding","Mon is always correct","Amie is informal"],ans:"To avoid two vowel sounds colliding",hint:"Ma + vowel = hard to pronounce. Mon replaces ma."},

  {type:"mc",q:"Which adjective goes BEFORE the noun?",opts:["Intelligent","Amusant","Petit","Français"],ans:"Petit",hint:"Size is one of the BAGS categories."},

  {type:"fb",s:"Mes grands-parents sont ___ mais actifs. (old, masculine plural)",a:"vieux",opts:["vieux","vieille","vieilles","vieil"],hint:"Old in masculine plural: same as singular for this adjective."},

  {type:"mc",q:"'Nous sommes six dans la famille' means:",opts:["We have six families","There are six of us","We are six years old","Six is the family number"],ans:"There are six of us",hint:"Nous sommes + number = we are this many."},

  {type:"match",pairs:[{nl:"beau/belle",en:"beautiful"},{nl:"vieux/vieille",en:"old"},{nl:"nouveau/nouvelle",en:"new"},{nl:"bon/bonne",en:"good"}]},

  {type:"fb",s:"C'est une ___ maison avec un ___ jardin. (beautiful, big)",a:"belle",opts:["belle","beau","bel","beaux"],hint:"Beautiful before a feminine noun."},

  {type:"mc",q:"'Il est grand. C'est un bon père.' This mixing of il est and c'est is:",opts:["Wrong","Correct: il est + adjective, c'est + noun","Only formal","Only casual"],ans:"Correct: il est + adjective, c'est + noun",hint:"Each pattern used correctly in its own context."},

  {type:"mc",q:"Family descriptions follow which pattern?",opts:["Description, name, age","Name, age, description","Age, description, name","Name, description, age"],ans:"Name, age, description",hint:"S'appelle, a ... ans, est + adjectives."},

  {type:"fb",s:"Elle a dix-sept ___. Elle est étudiante.",a:"ans",opts:["ans","an","âge","année"],hint:"She has seventeen ___. The word for years in age."},

  {type:"mc",q:"'Il est un professeur' is:",opts:["Correct","Incorrect: should be 'C'est un professeur'","Formal","Casual"],ans:"Incorrect: should be 'C'est un professeur'",hint:"Never il/elle est + un/une. Always c'est + un/une."},

  {type:"mc",q:"In French, adjectives must agree with the noun in:",opts:["Only gender","Only number","Gender and number","Nothing"],ans:"Gender and number",hint:"The Agreement Web: both gender (+e) and number (+s)."},
]},
]},

// ══════════════════════════════════════════════════════════════
// UNIT 4: À TABLE! - Food, Drink & the Article System
// Articles (le/la/les, un/une/des), partitive (du/de la/de l')
// P26: Article system formally taught. Partitive introduced.
// ══════════════════════════════════════════════════════════════
{n:4,lang:"fr",track:"v1",title:"À table!",sub:"Food, Drink & Articles",icon:"🍽️",level:"A1.2",color:"#7B5EE8",lessons:[

// ═══ L1: Au petit déjeuner ═══
{id:"fre4l1",title:"Au petit déjeuner",icon:"🥐",xp:15,board:true,steps:[
  {type:"intro",title:"Au petit déjeuner",desc:"Learn breakfast vocabulary and discover how French articles work. Every noun needs an article: le, la, les, un, une, or des.",goals:["Name 6 breakfast items","Use le/la/les (definite articles)","Use un/une/des (indefinite articles)"]},

  {type:"teach",kind:"word",nl:"le croissant",en:"the croissant",phonetic:"luh kwah-SON",cognate:{words:[{lang:"English",word:"croissant (crescent)"}],family:"romance"},example:"A: Tu veux un croissant?\nB: Oui, je voudrais un croissant au beurre.\nA: Excellent choix!",exampleEn:"A: Do you want a croissant?\nB: Yes, I would like a butter croissant.\nA: Excellent choice!",note:"Le croissant = the croissant (masculine).\nLiterally means crescent (moon shape).\nUn croissant = a croissant (indefinite)."},

  {type:"teach",kind:"word",nl:"la baguette",en:"the baguette (French bread)",phonetic:"lah bah-GET",example:"A: Tu as acheté du pain?\nB: Oui, j'ai une baguette fraîche.\nA: Parfait pour le petit déjeuner!",exampleEn:"A: Did you buy bread?\nB: Yes, I have a fresh baguette.\nA: Perfect for breakfast!",note:"La baguette = the baguette (feminine).\nLiterally means stick/wand.\nUne baguette = a baguette (indefinite feminine)."},

  {type:"teach",kind:"word",nl:"le café",en:"the coffee",phonetic:"luh kah-FAY",cognate:{words:[{lang:"English",word:"café"}],family:"romance"},example:"A: Un café, s'il vous plaît.\nB: Noir ou avec du lait?\nA: Avec du lait, merci.",exampleEn:"A: A coffee, please.\nB: Black or with milk?\nA: With milk, thank you.",note:"Le café = the coffee (masculine).\nAlso means the café (the place).\nUn café = a coffee. Du café = some coffee (partitive)."},

  {type:"teach",kind:"word",nl:"le thé",en:"the tea",phonetic:"luh TAY",example:"A: Café ou thé?\nB: Du thé, s'il vous plaît.\nA: Avec du sucre?\nB: Non, merci. Nature.",exampleEn:"A: Coffee or tea?\nB: Tea, please.\nA: With sugar?\nB: No, thanks. Plain.",note:"Le thé = the tea (masculine).\nCognate with English tea (both from Chinese cha/te).\nDu thé = some tea (partitive article)."},

  {type:"teach",kind:"word",nl:"le beurre",en:"the butter",phonetic:"luh BUHR",example:"A: Tu veux du beurre sur ta tartine?\nB: Oui, du beurre et de la confiture.\nA: Bon appétit!",exampleEn:"A: Do you want butter on your toast?\nB: Yes, butter and jam.\nA: Enjoy!",note:"Le beurre = the butter (masculine).\nCognate with English butter (from Germanic).\nDu beurre = some butter (you don't eat ALL the butter)."},

  {type:"teach",kind:"word",nl:"la confiture",en:"the jam",phonetic:"lah kon-fee-TEWR",example:"A: Quelle confiture préfères-tu?\nB: La confiture de fraises!\nA: Moi aussi, c'est la meilleure.",exampleEn:"A: Which jam do you prefer?\nB: Strawberry jam!\nA: Me too, it's the best.",note:"La confiture = the jam (feminine).\nDe la confiture = some jam (partitive feminine).\nConfiture de fraises = strawberry jam."},

  {type:"tip",title:"Le, La, Les: Definite Articles",text:"French has THREE definite articles (the):\n\nle = the (masculine singular): le café, le croissant\nla = the (feminine singular): la baguette, la confiture\nles = the (plural, both genders): les croissants, les baguettes\n\nBefore vowels: le/la become l': l'eau (the water), l'orange\n\nFrench uses definite articles MORE than English:\nJ'aime le café. (I like coffee. Not: I like THE coffee.)\nLe lait est bon. (Milk is good. Not: THE milk is good.)\n\nIn French, general statements need le/la/les.",deepDive:{title:"Why articles for general statements?",text:"In English: I like coffee. Coffee is good. (no article)\nIn French: J'aime le café. Le café est bon. (article required)\n\nFrench requires the definite article when speaking about things in general. This is because French grammar treats every noun as needing a determiner. A bare noun (without any article) is grammatically incomplete.\n\nThis takes practice. Whenever you make a general statement about something, add le/la/les."}},

  {type:"mc",q:"'Le croissant' uses le because croissant is:",opts:["Feminine","Masculine","Plural","Uncountable"],ans:"Masculine",hint:"Le signals the noun belongs to this gender category."},

  {type:"mc",q:"Before a vowel, le/la become:",opts:["les","un","l'","de"],ans:"l'",hint:"Elision: le/la drop their vowel before another vowel."},

  {type:"fb",s:"Je voudrais ___ baguette, s'il vous plaît.",a:"une",opts:["une","un","la","le"],hint:"A baguette (indefinite). Feminine noun."},

  {type:"mc",q:"'J'aime le café' means 'I like coffee' in general. The le is needed because:",opts:["It is formal","French requires articles for general statements","Le is optional","Coffee is masculine"],ans:"French requires articles for general statements",hint:"French nouns always need a determiner, even in general."},

  {type:"match",pairs:[{nl:"le croissant",en:"the croissant (m)"},{nl:"la baguette",en:"the baguette (f)"},{nl:"le café",en:"the coffee (m)"},{nl:"la confiture",en:"the jam (f)"}]},

  {type:"mc",q:"The plural of 'le croissant' is:",opts:["La croissants","Les croissants","Des croissants","Le croissants"],ans:"Les croissants",hint:"Les = the (plural). Works for both genders."},

  {type:"fb",s:"___ thé ou du café?",a:"Du",opts:["Du","Le","Un","De"],hint:"Some tea: the partitive article for masculine nouns."},

  {type:"mc",q:"'Du beurre' means:",opts:["The butter","A butter","Some butter","No butter"],ans:"Some butter",hint:"Du = de + le = some (partitive, masculine)."},

  {type:"mc",q:"Which article pair is for indefinite (a/an)?",opts:["le/la","un/une","du/de la","les/des"],ans:"un/une",hint:"Un = a (masculine). Une = a (feminine)."},

  {type:"fb",s:"Je voudrais ___ café et un croissant.",a:"un",opts:["un","le","du","de"],hint:"Ordering one specific coffee at a café."},
]},

// ═══ L2: Les articles partitifs ═══
{id:"fre4l2",title:"Les articles partitifs",icon:"🧈",xp:15,board:true,steps:[
  {type:"intro",title:"Les articles partitifs",desc:"French has a special article type: the partitive. It means some or a portion of. English often skips it, but French requires it.",goals:["Understand du/de la/de l'/des","Know when to use partitive vs definite","Use partitive in food contexts"]},

  {type:"teach",kind:"word",nl:"du (= de + le)",en:"some (masculine)",phonetic:"DEW",example:"A: Tu veux du fromage?\nB: Oui, du fromage et du pain.\nA: Bon appétit!",exampleEn:"A: Do you want some cheese?\nB: Yes, some cheese and some bread.\nA: Enjoy!",note:"Du = de + le (contraction). Some (masculine).\nUsed for uncountable or partial quantities:\ndu pain (some bread), du lait (some milk)."},

  {type:"teach",kind:"word",nl:"de la",en:"some (feminine)",phonetic:"duh LAH",example:"A: Tu veux de la salade?\nB: Oui, de la salade et de la soupe.\nA: C'est sain!",exampleEn:"A: Do you want some salad?\nB: Yes, some salad and some soup.\nA: That's healthy!",note:"De la = some (feminine singular).\nDe la confiture (some jam), de la viande (some meat).\nBefore a vowel: de l' (de l'eau = some water)."},

  {type:"teach",kind:"word",nl:"de l'",en:"some (before vowels)",phonetic:"duh L",example:"A: Tu veux de l'eau?\nB: Oui, de l'eau s'il vous plaît.\nA: Plate ou gazeuse?",exampleEn:"A: Do you want some water?\nB: Yes, some water please.\nA: Still or sparkling?",note:"De l' = some (before vowels, any gender).\nDe l'eau (some water, feminine).\nDe l'orange jus (some orange juice, masculine).\nElision: de la/du cannot stand before vowels."},

  {type:"teach",kind:"word",nl:"des",en:"some (plural)",phonetic:"DAY",example:"A: Tu veux des fruits?\nB: Oui, des pommes et des bananes.\nA: C'est bon pour la santé!",exampleEn:"A: Do you want some fruit?\nB: Yes, some apples and some bananas.\nA: It's good for health!",note:"Des = some (plural, both genders).\nDes pommes (some apples), des croissants (some croissants).\nDes is also the indefinite plural article (a/some)."},

  {type:"tip",title:"When to Use Each Article Type",text:"Three article families, three purposes:\n\n1. DEFINITE (le/la/les): THE specific thing, or things in GENERAL\n   J'aime le chocolat. (I like chocolate in general.)\n\n2. INDEFINITE (un/une/des): A/AN, unspecified countable thing\n   Je voudrais un croissant. (I want a croissant, any one.)\n\n3. PARTITIVE (du/de la/de l'): SOME, a portion of uncountable\n   Je veux du café. (I want some coffee, not all of it.)\n\nKey test: can you count it?\nYes (1 croissant, 2 croissants) = un/une/des\nNo (you can't count bread/water/milk) = du/de la/de l'",deepDive:{title:"Partitive after negation",text:"After ne...pas, ALL partitive articles become de/d':\n\nJe veux du café. > Je ne veux pas de café.\nJ'ai de la confiture. > Je n'ai pas de confiture.\nIl y a des pommes. > Il n'y a pas de pommes.\n\nThis is a critical rule. In negative sentences, du/de la/des ALL become just de (or d' before vowels).\n\nYou will practice this in Unit 5 with negation."}},

  {type:"teach",kind:"word",nl:"le fromage",en:"the cheese",phonetic:"luh froh-MAHZH",example:"A: Tu aimes le fromage?\nB: J'adore le fromage! Surtout le camembert.\nA: Moi, je préfère le brie.",exampleEn:"A: Do you like cheese?\nB: I love cheese! Especially camembert.\nA: Me, I prefer brie.",note:"Le fromage = the cheese (masculine).\nDu fromage = some cheese (partitive).\nFrance has over 400 types of cheese!"},

  {type:"teach",kind:"word",nl:"le pain",en:"the bread",phonetic:"luh PAN",example:"A: Tu veux du pain?\nB: Oui, du pain avec du beurre.\nA: Voilà!",exampleEn:"A: Do you want some bread?\nB: Yes, some bread with butter.\nA: Here you go!",note:"Le pain = the bread (masculine). Nasal vowel: PAN.\nDu pain = some bread.\nFrench bread culture: fresh bread daily is the norm."},

  {type:"mc",q:"'Du fromage' uses du because:",opts:["Fromage is feminine","You want ALL the cheese","You want SOME cheese (partitive, masculine)","Du is always used with food"],ans:"You want SOME cheese (partitive, masculine)",hint:"Partitive for a portion. Du = de + le (masculine)."},

  {type:"mc",q:"'De la salade' uses de la because:",opts:["Salade is masculine","You want some (partitive, feminine)","De la is formal","Salade is plural"],ans:"You want some (partitive, feminine)",hint:"Partitive feminine: de la + feminine noun."},

  {type:"fb",s:"Tu veux ___ eau? (some water)",a:"de l'",opts:["de l'","du","de la","des"],hint:"Some water: eau starts with a vowel, so elision applies."},

  {type:"mc",q:"Can you count bread? If not, which article?",opts:["Un pain (indefinite)","Du pain (partitive)","Le pain (definite)","Des pains (plural)"],ans:"Du pain (partitive)",hint:"Bread is uncountable. Use the partitive: some bread."},

  {type:"match",pairs:[{nl:"du café",en:"some coffee (m)"},{nl:"de la confiture",en:"some jam (f)"},{nl:"de l'eau",en:"some water"},{nl:"des fruits",en:"some fruits"}]},

  {type:"mc",q:"'J'aime le chocolat' vs 'Je veux du chocolat'. The difference is:",opts:["No difference","Le = in general, du = some right now","Le is formal, du is casual","Le is singular, du is plural"],ans:"Le = in general, du = some right now",hint:"Definite = general category. Partitive = specific portion."},

  {type:"fb",s:"Je voudrais ___ croissants, s'il vous plaît. (some)",a:"des",opts:["des","les","du","de la"],hint:"Some croissants: plural partitive/indefinite."},

  {type:"mc",q:"Which article family is used for a PORTION of something uncountable?",opts:["Definite (le/la/les)","Indefinite (un/une/des)","Partitive (du/de la/de l')","No article needed"],ans:"Partitive (du/de la/de l')",hint:"The partitive exists specifically for uncountable portions."},

  {type:"fb",s:"J'adore ___ fromage français. (cheese in general)",a:"le",opts:["le","du","un","de"],hint:"General statement about cheese: definite article."},

  {type:"mc",q:"After 'ne...pas', partitive articles become:",opts:["Du/de la","Le/la","De/d'","Un/une"],ans:"De/d'",hint:"Negation strips the partitive down to just de."},
]},

// ═══ L3: Les repas ═══
{id:"fre4l3",title:"Les repas",icon:"🍽️",xp:15,board:true,steps:[
  {type:"intro",title:"Les repas",desc:"Learn the three meals of the day and more food vocabulary. French meal culture is structured: petit déjeuner, déjeuner, dîner.",goals:["Name the three meals","Learn 6 more food items","Use articles correctly with food"]},

  {type:"teach",kind:"phrase",nl:"le petit déjeuner",en:"breakfast",phonetic:"luh puh-TEE day-zhuh-NAY",example:"A: Tu prends quoi au petit déjeuner?\nB: Du café et un croissant.\nA: C'est classique!",exampleEn:"A: What do you have for breakfast?\nB: Coffee and a croissant.\nA: That's classic!",note:"Le petit déjeuner = breakfast. Literally: the little lunch.\nPetit = small. Déjeuner = lunch (see next card).\nFrench breakfast is light: bread, butter, jam, coffee."},

  {type:"teach",kind:"phrase",nl:"le déjeuner",en:"lunch",phonetic:"luh day-zhuh-NAY",example:"A: On déjeune ensemble?\nB: Oui! À quelle heure?\nA: À midi et demi.",exampleEn:"A: Shall we have lunch together?\nB: Yes! At what time?\nA: At half past noon.",note:"Le déjeuner = lunch (masculine).\nAlso a verb: déjeuner = to have lunch.\nFrench lunch is the main meal: entrée, plat, dessert."},

  {type:"teach",kind:"phrase",nl:"le dîner",en:"dinner",phonetic:"luh dee-NAY",example:"A: Qu'est-ce qu'on mange pour le dîner?\nB: De la soupe et du poulet.\nA: Parfait!",exampleEn:"A: What are we eating for dinner?\nB: Soup and chicken.\nA: Perfect!",note:"Le dîner = dinner (masculine).\nAlso a verb: dîner = to have dinner.\nFrench dinner is typically 7:30-8:30 PM. Later than English speakers expect."},

  {type:"teach",kind:"word",nl:"la viande",en:"the meat",phonetic:"lah vee-OND",example:"A: Tu manges de la viande?\nB: Oui, du poulet et du boeuf.\nA: Moi, je suis végétarien.",exampleEn:"A: Do you eat meat?\nB: Yes, chicken and beef.\nA: Me, I am vegetarian.",note:"La viande = the meat (feminine).\nDe la viande = some meat (partitive feminine).\nDu poulet = some chicken. Du boeuf = some beef."},

  {type:"teach",kind:"word",nl:"le poisson",en:"the fish",phonetic:"luh pwah-SON",example:"A: Tu préfères la viande ou le poisson?\nB: Le poisson! J'adore le saumon.\nA: Moi aussi.",exampleEn:"A: Do you prefer meat or fish?\nB: Fish! I love salmon.\nA: Me too.",note:"Le poisson = the fish (masculine).\nDu poisson = some fish (partitive).\nDo NOT confuse with poison (same spelling in English but different word in French)."},

  {type:"teach",kind:"word",nl:"les légumes",en:"the vegetables",phonetic:"lay lay-GEWM",example:"A: Tu manges des légumes?\nB: Oui, des carottes et des haricots verts.\nA: C'est bon pour la santé!",exampleEn:"A: Do you eat vegetables?\nB: Yes, carrots and green beans.\nA: It's good for health!",note:"Les légumes = the vegetables (masculine plural).\nDes légumes = some vegetables.\nCarotte, tomate, salade: most vegetable names are feminine."},

  {type:"tip",title:"French Meal Culture",text:"French meals follow a structure:\n\nPetit déjeuner (7-9 AM): Light. Coffee, bread, butter, jam, croissant.\nDéjeuner (12-2 PM): Main meal. Often entrée + plat + dessert.\nDîner (7:30-9 PM): Lighter than lunch. Soup, salad, simple dish.\n\nKey cultural notes:\n1. Lunch is sacred. Many French people take 1-2 hours.\n2. Snacking between meals is uncommon (goûter for children at 4 PM).\n3. Bread is always on the table. Always.\n4. Water is free at restaurants (une carafe d'eau).",deepDive:{title:"Entrée, plat, dessert",text:"A traditional French meal has courses:\n\nl'entrée = the starter (not the main course like in American English!)\nle plat (principal) = the main course\nle dessert = dessert\n\nSometimes also: le fromage (cheese course, before dessert).\n\nThe French apéritif (apéro) is a pre-meal drink with snacks. It is a social ritual, not just a drink."}},

  {type:"mc",q:"'Le petit déjeuner' literally means:",opts:["The morning meal","The little lunch","The first meal","The breakfast plate"],ans:"The little lunch",hint:"Petit = small. Déjeuner = the midday meal. Combined meaning?"},

  {type:"mc",q:"French lunch is typically:",opts:["Light, like breakfast","The main meal of the day","Skipped","Only snacks"],ans:"The main meal of the day",hint:"Déjeuner is the big meal. Dinner is lighter."},

  {type:"fb",s:"Tu manges de ___ viande? (some meat, feminine)",a:"la",opts:["la","le","l'","du"],hint:"Some meat: partitive feminine. De + la."},

  {type:"mc",q:"'Des légumes' means:",opts:["The vegetables","A vegetable","Some vegetables","No vegetables"],ans:"Some vegetables",hint:"Des = some (plural partitive/indefinite)."},

  {type:"match",pairs:[{nl:"le petit déjeuner",en:"breakfast"},{nl:"le déjeuner",en:"lunch"},{nl:"le dîner",en:"dinner"},{nl:"les légumes",en:"vegetables"}]},

  {type:"mc",q:"'J'aime le poisson.' This means:",opts:["I want some fish now","I like fish in general","I am eating fish","The fish is here"],ans:"I like fish in general",hint:"Le + noun in general statements = definite article."},

  {type:"fb",s:"Qu'est-ce qu'on mange pour le ___? De la soupe.",a:"dîner",opts:["dîner","déjeuner","petit déjeuner","goûter"],hint:"The evening meal, typically 7:30-9 PM."},

  {type:"mc",q:"In French restaurants, free water is called:",opts:["De l'eau plate","Une carafe d'eau","De l'eau gazeuse","Un verre d'eau"],ans:"Une carafe d'eau",hint:"A carafe of water: free tap water at any restaurant."},

  {type:"mc",q:"French 'entrée' means:",opts:["Main course (like American English)","Starter/appetizer","Dessert","Exit"],ans:"Starter/appetizer",hint:"False friend! French entrée = starter, not main course."},

  {type:"fb",s:"Tu manges ___ poisson? (some fish)",a:"du",opts:["du","le","un","de la"],hint:"Some fish: partitive for a masculine uncountable noun."},
]},

// ═══ L4: Les boissons ═══
{id:"fre4l4",title:"Les boissons",icon:"🥤",xp:15,board:true,steps:[
  {type:"intro",title:"Les boissons",desc:"Learn drink vocabulary and practice ordering. Drinks are a perfect context for partitive articles: you always want SOME of a drink, not ALL of it.",goals:["Name 6 common drinks","Order drinks at a café","Use partitive articles with drinks"]},

  {type:"teach",kind:"word",nl:"l'eau",en:"the water",phonetic:"LOH",example:"A: De l'eau, s'il vous plaît.\nB: Plate ou gazeuse?\nA: Plate, merci.",exampleEn:"A: Some water, please.\nB: Still or sparkling?\nA: Still, thank you.",note:"L'eau = the water (feminine: la eau = l'eau).\nDe l'eau = some water (partitive).\nEau plate = still water. Eau gazeuse = sparkling water."},

  {type:"teach",kind:"word",nl:"le jus d'orange",en:"the orange juice",phonetic:"luh ZHEW doh-RONZH",example:"A: Un jus d'orange, s'il vous plaît.\nB: Grand ou petit?\nA: Grand, merci!",exampleEn:"A: An orange juice, please.\nB: Large or small?\nA: Large, thanks!",note:"Le jus = the juice (masculine). D'orange = of orange.\nDu jus d'orange = some orange juice.\nJus de pomme = apple juice. Jus de raisin = grape juice."},

  {type:"teach",kind:"word",nl:"le lait",en:"the milk",phonetic:"luh LAY",example:"A: Tu veux du lait dans ton café?\nB: Oui, un peu de lait.\nA: Et du sucre?",exampleEn:"A: Do you want milk in your coffee?\nB: Yes, a little milk.\nA: And sugar?",note:"Le lait = the milk (masculine).\nDu lait = some milk (partitive).\nUn peu de lait = a little milk."},

  {type:"teach",kind:"word",nl:"le vin",en:"the wine",phonetic:"luh VAN",example:"A: Un verre de vin, s'il vous plaît.\nB: Rouge ou blanc?\nA: Rouge, merci.",exampleEn:"A: A glass of wine, please.\nB: Red or white?\nA: Red, thank you.",note:"Le vin = the wine (masculine). Nasal vowel: VAN.\nDu vin = some wine.\nVin rouge = red wine. Vin blanc = white wine."},

  {type:"teach",kind:"word",nl:"la bière",en:"the beer",phonetic:"lah bee-EHR",example:"A: Une bière, s'il vous plaît.\nB: Pression ou bouteille?\nA: Pression!",exampleEn:"A: A beer, please.\nB: Draft or bottle?\nA: Draft!",note:"La bière = the beer (feminine).\nUne bière = a beer (countable: one glass/bottle).\nDe la bière = some beer (partitive, uncountable)."},

  {type:"teach",kind:"phrase",nl:"Je voudrais un/une...",en:"I would like a...",phonetic:"zhuh voo-DRAY",example:"A: Bonjour! Vous désirez?\nB: Je voudrais un café et un croissant.\nA: Tout de suite!",exampleEn:"A: Hello! What would you like?\nB: I would like a coffee and a croissant.\nA: Right away!",note:"Je voudrais = I would like (polite ordering).\nUn/une for countable items: un café, une bière.\nDu/de la for portions: du vin, de la soupe."},

  {type:"tip",title:"Ordering Drinks: Countable vs Uncountable",text:"When ordering, choose the right article:\n\nCountable (a specific unit):\nUn café (a coffee = one cup)\nUne bière (a beer = one glass/bottle)\nUn jus d'orange (one orange juice)\n\nUncountable (some/a portion):\nDu vin (some wine)\nDe l'eau (some water)\nDu lait (some milk)\n\nAt a café, you usually order countable units:\nJe voudrais un café et une bière.\n\nAt home, you ask for portions:\nTu veux du café? Du lait?",deepDive:{title:"Un café vs du café",text:"Both are correct but mean different things:\n\nUn café = one coffee (at a café, ordering a cup)\nDu café = some coffee (at home, offering from the pot)\n\nThis distinction applies to all drinks:\nUne bière (ordering one) vs de la bière (offering from a bottle)\nUn jus (ordering one) vs du jus (pouring from a carton)\n\nContext tells you which to use. At restaurants: un/une. At home: du/de la."}},

  {type:"mc",q:"At a café, you order 'one coffee' with:",opts:["Du café","Le café","Un café","De café"],ans:"Un café",hint:"Ordering a specific unit at a café: indefinite article."},

  {type:"mc",q:"At home, you offer 'some coffee' with:",opts:["Un café","Le café","Du café","De café"],ans:"Du café",hint:"Offering a portion at home: partitive article."},

  {type:"fb",s:"Je voudrais ___ bière, s'il vous plaît.",a:"une",opts:["une","un","de la","la"],hint:"Ordering one beer at a café: feminine indefinite."},

  {type:"mc",q:"'L'eau' is feminine. Some water is:",opts:["Du eau","De l'eau","De la eau","D'eau"],ans:"De l'eau",hint:"Elision before vowels: de la becomes de l'."},

  {type:"match",pairs:[{nl:"le vin",en:"wine (m)"},{nl:"la bière",en:"beer (f)"},{nl:"l'eau",en:"water (f)"},{nl:"le lait",en:"milk (m)"}]},

  {type:"mc",q:"'Vin rouge' means:",opts:["White wine","Red wine","Rosé wine","Sweet wine"],ans:"Red wine",hint:"Rouge = the color of roses and fire."},

  {type:"fb",s:"___ vin ou de la bière? (some wine)",a:"Du",opts:["Du","De la","Le","Un"],hint:"Some wine: partitive masculine (de + le = du)."},

  {type:"mc",q:"'Eau plate' vs 'eau gazeuse' means:",opts:["Hot vs cold","Still vs sparkling","Tap vs bottled","Fresh vs old"],ans:"Still vs sparkling",hint:"Plate = flat/still. Gazeuse = carbonated/sparkling."},

  {type:"mc",q:"Why 'un jus d'orange' (not du jus d'orange) at a café?",opts:["Jus is masculine","You are ordering one specific drink","D'orange makes it countable","It sounds more polite"],ans:"You are ordering one specific drink",hint:"At cafés, you order countable units: one juice."},

  {type:"fb",s:"___ lait dans ton café? (some milk)",a:"Du",opts:["Du","Le","Un","De la"],hint:"Some milk: partitive for a masculine noun."},
]},

// ═══ L5: Les fruits et légumes ═══
{id:"fre4l5",title:"Les fruits et légumes",icon:"🍎",xp:15,board:true,steps:[
  {type:"intro",title:"Les fruits et légumes",desc:"Learn fruit and vegetable names. Notice: most fruit names are feminine (la pomme, la banane) while most vegetable names vary.",goals:["Name 6 fruits and vegetables","Practice gender with food nouns","Use des for plurals"]},

  {type:"teach",kind:"word",nl:"la pomme",en:"the apple",phonetic:"lah POM",example:"A: Tu veux une pomme?\nB: Oui, j'adore les pommes!\nA: Rouge ou verte?",exampleEn:"A: Do you want an apple?\nB: Yes, I love apples!\nA: Red or green?",note:"La pomme = the apple (feminine).\nUne pomme = an apple. Des pommes = some apples.\nPomme de terre = potato (literally: apple of earth)."},

  {type:"teach",kind:"word",nl:"la banane",en:"the banana",phonetic:"lah bah-NAHN",example:"A: Il y a des bananes?\nB: Oui, il y a trois bananes.\nA: J'en prends une.",exampleEn:"A: Are there bananas?\nB: Yes, there are three bananas.\nA: I'll take one.",note:"La banane = the banana (feminine).\nCognate with English banana.\nDes bananes = some bananas."},

  {type:"teach",kind:"word",nl:"la tomate",en:"the tomato",phonetic:"lah toh-MAHT",example:"A: Tu aimes les tomates?\nB: Oui, surtout en salade.\nA: Avec de la mozzarella!",exampleEn:"A: Do you like tomatoes?\nB: Yes, especially in salad.\nA: With mozzarella!",note:"La tomate = the tomato (feminine).\nCognate with English tomato.\nFrench fruits and vegetables ending in -e are usually feminine."},

  {type:"teach",kind:"word",nl:"la carotte",en:"the carrot",phonetic:"lah kah-ROT",example:"A: Des carottes dans la soupe?\nB: Oui, des carottes et des pommes de terre.\nA: Délicieux!",exampleEn:"A: Carrots in the soup?\nB: Yes, carrots and potatoes.\nA: Delicious!",note:"La carotte = the carrot (feminine).\nCognate with English carrot.\nDes carottes = some carrots."},

  {type:"teach",kind:"word",nl:"l'orange",en:"the orange",phonetic:"loh-RONZH",example:"A: Tu veux une orange?\nB: Non merci, je préfère du jus d'orange.\nA: D'accord!",exampleEn:"A: Do you want an orange?\nB: No thanks, I prefer orange juice.\nA: Okay!",note:"L'orange = the orange (feminine: la orange = l'orange).\nUne orange = an orange. Des oranges = some oranges.\nJus d'orange = orange juice (juice of orange)."},

  {type:"teach",kind:"phrase",nl:"Il y a...",en:"There is... / There are...",phonetic:"eel ee AH",example:"A: Qu'est-ce qu'il y a dans le frigo?\nB: Il y a du fromage, des tomates et du lait.\nA: Parfait pour une salade!",exampleEn:"A: What is in the fridge?\nB: There is cheese, tomatoes, and milk.\nA: Perfect for a salad!",note:"Il y a = there is / there are.\nWorks for both singular and plural.\nVery common in everyday French.\nQuestion: Qu'est-ce qu'il y a? (What is there?)"},

  {type:"tip",title:"Gender Patterns in Food Words",text:"Helpful tendencies (not absolute rules):\n\nMost fruits ending in -e are feminine:\nla pomme, la banane, la tomate, la fraise, l'orange\n\nExceptions: le concombre (cucumber), le pamplemousse (grapefruit)\n\nMeat and dairy tend to be masculine:\nle poulet, le boeuf, le fromage, le beurre, le lait\n\nDrinks are mostly masculine:\nle café, le thé, le vin, le jus\nException: la bière, l'eau\n\nAlways learn the article with the word!",deepDive:{title:"Why gender seems random",text:"French noun gender comes from Latin. Some follow patterns (words from Latin feminine = French feminine), but many changed over time or were borrowed from other languages.\n\nThe only reliable strategy: memorize the article with every noun. Say le fromage, never just fromage. Say la pomme, never just pomme.\n\nOver time, you will develop intuition. Words ending in -tion, -sion, -ée, -ie are almost always feminine. Words ending in -ment, -age, -eau are almost always masculine."}},

  {type:"mc",q:"'La pomme' is feminine. 'Une pomme' means:",opts:["The apple","An apple","Some apple","Apples"],ans:"An apple",hint:"Une = a/an (indefinite feminine singular)."},

  {type:"mc",q:"Most French fruit names ending in -e are:",opts:["Masculine","Feminine","Neutral","Plural"],ans:"Feminine",hint:"La pomme, la banane, la tomate, l'orange: notice the pattern."},

  {type:"fb",s:"Il y ___ des tomates dans le frigo.",a:"a",opts:["a","est","sont","ont"],hint:"There are: il y ___. The impersonal expression."},

  {type:"mc",q:"'Il y a' works for:",opts:["Only singular","Only plural","Both singular and plural","Only feminine"],ans:"Both singular and plural",hint:"Il y a un chat. Il y a des chats. Both correct."},

  {type:"match",pairs:[{nl:"la pomme",en:"apple (f)"},{nl:"la tomate",en:"tomato (f)"},{nl:"l'orange",en:"orange (f)"},{nl:"la carotte",en:"carrot (f)"}]},

  {type:"mc",q:"'Des bananes' uses des because:",opts:["Banane is masculine","It means THE bananas","It means SOME bananas (plural)","Des is always used"],ans:"It means SOME bananas (plural)",hint:"Des = some (plural indefinite/partitive)."},

  {type:"fb",s:"___ y a du fromage et des carottes.",a:"Il",opts:["Il","Elle","C'est","On"],hint:"There is/are: the impersonal subject."},

  {type:"mc",q:"'Pomme de terre' literally means:",opts:["Potato","Apple of earth","Ground fruit","Earthen apple"],ans:"Apple of earth",hint:"Pomme = apple. De = of. Terre = earth/ground."},

  {type:"mc",q:"Words ending in -tion are almost always:",opts:["Masculine","Feminine","Plural","Irregular"],ans:"Feminine",hint:"La nation, la situation, la confiture: notice the la pattern."},

  {type:"fb",s:"___ y a des tomates et des carottes dans le frigo.",a:"Il",opts:["Il","Elle","C'est","On"],hint:"There is/are: the impersonal subject pronoun."},
]},

// ═══ L6: Commander au restaurant ═══
{id:"fre4l6",title:"Commander au restaurant",icon:"🍽️",xp:15,board:true,steps:[
  {type:"intro",title:"Commander au restaurant",desc:"Put it all together: ordering a complete meal at a French restaurant. Use articles, food vocabulary, and polite expressions.",goals:["Order a complete meal in French","Handle waiter interactions","Use correct articles in ordering"]},

  {type:"teach",kind:"phrase",nl:"Qu'est-ce que vous désirez?",en:"What would you like? (waiter asking)",phonetic:"kes-kuh voo day-zee-RAY",example:"A: Bonjour! Qu'est-ce que vous désirez?\nB: Je voudrais le menu du jour, s'il vous plaît.\nA: Tout de suite!",exampleEn:"A: Hello! What would you like?\nB: I would like the daily special, please.\nA: Right away!",note:"Qu'est-ce que = what (question phrase).\nVous désirez = you desire/want (formal).\nCommon waiter greeting in restaurants."},

  {type:"teach",kind:"phrase",nl:"Comme entrée / Comme plat / Comme dessert",en:"For starter / For main / For dessert",phonetic:"kom on-TRAY / kom PLAH / kom deh-SEHR",example:"A: Qu'est-ce que vous prenez?\nB: Comme entrée, de la soupe. Comme plat, du poisson.\nA: Et comme dessert?\nB: Une tarte aux pommes.",exampleEn:"A: What will you have?\nB: For starter, soup. For main, fish.\nA: And for dessert?\nB: An apple tart.",note:"Comme = as/for (in this context).\nUse comme to structure your order by course.\nEntrée = starter. Plat = main course. Dessert = dessert."},

  {type:"teach",kind:"phrase",nl:"C'est délicieux!",en:"It's delicious!",phonetic:"say day-lee-SYUH",cognate:{words:[{lang:"English",word:"delicious"}],family:"romance"},example:"A: Comment est le poisson?\nB: C'est délicieux! Vraiment excellent.\nA: Tant mieux!",exampleEn:"A: How is the fish?\nB: It's delicious! Really excellent.\nA: Great!",note:"C'est + adjective for food reactions.\nC'est bon! (It's good!). C'est délicieux! (It's delicious!)\nC'est excellent! (It's excellent!). C'est parfait! (It's perfect!)"},

  {type:"teach",kind:"phrase",nl:"L'addition, s'il vous plaît",en:"The check, please",phonetic:"lah-dee-SYON seel voo PLAY",example:"A: L'addition, s'il vous plaît.\nB: Voilà. Ça fait vingt-cinq euros.\nA: Voici. Merci, au revoir!",exampleEn:"A: The check, please.\nB: Here you are. That's twenty-five euros.\nA: Here you go. Thank you, goodbye!",note:"Review from Unit 1 in a fuller context.\nCa fait + price = That comes to / That's.\nService is included (service compris) in France."},

  {type:"tip",title:"Restaurant Flow: The Complete Script",text:"A full French restaurant interaction:\n\n1. Enter: Bonjour!\n2. Waiter: Bonjour! Vous avez réservé?\n3. You: Oui / Non, une table pour deux.\n4. Waiter: Qu'est-ce que vous désirez?\n5. You: Comme entrée... Comme plat... Comme dessert...\n6. During meal: C'est délicieux!\n7. End: L'addition, s'il vous plaît.\n8. Waiter: Voilà. Ça fait X euros.\n9. You: Merci! Au revoir! Bonne soirée!\n10. Waiter: Bonne soirée!",deepDive:{title:"Tipping in France",text:"In France, service is included in the price by law (service compris). You are NOT expected to tip 15-20% like in the US.\n\nHowever, it is nice to leave small change (a few euros) for good service. This is called un pourboire.\n\nSaying merci when paying can signal you do not want change back. If you want change, say l'addition, s'il vous plaît and wait."}},

  {type:"mc",q:"The waiter asks 'Qu'est-ce que vous désirez?' You respond with:",opts:["Bonjour","Je voudrais...","Merci","L'addition"],ans:"Je voudrais...",hint:"The polite ordering formula: I would like."},

  {type:"mc",q:"To order by course, you use:",opts:["Comme entrée, comme plat, comme dessert","Un, deux, trois","S'il vous plaît for each","Menu numéro un"],ans:"Comme entrée, comme plat, comme dessert",hint:"Comme = for/as. Structure your order by course."},

  {type:"fb",s:"Comme ___, de la soupe à l'oignon.",a:"entrée",opts:["entrée","plat","dessert","boisson"],hint:"For starter: the first course of the meal."},

  {type:"mc",q:"'Ça fait vingt euros' means:",opts:["That makes twenty euros","Twenty euros is expensive","I have twenty euros","Twenty euros please"],ans:"That makes twenty euros",hint:"Ça fait + amount = that comes to / that's the total."},

  {type:"match",pairs:[{nl:"l'entrée",en:"the starter"},{nl:"le plat",en:"the main course"},{nl:"le dessert",en:"the dessert"},{nl:"l'addition",en:"the check/bill"}]},

  {type:"mc",q:"Tipping in France is:",opts:["Required at 20%","Included in the price (service compris)","Considered rude","Only for excellent service"],ans:"Included in the price (service compris)",hint:"Service is included by law. Extra tips are nice but optional."},

  {type:"fb",s:"C'est ___! Le poisson est excellent.",a:"délicieux",opts:["délicieux","mauvais","froid","cher"],hint:"Delicious! A positive food reaction."},

  {type:"mc",q:"'Entrée' in French means:",opts:["Main course","Starter/appetizer","Entrance fee","Side dish"],ans:"Starter/appetizer",hint:"False friend with American English. French entrée = starter."},

  {type:"mc",q:"After the meal, you say:",opts:["Bonjour!","Je voudrais commander","L'addition, s'il vous plaît","Comme entrée..."],ans:"L'addition, s'il vous plaît",hint:"The check please: the standard end-of-meal request."},

  {type:"fb",s:"Une table pour ___, s'il vous plaît. (two people)",a:"deux",opts:["deux","un","trois","quatre"],hint:"A table for two: the number of diners."},

  {type:"mc",q:"The correct order of a French meal is:",opts:["Plat, entrée, dessert","Entrée, plat, dessert","Dessert, plat, entrée","Entrée, dessert, plat"],ans:"Entrée, plat, dessert",hint:"Starter first, main course second, sweet at the end."},

  {type:"fb",s:"___ fait vingt euros. (That comes to)",a:"Ça",opts:["Ça","Il","C'est","Ce"],hint:"That makes / that comes to: the impersonal subject."},
]},

// ═══ L7: Aimer et détester ═══
{id:"fre4l7",title:"Aimer et détester",icon:"❤️",xp:15,board:true,steps:[
  {type:"intro",title:"Aimer et détester",desc:"Express food preferences. Learn to say what you like, love, prefer, and hate. These verbs take the DEFINITE article for general statements.",goals:["Use aimer, adorer, préférer, détester","Remember: preference verbs + le/la/les","Express food likes and dislikes"]},

  {type:"teach",kind:"word",nl:"aimer",en:"to like / to love",phonetic:"ay-MAY",example:"A: Tu aimes le fromage?\nB: Oui, j'aime le fromage!\nA: Quel fromage préfères-tu?",exampleEn:"A: Do you like cheese?\nB: Yes, I like cheese!\nA: What cheese do you prefer?",note:"Aimer = to like (things) / to love (people).\nJ'aime le café = I like coffee.\nJ'aime Marie = I love Marie.\nAlways + le/la/les for general preferences."},

  {type:"teach",kind:"word",nl:"adorer",en:"to love / to adore",phonetic:"ah-doh-RAY",example:"A: Tu aimes le chocolat?\nB: J'adore le chocolat! C'est ma passion.\nA: Moi aussi!",exampleEn:"A: Do you like chocolate?\nB: I LOVE chocolate! It's my passion.\nA: Me too!",note:"Adorer = to love/adore (stronger than aimer for things).\nJ'adore le chocolat = I LOVE chocolate.\nFor things: adorer > aimer in intensity.\nFor people: aimer is love, adorer is adore."},

  {type:"teach",kind:"word",nl:"préférer",en:"to prefer",phonetic:"pray-fay-RAY",example:"A: Café ou thé?\nB: Je préfère le thé.\nA: Avec du sucre?\nB: Non, nature.",exampleEn:"A: Coffee or tea?\nB: I prefer tea.\nA: With sugar?\nB: No, plain.",note:"Préférer = to prefer.\nJe préfère = I prefer. Note the accent change.\nJe préfère le thé au café = I prefer tea to coffee.\nAu = à + le (to the)."},

  {type:"teach",kind:"word",nl:"détester",en:"to hate / to detest",phonetic:"day-tess-TAY",example:"A: Tu aimes les épinards?\nB: Non, je déteste les épinards!\nA: Même en salade?\nB: Même en salade!",exampleEn:"A: Do you like spinach?\nB: No, I hate spinach!\nA: Even in salad?\nB: Even in salad!",note:"Détester = to hate (for things). Cognate with detest.\nJe déteste les épinards = I hate spinach.\nAlways + le/la/les for general dislikes."},

  {type:"tip",title:"Preference Verbs Always Use le/la/les",text:"When expressing general likes/dislikes, ALWAYS use the definite article:\n\nJ'aime LE fromage. (I like cheese.)\nJ'adore LA pizza. (I love pizza.)\nJe déteste LES épinards. (I hate spinach.)\nJe préfère LE thé. (I prefer tea.)\n\nNEVER: J'aime fromage. J'adore pizza.\nThe definite article is REQUIRED after preference verbs.\n\nThis is different from du/de la (partitive):\nJe veux du fromage. (I want some cheese. = right now)\nJ'aime le fromage. (I like cheese. = in general)",deepDive:{title:"The preference scale",text:"From most positive to most negative:\n\nadorer > aimer bien > aimer > ne pas détester > ne pas aimer > détester\n\nJ'adore = I love it\nJ'aime bien = I quite like it (milder than aimer)\nJ'aime = I like it\nJe n'aime pas = I don't like it\nJe déteste = I hate it\n\nNote: aimer bien is WEAKER than aimer. This is counterintuitive! Adding bien actually reduces the intensity."}},

  {type:"teach",kind:"phrase",nl:"Moi aussi / Moi non plus",en:"Me too / Me neither",phonetic:"mwah oh-SEE / mwah non PLEW",example:"A: J'adore le chocolat!\nB: Moi aussi!\nA: Je déteste les escargots.\nB: Moi non plus!",exampleEn:"A: I love chocolate!\nB: Me too!\nA: I hate snails.\nB: Me neither!",note:"Moi aussi = me too (after positive statement).\nMoi non plus = me neither (after negative statement).\nVery common in food conversations!"},

  {type:"mc",q:"'J'aime le fromage' needs 'le' because:",opts:["Fromage is masculine","Preference verbs require the definite article for general statements","Le sounds better","It is formal"],ans:"Preference verbs require the definite article for general statements",hint:"Aimer/adorer/détester + le/la/les for general preferences."},

  {type:"mc",q:"Which is STRONGER: aimer or adorer?",opts:["Aimer","Adorer","They are equal","Depends on context"],ans:"Adorer",hint:"One means to LOVE, the other to like. Which is more intense?"},

  {type:"fb",s:"Je ___ le chocolat! C'est ma passion.",a:"adore",opts:["adore","aime","déteste","préfère"],hint:"I LOVE chocolate. The strongest positive preference."},

  {type:"mc",q:"Someone says 'J'adore la pizza.' You agree. You say:",opts:["Moi non plus","Moi aussi","Moi non","De rien"],ans:"Moi aussi",hint:"Me too: agreement after a positive statement."},

  {type:"match",pairs:[{nl:"aimer",en:"to like"},{nl:"adorer",en:"to love/adore"},{nl:"préférer",en:"to prefer"},{nl:"détester",en:"to hate"}]},

  {type:"mc",q:"'Aimer bien' is surprisingly:",opts:["Stronger than aimer","Weaker than aimer","Equal to aimer","Only for people"],ans:"Weaker than aimer",hint:"Adding bien reduces the intensity. Counterintuitive!"},

  {type:"fb",s:"Je ___ les épinards. Je ne les mange jamais!",a:"déteste",opts:["déteste","aime","adore","préfère"],hint:"I hate spinach. The strongest negative preference."},

  {type:"mc",q:"Which is WRONG?",opts:["J'aime le café","J'aime café","J'adore la pizza","Je déteste les tomates"],ans:"J'aime café",hint:"Missing article! Preference verbs NEED le/la/les."},

  {type:"mc",q:"Someone says 'Je déteste le poisson.' You agree. You say:",opts:["Moi aussi","Moi non plus","Moi oui","De rien"],ans:"Moi non plus",hint:"Me neither: agreement after a negative statement."},

  {type:"fb",s:"Je ___ le thé au café. (I prefer tea to coffee.)",a:"préfère",opts:["préfère","aime","adore","veux"],hint:"I prefer: expressing a choice between two options."},

  {type:"mc",q:"Which verb pattern is WRONG?",opts:["J'aime le fromage","J'adore la pizza","Je déteste fromage","Je préfère le vin"],ans:"Je déteste fromage",hint:"One option is missing the required definite article."},
]},

// ═══ L8: Révision Unit 4 ═══
{id:"fre4l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 4 Review",desc:"Review all of Unit 4: food vocabulary, the three article types, partitive articles, ordering at restaurants, and expressing preferences.",goals:["Review all article types","Test food vocabulary","Combine ordering and preference expressions"]},

  {type:"mc",q:"The three French article families are:",opts:["Le/la, un/une, du/de la","Le/la, mon/ma, ce/cette","Un/une, le/la, il/elle","Du/de la, son/sa, au/à la"],ans:"Le/la, un/une, du/de la",hint:"Definite, indefinite, partitive: three systems."},

  {type:"fb",s:"Tu veux ___ pain? (some bread)",a:"du",opts:["du","le","un","de"],hint:"Some bread: partitive masculine (de + le)."},

  {type:"mc",q:"At a café, you order 'one coffee' with:",opts:["Du café","Un café","Le café","De café"],ans:"Un café",hint:"Ordering a specific unit: indefinite article."},

  {type:"match",pairs:[{nl:"le petit déjeuner",en:"breakfast"},{nl:"le déjeuner",en:"lunch"},{nl:"le dîner",en:"dinner"},{nl:"l'addition",en:"the check"}]},

  {type:"mc",q:"'J'adore le fromage' uses le because:",opts:["Fromage is uncountable","General preference: definite article required","Le is formal","Fromage is masculine"],ans:"General preference: definite article required",hint:"Preference verbs + le/la/les for general statements."},

  {type:"fb",s:"Comme ___, du poisson grillé.",a:"plat",opts:["plat","entrée","dessert","boisson"],hint:"For main course: the middle course of a meal."},

  {type:"mc",q:"'De la soupe' uses de la because:",opts:["Soupe is masculine","You want ALL the soup","Some soup (partitive feminine)","Soupe is plural"],ans:"Some soup (partitive feminine)",hint:"Partitive feminine: a portion of uncountable soup."},

  {type:"mc",q:"Most French fruit names ending in -e are:",opts:["Masculine","Feminine","Neutral","Irregular"],ans:"Feminine",hint:"La pomme, la banane, la tomate, l'orange."},

  {type:"fb",s:"Il y ___ des légumes dans le frigo.",a:"a",opts:["a","est","ont","sont"],hint:"There are: the impersonal il y ___ expression."},

  {type:"mc",q:"Someone says 'Je déteste les escargots.' You agree. You say:",opts:["Moi aussi","Moi non plus","Oui","Non"],ans:"Moi non plus",hint:"Me neither: agreeing with a negative statement."},

  {type:"match",pairs:[{nl:"du fromage",en:"some cheese"},{nl:"de la viande",en:"some meat"},{nl:"de l'eau",en:"some water"},{nl:"des fruits",en:"some fruits"}]},

  {type:"fb",s:"Je ___ le thé. C'est chaud et bon.",a:"aime",opts:["aime","veux","prends","bois"],hint:"I like tea: general preference verb."},

  {type:"mc",q:"After ne...pas, partitive articles become:",opts:["Le/la","Du/de la","De/d'","Un/une"],ans:"De/d'",hint:"Negation strips partitive to just de."},

  {type:"mc",q:"'Eau plate' means:",opts:["Sparkling water","Still water","Hot water","Cold water"],ans:"Still water",hint:"Plate = flat/still. No bubbles."},

  {type:"fb",s:"C'est ___! Le poulet est excellent.",a:"délicieux",opts:["délicieux","mauvais","froid","cher"],hint:"Delicious! A positive food reaction."},

  {type:"mc",q:"'Ça fait quinze euros' means:",opts:["Fifteen euros please","That comes to fifteen euros","I have fifteen euros","Fifteen is a lot"],ans:"That comes to fifteen euros",hint:"Ça fait + price = the total amount."},

  {type:"mc",q:"In France, tipping at restaurants is:",opts:["Required at 15%","Included in the price","Considered rude","For takeout only"],ans:"Included in the price",hint:"Service compris: service charge is built into prices."},

  {type:"mc",q:"'Aimer bien' is _____ than 'aimer':",opts:["Stronger","Weaker","The same","Only for food"],ans:"Weaker",hint:"Counterintuitive: adding bien reduces intensity."},
]},
]},

// ══════════════════════════════════════════════════════════════
// UNIT 5: LA ROUTINE QUOTIDIENNE - Daily Routine, Time & -er Verbs
// -er verb conjugation (full present), reflexive verbs, telling time
// P26: -er conjugation pattern formally named and drilled
// ══════════════════════════════════════════════════════════════
{n:5,lang:"fr",track:"v1",title:"La routine quotidienne",sub:"Daily Routine, Time & -er Verbs",icon:"⏰",level:"A1.2",color:"#7B5EE8",lessons:[

// ═══ L1: Les verbes en -er ═══
{id:"fre5l1",title:"Les verbes en -er",icon:"📝",xp:15,board:true,steps:[
  {type:"intro",title:"Les verbes en -er",desc:"About 90% of French verbs follow the -er pattern. Learn this ONE pattern and you unlock hundreds of verbs. Parler was the preview. Now master the full system.",goals:["Conjugate -er verbs in all 6 persons","Recognize the silent endings","Apply the pattern to new verbs"]},

  {type:"teach",kind:"word",nl:"parler",en:"to speak",phonetic:"par-LAY",example:"A: Tu parles français?\nB: Oui, je parle français et anglais.\nA: Nous parlons aussi espagnol!",exampleEn:"A: Do you speak French?\nB: Yes, I speak French and English.\nA: We also speak Spanish!",note:"The model -er verb. Remove -er, add endings:\nje parle, tu parles, il/elle parle\nnous parlons, vous parlez, ils/elles parlent\nNote: je, tu, il, ils forms all sound the SAME!"},

  {type:"tip",title:"The -er Verb Pattern: One Pattern, Hundreds of Verbs",text:"-er verb conjugation (present tense):\n\nje + stem + e (I)\ntu + stem + es (you, informal)\nil/elle/on + stem + e (he/she/one)\nnous + stem + ons (we)\nvous + stem + ez (you, formal/plural)\nils/elles + stem + ent (they)\n\nThe stem = verb minus -er: parler > parl-\n\nCRITICAL: je, tu, il, ils endings (-e, -es, -e, -ent) are ALL SILENT.\nOnly nous (-ons) and vous (-ez) have audible endings.\nSo parle, parles, parle, parlent all sound like PAHRL.",deepDive:{title:"Why are so many endings silent?",text:"Old French pronounced all these endings. Over centuries, final unstressed syllables eroded.\n\nLatin: parlo, parlas, parlat, parlant\nOld French: parle, parles, parle, parlent (all pronounced)\nModern French: parle, parles, parle, parlent (all sound the same: PAHRL)\n\nThis is why French spelling looks so different from pronunciation. The spelling preserves medieval forms that the spoken language has simplified.\n\nFor learners: you hear 4 forms (je/tu/il/ils = same, nous, vous, on). Writing has 6 forms."}},

  {type:"teach",kind:"word",nl:"habiter",en:"to live (somewhere)",phonetic:"ah-bee-TAY",example:"A: Où habites-tu?\nB: J'habite à Paris.\nA: Et tes parents?\nB: Ils habitent à Lyon.",exampleEn:"A: Where do you live?\nB: I live in Paris.\nA: And your parents?\nB: They live in Lyon.",note:"Habiter = to live (at a place). Regular -er verb.\nJ'habite (elision: je + habite).\nHabiter à + city: J'habite à Paris."},

  {type:"teach",kind:"word",nl:"travailler",en:"to work",phonetic:"trah-vah-YAY",example:"A: Tu travailles où?\nB: Je travaille dans un bureau.\nA: Et ta femme?\nB: Elle travaille à l'hôpital.",exampleEn:"A: Where do you work?\nB: I work in an office.\nA: And your wife?\nB: She works at the hospital.",note:"Travailler = to work. Regular -er verb.\nJe travaille, tu travailles, il travaille.\nThe -aille sounds like AH-yuh."},

  {type:"teach",kind:"word",nl:"manger",en:"to eat",phonetic:"mon-ZHAY",example:"A: Qu'est-ce que tu manges?\nB: Je mange une salade.\nA: Nous mangeons au restaurant ce soir.",exampleEn:"A: What are you eating?\nB: I am eating a salad.\nA: We are eating at the restaurant tonight.",note:"Manger = to eat. Almost regular -er verb.\nSmall exception: nous mangEONS (keep the E to preserve the ZH sound).\nJe mange, tu manges, nous mangeons."},

  {type:"teach",kind:"word",nl:"regarder",en:"to watch / to look at",phonetic:"ruh-gar-DAY",example:"A: Tu regardes quoi?\nB: Je regarde un film.\nA: C'est bien?\nB: Oui, c'est super!",exampleEn:"A: What are you watching?\nB: I am watching a movie.\nA: Is it good?\nB: Yes, it's great!",note:"Regarder = to watch/look at. Regular -er verb.\nJe regarde la télé = I watch TV.\nRegarder needs a direct object, no preposition."},

  {type:"mc",q:"In 'parler', the stem is:",opts:["par","parl","parle","parler"],ans:"parl",hint:"Remove -er from the infinitive to get the stem."},

  {type:"mc",q:"'Je parle' and 'ils parlent' sound:",opts:["Different","Identical","Similar","Ils is louder"],ans:"Identical",hint:"The -e and -ent endings are both silent."},

  {type:"fb",s:"Tu ___  à Paris? (to live)",a:"habites",opts:["habites","habite","habitez","habitent"],hint:"You live (informal): stem + es ending."},

  {type:"mc",q:"The ONLY two -er endings you can HEAR are:",opts:["-e and -es","-ons and -ez","-e and -ent","-ons and -ent"],ans:"-ons and -ez",hint:"Nous parlONS, vous parlEZ. The rest are silent."},

  {type:"match",pairs:[{nl:"je parle",en:"I speak"},{nl:"nous parlons",en:"we speak"},{nl:"vous parlez",en:"you speak (formal)"},{nl:"ils parlent",en:"they speak"}]},

  {type:"mc",q:"'Nous mangeons' keeps the E because:",opts:["It is formal","Without E, the G would sound like GUH","Manger is irregular","It is plural"],ans:"Without E, the G would sound like GUH",hint:"The E keeps the soft ZH sound before -ons."},

  {type:"fb",s:"Elle ___ dans un hôpital. (to work)",a:"travaille",opts:["travaille","travailles","travaillent","travailler"],hint:"She works: third person singular, stem + e."},

  {type:"mc",q:"How many DIFFERENT sounds does a regular -er verb have in present tense?",opts:["Six","Four","Three","Two"],ans:"Three",hint:"je/tu/il/ils = same, nous = different, vous = different."},

  {type:"fb",s:"Nous ___ la télé le soir. (to watch)",a:"regardons",opts:["regardons","regarde","regardez","regardent"],hint:"We watch: nous + stem + ons."},

  {type:"mc",q:"To conjugate any -er verb, you:",opts:["Add -er to the subject","Remove -er and add the person ending","Change the first letter","Add -ment"],ans:"Remove -er and add the person ending",hint:"Infinitive minus -er = stem. Stem + ending = conjugated."},

  {type:"fb",s:"Elles ___ la radio tous les matins. (to listen)",a:"écoutent",opts:["écoutent","écoute","écoutons","écoutez"],hint:"They (feminine) listen: third person plural -er ending."},
]},

// ═══ L2: L'heure ═══
{id:"fre5l2",title:"L'heure",icon:"🕐",xp:15,board:true,steps:[
  {type:"intro",title:"L'heure",desc:"Learn to tell time in French. France uses the 24-hour clock officially, but 12-hour is common in speech.",goals:["Ask and tell the time","Use 24-hour and 12-hour formats","Say half, quarter, and minutes"]},

  {type:"teach",kind:"phrase",nl:"Quelle heure est-il?",en:"What time is it?",phonetic:"kel UHR ay-TEEL",example:"A: Quelle heure est-il?\nB: Il est trois heures.\nA: Merci!",exampleEn:"A: What time is it?\nB: It is three o'clock.\nA: Thank you!",note:"The formal way to ask the time.\nIl est + number + heure(s) = It is ... o'clock.\nAlternative: Vous avez l'heure? (Do you have the time?)"},

  {type:"teach",kind:"phrase",nl:"Il est ... heure(s)",en:"It is ... o'clock",phonetic:"eel ay ... UHR",example:"A: Il est quelle heure?\nB: Il est huit heures.\nA: Déjà? Je suis en retard!",exampleEn:"A: What time is it?\nB: It is eight o'clock.\nA: Already? I am late!",note:"Il est une heure = It is one o'clock (singular: heure).\nIl est deux heures = It is two (plural: heures).\nIl est midi = It is noon. Il est minuit = It is midnight."},

  {type:"teach",kind:"phrase",nl:"... et demie / ... et quart / ... moins le quart",en:"... half past / ... quarter past / ... quarter to",phonetic:"ay duh-MEE / ay KAHR / mwan luh KAHR",example:"A: Il est quelle heure?\nB: Il est deux heures et demie.\nA: Et le cours commence à trois heures moins le quart?",exampleEn:"A: What time is it?\nB: It is half past two.\nA: And the class starts at quarter to three?",note:"Et demie = and half (2:30).\nEt quart = and quarter (2:15).\nMoins le quart = minus the quarter (2:45).\nFor minutes: Il est deux heures vingt (2:20)."},

  {type:"teach",kind:"phrase",nl:"à ... heure(s)",en:"at ... o'clock",phonetic:"ah ... UHR",example:"A: Tu te lèves à quelle heure?\nB: Je me lève à sept heures.\nA: C'est tôt!",exampleEn:"A: What time do you get up?\nB: I get up at seven.\nA: That's early!",note:"À = at (for time).\nÀ sept heures = at seven o'clock.\nÀ midi = at noon. À minuit = at midnight."},

  {type:"tip",title:"12-Hour vs 24-Hour",text:"Official French time is 24-hour (like military time):\n\n13h00 = 1 PM. 15h30 = 3:30 PM. 20h00 = 8 PM.\n\nIn conversation, 12-hour is common:\nIl est trois heures (could be 3 AM or 3 PM).\nContext or du matin/de l'après-midi/du soir clarifies.\n\nKey times:\nMidi = noon (12:00). Minuit = midnight (00:00).\nThese replace douze heures.",deepDive:{title:"Du matin, de l'après-midi, du soir",text:"To specify AM/PM in 12-hour format:\n\ndu matin = in the morning (AM)\nde l'après-midi = in the afternoon (PM)\ndu soir = in the evening (PM)\n\nIl est trois heures du matin = 3 AM.\nIl est trois heures de l'après-midi = 3 PM.\nIl est huit heures du soir = 8 PM.\n\nIn 24-hour format, these are unnecessary: 15h00 is already unambiguous."}},

  {type:"teach",kind:"word",nl:"tôt / tard",en:"early / late",phonetic:"TOH / TAHR",example:"A: Tu te couches tôt ou tard?\nB: Assez tard. Vers minuit.\nA: C'est tard!",exampleEn:"A: Do you go to bed early or late?\nB: Quite late. Around midnight.\nA: That's late!",note:"Tôt = early. Tard = late.\nC'est tôt! = That's early! C'est tard! = That's late!\nTrop tôt = too early. Trop tard = too late."},

  {type:"mc",q:"'Il est trois heures et demie' means:",opts:["3:15","3:30","3:45","3:00"],ans:"3:30",hint:"Et demie = and half. Half past three."},

  {type:"mc",q:"'Midi' means:",opts:["Midnight","Noon","Midday meal","Middle"],ans:"Noon",hint:"Midi = 12:00 PM. Minuit = 12:00 AM."},

  {type:"fb",s:"Il est deux heures ___ le quart. (quarter to)",a:"moins",opts:["moins","et","plus","avec"],hint:"Quarter TO: subtract from the next hour."},

  {type:"mc",q:"In 24-hour time, 15h30 is:",opts:["3:30 AM","3:30 PM","5:30 PM","1:30 PM"],ans:"3:30 PM",hint:"15 minus 12 = 3. So 3:30 in the afternoon."},

  {type:"match",pairs:[{nl:"et demie",en:"half past"},{nl:"et quart",en:"quarter past"},{nl:"moins le quart",en:"quarter to"},{nl:"midi",en:"noon"}]},

  {type:"mc",q:"'À sept heures' means:",opts:["At seven o'clock","Seven hours ago","For seven hours","Since seven"],ans:"At seven o'clock",hint:"À = at (for time). À sept heures = at 7:00."},

  {type:"fb",s:"Quelle ___ est-il? Il est neuf heures.",a:"heure",opts:["heure","heures","temps","fois"],hint:"What time is it? The singular form in the question."},

  {type:"mc",q:"'Il est une heure' uses singular 'heure' because:",opts:["It is informal","One is singular","Heure is always singular","It is morning"],ans:"One is singular",hint:"Une heure (1 o'clock) is singular. All others are plural."},

  {type:"fb",s:"Il est huit heures du ___. (8 AM)",a:"matin",opts:["matin","soir","midi","nuit"],hint:"Eight o'clock in the morning."},

  {type:"mc",q:"'Trop tard' means:",opts:["Very early","Too late","A little late","On time"],ans:"Too late",hint:"Trop = too much. Tard = late. Combined meaning?"},

  {type:"fb",s:"Il est ___ heures vingt. (5:20)",a:"cinq",opts:["cinq","six","sept","quatre"],hint:"The number five in French."},
]},

// ═══ L3: Les verbes réfléchis ═══
{id:"fre5l3",title:"Les verbes réfléchis",icon:"🪞",xp:15,board:true,steps:[
  {type:"intro",title:"Les verbes réfléchis",desc:"Reflexive verbs describe actions you do to YOURSELF: wash yourself, wake yourself up. French uses them much more than English.",goals:["Understand se + verb pattern","Use 4 daily routine reflexive verbs","Conjugate reflexive verbs correctly"]},

  {type:"teach",kind:"word",nl:"se lever",en:"to get up (to raise oneself)",phonetic:"suh luh-VAY",example:"A: Tu te lèves à quelle heure?\nB: Je me lève à sept heures.\nA: C'est tôt! Moi, je me lève à neuf heures.",exampleEn:"A: What time do you get up?\nB: I get up at seven.\nA: That's early! Me, I get up at nine.",note:"Se lever = to get up (reflexive).\nJe ME lève. Tu TE lèves. Il/Elle SE lève.\nThe reflexive pronoun (me/te/se) comes BEFORE the verb."},

  {type:"teach",kind:"word",nl:"se coucher",en:"to go to bed (to lay oneself down)",phonetic:"suh koo-SHAY",example:"A: Tu te couches à quelle heure?\nB: Je me couche à onze heures.\nA: Et les enfants?\nB: Ils se couchent à huit heures.",exampleEn:"A: What time do you go to bed?\nB: I go to bed at eleven.\nA: And the children?\nB: They go to bed at eight.",note:"Se coucher = to go to bed (reflexive).\nJe me couche. Tu te couches. Ils se couchent.\nSame pattern as se lever: me/te/se before verb."},

  {type:"teach",kind:"word",nl:"se réveiller",en:"to wake up",phonetic:"suh ray-vay-YAY",example:"A: Tu te réveilles facilement?\nB: Non, je me réveille difficilement.\nA: Moi, je me réveille avec une alarme.",exampleEn:"A: Do you wake up easily?\nB: No, I wake up with difficulty.\nA: Me, I wake up with an alarm.",note:"Se réveiller = to wake up (reflexive).\nJe me réveille. Tu te réveilles.\nThe verb part conjugates normally (-er pattern)."},

  {type:"teach",kind:"word",nl:"se laver",en:"to wash oneself",phonetic:"suh lah-VAY",example:"A: Tu te laves le matin ou le soir?\nB: Je me lave le matin.\nA: Avant ou après le petit déjeuner?",exampleEn:"A: Do you wash in the morning or evening?\nB: I wash in the morning.\nA: Before or after breakfast?",note:"Se laver = to wash (oneself) (reflexive).\nJe me lave. Tu te laves. Elle se lave.\nSe laver les mains = to wash one's hands."},

  {type:"tip",title:"How Reflexive Verbs Work",text:"Reflexive verbs have TWO parts:\n1. A reflexive pronoun (me, te, se, nous, vous, se)\n2. The verb (conjugated normally)\n\nje ME lève (I get up = I raise myself)\ntu TE lèves (you get up)\nil/elle SE lève (he/she gets up)\nnous NOUS levons (we get up)\nvous VOUS levez (you get up)\nils/elles SE lèvent (they get up)\n\nThe pronoun matches the subject and goes BEFORE the verb.\nThe verb part follows normal -er conjugation.",deepDive:{title:"Why so many reflexive verbs in French?",text:"French uses reflexive verbs for many actions that English expresses differently:\n\nse lever = to get up (raise yourself)\nse coucher = to go to bed (lay yourself down)\nse laver = to wash (wash yourself)\nse réveiller = to wake up (wake yourself)\nse brosser les dents = to brush your teeth (brush yourself the teeth)\nse maquiller = to put on makeup (make yourself up)\ns'habiller = to get dressed (dress yourself)\n\nIn English, the yourself is usually implied. In French, it is explicit. This reflects a grammatical tradition from Latin where the reflexive was standard for self-directed actions."}},

  {type:"teach",kind:"phrase",nl:"le matin / le soir",en:"in the morning / in the evening",phonetic:"luh mah-TAN / luh SWAHR",example:"A: Tu te laves le matin ou le soir?\nB: Le matin. Et je me brosse les dents le matin et le soir.\nA: Bonne hygiène!",exampleEn:"A: Do you wash in the morning or the evening?\nB: In the morning. And I brush my teeth morning and evening.\nA: Good hygiene!",note:"Le matin = in the morning. Le soir = in the evening.\nFrench uses le + time of day (no preposition: NOT dans le matin).\nL'après-midi = in the afternoon."},

  {type:"mc",q:"In 'je me lève', the 'me' is:",opts:["An article","A reflexive pronoun (myself)","A possessive","A preposition"],ans:"A reflexive pronoun (myself)",hint:"Me = myself. The action reflects back to the subject."},

  {type:"mc",q:"Reflexive pronouns go:",opts:["After the verb","Before the verb","After the subject","At the end"],ans:"Before the verb",hint:"Je ME lève. Tu TE couches. The pronoun is between subject and verb."},

  {type:"fb",s:"Tu ___ lèves à quelle heure?",a:"te",opts:["te","me","se","nous"],hint:"You (informal) get up: which reflexive pronoun?"},

  {type:"mc",q:"'Ils se couchent' means:",opts:["They wake up","They go to bed","They wash","They eat"],ans:"They go to bed",hint:"Se coucher = the reflexive for ending the day. What does it mean?"},

  {type:"match",pairs:[{nl:"se lever",en:"to get up"},{nl:"se coucher",en:"to go to bed"},{nl:"se réveiller",en:"to wake up"},{nl:"se laver",en:"to wash oneself"}]},

  {type:"mc",q:"The verb part of a reflexive -er verb conjugates:",opts:["Differently from regular -er verbs","Normally, following the -er pattern","With special reflexive endings","Without any endings"],ans:"Normally, following the -er pattern",hint:"The verb conjugates normally. Only the pronoun is added."},

  {type:"fb",s:"Elle ___ lave les mains avant de manger.",a:"se",opts:["se","me","te","nous"],hint:"She washes: third person reflexive pronoun."},

  {type:"mc",q:"'Le matin' means 'in the morning' without any preposition because:",opts:["It is informal","French uses le + time of day","Matin is special","Le replaces dans"],ans:"French uses le + time of day",hint:"Le matin, le soir, l'après-midi: definite article for time periods."},

  {type:"fb",s:"Je me ___ à six heures et demie. (to wake up)",a:"réveille",opts:["réveille","lève","couche","lave"],hint:"I wake up: the reflexive verb for coming out of sleep."},

  {type:"mc",q:"The nous form of 'se lever' is:",opts:["Nous nous levons","Nous se levons","Nous levons nous","On se lève"],ans:"Nous nous levons",hint:"Nous + NOUS (reflexive pronoun) + levons."},

  {type:"fb",s:"Tu ___ habilles vite le matin. (yourself)",a:"t'",opts:["t'","se","me","nous"],hint:"Second person reflexive before a vowel: elided form."},
]},

// ═══ L4: Ma journée ═══
{id:"fre5l4",title:"Ma journée",icon:"🌅",xp:15,board:true,steps:[
  {type:"intro",title:"Ma journée",desc:"Describe a typical day from morning to night. Combine time, reflexive verbs, and -er verbs into a flowing daily narrative.",goals:["Describe a full daily routine","Use time expressions naturally","Sequence actions with puis, ensuite, après"]},

  {type:"teach",kind:"phrase",nl:"D'abord... puis... ensuite... enfin",en:"First... then... next... finally",phonetic:"dah-BOR... PWEE... on-SWEET... on-FAN",example:"A: Qu'est-ce que tu fais le matin?\nB: D'abord, je me réveille. Puis, je me lève. Ensuite, je me lave.\nA: Et après?\nB: Enfin, je prends le petit déjeuner.",exampleEn:"A: What do you do in the morning?\nB: First, I wake up. Then, I get up. Next, I wash.\nA: And after?\nB: Finally, I have breakfast.",note:"Sequence words for describing routines:\nD'abord = first. Puis = then. Ensuite = next. Enfin = finally.\nAprès = after. Avant = before."},

  {type:"teach",kind:"word",nl:"prendre",en:"to take / to have (food/drink)",phonetic:"PRONDR",example:"A: Tu prends quoi au petit déjeuner?\nB: Je prends un café et un croissant.\nA: Moi, je prends du thé.",exampleEn:"A: What do you have for breakfast?\nB: I have a coffee and a croissant.\nA: Me, I have tea.",note:"Prendre = to take/have (irregular verb!).\nJe prends, tu prends, il prend (no S!)\nNous prenons, vous prenez, ils prennent.\nUsed for meals: prendre le petit déjeuner = to have breakfast."},

  {type:"teach",kind:"word",nl:"aller",en:"to go",phonetic:"ah-LAY",example:"A: Tu vas au travail à quelle heure?\nB: Je vais au travail à huit heures.\nA: Tu y vas comment?\nB: J'y vais en métro.",exampleEn:"A: What time do you go to work?\nB: I go to work at eight.\nA: How do you get there?\nB: I go by metro.",note:"Aller = to go (highly irregular!).\nJe vais, tu vas, il va\nNous allons, vous allez, ils vont.\nAller + à = go to: je vais au travail."},

  {type:"teach",kind:"phrase",nl:"faire (du sport / la cuisine)",en:"to do (sport / cooking)",phonetic:"FEHR",example:"A: Tu fais du sport?\nB: Oui, je fais du sport le soir.\nA: Et tu fais la cuisine aussi?\nB: Oui, j'adore faire la cuisine!",exampleEn:"A: Do you do sport?\nB: Yes, I do sport in the evening.\nA: And you cook too?\nB: Yes, I love cooking!",note:"Faire = to do/make (irregular).\nJe fais, tu fais, il fait\nNous faisons, vous faites, ils font.\nFaire du sport = to exercise. Faire la cuisine = to cook."},

  {type:"tip",title:"A Model Daily Routine",text:"A typical French daily routine:\n\nLe matin:\nJe me réveille à sept heures.\nJe me lève et je me lave.\nJe prends le petit déjeuner.\nJe vais au travail à huit heures.\n\nL'après-midi:\nJe déjeune à midi.\nJe travaille jusqu'à cinq heures.\n\nLe soir:\nJe rentre à la maison à six heures.\nJe fais la cuisine.\nJe dîne à sept heures et demie.\nJe regarde la télé.\nJe me couche à onze heures.",deepDive:{title:"Irregular verbs in daily routine",text:"Daily routine uses several irregular verbs:\n\nPrendre (to take/have): je prends, tu prends, il prend\nAller (to go): je vais, tu vas, il va\nFaire (to do/make): je fais, tu fais, il fait\n\nThese three irregulars are among the most common French verbs. Memorize their present tense forms. They appear in almost every conversation about daily life.\n\nRegular -er verbs in routine: travailler, déjeuner, dîner, regarder, rentrer (to come home)."}},

  {type:"teach",kind:"word",nl:"rentrer",en:"to come home / to return",phonetic:"ron-TRAY",example:"A: Tu rentres à quelle heure?\nB: Je rentre à six heures.\nA: C'est tôt!",exampleEn:"A: What time do you come home?\nB: I come home at six.\nA: That's early!",note:"Rentrer = to come home / to go back. Regular -er verb.\nJe rentre à la maison = I come home.\nIl rentre du travail = He comes back from work."},

  {type:"mc",q:"The correct sequence is:",opts:["Ensuite, d'abord, puis, enfin","D'abord, puis, ensuite, enfin","Enfin, d'abord, ensuite, puis","Puis, enfin, d'abord, ensuite"],ans:"D'abord, puis, ensuite, enfin",hint:"First, then, next, finally: the logical order."},

  {type:"mc",q:"'Je prends le petit déjeuner' uses prendre because:",opts:["Prendre means to eat","French uses prendre (to take/have) for meals","Prendre means to cook","It is informal"],ans:"French uses prendre (to take/have) for meals",hint:"Prendre le petit déjeuner = to have breakfast."},

  {type:"fb",s:"Je ___ au travail à huit heures. (to go)",a:"vais",opts:["vais","vas","va","aller"],hint:"I go: first person singular of aller."},

  {type:"mc",q:"'Faire du sport' means:",opts:["To watch sport","To do sport / to exercise","To like sport","To play a sport"],ans:"To do sport / to exercise",hint:"Faire = to do. Du sport = some sport."},

  {type:"match",pairs:[{nl:"se réveiller",en:"to wake up"},{nl:"prendre le petit déjeuner",en:"to have breakfast"},{nl:"aller au travail",en:"to go to work"},{nl:"rentrer à la maison",en:"to come home"}]},

  {type:"mc",q:"Which verbs are IRREGULAR?",opts:["Habiter, travailler, regarder","Prendre, aller, faire","Se lever, se coucher, se laver","Parler, manger, rentrer"],ans:"Prendre, aller, faire",hint:"These three do not follow the -er pattern."},

  {type:"fb",s:"Elle ___ la cuisine tous les soirs. (to do/make)",a:"fait",opts:["fait","fais","faire","font"],hint:"She does/makes: third person singular of faire."},

  {type:"mc",q:"'Je rentre à la maison' means:",opts:["I leave the house","I come home","I clean the house","I build a house"],ans:"I come home",hint:"Rentrer = to come back/home. Regular -er verb."},

  {type:"fb",s:"D'abord je me lève, ___ je me lave.",a:"puis",opts:["puis","enfin","d'abord","avant"],hint:"First I get up, THEN I wash. Second in the sequence."},

  {type:"mc",q:"In 'nous prenons', the conjugation is irregular because:",opts:["Prendre does not follow the -er pattern","Nous is special","Prenons sounds better","It is a reflexive verb"],ans:"Prendre does not follow the -er pattern",hint:"Prendre is an -re verb with its own irregular forms."},

  {type:"fb",s:"Le soir, elle ___ couche à vingt-deux heures.",a:"se",opts:["se","me","te","nous"],hint:"She goes to bed: third person reflexive pronoun."},
]},

// ═══ L5: Les jours de la semaine ═══
{id:"fre5l5",title:"Les jours de la semaine",icon:"📅",xp:15,board:true,steps:[
  {type:"intro",title:"Les jours de la semaine",desc:"Learn the days of the week. In France, the week starts on Monday (lundi), not Sunday. Days are never capitalized.",goals:["Name all 7 days","Know that days are lowercase and masculine","Use le + day for habitual actions"]},

  {type:"teach",kind:"word",nl:"lundi, mardi, mercredi",en:"Monday, Tuesday, Wednesday",phonetic:"lun-DEE, mar-DEE, mehr-kruh-DEE",example:"A: Tu travailles lundi?\nB: Oui, je travaille lundi et mardi.\nA: Et mercredi?\nB: Mercredi, je suis libre!",exampleEn:"A: Do you work Monday?\nB: Yes, I work Monday and Tuesday.\nA: And Wednesday?\nB: Wednesday, I am free!",note:"Lundi, mardi, mercredi = Mon, Tue, Wed.\nAlways lowercase in French (not capitalized).\nAll masculine: le lundi = on Mondays (habitual)."},

  {type:"teach",kind:"word",nl:"jeudi, vendredi",en:"Thursday, Friday",phonetic:"zhuh-DEE, von-druh-DEE",example:"A: Le cours est jeudi ou vendredi?\nB: Jeudi. Et vendredi, on fait la fête!\nA: Super!",exampleEn:"A: Is the class Thursday or Friday?\nB: Thursday. And Friday, we party!\nA: Great!",note:"Jeudi = Thursday. Vendredi = Friday.\nJeudi comes from Jupiter (Jovis dies).\nVendredi from Venus (Veneris dies)."},

  {type:"teach",kind:"word",nl:"samedi, dimanche",en:"Saturday, Sunday",phonetic:"sam-DEE, dee-MONSH",example:"A: Qu'est-ce que tu fais le week-end?\nB: Samedi, je fais du sport. Dimanche, je me repose.\nA: Bon week-end!",exampleEn:"A: What do you do on the weekend?\nB: Saturday, I exercise. Sunday, I rest.\nA: Have a good weekend!",note:"Samedi = Saturday. Dimanche = Sunday.\nLe week-end = the weekend (borrowed from English).\nFrench week starts Monday, ends Sunday."},

  {type:"tip",title:"Le lundi vs Lundi",text:"Critical difference:\n\nLundi = this Monday / on Monday (specific, once)\nLe lundi = on Mondays (every Monday, habitual)\n\nJe travaille lundi. = I work this Monday.\nJe travaille le lundi. = I work on Mondays (every week).\n\nThe definite article le makes it habitual.\nThis pattern works for all time expressions:\nLe matin = every morning. Le soir = every evening.",deepDive:{title:"Origins of French day names",text:"French days come from Latin/Roman gods and planets:\n\nLundi = Moon day (Latin: Lunae dies, English: Monday)\nMardi = Mars day (Latin: Martis dies, English: Tuesday)\nMercredi = Mercury day (Latin: Mercurii dies)\nJeudi = Jupiter day (Latin: Jovis dies, English: Thursday from Thor)\nVendredi = Venus day (Latin: Veneris dies, English: Friday from Freya)\nSamedi = Saturn day (Latin: Saturni dies, English: Saturday)\nDimanche = Lord's day (Latin: Dominica dies, English: Sunday)\n\nNotice: English replaced most Roman gods with Norse equivalents, but French kept the Latin."}},

  {type:"teach",kind:"phrase",nl:"le week-end",en:"the weekend",phonetic:"luh week-END",example:"A: Tu fais quoi le week-end?\nB: Le week-end, je me repose.\nA: Moi, je fais du sport le samedi.",exampleEn:"A: What do you do on weekends?\nB: On weekends, I rest.\nA: Me, I exercise on Saturdays.",note:"Le week-end = the weekend (English loanword!).\nBon week-end! = Have a good weekend!\nLe week-end = habitual. Ce week-end = this weekend."},

  {type:"mc",q:"French days of the week are:",opts:["Always capitalized","Never capitalized","Capitalized at sentence start only","Capitalized on calendars"],ans:"Never capitalized",hint:"Lundi, mardi, mercredi: always lowercase."},

  {type:"mc",q:"'Le lundi' vs 'lundi' means:",opts:["Formal vs casual","Every Monday vs this Monday","Past vs present","Morning vs evening"],ans:"Every Monday vs this Monday",hint:"Le + day = habitual. Day alone = specific occasion."},

  {type:"fb",s:"Je travaille ___ et mardi. (this Monday)",a:"lundi",opts:["lundi","le lundi","un lundi","au lundi"],hint:"This specific Monday, not every Monday."},

  {type:"mc",q:"In France, the week starts on:",opts:["Sunday","Monday","Saturday","It varies"],ans:"Monday",hint:"French week: lundi to dimanche (Mon to Sun)."},

  {type:"match",pairs:[{nl:"lundi",en:"Monday"},{nl:"mercredi",en:"Wednesday"},{nl:"vendredi",en:"Friday"},{nl:"dimanche",en:"Sunday"}]},

  {type:"mc",q:"'Mardi' comes from the planet/god:",opts:["Moon","Mars","Mercury","Jupiter"],ans:"Mars",hint:"Mardi comes from the Latin Martis dies. Which Roman god?"},

  {type:"fb",s:"___ samedi, je fais du sport. (every Saturday)",a:"Le",opts:["Le","Ce","Un","En"],hint:"Habitual: LE + day = every Saturday."},

  {type:"mc",q:"'Le week-end' is an English word borrowed into French:",opts:["True","False","Only in Canada","Only in informal speech"],ans:"True",hint:"French borrowed week-end directly from English."},

  {type:"mc",q:"'Bon week-end!' is said:",opts:["Monday morning","Friday/Saturday when parting","Sunday night","Any day"],ans:"Friday/Saturday when parting",hint:"Wishing someone a good weekend as you part."},

  {type:"fb",s:"Qu'est-ce que tu fais ___ dimanche? (this Sunday)",a:"ce",opts:["ce","le","un","du"],hint:"This specific Sunday: demonstrative + day."},

  {type:"mc",q:"All French day names are:",opts:["Feminine","Masculine","Neutral","Mixed"],ans:"Masculine",hint:"Le lundi, le mardi: notice the article that precedes them."},

  {type:"fb",s:"Le ___ est le premier jour de la semaine en France.",a:"lundi",opts:["lundi","dimanche","samedi","mardi"],hint:"In France, the week starts on this day, not Sunday."},
]},

// ═══ L6: La négation ═══
{id:"fre5l6",title:"La négation",icon:"🚫",xp:15,board:true,steps:[
  {type:"intro",title:"La négation: ne...pas",desc:"French negation wraps around the verb: ne BEFORE, pas AFTER. This sandwich pattern is essential and affects articles too.",goals:["Use ne...pas for negation","Handle elision (n'...pas before vowels)","Know partitive becomes de after negation"]},

  {type:"teach",kind:"phrase",nl:"ne ... pas",en:"not",phonetic:"nuh ... PAH",example:"A: Tu parles chinois?\nB: Non, je ne parle pas chinois.\nA: Et japonais?\nB: Non, je ne parle pas japonais non plus.",exampleEn:"A: Do you speak Chinese?\nB: No, I do not speak Chinese.\nA: And Japanese?\nB: No, I do not speak Japanese either.",note:"Ne ... pas = not. Wraps around the verb:\nJe ne parle pas. Tu ne manges pas. Il ne travaille pas.\nNe goes BEFORE the verb. Pas goes AFTER."},

  {type:"teach",kind:"phrase",nl:"n' ... pas (before vowels)",en:"not (before vowels)",phonetic:"n ... PAH",example:"A: Tu n'aimes pas le fromage?\nB: Non, je n'aime pas le fromage.\nA: C'est dommage!",exampleEn:"A: You don't like cheese?\nB: No, I don't like cheese.\nA: That's a shame!",note:"Before vowel sounds, ne becomes n':\nJe n'aime pas. Il n'habite pas. Elle n'est pas.\nElision: ne + aime = n'aime."},

  {type:"teach",kind:"phrase",nl:"ne ... pas de",en:"not any (negation + partitive)",phonetic:"nuh ... PAH duh",example:"A: Tu as du lait?\nB: Non, je n'ai pas de lait.\nA: Et du pain?\nB: Non, je n'ai pas de pain non plus.",exampleEn:"A: Do you have milk?\nB: No, I don't have any milk.\nA: And bread?\nB: No, I don't have any bread either.",note:"After ne...pas, partitive articles become DE:\nJ'ai du lait > Je n'ai pas DE lait.\nJ'ai de la soupe > Je n'ai pas DE soupe.\nIl y a des pommes > Il n'y a pas DE pommes."},

  {type:"tip",title:"The Negation Sandwich",text:"French negation always has two parts:\n\nSubject + NE + verb + PAS + rest\nJe NE parle PAS français.\nTu NE manges PAS de viande.\nIl N'habite PAS à Paris.\n\nBefore vowels, ne becomes n':\nJe N'aime PAS. Elle N'est PAS.\n\nCRITICAL: In spoken French, ne is often dropped!\nJe parle pas. (spoken)\nJe ne parle pas. (written/formal)\n\nAlways write ne. In speech, you will hear it dropped.",deepDive:{title:"Other negation words",text:"Ne...pas is the basic negation. French has others:\n\nne...plus = no longer (Je ne travaille plus = I no longer work)\nne...jamais = never (Je ne mange jamais de viande = I never eat meat)\nne...rien = nothing (Je ne vois rien = I see nothing)\nne...personne = nobody (Je ne connais personne = I know nobody)\n\nThey all follow the same sandwich pattern: ne + verb + negation word.\nYou will learn these in A2."}},

  {type:"teach",kind:"phrase",nl:"Ce n'est pas...",en:"It is not...",phonetic:"suh nay PAH",example:"A: C'est du café?\nB: Non, ce n'est pas du café. C'est du thé.\nA: Ah, pardon!",exampleEn:"A: Is that coffee?\nB: No, it is not coffee. It's tea.\nA: Ah, sorry!",note:"Ce n'est pas = It is not.\nC'est + affirmative = C'est bon. (It's good.)\nCe n'est pas + negative = Ce n'est pas bon. (It's not good.)"},

  {type:"mc",q:"'Je ne parle pas français' has negation:",opts:["Only before the verb","Only after the verb","Wrapped around the verb (ne...pas)","At the end"],ans:"Wrapped around the verb (ne...pas)",hint:"The sandwich: ne before, pas after the verb."},

  {type:"mc",q:"Before vowels, 'ne' becomes:",opts:["Non","Pas","N'","Nul"],ans:"N'",hint:"Elision: ne + vowel = n'. Je n'aime pas."},

  {type:"fb",s:"Je ___ mange pas de viande.",a:"ne",opts:["ne","n'","pas","non"],hint:"The first half of the negation sandwich, before the verb."},

  {type:"mc",q:"'J'ai du lait' in negative becomes:",opts:["Je n'ai pas du lait","Je n'ai pas de lait","Je n'ai pas le lait","Je n'ai du lait pas"],ans:"Je n'ai pas de lait",hint:"Partitive becomes de/d' after ne...pas."},

  {type:"match",pairs:[{nl:"Je parle",en:"I speak"},{nl:"Je ne parle pas",en:"I do not speak"},{nl:"J'aime",en:"I like"},{nl:"Je n'aime pas",en:"I do not like"}]},

  {type:"mc",q:"In spoken French, 'ne' is often:",opts:["Emphasized","Dropped","Doubled","Replaced by pas"],ans:"Dropped",hint:"Spoken: je parle pas. Written: je ne parle pas."},

  {type:"fb",s:"Il n'y a pas ___ pain. (no bread)",a:"de",opts:["de","du","le","un"],hint:"After ne...pas, partitive becomes just de."},

  {type:"mc",q:"'Ce n'est pas bon' means:",opts:["It is very good","It is not good","It is not bad","It is okay"],ans:"It is not good",hint:"Ce n'est pas = it is not. Bon = good."},

  {type:"fb",s:"Elle ___ habite pas à Paris.",a:"n'",opts:["n'","ne","ni","non"],hint:"Before a vowel (habite), ne becomes n'."},

  {type:"mc",q:"Which negative sentence is correct?",opts:["Je pas parle","Je ne pas parle","Je ne parle pas","Pas je ne parle"],ans:"Je ne parle pas",hint:"Subject + ne + verb + pas. Always this order."},

  {type:"mc",q:"'Il n'y a pas de pommes' means:",opts:["There are some apples","There are no apples","There are the apples","Apples are not here"],ans:"There are no apples",hint:"Il n'y a pas de = there are no / there aren't any."},

  {type:"fb",s:"Elle ___ aime pas le café.",a:"n'",opts:["n'","ne","ni","pas"],hint:"Before a vowel, ne becomes the elided form."},
]},

// ═══ L7: Ma semaine typique ═══
{id:"fre5l7",title:"Ma semaine typique",icon:"📋",xp:15,board:true,steps:[
  {type:"intro",title:"Ma semaine typique",desc:"Describe your typical week combining everything: days, times, routine verbs, negation. This is where all Unit 5 skills connect.",goals:["Describe a typical week day by day","Use time expressions fluently","Combine positive and negative statements"]},

  {type:"teach",kind:"phrase",nl:"tous les jours",en:"every day",phonetic:"too lay ZHOOR",example:"A: Tu fais du sport?\nB: Oui, je fais du sport tous les jours.\nA: Impressionnant!",exampleEn:"A: Do you exercise?\nB: Yes, I exercise every day.\nA: Impressive!",note:"Tous les jours = every day (literally: all the days).\nTous = all. Les jours = the days.\nTous les matins = every morning. Tous les soirs = every evening."},

  {type:"teach",kind:"phrase",nl:"souvent / parfois / rarement",en:"often / sometimes / rarely",phonetic:"soo-VON / par-FWAH / rar-MON",example:"A: Tu cuisines souvent?\nB: Parfois. Je mange souvent au restaurant.\nA: Et tu fais du sport?\nB: Rarement, malheureusement!",exampleEn:"A: Do you cook often?\nB: Sometimes. I often eat at restaurants.\nA: And do you exercise?\nB: Rarely, unfortunately!",note:"Frequency adverbs go AFTER the verb:\nJe mange souvent au restaurant.\nJe fais rarement du sport.\nJe travaille parfois le samedi."},

  {type:"teach",kind:"phrase",nl:"de ... à ...",en:"from ... to ...",phonetic:"duh ... ah",example:"A: Tu travailles de quelle heure à quelle heure?\nB: Je travaille de neuf heures à cinq heures.\nA: C'est une journée normale.",exampleEn:"A: What hours do you work?\nB: I work from nine to five.\nA: That's a normal day.",note:"De ... à ... = from ... to ... (for time ranges).\nDe neuf heures à cinq heures = from 9 to 5.\nDu lundi au vendredi = from Monday to Friday."},

  {type:"tip",title:"Weekly Routine Template",text:"A model weekly description:\n\nLe lundi, je travaille de neuf heures à cinq heures.\nLe mardi, je fais du sport après le travail.\nLe mercredi, je ne travaille pas. Je fais les courses.\nLe jeudi, je travaille et je dîne avec des amis.\nLe vendredi, je rentre tôt. C'est le week-end!\nLe samedi, je me lève tard et je fais du sport.\nLe dimanche, je me repose.\n\nKey patterns:\nLe + day = habitual (every week)\nVerb + time = when\nNe...pas = what you don't do",deepDive:{title:"Faire les courses vs faire du shopping",text:"Faire les courses = to do grocery shopping (essential, weekly errands)\nFaire du shopping = to go shopping (leisure, clothes, fun)\n\nFrench distinguishes between necessity shopping (les courses) and pleasure shopping (du shopping).\n\nJe fais les courses le samedi. = I do groceries on Saturday.\nJe fais du shopping le samedi. = I go shopping on Saturday.\n\nLes courses is more common in daily routine descriptions."}},

  {type:"mc",q:"Frequency adverbs in French go:",opts:["Before the verb","After the verb","At the beginning","At the end"],ans:"After the verb",hint:"Je mange SOUVENT. Je travaille RAREMENT."},

  {type:"mc",q:"'Tous les jours' means:",opts:["Some days","Every day","All day long","Any day"],ans:"Every day",hint:"Tous = all. Les jours = the days. All the days."},

  {type:"fb",s:"Je travaille ___ neuf heures à cinq heures.",a:"de",opts:["de","à","en","du"],hint:"From nine to five: the first preposition."},

  {type:"mc",q:"'Le mercredi, je ne travaille pas' means:",opts:["I worked last Wednesday","I never work on Wednesdays","This Wednesday I'm free","Wednesday is a holiday"],ans:"I never work on Wednesdays",hint:"Le + day = habitual. Ne...pas = negation."},

  {type:"match",pairs:[{nl:"tous les jours",en:"every day"},{nl:"souvent",en:"often"},{nl:"parfois",en:"sometimes"},{nl:"rarement",en:"rarely"}]},

  {type:"mc",q:"'Du lundi au vendredi' means:",opts:["On Monday and Friday","From Monday to Friday","Monday or Friday","Between Monday and Friday"],ans:"From Monday to Friday",hint:"Du (de + le) ... au (à + le): from ... to."},

  {type:"fb",s:"Je fais ___ du sport. (rarely)",a:"rarement",opts:["rarement","souvent","parfois","jamais"],hint:"Frequency adverb: almost never."},

  {type:"mc",q:"'Faire les courses' means:",opts:["Run a race","Do grocery shopping","Take a course","Go to school"],ans:"Do grocery shopping",hint:"Les courses = errands/groceries. Essential shopping."},

  {type:"fb",s:"Je me lève ___ le dimanche. (late)",a:"tard",opts:["tard","tôt","vite","bien"],hint:"On Sundays I get up ___. Sleeping in!"},

  {type:"mc",q:"In 'Je mange souvent au restaurant', souvent goes:",opts:["Before je","Before mange","After mange","At the end"],ans:"After mange",hint:"Frequency adverbs follow the verb directly."},

  {type:"mc",q:"'Tous les matins' means:",opts:["This morning","Every morning","All morning","Some mornings"],ans:"Every morning",hint:"Tous les = every/all. Matins = mornings."},

  {type:"fb",s:"___ les jours, je me réveille à sept heures.",a:"Tous",opts:["Tous","Tout","Toute","Toutes"],hint:"Every day: ___ les jours. Masculine plural."},

  {type:"mc",q:"'Faire la grasse matinée' means:",opts:["To cook breakfast","To sleep in","To do morning exercises","To skip breakfast"],ans:"To sleep in",hint:"Grasse matinée = a 'fat morning'. A lazy morning in bed."},
]},

// ═══ L8: Révision Unit 5 ═══
{id:"fre5l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 5 Review",desc:"Review all of Unit 5: -er verbs, time, reflexive verbs, daily routine, days of the week, negation, and weekly descriptions.",goals:["Review -er conjugation","Test time expressions","Combine routine vocabulary with negation"]},

  {type:"mc",q:"The -er verb stem of 'travailler' is:",opts:["trav","travail","travaill","travailler"],ans:"travaill",hint:"Remove -er from the infinitive to get the stem."},

  {type:"fb",s:"Il est trois heures et ___. (3:30)",a:"demie",opts:["demie","quart","dix","midi"],hint:"Half past: the word for half."},

  {type:"mc",q:"Reflexive pronouns go:",opts:["After the verb","Before the verb","After the subject","Nowhere specific"],ans:"Before the verb",hint:"Je ME lève. Tu TE couches. Notice where ME and TE sit."},

  {type:"match",pairs:[{nl:"se lever",en:"to get up"},{nl:"se coucher",en:"to go to bed"},{nl:"se laver",en:"to wash oneself"},{nl:"se réveiller",en:"to wake up"}]},

  {type:"mc",q:"'Je vais au travail' uses which irregular verb?",opts:["Être","Avoir","Aller","Faire"],ans:"Aller",hint:"'Vais' is the je form. Which infinitive does it come from?"},

  {type:"fb",s:"Je ne ___ pas de viande.",a:"mange",opts:["mange","manges","manger","mangez"],hint:"I do not eat: ne + verb + pas."},

  {type:"mc",q:"French days of the week are:",opts:["Capitalized","Lowercase","Feminine","Irregular"],ans:"Lowercase",hint:"Unlike English, French does not capitalize these."},

  {type:"mc",q:"'Le lundi' means:",opts:["This Monday","Last Monday","Every Monday","Next Monday"],ans:"Every Monday",hint:"Le + day = habitual, every week."},

  {type:"fb",s:"Elle ___ lève à sept heures. (reflexive)",a:"se",opts:["se","me","te","nous"],hint:"She gets up: third person reflexive pronoun."},

  {type:"match",pairs:[{nl:"lundi",en:"Monday"},{nl:"jeudi",en:"Thursday"},{nl:"samedi",en:"Saturday"},{nl:"dimanche",en:"Sunday"}]},

  {type:"mc",q:"After 'ne...pas', partitive articles become:",opts:["Le/la","Du/de la","De/d'","Un/une"],ans:"De/d'",hint:"Negation strips partitive to just de."},

  {type:"fb",s:"Je fais du sport ___ les jours.",a:"tous",opts:["tous","tout","toute","chaque"],hint:"Every day: ___ les jours."},

  {type:"mc",q:"Frequency adverbs go:",opts:["Before the subject","Before the verb","After the verb","At the end"],ans:"After the verb",hint:"Je mange SOUVENT. Je travaille RAREMENT."},

  {type:"mc",q:"'Il est midi' means:",opts:["It is midnight","It is noon","It is midday meal","It is twelve hours"],ans:"It is noon",hint:"Midi = 12:00 PM. Minuit = 12:00 AM."},

  {type:"fb",s:"Je travaille ___ neuf heures à cinq heures.",a:"de",opts:["de","à","en","du"],hint:"From nine to five: from = de."},

  {type:"mc",q:"In spoken French, which part of negation is often dropped?",opts:["Pas","Ne","Both","Neither"],ans:"Ne",hint:"Spoken: je parle pas. Written: je ne parle pas."},

  {type:"mc",q:"'Prendre le petit déjeuner' means:",opts:["To take breakfast away","To have breakfast","To make breakfast","To skip breakfast"],ans:"To have breakfast",hint:"Prendre = to take/have. Used for meals."},

  {type:"fb",s:"D'abord je me réveille, ___ je me lève.",a:"puis",opts:["puis","enfin","avant","d'abord"],hint:"First I wake up, THEN I get up. The second sequencer."},
]},
]},

// ═══════════════════════════════════════════════
//  UNIT 6 — La maison
//  Level: A1.6 | Lessons: 8 | Track: v1
// ═══════════════════════════════════════════════

{n:6,lang:"fr",track:"v1",title:"La maison",sub:"Home & Rooms",icon:"🏠",level:"A1.6",color:"#7B5EE8",lessons:[

// ═══ L1: Les pièces ═══
{id:"fre6l1",title:"Les pièces",icon:"🚪",xp:15,board:true,steps:[
  {type:"intro",title:"Les pièces de la maison",desc:"Learn the rooms of a French home. Every room has a gender: le or la. Pay attention to articles from day one.",goals:["Name 8 rooms in French","Use correct articles (le/la)","Describe where things happen in a home"]},

  {type:"teach",kind:"word",nl:"la cuisine",en:"the kitchen",phonetic:"lah kwee-ZEEN",example:"A: Où est maman?\nB: Elle est dans la cuisine.\nA: Elle prépare le dîner?",exampleEn:"A: Where is mom?\nB: She is in the kitchen.\nA: Is she making dinner?",note:"Feminine. Where you cook and often eat.\nRelated: cuisiner = to cook."},

  {type:"teach",kind:"word",nl:"le salon",en:"the living room",phonetic:"luh sah-LON",example:"A: On regarde la télé?\nB: Oui, dans le salon.\nA: J'arrive!",exampleEn:"A: Shall we watch TV?\nB: Yes, in the living room.\nA: Coming!",note:"Masculine. The main gathering room.\nAlso called le séjour."},

  {type:"teach",kind:"word",nl:"la chambre",en:"the bedroom",phonetic:"lah SHAHM-bruh",example:"A: Tu dors bien?\nB: Oui, ma chambre est calme.\nA: Tu as de la chance!",exampleEn:"A: Do you sleep well?\nB: Yes, my bedroom is quiet.\nA: You're lucky!",note:"Feminine. Short for la chambre à coucher.\nAlso means hotel room."},

  {type:"teach",kind:"word",nl:"la salle de bains",en:"the bathroom",phonetic:"lah sal duh BAN",example:"A: Où est la salle de bains?\nB: Au bout du couloir.\nA: Merci!",exampleEn:"A: Where is the bathroom?\nB: At the end of the hall.\nA: Thanks!",note:"Feminine. Literally: the room of baths.\nFor toilet only: les toilettes."},

  {type:"teach",kind:"word",nl:"les toilettes",en:"the toilet / restroom",phonetic:"lay twah-LET",example:"A: Excusez-moi, les toilettes?\nB: À gauche, après la cuisine.\nA: Merci beaucoup.",exampleEn:"A: Excuse me, the restroom?\nB: On the left, past the kitchen.\nA: Thank you very much.",note:"Always plural in French.\nSeparate from la salle de bains."},

  {type:"teach",kind:"word",nl:"le couloir",en:"the hallway",phonetic:"luh koo-LWAHR",example:"A: La chambre est grande?\nB: Non, mais le couloir est long.\nA: C'est un vieil immeuble?",exampleEn:"A: Is the bedroom big?\nB: No, but the hallway is long.\nA: Is it an old building?",note:"Masculine. The corridor connecting rooms."},

  {type:"teach",kind:"word",nl:"le jardin",en:"the garden",phonetic:"luh zhar-DAN",example:"A: Vous avez un jardin?\nB: Oui, un petit jardin avec des fleurs.\nA: C'est joli!",exampleEn:"A: Do you have a garden?\nB: Yes, a small garden with flowers.\nA: That's pretty!",note:"Masculine. Common in houses.\nApartments rarely have un jardin."},

  {type:"teach",kind:"word",nl:"le balcon",en:"the balcony",phonetic:"luh bal-KON",example:"A: On prend le café dehors?\nB: Oui, sur le balcon!\nA: Bonne idée.",exampleEn:"A: Shall we have coffee outside?\nB: Yes, on the balcony!\nA: Good idea.",note:"Masculine. Apartments often have un balcon.\nCognate with English."},

  {type:"match",pairs:[{nl:"la cuisine",en:"the kitchen"},{nl:"le salon",en:"the living room"},{nl:"la chambre",en:"the bedroom"},{nl:"la salle de bains",en:"the bathroom"}]},

  {type:"mc",q:"Which room is always plural in French?",opts:["La cuisine","Le salon","Les toilettes","La chambre"],ans:"Les toilettes",hint:"This room uses 'les' not 'le' or 'la'."},

  {type:"fb",s:"Maman est dans ___ cuisine.",a:"la",opts:["la","le","les","un"],hint:"Kitchen is a feminine noun. Which feminine article?"},

  {type:"mc",q:"'Le couloir' is:",opts:["The kitchen","The hallway","The garden","The bedroom"],ans:"The hallway",hint:"This word refers to the corridor connecting rooms."},

  {type:"match",pairs:[{nl:"le couloir",en:"the hallway"},{nl:"le jardin",en:"the garden"},{nl:"le balcon",en:"the balcony"},{nl:"les toilettes",en:"the restroom"}]},

  {type:"fb",s:"On regarde la télé dans ___ salon.",a:"le",opts:["le","la","les","un"],hint:"Salon is masculine. Which definite article?"},

  {type:"mc",q:"Where do you sleep?",opts:["La cuisine","Le jardin","La chambre","Le couloir"],ans:"La chambre",hint:"This feminine room is for sleeping and resting."},

  {type:"fb",s:"Les enfants jouent dans ___ jardin.",a:"le",opts:["le","la","les","un"],hint:"Garden is masculine. Which definite article?"},

  {type:"mc",q:"'La salle de bains' literally translates to:",opts:["The bath room","The room of baths","The water room","The washing room"],ans:"The room of baths",hint:"Salle = room, de = of, bains = baths."},
]},

// ═══ L2: Les meubles ═══
{id:"fre6l2",title:"Les meubles",icon:"🛋️",xp:15,board:true,steps:[
  {type:"intro",title:"Les meubles",desc:"Learn common furniture words. Like rooms, every piece of furniture has a gender. The article is part of the word.",goals:["Name 8 common pieces of furniture","Place furniture in the correct room","Use articles accurately"]},

  {type:"teach",kind:"word",nl:"le lit",en:"the bed",phonetic:"luh LEE",example:"A: Le lit est confortable?\nB: Oui, très confortable!\nA: Parfait, je suis fatigué.",exampleEn:"A: Is the bed comfortable?\nB: Yes, very comfortable!\nA: Perfect, I'm tired.",note:"Masculine. Final 't' is silent.\nExpression: aller au lit = to go to bed."},

  {type:"teach",kind:"word",nl:"la table",en:"the table",phonetic:"lah TAH-bluh",example:"A: On mange où?\nB: À la table de la cuisine.\nA: D'accord!",exampleEn:"A: Where do we eat?\nB: At the kitchen table.\nA: Alright!",note:"Feminine. Cognate with English.\nla table basse = coffee table."},

  {type:"teach",kind:"word",nl:"la chaise",en:"the chair",phonetic:"lah SHEZ",example:"A: Il y a assez de chaises?\nB: Non, il manque une chaise.\nA: Je vais en chercher une.",exampleEn:"A: Are there enough chairs?\nB: No, one chair is missing.\nA: I'll go get one.",note:"Feminine. Different from le fauteuil (armchair)."},

  {type:"teach",kind:"word",nl:"le canapé",en:"the sofa / couch",phonetic:"luh kah-nah-PAY",example:"A: Tu regardes la télé?\nB: Oui, sur le canapé.\nA: Je m'assois à côté de toi.",exampleEn:"A: Are you watching TV?\nB: Yes, on the sofa.\nA: I'll sit next to you.",note:"Masculine. Accent on the final é.\nAlso: le divan."},

  {type:"teach",kind:"word",nl:"l'armoire",en:"the wardrobe",phonetic:"lar-MWAHR",example:"A: Où sont mes vêtements?\nB: Dans l'armoire de ta chambre.\nA: Ah oui, merci!",exampleEn:"A: Where are my clothes?\nB: In the wardrobe in your bedroom.\nA: Oh right, thanks!",note:"Feminine (une armoire). Elided article: l'armoire.\nLarge standing closet for clothes."},

  {type:"teach",kind:"word",nl:"le bureau",en:"the desk / office",phonetic:"luh bew-ROH",example:"A: Tu travailles où?\nB: Dans mon bureau, à la maison.\nA: Tu as un grand bureau?",exampleEn:"A: Where do you work?\nB: In my office, at home.\nA: Do you have a big desk?",note:"Masculine. Two meanings:\n1. The desk (furniture)\n2. The office (room)."},

  {type:"teach",kind:"word",nl:"l'étagère",en:"the shelf / bookshelf",phonetic:"lay-tah-ZHEHR",example:"A: Où est-ce que je mets les livres?\nB: Sur l'étagère dans le salon.\nA: Il y a assez de place?",exampleEn:"A: Where do I put the books?\nB: On the shelf in the living room.\nA: Is there enough space?",note:"Feminine (une étagère). Elided article.\nUsed for books, decorations, storage."},

  {type:"teach",kind:"word",nl:"le frigo",en:"the fridge",phonetic:"luh free-GOH",example:"A: Il y a du lait?\nB: Oui, dans le frigo.\nA: Super, merci!",exampleEn:"A: Is there any milk?\nB: Yes, in the fridge.\nA: Great, thanks!",note:"Masculine. Informal short form.\nFormal: le réfrigérateur."},

  {type:"match",pairs:[{nl:"le lit",en:"the bed"},{nl:"la table",en:"the table"},{nl:"la chaise",en:"the chair"},{nl:"le canapé",en:"the sofa"}]},

  {type:"mc",q:"'L'armoire' is feminine. The full form would be:",opts:["Le armoire","La armoire","Une armoire","Les armoire"],ans:"Une armoire",hint:"Feminine nouns use une. L' hides the gender with elision."},

  {type:"fb",s:"Les livres sont sur ___. (the shelf)",a:"l'étagère",opts:["l'étagère","le bureau","la chaise","le lit"],hint:"A feminine piece of furniture for storing books."},

  {type:"match",pairs:[{nl:"l'armoire",en:"the wardrobe"},{nl:"le bureau",en:"the desk"},{nl:"l'étagère",en:"the shelf"},{nl:"le frigo",en:"the fridge"}]},

  {type:"mc",q:"Where is the bed?",opts:["Dans la cuisine","Dans le salon","Dans la chambre","Dans le couloir"],ans:"Dans la chambre",hint:"You sleep in this room. Where does the bed go?"},

  {type:"fb",s:"Le lait est dans ___ frigo.",a:"le",opts:["le","la","les","l'"],hint:"Frigo is masculine and starts with a consonant."},

  {type:"mc",q:"'Le bureau' can mean:",opts:["Only the desk","Only the office","Both the desk and the office","The table"],ans:"Both the desk and the office",hint:"This word has two meanings depending on context."},

  {type:"fb",s:"Elle s'assoit sur ___ canapé.",a:"le",opts:["le","la","les","un"],hint:"Sofa is masculine. Which definite article fits?"},

  {type:"mc",q:"'Le frigo' is the informal word for:",opts:["The oven","The microwave","The refrigerator","The freezer"],ans:"The refrigerator",hint:"The formal name is le réfrigérateur."},
]},

// ═══ L3: Il y a ═══
{id:"fre6l3",title:"Il y a",icon:"👉",xp:15,board:true,steps:[
  {type:"intro",title:"Il y a: there is / there are",desc:"'Il y a' is one of the most useful French expressions. It means both 'there is' and 'there are'. One form for singular AND plural.",goals:["Use il y a for existence statements","Make negative: il n'y a pas de","Ask questions with est-ce qu'il y a"]},

  {type:"teach",kind:"phrase",nl:"il y a",en:"there is / there are",phonetic:"eel ee AH",example:"A: Qu'est-ce qu'il y a dans le salon?\nB: Il y a un canapé et une table.\nA: Il y a une télé aussi?",exampleEn:"A: What is there in the living room?\nB: There is a sofa and a table.\nA: Is there a TV too?",note:"Literally: it there has.\nWorks for singular AND plural.\nNever changes form."},

  {type:"tip",title:"Il y a: positive, negative, question",text:"Positive: Il y a un chat. (There is a cat.)\nNegative: Il n'y a pas de chat. (There is no cat.)\nQuestion: Est-ce qu'il y a un chat? (Is there a cat?)\n\nAfter pas, articles become de/d'."},

  {type:"teach",kind:"phrase",nl:"il n'y a pas de",en:"there is no / there are no",phonetic:"eel nee ah PAH duh",example:"A: Il y a du lait?\nB: Non, il n'y a pas de lait.\nA: Je vais en acheter.",exampleEn:"A: Is there any milk?\nB: No, there is no milk.\nA: I'll go buy some.",note:"Negation of il y a.\nAll articles (un/une/des/du/de la)\nbecome de/d' after pas."},

  {type:"teach",kind:"phrase",nl:"est-ce qu'il y a",en:"is there / are there",phonetic:"es keel ee AH",example:"A: Est-ce qu'il y a une pharmacie près d'ici?\nB: Oui, il y a une pharmacie à côté.\nA: Merci beaucoup!",exampleEn:"A: Is there a pharmacy nearby?\nB: Yes, there is a pharmacy next door.\nA: Thank you very much!",note:"Question form of il y a.\nEst-ce que + il y a = is there?"},

  {type:"mc",q:"'Il y a' is used for:",opts:["Only singular","Only plural","Both singular and plural","Only questions"],ans:"Both singular and plural",hint:"One form handles 'there is' and 'there are' equally."},

  {type:"fb",s:"___ y a trois chambres dans la maison.",a:"Il",opts:["Il","Elle","On","Ça"],hint:"The subject of 'y a' is always the same impersonal pronoun."},

  {type:"mc",q:"'Il n'y a pas DE lait' uses 'de' because:",opts:["Lait is masculine","It sounds better","Negation changes articles to de","De means some"],ans:"Negation changes articles to de",hint:"After ne...pas, all partitives and indefinites simplify."},

  {type:"fb",s:"Il n'y a pas ___ jardin.",a:"de",opts:["de","du","un","le"],hint:"After il n'y a pas, all articles become this short word."},

  {type:"mc",q:"How do you ask 'Is there a balcony?'",opts:["Il y a un balcon","Est-ce qu'il y a un balcon?","Il n'y a pas de balcon","Un balcon il y a?"],ans:"Est-ce qu'il y a un balcon?",hint:"Add the question marker before il y a."},

  {type:"fb",s:"Est-ce qu'il y a ___ toilettes? (any restrooms)",a:"des",opts:["des","les","de","la"],hint:"In questions, use the indefinite plural article."},

  {type:"match",pairs:[{nl:"Il y a un lit",en:"There is a bed"},{nl:"Il n'y a pas de lit",en:"There is no bed"},{nl:"Est-ce qu'il y a un lit?",en:"Is there a bed?"},{nl:"Il y a des lits",en:"There are beds"}]},

  {type:"mc",q:"'Il n'y a pas d'étagère' uses d' because:",opts:["Étagère is feminine","Étagère starts with a vowel","It is plural","It is a question"],ans:"Étagère starts with a vowel",hint:"De + vowel = d'. This is elision, same as l'."},

  {type:"fb",s:"___ qu'il y a un café près d'ici?",a:"Est-ce",opts:["Est-ce","Il y a","Qu'est-ce","Comment"],hint:"The two-word question marker that turns statements into yes/no questions."},

  {type:"mc",q:"'Qu'est-ce qu'il y a dans le frigo?' asks:",opts:["Is there a fridge?","Where is the fridge?","What is in the fridge?","How big is the fridge?"],ans:"What is in the fridge?",hint:"Qu'est-ce que = what. Combined with il y a = what is there."},

  {type:"fb",s:"Il y a ___ canapé et ___ table dans le salon.",a:["un","une"],opts:["un","une","le","la"],hint:"Indefinite articles: masculine for sofa, feminine for table."},

  {type:"mc",q:"Which sentence is correct?",opts:["Il y a pas de chaises","Il n'y a pas de chaises","Il n'y a pas des chaises","Il y a ne pas chaises"],ans:"Il n'y a pas de chaises",hint:"ne...pas wraps around y a. Articles become de after pas."},

  {type:"fb",s:"Il n'y ___ pas de balcon.",a:"a",opts:["a","y","est","va"],hint:"The verb in il y a. In negation: il n'y ___ pas."},
]},

// ═══ L4: Les prépositions de lieu ═══
{id:"fre6l4",title:"Les prépositions",icon:"📍",xp:15,board:true,steps:[
  {type:"intro",title:"Les prépositions de lieu",desc:"Prepositions tell you WHERE things are. French prepositions of place work similarly to English but some need de before the noun.",goals:["Use 8 location prepositions","Combine prepositions with rooms and furniture","Build descriptive sentences about your space"]},

  {type:"teach",kind:"word",nl:"dans",en:"in / inside",phonetic:"DAHN",example:"A: Où est le chat?\nB: Il est dans la cuisine.\nA: Encore dans la cuisine!",exampleEn:"A: Where is the cat?\nB: It's in the kitchen.\nA: In the kitchen again!",note:"Most common preposition of place.\nDans + le/la/les + noun."},

  {type:"teach",kind:"word",nl:"sur",en:"on / on top of",phonetic:"SEWR",example:"A: Où sont mes clés?\nB: Sur la table dans le couloir.\nA: Ah, merci!",exampleEn:"A: Where are my keys?\nB: On the table in the hallway.\nA: Oh, thanks!",note:"On the surface of something.\nSur + le/la/les + noun."},

  {type:"teach",kind:"word",nl:"sous",en:"under / beneath",phonetic:"SOO",example:"A: Le chat est sur le lit?\nB: Non, sous le lit!\nA: Il se cache toujours là.",exampleEn:"A: Is the cat on the bed?\nB: No, under the bed!\nA: It always hides there.",note:"Opposite of sur.\nSous + le/la/les + noun."},

  {type:"teach",kind:"word",nl:"devant",en:"in front of",phonetic:"duh-VAHN",example:"A: Où est la voiture?\nB: Devant la maison.\nA: D'accord, j'arrive.",exampleEn:"A: Where is the car?\nB: In front of the house.\nA: OK, I'm coming.",note:"In front of, before (spatial).\nOpposite: derrière."},

  {type:"teach",kind:"word",nl:"derrière",en:"behind",phonetic:"deh-ree-EHR",example:"A: Où est le jardin?\nB: Derrière la maison.\nA: Il est grand?",exampleEn:"A: Where is the garden?\nB: Behind the house.\nA: Is it big?",note:"Behind, at the back of.\nOpposite: devant."},

  {type:"teach",kind:"word",nl:"entre",en:"between",phonetic:"AHN-truh",example:"A: La salle de bains est où?\nB: Entre la chambre et le salon.\nA: Merci!",exampleEn:"A: Where is the bathroom?\nB: Between the bedroom and the living room.\nA: Thanks!",note:"Between two things.\nEntre + A + et + B."},

  {type:"teach",kind:"word",nl:"à côté de",en:"next to / beside",phonetic:"ah koh-TAY duh",example:"A: Il y a un parc?\nB: Oui, à côté de l'immeuble.\nA: Quelle chance!",exampleEn:"A: Is there a park?\nB: Yes, next to the building.\nA: How lucky!",note:"Next to, beside.\nà côté de + le = à côté du.\nà côté de + les = à côté des."},

  {type:"teach",kind:"word",nl:"en face de",en:"across from / facing",phonetic:"ahn fas duh",example:"A: La boulangerie est loin?\nB: Non, en face de la maison.\nA: Pratique!",exampleEn:"A: Is the bakery far?\nB: No, across from the house.\nA: Convenient!",note:"Directly opposite, facing.\nen face de + le = en face du."},

  {type:"match",pairs:[{nl:"dans",en:"in / inside"},{nl:"sur",en:"on top of"},{nl:"sous",en:"under"},{nl:"devant",en:"in front of"}]},

  {type:"mc",q:"The cat is UNDER the bed:",opts:["Le chat est sur le lit","Le chat est sous le lit","Le chat est dans le lit","Le chat est devant le lit"],ans:"Le chat est sous le lit",hint:"Which preposition means beneath or underneath?"},

  {type:"fb",s:"Les clés sont ___ la table.",a:"sur",opts:["sur","sous","dans","entre"],hint:"The keys are ON the table. Which preposition means 'on'?"},

  {type:"match",pairs:[{nl:"derrière",en:"behind"},{nl:"entre",en:"between"},{nl:"à côté de",en:"next to"},{nl:"en face de",en:"across from"}]},

  {type:"mc",q:"'À côté du parc' means:",opts:["Inside the park","Next to the park","Behind the park","Far from the park"],ans:"Next to the park",hint:"À côté de = beside. Du = de + le (contraction)."},

  {type:"fb",s:"La pharmacie est en face ___ la boulangerie.",a:"de",opts:["de","du","à","le"],hint:"En face __ + la = no contraction needed for feminine."},

  {type:"mc",q:"'Entre la cuisine et le salon' means:",opts:["Behind the kitchen and living room","Next to the kitchen or living room","Between the kitchen and the living room","Inside the kitchen and living room"],ans:"Between the kitchen and the living room",hint:"This preposition describes being in the middle of two things."},

  {type:"fb",s:"Le jardin est ___ la maison. (behind)",a:"derrière",opts:["derrière","devant","dans","sur"],hint:"The garden is at the back, not the front."},

  {type:"mc",q:"Which is correct: 'à côté DU parc' or 'à côté DE LE parc'?",opts:["À côté de le parc","À côté du parc","À côté des parc","À côté le parc"],ans:"À côté du parc",hint:"De + le always contracts to one short word."},
]},

// ═══ L5: Mon appartement ═══
{id:"fre6l5",title:"Mon appartement",icon:"🏢",xp:15,board:true,steps:[
  {type:"intro",title:"Mon appartement",desc:"Describe where you live: apartment, house, studio. Use c'est + adjective to describe it. Learn about floors and French housing.",goals:["Describe your home type","Use c'est + adjective","Talk about floors and size"]},

  {type:"teach",kind:"word",nl:"un appartement",en:"an apartment",phonetic:"uhn ah-par-tuh-MAHN",example:"A: Tu habites dans une maison?\nB: Non, dans un appartement.\nA: Il est grand?",exampleEn:"A: Do you live in a house?\nB: No, in an apartment.\nA: Is it big?",note:"Masculine. Cognate with English.\nMost French city dwellers live in apartments."},

  {type:"teach",kind:"word",nl:"une maison",en:"a house",phonetic:"ewn may-ZON",example:"A: Mes parents ont une maison.\nB: Avec un jardin?\nA: Oui, un grand jardin!",exampleEn:"A: My parents have a house.\nB: With a garden?\nA: Yes, a big garden!",note:"Feminine. Houses are more common\noutside city centers."},

  {type:"teach",kind:"word",nl:"un studio",en:"a studio apartment",phonetic:"uhn stew-dee-OH",example:"A: C'est un grand appartement?\nB: Non, c'est un studio.\nA: Un studio, c'est suffisant pour une personne.",exampleEn:"A: Is it a big apartment?\nB: No, it's a studio.\nA: A studio is enough for one person.",note:"Masculine. One main room + bathroom.\nCommon for students."},

  {type:"teach",kind:"word",nl:"un étage",en:"a floor / story",phonetic:"uhn ay-TAHZH",example:"A: Vous habitez à quel étage?\nB: Au troisième étage.\nA: Il y a un ascenseur?",exampleEn:"A: Which floor do you live on?\nB: On the third floor.\nA: Is there an elevator?",note:"Masculine. French ground floor =\nle rez-de-chaussée (not first floor).\nFirst floor = le premier étage."},

  {type:"tip",title:"C'est + adjective for descriptions",text:"C'est is a powerful shortcut for describing:\n\nC'est grand. = It's big.\nC'est petit. = It's small.\nC'est moderne. = It's modern.\nC'est joli. = It's pretty.\nC'est cher. = It's expensive.\nC'est calme. = It's quiet.\n\nC'est + adjective = simple, effective descriptions."},

  {type:"teach",kind:"word",nl:"grand",en:"big / large",phonetic:"GRAHN",example:"A: L'appartement est comment?\nB: C'est grand et lumineux.\nA: Combien de pièces?",exampleEn:"A: What is the apartment like?\nB: It's big and bright.\nA: How many rooms?",note:"Masculine form. Feminine: grande.\nGrand also means tall (for people)."},

  {type:"teach",kind:"word",nl:"petit",en:"small / little",phonetic:"puh-TEE",example:"A: Le studio est petit?\nB: Oui, mais c'est confortable.\nA: C'est l'essentiel!",exampleEn:"A: Is the studio small?\nB: Yes, but it's comfortable.\nA: That's what matters!",note:"Masculine form. Feminine: petite.\nUn petit appartement = a small apartment."},

  {type:"teach",kind:"word",nl:"le loyer",en:"the rent",phonetic:"luh lwah-YAY",example:"A: Le loyer est combien?\nB: Huit cents euros par mois.\nA: C'est raisonnable.",exampleEn:"A: How much is the rent?\nB: Eight hundred euros per month.\nA: That's reasonable.",note:"Masculine. What you pay monthly.\nPayer le loyer = to pay the rent."},

  {type:"match",pairs:[{nl:"un appartement",en:"an apartment"},{nl:"une maison",en:"a house"},{nl:"un studio",en:"a studio"},{nl:"un étage",en:"a floor"}]},

  {type:"mc",q:"In France, 'le rez-de-chaussée' is:",opts:["The first floor","The ground floor","The basement","The roof"],ans:"The ground floor",hint:"French numbering starts above this level."},

  {type:"fb",s:"___ grand et lumineux. (It's big and bright)",a:"C'est",opts:["C'est","Il est","Elle est","Ça"],hint:"The universal description starter: it is."},

  {type:"mc",q:"'Le loyer est combien?' asks about:",opts:["The floor","The size","The rent amount","The address"],ans:"The rent amount",hint:"Loyer is what you pay each month for housing."},

  {type:"fb",s:"J'habite au deuxième ___.",a:"étage",opts:["étage","maison","salon","pièce"],hint:"I live on the second ___. What word means floor/level?"},

  {type:"mc",q:"Which is feminine?",opts:["Un appartement","Un studio","Une maison","Un étage"],ans:"Une maison",hint:"Notice which article is different from the others."},

  {type:"fb",s:"Mon appartement est ___, il a cinq pièces.",a:"grand",opts:["grand","petit","cher","vieux"],hint:"Five rooms is quite large. Which adjective fits?"},

  {type:"mc",q:"'C'est cher' means:",opts:["It's cheap","It's old","It's expensive","It's new"],ans:"It's expensive",hint:"The opposite of bon marché or pas cher."},

  {type:"fb",s:"Mes parents habitent dans ___ maison avec un jardin.",a:"une",opts:["une","un","le","la"],hint:"House is feminine. Which indefinite feminine article?"},
]},

// ═══ L6: Chez moi ═══
{id:"fre6l6",title:"Chez moi",icon:"🏡",xp:15,board:true,steps:[
  {type:"intro",title:"Chez moi: at my place",desc:"'Chez' is a uniquely French preposition meaning 'at someone's place'. Learn to invite, describe, and talk about going to someone's home.",goals:["Use chez + person/pronoun","Invite someone to your place","Give a home tour in French"]},

  {type:"teach",kind:"phrase",nl:"chez moi",en:"at my place / at my home",phonetic:"shay MWAH",example:"A: On va au restaurant?\nB: Non, viens chez moi!\nA: D'accord, j'apporte le dessert.",exampleEn:"A: Shall we go to the restaurant?\nB: No, come to my place!\nA: OK, I'll bring dessert.",note:"Chez + stress pronoun.\nChez moi = at my place.\nChez toi = at your place."},

  {type:"teach",kind:"phrase",nl:"chez toi",en:"at your place (informal)",phonetic:"shay TWAH",example:"A: On se retrouve chez toi?\nB: Oui, à huit heures.\nA: Parfait, à ce soir!",exampleEn:"A: Shall we meet at your place?\nB: Yes, at eight.\nA: Perfect, see you tonight!",note:"Chez + toi (informal you).\nFormal: chez vous."},

  {type:"teach",kind:"phrase",nl:"chez + name",en:"at someone's place",phonetic:"shay",example:"A: Tu vas chez Pierre ce soir?\nB: Oui, on dîne chez Pierre.\nA: Amusez-vous bien!",exampleEn:"A: Are you going to Pierre's tonight?\nB: Yes, we're having dinner at Pierre's.\nA: Have fun!",note:"Chez + person's name.\nChez Pierre = at Pierre's place.\nChez le docteur = at the doctor's."},

  {type:"tip",title:"Chez with all pronouns",text:"chez moi = at my place\nchez toi = at your place (informal)\nchez lui = at his place\nchez elle = at her place\nchez nous = at our place\nchez vous = at your place (formal/plural)\nchez eux = at their place (m.)\nchez elles = at their place (f.)\n\nAlso: chez le docteur, chez le coiffeur."},

  {type:"teach",kind:"phrase",nl:"Bienvenue chez moi!",en:"Welcome to my place!",phonetic:"bee-ahn-vuh-NEW shay mwah",example:"A: Bienvenue chez moi!\nB: Merci! C'est très joli chez toi.\nA: Merci, entre, je te fais visiter.",exampleEn:"A: Welcome to my place!\nB: Thanks! It's very pretty at your place.\nA: Thanks, come in, I'll show you around.",note:"Common greeting when someone arrives.\nBienvenue = welcome."},

  {type:"teach",kind:"phrase",nl:"faire visiter",en:"to show around / give a tour",phonetic:"fehr vee-zee-TAY",example:"A: Tu veux visiter?\nB: Oui, fais-moi visiter!\nA: Alors, ici c'est le salon...",exampleEn:"A: Do you want a tour?\nB: Yes, show me around!\nA: So, here is the living room...",note:"Faire visiter = to give a tour.\nJe te fais visiter = I'll show you around."},

  {type:"mc",q:"'Chez moi' literally means:",opts:["My house","In my room","At the place of me","Inside me"],ans:"At the place of me",hint:"Chez = at the place of. Moi = me."},

  {type:"fb",s:"On va ___ Pierre ce soir.",a:"chez",opts:["chez","dans","à","sur"],hint:"We're going to Pierre's place. Which preposition?"},

  {type:"mc",q:"To say 'at her place', you use:",opts:["Chez sa","Chez la","Chez elle","Chez soi"],ans:"Chez elle",hint:"Chez + stress pronoun. She/her stress pronoun is..."},

  {type:"match",pairs:[{nl:"chez moi",en:"at my place"},{nl:"chez toi",en:"at your place"},{nl:"chez lui",en:"at his place"},{nl:"chez elle",en:"at her place"}]},

  {type:"fb",s:"Bienvenue ___ nous!",a:"chez",opts:["chez","dans","à","en"],hint:"Welcome to our place. Which preposition goes with pronouns?"},

  {type:"mc",q:"'Chez le docteur' means:",opts:["The doctor's house","At the doctor's office","The doctor is home","Doctor at home"],ans:"At the doctor's office",hint:"Chez + professional = at their place of work."},

  {type:"fb",s:"Viens ___ moi ce soir!",a:"chez",opts:["chez","dans","à","en"],hint:"Come to my place! Which preposition means 'to/at someone's home'?"},

  {type:"mc",q:"'Je te fais visiter' means:",opts:["I visit you","I'll show you around","I make you visit","You visit me"],ans:"I'll show you around",hint:"Faire + visiter = to give someone a tour of your home."},

  {type:"match",pairs:[{nl:"chez nous",en:"at our place"},{nl:"chez vous",en:"at your place (formal)"},{nl:"chez eux",en:"at their place (m.)"},{nl:"chez le coiffeur",en:"at the hairdresser's"}]},

  {type:"fb",s:"C'est très joli ___ toi!",a:"chez",opts:["chez","dans","à","en"],hint:"It's very pretty at your place. Same preposition."},

  {type:"mc",q:"Which sentence correctly invites someone over?",opts:["Viens dans moi!","Viens chez moi!","Viens à moi!","Viens sur moi!"],ans:"Viens chez moi!",hint:"Only one preposition means 'to my place/home'."},
]},

// ═══ L7: Déménager ═══
{id:"fre6l7",title:"Déménager",icon:"📦",xp:15,board:true,steps:[
  {type:"intro",title:"Déménager: moving house",desc:"Learn vocabulary for apartment hunting and moving. Combine rooms, furniture, prepositions, and descriptions to talk about housing.",goals:["Use apartment search vocabulary","Describe advantages and disadvantages","Combine all Unit 6 skills in context"]},

  {type:"teach",kind:"word",nl:"déménager",en:"to move (house)",phonetic:"day-may-nah-ZHAY",example:"A: Tu déménages quand?\nB: Le mois prochain.\nA: Tu as trouvé un appartement?",exampleEn:"A: When are you moving?\nB: Next month.\nA: Have you found an apartment?",note:"Regular -er verb.\nDéménager = to move out.\nEmménager = to move in."},

  {type:"teach",kind:"word",nl:"chercher",en:"to look for / to search",phonetic:"shehr-SHAY",example:"A: Qu'est-ce que tu fais?\nB: Je cherche un appartement.\nA: Dans quel quartier?",exampleEn:"A: What are you doing?\nB: I'm looking for an apartment.\nA: In which neighborhood?",note:"Regular -er verb.\nChercher un appartement = apartment hunting.\nNo preposition needed (unlike English 'look FOR')."},

  {type:"teach",kind:"word",nl:"le quartier",en:"the neighborhood",phonetic:"luh kar-tee-AY",example:"A: Le quartier est calme?\nB: Oui, très calme et il y a des commerces.\nA: C'est important.",exampleEn:"A: Is the neighborhood quiet?\nB: Yes, very quiet and there are shops.\nA: That's important.",note:"Masculine. The area around your home.\nUn bon quartier = a good neighborhood."},

  {type:"teach",kind:"word",nl:"lumineux",en:"bright / well-lit",phonetic:"lew-mee-NUH",example:"A: L'appartement est sombre?\nB: Non, il est très lumineux!\nA: Avec de grandes fenêtres?",exampleEn:"A: Is the apartment dark?\nB: No, it's very bright!\nA: With big windows?",note:"Masculine. Feminine: lumineuse.\nA key quality word for French housing ads."},

  {type:"teach",kind:"word",nl:"une pièce",en:"a room",phonetic:"ewn pee-ES",example:"A: Combien de pièces?\nB: Trois pièces: salon, chambre, cuisine.\nA: C'est un T3 alors.",exampleEn:"A: How many rooms?\nB: Three rooms: living room, bedroom, kitchen.\nA: That's a T3 then.",note:"Feminine. General word for 'room'.\nFrench ads use T1, T2, T3 etc.\n(T = nombre de pièces principales)."},

  {type:"tip",title:"French housing ads",text:"French apartment ads use a code:\nT1 / F1 = 1 room (studio + kitchen)\nT2 / F2 = 2 rooms (1 bedroom + living room)\nT3 / F3 = 3 rooms (2 bedrooms + living room)\n\nBathroom and kitchen are NOT counted.\nLoyer = rent. Charges = utilities."},

  {type:"teach",kind:"phrase",nl:"Combien de pièces?",en:"How many rooms?",phonetic:"kom-bee-AN duh pee-ES",example:"A: Combien de pièces a l'appartement?\nB: C'est un trois pièces.\nA: Avec balcon?",exampleEn:"A: How many rooms does the apartment have?\nB: It's a three-room apartment.\nA: With a balcony?",note:"Essential question for housing.\nCombien de = how many."},

  {type:"mc",q:"'Déménager' means:",opts:["To decorate","To demolish","To move house","To build"],ans:"To move house",hint:"This -er verb is about changing your home address."},

  {type:"fb",s:"Je ___ un appartement dans le centre-ville.",a:"cherche",opts:["cherche","cherches","cherchez","cherchons"],hint:"I look for: je + stem + first person singular -er ending."},

  {type:"match",pairs:[{nl:"déménager",en:"to move house"},{nl:"chercher",en:"to look for"},{nl:"le quartier",en:"the neighborhood"},{nl:"lumineux",en:"bright"}]},

  {type:"mc",q:"In French housing ads, T3 means:",opts:["3 bathrooms","3 floors","3 main rooms","3 buildings"],ans:"3 main rooms",hint:"T = number of main rooms. Kitchen and bath not counted."},

  {type:"fb",s:"L'appartement est ___ et lumineux.",a:"grand",opts:["grand","cher","petit","sombre"],hint:"Big and bright. Which word means spacious/large?"},

  {type:"mc",q:"'Le quartier est calme' means:",opts:["The house is calm","The rent is low","The neighborhood is quiet","The room is dark"],ans:"The neighborhood is quiet",hint:"Quartier = the area surrounding your home."},

  {type:"fb",s:"Combien ___ pièces a ton appartement?",a:"de",opts:["de","des","les","du"],hint:"How many ___? After combien, always use this word."},

  {type:"mc",q:"'Chercher' does NOT need a preposition. So 'I'm looking for an apartment' is:",opts:["Je cherche pour un appartement","Je cherche un appartement","Je cherche à un appartement","Je cherche de un appartement"],ans:"Je cherche un appartement",hint:"Unlike English 'look FOR', French uses the verb directly."},

  {type:"fb",s:"C'est un bon ___, il y a des commerces et un parc.",a:"quartier",opts:["quartier","étage","loyer","balcon"],hint:"It's a good ___. This word means neighborhood."},

  {type:"mc",q:"'Lumineux' becomes ___ in feminine form:",opts:["Lumineuxe","Lumineuse","Lumineuxse","Lumineusse"],ans:"Lumineuse",hint:"Adjectives ending in -eux change to -euse for feminine."},
]},

// ═══ L8: Révision Unit 6 ═══
{id:"fre6l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 6 Review",desc:"Review rooms, furniture, il y a, prepositions, housing vocabulary, and chez. Combine everything to describe homes fluently.",goals:["Review all room and furniture vocabulary","Test il y a in all forms","Combine prepositions with descriptions"]},

  {type:"mc",q:"'La salle de bains' is:",opts:["The kitchen","The living room","The bathroom","The bedroom"],ans:"The bathroom",hint:"This room's name literally means 'room of baths'."},

  {type:"fb",s:"Le chat dort ___ le lit.",a:"sous",opts:["sous","sur","dans","devant"],hint:"The cat sleeps UNDER the bed. Which preposition?"},

  {type:"match",pairs:[{nl:"la cuisine",en:"the kitchen"},{nl:"le salon",en:"the living room"},{nl:"la chambre",en:"the bedroom"},{nl:"le couloir",en:"the hallway"}]},

  {type:"mc",q:"'Il n'y a pas de jardin' means:",opts:["The garden is big","There is a garden","There is no garden","The garden is behind"],ans:"There is no garden",hint:"Il n'y a pas de = there is no. Negation of existence."},

  {type:"fb",s:"L'étagère est ___ côté du bureau.",a:"à",opts:["à","en","de","du"],hint:"Next to: ___ côté de. First word of this preposition."},

  {type:"mc",q:"Which is correct?",opts:["Chez moi est grand","C'est grand chez moi","Grand chez moi c'est","Moi chez est grand"],ans:"C'est grand chez moi",hint:"C'est + adjective + location. Standard description pattern."},

  {type:"fb",s:"Viens ___ moi, on regarde un film!",a:"chez",opts:["chez","dans","à","sur"],hint:"Come to my place. Which preposition means 'to/at someone's home'?"},

  {type:"match",pairs:[{nl:"le lit",en:"the bed"},{nl:"le canapé",en:"the sofa"},{nl:"l'armoire",en:"the wardrobe"},{nl:"le frigo",en:"the fridge"}]},

  {type:"mc",q:"'Combien de pièces?' asks about:",opts:["The price","The number of rooms","The floor level","The neighborhood"],ans:"The number of rooms",hint:"Combien de = how many. Pièces = rooms."},

  {type:"fb",s:"Est-ce qu'il y a ___ balcon?",a:"un",opts:["un","le","de","du"],hint:"Is there A balcony? Indefinite article in a question."},

  {type:"mc",q:"In French, the ground floor is called:",opts:["Le premier étage","Le zéro étage","Le rez-de-chaussée","Le sous-sol"],ans:"Le rez-de-chaussée",hint:"This compound word means 'level of the street'."},

  {type:"fb",s:"Il y a une table ___ la cuisine.",a:"dans",opts:["dans","sur","sous","chez"],hint:"There is a table IN the kitchen. Which preposition?"},

  {type:"mc",q:"'Chez le docteur' means:",opts:["The doctor's house","At the doctor's (office)","Near the doctor","Behind the doctor"],ans:"At the doctor's (office)",hint:"Chez + professional = at their place of work."},

  {type:"fb",s:"L'appartement est ___ et calme.",a:"lumineux",opts:["lumineux","sombre","petit","vieux"],hint:"Bright and quiet. Which adjective means well-lit?"},

  {type:"match",pairs:[{nl:"dans",en:"in / inside"},{nl:"sur",en:"on top of"},{nl:"sous",en:"under"},{nl:"derrière",en:"behind"}]},

  {type:"mc",q:"'Je cherche un T3' means I'm looking for:",opts:["A three-floor house","A three-room apartment","Three apartments","A third-floor studio"],ans:"A three-room apartment",hint:"T + number = number of main rooms in French housing."},

  {type:"fb",s:"Le jardin est ___ la maison.",a:"derrière",opts:["derrière","dans","sur","chez"],hint:"The garden is BEHIND the house. At the back."},
]},
]},

// ═══════════════════════════════════════════════
//  UNIT 7 — En ville
//  Level: A1.7 | Lessons: 8 | Track: v1
// ═══════════════════════════════════════════════

{n:7,lang:"fr",track:"v1",title:"En ville",sub:"Directions & Transport",icon:"🗺️",level:"A1.7",color:"#7B5EE8",lessons:[

// ═══ L1: Les lieux en ville ═══
{id:"fre7l1",title:"Les lieux en ville",icon:"🏪",xp:15,board:true,steps:[
  {type:"intro",title:"Les lieux en ville",desc:"Learn the key places you find in a French town. Every place has a gender and uses a specific preposition (à la, au, à l').",goals:["Name 8 common city places","Use correct articles","Know basic prepositions for places"]},

  {type:"teach",kind:"word",nl:"la boulangerie",en:"the bakery",phonetic:"lah boo-lahnzh-REE",example:"A: Où est la boulangerie?\nB: Au coin de la rue.\nA: Ils ont des croissants?",exampleEn:"A: Where is the bakery?\nB: On the corner of the street.\nA: Do they have croissants?",note:"Feminine. French people visit daily.\nle boulanger / la boulangère = baker."},

  {type:"teach",kind:"word",nl:"la pharmacie",en:"the pharmacy",phonetic:"lah far-mah-SEE",example:"A: Je suis malade.\nB: Va à la pharmacie!\nA: Bonne idée.",exampleEn:"A: I'm sick.\nB: Go to the pharmacy!\nA: Good idea.",note:"Feminine. Green cross sign.\nPharmacies also give medical advice in France."},

  {type:"teach",kind:"word",nl:"le supermarché",en:"the supermarket",phonetic:"luh sew-pehr-mar-SHAY",example:"A: Il faut acheter du pain.\nB: On va au supermarché?\nA: Ou à la boulangerie!",exampleEn:"A: We need to buy bread.\nB: Shall we go to the supermarket?\nA: Or to the bakery!",note:"Masculine. Au supermarché = to/at the supermarket.\nAu = à + le (contraction)."},

  {type:"teach",kind:"word",nl:"la gare",en:"the train station",phonetic:"lah GAHR",example:"A: Le train part à quelle heure?\nB: À dix heures, à la gare du Nord.\nA: On y va!",exampleEn:"A: What time does the train leave?\nB: At ten, at Gare du Nord.\nA: Let's go!",note:"Feminine. À la gare = at the station.\nLa gare routière = bus station."},

  {type:"teach",kind:"word",nl:"l'hôpital",en:"the hospital",phonetic:"loh-pee-TAL",example:"A: C'est urgent!\nB: On va à l'hôpital.\nA: Vite!",exampleEn:"A: It's urgent!\nB: We're going to the hospital.\nA: Hurry!",note:"Masculine (un hôpital). Elided article.\nÀ l'hôpital = at/to the hospital."},

  {type:"teach",kind:"word",nl:"la poste",en:"the post office",phonetic:"lah POST",example:"A: Je dois envoyer une lettre.\nB: La poste est dans la rue principale.\nA: Elle ferme à quelle heure?",exampleEn:"A: I need to send a letter.\nB: The post office is on the main street.\nA: What time does it close?",note:"Feminine. À la poste = at the post office.\nAlso: le bureau de poste."},

  {type:"teach",kind:"word",nl:"le parc",en:"the park",phonetic:"luh PARK",example:"A: Il fait beau aujourd'hui!\nB: On va au parc?\nA: Oui, les enfants adorent le parc.",exampleEn:"A: The weather is nice today!\nB: Shall we go to the park?\nA: Yes, the kids love the park.",note:"Masculine. Au parc = to/at the park.\nCognate with English."},

  {type:"teach",kind:"word",nl:"la banque",en:"the bank",phonetic:"lah BAHNK",example:"A: Je dois retirer de l'argent.\nB: Il y a une banque en face.\nA: Parfait, merci!",exampleEn:"A: I need to withdraw money.\nB: There is a bank across the street.\nA: Perfect, thanks!",note:"Feminine. À la banque = at the bank.\nCognate with English."},

  {type:"tip",title:"À + article contractions",text:"Going TO a place: à + article\n\nà + le = au (masculine)\nà + la = à la (feminine, no change)\nà + l' = à l' (before vowel)\nà + les = aux (plural)\n\nJe vais AU supermarché.\nJe vais À LA boulangerie.\nJe vais À L'hôpital.\nJe vais AUX toilettes."},

  {type:"match",pairs:[{nl:"la boulangerie",en:"the bakery"},{nl:"la pharmacie",en:"the pharmacy"},{nl:"le supermarché",en:"the supermarket"},{nl:"la gare",en:"the train station"}]},

  {type:"mc",q:"'Au supermarché' is a contraction of:",opts:["À le supermarché","À la supermarché","De le supermarché","À les supermarché"],ans:"À le supermarché",hint:"Au always comes from à + a masculine article."},

  {type:"fb",s:"Je vais ___ boulangerie acheter du pain.",a:"à la",opts:["à la","au","à l'","aux"],hint:"Boulangerie is feminine. No contraction with feminine."},

  {type:"match",pairs:[{nl:"l'hôpital",en:"the hospital"},{nl:"la poste",en:"the post office"},{nl:"le parc",en:"the park"},{nl:"la banque",en:"the bank"}]},

  {type:"mc",q:"'L'hôpital' uses l' because:",opts:["It is feminine","It starts with a vowel sound","It is plural","It is informal"],ans:"It starts with a vowel sound",hint:"The h is silent, so le becomes l' before the vowel sound."},

  {type:"fb",s:"On va ___ parc cet après-midi.",a:"au",opts:["au","à la","à l'","aux"],hint:"Parc is masculine. À + le = ?"},

  {type:"mc",q:"Where do you buy bread daily in France?",opts:["Au supermarché","À la banque","À la boulangerie","À la pharmacie"],ans:"À la boulangerie",hint:"This shop is visited daily by many French people."},

  {type:"fb",s:"Il y a ___ pharmacie à côté de la poste.",a:"une",opts:["une","un","la","le"],hint:"There is A pharmacy. Indefinite, feminine article."},
]},

// ═══ L2: Aller + à ═══
{id:"fre7l2",title:"Aller + à",icon:"🚶",xp:15,board:true,steps:[
  {type:"intro",title:"Aller + à: going places",desc:"The verb 'aller' (to go) is irregular but essential. Combined with 'à', it lets you say where you're going.",goals:["Conjugate aller in present tense","Combine aller + à/au/à la","Say where you are going"]},

  {type:"teach",kind:"word",nl:"aller",en:"to go",phonetic:"ah-LAY",example:"A: Tu vas où?\nB: Je vais au travail.\nA: À pied ou en bus?",exampleEn:"A: Where are you going?\nB: I'm going to work.\nA: On foot or by bus?",note:"Irregular verb. One of the most used.\nje vais, tu vas, il/elle va,\nnous allons, vous allez, ils/elles vont."},

  {type:"tip",title:"Aller: full conjugation",text:"je vais = I go\ntu vas = you go (informal)\nil/elle/on va = he/she/one goes\nnous allons = we go\nvous allez = you go (formal/plural)\nils/elles vont = they go\n\nAll forms are irregular.\nAllez is also used for 'let's go!': Allez!"},

  {type:"teach",kind:"phrase",nl:"je vais au travail",en:"I'm going to work",phonetic:"zhuh vay oh trah-VAHY",example:"A: Tu pars déjà?\nB: Oui, je vais au travail.\nA: Bonne journée!",exampleEn:"A: Are you leaving already?\nB: Yes, I'm going to work.\nA: Have a good day!",note:"Aller + au (masculine place).\nAu travail = to work."},

  {type:"teach",kind:"phrase",nl:"venir de",en:"to come from",phonetic:"vuh-NEER duh",example:"A: Tu viens d'où?\nB: Je viens de la gare.\nA: Le train était à l'heure?",exampleEn:"A: Where are you coming from?\nB: I'm coming from the station.\nA: Was the train on time?",note:"Venir = to come (irregular).\nje viens, tu viens, il vient,\nnous venons, vous venez, ils viennent.\nDe + le = du. De + la = de la."},

  {type:"mc",q:"The 'ils' form of aller is:",opts:["Vont","Allent","Vais","Allez"],ans:"Vont",hint:"All forms of this verb are irregular. The plural they form starts with v."},

  {type:"fb",s:"Nous ___ au cinéma ce soir.",a:"allons",opts:["allons","allez","allent","vont"],hint:"We go: nous + which form of aller?"},

  {type:"match",pairs:[{nl:"je vais",en:"I go"},{nl:"tu vas",en:"you go"},{nl:"il va",en:"he goes"},{nl:"nous allons",en:"we go"}]},

  {type:"mc",q:"'Elle va à la poste' means:",opts:["She comes from the post office","She is at the post office","She is going to the post office","She works at the post office"],ans:"She is going to the post office",hint:"Va = goes. À la = to the (feminine place)."},

  {type:"fb",s:"Tu ___ où ce matin?",a:"vas",opts:["vas","vais","va","allez"],hint:"You go (informal): tu + which form?"},

  {type:"mc",q:"'Je viens de la gare' means:",opts:["I'm going to the station","I'm coming from the station","I live at the station","I work at the station"],ans:"I'm coming from the station",hint:"Venir de = to come FROM a place."},

  {type:"fb",s:"Ils ___ au supermarché tous les samedis.",a:"vont",opts:["vont","allons","allez","va"],hint:"They go: ils + which irregular form?"},

  {type:"match",pairs:[{nl:"vous allez",en:"you go (formal)"},{nl:"ils vont",en:"they go (m.)"},{nl:"elles vont",en:"they go (f.)"},{nl:"on va",en:"one goes / we go"}]},

  {type:"mc",q:"'Venir de + le' contracts to:",opts:["Venir de le","Venir du","Venir del","Venir des"],ans:"Venir du",hint:"De + le always contracts to a two-letter word."},

  {type:"fb",s:"Elle vient ___ la pharmacie.",a:"de",opts:["de","du","à","au"],hint:"She comes from the pharmacy. Feminine: no contraction."},

  {type:"mc",q:"'On va au cinéma?' is an invitation meaning:",opts:["The cinema is open","Shall we go to the cinema?","I came from the cinema","The cinema is far"],ans:"Shall we go to the cinema?",hint:"On va + place = shall we go to / let's go to."},

  {type:"fb",s:"Vous ___ à l'hôpital?",a:"allez",opts:["allez","allons","vont","vas"],hint:"You (formal/plural) go: vous + which form?"},

  {type:"mc",q:"'On va au cinéma' uses 'on' which conjugates like:",opts:["Je","Tu","Il/elle","Nous"],ans:"Il/elle",hint:"On takes third person singular, same as he/she."},
]},

// ═══ L3: Les transports ═══
{id:"fre7l3",title:"Les transports",icon:"🚌",xp:15,board:true,steps:[
  {type:"intro",title:"Les transports",desc:"Learn how to talk about transportation in French. Each mode of transport uses a specific preposition: en, à, or par.",goals:["Name common modes of transport","Use en/à for transport","Talk about how you travel"]},

  {type:"teach",kind:"word",nl:"le bus",en:"the bus",phonetic:"luh BEWS",example:"A: Tu prends le bus?\nB: Oui, le bus numéro 5.\nA: Il passe toutes les dix minutes.",exampleEn:"A: Do you take the bus?\nB: Yes, bus number 5.\nA: It comes every ten minutes.",note:"Masculine. En bus = by bus.\nPrendre le bus = to take the bus."},

  {type:"teach",kind:"word",nl:"le métro",en:"the metro / subway",phonetic:"luh may-TROH",example:"A: Comment tu vas au travail?\nB: En métro, c'est rapide.\nA: Quelle ligne?",exampleEn:"A: How do you get to work?\nB: By metro, it's fast.\nA: Which line?",note:"Masculine. En métro = by metro.\nParis has 16 metro lines."},

  {type:"teach",kind:"word",nl:"le train",en:"the train",phonetic:"luh TRAN",example:"A: On prend le train pour Lyon?\nB: Oui, le TGV est rapide.\nA: Combien de temps?",exampleEn:"A: Shall we take the train to Lyon?\nB: Yes, the TGV is fast.\nA: How long?",note:"Masculine. En train = by train.\nTGV = Train à Grande Vitesse (high-speed)."},

  {type:"teach",kind:"word",nl:"le vélo",en:"the bicycle",phonetic:"luh vay-LOH",example:"A: Tu fais du vélo?\nB: Oui, je vais au travail à vélo.\nA: C'est bon pour la santé!",exampleEn:"A: Do you cycle?\nB: Yes, I go to work by bike.\nA: It's good for your health!",note:"Masculine. À vélo = by bike.\nNote: en voiture BUT à vélo/à pied."},

  {type:"teach",kind:"phrase",nl:"à pied",en:"on foot / walking",phonetic:"ah pee-AY",example:"A: La boulangerie est loin?\nB: Non, cinq minutes à pied.\nA: Parfait, j'y vais à pied.",exampleEn:"A: Is the bakery far?\nB: No, five minutes on foot.\nA: Perfect, I'll walk.",note:"On foot, by walking.\nAlways à pied, never en pied."},

  {type:"teach",kind:"word",nl:"la voiture",en:"the car",phonetic:"lah vwah-TEWR",example:"A: On y va comment?\nB: En voiture, c'est plus rapide.\nA: D'accord, tu conduis!",exampleEn:"A: How do we get there?\nB: By car, it's faster.\nA: OK, you drive!",note:"Feminine. En voiture = by car.\nConduire = to drive."},

  {type:"tip",title:"Transport prepositions",text:"EN + enclosed vehicle:\nen bus, en train, en métro, en voiture, en avion\n\nÀ + open/body transport:\nà pied (on foot), à vélo (by bike)\n\nThis is the rule: if you're INSIDE it, use en.\nIf you're ON it or using your body, use à."},

  {type:"match",pairs:[{nl:"le bus",en:"the bus"},{nl:"le métro",en:"the metro"},{nl:"le train",en:"the train"},{nl:"la voiture",en:"the car"}]},

  {type:"mc",q:"You use 'en' for transport when you are:",opts:["Walking","On a bicycle","Inside the vehicle","Running"],ans:"Inside the vehicle",hint:"En = enclosed. If you sit inside, use this preposition."},

  {type:"fb",s:"Je vais au travail ___ métro.",a:"en",opts:["en","à","par","dans"],hint:"Metro is an enclosed vehicle. Which preposition?"},

  {type:"mc",q:"'À vélo' uses 'à' because:",opts:["Vélo is masculine","You sit on it, not inside it","It is fast","It is small"],ans:"You sit on it, not inside it",hint:"Open/body-powered transport uses a different preposition than enclosed vehicles."},

  {type:"fb",s:"La gare est à cinq minutes ___ pied.",a:"à",opts:["à","en","de","par"],hint:"On foot always uses this short preposition."},

  {type:"match",pairs:[{nl:"en voiture",en:"by car"},{nl:"en bus",en:"by bus"},{nl:"à vélo",en:"by bike"},{nl:"à pied",en:"on foot"}]},

  {type:"mc",q:"'Prendre le bus' means:",opts:["To buy a bus","To drive a bus","To take the bus","To wait for the bus"],ans:"To take the bus",hint:"Prendre + transport = to take that mode of transport."},

  {type:"fb",s:"Elle va à l'école ___ voiture.",a:"en",opts:["en","à","par","dans"],hint:"Car is enclosed. Which transport preposition?"},

  {type:"mc",q:"The TGV is France's:",opts:["City bus system","Metro line","High-speed train","Highway"],ans:"High-speed train",hint:"Train à Grande Vitesse. France is famous for this rail network."},

  {type:"fb",s:"Nous prenons ___ train pour aller à Lyon.",a:"le",opts:["le","la","un","en"],hint:"We take THE train. Which masculine definite article?"},
]},

// ═══ L4: Demander son chemin ═══
{id:"fre7l4",title:"Demander son chemin",icon:"🧭",xp:15,board:true,steps:[
  {type:"intro",title:"Demander son chemin: asking for directions",desc:"Learn to ask for and give directions in French. This is one of the most practical survival skills for any traveler.",goals:["Ask where something is","Understand basic direction words","Give simple directions"]},

  {type:"teach",kind:"phrase",nl:"Où est...?",en:"Where is...?",phonetic:"oo AY",example:"A: Excusez-moi, où est la gare?\nB: Tout droit, puis à gauche.\nA: Merci beaucoup!",exampleEn:"A: Excuse me, where is the station?\nB: Straight ahead, then left.\nA: Thank you very much!",note:"The basic question for directions.\nOù est + la/le/l' + place."},

  {type:"teach",kind:"phrase",nl:"tout droit",en:"straight ahead",phonetic:"too DRWAH",example:"A: Pour aller à la poste?\nB: Continuez tout droit.\nA: C'est loin?",exampleEn:"A: How do I get to the post office?\nB: Continue straight ahead.\nA: Is it far?",note:"Literally: all straight.\nThe most common direction instruction."},

  {type:"teach",kind:"phrase",nl:"à gauche",en:"to the left",phonetic:"ah GOHSH",example:"A: Je tourne où?\nB: À gauche, après le feu.\nA: Le feu rouge?",exampleEn:"A: Where do I turn?\nB: Left, after the traffic light.\nA: The red light?",note:"Left. Tournez à gauche = turn left.\nLe feu = traffic light."},

  {type:"teach",kind:"phrase",nl:"à droite",en:"to the right",phonetic:"ah DRWAHT",example:"A: Et ensuite?\nB: Tournez à droite.\nA: D'accord.",exampleEn:"A: And then?\nB: Turn right.\nA: OK.",note:"Right. Tournez à droite = turn right.\nDroite also means 'straight' in other contexts."},

  {type:"teach",kind:"phrase",nl:"tournez",en:"turn (formal command)",phonetic:"toor-NAY",example:"A: Pour aller à la banque?\nB: Tournez à droite au carrefour.\nA: Au premier carrefour?",exampleEn:"A: How do I get to the bank?\nB: Turn right at the intersection.\nA: At the first intersection?",note:"Imperative (command) form of tourner.\nVous form: tournez. Tu form: tourne."},

  {type:"teach",kind:"phrase",nl:"continuez",en:"continue (formal command)",phonetic:"kon-tee-new-AY",example:"A: C'est loin d'ici?\nB: Non, continuez tout droit, c'est à deux minutes.\nA: Super, merci!",exampleEn:"A: Is it far from here?\nB: No, continue straight, it's two minutes away.\nA: Great, thanks!",note:"Imperative of continuer.\nContinuez tout droit = keep going straight."},

  {type:"teach",kind:"phrase",nl:"en face de",en:"across from / opposite",phonetic:"ahn fas duh",example:"A: La pharmacie est où?\nB: En face de la boulangerie.\nA: Ah oui, je la vois!",exampleEn:"A: Where is the pharmacy?\nB: Across from the bakery.\nA: Oh yes, I see it!",note:"Directly opposite.\nYou learned this in Unit 6 for rooms.\nSame usage for city locations."},

  {type:"teach",kind:"phrase",nl:"à côté de",en:"next to",phonetic:"ah koh-TAY duh",example:"A: Le parc est où?\nB: À côté de l'école.\nA: Merci!",exampleEn:"A: Where is the park?\nB: Next to the school.\nA: Thanks!",note:"Right beside. Reviewed from Unit 6.\nÀ côté du = à côté de + le."},

  {type:"match",pairs:[{nl:"tout droit",en:"straight ahead"},{nl:"à gauche",en:"to the left"},{nl:"à droite",en:"to the right"},{nl:"tournez",en:"turn"}]},

  {type:"mc",q:"'Tournez à gauche' means:",opts:["Go straight","Turn left","Turn right","Go back"],ans:"Turn left",hint:"Gauche = left side. Tournez = turn command."},

  {type:"fb",s:"Excusez-moi, ___ est la gare?",a:"où",opts:["où","qui","quand","comment"],hint:"The question word for location: ___?"},

  {type:"mc",q:"To tell someone to keep going forward, you say:",opts:["Tournez à gauche","Revenez","Continuez tout droit","Arrêtez"],ans:"Continuez tout droit",hint:"Continue + the phrase meaning 'straight ahead'."},

  {type:"fb",s:"La banque est ___ face de la poste.",a:"en",opts:["en","à","de","au"],hint:"Across from: ___ face de. First word of this preposition."},

  {type:"match",pairs:[{nl:"continuez",en:"continue"},{nl:"en face de",en:"across from"},{nl:"à côté de",en:"next to"},{nl:"Où est...?",en:"Where is...?"}]},

  {type:"mc",q:"Which gives directions to go right then straight?",opts:["Tout droit puis à gauche","À droite puis tout droit","En face puis à côté","À gauche puis à droite"],ans:"À droite puis tout droit",hint:"First right, then the phrase for straight ahead."},

  {type:"fb",s:"___ à droite au carrefour. (Turn)",a:"Tournez",opts:["Tournez","Continuez","Allez","Prenez"],hint:"The formal command form of 'to turn'."},

  {type:"mc",q:"'C'est à cinq minutes à pied' means:",opts:["It costs five minutes","It opens at five","It's five minutes away on foot","It closes at five"],ans:"It's five minutes away on foot",hint:"C'est à + time + à pied = distance by walking."},
]},

// ═══ L5: L'impératif ═══
{id:"fre7l5",title:"L'impératif",icon:"📢",xp:15,board:true,steps:[
  {type:"intro",title:"L'impératif: giving commands",desc:"The imperative is the command form. French uses three forms: tu (informal), vous (formal), and nous (let's). For -er verbs, the tu form drops the final -s.",goals:["Form commands with tu, vous, nous","Know the -er verb tu exception","Use imperative for directions and instructions"]},

  {type:"tip",title:"Imperative formation",text:"For most verbs, imperative = present tense without the subject:\n\nTu form: Regarde! (Look!) Note: -er verbs DROP the -s.\nVous form: Regardez! (Look!)\nNous form: Regardons! (Let's look!)\n\nImportant: -er tu form: tu regardes -> Regarde!\n(Not Regardes. The -s is dropped.)"},

  {type:"teach",kind:"phrase",nl:"Regarde!",en:"Look! (informal)",phonetic:"ruh-GARD",example:"A: Regarde cette maison!\nB: Elle est magnifique!\nA: Oui, avec un grand jardin.",exampleEn:"A: Look at that house!\nB: It's magnificent!\nA: Yes, with a big garden.",note:"Tu imperative of regarder.\n-er verb: the -s from tu regardes is dropped."},

  {type:"teach",kind:"phrase",nl:"Prenez la première rue",en:"Take the first street (formal)",phonetic:"pruh-NAY lah pruh-mee-EHR rew",example:"A: Pour aller au parc?\nB: Prenez la première rue à gauche.\nA: Merci!",exampleEn:"A: How do I get to the park?\nB: Take the first street on the left.\nA: Thanks!",note:"Vous imperative of prendre.\nPrendre is irregular: prenez."},

  {type:"teach",kind:"phrase",nl:"Allons-y!",en:"Let's go!",phonetic:"ah-LON-zee",example:"A: Tout le monde est prêt?\nB: Oui!\nA: Allons-y!",exampleEn:"A: Is everyone ready?\nB: Yes!\nA: Let's go!",note:"Nous imperative of aller + y (there).\nVery common expression.\nAllez-y! = Go ahead! (vous form)."},

  {type:"teach",kind:"phrase",nl:"Ne tourne pas!",en:"Don't turn! (informal)",phonetic:"nuh TOORN pah",example:"A: Je tourne ici?\nB: Non, ne tourne pas! Continue tout droit.\nA: D'accord.",exampleEn:"A: Do I turn here?\nB: No, don't turn! Keep going straight.\nA: OK.",note:"Negative imperative: ne + verb + pas.\nSame ne...pas sandwich as statements."},

  {type:"mc",q:"For -er verbs, the tu imperative:",opts:["Adds an -s","Drops the -s","Stays the same","Adds -ez"],ans:"Drops the -s",hint:"Tu regardes -> Regarde! Something is removed."},

  {type:"fb",s:"___ la deuxième rue à droite. (Take, formal)",a:"Prenez",opts:["Prenez","Prends","Prend","Prennent"],hint:"Formal/vous command of prendre."},

  {type:"mc",q:"'Allons-y!' means:",opts:["Go away!","Let's go!","I'm going!","You go!"],ans:"Let's go!",hint:"Nous imperative = let's. Y = there."},

  {type:"match",pairs:[{nl:"Regarde!",en:"Look! (informal)"},{nl:"Regardez!",en:"Look! (formal)"},{nl:"Regardons!",en:"Let's look!"},{nl:"Ne regarde pas!",en:"Don't look!"}]},

  {type:"fb",s:"___ tout droit! (Continue, informal)",a:"Continue",opts:["Continue","Continues","Continuez","Continuons"],hint:"Informal command: keep going straight. -er verbs: no -s in tu form."},

  {type:"mc",q:"The negative imperative 'Ne tournez pas' means:",opts:["Turn now","Don't turn","Turn left","Let's turn"],ans:"Don't turn",hint:"Ne...pas wraps around the verb in commands too."},

  {type:"fb",s:"___-y! (Let's go)",a:"Allons",opts:["Allons","Allez","Allent","Va"],hint:"Nous form of aller, before -y."},

  {type:"match",pairs:[{nl:"Tournez!",en:"Turn! (formal)"},{nl:"Continuez!",en:"Continue!"},{nl:"Prenez!",en:"Take!"},{nl:"Allez!",en:"Go!"}]},

  {type:"mc",q:"'Mange ta soupe!' is in which imperative form?",opts:["Tu","Vous","Nous","Il"],ans:"Tu",hint:"Mange (not manges) with -s dropped. Who is being addressed?"},

  {type:"fb",s:"Ne ___ pas à gauche, va tout droit!",a:"tourne",opts:["tourne","tournes","tournez","tournons"],hint:"Negative informal command: don't change direction! No -s in this form."},

  {type:"mc",q:"Which is correct formal imperative?",opts:["Regardes la carte!","Regarde la carte!","Regardez la carte!","Regardons la carte!"],ans:"Regardez la carte!",hint:"Formal commands use the vous form of the verb."},

  {type:"fb",s:"___ du café! (Let's have / drink)",a:"Prenons",opts:["Prenons","Prenez","Prends","Prend"],hint:"Let's have: nous imperative of prendre."},
]},

// ═══ L6: Se déplacer en ville ═══
{id:"fre7l6",title:"Se déplacer en ville",icon:"🚏",xp:15,board:true,steps:[
  {type:"intro",title:"Se déplacer en ville: getting around",desc:"Combine transport, directions, and places to navigate a French city. Practice buying tickets, asking for help, and describing routes.",goals:["Buy transport tickets","Combine directions with transport","Navigate practical city scenarios"]},

  {type:"teach",kind:"phrase",nl:"un billet",en:"a ticket",phonetic:"uhn bee-YAY",example:"A: Un billet pour Lyon, s'il vous plaît.\nB: Aller simple ou aller-retour?\nA: Aller-retour.",exampleEn:"A: A ticket to Lyon, please.\nB: One way or round trip?\nA: Round trip.",note:"Masculine. For trains and long-distance.\nUn ticket = for metro/bus."},

  {type:"teach",kind:"phrase",nl:"un aller-retour",en:"a round trip (ticket)",phonetic:"uhn ah-LAY ruh-TOOR",example:"A: Un aller-retour pour Marseille.\nB: En première ou deuxième classe?\nA: Deuxième classe.",exampleEn:"A: A round trip to Marseille.\nB: First or second class?\nA: Second class.",note:"Round trip ticket.\nUn aller simple = one-way ticket."},

  {type:"teach",kind:"phrase",nl:"C'est loin?",en:"Is it far?",phonetic:"say LWAN",example:"A: C'est loin, la gare?\nB: Non, à dix minutes en bus.\nA: Quel bus?",exampleEn:"A: Is the station far?\nB: No, ten minutes by bus.\nA: Which bus?",note:"Essential question for navigation.\nLoin = far. Près = near."},

  {type:"teach",kind:"word",nl:"la rue",en:"the street",phonetic:"lah REW",example:"A: C'est dans quelle rue?\nB: Rue Victor Hugo.\nA: Je connais cette rue.",exampleEn:"A: On which street is it?\nB: Victor Hugo Street.\nA: I know that street.",note:"Feminine. La rue = the street.\nFrench streets are named after famous people."},

  {type:"teach",kind:"word",nl:"le carrefour",en:"the intersection / crossroads",phonetic:"luh kar-FOOR",example:"A: Je tourne où?\nB: Au prochain carrefour.\nA: À gauche ou à droite?",exampleEn:"A: Where do I turn?\nB: At the next intersection.\nA: Left or right?",note:"Masculine. Where streets cross.\nAlso the name of a supermarket chain."},

  {type:"mc",q:"'Un aller-retour' is:",opts:["A one-way ticket","A round trip ticket","A bus pass","A platform number"],ans:"A round trip ticket",hint:"Aller = go, retour = return. Both directions."},

  {type:"fb",s:"Un ___ pour Paris, s'il vous plaît.",a:"billet",opts:["billet","ticket","carte","voyage"],hint:"A ___ for Paris. The word for a train ticket."},

  {type:"match",pairs:[{nl:"un billet",en:"a ticket"},{nl:"un aller-retour",en:"a round trip"},{nl:"la rue",en:"the street"},{nl:"le carrefour",en:"the intersection"}]},

  {type:"mc",q:"'C'est loin?' asks about:",opts:["The time","The distance","The price","The name"],ans:"The distance",hint:"Loin = far. This question asks how far something is."},

  {type:"fb",s:"Tournez au prochain ___.",a:"carrefour",opts:["carrefour","rue","parc","gare"],hint:"Turn at the next intersection. Masculine noun."},

  {type:"mc",q:"For metro/bus you buy 'un ticket'. For trains you buy:",opts:["Un ticket","Un billet","Une carte","Un pass"],ans:"Un billet",hint:"Long-distance travel uses a different word than short-distance."},

  {type:"fb",s:"C'est ___, la boulangerie?",a:"loin",opts:["loin","près","ici","là"],hint:"Is the bakery far? Which word means 'far'?"},

  {type:"match",pairs:[{nl:"C'est loin?",en:"Is it far?"},{nl:"C'est près",en:"It's near"},{nl:"un aller simple",en:"a one-way ticket"},{nl:"la première rue",en:"the first street"}]},

  {type:"mc",q:"'Prenez la deuxième rue à gauche' means:",opts:["Take the second street on the left","Take the left bus","Turn right at the second light","Go straight on the second road"],ans:"Take the second street on the left",hint:"Deuxième = second. Rue = street. À gauche = on the left."},

  {type:"fb",s:"La pharmacie est dans la ___ principale.",a:"rue",opts:["rue","maison","pièce","gare"],hint:"The pharmacy is on the main ___. Feminine word for street."},

  {type:"mc",q:"If someone says 'C'est à cinq minutes à pied', you should:",opts:["Take the metro","Walk there","Drive there","Take the bus"],ans:"Walk there",hint:"Five minutes on foot is very close. No vehicle needed."},

  {type:"fb",s:"Je prends ___ bus numéro 12.",a:"le",opts:["le","la","un","en"],hint:"I take THE bus. Masculine definite article for a specific bus."},
]},

// ═══ L7: Explorer la ville ═══
{id:"fre7l7",title:"Explorer la ville",icon:"🏛️",xp:15,board:true,steps:[
  {type:"intro",title:"Explorer la ville",desc:"Put it all together: navigate a city, combine places with transport and directions. Build confidence for real-world French navigation.",goals:["Give multi-step directions","Combine all Unit 7 vocabulary","Handle complex navigation scenarios"]},

  {type:"teach",kind:"word",nl:"le musée",en:"the museum",phonetic:"luh mew-ZAY",example:"A: On visite le musée aujourd'hui?\nB: Oui, le Musée d'Orsay!\nA: J'adore l'impressionnisme.",exampleEn:"A: Shall we visit the museum today?\nB: Yes, the Musée d'Orsay!\nA: I love Impressionism.",note:"Masculine. Au musée = at/to the museum.\nFrance has world-famous museums."},

  {type:"teach",kind:"word",nl:"l'église",en:"the church",phonetic:"lay-GLEEZ",example:"A: Qu'est-ce que c'est, ce bâtiment?\nB: C'est une église.\nA: Elle est très ancienne.",exampleEn:"A: What is that building?\nB: It's a church.\nA: It's very old.",note:"Feminine (une église). Elided article.\nLa cathédrale = the cathedral."},

  {type:"teach",kind:"word",nl:"la place",en:"the square / plaza",phonetic:"lah PLAS",example:"A: On se retrouve où?\nB: Sur la place, devant la fontaine.\nA: À quelle heure?",exampleEn:"A: Where shall we meet?\nB: At the square, in front of the fountain.\nA: What time?",note:"Feminine. City square or plaza.\nLa Place de la Concorde, La Place du Marché."},

  {type:"teach",kind:"phrase",nl:"Pour aller à...?",en:"How do I get to...?",phonetic:"poor ah-LAY ah",example:"A: Pour aller au musée?\nB: Prenez le métro, ligne 12.\nA: Et après?",exampleEn:"A: How do I get to the museum?\nB: Take the metro, line 12.\nA: And then?",note:"Polite way to ask for directions.\nLiterally: In order to go to...?"},

  {type:"teach",kind:"phrase",nl:"C'est tout près",en:"It's very close / nearby",phonetic:"say too PREH",example:"A: C'est loin, le parc?\nB: Non, c'est tout près, à deux minutes.\nA: Parfait!",exampleEn:"A: Is the park far?\nB: No, it's very close, two minutes away.\nA: Perfect!",note:"Tout = very (intensifier here).\nPrès = near. Opposite: loin."},

  {type:"mc",q:"'Pour aller au musée?' is asking:",opts:["Where is the museum?","How do I get to the museum?","Is the museum open?","How much is the museum?"],ans:"How do I get to the museum?",hint:"Pour aller à = how to get to. A polite direction request."},

  {type:"fb",s:"Excusez-moi, pour aller ___ la place?",a:"à",opts:["à","au","de","en"],hint:"Place is feminine. À + la = no contraction."},

  {type:"match",pairs:[{nl:"le musée",en:"the museum"},{nl:"l'église",en:"the church"},{nl:"la place",en:"the square"},{nl:"C'est tout près",en:"It's very close"}]},

  {type:"mc",q:"Someone asks 'C'est loin?' and you answer 'Non, c'est tout près.' This means:",opts:["It's very far","It's quite far","It's very close","It's closed"],ans:"It's very close",hint:"Tout = very. Près = near/close. Combined?"},

  {type:"fb",s:"On visite ___ musée cet après-midi.",a:"le",opts:["le","la","un","au"],hint:"We're visiting THE museum. Masculine definite article."},

  {type:"mc",q:"Complete the directions: 'Continuez tout droit, puis ___ à gauche au carrefour.'",opts:["Allez","Tournez","Prenez","Regardez"],ans:"Tournez",hint:"After going straight, you need to change direction at the intersection."},

  {type:"fb",s:"L'église est ___ face du musée.",a:"en",opts:["en","à","de","au"],hint:"The church is across from the museum. First word of the preposition."},

  {type:"match",pairs:[{nl:"Pour aller à...?",en:"How do I get to...?"},{nl:"C'est loin?",en:"Is it far?"},{nl:"Tournez à droite",en:"Turn right"},{nl:"Tout droit",en:"Straight ahead"}]},

  {type:"mc",q:"Best way to say 'Take the metro to the museum':",opts:["Allons au métro au musée","Prenez le métro pour aller au musée","En métro dans le musée","Le métro va le musée"],ans:"Prenez le métro pour aller au musée",hint:"Take the metro + in order to go to + the museum."},

  {type:"fb",s:"La cathédrale est sur la ___ principale.",a:"place",opts:["place","rue","gare","maison"],hint:"The cathedral is on the main square. Feminine noun."},

  {type:"mc",q:"You need to explain: 'Go straight, turn right, the park is next to the church.' In French:",opts:["Tout droit, tournez à droite, le parc est à côté de l'église","À droite tout droit, l'église à côté le parc","Continuez à droite, tout droit le parc l'église","Tournez tout droit, à droite l'église du parc"],ans:"Tout droit, tournez à droite, le parc est à côté de l'église",hint:"Step by step: straight, turn right, then location description."},

  {type:"fb",s:"Pour aller ___ la gare, prenez le bus numéro 5.",a:"à",opts:["à","au","de","en"],hint:"To get to the station. Gare is feminine: à + la = no contraction."},
]},

// ═══ L8: Révision Unit 7 ═══
{id:"fre7l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 7 Review",desc:"Review all of Unit 7: city places, aller + à, transport, directions, imperative, and navigation. Get ready to explore any French city!",goals:["Review city vocabulary","Test transport prepositions","Combine directions fluently"]},

  {type:"mc",q:"'À la boulangerie' uses 'à la' because:",opts:["Boulangerie is masculine","Boulangerie is feminine","Boulangerie starts with a vowel","Boulangerie is plural"],ans:"Boulangerie is feminine",hint:"Feminine nouns keep à la (no contraction)."},

  {type:"fb",s:"Nous ___ au supermarché en voiture.",a:"allons",opts:["allons","allez","vont","va"],hint:"We go: nous + which form of aller?"},

  {type:"match",pairs:[{nl:"la boulangerie",en:"the bakery"},{nl:"la gare",en:"the station"},{nl:"la banque",en:"the bank"},{nl:"le supermarché",en:"the supermarket"}]},

  {type:"mc",q:"En bus, en train, en voiture. But:",opts:["En vélo","À vélo","Au vélo","Sur vélo"],ans:"À vélo",hint:"Open transport uses a different preposition than enclosed."},

  {type:"fb",s:"___ tout droit puis tournez à gauche.",a:"Continuez",opts:["Continuez","Tournez","Prenez","Allez"],hint:"Keep going forward. Formal command of continuer."},

  {type:"mc",q:"The -er verb tu imperative of 'manger' is:",opts:["Manges!","Mange!","Mangez!","Mangeons!"],ans:"Mange!",hint:"For -er verbs, the tu command drops something from the normal form."},

  {type:"fb",s:"C'est ___, le musée? Non, c'est tout près.",a:"loin",opts:["loin","près","ici","là"],hint:"Is the museum far? The question word for distance."},

  {type:"match",pairs:[{nl:"en bus",en:"by bus"},{nl:"à pied",en:"on foot"},{nl:"en voiture",en:"by car"},{nl:"à vélo",en:"by bike"}]},

  {type:"mc",q:"'Un aller-retour pour Marseille' is:",opts:["A one-way ticket","A round trip ticket","A bus pass","A city map"],ans:"A round trip ticket",hint:"Aller = go, retour = return. A ticket for both directions."},

  {type:"fb",s:"Pour aller ___ musée, prenez le métro.",a:"au",opts:["au","à la","à l'","aux"],hint:"Musée is masculine. À + le = ?"},

  {type:"mc",q:"'Allons-y!' means:",opts:["Let's go!","Go away!","Stop here!","Turn around!"],ans:"Let's go!",hint:"Nous imperative of aller + y (there)."},

  {type:"fb",s:"La pharmacie est en face ___ la poste.",a:"de",opts:["de","du","à","au"],hint:"Across from. Poste is feminine: no contraction with de."},

  {type:"match",pairs:[{nl:"tout droit",en:"straight ahead"},{nl:"à gauche",en:"to the left"},{nl:"à droite",en:"to the right"},{nl:"le carrefour",en:"the intersection"}]},

  {type:"mc",q:"'Prenez la première rue à droite' gives you:",opts:["A bus route","A walking direction","A metro line","A ticket price"],ans:"A walking direction",hint:"Take the first street on the right. This is navigation."},

  {type:"fb",s:"Il y a une banque ___ côté de l'hôpital.",a:"à",opts:["à","en","de","du"],hint:"Next to: ___ côté de. First word of this preposition."},

  {type:"mc",q:"To ask 'How do I get to the church?', say:",opts:["Où est l'église?","Pour aller à l'église?","C'est l'église?","L'église est loin?"],ans:"Pour aller à l'église?",hint:"Pour aller à = how to get to. The polite direction question."},

  {type:"fb",s:"On prend ___ bus ou le métro?",a:"le",opts:["le","la","en","un"],hint:"Shall we take THE bus? Definite masculine article."},
]},
]},

// ═══════════════════════════════════════════════
//  UNIT 8 — Les courses
//  Level: A1.8 | Lessons: 8 | Track: v1
// ═══════════════════════════════════════════════

{n:8,lang:"fr",track:"v1",title:"Les courses",sub:"Shopping & Clothing",icon:"🛍️",level:"A1.8",color:"#7B5EE8",lessons:[

// ═══ L1: Les vêtements ═══
{id:"fre8l1",title:"Les vêtements",icon:"👕",xp:15,board:true,steps:[
  {type:"intro",title:"Les vêtements: clothing",desc:"Learn the names of common clothing items in French. As always, every item has a gender. Pay attention to le/la/les.",goals:["Name 8 clothing items","Use correct articles","Describe what you're wearing"]},

  {type:"teach",kind:"word",nl:"une chemise",en:"a shirt (button-up)",phonetic:"ewn shuh-MEEZ",example:"A: Tu portes quoi demain?\nB: Une chemise blanche.\nA: Pour le travail?",exampleEn:"A: What are you wearing tomorrow?\nB: A white shirt.\nA: For work?",note:"Feminine. Button-up/dress shirt.\nUn tee-shirt = a T-shirt (casual)."},

  {type:"teach",kind:"word",nl:"un pantalon",en:"a pair of pants",phonetic:"uhn pahn-tah-LON",example:"A: Ce pantalon est trop grand!\nB: Tu fais quelle taille?\nA: Du 40.",exampleEn:"A: These pants are too big!\nB: What size are you?\nA: Size 40.",note:"Masculine. Always singular in French.\nUN pantalon (not des pantalons for one pair)."},

  {type:"teach",kind:"word",nl:"une robe",en:"a dress",phonetic:"ewn ROB",example:"A: Quelle jolie robe!\nB: Merci, je l'ai achetée hier.\nA: Elle te va très bien.",exampleEn:"A: What a pretty dress!\nB: Thanks, I bought it yesterday.\nA: It suits you very well.",note:"Feminine. Une robe = a dress.\nUne robe de soirée = an evening dress."},

  {type:"teach",kind:"word",nl:"des chaussures",en:"shoes",phonetic:"day shoh-SEWR",example:"A: J'ai besoin de chaussures.\nB: Des baskets ou des chaussures habillées?\nA: Des baskets.",exampleEn:"A: I need shoes.\nB: Sneakers or dress shoes?\nA: Sneakers.",note:"Feminine plural. Usually plural.\nDes baskets = sneakers.\nDes bottes = boots."},

  {type:"teach",kind:"word",nl:"un manteau",en:"a coat",phonetic:"uhn mahn-TOH",example:"A: Il fait froid, prends un manteau!\nB: Mon manteau noir?\nA: Oui, le noir.",exampleEn:"A: It's cold, take a coat!\nB: My black coat?\nA: Yes, the black one.",note:"Masculine. Plural: des manteaux.\nUne veste = a jacket (lighter)."},

  {type:"teach",kind:"word",nl:"une jupe",en:"a skirt",phonetic:"ewn ZHEWP",example:"A: Tu préfères la jupe ou le pantalon?\nB: La jupe, c'est plus élégant.\nA: Je suis d'accord.",exampleEn:"A: Do you prefer the skirt or the pants?\nB: The skirt, it's more elegant.\nA: I agree.",note:"Feminine. Une jupe courte = a short skirt.\nUne mini-jupe = a miniskirt."},

  {type:"teach",kind:"word",nl:"un chapeau",en:"a hat",phonetic:"uhn shah-POH",example:"A: Il fait soleil!\nB: Mets un chapeau.\nA: Bonne idée.",exampleEn:"A: It's sunny!\nB: Put on a hat.\nA: Good idea.",note:"Masculine. Plural: des chapeaux.\nUne casquette = a cap."},

  {type:"teach",kind:"phrase",nl:"porter",en:"to wear / to carry",phonetic:"por-TAY",example:"A: Qu'est-ce que tu portes?\nB: Je porte un pantalon et une chemise.\nA: C'est élégant!",exampleEn:"A: What are you wearing?\nB: I'm wearing pants and a shirt.\nA: That's elegant!",note:"Regular -er verb. Two meanings:\n1. To wear (clothing)\n2. To carry (objects)."},

  {type:"match",pairs:[{nl:"une chemise",en:"a shirt"},{nl:"un pantalon",en:"pants"},{nl:"une robe",en:"a dress"},{nl:"des chaussures",en:"shoes"}]},

  {type:"mc",q:"'Un pantalon' is singular in French even though English says 'pants' because:",opts:["French is wrong","It refers to one garment","It is plural","It is feminine"],ans:"It refers to one garment",hint:"French treats it as one item, using the singular article."},

  {type:"fb",s:"Elle porte ___ robe rouge.",a:"une",opts:["une","un","des","la"],hint:"She wears A red dress. Feminine indefinite article."},

  {type:"match",pairs:[{nl:"un manteau",en:"a coat"},{nl:"une jupe",en:"a skirt"},{nl:"un chapeau",en:"a hat"},{nl:"porter",en:"to wear"}]},

  {type:"mc",q:"'Je porte un manteau' means:",opts:["I buy a coat","I wear a coat","I find a coat","I wash a coat"],ans:"I wear a coat",hint:"Porter = to wear when talking about clothing."},

  {type:"fb",s:"Il fait froid, mets ___ manteau!",a:"un",opts:["un","une","le","la"],hint:"Put on A coat. Masculine indefinite article."},

  {type:"mc",q:"'Des chaussures' uses 'des' because:",opts:["One shoe","Always singular","Always plural (shoes come in pairs)","It is masculine"],ans:"Always plural (shoes come in pairs)",hint:"Shoes, like in English, are typically referred to in pairs."},

  {type:"fb",s:"Tu fais ___ taille? (What size are you?)",a:"quelle",opts:["quelle","quel","quelles","quels"],hint:"What size: ___ taille? Taille is feminine singular."},

  {type:"mc",q:"The plural of 'un chapeau' is:",opts:["Des chapeaus","Des chapeaux","Des chapeaues","Des chapeauz"],ans:"Des chapeaux",hint:"Words ending in -eau form their plural with -eaux."},
]},

// ═══ L2: Les couleurs ═══
{id:"fre8l2",title:"Les couleurs",icon:"🎨",xp:15,board:true,steps:[
  {type:"intro",title:"Les couleurs",desc:"Colors in French are adjectives that agree with the noun's gender. Most add -e for feminine, but some are invariable.",goals:["Name 8 common colors","Know masculine/feminine forms","Place colors after the noun"]},

  {type:"teach",kind:"word",nl:"rouge",en:"red",phonetic:"ROOZH",example:"A: Tu aimes cette robe?\nB: La rouge? Oui, elle est belle!\nA: Je la prends.",exampleEn:"A: Do you like this dress?\nB: The red one? Yes, it's beautiful!\nA: I'll take it.",note:"Same form for masculine and feminine.\nEnds in -e already, so no change needed."},

  {type:"teach",kind:"word",nl:"bleu / bleue",en:"blue",phonetic:"BLUH",example:"A: Le ciel est bleu aujourd'hui.\nB: Et la mer est bleue aussi!\nA: Parfait pour la plage.",exampleEn:"A: The sky is blue today.\nB: And the sea is blue too!\nA: Perfect for the beach.",note:"Masculine: bleu. Feminine: bleue.\nAdd -e for feminine."},

  {type:"teach",kind:"word",nl:"noir / noire",en:"black",phonetic:"NWAHR",example:"A: Tu portes toujours du noir.\nB: J'aime la couleur noire!\nA: C'est élégant.",exampleEn:"A: You always wear black.\nB: I like the color black!\nA: It's elegant.",note:"Masculine: noir. Feminine: noire.\nAdd -e for feminine."},

  {type:"teach",kind:"word",nl:"blanc / blanche",en:"white",phonetic:"BLAHN / BLAHNSH",example:"A: Une chemise blanche, s'il vous plaît.\nB: Quelle taille?\nA: Du 40.",exampleEn:"A: A white shirt, please.\nB: What size?\nA: Size 40.",note:"Masculine: blanc. Feminine: blanche.\nIrregular feminine form."},

  {type:"teach",kind:"word",nl:"vert / verte",en:"green",phonetic:"VEHR / VEHRT",example:"A: Tu aimes le vert?\nB: Oui, j'adore le vert!\nA: Un tee-shirt vert alors.",exampleEn:"A: Do you like green?\nB: Yes, I love green!\nA: A green T-shirt then.",note:"Masculine: vert (silent t).\nFeminine: verte (t is pronounced)."},

  {type:"teach",kind:"word",nl:"jaune",en:"yellow",phonetic:"ZHOHN",example:"A: Cette jupe jaune est jolie.\nB: Oui, le jaune te va bien.\nA: Je l'essaie.",exampleEn:"A: This yellow skirt is pretty.\nB: Yes, yellow suits you.\nA: I'll try it on.",note:"Same form for masculine and feminine.\nAlready ends in -e."},

  {type:"teach",kind:"word",nl:"gris / grise",en:"gray",phonetic:"GREE / GREEZ",example:"A: Il fait gris aujourd'hui.\nB: Oui, le ciel est tout gris.\nA: Typique!",exampleEn:"A: It's gray today.\nB: Yes, the sky is all gray.\nA: Typical!",note:"Masculine: gris. Feminine: grise.\nAlso means 'overcast' for weather."},

  {type:"teach",kind:"word",nl:"marron",en:"brown",phonetic:"mah-RON",example:"A: J'aime tes chaussures.\nB: Les marron? Merci!\nA: Elles sont neuves?",exampleEn:"A: I like your shoes.\nB: The brown ones? Thanks!\nA: Are they new?",note:"Invariable: never changes form.\nUne veste marron, des yeux marron.\nFrom the word for chestnut."},

  {type:"tip",title:"Color placement and agreement",text:"Colors go AFTER the noun in French:\nUne robe rouge (a red dress)\nUn pantalon noir (black pants)\n\nAgreement rules:\nMost: add -e for feminine, -s for plural\nSome: invariable (marron, orange)\nIrregular: blanc/blanche, long/longue\n\nEnds in -e already: no change (rouge, jaune)."},

  {type:"match",pairs:[{nl:"rouge",en:"red"},{nl:"bleu",en:"blue"},{nl:"noir",en:"black"},{nl:"blanc",en:"white"}]},

  {type:"mc",q:"Colors in French go:",opts:["Before the noun","After the noun","It doesn't matter","Before and after"],ans:"After the noun",hint:"Unlike English, French places most adjectives in this position."},

  {type:"fb",s:"Elle porte une jupe ___. (black, feminine)",a:"noire",opts:["noire","noir","noirs","noires"],hint:"Black + feminine singular = add -e to the masculine form."},

  {type:"match",pairs:[{nl:"vert",en:"green"},{nl:"jaune",en:"yellow"},{nl:"gris",en:"gray"},{nl:"marron",en:"brown"}]},

  {type:"mc",q:"'Marron' is invariable, meaning:",opts:["It changes for feminine","It never changes form","It only works with masculine","It has no plural"],ans:"It never changes form",hint:"Some colors derived from nouns never add -e or -s."},

  {type:"fb",s:"Un pantalon ___ et une chemise blanche.",a:"noir",opts:["noir","noire","noirs","noires"],hint:"Pantalon is masculine singular. No -e needed."},

  {type:"mc",q:"'Blanc' becomes ___ in feminine:",opts:["Blance","Blanche","Blanque","Blanc"],ans:"Blanche",hint:"This color has an irregular feminine form (not just adding -e)."},

  {type:"fb",s:"Des chaussures ___. (red, plural)",a:"rouges",opts:["rouges","rouge","rougee","rougees"],hint:"Red + plural. Rouge already has -e, just add -s."},
]},

// ═══ L3: Les nombres 20-100 ═══
{id:"fre8l3",title:"Les nombres 20-100",icon:"🔢",xp:15,board:true,steps:[
  {type:"intro",title:"Les nombres de 20 à 100",desc:"French numbers have quirks: 70 = soixante-dix (60+10), 80 = quatre-vingts (4x20), 90 = quatre-vingt-dix (4x20+10). This is the Belgian/Swiss system's rival!",goals:["Count from 20 to 100","Handle the 70/80/90 system","Use numbers for prices and addresses"]},

  {type:"teach",kind:"word",nl:"vingt",en:"twenty (20)",phonetic:"VAN",example:"A: Ça coûte combien?\nB: Vingt euros.\nA: D'accord, voilà.",exampleEn:"A: How much does it cost?\nB: Twenty euros.\nA: OK, here you go.",note:"20. Final -t is normally silent.\nBut: vingt et un (21), the t links."},

  {type:"teach",kind:"word",nl:"trente",en:"thirty (30)",phonetic:"TRAHNT",example:"A: Il y a combien d'élèves?\nB: Trente élèves dans la classe.\nA: C'est beaucoup!",exampleEn:"A: How many students are there?\nB: Thirty students in the class.\nA: That's a lot!",note:"30. Regular pattern.\n31 = trente et un.\n32 = trente-deux... etc."},

  {type:"teach",kind:"word",nl:"quarante",en:"forty (40)",phonetic:"kah-RAHNT",example:"A: Tu as quel âge?\nB: J'ai quarante ans.\nA: Tu ne les fais pas!",exampleEn:"A: How old are you?\nB: I'm forty.\nA: You don't look it!",note:"40. Regular pattern continues.\n41 = quarante et un.\n45 = quarante-cinq."},

  {type:"teach",kind:"word",nl:"cinquante",en:"fifty (50)",phonetic:"san-KAHNT",example:"A: Le loyer est de cinquante euros par semaine?\nB: Non, cinq cents euros par mois!\nA: Ah, c'est différent!",exampleEn:"A: The rent is fifty euros per week?\nB: No, five hundred euros per month!\nA: Ah, that's different!",note:"50. From cinq (5).\n51 = cinquante et un.\n55 = cinquante-cinq."},

  {type:"teach",kind:"word",nl:"soixante",en:"sixty (60)",phonetic:"swah-SAHNT",example:"A: Soixante euros pour cette chemise?\nB: C'est la qualité française!\nA: Bon, je la prends.",exampleEn:"A: Sixty euros for this shirt?\nB: That's French quality!\nA: Fine, I'll take it.",note:"60. From six.\n61 = soixante et un.\n69 = soixante-neuf."},

  {type:"tip",title:"The 70-80-90 system",text:"Here's where French gets creative:\n\n70 = soixante-dix (60 + 10)\n71 = soixante et onze (60 + 11)\n72 = soixante-douze (60 + 12)\n\n80 = quatre-vingts (4 x 20)\n81 = quatre-vingt-un (no 'et', no -s on vingts)\n\n90 = quatre-vingt-dix (4 x 20 + 10)\n91 = quatre-vingt-onze\n99 = quatre-vingt-dix-neuf\n\n100 = cent"},

  {type:"teach",kind:"word",nl:"soixante-dix",en:"seventy (70)",phonetic:"swah-sahnt-DEES",example:"A: Combien?\nB: Soixante-dix euros.\nA: Soixante plus dix, oui!",exampleEn:"A: How much?\nB: Seventy euros.\nA: Sixty plus ten, yes!",note:"70 = 60 + 10. This is the standard French system.\nBelgium/Switzerland say septante."},

  {type:"teach",kind:"word",nl:"quatre-vingts",en:"eighty (80)",phonetic:"KAH-truh VAN",example:"A: Mon grand-père a quatre-vingts ans.\nB: Quatre fois vingt!\nA: Il est en pleine forme.",exampleEn:"A: My grandfather is eighty.\nB: Four times twenty!\nA: He's in great shape.",note:"80 = 4 x 20. Note the -s on vingts.\nBut: 81 = quatre-vingt-un (no -s)."},

  {type:"teach",kind:"word",nl:"cent",en:"one hundred (100)",phonetic:"SAHN",example:"A: Ça fait cent euros.\nB: Cent euros! C'est cher.\nA: C'est la qualité.",exampleEn:"A: That comes to a hundred euros.\nB: A hundred euros! That's expensive.\nA: It's quality.",note:"100. No article needed.\nDeux cents = 200 (with -s).\nDeux cent dix = 210 (no -s before another number)."},

  {type:"match",pairs:[{nl:"vingt",en:"20"},{nl:"trente",en:"30"},{nl:"quarante",en:"40"},{nl:"cinquante",en:"50"}]},

  {type:"mc",q:"70 in French is 'soixante-dix', which literally means:",opts:["Seven-ten","Seventy","Sixty-ten","Sixty plus seven"],ans:"Sixty-ten",hint:"Soixante = 60, dix = 10. Added together."},

  {type:"fb",s:"Quatre-___ = 80.",a:"vingts",opts:["vingts","vingt","cents","dix"],hint:"4 x 20. Note: the final word has an -s when standing alone."},

  {type:"match",pairs:[{nl:"soixante-dix",en:"70"},{nl:"quatre-vingts",en:"80"},{nl:"quatre-vingt-dix",en:"90"},{nl:"cent",en:"100"}]},

  {type:"mc",q:"81 is 'quatre-vingt-UN' (no -s on vingt). Why?",opts:["It sounds better","Vingt drops -s before another number","81 is odd","It is a rule without reason"],ans:"Vingt drops -s before another number",hint:"Quatre-vingts (80) but quatre-vingt-un (81). The -s disappears when followed by more."},

  {type:"fb",s:"Quatre-vingt-___ = 90.",a:"dix",opts:["dix","neuf","onze","vingt"],hint:"80 + 10 = 90. Which number means ten?"},

  {type:"mc",q:"What is 75 in French?",opts:["Septante-cinq","Soixante-quinze","Soixante-cinq","Quatre-vingt-quinze"],ans:"Soixante-quinze",hint:"60 + 15 = 75. Quinze = 15."},

  {type:"fb",s:"Ça coûte ___ euros. (100)",a:"cent",opts:["cent","cents","san","cen"],hint:"One hundred. No article, no -s for exactly 100."},
]},

// ═══ L4: Faire les courses ═══
{id:"fre8l4",title:"Faire les courses",icon:"🛒",xp:15,board:true,steps:[
  {type:"intro",title:"Faire les courses: shopping",desc:"Learn essential shopping phrases for French stores. How to ask prices, sizes, try things on, and complete a purchase.",goals:["Ask for prices","Request sizes","Use shopping phrases fluently"]},

  {type:"teach",kind:"phrase",nl:"Combien ça coûte?",en:"How much does it cost?",phonetic:"kom-bee-AN sah KOOT",example:"A: Combien ça coûte, ce pantalon?\nB: Quarante-cinq euros.\nA: C'est un bon prix.",exampleEn:"A: How much do these pants cost?\nB: Forty-five euros.\nA: That's a good price.",note:"The essential price question.\nAlternatives: C'est combien?\nÇa fait combien?"},

  {type:"teach",kind:"phrase",nl:"Je voudrais...",en:"I would like...",phonetic:"zhuh voo-DRAY",example:"A: Bonjour, je voudrais essayer cette robe.\nB: Bien sûr, quelle taille?\nA: Du 38.",exampleEn:"A: Hello, I would like to try on this dress.\nB: Of course, what size?\nA: Size 38.",note:"Polite way to ask for something.\nMore polite than je veux (I want).\nConditional of vouloir."},

  {type:"teach",kind:"phrase",nl:"essayer",en:"to try on",phonetic:"eh-say-YAY",example:"A: Je peux essayer ce manteau?\nB: Oui, la cabine est là-bas.\nA: Merci!",exampleEn:"A: Can I try on this coat?\nB: Yes, the fitting room is over there.\nA: Thanks!",note:"Regular -er verb (with spelling change).\nLa cabine d'essayage = fitting room."},

  {type:"teach",kind:"phrase",nl:"C'est trop cher",en:"It's too expensive",phonetic:"say troh SHEHR",example:"A: Cette veste coûte deux cents euros.\nB: C'est trop cher!\nA: Il y a des soldes la semaine prochaine.",exampleEn:"A: This jacket costs two hundred euros.\nB: That's too expensive!\nA: There are sales next week.",note:"Trop = too (much). Cher = expensive.\nFeminine: chère. Les soldes = sales."},

  {type:"teach",kind:"phrase",nl:"Je le/la prends",en:"I'll take it",phonetic:"zhuh luh/lah PRAHN",example:"A: Le pantalon vous va bien.\nB: Oui, je le prends!\nA: Très bien, je vous emballe ça.",exampleEn:"A: The pants suit you well.\nB: Yes, I'll take them!\nA: Very well, I'll wrap that up.",note:"Le = it (masc.), la = it (fem.).\nJe le prends = I take it (masc.).\nJe la prends = I take it (fem.)."},

  {type:"teach",kind:"phrase",nl:"payer",en:"to pay",phonetic:"pay-YAY",example:"A: Comment vous payez?\nB: Par carte, s'il vous plaît.\nA: Voilà, merci et bonne journée!",exampleEn:"A: How are you paying?\nB: By card, please.\nA: There you go, thanks and have a good day!",note:"Regular -er verb (spelling change: y->i).\nPayer par carte = pay by card.\nPayer en espèces = pay cash."},

  {type:"mc",q:"'Combien ça coûte?' asks about:",opts:["The size","The color","The price","The material"],ans:"The price",hint:"Combien = how much. This question is about money."},

  {type:"fb",s:"Je ___ essayer cette chemise.",a:"voudrais",opts:["voudrais","veux","vouloir","veut"],hint:"I would like: the polite conditional form."},

  {type:"match",pairs:[{nl:"Combien ça coûte?",en:"How much?"},{nl:"Je voudrais",en:"I would like"},{nl:"essayer",en:"to try on"},{nl:"C'est trop cher",en:"Too expensive"}]},

  {type:"mc",q:"'Je le prends' uses 'le' because:",opts:["It is polite","The item is masculine","The item is expensive","Le means 'this'"],ans:"The item is masculine",hint:"Le replaces a masculine noun. La would replace a feminine one."},

  {type:"fb",s:"Comment vous ___? Par carte ou en espèces?",a:"payez",opts:["payez","payer","payons","payes"],hint:"How do you pay? Vous + which form of the verb?"},

  {type:"mc",q:"'Les soldes' in France are:",opts:["Taxes","Sales / discounts","Returns","Receipts"],ans:"Sales / discounts",hint:"The period when shops reduce prices. Happens twice yearly."},

  {type:"fb",s:"C'est ___ cher, je ne le prends pas.",a:"trop",opts:["trop","très","un peu","assez"],hint:"It's TOO expensive. Which word means 'too much'?"},

  {type:"mc",q:"'La cabine d'essayage' is:",opts:["The cash register","The fitting room","The display window","The exit"],ans:"The fitting room",hint:"Essayage comes from essayer. Where do you try clothes on?"},

  {type:"fb",s:"Cette robe me va bien. Je ___ prends!",a:"la",opts:["la","le","les","l'"],hint:"Robe is feminine. Which pronoun replaces a feminine noun?"},

  {type:"mc",q:"'Payer en espèces' means to pay:",opts:["By card","By check","In cash","Online"],ans:"In cash",hint:"Espèces = species, but in money context = physical cash."},

  {type:"fb",s:"Bonjour, ___ voudrais une jupe bleue.",a:"je",opts:["je","tu","il","nous"],hint:"I would like: first person subject pronoun."},
]},

// ═══ L5: Les démonstratifs ═══
{id:"fre8l5",title:"Les démonstratifs",icon:"👆",xp:15,board:true,steps:[
  {type:"intro",title:"Ce, cet, cette, ces: this/that/these/those",desc:"Demonstrative adjectives point at things: THIS shirt, THAT dress, THESE shoes. French has four forms based on gender and number.",goals:["Use ce (masc.), cette (fem.), ces (plural)","Know when to use cet (before vowel)","Point at items while shopping"]},

  {type:"tip",title:"Demonstrative adjectives",text:"ce + masculine noun: ce pantalon (this/that pants)\ncet + masculine noun starting with vowel/h: cet homme\ncette + feminine noun: cette robe (this/that dress)\nces + any plural: ces chaussures (these/those shoes)\n\nFrench does not distinguish this/that.\nBoth = ce/cette/ces.\nTo specify: add -ci (this) or -là (that) after the noun."},

  {type:"teach",kind:"word",nl:"ce",en:"this / that (masculine)",phonetic:"SUH",example:"A: Tu aimes ce manteau?\nB: Ce manteau noir? Oui!\nA: Il coûte cinquante euros.",exampleEn:"A: Do you like this coat?\nB: This black coat? Yes!\nA: It costs fifty euros.",note:"Before masculine nouns starting with consonant.\nCe pantalon, ce chapeau, ce magasin."},

  {type:"teach",kind:"word",nl:"cet",en:"this / that (masc. before vowel)",phonetic:"SET",example:"A: Tu connais cet homme?\nB: Non, qui est-ce?\nA: C'est mon voisin.",exampleEn:"A: Do you know this man?\nB: No, who is he?\nA: He's my neighbor.",note:"Before masculine nouns starting with vowel or silent h.\nCet appartement, cet hôtel."},

  {type:"teach",kind:"word",nl:"cette",en:"this / that (feminine)",phonetic:"SET",example:"A: Regarde cette robe!\nB: Elle est magnifique.\nA: Et pas chère!",exampleEn:"A: Look at this dress!\nB: It's magnificent.\nA: And not expensive!",note:"Before all feminine singular nouns.\nCette chemise, cette jupe, cette couleur."},

  {type:"teach",kind:"word",nl:"ces",en:"these / those (plural)",phonetic:"SAY",example:"A: Ces chaussures sont jolies.\nB: Oui, mais ces chaussures sont chères.\nA: C'est vrai.",exampleEn:"A: These shoes are pretty.\nB: Yes, but these shoes are expensive.\nA: That's true.",note:"Before all plural nouns (masc. or fem.).\nCes pantalons, ces robes, ces couleurs."},

  {type:"teach",kind:"phrase",nl:"ce...ci / ce...là",en:"this one here / that one there",phonetic:"see / lah",example:"A: Quelle robe? Cette robe-ci ou cette robe-là?\nB: Cette robe-ci, la bleue.\nA: Bon choix!",exampleEn:"A: Which dress? This one here or that one there?\nB: This one here, the blue one.\nA: Good choice!",note:"To distinguish this vs that:\n-ci = here (this)\n-là = there (that)\nAdded after the noun."},

  {type:"mc",q:"Before a feminine noun, you use:",opts:["Ce","Cet","Cette","Ces"],ans:"Cette",hint:"Feminine singular always uses the same form, regardless of first letter."},

  {type:"fb",s:"___ pantalon est trop grand.",a:"Ce",opts:["Ce","Cet","Cette","Ces"],hint:"Pantalon is masculine, starts with consonant."},

  {type:"match",pairs:[{nl:"ce manteau",en:"this coat"},{nl:"cette robe",en:"this dress"},{nl:"ces chaussures",en:"these shoes"},{nl:"cet homme",en:"this man"}]},

  {type:"mc",q:"'Cet' is used instead of 'ce' when:",opts:["The noun is feminine","The noun starts with a vowel or silent h","The noun is plural","The noun is long"],ans:"The noun starts with a vowel or silent h",hint:"Masculine before vowel/h uses a special form for pronunciation."},

  {type:"fb",s:"___ chemise est très jolie.",a:"Cette",opts:["Cette","Ce","Cet","Ces"],hint:"Chemise is feminine singular. Which demonstrative?"},

  {type:"mc",q:"To say 'THAT dress there' (pointing far), you add:",opts:["-ci after robe","-là after robe","-ici after robe","-bas after robe"],ans:"-là after robe",hint:"Là = there. Added to the noun to specify distance."},

  {type:"fb",s:"___ chaussures sont en solde.",a:"Ces",opts:["Ces","Ce","Cette","Cet"],hint:"Shoes is plural. Which demonstrative for plural?"},

  {type:"match",pairs:[{nl:"ce pantalon-ci",en:"these pants here"},{nl:"cette robe-là",en:"that dress there"},{nl:"ces chaussures-ci",en:"these shoes here"},{nl:"cet hôtel-là",en:"that hotel there"}]},

  {type:"mc",q:"'Cet appartement' uses 'cet' because appartement is:",opts:["Feminine","Plural","Masculine starting with a vowel","Masculine starting with a consonant"],ans:"Masculine starting with a vowel",hint:"Appartement is masculine and begins with 'a' (a vowel)."},

  {type:"fb",s:"Tu préfères ___ manteau-ci ou ___ manteau-là?",a:["ce","ce"],opts:["ce","cet","cette","ces"],hint:"Manteau is masculine, starts with consonant. Same form both times."},

  {type:"mc",q:"French demonstratives (ce/cette/ces) cover:",opts:["Only 'this'","Only 'that'","Both 'this' and 'that'","Only 'these'"],ans:"Both 'this' and 'that'",hint:"French does not have separate words for this/that by default."},
]},

// ═══ L6: Les nombres 100-1000 ═══
{id:"fre8l6",title:"100 à 1000",icon:"💯",xp:15,board:true,steps:[
  {type:"intro",title:"Les nombres de 100 à 1000",desc:"Master large numbers for prices, addresses, and dates. French numbers above 100 follow a simpler pattern than 70-90.",goals:["Count in hundreds","Say numbers up to 1000","Use numbers for prices"]},

  {type:"teach",kind:"word",nl:"cent",en:"one hundred (100)",phonetic:"SAHN",example:"A: Ça coûte cent euros.\nB: Cent exactement?\nA: Cent virgule cinquante.",exampleEn:"A: It costs 100 euros.\nB: Exactly 100?\nA: 100.50.",note:"100. No un before cent.\nDeux cents = 200 (with -s).\nDeux cent dix = 210 (no -s)."},

  {type:"teach",kind:"word",nl:"deux cents",en:"two hundred (200)",phonetic:"duh SAHN",example:"A: Le loyer est de deux cents euros?\nB: Non, cinq cents!\nA: C'est cher...",exampleEn:"A: Is the rent 200 euros?\nB: No, 500!\nA: That's expensive...",note:"200. Cents gets -s when it ends the number.\nBut: deux cent dix (210) = no -s.\nRule: -s only if nothing follows."},

  {type:"teach",kind:"word",nl:"mille",en:"one thousand (1000)",phonetic:"MEEL",example:"A: Cet appartement coûte mille euros par mois.\nB: Mille euros!\nA: C'est Paris...",exampleEn:"A: This apartment costs 1000 euros per month.\nB: A thousand euros!\nA: It's Paris...",note:"1000. Never takes -s.\nDeux mille = 2000 (no -s on mille).\nMille is invariable."},

  {type:"tip",title:"Number patterns 100-1000",text:"100 = cent\n200 = deux cents (with -s)\n201 = deux cent un (no -s)\n300 = trois cents\n500 = cinq cents\n999 = neuf cent quatre-vingt-dix-neuf\n1000 = mille\n\nRule: cents takes -s ONLY at the end.\nMille NEVER takes -s."},

  {type:"mc",q:"'Deux cents' has an -s, but 'deux cent dix' does not because:",opts:["210 is odd","The -s drops when another number follows","It is a mistake","Dix removes the -s"],ans:"The -s drops when another number follows",hint:"Cents gets -s only when it's the last number word."},

  {type:"fb",s:"Cinq ___ euros. (500)",a:"cents",opts:["cents","cent","cen","centes"],hint:"500 ends on the hundreds. Does cent get an -s here?"},

  {type:"mc",q:"'Mille' never takes -s. So 3000 is:",opts:["Trois milles","Trois mille","Troi mille","Trois mill"],ans:"Trois mille",hint:"Mille is invariable, unlike cent."},

  {type:"fb",s:"Cet ordinateur coûte ___ euros. (1000)",a:"mille",opts:["mille","mill","cent","cents"],hint:"One thousand. The word that never changes."},

  {type:"match",pairs:[{nl:"cent",en:"100"},{nl:"deux cents",en:"200"},{nl:"cinq cents",en:"500"},{nl:"mille",en:"1000"}]},

  {type:"mc",q:"What is 350 in French?",opts:["Trois cents cinquante","Trois cent cinquante","Trois cinquante","Trente-cinq cent"],ans:"Trois cent cinquante",hint:"300 + 50. Since 50 follows, cent has no -s."},

  {type:"fb",s:"Trois cent ___-cinq euros. (375)",a:"soixante",opts:["soixante","septante","soixante-dix","quarante"],hint:"75 = the 60-system. What base number starts the combo?"},

  {type:"mc",q:"999 in French is:",opts:["Neuf cent quatre-vingt-dix-neuf","Neuf cents quatre-vingt-dix-neuf","Neuf cent neuf neuf","Neuf neuf neuf"],ans:"Neuf cent quatre-vingt-dix-neuf",hint:"900 + 90 + 9. No -s on cent because more follows."},

  {type:"fb",s:"Cette voiture coûte dix ___ euros.",a:"mille",opts:["mille","milles","cent","cents"],hint:"10,000. The word for 1000. It never takes -s."},

  {type:"mc",q:"How do you say 250 euros?",opts:["Deux cent cinquante","Deux cents cinquante","Vingt-cinq cent","Deux cinquante"],ans:"Deux cent cinquante",hint:"200 + 50. No -s on cent when more follows."},

  {type:"fb",s:"Il y a ___ cent habitants dans ce village. (900)",a:"neuf",opts:["neuf","nouveau","huit","dix"],hint:"900 = ___ cent. Which number means nine?"},

  {type:"mc",q:"A common French salary might be 'deux mille cinq cents euros'. That's:",opts:["250 euros","2,005 euros","2,500 euros","25,000 euros"],ans:"2,500 euros",hint:"Deux mille = 2000. Cinq cents = 500. Total?"},

  {type:"fb",s:"Six ___ trente euros. (630)",a:"cent",opts:["cent","cents","mille","milles"],hint:"630 = six ___ trente. Another number follows."},
]},

// ═══ L7: Au magasin ═══
{id:"fre8l7",title:"Au magasin",icon:"🏬",xp:15,board:true,steps:[
  {type:"intro",title:"Au magasin: at the store",desc:"Practice complete shopping scenarios. Combine clothing, colors, numbers, demonstratives, and shopping phrases in real conversations.",goals:["Navigate a complete shopping scenario","Use all Unit 8 vocabulary together","Handle prices and payments"]},

  {type:"teach",kind:"phrase",nl:"Quelle taille?",en:"What size?",phonetic:"kel TAHY",example:"A: Je voudrais cette chemise.\nB: Quelle taille, monsieur?\nA: Du 42.",exampleEn:"A: I'd like this shirt.\nB: What size, sir?\nA: Size 42.",note:"Taille = size (for clothes).\nPointure = size (for shoes).\nQuelle = which/what (fem.)."},

  {type:"teach",kind:"phrase",nl:"Ça vous va?",en:"Does it suit you? / Does it fit?",phonetic:"sah voo VAH",example:"A: Ce pantalon, ça vous va?\nB: Oui, c'est parfait!\nA: Excellent choix.",exampleEn:"A: Do these pants fit you?\nB: Yes, it's perfect!\nA: Excellent choice.",note:"Va comes from aller.\nÇa te va? = informal version.\nUsed for both fit and style."},

  {type:"teach",kind:"phrase",nl:"trop grand / trop petit",en:"too big / too small",phonetic:"troh GRAHN / troh puh-TEE",example:"A: Ce manteau est trop grand.\nB: Essayez la taille en dessous.\nA: D'accord.",exampleEn:"A: This coat is too big.\nB: Try the size below.\nA: OK.",note:"Trop + adjective = too + adjective.\nTrop grand, trop cher, trop long."},

  {type:"teach",kind:"phrase",nl:"Ça fait combien?",en:"How much does that come to?",phonetic:"sah fay kom-bee-AN",example:"A: Ça fait combien en tout?\nB: Quatre-vingt-quinze euros.\nA: Voilà ma carte.",exampleEn:"A: How much does that come to in total?\nB: Ninety-five euros.\nA: Here's my card.",note:"At the register: total price question.\nÇa fait = that makes/comes to.\nEn tout = in total."},

  {type:"mc",q:"'Ça vous va?' asks whether something:",opts:["Is expensive","Fits or suits you","Is available","Is on sale"],ans:"Fits or suits you",hint:"Va (from aller) here means to fit/suit someone."},

  {type:"fb",s:"___ taille, s'il vous plaît?",a:"Quelle",opts:["Quelle","Quel","Quelles","Quels"],hint:"What size? Taille is feminine singular."},

  {type:"match",pairs:[{nl:"Quelle taille?",en:"What size?"},{nl:"Ça vous va?",en:"Does it fit?"},{nl:"trop grand",en:"too big"},{nl:"Ça fait combien?",en:"How much total?"}]},

  {type:"mc",q:"'Cette jupe est trop petite' means the skirt is:",opts:["Too big","Too expensive","Too small","Too long"],ans:"Too small",hint:"Trop = too. Petite = small (feminine form)."},

  {type:"fb",s:"Ce pantalon est trop ___. Vous avez la taille au-dessus?",a:"petit",opts:["petit","grand","cher","noir"],hint:"The pants are too small. Need the next size UP."},

  {type:"mc",q:"At the register, to ask the total you say:",opts:["Combien ça coûte?","Ça fait combien?","C'est combien la taille?","Vous avez combien?"],ans:"Ça fait combien?",hint:"Ça fait = that comes to. For the total at checkout."},

  {type:"fb",s:"Ça ___ quatre-vingt-dix euros en tout.",a:"fait",opts:["fait","coûte","est","va"],hint:"That comes to 90 euros total. Which verb goes with ça?"},

  {type:"match",pairs:[{nl:"payer par carte",en:"pay by card"},{nl:"payer en espèces",en:"pay cash"},{nl:"les soldes",en:"sales"},{nl:"la cabine d'essayage",en:"fitting room"}]},

  {type:"mc",q:"A shop assistant asks 'Quelle pointure?' They want to know your:",opts:["Clothes size","Shoe size","Hat size","Glove size"],ans:"Shoe size",hint:"Pointure is specifically for footwear measurement."},

  {type:"fb",s:"Je voudrais ___ cette veste en noir.",a:"essayer",opts:["essayer","acheter","payer","porter"],hint:"I would like to try on this jacket. Which verb?"},

  {type:"mc",q:"You choose a shirt for 85 euros. In French, 85 is:",opts:["Quatre-vingt-cinq","Huitante-cinq","Soixante-vingt-cinq","Quatre-vingts-cinq"],ans:"Quatre-vingt-cinq",hint:"80 + 5. No -s on vingt because a number follows."},

  {type:"fb",s:"Ces chaussures ___ plaisent beaucoup!",a:"me",opts:["me","te","se","nous"],hint:"These shoes please ME a lot. Which indirect pronoun?"},

  {type:"mc",q:"After trying on clothes, to say 'I'll take it' for a feminine item:",opts:["Je le prends","Je la prends","Je les prends","Je prends"],ans:"Je la prends",hint:"Feminine items use the feminine direct object pronoun."},
]},

// ═══ L8: Révision Unit 8 ═══
{id:"fre8l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 8 Review: A1 Finale",desc:"This is the final A1 unit! Review clothing, colors, numbers, demonstratives, and shopping. You now have survival French for any situation.",goals:["Review all A1.8 vocabulary","Test number skills 20-1000","Combine shopping scenarios"]},

  {type:"mc",q:"'Un pantalon' in French is:",opts:["Plural","Singular","Feminine","Invariable"],ans:"Singular",hint:"French treats pants as one garment. Notice the article 'un'."},

  {type:"fb",s:"Elle porte une robe ___. (white, fem.)",a:"blanche",opts:["blanche","blanc","blancs","blanches"],hint:"White + feminine singular. Irregular form: not just adding -e."},

  {type:"match",pairs:[{nl:"une chemise",en:"a shirt"},{nl:"des chaussures",en:"shoes"},{nl:"un manteau",en:"a coat"},{nl:"une jupe",en:"a skirt"}]},

  {type:"mc",q:"70 in French is:",opts:["Septante","Soixante-dix","Sept-dix","Soixante-sept"],ans:"Soixante-dix",hint:"60 + 10 = 70 in the standard French system."},

  {type:"fb",s:"___ robe-là est trop chère.",a:"Cette",opts:["Cette","Ce","Cet","Ces"],hint:"That dress (there). Feminine demonstrative."},

  {type:"mc",q:"'Deux cents' has -s, but 'deux cent un' does not because:",opts:["Un removes the -s","Cent loses -s when followed by another number","It is irregular","Both are correct"],ans:"Cent loses -s when followed by another number",hint:"The -s disappears when more number words come after."},

  {type:"fb",s:"Ça coûte trois ___ cinquante euros. (350)",a:"cent",opts:["cent","cents","mille","milles"],hint:"300 + 50 = 350. The hundreds word, no -s when followed by more."},

  {type:"match",pairs:[{nl:"rouge",en:"red"},{nl:"bleu",en:"blue"},{nl:"vert",en:"green"},{nl:"noir",en:"black"}]},

  {type:"mc",q:"'Je voudrais essayer ce pantalon en bleu' combines:",opts:["Polite request + demonstrative + color","Command + article + size","Question + number + color","Greeting + clothing + price"],ans:"Polite request + demonstrative + color",hint:"Je voudrais (polite) + ce (demonstrative) + en bleu (color)."},

  {type:"fb",s:"___ chaussures coûtent quatre-vingts euros.",a:"Ces",opts:["Ces","Ce","Cette","Cet"],hint:"These shoes. Plural demonstrative."},

  {type:"mc",q:"At the cash register, 'Ça fait combien?' asks:",opts:["What size is it?","What color is it?","What is the total?","Where is it made?"],ans:"What is the total?",hint:"Ça fait = that comes to. Asking for the total price."},

  {type:"fb",s:"Ce manteau est trop ___. Vous avez plus petit?",a:"grand",opts:["grand","petit","cher","noir"],hint:"This coat is too big. I need smaller."},

  {type:"match",pairs:[{nl:"Combien ça coûte?",en:"How much?"},{nl:"Je voudrais",en:"I would like"},{nl:"essayer",en:"to try on"},{nl:"payer",en:"to pay"}]},

  {type:"mc",q:"'Cet' is used before:",opts:["Feminine nouns","Plural nouns","Masculine nouns starting with a vowel","All nouns"],ans:"Masculine nouns starting with a vowel",hint:"Cet replaces ce for pronunciation before vowel/silent h."},

  {type:"fb",s:"Quatre-vingt-___ euros, s'il vous plaît. (95)",a:"quinze",opts:["quinze","cinq","dix-cinq","quinz"],hint:"80 + 15 = 95. The word for fifteen."},

  {type:"mc",q:"You've completed A1! Which skill is NOT part of A1 French?",opts:["Ordering food","Giving directions","Writing formal essays","Shopping for clothes"],ans:"Writing formal essays",hint:"Formal essay writing is a much higher level skill (B2+)."},

  {type:"fb",s:"Merci beaucoup, ___ journée!",a:"bonne",opts:["bonne","bon","bonjour","bien"],hint:"Have a good day! Journée is feminine."},
]},
]},

// ═══════════════════════════════════════════════
//  UNIT 9 — Le passé composé (avoir)
//  Level: A2.1 | Lessons: 8 | Track: v1
// ═══════════════════════════════════════════════

{n:9,lang:"fr",track:"v1",title:"Le passé composé",sub:"Past Tense with avoir",icon:"⏮️",level:"A2.1",color:"#7B5EE8",lessons:[

// ═══ L1: Le passé composé ═══
{id:"fre9l1",title:"Le passé composé",icon:"⏮️",xp:15,board:true,steps:[
  {type:"intro",title:"Le passé composé: talking about the past",desc:"The passé composé is THE past tense for completed actions. It has two parts: a helper verb (avoir or être) + a past participle. Most verbs use avoir.",goals:["Understand the two-part structure","Form basic past participles","Say what you did yesterday"]},

  {type:"tip",title:"How it works",text:"Subject + AVOIR (conjugated) + past participle\n\nJ'ai mangé = I ate / I have eaten\nTu as parlé = You spoke\nIl a regardé = He watched\n\nAvoir does the heavy lifting.\nThe past participle carries the meaning.\nThis is the #1 past tense in spoken French."},

  {type:"teach",kind:"phrase",nl:"j'ai mangé",en:"I ate / I have eaten",phonetic:"zhay mahn-ZHAY",example:"A: Tu as mangé?\nB: Oui, j'ai mangé une pizza.\nA: À quelle heure?",exampleEn:"A: Did you eat?\nB: Yes, I ate a pizza.\nA: At what time?",note:"J'ai = je + ai (elision before vowel).\nMangé = past participle of manger.\n-er verbs: remove -er, add -é."},

  {type:"teach",kind:"phrase",nl:"tu as parlé",en:"you spoke / you have spoken",phonetic:"tew ah par-LAY",example:"A: Tu as parlé au professeur?\nB: Oui, j'ai parlé avec lui.\nA: Et alors?",exampleEn:"A: Did you talk to the teacher?\nB: Yes, I talked with him.\nA: And?",note:"Tu as = you have (informal).\nParlé = past participle of parler.\nSame -é pattern as mangé."},

  {type:"teach",kind:"phrase",nl:"il a regardé",en:"he watched / he has watched",phonetic:"eel ah ruh-gar-DAY",example:"A: Il a regardé le match?\nB: Oui, il a regardé toute la soirée!\nA: Et le résultat?",exampleEn:"A: Did he watch the game?\nB: Yes, he watched all evening!\nA: And the result?",note:"Il a = he has.\nRegardé = past participle of regarder.\nAll -er verbs follow this pattern."},

  {type:"teach",kind:"phrase",nl:"nous avons travaillé",en:"we worked",phonetic:"nooz ah-VON trah-vah-YAY",example:"A: Vous avez travaillé hier?\nB: Oui, nous avons travaillé toute la journée.\nA: Vous êtes fatigués!",exampleEn:"A: Did you work yesterday?\nB: Yes, we worked all day.\nA: You must be tired!",note:"Nous avons = we have.\nTravaillé = worked.\nThe avoir part changes, the participle stays the same."},

  {type:"teach",kind:"phrase",nl:"ils ont écouté",en:"they listened",phonetic:"eelz ont ay-koo-TAY",example:"A: Les étudiants ont écouté?\nB: Oui, ils ont bien écouté.\nA: Parfait!",exampleEn:"A: Did the students listen?\nB: Yes, they listened well.\nA: Perfect!",note:"Ils ont = they have.\nÉcouté = listened.\nWith avoir, the participle NEVER changes for gender/number."},

  {type:"mc",q:"The passé composé is formed with:",opts:["Just a past participle","Être + participle always","Avoir + past participle (usually)","A special verb ending"],ans:"Avoir + past participle (usually)",hint:"Two parts: a conjugated helper + the main verb's past form."},

  {type:"fb",s:"J'___ mangé une pizza hier.",a:"ai",opts:["ai","as","a","ont"],hint:"I have: je + which form of avoir?"},

  {type:"match",pairs:[{nl:"j'ai mangé",en:"I ate"},{nl:"tu as parlé",en:"you spoke"},{nl:"il a regardé",en:"he watched"},{nl:"nous avons travaillé",en:"we worked"}]},

  {type:"mc",q:"For -er verbs, the past participle ends in:",opts:["-é","-i","-u","-is"],ans:"-é",hint:"Manger -> mangé. Parler -> parlé. What ending do they share?"},

  {type:"fb",s:"Elle ___ regardé un film.",a:"a",opts:["a","ai","as","ont"],hint:"She has: elle + which form of avoir?"},

  {type:"mc",q:"In 'nous avons travaillé', what changes for different subjects?",opts:["The past participle","The helper verb avoir","Both parts","Nothing"],ans:"The helper verb avoir",hint:"Avoir is conjugated for the subject. The participle stays the same."},

  {type:"fb",s:"Ils ___ écouté la musique.",a:"ont",opts:["ont","avons","avez","a"],hint:"They have: ils + which form of avoir?"},

  {type:"match",pairs:[{nl:"j'ai",en:"I have"},{nl:"tu as",en:"you have"},{nl:"il/elle a",en:"he/she has"},{nl:"ils/elles ont",en:"they have"}]},

  {type:"mc",q:"'Vous avez dansé' means:",opts:["You will dance","You are dancing","You danced","You dance"],ans:"You danced",hint:"Avez + participle = completed past action."},

  {type:"fb",s:"Tu ___ regardé la télé hier soir?",a:"as",opts:["as","ai","a","avez"],hint:"You (informal) have: tu + which form?"},

  {type:"mc",q:"Which is a correct passé composé sentence?",opts:["Je mangé hier","J'ai mangé hier","J'ai manger hier","Je suis mangé"],ans:"J'ai mangé hier",hint:"Helper + correct participle. Not infinitive, not alone."},
]},

// ═══ L2: Participes réguliers ═══
{id:"fre9l2",title:"Participes réguliers",icon:"📝",xp:15,board:true,steps:[
  {type:"intro",title:"Les participes passés réguliers",desc:"Three regular patterns for past participles: -er verbs end in -é, -ir verbs in -i, -re verbs in -u. Master these and you can form most past tenses.",goals:["Convert -er verbs to -é participles","Convert -ir verbs to -i participles","Convert -re verbs to -u participles"]},

  {type:"tip",title:"Three regular patterns",text:"-er verbs: drop -er, add -é\nmanger -> mangé, parler -> parlé\n\n-ir verbs: drop -ir, add -i\nfinir -> fini, choisir -> choisi\n\n-re verbs: drop -re, add -u\nvendre -> vendu, attendre -> attendu\n\nThese three patterns cover hundreds of verbs."},

  {type:"teach",kind:"word",nl:"fini",en:"finished (past participle)",phonetic:"fee-NEE",example:"A: Tu as fini tes devoirs?\nB: Oui, j'ai fini il y a une heure.\nA: Bravo!",exampleEn:"A: Did you finish your homework?\nB: Yes, I finished an hour ago.\nA: Well done!",note:"From finir (to finish). -ir -> -i.\nJ'ai fini = I finished."},

  {type:"teach",kind:"word",nl:"choisi",en:"chosen (past participle)",phonetic:"shwah-ZEE",example:"A: Tu as choisi un restaurant?\nB: Oui, j'ai choisi le restaurant italien.\nA: Bonne idée!",exampleEn:"A: Did you choose a restaurant?\nB: Yes, I chose the Italian restaurant.\nA: Good idea!",note:"From choisir (to choose). -ir -> -i.\nJ'ai choisi = I chose."},

  {type:"teach",kind:"word",nl:"vendu",en:"sold (past participle)",phonetic:"vahn-DEW",example:"A: Tu as vendu ta voiture?\nB: Oui, j'ai vendu ma vieille voiture.\nA: Pour combien?",exampleEn:"A: Did you sell your car?\nB: Yes, I sold my old car.\nA: For how much?",note:"From vendre (to sell). -re -> -u.\nJ'ai vendu = I sold."},

  {type:"teach",kind:"word",nl:"attendu",en:"waited (past participle)",phonetic:"ah-tahn-DEW",example:"A: Vous avez attendu longtemps?\nB: Oui, nous avons attendu une heure!\nA: C'est long.",exampleEn:"A: Did you wait long?\nB: Yes, we waited an hour!\nA: That's long.",note:"From attendre (to wait). -re -> -u.\nJ'ai attendu = I waited."},

  {type:"teach",kind:"word",nl:"répondu",en:"answered (past participle)",phonetic:"ray-pon-DEW",example:"A: Il a répondu à ton message?\nB: Non, il n'a pas encore répondu.\nA: Appelle-le!",exampleEn:"A: Did he answer your message?\nB: No, he hasn't answered yet.\nA: Call him!",note:"From répondre (to answer). -re -> -u.\nRépondre à = to answer (something)."},

  {type:"mc",q:"The past participle of 'parler' (to speak) is:",opts:["Parlé","Parli","Parlu","Parlée"],ans:"Parlé",hint:"-er verbs always form participles with the same ending."},

  {type:"fb",s:"J'ai ___ mes devoirs. (to finish)",a:"fini",opts:["fini","finir","finé","finu"],hint:"Second group verb (-ir). Drop the last two letters and add -i."},

  {type:"match",pairs:[{nl:"-er -> -é",en:"mangé, parlé"},{nl:"-ir -> -i",en:"fini, choisi"},{nl:"-re -> -u",en:"vendu, attendu"}]},

  {type:"mc",q:"'Attendre' becomes which past participle?",opts:["Attendé","Attendi","Attendu","Attendré"],ans:"Attendu",hint:"-re verbs drop -re and add a specific vowel ending."},

  {type:"fb",s:"Elle a ___ une robe bleue. (to choose)",a:"choisi",opts:["choisi","choisé","choisu","choisir"],hint:"Choose: an -ir verb. What ending replaces -ir?"},

  {type:"mc",q:"Which set shows ALL correct participles?",opts:["mangé, fini, vendu","mangé, fini, vendé","mangé, finié, vendu","mangé, finir, vendre"],ans:"mangé, fini, vendu",hint:"Each verb group has its own pattern: -é, -i, -u."},

  {type:"fb",s:"Nous avons ___ la maison l'année dernière. (to sell)",a:"vendu",opts:["vendu","vendé","vendi","vendre"],hint:"Sell is an -re verb. -re -> which ending?"},

  {type:"match",pairs:[{nl:"j'ai fini",en:"I finished"},{nl:"tu as choisi",en:"you chose"},{nl:"il a vendu",en:"he sold"},{nl:"elle a répondu",en:"she answered"}]},

  {type:"mc",q:"'Répondre' -> 'répondu'. This follows the pattern of:",opts:["-er verbs","-ir verbs","-re verbs","Irregular verbs"],ans:"-re verbs",hint:"Répondre ends in -re, so it follows that group's rule."},

  {type:"fb",s:"Tu as ___ au téléphone? (to answer)",a:"répondu",opts:["répondu","répondé","répondi","répondre"],hint:"Answer is an -re verb. -re becomes -u."},

  {type:"mc",q:"How many regular past participle patterns are there?",opts:["One","Two","Three","Four"],ans:"Three",hint:"One for each verb group: -er, -ir, -re."},
]},

// ═══ L3: Avoir au passé (full conjugation) ═══
{id:"fre9l3",title:"Avoir au passé",icon:"🔄",xp:15,board:true,steps:[
  {type:"intro",title:"Full passé composé conjugation with avoir",desc:"Practice the complete conjugation pattern. Remember: avoir changes for each person, the past participle stays the same.",goals:["Conjugate passé composé for all persons","Choose correct avoir form quickly","Build fluency with all subjects"]},

  {type:"tip",title:"Complete avoir conjugation in passé composé",text:"j'ai mangé = I ate\ntu as mangé = you ate\nil/elle/on a mangé = he/she/one ate\nnous avons mangé = we ate\nvous avez mangé = you ate (formal/pl)\nils/elles ont mangé = they ate\n\nOnly avoir changes. The participle is fixed."},

  {type:"teach",kind:"phrase",nl:"vous avez voyagé",en:"you traveled",phonetic:"vooz ah-VAY vwah-yah-ZHAY",example:"A: Vous avez voyagé cet été?\nB: Oui, nous avons voyagé en Espagne.\nA: C'était bien?",exampleEn:"A: Did you travel this summer?\nB: Yes, we traveled to Spain.\nA: Was it nice?",note:"Vous avez = you have (formal/plural).\nVoyagé = traveled (regular -er)."},

  {type:"teach",kind:"phrase",nl:"on a dîné",en:"we had dinner",phonetic:"on ah dee-NAY",example:"A: On a dîné au restaurant hier.\nB: Quel restaurant?\nA: Le petit italien en face de la gare.",exampleEn:"A: We had dinner at the restaurant yesterday.\nB: Which restaurant?\nA: The little Italian one across from the station.",note:"On = we (informal, very common).\nOn a = on + a (third person singular)."},

  {type:"teach",kind:"phrase",nl:"elles ont dansé",en:"they (f.) danced",phonetic:"elz ont dahn-SAY",example:"A: Les filles ont dansé toute la nuit!\nB: Elles ont dansé jusqu'à quelle heure?\nA: Jusqu'à trois heures du matin!",exampleEn:"A: The girls danced all night!\nB: They danced until what time?\nA: Until three in the morning!",note:"Elles ont = they (feminine) have.\nWith avoir, the participle stays unchanged\nregardless of subject gender."},

  {type:"mc",q:"In passé composé with avoir, the past participle:",opts:["Changes for feminine","Changes for plural","Never changes","Sometimes changes"],ans:"Never changes",hint:"With avoir, the participle form is fixed for all subjects."},

  {type:"fb",s:"J'___ travaillé hier.",a:"ai",opts:["ai","as","a","avons"],hint:"I have: first person singular of avoir."},

  {type:"mc",q:"'On a dîné' uses 'a' because 'on' conjugates like:",opts:["Je","Nous","Il/elle","Vous"],ans:"Il/elle",hint:"On takes third person singular, same as he/she."},

  {type:"fb",s:"Nous ___ regardé un film ensemble.",a:"avons",opts:["avons","avez","ont","ai"],hint:"We have: nous + which form?"},

  {type:"match",pairs:[{nl:"j'ai parlé",en:"I spoke"},{nl:"tu as dansé",en:"you danced"},{nl:"nous avons mangé",en:"we ate"},{nl:"vous avez voyagé",en:"you traveled"}]},

  {type:"fb",s:"Elles ___ chanté une chanson.",a:"ont",opts:["ont","avons","avez","a"],hint:"They (f.) have: elles + which form?"},

  {type:"mc",q:"Which is correct?",opts:["Elle a mangée","Elle a mangé","Elle a manger","Elle ai mangé"],ans:"Elle a mangé",hint:"With avoir, the participle does NOT agree with the subject."},

  {type:"fb",s:"Tu ___ fini ton café?",a:"as",opts:["as","ai","a","avez"],hint:"You (informal) have: tu + which form?"},

  {type:"match",pairs:[{nl:"il a choisi",en:"he chose"},{nl:"elle a fini",en:"she finished"},{nl:"on a vendu",en:"we sold"},{nl:"ils ont attendu",en:"they waited"}]},

  {type:"mc",q:"'Nous avons voyagé en France' is in which tense?",opts:["Present","Future","Passé composé","Imparfait"],ans:"Passé composé",hint:"Avons (avoir) + voyagé (participle) = compound past."},

  {type:"fb",s:"Il ___ acheté un nouveau téléphone.",a:"a",opts:["a","ai","as","ont"],hint:"He has: il + which form of avoir?"},

  {type:"mc",q:"Why does 'on' use 'a' and not 'avons'?",opts:["On is informal","On conjugates like il/elle","On is plural","On means I"],ans:"On conjugates like il/elle",hint:"Despite meaning 'we' informally, on is grammatically third person."},

  {type:"fb",s:"Vous ___ aimé le spectacle?",a:"avez",opts:["avez","avons","ont","as"],hint:"You (formal/plural) have: vous + which form?"},
]},

// ═══ L4: Participes irréguliers ═══
{id:"fre9l4",title:"Participes irréguliers",icon:"⚡",xp:15,board:true,steps:[
  {type:"intro",title:"Les participes passés irréguliers",desc:"Many common verbs have irregular past participles that don't follow the -é/-i/-u pattern. These must be memorized, but they're used so often you'll learn them fast.",goals:["Learn 10 key irregular participles","Use them in passé composé sentences","Recognize patterns among irregulars"]},

  {type:"teach",kind:"word",nl:"fait",en:"done / made (past participle)",phonetic:"FEH",example:"A: Qu'est-ce que tu as fait hier?\nB: J'ai fait du sport.\nA: Quel sport?",exampleEn:"A: What did you do yesterday?\nB: I did some sport.\nA: Which sport?",note:"From faire (to do/make).\nJ'ai fait = I did/made.\nOne of the most used participles."},

  {type:"teach",kind:"word",nl:"pris",en:"taken (past participle)",phonetic:"PREE",example:"A: Tu as pris le métro?\nB: Non, j'ai pris le bus.\nA: C'est plus rapide.",exampleEn:"A: Did you take the metro?\nB: No, I took the bus.\nA: That's faster.",note:"From prendre (to take).\nJ'ai pris = I took.\nAlso: appris (learned), compris (understood)."},

  {type:"teach",kind:"word",nl:"bu",en:"drunk (past participle)",phonetic:"BEW",example:"A: Tu as bu du café?\nB: Oui, j'ai bu trois cafés!\nA: C'est trop!",exampleEn:"A: Did you drink coffee?\nB: Yes, I drank three coffees!\nA: That's too much!",note:"From boire (to drink).\nJ'ai bu = I drank.\nShort and simple."},

  {type:"teach",kind:"word",nl:"vu",en:"seen (past participle)",phonetic:"VEW",example:"A: Tu as vu le nouveau film?\nB: Oui, j'ai vu le film hier.\nA: Il est bien?",exampleEn:"A: Did you see the new movie?\nB: Yes, I saw the movie yesterday.\nA: Is it good?",note:"From voir (to see).\nJ'ai vu = I saw.\nAnother short, common participle."},

  {type:"teach",kind:"word",nl:"eu",en:"had (past participle)",phonetic:"EW",example:"A: Tu as eu des problèmes?\nB: Non, je n'ai pas eu de problèmes.\nA: Tant mieux!",exampleEn:"A: Did you have problems?\nB: No, I didn't have any problems.\nA: Good!",note:"From avoir (to have).\nJ'ai eu = I had.\nAvoir having its own participle!"},

  {type:"teach",kind:"word",nl:"dit",en:"said / told (past participle)",phonetic:"DEE",example:"A: Qu'est-ce qu'il a dit?\nB: Il a dit oui!\nA: Vraiment?",exampleEn:"A: What did he say?\nB: He said yes!\nA: Really?",note:"From dire (to say/tell).\nJ'ai dit = I said.\nIl m'a dit = he told me."},

  {type:"teach",kind:"word",nl:"écrit",en:"written (past participle)",phonetic:"ay-KREE",example:"A: Tu as écrit à Marie?\nB: Oui, j'ai écrit un e-mail.\nA: Elle a répondu?",exampleEn:"A: Did you write to Marie?\nB: Yes, I wrote an email.\nA: Did she reply?",note:"From écrire (to write).\nJ'ai écrit = I wrote."},

  {type:"teach",kind:"word",nl:"lu",en:"read (past participle)",phonetic:"LEW",example:"A: Tu as lu ce livre?\nB: Oui, j'ai lu tout le livre en un jour.\nA: Il est intéressant?",exampleEn:"A: Did you read this book?\nB: Yes, I read the whole book in one day.\nA: Is it interesting?",note:"From lire (to read).\nJ'ai lu = I read (past).\nAnother short -u participle."},

  {type:"match",pairs:[{nl:"fait",en:"done/made"},{nl:"pris",en:"taken"},{nl:"bu",en:"drunk"},{nl:"vu",en:"seen"}]},

  {type:"mc",q:"The past participle of 'faire' is:",opts:["Faisé","Fai","Fait","Fairu"],ans:"Fait",hint:"One of the most common irregular participles. Short and unique."},

  {type:"fb",s:"J'ai ___ un bon livre cette semaine. (to read)",a:"lu",opts:["lu","lire","li","lué"],hint:"Read (past). From lire. A short two-letter participle."},

  {type:"match",pairs:[{nl:"eu",en:"had"},{nl:"dit",en:"said"},{nl:"écrit",en:"written"},{nl:"lu",en:"read"}]},

  {type:"mc",q:"'J'ai pris le bus' means:",opts:["I will take the bus","I'm taking the bus","I took the bus","I take the bus"],ans:"I took the bus",hint:"Ai + participle = completed past action."},

  {type:"fb",s:"Qu'est-ce que tu as ___? (to do/make)",a:"fait",opts:["fait","faire","fais","faité"],hint:"What did you do? The irregular participle of faire."},

  {type:"mc",q:"'Boire' (to drink) has the past participle:",opts:["Boi","Boiré","Bu","Bué"],ans:"Bu",hint:"Very short, just two letters. Irregular."},

  {type:"fb",s:"Elle a ___ un message. (to write)",a:"écrit",opts:["écrit","écrire","écri","écrivé"],hint:"She wrote a message. From écrire."},

  {type:"mc",q:"Which pair is correct?",opts:["Voir -> vu, lire -> lu","Voir -> vi, lire -> li","Voir -> voiru, lire -> liré","Voir -> voi, lire -> lir"],ans:"Voir -> vu, lire -> lu",hint:"Both are short -u participles from common verbs."},
]},

// ═══ L5: Hier et avant-hier ═══
{id:"fre9l5",title:"Hier et avant-hier",icon:"📅",xp:15,board:true,steps:[
  {type:"intro",title:"Time expressions for the past",desc:"To use passé composé naturally, you need time markers: yesterday, last week, two days ago. These words tell the listener WHEN it happened.",goals:["Use hier, avant-hier, la semaine dernière","Learn il y a + time period","Place time expressions in sentences"]},

  {type:"teach",kind:"word",nl:"hier",en:"yesterday",phonetic:"ee-EHR",example:"A: Tu as travaillé hier?\nB: Non, hier c'était dimanche!\nA: Ah oui, c'est vrai.",exampleEn:"A: Did you work yesterday?\nB: No, yesterday was Sunday!\nA: Oh right, true.",note:"Yesterday. Most common past time word.\nHier soir = yesterday evening.\nHier matin = yesterday morning."},

  {type:"teach",kind:"word",nl:"avant-hier",en:"the day before yesterday",phonetic:"ah-vahn-tee-EHR",example:"A: Quand est-ce que tu l'as vu?\nB: Avant-hier, au supermarché.\nA: Ah, il y a deux jours.",exampleEn:"A: When did you see him?\nB: The day before yesterday, at the supermarket.\nA: Ah, two days ago.",note:"The day before yesterday.\nAvant = before + hier = yesterday."},

  {type:"teach",kind:"phrase",nl:"la semaine dernière",en:"last week",phonetic:"lah suh-MEN dehr-nee-EHR",example:"A: Tu as vu Marie?\nB: Oui, la semaine dernière.\nA: Comment va-t-elle?",exampleEn:"A: Did you see Marie?\nB: Yes, last week.\nA: How is she?",note:"Last week. Dernière = last (feminine).\nLe mois dernier = last month.\nL'année dernière = last year."},

  {type:"teach",kind:"phrase",nl:"il y a + time",en:"ago",phonetic:"eel ee ah",example:"A: Tu as déménagé quand?\nB: Il y a trois mois.\nA: Tu aimes ton nouvel appartement?",exampleEn:"A: When did you move?\nB: Three months ago.\nA: Do you like your new apartment?",note:"Il y a + duration = ago.\nIl y a deux jours = two days ago.\nIl y a un an = a year ago.\nSame 'il y a' as 'there is'!"},

  {type:"teach",kind:"phrase",nl:"ce matin",en:"this morning",phonetic:"suh mah-TAN",example:"A: Tu as pris le bus ce matin?\nB: Non, j'ai marché.\nA: Il fait beau!",exampleEn:"A: Did you take the bus this morning?\nB: No, I walked.\nA: The weather is nice!",note:"This morning. Can be past (already happened today).\nCet après-midi = this afternoon.\nCe soir = this evening (future/past)."},

  {type:"mc",q:"'Il y a trois jours' means:",opts:["In three days","Three days ago","For three days","After three days"],ans:"Three days ago",hint:"Il y a + time = ago. Looking backward."},

  {type:"fb",s:"J'ai mangé au restaurant ___. (yesterday)",a:"hier",opts:["hier","demain","aujourd'hui","avant-hier"],hint:"The most common word for the day before today."},

  {type:"match",pairs:[{nl:"hier",en:"yesterday"},{nl:"avant-hier",en:"day before yesterday"},{nl:"la semaine dernière",en:"last week"},{nl:"il y a deux jours",en:"two days ago"}]},

  {type:"mc",q:"'L'année dernière, j'ai voyagé en Italie' uses 'dernière' because:",opts:["It sounds better","Année is feminine","It is plural","It is past tense"],ans:"Année is feminine",hint:"Dernier (masc.) / dernière (fem.) agrees with the noun."},

  {type:"fb",s:"Il y ___ une semaine, j'ai commencé un nouveau travail.",a:"a",opts:["a","y","est","ai"],hint:"One week ago. Il y ___ + time = ago."},

  {type:"mc",q:"Which correctly places the time expression?",opts:["J'ai hier mangé","Hier mangé j'ai","J'ai mangé hier","Hier j'ai mangé"],ans:"J'ai mangé hier",hint:"Time expressions usually go at the end, but can also start the sentence."},

  {type:"fb",s:"___ matin, j'ai pris le métro.",a:"Ce",opts:["Ce","Cette","Hier","Le"],hint:"This morning. Masculine demonstrative + matin."},

  {type:"match",pairs:[{nl:"hier soir",en:"yesterday evening"},{nl:"hier matin",en:"yesterday morning"},{nl:"ce matin",en:"this morning"},{nl:"le mois dernier",en:"last month"}]},

  {type:"mc",q:"'Il y a' for time (ago) is the same phrase as:",opts:["He went","It is cold","There is/are","He has"],ans:"There is/are",hint:"Same three words, different meaning in time contexts."},

  {type:"fb",s:"Nous avons déménagé il y a trois ___.",a:"mois",opts:["mois","ans","semaines","jours"],hint:"We moved three months ago. What word means months?"},

  {type:"mc",q:"To say 'two hours ago':",opts:["Avant deux heures","Il y a deux heures","Deux heures passé","Hier deux heures"],ans:"Il y a deux heures",hint:"Il y a + time period = ago. Always this structure."},

  {type:"fb",s:"La semaine ___, j'ai visité Paris.",a:"dernière",opts:["dernière","dernier","passée","avant"],hint:"Last week. Semaine is feminine, so the adjective must match."},
]},

// ═══ L6: Le négatif au passé ═══
{id:"fre9l6",title:"Le négatif au passé",icon:"🚫",xp:15,board:true,steps:[
  {type:"intro",title:"Negation in passé composé",desc:"To say you DIDN'T do something: ne goes before avoir, pas goes after avoir (before the participle). The ne...pas wraps around avoir.",goals:["Form negative passé composé","Place ne...pas correctly around avoir","Handle elision with je/il/elle"]},

  {type:"tip",title:"Negative passé composé structure",text:"Subject + NE + avoir + PAS + past participle\n\nJe n'ai pas mangé = I didn't eat\nTu n'as pas fini = You didn't finish\nIl n'a pas vu = He didn't see\nNous n'avons pas compris = We didn't understand\n\nne...pas wraps around AVOIR, not the participle.\nArticles after pas become de/d'."},

  {type:"teach",kind:"phrase",nl:"je n'ai pas mangé",en:"I didn't eat",phonetic:"zhuh nay pah mahn-ZHAY",example:"A: Tu as mangé?\nB: Non, je n'ai pas mangé.\nA: Tu as faim?",exampleEn:"A: Did you eat?\nB: No, I didn't eat.\nA: Are you hungry?",note:"Ne + ai + pas + participle.\nN' before ai (elision before vowel)."},

  {type:"teach",kind:"phrase",nl:"il n'a pas compris",en:"he didn't understand",phonetic:"eel nah pah kom-PREE",example:"A: Il a compris l'exercice?\nB: Non, il n'a pas compris.\nA: Je vais lui expliquer.",exampleEn:"A: Did he understand the exercise?\nB: No, he didn't understand.\nA: I'll explain it to him.",note:"Compris = understood (from comprendre).\nNegation sandwich around a."},

  {type:"teach",kind:"phrase",nl:"nous n'avons pas vu",en:"we didn't see",phonetic:"noo nah-VON pah VEW",example:"A: Vous avez vu le match?\nB: Non, nous n'avons pas vu le match.\nA: Dommage!",exampleEn:"A: Did you see the game?\nB: No, we didn't see the game.\nA: Too bad!",note:"N' before avons.\nPas comes right after avons.\nVu is the participle of voir."},

  {type:"mc",q:"In negative passé composé, ne...pas wraps around:",opts:["The past participle","The subject","The helper verb avoir","The whole sentence"],ans:"The helper verb avoir",hint:"Ne goes BEFORE avoir, pas goes AFTER avoir."},

  {type:"fb",s:"Je n'ai ___ mangé ce matin.",a:"pas",opts:["pas","ne","plus","rien"],hint:"I didn't eat. The second part of negation goes after avoir."},

  {type:"mc",q:"'Elle n'a pas fini' means:",opts:["She finished","She will finish","She didn't finish","She is finishing"],ans:"She didn't finish",hint:"N'a pas + participle = didn't + verb."},

  {type:"fb",s:"Tu ___ as pas regardé le film?",a:"n'",opts:["n'","ne","ni","na"],hint:"You didn't watch? Before 'as' (vowel), ne becomes..."},

  {type:"match",pairs:[{nl:"je n'ai pas mangé",en:"I didn't eat"},{nl:"tu n'as pas vu",en:"you didn't see"},{nl:"il n'a pas dit",en:"he didn't say"},{nl:"nous n'avons pas lu",en:"we didn't read"}]},

  {type:"mc",q:"'Ils n'ont pas aimé le film' means:",opts:["They loved the film","They didn't like the film","They haven't seen the film","They like films"],ans:"They didn't like the film",hint:"N'ont pas + participle = didn't + verb."},

  {type:"fb",s:"Nous n'avons pas ___ de pizza. (to eat)",a:"mangé",opts:["mangé","manger","mange","mangeais"],hint:"We didn't eat pizza. The past participle of manger."},

  {type:"mc",q:"In spoken French, which part of negation is often dropped?",opts:["Pas","Ne","The participle","Avoir"],ans:"Ne",hint:"J'ai pas mangé is very common in casual speech."},

  {type:"fb",s:"Elle n'___ pas compris la question.",a:"a",opts:["a","ai","as","ont"],hint:"She didn't understand. Elle + which form of avoir?"},

  {type:"match",pairs:[{nl:"je n'ai pas bu",en:"I didn't drink"},{nl:"elle n'a pas écrit",en:"she didn't write"},{nl:"ils n'ont pas fait",en:"they didn't do"},{nl:"vous n'avez pas pris",en:"you didn't take"}]},

  {type:"mc",q:"After 'pas', articles change. 'Je n'ai pas mangé DE pain' uses 'de' because:",opts:["Pain is masculine","Negation changes articles to de","De sounds better","It is a question"],ans:"Negation changes articles to de",hint:"Same rule as present tense: after pas, un/une/du/de la become de."},

  {type:"fb",s:"Vous n'___ pas voyagé cet été?",a:"avez",opts:["avez","avons","ont","as"],hint:"You (formal) didn't travel? Vous + which form?"},

  {type:"mc",q:"Which sentence is grammatically correct?",opts:["Je n'ai mangé pas","Je ne pas ai mangé","Je n'ai pas mangé","Je pas n'ai mangé"],ans:"Je n'ai pas mangé",hint:"ne/n' before avoir, pas after avoir. Fixed order."},
]},

// ═══ L7: Questions au passé ═══
{id:"fre9l7",title:"Questions au passé",icon:"❓",xp:15,board:true,steps:[
  {type:"intro",title:"Questions au passé composé",desc:"Ask about the past: Did you eat? What did you do? Where did you go? The question patterns from present tense work the same way with passé composé.",goals:["Form yes/no questions about the past","Use question words with passé composé","Ask and answer fluently about past events"]},

  {type:"teach",kind:"phrase",nl:"Est-ce que tu as mangé?",en:"Did you eat?",phonetic:"es kuh tew ah mahn-ZHAY",example:"A: Est-ce que tu as mangé?\nB: Oui, j'ai mangé il y a une heure.\nA: Parfait.",exampleEn:"A: Did you eat?\nB: Yes, I ate an hour ago.\nA: Perfect.",note:"Est-ce que + subject + avoir + participle?\nSame est-ce que as present tense.\nJust add passé composé after it."},

  {type:"teach",kind:"phrase",nl:"Qu'est-ce que tu as fait?",en:"What did you do?",phonetic:"kes kuh tew ah FEH",example:"A: Qu'est-ce que tu as fait ce week-end?\nB: J'ai visité un musée.\nA: Lequel?",exampleEn:"A: What did you do this weekend?\nB: I visited a museum.\nA: Which one?",note:"Qu'est-ce que = what.\nQu'est-ce que + passé composé = what did you...?\nThe most common past question."},

  {type:"teach",kind:"phrase",nl:"Où est-ce que tu as dormi?",en:"Where did you sleep?",phonetic:"oo es kuh tew ah dor-MEE",example:"A: Où est-ce que tu as dormi?\nB: J'ai dormi chez un ami.\nA: C'était bien?",exampleEn:"A: Where did you sleep?\nB: I slept at a friend's place.\nA: Was it nice?",note:"Où = where.\nOù + est-ce que + passé composé.\nDormi = slept (from dormir, -ir -> -i)."},

  {type:"teach",kind:"phrase",nl:"Quand est-ce que tu as commencé?",en:"When did you start?",phonetic:"kahn es kuh tew ah koh-mahn-SAY",example:"A: Quand est-ce que tu as commencé le français?\nB: J'ai commencé il y a six mois.\nA: Ton français est déjà bon!",exampleEn:"A: When did you start French?\nB: I started six months ago.\nA: Your French is already good!",note:"Quand = when.\nCommencé = started (regular -er).\nQuand + est-ce que works for past too."},

  {type:"tip",title:"Question patterns in passé composé",text:"Yes/no: Est-ce que tu as mangé?\nIntonation only: Tu as mangé? (rising voice)\n\nWith question words:\nQu'est-ce que tu as fait? = What did you do?\nOù est-ce que tu as mangé? = Where did you eat?\nQuand est-ce que tu as fini? = When did you finish?\nComment est-ce que tu as trouvé? = How did you find?\nPourquoi est-ce que tu as dit ça? = Why did you say that?"},

  {type:"mc",q:"'Qu'est-ce que tu as fait?' asks:",opts:["Where did you go?","What did you do?","When did you finish?","How did you do?"],ans:"What did you do?",hint:"Qu'est-ce que = what. The most common past question."},

  {type:"fb",s:"___-ce que tu as mangé?",a:"Est",opts:["Est","Et","Qu'est","Où"],hint:"Did you eat? The yes/no question starter."},

  {type:"match",pairs:[{nl:"Qu'est-ce que",en:"What"},{nl:"Où est-ce que",en:"Where"},{nl:"Quand est-ce que",en:"When"},{nl:"Pourquoi est-ce que",en:"Why"}]},

  {type:"mc",q:"To ask 'Where did you eat?', you say:",opts:["Où tu as mangé?","Où est-ce que tu as mangé?","Tu as mangé où est-ce que?","Est-ce que où tu as mangé?"],ans:"Où est-ce que tu as mangé?",hint:"Question word + est-ce que + subject + passé composé."},

  {type:"fb",s:"Qu'est-ce que vous avez ___ hier soir? (to do)",a:"fait",opts:["fait","faire","fais","faites"],hint:"What did you do? Irregular past participle of faire."},

  {type:"mc",q:"'Tu as aimé le film?' is a question formed by:",opts:["Adding est-ce que","Using rising intonation","Inverting subject and verb","Adding quand"],ans:"Using rising intonation",hint:"Same as a statement, but your voice goes up at the end."},

  {type:"fb",s:"___ est-ce que tu as dormi? Chez un ami?",a:"Où",opts:["Où","Quand","Comment","Pourquoi"],hint:"___did you sleep? At a friend's? Asking about location."},

  {type:"match",pairs:[{nl:"Tu as mangé?",en:"Did you eat? (intonation)"},{nl:"Est-ce que tu as mangé?",en:"Did you eat? (formal)"},{nl:"Qu'est-ce que tu as mangé?",en:"What did you eat?"},{nl:"Où est-ce que tu as mangé?",en:"Where did you eat?"}]},

  {type:"mc",q:"'Pourquoi est-ce que tu as dit ça?' asks:",opts:["What did you say?","When did you say it?","Why did you say that?","How did you say it?"],ans:"Why did you say that?",hint:"Pourquoi = why. Ça = that."},

  {type:"fb",s:"___ est-ce que tu as commencé le français?",a:"Quand",opts:["Quand","Où","Comment","Qu'est-ce que"],hint:"___ did you start French? Asking about time."},

  {type:"mc",q:"Which response fits 'Qu'est-ce que tu as fait ce week-end?'",opts:["Oui, j'ai fait","J'ai visité un musée","Hier soir","Au restaurant"],ans:"J'ai visité un musée",hint:"The question asks WHAT you did. Answer with an activity."},

  {type:"fb",s:"Comment est-ce que tu ___ trouvé le film?",a:"as",opts:["as","ai","a","avez"],hint:"How did you find the movie? Tu + which form of avoir?"},
]},

// ═══ L8: Révision Unit 9 ═══
{id:"fre9l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 9 Review",desc:"Review the passé composé with avoir: regular and irregular participles, negation, time expressions, and questions. This is the foundation of French past tense.",goals:["Review all passé composé forms","Test irregular participles","Combine negation and questions"]},

  {type:"mc",q:"The passé composé is formed with:",opts:["Subject + participle","Subject + avoir + participle","Subject + être + infinitive","Subject + verb + -é"],ans:"Subject + avoir + participle",hint:"Two parts: a conjugated helper + the past form of the verb."},

  {type:"fb",s:"J'ai ___ un bon film hier. (to see)",a:"vu",opts:["vu","voir","vois","voyé"],hint:"Irregular participle of voir. Short, two letters."},

  {type:"match",pairs:[{nl:"mangé",en:"eaten (-er)"},{nl:"fini",en:"finished (-ir)"},{nl:"vendu",en:"sold (-re)"},{nl:"fait",en:"done (irreg.)"}]},

  {type:"mc",q:"'Il n'a pas compris' means:",opts:["He understood","He will understand","He didn't understand","He understands"],ans:"He didn't understand",hint:"N'a pas + participle = didn't + verb."},

  {type:"fb",s:"Nous n'avons ___ mangé au restaurant.",a:"pas",opts:["pas","ne","plus","rien"],hint:"We didn't eat at the restaurant. Second negation word."},

  {type:"mc",q:"'Il y a deux semaines' means:",opts:["In two weeks","Two weeks ago","For two weeks","Every two weeks"],ans:"Two weeks ago",hint:"Il y a + time = ago. Looking backward."},

  {type:"fb",s:"Qu'est-ce que tu as ___ ce week-end? (to do)",a:"fait",opts:["fait","faire","fais","faité"],hint:"What did you do? The irregular participle of faire."},

  {type:"match",pairs:[{nl:"pris",en:"taken"},{nl:"bu",en:"drunk"},{nl:"dit",en:"said"},{nl:"écrit",en:"written"}]},

  {type:"mc",q:"With avoir, the past participle:",opts:["Agrees with the subject","Never changes","Agrees with the object","Changes for tense"],ans:"Never changes",hint:"Unlike être verbs, avoir participles stay the same for all subjects."},

  {type:"fb",s:"Elle a ___ trois livres la semaine dernière. (to read)",a:"lu",opts:["lu","lire","lué","li"],hint:"She read three books. From lire: short irregular participle."},

  {type:"mc",q:"To ask 'What did you eat?':",opts:["Qu'est-ce que tu as mangé?","Tu as mangé quoi est-ce?","Mangé tu as qu'est-ce que?","Est-ce que qu'est tu as mangé?"],ans:"Qu'est-ce que tu as mangé?",hint:"Question word + subject + passé composé. Standard order."},

  {type:"fb",s:"Hier, j'ai ___ un café et un croissant. (to take/have)",a:"pris",opts:["pris","prendre","prendé","prendu"],hint:"I had a coffee. From prendre: irregular participle."},

  {type:"match",pairs:[{nl:"hier",en:"yesterday"},{nl:"la semaine dernière",en:"last week"},{nl:"il y a un mois",en:"a month ago"},{nl:"avant-hier",en:"day before yesterday"}]},

  {type:"mc",q:"'Vous n'avez pas voyagé cet été?' expects:",opts:["A location","A yes or no answer","A time","A name"],ans:"A yes or no answer",hint:"Est-ce que (even without the words) + negation = expecting yes/no."},

  {type:"fb",s:"___ est-ce que vous avez visité?",a:"Qu'",opts:["Qu'","Où","Quand","Comment"],hint:"What did you visit? The question word for 'what'."},

  {type:"mc",q:"Which shows correct negation?",opts:["Je n'ai pas bu","Je ne pas ai bu","Je n'ai bu pas","Pas je n'ai bu"],ans:"Je n'ai pas bu",hint:"ne/n' before avoir, pas after avoir. Always this order."},

  {type:"fb",s:"Elles ont ___ toute la nuit. (to dance)",a:"dansé",opts:["dansé","danser","dansée","dansés"],hint:"They danced. Regular -er past participle. With avoir: no agreement."},
]},
]},

// ═══════════════════════════════════════════════
//  UNIT 10 — Le passé composé (être)
//  Level: A2.2 | Lessons: 8 | Track: v1
// ═══════════════════════════════════════════════

{n:10,lang:"fr",track:"v1",title:"Le passé composé (être)",sub:"Past with être & Agreement",icon:"🚶",level:"A2.2",color:"#7B5EE8",lessons:[

// ═══ L1: Être au passé composé ═══
{id:"fre10l1",title:"Être au passé",icon:"🔀",xp:15,board:true,steps:[
  {type:"intro",title:"Passé composé with être",desc:"Some verbs use être instead of avoir as the helper. These are mostly verbs of movement or state change. With être, the past participle AGREES with the subject.",goals:["Know why some verbs use être","Understand participle agreement","Learn the first être verbs"]},

  {type:"tip",title:"Avoir vs être: the key difference",text:"AVOIR: most verbs. Participle never changes.\nJ'ai mangé. Elle a mangé. (same form)\n\nÊTRE: movement/state change verbs.\nParticiple AGREES with subject (like an adjective).\nJe suis allé. (masculine)\nJe suis allée. (feminine)\nIls sont allés. (masc. plural)\nElles sont allées. (fem. plural)"},

  {type:"teach",kind:"phrase",nl:"je suis allé(e)",en:"I went",phonetic:"zhuh swee ah-LAY",example:"A: Tu es allé où hier?\nB: Je suis allé au cinéma.\nA: Tu as aimé le film?",exampleEn:"A: Where did you go yesterday?\nB: I went to the cinema.\nA: Did you like the movie?",note:"Aller uses être. Je suis = I am.\nMale speaker: allé. Female: allée.\nThe -e is for feminine agreement."},

  {type:"teach",kind:"phrase",nl:"elle est arrivée",en:"she arrived",phonetic:"el ay tah-ree-VAY",example:"A: Marie est arrivée?\nB: Oui, elle est arrivée il y a cinq minutes.\nA: Parfait!",exampleEn:"A: Has Marie arrived?\nB: Yes, she arrived five minutes ago.\nA: Perfect!",note:"Arriver uses être.\nElle = feminine, so arrivée has -ée.\nMasculine: il est arrivé (no extra -e)."},

  {type:"teach",kind:"phrase",nl:"il est parti",en:"he left / he departed",phonetic:"eel ay par-TEE",example:"A: Pierre est là?\nB: Non, il est parti à huit heures.\nA: Dommage!",exampleEn:"A: Is Pierre here?\nB: No, he left at eight.\nA: Too bad!",note:"Partir uses être.\nIl = masculine: parti.\nElle est partie (feminine: add -e)."},

  {type:"teach",kind:"phrase",nl:"nous sommes restés",en:"we stayed",phonetic:"noo som res-TAY",example:"A: Vous êtes sortis hier soir?\nB: Non, nous sommes restés à la maison.\nA: C'était bien quand même?",exampleEn:"A: Did you go out last night?\nB: No, we stayed at home.\nA: Was it nice anyway?",note:"Rester uses être.\nNous (mixed/masc.) = restés (-s for plural).\nNous (all fem.) = restées."},

  {type:"mc",q:"With être verbs, the past participle:",opts:["Never changes","Agrees with the subject","Agrees with the object","Always ends in -é"],ans:"Agrees with the subject",hint:"Like an adjective: it matches gender and number of the subject."},

  {type:"fb",s:"Elle ___ allée au marché.",a:"est",opts:["est","a","ai","sont"],hint:"She went. Aller uses which helper verb?"},

  {type:"mc",q:"'Il est arrivé' vs 'Elle est arrivée': the difference is:",opts:["Different verbs","Different tenses","Gender agreement on participle","Different meanings"],ans:"Gender agreement on participle",hint:"Feminine adds -e to the participle. The verb is the same."},

  {type:"fb",s:"Nous ___ restés à la maison.",a:"sommes",opts:["sommes","avons","êtes","sont"],hint:"We stayed. Which form of être for nous?"},

  {type:"match",pairs:[{nl:"je suis allé(e)",en:"I went"},{nl:"elle est arrivée",en:"she arrived"},{nl:"il est parti",en:"he left"},{nl:"nous sommes restés",en:"we stayed"}]},

  {type:"mc",q:"Why does 'je suis allée' have an extra -e?",opts:["It is plural","The speaker is feminine","It is formal","It is a question"],ans:"The speaker is feminine",hint:"With être, the participle matches the subject's gender."},

  {type:"fb",s:"Il est ___ à neuf heures. (to leave)",a:"parti",opts:["parti","partie","partis","parties"],hint:"He left. Masculine singular: no extra letters."},

  {type:"mc",q:"Which helper verb does 'aller' use?",opts:["Avoir","Être","Both","Neither"],ans:"Être",hint:"Aller is a movement verb. Movement verbs use this helper."},

  {type:"fb",s:"Elles ___ arrivées en retard.",a:"sont",opts:["sont","ont","sommes","êtes"],hint:"They (f.) arrived. Elles + which form of être?"},

  {type:"match",pairs:[{nl:"je suis",en:"I am (helper)"},{nl:"tu es",en:"you are (helper)"},{nl:"il/elle est",en:"he/she is (helper)"},{nl:"ils/elles sont",en:"they are (helper)"}]},

  {type:"mc",q:"'Nous sommes partis' means:",opts:["We left","We arrived","We stayed","We went"],ans:"We left",hint:"Partir = to leave. Sommes + participle = past with être."},

  {type:"fb",s:"Tu ___ allé(e) au cinéma hier?",a:"es",opts:["es","est","as","ai"],hint:"You (informal) went? Tu + which form of être?"},
]},

// ═══ L2: Les verbes de mouvement ═══
{id:"fre10l2",title:"DR MRS VANDERTRAMP",icon:"🚪",xp:15,board:true,steps:[
  {type:"intro",title:"The être verbs: DR MRS VANDERTRAMP",desc:"There's a famous mnemonic for the verbs that use être: DR MRS VANDERTRAMP. Each letter stands for a verb of movement or state change.",goals:["Learn the mnemonic","Know all major être verbs","Use them in passé composé"]},

  {type:"tip",title:"DR MRS VANDERTRAMP",text:"D: Devenir (to become)\nR: Revenir (to come back)\nM: Mourir (to die)\nR: Retourner (to return)\nS: Sortir (to go out)\nV: Venir (to come)\nA: Aller (to go)\nN: Naître (to be born)\nD: Descendre (to go down)\nE: Entrer (to enter)\nR: Rentrer (to come home)\nT: Tomber (to fall)\nR: Rester (to stay)\nA: Arriver (to arrive)\nM: Monter (to go up)\nP: Partir (to leave)\n\nAll use ÊTRE in passé composé."},

  {type:"teach",kind:"word",nl:"venir",en:"to come (past: venu)",phonetic:"vuh-NEER (vuh-NEW)",example:"A: Marie est venue hier?\nB: Oui, elle est venue avec Pierre.\nA: Ils sont restés longtemps?",exampleEn:"A: Did Marie come yesterday?\nB: Yes, she came with Pierre.\nA: Did they stay long?",note:"Venu/venue/venus/venues.\nIrregular participle.\nDevenir -> devenu, revenir -> revenu."},

  {type:"teach",kind:"word",nl:"sortir",en:"to go out (past: sorti)",phonetic:"sor-TEER (sor-TEE)",example:"A: Tu es sorti ce week-end?\nB: Oui, je suis sorti samedi soir.\nA: Tu es allé où?",exampleEn:"A: Did you go out this weekend?\nB: Yes, I went out Saturday night.\nA: Where did you go?",note:"Sorti/sortie/sortis/sorties.\nRegular -ir participle (-i).\nOpposite: entrer."},

  {type:"teach",kind:"word",nl:"entrer",en:"to enter (past: entré)",phonetic:"ahn-TRAY (ahn-TRAY)",example:"A: Il est entré dans le magasin?\nB: Oui, il est entré il y a dix minutes.\nA: Il cherche quoi?",exampleEn:"A: Did he enter the shop?\nB: Yes, he entered ten minutes ago.\nA: What is he looking for?",note:"Entré/entrée/entrés/entrées.\nRegular -er participle (-é).\nOpposite: sortir."},

  {type:"teach",kind:"word",nl:"monter",en:"to go up (past: monté)",phonetic:"mon-TAY",example:"A: Tu es montée à pied?\nB: Oui, je suis montée par l'escalier.\nA: Cinq étages!",exampleEn:"A: Did you walk up?\nB: Yes, I went up by the stairs.\nA: Five floors!",note:"Monté/montée/montés/montées.\nRegular -er participle.\nOpposite: descendre."},

  {type:"teach",kind:"word",nl:"descendre",en:"to go down (past: descendu)",phonetic:"day-SAHN-druh (day-sahn-DEW)",example:"A: Tu es descendu au sous-sol?\nB: Oui, je suis descendu chercher du vin.\nA: Bonne idée!",exampleEn:"A: Did you go down to the basement?\nB: Yes, I went down to get some wine.\nA: Good idea!",note:"Descendu/descendue/descendus/descendues.\nRegular -re participle (-u)."},

  {type:"teach",kind:"word",nl:"tomber",en:"to fall (past: tombé)",phonetic:"tom-BAY",example:"A: Qu'est-ce qui s'est passé?\nB: Je suis tombé dans la rue!\nA: Tu vas bien?",exampleEn:"A: What happened?\nB: I fell in the street!\nA: Are you OK?",note:"Tombé/tombée/tombés/tombées.\nRegular -er participle.\nAlways uses être."},

  {type:"teach",kind:"word",nl:"naître",en:"to be born (past: né)",phonetic:"NEH-truh (NAY)",example:"A: Où est-ce que tu es né?\nB: Je suis né à Lyon.\nA: Et tu habites à Paris maintenant?",exampleEn:"A: Where were you born?\nB: I was born in Lyon.\nA: And you live in Paris now?",note:"Né/née/nés/nées.\nIrregular participle.\nOpposite: mourir (to die) -> mort."},

  {type:"match",pairs:[{nl:"aller -> allé",en:"to go"},{nl:"venir -> venu",en:"to come"},{nl:"partir -> parti",en:"to leave"},{nl:"arriver -> arrivé",en:"to arrive"}]},

  {type:"mc",q:"DR MRS VANDERTRAMP verbs all share:",opts:["The same conjugation","They use être in passé composé","They are regular","They describe food"],ans:"They use être in passé composé",hint:"This mnemonic groups verbs by their helper verb choice."},

  {type:"fb",s:"Elle est ___ hier soir. (to come)",a:"venue",opts:["venue","venu","venus","venir"],hint:"She came. Feminine singular: add -e to the participle."},

  {type:"match",pairs:[{nl:"sortir -> sorti",en:"to go out"},{nl:"entrer -> entré",en:"to enter"},{nl:"monter -> monté",en:"to go up"},{nl:"descendre -> descendu",en:"to go down"}]},

  {type:"mc",q:"'Je suis né à Paris' means:",opts:["I went to Paris","I was born in Paris","I live in Paris","I came from Paris"],ans:"I was born in Paris",hint:"Né = born. One of the être verbs in the mnemonic."},

  {type:"fb",s:"Il est ___ dans l'escalier! (to fall)",a:"tombé",opts:["tombé","tombée","tomber","tombés"],hint:"He fell. Masculine singular: standard -er participle."},

  {type:"mc",q:"The opposite pairs are: monter/descendre, entrer/sortir, and:",opts:["Naître/mourir","Aller/venir","Arriver/partir","All of these"],ans:"All of these",hint:"Many être verbs come in opposite pairs of movement."},

  {type:"fb",s:"Nous sommes ___ à l'hôtel. (to go up, masc. pl.)",a:"montés",opts:["montés","monté","montée","montées"],hint:"We went up. Nous (masc. plural): add -s."},

  {type:"mc",q:"How many être verbs does DR MRS VANDERTRAMP contain?",opts:["10","14","16","20"],ans:"16",hint:"Count each letter in the mnemonic. Each represents one verb."},
]},

// ═══ L3: L'accord du participe ═══
{id:"fre10l3",title:"L'accord du participe",icon:"✅",xp:15,board:true,steps:[
  {type:"intro",title:"Agreement of the past participle",desc:"With être, the participle agrees with the subject like an adjective: add -e for feminine, -s for plural, -es for feminine plural.",goals:["Add -e for feminine subjects","Add -s for plural subjects","Combine both: -es for feminine plural"]},

  {type:"tip",title:"Agreement rules",text:"Masculine singular: allé\nFeminine singular: allée (+e)\nMasculine plural: allés (+s)\nFeminine plural: allées (+es)\n\nMixed group (m+f): use masculine plural (allés)\nThis only applies to ÊTRE verbs.\nAVOIR verbs: NO agreement with subject."},

  {type:"teach",kind:"phrase",nl:"elle est sortie",en:"she went out",phonetic:"el ay sor-TEE",example:"A: Où est Sophie?\nB: Elle est sortie.\nA: Elle est sortie avec qui?",exampleEn:"A: Where is Sophie?\nB: She went out.\nA: Who did she go out with?",note:"Feminine: sortie (add -e).\nThe -e makes the final consonant audible:\nsorti (ee) vs sortie (ee, same in this case)."},

  {type:"teach",kind:"phrase",nl:"ils sont partis",en:"they (m.) left",phonetic:"eel son par-TEE",example:"A: Les garçons sont là?\nB: Non, ils sont partis.\nA: Ils sont partis quand?",exampleEn:"A: Are the boys here?\nB: No, they left.\nA: When did they leave?",note:"Masculine plural: partis (add -s).\nFor mixed groups (boys+girls), still use -s (masc. pl.)."},

  {type:"teach",kind:"phrase",nl:"elles sont venues",en:"they (f.) came",phonetic:"el son vuh-NEW",example:"A: Les filles sont venues?\nB: Oui, elles sont venues à midi.\nA: Toutes les trois?",exampleEn:"A: Did the girls come?\nB: Yes, they came at noon.\nA: All three?",note:"Feminine plural: venues (add -es).\nVenu -> venue (fem.) -> venues (fem. pl.)."},

  {type:"mc",q:"'Elle est arrivé' is wrong because:",opts:["Arriver uses avoir","The participle needs -e for feminine","Est is wrong","The meaning is wrong"],ans:"The participle needs -e for feminine",hint:"With être, feminine subjects require the -e ending."},

  {type:"fb",s:"Marie est ___. (to arrive, fem.)",a:"arrivée",opts:["arrivée","arrivé","arrivés","arrivées"],hint:"She arrived. Feminine singular: -ée ending."},

  {type:"match",pairs:[{nl:"il est parti",en:"he left"},{nl:"elle est partie",en:"she left"},{nl:"ils sont partis",en:"they (m.) left"},{nl:"elles sont parties",en:"they (f.) left"}]},

  {type:"mc",q:"For a group of 5 women and 1 man, you use:",opts:["Feminine plural","Masculine plural","Feminine singular","Both forms"],ans:"Masculine plural",hint:"Mixed gender groups always use the masculine form in French."},

  {type:"fb",s:"Elles sont ___ à la maison. (to stay, fem. pl.)",a:"restées",opts:["restées","resté","restés","restée"],hint:"They (f.) stayed. Feminine plural: -ées."},

  {type:"mc",q:"Which is correct for a female speaker?",opts:["Je suis allé","Je suis allée","Je suis allés","Je suis allées"],ans:"Je suis allée",hint:"Female = feminine singular. Add one -e."},

  {type:"fb",s:"Les garçons sont ___ hier soir. (to go out, masc. pl.)",a:"sortis",opts:["sortis","sorti","sortie","sorties"],hint:"The boys went out. Masculine plural: add -s."},

  {type:"match",pairs:[{nl:"née",en:"born (f.)"},{nl:"nés",en:"born (m. pl.)"},{nl:"venues",en:"came (f. pl.)"},{nl:"descendue",en:"went down (f.)"}]},

  {type:"mc",q:"'Nous sommes arrivés' (with -s) tells us the group is:",opts:["All female","All male or mixed","Exactly two people","Speaking formally"],ans:"All male or mixed",hint:"-és ending: masculine plural. Could include only men or a combination."},

  {type:"fb",s:"Sophie et Marie sont ___ au café. (to go)",a:"allées",opts:["allées","allé","allés","allée"],hint:"Two females went. Feminine plural: -ées."},

  {type:"mc",q:"With AVOIR, 'elles ont mangé' has no agreement. With ÊTRE, agreement is:",opts:["Optional","Mandatory","Only in writing","Only formal"],ans:"Mandatory",hint:"Être verbs ALWAYS require participle agreement. No exceptions."},

  {type:"fb",s:"Pierre et Jean sont ___ à Paris. (to be born, masc. pl.)",a:"nés",opts:["nés","né","née","nées"],hint:"Two males were born. Masculine plural: add -s."},

  {type:"mc",q:"The participle 'tombée' is:",opts:["Masculine singular","Feminine singular","Masculine plural","Feminine plural"],ans:"Feminine singular",hint:"Base form tombé + one -e. What gender/number does that extra -e indicate?"},
]},

// ═══ L4: Raconter une histoire ═══
{id:"fre10l4",title:"Raconter une histoire",icon:"📖",xp:15,board:true,steps:[
  {type:"intro",title:"Telling a story with être verbs",desc:"Combine être verbs to tell a story: I went out, I went to, I arrived, I came home. Sequence past events naturally.",goals:["Chain multiple être verbs in a story","Use time markers between events","Tell a complete past narrative"]},

  {type:"teach",kind:"phrase",nl:"D'abord... puis... enfin...",en:"First... then... finally...",phonetic:"dah-BOR... PWEE... ahn-FAN",example:"A: Raconte ton samedi!\nB: D'abord, je suis allé au marché. Puis je suis rentré. Enfin, je suis sorti avec des amis.\nA: Belle journée!",exampleEn:"A: Tell me about your Saturday!\nB: First, I went to the market. Then I came home. Finally, I went out with friends.\nA: Nice day!",note:"Sequencing words for narratives.\nD'abord = first\nPuis/ensuite = then\nEnfin = finally."},

  {type:"teach",kind:"word",nl:"rentrer",en:"to come home (past: rentré)",phonetic:"rahn-TRAY",example:"A: À quelle heure tu es rentré?\nB: Je suis rentré à minuit!\nA: C'est tard!",exampleEn:"A: What time did you come home?\nB: I came home at midnight!\nA: That's late!",note:"Rentrer = to return home.\nRentré/rentrée/rentrés/rentrées.\nRegular -er participle. Uses être."},

  {type:"teach",kind:"word",nl:"retourner",en:"to go back / return (past: retourné)",phonetic:"ruh-toor-NAY",example:"A: Tu es retourné au restaurant?\nB: Oui, je suis retourné hier.\nA: C'était toujours bon?",exampleEn:"A: Did you go back to the restaurant?\nB: Yes, I went back yesterday.\nA: Was it still good?",note:"Retourner = to return to a place.\nDifferent from rentrer (return home).\nUses être."},

  {type:"mc",q:"'D'abord je suis sorti, puis je suis allé au parc.' This tells a:",opts:["Future plan","Story in sequence","Question","Command"],ans:"Story in sequence",hint:"D'abord... puis... chains past events in order."},

  {type:"fb",s:"Je suis ___ à la maison à dix heures. (to come home)",a:"rentré",opts:["rentré","rentrée","rentrés","retourné"],hint:"I (male) came home. Masculine singular of the participle."},

  {type:"match",pairs:[{nl:"d'abord",en:"first"},{nl:"puis / ensuite",en:"then"},{nl:"enfin",en:"finally"},{nl:"après",en:"after"}]},

  {type:"mc",q:"'Elle est sortie, puis elle est allée au café, enfin elle est rentrée.' How many events?",opts:["One","Two","Three","Four"],ans:"Three",hint:"Count the past participles: sortie, allée, rentrée. Each one is a separate event."},

  {type:"fb",s:"Samedi, je suis ___ au musée. (to go, masc.)",a:"allé",opts:["allé","allée","allés","aller"],hint:"I went. Male speaker: no extra letters on the participle."},

  {type:"mc",q:"'Rentrer' and 'retourner' both mean 'to return', but:",opts:["They are identical","Rentrer = home specifically","Retourner = home specifically","They use avoir"],ans:"Rentrer = home specifically",hint:"One means specifically returning to your home."},

  {type:"fb",s:"D'abord elle est ___, puis elle est partie. (to arrive, fem.)",a:"arrivée",opts:["arrivée","arrivé","arrivés","arrivées"],hint:"First she arrived. Feminine: -ée ending."},

  {type:"match",pairs:[{nl:"je suis sorti",en:"I went out"},{nl:"je suis allé",en:"I went"},{nl:"je suis arrivé",en:"I arrived"},{nl:"je suis rentré",en:"I came home"}]},

  {type:"mc",q:"In a story using être verbs, each participle must:",opts:["Stay the same","Agree with the subject each time","Change randomly","Use avoir sometimes"],ans:"Agree with the subject each time",hint:"Every être participle in the story must match the subject."},

  {type:"fb",s:"Les filles sont ___ au parc, puis elles sont rentrées. (to go, fem. pl.)",a:"allées",opts:["allées","allé","allés","allée"],hint:"The girls went. Feminine plural: -ées."},

  {type:"mc",q:"'Je suis retourné en France' means:",opts:["I returned to France","I went home to France","I was born in France","I stayed in France"],ans:"I returned to France",hint:"Retourner = to go back to a place (not necessarily home)."},

  {type:"fb",s:"Nous sommes sortis, ___ nous sommes allés au restaurant.",a:"puis",opts:["puis","d'abord","enfin","avant"],hint:"We went out, THEN we went to the restaurant. Which sequencer?"},

  {type:"mc",q:"A female narrator would say:",opts:["Je suis parti","Je suis partie","Je suis partis","Je suis parties"],ans:"Je suis partie",hint:"Female speaker = feminine singular. Add -e to parti."},

  {type:"fb",s:"Enfin, nous sommes ___ à la maison. (to come home, masc. pl.)",a:"rentrés",opts:["rentrés","rentré","rentrée","rentrées"],hint:"Finally, we came home. Nous (masc. plural): -és."},
]},

// ═══ L5: Les pronominaux au passé ═══
{id:"fre10l5",title:"Les pronominaux au passé",icon:"🪞",xp:15,board:true,steps:[
  {type:"intro",title:"Reflexive verbs in passé composé",desc:"Reflexive verbs (se lever, se coucher) ALWAYS use être in passé composé. The reflexive pronoun goes before être. Agreement with the subject applies.",goals:["Form passé composé of reflexive verbs","Place pronouns correctly","Apply agreement rules"]},

  {type:"tip",title:"Reflexive passé composé pattern",text:"Subject + reflexive pronoun + ÊTRE + participle\n\nje me suis levé(e) = I got up\ntu t'es lavé(e) = you washed\nil s'est habillé = he got dressed\nelle s'est couchée = she went to bed\nnous nous sommes levés = we got up\nils se sont réveillés = they woke up\n\nReflexive pronoun BEFORE être.\nParticiple agrees with subject."},

  {type:"teach",kind:"phrase",nl:"je me suis levé(e)",en:"I got up",phonetic:"zhuh muh swee luh-VAY",example:"A: Tu t'es levé à quelle heure?\nB: Je me suis levé à sept heures.\nA: C'est tôt!",exampleEn:"A: What time did you get up?\nB: I got up at seven.\nA: That's early!",note:"Me + suis + levé (m.) / levée (f.).\nThe reflexive pronoun comes before être."},

  {type:"teach",kind:"phrase",nl:"elle s'est couchée",en:"she went to bed",phonetic:"el say koo-SHAY",example:"A: Marie s'est couchée tôt?\nB: Oui, elle s'est couchée à neuf heures.\nA: Elle était fatiguée.",exampleEn:"A: Did Marie go to bed early?\nB: Yes, she went to bed at nine.\nA: She was tired.",note:"S' + est + couchée (fem. agreement).\nSe becomes s' before vowel (est)."},

  {type:"teach",kind:"phrase",nl:"ils se sont réveillés",en:"they woke up",phonetic:"eel suh son ray-vay-YAY",example:"A: Les enfants se sont réveillés?\nB: Oui, ils se sont réveillés à six heures.\nA: C'est trop tôt!",exampleEn:"A: Did the kids wake up?\nB: Yes, they woke up at six.\nA: That's too early!",note:"Se + sont + réveillés (masc. pl.).\nSe stays as se before consonant."},

  {type:"mc",q:"Reflexive verbs in passé composé use:",opts:["Avoir","Être","Both","Neither"],ans:"Être",hint:"ALL reflexive verbs use this helper. No exceptions."},

  {type:"fb",s:"Je me ___ levé à huit heures.",a:"suis",opts:["suis","ai","suis","est"],hint:"I got up. Reflexive uses which helper verb?"},

  {type:"match",pairs:[{nl:"je me suis levé",en:"I got up"},{nl:"tu t'es lavé",en:"you washed"},{nl:"il s'est habillé",en:"he got dressed"},{nl:"elle s'est couchée",en:"she went to bed"}]},

  {type:"mc",q:"In 'elle s'est couchée', the -ée shows:",opts:["Past tense","Feminine agreement","Plural","Formal speech"],ans:"Feminine agreement",hint:"With être, the participle matches the subject's gender."},

  {type:"fb",s:"Tu t'___ réveillé(e) tôt?",a:"es",opts:["es","est","as","ai"],hint:"You woke up? Tu + which form of être?"},

  {type:"mc",q:"The reflexive pronoun in passé composé goes:",opts:["After être","After the participle","Before être","Before the subject"],ans:"Before être",hint:"Subject + pronoun + être + participle. Pronoun is between subject and helper."},

  {type:"fb",s:"Nous nous ___ habillés rapidement.",a:"sommes",opts:["sommes","avons","êtes","sont"],hint:"We got dressed. Nous + which form of être?"},

  {type:"match",pairs:[{nl:"nous nous sommes levés",en:"we got up"},{nl:"vous vous êtes lavé(s)",en:"you washed"},{nl:"ils se sont habillés",en:"they got dressed"},{nl:"elles se sont couchées",en:"they (f.) went to bed"}]},

  {type:"mc",q:"'Les filles se sont lavées' has -ées because:",opts:["Laver is feminine","The subject is feminine plural","Se makes it feminine","It sounds better"],ans:"The subject is feminine plural",hint:"Elles (fem. pl.) = -ées on the participle."},

  {type:"fb",s:"Elle s'est ___ à dix heures. (to go to bed, fem.)",a:"couchée",opts:["couchée","couché","couchés","couchées"],hint:"She went to bed. Feminine singular: standard -ée agreement."},

  {type:"mc",q:"Correct order for 'we got up':",opts:["Nous suis nous levés","Nous nous sommes levés","Nous levés nous sommes","Sommes nous nous levés"],ans:"Nous nous sommes levés",hint:"Subject + reflexive pronoun + être + participle."},

  {type:"fb",s:"Il s'___ réveillé très tard.",a:"est",opts:["est","a","ai","sont"],hint:"He woke up. Il + which form of être?"},

  {type:"mc",q:"Which uses être? 'J'ai mangé' or 'Je me suis levé'?",opts:["J'ai mangé","Je me suis levé","Both","Neither"],ans:"Je me suis levé",hint:"The reflexive one. All reflexives use the same helper."},
]},

// ═══ L6: Avoir ou être? ═══
{id:"fre10l6",title:"Avoir ou être?",icon:"⚖️",xp:15,board:true,steps:[
  {type:"intro",title:"Choosing avoir or être",desc:"The big decision: which helper verb? Most verbs use avoir. Être is for: (1) DR MRS VANDERTRAMP verbs, (2) all reflexive verbs. Practice choosing correctly.",goals:["Choose the correct helper verb","Distinguish avoir vs être verbs","Handle mixed sentences"]},

  {type:"tip",title:"The decision tree",text:"Is it a reflexive verb (se + verb)?\n-> YES: use ÊTRE\n\nIs it a DR MRS VANDERTRAMP verb?\n-> YES: use ÊTRE\n\nEverything else?\n-> Use AVOIR\n\nRemember: ÊTRE verbs require agreement.\nAVOIR verbs: no agreement with subject."},

  {type:"mc",q:"'Manger' uses:",opts:["Être","Avoir","Both","It depends"],ans:"Avoir",hint:"Eating is not movement or state change, and not reflexive."},

  {type:"fb",s:"Elle ___ allée au cinéma. (to go = être verb)",a:"est",opts:["est","a","ai","sont"],hint:"Aller is a movement verb. It uses which helper?"},

  {type:"mc",q:"'Se lever' uses:",opts:["Avoir","Être","Both","Neither"],ans:"Être",hint:"All reflexive verbs follow the same rule for helper choice."},

  {type:"fb",s:"Nous ___ mangé au restaurant.",a:"avons",opts:["avons","sommes","êtes","ont"],hint:"We ate. Manger is not reflexive or movement."},

  {type:"match",pairs:[{nl:"j'ai mangé",en:"avoir verb"},{nl:"je suis allé",en:"être (movement)"},{nl:"je me suis levé",en:"être (reflexive)"},{nl:"j'ai vu",en:"avoir verb"}]},

  {type:"mc",q:"'Descendre' uses être because it describes:",opts:["An action","A feeling","Movement/direction change","An opinion"],ans:"Movement/direction change",hint:"Going down = a change in position/direction."},

  {type:"fb",s:"Tu ___ arrivé(e) quand?",a:"es",opts:["es","as","est","ai"],hint:"When did you arrive? Arriver = movement verb."},

  {type:"mc",q:"'Il a lu un livre. Il est sorti.' Which uses avoir?",opts:["Il a lu","Il est sorti","Both","Neither"],ans:"Il a lu",hint:"Lire (to read) is not movement, not reflexive. Standard verb."},

  {type:"fb",s:"Elles se ___ lavées ce matin.",a:"sont",opts:["sont","ont","sommes","êtes"],hint:"They washed. Reflexive verb: which helper?"},

  {type:"match",pairs:[{nl:"avoir: manger",en:"j'ai mangé"},{nl:"être: partir",en:"je suis parti"},{nl:"avoir: finir",en:"j'ai fini"},{nl:"être: se coucher",en:"je me suis couché"}]},

  {type:"mc",q:"'J'ai descendu les valises' uses avoir. Why?",opts:["Descendre always uses avoir","When descendre has a direct object, it uses avoir","It is a mistake","Valises changes the helper"],ans:"When descendre has a direct object, it uses avoir",hint:"Some être verbs switch to avoir when they have a direct object."},

  {type:"fb",s:"Il ___ parti à neuf heures.",a:"est",opts:["est","a","ai","sont"],hint:"He left. Partir = movement verb."},

  {type:"mc",q:"Choose: 'Nous ___ regardé un film.'",opts:["Sommes","Avons","Êtes","Sont"],ans:"Avons",hint:"Regarder is not reflexive or movement. Standard verb."},

  {type:"fb",s:"Je me suis ___ à sept heures. (to wake up, masc.)",a:"réveillé",opts:["réveillé","réveillée","réveillés","réveiller"],hint:"I (male) woke up. Masculine singular: no extra letters."},

  {type:"mc",q:"Quick check: 'Faire' uses:",opts:["Être","Avoir","Both","Depends on subject"],ans:"Avoir",hint:"Faire (to do/make) is not in DR MRS VANDERTRAMP."},

  {type:"fb",s:"Elle ___ venue avec son ami.",a:"est",opts:["est","a","ai","sont"],hint:"She came. Venir = movement/arrival verb."},

  {type:"mc",q:"How many verbs use être (not counting reflexives)?",opts:["About 5","About 16","About 50","All -er verbs"],ans:"About 16",hint:"The DR MRS VANDERTRAMP list. A limited, memorizable set."},
]},

// ═══ L7: Un week-end passé ═══
{id:"fre10l7",title:"Un week-end passé",icon:"🌅",xp:15,board:true,steps:[
  {type:"intro",title:"Describing a past weekend",desc:"Combine avoir and être verbs to describe a full weekend. Mix movement verbs, regular activities, reflexive verbs, and time expressions.",goals:["Use both avoir and être in one narrative","Mix reflexive and non-reflexive verbs","Tell a complete weekend story"]},

  {type:"teach",kind:"phrase",nl:"Ce week-end, j'ai...",en:"This weekend, I...",phonetic:"suh week-END zhay",example:"A: Qu'est-ce que tu as fait ce week-end?\nB: Samedi, j'ai fait les courses et je suis allé au parc.\nA: Et dimanche?",exampleEn:"A: What did you do this weekend?\nB: Saturday, I did grocery shopping and went to the park.\nA: And Sunday?",note:"Weekend stories mix avoir and être naturally.\nJ'ai fait (avoir) + je suis allé (être)."},

  {type:"teach",kind:"phrase",nl:"je suis resté(e) à la maison",en:"I stayed home",phonetic:"zhuh swee res-TAY ah lah may-ZON",example:"A: Tu es sorti dimanche?\nB: Non, je suis resté à la maison.\nA: Tu as regardé la télé?",exampleEn:"A: Did you go out Sunday?\nB: No, I stayed home.\nA: Did you watch TV?",note:"Rester = to stay. Uses être.\nÀ la maison = at home.\nCommon weekend activity!"},

  {type:"mc",q:"In 'J'ai mangé et je suis sorti', which verb uses avoir?",opts:["Mangé","Sorti","Both","Neither"],ans:"Mangé",hint:"Manger = eating (standard verb). Sortir = going out (movement)."},

  {type:"fb",s:"Samedi matin, je me suis ___ à neuf heures. (to wake up, masc.)",a:"réveillé",opts:["réveillé","réveillée","réveillés","réveiller"],hint:"I (male) woke up. Reflexive, masculine singular."},

  {type:"match",pairs:[{nl:"j'ai fait les courses",en:"I did the shopping"},{nl:"je suis allé au parc",en:"I went to the park"},{nl:"je me suis couché tard",en:"I went to bed late"},{nl:"j'ai regardé un film",en:"I watched a movie"}]},

  {type:"mc",q:"'Elle s'est levée, elle a pris son café, et elle est sortie.' How many être verbs?",opts:["One","Two","Three","None"],ans:"Two",hint:"Se lever (reflexive = être) and sortir (movement = être). Prendre uses avoir."},

  {type:"fb",s:"Dimanche, nous ___ allés au restaurant.",a:"sommes",opts:["sommes","avons","êtes","sont"],hint:"We went. Aller = movement verb, uses which helper?"},

  {type:"mc",q:"Choose the correct version:",opts:["J'ai sorti avec des amis","Je suis sorti avec des amis","Je sortir avec des amis","J'ai été sorti"],ans:"Je suis sorti avec des amis",hint:"Sortir = movement verb. Which helper does it need?"},

  {type:"fb",s:"J'ai ___ un bon livre samedi après-midi. (to read)",a:"lu",opts:["lu","vu","li","lire"],hint:"I read a good book. Irregular participle of lire."},

  {type:"match",pairs:[{nl:"je suis resté(e)",en:"I stayed"},{nl:"je suis rentré(e)",en:"I came home"},{nl:"j'ai cuisiné",en:"I cooked"},{nl:"j'ai téléphoné",en:"I called"}]},

  {type:"mc",q:"A female narrator says 'Je suis _____ au cinéma.' Fill in:",opts:["allé","allée","allés","allées"],ans:"allée",hint:"Female speaker + singular = feminine singular agreement."},

  {type:"fb",s:"Le soir, nous avons ___ au restaurant. (to eat)",a:"mangé",opts:["mangé","mangés","mangée","manger"],hint:"We ate. Manger uses avoir. With avoir: no agreement."},

  {type:"mc",q:"Which sentence mixes avoir and être correctly?",opts:["J'ai allé et j'ai mangé","Je suis mangé et je suis allé","J'ai mangé et je suis allé","Je suis mangé et j'ai allé"],ans:"J'ai mangé et je suis allé",hint:"Manger = avoir. Aller = être. Each uses its own helper."},

  {type:"fb",s:"Elles sont ___ à la plage dimanche. (to go, fem. pl.)",a:"allées",opts:["allées","allé","allés","allée"],hint:"They (f.) went. Feminine plural: -ées."},

  {type:"mc",q:"In 'Je me suis levé, j'ai mangé, et je suis parti', avoir is used for:",opts:["Se lever","Manger","Partir","All three"],ans:"Manger",hint:"The only non-movement, non-reflexive verb in the sequence."},

  {type:"fb",s:"Il a ___ du sport et il est allé à la piscine. (to do)",a:"fait",opts:["fait","faire","fais","faite"],hint:"He did sport. Irregular participle of faire."},

  {type:"mc",q:"A complete weekend story should use:",opts:["Only avoir verbs","Only être verbs","A natural mix of both","No verbs"],ans:"A natural mix of both",hint:"Real stories naturally combine activities (avoir) with movements (être)."},
]},

// ═══ L8: Révision Unit 10 ═══
{id:"fre10l8",title:"Révision",icon:"🔄",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 10 Review",desc:"Review passé composé with être: movement verbs, agreement, reflexives, and the avoir/être choice. You now have the complete French past tense system.",goals:["Review all être verb forms","Test agreement rules","Master avoir vs être choice"]},

  {type:"mc",q:"DR MRS VANDERTRAMP verbs use:",opts:["Avoir","Être","Both","Neither"],ans:"Être",hint:"This mnemonic lists all the movement/state change verbs."},

  {type:"fb",s:"Elle est ___ à Paris. (to go, fem.)",a:"allée",opts:["allée","allé","allés","allées"],hint:"She went. Feminine singular: -ée."},

  {type:"match",pairs:[{nl:"je suis allé(e)",en:"I went"},{nl:"il est parti",en:"he left"},{nl:"elle est arrivée",en:"she arrived"},{nl:"nous sommes restés",en:"we stayed"}]},

  {type:"mc",q:"With être, the participle agrees with:",opts:["The object","The helper verb","The subject","Nothing"],ans:"The subject",hint:"Like an adjective, it matches gender and number of who performs the action."},

  {type:"fb",s:"Ils se ___ levés à sept heures.",a:"sont",opts:["sont","ont","sommes","êtes"],hint:"They got up. Reflexive verb: which helper?"},

  {type:"mc",q:"'J'ai mangé et je suis sorti.' Why different helpers?",opts:["It's a mistake","Manger=avoir, sortir=être","First verb=avoir, second=être always","Random choice"],ans:"Manger=avoir, sortir=être",hint:"Each verb has its own fixed helper. Movement = être, rest = avoir."},

  {type:"fb",s:"Marie est ___ hier soir. (to come, fem.)",a:"venue",opts:["venue","venu","venus","venues"],hint:"She came. Feminine singular of the irregular participle."},

  {type:"match",pairs:[{nl:"avoir: manger",en:"j'ai mangé"},{nl:"être: partir",en:"je suis parti"},{nl:"être: se lever",en:"je me suis levé"},{nl:"avoir: voir",en:"j'ai vu"}]},

  {type:"mc",q:"A group of 3 women: 'Elles sont ___'",opts:["partis","partie","parties","parti"],ans:"parties",hint:"Feminine plural: -ies (parti + e + s)."},

  {type:"fb",s:"Nous ___ arrivés en retard. (we, masc.)",a:"sommes",opts:["sommes","avons","êtes","sont"],hint:"We arrived. Arriver = être verb."},

  {type:"mc",q:"Reflexive verbs in passé composé:",opts:["Sometimes use avoir","Always use être","Use both","Don't exist in past"],ans:"Always use être",hint:"Every single reflexive verb. No exceptions."},

  {type:"fb",s:"Je me suis ___ à minuit. (to go to bed, fem.)",a:"couchée",opts:["couchée","couché","couchés","couchées"],hint:"I (female) went to bed. Feminine singular: -ée."},

  {type:"match",pairs:[{nl:"tombé",en:"fell (m.)"},{nl:"tombée",en:"fell (f.)"},{nl:"tombés",en:"fell (m.pl.)"},{nl:"tombées",en:"fell (f.pl.)"}]},

  {type:"mc",q:"Choose: 'Vous ___ voyagé en France?'",opts:["Êtes","Avez","Sommes","Ont"],ans:"Avez",hint:"Voyager is not movement (DR MRS) or reflexive. Standard verb."},

  {type:"fb",s:"Les enfants se sont ___ à six heures. (to wake up, masc. pl.)",a:"réveillés",opts:["réveillés","réveillé","réveillée","réveillées"],hint:"The children woke up. Masculine plural: -és."},

  {type:"mc",q:"You now know passé composé with avoir AND être. What percentage of verbs use avoir?",opts:["About 10%","About 50%","About 90%","All of them"],ans:"About 90%",hint:"Être verbs are a small, memorizable group. The vast majority use the other helper."},

  {type:"fb",s:"Hier, j'ai ___ mes devoirs et je suis sorti. (to do)",a:"fait",opts:["fait","faire","fais","faite"],hint:"I did my homework. Irregular participle of faire."},
]},
]},

];
