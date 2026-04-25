// L15: Industrie en Werk. Industry and Work
const LESSON_15 = {
  id:"nlv2_b2gD_l15", title:"Industrie en Werk", icon:"\u{1F3ED}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Industry and Work",
     desc:"From the industrial revolution to the modern knowledge economy, Dutch work life has its own vocabulary. Master terms about industry, the workplace, and professional life.",
     goals:["Master 10 industry and work terms","Discuss professional and industrial topics","Navigate workplace vocabulary"]},

    {type:"teach", trg:"de industriestad", src:"the industrial city", pos:"noun", gender:"c",
     note:"Common gender (de). Industrie (industry) + stad (city).\n'Een voormalige industriestad' = a former industrial city.",
     example:"A: Eindhoven was vroeger een echte industriestad.\nB: Door Philips?\nA: Ja, ze maakten gloeilampen en radio's.\nB: Nu is het een technologisch centrum.",
     exampleSrc:"A: Eindhoven used to be a real industrial city.\nB: Because of Philips?\nA: Yes, they made light bulbs and radios.\nB: Now it's a technology centre.",
     funFact:"Eindhoven was transformed by Philips, which started there in 1891. The company shaped the city so profoundly that it was called 'Philipsdorp'. Today Eindhoven is the tech capital."},

    {type:"teach", trg:"de kennisstad", src:"the knowledge city", pos:"noun", gender:"c",
     note:"Common gender (de). Kennis (knowledge) + stad (city).\nA city whose economy is based on knowledge and innovation.",
     example:"A: Eindhoven is nu een kennisstad.\nB: Met de High Tech Campus?\nA: Ja, daar werken duizenden onderzoekers.\nB: Van industriestad naar kennisstad.",
     exampleSrc:"A: Eindhoven is now a knowledge city.\nB: With the High Tech Campus?\nA: Yes, thousands of researchers work there.\nB: From industrial city to knowledge city.",
     funFact:"Eindhoven's High Tech Campus is nicknamed 'the smartest square kilometre in Europe'. Over 12,000 researchers from 100+ companies work there on cutting-edge technology."},

    {type:"teach", trg:"de interimbasis", src:"the interim basis / temporary basis", pos:"noun", gender:"c",
     note:"Common gender (de). Interim (temporary) + basis.\n'Op interimbasis werken' = to work on a temporary/interim basis.",
     example:"A: Ik werk op interimbasis als projectmanager.\nB: Hoe lang duurt het contract?\nA: Zes maanden.\nB: Vind je dat fijn, steeds wisselen?",
     exampleSrc:"A: I work on an interim basis as a project manager.\nB: How long is the contract?\nA: Six months.\nB: Do you enjoy it, always switching?",
     funFact:"The Netherlands has a large 'flex' workforce. Nearly 35% of workers have flexible contracts. The 'uitzendbureau' (temp agency) sector is one of the country's biggest employers."},

    {type:"teach", trg:"de hoofdsponsor", src:"the main sponsor", pos:"noun", gender:"c",
     note:"Common gender (de). Hoofd (main/head) + sponsor.\n'De hoofdsponsor van het evenement' = the main sponsor of the event.",
     example:"A: Wie is de hoofdsponsor van het festival?\nB: Een grote bank.\nA: Hoeveel betalen ze?\nB: Dat is vertrouwelijk, maar het is veel.",
     exampleSrc:"A: Who is the main sponsor of the festival?\nB: A big bank.\nA: How much do they pay?\nB: That's confidential, but it's a lot.",
     funFact:"Dutch football club shirt sponsorship deals can exceed 10 million euros per year. Ajax, PSV, and Feyenoord attract major international sponsors."},

    {type:"mc",
     q:"Waarom wordt Eindhoven een 'kennisstad' genoemd?",
     opts:["Omdat de economie gebaseerd is op technologie en onderzoek","Omdat er veel scholen zijn","Omdat er een bibliotheek is","Omdat het de hoofdstad is"],
     ans:"Omdat de economie gebaseerd is op technologie en onderzoek",
     hint:"This city's economy transformed from manufacturing to innovation. Think of the High Tech Campus and research institutions."},

    {type:"teach", trg:"de krachtterm", src:"the expletive / strong language / swear word", pos:"noun", gender:"c",
     note:"Common gender (de). Kracht (strength/force) + term.\n'Krachttermen gebruiken' = to use strong language.",
     example:"A: Hij gebruikte nogal wat krachttermen.\nB: Was hij boos?\nA: Heel erg, hij had zijn baan verloren.\nB: Dat is begrijpelijk, maar toch ongepast.",
     exampleSrc:"A: He used quite a few expletives.\nB: Was he angry?\nA: Very, he had lost his job.\nB: That's understandable, but still inappropriate.",
     funFact:"Dutch swear words are uniquely disease-based. Words like 'tyfus', 'tering' (tuberculosis), and 'kolere' (cholera) are used as expletives. This is unusual among world languages."},

    {type:"teach", trg:"het aandachtspunt", src:"the point of attention / focus area", pos:"noun", gender:"n",
     note:"Neuter (het). Aandacht (attention) + punt (point).\nCommon in meetings and reports.",
     example:"A: Dit is een belangrijk aandachtspunt.\nB: Waarom?\nA: De klanttevredenheid daalt al drie maanden.\nB: Laten we dat bovenaan de agenda zetten.",
     exampleSrc:"A: This is an important point of attention.\nB: Why?\nA: Customer satisfaction has been declining for three months.\nB: Let's put that at the top of the agenda.",
     funFact:"'Aandachtspunt' is one of the most-used words in Dutch business meetings. Every meeting agenda has them. The Dutch love to identify, discuss, and track 'aandachtspunten'."},

    {type:"teach", trg:"de investeringsaanpak", src:"the investment approach", pos:"noun", gender:"n",
     note:"Common gender (de). Investering (investment) + aanpak (approach).\n'Een nieuwe investeringsaanpak' = a new investment approach.",
     example:"A: De investeringsaanpak moet veranderen.\nB: Wat stel je voor?\nA: Meer focus op duurzame projecten.\nB: Dat past bij de huidige trend.",
     exampleSrc:"A: The investment approach needs to change.\nB: What do you suggest?\nA: More focus on sustainable projects.\nB: That fits the current trend.",
     funFact:"Dutch pension funds are among the largest institutional investors in the world. ABP and PFZW together manage over 700 billion euros."},

    {type:"fb",
     s:"Eindhoven groeide van een kleine stad naar een echte {1} dankzij Philips.",
     a:["industriestad"],
     opts:["industriestad","kennisstad","interimbasis","hoofdsponsor"],
     hint:"A city whose economy revolves around manufacturing and factories. Compound: industry + city.",
     sSrc:"Eindhoven grew from a small town into a real {1} thanks to Philips."},

    {type:"teach", trg:"de cliënt", src:"the client", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'cliens'.\nNote the trema on the 'e' (cliënt). 'Een trouwe cliënt' = a loyal client.",
     example:"A: De cliënt is niet tevreden met het resultaat.\nB: Wat gaat er mis?\nA: Het project loopt achter op schema.\nB: We moeten een oplossing bieden.",
     exampleSrc:"A: The client isn't satisfied with the result.\nB: What's going wrong?\nA: The project is behind schedule.\nB: We need to offer a solution.",
     funFact:"The Dutch trema (two dots over a vowel) prevents two adjacent vowels from being read as a single sound. 'Client' would be read as one syllable, but 'cliënt' clearly has two."},

    {type:"teach", trg:"het examenrooster", src:"the exam timetable / exam schedule", pos:"noun", gender:"n",
     note:"Neuter (het). Examen (exam) + rooster (timetable/grid).\n'Het examenrooster bekijken' = to check the exam timetable.",
     example:"A: Heb je het examenrooster al gezien?\nB: Ja, drie examens in een week.\nA: Dat wordt zwaar!\nB: Ik begin nu al met studeren.",
     exampleSrc:"A: Have you seen the exam timetable yet?\nB: Yes, three exams in one week.\nA: That'll be tough!\nB: I'm starting to study already.",
     funFact:"'Rooster' means both 'timetable' and 'grid/grate' in Dutch. A 'lesrooster' is a class schedule, a 'dienstrooster' is a work schedule, and a 'barbecuerooster' is a grill grate."},

    {type:"match", pairs:[
      {trg:"industriestad", src:"industrial city"},
      {trg:"kennisstad", src:"knowledge city"},
      {trg:"krachtterm", src:"expletive / swear word"},
      {trg:"cliënt", src:"client"},
      {trg:"examenrooster", src:"exam timetable"}
    ]},

    {type:"mc",
     q:"Wat is bijzonder aan Nederlandse scheldwoorden?",
     opts:["Ze zijn hetzelfde als in het Duits","Ze zijn vaak gebaseerd op ziektes","Ze zijn altijd in het Engels","Ze worden nooit gebruikt"],
     ans:"Ze zijn vaak gebaseerd op ziektes",
     hint:"Dutch expletives uniquely reference medical conditions like tuberculosis and cholera. This pattern is unusual among world languages."},

    {type:"fb",
     s:"Dit is een belangrijk {1} voor de volgende vergadering: de dalende verkoopcijfers.",
     a:["aandachtspunt"],
     opts:["aandachtspunt","investeringsaanpak","hoofdsponsor","examenrooster"],
     hint:"An issue that requires focus and discussion. Very common in Dutch meeting culture. Compound: attention + point.",
     sSrc:"This is an important {1} for the next meeting: the declining sales figures."}
  ]
};
export default LESSON_15;
