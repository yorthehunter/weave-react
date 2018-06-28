import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../';

describe('Button component', () => {
  const buttonClass = '.weave-button';
  const wrapper = mount(<Button>Button</Button>);

  it('renders with default values', () => {
    const rendered = renderer.create(<Button>Button</Button>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('handles disabled state', () => {
    wrapper.setProps({ isDisabled: true });
    expect(wrapper.find(buttonClass).hasClass('is-disabled')).toEqual(true);
  });

  it('renders as a submit button', () => {
    const rendered = renderer.create(<Button submit>Submit Button</Button>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('correctly handles button type', () => {
    wrapper.setProps({ type: 'primary' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--primary')).toEqual(true);
    wrapper.setProps({ type: 'secondary' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--secondary')).toEqual(true);
    wrapper.setProps({ type: 'cta' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--cta')).toEqual(true);
    wrapper.setProps({ type: 'flat' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--flat')).toEqual(true);
    wrapper.setProps({ type: null });
    expect(wrapper.find(buttonClass).hasClass('weave-button--primary')).toEqual(false);
  });

  it('correctly handles button size', () => {
    wrapper.setProps({ size: 'sm' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--sm')).toEqual(true);
    wrapper.setProps({ size: 'md' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--md')).toEqual(true);
    wrapper.setProps({ size: 'lg' });
    expect(wrapper.find(buttonClass).hasClass('weave-button--lg')).toEqual(true);
    wrapper.setProps({ size: null });
    expect(wrapper.find(buttonClass).hasClass('weave-button--lg')).toEqual(false);
  });

  it('correctly renders as a link', () => {
    const props = {
      tag: 'a',
      href: 'testUrl',
      target: '_blank',
    };

    const rendered = renderer.create(<Button {...props}>Button</Button>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('correctly renders when passed an onClick function', () => {
    const rendered = renderer.create(<Button onClick={jest.fn()}>Button</Button>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
