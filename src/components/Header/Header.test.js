import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import withUser from '~/containers/user';

import Component from './index';

describe('Header component', () => {
  it('should be render.', () => {
    const MakeContainerWrapper = withUser(Component);
    const wrapper = mount(
      <BrowserRouter>
        <MakeContainerWrapper />
      </BrowserRouter>,
    );

    expect(wrapper).toBeTruthy();
  });
});
