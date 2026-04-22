// L08: Education and Learning, 20 B1 gap words
const LESSON_8 = {
  id:"nlv2_b1gap_l8", title:"Onderwijs en Leren", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Education and Learning",
     desc:"Learn Dutch vocabulary for schools, education systems, and learning. Navigate the Dutch education landscape.",
     goals:["Master 20 education terms","Discuss schools and levels","Talk about learning and skills"]},

    {type:"teach", trg:"academisch", src:"academic", pos:"adj", gender:null,
     note:"Adjective. Related to universities or scholarly work.",
     example:"A: Ze heeft een academische opleiding.\nB: Aan welke universiteit?",
     exampleSrc:"A: She has an academic education.\nB: At which university?",
     funFact:"Dutch distinguishes between 'academisch' (university) and 'hbo' (applied sciences). Both are higher education."},

    {type:"teach", trg:"het beginniveau", src:"the beginner level", pos:"noun", gender:"n",
     note:"Neuter gender (het). Begin + niveau compound.",
     example:"A: Wat is je beginniveau in Nederlands?\nB: Ik ben helemaal nieuw.",
     exampleSrc:"A: What is your beginner level in Dutch?\nB: I am completely new.",
     funFact:"Dutch language courses use CEFR levels (A1-C2). 'Beginniveau' is usually A1."},

    {type:"teach", trg:"de basiseducatie", src:"basic education", pos:"noun", gender:"c",
     note:"Common gender (de). Basis + educatie compound.",
     example:"A: Basiseducatie is een recht voor iedereen.\nB: Ja, ook voor volwassenen.",
     exampleSrc:"A: Basic education is a right for everyone.\nB: Yes, also for adults.",
     funFact:"In the Netherlands, 'basiseducatie' often refers to adult literacy programs, not just primary school."},

    {type:"teach", trg:"het basisschoolkind", src:"the primary school child", pos:"noun", gender:"n",
     note:"Neuter gender (het). Basisschool + kind compound.",
     example:"A: Hoeveel basisschoolkinderen zijn er in deze wijk?\nB: Ongeveer driehonderd.",
     exampleSrc:"A: How many primary school children are in this neighborhood?\nB: About three hundred.",
     funFact:"Dutch kids attend 'basisschool' from age 4 to 12. Group 1-8 instead of grades."},

    {type:"mc",
     q:"Kinderen van 4 tot 12 jaar gaan naar de ___.",
     opts:["basisschool","universiteit","basiseducatie","adviesbureau"],
     ans:"basisschool",
     hint:"Think about the school level that comes before secondary education."},

    {type:"teach", trg:"begeleiden", src:"to guide / to supervise", pos:"verb", gender:null,
     note:"Inseparable verb. Ik begeleid, jij begeleidt.",
     example:"A: Wie begeleidt de stagiair?\nB: Dat doe ik deze week.",
     exampleSrc:"A: Who is supervising the intern?\nB: I am doing that this week.",
     funFact:"Be- prefix + geleiden (to lead). Very common in Dutch education: teachers 'begeleiden' students."},

    {type:"teach", trg:"de begeleider", src:"the supervisor / the mentor", pos:"noun", gender:"c",
     note:"Common gender (de). From 'begeleiden' (to guide).",
     example:"A: Mijn begeleider op stage is heel aardig.\nB: Wat fijn! Leer je veel?",
     exampleSrc:"A: My internship supervisor is very nice.\nB: How nice! Are you learning a lot?",
     funFact:"Every Dutch university student has a 'scriptiebegeleider' (thesis supervisor)."},

    {type:"teach", trg:"behalen", src:"to achieve / to obtain", pos:"verb", gender:null,
     note:"Inseparable verb. Ik behaal, jij behaalt.",
     example:"A: Ze heeft haar diploma behaald.\nB: Gefeliciteerd! Wat knap.",
     exampleSrc:"A: She obtained her diploma.\nB: Congratulations! How impressive.",
     funFact:"'Een diploma behalen' is the standard phrase. You 'fetch' your diploma through hard work."},

    {type:"teach", trg:"aanleren", src:"to learn / to teach (a skill)", pos:"verb", gender:null,
     note:"Separable verb. Ik leer aan, jij leert aan.",
     example:"A: Kun je me fietsen aanleren?\nB: Natuurlijk, het is makkelijk!",
     exampleSrc:"A: Can you teach me to cycle?\nB: Of course, it is easy!",
     funFact:"'Leren' alone means both 'to learn' and 'to teach' in Dutch. 'Aanleren' emphasizes acquiring a new skill."},

    {type:"fb",
     s:"Ze heeft haar masterdiploma {1}. Ze is geslaagd!",
     a:["behaald"],
     opts:["behaald","begeleid","aangeleerd","afgebeeld"],
     hint:"Which past participle means successfully obtaining a diploma or degree?",
     sSrc:"She has {1} her master's degree. She passed!"},

    {type:"teach", trg:"de basiswoordenschat", src:"the basic vocabulary", pos:"noun", gender:"c",
     note:"Common gender (de). Basis + woordenschat (vocabulary).",
     example:"A: Je hebt een goede basiswoordenschat.\nB: Dank je, ik oefen veel.",
     exampleSrc:"A: You have a good basic vocabulary.\nB: Thanks, I practice a lot.",
     funFact:"The Dutch 'basiswoordenschat' for NT2 learners covers about 3,000 words for basic communication."},

    {type:"teach", trg:"de alinea", src:"the paragraph", pos:"noun", gender:"c",
     note:"Common gender (de). A section of text.",
     example:"A: Lees de eerste alinea voor.\nB: 'Het verhaal begint in Amsterdam...'",
     exampleSrc:"A: Read the first paragraph aloud.\nB: 'The story begins in Amsterdam...'",
     funFact:"From Italian 'a linea' (to a new line). Used in schools when teaching writing structure."},

    {type:"teach", trg:"de afkorting", src:"the abbreviation", pos:"noun", gender:"c",
     note:"Common gender (de). From 'afkorten' (to shorten).",
     example:"A: Wat betekent de afkorting 'hbo'?\nB: Hoger beroepsonderwijs.",
     exampleSrc:"A: What does the abbreviation 'hbo' mean?\nB: Higher professional education.",
     funFact:"Dutch loves abbreviations: hbo, mbo, vmbo, havo, vwo. The education system has many levels."},

    {type:"teach", trg:"de aanmelding", src:"the registration / the enrollment", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanmelden' (to register).",
     example:"A: De aanmelding voor het nieuwe schooljaar is open.\nB: Wanneer is de deadline?",
     exampleSrc:"A: Registration for the new school year is open.\nB: When is the deadline?",
     funFact:"Dutch schools require early 'aanmelding'. For popular schools, parents register children years in advance."},

    {type:"teach", trg:"het aanmeldingsformulier", src:"the registration form", pos:"noun", gender:"n",
     note:"Neuter gender (het). Aanmelding + formulier compound.",
     example:"A: Heb je het aanmeldingsformulier al ingevuld?\nB: Nee, ik moet het nog doen.",
     exampleSrc:"A: Have you filled in the registration form yet?\nB: No, I still need to do it.",
     funFact:"At 25 letters, this is a classic Dutch compound word. Break it down: aanmeld-ings-formulier."},

    {type:"mc",
     q:"Je wilt je inschrijven voor een cursus. Wat moet je invullen?",
     opts:["een adviesbureau","een aanmeldingsformulier","een afkorting","een alinea"],
     ans:"een aanmeldingsformulier",
     hint:"Think about the paper or online document you complete to sign up for something."},

    {type:"teach", trg:"de afleiding", src:"the distraction", pos:"noun", gender:"c",
     note:"Common gender (de). From 'afleiden' (to distract).",
     example:"A: Sociale media zijn een grote afleiding.\nB: Daarom zet ik mijn telefoon uit.",
     exampleSrc:"A: Social media are a big distraction.\nB: That's why I turn my phone off.",
     funFact:"Af (off) + leiding (leading). You are 'led off' your path of concentration."},

    {type:"teach", trg:"de achtergrond", src:"the background", pos:"noun", gender:"c",
     note:"Common gender (de). Achter (behind) + grond (ground).",
     example:"A: Wat is je achtergrond?\nB: Ik kom uit Turkije en woon hier al tien jaar.",
     exampleSrc:"A: What is your background?\nB: I come from Turkey and have lived here ten years.",
     funFact:"Used for personal history, image backgrounds, and context. Very versatile like English 'background'."},

    {type:"teach", trg:"de achterstand", src:"the backlog / the deficit", pos:"noun", gender:"c",
     note:"Common gender (de). Achter (behind) + stand (state).",
     example:"A: Hij heeft een achterstand in wiskunde.\nB: Hij moet bijles nemen.",
     exampleSrc:"A: He has a deficit in mathematics.\nB: He needs to take extra lessons.",
     funFact:"Also used in sports: 'een achterstand van twee doelpunten' (a two-goal deficit)."},

    {type:"teach", trg:"de attitude", src:"the attitude", pos:"noun", gender:"c",
     note:"Common gender (de). French/English loanword.",
     example:"A: Haar attitude is heel positief.\nB: Daarom leert ze zo snel.",
     exampleSrc:"A: Her attitude is very positive.\nB: That is why she learns so quickly.",
     funFact:"Pronounced the French way in Dutch. Also spelled 'attitide' sometimes, but 'attitude' is standard."},

    {type:"match", pairs:[
      {trg:"behalen", src:"to achieve/obtain"},
      {trg:"begeleiden", src:"to guide/supervise"},
      {trg:"afkorting", src:"abbreviation"},
      {trg:"achterstand", src:"backlog/deficit"},
      {trg:"afleiding", src:"distraction"}
    ]},

    {type:"fb",
     s:"De leraar {1} de nieuwe student bij zijn eerste week op school.",
     a:["begeleidt"],
     opts:["begeleidt","behaalt","aanleert","afkort"],
     hint:"Which verb means the teacher guides or mentors the student?",
     sSrc:"The teacher {1} the new student during his first week at school."},

    {type:"mc",
     q:"Een student heeft slechte cijfers en moet extra werken om bij te komen. Hij heeft een ___.",
     opts:["afleiding","attitude","achterstand","achtergrond"],
     ans:"achterstand",
     hint:"Think about being behind where you should be academically."}
  ]
};
export default LESSON_8;
