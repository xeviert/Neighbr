import React, { Component } from 'react';
import './FavorSubmission.css';

export default class FavorSubmission extends Component {
    render() {
        return (
            <div className='status-update'>
                <div className='initials'>
                    TP
                </div>
                <form>
                    <input id="title" type="text" placeholder="Favor Title"></input>
                    <input id="payment" type="text" placeholder="Payment $$"></input>
                    <textarea id="description" placeholder="Description"></textarea>
                </form>
            </div>
        )
    }
}
