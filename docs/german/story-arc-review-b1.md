# B1 Story Arc Review: Units 13-24

> Reviewer: Story Arc Writer Agent (Opus 4.6)
> Date: 2026-03-26
> Source material: `src/data/units-german-v2.js` lines 3813-7164
> Reference: `docs/german/episode-scene-breakdowns.md` units 13-24
> Total story cards reviewed: 214

---

## Executive Summary

The B1 arc is structurally sound. All 12 episode breakdowns are represented in the data. Character appearances follow the intended schedule. The major beats are present: CV shock, Karneval joy peak, Auslanderbehorde triumph, Hildi's du offer, BESTANDEN, courtyard finale. However, several cards suffer from **expository flatness** (telling instead of showing), some character voices blur into generic B1-textbook German, and a handful of designed emotional peaks are underserved. The weakest units are U16 (Der Streit) and U20 (Die Versicherung), where story cards feel functional rather than cinematic. The strongest are U17 (Karneval), U18 (Biergarten), and U24 (Einjahrig).

**Overall B1 arc rating: 3.7 / 5**

---

## Per-Unit Analysis

### Unit 13: Die Bewerbung -- Rating: 4/5

**What works:**
- Yilmaz's mentorship voice is excellent. Her shift from "kreativ" (diplomatic) to "perfekt" (firm) in a single exchange is perfectly in character.
- The mock interview scene lands: Verumius's "Ich... ahm..." stammer feels authentic.
- The acceptance email scene builds tension well with the two-card reveal (notification appears, then the email text).
- Lukas's text exchange ("Alter! Krass!") is pitch-perfect casual Berlin.

**Issues:**
- The Yilmaz coaching card ("So, Verumius. Dein Lebenslauf ist jetzt komplett. Aber du musst auch auf Annoncen reagieren konnen. Lass uns uben.") is **pure exposition**. She sounds like a textbook, not a character. Yilmaz is academic but warm underneath. This card needs her voice.
- Verumius's "Ich bin bereit. Ich habe die ganze Nacht geubt." is too simple for B1. He should express this with more complexity and personality.

**Missing beats:**
- The designed CV format shock (photo on CV, marital status) is only implied through Yilmaz's dialogue about "Struktur." The breakdowns call for Verumius to react to the photo requirement specifically. This cultural comedy beat is underplayed.

**Cards needing rewrite:**
1. Yilmaz coaching card (line ~3868): Replace textbook transition with character-driven line. Suggested: `"So. Dein Lebenslauf sieht jetzt aus wie ein richtiger deutscher Lebenslauf. Foto, Unterschrift, alles. Aber... kannst du auch auf eine Stellenanzeige reagieren, ohne in Panik zu geraten?"` -- This gives her the slight tease she's known for.
2. Verumius "Ich bin bereit" card (line ~3870): Add personality. Suggested: `"Ich bin bereit. Ich habe die ganze Nacht geubt. Mein Spiegel kennt jetzt meinen Lebenslauf auswendig."` -- Self-deprecating humor fits B1 Verumius.

---

### Unit 14: Erster Arbeitstag -- Rating: 4/5

**What works:**
- The suit-vs-jeans opening is strong visual comedy in a single narrator card.
- Mia's voice is consistently direct and pragmatic. Her lines about the Kaffekuche rules, passive-aggressive notes, and Feierabend all feel authentic.
- The du/Sie minefield scene is excellent: the silence card ("Stille. Mias Augen werden gross.") is cinematic.
- Birthday cake comedy beat is perfectly placed.
- Feierabend sacredness comes through clearly.

**Issues:**
- The passive voice is used heavily in story cards because that is the grammar topic, but it occasionally makes dialogue sound unnatural. Mia's line "Der Kaffee wird jeden Morgen um acht gemacht. Die Spulmaschine wird nach dem Mittagessen ausgeraumt." is too formulaic for a character who speaks directly.
- The narrator card about 16:58 office shutdown is good but the passive constructions ("Computer heruntergefahren... Jacken werden angezogen... Taschen werden gepackt") read like a grammar exercise embedded in a story.

**Missing beats:**
- The breakdowns specify Mia notices Verumius is overdressed and comments on it warmly. The actual implementation has her say "Du bist etwas overdressed." This is good but could use the designed comedy beat: Verumius in a suit, everyone else in jeans.

**Cards needing rewrite:**
1. Mia Kaffekuche rules card: Make it sound like Mia, not a rulebook. Suggested: `"Der Kaffee wird um acht gemacht. Wenn du den letzten nimmst und keinen neuen machst... na ja, ich sage nur: die Zettel an der Wand sprechen Bande."` -- More Mia, less grammar drill.
2. The 16:58 narrator card: Keep the passive constructions (they serve the grammar) but add one line of Verumius's reaction mid-card to break the pattern feel.

---

### Unit 15: Reise nach Hamburg -- Rating: 3.5/5

**What works:**
- The "Moin!" exchange is charming and culturally sharp.
- The "Herr Professor Doktor Schmidt" title culture comedy lands well.
- The Elbphilharmonie reflection sequence is the emotional highlight: three cards building from external description to internal feeling. The genitive prepositions (trotz, wahrend, wegen, statt) are woven into the emotional arc naturally.
- Lukas's surprise appearance at Berlin Hauptbahnhof is a good character bridge.

**Issues:**
- The Hamburg colleague is a generic placeholder. The breakdowns describe a person who holds a sign with Verumius's name. The implementation just has a disembodied "colleague" voice with no personality.
- Verumius's reflection on the train ("Trotz des Regens, trotz der Nervositat...") is emotionally flat. He lists things he is grateful for rather than showing an interior moment.

**Missing beats:**
- The professional disagreement scene from the breakdowns is absent. The designed beat was a disagreement handled in formal German. Instead, we get a formal introduction and a tip card about genitive case. The conflict-resolution dimension is missing entirely.
- The comedy of Verumius's wind-blown toga on the Elbphilharmonie plaza (subtle meta-joke about his Roman origins) is not present.

**Cards needing rewrite:**
1. Train reflection card: Replace the grateful list with an inner monologue that shows emotional complexity. Suggested: `"Der Regen hat aufgehort. Oder hat er das? Nein, er hat aufgehort. Verumius schreibt in sein Notizbuch: 'Hamburg ist anders. Formeller, nasser, langsamer. Aber der Professor hat gelacht, als ich seinen Titel vergessen habe. Vielleicht ist Formlichkeit manchmal nur eine Huelle.'"` -- Shows Verumius processing, not just listing.
2. Hamburg colleague cards: Give the colleague a name and one distinguishing trait. Even "Frau Jensen, die immer einen Schirm dabei hat" adds texture.

---

### Unit 16: Der Streit -- Rating: 2.5/5 (weakest story execution)

**What works:**
- The opening premise is strong: 20:05 on a Sunday, drill in hand.
- Heinrich's phone wisdom ("Nachbarn sind wie Brot") is a perfect character line.
- The jam/pickles resolution is sweet and culturally resonant.

**Issues:**
- **The Hildi mediation scene is entirely absent from story cards.** The breakdowns describe a full cinematic mediation scene in Hildi's living room with her presiding like a judge. This is one of the most important character moments in B1 (Hildi showing her true self: stern but fair, a natural leader). Instead, we get a single card where Hildi says she read the Hausordnung and knows who is right. This is a major missed opportunity.
- The stairwell note war is compressed to a single narrator card mentioning three notes on the wall. The designed beat is an escalating comedy of passive-aggressive notes, each more elaborate than the last.
- The neighbor has no voice at all. The breakdowns describe a middle-aged man in house slippers. In the data, he is entirely off-screen.
- **nachdem + Plusquamperfekt is overused in story cards.** Four cards begin with "Nachdem Verumius..." which turns the story into a grammar exercise rather than a narrative.

**Missing beats:**
- Hildi mediation scene (designed as Scene 3, cinematic)
- Neighbor's voice/presence in any card
- The escalating note comedy
- Emotional resolution weight (the peace offering feels rushed)

**Cards needing rewrite (this unit needs the most work):**
1. **Add Hildi mediation cards (2-3 new story cards).** This is the unit's emotional core. Hildi between Verumius and the neighbor, Hausordnung open, reading glasses on, adjudicating with legal precision. Her voice: `"Paragraph sechs, Abschnitt drei: Ruhezeiten gelten sonntags ganztags. Sie haben um 20:05 gebohrt. Das ist ein klarer Verstoss. Allerdings..."` -- she turns to the neighbor -- `"...steht in Paragraph acht, dass Beschwerden schriftlich an die Hausverwaltung zu richten sind, nicht als Zettel an die Wand."` She finds fault with both sides. Classic Hildi.
2. **Give the neighbor at least one card.** Suggested: `{type:"story",speaker:"nachbar",mood:"grumpy",trg:"Sonntag! Sonntagabend! Ich sitze in meinem Sessel, Tatort lauft, und dann: BRRRRR! Das ist nicht akzeptabel!",src:"Sunday! Sunday evening! I'm sitting in my armchair, Tatort is on, and then: BRRRRR! That is not acceptable!"}` -- The Tatort detail is culturally perfect and gives the neighbor humanity.
3. **Vary the "Nachdem..." openings.** At most two cards in one unit should use the same construction.

---

### Unit 17: Karneval im Rheinland -- Rating: 4.5/5 (strongest narrative)

**What works:**
- The opening narrator card is cinematic gold. The sentence "Verumius steigt aus dem ICE und tritt in eine Wand aus Farbe und Larm" is vivid, visceral, B1-appropriate.
- Verumius's reaction ("Das ist... Deutschland? Das gleiche Land mit den Formularen und der Punktlichkeit?") is the unit's thesis in one line. Perfect.
- Mia is in her element. Her voice shifts from Berlin-direct to festive-animated. This character modulation is well done.
- The Rosenmontagszug scene builds to genuine ecstasy: "KAMELLE! KAMELLE!" followed by the bear hug from a stranger.
- The narrator reflection card about confetti proof ("Er entfernt das Konfetti nicht. Noch nicht. Es ist der Beweis...") is the best single card in all of B1. Emotionally layered, poetic without being pretentious, and narratively satisfying.
- The train ride home with Mia sleeping and bee antennae crooked is a beautiful visual detail.

**Issues:**
- The "um...zu" and "statt...zu" constructions in Mia's dialogue sometimes feel inserted rather than organic. "Ohne sich zu verkleiden, kann man Karneval nicht richtig erleben" is correct but stilted.
- Three teach cards for media vocabulary (die Reportage, der Journalist, der Fotograf) interrupt the narrative flow between the Kneipentour scene and the Rosenmontagszug. These could be repositioned.

**Missing beats:**
- The designed meta-joke of Verumius being a Roman senator at Karneval (he IS a Roman) is present ("Ich bin... ein romischer Senator?") but undersold. One more card showing him in the costume, with strangers reacting, would complete the joke.

**Cards needing minor polish:**
1. Mia's "Ohne sich zu verkleiden" line: Rework as: `"Man verkleidet sich, damit man jemand anderes sein kann. Und dann? Dann ist alles erlaubt."` -- More natural, same grammar target (damit clause instead of um...zu, but um...zu gets practiced elsewhere).

---

### Unit 18: Im Biergarten -- Rating: 4.5/5

**What works:**
- The full-cast gathering feels earned. Each character arrives distinctly: Hildi already seated (she reserved), Mia from Lauftreff (thirsty, hungry, both), Lukas last with the guitar case (nobody says anything, but Mia raises an eyebrow). Excellent character choreography.
- Heinrich on speakerphone is perfect: urgent, loud, passionate about asparagus. His seasonal emergency is comedic and culturally authentic.
- Hildi's "Als mein Mann noch lebte" revelation is devastating in its simplicity. The breakdowns called for a quieter Hildi moment, and this delivers.
- Lukas's guitar scene is the emotional centerpiece. The narrator card ("Lukas spielt. Augen geschlossen. Die Musik ist schon und traurig.") has real restraint.
- Mia's whispered context ("Seine Band hat sich letzten Monat getrennt") is show-don't-tell at its best.
- The walking-home sequence lands the belonging theme: "Als ich nach Berlin kam, kannte ich niemanden. Jetzt wartet jemand auf mich."

**Issues:**
- Lukas's "Danke fur heute. Ich habe lange nicht gespielt. Ich freue mich daruber, dass ihr zugehort habt." is too formal for Lukas. He is the most casual character. He would not use "Ich freue mich daruber, dass..." -- that is Yilmaz register. Lukas would say something simpler and more vulnerable.
- The als vs wenn grammar target sometimes surfaces too explicitly in Hildi's dialogue.

**Cards needing rewrite:**
1. Lukas's thank-you card: Suggested: `"Hey... danke. Ich hab echt lange nicht gespielt. Es war... gut."` Then a pause. Then: `"War echt schon, dass ihr zugehort habt."` -- Broken syntax = vulnerability. Lukas doesn't speak in complete subordinate clauses when he is being real.

---

### Unit 19: Auslanderbehorde -- Rating: 3.5/5

**What works:**
- The opening waiting room card is atmospheric and detailed. The digital display (A247 vs B089), the fluorescent hum, the printer rattling -- all good world-building.
- The stamp scene ("WUMM. Genehmigt.") is punchy and satisfying.
- KD's deadpan response ("Naturlich. Sie hatten ja alle Unterlagen. War doch klar.") is peak KD.
- The group chat celebration card nails every character in one line: Lukas (emojis), Mia (formal congrats), Hildi (terse), Heinrich (via Hildi: "Endlich!").

**Issues:**
- **The waiting room is described twice.** Cards 1 and 2 both describe Verumius checking his folder in the waiting room. The second card adds nothing new. It is a redundant scene-setter that breaks momentum.
- The Beamtin (officer) is functional but bland. The breakdowns do not require personality here, but one small detail would help.
- The final reflection card is an **exposition dump**: Verumius lists everything he has done (Anmeldung, Girokonto, Versicherung, Sprachkurs, Arbeitsvertrag, Behordengange). This tells the audience what they already know. It reads like a recap for someone who skipped the previous 18 units.

**Missing beats:**
- KD is only on the phone. The breakdowns have him at the Burgeramt, not the Auslanderbehorde, so a phone call is correct. But the card misidentifies KD as "Herr Hoffmann" -- this is correct (Verumius would still use Sie with him at this point), but it is worth noting that KD's designed arc includes a warmer off-duty persona (seen in U20). Here he is pure bureaucrat mode, which is fine for the timeline.

**Cards needing rewrite:**
1. **Delete or merge the redundant waiting room card.** One atmospheric card is enough.
2. **Rewrite the final reflection card.** Instead of listing accomplishments, show Verumius's emotional state. Suggested: `"Verumius sitzt auf der Couch. Der Aufenthaltstitel liegt auf dem Couchtisch. Er nimmt ihn in die Hand. Dreht ihn um. Sein Foto. Sein Name. Eine Adresse in Berlin. Er legt ihn zuruck. Dann nimmt er ihn noch einmal. Nur um sicher zu sein, dass er echt ist."` -- Physical action reveals emotion. The list of past bureaucratic steps is unnecessary.

---

### Unit 20: Die Versicherung -- Rating: 2.5/5

**What works:**
- The opening comedy of 20 letters, 5 brochures, and 3 forms from the Krankenkasse is a strong setup.
- The narrator's line about "Beamtendeutsch" ("Die Sprache, in der Formulare leben und Hoffnung stirbt") is genuinely funny and well-written.
- Hildi drawing diagrams on napkins is in character.

**Issues:**
- **KD's off-duty revelation scene is drastically underserved.** The breakdowns describe this as a key character moment: KD in jeans at a cafe, warm Bavarian du, reading bureaucratic letters like children's books. This is where the audience discovers KD is human. The actual card gives him one line ("Also, zeig mal her. Die Briefe, uber die du dich beschwerst, sind eigentlich ganz einfach.") -- He already uses du here, which contradicts the timeline (he does not offer du until later, or does he?). More importantly, the card misses the physical comedy of KD in civilian clothes.
- The unit has only 7 story cards total. This is thin for a full narrative arc.
- The "richtiger Berliner" moment (Verumius choosing TK) feels unearned. He circled a health insurance name. That does not make someone a Berliner.

**Missing beats:**
- KD in civilian clothes (physical description, shock factor)
- The cafe setting (designed as Scene 2)
- Hildi as system expert with genuine expertise (she was a civil servant)
- The emotional weight of choosing a Krankenkasse as an act of commitment to Germany

**Cards needing rewrite:**
1. **Expand KD's scene significantly.** Add a narrator card describing his appearance: `"Verumius erkennt ihn fast nicht. Herr Hoffmann tragt Jeans. Und Turnschuhe. Und lachelt. Er sieht aus wie ein anderer Mensch."` Then KD's dialogue can shift to warm Bavarian inflections: `"Setz dich. Zeig mal. Ach, das ist doch nur die jahrliche Beitragsanpassung. Zehn Minuten, dann verstehst du alles."` -- Bavarian warmth, casual du, expertise worn lightly.
2. **Rewrite the "richtiger Berliner" card.** The health insurance choice alone is not the milestone. Move this line to a more appropriate context or reframe: `"Verumius kreist 'TK' ein. Es ist nur ein Kreis auf Papier. Aber es ist auch eine Entscheidung: er bleibt. Er zahlt ein. Er gehort zum System. Das System gehort zu ihm."` -- Make the act symbolic without overclaiming.

---

### Unit 21: Ost und West -- Rating: 4/5

**What works:**
- Mia's character shift in Leipzig is excellent. Her energy changes: she is proud, animated, showing roots. The line "Fruher war das hier alles grau" reveals personal history without exposition.
- The Nikolaikirche scene achieves the right tone: reverent without being heavy-handed. "Hier beteten Menschen fur Freiheit, wahrend bewaffnete Polizisten draussen warteten" is powerful and appropriately simple for B1.
- Mia's "70.000 Menschen... Ohne Gewalt. Nur mit Kerzen." is devastating.
- Hildi's stairwell vulnerability scene is the emotional peak of the entire B1 arc. Her dead husband, Leipzig, the DDR, the du offer -- all woven together in one quiet moment. This is Netflix-quality writing.
- The du offer is perfectly placed and earned. "Wir kennen uns jetzt seit fast einem Jahr. Wir haben einander durch schwierige Zeiten geholfen. Du kannst ruhig du sagen." -- Simple, dignified, Hildi.

**Issues:**
- The unit is teach-card heavy. Between the Nikolaikirche scene and Hildi's du offer, there are approximately 15 teach cards in sequence. The narrative momentum stalls.
- Mia's grandparents and the DDR are mentioned in one card and then dropped. The designed beat calls for more texture here.
- The restaurant scene at the end is pleasant but inconsequential. The Saxon dialect comedy (Mia orders in Sachsisch, Verumius understands half) is mentioned in narration but not shown through dialogue.

**Missing beats:**
- Mia speaking actual Saxon dialect words (even one or two for comedy)
- Deeper exploration of Mia's family history and the trust issue ("Man wusste nie, wer fur die Stasi arbeitete" is strong but isolated)

**Cards needing rewrite:**
1. Restaurant scene: Show the Saxon. Even one line: `{type:"story",speaker:"mia",mood:"playful",trg:"Nu, ich had gern de Leipz'ger Allerlei, bidde scheen!",src:"(In Saxon dialect) Well, I'd like the Leipziger Allerlei, please!"}` followed by Verumius: `"War das... Deutsch?"` -- Comedy and cultural learning in two cards.

---

### Unit 22: Umwelt und Alltag -- Rating: 3/5

**What works:**
- The Pfand callback to U4 is a satisfying narrative arc completion. "Erinnern Sie sich an Unit 4?" breaks the fourth wall effectively.
- The Bio-Markt vs Discounter debate gives Mia and Lukas contrasting consumer philosophies, which adds dimension.
- Yilmaz's du offer is a quiet milestone. The narrator card about "ein entscheidender Moment" contextualizes it well.
- Mia's "Du bist ein richtiger Berliner geworden" is the better placement of this line (compared to U20's premature version).

**Issues:**
- **Two "richtiger Berliner" moments in two units.** U20 has "Also ist er jetzt ein richtiger Berliner" after choosing health insurance, and U22 has Mia saying "Du bist ein richtiger Berliner geworden." The first undermines the second. The U20 version should be cut or reworded.
- Verumius's sustainability presentation cards feel like a work scene from a different show. The German is correct but the emotional stakes are low.
- The narrator's fourth-wall break ("Erinnern Sie sich an Unit 4?") is charming but may confuse the lesson flow if the user did not do the units in order.

**Missing beats:**
- The designed "Pfand mastery montage" (Verumius efficiently feeding bottles, collecting receipt, using it at checkout) is compressed to one narrator card. The breakdowns call for this to be a visual contrast with U4.
- Lukas's contribution of "chaos" to the environment theme is mentioned in breakdowns but underrepresented.

**Cards needing rewrite:**
1. **Remove the "richtiger Berliner" line from U20** (or reword to something less definitive). Reserve the phrase for U22 where Mia delivers it.
2. **Rework the fourth-wall Pfand card.** Instead of addressing the audience directly, let the narrator observe: `"Am Pfandautomaten. Verumius schiebt die Flaschen hinein, ohne nachzudenken. Seine Hande kennen die Bewegung. Er erinnert sich an seinen ersten Versuch, vor neun Monaten, als er drei Minuten vor dem Automaten stand und nicht wusste, wo die Flaschen hineingehen. Jetzt sammelt er den Bon und geht zur Kasse."` -- Memory within the narrative, no fourth wall needed.

---

### Unit 23: Die Prufung -- Rating: 4/5

**What works:**
- The study bunker opening card sets the mood perfectly. Dawn light, empty coffee cups, flashcards everywhere.
- The irrealis Bedingungssatz card ("Wenn Verumius mehr geschlafen hatte, ware er jetzt weniger mude") integrates grammar into narrative beautifully.
- The exam scene is tense and economical. "Die Prufungsbogen liegen umgedreht auf dem Tisch. Die Uhr tickt." -- Cinematic.
- The BESTANDEN reveal is well-paced: scanning the list, finger sliding, finding the name, one word, fist clench.
- Heinrich's arrival with Sauerteigbrot and bread philosophy is the B1 comedic peak. "Prufungen kommen und gehen. Aber Brot bleibt." is an instant classic. His callback to failing his own Meisterprufung adds depth.

**Issues:**
- Yilmaz's coaching card ("Wenn du mehr Zeit hattest, wurdest du dich sicherer fuhlen. Aber du brauchst dir keine Sorgen zu machen.") is generic encouragement. The designed Yilmaz is more specific in her mentorship. She would reference his actual progress, not platitudes.
- The celebration scene is told through Heinrich's cards only. Where are the other characters' reactions? Hildi with the cake she baked? Mia with the book gift? Lukas with a beer toast?

**Missing beats:**
- Hildi's cake ("B1 BESTANDEN" in icing) from the breakdowns
- Mia's gift (a book)
- Lukas's beer toast
- Yilmaz raising a glass
- The emotional weight of the full cast gathered specifically for Verumius

**Cards needing rewrite:**
1. Yilmaz coaching card: Make it personal. Suggested: `"Erinnerst du dich an deine erste Bewerbung? Roter Stift uberall? Und jetzt sitzt du hier und machst dir Sorgen uber den Konjunktiv II. Das ist Fortschritt, Verumius. Echter Fortschritt."` -- References U13, shows her long view.
2. **Add celebration cards for the full cast.** At minimum: Hildi with cake, Mia and Lukas reacting. This is the B1 payoff scene. It should not be rushed.

---

### Unit 24: Einjahrig -- Rating: 4.5/5

**What works:**
- The morning reflection opening is gorgeous. "Die Sonne geht auf. Berlin wacht auf. Und Verumius wacht mit." -- Rhythmic, simple, perfect B1 closer.
- The photo scroll sequence uses Plusquamperfekt naturally: "Vor einem Jahr hatte er noch kein Wort Deutsch gesprochen." -- Grammar as memory.
- The courtyard setup card with Hildi's bin-moving permission is a wonderful character detail. "Die Mulltonnen durfen nicht einfach so verschoben werden... Aber ich habe zugestimmt. Ausnahmsweise." -- Peak Hildi.
- KD's arrival with the cactus ("Ich hatte nicht vorgehabt zu kommen, aber... hier. Fur Paragraph.") is the unit's comedic and emotional peak. The awkwardness, the gift, the reference to his own cactus (Paragraph). Perfectly executed.
- Yilmaz's callback to the train from U1 ("Weisst du noch, als du mich auf dem Zug gefragt hattest, ob Berlin schwer ist?") is a masterful narrative bookend.
- The gifts inventory card (Hildis Teetasse, Lukas' Mixtape, Mias Wein, Yilmaz' Roman, KDs Kaktus) is poetic in its simplicity.
- The final line ("Ich bleibe. Ich werde bleiben. Und jetzt... wird es ernst.") is a perfect B1 closer and B2 bridge. Three tenses in three sentences (present, future, present). Beautiful.

**Issues:**
- The second and third reflection cards (scrolling photos, listing what he learned) are slightly redundant. Two cards saying "he learned so much" dilutes the impact. One strong reflection card is enough.
- Lukas tuning his guitar is mentioned but he never plays. The breakdowns suggest he has healed from the band breakup enough to play at the celebration. A brief card of him playing would complete his U18 arc.
- Heinrich is absent from U24. The breakdowns do not explicitly place him here, but his presence (even via speakerphone again) would feel right after his U23 Sauerteigbrot moment.

**Cards needing minor polish:**
1. **Merge the two morning reflection cards** into one stronger card. Keep the Fernsehturm image and the "wacht mit" rhythm. Cut the generic reflection.
2. **Add a Lukas guitar card** at the gathering: `"Lukas spielt. Diesmal kein trauriges Lied. Etwas Neues. Etwas, das nach Sommer klingt."` -- Closes his arc from U18 sadness to U24 healing.

---

## Cross-Unit Issues

### 1. Character Voice Drift

| Character | Designed Voice | Actual Drift | Severity |
|-----------|---------------|--------------|----------|
| Yilmaz | Academic, precise, warm underneath | Sometimes generic mentor | Medium |
| Lukas | Casual Berliner, broken syntax when vulnerable | Occasionally too formal (freue mich daruber) | Medium |
| KD | Deadpan bureaucrat, warm off-duty | U20 off-duty scene underwritten | High |
| Hildi | Stern, legal precision, unexpectedly tender | Mostly excellent, some exposition | Low |
| Mia | Direct, pragmatic, East German pride | Consistently good | Low |
| Heinrich | Loud, warm, bread philosopher | Only appears in U16 + U23, both excellent | Low |

### 2. Grammar-as-Story vs Grammar-as-Exercise

The weakest cards are those where a grammar target visibly drives the dialogue rather than the character's intention. Examples:
- U14: Passive voice in Mia's Kaffekuche rules
- U16: Four "Nachdem..." openings in one unit
- U19: Bureaucratic vocabulary lists in final reflection
- U22: Partizip I/II constructions in environmental presentation

The strongest cards hide the grammar inside character motivation. Examples:
- U17: "Das gleiche Land mit den Formularen und der Punktlichkeit?" (genitive-like construction in genuine surprise)
- U18: "Als ich nach Berlin kam, kannte ich niemanden" (als + Prateritum in real reflection)
- U24: "Ich bleibe. Ich werde bleiben. Und jetzt... wird es ernst." (three tenses, three emotional beats)

### 3. Emotional Arc Gaps

The B1 arc should follow: **Anxiety (U13) > Growth (U14-15) > Conflict (U16) > Joy peak (U17) > Belonging (U18) > Triumph (U19) > Grounding (U20) > Depth (U21) > Integration (U22) > Challenge (U23) > Resolution (U24).**

Current state:
- Anxiety to Growth: GOOD
- Conflict (U16): WEAK -- mediation scene missing, neighbor voiceless
- Joy peak (U17): EXCELLENT
- Belonging (U18): EXCELLENT
- Triumph (U19): GOOD -- slightly redundant pacing
- Grounding (U20): WEAK -- KD scene underwritten, thin story coverage
- Depth (U21): GOOD -- Hildi's du offer is excellent
- Integration (U22): ADEQUATE -- two "richtiger Berliner" moments dilute impact
- Challenge (U23): GOOD -- celebration scene needs more cast
- Resolution (U24): EXCELLENT

### 4. Narrative Hooks Between Units

| Hook | Designed | Implemented | Status |
|------|----------|-------------|--------|
| U13>U14: First day at work | Yes | Yes (Lukas guitar seeds U24) | PASS |
| U14>U15: Hamburg trip | Yes (Mia mentions it) | Yes | PASS |
| U15>U16: Neighbor conflict brewing | Implied | Not present | MISS |
| U16>U17: Karneval coming | Designed as hook | Not present | MISS |
| U17>U18: Biergarten season | Designed as hook | Not explicitly present | WEAK |
| U18>U19: Auslanderbehorde appointment | Yes | Yes (mentioned in walking-home scene) | PASS |
| U19>U20: Insurance next | Yes | Implied by reflection card listing tasks | WEAK |
| U20>U21: Leipzig invitation | Designed (Hildi Scene 4) | Not present | MISS |
| U21>U22: Environment project | Yes (Mia's last line) | Yes | PASS |
| U22>U23: Exam approaching | Yes (narrator's last line) | Yes | PASS |
| U23>U24: One year reflection | Yes | Implied | PASS |

Three hooks are missing entirely. These should be added as final cards in the relevant units.

---

## Priority Rewrite List (ordered by impact)

1. **U16: Add Hildi mediation scene** (3 new story cards) -- Highest impact. Missing emotional core of the unit.
2. **U16: Add neighbor voice** (1 card) -- Gives the conflict a human face.
3. **U20: Expand KD off-duty scene** (2-3 new story cards) -- Key character revelation scene.
4. **U23: Add full-cast celebration cards** (3-4 cards) -- B1 payoff scene needs all characters.
5. **U22: Remove duplicate "richtiger Berliner"** from U20 -- Prevents dilution.
6. **U19: Cut redundant waiting room card** -- Tightens pacing.
7. **U15/U16/U17: Add missing narrative hooks** (3 cards) -- Connects episodes.
8. **U18: Fix Lukas voice** (1 card rewrite) -- Character consistency.
9. **U24: Add Lukas guitar healing card** (1 card) -- Completes his arc.
10. **U13: Polish Yilmaz coaching card** (1 rewrite) -- Voice consistency.

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total story cards reviewed | 214 |
| Cards rated excellent | ~45 (21%) |
| Cards rated good | ~110 (51%) |
| Cards needing minor polish | ~35 (16%) |
| Cards needing full rewrite | ~12 (6%) |
| Missing designed cards | ~12 (6%) |
| Units at or above target quality | 8/12 |
| Units needing significant work | 2 (U16, U20) |

The B1 story arc has a solid foundation. Units 17, 18, and 24 demonstrate what this narrative can be at its best: culturally rich, emotionally layered, funny, and linguistically purposeful. The priority work is concentrated in U16 and U20, where designed emotional beats were left unbuilt, and in U23's celebration scene, where the B1 payoff needs its full cast.
