import React from 'react';
import { string, node, func } from 'prop-types';
import CustomTag from '../CustomTag';

const componentPrefix = 'weave-dropdown-activator';

export const DropdownActivator = (props) => {
  const componentClasses =
    `${componentPrefix}`;

  return (
    <CustomTag
      {...props}
      componentClasses={componentClasses}
      componentStyles={{ cursor: 'pointer' }}
      onClick={props.onClick}
    >
      { props.children }
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'span',
  onClick: null,
};

const propTypes = {
  tag: string,
  children: node.isRequired,
  onClick: func,
};

DropdownActivator.displayName = 'DropdownActivator';
DropdownActivator.defaultProps = defaultProps;
DropdownActivator.propTypes = propTypes;
export default DropdownActivator;
