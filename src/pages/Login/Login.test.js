import React from 'react';
import { render } from 'enzyme';

import Component from './index';

describe('Login page', () => {
  it('should be render.', () => {
    const wrapper = render(<Component />);
    expect(wrapper).toBeTruthy();
  });
});
