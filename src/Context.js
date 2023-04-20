import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import config from './config';
import TokenService from './Services/token-service';
import IdleService from './Services/idle-service';
import AuthApiService from './Services/auth-api-service';

const AppContext = React.createContext({
  user: {},
  favors: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
     const state = {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      favors: [],
      loggedIn: false,
      navigate: null,
      error: null
    }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
     state.user = {
      id: jwtPayload.user_id,
      sub: jwtPayload.email,
     }

     this.state = state;
     IdleService.setIdleCallback(this.logoutBecauseIdle)
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
        this.fetchRefreshToken()
        this.getUserProfile()
        this.getAllFavors()
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
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

  processLogin = async authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      sub: jwtPayload.email,
    })
    IdleService.regiserIdleTimerResets()
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })
    await this.getUserProfile().then(() => this.getAllFavors());
  };

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({})
  }

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({ idle: true })
  }

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  }

  render() {
    const value = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      email: this.state.email,
      favors: this.state.favors,
      handleLogout: this.handleLogout,
      processLogin: this.processLogin,
      addFavor: this.handleAddFavor,
      getAllFavors: this.getAllFavors,
      getUserProfile: this.getUserProfile,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogout: this.processLogout
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
