import React from 'react';
import { string, oneOf } from 'prop-types';
// import 'weave-ui-badge';
import { positionModifier } from '../utilities/util';
import CustomTag from '../utilities/CustomTag';

import 'weave-ui/src/components/badge/index.scss';

const componentPrefix = 'weave-badge';

/**
 * A badge is a small, round indicator that often sits inline or slightly overlapping
 * content of which it relates. Badges are subtle ways to "notify" the user,
 * often to signify that action is required because of a change in status.
 */

export const Badge = (props) => {
  const {
    position,
    content,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
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
  position: null,
  content: '',
  children: false,
};

const propTypes = {
  tag: string,
  position: oneOf([
    'inline',
    'upper-right',
    null,
  ]),
  /** Badge content (if props.children isn't specified) */
  content: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
  /** Badge content (if props.content isn't specified) */
  children: (props) => {
    if (props.content && props.children) {
      console.warn('Cannot have both "content" AND "children" props.');
    }
  },
};

Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;
export default Badge;
