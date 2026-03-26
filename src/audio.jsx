import React, { useState } from "react";

// ══════════════════════════════════════════════════════════════════
// FEATURE FLAGS
// ══════════════════════════════════════════════════════════════════
const AUDIO_ENABLED = false; // Gate all audio playback. Set true when TTS is ready.
const FOUNDATIONS_LOCK_ENABLED = false; // Gate unit locking behind Foundations. Set true to enforce. Manifesto P13.
const UI_SOUNDS_ENABLED = true; // Gate UI sound effects (clicks, chimes, confetti). Separate from TTS.

// ══════════════════════════════════════════════════════════════════
// UI SOUND ENGINE — Web Audio API synth (zero external files)
// ══════════════════════════════════════════════════════════════════
const UISounds=(()=>{
  let ctx=null;
  const getCtx=()=>{
    if(!ctx||ctx.state==="closed") ctx=new (window.AudioContext||window.webkitAudioContext)();
    if(ctx.state==="suspended") ctx.resume();
    return ctx;
  };
  const ok=()=>UI_SOUNDS_ENABLED&&typeof window!=="undefined"&&!!(window.AudioContext||window.webkitAudioContext);

  // ── Noise buffer (shared, for swoosh/tick sounds) ──
  let noiseBuf=null;
  const getNoise=()=>{
    const c=getCtx();
    if(noiseBuf&&noiseBuf.sampleRate===c.sampleRate) return noiseBuf;
    const len=c.sampleRate*0.2;
    noiseBuf=c.createBuffer(1,len,c.sampleRate);
    const d=noiseBuf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    return noiseBuf;
  };

  // ── Tone: sine/triangle oscillator with gain envelope ──
  const tone=(freq,dur,{type="sine",vol=0.12,attack=0.005,decay=null,detune=0}={})=>{
    if(!ok())return;
    const c=getCtx(),t=c.currentTime;
    const o=c.createOscillator();
    const g=c.createGain();
    o.type=type;o.frequency.value=freq;o.detune.value=detune;
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol,t+attack);
    g.gain.linearRampToValueAtTime(0,t+(decay||dur));
    o.connect(g);g.connect(c.destination);
    o.start(t);o.stop(t+dur+0.01);
  };

  // ── Noise burst: filtered white noise with envelope ──
  const noiseBurst=(dur,{freq=2000,Q=1.5,vol=0.08,attack=0.002}={})=>{
    if(!ok())return;
    const c=getCtx(),t=c.currentTime;
    const src=c.createBufferSource();
    src.buffer=getNoise();
    const bp=c.createBiquadFilter();
    bp.type="bandpass";bp.frequency.value=freq;bp.Q.value=Q;
    const g=c.createGain();
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(vol,t+attack);
    g.gain.linearRampToValueAtTime(0,t+dur);
    src.connect(bp);bp.connect(g);g.connect(c.destination);
    src.start(t);src.stop(t+dur+0.01);
  };

  return{
    // Subtle tick — PS4-inspired, for focus changes & hover
    tick:()=>noiseBurst(0.015,{freq:3500,Q:2.5,vol:0.06,attack:0.001}),

    // Button click — punchy noise pop
    click:()=>noiseBurst(0.025,{freq:2800,Q:2,vol:0.1,attack:0.001}),

    // Page turn / continue — warm subtle pop
    pageTurn:()=>{tone(600,0.05,{vol:0.09,decay:0.035});},

    // Correct answer — gentle high chime (two bright tones, dim but clear)
    correct:()=>{
      tone(880,0.12,{type:"sine",vol:0.07,decay:0.10});
      setTimeout(()=>tone(1100,0.18,{type:"sine",vol:0.09,decay:0.15}),80);
    },

    // Wrong answer — soft low double-bump
    wrong:()=>{
      tone(280,0.12,{type:"sine",vol:0.1,decay:0.10});
      setTimeout(()=>tone(220,0.18,{type:"sine",vol:0.08,decay:0.15}),70);
    },

    // Celebration — ascending chime cascade + final sparkle
    celebrate:()=>{
      tone(660,0.15,{type:"sine",vol:0.06,decay:0.12});
      setTimeout(()=>tone(880,0.15,{type:"sine",vol:0.07,decay:0.12}),100);
      setTimeout(()=>tone(1100,0.15,{type:"sine",vol:0.08,decay:0.12}),200);
      setTimeout(()=>tone(1320,0.2,{type:"sine",vol:0.09,decay:0.18}),300);
      setTimeout(()=>noiseBurst(0.03,{freq:4500,Q:2,vol:0.1,attack:0.001}),420);
    },
  };
})();


// ══ TTS / Voice ══
function getPreferredVoice(lang) {
  const voices = speechSynthesis.getVoices();
  
  if (lang === "nl-NL") {
    // First: Try to find a voice with nl-NL AND Dutch/Nederlands in name
    const dutchVoice = voices.find(v =>
      v.lang === "nl-NL" &&
      (v.name.toLowerCase().includes("dutch") ||
       v.name.toLowerCase().includes("nederlands") ||
       v.name.toLowerCase().includes("nl-"))
    );
    if (dutchVoice) return dutchVoice;
    
    // Second: Any nl-NL voice
    const nlVoice = voices.find(v => v.lang === "nl-NL");
    if (nlVoice) return nlVoice;
    
    // Third: nl-BE (Belgian Dutch) as fallback
    const belgianVoice = voices.find(v => v.lang === "nl-BE");
    if (belgianVoice) return belgianVoice;
    
    return null;
  }
  
  if (lang === "en-US") {
    // Find en-US voice
    return voices.find(v => v.lang === "en-US") || 
           voices.find(v => v.lang.startsWith("en")) || 
           null;
  }
  
  // Generic fallback for other languages
  return voices.find(v => v.lang === lang) || 
         voices.find(v => v.lang.startsWith(lang.split('-')[0])) || 
         null;
}

/**
 * Play text using browser Web Speech API with best available voice
 * @param {string} text - Text to speak
 * @param {string} lang - Language code (e.g., "nl-NL", "en-US")
 * @param {Function} onNoVoice - Optional callback when no native voice found
 * Usage: playAudio("Hallo!", "nl-NL", () => showToast("Install Dutch voice"))
 */
function playAudio(text, lang = "nl-NL", onNoVoice = null) {
  if (!text) return;
  
  // Check if browser supports speech synthesis
  if (!window.speechSynthesis) {
    console.warn("Text-to-speech not supported in this browser");
    return;
  }

  // Function to actually speak
  const speak = () => {
    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9; // Slightly slower for language learning
      utterance.pitch = 1.0;
      
      // Get preferred voice for this language
      const preferredVoice = getPreferredVoice(lang);
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
        console.log(`Using voice: ${preferredVoice.name} (${preferredVoice.lang})`);
      } else {
        console.warn(`No native voice found for ${lang}`);
        // Call warning callback if provided
        if (onNoVoice) {
          onNoVoice();
        }
      }
      
      // Error handling
      utterance.onerror = (event) => {
        console.warn("Speech synthesis error:", event.error);
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.warn("Failed to play audio:", error);
    }
  };

  // Ensure voices are loaded (some browsers load them asynchronously)
  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    speak();
  } else {
    // Wait for voices to load
    speechSynthesis.addEventListener('voiceschanged', speak, { once: true });
  }
}

/**
 * Speaker icon button for TTS playback
 * @param {string} text - Text to speak
 * @param {string} lang - Language code
 * @param {number} size - Icon size (default: 16)
 * @param {Function} showToast - Optional toast notification function
 */
function SpeakerButton({ text, lang = "nl-NL", size = 16, showToast = null }) {
  const [hasWarned, setHasWarned] = useState(false);
  // Gated behind AUDIO_ENABLED (Manifesto Principle 10)
  if (!AUDIO_ENABLED) return null;
  
  const handleClick = (e) => {
    e.stopPropagation();
    
    // Warning callback for missing voice
    const onNoVoice = () => {
      if (!hasWarned && showToast) {
        showToast("Install Dutch voice for better audio", "🔊");
        setHasWarned(true);
      }
    };
    
    playAudio(text, lang, onNoVoice);
  };
  
  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: size,
        padding: 4,
        lineHeight: 1,
        opacity: 0.6,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
      onMouseLeave={(e) => e.currentTarget.style.opacity = 0.6}
      title="Play audio"
    >
      🔊
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   L I N G O V E R S E  v2  —  Complete Redesign
   
   Palette (neuroscience-backed):
     Primary:  Warm Blue #4A8FE7  — focus, memory, trust
     Accent:   Amber Gold #F5A623 — dopamine, reward, motivation
     Success:  Soft Teal #2ECDA7  — positive reinforcement
     Danger:   Coral Red #F56565
     
   Light theme, clean Duolingo-inspired layout, premium feel
   Fonts: DM Sans (headings) + Source Sans 3 (body)
   ═══════════════════════════════════════════════════════════════════════ */

// ━━━━━━━━━━ DATA ━━━━━━━━━━
/* Language Integration Pipeline: see docs/LANGUAGE_INTEGRATION_PIPELINE.md */
// DISCOVERABILITY RULE: If a course exists in UNITS with lang:'xx', then 'xx'
// MUST be registered in LANGUAGES (target language picker), in any profile
// language list, and in CountryFlag/flag system. LANGUAGES is the single source
// of truth for what appears in onboarding + profile. Do not add languages to
// UNITS without also adding them to LANGUAGES.

export { getPreferredVoice, playAudio, SpeakerButton, AUDIO_ENABLED, FOUNDATIONS_LOCK_ENABLED, UI_SOUNDS_ENABLED, UISounds };
