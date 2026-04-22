// B2 Gap Batch 4 Lesson 18 - Psychology & Character
const LESSON_18 = {id:"esv2_b2g4_l18",title:"Psicología y carácter",icon:"🧠",xp:15,board:true,steps:[
{type:"intro",title:"Psicología y carácter",desc:"Master vocabulary for discussing personality traits, emotions, and psychological states.",goals:["Learn 18 psychology and character terms","Describe personality traits precisely","Express emotional states at B2 level"]},

{type:"teach",trg:"enamoradizo",src:"who falls in love easily",pos:"adj",gender:null,
 note:"Adjective. Prone to falling in love.\nFrom enamorar (to make fall in love).",
 example:"A: Mi hermano es muy enamoradizo. Cada mes tiene una novia nueva.\nB: Algún día encontrará a la persona adecuada.",
 exampleSrc:"A: My brother falls in love very easily. Every month he has a new girlfriend.\nB: Someday he will find the right person.",
 funFact:"The -izo suffix indicates tendency: olvidadizo (forgetful), enfermizo (sickly), resbaladizo (slippery)."},

{type:"teach",trg:"engorroso",src:"bothersome / cumbersome",pos:"adj",gender:null,
 note:"Adjective. Annoying and difficult to deal with.\nSynonym: molesto, fastidioso.",
 example:"A: El proceso de solicitar el visado es muy engorroso.\nB: Hay que rellenar formularios interminables.",
 exampleSrc:"A: The visa application process is very cumbersome.\nB: You have to fill out endless forms.",
 funFact:"'Engorroso' comes from 'engorro' (nuisance). It implies something is tediously complicated."},

{type:"teach",trg:"la devoción",src:"the devotion",pos:"noun",gender:"f",
 note:"Feminine noun. Deep love or religious commitment.\nPlural: devociones.",
 example:"A: Siente una gran devoción por su familia.\nB: Siempre antepone sus necesidades a las suyas.",
 exampleSrc:"A: She feels a great devotion to her family.\nB: She always puts their needs before her own.",
 funFact:"In Spain, 'devociones populares' are folk religious practices, like carrying saints through streets."},

{type:"teach",trg:"la entraña",src:"the innard / depth (figurative)",pos:"noun",gender:"f",
 note:"Feminine noun. Internal organs or the essence of something.\nPlural: entrañas (guts).",
 example:"A: Conoce las entrañas de la organización como nadie.\nB: Lleva treinta años trabajando aquí.",
 exampleSrc:"A: She knows the inner workings of the organization like no one else.\nB: She has been working here for thirty years.",
 funFact:"'De mis entrañas' (from my innermost being) is a passionate expression of love in Spanish."},

{type:"teach",trg:"descerebrado",src:"brainless / mindless",pos:"adj",gender:null,
 note:"Adjective. Lacking intelligence or thought.\nColloquial insult. From des- + cerebro (brain).",
 example:"A: Solo un descerebrado haría algo tan peligroso.\nB: La imprudencia tiene consecuencias graves.",
 exampleSrc:"A: Only a brainless person would do something so dangerous.\nB: Recklessness has serious consequences.",
 funFact:"Literally 'de-brained'. One of many creative Spanish insults using body part prefixes."},

{type:"mc",q:"Una persona 'enamoradiza' es alguien que:",opts:["Se enamora con mucha facilidad","Nunca se enamora de nadie","Odia las relaciones sentimentales","Es muy tímida con los demás"],ans:"Se enamora con mucha facilidad",hint:"Think about someone whose heart gets captured by new people very frequently."},

{type:"teach",trg:"exaltar",src:"to exalt / to get worked up",pos:"verb",gender:null,
 note:"Regular -ar verb. To praise highly or to become agitated.\nReflexive: exaltarse (to get heated).",
 example:"A: No te exaltes, vamos a hablar con calma.\nB: Es que me pone nervioso esta situación.",
 exampleSrc:"A: Do not get worked up, let us talk calmly.\nB: It is just that this situation makes me nervous.",
 funFact:"'Exaltarse' in Spanish is mostly about losing your temper, not about praising something."},

{type:"teach",trg:"dignar",src:"to deign / to condescend",pos:"verb",gender:null,
 note:"Regular -ar verb. Used reflexively: dignarse a.\nImplies reluctance to do something below one's status.",
 example:"A: Al final se dignó a contestar mis mensajes.\nB: Después de tres semanas esperando.",
 exampleSrc:"A: He finally deigned to reply to my messages.\nB: After three weeks of waiting.",
 funFact:"Almost always used sarcastically in modern Spanish: 'Se dignó a aparecer' (They deigned to show up)."},

{type:"teach",trg:"excusar",src:"to excuse / to avoid",pos:"verb",gender:null,
 note:"Regular -ar verb. To justify or make unnecessary.\nReflexive: excusarse (to apologize).",
 example:"A: No hace falta que te excuses, todos cometemos errores.\nB: Gracias por ser tan comprensivo.",
 exampleSrc:"A: You do not need to apologize, we all make mistakes.\nB: Thank you for being so understanding.",
 funFact:"'Excusar' can also mean 'to make unnecessary': 'Excuso decir que...' (Needless to say...)."},

{type:"teach",trg:"escandalizar",src:"to scandalize / to shock",pos:"verb",gender:null,
 note:"Regular -ar verb (z>c before e). To cause outrage.\nReflexive: escandalizarse (to be shocked).",
 example:"A: Sus declaraciones escandalizaron a la opinión pública.\nB: Nadie esperaba que dijera algo así.",
 exampleSrc:"A: His statements scandalized public opinion.\nB: Nobody expected him to say something like that.",
 funFact:"Spaniards often say 'No te escandalices' to mean 'Don't be so shocked' when someone overreacts."},

{type:"fb",s:"No te {1}, vamos a resolver esto con tranquilidad.",a:["exaltes"],opts:["exaltes","escandalices","excuses","dignes"],hint:"To tell someone not to become agitated or lose their temper.",sSrc:"Do not get {1}, we are going to solve this calmly."},

{type:"teach",trg:"la espiritualidad",src:"the spirituality",pos:"noun",gender:"f",
 note:"Feminine noun. Concern with the soul and inner life.\nAdjective: espiritual.",
 example:"A: La espiritualidad no está necesariamente ligada a la religión.\nB: Mucha gente busca paz interior a través de la meditación.",
 exampleSrc:"A: Spirituality is not necessarily linked to religion.\nB: Many people seek inner peace through meditation.",
 funFact:"Spain's Camino de Santiago attracts seekers of 'espiritualidad' from around the world."},

{type:"teach",trg:"el agrado",src:"the pleasure / liking",pos:"noun",gender:"m",
 note:"Masculine noun. A feeling of satisfaction.\nCommon: ser de su agrado (to be to one's liking).",
 example:"A: Espero que la cena sea de su agrado.\nB: Todo está delicioso, muchas gracias.",
 exampleSrc:"A: I hope the dinner is to your liking.\nB: Everything is delicious, thank you very much.",
 funFact:"'Agrado' is very formal. In everyday speech, Spaniards say 'gusto' or simply 'gustar'."},

{type:"teach",trg:"el bienaventurado",src:"the blessed one",pos:"noun",gender:"m",
 note:"Masculine noun. A person in a state of supreme happiness.\nFrom bien (well) + aventurado (fortunate).",
 example:"A: En la Biblia, los bienaventurados heredarán la tierra.\nB: Es una de las enseñanzas más conocidas.",
 exampleSrc:"A: In the Bible, the blessed shall inherit the earth.\nB: It is one of the best-known teachings.",
 funFact:"The Beatitudes in Spanish are 'Las Bienaventuranzas'. Each begins with 'Bienaventurados los que...'"},

{type:"teach",trg:"deportivo",src:"sporty / sportive",pos:"adj",gender:null,
 note:"Adjective. Related to sports or having a fair attitude.\nFeminine: deportiva.",
 example:"A: Tiene una actitud muy deportiva ante la derrota.\nB: Felicitó al rival y reconoció su mérito.",
 exampleSrc:"A: He has a very sporting attitude toward defeat.\nB: He congratulated the rival and recognized their merit.",
 funFact:"'Deportivo' can be a noun too: 'un deportivo' means a sports car in Spanish."},

{type:"mc",q:"'Engorroso' describe algo que es:",opts:["Divertido y entretenido","Complicado y molesto de hacer","Fácil y agradable","Rápido y sencillo"],ans:"Complicado y molesto de hacer",hint:"Think about a tedious bureaucratic task that is annoying to complete."},

{type:"fb",s:"Sus declaraciones {1} a toda la sociedad.",a:["escandalizaron"],opts:["escandalizaron","exaltaron","dignaron","excusaron"],hint:"To cause public shock and outrage with controversial statements.",sSrc:"His statements {1} all of society."},

{type:"match",pairs:[{trg:"enamoradizo",src:"falls in love easily"},{trg:"descerebrado",src:"brainless"},{trg:"engorroso",src:"cumbersome"},{trg:"agrado",src:"pleasure"},{trg:"entraña",src:"innard / depth"}]}
]};

export default LESSON_18;
