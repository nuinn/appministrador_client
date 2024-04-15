import { useRoutes } from 'react-router-dom'
import App from './App'
import Search from './pages/Search/Search.jsx'
import ReportIncident from './pages/ReportIncident/ReportIncident.jsx'
import IncidentDetail from './pages/IncidentDetail/IncidentDetail.jsx'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage.jsx'
import MarcTestPage from './pages/MarcTestPage/MarcTestPage.jsx'

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/'
    },
    {
      element: <Search type='communities' />,
      path: '/comunidades'
    },
    {
      element: <Search type='incidents' />,
      path: '/incidencias'
    },
    {
      element: <UserProfilePage />,
      path: '/perfil'
    },
    {
      element: <ReportIncident />,
      path: '/incidencias/reportar'
    },
    {
      element: <IncidentDetail />,
      path: '/incidencias/detalle/:incident_id'
    },
    {
      element: <Search type = 'providers'/>,
      path: '/proveedores',
    },
  ])
}

export default AppRouter