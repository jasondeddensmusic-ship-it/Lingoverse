const LESSON_15 = {
  id:"frv2_a1gap_l15", title:"La sécurité et les urgences", icon:"\u{1F6A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La sécurité et les urgences",
     desc:"Safety, emergencies, and conflict situations. Learn the words you need when things go wrong.",
     goals:["Learn 20 safety and emergency words","Describe accidents and incidents","Talk about protection and insurance"]},

    {type:"teach", trg:"l'accident", src:"the accident", pos:"noun", gender:"m",
     note:"Masculine noun. Any unplanned harmful event.",
     example:"A: Il y a eu un accident sur la route.\nB: C'est grave ?",
     exampleSrc:"A: There was an accident on the road.\nB: Is it serious?",
     funFact:"The French emergency number is 15 (medical), 17 (police), 18 (fire). Or 112 for all emergencies."},

    {type:"teach", trg:"l'agression", src:"the attack, the assault", pos:"noun", gender:"f",
     note:"Feminine noun. A violent act against someone.",
     example:"A: Il y a eu une agression hier soir.\nB: Oh non, c'est terrible.",
     exampleSrc:"A: There was an assault last night.\nB: Oh no, that's terrible.",
     funFact:"In French law, 'agression' covers both physical and verbal attacks. Both are taken seriously."},

    {type:"teach", trg:"l'assaut", src:"the assault, the attack", pos:"noun", gender:"m",
     note:"Masculine noun. A forceful attack, often military or by police.",
     example:"A: La police a donné l'assaut.\nB: La situation est sous contrôle maintenant.",
     exampleSrc:"A: The police launched the assault.\nB: The situation is under control now.",
     funFact:"'Prendre d'assaut' means to storm or overrun. Also used figuratively: 'les soldes prises d'assaut' (sales stormed)."},

    {type:"teach", trg:"l'attaque", src:"the attack", pos:"noun", gender:"f",
     note:"Feminine noun. Any aggressive action or medical episode.",
     example:"A: C'est une attaque cardiaque ?\nB: Vite, appelez le 15 !",
     exampleSrc:"A: Is it a heart attack?\nB: Quick, call 15!",
     funFact:"'Attaque' can be medical too: 'une attaque de panique' is a panic attack, 'une crise cardiaque' is more common for heart attack."},

    {type:"teach", trg:"l'arrestation", src:"the arrest", pos:"noun", gender:"f",
     note:"Feminine noun. When police take someone into custody.",
     example:"A: Il y a eu une arrestation ?\nB: Oui, la police a arrêté un suspect.",
     exampleSrc:"A: Was there an arrest?\nB: Yes, the police arrested a suspect.",
     funFact:"A 'mandat d'arrestation' is an arrest warrant. French crime dramas love this vocabulary."},

    {type:"mc",
     q:"Quel numéro appeler pour une urgence médicale en France ?",
     opts:["15","17","18","911"],
     ans:"15",
     hint:"This is the SAMU (medical emergency) number, different from police and fire services."},

    {type:"teach", trg:"attaquer", src:"to attack", pos:"verb", gender:null,
     note:"Regular -er verb. Physical attack or legal action.",
     example:"A: Le chien a attaqué le facteur.\nB: Il n'est pas méchant d'habitude.",
     exampleSrc:"A: The dog attacked the mailman.\nB: He's not usually mean.",
     funFact:"'Attaquer en justice' means to sue someone. The legal and physical meanings coexist."},

    {type:"teach", trg:"accuser", src:"to accuse", pos:"verb", gender:null,
     note:"Regular -er verb. To formally blame someone for something.",
     example:"A: On l'accuse de vol.\nB: Mais il est innocent !",
     exampleSrc:"A: He's accused of theft.\nB: But he's innocent!",
     funFact:"'L'accusé' means the accused/defendant. 'J'accuse' was Zola's famous letter defending Dreyfus in 1898."},

    {type:"teach", trg:"l'arme", src:"the weapon", pos:"noun", gender:"f",
     note:"Feminine noun. Any weapon. Plural: 'les armes'.",
     example:"A: Il avait une arme ?\nB: Non, heureusement.",
     exampleSrc:"A: Did he have a weapon?\nB: No, fortunately.",
     funFact:"'Les armoiries' (coat of arms) comes from the same root. Medieval weapons were displayed on shields."},

    {type:"teach", trg:"l'armée", src:"the army", pos:"noun", gender:"f",
     note:"Feminine noun. The national military force.",
     example:"A: Son fils est dans l'armée.\nB: Il est soldat ?",
     exampleSrc:"A: His son is in the army.\nB: Is he a soldier?",
     funFact:"France has the largest military in the EU. The 'Légion étrangère' (Foreign Legion) accepts foreign volunteers."},

    {type:"fb",
     s:"Il y a eu un {1} de voiture ce matin sur l'autoroute.",
     a:["accident"],
     opts:["accident","assaut","attaque","arrestation"],
     hint:"This masculine noun describes an unplanned event that causes damage, commonly on roads.",
     sSrc:"There was a car {1} this morning on the highway."},

    {type:"teach", trg:"l'armure", src:"the armor", pos:"noun", gender:"f",
     note:"Feminine noun. Protective metal clothing worn by knights.",
     example:"A: Tu as vu l'armure au musée ?\nB: Oui, elle est énorme !",
     exampleSrc:"A: Did you see the armor at the museum?\nB: Yes, it's enormous!",
     funFact:"Medieval French knights wore full plate armor. Jeanne d'Arc famously wore one into battle."},

    {type:"teach", trg:"l'arbitre", src:"the referee, the judge", pos:"noun", gender:"m",
     note:"Same form for both genders. Person who enforces rules.",
     example:"A: L'arbitre a donné un carton rouge.\nB: C'est mérité !",
     exampleSrc:"A: The referee gave a red card.\nB: It's deserved!",
     funFact:"In French football (soccer), the referee is central. 'L'arbitre a sifflé' means the referee blew the whistle."},

    {type:"teach", trg:"l'alibi", src:"the alibi", pos:"noun", gender:"m",
     note:"Masculine noun. Proof you were somewhere else during a crime.",
     example:"A: Tu as un alibi ?\nB: Oui, j'étais au travail.",
     exampleSrc:"A: Do you have an alibi?\nB: Yes, I was at work.",
     funFact:"From Latin 'alibi' meaning 'elsewhere'. It's been used in French courts for centuries."},

    {type:"teach", trg:"l'amende", src:"the fine (penalty)", pos:"noun", gender:"f",
     note:"Feminine noun. A monetary penalty for breaking rules.",
     example:"A: Tu as eu une amende ?\nB: Oui, pour stationnement interdit.",
     exampleSrc:"A: Did you get a fine?\nB: Yes, for illegal parking.",
     funFact:"Don't confuse 'amende' (fine/penalty) with 'amande' (almond). They sound identical but mean very different things!"},

    {type:"mc",
     q:"Quel mot signifie 'weapon' en français ?",
     opts:["l'arme","l'armure","l'armée","l'arbitre"],
     ans:"l'arme",
     hint:"This feminine noun is any instrument used for fighting, from swords to modern weapons."},

    {type:"teach", trg:"l'angoisse", src:"the anguish, the anxiety", pos:"noun", gender:"f",
     note:"Feminine noun. Deep worry or dread. Stronger than 'inquiétude'.",
     example:"A: L'angoisse de l'examen est terrible.\nB: Respire, ça va aller.",
     exampleSrc:"A: The exam anxiety is terrible.\nB: Breathe, it'll be fine.",
     funFact:"Existentialist philosophy made 'l'angoisse' a central concept. Kierkegaard and Sartre wrote extensively about it."},

    {type:"teach", trg:"l'attente", src:"the wait, the expectation", pos:"noun", gender:"f",
     note:"Feminine noun. Both waiting and what you expect.",
     example:"A: L'attente est longue ici.\nB: Oui, ça fait trente minutes.",
     exampleSrc:"A: The wait is long here.\nB: Yes, it's been thirty minutes.",
     funFact:"'Salle d'attente' is a waiting room. 'Contre toute attente' means 'against all expectations'."},

    {type:"teach", trg:"l'atout", src:"the asset, the trump card", pos:"noun", gender:"m",
     note:"Masculine noun. A strength, advantage, or trump in cards.",
     example:"A: Son expérience est un atout.\nB: Oui, c'est très important.",
     exampleSrc:"A: His experience is an asset.\nB: Yes, that's very important.",
     funFact:"In card games, 'l'atout' is the trump suit. In life, your 'atouts' are your strong points."},

    {type:"teach", trg:"armer", src:"to arm", pos:"verb", gender:null,
     note:"Regular -er verb. To equip with weapons or to prepare.",
     example:"A: Arme-toi de patience !\nB: Tu as raison, il faut attendre.",
     exampleSrc:"A: Arm yourself with patience!\nB: You're right, we must wait.",
     funFact:"'S'armer de courage' (to arm oneself with courage) is a beautiful figurative use of a military verb."},

    {type:"fb",
     s:"J'ai eu une {1} de vingt euros pour excès de vitesse.",
     a:["amende"],
     opts:["amende","armure","arme","armée"],
     hint:"This feminine noun is the money you must pay as punishment for breaking a rule.",
     sSrc:"I got a {1} of twenty euros for speeding."},

    {type:"match", pairs:[
      {trg:"accident", src:"accident"},
      {trg:"arrestation", src:"arrest"},
      {trg:"arbitre", src:"referee"},
      {trg:"amende", src:"fine (penalty)"},
      {trg:"atout", src:"asset/trump card"}
    ]},

    {type:"mc",
     q:"Quel mot a le même son que 'amande' mais signifie 'fine' ?",
     opts:["amende","arme","armure","attaque"],
     ans:"amende",
     hint:"This word sounds like the nut but means a financial penalty. A classic French homophone."},

    {type:"fb",
     s:"L'{1} à l'hôpital est longue, ça fait une heure.",
     a:["attente"],
     opts:["attente","angoisse","attaque","armée"],
     hint:"This feminine noun describes the period of time spent waiting for something.",
     sSrc:"The {1} at the hospital is long, it's been an hour."}
  ]
};
export default LESSON_15;
