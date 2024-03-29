import React, { useContext, useState } from 'react';
import config from '../../../config';
import TokenService from '../../../Services/token-service';
import AppContext from '../../../Context';

import './FavorSubmission.css';

function FavorSubmission() {
  const context = useContext(AppContext);

  const [inputField, setInputField] = useState({
    title: '',
    payment: '',
    description: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const favor = {
      title: inputField.title,
      payment: inputField.payment,
      description: inputField.description,
      posted: new Date(),
    };

    fetch(`${config.API_ENDPOINT}/favors`, {
      method: 'POST',
      body: JSON.stringify(favor),
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((favor) => {
        context.addFavor(favor);
        setInputField({
          title: '',
          payment: '',
          description: '',
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const { first_name, last_name } = context;

  return (
    <div id='favor-form'>
      <div id='sub-form'>
        <div className='initials-sub'>
          {first_name.charAt(0)}
          {last_name.charAt(0)}
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}

          <input
            id='title'
            type='text'
            placeholder='Favor Title'
            value={inputField.title}
            name='title'
            maxLength='20'
            onChange={handleChange}
            required
          ></input>

          <input
            id='payment'
            type='text'
            placeholder='Payment $$'
            value={inputField.payment}
            name='payment'
            maxLength='20'
            onChange={handleChange}
            required
          ></input>

          <div id='status-update-second'>
            <textarea
              id='description'
              placeholder='Description'
              value={inputField.description}
              name='description'
              maxLength='300'
              type='text'
              onChange={handleChange}
              required
            ></textarea>

            <button type='submit' id='favor-btn'>
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FavorSubmission;
