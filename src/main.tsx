//import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { WordsContextProvider } from './assets/contexts/WordsContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <WordsContextProvider>
    <App />
  </WordsContextProvider>
)
