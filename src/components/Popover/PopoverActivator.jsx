import React from 'react';
import { string, node, bool, func } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-popover-activator';

const PopoverActivator = (props) => {
  const componentClasses =
    `${componentPrefix} ${props.clickIndication ? 'weave-popover-click-indication' : ''}`;

  return (
    <CustomTag
      {...props}
      componentClasses={componentClasses}
      onClick={props.onClick}
    >
      { props.children }
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'span',
  clickIndication: false,
  onClick: null,
};

const propTypes = {
  tag: string,
  clickIndication: bool,
  children: node.isRequired,
  onClick: func,
};

PopoverActivator.defaultProps = defaultProps;
PopoverActivator.propTypes = propTypes;
export default PopoverActivator;
