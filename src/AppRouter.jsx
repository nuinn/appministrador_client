import { useRoutes } from 'react-router-dom'
import App from './App'
import Search from './pages/Search/Search.jsx'

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
    }
  ])
}

export default AppRouter