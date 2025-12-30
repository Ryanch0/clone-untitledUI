import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import SettingPage from './components/SettingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingPage />
  </StrictMode>
)
