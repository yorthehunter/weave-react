import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import { sizeModifier } from '../utilities/util';

const componentPrefix = 'weave-spinner';

/**
 * Use a spinner to show that a process is taking place and that something will
 * happen after the process completes (e.g. a new UI element will appear).
 */

const Spinner = (props) => {
  const {
    size,
  } = props;

  const componentClasses = classNames([
    componentPrefix,
    sizeModifier(size, componentPrefix),
  ]);

  return (
    <svg className={componentClasses} {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle className="weave-spinner__circular-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="32" cy="32" r="29" />
    </svg>
  );
};

const defaultProps = {
  size: 'sm',
};

const propTypes = {
  size: string,
};

Spinner.defaultProps = defaultProps;
Spinner.propTypes = propTypes;
export default Spinner;
