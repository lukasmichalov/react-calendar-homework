import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calendar from './pages/Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calendar></Calendar>
  </StrictMode>,
)
