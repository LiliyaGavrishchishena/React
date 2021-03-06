import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// configs
import routes from '../../configs/routes';
import authSelectors from '../../redux/auth/authSelectors';

const ProtectedRoute = ({
  component: Component,
  redirectTo = routes.SIGNIN,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mstp = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mstp)(ProtectedRoute);
