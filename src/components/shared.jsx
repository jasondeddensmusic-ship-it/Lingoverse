import React, { useState, useEffect, useRef } from "react";
import { t } from '../data/vocabulary.js';
import { ICON_REG } from '../data/metadata.js';

function FlagButton({lessonId,stepIndex,stepData,addFlag,baseLang="en"}){
  const [open,setOpen]=useState(false);
  const [reason,setReason]=useState(null);
  const [detail,setDetail]=useState("");
  const [sent,setSent]=useState(false);

  const reasons=[
    {id:"wrong_answer",label:t("flag_wrong_answer",baseLang),icon:"❌",desc:t("flag_wrong_desc",baseLang)},
    {id:"hint_spoiler",label:t("flag_hint_leak",baseLang),icon:"💡",desc:t("flag_hint_desc",baseLang)},
    {id:"unclear_question",label:t("flag_unclear",baseLang),icon:"🤔",desc:t("flag_unclear_desc",baseLang)},
    {id:"missing_answer",label:t("flag_valid",baseLang),icon:"✅",desc:t("flag_valid_desc",baseLang)},
    {id:"typo",label:t("flag_typo",baseLang),icon:"📝",desc:t("flag_typo_desc",baseLang)},
    {id:"other",label:t("flag_other",baseLang),icon:"📋",desc:t("flag_other_desc",baseLang)},
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
        <span style={{fontSize:13}}>⚑</span> {t("flag_report",baseLang)}
      </button>
  );

  return(
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setOpen(false);setReason(null);setDetail("");}}>
      <div style={{maxWidth:440,width:"100%",background:"var(--card-bg)",border:"2px solid var(--coral)",borderRadius:20,padding:20,animation:"fadeUp .2s",boxShadow:"0 20px 60px rgba(0,0,0,0.15)"}} onClick={e=>e.stopPropagation()}>
      {sent?(
        <div style={{textAlign:"center",padding:16}}>
          <div style={{fontSize:28,marginBottom:8}}>✅</div>
          <div style={{fontWeight:700,color:"var(--teal-dark)"}}>{t("flag_thanks",baseLang)}</div>
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:4}}>{t("flag_helps",baseLang)}</div>
        </div>
      ):(
        <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontWeight:700,fontSize:14}}>🚩 {t("flag_whats_wrong",baseLang)}</div>
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
                placeholder={t("flag_detail",baseLang)}
                style={{width:"100%",padding:10,borderRadius:8,border:"1.5px solid var(--gray-200)",
                  fontSize:13,fontFamily:"inherit",resize:"vertical",minHeight:50,outline:"none"}}/>
              <button onClick={submit} style={{
                marginTop:8,width:"100%",padding:"10px 0",borderRadius:8,
                background:"var(--coral)",color:"white",border:"none",
                fontWeight:700,fontSize:14,cursor:"pointer"
              }}>{t("flag_submit",baseLang)} 🚩</button>
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
      const bl=this.props.baseLang||"en";
      return React.createElement("div",{style:{textAlign:"center",padding:40}},
        React.createElement("h2",{style:{fontSize:22,fontWeight:700,marginBottom:12,color:"#7B5EE8"}},t("err_something_wrong",bl)),
        React.createElement("p",{style:{fontSize:15,color:"#888",marginBottom:20}},t("err_lesson_error",bl)),
        React.createElement("button",{onClick:()=>{this.setState({hasError:false,error:null});if(this.props.onBack)this.props.onBack();},
          style:{fontSize:15,padding:"12px 28px",borderRadius:14,fontWeight:700,cursor:"pointer",color:"white",border:"none",background:"#7B5EE8"}},t("err_back_lessons",bl))
      );
    }
    return this.props.children;
  }
}

// ── Shared symbols extracted from verumlingua.jsx to break circular deps ──

// In-memory storage fallback (localStorage not available in sandbox)
const _memStore = {};

function AppIcon({name,size=24,style={}}){const src=ICON_REG[name];if(!src)return null;return <img src={src} alt={name} width={size} height={size} style={{display:"inline-block",verticalAlign:"middle",objectFit:"contain",filter:"drop-shadow(0 0 2px rgba(247,183,51,0.3)) drop-shadow(0 1px 2px rgba(200,160,40,0.15)) drop-shadow(0 0 0.5px rgba(60,40,20,0.25))",...style}}/>;}

const renderNavTitle=(icon,title,baseFontSize)=>{
  const hasScriptIcon=icon&&/[^\u0000-\u007F]/.test(icon);
  const iconDupes=hasScriptIcon&&title&&title.trim().startsWith(icon);
  const scaledSize=Math.round(baseFontSize*1.3);
  const parts=(title||"").split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g);
  return <>{!iconDupes&&icon&&<span>{icon} </span>}{parts.map((seg,i)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(seg)?<span key={i} style={{fontSize:scaledSize,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{seg}</span>:<span key={i}>{seg}</span>)}</>;
};

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
export { Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton, LessonErrorBoundary, AppIcon, BrandIcon, _memStore, renderNavTitle };

