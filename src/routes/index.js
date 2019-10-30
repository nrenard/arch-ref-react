import React, { lazy, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Switch } from 'react-router-dom';

import Route from './Route';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const lazyDefault = (page) => lazy(() => import(`~/pages/${page}`));

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={<p>Loading...</p>}>
        <PrivateRoute exact path="/" component={lazyDefault('Home')} />
        <Route path="/login" component={lazyDefault('Login')} />
      </Suspense>
    </Switch>
  );
}
