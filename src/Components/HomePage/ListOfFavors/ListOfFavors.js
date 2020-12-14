import React, { Component } from 'react';
import FavorItem from '../FavorItem/FavorItem';
import store from '../store';
import './ListOfFavors.css'

export default class ListOfFavors extends Component {
    render() {
        return (
            <section className='favors-list'>
                <ul>
                    {store.map(favor =>
                    <li>
                        <FavorItem
                            title={store.title}
                            payment={store.payment}
                            description={store.description}
                        />
                    </li>
                    )}
                </ul>
            </section>
        )
    }
}
