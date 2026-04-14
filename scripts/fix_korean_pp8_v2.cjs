#!/usr/bin/env node
/**
 * fix_korean_pp8_v2.cjs
 * Second pass: fixes all remaining HINT_LEAK and VISUAL_LEAK violations in Korean v2 units.
 * Replaces old hint/question strings with clean versions that do NOT contain answer words.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'korean-v2');

// Each entry: { file: 'hint', old: '...', new: '...' }
// or { file: 'q', old: '...', new: '...' } for visual leaks
const FIXES = [
  // ============================================================
  // VISUAL LEAK FIXES (rewrite question to not contain answer)
  // ============================================================
  // ans="이에요" in question text
  { t:'q', old:`In '저는 학생이에요', the predicate that completes the identity statement is:`,
    new:`What is the predicate that completes an identity statement like '저는 학생___'?` },
  { t:'q', old:`저는 학생이에요. The verb is:`,
    new:`In '저는 학생___', what copula verb links the subject to the noun?` },
  // ans="먹" in question text (several)
  { t:'q', old:`Remove the dictionary ending from 먹다. What is the bare stem?`,
    new:`Which part of the verb 'to eat' remains after stripping the dictionary suffix?` },
  { t:'q', old:`Separate 먹어요 into its stem and polite ending. What is the stem alone?`,
    new:`The polite form of 'to eat' ends in 어요. What is the part before the polite ending?` },
  { t:'q', old:`To make 먹어요 casual, remove the politeness marker. The result is:`,
    new:`Drop -요 from the polite verb 'to eat' to get the casual form. What remains?` },
  { t:'q', old:`To speak casually (반말), drop the polite ending. What does 먹어요 become?`,
    new:`Casual (반말) form: which option is the polite eating verb with -요 removed?` },
  // ans="가" in question
  { t:'q', old:`Remove the dictionary ending from 가다. What is the bare stem?`,
    new:`Which part of the verb 'to go' remains after stripping the dictionary suffix?` },
  // ans="있"
  { t:'q', old:`Strip the dictionary suffix from 있다. What remains as the stem?`,
    new:`Which part of the existence verb 있다 is left when you remove the dictionary suffix?` },
  // ans="이" in question
  { t:'q', old:`In '시간이 없어요', the noun 시간 ends in a consonant. Which subject particle follows?`,
    new:`When a noun ends in a consonant, which subject/topic marker is attached? (e.g., 시간 + ?)` },
  // ans="김"
  { t:'q', old:`In a full Korean name written as 김민수, which part is the family name?`,
    new:`In a three-syllable Korean name, is the family name the first or last syllable group?` },
  // ans="이에요" in different question
  // ans="먹었어요"
  { t:'q', old:`In '어제 저는 학교에서 점심을 먹었어요', identify the main predicate (verb):`,
    new:`What is the main predicate (final verb) in '어제 저는 학교에서 점심을 ___'?` },
  // ans="싸다"
  { t:'q', old:`What is the antonym of 비싸다 (expensive)?`,
    new:`비싸다 means expensive. What is the opposite adjective, meaning inexpensive?` },
  // ans="저는"
  { t:'q', old:`In the sentence '저는 커피를 마셔요', which word carries the topic marker?`,
    new:`In '___는 커피를 마셔요', which word is marked as the topic of the sentence?` },
  // ans="좋아"
  { t:'q', old:`Drop the polite ending from 좋아요 to get the casual form. Result:`,
    new:`Casual (반말) form: which option drops the formal ending from the adjective 'good'?` },
  // ans="B"
  { t:'q', old:`In the sentence 'A보다 B가 더 커요', which person is described as taller?`,
    new:`'X보다 Y가 더 커요' means Y is taller than X. In 'A보다 _가 더 커요', who is taller?` },
  // ans="등산하기로 했어요" (contains its own text)
  { t:'q', old:`Compare two expressions about hiking: one is a firm decision, one is a wish. Which shows the decision?`,
    new:`Which pattern expresses a firm decision already made: -기로 하다 or -고 싶다?` },
  // ans="좋은데"
  { t:'q', old:`When attaching -는데/-은데 to 좋다 (adjective), which spelling is grammatically correct?`,
    new:`Adjective + -는데 or -은데: for 좋다 (which ends in 받침 ㅎ), which form is correct?` },
  // ans="먹어" (casual)
  // These two remaining ones need alternate phrasing
  // ans="걸려요"
  { t:'q', old:`Answer the duration question: 학교까지 얼마나 ___? → 30분 ___.`,
    new:`학교까지 30분 ___. Which verb means 'it takes (time)' to fill this gap?` },
  // ans="합격했어요"
  { t:'q', old:`면접에 합격했어요! What happened?`,
    new:`면접에 ___! The speaker passed the interview. What does 합격하다 mean?` },
  // ans="반대말"
  { t:'q', old:`찬성의 반대말은?`,
    new:`찬성 means 'in favor.' What is the opposite word meaning 'against/opposition'?` },
  // ans="대신에"
  { t:'q', old:`커피 대신에 차를 마시겠습니다. '대신에' means:`,
    new:`커피 ___ 차를 마시겠습니다. What does the particle that means 'instead of' express?` },

  // ============================================================
  // HINT LEAK FIXES
  // ============================================================
  // Unit 01
  { t:'h', old:`-요 at the end = polite speech (해요체). You're in this register from day `,
    new:`The ending on polite verbs signals a specific speech register used in daily conversation.` },
  // Unit 05
  { t:'h', old:`예쁘다 → 예쁜 (modifier form)`,
    new:`Convert the beauty adjective to its modifier form to describe a noun.` },
  // Unit 08
  { t:'h', old:`Consonant stems need 을 before 수 있어요. Check which word ends in a conson`,
    new:`Ability: consonant-ending stems need a vowel bridge before the ability form.` },
  // Unit 09 - future tense hints
  { t:'h', old:`Express future intent with 거예요. Vowel stems attach ㄹ directly.`,
    new:`Vowel stems form future intent by attaching ㄹ directly to the stem.` },
  { t:'h', old:`Plan to eat something. Consonant stems need 을 before 거예요.`,
    new:`Plan to eat: consonant stems need a vowel bridge before the future form.` },
  { t:'h', old:`Vowel stem future: attach ㄹ directly and add 거예요 for the plan.`,
    new:`Vowel stems attach ㄹ directly when expressing a future plan.` },
  { t:'h', old:`Plan to watch something. This vowel stem verb takes ㄹ directly before `,
    new:`Vowel stem verbs attach ㄹ directly when forming future intent sentences.` },
  // Transport
  { t:'h', old:`-로 (by means of) + conditional + contrast: comparing transport options`,
    new:`Combine method of transport with a conditional and contrast for two ways to travel.` },
  // Taxi scene
  { t:'h', old:`-는데 for narrative background: setting up the taxi scene before the mai`,
    new:`The background connector sets the scene before the main point is made.` },
  // ㅎ-irregular
  { t:'h', old:`ㅎ-irregular adjectives: 노랗다 → 노란 (ㅎ drops, ㄴ modifier). Same as 빨갛다 → `,
    new:`Color adjectives of this irregular class drop the final consonant when adding a modifier.` },
  // Experience
  { t:'h', old:`Have NEVER = -(으)ㄴ 적이 없다. Which option uses the correct past modifier `,
    new:`The 'have never done' structure pairs a past modifier with an absence expression.` },
  // -는데 + -아/어서
  { t:'h', old:`-는데 provides background context, -아/어서 gives the reason for the action`,
    new:`One connector sets background; the other provides the direct cause for an action.` },
  // copula -는데
  { t:'h', old:`The copula 이다 changes form when -는데 is attached. What is the copula-ba`,
    new:`When the copula attaches -는데, its form changes. Which ending results?` },
  // -고 있다 + -는데
  { t:'h', old:`Progressive + -는데 for background. The situation contrasts with difficu`,
    new:`An ongoing action sets the background, then the contrast follows.` },
  // -는데 + -는 편이다
  { t:'h', old:`-는데 (contrast) + -는 편이다 (tendency): contrasting quality with price ten`,
    new:`Contrast connector plus tendency expression: one quality contrasts with a price habit.` },
  // -네요 vs -군요
  { t:'h', old:`-네요 = 'Oh!' (spontaneous). -군요 = 'I see...' (processing the informatio`,
    new:`One ending expresses immediate surprise; the other reflects on newly received information.` },
  { t:'h', old:`You're seeing it right now. Flowers blooming = direct experience. Surp`,
    new:`Witnessing something beautiful unfolding right now calls for a spontaneous reaction.` },
  { t:'h', old:`-네요 = speaker is surprised by what they directly observe or experience`,
    new:`Direct first-hand observation triggers this spontaneous reaction ending.` },
  // 르-irregular
  { t:'h', old:`르 splits: ㄹ goes to 부 → 불. 부 has ㅜ (dark) → 불 + 러요. 불러요.`,
    new:`르-irregular: the ㄹ moves to the preceding syllable and the 르 becomes 러/라 based on vowel.` },
  { t:'h', old:`르 splits: ㄹ → 빠 becomes 빨. Bright vowel → 빨라요.`,
    new:`르-irregular with bright vowel: the ㄹ moves to the preceding syllable and the 르 becomes 라.` },
  { t:'h', old:`르-irregular: 르 splits into ㄹ+ㄹ before a vowel. 모르→몰라→몰랐어요.`,
    new:`This 르-irregular verb means 'not knowing.' The ㄹ moves to the stem before vowel endings.` },
  // -(으)니까
  { t:'h', old:`-(으)니까 = because/since (strong reason). Used with commands/suggestions`,
    new:`The strong causal connector is preferred when the main clause is a command or suggestion.` },
  // -자마자 combos
  { t:'h', old:`Immediate (-자마자) + purpose (-(으)러 가다): two connectors combined.`,
    new:`Combine an immediacy connector with a movement-purpose connector in one sentence.` },
  // 몰라요
  { t:'h', old:`I don't know much (about hiking). 모르다 → 몰라요. 르-irregular.`,
    new:`The 르-irregular verb 'to not know' follows the ㄹ-splitting conjugation pattern.` },
  // -거든요 + -네요
  { t:'h', old:`-거든요 = 'you see, it's healthy.' -네요 = 'oh, the scenery is beautiful!' `,
    new:`Two discovery endings: one explains a reason to the listener; the other is spontaneous surprise.` },
  { t:'h', old:`A uses -네요 (observation surprise), B explains with -거든요 (reason).`,
    new:`A reacts to a direct observation; B provides an explanatory reason using a different ending.` },
  // -(으)ㄹ까요
  { t:'h', old:`-(으)ㄹ까요 for making and responding to suggestions.`,
    new:`This ending is used for proposals and suggestions that include the listener.` },
  { t:'h', old:`-(으)ㄹ까요 suggests or asks for opinion.`,
    new:`This proposal ending either suggests an action or asks the listener's preference.` },
  // -는데 at sentence end
  { t:'h', old:`-는데 at sentence end = showing interest and inviting response.`,
    new:`This background connector at sentence-end signals interest and invites the listener to react.` },
  // -자마자
  { t:'h', old:`-자마자 = immediately upon. No delay between arriving and showering.`,
    new:`The immediacy connector means no delay between two actions. One follows the other instantly.` },
  // -네요 drama
  { t:'h', old:`-네요: speaker is watching the drama right now and expressing surprise.`,
    new:`Watching something live and reacting in the moment calls for the spontaneous observation ending.` },
  // -(으)ㄹ수록
  { t:'h', old:`-(으)ㄹ수록 = the more. 공부하다 → 공부할수록.`,
    new:`The 'the more X, the more Y' pattern uses a specific connector. Apply it to the studying verb.` },
  // 먹어야 해요
  { t:'h', old:`먹 has dark vowel ㅓ. Dark → 어야. 먹어야 해요.`,
    new:`Dark vowel stems use 어야 before the obligation ending. The eating verb has dark vowel ㅓ.` },
  // 되다
  { t:'h', old:`가야 해요 = 가야 돼요. Same meaning. 되다 version is more conversational.`,
    new:`Two obligation forms exist. One uses a helping verb more common in spoken Korean.` },
  // 와야
  { t:'h', old:`오 + 아 contracts to 와. 와야 해요 = must come.`,
    new:`The 'come' verb has a bright vowel. Which obligation form results from vowel contraction?` },
  // -아/어도 되다
  { t:'h', old:`-아/어도 되다 = it is okay to, may. Asking for permission.`,
    new:`The permission pattern combines a concessive ending with a 'be okay' expression.` },
  // -(으)려고
  { t:'h', old:`-(으)려고 = in order to, intending to. 배우다 → 배우려고.`,
    new:`The purpose connector expresses intention. Apply it to the learning verb.` },
  { t:'h', old:`Purpose (-(으)려고) + progressive (-고 있다): working toward a goal.`,
    new:`Combine purpose-intention with the progressive to show actively working toward something.` },
  { t:'h', old:`-(으)려고 states the purpose/intention behind waiting.`,
    new:`The purpose/intention connector explains why someone is waiting.` },
  { t:'h', old:`-(으)려고 = in order to. The purpose is 수능 preparation.`,
    new:`State the purpose of attending hagwon using the intention connector.` },
  // 배우려면
  { t:'h', old:`배우다 → 배우려면. If you want to learn.`,
    new:`The conditional-purpose form: if you want to learn, you must... Apply it to the learning verb.` },
  // -(으)려면 fb
  { t:'h', old:`-(으)려면 = if you want to. 하다 → 하려면. Combines purpose with condition.`,
    new:`If-you-want-to conditional: apply this form to complete the sentence structure.` },
  { t:'h', old:`-(으)려면 (if you want to) + obligation (-아/어야 하다): classic career advice`,
    new:`Combine the conditional-purpose form with an obligation expression for career guidance.` },
  { t:'h', old:`-(으)려면 = if you want to. Purpose-condition + obligation.`,
    new:`The conditional-purpose form combined with obligation: the classic 'if you want X, you must Y' pattern.` },
  { t:'h', old:`-(으)려면 + -(으)ㅂ시다: conditional purpose + formal proposal.`,
    new:`Combine conditional-purpose with the formal proposal ending for a group suggestion.` },
  // -(으)라고
  { t:'h', old:`-(으)라고 hada = reported command. Boss commanded attendance.`,
    new:`Report a command someone received at work using the reported speech form for commands.` },
  { t:'h', old:`-(으)라고 하다 = reported command. Parents commanded: come home early.`,
    new:`Report what parents commanded using the indirect speech form for commands.` },
  { t:'h', old:`-(으)라고 하다 = reported command. Boss commanded attendance.`,
    new:`Report a command someone received at work using the reported speech form for commands.` },
  // -(으)려고 + -고 있다
  { t:'h', old:`-(으)려고 (in order to) + -고 있다 (progressive): working toward goal.`,
    new:`Purpose-intention combined with ongoing action: actively working toward a goal.` },
  // -(으)면 안 되다
  { t:'h', old:`-(으)면 안 되다 = prohibition. School rule against phone use.`,
    new:`School rule: using the prohibition form, express what is not allowed.` },
  { t:'h', old:`-(으)면 안 되다 = must not. 찍다 → 찍으면 안 되다.`,
    new:`The photography prohibition uses a conditional negation. Apply it to the photographing verb.` },
  // -기 때문에
  { t:'h', old:`-기 때문에 states the reason formally: because teamwork is important.`,
    new:`The formal reason connector nominalizes the verb. Teamwork is important, so...` },
  // -아/어야 하다
  { t:'h', old:`-아/어야 하다 = obligation. Must finish by the deadline.`,
    new:`Express obligation: must complete before the deadline using the obligation structure.` },
  // 드리다
  { t:'h', old:`드리다 = humble 주다. Use to/for people above you.`,
    new:`Two giving verbs: one is used neutrally, one shows humility toward a superior.` },
  // -아/어 주세요
  { t:'h', old:`-아/어 주세요 = please do for me. The others are offers or promises.`,
    new:`The request form asking someone to do something for you. Which option is a polite request?` },
  // -아/어 주다 variants
  { t:'h', old:`-아/어 주다 = do for someone. 돕다 → 도와 (ㅂ-irregular) + 주다.`,
    new:`The ㅂ-irregular helping verb combines with the benefactive form. What is the result?` },
  { t:'h', old:`-아/어 주다 (benefactive) + -(으)시- (honorific) for the teacher.`,
    new:`Add honorific respect and benefactive action together for addressing a teacher.` },
  { t:'h', old:`-아/어 주다 = do for someone. 이해하다 → 이해해 주다.`,
    new:`Apply the benefactive ending to the understanding verb for 'please understand for me.'` },
  { t:'h', old:`-아/어 주다 benefactive + -시- honorific + -더라고요 past observation.`,
    new:`Three layers: doing for someone + honorific respect + past personal observation.` },
  { t:'h', old:`-아/어 주다: do for someone. 읽다 → 읽어 주다 + honorific.`,
    new:`The reading verb with benefactive and honorific combined for reading aloud respectfully.` },
  // 때문에 + -고 있다
  { t:'h', old:`때문에 (because of, noun) + progressive -고 있다 for ongoing state.`,
    new:`A noun-cause followed by an ongoing progressive action. The situation is still happening.` },
  // -는 편이다
  { t:'h', old:`-는 편이다 = tend to, generally. States a general tendency about students.`,
    new:`The tendency expression describes what students generally lean toward doing.` },
  { t:'h', old:`-는 편이다 = tend to, on the ... side. States a general tendency.`,
    new:`General tendency: the subject leans toward a certain behavior or quality.` },
  { t:'h', old:`-는 편이다 = tendency. General statement about a group.`,
    new:`The group is being described in terms of a general leaning or tendency.` },
  // -게 되다 variants
  { t:'h', old:`-게 되다 shows a change that happened over time, not by deliberate decisi`,
    new:`A gradual, unplanned change over time—something you ended up doing rather than chose.` },
  { t:'h', old:`After (-(으)ㄴ 후에) + came to/ended up (-게 되다): sequence + natural change`,
    new:`After a sequence of events, a natural change occurred. Two grammar forms combined.` },
  { t:'h', old:`-게 되다 = came to (natural change). The past modifier -ㄴ connects 되다 to `,
    new:`A natural change combined with a past modifier and a reason noun: why it happened.` },
  { t:'h', old:`-게 되다 = come to do / end up doing. change of state.`,
    new:`A change-of-state expression: came to do something as a result of circumstances.` },
  { t:'h', old:`-게 되다 = come to, end up. A natural change, not a decision.`,
    new:`This change-of-state form describes something that happened naturally over time.` },
  // -게 (adverb)
  { t:'h', old:`-게 turns adjectives into adverbs: 빠르다 → 빠르게 (quickly).`,
    new:`The adverb-maker suffix converts adjectives. Fast = 빠르다 → quickly = ?` },
  // -아/어지다
  { t:'h', old:`-아/어지다 (become) in progressive: ongoing change of state.`,
    new:`An ongoing change-of-state: the subject is in the process of becoming something.` },
  // -아/어 보다 variants
  { t:'h', old:`-아/어 보다 = try doing. 먹다 → 먹어 보다.`,
    new:`Try doing something: attach the experiential ending to the eating verb.` },
  { t:'h', old:`-아/어 보다 in past tense: 살아 봤어요 = have you tried living?`,
    new:`Express having tried an experience in the past using the experiential past form.` },
  { t:'h', old:`-아/어 보다: 읽다 → 읽어 보다. Past: 읽어 봤는데.`,
    new:`Try reading something + contrast: apply the experiential past to the reading verb.` },
  { t:'h', old:`-아/어 보다 (experiential, U11) + -는데 (background/contrast, U13).`,
    new:`Experiential action combined with a background/contrast connector in one sentence.` },
  // Want + -는데
  { t:'h', old:`Want to try + -는데 contrast: three patterns combined.`,
    new:`Wanting to try + contrast connector + experience form: three grammar patterns combined.` },
  // 1st/3rd person -고 싶다
  { t:'h', old:`I want to pass. My own desire → direct -고 싶다.`,
    new:`First-person desire is expressed directly. The speaker wants to achieve success.` },
  { t:'h', old:`민수 is 3rd person. Should use 싶어해요 (observed wanting), not 싶어요 (direct)`,
    new:`Third-person desires use the observed form—we see them wanting, not feel it directly.` },
  { t:'h', old:`-고 싶어하다 for 3rd person. -고 싶다 is only for speaker (1st person).`,
    new:`Third-person desire uses the observed form; the internal desire form is only for the speaker.` },
  { t:'h', old:`3rd person plural: students want → -고 싶어해요 (not 싶어요).`,
    new:`When a group of third-person subjects want something, use the observed desire form.` },
  { t:'h', old:`3rd person emotion needs -하다 form: 기뻐하다 (not 기쁘다). Progressive for ong`,
    new:`Third-person happiness uses the observable emotion form combined with progressive.` },
  { t:'h', old:`3rd person fear: 무서워하다, not 무섭다 (which describes the speaker).`,
    new:`Third-person fear uses the observable verb form, not the directly experienced adjective.` },
  { t:'h', old:`3rd person emotion in past progressive: 슬퍼하고 있었어요.`,
    new:`Past progressive for observed third-person sadness: past + observable emotion form.` },
  { t:'h', old:`You observe others' desires from outside. 3rd person → 싶어하다.`,
    new:`Desires observed from outside use the visible external form, not the internal form.` },
  // 돕다 ㅂ-irregular
  { t:'h', old:`돕다 is ㅂ-irregular: 돕→도와. Then add 주다 for benefactive.`,
    new:`The ㅂ-irregular helping verb transforms before a vowel ending. Add benefactive after.` },
  // -게 되다 short
  { t:'h', old:`-게 되다 = come to, end up. A natural change, not a decision.`,
    new:`This change-of-state form: ended up doing something—not by choice, but by circumstance.` },
  // Reported speech patterns
  { t:'h', old:`Statements: -다고 해요 shortens to -대요.`,
    new:`When reporting a statement, the full form can be shortened. What is that shortened form?` },
  { t:'h', old:`전해 줬어요 combines 전하다 with -아/어 주다 (doing for someone). The content is -`,
    new:`Passed along a message for someone: reported statement + benefactive form combined.` },
  { t:'h', old:`맛집 is a noun. Noun + 이라고 해요 shortens to 이래요.`,
    new:`When reporting a noun identity (it is called...), the form shortens in casual speech.` },
  { t:'h', old:`-냐고 reports a question. Mom asked: did you eat?`,
    new:`The reported question form is used when conveying what someone asked you.` },
  { t:'h', old:`Questions: -냐고 해요 shortens by merging the middle syllables.`,
    new:`Reporting a question in casual speech uses a shortened form. Which option shows it?` },
  { t:'h', old:`오냐고 = reported question. -는데 gives background before the contrast (no `,
    new:`Reported question + background contrast: two grammar forms in one sentence.` },
  { t:'h', old:`맛있냬요 = 맛있냐고 해요 (shortened). 가 봤냐고 = asked if visited. Both reported qu`,
    new:`Two shortened reported-question forms: one about taste, one about visiting.` },
  { t:'h', old:`The doctor ASKED (question) = -냐고.`,
    new:`Use the reported question form when conveying what a doctor asked.` },
  { t:'h', old:`-자고 reports a suggestion/proposal: let us do X together.`,
    new:`The reported suggestion form conveys a proposal someone made to do something together.` },
  { t:'h', old:`오시라고 = honorific command. 하셨어요 = honorific 하다 in past. Double layers.`,
    new:`Honorific reported command: someone in authority (with honorific) was asked to come.` },
  { t:'h', old:`노잼 and 꿀잼 are used as noun predicates. Noun + 이라고 해요. 이래요 = shortened `,
    new:`Internet slang nouns used as predicates with the shortened identity-report form.` },
  { t:'h', old:`인증샷 uses 인증. 업로드했어요 uses 업로드하다. 대박이라고 = noun + 이라고.`,
    new:`Three internet vocabulary items: proof shot, upload verb, and a noun identity report.` },
  { t:'h', old:`먹자 = let's eat (suggestion base). Reported: 먹자고 했어요.`,
    new:`The suggestion to eat together: which option correctly uses the reported-suggestion form?` },
  { t:'h', old:`먹으라고 = command. 하셨어요 = honorific past of 하다. Two layers combined.`,
    new:`Reported command combined with honorific past tense: two grammar layers in one phrase.` },
  { t:'h', old:`Noun + 이다 → -(이)라고. 강국이라고 = said it is a powerhouse.`,
    new:`When reporting a noun-predicate statement, use the identity-quote form.` },
  { t:'h', old:`꿀잼 and 노잼 are noun predicates. Noun + 이라고 해요 → 이래요 (shortened).`,
    new:`Internet slang: two noun predicates using the shortened identity-report form in casual speech.` },
  { t:'h', old:`확인했대요 = 확인했다고 해요. 있었대요 = 있었다고 해요. Both shortened past statements.`,
    new:`Two shortened past statements: one about confirming, one about a past situation.` },
  { t:'h', old:`드시다 (honorific eat) + 싶으시다 (honorific want). Two levels of respect.`,
    new:`Two honorific forms combined: eating verb elevated + wanting verb elevated for respect.` },
  { t:'h', old:`-다고 해요 contracts to -대요. The 고 해 part merges into 대.`,
    new:`The reported statement shortens through contraction. What merges in the middle?` },
  { t:'h', old:`-냐고 reports a question someone asked.`,
    new:`The reported question form is used when conveying what someone asked.` },
  { t:'h', old:`-다고 하다 is the foundation for both patterns.`,
    new:`The indirect quotation base underlies both reported statement and question forms.` },
  // Passive/cause
  { t:'h', old:`-서 is a connector (because/and so). The passive suffixes are -이, -히, -`,
    new:`Not all Korean connectors mark passive. The passive voice uses specific suffixes.` },
  { t:'h', old:`에 의해(서) = by (agent in passive). The journalist is the agent.`,
    new:`The passive agent marker shows who performed the action. The journalist acted.` },
  // -다가
  { t:'h', old:`-다가: was doing X then switched/changed to Y. Watching then fell asleep`,
    new:`The action-switch connector: was doing one thing, then switched to another.` },
  { t:'h', old:`에 의해 marks the agent in a passive sentence: designed BY the architect.`,
    new:`The passive agent marker shows who performed the action: designed by a person.` },
  { t:'h', old:`-다가: watching was interrupted by hearing something important.`,
    new:`The action-interruption connector: was doing X when Y happened and interrupted it.` },
  { t:'h', old:`According to (에 의하면) + reported future statement.`,
    new:`Citation form + reported future: according to a source, something will happen.` },
  // Double past
  { t:'h', old:`Double past -았/었었: the rapid development happened in the distant past.`,
    new:`The remote past form emphasizes distance from now. Something happened long ago.` },
  { t:'h', old:`에 의해 (due to/by) + progressive: ongoing decrease caused by the issue.`,
    new:`Passive agent marker + progressive: the issue is currently causing an ongoing decrease.` },
  { t:'h', old:`에 의해 (cause) + becoming more + progressive: three constructs.`,
    new:`Passive cause + change-of-state + progressive: three forms describing an ongoing trend.` },
  { t:'h', old:`-다가 = was doing X then Y happened. Action interrupted or changed.`,
    new:`The interruption/switch connector: one action was in progress when a change occurred.` },
  { t:'h', old:`에 의해 = by (passive agent). Based on / made by.`,
    new:`Passive agent marker: who performed the action or made the thing.` },
  { t:'h', old:`Double past for discontinued habit + -는데 contrast with present.`,
    new:`Remote past showing a discontinued habit, contrasted with the current situation.` },
  // -기 전에
  { t:'h', old:`Fixed grammatical expressions like 전에, 시작하다, and 위해서 require one speci`,
    new:`Certain grammar patterns require nominalizer -기. Which ones?` },
  // 음식 문화
  { t:'h', old:`Food vocabulary: 음식 문화 = food culture.`,
    new:`The compound noun combining 'food' and 'culture' is the answer.` },
  // 것을 → 걸
  { t:'h', old:`것을 contracts to 걸. One of the most common contractions in spoken Korea`,
    new:`This object-form of the nominalizer contracts in casual speech. Which form results?` },
  // -기 위해서 combos
  { t:'h', old:`Delicious (modifier). In order to make (-기 위해서). I search for recipes.`,
    new:`Combine a taste modifier, formal purpose, and searching in one sentence.` },
  // ㅂ-irregular grilling
  { t:'h', old:`Grilling (ㅂ-irregular). Suggesting eating together (-자고). The act of (`,
    new:`Four constructs: ㅂ-irregular grill verb + reported suggestion + nominalization + copula.` },
  // Bland ㅂ-irregular
  { t:'h', old:`주문한, 매운, 싱거웠 (ㅂ-irregular past), -다고요 (really?). Four grammar layers.`,
    new:`Four grammar forms: past modifier + spice modifier + ㅂ-irregular past + surprise quote.` },
  { t:'h', old:`Bland (ㅂ-irregular modifier). After adding (past modifier). Became bet`,
    new:`ㅂ-irregular bland modifier + past modifier + change of state: three forms combined.` },
  // 담그시다
  { t:'h', old:`Past modifier + honorific: 담그시다 → 담그신. Kimchi that mother made.`,
    new:`Honorific past modifier for making kimchi: the verb with honorific -(으)신 form.` },
  // -기 전에 cooking
  { t:'h', old:`Before adding (-기 전에). Stir-frying (-는 것). Is important. Three pattern`,
    new:`Three grammar forms: before-doing + present nominalization + importance expression.` },
  // 먹을/만들어 놓은
  { t:'h', old:`Side dishes to eat (future). Prepared in advance (past). What remains `,
    new:`Four modifiers: future-plan, prepared-in-advance, leftover, and another. Count them.` },
  // -기 위해서 purpose
  { t:'h', old:`-기 위해서 = formal purpose. Came for the purpose of eating.`,
    new:`Formal purpose expression: came to this place with the goal of doing something.` },
  // -네요 direct reaction
  { t:'h', old:`You're experiencing it RIGHT NOW. -네요. If you tell someone later: -더라고`,
    new:`Reacting live to an experience uses one ending; reporting it later uses another.` },
  // -잖아요
  { t:'h', old:`-잖아요 reminds of something both speakers know. Different from -거든요 (new`,
    new:`This ending reminds the listener of something they already know—shared knowledge.` },
  { t:'h', old:`반말 form of -잖아요. Frustrated reminder of shared knowledge.`,
    new:`Casual version of the shared-knowledge reminder ending: frustrated tone.` },
  // -(으)ㄴ가 보다
  { t:'h', old:`Adjective: stem + (으)ㄴ가 보다. 고프다 → 고픈가 봐요. Evidence: crying child.`,
    new:`Evidence-based inference for an adjective: something makes you guess the child is hungry.` },
  { t:'h', old:`-나 보다: the speaker sees evidence (people) and guesses the reason.`,
    new:`The speaker sees people gathering and infers the reason based on evidence.` },
  // 정이 들다
  { t:'h', old:`정이 들다. Present modifier: 드는. -는 것 같다 = I think.`,
    new:`The 정 (attachment) expression: present modifier form combined with 'I think' softener.` },
  // -더라고요
  { t:'h', old:`-아/어 주다 benefactive + -시- honorific + -더라고요 past observation.`,
    new:`Three layers: doing for someone respectfully + observing it and reporting back.` },
  // 반말 permission
  { t:'h', old:`Asked (reported question) if it's OK (permission) to use casual speech`,
    new:`Reported question about whether casual speech is permitted between two people.` },
  // -기 전에 vs -는 것
  { t:'h', old:`-기 전에 (before), -기 쉽다 (easy to). -는 것 = what I do/did/will do.`,
    new:`Two nominalizer types: one for fixed expressions (-기), one for specific actions (-는 것).` },
  // cause + tendency
  { t:'h', old:`Cause (-아/어서) + tendency (-는 편이다): because of jeong, they tend to feel`,
    new:`A causal connector followed by tendency expression: because of X, they lean toward Y.` },
  // -게 되다 + past modifier + 이유
  { t:'h', old:`-게 되다 = came to (natural change). The past modifier -ㄴ connects 되다 to `,
    new:`Natural change-of-state connected to a reason noun via the past modifier.` },
  // 반말 → 합쇼체
  { t:'h', old:`반말 가 → 합쇼체 갑니다. Casual to very formal.`,
    new:`The casual verb form 가 contrasts with its most formal equivalent. What is the formal form?` },
  // Duration patterns
  { t:'h', old:`Duration (-ㄴ 지 + 되다) sets up background, -는데 contrasts with difficulty`,
    new:`Duration since an event + background contrast: set up the context then show difficulty.` },
  { t:'h', old:`Duration since event (-ㄴ 지), background contrast (-는데), inability (못).`,
    new:`Three forms: how long ago, background contrast, and inability combined.` },
  { t:'h', old:`Reported command (-(으)라고) from an elder, so honorific -(으)시- is added.`,
    new:`Honorific respect added to a reported command from an elder: two layers.` },
  // -기로 + -잖아요
  { t:'h', old:`-기로 유명하다 (famous for) + -잖아요 (shared knowledge reminder).`,
    new:`Famous-for expression combined with the shared-knowledge reminder ending.` },
  // -(으)ㅂ시다
  { t:'h', old:`-(으)ㅂ시다 is the formal proposal. Used in meetings, speeches, and group `,
    new:`The formal group-proposal ending is used in meetings and speeches for let's-do suggestions.` },
  // 짓다 passive
  { t:'h', old:`짓다 is irregular. Its passive uses -어지다: 짓 → 지어지다.`,
    new:`The ㅅ-irregular build verb becomes passive using -어지다. What is the passive form?` },
  // Causative 읽히다
  { t:'h', old:`Causative of 읽다 uses -히-: 읽히다. Present tense: 읽혀요.`,
    new:`The causative of the reading verb uses -히-. What is the present tense form?` },
  // -고 있는 (progressive modifier)
  { t:'h', old:`-고 있다 (progressive) + -는 (present modifier) = ongoing action modifying`,
    new:`Progressive action turned into a modifier: the ongoing action describes a noun.` },
  // 가세요
  { t:'h', old:`가세요 is a polite imperative (해요체). The others are all plain/narrative f`,
    new:`One option is a polite imperative form; the rest are plain/narrative speech forms.` },
  // -(ㄴ/는)다 diary form
  { t:'h', old:`-(ㄴ/는)다 is the plain/diary form. Past: 봤다 (not 봤어요).`,
    new:`The diary/plain form uses a different past ending than the polite form.` },
  // -아/어야 하다 + 드리다
  { t:'h', old:`Obligation (-아/어야 하다) + humble 드리다 (give to elder, humble of 주다).`,
    new:`Must give something: obligation ending + the humble giving verb for superiors.` },
  // Honorific combination
  { t:'h', old:`Honorific -(으)시- respects the listener + -네요 expresses admiration.`,
    new:`Honorific respect combined with spontaneous admiration/surprise in one expression.` },
  // -고자 + formal
  { t:'h', old:`-고자 (formal purpose) and 합쇼체 formal ending. Two layers.`,
    new:`Two formal layers: one expresses intent/purpose, one is a formal speech-level ending.` },
  { t:'h', old:`-고자 (intention), -(으)며 (written and), -(으)므로 (written because). Three `,
    new:`Three formal/written constructs: intention, written 'and,' and written 'because.'` },
  // 로서
  { t:'h', old:`로서 = what you ARE. 로 = what you USE.`,
    new:`Two 로 particles: one marks capacity/role, the other marks means/method.` },
  // 통해
  { t:'h', old:`-을 통해 + formal -ㅂ니다. Both are written register markers.`,
    new:`Formal 'through a channel' + formal speech level ending: written register combined.` },
  { t:'h', old:`통해=going through a process/channel. 로=simple means.`,
    new:`Two 'by/through' expressions: one implies a process or channel, one is simpler.` },
  { t:'h', old:`-을 통해 is the formal equivalent of -(으)로 for 'through'.`,
    new:`The formal 'through' expression differs from the casual means marker.` },
  // 합쇼체
  { t:'h', old:`합쇼체 = formal polite. Required in interviews.`,
    new:`The formal speech level with -ㅂ니다 endings is required in professional settings.` },
  // 노력하며 취업하고자 합니다
  { t:'h', old:`노력하다 (formal verb) + -(으)며 (written and) + -고자 합니다 (formal purpose).`,
    new:`Formal effort + written 'and' + formal purpose: three layers for a cover letter sentence.` },
  // 비롯한 + 며 + 로서 + 고자
  { t:'h', old:`-을 비롯한 (including) + -(으)며 (written and) + -(으)로서 (role) + -고자 (purpos`,
    new:`Four formal patterns: including, written 'and,' role/capacity, and purpose.` },
  // 반면에
  { t:'h', old:`Written 'and' lists two positives. 반면에 contrasts with the negative.`,
    new:`Written 'and' stacks positives; the structured contrast marker introduces the negative.` },
  { t:'h', old:`뿐만 아니라 + -는데다가: stacking strengths with two additive patterns.`,
    new:`Two additive patterns stack strengths: not only X but also Y, and furthermore Z.` },
  { t:'h', old:`뿐만 아니라 in essays; 는데다가 in conversation.`,
    new:`Two 'not only...but also' patterns: one for formal writing, one for conversation.` },
  { t:'h', old:`-다고 해서 REJECTS the logical connection. The opponent's reasoning is fla`,
    new:`This pattern challenges a causal assumption: just because X doesn't mean Y.` },
  { t:'h', old:`반면에 + -기는 하다 + -죠 + -다거나. Four patterns in two sentences.`,
    new:`Four grammar patterns including structured contrast, concession, shared-assumption, and listing.` },
  { t:'h', old:`반면에 highlights PARALLEL contrast. -지만 is just simple 'but'.`,
    new:`Structured parallel contrast vs simple 'but': when is each contrast pattern used?` },
  { t:'h', old:`-(으)므로 is from U21 (formal writing). U22 focuses on debate patterns.`,
    new:`The formal written 'because' belongs to a previous unit. This unit focuses on debate forms.` },
  { t:'h', old:`통계 = statistics, involves numbers.`,
    new:`This word about data and numbers is related to quantitative analysis.` },
  // 인해/의해
  { t:'h', old:`으로 인해 needs EXTERNAL causes, not personal actions.`,
    new:`This formal cause marker requires an external event or circumstance, not personal behavior.` },
  { t:'h', old:`으로 인해 needs external causes: disasters, events, policies.`,
    new:`The formal 'due to' requires an outside cause—not a personal feeling or action.` },
  { t:'h', old:`Object becomes subject. Agent marked with 에 의해.`,
    new:`In a passive construction, the original subject becomes the agent marked with a particle.` },
  { t:'h', old:`인해=because of event. 의해=done by person/org.`,
    new:`Two formal markers: one for cause (event-based), one for passive agent (person/org).` },
  // 따르면/의하면
  { t:'h', old:`따르면 = if you follow = according to.`,
    new:`The citation form meaning 'according to' follows a source noun.` },
  { t:'h', old:`따르면=says. 의하면=per their findings.`,
    new:`Two 'according to' expressions: one general, one based on research findings.` },
  // 보다 + 다시피
  { t:'h', old:`보다 → 보시다시피. Connecting to what listener can see.`,
    new:`'As you can see' connects the speaker to what the listener is observing. What form does 보다 take?` },
  // 걸 보니 + 모양이다
  { t:'h', old:`걸 보니 marks the evidence. 모양이다 is the conclusion.`,
    new:`Evidence marker followed by a conclusion: judging by what is seen, the inference follows.` },
  { t:'h', old:`Evidence (걸 보니) then conclusion (모양이다).`,
    new:`Visible evidence leads to an inference. Packing bags suggests a trip.` },
  { t:'h', old:`에 의하면 (according to) + 나타났다 (found) + 걸 보니 (judging by) + 모양이다 (seems)`,
    new:`Four inference-evidence patterns: citation, finding, observation-based judgment, appearance.` },
  { t:'h', old:`걸 = 것을 (thing+object). 보니 = upon seeing.`,
    new:`Contracted object nominalizer + upon-seeing connector: judging by the fact that...` },
  { t:'h', old:`-던데요 shares what was noticed. 걸 보니 + 모양이다 draws inference.`,
    new:`Two inference patterns: sharing a past observation vs. drawing a conclusion from evidence.` },
  { t:'h', old:`던데요 has an open-ended feel: and...?`,
    new:`One observation ending invites response; the other is a closed statement.` },
  { t:'h', old:`반면에 is from U22 (debate). U23 focuses on news and reporting.`,
    new:`Structured contrast belongs to a previous unit. This unit focuses on news language.` },
  // 아쉽다 vs 후회
  { t:'h', old:`아쉽다 is softer. 후회 implies you blame yourself.`,
    new:`Two types of disappointment: mild regret vs. self-blame for a past decision.` },
  // 뻔하다
  { t:'h', old:`뻔하다 was seed, now depth. 걸 is new.`,
    new:`Near-miss expression deepened here + a new regret form combined in one question.` },
  // 텐데
  { t:'h', old:`텐데 = I imagine you might be X (caring).`,
    new:`This ending expresses empathetic concern about someone's imagined situation.` },
  { t:'h', old:`텐데 guesses situation. 테니까 gives reason/promise.`,
    new:`One ending expresses empathetic expectation; the other gives a reason or promise.` },
  { t:'h', old:`으로 인해 is formal cause from U23 (news). U24 is about regret.`,
    new:`The formal news-register cause belongs to a previous unit. This unit covers regret.` },
  { t:'h', old:`-(으)므로 is from U21, written register only.`,
    new:`The formal written 'because' connector belongs to an earlier unit.` },
  // 덕분에
  { t:'h', old:`덕분에 needs a POSITIVE result. Getting wet isn't positive.`,
    new:`This 'thanks to' marker only works when the result is positive or beneficial.` },
  // -느라고
  { t:'h', old:`-느라고 = I was BUSY doing it (effort). 때문에 = just cause.`,
    new:`One causal marker implies personal effort or sacrifice; the other is neutral cause.` },
  { t:'h', old:`-느라고 has strict same-subject + effort constraints.`,
    new:`This causal connector requires the same subject and implies effort or inconvenience.` },
  // 길래
  { t:'h', old:`The question asks what triggered buying. 길래 = triggered by discovery.`,
    new:`This causal connector expresses that a discovery triggered an immediate response.` },
  // 거든요 explain
  { t:'h', old:`거든요 specifically explains the reason TO the listener.`,
    new:`This ending provides an explanation to the listener—something they didn't know before.` },
  // 인해 formal
  { t:'h', old:`(으)로 인해 is for news articles and formal reports.`,
    new:`This formal cause marker is used in news and official contexts for external events.` },
  // 텐데 from U24
  { t:'h', old:`텐데 is from U24 (regret/expectations). U25 is about causes.`,
    new:`Empathetic expectation belongs to a previous unit. This unit focuses on cause patterns.` },
  // -라는
  { t:'h', old:`-라는 = called/that-is-called. Quote modifier.`,
    new:`The quotation modifier describes something by what it is called or known as.` },
  // -(으)ㄹ 때
  { t:'h', old:`-(으)ㄹ 때 = when. time expression.`,
    new:`The time-clause connector expressing 'when something happens' or 'when doing X.'` },
  // -곤 하다
  { t:'h', old:`-곤 하다 explicitly marks REPETITION/habit.`,
    new:`This pattern marks repeated past habits more explicitly than simple past tense.` },
  // 편지/옛날
  { t:'h', old:`편지 = letter. 옛날 = old days. Basic vocabulary.`,
    new:`Two vocabulary words: one for written correspondence, one for past times.` },
  // 마다
  { t:'h', old:`마다 = every. 주말마다 = every weekend. particle.`,
    new:`The 'every/each' particle distributes the meaning over each instance.` },
  { t:'h', old:`마다 = every/each. particle.`,
    new:`This particle means every or each: attached to a time word to mean 'each time.'` },
  // -(으)면
  { t:'h', old:`-(으)면 = if/when. Core conditional.`,
    new:`The conditional connector used for both 'if' and 'when' situations.` },
  // 잊기 -기
  { t:'h', old:`잊다 → 잊기 = forgetting. -기 noun form.`,
    new:`Nominalize the forgetting verb with -기 to use it as a noun in the sentence.` },
  // 마련이다
  { t:'h', old:`마련이다 often has an implied condition. -면 is common but not required.`,
    new:`This 'bound to happen' expression often implies a condition, but not always explicitly.` },
  // -는 (present modifier)
  { t:'h', old:`없다 → 없는 = that does not exist. -는 present modifier.`,
    new:`The present modifier form of existence/absence verbs: describes things that do/don't exist.` },
  // -기도 하다
  { t:'h', old:`-기도 하다 = also does. Review pattern.`,
    new:`This pattern expresses 'also does X' or 'sometimes does X': a review of the -기도 form.` },
  // -(으)니까 → -(으)니
  { t:'h', old:`-(으)니 = since/because. Short form of -(으)니까.`,
    new:`The contracted causal connector used in less formal speech.` },
  // -고 = and
  { t:'h', old:`-고 = and/then. Basic connector.`,
    new:`The simplest sequential connector linking two actions in order.` },
  { t:'h', old:`-고 = and. One of the first connectors.`,
    new:`The basic connector linking two clauses: 'and/then' in sequence.` },
  // 따지다
  { t:'h', old:`따지다 = examine closely. 따지고 보면 = when you really examine it.`,
    new:`The scrutinizing verb forms a phrase meaning 'when you really look at it closely.'` },
  // 보면/나면
  { t:'h', old:`보면 = when you look. 나면 = after finishing/emerging.`,
    new:`Two compound connectors: one is 'upon reflection/inspection,' the other is 'after completing.'` },
  // 겪다
  { t:'h', old:`겪다 = experience. -고 있다 = progressive.`,
    new:`The experiencing/enduring verb combined with progressive: currently going through something.` },
  // -구나 vs -군요
  { t:'h', old:`-구나 = to yourself. -군요 = to someone else politely.`,
    new:`Two realization endings: one for self-talk, the other for polite expression to someone.` },
  // -는 대로 ≈ -자마자
  { t:'h', old:`-는 대로 'as soon as' ≈ -자마자.`,
    new:`The immediacy connector 'as soon as' and its synonym. Which is being asked about?` },
  // 말이 subject
  { t:'h', old:`말이 = speech + subject marker. 이/가.`,
    new:`The noun for speech/words takes a subject marker. Which combination is correct?` },
  // 이다 copula
  { t:'h', old:`이다 = is/to be. The most basic grammar point.`,
    new:`The copula verb is the most fundamental grammar construct. Which one?` },
  // 까지 particle
  { t:'h', old:`까지 = until/up to. Basic particle.`,
    new:`This particle marks the endpoint or limit: until X or up to X.` },
  // -기 evaluation
  { t:'h', old:`-기 = noun form . 어렵다 = difficult. Combined evaluation.`,
    new:`Nominalize an action and combine with a difficulty adjective to evaluate it.` },
  // 준비/걱정
  { t:'h', old:`비=prepare (준비), 환=worry (걱정). Connected to familiar words.`,
    new:`Two compound nouns share characters with familiar everyday words for preparing and worrying.` },
  // 은커녕
  { t:'h', old:`은커녕 = far from [topic]. 도 = even. Both particles.`,
    new:`'Far from X, not even Y' structure: topic particle + dramatic denial + even-particle.` },
  { t:'h', old:`커녕 works with particles 은/는 and 도.`,
    new:`This dramatic denial particle works with topic and inclusive markers together.` },
  // 도와주기
  { t:'h', old:`도와주다 → 도와주기 = helping (noun). -기.`,
    new:`Nominalize the 'help for someone' compound verb to use it as a noun.` },
  // -아 봐야
  { t:'h', old:`-아 봐야 = even if you try. From -아 보다 (try).`,
    new:`Extended from the 'try doing' pattern to mean 'even if you try, it's useless.'` },
  // -지 마세요 variations
  { t:'h', old:`-지 마세요 = do not. prohibition.`,
    new:`The prohibition form tells someone not to do something politely.` },
  { t:'h', old:`-지 마세요 = do not. Prohibition.`,
    new:`The negative imperative form advises against doing something.` },
  { t:'h', old:`-지 않다 = negation. One of the first patterns.`,
    new:`The long-form negation attaches -지 않다 after the verb stem.` },
  // 울다 봤자
  { t:'h', old:`울다 → 울어 = cry . 봤자 = even if you try.`,
    new:`'Even if you cry, it won't help'—the futility pattern applied to the crying verb.` },
  // -아/어 vowel harmony
  { t:'h', old:`-아 봤자 and -아서라도 both build on basic -아/어 conjugation.`,
    new:`Two patterns built on vowel harmony conjugation: futility and determined action.` },
  { t:'h', old:`-아 봤자, -아서라도. Both use -아/어 vowel harmony.`,
    new:`Two extended patterns using basic vowel harmony: futility vs. determined effort.` },
  // 다니/다더니
  { t:'h', old:`다니 = my reaction. 다더니 = their claim + contradiction.`,
    new:`Two quote-based patterns: one shows my surprise reaction; the other contradicts their claim.` },
  { t:'h', old:`-다니 = -다고 하니 contracted. Quote + disbelief.`,
    new:`Contracted form of an indirect quote expressing disbelief or surprise at a statement.` },
  { t:'h', old:`다니 = I react. 다더니 = what they said vs reality.`,
    new:`My surprise reaction vs. their claim contradicted by reality: two indirect speech forms.` },
  // -네요 observation
  { t:'h', old:`-네요 = oh, I see! surprise ending.`,
    new:`Spontaneous surprise or realization upon direct observation.` },
  { t:'h', old:`-네요 = oh, I notice! Exclamation.`,
    new:`Direct observation triggers this immediate exclamatory ending.` },
  // 배 아프다 = jealousy idiom
  { t:'h', old:`배 = stomach . 아프다 = hurts . Combined: jealousy idiom.`,
    new:`Stomach + hurt combined: Korean idiom for jealousy or envy.` },
  // 봤자/서라도
  { t:'h', old:`봤자 = useless even if. 서라도 = will do it even if I must.`,
    new:`Futile attempt vs. determined action despite difficulty: two contrasting attitudes.` },
  // 커지고 있다
  { t:'h', old:`커지고 있다 = is getting bigger. Progressive.`,
    new:`Growing progressively bigger: the change-of-state verb in ongoing form.` },
  // V-(으)ㄹ 정도로
  { t:'h', old:`V-(으)ㄹ 정도로 + [result]. Extent clause modifies the main clause.`,
    new:`Extent modifier: to the degree that X would happen, something actually did.` },
  // 먹었어요 past
  { t:'h', old:`먹었어요 = ate. 었 = past marker.`,
    new:`The past tense of the eating verb uses which past marker vowel?` },
  // -기에는 vs 만하다
  { t:'h', old:`기에는 = 'for X-ing, it's too...' / 만하다 = 'worth X-ing.'`,
    new:`Two evaluative patterns: suitability for a purpose vs. worthiness of doing.` },
  // -기 nominalization
  { t:'h', old:`-기 = noun form . 에 = for/at . Combined = for the purpose of.`,
    new:`Nominalizer + purpose particle: to/for the purpose of doing X.` },
  // 수 있다 vs 만하다
  { t:'h', old:`수 있다 asks CAN you. 만하다 asks SHOULD you / is it worth it.`,
    new:`Two ability-related expressions: one asks about capability, the other about worthiness.` },
  // -고 = and (two instances)
  { t:'h', old:`끝나고 = ends and then. -고 = and/then.`,
    new:`After school ends, something follows. The sequential connector links the two events.` },
  // 만큼 + 수 있다
  { t:'h', old:`만큼 = proportional. 수 있다 = ability.`,
    new:`Proportional extent + ability expression: as much as you can do.` },
  // 다기보다
  { t:'h', old:`다기보다 comes from -다고 하기보다 = rather than saying that.`,
    new:`This softening pattern means 'rather than saying X, it's more like Y.'` },
  // 듯이 patterns
  { t:'h', old:`듯이 adds 'seems as though' :  an impression, not certainty.`,
    new:`This connector adds uncertainty: it seems/appears as though, but not confirmed.` },
  { t:'h', old:`꾸는 = currently dreaming. -는 = present modifier.`,
    new:`Present tense modifier applied to a dreaming verb to describe something being dreamed.` },
  { t:'h', old:`없었던 = that had not existed. -었던 = past experience modifier.`,
    new:`Past experience modifier describing something that no longer exists as it once did.` },
  { t:'h', old:`듯이 = seems/appears. 처럼 = is like. Subtle but real.`,
    new:`Two comparison markers: one is a definite likeness, one is a tentative impression.` },
  { t:'h', old:`듯이 = impression/seems like. The sky SEEMS like it would snow.`,
    new:`The impression/seems-like connector is used when the situation is not certain.` },
  { t:'h', old:`듯이 adds dreamlike uncertainty.`,
    new:`This connector adds uncertainty: things appear a certain way but aren't confirmed.` },
  // 해요체 in 문어체 context
  { t:'h', old:`TOPIK 쓰기 = always 문어체. Never 해요체.`,
    new:`TOPIK writing always requires formal plain style. Polite conversational endings are wrong.` },
  { t:'h', old:`TOPIK writing = 문어체. No 해요체 endings.`,
    new:`TOPIK writing tasks always use the formal written style, not conversational polite endings.` },
  // 결정하는 -는
  { t:'h', old:`결정하는 시험 = exam that determines. -는 = present modifier.`,
    new:`Present relative clause modifying 'exam': the exam that currently determines something.` },
  // 요즘
  { t:'h', old:`요즘 = these days. Basic time expression.`,
    new:`A time adverb meaning recently or in the current period.` },
  // 동안 vs 채로
  { t:'h', old:`동안 = during. But 채로 emphasizes frozen STATE, not just time overlap.`,
    new:`'During' vs. 'while in a fixed state': the latter emphasizes an unchanged condition.` },
  // 중요함 = -(으)ㅁ
  { t:'h', old:`중요하다 to 중요함 = formal noun: the importance of.`,
    new:`Formal nominalization using -(으)ㅁ: converts an importance adjective to a formal noun.` },
  // 줄었다
  { t:'h', old:`줄다 to 줄었다 = decreased. 었 = past `,
    new:`The decreasing verb in past tense. Which vowel marker is used for the past?` },
  // 가장 superlative
  { t:'h', old:`가장 = the most. Superlative marker.`,
    new:`This superlative adverb expresses the highest degree among a group.` },
  // -보다 comparison
  { t:'h', old:`-보다 = than. Comparison.`,
    new:`The comparison particle attaches to the lesser item in a comparison.` },
  // 야말로
  { t:'h', old:`야말로 makes declarations, not questions.`,
    new:`This emphatic focus marker is used for strong declarations, not questions.` },
  { t:'h', old:`야말로 = emphasis. 을 = object. ㄹ 수 있는 = ability. ㅂ니다 = formal.`,
    new:`Emphatic focus + object marker + ability modifier + formal ending: four constructs combined.` },
  // 한 vs 이상
  { t:'h', old:`한 = can still change. 이상 = point of no return.`,
    new:`Two 'given that' expressions: one for ongoing conditions, one for irreversible states.` },
  { t:'h', old:`한 = flexible condition. 이상 = point of no return.`,
    new:`Flexible condition vs. committed point of no return: two 'given that' forms.` },
  // 뿐 / 기만 하면
  { t:'h', old:`뿐 = only/merely. 기만 하면 = that's all you need.`,
    new:`Limiting 'only' vs. sufficiency 'all you need to do is': two simplifying expressions.` },
  { t:'h', old:`뿐 = all there is. 기만 하면 = all you NEED.`,
    new:`One limits (it's just this), the other says it's sufficient (just do X).` },
  { t:'h', old:`뿐 and 기만 하면 both reduce to one action.`,
    new:`Both patterns simplify to a single action: limiting vs. sufficiency.` },
  // 잖아요 + -다고
  { t:'h', old:`말했잖아요 = I told you. 않다고 = that it is not (indirect speech).`,
    new:`Shared-knowledge reminder combined with indirect-speech negation: I told you it's not...` },
  // 사다 → 샀어요
  { t:'h', old:`사다 past = 샀어요. Contracted past form.`,
    new:`The buying verb has an irregular past tense. Which contracted form is correct?` },
  // 해요체 formal choice
  { t:'h', old:`해요체 = polite but warm. Good for senior colleagues.`,
    new:`The warm-polite speech level is appropriate for senior colleagues in an office setting.` },
  // 에게 vs 께
  { t:'h', old:`에게 = to someone. 께 = to someone (honorific). honorific version.`,
    new:`Two dative particles: one standard, one honorific for addressing superiors.` },
  { t:'h', old:`에게 = to (a person). Basic particle.`,
    new:`The basic particle for 'to a person' (indirect object marker).` },
  // 동안 길에
  { t:'h', old:`길 literally = road/path. 동안 = general duration.`,
    new:`'During transit/travel' vs. 'general duration': two time-of-action expressions.` },
  // 드시다 elevation vs humble
  { t:'h', old:`드시다 elevates the OTHER person. Humble forms lower YOURSELF.`,
    new:`Elevation honors the other person's action; humility lowers one's own. Which is 드시다?` },
  // 모자를 = hat + object
  { t:'h', old:`모자를 = hat (object). 을 = object marker.`,
    new:`The hat is the direct object of putting-on. Which particle marks the direct object?` },
  // 예의
  { t:'h', old:`예의 = etiquette. The cultural reason behind the grammar.`,
    new:`Cultural politeness and manners underlie this grammar pattern.` },
  // 아서 vs 바람에
  { t:'h', old:`아서 is neutral. 바람에 implies surprise and often bad outcome.`,
    new:`Neutral cause vs. unexpected/unfortunate consequence: two causal markers compared.` },
  // 반면에
  { t:'h', old:`반면에 implies a balanced, structured comparison.`,
    new:`Structured parallel contrast: one side positive, the other as counterpoint.` },
  // -(으)ㅁ
  { t:'h', old:`에도 불구하고 needs a noun. -(으)ㅁ nominalizes.`,
    new:`The 'despite' expression requires a noun. Use the formal nominalizer before it.` },
  // 다가 (sada)
  { t:'h', old:`사다가 = buy and BRING. 사서 = buy and (then...).`,
    new:`Buying and bringing vs. buying and then doing something else: two compound connectors.` },
  // 나눠 주다
  { t:'h', old:`나눠 주다 = share for someone. The benefactive pattern.`,
    new:`Sharing something for others uses the benefactive compound verb.` },
  // 죽겠다 vs 정도로
  { t:'h', old:`죽겠다 is pure exaggeration. 정도로 describes actual extent.`,
    new:`Hyperbolic exaggeration vs. measurable extent: two ways to describe degree.` },
  { t:'h', old:`죽겠다 adds dramatic emphasis.`,
    new:`This exaggeration expression adds dramatic emphasis to an extreme feeling.` },
  // 다기보다 vs 커녕
  { t:'h', old:`다기보다 softly redirects. 커녕 dramatically denies.`,
    new:`Gentle redirection ('rather than') vs. dramatic denial ('far from'): compare the nuance.` },
  // 김에 vs 겸
  { t:'h', old:`김에: since already doing. 겸: for dual purpose.`,
    new:`Two opportunistic patterns: taking advantage of already doing X vs. doing two things at once.` },
  // 에서 → 로
  { t:'h', old:`From X% to Y% = 에서...로.`,
    new:`Change from one percentage to another uses which two particles?` },
  // 것으로 보인다
  { t:'h', old:`문어체: 것으로 보인다/분석된다.`,
    new:`Formal written inference endings: 'it appears that' and 'it has been analyzed that.'` },
  // 해요체 in TOPIK
  { t:'h', old:`TOPIK 쓰기 = always 문어체. Never -요.`,
    new:`TOPIK writing uses formal plain style. Which type of ending is NOT acceptable?` },
  // 위해 vs 대해
  { t:'h', old:`위해 = to achieve. 대해 = about/concerning.`,
    new:`Two purpose particles: one expresses 'for the purpose of achieving,' the other 'regarding.'` },
  // 뿐이다 literary
  { t:'h', old:`Literary version of 뿐이다.`,
    new:`The literary/formal expression meaning 'nothing but X / merely X.'` },
  // -기로 했어요 (duplicate already handled but may appear again)
  { t:'h', old:`-기로 했어요 = decided to. -(으)면서 = while doing.`,
    new:`Firm decision vs. simultaneous action: one is a plan made, the other is two things at once.` },
  { t:'h', old:`-는 편이다 (tendency) + 그래서 (so): tendency leading to action.`,
    new:`Combine a tendency expression with a result connector to show cause and effect.` },
  { t:'h', old:`-기로 했어요 = decided to. 가입하다 = to join.`,
    new:`A firm decision has been made about joining a club. Which grammar form expresses this?` },
  // 시작할 거예요
  { t:'h', old:`Future tense -(으)ㄹ 거예요: 시작하다 → 시작할 거예요.`,
    new:`Form the future intent of the starting verb. Consonant stem + 을 거예요.` },
  // Duration -ㄴ 지 + -는데
  { t:'h', old:`Duration (-ㄴ 지 + 되다) sets up background, -는데 contrasts with difficulty`,
    new:`Set the duration since an event + contrast the background with current difficulty.` },
  // -(으)시- + -네요
  { t:'h', old:`Honorific -(으)시- respects the listener + -네요 expresses admiration.`,
    new:`Honorific respect combined with admiration: two layers honoring the listener.` },
];

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fixFile(unitNum) {
  const fileName = `unit-${String(unitNum).padStart(2, '0')}.js`;
  const filePath = path.join(BASE, fileName);

  if (!fs.existsSync(filePath)) {
    return 0;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixCount = 0;

  for (const fix of FIXES) {
    const prop = fix.t === 'h' ? 'hint' : 'q';
    const escapedOld = escapeRegex(fix.old);

    // Try exact match first: hint:"<old>"
    let regex = new RegExp(`(${prop}:")${escapedOld}(")`, 'g');
    let matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `$1${fix.new}$2`);
      fixCount += matches.length;
    }

    // For truncated hints (validator truncates at ~70 chars), try prefix match
    // Only if old string is long enough and exact match didn't work
    if (!matches && fix.old.length > 50) {
      const prefix = fix.old.substring(0, 48);
      const prefixEscaped = escapeRegex(prefix);
      const prefixRegex = new RegExp(`(${prop}:")${prefixEscaped}[^"]*(")`,'g');
      const prefixMatches = content.match(prefixRegex);
      if (prefixMatches) {
        content = content.replace(prefixRegex, `$1${fix.new}$2`);
        fixCount += prefixMatches.length;
      }
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  unit-${String(unitNum).padStart(2,'0')}.js: ${fixCount} fixes`);
  }

  return fixCount;
}

let totalFixes = 0;
for (let i = 1; i <= 30; i++) {
  totalFixes += fixFile(i);
}

console.log(`\n=== TOTAL: ${totalFixes} fixes applied ===`);
