import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <h1>Neighbr</h1>
                <nav className='links'>
                    <Link to='/'>Home</Link>||
                    <Link to='/profile'>Profile</Link>||
                    <Link to='/about'>About</Link>||
                    <Link to='/signin'>Sign Out</Link>
                </nav>
            </header>
        )
    }
}
