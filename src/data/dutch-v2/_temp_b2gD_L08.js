// L08: Immigratie en Diversiteit. Immigration and Diversity
const LESSON_8 = {
  id:"nlv2_b2gD_l08", title:"Immigratie en Diversiteit", icon:"\u{1F30F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Immigration and Diversity",
     desc:"The Netherlands is a multicultural society shaped by centuries of immigration. Learn vocabulary to discuss migration, integration, and cultural diversity with nuance.",
     goals:["Master 10 immigration and diversity terms","Discuss integration and multiculturalism","Navigate sensitive social topics"]},

    {type:"teach", trg:"de immigrante", src:"the (female) immigrant", pos:"noun", gender:"c",
     note:"Common gender (de). Feminine form of 'immigrant'.\n'De eerste generatie immigranten' = the first generation immigrants.",
     example:"A: Mijn buurvrouw is een immigrante uit Turkije.\nB: Hoe lang woont ze hier al?\nA: Al dertig jaar.\nB: Dan is ze meer Nederlands dan veel Nederlanders!",
     exampleSrc:"A: My neighbour is an immigrant from Turkey.\nB: How long has she lived here?\nA: Already thirty years.\nB: Then she's more Dutch than many Dutch people!",
     funFact:"The suffix '-e' creates feminine forms in Dutch. 'Immigrant' becomes 'immigrante', just as 'student' becomes 'studente'. This usage is declining in modern Dutch."},

    {type:"teach", trg:"het inburgeringsbeleid", src:"the civic integration policy", pos:"noun", gender:"n",
     note:"Neuter (het). Inburgering (civic integration) + beleid (policy).\n'Het nieuwe inburgeringsbeleid' = the new integration policy.",
     example:"A: Het inburgeringsbeleid is weer veranderd.\nB: Wat is er anders?\nA: Gemeenten hebben nu meer verantwoordelijkheid.\nB: Hopelijk werkt het beter.",
     exampleSrc:"A: The civic integration policy has changed again.\nB: What's different?\nA: Municipalities now have more responsibility.\nB: Hopefully it works better.",
     funFact:"The Dutch 'inburgeringsexamen' tests language skills, knowledge of Dutch society, and orientation on the labour market. It is mandatory for most non-EU immigrants."},

    {type:"teach", trg:"de geloofsgenoot", src:"the fellow believer / co-religionist", pos:"noun", gender:"c",
     note:"Common gender (de). Geloof (faith/belief) + genoot (companion).\n'Steun van geloofsgenoten' = support from fellow believers.",
     example:"A: Hij zocht steun bij zijn geloofsgenoten.\nB: Bij welke gemeenschap?\nA: De moskee in zijn wijk.\nB: Het is belangrijk om een netwerk te hebben.",
     exampleSrc:"A: He sought support from his fellow believers.\nB: At which community?\nA: The mosque in his neighbourhood.\nB: It's important to have a network.",
     funFact:"The Netherlands has a tradition of 'verzuiling' (pillarisation), where society was divided by religion. Catholics, Protestants, and secular groups each had their own schools, media, and clubs."},

    {type:"teach", trg:"de kledij", src:"the attire / clothing (formal)", pos:"noun", gender:"c",
     note:"Common gender (de). Slightly formal/Belgian variant of 'kleding'.\n'Traditionele kledij' = traditional attire.",
     example:"A: De traditionele kledij verschilt per regio.\nB: Draagt iemand dat nog?\nA: Soms bij feesten en optochten.\nB: In Staphorst zie je het nog weleens.",
     exampleSrc:"A: Traditional attire differs per region.\nB: Does anyone still wear that?\nA: Sometimes at festivals and parades.\nB: In Staphorst you still see it occasionally.",
     funFact:"'Kledij' is more common in Belgian Dutch than in the Netherlands. The word feels slightly more formal than 'kleding', similar to 'attire' versus 'clothing' in English."},

    {type:"mc",
     q:"Wat is het 'inburgeringsexamen'?",
     opts:["Een verplicht examen over taal en kennis van Nederland","Een rijexamen","Een examen voor het Nederlands staatsburgerschap","Een medisch onderzoek"],
     ans:"Een verplicht examen over taal en kennis van Nederland",
     hint:"This exam tests newcomers' language skills and knowledge of Dutch society. It is mandatory for most non-EU immigrants."},

    {type:"teach", trg:"de kledingstijl", src:"the clothing style / fashion style", pos:"noun", gender:"c",
     note:"Common gender (de). Kleding (clothing) + stijl (style).\n'Een eigen kledingstijl' = a personal fashion style.",
     example:"A: Zijn kledingstijl is heel apart.\nB: Hoe bedoel je?\nA: Hij combineert vintage met modern.\nB: Dat is juist heel modieus tegenwoordig.",
     exampleSrc:"A: His clothing style is quite unique.\nB: What do you mean?\nA: He combines vintage with modern.\nA: That's actually very fashionable nowadays.",
     funFact:"The Dutch are known for a casual, practical dress code. Even in offices, jeans are often acceptable. 'Doe maar normaal' (just act normal) extends to fashion."},

    {type:"teach", trg:"de allochtoon", src:"person of foreign background (dated term)", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek: allos (other) + chthon (land).\nConsidered outdated; now replaced by 'persoon met een migratieachtergrond'.",
     example:"A: Het woord 'allochtoon' wordt niet meer gebruikt.\nB: Wat zeg je dan?\nA: 'Persoon met een migratieachtergrond.'\nB: Taal verandert met de tijd.",
     exampleSrc:"A: The word 'allochtoon' is no longer used.\nB: What do you say instead?\nA: 'Person with a migration background.'\nB: Language changes with the times.",
     funFact:"The Dutch government officially stopped using 'allochtoon' and 'autochtoon' in 2016. These terms were considered stigmatising. The shift reflects growing sensitivity to inclusive language."},

    {type:"teach", trg:"de kompaan", src:"the companion / accomplice", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'compagnon'.\nCan mean friend/companion or accomplice (in crime).",
     example:"A: Hij en zijn kompaan werden gearresteerd.\nB: Wat hadden ze gedaan?\nA: Ingebroken bij een juwelier.\nB: Niet slim, overal hangen camera's.",
     exampleSrc:"A: He and his accomplice were arrested.\nB: What had they done?\nA: Broken into a jeweller's.\nB: Not smart, cameras are everywhere.",
     funFact:"'Kompaan' can be positive (a loyal companion) or negative (a criminal accomplice). Context determines the meaning, much like English 'associate'."},

    {type:"fb",
     s:"Het {1} verplicht nieuwkomers om een taalcursus te volgen.",
     a:["inburgeringsbeleid"],
     opts:["inburgeringsbeleid","geloofsgenoot","kledingstijl","allochtoon"],
     hint:"Government policy about civic integration for newcomers. Compound: integration + policy.",
     sSrc:"The {1} requires newcomers to take a language course."},

    {type:"teach", trg:"het kiesrecht", src:"the right to vote / suffrage", pos:"noun", gender:"n",
     note:"Neuter (het). Kies (choose/vote) + recht (right).\n'Algemeen kiesrecht' = universal suffrage.",
     example:"A: Wanneer kregen vrouwen kiesrecht in Nederland?\nB: In 1919, passief kiesrecht.\nA: En actief kiesrecht?\nB: Dat kwam in 1922.",
     exampleSrc:"A: When did women get voting rights in the Netherlands?\nB: In 1919, passive voting rights.\nA: And active voting rights?\nB: That came in 1922.",
     funFact:"Aletta Jacobs was the first Dutch woman to fight for women's suffrage. The Netherlands granted full women's voting rights in 1919, relatively early for Europe."},

    {type:"teach", trg:"de jongedame", src:"the young lady", pos:"noun", gender:"c",
     note:"Common gender (de). Jonge (young) + dame (lady).\nSlightly formal, sometimes old-fashioned.",
     example:"A: Die jongedame spreekt uitstekend Nederlands.\nB: Ze woont hier pas twee jaar.\nA: Wat een talent voor talen!\nB: Motivatie is de sleutel.",
     exampleSrc:"A: That young lady speaks excellent Dutch.\nB: She's only lived here for two years.\nA: What a talent for languages!\nB: Motivation is the key.",
     funFact:"'Jongedame' feels slightly old-fashioned in modern Dutch. Younger speakers prefer 'jonge vrouw' (young woman). Using 'jongedame' can sound charming or patronising depending on context."},

    {type:"match", pairs:[
      {trg:"inburgeringsbeleid", src:"integration policy"},
      {trg:"geloofsgenoot", src:"fellow believer"},
      {trg:"kiesrecht", src:"right to vote"},
      {trg:"allochtoon", src:"person of foreign background"},
      {trg:"kompaan", src:"companion / accomplice"}
    ]},

    {type:"mc",
     q:"Waarom wordt het woord 'allochtoon' niet meer officieel gebruikt?",
     opts:["Het kwam uit het Duits","Het werd als stigmatiserend beschouwd","Het was grammaticaal fout","Het was te lang"],
     ans:"Het werd als stigmatiserend beschouwd",
     hint:"The Dutch government stopped using this term in 2016 because it was seen as labelling people in a negative way."},

    {type:"fb",
     s:"Vrouwen kregen het {1} in Nederland in 1919.",
     a:["kiesrecht"],
     opts:["kiesrecht","inburgeringsbeleid","geloofsgenoot","kompaan"],
     hint:"The legal right to participate in elections and vote for representatives. Compound: vote + right.",
     sSrc:"Women obtained the {1} in the Netherlands in 1919."}
  ]
};
export default LESSON_8;
