import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { VOCAB, t } from '../data/vocabulary.js';
import { shuffle, cap, UNITS } from '../utils.js';
import { UISounds } from '../audio.jsx';
import { Confetti, ContinueButton, NavArrow, ScoreCircle, AppIcon } from '../components/shared.jsx';
import { clickableProps } from '../a11y.js';

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
            return <div key={m.id} {...clickableProps(()=>{if(!m.disabled)setQMode(m.id);},{label:m.label})} aria-disabled={m.disabled} aria-pressed={active} style={{
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
            return <div key={i} role="button" tabIndex={answered?-1:0} aria-label={`Answer ${"ABCD"[i]}: ${o}`} aria-disabled={answered} className={cls} style={{...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>doAnswer(o)} onKeyDown={(e)=>{if(answered)return;if(e.key==="Enter"||e.key===" "){e.preventDefault();doAnswer(o);}}}><div className="quiz-letter">{"ABCD"[i]}</div>{o}</div>;
          })}
        </div>

        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>{t("quiz_kb_hint",baseLang)}</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===q.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===q.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {q.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===q.ans} baseLang={baseLang} spaceRef={continueRef}/>}
      </div>
    </div>
  );
}

export default Quiz;
