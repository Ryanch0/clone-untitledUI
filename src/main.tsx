import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import SettingPage from './components/SettingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingPage />
  </StrictMode>
)
