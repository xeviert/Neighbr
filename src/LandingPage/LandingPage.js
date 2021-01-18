import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../Services/token-service'
import Context from '../Context'
import './LandingPage.css';

export default class LandingPage extends Component {

    static contextType = Context

    renderLoggedOutPage() {
        return (
            <div id='about-page'>
                <section className='info'>
                    <div>
                        <h3>Help Your Neighbr</h3>
                    </div>
                    <p>
                        Neighbr is an online bulletin board specifically for things that your neighbrs need help with. Whether it's help with spring cleaning or someone simply wants company, you can login and check to see what your neighbrs are up to.
                    </p>
                </section>

                <section className='info'>
                    <div>
                        <h3>Need Help With Something?</h3>
                    </div>
                    <p>
                        Sometimes you need an extra set of hands to help you with things around the house. You can decide to post a favor with details on the task. 
                    </p>
                </section>
                <section className='info'>
                        <div>
                            <h3>Check it out!</h3>
                        </div>
                            Register to create an account. 
                            This gives access to a list of favors that people in your neighborhood need help with.
                    </section>

                <section className="phone">
                <img src='/images/register.png' alt='Register page' className="screenshot" />
                <img src='/images/home.png' alt='List of favors' className="screenshot" />          
                <img src='/images/profile.png' alt='User profile page' className="screenshot" />
                </section>

            </div>
        )
    }

    renderLoggedInPage() {
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
                        Neighbr is an online bulletin board specifically for things that your neighbrs need help with. Whether it's help with spring cleaning or someone simply wants company, you can login and check to see what your neighbrs are up to.           
                        </p>
                    </section>
    
                    <section className='info'>
                        <div>
                            <h3>Need Help With Something?</h3>
                        </div>
                        <p>
                        Sometimes you need an extra set of hands to help you with things around the house. You can decide to post a favor with details on the task.
                        </p>
                    </section>
                    <section className='info'>
                        <div>
                            <h3>Check it out!</h3>
                        </div>
                            Register to create an account. 
                            This gives access to a list of favors that people in your neighborhood need help with.
                    </section>
    
                    <section className="phone">
                        <img src='/images/register.png' alt='Register page' className="screenshot" />
                        <img src='/images/home.png' alt='List of favors' className="screenshot" />       
                        <img src='/images/profile.png' alt='User profile page' className="screenshot" />
                    </section>
    
                </div>
            )
    }
    
    render() {
        return (
            <>
            {TokenService.hasAuthToken()
                ? this.renderLoggedOutPage()
                : this.renderLoggedInPage()
            }
            </>
        )
    }
}
