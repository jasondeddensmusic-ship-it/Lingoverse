import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ── Data imports ──
import { LANGUAGES, LANG_META } from './data/metadata.js';
import { tk, t, ACHS, ARTICLE_COLORS, getArticle } from './data/vocabulary.js';
import { searchUnits, _findHit, UNITS } from './utils.js';
import { UISounds, UI_SOUNDS_ENABLED } from './audio.jsx';
import { useFocusNav } from './hooks.js';
import { CSS } from "./styles.js";
import { clearSrsData } from "./srs.js";

// ── Component imports ──
import { AppIcon } from './components/shared.jsx';
import NebulaBackground from './components/NebulaBackground.jsx';
import VLLogo from './components/VLLogo.jsx';
import CountryFlag from './components/CountryFlag.jsx';
import { Toast, XpPop } from './components/Toast.jsx';

// ── Page imports (React.lazy for code splitting) ──
const Home = React.lazy(() => import('./pages/Home.jsx'));
const LearnPage = React.lazy(() => import('./pages/LearnPage.jsx'));
const VocabularyPage = React.lazy(() => import('./pages/VocabularyPage.jsx'));
const Flashcards = React.lazy(() => import('./pages/Flashcards.jsx'));
const Quiz = React.lazy(() => import('./pages/Quiz.jsx'));
const Chat = React.lazy(() => import('./pages/Chat.jsx'));
const GrammarPage = React.lazy(() => import('./pages/GrammarPage.jsx'));
const IdiomsPage = React.lazy(() => import('./pages/IdiomsPage.jsx'));
const CefrReferencePage = React.lazy(() => import('./pages/CefrReferencePage.jsx'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const AuthScreen = React.lazy(() => import('./pages/AuthScreen.jsx'));
const Onboarding = React.lazy(() => import('./pages/Onboarding.jsx'));
const DevGate = React.lazy(() => import('./pages/DevGate.jsx'));

// ── Loading fallback ──
function Loading(){
  return <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"40vh"}}>
    <div style={{width:40,height:40,border:"4px solid rgba(123,94,232,0.15)",borderTopColor:"#7B5EE8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}/>
  </div>;
}

// ── Verumius markdown renderer ──
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
  };
  const [page,setPage]=useState("home");
  const [jumpTo,setJumpTo]=useState(null);
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
  const [vMsgs,setVMsgs]=useState([]);
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
  const [vrSource,setVrSource]=useState("fab");
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

  // ── Close search float on click outside ──
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
  useFocusNav(null,null,{enabled:true});

  // ── Backspace: back to home ──
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

  // ── Global hover tick ──
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

  // ── Ctrl+D: Developer reset ──
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

  // ── NavBar (3 tabs: Profile | Home | AI Chat) ──
  const NavBar=()=>{
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

  // ── BottomNav (mobile) ──
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
        <div className="vr-rz vr-rz-se" onMouseDown={e=>onVrCornerMouseDown('se',e)}/>
        <div className="vr-rz vr-rz-sw" onMouseDown={e=>onVrCornerMouseDown('sw',e)}/>
        <div className="vr-rz vr-rz-ne" onMouseDown={e=>onVrCornerMouseDown('ne',e)}/>
        <div className="vr-rz vr-rz-nw" onMouseDown={e=>onVrCornerMouseDown('nw',e)}/>
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
      {/* Tools tab */}
      <div className="vl-tab">
        {showTools&&<div className="vl-panel">
          <button className={"vl-ibtn"+(darkMode?" on":"")} title="Dark mode (Ctrl+N)" onClick={()=>setDarkMode(d=>!d)}>
            <span style={{fontSize:14,lineHeight:1,color:darkMode?"#C0AEFF":"#777788"}}>{darkMode?"☀":"☽"}</span>
          </button>
          <button className={"vl-ibtn"+(cloudMode?" on":"")} title="Nebula mode" onClick={()=>{setCloudMode(c=>{const nv=!c;try{localStorage.setItem("vl_cloud_mode",String(nv));}catch(e){}return nv;});}}>
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
      {/* Verumius FAB (mobile) */}
      {ob&&authed&&page!=="chat"&&<div className={"vr-fab"+(showVerumius?" open":"")} onClick={()=>{
        if(showVerumius){setVrFullscreen(false);setVrPos(null);setShowVerumius(false);}
        else{setVrSource("fab");setVrFullscreen(false);setShowVerumius(true);}
      }}>
        {showVerumius
          ?<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
          :<AppIcon name="robot" size={28}/>}
      </div>}
      {/* Reset Modal */}
      {showResetModal&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={()=>setShowResetModal(false)}>
        <div onClick={e=>e.stopPropagation()} style={{background:"var(--card-bg)",borderRadius:24,padding:"36px 40px",maxWidth:360,textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
          <div style={{marginBottom:12}}><AppIcon name="trash_bin" size={52}/></div>
          <h2 style={{fontSize:20,fontWeight:800,marginBottom:8,color:"var(--gray-800)"}}>Reset All Progress?</h2>
          <p style={{fontSize:14,color:"var(--gray-500)",marginBottom:24,lineHeight:1.5}}>This will erase all XP, completed lessons, achievements, flags, and quiz history. This cannot be undone.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={()=>setShowResetModal(false)} style={{padding:"12px 28px",borderRadius:14,border:"2px solid var(--gray-200)",background:"var(--card-bg)",fontSize:15,fontWeight:700,cursor:"pointer",color:"var(--gray-600)"}}>N — Cancel</button>
            <button onClick={()=>{setUser({xp:0,streak:1,wl:0,lw:new Set(),cm:0,achs:[],ls:new Set(),progress:{}});setFlags([]);setQuizLog([]);clearSrsData();setShowResetModal(false);showToast("All progress reset!","🗑️");}} style={{padding:"12px 28px",borderRadius:14,border:"none",background:"linear-gradient(135deg,#E85D75,#D4394B)",fontSize:15,fontWeight:700,cursor:"pointer",color:"white"}}>Y — Reset</button>
          </div>
          <p style={{fontSize:11,color:"var(--gray-300)",marginTop:16}}>Press Y to confirm, N to cancel</p>
        </div>
      </div>}
      {/* Curriculum Search Float Panel */}
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
      {/* Step Preview Modal */}
      {previewResult&&(()=>{
        const {unit,lesson,si,step:s}=previewResult;
        const dk=darkMode;
        const qBubSt={background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22)0%,rgba(100,80,200,0.14)40%,rgba(80,60,180,0.08)100%)":"linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%)",borderRadius:22,padding:"20px 22px",marginBottom:14,textAlign:"center",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
        const qArc=<div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>;
        const renderCard=()=>{
          if(s.type==="teach"){
            const tLang=unit.lang||"nl";const art=getArticle(s.nl,tLang);const c=ARTICLE_COLORS[art]||{pill:"rgba(123,94,232,0.1)",pillText:"#7B5EE8"};
            const kind=s.kind||"word";const lbl=kind==="letter"?"NEW LETTER":kind==="info"?"CONCEPT":kind==="idiom"?"NEW EXPRESSION":kind==="grammar"?"GRAMMAR PATTERN":kind==="phrase"?"KEY PHRASE":"NEW WORD";
            const isScript=/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(s.nl||"");
            const artWord=art!=="none"&&!isScript?s.nl.split(/\s(.+)/):null;
            const nlSz=kind==="letter"?64:isScript?48:36;const nlColor=isScript?"#7B5EE8":"var(--gray-800)";
            const isDialEx=/[AB]:\s/.test(s.example||"");const capStr=t=>t?t.charAt(0).toUpperCase()+t.slice(1):t;
            const bubSt={background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22)0%,rgba(100,80,200,0.14)40%,rgba(80,60,180,0.08)100%)":"linear-gradient(180deg,rgba(200,190,255,0.45)0%,rgba(220,210,255,0.3)50%,rgba(235,230,255,0.18)100%)",borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),0 0 14px rgba(123,94,232,0.2),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),0 0 12px rgba(180,165,240,0.15),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
            const gArc={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07)0%,rgba(255,255,255,0.01)60%,transparent 100%)":"linear-gradient(180deg,rgba(255,255,255,0.55)0%,rgba(255,255,255,0.1)60%,transparent 100%)",pointerEvents:"none",zIndex:1};
            return(<><div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:"4px solid #7B5EE8",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:14}}><div style={{background:"linear-gradient(135deg,rgba(123,94,232,0.06),rgba(46,205,167,0.04))",padding:"10px 18px 8px"}}><span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"#7B5EE8"}}>{lbl}</span></div><div style={{textAlign:"center",padding:"14px 24px 6px"}}><div style={{marginBottom:4}}>{artWord&&artWord[1]?(<span style={{fontSize:nlSz,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}><span style={{color:c.pillText}}>{capStr(artWord[0])}</span>{" "}<span style={{color:c.pillText}}>{artWord[1]}</span></span>):(<span style={{fontSize:nlSz,fontWeight:800,color:nlColor,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{capStr(s.nl||s.trg)}</span>)}</div></div><div style={{textAlign:"center",paddingBottom:14}}><span style={{fontSize:18,color:"var(--teal-text)",fontWeight:700}}>{capStr(s.en)}</span></div></div>{s.example&&(()=>{const ex=s.example;const exEn=s.exampleEn||"";if(isDialEx){const turns=ex.split(/(?=[AB]:\s)/).filter(Boolean);const turnsEn=exEn.split(/(?=[AB]:\s)/).filter(Boolean);return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>{turns.map((turn,ti)=>{const isA=turn.trim().startsWith("A:");const content=turn.replace(/^[AB]:\s*/,"").trim();const enC=(turnsEn[ti]||"").replace(/^[AB]:\s*/,"").trim();return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:28,paddingRight:isA?28:0}}><div style={{...bubSt,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}><div style={gArc}/><div style={{position:"relative",zIndex:2}}><div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4}}>{content}</div>{enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}</div></div></div>;})}</div>;}return <div style={{...bubSt,marginBottom:14}}><div style={gArc}/><div style={{position:"relative",zIndex:2}}><div style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.5}}>{ex}</div>{exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exEn}</div>}</div></div>;})()}{s.note&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:10}}>{s.note.split(/\\n|\n/).map((line,li)=>{if(!line.trim())return <div key={li} style={{height:6}}/>;if(line.startsWith("•"))return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{line.slice(1).trim()}</span></div>;if(line.startsWith("⚡")||line.startsWith("⚠️"))return <div key={li} style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,padding:"3px 0",lineHeight:1.6}}>{line}</div>;return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{line}</div>;})}</div>}</>);
          }
          if(s.type==="tip")return(<div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}><div style={{padding:"16px 22px 10px"}}><div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:s.title?10:0,fontWeight:700,display:"flex",alignItems:"center",gap:6}}>💡 Good to know</div>{s.title&&<h3 style={{fontSize:17,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',system-ui,sans-serif",margin:0,lineHeight:1.35}}>{s.title}</h3>}</div>{s.text&&<div style={{padding:"0 22px 20px",fontSize:14,color:"var(--gray-600)",lineHeight:1.65,whiteSpace:"pre-wrap",fontFamily:"'Nunito',system-ui,sans-serif"}}>{s.text}</div>}</div>);
          if(s.type==="mc")return(<><div style={{...qBubSt}}>{qArc}<div style={{position:"relative",zIndex:2}}><div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700}}>Choose the correct answer</div><div style={{fontSize:16,fontWeight:600,lineHeight:1.55,color:"var(--gray-800)"}}>{s.q}</div></div></div><div style={{display:"grid",gridTemplateColumns:"1fr",gap:8,marginBottom:8}}>{(s.opts||[]).map((o,i)=><div key={i} className={`quiz-opt${o===s.ans?" correct":""}`} style={{pointerEvents:"none",cursor:"default"}}><div className="quiz-letter">{"ABCD"[i]}</div>{o}</div>)}</div></>);
          if(s.type==="fb"||s.type==="drag_fill"){const blanks=s.blanks||{1:Array.isArray(s.a)?s.a[0]:(s.a||"…")};let tpl=s.s||"";Object.keys(blanks).forEach(k=>{tpl=tpl.replace(new RegExp(`\\{${k}\\}`,"g"),`|||${blanks[k]}|||`);});const parts=tpl.split("|||");return(<div style={{...qBubSt}}>{qArc}<div style={{position:"relative",zIndex:2}}><div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700}}>Fill in the blank</div><div style={{fontSize:16,fontWeight:600,lineHeight:1.8,color:"var(--gray-800)"}}>{parts.map((p,i)=>i%2===1?<span key={i} style={{display:"inline-block",borderBottom:"3px solid var(--purple-accent)",color:"var(--teal-dark)",fontWeight:800,padding:"0 3px",margin:"0 2px"}}>{p}</span>:<span key={i}>{p}</span>)}</div></div></div>);}
          if(s.type==="match")return(<div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}><div style={{padding:"14px 20px 8px",color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,fontWeight:700}}>Match the pairs</div>{(s.pairs||[]).map((p,i)=><div key={i} style={{display:"flex",alignItems:"center",padding:"10px 20px",borderTop:"1px solid var(--gray-100)",gap:12}}><div style={{flex:1,fontSize:15,fontWeight:700,color:"var(--purple-accent-text)"}}>{p.nl}</div><div style={{color:"var(--gray-300)",fontSize:13,flexShrink:0}}>⟷</div><div style={{flex:1,fontSize:14,color:"var(--teal-text)",fontWeight:600,textAlign:"right"}}>{p.en}</div></div>)}</div>);
          if(s.type==="intro")return(<div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden"}}><div style={{background:"linear-gradient(135deg,rgba(123,94,232,0.06),rgba(46,205,167,0.04))",padding:"14px 22px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:28}}>{lesson.icon||"📖"}</span><span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>Lesson</span></div><div style={{textAlign:"center",padding:"14px 24px 6px"}}><h2 style={{fontSize:22,fontWeight:800,color:"var(--gray-800)",lineHeight:1.2,fontFamily:"'Quicksand',system-ui,sans-serif",margin:0}}>{s.title||lesson.title}</h2></div>{s.desc&&<div style={{textAlign:"center",padding:"4px 20px 14px"}}>{(s.desc.split(/\\n|\n/)).map((ln,i)=>{if(!ln.trim())return <div key={i} style={{height:10}}/>;return <p key={i} style={{fontSize:13,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6,margin:"3px 0"}}>{ln}</p>;})}</div>}{s.goals&&s.goals.length>0&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"12px 22px 14px"}}><div style={{fontSize:9.5,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)",marginBottom:8}}>In this lesson</div>{s.goals.map((g,i)=><div key={i} style={{fontSize:13,color:"var(--teal-text)",fontWeight:600,padding:"4px 0",display:"flex",alignItems:"center",gap:8}}><span style={{color:"var(--teal-text)",fontWeight:800,fontSize:11}}>▸</span><span>{g}</span></div>)}</div>}</div>);
          return(<div style={{padding:"16px",fontSize:13,color:"var(--gray-500)"}}>{s.title&&<div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:8}}>{s.title}</div>}{s.q&&<div style={{marginBottom:8,fontWeight:600}}>{s.q}</div>}{s.text&&<div style={{lineHeight:1.6}}>{s.text}</div>}{s.s&&<div style={{fontWeight:600,color:"var(--gray-700)"}}>{s.s}</div>}<div style={{height:12}}/></div>);
        };
        return(
          <div className="sp-ov" onClick={()=>setPreviewResult(null)}>
            <div className="sp-wrap" onClick={e=>e.stopPropagation()}>
              <div className="sp-bar">
                {(()=>{
                  const lNum=(unit.lessons||[]).findIndex(l=>l.id===lesson.id)+1;
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
      {/* ── Main routing ── */}
      <React.Suspense fallback={<Loading/>}>
      {!devAccess?<DevGate onAccess={()=>{try{sessionStorage.setItem("lingoverse:dev","1");}catch(e){}setDevAccess(true);}}/>:!ob?<Onboarding onComplete={onboard}/>:!authed?<AuthScreen lang={lang} baseLang={baseLang} onAuth={(p)=>{setProfile(p);setAuthed(true);showToast(`${t("home_welcome",baseLang)} ${p.displayName}!`,"🎉");}}/>:(
        <>
          <NavBar/>
          <div className="main anim" key={page}>
            {page==="home"&&<Home user={user} setPage={setPage} lang={lang} baseLang={baseLang}/>}
            {page==="learn"&&<LearnPage lang={lang} baseLang={baseLang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} jumpTo={jumpTo} clearJumpTo={()=>setJumpTo(null)}/>}
            {page==="vocabulary"&&<VocabularyPage lang={lang} user={user} showToast={showToast} baseLang={baseLang}/>}
            {page==="flashcards"&&<Flashcards lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}/>}
            {page==="curriculum"&&<div className="anim" style={{textAlign:"center",padding:"60px 20px"}}><AppIcon name="brain" size={72}/><h2 style={{fontSize:24,fontWeight:800,color:"var(--gray-800)",marginTop:16,marginBottom:8,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>Personal Curriculum</h2><p style={{color:"var(--gray-400)",fontSize:14,lineHeight:1.6,maxWidth:320,margin:"0 auto 24px"}}>Your AI-powered personalized learning path is being developed. It will adapt to your strengths, weaknesses, and learning style.</p><div style={{display:"inline-block",padding:"10px 24px",borderRadius:16,background:"linear-gradient(180deg, #C0AEF8 0%, #7B5EE8 50%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:13,boxShadow:"0 4px 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)"}}>Coming Soon</div></div>}
            {page==="quiz"&&<Quiz lang={lang} baseLang={baseLang} user={user} addXp={addXp} learnWord={learnWord} onPerfect={()=>unlock("quiz_perfect")} showToast={showToast}/>}
            {page==="chat"&&<Chat lang={lang} baseLang={baseLang} user={user} addXp={addXp} addChat={addChat} learnedWords={[...user.lw]}/>}
            {page==="grammar"&&<GrammarPage lang={lang} baseLang={baseLang}/>}
            {page==="idioms"&&<IdiomsPage lang={lang} baseLang={baseLang}/>}
            {page==="cefr-reference"&&<CefrReferencePage lang={lang} baseLang={baseLang} user={user}/>}
            {page==="settings"&&<SettingsPage lang={lang} baseLang={baseLang} darkMode={darkMode} setDarkMode={setDarkMode} cloudMode={cloudMode} setCloudMode={setCloudMode} user={user} setUser={setUser} onLogout={async()=>{setAuthed(false);setProfile(null);setOb(false);setPage("home");try{await window.storage?.delete("lingoverse:state");}catch(e){}}} setLang={setLang}/>}
            {page==="profile"&&<Profile user={user} lang={lang} baseLang={baseLang} flags={flags} setFlags={setFlags} onLogout={async()=>{setAuthed(false);setProfile(null);setOb(false);setPage("home");try{await window.storage?.delete("lingoverse:state");}catch(e){}}} setLang={setLang} setPage={setPage}/>}
          </div>
          <BottomNav/>
        </>
      )}
      </React.Suspense>
      {toast&&<Toast key={toast.key} message={toast.message} icon={toast.icon} onDone={()=>setToast(null)}/>}
      {pops.map(p=><XpPop key={p.key} amount={p.amount} x={p.x} y={p.y}/>)}
    </>
  );
}
