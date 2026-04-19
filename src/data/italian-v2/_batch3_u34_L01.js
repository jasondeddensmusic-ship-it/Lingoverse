// Batch 3 — Unit 34 Lesson (International Relations: International Organizations)
const BATCH3_L_1 = {
  id:"itv2_u34l_b3_1", title:"Organizzazioni internazionali", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"Organizzazioni internazionali",
     desc:"Learn vocabulary for major international organizations, peacekeeping, and humanitarian action. Essential for understanding Italian foreign policy and global governance discussions.",
     goals:["Name major international organizations and their roles","Discuss peacekeeping and humanitarian operations","Understand Italy's contribution to international missions"]},

    {type:"teach", trg:"l'ONU", src:"the UN (United Nations)", pos:"noun", gender:"f",
     note:"Feminine noun. Stands for 'Organizzazione delle Nazioni Unite.'\n'Assemblea generale dell'ONU' = UN General Assembly.",
     example:"A: L'ONU e stata fondata nel 1945 per mantenere la pace.\nB: L'Italia ne e diventata membro nel 1955.",
     exampleSrc:"A: The UN was founded in 1945 to maintain peace.\nB: Italy became a member in 1955.",
     funFact:"Italy was initially excluded from the UN as a former Axis power but joined in 1955. Since then, Italy has been one of the largest contributors to UN peacekeeping operations, deploying more troops than almost any other Western country."},

    {type:"teach", trg:"il Consiglio di Sicurezza", src:"the Security Council", pos:"noun", gender:"m",
     note:"Masculine compound noun. The UN body responsible for peace and security.\n'Membro permanente/non permanente' = permanent/non-permanent member.",
     example:"A: Il Consiglio di Sicurezza ha cinque membri permanenti.\nB: L'Italia chiede da anni una riforma del Consiglio.",
     exampleSrc:"A: The Security Council has five permanent members.\nB: Italy has been calling for Council reform for years.",
     funFact:"Italy periodically serves as a non-permanent Security Council member (most recently in 2017). Italy advocates for reform: either expanding permanent membership or creating new rotating seats for regional groups."},

    {type:"teach", trg:"il caschi blu", src:"the Blue Helmets (UN peacekeepers)", pos:"noun", gender:"m",
     note:"Masculine plural noun. UN peacekeeping soldiers.\n'Missione di pace' = peace mission. 'Forze di interposizione' = interposition forces.",
     example:"A: I caschi blu italiani sono presenti in Libano dal 1978.\nB: L'Italia e tra i maggiori contributori di truppe dell'ONU.",
     exampleSrc:"A: Italian Blue Helmets have been present in Lebanon since 1978.\nB: Italy is among the largest troop contributors to the UN.",
     funFact:"Italy has lost over 100 soldiers in UN peacekeeping operations. The 2003 attack on the Italian contingent in Nassiriya, Iraq, which killed 19 soldiers, remains a deeply painful national memory."},

    {type:"teach", trg:"l'aiuto umanitario", src:"humanitarian aid", pos:"noun", gender:"m",
     note:"Masculine compound noun. Assistance to people affected by crises.\n'Corridoio umanitario' = humanitarian corridor.",
     example:"A: L'aiuto umanitario italiano si concentra sull'Africa e sul Mediterraneo.\nB: Le ONG italiane sono molto attive nelle zone di crisi.",
     exampleSrc:"A: Italian humanitarian aid focuses on Africa and the Mediterranean.\nB: Italian NGOs are very active in crisis zones.",
     funFact:"Italy pioneered 'humanitarian corridors' (corridoi umanitari), a program allowing refugees to travel safely and legally to Italy. This innovative model, launched in 2016 by Catholic and Protestant organizations, has been replicated in other EU countries."},

    {type:"teach", trg:"il G7", src:"the G7", pos:"noun", gender:"m",
     note:"Masculine noun. The group of seven advanced economies.\n'Vertice del G7' = G7 summit. Members: US, UK, France, Germany, Italy, Canada, Japan.",
     example:"A: Il G7 si riunisce ogni anno per discutere questioni globali.\nB: L'Italia ha ospitato il vertice nel 2024 in Puglia.",
     exampleSrc:"A: The G7 meets every year to discuss global issues.\nB: Italy hosted the summit in 2024 in Puglia.",
     funFact:"Italy is the smallest economy in the G7 but a founding member since 1975. Hosting the G7 is a major diplomatic event: the 2024 summit in Puglia brought world leaders to southern Italy, showcasing the region internationally."},

    {type:"mc",
     q:"Perche l'Italia fu inizialmente esclusa dalle Nazioni Unite?",
     opts:["Perche non aveva un sistema democratico riconosciuto","Perche era stata una potenza dell'Asse nella Seconda Guerra Mondiale","Perche non pagava i contributi finanziari richiesti","Perche la sua Costituzione non prevedeva la partecipazione a organizzazioni internazionali"],
     ans:"Perche era stata una potenza dell'Asse nella Seconda Guerra Mondiale",
     hint:"Former enemy nations were not immediately admitted. Italy had to wait ten years after the UN's founding before joining in 1955."},

    {type:"teach", trg:"la NATO", src:"NATO", pos:"noun", gender:"f",
     note:"Feminine noun. North Atlantic Treaty Organization.\nItalian: 'Organizzazione del Trattato dell'Atlantico del Nord.'",
     example:"A: L'Italia e membro della NATO dal 1949.\nB: La base di Aviano ospita aerei militari americani.",
     exampleSrc:"A: Italy has been a NATO member since 1949.\nB: The Aviano base hosts American military aircraft.",
     funFact:"Italy hosts several NATO bases, including the Joint Force Command in Naples and the NATO Defense College in Rome. American military bases on Italian soil are a perennial source of local and national debate."},

    {type:"teach", trg:"la missione di pace", src:"the peace mission", pos:"noun", gender:"f",
     note:"Feminine compound noun. A military or civilian operation to maintain peace.\n'Missione all'estero' = overseas mission.",
     example:"A: L'Italia partecipa a numerose missioni di pace nel mondo.\nB: Dalla Somalia al Libano, dal Kosovo all'Afghanistan.",
     exampleSrc:"A: Italy participates in numerous peace missions around the world.\nB: From Somalia to Lebanon, from Kosovo to Afghanistan.",
     funFact:"Italy's Article 11 of the Constitution rejects war but permits participation in peacekeeping. Italian soldiers are known for the 'approccio italiano': building relationships with local communities through dialogue, cultural sensitivity, and humanitarian assistance."},

    {type:"teach", trg:"l'ONG", src:"the NGO", pos:"noun", gender:"f",
     note:"Feminine noun. Stands for 'Organizzazione Non Governativa.'\n'ONG umanitaria' = humanitarian NGO.",
     example:"A: Le ONG italiane operano in oltre 80 paesi.\nB: Medici Senza Frontiere ha una forte sezione italiana.",
     exampleSrc:"A: Italian NGOs operate in over 80 countries.\nB: Doctors Without Borders has a strong Italian section.",
     funFact:"Italy has over 20,000 registered NGOs, one of the highest numbers in Europe. Major Italian humanitarian organizations include Emergency (founded by surgeon Gino Strada), the Comunita di Sant'Egidio, and CESVI."},

    {type:"fb",
     s:"I {1} blu italiani sono stati presenti nelle missioni di pace in tutto il mondo.",
     a:["caschi"],
     opts:["caschi","membri","vertici","corridoi"],
     hint:"UN peacekeepers are identified by their distinctive blue headgear. Italy is one of the largest Western contributors of troops.",
     sSrc:"Italian Blue {1} have been present in peace missions around the world."},

    {type:"teach", trg:"il disarmo", src:"disarmament", pos:"noun", gender:"m",
     note:"Masculine noun. The reduction or elimination of weapons.\n'Trattato sul disarmo' = disarmament treaty. 'Disarmo nucleare' = nuclear disarmament.",
     example:"A: Il disarmo nucleare resta un obiettivo lontano.\nB: Le potenze nucleari non vogliono rinunciare alle loro armi.",
     exampleSrc:"A: Nuclear disarmament remains a distant goal.\nB: Nuclear powers do not want to give up their weapons.",
     funFact:"Italy signed the Nuclear Non-Proliferation Treaty and hosts no nuclear weapons of its own. However, American nuclear weapons are reportedly stored at Italian NATO bases, making Italy part of NATO's nuclear sharing arrangement."},

    {type:"teach", trg:"il diritto internazionale", src:"international law", pos:"noun", gender:"m",
     note:"Masculine compound noun. The body of laws governing relations between states.\n'Violazione del diritto internazionale' = violation of international law.",
     example:"A: Il diritto internazionale vieta l'uso della forza tra gli stati.\nB: Ma le violazioni sono frequenti e spesso impunite.",
     exampleSrc:"A: International law prohibits the use of force between states.\nB: But violations are frequent and often go unpunished.",
     funFact:"Italian jurists contributed significantly to international law. Alberico Gentili (16th century) is considered one of the founders of the discipline. His works on the laws of war preceded Hugo Grotius, often credited as the 'father' of international law."},

    {type:"teach", trg:"la cooperazione allo sviluppo", src:"development cooperation", pos:"noun", gender:"f",
     note:"Feminine compound noun. International aid for developing countries.\n'AICS' = Agenzia Italiana per la Cooperazione allo Sviluppo.",
     example:"A: La cooperazione allo sviluppo italiana si concentra sull'Africa.\nB: L'AICS gestisce progetti in oltre 20 paesi africani.",
     exampleSrc:"A: Italian development cooperation focuses on Africa.\nB: AICS manages projects in over 20 African countries.",
     funFact:"Italy's development aid (ODA) is about 0.3% of GDP, below the UN target of 0.7%. Italian cooperation focuses on the Mediterranean, Africa, and the Middle East, reflecting geographic proximity and historical ties."},

    {type:"mc",
     q:"Che cos'e l''approccio italiano' nelle missioni di pace?",
     opts:["L'uso esclusivo della forza militare per imporre la pace rapidamente","La costruzione di relazioni con le comunita locali attraverso dialogo e sensibilita culturale","L'invio di soli osservatori civili senza componente militare","La delega totale delle operazioni alle organizzazioni internazionali"],
     ans:"La costruzione di relazioni con le comunita locali attraverso dialogo e sensibilita culturale",
     hint:"Italian soldiers are known for a people-centered approach: engaging with communities, showing cultural respect, and combining security with humanitarian assistance."},

    {type:"match", pairs:[
      {trg:"ONU", src:"United Nations"},
      {trg:"NATO", src:"NATO"},
      {trg:"G7", src:"G7"},
      {trg:"ONG", src:"NGO"},
      {trg:"disarmo", src:"disarmament"}
    ]},

    {type:"fb",
     s:"Il {1} internazionale vieta l'uso della forza nelle relazioni tra stati.",
     a:["diritto"],
     opts:["diritto","trattato","vertice","consiglio"],
     hint:"The body of laws and norms governing how nations interact. It prohibits aggression and protects sovereignty.",
     sSrc:"International {1} prohibits the use of force in relations between states."},

    {type:"mc",
     q:"Quale giurista italiano del XVI secolo e considerato un fondatore del diritto internazionale?",
     opts:["Beccaria","Gentili","Machiavelli","Gramsci"],
     ans:"Gentili",
     hint:"This jurist wrote foundational texts on the laws of war before Grotius. He taught at Oxford and influenced British legal tradition."}
  ,{type:"match",pairs:[{trg:"il Consiglio di Sicurezza",src:"the Security Council"},{trg:"la missione di pace",src:"the peace mission"},{trg:"la cooperazione allo sviluppo",src:"development cooperation"}]},{type:"mc",q:"How do you say \"humanitarian aid\" in Italian?",opts:["la finestra","il tavolo","l'aiuto umanitario","la bicicletta"],ans:"l'aiuto umanitario",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"La {1} garantisce la difesa collettiva tra i suoi membri.",a:["la NATO"],opts:["la NATO","il G7","la missione di pace","il disarmo"],hint:"The main global body founded in 1945 to maintain international peace.",sSrc:"The {1} is the only organization with a mandate for peacekeeping."}]
};
export default BATCH3_L_1;
