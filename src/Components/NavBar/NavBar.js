import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <h1>Neighbr</h1>
                <nav className='links'>
                    Home ||
                    Profile ||
                    About ||
                    Sign Out
                </nav>
            </header>
        )
    }
}
