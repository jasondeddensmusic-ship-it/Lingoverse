import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";

// ── Data module imports (extracted from this file for modularity) ──
import { VOCAB_DB, getVocab, toTeach, ICON_REG, LANGUAGES, BASE_LANGUAGES, CEFR_LEVELS, getCefrInfo, getCefrBandColor, FOUNDATION_KEYS, FOUNDATION_SCHEMA, FK_SCHEMA_MAP, FK_MODULE_TYPES, FK_PRACTICE_TYPES, FK_LEARNING_FLOWS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS, UNIT_TEMPLATES, MKG, p, SCRIPT_BLUEPRINTS, LANG_TOKENIZER } from './data/metadata.js';
import { FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ } from './data/foundations.js';
import { TEXT_KEYS, tk, UI, t, I18N, localize, OBJECTIVES, STANDARDS, LANG_FRAMEWORK, getUnitStandard, getObjectiveStandard, deriveUnitStandard, explainUnitLevel, VOCAB, LEXEMES, LEXEME_BY_WORD, getLexeme, GRAMMAR, CHAT_STARTERS, AI_RESP, MEANINGS, mkGet, LEVEL_XP, ACHS, ARTICLE_NONE, ARTICLE_SYSTEMS, LANG_FAMILIES, ARTICLE_COLORS, getArticle } from './data/vocabulary.js';
import { LANG_DICT, WORD_DB, WORD_INTRO_MAP, POS_COLORS, GENDER_COLORS, GRAMMAR_PACKS, mergeKoreanDict, lookupWord, getTaughtWords, isNewWord, getPosColor, getGenderColor, resolvePackColor, pillGradient, KOREAN_FORM_INDEX, KOREAN_MORPHEME_INDEX, KOREAN_EXAMPLE_INDEX, KOREAN_IDIOM_INDEX, KOREAN_GRAMMAR_PATTERNS, KOREAN_GRAMMAR_REFERENCE, GRAMMAR_CATEGORIES, conjugateVerb, detectIrregType, getIrregInfo, nounWithParticles } from './data/dictionary.js';
import dutchUnits from './data/units-dutch.js';
import koreanUnits from './data/units-korean.js';
import germanUnits from './data/units-german.js';
import germanV2Units from './data/units-german-v2.js';
import frenchUnits from './data/units-french.js';
import spanishUnits from './data/units-spanish.js';
import otherUnits from './data/units-other.js';
import { GERMAN_CEFR } from './data/cefr-reference/german.js';
import { KOREAN_CEFR } from './data/cefr-reference/korean.js';
import { DUTCH_CEFR } from './data/cefr-reference/dutch.js';
import { FRENCH_CEFR } from './data/cefr-reference/french.js';
import { SPANISH_CEFR } from './data/cefr-reference/spanish.js';

// In-memory storage fallback (localStorage not available in sandbox)
const _memStore = {};

/*
 * VerumLingua Governance Documentation
 * All manifesto principles, decision logs, pipeline rules, and curriculum docs
 * have been extracted to the docs/ folder:
 *   - docs/MANIFESTO.md (P1-P23 original principles)
 *   - docs/FK_DECISION_FRAMEWORK.md (Foundations decision framework)
 *   - docs/DECISION_LOG_LEGACY.md (D1-D85, legacy decisions)
 *   - docs/CONTENT_PIPELINE_CHECKLIST.md (Pipeline checklist)
 *   - docs/DUTCH_CURRICULUM_SPINE.md (Dutch A1-A2 grammar spine + P26 Core Constructs Map)
 *   - docs/DUTCH_CURRICULUM_ROADMAP.md (Dutch roadmap + DP1-DP24 rules + session decisions)
 *   - docs/DECISION_LOG.md (D86+ current decisions)
 *   - CLAUDE.md (authoritative project governance)
 */


/* ═══════════════════════════════════════════════════════════════════════
   N E B U L A   B A C K G R O U N D   (3-layer celestial atmosphere)
   Layer 1: CSS gradient base
   Layer 2: Drifting nebula cloud blobs (CSS animated)
   Layer 3: Twinkling star canvas
   ═══════════════════════════════════════════════════════════════════════ */

function NebulaBackground(){
  const canvasRef=useRef(null);
  const dataRef=useRef(null);
  const frameRef=useRef(null);

  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas)return;
    const ctx=canvas.getContext("2d");
    const dpr=window.devicePixelRatio||1;

    // === SIMPLEX NOISE (compact implementation) ===
    const F2=0.5*(Math.sqrt(3)-1),G2=(3-Math.sqrt(3))/6;
    const pp=new Uint8Array(512);const perm=new Uint8Array(512);
    const rng=()=>{let s=1;return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646;}};
    const rr=rng();for(let i=0;i<256;i++)pp[i]=i;
    for(let i=255;i>0;i--){const j=Math.floor(rr()*(i+1));[pp[i],pp[j]]=[pp[j],pp[i]];}
    for(let i=0;i<512;i++)perm[i]=pp[i&255];
    const grad2=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
    const dot2=(g,x,y)=>g[0]*x+g[1]*y;
    const noise2=(x,y)=>{
      const s=(x+y)*F2;const i=Math.floor(x+s),j=Math.floor(y+s);
      const t=(i+j)*G2;const X0=i-t,Y0=j-t;const x0=x-X0,y0=y-Y0;
      const i1=x0>y0?1:0,j1=x0>y0?0:1;
      const x1=x0-i1+G2,y1=y0-j1+G2,x2=x0-1+2*G2,y2=y0-1+2*G2;
      const ii=i&255,jj=j&255;
      let n0=0,n1=0,n2=0;
      let t0=0.5-x0*x0-y0*y0;if(t0>0){t0*=t0;const gi=perm[ii+perm[jj]]%8;n0=t0*t0*dot2(grad2[gi],x0,y0);}
      let t1=0.5-x1*x1-y1*y1;if(t1>0){t1*=t1;const gi=perm[ii+i1+perm[jj+j1]]%8;n1=t1*t1*dot2(grad2[gi],x1,y1);}
      let t2=0.5-x2*x2-y2*y2;if(t2>0){t2*=t2;const gi=perm[ii+1+perm[jj+1]]%8;n2=t2*t2*dot2(grad2[gi],x2,y2);}
      return 70*(n0+n1+n2);
    };
    // fBM with domain warping for organic nebula shapes
    const fbm=(x,y,oct,lac,pers)=>{
      let v=0,a=1,f=1,mx=0;
      for(let i=0;i<oct;i++){v+=a*noise2(x*f,y*f);mx+=a;f*=lac;a*=pers;}
      return v/mx;
    };
    // Domain warping: distort coordinates using noise to create flowing organic shapes
    const warpedFbm=(x,y,scale)=>{
      const wx=fbm(x+0.0,y+0.0,3,2.0,0.5)*4.0;
      const wy=fbm(x+5.2,y+1.3,3,2.0,0.5)*4.0;
      return fbm((x+wx)*scale,(y+wy)*scale,5,2.2,0.45);
    };

    const resize=()=>{
      canvas.width=window.innerWidth*dpr;
      canvas.height=window.innerHeight*dpr;
      canvas.style.width=window.innerWidth+"px";
      canvas.style.height=window.innerHeight+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
      dataRef.current=null;
    };
    resize();
    window.addEventListener("resize",resize);

    const init=()=>{
      const w=window.innerWidth,h=window.innerHeight;
      // Pre-render nebula cloud textures at 1/3 resolution
      const NW=Math.floor(w/3),NH=Math.floor(h/3);

      // === RIVER PATH MASK (3D perspective S-curve) ===
      // Path: top-left → curves right → curves left → bottom-center
      // Wider and brighter near bottom (close), narrow and faint at top (far)
      const riverMask=new Float32Array(NW*NH);
      const pixScale=0.007;
      // Golden-ratio S-curve path through control points
      // Phi-inspired segment lengths: 38.2% / 23.6% / 38.2%
      const pathX=(t)=>{
        // bottom-left(0.10) → right(0.85) → left(0.15) → top-right corner(0.95)
        const h=(a,b,s)=>a+(b-a)*s*s*(3-2*s); // smoothstep
        if(t<0.382){return h(0.10,0.85,t/0.382);}
        else if(t<0.618){return h(0.85,0.15,(t-0.382)/0.236);}
        else{return h(0.15,0.95,(t-0.618)/0.382);}
      };
      // Build THREE masks: core (electric highlights), main (river), outer (blown-out halo)
      const coreMask=new Float32Array(NW*NH);
      const outerMask=new Float32Array(NW*NH);
      for(let py=0;py<NH;py++){
        for(let px=0;px<NW;px++){
          const nx=px*pixScale,ny=py*pixScale;
          const normX=px/NW, normY=py/NH;
          const depth=normY;
          const wobble=0.04*fbm(nx*0.8,ny*1.2,3,2.0,0.5);
          const riverCenter=pathX(1.0-normY)+wobble;
          const dist=Math.abs(normX-riverCenter);
          // === MAIN RIVER (thick, nearly as wide at far end) ===
          const riverWidth=0.15+depth*0.35; // 15% at top → 50% at bottom (much thicker!)
          const depthBright=0.4+depth*0.6; // 40% at far → 100% at close (less aggressive fade)
          const inRiver=Math.max(0,1.0-Math.pow(dist/riverWidth,2.2));
          // Branch
          const branchCenter=pathX(1.0-Math.min(1,normY+0.15))+0.12*(normY>0.5?1:-1)+0.03*fbm(nx*0.9+5,ny*1.0+3,3,2.0,0.5);
          const dist2=Math.abs(normX-branchCenter);
          const branchWidth=0.05+depth*0.12;
          const inBranch=Math.max(0,1.0-Math.pow(dist2/branchWidth,2.0))*0.25;
          const combined=Math.min(1,(inRiver+inBranch)*depthBright);
          riverMask[py*NW+px]=combined*combined*(3-2*combined);
          // === ELECTRIC CORE (tight hot center) ===
          const coreWidth=riverWidth*0.35; // much narrower than river
          const inCore=Math.max(0,1.0-Math.pow(dist/coreWidth,3.0));
          coreMask[py*NW+px]=inCore*inCore*depthBright;
          // === OUTER HALO (blown-out soft glow extending far beyond river) ===
          const haloWidth=riverWidth*2.8; // much wider than river
          const inHalo=Math.max(0,1.0-Math.pow(dist/haloWidth,1.5));
          outerMask[py*NW+px]=inHalo*depthBright*0.35; // subtle
        }
      }

      // Cloud layers: main nebula body
      const cloudLayers=[
        {dkR:130,dkG:30,dkB:210, ltR:120,ltG:60,ltB:180,  scale:1.0, ox:0,  oy:0,   thresh:0.08,opDk:0.7, opLt:0.55,pw:1.4},
        {dkR:210,dkG:40,dkB:170, ltR:170,ltG:80,ltB:170,  scale:1.4, ox:100,oy:50,  thresh:0.12,opDk:0.5, opLt:0.4, pw:1.5},
        {dkR:50,dkG:25,dkB:170,  ltR:80,ltG:50,ltB:150,   scale:1.2, ox:200,oy:150, thresh:0.10,opDk:0.4, opLt:0.35,pw:1.3},
        {dkR:255,dkG:50,dkB:190, ltR:190,ltG:80,ltB:190,  scale:1.8, ox:300,oy:75,  thresh:0.18,opDk:0.3, opLt:0.3, pw:1.6},
        {dkR:160,dkG:70,dkB:255, ltR:130,ltG:60,ltB:190,  scale:2.2, ox:50, oy:200, thresh:0.20,opDk:0.2, opLt:0.22,pw:1.8},
      ];
      const mkTex=(NW,NH,r,g,b,layer,mask)=>{
        const oc=document.createElement("canvas");oc.width=NW;oc.height=NH;
        const octx=oc.getContext("2d");
        const img=octx.createImageData(NW,NH);
        const d=img.data;
        for(let py=0;py<NH;py++){
          for(let px=0;px<NW;px++){
            const nx=(px+layer.ox)*pixScale;
            const ny=(py+layer.oy)*pixScale;
            const v=warpedFbm(nx,ny,layer.scale);
            const raw=(v+1)/2;
            const intensity=Math.max(0,raw-layer.thresh)/(1-layer.thresh);
            const curved=Math.pow(intensity,layer.pw);
            const m=mask[py*NW+px];
            const idx=(py*NW+px)*4;
            d[idx]=r;d[idx+1]=g;d[idx+2]=b;
            d[idx+3]=Math.floor(curved*m*255);
          }
        }
        octx.putImageData(img,0,0);
        return oc;
      };
      // Main cloud canvases (river mask)
      const cloudCanvases=cloudLayers.map(layer=>({
        dk:mkTex(NW,NH,layer.dkR,layer.dkG,layer.dkB,layer,riverMask),
        lt:mkTex(NW,NH,layer.ltR,layer.ltG,layer.ltB,layer,riverMask),
        layer
      }));
      // Electric core highlights (bright white/pink in center)
      const coreLayer={scale:1.5,ox:50,oy:25,thresh:0.15,pw:2.0};
      const coreDk=mkTex(NW,NH,255,200,255,coreLayer,coreMask); // white-pink hot
      const coreLt=mkTex(NW,NH,180,120,220,coreLayer,coreMask); // vivid purple
      // Outer halo (soft blown-out glow)
      const haloLayer={scale:0.6,ox:0,oy:0,thresh:0.0,pw:0.8};
      const haloDk=mkTex(NW,NH,100,40,180,haloLayer,outerMask); // soft purple
      const haloLt=mkTex(NW,NH,140,90,190,haloLayer,outerMask); // lavender

      // Stars
      const starCount=Math.min(350,Math.floor((w*h)/3000));
      const stars=[];
      // Light mode glitter colors: gold, silver, pink, lavender, rose
      const glitterColors=[[220,180,50],[200,200,220],[220,120,180],[160,130,220],[200,100,140]];
      for(let i=0;i<starCount;i++){
        const isBright=Math.random()<0.12;
        const gc=glitterColors[Math.floor(Math.random()*glitterColors.length)];
        stars.push({
          x:Math.random()*w, y:Math.random()*h,
          size:isBright?(2+Math.random()*2):(0.8+Math.random()*1.8),
          baseOpacity:isBright?(0.7+Math.random()*0.3):(0.35+Math.random()*0.45),
          speed:0.5+Math.random()*2.0,
          speed2:0.8+Math.random()*2.5, // second frequency for sparkle
          offset:Math.random()*Math.PI*2,
          bright:isBright,
          gc, // glitter color for light mode
          dr:isBright?255:200+Math.floor(Math.random()*55),
          dg:isBright?240:200+Math.floor(Math.random()*55),
          db:isBright?255:220+Math.floor(Math.random()*35),
        });
      }
      return {cloudCanvases,coreDk,coreLt,haloDk,haloLt,stars,NW,NH};
    };

    let lastTime=0;
    const animate=(time)=>{
      if(!dataRef.current)dataRef.current=init();
      if(time-lastTime<50){frameRef.current=requestAnimationFrame(animate);return;}
      lastTime=time;

      const w=window.innerWidth,h=window.innerHeight;
      const dk=document.documentElement.classList.contains("dark");
      const t=time*0.001;
      ctx.clearRect(0,0,w,h);

      const {cloudCanvases,coreDk,coreLt,haloDk,haloLt,stars}=dataRef.current;
      const comp=dk?"lighter":"source-over";

      // === 1. OUTER HALO (blown-out soft glow around the perimeter) ===
      ctx.save();
      ctx.globalAlpha=dk?0.5:0.4;
      ctx.globalCompositeOperation=comp;
      const hdx=Math.sin(t*0.03)*w*0.02;
      const hdy=Math.cos(t*0.025)*h*0.015;
      ctx.drawImage(dk?haloDk:haloLt, hdx, hdy, w, h);
      ctx.restore();

      // === 2. MAIN NEBULA CLOUD LAYERS ===
      cloudCanvases.forEach((cc,i)=>{
        const op=dk?cc.layer.opDk:cc.layer.opLt;
        const tex=dk?cc.dk:cc.lt;
        const dx=Math.sin(t*0.06+i*1.2)*w*0.04;
        const dy=Math.cos(t*0.04+i*1.8)*h*0.03;
        ctx.save();
        ctx.globalAlpha=op;
        ctx.globalCompositeOperation=comp;
        ctx.drawImage(tex, dx, dy, w, h);
        ctx.restore();
      });

      // === 3. ELECTRIC CORE HIGHLIGHTS (bright hot center of the river) ===
      ctx.save();
      ctx.globalAlpha=dk?0.6:0.45;
      ctx.globalCompositeOperation=dk?"lighter":"source-over";
      const cdx=Math.sin(t*0.05+0.7)*w*0.02;
      const cdy=Math.cos(t*0.04+1.2)*h*0.015;
      ctx.drawImage(dk?coreDk:coreLt, cdx, cdy, w, h);
      ctx.restore();

      // === DRAW STARS ===
      ctx.globalCompositeOperation="source-over";
      stars.forEach(s=>{
        // Dual-frequency sparkle for glittery effect
        const tw1=Math.sin(t*s.speed+s.offset);
        const tw2=Math.sin(t*s.speed2+s.offset*2.3);
        const tw3=Math.sin(t*s.speed*2.3+s.offset*0.7); // third freq for extra sparkle
        const glitter=Math.max(tw1,tw2*0.7,tw3*0.4);
        const opacity=s.baseOpacity*(0.3+0.7*Math.max(0,glitter));
        if(opacity<0.03)return;
        if(dk){
          // Dark mode: glowing stars with halo
          ctx.fillStyle=`rgba(${s.dr},${s.dg},${s.db},${opacity.toFixed(3)})`;
          if(s.bright&&opacity>0.5){
            ctx.globalAlpha=opacity*0.2;
            ctx.fillRect(s.x-s.size*1.5,s.y-s.size*1.5,s.size*3,s.size*3);
            ctx.globalAlpha=1;
          }
          ctx.fillRect(s.x-s.size*0.5,s.y-s.size*0.5,s.size,s.size);
        }else{
          // Light mode: metallic glitter sparkle cross flashes
          const flash=Math.max(0,glitter); // 0 to 1 flash intensity
          if(flash<0.2)return; // only show when sparkling
          const gc=s.gc;
          const sz=s.size*(0.6+flash*0.8); // grows during flash
          const a=(flash*opacity).toFixed(3);
          // Cross/sparkle shape: horizontal + vertical thin bars
          ctx.fillStyle=`rgba(${gc[0]},${gc[1]},${gc[2]},${a})`;
          ctx.fillRect(s.x-sz*1.2,s.y-sz*0.2,sz*2.4,sz*0.4); // horizontal bar
          ctx.fillRect(s.x-sz*0.2,s.y-sz*1.2,sz*0.4,sz*2.4); // vertical bar
          // Bright center dot
          ctx.fillStyle=`rgba(255,255,255,${(flash*0.9).toFixed(3)})`;
          ctx.fillRect(s.x-sz*0.3,s.y-sz*0.3,sz*0.6,sz*0.6);
        }
      });
      frameRef.current=requestAnimationFrame(animate);
    };
    frameRef.current=requestAnimationFrame(animate);

    return()=>{
      window.removeEventListener("resize",resize);
      if(frameRef.current)cancelAnimationFrame(frameRef.current);
    };
  },[]);

  return(
    <div className="nebula-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="nebula-stars"/>
    </div>
  );
}

/* ── VL Constellation Logo (animated, rendered as CSS) ── */
function VLLogo({size=28,glow=false}){
  // VL constellation: star points connected by lines
  // V shape: top-left -> bottom-center -> top-right
  // L shape: top -> bottom -> right
  const s=size;
  const pts=[
    // V: 3 points
    {x:0,y:0},{x:s*0.22,y:s*0.55},{x:s*0.44,y:0},
    // L: 3 points
    {x:s*0.52,y:0},{x:s*0.52,y:s*0.55},{x:s*0.85,y:s*0.55}
  ];
  const lines=[[0,1],[1,2],[3,4],[4,5]]; // V lines + L lines
  return(
    <svg width={s} height={s*0.6} viewBox={`-2 -2 ${s+4} ${s*0.6+4}`} style={{display:"inline-block",verticalAlign:"middle"}}>
      {glow&&<defs>
        <filter id="vlglow"><feGaussianBlur stdDeviation="2" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>}
      <g filter={glow?"url(#vlglow)":"none"} opacity="0.95">
        {lines.map(([a,b],i)=>(
          <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y}
            stroke="rgba(184,168,250,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
        ))}
        {pts.map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r={1.8} fill="rgba(200,184,255,0.9)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   T E X T - T O - S P E E C H   U T I L I T Y
   ═══════════════════════════════════════════════════════════════════════ */

/**
 * Get the preferred voice for a given language
 * @param {string} lang - Language code (e.g., "nl-NL", "en-US")
 * @returns {SpeechSynthesisVoice|null} Best available voice or null
 */
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
// ══════════════════════════════════════════════════════════════════
function AppIcon({name,size=24,style={}}){const src=ICON_REG[name];if(!src)return null;return <img src={src} alt={name} width={size} height={size} style={{display:"inline-block",verticalAlign:"middle",objectFit:"contain",filter:"drop-shadow(0 0 2px rgba(247,183,51,0.3)) drop-shadow(0 1px 2px rgba(200,160,40,0.15)) drop-shadow(0 0 0.5px rgba(60,40,20,0.25))",...style}}/>;};




// Foundations Gate: check if user has completed/bypassed Foundations (Manifesto P13)
// This checks COMPLETION status only. FOUNDATIONS_LOCK_ENABLED controls click-blocking separately.
const isFoundationsUnlocked=(user,lang)=>{
  const p=user.progress||{};
  if(p.foundationsUnlocked?.[lang]) return true; // Manual bypass ("Unlock anyway")
  if(p.gateQuiz?.[lang]?.passed) return true; // Gate quiz passed
  // Check if all playthrough lessons complete
  const pt=FK_PLAYTHROUGH[lang];
  if(pt&&pt.stages&&pt.stages.length>0){
    const allDone=pt.stages.every(stage=>
      stage.lessons.every(lesson=>p.fkPlay?.[lang]?.[lesson.id])
    );
    if(allDone) return true;
  }
  return false;
};
const getUserCefr=(user,lang)=>{
  const units=UNITS.filter(u=>u.lang===lang).filter(u=>{
    const key=`${lang}_u${u.n}`;
    return user.cu&&user.cu[key];
  });
  if(!units.length)return{level:"A1.1",band:"A1",label:"Beginner",progress:0};
  const highest=units.reduce((best,u)=>{
    const idx=CEFR_LEVELS.findIndex(l=>l.id===u.level);
    return idx>best.idx?{idx,level:u.level}:best;
  },{idx:-1,level:"A1.1"});
  const info=getCefrInfo(highest.level);
  const totalInBand=CEFR_LEVELS.filter(l=>l.band===info.band).length;
  const posInBand=CEFR_LEVELS.filter(l=>l.band===info.band).findIndex(l=>l.id===info.id)+1;
  return{...info,progress:Math.round((posInBand/totalInBand)*100)};
};





// ── FK Progress Tracking (parallel to lesson progress) ──
// Existing: user.progress.foundation[`${lang}:foundation:${secId}:${itemIdx}`] = true
// New: fkModuleProgress adds richer tracking per module type.
//
// Schema: user.progress.fkModules[`${lang}:${secId}:${itemIdx}`] = {
//   read: true,          // info was viewed / marked "I got it"
//   practiced: true,     // practice block was completed (if applicable)
//   score: 0.8,          // optional: accuracy on practice (0-1)
//   timestamp: 16...     // when last completed
// }
//
// Helper: getFkModuleProgress(lang, secId, itemIdx) returns the record or null.
// Helper: setFkModuleProgress(lang, secId, itemIdx, update) merges into record.
// These are additive — the existing isFkDone/markFk system continues to work unchanged.

function getFkModuleProgress(user, lang, secId, itemIdx) {
  const key = `${lang}:${secId}:${itemIdx}`;
  return user?.progress?.fkModules?.[key] || null;
}

function setFkModuleProgress(setUser, lang, secId, itemIdx, update) {
  if (!setUser) return;
  const key = `${lang}:${secId}:${itemIdx}`;
  setUser(u => {
    const fkMods = {...((u.progress || {}).fkModules || {})};
    fkMods[key] = {...(fkMods[key] || {}), ...update, timestamp: Date.now()};
    return {...u, progress: {...(u.progress || {}), fkModules: fkMods}};
  });
}









// Scans UNITS and FOUNDATIONS_BY_LANG for lang codes not in LANGUAGES.
// Also validates FK sections against FOUNDATION_SCHEMA.
// Fires once on load. Console warnings + stores warnings for optional on-screen display.
const __devWarnings=[];
try{
if(typeof console!=="undefined"){
  const _langCodes=new Set(LANGUAGES.map(l=>l.code));
  // Check FOUNDATIONS_BY_LANG lang codes
  Object.keys(FOUNDATIONS_BY_LANG).forEach(lc=>{
    if(!_langCodes.has(lc)){
      const msg=`FOUNDATIONS_BY_LANG has lang "${lc}" not in LANGUAGES`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Check FK schema completeness for languages with foundations
  Object.keys(FOUNDATIONS_BY_LANG).forEach(lc=>{
    const schema=FOUNDATION_SCHEMA[FK_SCHEMA_MAP[lc]];
    if(!schema)return;
    const sectionIds=(FOUNDATIONS_BY_LANG[lc].sections||[]).map(s=>s.id);
    const hasGrid=(FOUNDATIONS_BY_LANG[lc].sections||[]).some(s=>
      (s.items||[]).some(it=>it.grid)
    );
    if(!hasGrid){
      const msg=`FK "${lc}" has no 2D grid — schema requires alphabet_grid`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Check FK_PLAYTHROUGH coverage — every LANGUAGES entry must have an entry
  _langCodes.forEach(lc=>{
    if(!FK_PLAYTHROUGH[lc]){
      const msg=`FK_PLAYTHROUGH missing for "${lc}" — every language in LANGUAGES must have an FK_PLAYTHROUGH entry (even placeholder)`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  // Deferred UNITS check — attached after UNITS is defined
  window.__lingoDevGuardLangCodes=_langCodes;
}
}catch(e){console.warn("[LingoVerse] Dev guard skipped:",e.message);}

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

// ══════════════════════════════════════════════════════════════════
// useFocusNav — Global arrow-key navigation hook (Decision 11)
// Scans a container for focusable elements, applies .kb-focus class.
// Arrow keys cycle, Space/Enter activate, Backspace goes back.
// Mouse movement clears keyboard focus to avoid hover conflicts.
// ══════════════════════════════════════════════════════════════════
const KB_FOCUS_SEL="button:not(:disabled),.card[style*=cursor],.card[onclick],.lang-card,.topnav-item,.topnav-logo-wrap,.btn,.ach-card,a[href],select,[role=button]";

function useFocusNav(containerRef,onBack,{selector=KB_FOCUS_SEL,enabled=true}={}){
  const [kbIdx,setKbIdx]=useState(-1);
  const kbActive=useRef(false);
  const kbIdxRef=useRef(-1); // mirror for post-render apply

  // Apply .kb-focus AFTER React re-render (so React can't strip it)
  useEffect(()=>{
    document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    if(kbIdx<0)return;
    const root=containerRef?.current||document.body;
    const els=Array.from(root.querySelectorAll(selector)).filter(el=>{
      const r=el.getBoundingClientRect();
      return r.width>0&&r.height>0;
    });
    if(kbIdx>=0&&kbIdx<els.length){
      els[kbIdx].classList.add("kb-focus");
      const r=els[kbIdx].getBoundingClientRect();
      if(r.top<70||r.bottom>window.innerHeight)
        els[kbIdx].scrollIntoView?.({block:"nearest",behavior:"smooth"});
    }
  },[kbIdx]);

  useEffect(()=>{
    if(!enabled)return;
    const getEls=()=>{
      const root=containerRef?.current||document.body;
      return Array.from(root.querySelectorAll(selector)).filter(el=>{
        const r=el.getBoundingClientRect();
        return r.width>0&&r.height>0;
      });
    };

    // Group elements into visual rows by Y center (±20px = same row)
    const getRows=(els)=>{
      const items=els.map((el,i)=>{
        const r=el.getBoundingClientRect();
        return{i,cx:r.left+r.width/2,cy:r.top+r.height/2};
      });
      // Sort by Y then X
      items.sort((a,b)=>a.cy-b.cy||a.cx-b.cx);
      const rows=[];
      let curRow=[items[0]];
      for(let k=1;k<items.length;k++){
        if(Math.abs(items[k].cy-curRow[0].cy)<25){
          curRow.push(items[k]);
        }else{
          curRow.sort((a,b)=>a.cx-b.cx);
          rows.push(curRow);
          curRow=[items[k]];
        }
      }
      if(curRow.length)rows.push(curRow.sort((a,b)=>a.cx-b.cx));
      return rows;
    };

    const findInRows=(els,curIdx,dir)=>{
      if(!els.length)return null;
      const rows=getRows(els);
      // Find which row/col current element is in
      let curR=-1,curC=-1;
      for(let r=0;r<rows.length;r++){
        for(let c=0;c<rows[r].length;c++){
          if(rows[r][c].i===curIdx){curR=r;curC=c;break;}
        }
        if(curR>=0)break;
      }
      if(curR<0)return null;

      if(dir==="right"){
        if(curC<rows[curR].length-1)return rows[curR][curC+1].i;
        if(curR<rows.length-1)return rows[curR+1][0].i;
        return null; // at boundary — let browser scroll
      }
      if(dir==="left"){
        if(curC>0)return rows[curR][curC-1].i;
        if(curR>0)return rows[curR-1][rows[curR-1].length-1].i;
        return null;
      }
      if(dir==="down"){
        if(curR>=rows.length-1)return null; // at last row — scroll
        const nextR=curR+1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[nextR].length;c++){
          const dx=Math.abs(rows[nextR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[nextR][best].i;
      }
      if(dir==="up"){
        if(curR<=0)return null; // at first row — scroll
        const prevR=curR-1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[prevR].length;c++){
          const dx=Math.abs(rows[prevR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[prevR][best].i;
      }
      return null;
    };

    const keyHandler=(e)=>{
      if(e.defaultPrevented)return;
      // Only block on pages with their own arrow handling (lesson engine)
      if(document.querySelector("[data-kb-owner='lesson'],[data-kb-owner='lesson-done']"))return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT")return;
      const els=getEls();
      if(!els.length)return;

      const dirMap={ArrowDown:"down",ArrowUp:"up",ArrowLeft:"left",ArrowRight:"right"};
      const dir=dirMap[e.code];
      if(dir){
        kbActive.current=true;
        setKbIdx(prev=>{
          let next;
          if(prev<0||prev>=els.length){
            // First press: pick starting element
            if(dir==="up"||dir==="left"){
              next=els.length-1;
            }else{
              next=els.findIndex(el=>el.getBoundingClientRect().top>70);
              if(next<0)next=0;
            }
          }else{
            next=findInRows(els,prev,dir);
          }
          if(next===null){
            // At boundary — DON'T preventDefault, let browser scroll
            return prev;
          }
          e.preventDefault();
          UISounds.tick();
          return next;
        });
        return;
      }
      if(e.code==="Space"||e.code==="Enter"){
        if(!kbActive.current)return;
        const els2=getEls();
        setKbIdx(cur=>{
          if(cur>=0&&cur<els2.length){
            e.preventDefault();UISounds.click();
            els2[cur].click();
          }
          return cur;
        });
        return;
      }
    };

    // Mouse moves → immediately clear keyboard selection
    const mouseHandler=()=>{
      if(kbActive.current){
        kbActive.current=false;
        setKbIdx(-1);
        document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
      }
    };

    window.addEventListener("keydown",keyHandler);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{
      window.removeEventListener("keydown",keyHandler);
      window.removeEventListener("mousemove",mouseHandler);
      document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    };
  },[enabled,onBack]);

  useEffect(()=>()=>{setKbIdx(-1);document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));},[]);

  return kbIdx;
}


// ══════════════════════════════════════════════════════════════════
// AUDIO PLACEHOLDER SCHEMA (documented, not yet active)
// ══════════════════════════════════════════════════════════════════
/*
AUDIO PLACEHOLDER SCHEMA — for future TTS/recording integration

Teach steps may include:
  { type:"teach", nl:"가", en:"ga", audio_id:"ko_ga_01", ... }

MC steps may include:
  { type:"mc", q:"...", audio_id:"ko_q_p1_01", ... }

audio_id format: {lang}_{type}_{phase}_{number}
  e.g., ko_teach_p1_01, ko_mc_p3_05

When AUDIO_ENABLED=true:
  - SpeakerButton renders and plays audio_id
  - "Listen and choose" steps become available
  - Audio-only questions may be added

Until then: audio_id fields are IGNORED by all renderers.
*/

// ══════════════════════════════════════════════════════════════════
// CONTENT INTEGRITY AUDITOR (Dev Mode)
// Manifesto Principle 11: runs on load, prints warnings.
// Checks: anti-leak compliance, TK usage, FK/MK mapping.
// ══════════════════════════════════════════════════════════════════
const __contentWarnings = [];
try{
if (typeof console !== "undefined") {
  // ── Anti-Leak Auditor: scan all FK_PLAYTHROUGH MC questions ──
  const _auditAntiLeak = (langCode, stages) => {
    (stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        (lesson.steps || []).forEach((step, si) => {
          if (step.type !== "mc") return;
          const q = step.q || "";
          const ans = step.ans || "";
          const opts = step.opts || [];
          const hint = step.hint || "";

          // Rule A: target-script jamo/blocks in question for visual-property questions
          const jamoInQ = q.match(/[ㄱ-ㅎㅏ-ㅣ]/g) || [];
          const hangulInQ = q.match(/[가-힣]/g) || [];
          const visualWords = ["pointing","family","vertical","horizontal","difference","apart","shape","legs","stroke"];
          const isVisualQ = visualWords.some(w => q.toLowerCase().includes(w));
          if (jamoInQ.length > 0 && isVisualQ) {
            const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: jamo in visual-property question "${q.substring(0,50)}..."`;
            console.warn(`[ContentAudit] ${msg}`);
            __contentWarnings.push(msg);
          }

          // Rule B: answer appears standalone in question (multi-char only)
          if (ans.length > 2) {
            const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`(?<![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])${escaped}(?![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])`);
            if (re.test(q)) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer "${ans.substring(0,30)}" standalone in question`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }

          // Rule C: hint contains answer standalone
          if (hint && ans.length > 2) {
            const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`(?<![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])${escaped}(?![a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ])`);
            if (re.test(hint)) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer in hint "${hint.substring(0,40)}"`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }

          // Rule D: answer significantly longer than distractors
          const otherLens = opts.filter(o => o !== ans).map(o => o.length);
          if (otherLens.length > 0) {
            const avg = otherLens.reduce((a, b) => a + b, 0) / otherLens.length;
            if (ans.length > avg * 2.5 && ans.length > 20) {
              const msg = `ANTI-LEAK [${langCode}/${lesson.id}/step${si}]: answer much longer than distractors`;
              console.warn(`[ContentAudit] ${msg}`);
              __contentWarnings.push(msg);
            }
          }
        });
      });
    });
  };

  // Run auditor on all languages with playthrough content
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    if (data.stages && data.stages.length > 0) {
      _auditAntiLeak(lc, data.stages);
    }
  });

  // ── Boot-time Content Integrity Validator (Manifesto P8+P11) ──
  // Scans ALL FK_PLAYTHROUGH lessons and ALL UNITS lessons at startup.
  // Findings are logged to console. Runtime wiring in LessonEngine auto-flags them.
  const _bootValidatorFindings = [];
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    (data.stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        const findings = validateLessonForLeaks(lesson, { mode: "foundations", lang: lc, lessonId: lesson.id });
        findings.forEach(f => _bootValidatorFindings.push(f));
      });
    });
  });
  // NOTE: UNITS lessons are validated at runtime via LessonEngine useEffect wiring,
  // not at boot time, because UNITS is declared later in the file.
  if (_bootValidatorFindings.length > 0) {
    console.warn(`[ContentValidator] Boot scan: ${_bootValidatorFindings.length} finding(s) across all content`);
    _bootValidatorFindings.forEach(f => console.warn(`  [${f.severity}] ${f.lessonId}/step${f.stepIndex}: ${f.shortTitle} — ${f.explanation.substring(0,80)}`));
  } else {
    console.log("[ContentValidator] Boot scan: 0 findings ✅");
  }

  // ── MK/TK Linter: flag new FK_PLAYTHROUGH steps with raw English ──
  // (informational only — does not block)
  const _tkLinter = (langCode, stages) => {
    (stages || []).forEach(stage => {
      (stage.lessons || []).forEach(lesson => {
        (lesson.steps || []).forEach((step, si) => {
          // For MC: check if q contains common English instructional patterns
          if (step.type === "mc" && step.q) {
            const rawEnglish = /^(Which|What|How|Read|The |In |Does )/;
            if (rawEnglish.test(step.q)) {
              // This is informational — future content should use TK keys
              // Not flagged as error for grandfathered content
            }
          }
        });
      });
    });
  };

  // Run TK linter (silent for now — will be activated for new content)
  Object.entries(FK_PLAYTHROUGH).forEach(([lc, data]) => {
    if (data.stages && data.stages.length > 0) {
      _tkLinter(lc, data.stages);
    }
  });

  if (__contentWarnings.length > 0) {
    console.warn(`[ContentAudit] ${__contentWarnings.length} warning(s) found. Run __contentWarnings in console for details.`);
  }

  // ── LANGUAGE-AGNOSTIC AUDIT (Manifesto P14) ──
  // Scans shared UI component source for hardcoded language-specific terms.
  // This runs as a DEV-ONLY check. Terms in data constants are fine;
  // terms in function components that render for ALL languages are bugs.
  const _LANG_SPECIFIC_TERMS = [
    "Hangul","hangul","Jamo","jamo","Batchim","batchim",
    "Kanji","kanji","Hiragana","hiragana","Katakana","katakana",
    "Pinyin","pinyin","Cyrillic","cyrillic","Kana","kana","Hanzi","hanzi",
  ];
  // NOTE: Terms like "Dutch","German","Arabic" etc. are NOT flagged here because
  // they legitimately appear in per-language lesson data (UNITS content).
  // The above list targets SCRIPT-SYSTEM terms that should never appear in
  // shared UI components. Full audit (including language names in shared components)
  // must be run manually before each batch ships.
  // _LANG_AGNOSTIC_AUDIT_REMINDER: Before shipping ANY batch, grep shared components
  // (FoundationsGateQuiz, FoundationsPlaythrough, UnitMap, Home, LearnPage, LessonEngine)
  // for hardcoded language/script names. If found → pull from per-language data or make generic.
}
}catch(e){console.warn("[LingoVerse] Content auditor skipped:",e.message);}

// ══════════════════════════════════════════════════════════════════════════════
// CONTENT INTEGRITY VALIDATOR (ENFORCED) — Manifesto Principle 8 + 11
// ══════════════════════════════════════════════════════════════════════════════
//
// WHAT ARE LEAKS?
//   A "leak" is any test question (MC, match, etc.) where the learner can
//   determine the correct answer WITHOUT actually knowing the material, by
//   exploiting visual, structural, or textual patterns in the question itself.
//
// WHAT IS AUTOMATICALLY CHECKED?
//   1. VISUAL GIVEAWAY — question asks about a visual property (dots, shape,
//      stroke direction) while showing the target character in the prompt.
//      The learner can just LOOK at the character instead of recalling it.
//   2. CHOICE GIVEAWAY — the correct answer is the only option in a different
//      script/style (e.g. only Arabic among Latin, only Hangul among Latin).
//   3. COPY-PASTE GIVEAWAY — the prompt contains the exact answer string when
//      the question tests recall/recognition.
//   4. LENGTH GIVEAWAY — the correct answer is dramatically longer/shorter
//      than all distractors, making it statistically obvious.
//   5. HINT CONTAINS ANSWER — hint text contains the answer verbatim.
//   6. TEACH BEFORE TEST — quiz tests a non-Latin character not introduced
//      in a preceding teach step within the same lesson.
//   7. MISSING KIND — Foundations letter teach steps without kind:"letter".
//   8. P32 DEMONSTRATIVE PRONOUN — catches "deze/die is de [thing]" errors.
//      Dutch requires dit/dat for things in pronoun position.
//   9. P32 DEMONSTRATIVE DISAMBIGUATION — catches near/far demonstrative
//      exercises (deze vs die) that lack hier/daar in the sentence.
//  10. P34 VOCABULARY GATE — catches Dutch exercise words not found in any
//      teach card within the same lesson (warns, since prior lessons may
//      have taught the word).
//
// HOW TO RESOLVE A FLAGGED ITEM:
//   • Visual giveaway → flip the question: show the character, ask for the
//     sound/name in romanization. Or remove the character from the question.
//   • Choice giveaway → make all options use the same script.
//   • Copy-paste giveaway → rephrase the question to not include the answer.
//   • Length giveaway → pad distractors or shorten the answer.
//
// PRINCIPLE: The no-leak rule is NON-NEGOTIABLE across ALL content:
//   Foundations Playthrough + Units + Gate Quizzes.
// ══════════════════════════════════════════════════════════════════════════════

function validateLessonForLeaks(lesson, { mode, lang, lessonId }) {
  const findings = [];
  const steps = lesson.steps || [];
  
  // Script detection helpers
  const hasArabic = (s) => /[\u0600-\u06FF]/.test(s);
  const hasHangul = (s) => /[\uAC00-\uD7AF\u3130-\u318F]/.test(s);
  const hasCJK = (s) => /[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/.test(s);
  const hasNonLatin = (s) => /[^\u0000-\u007F]/.test(s);
  const visualWords = ["dot","dots","shape","teeth","bowl","cup","loop","flat","tall","hook",
    "swoop","vertical","horizontal","stroke","pointing","family","legs","apart"];

  steps.forEach((step, si) => {
    if (!["mc","match","identify"].includes(step.type)) return;
    
    const q = step.q || "";
    const ans = step.ans || "";
    const opts = step.opts || [];
    const hint = step.hint || "";

    // ── RULE 1: Visual giveaway ──
    // Question asks about visual property AND shows target-script characters
    const isVisualQ = visualWords.some(w => q.toLowerCase().includes(w));
    const qHasTargetScript = hasArabic(q) || hasHangul(q) || hasCJK(q);
    if (isVisualQ && qHasTargetScript) {
      // Check if the answer is one of the script characters shown in options
      const optsHaveScript = opts.some(o => hasArabic(o) || hasHangul(o) || hasCJK(o));
      if (optsHaveScript) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "error",
          shortTitle: "Visual giveaway",
          explanation: `Question asks about visual property ("${visualWords.find(w=>q.toLowerCase().includes(w))}") while showing target-script characters in prompt AND options contain script characters. Learner can see the answer.`,
          suggestedFix: "Flip the question: show the character, ask for the sound/name in romanization. Remove visual-property keywords from the question."
        });
      }
    }

    // ── RULE 2: Choice giveaway — only one option in a different script ──
    if (opts.length >= 3) {
      const scriptCounts = { arabic: 0, hangul: 0, cjk: 0, latin: 0 };
      opts.forEach(o => {
        if (hasArabic(o)) scriptCounts.arabic++;
        else if (hasHangul(o)) scriptCounts.hangul++;
        else if (hasCJK(o)) scriptCounts.cjk++;
        else scriptCounts.latin++;
      });
      for (const [script, count] of Object.entries(scriptCounts)) {
        if (count === 1 && script !== "latin") {
          // The lone non-Latin option — check if it's the answer
          const loneOpt = opts.find(o => {
            if (script === "arabic") return hasArabic(o);
            if (script === "hangul") return hasHangul(o);
            if (script === "cjk") return hasCJK(o);
            return false;
          });
          if (loneOpt === ans) {
            findings.push({
              lessonId, stepIndex: si, stepId: step.id || null,
              severity: "warn",
              shortTitle: "Choice giveaway (lone script)",
              explanation: `The correct answer "${ans}" is the only option in ${script} script among ${opts.length} options. Learner can guess by script alone.`,
              suggestedFix: "Make all options use the same script, or add more options in the same script."
            });
          }
        }
      }
    }

    // ── RULE 3: Copy-paste giveaway — answer appears in question ──
    if (ans.length > 2 && step.type === "mc") {
      const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(?<![a-zA-Z\\u0600-\\u06FF\\uAC00-\\uD7AF])${escaped}(?![a-zA-Z\\u0600-\\u06FF\\uAC00-\\uD7AF])`);
      if (re.test(q)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Copy-paste giveaway",
          explanation: `The answer "${ans.substring(0,30)}" appears verbatim in the question text.`,
          suggestedFix: "Rephrase the question to describe the concept without using the exact answer string."
        });
      }
    }

    // ── RULE 4: Length giveaway — answer dramatically longer than distractors ──
    if (opts.length >= 3) {
      const otherLens = opts.filter(o => o !== ans).map(o => o.length);
      if (otherLens.length > 0) {
        const avg = otherLens.reduce((a, b) => a + b, 0) / otherLens.length;
        if (ans.length > avg * 2.5 && ans.length > 20) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "warn",
            shortTitle: "Length giveaway",
            explanation: `Answer (${ans.length} chars) is ${(ans.length/avg).toFixed(1)}x longer than average distractor (${avg.toFixed(0)} chars).`,
            suggestedFix: "Pad distractors to similar length, or shorten the correct answer."
          });
        }
      }
    }

    // ── RULE 5: Hint contains answer (when hints are shown) ──
    if (hint && ans.length > 2) {
      const escaped = ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(escaped, "i");
      if (re.test(hint)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Hint contains answer",
          explanation: `The hint "${hint.substring(0,40)}..." contains the answer "${ans.substring(0,20)}".`,
          suggestedFix: "Rewrite the hint to guide thinking without revealing the answer."
        });
      }
    }

    // ── RULE 6: Teach before test ──
    // If a quiz answer is a single non-Latin character not introduced in ANY
    // preceding step (teach nl, forms glyphs, MC options, intro desc), flag it.
    if (step.type === "mc" && si > 0) {
      const exposedChars = new Set();
      for (let prev = 0; prev < si; prev++) {
        const ps = steps[prev];
        // Collect from teach nl and example fields
        if (ps.nl) for (const ch of ps.nl) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.example) for (const ch of ps.example) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.note) for (const ch of ps.note) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        // Collect from diagram forms
        if (ps.forms) ps.forms.forEach(f => { for (const ch of (f.glyph||"")) if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); });
        // Collect from MC questions and options (learner has seen these characters)
        if (ps.q) for (const ch of ps.q) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
        if (ps.opts) ps.opts.forEach(o => { for (const ch of o) if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); });
        // Collect from intro desc
        if (ps.desc) for (const ch of ps.desc) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
      }
      // Also count chars in the CURRENT question (learner sees q before answering)
      if (q) for (const ch of q) { if (/[^\u0000-\u007F]/.test(ch)) exposedChars.add(ch); }
      // Only flag single-char answers that are completely new
      if (exposedChars.size > 0 && ans.length <= 2) {
        const newChars = [];
        for (const ch of ans) {
          if (/[^\u0000-\u007F\u0020-\u002F\u003A-\u0040]/.test(ch) && !exposedChars.has(ch)) {
            newChars.push(ch);
          }
        }
        if (newChars.length > 0) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "warn",
            shortTitle: "Teach before test",
            explanation: `Quiz answer "${ans}" contains character(s) [${newChars.join(",")}] not seen in any preceding step.`,
            suggestedFix: "Insert a teach step before this test step that introduces the tested character."
          });
        }
      }
    }
  });

  // ── RULE 7: Missing kind on Foundations letter teach (warn) ──
  // In Foundations mode, teach steps with a single non-Latin character (1-2 chars)
  // should have kind:"letter" so the renderer shows the letter card, not vocab card.
  if (mode === "foundations") {
    steps.forEach((step, si) => {
      if (step.type !== "teach") return;
      if (step.kind) return; // already tagged
      const nl = (step.nl || "").trim();
      if (nl.length >= 1 && nl.length <= 2 && hasNonLatin(nl)) {
        findings.push({
          lessonId, stepIndex: si, stepId: step.id || null,
          severity: "warn",
          shortTitle: "Missing kind on letter teach",
          explanation: `Teach step for "${nl}" is a single non-Latin character but has no kind:"letter" field. It will render as a vocab card instead of a letter card.`,
          suggestedFix: "Add kind:\"letter\" to this teach step."
        });
      }
    });
  }

  // ── RULE 8: P32 — Demonstrative pronoun error (deze/die is de [thing]) ──
  // "Deze is de school" is WRONG DUTCH. Pronouns pointing at things = dit/dat only.
  steps.forEach((step, si) => {
    if (!step.blanks && !step.ans) return;
    // Check drag_fill blanks
    if (step.type === "drag_fill" && step.blanks) {
      const sentence = (step.s || "").toLowerCase();
      Object.entries(step.blanks).forEach(([k, v]) => {
        const val = v.toLowerCase();
        if ((val === "deze" || val === "die") && /is\s+(de|het)\s+\w/.test(sentence)) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative pronoun error",
            explanation: `Blank ${k} expects "${v}" in a pronoun position ("... is de/het [thing]"). Dutch requires dit/dat for things, never deze/die.`,
            suggestedFix: "Change expected answer to dit/dat, or restructure as adjective use (deze/die + noun)."
          });
        }
      });
    }
    // Check FB answers
    if (step.type === "fb" && step.a) {
      const answers = Array.isArray(step.a) ? step.a : [step.a];
      const sentence = (step.s || "").toLowerCase();
      answers.forEach(a => {
        const val = a.toLowerCase();
        if ((val === "deze" || val === "die") && /is\s+(de|het)\s+\w/.test(sentence)) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative pronoun error",
            explanation: `Answer "${a}" in pronoun position with "is de/het [thing]". Dutch requires dit/dat for things.`,
            suggestedFix: "Change answer to dit/dat, or restructure sentence."
          });
        }
      });
    }
  });

  // ── RULE 9: P32 — Near/far demonstrative without hier/daar ──
  // If an exercise tests deze vs die or dit vs dat, the sentence MUST contain hier or daar.
  steps.forEach((step, si) => {
    if (!["mc", "fb", "drag_fill"].includes(step.type)) return;
    const sentence = (step.s || step.q || "").toLowerCase();
    const allAnswers = [];
    if (step.ans) allAnswers.push(step.ans.toLowerCase());
    if (step.a) (Array.isArray(step.a) ? step.a : [step.a]).forEach(a => allAnswers.push(a.toLowerCase()));
    if (step.blanks) Object.values(step.blanks).forEach(v => allAnswers.push(v.toLowerCase()));
    const opts = (step.opts || []).map(o => o.toLowerCase());
    // Check if this is a demonstrative exercise (answer or options include demonstratives)
    const demonstratives = ["dit", "dat", "deze", "die"];
    const hasDemAnswer = allAnswers.some(a => demonstratives.includes(a));
    const hasDemOpts = opts.filter(o => demonstratives.includes(o)).length >= 2;
    if (hasDemAnswer && hasDemOpts) {
      // This is a demonstrative discrimination exercise
      const hasHierDaar = /\bhier\b|\bdaar\b/.test(sentence);
      if (!hasHierDaar) {
        // Check if it's a pronoun pattern (dit/dat is...) which doesn't need hier/daar
        const isPronounPattern = /\bis\b/.test(sentence) && allAnswers.some(a => a === "dit" || a === "dat");
        if (!isPronounPattern) {
          findings.push({
            lessonId, stepIndex: si, stepId: step.id || null,
            severity: "error",
            shortTitle: "P32: Demonstrative without hier/daar",
            explanation: `Demonstrative exercise (answer: ${allAnswers.join("/")}) has no hier/daar in sentence. Both deze and die could be correct without near/far context.`,
            suggestedFix: "Add hier or daar to the sentence to disambiguate near vs far."
          });
        }
      }
    }
  });

  // ── RULE 10: P34 — Vocabulary gate (Dutch exercises only) ──
  // Every Dutch word in exercise sentences should have been taught (teach card) before.
  if (lang === "nl" && mode === "units") {
    const taughtWords = new Set();
    steps.forEach((step, si) => {
      // Collect taught words from teach cards
      if (step.type === "teach" && step.nl) {
        // Split multi-word entries (e.g. "de man" -> "de", "man")
        step.nl.toLowerCase().split(/\s+/).forEach(w => taughtWords.add(w.replace(/[.,!?]/g, "")));
      }
      // Check exercise sentences for untaught words
      if (["fb", "drag_fill"].includes(step.type) && step.s) {
        const exerciseWords = step.s.toLowerCase()
          .replace(/\{[0-9]+\}/g, "") // Remove drag_fill placeholders
          .replace(/_{3,}/g, "")       // Remove FB blanks
          .split(/\s+/)
          .map(w => w.replace(/[.,!?'"]/g, ""))
          .filter(w => w.length > 0);
        // Common grammar words that don't need explicit teach cards
        const exempt = new Set(["en","in","is","zijn","het","de","een","van",
          "op","aan","er","je","jij","ik","hij","zij","wij","we","u","ze",
          "maar","of","met","naar","voor","om","als","dat","dit","wat","wie",
          "hoe","waar","ja","nee","ook","al","nog","wel","nu","dan","heel",
          "erg","te","uit","tot","bij","per","niet","geen"]);
        exerciseWords.forEach(w => {
          if (!exempt.has(w) && !taughtWords.has(w) && w.length > 1) {
            findings.push({
              lessonId, stepIndex: si, stepId: step.id || null,
              severity: "warn",
              shortTitle: "P34: Possibly untaught word",
              explanation: `Word "${w}" in exercise sentence not found in any teach card in this lesson. May need a teach card or may have been taught in a prior lesson.`,
              suggestedFix: "Verify this word was taught in a prior lesson, or add a teach card for it."
            });
          }
        });
      }
    });
  }

  return findings;
}














const shuffle = a=>[...a].sort(()=>Math.random()-.5);
const pick = a=>a[Math.floor(Math.random()*a.length)];
const clamp = (v,l,h)=>Math.max(l,Math.min(h,v));
const getLevel = xp=>{for(let i=LEVEL_XP.length-1;i>=0;i--)if(xp>=LEVEL_XP[i])return i+1;return 1;};
const cap = s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const xpNext = xp=>LEVEL_XP[getLevel(xp)]||12000;
const xpCurr = xp=>LEVEL_XP[getLevel(xp)-1]||0;



// ━━━━━━━━━━ NEW DESIGN SYSTEM ━━━━━━━━━━
const CSS = `
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
:root.dark .lang-card::before,
:root.dark .fc-front::before {
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

/* ━━━━━━ GLASS FLASHCARDS & PANELS ━━━━━━ */
:root.dark .fc-front, :root.dark .fc-back {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(1.2); -webkit-backdrop-filter: blur(20px) saturate(1.2);
  border: 1.5px solid var(--glass-border);
  box-shadow:
    0 10px 36px rgba(0,0,0,0.35),
    inset 0 1px 0 var(--glass-highlight),
    inset 0 -1px 0 var(--glass-lowlight);
}
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
  font-family: 'Source Sans 3', sans-serif;
  background: linear-gradient(180deg, #E6ECFA 0%, #DDE6F8 40%, #E6ECFA 100%);
  background-attachment: fixed;
  color: var(--gray-700);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4,h5,.hd { font-family: 'DM Sans', sans-serif; color: var(--gray-800); }

/* ── NAV BAR (top, like Duolingo mobile) ── */
.topnav {
  position: fixed; top: 0; left: 0; right: 0; height: 64px; z-index: 100;
  background: rgba(255,255,255,0.78); border-bottom: 2px solid var(--card-border);
  display: flex; align-items: center; padding: 0 24px;
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
.main { margin-top: 64px; padding: 32px; max-width: 860px; margin-left: auto; margin-right: auto; position: relative; z-index: 1; }

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

/* ── FLASHCARD ── */
.fc-wrap { perspective: 1000px; width: 100%; max-width: 400px; height: 260px; margin: 0 auto; }
.fc-inner {
  width: 100%; height: 100%; position: relative;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  transform-style: preserve-3d; cursor: pointer;
}
.fc-inner.flipped { transform: rotateY(180deg); }
.fc-face {
  position: absolute; inset: 0; border-radius: var(--radius-lg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  backface-visibility: hidden; padding: 28px; border: 2px solid var(--gray-100);
}
.fc-front {
  background: var(--card-bg);
  box-shadow: 0 12px 44px rgba(0,0,0,0.1), var(--card-shadow) !important;
  backdrop-filter: var(--glass-blur); -webkit-backdrop-filter: var(--glass-blur);
  position: relative; overflow: hidden;
}
.fc-front::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none; border-radius: inherit; z-index: 1;
}
.fc-back {
  background: linear-gradient(135deg, var(--teal-light), #c8f0e4);
  border-color: var(--teal); transform: rotateY(180deg);
  box-shadow: 0 12px 44px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05),
    inset 0 2px 1px rgba(255,255,255,0.8), inset 0 -3px 1px rgba(0,0,0,0.04) !important;
}
.fc-word { font-family: 'DM Sans', sans-serif; font-size: 34px; font-weight: 800; color: var(--gray-800); margin-bottom: 6px; }
.fc-phonetic { color: var(--gray-400); font-size: 15px; }
.fc-cat { font-size: 11px; color: var(--blue); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; font-family: 'DM Sans', sans-serif; margin-bottom: 8px; }
.fc-trans { font-family: 'DM Sans', sans-serif; font-size: 30px; font-weight: 800; color: var(--teal-dark); }
.fc-label { color: var(--gray-400); font-size: 13px; margin-top: 10px; }

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
  display: flex; flex-direction: column; height: calc(100vh - 200px);
  max-height: 580px; background: var(--gray-50); border-radius: var(--radius-lg);
  border: 2px solid var(--gray-100); overflow: hidden;
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
@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes dfPulse { 0%,100% { box-shadow: 0 0 0 3px rgba(123,94,232,0.2); } 50% { box-shadow: 0 0 0 6px rgba(123,94,232,0.35); } }
@keyframes pop { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-70px) scale(1.15);opacity:0} }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
@keyframes bubblePop { from{opacity:0;transform:scale(0.82) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }
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
  .main { padding: 20px 16px; }
  .topnav { padding: 0 12px; }
  .topnav-item span:not(.icon) { display: none; }
  .topnav-item { padding: 8px 10px; }
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
.vr-inp{flex:1;padding:9px 14px;border-radius:20px;border:1.5px solid rgba(180,165,240,0.4);font-size:13px;font-family:Nunito,sans-serif;outline:none;background:linear-gradient(180deg,rgba(200,190,255,0.38)0%,rgba(220,210,255,0.22)50%,rgba(235,230,255,0.14)100%);color:#5038A0;font-weight:600;transition:border-color .15s,box-shadow .15s;box-shadow:inset 0 2px 0 rgba(255,255,255,0.6),inset 0 -1px 0 rgba(123,94,232,0.06);}.vr-inp::placeholder{color:rgba(100,78,180,0.45);font-weight:500;}.vr-inp:focus{border-color:rgba(140,120,230,0.65);box-shadow:0 0 0 3px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.6);}
:root.dark .vr-inp{background:linear-gradient(180deg,rgba(70,50,140,0.5)0%,rgba(55,40,120,0.35)100%);border-color:rgba(140,120,220,0.35);color:#C8BBFF;box-shadow:inset 0 2px 0 rgba(255,255,255,0.08);}.vr-inp::placeholder{color:rgba(180,160,255,0.4);}
:root.dark .vr-inp-bar{background:linear-gradient(180deg,rgba(60,45,120,0.3)0%,rgba(45,35,100,0.2)100%);border-top-color:rgba(120,100,200,0.2);}
.vr-send{width:34px;height:34px;border-radius:50%;background:linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%);border:1px solid rgba(255,255,255,0.18);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(123,94,232,0.45),inset 0 2px 0 rgba(255,255,255,0.35),inset 0 -2px 0 rgba(0,0,0,0.15);flex-shrink:0;transition:opacity .15s,filter .15s;position:relative;overflow:hidden;}.vr-send::after{content:'';position:absolute;top:0;left:8%;right:8%;height:45%;border-radius:0 0 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,0.4),transparent);pointer-events:none;}.vr-send:hover:not(:disabled){filter:brightness(1.1);}
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
@media(max-width:700px){.vr-wrap{right:10px;bottom:10px;width:calc(100vw - 20px);height:420px;}.vl-tab{top:auto;bottom:120px;transform:none;}}
`;


// ━━━━━━━━━━ SMALL COMPONENTS ━━━━━━━━━━

function Toast({message,icon,onDone}){
  useEffect(()=>{const t=setTimeout(onDone,3000);return()=>clearTimeout(t)},[]);
  return <div className="toast"><span style={{fontSize:22}}>{icon}</span><span className="hd" style={{fontWeight:700,fontSize:14}}>{message}</span></div>;
}

function XpPop({amount,x,y}){
  return <div style={{position:"fixed",left:x,top:y,zIndex:9999,pointerEvents:"none",animation:"pop 1s ease forwards",fontFamily:"'DM Sans',sans-serif",fontWeight:800,fontSize:18,color:"var(--gold-dark)",textShadow:"0 0 8px rgba(245,166,35,0.4)"}}>+{amount} XP</div>;
}

function TopNav({page,setPage,user,baseLang="en"}){
  const lv = getLevel(user.xp);
  const items=[{id:"home",icon:"house",label:t("nav_home",baseLang)},{id:"flashcards",icon:"abc_blocks",label:t("flash_title",baseLang)},{id:"quiz",icon:"checkmark_green",label:t("nav_quiz",baseLang)},{id:"chat",icon:"robot",label:t("nav_chat",baseLang)},{id:"grammar",icon:"books_stack",label:t("grammar_title",baseLang)},{id:"profile",icon:"avatar",label:t("nav_profile",baseLang)}];
  return(
    <div className="topnav">
      <div className="topnav-logo" onClick={()=>setPage("home")}>LingoVerse</div>
      <div className="topnav-items">
        {items.map(i=>(
          <div key={i.id} className={`topnav-item ${page===i.id?"active":""}`} onClick={()=>setPage(i.id)}>
            <span className="icon">{ICON_REG[i.icon]?<AppIcon name={i.icon} size={28}/>:i.icon}</span><span>{i.label}</span>
          </div>
        ))}
      </div>
      <div className="topnav-right">
        <div className="topnav-stat stat-xp"><AppIcon name="lightning_bolt" size={20} style={{marginRight:3}}/>{user.xp}</div>
        <div className="topnav-stat stat-streak"><AppIcon name="flame" size={20} style={{marginRight:3}}/>{user.streak}</div>
        <div className="topnav-stat stat-level">Lv.{lv}</div>
      </div>
    </div>
  );
}

function LangSel({selected,onSelect}){
  return(
    <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
      {LANGUAGES.map(l=>(
        <div key={l.code} className={`lang-card ${selected===l.code?"active":""}`} onClick={()=>onSelect(l.code)}>
          <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
        </div>
      ))}
    </div>
  );
}

// ━━━━━━━━━━ BRAND SVG ICON LIBRARY ━━━━━━━━━━
// Hand-crafted vector illustrations. Not emoji. Not clipart. Branded.

function BrandIcon({name,size=32}){
  const s=size;
  const icons={
    // ── BAND ICONS (Chapter select) ──
    "band-a1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="a1g" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#6DD5A0"/><stop offset="1" stopColor="#2BAF6A"/></linearGradient></defs>
      <ellipse cx="16" cy="27" rx="6" ry="2" fill="#2BAF6A" opacity=".18"/>
      <rect x="14.5" y="14" width="3" height="13" rx="1.5" fill="url(#a1g)"/>
      <ellipse cx="16" cy="12" rx="5.5" ry="6" fill="url(#a1g)"/>
      <ellipse cx="16" cy="11" rx="3.5" ry="4" fill="#9EECC4" opacity=".5"/>
      <path d="M12 18c-3-2-4.5-5-3-8" stroke="#2BAF6A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="9" cy="10" r="2.5" fill="url(#a1g)" opacity=".7"/>
    </svg>,

    "band-a2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="a2g" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#1A9B6E"/></linearGradient></defs>
      <ellipse cx="16" cy="28" rx="7" ry="2" fill="#1A9B6E" opacity=".18"/>
      <rect x="14.5" y="12" width="3" height="16" rx="1.5" fill="url(#a2g)"/>
      <ellipse cx="11" cy="10" rx="5" ry="5.5" fill="url(#a2g)"/>
      <ellipse cx="21" cy="10" rx="5" ry="5.5" fill="url(#a2g)"/>
      <ellipse cx="11" cy="9" rx="3" ry="3.5" fill="#9EECC4" opacity=".45"/>
      <ellipse cx="21" cy="9" rx="3" ry="3.5" fill="#9EECC4" opacity=".45"/>
      <path d="M8 20c-3-1.5-4-4.5-2.5-7" stroke="#1A9B6E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="5.5" cy="13" r="2" fill="url(#a2g)" opacity=".6"/>
      <path d="M24 20c3-1.5 4-4.5 2.5-7" stroke="#1A9B6E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <circle cx="26.5" cy="13" r="2" fill="url(#a2g)" opacity=".6"/>
    </svg>,

    "band-b1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="b1g" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#7C9CF0"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <rect x="7" y="18" width="18" height="5" rx="1" fill="#E8A44A" stroke="#D4933A" strokeWidth=".5"/>
      <rect x="6" y="12" width="18" height="5" rx="1" fill="url(#b1g)" stroke="#4A6BD6" strokeWidth=".5"/>
      <rect x="8" y="6" width="18" height="5" rx="1" fill="#7B5EE8" stroke="#6545C8" strokeWidth=".5"/>
      <rect x="8" y="13" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="7.5" y="7" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="9" y="19" width="3" height="3" rx=".5" fill="rgba(255,255,255,.3)"/>
      <line x1="13" y1="14.5" x2="22" y2="14.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <line x1="12.5" y1="8.5" x2="24" y2="8.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <line x1="14" y1="20.5" x2="23" y2="20.5" stroke="rgba(255,255,255,.25)" strokeWidth="1"/>
      <ellipse cx="16" cy="27" rx="8" ry="1.5" fill="#4A6BD6" opacity=".12"/>
    </svg>,

    "band-b2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="b2g" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D03A3A"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#b2g)" opacity=".15"/>
      <circle cx="16" cy="16" r="9" fill="url(#b2g)" opacity=".25"/>
      <circle cx="16" cy="16" r="6" fill="url(#b2g)" opacity=".4"/>
      <circle cx="16" cy="16" r="3" fill="url(#b2g)"/>
      <circle cx="16" cy="16" r="1.2" fill="white"/>
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4" stroke="#D03A3A" strokeWidth="1" strokeLinecap="round" opacity=".3"/>
    </svg>,

    "band-c1":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="c1g" x1="16" y1="1" x2="16" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset="1" stopColor="#E8A020"/></linearGradient></defs>
      <path d="M16 2l3.7 7.5 8.3 1.2-6 5.8 1.4 8.3L16 21l-7.4 3.8 1.4-8.3-6-5.8 8.3-1.2z" fill="url(#c1g)" stroke="#D4900A" strokeWidth=".6"/>
      <path d="M16 5l2.4 5 5.5.8-4 3.8.9 5.5L16 17.5 11.2 20l.9-5.5-4-3.8 5.5-.8z" fill="rgba(255,255,255,.25)"/>
      <ellipse cx="16" cy="28" rx="7" ry="1.5" fill="#D4900A" opacity=".12"/>
    </svg>,

    "band-c2":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="c2g" x1="16" y1="4" x2="16" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset=".5" stopColor="#E8A020"/><stop offset="1" stopColor="#C87A10"/></linearGradient></defs>
      <path d="M6 16l3-10h14l3 10c0 0-2 4-10 4s-10-4-10-4z" fill="url(#c2g)" stroke="#B87008" strokeWidth=".6"/>
      <path d="M6 16c0 0 2 4 10 4s10-4 10-4" stroke="#B87008" strokeWidth=".6" fill="none"/>
      <circle cx="9" cy="6" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <circle cx="16" cy="4" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <circle cx="23" cy="6" r="2.5" fill="url(#c2g)" stroke="#B87008" strokeWidth=".5"/>
      <rect x="9" y="13" width="3" height="3" rx="1" fill="#D03A3A" opacity=".7"/>
      <rect x="14.5" y="12" width="3" height="3" rx="1" fill="#4A8FE7" opacity=".7"/>
      <rect x="20" y="13" width="3" height="3" rx="1" fill="#2BAF6A" opacity=".7"/>
      <path d="M8 16.5c2 2.5 5 3.5 8 3.5s6-1 8-3.5" fill="rgba(255,255,255,.15)"/>
      <ellipse cx="16" cy="27" rx="8" ry="1.5" fill="#B87008" opacity=".12"/>
    </svg>,

    // ── UNIT ICONS ──
    "👋":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="wavg" x1="10" y1="4" x2="22" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD086"/><stop offset="1" stopColor="#E8A44A"/></linearGradient></defs>
      <path d="M20 6c1.1 0 2 .9 2 2v8l1-5c.3-1.1 1.4-1.7 2.4-1.4 1 .3 1.6 1.3 1.3 2.4l-2.5 10c-.8 3.2-3.6 5.5-7 5.5h-2.5c-4 0-7-3.2-7-7v-5c0-1.1.9-2 2-2s2 .9 2 2v3" stroke="#C87A10" strokeWidth="1.2" strokeLinecap="round" fill="url(#wavg)" opacity=".9"/>
      <path d="M14 14V7c0-1.1.9-2 2-2s2 .9 2 2v7M14 14V9c0-1.1-.9-2-2-2s-2 .9-2 2v8" stroke="#C87A10" strokeWidth="1.2" strokeLinecap="round" fill="url(#wavg)"/>
      <path d="M22 11l.5-2" stroke="#E8A44A" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/>
      <circle cx="7" cy="6" r="1" fill="#E8A44A" opacity=".5"/>
      <circle cx="25" cy="4" r="1.2" fill="#E8A44A" opacity=".4"/>
      <path d="M5 10l-2-1M27 7l2-1" stroke="#E8A44A" strokeWidth="1" strokeLinecap="round" opacity=".35"/>
    </svg>,

    "🪪":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="idg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <rect x="3" y="8" width="26" height="16" rx="3" fill="url(#idg)"/>
      <rect x="4" y="9" width="24" height="6" rx="1" fill="rgba(255,255,255,.12)"/>
      <circle cx="11" cy="19" r="3" fill="rgba(255,255,255,.25)"/>
      <circle cx="11" cy="18.5" r="1.5" fill="rgba(255,255,255,.4)"/>
      <rect x="17" y="17" width="9" height="1.5" rx=".75" fill="rgba(255,255,255,.3)"/>
      <rect x="17" y="20" width="6" height="1.5" rx=".75" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🔢":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="numg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A8FE7"/></linearGradient></defs>
      <rect x="3" y="3" width="12" height="12" rx="3" fill="url(#numg)"/>
      <rect x="17" y="3" width="12" height="12" rx="3" fill="url(#numg)" opacity=".7"/>
      <rect x="3" y="17" width="12" height="12" rx="3" fill="url(#numg)" opacity=".7"/>
      <rect x="17" y="17" width="12" height="12" rx="3" fill="url(#numg)" opacity=".5"/>
      <text x="9" y="12.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">1</text>
      <text x="23" y="12.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">2</text>
      <text x="9" y="26.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">3</text>
      <text x="23" y="26.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">4</text>
    </svg>,

    "🍽️":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="fg" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A0B0"/><stop offset="1" stopColor="#E06080"/></linearGradient></defs>
      <circle cx="16" cy="16" r="11" fill="url(#fg)" opacity=".15"/>
      <circle cx="16" cy="16" r="8" fill="url(#fg)" opacity=".25"/>
      <circle cx="16" cy="16" r="5" stroke="url(#fg)" strokeWidth="1" fill="none"/>
      <path d="M7 8v16M7 8c0-1 .5-3 1.5-3S10 7 10 8" stroke="#E06080" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8.5" y1="8" x2="8.5" y2="14" stroke="#E06080" strokeWidth="1" strokeLinecap="round"/>
      <path d="M25 8v3c0 2-1 3.5-2.5 4v9" stroke="#E06080" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "👨‍👩‍👧‍👦":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="famg" x1="6" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <circle cx="10" cy="10" r="3.5" fill="url(#famg)"/>
      <circle cx="10" cy="9.5" r="2" fill="rgba(255,255,255,.3)"/>
      <path d="M5 24v-3c0-3 2.2-5 5-5s5 2 5 5v3" fill="url(#famg)" opacity=".7"/>
      <circle cx="22" cy="10" r="3.5" fill="#50E0C0"/>
      <circle cx="22" cy="9.5" r="2" fill="rgba(255,255,255,.3)"/>
      <path d="M17 24v-3c0-3 2.2-5 5-5s5 2 5 5v3" fill="#50E0C0" opacity=".7"/>
      <circle cx="16" cy="17" r="2.5" fill="#F5C040"/>
      <circle cx="16" cy="16.7" r="1.5" fill="rgba(255,255,255,.3)"/>
      <path d="M12.5 28v-2c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v2" fill="#F5C040" opacity=".7"/>
    </svg>,

    "🚲":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bikg" x1="4" y1="12" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A623"/><stop offset="1" stopColor="#E08A10"/></linearGradient></defs>
      <circle cx="8" cy="22" r="5.5" stroke="url(#bikg)" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="22" r="5.5" stroke="url(#bikg)" strokeWidth="2" fill="none"/>
      <path d="M8 22l6-10h4l2 4-4 6M20 16l4 6" stroke="url(#bikg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="12" r="1.5" fill="url(#bikg)"/>
      <path d="M12 12h5" stroke="url(#bikg)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "⏰":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="clkg" x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <circle cx="16" cy="17" r="12" fill="url(#clkg)" opacity=".15"/>
      <circle cx="16" cy="17" r="10" fill="url(#clkg)"/>
      <circle cx="16" cy="17" r="8.5" fill="rgba(255,255,255,.12)"/>
      <path d="M16 10v7l4.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="17" r="1.2" fill="white"/>
      <path d="M12 4h8" stroke="#4A6BD6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 4v2" stroke="#4A6BD6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,

    "🏥":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="medg" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D04040"/></linearGradient></defs>
      <rect x="6" y="6" width="20" height="20" rx="5" fill="url(#medg)"/>
      <rect x="7" y="7" width="18" height="9" rx="3" fill="rgba(255,255,255,.12)"/>
      <rect x="14" y="10" width="4" height="12" rx="1" fill="white"/>
      <rect x="10" y="14" width="12" height="4" rx="1" fill="white"/>
    </svg>,

    "⚽":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="spg" x1="8" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#spg)"/>
      <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,.12)"/>
      <path d="M16 6l3 5h5l1 5-3 4-5 1-5-1-3-4 1-5h5z" stroke="rgba(255,255,255,.4)" strokeWidth="1" fill="none"/>
      <path d="M16 6v5M24 11l-5 0M25 16l-3 4M21 25l-5 1M11 25l-3-4M7 16l1-5M8 11h5" stroke="rgba(255,255,255,.3)" strokeWidth=".8"/>
    </svg>,

    "📖":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bkg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <path d="M4 7c0-1 .8-2 2-2h8c1 0 2 .8 2 2v18l-1-1.5c-.5-.5-1-.5-1.5 0L12 25l-1.5-1.5c-.5-.5-1-.5-1.5 0L7.5 25 6 23.5c-.5-.5-1-.5-1.5 0L3 25V7z" fill="url(#bkg)" opacity=".85"/>
      <path d="M28 7c0-1-.8-2-2-2h-8c-1 0-2 .8-2 2v18l1-1.5c.5-.5 1-.5 1.5 0L20 25l1.5-1.5c.5-.5 1-.5 1.5 0l1.5 1.5 1.5-1.5c.5-.5 1-.5 1.5 0L29 25V7z" fill="url(#bkg)"/>
      <rect x="7" y="9" width="6" height="1" rx=".5" fill="rgba(255,255,255,.35)"/>
      <rect x="7" y="12" width="5" height="1" rx=".5" fill="rgba(255,255,255,.25)"/>
      <rect x="19" y="9" width="6" height="1" rx=".5" fill="rgba(255,255,255,.35)"/>
      <rect x="19" y="12" width="5" height="1" rx=".5" fill="rgba(255,255,255,.25)"/>
      <rect x="19" y="15" width="4" height="1" rx=".5" fill="rgba(255,255,255,.2)"/>
      <line x1="16" y1="7" x2="16" y2="23" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
    </svg>,

    // ── LESSON-TYPE ICONS ──
    "💬":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="chatg" x1="4" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A8FE7"/></linearGradient></defs>
      <path d="M6 6h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H12l-5 4v-4H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" fill="url(#chatg)"/>
      <rect x="9" y="11" width="8" height="1.5" rx=".75" fill="rgba(255,255,255,.4)"/>
      <rect x="9" y="14.5" width="5" height="1.5" rx=".75" fill="rgba(255,255,255,.25)"/>
    </svg>,

    "🏆":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="trg" x1="16" y1="2" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD86B"/><stop offset="1" stopColor="#E8A020"/></linearGradient></defs>
      <path d="M10 4h12v10c0 4-2.5 7-6 7s-6-3-6-7V4z" fill="url(#trg)"/>
      <path d="M10 7H6c0 4 2 6 4 6.5M22 7h4c0 4-2 6-4 6.5" stroke="#D4900A" strokeWidth="1.2" fill="none"/>
      <rect x="13" y="21" width="6" height="3" rx="1" fill="url(#trg)"/>
      <rect x="10" y="24" width="12" height="3" rx="1.5" fill="url(#trg)" stroke="#D4900A" strokeWidth=".5"/>
      <path d="M11 5h10v4c0 1-1 2-2 2h-6c-1 0-2-1-2-2V5z" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "📝":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="peng" x1="8" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <rect x="7" y="4" width="18" height="24" rx="3" fill="url(#peng)"/>
      <rect x="8" y="5" width="16" height="10" rx="2" fill="rgba(255,255,255,.12)"/>
      <rect x="11" y="10" width="10" height="1.5" rx=".75" fill="rgba(255,255,255,.4)"/>
      <rect x="11" y="14" width="7" height="1.5" rx=".75" fill="rgba(255,255,255,.3)"/>
      <rect x="11" y="18" width="9" height="1.5" rx=".75" fill="rgba(255,255,255,.25)"/>
      <rect x="11" y="22" width="5" height="1.5" rx=".75" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🔄":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="refg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#7B5EE8"/></linearGradient></defs>
      <path d="M24 10A10 10 0 0 0 8 8" stroke="url(#refg)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 22A10 10 0 0 0 24 24" stroke="url(#refg)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 4v5h5" stroke="url(#refg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 28v-5h-5" stroke="url(#refg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    "📚":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="bksg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#7B5EE8"/><stop offset="1" stopColor="#5840B8"/></linearGradient></defs>
      <rect x="4" y="6" width="7" height="20" rx="1.5" fill="url(#bksg)" transform="rotate(-5 7 16)"/>
      <rect x="12" y="5" width="7" height="21" rx="1.5" fill="#4A8FE7"/>
      <rect x="20" y="6" width="7" height="20" rx="1.5" fill="#2ECD9E" transform="rotate(5 24 16)"/>
      <rect x="5.5" y="9" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)" transform="rotate(-5 7 9)"/>
      <rect x="13.5" y="8" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)"/>
      <rect x="21.5" y="9" width="4" height="1" rx=".5" fill="rgba(255,255,255,.3)" transform="rotate(5 24 9)"/>
    </svg>,

    "✅":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="chkg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#50E0C0"/><stop offset="1" stopColor="#2ECD9E"/></linearGradient></defs>
      <rect x="4" y="4" width="24" height="24" rx="6" fill="url(#chkg)"/>
      <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,

    "📅":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="calg" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F07070"/><stop offset="1" stopColor="#D04040"/></linearGradient></defs>
      <rect x="4" y="6" width="24" height="22" rx="4" fill="url(#calg)"/>
      <rect x="4" y="6" width="24" height="7" rx="4" fill="rgba(255,255,255,.15)"/>
      <rect x="9" y="3" width="2.5" height="5" rx="1.2" fill="url(#calg)" stroke="#D04040" strokeWidth=".5"/>
      <rect x="20.5" y="3" width="2.5" height="5" rx="1.2" fill="url(#calg)" stroke="#D04040" strokeWidth=".5"/>
      <rect x="8" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.3)"/>
      <rect x="14" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.2)"/>
      <rect x="20" y="16" width="4" height="3" rx="1" fill="rgba(255,255,255,.15)"/>
      <rect x="8" y="21" width="4" height="3" rx="1" fill="rgba(255,255,255,.15)"/>
      <rect x="14" y="21" width="4" height="3" rx="1" fill="rgba(255,255,255,.25)"/>
    </svg>,

    "🏠":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="hmg" x1="16" y1="3" x2="16" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#F5A623"/><stop offset="1" stopColor="#E08A10"/></linearGradient></defs>
      <path d="M16 4L4 15h4v12h16V15h4L16 4z" fill="url(#hmg)"/>
      <path d="M16 4L4 15h4v-2L16 6l8 7v2h4L16 4z" fill="rgba(255,255,255,.2)"/>
      <rect x="13" y="19" width="6" height="8" rx="1" fill="rgba(255,255,255,.35)"/>
      <rect x="14" y="20" width="4" height="3" rx=".5" fill="rgba(255,255,255,.2)"/>
    </svg>,

    "🧭":()=><svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <defs><linearGradient id="compg" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#6AABF5"/><stop offset="1" stopColor="#4A6BD6"/></linearGradient></defs>
      <circle cx="16" cy="16" r="12" fill="url(#compg)"/>
      <circle cx="16" cy="16" r="10" fill="rgba(255,255,255,.1)"/>
      <path d="M16 6l1 6 5-3-3 5 6 1-6 1 3 5-5-3-1 6-1-6-5 3 3-5-6-1 6-1-3-5 5 3z" fill="white" opacity=".35"/>
      <path d="M14 14l-4 8 8-4z" fill="#D04040" opacity=".8"/>
      <path d="M18 18l4-8-8 4z" fill="white" opacity=".6"/>
      <circle cx="16" cy="16" r="1.5" fill="white"/>
    </svg>,
  };
  const render=icons[name];
  if(!render) return <span style={{fontSize:s,lineHeight:1}}>{name}</span>;
  return render();
}

// Helper: render icon — uses BrandIcon if available, emoji fallback
function renderBrandIcon(emoji,size){
  return <BrandIcon name={emoji} size={size}/>;
}

// ━━━━━━━━━━ HOME (redesigned — hub with 6 categories) ━━━━━━━━━━

function Home({user,setPage,lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  return(
    <div className="anim">
      {/* Welcome header — immersive in the target language */}
      <div style={{textAlign:"center",padding:"16px 0 32px"}}>
        <h1 className="hd" style={{fontSize:30,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>{L?.welcomeBack||L?.greeting}</h1>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          <span style={{fontSize:18,fontWeight:700,color:"var(--purple-accent-text)"}}>{L?.native}</span>
          <CountryFlag code={lang} size={24}/>
        </div>
      </div>

      {/* 6 Category buttons — continue-button purple */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,maxWidth:520,margin:"0 auto"}}>
        {[
          {p:"learn",icon:"books_stack",label:t("home_learn_path",baseLang),desc:"Structured lessons"},
          {p:"vocabulary",icon:"abc_blocks",label:t("vocab_title",baseLang),desc:"A1 – C2 dictionary"},
          {p:"grammar",icon:"clipboard",label:t("grammar_title",baseLang),desc:"A1 – C2 rules"},
          {p:"idioms",icon:"chat_bubbles",label:t("idioms_title",baseLang),desc:"A1 – C2 expressions"},
          {p:"cefr-reference",icon:"globe",label:"CEFR Reference",desc:"Official word lists"},
          {p:"curriculum",icon:"brain",label:"Curriculum",desc:"Personal path"},
          {p:"quiz",icon:"checkmark_green",label:t("home_quiz",baseLang),desc:"Test your knowledge"},
        ].map(c=>{
          const restShadow="0 5px 16px rgba(85,53,181,0.35), 0 2px 4px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.18)";
          const hoverShadow="0 10px 28px rgba(85,53,181,0.45), 0 0 16px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)";
          return(
          <div key={c.p} role="button" className="home-tile" onClick={()=>setPage(c.p)} style={{borderRadius:24,padding:"24px 16px",textAlign:"center",cursor:"pointer",transition:"all .15s, transform 0.15s, box-shadow 0.15s, filter 0.15s",position:"relative",overflow:"hidden",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",border:"none",boxShadow:restShadow}}>
            {/* Candy shine — wide rounded pill */}
            <div style={{position:"absolute",top:0,left:"4%",right:"4%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{marginBottom:8,position:"relative",zIndex:2}}><AppIcon name={c.icon} size={44}/></div>
            <div style={{fontSize:14,fontWeight:800,color:"#fff",marginBottom:2,position:"relative",zIndex:2,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{c.label}</div>
            <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",fontWeight:500,position:"relative",zIndex:2}}>{c.desc}</div>
          </div>);
        })}
      </div>

      {/* Recent progress teaser */}
      <div style={{marginTop:28,textAlign:"center"}}>
        <div className="gloss" style={{display:"inline-flex",gap:16,background:"var(--card-bg)",borderRadius:16,padding:"12px 24px",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)"}}>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightning_bolt" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.xp} XP</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="flame" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.streak} day</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="brain" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.wl} words</strong></span>
          {(()=>{const cefr=getUserCefr(user,lang);return <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="star" size={16}/><strong style={{color:"var(--gray-800)"}}>{cefr.level}</strong></span>;})()}
        </div>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ FLASHCARDS ━━━━━━━━━━

function Flashcards({lang,baseLang="en",user,showToast}){
  const allVocab=VOCAB[lang]||[];
  // Only show words the user has learned
  const learnedWords=allVocab.filter(w=>user.lw.has(w.word));
  const [mode,setMode]=useState("shuffle"); // shuffle, level, alpha
  const [deck,setDeck]=useState([]);
  const [idx,setIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);

  useEffect(()=>{
    let sorted=[...learnedWords];
    if(mode==="shuffle") sorted=shuffle(sorted);
    else if(mode==="alpha") sorted.sort((a,b)=>a.word.localeCompare(b.word));
    else if(mode==="level") sorted.sort((a,b)=>(a.level||"A1").localeCompare(b.level||"A1"));
    setDeck(sorted);setIdx(0);setFlipped(false);
  },[mode,user.lw.size]);

  if(learnedWords.length===0) return(
    <div className="anim" style={{textAlign:"center",paddingTop:40}}>
      <div style={{fontSize:56,marginBottom:16}}>🗂️</div>
      <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:8}}>{t("fc_title",baseLang)}</h2>
      <p style={{color:"var(--gray-400)",fontSize:15,lineHeight:1.7,maxWidth:360,margin:"0 auto 24px"}}>{t("fc_empty_desc",baseLang)}</p>
      <div style={{display:"inline-block",background:"var(--blue-pale)",borderRadius:14,padding:"12px 20px",border:"1.5px solid var(--blue-light)"}}>
        <span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>📚 {allVocab.length} {t("fc_words_waiting",baseLang)}</span>
      </div>
    </div>
  );

  const card=deck[idx];
  if(!card) return null;

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:36,marginBottom:6}}>🗂️</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("fc_title",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13}}>{learnedWords.length} {t("fc_words_learned",baseLang)} · {t("fc_tap_flip",baseLang)}</p>
      </div>

      {/* Mode selector */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:20}}>
        {[{id:"shuffle",icon:"🔀",label:t("fc_shuffle",baseLang)},{id:"level",icon:"📊",label:t("fc_by_level",baseLang)},{id:"alpha",icon:"🔤",label:t("fc_a_z",baseLang)}].map(m=>(
          <button key={m.id} onClick={()=>setMode(m.id)} style={{padding:"7px 16px",borderRadius:16,border:`2px solid ${mode===m.id?"var(--blue)":"var(--gray-200)"}`,background:mode===m.id?"var(--blue)":"white",color:mode===m.id?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>{m.icon} {m.label}</button>
        ))}
      </div>

      {/* Card counter */}
      <div style={{textAlign:"center",marginBottom:12,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
        {idx+1} / {deck.length}
        {card.level&&<span style={{marginLeft:8,padding:"2px 10px",borderRadius:8,background:"var(--blue-light)",fontSize:10,fontWeight:700,color:"var(--blue)"}}>{card.level}</span>}
      </div>

      {/* Flashcard */}
      <div className="fc-wrap" onClick={()=>setFlipped(!flipped)}>
        <div className={`fc-inner ${flipped?"flipped":""}`}>
          <div className="fc-face fc-front">
            <div className="fc-cat">{card.category||""}</div>
            <div className="fc-word">{cap(card.word)}</div>
            <div className="fc-phonetic">{card.phonetic}</div>
            <div style={{display:"flex",justifyContent:"center",marginTop:12}}>
              <SpeakerButton text={card.word} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={20} showToast={showToast} />
            </div>
            <div className="fc-label">{t("fc_tap_reveal",baseLang)}</div>
          </div>
          <div className="fc-face fc-back">
            <div className="fc-cat" style={{color:"var(--teal-dark)"}}>{t("fc_translation",baseLang)}</div>
            <div className="fc-trans">{cap(card.translation)}</div>
            <div className="fc-label">{cap(card.word)} = {cap(card.translation)}</div>
          </div>
        </div>
      </div>

      {/* Navigation — simple, not quizzy */}
      <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:24}}>
        <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>i>0?i-1:deck.length-1);}}>{t("fc_previous",baseLang)}</button>
        <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>(i+1)%deck.length);}}>{t("fc_next",baseLang)}</button>
      </div>

      {/* Reshuffle */}
      {mode==="shuffle"&&<div style={{textAlign:"center",marginTop:14}}>
        <button onClick={()=>{setDeck(shuffle([...learnedWords]));setIdx(0);setFlipped(false);}} style={{background:"none",border:"none",color:"var(--blue)",fontSize:13,fontWeight:700,cursor:"pointer"}}>🔀 {t("fc_reshuffle",baseLang)}</button>
      </div>}
    </div>
  );
}

// ━━━━━━━━━━ QUIZ YOURSELF — Two modes: Lesson Review + Vocab Challenge ━━━━━━━━━━

function Quiz({lang,baseLang="en",user,addXp,learnWord,onPerfect,showToast}){
  const dk=document.documentElement.classList.contains("dark");
  const vocab=VOCAB[lang]||[];
  const allUnits=UNITS.filter(u=>u.lang===lang);
  const [qMode,setQMode]=useState("lesson");
  const [qs,setQs]=useState([]);
  const [qi,setQi]=useState(0);
  const [selOpt,setSelOpt]=useState(null);
  const [answered,setAnswered]=useState(false);
  const [score,setScore]=useState(0);
  const [done,setDone]=useState(false);
  const [started,setStarted]=useState(false);
  const [focusIdx,setFocusIdx]=useState(-1);
  const [showHint,setShowHint]=useState(false);
  const continueRef=useRef(null);
  const glass={backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)"};

  // ── Context-dependent question filter ──
  const isContextQ=(q)=>/\b(the story|in the story|the text|the passage|did it cost|what happened next)\b/i.test(q);

  // ── Harvest standalone quiz steps from completed lessons ──
  const harvestLessonQuestions=useCallback(()=>{
    const prog=user.progress?.lessons||{};
    const pool=[];
    for(const u of allUnits){
      for(const ls of (u.lessons||[])){
        const lk=`${lang}:${u.n}:${ls.id}`;
        if(!prog[lk]) continue;
        for(const st of (ls.steps||[])){
          // MC: only if self-contained (all 4 opts present, not context-dependent)
          if(st.type==="mc"&&st.q&&st.opts&&st.opts.length>=3&&st.ans&&!isContextQ(st.q)){
            pool.push({kind:"mc",q:st.q,opts:st.opts,ans:st.ans,hint:st.hint||"",src:`Unit ${u.n}, L${ls.id.replace(/.*l/,"")}`});
          }
          // Match pairs → "What does X mean?" with same-set distractors
          if(st.type==="match"&&st.pairs&&st.pairs.length>=3){
            for(const pair of st.pairs){
              const wrongs=st.pairs.filter(p=>p.en!==pair.en).map(p=>p.en);
              if(wrongs.length>=3){
                pool.push({kind:"mc",q:`What does "${pair.nl}" mean?`,opts:shuffle([pair.en,...shuffle(wrongs).slice(0,3)]),ans:pair.en,hint:"",src:`Unit ${u.n}, L${ls.id.replace(/.*l/,"")}`});
              }
            }
          }
        }
      }
    }
    return shuffle(pool).slice(0,12);
  },[lang,allUnits,user.progress]);

  // ── Generate vocab quiz with same-category distractors ──
  const harvestVocabQuestions=useCallback(()=>{
    const learned=vocab.filter(w=>user.lw.has(w.word));
    const pool=learned.length>=4?learned:vocab.slice(0,40);
    return shuffle(pool).slice(0,Math.min(10,pool.length)).map(item=>{
      // Distractors: same category first, then same level, then any
      const sameCat=pool.filter(v=>v.translation!==item.translation&&v.category===item.category);
      const sameLvl=pool.filter(v=>v.translation!==item.translation&&(v.level||"A1").substring(0,2)===(item.level||"A1").substring(0,2));
      const any=pool.filter(v=>v.translation!==item.translation);
      let wrongPool=sameCat.length>=3?sameCat:sameLvl.length>=3?sameLvl:any;
      const wrongs=shuffle(wrongPool).slice(0,3).map(w=>cap(w.translation));
      return{kind:"mc",q:cap(item.word),opts:shuffle([cap(item.translation),...wrongs]),ans:cap(item.translation),hint:item.phonetic||"",src:(item.level||"A1"),isVocab:true};
    });
  },[lang,vocab,user.lw]);

  const startQuiz=useCallback(()=>{
    const questions=qMode==="lesson"?harvestLessonQuestions():harvestVocabQuestions();
    if(questions.length===0){if(showToast)showToast("Complete some lessons first!","📚");return;}
    setQs(questions);setQi(0);setSelOpt(null);setAnswered(false);setScore(0);setDone(false);setStarted(true);setFocusIdx(-1);setShowHint(false);
  },[qMode,harvestLessonQuestions,harvestVocabQuestions,showToast]);

  // ── Keyboard navigation (matches lesson engine exactly) ──
  useEffect(()=>{
    const handler=e=>{
      // Block all keys (except Escape) when an overlay input is focused
      const inOverlay=document.activeElement?.closest('.vr-wrap,.sf-panel');
      if(inOverlay&&document.activeElement?.tagName==='INPUT'){
        if(e.key==='Escape')return; // let Escape through to close the overlay
        return;
      }
      // Start screen: Space starts quiz
      if(!started){
        if(e.key===" "){e.preventDefault();startQuiz();}
        return;
      }
      if(done){
        if(e.key===" "){e.preventDefault();startQuiz();}
        if(e.key==="Escape") setStarted(false);
        return;
      }
      if(e.key==="Escape"){setStarted(false);return;}
      // Ctrl+S dev-skip
      if(e.ctrlKey&&e.key==="s"){
        e.preventDefault();
        const q=qs[qi];if(!q) return;
        if(!answered){doAnswer(q.ans);}
        return;
      }
      const q=qs[qi];if(!q) return;
      const optCount=(q.opts||[]).length;
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&!answered){
        e.preventDefault();
        if(e.key==="ArrowRight"||e.key==="ArrowDown") setFocusIdx(i=>(i+1)%optCount);
        else setFocusIdx(i=>i<=0?optCount-1:i-1);
      }
      if(e.key===" "&&focusIdx>=0&&!answered){
        e.preventDefault();
        const opt=q.opts[focusIdx];
        if(opt) doAnswer(opt);
      }
    };
    window.addEventListener("keydown",handler,true);
    return ()=>window.removeEventListener("keydown",handler,true);
  },[started,done,qi,qs,focusIdx,answered,startQuiz]);

  const doAnswer=(opt)=>{
    if(answered) return;
    UISounds.tick();
    setSelOpt(opt);
    setAnswered(true);
    const ok=opt===qs[qi].ans;
    if(ok){setScore(s=>s+1);addXp(8);if(qs[qi].word)learnWord(qs[qi].word);}
  };

  const goNext=()=>{
    const ok=selOpt===qs[qi].ans;
    if(qi+1>=qs.length){
      setDone(true);
      const finalScore=score+(ok?1:0);
      if(finalScore===qs.length&&onPerfect)onPerfect();
      UISounds.celebrate();
    } else {
      setQi(i=>i+1);setSelOpt(null);setAnswered(false);setFocusIdx(-1);setShowHint(false);
    }
  };

  const lessonQCount=useMemo(()=>{
    const prog=user.progress?.lessons||{};
    let n=0;
    for(const u of allUnits) for(const ls of (u.lessons||[])){
      if(prog[`${lang}:${u.n}:${ls.id}`]) for(const st of (ls.steps||[])){
        if(st.type==="mc"&&!isContextQ(st.q||"")) n++;
        if(st.type==="match"&&st.pairs&&st.pairs.length>=3) n+=st.pairs.length;
      }
    }
    return n;
  },[lang,allUnits,user.progress]);

  // ── Progress bar (matches lesson engine) ──
  const ProgressBar=()=><div className="xpbar" style={{marginBottom:20,height:10}}>
    <div className="xpbar-fill" style={{width:`${qs.length>0?((qi)/qs.length)*100:0}%`,transition:"width 0.3s"}}/>
  </div>;

  // ── Start screen ──
  if(!started){
    const learnedCount=[...user.lw].length;
    const completedLessons=Object.keys(user.progress?.lessons||{}).length;
    return(
      <div className="anim" style={{textAlign:"center",paddingTop:24}}>
        <div style={{fontSize:48,marginBottom:16}}>✅</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>Quiz Yourself</h2>
        <p style={{color:"var(--gray-400)",fontSize:14,marginBottom:28,lineHeight:1.6}}>Test what you've learned. Pick your challenge.</p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:420,margin:"0 auto 28px"}}>
          {[
            {id:"lesson",label:"Lesson Review",desc:completedLessons>0?`${lessonQCount} questions from ${completedLessons} lessons`:"Complete lessons first",icon:"📚",disabled:completedLessons===0},
            {id:"vocab",label:"Vocab Challenge",desc:learnedCount>=4?`${learnedCount} words learned`:"Learn more words first",icon:"📖",disabled:learnedCount<4&&vocab.length<4},
          ].map(m=>{
            const active=qMode===m.id;
            const restShadow=active?"0 5px 16px rgba(85,53,181,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)";
            return <div key={m.id} onClick={()=>{if(!m.disabled)setQMode(m.id);}} style={{
              borderRadius:20,padding:"24px 16px",textAlign:"center",
              cursor:m.disabled?"default":"pointer",
              transition:"all .15s",position:"relative",overflow:"hidden",
              background:active?"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)":"linear-gradient(180deg, #FFFFFF, #f5f6fa)",
              border:"none",boxShadow:restShadow,
              opacity:m.disabled?0.4:1,
            }}>
              {active&&<div style={{position:"absolute",top:0,left:"4%",right:"4%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>}
              <div style={{fontSize:28,marginBottom:8,position:"relative",zIndex:2}}>{m.icon}</div>
              <div style={{fontSize:14,fontWeight:800,color:active?"white":"var(--gray-700)",marginBottom:4,position:"relative",zIndex:2,textShadow:active?"0 1px 3px rgba(0,0,0,0.25)":"none"}}>{m.label}</div>
              <div style={{fontSize:11,color:active?"rgba(255,255,255,0.65)":"var(--gray-400)",position:"relative",zIndex:2}}>{m.desc}</div>
            </div>;
          })}
        </div>

        <button onClick={startQuiz} style={{
          padding:"14px 40px",borderRadius:18,border:"none",cursor:"pointer",
          fontSize:16,fontWeight:800,color:"white",letterSpacing:0.3,
          background:"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)",
          boxShadow:"0 5px 16px rgba(46,205,158,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
          position:"relative",overflow:"hidden",transition:"all .15s",
        }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
           onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <span style={{position:"relative",zIndex:1}}>Start Quiz →</span>
        </button>
      </div>
    );
  }

  // ── Done screen ──
  if(done){
    const pct=qs.length>0?Math.round((score/qs.length)*100):0;
    return(
      <div className="anim" style={{textAlign:"center",paddingTop:40}}>
        <Confetti active={pct>=80}/>
        <div style={{fontSize:64,marginBottom:12}}>{pct===100?<AppIcon name="trophy" size={72}/>:pct>=80?<AppIcon name="star" size={72}/>:pct>=60?<AppIcon name="hand_wave" size={72}/>:<AppIcon name="books_stack" size={72}/>}</div>
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:8}}>{pct===100?"Perfect!":"Quiz Complete!"}</h2>
        <ScoreCircle percentage={pct} size={90}/>
        <p style={{fontSize:14,color:"var(--gray-400)",marginTop:12,marginBottom:4}}>{score}/{qs.length} correct</p>
        <p style={{color:"var(--gold)",fontSize:16,fontWeight:700,marginBottom:28}}>+{score*8} XP</p>
        <div style={{display:"flex",gap:12,justifyContent:"center"}}>
          <NavArrow onClick={()=>setStarted(false)} isBack size={48}/>
          <button onClick={startQuiz} style={{
            padding:"14px 32px",borderRadius:16,border:"none",cursor:"pointer",fontSize:15,fontWeight:800,color:"white",
            background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
            boxShadow:"0 4px 14px rgba(85,53,181,0.4), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.15)",
            position:"relative",overflow:"hidden",
          }}><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>Try Again</span></button>
        </div>
      </div>
    );
  }

  const q=qs[qi];
  if(!q) return null;

  // ── Active quiz — matches lesson engine MC renderer ──
  return(
    <div className="anim">
      {/* Back button */}
      <div style={{marginBottom:12}}>
        <NavArrow onClick={()=>setStarted(false)} isBack size={40}/>
      </div>

      {/* Header */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div>
          <h2 className="hd" style={{fontSize:18,fontWeight:800}}>{qMode==="lesson"?"Lesson Review":"Vocab Challenge"}</h2>
          <p style={{color:"var(--gray-400)",fontSize:12}}>{qi+1} / {qs.length}</p>
        </div>
        <span style={{padding:"6px 14px",borderRadius:12,background:dk?"rgba(46,205,158,0.15)":"rgba(46,205,158,0.08)",color:"var(--teal)",fontWeight:800,fontSize:13}}>{score}/{qi+(answered?1:0)}</span>
      </div>

      <ProgressBar/>

      {/* Source badge */}
      {q.src&&<div style={{textAlign:"center",marginBottom:10}}>
        <span style={{padding:"3px 10px",borderRadius:8,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.06)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{q.src}</span>
      </div>}

      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Question card — board style, matches lesson engine */}
        <div style={{background:"var(--card-bg)",borderRadius:20,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",padding:"22px 26px",marginBottom:18,textAlign:"center",...glass}}>
          {q.isVocab&&<div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:10,fontWeight:700}}>Translate this word</div>}
          <div className="hd" style={{fontSize:q.isVocab?28:19,fontWeight:q.isVocab?800:700,lineHeight:1.5,color:"var(--gray-800)"}}>{q.q}</div>
          {q.hint&&!showHint&&!answered&&<div style={{marginTop:8}}><button onClick={()=>setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&q.hint&&!answered&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4,display:"flex",alignItems:"flex-start",gap:6}}><AppIcon name="lightbulb" size={30}/><span>{q.hint}</span></div>}
        </div>

        {/* Options grid — uses .quiz-opt class */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {(q.opts||[]).slice(0,4).map((o,i)=>{
            let cls="quiz-opt";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(o===q.ans)cls+=" correct";else if(o===selOpt)cls+=" wrong";else cls+=" dis";}
            return <div key={i} className={cls} style={{...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>doAnswer(o)}><div className="quiz-letter">{"ABCD"[i]}</div>{o}</div>;
          })}
        </div>

        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select · Esc quit</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===q.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===q.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {q.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===q.ans} baseLang={baseLang} spaceRef={continueRef}/>}
      </div>
    </div>
  );
}


// ━━━━━━━━━━ AI CHAT (REAL CLAUDE-POWERED) ━━━━━━━━━━

function Chat({lang,baseLang="en",user,addXp,addChat,learnedWords}){
  const L=LANGUAGES.find(l=>l.code===lang);
  const [msgs,setMsgs]=useState([]);
  const [chatHistory,setChatHistory]=useState([]);
  const [input,setInput]=useState("");
  const [typing,setTyping]=useState(false);
  const [error,setError]=useState(null);
  const [userProfile,setUserProfile]=useState({name:"",interests:[],level:"beginner"});
  const endRef=useRef(null);
  const starters=CHAT_STARTERS[lang]||[];
  const knownWords=learnedWords||[];

  const buildSystemPrompt=()=>{
    const langName=L?.name||"the target language";
    const knownList=knownWords.length>0?knownWords.slice(-30).join(", "):"none yet";
    const profileInfo=userProfile.name?`The user's name is ${userProfile.name}.`:"";
    const levelMap={beginner:"A1-A2",intermediate:"B1-B2",advanced:"C1-C2"};
    return `You are Nova, a warm, encouraging AI language tutor specializing in ${langName} inside LingoVerse.

CORE BEHAVIOR:
- Primarily speak in ${langName} with helpful English translations
- Adapt complexity to: ${levelMap[userProfile.level]||"A1-A2 (beginner)"}
- After EVERY ${langName} message, include English translation in parentheses
- Gently correct grammar/vocabulary mistakes — be specific but encouraging
- Introduce 1-2 new words per exchange relevant to the topic
${profileInfo}
- Words already learned: ${knownList}

RESPONSE FORMAT (raw JSON only, no markdown):
{"message":"Your response mixing ${langName} with English help","hint":"One specific learning tip","newWords":["word1","word2"]}

PERSONALITY: Warm, patient, celebrates small wins. Keep responses concise (2-4 sentences max).
IMPORTANT: Respond ONLY with valid JSON.`;
  };

  useEffect(()=>{setMsgs([]);setChatHistory([]);setError(null);setTimeout(()=>callAI(null,true),300);},[lang]);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const callAI=async(userText,isGreeting=false)=>{
    setTyping(true);setError(null);
    const newHistory=[...chatHistory];
    if(userText) newHistory.push({role:"user",content:userText});
    const apiMessages=isGreeting?[{role:"user",content:`The user just opened ${L?.name} chat. Send a warm greeting in ${L?.name} (with English translation). Respond in JSON format only.`}]:newHistory;
    try{
      const response=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:buildSystemPrompt(),messages:apiMessages})});
      const data=await response.json();
      const rawText=data.content?.map(c=>c.text||"").join("")||"";
      let parsed;
      try{const cleaned=rawText.replace(/```json\s*|```\s*/g,"").trim();parsed=JSON.parse(cleaned);}catch(e){parsed={message:rawText,hint:null,newWords:[]};}
      const aiMsg={type:"ai",text:parsed.message||rawText,hint:parsed.hint||null,newWords:parsed.newWords||[]};
      setMsgs(m=>[...m,aiMsg]);
      if(!isGreeting){setChatHistory([...newHistory,{role:"assistant",content:rawText}]);}else{setChatHistory([{role:"assistant",content:rawText}]);}
      if(userText&&!userProfile.name){const nm=userText.match(/(?:my name is|i'm|i am|je m'appelle|ich heiße|me llamo|ik heet|меня зовут)\s+(\w+)/i);if(nm)setUserProfile(p=>({...p,name:nm[1]}));}
    }catch(err){
      console.error("Nova AI error:",err);
      setError("Nova had a moment — try again!");
      const fb=AI_RESP[lang];const r=fb?.r?.[Math.floor(Math.random()*(fb.r?.length||1))]||{t:"Let's keep practicing! 🌟",h:"Try again!"};
      setMsgs(m=>[...m,{type:"ai",text:r.t,hint:r.h}]);
    }
    setTyping(false);
  };

  const send=text=>{if(!text.trim()||typing)return;setMsgs(m=>[...m,{type:"user",text:text.trim()}]);setInput("");addXp(3);addChat();callAI(text.trim());};

  return(
    <div className="anim">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <div>
          <h2 className="hd" style={{fontSize:24,fontWeight:800,display:"flex",alignItems:"center",gap:8}}><AppIcon name="robot" size={28}/>Chat with Nova</h2>
          <p style={{color:"var(--gray-400)",fontSize:13}}>AI language partner · {L?.native} <CountryFlag code={lang} size={14}/> <span style={{marginLeft:6,color:"var(--purple-accent-text)",fontWeight:700,fontSize:11}}>POWERED BY CLAUDE</span></p>
        </div>
        <span className="badge badge-gold">+3 XP / msg</span>
      </div>

      <div style={{display:"flex",gap:6,marginBottom:14}}>
        {["beginner","intermediate","advanced"].map(lv=>(
          <button key={lv} className={`btn ${userProfile.level===lv?"btn-blue":"btn-outline"}`} style={{fontSize:11,padding:"5px 12px",textTransform:"capitalize"}} onClick={()=>setUserProfile(p=>({...p,level:lv}))}>
            {lv==="beginner"?"🌱":lv==="intermediate"?"🌿":"🌳"} {lv}
          </button>
        ))}
      </div>

      <div className="chat-wrap">
        <div className="chat-msgs">
          {msgs.length===0&&!typing&&(
            <div style={{textAlign:"center",padding:"36px 20px"}}>
              <div style={{marginBottom:10}}><AppIcon name="robot" size={52}/></div>
              <h3 className="hd" style={{fontWeight:700,marginBottom:6,fontSize:18}}>Meet Nova</h3>
              <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:18}}>Your AI tutor powered by Claude. Nova corrects mistakes and adapts to your level.</p>
              <div style={{display:"flex",flexDirection:"column",gap:6,maxWidth:300,margin:"0 auto"}}>
                {starters.map((s,i)=><div key={i} className="chat-starter" onClick={()=>send(s)}>{s}</div>)}
              </div>
            </div>
          )}
          {msgs.map((m,i)=>(
            <div key={i} style={{animation:"fadeUp 0.3s ease"}}>
              <div className={`chat-bub ${m.type==="ai"?"ai":"user"}`}>
                {m.type==="ai"&&<span style={{fontWeight:700,color:"var(--blue)"}}>Nova: </span>}{m.text}
              </div>
              {m.hint&&<div className="chat-hint"><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/> <strong>Tip:</strong> {m.hint}</div>}
              {m.newWords&&m.newWords.length>0&&(
                <div style={{display:"flex",gap:5,marginTop:5,flexWrap:"wrap"}}>
                  {m.newWords.map((w,j)=><span key={j} className="chat-nw">✨ {w}</span>)}
                </div>
              )}
            </div>
          ))}
          {typing&&(
            <div className="chat-bub ai" style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontWeight:700,color:"var(--blue)"}}>Nova</span>
              <span style={{color:"var(--gray-400)"}}>is thinking</span>
              <span style={{display:"inline-flex",gap:3}}>{[0,1,2].map(i=><span key={i} style={{width:5,height:5,borderRadius:"50%",background:"var(--blue)",animation:`pulse 1s infinite ${i*0.2}s`}}/>)}</span>
            </div>
          )}
          {error&&<div style={{textAlign:"center",color:"var(--coral)",fontSize:12,padding:6}}>{error}</div>}
          <div ref={endRef}/>
        </div>
        <div className="chat-bar">
          <input className="chat-input" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!typing&&send(input)} placeholder={`${t("le_type_in",baseLang)} ${L?.name||"any language"}...`} disabled={typing}/>
          <button className="btn btn-blue" onClick={()=>send(input)} disabled={typing} style={{opacity:typing?.5:1}}>{typing?"...":"Send"}</button>
        </div>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ GRAMMAR ━━━━━━━━━━

function GrammarPage({lang,baseLang="en"}){
  const [openLevel,setOpenLevel]=useState("A1");
  const [openRule,setOpenRule]=useState(null);
  
  // Comprehensive Dutch grammar — textbook order
  // A1: Pronouns → Verb conjugation basics → Zijn/hebben → Articles → Word order → Negation → Possessives → Questions
  // A2: Past tenses → Modal verbs → Separable verbs → Adjective endings → Reflexive verbs
  // B1+: Complex syntax, passive, etc.
  const DUTCH_GRAMMAR = {
    A1: [
      { title: "Personal Pronouns (Subject)", icon: "👤", explanation: "Before you can conjugate any verb, you need to know the pronouns. Dutch has formal and informal 'you' — this matters a lot socially!", rules: [
        "ik — I",
        "jij / je — you (informal, singular)",
        "u — you (formal, singular + plural)",
        "hij — he",
        "zij / ze — she",
        "het — it",
        "wij / we — we",
        "jullie — you (informal, plural)",
        "zij / ze — they (same as 'she'!)",
        "",
        "Short forms (je, ze, we) are used in casual speech.",
        "Long forms (jij, zij, wij) are used for emphasis or contrast.",
        "'U' is used for strangers, elderly, authority figures.",
        "'Jij/je' is used with friends, peers, children.",
      ], examples: [
        "Ik ben student. — I am a student.",
        "Jij bent mijn vriend. — You are my friend. (emphasis on YOU)",
        "Je bent mijn vriend. — You're my friend. (neutral)",
        "U bent heel aardig. — You are very kind. (formal)",
        "Zij is arts, hij is leraar. — She is a doctor, he is a teacher.",
        "Wij wonen in Nederland, zij wonen in België. — We live in NL, they live in Belgium.",
      ]},
      { title: "Object Pronouns (Me, You, Him...)", icon: "🎯", explanation: "Object pronouns are used after verbs and prepositions ('he sees ME', 'for HER'). Some are the same as subject pronouns, others change.", rules: [
        "mij / me — me",
        "jou / je — you (informal)",
        "u — you (formal, same as subject!)",
        "hem — him",
        "haar — her",
        "het — it (same as subject!)",
        "ons — us",
        "jullie — you all (same as subject!)",
        "hen / hun / ze — them",
        "",
        "Short forms (me, je, ze) are more common in speech.",
        "Long forms (mij, jou) are for emphasis: 'Ik bedoel JOU!' (I mean YOU!)",
      ], examples: [
        "Hij ziet mij. → Hij ziet me. — He sees me.",
        "Ik bel jou. → Ik bel je. — I call you.",
        "Zij helpt hem. — She helps him.",
        "Ik geef het aan haar. — I give it to her.",
        "Ze kennen ons. — They know us.",
      ]},
      { title: "How Dutch Verbs Work", icon: "⚙️", explanation: "This is the most important grammar page. Almost ALL Dutch verbs follow the same pattern. Learn this once, and you can conjugate hundreds of verbs.", rules: [
        "STEP 1: Start with the infinitive (always ends in *-en*): werken, lopen, spreken",
        "STEP 2: Remove *-en* to get the **STEM**: werk, loop, spreek",
        "",
        "CONJUGATION PATTERN:",
        "**ik** → stem (*ik werk*)",
        "**jij / je** → stem + **t** (*jij werkt*)",
        "**u** → stem + **t** (*u werkt*)",
        "**hij / zij / het** → stem + **t** (*hij werkt*)",
        "**wij / we** → infinitive (*wij werken*)",
        "**jullie** → infinitive (*jullie werken*)",
        "**zij** (they) → infinitive (*zij werken*)",
        "",
        "⚠️ SPECIAL RULE: When **jij/je** comes *AFTER* the verb (in questions), drop the **-t**!",
        "*Jij werkt hier.* → **Werk jij hier?** (NOT: Werkt jij hier?)",
      ], examples: [
        "WERKEN (to work): ik werk, jij werkt, hij werkt, wij werken",
        "WONEN (to live): ik woon, jij woont, hij woont, wij wonen",
        "LEREN (to learn): ik leer, jij leert, hij leert, wij leren",
        "Jij woont in Amsterdam. — You live in Amsterdam.",
        "Woon jij in Amsterdam? — Do you live in Amsterdam? (jij after verb → no -t!)",
      ]},
      { title: "Spelling Rules for Stems", icon: "✏️", explanation: "When you remove -en from the infinitive, sometimes the spelling changes to keep the same vowel sound. These rules are predictable and consistent.", rules: [
        "RULE 1 — Double vowel becomes single in closed syllable:",
        "  lopen → l**oo**p (NOT l*o*p) — keep the *oo* sound",
        "  lezen → l**ee**s (NOT l*e*z) — keep the *ee* sound",
        "  kopen → k**oo**p — keep the *oo* sound",
        "",
        "RULE 2 — Single consonant doubles to keep vowel short:",
        "  pa**kk**en → pa**k** (the *kk* already makes it short)",
        "  zi**tt**en → zi**t** (the *tt* already makes it short)",
        "",
        "RULE 3 — **V** at end of stem becomes **F**, **Z** becomes **S**:",
        "  le**v**en → lee**f** (NOT leev) — Dutch words don't end in *v*",
        "  rei**z**en → rei**s** (NOT reiz) — Dutch words don't end in *z*",
        "  schrij**v**en → schrij**f** — v becomes f",
      ], examples: [
        "lopen (to walk): ik loop, jij loopt, wij lopen",
        "lezen (to read): ik lees, jij leest, wij lezen",
        "schrijven (to write): ik schrijf, jij schrijft, wij schrijven",
        "leven (to live/be alive): ik leef, jij leeft, wij leven",
        "zitten (to sit): ik zit, jij zit(+t=zit), wij zitten",
      ]},
      { title: "Zijn & Hebben (Irregular)", icon: "⭐", explanation: "The two most important verbs in Dutch are irregular — they don't follow the normal pattern. You must memorize them. They're also used as helping verbs for past tenses.", rules: [
        "ZIJN (to be):",
        "  ik ben — I am",
        "  jij bent / je bent — you are (informal)",
        "  u bent — you are (formal)",
        "  hij / zij / het is — he / she / it is",
        "  wij / we zijn — we are",
        "  jullie zijn — you all are",
        "  zij / ze zijn — they are",
        "",
        "HEBBEN (to have):",
        "  ik heb — I have",
        "  jij hebt / je hebt — you have",
        "  u heeft / u hebt — you have (formal)",
        "  hij / zij / het heeft — he / she / it has",
        "  wij / we hebben — we have",
        "  jullie hebben — you all have",
        "  zij / ze hebben — they have",
        "",
        "⚠️ Inversion: 'Ben jij...?' (drops -t), 'Heb jij...?' (drops -t)",
      ], examples: [
        "Ik ben moe. — I am tired.",
        "Ben jij klaar? — Are you ready? (NOT: Bent jij)",
        "Hij is mijn broer. — He is my brother.",
        "Wij zijn studenten. — We are students.",
        "Ik heb een hond. — I have a dog.",
        "Heb jij een fiets? — Do you have a bike? (NOT: Hebt jij)",
        "Zij hebben twee kinderen. — They have two children.",
      ]},
      { title: "Other Irregular Verbs", icon: "🔀", explanation: "A handful of very common verbs are irregular in the present tense. Here are the ones you'll encounter most often.", rules: [
        "GAAN (to go): ik ga, jij gaat, hij gaat, wij gaan",
        "STAAN (to stand): ik sta, jij staat, hij staat, wij staan",
        "SLAAN (to hit): ik sla, jij slaat, hij slaat, wij slaan",
        "DOEN (to do): ik doe, jij doet, hij doet, wij doen",
        "ZIEN (to see): ik zie, jij ziet, hij ziet, wij zien",
        "KOMEN (to come): ik kom, jij komt, hij komt, wij komen (regular in present!)",
        "",
        "WILLEN (to want): ik wil, jij wilt, hij wil, wij willen",
        "KUNNEN (to be able): ik kan, jij kunt/kan, hij kan, wij kunnen",
        "MOGEN (to be allowed): ik mag, jij mag, hij mag, wij mogen",
        "MOETEN (to have to): ik moet, jij moet, hij moet, wij moeten",
        "ZULLEN (shall/will): ik zal, jij zult/zal, hij zal, wij zullen",
      ], examples: [
        "Ik ga naar huis. — I go home.",
        "Wat doe jij? — What are you doing?",
        "Ik wil koffie. — I want coffee.",
        "Kan jij zwemmen? — Can you swim?",
        "Je mag niet roken. — You may not smoke.",
        "Ik moet werken. — I have to work.",
      ]},
      { title: "Articles: De vs Het", icon: "📝", explanation: "Dutch has two definite articles: 'de' (common gender, ~75% of nouns) and 'het' (neuter gender, ~25%). There is no reliable rule — you must memorize which one goes with each noun. But there ARE helpful patterns.", rules: [
        "De → common gender (de man, de vrouw, de tafel, de school)",
        "Het → neuter gender (het huis, het kind, het boek, het water)",
        "Een → indefinite article, always the same (een man, een huis)",
        "",
        "HELPFUL PATTERNS — 'het' words:",
        "  Diminutives (-je, -tje, -pje, -etje) → always het (het meisje, het huisje)",
        "  Verbs used as nouns → always het (het eten, het lezen, het zwemmen)",
        "  Languages/sports → usually het (het Nederlands, het voetbal)",
        "  Metals → usually het (het goud, het zilver)",
        "",
        "HELPFUL PATTERNS — 'de' words:",
        "  ALL plurals → always de (de huizen, de kinderen, de boeken)",
        "  People with gender → usually de (de man, de vrouw, de leraar)",
        "  -heid, -keit, -ing, -tie endings → always de (de vrijheid, de mogelijkheid)",
      ], examples: [
        "De man is groot. — The man is tall.",
        "Het huis is mooi. — The house is beautiful.",
        "Het meisje speelt. — The girl plays. (diminutive → het!)",
        "De huizen zijn duur. — The houses are expensive. (plural → de!)",
      ]},
      { title: "Word Order: The V2 Rule", icon: "🔢", explanation: "The single most important syntax rule in Dutch: the conjugated verb is ALWAYS in position 2 in main clauses. If anything other than the subject starts the sentence, subject and verb swap.", rules: [
        "NORMAL: **Subject** (pos 1) + **Verb** (pos 2) + Rest",
        "  *Ik* **werk** morgen. — I work tomorrow.",
        "",
        "INVERSION: **Other element** (pos 1) + **Verb** (pos 2) + *Subject* + Rest",
        "  Morgen **werk** *ik*. — Tomorrow I work.",
        "  Vandaag **ga** *ik* niet. — Today I don't go.",
        "",
        "The verb **ALWAYS** stays in position 2:",
        "  Nu **ben** *ik* moe. — Now I am tired.",
        "  In Amsterdam **woon** *ik*. — In Amsterdam I live.",
        "",
        "This applies to **ALL** main clauses, no exceptions.",
      ], examples: [
        "Ik ga morgen naar school. — I go to school tomorrow.",
        "Morgen ga ik naar school. — Tomorrow I go to school. (inversion!)",
        "Vandaag werk ik niet. — Today I don't work. (inversion!)",
        "Soms eet hij in een restaurant. — Sometimes he eats at a restaurant.",
      ]},
      { title: "Negation: Niet & Geen", icon: "🚫", explanation: "Two ways to negate in Dutch. 'Niet' negates verbs, adjectives, and specific nouns. 'Geen' replaces 'een' (a/an) and negates uncountable nouns.", rules: [
        "**NIET** — negates verbs, adjectives, de/het nouns:",
        "  Ik werk **niet**. — I don't work.",
        "  Het is **niet** groot. — It is not big.",
        "  Ik ken de man **niet**. — I don't know the man.",
        "",
        "**GEEN** — replaces *een*, negates uncountable nouns:",
        "  Ik heb *een* auto → Ik heb **geen** auto. — I don't have a car.",
        "  Er is **geen** water. — There is no water.",
        "  Ik heb **geen** geld. — I have no money.",
        "",
        "POSITION OF **NIET**:",
        "  After the object: Ik ken hem **niet**.",
        "  Before adjectives: Het is **niet** mooi.",
        "  Before prepositional phrases: Ik ga **niet** naar huis.",
        "  At the end if no specific target: Ik werk **niet**.",
      ], examples: [
        "Ik spreek niet goed Nederlands. — I don't speak Dutch well.",
        "Ik heb geen geld. — I have no money.",
        "Het is niet warm vandaag. — It is not warm today.",
        "Er zijn geen stoelen. — There are no chairs.",
      ]},
      { title: "Possessive Pronouns", icon: "🏷️", explanation: "Show ownership: my, your, his, her, etc. Most are simple, but 'ons/onze' changes based on the noun's gender.", rules: [
        "mijn — my (mijn huis, mijn auto)",
        "jouw / je — your, informal (jouw boek, je fiets)",
        "uw — your, formal (uw naam, uw adres)",
        "zijn — his (zijn vader, zijn werk)",
        "haar — her (haar moeder, haar school)",
        "ons — our + het-word (ons huis, ons kind)",
        "onze — our + de-word/plural (onze auto, onze kinderen)",
        "hun — their (hun ouders, hun huis)",
        "",
        "⚠️ Ons vs onze is the ONLY possessive that changes:",
        "  Ons huis (het huis → ons)",
        "  Onze auto (de auto → onze)",
        "  Onze kinderen (plural → onze)",
      ], examples: [
        "Mijn naam is Anna. — My name is Anna.",
        "Wat is jouw telefoonnummer? — What is your phone number?",
        "Zijn vader is arts. — His father is a doctor.",
        "Ons huis is groot. — Our house is big. (het-word → ons)",
        "Onze kinderen gaan naar school. — Our children go to school. (plural → onze)",
      ]},
      { title: "Asking Questions", icon: "❓", explanation: "Two types: yes/no questions (verb first) and information questions (question word first, verb second).", rules: [
        "YES/NO QUESTIONS — put verb in position 1:",
        "  Jij werkt hier. → Werk jij hier? — Do you work here?",
        "  Hij spreekt Nederlands. → Spreekt hij Nederlands?",
        "",
        "INFORMATION QUESTIONS — question word pos 1, verb pos 2:",
        "  Wie — who (Wie is dat?)",
        "  Wat — what (Wat doe je?)",
        "  Waar — where (Waar woon je?)",
        "  Wanneer — when (Wanneer kom je?)",
        "  Waarom — why (Waarom niet?)",
        "  Hoe — how (Hoe gaat het?)",
        "  Hoeveel — how much/many (Hoeveel kost dit?)",
        "  Welk/welke — which (Welke kleur?)",
        "",
        "Remember: the jij-t rule applies in questions too!",
        "Jij werkt → Werk jij? (NOT Werkt jij?)",
      ], examples: [
        "Spreek je Nederlands? — Do you speak Dutch?",
        "Waar woon je? — Where do you live?",
        "Hoeveel kost dit? — How much does this cost?",
        "Wanneer begint de les? — When does the class start?",
      ]},
    ],
    A2: [
      { title: "Perfect Tense (VTT)", icon: "✅", explanation: "The most common past tense in spoken Dutch. 'I have worked' / 'I worked'. Formed with hebben or zijn + past participle. The participle goes to the END of the sentence.", rules: [
        "STRUCTURE: **hebben/zijn** (pos 2) + ... + **past participle** (END)",
        "",
        "PAST PARTICIPLE — weak (regular) verbs:",
        "  **ge** + *stem* + **t/d**",
        "  Use **'T KoFSCHiP** to decide **-t** or **-d** (see next topic)",
        "",
        "PAST PARTICIPLE — strong (irregular) verbs:",
        "  **ge** + *vowel change* + **en**",
        "  These must be memorized (like English: go→gone, see→seen)",
        "",
        "WHEN TO USE **ZIJN** INSTEAD OF **HEBBEN**:",
        "  Verbs of *MOVEMENT* to a destination: gaan, komen, vertrekken, rijden",
        "  Verbs of *STATE CHANGE*: worden, groeien, sterven, beginnen",
        "  *zijn, blijven, gebeuren*",
        "  All other verbs use **hebben**",
      ], examples: [
        "Ik heb gewerkt. — I have worked / I worked.",
        "Zij is gegaan. — She has gone / She went. (motion → zijn)",
        "Wij hebben gegeten. — We have eaten / We ate.",
        "Hij is gekomen. — He has come / He came. (motion → zijn)",
        "Het is gebeurd. — It has happened. (zijn verb)",
      ]},
      { title: "'t Kofschip Rule", icon: "🚢", explanation: "This famous mnemonic helps you decide if a past participle ends in -t or -d. The name itself is a word: 't kofschip means 'het kofschip' — the cargo ship. The 't is short for 'het' (just like in spoken Dutch). Each consonant in the word tells you which stems get a -t ending.", rules: [
        "THE MNEMONIC: **'T K o F S CH i P**",
        "The letters that matter: **T, K, F, S, CH, P**",
        "(The vowels 'o' and 'i' are just there to make it a pronounceable word)",
        "",
        "*'t = het* → 'het kofschip' = the cargo ship 🚢",
        "If the **LAST letter** of the stem is **T, K, F, S, CH, or P** → ending is **-t**",
        "If the last letter is anything else → ending is **-d**",
        "",
        "STEMS ENDING IN A KOFSCHIP LETTER → **-t**:",
        "  werken → stem *werk* (**K** ✓) → ge**werk****t**",
        "  fietsen → stem *fiets* (**S** ✓) → ge**fiets****t**",
        "  koken → stem *kook* (**K** ✓) → ge**kook****t**",
        "  stoppen → stem *stop* (**P** ✓) → ge**stop****t**",
        "",
        "STEMS NOT IN KOFSCHIP → **-d**:",
        "  leren → stem *leer* (R ✗) → ge**leer****d**",
        "  wonen → stem *woon* (N ✗) → ge**woon****d**",
        "  bouwen → stem *bouw* (W ✗) → ge**bouw****d**",
        "",
        "REMEMBER: **v→f** and **z→s** in stems (Dutch words don't end in v or z):",
        "  leven → stem *leef* (**F** ✓) → geleefd — F is in kofschip!",
        "  reizen → stem *reis* (**S** ✓) → gereisd",
        "",
        "**NO ge- PREFIX** for verbs starting with *be-, ver-, ont-, ge-, her-, er-*:",
        "  betalen → betaald (NOT: gebetaald)",
        "  vertellen → verteld (NOT: geverteld)",
      ], examples: [
        "fietsen → gefietst (stem 'fiets', S is in 'T KoFSCHiP' → -t)",
        "werken → gewerkt (stem 'werk', K is in 'T KoFSCHiP' → -t)",
        "leven → geleefd (stem 'leef', F is in 'T KoFSCHiP' → -t!)",
        "bouwen → gebouwd (stem 'bouw', W is NOT in 'T KoFSCHiP' → -d)",
        "leren → geleerd (stem 'leer', R is NOT in 'T KoFSCHiP' → -d)",
        "betalen → betaald (no ge- prefix because of be-, L → -d)",
      ]},
      { title: "Simple Past Tense (OVT)", icon: "📜", explanation: "Used in stories, writing, and formal speech. More literary than the perfect tense. Weak verbs: stem + te(n)/de(n). Strong verbs: vowel changes.", rules: [
        "WEAK VERBS — use 'T KoFSCHiP again:",
        "  'T KoFSCHiP letters → stem + te (singular), stem + ten (plural)",
        "  Other letters → stem + de (singular), stem + den (plural)",
        "",
        "  werken: ik werkte, wij werkten",
        "  leren: ik leerde, wij leerden",
        "  wonen: ik woonde, wij woonden",
        "",
        "STRONG VERBS — vowel changes (memorize!):",
        "  gaan → ging / gingen",
        "  komen → kwam / kwamen",
        "  zien → zag / zagen",
        "  zijn → was / waren",
        "  hebben → had / hadden",
        "  schrijven → schreef / schreven",
        "",
        "In spoken Dutch, the perfect tense is used much more.",
        "The simple past is mainly for writing, stories, and news.",
      ], examples: [
        "Ik werkte gisteren. — I worked yesterday.",
        "Zij woonden in Rotterdam. — They lived in Rotterdam.",
        "Hij ging naar huis. — He went home.",
        "Wij waren moe. — We were tired.",
        "Zij had een kat. — She had a cat.",
      ]},
      { title: "Modal Verbs", icon: "💪", explanation: "Express ability, permission, obligation, or desire. The modal verb is conjugated in position 2; the main verb goes to the END as an infinitive.", rules: [
        "KUNNEN — can / to be able to (ik kan, jij kunt/kan, hij kan, wij kunnen)",
        "MOGEN — may / to be allowed to (ik mag, jij mag, hij mag, wij mogen)",
        "MOETEN — must / to have to (ik moet, jij moet, hij moet, wij moeten)",
        "WILLEN — to want (ik wil, jij wilt, hij wil, wij willen)",
        "ZULLEN — shall / will (ik zal, jij zult/zal, hij zal, wij zullen)",
        "",
        "STRUCTURE: subject + modal (conjugated) + ... + infinitive (END)",
        "  Ik kan zwemmen. — I can swim.",
        "  Wij moeten nu gaan. — We have to go now.",
        "",
        "WILLEN + GRAAG = polite 'would like':",
        "  Ik wil graag een koffie. — I would like a coffee.",
      ], examples: [
        "Ik kan goed zwemmen. — I can swim well.",
        "Je mag hier niet roken. — You may not smoke here.",
        "Wij moeten om acht uur vertrekken. — We have to leave at eight.",
        "Ik wil graag bestellen. — I would like to order.",
        "Zal ik je helpen? — Shall I help you?",
      ]},
      { title: "Separable Verbs", icon: "✂️", explanation: "Many Dutch verbs have a prefix (op, aan, af, uit, mee, etc.) that SEPARATES from the verb in main clauses and goes to the END.", rules: [
        "MAIN CLAUSE — prefix separates to end:",
        "  [op]bellen → Ik bel je **[op]**. — I call you.",
        "  [op]staan → Ik sta om 7 uur **[op]**. — I get up at 7.",
        "  [mee]gaan → Ga je **[mee]**? — Are you coming along?",
        "",
        "SUBORDINATE CLAUSE — stays together:",
        "  ...omdat ik je **[op]bel**. — ...because I call you.",
        "",
        "PERFECT TENSE — *ge-* goes BETWEEN prefix and stem:",
        "  [op]bellen → **[op]**ge**beld**",
        "  [aan]komen → **[aan]**ge**komen**",
        "  [mee]nemen → **[mee]**ge**nomen**",
        "",
        "COMMON SEPARABLE PREFIXES:",
        "  [op] (up), [aan] (on), [af] (off), [uit] (out), [mee] (along),",
        "  [bij] (with), [om] (around), [terug] (back), [thuis] (home), [weg] (away)",
      ], examples: [
        "Ik sta om 7 uur op. — I get up at 7. (opstaan)",
        "Hij komt morgen aan. — He arrives tomorrow. (aankomen)",
        "We gaan om 8 uur weg. — We leave at 8. (weggaan)",
        "Ik ruim mijn kamer op. — I tidy my room. (opruimen)",
        "Ga je mee naar de film? — Are you coming along to the movie?",
      ]},
      { title: "Adjective Endings", icon: "🎨", explanation: "Dutch adjectives usually get an -e ending before nouns. There is ONE famous exception: no -e with 'een' + het-word + singular.", rules: [
        "RULE: Add **-e** before the noun in most cases.",
        "",
        "**De-words**: ALWAYS **-e**",
        "  de *grote* man — the big man",
        "  een *grote* man — a big man",
        "",
        "**Het-words** with de/het: **-e**",
        "  het *grote* huis — the big house",
        "",
        "**Het-words** with een: **NO -e!** ⚠️",
        "  een *groot* huis — a big house (**NO** -e!)",
        "",
        "After the verb (predicative): **NO ending**",
        "  Het huis is *groot*. — The house is big.",
        "",
        "SUMMARY TABLE:",
        "  **de** + adj + de-noun → *grote* (de grote man)",
        "  **een** + adj + de-noun → *grote* (een grote man)",
        "  **het** + adj + het-noun → *grote* (het grote huis)",
        "  **een** + adj + het-noun → *groot* (een groot huis) ← **THE EXCEPTION**",
      ], examples: [
        "De grote man. — The big man. (de-word → always -e)",
        "Het grote huis. — The big house. (het + definite → -e)",
        "Een groot huis. — A big house. (een + het-word → NO -e!)",
        "Een grote man. — A big man. (een + de-word → -e)",
        "Het huis is groot. — The house is big. (predicative → no ending)",
      ]},
      { title: "Reflexive Verbs", icon: "🪞", explanation: "Some verbs need a reflexive pronoun (myself, yourself, etc.). The pronoun changes based on the subject.", rules: [
        "REFLEXIVE PRONOUNS:",
        "  ik → me / mij",
        "  jij → je",
        "  u → zich (formal)",
        "  hij / zij / het → zich",
        "  wij → ons",
        "  jullie → je",
        "  zij (they) → zich",
        "",
        "COMMON REFLEXIVE VERBS:",
        "  zich wassen — to wash oneself",
        "  zich voelen — to feel",
        "  zich vergissen — to be mistaken",
        "  zich aankleden — to get dressed",
        "  zich herinneren — to remember",
      ], examples: [
        "Ik was me. — I wash myself.",
        "Hij voelt zich goed. — He feels good.",
        "Wij vergissen ons. — We are mistaken.",
        "Zij kleedt zich aan. — She gets dressed.",
        "Herinner je je dat? — Do you remember that?",
      ]},
    ],
    B1: [
      { title: "Subordinate Clause Word Order", icon: "🔗", explanation: "After subordinating conjunctions, the conjugated verb goes to the END. This is one of the biggest word order shifts in Dutch.", rules: [
        "CONJUNCTIONS: dat, omdat, als, wanneer, hoewel, nadat, voordat, toen, terwijl, zodat, tenzij, of",
        "",
        "Main clause: verb in position 2",
        "  Ik denk + hij is ziek → standard",
        "",
        "Subordinate clause: verb to END",
        "  Ik denk dat hij ziek is. — I think that he is sick.",
        "  Omdat het regent, blijf ik thuis. — Because it rains, I stay home.",
        "",
        "If subordinate clause comes FIRST:",
        "  The main clause INVERTS (verb-subject)",
        "  Omdat het regent, BLIJF IK thuis. (not: ik blijf)",
      ], examples: [
        "Ik denk dat hij ziek is. — I think that he is sick.",
        "Omdat het regent, blijf ik thuis. — Because it's raining, I stay home.",
        "Ik weet niet wanneer hij komt. — I don't know when he's coming.",
        "Als je wilt, kunnen we gaan. — If you want, we can go.",
      ]},
      { title: "Relative Clauses (die/dat)", icon: "🔄", explanation: "'Die' and 'dat' connect a description to a noun. 'Die' for de-words and ALL plurals. 'Dat' for het-words singular only.", rules: [
        "De-words → die (de man die daar staat)",
        "Het-words singular → dat (het boek dat ik lees)",
        "ALL plurals → die (de kinderen die spelen)",
        "",
        "After prepositions:",
        "  People → wie (de man met wie ik sprak)",
        "  Things → waar + preposition (het boek waarover ik sprak)",
      ], examples: [
        "De man die daar staat, is mijn vader. — The man who stands there is my father.",
        "Het boek dat ik lees, is goed. — The book that I read is good.",
        "De mensen die hier wonen, zijn aardig. — The people who live here are nice.",
      ]},
      { title: "Passive Voice", icon: "🔀", explanation: "Two forms: 'worden' + participle (process/action), 'zijn' + participle (completed state).", rules: [
        "Action: worden + past participle",
        "State: zijn + past participle",
        "Agent: door (by)",
        "Impersonal passive: Er wordt + participle (very Dutch!)",
      ], examples: [
        "Het huis wordt gebouwd. — The house is being built.",
        "Het huis is gebouwd. — The house has been built.",
        "Er wordt hier veel gewerkt. — A lot of work is done here.",
      ]},
      { title: "Comparatives & Superlatives", icon: "📊", explanation: "Comparative: adjective + -er (+ dan). Superlative: het + adjective + -st(e).", rules: [
        "Comparative: adj + -er + dan",
        "Superlative: het + adj + -st(e)",
        "",
        "IRREGULAR:",
        "  goed → beter → best (good → better → best)",
        "  veel → meer → meest (much → more → most)",
        "  weinig → minder → minst (little → less → least)",
        "  graag → liever → liefst (gladly → rather → most gladly)",
      ], examples: [
        "Amsterdam is groter dan Utrecht. — Amsterdam is bigger than Utrecht.",
        "Dit is het beste restaurant. — This is the best restaurant.",
        "Ik drink liever thee. — I prefer to drink tea.",
      ]},
      { title: "Er (5 Uses)", icon: "📍", explanation: "'Er' is one of the trickiest Dutch words with 5 distinct uses. It roughly translates as 'there' or 'it'.", rules: [
        "1. EXISTENTIAL: Er zijn veel mensen. (There are many people)",
        "2. LOCATIVE: Ik ben er geweest. (I have been there)",
        "3. PREPOSITIONAL: Ik denk eraan. (I think about it)",
        "4. PARTITIVE: Ik heb er drie. (I have three of them)",
        "5. PASSIVE FILLER: Er wordt gedanst. (There is dancing)",
      ], examples: [
        "Er is geen melk meer. — There is no more milk.",
        "Ik heb er vijf. — I have five of them.",
        "Ik kijk ernaar. — I look at it.",
      ]},
      { title: "Om...Te + Infinitive", icon: "🎯", explanation: "Express purpose ('in order to'). Also used after certain adjectives and verbs.", rules: [
        "Purpose: om + te + infinitive (at end)",
        "After adjectives: moeilijk om te..., leuk om te...",
        "Separable verbs: prefix + te + stem (om op te staan)",
      ], examples: [
        "Ik ga naar de winkel om brood te kopen. — I go to the store to buy bread.",
        "Het is moeilijk om Nederlands te leren. — It's hard to learn Dutch.",
        "Hij probeert om op tijd te komen. — He tries to arrive on time.",
      ]},
    ],
    B2: [
      { title: "Double Infinitive", icon: "🔁", explanation: "When a modal verb is in the perfect tense, the past participle becomes an infinitive — creating two infinitives at the end.", rules: [
        "Normal: Ik heb gewerkt.",
        "With modal: Ik heb moeten werken. (NOT: gemoeten)",
        "Always: hebben + infinitive + infinitive",
        "Applies to: kunnen, moeten, willen, mogen, zullen, laten",
      ], examples: [
        "Ik heb kunnen komen. — I was able to come.",
        "Zij heeft moeten werken. — She had to work.",
        "Wij hebben het laten repareren. — We had it repaired.",
      ]},
      { title: "Indirect Speech", icon: "💬", explanation: "Reporting what someone said. Tense shifts back, use 'dat' clause.", rules: [
        "Direct: Hij zei: 'Ik ben ziek.'",
        "Indirect: Hij zei dat hij ziek was.",
        "Present → Past (ben → was, heb → had)",
        "Future → Conditional (zal → zou)",
      ], examples: [
        "Hij zei dat hij ziek was. — He said he was sick.",
        "Zij vertelde dat ze zou komen. — She said she would come.",
      ]},
      { title: "Er + Preposition (Pronominal Adverbs)", icon: "🔗", explanation: "For THINGS (not people), replace 'preposition + pronoun' with 'er + preposition'.", rules: [
        "Things: preposition + het → er + preposition",
        "  Ik denk aan het boek → Ik denk eraan.",
        "People: keep preposition + pronoun!",
        "  Ik denk aan haar → stays: Ik denk aan haar.",
        "Questions: waar + preposition",
        "  Waaraan denk je? — What are you thinking about?",
      ], examples: [
        "Ik wacht erop. — I wait for it.",
        "Ik denk eraan. — I think about it.",
        "Waar kijk je naar? — What are you looking at?",
      ]},
    ],
    C1: [
      { title: "Extended Attributive Constructions", icon: "📄", explanation: "Long modifier chains before the noun — common in written/formal Dutch.", rules: [
        "All modifiers go BEFORE the noun",
        "Past participles as adjectives: de door de regering aangekondigde maatregelen",
        "Present participles: de snel groeiende economie",
      ], examples: [
        "De door de regering aangekondigde maatregelen. — The measures announced by the government.",
        "Het in 2024 gepubliceerde rapport. — The report published in 2024.",
      ]},
      { title: "Formal Register", icon: "🏛️", explanation: "Official Dutch uses specific constructions that differ from everyday speech.", rules: [
        "'Dient te' instead of 'moet' (should/must)",
        "'Wordt verzocht' (is requested)",
        "Heavy passive voice, 'men' as impersonal subject",
      ], examples: [
        "U wordt verzocht plaats te nemen. — You are requested to sit down.",
        "Men dient rekening te houden met... — One should take into account...",
      ]},
      { title: "Cleft Sentences & Emphasis", icon: "💡", explanation: "Emphasize a part using 'Het is/was... die/dat...'", rules: [
        "Het is + emphasized element + die/dat + rest",
        "Use 'die' for people, 'dat' for things/actions",
      ], examples: [
        "Het is Jan die dat heeft gedaan. — It is Jan who did that.",
        "Het was gisteren dat ik het hoorde. — It was yesterday that I heard it.",
      ]},
    ],
    C2: [
      { title: "Literary & Archaic Forms", icon: "📚", explanation: "Found in literature, proverbs, and very formal texts.", rules: [
        "Des (genitive masculine): des morgens, des te beter",
        "Dezer/diens (demonstrative genitive)",
        "'s (reduced genitive): 's morgens, 's avonds, 's lands",
        "Subjunctive remnants: Leve de koning! Het zij zo.",
      ], examples: [
        "'s Morgens drink ik koffie. — In the morning I drink coffee.",
        "Des te beter! — All the better!",
        "Leve de koning! — Long live the king!",
      ]},
      { title: "Complex Embedding", icon: "🧩", explanation: "Multiple levels of subordination with correct verb placement. The hallmark of advanced Dutch.", rules: [
        "Each subordinate clause pushes verbs to its own end",
        "Multiple 'dat' clauses can nest",
        "Verb clusters at the end of deeply nested clauses",
      ], examples: [
        "Hij zei dat hij dacht dat zij zou komen. — He said that he thought that she would come.",
        "Het feit dat hij beweerde dat het waar was... — The fact that he claimed it was true...",
      ]},
    ],
  };

  const levels=["A1","A2","B1","B2","C1","C2"];
  const levelNames={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang),C1:t("level_advanced",baseLang),C2:t("level_mastery",baseLang)};
  const levelColors={A1:"var(--teal)",A2:"var(--blue)",B1:"var(--gold)",B2:"#7B5EE8",C1:"var(--coral)",C2:"var(--gray-600)"};
  const rules=DUTCH_GRAMMAR[openLevel]||[];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:36,marginBottom:8}}>📝</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* Level tabs */}
      <div style={{display:"flex",gap:4,marginBottom:24,justifyContent:"center",flexWrap:"wrap"}}>
        {levels.map(lv=>(
          <button key={lv} onClick={()=>{setOpenLevel(lv);setOpenRule(null);}} style={{padding:"8px 16px",borderRadius:14,border:`2px solid ${openLevel===lv?levelColors[lv]:"var(--gray-200)"}`,background:openLevel===lv?levelColors[lv]:"white",color:openLevel===lv?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>
            {lv}
          </button>
        ))}
      </div>

      <div style={{textAlign:"center",marginBottom:20}}>
        <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600}}>{levelNames[openLevel]} · {rules.length} topics</span>
      </div>

      {/* Grammar rules — expandable textbook cards */}
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {rules.map((r,i)=>{
          const isOpen=openRule===i;
          return(
            <div key={i} className="anim" style={{animationDelay:`${i*0.04}s`,background:"var(--card-bg)",borderRadius:20,border:`2px solid ${isOpen?levelColors[openLevel]:"var(--gray-100)"}`,overflow:"hidden",boxShadow:isOpen?"0 6px 20px rgba(0,0,0,0.06)":"0 2px 8px rgba(0,0,0,0.02)",transition:"all .2s"}}>
              {/* Header — always visible */}
              <div onClick={()=>setOpenRule(isOpen?null:i)} style={{display:"flex",alignItems:"center",gap:14,padding:"16px 20px",cursor:"pointer"}}>
                <div style={{width:40,height:40,borderRadius:12,background:`${levelColors[openLevel]}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><BrandIcon name={r.icon} size={20}/></div>
                <div style={{flex:1}}>
                  <div className="hd" style={{fontWeight:700,fontSize:15,color:"var(--gray-800)"}}>{r.title}</div>
                </div>
                <span style={{fontSize:18,color:"var(--gray-300)",transition:"transform .2s",transform:isOpen?"rotate(180deg)":"none"}}>⌄</span>
              </div>

              {/* Expanded content — textbook style */}
              {isOpen&&<div className="anim" style={{padding:"0 20px 20px",borderTop:"1.5px solid var(--gray-50)"}}>
                {/* Explanation */}
                <p style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,marginTop:16,marginBottom:16}}>{r.explanation}</p>

                {/* De/Het color legend — shown for article-related topics */}
                {r.title.includes("De vs Het")&&<div style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"}}>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.de.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.de.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.de.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.de.shadow}`}}>de</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.de.pillText}}>Common gender</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.de.pillText,opacity:0.8}}>≈ 75% of nouns</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>de man · de vrouw · de tafel · de school</div>
                  </div>
                  <div style={{flex:1,minWidth:140,background:ARTICLE_COLORS.het.pill,borderRadius:14,padding:"14px 18px",border:`2px solid ${ARTICLE_COLORS.het.pillText}25`}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      <span style={{display:"inline-block",background:ARTICLE_COLORS.het.bg,color:"#fff",fontWeight:800,fontSize:16,borderRadius:8,padding:"4px 14px",boxShadow:`0 3px 10px ${ARTICLE_COLORS.het.shadow}`}}>het</span>
                      <span style={{fontWeight:700,fontSize:13,color:ARTICLE_COLORS.het.pillText}}>Neuter gender</span>
                    </div>
                    <div style={{fontSize:12,color:ARTICLE_COLORS.het.pillText,opacity:0.8}}>≈ 25% of nouns</div>
                    <div style={{fontSize:12,color:"var(--gray-500)",marginTop:6}}>het huis · het kind · het boek · het water</div>
                  </div>
                </div>}

                {/* Rules box */}
                {r.rules&&<div style={{background:"linear-gradient(145deg, #F8F9FC, #F4F6FA)",borderRadius:14,padding:"16px 18px",marginBottom:16,border:"1.5px solid rgba(255,255,255,0.55)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:levelColors[openLevel],textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>📋 Rules</div>
                  {r.rules.map((rule,j)=>{
                    if(rule==="")return <div key={j} style={{height:8}}/>;
                    const isHeader=/^[A-Z\s'""→—:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                    const renderRich=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part.split(/(→)/).map((bit,bi)=>{
                            if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:levelColors[openLevel],fontWeight:800,margin:"0 2px"}}>→</span>;
                            return bit;
                          });
                        });
                      });
                    };
                    return(
                      <div key={j} style={{fontSize:isHeader?12:13,color:isHeader?levelColors[openLevel]:"var(--gray-700)",padding:isHeader?"8px 0 3px":"5px 0",lineHeight:1.6,display:"flex",gap:8,fontWeight:isHeader?800:400,letterSpacing:isHeader?0.5:0}}>
                        {!isHeader&&<span style={{color:levelColors[openLevel],fontWeight:800,flexShrink:0}}>•</span>}
                        <span>{renderRich(rule)}</span>
                      </div>
                    );
                  })}
                </div>}

                {/* Examples box */}
                {r.examples&&<div style={{background:"var(--gold-bg-light)",borderRadius:14,padding:"16px 18px",border:"1.5px solid rgba(245,166,35,0.15)"}}>
                  <div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>💬 Examples</div>
                  {r.examples.map((ex,j)=>{
                    const isArticleTopic=r.title.includes("De vs Het")||r.title.includes("Articles");
                    // Apply rich text + article coloring
                    const renderRich2=(text)=>{
                      return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
                        if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)"}}>{seg.slice(2,-2)}</strong>;
                        if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:"var(--blue)"}}>{seg.slice(1,-1)}</em>;
                        if(isArticleTopic){
                          return seg.split(/\b(de|het|De|Het)\b/).map((aseg,ai)=>{
                            const low=aseg.toLowerCase();
                            if(low==="de")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.de.pill,color:ARTICLE_COLORS.de.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            if(low==="het")return <span key={si+"-"+ai} style={{background:ARTICLE_COLORS.het.pill,color:ARTICLE_COLORS.het.pillText,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{aseg}</span>;
                            return aseg;
                          });
                        }
                        return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
                          if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(245,166,35,0.2)",color:"var(--gold-dark)",fontWeight:700,borderRadius:3,padding:"0 3px"}}>{part.slice(1,-1)}</span>;
                          return part;
                        });
                      });
                    };
                    return <div key={j} style={{fontSize:14,color:"var(--gray-700)",padding:"6px 0",lineHeight:1.7,borderBottom:j<r.examples.length-1?"1px solid rgba(245,166,35,0.1)":"none"}}>{renderRich2(ex)}</div>;
                  })}
                </div>}
              </div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ━━━━━━━━━━ PROFILE ━━━━━━━━━━

function Profile({user,lang,baseLang="en",setLang,onLogout,flags=[],setFlags}){
  const dk=document.documentElement.classList.contains("dark");
  const lv=getLevel(user.xp);
  const c=xpCurr(user.xp),n=xpNext(user.xp);
  const pct=((user.xp-c)/(n-c))*100;
  const L=LANGUAGES.find(l=>l.code===lang);
  const vocab=VOCAB[lang]||[];
  const learnedPct=vocab.length>0?Math.round((user.wl/vocab.length)*100):0;
  const [showManifesto,setShowManifesto]=useState(false);
  const [showAchievements,setShowAchievements]=useState(false);

  return(
    <div className="anim">
      {/* Profile header — purple gradient like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"28px 24px",marginBottom:24,position:"relative",overflow:"hidden",border:"2px solid rgba(255,255,255,0.18)",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",textAlign:"center"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{position:"relative",zIndex:2}}>
          <div style={{width:88,height:88,borderRadius:24,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.15)"}}><AppIcon name="avatar" size={60}/></div>
          <h2 style={{fontSize:24,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:"0 0 4px",fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_title",baseLang)}</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.75)",margin:0,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>{t("prof_learning",baseLang)} {L?.native} <CountryFlag code={lang} size={16}/></p>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:20}}>
        {[
          {icon:"lightning_bolt",value:user.xp,label:t("prof_total_xp",baseLang)},
          {icon:"flame",value:`${user.streak} ${t("prof_days",baseLang)}`,label:t("prof_streak",baseLang)},
          {icon:"trophy",value:`${t("prof_level",baseLang)} ${lv}`,label:t("prof_rank",baseLang)},
          {icon:"brain",value:user.wl,label:t("prof_words_learned",baseLang)},
        ].map((s,i)=>(
          <div key={i} style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 16px",textAlign:"center",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
            <div style={{marginBottom:4}}><AppIcon name={s.icon} size={36}/></div>
            <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent)"}}>{s.value}</div>
            <div style={{fontSize:11,color:"var(--gray-500)",textTransform:"uppercase",letterSpacing:1.5,fontWeight:600}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CEFR Level */}
      {(()=>{const cefr=getUserCefr(user,lang);return(
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #7B5EE8 50%, #5840B8 90%, #4A2BA6 100%)",borderRadius:18,padding:"16px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:16,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 14px rgba(123,94,232,0.3), 0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 16px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), 0 3px 10px rgba(0,0,0,0.15)"}}>{cefr.band}</div>
          <div style={{flex:1,position:"relative",zIndex:2}}>
            <div style={{fontSize:14,fontWeight:700,color:"white",marginBottom:2,textShadow:"0 1px 3px rgba(0,0,0,0.2)"}}>CEFR Level: {cefr.level}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,0.7)"}}>{cefr.label} • {cefr.desc}</div>
          </div>
        </div>
      );})()}

      {/* XP Progress bar */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:16,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)"}}>{t("prof_level",baseLang)} {lv} → {lv+1}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.xp-c} / {n-c} XP</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(pct,2,100)}%`}}/></div>
      </div>

      {/* Vocabulary progress */}
      <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",borderRadius:18,padding:"18px 20px",border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",marginBottom:20,boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontWeight:700,fontSize:14,color:"var(--gray-700)",display:"flex",alignItems:"center",gap:6}}><AppIcon name="abc_blocks" size={20}/>{t("prof_vocab_progress",baseLang)}</span>
          <span style={{color:"var(--gray-400)",fontSize:13,fontWeight:600}}>{user.wl} / {vocab.length}</span>
        </div>
        <div className="xpbar"><div className="xpbar-fill" style={{width:`${clamp(learnedPct,1,100)}%`,background:"linear-gradient(90deg, #A890FF, #7B5EE8)"}}/></div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginTop:6}}>{learnedPct}% {t("prof_of",baseLang)} {L?.native} {t("prof_dict_mastered",baseLang)}</div>
      </div>

      {/* Action buttons row */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
        <button role="button" onClick={()=>setShowAchievements(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="crown" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>Achievements</span>
        </button>
        <button role="button" onClick={()=>setShowManifesto(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="clipboard" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>Manifesto</span>
        </button>
      </div>

      {/* Achievements popup */}
      {showAchievements&&<GlossyPopup title="Achievements" onClose={()=>setShowAchievements(false)}>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {ACHS.map(a=>{
            const ul=user.achs.includes(a.id);
            return <div key={a.id} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:14,background:ul?(dk?"rgba(46,205,167,0.1)":"rgba(46,205,167,0.06)"):(dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)"),border:ul?`1.5px solid var(--teal)`:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",opacity:ul?1:0.5}}>
              <div style={{fontSize:24,flexShrink:0}}>{a.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700,color:ul?"var(--teal)":"var(--gray-600)"}}>{t(a.nameKey,baseLang)}</div>
                <div style={{fontSize:11,color:"var(--gray-400)"}}>{t(a.descKey,baseLang)}</div>
              </div>
              <span style={{padding:"3px 10px",borderRadius:8,background:ul?"rgba(46,205,167,0.1)":"rgba(123,94,232,0.06)",color:ul?"var(--teal)":"var(--purple-accent-text)",fontSize:11,fontWeight:700}}>+{a.xp}</span>
            </div>;
          })}
        </div>
      </GlossyPopup>}

      {/* Manifesto popup */}
      {showManifesto&&<GlossyPopup title="LingoVerse Manifesto" onClose={()=>setShowManifesto(false)}>
        <div style={{fontSize:13,lineHeight:1.8,color:"var(--gray-600)"}}>
          <p style={{fontWeight:700,color:"var(--gray-800)",marginBottom:12}}>LingoVerse is a self-sustaining multilingual AI learning ecosystem.</p>
          {["Foundations First Doctrine","Universal Literacy Principle","Meaning-Centric Architecture","Cultural Authenticity","Self-Improving System","Personalized AI Curriculum Layer"].map((title,i)=>
            <div key={i} style={{marginBottom:12}}><div style={{fontWeight:700,color:"var(--purple-accent-text)",marginBottom:2}}>{i+1}) {title}</div></div>
          )}
        </div>
      </GlossyPopup>}

      {/* Language switcher */}
      <div style={{marginBottom:20}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <AppIcon name="globe" size={22}/>
          <h3 style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("prof_switch_lang",baseLang)}</h3>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
          {LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${lang===l.code?"active":""}`} onClick={()=>setLang(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div style={{textAlign:"center",paddingTop:16,borderTop:dk?"2px solid rgba(123,94,232,0.15)":"2px solid rgba(123,94,232,0.06)"}}><button onClick={onLogout} style={{fontSize:14,padding:"12px 32px",borderRadius:14,border:"2px solid var(--coral)",background:"var(--card-bg)",color:"var(--coral)",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Log out</button></div>
    </div>
  );
}

// ━━━━━━━━━━ VOCABULARY PAGE V6 (Search / Browse / Review) ━━━━━━━━━━

function VocabularyPage({lang,user,showToast,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const isMobile=typeof window!=="undefined"&&window.innerWidth<600;

  // ── Data: all words from WORD_DB ──
  const allWords=useMemo(()=>{
    const db=WORD_DB[lang];
    if(!db||Object.keys(db).length===0) return [];
    return Object.values(db).filter(e=>{
      if(!e.isLemma)return false; // only lemmas (teach-card words + curated function words)
      if(e.pos==="unknown")return false;
      const w=(e.display||e.word||"").trim();
      if(w.includes(" "))return false;
      if(w.includes("("))return false;
      if(w.includes("→"))return false; // conjugation pairs belong in word entry, not list
      if(w.startsWith("-"))return false; // grammar suffixes belong in Grammar tab
      // Language-specific: Korean vocab must be hangul (syllables or jamo) + optional ~ prefix
      if(lang==="ko"){
        const raw=w.replace(/^~/,""); // strip ~ prefix for particles
        if(!raw)return false;
        if(!/^[\uAC00-\uD7AF\u3131-\u3163]+$/.test(raw))return false; // hangul only
      }
      return true;
    }).sort((a,b)=>(a.word||"").localeCompare(b.word||""));
  },[lang]);
  const taughtWords=useMemo(()=>allWords.filter(e=>e.taught),[allWords]);

  // ── Grammar pack resolution (mirrors lesson engine exactly) ──
  const langPacks=GRAMMAR_PACKS[lang]||null;
  const [allPackSelections,setAllPackSelections]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_pack_v3");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  const activePackId=allPackSelections[lang]||(langPacks?.defaultPack)||null;
  const activePack=useMemo(()=>{
    if(!langPacks)return null;
    return langPacks.packs.find(pk=>pk.id===activePackId)||langPacks.packs[0]||null;
  },[langPacks,activePackId]);
  useEffect(()=>{try{localStorage.setItem("vl_grammar_pack_v3",JSON.stringify(allPackSelections));}catch(e){}},[allPackSelections]);
  const selectPack=(packId)=>setAllPackSelections(prev=>({...prev,[lang]:packId}));
  // Per-language disabled categories
  const [disabledCats,setDisabledCats]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_disabled_v1");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  useEffect(()=>{try{localStorage.setItem("vl_grammar_disabled_v1",JSON.stringify(disabledCats));}catch(e){}},[disabledCats]);
  const langDisabled=disabledCats[lang]||[];
  const toggleCatDisabled=(key)=>setDisabledCats(prev=>{
    const cur=prev[lang]||[];
    const next=cur.includes(key)?cur.filter(k=>k!==key):[...cur,key];
    return {...prev,[lang]:next};
  });
  const [expandedLegend,setExpandedLegend]=useState(null);
  const [grammarEditMode,setGrammarEditMode]=useState(false);
  // Grammar colorizer: React state synced with localStorage (same key as lesson engine)
  const [grammarHl,setGrammarHl]=useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_hl");if(v!==null)return v==="true";}catch(e){}
    return false;
  });
  useEffect(()=>{try{localStorage.setItem("vl_grammar_hl",grammarHl?"true":"false");}catch(e){}},[grammarHl]);
  const [showGrammarSettings,setShowGrammarSettings]=useState(false);

  // ── State ──
  const [mode,setMode]=useState("search");
  const [search,setSearch]=useState("");
  const [expanded,setExpanded]=useState(null); // stores the actual entry object or null
  const [filterOpen,setFilterOpen]=useState(false);
  const [filterPOS,setFilterPOS]=useState(new Set());
  const [filterLevel,setFilterLevel]=useState(new Set());
  const [filterGender,setFilterGender]=useState(new Set());
  const [filterTaughtOnly,setFilterTaughtOnly]=useState(false);
  const [browsePath,setBrowsePath]=useState([]);
  const [reviewIndex,setReviewIndex]=useState(0);
  const [reviewFlipped,setReviewFlipped]=useState(false);
  const [reviewLevel,setReviewLevel]=useState(null);
  const [reviewShuffled,setReviewShuffled]=useState(false);
  const [reviewWords,setReviewWords]=useState([]);
  const searchRef=useRef(null);
  const [gramLevel,setGramLevel]=useState("A1");
  const [gramExpanded,setGramExpanded]=useState(null);
  const [gramSearch,setGramSearch]=useState("");
  const [gramCategory,setGramCategory]=useState("All");
  const [gramPoliteness,setGramPoliteness]=useState("all");

  // ── Helpers ──
  const getWordColor=(entry)=>{
    if(!grammarHl||!activePack)return null;
    let resolved=resolvePackColor(entry,activePack,dk);
    if(resolved&&langDisabled.length>0&&entry.pos){
      const p=entry.pos;
      const g=entry.gender||"";
      const catOff=langDisabled.some(k=>
        (k==="verb"&&p==="verb")||(k==="adjective"&&p==="adjective")||
        (k==="adverb"&&(p==="adverb"||p==="pronoun"||p.startsWith("pronoun_")||p==="demonstrative"))||
        (k==="noun"&&p==="noun"&&!g)||
        (k==="structure"&&(p==="preposition"||p==="conjunction"||p.startsWith("article")||p==="interjection"||p==="number"||p==="counter"||p==="negation"||p==="question"||p.startsWith("particle_")))||
        (k==="m"&&(p.endsWith("_m")||(g==="m"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="f"&&(p.endsWith("_f")||(g==="f"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="n"&&(p.endsWith("_n")||p.endsWith("_het")||(g==="n"&&(p==="noun"||p==="adjective"||p.startsWith("article")))))||
        (k==="c"&&(p.endsWith("_c")||(g==="c"&&(p==="noun"||p==="adjective"))))||
        (k==="indef"&&(p.endsWith("_indef")||(g==="indef"&&p.startsWith("article"))))||
        (k==="pl"&&(p.endsWith("_pl")||(g==="pl"&&(p==="noun"||p==="adjective"))))||
        (k==="topic"&&p==="particle_topic")||(k==="subj"&&p==="particle_subj")||
        (k==="obj"&&p==="particle_obj")||(k==="loc"&&(p==="particle_loc"||p==="particle_dir"))||
        (k==="conn"&&(p==="particle_conn"||p==="particle_comp"||p==="particle_poss"||p==="particle_other"))
      );
      if(catOff) resolved=null;
    }
    return resolved?resolved.color:null;
  };
  const posLabel=(pos)=>{if(!pos)return "";const base=pos.includes("_")?pos.split("_")[0]:pos;return cap(base);};
  const cefrLevels=["A1","A2","B1","B2"];
  const ttsLocale=LANG_META[lang]?.ttsLocale||"en-US";
  const genderLabels={m:"Masculine",f:"Feminine",n:"Neuter",c:"Common",pl:"Plural"};

  // ── Search + filter (with gender) ──
  const filteredWords=useMemo(()=>{
    let pool=allWords;
    if(filterTaughtOnly) pool=pool.filter(e=>e.taught);
    if(filterPOS.size>0) pool=pool.filter(e=>{const base=e.pos?(e.pos.includes("_")?e.pos.split("_")[0]:e.pos):"";return filterPOS.has(base);});
    if(filterLevel.size>0) pool=pool.filter(e=>{const lv=(e.level||"A1").substring(0,2);return filterLevel.has(lv);});
    if(filterGender.size>0) pool=pool.filter(e=>e.gender&&filterGender.has(e.gender));
    if(search){
      const s=search.toLowerCase();
      // Form-to-lemma resolution for Korean: if search matches a conjugated form, include the base word
      const formResolved=new Set();
      if(lang==="ko"&&KOREAN_FORM_INDEX){
        const lemma=KOREAN_FORM_INDEX[s];
        if(lemma) formResolved.add(lemma.toLowerCase());
      }
      pool=pool.filter(e=>{
        const w=(e.word||"").toLowerCase(),d=(e.display||"").toLowerCase(),en=(e.en||"").toLowerCase();
        return w.includes(s)||d.includes(s)||en.includes(s)||formResolved.has(w);
      }).sort((a,b)=>{
        const aW=(a.word||"").toLowerCase(),bW=(b.word||"").toLowerCase();
        // Resolved lemma gets top priority
        if(formResolved.has(aW)&&!formResolved.has(bW))return -1;
        if(formResolved.has(bW)&&!formResolved.has(aW))return 1;
        if(aW===s&&bW!==s)return -1;if(bW===s&&aW!==s)return 1;
        if(aW.startsWith(s)&&!bW.startsWith(s))return -1;if(bW.startsWith(s)&&!aW.startsWith(s))return 1;
        return aW.localeCompare(bW);
      });
    }
    return pool;
  },[allWords,search,filterPOS,filterLevel,filterGender,filterTaughtOnly]);

  // ── Browse: available letters (A-Z and language-specific like umlauts) ──
  // Browse uses BARE word (entry.word) — not display with article prefix
  // Korean: group by initial consonant (14 base jamo) instead of every unique syllable
  const CHOSEONG="\u3131\u3132\u3134\u3137\u3138\u3139\u3141\u3142\u3143\u3145\u3146\u3147\u3148\u3149\u314A\u314B\u314C\u314D\u314E";
  const BASE_CHO={"\u3131":"\u3131","\u3132":"\u3131","\u3134":"\u3134","\u3137":"\u3137","\u3138":"\u3137","\u3139":"\u3139","\u3141":"\u3141","\u3142":"\u3142","\u3143":"\u3142","\u3145":"\u3145","\u3146":"\u3145","\u3147":"\u3147","\u3148":"\u3148","\u3149":"\u3148","\u314A":"\u314A","\u314B":"\u314B","\u314C":"\u314C","\u314D":"\u314D","\u314E":"\u314E"};
  const getChoseong=(ch)=>{const c=ch.charCodeAt(0);if(c<0xAC00||c>0xD7AF)return null;return CHOSEONG[Math.floor((c-0xAC00)/588)];};
  const getBaseCho=(ch)=>{const cho=getChoseong(ch);return cho?(BASE_CHO[cho]||cho):null;};

  const browseLetters=useMemo(()=>{
    if(lang==="ko"){
      const set=new Set();
      allWords.forEach(e=>{const c=(e.word||"")[0];if(c){const b=getBaseCho(c);if(b)set.add(b);}});
      return [...set].sort((a,b)=>a.localeCompare(b));
    }
    const set=new Set();
    allWords.forEach(e=>{const c=(e.word||"")[0];if(c&&/\p{L}/u.test(c))set.add(c.toUpperCase());});
    return [...set].sort((a,b)=>a.localeCompare(b));
  },[allWords,lang]);

  const browseLetterCounts=useMemo(()=>{
    const counts={};
    allWords.forEach(e=>{
      const c=(e.word||"")[0];if(!c)return;
      const key=lang==="ko"?(getBaseCho(c)||""):c.toUpperCase();
      if(key)counts[key]=(counts[key]||0)+1;
    });
    return counts;
  },[allWords,lang]);

  const browseTwoLetters=useMemo(()=>{
    if(browsePath.length!==1)return [];
    if(lang==="ko"){
      // Korean: show unique first syllables whose initial consonant matches selected consonant
      const cho=browsePath[0];
      const set=new Set();
      allWords.forEach(e=>{const c=(e.word||"")[0];if(c&&getBaseCho(c)===cho)set.add(c);});
      return [...set].sort((a,b)=>a.localeCompare(b));
    }
    const prefix=browsePath[0].toLowerCase();
    const set=new Set();
    allWords.forEach(e=>{
      const w=(e.word||"").toLowerCase();
      if(w.startsWith(prefix)&&w.length>=2) set.add(w.substring(0,2));
    });
    return [...set].sort((a,b)=>a.localeCompare(b)).map(s=>s.charAt(0).toUpperCase()+s.charAt(1));
  },[allWords,browsePath,lang]);

  const browseWords=useMemo(()=>{
    if(browsePath.length!==2)return [];
    if(lang==="ko"){
      // Korean: match by first syllable (browsePath[1] is the full syllable)
      const syl=browsePath[1];
      return allWords.filter(e=>(e.word||"")[0]===syl);
    }
    const prefix=(browsePath[0]+browsePath[1]).toLowerCase();
    return allWords.filter(e=>(e.word||"").toLowerCase().startsWith(prefix));
  },[allWords,browsePath,lang]);

  // ── Review: init ──
  useEffect(()=>{
    let pool=taughtWords;
    if(reviewLevel) pool=pool.filter(e=>(e.level||"A1").startsWith(reviewLevel));
    if(reviewShuffled){
      const arr=[...pool];
      for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
      pool=arr;
    }
    setReviewWords(pool);setReviewIndex(0);setReviewFlipped(false);
  },[taughtWords,reviewLevel,reviewShuffled]);

  // ── Reusable styles ──
  const panelBg=dk?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)":"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)";
  const panelBorder=dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)";
  const panelShadow=dk?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)";
  const glossArc=dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)";
  const neonSh="0 0 10px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(200,180,255,0.3), 0 2px 4px rgba(0,0,0,0.5)";
  const subNeon="0 0 8px rgba(255,255,255,0.5), 0 0 20px rgba(200,180,255,0.25), 0 1px 3px rgba(0,0,0,0.6)";
  const txtSh="0 2px 12px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.4)";
  // CSS chevron arrow (← arrows banned like em-dashes)
  const chevronL=<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:3,verticalAlign:"middle"}}><polyline points="7,1 3,5 7,9"/></svg>;
  const chevronR=<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:3,verticalAlign:"middle"}}><polyline points="3,1 7,5 3,9"/></svg>;

  // Maximum candy gloss tab style — matches btn-purple / candyBtn standard
  const tabStyle=(isActive)=>({
    display:"inline-flex",alignItems:"center",gap:6,padding:isMobile?"12px 20px":"12px 26px",borderRadius:18,
    fontSize:13,fontWeight:900,cursor:"pointer",transition:"all .3s cubic-bezier(.4,0,.2,1)",border:"none",fontFamily:"Quicksand, sans-serif",
    position:"relative",overflow:"hidden",letterSpacing:0.4,
    background:isActive?(dk?"linear-gradient(180deg,#E8DEFF 0%,#D4C8FF 4%,#C0AEF8 10%,#A488F0 22%,#8B6AE4 38%,#7B5EE8 52%,#6F4FD8 62%,#6545C8 72%,#5840B8 84%,#4A2BA6 92%,#3D1F8C 100%)":"linear-gradient(180deg,#DDD0FF 0%,#C8BAFF 6%,#B8A8FA 14%,#A488F0 24%,#9B7AE8 34%,#7B5EE8 52%,#6F4FD8 64%,#6545C8 76%,#5840B8 88%,#4A2BA6 96%,#3D1F8C 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)"),
    color:isActive?"white":(dk?"rgba(200,184,255,0.95)":"#6030C0"),
    textShadow:isActive?"0 1px 3px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.15)":"none",
    boxShadow:isActive?(dk?"0 0 24px rgba(123,94,232,0.6), 0 6px 20px rgba(85,53,181,0.55), 0 2px 6px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -4px 0 rgba(0,0,0,0.22)":"0 0 20px rgba(123,94,232,0.5), 0 6px 20px rgba(123,94,232,0.4), 0 2px 6px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.18)"):(dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), 0 1px 3px rgba(0,0,0,0.06), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"),
  });

  // ── Compound bubble style — matches Korean compound word / dialogue bubbles exactly ──
  const bubbleBg=dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)";
  const bubbleBorder=dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)";
  const bubbleShadow=dk?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)";
  const bubbleGloss=dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)";
  // ── Word row V6: compound bubble style, gloss arc, popup on click ──
  const WordRow=({entry})=>{
    const wColor=getWordColor(entry);
    const disp=entry.display||entry.word||"";
    // When grammarHl ON: entire word (article+noun) gets ONE unified color from resolvePackColor
    const transColor=grammarHl?"#7B5EE8":(dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)");
    return(
      <div onClick={()=>setExpanded(expanded===entry?null:entry)} style={{borderRadius:22,overflow:"hidden",marginBottom:8,transition:"all .25s",position:"relative",cursor:"pointer",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"13px 18px",position:"relative",zIndex:1}}>
          <div style={{flex:1,minWidth:0}}>
            <span style={{fontFamily:"Quicksand, sans-serif",fontWeight:800,fontSize:15,color:wColor||(dk?"rgba(255,255,255,0.92)":"var(--gray-800)")}}>{disp}</span>
          </div>
          <span style={{color:transColor,fontSize:13,fontWeight:700,textAlign:"right",maxWidth:"40%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flexShrink:0}}>{entry.en||""}</span>
          <SpeakerButton text={entry.word} lang={ttsLocale} size={13} showToast={showToast}/>
        </div>
      </div>
    );
  };

  // ── Word popup overlay (replaces inline expansion) ──
  const badgePill=(hex,label)=>(<span style={{display:"inline-block",padding:"3px 10px",borderRadius:10,fontSize:10,fontWeight:800,color:"white",letterSpacing:0.3,textShadow:"0 1px 2px rgba(0,0,0,0.2)",position:"relative",overflow:"hidden",background:dk?`linear-gradient(180deg,${hex}cc 0%,${hex} 50%,${hex}bb 100%)`:`linear-gradient(180deg,${hex}dd 0%,${hex} 55%,${hex}aa 100%)`,boxShadow:`0 2px 8px ${hex}44, inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)`}}>{label}</span>);

  // ── Deep Dictionary: 5-Tab Word Entry ──
  const [popupTab,setPopupTab]=useState("overview");
  const WordPopup=()=>{
    if(!expanded||typeof expanded!=="object")return null;
    const entry=expanded;
    const wColor=getWordColor(entry);
    const artEntry=entry.article;
    const disp=entry.display||entry.word||"";
    const isKorean=lang==="ko";
    const isVerb=entry.pos==="verb"||entry.pos==="adjective"||entry.kind==="verb"||entry.kind==="adjective"||(entry.word&&entry.word.endsWith&&entry.word.endsWith("다"));
    const wordKey=(entry.word||"").toLowerCase();

    // Tab data (Korean-specific deep features)
    const tabs=isKorean?[
      {id:"overview",label:"Overview"},
      {id:"forms",label:isVerb?"Forms":"Particles"},
      {id:"examples",label:"Examples"},
      {id:"grammar",label:"Grammar"},
      {id:"related",label:"Related"},
    ]:[
      {id:"overview",label:"Overview"},
    ];

    // Conjugation data (for Forms tab)
    const conjData=useMemo(()=>{
      if(!isKorean||!isVerb)return null;
      const dictForm=wordKey.endsWith("다")?wordKey:wordKey+"다";
      return conjugateVerb(dictForm);
    },[wordKey,isKorean,isVerb]);
    const irregInfo=useMemo(()=>{
      if(!isKorean||!isVerb)return null;
      const dictForm=wordKey.endsWith("다")?wordKey:wordKey+"다";
      return getIrregInfo(dictForm);
    },[wordKey,isKorean,isVerb]);

    // Particle combinations (for nouns)
    const particleData=useMemo(()=>{
      if(!isKorean||isVerb)return null;
      return nounWithParticles(entry.word||"");
    },[entry.word,isKorean,isVerb]);

    // Examples from curriculum
    const examples=useMemo(()=>{
      if(!isKorean)return [];
      return KOREAN_EXAMPLE_INDEX[wordKey]||[];
    },[wordKey,isKorean]);

    // Morpheme family
    const morphemes=useMemo(()=>{
      if(!isKorean)return [];
      const result=[];
      for(const[morph,data]of Object.entries(KOREAN_MORPHEME_INDEX)){
        if(data.words.some(w=>w.toLowerCase()===wordKey)){
          result.push({morph,hanja:data.hanja,meaning:data.meaning,family:data.words.filter(w=>w.toLowerCase()!==wordKey)});
        }
      }
      return result;
    },[wordKey,isKorean]);

    // Idioms containing this word
    const idioms=useMemo(()=>{
      if(!isKorean)return [];
      return KOREAN_IDIOM_INDEX[wordKey]||[];
    },[wordKey,isKorean]);

    // ── Tab styling ──
    const tabBg=(active)=>active
      ?(dk?"linear-gradient(180deg,#A488F0 0%,#7B5EE8 55%,#5840B8 100%)":"linear-gradient(180deg,#B8A8FA 0%,#7B5EE8 55%,#5840B8 100%)")
      :(dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)");
    const tabColor=(active)=>active?"white":(dk?"rgba(200,184,255,0.7)":"#6040C0");
    const sectionTitle=(text)=><div style={{fontSize:11,fontWeight:900,letterSpacing:1,textTransform:"uppercase",color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginBottom:8,marginTop:14}}>{text}</div>;
    const subNote=(text)=><div style={{fontSize:12,color:dk?"rgba(200,184,255,0.65)":"rgba(80,60,140,0.6)",lineHeight:1.5,fontWeight:600,marginBottom:8,whiteSpace:"pre-line"}}>{text}</div>;
    // Candy gloss bubble wrapper — used for all tab content cards
    const glossBubble=(children,opts={})=>{
      const mb=opts.mb??6;const k=opts.key;
      return <div key={k} style={{borderRadius:16,padding:"10px 14px",marginBottom:mb,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"relative",zIndex:1}}>{children}</div>
      </div>;
    };

    return(
      <div onClick={()=>{setExpanded(null);setPopupTab("overview");}} style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:9999,display:"flex",alignItems:isMobile?"flex-end":"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(6px)",animation:"fadeIn .2s"}}>
        <div onClick={e=>e.stopPropagation()} style={{
          width:isMobile?"100%":"min(460px, 92vw)",
          maxHeight:isMobile?"85vh":"88vh",overflow:"auto",
          borderRadius:isMobile?"24px 24px 0 0":24,position:"relative",
          background:dk?"linear-gradient(180deg, rgba(40,30,70,0.98) 0%, rgba(30,24,55,0.98) 100%)":"linear-gradient(180deg, rgba(250,248,255,0.99) 0%, rgba(240,236,255,0.98) 100%)",
          border:dk?"1.5px solid rgba(123,94,232,0.4)":"1.5px solid rgba(180,165,240,0.5)",
          boxShadow:dk?"0 -8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3)":"0 -8px 40px rgba(123,94,232,0.15), 0 0 20px rgba(180,165,240,0.2)",
          padding:isMobile?"24px 16px 32px":"28px 22px",
        }}>
          {isMobile&&<div style={{width:40,height:4,borderRadius:2,background:dk?"rgba(255,255,255,0.2)":"rgba(123,94,232,0.2)",margin:"0 auto 14px"}}/>}
          {!isMobile&&<span onClick={()=>{setExpanded(null);setPopupTab("overview");}} style={{position:"absolute",top:14,right:16,cursor:"pointer",fontSize:16,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.6)",zIndex:2}}>&#10005;</span>}

          {/* Word header */}
          <div style={{borderRadius:20,overflow:"hidden",position:"relative",padding:"16px 18px 14px",marginBottom:12,background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
            <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
              <div style={{flex:1}}>
                <div style={{fontFamily:"Quicksand, sans-serif",fontWeight:900,fontSize:22,color:wColor||(dk?"rgba(255,255,255,0.95)":"var(--gray-800)"),marginBottom:2}}>{disp}</div>
                <div style={{fontSize:14,fontWeight:700,color:grammarHl?"#7B5EE8":(dk?"rgba(200,184,255,0.65)":"rgba(100,80,160,0.6)")}}>{entry.en||""}</div>
                {entry.phonetic&&<div style={{fontSize:11,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:2}}>{entry.phonetic}</div>}
              </div>
              <SpeakerButton text={entry.word} lang={ttsLocale} size={18} showToast={showToast}/>
            </div>
          </div>

          {/* Badge row */}
          <div style={{display:"flex",flexWrap:"wrap",gap:5,alignItems:"center",marginBottom:10}}>
            {entry.level&&badgePill("#7B5EE8",(entry.level||"A1").substring(0,2))}
            {entry.topikLevel&&badgePill("#2ECDA7","TOPIK "+(entry.topikLevel==="A"?"I":"II"))}
            {entry.pos&&badgePill(wColor||"#7B5EE8",posLabel(entry.pos))}
            {artEntry&&badgePill(wColor||"#7B5EE8",artEntry)}
            {entry.gender&&badgePill(wColor||"#6040C0",genderLabels[entry.gender]||entry.gender)}
            {isKorean&&isVerb&&irregInfo&&irregInfo.id!=="regular"&&badgePill("#FF6D00",irregInfo.label)}
            {entry.frequencyRank&&entry.frequencyRank<3000&&badgePill("#F59E0B","#"+entry.frequencyRank)}
          </div>

          {/* Tab bar */}
          {tabs.length>1&&<div style={{display:"flex",gap:4,marginBottom:14,overflowX:"auto",paddingBottom:2}}>
            {tabs.map(t=><button key={t.id} onClick={()=>setPopupTab(t.id)} style={{
              padding:"6px 12px",borderRadius:12,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:800,
              background:tabBg(popupTab===t.id),color:tabColor(popupTab===t.id),
              boxShadow:popupTab===t.id?"0 2px 8px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"inset 0 1px 0 rgba(255,255,255,0.1)",
              transition:"all .2s",whiteSpace:"nowrap",flexShrink:0,
            }}>{t.label}</button>)}
          </div>}

          {/* ═══ TAB: Overview ═══ */}
          {popupTab==="overview"&&<>
            {entry.note&&subNote(entry.note)}
            {entry.example&&<div style={{borderRadius:16,padding:"10px 14px",marginBottom:10,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
              <div style={{position:"relative",zIndex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:13,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontWeight:600,flex:1,lineHeight:1.5}}>{entry.example}</span>
                  <SpeakerButton text={entry.example} lang={ttsLocale} size={12} showToast={showToast}/>
                </div>
                {entry.exampleEn&&<div style={{fontSize:11,color:dk?"rgba(200,184,255,0.55)":"rgba(100,80,160,0.5)",fontStyle:"italic",marginTop:3}}>{entry.exampleEn}</div>}
              </div>
            </div>}
            {entry.cognate&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700,marginTop:4}}>{entry.cognate}</div>}
            {/* Morpheme decomposition (Sino-Korean) */}
            {morphemes.length>0&&<>
              {sectionTitle("Etymology")}
              {morphemes.map((m,i)=><div key={i} style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.65)",fontWeight:600,marginBottom:4}}>
                <span style={{fontWeight:800,color:dk?"#A890FF":"#7B5EE8"}}>{m.morph}</span>
                {m.hanja&&<span style={{color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginLeft:4}}>({m.hanja})</span>}
                <span style={{marginLeft:6}}>{m.meaning}</span>
                {m.family.length>0&&<span style={{marginLeft:8,fontSize:11,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)"}}>
                  also in: {m.family.slice(0,5).join(", ")}
                </span>}
              </div>)}
            </>}
            {/* KOREAN_DICT particle info */}
            {entry.particle&&<>
              {sectionTitle("Particles")}
              {subNote(entry.particle)}
            </>}
            {/* KOREAN_DICT morph info */}
            {entry.morph&&!morphemes.length&&<>
              {sectionTitle("Etymology")}
              {subNote(entry.morph)}
            </>}
            {/* Uses from KOREAN_DICT */}
            {entry.uses&&entry.uses.length>0&&<>
              {sectionTitle("Common Usage")}
              {entry.uses.map((u,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{u.k}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:2}}>{u.e}</div>
              </>,{key:i}))}
            </>}
          </>}

          {/* ═══ TAB: Forms (Conjugation / Particles) ═══ */}
          {popupTab==="forms"&&isKorean&&<>
            {isVerb&&conjData&&<>
              {irregInfo&&irregInfo.id!=="regular"&&<div style={{fontSize:12,color:"#FF6D00",fontWeight:700,marginBottom:10}}>{irregInfo.ko} ({irregInfo.label})</div>}
              {/* Group by speech level */}
              {["해요체","합쇼체","반말","Connective","Modifier","Nominalization","Ability","Desire","Negation","Honorific"].map(group=>{
                const forms=Object.values(conjData).filter(f=>f.group===group);
                if(!forms.length)return null;
                return <div key={group}>
                  {sectionTitle(group)}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                    {forms.map((f,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                      <div style={{position:"relative",zIndex:1}}>
                        <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{f.form}</div>
                        <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{f.label}</div>
                      </div>
                    </div>)}
                  </div>
                </div>;
              })}
            </>}
            {!isVerb&&particleData&&<>
              {sectionTitle("Particle Combinations")}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                {particleData.map((p,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{p.form}</div>
                    <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{p.role} ({p.particle})</div>
                  </div>
                </div>)}
              </div>
            </>}
          </>}

          {/* ═══ TAB: Examples ═══ */}
          {popupTab==="examples"&&isKorean&&<>
            {examples.length>0?<>
              {sectionTitle(`${examples.length} example${examples.length>1?"s":""} from curriculum`)}
              {examples.map((ex,i)=>glossBubble(<>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1,lineHeight:1.5}}>{ex.korean}</span>
                  <SpeakerButton text={ex.korean} lang={ttsLocale} size={11} showToast={showToast}/>
                </div>
                {ex.english&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.65)",fontWeight:600,marginTop:3}}>{ex.english}</div>}
                <div style={{fontSize:9,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:3,fontWeight:700}}>Unit {ex.unitN} / {ex.lessonId}</div>
              </>,{key:i}))}
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>No curriculum examples found for this word yet.</div>}

            {/* Idioms */}
            {idioms.length>0&&<>
              {sectionTitle("Idioms & Expressions")}
              {idioms.map((id,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:800,color:dk?"#FFD600":"#C6A700"}}>{id.idiom}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600}}>{id.meaning}</div>
              </>,{key:i,mb:4}))}
            </>}
          </>}

          {/* ═══ TAB: Grammar ═══ */}
          {popupTab==="grammar"&&isKorean&&<>
            {entry.note&&<>{sectionTitle("Usage Notes")}{subNote(entry.note)}</>}
            {entry.particle&&<>{sectionTitle("Particle Patterns")}{subNote(entry.particle)}</>}
            {entry.uses&&entry.uses.length>0&&<>
              {sectionTitle("Usage Examples")}
              {entry.uses.map((u,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{u.k}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:2}}>{u.e}</div>
              </>,{key:i}))}
            </>}
            {/* DeepDive from teach card (if available via note match) */}
            {(!entry.note&&!entry.particle&&!(entry.uses&&entry.uses.length))&&
              <div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>
                Deep grammar info coming soon.
              </div>}
          </>}

          {/* ═══ TAB: Related ═══ */}
          {popupTab==="related"&&isKorean&&<>
            {/* Morpheme families */}
            {morphemes.length>0&&<>
              {sectionTitle("Word Family")}
              {morphemes.map((m,i)=><div key={i} style={{marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:800,color:dk?"#A890FF":"#7B5EE8",marginBottom:4}}>
                  {m.morph} {m.hanja&&`(${m.hanja})`} = {m.meaning}
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                  {m.family.map((w,j)=>{
                    const famEntry=WORD_DB.ko&&WORD_DB.ko[w.toLowerCase()];
                    return <button key={j} onClick={()=>{if(famEntry){setExpanded(famEntry);setPopupTab("overview");}}} style={{
                      padding:"5px 12px",borderRadius:12,border:"none",cursor:famEntry?"pointer":"default",
                      fontFamily:"inherit",fontSize:12,fontWeight:700,
                      background:famEntry?tabBg(false):(dk?"rgba(255,255,255,0.04)":"rgba(240,234,255,0.4)"),
                      color:famEntry?(dk?"rgba(255,255,255,0.85)":"#6040C0"):(dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.3)"),
                      transition:"all .2s",
                    }}>{w} {famEntry?`(${famEntry.en||""})`:""}</button>;
                  })}
                </div>
              </div>)}
            </>}

            {/* Idioms */}
            {idioms.length>0&&<>
              {sectionTitle("Appears in Idioms")}
              {idioms.map((id,i)=>glossBubble(<>
                <div style={{fontSize:14,fontWeight:800,color:dk?"#FFD600":"#C6A700"}}>{id.idiom}</div>
                <div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600}}>{id.meaning}</div>
              </>,{key:i,mb:4}))}
            </>}

            {/* Conjugated forms as related words (verbs only) */}
            {isVerb&&conjData&&!morphemes.length&&!idioms.length&&<>
              {sectionTitle("Conjugated Forms")}
              <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>
                {Object.values(conjData).slice(0,12).map((f,i)=><button key={i} onClick={()=>setPopupTab("forms")} style={{
                  padding:"5px 12px",borderRadius:12,border:"none",cursor:"pointer",
                  fontFamily:"inherit",fontSize:12,fontWeight:700,
                  background:dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)",
                  color:dk?"rgba(255,255,255,0.7)":"#6040C0",transition:"all .2s",
                }}>{f.form}</button>)}
              </div>
              <div style={{fontSize:11,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",fontWeight:600,textAlign:"center"}}>Tap any form to see all conjugations</div>
            </>}
            {(!morphemes.length&&!idioms.length&&!(isVerb&&conjData))&&
              <div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>
                No related words found yet.
              </div>}
          </>}

          {/* ═══ Ask Verumius fallback — shown when data is sparse ═══ */}
          {isKorean&&(()=>{
            const hasNote=!!entry.note;
            const hasUses=entry.uses&&entry.uses.length>0;
            const hasParticle=!!entry.particle;
            const hasMorph=!!entry.morph;
            const richCount=[hasNote,hasUses,hasParticle,hasMorph].filter(Boolean).length;
            if(richCount>=2)return null;
            return <div style={{marginTop:12,textAlign:"center"}}>
              <button onClick={()=>{
                const prompt=`Tell me everything about the Korean word "${entry.word}" (${entry.en||""}). Include: etymology, all conjugated forms, common collocations, idioms it appears in, example sentences at different CEFR levels, cultural context, and common mistakes learners make.`;
                try{localStorage.setItem("vl_chat_prefill",prompt);}catch(e){}
                showToast&&showToast("Open Chat to ask Verumius!");
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06) translateY(-2px)";e.currentTarget.style.filter="brightness(1.12)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{
                padding:"10px 22px",borderRadius:16,border:"none",cursor:"pointer",fontFamily:"Quicksand, sans-serif",
                fontSize:13,fontWeight:800,transition:"all .25s",position:"relative",overflow:"hidden",
                background:dk?"linear-gradient(180deg,#F7D06B 0%,#F5A623 25%,#E8960A 55%,#D08E10 85%,#B87A08 100%)":"linear-gradient(180deg,#F7D06B 0%,#F5A623 25%,#E8960A 55%,#D08E10 85%,#B87A08 100%)",
                color:"white",textShadow:"0 1px 3px rgba(0,0,0,0.25)",
                boxShadow:"0 4px 16px rgba(245,166,35,0.45), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
              }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1}}>Ask Verumius about this word</span>
              </button>
            </div>;
          })()}
        </div>
      </div>
    );
  };

  // ── Filter helpers ──
  const toggleFilter=(set,setter,val)=>{const n=new Set(set);if(n.has(val))n.delete(val);else n.add(val);setter(n);};
  const posTypes=useMemo(()=>{const s=new Set();allWords.forEach(e=>{const b=e.pos?(e.pos.includes("_")?e.pos.split("_")[0]:e.pos):"";if(b&&b!=="unknown")s.add(b);});return [...s].sort();},[allWords]);
  const activeLevels=useMemo(()=>{const s=new Set();allWords.forEach(e=>{const l=(e.level||"A1").substring(0,2);s.add(l);});return cefrLevels.filter(l=>s.has(l));},[allWords]);
  const activeGenders=useMemo(()=>{const s=new Set();allWords.forEach(e=>{if(e.gender)s.add(e.gender);});return ["m","f","n","c","pl"].filter(g=>s.has(g));},[allWords]);
  const hasActiveFilters=filterPOS.size>0||filterLevel.size>0||filterGender.size>0||filterTaughtOnly;

  // Candy chip with full gloss arc — used for review level pills and anywhere chipStyle is called
  const candyChip=(active)=>({
    padding:"7px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:800,transition:"all .25s",position:"relative",overflow:"hidden",
    background:active?(dk?"linear-gradient(180deg,#D4C8FF 0%,#C0AEF8 8%,#A488F0 20%,#8B6AE4 38%,#7B5EE8 52%,#6545C8 72%,#5840B8 88%,#4A2BA6 100%)":"linear-gradient(180deg,#C8BAFF 0%,#B8A8FA 10%,#9B7AE8 25%,#7B5EE8 55%,#6545C8 80%,#5840B8 92%,#4A2BA6 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
    color:active?"white":(dk?"rgba(200,184,255,0.8)":"#6040C0"),
    textShadow:active?"0 1px 3px rgba(0,0,0,0.3)":"none",
    boxShadow:active?(dk?"0 0 16px rgba(123,94,232,0.45), 0 4px 14px rgba(85,53,181,0.4), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 0 14px rgba(123,94,232,0.35), 0 4px 14px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)"):(dk?"inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 6px rgba(0,0,0,0.18)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.18)"),
  });
  const chipStyle=candyChip;

  // ═══════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════
  return(
    <div className="anim" style={{maxWidth:700,margin:"0 auto"}}>
      {expanded && typeof expanded === "object" && createPortal(<WordPopup/>, document.body)}
      {/* ── Header ── */}
      <div style={{textAlign:"center",marginBottom:20}}>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4,fontFamily:"Quicksand, sans-serif"}}>Vocabulary</h2>
        <p style={{color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",fontSize:13}}>{allWords.length} words</p>
      </div>

      {/* ── Mode tabs ── */}
      <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:20,flexWrap:"wrap"}}>
        {[{id:"search",label:"Search"},{id:"browse",label:"Browse"},{id:"review",label:"Review"},...(lang==="ko"?[{id:"grammar",label:"Grammar"}]:[])].map(tab=>(
          <button key={tab.id} onClick={()=>{setMode(tab.id);setExpanded(null);setBrowsePath([]);}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.filter="brightness(1.18)";e.currentTarget.style.boxShadow=mode===tab.id?"0 0 32px rgba(123,94,232,0.7), 0 8px 24px rgba(85,53,181,0.6), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)":"0 0 20px rgba(123,94,232,0.3), 0 6px 18px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(0,0,0,0.08)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow="";}}
            style={tabStyle(mode===tab.id)}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:mode===tab.id?"linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.05) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SEARCH MODE                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="search"&&<div>
        {/* Search bar — sf-panel style frosted glass */}
        <div style={{position:"relative",borderRadius:20,overflow:"hidden",marginBottom:10,background:panelBg,border:panelBorder,boxShadow:panelShadow}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"11px 13px",background:dk?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.22)",borderRadius:20,position:"relative",zIndex:1}}>
            <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke={dk?"rgba(200,184,255,0.65)":"rgba(130,115,175,0.65)"} strokeWidth="2.3" strokeLinecap="round" style={{flexShrink:0}}><circle cx="6.5" cy="6.5" r="4.2"/><line x1="9.8" y1="9.8" x2="13.2" y2="13.2"/></svg>
            <input ref={searchRef} value={search} onChange={e=>{setSearch(e.target.value);setExpanded(null);}} placeholder="Search any word or phrase..." style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:14,fontFamily:"'Nunito','DM Sans',system-ui,sans-serif",fontWeight:600,color:dk?"rgba(255,255,255,0.9)":"var(--gray-800)",caretColor:"#7B5EE8",minWidth:0}}/>
            {search&&<span onClick={()=>{setSearch("");searchRef.current?.focus();}} style={{cursor:"pointer",fontSize:14,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.75)",padding:"0 4px"}}>&#10005;</span>}
          </div>
        </div>

        {/* Grammar color toggle + Filter bar + count */}
        <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center"}}>
          {/* Aa grammar colorizer toggle — same as lesson engine */}
          <button onClick={()=>setGrammarHl(!grammarHl)} title={grammarHl?"Grammar Colors ON":"Grammar Colors OFF"}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}
            style={{
              width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:14,fontWeight:900,fontFamily:"Quicksand, sans-serif",transition:"all .2s",
              background:grammarHl?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))"):(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
              boxShadow:grammarHl?(dk?"0 0 12px rgba(123,94,232,0.4),inset 0 1px 0 rgba(255,255,255,0.12)":"0 2px 10px rgba(123,94,232,0.2),inset 0 1px 0 rgba(255,255,255,0.9)"):"none",
              color:grammarHl?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"),
            }}>Aa</button>
          {/* Gear icon — opens grammar settings */}
          {grammarHl&&<button onClick={()=>setShowGrammarSettings(!showGrammarSettings)} title="Color settings"
            onMouseEnter={e=>{e.currentTarget.style.opacity="0.8";}}
            onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}
            style={{
              width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:15,transition:"all .2s",
              background:showGrammarSettings?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))"):(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
              color:showGrammarSettings?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"var(--gray-400)"),
              transform:showGrammarSettings?"rotate(60deg)":"rotate(0deg)",
            }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth={2}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth={2}/></svg>
          </button>}
          <button onClick={()=>setFilterOpen(p=>!p)}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.filter="brightness(1.18)";e.currentTarget.style.boxShadow="0 0 28px rgba(123,94,232,0.6), 0 8px 22px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow="";}}
            style={{
              padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",fontFamily:"Quicksand, sans-serif",fontSize:12,fontWeight:900,transition:"all .3s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",letterSpacing:0.3,
              background:filterOpen||hasActiveFilters?(dk?"linear-gradient(180deg,#E8DEFF 0%,#D4C8FF 4%,#C0AEF8 10%,#A488F0 22%,#8B6AE4 38%,#7B5EE8 52%,#6545C8 72%,#5840B8 88%,#4A2BA6 100%)":"linear-gradient(180deg,#DDD0FF 0%,#C8BAFF 6%,#B8A8FA 14%,#9B7AE8 30%,#7B5EE8 52%,#6545C8 76%,#5840B8 90%,#4A2BA6 100%)"):(dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)"),
              color:filterOpen||hasActiveFilters?"white":(dk?"rgba(200,184,255,0.95)":"#6030C0"),
              textShadow:filterOpen||hasActiveFilters?"0 1px 3px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.15)":"none",
              boxShadow:filterOpen||hasActiveFilters?(dk?"0 0 24px rgba(123,94,232,0.6), 0 6px 20px rgba(85,53,181,0.55), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -4px 0 rgba(0,0,0,0.22)":"0 0 20px rgba(123,94,232,0.5), 0 6px 20px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.18)"):(dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"),
            }}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:filterOpen||hasActiveFilters?"linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>Filters {hasActiveFilters?"*":""}</span>
          </button>
          {hasActiveFilters&&<button onClick={()=>{setFilterPOS(new Set());setFilterLevel(new Set());setFilterGender(new Set());setFilterTaughtOnly(false);}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.background=dk?"linear-gradient(180deg,#FFB0B0 0%,#FF8888 8%,#FF6B6B 20%,#F56565 38%,#E04848 55%,#D04444 72%,#B83333 88%,#A02828 100%)":"linear-gradient(180deg,#FFA8A8 0%,#FF8888 10%,#FF6B6B 22%,#F56565 40%,#E04848 58%,#D04444 75%,#B83333 90%,#A02828 100%)";e.currentTarget.style.color="white";e.currentTarget.style.boxShadow="0 0 24px rgba(245,101,101,0.55), 0 6px 20px rgba(220,60,60,0.45), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)";e.currentTarget.style.textShadow="0 1px 3px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.15)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.background=dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)";e.currentTarget.style.color=dk?"rgba(200,184,255,0.95)":"#6030C0";e.currentTarget.style.boxShadow=dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)";e.currentTarget.style.textShadow="none";}}
            style={{padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",fontSize:11,fontWeight:900,fontFamily:"Quicksand, sans-serif",transition:"all .3s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",letterSpacing:0.3,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)",color:dk?"rgba(200,184,255,0.95)":"#6030C0",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"}}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>Clear all</span>
          </button>}
          <span style={{flex:1}}/>
          <span style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>{filteredWords.length} word{filteredWords.length!==1?"s":""}</span>
        </div>

        {/* Grammar settings panel — copied from lesson engine, VerumLingua candy gloss */}
        {showGrammarSettings&&grammarHl&&isMobile&&<div onClick={()=>setShowGrammarSettings(false)} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",zIndex:9998,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}}/>}
        {showGrammarSettings&&grammarHl&&(()=>{
          if(!langPacks) return <div style={{marginTop:8,padding:"12px 14px",borderRadius:14,background:dk?"rgba(30,30,46,0.95)":"rgba(255,255,255,0.97)",border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(0,0,0,0.06)",boxShadow:dk?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 16px rgba(0,0,0,0.08)",fontSize:12,color:dk?"rgba(255,255,255,0.5)":"var(--gray-500)",marginBottom:14}}>No grammar packs available for this language yet.</div>;
          return <div style={{
            marginBottom:14,
            padding:isMobile?"22px 18px 30px":"18px 20px",
            borderRadius:isMobile?"24px 24px 0 0":20,
            background:dk
              ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
              :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
            border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
            boxShadow:dk
              ?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)"
              :"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",
            position:isMobile?"fixed":"relative",
            bottom:isMobile?0:undefined,left:isMobile?0:undefined,right:isMobile?0:undefined,
            zIndex:isMobile?9999:undefined,
            maxHeight:isMobile?"75vh":"auto",overflowY:"auto",overflow:"hidden",
            WebkitOverflowScrolling:"touch",
          }}>
            {/* Candy gloss arc */}
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
              background:dk
                ?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                :"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",
              pointerEvents:"none",borderRadius:"0 0 50% 50%",zIndex:1,
            }}/>
            {isMobile&&<div style={{width:40,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.5)",margin:"0 auto 16px",position:"relative",zIndex:2}}/>}
            <div style={{fontSize:13,fontWeight:800,color:dk?"rgba(200,190,240,0.7)":"rgba(80,60,140,0.7)",textTransform:"uppercase",letterSpacing:1.2,marginBottom:14,position:"relative",zIndex:2}}>
              {langPacks.label} Grammar Colors
            </div>
            {/* Tab strip — candy pills */}
            <div style={{display:"flex",gap:8,overflowX:"auto",paddingBottom:14,WebkitOverflowScrolling:"touch",position:"relative",zIndex:2}}>
              {langPacks.packs.map(pack=>{
                const isActive=pack.id===activePackId;
                const isP=!!pack.placeholder;
                return <button key={pack.id} onClick={()=>{if(!isP){selectPack(pack.id);setExpandedLegend(null);setGrammarEditMode(false);}}} disabled={isP} style={{
                  display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:16,
                  fontSize:12,fontWeight:800,cursor:isP?"default":"pointer",
                  transition:"all .2s",fontFamily:"inherit",border:"none",
                  opacity:isP?0.3:1,letterSpacing:0.3,position:"relative",overflow:"hidden",
                  background:isActive
                    ?(dk
                      ?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)"
                      :"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
                    :(dk
                      ?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)"
                      :"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
                  color:isActive?"white":(dk?"rgba(200,184,255,0.9)":"#7050D8"),
                  textShadow:isActive?"0 1px 2px rgba(0,0,0,0.2)":"none",
                  boxShadow:isActive
                    ?(dk
                      ?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)"
                      :"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)")
                    :(dk
                      ?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)"
                      :"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)"),
                }}>
                  <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",
                    background:isActive
                      ?"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)"
                      :"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",
                    borderRadius:"0 0 50% 50%",pointerEvents:"none",
                  }}/>
                  <span style={{fontSize:14,fontWeight:900,lineHeight:1,position:"relative",zIndex:1}}>{pack.icon}</span>
                  <span style={{position:"relative",zIndex:1}}>{pack.label}</span>
                  {isP&&<span style={{fontSize:9,opacity:0.6,marginLeft:2,position:"relative",zIndex:1}}>soon</span>}
                </button>;
              })}
            </div>
            {/* Active pack legend — colored candy pills */}
            {activePack&&<div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:11,fontWeight:700,color:dk?"rgba(255,255,255,0.5)":"rgba(80,60,140,0.5)",marginBottom:10,lineHeight:1.4}}>{activePack.desc}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {activePack.legend.map(item=>{
                  const isOff=item.key&&langDisabled.includes(item.key);
                  const restSh=`0 4px 12px ${item.color}66, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`;
                  const glowSh=`0 0 28px ${item.color}88, 0 0 48px ${item.color}33, 0 8px 20px ${item.color}66, inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)`;
                  return <button key={item.label} onClick={()=>{
                    if(grammarEditMode&&item.key){toggleCatDisabled(item.key);}
                    else{setExpandedLegend(expandedLegend===item.label?null:item.label);}
                  }}
                  onMouseEnter={e=>{if(!isOff){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowSh;}}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=restSh;}}
                  style={{
                    display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:14,
                    fontSize:11,fontWeight:800,cursor:"pointer",border:"none",fontFamily:"inherit",
                    position:"relative",overflow:"hidden",transition:"all .2s",letterSpacing:0.3,
                    background:pillGradient(item.color),
                    color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.25)",
                    opacity:isOff?0.3:1,
                    boxShadow:restSh,
                  }}>
                    <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",
                      background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",
                      borderRadius:"0 0 50% 50%",pointerEvents:"none",
                    }}/>
                    <span style={{position:"relative",zIndex:1}}>{item.label}</span>
                    {grammarEditMode&&<span style={{position:"relative",zIndex:1,width:14,height:14,borderRadius:7,marginLeft:2,
                      border:"2px solid rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",
                      background:isOff?"transparent":"rgba(255,255,255,0.3)",fontSize:9,lineHeight:1,
                    }}>{isOff?"":"✓"}</span>}
                  </button>;
                })}
              </div>
              {/* Expanded explanation card */}
              {expandedLegend&&!grammarEditMode&&(()=>{
                const item=activePack.legend.find(l=>l.label===expandedLegend);
                if(!item||!item.desc) return null;
                return <div style={{
                  marginTop:10,padding:"10px 14px",borderRadius:13,
                  background:dk?"rgba(28,24,62,0.94)":"var(--card-bg)",
                  border:dk?"1.5px solid rgba(100,88,158,0.42)":"1.5px solid rgba(220,215,238,0.85)",
                  borderLeft:`3px solid ${item.color}`,
                  boxShadow:dk
                    ?"0 2px 8px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)"
                    :"0 2px 8px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
                  fontSize:12,fontWeight:600,lineHeight:1.5,
                  color:dk?"rgba(255,255,255,0.7)":"rgba(60,40,120,0.7)",
                }}>
                  <span style={{fontWeight:800,color:item.color}}>{item.label}</span>{" "}{item.desc}
                </div>;
              })()}
              {/* Edit toggle */}
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}>
                <button onClick={()=>{setGrammarEditMode(!grammarEditMode);setExpandedLegend(null);}} style={{
                  background:grammarEditMode?(dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)"):"transparent",
                  border:"none",cursor:"pointer",fontFamily:"inherit",
                  fontSize:11,fontWeight:700,letterSpacing:0.3,
                  color:grammarEditMode?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"rgba(80,60,140,0.4)"),
                  display:"flex",alignItems:"center",gap:4,padding:"4px 8px",borderRadius:8,
                  transition:"all .15s",
                }}>
                  <span style={{fontSize:13}}>{grammarEditMode?"✓":"✏️"}</span>
                  {grammarEditMode?"Done":"Edit"}
                </button>
              </div>
            </div>}
          </div>;
        })()}

        {/* Filter panel — frosted glass sf-panel style */}
        {filterOpen&&<div className="anim" style={{marginBottom:16,padding:16,borderRadius:20,position:"relative",overflow:"hidden",background:panelBg,border:panelBorder,boxShadow:panelShadow}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Part of Speech</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
              {posTypes.map(p=><button key={p} onClick={()=>toggleFilter(filterPOS,setFilterPOS,p)}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-1px)";e.currentTarget.style.filter="brightness(1.15)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={candyChip(filterPOS.has(p))}>{cap(p)}</button>)}
            </div>
            {activeGenders.length>0&&<>
              <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Gender</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
                {activeGenders.map(g=><button key={g} onClick={()=>toggleFilter(filterGender,setFilterGender,g)}
                  onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                  style={candyChip(filterGender.has(g))}>{genderLabels[g]||g}</button>)}
              </div>
            </>}
            <div style={{fontSize:10,fontWeight:800,color:dk?"rgba(255,255,255,0.6)":"rgba(100,80,180,0.65)",marginBottom:8,textTransform:"uppercase",letterSpacing:0.8}}>Level</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
              {activeLevels.map(lv=><button key={lv} onClick={()=>toggleFilter(filterLevel,setFilterLevel,lv)}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-1px)";e.currentTarget.style.filter="brightness(1.15)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={candyChip(filterLevel.has(lv))}>{lv}</button>)}
            </div>
            <button onClick={()=>setFilterTaughtOnly(p=>!p)}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={candyChip(filterTaughtOnly)}>Taught only</button>
          </div>
        </div>}

        {/* Form-to-lemma resolution badge */}
        {search&&lang==="ko"&&KOREAN_FORM_INDEX&&KOREAN_FORM_INDEX[search.toLowerCase()]&&(()=>{
          const lemma=KOREAN_FORM_INDEX[search.toLowerCase()];
          const lemmaEntry=WORD_DB.ko&&WORD_DB.ko[lemma.toLowerCase()];
          return <div style={{borderRadius:16,padding:"10px 14px",marginBottom:10,background:dk?"linear-gradient(135deg,rgba(46,205,167,0.15),rgba(123,94,232,0.12))":"linear-gradient(135deg,rgba(46,205,167,0.12),rgba(123,94,232,0.08))",border:dk?"1px solid rgba(46,205,167,0.3)":"1px solid rgba(46,205,167,0.25)"}}>
            <div style={{fontSize:12,fontWeight:700,color:dk?"#5FE8C0":"#1AB090"}}>
              {search} is a form of <span style={{fontWeight:900,color:dk?"#fff":"#333"}}>{lemma}</span> {lemmaEntry?`(${lemmaEntry.en})`:""}
            </div>
          </div>;
        })()}
        {/* Word list */}
        {filteredWords.length===0&&<div style={{textAlign:"center",padding:40,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>
          <div style={{fontSize:14,fontWeight:600}}>No words found</div>
          <div style={{fontSize:12,marginTop:4}}>Try a different search or filter</div>
        </div>}
        <div style={{display:"grid",gap:0}}>
          {filteredWords.map((e,i)=><WordRow key={e.word+":"+i} entry={e}/>)}
        </div>
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* BROWSE MODE (Alphabetical drill-down with candy pills) */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="browse"&&<div>
        {/* Level 1: Single letters — candy gradient pills */}
        {browsePath.length===0&&<div>
          <div style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginBottom:14,textAlign:"center"}}>Choose a starting letter</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
            {browseLetters.map(l=><button key={l} onClick={()=>setBrowsePath([l])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow="0 0 24px rgba(123,94,232,0.5), 0 8px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)";}}
              style={{
                display:"inline-flex",alignItems:"center",justifyContent:"center",
                width:isMobile?48:54,height:isMobile?48:54,borderRadius:16,border:"none",cursor:"pointer",
                fontFamily:"Quicksand, sans-serif",fontSize:isMobile?18:20,fontWeight:900,
                color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                boxShadow:dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
                position:"relative",overflow:"hidden",transition:"all .25s",
              }}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"44%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
                <span>{l}</span>
                {browseLetterCounts[l]&&<span style={{fontSize:8,fontWeight:700,opacity:0.7,lineHeight:1}}>{browseLetterCounts[l]}</span>}
              </span>
            </button>)}
          </div>
        </div>}

        {/* Level 2: Two-letter combos — same candy pills */}
        {browsePath.length===1&&<div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <button onClick={()=>setBrowsePath([])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{padding:"8px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontWeight:800,fontSize:12,position:"relative",overflow:"hidden",transition:"all .2s",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.8)":"#7050D8",boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)"}}>
              <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} Back</span>
            </button>
            <span style={{fontSize:22,fontWeight:900,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontFamily:"Quicksand, sans-serif"}}>{browsePath[0]}</span>
          </div>
          {browseTwoLetters.length===0?<div style={{textAlign:"center",padding:32,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13}}>No words starting with {browsePath[0]}</div>
          :<div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
            {browseTwoLetters.map(tl=><button key={tl} onClick={()=>setBrowsePath([browsePath[0],lang==="ko"?tl:tl.charAt(1)])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow="0 0 24px rgba(123,94,232,0.5), 0 8px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)";}}
              style={{
                display:"inline-flex",alignItems:"center",justifyContent:"center",
                padding:isMobile?"10px 16px":"10px 20px",borderRadius:14,border:"none",cursor:"pointer",
                fontFamily:"Quicksand, sans-serif",fontSize:isMobile?14:15,fontWeight:800,
                color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                boxShadow:dk?"0 4px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 14px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",
                position:"relative",overflow:"hidden",transition:"all .25s",minWidth:isMobile?52:60,
              }}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"44%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 55%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>{tl}</span>
            </button>)}
          </div>}
        </div>}

        {/* Level 3: Word list */}
        {browsePath.length===2&&<div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <button onClick={()=>setBrowsePath([browsePath[0]])}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.filter="brightness(1.1)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
              style={{padding:"8px 16px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontWeight:800,fontSize:12,position:"relative",overflow:"hidden",transition:"all .2s",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.8)":"#7050D8",boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)"}}>
              <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} {browsePath[0]}</span>
            </button>
            <span style={{fontSize:22,fontWeight:900,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontFamily:"Quicksand, sans-serif"}}>{lang==="ko"?browsePath[1]:(browsePath[0]+browsePath[1])}</span>
            <span style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>{browseWords.length} word{browseWords.length!==1?"s":""}</span>
          </div>
          {browseWords.length===0?<div style={{textAlign:"center",padding:32,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13}}>No words found</div>
          :<div style={{display:"grid",gap:0}}>
            {browseWords.map((e,i)=><WordRow key={e.word+":"+i} entry={e}/>)}
          </div>}
        </div>}
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* REVIEW MODE                                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="review"&&<div>
        {/* Level filter + shuffle */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
          <button onClick={()=>setReviewLevel(null)} style={chipStyle(!reviewLevel)}>All</button>
          {cefrLevels.map(lv=><button key={lv} onClick={()=>setReviewLevel(reviewLevel===lv?null:lv)} style={chipStyle(reviewLevel===lv)}>{lv}</button>)}
          <span style={{width:1,height:20,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.15)",margin:"0 4px"}}/>
          <button onClick={()=>setReviewShuffled(p=>!p)}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.06)";e.currentTarget.style.filter="brightness(1.1)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
            style={{
              padding:"6px 14px",borderRadius:12,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:700,transition:"all .25s",position:"relative",overflow:"hidden",
              background:reviewShuffled?(dk?"linear-gradient(180deg,#5FE8C0 0%,#2ECDA7 50%,#1AB090 100%)":"linear-gradient(180deg,#69F0CE 0%,#2ECDA7 50%,#1AB090 100%)"):(dk?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.65)"),
              color:reviewShuffled?"white":(dk?"rgba(200,184,255,0.7)":"#6040C0"),
              textShadow:reviewShuffled?"0 1px 2px rgba(0,0,0,0.2)":"none",
              boxShadow:reviewShuffled?"0 3px 10px rgba(46,205,167,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":(dk?"inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 4px rgba(0,0,0,0.15)":"inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 4px rgba(112,80,216,0.08)"),
            }}>Shuffle</button>
        </div>

        {reviewWords.length===0?
          <div style={{textAlign:"center",padding:40,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>
            <div style={{fontSize:14,fontWeight:600}}>No taught words yet</div>
            <div style={{fontSize:12,marginTop:4}}>Complete lessons to unlock review cards</div>
          </div>
        :
          <div>
            {/* Progress */}
            <div style={{textAlign:"center",marginBottom:14}}>
              <span style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)"}}>{reviewIndex+1} / {reviewWords.length}</span>
              <div style={{height:3,borderRadius:2,background:dk?"rgba(255,255,255,0.06)":"rgba(123,94,232,0.08)",marginTop:6,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:2,background:pillGradient("#7B5EE8"),width:((reviewIndex+1)/reviewWords.length*100)+"%",transition:"width .3s"}}/>
              </div>
            </div>

            {/* Flashcard */}
            {(()=>{
              const card=reviewWords[reviewIndex];
              if(!card)return null;
              return <div onClick={()=>setReviewFlipped(p=>!p)} style={{
                cursor:"pointer",position:"relative",overflow:"hidden",borderRadius:22,padding:isMobile?"32px 24px":"40px 32px",
                minHeight:isMobile?220:260,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",
                background:panelBg,border:panelBorder,boxShadow:panelShadow,transition:"all .3s",
              }}>
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:glossArc,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>

                {!reviewFlipped?
                  /* ── Front: just the word + speaker — NEON WHITE ── */
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:isMobile?28:36,fontWeight:900,color:"#fff",textShadow:neonSh,marginBottom:8,fontFamily:"Quicksand, sans-serif"}}>
                      {card.display||card.word}
                    </div>
                    <SpeakerButton text={card.word} lang={ttsLocale} size={20} showToast={showToast}/>
                    <div style={{fontSize:12,color:"rgba(255,255,255,0.6)",marginTop:16,fontWeight:700,textShadow:subNeon}}>Tap to reveal</div>
                  </div>
                :
                  /* ── Back: translation NEON WHITE, details strong readable ── */
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:12,fontWeight:800,color:"#fff",marginBottom:6,letterSpacing:1,textTransform:"uppercase",textShadow:neonSh}}>{card.display||card.word}</div>
                    <div style={{fontSize:isMobile?24:30,fontWeight:900,color:"#fff",textShadow:neonSh,marginBottom:12,fontFamily:"Quicksand, sans-serif"}}>{card.en}</div>
                    <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",marginBottom:10}}>
                      {card.level&&<span style={{display:"inline-block",padding:"3px 10px",borderRadius:8,fontSize:10,fontWeight:800,color:"white",background:"rgba(255,255,255,0.25)",textShadow:subNeon,letterSpacing:0.3,backdropFilter:"blur(4px)"}}>{(card.level||"A1").substring(0,2)}</span>}
                      <span style={{display:"inline-block",padding:"3px 10px",borderRadius:8,fontSize:10,fontWeight:700,color:"white",background:"rgba(255,255,255,0.2)",textShadow:subNeon,letterSpacing:0.5,textTransform:"uppercase",backdropFilter:"blur(4px)"}}>{posLabel(card.pos)}</span>
                    </div>
                    {card.example&&<div style={{fontSize:13,fontWeight:700,color:"rgba(30,20,60,0.85)",fontStyle:"italic",maxWidth:400,lineHeight:1.5,background:"rgba(255,255,255,0.35)",borderRadius:12,padding:"8px 12px",backdropFilter:"blur(4px)"}}>{card.example}</div>}
                    {card.exampleEn&&<div style={{fontSize:12,fontWeight:600,color:"rgba(30,20,60,0.7)",marginTop:4,fontStyle:"italic"}}>{card.exampleEn}</div>}
                  </div>
                }
              </div>;
            })()}

            {/* Navigation buttons */}
            <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:16}}>
              <button onClick={(e)=>{e.stopPropagation();setReviewFlipped(false);setReviewIndex(p=>Math.max(0,p-1));}}
                disabled={reviewIndex===0}
                onMouseEnter={e=>{if(reviewIndex>0){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={{
                  padding:"10px 24px",borderRadius:14,border:"none",cursor:reviewIndex===0?"default":"pointer",fontFamily:"inherit",fontSize:13,fontWeight:800,
                  opacity:reviewIndex===0?0.3:1,position:"relative",overflow:"hidden",transition:"all .25s",
                  background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",
                  color:dk?"rgba(200,184,255,0.9)":"#7050D8",
                  boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)",
                }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>{chevronL} Prev</span>
              </button>
              <button onClick={(e)=>{e.stopPropagation();setReviewFlipped(false);setReviewIndex(p=>Math.min(reviewWords.length-1,p+1));}}
                disabled={reviewIndex>=reviewWords.length-1}
                onMouseEnter={e=>{if(reviewIndex<reviewWords.length-1){e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}
                style={{
                  padding:"10px 24px",borderRadius:14,border:"none",cursor:reviewIndex>=reviewWords.length-1?"default":"pointer",fontFamily:"inherit",fontSize:13,fontWeight:800,
                  opacity:reviewIndex>=reviewWords.length-1?0.3:1,position:"relative",overflow:"hidden",transition:"all .25s",
                  background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",
                  color:"white",textShadow:"0 1px 2px rgba(0,0,0,0.2)",
                  boxShadow:"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",
                }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.12) 40%, transparent 100%)",borderRadius:"0 0 50% 50%",pointerEvents:"none"}}/>
                <span style={{position:"relative",zIndex:1,display:"inline-flex",alignItems:"center"}}>Next {chevronR}</span>
              </button>
            </div>
          </div>
        }
      </div>}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* GRAMMAR MODE (Korean grammar patterns by CEFR level)   */}
      {/* ═══════════════════════════════════════════════════════ */}
      {mode==="grammar"&&lang==="ko"&&(()=>{
        const ref=KOREAN_GRAMMAR_REFERENCE||[];
        const levels=["A1","A2","B1","B2"];
        const cats=["All",...GRAMMAR_CATEGORIES];
        const polLevels=[{id:"all",label:"All"},{id:"formal",label:"Formal"},{id:"polite",label:"Polite"},{id:"casual",label:"Casual"},{id:"written",label:"Written"}];
        const q=gramSearch.toLowerCase().trim();
        const filtered=ref.filter(p=>{
          if(!(p.level||"A1").startsWith(gramLevel))return false;
          if(gramCategory!=="All"&&p.category!==gramCategory)return false;
          if(gramPoliteness!=="all"&&p.politeness!==gramPoliteness&&p.politeness!=="all")return false;
          if(q){
            const hay=(p.title+" "+p.text+" "+(p.en||"")+" "+(p.example||"")).toLowerCase();
            if(!hay.includes(q))return false;
          }
          return true;
        });
        const sourceLabel={tip:"Grammar Tip",verb_table:"Conjugation Table",grammar:"Pattern"};
        // Strip leading emojis from tip card titles and safely convert objects to strings
        const cleanTitle=(t)=>{if(!t)return"";const s=typeof t==="object"?(t.title||t.text||JSON.stringify(t)):String(t);return s.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]+\s*/u,"").trim();};
        const safeText=(t)=>{if(!t)return null;if(typeof t==="object")return t.title?String(t.title)+(t.text?"\n"+String(t.text):""):JSON.stringify(t);return String(t);};
        return <div>
          {/* Search bar */}
          <div style={{marginBottom:12,position:"relative"}}>
            <input value={gramSearch} onChange={e=>{setGramSearch(e.target.value);setGramExpanded(null);}} placeholder="Search grammar patterns..." style={{
              width:"100%",boxSizing:"border-box",padding:"10px 14px 10px 36px",borderRadius:16,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
              background:dk?"rgba(40,30,70,0.6)":"rgba(250,248,255,0.9)",color:dk?"white":"var(--gray-800)",fontSize:13,fontWeight:600,fontFamily:"inherit",outline:"none",
            }}/>
            <span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:14,opacity:0.4}}>&#x1F50D;</span>
          </div>
          {/* Level tabs */}
          <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap",justifyContent:"center"}}>
            {levels.map(lv=><button key={lv} onClick={()=>{setGramLevel(lv);setGramExpanded(null);}} style={chipStyle(gramLevel===lv)}>{lv}</button>)}
          </div>
          {/* Category filter — scrollable row */}
          <div style={{display:"flex",gap:4,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
            {cats.map(c=><button key={c} onClick={()=>{setGramCategory(c);setGramExpanded(null);}} style={{
              padding:"5px 10px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:800,whiteSpace:"nowrap",flexShrink:0,
              background:gramCategory===c?(dk?"rgba(123,94,232,0.5)":"rgba(123,94,232,0.15)"):(dk?"rgba(255,255,255,0.06)":"rgba(240,234,255,0.6)"),
              color:gramCategory===c?(dk?"white":"#7B5EE8"):(dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.4)"),
              transition:"all .2s",
            }}>{c}</button>)}
          </div>
          {/* Politeness filter */}
          <div style={{display:"flex",gap:4,marginBottom:14,justifyContent:"center"}}>
            {polLevels.map(p=><button key={p.id} onClick={()=>{setGramPoliteness(p.id);setGramExpanded(null);}} style={{
              padding:"4px 10px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:10,fontWeight:700,
              background:gramPoliteness===p.id?(dk?"rgba(245,166,35,0.4)":"rgba(245,166,35,0.15)"):(dk?"rgba(255,255,255,0.04)":"rgba(240,234,255,0.4)"),
              color:gramPoliteness===p.id?(dk?"#FFD600":"#C6A700"):(dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)"),
              transition:"all .2s",
            }}>{p.label}</button>)}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginBottom:10,textAlign:"center"}}>{filtered.length} grammar item{filtered.length!==1?"s":""}</div>
          {filtered.length===0&&<div style={{textAlign:"center",padding:30,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:13,fontWeight:600}}>No grammar items match your filters.</div>}
          {filtered.map((item,i)=>{
            const isOpen=gramExpanded===i;
            return <div key={i} style={{marginBottom:8}}>
              <div onClick={()=>setGramExpanded(isOpen?null:i)} style={{borderRadius:18,overflow:"hidden",cursor:"pointer",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow,transition:"all .25s",position:"relative"}}>
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                <div style={{display:"flex",alignItems:"center",gap:8,padding:"13px 18px",position:"relative",zIndex:1}}>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:"Quicksand, sans-serif",fontWeight:800,fontSize:15,color:dk?"rgba(255,255,255,0.92)":"var(--gray-800)",lineHeight:1.3}}>{cleanTitle(item.title)}</div>
                    <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,184,255,0.45)":"rgba(100,80,160,0.4)",marginTop:2}}>{sourceLabel[item.source]||item.source} {item.category!=="General"?"· "+item.category:""}</div>
                  </div>
                  <span style={{fontSize:10,fontWeight:800,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",flexShrink:0}}>U{item.unitN}</span>
                </div>
              </div>
              {isOpen&&<div style={{margin:"4px 8px 0",borderRadius:16,padding:"14px 16px",background:dk?"rgba(30,28,50,0.7)":"rgba(255,255,255,0.85)",border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(200,190,240,0.3)"}}>
                {item.text&&<div style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.7)",marginBottom:8,lineHeight:1.6,whiteSpace:"pre-line"}}>{safeText(item.text)}</div>}
                {item.example&&typeof item.example==="string"&&<div style={{borderRadius:14,padding:"10px 14px",marginBottom:6,position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1}}>{item.example}</span>
                      <SpeakerButton text={item.example} lang={ttsLocale} size={11} showToast={showToast}/>
                    </div>
                    {item.exampleEn&&typeof item.exampleEn==="string"&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",fontWeight:600,marginTop:3}}>{item.exampleEn}</div>}
                  </div>
                </div>}
                {item.groups&&item.groups.length>0&&<div style={{marginBottom:6}}>
                  {item.groups.map((g,gi)=><div key={gi} style={{marginBottom:8}}>
                    <div style={{fontSize:11,fontWeight:800,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",marginBottom:4}}>{g.label||g.header||""}</div>
                    {(g.rows||[]).map((r,ri)=>{
                      const pronoun=r.pronoun||r[0]||"";const form=r.form||r[1]||"";const en=r.en||r[2]||"";
                      return <div key={ri} style={{display:"flex",gap:8,padding:"3px 0",fontSize:12,fontWeight:600}}>
                        <span style={{width:60,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",flexShrink:0}}>{pronoun}</span>
                        <span style={{color:dk?"rgba(255,255,255,0.9)":"var(--gray-800)",flex:1,fontWeight:700}}>{form}</span>
                        {en&&<span style={{color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",flexShrink:0}}>{en}</span>}
                      </div>;
                    })}
                    {(g.forms||[]).map((f,fi)=><div key={fi} style={{fontSize:12,fontWeight:600,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",padding:"2px 0"}}>{f}</div>)}
                  </div>)}
                </div>}
                {item.deepDive&&<div style={{fontSize:11,fontWeight:600,color:dk?"rgba(200,184,255,0.55)":"rgba(100,80,160,0.5)",marginTop:6,lineHeight:1.6,whiteSpace:"pre-line"}}>{safeText(item.deepDive)}</div>}
                <div style={{fontSize:9,fontWeight:700,color:dk?"rgba(200,184,255,0.3)":"rgba(100,80,160,0.3)",marginTop:6}}>Unit {item.unitN} / {item.lessonId}</div>
              </div>}
            </div>;
          })}
        </div>;
      })()}
    </div>
  );
}

// ━━━━━━━━━━ CEFR REFERENCE PAGE ━━━━━━━━━━

const CEFR_REFS = { de: GERMAN_CEFR, ko: KOREAN_CEFR, nl: DUTCH_CEFR, fr: FRENCH_CEFR, es: SPANISH_CEFR };

function CefrReferencePage({lang}){
  const dk=document.documentElement.classList.contains("dark");
  const ref = CEFR_REFS[lang];
  const [tab,setTab]=useState("vocab");
  const [level,setLevel]=useState("ALL");
  const [search,setSearch]=useState("");
  const [expandedGrammar,setExpandedGrammar]=useState(null);

  if(!ref) return(
    <div className="anim" style={{textAlign:"center",padding:"60px 20px"}}>
      <div style={{fontSize:48,marginBottom:16}}>{"📚"}</div>
      <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"var(--gray-800)",marginBottom:8,fontFamily:"'Quicksand',sans-serif"}}>CEFR Reference</h2>
      <p style={{color:"var(--gray-500)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>No CEFR reference data loaded for this language yet.</p>
      <p style={{color:"var(--gray-400)",fontSize:13,fontFamily:"'Nunito',sans-serif",marginTop:8}}>Available: {Object.keys(CEFR_REFS).map(k=>({de:"German",ko:"Korean",nl:"Dutch",fr:"French",es:"Spanish"}[k]||k)).join(", ")}</p>
    </div>
  );

  const levels=["ALL","A1","A2","B1","B2"];
  const tabs=[
    {id:"vocab",label:"Vocabulary",icon:"📖",count:ref.vocabulary?.length||0},
    {id:"grammar",label:"Grammar",icon:"📐",count:Object.values(ref.grammar||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"idioms",label:"Idioms & Phrases",icon:"💬",count:Object.values(ref.idioms||{}).reduce((s,arr)=>s+(Array.isArray(arr)?arr.length:0),0)},
    {id:"particles",label:"Particles & Connectors",icon:"🔗"},
    {id:"functions",label:"Communicative Functions",icon:"🗣️"},
  ];

  // Filter vocabulary
  const filteredVocab = useMemo(()=>{
    if(!ref.vocabulary) return [];
    let items = ref.vocabulary;
    if(level!=="ALL") items = items.filter(w=>w.l===level);
    if(search.trim()){
      const q=search.toLowerCase().trim();
      items = items.filter(w=>(w.w||"").toLowerCase().includes(q)||(w.f||"").toLowerCase().includes(q)||(w.tr||"").toLowerCase().includes(q));
    }
    return items.sort((a,b)=>(a.w||"").localeCompare(b.w||"","de"));
  },[ref.vocabulary,level,search]);

  // Grammar grouped by level
  const grammarByLevel = useMemo(()=>{
    if(!ref.grammar) return {};
    const out={A1:[],A2:[],B1:[],B2:[]};
    for(const lv of ["A1","A2","B1","B2"]){
      if(ref.grammar[lv]) out[lv]=ref.grammar[lv];
    }
    return out;
  },[ref.grammar]);

  const bandColor=(lv)=>({A1:"#2ECDA7",A2:"#4A8FE7",B1:"#7B5EE8",B2:"#E8475E"}[lv]||"#888");

  const posLabel=(p)=>({noun:"Noun",verb:"Verb",adj:"Adjective",adv:"Adverb",prep:"Preposition",conj:"Conjunction",pron:"Pronoun",part:"Particle",interj:"Interjection",phrase:"Phrase",prefix:"Prefix",modal:"Modal verb",aux:"Auxiliary",num:"Number",det:"Determiner",abbrev:"Abbreviation"}[p]||p||"");
  const genderLabel=(g)=>({m:"masc",f:"fem",n:"neut",pl:"plural"}[g]||g||"");
  const genderColor=(g)=>({m:"#0091FF",f:"#D50000",n:"#FF8F00",pl:"#00BFA5"}[g]||"#888");

  // Pill component
  const LevelPill=({lv,small})=>(
    <span style={{display:"inline-block",padding:small?"1px 6px":"2px 8px",borderRadius:10,fontSize:small?10:11,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"#fff",background:pillGradient(bandColor(lv)),textShadow:"0 1px 2px rgba(0,0,0,0.25)",letterSpacing:0.5,boxShadow:`0 2px 6px ${bandColor(lv)}44, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)`}}>{lv}</span>
  );

  // Compound bubble row style
  const rowStyle={
    background:dk
      ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
      :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
    boxShadow:dk
      ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
      :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
    borderRadius:22,padding:"10px 14px",position:"relative",overflow:"hidden",marginBottom:6,
  };

  // Gloss arc for rows
  const GlossArc=()=>(
    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
  );

  // Frosted panel style
  const panelStyle={
    background:dk
      ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
      :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
    border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
    boxShadow:dk
      ?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)"
      :"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",
    borderRadius:20,padding:"16px",position:"relative",overflow:"hidden",marginBottom:16,
  };

  return(
    <div className="anim" style={{maxWidth:900,margin:"0 auto",padding:"0 12px"}}>
      {/* Header */}
      <div style={{textAlign:"center",padding:"16px 0 20px"}}>
        <h1 className="hd" style={{fontSize:26,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:4}}>
          CEFR Reference: {ref.meta?.languageName||lang.toUpperCase()}
        </h1>
        <p style={{fontSize:13,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif"}}>
          {ref.meta?.stats?.A1?.words||0} A1 + {ref.meta?.stats?.A2?.words||0} A2 + {ref.meta?.stats?.B1?.words||0} B1{ref.meta?.stats?.B2?.words ? ` + ${ref.meta.stats.B2.words} B2`:""} words from {ref.meta?.sources?.[0]||"official reference lists"}
        </p>
      </div>

      {/* Section tabs */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginBottom:16}}>
        {tabs.map(tb=>{
          const active=tab===tb.id;
          return(
            <button key={tb.id} onClick={()=>setTab(tb.id)} style={{
              padding:"8px 14px",borderRadius:16,border:"none",cursor:"pointer",
              fontFamily:"'Quicksand',sans-serif",fontWeight:900,fontSize:13,letterSpacing:0.3,
              position:"relative",overflow:"hidden",
              transition:"all .25s cubic-bezier(.4,0,.2,1)",
              background:active
                ?(dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
                :(dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
              color:active?"white":(dk?"rgba(200,184,255,0.9)":"#7050D8"),
              textShadow:active?"0 1px 2px rgba(0,0,0,0.2)":"none",
              boxShadow:active
                ?(dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)")
                :(dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)"),
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:active?"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>{tb.icon} {tb.label}{tb.count!=null?` (${tb.count})`:""}</span>
            </button>
          );
        })}
      </div>

      {/* Level filter — shared across all tabs */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",marginBottom:12}}>
        {levels.map(lv=>{
          const active=level===lv;
          const c=lv==="ALL"?"#888":bandColor(lv);
          return(
            <button key={lv} onClick={()=>setLevel(lv)} style={{
              padding:"5px 12px",borderRadius:14,border:"none",cursor:"pointer",
              fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:12,
              background:active?pillGradient(c):(dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"),
              color:active?"#fff":(dk?"rgba(255,255,255,0.6)":"var(--gray-600)"),
              textShadow:active?"0 1px 2px rgba(0,0,0,0.25)":"none",
              boxShadow:active?`0 3px 10px ${c}55, inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)`:"none",
              transition:"all .2s ease",
            }}>
              {lv}
            </button>
          );
        })}
      </div>

      {/* VOCABULARY TAB */}
      {tab==="vocab"&&(
        <div>
          {/* Search */}
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
            <input
              type="text" value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Search words..."
              style={{
                flex:1,padding:"7px 12px",borderRadius:12,
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                background:dk?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.8)",
                color:"var(--gray-800)",fontSize:13,fontFamily:"'Nunito',sans-serif",
                outline:"none",
              }}
            />
          </div>

          {/* Stats */}
          <div style={{fontSize:12,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif",marginBottom:10}}>
            Showing {filteredVocab.length} of {ref.vocabulary?.length||0} words
          </div>

          {/* Word list — virtualized-ish: show first 200, load more on scroll */}
          <VocabTable words={filteredVocab} dk={dk} rowStyle={rowStyle} LevelPill={LevelPill} posLabel={posLabel} genderLabel={genderLabel} genderColor={genderColor} GlossArc={GlossArc}/>
        </div>
      )}

      {/* GRAMMAR TAB */}
      {tab==="grammar"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=grammarByLevel[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Grammar Constructs ({items.length})</span>
                </div>
                {items.map((g,gi)=>(
                  <div key={gi} style={{...rowStyle,cursor:"pointer"}} onClick={()=>setExpandedGrammar(expandedGrammar===`${lv}-${gi}`?null:`${lv}-${gi}`)}>
                    <GlossArc/>
                    <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"flex-start",gap:10}}>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{g.name||g.construct||"Unnamed"}</div>
                        {g.desc&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontFamily:"'Nunito',sans-serif",marginTop:2}}>{g.desc}</div>}
                        {expandedGrammar===`${lv}-${gi}`&&(
                          <div style={{marginTop:8,fontSize:12,fontFamily:"'Nunito',sans-serif",color:"var(--gray-600)"}}>
                            {g.example&&<div style={{marginBottom:4}}><strong>Example:</strong> {g.example}</div>}
                            {g.exampleEn&&<div style={{color:"#2ECDA7",marginBottom:4}}>{g.exampleEn}</div>}
                            {g.note&&<div style={{fontStyle:"italic",color:"var(--gray-500)"}}>{g.note}</div>}
                          </div>
                        )}
                      </div>
                      <span style={{fontSize:11,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif"}}>{expandedGrammar===`${lv}-${gi}`?"▲":"▼"}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* IDIOMS TAB */}
      {tab==="idioms"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=ref.idioms?.[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Idioms & Phrases ({items.length})</span>
                </div>
                {items.map((itm,i)=>(
                  <div key={i} style={rowStyle}>
                    <GlossArc/>
                    <div style={{position:"relative",zIndex:1}}>
                      <div style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{itm.phrase||itm}</div>
                      {itm.meaning&&<div style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",marginTop:2}}>{itm.meaning}</div>}
                      {itm.lit&&<div style={{fontSize:11,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif",fontStyle:"italic",marginTop:1}}>Lit: {itm.lit}</div>}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* PARTICLES & CONNECTORS TAB */}
      {tab==="particles"&&(
        <div>
          {/* Korean-style particles (by level) */}
          {ref.particles&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Particles</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const items=ref.particles?.[lv];
                if(!items||!items.length) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {items.map((pt,i)=>(
                        <div key={i} style={rowStyle}>
                          <GlossArc/>
                          <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
                            <span style={{fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",fontSize:15,minWidth:60}}>{pt.w}</span>
                            <span style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",textTransform:"uppercase",letterSpacing:0.5,minWidth:60}}>{pt.cat}</span>
                            <span style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",fontWeight:600}}>{pt.meaning}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Modal particles (German-style) */}
          {ref.modalParticles&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Modal Particles</h3>
              {["A2","B1","B2"].map(lv=>{
                const items=ref.modalParticles?.[lv];
                if(!items||!items.length) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {items.map((p2,i)=>(
                        <div key={i} style={rowStyle}>
                          <GlossArc/>
                          <div style={{position:"relative",zIndex:1}}>
                            <span style={{fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",fontSize:14}}>{p2.word}</span>
                            {p2.meaning&&<span style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",marginLeft:8}}>{p2.meaning}</span>}
                            {p2.example&&<div style={{fontSize:11,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif",fontStyle:"italic",marginTop:2}}>{p2.example}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Prepositions */}
          {ref.prepositions&&(
            <div style={{...panelStyle,marginBottom:20}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Prepositions by Case</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const obj=ref.prepositions?.[lv];
                if(!obj) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {Object.entries(obj).map(([caseType,preps])=>(
                        <div key={caseType} style={{marginBottom:6}}>
                          <span style={{fontSize:12,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:dk?"rgba(200,184,255,0.7)":"rgba(100,80,180,0.65)",textTransform:"uppercase",letterSpacing:0.6}}>{caseType}:</span>
                          <span style={{fontSize:13,fontFamily:"'Nunito',sans-serif",color:"var(--gray-700)",marginLeft:6}}>{preps.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Conjunctions */}
          {ref.conjunctions&&(
            <div style={panelStyle}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <h3 style={{fontSize:16,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",marginBottom:12,position:"relative",zIndex:1}}>Conjunctions</h3>
              {["A1","A2","B1","B2"].map(lv=>{
                const obj=ref.conjunctions?.[lv];
                if(!obj) return null;
                if(level!=="ALL"&&level!==lv) return null;
                return(
                  <div key={lv} style={{marginBottom:12,position:"relative",zIndex:1}}>
                    <LevelPill lv={lv}/>
                    <div style={{marginTop:6}}>
                      {Object.entries(obj).map(([conj,items])=>(
                        <div key={conj} style={{marginBottom:6}}>
                          <span style={{fontSize:12,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:dk?"rgba(200,184,255,0.7)":"rgba(100,80,180,0.65)",textTransform:"uppercase",letterSpacing:0.6}}>{conj}:</span>
                          <span style={{fontSize:13,fontFamily:"'Nunito',sans-serif",color:"var(--gray-700)",marginLeft:6}}>{items.join(", ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* COMMUNICATIVE FUNCTIONS TAB */}
      {tab==="functions"&&(
        <div>
          {["A1","A2","B1","B2"].map(lv=>{
            const items=ref.communicativeFunctions?.[lv]||[];
            if(level!=="ALL"&&level!==lv) return null;
            if(!items.length) return null;
            return(
              <div key={lv} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <LevelPill lv={lv}/>
                  <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)",textTransform:"uppercase",letterSpacing:0.8}}>{lv} Functions ({items.length})</span>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {items.map((fn,i)=>(
                    <span key={i} style={{
                      display:"inline-block",padding:"6px 12px",borderRadius:14,
                      fontSize:12,fontWeight:700,fontFamily:"'Nunito',sans-serif",
                      background:dk?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.85)",
                      border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.35)",
                      color:dk?"rgba(255,255,255,0.8)":"var(--gray-700)",
                    }}>{fn}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Sub-component: vocabulary table with pagination
function VocabTable({words,dk,rowStyle,LevelPill,posLabel,genderLabel,genderColor,GlossArc}){
  const [showCount,setShowCount]=useState(100);
  const visible=words.slice(0,showCount);

  return(
    <div>
      {/* Column headers */}
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 60px 2fr",gap:8,padding:"4px 14px",fontSize:11,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",textTransform:"uppercase",letterSpacing:0.8,marginBottom:4}}>
        <span>Word</span><span>Type</span><span>Level</span><span>Translation</span>
      </div>

      {visible.map((w,i)=>(
        <div key={i} style={{...rowStyle,padding:"8px 14px"}}>
          <GlossArc/>
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"2fr 1fr 60px 2fr",gap:8,alignItems:"center"}}>
            <div>
              <span style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:w.g?genderColor(w.g):"var(--gray-800)"}}>{w.w}</span>
              {w.f&&w.f!==w.w&&<span style={{fontSize:11,color:"var(--gray-400)",fontFamily:"'Nunito',sans-serif",marginLeft:6}}>{w.f}</span>}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:3}}>
              {w.p&&<span style={{fontSize:10,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(200,184,255,0.5)":"var(--gray-500)"}}>{posLabel(w.p)}</span>}
              {w.g&&<span style={{fontSize:10,fontWeight:700,color:genderColor(w.g)}}>{genderLabel(w.g)}</span>}
            </div>
            <LevelPill lv={w.l} small/>
            <span style={{fontSize:12,color:"#2ECDA7",fontFamily:"'Nunito',sans-serif",fontWeight:600}}>{w.tr}</span>
          </div>
        </div>
      ))}

      {showCount<words.length&&(
        <div style={{textAlign:"center",padding:"12px 0"}}>
          <button onClick={()=>setShowCount(s=>s+200)} style={{
            padding:"8px 24px",borderRadius:16,border:"none",cursor:"pointer",
            fontFamily:"'Quicksand',sans-serif",fontWeight:900,fontSize:13,
            background:dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))",
            color:dk?"#B8A8FA":"#7B5EE8",
            boxShadow:dk?"0 0 12px rgba(123,94,232,0.4),inset 0 1px 0 rgba(255,255,255,0.12)":"0 2px 10px rgba(123,94,232,0.2),inset 0 1px 0 rgba(255,255,255,0.9)",
          }}>
            Show more ({words.length - showCount} remaining)
          </button>
        </div>
      )}

      {words.length===0&&(
        <div style={{textAlign:"center",padding:"40px 20px",color:"var(--gray-400)",fontSize:14,fontFamily:"'Nunito',sans-serif"}}>
          No words match your filters.
        </div>
      )}
    </div>
  );
}

// ━━━━━━━━━━ IDIOMS PAGE ━━━━━━━━━━

function IdiomsPage({lang,baseLang="en"}){
  const idioms=[
    {nl:"Met de deur in huis vallen",en:"To get straight to the point",lit:"To fall into the house with the door",level:"A2",note:"Used when someone skips small talk and says what they mean directly."},
    {nl:"Een appeltje voor de dorst",en:"Savings for a rainy day",lit:"An apple for thirst",level:"B1",note:"Having money or resources saved up for when you need them."},
    {nl:"Het regent pijpenstelen",en:"It's raining cats and dogs",lit:"It's raining pipe stems",level:"A2",note:"Very Dutch — because it rains so much in the Netherlands! 🌧️"},
    {nl:"Helaas, pindakaas",en:"Too bad, so sad",lit:"Unfortunately, peanut butter",level:"A1",note:"Playful rhyme used to say 'oh well, nothing we can do about it'. Very informal."},
    {nl:"Nu komt de aap uit de mouw",en:"Now the truth comes out",lit:"Now the monkey comes out of the sleeve",level:"B1",note:"When someone's real intentions are finally revealed."},
    {nl:"Dat is mosterd na de maaltijd",en:"That's too little, too late",lit:"That's mustard after the meal",level:"B2",note:"Help or advice that arrives after it's no longer useful."},
    {nl:"Op een koopje",en:"For a bargain / on the cheap",lit:"On a little buy",level:"A2",note:"The Dutch love a good deal — this phrase is used constantly!"},
    {nl:"Iets door de vingers zien",en:"To turn a blind eye",lit:"To see something through the fingers",level:"B1",note:"Deliberately ignoring someone's mistake or wrongdoing."},
  ];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:36,marginBottom:8}}>💬</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("idioms_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("idioms_sub",baseLang)} {LANGUAGES.find(l=>l.code===lang)?.native||""}</p>
      </div>

      <div style={{display:"grid",gap:14}}>
        {idioms.map((id,i)=>(
          <div key={i} style={{background:"linear-gradient(145deg, #F8F4FF, #FFF8F4)",borderRadius:20,border:"1.5px solid rgba(123,94,232,0.12)",padding:"20px 22px",boxShadow:"0 3px 12px rgba(0,0,0,0.03)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{padding:"3px 12px",borderRadius:10,background:"var(--purple-flat)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{id.level}</span>
            </div>
            <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:4}}>"{id.nl}"</div>
            <div style={{fontSize:14,color:"var(--teal-dark)",fontWeight:700,marginBottom:2}}>→ {id.en}</div>
            <div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",marginBottom:10}}>Literally: "{id.lit}"</div>
            {id.note&&<div style={{fontSize:13,color:"var(--gray-500)",lineHeight:1.6,background:"rgba(255,255,255,0.6)",borderRadius:12,padding:"10px 14px"}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,verticalAlign:"middle"}}/>{id.note}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ━━━━━━━━━━ ONBOARDING ━━━━━━━━━━

// Flag color mappings for logo gradient
const FLAG_COLORS={
  nl:["#AE1C28","#FFFFFF","#21468B"], // Red White Blue (horizontal)
  fr:["#002395","#FFFFFF","#ED2939"], // Blue White Red
  de:["#000000","#DD0000","#FFCE00"], // Black Red Gold
  es:["#AA151B","#F1BF00","#AA151B"], // Red Yellow Red
  ro:["#002B7F","#FCD116","#CE1126"], // Blue Yellow Red
  it:["#008C45","#FFFFFF","#CD212A"], // Green White Red
  pt:["#006600","#FF0000","#FFCC00"],
  ja:["#FFFFFF","#BC002D","#FFFFFF"], // White Red White (hinomaru)
  ko:["#FFFFFF","#003478","#C60C30"], // White Blue Red
  zh:["#DE2910","#FFDE00","#DE2910"], // Red Yellow Red
  en:["#00247D","#FFFFFF","#CF142B"], // Blue White Red (union jack)
  ru:["#FFFFFF","#0039A6","#D52B1E"], // White Blue Red
};

// ── AUTH & PROFILE CREATION SCREEN ──
function AuthScreen({onAuth,lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const [mode,setMode]=useState("welcome"); // welcome | login | create
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  // Profile creation fields
  const [displayName,setDisplayName]=useState("");
  const [avatar,setAvatar]=useState("🧑‍🚀");
  const [level,setLevel]=useState("beginner");
  const [dailyGoal,setDailyGoal]=useState(15);

  const avatars=["🧑‍🚀","👩‍🎓","🧑‍💻","👨‍🏫","🌍","🦊","🐱","🎨","🌸","⭐","🦉","🐝"];

  const handleLogin=()=>{
    setError("");
    if(username.toLowerCase()==="q"&&password==="q"){
      onAuth({displayName:username,avatar:"🧑‍🚀",level:"beginner",dailyGoal:15,createdAt:new Date().toISOString()});
    } else {
      setError("Invalid username or password");
    }
  };

  // Ctrl+S → context-sensitive action on ALL auth screens
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(mode==="welcome") setMode("create");
        else if(mode==="login") handleLogin();
        else if(mode==="create") handleCreate();
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[mode,username,password,displayName,avatar,level,dailyGoal]);

  const handleCreate=()=>{
    if(!displayName.trim()){setError("Please enter a display name");return;}
    if(!username.trim()||!password.trim()){setError("Username and password required");return;}
    onAuth({displayName:displayName.trim(),avatar,level,dailyGoal,createdAt:new Date().toISOString()});
  };

  if(mode==="welcome") return(
    <div className="ob-overlay">
      <div className="ob-card" style={{maxWidth:420}}>
        <div style={{width:88,height:88,borderRadius:24,margin:"0 auto 20px",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(123,94,232,0.3)",overflow:"hidden"}}>
          <CountryFlag code={lang} size={60}/>
        </div>
        <h1 className="hd" style={{fontSize:32,fontWeight:800,marginBottom:6,background:"linear-gradient(135deg,#7B5EE8,#A890FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Welcome!</h1>
        <p style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.6,maxWidth:340,margin:"0 auto 32px"}}>Sign in to track your progress across devices, or create a new account to get started.</p>
        <div style={{display:"flex",flexDirection:"column",gap:10,maxWidth:280,margin:"0 auto"}}>
          <button className="btn btn-blue" style={{fontSize:16,padding:"15px 0",borderRadius:16,width:"100%"}} onClick={()=>setMode("login")}>{t("auth_sign_in_btn",baseLang)}</button>
          <button className="btn btn-outline" style={{fontSize:15,padding:"14px 0",borderRadius:16,width:"100%"}} onClick={()=>setMode("create")}>{t("auth_create_account",baseLang)} ✨</button>
        </div>
      </div>
    </div>
  );

  if(mode==="login") return(
    <div className="ob-overlay">
      <div className="ob-card" style={{maxWidth:400}}>
        <button onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <div style={{width:64,height:64,borderRadius:18,margin:"0 auto 16px",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,boxShadow:"0 6px 24px rgba(123,94,232,0.25)"}}>🔐</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_sign_in",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:24}}>Welcome back, language explorer!</p>
        <div style={{maxWidth:300,margin:"0 auto",display:"flex",flexDirection:"column",gap:12}}>
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          {error&&<div style={{color:"var(--coral)",fontSize:13,fontWeight:600,textAlign:"center"}}>{error}</div>}
          <button className="btn btn-blue" style={{fontSize:16,padding:"14px 0",borderRadius:14,width:"100%",marginTop:4}} onClick={handleLogin}>{t("auth_sign_in_btn",baseLang)}</button>
        </div>
      </div>
    </div>
  );

  // CREATE ACCOUNT
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:440,position:"relative"}}>
        <button onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_create_profile",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:20}}>Personalise your learning journey</p>

        {/* Avatar picker */}
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{width:80,height:80,borderRadius:22,margin:"0 auto 10px",background:"linear-gradient(135deg, var(--blue-light), var(--teal-light))",border:"3px solid var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"0 4px 16px rgba(74,143,231,0.2)"}}>{avatar}</div>
          <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",maxWidth:300,margin:"0 auto"}}>
            {avatars.map(a=>(
              <div key={a} onClick={()=>setAvatar(a)} style={{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"pointer",border:`2px solid ${avatar===a?"var(--blue)":"var(--gray-200)"}`,background:avatar===a?"var(--blue-light)":"var(--white)",transition:"all .15s"}}>{a}</div>
            ))}
          </div>
        </div>

        <div style={{maxWidth:320,margin:"0 auto",display:"flex",flexDirection:"column",gap:10}}>
          <input value={displayName} onChange={e=>setDisplayName(e.target.value)} placeholder={t("auth_display_name",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>

          {/* Experience level */}
          <div style={{marginTop:4}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>{t("auth_your_level",baseLang)}</div>
            <div style={{display:"flex",gap:6}}>
              {[{id:"beginner",label:"🌱 "+t("level_beginner",baseLang),desc:t("ob_starting_fresh",baseLang)},{id:"some",label:"📗 "+t("ob_some_basics",baseLang),desc:t("ob_know_few",baseLang)},{id:"inter",label:"📘 "+t("level_intermediate",baseLang),desc:t("ob_can_converse",baseLang)}].map(l=>(
                <div key={l.id} onClick={()=>setLevel(l.id)} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${level===l.id?"var(--teal)":"var(--gray-200)"}`,background:level===l.id?"var(--teal-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
                  <div style={{fontSize:12,fontWeight:700,color:level===l.id?"var(--teal-dark)":"var(--gray-600)"}}>{l.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily goal */}
          <div style={{marginTop:4}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>{t("auth_daily_goal",baseLang)}</div>
            <div style={{display:"flex",gap:6}}>
              {[{min:5,label:"5 min",emoji:"🐢"},{min:15,label:"15 min",emoji:"🚶"},{min:30,label:"30 min",emoji:"🏃"}].map(g=>(
                <div key={g.min} onClick={()=>setDailyGoal(g.min)} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${dailyGoal===g.min?"var(--blue)":"var(--gray-200)"}`,background:dailyGoal===g.min?"var(--blue-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
                  <div style={{fontSize:18}}>{g.emoji}</div>
                  <div style={{fontSize:12,fontWeight:700,color:dailyGoal===g.min?"var(--blue)":"var(--gray-600)"}}>{g.label}</div>
                </div>
              ))}
            </div>
          </div>

          {error&&<div style={{color:"var(--coral)",fontSize:13,fontWeight:600,textAlign:"center"}}>{error}</div>}
          <button className="btn btn-blue" style={{fontSize:16,padding:"14px 0",borderRadius:14,width:"100%",marginTop:8}} onClick={handleCreate}>Create Profile ✨</button>
        </div>
      </div>
    </div>
  );
}

function Onboarding({onComplete}){
  const dk=document.documentElement.classList.contains("dark");
  const [targetSel,setTargetSel]=useState(null);
  const baseSel="en"; // D83: hardcoded until Arabic source language is added

  // Ctrl+S → proceed
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(targetSel) onComplete(baseSel,targetSel);
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[targetSel]);

  // D85: Single screen — pick target language. No splash, no auth. Flag icon grid matching Profile screen.
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          {targetSel?(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={targetSel} size={44}/></div>
          ):(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:900,color:"#fff",fontFamily:"'DM Sans',sans-serif"}}>L</div>
          )}
        </div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4}}>{t("ob_i_want_learn",baseSel)}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14}}>{t("ob_choose_target",baseSel)}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${targetSel===l.code?"active":""}`} onClick={()=>setTargetSel(l.code)} style={{cursor:"pointer"}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue" style={{fontSize:17,padding:"14px 36px",borderRadius:16,opacity:targetSel?1:.4,transition:"all .2s"}} disabled={!targetSel} onClick={()=>targetSel&&onComplete(baseSel,targetSel)}>
          {t("ob_start_learning",baseSel)} {targetSel?<CountryFlag code={targetSel} size={16}/>:""}
        </button>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ MAIN APP ━━━━━━━━━━


// ━━━━━━━━━━ CURRICULUM DATA — imported from src/data/ modules ━━━━━━━━━━
const _RAW_UNITS = [...dutchUnits, ...koreanUnits, ...germanUnits, ...germanV2Units, ...frenchUnits, ...spanishUnits, ...otherUnits].filter(u=>u&&u.lang);
// ── FIELD NORMALIZATION: support both legacy nl/en AND new trg/src ──
// After migration, old field names can be removed. Until then, both coexist.
function _normStep(st){
  if(!st)return st;
  if(st.trg===undefined&&st.nl!==undefined)st.trg=st.nl;
  if(st.src===undefined&&st.en!==undefined)st.src=st.en;
  if(st.nl===undefined&&st.trg!==undefined)st.nl=st.trg;
  if(st.en===undefined&&st.src!==undefined)st.en=st.src;
  if(st.exampleSrc===undefined&&st.exampleEn!==undefined)st.exampleSrc=st.exampleEn;
  if(st.exampleEn===undefined&&st.exampleSrc!==undefined)st.exampleEn=st.exampleSrc;
  if(st.pairs)st.pairs.forEach(p=>{
    if(p.trg===undefined&&p.nl!==undefined)p.trg=p.nl;
    if(p.src===undefined&&p.en!==undefined)p.src=p.en;
    if(p.nl===undefined&&p.trg!==undefined)p.nl=p.trg;
    if(p.en===undefined&&p.src!==undefined)p.en=p.src;
  });
  // verb_table rows: normalize en↔src on row objects
  if(st.groups)st.groups.forEach(g=>{
    if(g.rows)g.rows.forEach(r=>{
      if(!Array.isArray(r)){
        if(r.src===undefined&&r.en!==undefined)r.src=r.en;
        if(r.en===undefined&&r.src!==undefined)r.en=r.src;
      }
    });
  });
  return st;
}
const UNITS=_RAW_UNITS.map(u=>{
  if(!u||!u.lessons)return u;
  u.lessons.forEach(l=>{if(l.steps)l.steps.forEach(_normStep);});
  if(!u.srcLang)u.srcLang="en";
  return u;
});

// ── CURRICULUM SEARCH (D113) ──
// Korean romanization tables (Revised Romanization of Korean)
const _INITS=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'];
const _MEDS=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'];
const _FINS=['','g','kk','gs','n','nj','nh','d','l','lg','lm','lb','ls','lt','lp','lh','m','b','bs','s','ss','ng','j','ch','k','t','p','h'];
function _romSyl(ch){
  const code=ch.charCodeAt(0)-0xAC00;
  if(code<0||code>11171)return ch;
  const fin=code%28;const med=Math.floor(code/28)%21;const ini=Math.floor(code/28/21);
  return _INITS[ini]+_MEDS[med]+_FINS[fin];
}
function _romanize(text){
  return[...(text||'')].map(ch=>{const c=ch.charCodeAt(0);return c>=0xAC00&&c<=0xD7A3?_romSyl(ch):ch;}).join('');
}
// Normalize search string: strip diacritics + collapse Korean romanization variants
function _normS(s){
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
    .replace(/oo/g,'u')                       // yoong→yung (oo=u variant), before yeong rules
    .replace(/young/g,'yeong')                // common English spelling of 영
    .replace(/yung/g,'yeong')                 // yung→yeong (user: yung=영 variant); also catches yoong after oo→u
    .replace(/yong(?=[^aeiou]|$)/g,'yeong')   // yong→yeong when not before vowel
    .replace(/eu/g,'eo').replace(/uh(?=[^a-z]|$)/g,'eo');
}
// Find verbatim hit in text (after normalization / romanization). Returns {pre,match,post} or null.
function _findHit(rawText,normQ){
  if(!rawText||!normQ)return null;
  // Try direct normalized match first (covers Latin, diacritics, Korean hangul typed directly)
  const normT=_normS(rawText);
  let idx=normT.indexOf(normQ);
  if(idx!==-1){
    return{pre:rawText.slice(0,idx),match:rawText.slice(idx,idx+normQ.length),post:rawText.slice(idx+normQ.length)};
  }
  // Try romanized Korean match — map normQ back to syllable positions
  const romT=_normS(_romanize(rawText));
  idx=romT.indexOf(normQ);
  if(idx!==-1){
    // Map character position in romT back to rawText syllables (approx: 1 syllable = 1 char in rawText)
    // Build a char→rawIndex map
    let romIdx=0;const map=[];
    for(let ri=0;ri<rawText.length;ri++){
      const c=rawText.charCodeAt(ri);
      const chunk=c>=0xAC00&&c<=0xD7A3?_romSyl(rawText[ri]):_normS(rawText[ri]);
      for(let ci=0;ci<chunk.length;ci++){map.push(ri);}romIdx+=chunk.length;
    }
    const rawStart=map[idx]??0;
    const rawEnd=(map[idx+normQ.length-1]??map[map.length-1]??0)+1;
    return{pre:rawText.slice(0,rawStart),match:rawText.slice(rawStart,rawEnd),post:rawText.slice(rawEnd)};
  }
  return null;
}
// Searches all units for the active language. Returns up to 80 results.
function searchUnits(query,lang){
  if(!query)return[];
  const raw=query.trim();
  const normQ=_normS(raw);
  const nonLatin=/[\u1100-\u11FF\uAC00-\uD7AF\u4E00-\u9FFF\u3040-\u30FF\u0600-\u06FF\u0400-\u04FF]/.test(raw);
  if(normQ.length<(nonLatin?1:2))return[];
  const results=[];
  const langUnits=UNITS.filter(u=>u.lang===lang);
  const PRIO=['nl','en','example','exampleEn','q','text','s','note','title','desc'];
  for(const unit of langUnits){
    for(const lesson of(unit.lessons||[])){
      for(let si=0;si<(lesson.steps||[]).length;si++){
        const s=lesson.steps[si];
        let hitText=null;
        for(const field of PRIO){
          const val=s[field];
          if(typeof val==='string'&&_findHit(val,normQ)){hitText=val;break;}
        }
        // Also check opts, pairs, a arrays
        if(!hitText){
          const extras=[
            ...(s.opts||[]),
            ...(s.pairs||[]).flatMap(p=>[p.nl,p.en]),
            ...(Array.isArray(s.a)?s.a:[s.a||''])
          ].filter(t=>typeof t==='string');
          hitText=extras.find(t=>_findHit(t,normQ))||null;
        }
        if(hitText){
          results.push({unit,lesson,si,step:s,hitText,normQ});
          if(results.length>=80)return results;
        }
      }
    }
  }
  return results;
}

// ── DEV GUARD (deferred): Check UNITS lang codes against LANGUAGES + FK coverage ──
try{
if(typeof window!=="undefined"&&window.__lingoDevGuardLangCodes){
  const _lc=window.__lingoDevGuardLangCodes;
  const _unitLangs=new Set(UNITS.map(u=>u.lang));
  _unitLangs.forEach(lc=>{
    if(!_lc.has(lc)){
      const msg=`UNITS has lang "${lc}" not in LANGUAGES — users cannot select it`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
    if(!FOUNDATIONS_BY_LANG[lc]){
      const msg=`UNITS has lang "${lc}" but no FOUNDATIONS_BY_LANG entry`;
      console.warn(`[LingoVerse] ${msg}`);
      __devWarnings.push(msg);
    }
  });
  delete window.__lingoDevGuardLangCodes;
}
}catch(e){}


// ━━━━━━━━━━ LEARN PAGE — CURRICULUM UI ━━━━━━━━━━

function LearnPage({lang,baseLang="en",user,setUser,addXp,learnWord,showToast,addFlag,jumpTo,clearJumpTo}){
  const dk=document.documentElement.classList.contains("dark");
  const [view,setView]=useState("map"); // map | lesson | exercise
  const [selUnit,setSelUnit]=useState(null);
  const [selLesson,setSelLesson]=useState(null);
  // Handle jump-to-lesson from curriculum search
  useEffect(()=>{
    if(!jumpTo)return;
    setSelUnit(jumpTo.unit);
    setSelLesson(jumpTo.lesson);
    setView("exercise");
    if(clearJumpTo)clearJumpTo();
  },[jumpTo]);
  const [chapterNav,setChapterNav]=useState("select"); // lifted from UnitMap
  const [fkSection,setFkSection]=useState(null); // lifted from UnitMap — FK section drill-down
  const [fkMode,setFkMode]=useState("select"); // "select" | "reference" | "playthrough" | "gatequiz" — FK multi-track system
  const L=LANGUAGES.find(l=>l.code===lang);

  const completeLesson=(unit,lesson)=>{
    const lk=`${lang}:${unit.n}:${lesson.id}`;
    const uk=`${lang}:${unit.n}`;
    // Extract all mk keys used in this lesson's steps (tr, match, fb types)
    const lessonMks=[];
    if(lesson.steps){
      for(const st of lesson.steps){
        if(st.mk) lessonMks.push(st.mk);
        if(st.mks) lessonMks.push(...st.mks);
      }
    }
    // Resolve mk keys to actual words in the target language
    const mkWords=[];
    for(const mk of lessonMks){
      const m=MEANINGS[mk];
      if(m&&m[lang]&&m[lang][0]) mkWords.push(m[lang][0]);
    }
    setUser(u=>{
      const p={...(u.progress||{}),lessons:{...(u.progress?.lessons||{})},units:{...(u.progress?.units||{})},learnedMk:[...(u.progress?.learnedMk||[])]};
      p.lessons[lk]=true;
      // Add any new mk keys from this lesson
      const mkSet=new Set(p.learnedMk);
      for(const mk of lessonMks) mkSet.add(mk);
      p.learnedMk=[...mkSet];
      const total=unit.lessons.length;
      const doneCount=unit.lessons.filter(ls=>p.lessons[`${lang}:${unit.n}:${ls.id}`]).length;
      p.units[uk]={completed:doneCount>=total,pct:total>0?Math.round((doneCount/total)*100):0,doneCount,total};
      // Also add mk-resolved words to user.lw so vocabulary learned tab picks them up
      const newLw=new Set(u.lw);
      for(const w of mkWords) newLw.add(w);
      return{...u,progress:p,lw:newLw,wl:newLw.size};
    });
  };

  if(view==="exercise"&&selLesson){
    const unitLessons=selUnit?.lessons||[];
    const curIdx=unitLessons.findIndex(l=>l.id===selLesson.id);
    const nextUnitLesson=curIdx>=0&&curIdx+1<unitLessons.length?unitLessons[curIdx+1]:null;
    return <LessonErrorBoundary onBack={()=>setView("lesson")}><LessonEngine lesson={selLesson} baseLang={baseLang} lang={lang} addFlag={addFlag} unit={selUnit} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}
      onBack={()=>setView("lesson")}
      onComplete={()=>{completeLesson(selUnit,selLesson);}}
      onContinue={nextUnitLesson?()=>{completeLesson(selUnit,selLesson);setSelLesson(nextUnitLesson);}:null}
    /></LessonErrorBoundary>;
  }
  if(view==="lesson"&&selUnit) return <LessonList unit={selUnit} user={user} lang={lang} onBack={()=>{setView("map");setSelUnit(null);}} onStart={ls=>{setSelLesson(ls);setView("exercise");}}/>;

  return(
    <>
      <UnitMap lang={lang} user={user} setUser={setUser} chapterNav={chapterNav} setChapterNav={setChapterNav} fkSection={fkSection} setFkSection={setFkSection} fkMode={fkMode} setFkMode={setFkMode} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onSelect={u=>{setSelUnit(u);setView("lesson");}}/>
    </>
  );
}

// ── UNIT MAP ──
// ── FLAG SYSTEM — 100% Inline SVG, Zero External Dependencies ──
// Every supported language has an inline SVG flag. No emoji (breaks on Windows).
// No CDN images (network may be disabled). Every flag renders identically everywhere.
// Simple flags: tricolors (rects only). Complex flags: verified SVG paths.
// Aliases resolve variant codes to canonical language codes.
const FLAG_ALIASES={kr:"ko",gb:"en",us:"en",sy:"ar",cn:"zh",jp:"ja"};

function CountryFlag({code:rawCode,size=56,variant}){
  const code=(rawCode||"").trim().toLowerCase();
  const resolved=FLAG_ALIASES[code]||code;
  const mkSvg=(vb,w,h,children)=>(<svg viewBox={vb} width={w} height={h} style={{borderRadius:size*0.08,display:"block",border:"1px solid rgba(0,0,0,0.12)"}}>{children}</svg>);
  const W=size,H=size*0.667;
  const flags={
    // ── Simple tricolors (rects only — impossible to get wrong) ──
    nl: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#AE1C28"/><rect y="2" width="9" height="2" fill="#FFF"/><rect y="4" width="9" height="2" fill="#21468B"/></>),
    fr: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002395"/><rect x="3" width="3" height="6" fill="#FFF"/><rect x="6" width="3" height="6" fill="#ED2939"/></>),
    de: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#000"/><rect y="2" width="9" height="2" fill="#DD0000"/><rect y="4" width="9" height="2" fill="#FFCC00"/></>),
    es: mkSvg("0 0 9 6",W,H,<><rect width="9" height="1.5" fill="#AA151B"/><rect y="1.5" width="9" height="3" fill="#F1BF00"/><rect y="4.5" width="9" height="1.5" fill="#AA151B"/></>),
    ro: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002B7F"/><rect x="3" width="3" height="6" fill="#FCD116"/><rect x="6" width="3" height="6" fill="#CE1126"/></>),
    ru: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#FFF"/><rect y="2" width="9" height="2" fill="#0039A6"/><rect y="4" width="9" height="2" fill="#D52B1E"/></>),
    // ── Simple emblems on solid backgrounds ──
    ja: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><circle cx="450" cy="300" r="180" fill="#BC002D"/></>),
    zh: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#DE2910"/><g fill="#FFDE00" transform="translate(150,100)"><polygon points="0,-90 21,-28 84,-28 33,10 54,72 0,35 -54,72 -33,10 -84,-28 -21,-28"/></g><g fill="#FFDE00">{[{x:300,y:60,r:26},{x:360,y:120,r:26},{x:360,y:210,r:26},{x:300,y:270,r:26}].map((s,i)=><circle key={i} cx={s.x} cy={s.y} r={s.r}/>)}</g></>),
    tr: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#E30A17"/><circle cx="350" cy="300" r="160" fill="#FFF"/><circle cx="385" cy="300" r="130" fill="#E30A17"/><polygon points="495,300 537,255 510,310 560,285 515,315 560,315 515,285 510,290 537,345 495,300" fill="#FFF"/></>),
    en: mkSvg("0 0 60 30",W,H,<><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2"/><path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/></>),
    // ── Syria (Arabic course) — green/white/black + 3 red stars ──
    ar: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#007A3D"/><rect y="200" width="900" height="200" fill="#FFF"/><rect y="400" width="900" height="200" fill="#000"/>{[225,450,675].map((cx,i)=><polygon key={i} points={`${cx},230 ${cx+15.5},277 ${cx+65},277 ${cx+25},308 ${cx+40},355 ${cx},330 ${cx-40},355 ${cx-25},308 ${cx-65},277 ${cx-15.5},277`} fill="#CE1126"/>)}</>),
    // ── South Korea (Taegukgi) — verified orientation via rotate(90) ──
    ko: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><g transform="rotate(90,450,300)"><g transform="translate(450,300)"><circle r="150" fill="#CD2E3A"/><path d="M0,-150 A75,75 0 0,1 0,0 A75,75 0 0,0 0,150 A150,150 0 0,1 0,-150Z" fill="#0047A0"/></g><g stroke="#000" strokeWidth="24" strokeLinecap="butt"><g transform="translate(450,300) rotate(-56.31)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(123.69)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(56.31)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(-123.69)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g></g></g></>),
  };
  const svg=flags[resolved];
  if(svg){
    if(variant==="plain") return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.08}}>{svg}</div>;
    return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.12,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>{svg}</div>;
  }
  // Last-resort fallback: grey text badge (never emoji — emoji breaks on Windows)
  const label=(resolved||"??").toUpperCase().slice(0,2);
  return <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size*0.667,borderRadius:size*0.08,background:"var(--gray-200)",border:"1px solid rgba(0,0,0,0.12)",fontSize:size*0.28,fontWeight:700,color:"#666",letterSpacing:1}}>{label}</div>;
}

// ── GLOSSY POPUP — reusable modal with candy-gloss energy ──
function GlossyPopup({title,children,onClose}){
  const dk=document.documentElement.classList.contains("dark");
  const ref=useRef(null);
  useEffect(()=>{
    const h=e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}};
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[onClose]);
  useEffect(()=>{if(ref.current)ref.current.focus();},[]);
  return(
    <div ref={ref} tabIndex={-1} style={{position:"fixed",inset:0,zIndex:9990,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",animation:"fadeIn 0.2s ease"}} onClick={onClose} onKeyDown={e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}}}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:"90%",maxWidth:380,maxHeight:"80vh",overflowY:"auto",
        borderRadius:28,padding:"28px 24px 22px",
        background:dk?"linear-gradient(180deg, rgba(60,52,110,0.95) 0%, rgba(42,38,82,0.95) 50%, rgba(30,28,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 30%, #F4F0FF 60%, #EDE8FF 100%)",
        border:dk?"2px solid rgba(123,94,232,0.25)":"2px solid rgba(123,94,232,0.1)",
        boxShadow:dk?"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.2)":"0 20px 60px rgba(123,94,232,0.2), 0 8px 24px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(123,94,232,0.05)",
        position:"relative",overflow:"hidden",
        animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* Glass highlight */}
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        {/* Close button — glossy candy X */}
        <button onClick={onClose} style={{position:"absolute",top:14,right:14,width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",zIndex:3,
          background:dk?"linear-gradient(180deg, rgba(80,70,120,0.9) 0%, rgba(55,48,90,0.9) 50%, rgba(40,35,70,0.9) 100%)":"linear-gradient(180deg, #F0ECF8 0%, #E4DEF2 50%, #D8D0EC 100%)",
          boxShadow:dk?"0 3px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.15)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",
          display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s",overflow:"hidden",position:"relative",
        }}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.7)":"#888"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        {title&&<h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",marginBottom:16,paddingRight:40,position:"relative",zIndex:2}}>{title}</h3>}
        <div style={{position:"relative",zIndex:2}}>{children}</div>
      </div>
    </div>
  );
}


function UnitMap({lang,user,setUser,chapterNav,setChapterNav,fkSection,setFkSection,fkMode,setFkMode,addXp,learnWord,showToast,addFlag,baseLang,onSelect}){
  const [headerStyle,setHeaderStyle]=useState("A");
  const [showStatsPopup,setShowStatsPopup]=useState(false);
  const [showBandPopup,setShowBandPopup]=useState(null); // band string or null
  const [showFkPopup,setShowFkPopup]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  const isRtl=!!L?.rtl; // Arabic, Hebrew etc. — used for FK content direction
  const allLangUnits=UNITS.filter(u=>u.lang===lang);
  // Track system: if units have a "track" field, allow toggling
  const tracks=[...new Set(allLangUnits.map(u=>u.track).filter(Boolean))];
  const hasTracks=tracks.length>1;
  const [selTrack,setSelTrack]=useState(tracks.includes("v2")?"v2":tracks[0]||null);
  const langUnits=hasTracks?allLangUnits.filter(u=>u.track===selTrack):allLangUnits;
  const [viewMode,setViewMode]=useState("chapters");
  // chapterNav + fkSection are controlled by LearnPage (lifted state)
  const [selectedChar,setSelectedChar]=useState(null); // {ch, rom} for detail card
  const prog=user.progress||{};

  // ── Backspace/Escape: navigate back through UnitMap hierarchy ──
  useEffect(()=>{
    const atTop=chapterNav==="select"&&!fkSection&&(!fkMode||fkMode==="select");
    if(atTop)return; // At top level — let global handler go to home
    // Playthrough and GateQuiz components manage their own Backspace internally
    if(fkMode==="playthrough"||fkMode==="gatequiz")return;
    const handler=(e)=>{
      if(e.code!=="Backspace"&&e.code!=="Escape")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();e.stopPropagation();UISounds.click();
      if(fkSection){setFkSection(null);}
      else if(fkMode&&fkMode!=="select"){setFkMode("select");}
      else if(chapterNav==="foundations"&&fkMode==="select"){setChapterNav("select");}
      else if(chapterNav.startsWith("band:")){setChapterNav("select");}
    };
    window.addEventListener("keydown",handler,true);
    return ()=>window.removeEventListener("keydown",handler,true);
  },[chapterNav,fkSection,fkMode]);

  // Group units by CEFR band
  const bandMap={};
  langUnits.forEach(u=>{
    const info=getCefrInfo(u.level);
    const band=info.band||"A1";
    if(!bandMap[band])bandMap[band]=[];
    bandMap[band].push(u);
  });

  const allBands=["A1","A2","B1","B2","C1","C2"];
  const bandLabels={A1:"Beginner",A2:"Elementary",B1:"Intermediate",B2:"Upper-Intermediate",C1:"Advanced",C2:"Mastery"};
  const bandIcons={A1:<BrandIcon name="band-a1" size={32}/>,A2:<BrandIcon name="band-a2" size={32}/>,B1:<BrandIcon name="band-b1" size={32}/>,B2:<BrandIcon name="band-b2" size={32}/>,C1:<BrandIcon name="band-c1" size={32}/>,C2:<BrandIcon name="band-c2" size={32}/>};

  const getUnitProg=(u)=>prog.units?.[`${lang}:${u.n}`];
  const bandProgress=(band)=>{
    const units=bandMap[band]||[];
    const done=units.filter(u=>{const p=getUnitProg(u);return p&&p.completed;}).length;
    return{done,total:units.length};
  };

  // ═══ BAND VIEW ═══
  if(chapterNav.startsWith("band:")){
    const band=chapterNav.slice(5);
    const units=bandMap[band]||[];
    const color=getCefrBandColor(band);
    return(
      <div className="anim">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>setChapterNav("select")} isBack size={44}/></div>
        {/* Band header — clickable → info popup */}
        <div role="button" onClick={()=>{UISounds.click();setShowBandPopup(band);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.25)"}}>{band}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{bandLabels[band]}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{units.length} unit{units.length!==1?"s":""} · CEFR {band}{(()=>{const bp=bandProgress(band);return bp.done>0?` · ${Math.round((bp.done/bp.total)*100)}%`:"";})()}</p>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {(()=>{const bp=bandProgress(band);return bp.done>0?<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${Math.round((bp.done/bp.total)*100)}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>:null;})()}
        </div>

        {/* Band info popup */}
        {showBandPopup===band&&<GlossyPopup title={`${bandLabels[band]} · CEFR ${band}`} onClose={()=>setShowBandPopup(null)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:16}}>
            {band==="A1"&&"You'll learn the basics: greetings, introductions, simple sentences, numbers, and everyday vocabulary. By the end, you can handle simple interactions."}
            {band==="A2"&&"Build on basics: past tense, future plans, descriptions, comparisons, and daily routines. You'll handle simple conversations with confidence."}
            {band==="B1"&&"Reach independence: express opinions, tell stories, understand main points of clear speech. You can deal with most travel situations."}
            {band==="B2"&&"Achieve fluency: complex arguments, nuanced expression, understanding most media. You can interact with native speakers without strain."}
            {band==="C1"&&"Advanced proficiency: implicit meaning, flexible language use, academic and professional contexts with ease."}
            {band==="C2"&&"Near-native mastery: summarize complex sources, express yourself precisely, understand virtually everything heard or read."}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:10}}>Units in this band:</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {units.map(u=><div key={u.n} style={{padding:"10px 14px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)"}}>{u.level}</span>
              <span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600}}>Unit {u.n}: {u.title}</span>
              <span style={{fontSize:11,color:"var(--gray-400)",marginLeft:"auto"}}>{u.lessons.length} lessons</span>
            </div>)}
            {units.length===0&&<div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",textAlign:"center",padding:16}}>Content is being developed.</div>}
          </div>
        </GlossyPopup>}

        {units.length===0?
          <div style={{borderRadius:22,padding:"40px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:dk?"rgba(40,42,72,0.4)":"linear-gradient(180deg, #F8F6FF 0%, #F0ECFF 100%)",border:"2px solid rgba(123,94,232,0.08)",textAlign:"center"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>CEFR {band} content is being developed.</p>
          </div>
        :
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {units.map(u=>{
              const available=u.lessons.length>0;
              const up=getUnitProg(u);
              const pctVal=up?up.pct:0;
              const done=up&&up.completed;
              return <div key={u.n} role="button" className="ghost-tile" onClick={()=>{if(available){UISounds.tick();onSelect(u);}}}
                style={{
                cursor:available?"pointer":"default",
                borderRadius:22,padding:"18px 14px 14px",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                opacity:available?1:0.45,
                background:done?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:done?`2.5px solid var(--teal)`:dk?`2px solid rgba(123,94,232,0.25)`:`2px solid rgba(123,94,232,0.1)`,
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                position:"relative",overflow:"hidden",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{
                  width:56,height:56,borderRadius:16,
                  background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"white",fontSize:18,fontWeight:900,
                  boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?`0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`:`0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)`),
                  position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                }}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{done?"✓":`U${u.n}`}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontSize:12,fontWeight:700,color:available?(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"):"var(--gray-400)",lineHeight:1.3}}>{u.title}</div>
                  <span style={{display:"inline-block",padding:"2px 8px",borderRadius:6,marginTop:3,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)",color:"var(--purple-accent-text)",fontSize:9,fontWeight:800,letterSpacing:0.3}}>{u.level}</span>
                </div>
                {available&&pctVal>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${pctVal}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                    </div>
                  </div>
                </div>}
              </div>;
            })}
          </div>
        }
      </div>
    );
  }

  // ═══ FOUNDATIONS VIEW ═══
  if(chapterNav==="foundations"){
    const fData=FOUNDATIONS_BY_LANG[lang];
    const sections=fData?.sections||[];
    const openSec=fkSection?sections.find(s=>s.id===fkSection):null;
    const fProg=(user.progress||{}).foundation||{};
    const isFkDone=(secId,itemIdx)=>!!fProg[`${lang}:foundation:${secId}:${itemIdx}`];
    const markFk=(secId,itemIdx)=>{
      if(!setUser)return;
      const key=`${lang}:foundation:${secId}:${itemIdx}`;
      setUser(u=>{
        const p={...(u.progress||{}),foundation:{...((u.progress||{}).foundation||{})}};
        p.foundation[key]=true;
        return{...u,progress:p};
      });
    };
    const secProgress=(sec)=>{
      const total=(sec.items||[]).length;
      const done=(sec.items||[]).filter((_,i)=>isFkDone(sec.id,i)).length;
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };
    const overallProgress=()=>{
      let total=0,done=0;
      sections.forEach(sec=>{const sp=secProgress(sec);total+=sp.total;done+=sp.done;});
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };

    // Section detail view
    if(openSec){
      const sp=secProgress(openSec);
      const secIdx=sections.indexOf(openSec);
      const prevSec=secIdx>0?sections[secIdx-1]:null;
      const nextSec=secIdx<sections.length-1?sections[secIdx+1]:null;
      const goNext=()=>{if(nextSec){setFkSection(nextSec.id);window.scrollTo(0,0);}else{setFkSection(null);window.scrollTo(0,0);}};
      const goPrev=()=>{if(prevSec){setFkSection(prevSec.id);window.scrollTo(0,0);}};
      return(
        <div className="anim" onKeyDown={e=>{if(e.code==="Space"&&!e.target.closest("button,input,textarea")){e.preventDefault();goNext();}if(e.code==="ArrowLeft"){e.preventDefault();goPrev();}if(e.code==="ArrowRight"){e.preventDefault();goNext();}}} tabIndex={0} ref={el=>{if(el)el.focus();}} style={{outline:"none"}}>
          <div style={{marginBottom:20}}><NavArrow onClick={()=>setFkSection(null)} isBack size={44}/></div>
          <div style={{background:"var(--purple-bg)",borderRadius:20,padding:"24px 28px",marginBottom:24,border:"2px solid var(--purple-border)"}}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg,#7B5EE8,#A78BFA)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(123,94,232,0.3)",flexShrink:0}}><BrandIcon name={openSec.icon} size={24}/></div>
              <div style={{flex:1}}>
                <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)"}}>{openSec.title}</h2>
                <p style={{color:"var(--gray-500)",fontSize:13}}>{openSec.desc}</p>
                <div style={{fontSize:11,color:"var(--purple-accent-text)",fontWeight:600,marginTop:4}}>{sp.done}/{sp.total} completed</div>
              </div>
            </div>
            {sp.total>0&&<div style={{marginTop:12,height:4,borderRadius:2,background:"var(--purple-border)",overflow:"hidden"}}>
              <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:2,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
            </div>}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {(openSec.items||[]).map((item,i)=>{
              const done=isFkDone(openSec.id,i);
              const hasGrid=!!item.grid;
              const hasInv=!!item.inventory;
              const allChars=hasGrid?item.grid.rows.flatMap(r=>r.cells.filter(c=>c.ch).map(c=>c.ch)):hasInv?item.inventory.split("|").map(p=>p.trim().split(" ")[0]):[];
              return(
              <div key={i} className="card anim" style={{padding:"18px 20px",animationDelay:`${i*0.04}s`,borderLeft:`4px solid ${done?"var(--teal)":"#7B5EE8"}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  {done&&<span style={{fontSize:14}}>✅</span>}
                  <div className="hd" style={{fontSize:15,fontWeight:700,color:"var(--gray-800)"}}>{item.title}</div>
                </div>
                {item.desc&&<p style={{fontSize:13,color:"var(--gray-500)",marginBottom:8,lineHeight:1.6}}>{item.desc}</p>}
                {hasGrid&&<div style={{background:"var(--purple-flat)",borderRadius:14,padding:"12px 10px",marginBottom:8,overflowX:"auto"}}>
                  {item.grid.headers&&item.grid.headers.some(h=>h)&&<div style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                    <div/>
                    {item.grid.headers.map((h,hi)=><div key={hi} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"var(--gray-400)",...(isRtl&&/[\u0600-\u06FF]/.test(h)?{direction:"rtl"}:{})}}>{h}</div>)}
                  </div>}
                  {item.grid.rows.map((row,ri)=>(
                    <div key={ri} style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:row.color||"#7B5EE8",textTransform:"uppercase",letterSpacing:0.5}}>{row.label}</div>
                      {row.cells.map((cell,ci)=>cell.ch?(
                        <div key={ci} onClick={()=>setSelectedChar({ch:cell.ch,rom:cell.rom,title:item.title,color:row.color})} style={{textAlign:"center",padding:"7px 2px",borderRadius:10,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:`1.5px solid ${row.color||"#7B5EE8"}20`,cursor:"pointer",transition:"all 0.15s",boxShadow:"0 2px 6px rgba(0,0,0,0.04)"}}>
                          <div style={{fontSize:22,fontWeight:700,color:row.color||"#7B5EE8",lineHeight:1.2,...(isRtl&&/[\u0600-\u06FF]/.test(cell.ch)?{direction:"rtl"}:{})}}>{cell.ch}</div>
                          {cell.rom&&<div style={{fontSize:9,color:"var(--gray-400)",marginTop:1}}>{cell.rom}</div>}
                        </div>
                      ):<div key={ci} style={{padding:"7px 2px",borderRadius:10,background:"var(--purple-flat)"}}/>)}
                    </div>
                  ))}
                </div>}
                {!hasGrid&&hasInv&&<div style={{background:"var(--purple-flat)",borderRadius:14,padding:"12px 14px",marginBottom:8}}>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:6}}>
                  {item.inventory.split("|").map((pair,k)=>{
                    const parts=pair.trim().split(" ");
                    const ch=parts[0];
                    const rom=parts.slice(1).join(" ");
                    return <div key={k} onClick={()=>setSelectedChar({ch,rom,title:item.title})} style={{textAlign:"center",padding:"8px 2px",borderRadius:10,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:"1.5px solid var(--purple-border)",cursor:"pointer",transition:"all 0.15s",boxShadow:"0 2px 6px rgba(123,94,232,0.06)"}}>
                      <div style={{fontSize:24,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.2}}>{ch}</div>
                      {rom&&<div style={{fontSize:10,color:"var(--gray-400)",marginTop:2}}>{rom}</div>}
                    </div>;
                  })}
                  </div>
                </div>}
                {selectedChar&&allChars.includes(selectedChar.ch)&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.4)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setSelectedChar(null)}>
                  <div className="card anim" style={{maxWidth:320,width:"100%",padding:"32px 24px",textAlign:"center"}} onClick={e=>e.stopPropagation()}>
                    <div style={{fontSize:72,fontWeight:800,color:selectedChar.color||"#7B5EE8",marginBottom:8,lineHeight:1}}>{selectedChar.ch}</div>
                    {selectedChar.rom&&<div style={{fontSize:22,color:"var(--gray-600)",fontWeight:600,marginBottom:16}}>{selectedChar.rom}</div>}
                    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:16}}>
                      <button onClick={()=>{if(typeof speechSynthesis!=="undefined"){const u=new SpeechSynthesisUtterance(selectedChar.rom||selectedChar.ch);u.rate=0.7;speechSynthesis.speak(u);}}} style={{padding:"10px 20px",borderRadius:12,border:`2px solid ${selectedChar.color||"#7B5EE8"}`,background:`${selectedChar.color||"#7B5EE8"}10`,color:selectedChar.color||"#7B5EE8",fontSize:14,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>🔊 Listen</button>
                    </div>
                    <button onClick={()=>setSelectedChar(null)} style={{marginTop:16,padding:"8px 24px",borderRadius:10,border:"none",background:selectedChar.color||"#7B5EE8",color:"white",fontWeight:700,fontSize:13,cursor:"pointer"}}>Close</button>
                  </div>
                </div>}
                {item.examples&&item.examples.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
                  {item.examples.map((ex,j)=>(
                    <span key={j} style={{display:"inline-block",padding:"4px 10px",borderRadius:8,background:"var(--purple-flat)",color:"var(--purple-accent-text)",fontSize:12,fontWeight:600,border:"1px solid var(--purple-border)",...(isRtl&&/[\u0600-\u06FF]/.test(ex)?{direction:"rtl"}:{})}}>{ex}</span>
                  ))}
                </div>}
                {!done&&<button onClick={()=>markFk(openSec.id,i)} style={{padding:"6px 14px",borderRadius:10,border:"1.5px solid var(--purple-accent)",background:"#7B5EE808",color:"var(--purple-accent-text)",fontSize:12,fontWeight:700,cursor:"pointer"}}>✓ I got it</button>}
                {done&&<div style={{fontSize:11,color:"var(--teal)",fontWeight:600}}>✓ Completed</div>}
              </div>);
            })}
          </div>
          {/* ── Section navigation ── */}
          <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"space-between"}}>
            {prevSec?<NavArrow onClick={goPrev} isBack size={44}/>:<div/>}
            {nextSec?<button onClick={goNext} style={{fontSize:13,padding:"10px 18px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",border:"1.5px solid rgba(255,255,255,0.25)",borderRadius:12,fontWeight:700,cursor:"pointer"}}>Next: {nextSec.title} →</button>
            :<button onClick={()=>{setFkSection(null);window.scrollTo(0,0);}} style={{fontSize:13,padding:"10px 18px",background:"var(--teal)",color:"white",border:"none",borderRadius:12,fontWeight:700,cursor:"pointer"}}>✓ All Sections Done</button>}
          </div>
          <div style={{textAlign:"center",marginTop:8}}><span style={{fontSize:10,color:"var(--gray-300)"}}>press ⎵ spacebar to continue</span></div>
        </div>
      );
    }

    // Section list view (Foundations home)
    const op=overallProgress();
    return(
      <div className="anim" data-kb-owner="foundations">
        {fkMode!=="playthrough"&&fkMode!=="gatequiz"&&<>
        <div style={{marginBottom:20}}><NavArrow onClick={()=>{if(fkMode!=="select"){setFkMode("select");}else{setChapterNav("select");}}} isBack size={44}/></div>
        {/* Foundations header — clickable → info popup — matches Nederlands purple */}
        <div role="button" onClick={()=>{UISounds.click();setShowFkPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{fData?.name||"Foundations"}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{L?.native||"Language"}: Before You Start</p>
              <div style={{display:"flex",gap:8,marginTop:6,alignItems:"center"}}>
                <span style={{padding:"3px 10px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:10,fontWeight:700}}>Pre-A1</span>
                {op.total>0&&<span style={{fontSize:11,color:"rgba(255,255,255,0.85)",fontWeight:600}}>{op.pct}% complete</span>}
              </div>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {op.total>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${op.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Foundations info popup */}
        {showFkPopup&&<GlossyPopup title="Why Foundations?" onClose={()=>setShowFkPopup(false)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Foundations give you the building blocks before your first lesson. You'll learn the alphabet, pronunciation rules, and writing system — the skills that make everything else click faster.
          </div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Skipping foundations is like building on sand. Even 15 minutes here saves hours of confusion later. Native speakers will understand you better from day one.
          </div>
          <div style={{display:"flex",gap:12,marginBottom:8}}>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{sections.length}</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Sections</div>
            </div>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{op.pct}%</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Complete</div>
            </div>
          </div>
          <div style={{padding:"14px 16px",borderRadius:14,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
            <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:4,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>Pro tip</div>
            <div style={{fontSize:12,color:"var(--gray-600)",lineHeight:1.5}}>Complete foundations before starting A1. Your pronunciation and reading speed will be noticeably better.</div>
          </div>
        </GlossyPopup>}
        </>}

        {/* ── FK Three-Track Selector (Batch 2 + Batch 4) ── */}
        {fkMode==="select"&&<>
        {/* Gate Quiz passed indicator */}
        {user.progress?.gateQuiz?.[lang]?.passed&&<div style={{background:dk?"linear-gradient(135deg,#1A2E28,#1A2B24)":"linear-gradient(135deg,#ECFDF5,#D1FAE5)",border:"1.5px solid #86EFAC",borderRadius:12,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>✅</span>
          <span style={{fontSize:13,fontWeight:600,color:"#065F46"}}>Gate Quiz Passed — Foundations optional for you!</span>
        </div>}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("reference");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>📖</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Reference</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Browse grids, charts & rules at your own pace</div>
          </div>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("playthrough");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",animationDelay:"0.05s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>🎮</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Play Through</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Learn step-by-step with exercises & XP</div>
          </div>
        </div>
        {/* Gate Quiz tile — full width below the two-column grid */}
        {FK_GATE_QUIZ[lang]&&<div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("gatequiz");}} style={{cursor:"pointer",padding:"18px 20px",textAlign:"center",borderRadius:22,border:user.progress?.gateQuiz?.[lang]?.passed?"2px solid #86EFAC":dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:user.progress?.gateQuiz?.[lang]?.passed?(dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.03)",marginBottom:24,animationDelay:"0.1s",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <AppIcon name="trophy" size={36}/>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:15,fontWeight:800,color:user.progress?.gateQuiz?.[lang]?.passed?"var(--teal)":"var(--purple-accent-text)"}}>
                {user.progress?.gateQuiz?.[lang]?.passed?"Gate Quiz ✓ Passed":"Gate Quiz — Skip Foundations?"}
              </div>
              <div style={{fontSize:12,color:"var(--gray-400)",lineHeight:1.4}}>
                {user.progress?.gateQuiz?.[lang]?.passed?"Gate Quiz passed! Retake anytime.":"Already know the basics? Prove it and skip ahead."}
              </div>
            </div>
          </div>
        </div>}
        </>}

        {/* ── Reference Mode: existing FK section tiles (unchanged) ── */}
        {fkMode==="reference"&&<>
        {sections.length>0?
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {sections.map((sec,i)=>{
              const sp=secProgress(sec);
              return(
              <div key={sec.id} className="card anim" onClick={()=>setFkSection(sec.id)} style={{
                cursor:"pointer",padding:"20px 16px",textAlign:"center",
                background:sp.pct===100?dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)":"var(--purple-bg)",
                border:sp.pct===100?"2px solid #86EFAC":"2px solid var(--purple-border)",
                boxShadow:"0 4px 14px rgba(123,94,232,0.06)",
                animationDelay:`${i*0.05}s`,
              }}>
                <div style={{fontSize:32,marginBottom:8}}><BrandIcon name={sec.icon} size={32}/></div>
                <div className="hd" style={{fontSize:14,fontWeight:700,color:sp.pct===100?"var(--teal)":"#7B5EE8",marginBottom:4}}>{sec.title}</div>
                <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.4}}>{sec.desc}</div>
                <div style={{marginTop:8,fontSize:10,fontWeight:600,color:sp.pct===100?"var(--teal)":"var(--gray-300)"}}>{sp.pct===100?"✓ Done":`${sp.done}/${sp.total} items`}</div>
                {sp.total>0&&sp.pct>0&&sp.pct<100&&<div style={{marginTop:6,height:3,borderRadius:2,background:"var(--purple-border)",overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:2,boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
                </div>}
              </div>);
            })}
          </div>
        :
          <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>Foundations for {L?.native||"this language"} are being developed.</p>
            <p style={{color:"var(--gray-300)",fontSize:12,marginTop:8}}>Start with A1 to begin learning now!</p>
          </div>
        }
        </>}

        {/* ── Playthrough Mode: real FoundationsPlaythrough (Batch 3) ── */}
        {fkMode==="playthrough"&&<FoundationsPlaythrough lang={lang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onBack={()=>setFkMode("select")}/>}

        {/* ── Gate Quiz Mode (Batch 4) ── */}
        {fkMode==="gatequiz"&&<FoundationsGateQuiz lang={lang} user={user} setUser={setUser} showToast={showToast} addFlag={addFlag} onBack={()=>setFkMode("select")} onPass={()=>{setChapterNav("select");showToast&&showToast("🏆 Foundations passed! You can start lessons.");}}/>}
      </div>
    );
  }

  return(
    <div className="anim">
      {/* Flag banner — clickable → stats popup */}
      {(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;
      return headerStyle==="A"?<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)"}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)"}}>{L?.native||"Course"}</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:13}}>{langUnits.length} units · {tl} lessons{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(255,255,255,0.15)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.15)"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        {/* Tap indicator */}
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      :<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:dk?"rgba(40,38,70,0.5)":"rgba(255,255,255,0.55)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:dk?"2px solid rgba(123,94,232,0.2)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",boxShadow:dk?"0 8px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)":"0 8px 28px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.04)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2}}>{L?.native||"Course"}</h1>
          <p style={{color:"var(--gray-500)",fontSize:13}}>{langUnits.length} units · {tl} lessons{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(123,94,232,0.08)",overflow:"hidden"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.3)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.35}}><path d="M9 5l7 7-7 7" stroke="var(--gray-500)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>;})()}

      {/* Stats Popup */}
      {showStatsPopup&&(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;const vocabCount=user.wl||0;const tips=["Consistency beats intensity — 15 min daily > 2 hours weekly.","Read children's books in your target language. They use high-frequency words.","Shadow native speakers: listen and repeat simultaneously to train your ear.","Label objects in your house with sticky notes in the target language.","Watch TV shows you already know dubbed in your target language."];const tipIdx=Math.floor(Date.now()/86400000)%tips.length;
      return <GlossyPopup title={`${L?.native||"Course"} Stats`} onClose={()=>setShowStatsPopup(false)}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
          {[{label:"XP Earned",value:user.xp||0,icon:"⚡"},{label:"Lessons Done",value:`${dl}/${tl}`,icon:"📚"},{label:"Vocabulary",value:vocabCount,icon:"🧠"},{label:"Progress",value:`${op}%`,icon:"📊"}].map(s=><div key={s.label} style={{padding:"14px 12px",borderRadius:16,background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.08)"}}>
            <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{s.value}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{s.label}</div>
          </div>)}
        </div>
        <div style={{padding:"16px 18px",borderRadius:16,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>Polyglot Tip</div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.5}}>{tips[tipIdx]}</div>
        </div>
      </GlossyPopup>;})()}

      {/* Header style toggle */}
      <div style={{display:"flex",justifyContent:"flex-end",marginBottom:4,marginTop:-12}}>
        <button onClick={()=>setHeaderStyle(s=>s==="A"?"B":"A")} title="Toggle header style" style={{width:28,height:28,borderRadius:8,border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(123,94,232,0.1)",background:dk?"rgba(40,38,65,0.4)":"rgba(123,94,232,0.04)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s",fontSize:10,fontWeight:800,color:"var(--gray-300)",fontFamily:"'DM Sans',sans-serif"}}>{headerStyle}</button>
      </div>

      {/* Track toggle — only when multiple tracks exist (e.g. Dutch v2 + legacy) */}
      {hasTracks&&<div style={{display:"flex",gap:8,marginBottom:16,justifyContent:"center"}}>
        {tracks.map(t=>{
          const label=t==="v2"?"New Course":t==="legacy"?"Legacy Course":t;
          const active=selTrack===t;
          return <button key={t} onClick={()=>setSelTrack(t)} style={{padding:"10px 24px",borderRadius:16,border:"none",background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"linear-gradient(180deg, #FFFFFF, #f5f6fa)",color:active?"white":"var(--gray-500)",fontWeight:800,fontSize:13,cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,boxShadow:active?"0 4px 14px rgba(100,69,200,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",position:"relative",overflow:"hidden"}}>{active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}<span style={{position:"relative",zIndex:1}}>{label}</span></button>;
        })}
      </div>}

      {/* View toggle */}
      <div style={{display:"flex",alignItems:"center",marginBottom:16}}>
        <div style={{display:"inline-flex",background:dk?"rgba(40,38,65,0.6)":"rgba(0,0,0,0.04)",borderRadius:16,padding:4,gap:4}}>
          {[["chapters","Chapters"],["all","All Units"]].map(([k,label])=>{
            const active=viewMode===k;
            return <button key={k} onClick={()=>setViewMode(k)} style={{padding:"9px 20px",borderRadius:13,fontSize:12,fontWeight:800,border:"none",cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"transparent",color:active?"white":"var(--gray-400)",boxShadow:active?"0 3px 12px rgba(100,69,200,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"none",position:"relative",overflow:"hidden"}}>
              {active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}
              <span style={{position:"relative",zIndex:1}}>{label}</span>
            </button>;
          })}
        </div>
      </div>

      {/* ═══ CHAPTER SELECT ═══ */}
      {viewMode==="chapters"&&<div>
        {/* Foundations tile — full width */}
        {(()=>{
          const fData=FOUNDATIONS_BY_LANG[lang];
          const secCount=fData?.sections?.length||0;
          return <div role="button" className="ghost-tile" style={{cursor:"pointer",padding:"24px 22px",marginBottom:14,display:"flex",alignItems:"center",gap:14,borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",minHeight:80}} onClick={()=>{UISounds.tick();setFkSection(null);setChapterNav("foundations");}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #7B5EE8 50%, #5840B8 85%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",overflow:"hidden",zIndex:2,boxShadow:dk?"0 0 12px rgba(123,94,232,0.35), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 12px rgba(123,94,232,0.25), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,filter:"drop-shadow(0 1px 1px rgba(0,0,0,0.2))"}}>🧱</span>
            </div>
            <div style={{flex:1,position:"relative",zIndex:2}}>
              <div className="hd" style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>Foundations</div>
              <div style={{fontSize:12,color:"var(--gray-400)"}}>{secCount>0?`${secCount} sections · Pre-A1`:"Script, alphabet & pronunciation basics"}</div>
            </div>
            <span style={{padding:"5px 14px",borderRadius:12,background:"linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 55%, #5840B8 100%)",color:"white",fontSize:10,fontWeight:800,letterSpacing:0.3,boxShadow:"0 3px 10px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1)",position:"relative",overflow:"hidden",zIndex:2}}><span style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>{secCount>0?`${secCount} topics`:"Preview"}</span></span>
          </div>;
        })()}

        {/* CEFR band grid — with Foundations Lock (Manifesto P13) */}
        {(()=>{
          const fUnlocked=isFoundationsUnlocked(user,lang);
          const hasFk=FOUNDATIONS_BY_LANG[lang]?.sections?.length>0;
          const showLock=!fUnlocked&&hasFk;
          return <>
            {showLock&&<div style={{background:"linear-gradient(145deg,#FFF8F0,#FFF3E6)",border:"2px solid #FBBF2420",borderRadius:16,padding:"16px 20px",marginBottom:14,textAlign:"center"}}>
              <div style={{fontSize:24,marginBottom:6}}>🔒</div>
              <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:4}}>Complete Foundations to unlock units</div>
              <div style={{fontSize:11,color:"#B45309",lineHeight:1.5}}>Play through the Foundations course or pass the Gate Quiz to unlock A1 and beyond.</div>
              <div onClick={()=>{
                setUser(u=>{
                  const p={...(u.progress||{}),foundationsUnlocked:{...((u.progress||{}).foundationsUnlocked||{})}};
                  p.foundationsUnlocked[lang]=true;
                  return{...u,progress:p};
                });
              }} style={{marginTop:10,fontSize:11,color:"#B45309",cursor:"pointer",textDecoration:"underline",opacity:0.7}}>
                Unlock anyway →
              </div>
            </div>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,position:"relative"}}>
              {showLock&&<div style={{position:"absolute",inset:0,zIndex:2,borderRadius:16,background:dk?"rgba(18,18,24,0.5)":"rgba(255,255,255,0.4)",backdropFilter:"blur(1px)",pointerEvents:"none"}}/>}
              {allBands.map(band=>{
                const bp=bandProgress(band);
                const hasUnits=bp.total>0;
                const pctDone=bp.total>0?Math.round((bp.done/bp.total)*100):0;
                const isComplete=bp.done===bp.total&&bp.total>0;
                return <div key={band} role="button" className="ghost-tile" onClick={()=>{if(!showLock||!FOUNDATIONS_LOCK_ENABLED){UISounds.tick();setChapterNav(`band:${band}`);}}}
                  style={{
                    cursor:showLock&&FOUNDATIONS_LOCK_ENABLED?"default":"pointer",
                    borderRadius:22,
                    padding:"14px 10px 12px",
                    display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,
                    background:showLock?(dk?"rgba(40,42,72,0.5)":"rgba(220,215,235,0.6)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                    border:showLock?"2px solid rgba(156,163,175,0.15)":(isComplete?`2.5px solid var(--teal)`:`2px solid ${dk?"rgba(123,94,232,0.35)":"rgba(123,94,232,0.15)"}`),
                    boxShadow:showLock?"none":(dk?"0 6px 20px rgba(0,0,0,0.4), 0 0 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 6px 20px rgba(123,94,232,0.12), 0 0 14px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -3px 0 rgba(123,94,232,0.06)"),
                    transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                    position:"relative",overflow:"hidden",
                    ...(showLock?{filter:"grayscale(0.5)",opacity:0.55}:{}),
                  }}>
                    {!showLock&&<div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>}
                    {showLock&&<div style={{position:"absolute",top:8,right:8,zIndex:3,opacity:0.6}}><AppIcon name="padlock" size={28}/></div>}
                    <div style={{
                      width:80,height:80,borderRadius:22,
                      background:showLock?"linear-gradient(180deg, #A0A0A8 0%, #888890 30%, #707078 60%, #606068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      color:"white",fontSize:30,fontWeight:900,letterSpacing:-0.5,
                      boxShadow:showLock?"0 4px 12px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.15)":(dk?`0 0 22px rgba(123,94,232,0.5), 0 8px 24px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.2)`:`0 0 18px rgba(123,94,232,0.3), 0 6px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.15)`),
                      position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                    }}>
                      <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>
                      <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.3)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.2))"}}>{band}</span>
                    </div>
                    <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                      <div style={{fontSize:13,fontWeight:800,color:showLock?"var(--gray-400)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.2}}>{bandLabels[band]}</div>
                      {hasUnits?
                        <div style={{fontSize:10,color:showLock?"var(--gray-400)":(dk?"rgba(180,170,220,0.8)":"var(--purple-accent-text)"),fontWeight:700,marginTop:2}}>{bp.done}/{bp.total} units{isComplete?" ✓":""}</div>
                      :
                        <div style={{fontSize:10,color:dk?"rgba(160,155,200,0.5)":"var(--gray-300)",fontWeight:600,fontStyle:"italic",marginTop:2}}>Coming soon</div>
                      }
                    </div>
                    {hasUnits&&bp.done>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                      <div style={{height:5,borderRadius:4,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.1)"}}>
                        <div style={{height:"100%",width:`${pctDone}%`,borderRadius:4,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",boxShadow:`0 0 8px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.4)`,transition:"width 0.3s",position:"relative",overflow:"hidden"}}>
                          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                        </div>
                      </div>
                    </div>}
                  </div>;
              })}
            </div>
          </>;
        })()}
      </div>}

      {/* ═══ ALL UNITS VIEW (original) ═══ */}
      {viewMode==="all"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
        {langUnits.map((u,i)=>{
          const available=u.lessons.length>0;
          const locked=!available&&i>0;
          const up=getUnitProg(u);
          return(
            <div key={u.n} role="button" className="card anim" style={{
              cursor:available?"pointer":"default",
              opacity:locked?0.45:1,
              borderLeftWidth:4,borderLeftColor:u.color,
              display:"flex",alignItems:"center",gap:16,padding:"18px 22px",
              animationDelay:`${i*0.03}s`,
              ...(available?{}:{filter:"grayscale(0.3)"}),
            }} onClick={()=>available&&onSelect(u)}>
              <div style={{width:48,height:48,borderRadius:14,background:available?u.color:"var(--gray-200)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,boxShadow:available?`0 4px 12px ${u.color}33`:"none"}}>
                {available?<BrandIcon name={u.icon} size={22}/>:<span style={{fontSize:18}}>🔒</span>}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                  <span className="hd" style={{fontWeight:800,fontSize:16,color:available?"var(--gray-800)":"var(--gray-400)"}}>Unit {u.n}: {u.title}</span>
                  <span className="badge" style={{background:getCefrBandColor(getCefrInfo(u.level).band)+"18",color:getCefrBandColor(getCefrInfo(u.level).band),fontSize:10}}>{u.level}</span>
                </div>
                <p style={{color:"var(--gray-400)",fontSize:13}}>{u.sub}{up&&up.pct>0?` · ${up.pct}%`:""}</p>
                {available&&<div style={{marginTop:6}}>
                  <div style={{display:"flex",gap:4}}>
                    {u.lessons.map((ls,j)=>{
                      const ld=prog.lessons?.[`${lang}:${u.n}:${ls.id}`];
                      return <div key={j} style={{width:32,height:4,borderRadius:2,background:ld?"var(--teal)":"var(--gray-200)"}}/>;
                    })}
                  </div>
                </div>}
              </div>
              {up&&up.completed?<div style={{fontSize:22}}>✅</div>:available&&<div style={{color:u.color,fontWeight:700,fontSize:22}}>→</div>}
              {!available&&<span style={{color:"var(--gray-300)",fontSize:12,fontWeight:600}}>Coming soon</span>}
            </div>
          );
        })}
      </div>}
    </div>
  );
}

// ── FOUNDATIONS PLAYTHROUGH — Interactive guided FK lessons ──
// Loads FK_PLAYTHROUGH[lang], renders stages, feeds lessons into LessonEngine.
// Progress: user.progress.fkPlay[lang][lessonId] = { completed:true, ts:Date.now() }
// This NEVER touches user.progress.lessons or user.progress.foundation.

// ══════════════════════════════════════════════════════════════════
// FOUNDATIONS GATE QUIZ — Skip Foundations if you already know the system
// Per-language quiz data in FK_GATE_QUIZ. Score labels pulled from quiz data.
// Accessible at all times from Foundations landing.
// ══════════════════════════════════════════════════════════════════
function FoundationsGateQuiz({lang,user,setUser,showToast,addFlag,onBack,onPass}){
  const dk=document.documentElement.classList.contains("dark");
  const quizData = FK_GATE_QUIZ[lang];
  const [phase,setPhase]=useState("intro"); // intro | running | results
  const [taskIdx,setTaskIdx]=useState(0);
  const [itemIdx,setItemIdx]=useState(0);
  const [answers,setAnswers]=useState({}); // {gate_a:[true,false,...], gate_b:[...], ...}
  const [selected,setSelected]=useState(null);
  const [showFeedback,setShowFeedback]=useState(false);

  if(!quizData) return(
    <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
      <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
      <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Gate Quiz Not Available</h3>
      <p style={{color:"var(--gray-400)",fontSize:13}}>The Gate Quiz for this language is coming soon.</p>
      <div style={{marginTop:16}}><NavArrow onClick={onBack} isBack size={44}/></div>
    </div>
  );

  const tasks = quizData.tasks;
  const currentTask = tasks[taskIdx];
  const currentItem = currentTask?.items[itemIdx];
  const totalItems = tasks.reduce((s,t)=>s+t.items.length,0);
  const doneItems = Object.values(answers).reduce((s,a)=>s+a.length,0);

  const handleAnswer=(opt)=>{
    if(showFeedback) return;
    setSelected(opt);
    setShowFeedback(true);
    const isCorrect = opt===currentItem.ans;
    const tid = currentTask.id;
    setAnswers(prev=>({...prev,[tid]:[...(prev[tid]||[]),isCorrect]}));
    setTimeout(()=>{
      setShowFeedback(false);
      setSelected(null);
      if(itemIdx < currentTask.items.length-1){
        setItemIdx(itemIdx+1);
      } else if(taskIdx < tasks.length-1){
        setTaskIdx(taskIdx+1);
        setItemIdx(0);
      } else {
        setPhase("results");
      }
    },1200);
  };

  // Calculate results
  const calcResults=()=>{
    const scores={};
    tasks.forEach(t=>{
      const a = answers[t.id]||[];
      const correct = a.filter(Boolean).length;
      const total = t.items.length;
      scores[t.id]={correct,total,pct:total>0?Math.round(correct/total*100):0,category:t.category};
    });
    // Category scores
    const abItems = tasks.filter(t=>t.category==="AB");
    const abCorrect = abItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const abTotal = abItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const abPct = abTotal>0?Math.round(abCorrect/abTotal*100):0;

    const cItems = tasks.filter(t=>t.category==="C");
    const cCorrect = cItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const cTotal = cItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const cPct = cTotal>0?Math.round(cCorrect/cTotal*100):0;

    const deItems = tasks.filter(t=>t.category==="DE");
    const deCorrect = deItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const deTotal = deItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const dePct = deTotal>0?Math.round(deCorrect/deTotal*100):0;

    const passed = abPct>=quizData.passCriteria.AB && cPct>=quizData.passCriteria.C && dePct>=quizData.passCriteria.DE;
    return {scores,abPct,cPct,dePct,passed};
  };

  // ── Intro Screen ──
  if(phase==="intro") return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:"2px solid rgba(212,137,11,0.15)"}}>
        <div style={{marginBottom:12}}><AppIcon name="trophy" size={48}/></div>
        <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"#D4890B",marginBottom:8}}>{quizData.title}</h2>
        <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>{quizData.desc}</p>
        <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:10}}>What's tested:</div>
          {tasks.map(t=><div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:6,paddingLeft:8}}>• {t.title}: {t.items.length} items</div>)}
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:12,paddingTop:10,borderTop:"1px solid var(--gray-100)"}}>
            Pass: A+B ≥ {quizData.passCriteria.AB}% · C ≥ {quizData.passCriteria.C}% · D+E ≥ {quizData.passCriteria.DE}%
          </div>
        </div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:16,lineHeight:1.5}}>Uses pseudo-words and unfamiliar syllables to test real decoding skill, not memorized words.</div>
        <button className="btn" onClick={()=>setPhase("running")} style={{background:"linear-gradient(135deg,#D4890B,#E8960A)",color:"white",padding:"14px 32px",fontSize:15,fontWeight:700,borderRadius:14,border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(212,137,11,0.3)"}}>Start Quiz</button>
      </div>
    </div>
  );

  // ── Running Screen ──
  if(phase==="running"&&currentItem) return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      {/* Progress bar */}
      <div style={{marginBottom:16}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--gray-400)",marginBottom:4}}>
          <span>{currentTask.title}</span>
          <span>{doneItems+1}/{totalItems}</span>
        </div>
        <div style={{height:4,borderRadius:2,background:"var(--gray-100)",overflow:"hidden"}}>
          <div style={{height:"100%",width:`${(doneItems/totalItems)*100}%`,background:"linear-gradient(90deg,#D4890B,#E8960A)",borderRadius:2,transition:"width 0.3s"}}/>
        </div>
      </div>
      {/* Task description */}
      <div style={{fontSize:11,color:"var(--gray-400)",marginBottom:6,textAlign:"center"}}>{currentTask.desc}</div>
      {/* Question */}
      <div className="card anim" style={{padding:"28px 24px",textAlign:"center",marginBottom:16,position:"relative"}}>
        {addFlag&&<div style={{position:"absolute",top:8,right:8}}><FlagButton lessonId={`gate_${lang}_${currentTask.id}`} stepIndex={itemIdx} stepData={currentItem} addFlag={addFlag}/></div>}
        <div style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",lineHeight:1.5,marginBottom:24}}>{currentItem.q.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((part,pi)=>/[\u0600-\u06FF\u3130-\u318F\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u0400-\u04FF]/.test(part)?<span key={pi} style={{fontSize:36,fontWeight:800,color:"var(--purple-accent-text)",display:"inline-block",margin:"8px 4px",lineHeight:1.2}}>{part}</span>:<span key={pi}>{part}</span>)}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {(()=>{
            const isShort=currentItem.opts.every(o=>o.length<=20);
            const hasKoOpts=currentItem.opts.some(o=>/[\uAC00-\uD7AF]/.test(o));
            const useGrid=isShort&&!hasKoOpts&&currentItem.opts.length===4;
            return <div style={useGrid?{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}:{display:"flex",flexDirection:"column",gap:10}}>
          {currentItem.opts.map((opt,i)=>{
            const isAns = opt===currentItem.ans;
            const isSel = opt===selected;
            let bg = "var(--white)";
            let border = "1.5px solid var(--gray-200)";
            let color = "var(--gray-700)";
            if(showFeedback && isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            if(showFeedback && isSel && !isAns){bg="var(--coral-light)";border="1.5px solid #EF4444";color=dk?"#FCA5A5":"#991B1B";}
            if(showFeedback && !isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            const hasArabic=/[\u0600-\u06FF]/.test(opt);const hasKo=/[\uAC00-\uD7AF]/.test(opt);
            const isVeryShort=opt.length<=6;
            return(
              <button key={i} onClick={()=>handleAnswer(opt)} style={{padding:useGrid?"16px 12px":"14px 20px",borderRadius:12,background:bg,border,color,fontSize:useGrid&&isVeryShort?22:useGrid?16:hasKo?(opt.length<=4?18:opt.length<=8?16:14):14,fontWeight:useGrid?700:600,cursor:showFeedback?"default":"pointer",textAlign:useGrid?"center":"left",transition:"all 0.15s",wordBreak:"keep-all",...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}>
                {showFeedback&&isSel?(isAns?"✅ ":"❌ "):""}{showFeedback&&!isSel&&isAns?"✅ ":""}{opt}
              </button>
            );
          })}
            </div>;
          })()}
        </div>
      </div>
    </div>
  );

  // ── Results Screen ──
  if(phase==="results"){
    const r = calcResults();
    // Save pass to user progress
    if(r.passed){
      const prev = user.progress?.gateQuiz||{};
      if(!prev[lang]){
        setUser(u=>({...u,progress:{...u.progress,gateQuiz:{...(u.progress?.gateQuiz||{}),[lang]:{passed:true,ts:Date.now(),scores:{AB:r.abPct,C:r.cPct,DE:r.dePct}}}}}));
      }
    }
    // Find failing categories for diagnostic routing
    const failedTasks = [];
    if(r.abPct<quizData.passCriteria.AB){failedTasks.push("A");failedTasks.push("B");}
    if(r.cPct<quizData.passCriteria.C) failedTasks.push("C");
    if(r.dePct<quizData.passCriteria.DE){failedTasks.push("D");failedTasks.push("E");}

    return(
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:r.passed?dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)":dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:r.passed?"2px solid #86EFAC":"2px solid rgba(212,137,11,0.15)"}}>
          <div style={{fontSize:56,marginBottom:12}}>{r.passed?"🎉":"💪"}</div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,color:r.passed?"var(--teal)":"#D4890B",marginBottom:8}}>
            {r.passed?"Foundations Passed!":"Keep Practicing!"}
          </h2>
          <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>
            {r.passed?"You passed! You may skip Foundations and go straight to lessons.":"You're making progress! Focus on the areas below to strengthen your skills."}
          </p>

          {/* Score breakdown — labels pulled from quiz data (Manifesto P14) */}
          <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
            {(()=>{
              const abTasks=quizData.tasks.filter(t=>t.category==="AB").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const cTasks=quizData.tasks.filter(t=>t.category==="C").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const deTasks=quizData.tasks.filter(t=>t.category==="DE").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              return [{label:`A+B: ${abTasks}`,pct:r.abPct,req:quizData.passCriteria.AB},
                {label:`C: ${cTasks}`,pct:r.cPct,req:quizData.passCriteria.C},
                {label:`D+E: ${deTasks}`,pct:r.dePct,req:quizData.passCriteria.DE},
              ].map((cat,i)=>{
              const pass = cat.pct>=cat.req;
              return(
                <div key={i} style={{marginBottom:i<2?14:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:600,color:pass?"#065F46":"#991B1B",marginBottom:4}}>
                    <span>{pass?"✅":"❌"} {cat.label}</span>
                    <span>{cat.pct}% (need {cat.req}%)</span>
                  </div>
                  <div style={{height:6,borderRadius:3,background:"var(--gray-100)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${cat.pct}%`,background:pass?"#10B981":"#EF4444",borderRadius:3,transition:"width 0.5s"}}/>
                  </div>
                </div>
              );
            });
            })()}
          </div>

          {/* Diagnostic routing for failures */}
          {!r.passed&&failedTasks.length>0&&<div style={{background:"var(--gold-light)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:8}}>📍 Where to focus:</div>
            {[...new Set(failedTasks)].map(t=>(
              <div key={t} style={{fontSize:12,color:"#78350F",marginBottom:4,paddingLeft:8}}>• {quizData.diagnosticRouting[t]}</div>
            ))}
            <div style={{fontSize:11,color:"#92400E",marginTop:10,fontStyle:"italic"}}>This is about a specific subskill — not your overall ability. Targeted practice will fix it.</div>
          </div>}

          {/* Per-task breakdown */}
          <div style={{background:"var(--card-bg)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>Detailed scores:</div>
            {tasks.map(t=>{
              const s = r.scores[t.id];
              return <div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:4,paddingLeft:8}}>• {t.title}: {s?.correct||0}/{s?.total||0} ({s?.pct||0}%)</div>;
            })}
          </div>

          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            {r.passed&&onPass&&<button className="btn" onClick={onPass} style={{background:"linear-gradient(135deg,var(--teal),#2ECDA7)",color:"white",padding:"12px 24px",fontSize:14,fontWeight:700,borderRadius:12,border:"none",cursor:"pointer"}}>Continue to Lessons →</button>}
            <button className="btn btn-outline" onClick={()=>{setPhase("intro");setTaskIdx(0);setItemIdx(0);setAnswers({});setSelected(null);}} style={{padding:"12px 24px",fontSize:14}}>Retry Quiz</button>
            <NavArrow onClick={onBack} isBack size={44}/>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Shared title renderer: icon dedup + script-aware sizing ──
// Suppresses icon when it duplicates first non-ASCII char of title.
// Non-ASCII chars in title render larger + purple for glyph readability (D5, P22).
const renderNavTitle=(icon,title,baseFontSize)=>{
  const hasScriptIcon=icon&&/[^\u0000-\u007F]/.test(icon);
  const iconDupes=hasScriptIcon&&title&&title.trim().startsWith(icon);
  const scaledSize=Math.round(baseFontSize*1.3);
  const parts=(title||"").split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g);
  return <>{!iconDupes&&icon&&<span>{icon} </span>}{parts.map((seg,i)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(seg)?<span key={i} style={{fontSize:scaledSize,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{seg}</span>:<span key={i}>{seg}</span>)}</>;
};

function FoundationsPlaythrough({lang,user,setUser,addXp,learnWord,showToast,addFlag,baseLang="en",onBack}){
  const dk=document.documentElement.classList.contains("dark");
  // Restore navigation from saved state
  const fkNav=(user.progress||{}).fkNav||{};
  const savedNav=fkNav[lang]||null;
  const [selStage,setSelStage]=useState(savedNav?.stageId||null);
  const [selLesson,setSelLesson]=useState(null);
  const [running,setRunning]=useState(false);
  const fpData=FK_PLAYTHROUGH[lang];
  const stages=fpData?.stages||[];
  const fkPlay=(user.progress||{}).fkPlay||{};
  const langPlay=fkPlay[lang]||{};
  const isLessonDone=(lid)=>!!langPlay[lid]?.completed;

  // Save FK navigation state when stage changes
  const saveFkNav=(stageId)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkNav:{...((u.progress||{}).fkNav||{})}};
      if(stageId) p.fkNav[lang]={stageId};
      else delete p.fkNav[lang];
      return{...u,progress:p};
    });
  };

  // Wrap setSelStage to also persist
  const selectStage=(id)=>{setSelStage(id);saveFkNav(id);};
  const clearStage=()=>{setSelStage(null);saveFkNav(null);};

  // ← Backspace: go back in navigation hierarchy
  useEffect(()=>{
    const handler=(e)=>{
      if(running) return;
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();
      if(selStage){clearStage();}
      else if(onBack){onBack();}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[selStage,running]);

  const completeFpLesson=(lesson)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkPlay:{...((u.progress||{}).fkPlay||{})}};
      p.fkPlay[lang]={...(p.fkPlay[lang]||{}),[lesson.id]:{completed:true,ts:Date.now()}};
      return{...u,progress:p};
    });
  };

  // Running a lesson — feed to LessonEngine
  if(running&&selLesson){
    // Find next lesson: next in same stage, or first of next stage
    const getNextLesson=()=>{
      for(let si=0;si<stages.length;si++){
        const sLessons=stages[si].lessons||[];
        const li=sLessons.findIndex(l=>l.id===selLesson.id);
        if(li>=0){
          if(li+1<sLessons.length) return sLessons[li+1];
          if(si+1<stages.length){
            const nextStageLessons=stages[si+1].lessons||[];
            if(nextStageLessons.length>0) return nextStageLessons[0];
          }
          return null;
        }
      }
      return null;
    };
    const nextLesson=getNextLesson();
    return <LessonErrorBoundary onBack={()=>{setRunning(false);setSelLesson(null);}}><LessonEngine
      lesson={selLesson}
      baseLang={baseLang}
      lang={lang}
      addFlag={addFlag}
      unit={{color:"var(--purple-accent-text)",n:0,title:fpData?.name||"Foundations"}}
      user={user}
      addXp={addXp}
      learnWord={learnWord}
      showToast={showToast}
      hideQuizRom={true}
      onBack={()=>{setRunning(false);setSelLesson(null);}}
      onComplete={()=>{completeFpLesson(selLesson);}}
      onContinue={nextLesson?()=>{completeFpLesson(selLesson);setSelLesson(nextLesson);}:null}
    /></LessonErrorBoundary>;
  }

  // Lesson list for a stage
  if(selStage){
    const stage=stages.find(s=>s.id===selStage);
    if(!stage) return null;
    const lessons=stage.lessons||[];
    const doneCt=lessons.filter(l=>isLessonDone(l.id)).length;
    const sPct=lessons.length>0?Math.round((doneCt/lessons.length)*100):0;
    return(
      <div className="anim" data-kb-owner="foundations">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>clearStage()} isBack size={44}/></div>
        {/* Stage header — purple like all headers */}
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{stages.indexOf(stage)+1}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{stage.title}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stage.desc} · {lessons.length} lessons{sPct>0?` · ${sPct}%`:""}</p>
            </div>
            {sPct===100&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          </div>
          {sPct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Lesson cards — 2×2 glossy grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {lessons.map((ls,i)=>{
            const done=isLessonDone(ls.id);
            return(
              <div key={ls.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();setSelLesson(ls);setRunning(true);}} style={{
                cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
                border:done?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
                background:dk?(done?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(done?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s"}}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:done?20:18,fontWeight:900,color:"white",flexShrink:0,boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{done?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
                  <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{done?" ✓":""}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Stage list (main view)
  const totalLessons=stages.reduce((a,s)=>a+(s.lessons||[]).length,0);
  const doneLessons=stages.reduce((a,s)=>a+(s.lessons||[]).filter(l=>isLessonDone(l.id)).length,0);
  const pct=totalLessons>0?Math.round((doneLessons/totalLessons)*100):0;
  return(
    <div className="anim" data-kb-owner="foundations">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      {/* Header — purple like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",color:"white",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
          <div style={{flex:1}}>
            <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{fpData?.name||"Foundations"}</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stages.length} stages · {totalLessons} lessons{pct>0?` · ${pct}%`:""}</p>
          </div>
          {pct===100&&<div style={{fontSize:28,flexShrink:0}}>✅</div>}
        </div>
        {pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
        </div>}
      </div>
      {stages.length>0?
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {stages.map((stage,i)=>{
            const sLessons=stage.lessons||[];
            const sDone=sLessons.filter(l=>isLessonDone(l.id)).length;
            const sPct=sLessons.length>0?Math.round((sDone/sLessons.length)*100):0;
            return(
              <div key={stage.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();selectStage(stage.id);}} style={{
                cursor:"pointer",padding:"18px 14px 14px",textAlign:"center",borderRadius:22,
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                background:sPct===100?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:sPct===100?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                animationDelay:`${i*0.05}s`,position:"relative",overflow:"hidden",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:sPct===100?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,boxShadow:sPct===100?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{sPct===100?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontSize:12,fontWeight:700,color:sPct===100?"var(--teal)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.3}}>{stage.title}</div>
                  <div style={{fontSize:10,color:sPct===100?"var(--teal)":(dk?"rgba(180,170,220,0.6)":"var(--purple-accent-text)"),fontWeight:600,marginTop:2}}>{sPct===100?"✓ Complete":`${sDone}/${sLessons.length} lessons`}</div>
                </div>
                {sPct>0&&sPct<100&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3)"}}/>
                  </div>
                </div>}
              </div>
            );
          })}
        </div>
      :
        <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
          <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
          <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Coming Soon</h3>
          <p style={{color:"var(--gray-400)",fontSize:13}}>Playthrough lessons for this language are being developed.</p>
        </div>
      }
    </div>
  );
}

// ── LESSON LIST (inside a unit) ──
function LessonList({unit,user,lang,onBack,onStart}){
  const dk=document.documentElement.classList.contains("dark");
  const [whyOpen,setWhyOpen]=useState(false);
  const [showUnitPopup,setShowUnitPopup]=useState(false);
  const prog=user.progress||{};
  const unitProg=prog.units?.[`${lang||unit.lang}:${unit.n}`];
  // Backspace = go back to unit map
  useEffect(()=>{
    const handler=(e)=>{
      if(showUnitPopup)return; // popup handles its own keys
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();onBack();
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[onBack,showUnitPopup]);
  return(
    <div className="anim" data-kb-owner="learn">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      
      {/* Unit header — clickable → info popup — matches Nederlands purple */}
      <div role="button" onClick={()=>{UISounds.click();setShowUnitPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,color:"white",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>U{unit.n}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>Unit {unit.n}: {unit.title}</h2>
              {(()=>{const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";const info=getCefrInfo(unit.level);return <span style={{padding:"2px 8px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:9,fontWeight:700}}>{unit.level} • {info.label}</span>;})()}
            </div>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,marginTop:2,margin:0}}>{unit.sub} · {unit.lessons.length} lessons{unitProg?` · ${unitProg.pct}%`:""}</p>
          </div>
          {unitProg&&unitProg.completed&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5,flexShrink:0}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {unitProg&&unitProg.pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${unitProg.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
        </div>}
      </div>

      {/* Unit info popup */}
      {showUnitPopup&&<GlossyPopup title={`Unit ${unit.n}: ${unit.title}`} onClose={()=>setShowUnitPopup(false)}>
        <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:14}}>{unit.sub}</div>
        {unit.goals&&unit.goals.length>0&&<div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>What you'll learn:</div>
          {unit.goals.map((g,i)=><div key={i} style={{padding:"8px 12px",borderRadius:10,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",border:dk?"1px solid rgba(123,94,232,0.1)":"1px solid rgba(123,94,232,0.06)",marginBottom:4,fontSize:13,color:"var(--gray-700)"}}>
            <span style={{color:"var(--purple-accent-text)",fontWeight:700,marginRight:6}}>→</span>{g}
          </div>)}
        </div>}
        <div style={{display:"flex",gap:12}}>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.lessons.length}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Lessons</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.level}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>CEFR Level</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unitProg?`${unitProg.pct}%`:"0%"}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Complete</div>
          </div>
        </div>
      </GlossyPopup>}

      {/* Why this level? — evidence panel (only for units with objectives) */}
      {unit.objectives&&unit.objectives.length>0&&(()=>{
        const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";
        const exp=explainUnitLevel(unit,fw);
        const bandColor=getCefrBandColor(getCefrInfo(exp.level||unit.level).band);
        return <div style={{margin:"0 0 16px",borderRadius:14,border:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",overflow:"hidden"}}>
          <button onClick={()=>setWhyOpen(!whyOpen)} style={{width:"100%",background:"none",border:"none",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--gray-500)",fontWeight:600}}>
            <span style={{fontSize:14}}>{whyOpen?"▾":"▸"}</span>
            Why {fw} {exp.level||unit.level}?
            {exp.derived&&<span style={{marginLeft:"auto",fontSize:10,padding:"2px 8px",borderRadius:6,background:bandColor+"15",color:bandColor,fontWeight:700}}>derived from objectives</span>}
          </button>
          {whyOpen&&<div style={{padding:"0 16px 14px",fontSize:12,color:"var(--gray-600)",lineHeight:1.6}}>
            {exp.objectives.map((o,i)=><div key={o.id} style={{marginBottom:i<exp.objectives.length-1?10:0}}>
              <div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:2}}>
                <span style={{display:"inline-block",padding:"1px 6px",borderRadius:4,background:bandColor+"15",color:bandColor,fontSize:10,fontWeight:700,marginRight:6}}>{o.level}</span>
                {o.name}
              </div>
              {o.evidence.map((e,j)=><div key={j} style={{paddingLeft:12,color:"var(--gray-400)",fontSize:11}}>• {e}</div>)}
            </div>)}
            {!exp.derived&&<div style={{color:"var(--gray-300)",fontStyle:"italic",fontSize:11}}>Level set manually — no objectives mapped yet.</div>}
          </div>}
        </div>;
      })()}

      {/* Lesson cards — 2x2 glossy grid */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        {unit.lessons.map((ls,i)=>{
          const lessonDone=prog.lessons?.[`${lang||unit.lang}:${unit.n}:${ls.id}`];
          return(
          <div key={ls.id} role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();onStart(ls);}}
            style={{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
            border:lessonDone?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
            background:dk?(lessonDone?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(lessonDone?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
            boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
            transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            {/* Lesson number badge */}
            <div style={{width:56,height:56,borderRadius:16,background:lessonDone?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:lessonDone?20:18,fontWeight:900,color:"white",fontFamily:"'DM Sans',sans-serif",flexShrink:0,boxShadow:lessonDone?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{lessonDone?"✓":`L${i+1}`}</span>
            </div>
            <div style={{textAlign:"center",position:"relative",zIndex:2}}>
              <div className="hd" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
              <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{lessonDone?" ✓":""}</div>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}


// ── LESSON ENGINE — TEACH FIRST, QUIZ SECOND ──

// ── FLAG BUTTON — report quiz issues ──
function FlagButton({lessonId,stepIndex,stepData,addFlag}){
  const [open,setOpen]=useState(false);
  const [reason,setReason]=useState(null);
  const [detail,setDetail]=useState("");
  const [sent,setSent]=useState(false);

  const reasons=[
    {id:"wrong_answer",label:"Wrong answer",icon:"❌",desc:"The 'correct' answer is actually wrong"},
    {id:"hint_spoiler",label:"Hint gives it away",icon:"💡",desc:"The hint makes the answer too obvious"},
    {id:"unclear_question",label:"Unclear question",icon:"🤔",desc:"I don't understand what's being asked"},
    {id:"missing_answer",label:"My answer should be accepted",icon:"✅",desc:"I gave a valid answer that was marked wrong"},
    {id:"typo",label:"Typo / spelling error",icon:"📝",desc:"There's a typo in the question or answer"},
    {id:"other",label:"Other issue",icon:"📋",desc:"Something else is wrong"},
  ];

  const submit=()=>{
    if(!reason)return;
    addFlag(lessonId,stepIndex,stepData,reason,detail);
    setSent(true);
    setTimeout(()=>{setOpen(false);setSent(false);setReason(null);setDetail("");},1500);
  };

  if(!open) return(
      <button onClick={()=>setOpen(true)} style={{
        background:"none",border:"none",cursor:"pointer",fontSize:11,
        color:"var(--gray-300)",display:"flex",alignItems:"center",gap:3,
        padding:"4px 10px",borderRadius:12,transition:"all .15s",
        fontFamily:"'DM Sans',sans-serif",fontWeight:600,letterSpacing:0.3
      }} onMouseEnter={e=>{e.target.style.color="var(--coral)";e.target.style.background="rgba(224,74,74,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}>
        <span style={{fontSize:13}}>⚑</span> Report
      </button>
  );

  return(
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setOpen(false);setReason(null);setDetail("");}}>
      <div style={{maxWidth:440,width:"100%",background:"var(--card-bg)",border:"2px solid var(--coral)",borderRadius:20,padding:20,animation:"fadeUp .2s",boxShadow:"0 20px 60px rgba(0,0,0,0.15)"}} onClick={e=>e.stopPropagation()}>
      {sent?(
        <div style={{textAlign:"center",padding:16}}>
          <div style={{fontSize:28,marginBottom:8}}>✅</div>
          <div style={{fontWeight:700,color:"var(--teal-dark)"}}>Thanks! Flag submitted.</div>
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:4}}>This helps LingoVerse learn and improve.</div>
        </div>
      ):(
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:14}}>🚩 What's wrong?</div>
            <button onClick={()=>{setOpen(false);setReason(null);setDetail("");}} style={{background:"none",border:"none",cursor:"pointer",fontSize:16,color:"var(--gray-400)"}}>✕</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
            {reasons.map(r=>(
              <div key={r.id} onClick={()=>setReason(r.id)} style={{
                padding:"10px 12px",borderRadius:8,cursor:"pointer",
                border:`2px solid ${reason===r.id?"var(--coral)":"var(--gray-200)"}`,
                background:reason===r.id?"var(--coral-light)":"var(--white)",
                transition:"all .15s",fontSize:13
              }}>
                <div style={{fontWeight:600,display:"flex",alignItems:"center",gap:6}}><BrandIcon name={r.icon} size={16}/> {r.label}</div>
              </div>
            ))}
          </div>
          {reason&&(
            <div style={{marginTop:10}}>
              <textarea value={detail} onChange={e=>setDetail(e.target.value)}
                placeholder="Optional: add more detail..."
                style={{width:"100%",padding:10,borderRadius:8,border:"1.5px solid var(--gray-200)",
                  fontSize:13,fontFamily:"inherit",resize:"vertical",minHeight:50,outline:"none"}}/>
              <button onClick={submit} style={{
                marginTop:8,width:"100%",padding:"10px 0",borderRadius:8,
                background:"var(--coral)",color:"white",border:"none",
                fontWeight:700,fontSize:14,cursor:"pointer"
              }}>Submit Flag 🚩</button>
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
}


// ── CONTINUE BUTTON — styled, in target language ──
// ── CONFETTI — Pure CSS celebration burst ──
function Confetti({active}){
  const [pieces]=useState(()=>{
    const colors=["#F5A623","#4A8FE7","#2ECD9E","#E74C6F","#9B59B6","#F39C12","#1ABC9C","#E74C3C"];
    return Array.from({length:35},(_,i)=>({
      id:i,
      color:colors[i%colors.length],
      x:Math.random()*100,
      dur:1.8+Math.random()*1.5,
      delay:Math.random()*0.4,
      spin:360+Math.random()*720,
      w:6+Math.random()*8,
      h:4+Math.random()*6,
      r:Math.random()*360,
    }));
  });
  if(!active)return null;
  return(
    <div className="confetti-container">
      {pieces.map(p=>(
        <div key={p.id} className="confetti-piece" style={{
          "--confetti-x":`${p.x}%`,
          "--confetti-dur":`${p.dur}s`,
          "--confetti-delay":`${p.delay}s`,
          "--confetti-spin":`${p.spin}deg`,
          width:p.w,height:p.h,
          background:p.color,
          borderRadius:Math.random()>0.5?"50%":"2px",
          transform:`rotate(${p.r}deg)`,
        }}/>
      ))}
    </div>
  );
}

function ContinueButton({onClick,correct,baseLang="en",spaceRef,onBack,canGoBack}){
  const dk=document.documentElement.classList.contains("dark");
  useEffect(()=>{
    if(spaceRef) spaceRef.current=onClick;
    return ()=>{if(spaceRef && spaceRef.current===onClick) spaceRef.current=null;};
  },[onClick,spaceRef]);
  const mkBtn=(isBack)=>{
    const s=isBack?48:60;const r=isBack?14:16;
    const bg=isBack
      ?(dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)")
      :(correct
        ?"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)"
        :"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)");
    const shadow=dk
      ?(isBack
        ?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)"
        :(correct?"0 0 20px rgba(60,220,180,0.45), 0 0 44px rgba(46,205,158,0.2), 0 4px 16px rgba(46,205,158,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)"))
      :(isBack
        ?"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)"
        :(correct?"0 6px 20px rgba(46,205,158,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"));
    const hoverShadow=dk
      ?(isBack
        ?"0 0 22px rgba(140,130,200,0.4), 0 0 40px rgba(140,130,200,0.15), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15)"
        :(correct?"0 0 28px rgba(60,220,180,0.6), 0 0 56px rgba(46,205,158,0.3), 0 0 80px rgba(46,205,158,0.1), 0 6px 24px rgba(46,205,158,0.5), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.15)":"0 0 28px rgba(160,130,255,0.6), 0 0 56px rgba(140,110,240,0.3), 0 0 80px rgba(123,94,232,0.1), 0 6px 24px rgba(123,94,232,0.5), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.15)"))
      :(isBack
        ?"0 6px 16px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.9)"
        :(correct?"0 8px 28px rgba(46,205,158,0.5), inset 0 2px 0 rgba(255,255,255,0.5)":"0 8px 28px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.5)"));
    const arrowColor=isBack?(dk?"rgba(220,215,240,0.85)":"#777"):"white";
    const iconSz=isBack?22:30;
    return {s,r,bg,shadow,hoverShadow,arrowColor,iconSz};
  };
  const fwd=mkBtn(false);const bck=mkBtn(true);
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:14}}>
      {canGoBack&&onBack&&<button onClick={onBack} style={{display:"flex",alignItems:"center",justifyContent:"center",width:bck.s,height:bck.s,borderRadius:bck.r,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:bck.bg,boxShadow:bck.shadow,transition:"all .15s",position:"relative",overflow:"hidden"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=bck.hoverShadow;if(dk)e.currentTarget.style.filter="brightness(1.15)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=bck.shadow;if(dk)e.currentTarget.style.filter="none";}}
      ><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/><svg width={bck.iconSz} height={bck.iconSz} viewBox="0 0 24 24" fill="none" style={{filter:`drop-shadow(0 1px 2px rgba(0,0,0,${dk?0.5:0.25}))`,position:"relative",zIndex:1}}><path d="M15 19l-7-7 7-7" stroke={bck.arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/></svg></button>}
      <button onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"center",width:fwd.s,height:fwd.s,borderRadius:fwd.r,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:fwd.bg,boxShadow:fwd.shadow,transition:"all .15s",position:"relative",overflow:"hidden"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=fwd.hoverShadow;if(dk)e.currentTarget.style.filter="brightness(1.15)";}}
        onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=fwd.shadow;if(dk)e.currentTarget.style.filter="none";}}
      ><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/><svg width={fwd.iconSz} height={fwd.iconSz} viewBox="0 0 24 24" fill="none" style={{filter:`drop-shadow(0 1px 2px rgba(0,0,0,${dk?0.5:0.25}))`,position:"relative",zIndex:1}}><path d="M9 5l7 7-7 7" stroke={fwd.arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/></svg></button>
    </div>
  );
}

// ── FLAG BUTTON — report quiz issues ──

// ── NavArrow — standalone glossy back/forward arrow button (global) ──
const NavArrow=({onClick,isBack=false,size=null,color=null})=>{
  const dk=document.documentElement.classList.contains("dark");
  const s=size||(isBack?48:60);
  const r=isBack?14:16;
  const bg=isBack
    ?(dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)")
    :(color==="teal"
      ?"linear-gradient(180deg, #5EEAC8 0%, #2ECD9E 35%, #1DB88A 65%, #18A07A 100%)"
      :"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)");
  const shadow=isBack
    ?(dk?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)")
    :"0 5px 16px rgba(85,53,181,0.4), 0 0 12px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)";
  const hoverShadow=isBack
    ?(dk?"0 0 22px rgba(140,130,200,0.4), 0 0 40px rgba(140,130,200,0.15), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.15)":"0 6px 16px rgba(0,0,0,0.12), 0 0 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(0,0,0,0.06)")
    :"0 8px 24px rgba(85,53,181,0.5), 0 0 24px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)";
  const arrowColor=isBack?(dk?"rgba(220,215,240,0.85)":"#777"):"white";
  const iconSz=isBack?Math.round(s*0.46):Math.round(s*0.5);
  return <button onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"center",width:s,height:s,borderRadius:r,border:"none",cursor:"pointer",background:bg,boxShadow:shadow,transition:"all .15s ease",transform:"scale(1)",position:"relative",overflow:"hidden"}}
    onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=hoverShadow;e.currentTarget.style.filter="brightness(1.1)";}}
    onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow=shadow;e.currentTarget.style.filter="none";}}
  >
    <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:isBack?(dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)"):"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>
    <svg width={iconSz} height={iconSz} viewBox="0 0 24 24" fill="none" style={{filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))",position:"relative",zIndex:1}}>
      <path d={isBack?"M15 19l-7-7 7-7":"M9 5l7 7-7 7"} stroke={arrowColor} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>;
};

// ── Score Circle — MUST be outside LessonEngine to avoid remount on re-render ──
const ScoreCircle=({percentage,size=80})=>{
  const wrapRef=useRef(null);
  const circRef=useRef(null);
  const glowRef=useRef(null);
  const numRef=useRef(null);
  const radius=size/2-8;
  const circumference=2*Math.PI*radius;
  const color=percentage>=80?"#7B5EE8":percentage>=60?"#F5A623":"#EF4444";
  const glowColor=percentage>=80?"rgba(123,94,232,":"rgba(245,166,35,";
  useEffect(()=>{
    const target=Math.min(percentage,100);
    const duration=700;
    let start=null;let raf=null;
    const animate=(ts)=>{
      if(!start)start=ts;
      const elapsed=ts-start;
      const progress=Math.min(elapsed/duration,1);
      const eased=1-Math.pow(1-progress,3);
      const pct=eased*target;
      const offset=circumference-(pct/100)*circumference;
      if(circRef.current) circRef.current.style.strokeDashoffset=String(offset);
      if(glowRef.current) glowRef.current.style.strokeDashoffset=String(offset);
      if(numRef.current) numRef.current.textContent=Math.round(pct)+"%";
      const sc=progress<0.55?0.6+progress*(1.12-0.6)/0.55:1.12-(progress-0.55)*(0.12/0.45);
      if(wrapRef.current) wrapRef.current.style.transform=`scale(${sc})`;
      if(progress<1) raf=requestAnimationFrame(animate);
      else{
        if(wrapRef.current) wrapRef.current.style.transform="scale(1)";
        if(numRef.current) numRef.current.textContent=target+"%";
        const finalOffset=String(circumference-(target/100)*circumference);
        if(circRef.current) circRef.current.style.strokeDashoffset=finalOffset;
        if(glowRef.current) glowRef.current.style.strokeDashoffset=finalOffset;
      }
    };
    raf=requestAnimationFrame(animate);
    return ()=>{if(raf)cancelAnimationFrame(raf);};
  },[percentage]);
  return <div ref={wrapRef} style={{width:size,height:size,position:"relative",transform:"scale(0.6)"}}>
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
      {/* Track ring */}
      <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="var(--gray-200)" strokeWidth={8} opacity={0.2}/>
      {/* Glow ring (wider, blurred) */}
      <circle ref={glowRef} cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={14} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference} opacity={0.25} style={{filter:"blur(4px)"}}/>
      {/* Main ring */}
      <circle ref={circRef} cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference} style={{filter:`drop-shadow(0 0 8px ${glowColor}0.6))`}}/>
      {/* Highlight ring (inner shine) */}
      <circle cx={size/2} cy={size/2} r={radius-3} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={2} strokeLinecap="round" strokeDasharray={circumference*0.95} strokeDashoffset={circumference*0.05}/>
    </svg>
    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span ref={numRef} style={{fontSize:size*0.28,fontWeight:800,color,lineHeight:1,textShadow:`0 0 12px ${glowColor}0.4)`}}>0%</span>
    </div>
  </div>;
};

class LessonErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={hasError:false,error:null};}
  static getDerivedStateFromError(error){return{hasError:true,error};}
  componentDidCatch(error,info){if(typeof console!=="undefined")console.error("[LessonEngine crash]",error,info);}
  render(){
    if(this.state.hasError){
      return React.createElement("div",{style:{textAlign:"center",padding:40}},
        React.createElement("h2",{style:{fontSize:22,fontWeight:700,marginBottom:12,color:"#7B5EE8"}},"Something went wrong"),
        React.createElement("p",{style:{fontSize:15,color:"#888",marginBottom:20}},"The lesson encountered an error. Your progress is saved."),
        React.createElement("button",{onClick:()=>{this.setState({hasError:false,error:null});if(this.props.onBack)this.props.onBack();},
          style:{fontSize:15,padding:"12px 28px",borderRadius:14,fontWeight:700,cursor:"pointer",color:"white",border:"none",background:"#7B5EE8"}},"Back to lessons")
      );
    }
    return this.props.children;
  }
}

function LessonEngine({lesson,baseLang="en",unit,user,addXp,learnWord,showToast,onBack,onComplete,addFlag,lang="nl",hideQuizRom=false,onContinue=null}){
  const dk=document.documentElement.classList.contains("dark");
  // Glass panel style for dark mode cards
  const glass={background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",boxShadow:"var(--card-shadow)",border:"2px solid var(--card-border)"};
  // NavArrow is now a global component (defined before ScoreCircle)
  const steps=lesson.steps||[];
  const [si,setSi]=useState(0);
  const [score,setScore]=useState(0);
  const lessonId=lesson?.id;
  const [answered,setAnswered]=useState(false);
  const [showHint,setShowHint]=useState(false);
  const [showTrans,setShowTrans]=useState(false);
  const [selOpt,setSelOpt]=useState(null);
  const [inputVal,setInputVal]=useState("");
  const [matchSel,setMatchSel]=useState({nl:null,en:null});
  const [matchDone,setMatchDone]=useState([]);
  const [done,setDone]=useState(false);
  const [showDeepDive,setShowDeepDive]=useState(false);
  const [showPhonetic,setShowPhonetic]=useState(false);
  const [showCognate,setShowCognate]=useState(false);
  const [showHanja,setShowHanja]=useState(false);
  const [conjAnswers,setConjAnswers]=useState({});
  const [conjChecked,setConjChecked]=useState(false);
  const [doneFocus,setDoneFocus]=useState(0);
  const [showResume,setShowResume]=useState(false);
  const [wordBubble,setWordBubble]=React.useState(null);
  const [miniWordPopup,setMiniWordPopup]=React.useState(null);
  // Grammar colorizer toggle: ON by default for A1-A2, OFF for B1+
  const lessonLevel=(lesson?.steps?.[0]?.level)||"A1";
  const [grammarHl,setGrammarHl]=React.useState(()=>{
    try { const v=localStorage.getItem("vl_grammar_hl"); if(v!==null) return v==="true"; } catch(e){}
    return /^A[12]/.test(lessonLevel);
  });
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_hl",grammarHl?"true":"false");}catch(e){}},[grammarHl]);

  // Grammar color pack system (per-language tabs)
  const [showGrammarSettings,setShowGrammarSettings]=React.useState(false);
  const effectiveLang = lang;
  const langPacks = GRAMMAR_PACKS[effectiveLang] || null;
  // Per-language pack selection: { de: "gender", ko: "particles", ... }
  const [allPackSelections,setAllPackSelections]=React.useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_pack_v3");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  const activePackId = allPackSelections[effectiveLang] || (langPacks?.defaultPack) || null;
  const activePack = React.useMemo(()=>{
    if(!langPacks) return null;
    return langPacks.packs.find(pk=>pk.id===activePackId) || langPacks.packs[0] || null;
  },[langPacks,activePackId]);
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_pack_v3",JSON.stringify(allPackSelections));}catch(e){}},[allPackSelections]);
  const selectPack=(packId)=>setAllPackSelections(prev=>({...prev,[effectiveLang]:packId}));
  // Per-language disabled categories within a pack: { de: ["noun","adverb"], ... }
  const [disabledCats,setDisabledCats]=React.useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_disabled_v1");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_disabled_v1",JSON.stringify(disabledCats));}catch(e){}},[disabledCats]);
  const langDisabled = disabledCats[effectiveLang] || [];
  const toggleCatDisabled=(key)=>setDisabledCats(prev=>{
    const cur=prev[effectiveLang]||[];
    const next=cur.includes(key)?cur.filter(k=>k!==key):[...cur,key];
    return {...prev,[effectiveLang]:next};
  });
  const [expandedLegend,setExpandedLegend]=React.useState(null);
  const [grammarEditMode,setGrammarEditMode]=React.useState(false);

  // ── Lesson Resume — save progress, offer continue on re-enter ──
  const progressKey=`lv_progress_${lessonId}`;
  useEffect(()=>{
    try{
      const saved=_memStore[progressKey];
      if(saved){
        const p=JSON.parse(saved);
        if(p.si>0&&p.si<steps.length){setShowResume(true);}
        else{delete _memStore[progressKey];}
      }
    }catch(e){}
  },[lessonId]);
  // Save progress on step change (skip step 0 to avoid false positives)
  useEffect(()=>{
    if(si>0&&!done){try{_memStore[progressKey]=JSON.stringify({si,score});}catch(e){}}
  },[si,done]);
  // Expose current step to Verumius AI context
  useEffect(()=>{
    const st=steps[si];
    if(st){
      // Strip answer fields so Verumius can't cheat for the learner
      const safe={...st};
      delete safe.a; delete safe.ans; delete safe.blanks;
      window.vr_step={step:safe,si,total:steps.length,lessonId,lessonTitle:lesson?.title,lang};
    }
    return()=>{window.vr_step=null;};
  },[si,lessonId]);
  // Clear progress on completion
  const doneFiredRef=useRef(false);
  useEffect(()=>{
    if(done&&!doneFiredRef.current){
      doneFiredRef.current=true;
      try{delete _memStore[progressKey];}catch(e){}
      try{UISounds.celebrate();}catch(e){}
      addXp(lesson.xp);
      showToast(`Lesson complete! +${lesson.xp} XP`,"🎉");
      try{if(onComplete)onComplete();}catch(e){console.error("onComplete error:",e);}
    }
    if(!done)doneFiredRef.current=false;
  },[done]);

  // ── Full Keyboard Navigation (Decision 7) ──
  // continueRef: fires goNext on spacebar for non-input screens
  // focusIdx: tracks arrow-key focused option in MC/match
  const continueRef=useRef(null);
  const [focusIdx,setFocusIdx]=useState(-1);
  const [dfSlots,setDfSlots]=useState({}); // drag_fill: {slotId: placedWord|null}
  const [dfPoolIdx,setDfPoolIdx]=useState(0); // drag_fill: focused pool tile index
  const [dfFocusSlot,setDfFocusSlot]=useState(null); // drag_fill: which slot is selected for placement
  const [dfDrag,setDfDrag]=useState(null); // drag_fill: {word:string}|null — triggers re-render on start/end
  const dfDragOccurred=useRef(false); // drag_fill: true after pointer moves (distinguishes click from drag)

  // Reset all state when lesson changes (Continue → next lesson)
  useEffect(()=>{
    setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);
    setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setFocusIdx(-1);
    setConjAnswers({});setConjChecked(false);setShowHint(false);
    setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);
    setDoneFocus(0);continueRef.current=null;
  },[lessonId]);
  // Reset focus when step changes
  useEffect(()=>{setFocusIdx(-1);setLinePositions([]);setMatchPendingLine(null);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);},[si]);
  // Match: keyboard select event → delegate to ref-stored handler
  useEffect(()=>{
    const fn=(e)=>{
      const idx=e.detail?.idx;if(idx==null)return;
      const{nlItems,enItems,nlCount,matchDone:md,handleMatch:hm}=matchSelectRef.current;
      if(!nlItems||!hm)return;
      if(idx<nlCount){const w=nlItems[idx];if(!md.includes(w))hm("nl",w);}
      else{const w=enItems[idx-nlCount];if(!md.includes(w))hm("en",w);}
    };
    window.addEventListener("le-match-select",fn);
    return()=>window.removeEventListener("le-match-select",fn);
  },[]);
  // Match: compute pending "dragging" line from selected item to focused item
  useEffect(()=>{
    const container=matchContainerRef.current;
    if(!container||(!matchSel.nl&&!matchSel.en)){setMatchPendingLine(null);return;}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const rect=container.getBoundingClientRect();
    let fromEl=null,toEl=null;
    if(matchSel.nl&&!matchSel.en){
      // NL selected — draw line to focused EN item (if focus is on EN side)
      const nlIdx=nlItems.indexOf(matchSel.nl);
      fromEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
      if(focusIdx>=nlCount){
        const enIdx=focusIdx-nlCount;
        toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      }
    } else if(matchSel.en&&!matchSel.nl){
      // EN selected — draw line to focused NL item
      const enIdx=enItems.indexOf(matchSel.en);
      toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      if(focusIdx>=0&&focusIdx<nlCount){
        fromEl=container.querySelector(`[data-match-nl="${focusIdx}"]`);
      }
    }
    if(fromEl&&toEl){
      const fR=fromEl.getBoundingClientRect();
      const tR=toEl.getBoundingClientRect();
      setMatchPendingLine({x1:fR.right-rect.left,y1:fR.top+fR.height/2-rect.top,x2:tR.left-rect.left,y2:tR.top+tR.height/2-rect.top});
    } else if(fromEl||toEl){
      // Only one side — draw line to edge of gap (midpoint hint)
      const el=fromEl||toEl;
      const eR=el.getBoundingClientRect();
      const isLeft=!!fromEl;
      setMatchPendingLine({
        x1:isLeft?eR.right-rect.left:rect.width/2,
        y1:isLeft?eR.top+eR.height/2-rect.top:eR.top+eR.height/2-rect.top,
        x2:isLeft?rect.width/2:eR.left-rect.left,
        y2:eR.top+eR.height/2-rect.top
      });
    } else {
      setMatchPendingLine(null);
    }
  },[matchSel.nl,matchSel.en,focusIdx]);
  useEffect(()=>{
    const handler=(e)=>{
      // Block all keys when typing in Verumius or search overlay (Escape still works)
      if(document.activeElement?.closest('.vr-wrap,.sf-panel')&&document.activeElement?.tagName==='INPUT'){
        return;
      }
      if(done)return;
      if(showResume)return; // Resume dialog handles its own input
      const st=steps[si];
      if(!st)return;
      const isTextInput=st.type==="tr";

      // ── CTRL+S — Dev skip (auto-answer + show correct) ──
      if((e.ctrlKey||e.metaKey)&&e.code==="KeyS"){
        e.preventDefault();
        if(answered){if(continueRef.current){continueRef.current();continueRef.current=null;}return;}
        if(st.type==="mc"||st.type==="fb"){
          const ans=st.ans||(Array.isArray(st.a)?st.a[0]:st.a);
          setSelOpt(ans);checkAndNext(true);
        } else if(st.type==="match"){
          // Auto-complete all pairs + draw all lines
          const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
          const allDone=pairs.flatMap(p=>[p.nl,p.en]);
          setMatchDone(allDone);setAnswered(true);addXp(2);setScore(s=>s+1);
          // Draw lines after DOM settles
          setTimeout(()=>{
            const container=matchContainerRef.current;if(!container)return;
            const rect=container.getBoundingClientRect();
            const nlItems=matchNlRef.current;const enItems=matchEnRef.current;
            const lines=pairs.map(p=>{
              const nlEl=container.querySelector(`[data-match-nl="${nlItems.indexOf(p.nl)}"]`);
              const enEl=container.querySelector(`[data-match-en="${enItems.indexOf(p.en)}"]`);
              if(!nlEl||!enEl)return null;
              const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
              return{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top};
            }).filter(Boolean);
            setLinePositions(lines);
          },80);
        } else if(st.type==="drag_fill"){
          // Auto-fill all slots correctly
          const filled={};Object.entries(st.blanks).forEach(([k,v])=>{filled[k]=v;});
          setDfSlots(filled);setDfDrag(null);setDfFocusSlot(null);setAnswered(true);addXp(2);setScore(s=>s+1);
        } else {
          // teach/intro/tip/verb_table — just advance
          goNext();
        }
        return;
      }

      // ── A/B/C/D KEYS ── direct option selection for MC/FB
      if(["KeyA","KeyB","KeyC","KeyD"].includes(e.code)){
        if((st.type==="mc"||st.type==="fb")&&!answered){
          const optIdx={KeyA:0,KeyB:1,KeyC:2,KeyD:3}[e.code];
          const count=st.opts?.length||0;
          if(optIdx<count){
            e.preventDefault();
            setFocusIdx(optIdx);
            window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:optIdx}}));
          }
          return;
        }
      }

      // ── SPACEBAR / ENTER — continue or select ──
      if(e.code==="Space"||(e.code==="Enter"&&st.type!=="drag_fill"&&!isTextInput)){
        if(isTextInput&&e.code==="Space")return;
        // drag_fill space: place tile
        if(st.type==="drag_fill"&&!answered&&e.code==="Space"){
          e.preventDefault();
          const blankKeys=Object.keys(st.blanks).sort();
          const poolWords=shuffleOpts(st.pool||[],si);
          const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
          const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
          if(availPool.length>0&&targetSlot){
            const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
            if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
          }
          return;
        }
        e.preventDefault();
        // Continue action pending (after answer, on teach/intro/tip)
        if(continueRef.current){
          continueRef.current();
          continueRef.current=null;
          return;
        }
        // MC/FB: select focused option
        if((st.type==="mc"||st.type==="fb")&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:focusIdx}}));
          return;
        }
        // Match: select focused item
        if(st.type==="match"&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-match-select",{detail:{idx:focusIdx}}));
          return;
        }
      }

      // ── ENTER ── (text-input questions handle Enter via their own onKeyDown)
      // drag_fill: Enter places tile (like Space) or triggers Check if all filled
      if(e.code==="Enter"&&st.type==="drag_fill"&&!answered){
        e.preventDefault();
        const blankKeys=Object.keys(st.blanks).sort();
        const poolWords=shuffleOpts(st.pool||[],si);
        const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
        const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
        if(targetSlot&&availPool.length>0){
          const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
          if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
        } else if(!blankKeys.find(k=>!dfSlots[k])){
          // All filled — check answer directly
          const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
          checkAndNext(allCorrect);
        }
        return;
      }

      // ── ARROW KEYS ── navigate options in grid
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)){
        // drag_fill: Shift+Arrow cycles focused slot, Arrow alone cycles pool
        if(st.type==="drag_fill"&&!answered){
          e.preventDefault();UISounds.tick();
          if(e.shiftKey){
            // Cycle through empty slots
            const blankKeys=Object.keys(st.blanks).sort();
            const emptyKeys=blankKeys.filter(k=>!dfSlots[k]);
            if(emptyKeys.length===0)return;
            const curIdx=emptyKeys.indexOf(dfFocusSlot);
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfFocusSlot(emptyKeys[(curIdx+1)%emptyKeys.length]);
            } else {
              setDfFocusSlot(emptyKeys[(curIdx-1+emptyKeys.length)%emptyKeys.length]);
            }
          } else {
            const poolLen=st.pool?.length||0;
            if(poolLen<=0)return;
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfPoolIdx(prev=>(prev+1)%poolLen);
            } else {
              setDfPoolIdx(prev=>(prev-1+poolLen)%poolLen);
            }
          }
          return;
        }
        if(["mc","fb","match"].includes(st.type)&&!answered){
          e.preventDefault();UISounds.tick();
          if(st.type==="match"){
            // Match: two columns (NL left, EN right), navigate as flat list
            // Items 0..n-1 = NL column, n..2n-1 = EN column
            const nlCount=matchNlRef.current.length;
            const totalCount=nlCount*2;
            if(totalCount<=0)return;
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              const inRight=cur>=nlCount;
              const rowIdx=inRight?cur-nlCount:cur;
              if(e.code==="ArrowDown")return inRight?nlCount+((rowIdx+1)%nlCount):(rowIdx+1)%nlCount;
              if(e.code==="ArrowUp")return inRight?nlCount+((rowIdx-1+nlCount)%nlCount):(rowIdx-1+nlCount)%nlCount;
              if(e.code==="ArrowRight")return inRight?cur:cur+nlCount; // jump to EN column
              if(e.code==="ArrowLeft")return inRight?cur-nlCount:cur; // jump to NL column
              return cur;
            });
          } else {
            const count=st.opts?.length||0;
            if(count<=0)return;
            const cols=2; // 2x2 grid layout
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              if(e.code==="ArrowDown")return (cur+cols)%count;
              if(e.code==="ArrowUp")return (cur-cols+count)%count;
              if(e.code==="ArrowRight")return (cur+1)%count;
              if(e.code==="ArrowLeft")return (cur-1+count)%count;
              return cur;
            });
          }
          return;
        }
      }

      // ── ARROW DOWN/UP on tip/verb_table ── open/close deep dive
      // First ↓ opens deepDive; subsequent ↓ scrolls normally
      if(e.code==="ArrowDown"&&["tip","verb_table"].includes(st.type)&&!showDeepDive&&st.deepDive){
        e.preventDefault();setShowDeepDive(true);return;
      }
      if(e.code==="ArrowUp"&&["tip","verb_table"].includes(st.type)&&showDeepDive){
        e.preventDefault();setShowDeepDive(false);return;
      }

      // ── ARROW RIGHT/LEFT ── navigate between teach/tip/review steps
      if((e.code==="ArrowRight")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&!answered){
        e.preventDefault();UISounds.pageTurn();goNext();return;
      }
      if((e.code==="ArrowLeft")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&si>0){
        e.preventDefault();UISounds.tick();goBack();return;
      }

      // ── BACKSPACE ── go to previous step within lesson
      if(e.code==="Backspace"){
        if(document.activeElement?.tagName==="INPUT"||document.activeElement?.tagName==="TEXTAREA")return;
        // drag_fill: backspace removes last placed tile (if any)
        if(st.type==="drag_fill"&&!answered){
          const blankKeys=Object.keys(st.blanks).sort();
          const filledKeys=blankKeys.filter(k=>dfSlots[k]);
          if(filledKeys.length>0){
            e.preventDefault();
            const last=filledKeys[filledKeys.length-1];
            setDfSlots(prev=>{const n={...prev};delete n[last];return n;});
            UISounds.tick();
            return;
          }
        }
        if(si>0){ e.preventDefault(); goBack(); }
        return;
      }

      // ── ESCAPE ── quit lesson
      if(e.code==="Escape"&&onBack){
        e.preventDefault();
        onBack();
      }

    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[si,focusIdx,done,answered,showDeepDive,showResume,dfSlots,dfPoolIdx,dfFocusSlot]);
  // Pre-shuffle match pairs (refs must be at top level, not inside conditionals)
  const matchNlRef=useRef([]);
  const matchEnRef=useRef([]);
  const matchKeyRef=useRef(null);
  const matchContainerRef=useRef(null);
  const matchSelectRef=useRef({});
  const [linePositions,setLinePositions]=useState([]);
  const [matchPendingLine,setMatchPendingLine]=useState(null);
  const matchDragRef=useRef({active:false,side:null,val:null,startEl:null});
  useEffect(()=>{
    const handleDragEnd=(e)=>{
      if(!matchDragRef.current.active)return;
      const drag=matchDragRef.current;
      matchDragRef.current={active:false,side:null,val:null,startEl:null};
      setMatchPendingLine(null);
      const targetSide=drag.side==="nl"?"en":"nl";
      // Find element under pointer
      const hit=document.elementFromPoint(e.clientX,e.clientY);
      if(!hit)return;
      const matchEl=hit.closest?hit.closest(`[data-match-side="${targetSide}"]`):null;
      if(matchEl){
        const hitVal=matchEl.getAttribute("data-match-val");
        if(hitVal){UISounds.click();matchSelectRef.current.handleMatch(targetSide,hitVal);}
      }
    };
    document.addEventListener("pointerup",handleDragEnd);
    document.addEventListener("touchend",handleDragEnd);
    return ()=>{document.removeEventListener("pointerup",handleDragEnd);document.removeEventListener("touchend",handleDragEnd);};
  },[]);
  const total=steps.length;
  let st=steps[si]||null;
  // Auto-convert multi-blank fb to drag_fill (P48: fb only supports single blank {1})
  if(st&&st.type==="fb"&&/\{2\}/.test(st.s)){
    const fbA=Array.isArray(st.a)?st.a:[st.a];
    const autoBlanks={};
    fbA.forEach((ans,i)=>{autoBlanks[String(i+1)]=ans;});
    st={...st,type:"drag_fill",blanks:autoBlanks,pool:st.opts||fbA};
  }
  const pct=((si)/total)*100;
  const totalEx=steps.filter(s=>["mc","tr","fb","match","conj","drag_fill"].includes(s.type)).length;

  // ── Content Integrity Validator wiring (Manifesto P8+P11) ──
  // Runs once on lesson mount. Dedupes by lessonId+stepIndex+shortTitle.
  const validatorRanRef=useRef(null);
  useEffect(()=>{
    if(!addFlag||!lesson||!lesson.steps)return;
    const lid=lesson.id||"unknown";
    if(validatorRanRef.current===lid)return; // Already validated this lesson
    validatorRanRef.current=lid;
    try{
      const findings=validateLessonForLeaks(lesson,{mode:hideQuizRom?"foundations":"units",lang,lessonId:lid});
      if(findings.length>0){
        findings.forEach(f=>{
          addFlag(
            f.lessonId,
            f.stepIndex,
            {type:"auto_validator",severity:f.severity,shortTitle:f.shortTitle,stepId:f.stepId},
            "auto_leak_"+f.shortTitle.replace(/\s+/g,"_").toLowerCase(),
            `[${f.severity.toUpperCase()}] ${f.explanation} — Fix: ${f.suggestedFix}`
          );
        });
        if(typeof console!=="undefined")console.warn(`[ContentValidator] ${lid}: ${findings.length} finding(s) auto-flagged`);
      }
    }catch(e){if(typeof console!=="undefined")console.error("[ContentValidator] Error:",e);}
  },[lesson?.id]);

  const goNext=()=>{
    continueRef.current=null; // Clear spacebar binding on advance
    if(si+1>=total){setDone(true);setAnswered(false);setSelOpt(null);setWordBubble(null);setShowDeepDive(false);setShowHint(false);setShowTrans(false);}
    else{setSi(i=>i+1);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);setWordBubble(null);UISounds.pageTurn();}
  };
  const goBack=()=>{
    if(si<=0)return;
    continueRef.current=null;
    setSi(i=>i-1);setAnswered(false);setSelOpt(null);setInputVal("");
    setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setMatchPendingLine(null);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);
    setShowHint(false);setFocusIdx(-1);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);UISounds.pageTurn();
  };
  // Register spacebar for non-quiz steps (teach, intro, tip, gramref, verb_table)
  const st_type=steps[si]?.type;
  const curSt=steps[si];
  // Spacebar action should match button onClick exactly:
  // teach: learnWord + goNext, others: just goNext
  const spaceAction=st_type==="teach"?()=>{if(curSt?.nl&&learnWord)learnWord(curSt.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}:goNext;
  // Set immediately for first render (fixes spacebar not working on first slide)
  if(["teach","intro","tip","gramref","vocab_ref","verb_table"].includes(st_type)&&!continueRef.current){
    continueRef.current=spaceAction;
  }
  useEffect(()=>{
    if(["teach","intro","tip","gramref","vocab_ref","verb_table"].includes(st_type)){
      continueRef.current=spaceAction;
    } else {
      // For quiz steps, ContinueButton handles registration when answered
      if(!answered) continueRef.current=null;
    }
  },[si,st_type,answered]);
  const checkAndNext=(correct)=>{
    setAnswered(true);
    setTimeout(()=>{if(correct){setScore(s=>s+1);addXp(2);UISounds.correct();}else{UISounds.wrong();}},150);
  };

  // ── Unified keyboard selection handler for MC/FB (Decision 7) ──
  // Must be here (before any conditional returns) to satisfy Rules of Hooks
  useEffect(()=>{
    const handler=(e)=>{
      if(answered)return;
      const curSt=steps[si];
      if(!curSt)return;
      const idx=e.detail?.idx;
      if(idx<0)return;
      if(curSt.type==="mc"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        setSelOpt(o);
        checkAndNext(o===curSt.ans);
      }
      if(curSt.type==="fb"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        const fbAns=Array.isArray(curSt.a)?curSt.a:[curSt.a];
        const ok=fbAns.some(a=>a.toLowerCase()===o.toLowerCase());
        setSelOpt(o);
        checkAndNext(ok);
      }
    };
    window.addEventListener("le-select",handler);
    return ()=>window.removeEventListener("le-select",handler);
  },[si,answered]);

  // Done-screen focus: 0 = Continue (default), 1 = Overview, 2 = Try Again
  // -1 = no selection (mouse cleared it)
  const doneKb=useRef(false); // true when arrows are driving selection
  const doneFocusRef=useRef(0);
  // Keep ref in sync
  useEffect(()=>{doneFocusRef.current=doneFocus;},[doneFocus]);
  // Reset done focus when done changes
  useEffect(()=>{if(done){const v=onContinue?0:-1;setDoneFocus(v);doneFocusRef.current=v;doneKb.current=true;}},[done]);

  // Keyboard handler for done screen — capture phase to intercept before anything else
  useEffect(()=>{
    if(!done)return;
    const handler=(e)=>{
      const df=doneFocusRef.current;
      if(e.code==="Space"||e.code==="Enter"){
        if(df<0)return; // nothing selected
        e.preventDefault();e.stopPropagation();UISounds.click();
        if(df===0&&onContinue){onContinue();}
        else if(df===1){onBack();}
        else if(df===2){retryLesson();}
        return;
      }
      if(e.code==="Backspace"||e.code==="Escape"){e.preventDefault();e.stopPropagation();UISounds.click();onBack();return;}
      if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)){
        e.preventDefault();e.stopPropagation();UISounds.tick();
        doneKb.current=true;
        // Visual order: Overview(1), Try Again(2), Continue(0)
        const validIdxs=onContinue?[1,2,0]:[1,2];
        setDoneFocus(f=>{
          if(f<0) return validIdxs[e.code==="ArrowRight"||e.code==="ArrowDown"?0:validIdxs.length-1];
          const ci=validIdxs.indexOf(f);
          const cur=ci>=0?ci:0;
          const dir=e.code==="ArrowRight"||e.code==="ArrowDown"?1:-1;
          return validIdxs[(cur+dir+validIdxs.length)%validIdxs.length];
        });
      }
    };
    // Mouse move → clear arrow selection
    const mouseHandler=()=>{
      if(doneKb.current){
        doneKb.current=false;
        setDoneFocus(-1);
      }
    };
    window.addEventListener("keydown",handler,true);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{window.removeEventListener("keydown",handler,true);window.removeEventListener("mousemove",mouseHandler);};
  },[done,doneFocus,onContinue,onBack]);

  const retryLesson=()=>{setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);};

  // Done screen + null guard moved after useMemo (line ~10911) to satisfy Rules of Hooks

  const ProgressBar=()=>(
    <div data-kb-owner="lesson" style={{marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <button onClick={onBack} style={{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:12,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)",boxShadow:dk?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)",transition:"all .15s",position:"relative",overflow:"hidden"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.85)":"#777"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        <span className="hd" style={{fontSize:13,fontWeight:700,color:"var(--gray-400)"}}>{renderNavTitle(lesson.icon,lesson.title,13)}</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          {/* Grammar colorizer toggle */}
          <button onClick={()=>setGrammarHl(!grammarHl)} title={grammarHl?"Grammar Colors ON (click to toggle off)":"Grammar Colors OFF (click to toggle on)"} style={{
            width:32,height:32,borderRadius:10,border:"none",cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:14,transition:"all .15s",
            background:grammarHl
              ?(dk?"linear-gradient(180deg,rgba(123,94,232,0.3),rgba(80,60,180,0.2))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))")
              :(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
            boxShadow:grammarHl
              ?(dk?"0 0 8px rgba(123,94,232,0.3),inset 0 1px 0 rgba(255,255,255,0.1)":"0 2px 8px rgba(123,94,232,0.15),inset 0 1px 0 rgba(255,255,255,0.9)")
              :"none",
            color:grammarHl?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"),
          }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>Aa</button>
          {grammarHl&&<button onClick={()=>setShowGrammarSettings(!showGrammarSettings)} title="Color settings" style={{
            width:32,height:32,borderRadius:10,border:"none",cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:15,transition:"all .2s",
            background:showGrammarSettings
              ?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))")
              :(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
            color:showGrammarSettings?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"var(--gray-400)"),
            transform:showGrammarSettings?"rotate(60deg)":"rotate(0deg)",
          }} onMouseEnter={e=>{e.currentTarget.style.opacity="0.8";}} onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth={2}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth={2}/></svg>
          </button>}
          <span style={{fontSize:12,color:"var(--gray-400)",fontWeight:600}}>{si+1}/{total}</span>
        </div>
      </div>
      {/* Grammar settings panel — tabbed color pack system, VerumLingua candy gloss */}
      {showGrammarSettings&&grammarHl&&typeof window!=="undefined"&&window.innerWidth<600&&<div onClick={()=>setShowGrammarSettings(false)} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",zIndex:9998,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}}/>}
      {showGrammarSettings&&grammarHl&&(()=>{
        if(!langPacks) return <div style={{marginTop:8,padding:"12px 14px",borderRadius:14,background:dk?"rgba(30,30,46,0.95)":"rgba(255,255,255,0.97)",border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(0,0,0,0.06)",boxShadow:dk?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 16px rgba(0,0,0,0.08)",fontSize:12,color:dk?"rgba(255,255,255,0.5)":"var(--gray-500)"}}>No grammar packs available for this language yet.</div>;
        const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
        const tabStyle=(isActive,isPlaceholder)=>({
          display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:22,
          fontSize:12,fontWeight:800,cursor:isPlaceholder?"default":"pointer",
          transition:"all .25s cubic-bezier(.4,0,.2,1)",border:"none",fontFamily:"inherit",
          minHeight:40,opacity:isPlaceholder?0.35:1,letterSpacing:0.2,
          background:isActive
            ?(dk
              ?"linear-gradient(180deg,rgba(140,110,255,0.45) 0%,rgba(123,94,232,0.32) 30%,rgba(100,75,200,0.2) 60%,rgba(80,60,170,0.1) 100%)"
              :"linear-gradient(180deg,rgba(255,255,255,0.98) 0%,rgba(248,244,255,0.96) 30%,rgba(240,234,252,0.92) 60%,rgba(232,224,250,0.88) 100%)")
            :(dk
              ?"linear-gradient(180deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.03) 100%)"
              :"linear-gradient(180deg,rgba(248,245,255,0.85) 0%,rgba(240,236,250,0.6) 100%)"),
          color:isActive?(dk?"#D4C8FF":"#6B4ED8"):(dk?"rgba(255,255,255,0.35)":"rgba(140,130,170,0.55)"),
          boxShadow:isActive
            ?(dk
              ?"0 0 0 1.5px rgba(123,94,232,0.55),0 6px 20px rgba(123,94,232,0.3),0 2px 6px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.12),inset 0 -1px 0 rgba(0,0,0,0.15)"
              :"0 0 0 1.5px rgba(123,94,232,0.3),0 6px 24px rgba(123,94,232,0.15),0 2px 8px rgba(0,0,0,0.04),inset 0 2px 0 rgba(255,255,255,0.95),inset 0 -2px 0 rgba(123,94,232,0.06)")
            :(dk
              ?"0 0 0 1px rgba(255,255,255,0.08),0 2px 6px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.05),inset 0 -1px 0 rgba(0,0,0,0.1)"
              :"0 0 0 1px rgba(123,94,232,0.08),0 2px 6px rgba(0,0,0,0.03),inset 0 2px 0 rgba(255,255,255,0.9),inset 0 -2px 0 rgba(0,0,0,0.02)"),
        });
        return <div style={{
          marginTop:8,marginBottom:4,
          padding:isMobile?"22px 18px 30px":"12px 14px",
          borderRadius:isMobile?"24px 24px 0 0":16,
          background:"transparent",
          position:isMobile?"fixed":"relative",
          bottom:isMobile?0:undefined,left:isMobile?0:undefined,right:isMobile?0:undefined,
          zIndex:isMobile?9999:undefined,
          maxHeight:isMobile?"75vh":"auto",overflowY:"auto",overflowX:"hidden",
          WebkitOverflowScrolling:"touch",
          ...(isMobile?{background:dk?"rgba(30,25,50,0.97)":"rgba(245,242,255,0.97)",border:dk?"1px solid rgba(123,94,232,0.3)":"1px solid rgba(180,165,240,0.4)",boxShadow:"0 -4px 24px rgba(0,0,0,0.15)"}:{}),
        }}>
          {isMobile&&<div style={{width:40,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.5)",margin:"0 auto 16px"}}/>}
          {/* Tab strip — compound bubble tabs */}
          <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:10,WebkitOverflowScrolling:"touch"}}>
            {langPacks.packs.map(pack=>{
              const isActive=pack.id===activePackId;
              const isP=!!pack.placeholder;
              return <button key={pack.id} onClick={()=>{if(!isP){selectPack(pack.id);setExpandedLegend(null);setGrammarEditMode(false);}}} disabled={isP} style={{
                display:"inline-flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:18,
                fontSize:12,fontWeight:800,cursor:isP?"default":"pointer",
                transition:"all .25s cubic-bezier(.4,0,.2,1)",fontFamily:"inherit",
                opacity:isP?0.3:1,letterSpacing:0.3,position:"relative",overflow:"hidden",
                background:isActive
                  ?(dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.35) 0%, rgba(100,80,200,0.22) 50%, rgba(80,60,180,0.12) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.65) 0%, rgba(220,210,255,0.5) 50%, rgba(235,230,255,0.35) 100%)")
                  :(dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.15) 0%, rgba(100,80,200,0.08) 40%, rgba(80,60,180,0.04) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.3) 0%, rgba(220,210,255,0.18) 50%, rgba(235,230,255,0.1) 100%)"),
                color:isActive?(dk?"#D4C8FF":"#6B4ED8"):(dk?"rgba(200,184,255,0.5)":"rgba(140,130,170,0.6)"),
                border:isActive
                  ?(dk?"1.5px solid rgba(123,94,232,0.4)":"1.5px solid rgba(180,165,240,0.5)")
                  :(dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.25)"),
                boxShadow:isActive
                  ?(dk
                    ?"0 4px 16px rgba(123,94,232,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.1)"
                    :"0 4px 16px rgba(123,94,232,0.12), 0 0 8px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.05)")
                  :(dk
                    ?"0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
                    :"0 2px 8px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"),
              }}>
                {/* Gloss arc */}
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  borderRadius:"0 0 50% 50%",pointerEvents:"none",
                }}/>
                <span style={{fontSize:14,fontWeight:900,lineHeight:1,position:"relative",zIndex:1}}>{pack.icon}</span>
                <span style={{position:"relative",zIndex:1}}>{pack.label}</span>
                {isP&&<span style={{fontSize:9,opacity:0.6,marginLeft:2,position:"relative",zIndex:1}}>soon</span>}
              </button>;
            })}
          </div>
          {/* Active pack legend — compact toggle pills in flex-wrap */}
          {activePack&&<div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {activePack.legend.map(item=>{
                const isOff = item.key && langDisabled.includes(item.key);
                const isExpanded = expandedLegend===item.label && !grammarEditMode;
                const labelColor = isOff ? (dk?"rgba(255,255,255,0.35)":"var(--gray-400)") : item.color;
                return <button key={item.label} onClick={()=>{
                    if(grammarEditMode && item.key){toggleCatDisabled(item.key);}
                    else{setExpandedLegend(expandedLegend===item.label?null:item.label);}
                  }}
                  style={{
                    display:"inline-flex",alignItems:"center",gap:6,padding:"9px 16px",borderRadius:22,
                    fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",
                    position:"relative",overflow:"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)",
                    background:isExpanded
                      ?(dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.32) 0%, rgba(100,80,200,0.2) 40%, rgba(80,60,180,0.12) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.6) 0%, rgba(220,210,255,0.45) 50%, rgba(235,230,255,0.3) 100%)")
                      :(dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.05) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.4) 0%, rgba(220,210,255,0.25) 50%, rgba(235,230,255,0.15) 100%)"),
                    border:isExpanded
                      ?(dk?"1.5px solid rgba(123,94,232,0.45)":"1.5px solid rgba(180,165,240,0.55)")
                      :(dk?"1.5px solid rgba(123,94,232,0.22)":"1.5px solid rgba(180,165,240,0.35)"),
                    boxShadow:dk
                      ?"0 3px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.08)"
                      :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)",
                    opacity:isOff?0.4:1,
                  }}>
                    {/* Gloss arc */}
                    <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",
                      background:dk
                        ?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%)"
                        :"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 60%)",
                      borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0,
                    }}/>
                    <span style={{color:labelColor,fontWeight:800,fontSize:12,position:"relative",zIndex:1}}>{item.label}</span>
                    {grammarEditMode&&item.key&&<span style={{width:14,height:14,borderRadius:7,
                      border:`2px solid ${isOff?(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"):item.color}`,
                      display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,
                      background:isOff?"transparent":`${item.color}22`,fontSize:9,lineHeight:1,color:item.color,
                    }}>{isOff?"":"✓"}</span>}
                  </button>;
              })}
            </div>
            {/* Expanded description — full width compound bubble below the pills */}
            {(()=>{const expItem=activePack.legend.find(i=>i.label===expandedLegend);
              return expItem&&expItem.desc&&!grammarEditMode?<div style={{
                marginTop:8,padding:"12px 16px",borderRadius:22,position:"relative",overflow:"hidden",
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                boxShadow:dk
                  ?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.1)"
                  :"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -3px 0 rgba(123,94,232,0.04)",
                fontSize:12,fontWeight:600,lineHeight:1.5,
                color:dk?"rgba(255,255,255,0.7)":"rgba(60,40,120,0.65)",
              }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 60%)",
                  borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0,
                }}/>
                <span style={{fontWeight:800,color:expItem.color,position:"relative",zIndex:1}}>{expItem.label}:</span>{" "}
                <span style={{position:"relative",zIndex:1}}>{expItem.desc}</span>
              </div>:null;
            })()}
            {/* Edit toggle */}
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}>
              <button onClick={()=>{setGrammarEditMode(!grammarEditMode);setExpandedLegend(null);}} style={{
                border:"none",cursor:"pointer",fontFamily:"inherit",
                fontSize:11,fontWeight:700,letterSpacing:0.3,
                color:grammarEditMode?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"rgba(80,60,140,0.4)"),
                display:"flex",alignItems:"center",gap:4,padding:"4px 8px",borderRadius:8,
                transition:"all .15s",
                background:grammarEditMode?(dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)"):"transparent",
              }}>
                <span style={{fontSize:13}}>{grammarEditMode?"✓":"✏️"}</span>
                {grammarEditMode?"Done":"Edit"}
              </button>
            </div>
          </div>}
        </div>;
      })()}
      <div className="xpbar" style={{height:22,borderRadius:12,position:"relative",boxShadow:"inset 0 3px 6px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.7)"}}><div className="xpbar-fill" style={{width:`${clamp(pct,3,100)}%`,borderRadius:12,boxShadow:`0 0 14px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12)`}}/><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:pct>50?"white":"var(--purple-accent-text)",textShadow:pct>50?"0 1px 3px rgba(0,0,0,0.4)":"none",letterSpacing:0.5}}>{clamp(Math.round(pct),0,100)}%</div></div>

      {addFlag&&<div style={{textAlign:"center",marginTop:6,marginBottom:-8}}><FlagButton lessonId={lesson.id} stepIndex={si} stepData={steps[si]} addFlag={addFlag}/></div>}
    </div>
  );

  // ═══ INTRO ═══
  // ═══ RESUME DIALOG — shown when re-entering a lesson with saved progress ═══
  // showResume return moved after useMemo to satisfy Rules of Hooks

  // ── Shared note/text highlighter for board-style cards ──
  // ── Deterministic shuffle for MC/FB options (D24: P8 engine-level fix) ──
  // Seeded by step index so order is stable within a session but varies per step.
  // Prevents answer from always appearing at position A regardless of content order.
  const shuffleOpts=(opts,seed)=>{
    if(!opts||opts.length<=1) return opts||[];
    const a=[...opts];
    let s=((seed+1)*2654435761)>>>0;
    for(let i=a.length-1;i>0;i--){
      s=((s*1664525+1013904223)>>>0);
      const j=s%(i+1);
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };

  // Non-ASCII → purple | ALL-CAPS keywords → teal | 'quoted sounds' → teal | phonetic values → teal
  const TEAL_WORDS=/\b(RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b/;
  const SOUND_VALS=/\b(ah|oh|oo|uh|ee|ng)\b/gi;
  // ════════════════════════════════════════════════════════════
  // KOREAN WORD DICTIONARY — clickable bubble system
  // Every core word from U1–U6. Schema:
  //   base: primary English meaning
  //   morph: morpheme breakdown (Sino-Korean or compound)
  //   particle: particles this word commonly takes
  //   uses: [{k, e}] — 3 real example uses
  //   note: optional extra pedagogical note
  //   level: A1 / A2 / B1
  // ════════════════════════════════════════════════════════════
  const KOREAN_DICT = {
    // ── PRONOUNS & BASIC WORDS ──
    "저": {base:"I / me (polite)",morph:"Native Korean",particle:"는 (topic) / 가 (subject) / 를 (object)",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"저를 도와주세요.",e:"Please help me."},{k:"저도 몰라요.",e:"I don't know either."}],note:"Formal/polite 'I'. Use with elders and strangers. Casual form: 나 .",level:"A1"},
    "나": {base:"I / me (casual)",morph:"Native Korean",particle:"는 / 가 / 를",uses:[{k:"나는 학생이야.",e:"I'm a student. (casual)"},{k:"나도 갈게.",e:"I'll go too. (casual)"},{k:"나한테 줘.",e:"Give it to me. (casual)"}],note:"Casual 'I'. Only use with close friends, younger people, or kids. Never with elders.",level:"A1"},
    "우리": {base:"our / my (collective)",morph:"Native Korean  -  collectivist pronoun",particle:"의 (possessive, often dropped)",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"우리 학교는 커요.",e:"My/our school is big."},{k:"우리 나라가 좋아요.",e:"I love my country."}],note:"Koreans say 우리 엄마 (our mom) where English says 'my mom'. Reflects group-first culture.",level:"A1"},
    "제": {base:"my (polite)",morph:"저 + 의 contracted",particle:" -  (possessive prefix)",uses:[{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"제 가방이 없어요.",e:"My bag is gone."},{k:"제 생각에는요...",e:"In my opinion..."}],note:"Polite possessive. 제 = 저의 contracted. Use with elders and strangers.",level:"A1"},
    "이것": {base:"this (thing)",morph:"이 (this/near speaker) + 것 (thing)",particle:"은/는 이 / 이/가 / 을/를",uses:[{k:"이것은 뭐예요?",e:"What is this?"},{k:"이것을 주세요.",e:"Please give me this."},{k:"이것이 제 책이에요.",e:"This is my book."}],note:"것 is one of the most frequent Korean words. 이것/그것/저것 = 3-level distance system.",level:"A1"},
    "그것": {base:"that (thing near you)",morph:"그 (that/near listener) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"그것이 뭐예요?",e:"What is that (near you)?"},{k:"그것 주세요.",e:"Please give me that."},{k:"그것도 있어요.",e:"That is also available."}],note:"그 = near the listener (2nd person). English collapses 이/그/저 into just 'this/that'.",level:"A1"},
    "저것": {base:"that (thing over there)",morph:"저 (that/far) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"저것은 뭐예요?",e:"What is that over there?"},{k:"저것이 더 싸요.",e:"That over there is cheaper."},{k:"저것 좀 보여주세요.",e:"Please show me that."}],note:"저 = far from both speaker and listener. The 3rd level English lacks.",level:"A1"},
    // ── EXISTENCE / POSSESSION ──
    "있어요": {base:"there is / I have / is (at location)",morph:"있다 (to exist) + 어요 (polite ending)",particle:"이/가 있어요 (subject), 에 있어요 (location)",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"선생님이 교실에 있어요.",e:"The teacher is in the classroom."}],note:"있다 does the job of 3 English verbs: 'there is', 'I have', 'someone is somewhere'.",level:"A1"},
    "없어요": {base:"there is not / I don't have / is not (at location)",morph:"없다 (to not exist) + 어요 (polite ending)",particle:"이/가 없어요 / 에 없어요",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"차가 없어요.",e:"I don't have a car."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있어요. Pair them in memory: 있다 ↔ 없다.",level:"A1"},
    "있다": {base:"to exist / to have",morph:"있 (stem) + 다 (dictionary suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"돈이 있다.",e:"There is money."},{k:"집에 있다.",e:"(I'm) at home."},{k:"시간이 있어요?",e:"Do you have time?"}],note:"Dictionary form. Drop -다, add -어요 for polite speech → 있어요.",level:"A1"},
    "없다": {base:"to not exist / to not have",morph:"없 (stem) + 다 (dictionary suffix)",particle:"이/가 없다",uses:[{k:"돈이 없다.",e:"There is no money."},{k:"이유가 없다.",e:"There is no reason."},{k:"시간이 없어요.",e:"I don't have time."}],note:"Irregular  -  the stem 없 is indivisible. Used to build: 재미없다, 맛없다, 멋없다.",level:"A1"},
    // ── VERBS — CORE ──
    "이에요": {base:"am / is / are (after consonant)",morph:"이 (copula) + 에요 (polite suffix)",particle:"[noun]이에요",uses:[{k:"학생이에요.",e:"I'm a student."},{k:"책이에요.",e:"It's a book."},{k:"서울이에요.",e:"It's Seoul."}],note:"Use after a noun ending in a CONSONANT. 'Copula' = the verb to-be. The verb ALWAYS goes last.",level:"A1"},
    "예요": {base:"am / is / are (after vowel)",morph:"이에요 contracted when stem ends in vowel",particle:"[noun]예요",uses:[{k:"엠마예요.",e:"I'm Emma."},{k:"커피예요.",e:"It's coffee."},{k:"카페예요.",e:"It's a café."}],note:"Same meaning as 이에요  -  use after nouns ending in a VOWEL. The -요 is always the polite marker.",level:"A1"},
    "아니에요": {base:"am not / is not",morph:"아니다 (to not be) + 에요 (polite)",particle:"[noun]이/가 아니에요",uses:[{k:"학생이 아니에요.",e:"I'm not a student."},{k:"이게 아니에요.",e:"It's not this."},{k:"거짓말이 아니에요.",e:"It's not a lie."}],note:"The subject before 아니에요 takes 이/가 (not 은/는). 아니요 (standalone 'no') is different.",level:"A1"},
    "해요": {base:"do / does",morph:"하다 (to do) + 아요 → 해요 (contraction)",particle:"[noun]을/를 해요",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"하다 + 어요 contracts to 해요. Most -하다 verbs conjugate this way.",level:"A1"},
    "가요": {base:"go / goes",morph:"가다 (to go) + 아요 → 가요",particle:"에 가요 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"가다 stem is 가 (pure vowel). Add 요 directly → 가요. One of the most used Korean verbs.",level:"A1"},
    "와요": {base:"come / comes",morph:"오다 (to come) + 아요 → 와요 (contraction)",particle:"에 와요 / 에서 와요",uses:[{k:"학교에 와요.",e:"(I/you) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"오 + 아요 contracts to 와요. Irregular-looking but follows the vowel harmony rule.",level:"A1"},
    "먹어요": {base:"eat / eats",morph:"먹다 (to eat) + 어요",particle:"을/를 먹어요",uses:[{k:"밥을 먹어요.",e:"I eat rice/a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well. (before meal)"}],note:"먹 stem ends in dark vowel ㅓ → takes -어요. One of the highest-frequency Korean verbs.",level:"A1"},
    "마셔요": {base:"drink / drinks",morph:"마시다 (to drink) + 어요 → 마셔요",particle:"을/를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어 contracts to 마셔. 이+어 → 여 is a standard Korean contraction.",level:"A1"},
    "알아요": {base:"know",morph:"알다 (to know) + 아요 → 알아요",particle:"을/를 알아요 / [clause] 알아요",uses:[{k:"알아요.",e:"I know. / I understand."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"알다 is ㄹ-irregular in some forms but 알아요 is regular. Pair with 몰라요 (don't know).",level:"A1"},
    "몰라요": {base:"don't know",morph:"모르다 (to not know) → 몰라요 (ㄹ contraction)",particle:"을/를 몰라요 / [clause] 몰라요",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요, NOT 모르어요. The stem transforms. Full pattern in a later lesson.",level:"A1"},
    "주세요": {base:"please give (me)",morph:"주다 (give) + 세요 (polite request suffix)",particle:"[thing]을/를 주세요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"메뉴 주세요.",e:"Menu, please."},{k:"영수증 주세요.",e:"Receipt, please."}],note:"주다 → 주세요 = 'please give'. The most useful single request phrase in Korean.",level:"A1"},
    "좋아요": {base:"good / I like",morph:"좋다 (to be good) + 아요",particle:"이/가 좋아요",uses:[{k:"이게 좋아요.",e:"This is good. / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 means BOTH 'to be good' and 'to like'. 좋아요 = 'is good' and '(I) like (it)'.",level:"A1"},
    "싫어요": {base:"dislike / don't want",morph:"싫다 (to dislike) + 어요",particle:"이/가 싫어요",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"밥 싫어요.",e:"I don't want rice."},{k:"공부가 싫어요.",e:"I dislike studying."}],note:"Stronger than 안 좋아요 (not good). More emotional/direct expression of dislike.",level:"A1"},
    "해요체": {base:"polite speech level",morph:"해요 (do-politely) + 체 (style/body)",particle:" - ",uses:[{k:"해요체를 써요.",e:"I use polite speech."},{k:"해요체가 제일 안전해요.",e:"Polite speech is the safest."},{k:"해요체로 말하세요.",e:"Please speak in the polite style."}],note:"The 7 Korean speech levels. 해요체 is the safe default for ALL adult interactions.",level:"A1"},
    // ── NEGATION ──
    "안": {base:"not (pre-verbal negation  -  choice/preference)",morph:"Native Korean  -  adverb",particle:"안 + [verb]",uses:[{k:"안 가요.",e:"I'm not going. (choice)"},{k:"안 먹어요.",e:"I don't eat it. (preference)"},{k:"안 해요.",e:"I'm not doing it."}],note:"안 goes BEFORE the verb. Expresses choice or preference. Use 못 for inability.",level:"A1"},
    "못": {base:"cannot (inability)",morph:"Native Korean  -  adverb",particle:"못 + [verb]",uses:[{k:"못 가요.",e:"I can't go. (unable)"},{k:"못 먹어요.",e:"I can't eat it. (allergy/physical)"},{k:"못 해요.",e:"I can't do it."}],note:"못 = physical/circumstantial inability. 안 = won't. The distinction matters in Korean.",level:"A1"},
    "지않아요": {base:"do not (formal negation)",morph:"지 않다 (verb suffix + not-do) + 아요",particle:"[verb stem] + 지 않아요",uses:[{k:"가지 않아요.",e:"I do not go. (formal)"},{k:"먹지 않아요.",e:"I do not eat."},{k:"이해하지 않아요.",e:"I do not understand."}],note:"More formal/emphatic than 안. Used in writing, formal speech. Same meaning as 안 + verb.",level:"A1"},
    "지못해요": {base:"cannot (formal inability)",morph:"지 못하다 (verb suffix + unable-to-do) + 아요",particle:"[verb stem] + 지 못해요",uses:[{k:"가지 못해요.",e:"I cannot go."},{k:"먹지 못해요.",e:"I cannot eat."},{k:"이해하지 못해요.",e:"I cannot understand."}],note:"Formal version of 못 + verb. 수영을 못해요 = 수영하지 못해요. Same meaning, different register.",level:"A1"},
    // ── PARTICLES ──
    "은": {base:"topic marker (after consonant)",morph:"은  -  topic particle",particle:"[consonant-ending noun] + 은",uses:[{k:"밥은 맛있어요.",e:"As for rice, it's delicious."},{k:"저는 학생이에요.",e:"As for me, I'm a student."},{k:"오늘은 바빠요.",e:"As for today, I'm busy."}],note:"Sets the topic. Implies contrast: '저는 (not you)'. After vowels → 는.",level:"A1"},
    "는": {base:"topic marker (after vowel)",morph:"는  -  topic particle",particle:"[vowel-ending noun] + 는",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"커피는 비싸요.",e:"As for coffee, it's expensive."},{k:"한국어는 재미있어요.",e:"As for Korean, it's interesting."}],note:"Same as 은 but after vowel-ending words. Sets topic, shows contrast, marks known info.",level:"A1"},
    "이": {base:"subject marker (after consonant)",morph:"이  -  subject particle",particle:"[consonant-ending noun] + 이",uses:[{k:"학생이 왔어요.",e:"A student came. (new info)"},{k:"시간이 없어요.",e:"There is no time."},{k:"누가 왔어요? 제가 왔어요.",e:"Who came? I came. (emphasis)"}],note:"Marks the doer or new info. Contrast with 은/는 (topic). After vowels → 가.",level:"A1"},
    "가": {base:"① subject particle  ② verb stem (가다 = to go)",morph:"가 is genuinely two things  -  context determines which",particle:"[vowel noun]+가 (particle) · 가+요=가요 (verb)",uses:[{k:"커피가 있어요.",e:"① There is coffee.  -  가 = subject particle"},{k:"학교에 가요.",e:"② I go to school.  -  가 = stem of 가다 (to go)"},{k:"뭐가 좋아요?",e:"① What do you like?  -  가 = subject particle"}],note:"This ambiguity is REAL Korean. When 가 follows a noun → particle. When 가 precedes 요/서/면/고 → verb stem of 가다 (to go). Korean speakers feel the difference instantly  -  you will too.",level:"A1"},
    "을": {base:"object marker (after consonant)",morph:"을  -  object particle",particle:"[consonant-ending noun] + 을",uses:[{k:"밥을 먹어요.",e:"I eat rice. (object)"},{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를... wait: 수영을 해요.",e:"I swim. (수영 ends in a consonant = consonant)"}],note:"Marks what the verb acts on. Often dropped in casual speech. After vowels → 를.",level:"A1"},
    "를": {base:"object marker (after vowel)",morph:"를  -  object particle",particle:"[vowel-ending noun] + 를",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"영화를 봐요.",e:"I watch a movie."},{k:"한국어를 배워요.",e:"I learn Korean."}],note:"Same as 을 but after vowel-ending words. Check the LAST syllable's final consonant.",level:"A1"},
    "에": {base:"to / at / in (location or destination or time)",morph:"에  -  locative/directional particle",particle:"[place]에 있어요 / [place]에 가요 / [time]에",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"집에 있어요.",e:"I'm at home."},{k:"세 시에 만나요.",e:"Let's meet at 3 o'clock."}],note:"에 marks WHERE something IS, WHERE you're GOING, and WHEN. Does NOT mark where you DO things → 에서.",level:"A1"},
    "에서": {base:"at / from (action location or origin)",morph:"에서  -  action locative particle",particle:"[place]에서 [action verb]",uses:[{k:"학교에서 공부해요.",e:"I study at school."},{k:"카페에서 일해요.",e:"I work at the café."},{k:"서울에서 왔어요.",e:"I came from Seoul."}],note:"에서 = where you DO things. Test: is there an action verb? Yes → 에서. Also means 'from'.",level:"A1"},
    "도": {base:"also / too / either",morph:"도  -  additive particle",particle:"[noun] + 도 (REPLACES 은/는, 이/가)",uses:[{k:"저도 학생이에요.",e:"I'm also a student."},{k:"커피도 있어요.",e:"Coffee is also available."},{k:"저도 몰라요.",e:"I don't know either."}],note:"도 REPLACES 은/는 or 이/가  -  it never stacks. 저는도 ✗ / 저도 ✓",level:"A1"},
    "의": {base:"possessive particle (of / 's)",morph:"의  -  genitive particle",particle:"[noun] + 의 + [noun]",uses:[{k:"제 친구의 이름이에요.",e:"It's my friend's name."},{k:"한국의 음식이 맛있어요.",e:"Korea's food is delicious."},{k:"엄마의 핸드폰이에요.",e:"It's mom's phone."}],note:"의 is often DROPPED in casual speech: 엄마의 이름 → 엄마 이름 (same meaning, more natural).",level:"A1"},
    "로": {base:"by / toward / via (direction or means)",morph:"(으)로  -  directional/instrumental particle",particle:"[consonant]으로 / [vowel or ㄹ]로",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"한국어로 말해요.",e:"Speak in Korean."}],note:"(으)로 = by means of / in the direction of. 으로 after consonant (except ㄹ), 로 after vowel or ㄹ.",level:"A1"},
    // ── CORE NOUNS ──
    "밥": {base:"rice / meal / food in general",morph:"Native Korean",particle:"을/를 먹어요",uses:[{k:"밥 먹었어요?",e:"Did you eat? (=How are you?)"},{k:"밥을 먹어요.",e:"I eat a meal."},{k:"밥이 맛있어요.",e:"The food is delicious."}],note:"밥 = literally cooked rice, but culturally = any meal. 밥 먹었어요? is how Koreans say 'How are you?'",level:"A1"},
    "물": {base:"water",morph:"Native Korean",particle:"을 마셔요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"물을 마셔요.",e:"I drink water."},{k:"물이 차가워요.",e:"The water is cold."}],note:"물 ends in consonant ㄹ → 물을 (object marker). Don't let the ㄹ fool you.",level:"A1"},
    "커피": {base:"coffee",morph:"Konglish  -  from English 'coffee'",particle:"를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"아이스 커피요.",e:"Iced coffee, please."}],note:"커피 = Konglish pronunciation of 'coffee'. Korea has one of the world's highest café densities.",level:"A1"},
    "학교": {base:"school",morph:"학(學/study) + 교(校/school)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"학교에서 공부해요.",e:"I study at school."},{k:"우리 학교가 좋아요.",e:"I like my/our school."}],note:"학 reappears in: 대학교 (university), 학원 (academy), 학생 (student).",level:"A1"},
    "집": {base:"house / home",morph:"Native Korean",particle:"에 있어요 / 에 가요",uses:[{k:"집에 있어요.",e:"I'm at home."},{k:"집에 가요.",e:"I go home."},{k:"우리 집이 커요.",e:"My house is big."}],note:"우리 집 (my house) not 나의 집. 집 = home as a concept, not just a building.",level:"A1"},
    "학생": {base:"student",morph:"학(學/study) + 생(生/person)  -  Sino-Korean",particle:"이에요 / 이/가",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"학생이 왔어요.",e:"A student came."},{k:"학생들이 많아요.",e:"There are many students."}],note:"학 = study, 생 = life/person. 학생들 = students (들 = plural marker, optional in Korean).",level:"A1"},
    "선생님": {base:"teacher",morph:"선생(先生/teacher) + 님(honorific suffix)",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"선생님이 오셨어요.",e:"The teacher came."},{k:"선생님, 질문 있어요.",e:"Teacher, I have a question."},{k:"우리 선생님이 좋아요.",e:"I like our teacher."}],note:"님 = honorific suffix showing respect. 선생 alone is informal. 선생님 is the safe form.",level:"A1"},
    "이름": {base:"name",morph:"Native Korean",particle:"이/가 뭐예요?",uses:[{k:"이름이 뭐예요?",e:"What is your name?"},{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"이름을 써 주세요.",e:"Please write your name."}],note:"이름이 뭐예요? = Survival question #1. Koreans often introduce by family name first.",level:"A1"},
    "뭐": {base:"what",morph:"Short for 무엇 (mu-eot)  -  spoken form",particle:"이/가 / 을/를",uses:[{k:"이게 뭐예요?",e:"What is this?"},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"뭐가 좋아요?",e:"What do you like?"}],note:"뭐 is the casual spoken form of 무엇. Used in ~90% of daily questions. One of the top-10 Korean words.",level:"A1"},
    "어디": {base:"where",morph:"Native Korean question word",particle:"어디에 / 어디에서",uses:[{k:"어디 가요?",e:"Where are you going?"},{k:"어디에 있어요?",e:"Where is it?"},{k:"어디서 왔어요?",e:"Where did you come from?"}],note:"어디에 = at where (static) / 어디에서 = from where or doing where. Critical for directions.",level:"A1"},
    "왜": {base:"why",morph:"Native Korean question word",particle:"왜 [verb]?",uses:[{k:"왜요?",e:"Why?"},{k:"왜 안 가요?",e:"Why aren't you going?"},{k:"왜 그래요?",e:"Why are you like that?"}],note:"왜요 alone is a complete, natural question. Can sound confrontational  -  tone matters.",level:"A1"},
    "언제": {base:"when",morph:"Native Korean question word",particle:"언제 [verb]?",uses:[{k:"언제 가요?",e:"When are you going?"},{k:"언제 왔어요?",e:"When did you come?"},{k:"언제가 좋아요?",e:"When is good for you?"}],note:"Time question. Pairs with 에: 언제에 → 언제 (에 is usually dropped with question words).",level:"A1"},
    "얼마나": {base:"how much / how many / how long",morph:"얼마 (how much) + 나 (emphatic)",particle:"얼마나 [adjective]?",uses:[{k:"얼마나 멀어요?",e:"How far is it?"},{k:"얼마나 걸려요?",e:"How long does it take?"},{k:"얼마나 자주 와요?",e:"How often do you come?"}],note:"얼마 alone = how much money? 얼마나 = to what degree/extent (for adjectives and verbs).",level:"A1"},
    "얼마예요": {base:"how much is it? (price)",morph:"얼마 (how much) + 예요 (is)",particle:"이거 얼마예요?",uses:[{k:"얼마예요?",e:"How much is it?"},{k:"이거 얼마예요?",e:"How much is this?"},{k:"다해서 얼마예요?",e:"How much is it in total?"}],note:"Survival shopping phrase. 얼마 = how much money. 얼마나 = how much (degree).",level:"A1"},
    // ── FOOD & RESTAURANT ──
    "맛있어요": {base:"delicious / tastes good",morph:"맛(taste) + 있다(exists) + 어요",particle:"이/가 맛있어요",uses:[{k:"정말 맛있어요!",e:"Really delicious!"},{k:"뭐가 맛있어요?",e:"What's good here?"},{k:"여기 음식이 맛있어요.",e:"The food here is delicious."}],note:"맛있다 = 'taste exists'. 맛없다 = 'taste doesn't exist' = tasteless. LEGO compound.",level:"A1"},
    "맛없어요": {base:"not tasty / tasteless",morph:"맛(taste) + 없다(doesn't exist) + 어요",particle:"이/가 맛없어요",uses:[{k:"이게 맛없어요.",e:"This doesn't taste good."},{k:"라면이 맛없어요.",e:"The ramen is bad."},{k:"왜 맛없어요?",e:"Why doesn't it taste good?"}],note:"Don't say this about food someone cooked for you! Try: 맛이 좀 특이해요 (the taste is unique).",level:"A1"},
    "잘": {base:"well / properly / skillfully",morph:"Native Korean adverb",particle:"잘 + [verb]",uses:[{k:"잘 먹겠습니다.",e:"I will eat well. (said before eating)"},{k:"잘 먹었습니다.",e:"I ate well. (said after eating)"},{k:"잘 해요.",e:"Does it well."}],note:"잘 먹겠습니다 / 잘 먹었습니다 = the two most important meal phrases in Korean.",level:"A1"},
    "좀": {base:"a bit / please (softener)",morph:"Native Korean  -  softening adverb",particle:"좀 + [verb or adjective]",uses:[{k:"좀 주세요.",e:"Please give me (a bit more polite)."},{k:"좀 기다려요.",e:"Wait a moment."},{k:"좀 빨리 가요.",e:"Go a bit faster."}],note:"좀 softens ANY request and makes you sound more Korean and natural. Use it constantly.",level:"A1"},
    "더": {base:"more",morph:"Native Korean adverb",particle:"더 + [verb/adjective]",uses:[{k:"물 좀 더 주세요.",e:"More water, please."},{k:"더 싸요.",e:"It's cheaper. (more cheap)"},{k:"조금만 더요.",e:"Just a little bit more."}],note:"더 = more (comparison). 더 이상 = no more (used with negative: 더 이상 없어요).",level:"A1"},
    "저기요": {base:"excuse me (to get attention)",morph:"저기 (over there) + 요 (polite)  -  attention call",particle:"standalone exclamation",uses:[{k:"저기요! 메뉴 주세요.",e:"Excuse me! Menu please."},{k:"저기요, 화장실이 어디예요?",e:"Excuse me, where is the bathroom?"},{k:"저기요! 여기요!",e:"Excuse me! Over here!"}],note:"저기요 = 'hey over there!' Used to call restaurant staff, strangers, shopkeepers. Universal.",level:"A1"},
    "주문하다": {base:"to order (food/goods)",morph:"주문(注文/order) + 하다 (to do)",particle:"을/를 주문해요",uses:[{k:"주문할게요.",e:"I'll order now."},{k:"뭐 주문했어요?",e:"What did you order?"},{k:"주문이요!",e:"Order! (calling staff)"}],note:"주문 = Sino-Korean: 주(注/pour) + 문(文/writing). The act of writing/noting an order.",level:"A1"},
    "계산": {base:"bill / payment / calculation",morph:"계산(計算)  -  Sino-Korean: 계(計/count) + 산(算/calculate)",particle:"계산해 주세요",uses:[{k:"계산해 주세요.",e:"Check, please."},{k:"계산서 주세요.",e:"The bill, please."},{k:"카드로 계산해도 돼요?",e:"Can I pay by card?"}],note:"In Korea, you often pay at the counter, not tableside. Say 계산해 주세요 and walk to the register.",level:"A1"},
    "포장": {base:"to-go / takeout / packaging",morph:"포장(包裝)  -  Sino-Korean: 포(包/wrap) + 장(裝/pack)",particle:"포장이요 / 포장해 주세요",uses:[{k:"포장이요.",e:"To go, please."},{k:"포장해 주세요.",e:"Can you pack it to go?"},{k:"포장 가능해요?",e:"Is takeout available?"}],note:"포장 = packaging. Say 포장이요 = to go. 먹고 갈게요 = eating here.",level:"A1"},
    // ── TRANSPORT ──
    "버스": {base:"bus",morph:"Konglish  -  from English 'bus'",particle:"를 타요 / 로 가요",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"버스를 타요.",e:"I take the bus."},{k:"버스 정류장이 어디예요?",e:"Where is the bus stop?"}],note:"타다 = to ride/board (타요). Use with all transport: 버스를 타다, 택시를 타다, 지하철을 타다.",level:"A1"},
    "지하철": {base:"subway / metro",morph:"지하(地下/underground) + 철(鐵/iron/rail)  -  Sino-Korean",particle:"를 타요",uses:[{k:"지하철로 가요.",e:"I go by subway."},{k:"지하철역이 어디예요?",e:"Where is the subway station?"},{k:"지하철 몇 호선이에요?",e:"Which subway line is it?"}],note:"지하 = underground, 철 = iron/rail. Seoul subway is one of the world's best  -  cheap, fast, clean.",level:"A1"},
    "택시": {base:"taxi",morph:"Konglish  -  from English 'taxi'",particle:"를 타요",uses:[{k:"택시로 가요.",e:"I go by taxi."},{k:"택시를 불러요.",e:"I call a taxi."},{k:"택시 타도 돼요?",e:"Is it okay to take a taxi?"}],note:"KakaoTaxi app is the main taxi hailing app in Korea. Cheaper than many countries.",level:"A1"},
    "역": {base:"(train/subway) station",morph:"역(驛)  -  Sino-Korean: station",particle:"에서 / 앞에서",uses:[{k:"홍대역에서 만나요.",e:"Let's meet at Hongdae Station."},{k:"역이 어디예요?",e:"Where is the station?"},{k:"역 앞에서 봐요.",e:"Let's meet in front of the station."}],note:"역 + 에서 = at the station. Korean subway system: 1호선 (Line 1) through 9호선 (Line 9) in Seoul.",level:"A1"},
    "출구": {base:"exit",morph:"출(出/out) + 구(口/mouth/opening)  -  Sino-Korean",particle:"로 나오세요",uses:[{k:"1번 출구로 나오세요.",e:"Come out exit 1."},{k:"출구가 어디예요?",e:"Where is the exit?"},{k:"홍대역 9번 출구 앞에서 만나요.",e:"Let's meet at Hongdae Station exit 9."}],note:"Korean subway: every station has numbered exits. Meetings are ALWAYS given by exit number, not 'near the station'.",level:"A1"},
    "타다": {base:"to ride / to board (transport)",morph:"Native Korean verb",particle:"[transport]를 타요",uses:[{k:"버스를 타요.",e:"I take the bus."},{k:"자전거를 타요.",e:"I ride a bicycle."},{k:"어디서 타요?",e:"Where do I board?"}],note:"타다 = to ride/board. Works for all transport and vehicles. Opposite: 내리다 (to get off).",level:"A1"},
    // ── FAMILY ──
    "엄마": {base:"mom (casual)",morph:"Native Korean",particle:"이/가",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"엄마!",e:"Mom!"},{k:"엄마한테 물어봐.",e:"Ask mom."}],note:"엄마 = casual. 어머니 = formal/respectful. 우리 엄마 (not 나의 엄마) is natural Korean.",level:"A1"},
    "아빠": {base:"dad (casual)",morph:"Native Korean  -  tense consonant ㅃ",particle:"이/가",uses:[{k:"아빠가 어디 있어요?",e:"Where is dad?"},{k:"아빠!",e:"Dad!"},{k:"우리 아빠가 의사예요.",e:"My dad is a doctor."}],note:"아빠 = casual. 아버지 = formal. The ㅃ (tense b) sounds clipped/forceful  -  it's not just ㅂ.",level:"A1"},
    "어머니": {base:"mother (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"어머니, 안녕하세요.",e:"Hello, mother/ma'am."},{k:"어머니가 오셨어요.",e:"Mother has come."},{k:"친구 어머니예요.",e:"It's my friend's mother."}],note:"Use 어머니 when talking ABOUT others' mothers or in formal settings. Use 엄마 for your own mom casually.",level:"A1"},
    "아버지": {base:"father (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"아버지가 집에 계세요.",e:"Father is at home."},{k:"친구 아버지예요.",e:"It's my friend's father."},{k:"아버지, 여기요.",e:"Father, over here."}],note:"More formal than 아빠. Use when talking about someone else's father or in respectful contexts.",level:"A1"},
    "형": {base:"older brother (said by males)",morph:"Native Korean",particle:"이/가 / 형!",uses:[{k:"형, 배고파.",e:"Bro, I'm hungry. (male to older brother)"},{k:"우리 형이 대학생이에요.",e:"My older brother is a university student."},{k:"형 어디 있어?",e:"Where are you, bro?"}],note:"ONLY males use 형. Females call older brothers 오빠. Also used for close older male friends.",level:"A1"},
    "오빠": {base:"older brother (said by females)",morph:"Native Korean",particle:"이/가 / 오빠!",uses:[{k:"오빠, 도와줘!",e:"Oppa, help me!"},{k:"우리 오빠가 멋있어요.",e:"My older brother is cool."},{k:"오빠라고 불러도 돼요?",e:"Can I call you oppa?"}],note:"ONLY females use 오빠. Famous in K-pop: female fans call male idols 오빠. Carries warmth/closeness.",level:"A1"},
    "누나": {base:"older sister (said by males)",morph:"Native Korean",particle:"이/가 / 누나!",uses:[{k:"우리 누나가 요리사예요.",e:"My older sister is a chef."},{k:"누나, 이거 먹어.",e:"Sis, eat this."},{k:"누나가 예뻐요.",e:"My older sister is pretty."}],note:"ONLY males use 누나. Same grid: Male speaker: 형 (older bro) / 누나 (older sis).",level:"A1"},
    "언니": {base:"older sister (said by females)",morph:"Native Korean",particle:"이/가 / 언니!",uses:[{k:"언니, 어디 가?",e:"Sis, where are you going?"},{k:"우리 언니가 의사예요.",e:"My older sister is a doctor."},{k:"언니라고 불러요.",e:"(People) call her unni."}],note:"ONLY females use 언니. Also used for older female friends, colleagues. Builds 정 (deep bond).",level:"A1"},
    "남동생": {base:"younger brother",morph:"남(男/male) + 동생(same-root younger sibling)",particle:"이/가",uses:[{k:"남동생이 있어요.",e:"I have a younger brother."},{k:"남동생이 중학생이에요.",e:"My younger brother is in middle school."},{k:"남동생한테 줘.",e:"Give it to your younger brother."}],note:"동생 = younger sibling (gender-neutral). 남동생 = male younger sibling. 여동생 = female.",level:"A1"},
    "여동생": {base:"younger sister",morph:"여(女/female) + 동생(younger sibling)",particle:"이/가",uses:[{k:"여동생이 귀여워요.",e:"My younger sister is cute."},{k:"여동생이 초등학생이에요.",e:"My younger sister is in elementary school."},{k:"여동생이 없어요.",e:"I don't have a younger sister."}],note:"동생 alone = younger sibling (any gender). 여동생 specifically = younger female sibling.",level:"A1"},
    // ── ADJECTIVES / DESCRIPTIVES ──
    "크다": {base:"to be big",morph:"크다 → 커요 (polite present)  -  ㅡ-irregular",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"크다 → 커요: ㅡ drops before 아/어. This is the 으-pattern, taught in a later lesson.",level:"A1"},
    "작다": {base:"to be small",morph:"작다 → 작아요 (polite present)  -  regular",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"작다 is regular. 작 + 아요 = 작아요. Opposite of 크다. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot",morph:"많다 → 많아요  -  regular",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"돈이 많아요.",e:"There's a lot of money."}],note:"많이 (adverb) = a lot, very much: 많이 먹어요 (eat a lot). 많다 ≠ 많이.",level:"A1"},
    "비싸다": {base:"to be expensive",morph:"비싸다 → 비싸요  -  regular",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"Opposite: 싸다 (cheap). 비싸다 / 싸다 are the two core price adjectives.",level:"A1"},
    "싸다": {base:"to be cheap / inexpensive",morph:"싸다 → 싸요  -  regular",particle:"이/가 싸다",uses:[{k:"이게 싸요.",e:"This is cheap."},{k:"더 싼 거 있어요?",e:"Is there a cheaper one?"},{k:"너무 싸요!",e:"So cheap!"}],note:"Also means 'to wrap/pack' (different word, same spelling). Context distinguishes them.",level:"A1"},
    "재미있어요": {base:"interesting / fun",morph:"재미(fun/interest) + 있다(exists) + 어요",particle:"이/가 재미있어요",uses:[{k:"한국어가 재미있어요.",e:"Korean is interesting."},{k:"이 영화가 재미있어요.",e:"This movie is fun."},{k:"뭐가 재미있어요?",e:"What's fun / interesting?"}],note:"재미있다 ↔ 재미없다 (boring). Same LEGO logic as 맛있다 ↔ 맛없다.",level:"A1"},
    "어렵다": {base:"to be difficult",morph:"어렵다 → 어려워요 (ㅂ-irregular)",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"이게 왜 이렇게 어려워요?",e:"Why is this so hard?"}],note:"⚡ ㅂ-irregular: 어렵 + 아/어요 → 어려워요 (ㅂ→우). Taught fully in a later lesson.",level:"A1"},
    "쉽다": {base:"to be easy",morph:"쉽다 → 쉬워요 (ㅂ-irregular)",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest thing?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather/temperature)",morph:"덥다 → 더워요 (ㅂ-irregular)",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ Preview: 덥다 → 더워요 (NOT 덥어요). ㅂ-irregular. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)",morph:"춥다 → 추워요 (ㅂ-irregular)",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ Preview: 춥다 → 추워요 (NOT 춥어요). Same pattern as 덥다.",level:"A1"},
    "예쁘다": {base:"to be pretty / beautiful",morph:"예쁘다 → 예뻐요 (으-irregular)",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"⚡ 으-irregular: 예쁘 + 어요 → 예뻐요 (ㅡ drops). 예쁜 = modifier form (before noun).",level:"A1"},
    "맵다": {base:"to be spicy",morph:"맵다 → 매워요 (ㅂ-irregular)",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives in Korean.",level:"A1"},
    "달다": {base:"to be sweet",morph:"달다 → 달아요  -  regular",particle:"이/가 달다",uses:[{k:"이게 달아요.",e:"This is sweet."},{k:"좀 달아요.",e:"It's a bit sweet."},{k:"너무 달아요.",e:"Too sweet."}],note:"달다 is a ㄹ-irregular verb in some forms but 달아요 is the standard polite form.",level:"A1"},
    "짜다": {base:"to be salty",morph:"짜다 → 짜요  -  regular",particle:"이/가 짜다",uses:[{k:"이 국이 짜요.",e:"This soup is salty."},{k:"너무 짜요.",e:"Too salty."},{k:"짜지 않아요.",e:"It's not salty."}],note:"짜다 also means 'to squeeze/wring'. Context distinguishes. In food context always = salty.",level:"A1"},
    // ── NUMBERS & TIME ──
    "시": {base:"o'clock (counter for hours)",morph:"시(時)  -  Sino-Korean time counter",particle:"Native numbers + 시",uses:[{k:"몇 시예요?",e:"What time is it?"},{k:"세 시예요.",e:"It's 3 o'clock."},{k:"열두 시에 만나요.",e:"Let's meet at 12 o'clock."}],note:"Hours use NATIVE Korean numbers: 한 시, 두 시, 세 시... (not 일 시, 이 시). Mix with Sino for minutes.",level:"A1"},
    "분": {base:"minute (counter)",morph:"분(分)  -  Sino-Korean minute counter",particle:"Sino numbers + 분",uses:[{k:"10분 후에 와요.",e:"Come in 10 minutes."},{k:"삼십 분이에요.",e:"It's 30 minutes."},{k:"잠깐만요, 5분만요.",e:"Just a moment, just 5 minutes."}],note:"Minutes use SINO-KOREAN numbers: 십 분, 이십 분, 삼십 분. 반 = half: 세 시 반 = 3:30.",level:"A1"},
    "개": {base:"counter for general objects",morph:"개(個)  -  Sino-Korean general counter",particle:"Native numbers + 개",uses:[{k:"사과 세 개 주세요.",e:"Three apples, please."},{k:"두 개 있어요.",e:"There are two."},{k:"몇 개예요?",e:"How many (things) are there?"}],note:"개 = the most versatile counter. When unsure which counter to use, 개 is usually safe.",level:"A1"},
    "명": {base:"counter for people",morph:"명(名)  -  Sino-Korean person counter",particle:"Native numbers + 명",uses:[{k:"두 명이에요.",e:"There are two people."},{k:"몇 명이에요?",e:"How many people?"},{k:"한 명만요.",e:"Just one person."}],note:"명 = plain counter for people. 분 = polite/honorific version (두 분이세요? in restaurants).",level:"A1"},
    "잔": {base:"counter for cups/glasses",morph:"잔(盞)  -  Sino-Korean drink counter",particle:"Native numbers + 잔",uses:[{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"두 잔이요.",e:"Two cups."},{k:"맥주 세 잔이요.",e:"Three beers."}],note:"커피 한 잔 주세요 = THE coffee order phrase in Korea. 잔 = cups, glasses, drinks.",level:"A1"},
    "원": {base:"Korean currency unit (won)",morph:"원(圓)  -  Sino-Korean",particle:"[number] + 원",uses:[{k:"얼마예요? 오천 원이에요.",e:"How much? It's 5,000 won."},{k:"만 원 있어요?",e:"Do you have 10,000 won?"},{k:"이십 퍼센트 할인이에요.",e:"It's a 20% discount."}],note:"만 (10,000) is the basic mental unit for Korean money. Think in 만, not in 천.",level:"A1"},
    // ── DIRECTIONS ──
    "왼쪽": {base:"left (side)",morph:"왼 (left) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"왼쪽에 있어요.",e:"It's on the left."},{k:"왼쪽 첫 번째 문이에요.",e:"It's the first door on the left."}],note:"쪽 = side/direction. Reusable suffix: 앞쪽 (front), 뒤쪽 (back), 이쪽 (this way).",level:"A1"},
    "오른쪽": {base:"right (side)",morph:"오른 (right) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"오른쪽으로 가세요.",e:"Go to the right."},{k:"오른쪽에 있어요.",e:"It's on the right."},{k:"오른쪽 끝이에요.",e:"It's at the far right end."}],note:"왼쪽 ↔ 오른쪽. The 쪽 suffix appears in: 앞쪽, 뒤쪽, 이쪽, 저쪽, 그쪽.",level:"A1"},
    "앞": {base:"front / in front",morph:"Native Korean",particle:"에 / 앞에 있어요",uses:[{k:"앞에 있어요.",e:"It's in front."},{k:"학교 앞에서 만나요.",e:"Let's meet in front of the school."},{k:"앞으로 가세요.",e:"Go forward."}],note:"앞 ↔ 뒤 (back). 앞쪽 = front side. 앞으로 = forward (direction).",level:"A1"},
    "뒤": {base:"back / behind",morph:"Native Korean",particle:"에 / 뒤에 있어요",uses:[{k:"뒤에 있어요.",e:"It's behind."},{k:"차 뒤에 있어요.",e:"It's behind the car."},{k:"뒤로 가세요.",e:"Go back."}],note:"앞 ↔ 뒤. 뒤쪽 = back side. Can mean 'behind', 'in back of', 'after' in some contexts.",level:"A1"},
    "위": {base:"above / on top",morph:"Native Korean",particle:"에 있어요",uses:[{k:"책상 위에 있어요.",e:"It's on top of the desk."},{k:"위에 올려놓아요.",e:"Put it on top."},{k:"위층이에요.",e:"It's on the upper floor."}],note:"위 ↔ 아래 (below). 위에 있어요 = is on top of / above.",level:"A1"},
    "아래": {base:"below / under / beneath",morph:"Native Korean (also: 밑)",particle:"에 있어요",uses:[{k:"책상 아래에 있어요.",e:"It's under the desk."},{k:"아래로 내려가요.",e:"Go down."},{k:"아래 층이에요.",e:"It's on the lower floor."}],note:"위 ↔ 아래. 밑 is a synonym. 아래 is slightly more formal, 밑 more casual.",level:"A1"},
    "안": {base:"inside / within",morph:"Native Korean",particle:"에 있어요",uses:[{k:"가방 안에 있어요.",e:"It's inside the bag."},{k:"집 안에 있어요.",e:"It's inside the house."},{k:"안으로 들어오세요.",e:"Please come inside."}],note:"안 ↔ 밖 (outside). DIFFERENT from 안 (negation). Context tells you which 안 it is.",level:"A1"},
    "밖": {base:"outside",morph:"Native Korean",particle:"에 있어요",uses:[{k:"밖에 있어요.",e:"It's outside."},{k:"밖으로 나가세요.",e:"Please go outside."},{k:"밖이 추워요.",e:"It's cold outside."}],note:"안 ↔ 밖. 밖에 = only (in certain phrases): 방법이 없는 것밖에 = there's nothing but...",level:"A1"},
    "옆": {base:"beside / next to",morph:"Native Korean",particle:"에 있어요",uses:[{k:"옆에 앉아요.",e:"Sit next to (me/it)."},{k:"은행 옆에 있어요.",e:"It's next to the bank."},{k:"옆 사람이에요.",e:"It's the person next to (me)."}],note:"옆 is one of the most useful position words for giving and getting directions.",level:"A1"},
    "사이": {base:"between / gap / relationship",morph:"Native Korean",particle:"에 있어요",uses:[{k:"은행과 카페 사이에 있어요.",e:"It's between the bank and the café."},{k:"우리 사이가 좋아요.",e:"Our relationship is good."},{k:"그 사이에 뭐 했어요?",e:"What did you do in between?"}],note:"사이 has TWO meanings: physical 'between' and social 'relationship'. Context distinguishes.",level:"A1"},
    // ── CONNECTORS & ADVERBS ──
    "그래서": {base:"so / therefore / and so",morph:"그래 (like that) + 서 (because/so)",particle:"Sentence + 그래서 + Result",uses:[{k:"배가 고파요. 그래서 밥을 먹어요.",e:"I'm hungry. So I eat."},{k:"비가 와요. 그래서 집에 있어요.",e:"It's raining. So I stay home."},{k:"늦었어요. 그래서 택시를 탔어요.",e:"I was late. So I took a taxi."}],note:"그래서 starts the RESULT sentence. Cause → 그래서 → Effect.",level:"A1"},
    "그런데": {base:"but / however / by the way",morph:"그런 (like that) + 데 (situation/place)",particle:"Sentence + 그런데 + Contrast",uses:[{k:"맛있어요. 그런데 매워요.",e:"It's delicious. But it's spicy."},{k:"갈게요. 그런데 늦을 것 같아요.",e:"I'll go. But I might be late."},{k:"그런데, 이름이 뭐예요?",e:"By the way, what's your name?"}],note:"그런데 = but/however (contrast) OR topic shift ('by the way'). Very common in conversation.",level:"A1"},
    "그러면": {base:"then / in that case / if so",morph:"그러 (do like that) + 면 (if/when)",particle:"Condition + 그러면 + Result",uses:[{k:"배고파요. 그러면 먹어요.",e:"I'm hungry. Then let's eat."},{k:"비가 오면 그러면 택시요.",e:"If it rains, then taxi it is."},{k:"그러면 내일 만나요.",e:"Then let's meet tomorrow."}],note:"그러면 → 그럼 (casual short form). 그럼 is extremely common in conversation.",level:"A1"},
    "아니면": {base:"or / if not",morph:"아니 (not) + 면 (if)  -  Compound",particle:"A + 아니면 + B?",uses:[{k:"버스 아니면 지하철이에요?",e:"Bus or subway?"},{k:"커피 아니면 차요?",e:"Coffee or tea?"},{k:"오늘 아니면 내일요.",e:"Today or tomorrow."}],note:"아니면 = the main 'or' connector in Korean questions. More natural than 또는 in speech.",level:"A1"},
    "하지만": {base:"but / however (formal)",morph:"하지만  -  connector adverb",particle:"Sentence + 하지만 + Contrast",uses:[{k:"비싸요. 하지만 맛있어요.",e:"It's expensive. But it's delicious."},{k:"어려워요. 하지만 재미있어요.",e:"It's hard. But interesting."},{k:"늦었어요. 하지만 왔어요.",e:"I was late. But I came."}],note:"하지만 = more formal than 그런데. Both mean 'but'. 그런데 is more common in speech.",level:"A1"},
    "자주": {base:"often / frequently",morph:"Native Korean adverb",particle:"자주 + [verb]",uses:[{k:"자주 와요.",e:"I come often."},{k:"얼마나 자주요?",e:"How often?"},{k:"자주 먹어요.",e:"I eat it often."}],note:"Frequency scale: 항상 (always) > 자주 (often) > 가끔 (sometimes) > 별로 (not really) > 전혀 (never).",level:"A1"},
    "가끔": {base:"sometimes / occasionally",morph:"Native Korean adverb",particle:"가끔 + [verb]",uses:[{k:"가끔 가요.",e:"I go sometimes."},{k:"가끔 그래요.",e:"It's like that sometimes."},{k:"가끔 생각나요.",e:"I think of it sometimes."}],note:"Frequency: 자주 (often) > 가끔 (sometimes) > 별로 안 (not really).",level:"A1"},
    "보통": {base:"usually / normally / average",morph:"보통(普通)  -  Sino-Korean: 普(general)+通(pass)",particle:"보통 + [verb]",uses:[{k:"보통 7시에 일어나요.",e:"I usually get up at 7."},{k:"보통 어때요?",e:"How is it usually?"},{k:"보통이에요.",e:"It's average / just okay."}],note:"보통 = usually (frequency) AND ordinary/average (adjective). Context tells which.",level:"A1"},
    "별로": {base:"not really / not particularly",morph:"별로  -  always with negative",particle:"별로 + [negative verb]",uses:[{k:"별로 안 좋아요.",e:"Not really good."},{k:"별로예요.",e:"It's not great."},{k:"별로 안 먹어요.",e:"I don't really eat it."}],note:"별로 ALWAYS pairs with a negative. 별로 좋아요 ✗. 별로 안 좋아요 ✓.",level:"A1"},
    "전혀": {base:"not at all / absolutely not",morph:"전혀(全혀)  -  from 전(全/complete) + 혀",particle:"전혀 + [negative verb]",uses:[{k:"전혀 몰라요.",e:"I have absolutely no idea."},{k:"전혀 없어요.",e:"There's absolutely none."},{k:"전혀 안 매워요.",e:"It's not spicy at all."}],note:"전혀 = absolute zero. Always with negative. Stronger than 별로. 전혀 없어요 = absolutely none.",level:"A1"},
    // ── GREETINGS & PHRASES ──
    "안녕하세요": {base:"Hello / Good day (polite)",morph:"안녕(安寧/peace) + 하세요 (please do/are)",particle:"standalone greeting",uses:[{k:"안녕하세요!",e:"Hello!"},{k:"안녕하세요, 저는 사라예요.",e:"Hello, I'm Sara."},{k:"선생님, 안녕하세요.",e:"Hello, teacher."}],note:"The universal Korean greeting for all adults and strangers. 안녕 alone = casual (friends only).",level:"A1"},
    "감사합니다": {base:"Thank you (formal)",morph:"감사(感謝/gratitude) + 합니다 (do-formally)",particle:"standalone phrase",uses:[{k:"감사합니다!",e:"Thank you!"},{k:"정말 감사합니다.",e:"Thank you very much."},{k:"도와주셔서 감사합니다.",e:"Thank you for helping."}],note:"Most formal 'thank you'. 고맙습니다 is warmer/less stiff. Both take 정말 (really) as intensifier.",level:"A1"},
    "고맙습니다": {base:"Thank you (warm, slightly less formal)",morph:"고맙다 (to be grateful) + 습니다",particle:"standalone phrase",uses:[{k:"고맙습니다!",e:"Thank you!"},{k:"정말 고마워요.",e:"I'm really grateful. (casual)"},{k:"고마워!",e:"Thanks! (casual)"}],note:"고맙습니다 is slightly warmer and less stiff than 감사합니다. Both are polite.",level:"A1"},
    "괜찮아요": {base:"it's okay / are you okay / no thanks",morph:"괜찮다 → 괜찮아요",particle:"이/가 괜찮아요",uses:[{k:"괜찮아요.",e:"It's okay. / I'm fine."},{k:"괜찮아요? (to someone)",e:"Are you okay?"},{k:"괜찮아요. (declining offer)",e:"No thank you. (politely declining)"}],note:"괜찮아요 has 3 uses: 1) I'm fine 2) Are you okay? 3) Politely declining. Context is everything.",level:"A1"},
    "죄송합니다": {base:"I'm sorry / excuse me (formal)",morph:"죄송(罪悚/sin-fear) + 합니다 (do-formally)",particle:"standalone apology",uses:[{k:"죄송합니다.",e:"I'm sorry. (formal)"},{k:"늦어서 죄송합니다.",e:"I'm sorry for being late."},{k:"죄송한데요...",e:"I'm sorry but... (softener)"}],note:"죄송합니다 = formal deep apology. 미안해요 = casual sorry. 실례합니다 = 'excuse me' (passing by).",level:"A1"},
    "만나서반갑습니다": {base:"Nice to meet you (formal)",morph:"만나서(having met) + 반갑습니다(glad-formally)",particle:"first meeting phrase",uses:[{k:"만나서 반갑습니다!",e:"Nice to meet you!"},{k:"처음 뵙겠습니다.",e:"Meeting you for the first time. (super formal)"},{k:"반가워요!",e:"Nice to meet you! (casual)"}],note:"만나서 = 'having met'. 반갑다 = glad/pleased. Bow slightly when you say this. Essential first meeting phrase.",level:"A1"},
    "잘부탁드립니다": {base:"I look forward to working with you",morph:"잘(well) + 부탁(favor) + 드립니다(humbly give-formally)",particle:"formal introductory phrase",uses:[{k:"잘 부탁드립니다.",e:"Please take care of me. / Looking forward to working with you."},{k:"앞으로 잘 부탁드립니다.",e:"I look forward to our future relationship."},{k:"잘 부탁해요.",e:"(Casual version) Please take good care of me."}],note:"Untranslatable but critical phrase. Said when joining a team, meeting business partners, or starting any new relationship.",level:"A1"},
    // ── VERB DICTIONARY FORMS (가다 etc  -  prevents particle misread on dict form display) ──
    "가다": {base:"to go (dictionary form)",morph:"가 (stem) + 다 (infinitive suffix)",particle:"에 가다 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디에 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"Dictionary form. Drop 다 → stem 가. Add 요 → 가요. Train metaphor: 가 is the engine.",level:"A1"},
    "오다": {base:"to come (dictionary form)",morph:"오 (stem) + 다 (infinitive suffix)",particle:"에 오다 / 에서 오다",uses:[{k:"학교에 와요.",e:"(I) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"Dictionary form of 와요. 오 + 아요 → 와요 (vowel contraction). Stem: 오.",level:"A1"},
    "먹다": {base:"to eat (dictionary form)",morph:"먹 (stem) + 다 (infinitive suffix)",particle:"을/를 먹다",uses:[{k:"밥을 먹어요.",e:"I eat a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well."}],note:"Dictionary form. 먹 + 어요 → 먹어요. Stem ends in dark vowel ㅓ → takes -어요.",level:"A1"},
    "마시다": {base:"to drink (dictionary form)",morph:"마시 (stem) + 다 (infinitive suffix)",particle:"을/를 마시다",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어요 → 마셔요. 이+어 → 여 contraction. Dictionary form shown here.",level:"A1"},
    "하다": {base:"to do (dictionary form)",morph:"하 (stem) + 다 (infinitive suffix)",particle:"을/를 하다",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"Most frequent Korean verb. 하다 + 어요 contracts to 해요. Powers all [noun]+하다 verbs.",level:"A1"},
    "보다": {base:"to see / to watch (dictionary form)",morph:"보 (stem) + 다 (infinitive suffix)",particle:"을/를 보다",uses:[{k:"영화를 봐요.",e:"I watch a movie."},{k:"뭐 봐요?",e:"What are you watching?"},{k:"한번 봐요.",e:"Take a look."}],note:"보 + 아요 → 봐요. Pure vowel stem. Also means 'to try' in -아/어 보다 form.",level:"A1"},
    "읽다": {base:"to read (dictionary form)",morph:"읽 (stem) + 다 (infinitive suffix)",particle:"을/를 읽다",uses:[{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를 읽어요.",e:"I read Korean."},{k:"신문을 읽어요.",e:"I read the newspaper."}],note:"읽 + 어요 → 읽어요. The ㄱ in 읽 is pronounced only before a vowel.",level:"A1"},
    "쓰다": {base:"to write / to use (dictionary form)",morph:"쓰 (stem) + 다 (infinitive suffix)",particle:"을/를 쓰다",uses:[{k:"한국어를 써요.",e:"I write/use Korean."},{k:"이름을 써 주세요.",e:"Please write your name."},{k:"펜을 써요.",e:"I use a pen."}],note:"쓰 + 어요 → 써요. ㅡ-irregular: ㅡ drops before 아/어. Also means 'to wear (hat/glasses)'.",level:"A1"},
    "알다": {base:"to know (dictionary form)",morph:"알 (stem) + 다 (infinitive suffix)",particle:"을/를 알다",uses:[{k:"알아요.",e:"I know."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"ㄹ-irregular in some forms. 알아요 is regular. Pair with 모르다 (don't know).",level:"A1"},
    "모르다": {base:"to not know (dictionary form)",morph:"모르 (stem) + 다 (infinitive suffix)",particle:"을/를 모르다",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요 (ㄹ-irregular). Drop ㄹ before ㅏ/ㅗ and double: 몰+라요.",level:"A1"},
    "주다": {base:"to give (dictionary form)",morph:"주 (stem) + 다 (infinitive suffix)",particle:"에게 / 한테 주다",uses:[{k:"물 주세요.",e:"Water, please."},{k:"친구한테 줘요.",e:"I give (it) to a friend."},{k:"선물을 줬어요.",e:"I gave a gift."}],note:"주다 → 주세요 = 'please give'. 주 + 어요 → 줘요. Pairs with 받다 (to receive).",level:"A1"},
    "좋다": {base:"to be good / to like (dictionary form)",morph:"좋 (stem) + 다 (infinitive suffix)",particle:"이/가 좋다",uses:[{k:"이게 좋아요.",e:"This is good / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 = BOTH 'to be good' AND 'to like'. 좋 + 아요 → 좋아요.",level:"A1"},
    "싫다": {base:"to dislike (dictionary form)",morph:"싫 (stem) + 다 (infinitive suffix)",particle:"이/가 싫다",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"공부가 싫어요.",e:"I dislike studying."},{k:"밥 싫어요.",e:"I don't want rice."}],note:"싫 + 어요 → 싫어요. More direct/emotional than 안 좋아요.",level:"A1"},
    "있다": {base:"to exist / to have (dictionary form)",morph:"있 (stem) + 다 (infinitive suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"집에 있어요.",e:"I'm at home."}],note:"Dictionary form. Powers 3 English meanings: 'there is', 'I have', 'is somewhere'.",level:"A1"},
    "없다": {base:"to not exist / to not have (dictionary form)",morph:"없 (stem) + 다 (infinitive suffix)",particle:"이/가 없다",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"돈이 없어요.",e:"I have no money."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있다. Irregular stem 없 is indivisible. Builds: 재미없다, 맛없다.",level:"A1"},
    "크다": {base:"to be big (dictionary form)",morph:"크 (stem) + 다 (infinitive suffix)",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"으-irregular: 크다 → 커요. ㅡ drops before 아/어. Contrast with 작다 (small).",level:"A1"},
    "작다": {base:"to be small (dictionary form)",morph:"작 (stem) + 다 (infinitive suffix)",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"Regular. 작 + 아요 → 작아요. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot (dictionary form)",morph:"많 (stem) + 다 (infinitive suffix)",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"많이 먹어요.",e:"Eat a lot."}],note:"많이 (adverb) = a lot. 많다 ≠ 많이. 많 + 아요 → 많아요.",level:"A1"},
    "비싸다": {base:"to be expensive (dictionary form)",morph:"비싸 (stem) + 다 (infinitive suffix)",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"비싸 + 아요 → 비싸요. Regular. Opposite: 싸다 (cheap).",level:"A1"},
    "어렵다": {base:"to be difficult (dictionary form)",morph:"어렵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"생각보다 어려워요.",e:"Harder than I thought."}],note:"⚡ ㅂ-irregular: 어렵 + 어요 → 어려워요. ㅂ→우 before vowel. Taught fully later.",level:"A1"},
    "쉽다": {base:"to be easy (dictionary form)",morph:"쉽 (stem) + 다  -  ㅂ-irregular",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather)  -  dictionary form",morph:"덥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ ㅂ-irregular: 덥 + 어요 → 더워요. NOT 덥어요. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)  -  dictionary form",morph:"춥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ ㅂ-irregular like 덥다. 춥 + 어요 → 추워요. Stem 춥 → 추워.",level:"A1"},
    "맵다": {base:"to be spicy  -  dictionary form",morph:"맵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives.",level:"A1"},
    "예쁘다": {base:"to be pretty  -  dictionary form",morph:"예쁘 (stem) + 다  -  으-irregular",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"으-irregular: 예쁘 + 어요 → 예뻐요. ㅡ drops. 예쁜 = modifier form.",level:"A1"},
    // ── JOBS & PLACES ──
    "의사": {base:"doctor",morph:"의(醫/medicine) + 사(師/expert)  -  Sino-Korean",particle:"이에요/예요 / 이/가",uses:[{k:"의사예요.",e:"I'm a doctor."},{k:"의사 선생님이에요.",e:"He/she is a doctor. (respectful)"},{k:"의사한테 가요.",e:"I'm going to the doctor."}],note:"사(師) = expert in a field. 의사, 요리사, 간호사 all share this 사 morpheme.",level:"A1"},
    "선생": {base:"teacher (informal base word)",morph:"선(先/before/first) + 생(生/birth/person)  -  Sino-Korean",particle:"선생님 (with honorific)",uses:[{k:"선생님이에요.",e:"I'm a teacher."},{k:"영어 선생님이에요.",e:"I'm an English teacher."},{k:"선생님한테 물어봐요.",e:"Ask the teacher."}],note:"선생 alone is informal. Always add 님 in actual use: 선생님. 님 = respect honorific suffix.",level:"A1"},
    "회사원": {base:"office worker / company employee",morph:"회사(會社/company) + 원(員/member)  -  Sino-Korean",particle:"이에요/예요",uses:[{k:"회사원이에요.",e:"I'm an office worker."},{k:"회사원이 되고 싶어요.",e:"I want to become an office worker."},{k:"회사원 생활이 어때요?",e:"How is office worker life?"}],note:"원(員) = member/person. 회사원, 공무원, 병원 all use 원 (though 병원의 원 = place, not person).",level:"A1"},
    "카페": {base:"café",morph:"Konglish  -  from French 'café'",particle:"에 가요 / 에서 마셔요",uses:[{k:"카페에 가요.",e:"I go to the café."},{k:"카페에서 공부해요.",e:"I study at the café."},{k:"카페 어디 있어요?",e:"Where's a café?"}],note:"Korea has one of the world's highest café densities. 카페 culture = 공부, 미팅, 데이트.",level:"A1"},
    "병원": {base:"hospital / clinic",morph:"병(病/illness) + 원(院/institution)  -  Sino-Korean",particle:"에 가요",uses:[{k:"병원에 가요.",e:"I go to the hospital."},{k:"병원이 어디예요?",e:"Where is the hospital?"},{k:"병원에 예약했어요.",e:"I made a hospital appointment."}],note:"병원 = any medical facility. 종합병원 = general hospital. 의원 = small clinic.",level:"A1"},
    "도서관": {base:"library",morph:"도서(圖書/books) + 관(館/building)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"도서관에서 공부해요.",e:"I study at the library."},{k:"도서관이 어디예요?",e:"Where is the library?"},{k:"도서관에 책이 많아요.",e:"There are many books in the library."}],note:"관(館) = public building. 관 reappears in: 미술관 (art museum), 박물관 (museum), 체육관 (gym).",level:"A1"},
  };

  // Merge hand-crafted Korean entries into universal LANG_DICT
  React.useMemo(() => mergeKoreanDict(KOREAN_DICT), []);

  // ═══ RESUME DIALOG (must be AFTER all hooks to satisfy Rules of Hooks) ═══
  if(showResume){
    let savedSi=0;let savedScore=0;
    try{const p=JSON.parse(_memStore[progressKey]);savedSi=p?.si||0;savedScore=p?.score||0;}catch(e){}
    const pct=Math.round((savedSi/steps.length)*100);
    const doResume=()=>{setSi(savedSi);setScore(savedScore);setShowResume(false);};
    const doRestart=()=>{delete _memStore[progressKey];setShowResume(false);};
    return(
      <div className="anim" data-kb-owner="lesson" tabIndex={0} ref={el=>{if(el)el.focus();}} onKeyDown={e=>{
        if(e.code==="Space"||e.code==="Enter"){e.preventDefault();UISounds.click();doResume();}
        if(e.code==="Backspace"){e.preventDefault();UISounds.click();doRestart();}
        if(e.code==="Escape"&&onBack){e.preventDefault();onBack();}
      }} style={{outline:"none",maxWidth:440,margin:"40px auto",textAlign:"center"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",padding:"32px 28px",...glass}}>
          <div style={{fontSize:36,marginBottom:12}}><BrandIcon name={lesson.icon} size={36}/></div>
          <h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:"0 0 8px"}}>{lesson.title||steps[0]?.title||"Lesson"}</h3>
          <div style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,marginBottom:20}}>You were {pct}% through this lesson</div>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={doRestart} style={{padding:"12px 24px",borderRadius:14,border:"2px solid rgba(255,255,255,0.45)",background:"var(--card-bg)",color:"var(--gray-600)",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",transition:"all .2s",...(dk?{backdropFilter:"blur(12px)",boxShadow:"0 4px 14px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.12)"}:{})}}>Start over</button>
            <button onClick={doResume} style={{padding:"12px 24px",borderRadius:14,border:"1.5px solid rgba(255,255,255,0.25)",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"all .2s",...(dk?{textShadow:"0 1px 3px rgba(0,0,0,0.3)"}:{})}}>Continue</button>
          </div>
          <div style={{marginTop:12,fontSize:11,color:"var(--gray-300)"}}> Space continue · ⌫ start over · Esc quit</div>
        </div>
      </div>
    );
  }

  // ═══ DONE SCREEN (must be AFTER all hooks to satisfy Rules of Hooks) ═══
  if(done){
    const cappedScore=Math.min(score,totalEx);
    const p=totalEx>0?Math.round((cappedScore/totalEx)*100):100;
    const candyBtn=(label,onClick,idx,{grad,shadow}={})=>{
      const g=grad||"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)";
      const sh=shadow||"rgba(60,60,80,0.4)";
      const focused=doneFocus===idx;
      const glowShadow=`0 0 28px ${sh}, 0 0 48px ${sh.replace(/[\d.]+\)$/,'0.15)')}, 0 8px 24px ${sh}, inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      const restShadow=`0 6px 20px ${sh}, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      return <button onClick={onClick} style={{fontSize:15,padding:"14px 28px",borderRadius:18,fontWeight:800,cursor:"pointer",fontFamily:"inherit",color:"white",border:"none",background:g,boxShadow:focused?glowShadow:restShadow,transition:"all .2s",position:"relative",overflow:"hidden",letterSpacing:0.3,transform:focused?"scale(1.08) translateY(-2px)":"scale(1)",filter:focused?"brightness(1.15)":"none",outline:focused?"3px solid rgba(200,180,255,0.5)":"none",outlineOffset:3}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";e.currentTarget.style.outlineOffset="3px";}}
        onMouseLeave={e=>{if(!focused){e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=restShadow;e.currentTarget.style.outline="none";}else{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";}}}>
        <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
        <span style={{position:"relative",zIndex:1}}>{label}</span>
      </button>;
    };
    return(
      <div className="anim" data-kb-owner="lesson-done" style={{textAlign:"center",paddingTop:40}}>
        <Confetti active={true}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginBottom:16}}>
          <div style={{fontSize:56,lineHeight:1}}>{p>=80?<AppIcon name="trophy" size={72}/>:p>=60?<AppIcon name="star" size={72}/>:<AppIcon name="hand_wave" size={72}/>}</div>
          {totalEx>0&&<ScoreCircle percentage={p} size={84}/>}
        </div>
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:6}}>{t("le_lesson_complete",baseLang)}</h2>
        <p style={{fontSize:18,color:"var(--gray-500)",marginBottom:4}}>{renderNavTitle(lesson.icon,lesson.title,18)}</p>
        {totalEx>0&&<p style={{fontSize:16,marginBottom:6,color:"var(--gray-400)"}}>Quiz score: <span style={{color:p>=70?"var(--teal)":"var(--gold)",fontWeight:800}}>{cappedScore}/{totalEx}</span></p>}
        <p style={{color:"var(--purple-accent)",fontWeight:700,marginBottom:28}}>+{lesson.xp} XP earned!</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          {candyBtn("Overview",()=>{UISounds.click();onBack();},1,{
            grad:"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)",
            shadow:"rgba(40,40,60,0.4)"
          })}
          {candyBtn("Try Again",()=>{UISounds.click();retryLesson();},2,{
            grad:"linear-gradient(180deg, #F7D06B 0%, #F5A623 25%, #E8960A 55%, #D08E10 85%, #B87A08 100%)",
            shadow:"rgba(245,166,35,0.45)"
          })}
          {onContinue&&candyBtn("Continue",()=>{UISounds.click();onContinue();},0,{
            grad:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",
            shadow:"rgba(123,94,232,0.5)"
          })}</div>
        <div style={{marginTop:14,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select · Esc quit</div>
      </div>
    );
  }
  if(!st) return null;

  // ════════════════════════════════════════════════════════════
  // KOREAN WORD TOKENIZER — splits Korean text into dictionary-lookupable tokens
  // Strategy: split on spaces, then try stripping known particles from each token
  // ════════════════════════════════════════════════════════════
  const KOR_PARTICLES = [
    "에서","으로","이에요","예요","이에","에게","한테","부터","까지","에도",
    "에서도","이라","이라고","이지만","이고","와","과","랑","이랑",
    "을","를","은","는","이","가","도","의","로","에","만","씩","마다","보다","처럼","만큼"
  ];
  // Sort longest first so "에서" is tried before "에"
  const KOR_PART_SORTED = [...KOR_PARTICLES].sort((a,b)=>b.length-a.length);

  const tokenizeKorean = (text) => {
    if(!text||typeof text!=="string") return [{word:text,key:text,isKorean:false}];
    const tokens = [];
    const spaceTokens = text.split(/( )/);
    // Extended conjugation map — all known conjugated forms → dictionary form
    const conjMap={
      "있어요":"있다","없어요":"없다","해요":"하다","가요":"가다","와요":"오다",
      "먹어요":"먹다","마셔요":"마시다","알아요":"알다","몰라요":"모르다",
      "좋아요":"좋다","싫어요":"싫다","커요":"크다","작아요":"작다",
      "많아요":"많다","비싸요":"비싸다","싸요":"싸다","맛있어요":"맛있다",
      "맛없어요":"맛없다","재미있어요":"재미있다","어려워요":"어렵다",
      "쉬워요":"쉽다","더워요":"덥다","추워요":"춥다","예뻐요":"예쁘다",
      "매워요":"맵다","달아요":"달다","짜요":"짜다",
      "봐요":"보다","읽어요":"읽다","써요":"쓰다","들어요":"듣다",
      "걸어요":"걷다","팔아요":"팔다","살아요":"살다","열어요":"열다",
      "알려요":"알리다","불러요":"부르다","달라요":"다르다","빨라요":"빠르다",
      "나아요":"낫다","지어요":"짓다","이어요":"잇다",
      "주세요":"주다","하세요":"하다","오세요":"오다","가세요":"가다",
      "봐요":"보다","봐요":"보다"
    };
    for(let idx=0;idx<spaceTokens.length;idx++){
      const raw=spaceTokens[idx];
      if(raw===" "||raw===""){tokens.push({word:" ",key:" ",isKorean:false});continue;}
      const hasKor=/[\uAC00-\uD7AF]/.test(raw);
      if(!hasKor){tokens.push({word:raw,key:raw,isKorean:false});continue;}
      // Look ahead: find next meaningful (non-space) token
      let nextMeaningful=null;
      for(let j=idx+1;j<spaceTokens.length;j++){
        const t=spaceTokens[j];
        if(t&&t.trim()){nextMeaningful=t.trim();break;}
      }
      const arrowContext=nextMeaningful==="→"||nextMeaningful==="→";
      // CONTEXT-AWARE: if next token is →, this is a verb stem/dict form display
      // Try raw+"다" before anything else to avoid particle misread
      if(arrowContext&&KOREAN_DICT[raw+"다"]){
        tokens.push({word:raw,key:raw+"다",isKorean:true});
        continue;
      }
      // Try direct lookup (dict forms like 가다, 먹다, etc.)
      if(KOREAN_DICT[raw]){
        // Prevent particle misread when in arrow context: e.g. "가" before → should be 가다
        if(arrowContext&&KOREAN_DICT[raw+"다"]){
          tokens.push({word:raw,key:raw+"다",isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true});
        }
        continue;
      }
      // Try stripping particles (longest-first)
      let found=false;
      for(const p of KOR_PART_SORTED){
        if(raw.endsWith(p)&&raw.length>p.length){
          const stem=raw.slice(0,raw.length-p.length);
          if(KOREAN_DICT[stem]){
            tokens.push({word:raw,key:stem,isKorean:true,particle:p,stem});
            found=true;break;
          }
          if(KOREAN_DICT[stem+"다"]){
            tokens.push({word:raw,key:stem+"다",isKorean:true,particle:p,stem});
            found=true;break;
          }
        }
      }
      if(!found){
        // Try conjugation map
        if(conjMap[raw]&&KOREAN_DICT[conjMap[raw]]){
          tokens.push({word:raw,key:conjMap[raw],isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true,noEntry:true});
        }
      }
    }
    return tokens;
  };

  // ════════════════════════════════════════════════════════════
  // UNIVERSAL TOKENIZER — dispatches to language-specific tokenizers
  // Returns array of token objects with unified shape for all languages
  // ════════════════════════════════════════════════════════════
  const tokenize = (text, tLang) => {
    if (!text || typeof text !== "string") return [{ word: text, key: text, isTarget: false, inDict: false }];
    const cfg = LANG_TOKENIZER[tLang];
    if (!cfg) return [{ word: text, key: text, isTarget: false, inDict: false }];

    // Korean: delegate to existing tokenizeKorean
    if (tLang === "ko") {
      return tokenizeKorean(text).map(t => ({
        word: t.word,
        key: t.key,
        isTarget: t.isKorean,
        article: null,
        particle: t.particle || null,
        inDict: t.isKorean && !t.noEntry,
        kind: (LANG_DICT.ko && LANG_DICT.ko[t.key]) ? LANG_DICT.ko[t.key].kind : null,
        isTaught: (LANG_DICT.ko && LANG_DICT.ko[t.key]) ? !!LANG_DICT.ko[t.key].lessonId : false,
      }));
    }

    // European languages (nl, de, fr, es)
    const dict = LANG_DICT[tLang] || {};
    const articles = cfg.articles || [];
    const contractions = cfg.contractions || {};
    const tokens = [];

    // Split on whitespace, preserving spaces and punctuation
    const parts = text.split(/(\s+)/);

    for (let i = 0; i < parts.length; i++) {
      const raw = parts[i];
      if (!raw || /^\s+$/.test(raw)) {
        tokens.push({ word: raw, key: raw, isTarget: false, inDict: false });
        continue;
      }

      // Strip trailing punctuation for lookup
      const punctMatch = raw.match(/^(.+?)([.,!?;:'"»«\u00BB\u00AB\u201C\u201D\u2018\u2019\u00BF\u00A1]+)$/);
      const cleanWord = punctMatch ? punctMatch[1] : raw;
      const trailingPunct = punctMatch ? punctMatch[2] : "";

      // Check if it's a target-language word (contains Latin letters with possible diacritics)
      const isTarget = cfg.scriptRange.test(cleanWord);
      if (!isTarget) {
        tokens.push({ word: raw, key: raw, isTarget: false, inDict: false });
        continue;
      }

      const lower = cleanWord.toLowerCase();

      // Check contractions (French: l'homme → l' + homme, Spanish: al/del are full-word contractions)
      let contractionKey = null;
      for (const [cForm] of Object.entries(contractions)) {
        if (cForm.endsWith("'") && lower.startsWith(cForm) && cleanWord.length > cForm.length) {
          // Prefix contraction (French l', d', j', etc.)
          contractionKey = cForm;
          break;
        }
        // Full-word contractions (Spanish al, del) — skip, handled as grammar words
      }

      if (contractionKey) {
        const rest = cleanWord.slice(contractionKey.length);
        const restLower = rest.toLowerCase();
        // Push the contraction part — look up its grammar color
        let cColor = null, cColorDk = null, cLabel = null, cType = "contraction";
        if (cfg.grammarColors) {
          // Map contractions to their grammar category (j'→pronoun, d'→preposition, l'→article, etc.)
          const cExpansions = cfg.contractions[contractionKey];
          const cBase = Array.isArray(cExpansions) ? cExpansions[0] : cExpansions;
          for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
            if (catDef.match.includes(cBase) || catDef.match.includes(contractionKey)) {
              cColor = catDef.color; cColorDk = catDef.dk; cLabel = catDef.label;
              if (cat.startsWith("article_")) cType = "article";
              else if (cat === "pronoun") cType = "pronoun";
              else if (cat === "preposition") cType = "preposition";
              else cType = cat;
              break;
            }
          }
        }
        tokens.push({
          word: contractionKey, key: contractionKey, isTarget: true,
          article: contractionKey, particle: null, inDict: false,
          kind: "grammar", isTaught: false, isGrammar: true,
          grammarType: cType,
          grammarColor: cColor, grammarColorDk: cColorDk, grammarLabel: cLabel,
        });
        // Push the word part
        const entry = dict[restLower];
        tokens.push({
          word: rest + trailingPunct, key: restLower, isTarget: true,
          article: null, particle: null,
          inDict: !!entry, kind: entry ? entry.kind : null,
          isTaught: entry ? !!entry.lessonId : false,
        });
        continue;
      }

      // Check if it's an article
      const isArticle = articles.includes(lower);
      if (isArticle) {
        // Look up specific article color from grammarColors (gender-aware)
        let artColor = null, artColorDk = null, artLabel = null;
        if (cfg.grammarColors) {
          for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
            if (catDef.match.includes(lower)) {
              artColor = catDef.color;
              artColorDk = catDef.dk;
              artLabel = catDef.label;
              break;
            }
          }
        }
        tokens.push({
          word: raw, key: lower, isTarget: true,
          article: lower, particle: null, inDict: false,
          kind: "grammar", isTaught: false, isGrammar: true,
          grammarType: "article",
          grammarColor: artColor, grammarColorDk: artColorDk, grammarLabel: artLabel,
        });
        continue;
      }

      // Check grammar markers (prepositions, conjunctions, pronouns)
      let isGrammarWord = false;
      if (cfg.grammarColors) {
        for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
          if (catDef.match.includes(lower)) {
            isGrammarWord = true;
            tokens.push({
              word: raw, key: lower, isTarget: true,
              article: null, particle: null, inDict: false,
              kind: "grammar", isTaught: false, isGrammar: true,
              grammarType: cat, grammarLabel: catDef.label,
              grammarColor: catDef.color, grammarColorDk: catDef.dk,
            });
            break;
          }
        }
      }
      if (isGrammarWord) continue;

      // Regular word lookup
      const entry = dict[lower];
      tokens.push({
        word: raw, key: lower, isTarget: true,
        article: null, particle: null,
        inDict: !!entry, kind: entry ? entry.kind : null,
        isTaught: entry ? !!entry.lessonId : false,
      });
    }

    return tokens;
  };

  // ════════════════════════════════════════════════════════════
  // WORD BUBBLE COMPONENT — glossy candy style, portal-style positioning
  // ════════════════════════════════════════════════════════════
  // ═══ WORD BUBBLE ═══
  // iOS candy-gloss, brand purple+teal palette, internal browser-tab history.
  const WordBubble=({entry:initEntry,word:initWord,stem:initStem,particle:initParticle,onClose})=>{
    const [history,setHistory]=React.useState([]);
    const [cur,setCur]=React.useState({entry:initEntry,word:initWord,stem:initStem,particle:initParticle});
    const {entry,word,particle}=cur;
    if(!entry)return null;

    const navTo=(e2,w2,s2,p2)=>{setHistory(h=>[...h,cur]);setCur({entry:e2,word:w2,stem:s2,particle:p2});};
    const goBack=()=>{if(!history.length)return;setCur(history[history.length-1]);setHistory(h=>h.slice(0,-1));};

    // ── bubbleHl: tokenize, make EVERY Korean token tappable ──
    const bubbleHl=(text,fz=16)=>{
      if(!text||typeof text!=="string") return <span style={{color:dk?"rgba(210,200,255,0.75)":"var(--gray-500)",fontSize:fz}}>{text}</span>;
      // For Korean: use existing tokenizeKorean + KOREAN_DICT
      if(/[\uAC00-\uD7AF]/.test(text)){
        const toks=tokenizeKorean(text);
        return <>{toks.map((tok,ti)=>{
          if(!tok.isKorean) return <span key={ti} style={{color:dk?"rgba(200,188,255,0.7)":"var(--gray-500)",fontSize:fz}}>{tok.word}</span>;
          const dictEntry=KOREAN_DICT[tok.key];
          const isKnown=!!dictEntry;
          const useEntry=dictEntry||{
            base:"Entry coming soon",morph:tok.word+" — not yet catalogued",particle:null,
            uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
            note:"Every Korean word will eventually be in LingoVerse.",level:"?"
          };
          return(
            <span key={ti}
              onClick={e=>{e.stopPropagation();navTo(useEntry,tok.word,tok.stem||tok.word,tok.particle);}}
              style={{
                fontSize:fz,fontWeight:900,display:"inline-block",cursor:"pointer",lineHeight:1.35,
                color:isKnown?(dk?"#C8B8FF":"#7050D8"):(dk?"#5EEAC8":"#0D7D5C"),
                borderBottom:isKnown
                  ?(dk?"2px solid rgba(168,144,255,0.6)":"2px solid rgba(112,80,216,0.35)")
                  :(dk?"2px solid rgba(94,234,200,0.55)":"2px solid rgba(13,125,92,0.3)"),
                paddingBottom:1,borderRadius:2,transition:"all .1s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.background=isKnown?(dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.08)"):(dk?"rgba(94,234,200,0.15)":"rgba(13,125,92,0.08)");}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
            >{tok.word}</span>
          );
        })}</>;
      }
      // For all other languages: use universal tokenizer
      const toks=tokenize(text, lang);
      if(!toks||toks.length===0) return <span style={{color:dk?"rgba(210,200,255,0.8)":"var(--gray-600)",fontSize:fz,fontWeight:500}}>{text}</span>;
      const dict=LANG_DICT[lang]||{};
      return <>{toks.map((tok,ti)=>{
        if(!tok.isTarget) return <span key={ti} style={{color:dk?"rgba(200,188,255,0.7)":"var(--gray-500)",fontSize:fz}}>{tok.word}</span>;
        const entry=dict[tok.key];
        const isKnown=!!entry;
        return(
          <span key={ti}
            onClick={isKnown?e=>{e.stopPropagation();navTo({
              base:entry.en,morph:entry.note||null,
              particle:entry.article?entry.article+" "+entry.word:null,
              uses:entry.example?[{k:entry.example,e:entry.exampleEn||""}]:[],
              note:(typeof entry.cognate==="string"?entry.cognate:entry.note)||null,level:entry.level,
            },tok.word,tok.word,null);}:undefined}
            style={{
              fontSize:fz,fontWeight:isKnown?900:500,display:"inline-block",
              cursor:isKnown?"pointer":"default",lineHeight:1.35,
              color:isKnown?(dk?"#C8B8FF":"#7050D8"):(dk?"rgba(210,200,255,0.8)":"var(--gray-600)"),
              borderBottom:isKnown?(dk?"2px solid rgba(168,144,255,0.6)":"2px solid rgba(112,80,216,0.35)"):"none",
              paddingBottom:isKnown?1:0,borderRadius:2,transition:"all .1s",
            }}
            onMouseEnter={e=>{if(isKnown)e.currentTarget.style.background=dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.08)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
          >{tok.word}</span>
        );
      })}</>;
    };

    // ── Outer wrapper: full-screen backdrop, flex-centered ──
    return(
      <div onClick={onClose} style={{
        position:"fixed",inset:0,zIndex:99998,
        display:"flex",alignItems:"center",justifyContent:"center",
        background:"rgba(8,6,24,0.62)",
        backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"
      }}>
        {/* Main bubble panel */}
        <div onClick={e=>e.stopPropagation()} style={{
          width:"min(560px,calc(100vw - 16px))",maxHeight:"88vh",overflowY:"auto",
          position:"relative",overflow:"hidden",
          borderRadius:26,
          background:dk
            ?"linear-gradient(160deg, rgba(58,36,130,0.98) 0%, rgba(44,26,105,0.98) 45%, rgba(32,18,82,0.99) 100%)"
            :"linear-gradient(160deg, rgba(246,242,255,0.99) 0%, rgba(235,226,255,0.99) 55%, rgba(225,214,255,0.99) 100%)",
          border:dk
            ?"1.5px solid rgba(168,144,255,0.35)"
            :"1.5px solid rgba(168,144,255,0.45)",
          boxShadow:dk
            ?"0 0 0 1px rgba(168,144,255,0.08), 0 32px 80px rgba(0,0,0,0.75), inset 0 1.5px 0 rgba(255,255,255,0.14), inset 0 -2px 0 rgba(0,0,0,0.22)"
            :"0 0 0 1px rgba(255,255,255,0.85), 0 32px 80px rgba(60,24,160,0.2), inset 0 2px 0 rgba(255,255,255,0.98), inset 0 -3px 0 rgba(112,80,216,0.08)",
          fontFamily:"'Nunito','system-ui',sans-serif",
          animation:"bubblePop 0.22s cubic-bezier(0.34,1.56,0.64,1) both"
        }}>

          {/* ── Candy gloss arc ── */}
          <div style={{
            position:"absolute",top:0,left:"4%",right:"4%",height:"40%",
            borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:1,
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 55%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.22) 50%, transparent 100%)"
          }}/>

          <div style={{position:"relative",zIndex:2,padding:"18px 20px 20px"}}>

            {/* ── BROWSER-TAB HISTORY BAR ── */}
            {history.length>0&&(
              <div style={{
                display:"flex",alignItems:"center",gap:6,marginBottom:14,
                overflowX:"auto",paddingBottom:2,
              }}>
                {history.map((h,hi)=>(
                  <button key={hi} onClick={e=>{
                    e.stopPropagation();
                    // Navigate back to this exact history point
                    setCur(h);
                    setHistory(prev=>prev.slice(0,hi));
                  }} style={{
                    flexShrink:0,
                    background:dk
                      ?"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"
                      :"linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,234,255,0.85))",
                    border:dk?"1px solid rgba(168,144,255,0.25)":"1px solid rgba(168,144,255,0.3)",
                    borderRadius:10,padding:"4px 12px",cursor:"pointer",
                    fontSize:13,fontWeight:800,
                    color:dk?"rgba(200,184,255,0.9)":"#7050D8",
                    boxShadow:dk
                      ?"inset 0 1px 0 rgba(255,255,255,0.1)"
                      :"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)",
                    fontFamily:"inherit",
                    transition:"all .1s",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(168,144,255,0.2),rgba(168,144,255,0.1))":"linear-gradient(180deg,#fff,rgba(230,220,255,0.9))";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))":"linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,234,255,0.85))";}}
                  >{h.word}</button>
                ))}
                {/* Chevron separator + current */}
                <span style={{color:dk?"rgba(168,144,255,0.4)":"rgba(112,80,216,0.3)",fontSize:12,fontWeight:700,flexShrink:0}}>›</span>
                <span style={{
                  flexShrink:0,fontSize:13,fontWeight:900,
                  color:dk?"rgba(255,255,255,0.9)":"#3A1A90",
                  background:dk?"rgba(168,144,255,0.18)":"rgba(112,80,216,0.1)",
                  borderRadius:10,padding:"4px 12px",
                  border:dk?"1px solid rgba(168,144,255,0.35)":"1px solid rgba(112,80,216,0.2)",
                }}>{word}</span>
              </div>
            )}

            {/* ── TOP ROW: level badge + close ── */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
              <span style={{
                fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:2,
                color:dk?"rgba(255,255,255,0.88)":"#7050D8",
                background:dk
                  ?"linear-gradient(135deg, rgba(168,144,255,0.25), rgba(140,112,255,0.15))"
                  :"linear-gradient(135deg, rgba(112,80,216,0.12), rgba(140,112,255,0.08))",
                border:dk?"1px solid rgba(168,144,255,0.3)":"1px solid rgba(112,80,216,0.18)",
                borderRadius:8,padding:"3px 10px",
                boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1)":"inset 0 1px 0 rgba(255,255,255,0.9)",
              }}>{entry.level}</span>
              <button onClick={onClose} style={{
                background:"none",border:"none",cursor:"pointer",fontSize:20,lineHeight:1,padding:"2px 4px",
                color:dk?"rgba(200,184,255,0.45)":"rgba(112,80,216,0.3)",
              }}>✕</button>
            </div>

            {/* ── HEADWORD ── */}
            <div style={{marginBottom:10}}>
              <div style={{
                fontSize:48,fontWeight:900,lineHeight:1.0,letterSpacing:-1,
                color:dk?"rgba(255,255,255,0.97)":"#2A0E80",
                textShadow:dk?"0 2px 20px rgba(168,144,255,0.3)":"0 2px 12px rgba(112,80,216,0.12)",
              }}>{word}</div>
              {particle&&<div style={{fontSize:12,color:dk?"rgba(94,234,200,0.8)":"#0D7D5C",fontWeight:700,marginTop:3}}>
                particle: {particle}
              </div>}
            </div>

            {/* ── BASE MEANING ── */}
            <div style={{fontSize:18,fontWeight:800,color:dk?"rgba(240,234,255,0.94)":"#1A0B50",marginBottom:3,lineHeight:1.3}}>{entry.base}</div>

            {/* ── MORPHEME — teal label, clickable Korean ── */}
            {entry.morph&&<div style={{
              fontSize:12,fontWeight:600,lineHeight:1.65,marginBottom:10,
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              color:dk?"rgba(94,234,200,0.75)":"#0D7D5C",
            }}>
              {bubbleHl(entry.morph,13)}
            </div>}

            {/* ── PARTICLE BADGE — teal on brand ── */}
            {entry.particle&&<div style={{
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              background:dk?"rgba(46,205,167,0.13)":"rgba(46,205,167,0.1)",
              border:dk?"1px solid rgba(80,224,192,0.3)":"1px solid rgba(46,205,167,0.28)",
              borderRadius:10,padding:"6px 14px",marginBottom:14,
              boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.05)":"inset 0 1px 0 rgba(255,255,255,0.8)",
            }}>
              <span style={{fontSize:11,fontWeight:700,color:dk?"rgba(94,234,200,0.65)":"#0D7D5C",opacity:0.8}}>Particle: </span>
              {bubbleHl(entry.particle,13)}
            </div>}

            {/* ── DIVIDER ── */}
            <div style={{height:1,background:dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.12)",marginBottom:14}}/>

            {/* ── USAGE EXAMPLES — each sentence its own compound-style bubble ── */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {(entry.uses||[]).map((u,i)=>(
                <div key={i} style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:18,padding:"12px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                    :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
                }}>
                  {/* Gloss arc per bubble */}
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                    borderRadius:"0 0 50% 50%",pointerEvents:"none",
                    background:dk
                      ?"linear-gradient(180deg,rgba(255,255,255,0.07)0%,rgba(255,255,255,0.01)60%,transparent 100%)"
                      :"linear-gradient(180deg,rgba(255,255,255,0.55)0%,rgba(255,255,255,0.1)60%,transparent 100%)"
                  }}/>
                  <div style={{position:"relative",display:"flex",flexWrap:"wrap",alignItems:"center",gap:3,marginBottom:4}}>
                    {bubbleHl(u.k,17)}
                  </div>
                  <div style={{fontSize:13,fontWeight:500,lineHeight:1.4,
                    color:dk?"rgba(200,190,255,0.65)":"var(--gray-500)"
                  }}>{u.e}</div>
                </div>
              ))}
            </div>

            {/* ── PEDAGOGICAL NOTE — purple-tinted, no gold ── */}
            {entry.note&&typeof entry.note==="string"&&<>
              <div style={{height:1,background:dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.1)",margin:"14px 0 10px"}}/>
              <div style={{
                fontSize:12.5,lineHeight:1.7,
                color:dk?"rgba(190,175,255,0.7)":"rgba(80,55,160,0.65)",
                background:dk?"rgba(168,144,255,0.07)":"rgba(112,80,216,0.04)",
                borderRadius:10,padding:"10px 14px",
                display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
                fontStyle:"italic",
              }}>{bubbleHl(entry.note,13)}</div>
            </>}

          </div>
        </div>
      </div>
    );
  };

  // ════════════════════════════════════════════════════════════
  // koreanHl — Korean-aware version of smartHl: makes every word clickable
  // ════════════════════════════════════════════════════════════
  const koreanHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    // Check if text has Korean
    if(!/[\uAC00-\uD7AF]/.test(text)) return smartHl(text);
    const tokens=tokenizeKorean(text);
    return tokens.map((tok,ti)=>{
      if(!tok.isKorean||tok.word===" ") return <span key={ti}>{tok.word}</span>;
      const entry=KOREAN_DICT[tok.key];
      const isKnown=!!entry;
      const useEntry2=entry||{
          base:"Entry coming soon",morph:tok.word+" — not yet catalogued",particle:null,
          uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
          note:"Every Korean word will be in LingoVerse soon.",level:"?"
        };
      const isJamo=tok.word.length===1&&/[\u3130-\u318F]/.test(tok.word);
      return(
        <span key={ti}
          onClick={(e)=>{
            e.stopPropagation();
            setWordBubble({key:tok.key,word:tok.word,stem:tok.stem,particle:tok.particle,entry:useEntry2});
          }}
          style={{
            fontSize:isJamo?13:18,fontWeight:isJamo?600:700,lineHeight:1.2,
            cursor:isKnown?"pointer":"default",
            color:"var(--purple-accent-text)",
            borderBottom:isKnown?(dk?"1.5px dashed rgba(200,190,255,0.5)":"1.5px dashed rgba(112,80,216,0.4)"):"none",
            paddingBottom:isKnown?1:0,transition:"all .1s",borderRadius:2,
          }}
          onMouseEnter={(e)=>{if(isKnown)e.currentTarget.style.background=dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.07)";}}
          onMouseLeave={(e)=>{e.currentTarget.style.background="transparent";}}
        >{tok.word}</span>
      );
    });
  };

  // ════════════════════════════════════════════════════════════
  // UNIVERSAL HIGHLIGHTER V2 — POS-based coloring from WORD_DB
  // No more context-free tokenizer guessing. Every word is looked up
  // in WORD_DB for its POS, then colored accordingly.
  // Grammar toggle ON: POS colors per color map + gender understripes
  // Grammar toggle OFF: all words clickable, no color highlighting
  // ════════════════════════════════════════════════════════════
  const universalHl = (text, tLang, opts = {}) => {
    if (!text || typeof text !== "string") return text;
    try {
    const effectiveLang = tLang || lang;

    // Korean: delegate to existing koreanHl (preserves all existing behavior)
    if (effectiveLang === "ko") return koreanHl(text);

    // No tokenizer config for this language: fall back to smartHl
    if (!LANG_TOKENIZER[effectiveLang]) return smartHl(text);

    // Check if text has any target-language characters
    const hasTargetScript = LANG_TOKENIZER[effectiveLang].scriptRange.test(text);
    if (!hasTargetScript) return smartHl(text);

    const dict = WORD_DB[effectiveLang] || {};
    const cfg = LANG_TOKENIZER[effectiveLang];

    // Simple tokenizer: split on whitespace, handle punctuation, look up in WORD_DB
    const parts = text.split(/(\s+)/);
    const spans = [];

    for (let i = 0; i < parts.length; i++) {
      const raw = parts[i];
      if (!raw) continue;

      // Whitespace
      if (/^\s+$/.test(raw)) { spans.push(<span key={i}>{raw}</span>); continue; }

      // Strip trailing punctuation for lookup
      const punctMatch = raw.match(/^(.+?)([.,!?;:'"»«\u00BB\u00AB\u201C\u201D\u2018\u2019\u00BF\u00A1)(\]]+)$/);
      const cleanWord = punctMatch ? punctMatch[1] : raw;
      const trailingPunct = punctMatch ? punctMatch[2] : "";

      // Check if it's a target-language word
      const isTarget = cfg.scriptRange.test(cleanWord);
      if (!isTarget) {
        // Non-target (English, punctuation)
        // When grammar toggle ON: English translations turn PURPLE
        if (grammarHl && cleanWord && !/^[\s.,!?;:'"()\-]+$/.test(cleanWord)) {
          spans.push(<span key={i} style={{color:dk?"#A890FF":"#7B5EE8",fontWeight:600}}>{raw}</span>);
        } else {
          spans.push(<span key={i}>{raw}</span>);
        }
        continue;
      }

      // Handle French-style prefix contractions (l', d', j', etc.)
      const contractions = cfg.contractions || {};
      const lower = cleanWord.toLowerCase();
      let contractionPart = null;
      let mainWord = cleanWord;
      for (const cForm of Object.keys(contractions)) {
        if (cForm.endsWith("'") && lower.startsWith(cForm) && cleanWord.length > cForm.length) {
          contractionPart = cleanWord.slice(0, cForm.length);
          mainWord = cleanWord.slice(cForm.length);
          break;
        }
      }

      // Render contraction prefix if present
      if (contractionPart) {
        const cEntry = dict[contractionPart.toLowerCase()];
        const cResolved = (cEntry && grammarHl && activePack) ? resolvePackColor(cEntry, activePack, dk) : null;
        if (cResolved) {
          spans.push(<span key={i+"c"} style={{color:cResolved.color,fontWeight:700,cursor:"pointer",transition:"all .1s"}}
            onClick={(e) => { e.stopPropagation(); setMiniWordPopup({ word:contractionPart, en:cEntry?.en||"", pos:cEntry?.pos, lang:effectiveLang }); }}
          >{contractionPart}</span>);
        } else {
          spans.push(<span key={i+"c"} style={{cursor:"pointer",transition:"all .1s"}}
            onClick={(e) => { e.stopPropagation(); setMiniWordPopup({ word:contractionPart, en:cEntry?.en||"", pos:cEntry?.pos, lang:effectiveLang }); }}
          >{contractionPart}</span>);
        }
      }

      // Look up main word in WORD_DB
      const wordKey = mainWord.toLowerCase();
      const entry = dict[wordKey] || null;
      // Only treat as "known target word" if it has a REAL POS (not "unknown" from example extraction)
      const isKnownTarget = entry && entry.pos !== "unknown";
      const wordIsNew = isKnownTarget && isNewWord(wordKey, effectiveLang, lessonId);

      // Unknown words (not in WORD_DB or pos="unknown") → plain text, no styling
      if (!isKnownTarget) {
        spans.push(<span key={contractionPart ? i+"w" : i}>{mainWord}</span>);
        if (trailingPunct) spans.push(<span key={i+"p"}>{trailingPunct}</span>);
        continue;
      }

      // Build style based on state
      let wordStyle = {};
      let clickHandler = null;

      // Click handler: opens popup/WordBubble
      if (entry.taught) {
        clickHandler = (e) => {
          e.stopPropagation();
          setWordBubble({
            key: wordKey, word: mainWord, stem: null, particle: null,
            entry: {
              base: entry.en,
              morph: entry.note || null,
              particle: entry.article ? entry.article + " " + entry.word : null,
              uses: entry.example ? [{ k: entry.example, e: entry.exampleEn || "" }] : [],
              note: (typeof entry.cognate === "string" ? entry.cognate : entry.note) || null,
              level: entry.level,
            }
          });
        };
      } else {
        clickHandler = (e) => {
          e.stopPropagation();
          setMiniWordPopup({
            word: mainWord,
            en: entry.en || null,
            pos: entry.pos || null,
            article: entry.article || null,
            level: entry.level || null,
            example: entry.example || null,
            exampleEn: entry.exampleEn || null,
            lang: effectiveLang,
            isNewWord: wordIsNew,
          });
        };
      }

      // ── GRAMMAR TOGGLE ON: use active pack's color map ──
      if (grammarHl && activePack) {
        let resolved = resolvePackColor(entry, activePack, dk);
        // Check if this POS category is disabled by user
        if (resolved && langDisabled.length > 0 && entry.pos) {
          const p = entry.pos;
          const catDisabled = langDisabled.some(k=>
            (k==="verb"&&p==="verb")||(k==="adjective"&&p==="adjective")||
            (k==="adverb"&&(p==="adverb"||p==="pronoun"||p.startsWith("pronoun_")||p==="demonstrative"))||
            (k==="noun"&&p==="noun")||
            (k==="structure"&&(p==="preposition"||p==="conjunction"||p.startsWith("article")||p==="interjection"||p==="number"||p==="counter"||p==="negation"||p==="question"||p.startsWith("particle_")))||
            (k==="m"&&(p.endsWith("_m")))||(k==="f"&&(p.endsWith("_f")))||
            (k==="n"&&(p.endsWith("_n")||p.endsWith("_het")))||(k==="c"&&(p.endsWith("_c")))||
            (k==="indef"&&(p.endsWith("_indef")))||(k==="pl"&&(p.endsWith("_pl")))||
            (k==="topic"&&p==="particle_topic")||(k==="subj"&&p==="particle_subj")||
            (k==="obj"&&p==="particle_obj")||(k==="loc"&&(p==="particle_loc"||p==="particle_dir"))||
            (k==="conn"&&(p==="particle_conn"||p==="particle_comp"||p==="particle_poss"||p==="particle_other"))
          );
          if (catDisabled) resolved = null;
        }
        if (resolved) {
          wordStyle = {
            color: resolved.color, fontWeight: 700, cursor: "pointer",
            display: "inline", transition: "all .15s",
          };
        } else {
          wordStyle = { cursor: "pointer", display: "inline", transition: "all .15s" };
        }
      }
      // ── GRAMMAR TOGGLE OFF or no pack: just clickable ──
      else {
        wordStyle = { cursor: "pointer", display: "inline", transition: "all .15s" };
      }

      spans.push(
        <span key={contractionPart ? i+"w" : i}
          onClick={clickHandler}
          style={wordStyle}
          onMouseEnter={(e) => { if(grammarHl) e.currentTarget.style.background = dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.07)"; }}
          onMouseLeave={(e) => { if(grammarHl) e.currentTarget.style.background = "transparent"; }}
        >{mainWord}</span>
      );

      // Trailing punctuation
      if (trailingPunct) {
        spans.push(<span key={i+"p"}>{trailingPunct}</span>);
      }
    }

    return <>{spans}</>;
    } catch(e) { console.error("universalHl error:",e); return text; }
  };

  // ── MiniWordPopup — compact popup for gold-highlighted untaught nouns ──
  const MiniWordPopup = miniWordPopup ? (
    <div style={{
      position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10000,
      display:"flex",alignItems:"center",justifyContent:"center",
      background:"rgba(0,0,0,0.4)",backdropFilter:"blur(4px)",
    }} onClick={()=>setMiniWordPopup(null)}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:dk
          ?"linear-gradient(180deg,rgba(38,28,72,0.98),rgba(30,22,58,0.98))"
          :"linear-gradient(180deg,rgba(255,255,255,0.99),rgba(250,245,255,0.99))",
        borderRadius:24,padding:"24px 28px",maxWidth:320,width:"90%",
        boxShadow:dk
          ?"0 24px 80px rgba(0,0,0,0.7),0 0 0 1px rgba(232,150,10,0.3),inset 0 1px 0 rgba(255,255,255,0.08)"
          :"0 24px 80px rgba(0,0,0,0.15),0 0 0 1px rgba(232,150,10,0.2),inset 0 2px 0 rgba(255,255,255,0.9)",
        position:"relative",
      }}>
        {/* Close button */}
        <button onClick={()=>setMiniWordPopup(null)} style={{
          position:"absolute",top:12,right:12,background:"none",border:"none",cursor:"pointer",
          fontSize:18,color:dk?"rgba(200,184,255,0.45)":"rgba(112,80,216,0.3)",
        }}>✕</button>

        {/* Type badge — POS from WORD_DB */}
        {(() => {
          const pos = miniWordPopup.pos || miniWordPopup.grammarType || (miniWordPopup.isUnknown ? "unknown" : null);
          if (!pos) return null;
          const posColors = POS_COLORS[pos] || POS_COLORS["unknown"];
          const badgeColor = (dk ? posColors?.dark : posColors?.light) || "#7B5EE8";
          const label = pos.replace(/_/g," ").replace(/^article [mfnc]$/, (m) => {
            const g = m.split(" ")[1];
            return g==="m"?"article (masc)":g==="f"?"article (fem)":g==="n"?"article (neut)":g==="c"?"article (common)":"article";
          });
          return <span style={{
            display:"inline-block",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:1.5,
            background:dk?badgeColor+"22":badgeColor+"18",
            color:badgeColor,borderRadius:8,padding:"2px 10px",marginBottom:8,
            border:"1px solid "+badgeColor+"44",
          }}>{label}</span>;
        })()}

        {/* Word */}
        <div style={{
          fontSize:36,fontWeight:900,lineHeight:1.1,
          color: (() => {
            const pos = miniWordPopup.pos || miniWordPopup.grammarType;
            if (pos) {
              const pc = POS_COLORS[pos];
              const c = pc ? (dk ? pc.dark : pc.light) : null;
              if (c) return c;
            }
            return dk ? "#A890FF" : "#7B5EE8";
          })(),
          marginBottom:4,
        }}>{miniWordPopup.word}</div>

        {/* Translation / description */}
        {miniWordPopup.en && <div style={{
          fontSize:18,fontWeight:700,color:dk?"rgba(240,234,255,0.94)":"#1A0B50",
          marginBottom:8,
        }}>{miniWordPopup.en}</div>}

        {/* "Not yet catalogued" for unknown words */}
        {miniWordPopup.isUnknown && !miniWordPopup.en && <div style={{
          fontSize:14,fontWeight:600,color:dk?"rgba(200,190,255,0.5)":"rgba(112,80,216,0.4)",
          marginBottom:8,fontStyle:"italic",
        }}>Translation coming soon</div>}

        {/* Level badge */}
        {miniWordPopup.level && <span style={{
          display:"inline-block",fontSize:10,fontWeight:700,letterSpacing:1.5,
          color:dk?"rgba(245,192,64,0.8)":"#D4880C",
          background:dk?"rgba(232,150,10,0.15)":"rgba(232,150,10,0.1)",
          border:dk?"1px solid rgba(232,150,10,0.25)":"1px solid rgba(232,150,10,0.2)",
          borderRadius:6,padding:"2px 8px",marginBottom:12,
        }}>{miniWordPopup.level}</span>}

        {/* Example if available */}
        {miniWordPopup.example && <div style={{
          marginTop:12,padding:"12px 14px",
          background:dk?"rgba(232,150,10,0.08)":"rgba(232,150,10,0.05)",
          border:dk?"1px solid rgba(232,150,10,0.2)":"1px solid rgba(232,150,10,0.12)",
          borderRadius:14,
        }}>
          <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.9)":"var(--gray-700)",lineHeight:1.5}}>{miniWordPopup.example}</div>
          {miniWordPopup.exampleEn && <div style={{fontSize:12,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",marginTop:4}}>{miniWordPopup.exampleEn}</div>}
        </div>}

        {/* Footer label */}
        <div style={{
          marginTop:14,textAlign:"center",fontSize:11,fontWeight:700,
          color:dk?"rgba(200,190,255,0.4)":"rgba(112,80,216,0.35)",
          letterSpacing:1,textTransform:"uppercase",
        }}>{miniWordPopup.isUnknown ? "Not yet in dictionary" : miniWordPopup.en ? "Tap for full entry" : "Dictionary entry"}</div>
      </div>
    </div>
  ) : null;

  // ── Score Circle — animated percentage ring for lesson done screen ──


  // ── Translation Reveal — collapsible per-line translation in story tips ──
  const TranslationReveal=({text,hl})=>{
    const [show,setShow]=useState(false);
    return <div style={{margin:"2px 0"}}>
      {show?<div className="anim" style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:13,color:"var(--teal-dark)",fontWeight:600,lineHeight:1.5}}>{hl(text)}</span>
        <button onClick={()=>setShow(false)} style={{background:"none",border:"none",cursor:"pointer",fontSize:10,color:"var(--gray-300)",flexShrink:0,padding:2}}>✕</button>
      </div>
      :<button onClick={()=>setShow(true)} style={{background:"rgba(123,94,232,0.04)",border:"1.5px dashed rgba(123,94,232,0.15)",borderRadius:8,padding:"6px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,width:"100%",transition:"all .15s"}}>
        <span style={{fontSize:12,color:"var(--purple-accent-text)",fontWeight:600}}>👁 Tap to reveal translation</span>
      </button>}
    </div>;
  };

  const smartHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    const parts=text.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g);
    return parts.map((seg,si)=>{
      if(/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(seg))
        return <span key={si} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2}}>{seg}</span>;
      const tokens=seg.split(/((?:'[a-zA-Z]{2,12}')|\b(?:RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b)/g);
      return tokens.map((tok,ti)=>{
        if(!tok) return null;
        if(/^'[a-zA-Z]{2,12}'$/.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(TEAL_WORDS.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(SOUND_VALS.test(tok)){
          SOUND_VALS.lastIndex=0;
          const sub=tok.split(/((?:ah|oh|oo|uh|ee|ng))/gi);
          return sub.map((s,ski)=>/^(ah|oh|oo|uh|ee|ng)$/i.test(s)?<span key={`${si}-${ti}-${ski}`} style={{color:"var(--teal-text)",fontWeight:700}}>{s}</span>:<span key={`${si}-${ti}-${ski}`}>{s}</span>);
        }
        return <span key={`${si}-${ti}`}>{tok}</span>;
      });
    });
  };

  // ── Split Korean sentence from English translation (on \n) ──
  // Returns { korean: "Korean line", english: "English line(s)" or null }
  const splitKoEn=(text)=>{
    if(!text||typeof text!=="string") return {korean:text,english:null};
    const lines=text.split("\n");
    const korean=lines[0];
    const rest=lines.slice(1).filter(l=>l.trim()).join("\n");
    return {korean,english:rest||null};
  };

  // Render English translation below Korean — toggleable
  // startVisible: true for drag_fill (need translation), false for fb/mc (try without)
  const renderEnglishBelow=(english,startVisible)=>{
    if(!english) return null;
    const visible=startVisible||showTrans;
    if(!visible) return <div style={{marginTop:6}}><button onClick={()=>setShowTrans(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"'Nunito','system-ui',sans-serif",padding:"2px 8px",borderRadius:6,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="var(--purple-accent-text)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";}}>👁 Show translation</button></div>;
    return <div style={{marginTop:6,cursor:startVisible?"default":"pointer"}} onClick={()=>{if(!startVisible)setShowTrans(false);}}><div style={{fontSize:14,color:"var(--gray-700)",fontWeight:500,lineHeight:1.45,fontFamily:"'Nunito','system-ui',sans-serif"}}>{english}</div></div>;
  };

  // ── Shared example renderer: operators gray, non-ASCII purple ──
  const renderLetterExample=(text)=>{
    const parts=text.split(/(\s*[+=→]\s*)/g);
    return parts.map((part,i)=>{
      const trimmed=part.trim();
      if(trimmed==="+"||trimmed==="="||trimmed==="→")
        return <span key={i} style={{fontSize:16,fontWeight:500,color:"var(--gray-400)",margin:"0 4px"}}>{trimmed}</span>;
      if(/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(trimmed))
        return <span key={i} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)"}}>{trimmed}</span>;
      if(trimmed)
        return <span key={i} style={{fontSize:14,fontWeight:600,color:"var(--gray-500)"}}>{trimmed}</span>;
      return null;
    });
  };

  // ── Shared syllable block diagram renderer ──
  const renderDiagram=(D)=>{
    if(!D) return null;
    const cBg="#FECACA",cTx="#991B1B",vBg="#BBF7D0",vTx="#166534",bBg="#BFDBFE",bTx="#1E40AF";
    const bCell=(label,bg,tx,extra)=>(<div style={{background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderBottom:"2px solid #1F2937",...(extra||{})}}><span style={{fontSize:20,fontWeight:900,color:tx}}>{label}</span></div>);
    const bEx=(hangul,rom)=>(<div style={{textAlign:"center",marginTop:10}}><span style={{fontSize:44,fontWeight:800,color:"var(--gray-800)"}}>{hangul}</span><div style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{rom}</div></div>);
    const bWrap=(children,w)=>(<div style={{border:"3px solid #1F2937",borderRadius:6,overflow:"hidden",width:w||160,margin:"0 auto"}}>{children}</div>);
    const blocks={
      cv_v:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (vertical vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}</div>)}{bEx("가","ga")}</div>),
      cv_h:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (horizontal vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr"}}>{bCell("C",cBg,cTx,{borderRight:"none"})}{bCell("V",vBg,vTx,{borderRight:"none",borderBottom:"none"})}</div>,120)}{bEx("고","go")}</div>),
      cvc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVC (with 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{gridColumn:"1 / -1",background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₂</span></div></div>)}{bEx("간","gan")}</div>),
      cvcc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVCC (double 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₃</span></div><div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₄</span></div></div>)}{bEx("값","gap")}</div>),
      cv_combo:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (combo vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}>{bCell("C",cBg,cTx)}<div style={{background:vBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",gridRow:"1 / 3",borderBottom:"none"}}><span style={{fontSize:20,fontWeight:900,color:vTx}}>V₂</span></div>{bCell("V₁",vBg,vTx)}</div>)}{bEx("귀","gwi")}</div>),
    };
    return(<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
      <div style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2,marginBottom:14,textAlign:"center"}}>Block Structure</div>
      {D==="all"?(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:18}}>{blocks.cv_v}{blocks.cv_h}{blocks.cv_combo}</div>):blocks[D]||null}
    </div>);
  };

  // ═══ INTRO — Board-style (v2 lessons with board:true) ═══
  if(st.type==="intro" && lesson.board) return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Board-style intro card — matches teach card visual language */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>

          {/* Top strip — emoji + lesson label */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"14px 22px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:32}}><BrandIcon name={lesson.icon} size={32}/></span>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>Lesson</span>
          </div>

          {/* Title — serif, like board teach cards */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h2 style={{fontSize:26,fontWeight:800,color:"var(--gray-800)",lineHeight:1.2,fontFamily:"'Quicksand','system-ui',sans-serif",margin:0}}>{st.title}</h2>
          </div>

          {/* Description — line-aware with candy bubbles */}
          <div style={{textAlign:"center",padding:"4px 22px 16px"}}>
            {(()=>{
              const dL=(st.desc||"").split(/\\n|\n/);
              const o=[];let i=0;
              while(i<dL.length){
                const ln=dL[i],nx=dL[i+1]||"";
                const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
                if(hk&&nx.trim().startsWith("→")&&ln.trim()){
                  const tr=nx.trim().slice(1).trim();
                  o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
                  i+=2;continue;
                }
                if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
                o.push(<p key={i} style={{fontSize:14,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6,margin:"4px 0"}}>{ln.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((p,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(p)?<span key={pi} style={{fontSize:18,fontWeight:800}}>{p}</span>:<span key={pi}>{p}</span>)}</p>);
                i++;
              }
              return o;
            })()}
          </div>

          {/* Goals — clean rows with green bullets */}
          {st.goals&&st.goals.length>0&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px"}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)",marginBottom:10}}>{t("le_in_this_lesson",baseLang)}</div>
            {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--gray-800)",fontWeight:600,padding:"5px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{})}}><span style={{color:"var(--purple-accent-text)",fontWeight:800,fontSize:12}}>▸</span><span>{g}</span></div>)}
          </div>}
        </div>

        {/* Begin button — glossy candy style */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",borderRadius:20,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
            <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>Begin</span>
          </button>
        </div>
      </div>
    </div>
  );

  // ═══ INTRO — Legacy style (non-board lessons) ═══
  if(st.type==="intro") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{textAlign:"center",padding:"20px 0"}}>
        <div style={{width:80,height:80,borderRadius:20,background:`linear-gradient(135deg,${unit.color},${unit.color}bb)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:`0 8px 24px ${unit.color}40`}}><BrandIcon name={lesson.icon} size={38}/></div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:8}}>{st.title}</h2>
        {(()=>{
          const dL=(st.desc||"").split(/\\n|\n/);
          const o=[];let i=0;
          while(i<dL.length){
            const ln=dL[i],nx=dL[i+1]||"";
            const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
            if(hk&&nx.trim().startsWith("→")&&ln.trim()){
              const tr=nx.trim().slice(1).trim();
              o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
              i+=2;continue;
            }
            if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
            o.push(<p key={i} style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.7,maxWidth:440,margin:"4px auto"}}>{smartHl(ln)}</p>);
            i++;
          }
          return <div style={{textAlign:"center",marginBottom:24}}>{o}</div>;
        })()}
        <div style={{background:"var(--blue-pale)",borderRadius:"var(--radius)",padding:"18px 24px",display:"inline-block",textAlign:"left",border:"2px solid var(--blue-light)"}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8}}>{t("le_in_this_lesson",baseLang)}</div>
          {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,padding:"4px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{})}}><span style={{color:"var(--teal-text)",fontWeight:800}}>✓</span>{g.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((part,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(part)?<span key={pi} style={{fontSize:20,fontWeight:800,color:"var(--purple-accent-text)"}}>{part}</span>:<span key={pi}>{part}</span>)}</div>)}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:28}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",borderRadius:20,boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>Let's go!</button>
        </div>
      </div>
    </div>
  );

  // ═══ VOCAB_REF — Database lookup (NEW) ═══
  if(st.type==="vocab_ref"){
    const v=getVocab(st.id);
    if(!v)return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto",padding:32,background:"#fee",borderRadius:16,textAlign:"center"}}><div style={{fontSize:48}}>⚠️</div><div style={{fontSize:20,fontWeight:"bold",color:"#dc2626",marginTop:12}}>Vocab Not Found</div><div style={{fontSize:14,color:"#64748b",marginTop:8}}>ID: <code>{st.id}</code></div><button onClick={next}className="btn-primary"style={{marginTop:20,width:"100%"}}>Continue</button></div></div>);
    const w=toTeach(v);
    const isNew=!user.lw.has(w.nl);
    return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto"}}>{isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}><div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}><span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>✨ New Word ✨</span></div><div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/><div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={16}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",padding:"18px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:12,fontWeight:800,borderRadius:10,padding:"3px 14px",textTransform:"uppercase",letterSpacing:1.5}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}><span className="hd"style={{fontSize:36,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:20}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:14,padding:"8px 24px",boxShadow:"0 3px 12px rgba(46,205,167,0.25)"}}><span style={{fontSize:18,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"16px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:14,padding:"12px 16px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>💬 In context</div><div style={{fontSize:15,color:"var(--gray-800)",fontWeight:600,marginBottom:3,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{universalHl(w.example, lang)}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div><div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div></div>}{!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",paddingTop:w.img?12:24}}><span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>Review</span></div><div style={{textAlign:"center",padding:"14px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:11,fontWeight:700,borderRadius:8,padding:"2px 10px",textTransform:"uppercase",letterSpacing:1}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 3px 12px ${c.shadow}`,marginBottom:8}}><span className="hd"style={{fontSize:30,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:12,padding:"3px 14px",fontSize:13,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:16}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:12,padding:"6px 20px",boxShadow:"0 2px 10px rgba(46,205,167,0.2)"}}><span style={{fontSize:16,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"14px 20px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:12,padding:"10px 14px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:10,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.2,marginBottom:5}}>💬 In context</div><div style={{fontSize:14,color:"var(--gray-800)",fontWeight:600,marginBottom:2,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{universalHl(w.example, lang)}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={13}showToast={showToast}/></div><div style={{fontSize:12,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div>}{w.note&&<div style={{background:dk?"var(--gold-bg)":"linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",borderRadius:16,padding:"14px 20px",marginBottom:20,boxShadow:"0 2px 12px rgba(245,166,35,0.15)"}}><div style={{fontSize:11,fontWeight:800,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Note</div><div style={{fontSize:14,color:"var(--gray-700)",lineHeight:1.6}}>{w.note}</div></div>}<button onClick={()=>{if(!user.lw.has(w.nl)){setUser(u=>({...u,lw:new Set([...u.lw,w.nl])}));}next();}}className="btn-primary"style={{width:"100%"}}>Continue</button></div></div>);
  }

  // ═══ POS tag → POS_COLORS key mapper (shared by story + teach renderers) ═══
  const posToColorKey = (pos) => ({pron:"pronoun",art:"article",aux:"auxiliary",conj:"conjunction",prep:"preposition",adv:"adverb",adj:"adjective",intj:"interjection",num:"number",part:"particle"}[pos] || pos);

  // ═══ STORY STEP (new format) — dialogue line from character ═══
  if(st.type==="story") {
    const ttsLocStory = LANG_META[lang]?.ttsLocale||"en-US";
    const isNarrator = st.speaker === "narrator";
    const speakerName = st.speaker || "Verumius";
    const moodEmoji = {confused:"😕",happy:"😄",excited:"🤩",sad:"😢",angry:"😠",thinking:"🤔",surprised:"😲",neutral:"😐",proud:"😎"}[st.mood] || "💬";
    // Compound bubble
    const storyBubble = {
      background: dk
        ? "linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
        : "linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
      border: dk ? "1.5px solid rgba(123,94,232,0.3)" : "1.5px solid rgba(180,165,240,0.4)",
      boxShadow: dk
        ? "0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
        : "0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
      borderRadius: isNarrator ? 14 : "14px 14px 14px 4px",
      position: "relative", overflow: "hidden", padding: "14px 18px",
    };
    const storyGloss = {
      position: "absolute", top: 0, left: "5%", right: "5%", height: "42%",
      borderRadius: "0 0 50% 50%", pointerEvents: "none", zIndex: 0,
      background: dk
        ? "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
        : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
    };
    // Tagged word renderer (same as teach, respects grammarHl toggle)
    const renderTaggedStory = (tagged) => {
      if (!tagged || !Array.isArray(tagged)) return null;
      const defaultColor = dk ? "rgba(220,210,255,0.85)" : "#3A1F8A";
      return tagged.map((t, ti) => {
        let color = null;
        if (grammarHl) {
          if ((t.pos === "art" || t.pos === "noun") && t.sub) { const gSub = t.sub.find(s => ["m","f","n","c","pl"].includes(s)); if (gSub) { const gc = GENDER_COLORS[gSub]; color = gc ? (dk ? gc.dark : gc.light) : null; } }
          if (!color && t.pos) { const pc = POS_COLORS[posToColorKey(t.pos)]; if (pc) color = dk ? pc.dark : pc.light; }
        }
        return <span key={ti} style={{ color: color || defaultColor, fontWeight: 700, marginRight: ti < tagged.length - 1 ? 4 : 0 }}>{t.w}</span>;
      });
    };
    return (
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{maxWidth:460,margin:"0 auto"}}>
          {/* Speaker label */}
          {!isNarrator && <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <span style={{fontSize:20}}>{moodEmoji}</span>
            <span style={{fontSize:13,fontWeight:800,color:dk?"rgba(200,184,255,0.9)":"#7050D8",textTransform:"uppercase",letterSpacing:1.5}}>{speakerName}</span>
          </div>}
          {/* Story bubble */}
          <div style={storyBubble}>
            <div style={storyGloss}/>
            <div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:16,fontWeight:700,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {st.tagged ? renderTaggedStory(st.tagged) : universalHl(st.trg || "", lang)}
                <SpeakerButton text={st.trg || ""} lang={ttsLocStory} size={13} showToast={showToast}/>
              </div>
              {st.src && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:6}}>{st.src}</div>}
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:16}}>
            {si>0&&<NavArrow onClick={goBack} isBack/>}
            <NavArrow onClick={goNext}/>
          </div>
        </div>
      </div>
    );
  }

  // ═══ NEW FORMAT TEACH CARD (trg/src) — dual renderer ═══
  // Detects new format by presence of step.trg field
  if(st.type==="teach" && st.trg !== undefined) {
    const isNewTrg = !user.lw.has(st.trg);
    const ttsLocNew = LANG_META[lang]?.ttsLocale||"en-US";
    const artNew = getArticle(st.trg, lang);
    const cNew = ARTICLE_COLORS[artNew];
    const labelNew = st.kind==="grammar"?"Grammar Pattern":st.kind==="phrase"?"Key Phrase":"New Word";
    // Compound bubble styles from design spine
    const compBubble = {
      background: dk
        ? "linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
        : "linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
      border: dk ? "1.5px solid rgba(123,94,232,0.3)" : "1.5px solid rgba(180,165,240,0.4)",
      boxShadow: dk
        ? "0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
        : "0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
      borderRadius: 22, position: "relative", overflow: "hidden",
    };
    const glossArc = {
      position: "absolute", top: 0, left: "5%", right: "5%", height: "42%",
      borderRadius: "0 0 50% 50%", pointerEvents: "none", zIndex: 0,
      background: dk
        ? "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
        : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
    };
    // Tagged word renderer — colors each word by POS (respects grammarHl toggle)
    const renderTagged = (tagged) => {
      if (!tagged || !Array.isArray(tagged)) return null;
      const defaultColor = dk ? "rgba(220,210,255,0.85)" : "#3A1F8A";
      return tagged.map((t, ti) => {
        let color = null;
        if (grammarHl) {
          // Articles + nouns use gender color when gender sub-tag present
          if ((t.pos === "art" || t.pos === "noun") && t.sub) {
            const gSub = t.sub.find(s => ["m","f","n","c","pl"].includes(s));
            if (gSub) { const gc = GENDER_COLORS[gSub]; color = gc ? (dk ? gc.dark : gc.light) : null; }
          }
          // All other POS from POS_COLORS
          if (!color && t.pos) {
            const pc = POS_COLORS[posToColorKey(t.pos)];
            if (pc) color = dk ? pc.dark : pc.light;
          }
        }
        return <span key={ti} style={{
          color: color || defaultColor,
          fontWeight: 700,
          marginRight: ti < tagged.length - 1 ? 4 : 0,
        }}>{t.w}</span>;
      });
    };
    return (
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{maxWidth:460,margin:"0 auto"}}>
          {/* ═══ NEW-FORMAT TEACH CARD — Same v1 board style, uses trg/src ═══ */}
          {(()=>{
            const accentColorNew = isNewTrg ? "#7B5EE8" : "var(--gray-300)";
            const artWordNew = artNew!=="none" ? st.trg.split(/\s(.+)/) : null;
            return <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:`4px solid ${accentColorNew}`,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>
              {/* Top strip */}
              <div style={{background:isNewTrg?"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))":"rgba(0,0,0,0.01)",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:isNewTrg?"#7B5EE8":"var(--gray-400)"}}>{isNewTrg?labelNew:"Review"}</span>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <SpeakerButton text={st.trg} lang={ttsLocNew} size={15} showToast={showToast}/>
                  {st.phonetic&&<button onClick={()=>setShowPhonetic(!showPhonetic)} style={{background:"none",border:"none",cursor:"pointer",padding:"2px 0",display:"flex",alignItems:"center",transition:"all .15s"}}><span style={{fontSize:12,fontWeight:700,color:showPhonetic?"#7B5EE8":"var(--gray-300)",letterSpacing:0.5,transition:"color .15s"}}>Abc</span></button>}
                </div>
              </div>
              {/* Word display — article color-coded (no separate article chip), same as v1 */}
              <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
                <div style={{marginBottom:6}}>
                  {artWordNew&&artWordNew[1] ? (
                    <span className="hd" style={{fontSize:36,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                      <span style={{color:grammarHl?cNew.pillText:"var(--gray-800)"}}>{cap(artWordNew[0])}</span>{" "}
                      <span style={{color:grammarHl?cNew.pillText:"var(--gray-800)"}}>{artWordNew[1]}</span>
                    </span>
                  ) : (
                    <span className="hd" style={{fontSize:36,fontWeight:800,color:"var(--gray-800)",lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{cap(st.trg)}</span>
                  )}
                </div>
              </div>
              {/* Translation */}
              <div style={{textAlign:"center",paddingBottom:st.phonetic&&showPhonetic?6:14}}>
                <span style={{fontSize:18,color:"var(--gray-800)",fontWeight:700}}>{cap(st.src)}</span>
              </div>
              {/* Phonetic */}
              {showPhonetic&&st.phonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12,paddingRight:8}}>
                <span style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginLeft:40}}>{st.phonetic}</span>
              </div>}
            </div>;
          })()}

          {/* Example with tagged words — compound bubble */}
          {st.example && <div style={{...compBubble, padding:"14px 18px", marginBottom:16}}>
            <div style={glossArc}/>
            <div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:15,fontWeight:700,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {st.tagged ? renderTagged(st.tagged) : universalHl(st.example, lang)}
                <SpeakerButton text={st.example} lang={ttsLocNew} size={13} showToast={showToast}/>
              </div>
              {(st.exampleSrc || st.exampleEn) && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{st.exampleSrc || st.exampleEn}</div>}
            </div>
          </div>}

          {/* Fun Info — COMPOUND chip style (same as Korean morpheme bubbles) */}
          {st.funInfo && (()=>{
            // Parse compound parts: "Flug (flight) + Zeug (stuff/thing)" => [{morph:"Flug",gloss:"flight"},{morph:"Zeug",gloss:"stuff/thing"}]
            // Strip any prefix like "A compound noun:", "Another compound:", "Compound:" etc.
            const compMatch = st.funInfo.match(/^(?:.*?compound[^:]*:\s*)?([A-Za-zÀ-ÿ]+\s*\([^)]+\)(?:\s*\+\s*[A-Za-zÀ-ÿ]+\s*\([^)]+\))+)/);
            const parts = compMatch ? compMatch[1].split(/\s*\+\s*/).map(p => {
              const m = p.trim().match(/^([^\s(]+)\s*\(([^)]+)\)/);
              return m ? {morph:m[1],gloss:m[2]} : {morph:p.trim(),gloss:""};
            }) : null;
            // Rest of the text after the compound decomposition
            const restText = parts ? st.funInfo.replace(compMatch[0],"").replace(/^\.\s*/,"").trim() : st.funInfo;
            return <div style={{...compBubble, padding:"18px 20px 16px", marginBottom:16}}>
              <div style={glossArc}/>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                  <AppIcon name="lightbulb" size={16}/>{parts?"Compound":"Fun Fact"}
                </div>
                {/* Morpheme chips — same style as Korean COMPOUND */}
                {parts && <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0",marginBottom:restText?10:0}}>
                  {parts.map((p,pi)=><React.Fragment key={pi}>
                    {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                    <span style={{display:"inline-flex",flexDirection:"column",alignItems:"center",
                      background:dk
                        ?"linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
                        :"linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
                      borderRadius:14,padding:"8px 16px",
                      border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",
                      boxShadow:dk
                        ?"0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                        :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9)"}}>
                      <span style={{display:"flex",alignItems:"baseline",gap:4}}>
                        <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)"}}>{p.morph}</span>
                        {p.gloss&&<span style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",marginLeft:2}}>({p.gloss})</span>}
                      </span>
                    </span>
                  </React.Fragment>)}
                </div>}
                {/* Extra context text below the chips */}
                {restText && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{restText}</div>}
                {/* Non-compound funInfo: plain text */}
                {!parts && <div style={{fontSize:14,lineHeight:1.7,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{st.funInfo}</div>}
              </div>
            </div>;
          })()}

          {/* Note section (same style as legacy) */}
          {st.note && <div style={{
            background:dk?"linear-gradient(155deg,rgba(58,36,130,0.35),rgba(44,26,105,0.25))":"linear-gradient(155deg,rgba(240,234,255,0.9),rgba(228,216,255,0.8))",
            border:dk?"1.5px solid rgba(168,144,255,0.25)":"1.5px solid rgba(168,144,255,0.35)",
            borderRadius:22,padding:"18px 20px",marginBottom:16,position:"relative",overflow:"hidden",
            boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.06)":"inset 0 2px 0 rgba(255,255,255,0.9),0 4px 16px rgba(112,80,216,0.08)"
          }}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"40%",borderRadius:"0 0 50% 50%",
              background:dk?"linear-gradient(180deg,rgba(255,255,255,0.06)0%,transparent 100%)":"linear-gradient(180deg,rgba(255,255,255,0.6)0%,transparent 100%)",
              pointerEvents:"none"}}/>
            <div style={{position:"relative"}}>
              <div style={{fontSize:11,fontWeight:800,color:dk?"rgba(200,184,255,0.8)":"#7050D8",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
                <AppIcon name="lightbulb" size={15}/>{t("le_good_to_know",baseLang)}
              </div>
              <div style={{fontSize:15,lineHeight:1.75,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{(st.note||"").split(/\\n|\n/).map((line,li)=>{
                if(!line.trim()) return <div key={li} style={{height:5}}/>;
                return <div key={li}>{universalHl(line, lang)}</div>;
              })}</div>
            </div>
          </div>}

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
            {si>0&&<NavArrow onClick={goBack} isBack/>}
            <NavArrow onClick={()=>{learnWord(st.trg);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}}/>
          </div>
        </div>
      </div>
    );
  }

  // ═══ TEACH — Multi-kind card (word / letter / info / idiom) ═══
  const isNew = st.type==="teach" && !user.lw.has(st.nl);
  const teachKind = st.kind || "word"; // "word" | "letter" | "info" | "idiom" | "grammar" | "phrase"
  const ttsLoc = LANG_META[lang]?.ttsLocale||"en-US";
  const teachLabel = teachKind==="letter"?"New Letter":teachKind==="info"?"Concept":teachKind==="idiom"?"New Expression":teachKind==="grammar"?"Grammar Pattern":teachKind==="phrase"?"Key Phrase":"New Word";

  // ── INFO card — board-style structural/concept card ──
  if(st.type==="teach" && teachKind==="info") {
    return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Main card — board style */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>
          {/* Top strip */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>{teachLabel}</span>
            {st.nl&&/[^\u0000-\u007F]/.test(st.nl)&&<SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />}
          </div>
          {/* nl — big centered */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h3 style={{fontSize:42,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.2}}>
              {st.nl}
            </h3>
          </div>
          {/* Translation */}
          <div style={{textAlign:"center",paddingBottom:14}}>
            <span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Example row — split on \n for multi-line, renderLetterExample per line */}
          {st.example&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px",background:"var(--example-bg)"}}>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {st.example.split(/\\n|\n/).map((line,li)=><div key={li} style={{lineHeight:1.8,textAlign:"center"}}>{renderLetterExample(line)}</div>)}
            </div>
            {st.exampleEn&&<div style={{fontSize:13,color:"var(--gray-400)",marginTop:6,fontStyle:"italic",textAlign:"center"}}>{smartHl(st.exampleEn)}</div>}
            {st.phonetic&&<div style={{marginTop:6,textAlign:"center"}}><span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span></div>}
          </div>}
          {/* Phonetic fallback when no example */}
          {st.phonetic&&!st.example&&<div style={{textAlign:"center",paddingBottom:10}}>
            <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span>
          </div>}
        </div>

        {/* ── SYLLABLE BLOCK DIAGRAM ── */}
        {renderDiagram(st.diagram)}

        {/* Rules grid — teacher's board layout */}
        {st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
          {st.trigger&&<div style={{textAlign:"center",marginBottom:14}}>
            <span style={{display:"inline-block",background:"rgba(123,94,232,0.08)",borderRadius:10,padding:"4px 14px",fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",letterSpacing:0.5}}>{st.trigger}</span>
          </div>}
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {st.rules.map((r,ri)=>(<div key={ri} style={{padding:"6px 0",borderBottom:ri<st.rules.length-1?"1px solid var(--gray-100)":"none"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
                  {r.from.split(/\s*\+\s/).length>1?
                    r.from.split(/\s*\+\s*/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:28,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:14,fontWeight:700,color:"var(--gray-300)"}}>+</span>}
                    </span>))
                    :r.from.split(/\s+/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:11,color:"var(--gray-300)"}}>/</span>}
                    </span>))
                  }
                </div>
                <span style={{fontSize:20,color:"var(--gray-300)",fontWeight:800}}>→</span>
                <span style={{fontSize:28,fontWeight:800,color:"var(--teal)",lineHeight:1}}>{r.to}</span>
                {r.label&&<span style={{fontSize:13,fontWeight:600,color:"var(--teal-dark)"}}>{r.label}</span>}
              </div>
              {r.ex&&<div style={{textAlign:"center",marginTop:2}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{r.ex}</span>
              </div>}
            </div>))}
          </div>
          {st.note&&<div style={{textAlign:"center",marginTop:14,paddingTop:12,borderTop:"1.5px solid var(--gray-100)"}}>
            <span style={{fontSize:13,color:"var(--gray-500)",fontWeight:600,fontStyle:"italic"}}>{smartHl(st.note)}</span>
          </div>}
        </div>}

        {/* Plain note — structured with hl + bullets + Korean/→ pair cards */}
        {st.note&&!st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:14}}>
          {(()=>{
            const noteLines=st.note.split(/\\n|\n/);
            const out=[];let ni=0;
            while(ni<noteLines.length){
              const line=noteLines[ni];
              const nextLine=noteLines[ni+1]||"";
              const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
              const nextIsArrow=nextLine.trim().startsWith("→");
              if(hasKorean&&nextIsArrow&&line.trim()){
                const translation=nextLine.trim().slice(1).trim();
                out.push(
                  <div key={ni} style={{
                    background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                    borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                    boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{smartHl(line.trim())}</div>
                      <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{smartHl(translation)}</div>
                    </div>
                  </div>
                );
                ni+=2;continue;
              }
              if(!line.trim()){out.push(<div key={ni} style={{height:20}}/>);ni++;continue;}
              if(line.startsWith("•")){out.push(<div key={ni} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 4px",display:"flex",gap:6,lineHeight:1.6}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(line.slice(1).trim())}</span></div>);ni++;continue;}
              const isHeader=line.trim().endsWith(":");
              out.push(<div key={ni} style={{fontSize:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0}}>{smartHl(line)}</div>);
              ni++;
            }
            return out;
          })()}
        </div>}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);goNext();}}/>
        </div>
      </div>
    </div>
  );}

  // ── LETTER / WORD / IDIOM cards ──
  // Helper: render letter examples with Hangul purple, operators gray
  const showInContext = teachKind==="word"||teachKind==="idiom"||teachKind==="grammar"||teachKind==="phrase"; // letters and info don't get "In Context"
  const isDialogueEx = /[AB]:\s/.test(st.example||""); // dialogue examples render as standalone iOS bubbles
  const showEmoji = teachKind==="word"||teachKind==="idiom"; // letters don't show emoji icon
  const isScript = /[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(st.nl); // Korean/Arabic/CJK = script mode (NOT Latin diacritics like ë, ü, é)
  const letterSize = teachKind==="letter" ? 52 : 36; // letters get extra big display
  const boardMode = !!lesson.board; // Teacher's board style — clean, minimal, practical

  // ═══ BOARD-STYLE TEACH CARD (v2 lessons) ═══
  // Neuroscience: elaborative encoding (cognates), Von Restorff (also-means stands out),
  // dual coding (color-coded word type), curiosity gap (polysemy reveal)
  if(st.type==="teach" && boardMode) {
    // Ensure nl/en aliases exist (field rename: trg/src is the new canonical format)
    if(st.trg!==undefined&&st.nl===undefined){st.nl=st.trg;st.en=st.src;st.exampleEn=st.exampleSrc;}
    const _word=st.trg||st.nl||"";const _trans=st.src||st.en||"";
    const art=getArticle(_word,lang);const c=ARTICLE_COLORS[art]||ARTICLE_COLORS.none;
    const accentColor=isNew?"#7B5EE8":"var(--gray-300)";
    const noteHl=(text)=>universalHl(text, lang);
    const exHl=(t)=>universalHl(t, lang);
    // Letter size: single Hangul jamo/syllable gets extra large
    const nlSize = teachKind==="letter" ? 64 : isScript ? 48 : 36;
    // Force purple for non-ASCII letters, otherwise noun stays dark, article gets color
    const nlColor = isScript ? "#7B5EE8" : "var(--gray-800)";
    // Split word into article + noun for color-coded display
    const artWord = art!=="none" && !isScript ? _word.split(/\s(.+)/) : null;
    return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>

        {/* Main card with subtle left accent */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:`4px solid ${accentColor}`,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>

          {/* Top strip — thin gradient accent + label */}
          <div style={{background:isNew?"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))":"rgba(0,0,0,0.01)",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:4}}>
              <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:isNew?"#7B5EE8":"var(--gray-400)"}}>
                {isNew?teachLabel:"Review"}
              </span>
              {st.fRef&&<span style={{display:"inline-flex",alignItems:"center",gap:4,background:"var(--purple-bg)",border:"1px solid var(--purple-border)",borderRadius:8,padding:"3px 10px",fontSize:10,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer"}}>📖 {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />
              {st.phonetic&&<button onClick={()=>setShowPhonetic(!showPhonetic)} style={{background:"none",border:"none",cursor:"pointer",padding:"2px 0",display:"flex",alignItems:"center",transition:"all .15s"}}><span style={{fontSize:12,fontWeight:700,color:showPhonetic?"#7B5EE8":"var(--gray-300)",fontFamily:"'Georgia','Times New Roman',serif",letterSpacing:0.5,transition:"color .15s"}}>{isScript?"로마":"Abc"}</span></button>}
            </div>
          </div>

          {/* The word/letter — big, centered, article ALWAYS color-coded on teach cards */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <div style={{marginBottom:6}}>
              {artWord&&artWord[1] ? (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                  <span style={{color:c.pillText}}>{cap(artWord[0])}</span>{" "}
                  <span style={{color:c.pillText}}>{artWord[1]}</span>
                </span>
              ) : (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,color:nlColor,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{_word}</span>
              )}
            </div>
          </div>

          {/* Translation — teal */}
          <div style={{textAlign:"center",paddingBottom:st.phonetic&&showPhonetic?6:14}}>
            <span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{cap(_trans)}</span>
          </div>

          {/* Phonetic — P38: right-shifted whisper below translation */}
          {st.phonetic&&!isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12,paddingRight:8}}>
            <span style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginLeft:40}}>{st.phonetic}</span>
          </div>}
          {/* Phonetic — non-Latin scripts: behind toggle too */}
          {st.phonetic&&isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12}}>
            <span style={{fontSize:13,fontWeight:500,color:"var(--gray-400)"}}>{smartHl(st.phonetic)}</span>
          </div>}

          {/* Also means — polysemy badge */}
          {st.also&&<div style={{textAlign:"center",paddingBottom:12}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(123,94,232,0.06)",border:"1.5px solid rgba(123,94,232,0.15)",borderRadius:10,padding:"5px 14px"}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)"}}>⚡ Also:</span>
              <span style={{fontSize:13,fontWeight:600,color:"var(--gray-700)"}}>{st.also}</span>
            </div>
          </div>}

          {/* Examples now render as standalone compound bubbles below the card */}
          {/* Phonetic fallback removed — P38 places it below translation */}

          {/* Cognate — collapsible word family popup */}
          {st.cognate&&<div style={{borderTop:"1px solid var(--gray-100)"}}>
            <button onClick={()=>setShowCognate(!showCognate)} style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"8px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .15s"}}>
              <span style={{fontSize:12,fontWeight:600,color:showCognate?"#7B5EE8":"var(--gray-350)",transition:"color .15s",letterSpacing:0.3}}>Word family</span>
              <span style={{fontSize:10,color:showCognate?"#7B5EE8":"var(--gray-300)",transition:"all .2s",transform:showCognate?"rotate(180deg)":"rotate(0)"}}>⌄</span>
            </button>
            {showCognate&&<div className="anim" style={{padding:"0 22px 14px"}}>
              <div style={{background:"rgba(123,94,232,0.04)",borderRadius:12,padding:"14px 16px"}}>
                {typeof st.cognate==="object"&&st.cognate.words?<>
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:st.cognate.family?12:0}}>
                    {st.cognate.words.map((w,wi)=><div key={wi} style={{display:"flex",alignItems:"baseline",gap:10}}>
                      <span style={{fontSize:11,fontWeight:600,color:"var(--gray-400)",minWidth:56,textAlign:"right"}}>{w.lang}</span>
                      <span style={{fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{w.word}</span>
                    </div>)}
                  </div>
                  {st.cognate.family&&LANG_FAMILIES[st.cognate.family]&&<div style={{borderTop:"1px solid rgba(123,94,232,0.1)",paddingTop:10}}>
                    <div style={{fontSize:12,fontWeight:700,color:"var(--gray-700)",marginBottom:4}}>{LANG_FAMILIES[st.cognate.family].headline}</div>
                    <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.55}}>{LANG_FAMILIES[st.cognate.family].detail}</div>
                  </div>}
                </>:<>
                  <div style={{fontSize:13,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6}}>{st.cognate}</div>
                </>}
              </div>
            </div>}
          </div>}
        </div>

        {/* Standalone compound-style example bubble — ALL examples render here */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bubbleStyle={
            background:dk
              ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
              :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
            borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",
            border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
            boxShadow:dk
              ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
              :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const glossArc={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
              {turns.map((turn,ti)=>{
                const isA=turn.trim().startsWith("A:");
                const content=turn.replace(/^[AB]:\s*/,"").trim();
                const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bubbleStyle,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}>
                    <div style={glossArc}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                        {universalHl(content, lang)}
                        <SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
                      </div>
                      {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                    </div>
                  </div>
                </div>;
              })}
            </div>;
          }
          return <div style={{...bubbleStyle,marginBottom:14}}>
            <div style={glossArc}/>
            <div style={{position:"relative",zIndex:2}}>
              <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {universalHl(ex, lang)}
                <SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
              </div>
              {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}
            </div>
          </div>;
        })()}

        {/* Note — compound bubble + note card as separate elements */}
        {st.note&&(()=>{
          const lines=st.note.split(/\\n|\n/);
          const compoundLines=[];
          const noteLines=[];
          let inCompound=false;
          lines.forEach(line=>{
            if(line.trim().startsWith("COMPOUND:")||line.trim().startsWith("SINO-KOREAN COMPOUND:")||line.trim().startsWith("SINO-KOREAN:")){inCompound=true;compoundLines.push(line);}
            else if(inCompound&&(line.trim().startsWith("Literally:")||line.trim().startsWith("'")||line.trim().startsWith("'"))){compoundLines.push(line);inCompound=false;}
            else if(inCompound&&line.trim().match(/\+/)&&line.trim().match(/\(/)){compoundLines.push(line);}
            else{inCompound=false;noteLines.push(line);}
          });
          return(<div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:14}}>
            {/* COMPOUND — glossy candy bubble, tinted to unit color */}
            {compoundLines.length>0&&(()=>{
              return <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                borderRadius:22,padding:"18px 20px 16px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                boxShadow:dk
                  ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                  :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
                {/* Gloss arc — candy shine */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    <span style={{display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={16}/>Compound</span>
                    {st.hanja&&<button onClick={()=>setShowHanja(!showHanja)} style={{background:showHanja?(dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.1)"):"none",border:showHanja?`1px solid ${dk?"rgba(123,94,232,0.4)":"rgba(123,94,232,0.2)"}`:"1px solid transparent",borderRadius:8,padding:"3px 8px",cursor:"pointer",fontSize:11,fontWeight:700,color:showHanja?"var(--purple-accent-text)":(dk?"rgba(200,190,255,0.4)":"var(--gray-400)"),transition:"all .15s",fontFamily:"'Nunito','system-ui',sans-serif",letterSpacing:0}}>漢字</button>}
                  </div>
                  {(()=>{
                    const hanjaArr=st.hanja?st.hanja.split("+"):[];
                    let hanjaIdx=0;
                    return compoundLines.map((line,li)=>{
                    const cleaned=line.replace(/^(COMPOUND|SINO-KOREAN COMPOUND|SINO-KOREAN):\s*/,"").trim();
                    if(!cleaned) return null;
                    if(cleaned.startsWith("Literally:")||cleaned.startsWith("'")||cleaned.startsWith("'")){
                      return <div key={li} style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontStyle:"italic",marginTop:6,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{cleaned}</div>;
                    }
                    const parts=cleaned.split(/\s*\+\s*/);
                    return <div key={li} style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0"}}>
                      {parts.map((part,pi)=>{
                        const m=part.match(/^([^\s(]+)\s*\(([^)]+)\)/);
                        const hj=hanjaArr[hanjaIdx]||"";
                        hanjaIdx++;
                        return <React.Fragment key={pi}>
                          {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                          <span style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:showHanja&&hj?2:0,
                            background:dk
                              ?"linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
                              :"linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
                            borderRadius:14,padding:showHanja&&hj?"6px 16px 8px":"8px 16px",
                            border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",
                            boxShadow:dk
                              ?"0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                              :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9)"}}>
                            <span style={{display:"flex",alignItems:"baseline",gap:4}}>
                              <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)"}}>{m?m[1]:part}</span>
                              {m&&<span style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",marginLeft:2}}>({m[2]})</span>}
                            </span>
                            {showHanja&&hj&&<span className="anim" style={{fontSize:15,color:dk?"rgba(200,190,255,0.75)":"rgba(80,60,160,0.6)",fontWeight:700,letterSpacing:2}}>{hj}</span>}
                          </span>
                        </React.Fragment>;
                      })}
                    </div>;
                  });})()}
                </div>
              </div>;
            })()}
            {/* Note lines — standard purple-bar card */}
            {noteLines.filter(l=>l.trim()).length>0&&(()=>{
              const hasWarning=noteLines.some(l=>l.trim().startsWith("⚠️")||l.trim().startsWith("NOT ")||l.trim().startsWith("FALSE"));
              const isWarningBlock=noteLines[0]&&(noteLines[0].trim().startsWith("⚠️")||noteLines[0].trim().startsWith("FALSE"));
              if(isWarningBlock){
                // Glossy lavender candy bubble for false friends / warnings
                return <div style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:20,padding:"18px 22px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                    :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                  <div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                      <AppIcon name="lightbulb" size={16}/>{noteLines[0].trim().includes("FALSE FRIEND")?"False Friend":"Heads Up"}
                    </div>
                    {noteLines.map((line,li)=>{
                      if(!line.trim()) return <div key={li} style={{height:12}}/>;
                      const clean=line.replace(/^⚠️\s*(FALSE FRIEND:|NOT REAL ENGLISH:|HEADS UP:)?\s*/,"").trim();
                      if(!clean) return null;
                      // Korean-only lines: large, centered, standalone block
                      const isKoreanOnly=/^[\uAC00-\uD7AF\u3130-\u318F\s]+$/.test(clean);
                      if(isKoreanOnly) return <div key={li} style={{textAlign:"center",padding:"10px 0 2px"}}><span style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{clean}</span></div>;
                      // Translation line right after Korean (starts with quote or lowercase)
                      if(li>0 && clean.startsWith("'") && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-400)",fontStyle:"italic",fontFamily:"'Nunito','system-ui',sans-serif",padding:"0 0 4px"}}>{clean}</div>;
                      if(li>0 && /^(Use these|To work)/.test(clean) && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500,padding:"0 0 4px"}}>{clean}</div>;
                      // NOT / warning lines: teal accent
                      if(/^NOT\b/.test(clean)) return <div key={li} style={{fontSize:14,color:"var(--teal-text)",fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",padding:"4px 0"}}>{clean}</div>;
                      // "Actual meaning:" lines
                      if(clean.startsWith("Actual meaning:")) return <div key={li} style={{fontSize:15,color:"var(--gray-700)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.6}}>{noteHl(clean)}</div>;
                      // Mixed Korean+English lines: auto-separate
                      if(/[\uAC00-\uD7AF]/.test(clean)&&/[a-zA-Z]{3,}/.test(clean)){
                        if(clean.includes(" | ")){
                          const pairs=clean.split(" | ");
                          return <div key={li} style={{display:"flex",flexDirection:"column",gap:4,margin:"4px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline",padding:"2px 0"}}>{noteHl(p)}</div>)}</div>;
                        }
                        if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(clean.trim())&&!/\(.*[\uAC00-\uD7AF]/.test(clean)){
                          const koMatch=clean.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                          if(koMatch){
                            return <div key={li} style={{margin:"6px 0"}}>
                              <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div>
                              <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                            </div>;
                          }
                        }
                        return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      }
                      if(/[\uAC00-\uD7AF]/.test(clean)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      // Regular English lines
                      return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                    })}
                  </div>
                </div>;
              }
              // Standard purple-bar note card
              return <div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px"}}>
              {noteLines.map((line,li)=>{
                if(!line.trim()) return <div key={li} style={{height:6}}/>;
                if(line.startsWith("⚠️")) return <div key={li} style={{background:dk?"rgba(245,166,35,0.1)":"rgba(245,166,35,0.06)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(2).trim())}</span></div>;
                if(line.startsWith("⚡")) return <div key={li} style={{background:dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(1).trim())}</span></div>;
                if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{noteHl(line.slice(1).trim())}</span></div>;
                if(/^\d+\.\s/.test(line)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:800,fontSize:13,minWidth:18,flexShrink:0}}>{line.match(/^\d+/)[0]}.</span><span>{noteHl(line.replace(/^\d+\.\s*/,""))}</span></div>;
                // Pipe separator → individual rows
                if(line.includes(" | ")&&/[\uAC00-\uD7AF]/.test(line)){
                  const pairs=line.split(" | ");
                  return <div key={li} style={{display:"flex",flexDirection:"column",gap:3,margin:"3px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline"}}>{noteHl(p)}</div>)}</div>;
                }
                // Korean-first lines: split Korean above, English below
                if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                  const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                  if(koMatch) return <div key={li} style={{margin:"6px 0"}}><div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div><div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,paddingLeft:2}}>{koMatch[2].trim()}</div></div>;
                }
                return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line)}</div>;
              })}
            </div>;
            })()}
          </div>);
        })()}

        {/* Diagram — syllable block visual */}
        {renderDiagram(st.diagram)}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={goNext}/>
        </div>
      </div>
    </div>
  );}

  // ═══ STANDARD TEACH CARD (legacy/default) ═══
  if(st.type==="teach") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        
        {/* Gold "NEW WORD" frame — only shows for unlearned words */}
        {isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}>
          <div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}>
            <span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>{teachLabel}</span>
          </div>

          <div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}>
            {/* Decorative bubbles */}
            <div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/>
            <div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/>

            {/* Phonetic + Audio icon buttons — top right */}
            <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
              <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={16} showToast={showToast} />
            </div>

            {/* Illustration — only for word/idiom, not letters */}
            {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
              <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{st.img}</div>
            </div>}

            {/* The word/letter display */}
            <div style={{textAlign:"center",padding:"18px 28px 10px"}}>
              {teachKind==="letter"?(<>
                <div style={{marginBottom:10}}>
                  <span className="hd" style={{fontSize:56,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
                </div>
              </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];const aw=art!=="none"?st.nl.split(/\s(.+)/):null;return(<>
                <div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}>
                  <span className="hd" style={{fontSize:letterSize,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(st.nl)}</span>
                </div>
              </>);})()}
            </div>

            {/* Phonetic display — shows below word when toggled */}
            {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}>
              <span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span>
            </div>}

            {/* Translation */}
            <div style={{textAlign:"center",paddingBottom:20}}>
              {teachKind==="letter"?
                <span style={{fontSize:20,color:"var(--teal-dark)",fontWeight:700}}>{cap(st.en)}</span>
              :<div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:14,padding:"8px 24px",boxShadow:"0 3px 12px rgba(46,205,167,0.25)"}}>
                <span style={{fontSize:18,color:"white",fontWeight:700}}>{cap(st.en)}</span>
              </div>}
            </div>

            {/* Examples render as standalone compound bubbles below the card */}
            {/* Letter syllable examples — formulas or syllable lists */}
            {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"14px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}>
              <div style={{textAlign:"center"}}>
                {/[+=→]/.test(st.example)
                  ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                  :<div style={{fontSize:22,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:4}}>{st.example}</div>
                }
                {st.exampleEn&&<div style={{fontSize:12,color:"var(--gray-400)",marginTop:4,letterSpacing:2}}>{st.exampleEn}</div>}
              </div>
            </div>}
          </div>
        </div>}

        {/* Repeat/review card — no gold frame, simpler */}
        {!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
            <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button>
            <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={14} showToast={showToast} />
          </div>
          {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
            <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{st.img}</div>
          </div>}
          <div style={{textAlign:"center",paddingTop:(showEmoji&&st.img)?12:24}}>
            <span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>Review</span>
          </div>
          <div style={{textAlign:"center",padding:"14px 28px 10px"}}>
            {teachKind==="letter"?(<>
              <div style={{marginBottom:6}}>
                <span className="hd" style={{fontSize:48,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
              </div>
            </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];return(<>
              <div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 4px 14px ${c.shadow}`}}>
                <span className="hd" style={{fontSize:32,fontWeight:800,color:"white"}}>{cap(st.nl)}</span>
              </div>
            </>);})()}
          </div>
          {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}><span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span></div>}
          <div style={{textAlign:"center",paddingBottom:18}}>
            <span style={{fontSize:17,color:"var(--teal-dark)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Examples render as standalone compound bubbles */}
          {/* Letter syllable examples in review card */}
          {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"12px 20px",borderTop:"1px solid var(--gray-100)"}}>
            <div style={{textAlign:"center"}}>
              {/[+=→]/.test(st.example)
                ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                :<div style={{fontSize:20,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:3}}>{st.example}</div>
              }
              {st.exampleEn&&<div style={{fontSize:11,color:"var(--gray-400)",marginTop:2,letterSpacing:2}}>{st.exampleEn}</div>}
            </div>
          </div>}
        </div>}

        {/* Explanation note — clean for letters, yellow for words */}
        {/* Standalone compound-style example bubble — ALL examples */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bS={background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22), rgba(100,80,200,0.14), rgba(80,60,180,0.08))":"linear-gradient(180deg, rgba(200,190,255,0.45), rgba(220,210,255,0.3), rgba(235,230,255,0.18))",borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const gA={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
              {turns.map((turn,ti)=>{const isA=turn.trim().startsWith("A:");const content=turn.replace(/^[AB]:\s*/,"").trim();const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bS,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{universalHl(content, lang)}<SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
                    {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                  </div></div></div>;})}
            </div>;
          }
          return <div style={{...bS,marginBottom:16}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
            <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{universalHl(ex, lang)}<SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
            {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}
          </div></div>;
        })()}
        {st.note&&(teachKind==="letter"?
          <div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
            <div style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.7}}>{universalHl(st.note, lang)}</div>
          </div>
        :<div style={{
            background:dk?"linear-gradient(155deg,rgba(58,36,130,0.35),rgba(44,26,105,0.25))":"linear-gradient(155deg,rgba(240,234,255,0.9),rgba(228,216,255,0.8))",
            border:dk?"1.5px solid rgba(168,144,255,0.25)":"1.5px solid rgba(168,144,255,0.35)",
            borderRadius:20,padding:"18px 20px",marginBottom:20,position:"relative",overflow:"hidden",
            boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.06)":"inset 0 2px 0 rgba(255,255,255,0.9),0 4px 16px rgba(112,80,216,0.08)"
          }}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"40%",borderRadius:"0 0 50% 50%",
            background:dk?"linear-gradient(180deg,rgba(255,255,255,0.06)0%,transparent 100%)":"linear-gradient(180deg,rgba(255,255,255,0.6)0%,transparent 100%)",
            pointerEvents:"none"}}/>
          <div style={{position:"relative"}}>
            <div style={{fontSize:11,fontWeight:800,color:dk?"rgba(200,184,255,0.8)":"#7050D8",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8,display:"flex",alignItems:"center",gap:6}}>
              <AppIcon name="lightbulb" size={15}/>{t("le_good_to_know",baseLang)}
            </div>
            <div style={{fontSize:15,lineHeight:1.75,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{st.note.split(/\\n|\n/).map((line,li)=>{
              if(!line.trim()) return <div key={li} style={{height:5}}/>;
              if(line.startsWith("⚠️")) return <div key={li} style={{color:dk?"rgba(94,234,200,0.9)":"#0D7D5C",fontWeight:700,margin:"3px 0"}}>{universalHl(line, lang)}</div>;
              return <div key={li}>{universalHl(line, lang)}</div>;
            })}</div>
          </div>
        </div>)}

        {/* Korean block structure diagram */}
        {renderDiagram(st.diagram)}

        {/* Arabic letter forms diagram — 2×2 positional grid */}
        {st.forms&&<div style={{background:"var(--purple-bg)",border:"2px solid rgba(123,94,232,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:12,textAlign:"center"}}>Letter Forms</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {st.forms.map((f,fi)=>(
              <div key={fi} style={{textAlign:"center",padding:"12px 8px",borderRadius:14,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:"1.5px solid rgba(123,94,232,0.12)",boxShadow:"0 2px 6px rgba(0,0,0,0.03)"}}>
                <div style={{fontSize:32,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2,direction:"rtl"}}>{f.glyph}</div>
                <div style={{fontSize:10,color:"var(--gray-400)",marginTop:4,fontWeight:600}}>{f.pos}</div>
              </div>
            ))}
          </div>
          {st.formNote&&<div style={{fontSize:12,color:"var(--gray-500)",textAlign:"center",marginTop:10,lineHeight:1.5}}>{st.formNote}</div>}
        </div>}

        {/* Conjugation mini-table — for verbs */}
        {st.conjugation&&<div style={{background:"linear-gradient(135deg, #F0F4FF, #EBF0FF)",border:"2px solid rgba(74,143,231,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:12}}>
            <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg, var(--blue), #3A7BD5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,color:"white",fontWeight:800}}>⚙️</div>
            <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5}}>Conjugation</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
            {Object.entries(st.conjugation).map(([pron,form])=>(
              <div key={pron} style={{display:"flex",gap:8,alignItems:"baseline",padding:"4px 8px",borderRadius:8,background:"rgba(255,255,255,0.6)"}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,minWidth:50}}>{pron}</span>
                <span style={{fontSize:14,color:"var(--gray-800)",fontWeight:700}}>{form}</span>
              </div>
            ))}
          </div>
        </div>}

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ TIP — Grammar / pattern / culture ═══
  // ═══ VERB TABLE — visual conjugation grid (purple/green scheme) ═══
  if(st.type==="verb_table") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:480,margin:"0 auto"}}>

        {/* Header */}
        <div style={{background:"linear-gradient(135deg, #7B5EE8, #6B4FCC)",borderRadius:"20px 20px 0 0",padding:"18px 24px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"rgba(255,255,255,0.6)",marginBottom:4}}>{st.label||"Conjugation"}</div>
          <h3 className="hd" style={{fontSize:22,fontWeight:800,color:"white",margin:0}}>{st.title}</h3>
        </div>

        {/* Grid */}
        <div style={{background:"var(--card-bg)",border:"2px solid rgba(123,94,232,0.15)",borderTop:"none",borderRadius:"0 0 20px 20px",overflow:"hidden"}}>
          {(st.groups||[{label:null,rows:st.rows}]).map((grp,gi)=>{
            // Normalize rows: handle forms[] (simple list), rows as arrays, rows as objects
            let normalizedRows = grp.rows || [];
            if (grp.forms && !grp.rows) {
              // forms: ["ich werde", "du wirst", ...] → render as simple list
              normalizedRows = grp.forms.map(f => ({pronoun: "", form: f, en: ""}));
            } else if (normalizedRows.length > 0 && Array.isArray(normalizedRows[0])) {
              // rows: [["pronoun","form","en?"], ...] → convert to objects
              normalizedRows = normalizedRows.map(arr => ({pronoun: arr[0]||"", form: arr[1]||"", en: arr[2]||""}));
            }
            return <div key={gi}>
              {(grp.label||grp.header)&&<div style={{background:"rgba(123,94,232,0.04)",padding:"8px 20px",borderTop:gi>0?"1.5px solid rgba(123,94,232,0.1)":"none"}}>
                <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--purple-accent-text)"}}>{grp.label||grp.header}</span>
              </div>}
              {normalizedRows.map((r,ri)=>(
                <div key={ri} style={{display:"grid",gridTemplateColumns:r.en?"1fr 1fr 1fr":"1fr 1fr",borderTop:(gi>0||ri>0||grp.label||grp.header)?"1px solid var(--gray-100)":"none"}}>
                  {/* Pronoun */}
                  {r.pronoun&&<div style={{padding:"10px 16px",background:"rgba(123,94,232,0.03)"}}>
                    <span style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)"}}>{r.pronoun}</span>
                  </div>}
                  {/* Verb form */}
                  <div style={{padding:"10px 16px",textAlign:r.pronoun?"center":"left",background:"rgba(123,94,232,0.06)",gridColumn:!r.pronoun&&!r.en?"1 / -1":undefined}}>
                    <span style={{fontSize:17,fontWeight:800,color:"#5B3DB8",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{r.form}</span>
                  </div>
                  {/* English */}
                  {r.en&&<div style={{padding:"10px 16px",textAlign:"right"}}>
                    <span style={{fontSize:14,fontWeight:600,color:"var(--teal-text)"}}>{r.en}</span>
                  </div>}
                </div>
              ))}
            </div>;
          })}

          {/* Summary note */}
          {st.note&&<div style={{borderTop:"1.5px solid rgba(123,94,232,0.1)",padding:"14px 20px",background:"rgba(46,205,167,0.04)"}}>
            <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.6,textAlign:"center"}}>{st.note.split(/\\n|\n/).map((line,i)=>{
              const isBold=/^\d|^Only|^Same|^Just|^That|^Compare/.test(line.trim());
              return <div key={i} style={{fontWeight:isBold?700:400,color:isBold?"var(--gray-700)":"var(--gray-500)",marginTop:i>0&&!line.trim()?6:0}}>{line||"\u00A0"}</div>;
            })}</div>
          </div>}
        </div>

        {/* DeepDive */}
        {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div style={{marginTop:16}}>
          <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"12px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
            <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/> {dd.title}</span>
            <span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span>
          </button>
          {showDeepDive&&<div className="anim">
            <div style={{
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
              borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
              border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
              <div style={{position:"relative",zIndex:2}}>
              {(dd.text||"").split(/\\n|\n/).map((line,i)=>{
                if(!line.trim()) return <div key={i} style={{height:8}}/>;
                if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.slice(2).trim())}</span></div>;
                if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.trim())}</span></div>;
                if(line.startsWith("•")){
                  const bullet=line.slice(1).trim();
                  const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                  if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(bArrow[2].trim())}</span></div>;
                  return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(bullet)}</span></div>;
                }
                const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,50}?)\s*[→=]\s*(.+)$/);
                if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(arrow[2].trim())}</span></div>;
                const isHeader=line.trim().endsWith(":");
                return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line)}</div>;
              })}
              </div>
            </div>
          </div>}
        </div>})()}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:20}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  if(st.type==="tip") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <div style={{maxWidth:500,margin:"0 auto"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",...glass}}>
          <div style={{padding:"18px 24px 12px"}}>
            {/* Foundations reference — top of card */}
            {st.fRef&&<div style={{marginBottom:10}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"var(--purple-bg)",border:"1.5px solid var(--purple-border)",borderRadius:10,padding:"5px 12px",fontSize:11,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer",transition:"all .15s"}}>📖 Foundations: {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>
            </div>}
            <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:8,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={18}/>Good to know</div>
            {st.title&&<h3 style={{fontSize:19,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.35,letterSpacing:"-0.3px"}}>{st.title.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{1FA00}-\u{1FA9F}]\s*/u,"")}</h3>}
          </div>
          <div style={{padding:"0 24px 22px"}}>
            {/* Conjugation grid — when rows[] is present */}
            {st.rows&&<div style={{marginBottom:st.text?14:0}}>
              {st.rows.map((r,ri)=>{
                const isGroup=r.group;
                return <div key={ri} style={{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:ri<st.rows.length-1?"1px solid rgba(123,94,232,0.08)":"none",gap:8,...(isGroup?{paddingLeft:6,borderLeft:"3px solid rgba(123,94,232,0.2)"}:{})}}>
                  <div style={{flex:"1 1 50%",display:"flex",alignItems:"baseline",gap:6}}>
                    <span style={{fontSize:19,fontWeight:800,color:"var(--gray-800)"}}>{r.nl}</span>
                    {r.note&&<span style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",background:"rgba(123,94,232,0.08)",borderRadius:6,padding:"1px 6px",letterSpacing:0.5}}>{r.note}</span>}
                  </div>
                  <div style={{flex:"1 1 50%",textAlign:"right"}}>
                    <span style={{fontSize:14,color:"var(--gray-400)",fontWeight:500}}>{r.en}</span>
                  </div>
                </div>;
              })}
            </div>}
            {st.text&&(()=>{
              const hl=(text)=>universalHl(text, lang);
              const isTranslationCard=st.title&&/vertal/i.test(st.title);
              // ── Pair-card pre-pass: group Korean line + → English line into pairs ──
              const rawLines=st.text.split(/\\n|\n/);
              const rendered=[];
              let ri=0;
              while(ri<rawLines.length){
                const line=rawLines[ri];
                const nextLine=rawLines[ri+1]||"";
                const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
                const nextIsArrow=nextLine.trim().startsWith("→");
                // Pair: Korean line followed by → English line
                if(hasKorean&&nextIsArrow&&line.trim()){
                  const translation=nextLine.trim().slice(1).trim();
                  rendered.push(
                    <div key={ri} style={{
                      background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                      borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                      border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                      boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                      <div style={{position:"relative",zIndex:2}}>
                        <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{hl(line.trim())}</div>
                        <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{hl(translation)}</div>
                      </div>
                    </div>
                  );
                  ri+=2;
                  continue;
                }
                // → line not preceded by Korean (standalone translation) — teal text
                if(line.trim().startsWith("→")&&!hasKorean){
                  rendered.push(<div key={ri} style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",paddingLeft:16,paddingBottom:4,lineHeight:1.5}}>{hl(line.trim().slice(1).trim())}</div>);
                  ri++;continue;
                }
                rendered.push(ri);// placeholder — fall through to normal renderer
                ri++;
              }
              return rendered.map((item,i)=>{
              if(typeof item!=="number") return item;
              const line=rawLines[item];const i2=item;
              if(!line.trim()) return <div key={i2} style={{height:20,borderBottom:"1px solid var(--gray-100)",marginBottom:4}}/>;
              // ⚠️ Warning line — amber background block
              if(line.startsWith("⚠️")){
                return <div key={i} style={{background:"rgba(245,166,35,0.08)",border:"1.5px solid rgba(245,166,35,0.18)",borderRadius:12,padding:"10px 14px",margin:"8px 0",display:"flex",gap:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:16,lineHeight:1.2,flexShrink:0}}>⚠️</span>
                  <span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6}}>{hl(line.slice(2).trim())}</span>
                </div>;
              }
              // Section header — ALL CAPS word(s) followed by colon OR standalone
              if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())||/^[A-Z][A-Z ]+\([^)]*\):/.test(line.trim())||/^[A-Z][A-Z ]{2,}$/.test(line.trim())){
                return <div key={i} style={{background:"linear-gradient(135deg, rgba(123,94,232,0.08), rgba(123,94,232,0.03))",borderRadius:10,padding:"8px 14px",margin:"10px 0 4px",borderLeft:"3px solid var(--purple-accent)"}}>
                  <span style={{fontSize:13,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{hl(line.trim())}</span>
                </div>;
              }
              // Translation reveal line (→ at start in Vertalingen cards)
              if(isTranslationCard&&line.startsWith("→")){
                return <TranslationReveal key={i} text={line.slice(1).trim()} hl={hl}/>;
              }
              if(line.startsWith("•")){
                const bullet=line.slice(1).trim();
                const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                if(bArrow) return <div key={i} style={{padding:"4px 0 4px 8px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{hl(bArrow[1].trim())}</span><span style={{color:"var(--gray-300)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(bArrow[2].trim())}</span></div>;
                return <div key={i} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 8px",display:"flex",gap:6,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{hl(bullet)}</span></div>;
              }
              // ✅ / ❌ lines
              if(line.startsWith("✅")) return <div key={i} style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              if(line.startsWith("❌")) return <div key={i} style={{background:"rgba(239,68,68,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              // Full line: nl = en  or  nl → en (short pairs only)
              const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
              if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")){const isAllCaps=/^[A-Z][A-Z ]+$/.test(arrow[1].trim());return <div key={i} style={{display:"flex",gap:8,alignItems:"center",padding:"4px 0",flexWrap:"wrap"}}><span style={{fontSize:isAllCaps?13:16,fontWeight:isAllCaps?800:700,color:isAllCaps?"var(--purple-accent-text)":"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif",letterSpacing:isAllCaps?1:0}}>{hl(arrow[1].trim())}</span><span style={{color:"var(--gray-300)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(arrow[2].trim())}</span></div>;}
              // Pure Korean word line → glossy pill grid (e.g. 커피  택시  버스)
              const koWords=line.trim().split(/\s+/).filter(Boolean);
              const isPureKoLine=koWords.length>=3&&koWords.every(w=>/^[\uAC00-\uD7AF\u3130-\u318F]+$/.test(w));
              if(isPureKoLine){return <div key={i2} style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",padding:"6px 0"}}>{koWords.map((w,wi)=><span key={wi} style={{display:"inline-flex",alignItems:"center",background:dk?"linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))":"linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,255,255,0.65))",borderRadius:14,padding:"8px 16px",border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)":"0 3px 12px rgba(123,94,232,0.08),inset 0 2px 0 rgba(255,255,255,0.9)",fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{w}</span>)}</div>;}
              // Korean-first lines: split Korean above, English below
              if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                if(koMatch){
                  return <div key={i2} style={{margin:"6px 0"}}>
                    <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{hl(koMatch[1].trim())}</div>
                    <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                  </div>;
                }
              }
              // Regular text: only bold if it's a section-like header ending with ":"
              const isHeader=line.trim().endsWith(":");
              return <div key={i2} style={{fontSize:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.65,marginTop:isHeader?10:0,padding:"2px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
            });})()}
          </div>
          {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div style={{borderTop:"1.5px solid rgba(123,94,232,0.12)",padding:"0 24px 4px"}}>
            <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"14px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
              <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/>  {dd.title}</span>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span></span>
            </button>
            {showDeepDive&&<div className="anim" style={{paddingBottom:16}}>
              <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
                borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
                boxShadow:dk
                  ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                  :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                {/* Gloss arc */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                {(()=>{const ddHl=(text)=>universalHl(text, lang);return (dd.text||"").split(/\\n|\n/).map((line,i)=>{
                  if(!line.trim()) return <div key={i} style={{height:8}}/>;
                  if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line.slice(2).trim())}</span></div>;
                  if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line.trim())}</span></div>;
                  if(line.startsWith("•")){
                    const bullet=line.slice(1).trim();
                    const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                    if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{ddHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(bArrow[2].trim())}</span></div>;
                    return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{ddHl(bullet)}</span></div>;
                  }
                  const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
                  if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{ddHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(arrow[2].trim())}</span></div>;
                  const isHeader=line.trim().endsWith(":");
                  return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line)}</div>;
                });})()}
                </div>
              </div>
            </div>}
          </div>})()}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:24}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ MULTIPLE CHOICE ═══
  if(st.type==="mc") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_choose_correct",baseLang)}</div>
          {(()=>{const{korean:mcKo,english:mcEn}=splitKoEn(st.q||"");return<><div style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {universalHl(mcKo, lang)}
          </div>{renderEnglishBelow(mcEn,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
          </div>
        </div>
        {/* Options grid — single column for Korean, 2-col for short text */}
        {(()=>{
          const allOpts=shuffleOpts(st.opts,si);
          const hasKoOpts=allOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          const anyLong=allOpts.some(o=>o.length>18);
          const useSingleCol=hasKoOpts||anyLong;
          return <div style={{display:"grid",gridTemplateColumns:useSingleCol?"1fr":"1fr 1fr",gap:10}}>
          {allOpts.map((o,i)=>{
            let cls="quiz-opt";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(o===st.ans)cls+=" correct";else if(o===selOpt)cls+=" wrong";else cls+=" dis";}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className={cls} style={{wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=12?"nowrap":"normal",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?18:o.length<=8?16:14,fontWeight:700,lineHeight:1.35}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(o===st.ans);}}><div className="quiz-letter">{"ABCD"[i]}</div>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===st.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===st.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {t("le_answer_is",baseLang)}: {/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(st.ans)?<span style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>{st.ans}</span>:st.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===st.ans} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
  );

  // ═══ TRANSLATE ═══
  if(st.type==="tr"){
    // mk format: resolve from MEANINGS dict; legacy: use s/a directly
    let trS=st.s, trA=st.a, isNlEn;
    if(st.mk&&MEANINGS[st.mk]){
      const m=MEANINGS[st.mk];
      const bl=m[baseLang]||m.en; // base language with English fallback
      if(st.dir==="comprehend"){isNlEn=true;trS=m[lang]?.[0]||st.s;trA=bl||[st.s];}
      else{isNlEn=false;trS=bl?.[0]||st.s;trA=m[lang]||[st.s];}
    } else {
      isNlEn=st.dir?.includes("-en")&&!st.dir?.startsWith("en");
    }
    const numMap={"0":"nul","1":"een","2":"twee","3":"drie","4":"vier","5":"vijf","6":"zes","7":"zeven","8":"acht","9":"negen","10":"tien","11":"elf","12":"twaalf","13":"dertien","14":"veertien","15":"vijftien","16":"zestien","17":"zeventien","18":"achttien","19":"negentien","20":"twintig","30":"dertig","40":"veertig","50":"vijftig","60":"zestig","70":"zeventig","80":"tachtig","90":"negentig","100":"honderd","1000":"duizend"};
    const numMapEn={"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety","100":"hundred","1000":"thousand"};
    // ── Translation grading: 3-layer system (D26) ──
    // Layer 1: normalize (contractions, punctuation, do-strip, numbers)
    const CONTRACTIONS={"i'm":"i am","i've":"i have","i'll":"i will","i'd":"i would","you're":"you are","you've":"you have","you'll":"you will","you'd":"you would","he's":"he is","she's":"she is","it's":"it is","we're":"we are","we've":"we have","we'll":"we will","they're":"they are","they've":"they have","they'll":"they will","don't":"do not","doesn't":"does not","didn't":"did not","isn't":"is not","aren't":"are not","wasn't":"was not","weren't":"were not","can't":"cannot","won't":"will not","couldn't":"could not","shouldn't":"should not","wouldn't":"would not","haven't":"have not","hasn't":"has not","hadn't":"had not","that's":"that is","there's":"there is","here's":"here is","what's":"what is","who's":"who is","where's":"where is","how's":"how is","let's":"let us","ma'am":"madam"};
    const norm=s=>{
      let r=s.trim().toLowerCase().replace(/[!?.,'"""]/g,"");
      // Expand contractions
      Object.entries(CONTRACTIONS).forEach(([c,e])=>{r=r.replace(new RegExp("\\b"+c.replace("'","'?")+"\\b","g"),e);});
      // Strip "do/does" from questions: "do you speak" → "you speak"
      r=r.replace(/\bdo not\b/g,"DONOT_HOLD");
      r=r.replace(/\bdoes not\b/g,"DOESNOT_HOLD");
      r=r.replace(/\b(do|does)\s+/g,"");
      r=r.replace(/DONOT_HOLD/g,"do not");
      r=r.replace(/DOESNOT_HOLD/g,"does not");
      // Number words
      Object.entries(numMap).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      Object.entries(numMapEn).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      // Collapse whitespace
      r=r.replace(/\s+/g," ").trim();
      return r;
    };
    // Layer 2: equivalence groups — try swapping phrases in input
    const TR_EQUIV=[
      ["come from","am from","originate from"],
      ["is called","is named"],
      ["a little","a bit of"],
      ["nice to meet you","pleased to meet you","glad to meet you"],
      ["see you tomorrow","until tomorrow","till tomorrow"],
      ["very much","a lot","so much"],
      ["good night","goodnight"],
      ["my name is","i am called"],
      ["beautiful","pretty","lovely"],
    ];
    const equivMatch=(input,target)=>{
      const ni=norm(input),nt=norm(target);
      if(ni===nt) return true;
      // Try each equivalence group: if input contains one member, swap to others
      for(const group of TR_EQUIV){
        for(const phrase of group){
          if(ni.includes(phrase)){
            for(const alt of group){
              if(alt!==phrase && ni.replace(phrase,alt)===nt) return true;
            }
          }
        }
      }
      return false;
    };
    const answers=Array.isArray(trA)?trA:[trA];
    // Find best match (exact → equiv → none), track which accepted answer matched
    const findMatch=(input)=>{
      // Exact (after norm)
      const exact=answers.find(a=>norm(input)===norm(a));
      if(exact) return {ok:true,match:exact,method:"exact"};
      // Equivalence
      const equiv=answers.find(a=>equivMatch(input,a));
      if(equiv) return {ok:true,match:equiv,method:"equiv"};
      return {ok:false,match:answers[0],method:"none"};
    };
    const checkAns=()=>{const result=findMatch(inputVal);checkAndNext(result.ok);};
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Source sentence card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"24px 28px",marginBottom:20,textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <div style={{color:isNlEn?"#7B5EE8":"var(--teal-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,fontWeight:800}}>{t("le_translate_to",baseLang)} {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <span style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{isNlEn?(LANGUAGES.find(l=>l.code===lang)?.native||lang):(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English")}</span>
            <span style={{fontSize:22,fontWeight:700,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>{trS}</span>
          </div>
        </div>
        {/* Input area — premium card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"20px 20px 16px",marginBottom:8}}>
          <div style={{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:2.5,color:"var(--gray-400)",marginBottom:10,paddingLeft:4}}>
            {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}
          </div>
          <div style={{display:"flex",gap:10,alignItems:"stretch"}}>
            <input className="chat-input" value={inputVal} onChange={e=>setInputVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!answered&&inputVal.trim())checkAns();}} placeholder={`${t("le_type_in",baseLang)} ${isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}...`} disabled={answered} autoFocus/>
            <button className="btn" style={{fontSize:15,padding:"14px 24px",borderRadius:16,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:answered||!inputVal.trim()?"default":"pointer",opacity:answered||!inputVal.trim()?0.5:1,boxShadow:"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.3}} disabled={answered||!inputVal.trim()} onClick={checkAns} onMouseEnter={e=>{if(!answered&&inputVal.trim())e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>Check</span>
            </button>
          </div>
        </div>
        {/* Result feedback */}
          {answered&&(()=>{const result=findMatch(inputVal);return(
            <div style={{marginTop:10,padding:"14px 18px",borderRadius:16,background:result.ok?"var(--teal-light)":"var(--coral-light)",border:`2px solid ${result.ok?"var(--teal)":"var(--coral)"}`,boxShadow:`0 4px 16px ${result.ok?"rgba(46,205,167,0.15)":"rgba(239,68,68,0.1)"}`}}>
              <div style={{fontWeight:800,fontSize:14,color:result.ok?"var(--teal-dark)":"var(--coral)"}}>{result.ok?t("le_correct",baseLang):t("le_not_quite",baseLang)}</div>
              {result.ok&&result.method==="equiv"&&<div style={{fontSize:12,marginTop:2,color:"var(--gray-400)"}}>Closest: {result.match}</div>}
              {!result.ok&&<div style={{fontSize:14,marginTop:4}}>{t("le_accepted",baseLang)}: <strong>{answers[0]}</strong></div>}
            </div>);})()}
          {answered&&<ContinueButton onClick={goNext} correct={findMatch(inputVal).ok} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
      </div>
    );
  }

  // ═══ FILL BLANK ═══
  if(st.type==="fb"){
    const fbAnswers=Array.isArray(st.a)?st.a:[st.a];
    const isCorrect=o=>fbAnswers.some(a=>a.toLowerCase()===o.toLowerCase());
    const showAnswer=fbAnswers[0];
    return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_fill_blank",baseLang)}</div>
          {(()=>{const{korean:fbKo,english:fbEn}=splitKoEn(st.s.replace(/\{1\}/g,"___"));return<><div style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {fbKo.split(/_{3,}/).map((part,i,arr)=><span key={i}>{universalHl(part, lang)}{i<arr.length-1&&<span style={{display:"inline-block",minWidth:70,borderBottom:"3px solid var(--purple-accent)",margin:"0 4px",color:"var(--teal-dark)",fontWeight:800,fontFamily:"'Nunito','system-ui',sans-serif"}}>{answered?showAnswer:"___"}</span>}</span>)}
          </div>{renderEnglishBelow(fbEn,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        </div>
        {/* Options — clean flat buttons */}
        {(()=>{
          const fbOpts=shuffleOpts(st.opts,si);
          const hasKoFb=fbOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          return <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
          {fbOpts.map((o,i)=>{
            let bg="var(--white)",bc="var(--gray-200)",col="var(--gray-700)";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(isCorrect(o)){bg="var(--teal-light)";bc="var(--teal)";col="var(--teal-dark)";}else if(o===selOpt){bg="var(--coral-light)";bc="var(--coral)";col="var(--coral)";}}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className="quiz-opt" style={{background:bg,border:`2px solid ${bc}`,color:col,textAlign:"center",wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=8?"nowrap":"normal",transition:"all .2s, transform .15s",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?20:o.length<=8?17:14,fontWeight:700}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}
              onMouseEnter={e=>{if(!answered){UISounds.tick();e.currentTarget.style.borderColor="rgba(123,94,232,0.4)";e.currentTarget.style.background="linear-gradient(180deg, #f5f0ff, #ede4ff)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(123,94,232,0.15), 0 0 20px rgba(123,94,232,0.08)";}}}
              onMouseLeave={e=>{if(!answered){e.currentTarget.style.borderColor=bc;e.currentTarget.style.background=bg;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="";}}}
              onMouseDown={e=>{if(!answered)e.currentTarget.style.transform="translateY(1px) scale(0.98)";}}
              onMouseUp={e=>{if(!answered)e.currentTarget.style.transform="translateY(-2px)";}}
              onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(isCorrect(o));}}>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:8,fontSize:11,color:"var(--gray-300)"}}>Arrow keys navigate · Space select</div>}
        {answered&&<div style={{textAlign:"center",marginTop:12,fontSize:14,fontWeight:700,color:isCorrect(selOpt)?"var(--teal-dark)":"var(--coral)"}}>{isCorrect(selOpt)?t("le_correct",baseLang):fbAnswers.length>1?`${t("le_not_quite",baseLang)} — ${t("le_accepted",baseLang)}: ${fbAnswers.join(" / ")}`:`${t("le_not_quite",baseLang)} — ${t("le_answer_is",baseLang)}: ${showAnswer}`}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={isCorrect(selOpt)} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ DRAG FILL (D27, D29) ═══
  // Multi-blank sentence completion: click-slot-then-tile, drag-and-drop, or keyboard
  if(st.type==="drag_fill"){
    const blankKeys=Object.keys(st.blanks).sort();
    const allFilled=blankKeys.every(k=>dfSlots[k]);
    const poolWords=shuffleOpts(st.pool||[],si);
    const availablePool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
    const emptySlots=blankKeys.filter(k=>!dfSlots[k]);
    // Target slot: focused slot if empty, otherwise first empty
    const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:emptySlots[0]||null;
    // Place a word into a specific slot
    const placeInSlot=(word,slotKey)=>{
      if(answered||!slotKey||dfSlots[slotKey]) return;
      setDfSlots(prev=>({...prev,[slotKey]:word}));
      setDfFocusSlot(null);setDfDrag(null);
      UISounds.tick();
    };
    // Place tile via click: into focused slot or first empty
    const placeTile=(word)=>{
      if(answered||!targetSlot) return;
      placeInSlot(word,targetSlot);
    };
    // Remove a tile from a slot
    const removeTile=(slotKey)=>{
      if(answered) return;
      setDfSlots(prev=>{const n={...prev};delete n[slotKey];return n;});
      UISounds.tick();
    };
    // Click on empty slot: focus it
    const focusSlot=(slotKey)=>{
      if(answered||dfSlots[slotKey]) return;
      setDfFocusSlot(prev=>prev===slotKey?null:slotKey);
      UISounds.tick();
    };
    // Check all slots
    const checkDf=()=>{
      if(!allFilled) return;
      const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
      checkAndNext(allCorrect);
    };
    // Split Korean from English translation, then parse blanks in Korean only
    const{korean:dfKo,english:dfEn}=splitKoEn(st.s);
    const sentParts=dfKo.split(/\{(\d+)\}/g);
    // Drag handlers: ghost created on document.body (bypasses .anim transform containing block)
    const onTilePointerDown=(e,word)=>{
      if(answered) return;
      e.preventDefault();
      dfDragOccurred.current=false;
      const startX=e.clientX,startY=e.clientY;
      // Cache slot rects for hit-testing
      const rects={};
      blankKeys.forEach(k=>{
        const el=document.querySelector(`[data-df-slot="${k}"]`);
        if(el) rects[k]=el.getBoundingClientRect();
      });
      const filledSnapshot={...dfSlots};
      // Create ghost on document.body — position via measured deltas (coordinate-system proof)
      const ghost=document.createElement("div");
      ghost.textContent=word;
      Object.assign(ghost.style,{
        position:"fixed",left:"0px",top:"0px",margin:"0",
        transform:"translate(0px,0px)",
        pointerEvents:"none",zIndex:"99999",
        background:"var(--card-bg)",border:"2px solid var(--purple-accent)",borderRadius:"14px",
        padding:"10px 20px",fontWeight:"700",fontSize:"16px",
        fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--purple-accent-text)",
        boxShadow:"0 8px 32px rgba(123,94,232,0.3)",
        whiteSpace:"nowrap",
      });
      document.body.appendChild(ghost);
      // Measure where (0,0) actually renders — this accounts for any transforms/zoom/offsets
      const ghostRect=ghost.getBoundingClientRect();
      const baseX=ghostRect.left,baseY=ghostRect.top;
      const gw=ghost.offsetWidth,gh=ghost.offsetHeight;
      // Position ghost centered on cursor, compensating for coordinate system offset
      const initTX=startX-gw/2-baseX;
      const initTY=startY-gh/2-baseY;
      ghost.style.transform=`translate(${initTX}px,${initTY}px)`;
      // Store start cursor pos for delta tracking
      const cursorStartX=startX,cursorStartY=startY;
      setDfDrag({word});
      // Window-level move handler — delta-based, immune to coordinate system quirks
      const onMove=(ev)=>{
        const dx=ev.clientX-cursorStartX,dy=ev.clientY-cursorStartY;
        // Mark as real drag after 4px movement
        if(Math.abs(dx)>4||Math.abs(dy)>4) dfDragOccurred.current=true;
        ghost.style.transform=`translate(${initTX+dx}px,${initTY+dy}px)`;
        // Highlight slot under pointer via DOM
        let hoveredSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) hoveredSlot=k;
          }
        });
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(!el) return;
          if(k===hoveredSlot){
            el.style.borderBottom="3px solid #2ECDA7";
            el.style.background="rgba(46,205,167,0.08)";
            el.style.transform="scale(1.05)";
          } else {
            el.style.borderBottom="";el.style.background="";el.style.transform="";
          }
        });
      };
      // Window-level up handler
      const onUp=(ev)=>{
        window.removeEventListener("pointermove",onMove);
        window.removeEventListener("pointerup",onUp);
        ghost.remove();
        // Reset slot hover styles
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(el){el.style.borderBottom="";el.style.background="";el.style.transform="";}
        });
        // Find drop target
        let dropSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) dropSlot=k;
          }
        });
        if(dropSlot){
          placeInSlot(word,dropSlot);
        } else {
          setDfDrag(null);
        }
      };
      window.addEventListener("pointermove",onMove);
      window.addEventListener("pointerup",onUp);
    };
    // NOTE: keyboard nav handled by main handler (D7) — no hooks here
    return(
    <div className="anim" key={si} style={{touchAction:"none"}}>
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Sentence card with slots */}
        <div style={{background:"var(--card-bg)",borderRadius:20,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",padding:"22px 26px",marginBottom:18,textAlign:"center",...glass}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:12,fontWeight:700}}>Fill in the blanks</div>
          <div style={{fontSize:19,fontWeight:700,lineHeight:2.2,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {sentParts.map((part,i)=>{
              if(i%2===1){
                const slotKey=part;
                const placed=dfSlots[slotKey];
                const isCorrectSlot=answered&&placed?.toLowerCase()===st.blanks[slotKey]?.toLowerCase();
                const isWrongSlot=answered&&placed&&!isCorrectSlot;
                const isFocused=dfFocusSlot===slotKey&&!answered&&!placed;
                const slotBase={
                  display:"inline-block",minWidth:74,padding:"4px 12px",margin:"0 4px",
                  borderRadius:8,fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif",
                  transition:"all .2s",verticalAlign:"baseline",userSelect:"none",
                };
                const slotVisual=answered
                  ? {borderBottom:isCorrectSlot?"3px solid var(--teal)":"3px solid var(--coral)",
                     background:isCorrectSlot?"var(--teal-light)":"var(--coral-light)",
                     color:isCorrectSlot?"var(--teal-dark)":"var(--coral)",cursor:"default"}
                  : placed
                    ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.06)",
                       color:"var(--purple-accent-text)",cursor:"pointer"}
                    : isFocused
                      ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.08)",
                         color:"var(--gray-400)",cursor:"pointer",
                         boxShadow:"0 0 0 3px rgba(123,94,232,0.2)",
                         animation:"dfPulse 1.5s ease-in-out infinite"}
                      : {borderBottom:"3px dashed var(--gray-300)",background:"transparent",
                         color:"var(--gray-300)",cursor:"pointer"};
                return <span key={i} data-df-slot={slotKey} style={{...slotBase,...slotVisual}}
                  onClick={()=>{
                    if(answered)return;
                    if(placed){removeTile(slotKey);}
                    else{focusSlot(slotKey);}
                  }}
                  title={!answered?(placed?"Click to remove":"Click to select this slot"):""}>
                  {placed||<span style={{opacity:0.4,fontSize:14}}>{isFocused?"drop here":"_"}</span>}
                  {isWrongSlot&&<span style={{display:"block",fontSize:11,color:"var(--teal-dark)",fontWeight:600}}>{st.blanks[slotKey]}</span>}
                </span>;
              }
              return <span key={i}>{universalHl(part, lang)}</span>;
            })}
          </div>
          {renderEnglishBelow(dfEn,true)}
          {st.hint&&!showHint&&!answered&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>Need a hint?</button></div>}
          {showHint&&st.hint&&!answered&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        {/* Word tile pool */}
        {!answered&&<div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:16}}>
          {availablePool.map((word,i)=>{
            const isFocused=i===(dfPoolIdx%Math.max(availablePool.length,1));
            const isDragging=dfDrag?.word===word;
            return <div key={word}
              onPointerDown={e=>onTilePointerDown(e,word)}
              onClick={()=>{if(!dfDragOccurred.current&&!dfDrag)placeTile(word);}}
              style={{
                background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:14,
                padding:"10px 20px",cursor:dfDrag?"grabbing":"grab",fontWeight:700,fontSize:16,
                fontFamily:"'Quicksand','system-ui',sans-serif",color:isDragging?"var(--gray-300)":"var(--gray-700)",
                transition:"all .15s",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                opacity:isDragging?0.3:1,userSelect:"none",touchAction:"none",
                ...(isFocused&&!isDragging?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}),
              }}>{word}</div>;
          })}
        </div>}
        {/* Check button */}
        {!answered&&allFilled&&<div style={{textAlign:"center",marginBottom:12}}>
          <button className="btn" onClick={checkDf} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:15,padding:"12px 32px",borderRadius:16,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>Check</button>
        </div>}
        {!answered&&<div style={{textAlign:"center",fontSize:11,color:"var(--gray-300)"}}>{dfFocusSlot?"Slot selected. Click a word or press Space.":"Click a slot, then a word. Or drag words into slots."}</div>}
        {/* Result */}
        {answered&&<div style={{textAlign:"center",marginTop:8,fontSize:14,fontWeight:700,color:blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?"var(--teal-dark)":"var(--coral)"}}>
          {blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?t("le_correct",baseLang):`${t("le_not_quite",baseLang)}`}
        </div>}
        {answered&&<ContinueButton onClick={goNext} correct={blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ MATCH PAIRS ═══
  if(st.type==="match"){
    const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
    const key=si+"-"+pairs.map(p=>p.nl).join(",");
    if(matchKeyRef.current!==key){matchKeyRef.current=key;matchNlRef.current=shuffle(pairs.map(p=>p.nl));matchEnRef.current=shuffle(pairs.map(p=>p.en));}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const allMatched=matchDone.length>=pairs.length*2;
    const handleMatch=(side,val)=>{
      if(matchDone.includes(val))return;
      const newSel={...matchSel,[side]:val};setMatchSel(newSel);
      if(newSel.nl&&newSel.en){
        const pair=pairs.find(p=>p.nl===newSel.nl);
        if(pair&&pair.en===newSel.en){
          setMatchDone(d=>{const next=[...d,newSel.nl,newSel.en];
            // Compute line for this newly matched pair immediately
            setTimeout(()=>{
              const container=matchContainerRef.current;if(!container)return;
              const rect=container.getBoundingClientRect();
              const nlIdx=nlItems.indexOf(newSel.nl);const enIdx=enItems.indexOf(newSel.en);
              const nlEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
              const enEl=container.querySelector(`[data-match-en="${enIdx}"]`);
              if(nlEl&&enEl){
                const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
                setLinePositions(lp=>[...lp,{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top}]);
              }
            },50);
            return next;
          });
          addXp(1);
        }
        setTimeout(()=>setMatchSel({nl:null,en:null}),400);
        if(matchDone.length+2>=pairs.length*2){setAnswered(true);addXp(2);setScore(s=>s+1);}
      }
    };
    matchSelectRef.current={nlItems,enItems,nlCount,matchDone,handleMatch};
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:4}}>{t("le_match_pairs",baseLang)}</div>
          <div style={{fontSize:13,color:"var(--gray-300)"}}>{allMatched?"All matched! ✓":"Select a word, then its match"}</div>
        </div>
        <div ref={matchContainerRef} style={{position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:440,margin:"0 auto"}}
          onPointerMove={(e)=>{if(!matchDragRef.current.active)return;const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const drag=matchDragRef.current;const startEl=drag.startEl;if(!startEl)return;const elR=startEl.getBoundingClientRect();const fromRight=drag.side==="nl";setMatchPendingLine({x1:fromRight?elR.right-rect.left:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
          onPointerLeave={()=>{if(matchDragRef.current.active){matchDragRef.current={active:false,side:null,val:null,startEl:null};setMatchPendingLine(null);}}}>
          {/* SVG: confirmed lines + live pending line */}
          {(linePositions.length>0||matchPendingLine)&&<svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}}>
            {linePositions.map((l,i)=><line key={"c"+i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="url(#neonGrad)" strokeWidth={2} opacity={0.7} filter="url(#glow)">
              <animate attributeName="opacity" from="0" to="0.7" dur="0.3s" fill="freeze"/>
            </line>)}
            {matchPendingLine&&<line x1={matchPendingLine.x1} y1={matchPendingLine.y1} x2={matchPendingLine.x2} y2={matchPendingLine.y2} stroke="#A78BFA" strokeWidth={2} opacity={0.4} strokeDasharray="8 4"/>}
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B7AE8"/>
                <stop offset="50%" stopColor="#B8A8FA"/>
                <stop offset="100%" stopColor="#9B7AE8"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
          </svg>}
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{LANGUAGES.find(l=>l.code===lang)?.native||lang}</div>
            {nlItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.nl===w,f=focusIdx===i&&!d;
              return <div key={i} data-match-nl={i} data-match-side="nl" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("nl",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"nl",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("nl",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.right-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i);}}}>{universalHl(w, lang)}{d&&" ✓"}</div>;})}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"}</div>
            {enItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.en===w,f=focusIdx===i+nlCount&&!d;
              return <div key={i} data-match-en={i} data-match-side="en" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("en",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"en",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("en",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i+nlCount);}}}>{cap(w)}{d&&" ✓"}</div>;})}
          </div>
        </div>
        {!allMatched&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>←→ switch column · ↑↓ navigate · Space select</div>}
        {allMatched&&<ContinueButton onClick={goNext} correct={true} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    );
  }

  // ── CONJUGATION EXERCISE ──
  // st = {type:"conj", verb:"werken", en:"to work", forms:{ik:"werk",jij:"werkt",hij:"werkt",wij:"werken"}, test:["ik","jij","wij"]}
  if(st.type==="conj"){
    const pronLabels={ik:"ik",jij:"jij/je",hij:"hij/zij/het",wij:"wij/we",jullie:"jullie",zij:"zij (they)"};
    const allProns=Object.keys(st.forms);
    const testProns=st.test||allProns.slice(0,3);
    const checkConj=()=>{
      setConjChecked(true);
      const correct=testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase());
      if(correct){setScore(s=>s+1);addXp(2);}
      setAnswered(true);
    };
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div className="card" style={{padding:24}}>
          <div style={{textAlign:"center",marginBottom:18}}>
            <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:6}}>Conjugate the verb</div>
            <div style={{display:"inline-block",background:"linear-gradient(135deg, var(--blue), var(--teal))",borderRadius:14,padding:"10px 28px",marginBottom:6}}>
              <span className="hd" style={{fontSize:24,fontWeight:800,color:"white"}}>{st.verb}</span>
            </div>
            <div style={{fontSize:14,color:"var(--gray-400)",marginTop:4}}>{st.en}</div>
          </div>
          <div style={{display:"grid",gap:10,maxWidth:380,margin:"0 auto"}}>
            {testProns.map(p=>{
              const val=conjAnswers[p]||"";
              const correct=conjChecked&&val.trim().toLowerCase()===st.forms[p].toLowerCase();
              const wrong=conjChecked&&!correct;
              return(
                <div key={p} style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{width:100,fontSize:14,fontWeight:700,color:"var(--gray-600)",textAlign:"right"}}>{pronLabels[p]||p}</span>
                  <input value={val} onChange={e=>!conjChecked&&setConjAnswers(a=>({...a,[p]:e.target.value}))} placeholder="..." style={{flex:1,padding:"10px 14px",borderRadius:12,border:`2px solid ${conjChecked?(correct?"var(--teal)":"var(--coral)"):"var(--gray-200)"}`,fontSize:15,fontWeight:600,background:conjChecked?(correct?"var(--teal-light)":"var(--coral-light)"):"var(--white)",outline:"none"}}/>
                  {conjChecked&&wrong&&<span style={{fontSize:12,color:"var(--coral)",fontWeight:700,whiteSpace:"nowrap"}}>{st.forms[p]}</span>}
                  {conjChecked&&correct&&<span style={{color:"var(--teal)",fontWeight:800}}>✓</span>}
                </div>
              );
            })}
          </div>
          {!conjChecked&&<div style={{textAlign:"center",marginTop:18}}><button className="btn" onClick={checkConj} style={{padding:"12px 32px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>Check ✓</button></div>}
          {conjChecked&&<div style={{textAlign:"center",marginTop:12}}>
            <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:4}}>Full conjugation:</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>{allProns.map(p=><span key={p} style={{background:"var(--gray-50)",borderRadius:8,padding:"4px 10px",fontSize:12,fontWeight:600}}><span style={{color:"var(--gray-400)"}}>{p}</span> <span style={{color:"var(--gray-700)"}}>{st.forms[p]}</span></span>)}</div>
          </div>}
          {conjChecked&&<ContinueButton onClick={()=>{goNext();setConjAnswers({});setConjChecked(false);}} correct={testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
        </div>
      </div>
    );
  }

  // ── GRAMMAR REFERENCE ──
  // st = {type:"gramref", title:"📖 Grammar: Possessive Pronouns", text:"...", level:"A1", topic:"Possessives"}
  if(st.type==="gramref"){
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{background:"var(--purple-bg)",borderRadius:22,padding:"24px 22px",border:"2px solid rgba(123,94,232,0.15)",marginBottom:16}}>
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{width:40,height:40,borderRadius:12,background:"linear-gradient(135deg, #7B5EE8, #6341C7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0,boxShadow:"0 3px 10px rgba(123,94,232,0.3)",color:"white",fontWeight:800}}>📖</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>Grammar Reference • {st.level||"A1"}</div>
              <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:10}}>{st.title}</div>
              <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,whiteSpace:"pre-line"}}>{st.text}</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}><NavArrow onClick={goNext}/></div>
      </div>
    );
  }

  return <div className="anim"><ProgressBar/>{wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}<div className="card" style={{textAlign:"center",padding:24}}><p>Unknown step</p><button className="btn" onClick={goNext} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>{t("le_skip",baseLang)}</button></div></div>;
}

// ━━━━━━━━━━ MAIN APP (updated with Learn page) ━━━━━━━━━━

// ── DEV GATE: Access code screen before the app ──
function DevGate({onAccess}){
  const [code,setCode]=useState("");
  const [error,setError]=useState(false);
  const [shake,setShake]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const handleSubmit=()=>{
    if(code==="koko"){onAccess();}
    else{setError(true);setShake(true);setTimeout(()=>setShake(false),500);setCode("");}
  };
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:dk?"transparent":"linear-gradient(135deg,#F8F6FF 0%,#EDE8FF 50%,#F0EAFF 100%)",fontFamily:"'Nunito','DM Sans','Inter',system-ui,sans-serif",position:"relative",zIndex:1}}>
      <div style={{textAlign:"center",padding:"48px 40px",borderRadius:28,background:dk?"rgba(40,38,60,0.85)":"white",boxShadow:dk?"0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)":"0 20px 60px rgba(123,94,232,0.12), 0 4px 16px rgba(0,0,0,0.04)",maxWidth:360,width:"90%",animation:shake?"shake 0.5s ease":"none"}}>
        <div style={{width:72,height:72,borderRadius:20,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:"0 8px 24px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>
          <span style={{fontSize:36}}>🔑</span>
        </div>
        <h1 style={{fontSize:24,fontWeight:800,color:dk?"#E8E6F0":"#2D2B55",marginBottom:6,fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>LingoVerse</h1>
        <p style={{fontSize:13,color:dk?"#9590B0":"#8B85A8",marginBottom:28,lineHeight:1.5}}>Early access — enter developer code</p>
        <input type="password" value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSubmit()} placeholder="Access code" autoFocus style={{width:"100%",padding:"14px 18px",borderRadius:14,border:error?`2px solid #F56565`:`2px solid ${dk?"rgba(123,94,232,0.3)":"#E0D8F8"}`,background:dk?"rgba(30,28,50,0.6)":"#FAFAFE",fontSize:16,fontFamily:"inherit",outline:"none",textAlign:"center",letterSpacing:8,color:dk?"#E8E6F0":"#2D2B55",transition:"border .2s",boxSizing:"border-box"}}/>
        {error&&<p style={{fontSize:12,color:"#F56565",marginTop:8,fontWeight:600}}>Invalid code</p>}
        <button onClick={handleSubmit} style={{marginTop:20,width:"100%",padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)",transition:"transform .1s",fontFamily:"inherit"}}>Enter</button>
      </div>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}`}</style>
    </div>
  );
}

// ── Verumius markdown renderer ──
// Renders **bold**, *italic*, - bullet lines, blank-line spacing
function renderVrText(text){
  if(!text)return text;
  const parseInline=(str)=>{
    const out=[];let rem=str;let k=0;
    const rx=/\*\*(.+?)\*\*|\*(.+?)\*/g;let m;let last=0;
    while((m=rx.exec(rem))!==null){
      if(m.index>last)out.push(rem.slice(last,m.index));
      if(m[1]!==undefined)out.push(<strong key={k++} style={{fontWeight:800}}>{m[1]}</strong>);
      else out.push(<em key={k++} style={{fontStyle:"italic"}}>{m[2]}</em>);
      last=m.index+m[0].length;
    }
    if(last<rem.length)out.push(rem.slice(last));
    return out.length===0?str:out;
  };
  const lines=text.split('\n');
  const result=[];let bullets=[];let rk=0;
  const flushBullets=()=>{
    if(!bullets.length)return;
    result.push(<ul key={rk++} style={{margin:"5px 0",padding:0,display:"flex",flexDirection:"column",gap:3}}>
      {bullets.map((b,i)=><li key={i} style={{display:"flex",gap:7,listStyle:"none",lineHeight:1.5}}>
        <span style={{color:"#9B7AE8",fontWeight:900,flexShrink:0,fontSize:11,marginTop:2}}>●</span>
        <span>{parseInline(b)}</span>
      </li>)}
    </ul>);
    bullets=[];
  };
  for(const line of lines){
    const t=line.trim();
    if(/^[-•]\s/.test(t)){bullets.push(t.slice(2).trim());}
    else if(/^\d+\.\s/.test(t)){bullets.push(t.replace(/^\d+\.\s/,'').trim());}
    else{flushBullets();if(t){result.push(<div key={rk++} style={{lineHeight:1.6}}>{parseInline(t)}</div>);}else if(result.length){result.push(<div key={rk++} style={{height:4}}/>);}}
  }
  flushBullets();
  return result;
}

export default function App(){
  const [devAccess,setDevAccess]=useState(()=>{try{return sessionStorage.getItem("lingoverse:dev")==="1";}catch(e){return false;}});
  const [ob,setOb]=useState(false);
  const [lang,setLang]=useState("nl");
  const [baseLang,setBaseLang]=useState("en");
  const [authed,setAuthed]=useState(false);
  const [profile,setProfile]=useState(null);
  const [quizLog,setQuizLog]=useState([]);
  const logQuizAttempt=(entry)=>setQuizLog(prev=>[...prev,{...entry,ts:Date.now()}]);
  const [flags,setFlags]=useState([]);
  const addFlag=(lessonId,stepIndex,stepData,reason,detail)=>{
    const f={lang,lessonId,stepIndex,stepData:JSON.stringify(stepData),reason,detail,ts:Date.now()};
    setFlags(prev=>[...prev,f]);
  }; // Default to Dutch now!
  const [page,setPage]=useState("home");
  const [jumpTo,setJumpTo]=useState(null); // {unit,lesson} — triggers LearnPage to open that lesson directly
  const [toast,setToast]=useState(null);
  const [pops,setPops]=useState([]);
  const [user,setUser]=useState({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set()});
  const [showResetModal,setShowResetModal]=useState(false);
  const [darkMode,setDarkMode]=useState(false);
  const [cloudMode,setCloudMode]=useState(()=>{try{return localStorage.getItem("vl_cloud_mode")==="true";}catch(e){return false;}});
  const [showSearch,setShowSearch]=useState(false);
  const [searchQuery,setSearchQuery]=useState("");
  const [previewResult,setPreviewResult]=useState(null);
  const [showTools,setShowTools]=useState(false);
  const [showVerumius,setShowVerumius]=useState(false);
  const [vMsgs,setVMsgs]=useState([]); // greeting is hardcoded UI, not sent to API
  const [vInput,setVInput]=useState("");
  const [vLoading,setVLoading]=useState(false);
  const vScrollRef=useRef(null);
  const vrPanelRef=useRef(null);
  const vrDragInfo=useRef(null);
  const [vrPos,setVrPos]=useState(null);
  const [vrSize,setVrSize]=useState({width:316,height:480});
  const [vrFullscreen,setVrFullscreen]=useState(false);
  const [vrDragging,setVrDragging]=useState(false);
  const [vrExiting,setVrExiting]=useState(false);
  const [vrSource,setVrSource]=useState("fab"); // "fab"=side panel small, "nav"=topnav fullscreen
  useEffect(()=>{const t=setTimeout(()=>{if(vScrollRef.current)vScrollRef.current.scrollTo({top:vScrollRef.current.scrollHeight,behavior:"smooth"});},55);return()=>clearTimeout(t);},[vMsgs,vLoading]);
  const onVrHdrMouseDown=(e)=>{
    if(vrFullscreen||e.target.closest('.vr-hdr-btns'))return;
    e.preventDefault();
    const panel=vrPanelRef.current;if(!panel)return;
    const rect=panel.getBoundingClientRect();
    vrDragInfo.current={startMouseX:e.clientX,startMouseY:e.clientY,startPanelX:rect.left,startPanelY:rect.top};
    setVrDragging(true);
    const onMove=(e2)=>{
      const d=vrDragInfo.current;if(!d)return;
      const nx=d.startPanelX+(e2.clientX-d.startMouseX);
      const ny=d.startPanelY+(e2.clientY-d.startMouseY);
      const p=vrPanelRef.current;
      if(p){p.style.left=nx+'px';p.style.top=ny+'px';p.style.right='auto';p.style.bottom='auto';p.style.transition='none';}
      d.lastX=nx;d.lastY=ny;
    };
    const onUp=()=>{
      const d=vrDragInfo.current;
      if(d){setVrPos({x:d.lastX??d.startPanelX,y:d.lastY??d.startPanelY});const p=vrPanelRef.current;if(p)p.style.transition='';}
      vrDragInfo.current=null;setVrDragging(false);
      window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseup',onUp);
    };
    window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
  };
  const goVrFullscreen=()=>{
    const panel=vrPanelRef.current;if(!panel)return;
    const rect=panel.getBoundingClientRect();
    setVrPos({x:rect.left,y:rect.top});
    requestAnimationFrame(()=>requestAnimationFrame(()=>setVrFullscreen(true)));
  };
  const exitVrFullscreen=()=>{
    // Snap to final position at target size — no width/height transition (avoids text reflow).
    // Then run bubblegum inflate animation on transform:scale only.
    const x=window.innerWidth-70-vrSize.width;
    const y=window.innerHeight-24-vrSize.height;
    setVrPos({x,y});
    setVrFullscreen(false);
    setVrExiting(true);
    setTimeout(()=>{setVrExiting(false);setVrPos(null);},580);
  };
  const onVrCornerMouseDown=(corner,e)=>{
    e.preventDefault();e.stopPropagation();
    if(vrFullscreen)return;
    const panel=vrPanelRef.current;if(!panel)return;
    const rect=panel.getBoundingClientRect();
    const sx=e.clientX,sy=e.clientY,sw=rect.width,sh=rect.height,sl=rect.left,st=rect.top;
    const onMove=(ev)=>{
      const dx=ev.clientX-sx,dy=ev.clientY-sy;
      let nw=sw,nh=sh,nl=sl,nt=st;
      if(corner==='se'){nw=sw+dx;nh=sh+dy;}
      else if(corner==='sw'){nw=sw-dx;nh=sh+dy;nl=sl+dx;}
      else if(corner==='ne'){nw=sw+dx;nh=sh-dy;nt=st+dy;}
      else{nw=sw-dx;nh=sh-dy;nl=sl+dx;nt=st+dy;}
      nw=Math.max(260,Math.min(680,nw));
      nh=Math.max(320,Math.min(window.innerHeight*0.9,nh));
      const p=panel;
      p.style.transition='none';p.style.width=nw+'px';p.style.height=nh+'px';
      p.style.left=nl+'px';p.style.top=nt+'px';p.style.right='auto';p.style.bottom='auto';
    };
    const onUp=()=>{
      window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseup',onUp);
      const r=panel.getBoundingClientRect();
      setVrSize({width:r.width,height:r.height});
      setVrPos({x:r.left,y:r.top});
      panel.style.transition='';
    };
    window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
  };
  const onVrEdgePointerDown=(edge,e)=>{
    e.preventDefault();e.stopPropagation();
    if(vrFullscreen)return;
    const panel=vrPanelRef.current;if(!panel)return;
    const rect=panel.getBoundingClientRect();
    const sx=e.touches?e.touches[0].clientX:e.clientX;
    const sy=e.touches?e.touches[0].clientY:e.clientY;
    const sw=rect.width,sh=rect.height,sl=rect.left,st=rect.top;
    const onMove=(ev)=>{
      const cx=ev.touches?ev.touches[0].clientX:ev.clientX;
      const cy=ev.touches?ev.touches[0].clientY:ev.clientY;
      const dx=cx-sx,dy=cy-sy;
      let nw=sw,nh=sh,nl=sl,nt=st;
      if(edge==='s')nh=sh+dy;
      else if(edge==='n'){nh=sh-dy;nt=st+dy;}
      else if(edge==='e')nw=sw+dx;
      else{nw=sw-dx;nl=sl+dx;}
      nw=Math.max(260,Math.min(680,nw));
      nh=Math.max(320,Math.min(window.innerHeight*0.9,nh));
      panel.style.transition='none';panel.style.width=nw+'px';panel.style.height=nh+'px';
      panel.style.left=nl+'px';panel.style.top=nt+'px';panel.style.right='auto';panel.style.bottom='auto';
    };
    const onUp=()=>{
      window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseup',onUp);
      window.removeEventListener('touchmove',onMove);window.removeEventListener('touchend',onUp);
      const r=panel.getBoundingClientRect();
      setVrSize({width:r.width,height:r.height});setVrPos({x:r.left,y:r.top});panel.style.transition='';
    };
    window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
    window.addEventListener('touchmove',onMove,{passive:false});window.addEventListener('touchend',onUp);
  };
  const sendToVerumius=async(text)=>{
    const content=(text||vInput).trim();
    if(!content||vLoading)return;
    const msg={role:"user",content};
    const next=[...vMsgs,msg];
    setVMsgs(next);if(!text)setVInput("");setVLoading(true);
    try{
      const ctx={page,lang,langName:LANG_META[lang]?.name||lang,unitN:jumpTo?.unit?.n,unitTitle:jumpTo?.unit?.title,lessonTitle:jumpTo?.lesson?.title,currentStep:window.vr_step||null};
      const tgtName=LANG_META[lang]?.name||lang;
      // Language practice primer — injected into API only, never shown in UI
      const primer=[
        {role:"user",content:`[Tutor setup: The user is actively learning ${tgtName}. From now on, weave ${tgtName} naturally into every response — use ${tgtName} sentences, give corrections in ${tgtName}, and always translate any ${tgtName} you write. Aim for roughly 40% ${tgtName} in your replies, scaling up if the user writes in ${tgtName}. Keep it natural, never robotic.]`},
        {role:"assistant",content:`Understood! I'll make sure to practice ${tgtName} with you throughout our conversation.`}
      ];
      const r=await fetch("https://verumlingua-ai.xqkv62nnqq.workers.dev",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[...primer,...next],context:ctx})});
      const d=await r.json();
      const reply=d.content?.[0]?.text||(d.error?.message?`Error: ${d.error.message}`:"Sorry, something went wrong.");
      setVMsgs(m=>[...m,{role:"assistant",content:reply}]);
    }catch(err){setVMsgs(m=>[...m,{role:"assistant",content:`Connection error: ${err.message}`}]);}
    setVLoading(false);
  };

  // ── Dark mode: set class synchronously so children read correct dk ──
  document.documentElement.classList.toggle("dark",darkMode);
  document.documentElement.classList.toggle("cloud-mode",cloudMode);

  // ── Ctrl+N: toggle dark mode ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="n"){e.preventDefault();setDarkMode(d=>!d);}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[]);

  // ── Ctrl+F: open/close curriculum search ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="f"&&!document.querySelector("[data-kb-owner]")){
        e.preventDefault();
        setShowSearch(s=>{if(s){setSearchQuery("");return false;}return true;});
      }
      if(e.key==="Escape"&&showSearch){setShowSearch(false);setSearchQuery("");}
      if(e.key==="Escape"&&showVerumius){setShowVerumius(false);}
    };
    window.addEventListener("keydown",handler);
    return()=>window.removeEventListener("keydown",handler);
  },[showSearch,showVerumius]);

  // ── Close search float on click outside the panel or its toggle button ──
  useEffect(()=>{
    if(!showSearch)return;
    const handler=(e)=>{
      if(!e.target.closest('.sf-panel')&&!e.target.closest('[data-search-btn]')){
        setShowSearch(false);setSearchQuery("");
      }
    };
    document.addEventListener('mousedown',handler);
    return()=>document.removeEventListener('mousedown',handler);
  },[showSearch]);

  // ── Global arrow-key navigation (Decision 11) ──
  // Active on all pages. data-kb-owner markers disable during LessonEngine.
  useFocusNav(null,null,{enabled:true});

  // ── Backspace: back to home (only when no component handles its own) ──
  useEffect(()=>{
    const handler=(e)=>{
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      if(document.querySelector("[data-kb-owner]"))return;
      if(page!=="home"){e.preventDefault();UISounds.click();setPage("home");}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[page]);

  // ── Global hover tick — one tick per interactive area (Decision 11) ──
  useEffect(()=>{
    if(!UI_SOUNDS_ENABLED)return;
    const SEL="button,a,[role=button],select,.card,.btn,.ach-card,.topnav-item,.topnav-logo-wrap,.lang-card";
    let lastEl=null;
    const handler=(e)=>{
      const el=e.target?.closest?.(SEL);
      if(!el||el===lastEl)return;
      lastEl=el;
      UISounds.tick();
    };
    const resetHandler=()=>{lastEl=null;};
    document.addEventListener("mouseover",handler,{passive:true});
    document.addEventListener("mouseleave",resetHandler,{passive:true});
    return ()=>{document.removeEventListener("mouseover",handler);document.removeEventListener("mouseleave",resetHandler);};
  },[]);

  // ── Ctrl+D: Developer reset all progress ──
  useEffect(()=>{
    const handler=(e)=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="d"){e.preventDefault();setShowResetModal(true);}
      if(showResetModal&&e.key==="y"){
        setUser({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set(),progress:{}});
        setFlags([]);setQuizLog([]);setShowResetModal(false);
        showToast("All progress reset!","🗑️");
      }
      if(showResetModal&&e.key==="n"){setShowResetModal(false);}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[showResetModal]);

  const showToast=(m,i)=>setToast({message:m,icon:i,key:Date.now()});
  const unlock=id=>{if(user.achs.includes(id))return;const a=ACHS.find(x=>x.id===id);if(!a)return;setUser(u=>({...u,achs:[...u.achs,id],xp:u.xp+a.xp}));showToast(`Achievement: ${a.name}!`,a.icon);};
  const addXp=amt=>{setUser(u=>({...u,xp:u.xp+amt}));const p={amount:amt,x:120+Math.random()*180,y:90+Math.random()*80,key:Date.now()};setPops(pp=>[...pp,p]);setTimeout(()=>setPops(pp=>pp.filter(x=>x.key!==p.key)),1200);};
  const learnWord=w=>setUser(u=>{const s=new Set(u.lw);s.add(w);return{...u,lw:s,wl:s.size};});
  const addChat=()=>setUser(u=>({...u,cm:u.cm+1}));

  useEffect(()=>{
    if(user.wl>=1)unlock("first_word");
    if(user.wl>=10)unlock("vocab_10");
    if(user.cm>=5)unlock("chat_5");
    if(user.streak>=3)unlock("streak_3");
  },[user.wl,user.cm,user.streak]);

  useEffect(()=>{
    setUser(u=>{const ls=new Set(u.ls);ls.add(lang);if(ls.size>=3&&!u.achs.includes("polyglot"))setTimeout(()=>unlock("polyglot"),500);return{...u,ls};});
  },[lang]);

  // D85: onboard auto-creates guest profile, skipping auth screen entirely
  const onboard=(base,target)=>{setBaseLang(base);setLang(target);setOb(true);setProfile({displayName:"Learner",avatar:"🧑‍🚀",level:"beginner",dailyGoal:15,createdAt:new Date().toISOString()});setAuthed(true);showToast(`${t("ob_start_learning",base)} ${LANGUAGES.find(l=>l.code===target)?.name}!`,"🚀");};

  // ── PERSISTENCE ──
  useEffect(()=>{
    (async()=>{
      try{
        const r=await window.storage?.get("lingoverse:state");
        if(r?.value){
          const s=JSON.parse(r.value);
          if(s.ob) setOb(true);
          if(s.authed) setAuthed(true);
          if(s.profile) setProfile(s.profile);
          if(s.lang) setLang(s.lang);
          if(s.baseLang) setBaseLang(s.baseLang);
          if(s.user) setUser(u=>({...u,...s.user,lw:new Set(s.user.lw||[]),ls:new Set(s.user.ls||[])}));
          if(s.flags) setFlags(s.flags);
        }
      }catch(e){}
    })();
  },[]);
  useEffect(()=>{
    const save=async()=>{
      try{
        await window.storage?.set("lingoverse:state",JSON.stringify({
          ob,authed,profile,lang,baseLang,
          user:{...user,lw:[...user.lw],ls:[...user.ls]},flags
        }));
      }catch(e){}
    };
    if(ob) save();
  },[ob,authed,profile,lang,baseLang,user,flags]);

  // Simplified NavBar — 3 tabs only: Profile | Home | AI Chat
  const NavBar=()=>{
    const L=LANGUAGES.find(l=>l.code===lang);
    return(
      <div className="topnav">
        <div className="topnav-items" style={{justifyContent:"center",gap:0,flex:1}}>
          <div className={`topnav-item ${page==="profile"?"active":""}`} onClick={()=>setPage("profile")} style={{flex:1,justifyContent:"center"}}>
            <span className="icon"><AppIcon name="avatar" size={28}/></span><span>{t("nav_profile",baseLang)}</span>
          </div>
          <div className="topnav-logo-wrap" onClick={()=>setPage("home")}>
            <span style={{marginRight:6,display:"inline-flex"}}><CountryFlag code={lang} size={22}/></span>
            <VLLogo size={26} glow={darkMode}/><span className="topnav-logo" style={{fontSize:20,marginLeft:6}}>VerumLingua</span>
          </div>
          <div className={`topnav-item ${showVerumius&&vrFullscreen?"active":""}`} onClick={()=>{if(showVerumius){setVrFullscreen(false);setVrPos(null);setShowVerumius(false);}else{setVrSource("nav");setVrPos(null);setVrFullscreen(true);setShowVerumius(true);}}} style={{flex:1,justifyContent:"center"}}>
            <span className="icon"><AppIcon name="robot" size={28}/></span><span>{t("nav_chat",baseLang)}</span>
          </div>
        </div>
      </div>
    );
  };

  return(
    <>
      <style>{CSS}</style>
      <NebulaBackground/>
      {/* Verumius chat panel */}
      {showVerumius&&<div className={"vr-wrap"+(vrFullscreen?" vr-fs":"")} ref={vrPanelRef} style={vrFullscreen?{position:"fixed",top:64,left:0,right:"auto",bottom:"auto",width:"100vw",height:"calc(100dvh - 64px)",maxHeight:"calc(100dvh - 64px)",borderRadius:0,transition:"all 0.52s cubic-bezier(0.4,0,0.2,1)"}:{width:vrSize.width,height:vrSize.height,...(vrPos?{position:"fixed",top:vrPos.y,left:vrPos.x,right:"auto",bottom:"auto"}:{}),transition:vrDragging||vrExiting?"none":"all 0.42s cubic-bezier(0.34,1.56,0.64,1)",animation:vrExiting?"vr-inflate 0.46s cubic-bezier(0,0,0.3,1) forwards":""}}>
        <div className="vr-hdr" onMouseDown={onVrHdrMouseDown} style={{cursor:vrDragging?"grabbing":"grab"}}>
          <AppIcon name="robot" size={26} style={{position:"relative",zIndex:1,flexShrink:0,pointerEvents:"none"}}/>
          <div className="vr-hdr-info" style={{pointerEvents:"none"}}>
            <div className="vr-hdr-name">Verumius</div>
            <div className="vr-hdr-sub">VerumLingua AI tutor</div>
          </div>
          <div className="vr-hdr-btns">
            <button className="vr-hbtn" title="Save to profile (coming soon)">＋</button>
            <button className="vr-hbtn" title={vrFullscreen?"Minimize":"Fullscreen"} onClick={vrFullscreen?exitVrFullscreen:goVrFullscreen}>
              {vrFullscreen
                ?<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 1L5 5L1 5M9 1L9 5L13 5M5 13L5 9L1 9M9 13L9 9L13 9"/></svg>
                :<svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 5L1 1L5 1M9 1L13 1L13 5M1 9L1 13L5 13M9 13L13 13L13 9"/></svg>}
            </button>
            <button className="vr-hbtn" title="New conversation" onClick={()=>{setVMsgs([]);setVInput("");}}>↺</button>
            <button className="vr-xbtn" onClick={()=>{setVrFullscreen(false);setVrPos(null);setShowVerumius(false);}}>✕</button>
          </div>
        </div>
        {/* Corner resize handles — hidden in fullscreen */}
        <div className="vr-rz vr-rz-se" onMouseDown={e=>onVrCornerMouseDown('se',e)}/>
        <div className="vr-rz vr-rz-sw" onMouseDown={e=>onVrCornerMouseDown('sw',e)}/>
        <div className="vr-rz vr-rz-ne" onMouseDown={e=>onVrCornerMouseDown('ne',e)}/>
        <div className="vr-rz vr-rz-nw" onMouseDown={e=>onVrCornerMouseDown('nw',e)}/>
        {/* Edge resize zones — drag or touch any edge to resize */}
        <div className="vr-edge vr-edge-n" onMouseDown={e=>onVrEdgePointerDown('n',e)} onTouchStart={e=>onVrEdgePointerDown('n',e)}/>
        <div className="vr-edge vr-edge-s" onMouseDown={e=>onVrEdgePointerDown('s',e)} onTouchStart={e=>onVrEdgePointerDown('s',e)}/>
        <div className="vr-edge vr-edge-w" onMouseDown={e=>onVrEdgePointerDown('w',e)} onTouchStart={e=>onVrEdgePointerDown('w',e)}/>
        <div className="vr-edge vr-edge-e" onMouseDown={e=>onVrEdgePointerDown('e',e)} onTouchStart={e=>onVrEdgePointerDown('e',e)}/>
        <div className="vr-msgs" ref={vScrollRef}>
          <div className="vr-ai">Hey, I'm Verumius 😊 What do you need?</div>
          {vMsgs.length===0&&vrSource==="fab"&&<div className="vr-qr">
            <button className="vr-qr-btn" onClick={()=>sendToVerumius("I have a question about something on this screen.")}>Ask about this screen</button>
            <button className="vr-qr-btn" onClick={()=>sendToVerumius("I have a language question.")}>Ask any question</button>
          </div>}
          {vMsgs.map((m,i)=><div key={i} className={m.role==="assistant"?"vr-ai":"vr-user"}>{m.role==="assistant"?renderVrText(m.content):m.content}</div>)}
          {vLoading&&<div className="vr-typing"><div className="vr-dot"/><div className="vr-dot"/><div className="vr-dot"/></div>}
        </div>
        <div className="vr-inp-bar">
          <input className="vr-inp" value={vInput} onChange={e=>setVInput(e.target.value)}
            onKeyDown={e=>{
              if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendToVerumius();}
              if(e.key==="Escape"){e.preventDefault();setShowVerumius(false);}
            }}
            placeholder="Ask Verumius…"/>
          <button className="vr-send" disabled={!vInput.trim()||vLoading} onClick={sendToVerumius}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="white"><path d="M0.5 12.5L6.5 0.5L12.5 12.5L6.5 9L0.5 12.5Z"/></svg>
          </button>
        </div>
      </div>}
      {/* File-cabinet tools tab — dark mode + search + Verumius */}
      <div className="vl-tab">
        {showTools&&<div className="vl-panel">
          <button className={"vl-ibtn"+(darkMode?" on":"")} title="Dark mode (Ctrl+N)" onClick={()=>setDarkMode(d=>!d)}>
            <span style={{fontSize:14,lineHeight:1,color:darkMode?"#C0AEFF":"#777788"}}>{darkMode?"☀":"☽"}</span>
          </button>
          <button className={"vl-ibtn"+(cloudMode?" on":"")} title="Nebula mode (dark mode overlay)" onClick={()=>{setCloudMode(c=>{const nv=!c;try{localStorage.setItem("vl_cloud_mode",String(nv));}catch(e){}return nv;});}}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke={cloudMode?"#7B5EE8":(darkMode?"#D0D0E2":"#777788")} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 11.5a3 3 0 0 1-.4-5.97 4.5 4.5 0 0 1 8.77-1.15A3.5 3.5 0 0 1 13.5 11.5H2.5z"/><path d="M5 11.5v1.5M8 11.5v2.5M11 11.5v1.5" strokeWidth="1.5" opacity="0.5"/></svg>
          </button>
          <button data-search-btn className={"vl-ibtn"+(showSearch?" on":"")} title="Search (Ctrl+F)" onClick={()=>setShowSearch(s=>{if(s){setSearchQuery("");return false;}return true;})}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke={showSearch?"#7B5EE8":(darkMode?"#D0D0E2":"#777788")} strokeWidth="2.2" strokeLinecap="round"><circle cx="6.5" cy="6.5" r="4.2"/><line x1="9.8" y1="9.8" x2="13.2" y2="13.2"/></svg>
          </button>
          <button className={"vl-ibtn"+(showVerumius?" on":"")} title="Ask Verumius" onClick={()=>{setVrSource("fab");setVrFullscreen(false);setShowVerumius(v=>!v);}}>
            <AppIcon name="robot" size={20}/>
          </button>
        </div>}
        <div className="vl-tab-handle" onClick={()=>setShowTools(t=>!t)}>
          <div className="vl-tab-dot"/><div className="vl-tab-dot"/><div className="vl-tab-dot"/>
        </div>
      </div>
      {/* Ctrl+D Reset Modal */}
      {showResetModal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={()=>setShowResetModal(false)}>
        <div onClick={e=>e.stopPropagation()} style={{background:"var(--card-bg)",borderRadius:24,padding:"36px 40px",maxWidth:360,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
          <div style={{marginBottom:12}}><AppIcon name="trash_bin" size={52}/></div>
          <h2 style={{fontSize:20,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>Reset All Progress?</h2>
          <p style={{fontSize:14,color:"var(--gray-500)",marginBottom:24,lineHeight:1.5}}>This will erase all XP, completed lessons, achievements, flags, and quiz history. This cannot be undone.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={()=>setShowResetModal(false)} style={{padding:"12px 28px",borderRadius:14,border:"2px solid var(--gray-200)",background:"var(--card-bg)",fontSize:15,fontWeight:700,cursor:"pointer",color:"var(--gray-600)"}}>N — Cancel</button>
            <button onClick={()=>{setUser({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set(),progress:{}});setFlags([]);setQuizLog([]);setShowResetModal(false);showToast("All progress reset!","🗑️");}} style={{padding:"12px 28px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#E85D75,#D4394B)",fontSize:15,fontWeight:700,cursor:"pointer",color:"white"}}>Y — Reset</button>
          </div>
          <p style={{fontSize:11,color:"var(--gray-300)",marginTop:16}}>Press Y to confirm, N to cancel</p>
        </div>
      </div>}
      {/* Curriculum Search Float Panel (D113) */}
      {showSearch&&(()=>{
        const SL={teach:"word card",tip:"tip",mc:"multiple choice",fb:"fill blank",drag_fill:"drag fill",match:"match",verb_table:"verb table",tr:"translation",intro:"intro"};
        const q=searchQuery.trim();
        const nonLatin=/[\u1100-\u11FF\uAC00-\uD7AF\u4E00-\u9FFF\u3040-\u30FF\u0600-\u06FF\u0400-\u04FF]/.test(q);
        const minLen=nonLatin?1:2;
        const results=q.length>=minLen?searchUnits(q,lang):[];
        const snip=(text)=>{
          if(!text||!q)return"";
          const idx=text.toLowerCase().indexOf(q.toLowerCase());
          if(idx<0)return text.slice(0,55)+(text.length>55?"…":"");
          const s=Math.max(0,idx-18),e=Math.min(text.length,idx+q.length+36);
          return(s>0?"…":"")+text.slice(s,e)+(e<text.length?"…":"");
        };
        return(
          <div className="sf-panel">
            <div className="sf-hdr">
              <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke="rgba(130,115,175,0.65)" strokeWidth="2.3" strokeLinecap="round" style={{flexShrink:0}}><circle cx="6.5" cy="6.5" r="4.2"/><line x1="9.8" y1="9.8" x2="13.2" y2="13.2"/></svg>
              <input className="sf-inp" autoFocus placeholder="Search any word or phrase…" value={searchQuery}
                onChange={e=>setSearchQuery(e.target.value)}
                onKeyDown={e=>{if(e.key==="Escape"){setShowSearch(false);setSearchQuery("");}}}
              />
              {searchQuery&&<span className="sf-clr" onClick={()=>setSearchQuery("")}>✕</span>}
            </div>
            {q.length>=minLen&&<div className="sf-cnt">{results.length===0?"No results":results.length>=80?"80+ — refine to narrow":`${results.length} result${results.length===1?"":"s"}`}</div>}
            <div className="sf-list">
              {q.length<minLen&&<div className="sf-empty"/>}
              {q.length>=minLen&&results.length===0&&<div className="sf-empty">No results for "{q}"</div>}
              {results.map((r,i)=>{
                const lNum=(r.unit.lessons||[]).findIndex(l=>l.id===r.lesson.id)+1;
                const blk={display:"inline-flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg,#9B7AE8 0%,#7B5EE8 55%,#6040C8 100%)",color:"#fff",borderRadius:5,fontSize:8,fontWeight:900,padding:"0 5px",height:15,letterSpacing:.3,flexShrink:0,boxShadow:"0 2px 5px rgba(123,94,232,0.28),inset 0 1px 0 rgba(255,255,255,0.38)"};
                const ht=r.hitText?_findHit(r.hitText,r.normQ):null;
                return(
                  <div key={i} className="sf-row" onClick={()=>setPreviewResult(r)} style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:4}}>
                        <span style={blk}>{(r.unit.level||"").slice(0,2)}</span>
                        <span style={blk}>U{r.unit.n}</span>
                        <span style={blk}>L{lNum>0?lNum:"?"}</span>
                        <span style={blk}>S{r.si+1}</span>
                      </div>
                      <div className="sf-ttl">{r.lesson.title}</div>
                    </div>
                    {ht&&<div style={{flexShrink:0,maxWidth:"52%",textAlign:"right",lineHeight:1.2}}>
                      <span style={{fontSize:10,fontWeight:600,color:"rgba(123,94,232,0.45)"}}>{ht.pre}</span>
                      <span style={{fontSize:14,fontWeight:800,color:"#7B5EE8"}}>{ht.match}</span>
                      <span style={{fontSize:10,fontWeight:600,color:"rgba(123,94,232,0.45)"}}>{ht.post}</span>
                    </div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
      {/* Step Preview Modal — renders the actual card in isolation */}
      {previewResult&&(()=>{
        const {unit,lesson,si,step:s}=previewResult;
        const SL={teach:"word card",tip:"tip",mc:"multiple choice",fb:"fill blank",drag_fill:"drag fill",match:"match",verb_table:"verb table",tr:"translation",intro:"intro"};
        const renderCard=()=>{
          const dk=darkMode;
          // Shared compound bubble — matches actual quiz question card
          const qBubSt={background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22)0%,rgba(100,80,200,0.14)40%,rgba(80,60,180,0.08)100%)":"linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%)",borderRadius:22,padding:"20px 22px",marginBottom:14,textAlign:"center",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const qArc=<div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>;
          if(s.type==="teach"){
            const tLang=unit.lang||"nl";
            const art=getArticle(s.nl,tLang);
            const c=ARTICLE_COLORS[art]||{pill:"rgba(123,94,232,0.1)",pillText:"#7B5EE8"};
            const kind=s.kind||"word";
            const lbl=kind==="letter"?"NEW LETTER":kind==="info"?"CONCEPT":kind==="idiom"?"NEW EXPRESSION":kind==="grammar"?"GRAMMAR PATTERN":kind==="phrase"?"KEY PHRASE":"NEW WORD";
            const isScript=/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(s.nl||"");
            const artWord=art!=="none"&&!isScript?s.nl.split(/\s(.+)/):null;
            const nlSz=kind==="letter"?64:isScript?48:36;
            const nlColor=isScript?"#7B5EE8":"var(--gray-800)";
            const isDialEx=/[AB]:\s/.test(s.example||"");
            const capStr=t=>t?t.charAt(0).toUpperCase()+t.slice(1):t;
            const bubSt={
              background:dk
                ?"linear-gradient(180deg,rgba(123,94,232,0.22)0%,rgba(100,80,200,0.14)40%,rgba(80,60,180,0.08)100%)"
                :"linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%)",
              borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",
              border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
              boxShadow:dk
                ?"0 6px 20px rgba(0,0,0,0.3),0 0 14px rgba(123,94,232,0.2),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)"
                :"0 6px 24px rgba(123,94,232,0.1),0 0 12px rgba(180,165,240,0.15),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
            const gArc={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",
              background:dk
                ?"linear-gradient(180deg,rgba(255,255,255,0.07)0%,rgba(255,255,255,0.01)60%,transparent 100%)"
                :"linear-gradient(180deg,rgba(255,255,255,0.55)0%,rgba(255,255,255,0.1)60%,transparent 100%)",
              pointerEvents:"none",zIndex:1};
            return(
              <>
                {/* Main word card */}
                <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:"4px solid #7B5EE8",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:14}}>
                  {/* Label strip */}
                  <div style={{background:"linear-gradient(135deg,rgba(123,94,232,0.06),rgba(46,205,167,0.04))",padding:"10px 18px 8px"}}>
                    <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"#7B5EE8"}}>{lbl}</span>
                  </div>
                  {/* Word — article ALWAYS colored, no pill */}
                  <div style={{textAlign:"center",padding:"14px 24px 6px"}}>
                    <div style={{marginBottom:4}}>
                      {artWord&&artWord[1]?(
                        <span style={{fontSize:nlSz,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                          <span style={{color:c.pillText}}>{capStr(artWord[0])}</span>{" "}
                          <span style={{color:c.pillText}}>{artWord[1]}</span>
                        </span>
                      ):(
                        <span style={{fontSize:nlSz,fontWeight:800,color:nlColor,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{capStr(s.nl||s.trg)}</span>
                      )}
                    </div>
                  </div>
                  {/* Translation — teal */}
                  <div style={{textAlign:"center",paddingBottom:14}}>
                    <span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{capStr(s.en)}</span>
                  </div>
                </div>
                {/* Example — dialogue bubbles or single bubble */}
                {s.example&&(()=>{
                  const ex=s.example;const exEn=s.exampleEn||"";
                  if(isDialEx){
                    const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);
                    const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);
                    return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
                      {turns.map((turn,ti)=>{
                        const isA=turn.trim().startsWith("A:");
                        const content=turn.replace(/^[AB]:\s*/,"").trim();
                        const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();
                        return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:28,paddingRight:isA?28:0}}>
                          <div style={{...bubSt,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}>
                            <div style={gArc}/>
                            <div style={{position:"relative",zIndex:2}}>
                              <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4}}>{content}</div>
                              {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                            </div>
                          </div>
                        </div>;
                      })}
                    </div>;
                  }
                  return <div style={{...bubSt,marginBottom:14}}>
                    <div style={gArc}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5}}>{ex}</div>
                      {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}
                    </div>
                  </div>;
                })()}
                {/* Note card */}
                {s.note&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:10}}>
                  {s.note.split(/\\n|\n/).map((line,li)=>{
                    if(!line.trim()) return <div key={li} style={{height:6}}/>;
                    if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{line.slice(1).trim()}</span></div>;
                    if(line.startsWith("⚡")||line.startsWith("⚠️")) return <div key={li} style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,padding:"3px 0",lineHeight:1.6}}>{line}</div>;
                    return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{line}</div>;
                  })}
                </div>}
              </>
            );
          }
          if(s.type==="tip") return(
            <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}>
              <div style={{padding:"16px 22px 10px"}}>
                <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:s.title?10:0,fontWeight:700,display:"flex",alignItems:"center",gap:6}}>💡 Good to know</div>
                {s.title&&<h3 style={{fontSize:17,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',system-ui,sans-serif",margin:0,lineHeight:1.35}}>{s.title}</h3>}
              </div>
              {s.text&&<div style={{padding:"0 22px 20px",fontSize:14,color:"var(--gray-600)",lineHeight:1.65,whiteSpace:"pre-wrap",fontFamily:"'Nunito',system-ui,sans-serif"}}>{s.text}</div>}
            </div>
          );
          if(s.type==="mc") return(
            <>
              <div style={{...qBubSt}}>
                {qArc}
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito',system-ui,sans-serif"}}>Choose the correct answer</div>
                  <div style={{fontSize:16,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito',system-ui,sans-serif",color:"var(--gray-800)"}}>{s.q}</div>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr",gap:8,marginBottom:8}}>
                {(s.opts||[]).map((o,i)=><div key={i} className={`quiz-opt${o===s.ans?" correct":""}`} style={{pointerEvents:"none",cursor:"default"}}><div className="quiz-letter">{"ABCD"[i]}</div>{o}</div>)}
              </div>
            </>
          );
          if(s.type==="fb"||s.type==="drag_fill"){
            const blanks=s.blanks||{1:Array.isArray(s.a)?s.a[0]:(s.a||"…")};
            let tpl=s.s||"";
            Object.keys(blanks).forEach(k=>{tpl=tpl.replace(new RegExp(`\\{${k}\\}`,"g"),`|||${blanks[k]}|||`);});
            const parts=tpl.split("|||");
            return(
              <div style={{...qBubSt}}>
                {qArc}
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito',system-ui,sans-serif"}}>Fill in the blank</div>
                  <div style={{fontSize:16,fontWeight:600,lineHeight:1.8,fontFamily:"'Nunito',system-ui,sans-serif",color:"var(--gray-800)"}}>
                    {parts.map((p,i)=>i%2===1?<span key={i} style={{display:"inline-block",borderBottom:"3px solid var(--purple-accent)",color:"var(--teal-dark)",fontWeight:800,padding:"0 3px",margin:"0 2px"}}>{p}</span>:<span key={i}>{p}</span>)}
                  </div>
                </div>
              </div>
            );
          }
          if(s.type==="match") return(
            <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}>
              <div style={{padding:"14px 20px 8px",color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,fontWeight:700}}>Match the pairs</div>
              {(s.pairs||[]).map((p,i)=><div key={i} style={{display:"flex",alignItems:"center",padding:"10px 20px",borderTop:"1px solid var(--gray-100)",gap:12}}><div style={{flex:1,fontSize:15,fontWeight:700,color:"var(--purple-accent-text)"}}>{p.nl}</div><div style={{color:"var(--gray-300)",fontSize:13,flexShrink:0}}>⟷</div><div style={{flex:1,fontSize:14,color:"var(--teal-text)",fontWeight:600,textAlign:"right"}}>{p.en}</div></div>)}
            </div>
          );
          if(s.type==="intro") return(
            <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}>
              {/* Top strip */}
              <div style={{background:"linear-gradient(135deg,rgba(123,94,232,0.06),rgba(46,205,167,0.04))",padding:"14px 22px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:28}}>{lesson.icon||"📖"}</span>
                <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>Lesson</span>
              </div>
              {/* Title */}
              <div style={{textAlign:"center",padding:"14px 24px 6px"}}>
                <h2 style={{fontSize:22,fontWeight:800,color:"var(--gray-800)",lineHeight:1.2,fontFamily:"'Quicksand',system-ui,sans-serif",margin:0}}>{s.title||lesson.title}</h2>
              </div>
              {/* Desc */}
              {s.desc&&<div style={{textAlign:"center",padding:"4px 20px 14px"}}>
                {(s.desc.split(/\\n|\n/)).map((ln,i)=>{
                  const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
                  if(!ln.trim()) return <div key={i} style={{height:10}}/>;
                  return <p key={i} style={{fontSize:13,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6,margin:"3px 0"}}>{ln.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((p,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(p)?<span key={pi} style={{fontSize:16,fontWeight:800}}>{p}</span>:<span key={pi}>{p}</span>)}</p>;
                })}
              </div>}
              {/* Goals */}
              {s.goals&&s.goals.length>0&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"12px 22px 14px"}}>
                <div style={{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)",marginBottom:8}}>In this lesson</div>
                {s.goals.map((g,i)=><div key={i} style={{fontSize:13,color:"var(--teal-text)",fontWeight:600,padding:"4px 0",display:"flex",alignItems:"center",gap:8}}><span style={{color:"var(--teal-text)",fontWeight:800,fontSize:11}}>▸</span><span>{g}</span></div>)}
              </div>}
            </div>
          );
          return(<div style={{padding:"16px",fontSize:13,color:"var(--gray-500)"}}>{s.title&&<div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:8}}>{s.title}</div>}{s.q&&<div style={{marginBottom:8,fontWeight:600}}>{s.q}</div>}{s.text&&<div style={{lineHeight:1.6}}>{s.text}</div>}{s.s&&<div style={{fontWeight:600,color:"var(--gray-700)"}}>{s.s}</div>}<div style={{height:12}}/></div>);
        };
        return(
          <div className="sp-ov" onClick={()=>setPreviewResult(null)}>
            <div className="sp-wrap" onClick={e=>e.stopPropagation()}>
              <div className="sp-bar">
                {(()=>{
                  const lNum=(unit.lessons||[]).findIndex(l=>l.id===lesson.id)+1;
                  const band=(unit.level||"xx").slice(0,2).toLowerCase().replace(".","");
                  const blk={display:"inline-flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(180deg,#9B7AE8 0%,#7B5EE8 55%,#6040C8 100%)",color:"#fff",borderRadius:5,fontSize:8.5,fontWeight:900,padding:"0 6px",height:17,letterSpacing:.4,position:"relative",zIndex:1,boxShadow:"0 2px 6px rgba(123,94,232,0.35),inset 0 1px 0 rgba(255,255,255,0.35)"};
                  return(<>
                    <span style={blk}>{(unit.level||"").slice(0,2)}</span>
                    <span style={blk}>U{unit.n}</span>
                    <span style={blk}>L{lNum>0?lNum:"?"}</span>
                    <span style={blk}>S{si+1}</span>
                  </>);
                })()}
                <button className="sp-xbtn" onClick={()=>setPreviewResult(null)}>✕</button>
              </div>
              {/* Jump to Lesson button */}
              <div style={{padding:"12px 14px 4px",flexShrink:0}}>
                <button className="btn btn-purple" style={{width:"100%",borderRadius:16,fontSize:14}}
                  onClick={()=>{setJumpTo({unit,lesson});setPage("learn");setPreviewResult(null);setShowSearch(false);setSearchQuery("");}}>
                  ▶ Jump to Lesson
                </button>
              </div>
              <div className="sp-body">
                <div className="sp-card">{renderCard()}</div>
              </div>
            </div>
          </div>
        );
      })()}
      {!devAccess?<DevGate onAccess={()=>{try{sessionStorage.setItem("lingoverse:dev","1");}catch(e){}setDevAccess(true);}}/>:!ob?<Onboarding onComplete={onboard}/>:!authed?<AuthScreen lang={lang} baseLang={baseLang} onAuth={(p)=>{setProfile(p);setAuthed(true);showToast(`${t("home_welcome",baseLang)} ${p.displayName}!`,"🎉");}}/>:(
        <>
          <NavBar/>
          <div className="main">
            {page==="home"&&<Home user={user} setPage={setPage} lang={lang} baseLang={baseLang}/>}
            {page==="learn"&&<LearnPage lang={lang} baseLang={baseLang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} jumpTo={jumpTo} clearJumpTo={()=>setJumpTo(null)}/>}
            {page==="vocabulary"&&<VocabularyPage lang={lang} user={user} showToast={showToast} baseLang={baseLang}/>}
            {page==="flashcards"&&<Flashcards lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}/>}
            {page==="curriculum"&&<div className="anim" style={{textAlign:"center",padding:"60px 20px"}}><AppIcon name="brain" size={72}/><h2 style={{fontSize:24,fontWeight:800,color:"var(--gray-800)",marginTop:16,marginBottom:8,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>Personal Curriculum</h2><p style={{color:"var(--gray-400)",fontSize:14,lineHeight:1.6,maxWidth:320,margin:"0 auto 24px"}}>Your AI-powered personalized learning path is being developed. It will adapt to your strengths, weaknesses, and learning style.</p><div style={{display:"inline-block",padding:"10px 24px",borderRadius:16,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:13,boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>Coming Soon</div></div>}
            {page==="quiz"&&<Quiz lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} onPerfect={()=>unlock("quiz_perfect")} showToast={showToast}/>}
            {page==="chat"&&<Chat lang={lang} baseLang={baseLang} user={user} addXp={addXp} addChat={addChat} learnedWords={[...user.lw]}/>}
            {page==="grammar"&&<GrammarPage lang={lang} baseLang={baseLang}/>}
            {page==="idioms"&&<IdiomsPage lang={lang} baseLang={baseLang}/>}
            {page==="cefr-reference"&&<CefrReferencePage lang={lang}/>}
            {page==="profile"&&<Profile user={user} lang={lang} baseLang={baseLang} flags={flags} setFlags={setFlags} onLogout={async()=>{setAuthed(false);setProfile(null);setOb(false);setPage("home");try{await window.storage?.delete("lingoverse:state");}catch(e){}}} setLang={setLang}/>}
          </div>
        </>
      )}
      {toast&&<Toast key={toast.key} message={toast.message} icon={toast.icon} onDone={()=>setToast(null)}/>}
      {pops.map(p=><XpPop key={p.key} amount={p.amount} x={p.x} y={p.y}/>)}
    </>
  );
}
