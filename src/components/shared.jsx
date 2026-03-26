import React, { useState, useEffect } from "react";
import { t } from '../data/vocabulary.js';

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

export { Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton };
