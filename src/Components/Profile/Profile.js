import React, { Component } from 'react';
// import { NeighbrContext } from '../../Context'
import config from '../../config'
import TokenService from '../../Services/token-service';
import Context from '../../Context'
import './Profile.css';

export default class Profile extends Component {

    static contextType = Context;


    render() {
        const firstNameInit = this.context.first_name.charAt(0)
        const lastNameInit = this.context.last_name.charAt(0)
        const address = this.context.address

    
        return (
            <div id="profile-container">
                <h1 id='profile-header'>Profile</h1>
                <div id='profile'>
                    <h2 className='fullname'>
                       {this.context.first_name} {this.context.last_name}
                    </h2>
                    <div className='initials'>
                        {firstNameInit}{lastNameInit}
                    </div>
                    <div className='address'>
                        {address}
                    </div>
                </div>
            </div>
        )
    }
}

// Profile.contextType = NeighbrContext;

