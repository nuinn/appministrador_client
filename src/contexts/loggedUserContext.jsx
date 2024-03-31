import { useContext, createContext, useState } from 'react'

const LoggedUserContext = createContext()

function LoggedUserProvider(props) {
  const { children } = props
  const [loggedUser, setLoggedUser] = useState()

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