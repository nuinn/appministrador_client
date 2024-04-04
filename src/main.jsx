import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css'
import { LoggedUserProvider } from './contexts/loggedUserContext.jsx'
import AppRouter from './AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedUserProvider>
        <AppRouter />
      </LoggedUserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
