import React from 'react';
import { bool, string, oneOf } from 'prop-types';
// import 'weave-ui-badge';
import { sizeModifier, positionModifier } from '../utilities/util';
import CustomTag from '../utilities/CustomTag';

import '../../../node_modules/weave-ui/src/components/ribbon/index.scss';

const componentPrefix = 'weave-ribbon';

/**
 */

const Ribbon = (props) => {
  const {
    size,
    position,
    overlay,
    responsive,
    content,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
    overlay && `${componentPrefix}--overlay`,
    responsive && `${componentPrefix}--responsive`,
    sizeModifier(size, componentPrefix),
    positionModifier(position, componentPrefix),
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {content || children}
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'span',
  overlay: true,
  size: null,
  position: 'lower-left',
  responsive: false,
  content: '',
  children: false,
};

const propTypes = {
  tag: string,
  overlay: bool,
  size: oneOf([
    'sm',
    'md',
    'lg',
    null,
  ]),
  position: oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    null,
  ]),
  responsive: bool,
  /** Ribbon content (if props.children isn't specified) */
  content: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
  /** Ribbon content (if props.content isn't specified) */
  children: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
};

Ribbon.defaultProps = defaultProps;
Ribbon.propTypes = propTypes;
export default Ribbon;
