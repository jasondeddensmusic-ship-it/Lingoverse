// Batch 11 – Unit 05 (A1.2 Food & Drink): Meals & Ordering
const BATCH11_L1 = {
  id:"jav2_u05l_b11_1", title:"食事(しょくじ)の時間(じかん)", icon:"🍽️", xp:15, board:true,
  steps:[
    {type:"intro", title:"食事(しょくじ)の時間(じかん)",
     desc:"Learn vocabulary for meals, mealtimes, and ordering at restaurants. These words are essential for daily life in Japan.",
     goals:["Name the three meals of the day","Order food at a restaurant","Use meal-related verbs and expressions"]},

    {type:"teach", trg:"朝(あさ)ごはん", src:"breakfast", pos:"noun", gender:null,
     note:"朝(あさ) (morning) + ごはん (rice/meal). Also: 朝食(ちょうしょく) (formal).\nTypical: rice, miso soup, fish, pickles.",
     example:"A: 朝(あさ)ごはんを食(た)べましたか？\nB: まだです。コーヒーだけ飲(の)みました。",
     exampleSrc:"A: Did you eat breakfast?\nB: Not yet. I only had coffee.",
     funFact:"Traditional Japanese breakfast is a full meal: rice, miso soup, grilled fish, pickled vegetables, and tamagoyaki (rolled egg). This is very different from Western toast-and-cereal. The word ごはん means both 'cooked rice' and 'meal,' showing rice's central role."},

    {type:"teach", trg:"昼(ひる)ごはん", src:"lunch", pos:"noun", gender:null,
     note:"昼(ひる) (noon) + ごはん (meal). Also: 昼食(ちゅうしょく) (formal).\nべんとう = packed lunch.",
     example:"A: 昼(ひる)ごはんはなにを食(た)べますか？\nB: 今日(きょう)はべんとうをもってきました。",
     exampleSrc:"A: What will you eat for lunch?\nB: Today I brought a packed lunch.",
     funFact:"The べんとう (lunch box) culture is an art form in Japan. Mothers create elaborate キャラべん (character bento) for children, and えきべん (station bento) sold at train stations feature local specialties. Convenience stores sell hundreds of bento varieties."},

    {type:"teach", trg:"晩(ばん)ごはん", src:"dinner", pos:"noun", gender:null,
     note:"晩(ばん) (evening) + ごはん (meal). Also: 夕食(ゆうしょく) (formal).\nThe main family meal of the day.",
     example:"A: 晩(ばん)ごはんは何時(なんじ)ですか？\nB: 六時(ろくじ)ごろに食(た)べます。",
     exampleSrc:"A: What time is dinner?\nB: We eat around six o'clock.",
     funFact:"Japanese family dinners typically feature several small dishes rather than one main course. This style is called 一汁三菜(いちじゅうさんさい) (one soup, three side dishes), which is considered the ideal balanced meal. Everyone says いただきます before eating."},

    {type:"teach", trg:"メニュー", src:"menu", pos:"noun", gender:null,
     note:"Loanword from French/English. Some restaurants use おしながき (traditional).\nAt izakaya: 飲(の)み放題(ほうだい) = all-you-can-drink menu.",
     example:"A: すみません、メニューをおねがいします。\nB: はい、どうぞ。",
     exampleSrc:"A: Excuse me, may I have the menu, please?\nB: Yes, here you go.",
     funFact:"Many Japanese restaurants display plastic food models (食品(しょくひん)サンプル) in their windows, so you can see exactly what you are ordering. This industry started in the 1930s and the models are handcrafted works of art, sometimes costing more than the real dish."},

    {type:"teach", trg:"注文(ちゅうもん)", src:"order (at restaurant)", pos:"noun", gender:null,
     note:"注文(ちゅうもん)する = to order.\nご注文(ちゅうもん)はお決(き)まりですか = are you ready to order?",
     example:"A: ご注文(ちゅうもん)はお決(き)まりですか？\nB: はい、ラーメンをおねがいします。",
     exampleSrc:"A: Have you decided on your order?\nB: Yes, ramen, please.",
     funFact:"In many Japanese restaurants, you press a button to call the server (すみませんボタン). In ramen shops, you often use a ticket machine (食券機(しょっけんき)) at the entrance to order and pay before sitting down. No tipping is expected anywhere in Japan."},

    {type:"teach", trg:"おかわり", src:"refill / seconds", pos:"noun", gender:null,
     note:"おかわりする = to have another serving.\nCommon at izakaya: おかわり自由(じゆう) = free refills.",
     example:"A: ごはんのおかわりはいかがですか？\nB: はい、おねがいします！",
     exampleSrc:"A: Would you like more rice?\nB: Yes, please!",
     funFact:"At many traditional restaurants and all gyudon (beef bowl) chains, rice refills are free. Saying おかわり with a big smile is one of the joys of eating in Japan. The word literally means 'another serving' and can apply to rice, tea, or any dish."},

    {type:"teach", trg:"お勘定(かんじょう)", src:"the bill / check", pos:"noun", gender:null,
     note:"お勘定(かんじょう)おねがいします = check, please.\nModern: おあいそ (at sushi bars).",
     example:"A: お勘定(かんじょう)をおねがいします。\nB: 全部(ぜんぶ)で二千八百円(にせんはっぴゃくえん)です。",
     exampleSrc:"A: The check, please.\nB: The total is 2,800 yen.",
     funFact:"Japanese restaurants never bring the bill to your table unless asked. You go to the register (レジ) to pay, or ask with a hand gesture (raising one hand, fingers together). Splitting bills (割(わり)かん) is common among friends and is not considered rude."},

    {type:"teach", trg:"おいしい", src:"delicious", pos:"adj", gender:null,
     note:"The most common food compliment. Casual: うまい (male speech).\nおいしそう = looks delicious.",
     example:"A: このカレーはおいしいですね！\nB: ありがとう。母(はは)のレシピです。",
     exampleSrc:"A: This curry is delicious!\nB: Thank you. It is my mother's recipe.",
     funFact:"Saying おいしい while eating is almost mandatory politeness in Japan. Not commenting on food can be interpreted as displeasure. The casual masculine form うまい is often shouted enthusiastically on food shows. おいしそう (looks delicious) is said before the first bite."},

    {type:"teach", trg:"まずい", src:"bad-tasting", pos:"adj", gender:null,
     note:"Opposite of おいしい. Very direct, rarely used to someone's face.\nAlso slang: まずい = bad situation.",
     example:"A: この牛乳(ぎゅうにゅう)、まずくない？\nB: あ、期限切(きげんぎ)れかも。",
     exampleSrc:"A: Doesn't this milk taste bad?\nB: Oh, it might be expired.",
     funFact:"Japanese people rarely say まずい about someone else's cooking, as it is very direct and rude. Instead, they use ちょっと... (a little...) or びみょう (subtle/iffy). Interestingly, まずい has a slang meaning of 'this is a bad situation' as in まずい！遅刻(ちこく)する！ (bad! I'll be late!)"},

    {type:"teach", trg:"辛(から)い", src:"spicy", pos:"adj", gender:null,
     note:"I-adjective. Also means salty in some contexts.\nあま辛(から)い = sweet and spicy.",
     example:"A: このカレーは辛(から)いですか？\nB: 少(すこ)し辛(から)いです。でもおいしいですよ。",
     exampleSrc:"A: Is this curry spicy?\nB: It is a little spicy. But it is delicious.",
     funFact:"Traditional Japanese cuisine is not very spicy compared to Korean or Thai food. However, わさび (wasabi) and 七味唐辛子(しちみとうがらし) (seven-spice chili) provide heat. 辛(から)い can mean both 'spicy' and 'salty,' which sometimes confuses learners."},

    {type:"teach", trg:"甘(あま)い", src:"sweet", pos:"adj", gender:null,
     note:"I-adjective. Also figuratively: 甘(あま)い = naive/lenient.\n甘(あま)いもの = sweets.",
     example:"A: 甘(あま)いものが好(す)きですか？\nB: 大好(だいす)きです！特(とく)に大福(だいふく)が好(す)きです。",
     exampleSrc:"A: Do you like sweet things?\nB: I love them! Especially daifuku.",
     funFact:"甘(あま)い has a fascinating double meaning. For food it means 'sweet,' but for people it means 'lenient' or 'naive.' 彼(かれ)は甘(あま)い (He is lenient). Japanese sweets (和菓子(わがし)) are less sweet than Western desserts, designed to complement bitter green tea."},

    // Quiz steps
    {type:"mc", q:"「昼(ひる)ごはん」の昼(ひる)はなんですか？",
     opts:["Noon / midday","Night","Morning","Evening"],
     ans:"Noon / midday",
     hint:"This meal name combines a time-of-day word with ごはん (meal/rice). Think about when lunch happens."},

    {type:"fb", s:"ご注文(ちゅうもん)は{1}ですか？",
     a:["お決(き)まり"],
     opts:["お決(き)まり","おかわり","おいしい","お勘定(かんじょう)"],
     hint:"A waiter asking if you have decided what to order. This polite phrase literally asks if your order 'is decided.'",
     sSrc:"Have you decided on your order?"},

    {type:"match", pairs:[
      {trg:"おいしい", src:"delicious"},
      {trg:"辛(から)い", src:"spicy"},
      {trg:"甘(あま)い", src:"sweet"},
      {trg:"まずい", src:"bad-tasting"}
    ]},

    {type:"mc", q:"日本(にほん)のレストランで食(た)べ終(お)わったら、どうしますか？",
     opts:["Leave a tip","Go to the register to pay","Wait for the bill at the table","Leave money on the table"],
     ans:"Go to the register to pay",
     hint:"In Japan, the bill is not brought to your table automatically. You take action yourself when ready to p...."},

    {type:"fb", s:"ごはんの{1}はいかがですか？",
     a:["おかわり"],
     opts:["おかわり","注文(ちゅうもん)","メニュー","お勘定(かんじょう)"],
     hint:"The server is offering you more rice. This word means 'another serving' or 'refill.'",
     sSrc:"Would you like more rice?"},

    {type:"mc", q:"「甘(あま)い」のもうひとつの意味(いみ)はなんですか？",
     opts:["Careful","Expensive","Naive or lenient","Angry"],
     ans:"Naive or lenient",
     hint:"Besides describing sweet food, this adjective has a figurative meaning when used about people or situations."}
  ,{type:"fb", s:"食(た)べ終(お)わりましたか？では、{1}をお願(ねが)いします。",
    a:["お勘定(かんじょう)"],
    opts:["お勘定(かんじょう)","おかわり","メニュー","注文(ちゅうもん)"],
    hint:"You have finished eating and now need to settle up. This noun means 'the bill' or 'check.'",
    sSrc:"Have you finished eating? Then please bring the {1}."}
  ,{type:"match",pairs:[{trg:"朝(あさ)ごはん",src:"breakfast"},{trg:"昼(ひる)ごはん",src:"lunch"},{trg:"晩(ばん)ごはん",src:"dinner"},{trg:"メニュー",src:"menu"},{trg:"注文(ちゅうもん)",src:"order (at restaurant)"},{trg:"お勘定(かんじょう)",src:"the bill / check"}]}]
};
export default BATCH11_L1;
