import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import Context from '../../Context'
import Radium, {Style} from 'radium';

import './NavBar.css';


export default class NavBar extends Component {

    logout = (e) => {
        TokenService.clearAuthToken();
    }

    //conditional rendering

    render() {
        return (
            <header>
                <div id='desktop-header'>
                <h1 id='neighbr'>Neighbr</h1>
                <nav className='links'>
                    <Style scopeSelector=".links" rules={{
                            a: {color: 'white'},
                            'a:visited': {color: 'white'} 
                    }} />
                    <Link className='link' to='/'>home</Link>
                    <Link className='link' to='/profile'>profile</Link>
                    <Link className='link' to='/about'>about</Link>
                    <Link className='link' to='/login'><a type='submit' onClick={e => this.logout(e)}>logout</a></Link>
                </nav>
                </div>
            </header>
        )
    }
}
