import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'

// Storage polyfill for environments without window.storage (e.g. preview/dev)
if (!window.storage) {
  window.storage = {
    get: (key) => { const v = localStorage.getItem(key); return Promise.resolve(v ? { value: v } : null); },
    set: (key, value) => { localStorage.setItem(key, value); return Promise.resolve(); },
    delete: (key) => { localStorage.removeItem(key); return Promise.resolve(); },
  };
}

// Service Worker registration (PWA Phase 2 — offline mode + update banner).
// Tracked in AUTONOMOUS_QUEUE under VISUAL-002.
// Skip in dev (Vite serves /sw.js as 404 unless built; service workers only useful in prod).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    // Mark first-install so the UpdateBanner suppresses its message on first visit.
    if (!navigator.serviceWorker.controller) {
      try { sessionStorage.setItem('vl_sw_first_install', 'true'); } catch (e) {}
    }
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // non-fatal: app still works without offline
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
)
