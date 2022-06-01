import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import LandingPage from './LandingPage/LandingPage';
import PrivateRoute from './Utils/PrivateRoute';

export function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/about' component={LandingPage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/' exact component={HomePage} />
        <PrivateRoute path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
