import React from 'react';
import { shallow } from 'enzyme';
import ComponentLunch from './lunch.js';
describe('ComponentLunch', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ComponentLunch debug />);
  
    expect(component).toMatchSnapshot();
  });
});