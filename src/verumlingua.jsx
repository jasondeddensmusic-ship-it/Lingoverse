import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";

// ── Data module imports (extracted from this file for modularity) ──
import { VOCAB_DB, getVocab, toTeach, ICON_REG, LANGUAGES, BASE_LANGUAGES, CEFR_LEVELS, getCefrInfo, getCefrBandColor, FOUNDATION_KEYS, FOUNDATION_SCHEMA, FK_SCHEMA_MAP, FK_MODULE_TYPES, FK_PRACTICE_TYPES, FK_LEARNING_FLOWS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS, UNIT_TEMPLATES, MKG, p, SCRIPT_BLUEPRINTS, LANG_TOKENIZER } from './data/metadata.js';
import { FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ } from './data/foundations.js';
import { TEXT_KEYS, tk, UI, t, I18N, localize, OBJECTIVES, STANDARDS, LANG_FRAMEWORK, getUnitStandard, getObjectiveStandard, deriveUnitStandard, explainUnitLevel, VOCAB, LEXEMES, LEXEME_BY_WORD, getLexeme, GRAMMAR, CHAT_STARTERS, AI_RESP, MEANINGS, mkGet, LEVEL_XP, ACHS, ARTICLE_NONE, ARTICLE_SYSTEMS, LANG_FAMILIES, ARTICLE_COLORS, getArticle } from './data/vocabulary.js';
import { LANG_DICT, WORD_DB, WORD_INTRO_MAP, POS_COLORS, GENDER_COLORS, GRAMMAR_PACKS, mergeKoreanDict, lookupWord, getTaughtWords, isNewWord, getPosColor, getGenderColor, resolvePackColor, pillGradient, KOREAN_FORM_INDEX, GERMAN_FORM_INDEX, GERMAN_EXAMPLE_INDEX, KOREAN_MORPHEME_INDEX, KOREAN_EXAMPLE_INDEX, KOREAN_IDIOM_INDEX, KOREAN_GRAMMAR_PATTERNS, KOREAN_GRAMMAR_REFERENCE, GRAMMAR_CATEGORIES, conjugateVerb, detectIrregType, getIrregInfo, nounWithParticles, conjugateGermanVerb, getGermanVerbInfo, nounWithCases } from './data/dictionary.js';
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
import { DUTCH_GRAMMAR } from './data/grammar/dutch.js';
import { GERMAN_GRAMMAR } from './data/grammar/german.js';
import { DUTCH_IDIOMS } from './data/grammar/idioms-dutch.js';

// _memStore moved to components/shared.jsx

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
// ══════════════════════════════════════════════════════════════════
// AppIcon moved to components/shared.jsx




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

// (Feature flags, UISounds, useFocusNav → extracted to audio.jsx + hooks.js)


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

















import { CSS } from "./styles.js";
import { shuffle, pick, clamp, getLevel, cap, xpNext, xpCurr, _normStep, UNITS, _RAW_UNITS, _romanize, _normS, _findHit, searchUnits, __contentWarnings, __devWarnings, validateLessonForLeaks } from './utils.js';
import { getPreferredVoice, playAudio, SpeakerButton, AUDIO_ENABLED, FOUNDATIONS_LOCK_ENABLED, UI_SOUNDS_ENABLED, UISounds } from './audio.jsx';
import { KB_FOCUS_SEL, useFocusNav, useBottomSheet } from './hooks.js';
import { Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton, LessonErrorBoundary, AppIcon, BrandIcon, _memStore, renderNavTitle } from './components/shared.jsx';
import LessonEngine from './components/LessonEngine.jsx';



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

// BrandIcon moved to components/shared.jsx











































































































































































































































































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
      <div className="home-grid" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:14,maxWidth:520,margin:"0 auto"}}>
        {[
          {p:"learn",icon:"books_stack",label:t("home_learn_path",baseLang),desc:t("home_structured",baseLang)},
          {p:"vocabulary",icon:"abc_blocks",label:t("vocab_title",baseLang),desc:t("home_dict_desc",baseLang)},
          {p:"grammar",icon:"clipboard",label:t("grammar_title",baseLang),desc:t("home_grammar_desc",baseLang)},
          {p:"idioms",icon:"chat_bubbles",label:t("idioms_title",baseLang),desc:t("home_idioms_desc",baseLang)},
          {p:"cefr-reference",icon:"globe",label:t("home_cefr_ref",baseLang),desc:t("home_official_lists",baseLang)},
          {p:"curriculum",icon:"brain",label:t("home_curriculum",baseLang),desc:t("home_personal_path",baseLang)},
          {p:"quiz",icon:"checkmark_green",label:t("home_quiz",baseLang),desc:t("home_test_knowledge",baseLang)},
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
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="flame" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.streak} {t("home_day",baseLang)}</strong></span>
          <span style={{fontSize:13,color:"var(--gray-500)",display:"flex",alignItems:"center",gap:4}}><AppIcon name="brain" size={16}/><strong style={{color:"var(--gray-800)"}}>{user.wl} {t("home_words",baseLang)}</strong></span>
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
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{t("quiz_yourself",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14,marginBottom:28,lineHeight:1.6}}>{t("quiz_desc",baseLang)}</p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:420,margin:"0 auto 28px"}}>
          {[
            {id:"lesson",label:t("quiz_lesson_review",baseLang),desc:completedLessons>0?`${lessonQCount} ${t("quiz_questions_from",baseLang)} ${completedLessons} ${t("quiz_lessons",baseLang)}`:t("quiz_complete_first",baseLang),icon:"📚",disabled:completedLessons===0},
            {id:"vocab",label:t("quiz_vocab_challenge",baseLang),desc:learnedCount>=4?`${learnedCount} ${t("quiz_words_learned",baseLang)}`:t("quiz_learn_more",baseLang),icon:"📖",disabled:learnedCount<4&&vocab.length<4},
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
          <span style={{position:"relative",zIndex:1}}>{t("quiz_start_btn",baseLang)}</span>
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
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:8}}>{pct===100?t("quiz_perfect",baseLang):t("quiz_complete",baseLang)}</h2>
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
          }}><div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>{t("quiz_try_again",baseLang)}</span></button>
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
          <h2 className="hd" style={{fontSize:18,fontWeight:800}}>{qMode==="lesson"?t("quiz_lesson_review",baseLang):t("quiz_vocab_challenge",baseLang)}</h2>
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
          {q.isVocab&&<div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:10,fontWeight:700}}>{t("quiz_translate",baseLang)}</div>}
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
  const dk=document.documentElement.classList.contains("dark");
  const [msgs,setMsgs]=useState([]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const endRef=useRef(null);

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs,loading]);

  const sendMsg=async(text)=>{
    const content=(text||input).trim();
    if(!content||loading)return;
    const userMsg={role:"user",content};
    const next=[...msgs,userMsg];
    setMsgs(next);
    if(!text)setInput("");
    setLoading(true);
    try{
      const tgtName=LANG_META[lang]?.name||lang;
      const primer=[
        {role:"user",content:`[Tutor setup: The user is actively learning ${tgtName}. Current page: chat. Help them practice ${tgtName} naturally. Mix ${tgtName} with their base language. Correct mistakes gently. Keep responses 2-4 sentences.]`},
        {role:"assistant",content:`Understood! I'll practice ${tgtName} with you naturally.`}
      ];
      const r=await fetch("https://verumlingua-ai.xqkv62nnqq.workers.dev",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({messages:[...primer,...next],context:{page:"chat",lang,langName:tgtName}})
      });
      const d=await r.json();
      const reply=d.content?.[0]?.text||(d.error?.message?`Error: ${d.error.message}`:"Sorry, something went wrong.");
      setMsgs(m=>[...m,{role:"assistant",content:reply}]);
      addXp(3);addChat();
    }catch(err){
      setMsgs(m=>[...m,{role:"assistant",content:`Connection error. Check your internet and try again.`}]);
    }
    setLoading(false);
  };

  return(
    <div className="anim" style={{display:"flex",flexDirection:"column",height:"calc(100dvh - 140px - env(safe-area-inset-bottom, 0px))",maxHeight:"calc(100dvh - 140px)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexShrink:0}}>
        <div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,display:"flex",alignItems:"center",gap:8}}><AppIcon name="robot" size={26}/> Verumius</h2>
          <p style={{color:"var(--gray-400)",fontSize:12}}>{t("chat_ai_partner",baseLang)} · {L?.native} <CountryFlag code={lang} size={14}/></p>
        </div>
        <span className="badge badge-gold" style={{fontSize:11}}>+3 XP</span>
      </div>

      <div style={{flex:1,overflow:"auto",borderRadius:20,background:dk?"rgba(30,26,55,0.6)":"rgba(248,246,255,0.7)",border:dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(200,190,240,0.4)",padding:16,display:"flex",flexDirection:"column",gap:10,WebkitOverflowScrolling:"touch",overscrollBehavior:"contain"}}>
        {msgs.length===0&&!loading&&(
          <div style={{textAlign:"center",padding:"28px 16px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <AppIcon name="robot" size={48}/>
            <h3 style={{fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:18,color:"var(--gray-700)",margin:"12px 0 8px"}}>Hey, I'm Verumius!</h3>
            <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:16,maxWidth:280}}>Your AI language tutor. Practice {L?.name||"languages"} with me.</p>
            <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:280}}>
              <button className="btn btn-outline" style={{fontSize:13,padding:"10px 16px",borderRadius:14}} onClick={()=>sendMsg(`Help me practice basic ${L?.name||"language"} conversation.`)}>Practice conversation</button>
              <button className="btn btn-outline" style={{fontSize:13,padding:"10px 16px",borderRadius:14}} onClick={()=>sendMsg(`I have a question about ${L?.name||"grammar"}.`)}>Ask a question</button>
            </div>
          </div>
        )}
        {msgs.map((m,i)=>(
          <div key={i} className={m.role==="assistant"?"vr-ai":"vr-user"} style={{maxWidth:"85%"}}>
            {m.content}
          </div>
        ))}
        {loading&&<div className="vr-typing"><div className="vr-dot"/><div className="vr-dot"/><div className="vr-dot"/></div>}
        <div ref={endRef}/>
      </div>

      <div style={{display:"flex",gap:8,paddingTop:10,flexShrink:0}}>
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg();}}}
          placeholder={`${t("le_type_in",baseLang)} ${L?.name||""}...`}
          disabled={loading}
          style={{flex:1,padding:"12px 16px",borderRadius:16,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(200,190,240,0.5)",background:dk?"rgba(30,26,55,0.8)":"white",fontSize:16,fontFamily:"inherit",outline:"none",color:"var(--gray-700)",WebkitAppearance:"none"}}/>
        <button onClick={()=>sendMsg()} disabled={!input.trim()||loading}
          style={{width:44,height:44,borderRadius:14,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:input.trim()?"linear-gradient(135deg,#7B5EE8,#6040C0)":"var(--gray-200)",color:"white",transition:"all .15s",opacity:loading?0.5:1}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M1 15L8 1L15 15L8 11L1 15Z"/></svg>
        </button>
      </div>
    </div>
  );
}

// ━━━━━━━━━━ GRAMMAR (candy gloss popup modal) ━━━━━━━━━━

const _gramP="#7B5EE8";
const _gramGlossArc=(isDk,h="42%")=>({position:"absolute",top:0,left:"5%",right:"5%",height:h,borderRadius:"0 0 50% 50%",background:isDk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none",zIndex:0});
const _gramRenderRich=(text)=>{
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((seg,si)=>{
    if(seg.startsWith("**")&&seg.endsWith("**"))return <strong key={si} style={{color:"var(--gray-800)",fontWeight:700}}>{seg.slice(2,-2)}</strong>;
    if(seg.startsWith("*")&&seg.endsWith("*"))return <em key={si} style={{color:_gramP,fontStyle:"italic"}}>{seg.slice(1,-1)}</em>;
    return seg.split(/(\[[^\]]+\])/).map((part,pi)=>{
      if(part.startsWith("[")&&part.endsWith("]"))return <span key={si+"-"+pi} style={{background:"rgba(123,94,232,0.08)",color:_gramP,fontWeight:700,borderRadius:4,padding:"1px 5px"}}>{part.slice(1,-1)}</span>;
      return part.split(/(→)/).map((bit,bi)=>{
        if(bit==="→")return <span key={si+"-"+pi+"-"+bi} style={{color:_gramP,fontWeight:800,margin:"0 3px"}}>→</span>;
        return bit;
      });
    });
  });
};

function GrammarPage({lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const [level,setLevel]=useState("A1");
  const [showDD,setShowDD]=useState(false);
  const [openIdx,setOpenIdx]=useState(null);
  const ddRef=useRef(null);

  const GRAMMAR_REFS = { nl: DUTCH_GRAMMAR, de: GERMAN_GRAMMAR };
  const grammarData = GRAMMAR_REFS[lang] || {};
  const noGrammarYet = !GRAMMAR_REFS[lang];

  const levels=["A1","A2","B1","B2"];
  const levelLabels={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang)};
  const entries=grammarData[level]||[];

  // Close dropdown on outside click
  useEffect(()=>{
    if(!showDD)return;
    const h=e=>{if(ddRef.current&&!ddRef.current.contains(e.target))setShowDD(false);};
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[showDD]);

  // Keyboard nav in popup
  useEffect(()=>{
    if(openIdx===null)return;
    const h=e=>{
      if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();if(openIdx<entries.length-1)setOpenIdx(i=>i+1);}
      if(e.key==="ArrowLeft"){e.preventDefault();if(openIdx>0)setOpenIdx(i=>i-1);}
      if(e.key==="Escape"){e.preventDefault();setOpenIdx(null);}
    };
    document.addEventListener("keydown",h);
    return ()=>document.removeEventListener("keydown",h);
  },[openIdx,entries.length]);

  // Lock body scroll when popup open
  useEffect(()=>{
    if(openIdx!==null){document.body.style.overflow="hidden";}
    else{document.body.style.overflow="";}
    return ()=>{document.body.style.overflow="";};
  },[openIdx]);

  const entry=openIdx!==null?entries[openIdx]:null;

  return(
    <div className="anim">
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:28}}>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("grammar_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("grammar_sub",baseLang)}</p>
      </div>

      {/* Coming soon */}
      {noGrammarYet && <div style={{textAlign:"center",padding:"48px 24px",background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",borderRadius:22,border:"2px solid var(--card-border)",boxShadow:"var(--card-shadow)",marginBottom:24,position:"relative",overflow:"hidden"}}>
        <div style={_gramGlossArc(dk)}/>
        <div style={{fontSize:48,marginBottom:12,position:"relative"}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8,position:"relative"}}>Grammar reference coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)",position:"relative"}}>Check the CEFR Reference page for grammar constructs by level.</div>
      </div>}

      {!noGrammarYet&&<>
        {/* Level dropdown pill */}
        <div style={{display:"flex",justifyContent:"center",marginBottom:28}} ref={ddRef}>
          <div style={{position:"relative"}}>
            <button onClick={()=>setShowDD(!showDD)} style={{
              display:"flex",alignItems:"center",gap:10,
              padding:"12px 22px",borderRadius:20,cursor:"pointer",
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)"
                :"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",
              border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.3), 0 0 10px rgba(123,94,232,0.2), inset 0 1px 0 rgba(255,255,255,0.13), inset 0 -2px 0 rgba(0,0,0,0.15)"
                :"0 4px 16px rgba(123,94,232,0.15), 0 0 10px rgba(165,148,238,0.2), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -2px 0 rgba(110,85,200,0.08)",
              position:"relative",overflow:"hidden",transition:"all .2s",minHeight:48,
            }}>
              <div style={_gramGlossArc(dk,"40%")}/>
              <span style={{fontSize:15,fontWeight:800,color:dk?"#E0D8FF":_gramP,position:"relative",zIndex:1}}>{level}</span>
              <span style={{fontSize:13,fontWeight:600,color:dk?"rgba(220,210,255,0.7)":"rgba(110,85,200,0.7)",position:"relative",zIndex:1}}>{levelLabels[level]}</span>
              <span style={{fontSize:12,color:dk?"rgba(220,210,255,0.5)":"rgba(110,85,200,0.5)",transition:"transform .2s",transform:showDD?"rotate(180deg)":"none",position:"relative",zIndex:1}}>▾</span>
            </button>

            {/* Dropdown */}
            {showDD&&<div className="anim" style={{
              position:"absolute",top:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",
              minWidth:200,borderRadius:16,overflow:"hidden",zIndex:100,
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.6) 0%, rgba(80,60,180,0.45) 100%)"
                :"linear-gradient(180deg, rgba(220,213,255,0.98) 0%, rgba(235,230,255,0.96) 100%)",
              border:dk?"1.5px solid rgba(160,140,255,0.4)":"1.5px solid rgba(165,148,238,0.5)",
              boxShadow:dk
                ?"0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3)"
                :"0 12px 40px rgba(123,94,232,0.2), 0 0 16px rgba(165,148,238,0.2)",
            }}>
              {levels.map(lv=>{
                const active=lv===level;
                const count=(grammarData[lv]||[]).length;
                return <button key={lv} onClick={()=>{setLevel(lv);setShowDD(false);setOpenIdx(null);}} style={{
                  display:"flex",alignItems:"center",gap:10,width:"100%",
                  padding:"12px 18px",border:"none",cursor:"pointer",
                  background:active?(dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.08)"):"transparent",
                  borderBottom:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(165,148,238,0.15)",
                  transition:"background .12s",
                }}
                  onMouseEnter={e=>{if(!active)e.currentTarget.style.background=dk?"rgba(255,255,255,0.06)":"rgba(123,94,232,0.04)";}}
                  onMouseLeave={e=>{if(!active)e.currentTarget.style.background="transparent";}}
                >
                  <span style={{fontSize:14,fontWeight:800,color:dk?"#E0D8FF":_gramP}}>{lv}</span>
                  <span style={{fontSize:13,fontWeight:600,color:dk?"rgba(220,210,255,0.6)":"rgba(110,85,200,0.55)",flex:1}}>{levelLabels[lv]}</span>
                  <span style={{fontSize:12,fontWeight:700,color:dk?"rgba(220,210,255,0.4)":"rgba(110,85,200,0.4)"}}>{count}</span>
                </button>;
              })}
            </div>}
          </div>
        </div>

        {/* Topic count */}
        <div style={{textAlign:"center",marginBottom:20}}>
          <span style={{fontSize:13,fontWeight:600,color:"var(--gray-400)"}}>{entries.length} {t("grammar_topics",baseLang)}</span>
        </div>

        {/* Tile grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:10}}>
          {entries.map((r,i)=>(
            <button key={i} onClick={()=>setOpenIdx(i)} className="anim" style={{
              animationDelay:`${i*0.03}s`,
              padding:"16px 14px",borderRadius:16,cursor:"pointer",
              textAlign:"left",position:"relative",overflow:"hidden",
              background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",
              border:"1.5px solid var(--card-border)",
              boxShadow:"var(--card-shadow)",
              transition:"all .2s ease",minHeight:64,
              display:"flex",alignItems:"center",
            }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--card-shadow-hover)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.borderColor=dk?"rgba(160,140,240,0.35)":"rgba(123,94,232,0.25)";}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--card-shadow)";e.currentTarget.style.transform="none";e.currentTarget.style.borderColor="";}}
            >
              <div style={_gramGlossArc(dk,"38%")}/>
              <span className="hd" style={{fontSize:13,fontWeight:700,color:"var(--gray-700)",lineHeight:1.35,position:"relative",zIndex:1}}>{r.title}</span>
            </button>
          ))}
        </div>
      </>}

      {/* Popup modal */}
      {entry&&<div style={{
        position:"fixed",inset:0,zIndex:10001,
        background:dk?"rgba(0,0,0,0.6)":"rgba(15,10,40,0.35)",
        backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",
        display:"flex",alignItems:"center",justifyContent:"center",
        padding:16,
      }} onClick={e=>{if(e.target===e.currentTarget)setOpenIdx(null);}}>
        <div className="anim" style={{
          width:"min(520px, 94vw)",maxHeight:"calc(100dvh - 40px)",
          display:"flex",flexDirection:"column",
          borderRadius:24,overflow:"hidden",position:"relative",
          background:dk
            ?"linear-gradient(180deg, rgba(45,40,75,0.92) 0%, rgba(32,28,58,0.88) 50%, rgba(26,24,50,0.85) 100%)"
            :"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,254,0.92) 50%, rgba(245,244,250,0.9) 100%)",
          border:dk?"1.5px solid rgba(160,140,240,0.2)":"1.5px solid var(--card-border)",
          boxShadow:dk
            ?"0 24px 72px rgba(0,0,0,0.55), 0 8px 24px rgba(123,94,232,0.28), inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.28)"
            :"0 24px 72px rgba(0,0,0,0.14), 0 8px 24px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.92), inset 0 -2px 0 rgba(0,0,0,0.04)",
        }}>
          <div style={_gramGlossArc(dk)}/>

          {/* Top bar */}
          <div style={{
            padding:"14px 18px 12px",display:"flex",alignItems:"center",gap:10,flexShrink:0,
            borderBottom:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.08)",
            position:"relative",zIndex:1,
          }}>
            <span style={{fontSize:11,fontWeight:700,color:dk?"rgba(200,180,255,0.6)":_gramP,letterSpacing:1.5,textTransform:"uppercase"}}>{level}</span>
            <span style={{fontSize:12,fontWeight:600,color:"var(--gray-400)",flex:1}}>{openIdx+1} / {entries.length}</span>
            <button onClick={()=>setOpenIdx(null)} style={{
              width:28,height:28,borderRadius:10,border:"none",cursor:"pointer",
              background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)",
              color:dk?"rgba(200,180,255,0.7)":_gramP,
              fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all .15s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.15)":"rgba(123,94,232,0.15)";}}
              onMouseLeave={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)";}}
            >✕</button>
          </div>

          {/* Scrollable content */}
          <div style={{flex:1,overflowY:"auto",padding:"20px 20px 16px",position:"relative",zIndex:1,WebkitOverflowScrolling:"touch"}}>
            <h3 className="hd" style={{fontSize:22,fontWeight:800,color:dk?"#E0D8FF":_gramP,marginBottom:8,textAlign:"center",fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>{entry.title}</h3>

            {/* Explanation bubble */}
            <div style={{
              padding:"16px 18px",marginBottom:20,borderRadius:16,
              background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",
              border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.1)",
              boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.04)":"inset 0 1px 0 rgba(255,255,255,0.6)",
            }}>
              <p style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.85,margin:0,fontWeight:500}}>{entry.explanation}</p>
            </div>

            {/* Rules */}
            {entry.rules&&<div style={{marginBottom:20}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>Rules & Patterns</div>
              <div style={{
                padding:"16px 18px",borderRadius:16,position:"relative",overflow:"hidden",
                background:dk?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.7)",
                border:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
                boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.03)":"inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.02)",
              }}>
                <div style={{position:"absolute",left:0,top:14,bottom:14,width:3,borderRadius:"0 2px 2px 0",background:dk?"linear-gradient(180deg, rgba(160,140,255,0.4), rgba(160,140,255,0.1))":"linear-gradient(180deg, rgba(123,94,232,0.35), rgba(123,94,232,0.08))"}}/>
                {entry.rules.map((rule,j)=>{
                  if(rule==="")return <div key={j} style={{height:10}}/>;
                  const isHeader=/^[A-Z\s'""→\-:()0-9]+$/.test(rule)||/^[A-Z].{0,40}:$/.test(rule);
                  return(
                    <div key={j} style={{
                      fontSize:isHeader?11:13.5,
                      color:isHeader?(dk?"rgba(200,180,255,0.7)":_gramP):"var(--gray-700)",
                      padding:isHeader?"10px 0 4px 10px":"4px 0 4px 10px",
                      lineHeight:1.75,display:"flex",gap:8,
                      fontWeight:isHeader?800:400,letterSpacing:isHeader?1:0,
                      textTransform:isHeader?"uppercase":"none",
                    }}>
                      {!isHeader&&<span style={{color:dk?"rgba(160,140,255,0.4)":"rgba(123,94,232,0.3)",fontWeight:800,flexShrink:0,fontSize:8,marginTop:6}}>●</span>}
                      <span style={{flex:1}}>{_gramRenderRich(rule)}</span>
                    </div>
                  );
                })}
              </div>
            </div>}

            {/* Conjugation table */}
            {entry.table&&<div style={{marginBottom:20}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>{entry.tableTitle||"Conjugation"}</div>
              <div style={{borderRadius:16,overflow:"hidden",border:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.08)"}}>
                {entry.table.map((row,ri)=>(
                  <div key={ri} style={{
                    display:"grid",gridTemplateColumns:entry.tableCols||"1fr 1fr",
                    borderBottom:ri<entry.table.length-1?(dk?"1px solid rgba(255,255,255,0.04)":"1px solid rgba(123,94,232,0.05)"):"none",
                    background:ri===0?(dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.04)"):(ri%2===0?(dk?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.5)"):"transparent"),
                  }}>
                    {row.map((cell,ci)=>(
                      <div key={ci} style={{
                        padding:"10px 14px",fontSize:ri===0?11:13,fontWeight:ri===0?700:ci===0?600:400,
                        color:ri===0?(dk?"rgba(200,180,255,0.7)":_gramP):(ci===0?"var(--gray-600)":"var(--gray-700)"),
                        letterSpacing:ri===0?0.5:0,textTransform:ri===0?"uppercase":"none",
                      }}>{cell}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>}

            {/* Examples in compound bubbles */}
            {entry.examples&&<div style={{marginBottom:8}}>
              <div style={{fontSize:10,fontWeight:700,color:dk?"rgba(200,180,255,0.5)":"rgba(123,94,232,0.5)",textTransform:"uppercase",letterSpacing:2,marginBottom:12}}>Examples</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {entry.examples.map((ex,j)=>{
                  const parts=ex.split(" - ");
                  const trg=parts[0]||ex;
                  const src=parts.slice(1).join(" - ")||"";
                  return(
                    <div key={j} style={{
                      padding:"12px 16px",borderRadius:14,position:"relative",overflow:"hidden",
                      background:dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.12) 0%, rgba(100,80,200,0.06) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.25) 0%, rgba(220,210,255,0.12) 100%)",
                      border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.2)",
                      boxShadow:dk
                        ?"inset 0 1px 0 rgba(255,255,255,0.04)"
                        :"inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 6px rgba(123,94,232,0.04)",
                    }}>
                      <div style={{fontSize:14,fontWeight:700,color:"var(--gray-800)",lineHeight:1.6,marginBottom:src?4:0}}>{_gramRenderRich(trg)}</div>
                      {src&&<div style={{fontSize:13,fontWeight:600,color:"var(--teal)",lineHeight:1.5}}>{src}</div>}
                    </div>
                  );
                })}
              </div>
            </div>}
          </div>

          {/* Navigation footer */}
          <div style={{
            padding:"14px 20px 18px",display:"flex",justifyContent:"center",alignItems:"center",gap:14,flexShrink:0,
            borderTop:dk?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(123,94,232,0.06)",
            position:"relative",zIndex:1,
          }}>
            {openIdx>0&&<NavArrow onClick={()=>setOpenIdx(i=>i-1)} isBack size={44}/>}
            {openIdx===0&&<div style={{width:44}}/>}
            <span style={{fontSize:12,fontWeight:700,color:"var(--gray-400)",minWidth:60,textAlign:"center"}}>{openIdx+1} / {entries.length}</span>
            {openIdx<entries.length-1&&<NavArrow onClick={()=>setOpenIdx(i=>i+1)} size={44}/>}
            {openIdx===entries.length-1&&<div style={{width:44}}/>}
          </div>
        </div>
      </div>}
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
          <AppIcon name="crown" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>{t("prof_achievements_btn",baseLang)}</span>
        </button>
        <button role="button" onClick={()=>setShowManifesto(true)} className="ghost-tile" style={{padding:"16px",borderRadius:18,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8,transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.2s",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8)"}}>
          <AppIcon name="clipboard" size={22}/><span style={{fontSize:14,fontWeight:700,color:"var(--gray-700)"}}>{t("prof_manifesto_btn",baseLang)}</span>
        </button>
      </div>

      {/* Achievements popup */}
      {showAchievements&&<GlossyPopup title={t("prof_achievements_btn",baseLang)} onClose={()=>setShowAchievements(false)}>
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
      {showManifesto&&<GlossyPopup title={t("prof_manifesto_title",baseLang)} onClose={()=>setShowManifesto(false)}>
        <div style={{fontSize:13,lineHeight:1.8,color:"var(--gray-600)"}}>
          <p style={{fontWeight:700,color:"var(--gray-800)",marginBottom:12}}>{t("prof_manifesto_intro",baseLang)}</p>
          {["prof_p1","prof_p2","prof_p3","prof_p4","prof_p5","prof_p6"].map((key,i)=>
            <div key={i} style={{marginBottom:12}}><div style={{fontWeight:700,color:"var(--purple-accent-text)",marginBottom:2}}>{i+1}) {t(key,baseLang)}</div></div>
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
      <div style={{textAlign:"center",paddingTop:16,borderTop:dk?"2px solid rgba(123,94,232,0.15)":"2px solid rgba(123,94,232,0.06)"}}><button onClick={onLogout} style={{fontSize:14,padding:"12px 32px",borderRadius:14,border:"2px solid var(--coral)",background:"var(--card-bg)",color:"var(--coral)",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{t("profile_logout",baseLang)}</button></div>
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
  const closeExpanded=useCallback(()=>{setExpanded(null);setPopupTab("overview");},[]);
  const bs=useBottomSheet(!!expanded&&isMobile,closeExpanded);
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
    const isGerman=lang==="de";
    const isVerb=entry.pos==="verb"||entry.pos==="adjective"||entry.kind==="verb"||entry.kind==="adjective"||(entry.word&&entry.word.endsWith&&entry.word.endsWith("다"));
    const isDeVerb=isGerman&&(entry.pos==="verb"||entry.pos==="aux");
    const isDeNoun=isGerman&&entry.pos==="noun"&&!!entry.gender;
    const wordKey=(entry.word||"").toLowerCase();

    // Tab data
    const tabs=isKorean?[
      {id:"overview",label:"Overview"},
      {id:"forms",label:isVerb?"Forms":"Particles"},
      {id:"examples",label:"Examples"},
      {id:"grammar",label:"Grammar"},
      {id:"related",label:"Related"},
    ]:isGerman?(()=>{
      const t=[{id:"overview",label:"Overview"}];
      if(isDeVerb)t.push({id:"forms",label:"Conjugation"});
      if(isDeNoun)t.push({id:"cases",label:"Cases"});
      t.push({id:"examples",label:"Examples"});
      return t;
    })():[
      {id:"overview",label:"Overview"},
    ];

    // Korean conjugation data (for Forms tab)
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

    // German conjugation data (for Forms tab)
    const deConjData=useMemo(()=>{
      if(!isGerman||!isDeVerb)return null;
      try{return conjugateGermanVerb(entry.word||wordKey);}catch(e){return null;}
    },[wordKey,isGerman,isDeVerb]);
    const deVerbInfo=useMemo(()=>{
      if(!isGerman||!isDeVerb)return null;
      try{return getGermanVerbInfo(entry.word||wordKey);}catch(e){return null;}
    },[wordKey,isGerman,isDeVerb]);

    // Particle combinations (for nouns)
    const particleData=useMemo(()=>{
      if(!isKorean||isVerb)return null;
      return nounWithParticles(entry.word||"");
    },[entry.word,isKorean,isVerb]);

    // Examples from curriculum (Korean)
    const examples=useMemo(()=>{
      if(!isKorean)return [];
      return KOREAN_EXAMPLE_INDEX[wordKey]||[];
    },[wordKey,isKorean]);

    // Examples from curriculum (German)
    const deExamples=useMemo(()=>{
      if(!isGerman)return [];
      return GERMAN_EXAMPLE_INDEX[wordKey]||[];
    },[wordKey,isGerman]);

    // German noun case declension table
    const deCaseData=useMemo(()=>{
      if(!isDeNoun)return null;
      try{return nounWithCases(entry.word||wordKey, entry.gender);}catch(e){return null;}
    },[wordKey,isDeNoun,entry.gender]);

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
      <div className={isMobile?"bs-overlay":""} onClick={()=>{if(isMobile)bs.dismiss();else{setExpanded(null);setPopupTab("overview");}}} style={isMobile?{}:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.45)",backdropFilter:"blur(6px)",animation:"fadeIn .2s"}}>
        <div ref={isMobile?bs.panelRef:undefined} className={isMobile?("bs-panel"+(bs.closing?" closing":"")):""} onPointerDown={isMobile?bs.onPointerDown:undefined} onClick={e=>e.stopPropagation()} style={{
          width:isMobile?"100%":"min(460px, 92vw)",
          maxHeight:isMobile?"85vh":"88vh",
          borderRadius:isMobile?"24px 24px 0 0":24,position:"relative",
          background:dk?"linear-gradient(180deg, rgba(40,30,70,0.98) 0%, rgba(30,24,55,0.98) 100%)":"linear-gradient(180deg, rgba(250,248,255,0.99) 0%, rgba(240,236,255,0.98) 100%)",
          border:dk?"1.5px solid rgba(123,94,232,0.4)":"1.5px solid rgba(180,165,240,0.5)",
          boxShadow:dk?"0 -8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,94,232,0.3)":"0 -8px 40px rgba(123,94,232,0.15), 0 0 20px rgba(180,165,240,0.2)",
          padding:isMobile?"0 16px 32px":"28px 22px",
          ...(isMobile&&bs.translateY>0?{transform:`translateY(${bs.translateY}px)`}:{}),
        }}>
          {isMobile&&<div className="bs-handle" onPointerDown={bs.onPointerDown}/>}
          {!isMobile&&<span onClick={()=>{setExpanded(null);setPopupTab("overview");}} style={{position:"absolute",top:14,right:16,cursor:"pointer",fontSize:16,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.6)",zIndex:2}}>&#10005;</span>}
          <div className={isMobile?"bs-content":""}  style={isMobile?{padding:"0 0 16px"}:{overflow:"auto"}}>

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
                  <span style={{fontSize:13,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontWeight:600,flex:1,lineHeight:1.5,whiteSpace:"pre-line"}}>{entry.example}</span>
                  <SpeakerButton text={entry.example} lang={ttsLocale} size={12} showToast={showToast}/>
                </div>
                {entry.exampleEn&&<div style={{fontSize:11,color:dk?"rgba(200,184,255,0.55)":"rgba(100,80,160,0.5)",fontStyle:"italic",marginTop:3,whiteSpace:"pre-line"}}>{entry.exampleEn}</div>}
              </div>
            </div>}
            {/* Fun fact (v2 signature feature) */}
            {entry.funFact&&glossBubble(<>
              <div style={{fontSize:11,fontWeight:900,letterSpacing:0.5,textTransform:"uppercase",color:dk?"rgba(245,166,35,0.7)":"rgba(200,130,10,0.65)",marginBottom:4}}>Fun Fact</div>
              <div style={{fontSize:12,color:dk?"rgba(255,255,255,0.85)":"var(--gray-700)",fontWeight:600,lineHeight:1.5,whiteSpace:"pre-line"}}>{entry.funFact}</div>
            </>)}
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

          {/* ═══ TAB: Forms (German Conjugation) ═══ */}
          {popupTab==="forms"&&isGerman&&isDeVerb&&<>
            {deVerbInfo&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.65)",fontWeight:700,marginBottom:10}}>
              {deVerbInfo.label&&<span>{deVerbInfo.label} verb</span>}
              {deVerbInfo.notes&&<span style={{marginLeft:8,color:"#FF6D00"}}>{deVerbInfo.notes}</span>}
              {deVerbInfo.aux&&<span style={{marginLeft:8}}>Aux: {deVerbInfo.aux}</span>}
            </div>}
            {deConjData&&(()=>{
              // Group conjugation entries by their group field (Prasens, Prateritum, etc.)
              const groups={};
              for(const[key,f]of Object.entries(deConjData)){
                const g=f.group||"Other";
                if(!groups[g])groups[g]=[];
                groups[g].push(f);
              }
              const groupOrder=["Prasens","Prateritum","Perfekt","Imperativ","Konjunktiv II","Futur I"];
              const sorted=[...groupOrder.filter(g=>groups[g]),...Object.keys(groups).filter(g=>!groupOrder.includes(g))];
              return sorted.map(g=><div key={g}>
                {sectionTitle(g)}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                  {groups[g].map((f,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                    <div style={{position:"relative",zIndex:1}}>
                      <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{f.form}</div>
                      {f.label&&<div style={{fontSize:10,color:dk?"rgba(200,184,255,0.6)":"rgba(100,80,160,0.55)",fontWeight:700}}>{f.label}</div>}
                    </div>
                  </div>)}
                </div>
              </div>);
            })()}
            {!deConjData&&<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>Conjugation data not available for this verb.</div>}
          </>}

          {/* ═══ TAB: Cases (German nouns) ═══ */}
          {popupTab==="cases"&&isGerman&&isDeNoun&&<>
            {deCaseData&&deCaseData.length>0?<>
              {sectionTitle("Noun Declension")}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                {deCaseData.map((c,i)=><div key={i} style={{borderRadius:14,padding:"9px 12px",position:"relative",overflow:"hidden",background:bubbleBg,border:bubbleBorder,boxShadow:bubbleShadow}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",background:bubbleGloss,borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0}}/>
                  <div style={{position:"relative",zIndex:1}}>
                    <div style={{fontSize:14,fontWeight:800,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)"}}>{c.definite}</div>
                    {c.indefinite&&<div style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.7)":"rgba(80,60,140,0.6)",marginTop:2}}>{c.indefinite}</div>}
                    <div style={{fontSize:10,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:700,marginTop:2}}>{c.caseLabel}</div>
                  </div>
                </div>)}
              </div>
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>Case data not available for this noun.</div>}
          </>}

          {/* ═══ TAB: Examples (German) ═══ */}
          {popupTab==="examples"&&isGerman&&<>
            {deExamples.length>0?<>
              {sectionTitle(`${deExamples.length} example${deExamples.length>1?"s":""} from curriculum`)}
              {deExamples.map((ex,i)=>glossBubble(<>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.95)":"var(--gray-800)",flex:1,lineHeight:1.5,whiteSpace:"pre-line"}}>{ex.target}</span>
                  <SpeakerButton text={ex.target} lang={ttsLocale} size={11} showToast={showToast}/>
                </div>
                {ex.source&&<div style={{fontSize:12,color:dk?"rgba(200,184,255,0.75)":"rgba(80,60,140,0.65)",fontWeight:600,marginTop:3}}>{ex.source}</div>}
                <div style={{fontSize:9,color:dk?"rgba(200,184,255,0.4)":"rgba(100,80,160,0.35)",marginTop:3,fontWeight:700}}>Unit {ex.unitN} / {ex.lessonId}</div>
              </>,{key:i}))}
            </>:<div style={{fontSize:13,color:dk?"rgba(200,184,255,0.5)":"rgba(100,80,160,0.45)",fontWeight:600,textAlign:"center",padding:20}}>No curriculum examples found for this word.</div>}
          </>}

          {/* ═══ TAB: Examples (Korean) ═══ */}
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
          {(isKorean||isGerman)&&(()=>{
            const hasNote=!!entry.note;
            const hasUses=entry.uses&&entry.uses.length>0;
            const hasParticle=!!entry.particle;
            const hasMorph=!!entry.morph;
            const hasFunFact=!!entry.funFact;
            const richCount=[hasNote,hasUses,hasParticle,hasMorph,hasFunFact].filter(Boolean).length;
            if(richCount>=2)return null;
            return <div style={{marginTop:12,textAlign:"center"}}>
              <button onClick={()=>{
                const langName=isKorean?"Korean":"German";
                const prompt=`Tell me everything about the ${langName} word "${entry.word}" (${entry.en||""}). Include: etymology, common collocations, example sentences at different CEFR levels, cultural context, and common mistakes learners make.${isGerman&&isDeVerb?" Include all conjugated forms and irregular patterns.":""}${isKorean?" Include all conjugated forms and idioms it appears in.":""}`;
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
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4,fontFamily:"Quicksand, sans-serif"}}>{t("vocab_title",baseLang)}</h2>
        <p style={{color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",fontSize:13}}>{allWords.length} {t("home_words",baseLang)}</p>
      </div>

      {/* ── Mode tabs ── */}
      <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:20,flexWrap:"wrap"}}>
        {[{id:"search",label:t("vocab_search_tab",baseLang)},{id:"browse",label:t("vocab_browse",baseLang)},{id:"review",label:t("vocab_review",baseLang)},...(lang==="ko"?[{id:"grammar",label:t("vocab_grammar_tab",baseLang)}]:[])].map(tab=>(
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
            <input ref={searchRef} value={search} onChange={e=>{setSearch(e.target.value);setExpanded(null);}} placeholder={t("vocab_search_ph",baseLang)} style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:14,fontFamily:"'Nunito','DM Sans',system-ui,sans-serif",fontWeight:600,color:dk?"rgba(255,255,255,0.9)":"var(--gray-800)",caretColor:"#7B5EE8",minWidth:0}}/>
            {search&&<span onClick={()=>{setSearch("");searchRef.current?.focus();}} style={{cursor:"pointer",fontSize:14,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"rgba(150,140,180,0.75)",padding:"0 4px"}}>&#10005;</span>}
          </div>
        </div>

        {/* Grammar color toggle + Filter bar + count */}
        <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center"}}>
          {/* Aa grammar colorizer toggle — same as lesson engine */}
          <button onClick={()=>setGrammarHl(!grammarHl)} title={grammarHl?`${t("vocab_grammar_colors",baseLang)} ON`:`${t("vocab_grammar_colors",baseLang)} OFF`}
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
          {grammarHl&&<button onClick={()=>setShowGrammarSettings(!showGrammarSettings)} title={t("vocab_color_settings",baseLang)}
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
            <span style={{position:"relative",zIndex:1}}>{t("vocab_filters",baseLang)} {hasActiveFilters?"*":""}</span>
          </button>
          {hasActiveFilters&&<button onClick={()=>{setFilterPOS(new Set());setFilterLevel(new Set());setFilterGender(new Set());setFilterTaughtOnly(false);}}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1) translateY(-3px)";e.currentTarget.style.background=dk?"linear-gradient(180deg,#FFB0B0 0%,#FF8888 8%,#FF6B6B 20%,#F56565 38%,#E04848 55%,#D04444 72%,#B83333 88%,#A02828 100%)":"linear-gradient(180deg,#FFA8A8 0%,#FF8888 10%,#FF6B6B 22%,#F56565 40%,#E04848 58%,#D04444 75%,#B83333 90%,#A02828 100%)";e.currentTarget.style.color="white";e.currentTarget.style.boxShadow="0 0 24px rgba(245,101,101,0.55), 0 6px 20px rgba(220,60,60,0.45), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -4px 0 rgba(0,0,0,0.2)";e.currentTarget.style.textShadow="0 1px 3px rgba(0,0,0,0.3), 0 0 8px rgba(255,255,255,0.15)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.background=dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)";e.currentTarget.style.color=dk?"rgba(200,184,255,0.95)":"#6030C0";e.currentTarget.style.boxShadow=dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)";e.currentTarget.style.textShadow="none";}}
            style={{padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",fontSize:11,fontWeight:900,fontFamily:"Quicksand, sans-serif",transition:"all .3s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden",letterSpacing:0.3,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.04) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 15%, #F0ECFF 40%, #E8E0FF 70%, #DDD5FA 100%)",color:dk?"rgba(200,184,255,0.95)":"#6030C0",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 3px 12px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -3px 0 rgba(112,80,216,0.08), 0 0 0 1px rgba(168,144,255,0.22)"}}>
            <span style={{position:"absolute",top:0,left:"6%",right:"6%",height:"48%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 45%, transparent 100%)",borderRadius:"0 0 48% 48%",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>{t("vocab_clear_all",baseLang)}</span>
          </button>}
          <span style={{flex:1}}/>
          <span style={{fontSize:12,fontWeight:600,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)"}}>{filteredWords.length} {t("vocab_word",baseLang)}{filteredWords.length!==1?"s":""}</span>
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
              {langPacks.label} {t("vocab_grammar_colors",baseLang)}
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
                  {grammarEditMode?t("vocab_done",baseLang):t("vocab_edit",baseLang)}
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
          <div style={{fontSize:12,fontWeight:700,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",marginBottom:14,textAlign:"center"}}>{t("vocab_choose_letter",baseLang)}</div>
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
            <div style={{fontSize:12,marginTop:4}}>{t("vocab_complete_lessons",baseLang)}</div>
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
        const polLevels=[{id:"all",label:t("misc_all",baseLang)},{id:"formal",label:t("misc_formal",baseLang)},{id:"polite",label:t("misc_polite",baseLang)},{id:"casual",label:t("misc_casual",baseLang)},{id:"written",label:t("misc_written",baseLang)}];
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

  const bandColor=(lv)=>({A1:"#9B7AE8",A2:"#8B6AE4",B1:"#7B5EE8",B2:"#6545C8"}[lv]||"#888");

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
  const posTag=(p)=>({noun:"N",verb:"V",adj:"ADJ",adv:"ADV",prep:"PREP",conj:"CONJ",pron:"PRON",part:"PART",intj:"INTJ",phrase:"PHR",prefix:"PFX",modal:"MOD",aux:"AUX",num:"NUM",det:"DET",abbrev:"ABBR",number:"NUM",particle:"PART",adjective:"ADJ",adverb:"ADV",preposition:"PREP",conjunction:"CONJ",pronoun:"PRON",interjection:"INTJ"}[p]||"");

  return(
    <div>
      {visible.map((w,i)=>(
        <div key={i} style={{...rowStyle,padding:"10px 16px"}}>
          <GlossArc/>
          <div style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:10}}>
            {/* Level pill — compact */}
            <span style={{
              display:"inline-block",padding:"2px 6px",borderRadius:8,fontSize:9,fontWeight:800,
              fontFamily:"'Quicksand',sans-serif",color:"#fff",minWidth:24,textAlign:"center",
              background:`linear-gradient(180deg, ${({A1:"#A890FF",A2:"#9B7AE8",B1:"#7B5EE8",B2:"#6545C8"}[w.l]||"#888")} 0%, ${({A1:"#8B6AE4",A2:"#7B5EE8",B1:"#6545C8",B2:"#5230B0"}[w.l]||"#666")} 100%)`,
              textShadow:"0 1px 1px rgba(0,0,0,0.2)",letterSpacing:0.5,flexShrink:0,
            }}>{w.l}</span>
            {/* Word + POS tag — no gender coloring, all words same color */}
            <div style={{flex:1,minWidth:0}}>
              <span style={{fontSize:14,fontWeight:700,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>{w.w}</span>
              {w.f&&w.f!==w.w&&<span style={{fontSize:11,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontFamily:"'Nunito',sans-serif",marginLeft:6}}>{w.f}</span>}
              {w.p&&posTag(w.p)&&<span style={{fontSize:9,fontWeight:700,fontFamily:"'Nunito',sans-serif",color:dk?"rgba(168,144,255,0.5)":"rgba(123,94,232,0.4)",marginLeft:6,letterSpacing:0.5}}>{posTag(w.p)}</span>}
              {w.g&&<span style={{fontSize:9,fontWeight:700,color:dk?"rgba(168,144,255,0.5)":"rgba(123,94,232,0.4)",marginLeft:4}}>{genderLabel(w.g)}</span>}
            </div>
            {/* Translation */}
            <span style={{fontSize:12,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",fontFamily:"'Nunito',sans-serif",fontWeight:500,textAlign:"right",flexShrink:0,maxWidth:"45%"}}>{w.tr}</span>
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
  const IDIOM_REFS = { nl: DUTCH_IDIOMS };
  const idioms = IDIOM_REFS[lang] || [];

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:36,marginBottom:8}}>💬</div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:6}}>{(LANGUAGES.find(l=>l.code===lang)?.native||"") + " " + t("idioms_header",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:14}}>{t("idioms_sub",baseLang)} {LANGUAGES.find(l=>l.code===lang)?.native||""}</p>
      </div>

      {idioms.length===0 && <div style={{textAlign:"center",padding:"40px 20px",background:"var(--card-bg)",borderRadius:20,border:"2px solid var(--gray-100)",marginBottom:24}}>
        <div style={{fontSize:48,marginBottom:12}}>🚧</div>
        <div style={{fontSize:18,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>Idioms coming soon</div>
        <div style={{fontSize:14,color:"var(--gray-400)"}}>Check the CEFR Reference page for expressions by level.</div>
      </div>}

      <div style={{display:"grid",gap:14}}>
        {idioms.map((id,i)=>(
          <div key={i} style={{background:"linear-gradient(145deg, #F8F4FF, #FFF8F4)",borderRadius:20,border:"1.5px solid rgba(123,94,232,0.12)",padding:"20px 22px",boxShadow:"0 3px 12px rgba(0,0,0,0.03)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              <span style={{padding:"3px 12px",borderRadius:10,background:"var(--purple-flat)",fontSize:10,fontWeight:700,color:"var(--purple-accent-text)"}}>{id.level}</span>
            </div>
            <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:4}}>"{id.trg}"</div>
            <div style={{fontSize:14,color:"var(--teal-dark)",fontWeight:700,marginBottom:2}}>→ {id.src}</div>
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
        <h1 className="hd" style={{fontSize:32,fontWeight:800,marginBottom:6,background:"linear-gradient(135deg,#7B5EE8,#A890FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{t("auth_welcome",baseLang)}</h1>
        <p style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.6,maxWidth:340,margin:"0 auto 32px"}}>{t("auth_sign_in_desc",baseLang)}</p>
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
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:24}}>{t("auth_welcome_back",baseLang)}</p>
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
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:20}}>{t("auth_personalize",baseLang)}</p>

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
  const [step,setStep]=useState("source"); // source | target
  const [baseSel,setBaseSel]=useState("en");
  const [targetSel,setTargetSel]=useState(null);

  // Ctrl+S → proceed
  useEffect(()=>{
    const h=e=>{
      if((e.ctrlKey||e.metaKey)&&e.key==="s"){
        e.preventDefault();
        if(step==="source"&&baseSel){setStep("target");}
        else if(step==="target"&&targetSel) onComplete(baseSel,targetSel);
      }
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[step,baseSel,targetSel]);

  // Step 1: Source language selection
  if(step==="source") return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={baseSel} size={44}/></div>
        </div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4,fontFamily:"'Quicksand',sans-serif"}}>{t("ob_i_speak",baseSel||"en")}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("ob_choose_native",baseSel||"en")}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {BASE_LANGUAGES.map(l=>(
            <div key={l.code} className={`lang-card ${baseSel===l.code?"active":""}`} onClick={()=>setBaseSel(l.code)} style={{cursor:"pointer",...(l.rtl?{direction:"rtl"}:{})}}>
              <CountryFlag code={l.code} size={32} variant="plain"/><div className="name">{l.name}</div><div className="native">{l.native}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-blue" style={{fontSize:17,padding:"14px 36px",borderRadius:16,opacity:baseSel?1:.4,transition:"all .2s"}} disabled={!baseSel} onClick={()=>baseSel&&setStep("target")}>
          {t("ob_continue",baseSel||"en")} →
        </button>
      </div>
    </div>
  );

  // Step 2: Target language selection
  return(
    <div className="ob-overlay" style={{overflowY:"auto",padding:20}}>
      <div className="ob-card" style={{maxWidth:520}}>
        <div style={{width:76,height:76,borderRadius:19,margin:"0 auto 16px",overflow:"hidden",boxShadow:"0 8px 28px rgba(123,94,232,0.25)",position:"relative"}}>
          {targetSel?(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center"}}><CountryFlag code={targetSel} size={44}/></div>
          ):(
            <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:900,color:"#fff",fontFamily:"'Quicksand',sans-serif"}}>?</div>
          )}
        </div>
        <div style={{marginBottom:8}}><button onClick={()=>setStep("source")} style={{background:"none",border:"none",color:"var(--purple-accent-text)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>{baseSel==="ar"?"→ تغيير اللغة الأم":"← Change source language"}</button></div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:4,fontFamily:"'Quicksand',sans-serif"}}>{t("ob_i_want_learn",baseSel)}</h2>
        <p style={{color:"var(--gray-400)",marginBottom:24,fontSize:14,fontFamily:"'Nunito',sans-serif"}}>{t("ob_choose_target",baseSel)}</p>

        <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",maxWidth:460,margin:"0 auto 28px"}}>
          {LANGUAGES.filter(l=>l.code!==baseSel).map(l=>(
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
    return <LessonErrorBoundary onBack={()=>setView("lesson")} baseLang={baseLang}><LessonEngine lesson={selLesson} baseLang={baseLang} lang={lang} addFlag={addFlag} unit={selUnit} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}
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
  const _srcFiltered=UNITS.filter(u=>u.lang===lang&&(u.srcLang||"en")===baseLang);
  const allLangUnits=_srcFiltered.length>0?_srcFiltered:UNITS.filter(u=>u.lang===lang&&(u.srcLang||"en")==="en");
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
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{units.length} {t("map_units",baseLang)} · CEFR {band}{(()=>{const bp=bandProgress(band);return bp.done>0?` · ${Math.round((bp.done/bp.total)*100)}%`:"";})()}</p>
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
            {band==="A1"&&t("cefr_a1_desc",baseLang)}
            {band==="A2"&&t("cefr_a2_desc",baseLang)}
            {band==="B1"&&t("cefr_b1_desc",baseLang)}
            {band==="B2"&&t("cefr_b2_desc",baseLang)}
            {band==="C1"&&t("cefr_c1_desc",baseLang)}
            {band==="C2"&&t("cefr_c2_desc",baseLang)}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:10}}>{t("cefr_units_in",baseLang)}</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {units.map(u=><div key={u.n} style={{padding:"10px 14px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)"}}>{u.level}</span>
              <span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600}}>Unit {u.n}: {u.title}</span>
              <span style={{fontSize:11,color:"var(--gray-400)",marginLeft:"auto"}}>{u.lessons.length} {t("map_lessons",baseLang)}</span>
            </div>)}
            {units.length===0&&<div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",textAlign:"center",padding:16}}>{t("map_content_dev",baseLang)}</div>}
          </div>
        </GlossyPopup>}

        {units.length===0?
          <div style={{borderRadius:22,padding:"40px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:dk?"rgba(40,42,72,0.4)":"linear-gradient(180deg, #F8F6FF 0%, #F0ECFF 100%)",border:"2px solid rgba(123,94,232,0.08)",textAlign:"center"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>{t("map_coming_soon",baseLang)}</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>CEFR {band} {t("map_content_dev",baseLang)}</p>
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
          <div style={{background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",borderRadius:22,padding:"24px 28px",marginBottom:24,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
            <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:1}}>
              <div style={{width:52,height:52,borderRadius:16,background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",flexShrink:0}}><BrandIcon name={openSec.icon} size={24}/></div>
              <div style={{flex:1}}>
                <h2 className="hd" style={{fontSize:22,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--purple-accent-text)"}}>{openSec.title}</h2>
                <p style={{color:"var(--gray-500)",fontSize:13,fontFamily:"'Nunito',sans-serif"}}>{openSec.desc}</p>
                <div style={{fontSize:11,color:"var(--purple-accent-text)",fontWeight:600,marginTop:4}}>{sp.done}/{sp.total} completed</div>
              </div>
            </div>
            {sp.total>0&&<div style={{marginTop:12,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.07)":"var(--purple-border)",overflow:"hidden",position:"relative",zIndex:1}}>
              <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
            </div>}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {(openSec.items||[]).map((item,i)=>{
              const done=isFkDone(openSec.id,i);
              const hasGrid=!!item.grid;
              const hasInv=!!item.inventory;
              const allChars=hasGrid?item.grid.rows.flatMap(r=>r.cells.filter(c=>c.ch).map(c=>c.ch)):hasInv?item.inventory.split("|").map(p=>p.trim().split(" ")[0]):[];
              return(
              <div key={i} className="anim" style={{padding:"14px 18px",animationDelay:`${i*0.04}s`,borderRadius:22,background:dk?(done?"linear-gradient(180deg, rgba(46,205,167,0.15) 0%, rgba(46,205,167,0.08) 40%, rgba(46,205,167,0.03) 100%)":"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"):(done?"linear-gradient(180deg, rgba(46,205,167,0.2) 0%, rgba(46,205,167,0.1) 50%, rgba(46,205,167,0.05) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)"),border:done?(dk?"1.5px solid rgba(46,205,167,0.35)":"1.5px solid rgba(46,205,167,0.4)"):(dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)"),boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",position:"relative",overflow:"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  {done&&<span style={{fontSize:14}}>✅</span>}
                  <div className="hd" style={{fontSize:15,fontWeight:700,color:"var(--gray-800)"}}>{item.title}</div>
                </div>
                {item.desc&&<p style={{fontSize:13,color:"var(--gray-500)",marginBottom:8,lineHeight:1.6}}>{item.desc}</p>}
                {hasGrid&&<div style={{background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(235,230,255,0.15) 100%)",borderRadius:22,padding:"12px 10px",marginBottom:8,overflowX:"auto",border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.3)"}}>
                  {item.grid.headers&&item.grid.headers.some(h=>h)&&<div style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                    <div/>
                    {item.grid.headers.map((h,hi)=><div key={hi} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"var(--gray-400)",...(isRtl&&/[\u0600-\u06FF]/.test(h)?{direction:"rtl"}:{})}}>{h}</div>)}
                  </div>}
                  {item.grid.rows.map((row,ri)=>(
                    <div key={ri} style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:row.color||"#7B5EE8",textTransform:"uppercase",letterSpacing:0.5}}>{row.label}</div>
                      {row.cells.map((cell,ci)=>cell.ch?(
                        <div key={ci} onClick={()=>setSelectedChar({ch:cell.ch,rom:cell.rom,title:item.title,color:row.color})} style={{textAlign:"center",padding:"7px 2px",borderRadius:12,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,244,250,0.8) 100%)",border:`1.5px solid ${row.color||"#7B5EE8"}${dk?"30":"20"}`,cursor:"pointer",transition:"all .25s cubic-bezier(.4,0,.2,1)",boxShadow:dk?"0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)":"0 2px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)"}}>
                          <div style={{fontSize:22,fontWeight:700,color:row.color||"#7B5EE8",lineHeight:1.2,...(isRtl&&/[\u0600-\u06FF]/.test(cell.ch)?{direction:"rtl"}:{})}}>{cell.ch}</div>
                          {cell.rom&&<div style={{fontSize:9,color:"var(--gray-400)",marginTop:1}}>{cell.rom}</div>}
                        </div>
                      ):<div key={ci} style={{padding:"7px 2px",borderRadius:12,background:dk?"rgba(255,255,255,0.03)":"rgba(200,190,255,0.15)"}}/>)}
                    </div>
                  ))}
                </div>}
                {!hasGrid&&hasInv&&<div style={{background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(235,230,255,0.15) 100%)",borderRadius:22,padding:"12px 14px",marginBottom:8,border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.3)"}}>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:6}}>
                  {item.inventory.split("|").map((pair,k)=>{
                    const parts=pair.trim().split(" ");
                    const ch=parts[0];
                    const rom=parts.slice(1).join(" ");
                    return <div key={k} onClick={()=>setSelectedChar({ch,rom,title:item.title})} style={{textAlign:"center",padding:"8px 2px",borderRadius:12,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,244,250,0.8) 100%)",border:dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(180,165,240,0.3)",cursor:"pointer",transition:"all .25s cubic-bezier(.4,0,.2,1)",boxShadow:dk?"0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)":"0 2px 6px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"}}>
                      <div style={{fontSize:24,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.2}}>{ch}</div>
                      {rom&&<div style={{fontSize:10,color:"var(--gray-400)",marginTop:2}}>{rom}</div>}
                    </div>;
                  })}
                  </div>
                </div>}
                {selectedChar&&allChars.includes(selectedChar.ch)&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setSelectedChar(null)}>
                  <div className="anim" style={{maxWidth:320,width:"100%",padding:"32px 24px",textAlign:"center",borderRadius:22,background:dk?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)":"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",boxShadow:dk?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",position:"relative",overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
                    <div style={{fontSize:72,fontWeight:800,color:selectedChar.color||"#7B5EE8",marginBottom:8,lineHeight:1,position:"relative",zIndex:1,fontFamily:"'Quicksand',sans-serif"}}>{selectedChar.ch}</div>
                    {selectedChar.rom&&<div style={{fontSize:22,color:"var(--gray-600)",fontWeight:600,marginBottom:16,fontFamily:"'Nunito',sans-serif",position:"relative",zIndex:1}}>{selectedChar.rom}</div>}
                    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:16,position:"relative",zIndex:1}}>
                      <button onClick={()=>{if(typeof speechSynthesis!=="undefined"){const u=new SpeechSynthesisUtterance(selectedChar.rom||selectedChar.ch);u.rate=0.7;speechSynthesis.speak(u);}}} style={{padding:"10px 20px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.9)":"#7050D8",fontSize:14,fontWeight:900,fontFamily:"'Quicksand',sans-serif",cursor:"pointer",display:"flex",alignItems:"center",gap:6,boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>🔊 Listen</button>
                    </div>
                    <button onClick={()=>setSelectedChar(null)} style={{marginTop:16,padding:"8px 24px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",fontWeight:900,fontFamily:"'Quicksand',sans-serif",fontSize:13,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",position:"relative",zIndex:1,transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>Close</button>
                  </div>
                </div>}
                {item.examples&&item.examples.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
                  {item.examples.map((ex,j)=>(
                    <span key={j} style={{display:"inline-block",padding:"4px 10px",borderRadius:14,background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.4) 0%, rgba(220,210,255,0.25) 100%)",color:"var(--purple-accent-text)",fontSize:12,fontWeight:600,fontFamily:"'Nunito',sans-serif",border:dk?"1px solid rgba(123,94,232,0.25)":"1px solid rgba(180,165,240,0.35)",...(isRtl&&/[\u0600-\u06FF]/.test(ex)?{direction:"rtl"}:{})}}>{ex}</span>
                  ))}
                </div>}
                {!done&&<button onClick={()=>markFk(openSec.id,i)} style={{padding:"8px 16px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",fontSize:12,fontWeight:900,fontFamily:"'Quicksand',sans-serif",letterSpacing:0.3,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden"}}>✓ I got it</button>}
                {done&&<div style={{fontSize:11,color:"var(--teal)",fontWeight:600}}>✓ Completed</div>}
              </div>);
            })}
          </div>
          {/* ── Section navigation ── */}
          <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"space-between"}}>
            {prevSec?<NavArrow onClick={goPrev} isBack size={44}/>:<div/>}
            {nextSec?<button onClick={goNext} style={{fontSize:13,padding:"10px 18px",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",border:"none",borderRadius:16,fontWeight:900,fontFamily:"'Quicksand',sans-serif",letterSpacing:0.3,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>Next: {nextSec.title} →</button>
            :<button onClick={()=>{setFkSection(null);window.scrollTo(0,0);}} style={{fontSize:13,padding:"10px 18px",background:"linear-gradient(135deg,var(--teal),#2ECDA7)",color:"white",border:"none",borderRadius:16,fontWeight:900,fontFamily:"'Quicksand',sans-serif",cursor:"pointer",boxShadow:"0 4px 16px rgba(46,205,167,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>✓ All Sections Done</button>}
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
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'Quicksand',sans-serif"}}>{fData?.name||t("found_title",baseLang)}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{L?.native||"Language"}: Before You Start</p>
              <div style={{display:"flex",gap:8,marginTop:6,alignItems:"center"}}>
                <span style={{padding:"3px 10px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:10,fontWeight:700}}>{t("found_pre_a1",baseLang)}</span>
                {op.total>0&&<span style={{fontSize:11,color:"rgba(255,255,255,0.85)",fontWeight:600}}>{op.pct}% {t("found_completed",baseLang)}</span>}
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
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>{t("found_sections",baseLang)}</div>
            </div>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{op.pct}%</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>{t("found_complete",baseLang)}</div>
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
                {user.progress?.gateQuiz?.[lang]?.passed?t("map_gate_passed",baseLang):t("map_gate_skip",baseLang)}
              </div>
              <div style={{fontSize:12,color:"var(--gray-400)",lineHeight:1.4}}>
                {user.progress?.gateQuiz?.[lang]?.passed?t("map_gate_passed_desc",baseLang):t("map_gate_skip_desc",baseLang)}
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
              <div key={sec.id} className="anim" onClick={()=>setFkSection(sec.id)} style={{
                cursor:"pointer",padding:"20px 16px",textAlign:"center",borderRadius:22,position:"relative",overflow:"hidden",
                background:sp.pct===100?(dk?"linear-gradient(180deg, rgba(46,205,167,0.15) 0%, rgba(46,205,167,0.08) 40%, rgba(46,205,167,0.03) 100%)":"linear-gradient(180deg, rgba(46,205,167,0.2) 0%, rgba(46,205,167,0.1) 50%, rgba(46,205,167,0.05) 100%)"):(dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)"),
                border:sp.pct===100?(dk?"1.5px solid rgba(46,205,167,0.35)":"1.5px solid rgba(46,205,167,0.4)"):(dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)"),
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
                animationDelay:`${i*0.05}s`,transition:"all .25s cubic-bezier(.4,0,.2,1)",
              }}>
                <div style={{fontSize:32,marginBottom:8}}><BrandIcon name={sec.icon} size={32}/></div>
                <div className="hd" style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:sp.pct===100?"var(--teal)":"var(--purple-accent-text)",marginBottom:4}}>{sec.title}</div>
                <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.4}}>{sec.desc}</div>
                <div style={{marginTop:8,fontSize:10,fontWeight:600,color:sp.pct===100?"var(--teal)":"var(--gray-300)"}}>{sp.pct===100?`✓ ${t("found_done",baseLang)}`:`${sp.done}/${sp.total} ${t("found_items",baseLang)}`}</div>
                {sp.total>0&&sp.pct>0&&sp.pct<100&&<div style={{marginTop:6,height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.07)":"rgba(180,165,240,0.2)",overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
                </div>}
              </div>);
            })}
          </div>
        :
          <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>{t("map_coming_soon",baseLang)}</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>{t("map_foundations_dev",baseLang)}</p>
            <p style={{color:"var(--gray-300)",fontSize:12,marginTop:8}}>{t("map_start_a1",baseLang)}</p>
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
          {[{label:t("map_xp_earned",baseLang),value:user.xp||0,icon:"⚡"},{label:t("map_lessons_done",baseLang),value:`${dl}/${tl}`,icon:"📚"},{label:t("map_vocabulary",baseLang),value:vocabCount,icon:"🧠"},{label:t("map_progress",baseLang),value:`${op}%`,icon:"📊"}].map(s=><div key={s.label} style={{padding:"14px 12px",borderRadius:16,background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.08)"}}>
            <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{s.value}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{s.label}</div>
          </div>)}
        </div>
        <div style={{padding:"16px 18px",borderRadius:16,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>{t("map_polyglot_tip",baseLang)}</div>
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
              <div className="hd" style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>{t("found_title",baseLang)}</div>
              <div style={{fontSize:12,color:"var(--gray-400)"}}>{secCount>0?`${secCount} ${t("found_sections",baseLang)} · ${t("found_pre_a1",baseLang)}`:t("found_desc",baseLang)}</div>
            </div>
            <span style={{padding:"5px 14px",borderRadius:12,background:"linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 55%, #5840B8 100%)",color:"white",fontSize:10,fontWeight:800,letterSpacing:0.3,boxShadow:"0 3px 10px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1)",position:"relative",overflow:"hidden",zIndex:2}}><span style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>{secCount>0?`${secCount} ${t("found_topics",baseLang)}`:t("found_preview",baseLang)}</span></span>
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

// renderNavTitle moved to components/shared.jsx

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
    return <LessonErrorBoundary onBack={()=>{setRunning(false);setSelLesson(null);}} baseLang={baseLang}><LessonEngine
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
        <h1 style={{fontSize:24,fontWeight:800,color:dk?"#E8E6F0":"#2D2B55",marginBottom:6,fontFamily:"'Quicksand','DM Sans',system-ui,sans-serif"}}>{t("dev_lingoverse","en")}</h1>
        <p style={{fontSize:13,color:dk?"#9590B0":"#8B85A8",marginBottom:28,lineHeight:1.5}}>Early access — enter developer code</p>
        <input type="password" value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleSubmit()} placeholder={t("dev_access_code","en")} autoFocus style={{width:"100%",padding:"14px 18px",borderRadius:14,border:error?`2px solid #F56565`:`2px solid ${dk?"rgba(123,94,232,0.3)":"#E0D8F8"}`,background:dk?"rgba(30,28,50,0.6)":"#FAFAFE",fontSize:16,fontFamily:"inherit",outline:"none",textAlign:"center",letterSpacing:8,color:dk?"#E8E6F0":"#2D2B55",transition:"border .2s",boxSizing:"border-box"}}/>
        {error&&<p style={{fontSize:12,color:"#F56565",marginTop:8,fontWeight:600}}>{t("dev_invalid","en")}</p>}
        <button onClick={handleSubmit} style={{marginTop:20,width:"100%",padding:"14px",borderRadius:14,border:"none",background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)",transition:"transform .1s",fontFamily:"inherit"}}>{t("dev_enter","en")}</button>
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

  // ── RTL: set dir attribute on <html> when baseLang is Arabic ──
  useEffect(()=>{
    document.documentElement.dir=baseLang==="ar"?"rtl":"ltr";
    return()=>{document.documentElement.dir="ltr";};
  },[baseLang]);

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
  const unlock=id=>{if(user.achs.includes(id))return;const a=ACHS.find(x=>x.id===id);if(!a)return;setUser(u=>({...u,achs:[...u.achs,id],xp:u.xp+a.xp}));showToast(`Achievement: ${tk(a.nameKey)}!`,a.icon);};
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

  // Bottom navigation bar (mobile)
  const BottomNav=()=>{
    const tabs=[
      {id:"home",icon:"house",label:t("nav_home",baseLang)},
      {id:"learn",icon:"books_stack",label:t("nav_learn",baseLang)||"Learn"},
      {id:"chat",icon:"robot",label:t("nav_chat",baseLang)},
      {id:"cefr-reference",icon:"clipboard",label:t("nav_ref",baseLang)||"Ref"},
      {id:"profile",icon:"avatar",label:t("nav_profile",baseLang)},
    ];
    return(
      <div className="bottomnav">
        {tabs.map(tb=>(
          <div key={tb.id} className={`bottomnav-item ${page===tb.id?"active":""}`}
            onClick={()=>{setPage(tb.id);if(tb.id==="chat"){setShowVerumius(false);setVrFullscreen(false);setVrPos(null);}}}>
            <span className="bottomnav-icon"><AppIcon name={tb.icon} size={24}/></span>
            <span>{tb.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return(
    <>
      <style>{CSS}</style>
      <NebulaBackground/>
      {/* Verumius chat panel */}
      {showVerumius&&(()=>{const isMob=typeof window!=="undefined"&&window.innerWidth<=700;return <div className={"vr-wrap"+(vrFullscreen?" vr-fs":"")} ref={vrPanelRef} style={vrFullscreen?{position:"fixed",top:64,left:0,right:"auto",bottom:"auto",width:"100vw",height:"calc(100dvh - 64px)",maxHeight:"calc(100dvh - 64px)",borderRadius:0,transition:"all 0.52s cubic-bezier(0.4,0,0.2,1)"}:{...(!isMob?{width:vrSize.width,height:vrSize.height}:{}),...(vrPos?{position:"fixed",top:vrPos.y,left:vrPos.x,right:"auto",bottom:"auto"}:{}),transition:isMob?"none":(vrDragging||vrExiting?"none":"all 0.42s cubic-bezier(0.34,1.56,0.64,1)"),animation:vrExiting?"vr-inflate 0.46s cubic-bezier(0,0,0.3,1) forwards":""}}>
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
          <button className="vr-send" disabled={!vInput.trim()||vLoading} onClick={sendToVerumius} onTouchEnd={e=>{e.preventDefault();if(vInput.trim()&&!vLoading)sendToVerumius();}}>
            <svg width="16" height="16" viewBox="0 0 13 13" fill="white"><path d="M0.5 12.5L6.5 0.5L12.5 12.5L6.5 9L0.5 12.5Z"/></svg>
          </button>
        </div>
      </div>;})()}
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
      {/* Verumius FAB (mobile only — CSS hides on desktop) */}
      {ob&&authed&&page!=="chat"&&<div className={"vr-fab"+(showVerumius?" open":"")} onClick={()=>{
        if(showVerumius){setVrFullscreen(false);setVrPos(null);setShowVerumius(false);}
        else{setVrSource("fab");setVrFullscreen(false);setShowVerumius(true);}
      }}>
        {showVerumius
          ?<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
          :<AppIcon name="robot" size={28}/>}
      </div>}
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
          <BottomNav/>
        </>
      )}
      {toast&&<Toast key={toast.key} message={toast.message} icon={toast.icon} onDone={()=>setToast(null)}/>}
      {pops.map(p=><XpPop key={p.key} amount={p.amount} x={p.x} y={p.y}/>)}
    </>
  );
}
