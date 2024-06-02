import { useState, useEffect } from "react";
import useApi from '../../hooks/useApi.js'
import { useNavigate } from 'react-router-dom';
import { useLoggedUserContext } from "../../contexts/loggedUserContext.jsx";
import styled from 'styled-components';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import UserProfile from "../../components/UserProfile/UserProfile.jsx";
import EditProfile from "../../components/EditProfile/EditProfile.jsx";
import './UserProfilePage.css'

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  color: #024B59;
  width: 300px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #024B59;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

function UserProfilePage() {
  const { data, getData } = useApi();
  const { loggedUser, setLoggedUser } = useLoggedUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();


  const initialPetition = {
    route: '/users/profile',
  }

  useEffect(() => {
    getData(initialPetition)
  }, [])

  useEffect(() => {
    getData(initialPetition)
    console.log(loggedUser);
  }, [loggedUser])

  function handleEdit(){
    setIsEditing(true);
  };

  function handleLogout(){
    setLoggedUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const guest = {
    firstName: 'Invitado',
    email: 'usuario@ejemplo.com',
    phone: '678910234',
    enableMediaAccess: true,
    notifications: false,
  }

  return (
    <div>
      <Header
      title= 'Información de perfil'
      path='/'
      />
      <div className="profileContainer">
        {data && (isEditing ? (
            <EditProfile user={data} setEdit={setIsEditing}/>
          ) : (
            <UserProfile user={data.firstName === 'Invitado' ? guest : data} onEdit={handleEdit} />
          ))}

          <Button className='button' onClick={handleLogout}>Cerrar sesión</Button>
      </div>

      <Footer type="profile" />
    </div>
  );
}

export default UserProfilePage;
