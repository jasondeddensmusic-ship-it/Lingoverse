// Batch 6 – Unit 17 (B1.1 Passive Voice): Accidents & Incidents
const BATCH6_L1 = {
  id:"jav2_u17l_b6_1", title:"事件(じけん)と事故(じこ)", icon:"🚨", xp:15, board:true,
  steps:[
    {type:"intro", title:"事件(じけん)と事故(じこ)",
     desc:"Learn vocabulary for describing accidents, incidents, and unfortunate events. The passive voice naturally fits these topics, as victims describe what happened to them.",
     goals:["Describe accidents and incidents using passive constructions","Report problems to authorities","Use emergency-related vocabulary"]},

    {type:"teach", trg:"事故(じこ)", src:"accident", pos:"noun", gender:null,
     note:"Kanji: 事故. 交通事故(こうつうじこ) = traffic accident.\n事故(じこ)にあう = to have an accident.",
     example:"A: けさ交通事故(こうつうじこ)がありました。\nB: 怪我人(けがにん)はいましたか？",
     exampleSrc:"A: There was a traffic accident this morning.\nB: Were there any injured people?",
     funFact:"事故 combines 事 (matter) and 故 (reason/cause). Japan has significantly reduced traffic accidents through strict laws, advanced car technology, and excellent road design. 電車事故(でんしゃじこ) (train accidents) cause massive delays, and あわてないで (don't panic) is the standard advice."},

    {type:"teach", trg:"事件(じけん)", src:"incident / case / crime", pos:"noun", gender:null,
     note:"Kanji: 事件. 殺人事件(さつじんじけん) = murder case.\n事件(じけん)が起(お)きる = an incident occurs.",
     example:"A: ゆうべこの近(ちか)くで事件(じけん)がありました。\nB: 危(あぶ)ないですね。気(き)をつけましょう。",
     exampleSrc:"A: There was an incident near here last night.\nB: That is dangerous. Let us be careful.",
     funFact:"事件(じけん) and 事故(じこ) are often confused. 事故(じこ) = accidental event (car crash, fall). 事件(じけん) = deliberate or criminal event (theft, assault). However, overlap exists: 火事(かじ) (fire) can be either. News programs (ニュース) classify stories as 事件(じけん) or 事故(じこ)."},

    {type:"teach", trg:"盗(ぬす)む", src:"to steal", pos:"verb", gender:null,
     note:"Group 1 verb. 財布(さいふ)を盗(ぬす)まれた = my wallet was stolen (passive).\nKanji: 盗む.",
     example:"A: 電車(でんしゃ)で財布(さいふ)を盗(ぬす)まれました。\nB: すぐ警察(けいさつ)に届(とど)けてください。",
     exampleSrc:"A: My wallet was stolen on the train.\nB: Please report it to the police immediately.",
     funFact:"Despite Japan's low crime rate, すり (pickpocketing) does occur on crowded trains. 盗(ぬす)まれた (was stolen) is the passive form victims use. At 交番(こうばん), filing a 被害届(ひがいとどけ) (damage report) is the first step. Japan's lost-and-found system often reunites owners with stolen items."},

    {type:"teach", trg:"無(な)くす", src:"to lose (an item)", pos:"verb", gender:null,
     note:"Group 1 verb. 鍵(かぎ)を無(な)くした = I lost my key.\nKanji: 無くす/失くす.",
     example:"A: パスポートを無(な)くしてしまいました。\nB: 大使館(たいしかん)に連絡(れんらく)してください。",
     exampleSrc:"A: I accidentally lost my passport.\nB: Please contact the embassy.",
     funFact:"無(な)くす and 落(お)とす (to drop) are both used for losing items. てしまう (regretfully did) often accompanies: 無(な)くしてしまった (lost it, unfortunately). Japan's remarkably honest society means lost items are often returned. JR trains' お落(お)とし物(もの)センター returns about 75% of lost items."},

    {type:"teach", trg:"壊(こわ)れる", src:"to break (intransitive)", pos:"verb", gender:null,
     note:"Group 2 verb. パソコンが壊(こわ)れた = the computer broke.\nKanji: 壊れる. Transitive: 壊(こわ)す.",
     example:"A: 自転車(じてんしゃ)が壊(こわ)れてしまいました。\nB: 修理(しゅうり)に出(だ)しましょう。",
     exampleSrc:"A: My bicycle broke.\nB: Let us have it repaired.",
     funFact:"壊(こわ)れる (intransitive, it broke) and 壊(こわ)す (transitive, I broke it) are an important pair. Japanese uses intransitive forms when the focus is on the result, not blame: 窓(まど)が壊(こわ)れた (the window broke) avoids saying who did it. This indirect style is culturally significant."},

    {type:"mc", q:"財布(さいふ)を盗(ぬす)まれた means:", opts:["My wallet was stolen","I stole a wallet","I found a wallet","I lost a wallet"], ans:"My wallet was stolen",
     hint:"盗(ぬす)まれた is the passive form of 盗(ぬす)む (to steal). The speaker is the victim."},

    {type:"teach", trg:"倒(たお)れる", src:"to collapse / to fall down", pos:"verb", gender:null,
     note:"Group 2 verb. 人(ひと)が倒(たお)れた = a person collapsed.\nKanji: 倒れる. Also: 木(き)が倒(たお)れた = a tree fell.",
     example:"A: 駅(えき)で人(ひと)が倒(たお)れました。\nB: 救急車(きゅうきゅうしゃ)を呼(よ)んでください！",
     exampleSrc:"A: A person collapsed at the station.\nB: Please call an ambulance!",
     funFact:"倒(たお)れる describes both people collapsing (from illness, exhaustion) and objects falling over. In Japan, people occasionally 倒(たお)れる from overwork (過労(かろう)). This serious social issue led to the word 過労死(かろうし) (death from overwork), recognized internationally."},

    {type:"teach", trg:"救急車(きゅうきゅうしゃ)", src:"ambulance", pos:"noun", gender:null,
     note:"Kanji: 救急車. 救急(きゅうきゅう) = emergency. 車(しゃ) = vehicle.\n119に電話(でんわ)する = to call 119.",
     example:"A: 救急車(きゅうきゅうしゃ)を呼(よ)んでください。\nB: はい、すぐ電話(でんわ)します。",
     exampleSrc:"A: Please call an ambulance.\nB: Okay, I will call right away.",
     funFact:"Japanese ambulances are free to use (taxpayer-funded). Call 119 for both fire and ambulance. The operator asks: 火事(かじ)ですか、救急(きゅうきゅう)ですか (fire or ambulance?). Ambulances are white with red stripes and play a distinctive siren. Response time averages about 8 minutes."},

    {type:"teach", trg:"危(あぶ)ない", src:"dangerous / watch out!", pos:"adj", gender:null,
     note:"I-adjective. 危(あぶ)ない！= Watch out! (warning).\nKanji: 危ない. 危険(きけん) = danger (noun).",
     example:"A: 危(あぶ)ない！車(くるま)が来(き)ます！\nB: ありがとう。見(み)えませんでした。",
     exampleSrc:"A: Watch out! A car is coming!\nB: Thank you. I did not see it.",
     funFact:"危(あぶ)ない serves as both an adjective (dangerous) and an exclamation (watch out!). Signs reading 危(あぶ)ない or 危険(きけん) (danger) are posted near cliffs, construction sites, and railway crossings. Children learn 危(あぶ)ない early. In anime, it is shouted dramatically before action scenes."},

    {type:"teach", trg:"守(まも)る", src:"to protect / to guard / to observe (rules)", pos:"verb", gender:null,
     note:"Group 1 verb. ルールを守(まも)る = to follow rules.\nKanji: 守る. 守(まも)りがたい = hard to protect.",
     example:"A: 交通(こうつう)ルールを守(まも)ってください。\nB: はい、気(き)をつけます。",
     exampleSrc:"A: Please follow traffic rules.\nB: Yes, I will be careful.",
     funFact:"守(まも)る has dual meaning: to protect (people) and to observe (rules/promises). 約束(やくそく)を守(まも)る (keep a promise) and ルールを守(まも)る (follow rules) are drilled into Japanese children from kindergarten. お守(まも)り (protective charm) from shrines are a physical form of 守(まも)る."},

    {type:"fb", s:"パスポートを{1}てしまいました。\n(I accidentally lost my passport.)", a:"無(な)くし", opts:["無(な)くし","盗(ぬす)み","壊(こわ)し","落(お)とし"], sSrc:"I accidentally lost my passport.",
     hint:"The て-form of the verb meaning to lose an item."},

    {type:"teach", trg:"捕(つか)まえる", src:"to catch / to capture", pos:"verb", gender:null,
     note:"Group 2 verb. 犯人(はんにん)を捕(つか)まえる = to catch the criminal.\nKanji: 捕まえる.",
     example:"A: 警察(けいさつ)が犯人(はんにん)を捕(つか)まえました。\nB: よかったです。安心(あんしん)しました。",
     exampleSrc:"A: The police caught the criminal.\nB: That is good. I feel relieved.",
     funFact:"捕(つか)まえる (catch) and 捕(つか)まる (be caught, intransitive) are a pair. In children's games, 鬼(おに)ごっこ (tag) uses 捕(つか)まえた！(caught you!). The police term 逮捕(たいほ)する (to arrest) is more formal than 捕(つか)まえる. In news, 容疑者(ようぎしゃ)が捕(つか)まった (the suspect was caught) is standard phrasing."},

    {type:"teach", trg:"届(とど)ける", src:"to deliver / to report / to notify", pos:"verb", gender:null,
     note:"Group 2 verb. 警察(けいさつ)に届(とど)ける = to report to police.\nKanji: 届ける.",
     example:"A: 落(お)とし物(もの)を交番(こうばん)に届(とど)けました。\nB: ありがとうございます。持(も)ち主(ぬし)を探(さが)します。",
     exampleSrc:"A: I brought a lost item to the police box.\nB: Thank you. We will search for the owner.",
     funFact:"届(とど)ける covers both physical delivery and official reporting. 被害届(ひがいとどけ) (damage report), 転入届(てんにゅうとどけ) (move-in notification), and 婚姻届(こんいんとどけ) (marriage registration) all use 届(とど)け. Japan's civic responsibility culture means people routinely 届(とど)ける lost items."},

    {type:"mc", q:"救急車(きゅうきゅうしゃ) is:", opts:["An ambulance","A police car","A fire truck","A taxi"], ans:"An ambulance",
     hint:"This emergency vehicle carries sick or injured people to the hospital."},

    {type:"match", pairs:[
      {trg:"事故(じこ)", src:"accident"},
      {trg:"盗(ぬす)む", src:"to steal"},
      {trg:"壊(こわ)れる", src:"to break"},
      {trg:"危(あぶ)ない", src:"dangerous"},
      {trg:"守(まも)る", src:"to protect / follow rules"}
    ]},

    {type:"fb", s:"{1}！車(くるま)が来(き)ます！\n(Watch out! A car is coming!)", a:"危(あぶ)ない", opts:["危(あぶ)ない","熱(あつ)い","痛(いた)い","怖(こわ)い"], sSrc:"Watch out! A car is coming!",
     hint:"This word serves as both an adjective (dangerous) and a warning shout."},

    {type:"mc", q:"届(とど)ける can mean:", opts:["Both to deliver and to report","Only to deliver","Only to report","To steal"], ans:"Both to deliver and to report",
     hint:"This versatile verb covers physical delivery and official notification."}
  ,{type:"match",pairs:[{trg:"事件(じけん)",src:"incident / case / crime"},{trg:"無(な)くす",src:"to lose (an item)"},{trg:"倒(たお)れる",src:"to collapse / to fall down"},{trg:"救急車(きゅうきゅうしゃ)",src:"ambulance"},{trg:"捕(つか)まえる",src:"to catch / to capture"},{trg:"届(とど)ける",src:"to deliver / to report / to notify"}]},
  {type:"fb", s:"駅(えき)で誰(だれ)かが私(わたし)の財布(さいふ)を{1}ました。", a:["盗(ぬす)む"], opts:["盗(ぬす)む","無(な)くす","壊(こわ)れる","倒(たお)れる"], hint:"The verb for taking something that belongs to someone else without permission.", sSrc:"Someone {1} my wallet at the station."}
]
};
export default BATCH6_L1;
