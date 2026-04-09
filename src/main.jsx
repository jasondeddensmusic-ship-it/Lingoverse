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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
