// Batch 8 – Unit 32 (B2.4 Medicine): Mental Health & Wellness
const BATCH8_L1 = {
  id:"jav2_u32l_b8_1", title:"メンタルヘルスとウェルネス", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"メンタルヘルスとウェルネス",
     desc:"Master mental health and wellness vocabulary increasingly prominent in Japanese society. These terms reflect evolving attitudes toward psychological well-being.",
     goals:["Discuss mental health topics sensitively","Understand wellness and self-care vocabulary","Navigate therapeutic and counseling terminology"]},

    {type:"teach", trg:"メンタルヘルス", src:"mental health", pos:"noun", gender:null,
     note:"Loanword. メンタルヘルスケア = mental health care.\nIncreasingly discussed in Japan.",
     example:"A: しょくばでのメンタルヘルスたいさくがじゅうようです。\nB: ストレスチェックがぎむかされましたね。",
     exampleSrc:"A: Mental health measures at the workplace are important.\nB: Stress checks have been made mandatory.",
     funFact:"Japan mandated annual ストレスチェック (stress checks) for companies with 50+ employees in 2015. メンタルヘルス awareness has grown dramatically, though stigma remains. The word itself is English-derived because Japanese lacked a concise native equivalent. せいしんてきけんこう (mental health) is the formal Japanese term."},

    {type:"teach", trg:"カウンセリング", src:"counseling / therapy", pos:"noun", gender:null,
     note:"Loanword. カウンセラー = counselor.\nしんりカウンセリング = psychological counseling.",
     example:"A: カウンセリングをうけてみませんか？\nB: すこしきょうみがあります。",
     exampleSrc:"A: Would you like to try counseling?\nB: I am a little interested.",
     funFact:"カウンセリング in Japan has expanded from school settings to workplaces and private practice. Japan created the こうにんしんりし (certified public psychologist) qualification in 2017. Barriers include cost, stigma, and shortage of professionals. Online カウンセリング grew rapidly during the pandemic."},

    {type:"teach", trg:"バーンアウト", src:"burnout", pos:"noun", gender:null,
     note:"Loanword. もえつきしょうこうぐん = burnout syndrome (native term).\nしごとでバーンアウトする = to burn out from work.",
     example:"A: バーンアウトきみなのでやすみをとります。\nB: ゆっくりやすんでくださいね。",
     exampleSrc:"A: I am showing signs of burnout so I will take time off.\nB: Please rest well.",
     funFact:"バーンアウト (burnout) was recognized by WHO as an occupational phenomenon in 2019. In Japan, it overlaps with かろうし (death from overwork) culture. もえつきしょうこうぐん (burnout syndrome) affects teachers, nurses, and IT workers most. Japan's long-hours culture makes バーンアウト prevention a policy priority."},

    {type:"teach", trg:"じりつしんけい", src:"autonomic nervous system", pos:"noun", gender:null,
     note:"Kanji: 自律神経. じりつしんけいしっちょうしょう = autonomic dysfunction.\nStress-related condition common in Japan.",
     example:"A: ストレスでじりつしんけいがみだれています。\nB: せいかつリズムをととのえましょう。",
     exampleSrc:"A: My autonomic nervous system is disrupted from stress.\nB: Let us regulate your daily rhythm.",
     funFact:"じりつしんけいしっちょう (autonomic nervous system imbalance) is a uniquely common Japanese diagnosis. Symptoms include fatigue, dizziness, and sleep problems. It is attributed to stress, irregular schedules, and seasonal changes. Treatment emphasizes せいかつしゅうかん (lifestyle habits) over medication."},

    {type:"teach", trg:"マインドフルネス", src:"mindfulness", pos:"noun", gender:null,
     note:"Loanword. めいそう = meditation (native word).\nマインドフルネスめいそう = mindfulness meditation.",
     example:"A: マインドフルネスをまいにちじっせんしています。\nB: こうかはありますか？",
     exampleSrc:"A: I practice mindfulness every day.\nB: Is it effective?",
     funFact:"マインドフルネス has come full circle in Japan: Buddhist めいそう (meditation) was exported to the West, secularized as 'mindfulness,' and re-imported to Japan as マインドフルネス. Many Japanese companies now offer マインドフルネスけんしゅう (training). The irony of Japan re-importing its own spiritual tradition is noted by cultural commentators."},

    {type:"mc", q:"When did Japan mandate workplace stress checks?", opts:["2015","2000","2020","2010"], ans:"2015",
     hint:"Companies with 50 or more employees must conduct annual ストレスチェック."},

    {type:"teach", trg:"ふみん", src:"insomnia / sleeplessness", pos:"noun", gender:null,
     note:"Kanji: 不眠. ふみんしょう = insomnia disorder.\nにほんじんのすいみんじかんはせかいでみじかい.",
     example:"A: さいきんふみんにくるしんでいます。\nB: いしにそうだんしたほうがいいですよ。",
     exampleSrc:"A: I have been suffering from insomnia recently.\nB: You should consult a doctor.",
     funFact:"Japan has one of the world's shortest average sleep times: about 6 hours 22 minutes. ふみん (insomnia) affects an estimated 20% of Japanese adults. The culture of ざんぎょう (overtime) and スマートフォン use before bed contributes. いねむり (dozing at work/on trains) is socially accepted as proof of hard work."},

    {type:"teach", trg:"りょうほう", src:"therapy / treatment method", pos:"noun", gender:null,
     note:"Kanji: 療法. にんちこうどうりょうほう = cognitive behavioral therapy (CBT).\nおんがくりょうほう = music therapy.",
     example:"A: にんちこうどうりょうほうがこうかてきです。\nB: やくぶつりょうほうとへいようしますか？",
     exampleSrc:"A: Cognitive behavioral therapy is effective.\nB: Do you combine it with drug therapy?",
     funFact:"にんちこうどうりょうほう (CBT) is gaining ground in Japan alongside traditional やくぶつりょうほう (pharmacotherapy). Japan's mental health treatment historically favored medication and hospitalization. The shift toward りょうほう diversity reflects global trends. さぎょうりょうほう (occupational therapy) and げいじゅつりょうほう (art therapy) are also expanding."},

    {type:"teach", trg:"じここうていかん", src:"self-esteem / self-affirmation", pos:"noun", gender:null,
     note:"じこ (self) + こうてい (affirmation) + かん (feeling).\nじここうていかんがひくい = low self-esteem.",
     example:"A: にほんのわかものはじここうていかんがひくいとされています。\nB: きょういくのかだいですね。",
     exampleSrc:"A: Japanese youth are said to have low self-esteem.\nB: It is an educational challenge.",
     funFact:"International surveys consistently show Japanese youth have lower じここうていかん than peers in other countries. Researchers debate whether this reflects genuine low self-esteem or cultural modesty (けんきょ). Japanese education reform aims to build じここうていかん through active learning and positive feedback."},

    {type:"teach", trg:"こころのケア", src:"emotional care / psychological support", pos:"noun", gender:null,
     note:"こころ (heart/mind) + ケア (care). こころのケアが necessary after disasters.\nNative-loanword hybrid.",
     example:"A: ひさいしゃのこころのケアがひつようです。\nB: せんもんかをはけんしましょう。",
     exampleSrc:"A: Psychological care for disaster victims is needed.\nB: Let us dispatch specialists.",
     funFact:"こころのケア became a major topic after the 1995 Kobe earthquake and expanded after 2011 Tohoku. PTSD (しんてきがいしょうごストレスしょうがい) recognition increased. Disaster-affected areas receive こころのケアチーム (psychological support teams). Children's こころのケア after disasters is a priority in Japanese emergency response."},

    {type:"teach", trg:"レジリエンス", src:"resilience", pos:"noun", gender:null,
     note:"Loanword. こころのレジリエンス = psychological resilience.\nレジリエンスをきたえる = to build resilience.",
     example:"A: レジリエンスをたかめるけんしゅうをおこないます。\nB: ストレスたいせいがたかまりますね。",
     exampleSrc:"A: We will conduct training to build resilience.\nB: Stress tolerance will increase.",
     funFact:"レジリエンス entered Japanese business and education vocabulary as a key concept for navigating change and adversity. Japanese culture's traditional くなん (hardship) endurance aligns with resilience thinking. Schools teach レジリエンスきょういく (resilience education) to help children cope with bullying, exams, and social pressure."},

    {type:"fb", s:"ストレスで{1}がみだれています。\n(My autonomic nervous system is disrupted from stress.)", a:"じりつしんけい", opts:["じりつしんけい","メンタルヘルス","レジリエンス","バーンアウト"], sSrc:"My autonomic nervous system is disrupted from stress.",
     hint:"This medical term describes the body's automatic regulation system affected by stress."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"Kanji: 予防. よぼういがく = preventive medicine.\nかんせんよぼう = infection prevention.",
     example:"A: びょうきのよぼうがいちばんだいじです。\nB: きそくただしいせいかつがきほんですね。",
     exampleSrc:"A: Disease prevention is most important.\nB: A regular lifestyle is the foundation.",
     funFact:"よぼう (prevention) is a cornerstone of Japanese healthcare philosophy. にんげんドック (comprehensive health checkup) and けんこうしんだん (health examination) are annual requirements at Japanese companies. よぼうせっしゅ (vaccination) rates are generally high. The proverb よぼうはちりょうにまさる (prevention is better than cure) is widely embraced."},

    {type:"teach", trg:"ウェルビーイング", src:"well-being", pos:"noun", gender:null,
     note:"Loanword. しんたいてき・せいしんてき・しゃかいてきウェルビーイング = physical, mental, social well-being.",
     example:"A: じゅうぎょういんのウェルビーイングをじゅうしします。\nB: はたらきやすいかんきょうづくりですね。",
     exampleSrc:"A: We value employee well-being.\nB: Creating a comfortable work environment.",
     funFact:"ウェルビーイング has become a major Japanese corporate buzzword since 2020. Companies create ウェルビーイングすいしんしつ (well-being promotion departments). Japan's World Happiness Report ranking (around 50th) motivates improvement efforts. The concept encompasses こころ (mind), からだ (body), and しゃかい (social) dimensions."},

    {type:"match", pairs:[{trg:"メンタルヘルス",src:"mental health"},{trg:"カウンセリング",src:"counseling"},{trg:"バーンアウト",src:"burnout"},{trg:"ふみん",src:"insomnia"},{trg:"レジリエンス",src:"resilience"}],
     hint:"Match each wellness term with its English meaning."},

    {type:"mc", q:"What is ironic about マインドフルネス in Japan?", opts:["Japan re-imported its own Buddhist meditation tradition from the West","It was invented in Japan recently","Japanese people never practiced meditation","It is banned in schools"], ans:"Japan re-imported its own Buddhist meditation tradition from the West",
     hint:"B... めいそう was exported, secularized abroad, and returned as a loanword."},

    {type:"fb", s:"ひさいしゃの{1}がひつようです。\n(Psychological care for disaster victims is needed.)", a:"こころのケア", opts:["こころのケア","メンタルヘルス","カウンセリング","りょうほう"], sSrc:"Psychological care for disaster victims is needed.",
     hint:"This native-loanword hybrid specifically refers to emotional support."},

    {type:"mc", q:"What does じここうていかん mean?", opts:["Self-esteem / self-affirmation","Self-discipline","Self-study","Self-employment"], ans:"Self-esteem / self-affirmation",
     hint:"International surveys show Japanese youth score lower on this measure than peers."}
  ]
};
export default BATCH8_L1;
