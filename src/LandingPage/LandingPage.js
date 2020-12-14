import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div id='about-page'>
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

                <section id="phone">
                <div id="screenshot"><em>Screenshot of user UI</em></div>
                <div id="screenshot"><em>Screenshot of user UI</em></div>          
                <div id="screenshot"><em>Screenshot of user UI</em></div>
                </section>

                <section id='register-box'>
                    <div>
                        <h3>Help Your Neighbr Now!</h3>
                    </div>
                    <form>
                    <Link to='/register'><input type="submit" id='get-started' value="Get Started" /></Link>
                    </form>
                </section>
            </div>
        )
    }
}