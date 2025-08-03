import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@styles/critical.css'
import '@styles/globals.css'
import '@styles/plumbus-design-system.css'

// Register service worker for performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if (import.meta.env.PROD) {
  // Web Vitals reporting
  import('web-vitals').then((vitals) => {
    vitals.onCLS(console.log);
    // vitals.onFID(console.log); // FID is deprecated
    vitals.onFCP(console.log);
    vitals.onLCP(console.log);
    vitals.onTTFB(console.log);
  }).catch(() => {
    // Web vitals not available
  });
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Clear loading state
const rootElement = document.getElementById('root')!;
if (rootElement.children.length > 0) {
  rootElement.innerHTML = '';
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)