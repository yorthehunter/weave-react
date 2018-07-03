import React from 'react';
import renderer from 'react-test-renderer';

import Container from '../';

describe('It renders correctly', () => {
  it('with default values', () => {
    const rendered = renderer.create(<Container />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('with a custom span tag', () => {
    const props = {
      tag: 'span',
    };

    const rendered = renderer.create(<Container {...props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('with values set for xs size and left positioning', () => {
    const props = {
      size: 'xs',
      position: 'left',
    };

    const rendered = renderer.create(<Container {...props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
