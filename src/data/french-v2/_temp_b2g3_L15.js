const LESSON_15 = {
  id:"frv2_b2g3_l15", title:"Identité et appartenance", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Identité et appartenance",
     desc:"Learn vocabulary for discussing identity, heritage, and cultural belonging in the French-speaking world.",
     goals:["Learn 17 B2 identity and cultural words","Discuss cultural heritage and belonging","Express ideas about identity and origins"]},

    {type:"teach", trg:"les appartenances", src:"belongings, affiliations", pos:"noun", gender:"f",
     note:"Feminine plural noun. Group memberships or things one belongs to.",
     example:"A: Ses appartenances culturelles sont multiples.\nB: C'est la richesse d'une identité métissée.",
     exampleSrc:"A: Her cultural affiliations are multiple.\nB: That's the richness of a mixed identity.",
     funFact:"'Appartenance' is singular; 'appartenances' plural. In philosophy, it describes the fundamental need to belong to a group."},

    {type:"teach", trg:"un algérien", src:"an Algerian person", pos:"noun", gender:"m",
     note:"Masculine noun. A person from Algeria. Feminine: algerienne. Also adjective.",
     example:"A: La communauté algérienne en France est très importante.\nB: C'est la plus grande diaspora maghrébine.",
     exampleSrc:"A: The Algerian community in France is very significant.\nB: It's the largest North African diaspora.",
     funFact:"France has the largest Algerian diaspora in the world, due to colonial history (1830-1962). Franco-Algerian culture shapes French music, food, and slang."},

    {type:"teach", trg:"un croate", src:"a Croatian person", pos:"noun", gender:"m",
     note:"Masculine noun. A person from Croatia. Also adjective. Feminine: croate.",
     example:"A: Mon voisin est croate, il vient de Zagreb.\nB: Il parle déjà très bien français.",
     exampleSrc:"A: My neighbor is Croatian, he comes from Zagreb.\nB: He already speaks French very well.",
     funFact:"The word 'cravate' (necktie) comes from 'Croate'. Croatian mercenaries in the 17th century wore distinctive neck scarves that became fashionable in Paris."},

    {type:"teach", trg:"bosniaque", src:"Bosnian", pos:"adj", gender:null,
     note:"Adjective. Relating to Bosnia. Also a noun: un/une Bosniaque.",
     example:"A: La cuisine bosniaque est influencée par l'Empire ottoman.\nB: Les cevapcici sont délicieux.",
     exampleSrc:"A: Bosnian cuisine is influenced by the Ottoman Empire.\nB: Cevapcici are delicious.",
     funFact:"France played a key role in the Bosnian peace process. The Dayton Accords were largely negotiated with French diplomatic involvement."},

    {type:"mc",
     q:"De quel pays vient le mot 'cravate', grâce aux mercenaires du dix-septième siècle ?",
     opts:["Croatie","Bosnie","Algérie","Finlande"],
     ans:"Croatie",
     hint:"These soldiers wore distinctive neck scarves that became fashionable in Paris. The country name gave us the word."},

    {type:"teach", trg:"un finnois", src:"a Finnish person, Finnish language", pos:"noun", gender:"m",
     note:"Masculine noun. A person from Finland or the Finnish language. Feminine: finnoise.",
     example:"A: Le finnois est une langue très différente du français.\nB: Oui, elle n'est pas indo-européenne.",
     exampleSrc:"A: Finnish is a very different language from French.\nB: Yes, it's not Indo-European.",
     funFact:"Finnish belongs to the Finno-Ugric family, unrelated to French. Finnish students consistently score highest in PISA education rankings."},

    {type:"teach", trg:"corse", src:"Corsican", pos:"adj", gender:null,
     note:"Adjective. Relating to the island of Corsica. Also a noun: un/une Corse.",
     example:"A: La musique corse est très émouvante.\nB: Les polyphonies corses sont classées au patrimoine de l'UNESCO.",
     exampleSrc:"A: Corsican music is very moving.\nB: Corsican polyphonies are listed as UNESCO heritage.",
     funFact:"Napoleon was born in Corsica just one year after France acquired the island from Genoa. Corsican identity remains strong and distinct from mainland France."},

    {type:"teach", trg:"un ex", src:"an ex (former partner)", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A former romantic partner. Invariable: un ex, une ex.",
     example:"A: Elle est restée amie avec son ex.\nB: C'est rare mais possible.",
     exampleSrc:"A: She stayed friends with her ex.\nB: It's rare but possible.",
     funFact:"French uses 'ex' as a standalone noun, just like English. But 'ex-' as a prefix is very productive: ex-mari, ex-femme, ex-patron."},

    {type:"teach", trg:"dijonnais", src:"from Dijon", pos:"adj", gender:null,
     note:"Adjective. Relating to the city of Dijon. Feminine: dijonnaise.",
     example:"A: La moutarde dijonnaise est connue dans le monde entier.\nB: C'est un produit emblématique de la Bourgogne.",
     exampleSrc:"A: Dijon mustard is known worldwide.\nB: It's an emblematic product of Burgundy.",
     funFact:"Despite the name, most 'moutarde de Dijon' is no longer made in Dijon. The name refers to the recipe (with verjuice), not the origin."},

    {type:"fb",
     s:"Les polyphonies {1} sont inscrites au patrimoine culturel de l'UNESCO.",
     a:["corses"],
     opts:["corses","dijonnaises","bosniaque","finnoises"],
     hint:"This adjective refers to the French island known for Napoleon's birthplace and distinctive vocal traditions.",
     sSrc:"The {1} polyphonies are listed in UNESCO's cultural heritage."},

    {type:"teach", trg:"un antijeunes", src:"anti-youth", pos:"adj", gender:null,
     note:"Adjective. Discriminatory toward young people. Invariable form.",
     example:"A: Cette politique est perçue comme antijeunes.\nB: Les étudiants manifestent dans la rue.",
     exampleSrc:"A: This policy is perceived as anti-youth.\nB: Students are protesting in the streets.",
     funFact:"French social debate regularly uses 'anti-' compounds: antijeunes, antisocial, antidemocratique. Student protests are a French tradition since May 1968."},

    {type:"teach", trg:"un adopté", src:"an adopted person", pos:"adj", gender:null,
     note:"Adjective. Having been legally taken into a new family. Feminine: adoptee.",
     example:"A: Elle est adoptée et fière de ses deux familles.\nB: L'adoption est un acte d'amour.",
     exampleSrc:"A: She is adopted and proud of her two families.\nB: Adoption is an act of love.",
     funFact:"France has a complex adoption system. 'L'adoption pleniere' gives full family status, while 'adoption simple' preserves ties to the birth family."},

    {type:"teach", trg:"l'affirmation de soi", src:"self-assertion, self-confidence", pos:"noun", gender:"f",
     note:"Feminine noun phrase. The process of asserting one's identity and worth.",
     example:"A: L'affirmation de soi est un processus important.\nB: Ça demande du courage et de la patience.",
     exampleSrc:"A: Self-assertion is an important process.\nB: It requires courage and patience.",
     funFact:"French psychology uses 'affirmation de soi' as a clinical term. Assertiveness training is called 'entrainement a l'affirmation de soi'."},

    {type:"mc",
     q:"Quel adjectif décrit une politique qui discrimine les jeunes ?",
     opts:["dijonnais","antijeunes","adopté","corse"],
     ans:"antijeunes",
     hint:"This compound adjective uses the prefix 'anti-' combined with a word for young people."},

    {type:"teach", trg:"découvert", src:"uncovered, exposed", pos:"adj", gender:null,
     note:"Adjective. Not covered, or left open. Also: overdrawn (bank account). Feminine: decouverte.",
     example:"A: Mon compte est à découvert depuis une semaine.\nB: Contacte ta banque rapidement.",
     exampleSrc:"A: My account has been overdrawn for a week.\nB: Contact your bank quickly.",
     funFact:"'A decouvert' means in the open or overdrawn. 'La decouverte' means a discovery. Both come from 'decouvrir' (to uncover)."},

    {type:"teach", trg:"un extraterrestre", src:"an extraterrestrial", pos:"noun", gender:"m",
     note:"Masculine noun. A being from another planet. Also adjective. Feminine: extraterrestre.",
     example:"A: Crois-tu à l'existence des extraterrestres ?\nB: L'univers est si vaste que c'est probable.",
     exampleSrc:"A: Do you believe in the existence of extraterrestrials?\nB: The universe is so vast that it's probable.",
     funFact:"France has an official government agency (GEIPAN) that investigates UFO sightings. It is part of the space agency CNES."},

    {type:"teach", trg:"celle-là", src:"that one (feminine)", pos:"pron", gender:null,
     note:"Demonstrative pronoun. Emphasizes distance. Masculine: celui-la.",
     example:"A: Tu préfères cette robe ou celle-là ?\nB: Celle-là, la bleue, elle te va mieux.",
     exampleSrc:"A: Do you prefer this dress or that one?\nB: That one, the blue one, it suits you better.",
     funFact:"French distinguishes 'celle-ci' (this one, near) from 'celle-la' (that one, far). Spoken French increasingly uses '-la' for both."},

    {type:"match", pairs:[
      {trg:"appartenances", src:"affiliations"},
      {trg:"affirmation de soi", src:"self-assertion"},
      {trg:"extraterrestre", src:"extraterrestrial"},
      {trg:"découvert", src:"uncovered"},
      {trg:"celle-là", src:"that one (fem.)"}
    ]},

    {type:"fb",
     s:"L'{1} est un processus qui demande courage et confiance en soi.",
     a:["affirmation de soi"],
     opts:["affirmation de soi","appartenance","adoption","découverte"],
     hint:"This noun phrase describes the process of asserting one's identity and personal worth.",
     sSrc:"{1} is a process that requires courage and self-confidence."}
  ]
};
export default LESSON_15;
