// L11: Actions and Decisions — 20 B1 gap words
const LESSON_11 = {
  id:"nlv2_b1gap_l11", title:"Handelen en Beslissen", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Actions and Decisions",
     desc:"Learn Dutch verbs for making decisions, taking action, and reacting to situations. Strengthen your ability to describe what people do.",
     goals:["Master 20 action and decision verbs","Express choices and reactions","Describe processes and changes"]},

    {type:"teach", trg:"afwijken", src:"to deviate / to differ", pos:"verb", gender:null,
     note:"Separable verb. Ik wijk af, jij wijkt af.",
     example:"A: Dit resultaat wijkt af van de verwachting.\nB: Wat is er anders?",
     exampleSrc:"A: This result deviates from the expectation.\nB: What is different?",
     funFact:"Af (off) + wijken (to yield/move). You 'move off' the expected path."},

    {type:"teach", trg:"de afwijking", src:"the deviation / the abnormality", pos:"noun", gender:"c",
     note:"Common gender (de). From 'afwijken' (to deviate).",
     example:"A: Er is een afwijking in de test.\nB: Is dat ernstig?",
     exampleSrc:"A: There is an abnormality in the test.\nB: Is that serious?",
     funFact:"Used in medical, statistical, and everyday contexts. The -ing suffix turns verbs into nouns."},

    {type:"teach", trg:"aandringen", src:"to insist / to urge", pos:"verb", gender:null,
     note:"Separable verb. Ik dring aan, jij dringt aan.",
     example:"A: Ze drong aan op een antwoord.\nB: Ze wil het nu weten.",
     exampleSrc:"A: She insisted on an answer.\nB: She wants to know now.",
     funFact:"Aan (on) + dringen (to push/press). You 'push on' someone to get what you want."},

    {type:"teach", trg:"behouden", src:"to keep / to retain", pos:"verb", gender:null,
     note:"Inseparable verb. Ik behoud, jij behoudt.",
     example:"A: We willen onze traditie behouden.\nB: Dat is belangrijk voor de gemeenschap.",
     exampleSrc:"A: We want to keep our tradition.\nB: That is important for the community.",
     funFact:"Be- + houden (to hold). You 'hold onto' something. 'Behoudend' (conservative) comes from the same root."},

    {type:"mc",
     q:"De resultaten ___ van wat we verwachtten. Er is iets veranderd.",
     opts:["wijken af","dringen aan","houden be","schaffen af"],
     ans:"wijken af",
     hint:"Which separable verb means the results are different from what was expected?"},

    {type:"teach", trg:"beheersen", src:"to master / to control", pos:"verb", gender:null,
     note:"Inseparable verb. Ik beheers, jij beheerst.",
     example:"A: Hij beheerst drie talen.\nB: Welke?",
     exampleSrc:"A: He masters three languages.\nB: Which ones?",
     funFact:"Be- + heersen (to rule). To master something is to 'rule over' it. Also means emotional self-control."},

    {type:"teach", trg:"beheren", src:"to manage / to administer", pos:"verb", gender:null,
     note:"Inseparable verb. Ik beheer, jij beheert.",
     example:"A: Wie beheert de website?\nB: Dat doet onze IT-afdeling.",
     exampleSrc:"A: Who manages the website?\nB: Our IT department does that.",
     funFact:"Different from 'beheersen'. 'Beheren' is about managing resources; 'beheersen' is about mastery or control."},

    {type:"teach", trg:"de beheerder", src:"the manager / the administrator", pos:"noun", gender:"c",
     note:"Common gender (de). From 'beheren' (to manage).",
     example:"A: De beheerder van het gebouw is er niet.\nB: Bel hem op zijn mobiel.",
     exampleSrc:"A: The building manager is not here.\nB: Call him on his mobile.",
     funFact:"Used for building managers, website admins, and fund managers. Very versatile."},

    {type:"teach", trg:"aangeven", src:"to indicate / to declare", pos:"verb", gender:null,
     note:"Separable verb. Ik geef aan, jij geeft aan.",
     example:"A: Kun je je voorkeur aangeven?\nB: Ik heb liever de middag.",
     exampleSrc:"A: Can you indicate your preference?\nB: I prefer the afternoon.",
     funFact:"Aan (on) + geven (to give). Multiple meanings: indicate, declare (customs), or hand over."},

    {type:"fb",
     s:"Hij {1} vijf talen vloeiend. Heel indrukwekkend!",
     a:["beheerst"],
     opts:["beheerst","beheert","behoudt","aangeeft"],
     hint:"Which verb means to have complete command of something, like a language?",
     sSrc:"He {1} five languages fluently. Very impressive!"},

    {type:"teach", trg:"afschaffen", src:"to abolish / to get rid of", pos:"verb", gender:null,
     note:"Separable verb. Ik schaf af, jij schaft af.",
     example:"A: Ze willen de wet afschaffen.\nB: Waarom? Wat is er mis mee?",
     exampleSrc:"A: They want to abolish the law.\nB: Why? What is wrong with it?",
     funFact:"Af (off) + schaffen (to create/obtain). Opposite of 'aanschaffen'. You 'uncreate' something."},

    {type:"teach", trg:"afraden", src:"to advise against", pos:"verb", gender:null,
     note:"Separable verb. Ik raad af, jij raadt af.",
     example:"A: De arts raadt roken af.\nB: Dat snap ik.",
     exampleSrc:"A: The doctor advises against smoking.\nB: I understand that.",
     funFact:"Af (off) + raden (to advise). The opposite of 'aanraden' (to recommend). A neat Dutch pair."},

    {type:"teach", trg:"aanwijzen", src:"to point out / to appoint", pos:"verb", gender:null,
     note:"Separable verb. Ik wijs aan, jij wijst aan.",
     example:"A: Kun je de weg aanwijzen?\nB: Ja, je moet daar rechts.",
     exampleSrc:"A: Can you point out the way?\nB: Yes, you need to go right there.",
     funFact:"Aan (on) + wijzen (to point). You 'point onto' something. Also means to designate or appoint."},

    {type:"teach", trg:"afwachten", src:"to wait and see", pos:"verb", gender:null,
     note:"Separable verb. Ik wacht af, jij wacht af.",
     example:"A: We moeten het resultaat afwachten.\nB: Goed, laten we geduldig zijn.",
     exampleSrc:"A: We must wait for the result.\nB: Good, let's be patient.",
     funFact:"Af (off) + wachten (to wait). Very Dutch: 'even afwachten' expresses the pragmatic Dutch wait-and-see attitude."},

    {type:"mc",
     q:"De dokter ___ je om alcohol te drinken als je medicijnen slikt.",
     opts:["raadt af","wijst aan","geeft aan","dringt aan"],
     ans:"raadt af",
     hint:"Which separable verb means the doctor recommends you NOT do something?"},

    {type:"teach", trg:"afvragen", src:"to wonder", pos:"verb", gender:null,
     note:"Reflexive: 'zich afvragen'. Ik vraag me af.",
     example:"A: Ik vraag me af of hij komt.\nB: Stuur hem een berichtje.",
     exampleSrc:"A: I wonder if he is coming.\nB: Send him a text message.",
     funFact:"Af (off) + vragen (to ask). You 'ask off' yourself a question. Always used reflexively."},

    {type:"teach", trg:"aanleggen", src:"to install / to create", pos:"verb", gender:null,
     note:"Separable verb. Ik leg aan, jij legt aan.",
     example:"A: We gaan een tuin aanleggen.\nB: Wat leuk! Met bloemen?",
     exampleSrc:"A: We are going to create a garden.\nB: How nice! With flowers?",
     funFact:"Aan (on) + leggen (to lay). Used for gardens, infrastructure, and reserves. Versatile verb."},

    {type:"teach", trg:"aansluiten", src:"to connect / to join", pos:"verb", gender:null,
     note:"Separable verb. Ik sluit aan, jij sluit aan.",
     example:"A: Wil je je aansluiten bij ons team?\nB: Ja, graag!",
     exampleSrc:"A: Do you want to join our team?\nB: Yes, I would like to!",
     funFact:"Aan (on) + sluiten (to close/lock). You 'lock onto' something. Also means to connect utilities."},

    {type:"teach", trg:"afstemmen", src:"to coordinate / to tune", pos:"verb", gender:null,
     note:"Separable verb. Ik stem af, jij stemt af.",
     example:"A: We moeten onze plannen afstemmen.\nB: Goed idee, laten we overleggen.",
     exampleSrc:"A: We need to coordinate our plans.\nB: Good idea, let's consult.",
     funFact:"Af + stemmen (to vote/tune). Originally 'tune a radio', now means to align or coordinate. Very business Dutch."},

    {type:"match", pairs:[
      {trg:"afwijken", src:"to deviate"},
      {trg:"behouden", src:"to keep/retain"},
      {trg:"afschaffen", src:"to abolish"},
      {trg:"afvragen", src:"to wonder"},
      {trg:"aansluiten", src:"to join/connect"}
    ]},

    {type:"fb",
     s:"We moeten onze schema's op elkaar {1} zodat we samenwerken.",
     a:["afstemmen"],
     opts:["afstemmen","aansluiten","aanleggen","afwachten"],
     hint:"Which verb means to coordinate or align schedules with each other?",
     sSrc:"We need to {1} our schedules so that we can collaborate."},

    {type:"mc",
     q:"Ik ___ me ___ waarom hij niet belt. Misschien is hij druk.",
     opts:["vraag ... af","wacht ... af","wijs ... aan","sluit ... aan"],
     ans:"vraag ... af",
     hint:"Which reflexive separable verb means to ponder or wonder about something?"}
  ]
};
export default LESSON_11;
