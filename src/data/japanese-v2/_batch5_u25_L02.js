// Unit 25 Batch 5 Lesson 2: こうしょう (Negotiation & Persuasion)
const BATCH5_L_2 = {
  id:"jav2_u25l_b5_2", title:"こうしょう", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうしょう",
     desc:"Japanese negotiation relies on indirect communication, consensus-building, and relationship management. Learn vocabulary for proposals, compromises, conditions, and agreements. These skills bridge cultural gaps and enable successful business interactions in Japan.",
     goals:["Use negotiation vocabulary: こうしょう, だきょう, じょうけん","Understand indirect refusal and agreement patterns","Navigate proposal and counter-proposal language"]},

    {type:"teach", trg:"こうしょう", src:"negotiation", pos:"noun", gender:null,
     note:"Kanji: 交渉. こうしょうする = to negotiate.\nかかくこうしょう = price negotiation.",
     example:"A: こうしょうはよるおそくまでつづきました。\nB: ごうい にたっしましたか？",
     exampleSrc:"A: Negotiations continued until late at night.\nB: Did you reach an agreement?",
     funFact:"交渉 uses 交 (exchange/interact) and 渉 (wade/cross). Japanese こうしょう emphasizes harmony: both sides should feel they gained something. The nemawashi (根回し, behind-the-scenes consensus building) happens before formal こうしょう. By the time parties sit down to negotiate, much has already been agreed informally."},

    {type:"teach", trg:"だきょう", src:"compromise", pos:"noun", gender:null,
     note:"Kanji: 妥協. だきょうする = to compromise.\nだきょうてん = point of compromise.",
     example:"A: おたがいにだきょうてんをみつけましょう。\nB: はい、りょうほうがまんぞくできるかいけつさくをさがしましょう。",
     exampleSrc:"A: Let us find a point of compromise.\nB: Yes, let us look for a solution that satisfies both sides.",
     funFact:"妥協 uses 妥 (peace/compromise) and 協 (cooperate). Japanese business culture values だきょう as a sign of maturity, not weakness. Win-win solutions (ウィンウィン) are preferred. The phrase だきょうをゆるさない (to not allow compromise) signals unshakable principles, used sparingly for truly important matters."},

    {type:"teach", trg:"じょうけん", src:"condition / terms / requirements", pos:"noun", gender:null,
     note:"Kanji: 条件. じょうけんをだす = to present conditions.\nさいていじょうけん = minimum conditions.",
     example:"A: こちらのじょうけんをおつたえいたします。\nB: けんとうさせていただきます。",
     exampleSrc:"A: I will convey our conditions.\nB: We will consider them.",
     funFact:"条件 uses 条 (article/clause) and 件 (matter). In こうしょう, presenting じょうけん is the formal phase. Japanese negotiation often involves exchanging written じょうけん before meeting. The phrase 条件がそろう (conditions are all met) signals readiness to proceed. じょうけんつき (with conditions/conditional) describes qualified agreements."},

    {type:"teach", trg:"ごうい", src:"agreement / consensus / accord", pos:"noun", gender:null,
     note:"Kanji: 合意. ごういする = to agree/reach consensus.\nごういにたっする = to reach an agreement.",
     example:"A: ようやくりょうしゃのごういにたっしました。\nB: ながいこうしょうでしたね。おつかれさまでした。",
     exampleSrc:"A: We finally reached agreement between both parties.\nB: It was a long negotiation. Good work.",
     funFact:"合意 combines 合 (fit/match) and 意 (intention/meaning). Unlike けいやく (contract, legal), ごうい is the meeting of minds. Japanese business prizes ごうい because it represents genuine alignment, not just legal obligation. ぜんいんのごうい (unanimous agreement) is the ideal outcome, reflecting the consensus-driven culture."},

    {type:"mc", q:"だきょうてん means:", opts:["A point where both sides can compromise","A place for negotiations","A deadline for talks","A final offer"], ans:"A point where both sides can compromise",
     hint:"だきょう (c...) + てん (p...) = the place w... agreement can be found."},

    {type:"teach", trg:"ねまわし", src:"behind-the-scenes consensus building", pos:"noun", gender:null,
     note:"Kanji: 根回し. Literally: 'going around the roots.' Pre-meeting preparation.\nThe informal groundwork before formal decisions.",
     example:"A: かいぎのまえにかんけいしゃにねまわしをしておきましょう。\nB: ぜんいんのりかいをえておくことがだいじですね。",
     exampleSrc:"A: Let us do nemawashi with stakeholders before the meeting.\nB: It is important to get everyone's understanding beforehand.",
     funFact:"根回し literally means 'going around the roots' (of a tree being transplanted). Just as you prepare roots before moving a tree, you prepare people before making a decision. ねまわし involves individual meetings, phone calls, and informal dinners to build consensus before the formal meeting. Many Japanese decisions are actually made through ねまわし, not in the meeting itself."},

    {type:"teach", trg:"ようぼう", src:"demand / request / requirement", pos:"noun", gender:null,
     note:"Kanji: 要望. ようぼうする = to demand/request.\nStronger than おねがい but less aggressive than ようきゅう.",
     example:"A: こきゃくからのようぼうにたいおうするひつようがあります。\nB: ぐたいてきにどのようなようぼうですか？",
     exampleSrc:"A: We need to respond to the customer's demands.\nB: Specifically, what kind of demands?",
     funFact:"要望 uses 要 (need/essential) and 望 (desire/hope). It falls between おねがい (polite request) and ようきゅう (formal demand). こきゃくのようぼう (customer demands) drives Japanese business philosophy of customer-first (お客様は神様 okyakusama wa kamisama, the customer is god). Companies strive to exceed ようぼう, not just meet them."},

    {type:"teach", trg:"おりあい", src:"compromise / mutual concession / middle ground", pos:"noun", gender:null,
     note:"Kanji: 折り合い. おりあいをつける = to reach a compromise.\nLess formal than だきょう. More conversational.",
     example:"A: なんとかおりあいをつけることができました。\nB: りょうほうがすこしずつゆずったんですね。",
     exampleSrc:"A: We managed to reach a compromise somehow.\nB: Both sides gave a little, then.",
     funFact:"折り合い uses 折 (fold/bend) and 合い (matching/fitting). The image is of two sides bending toward each other until they fit together. おりあいをつける is more casual and natural than だきょうする. In daily life, neighbors need to おりあいをつける about noise, families about schedules, and colleagues about workload. It is the art of everyday compromise."},

    {type:"tip", title:"Japanese Negotiation Culture",
     text:"Key concepts:\nねまわし = pre-meeting consensus (do this FIRST)\nりんぎ = circulate proposal for stamp approval\nぜんいんいっち = unanimous consent (the goal)\nだきょう = compromise (both sides yield)\n\nIndirect refusal phrases:\nちょっとむずかしいですね = That is a bit difficult (= no)\nけんとうします = We will consider it (= maybe no)\nぜんしょします = We will do our best (= unlikely)\n\nDirect agreement:\nしょうちしました = Agreed/understood\nごういします = We agree\nけいやくしましょう = Let us make a contract"},

    {type:"teach", trg:"ゆずる", src:"to yield / to concede / to give way", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 譲る. せきをゆずる = give up one's seat.\nいっぽゆずる = concede one step.",
     example:"A: おたがいにいっぽずつゆずりましょう。\nB: そうですね。そのほうがうまくいきます。",
     exampleSrc:"A: Let us each concede one step.\nB: That is right. It will work better that way.",
     funFact:"譲る is a fundamental social verb in Japanese. On trains, you ゆずる your seat to the elderly. In negotiations, you ゆずる on minor points to gain major ones. いっぽゆずる (concede one step) is wisdom in conflict resolution. The kanji 譲 also appears in 譲渡 (transfer of ownership) and 謙譲語 (humble language, literally 'yielding language')."},

    {type:"teach", trg:"まんぞく", src:"satisfaction / being satisfied", pos:"noun", gender:null,
     note:"Kanji: 満足. まんぞくする = to be satisfied.\nこきゃくまんぞく = customer satisfaction.",
     example:"A: りょうほうがまんぞくできるけっかになりました。\nB: ウィンウィンのかんけいですね。",
     exampleSrc:"A: The result satisfies both parties.\nB: It is a win-win relationship.",
     funFact:"満足 uses 満 (full) and 足 (sufficient/foot). Being まんぞく means being 'fully sufficient.' こきゃくまんぞくど (customer satisfaction level) is a key business metric in Japan. Companies survey まんぞくど obsessively. Japanese service culture aims for 120% まんぞく, exceeding expectations rather than merely meeting them."},

    {type:"fb", s:"おたがいに{1}てんをみつけましょう。\n(Let us find a point of compromise.)", a:"だきょう", opts:["だきょう","もんだい","ごうい","しゅちょう"], sSrc:"Let us find a point of compromise.",
     hint:"The noun meaning compromise, combined with てん (point) for the place where both sides yield."},

    {type:"mc", q:"ねまわし happens:", opts:["Before the formal meeting or decision","During the meeting","After the decision is made","Only in emergencies"], ans:"Before the formal meeting or decision",
     hint:"This behind-the-scenes process prepares consensus so the m... runs smoothly."},

    {type:"match", pairs:[{trg:"こうしょう",src:"negotiation"},{trg:"だきょう",src:"compromise"},{trg:"ごうい",src:"agreement/consensus"},{trg:"ねまわし",src:"behind-the-scenes prep"}]},

    {type:"fb", s:"ようやくりょうしゃの{1}にたっしました。\n(We finally reached agreement between both parties.)", a:"ごうい", opts:["ごうい","けいやく","こうしょう","だきょう"], sSrc:"We finally reached agreement between both parties.",
     hint:"The word meaning agreement or consensus, not contract, that represents a meeting of minds."},

    {type:"mc", q:"ちょっとむずかしいですね in business likely means:", opts:["An indirect refusal (probably no)","A genuine statement of difficulty","A request for more time","An enthusiastic yes"], ans:"An indirect refusal (probably no)",
     hint:"Japanese business communication often uses softened language to decline without saying 'no' directly."}
  ]
};
export default BATCH5_L_2;
