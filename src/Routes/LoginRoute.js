import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/Login/Login'

import '../Components/Login/LoginForm.css'

export default function LoginRoute() {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
      navigate('/');
    };

    return (
        <section id='login-page'>
          <h2 className='login-header'>Login</h2>
          <div className='login-body'>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        </section>
      );
}
