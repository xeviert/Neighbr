import React, { Component } from 'react';
import Context from '../../Context'
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';
import './LoginForm.css';


export default class LogIn extends Component {
    static contextType = Context;
    static defaultProps = {
        onLoginSuccess: () => {},
    }

    state = { error: null }

    handleLogin = (ev) => {
        ev.preventDefault();
        this.setState({ error: null });
        const { email, password } = ev.target;
        const user = { email: email.value, password: password.value }

        AuthApiService.postLogin(user)
            .then(res => res.json())
            .then((res) => {
                email.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                const jwt = res.authToken.split(".")[1];
                const userId = JSON.parse(window.atob(jwt)).user_id;
                this.props.history.push(`/`);
                return this.context.handleLoginSuccess()
            })
            .catch((res) => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <div id='login-container'>
                <div className="login-header">
                    <h2>Login</h2>
                </div>
                
                <section id="login-section">
                <form id="login-form" onSubmit={this.handleLogin}>
                    <div role='alert'>{error && <p>{error}</p>}</div>
                    <label for="email" id="label-id">Email Address:</label>
                    <input type="text" id="email" name="email" required></input>
                    <label for="password" id="label-id">Password:</label>
                    <input type="password" id="password" name="password" required></input>

                <button id="login-btn" type='submit'>
                    Login
                </button>
                </form>

                </section>
            </div>
        )
    }
}
