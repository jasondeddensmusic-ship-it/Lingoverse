// French B2 Gap Lesson 2 — Media and Communication
const LESSON_2 = {id:"frv2_b2g5_l2", title:"Médias et communication", icon:"📡", xp:15, board:true, steps:[
  {type:"intro", title:"Médias et communication",
   desc:"Build vocabulary for discussing media, journalism, online communication, and the digital landscape at the B2 level.",
   goals:["Learn 15 key words about media and digital culture","Discuss journalism and online phenomena","Use media-related nouns and verbs confidently"]},

  {type:"teach", trg:"la blogosphère", src:"the blogosphere", pos:"noun", gender:"f",
   note:"The collective world of blogs and bloggers.\nUsed to discuss online opinion and media.",
   example:"A: La blogosphère influence-t-elle la politique?\nB: Enormément. Les blogueurs ont un vrai pouvoir.\nA: Plus que les journalistes traditionnels?\nB: Parfois, surtout chez les jeunes.",
   exampleSrc:"A: Does the blogosphere influence politics?\nB: Enormously. Bloggers have real power.\nA: More than traditional journalists?\nB: Sometimes, especially among young people.",
   funFact:"Coined around 2002, combining 'blog' with the Greek 'sphaira' (sphere). A purely digital-age word."},

  {type:"teach", trg:"l'icône", src:"the icon", pos:"noun", gender:"f",
   note:"A symbol, an emblematic figure, or a computer icon.\nMultiple meanings depending on context.",
   example:"A: Elle est devenue une icône de la mode.\nB: Oui, tout le monde copie son style.\nA: Et sur ton ordinateur?\nB: Clique sur l'icône pour ouvrir l'application.",
   exampleSrc:"A: She became a fashion icon.\nB: Yes, everyone copies her style.\nA: And on your computer?\nB: Click the icon to open the application.",
   funFact:"From Greek 'eikon' (image). Originally a religious painting in the Orthodox tradition."},

  {type:"teach", trg:"la formulation", src:"the wording / formulation", pos:"noun", gender:"f",
   note:"The way something is expressed in words.\nCritical in journalism and legal writing.",
   example:"A: La formulation de cette question est ambiguë.\nB: Tu as raison, on pourrait la comprendre de deux façons.\nA: Il faut être plus précis.\nB: Oui, chaque mot compte dans un article.",
   exampleSrc:"A: The wording of this question is ambiguous.\nB: You're right, it could be understood in two ways.\nA: We need to be more precise.\nB: Yes, every word counts in an article.",
   funFact:"From 'formuler' (to formulate) + '-tion'. The precision of formulation is central to French culture."},

  {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
   note:"A sudden cry or emphatic expression.\nAlso: 'point d'exclamation' (exclamation mark).",
   example:"A: Son discours était plein d'exclamations.\nB: Il voulait impressionner le public.\nA: C'était efficace?\nB: Oui, mais parfois trop dramatique.",
   exampleSrc:"A: His speech was full of exclamations.\nB: He wanted to impress the audience.\nA: Was it effective?\nB: Yes, but sometimes too dramatic.",
   funFact:"From Latin 'exclamatio'. The French exclamation mark was adopted from Spanish in the 18th century."},

  {type:"teach", trg:"le jargon", src:"the jargon", pos:"noun", gender:"m",
   note:"Specialized vocabulary of a profession or group.\nOften incomprehensible to outsiders.",
   example:"A: Je ne comprends pas le jargon médical.\nB: C'est normal, c'est très technique.\nA: Les médecins devraient parler plus simplement.\nB: Je suis d'accord, la clarté est importante.",
   exampleSrc:"A: I don't understand medical jargon.\nB: That's normal, it's very technical.\nA: Doctors should speak more simply.\nB: I agree, clarity is important.",
   funFact:"Originally meant 'birdsong' in Old French. Then shifted to mean incomprehensible speech."},

  {type:"teach", trg:"l'affirmation", src:"the assertion / claim", pos:"noun", gender:"f",
   note:"A confident statement presented as fact.\nUsed in debates, journalism, and academia.",
   example:"A: Cette affirmation est-elle vérifiable?\nB: Il faudrait vérifier les sources.\nA: Sans preuves, ce n'est qu'une opinion.\nB: Exactement, une affirmation doit être fondée.",
   exampleSrc:"A: Is this assertion verifiable?\nB: We'd need to check the sources.\nA: Without evidence, it's just an opinion.\nB: Exactly, a claim must be substantiated.",
   funFact:"From Latin 'affirmare' (to make firm). The legal sense means 'sworn statement'."},

  {type:"teach", trg:"flirter", src:"to flirt", pos:"verb", gender:null,
   note:"Borrowed from English. Also used figuratively:\n'flirter avec le danger' (to flirt with danger).",
   example:"A: Ce journal flirte avec la désinformation.\nB: Tu trouves? Leurs sources sont douteuses?\nA: Oui, ils exagèrent souvent les faits.\nB: C'est dangereux pour la démocratie.",
   exampleSrc:"A: This newspaper flirts with misinformation.\nB: You think? Are their sources questionable?\nA: Yes, they often exaggerate the facts.\nB: That's dangerous for democracy.",
   funFact:"Borrowed into French from English in the 19th century. English may have taken it from Old French 'fleureter'."},

  {type:"teach", trg:"l'indicateur", src:"the indicator / gauge", pos:"noun", gender:"m",
   note:"A sign or measure that shows a trend.\nUsed in statistics, economics, and data analysis.",
   example:"A: Quel est le meilleur indicateur de progrès?\nB: Le taux de satisfaction des utilisateurs.\nA: Et les chiffres de vente?\nB: C'est aussi un bon indicateur, mais pas le seul.",
   exampleSrc:"A: What is the best indicator of progress?\nB: The user satisfaction rate.\nA: And sales figures?\nB: That's also a good indicator, but not the only one.",
   funFact:"From Latin 'indicare' (to point out). The verb 'indiquer' is the everyday form."},

  {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
   note:"Portraying someone or something as evil.\nCommon in political and media discourse.",
   example:"A: La diabolisation de l'adversaire est une tactique courante.\nB: Oui, au lieu de débattre des idées.\nA: C'est efficace?\nB: A court terme, mais cela divise la société.",
   exampleSrc:"A: The demonization of the opponent is a common tactic.\nB: Yes, instead of debating ideas.\nA: Is it effective?\nB: In the short term, but it divides society.",
   funFact:"From 'diable' (devil) + '-isation'. The verb 'diaboliser' means to paint as the devil."},

  {type:"mc", q:"Que désigne la blogosphère?",
   opts:["L'ensemble des blogs et blogueurs sur Internet","Un type de réseau social","Un logiciel de création de sites","Une émission de radio en ligne"],
   ans:"L'ensemble des blogs et blogueurs sur Internet",
   hint:"Think of the collective world of all blogs and their authors online"},

  {type:"fb", s:"La {1} de cette question est ambiguë, on pourrait la comprendre autrement.",
   a:["formulation"], opts:["formulation","exclamation","affirmation","diabolisation"],
   hint:"The way something is worded or expressed",
   sSrc:"The {1} of this question is ambiguous, it could be understood differently."},

  {type:"teach", trg:"l'exaltation", src:"the exaltation / elation", pos:"noun", gender:"f",
   note:"Intense enthusiasm or excitement.\nCan be positive (joy) or negative (fanaticism).",
   example:"A: L'exaltation du public était palpable.\nB: Oui, tout le monde criait de joie.\nA: Attention, l'exaltation peut devenir dangereuse.\nB: Tu as raison, il faut rester rationnel.",
   exampleSrc:"A: The exaltation of the audience was palpable.\nB: Yes, everyone was shouting with joy.\nA: Careful, exaltation can become dangerous.\nB: You're right, we must stay rational.",
   funFact:"From Latin 'exaltare' (to raise high). Can mean positive elation or dangerous fanaticism."},

  {type:"teach", trg:"la flambée", src:"the surge / spike", pos:"noun", gender:"f",
   note:"A sudden sharp increase. Used for prices, violence, disease.\nLiterally: a blaze of fire.",
   example:"A: La flambée des prix inquiète les familles.\nB: Surtout les prix de l'énergie.\nA: Le gouvernement va-t-il réagir?\nB: Il promet des mesures, mais quand?",
   exampleSrc:"A: The surge in prices worries families.\nB: Especially energy prices.\nA: Will the government react?\nB: They promise measures, but when?",
   funFact:"Literally means 'a blaze' from 'flamber' (to blaze). The figurative meaning of price spikes is very common."},

  {type:"teach", trg:"irrésistible", src:"irresistible", pos:"adj", gender:null,
   note:"Impossible to resist. Used for charm, arguments, and trends.\nSame form for masculine and feminine.",
   example:"A: L'envie de voyager est irrésistible.\nB: Surtout quand on voit ces photos.\nA: Son argument est irrésistible.\nB: Oui, impossible de dire non.",
   exampleSrc:"A: The desire to travel is irresistible.\nB: Especially when you see those photos.\nA: His argument is irresistible.\nB: Yes, impossible to say no.",
   funFact:"From Latin 'irresistibilis'. The double 'r' is always pronounced in French."},

  {type:"teach", trg:"fondé", src:"founded / well-founded", pos:"adj", gender:null,
   note:"Based on solid evidence or reasoning.\nAlso means 'established' for institutions.",
   example:"A: Cette critique est-elle fondée?\nB: Oui, elle repose sur des faits vérifiables.\nA: Et les accusations sans preuves?\nB: Elles ne sont pas fondées, il faut les rejeter.",
   exampleSrc:"A: Is this criticism well-founded?\nB: Yes, it is based on verifiable facts.\nA: And accusations without evidence?\nB: They are not well-founded, they must be rejected.",
   funFact:"Past participle of 'fonder' (to found). 'Bien fondé' as a noun means 'validity' or 'soundness'."},

  {type:"mc", q:"Quel mot décrit une augmentation soudaine et forte des prix?",
   opts:["Une flambée","Une formulation","Une affirmation","Une exclamation"],
   ans:"Une flambée",
   hint:"Think of a blaze of fire: sudden, intense, and hard to control"},

  {type:"fb", s:"Le {1} médical est souvent incompréhensible pour les patients.",
   a:["jargon"], opts:["jargon","indicateur","archétype","avènement"],
   hint:"Specialized vocabulary that only professionals in a field understand",
   sSrc:"Medical {1} is often incomprehensible to patients."},

  {type:"match", pairs:[
    {trg:"la diabolisation", src:"demonization"},
    {trg:"le jargon", src:"jargon"},
    {trg:"l'indicateur", src:"indicator"},
    {trg:"fondé", src:"well-founded"},
    {trg:"irrésistible", src:"irresistible"}
  ]},

  {type:"mc", q:"Que signifie 'flirter avec le danger'?",
   opts:["Prendre des risques","Avoir une relation amoureuse","Écrire un article","Publier un blog"],
   ans:"Prendre des risques",
   hint:"The figurative use of this verb means approaching something risky"},

  {type:"fb", s:"Cette {1} n'est pas vérifiable, elle manque de preuves.",
   a:["affirmation"], opts:["affirmation","exaltation","formulation","blogosphère"],
   hint:"A confident statement presented as fact, but needing evidence",
   sSrc:"This {1} is not verifiable, it lacks evidence."},

  {type:"drag_fill", s:"La {1} de l'adversaire est une tactique qui {2} la société.",
   blanks:{"1":"diabolisation","2":"divise"},
   pool:["diabolisation","divise","flambée","renforce"],
   hint:"Portraying the opponent as evil creates splits in the community"},

  {type:"mc", q:"Quel adjectif signifie 'basé sur des preuves solides'?",
   opts:["Fondé","Irrésistible","Insignifiant","Incompris"],
   ans:"Fondé",
   hint:"A criticism or claim that rests on verifiable facts and solid reasoning"}
]};
export default LESSON_2;
