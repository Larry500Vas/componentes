import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CompA from './components/CompA.jsx'
import './index.css'
import { DataContextProvider } from './context/dataContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < DataContextProvider>
     <CompA />
    </DataContextProvider>
  </React.StrictMode>,
)
