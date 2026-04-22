const LESSON_1 = {
  id:"frv2_b2g3_l1", title:"L'accumulation du savoir", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'accumulation du savoir",
     desc:"Explore vocabulary related to academic and intellectual life. Learn words for knowledge gathering, certification, and scholarly pursuit.",
     goals:["Learn 18 B2 academic and intellectual words","Use formal register for scholarly topics","Express ideas about education and expertise"]},

    {type:"teach", trg:"une accumulation", src:"an accumulation", pos:"noun", gender:"f",
     note:"Feminine noun. A gradual gathering or build-up of something.",
     example:"A: L'accumulation de preuves est impressionnante.\nB: Oui, le dossier est solide maintenant.",
     exampleSrc:"A: The accumulation of evidence is impressive.\nB: Yes, the case file is solid now.",
     funFact:"From Latin 'accumulare' meaning to heap up. French scientists use it for everything from data to snow."},

    {type:"teach", trg:"académique", src:"academic", pos:"adj", gender:null,
     note:"Adjective. Relating to education or scholarly standards.",
     example:"A: Son parcours académique est brillant.\nB: Oui, elle a publié dans les meilleures revues.",
     exampleSrc:"A: Her academic career is brilliant.\nB: Yes, she has published in the best journals.",
     funFact:"The Academie francaise, founded in 1635, still regulates the French language today."},

    {type:"teach", trg:"certifié", src:"certified", pos:"adj", gender:null,
     note:"Adjective. Officially attested or guaranteed. Feminine: certifiee.",
     example:"A: Ce produit est certifié bio.\nB: Alors on peut l'acheter en confiance.",
     exampleSrc:"A: This product is certified organic.\nB: So we can buy it with confidence.",
     funFact:"A 'professeur certifie' in France passed the CAPES exam, while an 'agrege' passed the harder Agregation."},

    {type:"teach", trg:"agrégé", src:"holder of the agregation", pos:"adj", gender:null,
     note:"Adjective. Having passed France's top teaching exam. Feminine: agregee.",
     example:"A: Mon professeur de maths est agrégé.\nB: Impressionnant, c'est un concours très difficile.",
     exampleSrc:"A: My math teacher holds the agregation.\nB: Impressive, it's a very difficult competition.",
     funFact:"The Agregation has existed since 1766. Pass rates hover around 10-15%, making it one of France's hardest exams."},

    {type:"teach", trg:"un abonné", src:"a subscriber", pos:"noun", gender:"m",
     note:"Masculine noun. A person who subscribes to a service or publication.",
     example:"A: Combien d'abonnés a ce journal ?\nB: Plus de deux millions en ligne.",
     exampleSrc:"A: How many subscribers does this newspaper have?\nB: More than two million online.",
     funFact:"On social media, French speakers say 'abonne-toi' (subscribe!) just like English YouTubers say 'subscribe'."},

    {type:"mc",
     q:"Quel mot décrit quelqu'un qui a réussi le concours d'enseignement le plus difficile de France ?",
     opts:["agrégé","certifié","abonné","académique"],
     ans:"agrégé",
     hint:"This exam has existed since 1766 and has pass rates around 10-15%."},

    {type:"teach", trg:"approfondi", src:"in-depth, thorough", pos:"adj", gender:null,
     note:"Adjective. Describes deep, detailed analysis. Feminine: approfondie.",
     example:"A: Nous avons fait une étude approfondie du marché.\nB: Quels sont les résultats ?",
     exampleSrc:"A: We conducted an in-depth market study.\nB: What are the results?",
     funFact:"Built from 'approfondir' (to deepen), itself from 'profond' (deep). French loves turning verbs into adjectives this way."},

    {type:"teach", trg:"une encyclopédie", src:"an encyclopedia", pos:"noun", gender:"f",
     note:"Feminine noun. A comprehensive reference work covering all knowledge.",
     example:"A: J'ai trouvé la réponse dans une encyclopédie.\nB: Laquelle, Larousse ou Universalis ?",
     exampleSrc:"A: I found the answer in an encyclopedia.\nB: Which one, Larousse or Universalis?",
     funFact:"Diderot's 'Encyclopedie' (1751-1772) was a landmark of the Enlightenment and helped spark the French Revolution."},

    {type:"teach", trg:"une classification", src:"a classification", pos:"noun", gender:"f",
     note:"Feminine noun. The systematic arrangement of things into categories.",
     example:"A: La classification des espèces a changé.\nB: Oui, grâce aux analyses génétiques.",
     exampleSrc:"A: The classification of species has changed.\nB: Yes, thanks to genetic analyses.",
     funFact:"France's own system of wine classification dates back to 1855 and is still used for Bordeaux wines today."},

    {type:"fb",
     s:"L'{1} de données nous permettra de tirer des conclusions.",
     a:["accumulation"],
     opts:["accumulation","classification","encyclopédie","affirmation"],
     hint:"Think of a gradual gathering or build-up of something over time.",
     sSrc:"The {1} of data will allow us to draw conclusions."},

    {type:"teach", trg:"une exactitude", src:"exactness, precision", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being accurate and precise.",
     example:"A: L'exactitude de ces mesures est cruciale.\nB: Oui, la moindre erreur serait grave.",
     exampleSrc:"A: The precision of these measurements is crucial.\nB: Yes, the slightest error would be serious.",
     funFact:"Voltaire said 'L'exactitude est la politesse des rois' (punctuality is the politeness of kings), often misattributed to Louis XVIII."},

    {type:"teach", trg:"expliciter", src:"to make explicit, to clarify", pos:"verb", gender:null,
     note:"Verb. To spell out what is implied or unclear.",
     example:"A: Pouvez-vous expliciter votre position ?\nB: Bien sûr, je vais préciser mes arguments.",
     exampleSrc:"A: Can you make your position explicit?\nB: Of course, I'll clarify my arguments.",
     funFact:"Unlike 'expliquer' which means to explain, 'expliciter' specifically means to make something implicit become explicit."},

    {type:"teach", trg:"une appropriation", src:"an appropriation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of taking something for one's own use.",
     example:"A: L'appropriation culturelle fait débat.\nB: C'est un sujet très sensible en effet.",
     exampleSrc:"A: Cultural appropriation is being debated.\nB: It's indeed a very sensitive topic.",
     funFact:"In French law, 'appropriation' can mean both lawful acquisition and unlawful seizure, depending on context."},

    {type:"mc",
     q:"Quel mot signifie rendre explicite ce qui est implicite ?",
     opts:["accumuler","expliciter","certifier","approfondir"],
     ans:"expliciter",
     hint:"This verb is specifically about spelling out what is only implied, not about explaining."},

    {type:"teach", trg:"concrètement", src:"concretely, in practice", pos:"adv", gender:null,
     note:"Adverb. Used to move from theory to practical reality.",
     example:"A: Concrètement, comment va-t-on procéder ?\nB: On commence par une phase de test.",
     exampleSrc:"A: Concretely, how are we going to proceed?\nB: We start with a testing phase.",
     funFact:"French speakers use 'concretement' as a discourse marker to signal they want practical answers, much like 'in practice' in English."},

    {type:"teach", trg:"assurément", src:"assuredly, certainly", pos:"adv", gender:null,
     note:"Adverb. A formal way to express certainty or agreement.",
     example:"A: C'est le meilleur candidat ?\nB: Assurément, personne n'est plus qualifié.",
     exampleSrc:"A: Is he the best candidate?\nB: Assuredly, no one is more qualified.",
     funFact:"More literary than 'certainement'. You hear it in debates, courtrooms, and formal speeches. Rarely in casual conversation."},

    {type:"teach", trg:"conformément", src:"in accordance with", pos:"adv", gender:null,
     note:"Adverb. Following rules, laws, or expectations precisely.",
     example:"A: Conformément au règlement, vous devez signer.\nB: D'accord, donnez-moi le formulaire.",
     exampleSrc:"A: In accordance with the regulations, you must sign.\nB: Alright, give me the form.",
     funFact:"A staple of French bureaucratic language. You will see 'conformement a' on nearly every official French document."},

    {type:"fb",
     s:"{1}, comment comptez-vous appliquer cette théorie ?",
     a:["Concrètement"],
     opts:["Concrètement","Assurément","Conformément","Académiquement"],
     hint:"This adverb signals a shift from theory to practical application.",
     sSrc:"{1}, how do you plan to apply this theory?"},

    {type:"teach", trg:"un alphabet", src:"an alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. A set of letters used in a writing system.",
     example:"A: L'alphabet cyrillique est différent du nôtre.\nB: Oui, il a trente-trois lettres.",
     exampleSrc:"A: The Cyrillic alphabet is different from ours.\nB: Yes, it has thirty-three letters.",
     funFact:"The word comes from Greek 'alpha' and 'beta', the first two Greek letters. French has 26 letters plus accented forms."},

    {type:"teach", trg:"alphabétique", src:"alphabetical", pos:"adj", gender:null,
     note:"Adjective. Arranged in the order of the alphabet.",
     example:"A: Classez les dossiers par ordre alphabétique.\nB: C'est déjà fait, de A à Z.",
     exampleSrc:"A: Arrange the files in alphabetical order.\nB: It's already done, from A to Z.",
     funFact:"French alphabetical order treats accented letters the same as unaccented ones, unlike some Nordic languages."},

    {type:"match", pairs:[
      {trg:"accumulation", src:"accumulation"},
      {trg:"encyclopédie", src:"encyclopedia"},
      {trg:"classification", src:"classification"},
      {trg:"exactitude", src:"precision"},
      {trg:"conformément", src:"in accordance with"}
    ]},

    {type:"mc",
     q:"Comment dit-on 'in-depth' quand on parle d'une étude détaillée ?",
     opts:["académique","certifié","approfondi","alphabétique"],
     ans:"approfondi",
     hint:"This adjective comes from the verb meaning to deepen. Think of going deep into analysis."},

    {type:"fb",
     s:"{1} à la loi, tous les citoyens doivent payer leurs impôts.",
     a:["Conformément"],
     opts:["Conformément","Concrètement","Assurément","Explicitement"],
     hint:"This adverb means following rules or laws precisely. Common in official documents.",
     sSrc:"{1} with the law, all citizens must pay their taxes."}
  ]
};
export default LESSON_1;
