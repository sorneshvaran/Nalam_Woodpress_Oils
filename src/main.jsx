import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove loading class after app mounts
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Remove loading class after initial render
setTimeout(() => {
  document.body.classList.remove('loading')
}, 100)
