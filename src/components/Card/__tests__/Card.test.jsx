import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../';

describe('Card', () => {
  it('renders correctly with default values', () => {
    const rendered = renderer.create(<Card />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('renders correctly as hoverable', () => {
    const rendered = renderer.create(<Card isHoverable />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
