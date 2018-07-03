import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Banner from '../';

describe('Banner renders correctly', () => {
  it('when visible with default values', () => {
    const rendered = renderer.create(<Banner visible />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('with content passed as a prop', () => {
    const wrapper = shallow(<Banner visible content="Here's some content!" />);
    const rendered = toJson(wrapper);
    expect(rendered).toMatchSnapshot();
  });

  it('with content passed as a child', () => {
    const rendered = renderer.create(<Banner visible>Test content</Banner>).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('with html content', () => {
    const rendered = renderer.create(<Banner visible html="<strong>Content!</strong>" />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('as null if banner is not visible', () => {
    const bannerClass = '.weave-banner';
    const wrapper = mount(<Banner>Banner</Banner>);
    expect(wrapper.find(bannerClass)).toHaveLength(0);
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

  it('is responsive', () => {
    wrapper.setProps({ responsive: true });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--responsive')).toEqual(true);
  });

  it('is flat', () => {
    wrapper.setProps({ flat: true });
    expect(wrapper.find(bannerClass).hasClass('weave-banner--flat')).toEqual(true);
  });

  it('removes itself when close button clicked', () => {
    expect(wrapper.find(bannerClass)).toHaveLength(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(bannerClass)).toHaveLength(0);
  });
});
