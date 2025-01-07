import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calendar from './pages/Calendar/Calendar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calendar></Calendar>
  </StrictMode>,
)
