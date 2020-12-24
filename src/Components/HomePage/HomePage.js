import React, { Component } from 'react';
import ListOfFavors from './ListOfFavors/ListOfFavors';
import FavorSubmission from './FavorSubmission/FavorSubmission';
import { FavorProvider} from './FavorContext';

export default class HomePage extends Component {

    

    render() {
        return (
            <FavorProvider>
                <div>
                    <FavorSubmission />
                    <ListOfFavors />
                </div>
            </FavorProvider>
        )
    }
}
