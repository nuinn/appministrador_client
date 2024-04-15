import './UserProfile.css';
function UserProfile({ user, onEdit }) {
  return (
    <div className="user-profile">
    <h3>{user.firstName} {user.lastName}</h3>
    <br />
    <p className="user-profile-description-title">Correo</p> 
    <div className='valueData'>
      {user.email}
    </div>
    <p className="user-profile-description-title">Teléfono</p> 
    <div className='valueData'>
      {user.phone}
    </div>
    <p className="user-profile-description-title">Acceso a medios</p> 
    <div className='valueData'>
      {user.enableMediaAccess ? 'Sí' : 'No'}
    </div>
    <p className="user-profile-description-title">Recibir notificaciones</p> 
    <div className='valueData'>
      {user.notifications ? 'Sí' : 'No'}
    </div>
    <button onClick={onEdit}>Editar perfil</button>
  </div>
  );
}

export default UserProfile;
