function UserProfile({ user, onEdit }) {
    return (
        <div>
        <img src={user.profilePicture} alt="Foto de perfil" />
        <h3>{user.firstName} {user.lastName}</h3>
        <p>{`Correo: ${user.email}`}</p>
        <p>{`Teléfono: ${user.phone}`}</p>
        <p>{`Acceso a medios: ${user.enableMediaAccess ? 'Yes' : 'No'}`}</p>
        <p>{`Recibir notificaciones: ${user.notifications ? 'Yes' : 'No'}`}</p>
        <button onClick={onEdit}>Editar perfil</button>
      </div>
    );
  }

  export default UserProfile
