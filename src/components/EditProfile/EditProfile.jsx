import { useState, useEffect } from "react";
import { useLoggedUserContext } from "../../contexts/loggedUserContext.jsx";
import useApi from '../../hooks/useApi.js'
import './EditProfileForm.css';

function EditProfile({ user, setEdit }) {
  const { data, error, isLoading, getData } = useApi();
  const { loggedUser, setLoggedUser } = useLoggedUserContext();
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [enableMediaAccess, setenableMediaAccess] = useState(user.enableMediaAccess ?? false);
  const [notifications, setnotifications] = useState(user.notifications ?? false);

  useEffect(() => {
    if (typeof data === 'object' && !data.msg) {
      setLoggedUser(data);
      setEdit(false)
    }
    if (typeof data === 'object') {
      setMessage(data.msg)
      console.log(data.msg);
    }
    if (typeof error === 'object') {
      setErrorMessage(error.msg)
      console.log(data.msg);
    }
  }, [data, error])

  
  function handleUpdate(updatedUser){
    setErrorMessage('')
    const petition = {
      route: '/users',
      method: 'PATCH',
      body: updatedUser,
    }
    getData(petition)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate({ firstName, lastName, enableMediaAccess, notifications });
  };

  const handleMediaAccessChange = (e) => {
    const option = e.target.value;
    setenableMediaAccess(option);
  };

  const handleNotificationsChange = (e) => {
    const option = e.target.value;
    setnotifications(option);
  };


  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <div>
        <label>
          Nombre
          <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Apellidos
          <input value={lastName} onChange={e => setLastName(e.target.value)} />
        </label>
      </div>
      <div>
      <label>
        Acceso a medios:
        <select value={enableMediaAccess} onChange={handleMediaAccessChange}>
          <option value={true}>Sí</option>
          <option value={false}>No</option>
        </select>
      </label>
    </div>
    <div>
      <label>
        Recibir notificaciones:
        <select value={notifications} onChange={handleNotificationsChange}>
        <option value={true}>Sí</option>
          <option value={false}>No</option>
        </select>
      </label>
    </div>
      <button type="submit">Actualizar Perfil</button>
    </form>
  );
}

  export default EditProfile