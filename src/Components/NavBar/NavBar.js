import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import Context from '../../Context'
import {Style} from 'radium';

import './NavBar.css';

export default class NavBar extends Component {

    static contextType = Context

    //conditional rendering
    renderLoginLink() {
        return (
            <header>
                <div id='desktop-header'>
                <h1 id='neighbr'>Neighbr</h1>
                <nav className='links'>
                    <Style scopeSelector=".links" rules={{
                            a: {color: 'white'},
                            'a:visited': {color: 'white'} 
                    }} />
                    <Link className='link' to='/about'>about</Link>
                    <Link className='link' to='/login'>login</Link>
                </nav>
                </div>
            </header>
        )
    }

    renderLogoutLink() {
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
                    <Link className='link' to='/login' onClick={e => this.context.handleLogout(e)}>logout</Link>
                </nav>
                </div>
            </header>
        )
    }

    render() {

            return (
                <>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()
                }
                </>
            )
    } 
    
}
