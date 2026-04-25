// L13: Recht en Politiek. Law and Politics
const LESSON_13 = {
  id:"nlv2_b2gC_l13", title:"Recht en Politiek", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Law and Politics",
     desc:"The Dutch legal and political system has its own rich vocabulary. Master these terms to follow political news, understand policy debates, and discuss governance.",
     goals:["Master 10 legal and political terms","Discuss Dutch governance and policy","Navigate courtroom and political vocabulary"]},

    {type:"teach", trg:"de aangeklaagde", src:"the accused / the defendant", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanklagen' (to accuse/prosecute).\n'De aanklager' = the prosecutor.",
     example:"A: De aangeklaagde ontkent alles.\nB: Heeft hij een advocaat?\nA: Ja, een bekende strafpleiter.\nB: Dan wordt het een interessante zaak.",
     exampleSrc:"A: The accused denies everything.\nB: Does he have a lawyer?\nA: Yes, a well-known criminal defence lawyer.\nB: Then it will be an interesting case.",
     funFact:"In Dutch law, the accused is 'onschuldig tot het tegendeel bewezen is' (innocent until proven guilty), just like in English common law."},

    {type:"teach", trg:"het aandachtspunt", src:"the point of attention / concern", pos:"noun", gender:"n",
     note:"Neuter (het). Aandacht (attention) + punt (point).\nVery common in meetings and reports.",
     example:"A: Ik heb een paar aandachtspunten.\nB: Ga je gang.\nA: Ten eerste de kosten, ten tweede de planning.\nB: Goed, laten we die bespreken.",
     exampleSrc:"A: I have a few points of concern.\nB: Go ahead.\nA: First the costs, second the planning.\nB: Good, let's discuss those.",
     funFact:"'Aandachtspunt' is a favourite word in Dutch corporate and government language. It sounds softer than 'probleem' (problem)."},

    {type:"teach", trg:"het kiezerspubliek", src:"the electorate / voting public", pos:"noun", gender:"n",
     note:"Neuter (het). Kiezer (voter) + publiek (public).\n'De kiezer' = the voter.",
     example:"A: Het kiezerspubliek is verdeeld.\nB: Over welk onderwerp?\nA: Immigratie en de economie.\nB: Die thema's spelen altijd mee.",
     exampleSrc:"A: The electorate is divided.\nB: On which topic?\nA: Immigration and the economy.\nB: Those themes always play a role.",
     funFact:"The Netherlands has a proportional representation system with many parties. Coalition governments are the norm, requiring compromise."},

    {type:"teach", trg:"de feministe", src:"the feminist (female)", pos:"noun", gender:"n",
     note:"Common gender (de). From 'feminisme' (feminism).\n'De feministische beweging' = the feminist movement.",
     example:"A: Aletta Jacobs was een beroemde feministe.\nB: Wat heeft zij gedaan?\nA: Ze streed voor vrouwenkiesrecht.\nB: En ze was de eerste vrouwelijke student.",
     exampleSrc:"A: Aletta Jacobs was a famous feminist.\nB: What did she do?\nA: She fought for women's suffrage.\nB: And she was the first female student.",
     funFact:"Aletta Jacobs (1854-1929) was a pioneer: first female Dutch university student, first female doctor, and leader of the suffrage movement."},

    {type:"mc",
     q:"'De aangeklaagde' is de persoon die:",
     opts:["Beschuldigd wordt van een misdrijf","De rechter is","Getuigt in de rechtszaal","Iemand aanklaagt"],
     ans:"Beschuldigd wordt van een misdrijf",
     hint:"The 'aan-ge-klaagd-e' is the one who has been accused. The passive form of 'aanklagen'."},

    {type:"teach", trg:"het dadergedrag", src:"perpetrator behaviour", pos:"noun", gender:"n",
     note:"Neuter (het). Dader (perpetrator) + gedrag (behaviour).\nUsed in criminology and legal contexts.",
     example:"A: De politie onderzoekt het dadergedrag.\nB: Wat bedoel je daarmee?\nA: Het patroon van de dader, hoe hij te werk ging.\nB: Dat helpt om meer zaken op te lossen.",
     exampleSrc:"A: The police are investigating the perpetrator behaviour.\nB: What do you mean by that?\nA: The pattern of the perpetrator, how he operated.\nB: That helps to solve more cases.",
     funFact:"Dutch criminology uses 'daderprofiel' (offender profile) and 'dadergedrag' (offender behaviour) as standard analytical terms."},

    {type:"teach", trg:"de beleidsmens", src:"the policy person / policy-oriented person", pos:"noun", gender:"c",
     note:"Common gender (de). Beleid (policy) + mens (person).\nSomeone who thinks in terms of policy.",
     example:"A: Zij is echt een beleidsmens.\nB: Hoe bedoel je?\nA: Ze denkt altijd in regels en procedures.\nB: Dat kan handig zijn, maar soms ook frustrerend.",
     exampleSrc:"A: She is really a policy person.\nB: What do you mean?\nA: She always thinks in rules and procedures.\nB: That can be useful, but sometimes also frustrating.",
     funFact:"Dutch governance is heavily policy-driven. The word 'beleid' appears in countless compounds: milieubeleid, onderwijsbeleid, zorgbeleid."},

    {type:"teach", trg:"het establishment", src:"the establishment", pos:"noun", gender:"n",
     note:"Neuter (het). English loanword.\nThe ruling elite or traditional power structure.",
     example:"A: Hij is tegen het establishment.\nB: Waarom?\nA: Hij vindt dat de elite te veel macht heeft.\nB: Dat is een populair standpunt tegenwoordig.",
     exampleSrc:"A: He is against the establishment.\nB: Why?\nA: He thinks the elite has too much power.\nB: That is a popular viewpoint nowadays.",
     funFact:"Anti-establishment sentiment has grown in Dutch politics. Parties like the PVV and FvD positioned themselves as challengers to the traditional order."},

    {type:"fb",
     s:"De {1} ontkent alle beschuldigingen en pleit onschuldig.",
     a:["aangeklaagde"],
     opts:["aangeklaagde","aanklager","rechter","advocaat"],
     hint:"The person in court who has been formally charged with a crime.",
     sSrc:"The {1} denies all accusations and pleads not guilty."},

    {type:"teach", trg:"de hoeder", src:"the guardian / custodian", pos:"noun", gender:"c",
     note:"Common gender (de). From 'hoeden' (to guard/protect).\n'De hoeder van de wet' = the guardian of the law.",
     example:"A: De politie is de hoeder van de openbare orde.\nB: Ja, dat is hun belangrijkste taak.\nA: Maar ze moeten ook vertrouwen winnen.\nB: Dat gaat niet altijd gemakkelijk.",
     exampleSrc:"A: The police are the guardians of public order.\nB: Yes, that is their most important task.\nA: But they also need to earn trust.\nB: That doesn't always go easily.",
     funFact:"The formal phrase 'hoeder van' (guardian of) is used in Dutch legal and political language: 'hoeder van de grondwet' (guardian of the constitution)."},

    {type:"teach", trg:"de hostess", src:"the hostess / receptionist", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword.\nA female host at events or receptions.",
     example:"A: De hostess verwelkomt de gasten bij de ingang.\nB: Is zij van het bedrijf zelf?\nA: Nee, ze werkt voor een hostessbureau.\nB: Ze doet het heel professioneel.",
     exampleSrc:"A: The hostess welcomes the guests at the entrance.\nB: Is she from the company itself?\nA: No, she works for a hostess agency.\nB: She does it very professionally.",
     funFact:"In the Netherlands, 'hostess' often refers to a professional event host. A 'hostessbureau' provides staff for corporate events and fairs."},

    {type:"mc",
     q:"Een 'beleidsmens' is iemand die:",
     opts:["Altijd beleidsregels overtreedt","Denkt in regels, procedures en beleid","Beleid saboteert","Nooit naar vergaderingen gaat"],
     ans:"Denkt in regels, procedures en beleid",
     hint:"B... (policy) + mens (person). Someone whose thinking revolves around policy and procedure."},

    {type:"fb",
     s:"De politie is de {1} van de openbare orde.",
     a:["hoeder"],
     opts:["hoeder","hostess","beleidsmens","aangeklaagde"],
     hint:"The one who guards or protects. A custodian or guardian figure.",
     sSrc:"The police are the {1} of public order."},

    {type:"match", pairs:[
      {trg:"aangeklaagde", src:"the accused"},
      {trg:"aandachtspunt", src:"point of concern"},
      {trg:"kiezerspubliek", src:"electorate"},
      {trg:"feministe", src:"feminist (female)"}
    ]},

    {type:"mc",
     q:"Welk politiek systeem heeft Nederland?",
     opts:["Eenpartijstaat","Tweepartijenstelsel","Proportionele vertegenwoordiging met veel partijen","Presidentieel systeem"],
     ans:"Proportionele vertegenwoordiging met veel partijen",
     hint:"Many parties, coalition governments, and lots of compromise. Very different from the UK or US."},

    {type:"fb",
     s:"Ik heb een paar {1} voor de vergadering van morgen.",
     a:["aandachtspunten"],
     opts:["aandachtspunten","aangeklaagden","beleidsmennen","hostessen"],
     hint:"Topics that need special attention. Softer than saying 'problems'.",
     sSrc:"I have a few {1} for tomorrow's meeting."},

    {type:"match", pairs:[
      {trg:"dadergedrag", src:"perpetrator behaviour"},
      {trg:"beleidsmens", src:"policy person"},
      {trg:"establishment", src:"establishment"},
      {trg:"hoeder", src:"guardian"}
    ]}
  ]
};
export default LESSON_13;
