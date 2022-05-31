import React, { Component } from 'react';
import Context from '../../Context';
import './Profile.css';

export default class Profile extends Component {
  static contextType = Context;

  render() {
    const firstNameInit = this.context.first_name.charAt(0);
    const lastNameInit = this.context.last_name.charAt(0);
    const address = this.context.address;
    const email = this.context.email;

    return (
      <div id='profile-container'>
        <h1>Profile</h1>
        <div id='profile'>
          <h2 id='fullname'>
            {this.context.first_name} {this.context.last_name}
          </h2>
          <div id='initials'>
            {firstNameInit}
            {lastNameInit}
          </div>
          <div id='address'>{address}</div>
          <div id='email'>{email}</div>
        </div>
      </div>
    );
  }
}
