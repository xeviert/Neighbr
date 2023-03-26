import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TokenService from '../Services/token-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Routes>
      <Route
        {...props}
        render={(componentProps) => {
          return TokenService.hasAuthToken() ? (
            <Component {...componentProps} />
          ) : (
            <Navigate
              to={{
                pathname: '/about',
                state: { from: componentProps.location },
              }}
            />
          );
        }}
      />
    </Routes>
  );
}
