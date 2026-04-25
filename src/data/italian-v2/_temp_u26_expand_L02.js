// Unit 26 Expansion. Lesson 5: I diritti civili
const LESSON_5 = {
  id:"itv2_u26l5", title:"I diritti civili (II)", icon:"✊", xp:15, board:true,
  steps:[
    {type:"intro", title:"I diritti civili",
     desc:"Learn vocabulary for discussing civil rights, social justice, and democratic principles. These terms are essential for understanding Italian political and social debates.",
     goals:["Discuss fundamental civil rights and freedoms","Describe equality and anti-discrimination concepts","Express opinions on social justice issues"]},

    {type:"teach", trg:"l'uguaglianza", src:"the equality", pos:"noun", gender:"f",
     note:"Feminine noun. 'Uguaglianza di genere' = gender equality.\n'Tutti i cittadini sono uguali davanti alla legge.' = All citizens are equal before the law.",
     example:"A: L'uguaglianza davanti alla legge e un principio fondamentale.\nB: L'articolo 3 della Costituzione lo afferma chiaramente.",
     exampleSrc:"A: Equality before the law is a fundamental principle.\nB: Article 3 of the Constitution states it clearly.",
     funFact:"Article 3 of the Italian Constitution is one of its most cited provisions. It forbids discrimination based on sex, race, language, religion, political opinion, or social condition, and commits the Republic to removing obstacles to full equality."},

    {type:"teach", trg:"la discriminazione", src:"the discrimination", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le discriminazioni.\n'Discriminazione razziale' = racial discrimination.\n'Antidiscriminazione' = anti-discrimination.",
     example:"A: La discriminazione sul lavoro e ancora diffusa.\nB: Le donne guadagnano meno a parita di ruolo.",
     exampleSrc:"A: Workplace discrimination is still widespread.\nB: Women earn less for the same role.",
     funFact:"Italy's gender pay gap is around 13%, lower than the EU average, but women's employment rate is among the lowest in Europe at about 52%. The 'tetto di cristallo' (glass ceiling) remains a major topic in Italian feminist discourse."},

    {type:"teach", trg:"la tutela", src:"the protection / safeguarding", pos:"noun", gender:"f",
     note:"Feminine noun. 'Tutela dei diritti' = protection of rights.\n'Tutela ambientale' = environmental protection. 'Tutore' = legal guardian.",
     example:"A: La tutela dei diritti delle minoranze e essenziale.\nB: Una democrazia si misura da come tratta i piu deboli.",
     exampleSrc:"A: The protection of minority rights is essential.\nB: A democracy is measured by how it treats the weakest.",
     funFact:"'Tutela' comes from Latin 'tutela' (guardianship). Italy has specific laws for the 'tutela dei minori' (child protection), 'tutela del consumatore' (consumer protection), and 'tutela del paesaggio' (landscape protection, enshrined in Article 9)."},

    {type:"teach", trg:"il suffragio universale", src:"the universal suffrage", pos:"noun", gender:"m",
     note:"Masculine compound noun. The right of all adult citizens to vote.\n'Diritto di voto' = right to vote.",
     example:"A: Il suffragio universale in Italia e stato introdotto nel 1946.\nB: Per la prima volta anche le donne poterono votare.",
     exampleSrc:"A: Universal suffrage in Italy was introduced in 1946.\nB: For the first time women could also vote.",
     funFact:"Italian women voted for the first time on June 2, 1946, in the referendum that abolished the monarchy. That date, 'Festa della Repubblica,' is now a national holiday. 21 women were elected to the Constituent Assembly that wrote the Constitution."},

    {type:"teach", trg:"l'asilo politico", src:"the political asylum", pos:"noun", gender:"m",
     note:"Masculine compound noun. Protection granted to people fleeing persecution.\n'Richiedente asilo' = asylum seeker. 'Diritto di asilo' = right of asylum.",
     example:"A: Ha chiesto asilo politico in Italia.\nB: Fuggiva da un regime dittatoriale.",
     exampleSrc:"A: He requested political asylum in Italy.\nB: He was fleeing a dictatorial regime.",
     funFact:"Article 10 of the Italian Constitution guarantees the right of asylum to foreigners who are denied democratic freedoms in their own countries. Italy processes tens of thousands of asylum claims yearly, mostly through 'commissioni territoriali.'"},

    {type:"mc",
     q:"In che anno le donne italiane hanno votato per la prima volta?",
     opts:["1946","1960","1975","1918"],
     ans:"1946",
     hint:"The same year Italy became a republic through a historic referendum. Women's first vote coincided with the end of the monarchy."},

    {type:"teach", trg:"la parita", src:"the parity / equal status", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Parita di genere' = gender parity. 'Parita salariale' = equal pay.",
     example:"A: La parita di genere e ancora lontana.\nB: Servono piu donne nei ruoli dirigenziali.",
     exampleSrc:"A: Gender parity is still far away.\nB: More women are needed in leadership roles.",
     funFact:"Italy introduced gender quotas ('quote rosa,' literally 'pink quotas') for corporate boards in 2011 and for electoral lists. The term 'quote rosa' is uniquely Italian, using the color traditionally associated with femininity."},

    {type:"teach", trg:"la petizione", src:"the petition", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le petizioni.\n'Firmare una petizione' = to sign a petition.\n'Diritto di petizione' = right to petition.",
     example:"A: La petizione ha raccolto centomila firme.\nB: Sara presentata al Parlamento.",
     exampleSrc:"A: The petition collected one hundred thousand signatures.\nB: It will be presented to Parliament.",
     funFact:"Italian citizens can propose laws through 'iniziativa popolare' (popular initiative), requiring 50,000 signatures. Online petitions on platforms like Change.org have become increasingly popular in Italy for mobilizing public opinion."},

    {type:"fb",
     s:"L'{1} davanti alla legge e garantita dall'articolo 3 della Costituzione.",
     a:["uguaglianza"],
     opts:["uguaglianza","discriminazione","tutela","petizione"],
     hint:"The principle that all citizens have the same rights and receive the same treatment. No one is above or below another.",
     sSrc:"{1} before the law is guaranteed by Article 3 of the Constitution."},

    {type:"teach", trg:"la minoranza", src:"the minority", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le minoranze.\n'Minoranze linguistiche' = linguistic minorities.\n'Tutela delle minoranze' = protection of minorities.",
     example:"A: L'Italia ha diverse minoranze linguistiche protette.\nB: Come gli albanesi, i catalani e i ladini.",
     exampleSrc:"A: Italy has several protected linguistic minorities.\nB: Such as the Albanians, Catalans, and Ladins.",
     funFact:"Article 6 of the Constitution protects linguistic minorities. Italy recognizes 12 historical minority languages including Friulian, Sardinian, Albanian, Greek, Catalan, and German-speaking South Tyroleans. Each has specific rights to education and public services."},

    {type:"teach", trg:"il referendum", src:"the referendum", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i referendum (invariable).\n'Referendum abrogativo' = referendum to repeal a law. 'Referendum costituzionale' = constitutional referendum.",
     example:"A: Il referendum sul divorzio del 1974 fu un momento storico.\nB: Gli italiani scelsero di mantenere la legge.",
     exampleSrc:"A: The 1974 referendum on divorce was a historic moment.\nB: Italians chose to keep the law.",
     funFact:"Italy uses referendums extensively. Citizens can call a referendum to repeal existing laws by collecting 500,000 signatures. The 1974 divorce referendum and 1981 abortion referendum were defining moments in Italian social history."},

    {type:"mc",
     q:"Che cosa sono le 'quote rosa' in Italia?",
     opts:["Prezzi scontati per le donne","Quote di genere per garantire la presenza femminile in ruoli decisionali","Un tipo di fiore usato nelle elezioni","Un partito politico femminista"],
     ans:"Quote di genere per garantire la presenza femminile in ruoli decisionali",
     hint:"Gender quotas ensuring female representation. Called 'pink quotas' using the color traditionally associated with femininity in Italian culture."},

    {type:"teach", trg:"la manifestazione", src:"the demonstration / protest", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le manifestazioni.\n'Manifestare' (verb) = to demonstrate/protest.\n'Manifestazione pacifica' = peaceful demonstration.",
     example:"A: La manifestazione ha raccolto migliaia di persone.\nB: Protestavano contro la nuova legge sul lavoro.",
     exampleSrc:"A: The demonstration gathered thousands of people.\nB: They were protesting against the new labor law.",
     funFact:"Italy has a vibrant tradition of public protest. Article 17 of the Constitution guarantees the right to assemble peacefully. Major demonstrations regularly fill city centers, from labor marches on May 1st to student protests in autumn."},

    {type:"match", pairs:[
      {trg:"uguaglianza", src:"equality"},
      {trg:"discriminazione", src:"discrimination"},
      {trg:"tutela", src:"protection"},
      {trg:"parita", src:"parity"},
      {trg:"referendum", src:"referendum"}
    ]},

    {type:"fb",
     s:"La {1} ha raccolto centomila firme per chiedere una nuova legge.",
     a:["petizione"],
     opts:["petizione","manifestazione","minoranza","parita"],
     hint:"A formal written request signed by many people, presented to authorities to demand action or change. Citizens collect signatures.",
     sSrc:"The {1} collected one hundred thousand signatures to demand a new law."},

    {type:"mc",
     q:"Quante firme servono in Italia per proporre una legge di iniziativa popolare?",
     opts:["Un milione","Diecimila","Cinquantamila","Centomila"],
     ans:"Cinquantamila",
     hint:"A five-digit number in the tens of thousands. This is the constitutional threshold for citizens to submit a legislative proposal directly to Parliament."}
  ]
};
export default LESSON_5;
