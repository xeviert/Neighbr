import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/Login/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import LandingPage from './LandingPage/LandingPage';
import PrivateRoute from './Utils/PrivateRoute';
import TokenService from './Services/token-service';
import Context from './Context';
import config from './config';


class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      favors: [],
      loggedIn: false,
      redirect: null 
    }
  }

  getUserProfile() {
    return fetch(`${config.API_ENDPOINT}/profile`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(user => {
          this.setState({
            first_name: user[0].first_name,
            last_name: user[0].last_name,
            address: user[0].address,
            email: user[0].email,
            })
        })
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



  handleAddFavor = (favor) => {
    this.setState({
        favors: [...this.state.favors, favor]
    })
    this.getAllFavors()
  }

  componentDidMount() {
    this.getAllFavors()      
    if (TokenService.hasAuthToken()) {
        return (
          this.getUserProfile()
        )
    }
  }

  handleUpdateLoggedInOrOut = () => {

          const jwt = TokenService.getAuthToken()
          let userId;
          if (!!jwt) {
            userId = JSON.parse(window.atob(jwt.split(".")[1])).userId;
          } else {
            userId = 0;
          }
          this.setState({
            loggedIn: { loaded: true }
          })
  }

  handleLoginSuccess = () => {
    return this.getUserProfile()
    .then(() => this.getAllFavors())
    .then(this.handleUpdateLoggedInOrOut)
}

  renderRoutes() {
    return (
      <>
        <Switch>
            <Route path="/about" component={LandingPage} />
            <Route path="/register" component={Register} />
            <Route path="/login"  component={LoginPage} />
            <PrivateRoute path="/" exact component={HomePage} />
            <PrivateRoute path="/profile" component={Profile} />
        </Switch>      
      </>
    )
  }

  render() {

      if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }

    const value = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      email: this.state.email,
      favors: this.state.favors,
      handleLoginSuccess: this.handleLoginSuccess,
      addFavor: this.handleAddFavor,
      getAllFavors: this.getAllFavors,
      getUserProfile: this.getUserProfile
    }

  return (
    <Context.Provider value={value}>
      <NavBar />
          <main className='App'>{this.renderRoutes()}</main>
      <Footer />
    </Context.Provider>
  );
}
}

export default App;
