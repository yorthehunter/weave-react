import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Tooltip from '../';

describe('Tooltip', () => {
  const tooltipClass = '.weave-has-tooltip';
  const component = <Tooltip content="tooltip goes here!">This text holds a tooltip!</Tooltip>;
  const wrapper = mount(component);

  it('renders correctly with default values', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('correctly handles positioning', () => {
    wrapper.setProps({ position: 'below' });
    expect(wrapper.find(tooltipClass).hasClass('weave-has-tooltip--below')).toEqual(true);
  });

  it('correctly displays click indication', () => {
    wrapper.setProps({ hasIndicator: true });
    expect(wrapper.find(tooltipClass).hasClass('weave-has-tooltip-indication')).toEqual(true);
  });
});
