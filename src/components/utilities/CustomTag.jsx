import React from 'react';
import classNames from 'classnames';
import { oneOfType, array, string, object, node, func } from 'prop-types';

const CustomTag = (props) => {
  const {
    componentStyles,
    componentClasses,
    className,
    style,
    tag,
    children,
  } = props;

  const Tag = tag;

  const classes = classNames(
    componentClasses,
    className,
  );

  return (
    <Tag
      style={Object.assign({}, componentStyles, style)}
      className={classes}
      href={props.href}
      value={props.value}
      type={props.type}
      ref={props.componentRef}
      onClick={props.onClick}
    >
      { children }
    </Tag>
  );
};

const propTypes = {
  tag: string.isRequired,
  className: oneOfType([
    string,
    array,
  ]),
  style: object,
  componentStyles: object,
  componentClasses: oneOfType([
    string,
    array,
  ]),
  children: node,
  href: string,
  value: string,
  type: string,
  componentRef: func,
  onClick: func,
};

const defaultProps = {
  className: null,
  componentStyles: {},
  style: {},
  componentClasses: null,
  children: null,
  href: null,
  value: null,
  type: null,
  componentRef: null,
  onClick: null,
};

CustomTag.defaultProps = defaultProps;
CustomTag.propTypes = propTypes;
export default CustomTag;
