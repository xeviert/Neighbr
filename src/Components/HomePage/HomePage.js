import React, { Component } from 'react';
import ListOfFavors from './ListOfFavors/ListOfFavors';
import FavorSubmission from './FavorSubmission/FavorSubmission';
import TokenService from '../../Services/token-service';
import config from '../../config'



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
