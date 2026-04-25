const LESSON_17 = {
  id:"frv2_b2gap_l17", title:"Expressions et nuances", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et nuances",
     desc:"Adverbial expressions and nuanced phrases that add precision and flavor to your French. Essential for B2 fluency.",
     goals:["Learn 20 adverbial expressions and nuances","Add precision to your French speech","Master register-appropriate expressions"]},

    {type:"teach", trg:"bel et bien", src:"well and truly, indeed", pos:"adv", gender:null,
     note:"Adverbial expression. Emphasizes that something really did happen.",
     example:"A: Il a bel et bien demissionne.\nB: J'avais du mal a y croire.",
     exampleSrc:"A: He well and truly resigned.\nB: I had trouble believing it.",
     funFact:"'Bel' is the old form of 'beau' before a vowel. This archaic form survives only in this expression."},

    {type:"teach", trg:"assez peu", src:"rather little, not much", pos:"adv", gender:null,
     note:"Adverbial expression. Means 'not very much'. Understated and elegant.",
     example:"A: Je connais assez peu cette region.\nB: On pourrait la visiter ensemble.",
     exampleSrc:"A: I know this region rather little.\nB: We could visit it together.",
     funFact:"The French love of understatement: 'assez peu' sounds more refined than 'pas beaucoup'."},

    {type:"teach", trg:"dangereusement", src:"dangerously", pos:"adv", gender:null,
     note:"Adverb. In a way that involves danger or risk.",
     example:"A: Il conduit dangereusement vite.\nB: Un jour il aura un accident.",
     exampleSrc:"A: He drives dangerously fast.\nB: One day he'll have an accident.",
     funFact:"French adverbs in '-ment' come from Latin 'mente' (mind). 'Dangereusement' = 'with a dangerous mind'."},

    {type:"teach", trg:"drastiquement", src:"drastically", pos:"adv", gender:null,
     note:"Adverb. In a severe or extreme manner.",
     example:"A: Les prix ont augmente drastiquement.\nB: C'est difficile pour les familles.",
     exampleSrc:"A: Prices have increased drastically.\nB: It's difficult for families.",
     funFact:"Some French purists dislike this word as an anglicism, preferring 'radicalement'. But it's widely used."},

    {type:"teach", trg:"au pr\u00e9alable", src:"beforehand, first of all", pos:"adv", gender:null,
     note:"Adverbial expression. Something that must be done before anything else.",
     example:"A: Il faut obtenir une autorisation au prealable.\nB: A qui doit-on s'adresser ?",
     exampleSrc:"A: You need to get authorization beforehand.\nB: Who should we contact?",
     funFact:"From Latin 'praeambulus' (walking before). 'Prealable' is the adjective, 'au prealable' the adverb."},

    {type:"mc",
     q:"Quelle expression signifie 'vraiment, effectivement' ?",
     opts:["bel et bien","assez peu","au pr\u00e9alable","dangereusement"],
     ans:"bel et bien",
     hint:"This three-word expression preserves the archaic masculine form of 'beau' (beautiful), which only survives in fixed phrases."},

    {type:"teach", trg:"assur\u00e9ment", src:"assuredly, certainly", pos:"adv", gender:null,
     note:"Adverb. Used to express strong certainty. Formal register.",
     example:"A: Est-ce la bonne decision ?\nB: Assurement, je n'ai aucun doute.",
     exampleSrc:"A: Is this the right decision?\nB: Assuredly, I have no doubt.",
     funFact:"More literary than 'certainement'. Voltaire and Montesquieu used it frequently in their writings."},

    {type:"teach", trg:"distraitement", src:"absent-mindedly, distractedly", pos:"adv", gender:null,
     note:"Adverb. In an inattentive, absent-minded way.",
     example:"A: Elle regardait distraitement par la fenetre.\nB: A quoi pensait-elle ?",
     exampleSrc:"A: She was gazing absent-mindedly out the window.\nB: What was she thinking about?",
     funFact:"From 'distrait' (absent-minded). A wonderful word for describing those lost-in-thought moments."},

    {type:"teach", trg:"du premier coup", src:"on the first try", pos:"adv", gender:null,
     note:"Adverbial expression. Succeeding immediately without retrying.",
     example:"A: Elle a reussi son examen du premier coup.\nB: Impressionnant, c'est un concours difficile.",
     exampleSrc:"A: She passed her exam on the first try.\nB: Impressive, it's a difficult competitive exam.",
     funFact:"'Coup' has dozens of expressions: 'du premier coup', 'coup de foudre', 'coup d'etat', 'coup de grace'."},

    {type:"fb",
     s:"Il faut obtenir un permis {1} avant de commencer les travaux.",
     a:["au pr\u00e9alable"],
     opts:["au pr\u00e9alable","du premier coup","bel et bien","assur\u00e9ment"],
     hint:"Before anything else, first of all. From Latin meaning 'walking before'.",
     sSrc:"You need to get a permit {1} before starting the construction work."},

    {type:"teach", trg:"de c\u00f4t\u00e9", src:"aside, to one side", pos:"adv", gender:null,
     note:"Adverbial expression. To the side, or saved/put aside.",
     example:"A: J'ai mis un peu d'argent de cote.\nB: C'est sage, on ne sait jamais.",
     exampleSrc:"A: I've put a little money aside.\nB: That's wise, you never know.",
     funFact:"'Mettre de cote' = to save. 'Laisser de cote' = to leave out. 'Regarder de cote' = to look sideways."},

    {type:"teach", trg:"dans son ensemble", src:"as a whole, overall", pos:"adv", gender:null,
     note:"Adverbial expression. Considering something in its totality.",
     example:"A: Dans son ensemble, le projet est reussi.\nB: Il y a quelques details a regler.",
     exampleSrc:"A: As a whole, the project is a success.\nB: There are a few details to sort out.",
     funFact:"'Ensemble' alone means 'together'. Adding 'dans son' shifts it to 'as a whole'. Very formal."},

    {type:"teach", trg:"depuis belle lurette", src:"for ages, for a long time", pos:"adv", gender:null,
     note:"Adverbial expression. For a very long time. Informal and charming.",
     example:"A: Ca fait belle lurette qu'on ne s'est pas vus !\nB: Oui, au moins trois ans !",
     exampleSrc:"A: We haven't seen each other in ages!\nB: Yes, at least three years!",
     funFact:"'Lurette' is a corruption of 'heurette' (little hour). So 'belle lurette' means 'a beautiful little hour', ironically used for very long times."},

    {type:"mc",
     q:"Quelle expression signifie 'depuis tres longtemps' de facon familiere ?",
     opts:["assur\u00e9ment","depuis belle lurette","du premier coup","dans son ensemble"],
     ans:"depuis belle lurette",
     hint:"The expression contains a diminutive noun from 'heurette' (little hour), used ironically for very long stretches."},

    {type:"teach", trg:"de haut en bas", src:"from top to bottom", pos:"adv", gender:null,
     note:"Adverbial expression. Thoroughly, or looking someone up and down.",
     example:"A: Elle m'a regarde de haut en bas.\nB: Quelle impolitesse !",
     exampleSrc:"A: She looked me up and down.\nB: How rude!",
     funFact:"'Regarder de haut en bas' implies judgment and condescension. Very French body language."},

    {type:"teach", trg:"conform\u00e9ment", src:"in accordance with", pos:"adv", gender:null,
     note:"Adverb. In compliance with rules or standards. Formal register.",
     example:"A: Nous agissons conformement a la loi.\nB: Toutes les procedures sont respectees.",
     exampleSrc:"A: We are acting in accordance with the law.\nB: All procedures are being followed.",
     funFact:"From 'conforme' (conforming). Essential in legal and administrative French. Very formal tone."},

    {type:"teach", trg:"concr\u00e8tement", src:"concretely, in practice", pos:"adv", gender:null,
     note:"Adverb. Used to move from theory to practical reality.",
     example:"A: Concretement, comment fait-on ?\nB: Voici les trois etapes.",
     exampleSrc:"A: Concretely, how do we do it?\nB: Here are the three steps.",
     funFact:"The French love asking 'Concretement?' in meetings. It means 'get to the point, what exactly do we do?'."},

    {type:"fb",
     s:"Elle a reussi le concours {1}, sans aucune preparation speciale.",
     a:["du premier coup"],
     opts:["du premier coup","de c\u00f4t\u00e9","de haut en bas","depuis belle lurette"],
     hint:"On the first attempt, without needing to retry. The expression contains an ordinal number plus a noun for 'strike/blow'.",
     sSrc:"She passed the competitive exam {1}, without any special preparation."},

    {type:"teach", trg:"au secours", src:"help! (cry for help)", pos:"intj", gender:null,
     note:"Interjection. A cry for help in an emergency.",
     example:"A: Au secours, quelqu'un est tombe dans l'eau !\nB: J'appelle les pompiers tout de suite.",
     exampleSrc:"A: Help, someone fell in the water!\nB: I'm calling the firefighters right away.",
     funFact:"From 'secourir' (to rescue). In France, firefighters ('pompiers') are the first responders for most emergencies."},

    {type:"teach", trg:"dans quelle mesure", src:"to what extent", pos:"adv", gender:null,
     note:"Adverbial expression. Asks about the degree or extent of something.",
     example:"A: Dans quelle mesure ce probleme est-il grave ?\nB: Il faut evaluer les risques.",
     exampleSrc:"A: To what extent is this problem serious?\nB: We need to evaluate the risks.",
     funFact:"Essential for French academic essays (dissertations). Opening with 'Dans quelle mesure...' is classic."},

    {type:"match", pairs:[
      {trg:"bel et bien", src:"well and truly"},
      {trg:"depuis belle lurette", src:"for ages"},
      {trg:"du premier coup", src:"on the first try"},
      {trg:"au secours", src:"help!"},
      {trg:"dans quelle mesure", src:"to what extent"}
    ]},

    {type:"mc",
     q:"Quel adverbe signifie 'de facon certaine et sans aucun doute' ?",
     opts:["assur\u00e9ment","distraitement","dangereusement","drastiquement"],
     ans:"assur\u00e9ment",
     hint:"A literary word for 'certainly'. Voltaire and Montesquieu used it frequently."},

    {type:"fb",
     s:"Elle regardait {1} par la fenetre, perdue dans ses pensees.",
     a:["distraitement"],
     opts:["distraitement","dangereusement","drastiquement","conform\u00e9ment"],
     hint:"In an absent-minded, inattentive way. From 'distrait' meaning not paying attention.",
     sSrc:"She was gazing {1} out the window, lost in thought."}
  ]
};
export default LESSON_17;
