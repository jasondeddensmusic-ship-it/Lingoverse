// Batch 3 — Unit 34 Lesson 2 (International Relations: Conflict & Human Rights)
const BATCH3_L_2 = {
  id:"itv2_u34l_b3_2", title:"Conflitti e diritti umani", icon:"✊", xp:15, board:true,
  steps:[
    {type:"intro", title:"Conflitti e diritti umani",
     desc:"Learn vocabulary for armed conflicts, human rights frameworks, and humanitarian crises. Essential for understanding Italian and international news about global security issues.",
     goals:["Discuss armed conflicts and their consequences","Describe human rights frameworks and violations","Understand humanitarian crisis vocabulary"]},

    {type:"teach", trg:"i diritti umani", src:"human rights", pos:"noun", gender:"m",
     note:"Masculine plural noun. 'Dichiarazione universale dei diritti umani' = Universal Declaration of Human Rights.\n'Violazione dei diritti umani' = human rights violation.",
     example:"A: I diritti umani sono universali e inalienabili.\nB: La Dichiarazione del 1948 li elenca in 30 articoli.",
     exampleSrc:"A: Human rights are universal and inalienable.\nB: The 1948 Declaration lists them in 30 articles.",
     funFact:"Italy's Constitution (1948) incorporates human rights principles directly. Article 10 grants asylum to foreigners denied democratic freedoms in their countries, making Italy constitutionally committed to refugee protection."},

    {type:"teach", trg:"il genocidio", src:"genocide", pos:"noun", gender:"m",
     note:"Masculine noun. The deliberate killing of a large group of people.\n'Crimine contro l'umanita' = crime against humanity.",
     example:"A: Il genocidio e il crimine piu grave previsto dal diritto internazionale.\nB: La Corte Penale Internazionale ha il compito di giudicarlo.",
     exampleSrc:"A: Genocide is the most serious crime under international law.\nB: The International Criminal Court has the task of judging it.",
     funFact:"Raphael Lemkin coined 'genocide' in 1944. Italy ratified the UN Genocide Convention in 1952. Italian courts have tried cases related to historical atrocities in Ethiopia during the colonial period, though many convictions came very late."},

    {type:"teach", trg:"il profugo", src:"the displaced person / refugee (informal)", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la profuga.\nA person forced to flee their home. 'Profugo di guerra' = war refugee.",
     example:"A: Milioni di profughi hanno attraversato il Mediterraneo.\nB: Molti non sopravvivono al viaggio.",
     exampleSrc:"A: Millions of displaced people have crossed the Mediterranean.\nB: Many do not survive the journey.",
     funFact:"Italian distinguishes 'profugo' (general: any displaced person), 'rifugiato' (legal: recognized by international law), and 'sfollato' (internal: displaced within their own country). The Mediterranean crossing has made these words tragically common in Italian news."},

    {type:"teach", trg:"la Corte Penale Internazionale", src:"the International Criminal Court", pos:"noun", gender:"f",
     note:"Feminine compound noun. Abbreviated CPI.\nThe court that prosecutes genocide, war crimes, and crimes against humanity.",
     example:"A: La Corte Penale Internazionale ha sede all'Aia.\nB: L'Italia e tra i suoi principali sostenitori.",
     exampleSrc:"A: The International Criminal Court is based in The Hague.\nB: Italy is among its main supporters.",
     funFact:"Italy played a key role in establishing the ICC, hosting the 1998 Rome Conference where the founding statute was adopted. 'Lo Statuto di Roma' bears the city's name, reflecting Italy's commitment to international criminal justice."},

    {type:"teach", trg:"la zona di conflitto", src:"the conflict zone", pos:"noun", gender:"f",
     note:"Feminine compound noun. An area where armed conflict is taking place.\n'Zona di guerra' = war zone.",
     example:"A: I giornalisti nelle zone di conflitto rischiano la vita.\nB: Il diritto internazionale dovrebbe proteggerli.",
     exampleSrc:"A: Journalists in conflict zones risk their lives.\nB: International law should protect them.",
     funFact:"Italian journalists have a tradition of frontline reporting. Ilaria Alpi was murdered in Somalia in 1994 while investigating arms trafficking. Her death remains unsolved and symbolizes the dangers faced by Italian reporters in conflict zones."},

    {type:"mc",
     q:"Dove fu adottato lo statuto fondativo della Corte Penale Internazionale?",
     opts:["A Ginevra nel 1945","All'Aia nel 2002","A Roma nel 1998","A New York nel 1948"],
     ans:"A Roma nel 1998",
     hint:"This foundational treaty bears the name of the Italian capital where the conference was held. Italy hosted and championed the court's creation."},

    {type:"teach", trg:"l'asilo politico", src:"political asylum", pos:"noun", gender:"m",
     note:"Masculine compound noun. Protection granted to political refugees.\n'Chiedere asilo' = to seek asylum. 'Diritto d'asilo' = right of asylum.",
     example:"A: Migliaia di persone chiedono asilo politico in Italia ogni anno.\nB: Le commissioni territoriali valutano ogni richiesta.",
     exampleSrc:"A: Thousands of people seek political asylum in Italy every year.\nB: Territorial commissions evaluate each request.",
     funFact:"Italy's constitutional right to asylum (Article 10) is broader than most: it protects anyone denied democratic freedoms, not just those facing individual persecution. This generous wording sometimes conflicts with more restrictive EU policies."},

    {type:"teach", trg:"la tortura", src:"torture", pos:"noun", gender:"f",
     note:"Feminine noun. 'Divieto di tortura' = prohibition of torture.\nItaly only criminalized torture explicitly in 2017.",
     example:"A: La tortura e vietata da tutte le convenzioni internazionali.\nB: L'Italia ha introdotto il reato di tortura solo nel 2017.",
     exampleSrc:"A: Torture is prohibited by all international conventions.\nB: Italy only introduced the crime of torture in 2017.",
     funFact:"Italy was repeatedly criticized for lacking a specific torture law until 2017. The G8 summit protests in Genoa (2001), where detainees were mistreated, and the Diaz school raid catalyzed the long-delayed legislative change."},

    {type:"teach", trg:"il cessate il fuoco", src:"the ceasefire", pos:"noun", gender:"m",
     note:"Masculine compound noun. Invariable. An agreement to stop fighting.\n'Dichiarare il cessate il fuoco' = to declare a ceasefire.",
     example:"A: Le due parti hanno accettato un cessate il fuoco.\nB: Ma la tregua potrebbe non durare.",
     exampleSrc:"A: The two sides accepted a ceasefire.\nB: But the truce might not last.",
     funFact:"'Cessate il fuoco' is a calque from French 'cessez le feu.' Italian peacekeepers have helped negotiate ceasefires in Lebanon and the Balkans, where the 'approccio italiano' of community engagement proved effective."},

    {type:"fb",
     s:"L'articolo 10 della Costituzione italiana garantisce il diritto d'{1} a chi e perseguitato.",
     a:["asilo"],
     opts:["asilo","veto","embargo","cessate"],
     hint:"Protection offered to people fleeing persecution. Italy's Constitution guarantees this right in Article 10.",
     sSrc:"Article 10 of the Italian Constitution guarantees the right of {1} to those who are persecuted."},

    {type:"teach", trg:"le mine antiuomo", src:"antipersonnel landmines", pos:"noun", gender:"f",
     note:"Feminine plural noun. Hidden explosive devices targeting people.\n'Sminamento' = demining. 'Trattato di Ottawa' = Ottawa Treaty (banning mines).",
     example:"A: Le mine antiuomo continuano a uccidere anni dopo la fine dei conflitti.\nB: L'Italia ha firmato il trattato per la loro messa al bando.",
     exampleSrc:"A: Antipersonnel landmines continue to kill years after conflicts end.\nB: Italy signed the treaty banning them.",
     funFact:"Italy was once a major landmine producer but became a leader in the campaign to ban them. Italian demining organizations work in former conflict zones from Cambodia to Mozambique, clearing mines and unexploded ordnance."},

    {type:"teach", trg:"la sicurezza collettiva", src:"collective security", pos:"noun", gender:"f",
     note:"Feminine compound noun. The principle that an attack on one is an attack on all.\n'Sistema di sicurezza collettiva' = collective security system.",
     example:"A: La sicurezza collettiva e il principio fondante della NATO.\nB: Un attacco a un membro e un attacco a tutti.",
     exampleSrc:"A: Collective security is NATO's founding principle.\nB: An attack on one member is an attack on all.",
     funFact:"Article 5 of the NATO treaty (collective defense) was invoked for the first and only time after 9/11. Italy contributed troops to the resulting operations in Afghanistan, its longest overseas military engagement since World War II."},

    {type:"teach", trg:"lo sfollato", src:"the internally displaced person", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la sfollata.\nA person displaced within their own country. Different from 'rifugiato' (crosses a border).",
     example:"A: Il terremoto ha creato migliaia di sfollati.\nB: Vivono in alloggi temporanei da mesi.",
     exampleSrc:"A: The earthquake created thousands of displaced persons.\nB: They have been living in temporary housing for months.",
     funFact:"Italy itself has experienced internal displacement from earthquakes: L'Aquila (2009), Emilia (2012), Amatrice (2016). Reconstruction is notoriously slow, and some sfollati wait years for permanent housing. This domestic experience informs Italian empathy for global displacement."},

    {type:"mc",
     q:"Perche l'Italia fu criticata per non avere una legge specifica sulla tortura fino al 2017?",
     opts:["Perche la Costituzione vietava esplicitamente qualsiasi legge penale sulla tortura","Perche episodi come i fatti del G8 di Genova 2001 evidenziarono la lacuna legislativa","Perche gli altri paesi europei non avevano leggi sulla tortura","Perche la tortura non era mai avvenuta sul territorio italiano"],
     ans:"Perche episodi come i fatti del G8 di Genova 2001 evidenziarono la lacuna legislativa",
     hint:"Events during the 2001 G8 summit in Genoa, where detainees were mistreated, highlighted the absence of a specific torture law."},

    {type:"match", pairs:[
      {trg:"diritti umani", src:"human rights"},
      {trg:"profugo", src:"displaced person"},
      {trg:"asilo politico", src:"political asylum"},
      {trg:"cessate il fuoco", src:"ceasefire"},
      {trg:"sfollato", src:"internally displaced"}
    ]},

    {type:"fb",
     s:"La {1} Penale Internazionale giudica i crimini piu gravi come il genocidio.",
     a:["Corte"],
     opts:["Corte","Commissione","Assemblea","Organizzazione"],
     hint:"This international judicial body, based in The Hague, prosecutes the most serious crimes. Its founding statute was adopted in Rome in 1998.",
     sSrc:"The International Criminal {1} judges the most serious crimes such as genocide."},

    {type:"mc",
     q:"Qual e la differenza tra 'profugo,' 'rifugiato' e 'sfollato' in italiano?",
     opts:["Sono tre sinonimi perfetti e intercambiabili in ogni contesto","Il profugo e generico, il rifugiato ha status giuridico internazionale, lo sfollato e interno al proprio paese","Il profugo viene dall'Africa, il rifugiato dal Medio Oriente, lo sfollato dall'Europa orientale","La differenza riguarda solo l'eta: profugo per adulti, rifugiato per famiglie, sfollato per minori"],
     ans:"Il profugo e generico, il rifugiato ha status giuridico internazionale, lo sfollato e interno al proprio paese",
     hint:"Three related but distinct terms: one is general, one has specific legal recognition under international law, and one refers to displacement within national borders."}
  ,{type:"match",pairs:[{trg:"il genocidio",src:"genocide"},{trg:"la zona di conflitto",src:"the conflict zone"},{trg:"le mine antiuomo",src:"antipersonnel landmines"},{trg:"la sicurezza collettiva",src:"collective security"}]}]
};
export default BATCH3_L_2;
