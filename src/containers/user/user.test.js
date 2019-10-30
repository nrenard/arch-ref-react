import React from 'react';
import { mount } from 'enzyme';

import withContainer from './index';

import MockComponent from '~/__mocks__/components/Mock';

describe('User container', () => {
  it('should be render with Component.', () => {
    const MakeContainerWrapper = withContainer(MockComponent);
    const wrapper = mount(<MakeContainerWrapper />);

    expect(wrapper.contains(MockComponent)).toBe(true);
  });
});
