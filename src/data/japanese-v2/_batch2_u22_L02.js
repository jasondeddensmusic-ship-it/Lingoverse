// Unit 22 Batch 2 Lesson 2: たのみかたとことわりかた (Asking & Declining Favors)
const BATCH2_L_2 = {
  id:"jav2_u22l_b2_2", title:"たのみかたとことわりかた", icon:"🙏", xp:15, board:true,
  steps:[
    {type:"intro", title:"たのみかたとことわりかた",
     desc:"Requesting and declining favors are some of the most socially delicate acts in Japanese. Learn the graduated system from casual requests to formal ones, and master the art of politely saying no without damaging relationships.",
     goals:["Make requests at various politeness levels","Decline requests politely using indirect strategies","Use softening expressions before requests and refusals"]},

    {type:"teach", trg:"おねがいがあるんですが", src:"I have a favor to ask, but...", pos:"intj", gender:null,
     note:"おねがい (request) + がある (exists) + んですが (explanatory + but).\nStandard preface before making a request.",
     example:"A: おねがいがあるんですが。\nB: なんですか？どうぞいってください。",
     exampleSrc:"A: I have a favor to ask...\nB: What is it? Please go ahead.",
     funFact:"おねがいがあるんですが is the universal opener for requests. The んですが (explanatory, trailing off with 'but') is crucial: it signals that a request is coming and gives the listener a chance to prepare. Diving straight into a request without this preface would feel abrupt and inconsiderate."},

    {type:"teach", trg:"〜ていただけないでしょうか", src:"would it be possible for you to ~? (very polite request)", pos:"part", gender:null,
     note:"て-form + いただけない (cannot receive) + でしょうか (I wonder).\nThe most polite standard request form.",
     example:"A: このしりょうをかくにんしていただけないでしょうか？\nB: はい、かしこまりました。",
     exampleSrc:"A: Would it be possible for you to check this document?\nB: Yes, certainly.",
     funFact:"ていただけないでしょうか is the pinnacle of polite requests. It uses negative potential (cannot) + doubt (I wonder), creating extreme indirectness: 'I wonder if it might not be possible for you to...' This triple-layer politeness shows maximum respect for the listener's time and willingness."},

    {type:"teach", trg:"ちょっとむずかしいです", src:"that would be a bit difficult (polite refusal)", pos:"intj", gender:null,
     note:"Standard indirect refusal. ちょっと (a little) + むずかしい (difficult).\nDoes NOT mean 'a little difficult.' It means NO.",
     example:"A: あしたてつだっていただけますか？\nB: あしたはちょっとむずかしいです...。",
     exampleSrc:"A: Could you help me tomorrow?\nB: Tomorrow would be a bit difficult...",
     funFact:"ちょっとむずかしいです is THE Japanese refusal. Foreign learners must understand: this does NOT mean 'it is slightly difficult but maybe possible.' It means NO. Japanese indirectness uses ちょっと (a little) as a powerful softener. Other indirect refusals: ちょっとかんがえさせてください (let me think about it) also usually means no."},

    {type:"teach", trg:"かんがえさせてください", src:"please let me think about it", pos:"intj", gender:null,
     note:"かんがえる (to think) + させて (causative) + ください.\nOften a polite way to decline without saying no directly.",
     example:"A: いっしょにプロジェクトをやりませんか？\nB: すこしかんがえさせてください。",
     exampleSrc:"A: Would you like to do a project together?\nB: Please let me think about it.",
     funFact:"かんがえさせてください buys time and often signals reluctance. If someone says this after a simple request, they likely want to refuse but need time to find a polite way. However, it can also be genuine deliberation. Context and follow-up determine which. If no follow-up comes, it was a gentle no."},

    {type:"mc", q:"ちょっとむずかしいです in context usually means:", opts:["It is slightly difficult but possible","Definitely no (polite indirect refusal)","Please try harder","I need more information"], ans:"Definitely no (polite indirect refusal)",
     hint:"This is the classic Japanese indirect refusal. ちょっと softens what is actually a firm no."},

    {type:"teach", trg:"もうしわけないのですが", src:"I am sorry but ~ (preface before refusing)", pos:"intj", gender:null,
     note:"もうしわけない (no excuse) + のですが (explanatory + but).\nSoftens the refusal that follows.",
     example:"A: らいしゅうのかいぎにでられますか？\nB: もうしわけないのですが、べつのようじがあります。",
     exampleSrc:"A: Can you attend next week's meeting?\nB: I am sorry, but I have other plans.",
     funFact:"もうしわけないのですが is the formal refusal preface. It combines deep apology with explanatory trailing. The のですが creates a soft landing for the refusal. In business, this phrase is almost mandatory before any no. Skipping it and jumping to the refusal would feel cold and unprofessional."},

    {type:"teach", trg:"〜かねます", src:"cannot do ~ (polite, firm refusal)", pos:"verb", gender:null,
     note:"Verb masu-stem + かねます = politely but firmly cannot.\nおうけいたしかねます = we cannot accept.",
     example:"A: このじょうけんをうけいれてもらえますか？\nB: もうしわけございませんが、おうけいたしかねます。",
     exampleSrc:"A: Can you accept these conditions?\nB: I am terribly sorry, but we cannot accept.",
     funFact:"かねます is the most polite way to firmly refuse in business Japanese. It attaches to the masu-stem: うけいれ (accept) + かねます = cannot accept. Unlike できません (cannot do, straightforward), かねます implies 'I wish I could, but truly cannot.' It is used for contract negotiations, policy refusals, and formal business declining."},

    {type:"teach", trg:"ようじ", src:"errand / business / something to do", pos:"noun", gender:null,
     note:"Kanji: 用事. よう (use/business) + じ (matter/thing).\nようじがある = to have something to do.",
     example:"A: きょうはようじがあるのではやくかえります。\nB: おつかれさまです。",
     exampleSrc:"A: I have something to do today, so I will leave early.\nB: Good work today.",
     funFact:"用事 is the vague, all-purpose excuse. When you need to decline but do not want to specify why, ようじがあります (I have something to do) provides plausible cover. Japanese social norms accept this without pressing for details. Asking 'what kind of youji?' would be considered intrusive."},

    {type:"fb", s:"もうしわけないのですが、べつの{1}があります。\n(I am sorry, but I have other plans.)", a:"ようじ", opts:["ようじ","じかん","きもち","れんらく"], sSrc:"I am sorry, but I have other plans.",
     hint:"The vague, all-purpose word for 'something to do' used when declining invitations."},

    {type:"teach", trg:"せっかくですが", src:"I appreciate the offer but ~ (declining politely)", pos:"intj", gender:null,
     note:"せっかく (with effort/kindly offered) + ですが (but).\nAcknowledges the other's effort before declining.",
     example:"A: いっしょにしょくじにいきませんか？\nB: せっかくですが、きょうはようじがあります。",
     exampleSrc:"A: Would you like to go to dinner together?\nB: I appreciate the offer, but I have something to do today.",
     funFact:"せっかくですが is the gracious decline. せっかく acknowledges the other person's kind effort in inviting or offering. Adding ですが (but) before the refusal shows you value their gesture. It is much warmer than a direct no. The listener feels respected even while being turned down."},

    {type:"teach", trg:"きがすすまない", src:"not feel like doing / be reluctant", pos:"verb", gender:null,
     note:"き (spirit/mood) + が + すすまない (not advance).\nKanji: 気が進まない. Your spirit does not move forward.",
     example:"A: のみかいにいきたくないです。\nB: きがすすまないなら、むりしなくていいですよ。",
     exampleSrc:"A: I do not want to go to the drinking party.\nB: If you are not feeling up to it, you do not have to force yourself.",
     funFact:"気が進まない is a gentle way to express reluctance without direct refusal. Your 'ki' (spirit/energy) simply 'does not advance' toward the activity. It is less harsh than いやだ (I dislike it) and more honest than ちょっと (a bit...). Japanese has many ki-phrases: 気になる (to be curious), 気をつける (to be careful)."},

    {type:"mc", q:"かねます expresses:", opts:["A casual maybe","A polite but firm refusal","Enthusiastic agreement","A question"], ans:"A polite but firm refusal",
     hint:"This business-level form attaches to verb stems and means 'regrettably cannot do.'"},

    {type:"tip", title:"Request & Refusal Levels",
     text:"Request (casual to formal):\n1. てくれない？ (won't you? casual)\n2. てもらえますか？ (could you? polite)\n3. ていただけますか？ (could you kindly? formal)\n4. ていただけないでしょうか？ (would it be possible? very formal)\n\nRefusal (indirect to direct):\n1. ちょっと... (trailing off, vaguest)\n2. ちょっとむずかしいです (it is a bit difficult)\n3. かんがえさせてください (let me think about it)\n4. もうしわけないのですが... (I am sorry but...)\n5. おうけいたしかねます (we cannot accept, firmest)",
     deepDive:{title:"Why Japanese Avoids Direct Refusal",
      text:"Direct refusal in Japanese is rare because:\n\n1. Face preservation: saying no embarrasses both parties.\n2. Relationship maintenance: refusal can damage trust.\n3. Ambiguity value: leaving room allows future flexibility.\n4. Cultural norm: indirectness shows sophistication.\n\nForeign business people sometimes miss Japanese refusals because they expect the word いいえ (no). Instead, listen for: ちょっと, むずかしい, かんがえさせてください, and もうしわけないのですが. If you hear these, the answer is no."}},

    {type:"match", pairs:[{trg:"おねがいがあるんですが",src:"I have a favor to ask"},{trg:"ちょっとむずかしいです",src:"that is difficult (= no)"},{trg:"かんがえさせてください",src:"let me think about it"},{trg:"せっかくですが",src:"I appreciate the offer, but"}]},

    {type:"fb", s:"もうしわけございませんが、おうけいたし{1}。\n(I am terribly sorry, but we cannot accept.)", a:"かねます", opts:["かねます","ません","できません","しません"], sSrc:"I am terribly sorry, but we cannot accept.",
     hint:"The polite firm-refusal suffix that attaches to the masu-stem. Implies 'I wish I could but cannot.'"},

    {type:"match", pairs:[{trg:"ていただけないでしょうか",src:"would it be possible?"},{trg:"かねます",src:"cannot do (polite firm)"},{trg:"ようじ",src:"errand/something to do"},{trg:"きがすすまない",src:"not feel like doing"}]},

    {type:"mc", q:"せっかくですが functions as:", opts:["An enthusiastic acceptance","A gracious preface before declining","A formal greeting","A way to ask for more information"], ans:"A gracious preface before declining",
     hint:"せっかく acknowledges the other's kind effort before the speaker gently turns down the offer."},
  ]
};
export default BATCH2_L_2;
