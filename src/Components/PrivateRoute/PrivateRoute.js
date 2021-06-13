import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggIN, setLoggIn] = useContext(UserContext)
  return (
    <Route
    {...rest}
    render={({ location }) =>
      loggIN.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};

export default PrivateRoute;