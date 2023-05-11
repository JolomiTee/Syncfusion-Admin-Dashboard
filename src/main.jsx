import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider.jsx';
import { registerLicense } from '@syncfusion/ej2-base'
registerLicense(import.meta.env.VITE_SYNC_FUSION_LICENCE_KEY);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
  </React.StrictMode>,
)
