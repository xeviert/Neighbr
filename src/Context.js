import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import config from './config';
import TokenService from './Services/token-service';

const AppContext = React.createContext({
  user: [],
  favors: [],
});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      favors: [],
      loggedIn: false,
      navigate: null,
    };
  }

  componentDidMount() {
    this.getAllFavors();
    if (TokenService.hasAuthToken()) {
      return this.getUserProfile();
    }
  }

  getUserProfile() {
    return fetch(`${config.API_ENDPOINT}/profile`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        this.setState({
          first_name: user[0].first_name,
          last_name: user[0].last_name,
          address: user[0].address,
          email: user[0].email,
        });
      });
  }

  getAllFavors() {
    return fetch(`${config.API_ENDPOINT}/favors`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((favors) => {
        this.setState({ favors });
      });
  }

  handleAddFavor = (favor) => {
    this.setState({
      favors: [...this.state.favors, favor],
    });
    this.getAllFavors();
  };

  handleLoginSuccess = () => {
    return this.getUserProfile().then(() => this.getAllFavors());
  };

  handleLogout = (e) => {
    TokenService.clearAuthToken();
    this.setState({ loggedIn: true });
  };

  render() {
    const value = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      email: this.state.email,
      favors: this.state.favors,
      handleLogout: this.handleLogout,
      handleLoginSuccess: this.handleLoginSuccess,
      addFavor: this.handleAddFavor,
      getAllFavors: this.getAllFavors,
      getUserProfile: this.getUserProfile,
    };
    if (this.state.navigate) {
      return <Navigate to={this.state.navigate} />;
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContext;
