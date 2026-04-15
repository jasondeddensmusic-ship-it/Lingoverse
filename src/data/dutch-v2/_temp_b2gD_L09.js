// L09: Jeugdrecht en Bescherming — Youth Justice and Protection
const LESSON_9 = {
  id:"nlv2_b2gD_l09", title:"Jeugdrecht en Bescherming", icon:"\u{2696}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Youth Justice and Protection",
     desc:"The Dutch approach to youth justice emphasises rehabilitation over punishment. Learn specialised vocabulary about youth services, camps, and the legal framework protecting minors.",
     goals:["Master 10 youth justice and protection terms","Discuss juvenile law and youth services","Navigate social work vocabulary"]},

    {type:"teach", trg:"de jeugdrechtbank", src:"the juvenile court", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + rechtbank (court).\n'Voor de jeugdrechtbank verschijnen' = to appear before juvenile court.",
     example:"A: De zaak komt voor de jeugdrechtbank.\nB: Hoe oud is de verdachte?\nA: Vijftien jaar.\nB: Dan geldt het jeugdstrafrecht.",
     exampleSrc:"A: The case goes to juvenile court.\nB: How old is the suspect?\nA: Fifteen years old.\nB: Then juvenile criminal law applies.",
     funFact:"Dutch juvenile criminal law applies to ages 12-17. In exceptional cases, 18-22 year olds can also be tried under youth law if the judge deems it appropriate."},

    {type:"teach", trg:"de jeugdpolitie", src:"the youth police / juvenile police", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + politie (police).\nSpecialised officers trained to work with young people.",
     example:"A: De jeugdpolitie patrouilleert rond scholen.\nB: Waarom?\nA: Om problemen vroeg te signaleren.\nB: Preventie is beter dan straffen.",
     exampleSrc:"A: The youth police patrol around schools.\nB: Why?\nA: To identify problems early.\nB: Prevention is better than punishment.",
     funFact:"Dutch police have specialised 'jeugdagenten' (youth officers) who build relationships with young people in their area. The approach is community-focused."},

    {type:"teach", trg:"het jeugdkamp", src:"the youth camp", pos:"noun", gender:"n",
     note:"Neuter (het). Jeugd (youth) + kamp (camp).\nCan be a holiday camp, scout camp, or supervised programme.",
     example:"A: De kinderen gaan naar een jeugdkamp.\nB: Waar is het?\nA: In de Veluwe, midden in de natuur.\nB: Dat wordt een avontuur!",
     exampleSrc:"A: The children are going to a youth camp.\nB: Where is it?\nA: In the Veluwe, in the middle of nature.\nB: That'll be an adventure!",
     funFact:"Scouting is very popular in the Netherlands. Dutch scouts ('scouting') organise camps throughout the year, and the Veluwe forest is a favourite location."},

    {type:"teach", trg:"de jeugdclub", src:"the youth club", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + club.\n'Een jeugdclub in de wijk' = a youth club in the neighbourhood.",
     example:"A: Er is een nieuwe jeugdclub geopend.\nB: Voor welke leeftijd?\nA: Twaalf tot achttien jaar.\nB: Mooi, de jongeren hadden niets te doen.",
     exampleSrc:"A: A new youth club has opened.\nB: For which age group?\nA: Twelve to eighteen years.\nB: Great, the young people had nothing to do.",
     funFact:"Youth clubs ('jongerencentra') play an important role in Dutch neighbourhoods. They offer homework help, sports, and safe spaces, especially in disadvantaged areas."},

    {type:"mc",
     q:"Vanaf welke leeftijd kan een kind in Nederland strafrechtelijk worden vervolgd?",
     opts:["Vanaf 12 jaar","Vanaf 10 jaar","Vanaf 14 jaar","Vanaf 16 jaar"],
     ans:"Vanaf 12 jaar",
     hint:"Dutch law sets a minimum age for criminal prosecution. Below this age, children cannot be charged with crimes."},

    {type:"teach", trg:"het jeugdparket", src:"the youth prosecution office", pos:"noun", gender:"n",
     note:"Neuter (het). Jeugd (youth) + parket (prosecution office).\n'Het Openbaar Ministerie jeugdparket' = the Public Prosecution Service youth division.",
     example:"A: Het jeugdparket beslist over vervolging.\nB: Wie werkt daar?\nA: Gespecialiseerde officieren van justitie.\nB: Ze houden rekening met de leeftijd.",
     exampleSrc:"A: The youth prosecution office decides on prosecution.\nB: Who works there?\nA: Specialised public prosecutors.\nB: They take the age into account.",
     funFact:"The Dutch prosecution service has the principle of 'opportuniteit': prosecutors can decide not to prosecute if it serves no purpose, especially for young offenders."},

    {type:"teach", trg:"de jeugdbrigade", src:"the youth brigade / youth squad", pos:"noun", gender:"c",
     note:"Common gender (de). Jeugd (youth) + brigade.\nA team or unit focused on youth-related issues.",
     example:"A: De jeugdbrigade heeft een actie gehouden.\nB: Tegen wat?\nA: Vandalisme bij het station.\nB: Werkt het preventief?",
     exampleSrc:"A: The youth brigade carried out an action.\nB: Against what?\nA: Vandalism at the station.\nB: Does it work preventively?",
     funFact:"Some Dutch cities have 'straatcoaches' (street coaches) who work alongside youth brigades. They are trained in de-escalation and community mediation."},

    {type:"teach", trg:"de hoeder", src:"the guardian / keeper / protector", pos:"noun", gender:"c",
     note:"Common gender (de). From 'hoeden' (to guard/tend).\n'De hoeder van de wet' = the guardian of the law.",
     example:"A: De rechter is de hoeder van de grondwet.\nB: Dat is een zware verantwoordelijkheid.\nA: Daarom zijn rechters onafhankelijk.\nB: Dat moet altijd zo blijven.",
     exampleSrc:"A: The judge is the guardian of the constitution.\nB: That's a heavy responsibility.\nA: That's why judges are independent.\nB: That must always remain so.",
     funFact:"'Hoeder' has a shepherd-like connotation in Dutch. A 'schaapherder' (shepherd) 'hoedt' (tends) the flock. The legal sense evokes the same protective imagery."},

    {type:"fb",
     s:"De {1} besloot de jongere niet te vervolgen maar door te verwijzen naar hulpverlening.",
     a:["jeugdrechtbank"],
     opts:["jeugdrechtbank","jeugdpolitie","jeugdclub","jeugdkamp"],
     hint:"A specialised court that handles cases involving minors. Compound: youth + court.",
     sSrc:"The {1} decided not to prosecute the young person but to refer them to support services."},

    {type:"teach", trg:"de aanhang", src:"the following / supporters / partner (informal)", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanhangen' (to follow/support).\nDouble meaning: political supporters or an informal term for partner.",
     example:"A: De politicus heeft veel aanhang.\nB: Vooral onder jongeren.\nA: Ze spreken dezelfde taal.\nB: Dat maakt het verschil.",
     exampleSrc:"A: The politician has a large following.\nB: Especially among young people.\nA: They speak the same language.\nB: That makes the difference.",
     funFact:"In informal Dutch, 'de aanhang' can mean your romantic partner. 'Neem je aanhang mee' means 'bring your partner along'. The formal meaning is 'followers/supporters'."},

    {type:"teach", trg:"de denkwijze", src:"the way of thinking / mindset", pos:"noun", gender:"c",
     note:"Common gender (de). Denk (think) + wijze (way/manner).\n'Een andere denkwijze' = a different way of thinking.",
     example:"A: Zijn denkwijze verschilt van de onze.\nB: In welk opzicht?\nA: Hij denkt meer collectief.\nB: Dat is cultureel bepaald.",
     exampleSrc:"A: His way of thinking differs from ours.\nB: In what way?\nA: He thinks more collectively.\nB: That's culturally determined.",
     funFact:"The Dutch pride themselves on 'nuchterheid' (level-headedness). The dominant denkwijze is pragmatic and consensus-oriented, summed up in 'doe maar normaal'."},

    {type:"match", pairs:[
      {trg:"jeugdrechtbank", src:"juvenile court"},
      {trg:"jeugdpolitie", src:"youth police"},
      {trg:"jeugdparket", src:"youth prosecution office"},
      {trg:"hoeder", src:"guardian / protector"},
      {trg:"denkwijze", src:"way of thinking"}
    ]},

    {type:"mc",
     q:"Wat kan 'aanhang' informeel betekenen in het Nederlands?",
     opts:["Je partner","Je baas","Je buurman","Je huisgenoot"],
     ans:"Je partner",
     hint:"Besides 'followers/supporters', this word has a casual meaning for someone close to you romantically."},

    {type:"fb",
     s:"De {1} patrouilleerde na schooltijd rond het winkelcentrum.",
     a:["jeugdpolitie"],
     opts:["jeugdpolitie","jeugdrechtbank","jeugdclub","hoeder"],
     hint:"Specialised officers trained to work with young people in the community. Compound: youth + police.",
     sSrc:"The {1} patrolled around the shopping centre after school hours."}
  ]
};
export default LESSON_9;
