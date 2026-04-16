// Batch 8 – Unit 06 (A1.2 Family): Family Events & Milestones
const BATCH8_L1 = {
  id:"jav2_u06l_b8_1", title:"かぞくのイベント", icon:"🎊", xp:15, board:true,
  steps:[
    {type:"intro", title:"かぞくのイベント",
     desc:"Learn vocabulary for family events and life milestones celebrated in Japan. From birth celebrations to coming-of-age ceremonies, these words connect language to culture.",
     goals:["Name major family celebrations and milestones","Describe life events using basic vocabulary","Understand Japanese ceremonial culture"]},

    {type:"teach", trg:"たんじょうび", src:"birthday", pos:"noun", gender:null,
     note:"Kanji: 誕生日. たんじょうびパーティー = birthday party.\nおたんじょうびおめでとう = happy birthday.",
     example:"A: たんじょうびはいつですか？\nB: さんがつじゅうごにちです。",
     exampleSrc:"A: When is your birthday?\nB: March 15th.",
     funFact:"Japanese birthday celebrations have become Westernized with cake and candles, but traditionally age was counted differently: everyone aged one year on New Year's Day (かぞえどし). This old system meant individual birthdays were less important. Modern Japan celebrates both ways for some ceremonies."},

    {type:"teach", trg:"けっこんしき", src:"wedding ceremony", pos:"noun", gender:null,
     note:"けっこん (marriage) + しき (ceremony).\nしんぜんしき = Shinto wedding. きょうかいしき = church wedding.",
     example:"A: らいげつけっこんしきがあります。\nB: おめでとうございます！どこでですか？",
     exampleSrc:"A: There is a wedding ceremony next month.\nB: Congratulations! Where?",
     funFact:"Japanese けっこんしき often combine multiple styles: a Shinto ceremony at a shrine, followed by a Western-style reception with white dress and cake. The average Japanese wedding costs about 3.5 million yen. Guests give ごしゅうぎ (monetary gifts) in special envelopes."},

    {type:"teach", trg:"おみやまいり", src:"first shrine visit (for newborns)", pos:"noun", gender:null,
     note:"A baby's first visit to a local shrine, typically at one month old.\nかみさまにほうこくする = to report to the gods.",
     example:"A: あかちゃんのおみやまいりはいつですか？\nB: らいしゅうのにちようびです。",
     exampleSrc:"A: When is the baby's shrine visit?\nB: Next Sunday.",
     funFact:"おみやまいり (お宮参り) happens about 30 days after birth. The family visits a じんじゃ (Shinto shrine) to introduce the baby to the local deity and pray for health. The baby wears a special きもの. Grandparents often attend and the family takes formal photos."},

    {type:"teach", trg:"しちごさん", src:"Seven-Five-Three festival", pos:"noun", gender:null,
     note:"Celebrated on November 15 for children aged 7, 5, and 3.\nちとせあめ = thousand-year candy (given at the festival).",
     example:"A: しちごさんのしゃしんをとりました。\nB: きものがかわいいですね。",
     exampleSrc:"A: We took Seven-Five-Three photos.\nB: The kimono is cute.",
     funFact:"しちごさん celebrates children surviving to ages 3, 5, and 7, which historically was not guaranteed. Girls celebrate at 3 and 7, boys at 3 and 5. Children wear traditional きもの and visit shrines. ちとせあめ (thousand-year candy) in long thin sticks symbolizes long life."},

    {type:"teach", trg:"せいじんしき", src:"coming-of-age ceremony", pos:"noun", gender:null,
     note:"Held on the second Monday of January for those turning 20 (now 18).\nKanji: 成人式.",
     example:"A: せいじんしきにでましたか？\nB: はい、ふりそでをきました。",
     exampleSrc:"A: Did you attend the coming-of-age ceremony?\nB: Yes, I wore a furisode kimono.",
     funFact:"せいじんしき marks the transition to adulthood. Women traditionally wear ふりそで (long-sleeved kimono), which can cost hundreds of thousands of yen to rent. Men wear はかま or suits. Since 2022, the age of adulthood changed to 18, but many cities still hold ceremonies at 20."},

    {type:"mc", q:"What is しちごさん?", opts:["A festival for children aged 7, 5, and 3","A wedding ceremony","A birthday celebration","A graduation party"], ans:"A festival for children aged 7, 5, and 3",
     hint:"The name literally contains the numbers seven, five, and three."},

    {type:"teach", trg:"そつぎょうしき", src:"graduation ceremony", pos:"noun", gender:null,
     note:"そつぎょう (graduation) + しき (ceremony).\nそつぎょうする = to graduate.",
     example:"A: あしたそつぎょうしきです。\nB: おめでとうございます。しゃしんとりましょう。",
     exampleSrc:"A: The graduation ceremony is tomorrow.\nB: Congratulations. Let us take photos.",
     funFact:"Japanese そつぎょうしき are emotional events. Students often cry. The second button (だいにボタン) tradition says boys give their second uniform button to the girl they like, because it is closest to the heart. University graduates wear はかま (traditional hakama)."},

    {type:"teach", trg:"にゅうがくしき", src:"entrance ceremony (school)", pos:"noun", gender:null,
     note:"にゅうがく (entering school) + しき (ceremony).\nHeld every April at the start of the school year.",
     example:"A: むすめのにゅうがくしきにいきます。\nB: しょうがっこうですか？",
     exampleSrc:"A: I am going to my daughter's entrance ceremony.\nB: Elementary school?",
     funFact:"にゅうがくしき is a big deal in Japan. Parents buy new ランドセル (school backpacks) costing 30,000 to 80,000 yen. Families take photos at the school gate with cherry blossoms. New employees also have にゅうしゃしき (company entrance ceremonies) every April 1st."},

    {type:"teach", trg:"おそうしき", src:"funeral", pos:"noun", gender:null,
     note:"Kanji: お葬式. Buddhist funerals are most common in Japan.\nおこうでん = condolence money.",
     example:"A: おそうしきにさんかします。\nB: くろいふくをきてください。",
     exampleSrc:"A: I will attend a funeral.\nB: Please wear black clothes.",
     funFact:"Most Japanese おそうしき follow Buddhist rites. Attendees wear all black and bring おこうでん (money in a special envelope). Cremation rate in Japan is 99.97%, the highest in the world. After cremation, family members use chopsticks to pick bones, which is why passing food chopstick-to-chopstick is taboo."},

    {type:"teach", trg:"おぼん", src:"Obon festival (ancestor remembrance)", pos:"noun", gender:null,
     note:"Buddhist festival in August honoring ancestors.\nおぼんやすみ = Obon holiday period.",
     example:"A: おぼんにじっかにかえります。\nB: ごかぞくにあえますね。",
     exampleSrc:"A: I will return to my hometown for Obon.\nB: You can see your family.",
     funFact:"おぼん (mid-August) is when ancestors' spirits are believed to return home. Families visit graves (おはかまいり), light lanterns, and perform ぼんおどり (Bon dance). おぼんやすみ is one of Japan's three major holiday periods, alongside しょうがつ and ゴールデンウィーク."},

    {type:"teach", trg:"おしょうがつ", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3 holiday period. しょうがつやすみ = New Year's holiday.\nThe most important holiday in Japan.",
     example:"A: おしょうがつはなにをしますか？\nB: じんじゃにはつもうでにいきます。",
     exampleSrc:"A: What do you do for New Year?\nB: I go to the shrine for the first visit of the year.",
     funFact:"おしょうがつ is the most significant holiday in Japanese culture. Families eat おせちりょうり (special New Year food), send ねんがじょう (New Year postcards), and visit shrines (はつもうで). Children receive おとしだま (New Year money) in special envelopes."},

    {type:"fb", s:"あしたは{1}です。おめでとう。\n(Tomorrow is the graduation ceremony. Congratulations.)", a:"そつぎょうしき", opts:["そつぎょうしき","にゅうがくしき","けっこんしき","せいじんしき"], sSrc:"Tomorrow is the graduation ceremony. Congratulations.",
     hint:"This ceremony marks the completion of a school program."},

    {type:"teach", trg:"おとしだま", src:"New Year money gift (for children)", pos:"noun", gender:null,
     note:"Cash given in small envelopes to children during おしょうがつ.\nAnnual tradition.",
     example:"A: おとしだまをもらいましたか？\nB: はい、おじいちゃんからもらいました。",
     exampleSrc:"A: Did you receive New Year money?\nB: Yes, I received it from my grandfather.",
     funFact:"おとしだま amounts depend on the child's age: elementary students get 1,000 to 3,000 yen, middle schoolers 3,000 to 5,000 yen, and high schoolers 5,000 to 10,000 yen. Parents often 'manage' young children's おとしだま, which is a running joke in Japanese families."},

    {type:"teach", trg:"きねんび", src:"anniversary / memorial day", pos:"noun", gender:null,
     note:"きねん (commemoration) + び/ひ (day).\nけっこんきねんび = wedding anniversary.",
     example:"A: けっこんきねんびは何月何日ですか？\nB: ろくがつにじゅうはちにちです。",
     exampleSrc:"A: When is your wedding anniversary?\nB: June 28th.",
     funFact:"きねんび culture in Japan includes personal milestones and national days. いいふうふのひ (Good Couple Day) on November 22 is popular for weddings. Japanese companies mark their そうりつきねんび (founding anniversary). The country has numerous national きねんび."},

    {type:"match", pairs:[{trg:"たんじょうび",src:"birthday"},{trg:"けっこんしき",src:"wedding ceremony"},{trg:"そつぎょうしき",src:"graduation ceremony"},{trg:"おぼん",src:"Obon festival"},{trg:"おしょうがつ",src:"New Year"}],
     hint:"Match each life event or holiday with its English meaning."},

    {type:"mc", q:"What is おとしだま?", opts:["New Year money given to children","A birthday gift","A wedding present","Condolence money"], ans:"New Year money given to children",
     hint:"This cash gift in a small envelope is a cherished annual tradition for Japanese c...."},

    {type:"fb", s:"おぼんに{1}にかえります。\n(I will return to my hometown for Obon.)", a:"じっか", opts:["じっか","がっこう","かいしゃ","びょういん"], sSrc:"I will return to my hometown for Obon.",
     hint:"This word means your family home or the house where you grew up."},

    {type:"mc", q:"What happens at おみやまいり?", opts:["A newborn baby visits a shrine for the first time","A student graduates from school","A couple gets married","Ancestors are honored"], ans:"A newborn baby visits a shrine for the first time",
     hint:"This ceremony introduces the newest family member to the local deity."}
  ]
};
export default BATCH8_L1;
