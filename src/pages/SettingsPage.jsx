import React, { useState } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';

// ── Helpers ──
const lsGet=(key,fallback)=>{try{const v=localStorage.getItem(key);return v!==null?v:fallback;}catch(e){return fallback;}};
const lsBool=(key,fallback)=>lsGet(key,fallback?"true":"false")==="true";
const lsSet=(key,val)=>{try{localStorage.setItem(key,String(val));}catch(e){}};

function SettingsPage({lang,baseLang="en",darkMode,setDarkMode,cloudMode,setCloudMode,user,setUser,onLogout,setLang}){
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);

  // Local mirrors of localStorage prefs (so toggles react instantly)
  const [storyMode,setStoryMode]=useState(()=>lsBool("vl_story_mode",false));
  const [uiSounds,setUiSounds]=useState(()=>lsBool("vl_ui_sounds",true));
  const [grammarHl,setGrammarHl]=useState(()=>lsBool("vl_grammar_hl",true));
  const dailyGoal=user?.dailyGoal||15;

  // ── Toggle helpers ──
  const toggleStory=()=>{const v=!storyMode;setStoryMode(v);lsSet("vl_story_mode",v);};
  const toggleSounds=()=>{const v=!uiSounds;setUiSounds(v);lsSet("vl_ui_sounds",v);};
  const toggleGrammar=()=>{const v=!grammarHl;setGrammarHl(v);lsSet("vl_grammar_hl",v);};
  const setGoal=(min)=>{if(setUser)setUser(u=>({...u,dailyGoal:min}));};

  // ── Styles ──
  const sectionStyle={
    background:dk
      ?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"
      :"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",
    borderRadius:22,padding:"18px 20px",marginBottom:14,
    border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",
    boxShadow:dk
      ?"0 6px 20px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)"
      :"0 6px 20px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
  };
  const sectionLabel={
    fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:2,
    color:dk?"rgba(200,184,255,0.5)":"rgba(123,94,232,0.5)",
    fontFamily:"'Nunito',sans-serif",marginBottom:12,
  };
  const rowStyle={
    display:"flex",alignItems:"center",justifyContent:"space-between",
    padding:"10px 0",
  };
  const rowBorder={
    borderBottom:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.08)",
  };
  const labelStyle={fontSize:14,fontWeight:700,color:"var(--gray-800)",fontFamily:"'Quicksand',sans-serif"};
  const descStyle={fontSize:11,color:"var(--gray-500)",fontFamily:"'Nunito',sans-serif",marginTop:1};

  // ── Toggle component ──
  const Toggle=({on,onToggle})=>(
    <button onClick={onToggle} style={{
      width:44,height:26,borderRadius:13,border:"none",cursor:"pointer",padding:0,
      background:on
        ?"linear-gradient(180deg, #9B7AE8 0%, #7B5EE8 50%, #6545C8 100%)"
        :(dk?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.1)"),
      boxShadow:on
        ?"0 2px 8px rgba(123,94,232,0.35), inset 0 1px 0 rgba(255,255,255,0.25)"
        :"inset 0 1px 3px rgba(0,0,0,0.1)",
      position:"relative",transition:"background .2s ease",flexShrink:0,
    }}>
      <div style={{
        width:20,height:20,borderRadius:10,
        background:"white",
        boxShadow:"0 2px 6px rgba(0,0,0,0.15)",
        position:"absolute",top:3,
        left:on?21:3,
        transition:"left .2s cubic-bezier(.4,0,.2,1)",
      }}/>
    </button>
  );

  // ── Goal pill ──
  const GoalPill=({min})=>{
    const active=dailyGoal===min;
    return(
      <button onClick={()=>setGoal(min)} style={{
        padding:"6px 16px",borderRadius:14,border:"none",cursor:"pointer",
        fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:13,
        background:active
          ?"linear-gradient(180deg, #9B7AE8 0%, #7B5EE8 50%, #6545C8 100%)"
          :(dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)"),
        color:active?"white":(dk?"rgba(255,255,255,0.6)":"var(--gray-600)"),
        boxShadow:active?"0 3px 10px rgba(123,94,232,0.35), inset 0 1px 0 rgba(255,255,255,0.3)":"none",
        transition:"all .2s ease",
      }}>
        {min} {t("settings_minutes",baseLang)}
      </button>
    );
  };

  return(
    <div className="anim" style={{maxWidth:500,margin:"0 auto"}}>
      {/* Header */}
      <div style={{textAlign:"center",padding:"16px 0 20px"}}>
        <h1 className="hd" style={{fontSize:24,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--gray-800)"}}>
          {t("settings_title",baseLang)}
        </h1>
      </div>

      {/* ── APPEARANCE ── */}
      <div style={sectionStyle}>
        <div style={sectionLabel}>{t("settings_appearance",baseLang)}</div>
        <div style={{...rowStyle,...rowBorder}}>
          <div>
            <div style={labelStyle}>{t("settings_dark_mode",baseLang)}</div>
          </div>
          <Toggle on={darkMode} onToggle={()=>setDarkMode(d=>!d)}/>
        </div>
        <div style={rowStyle}>
          <div>
            <div style={labelStyle}>{t("settings_nebula_bg",baseLang)}</div>
          </div>
          <Toggle on={cloudMode} onToggle={()=>setCloudMode(c=>!c)}/>
        </div>
      </div>

      {/* ── LEARNING ── */}
      <div style={sectionStyle}>
        <div style={sectionLabel}>{t("settings_learning",baseLang)}</div>
        <div style={{...rowStyle,...rowBorder,flexDirection:"column",alignItems:"flex-start",gap:8}}>
          <div style={labelStyle}>{t("settings_daily_goal",baseLang)}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <GoalPill min={5}/>
            <GoalPill min={15}/>
            <GoalPill min={30}/>
          </div>
        </div>
        <div style={{...rowStyle,...rowBorder}}>
          <div>
            <div style={labelStyle}>{t("settings_story_mode",baseLang)}</div>
            <div style={descStyle}>{t("settings_story_desc",baseLang)}</div>
          </div>
          <Toggle on={storyMode} onToggle={toggleStory}/>
        </div>
        <div style={{...rowStyle,...rowBorder}}>
          <div>
            <div style={labelStyle}>{t("settings_grammar_hl",baseLang)}</div>
            <div style={descStyle}>{t("settings_grammar_desc",baseLang)}</div>
          </div>
          <Toggle on={grammarHl} onToggle={toggleGrammar}/>
        </div>
        <div style={rowStyle}>
          <div>
            <div style={labelStyle}>{t("settings_sounds",baseLang)}</div>
            <div style={descStyle}>{t("settings_sounds_desc",baseLang)}</div>
          </div>
          <Toggle on={uiSounds} onToggle={toggleSounds}/>
        </div>
      </div>

      {/* ── LANGUAGE ── */}
      <div style={sectionStyle}>
        <div style={sectionLabel}>{t("settings_language",baseLang)}</div>
        <div style={rowStyle}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <CountryFlag code={lang} size={24}/>
            <div>
              <div style={labelStyle}>{t("settings_target_lang",baseLang)}</div>
              <div style={descStyle}>{L?.native||lang}</div>
            </div>
          </div>
          {setLang&&<select
            value={lang}
            onChange={e=>setLang(e.target.value)}
            style={{
              padding:"6px 12px",borderRadius:12,
              border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
              background:dk?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.8)",
              color:"var(--gray-800)",fontSize:13,fontFamily:"'Nunito',sans-serif",
              cursor:"pointer",outline:"none",
            }}
          >
            {LANGUAGES.filter(l=>l.code!=="en").map(l=>(
              <option key={l.code} value={l.code}>{l.native}</option>
            ))}
          </select>}
        </div>
      </div>

      {/* ── ACCOUNT ── */}
      <div style={sectionStyle}>
        <div style={sectionLabel}>{t("settings_account",baseLang)}</div>
        {onLogout&&<button onClick={onLogout} style={{
          width:"100%",padding:"12px",borderRadius:14,border:"none",cursor:"pointer",
          fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:14,
          background:dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",
          color:"var(--gray-600)",marginBottom:8,
          transition:"all .15s ease",
        }}
          onMouseEnter={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.07)";}}
          onMouseLeave={e=>{e.currentTarget.style.background=dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)";}}
        >
          {t("settings_logout",baseLang)}
        </button>}
      </div>
    </div>
  );
}

export default SettingsPage;
