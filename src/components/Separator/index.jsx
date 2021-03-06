import React from 'react';
import { bool } from 'prop-types';

import 'weave-ui/src/components/separator/index.scss';


/**
 *  Separate content, either vertically or horizontally. Finally! What the hell
 * did we ever do before this thing existed?!?
 */

export const Separator = (props) => (
  props.horizontal ?
    <hr className="weave-separator weave-separator--horizontal" />
    :
    <span className="weave-separator weave-separator--vertical" />
);

const defaultProps = {
  horizontal: false,
};

const propTypes = {
  horizontal: bool,
};

Separator.defaultProps = defaultProps;
Separator.propTypes = propTypes;

export default Separator;
