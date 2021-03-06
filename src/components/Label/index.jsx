import React from 'react';
import { bool, string, oneOf } from 'prop-types';
import { sizeModifier, typeModifier } from '../utilities/util';
import CustomTag from '../CustomTag';

import 'weave-ui/src/components/label/index.scss';

const componentPrefix = 'weave-label';

/**
 */

export const Label = (props) => {
  const {
    content,
    children,
    size,
    type,
    responsive,
  } = props;

  const componentClasses = [
    componentPrefix,
    sizeModifier(size, componentPrefix),
    typeModifier(type, componentPrefix),
    responsive && `${componentPrefix}--responsive`,
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {content || children}
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'span',
  size: null,
  type: null,
  responsive: false,
  content: '',
  children: false,
};

const propTypes = {
  tag: string,
  size: oneOf([
    'sm',
    'md',
    'lg',
    null,
  ]),
  type: oneOf([
    'error',
    'success',
    'warning',
    'info',
    'accent',
    'neutral',
    null,
  ]),
  responsive: bool,
  /** Label content (if props.children isn't specified) */
  content: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
  /** Label content (if props.content isn't specified) */
  children: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
};

Label.defaultProps = defaultProps;
Label.propTypes = propTypes;
export default Label;
