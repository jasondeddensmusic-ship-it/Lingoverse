import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Storage polyfill for environments without window.storage (e.g. preview/dev)
if (!window.storage) {
  window.storage = {
    get: (key) => { const v = localStorage.getItem(key); return Promise.resolve(v ? { value: v } : null); },
    set: (key, value) => { localStorage.setItem(key, value); return Promise.resolve(); },
    delete: (key) => { localStorage.removeItem(key); return Promise.resolve(); },
  };
}

// Service Worker registration (PWA Phase 1 — offline mode + install prompt support).
// Tracked in AUTONOMOUS_QUEUE under VISUAL-002.
// Skip in dev (Vite serves /sw.js as 404 unless built; service workers only useful in prod).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // non-fatal: app still works without offline
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
