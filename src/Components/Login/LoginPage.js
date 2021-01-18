import React, { Component } from 'react';
import LoginForm from './LoginForm';
import Context from '../../Context';

export default class LoginPage extends Component {
    static contextType = Context
    
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = (userId) => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/`
        history.push(destination)
    }

    render() {
        return (
            <section>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}></LoginForm>
            </section>
        )
    }
}