// L20: Review and Integration
const LESSON_20 = {
  id:"nlv2_b2g6_l20", title:"Herhaling en Integratie", icon:"\uD83C\uDF1F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Review and Integration",
     desc:"Review and consolidate the vocabulary from all previous lessons in this unit. Test your knowledge across themes including housing, help, creativity, trade, education, and Dutch culture.",
     goals:["Review vocabulary from all 19 lessons","Test cross-thematic knowledge","Consolidate B2 Dutch vocabulary"]},

    {type:"mc",
     q:"Wat is de betekenis van 'de huisbaas'?",
     opts:["De verhuurder van een woning","De directeur van een bedrijf","De vader van het gezin","De burgemeester van een stad"],
     ans:"De verhuurder van een woning",
     hint:"Compound of 'huis' (house) and 'baas' (boss). The person who owns the property you rent."},

    {type:"fb",
     s:"De {1} hebben geld ingezameld voor de slachtoffers van de aardbeving.",
     a:["hulporganisaties"],
     opts:["hulporganisaties","hulpvragers","hulpkreten","hulpverleners"],
     hint:"Organizations dedicated to providing aid. Compound of 'hulp' and 'organisatie', plural form.",
     sSrc:"The {1} have raised money for the victims of the earthquake."},

    {type:"mc",
     q:"Wat betekent 'improviseren'?",
     opts:["Iets imiteren van iemand anders","Iets ter plekke verzinnen zonder voorbereiding","Iets heel precies plannen","Iets importeren uit het buitenland"],
     ans:"Iets ter plekke verzinnen zonder voorbereiding",
     hint:"To create something spontaneously, without a plan or script. Very Dutch: just do it."},

    {type:"match", pairs:[
      {trg:"imposant", src:"imposing"},
      {trg:"immuun", src:"immune"},
      {trg:"ietwat", src:"somewhat"},
      {trg:"immaterieel", src:"intangible"}
    ]},

    {type:"fb",
     s:"Het voorvoegsel 'her-' betekent '{1}' in het Nederlands.",
     a:["opnieuw"],
     opts:["opnieuw","niet","samen","weg"],
     hint:"What does her-vormen (re-form), her-vinden (re-find), and her-structureren (re-structure) all have in common?",
     sSrc:"The prefix 'her-' means '{1}' in Dutch."},

    {type:"mc",
     q:"Wat bestudeert een 'historicus'?",
     opts:["De wiskunde","De muziek","De geschiedenis","De natuur"],
     ans:"De geschiedenis",
     hint:"From Latin 'historicus'. A scholar who studies the past and writes about historical events."},

    {type:"match", pairs:[
      {trg:"examencommissie", src:"exam board"},
      {trg:"honorarium", src:"professional fee"},
      {trg:"horoscoop", src:"horoscope"},
      {trg:"breuk", src:"fracture/break"}
    ]},

    {type:"fb",
     s:"De keeper maakte een spectaculaire {1} om het doelpunt te voorkomen.",
     a:["duik"],
     opts:["duik","sprong","trap","slag"],
     hint:"A sudden dive through the air, like a goalkeeper reaching for the ball.",
     sSrc:"The goalkeeper made a spectacular {1} to prevent the goal."},

    {type:"mc",
     q:"Wat is een 'geuzennaam'?",
     opts:["Een koninklijke titel","Een meisjesnaam","Een achternaam uit de middeleeuwen","Een scheldnaam die met trots wordt gedragen"],
     ans:"Een scheldnaam die met trots wordt gedragen",
     hint:"Named after the Geuzen, Dutch rebels who adopted an insult as their proud identity."},

    {type:"match", pairs:[
      {trg:"hockey", src:"field hockey"},
      {trg:"honkbal", src:"baseball"},
      {trg:"festivalganger", src:"festival-goer"},
      {trg:"hartenlust", src:"heart's content"}
    ]},

    {type:"fb",
     s:"De {1} op de Noordpool smelt steeds sneller door klimaatverandering.",
     a:["ijskap"],
     opts:["ijskap","ijskast","ijsberg","ijsbaan"],
     hint:"The frozen covering over the polar region. Compound of 'ijs' (ice) and 'kap' (cap).",
     sSrc:"The {1} on the North Pole is melting ever faster due to climate change."},

    {type:"mc",
     q:"Wat is 'in acht nemen'?",
     opts:["Rekening houden met, naleven","Acht dagen wachten","Iets in acht delen splitsen","Acht keer herhalen"],
     ans:"Rekening houden met, naleven",
     hint:"A very formal fixed expression. You will find it in every official regulation about following rules."},

    {type:"match", pairs:[
      {trg:"hulpverlening", src:"professional aid"},
      {trg:"handdruk", src:"handshake"},
      {trg:"harmonie", src:"harmony"},
      {trg:"huldigen", src:"to honor"}
    ]},

    {type:"fb",
     s:"Nederland was in de zeventiende eeuw een echte {1} met de grootste vloot ter wereld.",
     a:["grootmacht"],
     opts:["grootmacht","handelshuis","handelspost","hotelketen"],
     hint:"A nation with dominant global power and influence. Compound of 'groot' (great) and 'macht' (power).",
     sSrc:"The Netherlands was a true {1} in the seventeenth century with the largest fleet in the world."},

    {type:"mc",
     q:"Welk woord beschrijft iemand die zijn ware roeping niet heeft gevolgd?",
     opts:["Hiërarchisch","Gemankeerd","Humanistisch","Idealistisch"],
     ans:"Gemankeerd",
     hint:"From French 'manquer' (to miss). A frustrated artist or musician who ended up in a different career."},

    {type:"match", pairs:[
      {trg:"gij", src:"thou (archaic you)"},
      {trg:"geluksonderzoek", src:"happiness research"},
      {trg:"cybercriminaliteit", src:"cybercrime"},
      {trg:"continuïteit", src:"continuity"}
    ]},

    {type:"fb",
     s:"Wij {1} uw genereuze bijdrage in dank.",
     a:["aanvaarden"],
     opts:["aanvaarden","aannemen","accepteren","ontvangen"],
     hint:"A formal verb meaning to accept. Part of the fixed expression 'in dank a...'.",
     sSrc:"We {1} your generous contribution with gratitude."},

    {type:"mc",
     q:"Hoeveel kilo drop eten Nederlanders per jaar?",
     opts:["Minder dan 1 miljoen kilo","Nederland eet geen drop","Meer dan 30 miljoen kilo","Ongeveer 5 miljoen kilo"],
     ans:"Meer dan 30 miljoen kilo",
     hint:"The Netherlands is the world's largest consumer of licorice per capita. The number is impressive."}
  ]
};
export default LESSON_20;
