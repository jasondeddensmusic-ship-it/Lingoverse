// L08: Adverbs of Place and Reference
const LESSON_8 = {
  id:"nlv2_b2g6_l8", title:"Verwijswoorden en Plaatsaanduidingen", icon:"\uD83D\uDCCD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Adverbs of Place and Reference",
     desc:"Master Dutch demonstrative adverbs that combine 'hier' (here) and 'daar' (there) with prepositions. These words are essential for formal and written Dutch.",
     goals:["Learn 10 reference adverbs and spatial terms","Use 'hier-' compounds in formal writing","Distinguish between hier-/daar- pairs"]},

    {type:"tip", title:"The 'hier-' and 'daar-' Adverb Families",
     text:"Dutch creates adverbs by combining 'hier' (here) or 'daar' (there) with prepositions:\n\nhieraan / daaraan = to this / to that\nhierboven / daarboven = above this / above that\nhierom / daarom = for this reason / for that reason\nhieruit / daaruit = from this / from that\n\nThese are formal alternatives to 'hier + preposition' constructions.",
     deepDive:{title:"When to use 'hier-' compounds",
      text:"In spoken Dutch, people say 'daar heb ik geen zin in' (I do not feel like that). In written Dutch, 'daarin heb ik geen zin' is preferred. The combined forms signal a higher register. For B2 learners, recognizing these in texts is essential, even if you use the split forms in conversation."}},

    {type:"teach", trg:"hieraan", src:"to this, about this", pos:"adv", gender:null,
     note:"Hier (here) + aan (to, on).\nRefers back to something just mentioned.",
     example:"A: Hieraan kun je zien dat het origineel is.\nB: Aan welk detail?\nA: De handtekening rechtsonder.\nB: Ah, ik zie het nu.",
     exampleSrc:"A: From this you can see that it is original.\nB: From which detail?\nA: The signature at the bottom right.\nB: Ah, I see it now.",
     funFact:"Dutch formal writing loves 'hieraan', 'hierbij', 'hiermee'. Government letters are full of these reference words."},

    {type:"teach", trg:"hierboven", src:"above this, up here", pos:"adv", gender:null,
     note:"Hier (here) + boven (above).\nUsed in texts to refer to something mentioned earlier.",
     example:"A: Zoals hierboven vermeld, is de deadline vrijdag.\nB: Dat had ik al gelezen.\nA: Mooi, dan weet je het.\nB: Ik ga er meteen aan werken.",
     exampleSrc:"A: As mentioned above, the deadline is Friday.\nB: I had already read that.\nA: Good, then you know.\nB: I will start working on it immediately.",
     funFact:"'Hierboven' is one of the most common words in Dutch legal and academic texts. You will encounter it in every official document."},

    {type:"teach", trg:"hierom", src:"for this reason, because of this", pos:"adv", gender:null,
     note:"Hier (here) + om (for, because of).\nSynonym of 'daarom' but more specific.",
     example:"A: Hierom heb ik besloten te vertrekken.\nB: Kun je het uitleggen?\nA: De werkomstandigheden waren slecht.\nB: Dat is begrijpelijk.",
     exampleSrc:"A: For this reason I have decided to leave.\nB: Can you explain?\nA: The working conditions were poor.\nB: That is understandable.",
     funFact:"'Hierom' points to a reason just given, while 'daarom' is more general. In practice, many Dutch speakers use them interchangeably."},

    {type:"teach", trg:"hieruit", src:"from this, out of this", pos:"adv", gender:null,
     note:"Hier (here) + uit (out of, from).\nUsed to draw conclusions from evidence.",
     example:"A: Hieruit blijkt dat de economie groeit.\nB: Welke cijfers bedoel je?\nA: De werkloosheid is gedaald.\nB: Dat is inderdaad positief.",
     exampleSrc:"A: From this it appears that the economy is growing.\nB: Which figures do you mean?\nA: Unemployment has decreased.\nB: That is indeed positive.",
     funFact:"'Hieruit blijkt' (from this it appears) is one of the most common phrases in Dutch research papers and news analysis."},

    {type:"mc",
     q:"Wat betekent 'hierboven' in een tekst?",
     opts:["Eerder in de tekst vermeld","Op de bovenste verdieping","In de lucht","Op het dak"],
     ans:"Eerder in de tekst vermeld",
     hint:"In written texts, 'hierboven' does not mean physically above. It refers to something mentioned previously."},

    {type:"teach", trg:"hogerop", src:"higher up, upward (in career)", pos:"adv", gender:null,
     note:"Hoger (higher) + op (up).\nUsed for career advancement or physical movement.",
     example:"A: Ze wil hogerop komen in het bedrijf.\nB: Dat is logisch, ze is ambitieus.\nA: Volgend jaar wordt ze manager.\nB: Ze verdient die promotie.",
     exampleSrc:"A: She wants to move higher up in the company.\nB: That makes sense, she is ambitious.\nA: Next year she will become manager.\nB: She deserves that promotion.",
     funFact:"The Dutch expression 'hogerop willen' (wanting to go higher) is sometimes used critically, implying someone is overly ambitious."},

    {type:"teach", trg:"het groepsverband", src:"the group context, as part of a group", pos:"noun", gender:"n",
     note:"Compound: groep (group) + verband (context, connection).\nOften used with 'in': 'in groepsverband'.",
     example:"A: We werken in groepsverband aan het project.\nB: Hoeveel mensen in de groep?\nA: Vijf, inclusief de projectleider.\nB: Dat is een goed aantal.",
     exampleSrc:"A: We work as a group on the project.\nB: How many people in the group?\nA: Five, including the project leader.\nB: That is a good number.",
     funFact:"The Dutch love working 'in groepsverband'. Group consensus (polderen) is deeply embedded in Dutch organizational culture."},

    {type:"teach", trg:"de dwarsverbinding", src:"the cross-connection, the lateral link", pos:"noun", gender:"c",
     note:"Compound: dwars (across) + verbinding (connection).\nUsed literally (roads) and figuratively (ideas).",
     example:"A: Er moet een dwarsverbinding komen tussen de twee afdelingen.\nB: Om beter samen te werken?\nA: Ja, ze communiceren nu te weinig.\nB: Een gezamenlijk overleg zou helpen.",
     exampleSrc:"A: There needs to be a cross-connection between the two departments.\nB: To collaborate better?\nA: Yes, they communicate too little now.\nB: A joint meeting would help.",
     funFact:"Dutch urban planning uses 'dwarsverbinding' for connecting separate neighborhoods. The Dutch excel at creating linked infrastructure."},

    {type:"fb",
     s:"{1} blijkt dat het plan niet haalbaar is.",
     a:["Hieruit"],
     opts:["Hieruit","Hierom","Hieraan","Hierboven"],
     hint:"'From this' it becomes clear. The adverb that draws a conclusion from the preceding information.",
     sSrc:"{1} it appears that the plan is not feasible."},

    {type:"teach", trg:"het gespreksonderwerp", src:"the topic of conversation", pos:"noun", gender:"n",
     note:"Compound: gesprek (conversation) + onderwerp (subject).\nA formal word for what people talk about.",
     example:"A: Het weer is altijd een populair gespreksonderwerp.\nB: Typisch Nederlands!\nA: Maar ook voetbal en politiek.\nB: De drie veilige onderwerpen.",
     exampleSrc:"A: The weather is always a popular topic of conversation.\nB: Typically Dutch!\nA: But also football and politics.\nB: The three safe topics.",
     funFact:"The Dutch are known for their 'koetjes en kalfjes' (small talk), literally 'little cows and calves', which covers weather and weekend plans."},

    {type:"teach", trg:"het gezegde", src:"the saying, the proverb", pos:"noun", gender:"n",
     note:"From 'zeggen' (to say). Literally 'the said thing'.\nA fixed expression or proverb.",
     example:"A: Ken je het gezegde 'Wie het laatst lacht, lacht het best'?\nB: Ja, dat is een bekend spreekwoord.\nA: Het betekent dat geduld loont.\nB: Een wijs gezegde.",
     exampleSrc:"A: Do you know the saying 'He who laughs last, laughs best'?\nB: Yes, that is a well-known proverb.\nA: It means that patience pays off.\nB: A wise saying.",
     funFact:"Dutch has hundreds of unique gezegden. 'Doe maar normaal, dan doe je al gek genoeg' (just act normal, that is crazy enough) is the most Dutch of all."},

    {type:"mc",
     q:"Wat betekent 'in groepsverband'?",
     opts:["Op afstand","Als onderdeel van een groep, samen","Alleen en onafhankelijk","In een groot gebouw"],
     ans:"Als onderdeel van een groep, samen",
     hint:"Compound noun: collective unit + verband (binding/context). Describes doing something collectively, not solo."},

    {type:"match", pairs:[
      {trg:"hieraan", src:"to this"},
      {trg:"hierboven", src:"above this"},
      {trg:"hierom", src:"for this reason"},
      {trg:"hieruit", src:"from this"}
    ]},

    {type:"fb",
     s:"Zoals {1} vermeld, moet het rapport voor vrijdag af zijn.",
     a:["hierboven"],
     opts:["hierboven","hieruit","hierom","hieraan"],
     hint:"As mentioned earlier in the text. The adverb that refers to something stated previously, literally 'above here'.",
     sSrc:"As mentioned {1}, the report must be finished by Friday."},

    {type:"mc",
     q:"Wat is een 'gezegde'?",
     opts:["Een soort gedicht","Een officieel document","Een spreekwoord of vaste uitdrukking","Een grammaticale term voor het werkwoord"],
     ans:"Een spreekwoord of vaste uitdrukking",
     hint:"From the verb 'zeggen' (to say). It refers to a well-known expression passed down through generations."}
  ]
};
export default LESSON_8;
