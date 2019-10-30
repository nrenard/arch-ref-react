import React from 'react';
import { any } from 'prop-types';
import { Redirect } from 'react-router-dom';

import { isAuthenticated } from '~/helpers/auth';

import Route from '~/routes/Route';

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(prop) => (isAuthenticated()
      ? <Component {...prop} />
      : <Redirect to={{ pathname: '/login', state: { from: prop.location } }} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: any.isRequired,
};

export default PrivateRoute;
