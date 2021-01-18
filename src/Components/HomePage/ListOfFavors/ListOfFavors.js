import React, { Component } from 'react';
import FavorItem from '../FavorItem/FavorItem';
import Context from '../../../Context';
import './ListOfFavors.css';

class ListOfFavors extends Component {
    static contextType = Context; 

    static defaultProps = {
        match: {
            params: {},
        }
    }


    render() {

        const { favors } = this.context;
    return (
        <section className='favors-list'>              
             {favors.map(favor => (
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
    )}
}

export default ListOfFavors;