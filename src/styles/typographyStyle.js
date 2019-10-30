import { css } from 'styled-components';

export default css`
  h1 {
    font-size: 1.875rem;
    line-height: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.313rem;
  }

  h5 {
    font-size: 0.875rem;
    line-height: 1.188rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.313em;

    &.bigger {
      font-size: 1.25rem;
      line-height: 1.3em;
    }

    &.smaller {
      font-size: 0.875rem;
      line-height: 1.36em;
    }

    &.smallest {
      font-size: 0.75em;
      line-height: 1.33em;
    }

    &.light {
      font-weight: 200;
    }
  }
`;
