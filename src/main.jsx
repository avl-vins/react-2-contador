import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CounterApp } from './CounterApp.jsx'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp count={100} />
  </StrictMode>,
)
