// Batch 7 – Unit 11 (A2.1 Te-form): Health & Body Complaints
const BATCH7_L1 = {
  id:"jav2_u11l_b7_1", title:"体(からだ)の不調(ふちょう)", icon:"🤒", xp:15, board:true,
  steps:[
    {type:"intro", title:"体(からだ)の不調(ふちょう)",
     desc:"Learn to describe health complaints and body conditions. These words are essential for doctor visits, explaining how you feel, and understanding medical advice in Japan.",
     goals:["Describe common health complaints","Name body parts related to illness","Use te-form with health expressions"]},

    {type:"teach", trg:"熱(ねつ)がある", src:"to have a fever", pos:"verb", gender:null,
     note:"熱(ねつ) = fever/heat. 熱(ねつ)がある = have a fever.\n熱(ねつ)を測(はか)る = to take temperature.",
     example:"A: 熱(ねつ)がありますか？\nB: はい、38度(ど)あります。",
     exampleSrc:"A: Do you have a fever?\nB: Yes, 38 degrees.",
     funFact:"Japan measures fever in Celsius. 37 degrees is considered borderline (微熱(びねつ)). 38+ is a 'real' fever. Japanese people own personal thermometers (体温計(たいおんけい)) at much higher rates than Western countries. Schools send children home at 37.5. During COVID, temperature checks (検温(けんおん)) became universal."},

    {type:"teach", trg:"咳(せき)が出(で)る", src:"to have a cough", pos:"verb", gender:null,
     note:"咳(せき) = cough. 咳(せき)が出(で)る = a cough comes out.\n咳止(せきど)め = cough medicine.",
     example:"A: 咳(せき)が出(で)ています。\nB: マスクをしたほうがいいですよ。",
     exampleSrc:"A: I have a cough.\nB: You should wear a mask.",
     funFact:"Japan's mask culture predates COVID by decades. Wearing a マスク when you have 咳(せき) is basic courtesy (咳(せき)エチケット, cough etiquette). Not wearing a mask while coughing on a train will earn disapproving looks. Spring hay fever (花粉症(かふんしょう)) also drives mask wearing from February to April."},

    {type:"teach", trg:"鼻水(はなみず)", src:"runny nose", pos:"noun", gender:null,
     note:"鼻(はな) = nose, 水(みず) = water. Literally: nose water.\n鼻水(はなみず)が出(で)る = to have a runny nose.",
     example:"A: 鼻水(はなみず)が止(と)まりません。\nB: 花粉症(かふんしょう)ですか？",
     exampleSrc:"A: My runny nose won't stop.\nB: Is it hay fever?",
     funFact:"鼻水(はなみず) is a perfectly normal medical term, not considered crude. In Japan, blowing your nose in public (especially loudly) is considered rude. People prefer to sniffle quietly instead. This is the opposite of Western norms where sniffling is considered worse than blowing."},

    {type:"teach", trg:"喉(のど)が痛(いた)い", src:"to have a sore throat", pos:"adj", gender:null,
     note:"喉(のど) = throat. 痛(いた)い = painful.\nのどぬーる = throat spray (brand name turned generic).",
     example:"A: 喉(のど)が痛(いた)いです。\nB: 温(あたた)かいお茶(ちゃ)を飲(の)みましょう。",
     exampleSrc:"A: My throat hurts.\nB: Let us drink warm tea.",
     funFact:"Japanese cold remedies emphasize warmth. For 喉(のど)が痛(いた)い, people drink はちみつレモン (honey lemon), wear a マスク to keep the throat moist, and gargle with うがい薬(ぐすり) (gargling medicine). うがい (gargling) is a Japanese daily habit that surprises many foreigners."},

    {type:"teach", trg:"お腹(なか)が痛(いた)い", src:"stomachache", pos:"adj", gender:null,
     note:"お腹(なか) = stomach/belly. 痛(いた)い = painful.\nお腹(なか)を壊(こわ)す = to upset one's stomach.",
     example:"A: お腹(なか)が痛(いた)いです。\nB: 変(へん)なものを食(た)べましたか？",
     exampleSrc:"A: My stomach hurts.\nB: Did you eat something strange?",
     funFact:"Japanese people say お腹(なか)が痛(いた)い for any abdominal pain. The polite word お腹(なか) (belly) is used even in medical settings. Stomach medicine (胃薬(いぐすり)) is sold everywhere. Japan has more varieties of stomach medicine than most countries, reflecting a national concern for digestive health."},

    {type:"teach", trg:"目眩(めまい)がする", src:"to feel dizzy", pos:"verb", gender:null,
     note:"目眩(めまい) = dizziness. がする = to feel/sense.\n目眩(めまい)がしてきた = I'm getting dizzy.",
     example:"A: 目眩(めまい)がします。\nB: 座(すわ)って休(やす)んでください。",
     exampleSrc:"A: I feel dizzy.\nB: Please sit down and rest.",
     funFact:"目眩(めまい) literally means 'eye dazzle.' The expression がする is used for involuntary sensations: 目眩(めまい)がする (feel dizzy), 吐(は)き気(け)がする (feel nauseous), 頭痛(ずつう)がする (have a headache). This pattern treats symptoms as things that happen TO you, not things you actively do."},

    {type:"teach", trg:"吐(は)き気(け)", src:"nausea", pos:"noun", gender:null,
     note:"吐(は)く = to vomit. 気(け) = feeling.\n吐(は)き気(け)がする = to feel nauseous.",
     example:"A: 吐(は)き気(け)がします。\nB: トイレはすぐそこですよ。",
     exampleSrc:"A: I feel nauseous.\nB: The toilet is right there.",
     funFact:"吐(は)き気(け) uses 気 (ke/ki), meaning 'feeling' or 'spirit.' Many Japanese medical terms end in 気: 吐(は)き気(け) (nausea feeling), 元気(げんき) (healthy spirit). The concept of 気 connects physical health to mental/spiritual energy in Japanese medicine."},

    {type:"teach", trg:"くしゃみ", src:"sneeze", pos:"noun", gender:null,
     note:"くしゃみが出(で)る = to sneeze.\nくしゃみをする = to do a sneeze.",
     example:"A: くしゃみが止(と)まりません。\nB: 花粉症(かふんしょう)かもしれませんね。",
     exampleSrc:"A: My sneezing will not stop.\nB: It might be hay fever.",
     funFact:"Japanese superstition says if you sneeze once, someone is saying good things about you. Twice means bad things. Three times means someone is in love with you. This belief (くしゃみの迷信(めいしん)) is referenced in anime and manga constantly. In spring, however, everyone blames 花粉症(かふんしょう) (hay fever)."},

    {type:"teach", trg:"花粉症(かふんしょう)", src:"hay fever / pollen allergy", pos:"noun", gender:null,
     note:"花粉(かふん) = pollen. 症(しょう) = condition/symptom.\nSpring: sugi (cedar). Autumn: ragweed.",
     example:"A: 花粉症(かふんしょう)は大変(たいへん)ですね。\nB: はい、目(め)がかゆくて鼻水(はなみず)が出(で)ます。",
     exampleSrc:"A: Hay fever is tough, isn't it.\nB: Yes, my eyes itch and my nose runs.",
     funFact:"花粉症(かふんしょう) affects about 40% of Japanese people, making it a national health issue. Cedar trees (杉(すぎ)) planted massively after WWII are the main cause. The government tracks pollen counts daily. Special glasses, masks, and nose sprays fill drugstore shelves every February."},

    {type:"teach", trg:"薬(くすり)", src:"medicine", pos:"noun", gender:null,
     note:"薬(くすり)を飲(の)む = to take medicine.\n薬屋(くすりや)/薬局(やっきょく) = pharmacy.",
     example:"A: 薬(くすり)を飲(の)みましたか？\nB: はい、食後(しょくご)に飲(の)みました。",
     exampleSrc:"A: Did you take your medicine?\nB: Yes, I took it after eating.",
     funFact:"Japan's drugstore (ドラッグストア) culture is unique. Chains like Matsumoto Kiyoshi and Sugi sell both prescription and over-the-counter 薬(くすり) alongside cosmetics, snacks, and daily goods. Tourist areas have multilingual pharmacists. Japanese medicine packages have detailed instructions with tiny print."},

    {type:"teach", trg:"注射(ちゅうしゃ)", src:"injection / shot", pos:"noun", gender:null,
     note:"注射(ちゅうしゃ)を打(う)つ = to give an injection.\nインフルエンザの注射(ちゅうしゃ) = flu shot.",
     example:"A: インフルエンザの注射(ちゅうしゃ)を打(う)ちましたか？\nB: まだです。来週(らいしゅう)打(う)ちます。",
     exampleSrc:"A: Did you get a flu shot?\nB: Not yet. I will get one next week.",
     funFact:"注射(ちゅうしゃ) uses 注 (pour) and 射 (shoot). Japanese children say 注射(ちゅうしゃ)こわい (shots are scary). Annual flu vaccinations (インフルエンザ予防(よぼう)注射(ちゅうしゃ)) are common but not free. Many companies offer subsidized flu shots to reduce sick leave."},

    {type:"teach", trg:"怪我(けが)", src:"injury / wound", pos:"noun", gender:null,
     note:"怪我(けが)をする = to get injured.\n大怪我(おおけが) = serious injury. 軽(かる)い怪我(けが) = minor injury.",
     example:"A: 怪我(けが)は大丈夫(だいじょうぶ)ですか？\nB: はい、軽(かる)い怪我(けが)です。",
     exampleSrc:"A: Is the injury okay?\nB: Yes, it is a minor injury.",
     funFact:"怪我(けが) uses the kanji 怪 (suspicious/strange) and 我 (self). An injury is literally 'a strange thing happening to oneself.' Japanese first aid kits (救急箱(きゅうきゅうばこ)) are found in every school and workplace. Band-aids are called ばんそうこう (adhesive plaster)."},

    {type:"teach", trg:"具合(ぐあい)が悪(わる)い", src:"feeling unwell", pos:"adj", gender:null,
     note:"具合(ぐあい) = condition. 悪(わる)い = bad.\n具合(ぐあい)はどうですか = how are you feeling?",
     example:"A: 具合(ぐあい)が悪(わる)いです。\nB: 早(はや)く帰(かえ)ったほうがいいですよ。",
     exampleSrc:"A: I am not feeling well.\nB: You should go home early.",
     funFact:"具合(ぐあい)が悪(わる)い is the most general way to say 'I feel sick' without specifying symptoms. In Japanese workplaces, saying 具合(ぐあい)が悪(わる)いです is enough justification to leave early. Colleagues will respond with お大事(だいじ)に (take care). Being specific about symptoms is optional."},

    // Quiz steps
    {type:"mc", q:"In Japan, 37.5 degrees Celsius at school means:",
     opts:["The child is sent home","The child takes medicine and stays","Nothing, it is normal","The child goes to the nurse only"],
     ans:"The child is sent home",
     hint:"Japanese schools have strict temperature thresholds. This borderline fever triggers an early dismissal."},

    {type:"match", pairs:[
      {trg:"熱(ねつ)", src:"fever"},
      {trg:"咳(せき)", src:"cough"},
      {trg:"鼻水(はなみず)", src:"runny nose"},
      {trg:"目眩(めまい)", src:"dizziness"},
      {trg:"吐(は)き気(け)", src:"nausea"}
    ]},

    {type:"fb", s:"{1}が痛(いた)いです。温(あたた)かいお茶(ちゃ)をください。",
     a:["喉(のど)"],
     opts:["喉(のど)","お腹(なか)","頭(あたま)","目(め)"],
     hint:"Your throat hurts. Warm tea is a traditional Japanese remedy for this.",
     sSrc:"My {1} hurts. Please give me warm tea."},

    {type:"mc", q:"花粉症(かふんしょう) affects about what percentage of Japanese people?",
     opts:["40%","10%","5%","70%"],
     ans:"40%",
     hint:"This pollen allergy is a national health issue, mainly caused by cedar trees planted after WWII."},

    {type:"fb", s:"{1}を飲(の)んで休(やす)んでください。",
     a:["薬(くすり)"],
     opts:["薬(くすり)","水(みず)","お茶(ちゃ)","ジュース"],
     hint:"Take your medicine and rest. This word means medicine or medication.",
     sSrc:"Please take {1} and rest."},

    {type:"mc", q:"具合(ぐあい)が悪(わる)い means:",
     opts:["Feeling unwell (general)","Having a headache specifically","Being tired","Being hungry"],
     ans:"Feeling unwell (general)",
     hint:"This is the most g... expression for not f... well, without specifying exact symptoms."},

    {type:"match", pairs:[
      {trg:"薬(くすり)", src:"medicine"},
      {trg:"注射(ちゅうしゃ)", src:"injection"},
      {trg:"怪我(けが)", src:"injury"},
      {trg:"花粉症(かふんしょう)", src:"hay fever"},
      {trg:"くしゃみ", src:"sneeze"}
    ]},

    {type:"fb", s:"足(あし)に{1}をしました。歩(ある)けません。",
     a:["怪我(けが)"],
     opts:["怪我(けが)","熱(ねつ)","咳(せき)","目眩(めまい)"],
     hint:"You hurt your leg and cannot walk. This noun means 'injury.'",
     sSrc:"I {1} my leg. I cannot walk."}
  ,{type:"match",pairs:[{trg:"お腹(なか)が痛(いた)い",src:"stomachache"},{trg:"具合(ぐあい)が悪(わる)い",src:"feeling unwell"}]}]
};
export default BATCH7_L1;
