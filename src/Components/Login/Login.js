import React, { useContext, useState } from 'react';
import AppContext from '../../Context';
import { useNavigate } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

import './LoginForm.css';

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
    <div id='login-container'>
      <section id='login-section'>
        <form id='login-form' onSubmit={handleLogin}>
          <div role='alert'>{error && <p>{error.error}</p>}</div>

          <label htmlFor='email' id='label-id'>
            Email Address:
          </label>
          <input type='email' id='email' name='email' required></input>
          <label htmlFor='password' id='label-id'>
            Password:
          </label>
          <input type='password' id='password' name='password' required></input>

          <button id='login-btn' type='submit'>
            Login
          </button>
        </form>
      </section>
    </div>
  );
}
