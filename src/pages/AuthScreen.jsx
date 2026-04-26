import React, { useState, useEffect } from "react";
import { LANGUAGES, BASE_LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import { clickableProps } from '../a11y.js';

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
        <button aria-label="Back" onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <div style={{width:64,height:64,borderRadius:18,margin:"0 auto 16px",background:"linear-gradient(135deg,#7B5EE8,#A890FF)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,boxShadow:"0 6px 24px rgba(123,94,232,0.25)"}}>🔐</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_sign_in",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:24}}>{t("auth_welcome_back",baseLang)}</p>
        <div style={{maxWidth:300,margin:"0 auto",display:"flex",flexDirection:"column",gap:12}}>
          <input aria-label={t("auth_username",baseLang)} value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input aria-label={t("auth_password",baseLang)} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none",transition:"border .15s"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
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
        <button aria-label="Back" onClick={()=>{setMode("welcome");setError("");}} style={{position:"absolute",top:16,left:16,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"var(--gray-400)"}}>←</button>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("auth_create_profile",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:20}}>{t("auth_personalize",baseLang)}</p>

        {/* Avatar picker */}
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{width:80,height:80,borderRadius:22,margin:"0 auto 10px",background:"linear-gradient(135deg, var(--blue-light), var(--teal-light))",border:"3px solid var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40,boxShadow:"0 4px 16px rgba(74,143,231,0.2)"}}>{avatar}</div>
          <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap",maxWidth:300,margin:"0 auto"}}>
            {avatars.map(a=>(
              <div key={a} {...clickableProps(()=>setAvatar(a),{label:`Avatar ${a}`})} aria-pressed={avatar===a} style={{width:36,height:36,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"pointer",border:`2px solid ${avatar===a?"var(--blue)":"var(--gray-200)"}`,background:avatar===a?"var(--blue-light)":"var(--white)",transition:"all .15s"}}>{a}</div>
            ))}
          </div>
        </div>

        <div style={{maxWidth:320,margin:"0 auto",display:"flex",flexDirection:"column",gap:10}}>
          <input aria-label={t("auth_display_name",baseLang)} value={displayName} onChange={e=>setDisplayName(e.target.value)} placeholder={t("auth_display_name",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input aria-label={t("auth_username",baseLang)} value={username} onChange={e=>setUsername(e.target.value)} placeholder={t("auth_username",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>
          <input aria-label={t("auth_password",baseLang)} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("auth_password",baseLang)} style={{width:"100%",padding:"13px 18px",borderRadius:14,border:"2px solid var(--gray-200)",fontSize:15,fontFamily:"inherit",outline:"none"}} onFocus={e=>e.target.style.borderColor="var(--purple-accent)"} onBlur={e=>e.target.style.borderColor="var(--gray-200)"}/>

          {/* Experience level */}
          <div style={{marginTop:4}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:8}}>{t("auth_your_level",baseLang)}</div>
            <div style={{display:"flex",gap:6}}>
              {[{id:"beginner",label:"🌱 "+t("level_beginner",baseLang),desc:t("ob_starting_fresh",baseLang)},{id:"some",label:"📗 "+t("ob_some_basics",baseLang),desc:t("ob_know_few",baseLang)},{id:"inter",label:"📘 "+t("level_intermediate",baseLang),desc:t("ob_can_converse",baseLang)}].map(l=>(
                <div key={l.id} {...clickableProps(()=>setLevel(l.id),{label:l.label})} aria-pressed={level===l.id} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${level===l.id?"var(--teal)":"var(--gray-200)"}`,background:level===l.id?"var(--teal-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
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
                <div key={g.min} {...clickableProps(()=>setDailyGoal(g.min),{label:g.label})} aria-pressed={dailyGoal===g.min} style={{flex:1,padding:"10px 8px",borderRadius:12,border:`2px solid ${dailyGoal===g.min?"var(--blue)":"var(--gray-200)"}`,background:dailyGoal===g.min?"var(--blue-light)":"var(--white)",cursor:"pointer",textAlign:"center",transition:"all .15s"}}>
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

export default AuthScreen;
