import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {

    
    render() {
        return (
            <div id='about-page'>
                <section id='register-box'>
                    <div>
                        <h3>Help Your Neighbr Now!</h3>
                    </div>
                        <Link to='/register'><button id='lp-btn'      value="Get Started">Register</button></Link>
                        <Link to='/login'><button id='lp-btn' value="Get Started">Login</button></Link>
                </section>


                <section className='info'>
                    <div>
                        <h3>Help Your Neighbr</h3>
                    </div>
                    <p>
                        Description about how you can decide to help your neighbor on whatever they need help with or favors they need done.
                    </p>
                </section>

                <section className='info'>
                    <div>
                        <h3>Need Help With Something?</h3>
                    </div>
                    <p>
                        Description on how user can ask for help for something or a certain favor.
                    </p>
                </section>

                <section className="phone">
                <div className="screenshot"><em>Screenshot of user UI</em></div>
                <div className="screenshot"><em>Screenshot of user UI</em></div>          
                <div className="screenshot"><em>Screenshot of user UI</em></div>
                </section>

            </div>
        )
    }
}
