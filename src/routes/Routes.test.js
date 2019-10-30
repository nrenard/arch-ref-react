import React from 'react';
import { mount } from 'enzyme';

import PrivateRoute from './PrivateRoute';
import Route from './Route';

import RoutesMock, { history } from '~/__mocks__/routes';
import MockComponent from '~/__mocks__/components/Mock';

describe('Router component', () => {
  it('should be render PrivateRoute', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify('123456'));
    global.localStorage.__proto__.getItem = getItemMock;

    mount(
      <RoutesMock>
        <PrivateRoute path="/" component={MockComponent} />
        <Route path="/login" component={MockComponent} />
      </RoutesMock>,
    );

    expect(history.location.pathname).toBe('/');
    expect(getItemMock.mock.calls.length).toBe(1);
  });

  it('should be not render PrivateRoute', () => {
    const getItemMock = jest.fn().mockReturnValue(null);
    global.localStorage.__proto__.getItem = getItemMock;

    const MockPrivateComponent = () => <p>Private</p>;

    mount(
      <RoutesMock>
        <PrivateRoute path="/" component={MockPrivateComponent} />
        <Route path="/login" component={MockComponent} />
      </RoutesMock>,
    );

    expect(history.location.pathname).toBe('/login');
    expect(getItemMock.mock.calls.length).toBe(1);
  });
});
