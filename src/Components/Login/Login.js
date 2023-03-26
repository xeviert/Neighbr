import React, { useContext, useState } from 'react';
import AppContext from '../../Context';
import { useNavigate } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';

import './LoginForm.css';

export default function Login() {
  const contextFunctions = useContext(AppContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = { email: email.value, password: password.value };

    AuthApiService.postLogin(user)
      .then((res) => res.json())
      .then((res) => {
        email.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        const jwt = res.authToken.split('.')[1];
        const userId = JSON.parse(window.atob(jwt)).user_id;
        navigate(`/`);
        return contextFunctions.handleLoginSuccess(userId);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div id='login-container'>
      <div className='login-header'>
        <h2>Login</h2>
      </div>

      <section id='login-section'>
        <form id='login-form' onSubmit={handleLogin}>
          <div role='alert'>{error && <p>{error}</p>}</div>

          <label for='email' id='label-id'>
            Email Address:
          </label>
          <input type='text' id='email' name='email' required></input>
          <label for='password' id='label-id'>
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
