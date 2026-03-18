# Verumius UI & AI Integration Log
**Session date**: 2026-03-18
**Branch**: main
**Commits**: `a6b0f4f` through `0e2d243`

---

## What Is Verumius

Verumius is the AI language tutor embedded directly inside the LingoVerse platform. It runs as a floating chat panel powered by the VerumLingua AI proxy (`verumlingua-ai.xqkv62nnqq.workers.dev`, a Cloudflare Worker). It is context-aware (it can see what lesson or screen the learner is on), mixes target-language responses naturally, and lives as a persistent side-panel FAB that can be expanded to fullscreen.

---

## Access & Entry Points

### Dev key
- Loading screen access code changed from `"qqqq"` to `"koko"`.
- Located in the `VerumiusAccess` component (line ~12702).

### Two ways to open
| Source | Behavior |
|--------|----------|
| Topnav "Chat" button | Opens fullscreen immediately, no quick-reply buttons shown |
| Side-panel FAB (robot icon) | Opens small floating panel, shows quick-reply starter buttons |

- Tracked via `vrSource` state: `"nav"` or `"fab"`.
- Quick-reply buttons only render when `vrSource === "fab"`.

---

## Target Language AI Responses

The Cloudflare Worker system prompt is not accessible from the repo, so target-language steering is achieved via a hidden **primer injection** prepended to every API call. It is never shown in the UI.

```javascript
const primer = [
  { role: "user",      content: `[Tutor setup: The user is actively learning ${tgtName}. Weave ${tgtName} naturally into every response — use ${tgtName} sentences, give corrections in ${tgtName}, always translate any ${tgtName} you write. Aim for ~40% ${tgtName}, scaling up if the user writes in ${tgtName}.]` },
  { role: "assistant", content: `Understood! I'll make sure to practice ${tgtName} with you throughout our conversation.` }
];
// Prepended to the messages array on every fetch call
```

`tgtName` is resolved from `LANG_META[lang]?.name` — fully language-agnostic, works for any of the 5 launch languages.

---

## Panel Architecture

### State variables
| State | Type | Purpose |
|-------|------|---------|
| `showVerumius` | bool | Panel visible/hidden |
| `vrFullscreen` | bool | Fullscreen vs floating mode |
| `vrPos` | `{x,y}` or null | Explicit fixed position (drag/exit); null = CSS anchor |
| `vrSize` | `{width,height}` | Current panel dimensions |
| `vrDragging` | bool | Drag in progress (disables transition) |
| `vrExiting` | bool | Fullscreen exit animation in progress |
| `vrSource` | `"fab"` or `"nav"` | How the panel was opened |
| `vMsgs` | array | Chat message history |
| `vLoading` | bool | AI response pending |
| `vInput` | string | Text input value |

### Panel layout (CSS classes)
```
.vr-wrap                   — outer container (fixed, z:9998)
  .vr-hdr                  — frosted glass header (position:absolute, z:10)
    .vr-hdr-info           — name + subtitle
    .vr-hdr-btns           — save / fullscreen / reset / close buttons
  .vr-rz-{se|sw|ne|nw}    — corner resize handles (hover to reveal)
  .vr-edge-{n|s|w|e}      — edge resize zones (mouse + touch)
  .vr-msgs                 — scrollable message list (padding-top:66px)
    .vr-ai                 — AI bubble (left, max-width:44%)
    .vr-user               — user bubble (right, max-width:44%)
    .vr-typing             — animated typing indicator
    .vr-qr                 — quick-reply button group
  .vr-inp-bar              — input row
    .vr-inp                — text input
    .vr-send               — send button
```

### Fullscreen inline style
```javascript
// vrFullscreen = true
{ position:"fixed", top:64, left:0, width:"100vw",
  height:"calc(100dvh - 64px)", borderRadius:0,
  transition:"all 0.52s cubic-bezier(0.4,0,0.2,1)" }

// vrFullscreen = false, normal
{ width:vrSize.width, height:vrSize.height,
  ...(vrPos ? {position:"fixed", top:vrPos.y, left:vrPos.x} : {}),
  transition: vrDragging||vrExiting ? "none" : "all 0.42s cubic-bezier(0.34,1.56,0.64,1)",
  animation: vrExiting ? "vr-inflate 0.46s cubic-bezier(0,0,0.3,1) forwards" : "" }
```

---

## Frosted Glass Header (iOS Style)

**Goal**: Messages scroll up and disappear behind the header with a frosted blur — header "shares pixels" with the message list, iOS Messages style.

**Implementation**:
- `.vr-hdr` is `position:absolute; top:0; z-index:10` — taken out of flex flow, floats above the scroll container.
- `.vr-msgs` fills the full height from `y=0` (flex:1), so the scroll container starts at the same y-origin as the header. Content starts at `padding-top:66px`.
- As messages accumulate and scroll up, they pass behind the header. `backdrop-filter:blur(20px) saturate(1.6)` on `.vr-hdr` blurs them.

**Transparency tuning** (final values after iteration):
```css
.vr-hdr {
  backdrop-filter: blur(20px) saturate(1.6);
  background: linear-gradient(180deg,
    rgba(237,232,255,0.62) 0%,
    rgba(229,223,255,0.54) 55%,
    rgba(221,214,255,0.46) 100%
  );
}
```
- Previous values (`0.90 → 0.78`) were too opaque — emoji and text not visible through.
- Final values (`0.62 → 0.46`) let message content ghost through faintly.

**What was removed**: `.vr-fade-top` — a 18px gradient seam at `top:51px` that was supposed to blend the header's bottom edge into the message list. Removed because the actual header is ~56px tall, so the gradient bled 5-13px into the live message area, appearing as a visible colored stripe mid-panel. The `backdrop-filter` alone is sufficient.

---

## Bubble Layout (iOS Messages Halves)

**Problem**: With `max-width:86%`, AI and user bubbles could cross the center of the panel in narrow widths. In resized/small mode, bubbles would overlap or stretch to meet each other.

**Fix**: `max-width:44%` on `.vr-ai`, `.vr-user`, and `.vr-typing`.
- AI bubbles: left 44% of panel width.
- User bubbles: right 44%.
- Middle 12% always empty. Neither side ever crosses center.
- Scales proportionally at all widths — same rule works for the 316px floating panel and the full-browser fullscreen.

---

## Bubble Text Fade Fix

**Problem**: Top portion of tall AI bubbles appeared washed out / faded.

**Root cause**: `.vr-ai::before` and `.vr-typing::before` used `height:42%` — a white gradient overlay covering 42% of the bubble height from the top, washing out all text in that region on long bubbles.

**Fix**: Reduced to `height:14px` (fixed pixels) — a thin gloss edge at the very top of the bubble only. No text covered.

---

## Bubble Entry Animations

**Old**: `scale(0.52) → scale(1.04) → scale(1.0)` — jarring pop from near-zero, no directional sense.

**New**: Directional iOS slide-in:
```css
@keyframes vr-pop-l {
  0%   { opacity:0; transform:translateX(-14px) scale(0.95); }
  60%  { transform:translateX(2px) scale(1.01); }
  100% { opacity:1; transform:translateX(0) scale(1); }
}
@keyframes vr-pop-r {
  0%   { opacity:0; transform:translateX(14px) scale(0.95); }
  60%  { transform:translateX(-2px) scale(1.01); }
  100% { opacity:1; transform:translateX(0) scale(1); }
}
```
- AI bubbles slide in from the left.
- User bubbles slide in from the right.
- Easing: `cubic-bezier(0.22,1,0.36,1)` — fast out, gentle spring settle.

---

## Resize System

### Corner handles (mouse)
Four invisible 22×22px absolute-positioned corners (`.vr-rz-{se|sw|ne|nw}`). Appear only on direct corner hover. Drag to resize from that corner. Uses direct DOM manipulation during drag (no React re-render lag), syncs `vrSize` and `vrPos` on mouseup.

### Edge zones (mouse + touch)
Four invisible edge strips (`.vr-edge-{n|s|w|e}`): 7px high/wide, covering the four sides between the corners. Work with both `onMouseDown` and `onTouchStart` — specifically added for touch/tablet usage.

- North edge: drag up/down to resize from top.
- South edge: drag up/down to resize from bottom.
- West/east edges: drag left/right.
- Edges show a subtle purple highlight on hover/active: `rgba(123,94,232,0.14)`.
- All resize zones hidden in fullscreen mode (`.vr-wrap:not(.vr-fs)` selector).

**Bounds**: `min-width:260px`, `max-width:680px`, `min-height:320px`, `max-height:90vh`.

### vrPos reset on close/minimize
After any close or minimize action, `setVrPos(null)` is called — panel returns to its CSS-anchored default position (`right:70px; bottom:24px`). Never "remembers" a dragged position across open/close cycles.

---

## Fullscreen Exit Animation (macOS Window Style)

### The problem with naive approach
Setting `vrFullscreen=false` while `transition:all` is active animates `width` and `height` from `100vw → 316px`. During this tween, text continuously reflows as the panel width changes — every character jumps around for the duration of the transition.

### Solution: snap size, animate transform only
When `exitVrFullscreen()` fires:
1. `setVrPos({x, y})` — pins the destination as explicit `left/top`.
2. `setVrFullscreen(false)` — React instantly renders the small panel at target size.
3. `setVrExiting(true)` — disables `transition:all`, enables the keyframe animation.
4. After 580ms: `setVrExiting(false)`, `setVrPos(null)` — cleanup.

Because `transition:none` is applied when `vrExiting=true`, the size change is **instantaneous** — no text reflow ever. The visual animation is entirely on `transform:scale` and `border-radius`, which do not trigger layout.

### The macOS keyframe
```css
@keyframes vr-inflate {
  0%   { transform: scale(1.62);                   border-radius: 2px;  }
  26%  { transform: scale(1.04) scaleX(0.87);      border-radius: 11px; }
  50%  { transform: scale(0.94);                   border-radius: 20px; }
  73%  { transform: scale(1.04);                   border-radius: 20px; }
  100% { transform: scale(1.0);                    border-radius: 20px; }
}
```

| Frame | What happens | macOS analogy |
|-------|-------------|---------------|
| 0% | Panel appears at 1.62× — still "fullscreen size" | Window at rest before minimize starts |
| 26% | Lateral squeeze (`scaleX:0.87`) while still above 1× | The edge warp / genie morph |
| 50% | Overshoots past true size to 0.94× | Spring overshoot landing |
| 73% | Tiny inflate to 1.04× | Spring bounce back |
| 100% | Settles at 1.0 | Window at rest in small mode |

### The macOS easing curve
```
cubic-bezier(0, 0, 0.3, 1)
```
When `x1=0`, the bezier has maximum initial slope — the animation hits **full velocity at frame 1** with no ramp-up. This is the key characteristic of macOS window animations: they start instantly fast and decelerate smoothly. Generic `ease` or `ease-in-out` ramp up from zero; macOS never does.

Duration: `0.46s` — intentionally short, matching macOS window animation timing (250–500ms range).

---

## Commit History (this session)

| Commit | Description |
|--------|-------------|
| `898ef68` | Fix SVG icons, chat nav opens Verumius, vrPos resets on close |
| `6087e77` | Topnav opens fullscreen, FAB opens small, fix compress icon |
| `92c67bb` | Fade-behind-header mask, natural scrollbar, bubbles never shrink |
| `b39adef` | Fixed size panel, corner resize, iOS frosted-glass header fade |
| `9052b86` | Dev key koko, frosted glass fixed, iOS transitions, target lang, corner hide |
| `0b05e8b` | iOS header frost, natural bubbles, no clamp centering |
| `0839d43` | Remove mid-window fade stripe, increase header transparency |
| `691c02a` | iOS bubble halves (44%), fix text fade (height:14px), smooth slide animations |
| `b9eed38` | Bubblegum exit animation + edge resize for touch |
| `62c6a22` | Deflate-from-fullscreen pop animation |
| `0e2d243` | macOS window parameters: lateral squeeze + cubic-bezier(0,0,0.3,1) |

---

## Known Remaining Considerations

- **Fullscreen border-radius during expand**: The `goVrFullscreen` path uses `transition:all` which smoothly removes border-radius. Considered symmetrical with exit; no issue reported.
- **Touch drag-to-resize on mobile**: Edge zones handle `touchstart`/`touchmove`/`touchend`. Tested logic is correct; not verified on physical device.
- **Panel fixed size**: `.vr-wrap` has a fixed default `height:480px`. The panel does NOT auto-expand as the chat grows — scroll handles overflow. This is intentional (D-session decision).
- **Quick-reply buttons**: Only shown when `vrSource==="fab"` AND `vMsgs.length===0`. Disappear after the first message exchange.
- **Scrollbar**: 7px natural webkit scrollbar with purple tint. `scrollbar-width:thin` for Firefox.
- **Border-radius on `.vr-wrap.vr-fs`**: Set to `0` via inline style during fullscreen. The `vr-inflate` keyframe starts at `border-radius:2px` (not 0) to give a slight softening at the very start of the exit animation.
