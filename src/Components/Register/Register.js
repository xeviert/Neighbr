import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service'
import './Register.css';

export default class Register extends React.Component {
    state = { error: null }

    handleSubmit = (e) => {
        e.preventDefault()
        const { first_name, last_name, address, email, password, confirmPassword } = e.target
        this.setState({ error: null })

        if (password.value !== confirmPassword.value) {
            return this.setState({ error: 'Passwords do not match'})
        }
        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            address: address.value,
            email: email.value,
            password: password.value,
        })
            .then(res => res.json())
            .then((user) => {
                console.log(user)
                this.props.history.push('/login')
            })
            .catch((error) => {
                this.setState({ error: error })
            })
    }

    render() {
        return (
        <div id="register-container">
            <div id="register-header">
                <h1>Register for Neighbr</h1>
            </div>

            <section id="register-section">
                <form id="register-form" onSubmit={this.handleSubmit}>
                    {this.state.error && <p className='error'>{this.state.error}</p>}
                <label for="first-name" id="label-id">First name:</label>
                    <input type="text" id="first-name" name="first_name"></input>
                <label for="last-name" id="label-id">Last name:</label>
                    <input type="text" id="last-name" name="last_name"></input>
                <label for="address" id="label-id">Address:</label>
                    <input type="text" id="address" name="address"></input>
                <label for="email" id="label-id">Email Address:</label>
                    <input type="text" id="email" name="email"></input>
                <label for="password" id="label-id">Password:</label>
                    <input type="text" id="password" name="password"></input>
                <label for="confirm-pw" id="label-id">Confirm Password:</label>
                    <input type="text" id="confirm-pw" name="confirmPassword"></input>      
                <button id="register-btn" type='submit'>
                    Register
                </button>
                </form> 
            </section>

            <div id='login-section'>
            <p>Already have an account?</p>
                <Link to='/login'><p><em>Login</em></p></Link>
            </div>
        </div>
        )
    }
}
