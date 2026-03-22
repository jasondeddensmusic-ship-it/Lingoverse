# VerumLingua Visual + Audio Layer Design

> Written 2026-03-22 from owner interview (Q11-Q20). All decisions made by the owner.
> This document covers the visual identity, audio strategy, navigation redesign, and art pipeline.
> Companion to `VERUMLINGUA_REHAUL_VISION.md` (curriculum + card format) and `design_spine_mandatory.md` (CSS values).

---

## 1. Art Style: AI-Generated + SVG Sprite Hybrid

**Decision (Q11):** Midjourney for AI-generated illustrations + SVG sprite system for character expressions/poses.

### Why Both
- **Midjourney**: Premium scene backgrounds, cinematic story moments, city maps, key illustrations. High visual quality.
- **SVG sprites**: Lightweight, animatable, infinitely reusable character expressions across thousands of lessons. Fast loading, consistent.

### Midjourney Production Workflow
- Use `--cref` (character reference) to lock Verumius's appearance across all generations
- Use `--sref` (style reference) to lock the art style across scenes
- Set up a **VerumLingua moodboard** in Midjourney personalization: candy-colored illustrations, stylized characters, warm glowing scenes, glossy game art, Studio Ghibli-style environments
- Enable **"Illustration"** moodboard. Disable **"Film Style (Retro)"** (fights our candy-gloss aesthetic)
- **DALL-E/Gemini role**: Rapid brainstorming scratchpad only. All production assets from Midjourney.

### Why Midjourney Over Alternatives
- `--cref` character reference: purpose-built for consistency across 100+ images
- `--sref` style reference: locks art style per generation
- Superior illustration quality for stylized work
- Better color palette adherence
- Gemini lacks consistency tools entirely. DALL-E drifts between generations.

---

## 2. Scene Format: Cinematic Hybrid (Visual Novel + Candy Bubbles)

**Decision (Q12):** Combine Visual Novel (fullscreen cinematic) for key story beats with Header Scene + Character Sprites in Candy Bubbles for dialogue flow.

### How It Works
- **Episode opens**: Full-width AI scene background. Character sprites slide in from sides. Visual novel style dialogue box at bottom. Cinematic, immersive.
- **Dialogue teaching section**: Transitions to our proven candy bubble chat format with character avatar sprites beside each bubble. Comfortable, readable, familiar.
- **Story climax/dramatic beats**: Switches BACK to visual novel mode for impact.
- **The learner gets both**: cinematic wow-factor AND readable teaching format.

### When Each Mode Triggers
- `{ type: "scene", mode: "cinematic" }` — full visual novel
- `{ type: "teach", speaker: "hans" }` — candy bubbles with avatar
- Story intro/climax/resolution: cinematic
- Vocab/grammar/quiz steps: candy bubbles

---

## 3. Audio & TTS Strategy

**Decision (Q13/Q19):** Premium cloud TTS from day one. Web Speech API is NOT fit for non-English languages.

### The Problem
Web Speech API only has an English-speaking voice on most devices. Non-English words are mispronounced. Unusable for Korean, Dutch, German, French, Spanish.

### The Solution: Pre-Generated Static Audio
- **ALL story audio**: Pre-rendered as static .mp3/.ogg files. One-time generation cost, zero per-play cost.
- **ALL teach card words + example sentences**: Pre-generated. Fixed content = generate once.
- **ALL quiz TTS (if needed)**: Pre-generated. Everything in the curriculum is static.
- **Live API calls**: Reserved for FUTURE features only (Verumius chatbot, AI conversation practice).
- **Result**: One-time bulk generation cost per language, then serve static files from CDN forever.

### Voice Identity System
- **Launch**: 1 high-quality voice per target language
- **Architecture**: Every dialogue line tagged with `speaker` ID from day one
- **Future**: Character-specific voices can be added per speaker ID. Zero content restructuring needed.
- **Verumius always speaks in source language voice** (English by default)

### TTS Provider (to be selected)
Candidates: ElevenLabs, Google Cloud TTS, Azure Cognitive Services, Amazon Polly. Selection criteria: voice quality for all 5 languages, cost per character, ability to clone/create custom voices.

---

## 4. Navigation Redesign: City Explorer + Story Path + Timeline

**Decision (Q14):** Three-layer navigation combining City Explorer, Story Path, and Flowing Timeline. Systematic grid preserved as toggle for power users.

### Layer 1: City Explorer (zoomed out)
- Each language = a real city (Seoul, Amsterdam, Berlin, Paris, Madrid)
- CEFR levels = districts/neighborhoods within the city
  - A1 = Tourist district (bright, welcoming, simple buildings)
  - A2 = Residential area (apartments, parks, bakeries)
  - B1 = Commercial district (offices, universities, stations)
  - B2 = Business quarter (government, theater, conference centers)
- AI-generated bird's-eye isometric city overview
- Clickable districts zoom into the story path

### Layer 2: Story Path (zoomed into a district)
- Winding illustrated path through the neighborhood (Candy Crush / Duolingo style)
- Each node = an episode, showing its AI scene illustration as thumbnail
- Unlocked episodes glow, locked ones greyed out
- Verumius sprite stands at current position
- Path themed per language culture

### Layer 3: Flowing Timeline (scrolling)
- Smooth vertical scroll through entire learning history
- Episodes branch off as stops along a flowing river/timeline
- Current position clearly marked
- Clean, elegant, shows progress

### Systematic Grid Toggle
- Power users can switch to the current U1-U30 block view
- Same content, clinical presentation
- Toggle in nav: "Journey" / "Overview"

---

## 5. Verumius Character Design: Adaptive Style

**Decision (Q15):** Chibi for sprites/avatars/bubbles, more detailed for cinematic story scenes. Strict consistency rules.

### Two Art Registers
| Context | Style | Proportions | Detail Level |
|---------|-------|-------------|-------------|
| Bubble avatars | Chibi | 2.5:1 head-to-body | Simple, expressive |
| In-lesson sprites | Chibi | 2.5:1 | 8-12 expressions |
| Navigation markers | Chibi | 2.5:1 | Single pose, small |
| Story cinematics | Detailed | Realistic-stylized | Full illustration |
| Loading screens | Detailed | Realistic-stylized | Scene-specific |
| App store / marketing | Detailed | Realistic-stylized | Hero shots |

### Consistency Rules (NON-NEGOTIABLE)
Both registers MUST share:
- Same color palette (purple #7B5EE8 toga, gold #E8960A trim)
- Same facial features (warm brown eyes, short curly dark brown hair, olive skin)
- Same outfit elements (toga, constellation pin, scroll in belt, brown sandals)
- Same personality vibe (friendly, curious, slightly comedic)

### Verumius Visual Identity
- **Age**: ~20, young scholar
- **Outfit**: Purple toga (#7B5EE8) with gold trim (#E8960A), gold constellation pin on left shoulder, brown leather belt with scroll case, brown sandals
- **Face**: Warm olive Mediterranean skin, warm brown eyes with golden flecks, short curly dark brown hair, friendly approachable expression
- **Personality in visuals**: Stoic optimist, curious, slightly clumsy, takes everything in stride

### Chibi Expression Set (SVG sprites)
Minimum 8 expressions for in-lesson use:
1. Happy (waving)
2. Confused (tilted head, hand on chin)
3. Thinking (eyes up-right, finger on temple)
4. Excited (fists up, sparkle eyes)
5. Nervous (sweat drop, worried smile)
6. Proud (arms crossed, confident smirk)
7. Surprised (wide eyes, open mouth)
8. Embarrassed (blushing, hand behind head)

---

## 6. App Chrome & Backgrounds: Galaxy/Nebula Theme

**Decision (Q16):** Galaxy/nebula backgrounds for both modes. Light mode gets soft pink nebula texture, NOT flat white.

### Dark Mode
- Deep purple-blue galaxy base (#0D0B1A to #1E1E2E gradient)
- Animated nebula clouds (see implementation below)
- Twinkling star field: white/silver stars, opacity 0.3-0.9
- Purple-blue nebula wisps (#7B5EE8 at 15% opacity)
- Our frosted glass panels and candy bubbles POP against this

### Light Mode
- Soft pink/lavender nebula mist texture
- NOT flat white — celestial warmth, faint texture visible
- Think: looking at a nebula through sunlight
- Base: warm white with pink (#FFD6E8 at 8-12% opacity) and lavender (#E8E0FF at 15%) nebula wisps
- Twinkling star field: gold/lavender glitter dust, opacity 0.15-0.5, slightly larger (1-3px). Like tiny warm flickers catching sunlight.
- Candy bubbles and frosted glass look GORGEOUS against this

### Nebula Implementation (3 Layers, Pure CSS + Canvas)

**Layer 1 — Static base gradient (CSS):**
- Dark: radial gradients in deep navy (#0D0B1A) to dark purple (#1A1235)
- Light: warm white (#F8F5FF) to soft lavender with pink mist

**Layer 2 — Drifting nebula cloud blobs (CSS animated):**
- 3-4 large divs with `border-radius: 50%`, `filter: blur(80-120px)`
- Each blob a different purple/pink/blue at low opacity
- Each on its own `@keyframes` animation (45-90 second loops):
  - Slow translate drift (5-10% of screen)
  - Slow opacity pulse (0.08 to 0.15)
  - Slow scale pulse (1.0 to 1.1)
- Different durations per blob so they NEVER sync up
- Speed: lava lamp pace. You don't notice it moving unless you stare, but when you look back the colors have shifted.

**Layer 3 — Twinkling star canvas (HTML Canvas):**
- 80-120 star particles, random positions
- Each star: x, y, size (0.5-2px dark / 1-3px light), baseOpacity, twinkleSpeed
- Animation at ~10fps (just opacity changes, near-zero CPU)
- Each star twinkles on its own sin() wave timing — organic, never synchronized
- Dark mode: white/silver points
- Light mode: gold (#E8960A at low opacity) and lavender (#B8A8FA) warm glitter dust

**All 3 layers**: `position: fixed`, `z-index: 0`, behind all content.
Content floats on top with existing frosted glass + compound bubbles.
Result: a living, breathing celestial backdrop. Every time you open the app it looks slightly different.

### Navigation Chrome
- App shell (nav, sidebar) has galaxy/constellation motif
- Content area: the nebula backgrounds above
- Smooth transition between modes (Ctrl+N toggle)

### What Is Code vs What Is Midjourney
- **Code builds 100% of the nebula background.** Pure CSS gradients, CSS-animated cloud blobs, canvas star particles. No images needed. This is industry standard for premium app backgrounds.
- **Midjourney is NOT needed for the nebula.** Optional future enhancement: a painterly nebula texture overlay image for extra depth. But the CSS version is production-quality on its own.
- **Midjourney IS needed for**: Verumius character art, scene backgrounds, city maps, supporting character designs. These are detailed illustrations that code cannot generate.

---

## 7. Episode Planning: Hybrid Arc + Level-by-Level

**Decision (Q17):** Full story arc outline first, then deep-plan one level at a time, then write, then audit.

### Planning Process
1. **Sketch the FULL story arc** (1-2 sentences per episode, just plot beats from A1 to B2)
2. **Deep-plan one CEFR level** (detailed vocab/grammar/communicative function mapping per episode)
3. **Audit the plan** against PP55/PP57/PP58 (every word taught, every construct covered, every function practiced)
4. **Write that level** (content + art asset list)
5. **Review and adjust** based on what worked
6. **Deep-plan the next level**, incorporating lessons learned
7. Repeat until B2 complete

### Why Hybrid Over Full-First
- Full arc gives the big picture (no disconnected episodes)
- Level-by-level detail keeps us agile
- Each level learns from the last
- Faster to get started while maintaining narrative coherence

---

## 8. Character Cast System

**Decision (Q18):** Universal core + language-specific locals + domain characters + growing cast with CEFR.

### Cast Architecture
| Layer | Characters | Scope |
|-------|-----------|-------|
| **Constant** | Verumius | Every language, every episode |
| **Travel companions** | 1-2 cross-language recurring friends | Journey with Verumius across countries |
| **Local guide** | 1 per language | First friend in-country, recurs throughout |
| **Domain characters** | Doctor, shopkeeper, teacher, boss, etc. | Appear when the episode needs them |
| **Culture-specific** | 할머니, Beamter, garcon, etc. | Authentic to each language's culture |

### Cast Growth by CEFR Level
- **A1**: Verumius + local guide + 2-3 simple encounters (shopkeeper, waiter)
- **A2**: Add 2-3 recurring characters (neighbor, colleague, friend)
- **B1**: Full cast of 5-6 (complex relationships, workplace dynamics)
- **B2**: Expand to formal contexts (boss, professor, official, debate partner)
- Mirrors real life: your social circle grows as your language improves

### Character Design Principles
- Culturally authentic (Korean 할머니 teaches respect, German Beamter teaches bureaucracy)
- Each character represents a social context (work, friends, neighbors, officials)
- Characters return across CEFR levels with deepening relationships
- A1 characters still appear in B2 with more complex interactions

---

## 9. Art Asset Pipeline

### Generation Order (Priority)
1. **Verumius chibi expression sheet** — appears in EVERY screen, lock first
2. **Verumius detailed portrait** — validates both registers feel like same person
3. **One Berlin scene (cafe)** — tests scene style matches character style
4. **One supporting character (German local guide)** — tests multi-character consistency
5. **Berlin city overview map** — tests navigation concept
6. **Stop. Validate all 5 work together.** Then scale.

### Asset Processing Pipeline
```
Raw Midjourney PNG (2048x2048+)
    |
    v
Optimized WebP (lossy, ~80% quality, 60-80% smaller)
    |
    v
Multiple sizes per use case:
    Scene backgrounds: 1920w + 1280w + 768w (responsive)
    Character sprites: 512w + 256w (retina + standard)
    City map: 2048w + 1024w (zoomable)
    Bubble avatars: 96w + 48w (tiny, hard-cached)
    |
    v
Stored in: src/assets/art/{language}/{category}/
    src/assets/art/de/scenes/cafe-berlin.webp
    src/assets/art/characters/verumius-happy.webp
    src/assets/art/de/map/berlin-overview.webp
```

### Integration Architecture
```javascript
// Asset manifest per language
const ART_MANIFEST = {
  de: {
    map: { overview: '/art/de/map/berlin-overview.webp' },
    scenes: {
      'cafe-berlin': {
        full: '...1920.webp',
        medium: '...1280.webp',
        small: '...768.webp'
      }
    },
    characters: {
      'hans': { avatar: '...96.webp', sprite: '...512.webp' }
    }
  }
};

// Episodes reference art by key
{ type: "scene", art: "cafe-berlin", mode: "cinematic" }
{ type: "teach", speaker: "hans", art: "avatar" }
```

### Loading Strategy
- Scene backgrounds: lazy-load on episode open, blur-up placeholder
- Character avatars: preloaded sprite sheet (all 48px avatars in one image)
- City map: progressive load (low-res instant, high-res streams in)
- Total art budget per language: ~15-25MB (acceptable with caching)

### New React Components Needed
- `<SceneBackground>` — fullscreen with parallax + blur-up loading
- `<CharacterSprite>` — positioned character with expression prop
- `<CinematicDialogue>` — visual novel mode overlay with dialogue box
- `<AvatarBubble>` — enhanced candy bubble with character face
- `<CityExplorer>` — interactive city map with clickable districts
- `<StoryPath>` — winding path with episode nodes
- `<JourneyTimeline>` — vertical flowing timeline view
- `<ModeToggle>` — Journey/Overview switch in navigation

---

## 10. First Language: German

**Decision (Q20):** German gets the full visual+audio treatment first. Becomes the template language.

### Why German First
- German rehaul plan (D119) already has 36 units with 116 catalogued grammar constructs
- Tests the full pipeline: art + story + curriculum + audio
- Everything documented for pipeline reuse on other languages
- Once German works, next language is practically autonomous

### Template Documentation Doctrine
Every decision made during the German build gets documented:
- What Midjourney prompts worked and didn't
- Art asset naming conventions
- Episode planning methodology results
- Content-to-art integration patterns
- Build time per unit
- Quality issues encountered and solutions
- The result: a reusable playbook for Korean, Dutch, French, Spanish

---

## 11. Midjourney Prompt Templates

### Verumius Chibi Expression Sheet
```
Character design reference sheet on pure white background. A chibi-style
young male Roman scholar (age ~20), 2.5:1 head-to-body ratio.

OUTFIT: Flowing toga in deep violet-purple (#7B5EE8) with metallic gold
(#E8960A) trim along edges and a small gold constellation pin on the left
shoulder. Simple brown leather sandals. A small scroll tucked in his belt.

FACE/HAIR: Warm olive skin tone, large expressive warm brown eyes with
visible highlights, short curly dark brown hair with slight volume. Small
friendly nose, expressive mouth. Round soft jawline.

STYLE: Clean cel-shaded illustration with soft candy-gloss shading. Subtle
highlight/shine on the toga fabric (like a soft white gradient overlay on
the upper portion, similar to iOS candy button aesthetic). No hard outlines,
soft edges. Colors are rich and saturated but not neon.

Show 6 poses in a 3x2 grid:
1. HAPPY: big smile, one hand waving
2. CONFUSED: tilted head, one eyebrow up, hand on chin
3. THINKING: eyes looking up-right, finger on temple
4. EXCITED: both fists up, sparkle in eyes, open mouth smile
5. NERVOUS: slight sweat drop, hands together, worried smile
6. PROUD: arms crossed, confident smirk, chin up

Consistent proportions and features across all 6 poses.
No background elements, no text labels, no watermarks.
--ar 3:2 --style raw --no text, watermark, label --s 250 --q 2
```

### Verumius Detailed Cinematic Portrait
```
Portrait illustration of a young Roman scholar (age ~20) in 3/4 view,
slightly stylized semi-realistic art style (Studio Ghibli meets Arcane
meets modern illustration).

OUTFIT: Elegant flowing toga in deep violet-purple (#7B5EE8) with
intricate gold (#E8960A) embroidered trim showing tiny constellation
patterns. A circular gold pin on the left shoulder with connected dots
forming a constellation shape. The toga has subtle fabric folds with a
soft candy-gloss sheen: lighter purple highlights (#9B87F5) on raised
folds, deeper purple (#5B3EBC) in shadows. Brown leather belt with a
small scroll case.

FACE/HAIR: Warm olive Mediterranean skin, warm brown eyes with golden
flecks showing curiosity and intelligence, short curly dark brown hair
with natural volume, slight stubble shadow. Friendly approachable
expression: a soft knowing smile like he's about to share something
interesting.

LIGHTING: Warm golden hour side-lighting from the left, soft purple
ambient fill from the right. Subtle rim light on hair. Warm, inviting.

BACKGROUND: Soft out-of-focus bokeh in deep navy (#0D0B1A) with faint
purple (#7B5EE8 at 15% opacity) and soft pink (#FFD6E8 at 10% opacity)
nebula wisps. A few tiny star-like sparkle points.

STYLE: Rich saturated colors, soft painterly rendering with clean edges.
Stylized enough for a premium app character. Visible brushwork texture
in fabric and hair. Warm color temperature overall.

No text, no UI elements, no watermarks.
--ar 3:4 --style raw --s 350 --q 2 --no text, watermark, UI
```

### Scene Background Template (adapt per episode)
```
[LOCATION DESCRIPTION], slightly stylized digital illustration for a
language learning app. [LIGHTING DESCRIPTION].

COLOR PALETTE: Dominant warm tones. Accent colors: deep purple (#7B5EE8)
in small details and soft gold (#E8960A) in light accents. Purple accents
subtly tie the scene to the VerumLingua brand.

STYLE: Semi-stylized illustration between realistic and animated. Soft
cel-shading with painterly texture. Clean enough to work as a UI
background (no overwhelming detail in center where dialogue bubbles
overlay). More detail at edges, simpler in lower-center where UI sits.

COMPOSITION: Leave center-bottom area relatively clear for character
sprites and dialogue overlay.

No people, no readable text, no watermarks. 16:9 aspect ratio.
--ar 16:9 --style raw --s 300 --q 2 --no people, text, watermark, logo
```

### City Overview Map Template (adapt per language)
```
Illustrated bird's-eye view map of [CITY], slightly tilted isometric
perspective, stylized and colorful like a premium mobile game world map.

DISTRICTS (4 areas with distinct visual identity):
- [A1 DISTRICT]: [Description]. Bright, welcoming. Warm yellow + light green.
- [A2 DISTRICT]: [Description]. Lived-in, comfortable. Warm orange + soft brown.
- [B1 DISTRICT]: [Description]. Active, professional. Teal + steel blue.
- [B2 DISTRICT]: [Description]. Sophisticated, formal. Deep purple + silver.

STYLE: Clean isometric illustration, candy-colored with soft shadows and
subtle gloss highlights on roofs. A river/path connects the districts.
Small trees, tiny vehicles, park areas between districts.

A winding golden path (#E8960A) connects all districts showing the
learning journey. Purple (#7B5EE8 at 10% opacity) haze at edges fading
into deep navy (#0D0B1A) starfield border.

No text labels, no UI elements, no watermarks.
--ar 4:3 --style raw --s 400 --q 2 --no text, label, watermark, UI
```

---

## 12. Midjourney-to-App Pipeline (How Images Become UI)

Midjourney outputs IMAGES. Claude writes CODE that displays them. There is no code exchange with Midjourney.

```
Owner generates in Midjourney → downloads PNG files
    ↓
Claude runs optimization script → WebP at multiple sizes (visually identical, 60-80% smaller file)
    ↓
Claude builds React components that display, animate, and transition the images
    ↓
Result: static images feel dynamic and alive in the app
```

### What Claude does with chibi expression sheets:
1. Slice the grid into individual expression PNGs (automated script)
2. Optimize each to WebP at 3 sizes: 256px (sprite), 96px (bubble avatar), 48px (icon)
3. Build `<CharacterSprite character="verumius" expression="confused" size="avatar" />` component
4. Integrate into candy bubble renderer (character face appears beside dialogue lines)

### What Claude does with scene backgrounds:
1. Optimize to WebP at 3 breakpoints: 1920w (desktop), 1280w (tablet), 768w (mobile)
2. Build `<SceneBackground>` with blur-up loading (tiny blurred version instant, sharp fades in)
3. Add parallax scroll effect (background moves slower than content)
4. Build `<CinematicDialogue>` visual novel overlay with typing animation

### What Claude does with detailed portraits:
1. Optimize to WebP
2. Position in cinematic mode scenes
3. Animate: slide-in from sides, expression changes, transition effects

### Image Quality Note
WebP compression at 90% quality is **visually identical** to the original PNG. The 60-80% refers to FILE SIZE reduction only, not visual quality. This is industry standard (Google, Netflix, Spotify, Duolingo all serve WebP). For extra safety, lossless WebP (40-50% smaller, mathematically identical) is also an option.

---

## 13. Comedy & Story Style Guide

### Verumius's Comedy Engine
- **Humor through SITUATION, never through jokes or puns.** The comedy comes from real cultural misunderstandings that actually happen to foreigners.
- **Stoic optimist who gets absurdly lucky AND unlucky simultaneously.** Stumbles into the right place at the wrong time. Every episode follows: situation → language/culture clash → things go comically wrong → quiet perseverance → small victory → "too good to be true" ending.
- **Tone**: Bert & Ernie meets American Dad energy, toned down. Mature and playful, not dark. Self-contained sketches, not continuous plot.

### Language Humor Rule (NON-NEGOTIABLE)
- Language-based jokes MUST involve CORRECT language
- Example: mixing up Korean 코피 (nosebleed) when ordering coffee (real confusion)
- Example: German "schon" vs "schon" (actual learner mistake)
- The learner LEARNS from the comedy because the mistake is authentic
- NEVER make actual language errors that could mislead

### Genre Growth with CEFR
- **A1**: Sitcom sketches. Survival situations. Physical comedy. "I pointed at the wrong menu item."
- **A2**: Recurring cast. Social situations. Mild drama. "My neighbor thinks I agreed to water her 47 plants."
- **B1**: Adventure comedy. Real trouble. "I accidentally volunteered for a speech at the Verein meeting."
- **B2**: Dramedy. Professional stakes, irony, wit. "My boss thinks my presentation was satire. It wasn't."

### German Cultural Anchors (authentic foreigner experiences)
- **Anmeldung**: Registration hell at the Burgeramt (every foreigner's nightmare)
- **Pfand**: Deposit bottle confusion at the supermarket
- **Punktlichkeit**: German punctuality clashing with Verumius's chaos
- **Backerei**: Ordering bread rolls (the vocabulary alone is comedic)
- **Verein**: Germans and their clubs/associations
- **Mulltrennung**: 6 different garbage bins, Verumius puts glass in paper
- **Behorde**: Bureaucracy: forms, waiting rooms, number tickets
- **Feierabend**: Sacred after-work time (cultural concept)
- **du/Sie**: Accidentally using du with the boss
- **Ruhezeit**: Quiet hours: vacuuming at 10pm, neighbor knocks
- **Brot**: 300+ types of bread, Verumius is overwhelmed

These are NOT jokes ABOUT German culture. They are situations that genuinely happen. The learner relates because they will face the same things.

---

## 14. Language Quality Terminology (IMPORTANT)

**Do NOT use "gold standard" for any language.** No language has earned certification-grade completeness per PP55/PP57.

| Term | Meaning | Languages |
|------|---------|-----------|
| **Pipeline-polished** | Most audits, most PP8 fixes, most dialogue enrichment. Relative quality leader. | Korean, Dutch |
| **Production-ready** | Complete A1-B2, deployed, usable. Not verified against official exam lists. | All 5 |
| **Certification-verified** | Every word on official exam list taught. Every grammar construct covered. PP55/PP57 PASS. | NONE yet |
| **Template-based** | Unit distribution copied from a template, not concept-driven per PP56. | German, French, Spanish |

No language is "gold standard" until it passes PP55 (full vocabulary against official exam list) AND PP57 (full grammar against official inventory). This has not been done for ANY language.

---

*This document was written by Claude Opus 4.6 from a structured interview with the VerumLingua owner on 2026-03-22. Every design decision was made by the owner.*
