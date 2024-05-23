import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';

export default function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, address, email, password, confirmPassword } =
      e.target;
    setError({ error: null });

    if (password.value !== confirmPassword.value) {
      return setError({ error: 'Passwords do not match' });
    }
    await AuthApiService.postUser({
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
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
      </div>

      <section>
        <form onSubmit={handleSubmit}>
        <div role='alert'>{error && <p>{error.error}</p>}</div>
          <label htmlFor='first-name'>
            First name:
          </label>
          <input type='text' name='first_name' required></input>
          <br />
          <label htmlFor='last-name'>
            Last name:
          </label>
          <input type='text' name='last_name' required></input>
          <label htmlFor='address'>
            Address:
          </label>
          <input type='text' name='address' required></input>
          <label htmlFor='email'>
            Email Address:
          </label>
          <input type='text' name='email' required></input>
          <label htmlFor='password'>
            Password:
          </label>
          <input type='password' name='password' required></input>
          <label htmlFor='confirm-pw'>
            Confirm Password:
          </label>
          <input
            type='password'
            name='confirmPassword'
            required
          ></input>
          <button type='submit'>
            Register
          </button>
        </form>
      </section>

      <div>
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
