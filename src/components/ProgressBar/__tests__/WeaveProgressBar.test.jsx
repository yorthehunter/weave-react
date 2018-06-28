import React from 'react';
import renderer from 'react-test-renderer';

import ProgressBar from '../';

describe('It renders correctly', () => {
  it('with default values', () => {
    const rendered = renderer.create(<ProgressBar />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('as a progress indicator', () => {
    const rendered = renderer.create(<ProgressBar progress={25} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
