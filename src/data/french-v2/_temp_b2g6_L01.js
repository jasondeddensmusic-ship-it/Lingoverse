const LESSON_1 = {
  id:"frv2_b2g6_l1", title:"L'abonné et l'affirmation", icon:"\uD83D\uDCE8", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'abonné et l'affirmation",
     desc:"Master vocabulary around subscriptions, assertions, and formal declarations used in media and debate.",
     goals:["Learn 20 B2 words about media and formal speech","Express opinions with precision","Navigate subscription and membership contexts"]},

    {type:"teach", trg:"un abonné", src:"a subscriber", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who subscribes to a service or publication.",
     example:"A: Combien d'abonnés a cette chaîne ?\nB: Plus de deux millions.",
     exampleSrc:"A: How many subscribers does this channel have?\nB: More than two million.",
     funFact:"From 'abonner' (to subscribe). Social media made this word explode in everyday French."},

    {type:"teach", trg:"s'abonner", src:"to subscribe", pos:"verb", gender:null,
     note:"Reflexive verb. Takes 'à' before the thing subscribed to.",
     example:"A: Tu t'es abonné au journal ?\nB: Oui, l'abonnement annuel est moins cher.",
     exampleSrc:"A: Did you subscribe to the newspaper?\nB: Yes, the annual subscription is cheaper.",
     funFact:"Originally meant to set boundaries ('bornes'). The sense of regular commitment appeared in the 1700s."},

    {type:"teach", trg:"une affirmation", src:"an assertion, a statement", pos:"noun", gender:"f",
     note:"Feminine noun. A confident declaration. Stronger than 'une déclaration'.",
     example:"A: C'est une affirmation audacieuse.\nB: Je peux la prouver avec des chiffres.",
     exampleSrc:"A: That's a bold assertion.\nB: I can prove it with figures.",
     funFact:"'Affirmation de soi' (self-assertion) is a key concept in French personal development literature."},

    {type:"teach", trg:"affirmer", src:"to assert, to state firmly", pos:"verb", gender:null,
     note:"Verb. To declare something with confidence. 's'affirmer' = to assert oneself.",
     example:"A: Il affirme que le projet est viable.\nB: Mais où sont ses preuves ?",
     exampleSrc:"A: He asserts that the project is viable.\nB: But where is his evidence?",
     funFact:"French courts use 'j'affirme' in sworn testimony, similar to 'I affirm' in English."},

    {type:"mc",
     q:"Que signifie 'un abonné' ?",
     opts:["Un inscrit à un service","Un employé d'une entreprise","Un visiteur occasionnel","Un propriétaire"],
     ans:"Un inscrit à un service",
     hint:"Someone who pays regularly to receive a s..., magazine, or digital content."},

    {type:"teach", trg:"s'absenter", src:"to be absent, to leave temporarily", pos:"verb", gender:null,
     note:"Reflexive verb. To step out or be away from a place briefly.",
     example:"A: Je dois m'absenter une heure.\nB: D'accord, je gère en ton absence.",
     exampleSrc:"A: I need to step out for an hour.\nB: Okay, I'll manage in your absence.",
     funFact:"More formal than 'partir'. Used in workplaces and official contexts."},

    {type:"teach", trg:"l'agressivité", src:"the aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. Hostile or confrontational behavior.",
     example:"A: Son agressivité met tout le monde mal à l'aise.\nB: Il devrait apprendre à se calmer.",
     exampleSrc:"A: His aggressiveness makes everyone uncomfortable.\nB: He should learn to calm down.",
     funFact:"French distinguishes 'agressivité' (the trait) from 'agression' (the act). Both from Latin 'aggredi'."},

    {type:"teach", trg:"l'accélération", src:"the acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of speeding up.",
     example:"A: L'accélération du changement climatique est alarmante.\nB: Oui, il faut agir maintenant.",
     exampleSrc:"A: The acceleration of climate change is alarming.\nB: Yes, we must act now.",
     funFact:"Used in both physics and figurative contexts. 'Accélérer le pas' means to quicken one's step."},

    {type:"fb",
     s:"Il {1} que le contrat est parfaitement légal.",
     a:["affirme"],
     opts:["affirme","absente","accélère","abonne"],
     hint:"To declare something firmly with confidence, as in a formal statement.",
     sSrc:"He {1} that the contract is perfectly legal."},

    {type:"teach", trg:"agrandi", src:"enlarged, expanded", pos:"adj", gender:null,
     note:"Past participle used as adjective. Feminine: agrandie.",
     example:"A: La photo agrandie montre plus de détails.\nB: Oui, on voit même les inscriptions.",
     exampleSrc:"A: The enlarged photo shows more details.\nB: Yes, you can even see the inscriptions.",
     funFact:"'Agrandir' combines 'à' + 'grand'. 'Se faire agrandir une photo' is common at print shops."},

    {type:"teach", trg:"l'avènement", src:"the advent, the rise", pos:"noun", gender:"m",
     note:"Masculine noun. The arrival of something important or a new era.",
     example:"A: L'avènement d'Internet a tout changé.\nB: Surtout notre façon de communiquer.",
     exampleSrc:"A: The advent of the Internet changed everything.\nB: Especially our way of communicating.",
     funFact:"Originally meant a king's accession to the throne. Now used for any major arrival or emergence."},

    {type:"teach", trg:"l'atrocité", src:"the atrocity", pos:"noun", gender:"f",
     note:"Feminine noun. An extremely cruel or wicked act.",
     example:"A: Les atrocités de cette guerre sont documentées.\nB: Le tribunal international enquête.",
     exampleSrc:"A: The atrocities of this war are documented.\nB: The international tribunal is investigating.",
     funFact:"From Latin 'atrox' meaning fierce or cruel. Also used colloquially for something awful."},

    {type:"mc",
     q:"Que signifie 's'absenter' ?",
     opts:["Annuler un abonnement","Quitter un lieu temporairement","Refuser une invitation","Oublier un rendez-vous"],
     ans:"Quitter un lieu temporairement",
     hint:"A reflexive verb for leaving a place briefly, often used in professional settings."},

    {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters in a writing system.",
     example:"A: L'alphabet français compte 26 lettres.\nB: Oui, mais avec beaucoup d'accents en plus.",
     exampleSrc:"A: The French alphabet has 26 letters.\nB: Yes, but with many accents on top.",
     funFact:"From Greek 'alpha' + 'beta'. French added accents (é, è, ê, ë) but kept the same 26 base letters."},

    {type:"teach", trg:"l'archétype", src:"the archetype", pos:"noun", gender:"m",
     note:"Masculine noun. The original model or perfect example of something.",
     example:"A: Il est l'archétype du héros romantique.\nB: Oui, tourmenté mais passionné.",
     exampleSrc:"A: He is the archetype of the romantic hero.\nB: Yes, tormented but passionate.",
     funFact:"From Greek 'arkhetupon'. Jung's archetypes ('l'ombre', 'l'anima') are widely studied in French psychology."},

    {type:"fb",
     s:"L'{1} d'Internet a transformé la société moderne.",
     a:["avènement"],
     opts:["avènement","alphabet","archétype","atrocité"],
     hint:"The arrival or emergence of something important that marks a new era.",
     sSrc:"The {1} of the Internet transformed modern society."},

    {type:"teach", trg:"la cruauté", src:"the cruelty", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being deliberately cruel.",
     example:"A: La cruauté envers les animaux est punissable.\nB: Oui, la loi est très claire.",
     exampleSrc:"A: Cruelty to animals is punishable.\nB: Yes, the law is very clear.",
     funFact:"From Latin 'crudelitas'. 'Cruauté mentale' is grounds for divorce in French family law."},

    {type:"teach", trg:"la formulation", src:"the wording, the formulation", pos:"noun", gender:"f",
     note:"Feminine noun. The way something is expressed in words.",
     example:"A: La formulation de cette question est ambiguë.\nB: Il faut la reformuler.",
     exampleSrc:"A: The wording of this question is ambiguous.\nB: We need to rephrase it.",
     funFact:"Critical in French legal and diplomatic texts where exact wording determines meaning."},

    {type:"match", pairs:[
      {trg:"abonné", src:"subscriber"},
      {trg:"avènement", src:"advent, rise"},
      {trg:"archétype", src:"archetype"},
      {trg:"cruauté", src:"cruelty"},
      {trg:"formulation", src:"wording"}
    ]},

    {type:"teach", trg:"la désobéissance", src:"the disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. Refusal to obey rules or authority.",
     example:"A: La désobéissance civile est un droit ?\nB: C'est un sujet de débat philosophique.",
     exampleSrc:"A: Is civil disobedience a right?\nB: It's a subject of philosophical debate.",
     funFact:"'La désobéissance civile' was championed by Thoreau but deeply resonates in French protest culture."},

    {type:"teach", trg:"la justification", src:"the justification", pos:"noun", gender:"f",
     note:"Feminine noun. A reason or explanation that defends an action.",
     example:"A: Quelle est votre justification ?\nB: Les résultats parlent d'eux-mêmes.",
     exampleSrc:"A: What is your justification?\nB: The results speak for themselves.",
     funFact:"In French typography, 'justification' also means text alignment, especially full justification."},

    {type:"mc",
     q:"Quel mot désigne le modèle originel ou l'exemple parfait ?",
     opts:["l'atrocité","l'abonné","l'archétype","l'avènement"],
     ans:"l'archétype",
     hint:"From Greek, meaning the original pattern. Think Jung's psychology concepts."},

    {type:"fb",
     s:"La {1} de cette clause doit être plus précise.",
     a:["formulation"],
     opts:["formulation","justification","cruauté","désobéissance"],
     hint:"The exact way something is worded or expressed, especially in official texts.",
     sSrc:"The {1} of this clause must be more precise."}
  ]
};
export default LESSON_1;
