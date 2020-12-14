import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div id="profile-container">
                <h1 id='profile-header'>Profile</h1>
                
                <div id='profile'>
                    <h2>Tara Pommy</h2>
                    <div className='initials'>
                        TP
                    </div>
                    <div>123 Fake St. Houston, TX 77092</div>
                    <p>
                        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                    </p>
                </div>
            </div>
        )
    }
}
