import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider } from './contexts/I18nProvider'
import { SidebarProvider } from './contexts/SidebarContext'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <SidebarProvider>
        <BrowserRouter basename="/rc-calculator">
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </I18nProvider>
  </React.StrictMode>
)
