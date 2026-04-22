const LESSON_17 = {
  id:"frv2_a1gap_l17", title:"Donner et recevoir", icon:"\u{1F91D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Donner et recevoir",
     desc:"Social verbs: welcoming, authorizing, granting, and caring. The words that hold communities together.",
     goals:["Learn 20 verbs about social interaction","Express giving, receiving, and caring","Use common French social expressions"]},

    {type:"teach", trg:"accueillir", src:"to welcome, to receive (guests)", pos:"verb", gender:null,
     note:"Irregular verb. To welcome someone into a place.",
     example:"A: On accueille les invités à quelle heure ?\nB: À sept heures.",
     exampleSrc:"A: What time do we welcome the guests?\nB: At seven o'clock.",
     funFact:"French hospitality culture runs deep. 'Accueillir' implies warmth and generosity, not just opening the door."},

    {type:"teach", trg:"accueillant", src:"welcoming, friendly", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'accueillante'. Describes warm places or people.",
     example:"A: L'hôtel est accueillant ?\nB: Oui, le personnel est très gentil.",
     exampleSrc:"A: Is the hotel welcoming?\nB: Yes, the staff is very kind.",
     funFact:"A top compliment for a home: 'C'est très accueillant chez toi' (your place is very welcoming)."},

    {type:"teach", trg:"autoriser", src:"to authorize, to allow", pos:"verb", gender:null,
     note:"Regular -er verb. To give official permission.",
     example:"A: Le directeur autorise la sortie ?\nB: Oui, c'est autorisé.",
     exampleSrc:"A: Does the director authorize the outing?\nB: Yes, it's authorized.",
     funFact:"'Stationnement non autorisé' (unauthorized parking) is on signs everywhere in French cities."},

    {type:"teach", trg:"autoritaire", src:"authoritarian, bossy", pos:"adj", gender:null,
     note:"Same form for both genders. Describes a domineering person.",
     example:"A: Ton chef est autoritaire ?\nB: Oui, il veut tout contrôler.",
     exampleSrc:"A: Is your boss authoritarian?\nB: Yes, he wants to control everything.",
     funFact:"'Un ton autoritaire' is a commanding tone of voice. Different from 'having authority' (being in charge)."},

    {type:"teach", trg:"assurer", src:"to ensure, to insure", pos:"verb", gender:null,
     note:"Regular -er verb. Both to guarantee and to provide insurance.",
     example:"A: Je t'assure, c'est vrai !\nB: D'accord, je te crois.",
     exampleSrc:"A: I assure you, it's true!\nB: Okay, I believe you.",
     funFact:"'S'assurer' means to make sure. 'Assurer' someone means to reassure them. Very versatile verb."},

    {type:"mc",
     q:"Quel adjectif décrit un lieu chaleureux et ouvert aux visiteurs ?",
     opts:["accueillant","autoritaire","anonyme","artificiel"],
     ans:"accueillant",
     hint:"This adjective describes places and people who make you feel warmly received."},

    {type:"teach", trg:"abandonner", src:"to abandon, to give up", pos:"verb", gender:null,
     note:"Regular -er verb. To leave behind or to quit trying.",
     example:"A: Tu abandonnes ?\nB: Non, je n'abandonne jamais !",
     exampleSrc:"A: Are you giving up?\nB: No, I never give up!",
     funFact:"'L'abandon' is also a state of relaxation: 'avec abandon' means freely, without restraint."},

    {type:"teach", trg:"l'abandon", src:"the abandonment", pos:"noun", gender:"m",
     note:"Masculine noun. The act of leaving or giving up.",
     example:"A: Le match a fini par abandon.\nB: L'équipe a abandonné ?",
     exampleSrc:"A: The match ended by forfeit.\nB: The team gave up?",
     funFact:"In sports, 'abandon' is a technical term meaning withdrawal or forfeit from a competition."},

    {type:"teach", trg:"l'accord", src:"the agreement", pos:"noun", gender:"m",
     note:"Masculine noun. 'D'accord' means 'okay'. The most common agreement word.",
     example:"A: On se voit à midi ?\nB: D'accord, à midi !",
     exampleSrc:"A: We'll meet at noon?\nB: Agreed, at noon!",
     funFact:"'D'accord' is so common that it's often shortened to just 'OK' in casual French. Full circle!"},

    {type:"teach", trg:"l'accès", src:"the access", pos:"noun", gender:"m",
     note:"Masculine noun. The ability or right to enter or use something.",
     example:"A: Tu as accès à internet ?\nB: Oui, il y a le wifi.",
     exampleSrc:"A: Do you have internet access?\nB: Yes, there's wifi.",
     funFact:"'Accès interdit' (access forbidden) is one of the most common signs you'll see in France."},

    {type:"fb",
     s:"On {1} les invités à sept heures ce soir.",
     a:["accueille"],
     opts:["accueille","autorise","assure","abandonne"],
     hint:"This verb means to warmly receive guests or visitors into your home or venue.",
     sSrc:"We {1} the guests at seven o'clock tonight."},

    {type:"teach", trg:"l'affection", src:"the affection", pos:"noun", gender:"f",
     note:"Feminine noun. Warm feelings of love or fondness.",
     example:"A: Elle a beaucoup d'affection pour ses élèves.\nB: Oui, c'est une bonne professeure.",
     exampleSrc:"A: She has a lot of affection for her students.\nB: Yes, she's a good teacher.",
     funFact:"French culture distinguishes between 'amour' (love) and 'affection' (tender fondness). Both are valued."},

    {type:"teach", trg:"l'attachement", src:"the attachment", pos:"noun", gender:"m",
     note:"Masculine noun. Emotional bond to someone or something.",
     example:"A: Son attachement à cette ville est fort.\nB: Normal, il y est né.",
     exampleSrc:"A: His attachment to this city is strong.\nB: Of course, he was born there.",
     funFact:"In psychology, 'la théorie de l'attachement' (attachment theory) is a core concept in French child development."},

    {type:"teach", trg:"l'admiration", src:"the admiration", pos:"noun", gender:"f",
     note:"Feminine noun. Deep respect and approval for someone.",
     example:"A: J'ai beaucoup d'admiration pour elle.\nB: Moi aussi, elle est remarquable.",
     exampleSrc:"A: I have a lot of admiration for her.\nB: Me too, she's remarkable.",
     funFact:"French culture values 'l'admiration' for intellectuals as much as for athletes or celebrities."},

    {type:"teach", trg:"l'acharnement", src:"the relentlessness, the determination", pos:"noun", gender:"m",
     note:"Masculine noun. Fierce, sometimes excessive persistence.",
     example:"A: Il travaille avec acharnement.\nB: Oui, il ne s'arrête jamais.",
     exampleSrc:"A: He works with fierce determination.\nB: Yes, he never stops.",
     funFact:"Can be positive (determination) or negative (harassment): 'acharnement thérapeutique' is futile medical treatment."},

    {type:"mc",
     q:"Que signifie 'd'accord' ?",
     opts:["according to","okay/agreed","with chords","with records"],
     ans:"okay/agreed",
     hint:"This is the most common way to express agreement in French, from 'accord' (agreement)."},

    {type:"teach", trg:"accumuler", src:"to accumulate, to pile up", pos:"verb", gender:null,
     note:"Regular -er verb. To gather more and more over time.",
     example:"A: Tu accumules trop de choses !\nB: Je sais, il faut faire du tri.",
     exampleSrc:"A: You're accumulating too many things!\nB: I know, I need to sort through them.",
     funFact:"'Accumuler de l'expérience' means to build up experience. A common phrase in job descriptions."},

    {type:"teach", trg:"annuler", src:"to cancel", pos:"verb", gender:null,
     note:"Regular -er verb. To call off a plan or appointment.",
     example:"A: On annule la réunion ?\nB: Oui, tout le monde est malade.",
     exampleSrc:"A: Are we canceling the meeting?\nB: Yes, everyone is sick.",
     funFact:"French trains sometimes get 'annulé' (canceled). The SNCF app shows real-time cancellations."},

    {type:"teach", trg:"applaudir", src:"to applaud, to clap", pos:"verb", gender:null,
     note:"Regular -ir verb. To clap hands in appreciation.",
     example:"A: Le public applaudit !\nB: C'est un grand succès.",
     exampleSrc:"A: The audience is applauding!\nB: It's a big success.",
     funFact:"French audiences also stamp their feet to show appreciation. A standing ovation is rare and very meaningful."},

    {type:"teach", trg:"agréablement", src:"pleasantly", pos:"adv", gender:null,
     note:"Adverb from 'agréable'. In a pleasant, enjoyable way.",
     example:"A: Tu as été agréablement surpris ?\nB: Oui, je ne m'y attendais pas !",
     exampleSrc:"A: Were you pleasantly surprised?\nB: Yes, I didn't expect it!",
     funFact:"'Agréablement surpris' (pleasantly surprised) is a very common French expression for positive discoveries."},

    {type:"fb",
     s:"Le public {1} à la fin du spectacle.",
     a:["applaudit"],
     opts:["applaudit","abandonne","annule","accumule"],
     hint:"This verb describes the hand-clapping that an audience does to show their appreciation.",
     sSrc:"The audience {1} at the end of the show."},

    {type:"match", pairs:[
      {trg:"accueillir", src:"to welcome"},
      {trg:"abandonner", src:"to give up"},
      {trg:"annuler", src:"to cancel"},
      {trg:"applaudir", src:"to applaud"},
      {trg:"accord", src:"agreement"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'to cancel' ?",
     opts:["accumuler","autoriser","annuler","abandonner"],
     ans:"annuler",
     hint:"This verb means to officially call off an event, meeting, or appointment."},

    {type:"fb",
     s:"Tu as {1} à internet ? Il me faut le wifi.",
     a:["accès"],
     opts:["accès","accord","abandon","affection"],
     hint:"This masculine noun means the ability or right to enter, reach, or use something.",
     sSrc:"Do you have {1} to the internet? I need the wifi."}
  ]
};
export default LESSON_17;
