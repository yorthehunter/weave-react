import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Icon from '../';

describe('Icon', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon name="close" />);
    const rendered = toJson(wrapper);
    expect(rendered).toMatchSnapshot();
  });

  it('renders null if name is not valid', () => {
    const wrapper = shallow(<Icon name="blobbityBoo" />);
    const rendered = toJson(wrapper);
    expect(rendered).toMatchSnapshot();
  });
});
