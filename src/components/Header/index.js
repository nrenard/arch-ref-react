import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyles, ContentWrapper } from './styles';

export default function Header() {
  return (
    <HeaderStyles>
      <ContentWrapper>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/login">Login</Link>
      </ContentWrapper>
    </HeaderStyles>
  );
}
