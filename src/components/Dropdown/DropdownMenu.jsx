import React from 'react';
import { string, node, bool } from 'prop-types';
import CustomTag from '../CustomTag';

const componentPrefix = 'weave-dropdown-menu';

export const DropdownMenuItem = ({ content }) => (
  <li className={`${componentPrefix}__item`}>{content}</li>
);

export const DropdownMenu = (props) => {
  const {
    children,
    right,
    displayAsMenuItems,
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
          displayAsMenuItems ?
            React.Children.map(children, child => (
              <DropdownMenuItem content={child} />
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
  displayAsMenuItems: false,
  dropdownVisible: false,
  right: false,
};

const propTypes = {
  tag: string,
  displayAsMenuItems: bool,
  children: node.isRequired,
  dropdownVisible: bool,
  right: bool,
};

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.propTypes = propTypes;
DropdownMenuItem.propTypes = {
  content: node.isRequired,
};
export default DropdownMenu;
