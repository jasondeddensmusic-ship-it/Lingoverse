// French B2 Gap Batch 9. Lesson 10: Culture et Arts
// Culture and arts vocabulary

const LESSON_10 = {id:"frv2_b2g9_l10", title:"Culture et Arts", icon:"🎨", xp:15, board:true, steps:[
  {type:"intro", title:"Culture et Arts",
   desc:"Explore vocabulary for discussing art movements, cultural institutions, and creative expression. B2 learners need this for museum visits, reviews, and cultural debates.",
   goals:["Learn 20 culture and arts words","Discuss art movements and styles","Analyze cultural phenomena"]},

  {type:"teach", trg:"le café-concert", src:"cafe with live music", pos:"noun", gender:"m",
   note:"Café + concert. A venue combining drinks and live performance.\nPlural: des cafés-concerts.",
   example:"A: Les cafés-concerts étaient populaires au dix-neuvième siècle.\nB: C'était l'ancêtre du cabaret.",
   exampleSrc:"A: Cafe-concerts were popular in the nineteenth century.\nB: They were the ancestor of the cabaret.",
   funFact:"Toulouse-Lautrec immortalized Parisian cafés-concerts in his famous posters."},

  {type:"teach", trg:"le peplum", src:"sword-and-sandal film", pos:"noun", gender:"m",
   note:"A genre of film set in ancient Greece or Rome.\nFrom Latin peplum (a type of robe).",
   example:"A: Ce peplum a coûté des millions à produire.\nB: Les décors sont spectaculaires.",
   exampleSrc:"A: This sword-and-sandal film cost millions to produce.\nB: The sets are spectacular.",
   funFact:"In French, peplum specifically means a historical epic film. The word is not used for clothing."},

  {type:"teach", trg:"le néologisme", src:"neologism, new word", pos:"noun", gender:"m",
   note:"Néo- (new) + logos (word) + -isme.\nA newly coined word or expression.",
   example:"A: 'Courriel' est un néologisme créé pour remplacer 'email'.\nB: Certains néologismes réussissent, d'autres non.",
   exampleSrc:"A: 'Courriel' is a neologism created to replace 'email'.\nB: Some neologisms succeed, others don't.",
   funFact:"The Académie française creates official neologisms, but the public does not always adopt them."},

  {type:"teach", trg:"pharaonique", src:"pharaonic, grandiose", pos:"adj", gender:null,
   note:"From pharaon + -ique.\nDescribing something enormous and ambitious like Egyptian monuments.",
   example:"A: Le projet est pharaonique.\nB: Il va coûter des milliards.",
   exampleSrc:"A: The project is pharaonic.\nB: It will cost billions.",
   funFact:"Used almost exclusively figuratively in modern French to mean 'absurdly grandiose'."},

  {type:"teach", trg:"la néologie", src:"neology (word creation)", pos:"noun", gender:"f",
   note:"The study and practice of creating new words.\nNéo- (new) + -logie (study of).",
   example:"A: La néologie est essentielle pour les langues vivantes.\nB: Sans nouveaux mots, une langue meurt.",
   exampleSrc:"A: Neology is essential for living languages.\nB: Without new words, a language dies.",
   funFact:"French has official commissions for néologie that coin terms for new technologies."},

  {type:"teach", trg:"les griffes", src:"claws, designer labels", pos:"noun", gender:"pl",
   note:"Plural of griffe. Both claws and fashion labels.\nLa griffe d'un couturier = a designer's label.",
   example:"A: Elle ne porte que des griffes.\nB: Son budget vêtements est impressionnant.",
   exampleSrc:"A: She only wears designer labels.\nB: Her clothing budget is impressive.",
   funFact:"Griffe means both an animal's claw and a designer's signature mark on clothing."},

  {type:"teach", trg:"la paroisse", src:"parish", pos:"noun", gender:"f",
   note:"A local church district.\nFrom Greek paroikia (neighborhood).",
   example:"A: La paroisse organise une fête ce dimanche.\nB: Tout le village est invité.",
   exampleSrc:"A: The parish is organizing a festival this Sunday.\nB: The whole village is invited.",
   funFact:"French communes (municipalities) often correspond to historical parish boundaries."},

  {type:"teach", trg:"paroissial", src:"parochial, parish-related", pos:"adj", gender:null,
   note:"From paroisse + -ial.\nFeminine: paroissiale. Plural: paroissiaux.",
   example:"A: La salle paroissiale accueille les réunions.\nB: C'est un lieu de rassemblement communautaire.",
   exampleSrc:"A: The parish hall hosts meetings.\nB: It's a community gathering place.",
   funFact:"Unlike English 'parochial' (narrow-minded), French paroissial is purely geographic."},

  {type:"teach", trg:"le café-tabac", src:"cafe selling tobacco", pos:"noun", gender:"m",
   note:"A cafe that also sells tobacco products.\nThe red diamond sign marks these establishments.",
   example:"A: On se retrouve au café-tabac du coin?\nB: D'accord, vers dix-huit heures.",
   exampleSrc:"A: Shall we meet at the corner cafe-tabac?\nB: Okay, around six o'clock.",
   funFact:"The red diamond-shaped sign of the tabac is iconic in France. They also sell lottery tickets."},

  {type:"mc", q:"Un peplum est:", opts:["Un film d'aventure dans l'Antiquité","Un plat méditerranéen","Un style de musique","Un vêtement romain"], ans:"Un film d'aventure dans l'Antiquité",
   hint:"Think gladiators and togas. Cinematic epics set in ancient Greece or Rome."},

  {type:"teach", trg:"la crêperie", src:"creperie", pos:"noun", gender:"f",
   note:"From crêpe + -erie.\nA restaurant specializing in crepes.",
   example:"A: On mange dans une crêperie bretonne ce soir?\nB: Bonne idée, je veux une galette complète!",
   exampleSrc:"A: Shall we eat at a Breton creperie tonight?\nB: Good idea, I want a complete galette!",
   funFact:"Brittany is the homeland of crepes. Savory ones are called galettes, sweet ones are crêpes."},

  {type:"teach", trg:"le jamais-vu", src:"jamais vu (never seen before)", pos:"noun", gender:"m",
   note:"The feeling that a familiar situation feels completely new.\nOpposite of déjà vu.",
   example:"A: C'est du jamais-vu dans l'histoire politique.\nB: Personne n'avait prévu un tel résultat.",
   exampleSrc:"A: This is unprecedented in political history.\nB: Nobody had predicted such a result.",
   funFact:"Like déjà vu, jamais vu is used in English as a psychological term."},

  {type:"teach", trg:"le jet-set", src:"jet set", pos:"noun", gender:"m",
   note:"Borrowed from English.\nThe wealthy social elite who travel by private jet.",
   example:"A: Le jet-set se retrouve à Monaco chaque été.\nB: C'est un monde à part.",
   exampleSrc:"A: The jet set gathers in Monaco every summer.\nB: It's a world apart.",
   funFact:"French pronunciation keeps 'jet' but frenchifies 'set': zheh-SEHT."},

  {type:"teach", trg:"les fêtes", src:"festivities, holidays", pos:"noun", gender:"pl",
   note:"Plural of fête. Celebrations, festivals.\nLes fêtes = the holiday season (Christmas/New Year).",
   example:"A: Les fêtes de fin d'année approchent.\nB: Il faut commencer à préparer les cadeaux.",
   exampleSrc:"A: The year-end holidays are approaching.\nB: We need to start preparing gifts.",
   funFact:"Les fêtes without specification usually means Christmas and New Year in French."},

  {type:"fb", s:"Ce projet est {1}: il va coûter des milliards.", a:["pharaonique"], opts:["pharaonique","paroissial","partiellement","participatif"],
   hint:"Like the pyramids of Egypt. Enormously ambitious and expensive.",
   sSrc:"This project is {1}: it will cost billions."},

  {type:"teach", trg:"le café-crème", src:"coffee with cream", pos:"noun", gender:"m",
   note:"The classic French coffee with steamed milk.\nOften shortened to 'un crème'.",
   example:"A: Un café-crème, s'il vous plaît.\nB: Grand ou petit?",
   exampleSrc:"A: A coffee with cream, please.\nB: Large or small?",
   funFact:"At a French café, ordering 'un crème' is enough. Everyone knows you mean coffee."},

  {type:"teach", trg:"la phonétique", src:"phonetics", pos:"noun", gender:"f",
   note:"The study of speech sounds.\nAlso adjective: l'alphabet phonétique international.",
   example:"A: La phonétique française pose des défis aux étrangers.\nB: Les voyelles nasales sont uniques.",
   exampleSrc:"A: French phonetics poses challenges for foreigners.\nB: The nasal vowels are unique.",
   funFact:"French has 36 phonemes. The four nasal vowels are among the hardest for learners."},

  {type:"mc", q:"'Du jamais-vu' signifie:", opts:["Quelque chose de familier","Quelque chose de sans précédent","Quelque chose de prévu","Quelque chose d'oublié"], ans:"Quelque chose de sans précédent",
   hint:"Jamais = never, vu = seen. Something that has never been seen before."},

  {type:"fb", s:"La {1} bretonne sert des galettes et des crêpes.", a:["crêperie"], opts:["crêperie","paroisse","néologie","phonétique"],
   hint:"A restaurant specialized in thin French pancakes. From Brittany.",
   sSrc:"The Breton {1} serves galettes and crepes."},

  {type:"match", pairs:[
    {trg:"le café-concert", src:"cafe with music"},
    {trg:"le café-tabac", src:"cafe selling tobacco"},
    {trg:"le café-crème", src:"coffee with cream"},
    {trg:"la crêperie", src:"creperie"}
  ]},

  {type:"mc", q:"La différence entre 'paroissial' en français et 'parochial' en anglais est:", opts:["Aucune différence","Le français est péjoratif, l'anglais non","L'anglais peut signifier étroit d'esprit, le français non","Les deux sont péjoratifs"], ans:"L'anglais peut signifier étroit d'esprit, le français non",
   hint:"In English, parochial often means narrow-minded. French paroissial just means 'of the parish'."},

  {type:"fb", s:"Elle ne porte que des {1} de grands couturiers.", a:["griffes"], opts:["griffes","fêtes","crêperies","paroisses"],
   hint:"Designer labels. The word also means 'claws' in its animal sense.",
   sSrc:"She only wears {1} from top designers."},

  {type:"match", pairs:[
    {trg:"pharaonique", src:"grandiose"},
    {trg:"le néologisme", src:"new word"},
    {trg:"le jamais-vu", src:"unprecedented"},
    {trg:"les fêtes", src:"holidays"}
  ]}
]};

export default LESSON_10;
