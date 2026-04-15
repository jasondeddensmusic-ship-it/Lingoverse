// L19: Bedrijfsleven — Corporate and Business Life
const LESSON_19 = {
  id:"nlv2_b2gC_l19", title:"Bedrijfsleven", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Corporate and Business Life",
     desc:"Navigate the Dutch corporate world with advanced business vocabulary. From organisational structures to investment strategies, these terms power professional Dutch.",
     goals:["Master 10 advanced business terms","Discuss corporate strategy and structures","Navigate Dutch professional language"]},

    {type:"teach", trg:"de investeringsaanpak", src:"the investment approach", pos:"noun", gender:"c",
     note:"Common gender (de). Investering (investment) + aanpak (approach).\n'Aanpakken' = to tackle/approach.",
     example:"A: Wat is jullie investeringsaanpak?\nB: We focussen op duurzame energie.\nA: Is dat rendabel?\nB: Op de lange termijn zeker.",
     exampleSrc:"A: What is your investment approach?\nB: We focus on sustainable energy.\nA: Is that profitable?\nB: In the long term, certainly.",
     funFact:"The Dutch pension funds are among the largest investors in the world. ABP alone manages over 500 billion euros."},

    {type:"teach", trg:"de kern-activiteit", src:"the core activity", pos:"noun", gender:"c",
     note:"Common gender (de). Kern (core) + activiteit (activity).\n'De kernactiviteiten van het bedrijf' = the company's core activities.",
     example:"A: Wat is de kern-activiteit van jullie bedrijf?\nB: Softwareontwikkeling voor ziekenhuizen.\nA: Een nichemarkt.\nB: Ja, maar wel een groeiende.",
     exampleSrc:"A: What is the core activity of your company?\nB: Software development for hospitals.\nA: A niche market.\nB: Yes, but a growing one.",
     funFact:"'Kern' (core) appears in many Dutch compounds: kernenergie (nuclear energy), kernprobleem (core problem), kernwapen (nuclear weapon)."},

    {type:"teach", trg:"de interimbasis", src:"the interim basis / temporary basis", pos:"noun", gender:"c",
     note:"Common gender (de). Interim (temporary) + basis.\n'Op interimbasis werken' = to work on a temporary basis.",
     example:"A: Ik werk hier op interimbasis.\nB: Hoe lang al?\nA: Drie maanden, maar het kan verlengd worden.\nB: Hoop je op een vast contract?",
     exampleSrc:"A: I work here on an interim basis.\nB: For how long?\nA: Three months, but it can be extended.\nB: Are you hoping for a permanent contract?",
     funFact:"The Netherlands has a large 'interim' culture. Many professionals work as 'zzp'ers' (zelfstandige zonder personeel = freelancers) on temporary assignments."},

    {type:"teach", trg:"de initiatiefneemster", src:"the (female) initiator", pos:"noun", gender:"c",
     note:"Common gender (de). Initiatief (initiative) + neemster (female taker).\n'De initiatiefnemer' = male/general form.",
     example:"A: Wie is de initiatiefneemster van dit project?\nB: Mijn collega Sarah.\nA: Zij had het idee?\nB: Ja, zij heeft alles opgezet.",
     exampleSrc:"A: Who is the initiator of this project?\nB: My colleague Sarah.\nA: She had the idea?\nB: Yes, she set everything up.",
     funFact:"Dutch adds '-ster' for feminine agent nouns: schrijver/schrijfster, nemer/neemster. This pattern is becoming less used as gender-neutral language grows."},

    {type:"mc",
     q:"'Zzp'er' staat voor:",
     opts:["Zeer zuinig persoon","Zelfstandige zonder personeel","Zakelijke zakenpartner","Zorgzame ziekenhuisprofessional"],
     ans:"Zelfstandige zonder personeel",
     hint:"A self-employed person without staff. The Dutch term for a freelancer or solo entrepreneur."},

    {type:"teach", trg:"de bindkosten", src:"the binding costs / commitment costs", pos:"noun", gender:"c",
     note:"Common gender (de). Bind (binding) + kosten (costs).\nCosts associated with contractual commitments.",
     example:"A: De bindkosten van dit contract zijn hoog.\nB: Hoeveel moeten we vooraf betalen?\nA: Twintigduizend euro.\nB: Dat is een flinke investering.",
     exampleSrc:"A: The binding costs of this contract are high.\nB: How much do we have to pay upfront?\nA: Twenty thousand euros.\nB: That's a significant investment.",
     funFact:"Dutch business culture values contracts and clear agreements. 'Afspraak is afspraak' (a deal is a deal) is a core Dutch business principle."},

    {type:"teach", trg:"de kostenplaat", src:"the cost overview / cost picture", pos:"noun", gender:"c",
     note:"Common gender (de). Kosten (costs) + plaat (plate/picture).\n'De totale kostenplaat' = the total cost picture.",
     example:"A: Hoe ziet de kostenplaat eruit?\nB: De totale kosten zijn tweehonderdduizend euro.\nA: Dat is boven het budget.\nB: We moeten besparen op materiaal.",
     exampleSrc:"A: What does the cost picture look like?\nB: The total costs are two hundred thousand euros.\nA: That's above the budget.\nB: We need to save on materials.",
     funFact:"'Kostenplaat' is corporate jargon. Dutch business language loves compounds that paint a picture: 'toekomstplaatje' (future picture), 'verdienmodel' (earning model)."},

    {type:"teach", trg:"de divisiestructuur", src:"the divisional structure", pos:"noun", gender:"c",
     note:"Common gender (de). Divisie (division) + structuur (structure).\nAn organisational model with separate divisions.",
     example:"A: We schakelen over naar een divisiestructuur.\nB: Wat betekent dat voor onze afdeling?\nA: Meer autonomie, maar ook meer verantwoordelijkheid.\nB: Dat klinkt goed.",
     exampleSrc:"A: We're switching to a divisional structure.\nB: What does that mean for our department?\nA: More autonomy, but also more responsibility.\nB: That sounds good.",
     funFact:"Large Dutch multinationals like Shell, Unilever, and Philips use divisional structures. The Netherlands is home to many Fortune 500 companies."},

    {type:"fb",
     s:"Wat is de {1} van jullie bedrijf? Waar ligt de focus?",
     a:["kern-activiteit"],
     opts:["kern-activiteit","kostenplaat","divisiestructuur","bindkosten"],
     hint:"The main thing a company does. Its primary business activity.",
     sSrc:"What is the {1} of your company? Where is the focus?"},

    {type:"teach", trg:"het franc", src:"the franc (currency)", pos:"noun", gender:"n",
     note:"Neuter (het). The former currency of France, Belgium, and Switzerland.\n'De gulden' was the Dutch currency before the euro.",
     example:"A: Belgie had vroeger de franc.\nB: Ja, en Nederland de gulden.\nA: Nu hebben we allemaal de euro.\nB: Sommige mensen missen de gulden nog.",
     exampleSrc:"A: Belgium used to have the franc.\nB: Yes, and the Netherlands the guilder.\nA: Now we all have the euro.\nB: Some people still miss the guilder.",
     funFact:"The Dutch guilder ('gulden') was used for over 400 years before the euro replaced it in 2002. Many Dutch people still convert prices mentally."},

    {type:"teach", trg:"de cliënt", src:"the client", pos:"noun", gender:"c",
     note:"Common gender (de). From Latin 'cliens'.\n'De cliënt van de advocaat' = the lawyer's client.",
     example:"A: De cliënt wil meer informatie.\nB: Over welk onderwerp?\nA: Over de voortgang van de zaak.\nB: Ik bel hem vanmiddag terug.",
     exampleSrc:"A: The client wants more information.\nB: About which topic?\nA: About the progress of the case.\nB: I'll call him back this afternoon.",
     funFact:"In Dutch, 'cliënt' is used for legal and social services clients. For business customers, 'klant' (customer) is more common."},

    {type:"mc",
     q:"Welke munt had Nederland voor de euro?",
     opts:["De franc","De mark","De gulden","De kroon"],
     ans:"De gulden",
     hint:"This Dutch currency was used for over 400 years. Its name means 'golden'."},

    {type:"fb",
     s:"Ze werkt hier op {1}, haar contract loopt over drie maanden af.",
     a:["interimbasis"],
     opts:["interimbasis","jaarbasis","kern-activiteit","divisiestructuur"],
     hint:"A temporary, short-term working arrangement. Not permanent.",
     sSrc:"She works here on an {1}, her contract expires in three months."},

    {type:"match", pairs:[
      {trg:"investeringsaanpak", src:"investment approach"},
      {trg:"kern-activiteit", src:"core activity"},
      {trg:"interimbasis", src:"interim basis"},
      {trg:"bindkosten", src:"binding costs"}
    ]},

    {type:"mc",
     q:"Het verschil tussen 'cliënt' en 'klant' is:",
     opts:["Er is geen verschil","Cliënt is voor juridische/sociale diensten, klant voor winkels","Klant is formeler","Cliënt is informeler"],
     ans:"Cliënt is voor juridische/sociale diensten, klant voor winkels",
     hint:"A lawyer has clients, a shop has customers. Different professional contexts."},

    {type:"fb",
     s:"De totale {1} laat zien dat we boven het budget zitten.",
     a:["kostenplaat"],
     opts:["kostenplaat","divisiestructuur","investeringsaanpak","kern-activiteit"],
     hint:"The complete overview of all costs, giving a 'picture' of the financial situation.",
     sSrc:"The total {1} shows that we are over budget."},

    {type:"match", pairs:[
      {trg:"kostenplaat", src:"cost overview"},
      {trg:"divisiestructuur", src:"divisional structure"},
      {trg:"franc", src:"franc (currency)"},
      {trg:"cliënt", src:"client"}
    ]}
  ]
};
export default LESSON_19;
