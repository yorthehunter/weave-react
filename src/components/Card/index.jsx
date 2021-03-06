import React from 'react';
import { string, node, bool } from 'prop-types';
import 'weave-ui/src/components/card/index.scss';
import CustomTag from '../CustomTag';
import { sizeModifier } from '../utilities/util';

const componentPrefix = 'weave-card';

/**
 * Card
 */

export const Card = (props) => {
  const {
    isHoverable,
    inset,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
    sizeModifier(inset, 'p'),
    isHoverable ? `${componentPrefix}--hoverable` : null,
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {children}
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'div',
  isHoverable: false,
  inset: 'md',
  children: false,
};

const propTypes = {
  tag: string,
  isHoverable: bool,
  inset: string,
  children: node,
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;
export default Card;
