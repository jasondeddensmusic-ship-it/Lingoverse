// French B2 Gap Batch 9 — Lesson 2: Médias et Communication
// Media and communication vocabulary

const LESSON_2 = {id:"frv2_b2g9_l2", title:"Médias et Communication", icon:"📰", xp:15, board:true, steps:[
  {type:"intro", title:"Médias et Communication",
   desc:"Master vocabulary for discussing media, journalism, and digital communication. Essential for B2 debates about press freedom and information.",
   goals:["Learn 20 media and communication words","Discuss journalism and digital media","Express opinions about information sources"]},

  {type:"teach", trg:"la blogosphère", src:"blogosphere", pos:"noun", gender:"f",
   note:"Blog + -sphère (sphere).\nThe world of blogs and online opinion.",
   example:"A: La blogosphère a réagi immédiatement.\nB: Les articles ont été partagés des milliers de fois.",
   exampleSrc:"A: The blogosphere reacted immediately.\nB: The articles were shared thousands of times.",
   funFact:"French adopted 'blog' directly from English but gave it a feminine sphere: la blogosphère."},

  {type:"teach", trg:"le pigiste", src:"freelance journalist", pos:"noun", gender:"m",
   note:"From pige (piece rate for articles).\nFeminine: la pigiste. Paid per article.",
   example:"A: Il travaille comme pigiste pour trois journaux.\nB: C'est précaire mais il aime la liberté.",
   exampleSrc:"A: He works as a freelancer for three newspapers.\nB: It's precarious but he loves the freedom.",
   funFact:"Pige originally meant the measuring stick for typesetting. Pigistes were paid by the line."},

  {type:"teach", trg:"le confrère", src:"colleague (same profession)", pos:"noun", gender:"m",
   note:"Con- (with) + frère (brother).\nFeminine: la consoeur. Used among professionals.",
   example:"A: Mon confrère journaliste a confirmé l'information.\nB: C'est bien d'avoir une double source.",
   exampleSrc:"A: My journalist colleague confirmed the information.\nB: It's good to have a double source.",
   funFact:"Confrère implies belonging to the same profession, not just the same workplace."},

  {type:"teach", trg:"l'exclamation", src:"exclamation", pos:"noun", gender:"f",
   note:"From exclamer (to exclaim).\nUsed in grammar and rhetoric.",
   example:"A: Son discours était plein d'exclamations.\nB: Il parlait avec beaucoup de passion.",
   exampleSrc:"A: His speech was full of exclamations.\nB: He was speaking with great passion.",
   funFact:"French punctuation puts a space before exclamation marks: Bravo ! (not Bravo!)"},

  {type:"teach", trg:"le photomontage", src:"photomontage", pos:"noun", gender:"m",
   note:"Photo + montage (editing, assembly).\nCombining images to create a new one.",
   example:"A: Ce photomontage est très réaliste.\nB: On ne peut plus faire confiance aux images.",
   exampleSrc:"A: This photomontage is very realistic.\nB: We can no longer trust images.",
   funFact:"Montage is a French word that English borrowed. It means 'assembly' or 'editing'."},

  {type:"teach", trg:"le mixage", src:"mixing (audio/video)", pos:"noun", gender:"m",
   note:"From mixer (to mix).\nTechnical term for audio/video production.",
   example:"A: Le mixage du film a pris trois semaines.\nB: Le son est vraiment parfait maintenant.",
   exampleSrc:"A: The film's mixing took three weeks.\nB: The sound is really perfect now.",
   funFact:"French borrowed 'mixer' from English, then created mixage with the French -age suffix."},

  {type:"teach", trg:"l'omission", src:"omission", pos:"noun", gender:"f",
   note:"From omettre (to omit).\nA deliberate or accidental leaving out.",
   example:"A: L'omission de ce détail a changé le sens de l'article.\nB: Le journaliste a été critiqué.",
   exampleSrc:"A: The omission of this detail changed the article's meaning.\nB: The journalist was criticized.",
   funFact:"In French law, omission de porter secours (failure to assist) is a crime."},

  {type:"teach", trg:"l'intensification", src:"intensification", pos:"noun", gender:"f",
   note:"From intensifier (to intensify) + -ation.\nUsed for media coverage and conflicts.",
   example:"A: L'intensification de la couverture médiatique inquiète.\nB: Les réseaux sociaux amplifient tout.",
   exampleSrc:"A: The intensification of media coverage is worrying.\nB: Social media amplifies everything.",
   funFact:"All -ification nouns are feminine in French. This suffix is extremely productive."},

  {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
   note:"From diaboliser (to demonize).\nMaking someone or something appear evil.",
   example:"A: La diabolisation de l'adversaire est une tactique classique.\nB: C'est efficace mais malhonnête.",
   exampleSrc:"A: Demonizing the opponent is a classic tactic.\nB: It's effective but dishonest.",
   funFact:"From diable (devil). French political discourse frequently uses this term."},

  {type:"mc", q:"Un pigiste est un journaliste qui:", opts:["Dirige un journal","Travaille à plein temps","Est payé à l'article","Écrit des romans"], ans:"Est payé à l'article",
   hint:"The word comes from pige, meaning payment per piece written."},

  {type:"teach", trg:"la matérialisation", src:"materialization", pos:"noun", gender:"f",
   note:"From matérialiser (to materialize).\nMaking abstract ideas concrete or visible.",
   example:"A: Ce bâtiment est la matérialisation d'un rêve.\nB: L'architecte y a travaillé dix ans.",
   exampleSrc:"A: This building is the materialization of a dream.\nB: The architect worked on it for ten years.",
   funFact:"Matérialisation can also mean 'road markings' in French traffic vocabulary."},

  {type:"teach", trg:"l'idéalisation", src:"idealization", pos:"noun", gender:"f",
   note:"From idéaliser (to idealize).\nPresenting something better than reality.",
   example:"A: L'idéalisation du passé est une erreur courante.\nB: On oublie les difficultés de l'époque.",
   exampleSrc:"A: Idealizing the past is a common error.\nB: We forget the difficulties of that era.",
   funFact:"French philosophers like Rousseau were accused of idealizing the 'noble savage'."},

  {type:"teach", trg:"l'intégrisme", src:"fundamentalism", pos:"noun", gender:"m",
   note:"From intègre (upright) + -isme.\nOriginally Catholic, now broader usage.",
   example:"A: L'intégrisme menace la laïcité.\nB: Le dialogue est la meilleure réponse.",
   exampleSrc:"A: Fundamentalism threatens secularism.\nB: Dialogue is the best response.",
   funFact:"Originally described Catholic traditionalists opposed to Vatican II reforms in the 1960s."},

  {type:"teach", trg:"le modernisme", src:"modernism", pos:"noun", gender:"m",
   note:"From moderne + -isme.\nArtistic and intellectual movement embracing the new.",
   example:"A: Le modernisme a transformé l'architecture.\nB: Paris a été au centre de ce mouvement.",
   exampleSrc:"A: Modernism transformed architecture.\nB: Paris was at the center of this movement.",
   funFact:"Paris was the global capital of modernism in art, literature, and architecture."},

  {type:"fb", s:"La {1} de l'adversaire politique est une stratégie dangereuse.", a:["diabolisation"], opts:["diabolisation","idéalisation","matérialisation","intensification"],
   hint:"Making your opponent appear evil or demonic, rather than simply wrong.",
   sSrc:"The {1} of political opponents is a dangerous strategy."},

  {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
   note:"From expression + -isme.\nArt movement emphasizing emotional experience.",
   example:"A: L'expressionnisme allemand a influencé le cinéma.\nB: Les films de cette époque sont fascinants.",
   exampleSrc:"A: German expressionism influenced cinema.\nB: The films from that era are fascinating.",
   funFact:"French expressionnisme has four S's worth of pronunciation: ex-preh-syo-NEEZM."},

  {type:"teach", trg:"le particularisme", src:"particularism", pos:"noun", gender:"m",
   note:"From particulier (particular) + -isme.\nDefending local customs or special interests.",
   example:"A: Le particularisme régional est fort en Bretagne.\nB: Ils défendent leur culture et leur langue.",
   exampleSrc:"A: Regional particularism is strong in Brittany.\nB: They defend their culture and language.",
   funFact:"France's centralism has always clashed with regional particularisms, from Basque to Alsatian."},

  {type:"teach", trg:"partiellement", src:"partially", pos:"adv", gender:null,
   note:"From partiel (partial) + -ment.\nThe adverb form of partial.",
   example:"A: Le problème est partiellement résolu.\nB: Il reste encore du travail.",
   exampleSrc:"A: The problem is partially solved.\nB: There is still work to do.",
   funFact:"French adverbs in -ment correspond to English -ly. The pattern is remarkably consistent."},

  {type:"teach", trg:"passionnément", src:"passionately", pos:"adv", gender:null,
   note:"From passionné (passionate) + -ment.\nIntensely emotional manner.",
   example:"A: Elle a défendu sa cause passionnément.\nB: Son discours a ému tout le monde.",
   exampleSrc:"A: She defended her cause passionately.\nB: Her speech moved everyone.",
   funFact:"Famous from the daisy petal game: 'un peu, beaucoup, passionnément, pas du tout'."},

  {type:"mc", q:"L'omission de porter secours en France est:", opts:["Un droit fondamental","Un acte héroïque","Un délit puni par la loi","Une tradition culturelle"], ans:"Un délit puni par la loi",
   hint:"In French law, failing to help someone in danger is actually a criminal offense."},

  {type:"fb", s:"Le journaliste travaille {1} depuis son domicile.", a:["partiellement"], opts:["partiellement","passionnément","particulièrement","patiemment"],
   hint:"Not fully, but to some degree. The adverb means 'in part'.",
   sSrc:"The journalist works {1} from home."},

  {type:"match", pairs:[
    {trg:"le pigiste", src:"freelance journalist"},
    {trg:"le confrère", src:"colleague (profession)"},
    {trg:"le photomontage", src:"photomontage"},
    {trg:"le mixage", src:"audio mixing"}
  ]},

  {type:"mc", q:"Le mot 'confrère' implique que deux personnes:", opts:["Sont de la même famille","Travaillent dans la même profession","Habitent la même ville","Ont le même âge"], ans:"Travaillent dans la même profession",
   hint:"Con- means 'with' and frère means 'brother'. Professional brothers."},

  {type:"fb", s:"Elle a plaidé {1} pour les droits des femmes.", a:["passionnément"], opts:["passionnément","partiellement","patiemment","poliment"],
   hint:"With great emotion and intensity. From the word for passion.",
   sSrc:"She pleaded {1} for women's rights."},

  {type:"match", pairs:[
    {trg:"la diabolisation", src:"demonization"},
    {trg:"l'idéalisation", src:"idealization"},
    {trg:"l'intégrisme", src:"fundamentalism"},
    {trg:"le particularisme", src:"particularism"}
  ]}
]};

export default LESSON_2;
