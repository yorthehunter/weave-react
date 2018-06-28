import React from 'react';
import { string, node, bool } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-dropdown-menu';

const DropdownMenu = (props) => {
  const {
    children,
    right,
    menuItems,
    dropdownVisible,
  } = props;

  const componentClasses =
    `${componentPrefix}`;

  return dropdownVisible ?
    (
      <CustomTag
        {...props}
        componentClasses={componentClasses}
        componentStyles={right ? { right: 0 } : {}}
      >
        {
          menuItems ?
            React.Children.map(children, child => (
              <li className={`${componentPrefix}__item`}>
                {child}
              </li>
            ))
            :
            children
        }
      </CustomTag>
    )
    :
    null;
};

const defaultProps = {
  tag: 'ul',
  menuItems: true,
  dropdownVisible: false,
  right: false,
};

const propTypes = {
  tag: string,
  menuItems: bool,
  children: node.isRequired,
  dropdownVisible: bool,
  right: bool,
};

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.propTypes = propTypes;
export default DropdownMenu;
