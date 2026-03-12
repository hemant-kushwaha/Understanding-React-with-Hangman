import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScreenGuard from './components/ScreenGuard/ScreenGuard.jsx'
// import { WordContext } from './Context/WordContext.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <WordContext.Provider>
      <BrowserRouter>
      <ScreenGuard>
        <App />
      </ScreenGuard>
      </BrowserRouter>
  // </WordContext.Provider>
    
  // </StrictMode>,
)
