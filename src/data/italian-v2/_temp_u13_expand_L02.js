// Unit 13 Expansion. Lesson 5: Irregular Subjunctive Deep Dive
const LESSON_5 = {
  id:"itv2_u13l5", title:"Che stia, che voglia", icon:"🌀", xp:15, board:true,
  steps:[
    {type:"intro", title:"Che stia, che voglia",
     desc:"Master more irregular subjunctive forms: stare, volere, uscire, tenere, and venire. These high-frequency verbs appear constantly in everyday Italian.",
     goals:["Learn irregular subjunctive of stare and volere","Form subjunctive of uscire, tenere, and rimanere","Use irregular subjunctives in natural sentences"]},

    {type:"teach", trg:"stia", src:"(that) I/you/he stay/be (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'stare.' Completely irregular.\nChe io stia, che tu stia, che lui stia.",
     example:"A: Spero che tu stia bene.\nB: Grazie, sto molto meglio adesso.",
     exampleSrc:"A: I hope you are well.\nB: Thanks, I am much better now.",
     funFact:"'Stare' in the subjunctive becomes 'stia,' which looks nothing like the indicative 'sto.' 'Stare' covers health ('Come stai?'), location ('Sto a casa'), and progressive actions ('Sto mangiando'). All become 'stia' in the subjunctive."},

    {type:"teach", trg:"voglia", src:"(that) I/you/he want (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'volere.' Irregular stem 'vogli-'.\nChe io voglia, che tu voglia, che lui voglia.",
     example:"A: Penso che voglia cambiare lavoro.\nB: Credo che voglia un lavoro piu creativo.",
     exampleSrc:"A: I think he wants to change jobs.\nB: I believe he wants a more creative job.",
     funFact:"'Volere' in the subjunctive takes the stem 'vogli-' with the soft 'gl' sound (like 'million'). The noi form is 'vogliamo,' the voi form 'vogliate,' and loro 'vogliano.' 'Che Dio voglia!' (God willing!) is a common exclamation."},

    {type:"teach", trg:"esca", src:"(that) I/you/he go out (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'uscire.' Irregular stem 'esc-'.\nChe io esca, che tu esca, che lui esca.",
     example:"A: Penso che Maria esca stasera.\nB: Spero che esca con noi.",
     exampleSrc:"A: I think Maria is going out tonight.\nB: I hope she goes out with us.",
     funFact:"'Uscire' changes its stem in the subjunctive just like in the indicative: 'esco' (I go out), 'esca' (that I go out). The stem 'esc-' appears in singular and third person plural. Noi and voi keep the regular stem: usciamo, usciate."},

    {type:"teach", trg:"tenga", src:"(that) I/you/he hold/keep (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'tenere.' Irregular stem 'teng-'.\nChe io tenga, che tu tenga, che lui tenga.",
     example:"A: E importante che tu tenga tutto in ordine.\nB: Cerco di tenere la scrivania pulita.",
     exampleSrc:"A: It is important that you keep everything tidy.\nB: I try to keep my desk clean.",
     funFact:"'Tenere' follows the same pattern as 'venire': indicative 'tengo,' subjunctive 'tenga.' The 'g' insertion in the stem is a common irregularity. Compounds follow the same pattern: ottenere (to obtain) > ottenga, mantenere (to maintain) > mantenga."},

    {type:"teach", trg:"rimanga", src:"(that) I/you/he remain (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'rimanere.' Irregular stem 'rimang-'.\nChe io rimanga, che tu rimanga, che lui rimanga.",
     example:"A: Credo che rimanga a casa stasera.\nB: Penso che rimanga perche e stanco.",
     exampleSrc:"A: I believe he is staying home tonight.\nB: I think he is staying because he is tired.",
     funFact:"'Rimanere' adds a 'g' in its irregular forms: rimango (indicative), rimanga (subjunctive). This mirrors the pattern of 'tenere > tenga' and 'venire > venga.' The past participle is also irregular: 'rimasto' (not 'rimanuto')."},

    {type:"teach", trg:"scelga", src:"(that) I/you/he choose (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'scegliere.' Irregular stem 'scelg-'.\nChe io scelga, che tu scelga, che lui scelga.",
     example:"A: E importante che tu scelga con cura.\nB: Credo che scelga il corso di italiano.",
     exampleSrc:"A: It is important that you choose carefully.\nB: I think he is choosing the Italian course.",
     funFact:"'Scegliere' (to choose) has the past participle 'scelto.' In the subjunctive, the stem becomes 'scelg-.' This verb is essential in daily life: 'Scegli tu!' (You choose!) is what Italians say when they cannot decide where to eat."},

    {type:"teach", trg:"proponga", src:"(that) I/you/he propose (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'proporre.' Irregular stem 'propong-'.\nChe io proponga, che tu proponga, che lui proponga.",
     example:"A: Spero che proponga una soluzione.\nB: Penso che proponga di lavorare insieme.",
     exampleSrc:"A: I hope he proposes a solution.\nB: I think he will propose working together.",
     funFact:"'Proporre' is a compound of 'porre' (to place, to put). All -porre verbs follow the same pattern: supporre > supponga, opporre > opponga, disporre > disponga. The stem adds '-ng-' in subjunctive singular and third person plural."},

    {type:"teach", trg:"produca", src:"(that) I/you/he produce (subjunctive)", pos:"verb", gender:null,
     note:"Subjunctive of 'produrre.' Irregular stem 'produc-'.\nChe io produca, che tu produca, che lui produca.",
     example:"A: E necessario che l'Italia produca piu energia verde.\nB: Credo che produca gia molto solare.",
     exampleSrc:"A: It is necessary that Italy produces more green energy.\nB: I believe it already produces a lot of solar.",
     funFact:"All -durre verbs (from Latin -ducere) share the same subjunctive pattern with '-uc-' stem: tradurre > traduca, condurre > conduca, ridurre > riduca. These verbs are very productive in Italian and appear frequently in formal and academic language."},

    {type:"verb_table", title:"Congiuntivo presente: altri irregolari",
     note:"Additional irregular subjunctive forms. These all share the pattern of stem change in singular + loro.",
     groups:[{label:"stare (to stay/be)", rows:[
       {pronoun:"che io", form:"stia", src:"that I stay"},
       {pronoun:"che tu", form:"stia", src:"that you stay"},
       {pronoun:"che lui/lei", form:"stia", src:"that he/she stays"},
       {pronoun:"che noi", form:"stiamo", src:"that we stay"},
       {pronoun:"che voi", form:"stiate", src:"that you (pl.) stay"},
       {pronoun:"che loro", form:"stiano", src:"that they stay"}
     ]},{label:"volere (to want)", rows:[
       {pronoun:"che io", form:"voglia", src:"that I want"},
       {pronoun:"che tu", form:"voglia", src:"that you want"},
       {pronoun:"che lui/lei", form:"voglia", src:"that he/she wants"},
       {pronoun:"che noi", form:"vogliamo", src:"that we want"},
       {pronoun:"che voi", form:"vogliate", src:"that you (pl.) want"},
       {pronoun:"che loro", form:"vogliano", src:"that they want"}
     ]}]},

    // Quiz steps
    {type:"mc", q:"What is the subjunctive of 'stare' for 'che tu'?",
     opts:["stai","sta","stia","stato"],
     ans:"stia",
     hint:"This completely irregular form looks nothing like the indicative 'stai.' All singular forms are identical in the subjunctive."},

    {type:"fb", s:"Penso che Maria {1} stasera.",
     a:["esca"],
     opts:["esca","esce","uscire","uscita"],
     hint:"After 'penso che,' use the subjunctive. This verb means 'to go out' and has an irregular stem with 'esc-.'",
     sSrc:"I think Maria {1} tonight."},

    {type:"match", pairs:[
      {trg:"stia", src:"(that) stay (stare)"},
      {trg:"voglia", src:"(that) want (volere)"},
      {trg:"esca", src:"(that) go out (uscire)"},
      {trg:"tenga", src:"(that) keep (tenere)"},
      {trg:"rimanga", src:"(that) remain (rimanere)"}
    ]},

    {type:"mc", q:"Which pattern do 'tenere,' 'venire,' and 'rimanere' share in the subjunctive?",
     opts:["They all add -sc- before the ending","They all double the final consonant","They all insert a -g- in the stem","They all drop the first syllable entirely"],
     ans:"They all insert a -g- in the stem",
     hint:"Tenga, venga, rimanga: notice that each irregular s... gains an extra consonant. Noi/voi forms return to the regular s...."},

    {type:"fb", s:"E importante che tu {1} con cura.",
     a:["scelga"],
     opts:["scelga","scegli","scegliere","scelto"],
     hint:"After an impersonal trigger, use the subjunctive. This verb means 'to choose' and has the stem 'scelg-.'",
     sSrc:"It is important that you {1} carefully."},

    {type:"mc", q:"What is the subjunctive of 'volere' for 'che io'?",
     opts:["voglio","voglia","vogli","volga"],
     ans:"voglia",
     hint:"The stem changes to 'vogli-' with the soft 'gl' sound. All singular subjunctive forms share this same form."},

    {type:"fb", s:"Credo che {1} a casa stasera.",
     a:["rimanga"],
     opts:["rimanga","rimane","rimanere","rimasto"],
     hint:"After 'credo che,' the verb must be in the subjunctive. This verb means 'to remain' and adds a -g- in the stem.",
     sSrc:"I believe he {1} home tonight."},

    {type:"mc", q:"What do 'proporre,' 'supporre,' and 'opporre' have in common in the subjunctive?",
     opts:["They are all regular -are verbs with standard endings","They all use the stem ending in -pong- plus subjunctive endings","They all have the same meaning in Italian","They are only used in written Italian, never in speech"],
     ans:"They all use the stem ending in -pong- plus subjunctive endings",
     hint:"Proponga, supponga, opponga: all -porre compounds add '-ng-' to the s... in the s...."}
  ]
};
export default LESSON_5;
