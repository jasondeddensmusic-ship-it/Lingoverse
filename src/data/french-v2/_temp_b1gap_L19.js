// L19 - Love & Relationships
const LESSON_19 = {id:"frv2_b1gap_l19", title:"Amour et relations", icon:"\u{2764}\u{FE0F}", xp:15, board:true, steps:[

{type:"intro", title:"Amour et relations",
 desc:"Explore vocabulary for love, relationships, devotion, and the bonds between people.",
 goals:["Learn 20 words about love and relationships","Describe different types of bonds","Discuss devotion, passion, and commitment"]},

{type:"teach", trg:"l'amant", src:"lover (male)", pos:"noun", gender:"m",
 note:"Masculine noun. Amante (f). A romantic/sexual partner.\nOften implies an affair.",
 example:"A: Dans ce roman, l'amant est un personnage mystérieux.\nB: C'est typique de la littérature romantique.",
 exampleSrc:"A: In this novel, the lover is a mysterious character.\nB: That's typical of romantic literature.",
 funFact:"Marguerite Duras's L'Amant (The Lover) won the 1984 Goncourt prize. A French literary classic."},

{type:"teach", trg:"l'adorateur", src:"worshipper, admirer", pos:"noun", gender:"m",
 note:"Masculine noun. Adoratrice (f). Someone who adores.\nReligious devotee or devoted admirer.",
 example:"A: C'est un adorateur de jazz depuis sa jeunesse.\nB: Il a tous les disques de Miles Davis.",
 exampleSrc:"A: He's been a jazz devotee since his youth.\nB: He has all of Miles Davis's records.",
 funFact:"Adorateur can be religious (worshipper of God) or casual (devoted fan). Context tells you which."},

{type:"teach", trg:"aduler", src:"to adulate, to worship", pos:"verb", gender:null,
 note:"Regular -er verb. To worship or idolize excessively.\nStronger than admirer.",
 example:"A: Les fans l'adulent comme une star.\nB: C'est un peu excessif, non ?",
 exampleSrc:"A: The fans worship her like a star.\nB: It's a bit excessive, isn't it?",
 funFact:"From Latin adulari (to flatter). Adulation always implies excessive, sometimes unhealthy devotion."},

{type:"teach", trg:"l'affection", src:"affection", pos:"noun", gender:"f",
 note:"Feminine noun. Warm fondness or tender feeling.\nAlso medical: une affection = an ailment.",
 example:"A: Elle montre beaucoup d'affection à ses enfants.\nB: Ils grandissent dans un foyer aimant.",
 exampleSrc:"A: She shows a lot of affection to her children.\nB: They're growing up in a loving home.",
 funFact:"Medical double meaning: une affection pulmonaire = a lung condition. Context always clarifies."},

{type:"teach", trg:"l'attachement", src:"attachment, bond", pos:"noun", gender:"m",
 note:"Masculine noun. Emotional bond or connection.\nPsychology: théorie de l'attachement.",
 example:"A: Son attachement à cette ville est profond.\nB: Il y a grandi et ne veut pas la quitter.",
 exampleSrc:"A: His attachment to this city is deep.\nB: He grew up there and doesn't want to leave.",
 funFact:"Bowlby's attachment theory is called 'théorie de l'attachement' in French psychology."},

{type:"mc",
 q:"Quel verbe signifie 'adorer de manière excessive' ?",
 opts:["aduler","adoucir","affecter","affronter"],
 ans:"aduler",
 hint:"This verb implies worship that goes too far. Think of fans who idolize someone unhealthily."},

{type:"teach", trg:"l'amour-propre", src:"self-esteem, pride", pos:"noun", gender:"m",
 note:"Masculine noun. Self-respect or wounded pride.\nBlesser l'amour-propre = to hurt someone's pride.",
 example:"A: Son amour-propre a été blessé par cette critique.\nB: Il n'accepte pas bien les remarques.",
 exampleSrc:"A: His pride was hurt by that criticism.\nB: He doesn't take comments well.",
 funFact:"Rousseau distinguished amour-propre (vanity, comparison with others) from amour de soi (healthy self-love)."},

{type:"teach", trg:"l'attirance", src:"attraction, draw", pos:"noun", gender:"f",
 note:"Feminine noun. The pull toward someone or something.\nPhysical or emotional attraction.",
 example:"A: Il y a une attirance évidente entre eux.\nB: Tout le monde l'a remarqué.",
 exampleSrc:"A: There's an obvious attraction between them.\nB: Everyone has noticed.",
 funFact:"Attirance is the feeling, attrait is the quality. You feel attirance toward something that has attrait."},

{type:"teach", trg:"l'aveu", src:"confession of love", pos:"noun", gender:"m",
 note:"Masculine noun (see also L15). In love context:\nfaire un aveu = to confess one's feelings.",
 example:"A: Il lui a fait l'aveu de ses sentiments.\nB: Elle a été très touchée.",
 exampleSrc:"A: He confessed his feelings to her.\nB: She was very touched.",
 funFact:"La Princesse de Clèves (1678) features literature's most famous aveu: a wife confesses love for another man."},

{type:"teach", trg:"l'alliance", src:"alliance, wedding ring", pos:"noun", gender:"f",
 note:"Feminine noun. A union or a wedding band.\nPorter l'alliance = to wear a wedding ring.",
 example:"A: Ils ont échangé leurs alliances à l'église.\nB: C'était un moment très émouvant.",
 exampleSrc:"A: They exchanged their wedding rings at the church.\nB: It was a very moving moment.",
 funFact:"Alliance means both a military/political alliance and a wedding ring. Marriage is an alliance."},

{type:"fb",
 s:"Son {1} a été blessé par cette remarque cruelle.",
 a:["amour-propre"],
 opts:["amour-propre","attachement","affection","attirance"],
 hint:"This compound noun means self-esteem or pride. Rousseau wrote extensively about this concept.",
 sSrc:"His {1} was hurt by that cruel remark."},

{type:"teach", trg:"l'abandonnement", src:"abandonment, surrender", pos:"noun", gender:"m",
 note:"Masculine noun. The act of abandoning.\nAlso: letting go, relaxed surrender.",
 example:"A: L'abandon de ce projet serait dommage.\nB: On devrait chercher d'autres solutions.",
 exampleSrc:"A: Abandoning this project would be a shame.\nB: We should look for other solutions.",
 funFact:"In art, 'avec abandon' means with carefree relaxation. A painter works 'avec abandon' (with free-flowing ease)."},

{type:"teach", trg:"l'affinité", src:"affinity (revisited)", pos:"noun", gender:"f",
 note:"Feminine noun. Natural connection (see L08).\nLes Affinités électives = Elective Affinities.",
 example:"A: J'ai une affinité naturelle avec les langues.\nB: C'est un talent précieux de nos jours.",
 exampleSrc:"A: I have a natural affinity for languages.\nB: It's a valuable talent these days.",
 funFact:"Goethe's novel Die Wahlverwandtschaften is 'Les Affinités électives' in French. Chemistry meets love."},

{type:"teach", trg:"l'amitié", src:"friendship", pos:"noun", gender:"f",
 note:"Feminine noun. The bond between friends.\nFrom ami (friend). Warm, deep relationship.",
 example:"A: Leur amitié dure depuis l'école primaire.\nB: C'est rare et précieux.",
 exampleSrc:"A: Their friendship has lasted since primary school.\nB: That's rare and precious.",
 funFact:"Montaigne's essay on friendship (De l'amitié) is a cornerstone of French philosophy."},

{type:"mc",
 q:"Quel mot désigne à la fois un anneau de mariage et un accord politique ?",
 opts:["une amitié","une alliance","une affection","une attirance"],
 ans:"une alliance",
 hint:"This word covers both a wedding ring and a military/political pact. Marriage is one form of this."},

{type:"teach", trg:"l'amoureux", src:"in love (person), lover", pos:"noun", gender:"m",
 note:"Masculine noun. Amoureuse (f). Someone who is in love.\nAlso adjective: être amoureux de.",
 example:"A: Les amoureux se promènent le long de la Seine.\nB: Paris est la ville de l'amour, après tout.",
 exampleSrc:"A: The lovers stroll along the Seine.\nB: Paris is the city of love, after all.",
 funFact:"Tomber amoureux (to fall in love) uses the verb 'tomber' (to fall). Love is an accident."},

{type:"teach", trg:"l'apprivoisé", src:"tamed, domesticated", pos:"adj", gender:null,
 note:"Past participle of apprivoiser, used as adjective.\nTo make tame and trusting.",
 example:"A: Le renard est maintenant apprivoisé.\nB: Il mange dans la main de l'enfant.",
 exampleSrc:"A: The fox is now tamed.\nB: It eats from the child's hand.",
 funFact:"Le Petit Prince: 'On ne voit bien qu'avec le coeur.' Apprivoiser means creating a unique bond of trust."},

{type:"teach", trg:"l'avenir", src:"future (revisited)", pos:"noun", gender:"m",
 note:"Masculine noun. What lies ahead (see L15).\nAvoir de l'avenir = to have a future/prospects.",
 example:"A: Ce couple a un bel avenir devant lui.\nB: Ils sont parfaits ensemble.",
 exampleSrc:"A: This couple has a bright future ahead.\nB: They're perfect together.",
 funFact:"D'avenir means 'promising.' Un métier d'avenir = a career with good prospects."},

{type:"teach", trg:"l'aventurier", src:"adventurer", pos:"noun", gender:"m",
 note:"Masculine noun. Aventurière (f). Someone who seeks adventure.\nAlso: an unscrupulous schemer.",
 example:"A: Jacques Cousteau était un grand aventurier des mers.\nB: Ses documentaires ont inspiré des millions de gens.",
 exampleSrc:"A: Jacques Cousteau was a great ocean adventurer.\nB: His documentaries inspired millions.",
 funFact:"In the 18th century, an aventurier was a social climber or con artist. The negative meaning persists."},

{type:"fb",
 s:"Le renard du Petit Prince a été {1} par l'enfant.",
 a:["apprivoisé"],
 opts:["apprivoisé","adoré","adulé","abandonné"],
 hint:"This word means tamed through building trust. The Little Prince's fox is the most famous example.",
 sSrc:"The Little Prince's fox was {1} by the child."},

{type:"teach", trg:"l'avide", src:"eager, greedy", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Hungry for something.\nAvide de = eager for.",
 example:"A: Elle est avide de connaissances.\nB: Elle pose toujours mille questions.",
 exampleSrc:"A: She's eager for knowledge.\nB: She always asks a thousand questions.",
 funFact:"Avide de pouvoir = power-hungry. Avide de savoir = knowledge-hungry. Context decides positive or negative."},

{type:"match", pairs:[
  {trg:"l'amant", src:"lover"},
  {trg:"l'alliance", src:"wedding ring"},
  {trg:"l'amitié", src:"friendship"},
  {trg:"apprivoisé", src:"tamed"},
  {trg:"avide", src:"eager/greedy"}
]},

{type:"mc",
 q:"Quel nom composé désigne l'estime de soi qui peut être blessée ?",
 opts:["l'amour-passion","l'amour-libre","l'amour-propre","l'amour-fou"],
 ans:"l'amour-propre",
 hint:"Rousseau contrasted this with healthy self-love. It's about pride and how others see you."}

]};
export default LESSON_19;
