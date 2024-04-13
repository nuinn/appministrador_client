import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoggedUserContext } from '../contexts/loggedUserContext';

// const endpoint = 'https://appministrador-server.onrender.com';
const endpoint = 'http://localhost:3000';

function useApi() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const { setLoggedUser } = useLoggedUserContext();

  function clearData() {
    setData(null);
  }

  async function getData({ route, method = 'GET', body, headers = {}, stringify = true }) {
    setError();
    setData();
    setIsLoading(true);
    let stringifiedBody = '';
    if (body && stringify) {
      stringifiedBody = JSON.stringify(body);
    }
    if (stringify) {
      headers["Content-Type"] = 'application/json';
    }
    const response = await fetch(endpoint + route, {
      method,
      headers: {
        'Authorization': localStorage.token,
        ...headers
      },
      body: stringifiedBody ? stringifiedBody : body
    });
    if (response.ok) {
      const responseAsJson = await response.json();
      if (responseAsJson.token) {
        localStorage.token = responseAsJson.token;
      }
      if (responseAsJson.user) {
        localStorage.user = responseAsJson.user;
        setLoggedUser(JSON.parse(responseAsJson.user));
      }
      setData(responseAsJson)
      setIsLoading(false)
    } else {
      const responseAsJson = await response.json();
      if (responseAsJson.msg === 'Unauthorised') {
        delete localStorage.token;
        delete localStorage.user;
        setLoggedUser();
        navigate('/');
      }

      setError(responseAsJson);
      setIsLoading(false);
    }
  }
  return { data, error, isLoading, getData, clearData };
}

export default useApi;