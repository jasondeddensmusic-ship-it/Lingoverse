// B2 Lesson 03: Change & Progress
// Words: 감소, 감소되다, 가능, 가능해지다, 급증하다, 급격히, 급속히, 강화하다, 개선되다, 개선하다,
//        길어지다, 굳어지다, 가까워지다, 가득하다, 가득히, 거듭, 곧바로, 금세, 급히, 갚다

const LESSON_3 = {
  id:"kov2_b2_l3", title:"변화와 발전", icon:"\uD83D\uDCC8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Change & Progress",
     desc:"Learn vocabulary for describing changes, increases, decreases, and progression. These words are essential for TOPIK II academic reading passages about trends and developments.",
     goals:["Learn 20 words related to change and progress","Understand Sino-Korean compounds for increase and decrease","Describe trends and developments in formal Korean"]},

    {type:"teach", trg:"\uAC10\uC18C", src:"decrease; reduction", pos:"noun", gender:null,
     note:"Sino-Korean: reduce (減) + diminish (少).\nOpposite of 증가 (increase).",
     example:"A: \uCD9C\uC0DD\uB960 \uAC10\uC18C\uAC00 \uC2EC\uAC01\uD574\uC694.\nB: \uB124, \uB9E4\uB144 \uAC10\uC18C\uD558\uACE0 \uC788\uC5B4\uC694.\nA: \uC778\uAD6C \uAC10\uC18C\uC758 \uC6D0\uC778\uC774 \uBB50\uC608\uC694?\nB: \uACBD\uC81C\uC801 \uBD80\uB2F4\uC774 \uD06C\uC8E0.",
     exampleSrc:"A: The decline in birth rate is serious.\nB: Yes, it is decreasing every year.\nA: What is the cause of population decrease?\nB: The economic burden is heavy.",
     funFact:"South Korea has the world's lowest birth rate. 인구 감소 (population decrease) is one of the most discussed social issues."},

    {type:"teach", trg:"\uAC10\uC18C\uB418\uB2E4", src:"to be decreased; to decline (passive)", pos:"verb", gender:null,
     note:"Passive form of 감소하다. The decrease happens by itself.",
     example:"A: \uBC94\uC8C4\uC728\uC774 \uAC10\uC18C\uB418\uC5C8\uC5B4\uC694.\nB: \uC5B4\uB5BB\uAC8C \uAC10\uC18C\uB41C \uAC70\uC608\uC694?\nA: CCTV\uAC00 \uB298\uC5B4\uB09C \uB355\uBD84\uC774\uC5D0\uC694.\nB: \uAE30\uC220 \uBC1C\uC804\uC758 \uAE0D\uC815\uC801 \uD6A8\uACFC\uB124\uC694.",
     exampleSrc:"A: The crime rate has decreased.\nB: How did it decrease?\nA: It is thanks to more CCTV cameras.\nB: That is a positive effect of technological development.",
     funFact:"Korean grammar distinguishes active 감소하다 (something decreases) from passive 감소되다 (something is decreased). News reports prefer the passive."},

    {type:"teach", trg:"\uAC00\uB2A5", src:"possibility; being possible", pos:"noun", gender:null,
     note:"Sino-Korean: can/able (可) + able (能).\nUsed with -하다 to mean 'possible.'",
     example:"A: \uBCC0\uACBD\uC774 \uAC00\uB2A5\uD55C\uAC00\uC694?\nB: \uB124, \uC608\uC57D \uBCC0\uACBD \uAC00\uB2A5\uD569\uB2C8\uB2E4.\nA: \uCDE8\uC18C\uB3C4 \uAC00\uB2A5\uD574\uC694?\nB: 24\uC2DC\uAC04 \uC804\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: Is a change possible?\nB: Yes, reservation changes are possible.\nA: Is cancellation also possible?\nB: It is possible until 24 hours before.",
     funFact:"가능 and its opposite 불가능 (impossible) are among the most common Sino-Korean words in everyday Korean."},

    {type:"teach", trg:"\uAC00\uB2A5\uD574\uC9C0\uB2E4", src:"to become possible", pos:"verb", gender:null,
     note:"Compound: possible (가능) + become (해지다).\nDescribes something newly becoming achievable.",
     example:"A: \uC778\uD130\uB137\uC73C\uB85C \uB9CE\uC740 \uAC83\uC774 \uAC00\uB2A5\uD574\uC84C\uC5B4\uC694.\nB: \uB9DE\uC544\uC694, \uC628\uB77C\uC778 \uC218\uC5C5\uB3C4 \uAC00\uB2A5\uD574\uC84C\uC8E0.\nA: \uC7AC\uD0DD\uADFC\uBB34\uB3C4 \uAC00\uB2A5\uD574\uC84C\uC5B4\uC694.\nB: \uAE30\uC220 \uB355\uBD84\uC5D0 \uC0DD\uD65C\uC774 \uD3B8\uD574\uC84C\uC5B4\uC694.",
     exampleSrc:"A: Many things became possible through the internet.\nB: Yes, online classes became possible too.\nA: Working from home also became possible.\nB: Life has become more convenient thanks to technology.",
     funFact:"The pattern -해지다 (to become) is extremely productive: 편리해지다 (become convenient), 유명해지다 (become famous), 가능해지다 (become possible)."},

    {type:"teach", trg:"\uAE09\uC99D\uD558\uB2E4", src:"to surge; to increase rapidly", pos:"verb", gender:null,
     note:"Sino-Korean: sudden (急) + increase (增) + do (하다).",
     example:"A: \uC628\uB77C\uC778 \uC1FC\uD551\uC774 \uAE09\uC99D\uD588\uC5B4\uC694.\nB: \uCF54\uB85C\uB098 \uC774\uD6C4\uB85C \uB354 \uAE09\uC99D\uD588\uC8E0.\nA: \uBC30\uB2EC \uC11C\uBE44\uC2A4 \uC218\uC694\uB3C4 \uAE09\uC99D\uD588\uC5B4\uC694.\nB: \uC0DD\uD65C \uD328\uD134\uC774 \uC644\uC804\uD788 \uBCC0\uD588\uC5B4\uC694.",
     exampleSrc:"A: Online shopping has surged.\nB: It surged even more after COVID.\nA: Delivery service demand also surged.\nB: Lifestyle patterns have completely changed.",
     funFact:"급증 is the opposite of 급감 (rapid decrease). Both are common in Korean news headlines about statistics."},

    {type:"mc",
     q:"\uCD9C\uC0DD\uB960\uC774 \uB9E4\uB144 \uB0AE\uC544\uC9C0\uACE0 \uC788\uC5B4\uC694. \uC774\uAC83\uC740?",
     opts:["\uAC10\uC18C","\uAE09\uC99D","\uAC15\uD654","\uAC1C\uC120"],
     ans:"\uAC10\uC18C",
     hint:"This Sino-Korean word means numbers are going down, not up."},

    {type:"teach", trg:"\uAE09\uACA9\uD788", src:"drastically; sharply", pos:"adv", gender:null,
     note:"Sino-Korean: sudden (急) + hit/strike (激) + -ly (히).\nDescribes abrupt, dramatic change.",
     example:"A: \uBB3C\uAC00\uAC00 \uAE09\uACA9\uD788 \uC62C\uB790\uC5B4\uC694.\nB: \uD2B9\uD788 \uC2DD\uB8CC\uD488 \uAC00\uACA9\uC774\uC694.\nA: \uC0DD\uD65C\uBE44\uAC00 \uAE09\uACA9\uD788 \uBCC0\uD588\uC5B4\uC694.\nB: \uC808\uC57D\uC774 \uD544\uC694\uD574\uC84C\uC5B4\uC694.",
     exampleSrc:"A: Prices have risen drastically.\nB: Especially food prices.\nA: Living costs have changed sharply.\nB: Saving has become necessary.",
     funFact:"급격히 and 급속히 are near-synonyms, but 급격히 emphasizes the sharpness of change while 급속히 emphasizes speed."},

    {type:"teach", trg:"\uAE09\uC18D\uD788", src:"rapidly; at high speed", pos:"adv", gender:null,
     note:"Sino-Korean: sudden (急) + speed (速) + -ly (히).\nEmphasizes speed of change.",
     example:"A: \uAE30\uC220\uC774 \uAE09\uC18D\uD788 \uBC1C\uC804\uD558\uACE0 \uC788\uC5B4\uC694.\nB: AI \uAE30\uC220\uC774 \uD2B9\uD788 \uAE09\uC18D\uD788 \uBC1C\uC804\uD588\uC8E0.\nA: \uC0AC\uD68C\uAC00 \uAE09\uC18D\uD788 \uBCC0\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC801\uC751\uD558\uAE30 \uC5B4\uB824\uC6B8 \uC815\uB3C4\uC608\uC694.",
     exampleSrc:"A: Technology is developing rapidly.\nB: AI technology developed especially rapidly.\nA: Society is changing rapidly.\nB: It is hard to keep up.",
     funFact:"급속히 is the standard adverb for describing Korea's compressed modernization, often called 급속한 경제 성장 (rapid economic growth)."},

    {type:"teach", trg:"\uAC15\uD654\uD558\uB2E4", src:"to strengthen; to reinforce", pos:"verb", gender:null,
     note:"Sino-Korean: strong (強) + transform (化) + do (하다).",
     example:"A: \uBCF4\uC548\uC744 \uAC15\uD654\uD574\uC57C \uD574\uC694.\nB: \uBE44\uBC00\uBC88\uD638\uB97C \uBCC0\uACBD\uD560\uAE4C\uC694?\nA: \uB124, \uBCF4\uC548 \uC815\uCC45\uC744 \uAC15\uD654\uD569\uC2DC\uB2E4.\nB: 2\uB2E8\uACC4 \uC778\uC99D\uB3C4 \uCD94\uAC00\uD558\uC138\uC694.",
     exampleSrc:"A: We need to strengthen security.\nB: Shall we change the password?\nA: Yes, let us strengthen the security policy.\nB: Add two-factor authentication too.",
     funFact:"강화 literally means 'becoming strong.' Ganghwa Island (강화도) shares the same characters, named for its strategic defensive role."},

    {type:"teach", trg:"\uAC1C\uC120\uB418\uB2E4", src:"to be improved (passive)", pos:"verb", gender:null,
     note:"Sino-Korean: open/begin (開) + good (善) + become (되다).\nPassive: improvement happens.",
     example:"A: \uAD50\uD1B5 \uC0C1\uD669\uC774 \uAC1C\uC120\uB418\uC5C8\uC5B4\uC694.\nB: \uC0C8 \uB3C4\uB85C \uB355\uBD84\uC774\uC5D0\uC694.\nA: \uCD9C\uD1F4\uADFC \uC2DC\uAC04\uC774 \uC904\uC5C8\uC5B4\uC694.\nB: \uC0DD\uD65C\uC774 \uD6E8\uC52C \uAC1C\uC120\uB418\uC5C8\uC8E0.",
     exampleSrc:"A: The traffic situation has improved.\nB: It is thanks to the new road.\nA: Commuting time has decreased.\nB: Life has improved considerably.",
     funFact:"개선 uses the hanja 善 (good/virtuous), conveying that improvement moves toward something morally or practically better."},

    {type:"teach", trg:"\uAC1C\uC120\uD558\uB2E4", src:"to improve; to make better", pos:"verb", gender:null,
     note:"Active form of 개선되다. You actively make the improvement.",
     example:"A: \uC11C\uBE44\uC2A4\uB97C \uAC1C\uC120\uD574\uC57C \uD569\uB2C8\uB2E4.\nB: \uACE0\uAC1D \uD53C\uB4DC\uBC31\uC744 \uBC18\uC601\uD569\uC2DC\uB2E4.\nA: \uC5B4\uB5A4 \uBD80\uBD84\uC744 \uAC1C\uC120\uD560\uAE4C\uC694?\nB: \uBC30\uC1A1 \uC18D\uB3C4\uB97C \uAC1C\uC120\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: We need to improve the service.\nB: Let us reflect customer feedback.\nA: Which part should we improve?\nB: Let us improve the delivery speed.",
     funFact:"Korean business culture uses 개선 extensively. The concept of continuous improvement (지속적 개선) echoes Japanese kaizen philosophy."},

    {type:"fb",
     s:"\uAE30\uC220\uC774 {1} \uBC1C\uC804\uD558\uACE0 \uC788\uC5B4\uC694.",
     a:["\uAE09\uC18D\uD788"],
     opts:["\uAE09\uC18D\uD788","\uCC9C\uCC9C\uD788","\uC870\uC6A9\uD788","\uAC00\uB9CC\uD788"],
     hint:"This adverb means 'at great speed' and is used for dramatic, fast-paced change.",
     sSrc:"Technology is developing {1}."},

    {type:"teach", trg:"\uAE38\uC5B4\uC9C0\uB2E4", src:"to become longer; to lengthen", pos:"verb", gender:null,
     note:"Pure Korean: long (길다) + become (-어지다).",
     example:"A: \uB0AE\uC774 \uAE38\uC5B4\uC84C\uC5B4\uC694.\nB: \uBD04\uC774 \uC624\uACE0 \uC788\uB098 \uBD10\uC694.\nA: \uD574\uAC00 \uAE38\uC5B4\uC9C0\uBA74 \uAE30\uBD84\uC774 \uC88B\uC544\uC838\uC694.\nB: \uC800\uB3C4 \uBD04\uC774 \uC81C\uC77C \uC88B\uC544\uC694.",
     exampleSrc:"A: The days have gotten longer.\nB: Spring must be coming.\nA: When days lengthen, my mood improves.\nB: I like spring the best too.",
     funFact:"The -어지다 pattern is one of Korean's most important change markers. It turns adjectives into 'become' verbs: 짧다 (short) > 짧아지다 (become shorter)."},

    {type:"teach", trg:"\uAD73\uC5B4\uC9C0\uB2E4", src:"to harden; to solidify; to become rigid", pos:"verb", gender:null,
     note:"Pure Korean: hard/firm (굳다) + become (-어지다).",
     example:"A: \uC2DC\uBA58\uD2B8\uAC00 \uAD73\uC5B4\uC84C\uC5B4\uC694.\nB: \uB124, \uC774\uC81C \uAC74\uBB3C\uC774 \uC644\uC131\uB41C \uAC70\uC608\uC694.\nA: \uD0DC\uB3C4\uAC00 \uAD73\uC5B4\uC9C0\uBA74 \uBCC0\uD654\uAC00 \uC5B4\uB824\uC6CC\uC694.\nB: \uC720\uC5F0\uD558\uAC8C \uC0DD\uAC01\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: The cement has hardened.\nB: Yes, the building is now complete.\nA: When attitudes become rigid, change is difficult.\nB: We need to think flexibly.",
     funFact:"굳어지다 is often used metaphorically: 표정이 굳어지다 (expression hardens/freezes), 관습이 굳어지다 (customs become rigid)."},

    {type:"teach", trg:"\uAC00\uAE4C\uC6CC\uC9C0\uB2E4", src:"to become closer; to draw near", pos:"verb", gender:null,
     note:"Pure Korean: close (가깝다) + become (-워지다).\nIrregular: ㅂ becomes 워.",
     example:"A: \uC2DC\uD5D8\uC774 \uAC00\uAE4C\uC6CC\uC84C\uC5B4\uC694.\nB: \uC900\uBE44 \uC798 \uD558\uACE0 \uC788\uC5B4\uC694?\nA: \uCE5C\uAD6C\uC640 \uB354 \uAC00\uAE4C\uC6CC\uC84C\uC5B4\uC694.\nB: \uC88B\uC740 \uAD00\uACC4\uB124\uC694.",
     exampleSrc:"A: The exam is getting closer.\nB: Are you preparing well?\nA: I have become closer with my friend.\nB: That is a good relationship.",
     funFact:"가까워지다 works for both physical distance and emotional closeness, making it versatile in Korean storytelling."},

    {type:"teach", trg:"\uAC00\uB4DD\uD558\uB2E4", src:"to be full; to be filled", pos:"adj", gender:null,
     note:"Pure Korean adjective. Describes being completely full.",
     example:"A: \uBC29\uC774 \uC0AC\uB78C\uC73C\uB85C \uAC00\uB4DD\uD574\uC694.\nB: \uC778\uAE30\uAC00 \uB9CE\uB124\uC694.\nA: \uAC00\uC2B4\uC774 \uAC10\uC0AC\uB85C \uAC00\uB4DD\uD574\uC694.\nB: \uC800\uB3C4 \uAC10\uC0AC\uD55C \uB9C8\uC74C\uC774\uC5D0\uC694.",
     exampleSrc:"A: The room is full of people.\nB: It is very popular.\nA: My heart is full of gratitude.\nB: I feel grateful too.",
     funFact:"가득하다 vs 가득 차다: 가득하다 describes the state of being full, while 가득 차다 emphasizes the process of becoming full."},

    {type:"teach", trg:"\uAC00\uB4DD\uD788", src:"fully; to the brim", pos:"adv", gender:null,
     note:"Adverb form of 가득하다. Used before verbs.",
     example:"A: \uCEF5\uC5D0 \uBB3C\uC744 \uAC00\uB4DD\uD788 \uB2F4\uC558\uC5B4\uC694.\nB: \uB118\uCE58\uC9C0 \uC54A\uAC8C \uC870\uC2EC\uD558\uC138\uC694.\nA: \uC0AC\uB791\uC744 \uAC00\uB4DD\uD788 \uB2F4\uC544 \uBCF4\uB0BC\uAC8C\uC694.\nB: \uACE0\uB9C8\uC6B4 \uB9D0\uC774\uB124\uC694.",
     exampleSrc:"A: I filled the cup to the brim.\nB: Be careful not to spill it.\nA: I will send it filled with love.\nB: Those are kind words.",
     funFact:"가득히 is the formal/literary form. In everyday speech, 가득 alone (without 히) is more common as an adverb."},

    {type:"teach", trg:"\uAC70\uB4ED", src:"repeatedly; again and again", pos:"adv", gender:null,
     note:"Pure Korean adverb. Emphasizes repetition.",
     example:"A: \uAC70\uB4ED \uC2E4\uD328\uD588\uC9C0\uB9CC \uD3EC\uAE30\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694.\nB: \uADF8 \uB178\uB825\uC774 \uB300\uB2E8\uD574\uC694.\nA: \uAC70\uB4ED \uB3C4\uC804\uD558\uBA74 \uC131\uACF5\uD560 \uC218 \uC788\uC5B4\uC694.\nB: \uB9DE\uC544\uC694, \uD3EC\uAE30\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: I failed repeatedly but did not give up.\nB: That effort is admirable.\nA: If you challenge yourself again and again, you can succeed.\nB: That is right, not giving up is important.",
     funFact:"거듭 often appears in formal/literary Korean. The expression 거듭 사과하다 (to apologize repeatedly) is common in news."},

    {type:"teach", trg:"\uACE7\uBC14\uB85C", src:"immediately; right away; straight", pos:"adv", gender:null,
     note:"Pure Korean compound: soon/right (곧) + straight (바로).\nDouble emphasis on immediacy.",
     example:"A: \uD68C\uC758 \uB05D\uB098\uBA74 \uACE7\uBC14\uB85C \uC5F0\uB77D\uD574 \uC8FC\uC138\uC694.\nB: \uB124, \uACE7\uBC14\uB85C \uC804\uD654\uD560\uAC8C\uC694.\nA: \uACE7\uBC14\uB85C \uCD9C\uBC1C\uD574\uC57C \uD574\uC694.\nB: \uC900\uBE44\uB294 \uB2E4 \uB410\uC5B4\uC694.",
     exampleSrc:"A: Please contact me immediately after the meeting.\nB: Yes, I will call right away.\nA: We need to depart immediately.\nB: Everything is ready.",
     funFact:"곧바로 combines two words that both mean 'immediately': 곧 and 바로. This doubling is a common Korean intensification strategy."},

    {type:"teach", trg:"\uAE08\uC138", src:"in no time; instantly", pos:"adv", gender:null,
     note:"Pure Korean adverb. Describes something happening surprisingly fast.",
     example:"A: \uC2DC\uAC04\uC774 \uAE08\uC138 \uC9C0\uB098\uAC14\uC5B4\uC694.\nB: \uBCCC\uC368 \uC800\uB141\uC774\uB124\uC694.\nA: \uC544\uC774\uB4E4\uC774 \uAE08\uC138 \uCEE4\uC694.\nB: \uC815\uB9D0 \uBE60\uB974\uC8E0.",
     exampleSrc:"A: Time passed in no time.\nB: It is already evening.\nA: Children grow up so quickly.\nB: It is really fast.",
     funFact:"금세 is a contraction of 금시에 (at this moment). The original form is rarely used today, but 금세 remains very common."},

    {type:"teach", trg:"\uAE09\uD788", src:"urgently; in a hurry", pos:"adv", gender:null,
     note:"Sino-Korean: urgent (急) + -ly (히).",
     example:"A: \uAE09\uD788 \uBCD1\uC6D0\uC5D0 \uAC00\uC57C \uD574\uC694.\nB: \uBB34\uC2A8 \uC77C\uC774\uC5D0\uC694?\nA: \uC544\uBC84\uC9C0\uAC00 \uC4F0\uB7EC\uC9C0\uC168\uC5B4\uC694.\nB: \uAE09\uD788 \uAC00\uC138\uC694, \uC81C\uAC00 \uD0DD\uC2DC \uBD88\uB7EC\uC904\uAC8C\uC694.",
     exampleSrc:"A: I need to go to the hospital urgently.\nB: What happened?\nA: My father collapsed.\nB: Go quickly, I will call a taxi for you.",
     funFact:"급히 is the base form. Related words: 급하다 (to be urgent), 급한 (urgent), 긴급 (emergency). All share the hanja 急."},

    {type:"teach", trg:"\uAC1A\uB2E4", src:"to repay; to pay back", pos:"verb", gender:null,
     note:"Pure Korean verb. Used for debts, favors, and grudges.",
     example:"A: \uBE4C\uB9B0 \uB3C8\uC744 \uAC1A\uC544\uC57C \uD574\uC694.\nB: \uC5B8\uC81C\uAE4C\uC9C0 \uAC1A\uC744 \uC218 \uC788\uC5B4\uC694?\nA: \uB2E4\uC74C \uB2EC\uAE4C\uC9C0 \uAC1A\uC744\uAC8C\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uCC9C\uCC9C\uD788 \uD558\uC138\uC694.",
     exampleSrc:"A: I need to pay back the money I borrowed.\nB: When can you repay it?\nA: I will repay it by next month.\nB: Okay, take your time.",
     funFact:"갚다 is used both for money (빚을 갚다) and metaphorically: 은혜를 갚다 (repay kindness), 원수를 갚다 (take revenge)."},

    {type:"mc",
     q:"\uC628\uB77C\uC778 \uC1FC\uD551\uC774 \uD06C\uAC8C \uB298\uC5B4\uB09C \uAC83\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAE09\uC99D\uD588\uB2E4","\uAC10\uC18C\uB418\uC5C8\uB2E4","\uAC1C\uC120\uB418\uC5C8\uB2E4","\uAD73\uC5B4\uC84C\uB2E4"],
     ans:"\uAE09\uC99D\uD588\uB2E4",
     hint:"This verb means a sudden, dramatic increase in quantity or volume."},

    {type:"match", pairs:[
      {trg:"\uAC10\uC18C", src:"decrease"},
      {trg:"\uAE09\uC99D\uD558\uB2E4", src:"surge"},
      {trg:"\uAC15\uD654\uD558\uB2E4", src:"strengthen"},
      {trg:"\uAC1C\uC120\uD558\uB2E4", src:"improve"},
      {trg:"\uAE09\uACA9\uD788", src:"drastically"},
      {trg:"\uAE09\uC18D\uD788", src:"rapidly"}
    ]}
  ]
};
export default LESSON_3;
