// L02: Help, Aid, and Assistance
const LESSON_2 = {
  id:"nlv2_b2g6_l2", title:"Hulp en Bijstand", icon:"\uD83E\uDD1D", xp:15, board:true,
  steps:[
    {type:"intro", title:"Help, Aid, and Assistance",
     desc:"Learn vocabulary related to helping others, aid organizations, and support systems. The Netherlands has a strong tradition of humanitarian work and social safety nets.",
     goals:["Learn 10 words about help and assistance","Discuss aid organizations and social support","Understand Dutch humanitarian vocabulary"]},

    {type:"teach", trg:"de hulpverlening", src:"the aid, the assistance (professional)", pos:"noun", gender:"c",
     note:"Compound: hulp (help) + verlening (provision).\nUsed for professional or institutional aid.",
     example:"A: De hulpverlening was snel ter plaatse.\nB: Gelukkig maar, het was een ernstig ongeluk.\nA: De ambulance was er binnen vijf minuten.\nB: Dat is de Nederlandse standaard.",
     exampleSrc:"A: The emergency services were quickly on the scene.\nB: Fortunately, it was a serious accident.\nA: The ambulance was there within five minutes.\nB: That is the Dutch standard.",
     funFact:"The Dutch emergency number is 112, shared with all EU countries. Response times in the Netherlands average under 15 minutes."},

    {type:"teach", trg:"de hulporganisatie", src:"the aid organization", pos:"noun", gender:"c",
     note:"Compound: hulp (help) + organisatie (organization).\nThink of NGOs and charities.",
     example:"A: Welke hulporganisatie steun jij?\nB: Artsen zonder Grenzen.\nA: Dat is een goede keuze.\nB: Ze doen ongelooflijk belangrijk werk.",
     exampleSrc:"A: Which aid organization do you support?\nB: Doctors Without Borders.\nA: That is a good choice.\nB: They do incredibly important work.",
     funFact:"The Netherlands is one of the world's most generous countries for charitable giving. The 'Giro555' system raises millions during disasters."},

    {type:"teach", trg:"de hulpkreet", src:"the cry for help", pos:"noun", gender:"c",
     note:"Compound: hulp (help) + kreet (cry, shout).\nUsed literally and figuratively.",
     example:"A: Zijn gedrag is een hulpkreet.\nB: Denk je dat hij hulp nodig heeft?\nA: Absoluut, we moeten iets doen.\nB: Laten we met hem praten.",
     exampleSrc:"A: His behavior is a cry for help.\nB: Do you think he needs help?\nA: Absolutely, we need to do something.\nB: Let us talk to him.",
     funFact:"The Dutch mental health system uses 'hulpkreet' both clinically and colloquially. It carries no stigma in modern Dutch society."},

    {type:"teach", trg:"humaan", src:"humane", pos:"adj", gender:null,
     note:"From Latin 'humanus' (human).\nUsed for compassionate, dignified treatment.",
     example:"A: We moeten een humane oplossing vinden.\nB: Daar ben ik het mee eens.\nA: Het gaat om menselijke waardigheid.\nB: Precies, dat is het belangrijkste.",
     exampleSrc:"A: We must find a humane solution.\nB: I agree with that.\nA: It is about human dignity.\nB: Exactly, that is the most important thing.",
     funFact:"Dutch euthanasia law is considered one of the most humane in the world. The word 'humaan' appears frequently in these discussions."},

    {type:"teach", trg:"humanistisch", src:"humanistic", pos:"adj", gender:null,
     note:"Related to humanism, a philosophy centered on human values.\nThe Dutch have a strong humanist tradition.",
     example:"A: Zij heeft een humanistische achtergrond.\nB: Wat houdt dat precies in?\nA: Een levenshouding zonder religie.\nB: Maar wel met sterke waarden.",
     exampleSrc:"A: She has a humanistic background.\nB: What does that mean exactly?\nA: A philosophy of life without religion.\nB: But with strong values.",
     funFact:"The Humanistisch Verbond (Humanist Alliance) is a major Dutch organization. About 25% of Dutch people identify as humanist."},

    {type:"mc",
     q:"Wat is een 'hulpkreet'?",
     opts:["Een noodkreet om hulp","Een hulpmiddel voor het gehoor","Een organisatie voor noodhulp","Een eerste hulp cursus"],
     ans:"Een noodkreet om hulp",
     hint:"Break the compound: h... means help, kreet means a shout or cry."},

    {type:"teach", trg:"de hulpvrager", src:"the help-seeker, the person asking for help", pos:"noun", gender:"c",
     note:"Compound: hulp (help) + vrager (asker).\nUsed in social work and healthcare contexts.",
     example:"A: De hulpvrager wordt altijd serieus genomen.\nB: Dat is heel belangrijk.\nA: Niemand zou zich moeten schamen.\nB: Hulp vragen is een teken van kracht.",
     exampleSrc:"A: The help-seeker is always taken seriously.\nB: That is very important.\nA: Nobody should feel ashamed.\nB: Asking for help is a sign of strength.",
     funFact:"Dutch social workers are trained to empower 'hulpvragers' rather than create dependency. The focus is on self-sufficiency."},

    {type:"teach", trg:"de harmonie", src:"the harmony", pos:"noun", gender:"c",
     note:"From Greek 'harmonia' (joining, agreement).\nAlso a type of music ensemble in Dutch.",
     example:"A: Er heerst harmonie in het team.\nB: Dat merk je aan de sfeer.\nA: Iedereen respecteert elkaar.\nB: Zo hoort het ook.",
     exampleSrc:"A: There is harmony in the team.\nB: You can tell from the atmosphere.\nA: Everyone respects each other.\nB: That is how it should be.",
     funFact:"In the Netherlands, a 'harmonie' is also a brass and woodwind ensemble. Almost every Dutch village has its own harmonieorkest."},

    {type:"teach", trg:"de handdruk", src:"the handshake", pos:"noun", gender:"c",
     note:"Compound: hand + druk (pressure, press).\nA firm handshake is important in Dutch culture.",
     example:"A: Een stevige handdruk maakt een goede indruk.\nB: Dat is zo in Nederland.\nA: Niet te slap, niet te hard.\nB: En altijd met oogcontact.",
     exampleSrc:"A: A firm handshake makes a good impression.\nB: That is the case in the Netherlands.\nA: Not too weak, not too hard.\nB: And always with eye contact.",
     funFact:"The Dutch handshake is firm and brief. Three kisses on the cheek (right-left-right) are reserved for close friends and family."},

    {type:"fb",
     s:"De {1} was snel ter plaatse na het ongeluk.",
     a:["hulpverlening"],
     opts:["hulpverlening","hulpkreet","harmonie","handdruk"],
     hint:"The professional emergency assistance that arrives at an accident scene.",
     sSrc:"The {1} was quickly on the scene after the accident."},

    {type:"teach", trg:"de handpalm", src:"the palm (of the hand)", pos:"noun", gender:"c",
     note:"Compound: hand + palm.\nThe flat inner surface of your hand.",
     example:"A: Hij had pijn in zijn handpalm.\nB: Van het roeien?\nA: Ja, drie uur lang zonder handschoenen.\nB: Dat klinkt pijnlijk.",
     exampleSrc:"A: He had pain in his palm.\nB: From rowing?\nA: Yes, three hours without gloves.\nB: That sounds painful.",
     funFact:"The Dutch expression 'als je handpalm' (flat as your palm) describes something completely flat, fitting for the Netherlands itself."},

    {type:"teach", trg:"huldigen", src:"to pay tribute to, to honor", pos:"verb", gender:null,
     note:"From 'hulde' (tribute, homage).\nUsed for honoring sports champions or heroes.",
     example:"A: De kampioenen werden gehuldigd op het plein.\nB: Was er veel publiek?\nA: Duizenden mensen kwamen kijken.\nB: Dat is altijd een groot feest.",
     exampleSrc:"A: The champions were honored in the square.\nB: Was there a big audience?\nA: Thousands of people came to watch.\nB: That is always a big celebration.",
     funFact:"The Dutch 'huldiging' after football championships draws hundreds of thousands. Ajax and Feyenoord celebrations are legendary."},

    {type:"mc",
     q:"Wat betekent 'humaan'?",
     opts:["Ouderwets en traditioneel","Menselijk en medelevend","Grappig en humoristisch","Heel erg moe"],
     ans:"Menselijk en medelevend",
     hint:"Think of the Latin root 'humanus'. It relates to treating people with dignity and compassion."},

    {type:"match", pairs:[
      {trg:"hulpverlening", src:"professional aid"},
      {trg:"hulporganisatie", src:"aid organization"},
      {trg:"hulpvrager", src:"help-seeker"},
      {trg:"hulpkreet", src:"cry for help"}
    ]},

    {type:"fb",
     s:"De kampioenen werden {1} op het stadhuisplein.",
     a:["gehuldigd"],
     opts:["gehuldigd","geholpen","gehoord","gehouden"],
     hint:"Past participle of the verb meaning to pay tribute or honor someone publicly.",
     sSrc:"The champions were {1} at the town hall square."},

    {type:"mc",
     q:"Wat is een 'harmonie' in de muziek?",
     opts:["Een strijkorkest","Een rockband","Een blaasorkest","Een koor"],
     ans:"Een blaasorkest",
     hint:"In Dutch music tradition, this word refers to a specific type of ensemble with brass and woodwind instruments."}
  ]
};
export default LESSON_2;
