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



    render() {
        return (
            <section>
                <LoginForm></LoginForm>
            </section>
        )
    }
}