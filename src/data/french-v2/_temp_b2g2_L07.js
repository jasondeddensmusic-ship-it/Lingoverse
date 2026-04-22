const LESSON_7 = {
  id:"frv2_b2g2_l7", title:"Psychologie et comportement", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Psychologie et comportement",
     desc:"Explore vocabulary for discussing emotions, personality, and psychological states. From aggression to disillusionment.",
     goals:["Learn 20 psychology and behavior terms","Describe personality traits in French","Discuss emotional states with nuance"]},

    {type:"teach", trg:"l'agressivite", src:"the aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being hostile or violent.",
     example:"A: L'agressivite au volant est un vrai probleme.\nB: Les gens sont de plus en plus stresses.",
     exampleSrc:"A: Aggressiveness behind the wheel is a real problem.\nB: People are more and more stressed.",
     funFact:"'Road rage' doesn't have a direct French equivalent. They use 'agressivite au volant' instead."},

    {type:"teach", trg:"affectivement", src:"emotionally, affectively", pos:"adv", gender:null,
     note:"Adverb. In an emotional or affective manner.",
     example:"A: Il est affectivement tres fragile en ce moment.\nB: Il faut etre patient avec lui.",
     exampleSrc:"A: He is emotionally very fragile right now.\nB: We need to be patient with him.",
     funFact:"French psychology distinguishes 'affectif' (emotional) from 'emotionnel' (emotional). Subtle but real."},

    {type:"teach", trg:"la balourdise", src:"the clumsiness, the blunder", pos:"noun", gender:"f",
     note:"Feminine noun. An awkward or tactless mistake.",
     example:"A: Quelle balourdise de sa part !\nB: Il n'aurait jamais du dire ca en public.",
     exampleSrc:"A: What a blunder on his part!\nB: He should never have said that in public.",
     funFact:"From 'balourd' (clumsy person). A softer word than 'betise' but still critical."},

    {type:"teach", trg:"debonnaire", src:"good-natured, easygoing", pos:"adj", gender:null,
     note:"Adjective. Kind, gentle, and easy to get along with.",
     example:"A: Mon voisin est un homme debonnaire.\nB: Il ne se met jamais en colere.",
     exampleSrc:"A: My neighbor is a good-natured man.\nB: He never gets angry.",
     funFact:"Louis I was called 'le Debonnaire'. From 'de bonne aire' meaning 'of good disposition'."},

    {type:"teach", trg:"depite", src:"frustrated, vexed", pos:"adj", gender:null,
     note:"Adjective. Feeling bitter disappointment. Feminine: depitee.",
     example:"A: Elle etait depitee apres le refus.\nB: Je la comprends, elle avait tant travaille.",
     exampleSrc:"A: She was frustrated after the refusal.\nB: I understand her, she had worked so hard.",
     funFact:"From 'depit' meaning spite or frustration. 'En depit de' means 'in spite of'."},

    {type:"mc",
     q:"Quel adjectif decrit une personne aimable et facile a vivre ?",
     opts:["debonnaire","depite","agressif","desabuse"],
     ans:"debonnaire",
     hint:"A kind, gentle disposition. A French king had this as his nickname."},

    {type:"teach", trg:"desabuse", src:"disillusioned, world-weary", pos:"adj", gender:null,
     note:"Adjective. Having lost one's illusions. Feminine: desabusee.",
     example:"A: Il a un regard desabuse sur la politique.\nB: Les scandales l'ont decu.",
     exampleSrc:"A: He has a disillusioned view of politics.\nB: The scandals disappointed him.",
     funFact:"French literature loves the 'desabuse' character. Flaubert's Frederic Moreau is the archetype."},

    {type:"teach", trg:"desapprobateur", src:"disapproving", pos:"adj", gender:null,
     note:"Adjective. Showing disapproval. Feminine: desapprobatrice.",
     example:"A: Son regard desapprobateur en disait long.\nB: Elle n'etait clairement pas d'accord.",
     exampleSrc:"A: Her disapproving look said it all.\nB: She clearly didn't agree.",
     funFact:"The French are famous for disapproving looks. 'Un regard desapprobateur' is a cultural weapon."},

    {type:"teach", trg:"le denigrement", src:"the denigration, the belittling", pos:"noun", gender:"m",
     note:"Masculine noun. The act of unfairly criticizing someone.",
     example:"A: Le denigrement systematique des collegues est toxique.\nB: C'est une forme de harcelement.",
     exampleSrc:"A: Systematically belittling colleagues is toxic.\nB: It's a form of harassment.",
     funFact:"From 'denigrer' (to denigrate), from Latin 'denigrare' (to blacken). French labor law punishes workplace denigration."},

    {type:"teach", trg:"denigrer", src:"to denigrate, to belittle", pos:"verb", gender:null,
     note:"Verb. To criticize unfairly or speak disparagingly about someone.",
     example:"A: Il passe son temps a denigrer ses collegues.\nB: C'est un comportement inacceptable.",
     exampleSrc:"A: He spends his time belittling his colleagues.\nB: It's unacceptable behavior.",
     funFact:"French courts regularly hear 'denigrement' cases. It is taken very seriously in defamation law."},

    {type:"fb",
     s:"Son regard {1} m'a fait comprendre qu'elle n'etait pas d'accord.",
     a:["desapprobateur"],
     opts:["desapprobateur","desabuse","debonnaire","depite"],
     hint:"A look that shows disapproval. You can see the disagreement in their eyes.",
     sSrc:"Her {1} look made me understand she didn't agree."},

    {type:"teach", trg:"l'amateurisme", src:"the amateurism", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of professionalism or competence.",
     example:"A: L'amateurisme de cette equipe est flagrant.\nB: Ils n'ont meme pas de plan.",
     exampleSrc:"A: The amateurism of this team is blatant.\nB: They don't even have a plan.",
     funFact:"In French sports, 'amateurisme' vs 'professionnalisme' was a huge debate. Rugby went pro only in 1995."},

    {type:"teach", trg:"antagoniste", src:"antagonistic, opposing", pos:"adj", gender:null,
     note:"Adjective. In direct opposition. Also used as a noun for an opponent.",
     example:"A: Leurs positions sont totalement antagonistes.\nB: Un compromis semble impossible.",
     exampleSrc:"A: Their positions are totally antagonistic.\nB: A compromise seems impossible.",
     funFact:"From Greek 'antagonistes' (opponent). In pharmacology, an 'antagoniste' blocks a receptor."},

    {type:"teach", trg:"la circonspection", src:"the circumspection, the caution", pos:"noun", gender:"f",
     note:"Feminine noun. Careful consideration before acting or speaking.",
     example:"A: Il faut agir avec circonspection.\nB: Une erreur pourrait avoir de graves consequences.",
     exampleSrc:"A: We must act with circumspection.\nB: A mistake could have serious consequences.",
     funFact:"From Latin 'circumspicere' (to look around). A virtue in French diplomacy and administration."},

    {type:"mc",
     q:"Quel verbe signifie 'critiquer injustement quelqu'un' ?",
     opts:["decentraliser","denigrer","deposseeder","demotiver"],
     ans:"denigrer",
     hint:"To unfairly speak badly of someone. From Latin meaning 'to blacken'."},

    {type:"teach", trg:"attarde", src:"backward, slow-witted", pos:"adj", gender:null,
     note:"Adjective. Falling behind or slow to develop. Feminine: attardee.",
     example:"A: Ce quartier est economiquement attarde.\nB: Il manque d'investissements depuis des annees.",
     exampleSrc:"A: This neighborhood is economically backward.\nB: It has lacked investment for years.",
     funFact:"Careful with this word. Used about people, it is offensive. Preferred for regions or development."},

    {type:"teach", trg:"deplace", src:"inappropriate, out of place", pos:"adj", gender:null,
     note:"Adjective. Not suitable for the situation. Feminine: deplacee.",
     example:"A: Sa remarque etait completement deplacee.\nB: Il n'aurait pas du dire ca.",
     exampleSrc:"A: His remark was completely inappropriate.\nB: He shouldn't have said that.",
     funFact:"Literally 'displaced'. 'Personne deplacee' means a displaced person (refugee context)."},

    {type:"teach", trg:"derouter", src:"to disconcert, to confuse", pos:"verb", gender:null,
     note:"Verb. To throw someone off course mentally.",
     example:"A: Sa reponse m'a completement deroute.\nB: Je ne m'y attendais pas du tout.",
     exampleSrc:"A: His answer completely disconcerted me.\nB: I wasn't expecting it at all.",
     funFact:"Originally a maritime term: to divert a ship from its route. Now used for mental confusion."},

    {type:"teach", trg:"l'attrait", src:"the appeal, the attraction", pos:"noun", gender:"m",
     note:"Masculine noun. The quality of being attractive or interesting.",
     example:"A: L'attrait de Paris ne faiblit jamais.\nB: Des millions de touristes y viennent chaque annee.",
     exampleSrc:"A: The appeal of Paris never fades.\nB: Millions of tourists come every year.",
     funFact:"'Attraits' (plural) can mean physical charms. 'L'attrait de la nouveaute' means the lure of novelty."},

    {type:"fb",
     s:"Sa remarque {1} a cree un malaise dans la salle.",
     a:["deplacee"],
     opts:["deplacee","debonnaire","desabusee","depitee"],
     hint:"Inappropriate for the situation. Something that should not have been said.",
     sSrc:"Her {1} remark created unease in the room."},

    {type:"match", pairs:[
      {trg:"agressivite", src:"aggressiveness"},
      {trg:"balourdise", src:"blunder"},
      {trg:"circonspection", src:"caution"},
      {trg:"attrait", src:"appeal"},
      {trg:"denigrement", src:"denigration"}
    ]},

    {type:"mc",
     q:"Quel mot designe le fait d'avoir perdu ses illusions ?",
     opts:["debonnaire","antagoniste","desabuse","depite"],
     ans:"desabuse",
     hint:"Having lost your illusions about something. Think 'de-' (away) + 'abuse' (deceived)."},

    {type:"fb",
     s:"L'{1} de cette ville historique attire des visiteurs du monde entier.",
     a:["attrait"],
     opts:["attrait","amateurisme","antagonisme","agressivite"],
     hint:"The quality that draws people in. Think of something magnetic and appealing.",
     sSrc:"The {1} of this historic city draws visitors from around the world."}
  ]
};
export default LESSON_7;
