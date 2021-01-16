import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import Context from '../../Context'
import './NavBar.css';

export default class NavBar extends Component {

    logout = (e) => {
        TokenService.clearAuthToken();
    }

    render() {
        return (
            <header>
                <div id='desktop-header'>
                <h1>Neighbr</h1>
                <nav className='links'>
                    <Link to='/'><a id='nav-link'>home</a></Link>
                    <Link to='/profile'><a id='nav-link'>profile</a></Link>
                    <Link to='/about'><a id='nav-link'>about</a></Link>
                    <Link to='/login'><a id='nav-link' type='submit' onClick={e => this.logout(e)}>logout</a></Link>
                </nav>
                </div>
            </header>
        )
    }
}
