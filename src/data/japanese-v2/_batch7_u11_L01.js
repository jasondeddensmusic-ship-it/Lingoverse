// Batch 7 – Unit 11 (A2.1 Te-form): Health & Body Complaints
const BATCH7_L1 = {
  id:"jav2_u11l_b7_1", title:"からだのふちょう", icon:"🤒", xp:15, board:true,
  steps:[
    {type:"intro", title:"からだのふちょう",
     desc:"Learn to describe health complaints and body conditions. These words are essential for doctor visits, explaining how you feel, and understanding medical advice in Japan.",
     goals:["Describe common health complaints","Name body parts related to illness","Use te-form with health expressions"]},

    {type:"teach", trg:"ねつがある", src:"to have a fever", pos:"verb", gender:null,
     note:"ねつ = fever/heat. ねつがある = have a fever.\nねつをはかる = to take temperature.",
     example:"A: ねつがありますか？\nB: はい、38どあります。",
     exampleSrc:"A: Do you have a fever?\nB: Yes, 38 degrees.",
     funFact:"Japan measures fever in Celsius. 37 degrees is considered borderline (微熱, びねつ). 38+ is a 'real' fever. Japanese people own personal thermometers (たいおんけい) at much higher rates than Western countries. Schools send children home at 37.5. During COVID, temperature checks (検温) became universal."},

    {type:"teach", trg:"せきがでる", src:"to have a cough", pos:"verb", gender:null,
     note:"せき = cough. せきがでる = a cough comes out.\nせきどめ = cough medicine.",
     example:"A: せきがでています。\nB: マスクをしたほうがいいですよ。",
     exampleSrc:"A: I have a cough.\nB: You should wear a mask.",
     funFact:"Japan's mask culture predates COVID by decades. Wearing a マスク when you have せき is basic courtesy (咳エチケット, cough etiquette). Not wearing a mask while coughing on a train will earn disapproving looks. Spring hay fever (花粉症) also drives mask wearing from February to April."},

    {type:"teach", trg:"はなみず", src:"runny nose", pos:"noun", gender:null,
     note:"はな = nose, みず = water. Literally: nose water.\nはなみずがでる = to have a runny nose.",
     example:"A: はなみずがとまりません。\nB: かふんしょうですか？",
     exampleSrc:"A: My runny nose won't stop.\nB: Is it hay fever?",
     funFact:"はなみず is a perfectly normal medical term, not considered crude. In Japan, blowing your nose in public (especially loudly) is considered rude. People prefer to sniffle quietly instead. This is the opposite of Western norms where sniffling is considered worse than blowing."},

    {type:"teach", trg:"のどがいたい", src:"to have a sore throat", pos:"adj", gender:null,
     note:"のど = throat. いたい = painful.\nのどぬーる = throat spray (brand name turned generic).",
     example:"A: のどがいたいです。\nB: あたたかいおちゃをのみましょう。",
     exampleSrc:"A: My throat hurts.\nB: Let us drink warm tea.",
     funFact:"Japanese cold remedies emphasize warmth. For のどがいたい, people drink はちみつレモン (honey lemon), wear a マスク to keep the throat moist, and gargle with うがいぐすり (gargling medicine). うがい (gargling) is a Japanese daily habit that surprises many foreigners."},

    {type:"teach", trg:"おなかがいたい", src:"stomachache", pos:"adj", gender:null,
     note:"おなか = stomach/belly. いたい = painful.\nおなかをこわす = to upset one's stomach.",
     example:"A: おなかがいたいです。\nB: へんなものをたべましたか？",
     exampleSrc:"A: My stomach hurts.\nB: Did you eat something strange?",
     funFact:"Japanese people say おなかがいたい for any abdominal pain. The polite word おなか (belly) is used even in medical settings. Stomach medicine (胃薬, いぐすり) is sold everywhere. Japan has more varieties of stomach medicine than most countries, reflecting a national concern for digestive health."},

    {type:"teach", trg:"めまいがする", src:"to feel dizzy", pos:"verb", gender:null,
     note:"めまい = dizziness. がする = to feel/sense.\nめまいがしてきた = I'm getting dizzy.",
     example:"A: めまいがします。\nB: すわってやすんでください。",
     exampleSrc:"A: I feel dizzy.\nB: Please sit down and rest.",
     funFact:"めまい (目眩い) literally means 'eye dazzle.' The expression がする is used for involuntary sensations: めまいがする (feel dizzy), はきけがする (feel nauseous), ずつうがする (have a headache). This pattern treats symptoms as things that happen TO you, not things you actively do."},

    {type:"teach", trg:"はきけ", src:"nausea", pos:"noun", gender:null,
     note:"はく = to vomit. け/気 = feeling.\nはきけがする = to feel nauseous.",
     example:"A: はきけがします。\nB: トイレはすぐそこですよ。",
     exampleSrc:"A: I feel nauseous.\nB: The toilet is right there.",
     funFact:"はきけ uses 気 (ke/ki), meaning 'feeling' or 'spirit.' Many Japanese medical terms end in 気: はきけ (nausea feeling), けんきゅうき (examination device), and even げんき (genki, healthy spirit). The concept of 気 connects physical health to mental/spiritual energy in Japanese medicine."},

    {type:"teach", trg:"くしゃみ", src:"sneeze", pos:"noun", gender:null,
     note:"くしゃみがでる = to sneeze.\nくしゃみをする = to do a sneeze.",
     example:"A: くしゃみがとまりません。\nB: かふんしょうかもしれませんね。",
     exampleSrc:"A: My sneezing will not stop.\nB: It might be hay fever.",
     funFact:"Japanese superstition says if you sneeze once, someone is saying good things about you. Twice means bad things. Three times means someone is in love with you. This belief (くしゃみの迷信) is referenced in anime and manga constantly. In spring, however, everyone blames かふんしょう (hay fever)."},

    {type:"teach", trg:"かふんしょう", src:"hay fever / pollen allergy", pos:"noun", gender:null,
     note:"かふん = pollen. しょう = condition/symptom.\nSpring: sugi (cedar). Autumn: ragweed.",
     example:"A: かふんしょうはたいへんですね。\nB: はい、めがかゆくてはなみずがでます。",
     exampleSrc:"A: Hay fever is tough, isn't it.\nB: Yes, my eyes itch and my nose runs.",
     funFact:"かふんしょう affects about 40% of Japanese people, making it a national health issue. Cedar trees (すぎ) planted massively after WWII are the main cause. The government tracks pollen counts daily. Special glasses, masks, and nose sprays fill drugstore shelves every February."},

    {type:"teach", trg:"くすり", src:"medicine", pos:"noun", gender:null,
     note:"くすりをのむ = to take medicine.\nくすりや/やっきょく = pharmacy.",
     example:"A: くすりをのみましたか？\nB: はい、しょくごにのみました。",
     exampleSrc:"A: Did you take your medicine?\nB: Yes, I took it after eating.",
     funFact:"Japan's drugstore (ドラッグストア) culture is unique. Chains like Matsumoto Kiyoshi and Sugi sell both prescription and over-the-counter くすり alongside cosmetics, snacks, and daily goods. Tourist areas have multilingual pharmacists. Japanese medicine packages have detailed instructions with tiny print."},

    {type:"teach", trg:"ちゅうしゃ", src:"injection / shot", pos:"noun", gender:null,
     note:"ちゅうしゃをうつ = to give an injection.\nインフルエンザのちゅうしゃ = flu shot.",
     example:"A: インフルエンザのちゅうしゃをうちましたか？\nB: まだです。らいしゅううちます。",
     exampleSrc:"A: Did you get a flu shot?\nB: Not yet. I will get one next week.",
     funFact:"ちゅうしゃ (注射) uses 注 (pour) and 射 (shoot). Japanese children say ちゅうしゃこわい (shots are scary). Annual flu vaccinations (インフルエンザよぼうちゅうしゃ) are common but not free. Many companies offer subsidized flu shots to reduce sick leave."},

    {type:"teach", trg:"けが", src:"injury / wound", pos:"noun", gender:null,
     note:"けがをする = to get injured.\nおおけが = serious injury. かるいけが = minor injury.",
     example:"A: けがはだいじょうぶですか？\nB: はい、かるいけがです。",
     exampleSrc:"A: Is the injury okay?\nB: Yes, it is a minor injury.",
     funFact:"けが (怪我) uses the kanji 怪 (suspicious/strange) and 我 (self). An injury is literally 'a strange thing happening to oneself.' Japanese first aid kits (救急箱, きゅうきゅうばこ) are found in every school and workplace. Band-aids are called ばんそうこう (adhesive plaster)."},

    {type:"teach", trg:"ぐあいがわるい", src:"feeling unwell", pos:"adj", gender:null,
     note:"ぐあい = condition. わるい = bad.\nぐあいはどうですか = how are you feeling?",
     example:"A: ぐあいがわるいです。\nB: はやくかえったほうがいいですよ。",
     exampleSrc:"A: I am not feeling well.\nB: You should go home early.",
     funFact:"ぐあいがわるい is the most general way to say 'I feel sick' without specifying symptoms. In Japanese workplaces, saying ぐあいがわるいです is enough justification to leave early. Colleagues will respond with おだいじに (take care). Being specific about symptoms is optional."},

    // Quiz steps
    {type:"mc", q:"In Japan, 37.5 degrees Celsius at school means:",
     opts:["The child is sent home","The child takes medicine and stays","Nothing, it is normal","The child goes to the nurse only"],
     ans:"The child is sent home",
     hint:"Japanese schools have strict temperature thresholds. This borderline fever triggers an early dismissal."},

    {type:"match", pairs:[
      {trg:"ねつ", src:"fever"},
      {trg:"せき", src:"cough"},
      {trg:"はなみず", src:"runny nose"},
      {trg:"めまい", src:"dizziness"},
      {trg:"はきけ", src:"nausea"}
    ]},

    {type:"fb", s:"{1}がいたいです。あたたかいおちゃをください。",
     a:["のど"],
     opts:["のど","おなか","あたま","め"],
     hint:"Your throat hurts. Warm tea is a traditional Japanese remedy for this.",
     sSrc:"My {1} hurts. Please give me warm tea."},

    {type:"mc", q:"かふんしょう affects about what percentage of Japanese people?",
     opts:["40%","10%","5%","70%"],
     ans:"40%",
     hint:"This pollen allergy is a national health issue, mainly caused by cedar trees planted after WWII."},

    {type:"fb", s:"{1}をのんでやすんでください。",
     a:["くすり"],
     opts:["くすり","みず","おちゃ","ジュース"],
     hint:"Take your medicine and rest. This word means medicine or medication.",
     sSrc:"Please take {1} and rest."},

    {type:"mc", q:"ぐあいがわるい means:",
     opts:["Feeling unwell (general)","Having a headache specifically","Being tired","Being hungry"],
     ans:"Feeling unwell (general)",
     hint:"This is the most g... expression for not f... well, without specifying exact symptoms."},

    {type:"match", pairs:[
      {trg:"くすり", src:"medicine"},
      {trg:"ちゅうしゃ", src:"injection"},
      {trg:"けが", src:"injury"},
      {trg:"かふんしょう", src:"hay fever"},
      {trg:"くしゃみ", src:"sneeze"}
    ]},

    {type:"fb", s:"あしに{1}をしました。あるけません。",
     a:["けが"],
     opts:["けが","ねつ","せき","めまい"],
     hint:"You hurt your leg and cannot walk. This noun means 'injury.'",
     sSrc:"I {1} my leg. I cannot walk."}
  ]
};
export default BATCH7_L1;
