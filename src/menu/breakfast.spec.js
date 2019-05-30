import React from 'react';
import { shallow } from 'enzyme';
import ComponentBreakfast from './breakfast.js';
describe('ComponentBreakfast', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ComponentBreakfast debug />);
  
    expect(component).toMatchSnapshot();
  });
});