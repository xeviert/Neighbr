import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/about' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/' element={<HomePage />} />
        </Route>
        <Route exact path='/profile' element={<PrivateRoute />}>
          <Route exact path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
