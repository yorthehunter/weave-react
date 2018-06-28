import React from 'react';
import { string, bool, node } from 'prop-types';
import classNames from 'classnames';
import { positionModifier } from '../utilities/util';

const componentPrefix = 'weave-has-tooltip';


/**
 * Tooltips show very _short_ messages when content is hovered. This content
 * is usually a hint at a function or brief description of something.
 */

const Tooltip = (props) => {
  const {
    content,
    children,
    position,
  } = props;

  const componentClasses = classNames([
    componentPrefix,
    positionModifier(position, componentPrefix),
    props.hasIndicator && `${componentPrefix}-indication`,
  ]);

  return (
    <span
      className={componentClasses}
      data-tooltip={content}
    >
      { children }
    </span>
  );
};

const defaultProps = {
  content: null,
  hasIndicator: false,
  position: null,
  children: null,
};

const propTypes = {
  content: string,
  position: string,
  hasIndicator: bool,
  children: node,
};

Tooltip.defaultProps = defaultProps;
Tooltip.propTypes = propTypes;
export default Tooltip;
