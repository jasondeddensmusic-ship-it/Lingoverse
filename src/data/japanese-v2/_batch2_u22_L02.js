// Unit 22 Batch 2 Lesson 2: 頼(たの)み方(かた)と断(ことわ)り方(かた) (Asking & Declining Favors)
const BATCH2_L_2 = {
  id:"jav2_u22l_b2_2", title:"頼(たの)み方(かた)と断(ことわ)り方(かた)", icon:"🙏", xp:15, board:true,
  steps:[
    {type:"intro", title:"頼(たの)み方(かた)と断(ことわ)り方(かた)",
     desc:"Requesting and declining favors are some of the most socially delicate acts in Japanese. Learn the graduated system from casual requests to formal ones, and master the art of politely saying no without damaging relationships.",
     goals:["Make requests at various politeness levels","Decline requests politely using indirect strategies","Use softening expressions before requests and refusals"]},

    {type:"teach", trg:"お願(ねが)いがあるんですが", src:"I have a favor to ask, but...", pos:"intj", gender:null,
     note:"お願(ねが)い (request) + がある (exists) + んですが (explanatory + but).\nStandard preface before making a request.",
     example:"A: お願(ねが)いがあるんですが。\nB: 何(なん)ですか？どうぞ言(い)ってください。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I have a favor to ask...\nB: What is it? Please go ahead.\nA: How long did it take?\nB: About two hours.",
     funFact:"お願いがあるんですが is the universal opener for requests. The んですが (explanatory, trailing off with 'but') is crucial: it signals that a request is coming and gives the listener a chance to prepare. Diving straight into a request without this preface would feel abrupt and inconsiderate."},

    {type:"teach", trg:"〜ていただけないでしょうか", src:"would it be possible for you to ~? (very polite request)", pos:"part", gender:null,
     note:"て-form + いただけない (cannot receive) + でしょうか (I wonder).\nThe most polite standard request form.",
     example:"A: この資料(しりょう)を確認(かくにん)していただけないでしょうか？\nB: はい、かしこまりました。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Would it be possible for you to check this document?\nB: Yes, certainly.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"ていただけないでしょうか is the pinnacle of polite requests. It uses negative potential (cannot) + doubt (I wonder), creating extreme indirectness: 'I wonder if it might not be possible for you to...' This triple-layer politeness shows maximum respect for the listener's time and willingness."},

    {type:"teach", trg:"ちょっと難(むずか)しいです", src:"that would be a bit difficult (polite refusal)", pos:"intj", gender:null,
     note:"Standard indirect refusal. ちょっと (a little) + 難(むずか)しい (difficult).\nDoes NOT mean 'a little difficult.' It means NO.",
     example:"A: 明日(あした)手伝(てつだ)っていただけますか？\nB: 明日(あした)はちょっと難(むずか)しいです...。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: Could you help me tomorrow?\nB: Tomorrow would be a bit difficult...\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ちょっと難(むずか)しいです is THE Japanese refusal. Foreign learners must understand: this does NOT mean 'it is slightly difficult but maybe possible.' It means NO. Japanese indirectness uses ちょっと (a little) as a powerful softener. Other indirect refusals: ちょっと考(かんが)えさせてください (let me think about it) also usually means no."},

    {type:"teach", trg:"考(かんが)えさせてください", src:"please let me think about it", pos:"intj", gender:null,
     note:"考(かんが)える (to think) + させて (causative) + ください.\nOften a polite way to decline without saying no directly.",
     example:"A: 一緒(いっしょ)にプロジェクトをやりませんか？\nB: 少(すこ)し考(かんが)えさせてください。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Would you like to do a project together?\nB: Please let me think about it.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"考(かんが)えさせてください buys time and often signals reluctance. If someone says this after a simple request, they likely want to refuse but need time to find a polite way. However, it can also be genuine deliberation. Context and follow-up determine which. If no follow-up comes, it was a gentle no."},

    {type:"mc", q:"ちょっと難(むずか)しいです in context usually means:", opts:["It is slightly difficult but possible","Definitely no (polite indirect refusal)","Please try harder","I need more information"], ans:"Definitely no (polite indirect refusal)",
     hint:"This is the classic Japanese i... r.... ちょっと softens what is actually a firm no."},

    {type:"teach", trg:"申(もう)し訳(わけ)ないのですが", src:"I am sorry but ~ (preface before refusing)", pos:"intj", gender:null,
     note:"申(もう)し訳(わけ)ない (no excuse) + のですが (explanatory + but).\nSoftens the refusal that follows.",
     example:"A: 来週(らいしゅう)の会議(かいぎ)に出(で)られますか？\nB: 申(もう)し訳(わけ)ないのですが、別(べつ)の用事(ようじ)があります。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Can you attend next week's meeting?\nB: I am sorry, but I have other plans.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"申(もう)し訳(わけ)ないのですが is the formal refusal preface. It combines deep apology with explanatory trailing. The のですが creates a soft landing for the refusal. In business, this phrase is almost mandatory before any no. Skipping it and jumping to the refusal would feel cold and unprofessional."},

    {type:"teach", trg:"〜かねます", src:"cannot do ~ (polite, firm refusal)", pos:"verb", gender:null,
     note:"Verb masu-stem + かねます = politely but firmly cannot.\n受(う)け入(い)れいたしかねます = we cannot accept.",
     example:"A: この条件(じょうけん)を受(う)け入(い)れてもらえますか？\nB: 申(もう)し訳(わけ)ございませんが、受(う)け入(い)れいたしかねます。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Can you accept these conditions?\nB: I am terribly sorry, but we cannot accept.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"かねます is the most polite way to firmly refuse in business Japanese. It attaches to the masu-stem: 受(う)け入(い)れ (accept) + かねます = cannot accept. Unlike できません (cannot do, straightforward), かねます implies 'I wish I could, but truly cannot.' It is used for contract negotiations, policy refusals, and formal business declining."},

    {type:"teach", trg:"用事(ようじ)", src:"errand / business / something to do", pos:"noun", gender:null,
     note:"Kanji: 用事. よう (use/business) + じ (matter/thing).\n用事(ようじ)がある = to have something to do.",
     example:"A: 今日(きょう)は用事(ようじ)があるので早(はや)く帰(かえ)ります。\nB: お疲(つか)れさまです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I have something to do today, so I will leave early.\nB: Good work today.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"用事 is the vague, all-purpose excuse. When you need to decline but do not want to specify why, 用事(ようじ)があります (I have something to do) provides plausible cover. Japanese social norms accept this without pressing for details. Asking 'what kind of 用事(ようじ)?' would be considered intrusive."},

    {type:"fb", s:"申(もう)し訳(わけ)ないのですが、別(べつ)の{1}があります。\n(I am sorry, but I have other plans.)", a:"用事(ようじ)", opts:["用事(ようじ)","時間(じかん)","気持(きも)ち","連絡(れんらく)"], sSrc:"I am sorry, but I have other plans.",
     hint:"The vague, all-purpose word for 'something to do' used when declining invitations."},

    {type:"teach", trg:"せっかくですが", src:"I appreciate the offer but ~ (declining politely)", pos:"intj", gender:null,
     note:"せっかく (with effort/kindly offered) + ですが (but).\nAcknowledges the other's effort before declining.",
     example:"A: 一緒(いっしょ)に食事(しょくじ)に行(い)きませんか？\nB: せっかくですが、今日(きょう)は用事(ようじ)があります。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Would you like to go to dinner together?\nB: I appreciate the offer, but I have something to do today.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"せっかくですが is the gracious decline. せっかく acknowledges the other person's kind effort in inviting or offering. Adding ですが (but) before the refusal shows you value their gesture. It is much warmer than a direct no. The listener feels respected even while being turned down."},

    {type:"teach", trg:"気(き)が進(すす)まない", src:"not feel like doing / be reluctant", pos:"verb", gender:null,
     note:"気(き) (spirit/mood) + が + 進(すす)まない (not advance).\nKanji: 気が進まない. Your spirit does not move forward.",
     example:"A: 飲(の)み会(かい)に行(い)きたくないです。\nB: 気(き)が進(すす)まないなら、無理(むり)しなくていいですよ。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I do not want to go to the drinking party.\nB: If you are not feeling up to it, you do not have to force yourself.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"気(き)が進(すす)まない is a gentle way to express reluctance without direct refusal. Your '気(き)' (spirit/energy) simply 'does not advance' toward the activity. It is less harsh than いやだ (I dislike it) and more honest than ちょっと (a bit...). Japanese has many 気(き)-phrases: 気(き)になる (to be curious), 気(き)をつける (to be careful)."},

    {type:"mc", q:"かねます expresses:", opts:["A casual maybe","A polite but firm refusal","Enthusiastic agreement","A question"], ans:"A polite but firm refusal",
     hint:"This business-level form attaches to verb stems and means 'regrettably cannot do.'"},

    {type:"tip", title:"Request & Refusal Levels",
     text:"Request (casual to formal):\n1. てくれない？ (won't you? casual)\n2. てもらえますか？ (could you? polite)\n3. ていただけますか？ (could you kindly? formal)\n4. ていただけないでしょうか？ (would it be possible? very formal)\n\nRefusal (indirect to direct):\n1. ちょっと... (trailing off, vaguest)\n2. ちょっと難(むずか)しいです (it is a bit difficult)\n3. 考(かんが)えさせてください (let me think about it)\n4. 申(もう)し訳(わけ)ないのですが... (I am sorry but...)\n5. 受(う)け入(い)れいたしかねます (we cannot accept, firmest)",
     deepDive:{title:"Why Japanese Avoids Direct Refusal",
      text:"Direct refusal in Japanese is rare because:\n\n1. Face preservation: saying no embarrasses both parties.\n2. Relationship maintenance: refusal can damage trust.\n3. Ambiguity value: leaving room allows future flexibility.\n4. Cultural norm: indirectness shows sophistication.\n\nForeign business people sometimes miss Japanese refusals because they expect the word いいえ (no). Instead, listen for: ちょっと, 難(むずか)しい, 考(かんが)えさせてください, and 申(もう)し訳(わけ)ないのですが. If you hear these, the answer is no."}},

    {type:"match", pairs:[{trg:"お願(ねが)いがあるんですが",src:"I have a favor to ask"},{trg:"ちょっと難(むずか)しいです",src:"that is difficult (= no)"},{trg:"考(かんが)えさせてください",src:"let me think about it"},{trg:"せっかくですが",src:"I appreciate the offer, but"}]},

    {type:"fb", s:"申(もう)し訳(わけ)ございませんが、受(う)け入(い)れいたし{1}。\n(I am terribly sorry, but we cannot accept.)", a:"かねます", opts:["かねます","ません","できません","しません"], sSrc:"I am terribly sorry, but we cannot accept.",
     hint:"The polite firm-refusal suffix that attaches to the masu-stem. Implies 'I wish I could but cannot.'"},

    {type:"match", pairs:[{trg:"ていただけないでしょうか",src:"would it be possible?"},{trg:"かねます",src:"cannot do (polite firm)"},{trg:"用事(ようじ)",src:"errand/something to do"},{trg:"気(き)が進(すす)まない",src:"not feel like doing"}]},

    {type:"mc", q:"せっかくですが functions as:", opts:["An enthusiastic acceptance","A gracious preface before declining","A formal greeting","A way to ask for more information"], ans:"A gracious preface before declining",
     hint:"せっかく acknowledges the other's kind effort b... the speaker gently turns down the offer."},
  {type:"match",pairs:[{trg:"申(もう)し訳(わけ)ないのですが",src:"I am sorry but ~ (preface before refusing)"}]}]
};
export default BATCH2_L_2;
