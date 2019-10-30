import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import Header from '~/components/Header';
import GlobalStyles from '~/styles/global';
import Routes, { history } from '~/routes';

import theme from '~/styles/theme';

import withUser from '~/containers/user';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router history={history}>
          <>
            <Header />
            <Routes />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default withUser(App);
