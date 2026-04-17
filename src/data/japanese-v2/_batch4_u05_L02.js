// Batch 4 — Unit 05 Lesson 2: Restaurant & Ordering
const BATCH4_L_2 = {
  id:"jav2_u05l_b4_2", title:"レストラン", icon:"🍽️", xp:15, board:true,
  steps:[
    {type:"intro", title:"レストランで",
     desc:"Learn essential vocabulary for eating out in Japan. From entering a restaurant to paying the bill, these phrases cover every step.",
     goals:["Order food at a restaurant","Ask about the menu","Handle the bill and tipping customs"]},

    {type:"teach", trg:"メニュー", src:"menu", pos:"noun", gender:null,
     note:"From French/English 'menu.' Used in all types of restaurants.",
     example:"メニューを見(み)せてください。",
     exampleSrc:"Please show me the menu.",
     funFact:"Japanese restaurant menus often have plastic food models (食品(しょくひん)サンプル) in display cases outside. This industry is worth billions of yen. The models are so realistic that tourists often try to touch them."},

    {type:"teach", trg:"注文(ちゅうもん)", src:"order (at restaurant)", pos:"noun", gender:null,
     note:"Kanji: 注文. Pour + sentence. Suru verb: 注文(ちゅうもん)する.",
     example:"注文(ちゅうもん)をお願(ねが)いします。",
     exampleSrc:"I'd like to order, please.",
     funFact:"In many Japanese restaurants, you press a button on the table to call the waiter. No flagging down staff or waiting to make eye contact. The button system is efficient and considered perfectly polite."},

    {type:"teach", trg:"お勧(すす)め", src:"recommendation", pos:"noun", gender:null,
     note:"From 勧(すす)める (to recommend). The お adds politeness.",
     example:"今日(きょう)のお勧(すす)めは何(なん)ですか？",
     exampleSrc:"What is today's recommendation?",
     funFact:"Asking 'osusume wa?' is the best way to order in Japan. Chefs take pride in their daily specials and seasonal ingredients. The osusume is often the freshest or most carefully prepared item."},

    {type:"teach", trg:"定食(ていしょく)", src:"set meal", pos:"noun", gender:null,
     note:"Kanji: 定食. Fixed + meal. A balanced meal with rice, soup, and sides.",
     example:"焼(や)き魚(ざかな)定食(ていしょく)をお願(ねが)いします。",
     exampleSrc:"I'll have the grilled fish set meal, please.",
     funFact:"Teishoku is the standard Japanese lunch. It always includes rice, miso soup, a main dish, and pickled vegetables. It is designed to be nutritionally balanced. Most cost 700-1000 yen."},

    {type:"teach", trg:"お代(か)わり", src:"refill / second helping", pos:"noun", gender:null,
     note:"From 代(か)わり (change/replacement) with polite お prefix.",
     example:"ご飯(はん)のお代(か)わりをお願(ねが)いします。",
     exampleSrc:"A refill of rice, please.",
     funFact:"Many restaurants offer free rice and miso soup refills (お代(か)わり自由(じゆう)). The phrase 'okawari kudasai' is one of the most useful restaurant phrases. Some ramen shops even offer kaedama (noodle refills)."},

    {type:"teach", trg:"お勘定(かんじょう)", src:"the bill / check", pos:"noun", gender:null,
     note:"Kanji: お勘定. Calculation. Also say おあいそ (informal) or チェック.",
     example:"お勘定(かんじょう)をお願(ねが)いします。",
     exampleSrc:"The bill, please.",
     funFact:"In Japan, the bill is usually placed face-down on the table or in a small tray. You pay at the register near the exit, not at the table. Splitting the bill (割(わ)り勘(かん) warikan) is common among friends."},

    {type:"teach", trg:"お箸(はし)", src:"chopsticks", pos:"noun", gender:null,
     note:"Kanji: お箸. Hashi with polite お prefix. The standard eating utensils.",
     example:"お箸(はし)の使(つか)い方(かた)を教(おし)えてください。",
     exampleSrc:"Please teach me how to use chopsticks.",
     funFact:"Japanese chopstick etiquette has many rules: never stick them upright in rice (funeral ritual), never pass food chopstick-to-chopstick (another funeral association), never point with them. Breaking these rules is considered very bad manners."},

    {type:"teach", trg:"お皿(さら)", src:"plate / dish", pos:"noun", gender:null,
     note:"Kanji: お皿. Sara with polite prefix. Flat serving plate.",
     example:"お皿(さら)を下(さ)げてください。",
     exampleSrc:"Please clear the plates.",
     funFact:"Japanese food presentation is an art. The saying 'you eat with your eyes first' (目(め)で食(た)べる) is taken literally. Plates are chosen to complement the food's colors and shapes. A meal might use 5 or more different plate styles."},

    {type:"teach", trg:"お椀(わん)", src:"bowl (for soup/rice)", pos:"noun", gender:null,
     note:"Kanji: お椀. A small deep bowl, usually lacquered wood.",
     example:"お椀(わん)を持(も)ってスープを飲(の)みます。",
     exampleSrc:"I hold the bowl and drink the soup.",
     funFact:"Unlike Western soup bowls, Japanese owan are designed to be picked up and drunk from directly. No spoon needed for miso soup. Holding the bowl close to your mouth is proper etiquette, not rude."},

    {type:"teach", trg:"生(なま)もの", src:"raw food / uncooked food", pos:"noun", gender:null,
     note:"Kanji: 生もの. Raw + thing. Includes sashimi and raw eggs.",
     example:"生(なま)ものは大丈夫(だいじょうぶ)ですか？",
     exampleSrc:"Are you okay with raw food?",
     funFact:"Japan's love of raw food extends beyond sushi. Raw egg over rice (卵(たまご)かけご飯(はん)), raw horse meat (馬刺(うまさ)し), and even raw chicken (鶏刺(とりさ)し) in some regions. Japan's food safety standards make this possible."},

    {type:"teach", trg:"アレルギー", src:"allergy", pos:"noun", gender:null,
     note:"From German 'Allergie.' Important for dining out safely.",
     example:"私(わたし)は卵(たまご)アレルギーです。",
     exampleSrc:"I have an egg allergy.",
     funFact:"Japanese food labeling law requires marking 7 allergens (wheat, buckwheat, egg, milk, peanut, shrimp, crab) plus 21 recommended ones. Restaurant menus increasingly show allergy information in response to growing awareness."},

    {type:"teach", trg:"別々(べつべつ)", src:"separately / split (the bill)", pos:"adv", gender:null,
     note:"Kanji: 別々. Each + each. Used for separate checks or portions.",
     example:"お勘定(かんじょう)は別々(べつべつ)でお願(ねが)いします。",
     exampleSrc:"Separate checks, please.",
     funFact:"割(わ)り勘(かん) (splitting the bill) is the standard among friends in Japan. The concept of one person treating everyone is less common than in Western culture, especially among younger people."},

    {type:"teach", trg:"持(も)ち帰(かえ)り", src:"takeout / to-go", pos:"noun", gender:null,
     note:"Kanji: 持ち帰り. Hold + return. Taking food home.",
     example:"持(も)ち帰(かえ)りでお願(ねが)いします。",
     exampleSrc:"For takeout, please.",
     funFact:"The Japanese tax system charges 8% for takeout but 10% for eat-in. This difference means many people order mochikaeri to save money. Convenience stores ask 'eat here or take out?' at every purchase."},

    {type:"teach", trg:"満腹(まんぷく)", src:"full (stomach)", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 満腹. Full + belly.",
     example:"もう満腹(まんぷく)です。ごちそうさまでした。",
     exampleSrc:"I'm already full. Thank you for the meal.",
     funFact:"The Japanese eating principle is '腹(はら)八分(はちぶ)' (hara hachi bu), meaning eat until you are 80% full. This Okinawan practice is considered one of the secrets to Japanese longevity."},

    {type:"mc", q:"What does 注文(ちゅうもん) mean?",
     opts:["order (at restaurant)","menu","bill","reservation"], ans:"order (at restaurant)",
     hint:"What you do when you tell the waiter what you want to eat."},

    {type:"fb", s:"{1}をお願(ねが)いします。", a:"お勘定(かんじょう)",
     sSrc:"The bill, please.",
     opts:["お勘定(かんじょう)","注文(ちゅうもん)","メニュー","お代(か)わり"],
     hint:"The word for the check or payment at a restaurant."},

    {type:"match", pairs:[
      {trg:"お箸(はし)", src:"chopsticks"},
      {trg:"お皿(さら)", src:"plate"},
      {trg:"お椀(わん)", src:"bowl"},
      {trg:"メニュー", src:"menu"}
    ]},

    {type:"mc", q:"What is a 定食(ていしょく)?",
     opts:["a set meal with rice and sides","a single dish","a dessert","a drink"], ans:"a set meal with rice and sides",
     hint:"A balanced Japanese m... combo that always includes r... and miso soup."},

    {type:"fb", s:"ご飯(はん)の{1}をお願(ねが)いします。", a:"お代(か)わり",
     sSrc:"A refill of rice, please.",
     opts:["お代(か)わり","注文(ちゅうもん)","お勧(すす)め","お勘定(かんじょう)"],
     hint:"The word for getting a second serving of something."},

    {type:"mc", q:"アレルギー comes from which language?",
     opts:["German","English","French","Dutch"], ans:"German",
     hint:"Japan borrowed many medical terms from this European language."},

    {type:"mc", q:"持(も)ち帰(かえ)り means:",
     opts:["takeout","delivery","reservation","waiting"], ans:"takeout",
     hint:"Taking food home rather than eating at the restaurant."}
  ]
};
export default BATCH4_L_2;
