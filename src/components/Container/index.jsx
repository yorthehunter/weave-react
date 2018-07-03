import React from 'react';
import { oneOf, string, node } from 'prop-types';
import 'weave-ui/src/components/container/index.scss';
import CustomTag from '../CustomTag';
import { sizeModifier, positionModifier } from '../utilities/util';

const componentPrefix = 'weave-container';


/**
 * The Container contains content, which automatically pads and breaks down the
 * layout based on preset breakpoints.
 */

const Container = (props) => {
  const {
    size,
    position,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
    sizeModifier(size, componentPrefix),
    positionModifier(position, componentPrefix),
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props} >
      { children }
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'div',
  position: 'center',
  size: null,
  children: null,
};

const propTypes = {
  tag: string,
  position: oneOf([
    'left',
    'right',
    'center',
  ]),
  size: oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'full-width',
    null,
  ]),
  children: node,
};

Container.defaultProps = defaultProps;
Container.propTypes = propTypes;
export default Container;
