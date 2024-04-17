import React, { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import './Captcha.css'

function Captcha({ siteKey, onSubmit }){
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (response) => {
    console.log('Captcha verified:', response);
    setIsVerified(true);
    // Aquí puedes realizar cualquier acción adicional cuando el captcha se verifique
  };

  return (
    <div className='captcha'>
      <h1>My Component</h1>
      <p>Complete the reCAPTCHA to proceed:</p>
      <Recaptcha
        sitekey="6Le6c74pAAAAACKX90Z_-GP2-CwXQTR0JnKro8yh" // Reemplaza con tu propia clave del sitio
        render="explicit"
        verifyCallback={onSubmit}
      />
      {isVerified && <p>¡Captcha verificado! Ahora puedes proceder.</p>}
    </div>
  );
};

export default Captcha