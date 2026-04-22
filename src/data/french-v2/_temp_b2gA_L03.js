const LESSON_3 = {
  id:"frv2_b2gA_l3", title:"Forces et faiblesses", icon:"\u{1F4AA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Forces et faiblesses",
     desc:"Build vocabulary for describing personal qualities, flaws, and character judgments. Essential for B2 discussions about people and self-reflection.",
     goals:["Learn 14 words for strengths and weaknesses","Describe character with nuance","Use abstract nouns for personal qualities"]},

    {type:"teach", trg:"la perspicacite", src:"perspicacity, shrewdness", pos:"noun", gender:"f",
     note:"Feminine noun. The ability to understand things quickly and accurately.",
     example:"A: J'admire ta perspicacite.\nB: Merci, j'essaie de bien observer.",
     exampleSrc:"A: I admire your perspicacity.\nB: Thanks, I try to observe well.",
     funFact:"From Latin 'perspicax' meaning sharp-sighted. Detectives in French novels are praised for this quality."},

    {type:"teach", trg:"l'incapacite", src:"the inability, incapacity", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of ability or legal disqualification.\nBuilt with prefix in- + capacite.",
     example:"A: Son incapacite a deleguer pose probleme.\nB: Il veut tout faire lui-meme.",
     exampleSrc:"A: His inability to delegate is a problem.\nB: He wants to do everything himself.",
     funFact:"In French law, 'incapacite de travail' is a precise medical and legal concept for work disability."},

    {type:"teach", trg:"la grossierete", src:"rudeness, coarseness", pos:"noun", gender:"f",
     note:"Feminine noun. Vulgar or rude behavior. From 'grossier' (rude).",
     example:"A: Sa grossierete a choque tout le monde.\nB: Il devrait s'excuser.",
     exampleSrc:"A: His rudeness shocked everyone.\nB: He should apologize.",
     funFact:"French etiquette is elaborate. A 'grossierete' can be as subtle as forgetting to say 'bonjour' when entering a shop."},

    {type:"teach", trg:"la malhonnetete", src:"dishonesty", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being dishonest.\nBuilt with mal- + honnetete.",
     example:"A: La malhonnetete est inacceptable en affaires.\nB: La confiance est tout.",
     exampleSrc:"A: Dishonesty is unacceptable in business.\nB: Trust is everything.",
     funFact:"French business culture values 'la parole donnee' (the given word). Breaking it is the ultimate malhonnetete."},

    {type:"teach", trg:"l'insuffisance", src:"the insufficiency, inadequacy", pos:"noun", gender:"f",
     note:"Feminine noun. A lack or shortage of something needed.\nAlso medical: organ failure.",
     example:"A: L'insuffisance des moyens est evidente.\nB: Il faut doubler le budget.",
     exampleSrc:"A: The insufficiency of resources is evident.\nB: We need to double the budget.",
     funFact:"In medicine, 'insuffisance cardiaque' means heart failure. The word spans formal, medical, and everyday French."},

    {type:"mc",
     q:"Quel mot designe la capacite a comprendre les choses rapidement ?",
     opts:["la perspicacite","l'insuffisance","la grossierete","l'incapacite"],
     ans:"la perspicacite",
     hint:"From Latin 'perspicax' meaning sharp-sighted. Think of keen observation skills."},

    {type:"teach", trg:"la petitesse", src:"pettiness, smallness", pos:"noun", gender:"f",
     note:"Feminine noun. Meanness of spirit, or physical smallness.",
     example:"A: La petitesse de ses remarques m'a decu.\nB: Il est jaloux, tout simplement.",
     exampleSrc:"A: The pettiness of his remarks disappointed me.\nB: He's simply jealous.",
     funFact:"Built from 'petit' + -esse. French has many -esse suffixes for abstract qualities: richesse, sagesse, finesse."},

    {type:"teach", trg:"la platitude", src:"platitude, dullness", pos:"noun", gender:"f",
     note:"Feminine noun. A dull, unoriginal statement. Also flatness or blandness.",
     example:"A: Son discours etait plein de platitudes.\nB: Pas une seule idee originale.",
     exampleSrc:"A: His speech was full of platitudes.\nB: Not a single original idea.",
     funFact:"Flaubert collected platitudes in his 'Dictionnaire des idees recues' as a satire of bourgeois thinking."},

    {type:"teach", trg:"pitoyable", src:"pitiful, pathetic", pos:"adj", gender:null,
     note:"Adjective. Inspiring pity or contempt. Same form for masculine and feminine.",
     example:"A: Son excuse etait pitoyable.\nB: Personne ne l'a crue.",
     exampleSrc:"A: His excuse was pitiful.\nB: Nobody believed it.",
     funFact:"From 'pitie' (pity). Can express genuine sympathy or withering contempt depending on tone."},

    {type:"fb",
     s:"La {1} de ses remarques a decu tous ses collegues.",
     a:["petitesse"],
     opts:["petitesse","perspicacite","platitude","grossierete"],
     hint:"Meanness of spirit or small-mindedness. Built from the adjective 'petit'.",
     sSrc:"The {1} of his remarks disappointed all his colleagues."},

    {type:"teach", trg:"l'infidelite", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Disloyalty in a relationship or to a commitment.",
     example:"A: L'infidelite a detruit leur mariage.\nB: La confiance ne se reconstruit pas facilement.",
     exampleSrc:"A: Infidelity destroyed their marriage.\nB: Trust is not easily rebuilt.",
     funFact:"French literature has explored infidelity for centuries. Madame Bovary remains the most famous example."},

    {type:"teach", trg:"la niaiserie", src:"silliness, foolishness", pos:"noun", gender:"f",
     note:"Feminine noun. Foolish or naive behavior. From 'niais' (naive).",
     example:"A: Arrete tes niaiseries, c'est serieux !\nB: Pardon, je vais me concentrer.",
     exampleSrc:"A: Stop your silliness, this is serious!\nB: Sorry, I'll focus.",
     funFact:"In Quebec French, 'niaiseux' is one of the most common mild insults. In France, 'niais' sounds more literary."},

    {type:"teach", trg:"l'outrage", src:"the outrage, the insult", pos:"noun", gender:"m",
     note:"Masculine noun. A grave insult or violation of dignity.",
     example:"A: C'est un outrage a la memoire des victimes.\nB: Oui, c'est absolument inacceptable.",
     exampleSrc:"A: It's an outrage to the memory of the victims.\nB: Yes, it's absolutely unacceptable.",
     funFact:"'Outrage a agent' (insulting a police officer) is a specific criminal offense in French law."},

    {type:"mc",
     q:"Quel adjectif signifie 'qui inspire la pitie ou le mepris' ?",
     opts:["perspicace","pitoyable","insuffisant","malhonnete"],
     ans:"pitoyable",
     hint:"From the noun 'pitie'. Can express sympathy or contempt depending on context."},

    {type:"teach", trg:"le penchant", src:"the tendency, the inclination", pos:"noun", gender:"m",
     note:"Masculine noun. A natural tendency or liking.\n'Avoir un penchant pour' = to have a taste for.",
     example:"A: Il a un penchant pour les jeux de hasard.\nB: C'est un probleme qu'il doit affronter.",
     exampleSrc:"A: He has a tendency for gambling.\nB: It's a problem he needs to face.",
     funFact:"From 'pencher' (to lean). Your penchant is what you lean toward. Often used for slight vices."},

    {type:"fb",
     s:"Son {1} pour les depenses excessives lui a cause des ennuis.",
     a:["penchant"],
     opts:["penchant","outrage","incapacite","perspicacite"],
     hint:"A natural tendency or inclination. From 'pencher' meaning to lean.",
     sSrc:"His {1} for excessive spending caused him trouble."},

    {type:"match", pairs:[
      {trg:"grossierete", src:"rudeness"},
      {trg:"malhonnetete", src:"dishonesty"},
      {trg:"platitude", src:"dullness"},
      {trg:"infidelite", src:"infidelity"},
      {trg:"niaiserie", src:"silliness"}
    ]},

    {type:"mc",
     q:"Quel nom designe un manque grave de moyens ou de ressources ?",
     opts:["la petitesse","l'outrage","l'insuffisance","l'incapacite"],
     ans:"l'insuffisance",
     hint:"Built from 'insuffisant'. Also used in medicine for organ failure."}
  ]
};
export default LESSON_3;
