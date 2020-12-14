import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default class Register extends Component {
    render() {
        return (
        <div id="register-container">
            <div>
                <h1>Register for Neighbr</h1>
            </div>

            <section id="register-section">
                <form id="register-form">
                <label for="first-name" id="label-id">First name:</label>
                    <input type="text" id="first-name" name="first-name"></input>
                <label for="last-name" id="label-id">Last name:</label>
                    <input type="text" id="last-name" name="last-name"></input>
                <label for="email" id="label-id">Email Address:</label>
                    <input type="text" id="email" name="email"></input>
                <label for="password" id="label-id">Password:</label>
                    <input type="text" id="password" name="password"></input>
                <label for="confirm-pw" id="label-id">Confirm Password:</label>
                    <input type="text" id="confirm-pw" name="confirm-pw"></input>      
                </form>
                <form action="../Feed/feed.html">
                    <input type="submit" id='btn' value="Get Started" />
                </form> 
            </section>

            <div id='sign-in-section'>
            <p>Already have an account?</p>
            <Link to='/signin'><p><em>Sign In</em></p></Link>
            </div>
        </div>
        )
    }
}
