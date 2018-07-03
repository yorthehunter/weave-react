import React from 'react';
import { oneOfType, number, string } from 'prop-types';
import { paths, points } from './paths';

export const Icon = (props) => {
  const {
    width,
    height,
    name,
    color,
  } = props;

  const path = paths[name] || undefined;

  return (
    path ?
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        style={{ verticalAlign: 'middle' }}
      >
        <title>{name}</title>
        <path d={path} fill={color} />
        <polygon points={points} fillOpacity="0" />
      </svg>
      :
      null
  );
};

const defaultProps = {
  width: 24,
  height: 24,
  color: '#000000',
};

const numType = oneOfType([string, number]);

const propTypes = {
  /** Width & height can be number (converted to px) or string (e.g. 1rem) */
  width: numType,
  height: numType,
  /** The name of the icon, pulled from 'paths.js' */
  name: string.isRequired,
  color: string,
};

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default Icon;
