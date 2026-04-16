// Batch 8 – Unit 08 (A1.3 Places): Buildings & Public Facilities
const BATCH8_L1 = {
  id:"jav2_u08l_b8_1", title:"こうきょうしせつ", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうきょうしせつ",
     desc:"Learn vocabulary for public buildings and facilities you encounter in any Japanese city. From post offices to libraries, these places are part of daily life.",
     goals:["Name common public buildings and facilities","Ask for and give directions to specific places","Understand signs and public facility vocabulary"]},

    {type:"teach", trg:"ゆうびんきょく", src:"post office", pos:"noun", gender:null,
     note:"Kanji: 郵便局. ゆうびん = mail. きょく = bureau/office.\nMark: 〒 (yuubin symbol).",
     example:"A: ゆうびんきょくはどこですか？\nB: えきのむかいにあります。",
     exampleSrc:"A: Where is the post office?\nB: It is across from the station.",
     funFact:"Japan Post (にほんゆうびん) also operates a massive bank (ゆうちょぎんこう) and insurance company. Post offices display the 〒 symbol, unique to Japan. Red post boxes (ポスト) are found on almost every street corner. Japan's postal service is one of the most reliable in the world."},

    {type:"teach", trg:"としょかん", src:"library", pos:"noun", gender:null,
     note:"Kanji: 図書館. としょかんカード = library card.\nほんをかりる = to borrow a book.",
     example:"A: としょかんでべんきょうします。\nB: しずかでいいですよね。",
     exampleSrc:"A: I will study at the library.\nB: It is quiet and nice, is it not?",
     funFact:"Japanese としょかん are free to use and excellently maintained. Many have study rooms, manga sections, and CD/DVD lending. Some large city libraries have thousands of manga volumes. Students use としょかん as free study spaces, especially before exams."},

    {type:"teach", trg:"やくしょ", src:"municipal office / city hall", pos:"noun", gender:null,
     note:"Kanji: 役所. しやくしょ = city hall.\nくやくしょ = ward office.",
     example:"A: ひっこしたらやくしょにいってください。\nB: なにをしますか？",
     exampleSrc:"A: When you move, please go to the municipal office.\nB: What do I do there?",
     funFact:"やくしょ handles residency registration, family registry (こせき), health insurance, and tax paperwork. For foreigners in Japan, the くやくしょ (ward office) is essential for registering your address and getting a ざいりゅうカード update. Most forms are in Japanese only."},

    {type:"teach", trg:"たいいくかん", src:"gymnasium / sports hall", pos:"noun", gender:null,
     note:"Kanji: 体育館. がっこうのたいいくかん = school gymnasium.\nたいいく = physical education.",
     example:"A: バスケットボールはたいいくかんでします。\nB: なんじからですか？",
     exampleSrc:"A: We play basketball at the gymnasium.\nB: From what time?",
     funFact:"Every Japanese school has a たいいくかん used for PE classes, assemblies, and club activities. Students must change into うわばき (indoor shoes) before entering. たいいくかん also serve as evacuation shelters during natural disasters like earthquakes and typhoons."},

    {type:"teach", trg:"じどうかん", src:"community center (for children)", pos:"noun", gender:null,
     note:"Kanji: 児童館. Free facility for children to play and learn.\nほうかご = after school.",
     example:"A: こどもはじどうかんであそんでいます。\nB: なんじにむかえにいきますか？",
     exampleSrc:"A: The children are playing at the community center.\nB: What time will you go pick them up?",
     funFact:"じどうかん provide free after-school care and activities for children. Staff supervise play, crafts, and study time. Most Japanese neighborhoods have one. They also run seasonal events like なつまつり (summer festivals) and クリスマスかい (Christmas parties)."},

    {type:"mc", q:"What is a ゆうびんきょく?", opts:["A post office","A library","A gymnasium","A city hall"], ans:"A post office",
     hint:"This facility handles mail delivery and also operates a bank in Japan."},

    {type:"teach", trg:"けいさつしょ", src:"police station", pos:"noun", gender:null,
     note:"Kanji: 警察署. こうばん = police box (smaller neighborhood station).\nけいさつかん = police officer.",
     example:"A: さいふをおとしました。\nB: けいさつしょにとどけましょう。",
     exampleSrc:"A: I dropped my wallet.\nB: Let us report it to the police station.",
     funFact:"Japan's police system has two levels: けいさつしょ (full police stations) and こうばん (small neighborhood police boxes). こうばん are found on nearly every major street corner. Officers help with directions, lost items, and minor disputes. Japan's crime rate is among the lowest in the world."},

    {type:"teach", trg:"しょうぼうしょ", src:"fire station", pos:"noun", gender:null,
     note:"Kanji: 消防署. しょうぼうし = firefighter.\nきゅうきゅうしゃ = ambulance (dispatched from here).",
     example:"A: しょうぼうしょはどこにありますか？\nB: おおどおりのつきあたりです。",
     exampleSrc:"A: Where is the fire station?\nB: It is at the end of the main street.",
     funFact:"Japanese しょうぼうしょ handle both fire emergencies and ambulance dispatch. The emergency number 119 connects to both. しょうぼうし (firefighters) in Japan also respond to natural disasters. Many stations open for public tours and hold annual events where children can ride fire trucks."},

    {type:"teach", trg:"こうえん", src:"park", pos:"noun", gender:null,
     note:"Kanji: 公園. こうえんであそぶ = to play at the park.\nちゅうおうこうえん = central park.",
     example:"A: こうえんでさんぽしましょう。\nB: いいですね。てんきもいいですし。",
     exampleSrc:"A: Let us take a walk in the park.\nB: Good idea. The weather is nice too.",
     funFact:"Japanese こうえん range from tiny neighborhood playgrounds to vast spaces like うえのこうえん and よよぎこうえん in Tokyo. Parks are central to はなみ (cherry blossom viewing) culture. Many こうえん have free exercise equipment for elderly residents who gather for ラジオたいそう (radio exercises) each morning."},

    {type:"teach", trg:"ちゅうしゃじょう", src:"parking lot", pos:"noun", gender:null,
     note:"Kanji: 駐車場. ちゅうしゃきんし = no parking.\nコインパーキング = coin-operated parking lot.",
     example:"A: ちゅうしゃじょうはありますか？\nB: ちかにちゅうしゃじょうがあります。",
     exampleSrc:"A: Is there a parking lot?\nB: There is a parking lot underground.",
     funFact:"Parking in Japanese cities is expensive and scarce. To own a car, you must prove you have a parking space (しゃこしょうめい). Mechanical tower parking (きかいしきちゅうしゃ) stacks cars vertically to save space. コインパーキング lots are found everywhere and charge by the hour."},

    {type:"teach", trg:"おてあらい", src:"restroom / bathroom", pos:"noun", gender:null,
     note:"Polite term. Literally 'hand washing.' Also トイレ (casual).\nおてあらいはどこですか = Where is the restroom?",
     example:"A: すみません、おてあらいはどこですか？\nB: あちらのつきあたりです。",
     exampleSrc:"A: Excuse me, where is the restroom?\nB: It is at the end over there.",
     funFact:"Japan has multiple words for restroom: トイレ (casual), おてあらい (polite, literally hand-washing), and かしょ (very formal). Japanese toilets (ウォシュレット) with heated seats and bidet functions amaze foreign visitors. Public restrooms in Japan are exceptionally clean and free to use."},

    {type:"fb", s:"さいふをおとしたので{1}にいきます。\n(I dropped my wallet so I am going to the police station.)", a:"けいさつしょ", opts:["けいさつしょ","しょうぼうしょ","やくしょ","としょかん"], sSrc:"I dropped my wallet so I am going to the police station.",
     hint:"This is where you report lost items and crimes."},

    {type:"teach", trg:"たいしかん", src:"embassy", pos:"noun", gender:null,
     note:"Kanji: 大使館. たいし = ambassador.\nりょうじかん = consulate.",
     example:"A: にほんたいしかんはどこですか？\nB: ちよだくにあります。",
     exampleSrc:"A: Where is the Japanese embassy?\nB: It is in Chiyoda ward.",
     funFact:"Foreign embassies in Tokyo are concentrated in みなとく (Minato ward) and ちよだく (Chiyoda ward). たいしかん provide visa services, citizen protection, and cultural events. The American たいしかん near とらのもん is one of the most heavily guarded buildings in Tokyo."},

    {type:"teach", trg:"じんじゃ", src:"Shinto shrine", pos:"noun", gender:null,
     note:"Kanji: 神社. Not to be confused with おてら (Buddhist temple).\nとりい = the gate at the entrance.",
     example:"A: おしょうがつにじんじゃにいきました。\nB: おまいりしましたか？",
     exampleSrc:"A: I went to a shrine on New Year's.\nB: Did you pray?",
     funFact:"Japan has over 80,000 じんじゃ (Shinto shrines). The proper worship etiquette is にはいいちはくにはい (two bows, one clap, two bows). じんじゃ have とりい gates (usually red), while おてら (Buddhist temples) have さんもん gates. Many Japanese visit both without seeing a contradiction."},

    {type:"match", pairs:[{trg:"ゆうびんきょく",src:"post office"},{trg:"としょかん",src:"library"},{trg:"けいさつしょ",src:"police station"},{trg:"こうえん",src:"park"},{trg:"じんじゃ",src:"Shinto shrine"}],
     hint:"Match each public facility with its English name."},

    {type:"mc", q:"What is the polite Japanese word for restroom?", opts:["おてあらい","トイレ","ばしょ","いりぐち"], ans:"おてあらい",
     hint:"This word literally means 'hand washing' and is the most polite option."},

    {type:"fb", s:"こどもは{1}であそんでいます。\n(The children are playing at the community center.)", a:"じどうかん", opts:["じどうかん","たいいくかん","こうえん","としょかん"], sSrc:"The children are playing at the community center.",
     hint:"This free public facility provides after-school activities for children."},

    {type:"mc", q:"What document do you need to own a car in Japan?", opts:["しゃこしょうめい (proof of parking space)","うんてんめんきょ only","パスポート","ざいりゅうカード"], ans:"しゃこしょうめい (proof of parking space)",
     hint:"Japanese cities require p... that you have a dedicated spot to park your vehicle."}
  ]
};
export default BATCH8_L1;
