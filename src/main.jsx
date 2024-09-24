import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //library that allows it to work with DOM(Document object module)
import App from './App.jsx'
import './index.css'

//StrictMode is a wrapper component that checks for potential problems in app(like depracated, unsafe lifecycle methods, etc.)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
