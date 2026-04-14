const LESSON_16 = {
  id:"frv2_b2g4_l16", title:"Histoire et patrimoine", icon:"\u{1F3F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Histoire et patrimoine",
     desc:"Discover vocabulary related to history, heritage, warfare, and the forces that shaped France.",
     goals:["Learn 15 words about history and heritage","Discuss historical events and periods","Express ideas about cultural memory and legacy"]},

    {type:"teach", trg:"un antiheros", src:"an antihero", pos:"noun", gender:"m",
     note:"Masculine noun. A protagonist who lacks traditional heroic qualities.\nPlural unchanged.",
     example:"A: Le personnage principal est un antiheros.\nB: Il est lache mais attachant.",
     exampleSrc:"A: The main character is an antihero.\nB: He is cowardly but endearing.",
     funFact:"French literature loves antiheroes. Meursault in Camus' 'L'Etranger' is the ultimate French antihero."},

    {type:"teach", trg:"un centurion", src:"a centurion", pos:"noun", gender:"m",
     note:"Masculine noun. A Roman military officer commanding 100 soldiers.",
     example:"A: Le centurion commandait ses troupes avec autorite.\nB: Les legions romaines etaient redoutables.",
     exampleSrc:"A: The centurion commanded his troops with authority.\nB: The Roman legions were formidable.",
     funFact:"The Asterix comics feature centurions as bumbling antagonists. France's favorite take on Roman history."},

    {type:"teach", trg:"la grandeur", src:"greatness, grandeur", pos:"noun", gender:"f",
     note:"Feminine noun. Nobility, greatness, or impressive scale.\nA key French concept.",
     example:"A: De Gaulle parlait souvent de la grandeur de la France.\nB: C'etait sa vision politique.",
     exampleSrc:"A: De Gaulle often spoke of the greatness of France.\nB: It was his political vision.",
     funFact:"'La grandeur de la France' is a political catchphrase since de Gaulle. Grandeur is a national aspiration."},

    {type:"teach", trg:"un grade", src:"a rank, a grade", pos:"noun", gender:"m",
     note:"Masculine noun. A military or professional rank.\n'Grade' = promoted in rank.",
     example:"A: Il a obtenu le grade de capitaine.\nB: C'est une promotion bien meritee.",
     exampleSrc:"A: He obtained the rank of captain.\nB: It's a well-deserved promotion.",
     funFact:"'Monter en grade' means to climb in rank. 'En prendre pour son grade' means to get a telling-off."},

    {type:"teach", trg:"la dépouille", src:"the remains, the spoils", pos:"noun", gender:"f",
     note:"Feminine noun. Mortal remains of a person.\nAlso: spoils of war (plural).",
     example:"A: La depouille du soldat a ete rapatriee.\nB: Sa famille l'attendait depuis des annees.",
     exampleSrc:"A: The soldier's remains were repatriated.\nB: His family had been waiting for years.",
     funFact:"'Depouille mortelle' is the formal term for a deceased person's body. Very solemn register."},

    {type:"mc",
     q:"Quel mot designe un heros qui manque de qualites heroiques ?",
     opts:["un antiheros","un centurion","un grade","un condamne"],
     ans:"un antiheros",
     hint:"The prefix 'anti-' reverses the meaning. Think of Meursault in Camus' famous novel."},

    {type:"teach", trg:"hollandais", src:"Dutch", pos:"adj", gender:null,
     note:"Adjective. Relating to Holland or the Netherlands.\nAlso a noun: un Hollandais.",
     example:"A: Les maitres hollandais sont exposes au Louvre.\nB: Rembrandt et Vermeer y sont representes.",
     exampleSrc:"A: The Dutch masters are exhibited at the Louvre.\nB: Rembrandt and Vermeer are represented there.",
     funFact:"'Hollandais' technically refers to Holland, not all the Netherlands. The Dutch prefer 'neerlandais'."},

    {type:"teach", trg:"hongrois", src:"Hungarian", pos:"adj", gender:null,
     note:"Adjective. Relating to Hungary. Also a noun: un Hongrois.\nFeminine: hongroise.",
     example:"A: La cuisine hongroise est riche en epices.\nB: Le goulash est leur plat national.",
     exampleSrc:"A: Hungarian cuisine is rich in spices.\nB: Goulash is their national dish.",
     funFact:"Budapest was a favorite destination for French writers. The 'Cafe New York' there inspired Parisian cafes."},

    {type:"teach", trg:"croate", src:"Croatian", pos:"adj", gender:null,
     note:"Adjective. Relating to Croatia. Also a noun: un/une Croate.",
     example:"A: La cote croate est magnifique.\nB: Dubrovnik attire des millions de touristes.",
     exampleSrc:"A: The Croatian coast is magnificent.\nB: Dubrovnik attracts millions of tourists.",
     funFact:"The word 'cravate' (necktie) comes from 'Croate'. Croatian soldiers wore distinctive neck scarves."},

    {type:"fb",
     s:"La {1} du soldat inconnu repose sous l'Arc de Triomphe.",
     a:["depouille"],
     opts:["depouille","grandeur","gabelle","garderie"],
     hint:"The formal word for mortal remains of a deceased person. Very solemn vocabulary.",
     sSrc:"The unknown soldier's {1} rests under the Arc de Triomphe."},

    {type:"teach", trg:"le finnois", src:"Finnish", pos:"noun", gender:"m",
     note:"Masculine noun. The Finnish language.\nAlso adjective: finnois/finnoise.",
     example:"A: Le finnois est une langue tres difficile.\nB: Sa grammaire n'a rien a voir avec le francais.",
     exampleSrc:"A: Finnish is a very difficult language.\nB: Its grammar has nothing in common with French.",
     funFact:"Finnish belongs to the Uralic family, not Indo-European. It has 15 grammatical cases."},

    {type:"teach", trg:"le gaelique", src:"Gaelic", pos:"noun", gender:"m",
     note:"Masculine noun. The Celtic language of Ireland and Scotland.",
     example:"A: Le gaelique est encore parle en Irlande.\nB: L'Etat encourage son apprentissage.",
     exampleSrc:"A: Gaelic is still spoken in Ireland.\nB: The state encourages learning it.",
     funFact:"France has its own Celtic language: Breton. It shares roots with Irish and Scottish Gaelic."},

    {type:"teach", trg:"le flamand", src:"Flemish", pos:"noun", gender:"m",
     note:"Masculine noun. The Dutch dialect spoken in Belgium and northern France.",
     example:"A: Le flamand est parle dans le nord de la France.\nB: Dunkerque a une forte tradition flamande.",
     exampleSrc:"A: Flemish is spoken in northern France.\nB: Dunkirk has a strong Flemish tradition.",
     funFact:"French Flanders around Dunkirk still has Flemish street names. The language is endangered there."},

    {type:"mc",
     q:"De quel mot vient le mot 'cravate' ?",
     opts:["croate","hongrois","hollandais","flamand"],
     ans:"croate",
     hint:"Croatian soldiers wore distinctive neck scarves that inspired a French fashion accessory."},

    {type:"teach", trg:"l'arrivage", src:"the delivery, the shipment", pos:"noun", gender:"m",
     note:"Masculine noun. A fresh delivery of goods, especially food.\nFrom 'arriver'.",
     example:"A: L'arrivage de poisson frais est a six heures.\nB: Les restaurateurs viennent choisir les meilleurs.",
     exampleSrc:"A: The fresh fish delivery is at six o'clock.\nB: Restaurant owners come to choose the best.",
     funFact:"At Rungis market near Paris, the daily arrivage feeds all of France. It's the world's largest food market."},

    {type:"fb",
     s:"De Gaulle parlait souvent de la {1} de la France.",
     a:["grandeur"],
     opts:["grandeur","depouille","gabelle","galere"],
     hint:"A word for greatness or noble magnificence. A key concept in French political culture.",
     sSrc:"De Gaulle often spoke of the {1} of France."},

    {type:"match", pairs:[
      {trg:"antiheros", src:"antihero"},
      {trg:"centurion", src:"Roman officer"},
      {trg:"grandeur", src:"greatness"},
      {trg:"depouille", src:"mortal remains"},
      {trg:"arrivage", src:"delivery of goods"}
    ]},

    {type:"mc",
     q:"Quelle langue celtique est encore parlee en Irlande ?",
     opts:["le gaelique","le flamand","le finnois","le croate"],
     ans:"le gaelique",
     hint:"A Celtic language related to Breton, which is still spoken in western France."}
  ]
};
export default LESSON_16;
