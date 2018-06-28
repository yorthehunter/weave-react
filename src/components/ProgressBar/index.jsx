import React from 'react';
import { string, number } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-progress';


/**
 * Use a progress bar when you need to show that progress is being made after
 * an action has occurred. There is both a determinate and an indeterminate
 * style, based on whether the progress is known or unknown, respectively.
 */

const ProgressBar = (props) => {
  const {
    progress,
  } = props;

  const componentClasses = [
    componentPrefix,
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      <div
        className={progress ? `${componentPrefix}__determinate` : `${componentPrefix}__indeterminate`}
        style={progress && { width: `${progress}%` }}
      />
    </CustomTag>
  );
};

const defaultProps = {
  tag: 'div',
  progress: undefined,
};

const propTypes = {
  tag: string,
  progress: number,
};

ProgressBar.defaultProps = defaultProps;
ProgressBar.propTypes = propTypes;
export default ProgressBar;
