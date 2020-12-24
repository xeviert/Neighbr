import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SigIn/SignIn';
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import LandingPage from './LandingPage/LandingPage';

function App() { 

  return (
    <Router>
      <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={LandingPage} />
        <Route path="/signin" component={SignIn} />
      <Footer />
    </Router>
  );
}

export default App;
