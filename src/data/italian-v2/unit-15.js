// Italian V2 Unit 15. La casa e l'affitto (Housing & Renting) (B1.1)
import BATCH8_L1 from './_batch8_u15_L01.js';
import BATCH7_L1 from './_batch7_u15_L01.js';
import BATCH6_L1 from './_batch6_u15_L01.js';
import BATCH5_L02 from './_batch5_u15_L02.js';
import BATCH5_L01 from './_batch5_u15_L01.js';
import BATCH2_L02 from './_batch2_u15_L02.js';
import BATCH2_L01 from './_batch2_u15_L01.js';
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
       example:"A: Cerchi un appartamento?\nB: Si, un bilocale in centro.\nA: Quante stanze ti servono?\nB: Almeno due, con un balcone possibilmente.",
       exampleSrc:"A: Are you looking for an apartment?\nB: Yes, a two-room flat downtown.\nA: How many rooms do you need?\nB: At least two, with a balcony if possible.",
       funFact:"Italian apartments are described by the number of rooms, not bedrooms. A 'bilocale' has two rooms (living room + bedroom), a 'trilocale' has three. The kitchen and bathroom are not counted. This confuses many foreigners looking for housing."},

      {type:"teach", trg:"il monolocale", src:"the studio apartment", pos:"noun", gender:"m",
       note:"Masculine. Mono (one) + locale (room). One room for everything.\nThe smallest apartment type.",
       example:"A: Quanto costa il monolocale?\nB: Seicento euro al mese, spese escluse.\nA: Le spese sono incluse?\nB: No, bisogna aggiungere circa cento euro al mese.",
       exampleSrc:"A: How much does the studio cost?\nB: Six hundred euros per month, utilities not included.\nA: Are utilities included?\nB: No, you need to add about one hundred euros per month.",
       funFact:"'Mono' means one, 'locale' means room. In expensive cities like Milan and Rome, monolocali (studios) are the most common rental for young professionals and students. The kitchen is usually a small area within the same room."},

      {type:"teach", trg:"il bilocale", src:"the one-bedroom apartment", pos:"noun", gender:"m",
       note:"Masculine. Bi (two) + locale (room). Living room + one bedroom.\nBathroom and kitchen not counted.",
       example:"A: Il bilocale ha il balcone?\nB: Si, con vista sul parco.\nA: E luminoso?\nB: Molto, ha finestre grandi su due lati.",
       exampleSrc:"A: Does the one-bedroom have a balcony?\nB: Yes, with a view of the park.\nA: Is it bright?\nB: Very, it has large windows on two sides.",
       funFact:"In Italian real estate, rooms are counted differently than in English. A 'bilocale' literally means 'two rooms,' which translates to a one-bedroom apartment in English terms (one bedroom plus a living room). A 'trilocale' (three rooms) is a two-bedroom."},

      {type:"teach", trg:"l'affitto", src:"the rent", pos:"noun", gender:"m",
       note:"Masculine. 'Pagare l'affitto' = to pay the rent.\n'In affitto' = for rent. From 'affittare' (to rent).",
       example:"A: Quanto paghi di affitto?\nB: Ottocento euro al mese.\nA: Con le spese condominiali?\nB: No, quelle costano altri centocinquanta euro.",
       exampleSrc:"A: How much do you pay for rent?\nB: Eight hundred euros per month.\nA: Including building fees?\nB: No, those cost another one hundred fifty euros.",
       funFact:"Italian rental contracts are typically '4+4' (four years, renewable for another four). 'Contratto transitorio' (temporary contract) lasts 1-18 months. Rent in Milan and Rome can exceed 1,000 euros for a small apartment. Southern cities are significantly cheaper."},

      {type:"teach", trg:"il mutuo", src:"the mortgage", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'mutuum' (a loan).\n'Accendere un mutuo' = to take out a mortgage.",
       example:"A: Avete comprato casa?\nB: Si, abbiamo acceso un mutuo di trent'anni.\nA: In quale zona?\nB: In periferia, dove i prezzi sono ancora accessibili.",
       exampleSrc:"A: Did you buy a house?\nB: Yes, we took out a thirty-year mortgage.\nA: In which area?\nB: In the suburbs, where prices are still affordable.",
       funFact:"Home ownership in Italy is high: about 73% of Italians own their home. The expression 'accendere un mutuo' (literally 'to light a mortgage') reflects the idea of starting something that will burn for a long time. Italian mortgages can last up to 40 years."},
{type:"match",pairs:[{trg:"il monolocale",src:"the studio apartment"},{trg:"il bilocale",src:"the one-bedroom apartment"},{trg:"l'affitto",src:"the rent"},{trg:"il mutuo",src:"the mortgage"}]},

      {type:"teach", trg:"il proprietario", src:"the landlord / owner", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la proprietaria.\nFrom 'proprieta' (property). Also simply 'il padrone di casa.'",
       example:"A: Il proprietario e disponibile?\nB: Si, puoi chiamarlo per un appuntamento.\nA: E una persona ragionevole?\nB: Si, finora non abbiamo avuto nessun problema.",
       exampleSrc:"A: Is the landlord available?\nB: Yes, you can call him for an appointment.\nA: Is he a reasonable person?\nB: Yes, so far we have had no problems.",
       funFact:"Italian tenant protection is strong. A landlord cannot evict a tenant easily. Even if rent is unpaid, the legal eviction process can take years. This is why many landlords ask for a 'fideiussione' (bank guarantee) or several months' deposit before signing."},

      {type:"teach", trg:"l'inquilino", src:"the tenant", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'inquilina.\nFrom Latin 'inquilinus' (resident, lodger).",
       example:"A: L'inquilino del piano di sopra e rumoroso.\nB: Hai provato a parlargli?\nA: Hai parlato con l'amministratore?\nB: Si, ma dice che non puo fare molto.",
       exampleSrc:"A: The tenant upstairs is noisy.\nB: Have you tried talking to him?\nA: Did you talk to the building manager?\nB: Yes, but he says he cannot do much.",
       funFact:"Italian apartment buildings have a 'regolamento condominiale' (building regulations) that all tenants must follow. Rules about noise, pets, common spaces, and even hanging laundry can be very specific. Disputes between neighbors are famously common."},

      {type:"teach", trg:"la caparra", src:"the deposit / down payment", pos:"noun", gender:"f",
       note:"Feminine. 'Versare la caparra' = to pay the deposit.\nUsually 1-3 months' rent for rentals.",
       example:"A: Quant'e la caparra?\nB: Due mesi di affitto.\nA: La restituiscono alla fine del contratto?\nB: Si, se l'appartamento e in buone condizioni.",
       exampleSrc:"A: How much is the deposit?\nB: Two months' rent.\nA: Do they return it at the end of the lease?\nB: Yes, if the apartment is in good condition.",
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
       example:"A: L'appartamento e arredato?\nB: Si, l'arredamento e moderno e completo.\nA: Ci sono anche gli elettrodomestici?\nB: Si, frigo e lavatrice sono nuovi.",
       exampleSrc:"A: Is the apartment furnished?\nB: Yes, the furnishing is modern and complete.\nA: Are there also appliances?\nB: Yes, the fridge and washing machine are new.",
       funFact:"Italian interior design ('design d'interni') is world-famous. Milan hosts the annual 'Salone del Mobile,' the largest furniture fair in the world. Italian design brands like Kartell, Alessi, and Poltrona Frau are internationally recognized."},

      {type:"teach", trg:"i mobili", src:"the furniture", pos:"noun", gender:"m",
       note:"Masculine plural. Singular: il mobile (a piece of furniture).\nFrom Latin 'mobilis' (movable).",
       example:"A: I mobili sono inclusi nell'affitto?\nB: Si, c'e tutto: letto, armadio, divano.\nA: Puoi portare i tuoi mobili?\nB: No, l'appartamento e gia completamente arredato.",
       exampleSrc:"A: Is the furniture included in the rent?\nB: Yes, everything: bed, wardrobe, sofa.\nA: Can you bring your own furniture?\nB: No, the apartment is already fully furnished.",
       funFact:"'Mobile' literally means 'movable thing,' which is why furniture and phones share the word: 'il telefono mobile' (mobile phone), 'il mobile' (a piece of furniture). The connection is that both can be moved. The Italian furniture industry is the third largest in the world."},

      {type:"teach", trg:"gli elettrodomestici", src:"the household appliances", pos:"noun", gender:"m",
       note:"Masculine plural. Singular: l'elettrodomestico.\nElettro (electric) + domestico (household).",
       example:"A: Quali elettrodomestici ci sono?\nB: Frigo, lavatrice e lavastoviglie.\nA: Manca qualcosa?\nB: Solo l'asciugatrice, ma non e un problema.",
       exampleSrc:"A: What appliances are there?\nB: Fridge, washing machine, and dishwasher.\nA: Is anything missing?\nB: Only the dryer, but it is not a problem.",
       funFact:"Italian apartments typically come with a washing machine ('lavatrice') but rarely a dryer ('asciugatrice'). Italians prefer to air-dry clothes on balconies or drying racks. Dryers are seen as wasteful and bad for fabric."},

      {type:"teach", trg:"il riscaldamento", src:"the heating", pos:"noun", gender:"m",
       note:"Masculine. From 'riscaldare' (to heat, to warm up).\n'Riscaldamento centralizzato' = central heating.",
       example:"A: C'e il riscaldamento autonomo?\nB: No, e centralizzato. Si accende a novembre.\nA: Preferiresti quello autonomo?\nB: Si, cosi posso accenderlo quando voglio.",
       exampleSrc:"A: Is there independent heating?\nB: No, it is centralized. It turns on in November.\nA: Would you prefer independent heating?\nB: Yes, so I can turn it on whenever I want.",
       funFact:"In many Italian apartment buildings, central heating is turned on collectively, not individually. The dates are set by law and vary by climate zone. In Milan (zone E), heating runs from October 15 to April 15. In Sicily (zone B), only from December 1 to March 31."},

      {type:"teach", trg:"il pavimento", src:"the floor", pos:"noun", gender:"m",
       note:"Masculine. The floor surface, not the story of a building ('il piano').\nFrom Latin 'pavimentum' (beaten floor).",
       example:"A: Il pavimento e in legno?\nB: Si, parquet in tutta la casa.\nA: E facile da pulire?\nB: Abbastanza, basta un panno umido.",
       exampleSrc:"A: Is the floor wooden?\nB: Yes, parquet throughout the house.\nA: Is it easy to clean?\nB: Fairly easy, a damp cloth is enough.",
       funFact:"Italian homes traditionally favor tile ('piastrelle') or marble ('marmo') floors over carpet. Central and northern Italy prefer 'cotto' (terracotta tiles), while marble is common in the south. Wall-to-wall carpeting is extremely rare in Italian homes."},
{type:"match",pairs:[{trg:"i mobili",src:"the furniture"},{trg:"gli elettrodomestici",src:"the household appliances"},{trg:"il riscaldamento",src:"the heating"},{trg:"il pavimento",src:"the floor"}]},

      {type:"teach", trg:"il balcone", src:"the balcony", pos:"noun", gender:"m",
       note:"Masculine. Plural: i balconi. From Germanic 'balko' (beam).\nLarger version: la terrazza (terrace).",
       example:"A: L'appartamento ha un balcone?\nB: Si, con vista sulla piazza.\nA: E abbastanza grande per un tavolino?\nB: Si, ci stanno un tavolino e due sedie.",
       exampleSrc:"A: Does the apartment have a balcony?\nB: Yes, with a view of the square.\nA: Is it big enough for a small table?\nB: Yes, a small table and two chairs fit there.",
       funFact:"Balconies are essential features of Italian apartments. They serve as outdoor living spaces, laundry drying areas, and small gardens. In southern Italy, life unfolds on balconies. Shakespeare set Juliet's famous scene on a balcony in Verona."},

      {type:"teach", trg:"l'ascensore", src:"the elevator / lift", pos:"noun", gender:"m",
       note:"Masculine. From 'ascendere' (to ascend).\nMany old Italian buildings lack one.",
       example:"A: C'e l'ascensore?\nB: No, e al quinto piano senza ascensore.\nA: E un problema per te?\nB: Un po', soprattutto con le borse della spesa.",
       exampleSrc:"A: Is there an elevator?\nB: No, it is on the fifth floor without an elevator.\nA: Is it a problem for you?\nB: A little, especially with the grocery bags.",
       funFact:"Many Italian buildings predate elevators. Walking up five or six flights is common, especially in historic centers. The ground floor is called 'piano terra' (ground floor), and the first floor ('primo piano') is what Americans call the second floor."},

      {type:"teach", trg:"le spese condominiali", src:"the building maintenance fees", pos:"noun", gender:"f",
       note:"Feminine plural. 'Condominio' = apartment building/complex.\nCovers shared costs: cleaning, elevator, lighting.",
       example:"A: Le spese condominiali sono alte?\nB: Centocinquanta euro al mese.\nA: Cosa includono esattamente?\nB: Pulizia, ascensore e illuminazione delle scale.",
       exampleSrc:"A: Are the building fees high?\nB: One hundred fifty euros per month.\nA: What do they include exactly?\nB: Cleaning, elevator, and staircase lighting.",
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
       example:"A: Quando ti trasferisci?\nB: Il mese prossimo. Ho gia trovato casa.\nA: Hai bisogno di aiuto con il trasloco?\nB: Si, sarebbe fantastico! Ho tante scatole.",
       exampleSrc:"A: When are you moving?\nB: Next month. I have already found a place.\nA: Do you need help with the move?\nB: Yes, that would be great! I have lots of boxes.",
       funFact:"'Trasferirsi' is reflexive and uses -isc-: mi trasferisco, ti trasferisci, si trasferisce. It implies relocating your life, not just moving objects. For physically moving things, Italians use 'spostare' (to move an object) or 'fare il trasloco' (to do the move)."},

      {type:"teach", trg:"affittare", src:"to rent (out/from)", pos:"verb", gender:null,
       note:"Regular -are verb. Works both ways: landlord rents out, tenant rents from.\nContext clarifies direction.",
       example:"A: Vuoi affittare questo appartamento?\nB: Si, quanto costa al mese?\nA: Posso vedere le stanze prima?\nB: Certo, possiamo fare una visita domani.",
       exampleSrc:"A: Do you want to rent this apartment?\nB: Yes, how much does it cost per month?\nA: Can I see the rooms first?\nB: Of course, we can do a viewing tomorrow.",
       funFact:"'Affittare' works in both directions: 'Affitto un appartamento' can mean 'I rent an apartment (from someone)' or 'I rent out an apartment (to someone).' Context makes it clear. For clarity, 'dare in affitto' means 'to rent out' and 'prendere in affitto' means 'to rent from.'"},

      {type:"teach", trg:"ristrutturare", src:"to renovate / to remodel", pos:"verb", gender:null,
       note:"Regular -are verb. 'La ristrutturazione' = the renovation.\nRi (again) + strutturare (to structure).",
       example:"A: La casa e da ristrutturare.\nB: Quanto costa la ristrutturazione?\nA: Ci sono agevolazioni fiscali?\nB: Si, il governo offre detrazioni fino al cinquanta per cento.",
       exampleSrc:"A: The house needs renovating.\nB: How much does the renovation cost?\nA: Are there tax benefits?\nB: Yes, the government offers deductions up to fifty percent.",
       funFact:"Italy offers significant tax deductions for home renovations, sometimes up to 50-65% of the cost. The 'Superbonus 110%' was a famous recent incentive that allowed homeowners to renovate for free through tax credits. It transformed entire neighborhoods."},

      {type:"teach", trg:"condividere", src:"to share", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: condiviso.\nFrom Latin 'dividere' with 'con-' (together).",
       example:"A: Condividi l'appartamento?\nB: Si, con due coinquilini.\nA: Vi trovate bene insieme?\nB: Si, ci rispettiamo e dividiamo tutto in modo equo.",
       exampleSrc:"A: Do you share the apartment?\nB: Yes, with two roommates.\nA: Do you get along well together?\nB: Yes, we respect each other and split everything fairly.",
       funFact:"Sharing apartments is very common among Italian university students. 'Coinquilino' (roommate/flatmate) literally means 'co-tenant.' Italian universities often lack campus housing, so students must find shared apartments near campus, creating a vibrant rental market."},

      {type:"teach", trg:"il coinquilino", src:"the roommate / flatmate", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la coinquilina.\nCon (with) + inquilino (tenant). Lives in same apartment.",
       example:"A: Come sono i tuoi coinquilini?\nB: Simpatici, ma un po' disordinati.\nA: Avete regole in casa?\nB: Si, turni per le pulizie e silenzio dopo le undici.",
       exampleSrc:"A: How are your roommates?\nB: Nice, but a bit messy.\nA: Do you have house rules?\nB: Yes, cleaning turns and quiet after eleven.",
       funFact:"Finding a good 'coinquilino' is a major life event for Italian students. University cities like Bologna, Padova, and Firenze have active online communities and bulletin boards for apartment sharing. Compatibility interviews are common before moving in."},
{type:"match",pairs:[{trg:"affittare",src:"to rent (out/from)"},{trg:"ristrutturare",src:"to renovate / to remodel"},{trg:"condividere",src:"to share"},{trg:"il coinquilino",src:"the roommate / flatmate"}]},

      {type:"teach", trg:"il trasloco", src:"the move (relocation)", pos:"noun", gender:"m",
       note:"Masculine. 'Fare il trasloco' = to move (physically relocate).\nFrom 'traslocare' (to relocate).",
       example:"A: Il trasloco e sabato. Puoi aiutarmi?\nB: Certo! Vengo con il furgone.\nA: Quanto costa la ditta di traslochi?\nB: Troppo! Per questo chiedo aiuto agli amici.",
       exampleSrc:"A: The move is on Saturday. Can you help me?\nB: Of course! I'll come with the van.\nA: How much does the moving company cost?\nB: Too much! That is why I am asking friends for help.",
       funFact:"Italian moves are often chaotic social events. Friends and family help carry furniture, and pizza and beer are the traditional thank-you payment. Professional moving companies exist but are expensive, so informal help is the norm, especially for young people."},

      {type:"teach", trg:"il piano", src:"the floor / story (of building)", pos:"noun", gender:"m",
       note:"Masculine. 'Piano terra' = ground floor. 'Primo piano' = first floor (US second).\nAlso means 'plan' and 'piano (instrument).'",
       example:"A: A che piano abiti?\nB: Al terzo piano, senza ascensore!\nA: Non ti stancano le scale?\nB: All'inizio si, ma adesso ci sono abituato.",
       exampleSrc:"A: What floor do you live on?\nB: On the third floor, without an elevator!\nA: Don't the stairs tire you?\nB: At first yes, but now I am used to it.",
       funFact:"Italian floor numbering follows the European system: 'piano terra' (ground floor) is not counted as floor one. The 'primo piano' (first floor) is one flight up. This means the Italian 'terzo piano' (third floor) equals the American fourth floor."},

      {type:"teach", trg:"l'agenzia immobiliare", src:"the real estate agency", pos:"noun", gender:"f",
       note:"Feminine. 'Immobiliare' = relating to real estate (immovable property).\nCharges a commission.",
       example:"A: Hai trovato casa tramite un'agenzia?\nB: Si, l'agenzia immobiliare ha trovato un bilocale perfetto.\nA: Quanto hai pagato di commissione?\nB: Un mese di affitto. E la norma in Italia.",
       exampleSrc:"A: Did you find a place through an agency?\nB: Yes, the real estate agency found a perfect one-bedroom.\nA: How much did you pay in commission?\nB: One month's rent. It is the norm in Italy.",
       funFact:"Italian real estate agencies typically charge a commission of one month's rent for rentals and 2-4% of the sale price for purchases. The commission is paid by both parties (buyer and seller, or tenant and landlord). Online platforms are slowly changing this."},

      {type:"tip", title:"Relative Pronouns: che & cui",
       text:"Relative pronouns connect two sentences about the same thing or person.\n\nche = who, that, which (subject or direct object):\nL'appartamento che ho affittato. (The apartment that I rented.)\nLa persona che parla. (The person who is speaking.)\nChe never changes form.\n\ncui = whom, which (used AFTER a preposition):\nL'agenzia con cui lavoro. (The agency I work with.)\nLa citta in cui vivo. (The city where I live.)\nIl motivo per cui mi sono trasferito. (The reason why I moved.)\n\ncui for possession (article + cui = whose):\nL'amico il cui appartamento e grande. (The friend whose apartment is big.)\n\nFormal alternative: il/la quale (which/who, agrees in gender and number):\nLa persona con la quale lavoro. (same as con cui, more formal)",
       icon:"💡",
       deepDive:{title:"Che vs. cui: the key rule",
        text:"The distinction is simple once you see the logic. Che covers subject and direct object functions — no preposition involved. Cui covers all other functions — always preceded by a preposition (di, a, da, in, con, su, per, tra). If you can replace the pronoun with 'him/her/it' directly, use che. If the pronoun needs a preposition ('with it,' 'in which,' 'for whom'), use cui. Colloquial Italian sometimes drops the preposition before cui: 'il motivo cui mi sono trasferito' (the reason I moved) instead of 'per cui.' Both are understood."}},

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
       hint:"In Italy, the buyer AND the seller (or tenant and landlord) each pay the real estate agency."}
    ]}
    ,{id:"itv2_u15l4_burocr", title:"La burocrazia italiana", icon:"🏛️", xp:15, board:true, steps:[
      {type:"intro", title:"Handling Administrative Situations",
       desc:"Learn essential vocabulary for dealing with Italian bureaucracy: the civil registry, ID cards, revenue stamps, and official requests. Indispensable for living in Italy and tested on CILS B1.",
       goals:["Navigate the civil registry office","Request and renew official documents","Use polite official Italian in administrative contexts"]},

      {type:"teach", trg:"l'anagrafe", src:"the civil registry / registry office", pos:"noun", gender:"f",
       note:"Feminine. The office where births, deaths, marriages, and residency are registered.\nEvery Italian comune has one.",
       example:"A: Dove devo andare per la residenza?\nB: All'anagrafe del tuo comune.\nA: Cosa devo portare?\nB: Il documento d'identita e il modulo compilato.",
       exampleSrc:"A: Where do I need to go for residency registration?\nB: To the civil registry office of your town.\nA: What do I need to bring?\nB: Your identity document and the completed form.",
       funFact:"Every Italian resident must be registered at the local anagrafe. Without this registration, you cannot get a tax code, open a bank account, or access public services. Foreigners living in Italy must register within 20 days of establishing a fixed address."},

      {type:"teach", trg:"la residenza", src:"the residency / registered address", pos:"noun", gender:"f",
       note:"Feminine. Your official address on file with the state.\n'Prendere la residenza' = to register your address.",
       example:"A: Hai gia la residenza in Italia?\nB: No, devo ancora richiedere il trasferimento.\nA: Quanto tempo ci vuole?\nB: Di solito qualche settimana dopo la visita dell'ufficiale.",
       exampleSrc:"A: Do you already have residency registration in Italy?\nB: No, I still need to request the transfer.\nA: How long does it take?\nB: Usually a few weeks after the official's visit.",
       funFact:"Having Italian 'residenza' is different from citizenship. Even non-EU citizens can be registered residents. The comune sends an officer to physically verify you live at the declared address before approving residency. This visit is called 'accertamento.'"},

      {type:"teach", trg:"la carta d'identita", src:"the identity card", pos:"noun", gender:"f",
       note:"Feminine. Italy's national ID card, accepted across the EU.\n'Carte d'identita elettronica' = the modern electronic version.",
       example:"A: La mia carta d'identita e scaduta.\nB: Devi rinnovarla al comune.\nA: Serve un appuntamento?\nB: Si, puoi prenotare online sul sito del tuo comune.",
       exampleSrc:"A: My identity card has expired.\nB: You need to renew it at the town hall.\nA: Is an appointment needed?\nB: Yes, you can book online on your town hall's website.",
       funFact:"Italy introduced the electronic identity card (CIE) in 2016. It contains a microchip with biometric data and can be used as a travel document within the EU. The old paper card is no longer issued, but remains valid until its expiry date."},

      {type:"teach", trg:"rinnovare", src:"to renew", pos:"verb", gender:null,
       note:"Regular -are verb. 'Rinnovo' = I renew. 'Il rinnovo' = the renewal.\nUsed for documents, contracts, subscriptions.",
       example:"A: Quando scade il tuo passaporto?\nB: Il mese prossimo. Devo rinnovarlo.\nA: Hai gia tutto il necessario?\nB: Si, ho la foto e ho prenotato l'appuntamento.",
       exampleSrc:"A: When does your passport expire?\nB: Next month. I need to renew it.\nA: Do you already have everything you need?\nB: Yes, I have the photo and I booked the appointment.",
       funFact:"Italian passports and identity cards have different validity periods depending on the holder's age. Children under 3: 3 years. Ages 3-18: 5 years. Adults: 10 years. Renewing abroad at the Italian consulate is a common experience for Italians living overseas."},

      {type:"teach", trg:"richiedere", src:"to request / to apply for", pos:"verb", gender:null,
       note:"Irregular -ere verb. 'Richiedo' = I request. 'La richiesta' = the request.\nMore formal than 'chiedere.'",
       example:"A: Come si richiede la residenza in Italia?\nB: Puoi richiedere all'anagrafe o online.\nA: Costa qualcosa?\nB: Si, bisogna pagare la marca da bollo.",
       exampleSrc:"A: How does one apply for residency in Italy?\nB: You can request it at the registry office or online.\nA: Does it cost anything?\nB: Yes, you need to pay the revenue stamp.",
       funFact:"'Richiedere' is the standard verb for official applications in Italian bureaucracy. Its noun 'la richiesta' appears on almost every official form. The verb 'chiedere' is more casual; richiedere signals a formal administrative request."},

      {type:"teach", trg:"la marca da bollo", src:"the revenue stamp", pos:"noun", gender:"f",
       note:"Feminine. A tax stamp bought at tabaccherie, required on official requests.\nCurrently 16 euros for most documents.",
       example:"A: Ho il passaporto da rinnovare. Cos'altro serve?\nB: Devi attaccare una marca da bollo da sedici euro.\nA: Dove si compra?\nB: Dal tabaccaio qui vicino.",
       exampleSrc:"A: I have a passport to renew. What else is needed?\nB: You need to attach a sixteen-euro revenue stamp.\nA: Where do you buy it?\nB: At the tobacconist nearby.",
       funFact:"The marca da bollo dates back to the 18th century under Austrian rule in northern Italy. Today, most government documents require one. You buy it at any tabaccheria (tobacconist). Digital bollo is also available via the Agenzia delle Entrate website."},

      {type:"teach", trg:"fare la fila", src:"to queue / to stand in line", pos:"verb", gender:null,
       note:"'Fila' = line, queue. 'Fare la fila' = to join and wait in a queue.\nAlternative: 'fare la coda' (same meaning).",
       example:"A: Com'e andata all'anagrafe?\nB: Ho fatto la fila per due ore.\nA: Non puoi prenotare online?\nB: Si, ma non sapevo. La prossima volta prenoto.",
       exampleSrc:"A: How did it go at the registry office?\nB: I queued for two hours.\nA: Can you not book online?\nB: Yes, but I did not know. Next time I will book.",
       funFact:"Waiting in line at Italian public offices is a cultural experience. Italians often say the real Italian bureaucracy is not the paperwork, but the wait. The online booking system ('agenda online') introduced in recent years has improved things, but spontaneous visits still mean long waits."},

      {type:"tip", title:"La burocrazia italiana: survival tips",
       text:"Italian bureaucracy has a reputation, but knowing the system makes it manageable.\n\nKey offices:\n- L'anagrafe: for residency, birth certificates, family documents.\n- Il comune: covers many services including the anagrafe.\n- La questura: for residence permits (permesso di soggiorno) for non-EU citizens.\n\nEssential items to bring:\n- Un documento d'identita (identity card or passport).\n- La marca da bollo (buy at any tabaccheria beforehand).\n- Moduli compilati (completed forms, often downloadable online).\n\nPractical tips:\nAlways book an appointment ('prenotare un appuntamento') online where possible. Arriving without one risks wasted hours. Bring more documents than asked. Italian officials often request extras not listed on the website.",
       icon:"💡",
       deepDive:{title:"Why Italian bureaucracy works the way it does",
        text:"Italy's administrative complexity reflects its history. The unified Italian state is relatively young (1861), and different regions brought different legal traditions. Post-war Italy added layers of welfare-state paperwork. The result is a system with high procedural formality but also regional variation. Reforms since the 1990s have moved many services online. The SPID (Sistema Pubblico di Identita Digitale) is a unified digital identity now required for most government portals. Getting your SPID is itself a rite of passage for residents."}},

      {type:"mc", q:"Where do you go to officially register your address in Italy?",
       opts:["La questura","L'anagrafe","Il tribunale","La biblioteca"],
       ans:"L'anagrafe",
       hint:"This office handles births, deaths, marriages, and address registration. Every Italian town has one.",
       answerSrc:"The civil registry office"},

      {type:"fb", s:"Devo {1} la mia carta d'identita: e scaduta.",
       a:["rinnovare"],
       opts:["rinnovare","richiedere","compilare","affittare"],
       hint:"The document has expired and must be brought back into valid status. Use the verb for renewal.",
       sSrc:"I need to {1} my identity card: it has expired."},

      {type:"fb", s:"Devo attaccare una {1} da sedici euro al modulo.",
       a:["marca da bollo"],
       opts:["marca da bollo","carta d'identita","residenza","anagrafe"],
       hint:"This is a tax stamp bought at a tabaccheria. It must be attached to most government submissions.",
       sSrc:"I need to attach a {1} worth sixteen euros to the form."},

      {type:"fb", s:"Come si {1} il certificato di residenza?",
       a:["richiede"],
       opts:["richiede","compra","porta","affitta"],
       hint:"You are asking how to formally apply for this certificate. Use the formal verb for making an official request.",
       sSrc:"How does one {1} the residency certificate?"},

      {type:"fb", s:"Ho trasferito la mia {1} al nuovo comune.",
       a:["residenza"],
       opts:["residenza","anagrafe","marca da bollo","carta d'identita"],
       hint:"This is your legally registered home address on file with the state. You transfer it when you move cities.",
       sSrc:"I transferred my {1} to the new municipality."},

      {type:"fb", s:"La mia {1} e scaduta: devo rinnovarla al comune.",
       a:["carta d'identita"],
       opts:["carta d'identita","residenza","marca da bollo","modulo"],
       hint:"This Italian national ID expires and must be renewed at the town hall. Accepted for travel in the EU.",
       sSrc:"My {1} has expired: I need to renew it at the town hall."},

      {type:"match", pairs:[
        {trg:"l'anagrafe", src:"the civil registry office"},
        {trg:"la residenza", src:"the registered address"},
        {trg:"la marca da bollo", src:"the revenue stamp"},
        {trg:"rinnovare", src:"to renew"},
        {trg:"richiedere", src:"to request / apply for"}
      ]},

      {type:"fb", s:"Devo {1} per un'ora allo sportello senza appuntamento.",
       a:["fare la fila"],
       opts:["fare la fila","rinnovare","richiedere","compilare"],
       hint:"You must wait in a queue at the counter. Use the Italian expression meaning to stand in a line.",
       sSrc:"I have to {1} for an hour at the counter without an appointment."},

      {type:"mc", q:"What does 'prendere la residenza' mean in Italy?",
       opts:["Applying for Italian citizenship","Picking up a parcel at the post office","Registering your address with the civil registry","Taking out a mortgage on a property"],
       ans:"Registering your address with the civil registry",
       hint:"The anagrafe is where Italian residents file their location. This phrase describes the act of doing that filing."}
    ]}
    ,{id:"itv2_u15l_b1_abstract", title:"Concetti astratti", icon:"💡", xp:20, board:true, steps:[
      {type:"intro", title:"Concetti astratti",
       desc:"Master key abstract nouns and verbs essential for CILS B1 discussion topics: meaning, tolerance, sustainability, and critical thinking vocabulary. These words appear across opinion essays, debates, and formal conversations.",
       goals:["Use abstract nouns to express ideas","Apply critical thinking vocabulary","Form opinions on social and environmental topics"]},

      {type:"teach", trg:"il significato", src:"the meaning", pos:"noun", gender:"m",
       note:"Masculine. From 'significare' (to mean, to signify).\n'Che significato ha?' = What does it mean?",
       example:"A: Qual e il significato di questa parola?\nB: Vuol dire 'tolleranza.'\nA: E importante capire il significato esatto.\nB: Hai ragione, il contesto aiuta molto.",
       exampleSrc:"A: What is the meaning of this word?\nB: It means 'tolerance.'\nA: It is important to understand the exact meaning.\nB: You are right, context helps a lot.",
       funFact:"'Significato' shares its Latin root with the English 'significant.' In Italian linguistics, 'il significante' is the word form (sound/spelling) and 'il significato' is the meaning it carries. This distinction comes from the Swiss linguist Ferdinand de Saussure, widely studied in Italian universities."},

      {type:"teach", trg:"necessario", src:"necessary / essential", pos:"adj", gender:null,
       note:"Agrees with noun gender/number: necessario (m), necessaria (f), necessari (m pl), necessarie (f pl).\nFrom Latin 'necessarius' (unavoidable).",
       example:"A: E necessario studiare ogni giorno?\nB: Si, e necessario per imparare bene.\nA: Anche il fine settimana?\nB: Almeno un po'. La costanza e necessaria.",
       exampleSrc:"A: Is it necessary to study every day?\nB: Yes, it is necessary to learn well.\nA: Even at the weekend?\nB: At least a little. Consistency is necessary.",
       funFact:"'Necessario' comes from the Latin 'necesse,' which is said to derive from 'ne-cedere' (not to yield). The Romans used it for things that simply cannot be avoided. The same root appears in English 'necessity' and French 'necessaire.'"},

      {type:"teach", trg:"principale", src:"main / principal", pos:"adj", gender:null,
       note:"Does not change for gender: il problema principale, la ragione principale.\nPlural: principali (same for m and f).\nFrom Latin 'principalis' (first in importance).",
       example:"A: Qual e il problema principale?\nB: La mancanza di risorse e l'ostacolo principale.\nA: E l'obiettivo principale del progetto?\nB: Trovare una soluzione sostenibile.",
       exampleSrc:"A: What is the main problem?\nB: The lack of resources is the main obstacle.\nA: And the main goal of the project?\nB: To find a sustainable solution.",
       funFact:"'Principale' shares its Latin root with 'prince' (princeps = the first). In Italian schools, 'il preside' (principal/headteacher) was historically called 'il principale.' The same root gives us 'principio' (principle/beginning) and 'la principessa' (princess)."},

      {type:"teach", trg:"impossibile", src:"impossible", pos:"adj", gender:null,
       note:"Does not change for gender: impossibile (m/f). Plural: impossibili.\nOpposite: possibile (possible). From Latin 'impossibilis.'",
       example:"A: E possibile finire il progetto oggi?\nB: E quasi impossibile. Abbiamo bisogno di piu tempo.\nA: Cosa possiamo fare?\nB: Dobbiamo decidere cosa e veramente necessario.",
       exampleSrc:"A: Is it possible to finish the project today?\nB: It is almost impossible. We need more time.\nA: What can we do?\nB: We must decide what is truly necessary.",
       funFact:"'Impossible' entered English directly from the Latin 'impossibilis.' One famous use: Nelson Mandela's quote often cited in Italian is 'Sembra sempre impossibile finche non e fatto' ('It always seems impossible until it is done'). This sentence is a staple of Italian motivational culture."},

      {type:"teach", trg:"la tolleranza", src:"tolerance / acceptance", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'tolerantia' (endurance, patience).\nIn modern Italian, used for social tolerance and scientific measurement.",
       example:"A: La tolleranza e importante nella societa.\nB: Sono d'accordo. Dobbiamo capire le differenze.\nA: Come possiamo imparare la tolleranza?\nB: Parlando con persone diverse e ascoltando le loro storie.",
       exampleSrc:"A: Tolerance is important in society.\nB: I agree. We must understand differences.\nA: How can we learn tolerance?\nB: By talking with different people and listening to their stories.",
       funFact:"In Italian philosophy and history, 'tolleranza' has deep roots in the Enlightenment. Voltaire's 'Trattato sulla tolleranza' (Treatise on Tolerance, 1763) was widely read in Italian intellectual circles. Today the word covers everything from social acceptance to engineering tolerances (margini di tolleranza)."},

      {type:"teach", trg:"la sostenibilità", src:"sustainability", pos:"noun", gender:"f",
       note:"Feminine. Accent on final -a. From 'sostenibile' (sustainable).\nKey term in Italian environmental and economic discourse.",
       example:"A: La sostenibilita e il tema principale del progetto.\nB: Dobbiamo trovare soluzioni che aiutano l'economia e l'ambiente.\nA: E possibile avere i due insieme?\nB: Si, ma serve un cambiamento necessario nella politica.",
       exampleSrc:"A: Sustainability is the main theme of the project.\nB: We must find solutions that help both the economy and the environment.\nA: Is it possible to have both?\nB: Yes, but a necessary change in policy is needed.",
       funFact:"Italy is a European leader in the 'economia circolare' (circular economy). The country recycles 79% of its packaging, ahead of the EU average. The word 'sostenibilita' entered common Italian usage in the 1990s following the Brundtland Report, which defined sustainable development."},

      {type:"teach", trg:"sperimentare", src:"to experience / to experiment", pos:"verb", gender:null,
       note:"Regular -are verb. Two meanings: to experience something directly, or to conduct an experiment.\nContext clarifies which sense is intended.",
       example:"A: Hai sperimentato difficolta nel lavoro?\nB: Si, ho sperimentato molti problemi all'inizio.\nA: Come hai imparato a risolvere i problemi?\nB: Sperimentando soluzioni diverse e chiedendo aiuto.",
       exampleSrc:"A: Have you experienced difficulties at work?\nB: Yes, I experienced many problems at the beginning.\nA: How did you learn to solve the problems?\nB: By trying out different solutions and asking for help.",
       funFact:"'Sperimentare' comes from Latin 'experiri' (to try, to test), the same root as 'esperienza' (experience) and the English 'experiment.' In Italian science, 'lo sperimento' is a controlled experiment, while 'l'esperienza' is a lived experience. The verb bridges both meanings."},

      {type:"teach", trg:"esaminare", src:"to examine / to analyze", pos:"verb", gender:null,
       note:"Regular -are verb. More formal than 'guardare' (to look at).\nUsed in academic, medical, and investigative contexts.",
       example:"A: Dobbiamo esaminare il problema con attenzione.\nB: Hai ragione. Non possiamo decidere senza esaminare i dati.\nA: Come puoi esaminare la situazione?\nB: Devo parlare con le persone e capire i fatti.",
       exampleSrc:"A: We must examine the problem carefully.\nB: You are right. We cannot decide without examining the data.\nA: How can you examine the situation?\nB: I need to talk to the people and understand the facts.",
       funFact:"'Esaminare' shares its root with 'esame' (exam/examination), from Latin 'examen' (weighing, testing). The 'esame di stato' (state exam) is Italy's school-leaving qualification, taken at the end of secondary school. It is one of the most discussed events in Italian culture every June."},

      {type:"teach", trg:"investigare", src:"to investigate", pos:"verb", gender:null,
       note:"Regular -are verb. More formal and official than 'cercare' (to search).\nUsed in journalism, law, and science.",
       example:"A: I giornalisti investigano la situazione con attenzione.\nB: E necessario investigare prima di rispondere.\nA: E possibile investigare senza i dati?\nB: No, bisogna esaminare tutti i fatti principali.",
       exampleSrc:"A: The journalists are investigating the situation carefully.\nB: It is necessary to investigate before responding.\nA: Is it possible to investigate without data?\nB: No, you must examine all the main facts.",
       funFact:"'Investigare' comes from Latin 'investigare' (to track, to follow footprints), from 'vestigium' (footprint, trace). The same root gives 'le vestigia' (ruins, traces) in Italian. The word entered English as 'investigate' during the Renaissance, when Latin-educated scholars carried both languages simultaneously."},

      {type:"tip", title:"Abstract Adjectives: Agreement Patterns",
       text:"Italian adjectives must agree with the nouns they modify. These B1 adjectives follow standard patterns.\n\nTwo-form adjectives (change only for singular/plural, not gender):\nnecessario / necessaria / necessari / necessarie\npossibile / possibili (same for m and f)\nimpossibile / impossibili (same for m and f)\nprincipal adjectives ending in -e: principale / principali\n\nExamples:\nIl problema principale. (The main problem.)\nLa ragione principale. (The main reason.)\nI problemi principali. (The main problems.)\nE necessario studiare. (It is necessary to study.)\nLa costanza e necessaria. (Consistency is necessary.)\n\nTip: Adjectives ending in -e (possibile, impossibile, principale) never change for gender, only for number. This makes them easier to use than adjectives ending in -o/-a.",
       icon:"💡",
       deepDive:{title:"Necessario and the impersonal construction",
        text:"'Necessario' appears most often in impersonal constructions: 'e necessario + infinitive' and 'e necessario che + subjunctive.' The infinitive form is simpler and more common in B1 speech: 'E necessario studiare' (It is necessary to study). The subjunctive form is more formal: 'E necessario che tu studi' (It is necessary that you study). At B1, mastering the infinitive construction is the priority. The subjunctive version is B1/B2 territory and appears later."}},

      {type:"mc", q:"What does 'il significato' mean?",
       opts:["The signal","The meaning","The sign","The signature"],
       ans:"The meaning",
       hint:"Related to 'significare' (to mean). You ask 'Qual e il significato?' when you want to know what something means."},

      {type:"fb", s:"E {1} studiare ogni giorno per imparare bene.",
       a:["necessario"],
       opts:["necessario","impossibile","principale","possibile"],
       hint:"You need to express that daily study is required and unavoidable. Choose the adjective meaning 'essential.'",
       sSrc:"It is {1} to study every day to learn well."},

      {type:"mc", q:"Which sentence uses 'principale' correctly?",
       opts:["Il problema e principale difficile.","Il problema principali e la mancanza di fondi.","Il problema principale e la mancanza di fondi.","Il principale problema e la mancanza di fondi principale."],
       ans:"Il problema principale e la mancanza di fondi.",
       hint:"This adjective follows the noun and does not change for gender. Look for the sentence where it appears in singular form, correctly placed after the noun."},

      {type:"fb", s:"E quasi {1} finire il lavoro in un giorno solo.",
       a:["impossibile"],
       opts:["impossibile","necessario","principale","possibile"],
       hint:"The task cannot realistically be done. Choose the adjective that means it cannot happen.",
       sSrc:"It is almost {1} to finish the work in just one day."},

      {type:"fb", s:"La {1} e fondamentale per vivere in una societa moderna.",
       a:["tolleranza"],
       opts:["tolleranza","sostenibilità","significato","carriera"],
       hint:"This feminine noun describes the acceptance of differences between people. A key social value.",
       sSrc:"{1} is essential for living in a modern society."},

      {type:"mc", q:"What does 'la sostenibilità' refer to?",
       opts:["The ability to sustain physical effort","The capacity to support a sports team","Meeting present needs without depleting resources for the future","A type of Italian regional policy from the 1980s"],
       ans:"Meeting present needs without depleting resources for the future",
       hint:"This noun is central to environmental and economic debate. Related to 'sostenibile' (sustainable)."},

      {type:"fb", s:"Ho {1} molte difficolta nel mio primo anno di lavoro.",
       a:["sperimentato"],
       opts:["sperimentato","esaminato","investigato","cambiato"],
       hint:"You directly lived through these difficulties. Use the past participle of the verb meaning 'to experience.'",
       sSrc:"I {1} many difficulties in my first year of work."},

      {type:"fb", s:"Dobbiamo {1} tutti i dati prima di decidere.",
       a:["esaminare"],
       opts:["esaminare","investigare","sperimentare","spiegare"],
       hint:"Looking carefully at data before making a decision. Choose the formal verb for analyzing something closely.",
       sSrc:"We must {1} all the data before deciding."},

      {type:"fb", s:"I giornalisti devono {1} la situazione con attenzione.",
       a:["investigare"],
       opts:["investigare","esaminare","sperimentare","capire"],
       hint:"Journalists search for evidence and facts. Choose the verb used in reporting and law enforcement contexts.",
       sSrc:"Journalists must {1} the situation carefully."},

      {type:"match", pairs:[
        {trg:"il significato", src:"the meaning"},
        {trg:"la tolleranza", src:"tolerance / acceptance"},
        {trg:"la sostenibilità", src:"sustainability"},
        {trg:"sperimentare", src:"to experience / to experiment"},
        {trg:"esaminare", src:"to examine / to analyze"}
      ]},

      {type:"match", pairs:[
        {trg:"necessario", src:"necessary / essential"},
        {trg:"principale", src:"main / principal"},
        {trg:"impossibile", src:"impossible"},
        {trg:"investigare", src:"to investigate"}
      ]},

      {type:"mc", q:"Which verb is most appropriate when journalists research and uncover hidden facts?",
       opts:["sperimentare","esaminare","investigare","spiegare"],
       ans:"investigare",
       hint:"This verb comes from Latin 'vestigium' (footprint). Think of following a trail of evidence."},

      {type:"mc", q:"What is the gender of 'la sostenibilità'?",
       opts:["Masculine","Feminine","Neuter","It depends on context"],
       ans:"Feminine",
       hint:"The article 'la' is a strong clue. Look at the ending of the noun: all Italian abstract nouns ending in -ta belong to the same grammatical category."},

      {type:"fb", s:"Qual e il {1} di questa parola difficile?",
       a:["significato"],
       opts:["significato","problema","progetto","obiettivo"],
       hint:"You are asking what a word means. This masculine noun is the answer to 'what does it mean?'",
       sSrc:"What is the {1} of this difficult word?"}
    ]}
  ]
};
export default UNIT_15;
