import React, { Component } from 'react';
import config from '../../../config';
import TokenService from '../../../Services/token-service';
import Context from '../../../Context';
import './FavorSubmission.css';

class FavorSubmission extends Component {
  static contextType = Context;

  state = {
    error: null,
    title: '',
    payment: '',
    description: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value.substr(0, 150) });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });

    const favor = {
      title: this.state.title,
      payment: this.state.payment,
      description: this.state.description,
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
        this.context.addFavor(favor);
        this.setState({ title: '', payment: '', description: '' });
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  render() {
    const { error } = this.state;
    const { first_name, last_name } = this.context;

    return (
      <div id='favor-form'>
        <div id='sub-form'>
          <div className='initials-sub'>
            {first_name.charAt(0)}
            {last_name.charAt(0)}
          </div>

          <form onSubmit={this.handleSubmit}>
            {error && <p>{error}</p>}

            <input
              id='title'
              type='text'
              placeholder='Favor Title'
              value={this.state.title}
              name='title'
              maxLength='20'
              onChange={this.handleChange}
              required
            ></input>

            <input
              id='payment'
              type='text'
              placeholder='Payment $$'
              value={this.state.payment}
              name='payment'
              maxLength='20'
              onChange={this.handleChange}
              required
            ></input>

            <div id='status-update-second'>
              <textarea
                id='description'
                placeholder='Description'
                value={this.state.description}
                name='description'
                maxLength='300'
                type='text'
                onChange={this.handleChange}
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
}

export default FavorSubmission;
