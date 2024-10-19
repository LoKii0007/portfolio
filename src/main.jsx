import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
 
injectSpeedInsights();
inject();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
