import React from "react";

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

export default CountryFlag;
