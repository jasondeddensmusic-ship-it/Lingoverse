const LESSON_1 = {
  id:"frv2_b2gap_l1", title:"L'esprit abstrait", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'esprit abstrait",
     desc:"Explore abstract and intellectual vocabulary used in academic discussion, philosophy, and formal writing.",
     goals:["Learn 20 abstract and intellectual B2 words","Use formal register in debates","Express complex ideas with precision"]},

    {type:"teach", trg:"une aberration", src:"an aberration", pos:"noun", gender:"f",
     note:"Feminine noun. A deviation from what is normal or expected.",
     example:"A: C'est une aberration de couper ce budget.\nB: Tout \u00e0 fait, c'est compl\u00e8tement illogique.",
     exampleSrc:"A: It's an aberration to cut this budget.\nB: Absolutely, it's completely illogical.",
     funFact:"From Latin 'aberratio' meaning a wandering away. Used in optics for lens distortion too."},

    {type:"teach", trg:"abstrait", src:"abstract", pos:"adj", gender:null,
     note:"Adjective. The opposite of 'concret'. Feminine form: abstraite.",
     example:"A: Ce concept est trop abstrait pour moi.\nB: Je vais te donner un exemple concret.",
     exampleSrc:"A: This concept is too abstract for me.\nB: I'll give you a concrete example.",
     funFact:"From Latin 'abstractus' meaning drawn away. Art became 'abstrait' in French around 1910."},

    {type:"teach", trg:"acerbe", src:"acerbic, harsh", pos:"adj", gender:null,
     note:"Adjective. Describes biting criticism or sour taste.",
     example:"A: Son commentaire \u00e9tait vraiment acerbe.\nB: Oui, il n'a \u00e9pargn\u00e9 personne.",
     exampleSrc:"A: His comment was really acerbic.\nB: Yes, he spared no one.",
     funFact:"From Latin 'acerbus' meaning bitter. Related to English 'acerbic' and 'exacerbate'."},

    {type:"teach", trg:"a fortiori", src:"all the more so", pos:"adv", gender:null,
     note:"Latin expression used in formal French. Means 'even more so'.",
     example:"A: Il fait froid dehors, a fortiori en montagne.\nB: Oui, il faut bien se couvrir.",
     exampleSrc:"A: It's cold outside, all the more so in the mountains.\nB: Yes, you need to dress warmly.",
     funFact:"One of many Latin phrases preserved in formal French. Literally means 'from the stronger argument'."},

    {type:"teach", trg:"une conjecture", src:"a conjecture", pos:"noun", gender:"f",
     note:"Feminine noun. An educated guess or hypothesis without proof.",
     example:"A: Ce n'est qu'une conjecture.\nB: Oui, il nous faut des preuves solides.",
     exampleSrc:"A: It's only a conjecture.\nB: Yes, we need solid evidence.",
     funFact:"Goldbach's conjecture, one of math's oldest unsolved problems, is 'la conjecture de Goldbach' in French."},

    {type:"mc",
     q:"Quel mot d\u00e9crit une critique mordante et blessante ?",
     opts:["acerbe","abstrait","anodin","ardent"],
     ans:"acerbe",
     hint:"Think of the Latin root 'acerbus' meaning bitter or sharp."},

    {type:"teach", trg:"anodin", src:"harmless, trivial", pos:"adj", gender:null,
     note:"Adjective. Describes something insignificant. Feminine: anodine.",
     example:"A: Ce n'est qu'un d\u00e9tail anodin.\nB: Peut-\u00eatre, mais tout compte.",
     exampleSrc:"A: It's just a trivial detail.\nB: Maybe, but everything counts.",
     funFact:"From Greek 'anodunos' meaning painless. Medical use came first, then the figurative sense."},

    {type:"teach", trg:"une affirmation", src:"an assertion, a statement", pos:"noun", gender:"f",
     note:"Feminine noun. A confident or forceful declaration.",
     example:"A: C'est une affirmation audacieuse.\nB: Je peux la justifier avec des donn\u00e9es.",
     exampleSrc:"A: That's a bold assertion.\nB: I can justify it with data.",
     funFact:"'Affirmation de soi' means self-assertion and is a key concept in French psychology."},

    {type:"teach", trg:"la concordance", src:"the concordance, agreement", pos:"noun", gender:"f",
     note:"Feminine noun. Harmony or agreement between things.",
     example:"A: Il y a une concordance entre les deux rapports.\nB: Oui, leurs conclusions sont identiques.",
     exampleSrc:"A: There is agreement between the two reports.\nB: Yes, their conclusions are identical.",
     funFact:"'La concordance des temps' is a crucial French grammar rule governing tense agreement."},

    {type:"fb",
     s:"Ce n'est qu'une {1}, il nous faut des preuves.",
     a:["conjecture"],
     opts:["conjecture","affirmation","concordance","aberration"],
     hint:"An educated guess made without solid proof or evidence.",
     sSrc:"It's only a {1}, we need proof."},

    {type:"teach", trg:"concr\u00e8tement", src:"concretely, in practice", pos:"adv", gender:null,
     note:"Adverb. Used to bring a discussion from theory to reality.",
     example:"A: Concr\u00e8tement, que proposez-vous ?\nB: Un plan en trois \u00e9tapes.",
     exampleSrc:"A: Concretely, what do you propose?\nB: A three-step plan.",
     funFact:"French speakers use this word to cut through vague talk and demand practical answers."},

    {type:"teach", trg:"ad hoc", src:"ad hoc, for this purpose", pos:"adj", gender:null,
     note:"Latin expression. Describes something created for a specific purpose.",
     example:"A: On a cr\u00e9\u00e9 un comit\u00e9 ad hoc.\nB: Bien, il faut une approche sur mesure.",
     exampleSrc:"A: We created an ad hoc committee.\nB: Good, we need a tailored approach.",
     funFact:"Latin for 'to this'. Used in French law, tech, and business. No accent needed."},

    {type:"teach", trg:"un adage", src:"an adage, a proverb", pos:"noun", gender:"m",
     note:"Masculine noun. A traditional saying expressing a general truth.",
     example:"A: Comme dit l'adage, mieux vaut tard que jamais.\nB: C'est bien vrai.",
     exampleSrc:"A: As the adage goes, better late than never.\nB: That's very true.",
     funFact:"From Latin 'adagium'. French literature is rich with adages, from La Fontaine to Voltaire."},

    {type:"teach", trg:"la clart\u00e9", src:"the clarity, the brightness", pos:"noun", gender:"f",
     note:"Feminine noun. Clearness of thought, expression, or light.",
     example:"A: J'admire la clart\u00e9 de son expos\u00e9.\nB: Oui, il explique tout simplement.",
     exampleSrc:"A: I admire the clarity of his presentation.\nB: Yes, he explains everything simply.",
     funFact:"Descartes prized 'clart\u00e9 et distinction' as the hallmarks of true knowledge."},

    {type:"mc",
     q:"Quel mot signifie 'sans importance, insignifiant' ?",
     opts:["anodin","abstrait","acerbe","ardent"],
     ans:"anodin",
     hint:"From Greek 'anodunos', originally a medical term meaning painless."},

    {type:"teach", trg:"l'appropriation", src:"the appropriation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of taking something for one's own.",
     example:"A: L'appropriation culturelle est un sujet d\u00e9licat.\nB: Oui, il faut en parler avec nuance.",
     exampleSrc:"A: Cultural appropriation is a delicate topic.\nB: Yes, we need to discuss it with nuance.",
     funFact:"Hot topic in modern French discourse. 'S'approprier' means to make something your own."},

    {type:"teach", trg:"l'alt\u00e9ration", src:"the alteration, the deterioration", pos:"noun", gender:"f",
     note:"Feminine noun. A change that damages or distorts something.",
     example:"A: L'alt\u00e9ration du climat est visible.\nB: Les temp\u00e9ratures montent chaque ann\u00e9e.",
     exampleSrc:"A: The alteration of the climate is visible.\nB: Temperatures rise every year.",
     funFact:"In music, 'alt\u00e9ration' means a sharp or flat that changes a note. Same root as English 'alter'."},

    {type:"teach", trg:"l'apog\u00e9e", src:"the peak, the zenith", pos:"noun", gender:"m",
     note:"Masculine noun despite ending in -\u00e9e. The highest point of something.",
     example:"A: L'empire a atteint son apog\u00e9e au XVIIe si\u00e8cle.\nB: Oui, c'\u00e9tait le Si\u00e8cle d'or.",
     exampleSrc:"A: The empire reached its peak in the 17th century.\nB: Yes, it was the Golden Age.",
     funFact:"Masculine despite its -\u00e9e ending. From Greek 'apogeion' meaning 'away from earth'. Originally an astronomy term."},

    {type:"teach", trg:"conscient", src:"conscious, aware", pos:"adj", gender:null,
     note:"Adjective. Aware of something. Feminine: consciente.",
     example:"A: Es-tu conscient du probl\u00e8me ?\nB: Oui, j'en suis parfaitement conscient.",
     exampleSrc:"A: Are you aware of the problem?\nB: Yes, I'm perfectly aware of it.",
     funFact:"'Prise de conscience' (awareness) is a powerful French expression used in social movements."},

    {type:"teach", trg:"atavique", src:"atavistic, ancestral", pos:"adj", gender:null,
     note:"Adjective. Relating to primitive instincts or ancestral traits.",
     example:"A: C'est une peur atavique.\nB: Oui, elle remonte \u00e0 nos anc\u00eatres.",
     exampleSrc:"A: It's an atavistic fear.\nB: Yes, it goes back to our ancestors.",
     funFact:"From Latin 'atavus' meaning great-grandfather's grandfather. Used for deeply rooted traits."},

    {type:"fb",
     s:"L'empire romain a atteint son {1} au IIe si\u00e8cle.",
     a:["apog\u00e9e"],
     opts:["apog\u00e9e","adage","clart\u00e9","alt\u00e9ration"],
     hint:"The highest point or peak of power. An astronomy term originally.",
     sSrc:"The Roman Empire reached its {1} in the 2nd century."},

    {type:"match", pairs:[
      {trg:"aberration", src:"aberration"},
      {trg:"conjecture", src:"conjecture"},
      {trg:"clart\u00e9", src:"clarity"},
      {trg:"apog\u00e9e", src:"peak, zenith"},
      {trg:"adage", src:"proverb"}
    ]},

    {type:"mc",
     q:"Que signifie 'a fortiori' ?",
     opts:["\u00c0 plus forte raison","Par cons\u00e9quent","En r\u00e9sum\u00e9","Au contraire"],
     ans:"\u00c0 plus forte raison",
     hint:"A Latin expression meaning 'from the stronger argument', used to emphasize a point."},

    {type:"fb",
     s:"\u00cates-vous {1} des risques de ce projet ?",
     a:["conscient"],
     opts:["conscient","abstrait","anodin","acerbe"],
     hint:"Being aware or mindful of something. Related to 'conscience'.",
     sSrc:"Are you {1} of the risks of this project?"}
  ]
};
export default LESSON_1;
