import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import TokenService from '../Services/token-service';
import AppContext from '../Context';

const PrivateRoute = () => {

  return (
    <AppContext.Consumer>
        {(appContext) =>
            TokenService.hasAuthToken() ? (
              <Outlet />
            ) : (
            <Navigate
              to={{
                pathname: '/about'
              }}
            />
          )}
    </AppContext.Consumer>
  );
}

export default PrivateRoute;