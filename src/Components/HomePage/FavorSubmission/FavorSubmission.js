import React, { Component } from 'react';
import config from '../../../config';
import TokenService from '../../../Services/token-service'
import './FavorSubmission.css';

class FavorSubmission extends Component {

    state = {
        error: null,
        title: '',
        payment: '',
        description: '',
        first_name: '',
        last_name: ''
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
            console.log(favor)
            this.props.addFavor(favor)
            this.setState({title:'', payment: '', description: ''})

        })
        .catch((e) => {
            this.setState({ error: e.message })
        })
    }

    render() {
        const { error, favor } = this.state;
        return (
            <div className='status-update'>
                <div className='initials'>
                    TP
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
