import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
  // state = {
  //   user: {},
  //   favors: [],
  //   error: null,
  //   setFavors: (favors) => {
  //     this.setState({
  //       favors,
  //       error: null,
  //     })
  //   },
  //   addFavor: (newFavor) => {
  //     this.setState({
  //         favors: [...this.state.favors, newFavor]
  //     })
  //   },
  //   getFavors: () => {
  //     fetch(`${config.API_ENDPOINT}/favors`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //         Authorization: `Bearer ${TokenService.getAuthToken()}`,
  //       }
  //     })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error(res.status)
  //         }
  //         return res.json()
  //       })
  //       .then(this.state.setFavors)
  //       .catch((error) => this.setState({ error }))
  //   },
  //   logout: () => {
  //     return this.setState({ favors: [] })
  //   }
  // }

// componentDidMount() {
//   this.setLoggedInUser()
// }

setLoggedInUser = () => {
  const jwt = TokenService.getAuthToken()
  let userId;
  if (!!jwt) {
    userId = JSON.parse(window.atob(jwt.split(".")[1])).userId;
  } else {
    userId = 0;
  }
  this.setState({
    setLoggedInUser: { loaded: true, userId }
  })
}

render() {
  return (
    <Context.Provider 
      value={{
        setLoggedInUser: null
        }}>
      <NavBar />
        <Route path="/about" component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/" exact component={HomePage} />
        <PrivateRoute path="/profile" component={Profile} />
      <Footer />
    </Context.Provider>
  );
}
}

export default App;
