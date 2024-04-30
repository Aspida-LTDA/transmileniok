import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/pages/Login.css'
import { Login } from './components/pages/Login.jsx'
import { Home } from './components/pages/Home.jsx'
import { AppFolder } from './app/App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppFolder />
  </React.StrictMode>,
)
