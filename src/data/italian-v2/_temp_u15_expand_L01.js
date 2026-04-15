// Unit 15 Expansion — Lesson 4: Rental Contracts and Bureaucracy
const LESSON_4 = {
  id:"itv2_u15l4", title:"Il contratto d'affitto", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il contratto d'affitto",
     desc:"Navigate the Italian rental process: contracts, deposits, utilities, and the paperwork involved. Knowing these terms is essential for anyone renting in Italy.",
     goals:["Understand rental contract terminology","Discuss utility bills and fees","Navigate Italian rental bureaucracy"]},

    {type:"teach", trg:"il contratto d'affitto", src:"the rental contract", pos:"noun", gender:"m",
     note:"Masculine. 'Contratto 4+4' = standard 4-year renewable lease.\n'Firmare il contratto' = to sign the contract.",
     example:"A: Hai letto il contratto d'affitto?\nB: Si, e un contratto 4+4 con canone fisso.",
     exampleSrc:"A: Did you read the rental contract?\nB: Yes, it is a 4+4 contract with a fixed rate.",
     funFact:"The standard Italian rental contract ('contratto 4+4') lasts four years and automatically renews for another four. The landlord can only refuse renewal for specific legal reasons. A 'contratto transitorio' (temporary contract) lasts 1-18 months and is meant for short stays."},

    {type:"teach", trg:"il canone", src:"the rent amount / fee", pos:"noun", gender:"m",
     note:"Masculine. 'Canone mensile' = monthly rent.\n'Canone concordato' = negotiated rent (below market rate).",
     example:"A: Qual e il canone mensile?\nB: Settecento euro, spese escluse.",
     exampleSrc:"A: What is the monthly rent?\nB: Seven hundred euros, utilities not included.",
     funFact:"'Canone concordato' is a special Italian rental scheme where landlords agree to charge below-market rent in exchange for tax benefits. The rates are set by agreements between landlord associations and tenant unions. This system exists to keep housing affordable in expensive cities."},

    {type:"teach", trg:"le utenze", src:"the utilities", pos:"noun", gender:"f",
     note:"Feminine plural. 'Utenze domestiche' = household utilities.\nGas, electricity, water, internet.",
     example:"A: Le utenze sono incluse nell'affitto?\nB: No, luce e gas sono a parte.",
     exampleSrc:"A: Are utilities included in the rent?\nB: No, electricity and gas are separate.",
     funFact:"Italian utility bills ('bollette') arrive bimonthly. 'Luce' (light) means electricity, 'gas' covers both heating and cooking. Water ('acqua') is relatively cheap. The 'voltura' (transferring utilities to your name) is a bureaucratic process feared by all new tenants."},

    {type:"teach", trg:"la bolletta", src:"the utility bill", pos:"noun", gender:"f",
     note:"Feminine. 'Bolletta della luce' = electricity bill.\n'Pagare le bollette' = to pay the bills.",
     example:"A: La bolletta del gas e altissima questo mese!\nB: E l'inverno, il riscaldamento costa molto.",
     exampleSrc:"A: The gas bill is very high this month!\nB: It is winter, heating costs a lot.",
     funFact:"Italian utility bills are notoriously complex. They include the actual consumption, distribution costs, system charges, and taxes. The 'mercato libero' (free market) lets consumers choose their provider, but comparing offers requires reading the fine print carefully."},

    {type:"teach", trg:"la cauzione", src:"the security deposit", pos:"noun", gender:"f",
     note:"Feminine. Synonym of 'caparra' in rental context.\n'Versare la cauzione' = to pay the deposit.",
     example:"A: La cauzione e di tre mesi.\nB: Me la restituiscono quando lascio l'appartamento?",
     exampleSrc:"A: The deposit is three months.\nB: Will they return it when I leave the apartment?",
     funFact:"The 'cauzione' is held by the landlord for the entire lease. By law, it earns interest that must be returned to the tenant. In practice, disputes over deposits are extremely common. Taking dated photos of the apartment at move-in ('verbale di consegna') protects both parties."},

    {type:"teach", trg:"la registrazione", src:"the registration", pos:"noun", gender:"f",
     note:"Feminine. 'Registrazione del contratto' = contract registration.\nMandatory at the Agenzia delle Entrate.",
     example:"A: Hai fatto la registrazione del contratto?\nB: Si, all'Agenzia delle Entrate.",
     exampleSrc:"A: Did you do the contract registration?\nB: Yes, at the Revenue Agency.",
     funFact:"All Italian rental contracts must be registered with the 'Agenzia delle Entrate' (Revenue Agency) within 30 days. Unregistered contracts are void and give tenants no legal protection. The registration tax is typically split between landlord and tenant."},

    {type:"teach", trg:"la disdetta", src:"the notice of termination", pos:"noun", gender:"f",
     note:"Feminine. 'Dare la disdetta' = to give notice.\nTypically 6 months before contract end.",
     example:"A: Quando devo dare la disdetta?\nB: Almeno sei mesi prima della scadenza.",
     exampleSrc:"A: When should I give notice?\nB: At least six months before the expiration.",
     funFact:"The 'disdetta' must be sent via registered letter ('raccomandata con ricevuta di ritorno'). Email or verbal notice is not legally valid. If neither party sends a disdetta, the contract automatically renews. This protects tenants from sudden eviction."},

    {type:"teach", trg:"il verbale di consegna", src:"the handover report", pos:"noun", gender:"m",
     note:"Masculine. Document describing apartment condition at move-in.\nProtects both landlord and tenant.",
     example:"A: Abbiamo fatto il verbale di consegna?\nB: Si, con le foto di tutte le stanze.",
     exampleSrc:"A: Did we do the handover report?\nB: Yes, with photos of all the rooms.",
     funFact:"The 'verbale di consegna' lists every existing damage, the condition of appliances, and meter readings at move-in. Without it, landlords can blame pre-existing damage on the tenant and deduct from the deposit. Experienced renters always insist on a detailed one with photographs."},

    {type:"teach", trg:"la raccomandata", src:"the registered letter", pos:"noun", gender:"f",
     note:"Feminine. 'Raccomandata con ricevuta di ritorno' = registered mail with return receipt.\nLegal proof of communication.",
     example:"A: Devo mandare la disdetta per raccomandata.\nB: Vai alle Poste, costa circa sei euro.",
     exampleSrc:"A: I have to send the termination notice by registered letter.\nB: Go to the Post Office, it costs about six euros.",
     funFact:"The 'raccomandata' is Italy's official method for legally binding communication. It proves that a letter was sent and received. Italians send raccomandates for contract terminations, formal complaints, and any communication that might end up in court. The Post Office is always crowded."},

    // Quiz steps
    {type:"mc", q:"What does 'contratto 4+4' mean?",
     opts:["A four-month trial contract","A four-year lease renewable for another four","A contract for four rooms plus four parking spaces","A lease with four months' deposit required"],
     ans:"A four-year lease renewable for another four",
     hint:"This is the standard Italian rental contract. It automatically renews unless either party sends a formal notice."},

    {type:"fb", s:"Le {1} sono incluse nell'affitto?",
     a:["utenze"],
     opts:["utenze","bollette","cauzioni","registrazioni"],
     hint:"These are the household services: electricity, gas, water, internet. Are they part of the rent or separate?",
     sSrc:"Are the {1} included in the rent?"},

    {type:"match", pairs:[
      {trg:"il canone", src:"the rent amount"},
      {trg:"le utenze", src:"the utilities"},
      {trg:"la bolletta", src:"the utility bill"},
      {trg:"la cauzione", src:"the security deposit"},
      {trg:"la disdetta", src:"the notice of termination"}
    ]},

    {type:"mc", q:"Where must Italian rental contracts be registered?",
     opts:["At the local police station","At the Agenzia delle Entrate (Revenue Agency)","At the city hall (Comune)","At the nearest bank branch"],
     ans:"At the Agenzia delle Entrate (Revenue Agency)",
     hint:"This government agency handles tax matters. Registration must happen within 30 days of signing."},

    {type:"fb", s:"Devo mandare la disdetta per {1}.",
     a:["raccomandata"],
     opts:["raccomandata","email","telefono","messaggio"],
     hint:"This type of registered mail provides legal proof that your notice was sent and received.",
     sSrc:"I have to send the termination notice by {1}."},

    {type:"mc", q:"What is the 'verbale di consegna'?",
     opts:["The monthly utility bill statement","A report describing apartment condition at move-in","The landlord's tax declaration form","The building's annual maintenance budget"],
     ans:"A report describing apartment condition at move-in",
     hint:"This document with photos protects both sides. Without it, disputes over pre-existing damage become unresolvable."},

    {type:"fb", s:"La {1} del gas e altissima questo mese.",
     a:["bolletta"],
     opts:["bolletta","utenza","cauzione","registrazione"],
     hint:"This is the bill you receive for a specific utility. It arrives bimonthly and includes consumption, charges, and taxes.",
     sSrc:"The gas {1} is very high this month."},

    {type:"mc", q:"What is 'canone concordato'?",
     opts:["The highest possible market rent","Below-market rent with tax benefits for the landlord","A penalty fee for late rent payments","The monthly building maintenance fee"],
     ans:"Below-market rent with tax benefits for the landlord",
     hint:"Landlords agree to charge less in exchange for tax advantages. Rates are set by agreements between associations and unions."}
  ]
};
export default LESSON_4;
