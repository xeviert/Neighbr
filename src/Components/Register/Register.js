import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';
import './Register.css';

export default function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { first_name, last_name, address, email, password, confirmPassword } =
      e.target;
    setError({ error: null });

    if (password.value !== confirmPassword.value) {
      return setError({ error: 'Passwords do not match' });
    }
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      address: address.value,
      email: email.value,
      password: password.value,
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div id='register-container'>
      <div id='register-header'>
        <h1>Register</h1>
      </div>

      <section id='register-section'>
        <form id='register-form' onSubmit={handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>
          <label for='first-name' id='label-id'>
            First name:
          </label>
          <input type='text' id='first-name' name='first_name' required></input>
          <br />
          <label for='last-name' id='label-id'>
            Last name:
          </label>
          <input type='text' id='last-name' name='last_name' required></input>
          <label for='address' id='label-id'>
            Address:
          </label>
          <input type='text' id='address' name='address' required></input>
          <label for='email' id='label-id'>
            Email Address:
          </label>
          <input type='text' id='email' name='email' required></input>
          <label for='password' id='label-id'>
            Password:
          </label>
          <input type='password' id='password' name='password' required></input>
          <label for='confirm-pw' id='label-id'>
            Confirm Password:
          </label>
          <input
            type='password'
            id='confirm-pw'
            name='confirmPassword'
            required
          ></input>
          <button id='register-btn' type='submit'>
            Register
          </button>
        </form>
      </section>

      <div id='login-section'>
        <p>Already have an account?</p>
        <Link to='/login'>
          <p>
            <em>Login</em>
          </p>
        </Link>
      </div>
    </div>
  );
}
