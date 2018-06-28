import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Banner from '../';

describe('Banner renders correctly', () => {
  it('when visible with default values', () => {
    const rendered = renderer.create(<Banner visible />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('with content passed as a prop', () => {
    const rendered = renderer.create(<Banner visible content="Here's some content!" />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('with content passed as a child', () => {
    const rendered = renderer.create(<Banner visible>Test content</Banner>).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('Banner', () => {
  const bannerClass = '.weave-banner';
  const wrapper = mount(<Banner visible>Banner</Banner>);

  it('correctly handles banner type', () => {
    wrapper.setProps({ type: 'error' });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--error')).toEqual(true);
    wrapper.setProps({ type: 'success' });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--success')).toEqual(true);
    wrapper.setProps({ type: 'info' });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--info')).toEqual(true);
    wrapper.setProps({ type: 'warning' });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--warning')).toEqual(true);
    wrapper.setProps({ type: null });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--error')).toEqual(false);
  });

  it('removes itself when close button clicked', () => {
    expect(wrapper.find(bannerClass)).toHaveLength(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(bannerClass)).toHaveLength(0);
  });
});

describe('Banner renders null', () => {
  it('renders null if banner is not visible', () => {
    const bannerClass = '.weave-banner';
    const wrapper = mount(<Banner>Banner</Banner>);
    expect(wrapper.find(bannerClass)).toHaveLength(0);
  });
});
