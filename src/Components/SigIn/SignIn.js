import React, { Component } from 'react';
import './SignIn.css';

export default class LogIn extends Component {
    render() {
        return (
            <div id='signin-container'>
                <div className="signin-header">
                    <h2>Sign In</h2>
                </div>
                
                <section id="signin-section">
                <form id="signin-form">
                    <label for="email" id="label-id">Email Address:</label>
                    <input type="text" id="email" name="email"></input>
                    <label for="password" id="label-id">Password:</label>
                    <input type="text" id="password" name="password"></input>
                </form>

                <form>
                        <input type="submit" id='btn' value="Sign" />
                </form>
                </section>
            </div>
        )
    }
}
