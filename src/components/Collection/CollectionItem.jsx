import React from 'react';
import { string, oneOf, oneOfType, bool, node } from 'prop-types';
import CustomTag from '../utilities/CustomTag';
import { sizeModifier } from '../utilities/util';

const componentPrefix = 'weave-collection__item';

/**
 * A collection item is a custom child of a <Collection> that can accept an
 * "inset" which is a padding applied to all <CollectionItem>s and can also
 * produce a UI indicator, typically a color representation of a status.
 */

const CollectionItem = (props) => {
  const {
    inset,
    indicator,
    children,
    isSelected,
  } = props;

  const componentClasses = [
    componentPrefix,
    sizeModifier(inset, 'u-inset'),
    indicator ? `weave-collection-indicator weave-collection-indicator--${indicator}` : '',
  ];

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {children}
    </CustomTag>
  );
};

const defaultProps = {
  inset: undefined,
  tag: 'li',
  indicator: undefined,
  isSelected: false,
};

const propTypes = {
  inset: oneOf([undefined, 'sm', 'md', 'lg']),
  tag: string,
  indicator: oneOfType([oneOf(['neutral', 'accent', 'success', 'alert', 'info', 'warning']), bool]),
  isSelected: bool,
  children: node.isRequired,
};

CollectionItem.propTypes = propTypes;
CollectionItem.defaultProps = defaultProps;

export default CollectionItem;
