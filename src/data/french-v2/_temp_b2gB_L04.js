const LESSON_4 = {
  id:"frv2_b2gB_l4", title:"Professions et expertise", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Professions et expertise",
     desc:"Learn vocabulary related to professional roles, expertise, and career advancement in French workplace culture.",
     goals:["Learn 10 professional and expertise terms","Describe career roles formally","Discuss workplace culture"]},

    {type:"teach", trg:"un decorateur", src:"a decorator, a designer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who designs interiors or stage sets.\nFeminine: une decoratrice. Decorateur d'interieur = interior designer.",
     example:"A: Le decorateur a propose un style contemporain.\nB: Les couleurs qu'il a choisies sont magnifiques.",
     exampleSrc:"A: The decorator proposed a contemporary style.\nB: The colors he chose are magnificent.",
     funFact:"French interior design is world-renowned. The term 'decor' entered English directly from French in the 17th century."},

    {type:"teach", trg:"un confrere", src:"a colleague, a fellow professional", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow member of a profession.\nFeminine: une consoeur. Used especially among doctors, lawyers, journalists.",
     example:"A: Mon confrere a publie un article remarquable.\nB: Il est specialiste de ce domaine depuis vingt ans.",
     exampleSrc:"A: My colleague published a remarkable article.\nB: He has been a specialist in this field for twenty years.",
     funFact:"Unlike 'collegue' (any coworker), confrere implies shared professional identity. Doctors call each other confrere, not collegue."},

    {type:"teach", trg:"professoral", src:"professorial", pos:"adj", gender:null,
     note:"Adjective. Relating to or characteristic of a professor.\nFeminine: professorale. Plural: professoraux.",
     example:"A: Son ton professoral agace parfois ses collegues.\nB: Il parle comme s'il donnait un cours.",
     exampleSrc:"A: His professorial tone sometimes annoys his colleagues.\nB: He talks as if he were giving a lecture.",
     funFact:"In France, the 'agregation' exam for becoming a professor is notoriously difficult. Only 10-15% of candidates pass."},

    {type:"teach", trg:"le professorat", src:"the professorship, teaching profession", pos:"noun", gender:"m",
     note:"Masculine noun. The office or position of professor.\nAcceder au professorat = to become a professor.",
     example:"A: Le professorat est une vocation pour elle.\nB: Elle enseigne depuis plus de trente ans avec passion.",
     exampleSrc:"A: Teaching is a vocation for her.\nB: She has been teaching for over thirty years with passion.",
     funFact:"French professors in public universities are civil servants (fonctionnaires). Their job security is almost absolute."},

    {type:"teach", trg:"un proviseur", src:"a headmaster, a principal", pos:"noun", gender:"m",
     note:"Masculine noun. The head of a lycee (high school).\nFeminine: une proviseuse. Not used for primary schools (directeur).",
     example:"A: Le proviseur a annonce de nouvelles regles.\nB: Les eleves ne sont pas contents du tout.",
     exampleSrc:"A: The principal announced new rules.\nB: The students are not happy at all.",
     funFact:"A proviseur runs a lycee, a principal runs a college, and a directeur runs an ecole. Each school level has its own title."},

    {type:"teach", trg:"un pourvoyeur", src:"a provider, a supplier", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who provides or supplies something.\nFeminine: une pourvoyeuse. Often used for 'pourvoyeur de fonds'.",
     example:"A: Cette entreprise est le principal pourvoyeur d'emplois de la region.\nB: Sans elle, le chomage serait bien plus eleve.",
     exampleSrc:"A: This company is the main job provider in the region.\nB: Without it, unemployment would be much higher.",
     funFact:"From the Old French 'pourveoir' (to provide). The English word 'purveyor' comes from the same root."},

    {type:"teach", trg:"la programmation", src:"programming", pos:"noun", gender:"f",
     note:"Feminine noun. The act of planning or computer coding.\nProgrammation culturelle = cultural schedule. Programmation informatique = coding.",
     example:"A: La programmation de ce festival est exceptionnelle.\nB: Il y a des spectacles tous les soirs pendant un mois.",
     exampleSrc:"A: The programming for this festival is exceptional.\nB: There are shows every evening for a month.",
     funFact:"French uses 'programmation' for both event planning and computer coding. Context always makes the meaning clear."},

    {type:"teach", trg:"prompt", src:"prompt, swift", pos:"adj", gender:null,
     note:"Adjective. Quick to act or respond.\nFeminine: prompte. Pronounced 'pron' (the p and t are silent).",
     example:"A: Sa reponse a ete prompte et efficace.\nB: Il a reagi en moins d'une heure.",
     exampleSrc:"A: His response was prompt and efficient.\nB: He reacted in less than an hour.",
     funFact:"Most French speakers do not pronounce the final -pt. You say 'pron' not 'prompt'. The English pronunciation differs."},

    {type:"teach", trg:"prospere", src:"prosperous, thriving", pos:"adj", gender:null,
     note:"Adjective. Successful and flourishing.\nInvariant in gender (prospere for both m/f). Verb: prosperer.",
     example:"A: C'est une entreprise prospere depuis sa creation.\nB: Elle a triple son chiffre d'affaires en cinq ans.",
     exampleSrc:"A: It's been a prosperous company since its founding.\nB: It tripled its revenue in five years.",
     funFact:"Prospere comes from Latin 'prosperus' meaning favorable. 'Bonne annee et prospere!' is a classic New Year wish."},

    {type:"teach", trg:"un promeneur", src:"a walker, a stroller", pos:"noun", gender:"m",
     note:"Masculine noun. A person who walks for pleasure.\nFeminine: une promeneuse. From 'se promener' (to take a walk).",
     example:"A: Les promeneurs profitent du beau temps dans le parc.\nB: C'est agreable de marcher le long de la Seine.",
     exampleSrc:"A: The walkers are enjoying the nice weather in the park.\nB: It's pleasant to walk along the Seine.",
     funFact:"'La promenade' is a core French cultural activity. Sunday walks are a tradition, and many cities have named promenade paths."},

    {type:"mc", q:"Quel est le feminin de 'confrere'?",
     opts:["consoeur","confrere","confrerette","confrerisse"],
     ans:"consoeur",
     hint:"The feminine form uses a completely different root word for 'sister'"},

    {type:"fb", s:"Le {1} du lycee a suspendu trois eleves.",
     a:["proviseur"], opts:["proviseur","decorateur","confrere","promeneur"],
     hint:"This is the title for the head of a French high school",
     sSrc:"The {1} of the high school suspended three students."},

    {type:"mc", q:"Quelle est la réalisation orale de l'adjectif 'prompt' en français standard ?",
     opts:["pron","prompt","promt","prom"],
     ans:"pron",
     hint:"The final letters -pt are silent: both the p and the t disappear when spoken aloud."},

    {type:"match", pairs:[
      {trg:"un decorateur", src:"a decorator"},
      {trg:"un pourvoyeur", src:"a provider"},
      {trg:"un promeneur", src:"a walker"},
      {trg:"un proviseur", src:"a principal"}
    ]},

    {type:"fb", s:"Mon {1} a presente les memes conclusions que moi.",
     a:["confrere"], opts:["confrere","decorateur","proviseur","promeneur"],
     hint:"This word describes a fellow member of the same profession",
     sSrc:"My {1} presented the same conclusions as me."},

    {type:"mc", q:"Que signifie 'programmation culturelle'?",
     opts:["Le calendrier des evenements artistiques","L'ecriture de code informatique","La formation des professeurs","La planification financiere"],
     ans:"Le calendrier des evenements artistiques",
     hint:"Culturelle narrows the meaning to arts and events, not computers"},

    {type:"fb", s:"Cette region est {1} grace au tourisme.",
     a:["prospere"], opts:["prospere","prompte","professorale","predominante"],
     hint:"The adjective describes a thriving, financially successful state",
     sSrc:"This region is {1} thanks to tourism."},

    {type:"mc", q:"Qui dirige un lycee en France?",
     opts:["Un proviseur","Un directeur","Un doyen","Un recteur"],
     ans:"Un proviseur",
     hint:"Each school level has its own title; this one is specific to high school"},

    {type:"fb", s:"Le {1} a choisi des meubles en bois clair.",
     a:["decorateur"], opts:["decorateur","proviseur","pourvoyeur","confrere"],
     hint:"This professional designs interior spaces and chooses furnishings",
     sSrc:"The {1} chose light wood furniture."},

    {type:"match", pairs:[
      {trg:"professoral", src:"professorial"},
      {trg:"le professorat", src:"the professorship"},
      {trg:"la programmation", src:"programming"},
      {trg:"prompt", src:"swift"}
    ]}
  ]
};
export default LESSON_4;
