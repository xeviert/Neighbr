import React, { useState, useContext } from 'react';
import { FavorContext } from '../FavorContext'
import './FavorSubmission.css';

const FavorSubmission = () => {
    const [title, setTitle] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');
    const [favors, setFavors] = useContext(FavorContext);

    const updateTitle = e => {
        setTitle(e.target.value);
    }

    const updatePayment = e => {
        setPayment(e.target.value);
    }

    const updateDescription = e => {
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
                <input id="title" type="text" placeholder="Favor Title" name="title" value={title} onChange={updateTitle}></input>
                <input id="payment" type="text" placeholder="Payment $$" name="payment" value={payment} onChange={updatePayment}></input>
                <textarea id="description" placeholder="Description" name="description" value={description} onChange={updateDescription}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FavorSubmission
