import { useState } from "react";

function EditProfile({ user, onUpdate }) {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdate({ ...user, name, email });
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Apellidos:
            <input value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    );
  }

  export default EditProfile