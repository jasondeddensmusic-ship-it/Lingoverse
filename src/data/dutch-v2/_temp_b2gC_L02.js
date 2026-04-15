// L02: Kinderen en Jeugd — Children, Youth, and Social Services
const LESSON_2 = {
  id:"nlv2_b2gC_l2", title:"Kinderen en Jeugd", icon:"\u{1F9D2}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Children and Youth",
     desc:"Vocabulary around children, youth services, and education. Essential for understanding Dutch social policy and family life discussions at B2 level.",
     goals:["Master 12 youth and child-related nouns","Discuss youth services and child welfare","Navigate social policy vocabulary"]},

    {type:"teach", trg:"de kinderafdeling", src:"the children's department / ward", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + afdeling (department).\nUsed for hospitals and stores alike.",
     example:"A: Waar is de kinderafdeling?\nB: Op de tweede verdieping, links.\nA: Is er ook speelgoed?\nB: Ja, een hele hoek met speelgoed.",
     exampleSrc:"A: Where is the children's department?\nB: On the second floor, to the left.\nA: Is there also toys?\nB: Yes, a whole corner with toys.",
     funFact:"In Dutch hospitals, the kinderafdeling often has colourful murals and play areas to make young patients feel at ease."},

    {type:"teach", trg:"de kinderkleding", src:"the children's clothing", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + kleding (clothing).\n'Kleding' is always singular in Dutch.",
     example:"A: Waar koop jij kinderkleding?\nB: Meestal online, dat is goedkoper.\nA: Maar de maten kloppen niet altijd.\nB: Dat is waar, soms moet ik terugsturen.",
     exampleSrc:"A: Where do you buy children's clothing?\nB: Usually online, that's cheaper.\nA: But the sizes aren't always right.\nB: That's true, sometimes I have to send things back.",
     funFact:"The Netherlands has a strong second-hand culture for children's clothing. Markets called 'kinderkledingbeurzen' are very popular."},

    {type:"teach", trg:"de kindermishandeling", src:"child abuse", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + mishandeling (abuse).\nA serious social issue discussed in Dutch media.",
     example:"A: Er is een campagne tegen kindermishandeling.\nB: Goed dat er aandacht voor is.\nA: Iedereen kan signalen melden.\nB: Ja, bij Veilig Thuis kun je bellen.",
     exampleSrc:"A: There is a campaign against child abuse.\nB: Good that there's attention for it.\nA: Everyone can report warning signs.\nB: Yes, you can call Safe at Home.",
     funFact:"'Veilig Thuis' (Safe at Home) is the Dutch national helpline for reporting domestic violence and child abuse."},

    {type:"teach", trg:"de kinderrechter", src:"the juvenile judge", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + rechter (judge).\nSpecialised judge for minors.",
     example:"A: De kinderrechter heeft een uitspraak gedaan.\nB: Wat is er besloten?\nA: Het kind blijft bij de pleegouders.\nB: Dat klinkt als een goed besluit.",
     exampleSrc:"A: The juvenile judge has made a ruling.\nB: What was decided?\nA: The child stays with the foster parents.\nB: That sounds like a good decision.",
     funFact:"The Dutch juvenile justice system focuses on rehabilitation rather than punishment. Judges have wide discretion."},

    {type:"mc",
     q:"Een kinderrechter behandelt zaken over:",
     opts:["Volwassen criminelen","Minderjarigen","Huwelijken","Belastingen"],
     ans:"Minderjarigen",
     hint:"The 'kinder' prefix tells you this judge specialises in cases involving young people."},

    {type:"teach", trg:"de jeugdrechtbank", src:"the juvenile court", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + rechtbank (court).\nWhere cases involving minors are heard.",
     example:"A: De zaak komt voor de jeugdrechtbank.\nB: Wanneer is de zitting?\nA: Volgende week dinsdag.\nB: Ik hoop dat het goed afloopt.",
     exampleSrc:"A: The case is going to the juvenile court.\nB: When is the hearing?\nA: Next Tuesday.\nB: I hope it turns out well.",
     funFact:"In Belgium, 'jeugdrechtbank' is the standard term. In the Netherlands, the term 'kinderrechter' is more commonly used."},

    {type:"teach", trg:"de jeugdpolitie", src:"the youth police / juvenile police", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + politie (police).\nSpecialised officers for youth cases.",
     example:"A: De jeugdpolitie was op school vandaag.\nB: Waarom? Is er iets gebeurd?\nA: Nee, het was een voorlichtingsbezoek.\nB: Oh, over veiligheid zeker?",
     exampleSrc:"A: The youth police were at school today.\nB: Why? Did something happen?\nA: No, it was an information visit.\nB: Oh, about safety I suppose?",
     funFact:"Dutch youth police officers often visit schools to build trust and provide information about online safety."},

    {type:"teach", trg:"de jeugdclub", src:"the youth club", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + club (club).\n'Het buurthuis' often hosts youth clubs.",
     example:"A: Gaat je zoon naar een jeugdclub?\nB: Ja, elke woensdag na school.\nA: Wat doen ze daar?\nB: Sport, knutselen, en soms uitstapjes.",
     exampleSrc:"A: Does your son go to a youth club?\nB: Yes, every Wednesday after school.\nA: What do they do there?\nB: Sports, crafts, and sometimes outings.",
     funFact:"Dutch youth clubs ('jeugdclubs') often operate from community centres called 'buurthuizen' and are partly government-funded."},

    {type:"fb",
     s:"De zaak komt volgende week voor de {1}.",
     a:["jeugdrechtbank"],
     opts:["jeugdrechtbank","jeugdpolitie","jeugdclub","kinderafdeling"],
     hint:"The judicial institution where cases involving minors are heard.",
     sSrc:"The case is coming before the {1} next week."},

    {type:"teach", trg:"de kleuterschool", src:"the kindergarten / preschool", pos:"noun", gender:"c",
     note:"Common gender (de). Kleuter (toddler) + school (school).\nFor children aged 4-6.",
     example:"A: Op welke kleuterschool zit je kind?\nB: Op De Regenboog, om de hoek.\nA: Is het een goede school?\nB: Heel goed, de juffen zijn lief.",
     exampleSrc:"A: Which preschool is your child at?\nB: At The Rainbow, around the corner.\nA: Is it a good school?\nB: Very good, the teachers are kind.",
     funFact:"In the Netherlands, 'kleuterschool' merged with primary school in 1985. Groups 1-2 (age 4-6) are the former kleuterschool."},

    {type:"teach", trg:"het kleuterdagverblijf", src:"the daycare centre (for toddlers)", pos:"noun", gender:"n",
     note:"Neuter (het). Kleuter (toddler) + dagverblijf (daytime shelter).\nFor children before school age.",
     example:"A: Breng je de kinderen naar het kleuterdagverblijf?\nB: Ja, drie dagen per week.\nA: Is het duur?\nB: Best wel, maar we krijgen kinderopvangtoeslag.",
     exampleSrc:"A: Do you take the children to the daycare?\nB: Yes, three days a week.\nA: Is it expensive?\nB: Quite, but we receive childcare benefits.",
     funFact:"Dutch childcare is among the most expensive in Europe. The government offers 'kinderopvangtoeslag' (childcare benefits) to offset costs."},

    {type:"teach", trg:"het kinderlied", src:"the children's song / nursery rhyme", pos:"noun", gender:"n",
     note:"Neuter (het). Kinder (children's) + lied (song).\n'Een liedje zingen' = to sing a little song.",
     example:"A: Ken je dit kinderlied nog?\nB: Ja! 'Alle eendjes zwemmen in het water.'\nA: Dat zong mijn moeder altijd.\nB: Het is een klassieker.",
     exampleSrc:"A: Do you still know this nursery rhyme?\nB: Yes! 'All the ducklings swim in the water.'\nA: My mother always sang that.\nB: It's a classic.",
     funFact:"'Alle eendjes zwemmen in het water' is one of the most beloved Dutch children's songs, known by virtually every Dutch person."},

    {type:"mc",
     q:"Wat is het verschil tussen een kleuterschool en een kleuterdagverblijf?",
     opts:["Er is geen verschil","Kleuterschool is onderwijs, dagverblijf is opvang","Dagverblijf is voor oudere kinderen","Kleuterschool is alleen in de zomer"],
     ans:"Kleuterschool is onderwijs, dagverblijf is opvang",
     hint:"One focuses on education, the other on care during working hours."},

    {type:"fb",
     s:"Mijn zoontje zingt altijd hetzelfde {1}.",
     a:["kinderlied"],
     opts:["kinderlied","kinderkleding","kinderafdeling","kindermishandeling"],
     hint:"A musical piece specifically written for young children.",
     sSrc:"My little son always sings the same {1}."},

    {type:"match", pairs:[
      {trg:"kinderafdeling", src:"children's department"},
      {trg:"kinderrechter", src:"juvenile judge"},
      {trg:"kindermishandeling", src:"child abuse"},
      {trg:"kinderlied", src:"nursery rhyme"}
    ]},

    {type:"mc",
     q:"'De jeugdpolitie was op school voor een voorlichtingsbezoek.' Wat is voorlichting?",
     opts:["Straf","Informatie en educatie","Bewaking","Arrestatie"],
     ans:"Informatie en educatie",
     hint:"For + lichting (enlightenment). Providing information to educate people about a topic."},

    {type:"fb",
     s:"De {1} helpt ouders die het moeilijk hebben met de opvoeding.",
     a:["jeugdpolitie"],
     opts:["jeugdpolitie","jeugdclub","kleuterschool","kinderkleding"],
     hint:"Specialised law enforcement officers who work specifically with young people and families.",
     sSrc:"The {1} helps parents who are struggling with raising their children."},

    {type:"match", pairs:[
      {trg:"kleuterschool", src:"kindergarten"},
      {trg:"kleuterdagverblijf", src:"daycare centre"},
      {trg:"jeugdclub", src:"youth club"},
      {trg:"jeugdrechtbank", src:"juvenile court"}
    ]},

    {type:"mc",
     q:"Welk artikel hoort bij 'kleuterdagverblijf'?",
     opts:["de","het","een de-woord","geen artikel"],
     ans:"het",
     hint:"Words ending in '-verblijf' (a place to stay) are typically het-words."}
  ]
};
export default LESSON_2;
