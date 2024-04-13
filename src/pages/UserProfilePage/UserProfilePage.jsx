import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoggedUserContext } from "../../contexts/loggedUserContext.jsx";
import styled from 'styled-components';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import UserProfile from "../../components/UserProfile/UserProfile.jsx";
import EditProfile from "../../components/EditProfile/EditProfile.jsx";

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
    const { loggedUser, setLoggedUser } = useLoggedUserContext();
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate(); 

    console.log(loggedUser);

    const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleUpdate = (updatedUser) => {
        setLoggedUser(updatedUser); // update the user in the context
        setIsEditing(false);
      };

      const handleLogout = () => {
          setLoggedUser(null);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          navigate('/');
    };

  return (
    <div>
      <Header />
      <Card>
        {isEditing ? (
          <EditProfile user={loggedUser} onUpdate={handleUpdate} />
        ) : (
          <UserProfile user={loggedUser} onEdit={handleEdit} />
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </Card>
      <Footer type="profile" />
    </div>
  );
}

export default UserProfilePage;
