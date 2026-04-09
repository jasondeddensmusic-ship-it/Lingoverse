// ━━━━━━━━━━ NEW DESIGN SYSTEM ━━━━━━━━━━
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Source+Sans+3:wght@400;500;600;700&family=Quicksand:wght@500;600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap');

:root {
  --blue: #4A8FE7;
  --blue-light: #E8F1FC;
  --blue-pale: #F3F8FF;
  --blue-dark: #3A6FBA;
  --gold: #F5A623;
  --gold-light: #FFF5E0;
  --gold-dark: #D4880C;
  --teal: #2ECDA7;
  --teal-light: #E4F9F3;
  --teal-dark: #0D7D5C;
  --teal-text: #0D7D5C;
  --coral: #F56565;
  --coral-light: #FEE8E8;
  --bg: #E6ECFA;
  --white: #FFFFFF;
  --gray-50: #F7F8FC;
  --gray-100: #EEEEF5;
  --gray-200: #DDDDE8;
  --gray-300: #C4C4D4;
  --gray-400: #9696AD;
  --gray-500: #6B6B84;
  --gray-600: #4A4A62;
  --gray-700: #2D2D3F;
  --gray-800: #1A1A2B;
  --radius: 16px;
  --radius-sm: 10px;
  --radius-lg: 22px;
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08);
  --shadow: 0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
  --shadow-blue: 0 4px 16px rgba(74,143,231,0.25);
  --shadow-gold: 0 4px 16px rgba(245,166,35,0.25);
  --shadow-teal: 0 4px 16px rgba(46,205,167,0.25);
  --gold-bg: linear-gradient(135deg, #FFF9EE, #FFF5E0);
  --gold-bg-light: linear-gradient(145deg, #FFF9EE, #FFFBF4);
  --purple-bg: linear-gradient(135deg, #F8F6FF, #F0EBFF);
  --purple-flat: #F8F6FF;
  --purple-border: #E8E0FF;
  --example-bg: linear-gradient(180deg, var(--gray-50), white);
  --purple-accent: #7050D8;
  --purple-accent-text: #7050D8;
  /* ── GLASS SYSTEM (auto light/dark) ── */
  --card-bg: linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(250,250,254,0.78) 50%, rgba(245,244,250,0.75) 100%);
  --card-border: rgba(220,215,235,0.5);
  --card-shadow: 0 3px 10px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(0,0,0,0.03);
  --card-shadow-hover: 0 8px 22px rgba(0,0,0,0.08), 0 0 16px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(0,0,0,0.04);
  --panel-bg: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(245,246,250,0.75));
  --glass-blur: blur(18px) saturate(1.2);
}

/* ── DARK MODE ── */
:root.dark {
  --bg: #16162B;
  --white: rgba(32,34,62,0.65);
  --gray-50: rgba(40,42,72,0.6);
  --gray-100: #2E2E50;
  --gray-200: #3E3E62;
  --gray-300: #68689A;
  --gray-400: #B8B8D4;
  --gray-500: #D0D0E0;
  --gray-600: #E4E4F0;
  --gray-700: #F0F0F8;
  --gray-800: #FFFFFF;
  --blue: #6AABF5;
  --blue-light: #1E2848;
  --blue-pale: #1A2240;
  --blue-dark: #8AC0FA;
  --gold: #F5C040;
  --gold-light: #2E2818;
  --gold-dark: #F5D060;
  --teal: #50E0C0;
  --teal-light: #1A3028;
  --teal-dark: #70F0D8;
  --teal-text: #5EEAC8;
  --coral: #F58888;
  --coral-light: #301A1A;
  --shadow-sm: 0 2px 6px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.25);
  --shadow: 0 6px 20px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25);
  --shadow-lg: 0 14px 42px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.3);
  --shadow-blue: 0 6px 24px rgba(106,171,245,0.3);
  --shadow-gold: 0 6px 24px rgba(245,192,64,0.3);
  --shadow-teal: 0 6px 24px rgba(80,224,192,0.3);
  --gold-bg: linear-gradient(135deg, rgba(50,42,20,0.7), rgba(44,38,14,0.7));
  --gold-bg-light: linear-gradient(145deg, rgba(50,42,20,0.7), rgba(44,38,18,0.7));
  --purple-bg: linear-gradient(135deg, rgba(50,38,85,0.8), rgba(40,32,70,0.75));
  --purple-flat: rgba(40,32,70,0.7);
  --purple-border: #4E4280;
  --example-bg: var(--gray-50);
  --purple-accent: #A890FF;
  --purple-accent-text: #C8B8FF;
  /* ── GLOSSY HELPERS ── */
  --glass-bg: rgba(32,34,62,0.5);
  --glass-border: rgba(255,255,255,0.1);
  --glass-highlight: rgba(255,255,255,0.14);
  --glass-lowlight: rgba(0,0,0,0.18);
  --candy-highlight: rgba(255,255,255,0.35);
  --candy-lowlight: rgba(0,0,0,0.2);
  /* ── GLASS SYSTEM (auto light/dark) ── */
  --card-bg: linear-gradient(180deg, rgba(45,40,75,0.7) 0%, rgba(32,28,58,0.65) 50%, rgba(26,24,50,0.6) 100%);
  --card-border: rgba(160,140,240,0.18);
  --card-shadow: 0 3px 12px rgba(0,0,0,0.3), 0 0 12px rgba(140,120,220,0.1), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.18);
  --card-shadow-hover: 0 6px 20px rgba(0,0,0,0.35), 0 0 24px rgba(140,120,220,0.2), 0 0 8px rgba(160,140,240,0.1), inset 0 2px 0 rgba(255,255,255,0.18), inset 0 -2px 0 rgba(0,0,0,0.15);
  --panel-bg: rgba(28,30,55,0.55);
  --glass-blur: blur(22px) saturate(1.3);
}
:root.dark body, :root.dark #root {
  background: radial-gradient(ellipse at 50% 0%, #1E1E3A 0%, #16162B 50%, #121228 100%);
  background-attachment: fixed;
  color: var(--gray-700);
}
/* Cloud mode: nebula overlay — dark mode only */
:root.dark.cloud-mode body, :root.dark.cloud-mode #root { background: transparent !important; }

/* ═══ NEBULA BACKGROUND SYSTEM (dark + cloud mode only) ═══ */
.nebula-wrap {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0; pointer-events: none; overflow: hidden;
  display: none; /* Hidden by default — dark + cloud mode activates it */
  background: radial-gradient(ellipse at 50% 0%, #1E1E3A 0%, #0D0B1A 60%, #080618 100%);
}
:root.dark.cloud-mode .nebula-wrap { display: block; }

.nebula-stars {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}

/* ━━━━━━ GLASS CARDS — frosted translucent panels with top sheen ━━━━━━ */
:root.dark .topnav {
  background: rgba(28,28,52,0.78);
  backdrop-filter: blur(24px) saturate(1.3); -webkit-backdrop-filter: blur(24px) saturate(1.3);
  border-color: var(--glass-border);
  box-shadow:
    0 4px 24px rgba(0,0,0,0.35),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -1px 0 var(--glass-lowlight);
}
:root.dark .card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.015) 50%, transparent 100%);
}
:root.dark .quiz-opt::before,
:root.dark .lang-card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 100%);
}
:root.dark .card:hover {
  border-color: rgba(168,136,255,0.5);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.35), 0 0 32px rgba(168,136,255,0.28), 0 0 10px rgba(160,140,240,0.14), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
  filter: brightness(1.12);
}
:root.dark .lang-card.active {
  background: rgba(30,28,60,0.7);
  border-color: rgba(168,136,255,0.4);
  box-shadow: 0 6px 24px rgba(123,94,232,0.2), inset 0 1px 0 rgba(255,255,255,0.15);
}
:root.dark .lang-card .name { color: var(--gray-800); }
:root.dark .xpbar { background: rgba(255,255,255,0.07); box-shadow: inset 0 1px 3px rgba(0,0,0,0.3); border-radius: 20px; }
:root.dark .xpbar-fill { box-shadow: 0 0 14px rgba(168,136,255,0.5), 0 0 4px rgba(168,136,255,0.3); }
:root.dark h1,:root.dark h2,:root.dark h3,:root.dark h4,:root.dark h5,:root.dark .hd { color: var(--gray-800); }
:root.dark .badge-gold { background: rgba(245,192,64,0.14); border: 1px solid rgba(245,192,64,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-blue { background: rgba(106,171,245,0.14); border: 1px solid rgba(106,171,245,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-teal { background: rgba(80,224,192,0.14); border: 1px solid rgba(80,224,192,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .badge-coral { background: rgba(245,136,136,0.14); border: 1px solid rgba(245,136,136,0.2); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06); }
:root.dark .stat-xp { background: var(--gold-light); }
:root.dark .stat-streak { background: var(--coral-light); }
:root.dark .stat-level { background: var(--blue-light); }

/* ━━━━━━ GLASS INPUTS — recessed with inner shadow ━━━━━━ */
:root.dark input, :root.dark textarea, :root.dark select {
  background: rgba(24,26,50,0.7);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  color: var(--gray-800);
  border-color: rgba(255,255,255,0.1);
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.03);
  border-radius: 12px;
}
:root.dark input::placeholder, :root.dark textarea::placeholder { color: var(--gray-400); }
:root.dark input:focus, :root.dark textarea:focus {
  background: rgba(28,30,54,0.8);
  border-color: rgba(106,171,245,0.45);
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.25), 0 0 20px rgba(106,171,245,0.15);
}

/* ━━━━━━ GLASS PANELS ━━━━━━ */
:root.dark .ach-card::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%);
}
:root.dark .chat-msg {
  background: rgba(32,34,62,0.45);
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
:root.dark .chat-starter {
  background: rgba(32,34,62,0.4);
  border: 1.5px solid rgba(255,255,255,0.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}
:root.dark .chat-starter:hover {
  background: rgba(42,44,78,0.6);
  border-color: rgba(168,136,255,0.3);
  box-shadow: 0 0 20px rgba(123,94,232,0.12), inset 0 1px 0 rgba(255,255,255,0.1);
}
:root.dark code { background: rgba(255,255,255,0.07); color: var(--gray-700); border-radius: 6px; }

/* ━━━━━━ CANDY BUTTONS — 3D pillow + gloss stripe + bevel ━━━━━━ */
:root.dark .btn-primary, :root.dark .btn-blue, :root.dark .btn-purple {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(140,100,240,0.95) 6%,
    #7B5EE8 45%,
    #5B3DBF 100%) !important;
  border: 1.5px solid rgba(200,180,255,0.3) !important;
  box-shadow:
    0 0 18px rgba(140,110,240,0.4),
    0 0 40px rgba(123,94,232,0.2),
    0 8px 24px rgba(123,94,232,0.5),
    0 3px 6px rgba(0,0,0,0.25),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  color: white !important;
}
:root.dark .btn-primary:hover, :root.dark .btn-blue:hover, :root.dark .btn-purple:hover {
  box-shadow:
    0 0 24px rgba(160,130,255,0.6),
    0 0 50px rgba(140,110,240,0.35),
    0 0 80px rgba(123,94,232,0.15),
    0 10px 32px rgba(123,94,232,0.5),
    0 3px 6px rgba(0,0,0,0.25),
    inset 0 2px 0 rgba(255,255,255,0.4),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  filter: brightness(1.2);
  border-color: rgba(200,180,255,0.45) !important;
}
:root.dark .btn-gold {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(245,192,64,0.95) 6%,
    #F5A623 45%,
    #D4880C 100%) !important;
  border: 1.5px solid rgba(255,220,120,0.3) !important;
  box-shadow:
    0 0 18px rgba(245,180,50,0.4),
    0 0 40px rgba(245,166,35,0.2),
    0 8px 24px rgba(245,166,35,0.5),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}
:root.dark .btn-teal {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.22) 0%,
    rgba(80,224,192,0.95) 6%,
    #38D0AA 45%,
    #22A680 100%) !important;
  border: 1.5px solid rgba(120,240,210,0.3) !important;
  box-shadow:
    0 0 18px rgba(60,220,180,0.4),
    0 0 40px rgba(46,205,167,0.2),
    0 8px 24px rgba(46,205,167,0.45),
    inset 0 2px 0 var(--candy-highlight),
    inset 0 -3px 0 var(--candy-lowlight) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}
:root.dark .btn-outline {
  background: var(--glass-bg) !important;
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.18) !important;
  color: var(--gray-700) !important;
  box-shadow:
    0 0 12px rgba(140,130,200,0.15),
    0 4px 12px rgba(0,0,0,0.25),
    inset 0 1px 0 rgba(255,255,255,0.12),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
}
:root.dark .btn-outline:hover {
  border-color: rgba(106,171,245,0.5) !important;
  background: rgba(42,44,78,0.65) !important;
  color: var(--blue) !important;
  box-shadow:
    0 0 20px rgba(106,171,245,0.3),
    0 0 40px rgba(106,171,245,0.12),
    0 6px 20px rgba(106,171,245,0.2),
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
  filter: brightness(1.1);
}
:root.dark .btn-danger {
  background: linear-gradient(180deg,
    rgba(255,255,255,0.18) 0%,
    rgba(245,101,101,0.95) 6%,
    #E85D75 45%,
    #C04040 100%) !important;
  border: 1.5px solid rgba(255,140,140,0.3) !important;
  box-shadow:
    0 0 18px rgba(240,80,80,0.4),
    0 0 40px rgba(224,74,74,0.2),
    0 8px 24px rgba(224,74,74,0.45),
    inset 0 2px 0 rgba(255,255,255,0.28),
    inset 0 -3px 0 var(--candy-lowlight) !important;
}

/* ━━━━━━ PURPLE CANDY BUTTONS (for Continue, quizzes) ━━━━━━ */
:root.dark .btn-purple {
  background: linear-gradient(180deg,
    #C0AEF8 0%,
    #A488F0 15%,
    #8B6AE4 35%,
    #7B5EE8 50%,
    #6545C8 75%,
    #5840B8 90%,
    #4A2BA6 100%) !important;
  border: none !important;
  box-shadow:
    0 0 18px rgba(123,94,232,0.4),
    0 0 40px rgba(123,94,232,0.15),
    0 5px 16px rgba(85,53,181,0.5),
    inset 0 2px 0 rgba(255,255,255,0.35),
    inset 0 -3px 0 rgba(0,0,0,0.18) !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
/* Text-shadow on ALL dark-mode buttons for that candy feel */
:root.dark .btn { text-shadow: 0 1px 2px rgba(0,0,0,0.3); transition: all 0.2s ease; }
:root.dark .btn:hover { transform: translateY(-2px); filter: brightness(1.2); box-shadow: 0 0 28px rgba(168,136,255,0.35), 0 0 56px rgba(123,94,232,0.12), 0 8px 24px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -3px 0 rgba(0,0,0,0.15) !important; }
:root.dark .btn:active { transform: translateY(1px); filter: brightness(0.9); }

/* ━━━━━━ GLOSSY TOPNAV ITEMS ━━━━━━ */
:root.dark .topnav-item {
  color: var(--gray-500);
  border: 2px solid transparent;
  box-shadow: none;
}
:root.dark .topnav-item:hover {
  color: var(--gray-800);
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.08);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
:root.dark .topnav-item.active {
  color: var(--blue);
  background: rgba(106,171,245,0.12);
  border-color: rgba(106,171,245,0.25);
  box-shadow: 0 0 16px rgba(106,171,245,0.12), inset 0 1px 0 rgba(255,255,255,0.1);
}

/* ━━━━━━ ICON GLOW — colored halo on dark backgrounds ━━━━━━ */
:root.dark .dk-glow { filter: drop-shadow(0 0 10px rgba(168,136,255,0.6)) drop-shadow(0 0 20px rgba(106,171,245,0.2)); }
:root.dark .dk-glow-gold { filter: drop-shadow(0 0 10px rgba(245,192,64,0.6)) drop-shadow(0 0 20px rgba(245,192,64,0.25)); }
:root.dark .dk-glow-teal { filter: drop-shadow(0 0 10px rgba(80,224,192,0.6)) drop-shadow(0 0 20px rgba(80,224,192,0.25)); }
:root.dark .dk-glow-coral { filter: drop-shadow(0 0 10px rgba(245,136,136,0.6)) drop-shadow(0 0 20px rgba(245,136,136,0.25)); }
:root.dark .dk-glow-blue { filter: drop-shadow(0 0 10px rgba(106,171,245,0.6)) drop-shadow(0 0 20px rgba(106,171,245,0.25)); }

/* ━━━━━━ GLASS HELPER — apply to any element ━━━━━━ */
:root.dark .glass {
  background: var(--glass-bg) !important;
  backdrop-filter: blur(20px) saturate(1.2) !important; -webkit-backdrop-filter: blur(20px) saturate(1.2) !important;
  border: 1.5px solid var(--glass-border) !important;
  box-shadow: 0 6px 24px rgba(0,0,0,0.3),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -2px 0 var(--glass-lowlight) !important;
}

/* ━━━━━━ SHIMMER & GLOW ANIMATIONS ━━━━━━ */
@keyframes subtlePulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}
@keyframes softGlow {
  0%, 100% { box-shadow: 0 0 12px rgba(168,136,255,0.15); }
  50% { box-shadow: 0 0 20px rgba(168,136,255,0.3); }
}
:root.dark .xpbar-fill {
  animation: subtlePulse 3s ease-in-out infinite;
}
:root.dark .topnav {
  animation: none;
}
/* Subtle glow pulse on active lesson card border */
:root.dark [style*="borderLeft: 4px solid"],
:root.dark [style*="borderLeft:4px solid"] {
  position: relative;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

/* ━━━━━━ UNIVERSAL GLOSS — applied via .gloss class in JSX ━━━━━━ */
.gloss {
  border: 2.5px solid rgba(180,160,230,0.35) !important;
  box-shadow: 0 3px 10px rgba(140,100,220,0.1), 0 1px 3px rgba(0,0,0,0.04), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(140,100,220,0.07) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.gloss::before {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, transparent 100%);
  pointer-events: none; border-radius: 0 0 45% 45%; z-index: 1;
}
.gloss:hover {
  border-color: rgba(140,100,220,0.5) !important;
  box-shadow: 0 6px 18px rgba(140,100,220,0.15), 0 0 14px rgba(123,94,232,0.07), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(140,100,220,0.09) !important;
}
:root.dark .gloss {
  border-color: rgba(160,140,240,0.18) !important;
  box-shadow: 0 3px 12px rgba(0,0,0,0.3), 0 0 12px rgba(140,120,220,0.1), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
}
:root.dark .gloss:hover {
  border-color: rgba(168,136,255,0.4) !important;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35), 0 0 28px rgba(168,136,255,0.22), inset 0 2px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
  filter: brightness(1.12);
}
:root.dark .gloss::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 100%);
}
/* Buttons get extra candy depth */
.btn {
  box-shadow: 0 5px 16px rgba(0,0,0,0.12),
    inset 0 2px 1px rgba(255,255,255,0.4),
    inset 0 -3px 1px rgba(0,0,0,0.12) !important;
}
.btn:hover {
  box-shadow: 0 10px 28px rgba(0,0,0,0.16),
    0 0 24px rgba(123,94,232,0.15),
    inset 0 2px 1px rgba(255,255,255,0.5),
    inset 0 -3px 1px rgba(0,0,0,0.12) !important;
  transform: translateY(-2px);
  filter: brightness(1.08);
}
.btn:active {
  box-shadow: 0 1px 4px rgba(0,0,0,0.15),
    inset 0 3px 8px rgba(0,0,0,0.12) !important;
  transform: translateY(1px);
  filter: brightness(0.95);
}
body, #root {
  font-family: 'Source Sans 3', 'Noto Naskh Arabic', sans-serif;
  background: linear-gradient(180deg, #E6ECFA 0%, #DDE6F8 40%, #E6ECFA 100%);
  background-attachment: fixed;
  color: var(--gray-700);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  overflow-wrap: break-word; word-wrap: break-word;
  -webkit-text-size-adjust: 100%;
}
body.modal-open { overflow: hidden !important; touch-action: none; }
h1,h2,h3,h4,h5,.hd { font-family: 'DM Sans', 'Noto Naskh Arabic', sans-serif; color: var(--gray-800); }
h1 { font-size: clamp(22px, 5vw, 32px); }
h2 { font-size: clamp(18px, 4vw, 26px); }
h3 { font-size: clamp(16px, 3.5vw, 22px); }

/* ── RTL (Arabic): font and spacing adjustments ── */
[dir="rtl"] body, [dir="rtl"] #root {
  font-family: 'Noto Naskh Arabic', 'Source Sans 3', sans-serif;
  line-height: 1.7;
}
[dir="rtl"] h1,[dir="rtl"] h2,[dir="rtl"] h3,[dir="rtl"] h4,[dir="rtl"] h5,[dir="rtl"] .hd {
  font-family: 'Noto Naskh Arabic', 'DM Sans', sans-serif;
}
[dir="rtl"] .bottomnav-item span { font-family: 'Noto Naskh Arabic', sans-serif; font-size: 10px; }

/* ── MOBILE: touch targets, text safety, button feedback ── */
@media (max-width: 700px) {
  button, [role="button"], a, select, .card[onclick], .lang-card {
    min-height: 44px; min-width: 44px;
  }
  .card, .home-tile { overflow-wrap: break-word; word-break: break-word; }
  button:active, .btn:active, [role="button"]:active, .card:active, .lang-card:active {
    transform: scale(0.97) !important; transition: transform 0.08s !important;
  }
}

/* ── NAV BAR (top, like Duolingo mobile) ── */
.topnav {
  position: fixed; top: 0; left: 0; right: 0; height: calc(64px + env(safe-area-inset-top, 0px)); z-index: 100;
  background: rgba(255,255,255,0.78); border-bottom: 2px solid var(--card-border);
  display: flex; align-items: center; padding: env(safe-area-inset-top, 0px) max(24px, env(safe-area-inset-right, 0px)) 0 max(24px, env(safe-area-inset-left, 0px));
  box-shadow: 0 4px 16px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.04);
  backdrop-filter: blur(24px) saturate(1.4); -webkit-backdrop-filter: blur(24px) saturate(1.4);
}
.topnav-logo {
  font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 22px;
  background: linear-gradient(135deg, #7B5EE8, #A890FF);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-right: 32px; cursor: pointer; letter-spacing: -0.5px;
}
.topnav-items { display: flex; gap: 4px; flex: 1; }
.topnav-item {
  display: flex; align-items: center; gap: 7px; padding: 8px 16px;
  border-radius: var(--radius-sm); cursor: pointer; font-weight: 600;
  font-size: 14px; color: var(--gray-400); transition: all 0.2s;
  font-family: 'DM Sans', sans-serif; border: 2px solid transparent;
}
.topnav-item:hover { color: var(--gray-600); border-color: var(--gray-300); box-shadow: 0 0 0 3px rgba(74,143,231,0.08); }
.topnav-item.active {
  color: var(--blue); background: var(--blue-light); border-color: var(--blue);
}
.topnav-item .icon { font-size: 18px; }
.topnav-logo-wrap { cursor: pointer; padding: 6px 12px; border-radius: var(--radius-sm); border: 2px solid transparent; transition: all 0.2s; flex: 0 0 auto; display: flex; align-items: center; }
.topnav-logo-wrap:hover { border-color: var(--gray-300); box-shadow: 0 0 0 3px rgba(123,94,232,0.1); }
.topnav-right { display: flex; align-items: center; gap: 12px; margin-left: auto; }
.topnav-stat {
  display: flex; align-items: center; gap: 5px; padding: 6px 12px;
  border-radius: 20px; font-weight: 700; font-size: 13px;
  font-family: 'DM Sans', sans-serif;
}
.stat-xp { background: var(--gold-light); color: var(--gold-dark); }
.stat-streak { background: var(--coral-light); color: var(--coral); }
.stat-level { background: var(--blue-light); color: var(--blue-dark); }

/* ── MAIN CONTENT ── */
.main { margin-top: calc(64px + env(safe-area-inset-top, 0px)); padding: 32px max(32px, env(safe-area-inset-right, 0px)) calc(32px + env(safe-area-inset-bottom, 0px)) max(32px, env(safe-area-inset-left, 0px)); max-width: 860px; margin-left: auto; margin-right: auto; position: relative; z-index: 1; }

/* ── CARDS ── */
.card {
  background: var(--card-bg);
  border: 2px solid var(--card-border);
  border-radius: var(--radius); padding: 24px; transition: all 0.2s;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
/* Gloss highlight stripe on cards — subtle candy shine */
.card::before {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: 0 0 45% 45%; z-index: 1;
}
.card:hover { border-color: rgba(180,160,230,0.35); transform: translateY(-3px); box-shadow: 0 8px 22px rgba(0,0,0,0.08), 0 0 16px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(0,0,0,0.04) !important; filter: brightness(1.02); }
.card-blue { border-color: var(--blue); background: var(--blue-pale); }
.card-gold { border-color: var(--gold); background: var(--gold-light); }
.card-teal { border-color: var(--teal); background: var(--teal-light); }

/* ── BUTTONS ── */
.btn {
  font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px;
  padding: 12px 24px; border-radius: var(--radius-sm); border: none;
  cursor: pointer; transition: all 0.2s cubic-bezier(.4,0,.2,1); display: inline-flex;
  align-items: center; justify-content: center; gap: 8px; text-transform: none;
  position: relative; overflow: hidden;
}
.btn::after {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 45%;
  background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: 0 0 50% 50%;
}
.btn-blue, .btn-purple {
  background: linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%); color: white;
  box-shadow: 0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-blue:hover, .btn-purple:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(123,94,232,0.5), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15) !important; }
.btn-blue:active, .btn-purple:active { transform: translateY(1px); box-shadow: 0 1px 4px rgba(123,94,232,0.3), inset 0 3px 6px rgba(0,0,0,0.15) !important; }
.btn-gold {
  background: linear-gradient(180deg, #f7c84e 0%, var(--gold) 45%, #d08e10 100%); color: white;
  box-shadow: 0 4px 16px rgba(245,166,35,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,166,35,0.5), inset 0 2px 0 rgba(255,255,255,0.4) !important; }
.btn-teal {
  background: linear-gradient(180deg, #58e8c8 0%, var(--teal) 45%, #1eaa88 100%); color: white;
  box-shadow: 0 4px 16px rgba(46,205,167,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.btn-teal:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(46,205,167,0.5), inset 0 2px 0 rgba(255,255,255,0.4) !important; }
.btn-outline {
  background: linear-gradient(180deg, #fff 0%, #f5f6fa 100%); color: var(--gray-600);
  border: 2px solid var(--gray-200);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(0,0,0,0.03) !important;
}
.btn-outline::after { display: none; }
.btn-outline:hover { border-color: var(--purple-accent); color: var(--purple-accent); background: linear-gradient(180deg, #fff 0%, #F8F6FF 100%); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(123,94,232,0.12), inset 0 1px 0 rgba(255,255,255,0.9) !important; }
.btn-danger {
  background: linear-gradient(180deg, #f56868 0%, var(--coral) 45%, #b83838 100%); color: white;
  box-shadow: 0 4px 16px rgba(224,74,74,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.15) !important;
}
.btn-danger:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(224,74,74,0.45), inset 0 2px 0 rgba(255,255,255,0.35) !important; }

/* ── KEYBOARD FOCUS (arrow key navigation) ── */
.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; transition: all 0.15s !important; z-index: 5 !important; position: relative; }
.card.kb-focus { border-color: rgba(200,180,255,0.5) !important; transform: translateY(-2px) scale(1.05) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; filter: brightness(1.12) !important; }
.lang-card.kb-focus { border-color: rgba(200,180,255,0.5) !important; transform: translateY(-2px) scale(1.05) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; filter: brightness(1.12) !important; }
.btn.kb-focus { transform: translateY(-2px) scale(1.08) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.2), 0 8px 24px rgba(123,94,232,0.35) !important; filter: brightness(1.15) !important; }
.topnav-item.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; border-color: rgba(200,180,255,0.5) !important; box-shadow: 0 0 24px rgba(123,94,232,0.4) !important; color: var(--purple-accent) !important; filter: brightness(1.12) !important; }
.topnav-logo-wrap.kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; border-color: var(--purple-accent) !important; box-shadow: 0 0 24px rgba(123,94,232,0.4) !important; }
[role=button].kb-focus { outline: 3px solid rgba(200,180,255,0.5) !important; outline-offset: 3px !important; transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important; box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important; }
:root.dark .kb-focus { outline-color: rgba(200,180,255,0.6) !important; box-shadow: 0 0 32px rgba(150,120,255,0.6), 0 0 56px rgba(123,94,232,0.25), 0 8px 28px rgba(123,94,232,0.4) !important; }

/* Ghost tile warmth on hover/select — light mode only */
.ghost-tile { transition: transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s !important; }
:root:not(.dark) .ghost-tile.kb-focus, :root:not(.dark) .ghost-tile:hover {
  background: linear-gradient(180deg, #EDE8FF 0%, #DDD4FF 35%, #D0C6FF 65%, #C8BCFF 100%) !important;
}

/* ── Hover glow ring — ghost tiles and home tiles ── */
.ghost-tile:hover, .home-tile:hover {
  outline: 3px solid rgba(200,180,255,0.5); outline-offset: 3px;
  transform: translateY(-2px) scale(1.05) !important; filter: brightness(1.12) !important;
  box-shadow: 0 0 28px rgba(123,94,232,0.5), 0 0 48px rgba(123,94,232,0.15), 0 8px 24px rgba(123,94,232,0.3) !important;
  z-index: 5; position: relative;
}
:root.dark .ghost-tile:hover, :root.dark .home-tile:hover {
  outline-color: rgba(200,180,255,0.6);
  box-shadow: 0 0 32px rgba(150,120,255,0.6), 0 0 56px rgba(123,94,232,0.25), 0 8px 28px rgba(123,94,232,0.4) !important;
}

/* ── XP BAR ── */
.xpbar { height: 12px; background: var(--gray-100); border-radius: 12px; overflow: hidden; box-shadow: inset 0 3px 5px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8); }
.xpbar-fill {
  height: 100%; border-radius: 12px;
  background: linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 50%, #5840B8 100%);
  transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 0 14px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.15);
  position: relative;
  overflow: hidden;
}
.xpbar-fill::after {
  content: ''; position: absolute; top: 0; left: 5%; right: 5%; height: 45%;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 60%, transparent 100%);
  pointer-events: none;
}

/* ── BADGES ── */
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 12px; border-radius: 20px; font-size: 12px;
  font-weight: 700; font-family: 'DM Sans', sans-serif;
}
.badge-gold { background: var(--gold-light); color: var(--gold-dark); }
.badge-blue { background: var(--blue-light); color: var(--blue-dark); }
.badge-teal { background: var(--teal-light); color: var(--teal-dark); }
.badge-coral { background: var(--coral-light); color: var(--coral); }

/* ── LANGUAGE CARDS ── */
.lang-card {
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: var(--radius); padding: 18px 14px; cursor: pointer;
  transition: all 0.2s; display: flex; flex-direction: column;
  align-items: center; gap: 6px; min-width: 100px;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.lang-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.lang-card:hover { border-color: rgba(123,94,232,0.3); transform: translateY(-3px); box-shadow: var(--card-shadow-hover) !important; }
.lang-card.active { border-color: rgba(123,94,232,0.45); background: linear-gradient(180deg, #f2eeff 0%, #e8e0ff 100%); box-shadow: 0 6px 20px rgba(123,94,232,0.2), inset 0 2px 1px rgba(255,255,255,0.8) !important; }
.lang-card .flag { font-size: 32px; }
.lang-card .name { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px; color: var(--gray-700); }
.lang-card .native { font-size: 11px; color: var(--gray-400); }

/* ── SRS REVIEW ── */
.srs-tabs {
  display: flex; gap: 4px; background: var(--card-bg); border-radius: 16px;
  padding: 4px; backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  margin-bottom: 16px; border: 1.5px solid var(--card-border);
  box-shadow: var(--card-shadow);
}
.srs-tab {
  flex: 1; padding: 8px 12px; border-radius: 12px; font-weight: 700;
  font-size: 12px; text-align: center; cursor: pointer; transition: all 0.15s;
  color: var(--gray-500); background: transparent; border: none;
  font-family: 'Nunito', sans-serif; display: flex; align-items: center;
  justify-content: center; gap: 4px;
}
.srs-tab.active {
  background: var(--purple-accent); color: white;
  box-shadow: 0 2px 8px rgba(123,94,232,0.3);
}
.srs-badge {
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 10px; min-width: 18px; height: 18px; padding: 0 5px;
  border-radius: 9px; background: var(--coral); color: white;
  font-weight: 800; line-height: 1;
}
.srs-tab.active .srs-badge { background: rgba(255,255,255,0.3); }
.srs-stats {
  display: flex; gap: 8px; justify-content: center; margin-bottom: 16px; flex-wrap: wrap;
}
.srs-stat {
  background: var(--card-bg); backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur); border: 1.5px solid var(--card-border);
  border-radius: 12px; padding: 6px 14px; font-size: 12px; font-weight: 700;
  color: var(--gray-600); display: flex; align-items: center; gap: 4px;
  box-shadow: var(--card-shadow);
}
.srs-stat .num { color: var(--purple-accent); font-size: 16px; }
.srs-stat .num.teal { color: var(--teal); }
.srs-stat .num.coral { color: var(--coral); }
.srs-ratings {
  display: flex; gap: 10px; justify-content: center; margin-top: 28px; padding: 0 16px;
}
/* Rating buttons: all-purple family. Lighter = easier recall, darker = harder. Candy 3D pillows. */
.srs-rate-btn {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border-radius: 18px; padding: 14px 6px; min-width: 72px; flex: 1; max-width: 90px;
  cursor: pointer; font-weight: 800; font-size: 14px; border: none;
  transition: all 0.18s; font-family: 'Quicksand', 'Nunito', sans-serif;
  position: relative; overflow: hidden; color: white;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.srs-rate-btn::before {
  content: ''; position: absolute; top: 0; left: 6%; right: 6%; height: 46%;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.06) 100%);
  pointer-events: none; z-index: 1;
}
.srs-rate-btn:active { transform: scale(0.92); }
.srs-rate-btn:hover { transform: translateY(-3px); filter: brightness(1.1); }
.srs-rate-btn .interval { font-size: 11px; opacity: 0.85; margin-top: 2px; font-weight: 700; position: relative; z-index: 2; }
/* Again = darkest purple (forgot) */
.srs-rate-again {
  background: linear-gradient(180deg, #6B4EBF 0%, #4A2BA6 40%, #3A1F8A 100%);
  box-shadow: 0 5px 16px rgba(74,43,166,0.45), 0 2px 4px rgba(0,0,0,0.12),
    inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.25);
}
/* Hard = medium-dark purple */
.srs-rate-hard {
  background: linear-gradient(180deg, #8B6AE4 0%, #6B4EBF 40%, #5840B8 100%);
  box-shadow: 0 5px 16px rgba(107,78,191,0.4), 0 2px 4px rgba(0,0,0,0.1),
    inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.2);
}
/* Good = brand purple (the default/expected answer) */
.srs-rate-good {
  background: linear-gradient(180deg, #A488F0 0%, #7B5EE8 40%, #6545C8 100%);
  box-shadow: 0 5px 16px rgba(123,94,232,0.45), 0 2px 4px rgba(0,0,0,0.1),
    inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.2);
}
/* Easy = lightest purple (breeze) */
.srs-rate-easy {
  background: linear-gradient(180deg, #C0AEF8 0%, #A488F0 40%, #8B6AE4 100%);
  box-shadow: 0 5px 16px rgba(192,174,248,0.4), 0 2px 4px rgba(0,0,0,0.08),
    inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.15);
}
.srs-rate-btn:hover { box-shadow: 0 8px 24px rgba(123,94,232,0.5), 0 0 16px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.2); }
/* Dark mode */
:root.dark .srs-rate-again { background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, #4A2BA6 6%, #2E1A6E 100%); }
:root.dark .srs-rate-hard { background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, #6B4EBF 6%, #4A2BA6 100%); }
:root.dark .srs-rate-good { background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, #7B5EE8 6%, #5B3DBF 100%); }
:root.dark .srs-rate-easy { background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, #A488F0 6%, #7B5EE8 100%); }
:root.dark .srs-rate-btn { box-shadow: 0 0 14px rgba(123,94,232,0.3), 0 5px 16px rgba(123,94,232,0.4), inset 0 2px 0 var(--candy-highlight), inset 0 -3px 0 var(--candy-lowlight); }
.srs-complete {
  text-align: center; padding: 40px 20px;
}
.srs-complete h2 { font-size: 28px; margin-bottom: 8px; }
.srs-complete .emoji { font-size: 48px; margin-bottom: 16px; }
.srs-session-stats {
  display: flex; gap: 12px; justify-content: center; margin-top: 16px; flex-wrap: wrap;
}
.srs-session-stat {
  background: var(--card-bg); border: 1.5px solid var(--card-border);
  border-radius: 12px; padding: 10px 16px; text-align: center;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: var(--card-shadow);
}
.srs-session-stat .val { font-size: 24px; font-weight: 800; }
.srs-session-stat .lbl { font-size: 11px; color: var(--gray-500); font-weight: 600; }
:root.dark .srs-tabs { background: rgba(30,28,60,0.6); border-color: rgba(160,140,240,0.15); }
:root.dark .srs-stat { background: rgba(30,28,60,0.5); border-color: rgba(160,140,240,0.12); }
:root.dark .srs-rate-btn { background: rgba(30,28,60,0.5); }
:root.dark .srs-rate-hard { color: var(--gold); }
:root.dark .srs-session-stat { background: rgba(30,28,60,0.5); border-color: rgba(160,140,240,0.12); }
@media (max-width: 400px) {
  .srs-ratings { gap: 6px; }
  .srs-rate-btn { min-width: 64px; padding: 10px 6px; font-size: 12px; }
}

/* ── QUIZ ── */
.quiz-opt {
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: 14px; padding: 14px 18px; cursor: pointer;
  transition: all 0.2s; font-size: 15px; font-weight: 600;
  display: flex; align-items: center; gap: 12px;
  font-family: 'Nunito', 'system-ui', sans-serif;
  box-shadow: var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
  word-break: keep-all;
}
.quiz-opt::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.quiz-opt:hover { border-color: rgba(123,94,232,0.4); background: linear-gradient(180deg, #f5f0ff 0%, #ede4ff 100%); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(123,94,232,0.15), 0 0 20px rgba(123,94,232,0.08), var(--card-shadow-hover) !important; }
.quiz-opt.correct { border-color: var(--teal); background: var(--teal-light); color: var(--teal-dark); }
.quiz-opt.wrong { border-color: var(--coral); background: var(--coral-light); color: var(--coral); }
.quiz-opt.dis { pointer-events: none; opacity: 0.45; }
.quiz-letter {
  width: 30px; height: 30px; border-radius: 8px; background: rgba(123,94,232,0.08);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 12px; color: var(--purple-accent-text); font-family: 'DM Sans', sans-serif;
  flex-shrink: 0; letter-spacing: 0.5px;
}
.quiz-opt.correct .quiz-letter { background: var(--teal); color: white; }
.quiz-opt.wrong .quiz-letter { background: var(--coral); color: white; }
/* Dark glass quiz options */
:root.dark .quiz-opt {
  background: linear-gradient(180deg, rgba(45,40,75,0.6) 0%, rgba(32,30,60,0.55) 100%);
  backdrop-filter: blur(16px) saturate(1.2); -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 2px solid rgba(160,140,240,0.15);
  color: var(--gray-800);
  box-shadow:
    0 4px 16px rgba(0,0,0,0.25),
    0 0 8px rgba(140,120,220,0.06),
    inset 0 1px 0 rgba(255,255,255,0.14),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
}
:root.dark .quiz-opt:hover {
  border-color: rgba(168,136,255,0.5);
  background: linear-gradient(180deg, rgba(60,48,100,0.7) 0%, rgba(45,38,80,0.65) 100%);
  box-shadow:
    0 0 28px rgba(168,136,255,0.3),
    0 0 48px rgba(123,94,232,0.1),
    0 8px 24px rgba(123,94,232,0.15),
    inset 0 1px 0 rgba(255,255,255,0.2),
    inset 0 -2px 0 rgba(0,0,0,0.12) !important;
  transform: translateY(-2px);
  filter: brightness(1.12);
}
:root.dark .quiz-opt.correct {
  border-color: var(--teal);
  background: rgba(80,224,192,0.15);
  color: var(--teal-dark);
  box-shadow: 0 0 20px rgba(80,224,192,0.25), 0 0 40px rgba(80,224,192,0.08), inset 0 1px 0 rgba(255,255,255,0.12);
}
:root.dark .quiz-opt.wrong {
  border-color: var(--coral);
  background: rgba(245,136,136,0.15);
  color: var(--coral);
  box-shadow: 0 0 20px rgba(245,136,136,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
}
:root.dark .quiz-letter { background: rgba(168,136,255,0.25); color: var(--gray-700); }

/* ── CHAT ── */
.chat-wrap {
  display: flex; flex-direction: column; height: calc(100dvh - 200px);
  max-height: 580px; background: var(--gray-50); border-radius: var(--radius-lg);
  border: 2px solid var(--gray-100); overflow: hidden;
}
@media (max-width: 700px) {
  .chat-wrap { height: calc(100dvh - 260px); max-height: none; border-radius: 20px; }
}
.chat-msgs { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.chat-bub {
  max-width: 78%; padding: 12px 16px; border-radius: 18px;
  font-size: 15px; line-height: 1.55; animation: fadeUp 0.3s ease;
}
.chat-bub.ai {
  background: var(--white); border: 1.5px solid var(--gray-100);
  align-self: flex-start; border-bottom-left-radius: 6px;
  box-shadow: var(--shadow-sm);
}
.chat-bub.user {
  background: var(--blue); color: white;
  align-self: flex-end; border-bottom-right-radius: 6px;
  box-shadow: var(--shadow-blue);
}
.chat-hint {
  background: var(--gold-light); border: 1.5px solid rgba(245,166,35,0.2);
  border-radius: var(--radius-sm); padding: 8px 12px; font-size: 13px;
  color: var(--gold-dark); margin-top: 4px; max-width: 78%;
}
.chat-nw {
  background: var(--blue-light); border: 1.5px solid rgba(74,143,231,0.2);
  border-radius: 8px; padding: 3px 10px; font-size: 11px; color: var(--blue-dark);
  font-weight: 700;
}
.chat-bar {
  display: flex; gap: 10px; padding: 14px 16px;
  border-top: 2px solid var(--gray-100); background: var(--white);
}
.chat-input {
  flex: 1; background: var(--white); border: 2.5px solid var(--gray-200);
  border-radius: 16px; padding: 14px 18px; color: var(--gray-700);
  font-size: 16px; font-family: 'Source Sans 3', sans-serif; outline: none;
  font-weight: 600; letter-spacing: 0.2px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.2s;
}
.chat-input:focus { border-color: var(--purple-accent); background: var(--white); box-shadow: inset 0 2px 6px rgba(0,0,0,0.03), 0 0 0 4px rgba(123,94,232,0.12), 0 2px 12px rgba(123,94,232,0.08); }
.chat-input::placeholder { color: var(--gray-300); font-weight: 500; }
.chat-input:disabled { opacity: 0.6; background: var(--gray-50); }
:root.dark .chat-input { background: rgba(40,38,65,0.8); border-color: rgba(140,120,220,0.2); color: #E8E4F0; box-shadow: inset 0 2px 8px rgba(0,0,0,0.2), 0 0 16px rgba(123,94,232,0.06); }
:root.dark .chat-input:focus { border-color: rgba(160,140,240,0.5); box-shadow: inset 0 2px 8px rgba(0,0,0,0.15), 0 0 0 4px rgba(123,94,232,0.15), 0 0 24px rgba(123,94,232,0.1); }
:root.dark .chat-input::placeholder { color: rgba(180,170,210,0.4); }
.chat-starter {
  background: var(--white); border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm); padding: 10px 14px; cursor: pointer;
  transition: all 0.15s; font-size: 14px; color: var(--gray-500); text-align: left;
}
.chat-starter:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-pale); }

/* ── GRAMMAR ── */
.gram-card {
  background: var(--white); border: 2px solid var(--gray-100);
  border-radius: var(--radius); padding: 20px; border-left: 4px solid var(--blue);
  transition: all 0.2s;
}
.gram-card:hover { box-shadow: var(--shadow); }

/* ── ACHIEVEMENT ── */
.ach-card {
  display: flex; align-items: center; gap: 14px; padding: 14px 18px;
  background: var(--card-bg); border: 2px solid var(--card-border);
  border-radius: var(--radius); transition: all 0.2s;
  box-shadow: var(--card-shadow);
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.ach-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.ach-card.done { border-color: var(--gold); background: linear-gradient(180deg, #fffcf0, #fff8e0); }
.ach-card.lock { opacity: 0.4; }
.ach-icon { font-size: 28px; }

/* ── TOAST ── */
.toast {
  position: fixed; top: 80px; right: 24px; z-index: 999;
  background: var(--white); border: 2px solid var(--teal);
  border-radius: var(--radius); padding: 14px 22px;
  box-shadow: var(--shadow-lg); animation: slideIn 0.35s cubic-bezier(0.16,1,0.3,1);
  display: flex; align-items: center; gap: 10px;
}

/* ── ONBOARDING ── */
.ob-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: transparent;
  display: flex; align-items: center; justify-content: center;
  overflow-y: auto;
}
.ob-card {
  max-width: 540px; width: 92%; padding: 48px 36px; text-align: center;
  animation: fadeUp 0.4s ease; background: var(--card-bg); opacity: 0.98;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  border-radius: 28px; box-shadow: var(--card-shadow);
  border: 2px solid var(--card-border);
  position: relative;
}
.ob-card input {
  font-family: 'DM Sans', sans-serif;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.ob-card input:focus {
  border-color: var(--purple-accent) !important;
  box-shadow: 0 0 0 3px rgba(123,94,232,0.12);
  outline: none;
}
:root.dark .ob-overlay {
  background: transparent;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(100%); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideDown { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(100%); } }
@keyframes fadeOverlayIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes dfPulse { 0%,100% { box-shadow: 0 0 0 3px rgba(123,94,232,0.2); } 50% { box-shadow: 0 0 0 6px rgba(123,94,232,0.35); } }
@keyframes pop { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-70px) scale(1.15);opacity:0} }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
@keyframes bubblePop { from{opacity:0;transform:scale(0.82) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes gramSlideLeft { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)} }
@keyframes gramSlideRight { from{opacity:0;transform:translateX(24px)} to{opacity:1;transform:translateX(0)} }
@keyframes confettiFall { 0%{transform:translateY(-10px) rotate(0deg) scale(1);opacity:1} 70%{opacity:1} 100%{transform:translateY(calc(100vh + 20px)) rotate(var(--confetti-spin,720deg)) scale(0.5);opacity:0} }
@keyframes confettiBurst { 0%{transform:translate(0,0) scale(0);opacity:0} 15%{transform:translate(var(--cx),var(--cy)) scale(1.2);opacity:1} 100%{transform:translate(var(--cx),calc(var(--cy) + 300px)) scale(0.3);opacity:0} }
.confetti-container{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden}
.confetti-piece{position:absolute;width:10px;height:10px;border-radius:2px;animation:confettiFall var(--confetti-dur,2.5s) cubic-bezier(.2,.8,.3,1) forwards;animation-delay:var(--confetti-delay,0s);left:var(--confetti-x,50%);top:-10px;}
.anim { animation: fadeUp 0.35s ease both; }
.d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}.d4{animation-delay:.2s}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 3px; }

/* ── RESPONSIVE ── */
@media (max-width: 700px) {
  .main { padding: 20px 16px calc(76px + env(safe-area-inset-bottom, 0px)) 16px; }
  .topnav { padding: env(safe-area-inset-top, 0px) 12px 0; }
  .topnav-item span:not(.icon) { display: none; }
  .topnav-item { padding: 8px 10px; min-height: 44px; min-width: 44px; justify-content: center; }
  .topnav-stat { padding: 4px 8px; font-size: 11px; }
}

/* ── BOTTOM NAV (mobile only) ── */
.bottomnav {
  display: none;
}
@media (max-width: 700px) {
  .bottomnav {
    display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 100;
    height: calc(68px + env(safe-area-inset-bottom, 0px));
    padding: 4px 0 env(safe-area-inset-bottom, 0px);
    background: rgba(255,255,255,0.95);
    border-top: 1.5px solid var(--card-border);
    backdrop-filter: blur(24px) saturate(1.4); -webkit-backdrop-filter: blur(24px) saturate(1.4);
    box-shadow: 0 -2px 12px rgba(0,0,0,0.06);
    align-items: stretch; justify-content: space-around;
  }
  :root.dark .bottomnav {
    background: rgba(22,22,43,0.92);
    border-top-color: rgba(255,255,255,0.08);
    box-shadow: 0 -2px 16px rgba(0,0,0,0.3);
  }
  .bottomnav-item {
    flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 3px; cursor: pointer; font-size: 11px; font-weight: 700;
    color: var(--gray-400); transition: color 0.15s;
    font-family: 'Nunito', 'DM Sans', sans-serif; min-height: 44px;
    -webkit-tap-highlight-color: transparent; position: relative;
    overflow: visible; padding: 4px 2px;
  }
  .bottomnav-item:active { transform: scale(0.92); }
  .bottomnav-item.active { color: #7B5EE8; }
  .bottomnav-item.active::after {
    content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 32px; height: 3px; border-radius: 0 0 3px 3px; background: #7B5EE8;
  }
  :root.dark .bottomnav-item { color: var(--gray-500); }
  :root.dark .bottomnav-item.active { color: #A890FF; }
  :root.dark .bottomnav-item.active::after { background: #A890FF; }
  .bottomnav-icon { font-size: 22px; line-height: 1; }
}

/* ── CURRICULUM SEARCH FLOAT (D113 v2 — compound bubble style) ── */
.sf-panel{position:fixed;right:14px;top:190px;z-index:9998;width:min(360px,calc(100vw - 28px));max-height:calc(100vh - 220px);display:flex;flex-direction:column;border-radius:20px;background:linear-gradient(180deg,rgba(196,182,255,0.96)0%,rgba(210,200,255,0.93)45%,rgba(220,213,255,0.9)100%);border:1.5px solid rgba(165,148,238,0.7);box-shadow:0 8px 32px rgba(123,94,232,0.18),0 0 16px rgba(165,148,238,0.25),inset 0 2px 0 rgba(255,255,255,0.82),inset 0 -3px 0 rgba(110,85,200,0.1);overflow:hidden;}
.sf-panel::before{content:'';position:absolute;top:0;left:5%;right:5%;height:42%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.68)0%,rgba(255,255,255,0.14)60%,transparent 100%);pointer-events:none;z-index:0;}
:root.dark .sf-panel{background:linear-gradient(180deg,rgba(123,94,232,0.55)0%,rgba(100,78,205,0.42)45%,rgba(80,60,180,0.32)100%);border-color:rgba(160,140,255,0.5);box-shadow:0 8px 32px rgba(0,0,0,0.4),0 0 18px rgba(123,94,232,0.3),inset 0 2px 0 rgba(255,255,255,0.13),inset 0 -3px 0 rgba(0,0,0,0.18);}
:root.dark .sf-panel::before{background:linear-gradient(180deg,rgba(255,255,255,0.1)0%,rgba(255,255,255,0.01)60%,transparent 100%);}
.sf-hdr{padding:11px 13px;display:flex;align-items:center;gap:9px;background:rgba(255,255,255,0.22);border-bottom:1px solid rgba(165,148,238,0.35);border-radius:20px 20px 0 0;flex-shrink:0;position:relative;z-index:1;}
:root.dark .sf-hdr{background:rgba(255,255,255,0.07);border-bottom-color:rgba(160,140,255,0.28);}
.sf-inp{flex:1;border:none;outline:none;background:transparent;font-size:14px;font-family:'Nunito','DM Sans',system-ui,sans-serif;font-weight:600;color:var(--gray-800);caret-color:#7B5EE8;min-width:0;}
.sf-inp::placeholder{color:rgba(150,140,180,0.75);font-weight:500;}
.sf-clr{cursor:pointer;font-size:11px;color:rgba(110,95,165,0.65);flex-shrink:0;padding:2px 7px;border-radius:6px;background:rgba(180,165,240,0.22);font-weight:700;transition:background .12s;}
.sf-clr:hover{background:rgba(180,165,240,0.4);}:root.dark .sf-clr{background:rgba(160,140,255,0.16);}:root.dark .sf-clr:hover{background:rgba(160,140,255,0.3);}
.sf-cnt{padding:4px 12px;font-size:9.5px;font-weight:800;color:rgba(110,95,175,0.7);letter-spacing:.5px;text-transform:uppercase;flex-shrink:0;position:relative;z-index:1;}
:root.dark .sf-cnt{color:rgba(180,160,255,0.6);}
.sf-list{overflow-y:auto;flex:1;position:relative;z-index:1;padding:4px 8px 8px;}
.sf-row{margin:4px 0;border-radius:13px;background:var(--card-bg);border:1.5px solid rgba(220,215,238,0.85);border-left:3px solid #7B5EE8;box-shadow:0 2px 8px rgba(123,94,232,0.06),inset 0 1px 0 rgba(255,255,255,0.95);cursor:pointer;transition:all .13s;padding:9px 11px;}
.sf-row:hover{transform:translateY(-1px);box-shadow:0 5px 14px rgba(123,94,232,0.13),inset 0 1px 0 rgba(255,255,255,0.95);border-color:rgba(180,165,240,0.75);}
:root.dark .sf-row{background:rgba(28,24,62,0.94);border-color:rgba(100,88,158,0.42);border-left-color:#7B5EE8;box-shadow:0 2px 8px rgba(0,0,0,0.22),inset 0 1px 0 rgba(255,255,255,0.07);}
:root.dark .sf-row:hover{box-shadow:0 5px 14px rgba(123,94,232,0.24),inset 0 1px 0 rgba(255,255,255,0.07);border-color:rgba(160,140,255,0.5);}
.sf-ttl{font-size:12px;font-weight:700;color:var(--gray-700);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.sf-sub{font-size:10.5px;color:var(--gray-500);margin-top:2px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.sf-snip{font-size:10.5px;color:#7B5EE8;margin-top:3px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
:root.dark .sf-snip{color:#B09DF8;}
.sf-empty{padding:16px 12px;text-align:center;color:rgba(110,95,175,0.55);font-size:12px;font-weight:600;line-height:1.6;position:relative;z-index:1;}
/* CEFR solid band blocks */
.sf-band{display:inline-flex;align-items:center;justify-content:center;min-width:24px;padding:0 5px;height:17px;border-radius:4px;font-size:9.5px;font-weight:900;color:#fff;letter-spacing:.3px;}
.sf-band-a1{background:#3CC98A;}.sf-band-a2{background:#2ECDA7;}.sf-band-b1{background:#4A8FE7;}.sf-band-b2{background:#7B5EE8;}.sf-band-c1{background:#E8960A;}.sf-band-xx{background:#999;}
/* shared mini-tags (step preview modal) */
.stag{display:inline-block;padding:2px 7px;border-radius:14px;font-size:10px;font-weight:800;letter-spacing:.3px;}
.stag-cefr{background:linear-gradient(135deg,rgba(123,94,232,0.14),rgba(123,94,232,0.07));color:#7B5EE8;border:1px solid rgba(123,94,232,0.2);}
:root.dark .stag-cefr{background:rgba(123,94,232,0.24);color:#C0AEFF;border-color:rgba(123,94,232,0.34);}
.stag-type{background:linear-gradient(135deg,rgba(46,205,167,0.14),rgba(46,205,167,0.07));color:#0D7D5C;border:1px solid rgba(46,205,167,0.2);}
:root.dark .stag-type{background:rgba(46,205,167,0.18);color:#70DFC0;border-color:rgba(46,205,167,0.28);}
.stag-prev{background:rgba(245,166,35,0.12);color:#8a5800;border:1px solid rgba(245,166,35,0.25);font-size:9px;}
:root.dark .stag-prev{background:rgba(245,166,35,0.18);color:#F5C040;border-color:rgba(245,166,35,0.3);}
/* ── STEP PREVIEW MODAL ── */
.sp-ov{position:fixed;inset:0;background:rgba(0,0,0,0.52);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);}
.sp-wrap{width:min(460px,94vw);max-height:calc(100vh - 60px);display:flex;flex-direction:column;border-radius:24px;overflow:hidden;background:var(--card-bg);border:1.5px solid var(--card-border);box-shadow:0 24px 72px rgba(0,0,0,0.18),0 8px 24px rgba(123,94,232,0.14),inset 0 2px 0 rgba(255,255,255,0.92),inset 0 -2px 0 rgba(0,0,0,0.04);}
:root.dark .sp-wrap{box-shadow:0 24px 72px rgba(0,0,0,0.55),0 8px 24px rgba(123,94,232,0.28),inset 0 2px 0 rgba(255,255,255,0.12),inset 0 -2px 0 rgba(0,0,0,0.28);border-color:rgba(255,255,255,0.1);}
.sp-bar{padding:10px 14px;display:flex;align-items:center;gap:6px;background:linear-gradient(180deg,#EDE8FF 0%,#E5DFFF 55%,#DDD6FF 100%);position:relative;overflow:hidden;flex-shrink:0;border-bottom:1px solid rgba(123,94,232,0.1);}
.sp-bar::before{content:'';position:absolute;top:0;left:5%;right:5%;height:48%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.72)0%,rgba(255,255,255,0.18)50%,rgba(255,255,255,0)100%);pointer-events:none;z-index:0;}
:root.dark .sp-bar{background:linear-gradient(180deg,rgba(130,100,240,0.38)0%,rgba(100,78,200,0.28)100%);border-bottom-color:rgba(160,140,255,0.2);}
.sp-body{overflow-y:auto;flex:1;}
.sp-card{padding:14px 16px;}
:root.dark .sp-card{}
.sp-word{text-align:center;padding:22px 18px 4px;font-size:28px;font-weight:800;color:#7B5EE8;font-family:'Quicksand','DM Sans',system-ui,sans-serif;line-height:1.2;}
.sp-phon{text-align:center;font-size:13px;color:var(--gray-400);font-weight:600;padding:2px 14px 4px;}
.sp-trans{text-align:center;font-size:16px;font-weight:700;color:#2ECDA7;padding:0 14px 14px;}
.sp-kind{text-align:center;padding-bottom:8px;font-size:10.5px;color:var(--gray-400);font-weight:700;text-transform:uppercase;letter-spacing:.6px;}
.sp-ex{margin:0 12px 12px;background:rgba(123,94,232,0.05);border-radius:11px;padding:10px 12px;border-left:3px solid rgba(123,94,232,0.28);}
.sp-ex-tgt{font-size:14px;font-weight:700;color:var(--gray-700);margin-bottom:3px;}
.sp-ex-src{font-size:12.5px;color:#2ECDA7;font-weight:600;}
.sp-note{margin:0 12px 14px;font-size:12px;color:var(--gray-500);line-height:1.5;padding:9px 11px;background:var(--gray-50);border-radius:9px;}
.sp-q{padding:16px 16px 10px;font-size:14.5px;font-weight:700;color:var(--gray-700);line-height:1.4;}
.sp-opt{display:flex;align-items:center;gap:8px;margin:5px 12px;padding:10px 12px;border-radius:11px;font-size:13px;font-weight:600;border:1.5px solid var(--gray-200);color:var(--gray-600);background:var(--gray-50);}
.sp-opt.correct{background:linear-gradient(135deg,rgba(46,205,167,0.12),rgba(46,205,167,0.05));border-color:rgba(46,205,167,0.35);color:#0D7D5C;}
:root.dark .sp-opt{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.1);color:var(--gray-400);}
:root.dark .sp-opt.correct{background:rgba(46,205,167,0.18);border-color:rgba(46,205,167,0.32);color:#70DFC0;}
.sp-tip-ttl{padding:16px 16px 6px;font-size:15px;font-weight:800;color:#7B5EE8;}
.sp-tip-txt{padding:0 16px 16px;font-size:13px;color:var(--gray-600);line-height:1.65;white-space:pre-wrap;}
.sp-pair-row{display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid var(--gray-100);}
.sp-pair-row:last-child{border-bottom:none;margin-bottom:8px;}
.sp-pair-tgt{font-size:14px;font-weight:700;color:#7B5EE8;flex:1;}
.sp-pair-src{font-size:13px;color:#2ECDA7;font-weight:600;flex:1;text-align:right;}
.sp-fb-sent{padding:16px 16px 8px;font-size:14.5px;font-weight:600;color:var(--gray-700);line-height:1.5;}
.sp-fb-ans{display:inline-block;background:linear-gradient(135deg,rgba(46,205,167,0.14),rgba(46,205,167,0.06));border:1.5px solid rgba(46,205,167,0.35);border-radius:7px;padding:1px 9px;color:#0D7D5C;font-weight:700;font-size:14px;margin:0 2px;}
:root.dark .sp-fb-ans{background:rgba(46,205,167,0.2);border-color:rgba(46,205,167,0.35);color:#70DFC0;}
.sp-intro-title{padding:20px 16px 6px;font-size:17px;font-weight:800;color:#7B5EE8;text-align:center;}
.sp-intro-desc{padding:0 16px 14px;font-size:13px;color:var(--gray-600);text-align:center;line-height:1.6;}
.sp-goal{display:flex;align-items:center;gap:8px;padding:5px 16px;font-size:13px;color:var(--gray-700);font-weight:600;}
.sp-xbtn{flex-shrink:0;background:rgba(123,94,232,0.12);border:1.5px solid rgba(123,94,232,0.2);border-radius:8px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#7B5EE8;font-size:11px;font-weight:700;transition:all .15s;position:relative;z-index:1;margin-left:auto;}
.sp-xbtn:hover{background:rgba(123,94,232,0.22);color:#5840B8;}
:root.dark .sp-xbtn{background:rgba(180,160,255,0.15);border-color:rgba(180,160,255,0.25);color:#C0AEFF;}:root.dark .sp-xbtn:hover{background:rgba(180,160,255,0.28);}
@media(max-width:700px){.sf-panel{right:10px;top:186px;width:calc(100vw - 20px);}.sp-wrap{max-height:calc(100vh - 40px);}}
.vl-tab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:9997;display:flex;align-items:stretch;}
.vl-tab-handle{width:18px;background:var(--card-bg);border-radius:8px 0 0 8px;border:1px solid rgba(123,94,232,0.13);border-right:none;box-shadow:-3px 0 12px rgba(0,0,0,0.08);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:10px 0;transition:background .15s;}
.vl-tab-handle:hover{background:rgba(235,228,255,0.95);}
:root.dark .vl-tab-handle{background:rgba(30,24,60,0.92);border-color:rgba(120,100,220,0.25);}:root.dark .vl-tab-handle:hover{background:rgba(50,40,90,0.9);}
.vl-tab-dot{width:3px;height:3px;border-radius:50%;background:rgba(123,94,232,0.4);}
.vl-panel{display:flex;flex-direction:column;gap:8px;padding:10px 8px;background:var(--card-bg);border-radius:12px 0 0 12px;border:1px solid rgba(123,94,232,0.1);border-right:none;box-shadow:-4px 0 20px rgba(0,0,0,0.08);}
:root.dark .vl-panel{background:rgba(25,20,56,0.95);border-color:rgba(120,100,220,0.2);}
.vl-ibtn{width:34px;height:34px;border-radius:10px;border:1.5px solid rgba(123,94,232,0.15);background:var(--card-bg);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;box-shadow:0 2px 6px rgba(0,0,0,0.05);}
.vl-ibtn:hover{background:rgba(235,228,255,0.9);border-color:rgba(123,94,232,0.3);box-shadow:0 3px 10px rgba(123,94,232,0.1);}
.vl-ibtn.on{background:rgba(123,94,232,0.1);border-color:rgba(123,94,232,0.4);box-shadow:0 3px 12px rgba(123,94,232,0.18);}
:root.dark .vl-ibtn{background:rgba(30,24,60,0.8);border-color:rgba(120,100,220,0.2);}:root.dark .vl-ibtn:hover{background:rgba(50,40,90,0.85);}:root.dark .vl-ibtn.on{background:rgba(123,94,232,0.28);border-color:rgba(160,140,255,0.5);}
.vr-wrap{position:fixed;right:70px;bottom:24px;width:316px;height:480px;background:var(--card-bg);border-radius:20px;box-shadow:0 16px 52px rgba(0,0,0,0.16),0 0 0 1.5px rgba(123,94,232,0.13);z-index:9998;display:flex;flex-direction:column;overflow:hidden;transition:all 0.42s cubic-bezier(0.34,1.56,0.64,1);will-change:transform,width,height,border-radius;}
:root.dark .vr-wrap{background:rgba(18,14,48,0.98);box-shadow:0 16px 52px rgba(0,0,0,0.5),0 0 0 1.5px rgba(123,94,232,0.35);}
.vr-wrap.vr-fs{z-index:9999;box-shadow:none;}
.vr-wrap.vr-fs .vr-msgs{padding:66px 16px 20px;}
.vr-wrap.vr-fs .vr-inp-bar{padding:10px 16px 20px;}
.vr-wrap.vr-fs .vr-qr{padding:0 16px;}
.vr-hdr{user-select:none;}
.vr-hdr{padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(123,94,232,0.12);position:absolute;top:0;left:0;right:0;z-index:10;overflow:hidden;backdrop-filter:blur(20px) saturate(1.6);-webkit-backdrop-filter:blur(20px) saturate(1.6);background:linear-gradient(180deg,rgba(237,232,255,0.62) 0%,rgba(229,223,255,0.54) 55%,rgba(221,214,255,0.46) 100%);transition:padding 0.45s cubic-bezier(0.4,0,0.2,1);}
.vr-hdr::before{content:'';position:absolute;top:0;left:5%;right:5%;height:48%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.12),transparent);pointer-events:none;}
:root.dark .vr-hdr{background:linear-gradient(180deg,rgba(55,40,120,0.62) 0%,rgba(42,30,100,0.54) 55%,rgba(32,22,82,0.46) 100%);}
.vr-hdr-info{flex:1;position:relative;z-index:1;}
.vr-hdr-name{font-family:Quicksand,sans-serif;font-weight:800;font-size:15px;color:#5038A0;line-height:1.2;}
:root.dark .vr-hdr-name{color:#C8BBFF;}
.vr-hdr-sub{font-size:10px;font-weight:600;color:rgba(100,80,180,0.65);letter-spacing:.3px;}
:root.dark .vr-hdr-sub{color:rgba(180,160,255,0.55);}
.vr-hdr-btns{display:flex;align-items:center;gap:5px;flex-shrink:0;margin-left:auto;}
.vr-hbtn{background:linear-gradient(180deg,rgba(200,190,255,0.5)0%,rgba(175,160,240,0.4)50%,rgba(155,140,225,0.35)100%);border:1px solid rgba(180,165,240,0.45);border-radius:8px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#5038A0;font-size:13px;font-weight:700;transition:all .15s;position:relative;z-index:1;overflow:hidden;box-shadow:0 2px 6px rgba(123,94,232,0.18),inset 0 2px 0 rgba(255,255,255,0.5),inset 0 -1px 0 rgba(123,94,232,0.1);}.vr-hbtn::after{content:'';position:absolute;top:0;left:8%;right:8%;height:45%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.45),transparent);pointer-events:none;}.vr-hbtn:hover{filter:brightness(1.08);transform:scale(1.05);}
:root.dark .vr-hbtn{background:linear-gradient(180deg,rgba(90,70,170,0.5)0%,rgba(70,55,150,0.4)100%);border-color:rgba(140,120,220,0.35);color:#C0AEFF;}
.vr-xbtn{background:linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%);border:1px solid rgba(255,255,255,0.18);border-radius:8px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;transition:all .15s;position:relative;z-index:1;overflow:hidden;box-shadow:0 3px 8px rgba(123,94,232,0.4),inset 0 2px 0 rgba(255,255,255,0.35),inset 0 -2px 0 rgba(0,0,0,0.15);}.vr-xbtn::after{content:'';position:absolute;top:0;left:8%;right:8%;height:45%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.4),transparent);pointer-events:none;}.vr-xbtn:hover{filter:brightness(1.1);}
.vr-msgs{flex:1;overflow-y:auto;overflow-x:hidden;padding:66px 12px 20px;display:flex;flex-direction:column;gap:10px;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:rgba(123,94,232,0.3) transparent;transition:padding 0.45s cubic-bezier(0.4,0,0.2,1);}.vr-msgs::-webkit-scrollbar{width:7px;}.vr-msgs::-webkit-scrollbar-track{background:rgba(123,94,232,0.04);border-radius:4px;}.vr-msgs::-webkit-scrollbar-thumb{background:rgba(123,94,232,0.28);border-radius:4px;box-shadow:inset 0 0 4px rgba(123,94,232,0.12);}.vr-msgs::-webkit-scrollbar-thumb:hover{background:rgba(123,94,232,0.48);}
.vr-ai{align-self:flex-start;flex-shrink:0;max-width:44%;background:linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%);border:1.5px solid rgba(180,165,240,0.4);border-radius:20px 20px 20px 4px;padding:11px 15px;font-size:13.5px;line-height:1.6;font-family:Nunito,sans-serif;color:#5038A0;word-break:break-word;box-shadow:0 6px 24px rgba(123,94,232,0.1),0 0 12px rgba(180,165,240,0.15),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05);position:relative;overflow:hidden;animation:vr-pop-l 0.36s cubic-bezier(0.22,1,0.36,1) both;}.vr-ai::before{content:'';position:absolute;top:0;left:5%;right:5%;height:14px;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.48)0%,transparent 100%);pointer-events:none;}
:root.dark .vr-ai{background:linear-gradient(180deg,rgba(80,60,160,0.55)0%,rgba(60,45,130,0.4)50%,rgba(45,35,110,0.25)100%);border-color:rgba(140,120,220,0.35);color:#C8BBFF;box-shadow:0 6px 24px rgba(0,0,0,0.2),0 0 12px rgba(120,100,200,0.15),inset 0 2px 0 rgba(255,255,255,0.12),inset 0 -3px 0 rgba(0,0,0,0.1);}
.vr-user{align-self:flex-end;flex-shrink:0;max-width:44%;background:linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%);border:1px solid rgba(255,255,255,0.18);border-radius:20px 20px 4px 20px;padding:11px 15px;font-size:13.5px;line-height:1.6;font-family:Nunito,sans-serif;color:#fff;word-break:break-word;box-shadow:0 4px 14px rgba(123,94,232,0.4),inset 0 2px 0 rgba(255,255,255,0.35),inset 0 -2px 0 rgba(0,0,0,0.15);position:relative;overflow:hidden;animation:vr-pop-r 0.36s cubic-bezier(0.22,1,0.36,1) both;}.vr-user::before{content:'';position:absolute;top:0;left:8%;right:8%;height:14px;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.36),transparent);pointer-events:none;}
.vr-typing{align-self:flex-start;flex-shrink:0;max-width:44%;display:flex;gap:5px;padding:11px 15px;background:linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%);border:1.5px solid rgba(180,165,240,0.4);border-radius:20px 20px 20px 4px;position:relative;overflow:hidden;animation:vr-pop-l 0.36s cubic-bezier(0.22,1,0.36,1) both;}.vr-typing::before{content:'';position:absolute;top:0;left:5%;right:5%;height:14px;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.48)0%,transparent 100%);pointer-events:none;}
.vr-dot{width:6px;height:6px;border-radius:50%;background:rgba(123,94,232,0.45);animation:vrb 1.2s infinite ease-in-out;}.vr-dot:nth-child(2){animation-delay:.2s;}.vr-dot:nth-child(3){animation-delay:.4s;}
@keyframes vrb{0%,80%,100%{transform:translateY(0);opacity:.6}40%{transform:translateY(-5px);opacity:1}}
@keyframes vr-pop-l{0%{opacity:0;transform:translateX(-14px) scale(0.95);}60%{transform:translateX(2px) scale(1.01);}100%{opacity:1;transform:translateX(0) scale(1);}}
@keyframes vr-pop-r{0%{opacity:0;transform:translateX(14px) scale(0.95);}60%{transform:translateX(-2px) scale(1.01);}100%{opacity:1;transform:translateX(0) scale(1);}}
.vr-qr{display:flex;flex-direction:column;gap:8px;margin-top:4px;align-self:stretch;padding:0 4px;flex-shrink:0;}
.vr-qr-btn{padding:11px 18px;border-radius:22px;border:1.5px solid rgba(160,140,240,0.5);background:linear-gradient(180deg,rgba(220,210,255,0.65)0%,rgba(200,185,255,0.45)50%,rgba(185,168,250,0.35)100%);color:#4830A0;font-size:13px;font-family:Nunito,sans-serif;font-weight:800;cursor:pointer;text-align:center;width:100%;transition:all .18s;transform-origin:bottom center;animation:vr-pop-l 0.32s cubic-bezier(0.34,1.56,0.64,1) both;box-shadow:0 4px 14px rgba(123,94,232,0.18),inset 0 2px 0 rgba(255,255,255,0.7),inset 0 -2px 0 rgba(123,94,232,0.08);position:relative;overflow:hidden;}.vr-qr-btn::before{content:'';position:absolute;top:0;left:8%;right:8%;height:48%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.6),transparent);pointer-events:none;}.vr-qr-btn:hover{background:linear-gradient(180deg,rgba(225,215,255,0.85)0%,rgba(205,190,255,0.65)50%,rgba(185,168,250,0.55)100%);border-color:rgba(130,100,230,0.65);box-shadow:0 6px 18px rgba(123,94,232,0.28),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -2px 0 rgba(123,94,232,0.1);transform:scale(1.02);}
:root.dark .vr-qr-btn{background:linear-gradient(180deg,rgba(90,70,170,0.55)0%,rgba(70,55,150,0.4)100%);border-color:rgba(150,130,230,0.4);color:#C8BAFF;box-shadow:0 4px 14px rgba(0,0,0,0.2),inset 0 2px 0 rgba(255,255,255,0.1);}
.vr-inp-bar{padding:10px 12px;border-top:1px solid rgba(180,165,240,0.25);display:flex;gap:8px;align-items:center;flex-shrink:0;background:linear-gradient(180deg,rgba(210,200,255,0.18)0%,rgba(225,218,255,0.1)100%);transition:padding 0.45s cubic-bezier(0.4,0,0.2,1);}
.vr-inp{flex:1;padding:9px 14px;border-radius:20px;border:1.5px solid rgba(180,165,240,0.4);font-size:16px;font-family:Nunito,sans-serif;outline:none;-webkit-appearance:none;touch-action:manipulation;background:linear-gradient(180deg,rgba(200,190,255,0.38)0%,rgba(220,210,255,0.22)50%,rgba(235,230,255,0.14)100%);color:#5038A0;font-weight:600;transition:border-color .15s,box-shadow .15s;box-shadow:inset 0 2px 0 rgba(255,255,255,0.6),inset 0 -1px 0 rgba(123,94,232,0.06);}.vr-inp::placeholder{color:rgba(100,78,180,0.45);font-weight:500;}.vr-inp:focus{border-color:rgba(140,120,230,0.65);box-shadow:0 0 0 3px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.6);}
:root.dark .vr-inp{background:linear-gradient(180deg,rgba(70,50,140,0.5)0%,rgba(55,40,120,0.35)100%);border-color:rgba(140,120,220,0.35);color:#C8BBFF;box-shadow:inset 0 2px 0 rgba(255,255,255,0.08);}.vr-inp::placeholder{color:rgba(180,160,255,0.4);}
:root.dark .vr-inp-bar{background:linear-gradient(180deg,rgba(60,45,120,0.3)0%,rgba(45,35,100,0.2)100%);border-top-color:rgba(120,100,200,0.2);}
.vr-send{width:44px;height:44px;border-radius:50%;background:linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%);border:1px solid rgba(255,255,255,0.18);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(123,94,232,0.45),inset 0 2px 0 rgba(255,255,255,0.35),inset 0 -2px 0 rgba(0,0,0,0.15);flex-shrink:0;transition:opacity .15s,filter .15s;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}.vr-send::after{content:'';position:absolute;top:0;left:8%;right:8%;height:45%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.4),transparent);pointer-events:none;}.vr-send:hover:not(:disabled){filter:brightness(1.1);}
.vr-send:disabled{opacity:.4;cursor:default;}
.vr-rz{position:absolute;width:22px;height:22px;z-index:20;opacity:0;transition:opacity 0.18s;}.vr-rz:hover{opacity:1;}
.vr-rz-se{bottom:0;right:0;cursor:se-resize;}.vr-rz-sw{bottom:0;left:0;cursor:sw-resize;}.vr-rz-ne{top:0;right:0;cursor:ne-resize;}.vr-rz-nw{top:0;left:0;cursor:nw-resize;}
.vr-rz::before{content:'';position:absolute;border-style:solid;border-color:rgba(123,94,232,0.55);transition:border-color 0.15s;}
.vr-rz-se::before{bottom:5px;right:5px;width:8px;height:8px;border-width:0 2px 2px 0;}
.vr-rz-sw::before{bottom:5px;left:5px;width:8px;height:8px;border-width:0 0 2px 2px;}
.vr-rz-ne::before{top:5px;right:5px;width:8px;height:8px;border-width:2px 2px 0 0;}
.vr-rz-nw::before{top:5px;left:5px;width:8px;height:8px;border-width:2px 0 0 2px;}
.vr-rz:hover::before{border-color:rgba(123,94,232,0.9);}
@keyframes vr-inflate{0%{transform:scale(1.62);border-radius:2px;}26%{transform:scale(1.04) scaleX(0.87);border-radius:11px;}50%{transform:scale(0.94);border-radius:20px;}73%{transform:scale(1.04);border-radius:20px;}100%{transform:scale(1.0);border-radius:20px;}}
.vr-edge{position:absolute;z-index:19;touch-action:none;-webkit-tap-highlight-color:transparent;}
.vr-edge-n{top:0;left:14px;right:14px;height:7px;cursor:n-resize;}
.vr-edge-s{bottom:0;left:14px;right:14px;height:7px;cursor:s-resize;}
.vr-edge-w{top:14px;bottom:14px;left:0;width:7px;cursor:w-resize;}
.vr-edge-e{top:14px;bottom:14px;right:0;width:7px;cursor:e-resize;}
.vr-wrap:not(.vr-fs) .vr-edge:hover,.vr-wrap:not(.vr-fs) .vr-edge:active{background:rgba(123,94,232,0.14);border-radius:4px;}
@media(max-width:700px){
  .vr-wrap{right:0 !important;bottom:calc(68px + env(safe-area-inset-bottom,0px)) !important;left:0 !important;width:100% !important;height:calc(70vh - 68px) !important;border-radius:24px 24px 0 0 !important;opacity:1 !important;transform:translateY(0) !important;background:linear-gradient(180deg,#F8F6FF 0%,#F0ECFF 50%,#EDE8FF 100%) !important;box-shadow:0 -4px 24px rgba(123,94,232,0.18),0 0 0 1.5px rgba(123,94,232,0.13) !important;}
  :root.dark .vr-wrap{background:rgba(18,14,48,0.98) !important;box-shadow:0 -4px 24px rgba(0,0,0,0.5),0 0 0 1.5px rgba(123,94,232,0.35) !important;}
  .vr-wrap.vr-fs{height:calc(100dvh - 64px) !important;border-radius:0 !important;top:calc(64px + env(safe-area-inset-top,0px)) !important;bottom:0 !important;}
  .vl-tab{display:none;}
}

/* ── BOTTOM SHEET (swipe-to-dismiss) ── */
.bs-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.45); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  animation: fadeOverlayIn 0.2s ease;
}
.bs-panel {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 10000;
  max-height: 88vh; overflow: hidden; display: flex; flex-direction: column;
  border-radius: 24px 24px 0 0;
  animation: slideUp 0.32s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  touch-action: none; will-change: transform;
}
.bs-panel.closing { animation: slideDown 0.25s ease forwards; }
.bs-handle {
  width: 40px; height: 4px; border-radius: 2px; margin: 10px auto 6px;
  background: rgba(123,94,232,0.2); flex-shrink: 0; cursor: grab;
}
:root.dark .bs-handle { background: rgba(255,255,255,0.2); }
.bs-content { overflow-y: auto; flex: 1; overscroll-behavior: contain; -webkit-overflow-scrolling: touch; }

/* ── FLOATING ACTION BUTTON (Verumius chat) ── */
@media (max-width: 700px) {
  .vr-fab {
    position: fixed; z-index: 99; width: 56px; height: 56px;
    bottom: calc(76px + env(safe-area-inset-bottom, 0px)); right: 16px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #7B5EE8 0%, #6040C0 100%);
    box-shadow: 0 4px 20px rgba(123,94,232,0.4), 0 2px 8px rgba(0,0,0,0.15);
    border: 2px solid rgba(255,255,255,0.3); cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .vr-fab:active { transform: scale(0.9); }
  .vr-fab.open { transform: none; }
  :root.dark .vr-fab {
    background: linear-gradient(135deg, #6040C0 0%, #4A2BA6 100%);
    border-color: rgba(160,140,255,0.4);
    box-shadow: 0 4px 20px rgba(123,94,232,0.5), 0 2px 8px rgba(0,0,0,0.3);
  }
}
@media (min-width: 701px) {
  .vr-fab { display: none; }
}

/* ── RTL support for Arabic UI ── */
[dir="rtl"] .main { text-align: right; }
[dir="rtl"] .quiz-letter { margin-right: 0; margin-left: 10px; }
[dir="rtl"] .xpbar-fill { border-radius: 12px; }
[dir="rtl"] .sp-body { text-align: right; }
[dir="rtl"] input, [dir="rtl"] textarea { text-align: right; }
[dir="rtl"] .sf-panel { text-align: right; }

/* ── Target-language (LTR) text inside RTL pages ── */
[dir="rtl"] .trg-text { direction: ltr; text-align: left; unicode-bidi: isolate; }
[dir="rtl"] .trg-text-center { direction: ltr; text-align: center; unicode-bidi: isolate; }
[dir="rtl"] .trg-inline { direction: ltr; unicode-bidi: isolate; display: inline; }
[dir="rtl"] .meta-text { direction: auto; text-align: start; unicode-bidi: plaintext; }
[dir="rtl"] input.trg-input, [dir="rtl"] textarea.trg-input { text-align: left; direction: ltr; }
`;
