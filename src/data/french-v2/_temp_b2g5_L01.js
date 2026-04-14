// French B2 Gap Lesson 1 — Society and Identity
const LESSON_1 = {id:"frv2_b2g5_l1", title:"Identité et société", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Identité et société",
   desc:"Explore vocabulary for discussing identity, social roles, and how individuals relate to broader society at the B2 level.",
   goals:["Learn 15 key words about society and identity","Discuss social phenomena in French","Use abstract nouns and related adjectives"]},

  {type:"teach", trg:"l'avènement", src:"the advent / the rise", pos:"noun", gender:"m",
   note:"Formal noun for the emergence of something important.\nOften used for historical or social shifts.",
   example:"A: L'avènement d'Internet a tout changé.\nB: Oui, surtout notre façon de communiquer.\nA: Et les réseaux sociaux?\nB: C'est un deuxième avènement technologique.",
   exampleSrc:"A: The advent of the Internet changed everything.\nB: Yes, especially the way we communicate.\nA: And social media?\nB: That's a second technological advent.",
   funFact:"From Latin 'adventus' (arrival). Same root as English 'advent' and 'adventure'."},

  {type:"teach", trg:"l'archétype", src:"the archetype", pos:"noun", gender:"m",
   note:"An original model or ideal example.\nUsed in psychology (Jung) and literature.",
   example:"A: Le héros solitaire est un archétype classique.\nB: Comme dans les westerns?\nA: Exactement. On le retrouve dans toutes les cultures.\nB: C'est un modèle universel.",
   exampleSrc:"A: The lone hero is a classic archetype.\nB: Like in westerns?\nA: Exactly. It's found in all cultures.\nB: It's a universal model.",
   funFact:"From Greek 'arkhetypon' (original pattern). Carl Jung popularized this term in modern psychology."},

  {type:"teach", trg:"l'identification", src:"the identification", pos:"noun", gender:"f",
   note:"The act of recognizing or associating with something.\nAlso used for official identity checks.",
   example:"A: L'identification aux personnages de fiction est normale.\nB: Oui, on se reconnaît dans leurs histoires.\nA: Surtout pendant l'adolescence.\nB: C'est une étape importante du développement.",
   exampleSrc:"A: Identifying with fictional characters is normal.\nB: Yes, we recognize ourselves in their stories.\nA: Especially during adolescence.\nB: It's an important stage of development.",
   funFact:"Feminine because of the -tion ending. Nearly all French nouns ending in -tion are feminine."},

  {type:"teach", trg:"l'antihéros", src:"the antihero", pos:"noun", gender:"m",
   note:"A protagonist who lacks conventional heroic qualities.\nCommon in modern literature and cinema.",
   example:"A: Tu préfères les héros ou les antihéros?\nB: Les antihéros, ils sont plus réalistes.\nA: Comme qui, par exemple?\nB: Comme le personnage principal de ce roman noir.",
   exampleSrc:"A: Do you prefer heroes or antiheroes?\nB: Antiheroes, they are more realistic.\nA: Like who, for example?\nB: Like the main character in that crime novel.",
   funFact:"The prefix 'anti-' comes from Greek meaning 'against'. French borrowed it directly."},

  {type:"teach", trg:"idéaliste", src:"idealistic", pos:"adj", gender:null,
   note:"Believing in or pursuing ideals.\nCan describe people or movements.",
   example:"A: Tu es plutôt idéaliste ou réaliste?\nB: Idéaliste. Je crois qu'on peut changer les choses.\nA: Ce n'est pas naïf?\nB: Non, c'est nécessaire pour avancer.",
   exampleSrc:"A: Are you more idealistic or realistic?\nB: Idealistic. I believe we can change things.\nA: Isn't that naive?\nB: No, it's necessary to move forward.",
   funFact:"Same form for masculine and feminine. Only changes in plural: idéalistes."},

  {type:"teach", trg:"l'incarnation", src:"the embodiment / incarnation", pos:"noun", gender:"f",
   note:"The personification of an idea or quality.\nAlso religious: God becoming flesh.",
   example:"A: Elle est l'incarnation de la persévérance.\nB: C'est vrai, elle n'abandonne jamais.\nA: Même après tous ces échecs.\nB: C'est ce qui la rend admirable.",
   exampleSrc:"A: She is the embodiment of perseverance.\nB: That's true, she never gives up.\nA: Even after all those failures.\nB: That's what makes her admirable.",
   funFact:"From Latin 'incarnatio' (becoming flesh). The 'carn-' root also gives 'carnival' and 'carnal'."},

  {type:"teach", trg:"incompris", src:"misunderstood", pos:"adj", gender:null,
   note:"Not understood or appreciated.\nOften describes artists, visionaries, or teenagers.",
   example:"A: Beaucoup d'artistes se sentent incompris.\nB: C'est le prix de l'originalité.\nA: Tu te sens parfois incompris?\nB: Oui, quand personne ne comprend mes idées.",
   exampleSrc:"A: Many artists feel misunderstood.\nB: That's the price of originality.\nA: Do you sometimes feel misunderstood?\nB: Yes, when nobody understands my ideas.",
   funFact:"Formed from 'in-' (not) + 'compris' (understood). The prefix 'in-' negates the adjective."},

  {type:"teach", trg:"insignifiant", src:"insignificant", pos:"adj", gender:null,
   note:"Without importance or meaning.\nCan describe details, people, or events.",
   example:"A: Ce détail semble insignifiant.\nB: Mais il pourrait tout changer.\nA: Tu exagères!\nB: Non, les petites choses comptent souvent le plus.",
   exampleSrc:"A: This detail seems insignificant.\nB: But it could change everything.\nA: You're exaggerating!\nB: No, small things often matter the most.",
   funFact:"From Latin 'insignificans'. The prefix 'in-' means 'not' and 'significans' means 'meaning'."},

  {type:"teach", trg:"inaperçu", src:"unnoticed", pos:"adj", gender:null,
   note:"Not noticed or seen. Often in 'passer inaperçu'.\nMasculine form shown; feminine: inaperçue.",
   example:"A: Son talent est passé inaperçu pendant des années.\nB: C'est dommage, elle méritait mieux.\nA: Maintenant tout le monde la connaît.\nB: Mieux vaut tard que jamais.",
   exampleSrc:"A: Her talent went unnoticed for years.\nB: That's a shame, she deserved better.\nA: Now everyone knows her.\nB: Better late than never.",
   funFact:"The expression 'passer inaperçu' (to go unnoticed) is one of the most common uses."},

  {type:"mc", q:"Quel mot désigne l'émergence de quelque chose d'important?",
   opts:["L'avènement","L'archétype","L'incarnation","L'identification"],
   ans:"L'avènement",
   hint:"Think of the arrival or rise of something new, like a technology or era"},

  {type:"fb", s:"Le héros solitaire est un {1} que l'on retrouve dans toutes les cultures.",
   a:["archétype"], opts:["archétype","antihéros","avènement","incarnation"],
   hint:"This is an original model or ideal pattern found universally",
   sSrc:"The lone hero is an {1} found in all cultures."},

  {type:"teach", trg:"la démocratisation", src:"the democratization", pos:"noun", gender:"f",
   note:"Making something accessible to everyone.\nUsed for politics, technology, culture.",
   example:"A: La démocratisation de l'éducation est essentielle.\nB: Oui, tout le monde devrait y avoir accès.\nA: Et la culture?\nB: Pareil. Les musées gratuits aident beaucoup.",
   exampleSrc:"A: The democratization of education is essential.\nB: Yes, everyone should have access to it.\nA: And culture?\nB: Same. Free museums help a lot.",
   funFact:"Formed from 'démocratiser' + '-tion'. The -tion suffix creates feminine nouns from verbs."},

  {type:"teach", trg:"la désobéissance", src:"the disobedience", pos:"noun", gender:"f",
   note:"Refusing to obey rules or authority.\nOften in 'désobéissance civile' (civil disobedience).",
   example:"A: La désobéissance civile est-elle justifiée?\nB: Parfois, quand les lois sont injustes.\nA: Tu penses à des exemples historiques?\nB: Oui, comme les mouvements pour les droits civiques.",
   exampleSrc:"A: Is civil disobedience justified?\nB: Sometimes, when the laws are unjust.\nA: Are you thinking of historical examples?\nB: Yes, like the civil rights movements.",
   funFact:"From 'dés-' (un-) + 'obéissance' (obedience). Henry David Thoreau popularized the concept."},

  {type:"teach", trg:"l'impunité", src:"the impunity", pos:"noun", gender:"f",
   note:"Exemption from punishment. Often in 'en toute impunité'.\nUsed in legal and political contexts.",
   example:"A: Ils agissent en toute impunité.\nB: C'est inacceptable dans un état de droit.\nA: Que faire contre cela?\nB: Renforcer les institutions judiciaires.",
   exampleSrc:"A: They act with complete impunity.\nB: That's unacceptable in a state governed by law.\nA: What can be done about it?\nB: Strengthen the judicial institutions.",
   funFact:"From Latin 'impunitas'. The expression 'en toute impunité' means 'with total impunity'."},

  {type:"teach", trg:"l'investiture", src:"the investiture / inauguration", pos:"noun", gender:"f",
   note:"Formal ceremony of installing someone in office.\nUsed for presidents and other officials.",
   example:"A: L'investiture du président a lieu en janvier.\nB: C'est une cérémonie très formelle.\nA: Beaucoup de gens y assistent?\nB: Oui, des milliers de personnes.",
   exampleSrc:"A: The president's inauguration takes place in January.\nB: It's a very formal ceremony.\nA: Do many people attend?\nB: Yes, thousands of people.",
   funFact:"From Latin 'investitura' (clothing). Originally meant 'robing' someone in office."},

  {type:"mc", q:"Que signifie 'passer inaperçu'?",
   opts:["Ne pas être remarqué","Être très célèbre","Disparaître soudainement","Refuser d'obéir"],
   ans:"Ne pas être remarqué",
   hint:"This expression describes going through unnoticed by others"},

  {type:"fb", s:"La {1} de la culture permet à tous d'accéder aux musées et aux spectacles.",
   a:["démocratisation"], opts:["démocratisation","désobéissance","identification","investiture"],
   hint:"Making something accessible to everyone, removing barriers",
   sSrc:"The {1} of culture allows everyone to access museums and shows."},

  {type:"match", pairs:[
    {trg:"l'avènement", src:"the advent / rise"},
    {trg:"incompris", src:"misunderstood"},
    {trg:"l'impunité", src:"impunity"},
    {trg:"idéaliste", src:"idealistic"},
    {trg:"l'investiture", src:"inauguration"}
  ]},

  {type:"mc", q:"Quel adjectif décrit une personne qui croit pouvoir changer le monde?",
   opts:["Idéaliste","Insignifiant","Incompris","Inaperçu"],
   ans:"Idéaliste",
   hint:"Someone who pursues ideals and believes in positive change"},

  {type:"fb", s:"Ils agissent en toute {1}, personne ne les punit.",
   a:["impunité"], opts:["impunité","investiture","incarnation","identification"],
   hint:"This word means exemption from punishment or consequences",
   sSrc:"They act with complete {1}, nobody punishes them."},

  {type:"mc", q:"Quel mot décrit un personnage principal qui manque de qualités héroïques?",
   opts:["Un antihéros","Un archétype","Un idéaliste","Un démocrate"],
   ans:"Un antihéros",
   hint:"The prefix means 'against' or 'opposite of' the conventional hero"},

  {type:"drag_fill", s:"La {1} civile est parfois nécessaire quand les lois sont {2}.",
   blanks:{"1":"désobéissance","2":"injustes"},
   pool:["désobéissance","injustes","impunité","formelles"],
   hint:"Refusing to obey rules that are unfair or unjust"},

  {type:"fb", s:"Elle est l'{1} même de la persévérance, elle n'abandonne jamais.",
   a:["incarnation"], opts:["incarnation","identification","impunité","investiture"],
   hint:"The living embodiment or personification of a quality",
   sSrc:"She is the very {1} of perseverance, she never gives up."},

  {type:"mc", q:"L'investiture du président est:",
   opts:["Une cérémonie officielle d'entrée en fonction","Un vote populaire","Une manifestation publique","Un débat télévisé"],
   ans:"Une cérémonie officielle d'entrée en fonction",
   hint:"A formal ceremony marking the beginning of someone's time in office"}
]};
export default LESSON_1;
