import React, { Component } from 'react';
import ListOfFavors from './ListOfFavors/ListOfFavors';
import FavorSubmission from './FavorSubmission/FavorSubmission';
import TokenService from '../../Services/token-service';
import config from '../../config'



export default class HomePage extends Component {
    state = {
        favors: [{
            first_name: '',
            last_name: ''
        }]
    }

    getAllFavors() {
        return fetch(`${config.API_ENDPOINT}/favors`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {  
                return res.json()
            })
            .then(favors => {
                this.setState({favors})
            })
    }       

    componentDidMount() {
        this.getAllFavors()
    }
    
    

    addFavor = (favor) => {
        console.log(favor)
        this.setState({
            favors: [...this.state.favors, favor]
        })
    }


    render() {
   
        const {favors} = this.state

        return (
            // <FavorProvider>
                <div>
                    <FavorSubmission addFavor={this.addFavor} />
                    <ListOfFavors favors={favors} />
                </div>
            // </FavorProvider>
        )
    }
}
