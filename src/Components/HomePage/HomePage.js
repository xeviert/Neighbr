import React, { Component } from 'react';
import ListOfFavors from './ListOfFavors/ListOfFavors';
import FavorSubmission from './FavorSubmission/FavorSubmission';

export default class HomePage extends Component {

    render() {
        return (
                <>
                    <FavorSubmission />
                    <ListOfFavors />
                </>
        )
    }
}
