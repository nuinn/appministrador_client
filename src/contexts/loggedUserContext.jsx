import { useContext, createContext, useState, useEffect } from 'react'

const LoggedUserContext = createContext()

function LoggedUserProvider(props) {
  const { children } = props
  const [loggedUser, setLoggedUser] = useState()

  useEffect(() => {
    if (localStorage.token) {
      setLoggedUser(JSON.parse(localStorage.user))
    }
  }, [])

  return(
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      { children }
    </LoggedUserContext.Provider>
  )
}

function useLoggedUserContext() {
  const context = useContext(LoggedUserContext)
  if (!context) {
    throw new Error('loggedUserContext must be used within a LoggedUserProvider')
  }
  return context
}

export {
  LoggedUserProvider,
  useLoggedUserContext,
}