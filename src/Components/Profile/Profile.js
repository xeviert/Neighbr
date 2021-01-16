import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../Services/token-service';
import './Profile.css';

export default class Profile extends Component {
    state = {
        users: [{ 
            first_name: '',
            last_name: '',
            address: '',
            email: ''
        }]
    }

    getUserProfile() {
        return fetch(`${config.API_ENDPOINT}/profile`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(users => {
            this.setState({users})
        })
    }

    componentDidMount() {
        this.getUserProfile()
    }


    render() {
        let { users } = this.state;
    
        return (
            <div id="profile-container">
                <h1 id='profile-header'>Profile</h1>
                <div id='profile'>
                    <h2>{users[0].first_name} {users[0].last_name}</h2>
                    <div className='initials'>
                    {users[0].first_name.charAt(0)} {users[0].last_name.charAt(0)}
                    </div>
                    <div>{users[0].address}</div>
                    {/* <p>
                        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                    </p> */}
                </div>
            </div>
        )
    }
}
