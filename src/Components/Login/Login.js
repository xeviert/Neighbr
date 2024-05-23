import React, { useContext, useState } from 'react';
import AppContext from '../../Context';
import { useNavigate } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

export default function LoginForm() {
  const [error, setError] = useState(null);
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    setError(null);
    
    AuthApiService.postLogin({
      email: email.value, 
      password: password.value,
    })    
      .then((res) => {
        email.value = '';
        password.value = '';
        context.processLogin(res.authToken)
        navigate('/');
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <div>
      <section>
        <form onSubmit={handleLogin}>
          <div role='alert'>{error && <p>{error.error}</p>}</div>

          <label htmlFor='email'>
            Email Address:
          </label>
          <input type='email' name='email' required></input>
          <label htmlFor='password'>
            Password:
          </label>
          <input type='password' name='password' required></input>

          <button type='submit'>
            Login
          </button>
        </form>
      </section>
    </div>
  );
}
