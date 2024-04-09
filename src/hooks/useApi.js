import { useState } from 'react'
import { useLoggedUserContext } from '../contexts/loggedUserContext'

const endpoint = 'https://appministrador-server.onrender.com'
// const endpoint = 'http://localhost:3000'

function useApi() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { setLoggedUser } = useLoggedUserContext()

  async function getData({ route, method = 'GET', body, headers = {}, stringify = true }) {
    console.log('route', route);
    console.log('method', method);
    console.log('stringify', stringify)
    setError()
    setData()
    setIsLoading(true)
    let modifiedBody = ''
    if (body && stringify) {
      modifiedBody = JSON.stringify(body)
    }
    // if (stringify) {
    //   headers["Content-Type"] = 'application/json'
    // }
    console.log('headers', headers)
    console.log('body', body);
    console.log('typeof body', typeof body);


    const response = await fetch(endpoint + route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
        ...headers
      },
      body: modifiedBody ? modifiedBody : body || undefined
    })
    console.log('headers', headers)
    if (response.ok) {
      console.log('ok')
      const responseAsJson = await response.json()
      console.log('responseAsJson', responseAsJson)
      if (responseAsJson.token) {
        localStorage.token = responseAsJson.token
      }
      if (responseAsJson.user) {
        localStorage.user = responseAsJson.user
        setLoggedUser(JSON.parse(responseAsJson.user))
      }
      setData(responseAsJson)
      setIsLoading(false)
    } else {
      console.log('else')
      const responseAsJson = await response.json()
      setError(responseAsJson)
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, getData }
}

export default useApi;