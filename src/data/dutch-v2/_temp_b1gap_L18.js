// L18: Processes and Systems — 20 B1 gap words
const LESSON_18 = {
  id:"nlv2_b1gap_l18", title:"Processen en Systemen", icon:"\u{2699}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Processes and Systems",
     desc:"Learn Dutch vocabulary for processes, procedures, and systematic operations. Understand how things work and are organized.",
     goals:["Master 20 process and system terms","Describe procedures and steps","Talk about managing and organizing"]},

    {type:"teach", trg:"de afsluiting", src:"the closing / the conclusion", pos:"noun", gender:"c",
     note:"Common gender (de). The end or closing of something.",
     example:"A: De afsluiting van het project is volgende week.\nB: Zijn we op tijd klaar?",
     exampleSrc:"A: The closing of the project is next week.\nB: Will we be ready on time?",
     funFact:"Af + sluiting (closing). Used for road closures, project endings, and year-end ceremonies."},

    {type:"teach", trg:"afsluitbaar", src:"lockable / closable", pos:"adj", gender:null,
     note:"Adjective. Something that can be locked or closed.",
     example:"A: Is de kamer afsluitbaar?\nB: Ja, er zit een slot op de deur.",
     exampleSrc:"A: Is the room lockable?\nB: Yes, there is a lock on the door.",
     funFact:"Afsluit (close) + -baar (-able). Same pattern as English: lock + -able. Very practical Dutch."},

    {type:"teach", trg:"de aanmelding", src:"the registration", pos:"noun", gender:"c",
     note:"Common gender (de). The act of signing up.",
     example:"A: De aanmelding is gesloten.\nB: Jammer, dan moeten we tot volgend jaar wachten.",
     exampleSrc:"A: Registration is closed.\nB: Too bad, then we have to wait until next year.",
     funFact:"'Aanmelden' is the verb. The Dutch love formal registration for everything from courses to events."},

    {type:"teach", trg:"afleggen", src:"to travel / to take (an exam)", pos:"verb", gender:null,
     note:"Separable verb. Ik leg af, jij legt af.",
     example:"A: Ze moet een examen afleggen.\nB: Wanneer is dat?",
     exampleSrc:"A: She has to take an exam.\nB: When is that?",
     funFact:"Multiple meanings: 'een verklaring afleggen' (make a statement), 'een afstand afleggen' (cover a distance)."},

    {type:"mc",
     q:"Je moet morgen een examen doen. Je moet het examen ___.",
     opts:["afleggen","afsluiten","afmelden","afstappen"],
     ans:"afleggen",
     hint:"Which separable verb is used with 'examen' to mean taking a test?"},

    {type:"teach", trg:"aanvoeren", src:"to supply / to lead", pos:"verb", gender:null,
     note:"Separable verb. Ik voer aan, jij voert aan.",
     example:"A: Hij voert het team aan als kapitein.\nB: Is hij een goede leider?",
     exampleSrc:"A: He leads the team as captain.\nB: Is he a good leader?",
     funFact:"Aan + voeren (to carry/lead). 'Aanvoerder' = captain/leader. Also means to supply materials."},

    {type:"teach", trg:"afvaardigen", src:"to delegate / to send as representative", pos:"verb", gender:null,
     note:"Separable verb. Ik vaardig af, jij vaardigt af.",
     example:"A: We vaardigen twee leden af naar de vergadering.\nB: Wie gaan er?",
     exampleSrc:"A: We are delegating two members to the meeting.\nB: Who is going?",
     funFact:"Af + vaardigen (to dispatch). 'Afgevaardigde' = delegate/representative. Formal parliamentary Dutch."},

    {type:"teach", trg:"afschermen", src:"to shield / to screen off", pos:"verb", gender:null,
     note:"Separable verb. Ik scherm af, jij schermt af.",
     example:"A: We moeten het terrein afschermen.\nB: Met een hek of een muur?",
     exampleSrc:"A: We need to screen off the area.\nB: With a fence or a wall?",
     funFact:"Af + schermen (to fence/screen). Also used digitally: 'data afschermen' = to protect data."},

    {type:"teach", trg:"afhouden", src:"to keep off / to withhold", pos:"verb", gender:null,
     note:"Separable verb. Ik houd af, jij houdt af.",
     example:"A: Ze houdt belasting af van je salaris.\nB: Hoeveel procent?",
     exampleSrc:"A: She withholds tax from your salary.\nB: What percentage?",
     funFact:"Af + houden (to hold). Tax withholding is 'loonheffing afhouden' in Dutch payroll language."},

    {type:"teach", trg:"afgeven", src:"to hand over / to give off", pos:"verb", gender:null,
     note:"Separable verb. Ik geef af, jij geeft af.",
     example:"A: Geef je paspoort af bij de balie.\nB: Krijg ik het weer terug?",
     exampleSrc:"A: Hand over your passport at the desk.\nB: Will I get it back?",
     funFact:"Multiple meanings: hand something over, give off a smell, or criticize someone (informal)."},

    {type:"fb",
     s:"De bewakers {1} het terrein ___ met hekken en camera's.",
     a:["schermen af"],
     opts:["schermen af","geven af","houden af","leggen af"],
     hint:"Which separable verb means to protect or screen off an area?",
     sSrc:"The guards {1} the area with fences and cameras."},

    {type:"teach", trg:"afkappen", src:"to cut off / to put a stop to", pos:"verb", gender:null,
     note:"Separable verb. Ik kap af, jij kapt af.",
     example:"A: De voorzitter kapte de discussie af.\nB: Er was geen tijd meer.",
     exampleSrc:"A: The chairman cut off the discussion.\nB: There was no more time.",
     funFact:"Af + kappen (to chop). You 'chop off' a conversation. Also used for chopping trees."},

    {type:"teach", trg:"afkicken", src:"to kick a habit / to detox", pos:"verb", gender:null,
     note:"Separable verb. Ik kick af, jij kickt af.",
     example:"A: Hij probeert af te kicken van sigaretten.\nB: Dat is heel moeilijk.",
     exampleSrc:"A: He is trying to quit smoking.\nB: That is very difficult.",
     funFact:"Af + kicken (from English 'kick'). Dutch slang that became standard. 'Afkickkliniek' = rehab clinic."},

    {type:"teach", trg:"de afstap", src:"the departure / the step away", pos:"noun", gender:"c",
     note:"Common gender (de). Leaving or stepping away from something.",
     example:"A: Zijn afstap als directeur was onverwacht.\nB: Niemand had het verwacht.",
     exampleSrc:"A: His departure as director was unexpected.\nB: Nobody expected it.",
     funFact:"Af + stap (step). A formal word for someone leaving a position or role."},

    {type:"teach", trg:"de aftakeling", src:"the deterioration / the decline", pos:"noun", gender:"c",
     note:"Common gender (de). Gradual decay or worsening.",
     example:"A: De aftakeling van het gebouw is zichtbaar.\nB: Het moet dringend gerenoveerd worden.",
     exampleSrc:"A: The deterioration of the building is visible.\nB: It urgently needs renovation.",
     funFact:"From 'aftakelen' (originally: to de-rig a ship). The masts are taken down, leaving a bare hull."},

    {type:"mc",
     q:"De voorzitter stopte het gesprek. Hij ___ de discussie ___.",
     opts:["kapte ... af","schermde ... af","gaf ... af","hield ... af"],
     ans:"kapte ... af",
     hint:"Which verb means to abruptly end or cut short a conversation?"},

    {type:"teach", trg:"achten", src:"to consider / to regard", pos:"verb", gender:null,
     note:"Regular verb. Ik acht, jij acht.",
     example:"A: Ik acht het nodig om te vertrekken.\nB: Waarom? Is er iets mis?",
     exampleSrc:"A: I consider it necessary to leave.\nB: Why? Is something wrong?",
     funFact:"Very formal Dutch. 'Ik acht' sounds judicial. Related to 'achting' (esteem) and 'verachten' (to despise)."},

    {type:"teach", trg:"achterstellen", src:"to discriminate against / to put behind", pos:"verb", gender:null,
     note:"Separable verb. Ik stel achter, jij stelt achter.",
     example:"A: Ze voelen zich achtergesteld.\nB: Dat is oneerlijk.",
     exampleSrc:"A: They feel discriminated against.\nB: That is unfair.",
     funFact:"Achter + stellen (to place). You 'place someone behind'. 'Achterstelling' = discrimination/disadvantage."},

    {type:"teach", trg:"bekomen", src:"to recover / to get over", pos:"verb", gender:null,
     note:"Inseparable verb. Ik bekom, jij bekomt. Often with 'van'.",
     example:"A: Ben je al bekomen van de schrik?\nB: Ja, het gaat weer.",
     exampleSrc:"A: Have you recovered from the fright?\nB: Yes, I'm okay again.",
     funFact:"Be- + komen (to come). You 'come over' an experience. More common in Belgium than in the Netherlands."},

    {type:"teach", trg:"bekoren", src:"to charm / to captivate", pos:"verb", gender:null,
     note:"Inseparable verb. Ik bekoor, jij bekoort.",
     example:"A: De stad bekoort veel toeristen.\nB: Ja, de grachten zijn prachtig.",
     exampleSrc:"A: The city captivates many tourists.\nB: Yes, the canals are beautiful.",
     funFact:"Related to 'keuze' (choice). Something that 'bekoors' you makes you want to choose it. Poetic Dutch."},

    {type:"match", pairs:[
      {trg:"afsluiting", src:"closing/conclusion"},
      {trg:"afleggen", src:"to take (an exam)"},
      {trg:"afkicken", src:"to kick a habit"},
      {trg:"achterstellen", src:"to discriminate against"},
      {trg:"bekoren", src:"to charm"}
    ]},

    {type:"fb",
     s:"Hij probeert af te {1} van zijn verslaving aan koffie.",
     a:["kicken"],
     opts:["kicken","kappen","leggen","schermen"],
     hint:"Which word completes 'af te ___' meaning to quit an addictive habit?",
     sSrc:"He is trying to {1} his coffee addiction."},

    {type:"mc",
     q:"Een groep mensen wordt oneerlijk behandeld en krijgt minder kansen. Ze worden ___.",
     opts:["achtergesteld","afgeschermd","afgekickt","afgelegd"],
     ans:"achtergesteld",
     hint:"Which past participle means being unfairly put at a disadvantage?"}
  ]
};
export default LESSON_18;
