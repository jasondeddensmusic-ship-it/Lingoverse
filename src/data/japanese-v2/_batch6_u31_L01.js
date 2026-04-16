// Batch 6 – Unit 31 (B2.3 Law): Crime & Criminal Justice
const BATCH6_L1 = {
  id:"jav2_u31l_b6_1", title:"はんざいとけいじしほう", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"はんざいとけいじしほう",
     desc:"Learn advanced vocabulary for crime, criminal justice, and legal proceedings. These JLPT N1-level words appear frequently in news, drama, and legal contexts.",
     goals:["Discuss crime types and criminal justice","Understand courtroom and legal vocabulary","Analyze news about legal cases"]},

    {type:"teach", trg:"はんざい", src:"crime", pos:"noun", gender:null,
     note:"Kanji: 犯罪. はんざいりつ = crime rate.\nサイバーはんざい = cybercrime.",
     example:"A: にほんのはんざいりつはせかいてきにひくいです。\nB: あんぜんなしゃかいですね。",
     exampleSrc:"A: Japan's crime rate is low globally.\nB: It is a safe society.",
     funFact:"Japan has one of the world's lowest はんざい (crime) rates. Factors include strict gun control, cultural emphasis on conformity, and effective policing. However, オレオレさぎ (phone scams targeting elderly) and サイバーはんざい (cybercrime) are growing concerns. The country's safety remains a major draw for tourists and residents."},

    {type:"teach", trg:"はんにん", src:"criminal / perpetrator", pos:"noun", gender:null,
     note:"Kanji: 犯人. はんにんをたいほする = to arrest the criminal.\nまだはんにんがつかまっていない = the perpetrator has not been caught.",
     example:"A: はんにんはまだつかまっていません。\nB: けいさつがそうさちゅうです。",
     exampleSrc:"A: The criminal has not been caught yet.\nB: The police are investigating.",
     funFact:"In Japanese media, はんにん is used before conviction. After conviction, the person becomes ゆうざいしゃ (convicted person). The presumption of innocence (すいていむざい) is a legal principle, but media coverage can be intense. Japanese mystery novels (すいりしょうせつ) are a beloved genre, and はんにんあて (guessing the criminal) is a national pastime."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"Kanji: 裁判. さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: さいばんはらいしゅうからはじまります。\nB: ゆうざいかむざいか、ちゅうもくされていますね。",
     exampleSrc:"A: The trial starts next week.\nB: Whether guilty or not guilty, it is attracting attention.",
     funFact:"Japan introduced さいばんいんせいど (lay judge system) in 2009, where ordinary citizens serve alongside professional judges in serious criminal cases. Japan's conviction rate exceeds 99%, prompting debate about prosecutorial power. The three-tier court system includes ちほうさいばんしょ (district), こうとうさいばんしょ (high), and さいこうさいばんしょ (supreme)."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. しょうこをあつめる = to gather evidence.\nしょうこぶっけん = physical evidence.",
     example:"A: じゅうぶんなしょうこがなければきそできません。\nB: そうさをつづけてしょうこをあつめましょう。",
     exampleSrc:"A: Without sufficient evidence, we cannot prosecute.\nB: Let us continue the investigation and gather evidence.",
     funFact:"しょうこ (証拠) is the cornerstone of legal proceedings. The burden of proof (りっしょうせきにん) rests on the prosecution. しょうこいんめつ (evidence destruction) is itself a crime. Japanese detective dramas (けいじドラマ) revolve around しょうこ collection. Popular series like 'Soutou' and 'Hero' showcase this process."},

    {type:"teach", trg:"むざい", src:"not guilty / innocent", pos:"noun", gender:null,
     note:"Kanji: 無罪. むざいほうめん = acquittal.\nOpposite: ゆうざい (guilty).",
     example:"A: ひこくにんはむざいをしゅちょうしています。\nB: さいばんけっかをまちましょう。",
     exampleSrc:"A: The defendant claims innocence.\nB: Let us wait for the trial result.",
     funFact:"むざい (無罪) uses 無 (without) and 罪 (sin/crime). With Japan's 99%+ conviction rate, むざいはんけつ (not-guilty verdict) is extremely rare and makes headlines. えんざい (冤罪, wrongful conviction) cases, though few, have led to decades of imprisonment. Several high-profile えんざい cases have been overturned after DNA evidence review."},

    {type:"mc", q:"しょうこ means:", opts:["Evidence or proof","A criminal","A judge","A court"], ans:"Evidence or proof",
     hint:"This is what investigators gather and prosecutors present to support their case."},

    {type:"teach", trg:"きそ", src:"prosecution / indictment", pos:"noun", gender:null,
     note:"Kanji: 起訴. きそする = to prosecute/indict.\nふきそ = non-prosecution (no charges filed).",
     example:"A: けんさつはようぎしゃをきそしました。\nB: どんなようぎですか？",
     exampleSrc:"A: The prosecution indicted the suspect.\nB: What are the charges?",
     funFact:"きそ (起訴) literally means 'to raise a suit.' Japanese prosecutors (けんさつかん) have enormous power. They decide whether to きそ, and once they do, conviction is almost certain. ふきそ (non-prosecution) happens when evidence is insufficient or the suspect shows remorse. This prosecutorial discretion is a unique feature of Japanese law."},

    {type:"teach", trg:"ばっきん", src:"fine / penalty payment", pos:"noun", gender:null,
     note:"Kanji: 罰金. ばっきんをはらう = to pay a fine.\nスピードいはんのばっきん = speeding fine.",
     example:"A: しんごうむしでばっきんをとられました。\nB: いくらでしたか？",
     exampleSrc:"A: I was fined for running a red light.\nB: How much was it?",
     funFact:"ばっきん (罰金) combines 罰 (punishment) and 金 (money). Traffic fines (こうつういはん) are common: speeding, illegal parking, and phone use while driving. Japanese fines are generally lower than Western countries but carry social stigma. More serious offenses lead to ちょうえき (imprisonment) instead of just fines."},

    {type:"teach", trg:"そうさ", src:"investigation / search", pos:"noun", gender:null,
     note:"Kanji: 捜査. そうさする = to investigate.\nそうさほんぶ = investigation headquarters.",
     example:"A: けいさつがそうさをすすめています。\nB: はやくはんにんがつかまるといいですね。",
     exampleSrc:"A: The police are advancing the investigation.\nB: I hope the criminal is caught soon.",
     funFact:"そうさ (捜査) is distinct from ちょうさ (調査, research/survey). そうさ is specifically criminal investigation. Japanese police そうさ methods include extensive door-to-door interviews, CCTV footage analysis, and detailed crime scene processing. The そうさいちか (investigation division 1) handles homicides and is the setting of many detective dramas."},

    {type:"teach", trg:"ようぎしゃ", src:"suspect", pos:"noun", gender:null,
     note:"Kanji: 容疑者. ようぎしゃをたいほ = arrest the suspect.\nBefore conviction, media uses ようぎしゃ.",
     example:"A: ようぎしゃがたいほされました。\nB: もくげきしゃのしょうげんがけっていてきだったそうです。",
     exampleSrc:"A: The suspect has been arrested.\nB: Apparently the witness testimony was decisive.",
     funFact:"Japanese media strictly uses ようぎしゃ (suspect) before conviction and ひこくにん (defendant) during trial. Adding さん or even 容疑者 after someone's name is standard media practice. This differs from some countries where media uses terms less carefully. The shift from ようぎしゃ to ゆうざいしゃ (convicted) only happens after the verdict."},

    {type:"fb", s:"けいさつが{1}をすすめています。\n(The police are advancing the investigation.)", a:"そうさ", opts:["そうさ","さいばん","きそ","ばっきん"], sSrc:"The police are advancing the investigation.",
     hint:"The word specifically for criminal investigation by law enforcement."},

    {type:"teach", trg:"ほうりつ", src:"law / legislation", pos:"noun", gender:null,
     note:"Kanji: 法律. ほうりつをまもる = to obey the law.\nほうりつかん = lawyer.",
     example:"A: あたらしいほうりつがしこうされました。\nB: どんなないようですか？",
     exampleSrc:"A: A new law has been enacted.\nB: What is its content?",
     funFact:"ほうりつ (法律) combines 法 (law/method) and 律 (rule/regulation). Japan's legal system blends continental European (especially German) civil law with Anglo-American influences. The けんぽう (constitution), enacted in 1947, is the supreme law. Japan has never amended its けんぽう, making it unique among major democracies."},

    {type:"mc", q:"ようぎしゃ is used for:", opts:["A person suspected of a crime before conviction","A convicted criminal","A judge","A lawyer"], ans:"A person suspected of a crime before conviction",
     hint:"Japanese media carefully distinguishes suspects from convicted persons."},

    {type:"match", pairs:[
      {trg:"はんざい", src:"crime"},
      {trg:"さいばん", src:"trial"},
      {trg:"しょうこ", src:"evidence"},
      {trg:"むざい", src:"not guilty"},
      {trg:"ほうりつ", src:"law"}
    ]},

    {type:"fb", s:"ひこくにんは{1}をしゅちょうしています。\n(The defendant claims innocence.)", a:"むざい", opts:["むざい","ゆうざい","ばっきん","きそ"], sSrc:"The defendant claims innocence.",
     hint:"The legal term meaning not guilty or innocent."},

    {type:"mc", q:"Japan's criminal conviction rate is:", opts:["Over 99%","About 75%","About 50%","About 30%"], ans:"Over 99%",
     hint:"Once Japanese prosecutors decide to indict, conviction is almost certain."}
  ]
};
export default BATCH6_L1;
