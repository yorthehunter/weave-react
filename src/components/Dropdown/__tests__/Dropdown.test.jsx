import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dropdown from '../';
import DropdownActivator from '../DropdownActivator';
import DropdownMenu from '../DropdownMenu';

describe('Dropdown', () => {
  const onClickFunction = jest.fn();

  const component = (
    <Dropdown>
      <DropdownActivator onClick={onClickFunction}>Click here to open dropdown!</DropdownActivator>
      <DropdownMenu>
        <li>Dropdown</li>
        <li>Menu</li>
      </DropdownMenu>
    </Dropdown>
  );
  const wrapper = mount(component);

  it('renders correctly with default values', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('opens a DropdownMenu when DropdownActivator is clicked', () => {
    wrapper.find('.weave-dropdown-activator').simulate('click');
    expect(wrapper.find('.weave-dropdown-menu')).toExist();
  });

  it('renders with a right-aligned menu', () => {
    wrapper.setProps({ right: true });
    expect(wrapper.find('.weave-dropdown-menu')).toHaveStyle('right', 0);
  });

  it('should not call action on click inside the component', () => {
    wrapper.find('.weave-dropdown-menu').simulate('click');
    expect(onClickFunction).not.toHaveBeenCalled();
  });

  it('closes a DropdownMenu when DropdownActivator is clicked a second time', () => {
    wrapper.find('.weave-dropdown-activator').simulate('click');
    expect(wrapper.find('.weave-dropdown-menu')).not.toExist();
  });
});

describe('Dropdown', () => {
  it('renders no dropdown if no children are found', () => {
    const wrapper = shallow(<Dropdown />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders children as normal if they are not of type DropdownMenu or DropdownActivator', () => {
    const wrapper = shallow(
      <Dropdown>
        <div>Hello!</div>
      </Dropdown>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
