import { CEFR_LEVELS, getCefrInfo } from './data/metadata.js';
import { FK_PLAYTHROUGH } from './data/foundations.js';
import { UNITS } from './utils.js';

export const isFoundationsUnlocked=(user,lang)=>{
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

export const getUserCefr=(user,lang)=>{
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

export function getFkModuleProgress(user, lang, secId, itemIdx) {
  const key = `${lang}:${secId}:${itemIdx}`;
  return user?.progress?.fkModules?.[key] || null;
}

export function setFkModuleProgress(setUser, lang, secId, itemIdx, update) {
  if (!setUser) return;
  const key = `${lang}:${secId}:${itemIdx}`;
  setUser(u => {
    const fkMods = {...((u.progress || {}).fkModules || {})};
    fkMods[key] = {...(fkMods[key] || {}), ...update, timestamp: Date.now()};
    return {...u, progress: {...(u.progress || {}), fkModules: fkMods}};
  });
}
