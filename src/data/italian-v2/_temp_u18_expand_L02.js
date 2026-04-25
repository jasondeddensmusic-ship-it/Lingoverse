// Unit 18 Expansion. Lesson 5: Sustainability and Recycling Culture
const LESSON_5 = {
  id:"itv2_u18l5", title:"Vita sostenibile (II)", icon:"♻️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vita sostenibile",
     desc:"Learn how Italians practice sustainability in daily life: zero-waste shopping, organic food, sustainable fashion, and the culture of repairing rather than replacing.",
     goals:["Discuss sustainable lifestyle choices in Italian","Understand Italian recycling culture","Talk about organic and local food"]},

    {type:"teach", trg:"il biologico", src:"organic (food/farming)", pos:"adj", gender:"m",
     note:"Masculine adjective. 'Cibo biologico' = organic food.\nAbbreviated: 'bio.' 'Prodotto bio' = organic product.",
     example:"A: Compri cibo biologico?\nB: Si, soprattutto frutta e verdura bio.",
     exampleSrc:"A: Do you buy organic food?\nB: Yes, especially organic fruit and vegetables.",
     funFact:"Italy is the largest organic food producer in Europe by number of farms. 'Bio' is the common abbreviation. Italian supermarkets have dedicated 'bio' sections. Organic products cost 20-40% more, but the 'filiera corta' (short supply chain) movement connects consumers directly to local organic farmers."},

    {type:"teach", trg:"il chilometro zero", src:"zero-kilometer / locally sourced", pos:"noun", gender:"m",
     note:"Masculine. 'Km 0' or 'a chilometro zero.'\nFood produced and consumed locally. No transport.",
     example:"A: Questo ristorante usa prodotti a chilometro zero.\nB: Che bello! Tutto fresco e locale.",
     exampleSrc:"A: This restaurant uses locally sourced products.\nB: How nice! All fresh and local.",
     funFact:"The 'chilometro zero' movement is huge in Italy. It means food travels zero kilometers from farm to table. Farmers' markets ('mercati contadini') and direct farm sales ('vendita diretta') are popular. The philosophy: fresher food, lower carbon footprint, support for local farmers."},

    {type:"teach", trg:"il sacchetto", src:"the bag (shopping)", pos:"noun", gender:"m",
     note:"Masculine. 'Sacchetto di plastica' = plastic bag.\nItaly banned free plastic bags in 2018.",
     example:"A: Hai portato il sacchetto riutilizzabile?\nB: Si, non uso piu quelli di plastica.",
     exampleSrc:"A: Did you bring the reusable bag?\nB: Yes, I no longer use plastic ones.",
     funFact:"Italy was one of the first EU countries to ban free single-use plastic bags (2018). All stores charge for bags, which must be biodegradable or compostable. Italians have adapted quickly: bringing 'borse riutilizzabili' (reusable bags) or 'sportine' (shopping bags from home) is now the norm."},

    {type:"teach", trg:"lo sfuso", src:"bulk / unpackaged", pos:"noun", gender:"m",
     note:"Masculine. 'Comprare sfuso' = to buy in bulk without packaging.\n'Negozio alla spina' = refill shop.",
     example:"A: In questo negozio vendono tutto sfuso.\nB: Fantastico! Meno plastica e meno spreco.",
     exampleSrc:"A: In this shop they sell everything unpackaged.\nB: Fantastic! Less plastic and less waste.",
     funFact:"'Negozi sfusi' or 'negozi alla spina' (refill shops) are growing in Italian cities. Customers bring their own containers for pasta, rice, detergent, and even wine. The concept reduces packaging waste dramatically. Milan and Turin lead in zero-waste shopping options."},

    {type:"teach", trg:"il compostaggio", src:"composting", pos:"noun", gender:"m",
     note:"Masculine. From 'compost' (English/French).\n'Compostiera' = compost bin.",
     example:"A: Fai il compostaggio in casa?\nB: Si, ho una compostiera sul balcone.",
     exampleSrc:"A: Do you do composting at home?\nB: Yes, I have a compost bin on the balcony.",
     funFact:"Home composting ('compostaggio domestico') is encouraged by many Italian municipalities, which offer discounts on the waste tax ('TARI') for residents who compost. Organic waste ('umido') is also collected separately in brown bins. Italy composts about 40% of its organic waste."},

    {type:"teach", trg:"la moda sostenibile", src:"sustainable fashion", pos:"noun", gender:"f",
     note:"Feminine. 'Moda' = fashion. 'Sostenibile' = sustainable.\n'Fast fashion' is used as-is in Italian.",
     example:"A: Compri moda sostenibile?\nB: Cerco di comprare meno ma meglio.",
     exampleSrc:"A: Do you buy sustainable fashion?\nB: I try to buy less but better.",
     funFact:"Italy is a fashion powerhouse, so 'moda sostenibile' has special significance. Brands like Gucci and Prada have launched sustainability programs. The Italian tradition of quality craftsmanship ('artigianato') naturally opposes fast fashion: buy well-made items that last. Vintage and second-hand shops ('negozi vintage') are thriving."},

    {type:"teach", trg:"riutilizzare", src:"to reuse", pos:"verb", gender:null,
     note:"Regular -are verb. Ri (again) + utilizzare (to use).\n'Riutilizzare le bottiglie' = to reuse bottles.",
     example:"A: Puoi riutilizzare questo barattolo di vetro.\nB: Buona idea! Lo uso per il sale.",
     exampleSrc:"A: You can reuse this glass jar.\nB: Good idea! I will use it for salt.",
     funFact:"The Italian sustainability mantra follows the 'tre R': Ridurre (Reduce), Riutilizzare (Reuse), Riciclare (Recycle). 'Riutilizzare' is considered more sustainable than recycling because it avoids the energy cost of processing. Italian culture has always valued repairing and reusing: 'non si butta niente' (nothing gets thrown away)."},

    {type:"teach", trg:"l'economia circolare", src:"the circular economy", pos:"noun", gender:"f",
     note:"Feminine. 'Economia' = economy. 'Circolare' = circular.\nOpposite of linear 'take-make-dispose.'",
     example:"A: L'economia circolare e il futuro.\nB: Si, niente deve diventare rifiuto.",
     exampleSrc:"A: The circular economy is the future.\nB: Yes, nothing should become waste.",
     funFact:"Italy is a European leader in circular economy practices. Italian industries recycle 79% of their waste, the highest rate in Europe. The tradition of using every part of a material (from food to textiles) is deeply rooted. 'L'economia circolare' aligns naturally with the Italian principle of 'non sprecare' (do not waste)."},

    {type:"teach", trg:"la bottiglia d'acqua", src:"the water bottle", pos:"noun", gender:"f",
     note:"Feminine. 'Bottiglia' = bottle. 'D'acqua' = of water.\n'Borraccia' = reusable water bottle.",
     example:"A: Usa una borraccia invece della bottiglia di plastica.\nB: Hai ragione, devo comprarne una.",
     exampleSrc:"A: Use a reusable bottle instead of a plastic one.\nB: You are right, I need to buy one.",
     funFact:"Italians are Europe's highest consumers of bottled water ('acqua minerale'), drinking about 200 liters per person per year. 'Acqua del rubinetto' (tap water) is safe everywhere but many Italians distrust it. The 'case dell'acqua' (public water fountains with filtered water) movement aims to reduce plastic bottle use."},

    // Quiz steps
    {type:"mc", q:"What does 'chilometro zero' mean for food?",
     opts:["The food traveled zero kilometers, it is locally sourced","The food costs zero euros","The food has zero additives","The food has zero calories"],
     ans:"The food traveled zero kilometers, it is locally sourced",
     hint:"Farm to table with no transport. Fresher produce, lower carbon footprint, and support for local farmers."},

    {type:"fb", s:"Compri cibo {1}? Frutta e verdura senza pesticidi.",
     a:["biologico"],
     opts:["biologico","sfuso","locale","economico"],
     hint:"This type of food is grown without synthetic pesticides or fertilizers. Often abbreviated as 'bio.'",
     sSrc:"Do you buy {1} food? Fruit and vegetables without pesticides."},

    {type:"match", pairs:[
      {trg:"il biologico", src:"organic"},
      {trg:"lo sfuso", src:"bulk / unpackaged"},
      {trg:"il compostaggio", src:"composting"},
      {trg:"riutilizzare", src:"to reuse"},
      {trg:"l'economia circolare", src:"the circular economy"}
    ]},

    {type:"mc", q:"Why is Italy a leader in the circular economy?",
     opts:["Italian law bans all forms of waste disposal","Italian industries recycle 79% of their waste, the highest rate in Europe","Italy has no landfills at all","Italy exports all its waste to other countries"],
     ans:"Italian industries recycle 79% of their waste, the highest rate in Europe",
     hint:"The cultural tradition of not wasting anything ('non sprecare') aligns with modern circular economy principles."},

    {type:"fb", s:"In questo negozio vendono tutto {1}. Porta i tuoi contenitori.",
     a:["sfuso"],
     opts:["sfuso","biologico","locale","gratuito"],
     hint:"Products are sold without packaging. Customers bring their own jars and bags. Also called 'alla spina.'",
     sSrc:"In this shop they sell everything {1}. Bring your own containers."},

    {type:"mc", q:"What are the 'tre R' of Italian sustainability?",
     opts:["Rispondere, Reagire, Risolvere","Riscaldare, Raffreddare, Riposare","Ridurre, Riutilizzare, Riciclare","Ricercare, Rinnovare, Ricostruire"],
     ans:"Ridurre, Riutilizzare, Riciclare",
     hint:"Reduce, Reuse, Recycle. These three verbs summarize the sustainable lifestyle approach in order of priority."},

    {type:"fb", s:"Usa una {1} invece della bottiglia di plastica.",
     a:["borraccia"],
     opts:["borraccia","bottiglia","tazza","pentola"],
     hint:"This reusable container for water replaces single-use plastic bottles. Italy is Europe's top bottled water consumer.",
     sSrc:"Use a reusable water {1} instead of a plastic bottle."},

    {type:"mc", q:"Why do many Italians still prefer bottled water?",
     opts:["Bottled water is always free in Italian restaurants","Italian law requires bottled water for drinking","Tap water is unsafe in most Italian cities","They believe bottled water tastes better despite safe tap water"],
     ans:"They believe bottled water tastes better despite safe tap water",
     hint:"Italian t... w... is s... everywhere, but cultural preference for 'acqua minerale' persists. Public filtered w... fountains are reducing bottle use."}
  ]
};
export default LESSON_5;
