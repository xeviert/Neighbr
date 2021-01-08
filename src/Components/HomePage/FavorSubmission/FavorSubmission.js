import React, { useState, useContext } from 'react';
import { FavorContext } from '../FavorContext'
import './FavorSubmission.css';

const FavorSubmission = () => {
    const [title, setTitle] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');
    const [favors, setFavors] = useContext(FavorContext);

    const addTitle = e => {
        setTitle(e.target.value);
    }

    const addPayment = e => {
        setPayment(e.target.value);
    }

    const addDescription = e => {
        setDescription(e.target.value);
    }

    const addFavor = e => {
        e.preventDefault();
        setFavors(prevFavors => [...prevFavors, { title, payment, description }])
    }
    
    return (
        <div className='status-update'>
            <div className='initials'>
                TP
            </div>
            <form onSubmit={addFavor}>
                <input id="title" type="text" placeholder="Favor Title" name="title" value={title} onChange={addTitle}></input>
                <input id="payment" type="text" placeholder="Payment $$" name="payment" value={payment} onChange={addPayment}></input>
                <textarea id="description" placeholder="Description" name="description" value={description} onChange={addDescription}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FavorSubmission
