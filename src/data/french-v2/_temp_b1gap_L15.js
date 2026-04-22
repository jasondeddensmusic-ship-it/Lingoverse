// L15 - Debate & Argument
const LESSON_15 = {id:"frv2_b1gap_l15", title:"Débattre et argumenter", icon:"\u{1F4AC}", xp:15, board:true, steps:[

{type:"intro", title:"Débattre et argumenter",
 desc:"Build your vocabulary for making arguments, debating issues, and expressing strong positions.",
 goals:["Learn 20 words for argumentation and debate","Structure arguments with nuance","Express agreement, disagreement, and approximation"]},

{type:"teach", trg:"l'argument", src:"argument, reasoning point", pos:"noun", gender:"m",
 note:"Masculine noun. A point in a debate.\nDoes NOT mean 'quarrel' (dispute, querelle).",
 example:"A: Ton argument est convaincant.\nB: Merci, j'ai beaucoup réfléchi à la question.",
 exampleSrc:"A: Your argument is convincing.\nB: Thanks, I've thought a lot about the issue.",
 funFact:"In French, argument only means a logical point. For a quarrel, use dispute or querelle."},

{type:"teach", trg:"arguer", src:"to argue (a point), to claim", pos:"verb", gender:null,
 note:"Regular -er verb (the u is always pronounced).\nFormal. Arguer que = to argue that.",
 example:"A: Il argue que les preuves sont insuffisantes.\nB: Le juge va devoir trancher.",
 exampleSrc:"A: He argues that the evidence is insufficient.\nB: The judge will have to decide.",
 funFact:"The 'gu' is always pronounced as two syllables: ar-gu-er. Never like 'argue' in English."},

{type:"teach", trg:"l'affirmative", src:"the affirmative", pos:"noun", gender:"f",
 note:"Feminine noun. A positive response.\nRépondre par l'affirmative = to answer yes.",
 example:"A: Il a répondu par l'affirmative.\nB: Alors, le projet est validé.",
 exampleSrc:"A: He answered in the affirmative.\nB: So the project is approved.",
 funFact:"Very formal. In everyday French, just say 'il a dit oui.' L'affirmative is for official contexts."},

{type:"teach", trg:"l'apparat", src:"pomp, pageantry", pos:"noun", gender:"m",
 note:"Masculine noun. Grand display and ceremony.\nDiscours d'apparat = formal ceremonial speech.",
 example:"A: Le président a prononcé un discours d'apparat.\nB: La cérémonie était très solennelle.",
 exampleSrc:"A: The president delivered a ceremonial speech.\nB: The ceremony was very solemn.",
 funFact:"From Italian apparato. France loves its apparat: military parades, state dinners, Bastille Day."},

{type:"teach", trg:"l'annexer", src:"to annex, to attach", pos:"verb", gender:null,
 note:"Regular -er verb. To incorporate territory or attach documents.\nAnnexer un document = to attach.",
 example:"A: Veuillez annexer votre CV au dossier.\nB: Je l'ai déjà joint en pièce attachée.",
 exampleSrc:"A: Please attach your CV to the file.\nB: I've already included it as an attachment.",
 funFact:"Historically loaded: Germany's annexation of Alsace-Lorraine (1871) is a defining French memory."},

{type:"mc",
 q:"Quel mot désigne un point de raisonnement dans un débat ?",
 opts:["un argument","une dispute","un affrontement","un apparat"],
 ans:"un argument",
 hint:"In French, this word only means a logical point, never a quarrel. Think debate, not fight."},

{type:"teach", trg:"l'assassin", src:"murderer, assassin", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Also adjective.\nA deliberate killer. Regard assassin = killer look.",
 example:"A: L'assassin a été arrêté hier soir.\nB: L'enquête a duré plus de six mois.",
 exampleSrc:"A: The murderer was arrested last night.\nB: The investigation lasted more than six months.",
 funFact:"From Arabic hashshashin (hashish users), the medieval sect of killers. The word traveled via the Crusades."},

{type:"teach", trg:"assassiner", src:"to murder, to assassinate", pos:"verb", gender:null,
 note:"Regular -er verb. Deliberate, premeditated killing.\nStronger than tuer (to kill).",
 example:"A: Le roi Henri IV a été assassiné en 1610.\nB: Par Ravaillac, un fanatique religieux.",
 exampleSrc:"A: King Henri IV was assassinated in 1610.\nB: By Ravaillac, a religious fanatic.",
 funFact:"French law distinguishes meurtre (murder) from assassinat (premeditated murder). Assassiner implies planning."},

{type:"teach", trg:"l'assiéger", src:"to besiege, to lay siege to", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è, g>ge). To surround and attack.\nAlso figurative: besieged by fans.",
 example:"A: Les fans assiègent l'hôtel de la star.\nB: Elle ne peut même pas sortir.",
 exampleSrc:"A: Fans are besieging the star's hotel.\nB: She can't even go out.",
 funFact:"France has a rich siege history. The siege of Paris (1870) and siege of La Rochelle (1628) are legendary."},

{type:"teach", trg:"l'attenter", src:"to make an attempt (against)", pos:"verb", gender:null,
 note:"Regular -er verb. Attenter à = to attempt against.\nAttenter à la vie de = to attempt to kill.",
 example:"A: Attenter à la sûreté de l'État est un crime grave.\nB: C'est passible de prison à vie.",
 exampleSrc:"A: Attempting to undermine state security is a serious crime.\nB: It carries a life sentence.",
 funFact:"Legal vocabulary. You attenter à someone's liberty, life, or dignity. Very formal."},

{type:"fb",
 s:"Le roi Henri IV a été {1} par Ravaillac en 1610.",
 a:["assassiné"],
 opts:["assassiné","assiégé","annexé","attaqué"],
 hint:"This verb means to murder with premeditation. It comes from an Arabic word for a medieval sect.",
 sSrc:"King Henri IV was {1} by Ravaillac in 1610."},

{type:"teach", trg:"l'avertissement", src:"warning, caution", pos:"noun", gender:"m",
 note:"Masculine noun. From avertir (to warn).\nAlso: foreword in a book.",
 example:"A: C'est mon dernier avertissement.\nB: Compris, je ne recommencerai pas.",
 exampleSrc:"A: This is my last warning.\nB: Understood, I won't do it again.",
 funFact:"In football, un avertissement is a yellow card. Two avertissements = a red card (expulsion)."},

{type:"teach", trg:"l'aveu", src:"confession, admission", pos:"noun", gender:"m",
 note:"Masculine noun. Admitting the truth.\nPasser aux aveux = to confess.",
 example:"A: L'accusé a fait des aveux complets.\nB: Son avocat n'a pas pu l'en dissuader.",
 exampleSrc:"A: The defendant made a full confession.\nB: His lawyer couldn't dissuade him.",
 funFact:"De l'aveu de tous means 'by everyone's admission.' A useful formal expression."},

{type:"teach", trg:"l'avènement", src:"advent, accession, emergence", pos:"noun", gender:"m",
 note:"Masculine noun. The arrival of something significant.\nL'avènement d'Internet = the advent of the Internet.",
 example:"A: L'avènement de l'intelligence artificielle change tout.\nB: De nouveaux métiers vont apparaître.",
 exampleSrc:"A: The advent of artificial intelligence changes everything.\nB: New professions will appear.",
 funFact:"Originally about kings: l'avènement au trône (accession to the throne). Now used for any major arrival."},

{type:"mc",
 q:"Quel nom désigne l'acte d'admettre la vérité ?",
 opts:["un apparat","un aveu","un avertissement","un argument"],
 ans:"un aveu",
 hint:"This is what a criminal does when they admit their guilt. To confess is to 'passer aux...'"},

{type:"teach", trg:"l'aveugle", src:"blind (person)", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Also adjective.\nBlind physically or figuratively.",
 example:"A: L'association aide les personnes aveugles.\nB: Elle forme aussi des chiens guides.",
 exampleSrc:"A: The organization helps blind people.\nB: It also trains guide dogs.",
 funFact:"À l'aveugle means blindly or without seeing. Test à l'aveugle = blind test/tasting."},

{type:"teach", trg:"l'avenir", src:"future", pos:"noun", gender:"m",
 note:"Masculine noun. What lies ahead.\nÀ l'avenir = in the future. D'avenir = promising.",
 example:"A: L'avenir est plein de possibilités.\nB: Il faut rester optimiste.",
 exampleSrc:"A: The future is full of possibilities.\nB: We must stay optimistic.",
 funFact:"Un métier d'avenir is a job with a future. 'Sans avenir' means hopeless. The French are fascinated by l'avenir."},

{type:"teach", trg:"l'aventure", src:"adventure", pos:"noun", gender:"f",
 note:"Feminine noun. An exciting experience.\nÀ l'aventure = venturing into the unknown.",
 example:"A: Partir à l'aventure, ça te tente ?\nB: Toujours ! Où est-ce qu'on va ?",
 exampleSrc:"A: Going on an adventure, does that tempt you?\nB: Always! Where are we going?",
 funFact:"Bonne aventure means fortune (telling). A diseur de bonne aventure is a fortune teller."},

{type:"teach", trg:"l'avis", src:"opinion, notice", pos:"noun", gender:"m",
 note:"Masculine noun. Both opinion and official notice.\nÀ mon avis = in my opinion.",
 example:"A: À mon avis, il a raison.\nB: Je ne suis pas du même avis.",
 exampleSrc:"A: In my opinion, he's right.\nB: I don't share that opinion.",
 funFact:"À mon avis is one of the most useful French phrases. 'Changer d'avis' means to change one's mind."},

{type:"fb",
 s:"L'{1} de l'intelligence artificielle transforme notre société.",
 a:["avènement"],
 opts:["avènement","avertissement","aveu","avis"],
 hint:"This masculine noun means the arrival of something major. Originally used for kings ascending the throne.",
 sSrc:"The {1} of artificial intelligence is transforming our society."},

{type:"match", pairs:[
  {trg:"l'argument", src:"reasoning point"},
  {trg:"l'aveu", src:"confession"},
  {trg:"l'avènement", src:"advent"},
  {trg:"l'avis", src:"opinion"},
  {trg:"l'aventure", src:"adventure"}
]},

{type:"mc",
 q:"Quel mot signifie à la fois 'opinion' et 'annonce officielle' ?",
 opts:["un avenir","un avertissement","un avis","un aveu"],
 ans:"un avis",
 hint:"'À mon...' is how you start saying 'in my opinion.' It also appears on official notice boards."},

{type:"teach", trg:"l'éducation", src:"education", pos:"noun", gender:"f",
 note:"Feminine noun. The system of schooling and learning.\nMinistère de l'Éducation nationale = Ministry of Education.",
 example:"A: L'éducation publique est gratuite et obligatoire en France.\nB: C'est un droit fondamental.",
 exampleSrc:"A: Public education is free and compulsory in France.\nB: It is a fundamental right.",
 funFact:"France invented the secular public school system (école laïque) under Jules Ferry in 1882. A defining national achievement."},

{type:"teach", trg:"proposer", src:"to propose, to suggest", pos:"verb", gender:null,
 note:"Regular -er verb. To put forward an idea or candidate.\nJe vous propose de... = I suggest that we...",
 example:"A: Je propose qu'on fasse une pause.\nB: Bonne idée, on a travaillé trois heures.",
 exampleSrc:"A: I propose that we take a break.\nB: Good idea, we've worked for three hours.",
 funFact:"'L'homme propose, Dieu dispose' (Man proposes, God disposes) is a classic French proverb from Thomas à Kempis."},

{type:"teach", trg:"refuser", src:"to refuse, to reject", pos:"verb", gender:null,
 note:"Regular -er verb. To say no or reject.\nRefuser de + infinitif = to refuse to do something.",
 example:"A: Il a refusé de signer le contrat.\nB: Les conditions n'étaient pas acceptables.",
 exampleSrc:"A: He refused to sign the contract.\nB: The conditions were not acceptable.",
 funFact:"'Refuser le progrès' is a common political expression. In French bureaucracy, refusal often requires a written explanation."},

{type:"teach", trg:"conseiller", src:"to advise, to recommend", pos:"verb", gender:null,
 note:"Regular -er verb. To give advice.\nAlso a noun: un conseiller (adviser).",
 example:"A: Je te conseille de parler à ton professeur.\nB: Merci pour l'avis.",
 exampleSrc:"A: I advise you to speak to your professor.\nB: Thanks for the advice.",
 funFact:"Un conseiller municipal (city councillor) is an elected local official. France has 500,000 elected local councillors."},

{type:"teach", trg:"la conséquence", src:"consequence", pos:"noun", gender:"f",
 note:"Feminine noun. The result of an action.\nEn conséquence = consequently. Par conséquent = therefore.",
 example:"A: Les conséquences de cette décision sont graves.\nB: On aurait dû y réfléchir avant.",
 exampleSrc:"A: The consequences of this decision are serious.\nB: We should have thought about it beforehand.",
 funFact:"From Latin consequi (to follow). 'Par conséquent' and 'en conséquence' are staple connectors in French argumentation."},

{type:"fb",
 s:"Je te {1} de vérifier tes sources avant de présenter.",
 a:["conseille"],
 opts:["conseille","propose","refuse","avertis"],
 hint:"This verb means to give advice or recommend. Its noun form describes a city councillor.",
 sSrc:"I {1} you to check your sources before presenting."}

]};
export default LESSON_15;
