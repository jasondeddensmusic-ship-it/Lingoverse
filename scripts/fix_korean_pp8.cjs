#!/usr/bin/env node
/**
 * fix_korean_pp8.cjs
 * Fixes HINT_LEAK and VISUAL_LEAK violations in Korean v2 units 01-30.
 * Each fix maps old hint → new hint.
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'korean-v2');

// Map of exact old hint strings → replacement hint strings
// All replacements: in English, 15+ chars, no answer words, guide not give
const HINT_FIXES = {
  // Unit 01
  "-요 at the end = polite speech (해요체). You're in this register from day ":
    "The ending on polite verbs signals a specific speech register you use daily.",
  "감사+합니다 and 안녕+하세요 both use 하다":
    "Both phrases are noun + verb compounds. What action verb do they share?",
  "안 verb = verb + 지 않아요. Same meaning.":
    "Two ways to negate a verb: short form (before verb) and long form (after stem).",
  "Japan = 일본":
    "The person is not Korean or Chinese. Think of the third East Asian country.",
  "Both follow the pattern: noun + 하다 = verb. 감사 + 하다, 죄송 + 하다.":
    "This verb root is found in both expressions of gratitude and apology.",
  "커피 actually means coffee. The others have shifted meanings.":
    "One word keeps its English meaning exactly. The rest are false friends.",
  "They GO → 가세요 (go in peace)":
    "The other person is leaving. You wish them peace as they depart.",
  "없어요 = don't have / there isn't":
    "Use the opposite of 있다 to say something is absent or unavailable.",
  "없어요 = there isn't":
    "The doctor is not present. Which expression means something is absent?",
  "Place + 에 + 있어요 = am at [place]":
    "Static location uses 에. Which sentence places someone at a location?",
  "누구 as subject becomes 누가 (누구 + 이/가)":
    "The question asks who is present. The subject marker changes the question word.",
  "100,000 = 10 × 만(10,000) = 십만":
    "This is 10 times the unit for ten-thousand. Think in terms of Korean number units.",
  "다섯 (5) does NOT contract. No change needed.":
    "Only the first few native numbers contract before counters. Five is not one of them.",
  "하나 contracts to 한 before counters: 한 명, not 하나 명":
    "People as a group of one use a contracted number form before the counter.",
  "Animals use 마리. 5 = 다섯 (no contraction needed)":
    "Count the dogs with the counter for small animals and the native number for five.",
  "Native hours (세) + Sino minutes (삼십)":
    "Hours use native Korean numbers. Minutes use Sino-Korean. Three + thirty.",
  "카드 = card, 로 = by means of, 해 주세요 = please do":
    "Ask the cashier to process the payment using a specific method.",
  "합니다/ㅂ니다/습니다 = 합쇼체. The formal register.":
    "These verb endings belong to a formal speech level used in public or on TV.",
  "가다 → stem 가 + 고 싶어요":
    "Attach the desire expression to the verb stem. Vowel stem + desire ending.",
  "Add 지 않아요 to make the negative":
    "Use the long-form negation: attach it after the desire construction.",
  "보다 (to see) → 보고 싶어요, and 드라마를 (object)":
    "TV show + object marker + verb expressing desire to watch something.",
  "쓰다 → 써요: bitter":
    "This ㅡ-irregular verb describes an unpleasant taste. Think of black coffee.",
  "Stem + 고 싶어요":
    "Express wanting to eat something by attaching the desire ending to the verb stem.",
  "Koreans say 우리 (our) even for individual family members":
    "Korean uses a collective pronoun for family. It means 'our' not 'my.'",
  "Family = 우리, not 나의 or 저의":
    "When talking about a parent, Korean uses a communal possessive pronoun.",
  "많다 → 많아요: there is a lot":
    "Describe a large crowd of people. Think about how many people fill the space.",
  "어렵다 is ㅂ-irregular: 어렵다 → 어려워요":
    "This adjective is ㅂ-irregular. The ㅂ transforms when a vowel ending follows.",
  "예쁜 (modifier form)":
    "Convert this beauty adjective to its modifier form to describe the flower.",
  "예쁘다 → 예쁜 (modifier form before nouns)":
    "Use the modifier form of the beauty adjective to describe the flower.",
  "Being there statically (있어요, no action) → 에":
    "Static existence uses the location particle 에, not the action particle 에서.",
  "에게 (formal) = 한테 (casual). Both mean 'to a person.'":
    "Two forms of the dative particle exist: one formal, one casual. They share meaning.",
  "어디에 있어요? = Where does it exist? = Where is it?":
    "Ask where a specific facility is located using the location-existence question.",
  "역 + numbered exit + 앞에서 + 만나요  -  standard Korean meeting arrangement":
    "Arrange to meet at the front of a specific numbered station exit.",
  "A와 B 사이에 = between A and B":
    "Located between two buildings: one for money, one for coffee.",
  "Korean thinks of rain as 'coming': 비가 오다":
    "In Korean, precipitation uses a movement verb. It 'comes' rather than 'falls.'",
  "ㅂ-irregular: ㅂ becomes 워 before endings. The full pattern comes later.":
    "The irregular consonant in this adjective class changes before vowel endings.",
  "Socks go on your feet. Feet verb = 신다 → 신어요":
    "Put on footwear using the verb specifically for items worn on the feet.",
  "남산 = 남 (south) + 산 (mountain). The famous tower is there.":
    "The iconic mountain in Seoul means 'south' plus a word for elevated terrain.",
  "얼마나 = how much/long (degree/duration)":
    "This question word asks about degree or duration. How long does the trip take?",
  "합쇼체: -습니다/-ㅂ니다 endings. Formal but polite.":
    "The formal speech level is used in public announcements and professional settings.",
  "Long form: stem + 지 않았어요. 공부하 + 지 않았어요.":
    "Use the long-form past negation: attach the negative ending after the verb stem.",
  "Short 안 + past = long -지 않았어요. Same meaning, different form.":
    "The short negation 안 and the long negation form are interchangeable for the same sentence.",
  "-아/어서: tense ONLY on the last verb. 일어났어서 is wrong.":
    "The sequential connector -아/어서 never takes tense. Only the final verb is tensed.",
  "Past = stem + [tense car: 았/었/했] + 어요.":
    "The past tense uses three possible endings depending on the vowel harmony of the stem.",
  "손 + 가락 = finger. 발 + 가락 = toe. 가락 = the digit":
    "This body part word combines hand or foot with a word meaning digit or stick.",
  "심장 is the organ. 마음 is feelings.":
    "Two Korean words for 'heart': one is physical anatomy, one is emotional.",
  "Consonant stem + 을 수 있다. 먹 + 을 수 있어요.":
    "Express ability with 수 있다. Consonant stems need a vowel bridge before 수.",
  "Stem + 지 마세요. 먹 + 지 마세요.":
    "Use the prohibition form: attach -지 and the negative command to the stem.",
  "-지 마세요 = please don't. Advice: don't overdo it.":
    "The negative imperative form advises against exceeding one's physical limits.",
  "-(으)면 on first clause, -지 마세요 on second: if sick, don't overdo.":
    "Combine a conditional clause with a prohibition: if you feel this way, refrain.",
  "-는데/-은데 sets background. 좋은데 = nice + so/and...":
    "The background connector for adjectives uses -(으)ㄴ데. Nice weather + suggestion.",
  "Consonant stem + 을 수 있어요.":
    "Consonant stems need 을 before 수 있어요. Check which word ends in a consonant.",
  "Stem + 지 마세요 = please don't. ....":
    "Tell someone not to worry using the negative imperative form.",
  "Vowel stem: drop 다, add ㄹ 거예요.":
    "Express future intent with 거예요. Vowel stems attach ㄹ directly.",
  "Consonant stem + 을 거예요. ....":
    "Plan to eat something. Consonant stems need 을 before 거예요.",
  "Vowel stem + ㄹ 거예요. 가 + ㄹ":
    "Vowel stem future: attach ㄹ directly and add 거예요 for the plan.",
  "Close friends same age → 반말 is natural and expected.":
    "Casual speech is appropriate with peers of the same age or younger.",
  "까요=let's decide together, 래요=do YOU want to?":
    "One ending includes the listener in the decision; the other asks their preference.",
  "-고 = loose 'and.' -고 나서 = 'after finishing X, then Y.'":
    "One connector is sequential with emphasis on completion; the other is just additive.",
  "1st person feelings → -고 싶어요 (internal).":
    "First-person desire uses the internal form. Attach the desire ending to the stem.",
  "보다 = vowel stem. Drop 다, add ㄹ 거예요.":
    "Plan to watch something. This vowel stem verb takes ㄹ directly before 거예요.",
  "3rd person → -고 싶어해요.":
    "For third-person wants, use the external desire form that shows observed behavior.",
  "Commands/suggestions need -(으)니까, not -아/어서.":
    "The causal connector for commands differs from the sequential connector.",
  "Before = -기 전에. After = -(으)ㄴ 후에. When = -(으)ㄹ 때.":
    "Three time expressions: before, after, and during an action.",
  "질문 = question. 있어요 = I have.":
    "Express that you have a question. Use the existential verb with the noun.",
  "것 같아요 = seems/I think → indirectness = politeness.":
    "This phrase softens a statement by expressing it as an impression or inference.",
  "가: 갔어요 (past), 가요 (present), 갈 거예요 (future).":
    "Three tenses of the same verb: past, present, and future plan form.",
  "먹다: 먹어요 (해요체) → 먹습니다 (합쇼체) → 먹어 (반말).":
    "Three speech levels of eat: polite everyday, formal, and casual drop-요.",
  "-로 (by means of) + progressive + background: three constructs.":
    "This sentence uses three grammar forms: method, ongoing action, and background.",
  // Unit 12/13 fb hints
  "-아/어 보다 past: 타 봤어요 = have you tried riding?":
    "Express trying an experience in the past using the experiential ending.",
  "-(으)려고 = in order to. Purpose for taking the plane.":
    "State the purpose of boarding the aircraft using the purpose connector.",
  "-고 나서 and -(으)ㄴ 후에 both mean 'after doing.' -고 나서 is more casual.":
    "Use the casual 'after doing' connector. Lunch first, then coffee.",
  "-(으)ㄴ 후에 for 'after doing.' 체크인하다 → 체크인한 후에.":
    "After completing the registration process, rest in the room.",
  "-(으)러 가다 = go to do. 먹다 → 먹으러 가다.":
    "Combine going somewhere with a purpose using the movement-purpose connector.",
  "Purpose movement (-(으)러 가다) + progressive (-고 있다).":
    "Going to do something + currently in the middle of doing it.",
  "-로 (by means of) + conditional + contrast: comparing transport options":
    "Combine method, condition, and contrast to compare two ways of getting somewhere.",
  "-아/어 보다: tried eating. Past: 먹어 봤는데.":
    "The experiential ending means 'try doing.' Combine with 봤는데 for past experience.",
  "찾아 가다 = seek out and go. + -는 편이다 (tendency).":
    "Express the habit of going somewhere to find something, as a general tendency.",
  "-로 (by means of) + -는데 (background/and): transport + narrative flow.":
    "Combine method of transport with a background connector to set context.",
  "-는데 for narrative background: setting up the taxi scene before the mai":
    "Use the background connector to introduce the scene before the main point.",
  // ㅎ-irregular
  "ㅎ-irregular modifier: 빨갛다 → 빨간 + noun.":
    "The irregular adjective drops its final consonant before the modifier ending -ㄴ.",
  "ㅎ-irregular adjectives: 노랗다 → 노란 (ㅎ drops, ㄴ modifier). Same as 빨갛다 → ":
    "Color adjectives of this class drop the final consonant and add -ㄴ as a modifier.",
  "ㅎ-irregular modifier: ㅎ drops + ㄴ. 노란 + noun.":
    "This yellow color adjective follows the ㅎ-irregular modifier pattern.",
  "-로 (by means of) + 에서...까지 (from...to) + 걸리다 (takes time).":
    "Combine transport method, distance range, and duration verb in one sentence.",
  "즐기다 → 즐겨요. Cooking takes 를 as the object.":
    "Express enjoying a hobby as a regular activity with an object.",
  "Have NEVER = -(으)ㄴ 적이 없다. Which option uses the correct past modifier ":
    "The experience-negative structure pairs a past modifier with an absence marker.",
  "하다 → 한 적이 있다. Past modifier + 적이 있다.":
    "Have you had this experience? Use the past modifier plus the experience marker.",
  "Negative answer: -(으)ㄴ 적이 없어요. Same form, swap 있다 → 없다.":
    "Deny having had an experience by replacing the existence verb with its opposite.",
  "-보다 for comparison + -는데 for contrast.":
    "Compare two things and contrast the result using two separate grammar patterns.",
  "가장 = most/best. Superlative comparison among a group.":
    "This adverb expresses the top of a comparison. The best among all options.",
  "-보다 goes on the LESSER item. Coffee is less expensive, so 커피보다.":
    "Attach -보다 to the cheaper item when comparing prices with 더.",
  "-보다 comparison + -는데 contrast: taller but younger.":
    "The first person is taller but the second has a different quality.",
  "-기로 했어요 = decided. -고 싶어요 = want. Deciding is firmer.":
    "One expression shows a firm decision already made; the other is just a wish.",
  "-ㄴ 편이에요 softens the statement. All others are direct.":
    "This tendency expression softens personality descriptions. Not absolute, but leaning.",
  "읽다 is a verb. Verbs take -는 편이에요.":
    "Describe a reading habit as a general tendency using the appropriate verb ending.",
  "-는 편이다 states a general tendency, not an absolute.":
    "This pattern describes general habits or personality leanings, not firm facts.",
  "인기 있는 취미: present modifier -는 describes the hobby.":
    "Use the present-tense modifier to describe a currently popular activity.",
  // ㅅ-irregular
  "ㅅ drops. 낫 → 나 + 아요 = 나아요.":
    "This ㅅ-irregular verb describes recovery from illness. Its ㅅ drops before a vowel.",
  "씻다 → 씻어요 (ㅅ stays). The others are ㅅ-irregular.":
    "One cleaning verb is regular while others drop the final consonant before a vowel.",
  "ㅅ drops. 붓 → 부 + 어요 = 부어요.":
    "This ㅅ-irregular verb describes swelling. Its ㅅ drops when vowel endings follow.",
  "씻어요 (ㅅ stays) vs 지어요 (ㅅ drops).":
    "Two verbs: one for cleaning is regular, one for building is irregular. Compare them.",
  "ㅅ-irregular: 짓다 loses ㅅ before vowels. Past modifier: 지은.":
    "The verb meaning 'to build' is ㅅ-irregular. Its modifier form drops the consonant.",
  "-기로 했어요 = decided to. -(으)면서 = while doing.":
    "One expresses a firm decision; the other describes two actions happening at once.",
  "-는 편이다 (tendency) + 그래서 (so): tendency leading to action.":
    "Combine a tendency statement with a result connector to show cause and effect.",
  "-보다 goes on the lesser item. Reading is less fun, so 독서보다.":
    "Put -보다 on the less enjoyable activity when comparing with 더.",
  "Only ㅅ-IRREGULAR verbs drop ㅅ. Regular ones like 씻다 keep it.":
    "The irregular subtype of this consonant class is what makes the verb unpredictable.",
  "Both mean 'most' (superlative). 가장 is slightly more formal.":
    "Two superlative adverbs that both express the highest degree, with a formality difference.",
  "-기로 했어요 = decided to. 가입하다 = to join.":
    "Decide to join a hiking club. Use the firm decision grammar form.",
  "가장 means 'most.' 등산 is #1 = most popular.":
    "Hiking tops the list. Express superlative ranking among all hobbies.",
  "그런데 → 근데. Very common in casual speech.":
    "This casual connector is a shortened form of a longer contrasting word.",
  "그러니까 adds emphasis: 'that's WHY!'":
    "One connector is a logical 'so/therefore'; the other adds emphasis to the conclusion.",
  "Both mean 'so/therefore.' 그러니까 adds emphasis: 'that's WHY!'":
    "One connector is neutral cause-effect; the other adds strong emphasis to the reason.",
  "-는데 provides background context, -아/어서 gives the reason for the action":
    "One connector sets the background scene; the other provides the direct cause.",
  "-자마자 = as soon as. 보다 → 보자마자.":
    "The moment something is seen, immediate action follows. Use the immediacy connector.",
  "Immediate action (-자마자) + trying something (-아/어 보다).":
    "As soon as something happens, try a new action immediately after.",
  "-아/어도 = even if. 먹다 → 먹어도.":
    "Even consuming a large amount doesn't change the outcome. Use the concessive form.",
  "아무리 + -아/어도 = no matter how much + obligation.":
    "No matter how much of something is consumed, there is still an obligation.",
  "[noun]이다 → [noun]인데. It's the copula form.":
    "The copula 이다 changes form when -는데 is attached. What is the copula-background form?",
  "-는데 provides background context. -지만 is more direct contrast.":
    "One contrast connector is softer and conversational; the other is more direct.",
  "Progressive + -는데 for background. The situation contrasts with difficu":
    "An ongoing action sets the background, and the contrast follows.",
  "-는데 (contrast) + -는 편이다 (tendency): contrasting quality with price ten":
    "The product is one way in quality but tends toward another in price.",
  "Present modifier -는 + 사람: describes the kind of person.":
    "Use the present tense modifier to describe a type of person by their action.",
  "-거든요 gives background explanation for what was just said.":
    "This ending is used to offer an explanation for a previously stated fact.",
  "-네요 = 'Oh!' (spontaneous). -군요 = 'I see...' (processing the informatio":
    "One expresses immediate surprise; the other reflects processing new information.",
  "You're experiencing it RIGHT NOW. Immediate reaction = -네요.":
    "Direct observation right now calls for the spontaneous surprise ending.",
  "You're seeing it right now. Flowers blooming = direct experience. Surp":
    "Witnessing something beautiful unfold in front of you triggers immediate surprise.",
  "-네요 = speaker is surprised by what they directly observe or experience":
    "Direct first-hand observation calls for this spontaneous reaction ending.",
  "Background (-는데) + surprise from observation (-네요).":
    "Background information plus a spontaneous surprised reaction to what you see.",
  "르 splits: ㄹ goes to 모 → 몰. Then 라요 (bright vowel). 몰라요.":
    "This 르-irregular verb means not knowing. The 르 splits and ㄹ moves to the stem.",
  // Additional units 13-30
  "-는 편이다 = tendency. Statement about general eating habits.":
    "Describe eating tendencies as a general lean rather than an absolute statement.",
  "Simultaneous action (-(으)면서) + nominalization (-는 것).":
    "Two grammar forms: doing two things at once, and turning a verb into a noun.",
  "-기 위해서 = in order to. 배우다 → 배우기 위해서.":
    "State the purpose of learning using the purpose nominalizer.",
  "-기 nominalizes the verb for 시작하다 + -ㄴ 지 (since): duration pattern.":
    "Express how long it has been since starting something. Use two special forms.",
  "것을 contracts to 걸. One of the most common contractions in spoken Korea":
    "This casual contraction shortens the object form of a nominalizer.",
  "치맥 (치킨+맥주) is practically a national pastime.":
    "A portmanteau combining fried poultry with a popular Korean drink.",
  "Present noun modifier -는: 먹는 식당 = restaurant where one eats.":
    "Use the present tense modifier to describe the kind of place where eating happens.",
  "Delicious (modifier). In order to make (-기 위해서). I search for recipes.":
    "A modifier for taste plus a purpose expression plus searching for how-to guides.",
  "Past modifier -(으)ㄴ: 읽다 → 읽은. The book that was read.":
    "Apply the past tense modifier to describe a book that has already been read.",
  "남은 modifies 재료. 만든 modifies 요리. Both past modifiers.":
    "Two past modifiers: one for remaining ingredients, one for cooked dishes.",
  "Future modifier -(으)ㄹ: 먹다 → 먹을. The food that will be eaten.":
    "Apply the future modifier form to the verb when describing food planned for eating.",
  "Grilling (ㅂ-irregular). Suggesting eating together (-자고). The act of (":
    "Four constructs: irregular grilling verb, suggestion quote, nominalization, copula.",
  "-(으)라고: reported request/command. Mom asked grandma to make food.":
    "A reported speech form for requests and commands rather than statements.",
  "-다고 하다 = reported statement. Friend said: it is delicious.":
    "Report what a friend said about the food using the statement quotation ending.",
  "Past modifier describes the meat. -거든요 explains why.":
    "A past description followed by an explanatory background reason.",
};

// Visual leak fixes - need to rewrite the question to not contain the answer
// For VISUAL_LEAK, we need to find the question and rewrite it
// These are trickier - the question itself contains the answer

const VISUAL_FIXES = [
  // Unit 01 - "저는 학생이에요. What is the verb in this sentence?" ans="이에요"
  {
    old_q: "저는 학생이에요. What is the verb in this sentence?",
    new_q: "In '저는 학생이에요', the predicate that completes the identity statement is:",
  },
  // "What is the stem of 먹다?" ans="먹"
  {
    old_q: "What is the stem of 먹다?",
    new_q: "Remove the dictionary ending from 먹다. What is the bare stem?",
  },
  // "What is the stem of 가다?" ans="가"
  {
    old_q: "What is the stem of 가다?",
    new_q: "Remove the dictionary ending from 가다. What is the bare stem?",
  },
  // "있다 → stem is:" ans="있"
  {
    old_q: "있다 → stem is:",
    new_q: "Strip the dictionary suffix from 있다. What remains as the stem?",
  },
  // "The stem of 이에요/예요 is:" ans="이"
  {
    old_q: "The stem of 이에요/예요 is:",
    new_q: "What is the base form of the copula before the polite ending is added?",
  },
  // "김민수: which is the family name?" ans="김"
  {
    old_q: "김민수: which is the family name?",
    new_q: "In a full Korean name written as 김민수, which part is the family name?",
  },
  // "시간이 없어요. Which particle is on 시간?" ans="이"
  {
    old_q: "시간이 없어요. Which particle is on 시간?",
    new_q: "In '시간이 없어요', the noun 시간 ends in a consonant. Which subject particle follows?",
  },
  // "거기 maps to which 이/그/저 prefix?" ans="그"
  {
    old_q: "거기 maps to which 이/그/저 prefix?",
    new_q: "거기 means 'over there' (middle distance). Which spatial prefix group does it belong to?",
  },
  // "저는 커피를 마셔요.' Which particle marks the topic?" ans="저는"
  {
    old_q: "'저는 커피를 마셔요.' Which particle marks the topic?",
    new_q: "In the sentence '저는 커피를 마셔요', which word carries the topic marker?",
  },
  // "비싸다 ↔ ___:" ans="싸다"
  {
    old_q: "비싸다 ↔ ___:",
    new_q: "What is the antonym of 비싸다 (expensive)?",
  },
  // "여동생 = 여 + 동생. What is the gender prefix?" ans="여"
  {
    old_q: "여동생 = 여 + 동생. What is the gender prefix?",
    new_q: "The word for younger sister combines 동생 with a gender prefix. Which prefix marks female?",
  },
  // "In 먹어요, the stem is:" ans="먹"
  {
    old_q: "In 먹어요, the stem is:",
    new_q: "Separate 먹어요 into its stem and polite ending. What is the stem alone?",
  },
  // "학교까지 얼마나 걸려요?  -  Answer: 30분 ___." ans="걸려요"
  {
    old_q: "학교까지 얼마나 걸려요?  -  Answer: 30분 ___.",
    new_q: "Answer the duration question: 학교까지 얼마나 ___? → 30분 ___.",
  },
  // "해요체 → 반말: just drop -요. 먹어요 becomes:" ans="먹어"
  {
    old_q: "해요체 → 반말: just drop -요. 먹어요 becomes:",
    new_q: "To speak casually (반말), drop the polite ending. What does 먹어요 become?",
  },
  // "Convert 좋아요 to casual (반말):" ans="좋아"
  {
    old_q: "Convert 좋아요 to casual (반말):",
    new_q: "Drop the polite ending from 좋아요 to get the casual form. Result:",
  },
  // "A보다 B가 더 커요. Who is taller?" ans="B"
  {
    old_q: "A보다 B가 더 커요. Who is taller?",
    new_q: "In the sentence 'A보다 B가 더 커요', which person is described as taller?",
  },
  // "등산하기로 했어요 vs 등산하고 싶어요. Which is a firm plan?" ans="등산하기로 했어요"
  {
    old_q: "등산하기로 했어요 vs 등산하고 싶어요. Which is a firm plan?",
    new_q: "Compare two expressions about hiking: one is a firm decision, one is a wish. Which shows the decision?",
  },
  // "저는 커피를 마셔요.' Which particle marks the topic?" - already covered above
  // "좋은데 vs 좋는데. Which is correct for 좋다 (adjective)?" ans="좋은데"
  {
    old_q: "좋은데 vs 좋는데. Which is correct for 좋다 (adjective)?",
    new_q: "When attaching -는데/-은데 to 좋다 (adjective), which spelling is grammatically correct?",
  },
  // "Casual (반말) form of 먹어요:" ans="먹어"
  {
    old_q: "Casual (반말) form of 먹어요:",
    new_q: "To make 먹어요 casual, remove the politeness marker. The result is:",
  },
  // "어제 저는 학교에서 점심을 먹었어요. The verb is:" ans="먹었어요"
  {
    old_q: "어제 저는 학교에서 점심을 먹었어요. The verb is:",
    new_q: "In '어제 저는 학교에서 점심을 먹었어요', identify the main predicate (verb):",
  },
  // "등산하면서 음악을 들어요. 등산하기로 했어요. Which is the decision?" ans="등산하기로 했어요"
  {
    old_q: "등산하면서 음악을 들어요. 등산하기로 했어요. Which is the decision?",
    new_q: "Two hiking sentences: one shows a simultaneous action, one shows a decision. Which is the firm plan?",
  },
];

// Additional hint fixes found in later violations output
const EXTRA_HINT_FIXES = {
  "-는 편이다 = tendency. Statement about general eating habits.":
    "Describe eating tendencies as a general lean rather than an absolute statement.",
  "Simultaneous action (-(으)면서) + nominalization (-는 것).":
    "Two grammar forms: doing two things at once, and turning a verb into a noun.",
  "-기 위해서 = in order to. 배우다 → 배우기 위해서.":
    "State the purpose of an activity using the purpose nominalizer.",
  "-기 nominalizes the verb for 시작하다 + -ㄴ 지 (since): duration pattern.":
    "Express how long it has been since starting something. Use two special forms.",
  "것을 contracts to 걸. One of the most common contractions in spoken Korea":
    "This casual contraction shortens the object form of a nominalizer.",
  "치맥 (치킨+맥주) is practically a national pastime.":
    "A famous Korean food combo: crispy poultry plus a fermented beverage.",
  "Present noun modifier -는: 먹는 식당 = restaurant where one eats.":
    "Use the present tense modifier to describe the kind of place by what happens there.",
  "Delicious (modifier). In order to make (-기 위해서). I search for recipes.":
    "Combine a taste modifier with a purpose expression and recipe searching.",
  "Past modifier -(으)ㄴ: 읽다 → 읽은. The book that was read.":
    "Apply the past tense modifier to describe a book that has already been read.",
  "남은 modifies 재료. 만든 modifies 요리. Both past modifiers.":
    "Two past modifiers: one describes leftover ingredients, one describes a cooked dish.",
  "Future modifier -(으)ㄹ: 먹다 → 먹을. The food that will be eaten.":
    "Apply the future modifier to the eating verb when describing planned food.",
  "Grilling (ㅂ-irregular). Suggesting eating together (-자고). The act of (":
    "Four constructs combined: irregular grill verb, suggestion quote, nominalization, copula.",
  "-(으)라고: reported request/command. Mom asked grandma to make food.":
    "Reported speech for requests uses a different ending than for statements.",
  "-다고 하다 = reported statement. Friend said: it is delicious.":
    "Report what someone said about the food using the statement quotation pattern.",
  "Past modifier describes the meat. -거든요 explains why.":
    "A past description combined with an explanatory background reason ending.",
};

Object.assign(HINT_FIXES, EXTRA_HINT_FIXES);

function fixFile(unitNum) {
  const fileName = `unit-${String(unitNum).padStart(2, '0')}.js`;
  const filePath = path.join(BASE, fileName);

  if (!fs.existsSync(filePath)) {
    console.log(`  Skipping ${fileName} (not found)`);
    return 0;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixCount = 0;

  // Fix hint leaks
  for (const [oldHint, newHint] of Object.entries(HINT_FIXES)) {
    // Match the exact hint string in the file
    // Hints may be truncated in the validator output, so we need to handle partial matches
    // First try exact match with escaped special chars
    const escapedOld = oldHint.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(hint:")${escapedOld}(")`, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `$1${newHint}$2`);
      fixCount += matches.length;
      console.log(`  Fixed hint: "${oldHint.substring(0, 50)}..." → "${newHint.substring(0, 50)}..."`);
    } else {
      // Try partial match (truncated hint from validator - ends with space or truncated)
      // The validator may truncate at ~70 chars; check if the hint starts with this string
      if (oldHint.length >= 60) {
        // Look for hint starting with this prefix
        const prefix = oldHint.substring(0, 55).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const prefixRegex = new RegExp(`(hint=")${prefix}[^"]*(")`,'g');
        const prefixMatches = content.match(prefixRegex);
        if (prefixMatches) {
          content = content.replace(prefixRegex, `$1${newHint}$2`);
          fixCount += prefixMatches.length;
          console.log(`  Fixed hint (prefix): "${oldHint.substring(0, 50)}..." → "${newHint.substring(0, 50)}..."`);
        }
      }
    }
  }

  // Fix visual leaks - rewrite the question
  for (const fix of VISUAL_FIXES) {
    const escapedOld = fix.old_q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(q:")${escapedOld}(")`, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `$1${fix.new_q}$2`);
      fixCount += matches.length;
      console.log(`  Fixed visual q: "${fix.old_q.substring(0, 50)}..."`);
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ${fileName}: ${fixCount} fixes applied`);
  }

  return fixCount;
}

let totalFixes = 0;
for (let i = 1; i <= 30; i++) {
  console.log(`\nProcessing unit ${i}...`);
  totalFixes += fixFile(i);
}

console.log(`\n=== TOTAL: ${totalFixes} fixes applied ===`);
