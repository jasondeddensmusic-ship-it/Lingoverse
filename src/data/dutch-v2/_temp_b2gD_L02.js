// L02: Kinderen en Jeugd. Children and Youth
const LESSON_2 = {
  id:"nlv2_b2gD_l02", title:"Kinderen en Jeugd", icon:"\u{1F9D2}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Children and Youth",
     desc:"The Dutch take children's rights and wellbeing seriously. Learn vocabulary for discussing childhood, youth care, and the world of kids in the Netherlands.",
     goals:["Master 10 child and youth terms","Discuss childcare and education","Navigate youth-related topics"]},

    {type:"teach", trg:"de kinderafdeling", src:"the children's department / children's ward", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + afdeling (department).\nUsed for hospitals and shops.",
     example:"A: De kinderafdeling is op de derde verdieping.\nB: Is het bezoekuur al begonnen?\nA: Ja, ouders mogen de hele dag blijven.\nB: Gelukkig maar.",
     exampleSrc:"A: The children's ward is on the third floor.\nB: Has visiting hours started?\nA: Yes, parents can stay all day.\nB: That's a relief.",
     funFact:"Dutch children's hospital wards are designed to feel playful and welcoming. Many have play rooms, clown doctors, and bright murals."},

    {type:"teach", trg:"de kinderkleding", src:"the children's clothing", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + kleding (clothing).\n'Tweedehands kinderkleding' = second-hand children's clothes.",
     example:"A: Waar koop jij kinderkleding?\nB: Meestal online of tweedehands.\nA: Kinderen groeien zo snel.\nB: Precies, daarom koop ik niet duur.",
     exampleSrc:"A: Where do you buy children's clothing?\nB: Usually online or second-hand.\nA: Children grow so fast.\nB: Exactly, that's why I don't buy expensive.",
     funFact:"The Dutch are famously practical about children's clothes. Second-hand markets ('kinderkledingbeurzen') are hugely popular."},

    {type:"teach", trg:"het kinderlied", src:"the children's song / nursery rhyme", pos:"noun", gender:"n",
     note:"Neuter (het). Kinder (children's) + lied (song).\n'Kinderliedjes zingen' = to sing nursery rhymes.",
     example:"A: Ken je dit kinderlied?\nB: Ja, 'Twee emmertjes water halen'!\nA: Mijn oma zong dat altijd.\nB: Het is echt een klassiek liedje.",
     exampleSrc:"A: Do you know this children's song?\nB: Yes, 'Fetching two buckets of water'!\nA: My grandmother always sang that.\nB: It's a real classic.",
     funFact:"Traditional Dutch children's songs often reference water, mills, and sailing. 'Alle eendjes zwemmen in het water' is known by every Dutch child."},

    {type:"teach", trg:"de kindermishandeling", src:"child abuse", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + mishandeling (abuse/mistreatment).\nA serious social topic.",
     example:"A: Kindermishandeling is een groot probleem.\nB: Hoe kunnen we het signaleren?\nA: Let op veranderingen in gedrag.\nB: En meld het bij Veilig Thuis.",
     exampleSrc:"A: Child abuse is a big problem.\nB: How can we recognise it?\nA: Watch for changes in behaviour.\nB: And report it to Safe Home (Veilig Thuis).",
     funFact:"'Veilig Thuis' (Safe Home) is the Dutch reporting hotline for domestic violence and child abuse. All professionals are legally required to report suspicions."},

    {type:"mc",
     q:"Waar vind je de kinderafdeling in een ziekenhuis?",
     opts:["Op een verdieping speciaal voor kinderen","In de apotheek","Bij de hoofdingang","In de kantine"],
     ans:"Op een verdieping speciaal voor kinderen",
     hint:"A 'kinderafdeling' is a department (afdeling) dedicated to children (k...) within a larger institution."},

    {type:"teach", trg:"de kinderrechter", src:"the juvenile court judge", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + rechter (judge).\nA judge specialising in youth cases.",
     example:"A: De kinderrechter heeft een beslissing genomen.\nB: Wat gebeurt er met het kind?\nA: Het komt onder toezicht te staan.\nB: Van Bureau Jeugdzorg?",
     exampleSrc:"A: The juvenile judge has made a decision.\nB: What happens to the child?\nA: It will be placed under supervision.\nB: From Youth Care Services?",
     funFact:"Dutch juvenile law focuses on rehabilitation over punishment. Children under 12 cannot be prosecuted. Ages 12-17 fall under special youth criminal law."},

    {type:"teach", trg:"de kindervriend", src:"the children's friend / child lover", pos:"noun", gender:"c",
     note:"Common gender (de). Kinder (children's) + vriend (friend).\nSomeone who is good with children.",
     example:"A: Opa is een echte kindervriend.\nB: Ja, hij speelt altijd met ze.\nA: De kinderen zijn dol op hem.\nB: Hij maakt alles een avontuur.",
     exampleSrc:"A: Grandpa is a real children's friend.\nB: Yes, he always plays with them.\nA: The children adore him.\nB: He makes everything an adventure.",
     funFact:"Sinterklaas is traditionally called 'de kindervriend' (the children's friend) in Dutch culture, as the holiday centres on gift-giving to children."},

    {type:"teach", trg:"het knuffeldier", src:"the stuffed animal / cuddly toy", pos:"noun", gender:"n",
     note:"Neuter (het). Knuffel (cuddle/hug) + dier (animal).\n'Mijn lievelingsknuffel' = my favourite stuffed animal.",
     example:"A: Waar is je knuffeldier?\nB: Ik kan hem niet vinden!\nA: Kijk eens onder je bed.\nB: Daar is hij! Mijn knuffelbeer.",
     exampleSrc:"A: Where is your stuffed animal?\nB: I can't find him!\nA: Look under your bed.\nB: There he is! My teddy bear.",
     funFact:"The Dutch word 'knuffel' means both 'hug' and 'stuffed toy'. Asking 'Mag ik een knuffel?' can mean a hug or borrowing a toy, depending on context."},

    {type:"fb",
     s:"De {1} besloot dat het kind onder toezicht van jeugdzorg wordt geplaatst.",
     a:["kinderrechter"],
     opts:["kinderrechter","kindervriend","kinderafdeling","kinderlied"],
     hint:"A judge who specialises in cases involving minors. Compound: children's + judge.",
     sSrc:"The {1} decided that the child will be placed under youth care supervision."},

    {type:"teach", trg:"de kleuterschool", src:"the kindergarten / preschool", pos:"noun", gender:"c",
     note:"Common gender (de). Kleuter (toddler/preschooler) + school.\n'Naar de kleuterschool gaan' = to go to preschool.",
     example:"A: Gaat je zoontje al naar de kleuterschool?\nB: Ja, sinds vorige maand.\nA: Vindt hij het leuk?\nB: Hij vindt het geweldig, vooral het buitenspelen.",
     exampleSrc:"A: Does your little boy go to kindergarten yet?\nB: Yes, since last month.\nA: Does he like it?\nB: He loves it, especially playing outside.",
     funFact:"In 1985, the Dutch merged 'kleuterschool' and 'lagere school' into 'basisschool' (primary school, ages 4-12). The word 'kleuterschool' is still widely used informally."},

    {type:"teach", trg:"de knuffel", src:"the hug / cuddle / stuffed toy", pos:"noun", gender:"c",
     note:"Common gender (de). From 'knuffelen' (to cuddle).\nDouble meaning: a hug, or a stuffed toy.",
     example:"A: Kom, geef me een knuffel!\nB: Natuurlijk, ik heb je gemist.\nA: Ik jou ook.\nB: Volgende keer bel ik vaker.",
     exampleSrc:"A: Come, give me a hug!\nB: Of course, I missed you.\nA: I missed you too.\nB: Next time I'll call more often.",
     funFact:"The three-kiss greeting is standard in the Netherlands: right cheek, left cheek, right cheek. But a 'knuffel' (hug) is reserved for close friends and family."},

    {type:"match", pairs:[
      {trg:"kinderafdeling", src:"children's ward"},
      {trg:"kinderrechter", src:"juvenile judge"},
      {trg:"knuffeldier", src:"stuffed animal"},
      {trg:"kleuterschool", src:"kindergarten"},
      {trg:"kinderlied", src:"nursery rhyme"}
    ]},

    {type:"mc",
     q:"Wat is een 'knuffel' in het Nederlands?",
     opts:["Een kinderboek","Een omhelzing of een zacht speelgoeddier","Een kinderwagen","Een speeltuin"],
     ans:"Een omhelzing of een zacht speelgoeddier",
     hint:"This word has a double meaning. It can refer to a physical embrace or a soft toy you squeeze."},

    {type:"fb",
     s:"De kinderen zongen een oud {1} tijdens het schoolfeest.",
     a:["kinderlied"],
     opts:["kinderlied","knuffeldier","kinderkleding","kinderafdeling"],
     hint:"A song specifically for young children. Think: children's + song.",
     sSrc:"The children sang an old {1} during the school party."}
  ]
};
export default LESSON_2;
