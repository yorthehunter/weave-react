import React from 'react';
import { string, node, bool } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-popover';

const PopoverDisplay = (props) => {
  const {
    placement,
    left,
    right,
    down,
  } = props;

  const placementModifier = () => {
    switch (true) {
      case (placement === 'left' || left):
        return `${componentPrefix}--pull-left`;
      case (placement === 'right' || right):
        return `${componentPrefix}--pull-right`;
      case (placement === 'down' || down):
        return `${componentPrefix}--centered weave-popover--down`;
      default:
        return `${componentPrefix}--centered`;
    }
  };

  const componentClasses = [
    componentPrefix,
    placementModifier(),
    props.popoverVisible && 'is-visible',
  ];

  return (
    <CustomTag
      {...props}
      componentClasses={componentClasses}
    >
      { props.children }
    </CustomTag>
  );
};


const defaultProps = {
  tag: 'div',
  placement: '',
  down: false,
  left: false,
  right: false,
  popoverVisible: false,
};

const propTypes = {
  tag: string,
  children: node.isRequired,
  placement: string,
  down: bool,
  left: bool,
  right: bool,
  popoverVisible: bool,
};

PopoverDisplay.defaultProps = defaultProps;
PopoverDisplay.propTypes = propTypes;
export default PopoverDisplay;
