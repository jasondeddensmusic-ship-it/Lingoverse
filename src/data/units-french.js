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

];
