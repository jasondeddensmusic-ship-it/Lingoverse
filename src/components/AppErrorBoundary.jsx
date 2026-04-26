import React from "react";

// Top-level error boundary. Catches unhandled crashes anywhere in the app
// and renders a brand-styled fallback instead of a blank white page.
//
// Use only at the very top of the React tree (in App.jsx). Page-specific
// boundaries (e.g. LessonErrorBoundary) catch their own scope first; this
// is the last-resort safety net.
class AppErrorBoundary extends React.Component {
  constructor(props){super(props);this.state={hasError:false};}
  static getDerivedStateFromError(){return{hasError:true};}
  componentDidCatch(error,info){
    // eslint-disable-next-line no-console
    if(typeof console!=="undefined")console.error("[App crash]",error,info);
  }
  render(){
    if(this.state.hasError){
      return (
        <div role="alert" style={{
          minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",
          padding:"40px 24px",background:"linear-gradient(135deg,#7B5EE8,#5840B8)",
          color:"white",fontFamily:"system-ui,-apple-system,sans-serif",textAlign:"center",
        }}>
          <div style={{maxWidth:480}}>
            <div style={{fontSize:48,marginBottom:20}}>⚠️</div>
            <h1 style={{fontSize:26,fontWeight:800,marginBottom:12,fontFamily:"'Quicksand',sans-serif"}}>
              Something went wrong
            </h1>
            <p style={{fontSize:15,lineHeight:1.6,marginBottom:24,opacity:.92}}>
              VerumLingua hit an unexpected error. Your progress is safe — try reloading the page.
            </p>
            <button onClick={()=>{
              // Try clearing potentially-corrupt localStorage state
              try{
                if(this.state.error){
                  sessionStorage.setItem("vl_last_error",String(this.state.error));
                }
              }catch(e){}
              window.location.reload();
            }} style={{
              fontSize:15,padding:"12px 28px",borderRadius:14,fontWeight:700,
              cursor:"pointer",color:"#5840B8",border:"none",
              background:"white",fontFamily:"inherit",
              boxShadow:"0 4px 16px rgba(0,0,0,0.15)",
            }}>
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default AppErrorBoundary;
