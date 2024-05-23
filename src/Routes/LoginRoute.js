import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/Login/Login'

export default function LoginRoute() {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
      navigate('/');
    };

    return (
        <section id='login-page'>
          <h2>Login</h2>
          <div>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </section>
      );
}
