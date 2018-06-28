import React from 'react';
import { render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from '../';

describe('Table', () => {
  const props = {
    data: [
      'one thing',
      'two things',
      'three things',
      'four',
    ],
    headings: [
      'heading one',
      'heading two',
      'heading three',
      'heading four',
    ],
  };

  it('correctly renders a vertical table', () => {
    const wrapper = render(<Table {...props} />);
    const rendered = toJson(wrapper);
    expect(rendered).toMatchSnapshot();
  });

  it('correctly renders a horizontal table', () => {
    const wrapper = render(<Table {...props} orientation="horizontal" />);
    const rendered = toJson(wrapper);
    expect(rendered).toMatchSnapshot();
  });

  it('renders a basic table when passed a basic type', () => {
    const wrapper = render(<Table {...props} type="basic" />);
    expect(wrapper.find('.weave-table--basic').hasClass('weave-table--striped')).toEqual(false);
  });
});
