const LESSON_6 = {
  id:"frv2_b2g4_l6", title:"Caractere et comportement", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Caractere et comportement",
     desc:"Master vocabulary for describing personality traits, attitudes, and behaviors at a sophisticated level.",
     goals:["Learn 15 character and behavior words","Describe people with nuance and precision","Discuss personality traits in French"]},

    {type:"teach", trg:"flemmard", src:"lazy, idle", pos:"adj", gender:null,
     note:"Adjective. Informal word for someone who avoids effort. Feminine: flemmarde.",
     example:"A: Arrete d'etre flemmard, leve-toi.\nB: Encore cinq minutes, s'il te plait.",
     exampleSrc:"A: Stop being lazy, get up.\nB: Five more minutes, please.",
     funFact:"From 'flemme' (laziness), itself from Latin 'phlegma'. The phlegmatic temperament was considered sluggish."},

    {type:"teach", trg:"hargneux", src:"aggressive, snappy", pos:"adj", gender:null,
     note:"Adjective. Hostile and quick to bite. Feminine: hargneuse.",
     example:"A: Ce chien est hargneux, fais attention.\nB: Il grogne des qu'on s'approche.",
     exampleSrc:"A: That dog is aggressive, be careful.\nB: It growls as soon as you get close.",
     funFact:"From Old French 'harignier' (to snarl). Originally only for animals, now used for grumpy people too."},

    {type:"teach", trg:"hideux", src:"hideous, extremely ugly", pos:"adj", gender:null,
     note:"Adjective. Extremely ugly or repulsive. Feminine: hideuse.",
     example:"A: Ce batiment est hideux.\nB: Oui, c'est une horreur architecturale.",
     exampleSrc:"A: This building is hideous.\nB: Yes, it's an architectural horror.",
     funFact:"From Old French 'hisdos' meaning terrifying. Victor Hugo used 'hideux' to describe social injustice."},

    {type:"teach", trg:"grivois", src:"bawdy, risque", pos:"adj", gender:null,
     note:"Adjective. Mildly indecent humor. Feminine: grivoise.",
     example:"A: Il raconte toujours des histoires grivoises.\nB: Ca fait rire tout le monde.",
     exampleSrc:"A: He always tells bawdy stories.\nB: It makes everyone laugh.",
     funFact:"From 'grive' (thrush bird). Soldiers who lived off the land like thrushes developed crude humor."},

    {type:"teach", trg:"la hardiesse", src:"the boldness, the daring", pos:"noun", gender:"f",
     note:"Feminine noun. Courage and willingness to take risks.",
     example:"A: J'admire la hardiesse de sa proposition.\nB: Personne d'autre n'aurait ose.",
     exampleSrc:"A: I admire the boldness of his proposal.\nB: Nobody else would have dared.",
     funFact:"From 'hardi' (bold). The expression 'hardi les gars!' was a rallying cry meaning 'be brave, lads!'"},

    {type:"mc",
     q:"Quel adjectif decrit quelqu'un qui evite tout effort ?",
     opts:["flemmard","hargneux","hideux","grivois"],
     ans:"flemmard",
     hint:"From 'flemme' meaning laziness, which traces back to the Latin word for phlegm."},

    {type:"teach", trg:"la gaucherie", src:"the clumsiness, the awkwardness", pos:"noun", gender:"f",
     note:"Feminine noun. Awkward or clumsy behavior.",
     example:"A: Sa gaucherie la rend attachante.\nB: Oui, c'est charmant.",
     exampleSrc:"A: Her clumsiness makes her endearing.\nB: Yes, it's charming.",
     funFact:"From 'gauche' (left-handed). Left-handedness was historically seen as clumsy. Still in English too."},

    {type:"teach", trg:"fuyant", src:"evasive, elusive", pos:"adj", gender:null,
     note:"Adjective. Avoiding direct contact or commitment. Feminine: fuyante.",
     example:"A: Son regard est toujours fuyant.\nB: Il cache quelque chose, c'est sur.",
     exampleSrc:"A: His gaze is always evasive.\nB: He's hiding something, for sure.",
     funFact:"From 'fuir' (to flee). In art, 'un point fuyant' is a vanishing point in perspective drawing."},

    {type:"teach", trg:"la grossierete", src:"the rudeness, the vulgarity", pos:"noun", gender:"f",
     note:"Feminine noun. Rude or vulgar behavior or language.",
     example:"A: Sa grossierete est inacceptable.\nB: Il devrait presenter ses excuses.",
     exampleSrc:"A: His rudeness is unacceptable.\nB: He should apologize.",
     funFact:"From 'grossier' (coarse). Originally meant thick or rough fabric before extending to behavior."},

    {type:"fb",
     s:"J'admire la {1} de son discours face a l'opposition.",
     a:["hardiesse"],
     opts:["hardiesse","gaucherie","grossierete","flemmardise"],
     hint:"Courage and willingness to take bold risks. From the adjective 'hardi' meaning daring.",
     sSrc:"I admire the {1} of his speech in the face of opposition."},

    {type:"teach", trg:"impatient", src:"impatient", pos:"adj", gender:null,
     note:"Adjective. Unable to wait calmly. Feminine: impatiente.",
     example:"A: Les enfants sont impatients d'ouvrir leurs cadeaux.\nB: Noel est dans deux jours.",
     exampleSrc:"A: The children are impatient to open their gifts.\nB: Christmas is in two days.",
     funFact:"'Im-' (not) + 'patient' (suffering). The impatient person cannot endure waiting."},

    {type:"teach", trg:"improbable", src:"improbable, unlikely", pos:"adj", gender:null,
     note:"Adjective. Not likely to happen or be true.",
     example:"A: Son succes etait totalement improbable.\nB: Personne n'y croyait au depart.",
     exampleSrc:"A: His success was totally improbable.\nB: Nobody believed in it at first.",
     funFact:"Modern French youth use 'improbable' as slang for amazing, like English 'unreal'."},

    {type:"teach", trg:"illicite", src:"illicit, illegal", pos:"adj", gender:null,
     note:"Adjective. Forbidden by law or social norms.",
     example:"A: Le commerce illicite doit etre combattu.\nB: La police fait de son mieux.",
     exampleSrc:"A: Illicit trade must be fought.\nB: The police are doing their best.",
     funFact:"From Latin 'illicitus'. French distinguishes 'illicite' (legally forbidden) from 'illegal' (against the law)."},

    {type:"mc",
     q:"Quel mot decrit un regard qui evite le contact ?",
     opts:["fuyant","hargneux","grivois","hideux"],
     ans:"fuyant",
     hint:"From the verb 'fuir' meaning to flee. Also a term in perspective art for the vanishing point."},

    {type:"teach", trg:"foncierement", src:"fundamentally, deeply", pos:"adv", gender:null,
     note:"Adverb. At the deepest level, in one's core nature.",
     example:"A: Il est foncierement honnete.\nB: Oui, on peut lui faire confiance.",
     exampleSrc:"A: He is fundamentally honest.\nB: Yes, you can trust him.",
     funFact:"From 'foncier' (relating to land/foundation). What is 'foncier' is deeply rooted, like a foundation."},

    {type:"fb",
     s:"Son comportement {1} a choque tout le monde.",
     a:["illicite"],
     opts:["illicite","impatient","improbable","fuyant"],
     hint:"An adjective meaning forbidden by law, from Latin 'illicitus'.",
     sSrc:"His {1} behavior shocked everyone."},

    {type:"match", pairs:[
      {trg:"flemmard", src:"lazy"},
      {trg:"hargneux", src:"aggressive"},
      {trg:"grivois", src:"bawdy"},
      {trg:"fuyant", src:"evasive"},
      {trg:"gaucherie", src:"clumsiness"}
    ]},

    {type:"mc",
     q:"Que signifie 'foncierement' ?",
     opts:["Profondement, dans sa nature","Rapidement","Partiellement","Superficiellement"],
     ans:"Profondement, dans sa nature",
     hint:"From 'foncier' meaning foundational. Describes something at the deepest core level."}
  ]
};
export default LESSON_6;
