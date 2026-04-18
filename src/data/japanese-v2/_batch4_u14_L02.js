// Batch 4 — Unit 14 Lesson 2: Comparison & Contrast
const BATCH4_L_2 = {
  id:"jav2_u14l_b4_2", title:"比較(ひかく)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"比較(ひかく)する表現(ひょうげん)",
     desc:"Learn to compare things and express preferences. Japanese comparison structures differ significantly from English.",
     goals:["Compare two items with yori and hou","Express superlatives with ichiban","State preferences with -tai and hoshii"]},

    {type:"teach", trg:"比(くら)べる", src:"to compare", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 比べる. Setting two things side by side.",
     example:"二(ふた)つのレストランを比(くら)べました。",
     exampleSrc:"I compared two restaurants.",
     funFact:"Kuraberu uses the kanji 比 which shows two people standing side by side. Japanese comparison does not use special adjective forms (like English '-er'). Instead, particles like より (yori) and ほう (hou) handle all comparison."},

    {type:"teach", trg:"より", src:"than / compared to", pos:"part", gender:null,
     note:"The comparison particle. A は B より X = A is more X than B.",
     example:"東京(とうきょう)は大阪(おおさか)より大(おお)きいです。",
     exampleSrc:"Tokyo is bigger than Osaka.",
     funFact:"Yori is the only word needed for comparison in Japanese. No adjective changes needed. 'Tokyo wa Osaka yori ookii' directly translates to 'Tokyo, compared to Osaka, is big.' The simplicity of this system contrasts with English's -er/-est forms."},

    {type:"teach", trg:"方(ほう)", src:"alternative / the one that is", pos:"noun", gender:null,
     note:"Kanji: 方. Used in comparison to mark the preferred option.",
     example:"日本(にほん)料理(りょうり)の方(ほう)が好(す)きです。",
     exampleSrc:"I prefer Japanese food (it is the more liked one).",
     funFact:"Hou literally means 'direction/side.' In comparisons, it picks one side. 'Kono hou ga ii' (this side/option is better). The same kanji 方 also means 'person' (polite) and 'method,' making it one of the most versatile kanji."},

    {type:"teach", trg:"一番(いちばん)", src:"number one / the most", pos:"adv", gender:null,
     note:"Kanji: 一番. One + number. Creates superlatives.",
     example:"富士山(ふじさん)は日本(にほん)で一番(いちばん)高(たか)い山(やま)です。",
     exampleSrc:"Mount Fuji is the tallest mountain in Japan.",
     funFact:"Ichiban literally means 'number one.' It works as a universal superlative: ichiban + any adjective. 'Ichiban takai' (tallest/most expensive), 'ichiban suki' (most liked). Ichiban is also a popular brand name and common exclamation."},

    {type:"teach", trg:"同(おな)じ", src:"same / identical", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 同じ. Used when things are equal.",
     example:"私(わたし)たちは同(おな)じ年(とし)です。",
     exampleSrc:"We are the same age.",
     funFact:"Onaji uses the kanji 同 (same/together). The phrase おなじく (likewise) is used when agreeing with someone's order: 'Same for me, please.' Stating sameness is sometimes more important than stating difference in Japanese conversation."},

    {type:"teach", trg:"違(ちが)う", src:"to differ / be wrong", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 違う. Both 'different' and 'incorrect.'",
     example:"この答(こた)えは違(ちが)います。",
     exampleSrc:"This answer is wrong.",
     funFact:"Chigau has a double function: 'that is different' and 'that is wrong.' When someone says something incorrect, Japanese people say 'chigau' or 'chigaimasu' rather than a blunt 'no.' It sounds softer than direct denial."},

    {type:"teach", trg:"似(に)ている", src:"to resemble / be similar", pos:"verb", gender:null,
     note:"Te-form of 似(に)る. Kanji: 似ている. Ongoing state of resemblance.",
     example:"あなたはお母(かあ)さんに似(に)ていますね。",
     exampleSrc:"You resemble your mother.",
     funFact:"Niteiru is always in te-iru form because resemblance is an ongoing state. Japanese people frequently comment on family resemblance. 'Okaa-san ni niteiru ne' is one of the most common things said when meeting someone's parent."},

    {type:"teach", trg:"特(とく)に", src:"especially / particularly", pos:"adv", gender:null,
     note:"Kanji: 特に. Special + marker. Highlights something above others.",
     example:"日本(にほん)料理(りょうり)が好(す)きです。特(とく)にすしが好(す)きです。",
     exampleSrc:"I like Japanese food. Especially sushi.",
     funFact:"Toku ni singles out one item from a group. It is essential for expressing specific preferences. The kanji 特 (special/unique) appears in 特別 (tokubetsu, special), 特徴 (tokuchou, characteristic), and 独特 (dokutoku, unique)."},

    {type:"teach", trg:"まあまあ", src:"so-so / not bad", pos:"adv", gender:null,
     note:"An evaluation between good and bad. Moderate satisfaction.",
     example:"試験(しけん)はまあまあでした。",
     exampleSrc:"The exam was so-so.",
     funFact:"Maa maa is the quintessential Japanese non-committal evaluation. It avoids both enthusiasm and criticism. Japanese culture tends toward moderate responses rather than extremes. Asking 'How was it?' often yields 'maa maa.'"},

    {type:"teach", trg:"全然(ぜんぜん)", src:"not at all / completely", pos:"adv", gender:null,
     note:"Kanji: 全然. Whole + so. Used with negatives for 'not at all.'",
     example:"全然(ぜんぜん)わかりません。",
     exampleSrc:"I don't understand at all.",
     funFact:"Traditionally, zenzen must be paired with a negative verb. However, young Japanese increasingly use it with positives (zenzen ii = totally fine, zenzen daijoubu = completely okay). This usage shift annoys language purists."},

    {type:"teach", trg:"結構(けっこう)", src:"quite / fairly / enough", pos:"adv", gender:null,
     note:"Kanji: 結構. Quite a lot, or 'no thank you' (when declining).",
     example:"このラーメンは結構(けっこう)おいしいです。",
     exampleSrc:"This ramen is quite delicious.",
     funFact:"Kekkou has two very different uses: (1) 'quite/fairly' (kekkou oishii = quite tasty), and (2) 'no thank you/I'm fine' (kekkou desu = that's enough). The polite refusal use is essential for declining offers in Japan."},

    {type:"teach", trg:"少(すこ)し", src:"a little / a bit", pos:"adv", gender:null,
     note:"Kanji: 少し. A small amount. More polite than ちょっと.",
     example:"日本語(にほんご)が少(すこ)しわかります。",
     exampleSrc:"I understand a little Japanese.",
     funFact:"Sukoshi is formal while chotto is casual. 'Sukoshi dake' (just a little) is a useful qualifier. Japanese speakers often downplay their abilities with sukoshi: 'Nihongo ga sukoshi wakarimasu' even when they are quite fluent."},

    {type:"teach", trg:"かなり", src:"quite / considerably", pos:"adv", gender:null,
     note:"Kanji: 可成り. Stronger than 結構(けっこう). A significant degree.",
     example:"今日(きょう)はかなり寒(さむ)いです。",
     exampleSrc:"It is quite cold today.",
     funFact:"Kanari sits between 'somewhat' and 'very' on the intensity scale. The degree adverbs in order: sukoshi (a little) < kekkou (fairly) < kanari (quite) < totemo (very) < sugoku (extremely). Knowing this scale is key to natural Japanese."},

    {type:"teach", trg:"むしろ", src:"rather / instead", pos:"adv", gender:null,
     note:"Introduces a contrasting preference or correction.",
     example:"寒(さむ)くないです。むしろ暑(あつ)いです。",
     exampleSrc:"It's not cold. Rather, it's hot.",
     funFact:"Mushiro corrects a previous statement or expectation. It is often translated as 'on the contrary.' In debates and essays, mushiro elegantly pivots to the speaker's real point after acknowledging the opposing view."},

    {type:"mc", q:"What particle marks 'than' in Japanese comparisons?",
     opts:["より","方(ほう)","は","が"], ans:"より",
     hint:"The particle placed after the thing being compared against."},

    {type:"fb", s:"富士山(ふじさん)は日本(にほん)で{1}高(たか)い山(やま)です。", a:"一番(いちばん)",
     sSrc:"Mount Fuji is the tallest mountain in Japan.",
     opts:["一番(いちばん)","少(すこ)し","かなり","結構(けっこう)"],
     hint:"The word meaning 'number one' that creates superlatives."},

    {type:"match", pairs:[
      {trg:"同(おな)じ", src:"same"},
      {trg:"違(ちが)う", src:"different/wrong"},
      {trg:"似(に)ている", src:"resembling"},
      {trg:"比(くら)べる", src:"to compare"}
    ]},

    {type:"mc", q:"まあまあ expresses:",
     opts:["a moderate/so-so evaluation","excellence","disappointment","anger"], ans:"a moderate/so-so evaluation",
     hint:"Neither great nor terrible, the quintessential non-committal response."},

    {type:"fb", s:"{1}わかりません。", a:"全然(ぜんぜん)",
     sSrc:"I don't understand at all.",
     opts:["全然(ぜんぜん)","少(すこ)し","かなり","結構(けっこう)"],
     hint:"Complete negation, not even a tiny bit of understanding."},

    {type:"mc", q:"結構(けっこう) has two meanings. One is 'quite.' The other is:",
     opts:["no thank you","very much","excuse me","I agree"], ans:"no thank you",
     hint:"Used to politely decline an offer or say 'that's enough.'"},

    {type:"mc", q:"むしろ means:",
     opts:["rather / on the contrary","for example","in the end","of course"], ans:"rather / on the contrary",
     hint:"Corrects or contrasts with what was just said or expected."}
  ,{type:"match",pairs:[{trg:"特(とく)に",src:"especially / particularly"},{trg:"まあまあ",src:"so-so / not bad"},{trg:"結構(けっこう)",src:"quite / fairly / enough"},{trg:"少(すこ)し",src:"a little / a bit"},{trg:"かなり",src:"quite / considerably"},{trg:"むしろ",src:"rather / instead"}]}]
};
export default BATCH4_L_2;
