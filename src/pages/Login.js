import React, { useState } from 'react';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      correo: correo,
      contrasenia: contrasenia,
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Login exitoso:', result);
      } else {
        console.error('Error en login:', result.message);
      }
    } catch (error) {
      console.error('Error en la petición:', error);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    backgroundColor: '#ffffff',
  },
  loginForm: {
    backgroundColor: '#ffffff',
    padding: '50px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #000000',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#646464',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Login;
