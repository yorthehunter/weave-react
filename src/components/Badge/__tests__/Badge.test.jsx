import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Badge from '../';

describe('Badge', () => {
  it('renders correctly with default values', () => {
    const rendered = renderer.create(<Badge />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('warns in the console if both content and children exist', () => {
    // Removes console.warn from appearing the Jest coverage output
    jest.spyOn(console, 'warn').mockImplementation();

    expect(console.warn).not.toHaveBeenCalled();
    shallow(<Badge content="1">2</Badge>);
    expect(console.warn).toHaveBeenCalled();
  });
});
