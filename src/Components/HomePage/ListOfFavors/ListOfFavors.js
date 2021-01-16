import React from 'react';
import FavorItem from '../FavorItem/FavorItem';
import './ListOfFavors.css'

const ListOfFavors = (props) => {

    return (
        <section className='favors-list'>              
             {props.favors.map(favor => (
                    <FavorItem 
                        title={favor.title} 
                        payment={favor.payment} 
                        description={favor.description}
                        posted={favor.posted} 
                        first_name={favor.first_name} 
                        last_name={favor.last_name} 
                        key={favor.id}
                    />                   
                ))}                
        </section>
    )
}

export default ListOfFavors;