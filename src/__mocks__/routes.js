import React from 'react';
import { any } from 'prop-types';
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';

export const history = createBrowserHistory();

function Routes({ children }) {
  return (
    <Router history={history}>
      <Switch>
        {children}
      </Switch>
    </Router>
  );
}

Routes.propTypes = {
  children: any.isRequired,
};

export default Routes;
