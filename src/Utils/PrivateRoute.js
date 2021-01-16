import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../Services/token-service'

export default function PrivateRoute({ component, ...props }) {
    const Component = component
    return (
        <Route
        {...props}
        render = {(componentProps) => {
            return TokenService.hasAuthToken() ? (
                <Component {...componentProps} />
            ) : (
                <Redirect
                to = {{
                    pathname: '/about',
                    state: { from: componentProps.location },
                }}
                />
            );
        }}
        />
    );
}