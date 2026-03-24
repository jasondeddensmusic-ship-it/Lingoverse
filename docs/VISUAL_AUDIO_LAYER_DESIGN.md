# VerumLingua Visual + Audio Layer Design

> Owner-approved design decisions from interview session 2026-03-21.
> This document governs ALL visual, audio, navigation, and story presentation work.
> German is the template language. Everything documented here for pipeline reuse.

---

## 0. Complete Decision Record (20 Questions, Owner-Approved)

### Phase 2: Architecture & Pipeline Decisions (Q1-Q10)

| # | Topic | Decision | Detail |
|---|-------|----------|--------|
| Q1 | Opus + Sonnet collaboration | Both write, then cross-validate | Rule 11 (D120): Both models co-write in parallel, then the OTHER model validates. Neither ships without sign-off. Sonnet 4.6+ minimum. |
| Q2 | PP52 teach cards vs gold bubbles | Teach card for ALL words. Gold bubble is a future visual layer. | Every word gets its own dedicated teach card. Gold highlighting in stories does NOT replace the teach card. Gold = "this is new", teach card = TEACHES it. |
| Q3 | New content format + grammar tagging | New format ALWAYS. Full grammar tagging (PP59). | Every word tagged for POS, sub-category, syntactic function, morphology. Every sentence breakable into grammar deep dive. Personalization-first (PP60): toggleable story layers, adjustable grammar depth. Learner should NEVER have to leave the app. |
| Q4 | File rename (lingoverse.jsx -> verumlingua.jsx) | Rename NOW | Executed: git mv, all 23 references updated, main.jsx import updated. |
| Q5 | Cross-language scanning for new languages | Mandatory. Agents scan ALL previous languages' rules before writing new ones. | Builds toward full autonomous course generation. Broadest comparison = best quality. |
| Q6 | Step counts across all languages | Count fresh NOW | Korean 6,953 / Dutch 5,825 / German 4,941 / French 4,781 / Spanish 4,739. All counts updated in CLAUDE.md. |
| Q7 | German das / Dutch het color | Emerald green #00796B | Distinct from verb forest green #2E7D32. Updated in dictionary.js, metadata.js, vocabulary.js. |
| Q8 | White screen crash on word click | Investigate NOW | Root cause: WordPopup rendered via createPortal with no error boundary. Fixed: null guard on expanded.word, try/catch on conjugateVerb/nounWithParticles, LessonErrorBoundary wrapper. |
| Q9 | French units file (minified) | Un-minify + add warning | 42,552 lines un-minified with 2-space indentation. Warning added to CLAUDE.md: 1.85MB, use grep for searches, never full-read. |
| Q10 | Onboarding docs for new agents | CLAUDE.md + CONTRIBUTING.md | CONTRIBUTING.md created (73 lines): dev setup, architecture, agent policy, design principles, commit convention. CLAUDE.md Getting Started section added. |

### Phase 3: Visual + Audio Layer Decisions (Q11-Q20)

| # | Topic | Decision | Detail |
|---|-------|----------|--------|
| Q11 | Art style | AI-generated + SVG sprite system | Midjourney/DALL-E for backgrounds and key scenes. SVG sprites for character expressions/poses. Best of premium and lightweight. |
| Q12 | Story scene format | Cinematic hybrid: Visual Novel + Candy Bubbles | Visual Novel mode for key beats (openings, climaxes). Candy bubble dialogue with character sprites for teaching. Both working together. |
| Q13 | Audio/TTS | Premium TTS from day one | Web Speech API is NOT fit (English-only, mispronounces non-English). Pre-generate all audio as static files. One-time cost, zero runtime. |
| Q14 | Navigation | City Explorer + Story Path + Flowing Timeline | Three layers: city map (zoomed out), winding story path (zoomed in), flowing timeline (scroll). Systematic grid preserved as toggle for power users. |
| Q15 | Verumius design | Adaptive style | Chibi for sprites/avatars/bubbles, more detailed for cinematic story scenes. Strict consistency rules (same palette, features, toga). |
| Q16 | App backgrounds | Galaxy/nebula theme | Dark mode: deep purple-blue starfield. Light mode: soft pink/lavender nebula mist with texture (NOT flat white). Frosted glass and candy bubbles pop against both. |
| Q17 | Episode planning method | Hybrid: full arc outline + level-by-level detail | Sketch full story A1-B2 first (1-2 sentences per episode). Deep-plan one level at a time. Write. Audit. Proceed. |
| Q18 | Character cast | Universal core + growing domain cast | Verumius + 1-2 travel companions (all languages) + local guide per language + domain characters per episode topic. Cast grows with CEFR: A1 = 3-4, B2 = 10-12. |
| Q19 | TTS voice strategy | Launch with 1 voice, design for many | One premium voice per language at launch. Every dialogue line tagged with speaker ID. Architecture ready for character-specific voices later. |
| Q20 | Template language | German first | German gets full visual+audio treatment first. Everything documented for pipeline reuse. D119 plan already exists (36 units). |

---

## 1. Art Style: AI-Generated + SVG Sprite System

**Decision**: Hybrid approach combining AI-generated illustrations with SVG character sprites.

### AI-Generated Assets (Midjourney / DALL-E)
- **Scene backgrounds**: Cafe, office, market, street, school, hospital, etc.
- **City district overviews**: Bird's-eye views of each CEFR neighborhood
- **Key story moments**: Cinematic illustrations for dramatic beats
- **Episode thumbnails**: Each episode card shows its scene illustration
- **Style guide**: Consistent art direction prompt templates per language. Warm, inviting, slightly stylized. Must complement the candy bubble aesthetic, not clash with it.

### SVG Sprite System
- **Verumius**: 8-12 expression variants (happy, confused, thinking, excited, proud, nervous, surprised, determined, tired, laughing, angry, sad)
- **Recurring characters**: 4-6 expressions each
- **Domain characters**: 2-3 expressions each (professional neutral, helpful, stern)
- **Sprite format**: SVG with named expression layers. Swap expression via CSS class or JS toggle.
- **Size variants**: Avatar (32px), Bubble companion (48px), Scene character (120-200px), Full illustration (400px+)
- **Consistency rules**: Same color palette, same facial feature proportions, same toga design across ALL size variants. Chibi proportions for sprites/avatars, detailed proportions for scene illustrations.

### Asset Pipeline
1. Define scene list from episode outlines
2. Generate AI backgrounds with consistent style prompts
3. Design SVG character templates (base body + swappable expressions)
4. Export at multiple resolutions (1x, 2x for retina)
5. Optimize: SVG sprites inline, AI backgrounds as lazy-loaded WebP
6. Store in `public/assets/scenes/{lang}/` and `public/assets/sprites/`

---

## 2. Story Scene Visual Format: Cinematic Hybrid

**Decision**: Visual Novel mode for key story beats + Candy Bubble dialogue with character sprites.

### Visual Novel Mode (Cinematic Moments)
- **When**: Episode openings, plot twists, climaxes, episode endings
- **Format**: Full-width AI-generated background scene. Character sprites slide in from sides. Name label + dialogue box at bottom. Smooth transitions between speakers.
- **Frequency**: 2-4 cinematic moments per episode (opening + climax minimum)
- **Interaction**: Tap/click to advance. Auto-advance option with TTS.
- **Transition**: Fade or slide into candy bubble mode for teaching content.

### Candy Bubble Dialogue Mode (Teaching + Conversation)
- **When**: Teach cards, grammar explanations, practice dialogues, quizzes
- **Format**: Our existing candy chat bubbles. Each speaker gets their SVG sprite avatar beside their bubble. Verumius on the left, other characters on the right.
- **Enhancement**: Speaker name label above bubble. Character expression changes with dialogue mood.
- **Transition**: Smooth animation back to visual novel mode for dramatic beats.

### Flow Per Episode
```
[CINEMATIC] Scene opens -- full background + sprites slide in
[CINEMATIC] Characters introduce situation (2-3 exchanges)
[TRANSITION] Fade to bubble mode
[BUBBLES] Teach cards with character avatars
[BUBBLES] Practice dialogue in candy bubbles
[BUBBLES] Quiz/exercise steps
[TRANSITION] Fade to cinematic
[CINEMATIC] Plot development / climax moment
[TRANSITION] Back to bubbles
[BUBBLES] More teaching + practice
[CINEMATIC] Episode resolution / cliffhanger
```

---

## 3. Audio & TTS Strategy: Premium From Day One

**Decision**: Premium cloud TTS required. Web Speech API is NOT fit for non-English languages (only English voice available on most devices, mispronounces everything).

### Architecture
- **Pre-generate ALL curriculum audio as static files**. Render once, serve forever. Zero per-play API cost.
- **Every dialogue line tagged with `speaker` ID** from day one. This enables character-specific voices later without content restructuring.
- **Audio file format**: MP3 (broad compatibility) or Opus/WebM (smaller, modern browsers)
- **Storage**: CDN-hosted, lazy-loaded per episode. Not bundled in the app build.

### Content Categories for Audio
| Category | Generation Strategy | Priority |
|----------|-------------------|----------|
| Story dialogue lines | Pre-generated, per-speaker | P0 (launch) |
| Teach card target words | Pre-generated, single word | P0 (launch) |
| Teach card example sentences | Pre-generated | P1 (fast follow) |
| Quiz question stems | Pre-generated | P2 (enhancement) |
| Quiz answer options | Pre-generated | P2 (enhancement) |
| AI chat responses | Live API call | P3 (future) |

### Voice Strategy
- **Launch**: 1 high-quality voice per target language (clear, warm, teacher-like)
- **Speaker ID tags**: Every dialogue line gets `speaker:"verumius"`, `speaker:"guide_berlin"`, `speaker:"doctor"`, etc.
- **Future upgrade**: Character-specific voices. Architecture ready, just plug in new audio files per speaker ID.
- **Source language**: English voice for Verumius when he speaks English/source language

### TTS Provider Options (evaluate during implementation)
- ElevenLabs: Best quality, most natural. Supports all 5 languages.
- Google Cloud TTS: Good quality, competitive pricing. WaveNet voices.
- Azure Cognitive Services: Good Korean/CJK support. Neural voices.
- Amazon Polly: Budget option. Adequate quality.

### Cost Model
- One-time generation cost per language (all curriculum audio)
- Estimated: ~500K-1M characters per language for full A1-B2
- At ~$0.03/1K chars (Google WaveNet): ~$15-30 per language
- At ~$0.30/1K chars (ElevenLabs): ~$150-300 per language
- Total for 5 languages: $75-1,500 depending on provider
- Zero ongoing cost (all pre-generated)

---

## 4. Navigation: City Explorer + Story Path + Flowing Timeline

**Decision**: Three-layer navigation combining city exploration, story path, and flowing timeline. Systematic grid view preserved as a toggle for power users.

### Layer 1: City Explorer (Zoomed Out)
- **Each language is a city**: Seoul, Amsterdam, Berlin, Paris, Madrid
- **CEFR levels are districts/neighborhoods**:
  - A1: Tourist district (basics, survival)
  - A2: Residential area (daily life, routine)
  - B1: Commercial district (work, social, culture)
  - B2: Business/university quarter (formal, professional, academic)
- **Visual**: AI-generated bird's-eye city illustration
- **Interaction**: Tap a district to zoom into the story path

### Layer 2: Story Path (Zoomed Into District)
- **Winding illustrated path** through the neighborhood (like Candy Crush meets Google Maps)
- **Each node is an episode** with its AI scene illustration as thumbnail
- **Verumius SVG sprite stands at current position**
- **Completed episodes**: Full color, checkmark, star rating
- **Current episode**: Glowing, pulsing, Verumius standing here
- **Locked episodes**: Greyed out, locked icon
- **Path theming per language**:
  - Korean: Mountain temple path, cherry blossoms
  - Dutch: Canal-side walk, bridges
  - German: Rhine river journey, castle stops
  - French: Boulevard stroll, cafe stops
  - Spanish: Plaza-to-plaza walk, fountain stops

### Layer 3: Flowing Timeline (Scroll View)
- **Vertical smooth scroll** through entire learning journey
- **Episodes branch off as stops** along a flowing river/timeline
- **Current position clearly marked** with Verumius
- **Progress stats inline**: words learned, time spent, streak
- **Smooth scroll through learning history** — see how far you've come
- **Clean, elegant, less gamified** than the path view

### Systematic Grid View (Toggle)
- **Preserved for power users** who want the overview
- **Toggle button**: "Journey" (default) vs "Overview" mode
- **Overview mode**: Current U1-U30 grid with CEFR tabs
- **Same content, different presentation**

### Navigation Architecture
```
[City Map] ----tap district----> [Story Path] ----tap episode----> [Episode]
    |                                 |
    |                            [Timeline View] (alternative scroll)
    |
[Toggle: Journey / Overview]
    |
[Systematic Grid] (power user mode)
```

---

## 5. App Chrome & Backgrounds: Galaxy/Nebula Theme

**Decision**: Galaxy/nebula theme throughout. Dark and light modes both have celestial texture.

### Dark Mode (Premium Feel)
- **Background**: Deep purple-blue galaxy (#0D0B1A base)
- **Nebula swirls**: Subtle animated gradients (purple #7B5EE8, blue #1565C0, pink #C2185B at very low opacity)
- **Stars**: Faint particle effect, subtle twinkle animation
- **Frosted glass panels**: Pop beautifully against dark starfield
- **Candy bubbles**: Glow effect on dark background

### Light Mode (Warm Celestial)
- **Background**: Soft pink/lavender nebula mist (NOT flat white)
- **Base color**: Warm off-white with pink undertone (~#FFF5F9)
- **Texture**: Faint nebula swirl patterns in soft pink (#FFD6E8), lavender (#E8D6FF), and warm white
- **Subtle gradient shifts**: Gentle movement, dreamlike quality
- **Frosted glass panels**: Slightly more opaque than dark mode for readability
- **Candy bubbles**: Maintain full vibrancy against soft background

### Implementation
- **CSS**: Background gradient layers + subtle CSS animations for nebula movement
- **Performance**: Pure CSS gradients and transforms. No heavy canvas/WebGL.
- **Optional**: Tiny star particle system (CSS-only, ~20 stars, subtle opacity animation)
- **Consistency**: Both modes maintain the VerumLingua purple (#7B5EE8) as accent throughout

### Mode Toggle
- **Ctrl+N** (existing shortcut preserved)
- **Smooth transition**: 0.5s ease cross-fade between modes
- **Preference persisted**: localStorage, respects system preference on first visit

---

## 6. Verumius Character Design: Adaptive Style

**Decision**: Chibi for sprites/avatars, detailed for story illustrations. Strict consistency rules.

### Chibi Register (In-Lesson, Avatars, Bubbles)
- **Proportions**: 2-3 head-to-body ratio (classic chibi)
- **Features**: Large expressive eyes, small nose, simple mouth shapes
- **Outfit**: Roman toga/tunic with modern twist (could have sneakers, headphones, or a backpack)
- **Color palette**: Purple toga (#7B5EE8), gold trim (#E8960A), warm skin tone
- **Size**: 32-48px avatars, 80-120px bubble companions
- **SVG**: Clean vector, minimal detail, maximum expression

### Detailed Register (Story Scenes, Cinematic Moments)
- **Proportions**: More realistic (4-5 head-to-body ratio), still slightly stylized
- **Features**: Same face structure as chibi but with more detail (eyebrows, hair texture, clothing folds)
- **Outfit**: Same toga design, more fabric detail, accessories visible
- **AI-generated**: Using consistent character reference images for Midjourney/DALL-E
- **Size**: 200-400px in scene illustrations

### Consistency Rules (NON-NEGOTIABLE)
1. **Same purple toga** in both registers. Always recognizable.
2. **Same hair style and color** across all variants.
3. **Same eye color** (probably warm brown or golden, fitting Roman theme).
4. **Same accessories** if any (constellation pin, scroll, etc.).
5. **Expression names match**: "happy" chibi = "happy" detailed. Same emotion, different detail level.
6. **Color palette locked**: Exact hex values for toga, skin, hair, accessories defined once, used everywhere.

### Verumius Identity Keywords (for AI art prompts)
- Young Roman scholar, curious and adventurous
- Relatable underdog learning languages
- Warm, approachable, slightly comedic
- Purple toga with gold accents
- Constellation motif (VerumLingua brand)
- Expressive face, big personality

---

## 7. Character Cast System: Universal Core + Growing Domain Cast

**Decision**: Core travel companions across all languages + language-specific locals + domain characters that appear per episode topic. Cast grows with CEFR level.

### Universal Core (All Languages)
| Character | Role | Description |
|-----------|------|-------------|
| **Verumius** | Protagonist | Roman scholar learning languages. Always present. |
| **[Travel Companion 1]** | Best friend | Travels with Verumius. Comic relief. Speaks source language. |
| **[Travel Companion 2]** | Mentor figure | More experienced traveler. Gives cultural context. |

### Language-Specific Local Guide (Recurring)
- **German**: A friendly Berliner who becomes Verumius's first friend in Germany
- **Korean**: A patient Korean friend who navigates Seoul with him
- **Dutch**: A direct, humorous Amsterdammer
- **French**: A cultured Parisian with a warm heart
- **Spanish**: An enthusiastic Madrileno

### Domain Characters (Per-Episode)
| Domain | Character Type | Appears In |
|--------|---------------|------------|
| Food/Restaurant | Waiter/Chef | A1 food episodes |
| Shopping | Shopkeeper | A1-A2 shopping episodes |
| Health | Doctor/Pharmacist | A2 health episodes |
| Work | Boss/Colleague | B1 workplace episodes |
| Education | Teacher/Professor | B1-B2 education episodes |
| Travel | Hotel receptionist, guide | A2-B1 travel episodes |
| Government | Official/Beamter | B2 formal episodes |
| Media | Journalist/Editor | B2 media episodes |

### CEFR-Based Cast Growth
| Level | Cast Size | Characters Active |
|-------|-----------|-------------------|
| A1 | 3-4 | Verumius + local guide + 1-2 domain characters |
| A2 | 5-6 | Add travel companions + 2-3 new domain characters |
| B1 | 7-8 | Full recurring cast + domain characters per unit |
| B2 | 10-12 | Everyone + formal/professional characters |

### Character Design Pipeline
1. Define character role, personality, and visual description
2. Generate AI reference images (3-4 angles/expressions)
3. Create SVG sprite (chibi register, 4-6 expressions)
4. Tag all existing dialogue lines with speaker IDs
5. Document character voice for TTS (when character voices are added)

---

## 8. Episode Planning Methodology: Hybrid Arc + Level Detail

**Decision**: Full story arc outline first (1-2 sentences per episode), then deep-plan one CEFR level at a time, then write, then audit.

### Phase 1: Full Story Arc Outline
- One document per language: `docs/STORY_ARC_{LANG}.md`
- Cover A1 through B2 in broad strokes
- 1-2 sentences per episode: setting, plot beat, character(s)
- Verumius's emotional journey mapped across all levels
- Key plot milestones identified (first friend, first failure, first success, etc.)
- Cultural integration points per level
- **Audit**: Does the story make narrative sense? Does Verumius grow?

### Phase 2: Level-by-Level Deep Planning
- Take one CEFR level (e.g., A1)
- Map EVERY vocabulary word to an episode (PP55)
- Map EVERY grammar construct to an episode (PP57)
- Map EVERY communicative function to an episode (PP58)
- Define exact scene settings with illustration needs
- Define which characters appear in each episode
- Define cinematic moments vs bubble dialogue moments
- Write detailed episode summaries (paragraph each)
- **Audit**: Is every word/grammar/function covered? Zero gaps?

### Phase 3: Content Writing
- Write episodes following the detailed plan
- One episode at a time, full quality from the start (Rule 7)
- Every teach card: CEFR-scaled dialogue + fun info + gender colors + grammar tags (vision doc)
- Every sentence: full grammar tagging (PP59)
- Every word: speaker ID tagged for future TTS
- **Quality gate**: PP8, PP48, PP49, PP52, density check per episode

### Phase 4: Level Audit
- Full PP53 checklist (15 items)
- Cross-validate (Rule 11): Opus checks Sonnet's work and vice versa
- Vocabulary completeness against official list
- Grammar completeness against official inventory
- Story coherence review
- **Only proceed to next level after PASS**

### Phase 5: Next Level
- Adjust story arc if needed based on learnings
- Deep-plan next level
- Repeat phases 3-4

---

## 9. German as Template Language

**Decision**: German gets the full visual+audio treatment first. Everything documented for pipeline reuse.

### Why German First
- D119 rehaul plan already exists (36 units, 6-6-12-12 distribution)
- 116 grammar constructs catalogued
- Clear story potential (Verumius in Germany)
- Complex enough to stress-test the system (cases, gender, word order)
- Not so complex that it blocks progress (vs Korean script challenges)

### Template Documentation Requirements
After German is complete, we must have documented:
1. **Art prompt templates** — exact Midjourney/DALL-E prompts that produce consistent results
2. **SVG sprite creation workflow** — tools, format, expression naming convention
3. **Scene illustration checklist** — what makes a good episode background
4. **Audio generation pipeline** — provider, settings, file naming, storage
5. **Episode planning template** — reusable format for any language
6. **Character design template** — how to design a new language's cast
7. **City map design process** — how to create the city explorer view
8. **Quality metrics** — what "done" looks like for the visual+audio layer
9. **Cost breakdown** — actual costs for German, projected for other languages
10. **Time breakdown** — actual time per episode, projected for other languages

### Success Criteria
German's visual+audio layer is COMPLETE when:
- [ ] City explorer map for Berlin exists with 4 CEFR districts
- [ ] Story path for each district with episode nodes
- [ ] Flowing timeline view works
- [ ] Systematic grid toggle works
- [ ] Verumius chibi sprites (8+ expressions) done
- [ ] German local guide sprites (4+ expressions) done
- [ ] Domain character sprites (2+ expressions each) done
- [ ] AI scene backgrounds for all episodes generated
- [ ] Cinematic mode renders correctly
- [ ] Candy bubble mode with character avatars works
- [ ] Galaxy/nebula background (dark + light mode) implemented
- [ ] Premium TTS audio generated for all dialogue
- [ ] Speaker IDs on all dialogue lines
- [ ] Full story arc documented
- [ ] All episodes pass PP53 15-item checklist
- [ ] Template documentation complete for next language

---

## 10. Build Order

1. **Galaxy/nebula background CSS** (both modes) — visual foundation
2. **SVG sprite system** — Verumius + template for other characters
3. **Visual novel renderer** — cinematic mode component
4. **Bubble avatar integration** — character sprites in candy bubbles
5. **City explorer navigation** — city map + district zoom
6. **Story path renderer** — winding path with episode nodes
7. **Timeline view** — flowing scroll alternative
8. **Journey/Overview toggle** — systematic grid preserved
9. **German story arc outline** — full A1-B2 narrative
10. **German A1 deep plan** — episode-by-episode with vocab/grammar mapping
11. **German A1 content** — write episodes in new format
12. **TTS audio pipeline** — set up provider, generate A1 audio
13. **German A1 audit** — full PP53 + visual/audio quality check
14. **Iterate** — A2, B1, B2 following same pattern
15. **Template documentation** — capture everything for next language

---

## Appendix: Quick Reference for Future Sessions

### Art Generation Prompts (Template)
```
Scene: [setting description], warm inviting atmosphere, slightly stylized,
soft lighting, [language-specific cultural elements], candy-colored aesthetic,
suitable as background for language learning app, no text, 16:9 aspect ratio
```

### SVG Sprite Naming Convention
```
verumius-happy.svg
verumius-confused.svg
verumius-thinking.svg
guide-berlin-neutral.svg
guide-berlin-helpful.svg
doctor-professional.svg
```

### Audio File Naming Convention
```
{lang}/{episode_id}/{step_index}_{speaker}.mp3
de/deu1l1/003_guide_berlin.mp3
de/deu1l1/005_verumius.mp3
```

### Speaker ID Format
```javascript
{ type: "teach", target: "Guten Morgen", source: "Good morning",
  speaker: "guide_berlin", expression: "happy" }
```
