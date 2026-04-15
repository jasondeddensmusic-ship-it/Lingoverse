const LESSON_14 = {
  id:"frv2_b2g2_l14", title:"Famille et generations", icon:"\u{1F46A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Famille et generations",
     desc:"Master vocabulary for discussing family relationships, generations, and social bonds. From great-grandparents to adopted children.",
     goals:["Learn 20 family and generation terms","Discuss family dynamics in French","Describe social relationships and bonds"]},

    {type:"teach", trg:"un arriere-grand-parent", src:"a great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. A grandparent's parent. Feminine: une arriere-grand-mere.",
     example:"A: Mon arriere-grand-pere a vecu cent ans.\nB: Quelle chance de l'avoir connu !",
     exampleSrc:"A: My great-grandfather lived to be a hundred.\nB: How lucky to have known him!",
     funFact:"France has strong generational ties. Sunday lunch with grands-parents is still a sacred tradition."},

    {type:"teach", trg:"adopte", src:"adopted", pos:"adj", gender:null,
     note:"Adjective. Having been legally taken into a family. Feminine: adoptee.",
     example:"A: Mon fils adopte vient du Vietnam.\nB: Il est arrive a l'age de deux ans.",
     exampleSrc:"A: My adopted son is from Vietnam.\nB: He arrived at the age of two.",
     funFact:"France has one of Europe's highest international adoption rates. The process takes about 2-4 years."},

    {type:"teach", trg:"les appartenances", src:"the belongings, the affiliations", pos:"noun", gender:"f",
     note:"Feminine plural noun. Group memberships or the things one belongs to.",
     example:"A: Nos appartenances culturelles nous definissent.\nB: Mais elles ne doivent pas nous limiter.",
     exampleSrc:"A: Our cultural affiliations define us.\nB: But they shouldn't limit us.",
     funFact:"'Sentiment d'appartenance' (sense of belonging) is a key concept in French sociology."},

    {type:"teach", trg:"un assiste", src:"a welfare dependent", pos:"noun", gender:"m",
     note:"Masculine noun. A person receiving state assistance. Feminine: une assistee. Can be pejorative.",
     example:"A: Le debat sur les assistes est tres vif en France.\nB: Il faut distinguer aide et assistanat.",
     exampleSrc:"A: The debate about welfare dependents is very heated in France.\nB: We must distinguish aid from dependency.",
     funFact:"'Assiste' can be pejorative. 'Assistanat' (welfare dependency) is a politically charged term in France."},

    {type:"teach", trg:"l'algerien", src:"Algerian", pos:"adj", gender:null,
     note:"Adjective. From or relating to Algeria. Also used as a noun. Feminine: algerienne.",
     example:"A: La communaute algerienne en France est tres importante.\nB: Les liens entre les deux pays sont profonds.",
     exampleSrc:"A: The Algerian community in France is very large.\nB: The ties between the two countries are deep.",
     funFact:"About 2 million people of Algerian origin live in France. The shared history is complex and emotional."},

    {type:"mc",
     q:"Comment appelle-t-on le parent d'un grand-parent ?",
     opts:["un arriere-grand-parent","un grand-oncle","un beau-parent","un parrain"],
     ans:"un arriere-grand-parent",
     hint:"Going back one more generation beyond grandparents. 'A...' means 'back' or 'behind'."},

    {type:"teach", trg:"le defunt", src:"the deceased", pos:"noun", gender:"m",
     note:"Masculine noun. A dead person, used respectfully. Feminine: la defunte.",
     example:"A: Le defunt laisse derriere lui trois enfants.\nB: Nos pensees vont a sa famille.",
     exampleSrc:"A: The deceased leaves behind three children.\nB: Our thoughts go to his family.",
     funFact:"From Latin 'defunctus' (one who has completed). A formal, respectful way to refer to the dead."},

    {type:"teach", trg:"les demeles", src:"the disputes, the troubles", pos:"noun", gender:"m",
     note:"Masculine plural noun. Conflicts or legal troubles with someone.",
     example:"A: Il a eu des demeles avec la justice.\nB: Son avocat s'en occupe.",
     exampleSrc:"A: He's had run-ins with the law.\nB: His lawyer is handling it.",
     funFact:"From 'demeler' (to untangle). 'Avoir des demeles avec' means to have conflicts or legal issues with."},

    {type:"teach", trg:"le confrere", src:"the colleague (professional)", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow professional. Feminine: une consoeur.",
     example:"A: Mon confrere medecin recommande ce traitement.\nB: Je fais confiance a son expertise.",
     exampleSrc:"A: My medical colleague recommends this treatment.\nB: I trust his expertise.",
     funFact:"Used among doctors, lawyers, and journalists. More elevated than 'collegue'. Implies shared profession."},

    {type:"teach", trg:"le curieux", src:"the curious person, the onlooker", pos:"noun", gender:"m",
     note:"Masculine noun. A nosy or curious person. Feminine: une curieuse.",
     example:"A: Les curieux se sont attroupes devant l'accident.\nB: La police leur a demande de circuler.",
     exampleSrc:"A: Onlookers gathered around the accident.\nB: The police asked them to move along.",
     funFact:"'Cabinet de curiosites' was a Renaissance collection room. Today, 'curieux' often implies nosiness."},

    {type:"fb",
     s:"Il a eu des {1} avec l'administration fiscale l'annee derniere.",
     a:["demeles"],
     opts:["demeles","appartenances","defunts","curieux"],
     hint:"Conflicts or legal troubles with an authority. Think of tangled problems to 'untangle'.",
     sSrc:"He had {1} with the tax authorities last year."},

    {type:"teach", trg:"le dixieme", src:"the tenth, a tenth part", pos:"noun", gender:"m",
     note:"Masculine noun. The ordinal number ten or one-tenth.",
     example:"A: C'est le dixieme candidat que nous recevons.\nB: Et toujours pas le bon profil.",
     exampleSrc:"A: This is the tenth candidate we've interviewed.\nB: And still not the right profile.",
     funFact:"French fractions are easy: un dixieme (1/10), un centieme (1/100). 'Dime' in English shares the root."},

    {type:"teach", trg:"le desherite", src:"the underprivileged person", pos:"noun", gender:"m",
     note:"Masculine noun. A person who has been disinherited or is disadvantaged.",
     example:"A: Les desherites meritent notre solidarite.\nB: Personne ne choisit de naitre pauvre.",
     exampleSrc:"A: The underprivileged deserve our solidarity.\nB: Nobody chooses to be born poor.",
     funFact:"From 'des-' (un-) + 'heriter' (to inherit). Used in social and political discourse about inequality."},

    {type:"teach", trg:"le compatriote", src:"the compatriot", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow citizen of the same country. Feminine: une compatriote.",
     example:"A: En voyage, on croise parfois des compatriotes.\nB: Ca fait du bien de parler sa langue.",
     exampleSrc:"A: When traveling, you sometimes run into compatriots.\nB: It feels good to speak your own language.",
     funFact:"De Gaulle's famous speeches always began with 'mes chers compatriotes'. A patriotic, warm word."},

    {type:"mc",
     q:"Comment designe-t-on respectueusement une personne decedee ?",
     opts:["le defunt","le desherite","le demele","le curieux"],
     ans:"le defunt",
     hint:"A formal, respectful word for a dead person. From Latin 'one who has completed'."},

    {type:"teach", trg:"l'affaire", src:"the affair, the business, the case", pos:"noun", gender:"f",
     note:"Feminine noun. A matter, a business deal, or a scandal.",
     example:"A: Cette affaire a secoue tout le pays.\nB: Le proces durera plusieurs mois.",
     exampleSrc:"A: This affair shook the entire country.\nB: The trial will last several months.",
     funFact:"'L'Affaire Dreyfus' (1894) divided France and defined French politics for a generation."},

    {type:"teach", trg:"l'assomption", src:"the assumption, the Assumption", pos:"noun", gender:"f",
     note:"Feminine noun. A supposition, or the Catholic feast of the Assumption (Aug 15).",
     example:"A: Le quinze aout, c'est l'Assomption.\nB: C'est un jour ferie en France.",
     exampleSrc:"A: August fifteenth is the Assumption.\nB: It's a public holiday in France.",
     funFact:"The Assumption is one of France's most important holidays. Paris was consecrated to the Virgin Mary in 1638."},

    {type:"teach", trg:"accommoder", src:"to accommodate, to prepare (food)", pos:"verb", gender:null,
     note:"Verb. To adapt to a situation, or to prepare and season food.",
     example:"A: Comment accommoder les restes d'hier soir ?\nB: Fais-en une omelette, c'est simple.",
     exampleSrc:"A: How should we use up last night's leftovers?\nB: Make an omelet, it's simple.",
     funFact:"In cooking, 'accommoder' means to prepare food creatively. 'S'accommoder de' means to put up with."},

    {type:"teach", trg:"approfondir", src:"to deepen, to explore further", pos:"verb", gender:null,
     note:"Verb. To examine in greater depth or detail.",
     example:"A: Il faut approfondir cette question.\nB: Je suis d'accord, elle merite plus d'attention.",
     exampleSrc:"A: We need to explore this question further.\nB: I agree, it deserves more attention.",
     funFact:"From 'profond' (deep). French academic culture values 'approfondir' above surface-level understanding."},

    {type:"fb",
     s:"Le 15 aout, la France celebre l'{1}, un jour ferie important.",
     a:["Assomption"],
     opts:["Assomption","affaire","appartenance","accommodation"],
     hint:"A Catholic feast day on August 15th celebrating the Virgin Mary.",
     sSrc:"On August 15th, France celebrates the {1}, an important public holiday."},

    {type:"match", pairs:[
      {trg:"defunt", src:"deceased"},
      {trg:"adopte", src:"adopted"},
      {trg:"desherite", src:"underprivileged"},
      {trg:"assomption", src:"Assumption"},
      {trg:"demeles", src:"disputes"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'preparer des restes de facon creative' ?",
     opts:["accommoder","approfondir","adopter","affecter"],
     ans:"accommoder",
     hint:"To prepare food in a creative way, especially leftovers. Also means to adapt."},

    {type:"fb",
     s:"Nos {1} culturelles sont ce qui fait notre richesse.",
     a:["appartenances"],
     opts:["appartenances","affaires","assomptions","accommodations"],
     hint:"The groups, cultures, or communities we belong to. Think of 'appartenir' (to belong).",
     sSrc:"Our cultural {1} are what makes us rich."}
  ]
};
export default LESSON_14;
