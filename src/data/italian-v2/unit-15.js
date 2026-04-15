// Italian V2 Unit 15 — La casa e l'affitto (Housing & Renting) (B1.1)
import EXP_L4 from './_temp_u15_expand_L01.js';import EXP_L5 from './_temp_u15_expand_L02.js';import EXP_L6 from './_temp_u15_expand_L03.js';
// CILS/CELI B1 aligned. Housing types, interior, renting and moving vocabulary.

const UNIT_15 = {
  n:15, lang:"it", srcLang:"en", track:"v2",
  title:"La casa e l'affitto", sub:"Housing & Renting",
  icon:"🏠", level:"B1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u15l1", title:"Tipi di casa", icon:"🏘️", xp:15, board:true, steps:[
      {type:"intro", title:"Tipi di casa",
       desc:"Learn to describe different types of housing in Italian, from apartments to houses. Understand the rental and buying vocabulary essential for living in Italy.",
       goals:["Name different types of housing","Understand rental terminology","Discuss housing preferences"]},

      {type:"teach", trg:"l'appartamento", src:"the apartment", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli appartamenti.\nFrom French 'appartement.' Often shortened to 'l'appart' informally.",
       example:"A: Cerchi un appartamento?\nB: Si, un bilocale in centro.",
       exampleSrc:"A: Are you looking for an apartment?\nB: Yes, a two-room flat downtown.",
       funFact:"Italian apartments are described by the number of rooms, not bedrooms. A 'bilocale' has two rooms (living room + bedroom), a 'trilocale' has three. The kitchen and bathroom are not counted. This confuses many foreigners looking for housing."},

      {type:"teach", trg:"il monolocale", src:"the studio apartment", pos:"noun", gender:"m",
       note:"Masculine. Mono (one) + locale (room). One room for everything.\nThe smallest apartment type.",
       example:"A: Quanto costa il monolocale?\nB: Seicento euro al mese, spese escluse.",
       exampleSrc:"A: How much does the studio cost?\nB: Six hundred euros per month, utilities not included.",
       funFact:"'Mono' means one, 'locale' means room. In expensive cities like Milan and Rome, monolocali (studios) are the most common rental for young professionals and students. The kitchen is usually a small area within the same room."},

      {type:"teach", trg:"il bilocale", src:"the one-bedroom apartment", pos:"noun", gender:"m",
       note:"Masculine. Bi (two) + locale (room). Living room + one bedroom.\nBathroom and kitchen not counted.",
       example:"A: Il bilocale ha il balcone?\nB: Si, con vista sul parco.",
       exampleSrc:"A: Does the one-bedroom have a balcony?\nB: Yes, with a view of the park.",
       funFact:"In Italian real estate, rooms are counted differently than in English. A 'bilocale' literally means 'two rooms,' which translates to a one-bedroom apartment in English terms (one bedroom plus a living room). A 'trilocale' (three rooms) is a two-bedroom."},

      {type:"teach", trg:"l'affitto", src:"the rent", pos:"noun", gender:"m",
       note:"Masculine. 'Pagare l'affitto' = to pay the rent.\n'In affitto' = for rent. From 'affittare' (to rent).",
       example:"A: Quanto paghi di affitto?\nB: Ottocento euro al mese.",
       exampleSrc:"A: How much do you pay for rent?\nB: Eight hundred euros per month.",
       funFact:"Italian rental contracts are typically '4+4' (four years, renewable for another four). 'Contratto transitorio' (temporary contract) lasts 1-18 months. Rent in Milan and Rome can exceed 1,000 euros for a small apartment. Southern cities are significantly cheaper."},

      {type:"teach", trg:"il mutuo", src:"the mortgage", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'mutuum' (a loan).\n'Accendere un mutuo' = to take out a mortgage.",
       example:"A: Avete comprato casa?\nB: Si, abbiamo acceso un mutuo di trent'anni.",
       exampleSrc:"A: Did you buy a house?\nB: Yes, we took out a thirty-year mortgage.",
       funFact:"Home ownership in Italy is high: about 73% of Italians own their home. The expression 'accendere un mutuo' (literally 'to light a mortgage') reflects the idea of starting something that will burn for a long time. Italian mortgages can last up to 40 years."},

      {type:"teach", trg:"il proprietario", src:"the landlord / owner", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la proprietaria.\nFrom 'proprieta' (property). Also simply 'il padrone di casa.'",
       example:"A: Il proprietario e disponibile?\nB: Si, puoi chiamarlo per un appuntamento.",
       exampleSrc:"A: Is the landlord available?\nB: Yes, you can call him for an appointment.",
       funFact:"Italian tenant protection is strong. A landlord cannot evict a tenant easily. Even if rent is unpaid, the legal eviction process can take years. This is why many landlords ask for a 'fideiussione' (bank guarantee) or several months' deposit before signing."},

      {type:"teach", trg:"l'inquilino", src:"the tenant", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'inquilina.\nFrom Latin 'inquilinus' (resident, lodger).",
       example:"A: L'inquilino del piano di sopra e rumoroso.\nB: Hai provato a parlargli?",
       exampleSrc:"A: The tenant upstairs is noisy.\nB: Have you tried talking to him?",
       funFact:"Italian apartment buildings have a 'regolamento condominiale' (building regulations) that all tenants must follow. Rules about noise, pets, common spaces, and even hanging laundry can be very specific. Disputes between neighbors are famously common."},

      {type:"teach", trg:"la caparra", src:"the deposit / down payment", pos:"noun", gender:"f",
       note:"Feminine. 'Versare la caparra' = to pay the deposit.\nUsually 1-3 months' rent for rentals.",
       example:"A: Quant'e la caparra?\nB: Due mesi di affitto.",
       exampleSrc:"A: How much is the deposit?\nB: Two months' rent.",
       funFact:"The 'caparra' serves as security for the landlord. It is returned when the tenant leaves, minus any damages. In Italian law, there are two types: 'caparra confirmatoria' (confirms the deal) and 'caparra penitenziale' (penalty if you back out)."},

      // Quiz steps
      {type:"mc", q:"What is a 'bilocale'?",
       opts:["A two-room apartment (living room + bedroom)","A two-story house with a garden","A house that has exactly two bathrooms","An apartment with a two-car underground garage"],
       ans:"A two-room apartment (living room + bedroom)",
       hint:"Italian housing counts the number of locali. 'Bi' means 2, and the kitchen plus toilet facilities are excluded."},

      {type:"fb", s:"Quanto paghi di {1} al mese?",
       a:["affitto"],
       opts:["affitto","mutuo","caparra","proprietario"],
       hint:"This is the monthly payment to the landlord for living in an apartment or house.",
       sSrc:"How much do you pay for {1} per month?"},

      {type:"match", pairs:[
        {trg:"l'appartamento", src:"the apartment"},
        {trg:"il monolocale", src:"the studio"},
        {trg:"l'affitto", src:"the rent"},
        {trg:"il mutuo", src:"the mortgage"},
        {trg:"la caparra", src:"the deposit"}
      ]},

      {type:"mc", q:"What does 'il proprietario' mean?",
       opts:["The tenant","The landlord / owner","The neighbor","The real estate agent"],
       ans:"The landlord / owner",
       hint:"This person owns the property. From 'proprieta' (property). The feminine form is 'la proprietaria.'"},

      {type:"fb", s:"L'{1} del piano di sopra e rumoroso.",
       a:["inquilino"],
       opts:["inquilino","proprietario","appartamento","affitto"],
       hint:"This is the person who rents and lives in the apartment. The opposite of 'proprietario.'",
       sSrc:"The {1} upstairs is noisy."},

      {type:"mc", q:"How is a 'monolocale' different from a 'bilocale'?",
       opts:["A monolocale has no bathroom at all","A monolocale is always cheaper to buy","A monolocale has one locale, a bilocale has two","A bilocale has two separate bathrooms"],
       ans:"A monolocale has one locale, a bilocale has two",
       hint:"'Mono' means one, 'bi' means two. Count the 'locali,' not the sleeping spaces. Both have a bathroom."},

      {type:"fb", s:"Abbiamo acceso un {1} di trent'anni per la casa.",
       a:["mutuo"],
       opts:["mutuo","affitto","contratto","prestito"],
       hint:"This is a long-term bank loan specifically for buying a home. It can last up to 40 years in Italy.",
       sSrc:"We took out a thirty-year {1} for the house."},

      {type:"mc", q:"How much deposit is typically required when renting in Italy?",
       opts:["No deposit is required","One week's rent","Half the annual rent","1-3 months' rent"],
       ans:"1-3 months' rent",
       hint:"The 'caparra' is paid upfront and returned when the tenant leaves, minus any damages."}
    ]},

    {id:"itv2_u15l2", title:"Dentro casa", icon:"🛋️", xp:15, board:true, steps:[
      {type:"intro", title:"Dentro casa",
       desc:"Learn vocabulary for the interior of a home: furniture, appliances, and heating. Describe what is inside an apartment and what features matter when choosing a place to live.",
       goals:["Name common furniture and appliances","Describe the interior of a home","Discuss what features a home needs"]},

      {type:"teach", trg:"l'arredamento", src:"the furnishing / decor", pos:"noun", gender:"m",
       note:"Masculine. From 'arredare' (to furnish).\n'Arredato' = furnished. 'Non arredato' = unfurnished.",
       example:"A: L'appartamento e arredato?\nB: Si, l'arredamento e moderno e completo.",
       exampleSrc:"A: Is the apartment furnished?\nB: Yes, the furnishing is modern and complete.",
       funFact:"Italian interior design ('design d'interni') is world-famous. Milan hosts the annual 'Salone del Mobile,' the largest furniture fair in the world. Italian design brands like Kartell, Alessi, and Poltrona Frau are internationally recognized."},

      {type:"teach", trg:"i mobili", src:"the furniture", pos:"noun", gender:"m",
       note:"Masculine plural. Singular: il mobile (a piece of furniture).\nFrom Latin 'mobilis' (movable).",
       example:"A: I mobili sono inclusi nell'affitto?\nB: Si, c'e tutto: letto, armadio, divano.",
       exampleSrc:"A: Is the furniture included in the rent?\nB: Yes, everything: bed, wardrobe, sofa.",
       funFact:"'Mobile' literally means 'movable thing,' which is why furniture and phones share the word: 'il telefono mobile' (mobile phone), 'il mobile' (a piece of furniture). The connection is that both can be moved. The Italian furniture industry is the third largest in the world."},

      {type:"teach", trg:"gli elettrodomestici", src:"the household appliances", pos:"noun", gender:"m",
       note:"Masculine plural. Singular: l'elettrodomestico.\nElettro (electric) + domestico (household).",
       example:"A: Quali elettrodomestici ci sono?\nB: Frigo, lavatrice e lavastoviglie.",
       exampleSrc:"A: What appliances are there?\nB: Fridge, washing machine, and dishwasher.",
       funFact:"Italian apartments typically come with a washing machine ('lavatrice') but rarely a dryer ('asciugatrice'). Italians prefer to air-dry clothes on balconies or drying racks. Dryers are seen as wasteful and bad for fabric."},

      {type:"teach", trg:"il riscaldamento", src:"the heating", pos:"noun", gender:"m",
       note:"Masculine. From 'riscaldare' (to heat, to warm up).\n'Riscaldamento centralizzato' = central heating.",
       example:"A: C'e il riscaldamento autonomo?\nB: No, e centralizzato. Si accende a novembre.",
       exampleSrc:"A: Is there independent heating?\nB: No, it is centralized. It turns on in November.",
       funFact:"In many Italian apartment buildings, central heating is turned on collectively, not individually. The dates are set by law and vary by climate zone. In Milan (zone E), heating runs from October 15 to April 15. In Sicily (zone B), only from December 1 to March 31."},

      {type:"teach", trg:"il pavimento", src:"the floor", pos:"noun", gender:"m",
       note:"Masculine. The floor surface, not the story of a building ('il piano').\nFrom Latin 'pavimentum' (beaten floor).",
       example:"A: Il pavimento e in legno?\nB: Si, parquet in tutta la casa.",
       exampleSrc:"A: Is the floor wooden?\nB: Yes, parquet throughout the house.",
       funFact:"Italian homes traditionally favor tile ('piastrelle') or marble ('marmo') floors over carpet. Central and northern Italy prefer 'cotto' (terracotta tiles), while marble is common in the south. Wall-to-wall carpeting is extremely rare in Italian homes."},

      {type:"teach", trg:"il balcone", src:"the balcony", pos:"noun", gender:"m",
       note:"Masculine. Plural: i balconi. From Germanic 'balko' (beam).\nLarger version: la terrazza (terrace).",
       example:"A: L'appartamento ha un balcone?\nB: Si, con vista sulla piazza.",
       exampleSrc:"A: Does the apartment have a balcony?\nB: Yes, with a view of the square.",
       funFact:"Balconies are essential features of Italian apartments. They serve as outdoor living spaces, laundry drying areas, and small gardens. In southern Italy, life unfolds on balconies. Shakespeare set Juliet's famous scene on a balcony in Verona."},

      {type:"teach", trg:"l'ascensore", src:"the elevator / lift", pos:"noun", gender:"m",
       note:"Masculine. From 'ascendere' (to ascend).\nMany old Italian buildings lack one.",
       example:"A: C'e l'ascensore?\nB: No, e al quinto piano senza ascensore.",
       exampleSrc:"A: Is there an elevator?\nB: No, it is on the fifth floor without an elevator.",
       funFact:"Many Italian buildings predate elevators. Walking up five or six flights is common, especially in historic centers. The ground floor is called 'piano terra' (ground floor), and the first floor ('primo piano') is what Americans call the second floor."},

      {type:"teach", trg:"le spese condominiali", src:"the building maintenance fees", pos:"noun", gender:"f",
       note:"Feminine plural. 'Condominio' = apartment building/complex.\nCovers shared costs: cleaning, elevator, lighting.",
       example:"A: Le spese condominiali sono alte?\nB: Centocinquanta euro al mese.",
       exampleSrc:"A: Are the building fees high?\nB: One hundred fifty euros per month.",
       funFact:"Every Italian apartment building has an 'amministratore di condominio' (building administrator) who manages shared costs. The annual 'assemblea condominiale' (building meeting) where owners vote on expenses is famous for heated arguments."},

      // Quiz steps
      {type:"mc", q:"What does 'arredato' mean when describing an apartment?",
       opts:["Furnished","Empty","Newly renovated and upgraded","Large"],
       ans:"Furnished",
       hint:"From 'arredamento' (furnishing). An 'appartamento arredato' comes with furniture included in the rent."},

      {type:"fb", s:"Quali {1} ci sono in cucina?",
       a:["elettrodomestici"],
       opts:["elettrodomestici","mobili","pavimenti","balconi"],
       hint:"These are electric machines used in the home: fridge, washing machine, dishwasher, oven.",
       sSrc:"What {1} are there in the kitchen?"},

      {type:"match", pairs:[
        {trg:"l'arredamento", src:"the furnishing"},
        {trg:"i mobili", src:"the furniture"},
        {trg:"il riscaldamento", src:"the heating"},
        {trg:"il balcone", src:"the balcony"},
        {trg:"l'ascensore", src:"the elevator"}
      ]},

      {type:"mc", q:"What is special about 'il riscaldamento centralizzato' in Italian buildings?",
       opts:["Each apartment in the building controls it independently","It is turned on collectively by fixed dates","It runs only during summer months","It is powered entirely by solar panels"],
       ans:"It is turned on collectively by fixed dates",
       hint:"The schedule is set by law and varies by climate zone. Tenants cannot adjust it individually."},

      {type:"fb", s:"Il {1} e in legno in tutta la casa.",
       a:["pavimento"],
       opts:["pavimento","balcone","riscaldamento","ascensore"],
       hint:"This is the surface you walk on. In this case, it is made of wood (parquet).",
       sSrc:"The {1} is wooden throughout the house."},

      {type:"mc", q:"What are 'le spese condominiali'?",
       opts:["Monthly mortgage payments to the bank","Personal utility bills for gas and electricity","Building maintenance fees for shared spaces","Costs for renovating your own apartment"],
       ans:"Building maintenance fees for shared spaces",
       hint:"Paid monthly alongside rent, these cover cleaning, elevator upkeep, and staircase lighting in the condominium."},

      {type:"fb", s:"L'appartamento e al quinto piano senza {1}.",
       a:["ascensore"],
       opts:["ascensore","balcone","riscaldamento","pavimento"],
       hint:"You must walk up five flights of stairs because the building lacks this vertical transport machine.",
       sSrc:"The apartment is on the fifth floor without an {1}."},

      {type:"mc", q:"Why are dryers rare in Italian homes?",
       opts:["Italian apartments are structurally too small to fit one in","Italian law requires a special certified permit to purchase one","Electricity is free specifically for dryers","Italians prefer hanging laundry on balconies to save energy"],
       ans:"Italians prefer hanging laundry on balconies to save energy",
       hint:"Using a machine to tumble clothes is considered wasteful. Racks and balcony lines are the norm instead."}
    ]},

    {id:"itv2_u15l3", title:"Trasferirsi", icon:"📦", xp:15, board:true, steps:[
      {type:"intro", title:"Trasferirsi",
       desc:"Learn verbs and phrases for moving, renovating, and sharing a home. These practical words will help you navigate the Italian housing market.",
       goals:["Talk about moving and relocating","Discuss renovations and repairs","Express preferences about living situations"]},

      {type:"teach", trg:"trasferirsi", src:"to move / to relocate", pos:"verb", gender:null,
       note:"Reflexive -ire verb with -isc-. 'Mi trasferisco' = I am moving.\nFrom Latin 'transferre' (to carry across).",
       example:"A: Quando ti trasferisci?\nB: Il mese prossimo. Ho gia trovato casa.",
       exampleSrc:"A: When are you moving?\nB: Next month. I have already found a place.",
       funFact:"'Trasferirsi' is reflexive and uses -isc-: mi trasferisco, ti trasferisci, si trasferisce. It implies relocating your life, not just moving objects. For physically moving things, Italians use 'spostare' (to move an object) or 'fare il trasloco' (to do the move)."},

      {type:"teach", trg:"affittare", src:"to rent (out/from)", pos:"verb", gender:null,
       note:"Regular -are verb. Works both ways: landlord rents out, tenant rents from.\nContext clarifies direction.",
       example:"A: Vuoi affittare questo appartamento?\nB: Si, quanto costa al mese?",
       exampleSrc:"A: Do you want to rent this apartment?\nB: Yes, how much does it cost per month?",
       funFact:"'Affittare' works in both directions: 'Affitto un appartamento' can mean 'I rent an apartment (from someone)' or 'I rent out an apartment (to someone).' Context makes it clear. For clarity, 'dare in affitto' means 'to rent out' and 'prendere in affitto' means 'to rent from.'"},

      {type:"teach", trg:"ristrutturare", src:"to renovate / to remodel", pos:"verb", gender:null,
       note:"Regular -are verb. 'La ristrutturazione' = the renovation.\nRi (again) + strutturare (to structure).",
       example:"A: La casa e da ristrutturare.\nB: Quanto costa la ristrutturazione?",
       exampleSrc:"A: The house needs renovating.\nB: How much does the renovation cost?",
       funFact:"Italy offers significant tax deductions for home renovations, sometimes up to 50-65% of the cost. The 'Superbonus 110%' was a famous recent incentive that allowed homeowners to renovate for free through tax credits. It transformed entire neighborhoods."},

      {type:"teach", trg:"condividere", src:"to share", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: condiviso.\nFrom Latin 'dividere' with 'con-' (together).",
       example:"A: Condividi l'appartamento?\nB: Si, con due coinquilini.",
       exampleSrc:"A: Do you share the apartment?\nB: Yes, with two roommates.",
       funFact:"Sharing apartments is very common among Italian university students. 'Coinquilino' (roommate/flatmate) literally means 'co-tenant.' Italian universities often lack campus housing, so students must find shared apartments near campus, creating a vibrant rental market."},

      {type:"teach", trg:"il coinquilino", src:"the roommate / flatmate", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la coinquilina.\nCon (with) + inquilino (tenant). Lives in same apartment.",
       example:"A: Come sono i tuoi coinquilini?\nB: Simpatici, ma un po' disordinati.",
       exampleSrc:"A: How are your roommates?\nB: Nice, but a bit messy.",
       funFact:"Finding a good 'coinquilino' is a major life event for Italian students. University cities like Bologna, Padova, and Firenze have active online communities and bulletin boards for apartment sharing. Compatibility interviews are common before moving in."},

      {type:"teach", trg:"il trasloco", src:"the move (relocation)", pos:"noun", gender:"m",
       note:"Masculine. 'Fare il trasloco' = to move (physically relocate).\nFrom 'traslocare' (to relocate).",
       example:"A: Il trasloco e sabato. Puoi aiutarmi?\nB: Certo! Vengo con il furgone.",
       exampleSrc:"A: The move is on Saturday. Can you help me?\nB: Of course! I'll come with the van.",
       funFact:"Italian moves are often chaotic social events. Friends and family help carry furniture, and pizza and beer are the traditional thank-you payment. Professional moving companies exist but are expensive, so informal help is the norm, especially for young people."},

      {type:"teach", trg:"il piano", src:"the floor / story (of building)", pos:"noun", gender:"m",
       note:"Masculine. 'Piano terra' = ground floor. 'Primo piano' = first floor (US second).\nAlso means 'plan' and 'piano (instrument).'",
       example:"A: A che piano abiti?\nB: Al terzo piano, senza ascensore!",
       exampleSrc:"A: What floor do you live on?\nB: On the third floor, without an elevator!",
       funFact:"Italian floor numbering follows the European system: 'piano terra' (ground floor) is not counted as floor one. The 'primo piano' (first floor) is one flight up. This means the Italian 'terzo piano' (third floor) equals the American fourth floor."},

      {type:"teach", trg:"l'agenzia immobiliare", src:"the real estate agency", pos:"noun", gender:"f",
       note:"Feminine. 'Immobiliare' = relating to real estate (immovable property).\nCharges a commission.",
       example:"A: Hai trovato casa tramite un'agenzia?\nB: Si, l'agenzia immobiliare ha trovato un bilocale perfetto.",
       exampleSrc:"A: Did you find a place through an agency?\nB: Yes, the real estate agency found a perfect one-bedroom.",
       funFact:"Italian real estate agencies typically charge a commission of one month's rent for rentals and 2-4% of the sale price for purchases. The commission is paid by both parties (buyer and seller, or tenant and landlord). Online platforms are slowly changing this."},

      // Quiz steps
      {type:"mc", q:"What does 'trasferirsi' mean?",
       opts:["To move / relocate your life","To transfer money abroad","To transform into something new","To translate a foreign text"],
       ans:"To move / relocate your life",
       hint:"This reflexive verb describes changing your place of residence. Literally, 'to carry oneself across.'"},

      {type:"fb", s:"Vuoi {1} questo appartamento?",
       a:["affittare"],
       opts:["affittare","ristrutturare","condividere","trasferirsi"],
       hint:"You are asking about renting a place. This verb works for both renting from and renting out.",
       sSrc:"Do you want to {1} this apartment?"},

      {type:"match", pairs:[
        {trg:"trasferirsi", src:"to move / relocate"},
        {trg:"ristrutturare", src:"to renovate"},
        {trg:"condividere", src:"to share"},
        {trg:"il trasloco", src:"the move"},
        {trg:"il coinquilino", src:"the roommate"}
      ]},

      {type:"mc", q:"What is a 'coinquilino'?",
       opts:["A neighbor in the adjacent building","A person who shares your flat","A property owner or landlord","A licensed real estate agent"],
       ans:"A person who shares your flat",
       hint:"'Con' means 'with' and 'inquilino' means 'tenant.' Think of the co- prefix: you and another occupant split the same address."},

      {type:"fb", s:"La casa e da {1}. Serve un nuovo bagno.",
       a:["ristrutturare"],
       opts:["ristrutturare","affittare","condividere","trasferirsi"],
       hint:"The house needs work: new bathroom, repairs, updates. This verb means to renovate or remodel.",
       sSrc:"The house needs {1}. It needs a new bathroom."},

      {type:"mc", q:"What is 'il piano terra' in an Italian building?",
       opts:["The basement","The first floor","The ground floor","The rooftop"],
       ans:"The ground floor",
       hint:"'Terra' means g.... In Italy, the first f... ('primo piano') is one flight above this level."},

      {type:"fb", s:"Il {1} e sabato. Puoi aiutarmi con le scatole?",
       a:["trasloco"],
       opts:["trasloco","affitto","piano","balcone"],
       hint:"You are physically moving your belongings to a new home. Friends often help with this task in Italy.",
       sSrc:"The {1} is on Saturday. Can you help me with the boxes?"},

      {type:"mc", q:"What does 'l'agenzia immobiliare' charge in Italy?",
       opts:["No commission is ever charged by them","Only the property owner pays any fee","Only the incoming tenant or buyer pays","A fee collected from both sides of the deal"],
       ans:"A fee collected from both sides of the deal",
       hint:"In Italy, both buyer and seller, or tenant and landlord, each pay the real estate agency."}
    ]}
  ]
};
export default UNIT_15;
