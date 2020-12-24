import React, { Component, useState, useContext } from 'react';
import FavorItem from '../FavorItem/FavorItem';
import { FavorContext } from '../FavorContext';
import './ListOfFavors.css'

const ListOfFavors = () => {
    const [favors, setFavors] = useContext(FavorContext);

    return (
 
        <section className='favors-list'>              
                {favors.map(favor => (
                    <FavorItem title={favor.title} payment={favor.payment} description={favor.description} key={favor.id}
                    />                   
                ))}                
        </section>
    )
}

export default ListOfFavors;