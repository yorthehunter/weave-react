import React from 'react';
import { render, mount } from 'enzyme';
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

  it('correctly renders with modifiers', () => {
    const wrapper = mount(<Table {...props} type={['striped', 'hoverable']} />);
    expect(wrapper.find('.weave-table').hasClass('weave-table--striped weave-table--hoverable')).toEqual(true);
  });
});
