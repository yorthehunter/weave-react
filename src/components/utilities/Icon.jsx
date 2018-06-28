import React from 'react';
import { string } from 'prop-types';
import iconPaths from './iconPaths';

const Icon = (props) => {
  const {
    width,
    height,
    name,
    color,
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      style={{ verticalAlign: 'middle' }}
    >
      <title>{name}</title>
      <path d={iconPaths[name]} fill={color} />
      <polygon points="0 0 24 0 24 24 0 24" fillOpacity="0" />
    </svg>
  );
};

const defaultProps = {
  width: '24',
  height: '24',
  color: '#000000',
};

const propTypes = {
  width: string,
  height: string,
  name: string.isRequired,
  color: string,
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default Icon;
