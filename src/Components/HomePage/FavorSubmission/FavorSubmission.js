import React, { Component } from 'react';
import config from '../../../config';
import TokenService from '../../../Services/token-service';
import Context from '../../../Context'
import './FavorSubmission.css';

class FavorSubmission extends Component {

    static contextType = Context;

    
    state = {
        error: null,
        title: '',
        payment: '',
        description: '',
    }


    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const favor = {
            title: this.state.title,
            payment: this.state.payment,
            description: this.state.description,
            posted: new Date(),
        }

        fetch(`${config.API_ENDPOINT}/favors`, {
            method: "POST",
            body: JSON.stringify(favor),
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${TokenService.getAuthToken()}`,
            }    
        })
        .then(res => res.json())
        .then(favor => {
            this.context.addFavor(favor)
            this.setState({title:'', payment: '', description: ''})
        })
        .catch((e) => {
            this.setState({ error: e.message })
        })
    }

    render() {
        const { error } = this.state;
        const { first_name, last_name } = this.context

        return (
            <div className='status-update'>
                <div className='initials-sub'>
                    {first_name.charAt(0)}{last_name.charAt(0)}
                </div>
                <form onSubmit={this.handleSubmit}>
                    {error && <p>{error}</p>}
                    
                    <input id="title" type="text" placeholder="Favor Title" value={this.state.title} name="title" onChange={this.handleChange}></input>

                    <input id="payment" type="text" placeholder="Payment $$" value={this.state.payment} name="payment" onChange={this.handleChange}></input>
                    
                    <div id='status-update-second'>

                    <textarea id="description" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange}></textarea>

                    <button type='submit' id='favor-btn'>+</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FavorSubmission
