import React from 'react';
import { string, node, func } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-dropdown-activator';

const DropdownActivator = (props) => {
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
};

const propTypes = {
  tag: string,
  children: node.isRequired,
  onClick: func.isRequired,
};

DropdownActivator.displayName = 'DropdownActivator';
DropdownActivator.defaultProps = defaultProps;
DropdownActivator.propTypes = propTypes;
export default DropdownActivator;
