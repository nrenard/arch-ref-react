import React from 'react';
import { bool, string } from 'prop-types';
import { Route } from 'react-router-dom';

function RouteComponent(props) {
  return <Route {...props} />;
}

RouteComponent.defaultProps = { exact: true };

RouteComponent.propTypes = {
  exact: bool,
  path: string.isRequired,
};

export default RouteComponent;
